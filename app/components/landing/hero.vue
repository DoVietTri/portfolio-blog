<template>
  <section class="flex flex-col items-center justify-center py-20 sm:pt-40">
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
      Hey, I'm Taylor Do. I'm Frontend Developer
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt
      tempore minus ratione, adipisci optio quas animi beatae nisi voluptatibus
      sunt error fugiat, dolor odio quae, ducimus possimus vel? Beatae.
    </Motion>
    <div class="mt-4 flex gap-4">
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
          delay: 0.3,
        }"
      >
        <UIcon name="i-simple-icons-facebook" class="size-8" />
      </Motion>
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
          delay: 0.4,
        }"
      >
        <UIcon name="i-simple-icons-instagram" class="size-8" />
      </Motion>
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
          delay: 0.5,
        }"
      >
        <UIcon name="i-simple-icons-github" class="size-8" />
      </Motion>
    </div>
    <Vue3Marquee class="mt-16" :pause-on-hover="true">
      <Motion
        v-for="(image, index) in images"
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
import { Vue3Marquee } from "vue3-marquee";

const images = [
  {
    label: "HTML",
    src: "/images/html.png",
  },
  {
    label: "CSS",
    src: "/images/css.png",
  },
  {
    label: "Javascript",
    src: "/images/javascript.png",
  },
  {
    label: "Typescript",
    src: "/images/typescript.png",
  },
  {
    label: "ReactJS",
    src: "/images/reactjs.png",
  },
  {
    label: "VueJS",
    src: "/images/vuejs.png",
  },
];
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
