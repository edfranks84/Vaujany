(function( $ ) {
    $.fn.imageBg = function(options) {
      
      var settings = $.extend({
        // These are the defaults.
        backgroundSize: 'cover', 
        backgroundPosition: '50% 50%'
      }, options );
      
      return this.each(function(){
        var image = $(this).find("img");
        var source = image.attr("src");
        $(this).css({   
          'background-image': 'url(' + source + ')',
          'background-repeat': 'no-repeat',
          'background-size': settings.backgroundSize, 
          'background-position': settings.backgroundPosition
        });
        image.css('display', 'none');
      });
      //return this;
    };
}( jQuery ));