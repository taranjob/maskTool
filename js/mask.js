
/**
 *
 * @type {{canHide: boolean, showMask: maskTool.showMask, showMaskMsg: maskTool.showMaskMsg, hideMask: maskTool.hideMask, initMask: maskTool.initMask}}
 */
var maskTool = {
    canHide: true,
    showMask: function (html, callback) {
        var mask = document.querySelector('#mask')
        mask.innerHTML = html;
        mask.style.display = 'block'
        if (typeof(callback) == 'function') {
            callback();
        }
    },
    showMaskMsg: function (title, content, callback) {
        var that=this;
        $("#mask").show();
        $("#mask").find(".head").text(title);
        $("#mask").find(".main").text(content);
        $("#mask").find(".btn-sure").unbind("click");
        $("#mask").find(".btn-sure").bind("click", function (event) {
            if (typeof(callback) == "function") {
                callback();
            }
            that.hideMask();
        });

        var cancelCall = arguments[3];
        if (cancelCall != undefined && typeof(cancelCall) == "function") {
            $("#mask").find(".btn-cancel").unbind("click");
            $("#mask").find(".btn-cancel").bind("click", function (event) {
                if (typeof(cancelCall) == "function") {
                    cancelCall();
                }
                that.hideMask();
            });
        }
    },
    hideMask: function () {
        var mask = document.querySelector('#mask')
        mask.style.display = 'none';
        $("#mask").html($(".mask-hide").html());

        this.canHide=true;
        $(".mask").find(".btns").removeClass("sh-cancel");
    },
    initMask: function () {
        var that = this;
        $("#mask").click(function (event) {
            if (that.canHide) {
                if (event.target.classList.contains("mask") || event.target.classList.contains("btn-cancel")) {
                    that.hideMask();
                }
            }
        })
    }
}