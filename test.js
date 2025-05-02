const countVowels = require('./main');


describe("countVowels", function () {
    test("should return 1 for frog", function () {
        expect(countVowels("frog")).toBe(1);
    });
    test("should return 3 for house", function () {
        expect(countVowels("house")).toBe(3);
    });
    test("should return 0 for empty input", function () {
        expect(countVowels("")).toBe(0);
    })
});
