/*

Simple data to HTML binding.

Requires: 

setters/gettings, bind, qSA, getOwnPropertyNames, forEach - basically a decent browser

Arguments:

- obj: this is your data structure that is copied in to the Bind
- mapping: this is a key/value pair of object path to DOM selector

Example:

var data = Bind({
  me: {
    name: "@rem",
    score: 11
  }
}, {
  'me.score': '#score',
  'me.name': '#name'
});

Seen here: http://jsbin.com/uhukab/1/edit

Restrictions:

Only supports simple changes to the object - if you change the structure, then the bindings are lost.

i.e. this won't work:

var data = Bind({...}, {...});

data.me.name = '@leftlogic'; //works
data.me = { // fails
  name: '@rem'
}

*/
var Bind = (function () {
"use strict"; // damn jshint & sublime

var $ = document.querySelectorAll.bind(document),
    forEach = [].forEach;

function extend(target, object, mapping, _path) {
  if (!_path) { _path = []; }
  Object.getOwnPropertyNames(object).forEach(function (key) {
    var value = object[key];
    var path = [].slice.call(_path);
    path.push(key);

    var elements;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      target[key] = extend(target[key] || {}, value, mapping, path);
    } else {
      elements = $(mapping[path.join('.')] || '☺');

      Object.defineProperty(target, key, {
        set: function (v) {
          value = v;
          if (elements) {
            forEach.call(elements, function (element) {
              element.innerHTML = value;
            });
          }
        },
        get: function () {
          return value;
        }
      });

      target[key] = value;
    }
  });
  return target;
}

var Bind = function (obj, mapping) {
  if (!this || this === window) {
    return new Bind(obj, mapping);
  }
  extend(this, obj, mapping);
  return this;
};

return Bind;

})();

