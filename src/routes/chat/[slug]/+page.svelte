<script>
    import { browser } from "$app/environment";   
    export let data;
    let messages = [];
    let currentmessage = "";
    let ws = null; // Define ws outside of the reactive statement

    $: if(browser && !ws) { // Ensure ws is initialized only once
        ws = new WebSocket("ws://80.240.127.7:80/ws");
        console.log(data.name)
        ws.addEventListener("open", () =>{
            console.log("WebSocket connected");
            ws.send(data.name);
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
<div class="flex flex-col justify-between h-[80vh]">
    <div class="overflow-y-auto ">
        {#each messages as message }
            <p>{message}</p>    
        {/each}
    </div>
    <div>
        <input bind:value={currentmessage} type="text">
        <!-- svelte-ignore missing-declaration -->
        <button on:click={send(currentmessage)}>Hola</button>
    </div>
</div>

