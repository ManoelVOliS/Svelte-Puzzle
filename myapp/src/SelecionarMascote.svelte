<script>
	import { estado } from './Estado.js';
	import { trocarEstadoDoJogo } from './Estado.js';
    import VoltarMenu from './VoltarMenu.svelte';
</script>

    <section>
        <h1>
            SELECIONAR O MASCOTE
        </h1>
        <div class="button">


            <div class='menuBtn' on:click={() => trocarEstadoDoJogo('jogoLaeeb')}>
                La'eeb 2022
            </div>
            <div class='menuBtn' on:click={() => trocarEstadoDoJogo('jogoZabivaka')}>
                Zabivaka 2018
            </div>
            <div class='menuBtn' on:click={() => trocarEstadoDoJogo('jogoFuleco')}>
                Fuleco 2014
            </div>
          
            
        </div>

        <div class="VoltarMenu"><VoltarMenu/></div>
    </section>
    
    
<style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

            div.menu {
            background: red;
            text-align: center;
            list-style-type: none;
            font-size: 20px;
            margin: auto;
            margin-bottom: 5px;
            border-radius: 10px;
            border-style: solid;
            border-width: 3px;
            width: 40%;
            padding: 3px;
            }

            div.menu:hover { 
            background-color: lightgrey;
            cursor: pointer;
            }

            div.button{
                background:#170d2f;
                width: 50%;
                height: 22%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 15px;
                border-radius: 10px;
                box-shadow: 0px 0px 12px rgb(0, 0, 0);
            }

            div.menuBtn {
                flex-direction: column;
                align-items: center;
                display: flex;
                width: 90%;
                background: white;
                text-align: center;
                border-radius: 5px;
                padding: 5px;
                font-family: 'Roboto Condensed';
            }

            h1 {
                font-size: 5em;
                font-weight: 900;
                color: azure;
                text-align: center;
                text-align: match-parent;
                font-family: 'Roboto Condensed';
                text-shadow: 0px 0px 10px rgb(0, 0, 0);
            }

            section {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100vh;
                box-shadow: 0px 0px 10px rgb(0, 0, 0);
            }

            div.VoltarMenu{
			position: absolute;
			bottom: 25%;
			padding: 0px;
			width: 25%;
		}

</style>


