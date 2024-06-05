<script setup>
import { VContainer } from "vuetify/lib/components/index.mjs"
import ToDo from "./ToDo.vue"
import { useToDoStore } from "../store/toDo"

const toDoStore = useToDoStore()
</script>

<template>
  <VContainer
    v-if="toDoStore.type == 'all'"
    class="pa-0 ma-0"
  >
    <div
      v-for="td in toDoStore.toDoList"
      :key="td.id"
    >
      <ToDo
        :to-do="td"
        class="py-1"
      />
      <VDivider />
    </div>
  </VContainer>
  <VContainer
    v-if="toDoStore.type == 'active'"
    class="pa-0 ma-0"
  >
    <div
      v-for="td in toDoStore.activeToDoList"
      :key="td.id"
    >
      <ToDo
        :to-do="td"
        class="py-1"
      />
      <VDivider />
    </div>
  </VContainer>
  <VContainer
    v-if="toDoStore.type == 'completed'"
    class="pa-0 ma-0"
  >
    <div
      v-for="td in toDoStore.completedToDoList"
      :key="td.id"
    >
      <ToDo
        :to-do="td"
        class="py-1"
      />
      <VDivider />
    </div>
  </VContainer>
</template>
