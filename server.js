var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    express = require("express"),
    bodyParser = require("body-parser");
var app = express();
// 添加静态资源路径
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/assets')));
app.use(express.static(path.join(__dirname, '/')))
app.get('/', function (req, res) {//首页
    var pathname = __dirname + '/index.html';
    res.sendFile(pathname);
})
app.post('/getData', function (req, res) {
    var type = req.body.subType;
    switch (type) {
        case '0':
            fs.readFile('./data.json', 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.send(data)
                }
            })
            break;
        case '1':
            fs.readFile('./data.json', 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    var blogData = JSON.parse(data);
                    var date = new Date();
                    date = date.getFullYear() + ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);
                    var newData = {
                        "id": req.body.artId,
                        "title": req.body.artTitle,
                        "tag": req.body.artTag,
                        "content": req.body.artContent,
                        "time": date
                    }
                    blogData.push(newData);
                    fs.writeFile('./data.json', JSON.stringify(blogData), { encoding: 'utf8' }, function (err) {
                        if (err) {
                            console.log('write error')
                        } else {
                            res.send('1')
                        }
                    })
                }
            });
            break;
        case '2':
            fs.readFile('./data.json', 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    var blogData = JSON.parse(data);
                    var date = new Date();
                    date = date.getFullYear()+ ('0' + (date.getMonth() + 1)).slice(-2) + ('0' + date.getDate()).slice(-2);
                    var newData = {
                        "id": req.body.artId,
                        "title": req.body.artTitle,
                        "tag": req.body.artTag,
                        "content": req.body.artContent,
                        "time": date
                    }
                    blogData = blogData.map(function (item) {
                        if (item.id == newData.id) {
                            return newData
                        }
                        return item
                    })
                    fs.writeFile('./data.json', JSON.stringify(blogData), { encoding: 'utf8' }, function (err) {
                        if (err) {
                            console.log('write error')
                        } else {
                            res.send('1')
                        }
                    })
                }
            });
            break;
        case '3':
            fs.readFile('./data.json', 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    var blogData = JSON.parse(data);
                    var date = new Date();
                    var id = req.body.artId;
                    blogData = blogData.map(function (item) {
                        if (item.id == id) {
                            return false
                        }
                        return item
                    }).filter(function (filterItem) {
                        return filterItem
                    })
                    fs.writeFile('./data.json', JSON.stringify(blogData), { encoding: 'utf8' }, function (err) {
                        if (err) {
                            console.log('write error')
                        } else {
                            res.send('1')
                        }
                    })
                }
            });
            break;
        case '4':
            fs.readFile('./data.json', 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    var blogData = JSON.parse(data);
                    var id = req.body.artId;
                    console.log('id:' + id)
                    var result = [];
                    for (var item in blogData) {
                        console.log(item)
                        if (blogData[item].id == id) {
                            result.push(blogData[item]);
                            break;
                        }
                    }
                    res.send(JSON.stringify(result));
                }
            });
            break;
        case '5':
            fs.readFile('./data.json', 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    var blogData = JSON.parse(data);
                    var tag = req.body.artTag;
                    var result = [];
                    for (var item in blogData) {
                        if (blogData[item].tag == tag) {
                            result.push(blogData[item]);
                        }
                    }
                    res.send(JSON.stringify(result));
                }
            });
            break;
        case '6':
            fs.readFile('./data.json', 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    var blogData = JSON.parse(data);
                    var time = req.body.artTag;
                    var result = [];
                    for (var item in blogData) {
                        if (blogData[item].time == time) {
                            result.push(blogData[item]);
                        }
                    }
                    res.send(JSON.stringify(result));
                }
            });
            break;
        case '7':
            fs.readFile('./data.json', 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    var blogData = JSON.parse(data);
                    var title = req.body.artTag;
                    var result = [];
                    for (var item in blogData) {
                        if (blogData[item].title.indexOf(title) != -1) {
                            result.push(blogData[item]);
                        }
                    }
                    res.send(JSON.stringify(result));
                }
            });
            break;
        default:
            res.send('subeType参数为空')
    }
})
var server = app.listen(8081, function (res) {

})

console.log("Server running at http://localhost:8081/");
