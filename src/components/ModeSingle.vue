<template>
	<div class="single-card">
		<Card v-bind:cardData="card" />
	</div>
</template>

<script>
import { getCards } from '../helpers/getCards';
import Card from './Card';

export default {
	name: 'ModeSingle',
	components: {
		Card
	},
	props: [
		'cardData'
	],
	data() {
		return {
			card: null
		};
	},
	methods: {
		getCard() {
			return getCards('single');
		}
	},
		created() {
			this.card = this.getCard()
		}
	};
</script>

<style>
.single-card {
	display: flex;
	justify-content: center;
}
</style>
