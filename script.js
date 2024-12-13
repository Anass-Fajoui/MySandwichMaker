// Button to switch between pages
let builderBtn = document.getElementById('builder');
let randomBtn = document.getElementById('random');
let backWelcome1 = document.getElementById('backWelcome1');
let backWelcome2 = document.getElementById('backWelcome2');

let maker_page = document.querySelector('.maker-page');
let welcome_page = document.querySelector('.welcome-page');
let random_page = document.querySelector('.random-page');

// Buttons to add or remove elements
let addMeat = document.getElementById('addMeat');
let minusMeat = document.getElementById('minusMeat');

let addTomato = document.getElementById('addTomato');
let minusTomato = document.getElementById('minusTomato');

let addLettuce = document.getElementById('addLettuce');
let minusLettuce = document.getElementById('minusLettuce'); 

let addCheese = document.getElementById('addCheese');
let minusCheese = document.getElementById('minusCheese');

let addOnion = document.getElementById('addOnion');
let minusOnion = document.getElementById('minusOnion');

// let bread2 = document.getElementById('bread2');
let bread2 = document.createElement('div');
bread2.className = "bread2";

let Burger = document.getElementById('burger');
Burger.appendChild(bread2);

// 280px max height
let height = 0;

let price = 0.5;

let priceTag = document.getElementById('price-tag');

addMeat.addEventListener('click', () => {
    height += 40;
    if (height > 280) {
        alert('You reached the limit of the burger, Please finish the burger');
        height -= 40;
        return;
    }else{
        let meat = document.createElement('div');
        meat.className = "meat";
        Burger.appendChild(meat);
        price += 2;
        priceTag.textContent = `Total Price : $${price.toFixed(2)}`;
    }
    
});
minusMeat.addEventListener('click', () => {
    height -= 40;
    let meat = Burger.querySelector('.meat');
    Burger.removeChild(meat);
    price -= 2;
    priceTag.textContent = `Total Price : $${price.toFixed(2)}`;
});

addTomato.addEventListener('click', () => {
    height += 25;
    if (height > 280) {
        alert('You reached the limit of the burger, Please finish the burger');
        height -= 25;
        return;
    }else{
        let tomato = document.createElement('div');
        tomato.className = "tomato";
        Burger.appendChild(tomato);
        price += 0.3;
        priceTag.textContent = `Total Price : $${price.toFixed(2)}`;
    }
});
minusTomato.addEventListener('click', () => {
    height -= 25;
    let tomato = Burger.querySelector('.tomato');
    Burger.removeChild(tomato);
    price -= 0.3;
    priceTag.textContent = `Total Price : $${price.toFixed(2)}`;
});

addCheese.addEventListener('click', () => {
    height += 10;
    if (height > 280) {
        alert('You reached the limit of the burger, Please finish the burger');
        height -= 10;
        return;
    }else{
        let cheese = document.createElement('div');
        cheese.className = "cheese";
        Burger.appendChild(cheese);
        price += 0.5;
        priceTag.textContent = `Total Price : $${price.toFixed(2)}`;
    }
});
minusCheese.addEventListener('click', () => {
    height -= 10;
    let cheese = Burger.querySelector('.cheese');
    Burger.removeChild(cheese);
    price -= 0.5;
    priceTag.textContent = `Total Price : $${price.toFixed(2)}`;
});

addLettuce.addEventListener('click', () => {
    height += 15;
    if (height > 280) {
        alert('You reached the limit of the burger, Please finish the burger');
        height -= 15;
        return;
    }else {
        let lettuce = document.createElement('div');
        lettuce.className = "lettuce";
        Burger.appendChild(lettuce);
        price += 0.25;
        priceTag.textContent = `Total Price : $${price.toFixed(2)}`;
    }
});
minusLettuce.addEventListener('click', () => {
    height -= 15;
    let lettuce = Burger.querySelector('.lettuce');
    Burger.removeChild(lettuce);
    price -= 0.25;
    priceTag.textContent = `Total Price : $${price.toFixed(2)}`;
});

addOnion.addEventListener('click', () => {
    height += 15;
    if (height > 280) {
        alert('You reached the limit of the burger, Please finish the burger');
        height -= 15;
        return;
    } else{
        let onion = document.createElement('div');
        onion.className = "onion";
        Burger.appendChild(onion);
        price += 0.2;
        priceTag.textContent = `Total Price : $${price.toFixed(2)}`;
    }
});
minusOnion.addEventListener('click', () => {
    height -= 15;
    let onion = Burger.querySelector('.onion');
    Burger.removeChild(onion);
    price -= 0.2;
    priceTag.textContent = `Total Price : $${price.toFixed(2)}`;
});

let finishBtn = document.getElementById('finish-btn');
finishBtn.addEventListener('click', () => {
    let box2 = document.querySelector('.box2');
    box2.style.alignItems = "center";
    
    let bread1 = document.createElement('div');
    bread1.className = "bread1";
    let seedPositions = [
        { top: '20px', left: '30px' },
        { top: '15px', left: '70px' },
        { top: '20px', left: '110px' },
        { top: '10px', left: '150px' },
        { top: '15px', left: '190px' },
        { top: '25px', left: '230px' },
        { top: '35px', left: '50px' },
        { top: '30px', left: '140px' },
        { top: '40px', left: '180px' },
        { top: '40px', left: '100px' }
    ];
    seedPositions.forEach(position => {
        let span = document.createElement('span');
        span.classList.add('seed'); 
        span.style.position = 'absolute';
        span.style.top = position.top;
        span.style.left = position.left;
        bread1.appendChild(span);
    });

    Burger.appendChild(bread1);
    
    let buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        if (button.id !== 'reset-btn') {
            button.style.pointerEvents = 'none';
            button.style.opacity = '0.5';
        }
    });
});

let resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
    let ingredients = Burger.querySelectorAll('.meat, .tomato, .cheese, .lettuce, .onion, .bread1');
    ingredients.forEach(ing => Burger.removeChild(ing));
    let box2 = document.querySelector('.box2');
    box2.style.alignItems = "end";
    height = 0;
    price = 0.5;
    priceTag.textContent = `Total Price : $${price.toFixed(2)}`;

    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.id !== 'reset-btn') {
            button.style.pointerEvents = 'auto';
            button.style.opacity = '1';
        }
    });
});


builder.addEventListener('click', () => {
    maker_page.style.display = 'flex';
    welcome_page.style.display = 'none';
});
backWelcome1.addEventListener('click', () => {
    // Clear the burger
    let ingredients = Burger.querySelectorAll('.meat, .tomato, .cheese, .lettuce, .onion, .bread1');
    ingredients.forEach(ing => Burger.removeChild(ing));
    let box2 = document.querySelector('.box2');
    box2.style.alignItems = "end";
    height = 0;
    price = 0.5;
    priceTag.textContent = `Total Price : $${price.toFixed(2)}`;

    welcome_page.style.display = 'block';
    maker_page.style.display = 'none';
});
randomBtn.addEventListener('click', () => {
    random_page.style.display = 'flex';
    welcome_page.style.display = 'none';
});
backWelcome2.addEventListener('click', () => {
    // Clear the burger
    let ingredients = randomBurger.querySelectorAll('.meat, .tomato, .cheese, .lettuce, .onion, .bread1');
    ingredients.forEach(ing => randomBurger.removeChild(ing));
    let container = document.querySelector('.container');
    container.style.alignItems = "end";
    price = 0.5;
    priceTag2.textContent = `Total Price : $${price.toFixed(2)}`;

    welcome_page.style.display = 'block';
    random_page.style.display = 'none';
});


let randomBurger = document.getElementById('burger-random');
let randomPrice = document.getElementById('price-tag2');

let bread22 = document.createElement('div');
bread22.className = "bread2";
randomBurger.appendChild(bread22);

let generateBtn = document.getElementById('generate');
let priceTag2 = document.getElementById('price-tag2');

generateBtn.addEventListener('click', () => {
    // Clear the burger
    let ingredients = randomBurger.querySelectorAll('.meat, .tomato, .cheese, .lettuce, .onion, .bread1');
    ingredients.forEach(ing => randomBurger.removeChild(ing));
    let container = document.getElementById('random-container');
    container.style.alignItems = "end";
    price = 0.5;

    // Random number of ingredients
    let randomMeat = Math.floor(Math.random() * 3);
    let randomTomato = Math.floor(Math.random() * 4);
    let randomCheese = Math.floor(Math.random() * 4);
    let randomLettuce = Math.floor(Math.random() * 4);
    let randomOnion = Math.floor(Math.random() * 4);

    price += randomMeat * 2 + randomTomato * 0.3 + randomCheese * 0.5 + randomLettuce * 0.25 + randomOnion * 0.2;
    priceTag2.textContent = `Total Price : $${price.toFixed(2)}`;

    let ingredientArr = [];
    for (let i = 0; i < randomMeat; i++) {
        let meatR = document.createElement('div');
        meatR.className = "meat";
        ingredientArr.push(meatR);
    }
    for (let i = 0; i < randomTomato; i++) {
        let tomatoR = document.createElement('div');
        tomatoR.className = "tomato";
        ingredientArr.push(tomatoR);
    }
    for (let i = 0; i < randomCheese; i++) {
        let cheeseR = document.createElement('div');
        cheeseR.className = "cheese";
        ingredientArr.push(cheeseR);
    }
    for (let i = 0; i < randomLettuce; i++) {
        let lettuceR = document.createElement('div');
        lettuceR.className = "lettuce";
        ingredientArr.push(lettuceR);
    }
    for (let i = 0; i < randomOnion; i++) {
        let onionR = document.createElement('div');
        onionR.className = "onion";
        ingredientArr.push(onionR);
    }
    for (let i = ingredientArr.length - 1; i > 0; i--) { 
    
        // Generate random index 
        const j = Math.floor(Math.random() * (i + 1));
                      
        // Swap elements at indices i and j
        const temp = ingredientArr[i];
        ingredientArr[i] = ingredientArr[j];
        ingredientArr[j] = temp;
    }
    ingredientArr.forEach(ing => {
        randomBurger.appendChild(ing);
    });
    let bread11 = document.createElement('div');
    bread11.className = "bread1";
    let seedPositions = [
        { top: '20px', left: '30px' },
        { top: '15px', left: '70px' },
        { top: '20px', left: '110px' },
        { top: '10px', left: '150px' },
        { top: '15px', left: '190px' },
        { top: '25px', left: '230px' },
        { top: '35px', left: '50px' },
        { top: '30px', left: '140px' },
        { top: '40px', left: '180px' },
        { top: '40px', left: '100px' }
    ];
    seedPositions.forEach(position => {
        let span = document.createElement('span');
        span.classList.add('seed'); 
        span.style.position = 'absolute';
        span.style.top = position.top;
        span.style.left = position.left;
        bread11.appendChild(span);
    });
 
    randomBurger.appendChild(bread11);
    container.style.alignItems = "center";

});