import { IdentifierContext } from '../../grammar/FramParserParser';
import Scope from '../scope/Scope';

/**
 * Thrown when a variable is referenced, but can not be resolved.
 */
export default class IllegalReferenceError extends Error {
  readonly identifier: IdentifierContext;
  readonly scope: Scope;

  constructor(scope: Scope, identifier: IdentifierContext) {
    super(
      `
        Failed to resolve variable "${identifier.text}" in scope ${scope}, there's no such variable.
      `
    );

    this.scope = scope;
    this.identifier = identifier;
  }
}