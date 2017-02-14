"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue(event) {
    _classCallCheck(this, Queue);

    this.concurrency = 1;
    this.running = 0;
    this.queue = [];
    this.Event = event;
  }

  _createClass(Queue, [{
    key: "set",
    value: function set(args) {
      Object.assign(this, args);
      return this;
    }
  }, {
    key: "push",
    value: function push(task) {
      this.queue.push(task);
      return this;
    }
  }, {
    key: "run",
    value: function run(task) {
      this.queue.push(task);
      this.next();
      return this;
    }
  }, {
    key: "next",
    value: function next() {
      var _this = this;

      while (this.running < this.concurrency && this.queue.length) {
        var task = this.queue.shift();
        task(this, function () {
          _this.running--;
          _this.next();
        });
        this.running++;
      }
    }
  }]);

  return Queue;
}();

exports.default = Queue;