<script setup>
import ToDoList from "../components/ToDoList.vue"
import { useToDoStore } from "../store/toDo"
import ToDoEdit from "../components/ToDoEdit.vue"
import { useTheme } from "vuetify"

const toDoStore = useToDoStore()
const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark"
  changeImage(theme.global.name.value)
}

function changeImage() {
  let backgroundImage = ""
  if (theme.global.name.value == "dark") {
    backgroundImage = "src/assets/images/bg-desktop-dark.jpg"
  } else {
    backgroundImage = "src/assets/images/bg-desktop-light.jpg"
  }
  document.getElementById("todo-background").style.backgroundImage =
    'url("' + backgroundImage + '")'
}
</script>

<template>
  <div
    id="todo-background"
    class="pa-0"
  />

  <div class="todo-content">
    <VCard
      max-width="680"
      class="mx-auto"
      flat
      color="transparent"
    >
      <VContainer>
        <VRow
          justify="space-between"
          class="d-flex align-center"
        >
          <h1 class="text-uppercase todo-title">Todo</h1>
          <VBtn
            flat
            color="transparent"
            @click="toggleTheme"
          >
            <VIcon
              aria-hidden="false"
              :size="24"
            >
              mdi-white-balance-sunny
            </VIcon>
          </VBtn>
        </VRow>
      </VContainer>

      <VContainer class="pa-4" />

      <ToDoEdit class="pa-4" />
    </VCard>

    <VContainer class="pa-4" />

    <VCard
      max-width="680"
      class="mx-auto pa-4"
      flat
    >
      <ToDoList />
      <VCardActions>
        <VRow>
          <VCol cols="4">
            {{ toDoStore.selectedToDoListCount }} items left
          </VCol>
          <VCol cols="4">
            <VBtn
              :active="toDoStore.type == 'all'"
              @click="toDoStore.changeType('all')"
            >
              All
            </VBtn>
            <VBtn
              :active="toDoStore.type == 'active'"
              @click="toDoStore.changeType('active')"
            >
              Active
            </VBtn>
            <VBtn
              :active="toDoStore.type == 'completed'"
              @click="toDoStore.changeType('completed')"
            >
              Completed
            </VBtn>
          </VCol>
          <VCol cols="4">
            <VBtn @click="toDoStore.clearCompleted"> Clear Completed </VBtn>
          </VCol>
        </VRow>
        <!-- Drag and drop to reorder list -->
      </VCardActions>
    </VCard>
  </div>
  <VContainer class="pa-1" />
</template>

<!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
<style scoped>
#todo-background {
  background-image: url("../assets/images/bg-desktop-dark.jpg");
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
