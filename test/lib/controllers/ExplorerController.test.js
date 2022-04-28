const ExplorerController = require("./../../../lib/controllers/ExplorerController");

describe("Test for ExplorerController", () => {
   
    test("1. Regresar lista de explorers con la mission node", () => {
        const list_mission = ExplorerController.getExplorersByMission("node");
        expect(list_mission.length).toBe(10);
        expect.objectContaining({mission: "node"});
    
    });
   
    test("2. Obtener nombre de usuarios por mission", () => {
        const list_users = ExplorerController.getExplorersUsernamesByMission("node");
        expect(list_users).toContain("ajolonauta1");
    });
    
    test("3. Obtener el numero de explorers spor mission", () => {
        const num_by_mission = ExplorerController.getExplorersAmonutByMission("node");
        expect(num_by_mission).toBe(10);
    });
});
