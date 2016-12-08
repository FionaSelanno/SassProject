$(document).ready(function(){
  var $animationElement= $('.animation-element');
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animationElement, function(){
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)){
            $element.addClass('animation');
          } else {
            $element.removeClass('animation');
          }
    });
  };
  $window.on('scroll resize', check_if_in_view); //event handler that listens to the scroll and resize events.
  $window.trigger('scroll'); //trigger the scroll event as soon the DOM is ready
});
