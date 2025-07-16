$.when($.ready).then(function () {

    $("#btn_calculate_gj").on("click", function (e) {
        var level = $("#input_level").val(); //等级
        var cz = $("#input_cz").val(); //成长
        var gjzz = $("#input_gjzz").val(); //攻击资质
        var ll = $("#input_ll").val(); //力量属性点

        var result = level * gjzz * (1.4 + 1 * cz) / 750 + ll * cz;
        result = financial(result);

        $("#span_result_gj").text(result);
    });

    $("#btn_calculate_qx").on("click", function (e) {
        var level = $("#input_level").val(); //等级
        var cz = $("#input_cz").val(); //成长
        var tlzz = $("#input_tlzz").val(); //体力资质
        var tz = $("#input_tz").val(); //体质属性点

        var result = level * tlzz / 1000 + tz * cz * 6;
        result = financial(result);

        $("#span_result_qx").text(result);
    });

    $("#btn_calculate_fy").on("click", function (e) {
        var level = $("#input_level").val(); //等级
        var cz = $("#input_cz").val(); //成长
        var fyzz = $("#input_fyzz").val(); //防御资质
        var nl = $("#input_nl").val(); //耐力属性点

        var result = level * fyzz * (9.4 + 19 / 3 * cz) / 7500 + nl * cz * 4 / 3;
        result = financial(result);

        $("#span_result_fy").text(result);
    });

    $("#btn_calculate_sd").on("click", function (e) {
        var level = $("#input_level").val(); //等级
        var cz = $("#input_cz").val(); //成长
        var sdzz = $("#input_sdzz").val(); //速度资质
        var mj = $("#input_mj").val(); //敏捷属性点

        var result = mj * sdzz / 1000;
        result = financial(result);

        $("#span_result_sd").text(result);
    });

    function financial(x) {
      return Number.parseFloat(x).toFixed(2);
    }

});

