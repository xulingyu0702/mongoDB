var username="xiecheng";
var time=Date.parse(new Date());
var data={
    "username": username,
    "registTime":time
};
var db = connect ('weichuang');
db.user.insert(data);//插入
print('insert success');