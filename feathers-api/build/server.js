"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var feathers = require('@feathersjs/feathers');

var express = require('@feathersjs/express'); // const { message } = require('./firebase');


var app = express(feathers());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.configure(express.rest());
app.use(express.errorHandler());

var Messages =
/*#__PURE__*/
function () {
  function Messages() {
    _classCallCheck(this, Messages);

    this.messages = [{
      id: 1,
      message: 'hello'
    }];
  }

  _createClass(Messages, [{
    key: "find",
    value: function () {
      var _find = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(params) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function find(_x) {
        return _find.apply(this, arguments);
      }

      return find;
    }()
  }]);

  return Messages;
}();

app.use('messages', new Messages());
app.use(express.errorHandler());
var server = app.listen(3030);
server.on('listening', function () {
  return console.log('Feathers REST API started at http://localhost:3030');
});