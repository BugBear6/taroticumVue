<template>
	<div
		class="template" 
		v-html="desc"></div>
</template>

<script>
export default {
	name: 'Template',
	props: [
		'desc'
	]
}
</script>

<style>
.template {
	width: 225px;
	padding: 5px 0 0 0;
	font-size: 15px;
	text-align: center;
}
</style>
