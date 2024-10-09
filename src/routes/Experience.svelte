<script>
    let experiences = [
        {
            name: "Lapizarrablanca",
            img: "none",
            from: "Mayo de 2024",
            to: "Junio de 2024",
            WorkType:"Estudiante en practicas",
            Role:"Frontend Developer",
            description: "Practicas de Formacion Profesional como desarrollador frontend en el proyecto \"TheJobRanker\" de la empresa Lapizarrablanca "
        },
        {
            name: "Earthpulse",
            img: "none",
            from: "Junio de 2024",
            to: "la Actualidad",
            WorkType:"Freelance",
            Role:"Frontend Developer",
            description: "Tras las practicas de Formacion Profesial como desarrollador frontend en el en Lapizarrablanca se me contrató como freelance en otro proyecto, eotdl, una herramienta para la ESA cuya funcion es la de un laboratorio de IA en el sector de \"Earth Observation\""
        },
    ]
</script>

<section class="flex flex-col items-center p-4">
    <h1 class="pb-4 text-3xl font-bold">
        Experiencia
    </h1>
    <div class="grid grid-cols-2 gap-6">
        {#each experiences as experience}
        <div class="w-[40vw] h-[40vh] shadow-lg bg-slate-100 rounded-2xl">
            <h1 class="mt-4 ml-4 text-2xl font-semibold">{experience.name}</h1>
            <h1 class="ml-4 text-md text-slate-700">Desde <b>{experience.from}</b> hasta <b>{experience.to}</b></h1>
            <h1 class="mt-4 ml-4 text-lg font-semibold text-slate-700">Trabajando como {experience.Role}</h1>
            <p class="ml-4 text-md text-slate-700">{experience.description}</p>
        </div>    
        {/each}
    </div>
</section>