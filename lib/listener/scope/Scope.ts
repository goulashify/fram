import Symbol from '../symbol/Symbol';

export default interface Scope {
  readonly enclosingScope?: Scope;

  define(symbol: Symbol) : void;
  resolve(name: string) : Symbol | null;
}