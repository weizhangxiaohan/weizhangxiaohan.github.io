
$.when($.ready).then(function () {

    function init(){
        var arr = ["法尚应舍何况非法", 
            "应无所住而生其心", 
            "是法平等无有高下",
            "所谓佛法者即非佛法", 
            "不取于相如如不动何以故"];
        var tmplData = [];
        for (var i = 0; i < arr.length; i++) {
            tmplData.push({ copyingItem: arr[i]});
        }
        $("#div_content").loadTemplate($("#copying_row"),tmplData);
    }

    init();

    $(document).on('click', '.btn-copy', function() {
        var input = $(this).siblings(".hidden-copy").get(0);
        input.type = "text";
        input.value = $(this).siblings(".span-copy").text();
        input.select();
        var success = document.execCommand("copy");
        input.type = "hidden";

        if (success) {
            toastr.success("复制成功!", null, { timeOut: 2000 });
        } else {
            toastr.warn("复制失败!");
        }
    });

});

