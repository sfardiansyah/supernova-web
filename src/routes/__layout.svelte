<script lang="ts">
    import { Footer, FooterLinkGroup, FooterLink, FooterCopyright,
    FooterIcon } from 'flowbite-svelte';
    import { FacebookBrand, InstagramBrand, TwitterBrand, GithubBrand } from 'svelte-awesome-icons';
    import Header from '$lib/header/Header.svelte';
    import '../app.css';
</script>

<Header />

<main>
	  <slot />
</main>

<Footer footerType="custom" customClass="p-4 sm:p-6 bg-neutral-700">
    <div class="container max-w-8xl mx-auto md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a href="/">
                <h1 class="text-white h-16 lg:text-6xl text-left">Supernova</h1>
            </a>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                    <img src="/supernova-white.png" class="px-5 lg:px-1 xl:h-28"alt="Supernova Logo Horizontal White-01.png"/>
                </div>
                <div>
                <img src="/Logo.png" class="px-5 lg:px-1 lg:mt-6 xl:h-16"alt="Supernova Logo"/>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4" href="/">Flowbite</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Tailwind CSS</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4" href="/">GitHub</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Discord</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
                <FooterLinkGroup>
                    <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
            <FooterCopyright spanClass="" href="/" by="Supernova" />
            </div>
        </div>
    </div>
</Footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1440px;
		box-sizing: border-box;
        min-height: 100vh;
        margin : 0 auto;
	}
</style>
