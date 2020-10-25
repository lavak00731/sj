//Nav Functionality
(function(){
    'use strict';
    const triggerMenu = document.querySelector('.sj-nav-trigger');
    const mainNavTriggers = document.querySelectorAll('.sj-inner-nav .sj-menu-item[type="button"]');
    const mainNavElements = document.querySelectorAll('.sj-inner-nav .sj-menu-item');
    let visibleNavElements: [];
    const mainNav = document.querySelector('.sj-main-nav');
    let keyboardCode;
    let targetList;

    /* Closest Polyfill */
    if (!Element.prototype.matches) {
        Element.prototype.matches =
          Element.prototype.msMatchesSelector || 
          Element.prototype.webkitMatchesSelector;
      }
      
      if (!Element.prototype.closest) {
        Element.prototype.closest = function(s) {
          var el = this;
      
          do {
            if (Element.prototype.matches.call(el, s)) return el;
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
    function openNav (elem) {
        if(elem.hasAttribute('aria-expanded')) {
            if(elem.getAttribute('aria-expanded') === 'false') {
                /* Opens Menu */
                elem.setAttribute('aria-expanded', true);
                document.body.classList.add('sj-menu-open')
                /* If Main button is triggered */
                if(elem.classList.contains('sj-nav-trigger')) {
                    mainNavElements[0].focus();
                } else {
                    targetList = elem.nextElementSibling;
                    targetList.querySelectorAll('.sj-menu-item')[0].focus();
                }
            } else {
                /* Closes Menu */
                elem.setAttribute('aria-expanded', false);               
                elem.focus();
                document.body.classList.remove('sj-menu-open')
            }
        } else {
            /* Aria Expanded is not set triggers this message */
            console.log('The element does not have "aria-expanded attribute"');
        }
    }
    /* Assigns focus to elements */
    function focusManagement(targetList, nextPosition) {
        /* If you go up from very first item */
        if(targetList === 0 && nextPosition === -1) {
            visibleNavElements[visibleNavElements.length - 1].focus();   
            
        /* Last Item */   
        } else if(targetList + nextPosition > visibleNavElements.length - 1) {
            visibleNavElements[0].focus();
        } else {
            /* Items in the middle */
            visibleNavElements[targetList + nextPosition].focus();
        }
    }
    /* Menu KeyBoard Navigation */
    function keyBoardNav(elem, nextPosition) {
        visibleNavElements = [];
        Array.prototype.forEach.call(mainNavElements, function(el) {
            if(!isHidden(el)) {
                visibleNavElements.push(el);    
            }
        });        
        targetList = Array.prototype.indexOf.call(visibleNavElements, elem);
        focusManagement(targetList, nextPosition);       
    }

    
    /* Arrow Keys Navigation */
    mainNav.addEventListener('keyup', function(event){
        keyboardCode = event.keyCode;        
        switch (keyboardCode) {
            /* Arrow Left */
            case 37 :
            /* Arrow Up */
            case 38 :
              keyBoardNav(document.activeElement, -1);
              break;
            /* Arrow Down */
            case 40 :
            /* Arrow Right */
            case 39 :
                keyBoardNav(document.activeElement, 1);
              
              break;
            /* Esc */
            case 27 : 
                if(document.activeElement.parentNode.classList.contains('sj-inner-nav') && triggerMenu.getAttribute('aria-expanded') === 'true') {
                    openNav(triggerMenu);
                } else {  
                    if (document.activeElement.classList.contains('sj-menu-item')) {
                        openNav(document.activeElement.parentNode.parentNode.previousSibling.previousSibling);
                    }              
                }                
                break; 
            default:
         
          }
    }, false);

    /* Events */
    triggerMenu.addEventListener('click', function(){
        openNav(this);
    }, false);

    Array.prototype.forEach.call(mainNavTriggers, function(navBtn){
        navBtn.addEventListener('click', function(){
            openNav(this);
        }, false);
    });
})();
//Portfolio lazyload
(function(){
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
    });
})();
//Portfolio filtering
(function(){
    'use strict';
    var filterContainer = document.querySelector('.sj-filters-group');
    var ftrTarget;
    var filterElems;
    //Shows Items
    function showItem() {
        Array.prototype.forEach.call(document.querySelectorAll('.sj-portfolio-item'), function(elem){
            elem.classList.remove('sj-portfolio-filtered');
            elem.removeAttribute('hidden');
        });
    }
    //filter
    function filtering(ftr) {
        showItem();
        if(ftr.value !== "") {            
            ftrTarget = ftr.value;
            filterElems = Array.prototype.forEach.call(document.querySelectorAll('.sj-portfolio-item'), function(elem){
                if(elem.dataset.sort !== ftrTarget) {
                    elem.classList.add('sj-portfolio-filtered');
                    setTimeout(function(){
                        elem.setAttribute('hidden', true);
                    },1200);
                }
            })
        }
    }
    filterContainer.addEventListener('change', function(e){    
        filtering(e.target);
    }, false )
})();
