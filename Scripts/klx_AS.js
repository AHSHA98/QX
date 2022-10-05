/*
脚本功能：看理想-看见另一种可能+解锁VIP
更新时间：2022.0215
使用声明：此脚本仅供学习、测试与交流！

[rewrite_local]

^https:\/\/api\.vistopia\.com\.cn\/api url script-response-body https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/klx_AS.js
^https:\/\/cdn\.vistopia\.com\.cn\/aud url script-response-body https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/klx_AS.js

[mitm] 

hostname = api.vistopia.com.cn
hostname = cdn.vistopia.com.cn

*******************************/

var body = $response.body.replace(/"is_lock":"\d"/g, '"is_lock":"0"').replace(/"vip_type":".*?"/g, '"vip_type":"lixiangjia_trial"').replace(/"unread_messages":".*?"/g, '"unread_messages":"2"').replace(/"vip_expire_date":".*?"/g, '"vip_expire_date":"2022-10-01"').replace(/"vip_left_days":".*?"/g, '"vip_left_days":"1"').replace(/"equity_txt":".*?"/g, '"equity_txt":"鸟人专用"').replace(/"expire_time":".*?"/g, '"expire_time":"9999-10-01"').replace(/"vip_valide":".*?"/g, '"vip_valide":"鸟人专用"')
$done({ body });
