!function(c){var t=c("#search-form-wrap"),a=!1,e=function(){a=!0},n=function(t){setTimeout(function(){a=!1,t&&t()},200)};c("#nav-search-btn").on("click",function(){a||(e(),t.addClass("on"),n(function(){c(".search-form-input").focus()}))}),c(".search-form-input").on("blur",function(){e(),t.removeClass("on"),n()}),c("body").on("click",function(){c(".article-share-box.on").removeClass("on")}).on("click",".article-share-link",function(t){t.stopPropagation();var a=c(this),e=a.attr("data-url"),n=encodeURIComponent(e),o="article-share-box-"+a.attr("data-id"),i=a.offset();if(c("#"+o).length){if((r=c("#"+o)).hasClass("on"))return void r.removeClass("on")}else{var s=['<div id="'+o+'" class="article-share-box">','<input class="article-share-input" value="'+e+'">','<div class="article-share-links">','<a href="https://twitter.com/intent/tweet?url='+n+'" class="article-share-twitter" target="_blank" title="Twitter"></a>','<a href="https://www.facebook.com/sharer.php?u='+n+'" class="article-share-facebook" target="_blank" title="Facebook"></a>','<a href="http://pinterest.com/pin/create/button/?url='+n+'" class="article-share-pinterest" target="_blank" title="Pinterest"></a>','<a href="https://plus.google.com/share?url='+n+'" class="article-share-google" target="_blank" title="Google+"></a>',"</div>","</div>"].join(""),r=c(s);c("body").append(r)}c(".article-share-box.on").hide(),r.css({top:i.top+25,left:i.left}).addClass("on")}).on("click",".article-share-box",function(t){t.stopPropagation()}).on("click",".article-share-box-input",function(){c(this).select()}).on("click",".article-share-box-link",function(t){t.preventDefault(),t.stopPropagation(),window.open(this.href,"article-share-box-window-"+Date.now(),"width=500,height=450")}),c(".article-entry").each(function(t){c(this).find("img").each(function(){if(!c(this).parent().hasClass("fancybox")){var t=this.alt;t&&c(this).after('<span class="caption">'+t+"</span>"),c(this).wrap('<a href="'+this.src+'" title="'+t+'" class="fancybox"></a>')}}),c(this).find(".fancybox").each(function(){c(this).attr("rel","article"+t)})}),c.fancybox&&c(".fancybox").fancybox();var o=c("#container"),i=!1;c("#main-nav-toggle").on("click",function(){i||(i=!0,o.toggleClass("mobile-nav-on"),setTimeout(function(){i=!1},200))}),c("#wrap").on("click",function(){!i&&o.hasClass("mobile-nav-on")&&o.removeClass("mobile-nav-on")})}(jQuery);