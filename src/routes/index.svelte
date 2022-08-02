<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home | SUPERNOVA</title>
	<meta name="description" content="Supernova web app" />
</svelte:head>

<section>
    <span class="welcome">
        <img src="Supernova.svg" alt="Supernova Logo" />
    </span>
	<h1 class="font-nasalization text-7xl">SUPERNOVA</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
