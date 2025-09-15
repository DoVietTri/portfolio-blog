<template>
  <section
    id="hero"
    class="flex flex-col items-center justify-center py-20 sm:pt-40"
  >
    <Motion
      :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)',
      }"
      :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
      }"
      :transition="{
        duration: 0.6,
        delay: 0.1,
      }"
    >
      <UAvatar src="https://github.com/benjamincanac.png" class="w-24 h-24" />
    </Motion>
    <Motion
      as="h1"
      :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)',
      }"
      :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
      }"
      :transition="{
        duration: 0.6,
        delay: 0.1,
      }"
      class="text-3xl mt-3 max-w-xl text-center text-white font-bold"
    >
      {{ props.page.hero.title }}
    </Motion>
    <Motion
      as="h2"
      :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)',
      }"
      :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
      }"
      :transition="{
        duration: 0.6,
        delay: 0.3,
      }"
      class="mt-8 max-w-xl text-center text-muted"
    >
      {{ props.page.hero.description }}
    </Motion>
    <div class="mt-4 flex gap-4">
      <Motion
        v-for="(social, index) in props.page.hero.socials"
        :key="social.label"
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)',
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3 + index * 0.1,
        }"
      >
        <ULink :to="social.link" target="_blank">
          <UIcon :name="social.icon" class="size-8" />
        </ULink>
      </Motion>
    </div>
    <Vue3Marquee class="mt-16" :pause-on-hover="true">
      <Motion
        v-for="(image, index) in props.page.hero.images"
        :key="image.src"
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)',
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
        }"
        :transition="{
          duration: 0.6,
          delay: 0.5 + index * 0.1,
        }"
      >
        <NuxtImg
          :src="image.src"
          :alt="image.label"
          class="size-20 sm:size-40 md:size-48"
        />
      </Motion>
    </Vue3Marquee>
  </section>
</template>

<script setup lang="ts">
import type { IndexCollectionItem } from "@nuxt/content";
import { Vue3Marquee } from "vue3-marquee";

const props = defineProps<{
  page: IndexCollectionItem;
}>();
</script>

<style scoped lang="scss">
:deep(.marquee) {
  gap: 40px;
  overflow: hidden;
}

:deep(.marquee > div:last-child) {
  margin-right: 40px;
}
</style>
