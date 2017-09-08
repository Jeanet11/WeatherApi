$.ajax({
   url: "http://samples.openweathermap.org/data/2.5/weather?q=Carcassonne,fr&",
	success : function (data) {
		$('#nom').html(data.name);
		$('#temp_max').html(data.main.temp_max  );
		$data.main.temp_min

		console.log(data);
	}
})
// console.log(data);    
// $('#meteo').html(data);    });
// $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Carcassonne&cnt=3&mode=html&appid=478ace2ac65f244edad1064f666e3bd0').then( function (data) {
//     console.log(data);    
// });
// $('#meteo').html(data); 


// $.ajax({
//     url: "http://api.openweathermap.org/data/2.5/weather?q=Carcassonne&cnt=3&mode=html&appid=478ace2ac65f244edad1064f666e3bd0",
    
// }).done(function (data) {
//     console.log(data);

// });