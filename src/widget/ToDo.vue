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
    <VRow align-content="center">
        <VCheckbox v-model="done" hide-details class="pr-2"></VCheckbox>
        <v-label :text="props.toDo.text" :class="done ? 'doneToDoStyle' : null" ></v-label>
    </VRow>
</template>

<style scoped>
.doneToDoStyle {
    text-decoration: line-through;
}
</style>