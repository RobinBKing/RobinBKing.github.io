(function($){
  $(function(){

    $('.button-collapse').sideNav({
        // menuWidth: 240, // Default is 240
        // edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );

    $('.button-collapse-volunteer').sideNav({
        menuWidth: 400, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );

    $('.button-collapse-pizza').sideNav({
        menuWidth: 400, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );

    $('.button-collapse-product').sideNav({
        menuWidth: 400, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );

    $('.button-collapse-stori').sideNav({
        menuWidth: 400, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );

    $('.button-collapse-ask').sideNav({
        menuWidth: 400, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );

        $('.button-collapse-about').sideNav({
            menuWidth: 400, // Default is 240
            edge: 'right', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
          }
        );

    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
