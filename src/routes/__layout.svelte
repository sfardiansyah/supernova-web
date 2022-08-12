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
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a href="/">
                <h1 class="text-white h-16">Supernova</h1>
            </a>
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
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
        <FooterCopyright href="/" by="Supernova" />
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={FacebookBrand} />
            <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={InstagramBrand} />
            <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={TwitterBrand} />
            <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={GithubBrand} />
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
