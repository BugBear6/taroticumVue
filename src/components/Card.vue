<template>
	<div class="taroticum-card"
		v-on:click="revealCard()">
		<div class="taroticum-card__face"
			v-if="!isRevealed && !alwaysReveal">
			<img
				class="taroticum-card__img"
				src="/img/tarot-cards/back.jpg"
				alt="Back">
		</div>
		<div class="taroticum-card__face"
			v-b-modal="getModalId()"
			v-if="isRevealed || alwaysReveal">
			<img
				class="taroticum-card__img"
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
import { getCardFileName } from '../helpers/getCardObject';

export default {
	name: 'Card',
	data() {
		return {
			isRevealed: false
		};
	},
	props: [
		'cardData',
		'alwaysReveal'
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
			return `/img/tarot-cards/${getCardFileName(this.cardData.id)}`;
		},
		getModalId() {
			return `modal-${this.cardData.id}`;
		}
	}
}
</script>

<style>
.taroticum-card {
	width: 250px;
	height: 429px;
	position: relative;
	background: black;
	cursor: pointer;
	transition: 1s;
		-webkit-filter: brightness(.8);
	filter: brightness(.8);
}

.taroticum-card:hover {
	filter: brightness(1);
}

.card--cards-list.taroticum-card {
	width: 125px;
	height: 214px;
}

.taroticum-card__face {
	width: 100%;
}

.taroticum-card__img {
	width: 100%;
	background: black;
	height: auto;
}

</style>
