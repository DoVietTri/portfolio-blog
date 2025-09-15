<template>
  <UContainer class="mx-auto">
    <LandingHero :page="page!" />
    <LandingExperience :page="page!" />
    <LandingProjects />
    <LandingTestimonials />
  </UContainer>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData("index", () => {
  return queryCollection("index").first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<style scoped></style>
