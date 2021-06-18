// change backgruond menu when scroll
let header = document.querySelector('header');
document.addEventListener('scroll', function() {
    let scrollY = window.pageYOffset;
    if (scrollY > 200) {
        header.classList.add('activemenu');
    } else {
        header.classList.remove('activemenu');
    }
});

// back to top btn
let backtotop = document.querySelector('.back-to-top');
backtotop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
let positionSectionProduct = document.querySelector('.products').offsetTop;
window.addEventListener('scroll', function() {
    let positionScroll = window.pageYOffset;
    if (positionScroll > positionSectionProduct - heightHeader) {
        backtotop.classList.add('active');
    } else {
        backtotop.classList.remove('active');
    }
});

// menu desktop
let menus = document.querySelectorAll('header .container-fluid .menu a');
let heightHeader = document.querySelector('header').offsetHeight;
let sections = [];

function removeActiveMenu() {
    menus.forEach(function(menu_element, menu_index) {
        menu_element.classList.remove('active');

    })
}
menus.forEach(function(element, index) {
    let deletehref = element.getAttribute('href').replace('#', '');
    let section = document.querySelector('.' + deletehref);
    sections.push(section);
    element.addEventListener('click', function(event) {
        event.preventDefault();

        window.scrollTo({
            top: section.offsetTop - heightHeader + 1,
            behavior: 'smooth'
        });
        removeActiveMenu();
        element.classList.add('active');
    });
});

window.addEventListener('scroll', function(event) {
    let scrollActive = window.pageYOffset;

    sections.forEach(function(section, index) {
        if (scrollActive > (section.offsetTop - heightHeader)) {
            removeActiveMenu();
            menus[index].classList.add('active');
        } else {
            menus[index].classList.remove('active');
        }
    });
});


//menu moible

let navmoible = document.querySelector('header .nav');
let chua = document.querySelector('.right .btnmenu');
let menumoible = document.querySelectorAll('header .nav .menu a');
let heightHeadermoible = document.querySelector('header').offsetHeight;
let sectionsmoible = [];

chua.addEventListener('click', function() {
    navmoible.classList.toggle('active');
    chua.classList.toggle('clicked');
})

function removeActiveMenuMoible() {
    menumoible.forEach(function(menumoible_element, menu_index) {
        menumoible_element.classList.remove('active');
    })
}
menumoible.forEach(function(element, index) {

    let deletehrefmoible = element.getAttribute('href').replace('#', '');
    let sectionmoible = document.querySelector('.' + deletehrefmoible);
    sectionsmoible.push(sectionmoible);
    element.addEventListener('click', function(event) {
        event.preventDefault();

        window.scrollTo({
            top: sectionmoible.offsetTop - heightHeadermoible + 1,
            behavior: 'smooth'
        });

        removeActiveMenuMoible();
        element.classList.add('active');
        document.querySelector('.nav').classList.remove('active');
        chua.classList.remove('clicked');

    });
});


window.addEventListener('scroll', function(event) {
    let scrollActive = window.pageYOffset;

    sectionsmoible.forEach(function(section, index) {
        if (scrollActive > (section.offsetTop - heightHeader)) {
            removeActiveMenuMoible();
            menumoible[index].classList.add('active');
        } else {
            menumoible[index].classList.remove('active');
        }


    });
});

//lang

let langCurrent = document.querySelector('.lang__current');
let langOpt = document.querySelector('.lang__option');
let langItems = document.querySelectorAll('.lang__option a');
let langSpan = document.querySelector('.lang__current span');



langCurrent.addEventListener('click', function(event) {
    event.stopPropagation();

    langOpt.classList.toggle('active');
});

langItems.forEach(function(item) {
    item.addEventListener('click', function() {
        let textItem = this.textContent;
        let textTemp = langSpan.textContent;
        langSpan.innerHTML = textItem;
        this.textContent = textTemp;
        langOpt.classList.remove('active');
    });
});

document.addEventListener('click', function() {

    langOpt.classList.remove('active');
})

//popup-video
let button_video = document.querySelectorAll('.play_btn');
let watch_video = document.querySelector('.info .btnmain');
let popup_video = document.querySelector('.popup-video');
let close_popup = document.querySelector('.popup-video .close');
let iframe = document.querySelector('.popup-video iframe');
button_video.forEach(function(button) {
    button.addEventListener('click', function() {
        popup_video.style.display = 'flex';
        let video_id = button.getAttribute('data-video-id');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + video_id + '?autoplay=1')
    });
});

watch_video.addEventListener('click', function() {

    popup_video.style.display = 'flex';
    let video_id = watch_video.getAttribute('data-video-id');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + video_id + '?autoplay=1')
});


close_popup.addEventListener('click', function() {
    popup_video.style.display = 'none';
    iframe.setAttribute('src', '');

});

document.querySelector('.popup-video').addEventListener('click', function() {
    popup_video.style.display = 'none';
    iframe.setAttribute('src', '');
});

// slider 
// let listItemsSlider = document.querySelectorAll('.slider__item');
// let number = document.querySelector('.paging .paging__number .number');
// let dot_li = document.querySelectorAll('.paging .paging__dotted li');
// let currentSlider = 0;
// listItemsSlider.forEach(function(itemSlider, index) {
//     if (itemSlider.classList.contains('active')) {
//         currentSlider = index;
//     }
// });

// function showNumber(index) {

//     number.innerHTML = (index).toString().padStart(2, '0');
// }

// showNumber(currentSlider + 1);


// document.querySelector('.control__btn.next.btn').addEventListener('click', function() {
//     if (currentSlider < (listItemsSlider.length - 1)) {
//         goTo(currentSlider + 1);
//     } else {
//         goTo(0);

//     }

// });

// document.querySelector('.control__btn.prev.btn').addEventListener('click', function() {
//     if (currentSlider > 0) {
//         goTo(currentSlider - 1);
//     } else {
//         goTo(listItemsSlider.length - 1);

//     }
// });

// function goTo(index) {
//     listItemsSlider[currentSlider].classList.remove('active');
//     listItemsSlider[index].classList.add('active');
//     dot_li[currentSlider].classList.remove('is-selected');
//     dot_li[index].classList.add('is-selected');
//     currentSlider = index;
//     showNumber(currentSlider + 1);
// }

//slider flickity

let $carousel = $('.slider__item-wrap');
$carousel.flickity({
    // options
    cellAlign: 'left',
    lazyLoad: true,
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    draggable: true,
    on: {
        ready: function() {
            let dotted = $('.flickity-page-dots');
            paging = $('.paging .paging__dotted ');
            dotted.appendTo(paging);
        },
        change: function(index) {
            let number = $('.paging .paging__number .number');
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(2, 0))
        }
    }

});

let $carousel2 = $('.photos');
$carousel2.flickity({
    // options
    lazyLoad: 2,
    freeScroll: true,
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    draggable: true,
    wrapAround: true
});


$('.slider__bottom .control .prev').on('click', function() {
    $carousel.flickity('previous');
});

$('.slider__bottom .control .next').on('click', function() {
    $carousel.flickity('next');
});



//tags

let tagText = document.querySelectorAll('.news__tags .news__tags-text .tag');
let tagList = document.querySelectorAll('.news__items-grid');
tagText.forEach(function(item, index) {
    item.addEventListener('click', function() {
        let tagID = index + 1;
        tagText.forEach(function(tag1) {
            tag1.classList.remove('active');
        });

        tagList.forEach(function(tag2) {
            tag2.classList.remove('active');
        });

        this.classList.add('active');

        document.querySelector('.list-' + tagID).classList.add('active');
    });
});




//PhotoSwipe

var initPhotoSwipeFromDOM = function(gallerySelector) {
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

// $(window).load(function() {

// });
initPhotoSwipeFromDOM('.carousel-img');




//progress-bar

var $carouselbot = $('.carouselbot').flickity();

var $progressBar = $('.progress-bar');

$carouselbot.on('scroll.flickity', function(event, progress) {
    progress = Math.max(0, Math.min(1, progress));
    $progressBar.width(progress * 100 + '%');
});