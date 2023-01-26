<script>
	import VoltarMenu from './VoltarMenu.svelte'
</script>

<div class="Caixa">
	<div class="gif"></div>
	<div class="SobreConteudo">

		<div class="Caixinha">
			<h1>Sobre</h1>
			
			<p>
				Pontos e referências utilizadas
			</p>
			<div class="VoltarSobre"><VoltarMenu/></div>
		</div>
	</div>
</div>
	
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

		div.gif {
			background-image: url("https://media3.giphy.com/media/Th49xtsrSFJVsIGtkB/giphy.gif?cid=ecf05e4773zrll7b39tpyqns8itmwubgzmckgdixj7on6iow&rid=giphy.gif&ct=g");
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			width: 50%;
			height: 100%;
		}

		div.SobreConteudo {
			display: flex;
			justify-content: center;
			align-items: center;
			background: #8A2A2A;
			width: 50%;
			height: 100%;
		}

		div.Caixa {
			display: flex;
			background-size: cover;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100vh;
		}

		div.Caixinha {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;
			background: white;
			border-radius: 15px;
			font-family: 'Roboto Condensed';
			width: 80%;
			height: 90%;
		}

		div.VoltarSobre{
			position: absolute;
			bottom: 3%;
			padding: 1px;
			width: 35%;
		}
</style>

