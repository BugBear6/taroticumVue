<template>
	<b-modal
		v-bind:id="modalId"
		v-bind:modal-class="getModalClass()"
		size="lg"
		ok-only
		scrollable
		v-bind:title="cardData.name">
		<div>
			<b-tabs content-class="mt-3 card-modal__body" fill>
				<CardModalControls 
					v-if="addControls"
				/>
				<b-tab
					title="Card Data"
					v-on:click="changePreferedModalTab('cardData')"
					v-bind:active="isTabPreferred('cardData')"
					class="card-modal__content">
					<div class="card-modal--split">
						<div class="left">
							<CardModalArcanaData
								v-bind:arcana="cardData.arcana"
								v-bind:number="cardData.number"
								v-bind:color="cardData.color"
							/>
							<div class="my-4">
								<div v-html="cardData.desc"></div>
							</div>
						</div>
						<div class="right">
							<div class="card-modal__img-holder">
								<img
									class="card-modal__img"
									v-bind:src="getCardUrl()"
									v-bind:alt="cardData.name">
							</div>
						</div>
					</div>
				</b-tab>
				<b-tab
					title="Description"
					v-on:click="changePreferedModalTab('description')"
					v-bind:active="isTabPreferred('description')"
					class="card-modal__content">
					<CardModalArcanaData
						v-bind:arcana="cardData.arcana"
						v-bind:number="cardData.number"
						v-bind:color="cardData.color"
					/>
					<div class="my-4">
						<div v-html="cardData.desc"></div>
					</div>
				</b-tab>
				<b-tab
					title="Image"
					v-on:click="changePreferedModalTab('image')"
					v-bind:active="isTabPreferred('image')">
					<div class="card-modal__img-holder">
						<img
							class="card-modal__img"
							v-bind:src="getCardUrl()"
							v-bind:alt="cardData.name">
					</div>
				</b-tab>
			</b-tabs>
		</div>
	</b-modal>
</template>

<script>
import CardModalArcanaData from './CardModalArcanaData';
import CardModalControls from './CardModalControls';
import { BModal, VBModal, BTab, BTabs } from 'bootstrap-vue';
import { getCardUrl } from '../helpers/getCardObject';


export default {
	name: 'CardModal',
	props: [
		'cardData',
		'cardId',
		'addControls',
		'modalId',
		'preferedModalTab'
	],
	components: {
		CardModalArcanaData,
		CardModalControls,
		'b-modal': BModal,
		'b-tabs': BTabs,
		'b-tab': BTab
	},
	methods: {
		getModalClass() {
			return `card-modal ${this.addControls ? 'card-modal--has-controls' : '' }`.trim();
		},
		getCardUrl() {
			return getCardUrl(this.cardData.id);
		},
		isTabPreferred(tabName) {
			if (this.preferedModalTab) {
				if (this.preferedModalTab === tabName) {
					return true;
				}
			} else {
				if (tabName === 'cardData') {
					return true;
				}
			}
		},
		changePreferedModalTab(tabName) {
			this.$emit('change-prefered-tab', tabName);
		}
	}
}
</script>

<style>
.card-modal .modal-body {
	padding: 0 !important;
}

.card-modal .modal-header {
	border-bottom: 0 !important;
}

.nav-tabs
.nav-link {
	background: #f9f9f9;
	border-radius: 0 !important;
}
.card-modal__body {
	position: relative;
}
.card-modal__content {
	padding: 0 20px 10px;
}
.card-modal--has-controls .card-modal__content {
	padding: 0 45px 10px;
}
.card-modal__img-holder {
	display: flex;
	justify-content: center;
	align-items: center;
}
.card-modal__img {
	width: 290px;
	height: auto;
	text-align: center;
	margin-bottom: 8px;
}
.card-modal--split {
	display: flex;
	flex-direction: row-reverse;
}
.card-modal--split .card-modal__img {
	width: 220px;
	padding: 25px 15px 5px 0;
}
</style>
