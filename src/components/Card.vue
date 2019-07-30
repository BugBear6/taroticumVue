<template>
	<div class="card"
		v-bind:class="{
			'card--card-inactive': cardToReveal !== cardNumber && !isRevealed
		}"
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
		'cardsRevealed',
		'cardNumber'
	],
	computed: {
		cardToReveal() {
			return this.cardsRevealed + 1;
		}
	},
	components: {
		'b-modal': BModal,
		CardModal
	},
	methods: {
		revealCard() {
			if (this.cardToReveal === this.cardNumber) {
				this.isRevealed = true;
				this.$emit('card-revealed');
			}
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
}

.card--card-inactive {
	-webkit-filter: brightness(0.4);
	filter: brightness(0.4);
	cursor: not-allowed;
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
	height: auto;
	transition: .2s;
	box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
.card__img:hover {
	box-shadow: 0 0 4px 2px rgba(0, 0, 0,.6);
	transform: scale(1.08);
}
</style>
