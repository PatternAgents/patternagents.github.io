{% comment %}
js for pinterest widget
{% endcomment %}

<!-- pinterest widget script -->
<script type="text/javascript">
(function(d){
  var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
  p.type = 'text/javascript';
  p.async = true;
  p.setAttribute('data-pin-color', 'red');
  p.setAttribute('data-pin-hover', 'true');
  p.src = 'https://assets.pinterest.com/js/pinit.js';
  f.parentNode.insertBefore(p, f);
}(document));
</script>
