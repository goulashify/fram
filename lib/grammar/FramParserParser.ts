// Generated from grammar/FramParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { FramParserListener } from './FramParserListener';
import { FramParserVisitor } from './FramParserVisitor';


export class FramParserParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly OpenBrace=4;
	public static readonly CloseBrace=5;
	public static readonly SemiColon=6;
	public static readonly Colon=7;
	public static readonly Comma=8;
	public static readonly Animate=9;
	public static readonly Set=10;
	public static readonly To=11;
	public static readonly When=12;
	public static readonly Is=13;
	public static readonly In=14;
	public static readonly EventVerb=15;
	public static readonly Identifier=16;
	public static readonly IntegerLiteral=17;
	public static readonly StringLiteral=18;
	public static readonly PropertyName=19;
	public static readonly NumericUnit=20;
	public static readonly SingleLineComment=21;
	public static readonly WhiteSpace=22;
	public static readonly RULE_program = 0;
	public static readonly RULE_scope = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_varDeclaration = 3;
	public static readonly RULE_listenerDeclaration = 4;
	public static readonly RULE_animationCall = 5;
	public static readonly RULE_animationOptions = 6;
	public static readonly RULE_animationOptionTime = 7;
	public static readonly RULE_identifier = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_event = 10;
	public static readonly RULE_propertyAssignments = 11;
	public static readonly RULE_propertyAssignment = 12;
	public static readonly RULE_propertyName = 13;
	public static readonly RULE_durationLiteral = 14;
	public static readonly RULE_percentageLiteral = 15;
	public static readonly RULE_integerLiteral = 16;
	public static readonly RULE_timeUnit = 17;
	public static readonly RULE_stringLiteral = 18;
	public static readonly ruleNames: string[] = [
		"program", "scope", "statement", "varDeclaration", "listenerDeclaration", 
		"animationCall", "animationOptions", "animationOptionTime", "identifier", 
		"expression", "event", "propertyAssignments", "propertyAssignment", "propertyName", 
		"durationLiteral", "percentageLiteral", "integerLiteral", "timeUnit", 
		"stringLiteral"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'%'", "'ms'", "'s'", "'{'", "'}'", "';'", "':'", "','", "'animate'", 
		"'set'", "'to'", "'when'", "'is'", "'in'", "'clicked'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, "OpenBrace", "CloseBrace", 
		"SemiColon", "Colon", "Comma", "Animate", "Set", "To", "When", "Is", "In", 
		"EventVerb", "Identifier", "IntegerLiteral", "StringLiteral", "PropertyName", 
		"NumericUnit", "SingleLineComment", "WhiteSpace"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FramParserParser._LITERAL_NAMES, FramParserParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return FramParserParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "FramParser.g4"; }

	@Override
	public get ruleNames(): string[] { return FramParserParser.ruleNames; }

	@Override
	public get serializedATN(): string { return FramParserParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FramParserParser._ATN, this);
	}
	@RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FramParserParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.scope();
			this.state = 39;
			this.match(FramParserParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public scope(): ScopeContext {
		let _localctx: ScopeContext = new ScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FramParserParser.RULE_scope);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FramParserParser.Animate) | (1 << FramParserParser.When) | (1 << FramParserParser.Identifier))) !== 0)) {
				{
				this.state = 42; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 41;
					this.statement();
					}
					}
					this.state = 44; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FramParserParser.Animate) | (1 << FramParserParser.When) | (1 << FramParserParser.Identifier))) !== 0) );
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FramParserParser.RULE_statement);
		try {
			this.state = 51;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FramParserParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.varDeclaration();
				}
				break;
			case FramParserParser.When:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.listenerDeclaration();
				}
				break;
			case FramParserParser.Animate:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				this.animationCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public varDeclaration(): VarDeclarationContext {
		let _localctx: VarDeclarationContext = new VarDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FramParserParser.RULE_varDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.identifier();
			this.state = 54;
			this.match(FramParserParser.Is);
			this.state = 55;
			this.expression();
			this.state = 56;
			this.match(FramParserParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public listenerDeclaration(): ListenerDeclarationContext {
		let _localctx: ListenerDeclarationContext = new ListenerDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FramParserParser.RULE_listenerDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(FramParserParser.When);
			this.state = 59;
			this.identifier();
			this.state = 60;
			this.match(FramParserParser.Is);
			this.state = 61;
			this.event();
			this.state = 62;
			this.match(FramParserParser.OpenBrace);
			this.state = 63;
			this.scope();
			this.state = 64;
			this.match(FramParserParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public animationCall(): AnimationCallContext {
		let _localctx: AnimationCallContext = new AnimationCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FramParserParser.RULE_animationCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(FramParserParser.Animate);
			this.state = 67;
			this.identifier();
			this.state = 68;
			this.match(FramParserParser.Colon);
			this.state = 69;
			this.match(FramParserParser.Set);
			this.state = 70;
			this.propertyAssignments();
			this.state = 71;
			this.animationOptions();
			this.state = 72;
			this.match(FramParserParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public animationOptions(): AnimationOptionsContext {
		let _localctx: AnimationOptionsContext = new AnimationOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FramParserParser.RULE_animationOptions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.animationOptionTime();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public animationOptionTime(): AnimationOptionTimeContext {
		let _localctx: AnimationOptionTimeContext = new AnimationOptionTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FramParserParser.RULE_animationOptionTime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(FramParserParser.In);
			this.state = 77;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FramParserParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(FramParserParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FramParserParser.RULE_expression);
		try {
			this.state = 86;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,3,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.integerLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 82;
				this.durationLiteral();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 83;
				this.percentageLiteral();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 84;
				this.stringLiteral();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 85;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public event(): EventContext {
		let _localctx: EventContext = new EventContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FramParserParser.RULE_event);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(FramParserParser.EventVerb);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public propertyAssignments(): PropertyAssignmentsContext {
		let _localctx: PropertyAssignmentsContext = new PropertyAssignmentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FramParserParser.RULE_propertyAssignments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.propertyAssignment();
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===FramParserParser.Comma) {
				{
				{
				this.state = 91;
				this.match(FramParserParser.Comma);
				this.state = 92;
				this.propertyAssignment();
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public propertyAssignment(): PropertyAssignmentContext {
		let _localctx: PropertyAssignmentContext = new PropertyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FramParserParser.RULE_propertyAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.propertyName();
			this.state = 99;
			this.match(FramParserParser.To);
			this.state = 100;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public propertyName(): PropertyNameContext {
		let _localctx: PropertyNameContext = new PropertyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FramParserParser.RULE_propertyName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FramParserParser.Identifier) | (1 << FramParserParser.StringLiteral) | (1 << FramParserParser.PropertyName))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public durationLiteral(): DurationLiteralContext {
		let _localctx: DurationLiteralContext = new DurationLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FramParserParser.RULE_durationLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.integerLiteral();
			this.state = 105;
			this.timeUnit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public percentageLiteral(): PercentageLiteralContext {
		let _localctx: PercentageLiteralContext = new PercentageLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FramParserParser.RULE_percentageLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.integerLiteral();
			this.state = 108;
			this.match(FramParserParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public integerLiteral(): IntegerLiteralContext {
		let _localctx: IntegerLiteralContext = new IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FramParserParser.RULE_integerLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(FramParserParser.IntegerLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public timeUnit(): TimeUnitContext {
		let _localctx: TimeUnitContext = new TimeUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FramParserParser.RULE_timeUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			_la = this._input.LA(1);
			if ( !(_la===FramParserParser.T__1 || _la===FramParserParser.T__2) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FramParserParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(FramParserParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x18w\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x03\x02\x03\x02\x03\x03\x06\x03-\n\x03"+
		"\r\x03\x0E\x03.\x05\x031\n\x03\x03\x04\x03\x04\x03\x04\x05\x046\n\x04"+
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07"+
		"\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03"+
		"\v\x03\v\x03\v\x03\v\x03\v\x05\vY\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x07"+
		"\r`\n\r\f\r\x0E\rc\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F"+
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13"+
		"\x03\x13\x03\x14\x03\x14\x03\x14\x02\x02\x02\x15\x02\x02\x04\x02\x06\x02"+
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A"+
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02\x02\x04\x04\x02\x12\x12\x14"+
		"\x15\x03\x02\x04\x05l\x02(\x03\x02\x02\x02\x040\x03\x02\x02\x02\x065\x03"+
		"\x02\x02\x02\b7\x03\x02\x02\x02\n<\x03\x02\x02\x02\fD\x03\x02\x02\x02"+
		"\x0EL\x03\x02\x02\x02\x10N\x03\x02\x02\x02\x12Q\x03\x02\x02\x02\x14X\x03"+
		"\x02\x02\x02\x16Z\x03\x02\x02\x02\x18\\\x03\x02\x02\x02\x1Ad\x03\x02\x02"+
		"\x02\x1Ch\x03\x02\x02\x02\x1Ej\x03\x02\x02\x02 m\x03\x02\x02\x02\"p\x03"+
		"\x02\x02\x02$r\x03\x02\x02\x02&t\x03\x02\x02\x02()\x05\x04\x03\x02)*\x07"+
		"\x02\x02\x03*\x03\x03\x02\x02\x02+-\x05\x06\x04\x02,+\x03\x02\x02\x02"+
		"-.\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/1\x03\x02\x02\x02"+
		"0,\x03\x02\x02\x0201\x03\x02\x02\x021\x05\x03\x02\x02\x0226\x05\b\x05"+
		"\x0236\x05\n\x06\x0246\x05\f\x07\x0252\x03\x02\x02\x0253\x03\x02\x02\x02"+
		"54\x03\x02\x02\x026\x07\x03\x02\x02\x0278\x05\x12\n\x0289\x07\x0F\x02"+
		"\x029:\x05\x14\v\x02:;\x07\b\x02\x02;\t\x03\x02\x02\x02<=\x07\x0E\x02"+
		"\x02=>\x05\x12\n\x02>?\x07\x0F\x02\x02?@\x05\x16\f\x02@A\x07\x06\x02\x02"+
		"AB\x05\x04\x03\x02BC\x07\x07\x02\x02C\v\x03\x02\x02\x02DE\x07\v\x02\x02"+
		"EF\x05\x12\n\x02FG\x07\t\x02\x02GH\x07\f\x02\x02HI\x05\x18\r\x02IJ\x05"+
		"\x0E\b\x02JK\x07\b\x02\x02K\r\x03\x02\x02\x02LM\x05\x10\t\x02M\x0F\x03"+
		"\x02\x02\x02NO\x07\x10\x02\x02OP\x05\x14\v\x02P\x11\x03\x02\x02\x02QR"+
		"\x07\x12\x02\x02R\x13\x03\x02\x02\x02SY\x05\"\x12\x02TY\x05\x1E\x10\x02"+
		"UY\x05 \x11\x02VY\x05&\x14\x02WY\x05\x12\n\x02XS\x03\x02\x02\x02XT\x03"+
		"\x02\x02\x02XU\x03\x02\x02\x02XV\x03\x02\x02\x02XW\x03\x02\x02\x02Y\x15"+
		"\x03\x02\x02\x02Z[\x07\x11\x02\x02[\x17\x03\x02\x02\x02\\a\x05\x1A\x0E"+
		"\x02]^\x07\n\x02\x02^`\x05\x1A\x0E\x02_]\x03\x02\x02\x02`c\x03\x02\x02"+
		"\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02b\x19\x03\x02\x02\x02ca\x03\x02"+
		"\x02\x02de\x05\x1C\x0F\x02ef\x07\r\x02\x02fg\x05\x14\v\x02g\x1B\x03\x02"+
		"\x02\x02hi\t\x02\x02\x02i\x1D\x03\x02\x02\x02jk\x05\"\x12\x02kl\x05$\x13"+
		"\x02l\x1F\x03\x02\x02\x02mn\x05\"\x12\x02no\x07\x03\x02\x02o!\x03\x02"+
		"\x02\x02pq\x07\x13\x02\x02q#\x03\x02\x02\x02rs\t\x03\x02\x02s%\x03\x02"+
		"\x02\x02tu\x07\x14\x02\x02u\'\x03\x02\x02\x02\x07.05Xa";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FramParserParser.__ATN) {
			FramParserParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FramParserParser._serializedATN));
		}

		return FramParserParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	public EOF(): TerminalNode { return this.getToken(FramParserParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_program; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterProgram) listener.enterProgram(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitProgram) listener.exitProgram(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitProgram) return visitor.visitProgram(this);
		else return visitor.visitChildren(this);
	}
}


export class ScopeContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_scope; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterScope) listener.enterScope(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitScope) listener.exitScope(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitScope) return visitor.visitScope(this);
		else return visitor.visitChildren(this);
	}
}


export class StatementContext extends ParserRuleContext {
	public varDeclaration(): VarDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VarDeclarationContext);
	}
	public listenerDeclaration(): ListenerDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ListenerDeclarationContext);
	}
	public animationCall(): AnimationCallContext | undefined {
		return this.tryGetRuleContext(0, AnimationCallContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_statement; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterStatement) listener.enterStatement(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitStatement) listener.exitStatement(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitStatement) return visitor.visitStatement(this);
		else return visitor.visitChildren(this);
	}
}


export class VarDeclarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Is(): TerminalNode { return this.getToken(FramParserParser.Is, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(FramParserParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_varDeclaration; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterVarDeclaration) listener.enterVarDeclaration(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitVarDeclaration) listener.exitVarDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitVarDeclaration) return visitor.visitVarDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class ListenerDeclarationContext extends ParserRuleContext {
	public When(): TerminalNode { return this.getToken(FramParserParser.When, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Is(): TerminalNode { return this.getToken(FramParserParser.Is, 0); }
	public event(): EventContext {
		return this.getRuleContext(0, EventContext);
	}
	public OpenBrace(): TerminalNode { return this.getToken(FramParserParser.OpenBrace, 0); }
	public scope(): ScopeContext {
		return this.getRuleContext(0, ScopeContext);
	}
	public CloseBrace(): TerminalNode { return this.getToken(FramParserParser.CloseBrace, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_listenerDeclaration; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterListenerDeclaration) listener.enterListenerDeclaration(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitListenerDeclaration) listener.exitListenerDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitListenerDeclaration) return visitor.visitListenerDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class AnimationCallContext extends ParserRuleContext {
	public Animate(): TerminalNode { return this.getToken(FramParserParser.Animate, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public Colon(): TerminalNode { return this.getToken(FramParserParser.Colon, 0); }
	public Set(): TerminalNode { return this.getToken(FramParserParser.Set, 0); }
	public propertyAssignments(): PropertyAssignmentsContext {
		return this.getRuleContext(0, PropertyAssignmentsContext);
	}
	public animationOptions(): AnimationOptionsContext {
		return this.getRuleContext(0, AnimationOptionsContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(FramParserParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_animationCall; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterAnimationCall) listener.enterAnimationCall(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitAnimationCall) listener.exitAnimationCall(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitAnimationCall) return visitor.visitAnimationCall(this);
		else return visitor.visitChildren(this);
	}
}


export class AnimationOptionsContext extends ParserRuleContext {
	public animationOptionTime(): AnimationOptionTimeContext {
		return this.getRuleContext(0, AnimationOptionTimeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_animationOptions; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterAnimationOptions) listener.enterAnimationOptions(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitAnimationOptions) listener.exitAnimationOptions(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitAnimationOptions) return visitor.visitAnimationOptions(this);
		else return visitor.visitChildren(this);
	}
}


export class AnimationOptionTimeContext extends ParserRuleContext {
	public In(): TerminalNode { return this.getToken(FramParserParser.In, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_animationOptionTime; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterAnimationOptionTime) listener.enterAnimationOptionTime(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitAnimationOptionTime) listener.exitAnimationOptionTime(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitAnimationOptionTime) return visitor.visitAnimationOptionTime(this);
		else return visitor.visitChildren(this);
	}
}


export class IdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(FramParserParser.Identifier, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_identifier; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterIdentifier) listener.enterIdentifier(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitIdentifier) listener.exitIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) return visitor.visitIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, IntegerLiteralContext);
	}
	public durationLiteral(): DurationLiteralContext | undefined {
		return this.tryGetRuleContext(0, DurationLiteralContext);
	}
	public percentageLiteral(): PercentageLiteralContext | undefined {
		return this.tryGetRuleContext(0, PercentageLiteralContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_expression; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class EventContext extends ParserRuleContext {
	public EventVerb(): TerminalNode { return this.getToken(FramParserParser.EventVerb, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_event; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterEvent) listener.enterEvent(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitEvent) listener.exitEvent(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitEvent) return visitor.visitEvent(this);
		else return visitor.visitChildren(this);
	}
}


export class PropertyAssignmentsContext extends ParserRuleContext {
	public propertyAssignment(): PropertyAssignmentContext[];
	public propertyAssignment(i: number): PropertyAssignmentContext;
	public propertyAssignment(i?: number): PropertyAssignmentContext | PropertyAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyAssignmentContext);
		} else {
			return this.getRuleContext(i, PropertyAssignmentContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FramParserParser.Comma);
		} else {
			return this.getToken(FramParserParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_propertyAssignments; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterPropertyAssignments) listener.enterPropertyAssignments(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitPropertyAssignments) listener.exitPropertyAssignments(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitPropertyAssignments) return visitor.visitPropertyAssignments(this);
		else return visitor.visitChildren(this);
	}
}


export class PropertyAssignmentContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public To(): TerminalNode { return this.getToken(FramParserParser.To, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_propertyAssignment; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterPropertyAssignment) listener.enterPropertyAssignment(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitPropertyAssignment) listener.exitPropertyAssignment(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitPropertyAssignment) return visitor.visitPropertyAssignment(this);
		else return visitor.visitChildren(this);
	}
}


export class PropertyNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(FramParserParser.Identifier, 0); }
	public PropertyName(): TerminalNode | undefined { return this.tryGetToken(FramParserParser.PropertyName, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(FramParserParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_propertyName; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterPropertyName) listener.enterPropertyName(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitPropertyName) listener.exitPropertyName(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitPropertyName) return visitor.visitPropertyName(this);
		else return visitor.visitChildren(this);
	}
}


export class DurationLiteralContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext {
		return this.getRuleContext(0, IntegerLiteralContext);
	}
	public timeUnit(): TimeUnitContext {
		return this.getRuleContext(0, TimeUnitContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_durationLiteral; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterDurationLiteral) listener.enterDurationLiteral(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitDurationLiteral) listener.exitDurationLiteral(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitDurationLiteral) return visitor.visitDurationLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class PercentageLiteralContext extends ParserRuleContext {
	public integerLiteral(): IntegerLiteralContext {
		return this.getRuleContext(0, IntegerLiteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_percentageLiteral; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterPercentageLiteral) listener.enterPercentageLiteral(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitPercentageLiteral) listener.exitPercentageLiteral(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitPercentageLiteral) return visitor.visitPercentageLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class IntegerLiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(FramParserParser.IntegerLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_integerLiteral; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterIntegerLiteral) listener.enterIntegerLiteral(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitIntegerLiteral) listener.exitIntegerLiteral(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) return visitor.visitIntegerLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class TimeUnitContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_timeUnit; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterTimeUnit) listener.enterTimeUnit(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitTimeUnit) listener.exitTimeUnit(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitTimeUnit) return visitor.visitTimeUnit(this);
		else return visitor.visitChildren(this);
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode { return this.getToken(FramParserParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FramParserParser.RULE_stringLiteral; }
	@Override
	public enterRule(listener: FramParserListener): void {
		if (listener.enterStringLiteral) listener.enterStringLiteral(this);
	}
	@Override
	public exitRule(listener: FramParserListener): void {
		if (listener.exitStringLiteral) listener.exitStringLiteral(this);
	}
	@Override
	public accept<Result>(visitor: FramParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) return visitor.visitStringLiteral(this);
		else return visitor.visitChildren(this);
	}
}


