import { expect } from "chai";
import { resolve } from "path";
import { readFileSync } from "fs";
import FramValidator from "../lib/FramValidator";
import FramTranslator from "../lib/FramTranslator";
import VariableSymbol from "../lib/listener/symbol/VariableSymbol";
import { SymbolType } from "../lib/listener/symbol/Symbol";

const framSource = readFileSync(resolve(__dirname, "./data/test.fram")).toString();
const expectedJsSource = readFileSync(resolve(__dirname, "./data/test.js")).toString();
const globalSymbols = [ new VariableSymbol("playButton", SymbolType.Layer) ];

describe('The translator', () => {
  it('translates Fram to ECMAScript correctly.', () => {
    const framParseTree = FramValidator.parseAndValidate(framSource, globalSymbols);
    const generatedESSource = FramTranslator.translateToECMAScriptSourceText(framParseTree);
    
    expect(generatedESSource).to.equal(expectedJsSource);
  });
});