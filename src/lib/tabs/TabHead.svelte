<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { tabStore } from './tabStores';

	export let tabs: {
		id: number;
		name: string;
		content: string | typeof SvelteComponent;
	}[];
	export let tabId: string = 'myTab';
	export let activeTabValue: number = 1;

	const handleClick = (tabValue: number) => () => {
		tabStore.update((n) => (n = tabValue));
		activeTabValue = tabValue;
    console.log(tabStore, activeTabValue)
	};
</script>

<div class="mb-4 border-b border-gray-200">
	<ul
		class="flex flex-wrap -mb-px text-sm font-medium text-center"
		id={tabId}
		data-tabs-toggle="#myTabContent"
		role="tablist"
	>
		{#each tabs as { content, name, id }}
			<li class="mr-2" role="presentation">
				<button
					on:click={handleClick(id)}
					class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
					id="{name}-tab"
					data-tabs-target="#{name}"
					type="button"
					role="tab"
					class:active={activeTabValue === id}
					aria-controls={name}
					aria-selected="false"
					on:blur
					on:click
					on:focus
					on:keydown
					on:keypress
					on:keyup
					on:mouseenter
					on:mouseleave
					on:mouseover
				>
					{@html content}
				</button>
			</li>
		{/each}
	</ul>
</div>

<slot />
