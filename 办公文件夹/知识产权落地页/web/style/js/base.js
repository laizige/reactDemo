$(function() {



//设计案例切换
	$('.title-list li').mouseover(function(){
		var liindex = $('.title-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
	
		$('.product-wrap div.product').eq(liindex).fadeIn(150).siblings('div.product').hide();

		
		var liWidth = $('.title-list li').width();
		$('.lanrenzhijia .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});
	
	
	
	
	

	var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focus ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$("#focus").append(btn);
	$("#focus .btnBg").css("opacity",0.5);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$("#focus .btn span").css("opacity",0.4).mouseover(function() {
		index = $("#focus .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseover");

	//上一页、下一页按钮透明度处理
	$("#focus .preNext").css("opacity",0.2).hover(function() {
		$(this).stop(true,false).animate({"opacity":"0.5"},300);
	},function() {
		$(this).stop(true,false).animate({"opacity":"0.2"},300);
	});

	//上一页按钮
	$("#focus .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	//下一页按钮
	$("#focus .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
		
		
		
	});

	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#focus ul").css("width",sWidth * (len));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		
		//$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
		$("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
	
	
	}
});




 function Wopen(url){
 var swt_talk = url;
    var iTop = (window.screen.availHeight - 30 - 600) / 2;
    var iLeft = (window.screen.availWidth - 10 - 800) / 2;
    window.open(swt_talk, 'newwindow', 'height=690, width=758,toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no,top=' + iTop + ',left=' + iLeft);
        }  


//tab效果筛选  obj事件对象,oEvent事件,oCon展开窗口,className-css名
function fnTabCon(obj,oEvent,oCon,className,callBack){
    $(obj).on(oEvent,function(){
      var index = $(this).index();
      $(this).addClass(className).siblings().removeClass(className);
      $(oCon).hide();
      $(oCon).eq(index).show();
      callBack && callBack();
    });
  }
  
  //手机号输入框控制
  function mobileValidate(inputObj){
    inputObj.on('keyup', function(event) {
      var c=$(this), reg = /\D|^0/g;
      if(/\D|^0/.test(c.val())){//替换非数字字符
        var temp_amount=c.val().replace(reg,'');
        $(this).val(temp_amount);
      }
    });
  }
  
  //商务通
function openzx(){
    var swt_talk = 'http://p.qiao.baidu.com/cps/chat?siteId=13595738&userId=21965346';
    var iTop = (window.screen.availHeight - 30 - 600) / 2;
    var iLeft = (window.screen.availWidth - 10 - 800) / 2;
    window.open(swt_talk, 'newwindow', 'height=690, width=758,toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no,top=' + iTop + ',left=' + iLeft);
  }
  // JavaScript Document

// JavaScript Document     //banner中查询结果滚动效果
     setInterval(function(){
        if(!$('.roll').find("ul:first").is(':animated')){
          $('.roll').find("ul:first").animate({
            marginTop:"-20px"
          },500,function(){
            $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
          });
        }
      },3000);

      $('.four .four-tabcon').hide().eq(0).show();
        //tab效果
        fnTabCon('.oc-tab li' , 'click' , '.one .oc-tabbox' , 'oct-cur');
        fnTabCon('.four-tab li' , 'click' , '.four .four-tabcon' , 'ft-cur');
      //one 上一屏/下一屏切换效果
      $('.oc-prev').on('click', function() {
        var index = $('.oc-tab .oct-cur').index();
        if (index > 0) {
          $('.oc-tab .oct-cur').removeClass('oct-cur').prev().addClass('oct-cur');
          $('.one .oc-tabbox').hide().eq(index - 1).show();
        }
      });
      $('.oc-next').on('click', function() {
        var index = $('.oc-tab .oct-cur').index();
        if (index < $('.oc-tab li').length -1) {
          $('.oc-tab .oct-cur').removeClass('oct-cur').next().addClass('oct-cur');
          $('.one .oc-tabbox').hide().eq(index + 1).show();
        }
      });
//行业点击切换
$('.tc-tab li:not(:last)').on('click', function() {
var index = $(this).index();
$(this).css('zIndex','2').addClass('tct-cur').siblings().removeClass('tct-cur');
$('.tc-tabcon').eq(index).show().siblings('.tc-tabcon').hide();
});
$('.tc-tab li').hover(function(){
$('.tct-cur').css('zIndex','2');
$(this).css('zIndex','1').siblings().not('.tct-cur').css('zIndex','0');
},function(){
$(this).css('zIndex','0');
});
   //服务鼠标滑过效果
   $('.three-con li').hover(function(){
    $(this).stop(true,true).animate({ height:'360px'},300,function(){
      $(this).find('.thc-text').show();
      $(this).find('.thc-btn').show();
    });
  },function(){
    $(this).stop(true,true).animate({ height:'300px'},300);
    $(this).find('.thc-text').hide();
    $(this).find('.thc-btn').hide();
  });
        //返回顶部
        $(".back_top").bind('click' , function() {
          $('body,html').animate({
            scrollTop: 0
          },500);
          return false;
        });
        $('.online').bind('mouseover',function(){
          $('.online .online-box').stop(true).animate({left:-195},300);
        }).bind('mouseleave',function(){
            $('.online .online-box').stop(true).animate({left:54},300);
        })
        $('.gongzhong').bind('mouseover',function(){
            $('.gongzhong .gongzhong-box').stop(true).animate({left:-331},300);
        }).bind('mouseleave',function(){
            $('.gongzhong .gongzhong-box').stop(true).animate({left:54},300);
        })
        $('.phone-right').bind('mouseover',function(){
            $('.phone-right .phone-box').stop(true).animate({left:-255},300);
        }).bind('mouseleave',function(){
            $('.phone-right .phone-box').stop(true).animate({left:54},300);
        })
        $(window).scroll(function(){
          var height =$(window).scrollTop();
          if (height>= 500) {
            $('.back_top').removeClass('hide');
          }else{
            $('.back_top').addClass('hide');
          }
        });
        

      $('.form-error').on('click',function(){
        $(this).hide()
        $(".label-phone").focus()
      })


  //商务通
  $('.swt_zai').on('click',function(){
    $('.swt_menu').toggle();
  });

  $('.swt_zai').on('click' , function(){
    if ($('.swt_menu').is(':hidden')) {
      $('.swt_zai .sw_trg').addClass('sw_trg_hid');
    }else{
      $('.swt_zai .sw_trg').removeClass('sw_trg_hid');
    }
  });

  $('.smz-phone').hover(function() {
    $('.swt-phonebig').stop(true,true).animate({right: '130px'}, 300);
  },function(){
    $('.swt-phonebig').stop(true,true).animate({right: '-280px'}, 300);
  });

  $('.smz-ewm').hover(function() {
    $('.swt-ewmbig').stop(true,true).animate({right: '109px'}, 300);
  },function(){
    $('.swt-ewmbig').stop(true,true).animate({right: '-280px'}, 300);
  });
  //回拨表单出现/隐藏效果  新增  2018-11  wxm
  $('.call').hover(function() {
    $('.call-form').stop(true,true).animate({right: '-1px'}, 300);
  },function(){
    $('.call-form').stop(true,true).animate({right: '-350px'}, 300);
    $('.call .phone').blur();
    $('.call .error').hide();
  });

  //回拨电话提示框出现/隐藏效果  新增  2018-11  wxm
  $('.call .phone').on('focus',function(){
    $('.call .hint').show();
  });
  $('.call .phone').on('blur',function(){
    $('.call .hint').hide();
  });

  //回拨电话表单提交  新增  2018-11  wxm
  $('.call .fc-btn').on('click',function(){
    var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/g;
    if(!($('.call .phone').val()!= "" && $('.call .phone').val() != $('.call .phone').attr('place'))){
      $('.call .phone').focus().next().show().text('请输入手机号码');
      return false;
    }else if(!(reg.test($('.call .phone').val()))){
      $('.call .phone').focus().next().show().text('请输入正确的手机号码');
      return false;
    } else{
      $('.call .phone').next().hide();
      $('.call .hint').hide();
    }
    lxb.call(document.getElementById("callPhone"));
    $('.call .hint-calling').show();
    setTimeout(function(){
      $('.call .hint-calling').hide();
    },3000);

  });
//  提交验证
//服务咨询弹窗
function submitFun(mobileObj){
    var reg = /^(1[3|4|5|7|8])[\d]{9}$/g;
    if(!(mobileObj.val()!= "" && mobileObj.val() != mobileObj.attr('placeholder'))){
        mobileObj.focus().parents('.pop-tel').find('.error').show().text('请输入手机号码');
        mobileObj.val('');
        mobileObj.parents('.pop-tel').find('.txt-1').val('');
        mobileObj.blur(function(){
            mobileObj.attr('placeholder');
        });
        // label phone hover
        // mobileObj.parents('.phone-box').find('.form-error').show();
        mobileObj.removeAttr('placeholder').val('');
        return false;
    }else if(!(reg.test(mobileObj.val()))){
        mobileObj.focus().parents('.pop-tel').find('.error').show().text('请输入正确的手机号码');
        mobileObj.val('');
        mobileObj.parents('.pop-tel').find('.txt-1').val('');
        mobileObj.blur(function(){
            mobileObj.attr('placeholder');
        });
        // label phone hover
        // mobileObj.parents('.phone-box').find('.form-error').show();
        mobileObj.removeAttr('placeholder').val('');
        return false;

    } else{
        // mobileObj.next().hide();
        return true;
    }
}
// 公共弹窗提交
var timers=null;
 $('.btn-pop').on('click',function(event){
    event.preventDefault();
    clearTimeout(timers);
    // $('.phone').attr('placeholder');
    var pLayer = $(this).parents('.pop'),
        mobileObj = pLayer.find('.phone'),
        flag = submitFun(mobileObj);
    if(flag){
        var con_remarks = pLayer.find('.pop-title').text();
        var con_title = pLayer.find('.brandname').val()
        var ids = $(this).attr('ids')
        if(ids == 1){
            window.open('http://jieguo.ciprun.com/?tel='+mobileObj.val()+'&name='+con_title);
            var adata={
                source_id:'SB08255',
                terminal:'SB070001',
                submit_url:window.location.href,
                number:'SB0510101',
                con_title:con_title,
                con_trade:'',
                con_type:'',
                con_remarks:con_remarks,
                mobile:mobileObj.val(),
                contacts:pLayer.find('.pop-name input').val(),
                reg_number:'',
                price:'',
                ip:'',
                status:1
            };
        }

        if(ids == 0){
            var adata={
                source_id:'SB08255',
                terminal:'SB070001',
                submit_url:window.location.href,
                number:'SB0510101',
                con_title:con_title,
                con_trade:'',
                con_type:'',
                con_remarks:con_remarks,
                mobile:mobileObj.val(),
                contacts:pLayer.find('.pop-name input').val(),
                reg_number:'',
                price:'',
                ip:'',
                status:1
            };
        }
        if(ids == 2){
            con_remarks += pLayer.find('select').val()
            var adata={
                source_id:'SB08255',
                terminal:'SB070001',
                submit_url:window.location.href,
                number:'SB0510101',
                con_title:con_title,
                con_trade:'',
                con_type:'',
                con_remarks:con_remarks,
                mobile:mobileObj.val(),
                contacts:pLayer.find('.pop-name input').val(),
                reg_number:'',
                price:'',
                ip:'',
                status:1
            };
        }
        if(ids == 3){
            var adata={
                source_id:'SB08255',
                terminal:'SB070001',
                submit_url:window.location.href,
                number:'SB0510101',
                con_title:'',
                con_trade:'',
                con_type:'',
                con_remarks:con_remarks,
                mobile:mobileObj.val(),
                contacts:'',
                reg_number:pLayer.find('.pop-name input').val(),
                price:'',
                ip:'',
                status:1
            };
        }

        if(ids == 4){
            var adata={
                source_id:'SB08255',
                terminal:'SB070001',
                submit_url:window.location.href,
                number:'SB0510101',
                con_title:'',
                con_trade:'',
                con_type:'',
                con_remarks:con_remarks,
                mobile:mobileObj.val(),
                contacts:pLayer.find('.pop-name input').val(),
                reg_number:'',
                price:'',
                ip:'',
                status:1
            };
        }

        $.ajax({
            type: "POST",
            url: "/base/bcbackup",
            data:adata,
            dataType: "json",
            success: function( json ) {

            }
        });
        if(ids ==3){
            var $eleForm = $("<form method='get'></form>");
            if(con_remarks == '申请书样本下载'){
                $eleForm.attr("action", "https://libs.gbicom.cn/sbzc_doc/13%E5%95%86%E6%A0%87%E6%B3%A8%E5%86%8C%E7%94%B3%E8%AF%B7%E4%B9%A6.doc");
            }else if(con_remarks == '委托书样本下载'){
                $eleForm.attr("action", "https://libs.gbicom.cn/sbzc_doc/14%E5%95%86%E6%A0%87%E4%BB%A3%E7%90%86%E5%A7%94%E6%89%98%E4%B9%A6.doc");
            }

            $(document.body).append($eleForm);

            $eleForm.submit();
        }
        pLayer.hide();
        $('.pop-success,.mask').show();
        clearTimeout(timers);
        // timers= setTimeout(function(){
        //     $('.pop-success, .mask').hide();
        // },3000);
        $('.txt-1').val('');
        $('.phone').val('');
        $('.name-zl').val('');
        clearTxt(pLayer);

    }
});



// 非弹框提交
function submitFun2(mobileObj){
  var reg = /^(1[3|4|5|6|7|8|9])[\d]{9}$/g;
  if(!(mobileObj.val()!= "" && mobileObj.val() != mobileObj.attr('placeholder'))){
      mobileObj.focus().parents('.form-box').find('.error').show().text('请输入手机号码');
      mobileObj.val('');
      mobileObj.blur(function(){
          mobileObj.attr('placeholder');
      });
      // label phone hover
      // mobileObj.parents('.phone-box').find('.form-error').show();
      return false;
  }else if(!(reg.test(mobileObj.val()))){
      mobileObj.focus().parents('.form-box').find('.error').show().text('请输入正确的手机号码');
      mobileObj.val('');
      mobileObj.blur(function(){
          mobileObj.attr('placeholder');
      });
      // label phone hover
      // mobileObj.parents('.phone-box').find('.form-error').show();
      return false;

  } else{
      // mobileObj.next().hide();
      return true;
  }
}
//短信通知
var timers=null;
$('.form-btn').on('click',function(){

  var pLayer = $(this).parents('.form-box'),
      mobileObj = pLayer.find('.phone'),
      flag =submitFun2(mobileObj);
      mobileObj.focus().attr('placeholder');
    if(flag){


        var adata={
            source_id:'SB08255',
            terminal:'SB070001',
            submit_url:window.location.href,
            number:'SB0510101',
            con_title:'',
            con_trade:'',
            con_type:'',
            con_remarks:'短信通知--定制通知',
            mobile:mobileObj.val(),
            contacts:'',
            reg_number:'',
            price:'',
            ip:'',
            status:1
        };


        $.ajax({
            type: "POST",
            url: "/base/bcbackup",
            data:adata,
            dataType: "json",
            success: function( json ) {

            }
        });


      $('.pop-success,.mask').show();
      clearTimeout(timers);
      timers= setTimeout(function(){
          $('.pop-success, .mask').hide();
      },3000);
      $('.txt-1').val('');
      $('.phone').val('');
      $('.name-zl').val('');
      clearTxt(pLayer);
  }
});

  //弹窗关闭
  $('.pop-close').on('click',function(){
    clearTimeout(timers);
    $(this).parent().hide();
    $('.mask').hide();
    $('.error').hide();
    $('.brandname').val('').attr('placeholder');
    $('.phone').val('').attr('placeholder');
    $('.pop-name>input[type=text]').val('').attr('placeholder');
  });

  //banner中查询弹窗出现
  $('.btn-search').on('click',function(){
    var brandName = $(this).prev();
    $('.mask, .pop').show();
    $('.pop .btn-pop').attr('ids',1);
    $('.pop').find('.pop-select').hide();
    $('.pop').find('.pop-brandName').show();
    $('.pop').find('.pop-name').show();
    $('.pop').find('.pop-title').html('获取查询结果');
    $('.pop').find('.pop-searchtext').show();
    $('.pop').find('.btn-pop').text('免费查询');
    $('.pop').find('.phone').attr('placeholder','手机号码（用于接收详细的商标分析函）');
    if( (brandName.val() == ''|| brandName.val() == brandName.prop('placeholder'))){
      $('.pop').find('.brandname').prop('placeholder');
    } else{
      $('.pop').find('.brandname').css('color','#333');
     $('.pop').find('.brandname').val(brandName.val());
    }
  });

     //banner中查询弹窗出现
     $('.banner01 .banner-btn').on('click',function(){
         var brandName = $(this).prev();
         $('.mask, .pop').show();
         $('.pop .btn-pop').attr('ids',1);
         $('.pop').find('.pop-select').hide();
         $('.pop').find('.pop-brandName').show();
         $('.pop').find('.pop-name').show();
         $('.pop').find('.pop-title').html('获取查询结果');
         $('.pop').find('.pop-searchtext').show();
         $('.pop').find('.btn-pop').text('免费查询');
         $('.pop').find('.phone').attr('placeholder','用于接收详细的商标分析函');
         if( (brandName.val() == ''|| brandName.val() == brandName.prop('placeholder'))){
             $('.pop').find('.brandname').prop('placeholder');
         } else{
             $('.pop').find('.brandname').css('color','#333');
             $('.pop').find('.brandname').val(brandName.val());
         }
     });


  //banner中业务咨询弹窗出现
  $('.bc-business .bct-btn').on('click',function(){
    var title = $(this).text();
    $('.mask, .pop').show();
      $('.pop .btn-pop').attr('ids',0);
    $('.pop').find('.pop-brandName').show();
    $('.pop').find('.pop-name').show();
    $('.pop').find('.pop-select').hide();
    $('.pop').find('.pop-searchtext').hide();
    $('.pop').find('.pop-title').text(title);
    $('.pop').find('.btn-pop').text('咨询注册建议');
    $('.pop').find('.phone').attr('placeholder','手机号码（用于接收注册方案）');
    that.popDescribe = title;
    that.selected ='';
  });

  //行业注册咨询弹窗出现
  $('.tct-btn a').on('click',function(){
    var selectText = $('.tc-tab .tct-cur').find('.tct-text').text();
    $('.mask, .pop').show();
      $('.pop .btn-pop').attr('ids',2);
    $('.pop').find('.pop-title').text('注册咨询');
    $('.pop').find('.pop-brandName').show();
    $('.pop').find('.pop-name').show();
    $('.pop').find('.pop-select').show();
    $('.pop').find('.pop-searchtext').hide();
    $('.pop-select').find('select').val(selectText);
    $('.pop').find('.btn-pop').text('咨询注册建议');
    $('.pop').find('.phone').attr('placeholder','手机号码（用于接收注册方案）');
  });

  //服务咨询价格弹窗出现
  $('.three .btn-three').on('click',function(){
    var title = $(this).parents('li').find('h2').text();
    $('.mask, .pop').show();
      $('.pop .btn-pop').attr('ids',0);
    $('.pop').find('.pop-select').hide();
    $('.pop').find('.pop-searchtext').hide();
    $('.pop').find('.pop-brandName').show();
    $('.pop').find('.pop-name').show();
    $('.pop').find('.pop-title').text(title);
    $('.pop').find('.btn-pop').text('咨询价格');
    $('.pop').find('.phone').attr('placeholder','手机号码（用于接收注册方案）');
  });

  //委托书/申请书弹窗出现
  $('.btn-download').on('click',function(){
    $('.mask, .pop').show();
      $('.pop .btn-pop').attr('ids',3);
    $('.pop').find('.pop-brandName').hide();
    $('.pop').find('.pop-select').hide();
    $('.pop').find('.pop-name').hide();
    $('.pop').find('.pop-searchtext').hide();
    $('.pop').find('.btn-pop').text('立即下载');
    if( $(this).text() == '查看委托书样本'){
      $('.pop').find('.pop-title').text('委托书样本下载');
      that.popDescribe = '委托书样本下载';
    }else if(  $(this).text() == '查看申请书样本' ){
      $('.pop').find('.pop-title').text('申请书样本下载');
      that.popDescribe = '申请书样本下载';
    }
    $('.pop').find('.phone').attr('placeholder','手机号码（用于接收文件信息）');
    that.selected ='';
  });

  $('.btn-five').on('click',function(){
    var title =$(this).parents('li').find('h3').text();
    $('.mask, .pop').show();
      $('.pop .btn-pop').attr('ids',4);
    $('.pop').find('.pop-brandName').hide();
    $('.pop').find('.pop-select').hide();
    $('.pop').find('.pop-searchtext').hide();
    $('.pop').find('.pop-name').show();
    $('.pop').find('.pop-title').text(title);
    $('.pop').find('.btn-pop').text('预约咨询');
    $('.pop').find('.phone').attr('placeholder','手机号码（用于专业顾问与您联系）');
    that.popDescribe = title;
    that.selected ='';
  });
  



    function ajax_post(the_url,the_param,succ_callback){
    	jQuery.ajax({
    		type	: 'POST',
    		timeout : 10000, //超时时间设置，单位毫秒
    		cache	: false,
    		url	: the_url,
    		data	: the_param,
    		success	: succ_callback,
    		error	: function(html){
    		},
    	complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
 　　　　if(status=='timeout'){//超时
　　　　　  alert("请求超时，请刷新页面重试");
　　　　  }
　　       }

    	});
    }
    function loadmsgdiv(){
    var $tip = $('#divmsg');
    if ($tip.length == 0) {
        $tip = $('<div id="divloading"><div></div></div><div id="divmsg"><span></span></div><div id="layerbg"></div>');
        $('body').append($tip);
    }
}
    function savexun(){
    
    loadmsgdiv();
    
     if($("#utel").val()==""){
    showmsg(false,"请输入手机号码");
     return;
    
    }
    
    
    if($("#uname").val()==""){
    showmsg(false,"请输入联系人");
        return;
    }
    
    
     if($("#ucode").val()==""){
    showmsg(false,"请输入验证码");
        return;
    }
    
    
    
    showlayerbg();
    showloading();
    
ajax_post("/BproductAction!savezixunad.action",{"title":"商标查询","phone":$("#utel").val(),"content":$("#ucontent").val(),"uname":$("#uname").val(),"code":$("#ucode").val()},function(html){
hideloading();
hidelayerbg();
 if(html.indexOf("成功")>0){
 $("#ucontent").val("");
 

 $('.pop-close').click();
 
 
 showmsg(true,html);
 } 

else{
showmsg(false,html);
}

});
} 
   
function obcenter(ob) {
  var w=-(ob.width()/2);
  var h=-(ob.height()/2);
  ob.css({'left':'50%','margin-left':w+"px",'top':'50%','margin-top':h+"px"});
 } 


  function hideloading() {
  
  $("#divloading").hide();
  $("#divloading div").removeClass("dong");
  
 }
  function showloading() {
    obcenter($("#divloading"));
    $("#divloading div").addClass("dong");
   $("#divloading").show();
 }  


  function showmsg(istrue,str) {
  if(istrue){
  if($("#divmsg").hasClass("redbg")){
  $("#divmsg").removeClass("redbg");
  }
  }
  else{
  if(!$("#divmsg").hasClass("redbg")){
  $("#divmsg").addClass("redbg");
  }
  }
   $("#divmsg span").html(str);
   obcenter($("#divmsg"));
    $("#divmsg").show();
    
    
    if(istrue){
   setTimeout(function(){
   $("#divmsg").fadeOut(200);
   },3500);  
   }
   else{
    setTimeout(function(){
   $("#divmsg").fadeOut(200);
   },1500); 
   }
   
   
   
 }  

  
 
function hidelayerbg() {
  $("#layerbg").hide();
 }
  function showlayerbg() {
   $("#layerbg").show();
 } 
 




var issenting=false;  
var wait=60;  
var timeout = false; //启动及关闭按钮  
function time(o) { 
        if (wait == 0) { 
        timeout=false; 
            o.removeAttribute("disabled");            
            o.value="获取验证码";  
            wait = 60;  
        } else { 
      if(timeout) {
      return; 
      }
            o.setAttribute("disabled", true);  
            o.value="重新发送(" + wait + ")";  
            wait--;  
            setTimeout(function() {  
                time(o)  
            },  
            1000)  
        }  
    }  
    
    
function myyzm(o){
loadmsgdiv();
if(CheckUserName())
{
if(!issenting){
o.value="获取中...";  
issenting=true;
ajax_post("/yzm/SentSmsServlet",{"phone":$("#utel").val(),"codesession":$("#codesession").val()},function(html){
//html="验证码已发送";$("#codesession").val()

if(html=="验证码已发送"){
time(o);
}
else{
   showmsg(false,html);
      o.value="获取验证码"; 
   
}

issenting=false;
});

}
else{

showmsg(false,"验证码发送中...");
}


}




}
  function CheckUserName() {
  
var phoneex = /^1([38]\d|4[57]|5[0-35-9]|7[06-8]|8[89])\d{8}$/;
    var username=$("#utel").val();
   
    if (username == "") {
       showmsg(false,"请输入手机号码");
        return false;
    }
    
   if(!phoneex.test(username)){
     showmsg(false,"手机号码不正确");
        return false;
    }



return true;

    
}


function setCodeSession(){
ajax_post("/jsp/CodeSession.jsp",{},function(html){
$("#codesession").val(html);
});


}

