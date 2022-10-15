/***2022.1015
脚本功能：flomo 浮墨-卡片笔记+解锁pro
使用声明：此脚本仅供学习、测试与交流！

[rewrite_local]
^https:\/\/flomoapp\.com\/api\/v1\/user\/me url script-response-body https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/flomo_AS.js

[mitm] 
hostname = flomoapp.com

*******************************/

body = $response.body.replace(\"referee_pro_days":\d+/g, "referee_pro_days":14).replace(\"pro_expired_at":".*?"/g, '"pro_expired_at":"9999-10-26 23:59:59"');
$done({ 'body': body });
