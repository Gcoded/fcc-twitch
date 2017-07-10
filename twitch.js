
var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", 'mr_mammal',
"storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", 'gamesdonequick', 'brunofin', 'comster404'];
var elementUl = document.getElementById('results');

userNames.forEach(function(name) {
  var urlChannel = 'https://wind-bow.gomix.me/twitch-api/channels/' + name + '?callback=?'
  var urlStream = 'https://wind-bow.gomix.me/twitch-api/streams/' + name + '?callback=?'
  var link = link = 'https://www.twitch.tv/' + name;
  var message;

  $.getJSON(urlChannel, function(channelObj) {

    $.getJSON(urlStream, function(streamObj) {

      var userLi = document.createElement('li');

      if (channelObj.error) {
        message = 'Account Does Not Exist';
        userLi.className = 'not found';
      }
      else if (streamObj.stream) {
        message = streamObj.stream.channel.status;
        userLi.className = 'online';
      }
      else {
        message = 'Currently offline';
        userLi.className = 'offline';
      }

      userLi.innerHTML = '<h3><a href ='+ link +' target = blank>'+ name +'</a></h3>' +
                          '<p>'+ message +'</p>';

      elementUl.appendChild(userLi);
    });

  });

});

var allUsers = document.getElementsByTagName('LI');  //returns HTMLCollection, not an array

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

document.getElementById('footer').style.position = 'relative';
