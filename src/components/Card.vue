<template>
	<div class="card"
		v-on:click="revealCard()">
		<div class="card__face card__face--front"
			v-if="!isRevealed">
			<img
				class="card__img"
				src="/img/tarot-cards/back.jpg"
				alt="Back">
		</div>
		<div class="card__face card__face--back"
			v-b-modal="getModalId()"
			v-if="isRevealed">
			<img
				class="card__img"
				v-if="isRevealed"
				v-bind:src="getCardUrl()"
				v-bind:alt="cardData.name">
		</div>
		<CardModal
			v-bind:cardData="cardData"
			v-bind:cardId="getModalId()"
			v-bind:cardUrl="getCardUrl()"
		/>
	</div>
</template>

<script>
import { BModal, VBModal } from 'bootstrap-vue';
import CardModal from './CardModal';

export default {
	name: 'Card',
	data() {
		return {
			isRevealed: false
		};
	},
	props: [
		'cardData',
		'cardNumber'
	],
	components: {
		'b-modal': BModal,
		CardModal
	},
	methods: {
		revealCard() {
				this.isRevealed = true;
				this.$emit('card-revealed');
		},
		getCardUrl() {
			return `/img/tarot-cards/${this.cardData.fileName}`;
		},
		getModalId() {
			return `modal-${this.cardData.id}`;
		}
	}
}
</script>

<style>
.card {
	width: 250px;
	height: 429px;
	position: relative;
	background: black;
	cursor: pointer;
	transition: 1s;
		-webkit-filter: brightness(.8);
	filter: brightness(.8);
}

.card:hover {
	filter: brightness(1);
}

.card--cards-list.card {
	width: 125px;
	height: 214px;
}

.card__face {
	width: 100%;
}

.card__img {
	width: 100%;
	background: black;
	height: auto;
}

</style>
