# Micro Libraries

Very early playing with micro libraries to perform a single specific job.

# Events

Only tested in Chrome & IE7, but I have a simple event "on", "fire" system that works but also supports custom events and bubbling.

## Example

<pre><code>var a = document.getElementsByTagName('a');

ev(a[0]).on('click', function () {
  alert('clicked!');
  Event(a[1]).fire('remy');
});

ev(a[1]).on('remy', function (event) {
  alert('a custom event fired: ' + event.type);
});</code></pre>