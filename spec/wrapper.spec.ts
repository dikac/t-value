import Standard from "../dist/standard";
import Wrapper from "../dist/wrapper";

it("force console log", () => spyOn(console, 'log').and.callThrough());


describe("constructor", function() {

    let standard = Standard(1);
    let wrapped = new Wrapper(standard);

    it(`number`, () => expect(wrapped.value).toBe(1));
});


describe("set", function() {

    let standard = Standard(1);
    let wrapped = new Wrapper(standard);


    it(`subject value`, () => {
        standard.value = 10;
        expect(wrapped.value).toBe(10)
    });

    it(`subject`, () => {
        wrapped.subject = Standard(20);
        expect(wrapped.value).toBe(20)
    });
});




