#表
#use catclay  \创建一个叫chihuo的数据库
#db.createCollection('users') \创建一个集合
#db.users.insert({'name':'admin','password':'111'}) \给users集合添加一个文档。
#db.users.find() \查询你添加的文档
use catclay
db.createCollection('users')
db.users.insert({'content”:''})

db.createCollection("task")
db.users.insert({'content”:''})

db.createCollection('taskNotice')
db.users.insert({'content”:''})