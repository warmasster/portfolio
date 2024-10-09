<script>
    import Github from "svelte-material-icons/Github.svelte"
    import Linkedin from "svelte-material-icons/Linkedin.svelte"
</script>

<header class="flex flex-col items-center justify-center w-full p-4">
    <div class="w-[100%] sm:w-[50%] font-bold text-center">
        <h1 class="py-1 text-3xl sm:text-5xl">Fernando Hernández</h1>
        <h2 class="py-1 text-2xl sm:text-3xl">Programador frontend</h2>
        <h3 class="py-1 text-lg font-semibold text-gray-600">Programando desde los 10 años y profesionalmente desde los 18, con una gran capacidad de aprendizaje y muchas ganas de trabajar.</h3>
    </div>
    <div class="flex items-center justify-center gap-6 my-10">
        <span class="flex items-center gap-2 px-4 py-2 text-white bg-black rounded-lg shadow-md">
            <a target="_blank" href="https://github.com/warmasster">Github</a>
            <Github size=20 />
        </span>
        <span class="flex items-center gap-2 px-4 py-2 text-black bg-gray-100 rounded-lg shadow-md">
            <a target="_blank" href="www.linkedin.com/in/fernando-hernandez-019310312">Linkedin</a>
            <Linkedin size=20 />
        </span>
    </div>
</header>