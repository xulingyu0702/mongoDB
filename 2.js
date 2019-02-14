var user1={
    name:"xiecheng",
    age:32,
    hobby:['敲代码','篮球','喝茶水'],
    pc:{
        brand:"apple",
        price:12222
    }}
var user2={
    name:'xiaowu',
    age:30,
    hobby:['敲代码','聊天','篮球'],
    pc:{
        brand:'IBM',
        price:8000
    }
}

var user3={
    name:'laofeng',
    age:31,
    hobby:['敲代码']
}

var db=connect('weichuang');
db.user.insert([user1,user2,user3]);//插入一堆对象写一个数组即可
print('insert success3 data')