class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        return  explorersInNodeToGetUsernames.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        
        const newListMission = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = newListMission.map((explorers) => explorers.githubUsername);
        return usernamesInNode;
    }

}

module.exports = ExplorerService;
