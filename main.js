(function(){
let boxContainer = document.getElementById('main');
    for(let i = 0; i < boxContainer.children.length; i++){
		let box = boxContainer.children[i];
		box.onclick = function(){
			if(this.textContent !== 'X' && this.textContent !== 'O'){
				this.textContent = 'X';
				getWinner()
				let boxWithClases = document.getElementsByClassName('box');
				let emptyArr = [];
				for(let i = 0; i < boxWithClases.length; i++){
					if(boxWithClases[i].textContent == ''){emptyArr.push(boxWithClases[i])}
				}
				emptyArr[Math.floor(Math.random() * emptyArr.length)].textContent =  'O';
				getWinner();
			}
		}
	};

})();

function marking(divIndexes = []){
	for(let i in divIndexes){
		document.getElementById('box'+Number(divIndexes[i]+1)).style.background = 'green';
	}
}

function getWinner(){
	const boxes = [];
	for(let i = 1; i <= 9; ++i){
		boxes.push(document.getElementById('box'+i).innerHTML);
	}
	for(let i=0;i<boxes.length;i+=3){
		if(boxes[i] !== '' && boxes[i] === boxes[i+1] && boxes[i] === boxes[i+2]){
			marking([i,i+1,i+2]);
		}
	}
	for(let i=0;i<3;++i){
		if(boxes[i] !== '' && boxes[i] === boxes[i+3] && boxes[i] === boxes[i+6]){
			marking([i,i+3,i+6]);
		}
	}
	if(boxes[0] !== '' && boxes[0] === boxes[4] && boxes[0] === boxes[8]){
		marking([0,4,8])
	}
	if(boxes[2] !== '' && boxes[2] === boxes[4] && boxes[2] === boxes[6]){
		marking([2,4,6])
	}
};

function restart(){
	let allBoxes = document.getElementsByClassName('box');
	for(let i = 0; i < allBoxes.length; i++ ){
		let box = allBoxes[i];
		box.textContent = '';
		box.style.background = '';
	}
};
