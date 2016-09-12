
$(function(){
    console.log('dom');
    maskTool.initMask();

})
function singleClick(){
    maskTool.showMaskMsg("温馨提示","您已领取过该门店的首单优惠","");
}
function singleClickCall(){
    maskTool.showMaskMsg("温馨提示","您已领取过该门店的首单优惠",sure);
    function sure(){
        alert("确定回调");
    }

}
function twoClick(){
    $(".mask").find(".btns").addClass("sh-cancel");//显示取消按钮
    maskTool.showMaskMsg("温馨提示","您已领取过该门店的首单优惠",sure,cancel);//传递对应的回调

    function sure(){
        alert("确定回调");
    }
    function cancel(){
        alert("取消回调");
    }

}
function singleClickNoHide(){
    maskTool.canHide=false;
    maskTool.showMaskMsg("温馨提示","您已领取过该门店的首单优惠","");
}
function imgBig(imgurl){
    maskTool.showMask('<div class="imgbig" style="background-image: url(' + imgurl + ')" ></div>', "");
}
