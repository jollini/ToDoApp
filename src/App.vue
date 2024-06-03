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
    <div class="pa-0 todo-background">

        <v-container class="pa-10"></v-container>

        <v-card max-width="680" class="mx-auto" flat color="transparent">
            <VCol>
                <VRow>
                    <h1 class="text-uppercase">Todo</h1>
                    <v-spacer></v-spacer>
                    <v-btn flat @click="toggleTheme" color="transparent">
                        <v-icon aria-hidden="false">
                            mdi-white-balance-sunny
                        </v-icon>
                    </v-btn>
                </VRow>
            </VCol>

            <v-container class="pa-4"></v-container>

            <ToDoEdit class="pa-4"></ToDoEdit>
        </v-card>

        <v-container class="pa-4"></v-container>

        <v-card max-width="680" class="mx-auto pa-4" flat>
            <ToDoList></ToDoList>
            <v-card-actions>
                <VRow>
                    <VCol cols="4">
                        {{ toDoStore.selectedToDoListCount }} items left
                    </VCol>
                    <VCol cols="4">
                        <VBtn :active="toDoStore.type == 'all'" @click="toDoStore.changeType('all')">All</VBtn>
                        <VBtn :active="toDoStore.type == 'active'" @click="toDoStore.changeType('active')">Active</VBtn>
                        <VBtn :active="toDoStore.type == 'completed'" @click="toDoStore.changeType('completed')">
                            Completed
                        </VBtn>
                    </VCol>
                    <VCol cols="4">
                        <VBtn @click="toDoStore.clearCompleted">Clear Completed</VBtn>

                    </VCol>
                </VRow>
                <!-- Drag and drop to reorder list -->
            </v-card-actions>
        </v-card>
    </div>

    <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Jonathan Pallini</a>.
    </div>
</template>

<!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
<style>
.todo-background {
    background: url('images/bg-desktop-dark.jpg');
    background-size: cover;
    height: 300px;
}

.attribution {
    font-size: 11px;
    text-align: center;
}

.attribution a {
    color: hsl(228, 45%, 44%);
}
</style>
