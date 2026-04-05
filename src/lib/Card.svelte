<script>
    export let title;
    export let subtitle;
    export let descriptionTitle;
    export let description;
    export let image;
    export let i;
    export let experiences;
    import GradientText from "$lib/GradientText.svelte"
</script>
<!--
        <div class=" w-[100%] px-3 shadow-lg bg-gray-100 rounded-2xl {i == experiences.length - 1 && experiences.length % 2 != 0 && 'sm:col-span-2'}">
            <h1 class="mt-4 mx-2 text-2xl font-semibold">{experience.name}</h1>
            <h1 class="mx-2 text-md text-slate-700">Desde <b>{experience.from}</b> hasta <b>{experience.to}</b></h1>
            <h1 class="mt-4 mx-2 text-lg text-left font-semibold text-slate-700">Trabajando como {experience.Role}</h1>
            <p class="mb-4 mx-2 text-md text-slate-700">{experience.description}</p>
        </div>   
-->
<div class=" w-[100%] px-3 shadow-xl shadow-black/40 border-2 border-slate-400/50 bg-gradient-to-tr from-slate-700 to-slate-600 rounded-2xl {i == experiences.length - 1 && experiences.length % 2 != 0 && 'sm:col-span-2'}">
    {#if title}
        <h1 class="mt-4 mx-2 text-2xl font-semibold text-white"><GradientText>{title}</GradientText></h1>
    {/if}
    {#if subtitle}
        <h2 class="mx-2 text-md text-slate-200"><GradientText>{subtitle}</GradientText></h2>
    {/if}
    {#if descriptionTitle}
        <h3 class="mt-4 mx-2 text-lg text-left font-semibold text-slate-200"><GradientText>{descriptionTitle}</GradientText></h3>
    {/if}
    {#if description}
        <p class="mb-4 mx-2 text-md text-slate-200">{description}</p>
    {/if}
    {#if image}
        <img src={image} alt={title} class="mx-2 mt-4 rounded-2xl">
    {/if}
</div>