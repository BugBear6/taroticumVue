import templates from './templates';

export const getTemplatesList = () => {
	return Object.keys(templates).map(key => {
		return {
			name: templates[key].name,
			id: key
		}
	});
}

export const getTemplateObj = templateId => {
	if (templateId) {
		return Object.assign({}, templates[templateId]);
	}
};
