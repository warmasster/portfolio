<script>
import Hero from "./Hero.svelte"
import Experience from "./Experience.svelte";
import Skills from "./Skills.svelte";
</script>

<div class="w-full flex items-center justify-center">
    <div class="flex flex-col items-center justify-center xl:w-[60%] w-[100%] ">
        <Hero/>
        <div class="py-16"></div>
        <Experience />
        <div class="py-16"></div>
        <Skills />
        <div class="py-16"></div>
    </div>
</div>
