# Fram
A small domain specific language which compiles to JS and assumes the environment of the Framer Editor.

# Synopsis

To build the project you need to satisfy the dependencies here (see below) and [ANTLR4TS's dependencies](https://github.com/tunnelvisionlabs/antlr4ts#development-requirements) (for building the grammar).

* To install dependencies: `npm i`
* To build the project: `npm build`
* To build the grammar: `npm run build-grammar`

* To run the tests: `npm run test`
* To watch changes and re-run tests: `npm run test -- --watch`

# Why the heck is this?

I guess the intimidation from all the weird stuff people need to know to get started with the cool programming stuff sometimes may be an entry barrier too high.

This language is a try to smoothe the learning curve, the goal was to get as close as possible to what a designer would write on a paper
in English, this DSL-ish thing is intended as a gateway drug to real, general programming languages, so the basic concepts (variables, scoping, 
calls, event listeners) are in there, just in a different way, i hope it may alleviate some of the fears people have when they are just getting started.

### Syntactic sugar, and?

Yeah, yeah, it's an evil programming language, just  with a nice(r) front, so it still has scoping and variables and all that, and it may feel like
_CONFUSING ARRGGH_ for the first time. After talking to a minimal amount of designers (2), i think there's a fix for that, but it's not syntactical, 
it turns out designers favor and understand concepts better when visualized. 🤔

I guess - this is just a sketch - [visualizing](https://framer.cloud/NWela) scopes, providing outstanding tooling and the friendliest error handling ever™ in a way that it's
easy to slip out from this sandbox world into the real JS environment may be an acceptable first try to help people adapt to the good stuff faster.

![tell me more?](http://s2.quickmeme.com/img/b5/b5eab4c065e2346bad148c958bff485eba0be293ee2be85a1185dd7d2328054c.jpg)

# What the heck is this?

It's a kind of language, for animations and stuff. It looks like this:

```
// Comments look like this, you can leave them here to remember stuff, it's like the sticky note of the internets. 📚

fastTime is 50ms; // You can say things are something, like define what they mean, build your own vocabulary, woo-woo!

animate playButton: set color to tomato in 120ms; // You can make things change! This will change playButton's color to tomato in 120ms. Fab!
animate playButton: set color to papayawhip in fastTime; // You can just say fastTime, if you tell the language what it is.

// You can react to other people doing things. 🆒
when playButton is clicked {
    // Hide the button because the video starts.
    animate playButton: set opacity to 0% in fastTime;
}

// OH DID I MENTIONED YOU CAN DO THE LOCO LOCO? 🏄🏿
animate playButton: set
    opacity to 0%,
    color to blue,
    border-color to "#333",
    border-radius to "12px"
    in 10ms; // <- the semicolon thingie is important business around here, don't forget to put it at the end of animations and when you define stuff!
```

### Imagined use

This may be used inside the Framer Editor, as embedded Fram instead of [embedded JavaScript](http://coffeescript.org/#embedded), a precompiler could
go through it before CoffeeScript's compiler does and convert Fram to JavaScript. This way people could make things easy inside the embedded Fram,
but could get out as soon as they feel ready. :)

This approach may make everything way harder at the tooling part.

# Integrating

You can get started parsing, validating and translating Fram like this:

```js
import { FramTranslator, FramValidator } from 'fram';
import { SymbolType } from 'fram/listener/symbol/Symbol';
import VariableSymbol from 'fram/listener/symbol/VariableSymbol';

const sourceCode = "niceRed is tomato;" // Get the Fram source text.
const globalVariables = [new VariableSymbol("playButton", SymbolType.Layer)]; // Declare your global variables, such as layers (optional in FramValidator).

const rootNode = FramValidator.parseAndValidate(sourceCode, globalVariables); // This parses Fram code and checks the scopes and references.
const esTree = FramTranslator.translateToECMAScriptAST(rootNode); // ESTree spec AST.
const esCode = FramTranslator.translateToECMAScriptSourceText(rootNode); // Generated ECMAScript source code. 
```

For more information, please see classes `FramTranslator` and `FramValidator`.

# What's up?

These:
* add a bit of test coverage
* add the friendliest error handling ever™
* add syntax for timing curves
* add syntax for states
* _as a side project_: editor [visualizing scopes](https://framer.cloud/NWela)?
* add syntax for [animation](https://framer.com/docs/#animation.properties) instances?
* bunch of other stuff in my mind! 🙋‍♂️

### Disclaimer

I have no idea what i'm doing or if it's useful or future-proof at any degree, just trying around.

