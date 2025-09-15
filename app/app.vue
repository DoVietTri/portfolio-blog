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
  title: "Taylor Do - Frontend Developer",
  description: `
    Welcome to my portfolio! I'm Taylor Do, a frontend developer based in Vietnam. I specialize in creating user-centered digital experiences that are both beautiful and functional
  `,
  ogTitle: "Taylor Do - Frontend Developer",
  ogDescription: `
    Welcome to my portfolio! I'm Taylor Do, a frontend developer based in Vietnam. I specialize in creating user-centered digital experiences that are both beautiful and functional
  `,
  ogImage: "/images/family.png",
  twitterImage: "/images/family.png",
  twitterCard: "summary_large_image",
  robots: "index, follow",
});
</script>
