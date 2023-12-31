
const contractABI = [
{
"constant": true,
"inputs": [
    {
        "name": "_c1",
        "type": "uint8"
    },
    {
        "name": "_c2",
        "type": "uint8"
    }
],
"name": "win",
"outputs": [
    {
        "name": "w",
        "type": "bool"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "getC1Move",
"outputs": [
    {
        "name": "",
        "type": "uint8"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": false,
"inputs": [],
"name": "j2Timeout",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "stake",
"outputs": [
    {
        "name": "",
        "type": "uint256"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "c2",
"outputs": [
    {
        "name": "",
        "type": "uint8"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "c1Hash",
"outputs": [
    {
        "name": "",
        "type": "bytes32"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": false,
"inputs": [
    {
        "name": "_c2",
        "type": "uint8"
    }
],
"name": "play",
"outputs": [],
"payable": true,
"stateMutability": "payable",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "c1",
"outputs": [
    {
        "name": "",
        "type": "uint8"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "j2",
"outputs": [
    {
        "name": "",
        "type": "address"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "lastAction",
"outputs": [
    {
        "name": "",
        "type": "uint256"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": false,
"inputs": [
    {
        "name": "_c1",
        "type": "uint8"
    },
    {
        "name": "_salt",
        "type": "uint256"
    }
],
"name": "solve",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "j1",
"outputs": [
    {
        "name": "",
        "type": "address"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "getTimeLeft",
"outputs": [
    {
        "name": "",
        "type": "uint256"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": false,
"inputs": [],
"name": "j1Timeout",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "TIMEOUT",
"outputs": [
    {
        "name": "",
        "type": "uint256"
    }
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"inputs": [
    {
        "name": "_c1Hash",
        "type": "bytes32"
    },
    {
        "name": "_j2",
        "type": "address"
    }
],
"payable": true,
"stateMutability": "payable",
"type": "constructor"
}
];
const connectButton = document.getElementById('connectButton');
const connectedButton = document.getElementById('connectedButton');

// Function to check if Metamask is connected
function checkMetamaskConnection() {
if (typeof window.ethereum !== 'undefined') {
ethereum.request({ method: 'eth_accounts' })
.then(accounts => {
if (accounts.length > 0) {
connectedButton.style.display = 'block';
var truncatedAddress = accounts[0].slice(0, 6) + "....." + accounts[0].slice(-6);
connectedButton.innerText=truncatedAddress
connectedButton.style.color="white";
connectButton.style.display = 'none';
} else {
connectedButton.style.display = 'none';
connectButton.style.display = 'block';
}
})
.catch(error => console.error(error));
}
}

// Event listener for the connect button
connectButton.addEventListener('click', function() {
ethereum.request({ method: 'eth_requestAccounts' })
.then(accounts => {
if (accounts.length > 0) {
connectedButton.style.display = 'block';
connectButton.style.display = 'none';
}
})
.catch(error => console.error(error));
});

// Event listener for the disconnect button
connectedButton.addEventListener('click', function() {
ethereum.request({ method: 'eth_accounts' })
.then(accounts => {
if (accounts.length > 0) {
// Send a request to clear the accounts
ethereum.request({ method: 'eth_requestAccounts', params: [{ eth_accounts: [] }] })
.then(() => {
connectedButton.style.display = 'none';
connectButton.style.display = 'block';
})
.catch(error => console.error(error));
}
})
.catch(error => console.error(error));
});

// Initial check when the page loads
checkMetamaskConnection();


// Event listener for when Metamask is connected/disconnected
ethereum.on('accountsChanged', function (accounts) {
if (accounts.length > 0) {
connectedButton.style.display = 'block';
connectButton.style.display = 'none';
} else {
connectedButton.style.display = 'none';
connectButton.style.display = 'block';
}
});


const web3 = new Web3(window.ethereum);
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

let contractAddress = id;
console.log(contractAddress);

let hello; 
let contract = new web3.eth.Contract(contractABI, contractAddress);

async function j1() {
    
try {
        
   const j1= await contract.methods.j1().call()
   document.getElementById('j1').innerText=`Player1: ${j1} `
  
    } catch (error) {
        console.error(error);
    }
}
j1()

async function j2() {
    
try {
    const j2= await contract.methods.j2().call()
   document.getElementById('j2').innerText=`Player2: ${j2} `
    } catch (error) {
        console.error(error);
    }
}
j2()
let stakeValue;

async function stake() {
try {

stakeValue = await contract.methods.stake().call();
let stakeAmount = web3.utils.fromWei(stakeValue, 'ether');

const para = document.createElement("p");
const node = document.createTextNode(`Stake Amount: ${stakeAmount} Ether`);
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);
console.log(stakeAmount,"Ether");
} catch (error) {
console.error(error);
}
}


// Call this function when your page loads
stake();

    async function play() {
        const move=document.getElementById('move').value;
        console.log(move);
try {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        const playerAddress = accounts[0];
        const move=document.getElementById('move').value;
        
        
   const c2= await contract.methods.play(move).send({ from: playerAddress, value: stakeValue });
   console.log(c2);
   timerSolve();
   const aa = await contract.methods.getTimeLeft().call();
   console.log(aa);
   window.location.reload();
    } catch (error) {
        console.error(error);
    }
}


   // Function to get time left
   async function getTimeLeft() {
    try {
        const result = await contract.methods.getTimeLeft().call();
        return result;
        console.log(result);
    } catch (error) {
        console.error(error);
        return null;
    }
}

// for waiting player 2 move

let timeLeft // 5 minutes in seconds
async function getElapsedTime() {
    const elapsedTimeElement = document.getElementById('elapsedTime');
    const elapsedTime = await getTimeLeft();
    
    timeLeft= elapsedTime;
    console.log(timeLeft);
    elapsedTimeElement.innerText = elapsedTime;
}
getElapsedTime()

let timerInterval;

function updateTimer() {
    
    const timerElement = document.getElementById("timer");
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} (timeleft your move)`;

    if (timeLeft === 0) {
        clearInterval(timerInterval);
        timerElement.style.display = "none";
    } else {
        timeLeft--;
    }
}

function checkLocalStorage() {
   
    contract.methods.c2().call().then((result) => {
        if (result !== '0') {
            clearInterval(timerInterval);
            document.getElementById("timer").style.display = "none"; // Hide the timer element
        document.getElementById("alertButton").style.display = "block"; // Show the alert button
        document.getElementById("claimj2Timeout").style.display = "none"; 
    
      
        } 
    });
}

timerInterval = setInterval(updateTimer, 1000);

// Check local storage every second
setInterval(checkLocalStorage, 1000);



//11111111111111111111111111111111111111111111 timer for player1 slove


let claimButtonClicked = false;

    async function  updateCustomTimer() {
if(timeLeft>=0){
    const customMinutes = Math.floor(timeLeft / 60);
    const customSeconds = timeLeft % 60;

    // Format the time as mm:ss
    const formattedCustomTime = `${customMinutes.toString().padStart(2, '0')}:${customSeconds.toString().padStart(2, '0')} (timeleft for player1 to solve )`;

    // Update the custom timer element
    document.getElementById('customTimer').innerText = formattedCustomTime;
    document.getElementById('claimReadOnly').style.display = 'block';

    // Decrement the time by 1 second
    timeLeft--;

    

   
}
else if(timeLeft<0 && !claimButtonClicked   ){
    document.getElementById('customTimer').style.display ='none';
    document.getElementById('claimReadOnly').style.display = 'none';
    if(!noneClaimAfterWin && stakeValue!= 0){
        document.getElementById('claim').style.display = 'block';
        console.log(stakeValue);
    }
    
    console.log(noneClaimAfterWin);
}




        // Check if the custom timer has reached zero
  
}

async function j1Timeout() {
    document.getElementById('claim').style.display = 'none';
    claimButtonClicked = true;
    const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        const playerAddress = accounts[0];
        
    let result = await contract.methods.j1Timeout().send({from: playerAddress, gas: 300000});
    console.log(result);
    
    document.getElementById('claimSuccess').style.display = 'block';
    
}


    async function timerSolve(){
        const customTimerIntervalSolve = setInterval(updateCustomTimer, 1000);
    }
    
    async function getc2(){
        const result = await contract.methods.c2().call();
        if (result!= "0"){
            timerSolve()
        }
    }


    getc2()

    
    let timmerStop;
    function isGetc1() {
   
   contract.methods.c1().call().then((result) => {
       if (result !== '0') {
        
        console.log('winnnnnnnn');
        timeLeft=-1
        win()
          
   
     
       } 
   });
}

setInterval(isGetc1, 1000);

let noneClaimAfterWin=false;
async function win() {
noneClaimAfterWin=true;
    const j1= await contract.methods.j1().call();
    const j2= await contract.methods.j2().call()
    const address =j1;
    const address2 =j2;
    const move1=await contract.methods.c1().call();
    const move2 =await contract.methods.c2().call();
    const aa=['null','rock','paper','scissors','spock',"Lizard"]
try {

    const winner = await contract.methods.win(move1, move2).call();
    if(move1== move2){
        const move=aa[move1]
        console.log('This is tie');
        console.log(`both player move : ${move}`);
        document.getElementById('winner').innerText=`This is tie`;
        document.getElementById('winMove').innerText=`both player move : ${move}`;
    }
    else if(winner==true){
        const move=aa[move1]
        const lose=aa[move2]
        console.log(move)
        console.log(` winner : ${address}`)
        console.log(` winner Move : ${move}`)
        console.log(`player2 Move : ${lose}`);
        document.getElementById('winner').innerText=`Oop!, You lose.`;
        document.getElementById('winMove').innerText=`Player1 Move : ${move}`;
        // document.getElementById('loseMove').innerText=`Lose move : ${lose}`;
    }
    else {
        const lose=aa[move1]
        const move=aa[move2]
        console.log(move)
        console.log(` winner : ${address2}`)
        console.log(` winner Move : ${move}`)
        console.log(`player1 Move : ${lose}`);
        document.getElementById('winner').innerText=`Congrats!, You win.`;
        // document.getElementById('winMove').innerText=`Winner move : ${move}`;
        document.getElementById('loseMove').innerText=`Player1 Move : ${lose}`;
        
    }
console.log(winner);
document.getElementById('claim').style.display = 'none';
} catch (error) {
    console.log(error);
}
}