const templates = {
	INDIVIDUAL: {
		id: 'INDIVIDUAL',
		name: 'Individual',
		cards: {
			1: 'A core <i>Characteristic</i> of the individual.',
			2: 'Something from the <i>Past</i> that shaped the individual.',
			3: 'An <i>Ambition</i> that drives the individual.',
			4: 'The individual’s greatest <i>Weakness</i>.',
			5: 'The individual’s greatest <i>Strength</i>.'
		}
	},
	LOCATION: {
		id: 'LOCATION',
		name: 'Location',
		cards: {
			1: 'The <i>Type</i> of location.',
			2: 'Something about the location’s <i>Past</i>.',
			3: 'An unexpected or quirky <i>Trait</i>.',
			4: 'A <i>Weakness</i> at the location, which might be exploited.',
			5: 'Something that makes the location <i>Exceptional</i>.'
		},
	},
	CULT: {
		id: 'CULT',
		name: 'Cult',
		cards: {
			1: 'What Power/Ambition <i>Drives</i> the cult.',
			2: 'An important thing about the cult’s <i>History</i>.',
			3: 'What does the cult wish to <i>Accomplish</i>.',
			4: 'What is the cult’s <i>Weakness</i>, such as enemies.',
			5: 'What is the cult’s unexpected <i>Resource</i>.'
		}
	},
	PLOT: {
		id: 'PLOT',
		name: 'Plot',
		cards: {
			1: 'What is the <i>Power</i> behind the plot.',
			2: 'What <i>Caused</i> the plot.',
			3: 'What is the <i>Next Move</i> in the plot.',
			4: 'What power <i>Opposes</i> the plot.',
			5: 'What power <i>Supports</i> the plot.'
		}
	},
	CREATURE: {
		id: 'CREATURE',
		name: 'Creature',
		cards: {
			1: 'From what background does the creature <i>Originate</i>.',
			2: 'From where can you find <i>Information</i> about the creature.',
			3: 'What <i>Drives</i> the creature.',
			4: 'What is the creature’s <i>Weakness</i>.',
			5: 'What is the creature’s <i>Strength</i>.'
		}
	},
	ARTIFACT: {
		id: 'ARTIFACT',
		name: 'Artifact',
		cards: {
			1: 'From where does the Artifact <i>Originate</i>.',
			2: 'Who else is <i>Looking</i> for It.',
			3: 'What are the <i>Dangers</i> in using it.',
			4: 'What is its <i>Primary Power</i>.',
			5: 'What is its <i>Secondary Power</i>.'
		}
	}
};

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
