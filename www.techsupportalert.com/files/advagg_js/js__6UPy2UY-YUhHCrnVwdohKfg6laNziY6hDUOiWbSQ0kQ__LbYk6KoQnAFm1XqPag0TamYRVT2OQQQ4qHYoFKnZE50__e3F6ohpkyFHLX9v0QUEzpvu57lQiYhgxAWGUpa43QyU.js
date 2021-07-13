(function ($) {

  /**
   * Google CSE utility functions.
   */
  Drupal.googleCSE = Drupal.googleCSE || {};

  Drupal.behaviors.googleCSE = {
    attach: function (context, settings) {
      // Show watermark, if not disabled in module settings.
      if (Drupal.settings.googleCSE.showWaterMark) {
        Drupal.googleCSE.googleCSEWatermark('#search-block-form.google-cse', context);
        Drupal.googleCSE.googleCSEWatermark('#search-form.google-cse', context);
        Drupal.googleCSE.googleCSEWatermark('#google-cse-results-searchbox-form', context);
      }
    }
  };

  /**
   * Show google CSE watermark.
   */
  Drupal.googleCSE.googleCSEWatermark = function(id, context) {
    var f = $(id, context)[0];
    if (f && (f.query || f['edit-search-block-form--2'] || f['edit-keys'])) {
      var q = f.query ? f.query : (f['edit-search-block-form--2'] ? f['edit-search-block-form--2'] : f['edit-keys']);
      var n = navigator;
      var l = location;
      if (n.platform == 'Win32') {
        q.style.cssText = 'border: 1px solid #7e9db9; padding: 2px;';
      }
      var b = function () {
        if (q.value == '') {
          q.style.background = '#FFFFFF url(https://www.google.com/cse/intl/' + Drupal.settings.googleCSE.language + '/images/google_custom_search_watermark.gif) left no-repeat';
        }
      };
      var f = function () {
        q.style.background = '#ffffff';
      };
      q.onfocus = f;
      q.onblur = b;
//      if (!/[&?]query=[^&]/.test(l.search)) {
      b();
//      }
    }
  };

})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {
/**
 * Handle width and position for the ad, while page is scrolling.
 */
Drupal.behaviors.slideAd = {
  attach: function (context) {
    if (Drupal.settings && Drupal.settings.slideAd) {

      var winHeight = $(document).height();
      var popup = $('#slidead-popup', context);
      var popWidth = Drupal.settings.slideAd.width;
      var popHidden = popWidth+22; /* 10 + 10 (padding) + 1 + 1 (border) */

      popup.css('width', popWidth + 'px');
      popup.css('right', '-' + popHidden + 'px');

      var handlePopup = function() {
        var scrollTop = $(document).scrollTop();
        if(scrollTop > (winHeight/4)){
          popup.show('500').animate({right: '0'});
        } else {
          //popup.animate({right: '-' + popHidden + 'px' }, 'slow');
          popup.hide('500');
        }
      }

      var myInterval = setInterval(handlePopup, 500);

      $('#pop-close span', context).click(function() {
        popup.hide();
        popup = null;
        clearInterval(myInterval);
      });
    }
  }
};

})(jQuery);

;/*})'"*/
;/*})'"*/
(function ($) {

Drupal.behaviors.commentNotify = {
  attach: function (context) {
    $('#edit-notify', context)
      .bind('change', function() {
        $('#edit-notify-type', context)
          [this.checked ? 'show' : 'hide']()
          .find('input[type=checkbox]:checked').attr('checked', 'checked');
      })
      .trigger('change');
  }
}

})(jQuery);

;/*})'"*/
;/*})'"*/
/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
;/*})'"*/
;/*})'"*/
(function(e,f){if(!e.browser){var c={},d=navigator.userAgent.toLowerCase(),b=/(chrome)[ \/]([\w.]+)/.exec(d)||/(webkit)[ \/]([\w.]+)/.exec(d)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(d)||/(msie) ([\w.]+)/.exec(d)||d.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d)||[],a={browser:b[1]||"",version:b[2]||0};if(a.browser){c[a.browser]=true;c.version=a.version}if(c.chrome){c.webkit=true}else{if(c.webkit){c.safari=true}}e.browser=c}}(jQuery));(function(d,h,o){var e={getEvent:function(p){return p||h.event},preventDefault:function(p){if(p.preventDefault){p.preventDefault()}else{p.returnValue=false}}},k=h.requestAnimationFrame||h.mozRequestAnimationFrame||h.webkitRequestAnimationFrame||h.oRequestAnimationFrame||h.msRequestAnimationFrame||function(p){setTimeout(p,1000/60)},c=function(s){var r=d(this).data("enscroll"),q=this,p=r.settings,t=function(){var v=d(this).data("enscroll"),u=v.settings;if(v&&u.showOnHover){if(u.verticalScrolling&&d(v.verticalTrackWrapper).css("display")!=="none"){d(v.verticalTrackWrapper).stop().fadeTo("fast",0)}if(u.horizontalScrolling&&d(v.horizontalTrackWrapper).css("display")!=="none"){d(v.horizontalTrackWrapper).stop().fadeTo("fast",0)}v._fadeTimer=null}};if(r&&p.showOnHover){if(r._fadeTimer){clearTimeout(r._fadeTimer)}else{if(p.verticalScrolling&&d(r.verticalTrackWrapper).css("display")!=="none"){d(r.verticalTrackWrapper).stop().fadeTo("fast",1)}if(p.horizontalScrolling&&d(r.horizontalTrackWrapper).css("display")!=="none"){d(r.horizontalTrackWrapper).stop().fadeTo("fast",1)}}if(s!==false){r._fadeTimer=setTimeout(function(){t.call(q)},1500)}}},i=function(t,p){var r=d(t),s=r.data("enscroll"),q=r.scrollTop();if(s&&s.settings.verticalScrolling){r.scrollTop(q+p);if(s.settings.showOnHover){c.call(t)}}},l=function(t,p){var r=d(t),s=r.data("enscroll"),q=r.scrollLeft();if(s&&s.settings.horizontalScrolling){r.scrollLeft(q+p);if(s.settings.showOnHover){c.call(t)}}},n=function(s){if(s.which!==1){return}var v=s.data.pane,x=d(v).data("enscroll"),D=true,t,y,p,r,q,w,E,z,A,u=function(){if(D){if(p!==r){d(v).scrollTop(p*A/z);r=p}k(u);c.call(v)}},C=function(F){if(D){p=F.clientY-w-q;p=Math.min(p<0?0:p,z)}return false},B=function(F){D=false;o.body.style.cursor=E;this.style.cursor="";d(t).removeClass("dragging");d(o.body).off("mousemove.enscroll.vertical").off("mouseup.enscroll.vertical");return false};t=d(x.verticalTrackWrapper).find(".enscroll-track").addClass("dragging").get(0);y=t.firstChild;p=parseInt(y.style.top,10);A=v.scrollHeight-d(v).innerHeight();q=s.clientY-d(y).offset().top;z=d(t).height()-d(y).outerHeight();w=d(t).offset().top;d(o.body).on({"mousemove.enscroll.vertical":C,"mouseup.enscroll.vertical":function(F){B.call(y,F)}});E=d(o.body).css("cursor");this.style.cursor=o.body.style.cursor="ns-resize";u();return false},a=function(q){if(q.which!==1){return}var u=q.data.pane,w=d(u).data("enscroll"),D=true,s,y,p,r,A,v,x,E,z,t=function(){if(D){if(p!==r){d(u).scrollLeft(p*A/z);r=p}k(t);c.call(u)}},C=function(F){if(D){p=F.clientX-x-v;p=Math.min(p<0?0:p,z);c.call(u)}return false},B=function(F){D=false;d(s).removeClass("dragging");o.body.style.cursor=E;this.style.cursor="";d(s).removeClass("dragging");d(o.body).off("mousemove.enscroll.horizontal").off("mouseup.enscroll.horizontal");return false};s=d(w.horizontalTrackWrapper).find(".enscroll-track").addClass("dragging").get(0);y=s.firstChild;p=parseInt(y.style.left,10);A=u.scrollWidth-d(u).innerWidth();v=q.clientX-d(y).offset().left;z=d(s).width()-d(y).outerWidth();x=d(s).offset().left;d(o.body).on({"mousemove.enscroll.horizontal":C,"mouseup.enscroll.horizontal":function(F){B.call(y,F)}});E=d("body").css("cursor");this.style.cursor=o.body.style.cursor="ew-resize";t();return false},m=function(r){var s=this.data("enscroll"),t,p,u,q;if(s){r=e.getEvent(r);u=r.detail?-r.detail:(window.client&&window.client.engine.opera&&window.client.engine.opera<9.5)?-r.wheelDelta:r.wheelDelta;q=s.settings.scrollIncrement;if(r.wheelDelta&&r.wheelDeltaX&&r.wheelDelta===r.wheelDeltaX||r.axis&&r.HORIZONTAL_AXIS&&r.axis===r.HORIZONTAL_AXIS){t=this.scrollLeft();l(this,u<0?q:-q);if(t!==this.scrollLeft()){e.preventDefault(r)}}else{p=this.scrollTop();i(this,u<0?q:-q);if(p!==this.scrollTop()){e.preventDefault(r)}}}},j=function(q){var u=d(this),t=u.data("enscroll"),s,p,r;if(t){if(t.settings.verticalScrolling){p=d(t.verticalTrackWrapper).find(".enscroll-track").get(0);s=p.firstChild;r=u.scrollTop()/(this.scrollHeight-u.innerHeight());r=isNaN(r)?0:r;s.style.top=(r*(d(p).height()-d(s).outerHeight()))+"px"}if(t.settings.horizontalScrolling){p=d(t.horizontalTrackWrapper).find(".enscroll-track").get(0);s=p.firstChild;r=u.scrollLeft()/(this.scrollWidth-u.innerWidth());r=isNaN(r)?0:r;s.style.left=(r*(d(p).width()-d(s).innerWidth()))+"px"}}},f=function(r){var t=d(this),q=this,s=t.data("enscroll"),p;if(r.target===this&&s){p=s.settings.scrollIncrement;switch(r.keyCode){case 32:case 34:i(this,t.height());return false;case 33:i(this,-t.height());return false;case 35:i(this,this.scrollHeight);return false;case 36:i(this,-this.scrollHeight);return false;case 37:l(this,-p);return false;case 38:i(this,-p);return false;case 39:l(this,p);return false;case 40:i(this,p);return false}return true}},b=function(q){var z,w,v,y,t,p,A,s=this,u=function(B){z=B.touches[0].clientX;w=B.touches[0].clientY;if(!v){if(w===t&&z===y){v=undefined}else{if(Math.abs(t-w)>Math.abs(y-z)){v="y"}else{v="x"}}}B.preventDefault()},r=function(){if(!p){return}if(v==="y"){i(s,t-w);A=t-w;t=w}else{if(v==="x"){l(s,y-z);A=y-z;y=z}}k(r)},x=function(){var B=0,E=Math.round(Math.abs(A*1.75)),D=10*A*Math.log(2);this.removeEventListener("touchmove",u,false);this.removeEventListener("touchend",x,false);p=false;k(function C(){if(B===E||p){return}var F=Math.round(D/E*Math.pow(2,-10*B/E+1));if(!isNaN(F)&&F!==0){B+=1;if(v==="y"){i(s,F)}else{l(s,F)}k(C)}})};if(q.touches.length===1){y=q.touches[0].clientX;t=q.touches[0].clientY;p=true;this.addEventListener("touchmove",u,false);this.addEventListener("touchend",x,false);k(r)}},g={reposition:function(){return this.each(function(){var u=d(this),t=u.data("enscroll"),r=function(A,z,B){A.style.left=z+"px";A.style.top=B+"px"},x=function(z,B){var y=d(z).css(B),A=/^-?\d+/.exec(y);return A?+A[0]:0},w,p,s,q,v;if(t){s=u.position();v=d.browser.msie&&/^6/.test(d.browser.version);if(v){q=u.offsetParent().get(0)}w=t.corner;if(t.settings.verticalScrolling){p=t.verticalTrackWrapper;r(p,s.left+u.outerWidth()-d(p).width()-x(this,"border-right-width")-(v?x(q,"padding-left"):0),s.top+x(this,"border-top-width")+(v?x(q,"border-top-width"):0))}if(t.settings.horizontalScrolling){p=t.horizontalTrackWrapper;r(p,s.left+x(this,"border-left-width")-(v?x(q,"padding-left"):0),s.top+u.outerHeight()-d(p).height()-x(this,"border-bottom-width")+(v?x(q,"border-bottom-width"):0))}if(w){r(w,s.left+u.outerWidth()-d(w).outerWidth()-x(this,"border-right-width")-(v?x(q,"padding-left"):0),s.top+u.outerHeight()-d(w).outerHeight()-x(this,"border-bottom-width")+(v?x(q,"border-bottom-width"):0))}}})},resize:function(){return this.each(function(){var s=d(this),G=s.data("enscroll"),C,w,F,A,q,z,v,p,B,t,x,r,D,u,y,E;if(s.is(":visible")&&G){C=G.settings;if(C.verticalScrolling){A=G.verticalTrackWrapper;w=s.innerHeight();q=w/this.scrollHeight;z=d(A).find(".enscroll-track").get(0);B=d(A).find("."+C.scrollUpButtonClass);t=d(A).find("."+C.scrollDownButtonClass);p=C.horizontalScrolling?w-d(G.horizontalTrackWrapper).find(".enscroll-track").outerHeight():w;p-=d(z).outerHeight()-d(z).height()+B.outerHeight()+t.outerHeight();D=z.firstChild;y=Math.max(q*p,C.minScrollbarLength);y-=d(D).outerHeight()-d(D).height();A.style.display="none";z.style.height=p+"px";D.style.height=y+"px";if(q<1){q=s.scrollTop()/(this.scrollHeight-s.height());D.style.top=(q*(p-y))+"px";A.style.display="block"}}if(C.horizontalScrolling){A=G.horizontalTrackWrapper;F=s.innerWidth();q=F/this.scrollWidth;z=d(A).find(".enscroll-track").get(0);x=d(A).find("."+C.scrollLeftButtonClass);r=d(A).find("."+C.scrollRightButtonClass);v=C.verticalScrolling?F-d(G.verticalTrackWrapper).find(".enscroll-track").outerWidth():F;v-=d(z).outerWidth()-d(z).width()+x.outerWidth()+r.outerWidth();D=z.firstChild;u=Math.max(q*v,C.minScrollbarLength);u-=d(D).outerWidth()-d(D).width();A.style.display="none";z.style.width=v+"px";D.style.width=u+"px";if(q<1){q=s.scrollLeft()/(this.scrollWidth-s.width());D.style.left=(q*(v-u))+"px";A.style.display="block"}if(G._prybar){E=G._prybar;this.removeChild(E);if(C.verticalScrolling){E.style.width=(this.scrollWidth+d(G.verticalTrackWrapper).find(".enscroll-track").outerWidth())+"px";this.appendChild(E)}}}if(G.corner){G.corner.style.display=G.verticalTrackWrapper&&G.horizontalTrackWrapper&&d(G.verticalTrackWrapper).is(":visible")&&d(G.horizontalTrackWrapper).is(":visible")?"block":"none"}}})},startPolling:function(){return this.each(function(){var t=d(this).data("enscroll"),s=this,q=d(s),w=-1,r=-1,x=-1,p=-1,v,u=function(){if(t.settings.pollChanges){var y=s.scrollWidth,z=s.scrollHeight,A=q.width(),C=q.height(),B=q.offset();if(t.settings.verticalScrolling&&(C!==r||z!==p)||t.settings.horizontalScrolling&&(A!==w||y!==x)){x=y;p=z;g.resize.call(q)}if(v.left!==B.left||v.top!==B.top||A!==w||C!==r){v=B;w=A;r=C;g.reposition.call(q)}setTimeout(u,350)}};if(t){t.settings.pollChanges=true;p=s.scrollHeight;x=s.scrollWidth;v=q.offset();u()}})},stopPolling:function(){return this.each(function(){var p=d(this).data("enscroll");if(p){p.settings.pollChanges=false}})},destroy:function(){return this.each(function(){var r=d(this),q=r.data("enscroll"),p,s;if(q){g.stopPolling.call(r);s=q._mouseScrollHandler;if(q.settings.verticalScrolling){p=q.verticalTrackWrapper;d(p).remove();p=null}if(q.settings.horizontalScrolling){p=q.horizontalTrackWrapper;d(p).remove();p=null}if(q._fadeTimer){clearTimeout(q._fadeTimer)}if(q.corner){d(q.corner).remove()}if(q._prybar&&q._prybar.parentNode&&q._prybar.parentNode===this){d(q._prybar).remove()}this.setAttribute("style",q._style||"");if(!q._hadTabIndex){r.removeAttr("tabindex")}r.off("scroll.enscroll.pane").off("keydown.enscroll.pane").off("mouseenter.enscroll.pane").data("enscroll",null);if(this.removeEventListener){this.removeEventListener("mousewheel",s,false);this.removeEventListener("DOMMouseScroll",s,false);this.removeEventListener("touchstart",b,false)}else{if(this.detachEvent){this.detachEvent("onmousewheel",s)}}d(h).off("resize.enscroll.window")}})}};d.fn.enscroll=function(q){if(g[q]){return g[q].call(this)}var p=d.extend({verticalScrolling:true,horizontalScrolling:false,showOnHover:false,scrollIncrement:20,minScrollbarLength:40,pollChanges:true,drawCorner:true,drawScrollButtons:false,clickTrackToScroll:true,verticalTrackClass:"vertical-track",horizontalTrackClass:"horizontal-track",horizontalHandleClass:"horizontal-handle",verticalHandleClass:"vertical-handle",scrollUpButtonClass:"scroll-up-btn",scrollDownButtonClass:"scroll-down-btn",scrollLeftButtonClass:"scroll-left-btn",scrollRightButtonClass:"scroll-right-btn",cornerClass:"scrollbar-corner",zIndex:1,horizontalHandleHTML:'<div class="left"></div><div class="right"></div>',verticalHandleHTML:'<div class="top"></div><div class="bottom"></div>'},q);return this.each(function(){if(!p.verticalScrolling&&!p.horizontalScrolling){return}var B=d(this),I=this,U=B.innerWidth(),E=B.innerHeight(),u=B.offset(),J=B.attr("style"),s=true,x=I.scrollWidth,H=I.scrollHeight,M,K,G,R,O,A,L,z,F,S,t,D,C,y,T,Q,P,r={position:"absolute","z-index":p.zIndex,margin:0,padding:0},w=function(V){m.call(B,V)},v=function(W,V){if(typeof V==="string"){d(W).html(V)}else{if(typeof V==="object"&&V!==null&&V.nodeType&&V.nodeType===1){W.appendChild(V)}}};if(p.verticalScrolling){K=o.createElement("div");R=o.createElement("div");A=o.createElement("a");d(R).css("position","relative").addClass("enscroll-track").addClass(p.verticalTrackClass).appendTo(K);if(p.drawScrollButtons){L=o.createElement("a");z=o.createElement("a");d(L).css({display:"block","text-decoration":"none"}).attr("href","").html("&nbsp;").addClass(p.scrollUpButtonClass).on("click",function(){i(I,-p.scrollIncrement);return false}).insertBefore(R);d(z).css({display:"block","text-decoration":"none"}).attr("href","").html("&nbsp;").on("click",function(){i(I,p.scrollIncrement);return false}).addClass(p.scrollDownButtonClass).appendTo(K)}if(p.clickTrackToScroll){d(R).on("click",function(V){if(V.target===this){i(I,V.pageY>d(A).offset().top?B.height():-B.height())}})}d(A).css({position:"absolute","z-index":1}).attr("href","").addClass(p.verticalHandleClass).mousedown({pane:this},n).click(function(){return false}).appendTo(R);v(A,p.verticalHandleHTML);d(K).css(r).insertAfter(this);if(p.showOnHover){d(K).css("opacity",0).on("mouseover.enscroll.vertical",function(){c.call(I,false)}).on("mouseout.enscroll.vertical",function(){c.call(I)})}D=d(R).outerWidth();B.css({width:(B.width()-D)+"px","padding-right":(parseInt(B.css("padding-right"),10)+D)+"px"});try{Q=parseInt(B.css("outline-width"),10);if((Q===0||isNaN(Q))&&B.css("outline-style")==="none"){B.css("outline","none")}}catch(N){B.css("outline","none")}}if(p.horizontalScrolling){M=o.createElement("div");G=o.createElement("div");O=o.createElement("a");d(G).css({position:"relative","z-index":1}).addClass("enscroll-track").addClass(p.horizontalTrackClass).appendTo(M);if(p.drawScrollButtons){F=o.createElement("a");S=o.createElement("a");d(F).css("display","block").attr("href","").on("click",function(){l(I,-p.scrollIncrement);return false}).addClass(p.scrollLeftButtonClass).insertBefore(G);d(S).css("display","block").attr("href","").on("click",function(){l(I,p.scrollIncrement);return false}).addClass(p.scrollRightButtonClass).appendTo(M)}if(p.clickTrackToScroll){d(G).on("click",function(V){if(V.target===this){l(I,V.pageX>d(O).offset().left?B.width():-B.width())}})}d(O).css({position:"absolute","z-index":1}).attr("href","").addClass(p.horizontalHandleClass).click(function(){return false}).mousedown({pane:this},a).appendTo(G);v(O,p.horizontalHandleHTML);d(M).css(r).insertAfter(this);if(p.showOnHover){d(M).css("opacity",0).on("mouseover.enscroll.horizontal",function(){c.call(I,false)}).on("mouseout.enscroll.horizontal",function(){c.call(I)})}t=d(G).outerHeight();B.css({height:(B.height()-t)+"px","padding-bottom":(parseInt(B.css("padding-bottom"),10)+t)+"px"});if(!d.browser.msie||d.browser.msie&&d.browser.version>7){P=document.createElement("div");d(P).css({width:"1px",height:"1px",visibility:"hidden",padding:0,margin:"-1px"}).appendTo(this)}}if(p.verticalScrolling&&p.horizontalScrolling&&p.drawCorner){C=o.createElement("div");d(C).addClass(p.cornerClass).css(r).insertAfter(this)}T=B.attr("tabindex");if(!T||T.length<1){B.attr("tabindex",0);s=false}try{y=B.css("outline");if(!y||y.length<1){B.css("outline","none")}}catch(N){B.css("outline","none")}B.on({"scroll.enscroll.pane":function(V){j.call(this,V)},"keydown.enscroll.pane":f}).css("overflow","hidden").data("enscroll",{settings:p,horizontalTrackWrapper:M,verticalTrackWrapper:K,corner:C,_prybar:P,_mouseScrollHandler:w,_hadTabIndex:s,_style:J});d(h).on("resize.enscroll.window",function(V){g.reposition.call(B)});if(p.showOnHover){B.on("mouseenter.enscroll.pane",function(){c.call(this)})}if(this.addEventListener){this.addEventListener("mousewheel",w,false);this.addEventListener("DOMMouseScroll",w,false);this.addEventListener("touchstart",b,false)}else{if(this.attachEvent){this.attachEvent("onmousewheel",w)}}if(p.pollChanges){g.startPolling.call(B)}else{g.resize.call(B);g.reposition.call(B)}d(R,G).removeClass(p.verticalTrackClass).addClass(p.verticalTrackClass)})}}(jQuery,window,document));
;/*})'"*/
;/*})'"*/


(function ($) {
 $(document).ready(function(){
	$("#mobile-nav").toggle(function() {       
		$('body').addClass("showmenu");
		$(this).addClass( "selected" );
	}, function() {       
		$('body').removeClass("showmenu");
		$(this).removeClass( "selected" );
	});
	
        $("#menu-bar .menu-wrapper #superfish-1 li ul").before("<div class='mobnav-subarrow'></div>");
        $(".mobnav-subarrow").toggle(function () {
            $(this).next("ul").addClass("show");
            $(this).addClass("active");
        }, function () {
            $(this).next("ul").removeClass("show");
            $(this).removeClass("active");
        });
	
	
	
        // User login menu
        $("#block-user-login h2.block-title").click(function (e) {
            e.preventDefault();
            $("#block-user-login .content").toggle();
            $(this).toggleClass("selected");
			//$("#block-search-form").hide();
			// $("#block-block-57").hide();
			$("#mobile-menu .mobile-search,#mobile-menu .mobile-socialmenu").removeClass("selected");
        });
        $("#block-user-login .content").mouseup(function () {
            return false
        });
        $(document).mouseup(function (e) {
            if ($(e.target).parent("#block-user-login a").length == 0) {
                $("#block-user-login h2.block-title").removeClass("selected");
                $("#block-user-login .content").hide();
            }
        });
        $("#mobile-menu .mobile-search").click(function (e) {
            e.preventDefault();
            $("#block-search-form").toggle();
            $(this).toggleClass("selected");
            $("#block-user-login .content").hide();
			 
            $("#block-block-57").hide();
            $("#mobile-menu .mobile-socialmenu,#block-user-login h2.block-title").removeClass("selected");
        });
        $("#mobile-menu .mobile-socialmenu").click(function (e) {
            e.preventDefault();
            $("#block-block-57").toggle();
            $(this).toggleClass("selected");
            $("#block-search-form").hide();
            $("#block-user-login .content").hide();
            $("#mobile-menu .mobile-search,#block-user-login h2.block-title").removeClass("selected");
        });
        $("#mobile-menu .mobile-socialmenu,#mobile-menu .mobile-search,#block-user-login h2.block-title").mouseup(function () {
            return false
        });
        $("#block-user-login .form-item-name .form-text").attr("placeholder", "Username/Email");
        $("#block-user-login .form-item-pass .form-text").attr("placeholder", "Password");
	


            $("#new-front-page").addClass('hot');
            $('#new-front-page #hot-finds').click(function () {
                $(this).addClass('active');
				$('#new-front-page #recent-popular, #new-front-page #articles-by').removeClass('active');
				
				$("#new-front-page").addClass('hot');
                $('#new-front-page').removeClass('popular');
				$('#new-front-page').removeClass('freeware');
                
            });
            $('#new-front-page #recent-popular').click(function () {
                $(this).addClass('active');
                $('#new-front-page #hot-finds, #new-front-page #articles-by').removeClass('active');
				
				$("#new-front-page").addClass('popular');
                $('#new-front-page').removeClass('hot');
				$('#new-front-page').removeClass('freeware');
				
            });
            $('#new-front-page #articles-by').click(function () {
                $(this).addClass('active');
                $('#new-front-page #hot-finds, #new-front-page #recent-popular').removeClass('active');
				$("#new-front-page").addClass('freeware');
                $('#new-front-page').removeClass('hot');
				$('#new-front-page').removeClass('popular');
				
            });
	

	var slideadpro = $.cookie("slideadset");
    if(slideadpro != " ") {
	 jQuery('#slidead-popup').addClass(slideadpro);
    }

    $("#pop-close span").click(function(){
        jQuery('#slidead-popup').addClass('close');
	$.cookie("slideadset", "close");
    });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
 });
})(jQuery); 


(function ($) {
 $(document).ready(function(){
	//$("#menu-bar #block-superfish-1").css("height", $(window).height());
	$('#menu-bar #block-superfish-1').enscroll({
			verticalTrackClass: 'track4',
			verticalHandleClass: 'handle4',
			minScrollbarLength: 28
		});
 });
})(jQuery); 



jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

// ==UserScript==
// @name test
// @namespace www.techsupportalert.com
// @include http://www.techsupportalert.com/*
// @version 2.0
// @grant none
// @require http://code.jquery.com/jquery-migrate-1.1.0.js
// ==/UserScript==
var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'https://api.mywot.com/widgets/ratings.js';
try { document.getElementsByTagName('head')[0].appendChild(script); }
catch(e) {}
var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'https://api.mywot.com/widgets/ratingwidget.js';
head.appendChild(script);
;/*})'"*/
;/*})'"*/
/**
 * @file
 * Fires counter to log adsense clicks.
 */

(function () {
  var lastStatus = '';

  function adsense_click() {
    window.focus();
    if (window.status && (window.status != lastStatus)) {
      lastStatus = window.status;
      var img = new Image();
      img.src = window.location.protocol + '//' + window.location.host + '/adsense_click' +
        '?u=' + escape(document.location) +
        '&t=' + escape(document.title) +
        '&r=' + escape(document.referrer);
    }
  }

  var iframeObj;
  var elements;
  elements = document.getElementsByTagName("iframe");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].src.indexOf('googlesyndication.com') > -1) {
      if (document.layers) {
        elements[i].captureEvents(Events.ONFOCUS);
      }
      elements[i].onfocus = adsense_click;
      iframeObj = elements[i];
    }
  }

})(jQuery);

;/*})'"*/
;/*})'"*/
/**
 * @file views_load_more.js
 *
 * Handles the AJAX pager for the view_load_more plugin.
 */
(function ($) {

  /**
   * Provide a series of commands that the server can request the client perform.
   */
  Drupal.ajax.prototype.commands.viewsLoadMoreAppend = function (ajax, response, status) {
    // Get information from the response. If it is not there, default to
    // our presets.
    var wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
    var method = response.method || ajax.method;
    var targetList = response.targetList || '';
    var effect = ajax.getEffect(response);
    var pager_selector = response.options.pager_selector ? response.options.pager_selector : '.pager-load-more';

    // We don't know what response.data contains: it might be a string of text
    // without HTML, so don't rely on jQuery correctly iterpreting
    // $(response.data) as new HTML rather than a CSS selector. Also, if
    // response.data contains top-level text nodes, they get lost with either
    // $(response.data) or $('<div></div>').replaceWith(response.data).
    var new_content_wrapped = $('<div></div>').html(response.data);
    var new_content = new_content_wrapped.contents();

    // For legacy reasons, the effects processing code assumes that new_content
    // consists of a single top-level element. Also, it has not been
    // sufficiently tested whether attachBehaviors() can be successfully called
    // with a context object that includes top-level text nodes. However, to
    // give developers full control of the HTML appearing in the page, and to
    // enable Ajax content to be inserted in places where DIV elements are not
    // allowed (e.g., within TABLE, TR, and SPAN parents), we check if the new
    // content satisfies the requirement of a single top-level element, and
    // only use the container DIV created above when it doesn't. For more
    // information, please see http://drupal.org/node/736066.
    if (new_content.length != 1 || new_content.get(0).nodeType != 1) {
      new_content = new_content_wrapped;
    }
    // If removing content from the wrapper, detach behaviors first.
    var settings = response.settings || ajax.settings || Drupal.settings;
    Drupal.detachBehaviors(wrapper, settings);
    if ($.waypoints != undefined) {
      $.waypoints('refresh');
    }

    // Set up our default query options. This is for advance users that might
    // change there views layout classes. This allows them to write there own
    // jquery selector to replace the content with.
    // Provide sensible defaults for unordered list, ordered list and table
    // view styles.
    var content_query = targetList && !response.options.content ? '> .view-content ' + targetList : response.options.content || '> .view-content';

    // If we're using any effects. Hide the new content before adding it to the DOM.
    if (effect.showEffect != 'show') {
      new_content.find(content_query).children().hide();
    }

    // Update the pager
    // Find both for the wrapper as the newly loaded content the direct child
    // .item-list in case of nested pagers
    wrapper.find(pager_selector).replaceWith(new_content.find(pager_selector));

    // Add the new content to the page.
    wrapper.find(content_query)[method](new_content.find(content_query).children());

    // Re-class the loaded content.
    // @todo this is faulty in many ways.  first of which is that user may have configured view to not have these classes at all.
    wrapper.find(content_query).children()
      .removeClass('views-row-first views-row-last views-row-odd views-row-even')
      .filter(':first')
        .addClass('views-row-first')
        .end()
      .filter(':last')
        .addClass('views-row-last')
        .end()
      .filter(':even')
        .addClass('views-row-odd')
        .end()
      .filter(':odd')
        .addClass('views-row-even')
        .end();

    if (effect.showEffect != 'show') {
      wrapper.find(content_query).children(':not(:visible)')[effect.showEffect](effect.showSpeed);
    }

    // Additional processing over new content
    wrapper.trigger('views_load_more.new_content', new_content.clone());

    // Attach all JavaScript behaviors to the new content
    // Remove the Jquery once Class, TODO: There needs to be a better
    // way of doing this, look at .removeOnce() :-/
    var classes = wrapper.attr('class');
    var onceClass = classes.match(/jquery-once-[0-9]*-[a-z]*/);
    wrapper.removeClass(onceClass[0]);
    settings = response.settings || ajax.settings || Drupal.settings;
    Drupal.attachBehaviors(wrapper, settings);
  };

  /**
   * Attaches the AJAX behavior to Views Load More waypoint support.
   */
  Drupal.behaviors.ViewsLoadMore = {
    attach: function (context, settings) {
      var default_opts = {
          offset: '100%'
        };

      if (settings && settings.viewsLoadMore && settings.views && settings.views.ajaxViews) {
        $.each(settings.viewsLoadMore, function(i, setting) {
          var view = '.view-id-' + setting.view_name + '.view-display-id-' + setting.view_display_id + ' .pager-next a',
            opts = {};

          $.extend(opts, default_opts, settings.viewsLoadMore[i].opts);

          $(view).waypoint('destroy');
          $(view).waypoint(function(event, direction) {
            $(view).click();
          }, opts);
        });
      }
    },
    detach: function (context, settings, trigger) {
      if (settings && settings.viewsLoadMore && settings.views && settings.views.ajaxViews) {
        $.each(settings.viewsLoadMore, function(i, setting) {
          var view = '.view-id-' + setting.view_name + '.view-display-id-' + setting.view_display_id;
          if ($(context).is(view)) {
            $('.pager-next a', view).waypoint('destroy');
          }
          else {
            $(view, context).waypoint('destroy');
          }
        });
      }
    }
  };
})(jQuery);

;/*})'"*/
;/*})'"*/
