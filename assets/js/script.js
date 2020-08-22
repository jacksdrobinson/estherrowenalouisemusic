// https://pqina.nl/blog/applying-styles-based-on-the-user-scroll-position-with-smart-css/
function debounce ( callback ) {
    let frame;
    return function () {
        if ( frame ) {
            cancelAnimationFrame( frame );
        }
        frame = requestAnimationFrame( callback );
    }
}

const siteMainContainer = document.getElementsByClassName("site-main-container")[0];
const titleBarContainer = document.getElementsByClassName("title-bar-container")[0];
const contentContainer = document.getElementsByClassName("content-container")[0];
const footerContainer = document.getElementsByClassName("footer-container")[0];

function onScroll () {

    let titleBarMinHeight = parseInt( getComputedStyle( siteMainContainer ).getPropertyValue( "--title-bar-min-height" ));
    let maxAllowedScroll = Math.floor(( contentContainer.offsetHeight + footerContainer.offsetHeight ) / 2 );
    let scrollValue = Math.min( maxAllowedScroll, window.scrollY );

    document.documentElement.style.setProperty( "--scroll-position", scrollValue + "px" );

    if ( titleBarMinHeight === titleBarContainer.offsetHeight ) {
        titleBarContainer.dataset.titleBarMinimized = "";
    } else {
        titleBarContainer.removeAttribute("data-title-bar-minimized");
    }
}

onScroll();
document.addEventListener( "scroll", debounce( onScroll ));