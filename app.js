$.ajax({
    url:"https://cors-anywhere.herokuapp.com/api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4B605C352384ED1076D931B4A173995D&steamid=76561198056513071&include_appinfo=1&format=json"

}).then(
    (data)=>{
        console.log(data);
      
    },
    ()=>{
        console.log("bad request");
    }
);
