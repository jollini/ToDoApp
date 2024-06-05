<script setup>
import { ref } from "vue"
import { useToDoStore } from "../store/toDo"

const text = ref("")
const toDoStore = useToDoStore()

const addTodoAndClearTextField = () => {
  if (text.value) {
    toDoStore.addTodo(text.value)
    text.value = ""
  }
}
</script>

<template>
  <VCard>
    <VRow>
      <VCheckbox
        :disabled="true"
        true-icon="mdi-check-circle"
        false-icon="mdi-checkbox-blank-circle-outline"
      />

      <VTextField
        v-model="text"
        placeholder="Create a new todo..."
        :rules="[(value) => !!value || 'Required.']"
        variant="plain"
        hide-details="auto"
        @keyup.enter="addTodoAndClearTextField"
      />
    </VRow>
  </VCard>
</template>
