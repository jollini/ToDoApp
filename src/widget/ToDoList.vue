<script setup>
import { VContainer } from 'vuetify/lib/components/index.mjs';
import ToDo from './ToDo.vue';
import { useToDoStore } from '../store/toDo';

const toDoStore = useToDoStore()
</script>

<template>
    <VContainer v-if="toDoStore.type=='all' ">
        <ToDo v-for="td in toDoStore.toDoList" :key="td.id" :to-do="td"></ToDo>
    </VContainer>
    <VContainer v-if="toDoStore.type=='active' ">
        <ToDo v-for="td in toDoStore.activeToDoList" :key="td.id" :to-do="td"></ToDo>
    </VContainer>
    <VContainer v-if="toDoStore.type=='completed' ">
        <ToDo v-for="td in toDoStore.completedToDoList" :key="td.id" :to-do="td"></ToDo>
    </VContainer>
</template>