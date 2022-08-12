<script lang="ts">
	import { page } from '$app/stores';
    import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Dropdown, DropdownItem } from 'flowbite-svelte';
</script>

<header class="sticky top-0 z-40">
    <Navbar navClass="border-gray-200 px-2 sm:px-4 py-1.5 w-full bg-blue" let:hidden let:toggle>
        <NavBrand>
            <img
			    src="/supernova-white.png"
			    class="px-5 lg:px-1  mr-3 h-20"
			    alt="Supernova Logo"
		    />
        </NavBrand>
	    <NavHamburger on:click={toggle} />
	    <NavUl {hidden}>
		    <NavLi svelte:prefetch href="/" nonActiveClass="block py-2 pr-4 pl-3 text-base text-white" active={$page.url.pathname === '/'}>Home</NavLi>
		    <NavLi svelte:prefetch href="/about" nonActiveClass="block py-2 pr-4 pl-3 text-base text-white" active={$page.url.pathname === '/about'}>About</NavLi>
            <Dropdown label="About" inline={true} labelClass="flex items-center justify-between text-base w-full py-2 pl-3 pr-4 font-medium text-white">
			    <DropdownItem><a class="text-base text-white" href="/about/lpdp">LPDP</a></DropdownItem>
			    <DropdownItem><a class="text-base text-white" href="/about/supernova">Supernova</a></DropdownItem>
		    </Dropdown>
		    <NavLi svelte:prefetch href="/awardees" nonActiveClass="block py-2 pr-4 pl-3 text-base text-white" active={$page.url.pathname === '/awardees'}>Meet The Awardees</NavLi>
	    </NavUl>
    </Navbar>
</header>

<style>
header{
	flex: 1;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width:1440px;
	margin:0 auto;
}
</style>