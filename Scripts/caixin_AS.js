/***2022.1022
# 脚本功能：财新
# 使用声明：此脚本仅供学习、测试与交流！

[rewrite_local]

^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validate|validateAudioAuth) url script-request-header https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/caixin_AS.js

[mitm]

hostname=gateway.caixin.com

***********************************/

var header=$request['headers'];
var url=$request.url.replace(/uid=(\d+|)/g,"uid=12622061")
            .replace(/code=(\w+|)/g,"code=7258E07D155FE91FB868E545947DDCAB")
            .replace(/device=(\w+|)/g,"device=af491839f424cf75f07d7f4d6b7a30bde3296ea2")
            .replace(/deviceType=(\d+|)/g,"deviceType=1");
if($request['url']['indexOf']('validateAudioAuth')!=-0x1){
            header['appinfo']='ddgksf2013';
}
$done({'url':url,'headers':header});
