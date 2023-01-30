<script>
	import VoltarMenu from './VoltarMenu.svelte';
</script>

<div class="Caixa">
	<div class="gif"></div>
	<div class="SobreConteudo">

		<div class="Caixinha">
			<h1 class="Sobre">Sobre</h1>
			
			<br>
			<p>
				Este projeto foi idealizado com o intuito de mostrar nossos aprendizados durante o primeiro período do curso Sistemas Para Internet no IFPE Campus Igarassu.
			</p>
			<h1 class="Participantes">
				Participantes
			</h1>
			<li> Manoel Victor </li>
			<li> Livia Sabino </li>
			<li> Layrton Warserman </li>
			<li> Victor Alves </li>
			<li>Alysson José </li>
			
			<h1 class="AgradecimentosT">
				Agradecimentos
			</h1>
			<div class="Agradecimento">
				
				<p>Aos Professores Allan Diego Silva Lima e Leandro Marques Queiros, gostariamos de expressar nossa
					imensa gratidão pelo conhecimento passado 
					e a paciência com os alunos ao longo de período 2022.2 no IFPE - Campus Igarassu.
				</p>
			</div>
			<div class="VoltarSobre"><VoltarMenu/></div>
		</div>
	</div>
</div>
	
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
		
		.Sobre{
			margin-top: 10%;
			text-align: center;
		}
		p {
			text-align: center;
			padding: 5%;
		}
		.Participantes{
			margin-top: 10%;
			text-align: center;
		}
		
		.AgradecimentosT{
			text-align: center;
			margin-top: 10%;
		}
		.Agradecimento {
			width: 100%;
			text-align: center;
			display: flex;
			justify-content: center;
		}
		.Agradecimento p{
			text-align: center;
		}
		
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
			background: #7b1942;
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
			text-align: center;
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