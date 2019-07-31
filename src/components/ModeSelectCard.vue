<template>
	<b-card
		v-bind:header="header"
		border-variant="secondary"
		header-border-variant="secondary"
		align="center">
		<b-card-text>{{desc}}</b-card-text>
		<b-button
			block
			variant="outline-primary"
			v-bind:to="to">Go
		</b-button>
	</b-card>
</template>

<script>
import { BCard, BCardText, BButton } from 'bootstrap-vue';

export default {
	name: 'ModeSelectCard',
	components: {
		'b-card': BCard,
		'b-card-text': BCardText,
		'b-button': BButton
	},
	props: [
		'header',
		'desc',
		'to'
	]
};
</script>

<style>
.mode-select__list {
	list-style: none;
	text-align: center;
}
</style>
