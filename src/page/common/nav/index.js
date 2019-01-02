/*
* @Author: Rosen
* @Date:   2017-05-17 14:17:01
* @Last Modified by:   xgx
* @Last Modified time: 2019-01-02 16:40:51
*/

'use strict';
require('./index.css');
var _mm     = require('util/mm.js');

// 导航
var nav = {
    init : function(){
        this.bindEvent();
        return this;
    },
    bindEvent : function(){
        // 登录点击事件
        $('.js-login').click(function(){
            _mm.doLogin();
        });
        // 注册点击事件
        $('.js-register').click(function(){
            window.location.href = './user-register.html';
        });
        // 退出点击事件
        $('.js-logout').click(function(){
            _user.logout(function(res){
                window.location.reload();
            }, function(errMsg){
                _mm.errorTips(errMsg);
            });
        });
    }
};

module.exports = nav.init();