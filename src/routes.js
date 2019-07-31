import ModeSelect from './components/ModeSelect';
import ModeRitual from './components/ModeRitual';
import ModeSingle from './components/ModeSingle';
import ModeGallery from './components/ModeGallery';

export default [{
	path: '*',
	redirect: '/'
}, {
	path: '/',
	name: 'select',
	component: ModeSelect
}, {
	path: '/ritual',
	name: 'ritual',
	component: ModeRitual
}, {
	path: '/single',
	name: 'single',
	component: ModeSingle
}, {
	path: '/gallery',
	name: 'gallery',
	component: ModeGallery
}];
