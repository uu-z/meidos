"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function () {
  function Message(event) {
    _classCallCheck(this, Message);

    this.messages = {};
    this.event = event;
  }

  _createClass(Message, [{
    key: "off",
    value: function off(name) {
      delete this.messages[name];
      return this;
    }
  }, {
    key: "emit",
    value: function emit(name) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.messages[name] && this.messages[name].forEach(function (callback) {
        return callback.apply(undefined, args);
      });
      return this;
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var topic = this.messages[name];
      if (!topic) {
        this.messages[name] = [];
      }
      this.messages[name].push(callback);
      return this;
    }
  }]);

  return Message;
}();

exports.default = Message;