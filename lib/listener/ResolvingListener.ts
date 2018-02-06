import { FramParserListener } from "../grammar/FramParserListener";
import { ParseTreeProperty, ParseTreeWalker, ParseTreeListener } from "antlr4ts/tree";
import Scope from "./scope/Scope";
import { VarDeclarationContext, IdentifierContext, ProgramContext, ScopeContext } from "../grammar/FramParserParser";
import BlockScope from "./scope/BlockScope";
import IllegalReferenceError from "./error/IllegalReferenceError";

/**
 * Resolves variable references based on the symbol table built by {@link DefiningListener},
 * must be __applied after {@link DefiningListener}__.
 *  
 * @see {@link DefiningListener}
 */
export default class ResolvingListener implements FramParserListener {
  private readonly scopes: ParseTreeProperty<Scope>;
  private currentScope: Scope;

  constructor(scopes: ParseTreeProperty<Scope>) {
    this.scopes = scopes;
  }

  /**
   * When we enter the program we set the current scope to the global scope.
   */
  enterProgram(ctx: ProgramContext) {
    this.currentScope = this.scopes.get(ctx);
  }

  /**
   * When we enter a scope, we set the current scope to the scope of the scope block.
   */
  enterScope(ctx: ScopeContext) {
    this.currentScope = this.scopes.get(ctx);
  }

  /**
   * When we exit a scope, we set the current scope to the enclosing scope of the current scope.
   */
  exitScope(ctx: ScopeContext) {
    this.currentScope = this.currentScope.enclosingScope;
  }

  /**
   * When we enter an identifier node, we'll try to resolve it in the current scope, 
   * if it fails we throw an error.
   */
  enterIdentifier(ctx: IdentifierContext) : void {
    if (this.currentScope.resolve(ctx.text) === null) {
      throw new IllegalReferenceError(this.currentScope, ctx);
    }
  }
}