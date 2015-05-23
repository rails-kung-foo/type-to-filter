(function( $ ) {
  $.fn.typeToFilter = function(options){
    // default options
    var settings = $.extend({
          zeroResultMessage: '... can not be found!'
        }, options );

    // initialize variables
    var container = this,
    inputField = container.find('input'),
    elelemtsToSearch = container.find('li'),
    noResult = $(document.createElement('li')).text(settings.zeroResultMessage).addClass('noResults');

    // Save current value for the reset function
    elelemtsToSearch.find('a').each(function(){
      $(this).data('origin-value', $(this).text());
    });

    // Empty the search field if origin value present
    inputField.focusin(function(e){
      var dis = $(this);
      if(dis.val() == dis.data('origin-value'))
        dis.val('');
    });

    // Paste the origin value if field is empty
    inputField.focusout(function(e){
      var dis = $(this);
      if(dis.val() == '')
        dis.val(dis.data('origin-value'));
    });

    // Reset text (removes bold)
    var resetText = function(dis){
      dis.text(dis.data('origin-value'));
    };

    // Filters list with given value
    inputField.keyup(function(){
      var inputFieldVal = $(this).val().toLowerCase(),
          regex = RegExp(inputFieldVal, 'gi');

      // Removes 'No result' message
      container.find('ul .noResults').remove();

      if(inputFieldVal == ''){
        // Reset li and make it visible and remove bold
        elelemtsToSearch.filter('.hidden').removeClass('hidden')
        .end().find('a').each(function(){
          resetText($(this));
        });

      }else{
        // Filter elements for searchword
        elelemtsToSearch.children('a').each(function(){
          var dis   = $(this),
              aText = dis.text().toLowerCase();

          resetText(dis);

          // Main function to hide or bold the text
          if(regex.test(aText)){
            dis.parent().removeClass('hidden');
            dis.html(function(){
                return $(this).text().replace(regex,'<b>$&</b>');
            });
          }else{
            dis.parent().addClass('hidden');
          }
        });

        // Display result message if enabled
        if(!settings.zeroResultMessage)
          return false;

        // Display no result message
        if(elelemtsToSearch.filter(':visible').length == 0)
          container.find('ul').append(noResult.clone());
      }

    });
    // plugin chainable
    return this;
  };
}( jQuery ));
