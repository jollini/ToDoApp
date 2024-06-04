<script setup>
import ToDoList from "../components/ToDoList.vue"
import { useToDoStore } from "../store/toDo";
import ToDoEdit from "../components/ToDoEdit.vue";
import { useTheme } from 'vuetify'

const toDoStore = useToDoStore()
const theme = useTheme()

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark
        ? "light"
        : "dark";
    changeImage(theme.global.name.value)
}

function changeImage() {
    let backgroundImage = '';
    if (theme.global.name.value == 'dark') {
        backgroundImage = 'src/assets/images/bg-desktop-dark.jpg'
    } else {
        backgroundImage = 'src/assets/images/bg-desktop-light.jpg'
    }
    document.getElementById('todo-background').style.backgroundImage = 'url("' + backgroundImage + '")';
}
</script>

<template>
    <div class="pa-0" id="todo-background"> </div>

    <div class="todo-content">

        <v-card max-width="680" class="mx-auto" flat color="transparent">
            <v-container>
                <VRow justify="space-between" class="d-flex align-center">
                    <h1 class="text-uppercase todo-title">Todo</h1>
                    <v-btn flat @click="toggleTheme" color="transparent">
                        <v-icon aria-hidden="false" :size="24">
                            mdi-white-balance-sunny
                        </v-icon>
                    </v-btn>
                </VRow>
            </v-container>

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
    <v-container class="pa-1"></v-container>
</template>

<!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
<style scoped>
#todo-background {
    background-image: url('../assets/images/bg-desktop-dark.jpg');
    background-size: cover;
    height: 350px;
}

.todo-title {
    letter-spacing: 1rem;
    font-weight: 600;
    font-size: 2.5rem;
}

.todo-content {
    margin-top: -18rem;
}
</style>
