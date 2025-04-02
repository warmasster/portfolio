<script>
    import showdown from 'showdown';
    import { page } from '$app/stores';
    let md = import("../hola.md")

    $: console.log(md) 
	let converter = new showdown.Converter();

	let valueAsHtml;

	// $: valueAsHtml = converter.makeHtml("md");
    $: console.log($page.params.slug)
</script>
{$page.params.slug}
{@html valueAsHtml}	