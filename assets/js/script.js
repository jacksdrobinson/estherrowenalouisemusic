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

function storeScroll () {
    document.documentElement.style.setProperty( "--scroll-position", window.scrollY + "px" );
}

const titleBarSpacingBlock = document.getElementsByClassName("title-bar-spacing-block")[0];
const titleBarContainer = document.getElementsByClassName("title-bar-container")[0];

function checkTitleBarScroll () {
    if ( titleBarSpacingBlock.getBoundingClientRect().bottom === titleBarContainer.getBoundingClientRect().bottom ) {
        document.documentElement.removeAttribute("data-title-bar-minimized");
    } else {
        document.documentElement.dataset.titleBarMinimized = "";
    }
}

function onScroll () {
    storeScroll();
    checkTitleBarScroll();
}

storeScroll();
document.addEventListener( "scroll", debounce( onScroll ));