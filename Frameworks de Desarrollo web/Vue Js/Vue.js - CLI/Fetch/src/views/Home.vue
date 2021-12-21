<template>
  <div class="home">
	<tareas></tareas>
  </div>
</template>

<script>
// @ is an alias to /src
import tareas from '@/components/tareas.vue'

export default {
  name: 'Home',
  components: {
    tareas
  }
}
</script>
