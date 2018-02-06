import { ANTLRErrorListener } from 'antlr4ts';

/**
 * Throws an error if a syntax error occurs.
 */
export default class SyntaxErrorListener implements ANTLRErrorListener<void> {
  syntaxError(recognizer, offendingSymbol, line, column, message, e) {
    throw new Error(`Ouch. There's a syntax error on line ${line}:${column} - ${message}.`);
  }
}