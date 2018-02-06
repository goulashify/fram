import Symbol from '../symbol/Symbol';
import Scope from './Scope';

export default abstract class BaseScope implements Scope {
  public readonly enclosingScope?: Scope;
  private definitions: Map<string, Symbol>;

  constructor(enclosingScope?: Scope, definitions?: Map<string, Symbol>) {
    this.enclosingScope = enclosingScope;
    this.definitions = definitions ||  new Map<string, Symbol>();
  }

  /**
   * Defines a symbol in the current scope.
   * @param symbol to add to the scope.
   */
  define(symbol: Symbol) : void {
    this.definitions.set(symbol.name, symbol);
  }

  /**
   * Resolves a symbol in the current and (if exist) enclosing scope(s).
   * @param symbolName to resolve.
   * @returns {Symbol|null} resolved symbol or null.
   */
  resolve(symbolName: string) : Symbol | null {
    if (this.definitions.has(symbolName)) {
      return this.definitions.get(symbolName);
    }

    if (this.enclosingScope === null) {
      return null;
    }

    return this.enclosingScope.resolve(symbolName);
  }
}