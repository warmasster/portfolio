<script>
  import { onMount } from 'svelte';
  import SvelteMarkdown from 'svelte-markdown'
  import { page } from '$app/stores';
  import { marked } from 'marked';
  let markdownContent = ""
  onMount(async () => {
      try {
          // Usamos fetch para cargar el archivo Markdown
          const response = await fetch(`/arts/${$page.params.slug}.md`);
          console.log(response)
          if (response.ok) {
        markdownContent = await response.text();
      } else {
        markdownContent = 'Archivo no encontrado';
    }
    } catch (error) {
      markdownContent = 'Error al cargar el archivo';
    }
    document.getElementById('content').innerHTML = marked.parse(markdownContent)
    console.log(markdownContent)
});
</script>

{#if markdownContent}
{:else}
<p>Cargando...</p>
{/if}
<div id="content"></div>