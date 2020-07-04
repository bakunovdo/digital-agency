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



export function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 48.856,
      lng: 2.3427
    },
    zoom: 16,
    styles: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#212121"
        }]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#212121"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "poi.business",
        "stylers": [{
          "visibility": "on"
        }]
      },
      {
        "featureType": "poi.business",
        "elementType": "labels.text",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#181818"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1b1b1b"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#2c2c2c"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8a8a8a"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#373737"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3c3c3c"
        }]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
          "color": "#4e4e4e"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#004044"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3d3d3d"
        }]
      }
    ]

  });
}

function NavBar() {
  $('#nav li.more').before($('#overflow > li'));
  var navItemMore = $('#nav > li.more'),
    navItems = $('#nav > li:not(.more)'),
    navItemWidth = navItemMore.width() + 320,
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

  

  // $('.home-scroll--hint').addClass('animate__flipInX')

  // Anchors
  $("#scrollDown").on("click", function (event) {
    event.preventDefault();

    const top = $('#features').offset().top
    $('body,html').animate({scrollTop: top}, 1000);
  });
  // To Features
  $("#toFeatures").on("click", function (event) {
    event.preventDefault();

    const top = $('#features').offset().top
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $("#toBlog").on("click", function (event) {
    event.preventDefault();

    const top = $('#blog').offset().top
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $("#toQualites").on("click", function (event) {
    event.preventDefault();

    const top = $('#qualites').offset().top
    $('body,html').animate({scrollTop: top}, 1000);
  });

  $("#toTeam").on("click", function (event) {
    event.preventDefault();

    const top = $('#team').offset().top
    $('body,html').animate({scrollTop: top}, 1000);
  });

  
  $("#toContacts").on("click", function (event) {
    event.preventDefault();

    const top = $('#contacts').offset().top
    $('body,html').animate({scrollTop: top}, 1000);
  });

  //Animates section 
  new WOW().init({
    boxClass: 'wow',
    animateClass: 'animated'
  })

})

