<script>

  import Jogo from './Jogo.svelte'
	import Sobre from './Sobre.svelte'
	import Menu from './Menu.svelte'

  import { estado } from './Estado';
</script>

<main>
  
  {#if $estado === 'menu'}
    <Menu/>
  {:else if $estado === 'sobre'}
    <Sobre/>
  {:else if $estado === 'jogo'}
    <Jogo/>
  {/if}

</main>

<style>
main {
    background-image: url('https://media1.giphy.com/media/2jMxXMfsJVJelv062L/giphy.gif?cid=ecf05e47revf0z25zzyem1tn9yc8k655tvsdi23siy985tfi&rid=giphy.gif&ct=g');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
