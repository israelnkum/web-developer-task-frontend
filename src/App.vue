<script setup lang="ts">
import { ref } from "vue";
import NumberForm from "@/components/numbers/NumberForm.vue";
import { useNumberStore } from "@/stores/number-store";
import NumberDetails from "@/components/numbers/NumberDetails.vue";


const numberStore = useNumberStore()

const filter = ref('all')

const onClickHandler = (page: number) => {
  numberStore.getNumbers(page)
};

const currentPage = ref(1);
</script>

<template>
  <main>
    <header>
      <h1>Web Developer Task</h1>
    </header>
    <div class="new-task-form">
      <NumberForm/>
    </div>
    <div class="container">
      <nav class="filter-task">
        <button @click="numberStore.getNumbers()">Display Numbers</button>
        <p v-if="numberStore.numbers.totalElements">Total Numbers: {{numberStore.numbers.totalElements}}</p>
      </nav>
      <div class="loading" v-if="numberStore.isLoading">Loading numbers...</div>

      <div class="task-list" v-if="filter === 'all'">
        <div v-for="number in numberStore?.numbers?.content" :key="number.id">
          <NumberDetails :number="number"/>
        </div>
      </div>
      <div v-if="Object.keys(numberStore.numbers).length > 0">
        <vue-awesome-paginate
            :total-items="numberStore.numbers.totalElements"
            :items-per-page="numberStore.numbers.size"
            :max-pages-shown="5"
            v-model="currentPage"
            :on-click="onClickHandler"
        />
      </div>
    </div>
  </main>
</template>