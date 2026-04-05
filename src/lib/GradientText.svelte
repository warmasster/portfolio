<script>
    export let tag = 'span';
    export let from = '#f8fafc';
    export let to = '#bfdbfe';
</script>

<svelte:element
    this={tag}
    style="background: linear-gradient(to top right, {from}, {to}); -webkit-background-clip: text; background-clip: text; color: transparent;"
>
    <slot />
</svelte:element>
