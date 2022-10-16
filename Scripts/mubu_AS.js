/*
脚本功能：幕布-大纲笔记+解锁VIP
更新时间：2022.1011
使用声明：此脚本仅供学习、测试与交流！

[rewrite_local]

^https:\/\/api2.mubu.com\/v3\/api\/user/* url script-response-body https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/mubu_AS.js

[mitm] 

hostname = api2.mubu.com

*******************************/
const _0x21b1 = [
	'IW59wpLCk0NNw5XDocKZFcOwwrxiFsKhasKxFyNqwrrCpMK+',
	'wrUONMO9',
	'w4c3AMOK',
	'w5Bqw6IVfw==',
	'w6jCncKWw5F0',
	'L8OPw6VbwrbCkcOu',
	'5b6b5Lqv5puG6Kas6ZSP',
	'wohoMsKgwq0d',
	'w6t2TX1Uw4DClsKCMw==',
	'w6PDgVQl',
	'wqrDosO+DA==',
	'Gil4TsOtw6nDmMOk',
	'aG41wqPDmQ==',
	'wrsIKsKFw4M=',
	'wptEw7o8b8OOIQ==',
	'AsKtIVo=',
	'S8ODI8O6',
	'emUnGMOvHw==',
	'5b+u5LuA5pmJ6KWI6ZW2',
	'wrQdMsOzwpQ=',
	'CsOrW8Kg',
	'w5zCvcOzD2M3wqnCscOJSDo=',
	'TC/DsMKb',
	'IcORK8K/wqZjHsK8KB0UwrYPwrQbXcKLwqrCkFln'
];
(function (_0x5a22ba, _0x21b1bd) {
	const _0x30316e = function (_0x15166c) {
		while (--_0x15166c) {
			_0x5a22ba['push'](_0x5a22ba['shift']());
		}
	};
	const _0x375217 = function () {
		const _0x106d8c = {
			'data': {
				'key': 'cookie',
				'value': 'timeout'
			},
			'setCookie': function (_0xfbc5d3, _0x212d6c, _0x438211, _0x3e69c6) {
				_0x3e69c6 = _0x3e69c6 || {};
				let _0x1446db = _0x212d6c + '=' + _0x438211;
				let _0x27e96a = 0;
				for (let _0x28a2ec = 0, _0x2491b9 = _0xfbc5d3['length']; _0x28a2ec < _0x2491b9; _0x28a2ec++) {
					const _0x38a0aa = _0xfbc5d3[_0x28a2ec];
					_0x1446db += '; ' + _0x38a0aa;
					const _0x510ccc = _0xfbc5d3[_0x38a0aa];
					_0xfbc5d3['push'](_0x510ccc);
					_0x2491b9 = _0xfbc5d3['length'];
					if (_0x510ccc !== !![]) {
						_0x1446db += '=' + _0x510ccc;
					}
				}
				_0x3e69c6['cookie'] = _0x1446db;
			},
			'removeCookie': function () {
				return 'dev';
			},
			'getCookie': function (_0x4ccc6d, _0x1765f3) {
				_0x4ccc6d = _0x4ccc6d || function (_0x3c0464) {
					return _0x3c0464;
				};
				const _0x1a7f7e = _0x4ccc6d(new RegExp('(?:^|; )' + _0x1765f3['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
				const _0x3bcaa7 = function (_0xd6f287, _0x257e52) {
					_0xd6f287(++_0x257e52);
				};
				_0x3bcaa7(_0x30316e, _0x21b1bd);
				return _0x1a7f7e ? decodeURIComponent(_0x1a7f7e[1]) : undefined;
			}
		};
		const _0x2a8a01 = function () {
			const _0x20802a = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|"].+[\'|"];? *}');
			return _0x20802a['test'](_0x106d8c['removeCookie']['toString']());
		};
		_0x106d8c['updateCookie'] = _0x2a8a01;
		let _0xce004f = '';
		const _0x203d96 = _0x106d8c['updateCookie']();
		if (!_0x203d96) {
			_0x106d8c['setCookie'](['*'], 'counter', 1);
		} else if (_0x203d96) {
			_0xce004f = _0x106d8c['getCookie'](null, 'counter');
		} else {
			_0x106d8c['removeCookie']();
		}
	};
	_0x375217();
}(_0x21b1, 478));
const _0x3031 = function (_0x5a22ba, _0x21b1bd) {
	_0x5a22ba = _0x5a22ba - 0;
	let _0x30316e = _0x21b1[_0x5a22ba];
	if (_0x3031['BlGRzy'] === undefined) {
		(function () {
			const _0x106d8c = function () {
				let _0x203d96;
				try {
					_0x203d96 = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
				} catch (_0xfbc5d3) {
					_0x203d96 = window;
				}
				return _0x203d96;
			};
			const _0x2a8a01 = _0x106d8c();
			const _0xce004f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			_0x2a8a01['atob'] || (_0x2a8a01['atob'] = function (_0x212d6c) {
				const _0x438211 = String(_0x212d6c)['replace'](/=+$/, '');
				let _0x3e69c6 = '';
				for (let _0x1446db = 0, _0x27e96a, _0x28a2ec, _0x2491b9 = 0; _0x28a2ec = _0x438211['charAt'](_0x2491b9++); ~_0x28a2ec && (_0x27e96a = _0x1446db % 4 ? _0x27e96a * 64 + _0x28a2ec : _0x28a2ec, _0x1446db++ % 4) ? _0x3e69c6 += String['fromCharCode'](255 & _0x27e96a >> (-2 * _0x1446db & 6)) : 0) {
					_0x28a2ec = _0xce004f['indexOf'](_0x28a2ec);
				}
				return _0x3e69c6;
			});
		}());
		const _0x15166c = function (_0x38a0aa, _0x510ccc) {
			let _0x4ccc6d = [], _0x1765f3 = 0, _0x1a7f7e, _0x3bcaa7 = '', _0x3c0464 = '';
			_0x38a0aa = atob(_0x38a0aa);
			for (let _0x257e52 = 0, _0x20802a = _0x38a0aa['length']; _0x257e52 < _0x20802a; _0x257e52++) {
				_0x3c0464 += '%' + ('00' + _0x38a0aa['charCodeAt'](_0x257e52)['toString'](16))['slice'](-2);
			}
			_0x38a0aa = decodeURIComponent(_0x3c0464);
			let _0xd6f287;
			for (_0xd6f287 = 0; _0xd6f287 < 256; _0xd6f287++) {
				_0x4ccc6d[_0xd6f287] = _0xd6f287;
			}
			for (_0xd6f287 = 0; _0xd6f287 < 256; _0xd6f287++) {
				_0x1765f3 = (_0x1765f3 + _0x4ccc6d[_0xd6f287] + _0x510ccc['charCodeAt'](_0xd6f287 % _0x510ccc['length'])) % 256;
				_0x1a7f7e = _0x4ccc6d[_0xd6f287];
				_0x4ccc6d[_0xd6f287] = _0x4ccc6d[_0x1765f3];
				_0x4ccc6d[_0x1765f3] = _0x1a7f7e;
			}
			_0xd6f287 = 0;
			_0x1765f3 = 0;
			for (let _0x179203 = 0; _0x179203 < _0x38a0aa['length']; _0x179203++) {
				_0xd6f287 = (_0xd6f287 + 1) % 256;
				_0x1765f3 = (_0x1765f3 + _0x4ccc6d[_0xd6f287]) % 256;
				_0x1a7f7e = _0x4ccc6d[_0xd6f287];
				_0x4ccc6d[_0xd6f287] = _0x4ccc6d[_0x1765f3];
				_0x4ccc6d[_0x1765f3] = _0x1a7f7e;
				_0x3bcaa7 += String['fromCharCode'](_0x38a0aa['charCodeAt'](_0x179203) ^ _0x4ccc6d[(_0x4ccc6d[_0xd6f287] + _0x4ccc6d[_0x1765f3]) % 256]);
			}
			return _0x3bcaa7;
		};
		_0x3031['DBEcPS'] = _0x15166c;
		_0x3031['ffoYxy'] = {};
		_0x3031['BlGRzy'] = !![];
	}
	const _0x375217 = _0x3031['ffoYxy'][_0x5a22ba];
	if (_0x375217 === undefined) {
		if (_0x3031['yokuEk'] === undefined) {
			const _0x44a814 = function (_0x5dc9a6) {
				this['wVvNAB'] = _0x5dc9a6;
				this['UdsCbt'] = [
					1,
					0,
					0
				];
				this['yWkRzZ'] = function () {
					return 'newState';
				};
				this['PMgEAn'] = '\\w+ *\\(\\) *{\\w+ *';
				this['awPLoM'] = '[\'|"].+[\'|"];? *}';
			};
			_0x44a814['prototype']['LEKhco'] = function () {
				const _0x38564b = new RegExp(this['PMgEAn'] + this['awPLoM']);
				const _0x5708ff = _0x38564b['test'](this['yWkRzZ']['toString']()) ? --this['UdsCbt'][1] : --this['UdsCbt'][0];
				return this['ExISES'](_0x5708ff);
			};
			_0x44a814['prototype']['ExISES'] = function (_0x290b06) {
				if (!Boolean(~_0x290b06)) {
					return _0x290b06;
				}
				return this['sHxdpl'](this['wVvNAB']);
			};
			_0x44a814['prototype']['sHxdpl'] = function (_0x30a64b) {
				for (let _0x87bb0a = 0, _0x4fda07 = this['UdsCbt']['length']; _0x87bb0a < _0x4fda07; _0x87bb0a++) {
					this['UdsCbt']['push'](Math['round'](Math['random']()));
					_0x4fda07 = this['UdsCbt']['length'];
				}
				return _0x30a64b(this['UdsCbt'][0]);
			};
			new _0x44a814(_0x3031)['LEKhco']();
			_0x3031['yokuEk'] = !![];
		}
		_0x30316e = _0x3031['DBEcPS'](_0x30316e, _0x21b1bd);
		_0x3031['ffoYxy'][_0x5a22ba] = _0x30316e;
	} else {
		_0x30316e = _0x375217;
	}
	return _0x30316e;
};
const _0x1701a8 = function () {
	let _0x247636 = !![];
	return function (_0x553bb0, _0x3d68d4) {
		const _0x1f656b = _0x247636 ? function () {
			if (_0x3d68d4) {
				const _0x6406d7 = _0x3d68d4[_0x3031('0x6', 'L0My')](_0x553bb0, arguments);
				_0x3d68d4 = null;
				return _0x6406d7;
			}
		} : function () {
		};
		_0x247636 = ![];
		return _0x1f656b;
	};
}();
const _0x5c2398 = _0x1701a8(this, function () {
	const _0x483813 = function () {
		const _0xf64b4 = _0x483813[_0x3031('0x17', 'UmuU')](_0x3031('0x1', 'NW$6'))()[_0x3031('0x7', '!KWw')](_0x3031('0x2', '3ay5'));
		return !_0xf64b4[_0x3031('0xb', 'R9zC')](_0x5c2398);
	};
	return _0x483813();
});
_0x5c2398();
let _0x24b339 = $response['body'];
console['log'](_0x24b339);
try {
	let _0x57ad26 = JSON[_0x3031('0xf', 'MRu3')](_0x24b339);
	if (_0x57ad26[_0x3031('0x16', 'Yvyp')] == 0 && _0x57ad26[_0x3031('0x0', 'tH*#')]) {
		_0x57ad26[_0x3031('0x3', 'V[xb')][_0x3031('0x13', 'AFDK')] = !![];
		_0x57ad26[_0x3031('0x11', '%ZLo')][_0x3031('0xe', 'Pc)C')] = 1;
		_0x57ad26[_0x3031('0xc', 'B[PB')]['vipEndDate'] = _0x3031('0xd', 'DyvH');
//		_0x57ad26[_0x3031('0x12', '*dxB')]['name'] = _0x3031('0x8', 'G@OH');
//	_0x57ad26[_0x3031('0x4', 'vzL0')][_0x3031('0x9', 'q3tl')] = _0x3031('0x14', '8ez#');
		_0x24b339 = JSON[_0x3031('0xa', 'ka&W')](_0x57ad26);
	}
} catch (_0x5fc24f) {
	console[_0x3031('0x5', '^J]7')](__name, _0x3031('0x15', 'V[xb'), _0x5fc24f[_0x3031('0x10', 'G@OH')]);
}
$done(_0x24b339);
