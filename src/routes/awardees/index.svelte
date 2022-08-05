<script lang="ts">
    import { InteractiveTabHead, TabContent } from 'flowbite-svelte';
    /* import TabHead from '$lib/tabs/TabHead.svelte'; */

    const cygnus = { name: 'Cygnus', id: 1 };
    const lyra = { name: 'Lyra', id: 2 };
    const draco = { name: 'Draco', id: 3 };
    const phoenix = { name: 'Phoenix', id: 4 };
    const pegasus = { name: 'Pegasus', id: 5 };
    const aquila = { name: 'Aquila', id: 6 };

    const tabHead = [cygnus, lyra, draco, phoenix, pegasus, aquila];
</script>

<svelte:head>
    <title>Awardees | SUPERNOVA</title>
</svelte:head>

<section>
    <h1>Meet The Awardees</h1>
    <InteractiveTabHead tabs={tabHead}>
        <TabContent tab={cygnus}>
            <p>Cygnus</p>
        </TabContent>
        <TabContent tab={lyra}>
            <p>Lyra</p>
        </TabContent>
        <TabContent tab={draco}>
            <p>Draco</p>
        </TabContent>
        <TabContent tab={phoenix}>
            <p>Phoenix</p>
        </TabContent>
        <TabContent tab={pegasus}>
            <p>Pegasus</p>
        </TabContent>
        <TabContent tab={aquila}>
            <p>Aquila</p>
        </TabContent>
    </InteractiveTabHead>
</section>
