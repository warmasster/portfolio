<script>
        import LanguageHtml5 from "svelte-material-icons/LanguageHtml5.svelte"
        import LanguageJavascript from "svelte-material-icons/LanguageJavascript.svelte"
        import LanguageCss3 from "svelte-material-icons/LanguageCss3.svelte"
</script>

<section class="flex flex-col items-center p-4">
    <h1 class="pb-4 text-3xl font-bold">
        Habilidades
    </h1>
    <div class="grid grid-cols-3 gap-6">
        <div class="flex flex-col items-center">
            <LanguageHtml5 size=100 />
            <p class="font-extrabold">HTML5</p>
        </div>
        <div class="flex flex-col items-center">
            <LanguageJavascript size=100 />
            <p class="font-extrabold">JavaScript</p>
        </div>
        <div class="flex flex-col items-center">
            <LanguageCss3 size=100 />
            <p class="font-extrabold">CSS</p>
        </div>
    </div>
</section>