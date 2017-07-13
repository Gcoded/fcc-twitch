
var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", 'mr_mammal',
"storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", 'gamesdonequick', 'brunofin', 'comster404'];
var resultsUl = document.getElementById('results');

userNames.forEach(function(name) {
  var urlChannel = 'https://wind-bow.gomix.me/twitch-api/channels/' + name + '?callback=?'
  var urlStream = 'https://wind-bow.gomix.me/twitch-api/streams/' + name + '?callback=?'

  $.getJSON(urlChannel, function(channelObj) {

    $.getJSON(urlStream, function(streamObj) {

      var userLi = document.createElement('li');
      var linkElement = document.createElement('a');
      var logoElement = document.createElement('img');
      var usernameElement = document.createElement('h3');
      var messageElement = document.createElement('p');

      linkElement.href = 'https://www.twitch.tv/' + name;
      linkElement.target = 'blank';
      usernameElement.innerHTML = name;

      if (channelObj.logo)
        logoElement.src = channelObj.logo;
      else
        logoElement.src = 'https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png';

      if (channelObj.error) {
        messageElement.innerHTML = 'Account Does Not Exist';
        userLi.className = 'not found';
      }
      else if (streamObj.stream) {
        messageElement.innerHTML = streamObj.stream.channel.status;
        userLi.className = 'online';
      }
      else {
        messageElement.innerHTML = 'Currently offline';
        userLi.className = 'offline';
      }

      linkElement.appendChild(logoElement);
      linkElement.appendChild(usernameElement);
      userLi.appendChild(linkElement);
      userLi.appendChild(messageElement);
      resultsUl.appendChild(userLi);
    });

  });

});

var allUsers = document.getElementsByTagName('LI');  //returns an HTMLCollection, which does not have
                                                    // same methods as an array

function showOnline() {
  for(var i = 0; i < allUsers.length; i++) {
    allUsers[i].style.display = 'list-item';
    if(allUsers[i].className !== 'online')
      allUsers[i].style.display = 'none';
  }
}

function showOffline() {
  for(var i = 0; i < allUsers.length; i++) {
    allUsers[i].style.display = 'list-item';
    if(allUsers[i].className !== 'offline')
      allUsers[i].style.display = 'none';
  }
}

function showNotFound() {
  for(var i = 0; i < allUsers.length; i++) {
    allUsers[i].style.display = 'list-item';
    if(allUsers[i].className !== 'not found')
      allUsers[i].style.display = 'none';
  }
}

function showAll() {
  for(var i = 0; i < allUsers.length; i++) {
    allUsers[i].style.display = 'list-item';
  }
}
