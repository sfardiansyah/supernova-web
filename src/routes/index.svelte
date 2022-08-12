<script context="module" lang="ts">
	  export const prerender = true;
</script>

<script lang="ts">
    import { Button } from 'flowbite-svelte';
</script>

<svelte:head>
	  <title>Home | SUPERNOVA</title>
	  <meta name="description" content="Supernova web app" />
</svelte:head>


<section>
    <div class="grid max-w-screen-xl mx-auto lg:grid-cols-12">
        <div class="lg:col-span-7 place-self-center mr-auto">
            <h1 class="text-white lg:text-8xl">Supernova</h1>
            <p class="text-white lg:text-3xl mt-3">Persiapan Keberangkatan Lembaga Pengelola Dana Pendidikan Ke-191</p>
            <div class="mt-9">
                <Button pill={true} size="xl" color="alternative">Member Profile</Button>
                <Button pill={true} size="xl" btnClass="outline-2 outline-white">Documentaries</Button>
            </div>
        </div>
        <!-- <div class="lg:col-span-5 lg:flex">
            <p>Instagram Post</p>
            <div class="grid-cols-3 gap-10">
                <figure>
                    <img alt="BJ Habibie" src="/habibie.jpeg" class="object-cover w-full h-full" />
                </figure>
            </div>
        </div> -->
    </div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
