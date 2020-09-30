import './scss/index.scss'

const WOW = require('wow.js');

// For import from HTML

require('./images/logo.png')
require('./images/story-1.jpg')
require('./images/story-2.jpg')
require('./images/blog-item-1.jpg')
require('./images/blog-item-2.jpg')
require('./images/blog-item-3.jpg')
require('./images/qualities-photo.png')
require('./images/logo.png')
require('./images/logo.png')

function NavBar() {
    $('#nav li.more').before($('#overflow > li'));
    var navItemMore = $('#nav > li.more'),
        navItems = $('#nav > li:not(.more)'),
        navItemWidth = navItemMore.width() + 250,
        windowWidth = $('#nav').parent().width(),
        navOverflowWidth;
    navItems.each(function () {
        navItemWidth += $(this).width();
    });

    navItemWidth > windowWidth ? navItemMore.show() : navItemMore.hide();
    while (navItemWidth > windowWidth) {
        navItemWidth -= navItems.last().width();
        navItems.last().prependTo('#overflow');
        navItems.splice(-1, 1);
    }
    navOverflowWidth = $('#overflow').width();
}


(function () {

    var throttle = function (type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function () {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    throttle("resize", "optimizedResize");
})();


$(document).ready(function () {

    window.addEventListener("optimizedResize", NavBar);
    NavBar()

    // Anchors
    $("#scrollDown").on("click", function (event) {
        event.preventDefault();

        const top = $('#features').offset().top
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
    // To Features
    $("#toFeatures").on("click", function (event) {
        event.preventDefault();

        const top = $('#features').offset().top
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    $("#toBlog").on("click", function (event) {
        event.preventDefault();

        const top = $('#blog').offset().top
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    $("#toQualites").on("click", function (event) {
        event.preventDefault();

        const top = $('#qualites').offset().top
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    $("#toTeam").on("click", function (event) {
        event.preventDefault();

        const top = $('#team').offset().top
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });


    $("#toContacts").on("click", function (event) {
        event.preventDefault();

        const top = $('#contacts').offset().top
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    //Animates section
    new WOW().init({
        boxClass: 'wow',
        animateClass: 'animated'
    })

})