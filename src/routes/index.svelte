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
    <div class="container lg:grid grid-cols-12 gap-4 px-8 lg:pr-0">
        <div class="lg:col-span-7 place-self-center mr-auto">
            <h1 class="text-left text-white lg:text-7xl xl:text-8xl">Supernova</h1>
            <p class="text-white max-w-lg leading-10 lg:text-3xl mt-3">Persiapan Keberangkatan <br>Lembaga Pengelola Dana Pendidikan Ke-191</p>
            <div class="mt-9">
                <Button pill={true} size="xl" class="mr-3 inline" color="alternative">Member Profile</Button>
                <Button pill={true} size="xl" class="mr-3 inline" btnClass="outline-2 outline-white">Documentaries</Button>
            </div>
        </div>
        <div class="lg:col-span-5">
            <p class="text-white max-w-lg block lg:text-3xl md:text-2xl lg:mt-0 mt-10 mb-6">Instagram Post</p>
            <div class="container grid grid-cols-3 gap-2 mx-auto">
                <figure class="w-full rounded">
                    <img alt="BJ Habibie" src="/habibie.jpeg" class="object-cover w-full" />
                </figure>
                <figure class="w-full rounded">
                    <img alt="BJ Habibie" src="/habibie.jpeg" class="object-cover w-full" />
                </figure>
                <figure class="w-full rounded">
                    <img alt="BJ Habibie" src="/habibie.jpeg" class="object-cover w-full" />
                </figure>
                <figure class="w-full rounded">
                    <img alt="BJ Habibie" src="/habibie.jpeg" class="object-cover w-full" />
                </figure>
                <figure class="w-full rounded">
                    <img alt="BJ Habibie" src="/habibie.jpeg" class="object-cover w-full" />
                </figure>
                <figure class="w-full rounded">
                    <img alt="BJ Habibie" src="/habibie.jpeg" class="object-cover w-full" />
                </figure>
                <figure class="w-full rounded">
                    <img alt="BJ Habibie" src="/habibie.jpeg" class="object-cover w-full" />
                </figure>
                <figure class="w-full rounded">
                    <img alt="BJ Habibie" src="/habibie.jpeg" class="object-cover w-full" />
                </figure>
                <figure class="w-full rounded">
                    <img alt="BJ Habibie" src="/habibie.jpeg" class="object-cover w-full" />
                </figure>
            </div>
            <a class="text-white max-w-lg block lg:text-3xl md:text-2xl mt-10 mb-6 underline" href="">Go to Instagram</a>
        </div> 
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
