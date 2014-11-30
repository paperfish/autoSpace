$(function() {
    var duration = 3000;
    $(".next").on("click", function() {
        switch (space.screen) {
            case "loading":
                break;
            case "welcome":
                $('#welcome').hide();
                $('#angle').show();
                $(".back").show();
                space.screen = "angle";
                break;
            case "angle":
                $('#angle').hide();
                $('#views').show();
                $("#views table").css("display", "none");
                $("#" + space.angle + "-arrangement").css("display", "block");
                space.screen = "views";
                break;
            case "views":
                space.screen="dims";
                views();
                $("#views").css("display","none");
                $("#dims").css("display","block");
                break;
            case "dims":
                cviews();
                break;
        }
    });
    $(".back").on("click", function() {
        switch (space.screen) {
            case "loading":
                break;
            case "welcome":
                break;
            case "angle":
                $('#angle').hide();
                $('#welcome').show();
                $(".back").hide();
                space.screen = "welcome";
                break;
            case "views":
                $('#views').hide();
                $("#angle").show();
                space.screen = "angle";
        }
    });
    $("#angle div").on("click", function() {
        $("#angle div").css("color", "#000");
        $(this).css("color", "#f60");
        space.angle = $(this).attr("id");
        setTimeout(function() {
            $('#angle').hide();
            $('#views').show();
            $("#views table").css("display", "none");
            $("#" + space.angle + "-arrangement").css("display", "block");
            space.screen = "views";
        }, 200);
    });
    $("#views table div").on("click", function() {
        if ($(this).hasClass("normal"))
            $(this).addClass("selected").removeClass("normal");
        else
            $(this).addClass("normal").removeClass("selected");
    });
});
function views(){
    var arr=$(".selected");
    for(var i=0;i<arr.length;i++){
        space.views[i]=arr.eq(i).html();
    }
    //alert(JSON.stringify(space.views))
}
function cviews(){
    
}