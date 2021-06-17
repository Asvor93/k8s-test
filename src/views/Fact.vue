<script lang="ts">

import { defineComponent, computed, ComputedRef } from 'vue'
import { useRoute} from 'vue-router'
import FactCard from '@/components/FactCard.vue'

export default defineComponent({
    components: { FactCard },
    setup() {
        const router = useRoute()
    }
})
</script>

<template>
    <FactCard :fact-id="parseInt(factId)" />
</template>