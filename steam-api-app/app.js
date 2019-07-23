//console.log($);




/*
=========Image url formats
https://steamcdn-a.akamaihd.net/steam/apps/10500/header.jpg?
https://steamcdn-a.akamaihd.net/steam/apps/34030/header.jpg?
https://steamcommunity.com/app/34030/

=========Game property formats
gameArray = steamLibrary["response"]["games"][0].name
gameArray = steamLibrary.response.games
gameArray[index].name
gameArray[index].playtime_forever
gameArray[index].img_logo_url
gameArray[index].appid
*/

//const playerIdInput = $("#player-id-box").val();
//const gameTitleInput = $("#game-title-box").val();
//const input = "Total War: NAPOLEON – Definitive Edition"
//const libraryArray = steamLibrary.response.games





// //////////////////////////////////////////////////////////////////////////////
// ===============================API CALL=====================================
// //////////////////////////////////////////////////////////////////////////////

$("form").on("submit", (event) => {
  const playerId = $("#player-id-box").val();
  console.log(playerId);
  event.preventDefault();
  if (localStorage.getItem(`data${playerId}`) === null) {
    $.ajax({
        url:`https://cors-anywhere.herokuapp.com/api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4B605C352384ED1076D931B4A173995D&steamid=${playerId}&include_appinfo=1&format=json`

    }).then(
        (data)=>{
          gameObjectArray = data.response.games;
          console.log("call api for data");
          console.log(gameObjectArray);
          console.log(`data${playerId}`);
          //localStorage.clear();
          localStorage.setItem(`data${playerId}`,JSON.stringify(data));

          generateMainButtons();

        },

        ()=>{
            console.log("bad request");
        }
    );
  }
  else {
    console.log("collecting local data");
    gameObjectArray = JSON.parse(localStorage.getItem(`data${playerId}`)).response.games;
    generateMainButtons();
  }

})


// //////////////////////////////////////////////////////////////////////////////
// ====================================FUNCTIONS================================
// //////////////////////////////////////////////////////////////////////////////

const makeGameOjectElement = () => {
  //tooltip div creation
  const $objDiv = $("<div>")
  .addClass("game-object-div")
  .appendTo("#games-div");
  //object to hold game data
  $("<object>")
  .addClass("game-object")
  .attr({
    "name": game.name,
    "data":`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg?`,
    "type":"image/jpg"
  })
  .appendTo($objDiv)

  //Event listeners/handlers
  .on("click", (event) => {
    $(event.currentTarget).clone().removeClass().appendTo("#playlist-container")
    .on("click", (event) => {
      $(event.currentTarget).remove();
    });
    $("#playlist-div").slideDown();
  });
  //span for tooltip text
  const $span = $("<span>")
  .addClass("tooltip-text")
  .appendTo($objDiv)
  .text(`Hours Played: ${(game.playtime_forever/60).toFixed(2)}`);
  //anchor tag for link inside tooltip
  $("<a>").text(game.name).appendTo($span)
  .attr({
    "href":`https://steamcommunity.com/app/${game.appid}`,
    "target":"_blank"
  })
}


////////////////////////////////////////////////////// GET ALL GAMES IN LIBRARY
const getGamesByMostPlayed = () => {
  $("#games-div").empty();
  gameObjectArray.sort(sortByPlaytime);
  for (game of gameObjectArray) {
    makeGameOjectElement();
  }
}



////////////////////////////////////////////////////// GET ALL UNPLAYED GAMES
const getUnplayedGames = () => {
  $("#games-div").empty();
  for (game of gameObjectArray) {
    if (game.playtime_forever  === 0) {
      makeGameOjectElement();
    }
  }
}



/////////////////////////////////////////////// GET ONE RANDOM UNPLAYED GAME
const getRandomUnplayed = () => {
  $("#games-div").empty();

  //new array of unplayed games
  let unplayedGames = [];
  for (object of gameObjectArray) {
     if (object.playtime_forever === 0) {
      unplayedGames.push(object);
     }
  }

  //creating a random index number
  index = Math.floor(Math.random()*unplayedGames.length);

  //if a game index matches the random number it goes to the DOM
  for (game of unplayedGames) {
    if (unplayedGames.indexOf(game) === index) {
      console.log(game);
      makeGameOjectElement();
    }

  }

}



////////////////////////////////////////////////////////////// SEARCH FILTER
const search = () => {
  let filter = $("#search-box").val().toUpperCase();
  let $gameObjects = $(".game-object")
  for (game of $($gameObjects)) {
    if (game.name.toUpperCase().indexOf(filter) > -1) {
      game.style.display = "";
    }
    else {
      game.style.display = "none";
    }
  }
}

/////////////////////////////////////////////////////////////// SORT FUNTIONS
const sortByPlaytime = (a,b) => {
  if (a.playtime_forever > b.playtime_forever) {
    return -1;
  }
  if (a.playtime_forever < b.playtime_forever) {
    return 1;
  }
  return 0;
}


const sortByName = (a,b) => {
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1;
  }
  if (a.name.toUpperCase() > b.name.toUpperCase()) {
    return 1;
  }
  return 0;
}

//////////////////////////////////////////////////////////////////// BUTTONS
const generateMainButtons = () => {
  $("#button-div").empty();
  $("#search-box-div").slideDown();
  $("<button>").text("Your Steam Games").on("click",getGamesByMostPlayed).appendTo($("#button-div"));
  $("<button>").text("Unplayed Games").on("click",getUnplayedGames).appendTo($("#button-div"));
  $("<button>").text("Random Unplayed Game").on("click",getRandomUnplayed).appendTo($("#button-div"));
}

///////////////////////////////////////////// Event listeners
$("#playlist-h1").on("click", (event) => {
  $("#playlist-div").slideUp()
})

$("#submit").on("click", () => {
  $("#games-div").empty();
  $("#playlist-container").empty();
})
