<script>
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<div class='voltar' on:click={() => trocarEstadoDoJogo('menu')}>
	Voltar ao menu
</div>

<style>
    div.voltar {
          text-align: center;
          list-style-type: none;
          font-size: 20px;
          margin: auto;
          margin-bottom: 5px;
          border-radius: 10px;
          border-style: solid;
          border-width: 3px;
          width: 20%;
          padding: 3px;
      }

      div.voltar:hover { 
          background-color: lightgrey;
          cursor: pointer;
      }
  </style>