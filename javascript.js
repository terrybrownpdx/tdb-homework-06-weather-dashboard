$(document).ready(function () {
    //var apiKey = "a115d20ebd38d51609412e1e1556337d"    
    var queryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=45.512230&lon=-122.658722&exclude=current,minutelypart&appid=a115d20ebd38d51609412e1e1556337d";

    // function weatherSearch(passedLatitude, passedLongitude) {
    //     if (passedLatitude.length > 0) {
    //         queryURL = queryUrl+"&lat="+passedLatitude;
    //     }
    //     if (passedLongitude.length > 0) {
    //         queryURL = queryUrl+"&lon="+passedLongitude;
    //     }

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(queryUrl);

        var allEvents = response.daily;

        $("#daily-info").empty();
        for (var i = 5; i < allEvents.length; i++) {
            console.log("Wind Speed: " + JSON.stringify(allEvents[i].wind_speed));
            console.log("Humidity " + JSON.stringify(allEvents[i].humidity));
            console.log("Temp " + JSON.stringify(allEvents[i].temp));
            console.log("Temperature " + JSON.stringify(allEvents.tempF));

            $("#daily-info").text("5-Day: " + JSON.stringify(allEvents[i].temp));
            $("#wind").text("Wind Speed: " + JSON.stringify(allEvents[i].wind_speed));
            $("#humidity").text("Humidity: " + JSON.stringify(allEvents[i].humidity));
            //$("#temp").text("Temp: " + JSON.stringify(allEvents[i].temp));

            var tempF = (allEvents[i].temp) * 1.80 + 32;

            // add temp content to html
            //$(".temp").text("Temperature (K) " + JSON.stringify(allEvents[i].temp));
            //$(".tempF").text("Temperature (F) " + JSON.stringify(allEvents[i].tempF.toFixed(2)));

            console.log("Wind Speed: " + JSON.stringify(response.daily[0].wind_speed));
            console.log("Humidity: " + JSON.stringify(response.daily[0].humidity));
            console.log("Temp: " + JSON.stringify(response.daily[0].temp));
            console.log("Temperature (F): " + tempF);
        }
    })
//}

    // $("#Submit").on("click", function (event) {
    //     event.preventDefault();
    //     var passedLatitude = $("#lat").val().trim();
    //     var passedLongitude = $("#lon").val().trim();
    //     console.log("passedLatitude");

    //     weatherSearch(passedLatitude, passedLongitude);

    // })
});

