<script>
    import "../../app.css";
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
</script>

<div class="flex items-center justify-center h-12 px-12 py-4 font-bold transition-all duration-200 shadow-sm sm:justify-between text-xlf">
    <div class="hidden sm:flex">
        <p>Fernando Hernández</p>
    </div>
    <div class="flex justify-between gap-8 sm:gap-14">
        <button class="transition-all hover:scale-105"
        on:click={() => goto("/blog")}
        >Inicio</button>
        <button class="transition-all hover:scale-105"
        on:click={() => goto("/blog/articulos")}
        >Articulos</button>
        <button class="transition-all hover:scale-105" ºº
        on:click={() => document.querySelector(".contacto").scrollIntoView({behavior:"smooth"})}
        >Contacto</button>
    </div>
</div>
<slot />