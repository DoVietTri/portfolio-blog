<template>
  <UContainer>
    <section class="py-20 flex flex-col gap-16 md:gap-24">
      <Motion
        v-for="(project, index) in projects"
        :key="project.id"
        as="div"
        :class="`grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-28 ${
          index % 2 === 1 ? '[direction:rtl]' : ''
        }`"
        :initial="{
          opacity: 0,
          transform: 'translateY(20px)',
        }"
        :while-in-view="{
          opacity: 1,
          transform: 'translateY(0px)',
        }"
        :transition="{
          delay: 0.5 + index * 0.1,
        }"
        :in-view-options="{ once: true }"
      >
        <div :class="`col-span-1 ${index % 2 === 1 ? 'text-left' : ''}`">
          <div class="text-muted text-sm">2021 - 2022</div>
          <h2 class="text-white text-xl mt-1">Bloom Finance App Redesign</h2>
          <p class="mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, ut.
            Ipsam necessitatibus repellat quo. Aperiam accusamus at repellendus
            id, nemo nesciunt vero! Veniam, enim et odit doloribus saepe numquam
            nam.
          </p>
          <NuxtLink
            to=""
            :class="`text-primary group flex flex-row ${
              index % 2 === 1 ? 'flex-row-reverse' : ''
            } items-center cursor-pointer mt-10`"
          >
            View detail
            <UIcon
              name="i-lucide-arrow-right"
              class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-2 group-hover:opacity-100"
            />
          </NuxtLink>
        </div>
        <NuxtImg
          :src="project.image"
          class="rounded-2xl aspect-video col-span-1"
          :alt="project.title"
        />
      </Motion>
    </section>
  </UContainer>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: "Bloom Finance App Redesign",
    description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, ut.
      Ipsam necessitatibus repellat quo. Aperiam accusamus at repellendus
      id, nemo nesciunt vero! Veniam, enim et odit doloribus saepe numquam
      nam.
    `,
    image: "/images/project.png",
  },
  {
    id: 2,
    title: "Bloom Finance App Redesign",
    description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, ut.
      Ipsam necessitatibus repellat quo. Aperiam accusamus at repellendus
      id, nemo nesciunt vero! Veniam, enim et odit doloribus saepe numquam
      nam.
    `,
    image: "/images/project.png",
  },
  {
    id: 3,
    title: "Bloom Finance App Redesign",
    description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, ut.
      Ipsam necessitatibus repellat quo. Aperiam accusamus at repellendus
      id, nemo nesciunt vero! Veniam, enim et odit doloribus saepe numquam
      nam.
    `,
    image: "/images/project.png",
  },
];
</script>

<style lang="scss" scoped></style>
