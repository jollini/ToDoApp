<script setup>
import ToDoList from "../src/widget/ToDoList.vue"
import { useToDoStore } from "./store/toDo";
import ToDoEdit from "./widget/ToDoEdit.vue";
import { useTheme } from 'vuetify'

const toDoStore = useToDoStore()
const theme = useTheme()

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark
      ? "light"
      : "dark";
  }
</script>

<template>
    <v-card max-width="680" class="mx-auto py-15" flat>
        <VCol>
            <VRow>
                <h1>Todo</h1>
                <v-spacer></v-spacer>
                <v-btn flat @click="toggleTheme">
                    <v-icon aria-hidden="false">
                        mdi-white-balance-sunny
                    </v-icon>
                </v-btn>

            </VRow>
        </VCol>

        <ToDoEdit class="pa-4"></ToDoEdit>
        <ToDoList></ToDoList>
        <v-card-actions>

            {{ toDoStore.selectedToDoListCount }} items left

            <VBtn :active="toDoStore.type == 'all'" @click="toDoStore.changeType('all')">All</VBtn>
            <VBtn :active="toDoStore.type == 'active'" @click="toDoStore.changeType('active')">Active</VBtn>
            <VBtn :active="toDoStore.type == 'completed'" @click="toDoStore.changeType('completed')">Completed</VBtn>

            <VBtn @click="toDoStore.clearCompleted">Clear Completed</VBtn>
            <!-- Drag and drop to reorder list -->
        </v-card-actions>
    </v-card>
    <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Jonathan Pallini</a>.
    </div>
</template>

<!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
<style>
.attribution {
    font-size: 11px;
    text-align: center;
}

.attribution a {
    color: hsl(228, 45%, 44%);
}
</style>
