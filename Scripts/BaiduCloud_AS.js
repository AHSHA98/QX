/*
百度网盘 解锁在线视频倍率/清晰度
***************************
QuantumultX:
[rewrite_local]
^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/BaiduCloud_AS.js

^https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/AHSHA98/QuanX/main/Scripts/BaiduCloud_AS.js

[mitm]
hostname = pan.baidu.com
**************************/

let Premium = $response.body;
var modified = JSON.parse(Premium);
modified = {
  "product_infos" : [
    {
      "cur_svip_type" : "Crack",
      "product_name" : "svip2_nd",
      "product_description" : "解锁倍速+画质",
      "function_num" : 510004015,
      "start_time" : 1672502400,
      "buy_description" : "无下载加速",
      "buy_time" : 980784000,
      "product_id" : "问好",
      "auto_upgrade_to_svip" : 0,
      "end_time" : 4070880000,
      "cluster" : "vip",
      "detail_cluster" : "svip",
      "status" : 0
    }
  ],
  "level_info" : {
    "current_level" : 10,
  }
};
$done({body:JSON.stringify(modified)});
/*************
if ($response.body) {
    $done({
        body: JSON.stringify({
            "product_infos": [{
                "product_id": "5310897792128633390",
                "start_time": 1417260485,
                "end_time": 2147483648,
                "buy_time": "1417260485",
                "cluster": "offlinedl",
                "detail_cluster": "offlinedl",
                "product_name": "gz_telecom_exp"
            }, {
                "product_name": "svip2_nd",
                "product_description": "超级会员",
                "function_num": 0,
                "start_time": 1553702399,
                "buy_description": "",
                "buy_time": 0,
                "product_id": "1",
                "auto_upgrade_to_svip": 0,
                "end_time": 1872502399,
                "cluster": "vip",
                "detail_cluster": "svip",
                "status": 0
            }],
            "currenttime": 1573473597,
            "reminder": {
                "reminderWithContent": [],
                "advertiseContent": []
            },
            "request_id": 7501873289383874371
        })
    });
} else {
    $done({});
}
*******/
