// Menu

const btnGroup = document.querySelector('.btn-group-vertical');

btnGroup.style.flexDirection = 'row';
btnGroup.style.gap = '4px';

const buttons = document.querySelectorAll('.btn-group-vertical button');

buttons.forEach(button => {
  button.style.borderRadius = '0.25rem';
  button.style.width = 'auto';
});

// Header

const header = document.querySelector('.jumbotron');
header.style.color = '#ffffff';
header.style.textAlign = 'right';
header.style.backgroundColor = '#6c757d';

const headerButton = document.querySelector('.jumbotron a.btn.btn-primary.btn-lg');

headerButton.style.backgroundColor = '#28a745';
headerButton.style.border = 'none';

// Cards

const cardContainers = document.querySelectorAll('.col-lg-3');

const cardContainersArray = Array.from(cardContainers);

const lastItem = cardContainersArray.splice(-1, 1)[0]; 

cardContainersArray.unshift(lastItem);

const thirdItem = cardContainersArray.splice(2, 1)[0];

cardContainersArray.push(thirdItem);

const rows = document.querySelectorAll('.row');

if (rows.length >= 3) {
  const terceiraRow = rows[2];
  
  cardContainersArray.forEach(cardContainer => {
    terceiraRow.appendChild(cardContainer);
  });
} 

const cardTitles = document.querySelectorAll('.card-title');

let animalCardButton;
cardTitles.forEach(cardTitle => {
  if (cardTitle.textContent === "Animais") {
    animalCardButton = cardTitle.parentNode.querySelector('.btn');
  }
});

if (animalCardButton) {
  animalCardButton.classList.add('btn-success');
}

// List

const list = document.querySelector('.list-group');

const fourthItem = document.createElement('li');
fourthItem.textContent = 'Quarto item'; 
fourthItem.classList.add('list-group-item', 'active'); 

list.appendChild(fourthItem);

const fifthItem = document.createElement('li');
fifthItem.textContent = 'Quinto item'; 
fifthItem.classList.add('list-group-item'); 

list.appendChild(fifthItem);

const firstItem = list.querySelector('.active');
firstItem.classList.remove('active');
