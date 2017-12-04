$(document).ready(function () {

    $('#submitWeather').click(function () {

        var city = $("#city").val();
        if (city != '') {

            $.ajax({

                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=f984915d5a4b2ca62c70e2d0a69a705f" + "&lang=fr",//API KEY PRIVé 
                type: "GET",
                dataType: "jsonp",
                success: function (data) {
                    console.log(data);
                    var widget = show(data);
                    $("#show").html(widget);
                    $("#city").val('');

                }

            });

        } else {
            $("#error").html("<div class='alert alert-danger text-center'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>Le champ ne peut être vide </div>");
        }

    });

});

function show(data) { // renvoi données de l'api cx
    return "<h3 style='font-size:40px; font-weight: bold;' class='text-center;'>La température pour  " + data.name + ", " + data.sys.country + "</h3>" +

        "<h3 style='padding-left:40px;'><strong> Temps Actuel </strong> :  <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' >" + data.weather[0].description + "</h3>" + //icone correspondance

        "<h3 style='padding-left:40px;'><strong> Température </strong> : " + data.main.temp + "&deg;C</h3>" + 



        "<h3 style='padding-left:40px;'><strong> Température minimum </strong> : " + data.main.temp_min + "&deg</h3>" + 

        "<h3 style='padding-left:40px;'><strong> Température maximum </strong> : " + data.main.temp_max + "&deg</h3>"; 
}
