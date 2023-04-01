!function(e,t){var n,o;"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,n=e.Cookies,(o=e.Cookies=t()).noConflict=function(){return e.Cookies=n,o})}(this,function(){"use strict";function c(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)e[n]=o[n]}return e}return function t(u,i){function n(e,t,n){if("undefined"!=typeof document){var o,r="";for(o in"number"==typeof(n=c({},i,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),n)n.hasOwnProperty(o)&&n[o]&&(r+="; "+o,!0!==n[o]&&(r+="="+n[o].split(";")[0]));return document.cookie=e+"="+u.write(t,e)+r}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t,n,o=document.cookie?document.cookie.split("; "):[],r={},i=0;i<o.length;i++){n=(t=o[i].split("=")).slice(1).join("=");try{var c=decodeURIComponent(t[0]);if(r[c]=u.read(n,c),e===c)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){n(e,"",c({},t,{expires:-1}))},withAttributes:function(e){return t(this.converter,c({},this.attributes,e))},withConverter:function(e){return t(c({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(u)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})});
$(document).ready(function() {
  var e = Cookies.get("RAT");
  if (e == null) {
    $("ins").show();
  } else {
    $("ins").hide();
  }
});
$('ins').click(function(){
document.cookie = "RAT=Catch; expires=1;";
$("ins").hide();
});
