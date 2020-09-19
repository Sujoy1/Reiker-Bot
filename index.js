const express = require('express');
var cors = require('cors');
const app = express();
app.listen(3000,()=> console.log('Listening at port 3000'));
app.use(express.static('public'));
app.use(cors(
    origin = '*',
    methods = ['GET','POST','PUT','PATCH','DELETE'],
    header = 'Content-type'
));
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    })
// OverComing Cors Error
/*

<httpProtocol>  
    <customHeaders>  
     <add name="Access-Control-Allow-Origin" value="*" />  
     <add name="Access-Control-Allow-Headers" value="Content-Type" />  
     <add name="Access-Control-Allow-Methods" value="GET, POST, PUT, DELETE, OPTIONS" />  
    </customHeaders>  
  </httpProtocol>

  */