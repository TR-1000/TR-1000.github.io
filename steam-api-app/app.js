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


// const steamLibrary = {"response":{"game_count":135,"games":[{"appid":220,"name":"Half-Life 2","playtime_forever":79,"img_icon_url":"fcfb366051782b8ebf2aa297f3b746395858cb62","img_logo_url":"e4ad9cf1b7dc8475c1118625daf9abd4bdcbcad0","has_community_visible_stats":true},{"appid":340,"name":"Half-Life 2: Lost Coast","playtime_forever":0,"img_icon_url":"795e85364189511f4990861b578084deef086cb1","img_logo_url":"867cce5c4f37d5ed4aeffb57c60e220ddffe4134","has_community_visible_stats":true},{"appid":3830,"name":"Psychonauts","playtime_forever":0,"img_icon_url":"460b6471db7d83ee6943c1a87f7a9f2898634952","img_logo_url":"b361ab26b2c47d4abd11be0ebd3d6b675512ec1b","has_community_visible_stats":true},{"appid":7670,"name":"BioShock","playtime_forever":0,"img_icon_url":"9a7c9f640a76e6a32592277dbbc36a0f6da05372","img_logo_url":"4c2a7f97e6556a95319eb346aed7beff9fe0535c","has_community_visible_stats":true},{"appid":409710,"name":"BioShock Remastered","playtime_forever":49,"img_icon_url":"eb72262cd3ccc3219dd76392be3b60a4b6cbfd38","img_logo_url":"cb7318b68128f6aa90c9e4e2d14544281ac22da0","has_community_visible_stats":true},{"appid":400,"name":"Portal","playtime_forever":56,"img_icon_url":"cfa928ab4119dd137e50d728e8fe703e4e970aff","img_logo_url":"4184d4c0d915bd3a45210667f7b25361352acd8f","has_community_visible_stats":true},{"appid":12900,"name":"Audiosurf","playtime_forever":174,"img_icon_url":"ae6d0ac6d1dd5b23b961d9f32ea5a6c8d0305cf4","img_logo_url":"75dc0398efeae1cc994714e37c893b593f9c9a88","has_community_visible_stats":true},{"appid":40400,"name":"AI War: Fleet Command","playtime_forever":8,"img_icon_url":"51e0da40a15297bbf3f15cde7e995a2efd2f7dec","img_logo_url":"91c4cd7c72ae83b354e9380f9e69849c34e163c3","has_community_visible_stats":true},{"appid":40420,"name":"Tidalis","playtime_forever":0,"img_icon_url":"38506efbd4a4f2a3b51f2b9a36fa3ac508543352","img_logo_url":"ffca9866a6c03a3d163225814c4445b6f4e9f772","has_community_visible_stats":true},{"appid":22370,"name":"Fallout 3 - Game of the Year Edition","playtime_forever":360,"img_icon_url":"21d7090bdea8f6685ca730850b7b55acfdb92732","img_logo_url":"ddccc41c513694e7a5542aa115e9e091d6495420","has_community_visible_stats":true},{"appid":620,"name":"Portal 2","playtime_forever":0,"img_icon_url":"2e478fc6874d06ae5baf0d147f6f21203291aa02","img_logo_url":"d2a1119ddc202fab81d9b87048f495cbd6377502","has_community_visible_stats":true},{"appid":72850,"name":"The Elder Scrolls V: Skyrim","playtime_forever":369,"img_icon_url":"b9aca8a189abd8d6aaf09047dbb0f57582683e1c","img_logo_url":"c5af3cde13610fca25cd17634a96d72487d21e74","has_community_visible_stats":true},{"appid":108800,"name":"Crysis 2 Maximum Edition","playtime_forever":65,"img_icon_url":"5f401ab4b7d16ca8f778ff6b85dd25e0d3d49460","img_logo_url":"bee338e11932e97e995b6e2d84d0772f7b22f2a9","has_community_visible_stats":true},{"appid":206440,"name":"To the Moon","playtime_forever":229,"img_icon_url":"6e29eb4076a6253fdbccb987a2a21746d2df54d7","img_logo_url":"f0e5a7037facd7bff7656ebe2396a23735c608c2","has_community_visible_stats":true},{"appid":227240,"name":"Construct 2 Free","playtime_forever":0,"img_icon_url":"fd7e273e97b6ec0a0102bf5fe6768d58317cfabb","img_logo_url":"29efe4016e3ae006c48797756b9407c55b1e5053","has_community_visible_stats":true},{"appid":230410,"name":"Warframe","playtime_forever":0,"img_icon_url":"22064646470f4c53388ba87774c7ac10f0a91ffa","img_logo_url":"3785f3576cdef5cf20a8b815bdf867154ccbe7d5","has_community_visible_stats":true},{"appid":238960,"name":"Path of Exile","playtime_forever":0,"img_icon_url":"1110764aac57ac28d7ffd8c43071c75d5482a9c9","img_logo_url":"fc366d9eed4d5a262e18f4809fb97eccbaa520f3","has_community_visible_stats":true},{"appid":286080,"name":"Thinking with Time Machine","playtime_forever":1,"img_icon_url":"704dec3992ad6cc0bf8aca588b11089556c8b92a","img_logo_url":"2352c41981051b3a67d48484c0b0e1e372f1a5ba","has_community_visible_stats":true},{"appid":206480,"name":"Dungeons & Dragons Online®","playtime_forever":0,"img_icon_url":"76e27963cb17e17f9b102a0704822c5bb331cc39","img_logo_url":"e35f2f352aafcefc95a910b446f4d791ce0fc0b6","has_community_visible_stats":true},{"appid":241660,"name":"Ohm Studio","playtime_forever":17,"img_icon_url":"945d51fe19881368747eedeef7f53ea28a60a31a","img_logo_url":"f9fd6c9614ae74b3f554c0d2541865bd54af6fc6","has_community_visible_stats":true},{"appid":248570,"name":"Toribash","playtime_forever":0,"img_icon_url":"7642e8aaf8d97a5fca68d749ed5cdd548cbb6d35","img_logo_url":"a364e4ad7f1a9084d8d98a1997a0696967e70c50","has_community_visible_stats":true},{"appid":250600,"name":"The Plan","playtime_forever":0,"img_icon_url":"1a07cd58c006e4c84569c9787b78933033c0368a","img_logo_url":"03b18663ea9aecc4f8dbccb59ae70261c2fabc18","has_community_visible_stats":true},{"appid":286100,"name":"You Have to Win the Game","playtime_forever":1,"img_icon_url":"26628aeaa64d8827918cd2e8abefa2a27bb29d28","img_logo_url":"bb0e5d132bbfa7864e2fd94beb8f8a862db6d88e","has_community_visible_stats":true},{"appid":8870,"name":"BioShock Infinite","playtime_forever":0,"img_icon_url":"4ebaf5f9ee74f50152f7ff361debef7553fa0e4e","img_logo_url":"870bb889e192cf8d31876ed04d329a5d51c6fc2c","has_community_visible_stats":true},{"appid":3910,"name":"Sid Meier's Civilization III: Complete","playtime_forever":0,"img_icon_url":"9cc953317dabd7b8e39690472872b37104b5e625","img_logo_url":"35361ed1c0f896ef34f0a42563b5d2dfb9e634a5","has_community_visible_stats":true},{"appid":224760,"name":"FEZ","playtime_forever":19,"img_icon_url":"900590f739d69da4f50112669f5d949a2e6b9261","img_logo_url":"d2789dc5fb6bfee4d07cd3ec06985593fffd606c","has_community_visible_stats":true},{"appid":228300,"name":"Remember Me","playtime_forever":0,"img_icon_url":"3a8acb47f7aa7381f08588be7f2a5267c52baa7f","img_logo_url":"9589ec01438852ed7e9dc2581ee63884ad22836a","has_community_visible_stats":true},{"appid":231160,"name":"The Swapper","playtime_forever":0,"img_icon_url":"4d3e99b7d885baba60ea29ee1634cc58bf22e41d","img_logo_url":"11e08b7b00d8a24a1f83dec3e7c2ca08e98be78a","has_community_visible_stats":true},{"appid":231020,"name":"Storm","playtime_forever":16,"img_icon_url":"185d5a6437184e1ab5b193d9eeb0e9f1a6d57a22","img_logo_url":"9477c7e776576b499f21c92106a81ab17961a016","has_community_visible_stats":true},{"appid":245390,"name":"I Have No Mouth, and I Must Scream","playtime_forever":9,"img_icon_url":"9b6679ba690284576d98e257f792978404f6f518","img_logo_url":"870cb6d9a91874f05a93e58aeff147ad6e3bdcec","has_community_visible_stats":true},{"appid":221910,"name":"The Stanley Parable","playtime_forever":93,"img_icon_url":"d4958966dbc02d7a282c52552f71ce6910957b63","img_logo_url":"80de64fedc906c4d81123e7ddc1d61d39183ab2d","has_community_visible_stats":true},{"appid":260430,"name":"The Four Kings Casino and Slots","playtime_forever":0,"img_icon_url":"43b10e164ac2b63c14a0e22d0fc5e4a243be6034","img_logo_url":"af1e87561817d783aac75efb192950277400b1a9","has_community_visible_stats":true},{"appid":207750,"name":"Symphony","playtime_forever":18,"img_icon_url":"a71e68ccdefe21a3a23e8197d5f97e98c0c0a0fb","img_logo_url":"fbb6eb900a4c8b83d6fbf21245104ac44f6232ec","has_community_visible_stats":true},{"appid":266010,"name":"LYNE","playtime_forever":15,"img_icon_url":"8f9809fa07b3cc3da1dd70f3118aae6e1f241087","img_logo_url":"c2e5b693de7cd46328aa8dd24add10b4f425e7f1","has_community_visible_stats":true},{"appid":57300,"name":"Amnesia: The Dark Descent","playtime_forever":0,"img_icon_url":"2c08de657a8b273eeb55bb5bf674605ca023e381","img_logo_url":"75b8a82acfb05abda97977ac4eb5af20e0dcf01e","has_community_visible_stats":true},{"appid":239200,"name":"Amnesia: A Machine for Pigs","playtime_forever":0,"img_icon_url":"3bf781ae80c6eeb8827819fb2ed92aa2353d3007","img_logo_url":"5df7be324aa92b538c4ef24cbdec85dbbcf950fc","has_community_visible_stats":true},{"appid":274920,"name":"FaceRig","playtime_forever":203,"img_icon_url":"c25aa8ad9cb85e7e132c61f8d32fd102954e3954","img_logo_url":"2cbcee5767c0cc33fdd94d9260094b576c6b842e","has_community_visible_stats":true},{"appid":286160,"name":"Tabletop Simulator","playtime_forever":21,"img_icon_url":"19f5b90e3c7084758f885ded843631b13929fa26","img_logo_url":"4cd5c6a6580ae6e85026ac670f9fa1a0b45372c3","has_community_visible_stats":true},{"appid":303210,"name":"The Beginner's Guide","playtime_forever":292,"img_icon_url":"335470301322904bd6eeb32076595df7a811e015","img_logo_url":"5ab637aaec9ff33e1c2ac2fb219f6504ea89a902","has_community_visible_stats":true},{"appid":304930,"name":"Unturned","playtime_forever":0,"img_icon_url":"e18009fb628b35953826efe47dc3be556b689f4c","img_logo_url":"32b7ea686e0fb11e24008e4dab179a40a6b2eb09","has_community_visible_stats":true},{"appid":305280,"name":"Cakewalk Loop Manager","playtime_forever":0,"img_icon_url":"f2e697b78914f8fa707d38e39ded8cfd08bf2427","img_logo_url":"bde28852fb210d60fea26861faae84e1ba7c1b50","has_community_visible_stats":true},{"appid":302380,"name":"Floating Point","playtime_forever":0,"img_icon_url":"0ff14a47134b45214c1715546370e81786d0e9fe","img_logo_url":"b1e6c69982074c13032660362f37cfc528504d16","has_community_visible_stats":true},{"appid":270570,"name":"Reversion - The Escape","playtime_forever":4,"img_icon_url":"aecf6d60c1cec448990c1014beb0835481980ae7","img_logo_url":"55704656d2c723a0b8db50d2786dab8fb4b1c031","has_community_visible_stats":true},{"appid":9900,"name":"Star Trek Online","playtime_forever":0,"img_icon_url":"d28078028553a1b35176046cbbfd23b0b2f7c67e","img_logo_url":"1b1012e77ce5891d389fa24be4ce0b96e8058c4e","has_community_visible_stats":true},{"appid":313120,"name":"Stranded Deep","playtime_forever":1326,"img_icon_url":"1d2f450f4cf55ecf0275f49f68a3440eef93ad27","img_logo_url":"8df3aea9fd942cf9bd0a7a32c23936a2e91229c4","has_community_visible_stats":true},{"appid":313240,"name":"Wilson Chronicles - Beta","playtime_forever":39,"img_icon_url":"5264755c154f8a7e9f4bab5be861b451cdc19f21","img_logo_url":"2564098161021389fa16a3111d996b23cf11907b","has_community_visible_stats":true},{"appid":317400,"name":"Portal Stories: Mel","playtime_forever":0,"img_icon_url":"bf3360bc5594c6d1e8e0eeaaa2f7b09d6bf7a6e5","img_logo_url":"f2b748a13a54b5613a8efe07553222c0de694f20","has_community_visible_stats":true},{"appid":317410,"name":"Color Symphony","playtime_forever":0,"img_icon_url":"34a79f280ff613f837b8db45a56e69d5850c73be","img_logo_url":"500cb2c0b8e3f67e112d40c345a3c71ee1ca5e73","has_community_visible_stats":true},{"appid":317790,"name":"Rexaura","playtime_forever":0,"img_icon_url":"e73d6a6f34701a459c961ed7833c56527f5c19a6","img_logo_url":"4dc01921c24296b2721a6b916d2427c4184d3a88","has_community_visible_stats":true},{"appid":319510,"name":"Five Nights at Freddy's","playtime_forever":7,"img_icon_url":"5da39a273efa65643cf4c12025898da0076dad69","img_logo_url":"93881986f2f6f5a1dd7206eda9f9f3970d67a0cb","has_community_visible_stats":true},{"appid":321040,"name":"DiRT 3 Complete Edition","playtime_forever":0,"img_icon_url":"fdfb3aa153b57d6ae6cd8099cb4456b3d5b182b6","img_logo_url":"bb89ef19777c30c8551b0f4eea296d6ca33007cc","has_community_visible_stats":true},{"appid":258520,"name":"The Vanishing of Ethan Carter","playtime_forever":0,"img_icon_url":"d94c31f17ff27a733fd01ecf929106264b89b8b5","img_logo_url":"bdcdde76010c917f2c63f99c093aaac86583e0ad","has_community_visible_stats":true},{"appid":400430,"name":"The Vanishing of Ethan Carter Redux","playtime_forever":0,"img_icon_url":"1385cf04f3625f1281c964f070cc6eaeb5642cd3","img_logo_url":"1d5dcfed693a2b01a9fcdddff3c9bff9ccaaf4d9","has_community_visible_stats":true},{"appid":327890,"name":"I am Bread","playtime_forever":21,"img_icon_url":"40b2f1ff3dd97df35c094f4d8e8f2e98b8f75eee","img_logo_url":"8f0109409b5b196e4d8be175529d23a3d5fbb140","has_community_visible_stats":true},{"appid":331470,"name":"Everlasting Summer","playtime_forever":0,"img_icon_url":"c238887d29f28382920884d89bb3fc0718070a19","img_logo_url":"6dce5123bcb7c856c7288454e6b8f5e85e182bc8","has_community_visible_stats":true},{"appid":305620,"name":"The Long Dark","playtime_forever":11,"img_icon_url":"e26b78087b75d5e002e92f2bdd73ce6fc4861e56","img_logo_url":"0c8eff00cce79bf9a2b19a6be1b495fc6229573e","has_community_visible_stats":true},{"appid":257510,"name":"The Talos Principle","playtime_forever":29,"img_icon_url":"8222673c1eb13e6a8a8367ec0e2940a887ecf270","img_logo_url":"0392d2bd5d1bec31f2fd283bc4555fdc22dd44a9","has_community_visible_stats":true},{"appid":246070,"name":"Hack 'n' Slash","playtime_forever":0,"img_icon_url":"57587c74e58cfff46972f0cd3867ff7ad4f3a30c","img_logo_url":"47a902e7589ee213d82159a22cddb2cb8428aa5a","has_community_visible_stats":true},{"appid":342980,"name":"Destination Sol","playtime_forever":0,"img_icon_url":"a0dfa7ad78857cde2e19dcd14f0ccc4387de111f","img_logo_url":"13433fedc889d46e5fa03d0c5e8e41c3ea268a1c","has_community_visible_stats":true},{"appid":343740,"name":"InMind VR","playtime_forever":0,"img_icon_url":"ab9e522ebac21626b0477c13fe0554ba0ae97f2b","img_logo_url":"167e3e619d2e2368570dff88d026b707eae47f4f","has_community_visible_stats":true},{"appid":344480,"name":"Quell","playtime_forever":0,"img_icon_url":"84a9b23b1600cca6d3a0edb2e9be4ac3af35c123","img_logo_url":"169599a6499f455b87ad2ca572501a3e23fc8b33","has_community_visible_stats":true},{"appid":345370,"name":"TyranoBuilder Visual Novel Studio","playtime_forever":443,"img_icon_url":"897160e798e7117f123c6d9f5e11088001e980bd","img_logo_url":"e6c4b889e537030827689cd05965673f546f6e86","has_community_visible_stats":true},{"appid":346120,"name":"Boring Man - Online Tactical Stickman Combat","playtime_forever":1,"img_icon_url":"342680d06f13a178f8ba8f3f12c85ee48ecb9e07","img_logo_url":"67866037d38b2aa6df5b36f75a14047e294a799c","has_community_visible_stats":true},{"appid":346250,"name":"The Old Tree","playtime_forever":0,"img_icon_url":"7113a492dce1fbefaebe713065d5d8ff31e56f9b","img_logo_url":"1898fb57a17a2e50f84ac5497e87cc91af6a7200","has_community_visible_stats":true},{"appid":346900,"name":"AdVenture Capitalist","playtime_forever":0,"img_icon_url":"b4dd5ca1582ed52335b31960e05766fd22fa7cc4","img_logo_url":"ba7cd9eb5fe1905f7b5d25835d063437dec7f675","has_community_visible_stats":true},{"appid":348250,"name":"Google Earth VR","playtime_forever":0,"img_icon_url":"6e7575ca3c5ac486c5b6e3520c5b881a0cb61db0","img_logo_url":"72b13c368cfbb037c6965cf1a9465140c1f6ab26","has_community_visible_stats":true},{"appid":8850,"name":"BioShock 2","playtime_forever":0,"img_icon_url":"f5eda925c0e57373aaea4cae17b6f175115a8d54","img_logo_url":"fde6fa1b15e4eb409c9d592197024571fded77e7","has_community_visible_stats":true},{"appid":409720,"name":"BioShock 2 Remastered","playtime_forever":0,"img_icon_url":"97527a02b36f8ac4aba21005c2d953cc908a08e1","img_logo_url":"34c3f591cf4cb28711d7f33f73dee0f09cdb94a4","has_community_visible_stats":true},{"appid":356520,"name":"Port of Call","playtime_forever":0,"img_icon_url":"146a7ffeebbe15f06759463dfd4311aad58dca21","img_logo_url":"2f9b48a5bb2210d72f732b2cc08a86bb1ea53250","has_community_visible_stats":true},{"appid":357600,"name":"Unium","playtime_forever":0,"img_icon_url":"bb956cf30ebe6e354536ac540dc7ec61bfc38295","img_logo_url":"b6a8e06210d2da419565c33ec2c639ef412803fc","has_community_visible_stats":true},{"appid":362790,"name":"Word Wonders: The Tower of Babel","playtime_forever":0,"img_icon_url":"2cbddea47450488dfe645e5222a066f6b0624453","img_logo_url":"ba91be39f6df62c7fecb3032b965fec01f1d68e5","has_community_visible_stats":true},{"appid":365450,"name":"Hacknet","playtime_forever":0,"img_icon_url":"2445c4ead6ee47784a326922271ec1c0b41d64e2","img_logo_url":"50479f0bfe5a552132a0fc2668640b2e6a737398","has_community_visible_stats":true},{"appid":366800,"name":"Mainland","playtime_forever":0,"img_icon_url":"fc4ad069538047cd4692cd1af6cb08b75d7f0913","img_logo_url":"d8bd54cea0acddd8741018820a8940b141fbe5e6","has_community_visible_stats":true},{"appid":219740,"name":"Don't Starve","playtime_forever":335,"img_icon_url":"03fe647df40dccc4d19bf42a0185cd3e6b9f2953","img_logo_url":"46cbbc2fcb14eb0bbbbaebbdf0b1e0eaf6f4c646","has_community_visible_stats":true},{"appid":372800,"name":"RPG MO","playtime_forever":0,"img_icon_url":"cf036fbac468db23e0ef40ad9b43e0bdadc8e960","img_logo_url":"aedd9246e661de50be316d3e60e894951aa61989","has_community_visible_stats":true},{"appid":375950,"name":"Viridi","playtime_forever":0,"img_icon_url":"2fe95a00fab1cded4f870d192ebdb920e12237c5","img_logo_url":"9092e125e103f4d084414c32155a2f1a7b6e10a1","has_community_visible_stats":true},{"appid":257400,"name":"Fuse","playtime_forever":0,"img_icon_url":"d3e719b6963163bffeb607483207a8f9510b85ac","img_logo_url":"9602f933e71b35725b22752c3a00883e9f43edc6","has_community_visible_stats":true},{"appid":377590,"name":"IRFaceRig","playtime_forever":1,"img_icon_url":"2e816ca4de777ce9efdc9490b3e2bdffbc2665f7","img_logo_url":"6a434a3b6ad18a76d0f2fda611a1c9882443cc40","has_community_visible_stats":true},{"appid":386360,"name":"SMITE","playtime_forever":0,"img_icon_url":"7ed9de7bbfab9accb81e47b84943e7478baf2f3a","img_logo_url":"db36e43d2de5bf8913e5022425577866b2e8fd11","has_community_visible_stats":true},{"appid":858460,"name":"Smite - Public Test","playtime_forever":0,"img_icon_url":"20e160ebdeddbb45f1066f62797cee2dff94da95","img_logo_url":"ed84d684b6a3e4afd5bd0ffa86f38320512ecfd5","has_community_visible_stats":true},{"appid":291550,"name":"Brawlhalla","playtime_forever":0,"img_icon_url":"c43fac31b8bf8821764603a14d09412bc3d45f66","img_logo_url":"3859e079750d8ecdcdc31e6c4ef6fc87a8098c42","has_community_visible_stats":true},{"appid":387860,"name":"the static speaks my name","playtime_forever":0,"img_icon_url":"07514a18f54ba9e7c911f5498d51ff82c31be172","img_logo_url":"3cc543a0c766df27cadfac61664e6886d1f2b16a","has_community_visible_stats":true},{"appid":389570,"name":"Mitos.is: The Game","playtime_forever":0,"img_icon_url":"821e8021beb0b77f04ed8b236d4b3166642a8433","img_logo_url":"15cda5d8f004046dca3db8e40822192346524daa","has_community_visible_stats":true},{"appid":391540,"name":"Undertale","playtime_forever":46,"img_icon_url":"2ce672b89b63ec1e70d2f12862e72eb4a33e9268","img_logo_url":"ae953fb87a0fd4958ca21995226c065f33290eba","has_community_visible_stats":true},{"appid":400040,"name":"ShareX","playtime_forever":0,"img_icon_url":"66e87f26755185d9a977b9776652326076ef67a1","img_logo_url":"091a990115a8b56da4930edd5e6e8cc9e252fc28","has_community_visible_stats":true},{"appid":400630,"name":"Wuppo","playtime_forever":0,"img_icon_url":"0375820c2dc7c8019a906750bf020662e6208ace","img_logo_url":"25b8f303af22e878b8fc47398a47491d11a125af","has_community_visible_stats":true},{"appid":311210,"name":"Call of Duty: Black Ops III","playtime_forever":947,"img_icon_url":"bd3e3a9516b480164df25d16e49ae4ce4a063cb4","img_logo_url":"359426a1440e4af03febda524f57771f784b4169","has_community_visible_stats":true},{"appid":455130,"name":"Call of Duty: Black Ops III – Mod Tools","playtime_forever":0,"img_icon_url":"f5b052d3be4796e2a7a1f0f7a9578aa773882b5f","img_logo_url":"4022defd0a99127c6264a3d31ef2a529b46ce0fe","has_community_visible_stats":true},{"appid":404790,"name":"Godot Engine","playtime_forever":0,"img_icon_url":"057ae868c1d0975b941d73f58d1dc17c8a15a090","img_logo_url":"8787012733a7f8df06c4eb5f30f56ebe3db3af5a","has_community_visible_stats":true},{"appid":407060,"name":"AltspaceVR","playtime_forever":0,"img_icon_url":"524212cf48b566bfd174ee6a4f35f92bab0df554","img_logo_url":"175424ff7d47031c7469b1fac80bae0ea2d93e43","has_community_visible_stats":true},{"appid":407530,"name":"ARK: Survival Of The Fittest","playtime_forever":0,"img_icon_url":"807c673cddebbfee0700a947a75f4872ad136e9b","img_logo_url":"870478f8ba64ce675aa232829c046fbce3bdbdde","has_community_visible_stats":true},{"appid":407900,"name":"Princess Remedy in a World of Hurt","playtime_forever":4,"img_icon_url":"077fe7f0d447bc25fd160489e15fcbdf37deb941","img_logo_url":"6e7d55bd8887988959e2d833b62d90651bbe33f9","has_community_visible_stats":true},{"appid":409160,"name":"Dr. Langeskov, The Tiger, and The Terribly Cursed Emerald: A Whirlwind Heist","playtime_forever":20,"img_icon_url":"76c6aa9e02cc1bcacfd6e68f955a764d7459c96a","img_logo_url":"6f0d063bfd393a7ec8d7412de68e739911b46250","has_community_visible_stats":true},{"appid":412140,"name":"Electric Highways","playtime_forever":0,"img_icon_url":"b90ff197e46cc73755e5c384ed8761523286d1bd","img_logo_url":"2c3b0df0948aaf93ab8a047f21e727d32b45b6fa","has_community_visible_stats":true},{"appid":416130,"name":"Written in the Sky","playtime_forever":1,"img_icon_url":"146c0d8110073ed3cb6b0c14154ea0d73af69f56","img_logo_url":"5549fe9b44f4c4ff3da131903260169e941f6ce2","has_community_visible_stats":true},{"appid":421670,"name":"CUPID - A free to play Visual Novel","playtime_forever":0,"img_icon_url":"74992a05b365930ef06397dbab5c8e9f978209a2","img_logo_url":"b075e14772a7e7b6313fb0e873eb4bd7fb3c0f73","has_community_visible_stats":true},{"appid":429300,"name":"Sepia Tears","playtime_forever":0,"img_icon_url":"f87d61823490e9066b3295e59b447d55ff8e8ee2","img_logo_url":"30c69ccace52351790bec3485cc452e5024708ca","has_community_visible_stats":true},{"appid":431510,"name":"Mystic Destinies: Serendipity of Aeons","playtime_forever":0,"img_icon_url":"a2601af7c8a6b6aacc69d305b82152c0ae529b11","img_logo_url":"d86f462a2143dd663d71b06c46986da2cd536681","has_community_visible_stats":true},{"appid":436820,"name":"Waltz of the Wizard","playtime_forever":0,"img_icon_url":"cd2d48823ee5a1160489ebf6213233367dd63e64","img_logo_url":"0704176faf417be186eb89e437f14f965b6541dd","has_community_visible_stats":true},{"appid":443580,"name":"Antenna","playtime_forever":227,"img_icon_url":"26b470dcd32bbeb0a8383f18c0fa2c0b56926b44","img_logo_url":"22f77596f60454348d2d8575a66a503eeb9fee78","has_community_visible_stats":true},{"appid":444090,"name":"Paladins","playtime_forever":0,"img_icon_url":"1565119c17f532338a0645b98e69e1fc1df0c29e","img_logo_url":"eeaf474bd305faa8c299d2df8e32278e10fc8c04","has_community_visible_stats":true},{"appid":596350,"name":"Paladins - Public Test","playtime_forever":0,"img_icon_url":"0a073dec4ffe8398b74369289d0c987134e35986","img_logo_url":"fa03dc049462669246e8ea8b0fffe6445fddd712","has_community_visible_stats":true},{"appid":396030,"name":"InCell VR","playtime_forever":1,"img_icon_url":"1cdb21eadcb166664ec0a8ca480c82b8fa7147a3","img_logo_url":"0429ac16a254858f11d1d98e9994cf67427d48dc","has_community_visible_stats":true},{"appid":449780,"name":"Jacob","playtime_forever":0,"img_icon_url":"056f451cc0a85c64556194ec16ca2ebf01ab2273","img_logo_url":"1432d7fb52025e996260a44b16400502a5bb8b34","has_community_visible_stats":true},{"appid":450390,"name":"The Lab","playtime_forever":0,"img_icon_url":"69ca11312e3a1779946de8871d6bdb003636ffbf","img_logo_url":"dde7f70d5d590ba242ca8fcfaac9fe9b5e5e8754","has_community_visible_stats":true},{"appid":456920,"name":"Gary the Gull","playtime_forever":0,"img_icon_url":"a0865ad2d83914639f7066ad23fc1f6bed078b43","img_logo_url":"6901f9dc5f6099a1be6eb2beafa5f83669df49be","has_community_visible_stats":true},{"appid":463390,"name":"One Thousand Lies","playtime_forever":0,"img_icon_url":"2da887a0bab39b9aa5bbae182753b1aa10f583d1","img_logo_url":"b7a71721da7f010724f824a73f4d65e4afd79568","has_community_visible_stats":true},{"appid":466270,"name":"Half-Life: A Place in the West","playtime_forever":0,"img_icon_url":"dad988ddf7bb566eb7f740c8c4aa790f6faf94b0","img_logo_url":"9e62f96e54a00179fdbe940852c750279d0ac929","has_community_visible_stats":true},{"appid":453170,"name":"Destinations","playtime_forever":2,"img_icon_url":"fa89a6c1a8baa72198ca1d17a6d12f1067136162","img_logo_url":"da0685ad7bc52717d45117b025c824abfd82c50a","has_community_visible_stats":true},{"appid":214850,"name":"GameMaker: Studio","playtime_forever":0,"img_icon_url":"a7ec5d5a350ab19d66ecf5f1ed0b5fc82f74a5d6","img_logo_url":"21eb21c148278276851b4fdbfaf6641f780cf390","has_community_visible_stats":true},{"appid":48000,"name":"LIMBO","playtime_forever":0,"img_icon_url":"463f57855017564301b17050fba73804b3bd86d6","img_logo_url":"9f35c3d64649a5a03b69d6a9218b1f77caf15025","has_community_visible_stats":true},{"appid":502210,"name":"Super Markup Man","playtime_forever":0,"img_icon_url":"1ac237856369a21477709e2a695e7162ed36f050","img_logo_url":"2004f6009e953b4b7c60634e5cb9a6b774c64eaa","has_community_visible_stats":true},{"appid":319630,"name":"Life is Strange™","playtime_forever":0,"img_icon_url":"e54b13da0710a35e7088664a77632e79157d8332","img_logo_url":"e92d2b3a0c01be3bdd77ec665a3014028efaa105","has_community_visible_stats":true},{"appid":519140,"name":"Minds Eyes","playtime_forever":0,"img_icon_url":"e442df89c3a667b93c5d957b0515643335fb979b","img_logo_url":"cd7d571218dde40cdd08b36612e90f0fe2eac53a","has_community_visible_stats":true},{"appid":529110,"name":"Awkward Dimensions Redux","playtime_forever":0,"img_icon_url":"7fc018e41b5cf9a43d4e101c1be17a72dd2f3a3c","img_logo_url":"6edfc79d254c19b7c8cb75c3b5cb74bb06425846","has_community_visible_stats":true},{"appid":533970,"name":"Blocks","playtime_forever":0,"img_icon_url":"e85f4654f98af9128afa7f8ca73a0906f98a383a","img_logo_url":"63d8a2f4ef9079f5c2fad1c963c4895c65665038","has_community_visible_stats":true},{"appid":542310,"name":"Escape the Game: Intro","playtime_forever":0,"img_icon_url":"6a9b3f5b3adc472d2f9a88aec9c99b451ce16ebe","img_logo_url":"ff060d9c335a94dbcef947648857de838de5a8e6","has_community_visible_stats":true},{"appid":563470,"name":"Reaping Rewards","playtime_forever":0,"img_icon_url":"e99a673a86b885d594b7e38b281b1f8f5ce599f4","img_logo_url":"bbd231248ce449d3943b60133e2b0e06c58d81eb","has_community_visible_stats":true},{"appid":568770,"name":"Cinderella Phenomenon","playtime_forever":5,"img_icon_url":"a87753a41aa924ccbe564563678529d699daf41d","img_logo_url":"10ae159382360b4a399a251b781ea2320a0b246e","has_community_visible_stats":true},{"appid":582270,"name":"Everything","playtime_forever":58,"img_icon_url":"fa274f088a5b3df3c1ee9b17b5ae5bc78e56b64e","img_logo_url":"b15284979404c08fe23133e5a90afb3e503f46d8","has_community_visible_stats":true},{"appid":588430,"name":"Fallout Shelter","playtime_forever":0,"img_icon_url":"bb39b682fefd9a95486911cd991d8cdc5d7b57c9","img_logo_url":"bdae0ecd14415771800d7be3f95aa29c7ec7cbc2","has_community_visible_stats":true},{"appid":593090,"name":"GIPHY Museum of GIF Art","playtime_forever":0,"img_icon_url":"320a723e62cfb876200bb702a84d270ae5bd865c","img_logo_url":"aa6ff8f863c3b7a29b3a16abf6cc48c11bf2de11","has_community_visible_stats":true},{"appid":593330,"name":"Algotica Iterations","playtime_forever":0,"img_icon_url":"4523d1ad1c953f74efd71bcd4292ac1e254a83ac","img_logo_url":"93fab474085ae0535fee75f8a9a0c4e1441462c8","has_community_visible_stats":true},{"appid":603140,"name":"Connected Hearts - Visual novel","playtime_forever":0,"img_icon_url":"1bdcd5790df84ee463143a1cbcde9caefae580c1","img_logo_url":"18f49cba0a0b2b9d83d6df08bd869112a28fa1dc","has_community_visible_stats":true},{"appid":667110,"name":"Altar Show","playtime_forever":0,"img_icon_url":"35b1123bf91011fed6688bf64810e4b3408b872d","img_logo_url":"2c3ef495a0269e5d5e24031bedc8fbde1a48f6ca","has_community_visible_stats":true},{"appid":693990,"name":"STYLY","playtime_forever":0,"img_icon_url":"e30b1c9db9a20b6a908d10c9ea1c1319096f750c","img_logo_url":"6e7e5884d3301e6c62b467e42fe1afc9307a0f44","has_community_visible_stats":true},{"appid":698780,"name":"Doki Doki Literature Club","playtime_forever":0,"img_icon_url":"2bf8ed528d8f251428435a6f6ffc8e4e8e4b294c","img_logo_url":"76c3e09407e445568c9bb32d77bf364168ea45ed","has_community_visible_stats":true},{"appid":707340,"name":"Awakening","playtime_forever":0,"img_icon_url":"7a0e53fb8e8d71fb036e72c0c6734b5803a13679","img_logo_url":"1f3b8affef6c67c420674a9e5c7365275368a130","has_community_visible_stats":true},{"appid":771450,"name":"ERROR: Human Not Found","playtime_forever":0,"img_icon_url":"94201762a02a591a9a5067bb40691073d143e766","img_logo_url":"074cafc65ed7d6ee755080fef98a501488ae136b","has_community_visible_stats":true},{"appid":792030,"name":"Just, Bearly","playtime_forever":0,"img_icon_url":"e211496644584a9ea66331157eb9e824f3899e06","img_logo_url":"2c5c0c4db44ca53aa2efeff42a4fe43ab1b51734","has_community_visible_stats":true},{"appid":803010,"name":"Supermedium","playtime_forever":4,"img_icon_url":"96044b756fc84e0d906c2517661a0df427cfa8d8","img_logo_url":"3e05c130074ba22f2b4c47cf396f6cf4c46a672f","has_community_visible_stats":true},{"appid":290060,"name":"Glitchspace","playtime_forever":0,"img_icon_url":"ea1fd98cd2bc11bd80b08eb1f3a5ada158fc0411","img_logo_url":"eeecf2cbccf1a74fc3e7ecc317e38714e6d47adb","has_community_visible_stats":true},{"appid":24200,"name":"DC Universe Online","playtime_forever":0,"img_icon_url":"1563d80759bfa4f9698a1799b3872e7f3a5209b1","img_logo_url":"5304686024a25aed8d777e3d1e93aeef35d82c02","has_community_visible_stats":true},{"appid":865770,"name":"Caffeine","playtime_forever":0,"img_icon_url":"49498b56e4620ef2e888b08eeda87ff9d7414a97","img_logo_url":"cd6d7b5ebacf8d7dbeed7d07e40f713614601f65","has_community_visible_stats":true},{"appid":1098840,"name":"ZACH-LIKE","playtime_forever":0,"img_icon_url":"09c5b758400032601c669d8857bed1713ab0291f","img_logo_url":"fd95a73086e503b5d082f3fb2decbced1b6f3785","has_community_visible_stats":true}]}}

//const playerIdInput = $("#player-id-box").val();
//const gameTitleInput = $("#game-title-box").val();
//const input = "Total War: NAPOLEON – Definitive Edition"
//const libraryArray = steamLibrary.response.games


let gameObjectArray;

$("form").on("submit", (event) => {
  const playerIdInput = $("#player-id-box").val();
  //const gameTitleInput = $("#game-title-box").val();
  console.log(playerIdInput);
  //console.log(gameTitleInput);
  event.preventDefault();
  $.ajax({
      url:`https://cors-anywhere.herokuapp.com/api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=4B605C352384ED1076D931B4A173995D&steamid=${playerIdInput}&include_appinfo=1&format=json`

  }).then(
      (data)=>{
        //console.log(data);
        gameObjectArray = data.response.games;
        console.log(gameObjectArray);
        $("#button-div").empty();
        $("<button>").text("Games by Name").on("click",getGamesByName).appendTo($("#button-div"));
        $("<button>").text("Unplayed Games").on("click",getUnplayedGames).appendTo($("#button-div"));
        $("<button>").text("Random Unplayed Game").on("click",getRandomUnplayed).appendTo($("#button-div"));
      },

      ()=>{
          console.log("bad request");
      }
  );
})

// ====================================FUNCTIONS================================






// GET ALL GAMES IN LIBRARY
const getGamesByName = () => {
  $("#games-div").empty();
  gameObjectArray.sort(sortByName);
  for (game of gameObjectArray) {
    $("<object>").addClass("game-object")
    .attr({
      "name": game.name,
      "title": `${game.name}
Hours Played: ${Math.round(game.playtime_forever / 60)}`,
      "data":`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg?`,
      "type":"image/jpg"
    })
    .appendTo($("#games-div"))
    .on("click", (event) => {
      $(event.currentTarget).clone().removeClass().appendTo("#playlist-container")
      .on("click", (event) => {
        $(event.currentTarget).remove();
      });
      $("#playlist-div").slideDown();
    });

  }
}


//  GET ALL UNPLAYED GAMES
const getUnplayedGames = () => {
  $("#games-div").empty();
  for (game of gameObjectArray) {
    if ((Math.round(game.playtime_forever / 60)) === 0) {
      $("<object>").addClass("game-object")
      .attr({
        "name": game.name,
        "title": `${game.name}
Hours Played: ${Math.round(game.playtime_forever / 60)}`,
        "data":`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg?`,
        "type":"image/jpg"
      })
      .appendTo($("#games-div"))
      .on("click", (event) => {
        $(event.currentTarget).clone().removeClass().appendTo("#playlist-container")
        .on("click", (event) => {
          $(event.currentTarget).remove();
        });
        $("#playlist-div").slideDown();
      });

    }
  }
}


// GET ONE RANDOM UNPLAYED GAME
const getRandomUnplayed = () => {
  $("#games-div").empty();
  let unplayedGamesArray = []
  for (game of gameObjectArray) {
    if ((Math.round(game.playtime_forever / 60)) === 0) {
      unplayedGamesArray.push(game);
    }
  }
  let randomGame = unplayedGamesArray[Math.floor(Math.random()*unplayedGamesArray.length)]
  $("<object>").addClass("game-object")
    .attr({
      "name": randomGame.name,
      "title": `${randomGame.name}
Hours Played: ${Math.round(randomGame.playtime_forever / 60)}`,
      "data":`https://steamcdn-a.akamaihd.net/steam/apps/${randomGame.appid}/header.jpg?`,
      "type":"image/jpg"
    })
    .appendTo($("#games-div"))
    .on("click", (event) => {
      $(event.currentTarget).clone().removeClass().appendTo("#playlist-container")
      .on("click", (event) => {
        $(event.currentTarget).remove();
      });
      $("#playlist-div").slideDown();
    });
}


// SEARCH FILTER
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

// SORT FUNTIONS
const sortByPlaytime = (a,b) => {
  if (a.playtime_forever < b.playtime_forever) {
    return -1;
  }
  if (a.playtime_forever > b.playtime_forever) {
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
