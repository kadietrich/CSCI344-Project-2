$(document).ready(function(){
    $("#search_input").val("Enter a search term");
    $("#search_input_button").click(function(){
      twitterFunction($("#search_input").val());
      $("#search_form").fadeOut(500, function(){
        $("#results").fadeIn(500);
        $("#tweetCounter").fadeIn(500);
      });
    });
  var count = 0;
  var twitterFunction = function(searchTerm){
    var twitter = new ctwitter.CTwitter();
    twitter.stream("statuses/filter", { lang:"en", track:searchTerm }, function (stream){
      stream.on("data", function (tweet){
		    $('<p class="tweet"><img src="'+tweet.profile_image_url+'" />'+tweet.text+'</p>').hide()
        .prependTo('#results')
        .fadeIn(500)
        .slideDown(50);
		    $('#results p:gt(3)').fadeOut(500, function(){ $(this).remove()});
        count += 1;
        $("#tweetCounter").html($("<p class='counter'>Tweets seen: "+count+"</p>"));
        
      });
    });
  };
  /*  var count = function(){
          var increment = 0;
          return function(){ return increment += 1; };
        };
        var ob = count();
        $("<p class='counter'>"+ob+"</p>").appendTo("#tweetCounter");
        $(".counter").replaceWith("<p class='counter'>"+ob+"</p>");
   */
});