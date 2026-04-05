<script>
    import Github from "svelte-material-icons/Github.svelte"
    import Gitlab from "svelte-material-icons/Gitlab.svelte"
    import Linkedin from "svelte-material-icons/Linkedin.svelte"
    import GradientText from "$lib/GradientText.svelte"
</script>

<header class="flex flex-col items-center justify-center w-full pt-12">
    <div class="w-[100%] sm:w-[80%] font-bold text-center">
        <div class="flex items-center justify-center">
            <img src="/fernando.webp" alt="Fernando Hernández" class="w-40 h-40 rounded-full shadow-xl shadow-black/40 border-2 border-slate-400/50">
        </div>
        <h1 class="py-1 text-3xl sm:text-5xl mt-4">
            <GradientText>Fernando Hernández</GradientText>
        </h1>
        <h2 class="py-1 text-2xl sm:text-3xl">
            <GradientText>Programador full-stack</GradientText>
        </h2>
        <h3 class="py-1 my-10 text-lg font-semibold sm:text-center text-justify sm:px-0 px-8 text-slate-200">
            Programando desde mi infancia y profesionalmente desde los 18, con muchos proyectos a mis espaldas y habiendo trabajado en el sector desde que me fue posible por edad. Versátil y con una gran capacidad para adaptarme a nuevas tecnologías.
        </h3>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-6 my-5 px-4">
        <span class="flex items-center gap-2 px-4 py-2 text-slate-800 font-semibold transition-all rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105" style="background: linear-gradient(to top right, #f8fafc, #bfdbfe);">
            <a target="_blank" href="https://github.com/warmasster" class="text-slate-800">Github</a>
            <Github size=20 />
        </span>
        <span class="flex items-center gap-2 px-4 py-2 text-slate-800 font-semibold transition-all rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105" style="background: linear-gradient(to top right, #f8fafc, #bfdbfe);">
            <a target="_blank" href="https://gitlab.com/ferndohm99emf" class="text-slate-800">GitLab</a>
            <Gitlab size=20 />
        </span>
        <span class="flex items-center gap-2 px-4 py-2 text-white transition-all bg-slate-800 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-105">
            <a target="_blank" href="https://linkedin.com/in/fernando-hernandez-019310312"><GradientText>LinkedIn</GradientText></a>
            <Linkedin size=20 />
        </span>
    </div>
</header>