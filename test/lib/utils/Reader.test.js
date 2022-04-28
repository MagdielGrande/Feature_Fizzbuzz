const Reader = require("./../../../lib/utils/Reader");

describe("Reader", () => {

    test("Read for th json explorers", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers.length).toBe(15);

    });
});
