<template>

    <Navbar />
    <ActionCards/>
    <WeWillCallYou/>
    <PreferredPorducts/>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import WeWillCallYou from '../components/WeWillCallYou.vue'
import ActionCards from '../components/ActionCards.vue'
import PreferredPorducts from '../components/PreferredPorducts.vue'

export default {
  components: { WeWillCallYou, PreferredPorducts },
    name: 'MainLayout'
}

</script>