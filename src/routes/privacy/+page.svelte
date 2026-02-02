<script>
  import { onMount } from 'svelte';
  import { marked } from 'marked';
  import "../../app.css";
  
  let markdownContent = "";
  
  onMount(async () => {
    try {
      const response = await fetch('/privacy/privacy.md');
      if (response.ok) {
        markdownContent = await response.text();
      } else {
        markdownContent = 'Archivo no encontrado';
      }
    } catch (error) {
      markdownContent = 'Error al cargar el archivo';
    }
    document.getElementById('markdown-container').innerHTML = marked.parse(markdownContent);
  });
</script>

<div class="min-h-screen bg-gray-50">
  <div class="flex items-center justify-center h-12 px-12 py-4 font-bold transition-all duration-200 shadow-sm sm:justify-between bg-white">
    <div class="hidden sm:flex">
      <p>Fernando Hernández</p>
    </div>
    <div class="flex justify-between gap-8 sm:gap-14">
      <a href="/" class="transition-all hover:scale-105">Inicio</a>
      <a href="/blog" class="transition-all hover:scale-105">Blog</a>
    </div>
  </div>

  {#if !markdownContent}
    <div class="flex justify-center mt-12">
      <p>Cargando...</p>
    </div>
  {/if}
  
  <div class="flex justify-center mt-12 my-20">
    <div class="md:w-[50%] w-[90%] flex mx-12 text-justify justify-center">
      <div id="markdown-container"></div>
    </div>
  </div>
</div>

<style>
  #markdown-container {
    @apply text-base;
  }

  :global(#markdown-container h1) {
    @apply text-4xl font-bold my-6 text-center;
  }

  :global(#markdown-container h2) {
    @apply text-2xl font-bold my-5;
  }

  :global(#markdown-container p) {
    @apply text-lg text-gray-800 my-4;
  }

  :global(#markdown-container ul) {
    @apply list-none pl-0;
  }

  :global(#markdown-container li) {
    @apply text-gray-800 mb-2;
  }

  :global(#markdown-container strong) {
    @apply font-bold text-black;
  }

  :global(#markdown-container hr) {
    @apply my-8 border-gray-300;
  }

  :global(#markdown-container em) {
    @apply text-gray-600 text-sm;
  }
</style>
