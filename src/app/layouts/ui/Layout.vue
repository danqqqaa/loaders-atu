<script setup lang="ts">
import { routes } from '@/app/providers/router'
import type { RouteRecordRaw } from 'vue-router';
console.log(routes)

const navigateTo = (route: RouteRecordRaw) => {
  console.log(route)
}
</script>
<template>
  <div class="flex h-screen">
    <div class="w-auto h-screen sticky top-32 bg-red-800 text-white flex flex-col">
      <div class="p-4 text-lg font-bold">Menu</div>
      <nav>
        <ul>
          <li
            v-for="(route, index) in routes"
            :key="index"
 
            :to="route.path"
            class="cursor-pointer p-2 hover:bg-gray-700"
          >
            {{ route.props.label }}
            <i class="fi fi-rr-square-right"></i>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
