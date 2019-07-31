<template>
	<div class="mode-ritual">
		<p class="selected-template-info"
			v-bind:class="{ 'text-muted': !template.name }">
			<strong>Selected template:</strong> {{template.name ? template.name : 'None'}}
		</p>
		<ul class="cards-list"
			v-bind:class="{ 'cards-list--template-selected': template.name} ">
			<li v-for="(card, index) in cards"
				class="card-item"
				v-bind:class="addItemClass(index)"
				v-bind:key="index">
				<Card
					class="card--cards-list"
					v-bind:cardNumber="index+1"
					v-on:card-revealed="onCardRevealed"
					v-bind:cardData="card"
				/>
				<Template
					v-if="template.name"
					v-bind:desc="template.cards[index+1]"
				/>
			</li>
			<li class="card-item card-item-6"></li>
			<li class="card-item card-item-7"></li>
			<li class="card-item card-item-8"></li>
			<li class="card-item card-item-9"></li>
		</ul>
	</div>
</template>

<script>
import Card from './Card';
import Template from './Template';
import getCards from '../helpers/getCards';
import { getTemplateObj } from '../helpers/getTemplates';

export default {
  name: 'ModeRitual',
	data() {
		return {
			cards: [],
			template: {}
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
			// 
		},
		applyTemplate(templateId) {
			if (templateId) {
				this.template = getTemplateObj(templateId);
			} else {
				this.template = {};
			}
		}
	},
	components: {
		Card,
		Template
	},
	created() {
		this.cards = this.getCards()

		this.$root.$on('apply-template', templateId => {
			this.applyTemplate(templateId);
		});
	}
}
</script>


<style>
.selected-template-info {
	margin: 0;
	font-size: 15px;
}
.cards-list {
	list-style: none;
	display: grid;
	grid-template-columns: auto auto auto;
	grid-template-rows: auto auto auto;
	grid-gap: 15px 20px;
	justify-content: center;
}
.cards-list--template-selected {
	grid-gap: 2px;
}
.card-item {
	display: flex;
	flex-direction: column;
	align-items: center;
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
