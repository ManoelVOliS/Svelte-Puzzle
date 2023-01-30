<script>

  import JogoLaeeb from './JogoLaeeb.svelte';
  import JogoZabivaka from './JogoZabivaka.svelte';
  import JogoFuleco from './JogoFuleco.svelte';
	import Sobre from './Sobre.svelte';
	import Menu from './Menu.svelte';
  import SelecionarMascote from './SelecionarMascote.svelte';

  import { estado } from './Estado';

  let musica = new Audio ("./musica.mp3")
  let Pause = true

  function TocarMusica(){
        if(Pause == true){
            musica.play()
            Pause = false
         
        }else{
            musica.pause()
            Pause = true

          }

        }

</script>

<main>
  
  {#if $estado === 'menu'}
    <Menu/>
  {:else if $estado === 'selecionarmascote'}
    <SelecionarMascote/>
  {:else if $estado === 'sobre'}
    <Sobre/>
  {:else if $estado === 'jogoLaeeb'}
    <JogoLaeeb/>
  {:else if $estado === 'jogoZabivaka'}
    <JogoZabivaka/>
  {:else if $estado === 'jogoFuleco'}
    <JogoFuleco/>
  {/if}

  <div id="Music" on:click={(TocarMusica)}></div>

</main>

<style>
  
  #Music {
    background-image: url(../public/speakers/speaker-off.png);
    background-size: cover;
    cursor: pointer;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 2%;
    bottom: 2%;
  }

main {
    background-image: url('../public/worldcup.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }


</style>
