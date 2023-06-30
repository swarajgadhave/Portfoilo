function setFavIco(favico) {
    let isbrowserColorModeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(isbrowserColorModeDark) {
        favico.href = "assets/images/favico/light.ico";
    }else {
        favico.href = "assets/images/favico/dark.ico";
    }
}
function setHomePageUrl() {
    let indexPageUrl = "http://avinashdengani.tech/";
    $(".logo-link").attr("href", indexPageUrl);
}


setHomePageUrl();




$(document).ready(function() {
    //  FAVICO
    favico = document.createElement('link');
    favico.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(favico);
    setFavIco(favico);

    // REVEAL ON SCROLL
    new RevealScroll($(".reveal"), 200);

    // BACK TO TOP
    $('#back-to-top').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('#back-to-top').fadeIn('2000');
            $('#back-to-top').removeClass('animate__bounceOutUp');
            $('.header').addClass('shadow-sm');
        } else {
            $('#back-to-top').addClass('animate__bounceOutUp');
            $('.header').removeClass('shadow-sm');
        }
    });
    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 200, 'easeInOutExpo');
        return false;
    });
    
    

    //function to set Color Mode
    function setColorMode(theme) {
        if(theme.checked) {
            document.documentElement.style.cssText = '--bg-primary: #212429; --color-primary: #ffffff; --color-card: #000000; --bg-card: #ecf0f3;';
            $(".logo-img").attr("src", "assets/images/logo/light.png");
            $("#education-img-graduation").attr("src", "assets/images/education/graduateWhite.png");
            $("#education-img-hsc").attr("src", "assets/images/education/hscWhite.png");
            $("#education-img-ssc").attr("src", "assets/images/education/sscWhite.png");
            for(let i=0; i<themeSwitch.length; i++) {
                themeSwitch[i].checked = true;
            }
        } else {
            document.documentElement.style.cssText = '--bg-primary: #ecf0f3; --color-primary: #000000; --color-card: #ffffff; --bg-card: #212429;';
            $(".logo-img").attr("src", "assets/images/logo/dark.png");
            $("#education-img-graduation").attr("src", "assets/images/education/graduateDark.png");
            $("#education-img-hsc").attr("src", "assets/images/education/hscDark.png");
            $("#education-img-ssc").attr("src", "assets/images/education/sscDark.png");
            for(let i=0; i<themeSwitch.length; i++) {
                themeSwitch[i].checked = false;
            }
        }
    }

    //Get all inputs to switch darkMode
    const themeSwitch = $('.switch-color-mode-checkbox-input');
    
    // Adding events to all darkmode Inputs
    for(let i=0; i<themeSwitch.length; i++) {
        themeSwitch[i].addEventListener('change', () => {
            setColorMode(themeSwitch[i]);
        });
        setColorMode(themeSwitch[i]);
    }
});


//HAMBURGAR
$(document).ready(function(){
	$('.media-right-nav-hamburgar').click(function(){
		$(this).toggleClass('open');
        $(".media-right-nav-list").toggleClass('d-none');
   });
});


 // MEDIA WATCHER
 function mediaWatcherFunction(mediaWatcher) {
    if (mediaWatcher.matches) {
        // ABOUT
        $(".about-content-data").removeClass("flex-row");
        $(".about-content-data").addClass("flex-column");
        
        $(".about-content-data-column-child").addClass("d-flex");
        $(".about-content-data-column-child").addClass("flex-column");
        $(".about-content-data-column-child").addClass("align-items-center");
        $(".about-content-data-column").removeClass("col-md-6");
        
        // EDUCATION
        $(".education-content").removeClass("flex-row");
        $(".education-content").addClass("flex-column");
        
        //CONTACT
        $(".contact-details").removeClass("flex-row");
        $(".contact-details").addClass("flex-column");
    } else {
        // ABOUT
        $(".about-content-data").addClass("flex-row");
        $(".about-content-data").removeClass("flex-column");
        
        $(".about-content-data-column-child").removeClass("d-flex");
        $(".about-content-data-column-child").removeClass("flex-column");
        $(".about-content-data-column-child").removeClass("align-items-center");
        
        $(".about-content-data-column").addClass("col-md-6");

        // EDUCATION
        $(".education-content").addClass("flex-row");
        $(".education-content").removeClass("flex-column");
        
        //CONTACT
        $(".contact-details").addClass("flex-row");
        $(".contact-details").removeClass("flex-column");
    }
}
var mediaWatcher = window.matchMedia("(max-width: 1000px)");
mediaWatcherFunction(mediaWatcher);
mediaWatcher.addListener(mediaWatcherFunction);


// SMOOTHSCROLLER FOR NAVBAR
new SmoothScroll("#nav-about");
new SmoothScroll("#nav-project");
new SmoothScroll("#nav-skills");
new SmoothScroll("#nav-education");
new SmoothScroll("#nav-contact");

// SMOOTHSCROLLER FOR MEDIA NAVBAR
new SmoothScroll("#media-nav-about");
new SmoothScroll("#media-nav-project");
new SmoothScroll("#media-nav-skills");
new SmoothScroll("#media-nav-education");
new SmoothScroll("#media-nav-contact");

// NAVBAR WAYPOINTS
new MyWaypoints("#about",".my-nav-item .my-nav-link", "#nav-about", "my-nav-link-active");
new MyWaypoints("#projects", ".my-nav-item .my-nav-link", "#nav-project", "my-nav-link-active");
new MyWaypoints("#skills", ".my-nav-item .my-nav-link", "#nav-skills", "my-nav-link-active");
new MyWaypoints("#education", ".my-nav-item .my-nav-link", "#nav-education", "my-nav-link-active");
new MyWaypoints("#contact", ".my-nav-item .my-nav-link", "#nav-contact", "my-nav-link-active");

// MEDIA NAVBAR WAYPOINTS
new MyWaypoints("#about",".nav-item-media .nav-link-media", "#media-nav-about", "my-nav-link-active");
new MyWaypoints("#projects", ".nav-item-media .nav-link-media", "#media-nav-project", "my-nav-link-active");
new MyWaypoints("#skills", ".nav-item-media .nav-link-media", "#media-nav-skills", "my-nav-link-active");
new MyWaypoints("#education", ".nav-item-media .nav-link-media", "#media-nav-education", "my-nav-link-active");
new MyWaypoints("#contact", ".nav-item-media .nav-link-media", "#media-nav-contact", "my-nav-link-active");




//OWL CAROUSEL
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:3,
        rewind: true,
        autoplay:true,
        dots:true,
        responsiveClass: true,
        autoplayTimeout:3000,
        margin:30,
        nav: false,
        smartSpeed:450,
        autoWidth:false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                dots:false,
                nav:true
            },
            800: {
                items:2,
                dots:false,
                nav:true
            },
            1200:{
                items:3
            }
        }
    });

    $( ".owl-prev").html(`
        <button class="owl_prev btn btn-pink-red rounded-circle m-0 " style='position:absolute;left:40%;'>
            <i class="fa fa-chevron-left fa-lg "></i>
        </button>`);

    $( ".owl-next").html(`
        <button class="owl_next btn btn-pink-red rounded-circle m-0 " style='position:absolute;right:40%;'>
            <i class="fa fa-chevron-right fa-lg "></i>
        </button>`);
});

// TABS
let tabsListItems = document.getElementsByClassName("tabs-list-item");
function setActiveTab(tab) {
    for(let i=0; i<tabsListItems.length; i++) {
        tabsListItems[i].childNodes[1].classList.remove('active');
    }
    tab.childNodes[1].classList.add('active');
}

let tabsContentItems = document.getElementsByClassName("tab-content");
function setActiveTabContent(tabContent) {
    for(let i=0; i<tabsContentItems.length; i++) {
        tabsContentItems[i].classList.remove('d-flex');
        tabsContentItems[i].classList.remove('flex-row');
    }
    tabContent.classList.add('d-flex');
    tabContent.classList.add('flex-row');
}
$(document).ready(function(){
    $( "#tabs" ).responsiveTabs({
        startCollapsed: 'accordion',
        collapsible: false,
        animation: 'slide',
        duration: 500,
    });
    $("#tabs").responsiveTabs('deactivate', 1);
    
    for(let i=0; i<tabsListItems.length; i++) {
        tabsListItems[i].addEventListener('click', function() {
            setActiveTab(tabsListItems[i]);
            setActiveTabContent(tabsContentItems[i]);
        });
    }
});
