<template>
	<b-modal
		v-bind:id="templateId"
		class="templates-modal"
		scrollable
		ok-title="Apply"
		cancel-title="Close"
		v-on:ok="applyTemplate(templateData.id)"
		v-bind:title="templateData.name">
			<div class="template-modal__content ">
				<TemplateModalDesc v-bind:templateData="templateData"/>
			</div>
	</b-modal>
</template>

<script>
import { BModal, VBModal, BTab, BTabs } from 'bootstrap-vue';
import { getTemplateObj } from '../helpers/getTemplates';
import TemplateModalDesc from './TemplateModalDesc';

export default {
	name: 'TemplatesModal',
	props: [
		'templateId',
		'applyTemplate'
	],
	data() {
		return {
			templateData: getTemplateObj(this.templateId)
		};
	},
	components: {
		TemplateModalDesc,
		'b-modal': BModal,
		'b-tabs': BTabs,
		'b-tab': BTab
	}
}
</script>

<style>
</style>
