<template>
  <section
    id="experiences"
    class="pb-20 grid grid-cols-1 sm:grid-cols-2 gap-10"
  >
    <div class="col-span-1">
      <USeparator
        as="h3"
        label="About Me"
        :ui="{ label: 'text-2xl text-white font-semibold' }"
      />
      <Motion
        as="div"
        class="mt-4"
        :initial="{ opacity: 0, transform: 'translateY(20px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.5 }"
        :in-view-options="{ once: true }"
      >
        {{ props.page.about.description }}
      </Motion>
    </div>
    <div class="col-span-1">
      <USeparator
        as="h3"
        label="Work Experience"
        :ui="{ label: 'text-2xl text-white font-semibold' }"
      />
      <div class="mt-4 flex flex-col gap-6">
        <Motion
          v-for="(company, index) in props.page.companies"
          :key="company.name"
          as="div"
          class="flex"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <span class="text-sm min-w-[130px]">{{ company.date }}</span>
          <USeparator class="flex-1 px-1 sm:px-5" />
          <span class="text-sm">
            {{ company.role }} at
            <ULink
              :to="company.link"
              target="_blank"
              :class="`cursor-pointer ${company.addClass}`"
            >
              {{ company.name }}
            </ULink>
          </span>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IndexCollectionItem } from "@nuxt/content";

const props = defineProps<{
  page: IndexCollectionItem;
}>();
</script>

<style lang="scss" scoped></style>
