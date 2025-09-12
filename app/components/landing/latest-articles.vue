<template>
  <section class="pb-20">
    <USeparator
      as="h3"
      label="Latest Articles"
      :ui="{ label: 'text-2xl text-white font-semibold' }"
    />
    <div class="flex flex-col gap-6 mt-20">
      <Motion
        v-for="(article, index) in articles"
        :key="article.id"
        as="div"
        :initial="{
          opacity: 0,
          transform: 'translateY(20px)',
        }"
        :while-in-view="{
          opacity: 1,
          transform: 'translateY(0)',
        }"
        :transition="{
          delay: 0.5 + index * 0.1,
        }"
        :in-view-options="{ once: true }"
      >
        <NuxtLink to="/" class="group">
          <div class="text-sm text-muted">{{ article.date }}</div>
          <h4 class="text-white text-xl font-semibold mt-2">
            {{ article.title }}
          </h4>
          <p class="mt-4">
            {{ article.content }}
          </p>
          <ULink
            as="button"
            class="mt-3 flex items-center gap-1 group-hover:text-primary"
          >
            Read
            <UIcon
              name="i-lucide-arrow-right"
              class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-2 group-hover:opacity-100"
            />
          </ULink>
        </NuxtLink>
      </Motion>
    </div>
  </section>
</template>

<script setup>
const articles = [
  {
    id: 1,
    date: "Apr 23, 2025",
    title: "The Psychology of Color in UI Design",
    content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt
      consectetur beatae libero harum neque iste debitis sapiente sed, quos
      assumenda aspernatur minima nam ipsam ipsum explicabo, repellat
      eveniet voluptatum.
    `,
  },
  {
    id: 2,
    date: "Apr 23, 2025",
    title: "The Psychology of Color in UI Design",
    content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt
      consectetur beatae libero harum neque iste debitis sapiente sed, quos
      assumenda aspernatur minima nam ipsam ipsum explicabo, repellat
      eveniet voluptatum.
    `,
  },
  {
    id: 3,
    date: "Apr 23, 2025",
    title: "The Psychology of Color in UI Design",
    content: `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt
      consectetur beatae libero harum neque iste debitis sapiente sed, quos
      assumenda aspernatur minima nam ipsam ipsum explicabo, repellat
      eveniet voluptatum.
    `,
  },
];
</script>

<style lang="scss" scoped></style>
