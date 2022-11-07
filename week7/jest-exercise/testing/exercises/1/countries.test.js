const { find } = require("./countries");

describe("#find", () => {
    test("When find is passed an empty string, it returns an empty array", () => {
        const result = find("");
        expect(result).toEqual([]);
    });

    test("The array that it returns contains no more than four matches", () => {
        const result = find("g");
        expect(result.length).toBeLessThan(5);
    });

    test("The search is case insensitive", () => {
        const result = find("G");
        expect(result[0]).toContain("G");
        const result2 = find("g");
        expect(result2[0]).toContain("G");
    });

    test("If there are no matching countries, an empty array is returned", () => {
        const result = find("@");
        expect(result.length).toEqual(0);
    });
});
