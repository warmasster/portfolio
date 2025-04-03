<script>
  import Magnify from "svelte-material-icons/Magnify.svelte"
  import articulos from "../articulos.json"
  let search = "";
</script>
<div class="flex flex-col w-[100%] justify-center">
  <div class="mt-8 flex flex-col items-center justify-center font-semibold text-center">
    <h1 class="py-1 text-3xl sm:text-5xl">Articulos</h1>
    <h2 class="py-1 text-2xl sm:text-3xl">Busca el articulo que quieras</h2>
  </div>
</div>
<div class="border-t-2 mt-6 border-slate-200 w-[100%]"></div>
<div class="flex justify-center">
  <div class="flex justify-center items-center w-[80%]">
    <div class="mt-4 items-center justify-center lg:w-[30%] w-[90%] focus-within:border-black bg-gray-100 flex px-4 py-1 border-gray-500 border-2 focus:placeholder-slate-800  rounded-full focus:text-black text-gray-500">
      <input class="focus:outline-none w-[90%] focus:text-black bg-gray-100" bind:value={search} placeholder="Busca un articulo" type="text">
      <Magnify class="w-[10%]"/>
    </div>
  </div>
</div>

<div class="flex items-center justify-center">
  <div class="grid md:grid-cols-2 grid-cols-1 lg:w-[60%] w-[80%] items-center justify-center align-middle gap-10 lg:mx-[22%] xl:mx-[30%] m-10">
    {#each Object.values(articulos) as articulo}
      {#if articulo.Titulo.toLowerCase().includes(search.toLowerCase()) || search===""}
        <a href='/blog/articulos/{articulo.ref}'>
          <div class="px-4 py-3 w-[100%] h-60 shadow-[0px_0px_30px_6px_#00000024] bg-slate-50 rounded-2xl">
            <div class="h-[90%] text-xl">
              <p class="font-semibold">{articulo.Titulo}</p>
              <p class="mt-[7%]">{articulo.Descripcion}</p>
            </div>
            <div class="h-[90%]">
    
            </div>
          </div>
        </a>
      {/if}
    {/each}
  </div>
</div>