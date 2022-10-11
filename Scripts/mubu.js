/*
脚本功能：幕布-大纲笔记+解锁VIP
更新时间：2022.1011
使用声明：此脚本仅供学习、测试与交流！

[rewrite_local]

^https:\/\/api2.mubu.com\/v3\/api\/user/* url script-response-body https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/mubu_AS.js

[mitm] 

hostname = api2.mubu.com

*******************************/
console.log(mubu);
try {
    let parse = JSON.parse(mubu);
    if (parse.code == 0 && parse.data) {
        parse.data.expert = true;
        parse.data.level = 1;
        parse.data.vipEndDate = "99999999";
        mubu = JSON.stringify(parse);
    }
} catch (exception) {
    console.error(__name, "error", exception.message);
}
$done(mubu);