<template>
	<div class="taroticum-card"
		v-on:click="onCardClick()">
		<div class="taroticum-card__face"
			v-if="!isRevealed && !alwaysReveal">
			<img
				class="taroticum-card__img"
				src="/img/tarot-cards/back.jpg"
				alt="Back">
		</div>
		<div class="taroticum-card__face"
			v-b-modal="modalId"
			v-if="isRevealed || alwaysReveal">
			<img
				class="taroticum-card__img"
				v-bind:src="getCardUrl()"
				v-bind:alt="cardData.name">
		</div>
	</div>
</template>

<script>
import { BModal, VBModal } from 'bootstrap-vue';
import { getCardUrl } from '../helpers/getCardObject';

export default {
	name: 'Card',
	data() {
		return {
			isRevealed: false
		};
	},
	props: [
		'cardData',
		'alwaysReveal',
		'addControls',
		'modalId'
	],
	components: {
		'b-modal': BModal
	},
	methods: {
		onCardClick() {
			if (typeof this.alwaysReveal === 'undefined' || !this.alwaysReveal) {
				this.revealCard();
			}
			if (this.alwaysReveal || this.isRevealed) {
				this.$emit('card-selected', this.cardData);
			}
		},
		getCardUrl() {
			return getCardUrl(this.cardData.id);
		},
		getModalId() {
			return `modal-${this.cardData.id}`;
		},
		revealCard() {
			this.isRevealed = true;
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
.taroticum-card__img {
	width: 100%;
	height: auto;
	background: black;
}
.mode-gallery .taroticum-card {
	width: 125px;
	height: 214px;
}

.mode-ritual .taroticum-card {
	width: 95px;
	height: 163px;
}

/* screen height over 780px */
@media screen and ( min-height: 780px ) {
	.mode-ritual .taroticum-card {
		width: 125px;
		height: 214px;
	}
}

</style>
