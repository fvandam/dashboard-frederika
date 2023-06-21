


fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
    .then(myData => myData.json())
    .then(textData => YuGiOh(textData))

const firstChart = document.querySelectorAll('.my-chart');
const races = {};
const types = {};
const def = {};

const secondChart = document.querySelectorAll('.my-second-chart');
const thirthChart = document.querySelectorAll('.my-thirth-chart');
const forthChart = document.querySelectorAll('.my-forth-chart');
const fifthChart = document.querySelectorAll('.my-fifth-chart');
const defense = document.querySelectorAll('.defense')
const attack = document.querySelectorAll('.attack')
let spellCard = 0;

function YuGiOh(data) {
    data = data.data;
    for (let i = 0; i < data.length; i++) {
        const dataElement = data[i];
        const race = dataElement.race;
        const type = dataElement.type;
        const defense = dataElement.def
        if (races[race]) {
            races[race]++;
        } else {
            races[race] = 1;
        };

        if (types[type]) {
            types[type]++;
        } else {
            types[type] = 1;
        }
        // console.log(dataElement);

        if (def[defense]) {
            def[defense]++;
        } else {
            def[defense] = 1;
        };
    }


    // let i = 10;
    new Chart(firstChart, {
        type: 'bar',
        data: {
            labels: ['Continuous', 'Quick Play', 'Beast-Warrior', 'Fairy', 'Warrior'],
            datasets: [{
                backgroundColor: 'red',
                label: 'Races',
                data: [
                    races.Continuous,
                    races['Quick-Play'],
                    races['Beast-Warrior'],
                    races.Fairy,
                    races.Warrior,
                ],
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
    new Chart(secondChart, {
        type: 'line',
        data: {
            labels: ['Pendulum Effect Monster', 'Spell Card', 'Trap Card', 'Effect Monster', 'Link Monster'],
            datasets: [{
                backgroundColor: 'green',
                label: 'Types',
                data: [
                    types['Pendulum-Effect-Monster'],
                    types['Spell-Card'],
                    types['Trap-Card'],
                    types['Effect-Monster'],
                    types['Link-Monster'],
                ],
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

