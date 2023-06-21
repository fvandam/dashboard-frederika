
const chatInput = document.querySelector('#chat-input');
const chatSubmit = document.querySelector('#chat-submit');


const chatbox = document.querySelector('#chatbox');


const chatbotResponses = [
    'Hi, how can i help you today',
    'Hello! How are you today, im a chatbot and im here to answer your questions!',
    'If you are late for your ride dont worry! each hour a new bus, train or uber comes!',
    'If you are having trouble with the dashboards?  contact us as soon as possible.',
    'We are open from Monday to Friday, we are closed on saturday and sunday',

];


function addMessageToChatbox(message, sender) {

    const li = document.createElement('li');

    li.textContent = message;

    li.classList.add(sender === 'user' ? 'text-end' : 'text-start');

    chatbox.appendChild(li);
}

chatSubmit.addEventListener('click', () => {

    const message = chatInput.value;

    addMessageToChatbox(message, 'user');

    chatInput.value = '';

    setTimeout(() => {
        const randomResponse = chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)];
        addMessageToChatbox(randomResponse, 'chatbot');
    }, 1000);
});

//check for username

const checkLogin = window.localStorage.getItem('personObject');
console.log(checkLogin);
const user = JSON.parse(checkLogin);
console.log(user);

const username = document.querySelector('.username');

username.innerHTML = user['user-information'].name