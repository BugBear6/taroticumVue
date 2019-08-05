<template>
	<div class="single-card">
		<Card
			v-on:card-selected="onCardSelected"
			v-bind:cardData="card"
			v-bind:modalId="modalId" />
		<CardModal
			v-bind:cardData="cardSelected"
			v-bind:modalId="modalId"
			v-bind:addControls="false"
			v-bind:preferedModalTab="preferedModalTab"
			v-on:change-prefered-tab="changePreferedModalTab"
		/>
	</div>
</template>

<script>
import { getCards } from '../helpers/getCards';
import Card from './Card';
import CardModal from './CardModal';


export default {
	name: 'ModeSingle',
	components: {
		Card,
		CardModal
	},
	props: [
		'cardData'
	],
	data() {
		return {
			card: null,
			cardSelected: {},
			modalId: 'modalSingle',
			preferedModalTab: ''
		};
	},
	methods: {
		getCard() {
			return getCards('single');
		},
		onCardSelected(newCardData) {
			this.cardSelected = newCardData;
		},
		changePreferedModalTab(tabName) {
			this.preferedModalTab = tabName;
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
