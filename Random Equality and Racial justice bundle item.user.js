//// ==UserScript==
// @name         Random Racial Justice and Equality bundle item
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Get random games from the bundle!
// @author       karagdon
// @match        https://itch.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    // Your code here...
    var request = new XMLHttpRequest();
   request.open("GET", "https://itch.io/bundle/520/games.json", false);
   request.send(null)
   var games = JSON.parse(request.responseText);

    var gamesListkey = Object.keys(games)[0];
    var gamesList = games[gamesListkey]

    function getRandomGame(){
        var rn = Math.floor(Math.random() * gamesList.length)

        var gameObj = gamesList[rn];
        let url = new URL(document.URL)
        let params = new URLSearchParams(url.search.slice(1));
        params.set('search', gameObj.title);
        url.search = params.toString();
        var newURL = url.toString();
        window.location.href = newURL
    }

    // Create the button
    var button = document.createElement("button");
    button.className = "button"
        button.style.padding = "0 30"
            button.style.margin = "0 30"
    button.innerHTML = "Random game";
    var form = document.getElementsByClassName("filter_options")[0];
    form.appendChild(button);
    button.addEventListener ("click", function() {
        getRandomGame()
    });

})();
