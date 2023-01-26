<script>
    import VoltarMenu from "./VoltarMenu.svelte";
    import { estado } from './Estado.js'
    import { trocarEstadoDoJogo } from "./Estado.js";

	function selecionarPeca(pos){
		if(primeira === false){
			primeira = pos;
			console.log("Primeira selecionada => ",primeira);
		}else if(segunda === false){
			segunda = pos;
			console.log("segunda selecionada => ",segunda);
			trocarPosi(primeira,segunda)
		}

	}

	function embaralhar(ordem){
    for(let j, x, i = ordem.length; i; 
        j = Math.floor(Math.random() * i), x = ordem[--i], ordem[i] = ordem[j], ordem[j] = x);
        

     return ordem 
}

	let ordem =[
		['1.jpg','2.jpg','3.jpg'],
		['4.jpg','5.jpg','6.jpg'],
		['7.jpg','8.jpg','9.jpg']
	];

	function trocarPosi(pos1,pos2){
		let backup = ordem[pos1[0]][pos1[1]];
		ordem[pos1[0]][pos1[1]] = ordem[pos2[0]][pos2[1]]
		ordem[pos2[0]][pos2[1]] = backup
		primeira = false
		segunda = false
	}

	let primeira = false;
	let segunda = false;
	


	let aprov =[
		['1.jpg','2.jpg','3.jpg'],
		['4.jpg','5.jpg','6.jpg'],
		['7.jpg','8.jpg','9.jpg']
	];


</script>


	<style>
		*{
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}

		div.Caixa{
			background-image: url('https://gifs.eco.br/wp-content/uploads/2021/10/imagens-e-gif-copa-da-mundo-5.gif');
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
			background: #8A2A2A;
			text-align: center;
			border-radius: 10px;
			font-family: 'Roboto Condensed';
			color: white;
			justify-content: center;
			box-shadow: 0px 0px 12px rgb(0, 0, 0);
			margin-top: 2%;
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
		{#each ordem as {}, i }
			{#each ordem as {},j }
				<div on:click={()=>{selecionarPeca([i,j])}} class="peca"><img class="imgs" src={ordem[i][j]} alt=""></div>
			{/each}
		{/each}
	</div>
	<div class="VoltarJogo"><VoltarMenu/></div>
</div>

