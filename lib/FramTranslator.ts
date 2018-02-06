import { ProgramContext } from "./grammar/FramParserParser";
import FramToECMAScriptVisitor from "./visitor/FramToECMAScriptVisitor";
import { Program } from "estree";
import { generate } from "astring";

export default class FramTranslator {
  private rootNode: ProgramContext;
  
  private ESTree?: Program = null;
  private ESSourceText?: string = null;

  constructor(rootNode: ProgramContext) {
    this.rootNode = rootNode;
  }

  /**
   * Translates Fram code to ECMAScript, designed to work in the Framer environment.
   * @return ECMAScript AST adhering to ESTree.
   */
  getECMAScriptAST() : Program {
    const translatingVisitor = new FramToECMAScriptVisitor();
    return translatingVisitor.visitProgram(this.rootNode);
  }

  /**
   * Generates ECMAScript source out of the {@link FramTranslator#getECMAScriptAST generated AST}.
   * @return generated ECMAScript source text.
   */
  getECMAScriptSourceText() : string {
    return generate(this.getECMAScriptAST());
  }

  /**
   * Translates a Fram parse tree to an ECMAScript AST.
   *
   * @see {@link FramValidator} to parse and validate fram source text.
   * 
   * @param rootNode of the Fram parse tree
   * @return ESTree compatible ECMAScript AST designed to work in the FramerJS editor.
   */
  static translateToECMAScriptAST(rootNode: ProgramContext) : Program {
    const translator = new FramTranslator(rootNode);
    return translator.getECMAScriptAST();
  } 

  /**
   * Translates a Fram parse tree to ECMAScript code.
   *
   * @see {@link FramValidator} to parse and validate fram source text.
   *
   * @param rootNode of the Fram parse tree to translate to translate and generate ECMAScript source code from.
   * @return ECMAScript source derived from the Fram parse tree.
   */
  static translateToECMAScriptSourceText(rootNode: ProgramContext) : string {
    const translator = new FramTranslator(rootNode);
    return translator.getECMAScriptSourceText();
  } 
}