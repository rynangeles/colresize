(function($){
    $.fn.colresize = function(options){

        var defaults = {
            column_count        : 0,
            wrapper_class       : 'displayTable',
            wrapper             : this,
            specific_children   : false
        }

        var options = $.extend(defaults,options);

        this.each(function(){

        	options.wrapper.addClass(options.wrapper_class); // main container of divs to be resize

        	wrapper = options.wrapper;

			is_empty = wrapper.is(':empty');

			if(!is_empty){ //check if container is not empty

				var cells           = $(wrapper).children();
                var index_array     = $.makeArray();
                var position_top    = 0;
                
                cells.each(function(index,dom_ele){

                    if(index == cells.length-1){

                        index_array.push(cells.length);

                        position_top = 'stop';

                    }

                    if($(dom_ele).position().top != position_top){

                        if(position_top != 'stop'){

                            index_array.push(index);

                        }

                        var next_count = 0;

                        $.each(index_array, function(i,val){

                            var arr = $.makeArray();

                            if(index_array[i+1]){

                                cells.slice(next_count, index_array[i+1]).each(function(){

                                    arr.push($(this).height());

                                }).css('height', Math.max.apply( Math, arr ));

                                next_count = index_array[i+1];
                            }

                        });
                    }

                    position_top = $(dom_ele).position().top;

                });

                
				
			}

        });

        return options.wrapper;

    }
})(jQuery);
