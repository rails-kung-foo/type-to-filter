(function( $ ) {
  $.fn.typeToFilter = function(options){
    // default options
    var settings = $.extend({
          zeroResultMessage: '... can not be found!'
        }, options );

    // initialize variables
    var container        = this,
        inputField       = container.find('input'),
        elelemtsToSearch = container.find('li'),
        noResult         = $(document.createElement('li')).text(settings.zeroResultMessage).addClass('noResults');

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

    // Filters list with given value
    inputField.keyup(function(){
      var inputFieldVal = $(this).val().toLowerCase();

      container.find('ul .noResults').remove();

      if(inputFieldVal == ''){
        // Reset list
        elelemtsToSearch.filter('.hidden').removeClass('hidden');
      }else{
        // Filter elements for searchword
        elelemtsToSearch.children('a').each(function(){
          var dis   = $(this),
              aText = dis.text().toLowerCase(),
              regex = new RegExp(inputFieldVal, 'i');

          if(regex.test(aText)){
            dis.parent().removeClass('hidden');
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
