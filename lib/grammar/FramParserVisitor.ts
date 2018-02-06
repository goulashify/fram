// Generated from grammar/FramParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FramParserParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FramParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FramParserParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScope?: (ctx: ScopeContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.varDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDeclaration?: (ctx: VarDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.listenerDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListenerDeclaration?: (ctx: ListenerDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.animationCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimationCall?: (ctx: AnimationCallContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.animationOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimationOptions?: (ctx: AnimationOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.animationOptionTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnimationOptionTime?: (ctx: AnimationOptionTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.event`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent?: (ctx: EventContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.propertyAssignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyAssignments?: (ctx: PropertyAssignmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.propertyAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyAssignment?: (ctx: PropertyAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.propertyName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyName?: (ctx: PropertyNameContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.durationLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDurationLiteral?: (ctx: DurationLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.percentageLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPercentageLiteral?: (ctx: PercentageLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.integerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.timeUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeUnit?: (ctx: TimeUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `FramParserParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;
}

