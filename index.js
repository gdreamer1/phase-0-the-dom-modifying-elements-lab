// Write your code here!
const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory'

const name = "Gio"
newHeader.innerHTML = `${name} is the champion`