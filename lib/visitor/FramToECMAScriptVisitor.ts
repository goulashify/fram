import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { flatten } from "lodash";

import {
  ProgramContext, VarDeclarationContext, ListenerDeclarationContext, AnimationCallContext, PropertyAssignmentContext,
  PropertyAssignmentsContext, AnimationOptionsContext, AnimationOptionTimeContext, EventContext, StringLiteralContext,
  ExpressionContext, IntegerLiteralContext, IdentifierContext, StatementContext, DurationLiteralContext, PercentageLiteralContext, PropertyNameContext
} from "../grammar/FramParserParser";

import { 
  program, identifier,  literal,  variableDeclaration,  variableDeclarator,  expressionStatement,  
  callExpression,  memberExpression,  objectExpression,  property,  arrowFunctionExpression,  blockStatement
} from "../util/ESTreeNodes";

import {
  Program, Identifier, Literal, VariableDeclaration, VariableDeclarator, ExpressionStatement, CallExpression,
  MemberExpression, ObjectExpression, Property, ArrowFunctionExpression, BlockStatement, Expression, 
  Statement, BaseNode
} from "estree";

import { FramParserVisitor } from "../grammar/FramParserVisitor";

// Maps from the event verbs used in listener declarations to keys in the Event object in Framer.
const EVENT_TABLE = {
  'clicked': 'Click'
}

/**
 * Converts a Fram parse tree to a ECMAScript AST (ESTree spec).
 */
export default class FramToECMAScriptVisitor extends AbstractParseTreeVisitor<BaseNode> implements FramParserVisitor<BaseNode> {
  
  defaultResult() {
    return null;
  }

  visitProgram(ctx: ProgramContext) : Program {
    return program(
      ctx.scope().statement().map(stmntCtx => this.visitStatement(stmntCtx))
    );
  }

  visitStatement(ctx: StatementContext) : Statement { 
    const varDecalaration = ctx.varDeclaration();
    const listenerDeclaration = ctx.listenerDeclaration();
    const animationCall = ctx.animationCall();

    if (varDecalaration) return this.visitVarDeclaration(varDecalaration);
    if (listenerDeclaration) return this.visitListenerDeclaration(listenerDeclaration);
    if (animationCall) return this.visitAnimationCall(animationCall);

    throw new Error(`No suitable alternative found at Statement: ${ctx}, with children: ${ctx.children}.`);
  }

  visitVarDeclaration(ctx: VarDeclarationContext) : VariableDeclaration {
    return variableDeclaration(
      [
        variableDeclarator(
          this.visitIdentifier(ctx.identifier()),
          this.visitExpression(ctx.expression())
        )
      ]
    );
  }

  visitListenerDeclaration(ctx: ListenerDeclarationContext) : ExpressionStatement {
    return expressionStatement(
      callExpression(
        memberExpression(
          this.visitIdentifier(ctx.identifier()),
          identifier("on")
        ),

        [
          this.visitEvent(ctx.event()),
          arrowFunctionExpression(
            blockStatement(
              ctx.scope().statement().map(stmntCtx => this.visitStatement(stmntCtx))
            )
          )
        ]
      )
    );
  }

  visitAnimationCall(ctx: AnimationCallContext) : ExpressionStatement {
    // Create an object from the setters.
    const animationArgument = this.visitPropertyAssignments(ctx.propertyAssignments());

    // Add the options object to the setters.
    animationArgument.properties.push(
      property(
        identifier("options"),
        this.visitAnimationOptions(ctx.animationOptions())
      )
    );

    return expressionStatement(
      callExpression(
        memberExpression(
          this.visitIdentifier(ctx.identifier()),
          identifier("animate")
        ),
        [ animationArgument ]
      )
    );
  }

  /**
   * Creates an object from the property assignments.
   * eg: set color to blue, opacity to 0% -> {color: "blue", opacity: 0};
   */
  visitPropertyAssignments(ctx: PropertyAssignmentsContext) : ObjectExpression {
    return objectExpression(
      ctx.propertyAssignment().map(propertyAssignmentCtx => this.visitPropertyAssignment(propertyAssignmentCtx))
    );
  }

  visitPropertyAssignment(ctx: PropertyAssignmentContext) : Property {
    return property(
      this.visitPropertyName(ctx.propertyName()),
      this.visitExpression(ctx.expression())
    );
  }

  visitAnimationOptions(ctx: AnimationOptionsContext) : ObjectExpression {
    let options = [];
    
    const timeOption = ctx.animationOptionTime();
    if(timeOption) options.push(this.visitAnimationOptionTime(timeOption));

    return objectExpression(options);
  }

  visitAnimationOptionTime(ctx: AnimationOptionTimeContext) : Property {
    return property(
      identifier("time"),
      this.visitExpression(ctx.expression())
    );
  }

  /**
   * Converts event verbs to a member expression to the Events object of Framer.
   * See> https://framer.com/docs/#events.events
   */
  visitEvent(ctx: EventContext) : MemberExpression {
    const eventPropertyName = EVENT_TABLE[ctx.text.toLowerCase()];
    
    return memberExpression(
      identifier("Events"),
      identifier(eventPropertyName)
    );
  }

  visitExpression(ctx: ExpressionContext) : Expression {
    const [
      percentageLiteral,
      durationLiteral,
      integerLiteral,
      stringLiteral, 
      identifier
    ] = [
      ctx.percentageLiteral(),
      ctx.durationLiteral(),
      ctx.integerLiteral(),
      ctx.stringLiteral(), 
      ctx.identifier()
    ];

    if (percentageLiteral) return  this.visitPercentageLiteral(percentageLiteral);
    if (durationLiteral) return  this.visitDurationLiteral(durationLiteral);
    if (integerLiteral) return this.visitIntegerLiteral(integerLiteral);
    if (stringLiteral) return this.visitStringLiteral(stringLiteral);
    if (identifier) return this.visitIdentifier(identifier);

    throw new Error(`No suitable alternative found at Expression: ${ctx}, with children: ${ctx.children}.`);
  }

  /*
   * Literals. 
   */

   /**
    * "color" -> "color"
    * color -> "color"
    */
  visitStringLiteral(ctx: StringLiteralContext) : Literal {
    const normalizedString = ctx.text.replace(/"/g, "");
    return literal(normalizedString, `"${normalizedString}"`);
  }

  /**
   * 5 -> 5
   */
  visitIntegerLiteral(ctx: IntegerLiteralContext) : Literal {
    const value = ctx.text;
    return literal(parseInt(ctx.text), ctx.text);
  }

  /**
   * Converts to milliseconds.
   * 1ms -> 1
   * 1s -> 1000
   */
  visitDurationLiteral(ctx: DurationLiteralContext) : Literal {
    const unit = ctx.timeUnit().text;
    const value = parseInt(ctx.integerLiteral().text);
    
    let convertedValue = null;
    if (unit === 'ms') convertedValue = value;
    if (unit === 's') convertedValue = value * 1000;

    if (convertedValue === null) {
      throw new Error(`Unmatched time unit: ${unit} on node ${ctx} supported units are: "ms", "s".`);
    }
    
    return literal(convertedValue, convertedValue.toString());
  }

  /**
   * All percentages are divied by 100.
   * 5% -> 0.05
   */
  visitPercentageLiteral(ctx: PercentageLiteralContext) : Literal {
    const convertedValue = parseInt(ctx.integerLiteral().text) / 100;
    return literal(convertedValue, convertedValue.toString());
  }

  visitIdentifier(ctx: IdentifierContext) : Identifier {
    return identifier(ctx.text);
  }

  /**
   * Converts property names to string literals (to be used as keys in Property nodes)
   * border-height -> "border-height"
   * color -> "color"
   */
  visitPropertyName(ctx: PropertyNameContext) : Literal {
    const normalizedString = ctx.text.replace(/"/g, "");
    return literal(normalizedString, `"${normalizedString}"`);
  }
}