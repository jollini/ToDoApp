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
const isHovering = ref(false)
const iconClassStyle = ref(done.value == true ? "styled-icon" : null)

watch(done, () => {
  toDoStore.updateTodo(props.toDo.id, done.value)
  iconClassStyle.value = done.value == true ? "styled-icon" : null
})
</script>

<template>
  <VRow
    align-content="center"
    class="ma-0"
    no-gutters
    @mouseover="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <VCol
      align-self="center"
      cols="1"
    >
      <VCheckbox
        v-model="done"
        hide-details
        :class="'px-4 ' + iconClassStyle"
        true-icon="mdi-check-circle"
        false-icon="mdi-checkbox-blank-circle-outline"
      />
    </VCol>

    <VCol align-self="center">
      <VLabel
        :text="props.toDo.text"
        :class="done ? 'doneToDoStyle' : null"
      />
    </VCol>

    <VCol
      v-if="isHovering"
      align-self="center"
      cols="1"
    >
      <VBtn
        flat
        color="transparent"
        @click="toDoStore.removeTodo(props.toDo.id)"
      >
        <VIcon :size="24"> mdi-close </VIcon>
      </VBtn>
    </VCol>
  </VRow>
</template>

<style scoped>
.doneToDoStyle {
  text-decoration: line-through;
}
</style>
