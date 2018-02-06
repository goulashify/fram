import { FramParserListener } from "../grammar/FramParserListener";
import { ParseTreeProperty, ParseTreeListener } from "antlr4ts/tree";
import Scope from "./scope/Scope";
import { ProgramContext, VarDeclarationContext, ScopeContext } from "../grammar/FramParserParser";
import GlobalScope from "./scope/GlobalScope";
import VariableSymbol from "./symbol/VariableSymbol";
import { variableDeclaration } from "../util/ESTreeNodes";
import BlockScope from "./scope/BlockScope";
import Symbol from "./symbol/Symbol";

/**
 * A parse tree listener to build a symbol table of all defined variables. This can be used to validate variable references,
 * in order to support forward references, this listener __must be applied before {@link ResolvingListener}__.
 * 
 * Scopes are stored for the {@link ProgramContext} and {@link ScopeContext} nodes in a {@link ParseTreeProperty} object 
 * ({@link DefiningListener#scopes}).
 * 
 * @see {@link ResolvingListener}
 */
export default class DefiningListener implements FramParserListener {
  scopes: ParseTreeProperty<Scope>;

  readonly globalScope: GlobalScope;
  currentScope: Scope;

  constructor(globalSymbols?: Array<Symbol>) {
    this.scopes = new ParseTreeProperty();
    this.globalScope = new GlobalScope();

    if (globalSymbols) {
      globalSymbols.forEach(symbol => this.globalScope.define(symbol));
    }
  }

  /**
   * When we enter the program, we set up the global scope.
   */
	enterProgram(ctx: ProgramContext) : void {
    this.currentScope = this.globalScope;
    this.scopes.set(ctx, this.currentScope);
  };

  /**
   * When we enter a scope, we create a new scope and set the current scope as it's enclosing scope.
   * We "push" the scope.
   */
  enterScope(ctx: ScopeContext) : void {
    this.currentScope = new BlockScope(this.currentScope);
    this.scopes.set(ctx, this.currentScope);
  }

  /**
   * When a variable is declared, we add it to the current scope.
   */
  enterVarDeclaration(ctx: VarDeclarationContext) : void {
    this.currentScope.define(VariableSymbol.of(ctx));
  }

  /**
   * When we exit a scope, we use it's enclosing scope as the current scope.
   * We "pop" the scope.
   */
  exitScope(ctx: ScopeContext) : void {
    this.currentScope = this.currentScope.enclosingScope;
  }
}