/*
* ShadowIds
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Daryl Hedley <darylhedley@hotmail.com>
*/

define(function(require) {

	var Adapt = require('coreJS/adapt');
	var Backbone = require('backbone');
	
	var ShadowIdView = Backbone.View.extend({

		className: "shadow-ids",

		initialize: function() {
			this.render();
		},

		render: function() {
			var data = this.model.toJSON();
			console.log(data);
	        var template = Handlebars.templates["shadow-ids"];
	        this.$el.html(template(data));
	        return this;
		}

	});

	function addShadowId(view) {
		$('.' + view.model.get('_id')).append(new ShadowIdView({model:view.model}).$el);
	}

	Adapt.on('pageView:postRender articleView:postRender blockView:postRender componentView:postRender', function(view) {
		addShadowId(view);
		view.$el.addClass('shadow-id-container');
	});

})