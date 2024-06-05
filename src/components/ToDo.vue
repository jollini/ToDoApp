<script setup>
import { ref, watch } from "vue"
import { useToDoStore } from "../store/toDo"

const props = defineProps({
  toDo: {
    type: Object,
    required: true,
  },
})

const toDoStore = useToDoStore()
const done = ref(props.toDo.done)

watch(done, () => {
  toDoStore.updateTodo(props.toDo.id, done.value)
})
</script>

<template>
  <VRow
    align-content="center"
    class="ma-0"
  >
    <VCheckbox
      v-model="done"
      hide-details
      class="px-4"
      true-icon="mdi-check-circle"
      false-icon="mdi-checkbox-blank-circle-outline"
    />

    <VLabel
      :text="props.toDo.text"
      :class="done ? 'doneToDoStyle' : null"
    />
  </VRow>
</template>

<style scoped>
.doneToDoStyle {
  text-decoration: line-through;
}
</style>
