<script>
    let experiences = [
        {
            name: "Lapizarrablanca",
            img: "none",
            from: "Mayo de 2024",
            to: "Junio de 2024",
            WorkType:"Estudiante en practicas",
            Role:"Frontend Developer",
            description: "Practicas de Formacion Profesional como desarrollador frontend en el proyecto \"TheJobRanker\" para el filtrado de CVs mediante IA, es un servicio de la empresa Lapizarrablanca"
        },
        {
            name: "Earthpulse",
            img: "none",
            from: "Junio de 2024",
            to: "la Actualidad",
            WorkType:"Freelance",
            Role:"Full-Stack Developer",
            description: "Tras las practicas de Formacion Profesial como desarrollador frontend en el en Lapizarrablanca se me contrató como freelance en otro proyecto, eotdl, una herramienta para la ESA cuya funcion es la de un laboratorio de IA en el sector de \"Earth Observation\""
        },
    ]
    let proyectos = [
        {
            name: "IPyChat",
            description: "Chat por IP programado unicamente en python, permite mediante una intuitiva interfaz de usuario la conexion entre dos equipos para el envio de mensajes."
        },
        {
            name: "Colors to grayscale",
            description: "Un sencillo programa con interfaz en linea de comandos que te permite darle un efecto interesante a tus fotos."
        },
        {
            name: "Nouser",
            description: "Red social anonima y sin usuarios, te permite subir imagenes y/o texto para compartirlas con el mundo."
        },
        {
            name: "Divapp",
            description: "Aplicación para android utilizada para hacer una encuesta a una gran cantidad de clientes a la entrada de una fiesta."
        },
    ]
</script>

<section class="flex flex-col items-center pb-4 md:px-24 px-4 experiencia">
    <h1 class="pb-4 text-3xl font-bold">
        Experiencia
    </h1>
    <div class="grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2">
        {#each experiences as experience}
        <div class=" w-[95%] px-3 shadow-lg bg-gray-100 rounded-2xl">
            <h1 class="mt-4 ml-4 text-2xl font-semibold">{experience.name}</h1>
            <h1 class="ml-4 text-md text-slate-700">Desde <b>{experience.from}</b> hasta <b>{experience.to}</b></h1>
            <h1 class="mt-4 ml-4 text-lg font-semibold text-slate-700">Trabajando como {experience.Role}</h1>
            <p class="mb-4 ml-4 text-md text-slate-700">{experience.description}</p>
        </div>    
        {/each}
    </div>
</section>
<section class="flex flex-col items-center md:px-24 px-4 mt-10 experiencia">
    <h1 class="pb-4 text-3xl font-bold">
        Proyectos
    </h1>
    <div class="grid grid-cols-1 gap-6 justify-items-center sm:grid-cols-2">
        {#each proyectos as proyecto}
        <div class=" w-[95%] px-3 shadow-lg bg-gray-100 rounded-2xl">
            <h1 class="mt-4 ml-4 text-2xl font-semibold">{proyecto.name}</h1>
            <p class="mb-4 ml-4 text-md text-slate-700">{proyecto.description}</p>
        </div>    
        {/each}
    </div>
</section>