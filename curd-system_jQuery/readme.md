# Curd商品管理系统



## 主要功能

1. 展示所有商品列表
2. 编辑商品
3. 删除商品
4. 添加商品
5. 登录
6. 注册



## 使用技术

* HTML5 + CSS3
* Javascript
* jquery
* bootstrap
* ajax + JSON
* PHP
* MySQL



## 接口文档

### 查询所有商品

```json
{
    url: 'api/shop/select.php',
    metthod: 'GET',
    query: null,
    dataType: 'json',
    response: {
        code: 200,
        body: {
            list: [
                { id, name, price, num }
            ]
        }
    }
}
```



### 添加商品接口

```json
{
    url: 'api/shop/add.php',
    method: 'GET',
    query: { name, price, num },
    dataType: 'json',
    response: {
        code: 200, // 201 代表添加失败
        body: {
            msg: '添加成功' // 网络错误，请重试
        }
    }
}
```

