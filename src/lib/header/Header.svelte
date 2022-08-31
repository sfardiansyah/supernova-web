<script lang="ts">
	import { page } from '$app/stores';
    import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Dropdown, DropdownItem } from 'flowbite-svelte';
</script>

<header class="sticky top-0 z-40">
    <Navbar navClass="border-gray-200 px-2 sm:px-4 py-1.5 w-full bg-blue" let:hidden let:toggle>
        <NavBrand href="/">
            <img
			    src="/supernova-white.png"
			    class="px-5 lg:px-1  mr-3 h-20"
			    alt="Supernova Logo"
		    />
        </NavBrand>
	    <NavHamburger on:click={toggle} />
	    <NavUl {hidden}>
		    <NavLi href="/" activeClass="text-lg font-bold" nonActiveClass="text-white text-lg" active={$page.url.pathname === '/'} >Home</NavLi>
			<NavLi href="/about" activeClass="text-lg font-bold" nonActiveClass="text-white text-lg" active={$page.url.pathname === '/about'} >Documentaries</NavLi>
			<NavLi svelte:prefetch href="/awardees" activeClass="text-lg font-bold" nonActiveClass="text-white text-lg" active={$page.url.pathname === '/awardees'}>Meet The Awardees</NavLi>
			<Dropdown label="About" inline={true} activeClass="text-lg font-bold" labelClass="flex items-center justify-between text-lg font-medium text-white">
			    <DropdownItem><a class="text-lg text-black" href="/about/lpdp">LPDP</a></DropdownItem>
			    <DropdownItem><a class="text-lg text-black" href="/about/supernova">Supernova</a></DropdownItem>
		    </Dropdown>
	    </NavUl>
    </Navbar>
</header>

<style>
header{
	flex: 1;
	display: flex;
	flex-direction: column;
	width: 100%;
	margin:0 auto;
}
</style>	