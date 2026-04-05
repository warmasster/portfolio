<script>
    export let size = 90;
    export let from = '#f8fafc';
    export let to = '#bfdbfe';
</script>

<div class="gi-wrap inline-flex" style="width:{size}px; height:{size}px;">
    <svg style="position:absolute; width:0; height:0; overflow:hidden;" aria-hidden="true">
        <defs>
            <linearGradient id="gradient-icon" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color={from} />
                <stop offset="100%" stop-color={to} />
            </linearGradient>
        </defs>
    </svg>
    <slot />
</div>

<style>
    .gi-wrap :global(svg path),
    .gi-wrap :global(svg circle),
    .gi-wrap :global(svg rect),
    .gi-wrap :global(svg polygon) {
        fill: url(#gradient-icon) !important;
    }
</style>
