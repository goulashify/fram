import { ProgramContext, FramParserParser } from "./grammar/FramParserParser";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { configureDefaultParser } from "./util/ParserConfiguration";
import { FramParserLexer } from "./grammar/FramParserLexer";
import DefiningListener from "./listener/DefiningListener";
import ResolvingListener from "./listener/ResolvingListener";
import { ParseTreeWalker } from "antlr4ts/tree";
import Symbol from "./listener/symbol/Symbol";


/**
 * Parses and validates Fram source code.
 */
export default class FramValidator {
  protected readonly sourceText: string;
  protected readonly sourceStream: ANTLRInputStream;
  protected readonly globalSymbols?: Array<Symbol>;

  protected rootNode?: ProgramContext = null;
  

  constructor(sourceText: string, globalSymbols?: Array<Symbol>) {
    this.sourceText = sourceText;
    this.sourceStream = new ANTLRInputStream(sourceText);
    this.globalSymbols = globalSymbols;
  }

  parseAndValidate() : ProgramContext {
    if (this.rootNode === null) {
      // We haven't parsed it yet.
      this.rootNode = this.parseSourceText();
    }

    // Build the symbol table.
    const definingListener = new DefiningListener(this.globalSymbols);
    ParseTreeWalker.DEFAULT.walk(definingListener, this.rootNode);

    // Resolve all variable references.
    const resolvingListener = new ResolvingListener(definingListener.scopes);
    ParseTreeWalker.DEFAULT.walk(resolvingListener, this.rootNode);

    return this.rootNode;
  }

  /**
   * Derives a parse tree from the source text.
   */
  private parseSourceText() : ProgramContext {
    const lexer = new FramParserLexer(this.sourceStream);
    const tokens  = new CommonTokenStream(lexer);
    const parser = this.configureParser(new FramParserParser(tokens));

    return parser.program();
  }

  /**
   * Configures the parse tree, if you subclass this validator for an editor for example,
   * this may be extended to your liking (adding a custom {@link ANTLRErrorListener} for example).
   * 
   * @see {@link configureDefaultParser} for examples.
   */
  protected configureParser(parser: FramParserParser) : FramParserParser {
    return configureDefaultParser(parser);
  }

  static parseAndValidate(sourceText: string, globalSymbols?: Array<Symbol>) : ProgramContext {
    const validator = new FramValidator(sourceText, globalSymbols);
    return validator.parseAndValidate();
  }
}