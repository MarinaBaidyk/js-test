var elem = document.getElementById('sticky-block');
var elemWrap = document.getElementById('sticky-wrapper');
var elemTop = elem.getBoundingClientRect().top + window.pageYOffset;
var elemHeight = elem.offsetHeight;
var fooElem = document.querySelector('footer');
var fooTop = fooElem.offsetTop;
var indentTop = elem.offsetTop;

window.onscroll = myScroll;
window.onresize = resize;

function setWidth() {
    var padding = (parseInt(getComputedStyle(elemWrap).paddingLeft) * 2).toFixed();
    var width = elemWrap.offsetWidth - padding;
    elem.style.width = width + 'px';
}

function myScroll() {
    setWidth();
    if (window.pageYOffset + indentTop > elemTop) {
        elem.classList.add('fixed');
    } else {
        elem.classList.remove('fixed');
    } 

    if (window.pageYOffset + elemHeight + (2 * indentTop) > fooTop) {
        elem.style.top = -(window.pageYOffset + (elemHeight + indentTop - fooTop)) + 'px';
    } else {
        elem.style.top = indentTop + "px";
    }    
};

function resize() {
 if (window.matchMedia('(min-width: 1200px)').matches) {
        setWidth();
    } else {
        elem.style.width = 'auto';
    }
}

