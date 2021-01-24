var apiKey = "839e3790699145d87b2fe7fa76e4baaf"

$.ajax({
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=839e3790699145d87b2fe7fa76e4baaf",
  })
    .done(function(response) {
      $( "#results" ).text(JSON.stringify(response));
    });

