// import functions and grab DOM elements
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
const horseSound = document.getElementById('horse-sound');

const dogImage = document.getElementById('dog-pic');
const catImage = document.getElementById('cat-pic');
const horseImage = document.getElementById('horse-pic');

const animalHeard = document.getElementById('animal-heard');

// set event listeners 
dogImage.addEventListener('click', () => {
  dogSound.play();
  animalHeard.textContent = "Dog";
})

catImage.addEventListener('click', () => {
  catSound.play();
  animalHeard.textContent = "Cat";

})

horseImage.addEventListener('click', () => {
  horseSound.play();
  animalHeard.textContent = "Horse";

})