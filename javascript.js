$(document).ready(function () {
    //var apiKey = "a115d20ebd38d51609412e1e1556337d"    
    var queryUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=45.512230&lon=-122.658722&exclude=current,minutelypart&appid=a115d20ebd38d51609412e1e1556337d";

    //function weatherSearch(passedPostalCode, passedEvent, passedDate) {
    //if(passedPostalCode.length > 0){
    //queryURL = queryURL+"&postal_code="+passedPostalCode;
    //}

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(queryUrl);

        var allEvents = response.daily;

        $("#daily-info").empty();
        for (var i = 0; i < allEvents.length; i++) {
        console.log("Wind Speed: " + JSON.stringify(allEvents[i].wind_speed));
        console.log("Humidity " + JSON.stringify(allEvents[i].humidity));
        console.log("Temp " + JSON.stringify(allEvents[i].temp));
        
        var wind = $("#wind");
        wind.text("Wind Speed: " + allEvents[i].wind_speed);
        //     //var city = $("<div>");
        //     //city.text("City " + allEvents[i].title);
        //     var date = $("<div>");
        //     hourly.text("Hourly " + allEvents[i].hourly);
        //     $("#event-info").append(city, event, date);
        // }
        //     })
        // }

        //$("#daily-info").text("5-Day: " + JSON.stringify(response.daily[0].temp));
        $(".wind").text("Wind Speed: " + JSON.stringify(response.daily[0].wind_speed));
        $(".humidity").text("Humidity: " + JSON.stringify(response.daily[0].humidity));
        $(".temp").text("Temp: " + JSON.stringify(response.daily[0].temp));

        var tempF = (response.daily[0].temp - 273.15) * 1.80 + 32;

        // add temp content to html
        $(".temp").text("Temperature (K) " + response.daily[0].temp[0]);
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

        console.log("Wind Speed: " + JSON.stringify(response.daily[0].wind_speed));
        console.log("Humidity: " + JSON.stringify(response.daily[0].humidity));
        console.log("Temp: " + JSON.stringify(response.daily[0].temp));
        console.log("Temperature (F): " + tempF);
        }
    })
          
        
    })

  




// // // Event handler for user clicking the select-artist button
// // $("#select-event").on("click", function (event) {
// //     // Preventing the button from trying to submit the form
// //     event.preventDefault();
// //     // Storing the artist name
// //     var postalCodeInput = $("#postal-code-input").val().trim();
// //     var eventInput = $("#event-input").val().trim();
// //     var dateInput = $("#date-input").val().trim();

// //     // Running the searchBandsInTown function(passing in the artist as an argument)
// //     searchSeatGeeks(postalCodeInput, eventInput, dateInput);
// //})


