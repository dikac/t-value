import Value from "./value";
import Infer from "./value/infer";
/**
 * Readonly wrapper for {@link Value}
 */
export default class Readonly<Container extends Value = Value> implements globalThis.Readonly<Value<Infer<Container>>> {
    subject: Container;
    constructor(subject: Container);
    get value(): Infer<Container>;
}
