//constant for the link to our API
const api_url = 'https://api.openweathermap.org/data/2.5/onecall?lat=55.950738&lon=-3.198376&units=metric&exclude=minutely,hourly&appid=001d35c6ba2b10e80036f30a5cd40bed'
//variable to get todays date
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
//variable to get the current day of the week
var d=new Date()
var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");


//function that fetches the data from the API and displays it on the webpage how we like
async function get_weather() {
  const response = await fetch(api_url);
  const data = await response.json();

  //logging the data into the console so that we can see how the data is laid out
  console.log(data);

  //getting the elements for the current day and displaying in respective locations
  document.getElementById('temp').innerHTML = parseInt(data.current.temp) + "°C";
  //getting the description for the current weather and displaying
  document.getElementById('desc').innerHTML = data.current.weather[0].description;
  //getting what the temperature feels like for the current day
  document.getElementById('feels').innerHTML = "Feels like: " + parseInt(data.current.feels_like) + "°C";
  //getting the current humidity
  document.getElementById('humidity').innerHTML = "Humidity: " + data.current.humidity +"%";
  //getting current wind gust
  document.getElementById('wind').innerHTML = "Wind gust: " + data.current.wind_gust + "m/s";


  //getting the temperature for the first day
  document.getElementById('temp1').innerHTML = parseInt(data.daily[1].temp.day) + "°C";
  //getting the description for the first day
  document.getElementById('desc1').innerHTML = data.daily[1].weather[0].description;

  //getting the temperature for the second day
  document.getElementById('temp2').innerHTML = parseInt(data.daily[2].temp.day) + "°C";
  //getting the description for the second day
  document.getElementById('desc2').innerHTML = data.daily[2].weather[0].description;

  //getting the temperature for the third day
  document.getElementById('temp3').innerHTML = parseInt(data.daily[3].temp.day) + "°C";
  //getting the description for the third day
  document.getElementById('desc3').innerHTML = data.daily[3].weather[0].description;

  //getting the temperature for the fourth day
  document.getElementById('temp4').innerHTML = parseInt(data.daily[4].temp.day) + "°C";
  //getting the description for the fourth day
  document.getElementById('desc4').innerHTML = data.daily[4].weather[0].description;

  //getting the temperature for the fifth day
  document.getElementById('temp5').innerHTML = parseInt(data.daily[5].temp.day) + "°C";
  //getting the description for the fifth day
  document.getElementById('desc5').innerHTML = data.daily[5].weather[0].description;

  //getting the temperature for the sixth day
  document.getElementById('temp6').innerHTML = parseInt(data.daily[6].temp.day) + "°C";
  //getting the description for the sixth day
  document.getElementById('desc6').innerHTML = data.daily[6].weather[0].description;


  //Getting todays date and displaying it
  document.getElementById('date').innerHTML = date;

  //The next elements are for displaying the current day and the coming days
  document.getElementById('day').innerHTML = weekday[d.getDay()];
  document.getElementById('weekday1').innerHTML = weekday[d.getDay()+1];
  document.getElementById('weekday2').innerHTML = weekday[d.getDay()+2];
  document.getElementById('weekday3').innerHTML = weekday[d.getDay()+3];
  document.getElementById('weekday4').innerHTML = weekday[d.getDay()+4];
  document.getElementById('weekday5').innerHTML = weekday[d.getDay()+5];
  document.getElementById('weekday6').innerHTML = weekday[d.getDay()+6];


  //this section adds our graph to the webpage

  //creating the variables that gets our canvas that we will be displaying the line chart on
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      //line type chart
      type: 'line',
      //selecting the data that we will be inputting into our chart
      data: {
          //labels are the days of the week, we need it to display the current day and the following ones
          labels: [weekday[d.getDay()], weekday[d.getDay()+1], weekday[d.getDay()+2], weekday[d.getDay()+3], weekday[d.getDay()+4], weekday[d.getDay()+5], weekday[d.getDay()+6]],

          datasets: [{
              label: 'Temperature throughout the week',
              data: [parseInt(data.current.temp), parseInt(data.daily[1].temp.day), parseInt(data.daily[2].temp.day), parseInt(data.daily[3].temp.day), parseInt(data.daily[4].temp.day),
              parseInt(data.daily[5].temp.day),parseInt(data.daily[6].temp.day)],
              backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#4BC0C0',
                  '#9966FF',
                  '#FF9F40'
              ],
              borderColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56',
                  '#4BC0C0',
                  '#9966FF',
                  '#FF9F40'
              ],
              borderWidth: 6
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

}

get_weather();
