function SandwichMaker() {
    const addMeat = document.getElementById('addMeat');
    const minusMeat = document.getElementById('minusMeat');

    const addTomato = document.getElementById('addTomato');
    const minusTomato = document.getElementById('minusTomato');

    const addLettuce = document.getElementById('addLettuce');
    const minusLettuce = document.getElementById('minusLettuce'); 
 
    const addCheese = document.getElementById('addCheese');
    const minusCheese = document.getElementById('minusCheese');

    const addOnion = document.getElementById('addOnion');
    const minusOnion = document.getElementById('minusOnion');

    // const bread2 = document.getElementById('bread2');
    const bread2 = document.createElement('div');
    bread2.className = "bread2";

    const Burger = document.getElementById('burger');
    Burger.appendChild(bread2);
    // 280px max height
    let height = 0;

    addMeat.addEventListener('click', () => {
        height += 40;
        if (height > 280) {
            alert('You reached the limit of the burger, Please finish the burger');
            height -= 40;
            return;
        }else{
            const meat = document.createElement('div');
            meat.className = "meat";
            Burger.appendChild(meat);
        }
        
    });
    minusMeat.addEventListener('click', () => {
        height -= 40;
        const meat = Burger.querySelector('.meat');
        Burger.removeChild(meat);
    });

    addTomato.addEventListener('click', () => {
        height += 25;
        if (height > 280) {
            alert('You reached the limit of the burger, Please finish the burger');
            height -= 25;
            return;
        }else{
        const tomato = document.createElement('div');
        tomato.className = "tomato";
        Burger.appendChild(tomato);
        }
    });
    minusTomato.addEventListener('click', () => {
        height -= 25;
        const tomato = Burger.querySelector('.tomato');
        Burger.removeChild(tomato);
    });

    addCheese.addEventListener('click', () => {
        height += 10;
        if (height > 280) {
            alert('You reached the limit of the burger, Please finish the burger');
            height -= 10;
            return;
        }else{
            const cheese = document.createElement('div');
            cheese.className = "cheese";
            Burger.appendChild(cheese);
        }
    });
    minusCheese.addEventListener('click', () => {
        height -= 10;
        const cheese = Burger.querySelector('.cheese');
        Burger.removeChild(cheese);
    });

    addLettuce.addEventListener('click', () => {
        height += 15;
        if (height > 280) {
            alert('You reached the limit of the burger, Please finish the burger');
            height -= 15;
            return;
        }else {
            const lettuce = document.createElement('div');
            lettuce.className = "lettuce";
            Burger.appendChild(lettuce);
        }
    });
    minusLettuce.addEventListener('click', () => {
        height -= 15;
        const lettuce = Burger.querySelector('.lettuce');
        Burger.removeChild(lettuce);
    });

    addOnion.addEventListener('click', () => {
        height += 15;
        if (height > 280) {
            alert('You reached the limit of the burger, Please finish the burger');
            height -= 15;
            return;
        } else{
            const onion = document.createElement('div');
            onion.className = "onion";
            Burger.appendChild(onion);
        }
    });
    minusOnion.addEventListener('click', () => {
        height -= 15;
        const onion = Burger.querySelector('.onion');
        Burger.removeChild(onion);
    });
    
    const finishBtn = document.getElementById('finish-btn');
    finishBtn.addEventListener('click', () => {
        const box2 = document.querySelector('.box2');
        box2.style.alignItems = "center";
        
        const bread1 = document.createElement('div');
        bread1.className = "bread1";
        const seedPositions = [
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
            const span = document.createElement('span');
            span.classList.add('seed'); 
            span.style.position = 'absolute';
            span.style.top = position.top;
            span.style.left = position.left;
            bread1.appendChild(span);
        });

        Burger.appendChild(bread1);
        
        const buttons = document.querySelectorAll('button');

        buttons.forEach(button => {
            if (button.id !== 'reset-btn') {
                button.style.pointerEvents = 'none';
                button.style.opacity = '0.5';
            }
        });
    });

    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener('click', () => {
        const ingredients = Burger.querySelectorAll('.meat, .tomato, .cheese, .lettuce, .onion, .bread1');
        ingredients.forEach(ing => Burger.removeChild(ing));
        const box2 = document.querySelector('.box2');
        box2.style.alignItems = "end";
        
        const buttons = document.querySelectorAll('button');
        height = 0;
        buttons.forEach(button => {
            if (button.id !== 'reset-btn') {
                button.style.pointerEvents = 'auto';
                button.style.opacity = '1';
            }
        });
    });
}
SandwichMaker();

