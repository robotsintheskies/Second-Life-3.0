$(document).ready(function(){var e=!1,t=!1;$(".heroContainer").mousemove(function(){t=setTimeOut(function(){$(".heroText").fadeOut(200)},200);clearTimeout(e);e=setTimeout(function(){$(".heroText").fadeIn(200)},1e3)})});