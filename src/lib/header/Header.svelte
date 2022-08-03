<script lang="ts">
	import { page } from '$app/stores';
    import { Navbar, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
</script>

<header>
    <Navbar class="w-full" let:hidden let:toggle>
	    <a class="flex items-end" href="/">
		    <img
			    src="/Supernova.svg"
			    class="h-6 sm:h-9"
			    alt="Supernova Logo"
		    />
		    <span class="font-nasalization whitespace-nowrap text-xl font-semibold dark:text-white">
			    UPERNOVA
		    </span>
	    </a>
	    <NavHamburger on:click={toggle} />
	    <NavUl {hidden}>
		    <NavLi svelte:prefetch href="/" active={$page.url.pathname === '/'}>Home</NavLi>
		    <NavLi svelte:prefetch href="/about" active={$page.url.pathname === '/about'}>About</NavLi>
		    <NavLi svelte:prefetch href="/todos" active={$page.url.pathname === '/todos'}>Todos</NavLi>
	    </NavUl>
    </Navbar>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
