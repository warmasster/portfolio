<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { marked } from 'marked';
  let markdownContent = ""
  onMount(async () => {
    try {
          // Usamos fetch para cargar el archivo Markdown
          const response = await fetch(`/arts/${$page.params.slug}.md`);
        if (response.ok) {
            markdownContent = await response.text();
        } else {
        markdownContent = 'Archivo no encontrado';
    }
    } catch (error) {
      markdownContent = 'Error al cargar el archivo';
    }
    document.getElementById('content').innerHTML = marked.parse(markdownContent)
});
</script>

{#if markdownContent}
<p></p>
{:else}
<p>Cargando...</p>
{/if}
<div class="w-[80%] flex mx-12 text-justify justify-center">
    <div id="content" ></div>
</div>