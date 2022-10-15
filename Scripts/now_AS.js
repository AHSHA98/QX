/***2022.1015
脚本功能：Now冥想-助眠白噪音乐+解锁VIP内容
使用声明：此脚本仅供学习、测试与交流！

[rewrite_local]

^https:\/\/nowapi\.navoinfo\.cn url script-response-body https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/now_AS.js

[mitm] 

hostname = nowapi.navoinfo.cn

*******************************/

body=$response.body.replace(/"free":"w+"/g,"free":"true");$done({'body':body});
