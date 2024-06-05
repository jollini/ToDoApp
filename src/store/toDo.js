import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useToDoStore = defineStore("toDo", () => {
  const toDoList = ref([]);
  const type = ref("all"); // all, active, completed

  const selectedToDoListCount = computed(() => {
    let count = 0;
    if (type.value == "all") {
      count = toDoList.value.length;
    } else if (type.value == "active") {
      count = activeToDoList.value.length;
    } else {
      count = completedToDoList.value.length;
    }
    return count;
  });

  const activeToDoList = computed(() =>
    toDoList.value.filter((item) => item.done == false),
  );
  const completedToDoList = computed(() =>
    toDoList.value.filter((item) => item.done == true),
  );

  const addTodo = (newTodoText) => {
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      done: false,
    };
    toDoList.value.push(newTodo);
  };

  const updateTodo = (toDoId, done) => {
    const toDoToUpdateIndex = toDoList.value.findIndex(
      (item) => item.id == toDoId,
    );
    toDoList.value[toDoToUpdateIndex].done = done;
  };

  const changeType = (newType) => {
    type.value = newType;
  };

  const clearCompleted = () => {
    toDoList.value = toDoList.value.filter((item) => item.done == false);
  };

  return {
    type,
    toDoList,
    activeToDoList,
    completedToDoList,
    selectedToDoListCount,

    addTodo,
    updateTodo,
    changeType,
    clearCompleted,
  };
});
