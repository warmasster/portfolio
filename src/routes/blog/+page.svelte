<script>
  import Github from "svelte-material-icons/Github.svelte"
  import Linkedin from "svelte-material-icons/Linkedin.svelte"
  import ArrowRigth from "svelte-material-icons/ArrowRight.svelte"
  import articulos from "./articulos.json"

  const makerand = () => {
    let maxnum =  Math.floor(Math.random() * Object.keys(articulos).length);
    return articulos[Object.keys(articulos)[maxnum]]
  }
  let maxTitleLen = 20

</script>
<div class="flex flex-col w-[100%] justify-center">
  <div class="mt-8 flex flex-col items-center justify-center font-semibold text-center">
    <h1 class="py-1 text-3xl sm:text-5xl">Blog</h1>
    <h2 class="py-1 text-2xl sm:text-3xl lg:mx-0 mx-2">Mi blog donde veras podras ver mis articulos</h2>
  </div>
  <div class="border-t-2 mt-6 border-slate-200 w-[100%]"></div>

</div>

<div class="flex items-center justify-center">
  <div class="grid md:grid-cols-2 grid-cols-1 lg:w-[60%] items-center justify-center align-middle gap-10 lg:mx-[22%] xl:mx-[27%] md:mx-0 m-10">
    <div class="px-4 py-3 w-[100%] sm:h-52 h-36 shadow-[0px_0px_30px_6px_#00000024] bg-slate-50 rounded-2xl">
      <div  class="flex flex-col justify-center items-center">
        <p class="text-2xl font-semibold text-center">Articulos</p>
        <div class="flex flex-col w-[100%] items-center justify-center gap-2 my-2">
          <span class="flex items-center justify-center p-2 w-[100%] text-black transition-all bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105">
              <a href='blog/articulos'><strong>Todos los articulos</strong></a>
              <ArrowRigth class="ml-4"/>  
          </span>
          <span class="flex items-center justify-center p-2 w-[100%] text-black transition-all bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105">
              <a href='blog/articulos/{makerand().ref}'>{makerand().Titulo.slice(0,maxTitleLen)}{makerand().Titulo.length > maxTitleLen ? "..." : ""}</a>
              <ArrowRigth class="ml-4"/>  
          </span>
          <span class="flex items-center justify-center p-2 w-[100%] text-black transition-all bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105">
              <a href='blog/articulos/{makerand().ref}'>{makerand().Titulo.slice(0,maxTitleLen)}{makerand().Titulo.length > maxTitleLen ? "..." : ""}</a>
              <ArrowRigth class="ml-4"/>  
          </span>
        </div>
      </div>
    </div>
    
    <div class="px-4 py-3 w-[100%] h-52 shadow-[0px_0px_30px_6px_#00000024] bg-slate-50 rounded-2xl">
      <div  class="flex flex-col justify-center items-center">
        <p class="text-2xl font-semibold text-center"> Contacto</p>
        <div class="flex items-center justify-center gap-6 my-5">
          <span class="flex items-center gap-2 px-4 py-2 text-white transition-all bg-black rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105">
            <a target="_blank" href="https://github.com/warmasster">Github</a>
            <Github size=20 />
                </span>
                <span class="flex items-center gap-2 px-4 py-2 text-black transition-all bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105">
                    <a target="_blank" href="https://linkedin.com/in/fernando-hernandez-019310312">LinkedIn</a>
                    <Linkedin size=20 />
                </span>
              </div>
              <p class="w-fit text-lg font-semibold">fernandohmdev@gmail.com</p>
              <p class="w-fit text-lg font-semibold">688 68 50 40</p>
            </div>
          </div>

  </div>
</div>
