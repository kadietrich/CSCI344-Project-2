(function () {
    "use strict";
    var $ = window.$,
        main;
    main = function () {
        var twitterFunction = function (searchTerm) {
            var twitter = new ctwitter.CTwitter();
            twitter.stream('statuses/filter', { lang: 'en', track: searchTerm }, function (stream) {
                var count = 0;
                stream.on('data', function (tweet) {
                    $('<p class="tweet"><img src="' + tweet.profile_image_url + '" />' + tweet.text + '</p>').hide()
                        .prependTo('#results')
                        .fadeIn(500)
                        .slideDown(50);
                    $('#results p:gt(4)').fadeOut(500, function () { $(this).remove(); });
                    count += 1;
                    $('#tweetCounter').html($("<p class='counter'>Tweets seen: " + count + "</p>"));
                });
            });
        };
        $('#search_input').val("Enter a search term");
        $('#search_input_button').click(function () {
            twitterFunction($("#search_input").val());
            var term = $('#search_input').val();
            $('#results_header').html("<h1>Tweets about: " + term + "</h1>");
            $('#search_form').fadeOut(500, function () {
                $('#results').fadeIn(500);
                $('#tweetCounter').fadeIn(500);
            });
        });
    };
    $(document).ready(main);
    window.main = main;
}());