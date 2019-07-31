<template>
	<b-modal
		v-bind:id="cardId"
		modal-class="card-modal"
		size="lg"
		ok-only
		scrollable
		v-bind:title="cardData.name">
		<div>
			<b-tabs content-class="mt-3" fill>
				<b-tab title="Description" active
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
				<b-tab title="Image">
					<div class="card-modal__img-holder">
						<img
							class="card-modal__img"
							v-bind:src="cardUrl"
							v-bind:alt="cardData.name">
					</div>
				</b-tab>
			</b-tabs>
		</div>
	</b-modal>
</template>

<script>
import CardModalArcanaData from './CardModalArcanaData';
import { BModal, VBModal, BTab, BTabs } from 'bootstrap-vue';

export default {
	name: 'CardModal',
	props: [
		'cardData',
		'cardId',
		'cardUrl'
	],
	components: {
		CardModalArcanaData,
		'b-modal': BModal,
		'b-tabs': BTabs,
		'b-tab': BTab
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

.card-modal__content {
	padding: 0 15px 10px;;
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
</style>
