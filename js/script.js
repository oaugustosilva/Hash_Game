/* Variables statement */

let x = document.querySelector(".x");
let o = document.querySelector(".o");
let messageContainer = document.querySelector("#final-message");
let messageText = document.querySelector("#final-message p");
let buttons = document.querySelectorAll("#button-container button");
let boxes = document.querySelectorAll(".box"); //selecting all the boxes.
let secondPlayer; //choose between the IA or a person.

//Game option when clicking on the buttons
for (let j = 0; j < buttons.length; j++) {

    buttons[j].addEventListener("click", function () {

        secondPlayer = this.getAttribute("id");

        if(secondPlayer == 'b1-2players'){
            console.log("Jogador 01  X  Jogador 02");
        } else if (secondPlayer == 'b2-AI'){
            console.log("Jogador 01  X  CPU");
        }

        for (let k = 0; k < buttons.length; k++) { //hiding the buttons after the click
            buttons[k].style.display = 'none';
        }
        setTimeout(function () { //showing the hash after the choosen game mode (2 player or AI)
            let bigContainer = document.querySelector("#big-container");
            bigContainer.classList.remove("hide");
        }, 500);
    });
}

let contador = 0;
let bandeira = 0;

//The game itself
for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () { //Function that makes the X or O appears on the hash.
        //Flag: when the code enter in the winner declarer routine, bandeira'll be set to 1 (means the game has a winner)
        if(bandeira == 1){
            contador = 0;
            console.log("Contador = 0, pois houve ganhador."); //By this, the game will start again with the X.
            bandeira = 0; //setting the flag to the original position.
        }
        let definidor = contador%2;

        let el = checkPlayer(definidor); //Checking who's turn is
        let elClone = el.cloneNode(true); //It's not good for the code use the element itself, so we do a clone and manipulate the clone. 
        
        if(secondPlayer == 'b2-AI' && contador%2 != 0 && bandeira == 0 ){
            computerPlayer();
            contador++;
        } else if(bandeira == 0) {

            if (this.childNodes.length == 0) {
                this.appendChild(elClone); //we can use the this because we're in the boxes[i].
                contador++;
            } else {
                alert("Play in an empty box!");
            }
    }
        checkWinCondition();
        checkBoxes();
    });
}


//Check whose turn is: X or O
function checkPlayer(definidor){ //routine to define who has the turn to play.
    if(definidor%2==0){
        //x-team turn
        el = x;
    } else if(definidor%2==1){
        //o-team turn
        el = o;
    } else {
        console.log("Definir diferente de 0 e 1.");
    }
    return el;
}

//checking who has won
function checkWinCondition() {
    //**** Checking if some team won the game; ****

    //Stating the boxes in variables
    let b1 = document.getElementById('miniblock_01');
    let b2 = document.getElementById('miniblock_02');
    let b3 = document.getElementById('miniblock_03');
    let b4 = document.getElementById('miniblock_04');
    let b5 = document.getElementById('miniblock_05');
    let b6 = document.getElementById('miniblock_06');
    let b7 = document.getElementById('miniblock_07');
    let b8 = document.getElementById('miniblock_08');
    let b9 = document.getElementById('miniblock_09');

    //First, the code will check the first horizontal line (boxes 1,2,3)
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        b1Child = b1.childNodes[0].innerHTML;
        b2Child = b2.childNodes[0].innerHTML;
        b3Child = b3.childNodes[0].innerHTML;

        if (b1Child == 'X' && b2Child == 'X' && b3Child == 'X') {
           winnerDeclarer('X');
        }
        if (b1Child == 'O' && b2Child == 'O' && b3Child == 'O') {
            winnerDeclarer('O');
        }
    }
    // The second horizontal line
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        b4Child = b4.childNodes[0].innerHTML;
        b5Child = b5.childNodes[0].innerHTML;
        b6Child = b6.childNodes[0].innerHTML;

        if (b4Child == 'X' && b5Child == 'X' && b6Child == 'X') {
            winnerDeclarer('X');
        }
        if (b4Child == 'O' && b5Child == 'O' && b6Child == 'O') {
            winnerDeclarer('O');
        }
    }
    //The third horizontal line
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        b7Child = b7.childNodes[0].innerHTML;
        b8Child = b8.childNodes[0].innerHTML;
        b9Child = b9.childNodes[0].innerHTML;

        if (b7Child == 'X' && b8Child == 'X' && b9Child == 'X') {
            winnerDeclarer('X');
        }
        if (b7Child == 'O' && b8Child == 'O' && b9Child == 'O') {
            winnerDeclarer('O');
        }
    }

    //Now, test the first vertical line (boxes 1,4,7)
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        b1Child = b1.childNodes[0].innerHTML;
        b4Child = b4.childNodes[0].innerHTML;
        b7Child = b7.childNodes[0].innerHTML;

        if (b1Child == 'X' && b4Child == 'X' && b7Child == 'X') {
            winnerDeclarer('X');
        }
        if (b1Child == 'O' && b4Child == 'O' && b7Child == 'O') {
            winnerDeclarer('O');
        }
    }
    //The second vertical
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        b2Child = b2.childNodes[0].innerHTML;
        b5Child = b5.childNodes[0].innerHTML;
        b8Child = b8.childNodes[0].innerHTML;

        if (b2Child == 'X' && b5Child == 'X' && b8Child == 'X') {
            winnerDeclarer('X');
        }
        if (b2Child == 'O' && b5Child == 'O' && b8Child == 'O') {
            winnerDeclarer('O');
        }
    }
    //The third vertical
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        b3Child = b3.childNodes[0].innerHTML;
        b6Child = b6.childNodes[0].innerHTML;
        b9Child = b9.childNodes[0].innerHTML;

        if (b3Child == 'X' && b6Child == 'X' && b9Child == 'X') {
            winnerDeclarer('X');
        }
        if (b3Child == 'O' && b6Child == 'O' && b9Child == 'O') {
            winnerDeclarer('O');
        }
    }
    //The first diagonal
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        b1Child = b1.childNodes[0].innerHTML;
        b5Child = b5.childNodes[0].innerHTML;
        b9Child = b9.childNodes[0].innerHTML;

        if (b1Child == 'X' && b5Child == 'X' && b9Child == 'X') {
            winnerDeclarer('X');
        }
        if (b1Child == 'O' && b5Child == 'O' && b9Child == 'O') {
            winnerDeclarer('O');
        }
    }
    //The second diagonal
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        b3Child = b3.childNodes[0].innerHTML;
        b5Child = b5.childNodes[0].innerHTML;
        b7Child = b7.childNodes[0].innerHTML;

        if (b3Child == 'X' && b5Child == 'X' && b7Child == 'X') {
            winnerDeclarer('X');
        }
        if (b3Child == 'O' && b5Child == 'O' && b7Child == 'O') {
            winnerDeclarer('O');
        }
    }
}
// **** END of the test if some team WON. 

//Declare the winner and refresh the score board
function winnerDeclarer(winner){

    let scoreBoardX = document.querySelector("#scorex-value");
    let scoreBoardO = document.querySelector("#scoreo-value");
    let msg = '';

    //If X team wins
    if(winner == 'X'){
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        msg = 'Team X WON!';
        console.log("Ganhou o time X");
        //ADICIONAR UM REMOVER EVENTO PARA QUE O CLICK NÃO MARQUE NENHUMA CAIXA.
    } else if(winner == 'O'){
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
        msg = 'Team O WON';
        console.log("Ganhou o time O");
        //ADICIONAR UM REMOVER EVENTO PARA QUE O CLICK NÃO MARQUE NENHUMA CAIXA.
    } else {
        msg = "HASH!";
        //ADICIONAR UM REMOVER EVENTO PARA QUE O CLICK NÃO MARQUE NENHUMA CAIXA.
    }
    //Showing the message telling who has won the game
    messageText.innerHTML = msg; //the variable finalMessage was declared in the beginning!
    messageContainer.classList.remove("hide"); //Remove the hide display from the message, to show to the players.
    


    setTimeout(function(){
        messageContainer.classList.add("hide");
    },1500); //After 1,5 seconds, the message will be hidden.

    // cleaning the hash after 2,5 sec after the end of the game
    let boxesToClean = document.querySelectorAll(".box div");
    setTimeout(function(){
        for(let k = 0; k < boxesToClean.length; k++){
            boxesToClean[k].parentNode.removeChild(boxesToClean[k]);
        }
    },2500);
    bandeira = 1;
    return bandeira;
}

//Counting how many boxes are empty
function checkBoxes(){
    let movesCounter = 0;
    for (let j = 0; j < boxes.length; j++) {
        if (boxes[j].childNodes[0] != undefined) {
            movesCounter++;
        }
    }

    if (movesCounter == 9 && bandeira != 1) {
        console.log("Contador chegou a 9. Nenhuma casa vazia. Deu velha.");
        winnerDeclarer('deu velha!');
    }
}

//CPU Player Logics
function computerPlayer(){
    let cloneO = o.cloneNode(true); //making a clone of the O team;
    counter = 0;
    filled = 0;

    for(let i = 0 ; i < boxes.length; i++){

        let randomNumber = Math.floor(Math.random() * 6); /*Aqui criará um número aleatório entre 0 e 5, mas o math.random cria um número flutuante
        ou seja, muito grande, por isso utilizamos o math.floor na frente, transformando ele no próximo inteiro. O .random padrão
        é de 0 a 1, porém, ao multiplicar por 6, criamos de 0 a 5, pois o 6 não está incluso no random. http://devfuria.com.br/javascript/numeros-aleatorios/*/

        if (boxes[i].childNodes[0] == undefined) { //figuring out which boxes are empty
            if (randomNumber <= 1){ /* A CPU só vai marcar no jogo quando essa condicional for satisfeita. Aqui colocamos uma 
            condicional para que ele fique sempre testando se o número aleatório é menor que 1. A chance disso acontecer é muito
            pequena, desta forma, ele vai passar em todas as boxes do jogo, devido ao for (boxes[i].childNodes), e quando por acaso
            o número for menor que 1, ele vai marcar a bolinha.  */
                boxes[i].appendChild(cloneO); //filling the symbol in the box
                console.log("I.A. jogou!");
                counter++; //a counter to avoid the recursive function
                break; //exiting the if
            }
        } else {
            filled++; /* Contador para saber quantas casas já foram preenchidas e parar de preencher, senão a CPU vai ficar buscando preencher
            para sempre. Esse contador deve ser menor que 9, senão entraremos em um loop infinito.*/
        }
    }

    if (counter == 0 && filled < 9){ /* Caso a lógica da função de marcar uma bolinha falhe, seja pq os números não foram menor que 1,
        será chamado a função novamente, ou seja, tentará marcar novamente uma bolinha. Por isso a importância das condicionais
        dentro da rotina no for (counter TEM que ser 0 para que a rotina falhe, e o filled TEM que ser menor que 9, pois é o número
        máximO de casas que o jogo tem.) */
        computerPlayer();
        console.log("Repetiu a rotina da IA.");
    }
}





// /* Defining the variables to choose who has the turn to play */

// // let player1 = 0; (old structure)
// // let player2 = 0; (old structure)
// // let el; //element to storage a variable to define which team turn it is (old structure)
// let contador = 0;
// console.log("contador está " + contador + " no início");


// //Game option when clicking on the buttons
// for (let j = 0; j < buttons.length; j++) {

//     buttons[j].addEventListener("click", function () {

//         secondPlayer = this.getAttribute("id");

//         if(secondPlayer == 'b1-2players'){
//             console.log("Jogador 01  X  Jogador 02");
//         } else if (secondPlayer == 'b2-AI'){
//             console.log("Jogador 01  X  CPU");
//         }

//         for (let k = 0; k < buttons.length; k++) { //hiding the buttons after the click
//             buttons[k].style.display = 'none';
//         }
//         setTimeout(function () { //showing the hash after the choosen game mode (2 player or AI)
//             let bigContainer = document.querySelector("#big-container");
//             bigContainer.classList.remove("hide");
//         }, 300);
//     });
// }


// // Adding the click event for the boxes at the hash

// for (i = 0; i < boxes.length; i++) {
//     console.log("Antes do evento");     
//     boxes[i].addEventListener("click", function () { //Function that makes the X or O appears on the hash.
//         // console.log("Depois do evento");
//         //Defining who has the turn to play.
//         // console.log("Contador está em: " + contador);
//         let el = checkPlayer(contador);

//         /* Old structure. This on we can't define which player is playing when the box is already filled.
//             if(player1 == player2){
//                 //x-team turn
//                 el = x;
//                 player1++;
//                 console.log(player1);
//             } else {
//                 //o-team turn
//                 el = o;
//                 player2++;
//                 console.log(player2);
//             }
//         */

//         let elClone = el.cloneNode(true); //It's not good for the code use the element itself, so we do a clone and manipulate the clone.

//         //Testing if the box is empty
//         if (this.childNodes.length == 0) {
//             this.appendChild(elClone); //we can use the this because we're in the boxes[i].

//             //Testing if the game has already 9 turns done;
//             // let movesCounter = 0;

//             checkBoxes();
//             // for (let j = 0; j < boxes.length; j++) {
//             //     if (boxes[j].childNodes[0] != undefined) {
//             //         movesCounter++;
//             //         console.log("Contando quantas casas são diferentes de vazio: " + movesCounter);
//             //         checkWinCondition();
//             //     }
//             // }

//             // if (movesCounter == 9) {
//             //     console.log("deu velha my friend!");
//             //     winnerDeclarer('deu velha!');
//             // }

//             checkWinCondition();

//         } else {
//             alert("Play in an empty box!");
//             contador--;
//         }
//         if (secondPlayer == 'b2-AI'){
//             contador++;
//         } else {
//             contador++;
//             // console.log("Entrou no IF do 02 jogadores. Contador: " + contador);
            
//         } else
//       });
// }


// //Check whose turn is: X or O
// function checkPlayer(contador){ //routine to define who has the turn to play.
//     if(contador%2==0){
//         //x-team turn
//         el = x;
//         console.log("Contador: " + contador);
//         // console.log("Entrou no time do X: " + contador);
//     } else {
//         //o-team turn
//         el = o;
//         console.log("Contador: " + contador);
//         // console.log("Entrou no time do Bola: " + contador);
//         if(secondPlayer == 'b2-AI'){

//         }
//     }
//     return el;
// }

// //Declare the winner and refresh the score board
// function winnerDeclarer(winner){

//     let scoreBoardX = document.querySelector("#scorex-value");
//     let scoreBoardO = document.querySelector("#scoreo-value");
//     let msg = '';

//     //If X team wins
//     if(winner == 'X'){
//         scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
//         msg = 'Team X WON!';
//     } else if(winner == 'O'){
//         scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
//         msg = 'Team O WON';
//     } else {
//         msg = "HASH!";
//     }
//     //Showing the message telling who has won the game
//     messageText.innerHTML = msg; //the variable finalMessage was declared in the beginning!
//     messageContainer.classList.remove("hide"); //Remove the hide display from the message, to show to the players.

//     setTimeout(function(){
//         messageContainer.classList.add("hide");
//     },1500); //After 1,5 seconds, the message will be hidden.

//     //cleaning the hash
//     let boxesToClean = document.querySelectorAll(".box div");
//     for(let k = 0; k < boxesToClean.length; k++){
//         boxesToClean[k].parentNode.removeChild(boxesToClean[k]);
//     }
//     contador = 0;
// }

// //Counting how many boxes are empty
// function checkBoxes(){
//     let movesCounter = 0;
//     for (let j = 0; j < boxes.length; j++) {
//         if (boxes[j].childNodes[0] != undefined) {
//             movesCounter++;
//             console.log("Contando quantas casas são diferentes de vazio: " + movesCounter);
//             checkWinCondition();
//         }
//     }

//     if (movesCounter == 9) {
//         console.log("deu velha my friend!");
//         winnerDeclarer('deu velha!');
//     }
// }

// //CPU Player Logics
// function computerPlayer(){
//     let cloneO = o.cloneNode(true); //making a clone of the O team;
//     counter = 0;
//     filled = 0;

//     for(let i = 0 ; i < boxes.length; i++){

//         let randomNumber = Math.floor(Math.random() * 6); /*Aqui criará um número aleatório entre 0 e 5, mas o math.random cria um número flutuante
//         ou seja, muito grande, por isso utilizamos o math.floor na frente, transformando ele no próximo inteiro. O .random padrão
//         é de 0 a 1, porém, ao multiplicar por 6, criamos de 0 a 5, pois o 6 não está incluso no random. http://devfuria.com.br/javascript/numeros-aleatorios/*/

//         if (boxes[i].childNodes[0] == undefined) { //figuring out which boxes are empty
//             if (randomNumber <= 1){ /* A CPU só vai marcar no jogo quando essa condicional for satisfeita. Aqui colocamos uma 
//             condicional para que ele fique sempre testando se o número aleatório é menor que 1. A chance disso acontecer é muito
//             pequena, desta forma, ele vai passar em todas as boxes do jogo, devido ao for (boxes[i].childNodes), e quando por acaso
//             o número for menor que 1, ele vai marcar a bolinha.  */
//                 checkWinCondition();
//                 checkBoxes();
//                 boxes[i].appendChild(cloneO); //filling the symbol in the box
//                 console.log("I.A. jogou!");
//                 counter++; //a counter to avoid the recursive function
//                 break; //exiting the if
//             }
//         } else {
//             filled++; /* Contador para saber quantas casas já foram preenchidas e parar de preencher, senão a CPU vai ficar buscando preencher
//             para sempre. Esse contador deve ser menor que 9, senão entraremos em um loop infinito.*/
//         }
//     }

//     if (counter == 0 && filled < 9){ /* Caso a lógica da função de marcar uma bolinha falhe, seja pq os números não foram menor que 1,
//         será chamado a função novamente, ou seja, tentará marcar novamente uma bolinha. Por isso a importância das condicionais
//         dentro da rotina no for (counter TEM que ser 0 para que a rotina falhe, e o filled TEM que ser menor que 9, pois é o número
//         máximO de casas que o jogo tem.) */
//         computerPlayer();
//     }
//     checkWinCondition();
// }