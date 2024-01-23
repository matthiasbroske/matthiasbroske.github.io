let appHeader = `
<div class="navbar">
    <a href="index.html" class="logo magic-tile">
        <span class="symbol">
            <img class="active-tile" src="images/logo.gif"/>
            <img class="static-tile" src="images/logo.png"/>
        </span>
        <span class="title">Home</span>
    </a>
    <div class="dropdown">
        <a>Projects <i class="fa fa-caret-down"></i></a>
        <div class="dropdown-content">
            <a href="vampire-survivors.html">Vampire Survivors Clone</a>
            <a href="ray-tracing.html">Ray Tracing Renderer</a>
            <a href="linked-plots.html">Linked Plots Package</a>
            <a href="planet-impact.html">Planet Impact</a>
            <a href="arctic-angler.html">Arctic Angler</a>
            <a href="inverse-kinematics.html">Inverse Kinematics</a>
            <a href="stable-fluids.html">Fluid Simulation</a>
            <a href="cloth-simulation.html">Cloth Simulation</a>
            <a href="pathfinding-simulation.html">Pathfinding Simulation</a>
            <a href="hanzi-dachu.html">汉字大厨</a>
            <a href="ray-marching.html">Ray Marching</a>
            <a href="hdr-bloom.html">HDR Shaders + Bloom</a>
        </div>
    </div>
</div>
`;
document.getElementById("new-header").innerHTML = appHeader;

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

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()/2);
    });
});