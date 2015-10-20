// YOUR CODE HERE:







var App = Parse.Object.extend('App', {what:'name'});

var app = new App();

var displayData = function(messages) {
  messages.forEach(function(message) {
    var messageBox = $('<div>').attr('class', 'chat');
    var userBox = $('<p>').attr('class', 'username').text(message.username || 'anonymous');
    var textBox = $('<p>').text(message.text);
    messageBox.append(userBox).append(textBox);
    $('#main').append(messageBox);
  });
};

var updateData = function() {
  $.ajax({
    type: 'GET',
    url: "https://api.parse.com/1/classes/chatterbox",
    data: 'order=-createdAt',
    contentType: "application/json",
    success: function(response) {
      getData = response.results;
      displayData(response.results);
    }
  });
};

updateData();
setInterval(updateData, 30000);
