/*
脚本功能：看理想-看见另一种可能+解锁VIP
更新时间：2022.0215
使用声明：此脚本仅供学习、测试与交流！

[rewrite_local]

^https:\/\/api\.vistopia\.com\.cn\/api url script-response-body https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/klx_AS.js

[mitm] 

hostname = api.vistopia.com.cn

*******************************/

var _0x4b90 = [
	'wqvCsMKOBcONBcK6w57CosOrwo8lwr/DmMKHwqLCuXvCrwzDpw==',
	'XE1xw7bCqsKpLxpWDBEKwrA=',
	'w7x0w4QNJ8KNOQ==',
	'w4PCusK6X8KBPcK4',
	'DEFyw4XCp8KlKQ==',
	'woLDt2fDpsOJCww=',
	'wqBwwpMdwqHCgmE=',
	'w7x0w4cOOsKTKWNDXCc=',
	'wpchw7MWwrDDg8K0XF/Crkd3UMOcw5QkwpYLGhl0wqPDlMOedC0qw7vCjQ==',
	'w7bDsmwzNnslw5hNOsKqw7oIa8O/w4ARwpzDkcOVwpbCoU/CmsOxK0ZyCh4=',
	'ZjfDvRA=',
	'dcKINFfDm8ONwqA=',
	'w5DCrAtywqwNSMODGwLCh8OnVsOB5b655Liz5pi/6KWq6ZaVUA==',
	'OTjCkcO6OUHDlcKCCVgFw4jCs8KAw6V2ak02PSU=',
	'w5bDsTTDqcO1UEg=',
	'ITYGwozCrj3ClcKLGcOvw7bDv0rCtcKJw47DkcOcwpwHwqzDtXs5w41S',
	'wrNlwpMdwrk=',
	'wpotwrbDsg=='
];
(function (_0x3f5b9d, _0x4b9075) {
	var _0x167c76 = function (_0x51b1c7) {
		while (--_0x51b1c7) {
			_0x3f5b9d['push'](_0x3f5b9d['shift']());
		}
	};
	var _0x9e5eea = function () {
		var _0x53e449 = {
			'data': {
				'key': 'cookie',
				'value': 'timeout'
			},
			'setCookie': function (_0x1dcfc8, _0x107b94, _0x18c4a3, _0x344926) {
				_0x344926 = _0x344926 || {};
				var _0x1ce0f8 = _0x107b94 + '=' + _0x18c4a3;
				var _0x576650 = 0;
				for (var _0x27dacb = 0, _0x287afb = _0x1dcfc8['length']; _0x27dacb < _0x287afb; _0x27dacb++) {
					var _0x1a14e2 = _0x1dcfc8[_0x27dacb];
					_0x1ce0f8 += '; ' + _0x1a14e2;
					var _0x513d12 = _0x1dcfc8[_0x1a14e2];
					_0x1dcfc8['push'](_0x513d12);
					_0x287afb = _0x1dcfc8['length'];
					if (_0x513d12 !== !![]) {
						_0x1ce0f8 += '=' + _0x513d12;
					}
				}
				_0x344926['cookie'] = _0x1ce0f8;
			},
			'removeCookie': function () {
				return 'dev';
			},
			'getCookie': function (_0x338c4f, _0x1f3ab8) {
				_0x338c4f = _0x338c4f || function (_0x54c007) {
					return _0x54c007;
				};
				var _0x57f882 = _0x338c4f(new RegExp('(?:^|; )' + _0x1f3ab8['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
				var _0x2c0ce4 = function (_0x1c7098, _0x157384) {
					_0x1c7098(++_0x157384);
				};
				_0x2c0ce4(_0x167c76, _0x4b9075);
				return _0x57f882 ? decodeURIComponent(_0x57f882[1]) : undefined;
			}
		};
		var _0x433a22 = function () {
			var _0x13134d = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|"].+[\'|"];? *}');
			return _0x13134d['test'](_0x53e449['removeCookie']['toString']());
		};
		_0x53e449['updateCookie'] = _0x433a22;
		var _0x134c01 = '';
		var _0x4c2248 = _0x53e449['updateCookie']();
		if (!_0x4c2248) {
			_0x53e449['setCookie'](['*'], 'counter', 1);
		} else if (_0x4c2248) {
			_0x134c01 = _0x53e449['getCookie'](null, 'counter');
		} else {
			_0x53e449['removeCookie']();
		}
	};
	_0x9e5eea();
}(_0x4b90, 366));
var _0x167c = function (_0x3f5b9d, _0x4b9075) {
	_0x3f5b9d = _0x3f5b9d - 0;
	var _0x167c76 = _0x4b90[_0x3f5b9d];
	if (_0x167c['KpsyCd'] === undefined) {
		(function () {
			var _0x53e449 = function () {
				var _0x4c2248;
				try {
					_0x4c2248 = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
				} catch (_0x1dcfc8) {
					_0x4c2248 = window;
				}
				return _0x4c2248;
			};
			var _0x433a22 = _0x53e449();
			var _0x134c01 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			_0x433a22['atob'] || (_0x433a22['atob'] = function (_0x107b94) {
				var _0x18c4a3 = String(_0x107b94)['replace'](/=+$/, '');
				var _0x344926 = '';
				for (var _0x1ce0f8 = 0, _0x576650, _0x27dacb, _0x287afb = 0; _0x27dacb = _0x18c4a3['charAt'](_0x287afb++); ~_0x27dacb && (_0x576650 = _0x1ce0f8 % 4 ? _0x576650 * 64 + _0x27dacb : _0x27dacb, _0x1ce0f8++ % 4) ? _0x344926 += String['fromCharCode'](255 & _0x576650 >> (-2 * _0x1ce0f8 & 6)) : 0) {
					_0x27dacb = _0x134c01['indexOf'](_0x27dacb);
				}
				return _0x344926;
			});
		}());
		var _0x51b1c7 = function (_0x1a14e2, _0x513d12) {
			var _0x338c4f = [], _0x1f3ab8 = 0, _0x57f882, _0x2c0ce4 = '', _0x54c007 = '';
			_0x1a14e2 = atob(_0x1a14e2);
			for (var _0x157384 = 0, _0x13134d = _0x1a14e2['length']; _0x157384 < _0x13134d; _0x157384++) {
				_0x54c007 += '%' + ('00' + _0x1a14e2['charCodeAt'](_0x157384)['toString'](16))['slice'](-2);
			}
			_0x1a14e2 = decodeURIComponent(_0x54c007);
			var _0x1c7098;
			for (_0x1c7098 = 0; _0x1c7098 < 256; _0x1c7098++) {
				_0x338c4f[_0x1c7098] = _0x1c7098;
			}
			for (_0x1c7098 = 0; _0x1c7098 < 256; _0x1c7098++) {
				_0x1f3ab8 = (_0x1f3ab8 + _0x338c4f[_0x1c7098] + _0x513d12['charCodeAt'](_0x1c7098 % _0x513d12['length'])) % 256;
				_0x57f882 = _0x338c4f[_0x1c7098];
				_0x338c4f[_0x1c7098] = _0x338c4f[_0x1f3ab8];
				_0x338c4f[_0x1f3ab8] = _0x57f882;
			}
			_0x1c7098 = 0;
			_0x1f3ab8 = 0;
			for (var _0x58a354 = 0; _0x58a354 < _0x1a14e2['length']; _0x58a354++) {
				_0x1c7098 = (_0x1c7098 + 1) % 256;
				_0x1f3ab8 = (_0x1f3ab8 + _0x338c4f[_0x1c7098]) % 256;
				_0x57f882 = _0x338c4f[_0x1c7098];
				_0x338c4f[_0x1c7098] = _0x338c4f[_0x1f3ab8];
				_0x338c4f[_0x1f3ab8] = _0x57f882;
				_0x2c0ce4 += String['fromCharCode'](_0x1a14e2['charCodeAt'](_0x58a354) ^ _0x338c4f[(_0x338c4f[_0x1c7098] + _0x338c4f[_0x1f3ab8]) % 256]);
			}
			return _0x2c0ce4;
		};
		_0x167c['bkHhBv'] = _0x51b1c7;
		_0x167c['eytHib'] = {};
		_0x167c['KpsyCd'] = !![];
	}
	var _0x9e5eea = _0x167c['eytHib'][_0x3f5b9d];
	if (_0x9e5eea === undefined) {
		if (_0x167c['LkLsaz'] === undefined) {
			var _0x1501fc = function (_0x468a5e) {
				this['JXbwSZ'] = _0x468a5e;
				this['Pgmbnk'] = [
					1,
					0,
					0
				];
				this['Zstnrr'] = function () {
					return 'newState';
				};
				this['TaPcOM'] = '\\w+ *\\(\\) *{\\w+ *';
				this['tXYvcp'] = '[\'|"].+[\'|"];? *}';
			};
			_0x1501fc['prototype']['ZqyjWt'] = function () {
				var _0xc57b3a = new RegExp(this['TaPcOM'] + this['tXYvcp']);
				var _0x53d7f5 = _0xc57b3a['test'](this['Zstnrr']['toString']()) ? --this['Pgmbnk'][1] : --this['Pgmbnk'][0];
				return this['YFuHij'](_0x53d7f5);
			};
			_0x1501fc['prototype']['YFuHij'] = function (_0x361c41) {
				if (!Boolean(~_0x361c41)) {
					return _0x361c41;
				}
				return this['hXYboj'](this['JXbwSZ']);
			};
			_0x1501fc['prototype']['hXYboj'] = function (_0x1bdb9d) {
				for (var _0x54e39c = 0, _0x55d84e = this['Pgmbnk']['length']; _0x54e39c < _0x55d84e; _0x54e39c++) {
					this['Pgmbnk']['push'](Math['round'](Math['random']()));
					_0x55d84e = this['Pgmbnk']['length'];
				}
				return _0x1bdb9d(this['Pgmbnk'][0]);
			};
			new _0x1501fc(_0x167c)['ZqyjWt']();
			_0x167c['LkLsaz'] = !![];
		}
		_0x167c76 = _0x167c['bkHhBv'](_0x167c76, _0x4b9075);
		_0x167c['eytHib'][_0x3f5b9d] = _0x167c76;
	} else {
		_0x167c76 = _0x9e5eea;
	}
	return _0x167c76;
};
var _0x1a1f4e = function () {
	var _0x43672c = !![];
	return function (_0x3bf19a, _0x504b7e) {
		var _0x17363d = _0x43672c ? function () {
			if (_0x504b7e) {
				var _0x40663c = _0x504b7e[_0x167c('0xa', 'r*5(')](_0x3bf19a, arguments);
				_0x504b7e = null;
				return _0x40663c;
			}
		} : function () {
		};
		_0x43672c = ![];
		return _0x17363d;
	};
}();
var _0x126b02 = _0x1a1f4e(this, function () {
	var _0x2c0b16 = function () {
		var _0x517c84 = _0x2c0b16[_0x167c('0x1', 'jtYF')](_0x167c('0x7', 'eCcQ'))()[_0x167c('0xe', 'jtYF')]('^([^ ]+( +[^ ]+)+)+[^ ]}');
		return !_0x517c84[_0x167c('0xb', 't(no')](_0x126b02);
	};
	return _0x2c0b16();
});
_0x126b02();
var _0x5d9ffc = $response[_0x167c('0x4', 'o[Yb')][_0x167c('0x8', 'V^Qv')](/"is_lock":"\d"/g, _0x167c('0xd', 'En)8'))['replace'](/"vip_type":".*?"/g, _0x167c('0x2', '@AAs'))[_0x167c('0x5', 'ziaX')](/"unread_messages":".*?"/g, _0x167c('0xc', '6tJr'))[_0x167c('0x11', 'Y)J$')](/"vip_expire_date":".*?"/g, _0x167c('0x3', 'SKz2'))['replace'](/"vip_left_days":".*?"/g, '"vip_left_days":"1"')[_0x167c('0x10', 'En)8')](/"equity_txt":".*?"/g, '"equity_txt":"鸟人专用"')[_0x167c('0xf', 's0rt')](/"expire_time":".*?"/g, _0x167c('0x9', 'jl9H'))[_0x167c('0x0', 'r*5(')](/"vip_valide":".*?"/g, _0x167c('0x6', 'WnHN'));
$done({ 'body': _0x5d9ffc });