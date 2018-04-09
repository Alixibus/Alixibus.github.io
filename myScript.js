$('.enter_link').click(function () {
    $('#splashScreenBSRow').fadeOut(500);
});

document.getElementById("tabButton1").onclick = function(){clickedButtonOne()};
function clickedButtonOne()
{    
    $('html,body').animate({
        scrollTop: $("#aboutSection").offset().top},
        'slow');
}
document.getElementById("tabButton2").onclick = function(){clickedButtonTwo()};
function clickedButtonTwo()
{
    $('html,body').animate({
        scrollTop: $("#workSection").offset().top},
        'slow');
}
