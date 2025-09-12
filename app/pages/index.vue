<template>
  <UContainer class="mx-auto">
    <LandingHero />
    <LandingExperience />
    <LandingTestimonials />
    <LandingLatestArticles />
  </UContainer>
</template>

<script setup lang="ts">
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
  twitterCard: "summary_large_image",
});
</script>

<style scoped></style>
