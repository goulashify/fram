import { expect } from "chai";
import FramValidator from "../lib/FramValidator";
import { SymbolType } from "../lib/listener/symbol/Symbol";
import VariableSymbol from "../lib/listener/symbol/VariableSymbol";

const globalVariables = [ new VariableSymbol("x", SymbolType.Layer) ];
const parse = (sourceText: string) => FramValidator.parseAndValidate(sourceText, globalVariables);

describe("The parser", () => {
  describe("when parsing variable declaration", () => {
    describe("with numeric literals", () => {
      it("should throw if floating points are specified", () => expect(() => parse("aNumber is 1.1;")).to.throw());
      it("should throw if other than recognized postfixes are used", () => expect(() => parse("aNumber is 1dpi;")).to.throw());

      it("should recognize decimal integers", () => parse("aNumber is 1;"));
      it("should recognize decimal integer percentages", () => parse("thePortionOfHummusIEat is 99%;"));
    });

    describe("with numeric time literals", () => {
      it("should recognize decimal integer milliseconds", () => parse("notMuchTime is 80ms;"));
      it("should recognize decimal integer seconds", () => parse("theTimeToRemoveTheFilter is 300s;"));
    });

    describe("with string literals", () => {
      it("should throw if there's a double quote in the string", () => expect(() => parse(`someValue is "maybe"SomeOther";`)).to.throw())
      it("should recognize the string", () => parse(`someValue is "maybeSomeOther";`))
    });
  });

  describe("when parsing an animation statement", () => {
    it("should throw if there's no target layer", () => expect(() => parse("animate: set x to 0 in 1ms;").to.throw()));
    it("should throw if there's no property assignment", () => expect(() => parse("animate x: in 1ms;").to.throw()));
    it("should throw if there's no time", () => expect(() => parse("animate x: set x to 0;").to.throw()));

    it("should recognize a single property assignment", () => parse("animate x: set x to 0 in 50ms;"));
    it("should recognize a chained property assignment", () => parse("animate x: set x to 0, d to 11% in 50ms;"));
  });

  describe("when parsing an event listener declaration", () => {
    it("should throw if there's no target layer", () => expect(() => parse("when is clicked {}").to.throw()));
    it("should throw if there's no body", () => expect(() => parse("when x is clicked {}").to.throw()));
    it("should throw if there's no event", () => expect(() => parse("when x is {}").to.throw()));
    it("should throw if there's an unknown event", () => expect(() => parse("when x is spooked {}").to.throw()));
    
    it("should recognize with an empty body", () => parse("when x is clicked {}"));
    it("should recognize with a non-empty empty body", () => parse("when x is clicked { animate x: set x to 0 in 50ms; }"));
    it("should recognize with multiple statements in body", () => parse(
      `when x is clicked { 
        animate x: set x to 0 in 50ms;
        animate x: set x to 100 in 5ms;
      }`
    ));
  });

  describe("when resolving symbols", () => {
    it("should throw if a symbol is unresolvable in the global scope", () => expect(() => parse("stuff is b;").to.throw()));
    
    it("should resolve symbols from the global scopes", () => parse("someVar is x;"))
    it("should resolve symbols from enclosing scope", () => parse(
      ` niceBlue is "blue";
        when x is clicked { animate x: set color to niceBlue in 10ms; }
      `
    ));
    it("should resolve symbols from enclosing scopes", () => parse(
      ` niceBlue is "blue";
        when x is clicked { 
          when x is clicked {
            animate x: set color to niceBlue in 10ms; 
          }
        }
      `
    ));
    
    // Some sanity checks.
    it("symbols shouldn't be resolvable in child scopes from parent scopes", () => expect(() => parse(
      `
      animate x: set color to niceColor in 10ms;
      when x is clicked { niceColor is "blue"; }
      `
    ).to.throw()));
    
    it("scopes at the same level of nesting shouldn't see to each other", () => expect(() => parse(
      `
      when x is clicked { niceColor is "blue"; }
      when x is clicked { animate x: set color to niceColor in 10ms; }
      `
    ).to.throw()));
  })
});