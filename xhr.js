function request(type, url, opts, callback) {
  var xhr = new XMLHttpRequest(),
      fd;

  if (typeof opts === 'function') {
    callback = opts;
    opts = null;
  }

  xhr.open(type, url);

  if (type === 'POST' && opts) {
    fd = new FormData();

    for (var key in opts) {
      fd.append(key, JSON.stringify(opts[key]));
    }
  }

  xhr.setRequestHeader('x-requested-with', 'XMLHttpRequest');

  xhr.onload = function () {
    callback(null, JSON.parse(xhr.response));
  };

  xhr.onerror = function () {
    callback(true);
  };

  xhr.send(opts ? fd : null);
  
  return xhr;
}

var get = request.bind(this, 'GET');
var post = request.bind(this, 'POST');

// usage: get('/foo', function (err, data) { ... })
