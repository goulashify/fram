lexer grammar FramLexer;

// Atoms.
OpenBrace: '{';
CloseBrace: '}';
SemiColon: ';';
Colon: ':';
Comma: ',';

// Keywords.
Animate: 'animate';
Set: 'set';
To: 'to';
When: 'when';
Is: 'is';
In: 'in';
EventVerb: 'clicked';

// Identifier.
Identifier
    : [a-zA-Z]+
    ;

// Numeric literal.
IntegerLiteral
    : '0'
    | [1-9] [0-9]*
    ;

// String literals.
StringLiteral
    : '"' ~ '"'* '"'
    ;

// Property names.
PropertyName
    : (Identifier|'-')+
    | StringLiteral
    ;

NumericUnit
    : 'ms'
    | 's'
    | '%'
    ;

// Parts the parser aren't interested in.
SingleLineComment
    : '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN)
    ;

WhiteSpace
    : [\t\r\n ]+ -> channel(HIDDEN)
    ;