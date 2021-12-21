<template>
  <div class="about">
    <h1>Posts Publicados</h1>
    <posts></posts>
  </div>
</template>
<script>
	import posts from '@/components/posts.vue'
	export default {
	name:'About',	
	components: {
		posts
	}
	}
</script>
