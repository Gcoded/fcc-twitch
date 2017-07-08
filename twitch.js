
var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", 'mr_mammal',
"storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", 'gamesdonequick', 'brunofin', 'comster404'];
var elementUl = document.getElementById('results');

userNames.forEach(function(name) {
  var url = 'https://wind-bow.gomix.me/twitch-api/streams/' + name + '?callback=?'
  var link = link = 'https://www.twitch.tv/' + name;
  var detail, status;

  $.getJSON(url, function(data) {
    if (data.stream !== null) {
      detail = data.stream.channel.status;
      status = 'online'
    }
    else {
      detail = 'Currently offline';
      status = 'offline';
    }

    var userLi = document.createElement('li');
    userLi.innerHTML = '<h3><a href ='+ link +' target = blank>'+ name +'</a></h3>' +
                        '<p>'+ detail +'</p>';

    elementUl.appendChild(userLi);

  });
});

var footer = document.getElementById('footer');
footer.style.position = 'relative';



