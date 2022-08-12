function gameObject() {
    const someObj = {
        home: {
            teamName: "Brookyln Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: "0",
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1"
                },
                "Reggie Evans": {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7"
                },
                "Brook Lopez": {
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15"
                },
                "Mason Plumlee": {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5"
                },
                "Jason Terry": {
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1"
                }
            }
        },
        away: {
            teamName: "Charlotte",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2",
                },
                "Bismak Biyombo": {
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10"
                },
                "DeSagna Diop": {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5"
                },
                "Ben Gordon": {
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0"
                },
                "Brendan Haywood": {
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12"
                },
            }
        },
    }

    return someObj;
}
// End of gameObject(contains and returns a nested object)

function playerProperty(pName, pProperty) {
    const obj = gameObject();
    const playerLst = [...Object.keys(obj.away.players),
    ...Object.keys(obj.home.players)];
    const found0 = playerLst.find(ply => ply === pName)
    // If Property is stats return stats else return specified stat
    pProperty === "stats" ? (
        typeof obj.home.players[found0] === "object" ?
            console.log(obj.home.players[found0]) : (typeof obj.away.players[found0] === "object" ?
                console.log(obj.away.players[found0]) :
                console.log("Player not found")))
        : (console.log(
            typeof obj.home.players[found0] === "object" ?
                `${pProperty} : ` + obj.home.players[found0][`${pProperty}`] + " points" : (typeof obj.away.players[found0] === "object" ?
                    `${pProperty} : ` + obj.away.players[found0][`${pProperty}`]
                    : "Player Not Found")))
}

const numPointsScored = (pName) => playerProperty(pName, "points");
numPointsScored('Bismak Biyombo')

const shoeSize = (pName) => playerProperty(pName, "shoe");
shoeSize('Bismak Biyombo');

function teamProperty(teamN, teamP) {
    const obj = gameObject();
    const found0 = [obj.away.teamName, obj.home.teamName].find(team => team === teamN);

    teamP === "teamNames" ? console.log([
        obj.home.teamName === found0 ?
            obj.home["teamName"] : (obj.away.teamName === found0 ? obj.away["teamName"] : "Team Not Found")
    ])
        : (teamP === "playerNumbers" ?
            console.log(obj.home.teamName === teamN ?
                Object.keys(obj.home.players).map((plyr) => obj.home.players[plyr].number)
                : Object.keys(obj.away.players).map((plyr) => obj.away.players[plyr].number))

            : (console.log(obj.home.teamName === found0 ?
                obj.home[teamP]
                : (obj.away.teamName === found0 ? obj.away[teamP]
                    : "Team Not Found"))))

}

const teamColors = tName => teamProperty(tName, "colors");
teamColors("Brookyln Nets");

const teamNames = tName => teamProperty(tName, "teamNames");
teamNames("Brookyln Nets");

const playerNumbers = tName => teamProperty(tName, "playerNumbers");
playerNumbers("Brookyln Nets")

const playerStats = (pName) => playerProperty(pName, "stats")
playerStats("DeSagna Diop")

// Find player with largest shoesize and give rebounds
function bigShoeRebounds(){
    const obj = gameObject();
    let shoeP = [...Object.keys(obj.home.players).map((plyr) => obj.home.players[plyr].shoe),
    ...Object.keys(obj.away.players).map((plyr) => obj.away.players[plyr].shoe)];
    let shoePInt = shoeP.map((indx) => parseInt(indx));
    const largestS = Math.max(...shoePInt);
    const foundH = [...Object.keys(obj.home.players).filter((plyr) => obj.home.players[plyr].shoe === `${largestS}`),
    ...Object.keys(obj.away.players).filter((plyr) => obj.away.players[plyr].shoe === `${largestS}`)];
    let pointsLst = []
    foundH.forEach((i) => {
        typeof obj.home.players[i] != 'undefined' ?
            pointsLst.push(obj.home.players[i].rebounds)
            : (typeof obj.away.players[i].rebounds != 'undefined' ?
                pointsLst.push(obj.away.players[i].rebounds)
                : null)
    })
    console.log(pointsLst)
}

bigShoeRebounds();