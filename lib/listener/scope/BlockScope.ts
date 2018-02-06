import BaseScope from "./BaseScope";
import GlobalScope from "./GlobalScope";
import Scope from "./Scope";
import Symbol from "../symbol/Symbol";

export default class BlockScope extends BaseScope {
  constructor(enclosingScope: Scope, definitions?: Map<string, Symbol>) {
    super(enclosingScope, definitions);
  }
};