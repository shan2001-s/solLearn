

const randomBuffer = new Uint8Array(32);
crypto.getRandomValues(randomBuffer);

// Convert the buffer to a hexadecimal string
const randomNumber = Array.from(randomBuffer).map(b => b % 10).join('');

// Hash the random number using SHA-256
crypto.subtle.digest('SHA-256', randomBuffer).then(hashBuffer => {
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashedNumber = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  console.log('Random Number:', randomNumber);
  console.log('Hashed Number:', hashedNumber);
});
         
		  const connectButton = document.getElementById('connectButton');
  const connectedButton = document.getElementById('connectedButton');

  // Function to check if Metamask is connected
  function checkMetamaskConnection() {
    if (typeof window.ethereum !== 'undefined') {
      ethereum.request({ method: 'eth_accounts' })
      .then(accounts => {
      
      })
      .catch(error => console.error(error));
    }
  }
 // Check if data exists in localStorage
var storedData = localStorage.getItem('myData');

if (storedData) {
    // Data exists, show delete button
	connectedButton.style.display = 'block';
        connectButton.style.display = 'none';
} else {
    // No data, show store button
    connectedButton.style.display = 'none';
        connectButton.style.display = 'block';
}

  // Event listener for the connect button

  connectButton.addEventListener('click', function() {
	document.getElementById("parentElement").style.display='block';
    ethereum.request({ method: 'eth_requestAccounts' })
    .then(accounts => {
        if (accounts.length > 0) {
            console.log(accounts);
            connectedButton.style.display = 'block';
            connectButton.style.display = 'none';
            localStorage.setItem('myData', accounts[0]);
            
            var getMyData = accounts[0];
			console.log(getMyData);
            var truncatedAddress = getMyData.slice(0, 6) + "..." + getMyData.slice(-6);
            
            // Check if the anchor element already exists
            var existingAnchor = document.getElementById('myAnchor');
            
            if (!existingAnchor) {
                // Create a new anchor element
                var myAnchor = document.createElement('a');
                myAnchor.textContent = truncatedAddress;
                myAnchor.id = 'myAnchor'; // Assign an ID to the anchor element
				myAnchor.style.color="white"
                var parentElement = document.getElementById('parentElement');
                parentElement.appendChild(myAnchor);
            }
        }
    })
    .catch(error => console.error(error));
});


   // Event listener for the connected button
   connectedButton.addEventListener('click', function() {
	
	ethereum.request({ method: 'eth_accounts' })
    .then(accounts => {
		delete accounts[0];
      console.log(accounts);
	  connectedButton.style.display = 'none';
      connectButton.style.display = 'block';
	  localStorage.removeItem('myData');
	  document.getElementById("parentElement").style.display='none';
	  
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


		window.addEventListener("beforeunload", function() {
  localStorage.removeItem("salt");
});
		const aa = new Date().valueOf();
		console.log("DAtE",aa);
		let a = BigInt(aa);
let result = a ** BigInt(7);

const storedValue =  localStorage.setItem("salt", result);
const getstoredValue =  localStorage.getItem("salt");


let bigIntNumber = BigInt(getstoredValue);
let totalDigits = bigIntNumber.toString().length;



let reversedString = bigIntNumber.toString().split('').reverse().join('');
let last80Digits = reversedString.slice(0, 77);



 const contractAddressHash = '0xdA97d6D4403F1F2AdACCf8e8B485E4b3B6490B8d';

const contractABIHash = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_c",
				"type": "uint8"
			},
			{
				"name": "_salt",
				"type": "uint256"
			}
		],
		"name": "hash",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
const web3 = new Web3(window.ethereum);
const contractHash = new web3.eth.Contract(contractABIHash, contractAddressHash);
let salt = last80Digits;

let hasherValue;



//         /////////////////////////////////////////////////////////////////////////////
        let contractAddress;
		let hello;

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
let contract ;
let boolenSolve;
let address1;
let address2;
let stakeT;
let c1MoveV; // Declare c1Move, but it's still undefined
       async function RPS() {
		const c1=document.getElementById('c1').value;
		console.log(c1);
		c1MoveV=c1;
		
		
	
    const player2 = document.getElementById('player2').value
	const stake = document.getElementById('stake').value
	contractAddress=  "0x3C19E01f93a941D47304A0284713Cea24D42f509";
	contract=new web3.eth.Contract(contractABI, contractAddress);
        try {
			const hasher= await contractHash.methods.hash(c1MoveV,salt).call();
hasherValue=hasher;



                const accounts = await web3.eth.getAccounts();
                const playerAddress = accounts[0];
			
                
                const tx = await contract.deploy({ data: '608060405261012c600555604051604080610be4833981018060405281019080805190602001909291908051906020019092919050505034600481905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160028160001916905550426006819055505050610b03806100e16000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c4395b9146100e05780631ce1313f14610135578063294914a41461016e5780633a4b66f11461018557806348e257cb146101b05780634d03e3d2146101e957806353a04b051461021c5780635f57697c1461023f57806380985af91461027857806389f71d53146102cf578063a5ddec7c146102fa578063c37597c614610334578063c7e284b81461038b578063c8391142146103b6578063f56f48f2146103cd575b600080fd5b3480156100ec57600080fd5b5061011b600480360381019080803560ff169060200190929190803560ff1690602001909291905050506103f8565b604051808215151515815260200191505060405180910390f35b34801561014157600080fd5b5061014a6104c1565b6040518082600581111561015a57fe5b60ff16815260200191505060405180910390f35b34801561017a57600080fd5b506101836104d8565b005b34801561019157600080fd5b5061019a610583565b6040518082815260200191505060405180910390f35b3480156101bc57600080fd5b506101c5610589565b604051808260058111156101d557fe5b60ff16815260200191505060405180910390f35b3480156101f557600080fd5b506101fe61059c565b60405180826000191660001916815260200191505060405180910390f35b61023d600480360381019080803560ff1690602001909291905050506105a2565b005b34801561024b57600080fd5b50610254610695565b6040518082600581111561026457fe5b60ff16815260200191505060405180910390f35b34801561028457600080fd5b5061028d6106a8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102db57600080fd5b506102e46106ce565b6040518082815260200191505060405180910390f35b34801561030657600080fd5b50610332600480360381019080803560ff169060200190929190803590602001909291905050506106d4565b005b34801561034057600080fd5b506103496109d2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561039757600080fd5b506103a06109f7565b6040518082815260200191505060405180910390f35b3480156103c257600080fd5b506103cb610a21565b005b3480156103d957600080fd5b506103e2610ad1565b6040518082815260200191505060405180910390f35b600081600581111561040657fe5b83600581111561041257fe5b141561042157600090506104bb565b6000600581111561042e57fe5b83600581111561043a57fe5b141561044957600090506104bb565b600282600581111561045757fe5b81151561046057fe5b06600284600581111561046f57fe5b81151561047857fe5b06141561049f5781600581111561048b57fe5b83600581111561049757fe5b1090506104bb565b8160058111156104ab57fe5b8360058111156104b757fe5b1190505b92915050565b6000600360019054906101000a900460ff16905090565b600060058111156104e557fe5b600360009054906101000a900460ff16600581111561050057fe5b14151561050c57600080fd5b600554600654014211151561052057600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050506000600481905550565b60045481565b600360009054906101000a900460ff1681565b60025481565b600060058111156105af57fe5b600360009054906101000a900460ff1660058111156105ca57fe5b1415156105d657600080fd5b600060058111156105e357fe5b8160058111156105ef57fe5b141515156105fc57600080fd5b6004543414151561060c57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561066857600080fd5b80600360006101000a81548160ff0219169083600581111561068657fe5b02179055504260068190555050565b600360019054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b600060058111156106e157fe5b8260058111156106ed57fe5b141515156106fa57600080fd5b6000600581111561070757fe5b600360009054906101000a900460ff16600581111561072257fe5b1415151561072f57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561078a57600080fd5b600254600019168282604051808360058111156107a357fe5b60ff167f0100000000000000000000000000000000000000000000000000000000000000028152600101828152602001925050506040518091039020600019161415156107ef57600080fd5b61080882600360009054906101000a900460ff166103f8565b1561086e576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f19350505050506109a3565b610887600360009054906101000a900460ff16836103f8565b156108ee57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f19350505050506109a2565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f1935050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004549081150290604051600060405180830381858888f19350505050505b5b600060048190555081600360016101000a81548160ff021916908360058111156109c957fe5b02179055505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806006544203905060055481101515610a155760009150610a1d565b806005540391505b5090565b60006005811115610a2e57fe5b600360009054906101000a900460ff166005811115610a4957fe5b14151515610a5657600080fd5b6005546006540142111515610a6a57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6004546002029081150290604051600060405180830381858888f19350505050506000600481905550565b600554815600a165627a7a72305820d1d34589d19f4ba5bff8f7f7dabdc98ce4161418f5b995b397dcf60c6518f5530029',
                 arguments: [hasherValue, player2] })
                    .send({ from: playerAddress, value: web3.utils.toWei(stake, 'ether') });
             hello=tx._address
			 contractAddress=tx._address
			 
			 contract= new web3.eth.Contract(contractABI, contractAddress);
           
				


j1();
j2();
document.getElementById("deployRPS").style.display = "none"; 
async function getInfo() {
	document.getElementById('textDeploying').style.display="none"; 
	document.getElementById("infoCard").style.display='block';
	
			try {
			  const j1= await contract.methods.j1().call();
			  const j2= await contract.methods.j2().call();
			  const stakeWei= await contract.methods.stake().call();
			  const stakeEth=web3.utils.fromWei(stakeWei, 'ether');
			  const solvec1Get = await document.getElementById('c1').value;
			  const moveArrGet = ["None","Rock", "Paper", "Scissors", "Spock", "Lizard"];
			  const j1moveValueGet = moveArrGet[solvec1Get];
	
			 document.getElementById('j1').innerText=`Player1:  ${j1} `
			 document.getElementById('j2').innerText=`Player2:  ${j2} `
			 document.getElementById('stakej1').innerText=`Stake:    ${stakeEth} `
			 document.getElementById('movej1').innerText=`Your Move:  ${j1moveValueGet} `
	
				} catch (error) {
					console.error(error);
				}
			}
			getInfo();
console.log(address1);
const para = document.createElement("h4");
const node = document.createTextNode(`Player2 Link to play`);
para.appendChild(node);
const element = document.getElementById("div4");

element.appendChild(para);
document.getElementById("div05").style.display="block";

const para2 = document.createElement("p");
const node2 = document.createTextNode(`  https://shan2001-s.github.io/solLearn/player2.html?id=${contractAddress}`);
para2.appendChild(node2);

const customCopyButton = document.createElement("button");
customCopyButton.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
  </svg>`;

customCopyButton.classList.add("text-end", "btn");
customCopyButton.style.color = "white";
customCopyButton.style.marginTop = "-20px";

customCopyButton.addEventListener("click", function() {
    const urlText = `https://shan2001-s.github.io/solLearn/player2.html?id=${contractAddress}`;
    navigator.clipboard.writeText(urlText)
        .catch(error => console.error("Could not copy to clipboard: ", error));
});

const element2 = document.getElementById("div5");
element2.appendChild(para2);
element2.appendChild(customCopyButton);


// time


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

		let timeLeft // 5 minutes in seconds
		let solveTimeleft=300;
        // Function to update the UI with elapsed time
        async function getElapsedTime() {
            const elapsedTimeElement = document.getElementById('elapsedTime');
            const elapsedTime = await getTimeLeft();
			
			timeLeft= elapsedTime;
			console.log(timeLeft);
            elapsedTimeElement.innerText = elapsedTime;
        }
		getElapsedTime();
		
        let timerInterval;

        function updateTimer() {
            
            const timerElement = document.getElementById("timer");
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} (time left for player2 to choose his move)`;
			document.getElementById("claimj2TimeoutReadOnly").style.display = "block"; 
            if (timeLeft === 0) {
                clearInterval(timerInterval);
                timerElement.style.display = "none";
				document.getElementById("claimj2TimeoutReadOnly").style.display = "none"; 
					document.getElementById("claimj2Timeout").style.display = "block"; 
            } else {
                timeLeft--;
            }
        }

        function checkLocalStorage() {
           
            contract.methods.c2().call().then((result) => {
                if (result !== '0') {
                    clearInterval(timerInterval);
                    document.getElementById("timer").style.display = "none"; // Hide the timer element
					document.getElementById("claimj2TimeoutReadOnly").style.display = "none"; // Show the alert button
					document.getElementById("claimj2Timeout").style.display = "none"; 
				
				async function getSolveTime() {
            try {
                const result = await contract.methods.getTimeLeft().call();
               
				console.log(result,'This is result');
				console.log(result);
			
			
				const timerElement1 = document.getElementById("Solvetimer");
				if (solveTimeleft === 0 || boolenSolve==true) {
                clearInterval(timerInterval);
                timerElement1.style.display = "none";
				document.getElementById("hideForTimeOutSolve").style.display='none';
				document.getElementById("TextCreateNewPlaying").style.display="block";
            }
			
			else{
				solveTimeleft=solveTimeleft-1;
				const minutes = Math.floor(solveTimeleft / 60);
            const seconds = solveTimeleft % 60;
            timerElement1.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} (Timeleft for player1 to slove)`;
			document.getElementById("alertButton").style.display = "block"; 
			}

            } catch (error) {
                console.error(error);
                return null;
            }
        }
		getSolveTime()


              
                } 
				
				
            });
			contract.methods.c2().call().then((result) => {

			})

        }

        timerInterval = setInterval(updateTimer, 1000);

        // Check local storage every second
        setInterval(checkLocalStorage, 1000);

		
		
            } catch (error) {
                console.error(error);
            }
        }

		async function j1() {
			
        try {
          const j1= await contract.methods.j1().call();
		 address1=j1;

		 console.log(j1);
		 console.log(address1);

            } catch (error) {
                console.error(error);
            }
        }
		
		async function j2() {
			
        try {
           const j2= await contract.methods.j2().call();
		  address2=j2;
		  
		
	console.log(j2);
            } catch (error) {
                console.error(error);
            }
        }

		async function win() {
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
				document.getElementById('winner').innerText=`Congrats!, You are Winner`;
				// document.getElementById('winMove').innerText=`Winner move : ${move}`;
				document.getElementById('loseMove').innerText=`Player2 move : ${lose}`;
			}
			else {
				const lose=aa[move1]
				const move=aa[move2]
				console.log(move)
				console.log(` winner : ${address2}`)
				console.log(` winner Move : ${move}`)
				console.log(`player1 Move : ${lose}`);
				document.getElementById('winner').innerText=`Oop!, You Lose `;
				 document.getElementById('winMove').innerText=`Player2 move : ${move}`;
				// document.getElementById('loseMove').innerText=`Loser move : ${lose}`;
				
			}
   console.log(winner);
		} catch (error) {
			console.log(error);
		}
		}
		

		async function stake() {

			
			try {
			   const stake= await contract.methods.stake().call();
			   const stakeValue=web3.utils.fromWei(stake, 'ether');
			   stakeT = stakeValue;
			   
			   console.log(stakeValue);
		
				} catch (error) {
					console.error(error);
				}
				
			}

		
			async function solve() {
    try {
        const accounts = await web3.eth.getAccounts();
        const playerAddress = accounts[0];
        const solvec1 = await document.getElementById('c1').value;
        const result = await contract.methods.solve(solvec1, salt).send({ from: playerAddress });
        console.log(playerAddress);
        localStorage.removeItem("salt");
        document.getElementById("timersolve").style.display = "none";
        // Show winner or result
        win();
    } catch (error) {
        console.error(error);
    }
}

 

async function j2Timeout() {
    const accounts = await web3.eth.getAccounts();
				console.log(accounts);
                const playerAddress = accounts[0];
            let result = await contract.methods.j2Timeout().send({from: playerAddress, gas: 300000});
            console.log(result);
			document.getElementById("claimj2Timeout").style.display = "none"; 
			document.getElementById("claimSuccess").style.display = "block"; 
			document.getElementById("div4").style.display = "none"; 
			document.getElementById("div5").style.display = "none"; 
        }

        async function j1Timeout() {
            const accounts = await web3.eth.getAccounts();
				console.log(accounts);
                const playerAddress = accounts[0];
            let result = await contract.methods.j1Timeout().send({from: playerAddress, gas: 300000});
            console.log(result);
        }


      

      
 
   