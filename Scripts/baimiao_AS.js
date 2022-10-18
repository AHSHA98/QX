/***2022.1015
脚本功能：白描-OCR 文字识别+解锁黄金会员
使用声明：此脚本仅供学习、测试与交流！

*******************************

[rewrite_local]

^https?:\/\/baimiao\.uzero\.cn\/api\/v\d\.user\/appLaunchWithUser$ url script-response-body  https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/baimiao_AS.js

[mitm] 

hostname = baimiao.uzero.cn

*******************************/

let obj = JSON.parse($response.body);
obj.value.vip = {
	'id': 999999,
	'userId': 9999999,
	'levelId': 2,
	'deadline': 9999986324,
	'boughtType': "vip",
	'boughtTime': 1586253524,
	'boughtDuration': 10,
	'boughtUnit': "year",
	'boughtAmount': 30,
	'orderId': 999999,
	'deadlineNotified': 0,
	'operatorId': 0,
	'createdTime': 1586253524,
	'level': {
		'id': 2,
		'seq': 2,
		'name': "黄金会员",
		'icon': '',
		'picture': '',
		'monthPrice': 0.02,
		'yearPrice': 30,
		'description': '',
		'recognizeNormal': -100,
		'recognizeBatch': -100,
		'recognizeTranslate': -100,
		'recognizeTranslateAll': 1,
		'enabled': 1,
		'gived': 0,
		'createdTime': 1429260383,
		'maxRate': 100
	}
};
$done({ 'body': JSON.stringify(obj) });
