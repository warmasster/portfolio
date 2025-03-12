<script>
    import Github from "svelte-material-icons/Github.svelte"
    import Linkedin from "svelte-material-icons/Linkedin.svelte"
</script>

<header class="flex flex-col items-center justify-center w-full pt-4">
    <div class="w-[100%] sm:w-[40%] font-bold text-center">
        <h1 class="py-1 text-3xl sm:text-5xl">Fernando Hernández</h1>
        <h2 class="py-1 text-2xl sm:text-3xl">Programador full-stack</h2>
        <h3 class="py-1 my-10 text-lg font-semibold text-gray-600">Programando desde mi infancia y profesionalmente desde los 18, con muchos proyectos a mis espaldas y habiendo trabajado en el sector desde que me fue posible por edad. Versátil y con una gran capacidad para adaptarme a nuevas tecnologías.</h3>
    </div>
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
</header>