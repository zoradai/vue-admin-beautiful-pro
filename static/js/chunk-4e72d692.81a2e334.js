/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2021-9-5 16:47:11
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e72d692"],{"0f60":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"player-container"},[a("el-divider",{attrs:{"content-position":"left"}},[e._v(" 视频地址采用cdn加速服务，开发时需部署到到本地 ")]),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[e._v("播放传统MP4")]),a("vab-player-mp4",{attrs:{config:e.config1},on:{player:function(t){e.Player1=t}}})],1)],1),a("el-col",{attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{attrs:{slot:"header"},slot:"header"},[e._v("播放m3u8，且不暴露视频地址")]),a("vab-player-hls",{attrs:{config:e.config2},on:{player:function(t){e.Player2=t}}})],1)],1)],1)],1)},r=[],n=a("7341"),o={name:"Player",components:{VabPlayerMp4:n["VabPlayerMp4"],VabPlayerHls:n["VabPlayerHls"]},data:function(){return{config1:{id:"mse1",url:"https://cdn.jsdelivr.net/gh/chuzhixin/videos@master/video.mp4",volume:1,autoplay:!1},Player1:null,config2:{id:"mse2",url:"https://cdn.jsdelivr.net/gh/chuzhixin/videos@master/video.m3u8",volume:1,autoplay:!1},Player2:null,config3:{id:"mse3",url:"https://cdn.jsdelivr.net/gh/chuzhixin/videos@master/video.flv",volume:1,autoplay:!1},Player3:null}},created:function(){},mounted:function(){},methods:{}},s=o,i=a("2877"),u=Object(i["a"])(s,l,r,!1,null,null,null);t["default"]=u.exports},7341:function(e,t,a){"use strict";a.r(t);var l=a("3236");a.d(t,"VabPlayerMp4",(function(){return l["VabPlayerMp4"]})),a.d(t,"VabPlayerHls",(function(){return l["VabPlayerHls"]})),a.d(t,"VabPlayerFlv",(function(){return l["VabPlayerFlv"]}))}}]);