// require() 是node.js提供的函数，
//可以让你引入其他模块以调用模块的函数和变量，
//默认下node.js会在$NODE_PATH和目前js所在目录下的node_modules文件夹下去寻找模块，
//express.js继承自connect模块，
//所以如果你的node_modules文件夹下没有connect模块也是不行的。
var express = require('express'),
    engine = require('ejs-mate'); //母版
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//定义路径js路径
var routes = require('./routes/index');
var users = require('./routes/users');
var testpage = require('./routes/testpage'); 
//定义路径js路径end


var app = express();



// view engine setup
app.engine('ejs', engine); //母版

app.set('views', path.join(__dirname, 'views'));//设置views路径
app.set('view engine', 'ejs');//设置模板ejs
// 上面两行是设置views文件夹，
// 即模板文件夹，
// __dirname是node.js里面的全局变量，
// 即取得执行的js所在的路径，
// 另外__dirname是目前执行的js文件名。
// 所以，app.set(‘views’, __dirname + ‘/views’);是设置views的文件夹。
// 而app.set('view engine', 'jade');是设置express.js所使用的render engine。
// 除了Jade之外express.js还支持EJS(embedded javascript)、Haml、CoffeScript和jQuerytemplate等js模板

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
// express.static()也是一个Connect內建的中间件来处理静态的requests，
// 例如css、js、img文件等。
// 所以static()里面指定的文件夹中的文件会直接作为静态资源吐出来。

//定义路径页面路径
app.use('/', routes);
app.use('/users', users);
app.use('/testpage', testpage);
//定义路径页面路径end

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
