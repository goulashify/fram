import BaseScope from "./BaseScope";
import Symbol from '../symbol/Symbol';

export default class GlobalScope extends BaseScope {
  constructor(definitions?: Map<string, Symbol>) {
    super(null, definitions);
  }
}