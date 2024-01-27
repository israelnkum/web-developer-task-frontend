<script setup lang="ts">
import { ref } from "vue";
import { useNumberStore } from "@/stores/number-store";

const numberStore = useNumberStore()
const newTask = ref()
const message = ref()

const handleSubmit = () => {
  if (newTask.value === undefined) {
    alert('Enter an integer')

    return;
  }

  numberStore.addNumber({
    number: newTask.value
  })
  newTask.value = ''
  message.value = 'Number Added'
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="number" placeholder="Enter an integer" v-model="newTask">
      <button>Save</button>
    </form>
    <div class="text-center bg-green-600 w-fit mx-auto mt-2 text-white rounded-lg px-2 text-sm">
      {{message}}
    </div>
  </div>
</template>