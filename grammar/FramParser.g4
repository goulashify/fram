grammar FramParser;

import FramLexer;

program
    : scope EOF
    ;

scope
    : (statement+)?
    ;

statement
    : varDeclaration
    | listenerDeclaration
    | animationCall
    ;

varDeclaration
    : identifier Is expression SemiColon
    ;

listenerDeclaration
    : When identifier Is event OpenBrace scope CloseBrace
    ;

animationCall
    : Animate identifier Colon Set propertyAssignments animationOptions SemiColon
    ;

animationOptions
    : animationOptionTime
    ;

animationOptionTime
    : In expression
    ;

identifier
    : Identifier
    ;

expression
    : integerLiteral
    | durationLiteral
    | percentageLiteral
    | stringLiteral
    | identifier
    ;

event
    : EventVerb
    ;

propertyAssignments
    : propertyAssignment (Comma propertyAssignment)*
    ;

propertyAssignment
    : propertyName To expression
    ;

propertyName
    : Identifier
    | PropertyName
    | StringLiteral
    ;

durationLiteral
    : integerLiteral timeUnit
    ;

percentageLiteral
    : integerLiteral '%'
    ;

integerLiteral
    : IntegerLiteral
    ;

// TODO: This doesn't work for some reason when used with NumericUnit from Lexer, figure it out.
timeUnit
    : 'ms'
    | 's'
    ;

stringLiteral
    : StringLiteral
    ;

