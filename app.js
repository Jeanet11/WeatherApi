$.ajax({
   url: "http://samples.openweathermap.org/data/2.5/weather?q=Carcassonne,fr&",
	success : function (data) {
		$('#nom').html(data.name);
		$('#temp_max').html(data.main.temp_max  );
		$data.main.temp_min

		console.log(data);
	}
})
