var odelete;
$(function(){
	    
    	$("#time").datetimePicker({
		        title: '服务时间',
		        min: "1990-12-12",
		        max: "2022-12-12 12:12",
		        onChange: function (picker, values, displayValues) {
		         /* console.log(values);*/
		        }
      });
/*再添加一条*/
    	 $(".more_btn").click(function(){
    	 	var template='<div class="pro_item_wrap">'+
	    	 	             '<div class="product_hd">'+
					    	 	'<label class="weui-form-preview__label">产品名称</label>'+
						    	 '<input type="text" name="" class="product_ipt"  placeholder="请输入产品名称">'+
						    	 '<span class="delete" onclick="odelete(this)"></span>'+
						     '</div>'+
						     '<div class="product_bd">'+
					    	 	'<div class="product_item">'+
						    	 	'<label class="product_label">规格型号</label>'+
						    	 	'<input type="text" name="" class="product_ipt" placeholder="请输入型号">'+
					    	    '</div>'+
					    	    '<div class="product_item">'+
						    	 	'<label class="product_label">数量(只)</label>'+
						    	 	'<input type="number" name="" class="product_ipt" placeholder="请输入数量">'+
					    	 	'</div>'+
					    	 	'<div class="product_item">'+
						    	 	'<label for="time" class="product_label">发货时间</label>'+
						    	 	'<input class="weui-input" id="time2" type="text" >'+
						    	'</div>'+	
					    	 '</div>'+
				       '</div>'
            $(".pruduct_box").append(template);
    	 })
/*删除的当前这条*/        
    	 odelete=function (othis){
           $(othis).parents(".pro_item_wrap").remove();
    	}
/*textarea字数限制*/ 
    	  $(".count_textarea").on("input",function(){
            	var now_length=$(this).val().length;
            	$(this).next().children(".counter").text(now_length)
            })
/*点击提交验证*/
         
          $(".submit_btn").on("click",function(){
             var dw_name=$(".dw_name").val(),//单位名称
                 link_man=$(".link_man").val(),//联系人
                 phone_number=$(".phone_number").val(),//手机号码
                 fw_address=$(".fw_address").val(),//手机服务地址
                 sh_work=$(".sh_work").val(),//售后服务工作
                 
                 service_output=$(".service_output").val();//售后服务工作
                
          	 if(!dw_name || !link_man || !phone_number || !fw_address || !sh_work || !service_output){
                $.alert("信息填写不完整"); 
                $(".fw_form").submit(function(){return false;});
          	 }else{
          	 	$(".fw_form").submit(function(){
                   $.toast("操作成功");
          	 	});
          	 }
          })

})   	  