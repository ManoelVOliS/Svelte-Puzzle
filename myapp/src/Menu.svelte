<svelte:head>
    <link rel="stylesheet" href="./app.css">
</svelte:head>

<script>
	import { estado } from './Estado.js'
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<body>
    <h1>
        PUZZLE
    </h1>
    
    <section>
        <div class='menu' on:click={() => trocarEstadoDoJogo('jogar')}>
            Jogar
        </div>
        
        <div class='menu' on:click={() => trocarEstadoDoJogo('sobre')}>
            Sobre
        </div>
    
    
        <style>
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
        </style>
    
    </section>
    
</body>


<style>


        h1 {
            text-align: center;
            text-align: match-parent;
            font-family: Arial; 
            text-shadow: 3px 3px 10px gray;
        }


    body {
			width: 100vw;
			height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
		}

    section {
    
    background: rgb(155, 35, 35);
    border-radius: 10px;
    padding: 10px;
    width: 150px;
    box-shadow: 3px 3px 10px gray;
}

</style>


