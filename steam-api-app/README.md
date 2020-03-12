# Did I Buy That?
An app for quickly searching through your Steam library so you don't buy the same game twice.

![](https://github.com/TR-1000/TR-1000.github.io/blob/master/steam-api-app/did_i_buy_that.jpg)


# Usage
Enter your Steam player ID number then use the buttons that appear to: 
* Display your full Steam Library in descending order of playtime.
* Display your unplayed games.
* Randomly display one unplayed game.

Clicking on the game image will add it to a playlist that doesn't appear until something is added.

# Why, you ask?
I Have a lot of unplayed games in my Steam Library and on more that one occasion I've bought a Steam game twice.
Since I frequently have issues logging into Steam because of security protections I wanted a faster, easier way to view my library.



# Built With
* HTML
*  CSS
* JavaScript
* jQuery
* AJAX



# Issues
* You need your 64-bit Steam ID number for this app to work and that number is not easy to find.
* Your profile must be public for this app to access your library.
* This app pulls images from which may have broken links and because of that, it can take a while for your library to load. 
* Once the browser is refreshed.
you have to enter your ID number again.
* Steamworks API is limited a certain number of requests and once that limit is reached the app won't work correctly.



# Roadmap
* https://developers.google.com/web/fundamentals/instant-and-offline/web-storage/cache-api
* Adding the option for the user to enter their own API key.
* Add a button to clear the page before entering a new player ID number.
* Make the returned list of games sortable by name or playtime in ascending and descending order.


# Help Along The Way
* [Stack Overflow](https://stackoverflow.com/questions/22051573/how-to-hide-image-broken-icon-using-only-css-html-without-js/29111371#29111371)
* [W3Schools](https://www.w3schools.com/howto/howto_css_tooltip.asp)
* [CORS Anywhere](https://cors-anywhere.herokuapp.com/)
