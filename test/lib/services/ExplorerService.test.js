const Reader = require("./../../../lib/utils/Reader");
const ExplorerService = require("./../../../lib/services/ExplorerService");
const explorers = Reader.readJsonFile("./explorers.json");

describe("Test for Explorerservice", () => {

    test("1. get explorer in node ", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers,"node");
        expect(explorersInNode.length).toBe(10);
        expect.objectContaining({mission: "node"});

    });

    test("2: Get amount of explorers by mission", () => {
        const explorersGetAmount = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersGetAmount).toBe(10);
    });

    test("3. Get Explorers Usernames By Mission", () => {
        const explorerUserNamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorerUserNamesInNode).toContain("ajolonauta2");
    });

});