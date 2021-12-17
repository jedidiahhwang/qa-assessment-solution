const {shuffleArray} = require('./utils')

let dummyArr = [1, 2, 3, 4, 5];

describe('shuffleArray should', () => {
    // CODE HERE
    test("Make sure that shuffleArray returns an array", () => {
        expect(Array.isArray(shuffleArray(dummyArr))).toBe(true);
    });

    test("Make sure that the array length is the same as the one passed in", () => {
        let result = shuffleArray(dummyArr);
        expect(result.length).toBe(dummyArr.length);
    });

    test("Make sure that both arrays contain the same values", () => {
        let result = shuffleArray(dummyArr);
        expect(result).toEqual(expect.arrayContaining(dummyArr));
    });

    test("Make sure that items have been shuffled", () => {
        let result = shuffleArray(dummyArr);
        expect(result.join()).not.toEqual(dummyArr.join());
    });
});
