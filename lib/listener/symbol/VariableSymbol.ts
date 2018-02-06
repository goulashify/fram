import Symbol, { SymbolType } from './Symbol';
import { VarDeclarationContext } from '../../grammar/FramParserParser';

export default class VariableSymbol implements Symbol {
  readonly name: string;
  readonly type: SymbolType;

  constructor(name: string, type: SymbolType) {
    this.name = name;
    this.type = type;
  }

  /**
   * Creates a symbol out of the variable declaration, the {@link SymbolType type} is determined
   * based on the expression inside.
   */
  static of(ctx: VarDeclarationContext) : VariableSymbol {
    const name = ctx.identifier().text;
    const expression = ctx.expression();

    if (expression.identifier() !== null) return new VariableSymbol(name, SymbolType.Reference);
    if (expression.stringLiteral() !== null) return new VariableSymbol(name, SymbolType.String);
    if (expression.integerLiteral() !== null) return new VariableSymbol(name, SymbolType.Integer);
    if (expression.durationLiteral() !== null) return new VariableSymbol(name, SymbolType.Duration);
    if (expression.percentageLiteral() !== null) return new VariableSymbol(name, SymbolType.Percentage);

    throw new Error(`Unrecognized literal type at expression: ${expression}.`);
  }
}