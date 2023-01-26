<script>
	import { trocarEstadoDoJogo } from './Estado.js'
</script>


<div class='voltar' on:click={() => trocarEstadoDoJogo('menu')}>
	Voltar ao menu
</div>

<style>
            div.voltar {
                width: 100%;
                background: #8A2A2A;
                text-align: center;
                border-radius: 10px;
                padding: 5px;
                font-family: 'Roboto Condensed';
                color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 0px 12px gray;
            }
</style>