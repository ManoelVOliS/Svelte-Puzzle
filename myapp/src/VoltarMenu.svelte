<script>
	import { trocarEstadoDoJogo } from './Estado.js';
</script>


<div class='voltar' on:click={() => trocarEstadoDoJogo('menu')}>
	Voltar
</div>


<style>
            div.voltar {
                width: 100%;
                background: #170d2f;
                text-align: center;
                border-radius: 5px;
                padding: 5px;
                font-family: 'Roboto Condensed';
                color: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                box-shadow: 0px 0px 12px rgb(0, 0, 0);
            }
</style>