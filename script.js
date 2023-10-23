var current = "X";
var player;
var use;
var count = 0;
var dones = [];
var firstSelection = document.getElementById('first');
var firstPlayerOptions = [null,"X","O"];
var homeDiv = document.getElementById('home');
var gridDiv = document.getElementById('grid');
var tempDiv = document.getElementById('temp');
var gameOverDiv = document.getElementById('gameOverDiv');

var startButton = document.getElementById('startButton');
var restartButton = document.getElementById('restartButton');

var winnerText = document.getElementById('winnerText');

gameOverDiv.style.display = 'none';
tempDiv.style.display = 'none';

restartButton.style.display = 'none';
startButton.style.display = 'none';

firstSelection.addEventListener("change", function() {
	if(firstSelection.selectedIndex != 0){
		startButton.style.display = 'block';
	}else{
		startButton.style.display = 'none';
	}
});

//firstSelection.selectedIndex = 2;
//start();

function start(){
	homeDiv.remove();
	tempDiv.style.display = 'block';

	player = firstPlayerOptions[firstSelection.selectedIndex];
	
	if(player == "X" || player == "x"){
     current = "X";
	}
	
	else if(player == "O" || player == "o"){
    	current = "O";
	}
	
	else{
    	alert('Please Enter X or O')
    	location.reload()
	}
	
	use = [
				document.getElementById('a'),
			   document.getElementById('b'),
			   document.getElementById('c'),
			   document.getElementById('d'),
			   document.getElementById('e'),
			   document.getElementById('f'),
			   document.getElementById('g'),
			   document.getElementById('h'),
			   document.getElementById('i')
			 ];
	
	for(var i = 0;i < use.length;i++){
        dones.push(false)
    }
}


function change(num){
    if(!dones[num]){
        use[num].textContent=current
        dones[num]=true;
        if(current=="X"){
            current="O";
        }
        else{
            current="X";
        }
    }
    var row,col;
    row=parseInt(num/3);
    col=num%3;
    chk_h(row)
    chk_v(col);
    if(row==col){
        if(row==1){
            chk_d2();
        }
            chk_d1();
    }
    else if(row+col==2){
        chk_d2();
    }
}
function chk_d1(){
    let checks = [];
    for (var r=0;r<9;r+=4){
        if(dones[r]==false){
            
        }else{checks.push(use[r].textContent)}      
    }
    if(checks[0]==checks[1]&&checks[0]==checks[2]&&checks.length==3){
        gameOver(checks)
       }
}

function chk_d2(){
        let checks = [];

    for (var r=2;r<=6;r+=2){
        if(dones[r]==false){
            
        } else{checks.push(use[r].textContent)}      
    }
    if(checks[0]==checks[1]&&checks[0]==checks[2]&&checks.length==3){
        gameOver(checks)
       }
    
}

function chk_h(row){
    let checks = [];
    var b=row*3,f=0;
    for(var i =b;i<b+3;i++){
        if(dones[i]==false){
        }else{checks.push(use[i].textContent)}      
    }
    if(checks[0]==checks[1]&&checks[0]==checks[2]&&checks.length==3){
        gameOver(checks)
       }
    
}

function chk_v(col){
        let checks = [];

    var end=col+6;
    for(var i = col;i<=end;i+=3){
        if(dones[i]==false){
        }else{checks.push(use[i].textContent)}      
    }
    if(checks[0]==checks[1]&&checks[0]==checks[2]&&checks.length==3){
        gameOver(checks)
       }
    
}

function gameOver(use){
		  tempDiv.remove();
		restartButton.style.display = 'block';
			winnerText.textContent = "Congrats, Game Over. Player "+use[0]+" is the winner"
		  gameOverDiv.style.display = "block";
}