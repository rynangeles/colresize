(function($){
    $.fn.colresize = function(options){

        var defaults = {
            column_count : 2,
            container_children : '.cell',
            wrapper : this
        }

        var options = $.extend(defaults,options);

        this.each(function(){

        	options.wrapper.addClass('perRow_'+options.column_count); // main container of divs to be resize

        	wrapper = options.wrapper;

			is_empty = wrapper.is(':empty');

			if(!is_empty){ //check if container is not empty

				var cells 	= $(wrapper).children(options.container_children);

				for(var i = 0; i < cells.length; i+=options.column_count) {

					var arr = $.makeArray();
					
					cells.slice(i, i+options.column_count).each(function(){

				    	arr.push($(this).height()); // put all height of each div

				    }).css('height', Math.max.apply( Math, arr )); // set height of each div per row base on max value from array

				}
				
			}

        });

        return options.wrapper;

    }
})(jQuery);