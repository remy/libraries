# Remy's Libraries

This is a dumping ground for little libraries that I've written that serve a specific purpose, but don't weigh in big enough (in my eyes) to warrant an entire github repo. 

The aim will be to include documentation for each either here or in a [library].md file.

# events.js / Events

Only tested in Chrome & IE7, but I have a simple event "on", "fire" system that works but also supports custom events and bubbling.

## Example

```javascript
var links = document.getElementsByTagName('a');

ev(links).on('click', function () {
  alert('clicked!');
  ev(this).fire('remy');
});

ev(links).on('remy', function (event) {
  alert('a custom event fired: ' + event.type);
});
```
    
# bind.js / Data Binding

bind.js used to live here, but I've moved it to it's own repo: [https://github.com/remy/bind](https://github.com/remy/bind).

# xhr.js / XHR

Basic XHR with JSON and error handling.

## Example

```javascript
var xhr = get('/status', function (err, status) {
    if (err) {
        // something went wrong
        return;
    }
    
    console.log('The current status is: ' + status);
});
```
