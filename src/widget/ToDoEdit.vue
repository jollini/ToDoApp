<script setup>
import { ref } from 'vue'
import { useToDoStore } from '../store/toDo';

const text = ref("")
const toDoStore = useToDoStore();

const addTodoAndClearTextField = () => {
    if (!!text.value) {
        toDoStore.addTodo(text.value)
        text.value = ""
    }

}
</script>

<template>
    <VRow>
        <VCheckbox :disabled="true" true-icon="mdi-check-circle" false-icon="mdi-checkbox-blank-circle-outline">
        </VCheckbox>
        <v-text-field v-model="text" v-on:keyup.enter="addTodoAndClearTextField" placeholder="Create a new todo..."
            :rules="[
            value => !!value || 'Required.',
        ]"></v-text-field>
    </VRow>
</template>