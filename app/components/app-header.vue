<template>
  <header
    class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10"
  >
    <UNavigationMenu
      :items="items"
      variant="link"
      class="bg-muted/80 border border-muted/50 rounded-full px-2 sm:px-4 shadow-lg shadow-neutral-950/5 backdrop-blur-sm"
    >
    </UNavigationMenu>
  </header>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Projects",
    to: "projects",
  },
  {
    label: "Blog",
    to: "blog",
  },
  {
    label: "Contact",
    to: "contact",
  },
] satisfies NavigationMenuItem[];
</script>

<style scoped></style>
