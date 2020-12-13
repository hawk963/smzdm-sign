/**
 * 项目配置表
 * 邮件推荐使用qq邮箱，其他邮箱可能协议方面要自行设置
 * xuess<wuniu2010@126.com>
 * 2018-04-17
 */

// email 登陆账号 如：xxxx@qq.com
const emailName = 'hawka@126.com';
// email 登陆密码
const emailPassword = '318020';
// 接收者 邮箱
const toEmail = 'hawka@126.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{
		'username': '非必填，用户发送邮件展示',
		'phone': '非必填，用户发送邮件展示',
		'cookies': '__jsluid_s=1caee34a093df292182204e69537d0fa; __ckguid=bgU2UXNYYhsS88622WBPtJ17; device_id=213070643316078288947867857ca29103a35b50e8867272c9ff632f5a; homepage_sug=a; r_sort_type=score; sajssdk_2015_cross_new_user=1; zdm_qd=%7B%22referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%7D; _ga=GA1.2.2021414355.1607828899; _gid=GA1.2.1923557302.1607828899; footer_floating_layer=0; ad_date=13; sess=M2NjNmR8MTYxMzAxMjkyNXw1ODA0MTk4OTAzfDgxZmViMjc3MTAyZmQzZTk0MjM0Nzg1MDkwMWUwMjZk; user=user%3A5804198903%7C5804198903; smzdm_id=5804198903; userId=user:5804198903|5804198903; smzdm_user_source=0B41D7A22AD2C6955CA19BAFDA758EE8; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%221765a12030f291-0d019daceff3f2-163a6153-2007040-1765a120310cdc%22%2C%22first_id%22%3A%22%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E8%87%AA%E7%84%B6%E6%90%9C%E7%B4%A2%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC%22%2C%22%24latest_referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%7D%2C%22%24device_id%22%3A%221765a12030f291-0d019daceff3f2-163a6153-2007040-1765a120310cdc%22%7D; Hm_lvt_9b7ac3d38f30fe89ff0b8a0546904e58=1607828899,1607830357,1607830778; Hm_lpvt_9b7ac3d38f30fe89ff0b8a0546904e58=1607830778; _gat_UA-27058866-1=1; ad_json_feed=%7B%22J_feed_ad4%22%3A%7B%22number%22%3A0%2C%22surplus%22%3A7%7D%7D; bannerCounter=%5B%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A2%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%5D; amvid=59d0447de859fafcc7567e59d5bee8b2; __gads=ID=5c91da504e671ae9:T=1607828898:S=ALNI_Malfb3HFTI3fu1CbZAZnt7DKh7ddg'
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'感谢爆料，很不错',
	'现在这个价格还可入手吗？',
	'感谢爆料，价格不错~~',
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};
