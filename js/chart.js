const firstChart = document.querySelector('.my-chart');
const secondChart = document.querySelector('.my-second-chart');
const thirdChart = document.querySelector('.my-third-chart');
const fourthChart = document.querySelector('.my-fourth-chart');
const fifthChart = document.querySelector('.my-fifth-chart');
const sixthChart = document.querySelector('.my-sixth-chart');

const netherlandButton = document.querySelector('.nl-button');
const belgiumButton = document.querySelector('.be-button');
const germanyButton = document.querySelector('.ge-button');
const swedenButton = document.querySelector('.se-button');

const nameHeader = document.querySelector('.name-header');
const infoText = document.querySelector('.info-text');

let dutchApi = 'https://api.open-meteo.com/v1/dwd-icon?latitude=52.25&longitude=5.75&hourly=temperature_2m,relativehumidity_2m,rain,snowfall,cloudcover,windspeed_10m&start_date=2023-06-13&end_date=2023-06-14';
let belgiumApi = 'https://api.open-meteo.com/v1/dwd-icon?latitude=50.75&longitude=4.50&hourly=temperature_2m,relativehumidity_2m,rain,snowfall,cloudcover,windspeed_10m&start_date=2023-06-13&end_date=2023-06-14';
let germanApi = 'https://api.open-meteo.com/v1/dwd-icon?latitude=51.50&longitude=10.50&hourly=temperature_2m,relativehumidity_2m,rain,snowfall,cloudcover,windspeed_10m&start_date=2023-06-13&end_date=2023-06-14'
let swedishApi = 'https://api.open-meteo.com/v1/dwd-icon?latitude=62.00&longitude=15.00&hourly=temperature_2m,relativehumidity_2m,rain,snowfall,cloudcover,windspeed_10m&start_date=2023-06-13&end_date=2023-06-14';

let useUrl = dutchApi;

function changeCountry(code) {
    if (code === 'nl') {
        useUrl = dutchApi;
        infoText.innerHTML = ''
        nameHeader.innerHTML = 'Welcome to the weather dashboard of the Netherlands'
    } else if (code === 'be') {
        useUrl = belgiumApi;
        infoText.innerHTML = ''
        nameHeader.innerHTML = 'Welcome to the weather dashboard of Beglium'
    } else if (code === 'ge') {
        useUrl = germanApi;
        infoText.innerHTML = ''
        nameHeader.innerHTML = 'Welcome to the weather dashboard of Germany'
    } else if (code === 'se') {
        useUrl = swedishApi;
        infoText.innerHTML = ''
        nameHeader.innerHTML = 'Welcome to the weather dashboard of Sweden'
    }

    fetch(useUrl)
        .then(myData => myData.json())
        .then(textData => createChart(textData));
}

if (useUrl && (netherlandButton || belgiumButton || germanyButton || swedenButton)) {
    netherlandButton.addEventListener('click', function () {
        changeCountry('nl');
    });
    belgiumButton.addEventListener('click', function () {
        changeCountry('be');
    });
    germanyButton.addEventListener('click', function () {
        changeCountry('ge');
    })
    swedenButton.addEventListener('click', function () {
        changeCountry('se');
    })
}

let chart = [];

function createChart(data) {
    for (let i = 0; i < chart.length; i++) {
        chart[i].destroy();
    }
    chart = [];
    chart.push(
        new Chart(firstChart, {
            type: 'bar',
            data: {
                labels: data.hourly.time,
                datasets: [{
                    backgroundColor: '#a3b0e3',
                    label: '# cloudcover',
                    data: data.hourly.cloudcover,
                    borderWidth: 1
                }
                ]
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
        })
    );

    chart.push(
        new Chart(secondChart, {
            type: 'bar',
            data: {
                labels: data.hourly.time,
                datasets: [{
                    backgroundColor: '#03155d',
                    label: '# rain',
                    data: data.hourly.rain,
                    borderWidth: 1
                }
                ]
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
        })
    );

    chart.push(
        new Chart(thirdChart, {
            type: 'line',
            data: {
                labels: data.hourly.time,
                datasets: [{
                    backgroundColor: '#434653',
                    label: '# relative humidity',
                    data: data.hourly.relativehumidity_2m,
                    borderWidth: 1,
                }
                ]
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
        })
    );

    chart.push(
        new Chart(fourthChart, {
            type: 'bar',
            data: {
                labels: data.hourly.time,
                datasets: [{
                    backgroundColor: '#d2d8f4',
                    label: '# snowfall',
                    data: data.hourly.snowfall,
                    borderWidth: 1
                }
                ]
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
        })
    );

    chart.push(
        new Chart(fifthChart, {
            type: 'bar',
            data: {
                labels: data.hourly.time,
                datasets: [{
                    backgroundColor: '#ffee58',
                    label: '# temperature',
                    data: data.hourly.temperature_2m,
                    borderWidth: 1
                }
                ]
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
        })
    );
    chart.push(

        new Chart(sixthChart, {
            type: 'bar',
            data: {
                labels: data.hourly.time,
                datasets: [{
                    backgroundColor: '#636363',
                    label: '# windspeed',
                    data: data.hourly.windspeed_10m,
                    borderWidth: 1
                }
                ]
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
        })
    );

}

//check for username
const checkLogin = window.localStorage.getItem('personObject');
console.log(checkLogin);
const user = JSON.parse(checkLogin);
console.log(user);

const username = document.querySelector('.username');

username.innerHTML = user['user-information'].name