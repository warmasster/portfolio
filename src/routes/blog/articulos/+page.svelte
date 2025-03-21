<script>
  import Magnify from "svelte-material-icons/Magnify.svelte"
  import articulos from "../articulos.json"
  let search = "";
  const checksearch = (search) => articulos.forEach(element => {
    console.log(element)
    if (search in element.Titulo){
      console.log(element.Titulo)
    }
  });
</script>
<div class="flex flex-col w-[100%] justify-center">
  <div class="mt-8 flex flex-col items-center justify-center">
    <h1 class="text-6xl">Artículos</h1>
    <p class="w-[60%] mt-6 text-center">Busca a continuacion los articulos que te interesan</p>
  </div>
  <div class="flex justify-center items-center">
    <div class="m-8 items-center justify-center w-[30%] focus-within:border-black bg-gray-100 flex px-4 py-1 border-gray-800 border-2  rounded-full focus:text-black text-gray-800">
      <input class="focus:outline-none w-[90%] focus:text-black bg-gray-100" on:keypress={() => checksearch(search)} bind:value={search} placeholder="Escribe que articulo quieres buscar" type="text">
      <Magnify class="w-[10%]"/>
    </div>
  </div>
  <div class="border-t-2 border-black w-[100%]"></div>
</div>

<div class="grid grid-cols-2 items-center justify-center align-middle gap-10 m-10">
  {#each Object.values(articulos) as articulo}
    {#if articulo.Titulo.toLowerCase().includes(search.toLowerCase()) || search===""}
      <div class="px-4 py-3 w-[100%] h-60 shadow-[0px_0px_30px_6px_#00000024] bg-slate-50 rounded-2xl">
        <div class="h-[90%] text-xl">
          <p>{articulo.Titulo}</p>
        </div>
        <div class="h-[90%]">

        </div>
      </div>
    {/if}
  {/each}
</div>