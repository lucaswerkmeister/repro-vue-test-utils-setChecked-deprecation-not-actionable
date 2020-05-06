const { createLocalVue, mount } = require('@vue/test-utils');

test('setChecked', () => {
	const localVue = createLocalVue();
	const MyCheck = localVue.component('MyCheck', { template: '<input type=checkbox>' })
	const wrapper = mount(MyCheck, { localVue }).find('input');
	return wrapper.setChecked(true);
});

test('setValue', () => {
	const localVue = createLocalVue();
	const MyCheck = localVue.component('MyCheck', { template: '<input type=checkbox>' })
	const wrapper = mount(MyCheck, { localVue }).find('input');
	return wrapper.setValue(true);
});
