<template>
	<div class="hello">
		<ul class="cards-list">
			<li v-for="(card, index) in cards"
				v-bind:class="addItemClass(index)"
				v-bind:key="index">
				<Card
					class="card--cards-list"
					v-bind:cardNumber="index+1"
					v-bind:cardsRevealed="cardsRevealed"
					v-on:card-revealed="onCardRevealed"
					v-bind:cardData="card" />
			</li>
			<li class="card-item-6"></li>
			<li class="card-item-7"></li>
			<li class="card-item-8"></li>
			<li class="card-item-9"></li>
		</ul>
	</div>
</template>

<script>
import getCards from '../helpers/getCards';
import Card from './Card';

export default {
  name: 'ModeRitual',
	data() {
		return {
			cards: [],
			cardsRevealed: 0
		};
	},
	methods: {
		getCards() {
			return getCards();
		},
		addItemClass(index) {
			return `card-item-${index+1}`;
		},
		onCardRevealed() {
			this.cardsRevealed += 1;
		}
	},
	components: {
		Card		
	},
	created() {
		this.cards = this.getCards()
	}
}
</script>


<style>
.cards-list {
	list-style: none;
	display: grid;
	grid-template-columns: auto auto auto;
	grid-template-rows: auto auto auto;
	grid-gap: 15px 20px;
	justify-content: center;
}
.card-item-1 { 
	grid-column-start: 2;
	grid-column-end: 2;
	grid-row-start: 2;
	grid-row-end: 2;
 }
.card-item-2 { 
	grid-column-start: 1;
	grid-column-end: 1;
	grid-row-start: 2;
	grid-row-end: 2;
 }
.card-item-3 { 
	grid-column-start: 2;
	grid-column-end: 2;
	grid-row-start: 1;
	grid-row-end: 1;
 }
.card-item-4 { 
	grid-column-start: 3;
	grid-column-end: 3;
	grid-row-start: 2;
	grid-row-end: 2;
 }
.card-item-5 { 
	grid-column-start: 2;
	grid-column-end: 2;
	grid-row-start: 3;
	grid-row-end: 3;
 }
</style>
