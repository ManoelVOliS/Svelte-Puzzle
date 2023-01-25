<script>

  import Jogo from './Jogo.svelte'
	import Sobre from './Sobre.svelte'
	import Menu from './Menu.svelte'

  import { estado } from './Estado';
</script>

{#if $estado === 'menu'}
	<Menu/>
{:else if $estado === 'sobre'}
	<Sobre/>
{:else if $estado === 'jogo'}
	<Jogo/>
{/if}

<!-- 
<script>
  import VoltarMenu from "./VoltarMenu.svelte";
  import { estado } from './Estado.js'
  import { trocarEstadoDoJogo } from "./Estado.js";

function selecionarPeca(pos){
  if(primeira === false){
    primeira = pos;
    console.log("Primeira selecionada => ",primeira);
  }else if(segunda === false){
    segunda = pos;
    console.log("segunda selecionada => ",segunda);
    trocarPosi(primeira,segunda)
  }

}
function trocarPosi(pos1,pos2){
  let backup = arr[pos1[0]][pos1[1]];
  arr[pos1[0]][pos1[1]] = arr[pos2[0]][pos2[1]]
  arr[pos2[0]][pos2[1]] = backup
  primeira = false
  segunda = false
}

let primeira = false;
let segunda = false;

let arr =[
  [4,2,6],
  [8,5,9],
  [7,1,3]
];

</script>

<svelte:head>
<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  main{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #table{
    display: grid;
    grid-template-columns: repeat(3,auto);
    
    width: 500px;
    height: 500px;
    position: relative;
  }
  .peca{
    cursor: pointer;
    font-size: 2em;
    width: 100%;
    height: 100%;
    display: flex;
    background: red;
    justify-content: center;
    align-items: center;
    border: 1px black solid;
  }
</style>
</svelte:head>

<main>
<div id="table">
  {#each arr as {}, i }
    {#each arr as {},j }
      <div on:click={()=>{selecionarPeca([i,j])}} class="peca">{arr[i][j]}</div>
    {/each}
  {/each}
</div>
</main>
 -->





