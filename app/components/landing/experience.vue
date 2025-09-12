<template>
  <section class="pb-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus
        totam maxime eius fuga cumque placeat est eaque? Quo aut tempore dolores
        atque cumque blanditiis repellat nam debitis commodi officia.
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
          v-for="(company, index) in companies"
          :key="company.name"
          as="div"
          class="flex"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <span>{{ company.date }}</span>
          <USeparator class="flex-1 px-5" />
          <span>
            {{ company.role }} at
            <NuxtLink to="https://www.sotatek.com/" target="_blank">
              <ULink as="button" :class="company.addClass">{{
                company.name
              }}</ULink>
            </NuxtLink>
          </span>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup>
const companies = [
  {
    name: "Sotatek JSC",
    link: "https://www.sotatek.com/",
    date: "2020 - 2021",
    role: "Fullstack Developer",
    addClass: "text-blue-500",
  },
  {
    name: "HBLab JSC",
    link: "https://hblab.vn/",
    date: "2020 - 2021",
    role: "Frontend Developer",
    addClass: "text-yellow-500",
  },
  {
    name: "Co-well Asia",
    link: "https://co-well.vn/",
    date: "2020 - 2021",
    role: "Intern Developer",
    addClass: "text-green-500",
  },
];
</script>

<style lang="scss" scoped></style>
