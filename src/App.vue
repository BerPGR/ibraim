<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'

const route = useRoute()
const showHeader = computed(() => route.name !== 'auth')
</script>

<template>
  <div class="min-h-screen bg-base-200 text-base-content">
    <Header v-if="showHeader" />
    <RouterView />
  </div>
</template>
