(function () {
    'use strict';
    var triggerMenu = document.querySelector('.sj-nav-trigger');
    var mainNavTriggers = document.querySelectorAll('.sj-inner-nav .sj-menu-item[type="button"]');
    var mainNavElements = document.querySelectorAll('.sj-inner-nav .sj-menu-item');
    var visibleNavElements = [];
    var mainNav = document.querySelector('.sj-main-nav');
    var keyboardCode;
    var targetList;
    /* Closest Polyfill */
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector;
    }
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (s) {
            var el = this;
            do {
                if (Element.prototype.matches.call(el, s))
                    return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }
    /* Checks if an element is visible */
    function isHidden(el) {
        return (el.offsetParent === null);
    }
    /* Open Menu or Menu Lists */
    function openNav(elem) {
        if (elem.hasAttribute('aria-expanded')) {
            if (elem.getAttribute('aria-expanded') === 'false') {
                /* Opens Menu */
                elem.setAttribute('aria-expanded', true);
                /* If Main button is triggered */
                if (elem.classList.contains('sj-nav-trigger')) {
                    mainNavElements[0].focus();
                }
                else {
                    targetList = elem.nextElementSibling;
                    targetList.querySelectorAll('.sj-menu-item')[0].focus();
                }
            }
            else {
                /* Closes Menu */
                elem.setAttribute('aria-expanded', false);
                elem.focus();
            }
        }
        else {
            /* Aria Expanded is not set triggers this message */
            console.log('The element does not have "aria-expanded attribute"');
        }
    }
    /* Assigns focus to elements */
    function focusManagement(targetList, nextPosition) {
        /* If you go up from very first item */
        if (targetList === 0 && nextPosition === -1) {
            visibleNavElements[visibleNavElements.length - 1].focus();
            /* Last Item */
        }
        else if (targetList + nextPosition > visibleNavElements.length - 1) {
            visibleNavElements[0].focus();
        }
        else {
            /* Items in the middle */
            visibleNavElements[targetList + nextPosition].focus();
        }
    }
    /* Menu KeyBoard Navigation */
    function keyBoardNav(elem, nextPosition) {
        visibleNavElements = [];
        mainNavElements.forEach(function (el) {
            if (!isHidden(el)) {
                visibleNavElements.push(el);
            }
        });
        targetList = Array.prototype.indexOf.call(visibleNavElements, elem);
        focusManagement(targetList, nextPosition);
    }
    /* Arrow Keys Navigation */
    mainNav.addEventListener('keyup', function (event) {
        keyboardCode = event.keyCode;
        switch (keyboardCode) {
            /* Arrow Left */
            case 37:
            /* Arrow Up */
            case 38:
                keyBoardNav(document.activeElement, -1);
                break;
            /* Arrow Down */
            case 40:
            /* Arrow Right */
            case 39:
                keyBoardNav(document.activeElement, 1);
                break;
            /* Esc */
            case 27:
                if (document.activeElement.parentNode.classList.contains('sj-inner-nav') && triggerMenu.getAttribute('aria-expanded') === 'true') {
                    openNav(triggerMenu);
                }
                else {
                    if (document.activeElement.classList.contains('sj-menu-item')) {
                        openNav(document.activeElement.parentNode.parentNode.previousSibling.previousSibling);
                    }
                }
                break;
            default:
        }
    }, false);
    /* Events */
    triggerMenu.addEventListener('click', function () {
        openNav(this);
    }, false);
    mainNavTriggers.forEach(function (navBtn) {
        navBtn.addEventListener('click', function () {
            openNav(this);
        }, false);
    });
})();
