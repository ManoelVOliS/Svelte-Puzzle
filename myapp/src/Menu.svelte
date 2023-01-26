<svelte:head>
    <link rel="stylesheet" href="./app.css">
</svelte:head>

<script>
	import { estado } from './Estado.js'
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

    <section>
        <h1>
            PUZZLE
        </h1>
        <div class="button">
            <div class='menuBtn' on:click={() => trocarEstadoDoJogo('jogo')}>
                PLAY
            </div>
            
            <div class='menuBtn' on:click={() => trocarEstadoDoJogo('sobre')}>
                REFERÊNCIAS
            </div>
        </div>

    
    </section>


<style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

            div.menu {
            background: rgb(255, 255, 255);
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
                background: #8A2A2A;
                width: 50%;
                height: 20%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 15px;
                border-radius: 10px;
                box-shadow: 0px 0px 12px gray;
            }

            div.menuBtn {
                width: 90%;
                background: white;
                text-align: center;
                border-radius: 10px;
                padding: 15px;
                font-family: 'Roboto Condensed';
            }

            h1 {
                font-size: 5em;
                font-weight: 900;
                text-align: center;
                text-align: match-parent;
                font-family: 'Roboto Condensed';
                text-shadow: 0px 0px 10px gray;
            }

            section {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100vh;
                box-shadow: 0px 0px 10px gray;
            }

</style>


