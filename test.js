const countVowels = require('./main');


describe("countVowels", function () {
    test("returns", function () {
        expect(countVowels("Array of vowels")).toBe(`This is a vowel: ${countVowels}`);
    });
    test("should return a vowel", function () {
        expect(countVowels()).toBe("This is not a vowel: ,");
    })
});


