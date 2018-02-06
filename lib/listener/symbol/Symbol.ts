export default interface Symbol {
  readonly name: string;
  readonly type: SymbolType;
}

export enum SymbolType {
  Layer, // a Framer layer
  String, // "something"
  Integer, // 3304821
  Duration, // 10ms
  Percentage, // 10%
  Reference // reference to another symbol
};