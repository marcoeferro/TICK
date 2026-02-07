<script lang="ts">
    /* Svelte 5 - Runes Mode */
    let { data, form } = $props();
</script>

<div class="container mx-auto p-6">
    <h1 class="text-3xl font-black tracking-tighter uppercase">Ruta: dashboard</h1>
    <pre class="bg-gray-100 p-4 rounded mt-4"><code>{JSON.stringify(data, null, 2)}</code></pre>
</div>