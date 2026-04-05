<script>
    import "../app.css";
    import { browser } from "$app/environment";
    import GradientText from "$lib/GradientText.svelte"
</script>

<div class="flex items-center justify-center h-12 px-12 py-4 font-bold transition-all duration-200 sm:justify-between text-md bg-slate-700 border-b border-slate-400/50 shadow-xl shadow-black/40 text-white">
    <div class="hidden sm:flex">
        <p><GradientText>Fernando Hernández</GradientText></p>
    </div>
    <div class="flex justify-between gap-8 sm:gap-14">
        <button class="transition-all hover:scale-105"
        on:click={() => document.querySelector(".experiencia").scrollIntoView({behavior:"smooth"})}
        ><GradientText>Experiencia</GradientText></button>
        <button class="transition-all hover:scale-105"
        on:click={() => document.querySelector(".habilidades").scrollIntoView({behavior:"smooth"})}
        ><GradientText>Habilidades</GradientText></button>
        <button class="transition-all hover:scale-105"
        on:click={() => document.querySelector(".contacto").scrollIntoView({behavior:"smooth"})}
        ><GradientText>Contacto</GradientText></button>
    </div>
</div>
<slot />
<section class="contacto flex flex-col font-semibold text-lg items-center justify-center w-full bg-slate-800 border-t border-slate-400/50 shadow-xl shadow-black/40 h-[100px] p-4">
    <p class="text-slate-300"><GradientText>fernandohmdev@gmail.com</GradientText></p>
    <p class="text-slate-300"><GradientText>688 68 50 40</GradientText></p>
</section>