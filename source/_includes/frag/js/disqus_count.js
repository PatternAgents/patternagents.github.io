{% comment %}
js for disqus comment count widget
{% endcomment %}

<!-- disqus widget script -->
<script type="text/javascript">
  var disqus_shortname = 'patternagents';
  (function () {
    var s = document.createElement('script'); s.async = true;
    s.type = 'text/javascript';
    s.src = 'https://' + disqus_shortname + '.disqus.com/count.js';
    (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
  }());
</script>
