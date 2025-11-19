<script>
    import {experiences, proyectos} from "./experience.js"
</script>

<section class="flex flex-col items-center pb-4 md:px-24 px-4 experiencia">
    <h1 class="pb-4 text-3xl font-bold">
        Experiencia
    </h1>
    <div class="grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 text-justify">
        {#each experiences as experience, i}
        <div class=" w-[100%] px-3 shadow-lg bg-gray-100 rounded-2xl {i == experiences.length - 1 && experiences.length % 2 != 0 && 'sm:col-span-2'}">
            <h1 class="mt-4 mx-2 text-2xl font-semibold">{experience.name}</h1>
            <h1 class="mx-2 text-md text-slate-700">Desde <b>{experience.from}</b> hasta <b>{experience.to}</b></h1>
            <h1 class="mt-4 mx-2 text-lg text-left font-semibold text-slate-700">Trabajando como {experience.Role}</h1>
            <p class="mb-4 mx-2 text-md text-slate-700">{experience.description}</p>
        </div>    
        {/each}
    </div>
</section>
<section class="flex flex-col items-center md:px-24 px-4 mt-10 experiencia">
    <h1 class="pb-4 text-3xl font-bold">
        Proyectos
    </h1>
    <div class="grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 text-justify">
        {#each proyectos as proyecto, i}
        <div class=" w-[95%] px-3 shadow-lg bg-gray-100 rounded-2xl {i == proyectos.length - 1 && proyectos.length % 2 != 0 && 'col-span-2'}">
            <h1 class="mt-4 mx-2 text-2xl font-semibold">{proyecto.name}</h1>
            <p class="mb-4 mx-2 text-md text-slate-700">{proyecto.description}</p>
        </div>    
        {/each}
    </div>
</section>