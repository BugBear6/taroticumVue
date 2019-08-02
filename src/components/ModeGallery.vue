<template>
	<div class="mode-gallery">
		<ModeGalleryFilters v-bind:filters="filters" />
		<b-row>
			<b-col
				v-for="card in cardsFiltered"
				v-bind:key="card.id"
				lg="2"
				md="3"
				sm="6"
				cols="12">
				<b-card class="card-item border-0">
					<Card
						class="card--cards-list"
						v-on:card-selected="onCardSelected"
						v-bind:modalId="modalId"
						v-bind:alwaysReveal="true"
						v-bind:cardData="card"
					/>
					<h5 class="text-center mt-1 mb-1">{{card.name}}</h5>
				</b-card>
			</b-col>
		</b-row>
		<CardModal
			v-bind:cardData="cardSelected"
			v-bind:modalId="modalId"
			v-bind:addControls="true"
		/>
	</div>
</template>

<script>
import Card from './Card';
import ModeGalleryFilters from './ModeGalleryFilters';
import { getAllCards } from '../helpers/getCards';
import { BCard, BButton, BRow, BCol} from 'bootstrap-vue';
import CardModal from './CardModal';

export default {
	name: 'ModeGallery',
	data() {
		return {
			cardSelected: {},
			modalId: 'modalGallery',
			cards: getAllCards(),
			filters: {
				all: true,
				major: false,
				minor: false,
				eyes: false,
				crescents: false,
				hourglasses: false,
				roses: false,
				skulls: false
			},
			searchPhrase: ''
		}
	},
	methods: {
		toggleFilter(filterName) {
			// cannot unselect ALL
			if (filterName === 'all' && this.filters.all) return false;

			// select ALL and unselect evert other filter
			if (filterName === 'all' && !this.filters.all) {
				Object.keys(this.filters).forEach(key => {
					if (key !== 'all') this.filters[key] = false;
				});
			}
			// unselect ALL when some other filter is selected
			if (filterName !== 'all') this.filters.all = false;

			// set selected filter to true
			this.filters[filterName] = !this.filters[filterName];

			// set ALL when no othe filters selected
			if (this.getActiveFilters().length === 0) this.filters.all = true;
		},
		getActiveFilters() {
			return Object.keys(this.filters).filter(key => this.filters[key]);
		},
		updateSearchPhrase(newSearchPhrase) {
			this.searchPhrase = newSearchPhrase
		},
		onCardSelected(newCardData) {
			this.cardSelected = newCardData;
		},
		showNextCard() {
			const currentCardIndex = this.cardsFiltered.findIndex(cardObj => cardObj.id === this.cardSelected.id);
			const lastCardIndex = this.cardsFiltered.length - 1;
			let newCardIndex;

			if (currentCardIndex === lastCardIndex) {
				newCardIndex = 0
			} else {
				newCardIndex = currentCardIndex + 1;
			}
			console.log('next card', this.cardsFiltered[newCardIndex])
			this.cardSelected = this.cardsFiltered[newCardIndex];
		},
		showPrevCard() {
			const currentCardIndex = this.cardsFiltered.findIndex(cardObj => cardObj.id === this.cardSelected.id);
			const lastCardIndex = this.cardsFiltered.length - 1;
			let newCardIndex;

			if (currentCardIndex === 0) {
				newCardIndex = lastCardIndex;
			} else {
				newCardIndex = currentCardIndex - 1;
			}
			console.log('prev card', this.cardsFiltered[newCardIndex])
			this.cardSelected = this.cardsFiltered[newCardIndex];
		}
	},
	computed: {
		cardsFiltered() {
			if (this.filters.all && !this.searchPhrase) {
				return this.cards;
			}

			// clone cards array
			let filtered = [...this.cards];

			if (!this.filters.all) {
				const activeFilters = this.getActiveFilters();
				filtered = filtered.filter(cardObj => {
					const color = cardObj.color ? cardObj.color.toLowerCase() : '';
					const arcana = cardObj.arcana ? cardObj.arcana.toLowerCase() : '';
					if (activeFilters.indexOf(color) > -1 || activeFilters.indexOf(arcana) > -1 ) {
						return cardObj;
					}
				});
			}

			if (this.searchPhrase) {
				const searchPhaseLowercase = this.searchPhrase.toLowerCase();
				filtered = filtered.filter(cardObj => {
					const cardNameLowercase = cardObj.name.toLowerCase();
					return cardNameLowercase.includes(searchPhaseLowercase);
				});
			}

			return filtered;
		}
	},
	created() {
		this.$root.$on('toggle-filter', this.toggleFilter);
		this.$root.$on('update-search-phrase', this.updateSearchPhrase);

		this.$root.$on('show-next-card', this.showNextCard);
		this.$root.$on('show-prev-card', this.showPrevCard);
	},
	watch: {
		searchPhrase(newSearchPhrase) {
			this.runSearch(newSearchPhrase);
		}
	},
	components: {
		Card,
		CardModal,
		ModeGalleryFilters,
		'b-row': BRow,
		'b-col': BCol,
		'b-card': BCard
	} 
};
</script>

<style>
.mode-gallery .card-body {
	padding: 5px 5px 10px 5px;
}
</style>
