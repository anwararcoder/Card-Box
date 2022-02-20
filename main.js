document.title = 'Card Box'

let cardContainer = document.createElement('div');
document.body.appendChild(cardContainer);

let names = ['Anwar Ramadan', 'Mohamed Ramadan', 'Ahmed Ali', 'Mohamed Said'];
let ages = ['24 Years Old', '13 Years Old', '23 Years Old', '25 Years Old'];
let imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];


let CardBox = (names, ages, imgs) => {

	let card = document.createElement('div');
	cardContainer.appendChild(card);


	let nameCard = document.createElement('h4');
	let nameCardText = document.createTextNode(names);
	nameCard.appendChild(nameCardText);
	card.appendChild(nameCard);


	let ageCard = document.createElement('span');
	let ageCardText = document.createTextNode(ages);
	ageCard.appendChild(ageCardText);
	card.appendChild(ageCard);


	let imageCard = document.createElement('img');
	card.appendChild(imageCard);
	imageCard.setAttribute('src', imgs);
	imageCard.setAttribute('alt', names);


	cardContainer.style.overflow = 'hidden';
	card.style.background = '#DDD';
	card.style.padding = '30px';
	card.style.width = '26%';
	card.style.float = 'left';
	card.style.textAlign = 'center';
	card.style.borderRadius = '5px';
	card.style.margin = '0 30px 30px 0';



	nameCard.style.fontSize = '20px';
	nameCard.style.fontFamily = 'sans-serif';
	nameCard.style.margin = '0 0 15px 0';


	ageCard.style.display = 'block';
	ageCard.style.fontSize = '16px';
	ageCard.style.fontFamily = 'fantasy';
	ageCard.style.margin = '0 0 30px 0';


	imageCard.style.width = '100%';

}


for(let i = 0; i < names.length; i++) {
	CardBox(names[i], ages[i], imgs[i]);
}