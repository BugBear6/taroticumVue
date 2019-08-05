<template>
	<div class="tempalate-modal-desc">
		<ul class="template-modal-desc__list">
			<li v-for="(x, index) in ArrLength" v-bind:key="index+1">
				<p class="template-modal-desc__text">
					<span v-html="templateData.cards[index+1]"></span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'TemplateModalDesc',
	props: [
		'templateData',
	],
	data() {
		return {
			ArrLength: new Array(5).fill('')
		};
	}
}
</script>

<style>
.template-modal-desc__list {
	list-style: none;
}
.template-modal-desc__text {
	margin-bottom: 6px;
}
</style>

