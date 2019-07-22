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


let gameObjectArray;
//$("#button-div").empty();

////////////////////////////////////////////////////////////////////////////////
// ===============================API CALL=====================================
////////////////////////////////////////////////////////////////////////////////
$("form").on("submit", (event) => {
  const playerIdInput = $("#player-id-box").val();
  console.log(playerIdInput);
  event.preventDefault();
  $.ajax({
      url:`https://cors-anywhere.herokuapp.com/api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4B605C352384ED1076D931B4A173995D&steamid=${playerIdInput}&include_appinfo=1&format=json`

  }).then(
      (data)=>{
        //console.log(data);
        gameObjectArray = data.response.games;
        console.log(gameObjectArray);
        $("#button-div").empty();
        $("#search-box-div").slideDown();
        $("<button>").text("Your Steam Games").on("click",getGamesByMostPlayed).appendTo($("#button-div"));
        $("<button>").text("Unplayed Games").on("click",getUnplayedGames).appendTo($("#button-div"));
        $("<button>").text("Random Unplayed Game").on("click",getRandomUnplayed).appendTo($("#button-div"));

      },

      ()=>{
          console.log("bad request");
      }
  );
})
////////////////////////////////////////////////////////////////////////////////
// ====================================FUNCTIONS================================
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////// GET ALL GAMES IN LIBRARY
const getGamesByMostPlayed = () => {
  $("#games-div").empty();
  gameObjectArray.sort(sortByPlaytime);
  for (game of gameObjectArray) {
    const $objDiv = $("<div>").addClass("game-object-div").appendTo("#games-div");
    $("<object>").addClass("game-object")
    .attr({
      "name": game.name,
      "data":`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg?`,
      "type":"image/jpg"
    })
    .appendTo($objDiv)
    .on("click", (event) => {
      $(event.currentTarget).clone().removeClass().appendTo("#playlist-container")
      .on("click", (event) => {
        $(event.currentTarget).remove();
      });
      $("#playlist-div").slideDown();
    });
    const $span = $("<span>").addClass("tooltip-text").appendTo($objDiv).text(`Hours Played: ${(game.playtime_forever/60).toFixed(2)}`);
    $("<a>").text(game.name).appendTo($span)
    .attr({
      "href":`https://steamcommunity.com/app/${game.appid}`,
      "target":"_blank"
    })
  }
}




////////////////////////////////////////////////////// GET ALL UNPLAYED GAMES
const getUnplayedGames = () => {
  $("#games-div").empty();
  for (game of gameObjectArray) {
    if (game.playtime_forever  === 0) {
      const $objDiv = $("<div>").addClass("game-object-div").appendTo("#games-div");
      $("<object>").addClass("game-object")
      .attr({
        "name": game.name,
        "data":`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg?`,
        "type":"image/jpg"
      })
      .appendTo($objDiv)
      .on("click", (event) => {
        $(event.currentTarget).clone().removeClass().appendTo("#playlist-container")
        .on("click", (event) => {
          $(event.currentTarget).remove();
        });
        $("#playlist-div").slideDown();
      });
      const $span = $("<span>").addClass("tooltip-text").appendTo($objDiv).text(`Hours Played: ${game.playtime_forever}`);
      $("<a>").text(game.name).appendTo($span)
      .attr({
        "href":`https://steamcommunity.com/app/${game.appid}`,
        "target":"_blank"
      })

    }
  }
}



//////////////////////////////////////////// GET ONE RANDOM UNPLAYED GAME
const getRandomUnplayed = () => {
  $("#games-div").empty();
  let unplayedGamesArray = []
  for (game of gameObjectArray) {
    if (game.playtime_forever === 0) {
      unplayedGamesArray.push(game);
    }
  }
  let randomGame = unplayedGamesArray[Math.floor(Math.random()*unplayedGamesArray.length)]
  console.log(randomGame);
  const $objDiv = $("<div>").addClass("game-object-div").appendTo("#games-div");
  $("<object>").addClass("game-object")
  .attr({
    "name": randomGame.name,
    "data":`https://steamcdn-a.akamaihd.net/steam/apps/${randomGame.appid}/header.jpg?`,
    "type":"image/jpg"
  })
  .appendTo($objDiv)
  .on("click", (event) => {
    $(event.currentTarget).clone().removeClass().appendTo("#playlist-container")
    .on("click", (event) => {
      $(event.currentTarget).remove();
    });
    $("#playlist-div").slideDown();
  });
  const $span = $("<span>").addClass("tooltip-text").appendTo($objDiv).text(`Hours Played: ${randomGame.playtime_forever}`);
  $("<a>").text(randomGame.name).appendTo($span)
  .attr({
    "href":`https://steamcommunity.com/app/${randomGame.appid}`,
    "target":"_blank"
  })

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

///////////////////////////////////////////////////////////////// SORT FUNTIONS
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



////////////////////////////////////////////////Playlist h1 hide event listener
$("#playlist-h1").on("click", (event) => {
  $("#playlist-div").slideUp()
})
