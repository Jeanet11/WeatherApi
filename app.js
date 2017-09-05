

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=Carcassonne&cnt=3&mode=html&appid=478ace2ac65f244edad1064f666e3bd0",
    
}).done(function (data) {
    console.log(data);

});