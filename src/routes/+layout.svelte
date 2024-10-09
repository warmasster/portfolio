<script>
    import "../app.css";
</script>

<div class="flex items-center justify-center h-12 px-12 py-4 font-bold shadow-sm sm:justify-between text-xlf">
    <div class="hidden sm:flex">
        <p>Fernando Hernández</p>
    </div>
    <div class="flex justify-between gap-8 sm:gap-14">
        <button on:click={() => window.scrollTo({top:100, left:0, behavior:"smooth"})}>Contacto</button>
        <button>Proyectos</button>
        <button>Habilidades</button>
    </div>
</div>
<slot />