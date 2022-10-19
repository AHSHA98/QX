/***2022.1019
脚本功能：滴答清单+解锁VIP
使用声明：此脚本仅供学习、测试与交流！

[rewrite_local]

^https:\/\/ticktick\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/ticktick_AS.js
^https:\/\/dida365\.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/ticktick_AS.js

[mitm] 

hostname = ticktick.com
hostname = dida365.com


*******************************/

var body = $response.body;
var parse = JSON.parse(body);
parse.proEndDate = "2099-01-01T00:00:00.000+0000";
parse.needSubscribe = false;
parse.pro = true;
body = JSON.stringify(parse);
$done(body);