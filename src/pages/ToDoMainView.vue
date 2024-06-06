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
              v-if="theme.global.name.value == 'dark'"
              aria-hidden="false"
              :size="24"
              color="white"
            >
              mdi-white-balance-sunny
            </VIcon>
            <VIcon
              v-else
              aria-hidden="false"
              :size="24"
              color="white"
              class="moon-icon-rotated"
            >
              mdi-moon-waning-crescent
            </VIcon>
          </VBtn>
        </VRow>
      </VContainer>

      <VContainer class="pa-4" />

      <ToDoEdit />
    </VCard>

    <VContainer class="pa-4" />

    <VCard
      max-width="680"
      class="mx-auto elevation-20"
    >
      <ToDoList />
      <VCardActions class="actions">
        <VRow class="px-4">
          <VCol
            cols="4"
            align-self="center"
          >
            <VLabel :text="toDoStore.selectedToDoListCount + ' items left'" />
          </VCol>
          <VCol
            cols="4"
            align-self="center"
            class="d-flex justify-center"
          >
            <VLabel
              :class="toDoStore.type == 'all' ? 'selected-type px-1' : 'px-1'"
              text="All"
              @click="toDoStore.changeType('all')"
            />
            <VLabel
              :class="
                toDoStore.type == 'active' ? 'selected-type px-1' : 'px-1'
              "
              text="Active"
              @click="toDoStore.changeType('active')"
            />
            <VLabel
              :class="
                toDoStore.type == 'completed' ? 'selected-type px-1' : 'px-1'
              "
              text="Completed"
              @click="toDoStore.changeType('completed')"
            />
          </VCol>
          <VCol
            cols="4"
            align-self="center"
            class="d-flex justify-end"
          >
            <VLabel
              text="Clear Completed "
              @click="toDoStore.clearCompleted"
            />
          </VCol>
        </VRow>
        <!-- Drag and drop to reorder list -->
      </VCardActions>
    </VCard>
  </div>
  <VContainer class="pa-4" />
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
  color: white;
}

.todo-content {
  margin-top: -16rem;
}

.actions label.selected-type {
  color: cornflowerblue;
  padding: 10px;
  font-weight: 700;
}

.actions label {
  font-size: small;
  letter-spacing: 0.1rem;
}

.moon-icon-rotated {
  transform: rotate(330deg);
}
</style>
