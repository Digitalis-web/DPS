function on_resize(){}function on_ready(){init_sliders();for(var e=0;e<all_sliders.length;e++)slider_go_to_page(e,0);slider_speed=800}function on_ready_after_load(){init_quantity_selecter()}function init_quantity_selecter(){$(".quantity_select .minus").click(function(){send_quantity(this,change_quantity(-1,this))}),$(".quantity_select .plus").click(function(){send_quantity(this,change_quantity(1,this))});for(var e=$(".quantity_select"),t=0;t<e.length;t++)change_quantity(0,e[t])}function send_quantity(e,t){var r=$(e).attr("product_id");$.ajax({url:"function/alter_cart.php",type:"GET",data:"update_quantity=&quantity="+t+"&product_id="+r}).success(function(e){})}function change_quantity(e,t){var r=$(t).parent().parent().parent(),n=$(r).find(".current_quantity"),i=$(n).html(),a=1*i+e;a<1&&(a=1),$(n).html(a);var s=$(r).find(".order_price").html().trim();s=s.substring(0,s.length-1);var o=1*s*a+"$",l=$(r).find(".total_order_price");return $(l).html(o),a}function slider_go_to_page(e,t){if(!sliding){sliding=!0;var r=all_sliders[e],n=!1;r.classList.contains("no_content")&&(n=!0);var i=$(".slider_list_container[slider_number='"+e+"']"),a=$(r).children().length-2;t>=a?t=0:t<0&&(t=a-1);var s=$(".slider_page[slider_number='"+e+"']"),o=s[t],l=o.getElementsByTagName("img")[0].src;o.parentNode.style.background="url("+l+") no-repeat center center",o.parentNode.style.backgroundSize="100% 100%",$(s).fadeToggle(slider_speed,function(){});for(var d=0;d<s.length;d++){var c=100*d-100*t+"%";$(s[d]).animate({left:c},0)}var _=slider_speed/2;n&&(_=0),$(s).fadeToggle(_,function(){sliding=!1});var u=":nth-child("+(t+1)+")";if($(r).hasClass("no_list")){if(!$(r).hasClass("no_dots")){var g=$(".slider_dots_container[slider_number='"+e+"']"),h=$(g).find(u);jQuery(g).find(".slider_dot").not(h).animate({backgroundColor:dot_not_selected_background,borderColor:border_not_selected_color},slider_speed),jQuery(h).animate({backgroundColor:dot_selected_background,borderColor:border_selected_color},slider_speed)}}else{var f=$(i).find(u).not("p");jQuery(i).find(".slider_list_object").not(f).animate({backgroundColor:not_selected_background,color:not_selected_color},slider_speed),jQuery(f).not("p").animate({backgroundColor:selected_background,color:selected_color},slider_speed)}current_page[e]=t}}function init_sliders(){function e(e,t){var r=$(t).attr("slider_number"),n=current_page[r]+1;e&&(n-=2),slider_go_to_page(r,n)}var t=document.getElementsByClassName("all_slider_container");$(t).css("visibility","visible");$(window).width();slider_dot_width="0.7";for(var r=0;r<t.length;r++){var n=t[r];$(n).attr("slider_number",r),current_page.push(0),all_sliders.push(n);var i=n.getElementsByClassName("slider_page"),a=i.length,s=$(n).parent();if($(n).hasClass("no_list")){if(!$(n).hasClass("no_dots")){var o=$("<div class = 'slider_dots_container center_horizontally_css'>"),l=$("<div class = 'inner_dots_container full_height center_horizontally_css'>");$(o).attr("slider_number",r),$(l).attr("slider_number",r),$(o).append(l),$(s).append(o)}}else{var d=$("<div class = 'slider_list_container'>");$(d).attr("slider_number",r);var c=100/a+"%";$(s).append(d)}for(var _=0;_<i.length;_++){var u=i[_];$(u).attr("slider_number",r);var g=100*_+"%";$(u).css("left",g);var h;if($(n).hasClass("no_list")){if(!$(n).hasClass("no_dots")){var f=$("<div class = 'slider_dot'>");$(f).css("width",slider_dot_width+"vw"),$(f).css("margin-left",2*slider_dot_width+"vw"),$(l).append(f),h=f}}else{var p=document.createElement("div");p.className+="slider_list_object",$(p).css("width",c);var v=u.id,m=$("<p class = 'list_object_text center_vertically_css'>");$(m).html(v),$(d).append(p),$(p).append(m),$(m).attr("slider_number",r),$(p).attr("slider_number",r),h=p}$(h).click(function(){var e=this.parentNode,t=Array.prototype.indexOf.call(e.children,this);slider_go_to_page($(e).attr("slider_number"),t)})}if(!$(n).hasClass("no_arrows")){var y=$("<img class = 'slider_arrow slider_arrow_left' src='img/left_d.svg'>"),b=$("<img class = 'slider_arrow slider_arrow_right' src='img/right_d.svg'>");$(y).attr("slider_number",r),$(b).attr("slider_number",r),$(n).append(y),$(n).append(b),$(y).click(function(){e(!0,this)}),$(b).click(function(){e(!1,this)})}}}function moveBackground(){x+=(lFollowX-x)*friction,y+=(lFollowY-y)*friction,translate="translate("+x+"px, "+y+"px) scale(1.1)",$(".bg").css({"-webit-transform":translate,"-moz-transform":translate,transform:translate}),window.requestAnimationFrame(moveBackground)}$(document).ready(on_ready),$(window).resize(on_resize);var current_page=[],all_sliders=[],slider_speed=0,selected_background="#fe7e17",not_selected_background="#999999",selected_color="white",not_selected_color="black",dot_selected_background="white",dot_not_selected_background="gray",border_selected_color="gray",border_not_selected_color="gray",slider_dot_width=0,sliding=!1,lFollowX=0,lFollowY=0,x=0,y=0,friction=1/30;$(window).on("mousemove click",function(e){var t=Math.max(-100,Math.min(100,$(window).width()/2-e.clientX)),r=Math.max(-100,Math.min(100,$(window).height()/2-e.clientY));lFollowX=20*t/100,lFollowY=10*r/100}),moveBackground(),$("iframe").load(function(){$(this).contents().find("img").css({with:"100%",height:"100%"})});var McButton=$("[data=hamburger-menu]"),McBar1=McButton.find("b:nth-child(1)"),McBar2=McButton.find("b:nth-child(2)"),McBar3=McButton.find("b:nth-child(3)");McButton.click(function(){$(this).toggleClass("active"),McButton.hasClass("active")?(McBar1.velocity({top:"50%"},{duration:200,easing:"swing"}),McBar3.velocity({top:"50%"},{duration:200,easing:"swing"}).velocity({rotateZ:"90deg"},{duration:800,delay:200,easing:[500,20]}),McButton.velocity({rotateZ:"135deg"},{duration:800,delay:200,easing:[500,20]})):(McButton.velocity("reverse"),McBar3.velocity({rotateZ:"0deg"},{duration:800,easing:[500,20]}).velocity({top:"100%"},{duration:200,easing:"swing"}),McBar1.velocity("reverse",{delay:800}))});