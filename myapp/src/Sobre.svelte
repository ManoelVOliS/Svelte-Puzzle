<script>
	import VoltarMenu from './VoltarMenu.svelte';
</script>

<div class="Caixa">
	<div class="gif"></div>
	<div class="SobreConteudo">

		<div class="Caixinha">
			<h1 class="Sobre">Sobre</h1>		
			<p>
				Este projeto foi idealizado com o intuito de mostrar nossos aprendizados durante o primeiro período do curso Sistemas Para Internet no IFPE Campus Igarassu.
			</p>
			<h1 class="Participantes">
				Participantes
			</h1>
			<br>
			<li><a href="https://github.com/ManoelVOliS">Manoel Victor</a></li>
			<li><a href="https://github.com/liviasab">Livia Sabino</a></li>
			<li><a href="https://github.com/Layrton07">Layrton Warserman</a></li>
			<li><a href="https://github.com/SiqueiraVictor">Victor Alves</a></li>
			<li><a href="https://github.com/alynhoo">Alysson José</a></li>
			<li><a href="https://github.com/aR1ch4rdz">Anthony Richard</a></li>
			
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
			margin-top: 2%;
			text-align: center;
		}
		p {
			text-align: center;
			padding: 5%;
		}
		.Participantes{
			margin-top: 4%;
			text-align: center;
		}
		
		.AgradecimentosT{
			text-align: center;
			margin-top: 10%;
		}
		.Agradecimento {
			width: 100%;
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
			background: #170d2f;
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
			flex-direction: column;
            align-items: center;
            display: flex;
			position: absolute;
			bottom: 3%;
			padding: 1px;
			width: 35%;
		}
</style>