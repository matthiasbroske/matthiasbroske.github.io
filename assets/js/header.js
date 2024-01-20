let appHeader = `
    <div class="inner">
        <a href="index.html" class="logo magic-tile">
            <span class="symbol">
                <img class="active-tile" src="images/logo.gif"/>
                <img class="static-tile" src="images/logo.png"/>
            </span>
            <span class="title">Home</span>
        </a>
        <nav>
            <ul>
                <li><a href="#menu">Menu</a></li>
            </ul>
        </nav>
    </div>
`;
document.getElementById("header").innerHTML = appHeader;

$(function() {
    $(".magic-tile").hover(
        function() {
            var activeImg = $(this).find(".active-tile");
            var staticImg = $(this).find(".static-tile");
            var imageName = activeImg.attr("src");
            activeImg.attr("src", imageName);
            activeImg.css('z-index', 0);
            staticImg.css('z-index', -1);
        },
        function() {
            var activeImg = $(this).find(".active-tile");
            var staticImg = $(this).find(".static-tile");
            activeImg.css('z-index', -1);
            staticImg.css('z-index', 0);
        }                         
    );                 
}); 