# Remy's Libraries

This is a dumping ground for little libraries that I've written that serve a specific purpose, but don't weigh in big enough (in my eyes) to warrant an entire github repo. 

The aim will be to include documentation for each either here or in a [library].md file.

# events.js / Events

Only tested in Chrome & IE7, but I have a simple event "on", "fire" system that works but also supports custom events and bubbling.

## Example

    var links = document.getElementsByTagName('a');

    ev(links).on('click', function () {
      alert('clicked!');
      ev(this).fire('remy');
    });

    ev(links).on('remy', function (event) {
      alert('a custom event fired: ' + event.type);
    });
    
# bind.js / Data Binding

Simple data to HTML binding.

## Example

```javascript
var data = Bind({
    me: {
        name: '@rem',
        score: 11
    }
}, {
    'me.score': '#score',
    'me.name': '.username'
});

// updating data object updates the HTML, as the second arg is a data mapping
data.me.score++; // updates #score element
```

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
