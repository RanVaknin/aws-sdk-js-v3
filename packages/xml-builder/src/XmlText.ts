import { escapeElement } from "./escape-element";
import { Stringable } from "./stringable";
/**
 * @internal
 * 
 * Represents an XML text value.
 */
export class XmlText implements Stringable {
  constructor(private value: string) {}

  toString(): string {
    return escapeElement("" + this.value);
  }
}
