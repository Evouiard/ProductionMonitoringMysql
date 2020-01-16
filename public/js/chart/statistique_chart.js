
function getRandomInt() {
  return Math.floor(Math.random() * (50 - 5 + 1)) + 5

}

document.addEventListener('DOMContentLoaded',function(){
  var ctx = document.getElementById("myChart").getContext('2d');
  var chart = new Chart(ctx, {
// The type of chart we want to create
    type: 'bar',
// The data for our dataset
    data: {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
      datasets: [{
        label: 'Stock des grillages',
        backgroundColor: '#f87979',
        borderColor: 'rgb(242,255,250)',
        data: [getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt(), getRandomInt()]
      }]
    },
  });
})
