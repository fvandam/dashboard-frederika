const cards = document.querySelector('.content-block');
const key = 'ae95c91e-0b42-4b08-93f4-cf814240fccb';

const options = {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer' + key

  }
};

fetch('https://api.coincap.io/v2/assets', options)
  .then(response => response.json())
  .then(response => alterData(response))
  .catch(err => console.error(err));


function alterData(info) {
  console.log(info)


  const newDiv = document.createElement('div'); //in de row wordt een div aangemaakt
  newDiv.classList.add('row')


  //hier onder wordt de data van de fetch link gezet.
  newDiv.innerHTML = `

       

       <div class="col-md-4 mb-3">
       <div class="card bg-dark">
       <img class="img-fluid card-img-top w-25 mx-auto" src="img/bitcoin.png">
         <div class="card-body">
           <h5 class="card-title text-center text-white">Price: $${info.data[0].priceUsd}</h5>
           <p class="card-text text-center text-white">Change percent in 24hr  ${info.data[0].changePercent24Hr}%</p>
         </div>
       </div>
       </div>
       
       <div class="col-md-4 mb-3">
       <div class="card bg-dark">
       <img class="img-fluid card-img-top w-25 mx-auto" src="img/ethereum.png">
         <div class="card-body">
           <h5 class="card-title text-center text-white">Price: $${info.data[1].priceUsd}</h5>
           <p class="card-text text-center text-white">Change percent in 24hr  ${info.data[1].changePercent24Hr}%</p>
         </div>
       </div>
       </div>
       

       <div class="col-md-4 mb-3">
       <div class="card bg-dark ">
       <img class="img-fluid card-img-top w-25 mx-auto" src="img/tether.png">
         <div class="card-body">
           <h5 class="card-title text-center text-white">Price: $${info.data[2].priceUsd}</h5>
           <p class="card-text text-center text-white">Change percent in 24hr  ${info.data[2].changePercent24Hr}%</p>
         </div>
       </div>
       </div>
       

       `;

  cards.append(newDiv); //hij maakt elke keer een card automatisch aan 
}

const chartAssignment1 = document.querySelector('.chart-assignment-1');

const backgroundColours = ['lightblue']; //De kleur van de chart
fetch('https://api.coincap.io/v2/assets')
  .then(function (response) {
    return response.json();
  })
  .then(function (assignment1Data) {
    createChart(chartAssignment1, assignment1Data);
  });


function createChart(canvasElement, chartData) {

 console.log(chartData);

  const labels =[]
  const data = [];

  for (let index = 0; index < chartData.data.length; index++) {
    const cryptocoin = chartData.data[index];
    console.log(cryptocoin)
    if (cryptocoin.priceUsd > 25 && cryptocoin.priceUsd < 150 ){ //Laat alleen crypto's zien die tussen de 25-100 euro zijn

      labels.push(cryptocoin.id);
      data.push(Number(cryptocoin.priceUsd))
    }
  }

    new Chart(canvasElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          backgroundColor: backgroundColours,
          label: 'Cryptocurrencies between 25-150 euro',
          data: data,
          borderWidth: 1
        }]
      },
      
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
}







const chartAssignment2 = document.querySelector('.chart-assignment-2');

const backgroundColours1 = ['lightblue'];
fetch('https://api.coincap.io/v2/assets')
  .then(function (response) {
    return response.json();
  })
  .then(function (assignment2Data) {
    createChart1(chartAssignment2, assignment2Data);
  });


function createChart1(canvasElement1, chartData1) {

 console.log(chartData1);

  const labels =[]
  const data = [];

  for (let index = 0; index < chartData1.data.length; index++) {
    const cryptocoin1 = chartData1.data[index];
    console.log(cryptocoin1)
    if (cryptocoin1.priceUsd > 1000 && cryptocoin1.priceUsd < 250000 ){

      labels.push(cryptocoin1.id);
      data.push(Number(cryptocoin1.priceUsd))
    }
  }

    new Chart(canvasElement1, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          backgroundColor: backgroundColours1,
          label: 'Cryptocurrencies between 1000-250000 euro',
          data: data,
          borderWidth: 1
        }]
      },
      
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
}







