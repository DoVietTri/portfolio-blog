<template>
  <UApp>
    <NuxtLayout>
      <main class="relative">
        <NuxtPage />
      </main>
    </NuxtLayout>
  </UApp>
</template>
<script setup>
useSeoMeta({
  twitterCard: "summary_large_image",
  robots: "index, follow",
});
</script>
