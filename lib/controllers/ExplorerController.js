const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
//const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController {
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const list_explorer = ExplorerService.filterByMission(explorers, mission);
        return list_explorer;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const list_names_by_mission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return list_names_by_mission;
    }
    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const numbre_explorers = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return numbre_explorers;
    }
}
module.exports = ExplorerController;