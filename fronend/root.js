var express = require('express');
var mysql=require('mysql')
var connection=mysql.createPool({
    host:"localhost",
    user:'root',
    password:'zcx1812281',
    database:'test',
})
module.exports = connection;