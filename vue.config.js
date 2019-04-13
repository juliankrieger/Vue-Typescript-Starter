const path = require('path');

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `
                    @import "@/scss/_variables.scss";
                    @import "@/scss/_mixins.scss";
        `
			}
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
			}
		}
	}
};