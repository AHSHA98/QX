/***2022.1021
脚本功能：Drafts——解锁订阅
使用声明：此脚本仅供学习、测试与交流！

[rewrite_local]

^https:\/\/backend\.getdrafts\.com\/api\/v1\/verification\/verify_receipt url script-response-body  https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/Drafts_AS.js

[mitm] 

hostname = backend.getdrafts.com

*******************************/

var parse = JSON.parse($response.body);
var innerObject = {};
parse = innerObject;
var innerObject_fb = {};
$done(innerObject_fb);