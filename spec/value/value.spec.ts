import Value from "../../dist/value/value";
import ValueContainer from "../../dist/value";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatible", function() {

    let value : ValueContainer<string> = {value:'string'};

    let result : string = Value(value);

});

it("result equal", function() {

    let value : ValueContainer<string> = {value:'string'};

    let result : string = Value(value);

    expect(result).toBe('string');

});

