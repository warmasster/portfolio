<script>
    import "../app.css";
</script>

<div class="flex items-center justify-center h-12 px-12 py-4 font-bold shadow-sm sm:justify-between text-xlf">
    <div class="hidden sm:flex">
        <p>Fernando Hernández</p>
    </div>
    <div class="flex justify-between gap-8 sm:gap-14">
        <button class="transition-all hover:scale-105" 
        on:click={() => document.querySelector(".contacto").scrollIntoView({behavior:"smooth"})}
        >Contacto</button>
        <button class="transition-all hover:scale-105"
        on:click={() => document.querySelector(".experiencia").scrollIntoView({behavior:"smooth"})}
        >Proyectos</button>
        <button class="transition-all hover:scale-105"
        on:click={() => document.querySelector(".habilidades").scrollIntoView({behavior:"smooth"})}
        >Habilidades</button>
    </div>
</div>
<slot />