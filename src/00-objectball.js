function gameObject() {
    const someObj = {
        home: {
            teamName: "Brookyln Nets",
            colors: ["Blacak", "White"],
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

function numPointsScoredComplex(pName) {
    const obj = gameObject();
    console.log(typeof obj);
    const lvl1keys = Object.keys(obj)
    if ((lvl1keys.find(() => lvl1keys === pName)) === pName) {
        console.log(lvl1keys)
    }
    else {
        console.log(lvl1keys)
        console.log("Going deeper");
        //want a list of 2nd lvl keys
        let lvl2Keys = []
        // populate lvl2Keys with obj.home keys and obj.away keys
        for (i = 0; i < lvl1keys.length; i++) {
            typeof obj[lvl1keys[i]] === 'object' ?
                lvl2Keys.push(Object.keys(obj[lvl1keys[i]])) : console.log("Not an object")
        }
        // Use reduce in next test
        // lvl2Keys = lvl1keys.map(inx => (obj[lvl1keys[inx]]));

        console.log(lvl2Keys)
        let lvl3Keys = []
        //Check if an item is an object in the 2nd lvl
        for (let i = 0; i < lvl2Keys.length; i++) {
            if (pName === Object.keys(obj[lvl1keys[i]])) {
                console.log("found")
            }
            else {
                console.log("This is lvl3 index " + i)
                // just more iteration
                for (let j = 0; j < lvl2Keys[i].length; j++) {
                    // function to return points
                    function retPoints(indp) {
                        console.log(obj[lvl1keys[i]][lvl2Keys[i][j]][indp].points + " points.")
                    }
                    const found = () => Object.keys(obj[lvl1keys[i]][lvl2Keys[i][j]]).find((indz) => indz === pName ? retPoints(indz) : false);
                    found()
                }
            }
        }
    }
}

function numPointsScored(pName) {
    const obj = gameObject();
    const playerLst = [...Object.keys(obj.away.players),
    ...Object.keys(obj.home.players)];
    console.log(playerLst);
    const found0 = playerLst.find(ply => ply === pName)
    const teamHome = () => typeof obj.home.players[found0] === "object" ? obj.home.players[found0].points + " points" : obj.away.players[found0].points + " points"
    console.log(teamHome())
}

numPointsScoredComplex('Bismak Biyombo')