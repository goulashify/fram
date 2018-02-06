// Generated from grammar/FramParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { ProgramContext } from './FramParserParser';
import { ScopeContext } from './FramParserParser';
import { StatementContext } from './FramParserParser';
import { VarDeclarationContext } from './FramParserParser';
import { ListenerDeclarationContext } from './FramParserParser';
import { AnimationCallContext } from './FramParserParser';
import { AnimationOptionsContext } from './FramParserParser';
import { AnimationOptionTimeContext } from './FramParserParser';
import { IdentifierContext } from './FramParserParser';
import { ExpressionContext } from './FramParserParser';
import { EventContext } from './FramParserParser';
import { PropertyAssignmentsContext } from './FramParserParser';
import { PropertyAssignmentContext } from './FramParserParser';
import { PropertyNameContext } from './FramParserParser';
import { DurationLiteralContext } from './FramParserParser';
import { PercentageLiteralContext } from './FramParserParser';
import { IntegerLiteralContext } from './FramParserParser';
import { TimeUnitContext } from './FramParserParser';
import { StringLiteralContext } from './FramParserParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FramParserParser`.
 */
export interface FramParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FramParserParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.scope`.
	 * @param ctx the parse tree
	 */
	enterScope?: (ctx: ScopeContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.scope`.
	 * @param ctx the parse tree
	 */
	exitScope?: (ctx: ScopeContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVarDeclaration?: (ctx: VarDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.varDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVarDeclaration?: (ctx: VarDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.listenerDeclaration`.
	 * @param ctx the parse tree
	 */
	enterListenerDeclaration?: (ctx: ListenerDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.listenerDeclaration`.
	 * @param ctx the parse tree
	 */
	exitListenerDeclaration?: (ctx: ListenerDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.animationCall`.
	 * @param ctx the parse tree
	 */
	enterAnimationCall?: (ctx: AnimationCallContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.animationCall`.
	 * @param ctx the parse tree
	 */
	exitAnimationCall?: (ctx: AnimationCallContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.animationOptions`.
	 * @param ctx the parse tree
	 */
	enterAnimationOptions?: (ctx: AnimationOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.animationOptions`.
	 * @param ctx the parse tree
	 */
	exitAnimationOptions?: (ctx: AnimationOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.animationOptionTime`.
	 * @param ctx the parse tree
	 */
	enterAnimationOptionTime?: (ctx: AnimationOptionTimeContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.animationOptionTime`.
	 * @param ctx the parse tree
	 */
	exitAnimationOptionTime?: (ctx: AnimationOptionTimeContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.event`.
	 * @param ctx the parse tree
	 */
	enterEvent?: (ctx: EventContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.event`.
	 * @param ctx the parse tree
	 */
	exitEvent?: (ctx: EventContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.propertyAssignments`.
	 * @param ctx the parse tree
	 */
	enterPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.propertyAssignments`.
	 * @param ctx the parse tree
	 */
	exitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	enterPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.propertyAssignment`.
	 * @param ctx the parse tree
	 */
	exitPropertyAssignment?: (ctx: PropertyAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.propertyName`.
	 * @param ctx the parse tree
	 */
	enterPropertyName?: (ctx: PropertyNameContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.propertyName`.
	 * @param ctx the parse tree
	 */
	exitPropertyName?: (ctx: PropertyNameContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.durationLiteral`.
	 * @param ctx the parse tree
	 */
	enterDurationLiteral?: (ctx: DurationLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.durationLiteral`.
	 * @param ctx the parse tree
	 */
	exitDurationLiteral?: (ctx: DurationLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.percentageLiteral`.
	 * @param ctx the parse tree
	 */
	enterPercentageLiteral?: (ctx: PercentageLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.percentageLiteral`.
	 * @param ctx the parse tree
	 */
	exitPercentageLiteral?: (ctx: PercentageLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.timeUnit`.
	 * @param ctx the parse tree
	 */
	enterTimeUnit?: (ctx: TimeUnitContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.timeUnit`.
	 * @param ctx the parse tree
	 */
	exitTimeUnit?: (ctx: TimeUnitContext) => void;

	/**
	 * Enter a parse tree produced by `FramParserParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FramParserParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;
}

