var friendsData = require("../app/data/friends.js");
var path = require("path");
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var currentMatch;
        var currentDiff;
        var bestDiff;

        for (var i = 0; i < friendsData.length; i++) {
        currentDiff = 0;
        for (var j = 0; j < 10; j++) {
            currentDiff = currentDiff + Math.abs((parseInt(newFriend.scores[j]) - friendsData[i].scores[j]));
        }
        if (i === 0) { 
            currentMatch = 0;
            bestDiff = currentDiff;
        } else {
            if (currentDiff < bestDiff) {
            currentMatch = i;
            bestDiff = currentDiff;
            }
        }
        }
        friendsData.push(newFriend);
        //display best match
        res.send(friendsData[currentMatch]);
    });
};