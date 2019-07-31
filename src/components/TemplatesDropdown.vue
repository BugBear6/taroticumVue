<template>
	<span>
		<b-dropdown
			id="templates-dropdown"
			ref="templates-dropdown"
			menu-class="templates-dropdown"
			text="Reading Templates"
			variant="link"
			class="m-md-2">
			 <b-dropdown-text style="width: 360px;">
				<i>Here are the templates of the things you can learn.</i>
			</b-dropdown-text>
			<b-dropdown-divider></b-dropdown-divider>
			<b-dropdown-item
				v-bind:active="!selectedTemplateId">
					<div class="templates-dropdown__item-content">
						None
						<b-button
							pill
							v-if="selectedTemplateId"
							v-on:click.stop="applyTemplate(null)"
							size="sm">Apply</b-button>
					</div>
				</b-dropdown-item>
			<b-dropdown-divider></b-dropdown-divider>
			<b-dropdown-item v-for="(template, index) in templatesList"
				v-bind:key="index"
				v-bind:active="template.id === selectedTemplateId"
				v-b-modal="template.id">
					<div class="templates-dropdown__item-content">
						{{template.name}}
						<b-button
							pill
							variant="primary"
							v-if="selectedTemplateId !== template.id"
							v-on:click.stop="applyTemplate(template.id)"
							size="sm">Apply</b-button>
					</div>
				<TemplatesModal
					v-bind:applyTemplate="applyTemplate"
					v-bind:templateId="template.id" />
			</b-dropdown-item>
		</b-dropdown>
	</span>
</template>

<script>
import TemplatesModal from './TemplatesModal';
import { getTemplatesList } from '../helpers/getTemplates';
import { BDropdown, BDropdownItem, BDropdownDivider, BDropdownText, BButton } from 'bootstrap-vue';

export default {
	name: 'ModeSingle',
	components: {
		TemplatesModal,
		'b-dropdown': BDropdown,
		'b-dropdown-item': BDropdownItem,
		'b-dropdown-divider': BDropdownDivider,
		'b-dropdown-text': BDropdownText,
		'b-button': BButton
	}, 
	data() {
		return {
			templatesList: getTemplatesList(),
			selectedTemplateId: null
		};
	},
	methods: {
		applyTemplate(templateId) {
			// apply templateId in this component
			this.selectedTemplateId = templateId;
			// hide dropdown
			this.$refs['templates-dropdown'].hide(true);
			// broadcast templateId change
			this.$root.$emit('apply-template', templateId)
		}
	}
};
</script>

<style>
.templates-dropdown .b-dropdown-text {
	font-size: 14px;
}
.templates-dropdown__item-content {
	display: flex;
	justify-content: space-between;
}
</style>
