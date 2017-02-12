$=jQuery;

$(document).ready(function() {
    var indicator = 0;
    var indicatorA = 0;

    $("#btn1").on( "click", function () {
        $(this).addClass("button-color  button-shape");
    });

    $("#btn2").on( "click", function () {
        $(this).removeClass("button-color button-shape");
    });

    $("#btn3").on( "click", function () {
        $(this).toggleClass("button-color button-shape");
    });

    $("#btn4").on( "click", function () {
        console.log ($(this).attr("name"));
    });

    $("#btn5").on( "click", function () {
        $(this).attr("name", "Maryna");
    });

    $("#btn6").on( "click", function () {
       var x=confirm("Сообщение. Нажмеш ок, и увидешь приветствие в консоле.");
        if (x) {
          console.log ("Всем привет!!!! ))))");
        }
    });

    $("#btn7").on( "click", function () {
        if (!indicator) {
            var buttonClone = $(this).clone()
                .attr("id", "button-clone")
                .text("cloned!")
                .appendTo($(this).parent());
            indicator++;
        }
    });

    $("#btn8").on( "click", function () {
        var array = [];
        for (var i=0; i<($("button").length); i++) {
            array.push ($("button").eq(i).text());
        }
        console.log (array);
    });

    $("#btn9").on( "click", function () {
        if (indicator>0) {
            console.log($("body").find($("button").eq(9)));
        }
        else {
            console.log($("body").find($("button").eq(8)));
        }
    });

    $("#btn10").on( "click", function () {
        $("#text1").fadeToggle(1000);
    });


    $("#btn11").on( "click", function () {
        $("#text2").toggle(1000); //Или (hide скрывает,  show показывает).
    });

    $("#btn12").on( "click", function () {
        var button = $(this);
        console.log ("Высота: " + button.height()
            + ",\nширина: " + button.width()
            + ",\nпозиция X " + button.offset().left //position - позиция относительно ближайшего родителя(css- position: relative, absolute, fixed).
            + ",\nпозиция Y " + button.offset().top //offset - позиция относительно страницы
            + ",\nтекст: " +  button.text()
            + ",\nродитель: " +   button.parent().get(0).tagName
            + ",\nпредыдущий елемент: " + button.prev().get(0).tagName
            + ",\nследущий елемент: " + button.next().get(0).tagName
            + ",\nатрибуты:" );
        console.log ( button.get(0).attributes);
    });

    $("#btn13").on( "click", function () {
        $(this).slideToggle(1000);

    });

    $("#btn14").on( "click", function () {
        $("#btn13").slideToggle(1000);
    });

    $("#btn15").on( "click", function () {
        var height = $(this).height();

        $(this).animate({width: "toggle", padding:0, height: height, "text-indent": "-200px" }, 5000 , function() { $(this).hide(); }
         );
    });

    $("#btn16").on( "click", function () {
        var height = $(this).height();

        $(this).animate({width: "toggle", padding:0, height: height }, 5000 , function() { $(this).hide(); }
        );
    });

    $("#btn17").on( "click", function () {
        if (!indicatorA) {
            $("<a/>", {
                "href": "test.html",
                text: "Страница тест"
            }).appendTo("#empty");
        }
        indicatorA++;
    });

    $(window).resize(function(){
        $("button").css("background-color", "#3E37B6").css("color", "#ffffff");
    });

    var previousPosition =0;
    $(window).scroll(function(){
        var currentPosition = $(window).scrollTop();
        if (currentPosition > previousPosition) {
            $("button").css("background-color", "#FFFFA8").css("color", "#000000");
        }
        previousPosition = currentPosition;
    });

    $("#event-input").on("input", function () {
        console.log($(this).val());
    });

    $("#event-keypress").on("keypress", function (e) {
        console.log("Код введенного символа:" + e.which);
        console.log("Значения поля:" +  $(this).val());
    });

    $("#event-keypress").on( "keydown", function (e) {
        console.log("Код нажатой кнопки:" + e.which);
    });

    $( "input[name*='number']" ).on("input", function () {
        console.log($(this).attr("name"), $(this).val());
    });

    $("#select-change").on("change", function () {
        console.log($(this).attr("name"), $(this).val());
    });

    $("#recurring-field").on("input", function () {
       $("#field-duplicate").val($(this).val());
    });

    $("#jQuery-form").on("submit", function () {
        var sample = $("#jQuery-form input, #jQuery-form select");
        console.log("Submit");
        for(var i=0; i<(sample.length - 1); i++){
            console.log(sample.eq(i).attr("name"), sample.eq(i).val());
            if ((sample.eq(i).attr("type")=="radio") || (sample.eq(i).attr("type")=="checkbox")) {
                console.log(sample.eq(i).prop("checked"));
            }
        }
        return false;
    });

});