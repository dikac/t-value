import Standard from "../dist/standard";

it("force console log", () => spyOn(console, 'log').and.callThrough());


describe("test", function() {

    let standard = new Standard(1);

    it(`number`, () => expect(standard.value).toBe(1));
});



