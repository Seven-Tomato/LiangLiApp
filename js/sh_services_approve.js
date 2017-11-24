$(function(){
	$(".apr_img_bh_box").on("click",function(){
          $(this).parents(".apr_item").siblings(".apr_item").find(".apr_item_measge").css("display","none");
		     if( !$(this).hasClass("down")){
		    	  $(this).parent(".apr_item_title").next("div").slideDown(500);
		          $(this).addClass("down");
                  $(this).parents(".apr_item").siblings(".apr_item").find(".apr_img_bh_box").removeClass("down");
                  
		    }else{
		    	  $(this).parent(".apr_item_title").next("div").css("display","none");
		    	    
                  $(this).removeClass("down");
                 
                  $(this).parents(".apr_item").siblings(".apr_item").find(".apr_img_bh_box").removeClass("down");     
		    }
	})
}) 