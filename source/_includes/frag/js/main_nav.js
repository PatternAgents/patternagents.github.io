<!-- toggle menu -->
<script>
  $(function() {
    var $navToggle = $('nav.toggle');
    $navToggle.addClass('collapsed');
    $navToggle.find('h2').bind('click focus', function() {
      // if we want to get fancy, we can animate the max-height here
      $navToggle.toggleClass('collapsed');
    });
  });
</script>
