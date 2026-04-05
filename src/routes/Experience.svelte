<script>
    import {experiences, proyectos} from "./experience.js"
    import Card from "$lib/Card.svelte"
    import GradientText from "$lib/GradientText.svelte"
</script>

<section class="flex flex-col items-center pb-4 md:px-24 px-4 experiencia">
    <h1 class="pb-4 text-3xl font-bold">
        <GradientText>Experiencia</GradientText>
    </h1>
    <div class="grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 text-justify">
        {#each experiences as experience, i}
        <Card title={experience.name} subtitle={experience.from + " hasta " + experience.to} descriptionTitle="Trabajando como {experience.Role}" description={experience.description} i={i} experiences={experiences} />
        {/each}
    </div>
</section>
<section class="flex flex-col items-center md:px-24 px-4 mt-10 experiencia">
    <h1 class="pb-4 text-3xl font-bold">
        <GradientText>Proyectos</GradientText>
    </h1>
    <div class="grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2 text-justify">
        {#each proyectos as proyecto, i}
        <Card title={proyecto.name} description={proyecto.description} i={i} experiences={proyectos} />
        {/each}
    </div>
</section>