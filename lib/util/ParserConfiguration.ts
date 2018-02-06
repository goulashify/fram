import { FramParserParser } from "../grammar/FramParserParser";
import SyntaxErrorListener from "../listener/SyntaxErrorListener";

/**
 * Applies default configuration to the Fram parser, such as error listeners, etc.
 */
export const configureDefaultParser = (parser: FramParserParser) : FramParserParser => {
  parser.removeErrorListeners();
  parser.addErrorListener(new SyntaxErrorListener());

  return parser;
}