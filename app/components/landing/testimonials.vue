<template>
  <section class="pb-20">
    <UCarousel
      loop
      dots
      :items="testimonials"
      :autoplay="{ delay: 4000 }"
      class="w-full mx-auto bg-border"
    >
      <template #default="{ item }">
        <div class="flex flex-col p-5 sm:px-10 md:px-30 md:py-15 lg:px-60">
          <p
            class="text-center text-xl text-muted/80 before:content-['“'] before:text-3xl before:text-gray-400 after:content-['”'] after:text-3xl after:text-gray-400"
          >
            {{ item.comment }}
          </p>
          <div class="mt-6 flex gap-3 mx-auto">
            <UAvatar :src="item.avatar" class="w-12 h-12" />
            <div>
              <div class="text-xl">{{ item.name }}</div>
              <div class="text-sm text-muted">{{ item.role }}</div>
            </div>
          </div>
        </div>
      </template>
    </UCarousel>
  </section>
</template>

<script setup>
const testimonials = [
  {
    avatar: "https://github.com/benjamincanac.png",
    name: "Benjamin",
    role: "CEO Director",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ullam illo, esse odit reprehenderit quaerat! Nihil quibusdam necessitatibus eligendi enim. Molestiae facilis dicta labore mollitia facere asperiores nisi aspernatur illo.",
  },
  {
    avatar: "https://github.com/benjamincanac.png",
    name: "Taylor Do",
    role: "Frontend Developer",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ullam illo, esse odit reprehenderit quaerat! Nihil quibusdam necessitatibus eligendi enim. Molestiae facilis dicta labore mollitia facere asperiores nisi aspernatur illo.",
  },
];
</script>

<style lang="scss" scoped></style>
