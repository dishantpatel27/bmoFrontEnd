import {Deserializable} from "./deserializable.model";

export class Person implements Deserializable {
  firstName: string;
  lastName: number;

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}