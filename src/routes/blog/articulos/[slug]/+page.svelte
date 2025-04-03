<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { marked } from 'marked';
  let markdownContent = ""
  onMount(async () => {
    try {
          // Usamos fetch para cargar el archivo Markdown
          const response = await fetch(`/arts/${$page.params.slug}/${$page.params.slug}.md`);
        if (response.ok) {
            markdownContent = await response.text();
        } else {
        markdownContent = 'Archivo no encontrado';
    }
    } catch (error) {
      markdownContent = 'Error al cargar el archivo';
    }
    document.getElementById('markdown-container').innerHTML = marked.parse(markdownContent)
});
</script>

{#if markdownContent}
<p></p>
{:else}
<p>Cargando...</p>
{/if}
<div class="flex justify-center mt-12">
  <div class="w-[80%] flex mx-12 text-justify justify-center">
      <div id="markdown-container" ></div>
  </div>
</div>

<style>
  /* Style the ID instead of a class */
  #markdown-container {
    @apply text-base;
  }

  /* Use :global with the ID selector */
  :global(#markdown-container h1) {
    @apply text-4xl font-bold my-6;
  }

  :global(#markdown-container h2) {
    @apply text-2xl font-bold my-5;
  }

  :global(#markdown-container p) {
    @apply text-lg text-gray-800 my-4;
  }

  :global(#markdown-container ul) {
    @apply list-disc pl-6;
  }

  :global(#markdown-container li) {
    @apply text-gray-800 mb-2 list-decimal;
  }

  :global(#markdown-container strong) {
    @apply font-bold text-black;
  }
</style>