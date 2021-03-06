export default {
	install(Vue, featureConfig) {
		Vue.directive('feature', function(el, binding) {
			const featureIsEnabled = featureConfig[binding.arg]['status']
			if (featureIsEnabled) {
				return el
			} else {
				el.style.display = 'none'
			}
		})

		Vue.prototype.$feature = function(feature) {
			const featureIsEnabled = featureConfig[feature]['status']
			return featureIsEnabled
		}
	}
}
