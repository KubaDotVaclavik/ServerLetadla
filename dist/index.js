'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _const = require('./const');

var CONST = _interopRequireWildcard(_const);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

var router = _express2.default.Router();

router.get('/', function (req, res) {
    res.json({ mess: 'trololo' });
});

app.use(router);
app.listen(CONST.PORT);
console.log('App listening on port: ' + CONST.PORT);