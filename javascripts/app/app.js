$(document).ready(function(){
  var twitter = new ctwitter.CTwitter();
  twitter.stream("statuses/filter", { lang:"en", track:[] }, function (stream){
    stream.on("data", function (tweet){
		  $('<p class="tweet"><img src="'+tweet.profile_image_url+'" />'+tweet.text+'</p>')
		    .hide()
		    .prependTo('#tweets')
        .fadeIn(500)
		    .slideDown(50);
		  $('#tweets p:gt(9)')
		    .fadeOut(500, function() { $(this).remove() });
    });
  });
});