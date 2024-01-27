<script setup lang="ts">

interface NumberType {
  id: number
  number: number
}
const props = defineProps<{
  number: NumberType
}>()
</script>

<template>
<div class="task">
  <h3>{{ props.number.number }}</h3>
</div>
</template>

<style scoped>

</style>