<!--
<script>
    import { browser } from "$app/environment";   
    let messages = [];
    let currentmessage = "";
    let ws = null; // Define ws outside of the reactive statement

    $: if(browser && !ws) { // Ensure ws is initialized only once
        ws = new WebSocket("ws://80.240.127.7:80/ws");

        ws.addEventListener("open", () =>{
            console.log("WebSocket connected");
            ws.send("Hello from client!");
        });

        ws.addEventListener("message", (event) => {
            messages = [...messages, event.data]; // Create a new array to trigger reactivity
            console.log(messages);
        });

        ws.addEventListener("close", () =>{
            console.log("WebSocket disconnected");
        });
    }

    const send = () => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(currentmessage);
            currentmessage = ""; // Clear the input after sending the message
        } else {
            console.error("WebSocket is not open");
        }
    };
</script>
<p class="text-2xl">POR FAVOR INTRODUCE UNA / DESPUES DE CHAT Y PON TU NOMBRE</p>
<div class="flex flex-col justify-between h-[80vh]">
    <div class="overflow-y-auto ">
        {#each messages as message }
            <p>{message}</p>    
        {/each}
    </div>
    <div>
        <input bind:value={currentmessage} type="text">
        <button on:click={send(currentmessage)}>Hola</button>
    </div>
</div>
-->
<script>
    import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte"
</script>

<div class="flex flex-col items-center justify-center h-[90vh]">
    <p class="text-4xl">El chat se encuentra en desarrollo</p>
    <span class="flex items-center">
        <ArrowLeft/>
        <a href="/" class="flex items-baseline justify-end">Volver al portfolio </a>
    </span>
</div>