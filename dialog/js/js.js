;(function($){
	var Dailog=function(opt){
			var defaults={
				title:"",
				msg:"",
				btn:["确定","取消"],
				callback1:null
			},
			setting=$.extend({},defaults,opt);
		//创建结构
			var html="";
			html+='<div class="mark"></div>\
				  <div class="dai_box">\
				  	<p class="dai_msg">'+setting.msg+'</p>\
				  	<p class="dai_btn"></p>\
				  </div>';
			$("body").prepend(html);
			//动态添加按钮
			if(setting.btn.length==0) return false;
			for(var i=0,len=setting.btn.length;i<len;i++){
				var newBtn=$("<span id='btn"+i+"'>"+setting.btn[i]+"</span>");
				$(".dai_btn").append(newBtn);
			}
			//单击事件
				$("#btn0").on("click",function(){
					del();
					setting.callback1 && setting.callback1();
					
				})
				$("#btn1").on("click",function(){
					del();
				})
				function del(){
					$(".mark").remove();
					$(".dai_box").remove();
				}
		}
		 
	$.dailog=function(opt){
		return new Dailog(opt);
	}
})(jQuery)