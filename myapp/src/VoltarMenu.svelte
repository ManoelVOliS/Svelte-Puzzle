<script>
	import { trocarEstadoDoJogo } from './Estado.js';
</script>


<div class='voltar' on:click={() => trocarEstadoDoJogo('menu')}>
	Voltar
</div>
<div></div>

<style>
            div.voltar {
                width: 100%;
                background: #7b1942;
                text-align: center;
                border-radius: 10px;
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