define(["coreViews/componentView", "coreJS/adapt"], function(ComponentView, Adapt) {

	var clickPlay = ComponentView.extend({


		preRender: function() {
			

             // Checks to see if the blank should be reset on revisit
             this.checkIfResetOnRevisit();



         },
         postRender: function() {
         	this.setReadyStatus();
         	this.$('.component-inner').on('inview', _.bind(this.inview, this));
            var myvideo = document.getElementById('myvideo'),
            playbutton = document.getElementById('playme'),
            jumplink = document.getElementById('jump');
            jumplink2 = document.getElementById('jump2');
            jumplink3 = document.getElementById('jump3');
            jumplink4 = document.getElementById('jump4');
            jumplink5 = document.getElementById('jump5');
            jumplink6 = document.getElementById('jump6');
            jumplink7 = document.getElementById('jump7');


            jumplink.addEventListener("click", function (event) {
                event.preventDefault();
                console.log(myvideo);
                myvideo.play();
                myvideo.pause();
                myvideo.currentTime = 1;
                myvideo.play();
            }, false);

            jumplink2.addEventListener("click", function (event) {
                event.preventDefault();
                myvideo.play();
                myvideo.pause();
                myvideo.currentTime = 2;
                myvideo.play();
            }, false);


            jumplink3.addEventListener("click", function (event) {
                event.preventDefault();
                console.log(myvideo);
                myvideo.play();
                myvideo.pause();
                myvideo.currentTime = 3;
                myvideo.play();
            }, false);

            jumplink4.addEventListener("click", function (event) {
                event.preventDefault();
                myvideo.play();
                myvideo.pause();
                myvideo.currentTime = 4;
                myvideo.play();
            }, false);

            jumplink5.addEventListener("click", function (event) {
                event.preventDefault();
                myvideo.play();
                myvideo.pause();
                myvideo.currentTime = 5;
                myvideo.play();
            }, false);

            jumplink6.addEventListener("click", function (event) {
                event.preventDefault();
                myvideo.play();
                myvideo.pause();
                myvideo.currentTime = 6;
                myvideo.play();
            }, false);

            jumplink7.addEventListener("click", function (event) {
                event.preventDefault();
                myvideo.play();
                myvideo.pause();
                myvideo.currentTime = 7;
                myvideo.play();
            }, false);

           // only in to demonstrate video
           
            playbutton.addEventListener("click", function () {
            if (myvideo.paused) {
                myvideo.play();
            } else {
                myvideo.pause();
            }
            }, false);
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