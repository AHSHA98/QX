/***2022.1015
脚本功能：flomo 浮墨-卡片笔记+解锁pro
使用声明：此脚本仅供学习、测试与交流！

[rewrite_local]
^https:\/\/flomoapp\.com\/api\/v1\/user\/me url script-response-body https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/flomo_AS.js

[mitm] 
hostname = flomoapp.com

*******************************/

var _0x4c73 = ['wpJtCcOrw44=', 'w6jCgzPCny4bMMOLbCnCnXPDg8OYD8K8GsOXwpHDhMK5D8K0w4E=', 'dMKeQXfChn5Cw5DDlcO5cQ==', 'ZRkjwoDCqwXCkw==', 'w7BddMKJVsOGWQ==', 'w6B5wrUbDyXDgBktwql+JSLDjcKwbRQjw5xtKw==', 'wp5xwo7DqzDDhcOXw6paw7gxw7N9cSNKwo9RwrbCg10=', 'wrZ7ScKj', 'w7AhQTU=', 'w6FXacKVXsOJWQ=='];
(function(_0x34f9f0, _0x4c7391) {
    var _0x2ce1bd = function(_0x1a2550) {
        while (--_0x1a2550) {
            _0x34f9f0['push'](_0x34f9f0['shift']());
        }
    };
    var _0x4f681c = function() {
        var _0x5b8f6a = {
            'data': {
                'key': 'cookie',
                'value': 'timeout'
            },
            'setCookie': function(_0x267607, _0x26d388, _0x18576, _0x44f2ce) {
                _0x44f2ce = _0x44f2ce || {};
                var _0x4b8cbc = _0x26d388 + '=' + _0x18576;
                var _0xa0cc01 = 0x0;
                for (var _0x51b4d0 = 0x0, _0xa941df = _0x267607['length']; _0x51b4d0 < _0xa941df; _0x51b4d0++) {
                    var _0x4214a3 = _0x267607[_0x51b4d0];
                    _0x4b8cbc += '; ' + _0x4214a3;
                    var _0x175da7 = _0x267607[_0x4214a3];
                    _0x267607['push'](_0x175da7);
                    _0xa941df = _0x267607['length'];
                    if (_0x175da7 !== !![]) {
                        _0x4b8cbc += '=' + _0x175da7;
                    }
                }
                _0x44f2ce['cookie'] = _0x4b8cbc;
            },
            'removeCookie': function() {
                return 'dev';
            },
            'getCookie': function(_0x5b9771, _0x383ef5) {
                _0x5b9771 = _0x5b9771 || function(_0x2c26e2) {
                    return _0x2c26e2;
                };
                var _0x4ada18 = _0x5b9771(new RegExp('(?:^|; )' + _0x383ef5['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
                var _0xf3dfa3 = function(_0x48fb30, _0x3cd62e) {
                    _0x48fb30(++_0x3cd62e);
                };
                _0xf3dfa3(_0x2ce1bd, _0x4c7391);
                return _0x4ada18 ? decodeURIComponent(_0x4ada18[0x1]) : undefined;
            }
        };
        var _0x41f608 = function() {
            var _0x5e8021 = new RegExp('\w+ *\(\) *{\w+ *['|"].+['|"];? *}');
            return _0x5e8021['test'](_0x5b8f6a['removeCookie']['toString']());
        };
        _0x5b8f6a['updateCookie'] = _0x41f608;
        var _0x32eb8a = '';
        var _0x3ee152 = _0x5b8f6a['updateCookie']();
        if (!_0x3ee152) {
            _0x5b8f6a['setCookie'](['*'], 'counter', 0x1);
        } else if (_0x3ee152) {
            _0x32eb8a = _0x5b8f6a['getCookie'](null, 'counter');
        } else {
            _0x5b8f6a['removeCookie']();
        }
    };
    _0x4f681c();
}(_0x4c73, 0x142));
var _0x2ce1 = function(_0x34f9f0, _0x4c7391) {
    _0x34f9f0 = _0x34f9f0 - 0x0;
    var _0x2ce1bd = _0x4c73[_0x34f9f0];
    if (_0x2ce1['AelcVp'] === undefined) {
        (function() {
            var _0x5b8f6a = function() {
                var _0x3ee152;
                try {
                    _0x3ee152 = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
                } catch (_0x267607) {
                    _0x3ee152 = window;
                }
                return _0x3ee152;
            };
            var _0x41f608 = _0x5b8f6a();
            var _0x32eb8a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x41f608['atob'] || (_0x41f608['atob'] = function(_0x26d388) {
                var _0x18576 = String(_0x26d388)['replace'](/=+$/, '');
                var _0x44f2ce = '';
                for (var _0x4b8cbc = 0x0, _0xa0cc01, _0x51b4d0, _0xa941df = 0x0; _0x51b4d0 = _0x18576['charAt'](_0xa941df++); ~_0x51b4d0 && (_0xa0cc01 = _0x4b8cbc % 0x4 ? _0xa0cc01 * 0x40 + _0x51b4d0 : _0x51b4d0, _0x4b8cbc++ % 0x4) ? _0x44f2ce += String['fromCharCode'](0xff & _0xa0cc01 >> (-0x2 * _0x4b8cbc & 0x6)) : 0x0) {
                    _0x51b4d0 = _0x32eb8a['indexOf'](_0x51b4d0);
                }
                return _0x44f2ce;
            });
        }());
        var _0x1a2550 = function(_0x4214a3, _0x175da7) {
            var _0x5b9771 = [],
                _0x383ef5 = 0x0,
                _0x4ada18, _0xf3dfa3 = '',
                _0x2c26e2 = '';
            _0x4214a3 = atob(_0x4214a3);
            for (var _0x3cd62e = 0x0, _0x5e8021 = _0x4214a3['length']; _0x3cd62e < _0x5e8021; _0x3cd62e++) {
                _0x2c26e2 += '%' + ('00' + _0x4214a3['charCodeAt'](_0x3cd62e)['toString'](0x10))['slice'](-0x2);
            }
            _0x4214a3 = decodeURIComponent(_0x2c26e2);
            var _0x48fb30;
            for (_0x48fb30 = 0x0; _0x48fb30 < 0x100; _0x48fb30++) {
                _0x5b9771[_0x48fb30] = _0x48fb30;
            }
            for (_0x48fb30 = 0x0; _0x48fb30 < 0x100; _0x48fb30++) {
                _0x383ef5 = (_0x383ef5 + _0x5b9771[_0x48fb30] + _0x175da7['charCodeAt'](_0x48fb30 % _0x175da7['length'])) % 0x100;
                _0x4ada18 = _0x5b9771[_0x48fb30];
                _0x5b9771[_0x48fb30] = _0x5b9771[_0x383ef5];
                _0x5b9771[_0x383ef5] = _0x4ada18;
            }
            _0x48fb30 = 0x0;
            _0x383ef5 = 0x0;
            for (var _0x4bfec0 = 0x0; _0x4bfec0 < _0x4214a3['length']; _0x4bfec0++) {
                _0x48fb30 = (_0x48fb30 + 0x1) % 0x100;
                _0x383ef5 = (_0x383ef5 + _0x5b9771[_0x48fb30]) % 0x100;
                _0x4ada18 = _0x5b9771[_0x48fb30];
                _0x5b9771[_0x48fb30] = _0x5b9771[_0x383ef5];
                _0x5b9771[_0x383ef5] = _0x4ada18;
                _0xf3dfa3 += String['fromCharCode'](_0x4214a3['charCodeAt'](_0x4bfec0) ^ _0x5b9771[(_0x5b9771[_0x48fb30] + _0x5b9771[_0x383ef5]) % 0x100]);
            }
            return _0xf3dfa3;
        };
        _0x2ce1['oPGaFg'] = _0x1a2550;
        _0x2ce1['kMfNwe'] = {};
        _0x2ce1['AelcVp'] = !![];
    }
    var _0x4f681c = _0x2ce1['kMfNwe'][_0x34f9f0];
    if (_0x4f681c === undefined) {
        if (_0x2ce1['vahisR'] === undefined) {
            var _0x25ad91 = function(_0xe3eea2) {
                this['VdXXWp'] = _0xe3eea2;
                this['AUayrB'] = [0x1, 0x0, 0x0];
                this['gAerIM'] = function() {
                    return 'newState';
                };
                this['WWksRf'] = '\w+ *\(\) *{\w+ *';
                this['BTbXGk'] = '['|"].+['|"];? *}';
            };
            _0x25ad91['prototype']['iCNInF'] = function() {
                var _0x2899d1 = new RegExp(this['WWksRf'] + this['BTbXGk']);
                var _0x5d5269 = _0x2899d1['test'](this['gAerIM']['toString']()) ? --this['AUayrB'][0x1] : --this['AUayrB'][0x0];
                return this['ItJkVz'](_0x5d5269);
            };
            _0x25ad91['prototype']['ItJkVz'] = function(_0x1a77e5) {
                if (!Boolean(~_0x1a77e5)) {
                    return _0x1a77e5;
                }
                return this['OvfRfN'](this['VdXXWp']);
            };
            _0x25ad91['prototype']['OvfRfN'] = function(_0x552bd8) {
                for (var _0xf9976d = 0x0, _0x4b3369 = this['AUayrB']['length']; _0xf9976d < _0x4b3369; _0xf9976d++) {
                    this['AUayrB']['push'](Math['round'](Math['random']()));
                    _0x4b3369 = this['AUayrB']['length'];
                }
                return _0x552bd8(this['AUayrB'][0x0]);
            };
            new _0x25ad91(_0x2ce1)['iCNInF']();
            _0x2ce1['vahisR'] = !![];
        }
        _0x2ce1bd = _0x2ce1['oPGaFg'](_0x2ce1bd, _0x4c7391);
        _0x2ce1['kMfNwe'][_0x34f9f0] = _0x2ce1bd;
    } else {
        _0x2ce1bd = _0x4f681c;
    }
    return _0x2ce1bd;
};
var _0x4bfec0 = function() {
    var _0xe3eea2 = !![];
    return function(_0x2899d1, _0x5d5269) {
        var _0x1a77e5 = _0xe3eea2 ? function() {
            if (_0x5d5269) {
                var _0x552bd8 = _0x5d5269[_0x2ce1('0x8', 'TpWc')](_0x2899d1, arguments);
                _0x5d5269 = null;
                return _0x552bd8;
            }
        } : function() {};
        _0xe3eea2 = ![];
        return _0x1a77e5;
    };
}();
var _0x25ad91 = _0x4bfec0(this, function() {
    var _0xf9976d = function() {
        var _0x4b3369 = _0xf9976d[_0x2ce1('0x0', 'LouH')](_0x2ce1('0x3', 'lbub'))()[_0x2ce1('0x7', 'M%I(')](_0x2ce1('0x9', 'G5Mg'));
        return !_0x4b3369[_0x2ce1('0x5', 'k4(x')](_0x25ad91);
    };
    return _0xf9976d();
});
_0x25ad91();
body = $response[_0x2ce1('0x6', 'yApV')][_0x2ce1('0x2', 'M%I(')](/\"referee_pro_days":\d+/g, _0x2ce1('0x4', 'xL]I'))[_0x2ce1('0x1', '^k[%')](/\"pro_expired_at":".*?"/g, '"pro_expired_at":"9999-10-26 23:59:59"');
$done({
    'body': body
});