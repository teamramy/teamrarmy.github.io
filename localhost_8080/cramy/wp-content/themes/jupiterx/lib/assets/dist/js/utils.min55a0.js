!function(n){n.fn.alterClass=function(s,a){var e=this;if(-1===s.indexOf("*"))return e.removeClass(s),a?e.addClass(a):e;var r=new RegExp("\\s"+s.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");return e.each(function(s,a){for(var e=" "+a.className+" ";r.test(e);)e=e.replace(r," ");a.className=n.trim(e)}),a?e.addClass(a):e}}(jQuery);