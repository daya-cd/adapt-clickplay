define(["coreViews/componentView", "coreJS/adapt"], function(ComponentView, Adapt) {

	var clickPlay = ComponentView.extend({


		preRender: function() {
			

             // Checks to see if the blank should be reset on revisit
             this.checkIfResetOnRevisit();



         },
         postRender: function() {
         	this.setReadyStatus();
         	this.$('.component-inner').on('inview', _.bind(this.inview, this));
            
         },

        // Used to check if the blank should reset on revisit
        checkIfResetOnRevisit: function() {
        	var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled set defaults
            if (isResetOnRevisit) {
            	this.model.reset(isResetOnRevisit);
            }
        },

        inview: function(event, visible, visiblePartX, visiblePartY) {
            
     }



 });
	Adapt.register('clickplay', clickPlay);

	return clickPlay;

});