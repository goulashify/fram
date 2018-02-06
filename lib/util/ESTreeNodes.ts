import {
  Program, Identifier, Literal, VariableDeclaration, VariableDeclarator, ExpressionStatement, CallExpression,
  MemberExpression, ObjectExpression, Property, ArrowFunctionExpression, BlockStatement, Statement,
  Expression, Pattern
} from "estree";

// TODO: probably someone else have done this, replace it with standard lib
// TODO: it would be nicer if properties would be read-only here.

export function program(body: Array<Statement>): Program {
  return {
    type: "Program",
    sourceType: "script",
    body: body
  };
}

export function identifier(name: string) : Identifier {
  return { 
    type: "Identifier", 
    name 
  };
}

export function literal(value: any, raw: string) : Literal {
  return { 
    type: "Literal", 
    value,
    raw
  };
}

export function variableDeclaration(declarations: Array<VariableDeclarator>, kind: "var" | "let" | "const" = "var")
  : VariableDeclaration {
  return { 
    type: "VariableDeclaration", 
    declarations,
    kind
  };
}

export function variableDeclarator(id: Pattern, init: Expression) : VariableDeclarator {
  return {
    type: "VariableDeclarator",
    id,
    init
  };
}

export function expressionStatement(expression: Expression): ExpressionStatement {
  return {
    type: "ExpressionStatement",
    expression
  };
}

export function callExpression(callee: Expression, args: Array<Expression>) : CallExpression {
  return {
    type: "CallExpression",
    callee,
    arguments: args
  }
}

export function memberExpression(object: Identifier, property: Identifier, computed: boolean = false) : MemberExpression {
  return {
    type: "MemberExpression",
    object,
    property,
    computed
  };
}

export function objectExpression(properties: Array<Property>) : ObjectExpression {
  return {
    type: "ObjectExpression",
    properties
  };
}

export function property(
  key: Expression,
  value: Expression,
  kind: "init" | "get" | "set" = "init",
  method: boolean = false,
  shorthand: boolean = false,
  computed: boolean = false) : Property {
    return {
      type: "Property",
      key, 
      value, 
      kind, 
      method, 
      shorthand, 
      computed
    };
}

export function arrowFunctionExpression(
  body: BlockStatement,
  params: Array<Pattern> = [],
  generator: boolean = false,
  expression: boolean = false) : ArrowFunctionExpression {
    return {
      type: "ArrowFunctionExpression",
      body,
      params,
      generator,
      expression
    };
}

export function blockStatement(body: Array<Statement>) : BlockStatement {
  return {
    type: "BlockStatement",
    body
  }
}