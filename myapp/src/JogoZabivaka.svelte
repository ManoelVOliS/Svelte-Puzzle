<script>
    import VoltarSelecionar from './VoltarSelecionar.svelte';
    import { estado } from './Estado.js';
    import { trocarEstadoDoJogo } from "./Estado.js";

	let vetor = [
        "./public/Zabivaka/1.jpg","./public/Zabivaka/2.jpg","./public/Zabivaka/3.jpg","./public/Zabivaka/4.jpg","./public/Zabivaka/5.jpg","./public/Zabivaka/6.jpg","./public/Zabivaka/7.jpg","./public/Zabivaka/8.jpg","./public/Zabivaka/9.jpg"
    ];

    let primeira = false;
    let segunda = false;

    let arr = [
        [".1.jpg", ".2.jpg", ".3.jpg"],
        [".4.jpg", ".5.jpg", ".6.jpg"],
        [".7.jpg", ".8.jpg", ".9.jpg"],
    ];

	let conjuntoBackup = [
		["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"]
	];

	function selecionarPeca(pos){
		if(primeira === false){
			primeira = pos;
			//console.log("Primeira selecionada => ",primeira);
		}else if(segunda === false){
			segunda = pos;
			//console.log("segunda selecionada => ",segunda);
			trocarPosi(primeira,segunda);
		}

	}

	function trocarPosi(pos1,pos2){
		//Estrutura de troca de peça e posição
		let backup = arr[pos1[0]][pos1[1]];
		arr[pos1[0]][pos1[1]] = arr[pos2[0]][pos2[1]];
		arr[pos2[0]][pos2[1]] = backup;
		primeira = false;
		segunda = false;
		
		// Validação das posições do puzzle
		for(let i in arr){
			for(let j in arr[i]){
				if(conjuntoBackup[i][j] != arr[i][j].replace("./public/Zabivaka/", "").replace(".jpg","")){
					
					return false;
				}
			}
			
		}
		//console.log(arr)
		return setTimeout(() => { Swal.fire({
            title: 'PARABÉNS!!',
            text: 'VOCÊ CONSEGUIU!!',
            icon: 'success',
            confirmButtonText: 'OKAY'
          }); }, 250);
	}

	//Função para embaralhar o Puzzle
	function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shuffleArray(vetor)
    function a(){
        arr[0][0] = vetor[0];
        arr[0][1] = vetor[1];
        arr[0][2] = vetor[2];
        arr[1][0] = vetor[3];
        arr[1][1] = vetor[4];
        arr[1][2] = vetor[5];
        arr[2][0] = vetor[6];
        arr[2][1] = vetor[7];
        arr[2][2] = vetor[8];
    }
    a()
	
	function refresh(){
		trocarEstadoDoJogo("#")
		setTimeout(() => {
			trocarEstadoDoJogo('jogoZabivaka')
		}, 0);
	}

	function gabarito(){
		Swal.fire({
			title: 'Gabarito!',
			text: 'Tente fazer igual.',
			imageUrl: '../public/Zabivaka/Mascote completo.jpg',
			imageWidth: 360,
			imageHeight: 360,
			imageAlt: 'Custom image',
		})
	}

</script>


	<style>
		*{
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}

		div.Caixa{
			background-image: url('https://i.superesportes.com.br/iHyK56XTT8AUV6AltImeHlXMadY=/smart/imgsapp.df.superesportes.com.br/app/noticia_127116951798/2018/06/22/63011/20180622124501718687o.gif');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			align-items: center;
			display: flex;
			flex-direction: column;
			width: 100vw;
			height: 100vh;
			justify-content: center;
		}


		div.VoltarJogo {
			flex-direction: column;
            align-items: center;
        	display: flex;
			position: absolute;
			bottom: -8%;
			padding: 1px;
			width: 25%;
			right: 69%;
		}

		button.refresh{
			position: absolute;
			right: 37.5%;
			bottom: -8%;
			width: 25%;
			background: #170d2f;
			text-align: center;
			border-radius: 5px;
			padding: 5px;
			font-family: 'Roboto Condensed';
			color: white;
			justify-content: center;
			box-shadow: 0px 0px 12px rgb(0, 0, 0);
		}

		button.gabarito {
			position: absolute;
			right: 6%;
			bottom: -8%;
			width: 25%;
			background: #170d2f;
			text-align: center;
			border-radius: 5px;
			padding: 5px;
			font-family: 'Roboto Condensed';
			color: white;
			justify-content: center;
			box-shadow: 0px 0px 12px rgb(0, 0, 0);
		}

		.imgs{
			width: 100%;
		}

		#table{
			display: grid;
			grid-template-columns: repeat(3,auto);
			
			width: 500px;
			height: 500px;
			position: relative;
			background: white;
    		border-radius: 15px;
    		padding: 15px;
			margin-top: 3%;
   	 		margin: auto;
    		box-shadow: 5px 5px 10px gray;
			
		}

		.peca{
			cursor: pointer;
			font-size: 2em;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px black solid;
		}
	</style>


<div class="Caixa">
	<div id="table">
		{#each arr as {}, i }
			{#each arr as {},j }
				<div on:click={()=>{selecionarPeca([i,j])}} class="peca"><img class="imgs" src= {arr[i][j]} alt=""></div>
			{/each}
		{/each}
	<div class="VoltarJogo"><VoltarSelecionar/></div>
	<button class ='refresh' on:click={refresh}>EMBARALHAR</button>	
	<button class="gabarito" on:click={gabarito}>GABARITO</button>
	</div>
	<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</div>

