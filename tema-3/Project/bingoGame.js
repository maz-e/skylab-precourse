// Función para crear el cartón del Bingo.
function createCard() {
    let card = [];
    for (let i = 1; i <= 15; i++) {
        let x = true;
        let num = 0;
        while(x) {
            num = randomNum();
            x = checkNumCard(card, num);
        }
        card.push({number: num, mathed: false})
    }
    return card;
}

// Function para crear bombo.
function createBombo() {
    let arr = [];
    for (let i = 1; i <= 90; i++) {
        arr.push(i);
    }
    return arr;
}

// Función para mostrar el cartón del Bingo
function showCard(card) {
    let result = '';
    card.forEach(function(elem, i){
        result += `[${elem.number}]`;
        if ((i+1) % 5 == 0) {
            result += '\n';
        }
    });
    return result;
}

// Función para mostar la bola.
function showBall(num) {
    return "The ball's number is " +  num;
}

// Función para generar los números aleatorios del 1 al 90.
function randomNum() {
    return Math.ceil(Math.random()* 90);
}

// Función para preguntar si quieres otro turno.
function askTurn() {
    return confirm('Next turn?'); 
}

// Función que saca una bola existente en el bombo
function getBall(data) {
    let numBall = randomNum();
    let index = data.indexOf(numBall);
    if (index != -1) {
        data.splice(index, 1);
        return numBall;
    } else {
        return getBall(data);
    }
}

// Function para comprobar si el número sacado existe en el cartón. 
function checkNumCard(card, num) {
    return card.some(function(elem){
        return elem.number === num;
    });
}

// Función para comprobar si hay una linea hecha.
function checkLine(card) {
    let arr = [];
    let acc = 0;
    card.forEach(function(elem, i){
        if(elem.mathed == true) acc++;
        if((i+1) % 5 == 0) {
            arr.push(acc);
            acc = 0;
        }
    });
    
    return arr.some(function(elem){
        return elem === 5;
    });
}

// Función para comprobar si el cartón está completo.
function checkBingo(card) {
    return card.some(function(elem){
        return elem.mathed === false
    });
}

// Función para encontrar el indice del número sacado en el cartón.
function findNumCardIndex(card, numBall) {
    return card.findIndex(elem => elem.number == numBall);
}

//Función para preguntar si se vuelve a jugar.
function playAgain() {
    if (confirm('Play again?')) {
        return bingo();
    } else {
        return 'Goodbye, see you again!';
    }
}

function bingo() {

    // Declaramos el nombre del usuario mediante prompt
    let userName = prompt("Player's name:");
    console.log(`Hello ${userName}!`);

    // Declaramos el bombo del Bingo mediante la función de crear Bombo.
    let bombo = createBombo();

    // Declaramos el cartón del Bingo mediante la función de crear cartón. --> Hacer que pregunte si se queda con el cartón o quiere otro en la version PRO.
    let card = createCard();
    console.log(showCard(card));

    let confirmTurn = true;
    let turn = 0;
    let line = false;
    let numBall = 0; 
    while(confirmTurn) {
        turn++;
        numBall = getBall(bombo);
        console.log(showBall(numBall));
        
        if(checkNumCard(card, numBall)) {
            index = findNumCardIndex(card, numBall);
            card[index].number = 'X';
            card[index].mathed = true;
            console.log(showCard(card));
        }

        if(checkLine(card) && line != checkLine(card)) {
            line = true;
            console.log('LINE in ' + turn + ' turns!');
        }

        if(!checkBingo(card)) {
            console.log('BINGO in ' + turn + ' turns!');
            return playAgain();
        }
        confirmTurn = askTurn();
    }
    return 'You lose in turn ' + turn + '!';
}

bingo();