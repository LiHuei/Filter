
// nav selecter

let is_show = false

$("li a").on("click",function(){
    if(is_show == false){
        $(this).parent(".top-li").addClass("active")
        $(this).siblings(".a").css("display", "block")
        $(this).find(".plus").css("display", "none")
        $(this).find(".minus").css("display", "")
        is_show = true
    }else{
        $(this).parent(".top-li").removeClass("active")
        $(this).siblings(".a").css("display", "none")
        $(this).find(".plus").css("display", "")
        $(this).find(".minus").css("display", "none")
        is_show = false
    }
})

$(window).resize(function(){
    if( $(window).width() >= 768 ){
        $(".a").show()
        is_show = true
    }else{
        is_show = false
    }
})


// show filter tag when categories checked

if( $(window).width() >= 768 ){
    $("input[type='checkbox']:eq(0)").change(function() {
        if(this.checked) {
            $(".tag-box1").css("display", "flex")
        }else{
            $(".tag-box1").css("display", "none")
        }
    });

    $("input[type='checkbox']:eq(1)").change(function() {
        if(this.checked) {
            $(".tag-box2").css("display", "flex")
        }else{
            $(".tag-box2").css("display", "none")
        }
    });

    $("input[type='checkbox']:eq(2)").change(function() {
        if(this.checked) {
            $(".tag-box3").css("display", "flex")
        }else{
            $(".tag-box3").css("display", "none")
        }
    });

    $("input[type='checkbox']:eq(3)").change(function() {
        if(this.checked) {
            $(".tag-box4").css("display", "flex")
        }else{
            $(".tag-box4").css("display", "none")
        }
    });

    $("input[type='checkbox']:eq(4)").change(function() {
        if(this.checked) {
            $(".tag-box5").css("display", "flex")
        }else{
            $(".tag-box5").css("display", "none")
        }
    });
}

// delete filter tag

$(".tag-box1").on("click", function(){
    $(this).css("display", "none")
    $("input[type='checkbox']:eq(0)").prop("checked", false);
})

$(".tag-box2").on("click", function(){
    $(this).css("display", "none")
    $("input[type='checkbox']:eq(1)").prop("checked", false);
})

$(".tag-box3").on("click", function(){
    $(this).css("display", "none")
    $("input[type='checkbox']:eq(2)").prop("checked", false);
})

$(".tag-box4").on("click", function(){
    $(this).css("display", "none")
    $("input[type='checkbox']:eq(3)").prop("checked", false);
})

$(".tag-box5").on("click", function(){
    $(this).css("display", "none")
    $("input[type='checkbox']:eq(4)").prop("checked", false);
})

// To the content page when clicking the card

document.querySelector(".article-card").onclick = function() {
    window.location.href = 'content.html';
}

// count article card

totalResult = $(".article-box").find(".article-card").length;
$(function(){
    $(".show-result > span").text(totalResult)
    $(".show-result > span").css("color","#9013fe")
    $(".show-result > span").css("font-weight","600")
})

