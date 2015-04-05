/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=a71b1eeb900775a21207)
 * Config saved to config.json and https://gist.github.com/a71b1eeb900775a21207
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var s = t(this),
        n = s.data("bs.carousel"),
        a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e),
        o = "string" == typeof e ? e : a.slide;
      n || s.data("bs.carousel", n = new i(this, a)), "number" == typeof e ? n.to(e) : o ? n[o]() : a.interval && n.pause().cycle()
    })
  }
  var i = function(e, i) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
  };
  i.VERSION = "3.3.2", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, i.prototype.keydown = function(t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      t.preventDefault()
    }
  }, i.prototype.cycle = function(e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
  }, i.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
  }, i.prototype.getItemForDirection = function(t, e) {
    var i = this.getItemIndex(e),
      s = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
    if (s && !this.options.wrap) return e;
    var n = "prev" == t ? -1 : 1,
      a = (i + n) % this.$items.length;
    return this.$items.eq(a)
  }, i.prototype.to = function(t) {
    var e = this,
      i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
      e.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
  }, i.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, i.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next")
  }, i.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev")
  }, i.prototype.slide = function(e, s) {
    var n = this.$element.find(".item.active"),
      a = s || this.getItemForDirection(e, n),
      o = this.interval,
      r = "next" == e ? "left" : "right",
      l = this;
    if (a.hasClass("active")) return this.sliding = !1;
    var h = a[0],
      d = t.Event("slide.bs.carousel", {
        relatedTarget: h,
        direction: r
      });
    if (this.$element.trigger(d), !d.isDefaultPrevented()) {
      if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var c = t(this.$indicators.children()[this.getItemIndex(a)]);
        c && c.addClass("active")
      }
      var f = t.Event("slid.bs.carousel", {
        relatedTarget: h,
        direction: r
      });
      return t.support.transition && this.$element.hasClass("slide") ? (a.addClass(e), a[0].offsetWidth, n.addClass(r), a.addClass(r), n.one("bsTransitionEnd", function() {
        a.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
          l.$element.trigger(f)
        }, 0)
      }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), a.addClass("active"), this.sliding = !1, this.$element.trigger(f)), o && this.cycle(), this
    }
  };
  var s = t.fn.carousel;
  t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
    return t.fn.carousel = s, this
  };
  var n = function(i) {
    var s, n = t(this),
      a = t(n.attr("data-target") || (s = n.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));
    if (a.hasClass("carousel")) {
      var o = t.extend({}, a.data(), n.data()),
        r = n.attr("data-slide-to");
      r && (o.interval = !1), e.call(a, o), r && a.data("bs.carousel").to(r), i.preventDefault()
    }
  };
  t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
      var i = t(this);
      e.call(i, i.data())
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    e && 3 === e.which || (t(n).remove(), t(a).each(function() {
      var s = t(this),
        n = i(s),
        a = {
          relatedTarget: this
        };
      n.hasClass("open") && (n.trigger(e = t.Event("hide.bs.dropdown", a)), e.isDefaultPrevented() || (s.attr("aria-expanded", "false"), n.removeClass("open").trigger("hidden.bs.dropdown", a)))
    }))
  }

  function i(e) {
    var i = e.attr("data-target");
    i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var s = i && t(i);
    return s && s.length ? s : e.parent()
  }

  function s(e) {
    return this.each(function() {
      var i = t(this),
        s = i.data("bs.dropdown");
      s || i.data("bs.dropdown", s = new o(this)), "string" == typeof e && s[e].call(i)
    })
  }
  var n = ".dropdown-backdrop",
    a = '[data-toggle="dropdown"]',
    o = function(e) {
      t(e).on("click.bs.dropdown", this.toggle)
    };
  o.VERSION = "3.3.2", o.prototype.toggle = function(s) {
    var n = t(this);
    if (!n.is(".disabled, :disabled")) {
      var a = i(n),
        o = a.hasClass("open");
      if (e(), !o) {
        "ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
        var r = {
          relatedTarget: this
        };
        if (a.trigger(s = t.Event("show.bs.dropdown", r)), s.isDefaultPrevented()) return;
        n.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger("shown.bs.dropdown", r)
      }
      return !1
    }
  }, o.prototype.keydown = function(e) {
    if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
      var s = t(this);
      if (e.preventDefault(), e.stopPropagation(), !s.is(".disabled, :disabled")) {
        var n = i(s),
          o = n.hasClass("open");
        if (!o && 27 != e.which || o && 27 == e.which) return 27 == e.which && n.find(a).trigger("focus"), s.trigger("click");
        var r = " li:not(.disabled):visible a",
          l = n.find('[role="menu"]' + r + ', [role="listbox"]' + r);
        if (l.length) {
          var h = l.index(e.target);
          38 == e.which && h > 0 && h--, 40 == e.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
        }
      }
    }
  };
  var r = t.fn.dropdown;
  t.fn.dropdown = s, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
    return t.fn.dropdown = r, this
  }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
    t.stopPropagation()
  }).on("click.bs.dropdown.data-api", a, o.prototype.toggle).on("keydown.bs.dropdown.data-api", a, o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', o.prototype.keydown)
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var s = t(this),
        n = s.data("bs.tab");
      n || s.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
    })
  }
  var i = function(e) {
    this.element = t(e)
  };
  i.VERSION = "3.3.2", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
    var e = this.element,
      i = e.closest("ul:not(.dropdown-menu)"),
      s = e.data("target");
    if (s || (s = e.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
      var n = i.find(".active:last a"),
        a = t.Event("hide.bs.tab", {
          relatedTarget: e[0]
        }),
        o = t.Event("show.bs.tab", {
          relatedTarget: n[0]
        });
      if (n.trigger(a), e.trigger(o), !o.isDefaultPrevented() && !a.isDefaultPrevented()) {
        var r = t(s);
        this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
          n.trigger({
            type: "hidden.bs.tab",
            relatedTarget: e[0]
          }), e.trigger({
            type: "shown.bs.tab",
            relatedTarget: n[0]
          })
        })
      }
    }
  }, i.prototype.activate = function(e, s, n) {
    function a() {
      o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
    }
    var o = s.find("> .active"),
      r = n && t.support.transition && (o.length && o.hasClass("fade") || !!s.find("> .fade").length);
    o.length && r ? o.one("bsTransitionEnd", a).emulateTransitionEnd(i.TRANSITION_DURATION) : a(), o.removeClass("in")
  };
  var s = t.fn.tab;
  t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
    return t.fn.tab = s, this
  };
  var n = function(i) {
    i.preventDefault(), e.call(t(this), "show")
  };
  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var s = t(this),
        n = s.data("bs.affix"),
        a = "object" == typeof e && e;
      n || s.data("bs.affix", n = new i(this, a)), "string" == typeof e && n[e]()
    })
  }
  var i = function(e, s) {
    this.options = t.extend({}, i.DEFAULTS, s), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  i.VERSION = "3.3.2", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
  }, i.prototype.getState = function(t, e, i, s) {
    var n = this.$target.scrollTop(),
      a = this.$element.offset(),
      o = this.$target.height();
    if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
    if ("bottom" == this.affixed) return null != i ? n + this.unpin <= a.top ? !1 : "bottom" : t - s >= n + o ? !1 : "bottom";
    var r = null == this.affixed,
      l = r ? n : a.top,
      h = r ? o : e;
    return null != i && i >= n ? "top" : null != s && l + h >= t - s ? "bottom" : !1
  }, i.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
      e = this.$element.offset();
    return this.pinnedOffset = e.top - t
  }, i.prototype.checkPositionWithEventLoop = function() {
    setTimeout(t.proxy(this.checkPosition, this), 1)
  }, i.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var e = this.$element.height(),
        s = this.options.offset,
        n = s.top,
        a = s.bottom,
        o = t(document.body).height();
      "object" != typeof s && (a = n = s), "function" == typeof n && (n = s.top(this.$element)), "function" == typeof a && (a = s.bottom(this.$element));
      var r = this.getState(o, e, n, a);
      if (this.affixed != r) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (r ? "-" + r : ""),
          h = t.Event(l + ".bs.affix");
        if (this.$element.trigger(h), h.isDefaultPrevented()) return;
        this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == r && this.$element.offset({
        top: o - e - a
      })
    }
  };
  var s = t.fn.affix;
  t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
    return t.fn.affix = s, this
  }, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
      var i = t(this),
        s = i.data();
      s.offset = s.offset || {}, null != s.offsetBottom && (s.offset.bottom = s.offsetBottom), null != s.offsetTop && (s.offset.top = s.offsetTop), e.call(i, s)
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    var i, s = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return t(s)
  }

  function i(e) {
    return this.each(function() {
      var i = t(this),
        n = i.data("bs.collapse"),
        a = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e);
      !n && a.toggle && /show|hide/.test(e) && (a.toggle = !1), n || i.data("bs.collapse", n = new s(this, a)), "string" == typeof e && n[e]()
    })
  }
  var s = function(e, i) {
    this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  s.VERSION = "3.3.2", s.TRANSITION_DURATION = 350, s.DEFAULTS = {
    toggle: !0
  }, s.prototype.dimension = function() {
    var t = this.$element.hasClass("width");
    return t ? "width" : "height"
  }, s.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
        var a = t.Event("show.bs.collapse");
        if (this.$element.trigger(a), !a.isDefaultPrevented()) {
          n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
          var o = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var r = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!t.support.transition) return r.call(this);
          var l = t.camelCase(["scroll", o].join("-"));
          this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[o](this.$element[0][l])
        }
      }
    }
  }, s.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");
      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var i = this.dimension();
        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var n = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : n.call(this)
      }
    }
  }, s.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, s.prototype.getParent = function() {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, s) {
      var n = t(s);
      this.addAriaAndCollapsedClass(e(n), n)
    }, this)).end()
  }, s.prototype.addAriaAndCollapsedClass = function(t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
  };
  var n = t.fn.collapse;
  t.fn.collapse = i, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function() {
    return t.fn.collapse = n, this
  }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(s) {
    var n = t(this);
    n.attr("data-target") || s.preventDefault();
    var a = e(n),
      o = a.data("bs.collapse"),
      r = o ? "toggle" : n.data();
    i.call(a, r)
  })
}(jQuery), + function(t) {
  "use strict";

  function e(i, s) {
    this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, s), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
  }

  function i(i) {
    return this.each(function() {
      var s = t(this),
        n = s.data("bs.scrollspy"),
        a = "object" == typeof i && i;
      n || s.data("bs.scrollspy", n = new e(this, a)), "string" == typeof i && n[i]()
    })
  }
  e.VERSION = "3.3.2", e.DEFAULTS = {
    offset: 10
  }, e.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, e.prototype.refresh = function() {
    var e = this,
      i = "offset",
      s = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", s = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var e = t(this),
        n = e.data("target") || e.attr("href"),
        a = /^#./.test(n) && t(n);
      return a && a.length && a.is(":visible") && [
        [a[i]().top + s, n]
      ] || null
    }).sort(function(t, e) {
      return t[0] - e[0]
    }).each(function() {
      e.offsets.push(this[0]), e.targets.push(this[1])
    })
  }, e.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
      i = this.getScrollHeight(),
      s = this.options.offset + i - this.$scrollElement.height(),
      n = this.offsets,
      a = this.targets,
      o = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), e >= s) return o != (t = a[a.length - 1]) && this.activate(t);
    if (o && e < n[0]) return this.activeTarget = null, this.clear();
    for (t = n.length; t--;) o != a[t] && e >= n[t] && (void 0 === n[t + 1] || e <= n[t + 1]) && this.activate(a[t])
  }, e.prototype.activate = function(e) {
    this.activeTarget = e, this.clear();
    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
      s = t(i).parents("li").addClass("active");
    s.parent(".dropdown-menu").length && (s = s.closest("li.dropdown").addClass("active")), s.trigger("activate.bs.scrollspy")
  }, e.prototype.clear = function() {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var s = t.fn.scrollspy;
  t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
    return t.fn.scrollspy = s, this
  }, t(window).on("load.bs.scrollspy.data-api", function() {
    t('[data-spy="scroll"]').each(function() {
      var e = t(this);
      i.call(e, e.data())
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e() {
    var t = document.createElement("bootstrap"),
      e = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var i in e)
      if (void 0 !== t.style[i]) return {
        end: e[i]
      };
    return !1
  }
  t.fn.emulateTransitionEnd = function(e) {
    var i = !1,
      s = this;
    t(this).one("bsTransitionEnd", function() {
      i = !0
    });
    var n = function() {
      i || t(s).trigger(t.support.transition.end)
    };
    return setTimeout(n, e), this
  }, t(function() {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function(e) {
        return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery);

/*!
 * jQuery Smooth Scroll - v1.5.4 - 2014-11-17
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2014 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function(t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function(t) {
  function e(t) {
    return t.replace(/(:|\.|\/)/g, "\\$1")
  }
  var l = "1.5.4",
    o = {},
    n = {
      exclude: [],
      excludeWithin: [],
      offset: 0,
      direction: "top",
      scrollElement: null,
      scrollTarget: null,
      beforeScroll: function() {},
      afterScroll: function() {},
      easing: "swing",
      speed: 400,
      autoCoefficient: 2,
      preventDefault: !0
    },
    s = function(e) {
      var l = [],
        o = !1,
        n = e.dir && "left" === e.dir ? "scrollLeft" : "scrollTop";
      return this.each(function() {
        if (this !== document && this !== window) {
          var e = t(this);
          e[n]() > 0 ? l.push(this) : (e[n](1), o = e[n]() > 0, o && l.push(this), e[n](0))
        }
      }), l.length || this.each(function() {
        "BODY" === this.nodeName && (l = [this])
      }), "first" === e.el && l.length > 1 && (l = [l[0]]), l
    };
  t.fn.extend({
    scrollable: function(t) {
      var e = s.call(this, {
        dir: t
      });
      return this.pushStack(e)
    },
    firstScrollable: function(t) {
      var e = s.call(this, {
        el: "first",
        dir: t
      });
      return this.pushStack(e)
    },
    smoothScroll: function(l, o) {
      if (l = l || {}, "options" === l) return o ? this.each(function() {
        var e = t(this),
          l = t.extend(e.data("ssOpts") || {}, o);
        t(this).data("ssOpts", l)
      }) : this.first().data("ssOpts");
      var n = t.extend({}, t.fn.smoothScroll.defaults, l),
        s = t.smoothScroll.filterPath(location.pathname);
      return this.unbind("click.smoothscroll").bind("click.smoothscroll", function(l) {
        var o = this,
          r = t(this),
          i = t.extend({}, n, r.data("ssOpts") || {}),
          c = n.exclude,
          a = i.excludeWithin,
          f = 0,
          h = 0,
          u = !0,
          d = {},
          p = location.hostname === o.hostname || !o.hostname,
          m = i.scrollTarget || t.smoothScroll.filterPath(o.pathname) === s,
          S = e(o.hash);
        if (i.scrollTarget || p && m && S) {
          for (; u && c.length > f;) r.is(e(c[f++])) && (u = !1);
          for (; u && a.length > h;) r.closest(a[h++]).length && (u = !1)
        } else u = !1;
        u && (i.preventDefault && l.preventDefault(), t.extend(d, i, {
          scrollTarget: i.scrollTarget || S,
          link: o
        }), t.smoothScroll(d))
      }), this
    }
  }), t.smoothScroll = function(e, l) {
    if ("options" === e && "object" == typeof l) return t.extend(o, l);
    var n, s, r, i, c, a = 0,
      f = "offset",
      h = "scrollTop",
      u = {},
      d = {};
    "number" == typeof e ? (n = t.extend({
      link: null
    }, t.fn.smoothScroll.defaults, o), r = e) : (n = t.extend({
      link: null
    }, t.fn.smoothScroll.defaults, e || {}, o), n.scrollElement && (f = "position", "static" === n.scrollElement.css("position") && n.scrollElement.css("position", "relative"))), h = "left" === n.direction ? "scrollLeft" : h, n.scrollElement ? (s = n.scrollElement, /^(?:HTML|BODY)$/.test(s[0].nodeName) || (a = s[h]())) : s = t("html, body").firstScrollable(n.direction), n.beforeScroll.call(s, n), r = "number" == typeof e ? e : l || t(n.scrollTarget)[f]() && t(n.scrollTarget)[f]()[n.direction] || 0, u[h] = r + a + n.offset, i = n.speed, "auto" === i && (c = u[h] - s.scrollTop(), 0 > c && (c *= -1), i = c / n.autoCoefficient), d = {
      duration: i,
      easing: n.easing,
      complete: function() {
        n.afterScroll.call(n.link, n)
      }
    }, n.step && (d.step = n.step), s.length ? s.stop().animate(u, d) : n.afterScroll.call(n.link, n)
  }, t.smoothScroll.version = l, t.smoothScroll.filterPath = function(t) {
    return t = t || "", t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
  }, t.fn.smoothScroll.defaults = n
});

/*!
 * Parsleyjs
 * Guillaume Potier - <guillaume@wisembly.com>
 * Version 2.0.7 - built Sat Jan 24 2015 14:50:11
 * MIT Licensed
 *
 */
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
  "undefined" == typeof a && "undefined" != typeof window.jQuery && (a = window.jQuery);
  var b = {
      attr: function(a, b, c) {
        var d, e = {},
          f = this.msieversion(),
          g = new RegExp("^" + b, "i");
        if ("undefined" == typeof a || "undefined" == typeof a[0]) return {};
        for (var h in a[0].attributes)
          if (d = a[0].attributes[h], "undefined" != typeof d && null !== d && (!f || f >= 8 || d.specified) && g.test(d.name)) {
            if ("undefined" != typeof c && new RegExp(c + "$", "i").test(d.name)) return !0;
            e[this.camelize(d.name.replace(b, ""))] = this.deserializeValue(d.value)
          }
        return "undefined" == typeof c ? e : !1
      },
      setAttr: function(a, b, c, d) {
        a[0].setAttribute(this.dasherize(b + c), String(d))
      },
      get: function(a, b) {
        for (var c = 0, d = (b || "").split("."); this.isObject(a) || this.isArray(a);)
          if (a = a[d[c++]], c === d.length) return a;
        return void 0
      },
      hash: function(a) {
        return String(Math.random()).substring(2, a ? a + 2 : 9)
      },
      isArray: function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
      },
      isObject: function(a) {
        return a === Object(a)
      },
      deserializeValue: function(b) {
        var c;
        try {
          return b ? "true" == b || ("false" == b ? !1 : "null" == b ? null : isNaN(c = Number(b)) ? /^[\[\{]/.test(b) ? a.parseJSON(b) : b : c) : b
        } catch (d) {
          return b
        }
      },
      camelize: function(a) {
        return a.replace(/-+(.)?/g, function(a, b) {
          return b ? b.toUpperCase() : ""
        })
      },
      dasherize: function(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
      },
      msieversion: function() {
        var a = window.navigator.userAgent,
          b = a.indexOf("MSIE ");
        return b > 0 || navigator.userAgent.match(/Trident.*rv\:11\./) ? parseInt(a.substring(b + 5, a.indexOf(".", b)), 10) : 0
      }
    },
    c = {
      namespace: "data-parsley-",
      inputs: "input, textarea, select",
      excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
      priorityEnabled: !0,
      uiEnabled: !0,
      validationThreshold: 3,
      focus: "first",
      trigger: !1,
      errorClass: "parsley-error",
      successClass: "parsley-success",
      classHandler: function() {},
      errorsContainer: function() {},
      errorsWrapper: '<ul class="parsley-errors-list"></ul>',
      errorTemplate: "<li></li>"
    },
    d = function() {};
  d.prototype = {
    asyncSupport: !1,
    actualizeOptions: function() {
      return this.options = this.OptionsFactory.get(this), this
    },
    validateThroughValidator: function(a, b, c) {
      return window.ParsleyValidator.validate(a, b, c)
    },
    subscribe: function(b, c) {
      return a.listenTo(this, b.toLowerCase(), c), this
    },
    unsubscribe: function(b) {
      return a.unsubscribeTo(this, b.toLowerCase()), this
    },
    reset: function() {
      if ("ParsleyForm" !== this.__class__) return a.emit("parsley:field:reset", this);
      for (var b = 0; b < this.fields.length; b++) a.emit("parsley:field:reset", this.fields[b]);
      a.emit("parsley:form:reset", this)
    },
    destroy: function() {
      if ("ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void a.emit("parsley:field:destroy", this);
      for (var b = 0; b < this.fields.length; b++) this.fields[b].destroy();
      this.$element.removeData("Parsley"), a.emit("parsley:form:destroy", this)
    }
  };
  var e = function() {
    var a = {},
      b = function(a) {
        this.__class__ = "Validator", this.__version__ = "1.0.0", this.options = a || {}, this.bindingKey = this.options.bindingKey || "_validatorjsConstraint"
      };
    b.prototype = {
      constructor: b,
      validate: function(a, b, c) {
        if ("string" != typeof a && "object" != typeof a) throw new Error("You must validate an object or a string");
        return "string" == typeof a || g(a) ? this._validateString(a, b, c) : this.isBinded(a) ? this._validateBindedObject(a, b) : this._validateObject(a, b, c)
      },
      bind: function(a, b) {
        if ("object" != typeof a) throw new Error("Must bind a Constraint to an object");
        return a[this.bindingKey] = new c(b), this
      },
      unbind: function(a) {
        return "undefined" == typeof a._validatorjsConstraint ? this : (delete a[this.bindingKey], this)
      },
      isBinded: function(a) {
        return "undefined" != typeof a[this.bindingKey]
      },
      getBinded: function(a) {
        return this.isBinded(a) ? a[this.bindingKey] : null
      },
      _validateString: function(a, b, c) {
        var f, h = [];
        g(b) || (b = [b]);
        for (var i = 0; i < b.length; i++) {
          if (!(b[i] instanceof e)) throw new Error("You must give an Assert or an Asserts array to validate a string");
          f = b[i].check(a, c), f instanceof d && h.push(f)
        }
        return h.length ? h : !0
      },
      _validateObject: function(a, b, d) {
        if ("object" != typeof b) throw new Error("You must give a constraint to validate an object");
        return b instanceof c ? b.check(a, d) : new c(b).check(a, d)
      },
      _validateBindedObject: function(a, b) {
        return a[this.bindingKey].check(a, b)
      }
    }, b.errorCode = {
      must_be_a_string: "must_be_a_string",
      must_be_an_array: "must_be_an_array",
      must_be_a_number: "must_be_a_number",
      must_be_a_string_or_array: "must_be_a_string_or_array"
    };
    var c = function(a, b) {
      if (this.__class__ = "Constraint", this.options = b || {}, this.nodes = {}, a) try {
        this._bootstrap(a)
      } catch (c) {
        throw new Error("Should give a valid mapping object to Constraint", c, a)
      }
    };
    c.prototype = {
      constructor: c,
      check: function(a, b) {
        var c, d = {};
        for (var h in this.nodes) {
          for (var i = !1, j = this.get(h), k = g(j) ? j : [j], l = k.length - 1; l >= 0; l--) "Required" !== k[l].__class__ || (i = k[l].requiresValidation(b));
          if (this.has(h, a) || this.options.strict || i) try {
            this.has(h, this.options.strict || i ? a : void 0) || (new e).HaveProperty(h).validate(a), c = this._check(h, a[h], b), (g(c) && c.length > 0 || !g(c) && !f(c)) && (d[h] = c)
          } catch (m) {
            d[h] = m
          }
        }
        return f(d) ? !0 : d
      },
      add: function(a, b) {
        if (b instanceof e || g(b) && b[0] instanceof e) return this.nodes[a] = b, this;
        if ("object" == typeof b && !g(b)) return this.nodes[a] = b instanceof c ? b : new c(b), this;
        throw new Error("Should give an Assert, an Asserts array, a Constraint", b)
      },
      has: function(a, b) {
        return b = "undefined" != typeof b ? b : this.nodes, "undefined" != typeof b[a]
      },
      get: function(a, b) {
        return this.has(a) ? this.nodes[a] : b || null
      },
      remove: function(a) {
        var b = [];
        for (var c in this.nodes) c !== a && (b[c] = this.nodes[c]);
        return this.nodes = b, this
      },
      _bootstrap: function(a) {
        if (a instanceof c) return this.nodes = a.nodes;
        for (var b in a) this.add(b, a[b])
      },
      _check: function(a, b, d) {
        if (this.nodes[a] instanceof e) return this._checkAsserts(b, [this.nodes[a]], d);
        if (g(this.nodes[a])) return this._checkAsserts(b, this.nodes[a], d);
        if (this.nodes[a] instanceof c) return this.nodes[a].check(b, d);
        throw new Error("Invalid node", this.nodes[a])
      },
      _checkAsserts: function(a, b, c) {
        for (var d, e = [], f = 0; f < b.length; f++) d = b[f].check(a, c), "undefined" != typeof d && !0 !== d && e.push(d);
        return e
      }
    };
    var d = function(a, b, c) {
      if (this.__class__ = "Violation", !(a instanceof e)) throw new Error("Should give an assertion implementing the Assert interface");
      this.assert = a, this.value = b, "undefined" != typeof c && (this.violation = c)
    };
    d.prototype = {
      show: function() {
        var a = {
          assert: this.assert.__class__,
          value: this.value
        };
        return this.violation && (a.violation = this.violation), a
      },
      __toString: function() {
        return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
      },
      getViolation: function() {
        var a, b;
        for (a in this.violation) b = this.violation[a];
        return {
          constraint: a,
          expected: b
        }
      }
    };
    var e = function(a) {
      this.__class__ = "Assert", this.__parentClass__ = this.__class__, this.groups = [], "undefined" != typeof a && this.addGroup(a)
    };
    e.prototype = {
      construct: e,
      requiresValidation: function(a) {
        return a && !this.hasGroup(a) ? !1 : !a && this.hasGroups() ? !1 : !0
      },
      check: function(a, b) {
        if (this.requiresValidation(b)) try {
          return this.validate(a, b)
        } catch (c) {
          return c
        }
      },
      hasGroup: function(a) {
        return g(a) ? this.hasOneOf(a) : "Any" === a ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(a) : "Default" === a
      },
      hasOneOf: function(a) {
        for (var b = 0; b < a.length; b++)
          if (this.hasGroup(a[b])) return !0;
        return !1
      },
      hasGroups: function() {
        return this.groups.length > 0
      },
      addGroup: function(a) {
        return g(a) ? this.addGroups(a) : (this.hasGroup(a) || this.groups.push(a), this)
      },
      removeGroup: function(a) {
        for (var b = [], c = 0; c < this.groups.length; c++) a !== this.groups[c] && b.push(this.groups[c]);
        return this.groups = b, this
      },
      addGroups: function(a) {
        for (var b = 0; b < a.length; b++) this.addGroup(a[b]);
        return this
      },
      HaveProperty: function(a) {
        return this.__class__ = "HaveProperty", this.node = a, this.validate = function(a) {
          if ("undefined" == typeof a[this.node]) throw new d(this, a, {
            value: this.node
          });
          return !0
        }, this
      },
      Blank: function() {
        return this.__class__ = "Blank", this.validate = function(a) {
          if ("string" != typeof a) throw new d(this, a, {
            value: b.errorCode.must_be_a_string
          });
          if ("" !== a.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new d(this, a);
          return !0
        }, this
      },
      Callback: function(a) {
        if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof a) throw new Error("Callback must be instanciated with a function");
        return this.fn = a, this.validate = function(a) {
          var b = this.fn.apply(this, [a].concat(this.arguments));
          if (!0 !== b) throw new d(this, a, {
            result: b
          });
          return !0
        }, this
      },
      Choice: function(a) {
        if (this.__class__ = "Choice", !g(a) && "function" != typeof a) throw new Error("Choice must be instanciated with an array or a function");
        return this.list = a, this.validate = function(a) {
          for (var b = "function" == typeof this.list ? this.list() : this.list, c = 0; c < b.length; c++)
            if (a === b[c]) return !0;
          throw new d(this, a, {
            choices: b
          })
        }, this
      },
      Collection: function(a) {
        return this.__class__ = "Collection", this.constraint = "undefined" != typeof a ? a instanceof e ? a : new c(a) : !1, this.validate = function(a, c) {
          var e, h = new b,
            i = 0,
            j = {},
            k = this.groups.length ? this.groups : c;
          if (!g(a)) throw new d(this, array, {
            value: b.errorCode.must_be_an_array
          });
          for (var l = 0; l < a.length; l++) e = this.constraint ? h.validate(a[l], this.constraint, k) : h.validate(a[l], k), f(e) || (j[i] = e), i++;
          return f(j) ? !0 : j
        }, this
      },
      Count: function(a) {
        return this.__class__ = "Count", this.count = a, this.validate = function(a) {
          if (!g(a)) throw new d(this, a, {
            value: b.errorCode.must_be_an_array
          });
          var c = "function" == typeof this.count ? this.count(a) : this.count;
          if (isNaN(Number(c))) throw new Error("Count must be a valid interger", c);
          if (c !== a.length) throw new d(this, a, {
            count: c
          });
          return !0
        }, this
      },
      Email: function() {
        return this.__class__ = "Email", this.validate = function(a) {
          var c = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
          if ("string" != typeof a) throw new d(this, a, {
            value: b.errorCode.must_be_a_string
          });
          if (!c.test(a)) throw new d(this, a);
          return !0
        }, this
      },
      EqualTo: function(a) {
        if (this.__class__ = "EqualTo", "undefined" == typeof a) throw new Error("EqualTo must be instanciated with a value or a function");
        return this.reference = a, this.validate = function(a) {
          var b = "function" == typeof this.reference ? this.reference(a) : this.reference;
          if (b !== a) throw new d(this, a, {
            value: b
          });
          return !0
        }, this
      },
      GreaterThan: function(a) {
        if (this.__class__ = "GreaterThan", "undefined" == typeof a) throw new Error("Should give a threshold value");
        return this.threshold = a, this.validate = function(a) {
          if ("" === a || isNaN(Number(a))) throw new d(this, a, {
            value: b.errorCode.must_be_a_number
          });
          if (this.threshold >= a) throw new d(this, a, {
            threshold: this.threshold
          });
          return !0
        }, this
      },
      GreaterThanOrEqual: function(a) {
        if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof a) throw new Error("Should give a threshold value");
        return this.threshold = a, this.validate = function(a) {
          if ("" === a || isNaN(Number(a))) throw new d(this, a, {
            value: b.errorCode.must_be_a_number
          });
          if (this.threshold > a) throw new d(this, a, {
            threshold: this.threshold
          });
          return !0
        }, this
      },
      InstanceOf: function(a) {
        if (this.__class__ = "InstanceOf", "undefined" == typeof a) throw new Error("InstanceOf must be instanciated with a value");
        return this.classRef = a, this.validate = function(a) {
          if (!0 != a instanceof this.classRef) throw new d(this, a, {
            classRef: this.classRef
          });
          return !0
        }, this
      },
      Length: function(a) {
        if (this.__class__ = "Length", !a.min && !a.max) throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
        return this.min = a.min, this.max = a.max, this.validate = function(a) {
          if ("string" != typeof a && !g(a)) throw new d(this, a, {
            value: b.errorCode.must_be_a_string_or_array
          });
          if ("undefined" != typeof this.min && this.min === this.max && a.length !== this.min) throw new d(this, a, {
            min: this.min,
            max: this.max
          });
          if ("undefined" != typeof this.max && a.length > this.max) throw new d(this, a, {
            max: this.max
          });
          if ("undefined" != typeof this.min && a.length < this.min) throw new d(this, a, {
            min: this.min
          });
          return !0
        }, this
      },
      LessThan: function(a) {
        if (this.__class__ = "LessThan", "undefined" == typeof a) throw new Error("Should give a threshold value");
        return this.threshold = a, this.validate = function(a) {
          if ("" === a || isNaN(Number(a))) throw new d(this, a, {
            value: b.errorCode.must_be_a_number
          });
          if (this.threshold <= a) throw new d(this, a, {
            threshold: this.threshold
          });
          return !0
        }, this
      },
      LessThanOrEqual: function(a) {
        if (this.__class__ = "LessThanOrEqual", "undefined" == typeof a) throw new Error("Should give a threshold value");
        return this.threshold = a, this.validate = function(a) {
          if ("" === a || isNaN(Number(a))) throw new d(this, a, {
            value: b.errorCode.must_be_a_number
          });
          if (this.threshold < a) throw new d(this, a, {
            threshold: this.threshold
          });
          return !0
        }, this
      },
      NotNull: function() {
        return this.__class__ = "NotNull", this.validate = function(a) {
          if (null === a || "undefined" == typeof a) throw new d(this, a);
          return !0
        }, this
      },
      NotBlank: function() {
        return this.__class__ = "NotBlank", this.validate = function(a) {
          if ("string" != typeof a) throw new d(this, a, {
            value: b.errorCode.must_be_a_string
          });
          if ("" === a.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new d(this, a);
          return !0
        }, this
      },
      Null: function() {
        return this.__class__ = "Null", this.validate = function(a) {
          if (null !== a) throw new d(this, a);
          return !0
        }, this
      },
      Range: function(a, b) {
        if (this.__class__ = "Range", "undefined" == typeof a || "undefined" == typeof b) throw new Error("Range assert expects min and max values");
        return this.min = a, this.max = b, this.validate = function(a) {
          try {
            return "string" == typeof a && isNaN(Number(a)) || g(a) ? (new e).Length({
              min: this.min,
              max: this.max
            }).validate(a) : (new e).GreaterThanOrEqual(this.min).validate(a) && (new e).LessThanOrEqual(this.max).validate(a), !0
          } catch (b) {
            throw new d(this, a, b.violation)
          }
          return !0
        }, this
      },
      Regexp: function(a, c) {
        if (this.__class__ = "Regexp", "undefined" == typeof a) throw new Error("You must give a regexp");
        return this.regexp = a, this.flag = c || "", this.validate = function(a) {
          if ("string" != typeof a) throw new d(this, a, {
            value: b.errorCode.must_be_a_string
          });
          if (!new RegExp(this.regexp, this.flag).test(a)) throw new d(this, a, {
            regexp: this.regexp,
            flag: this.flag
          });
          return !0
        }, this
      },
      Required: function() {
        return this.__class__ = "Required", this.validate = function(a) {
          if ("undefined" == typeof a) throw new d(this, a);
          try {
            "string" == typeof a ? (new e).NotNull().validate(a) && (new e).NotBlank().validate(a) : !0 === g(a) && (new e).Length({
              min: 1
            }).validate(a)
          } catch (b) {
            throw new d(this, a)
          }
          return !0
        }, this
      },
      Unique: function(a) {
        return this.__class__ = "Unique", "object" == typeof a && (this.key = a.key), this.validate = function(a) {
          var c, e = [];
          if (!g(a)) throw new d(this, a, {
            value: b.errorCode.must_be_an_array
          });
          for (var f = 0; f < a.length; f++)
            if (c = "object" == typeof a[f] ? a[f][this.key] : a[f], "undefined" != typeof c) {
              if (-1 !== e.indexOf(c)) throw new d(this, a, {
                value: c
              });
              e.push(c)
            }
          return !0
        }, this
      }
    }, a.Assert = e, a.Validator = b, a.Violation = d, a.Constraint = c, Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
      if (null === this) throw new TypeError;
      var b = Object(this),
        c = b.length >>> 0;
      if (0 === c) return -1;
      var d = 0;
      if (arguments.length > 1 && (d = Number(arguments[1]), d != d ? d = 0 : 0 !== d && 1 / 0 != d && d != -1 / 0 && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
      for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
        if (e in b && b[e] === a) return e;
      return -1
    });
    var f = function(a) {
        for (var b in a) return !1;
        return !0
      },
      g = function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
      };
    return "function" == typeof define && define.amd ? define("vendors/validator.js/dist/validator", [], function() {
      return a
    }) : "undefined" != typeof module && module.exports ? module.exports = a : window["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = a, a
  }();
  e = "undefined" != typeof e ? e : "undefined" != typeof module ? module.exports : null;
  var f = function(a, b) {
    this.__class__ = "ParsleyValidator", this.Validator = e, this.locale = "en", this.init(a || {}, b || {})
  };
  f.prototype = {
    init: function(b, c) {
      this.catalog = c;
      for (var d in b) this.addValidator(d, b[d].fn, b[d].priority, b[d].requirementsTransformer);
      a.emit("parsley:validator:init")
    },
    setLocale: function(a) {
      if ("undefined" == typeof this.catalog[a]) throw new Error(a + " is not available in the catalog");
      return this.locale = a, this
    },
    addCatalog: function(a, b, c) {
      return "object" == typeof b && (this.catalog[a] = b), !0 === c ? this.setLocale(a) : this
    },
    addMessage: function(a, b, c) {
      return "undefined" == typeof this.catalog[a] && (this.catalog[a] = {}), this.catalog[a][b.toLowerCase()] = c, this
    },
    validate: function() {
      return (new this.Validator.Validator).validate.apply(new e.Validator, arguments)
    },
    addValidator: function(b, c, d, f) {
      return this.validators[b.toLowerCase()] = function(b) {
        return a.extend((new e.Assert).Callback(c, b), {
          priority: d,
          requirementsTransformer: f
        })
      }, this
    },
    updateValidator: function(a, b, c, d) {
      return this.addValidator(a, b, c, d)
    },
    removeValidator: function(a) {
      return delete this.validators[a], this
    },
    getErrorMessage: function(a) {
      var b;
      return b = "type" === a.name ? this.catalog[this.locale][a.name][a.requirements] : this.formatMessage(this.catalog[this.locale][a.name], a.requirements), "" !== b ? b : this.catalog[this.locale].defaultMessage
    },
    formatMessage: function(a, b) {
      if ("object" == typeof b) {
        for (var c in b) a = this.formatMessage(a, b[c]);
        return a
      }
      return "string" == typeof a ? a.replace(new RegExp("%s", "i"), b) : ""
    },
    validators: {
      notblank: function() {
        return a.extend((new e.Assert).NotBlank(), {
          priority: 2
        })
      },
      required: function() {
        return a.extend((new e.Assert).Required(), {
          priority: 512
        })
      },
      type: function(b) {
        var c;
        switch (b) {
          case "email":
            c = (new e.Assert).Email();
            break;
          case "range":
          case "number":
            c = (new e.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
            break;
          case "integer":
            c = (new e.Assert).Regexp("^-?\\d+$");
            break;
          case "digits":
            c = (new e.Assert).Regexp("^\\d+$");
            break;
          case "alphanum":
            c = (new e.Assert).Regexp("^\\w+$", "i");
            break;
          case "url":
            c = (new e.Assert).Regexp("(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,24}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)", "i");
            break;
          default:
            throw new Error("validator type `" + b + "` is not supported")
        }
        return a.extend(c, {
          priority: 256
        })
      },
      pattern: function(b) {
        var c = "";
        return /^\/.*\/(?:[gimy]*)$/.test(b) && (c = b.replace(/.*\/([gimy]*)$/, "$1"), b = b.replace(new RegExp("^/(.*?)/" + c + "$"), "$1")), a.extend((new e.Assert).Regexp(b, c), {
          priority: 64
        })
      },
      minlength: function(b) {
        return a.extend((new e.Assert).Length({
          min: b
        }), {
          priority: 30,
          requirementsTransformer: function() {
            return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
          }
        })
      },
      maxlength: function(b) {
        return a.extend((new e.Assert).Length({
          max: b
        }), {
          priority: 30,
          requirementsTransformer: function() {
            return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
          }
        })
      },
      length: function(b) {
        return a.extend((new e.Assert).Length({
          min: b[0],
          max: b[1]
        }), {
          priority: 32
        })
      },
      mincheck: function(a) {
        return this.minlength(a)
      },
      maxcheck: function(a) {
        return this.maxlength(a)
      },
      check: function(a) {
        return this.length(a)
      },
      min: function(b) {
        return a.extend((new e.Assert).GreaterThanOrEqual(b), {
          priority: 30,
          requirementsTransformer: function() {
            return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
          }
        })
      },
      max: function(b) {
        return a.extend((new e.Assert).LessThanOrEqual(b), {
          priority: 30,
          requirementsTransformer: function() {
            return "string" != typeof b || isNaN(b) ? b : parseInt(b, 10)
          }
        })
      },
      range: function(b) {
        return a.extend((new e.Assert).Range(b[0], b[1]), {
          priority: 32,
          requirementsTransformer: function() {
            for (var a = 0; a < b.length; a++) b[a] = "string" != typeof b[a] || isNaN(b[a]) ? b[a] : parseInt(b[a], 10);
            return b
          }
        })
      },
      equalto: function(b) {
        return a.extend((new e.Assert).EqualTo(b), {
          priority: 256,
          requirementsTransformer: function() {
            return a(b).length ? a(b).val() : b
          }
        })
      }
    }
  };
  var g = function() {
    this.__class__ = "ParsleyUI"
  };
  g.prototype = {
    listen: function() {
      return a.listen("parsley:form:init", this, this.setupForm), a.listen("parsley:field:init", this, this.setupField), a.listen("parsley:field:validated", this, this.reflow), a.listen("parsley:form:validated", this, this.focus), a.listen("parsley:field:reset", this, this.reset), a.listen("parsley:form:destroy", this, this.destroy), a.listen("parsley:field:destroy", this, this.destroy), this
    },
    reflow: function(a) {
      if ("undefined" != typeof a._ui && !1 !== a._ui.active) {
        var b = this._diff(a.validationResult, a._ui.lastValidationResult);
        a._ui.lastValidationResult = a.validationResult, a._ui.validatedOnce = !0, this.manageStatusClass(a), this.manageErrorsMessages(a, b), this.actualizeTriggers(a), (b.kept.length || b.added.length) && "undefined" == typeof a._ui.failedOnce && this.manageFailingFieldTrigger(a)
      }
    },
    getErrorsMessages: function(a) {
      if (!0 === a.validationResult) return [];
      for (var b = [], c = 0; c < a.validationResult.length; c++) b.push(this._getErrorMessage(a, a.validationResult[c].assert));
      return b
    },
    manageStatusClass: function(a) {
      !0 === a.validationResult ? this._successClass(a) : a.validationResult.length > 0 ? this._errorClass(a) : this._resetClass(a)
    },
    manageErrorsMessages: function(b, c) {
      if ("undefined" == typeof b.options.errorsMessagesDisabled) {
        if ("undefined" != typeof b.options.errorMessage) return c.added.length || c.kept.length ? (0 === b._ui.$errorsWrapper.find(".parsley-custom-error-message").length && b._ui.$errorsWrapper.append(a(b.options.errorTemplate).addClass("parsley-custom-error-message")), b._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(b.options.errorMessage)) : b._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
        for (var d = 0; d < c.removed.length; d++) this.removeError(b, c.removed[d].assert.name, !0);
        for (d = 0; d < c.added.length; d++) this.addError(b, c.added[d].assert.name, void 0, c.added[d].assert, !0);
        for (d = 0; d < c.kept.length; d++) this.updateError(b, c.kept[d].assert.name, void 0, c.kept[d].assert, !0)
      }
    },
    addError: function(b, c, d, e, f) {
      b._ui.$errorsWrapper.addClass("filled").append(a(b.options.errorTemplate).addClass("parsley-" + c).html(d || this._getErrorMessage(b, e))), !0 !== f && this._errorClass(b)
    },
    updateError: function(a, b, c, d, e) {
      a._ui.$errorsWrapper.addClass("filled").find(".parsley-" + b).html(c || this._getErrorMessage(a, d)), !0 !== e && this._errorClass(a)
    },
    removeError: function(a, b, c) {
      a._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + b).remove(), !0 !== c && this.manageStatusClass(a)
    },
    focus: function(a) {
      if (!0 === a.validationResult || "none" === a.options.focus) return a._focusedField = null;
      a._focusedField = null;
      for (var b = 0; b < a.fields.length; b++)
        if (!0 !== a.fields[b].validationResult && a.fields[b].validationResult.length > 0 && "undefined" == typeof a.fields[b].options.noFocus) {
          if ("first" === a.options.focus) return a._focusedField = a.fields[b].$element, a._focusedField.focus();
          a._focusedField = a.fields[b].$element
        }
      return null === a._focusedField ? null : a._focusedField.focus()
    },
    _getErrorMessage: function(a, b) {
      var c = b.name + "Message";
      return "undefined" != typeof a.options[c] ? window.ParsleyValidator.formatMessage(a.options[c], b.requirements) : window.ParsleyValidator.getErrorMessage(b)
    },
    _diff: function(a, b, c) {
      for (var d = [], e = [], f = 0; f < a.length; f++) {
        for (var g = !1, h = 0; h < b.length; h++)
          if (a[f].assert.name === b[h].assert.name) {
            g = !0;
            break
          }
        g ? e.push(a[f]) : d.push(a[f])
      }
      return {
        kept: e,
        added: d,
        removed: c ? [] : this._diff(b, a, !0).added
      }
    },
    setupForm: function(b) {
      b.$element.on("submit.Parsley", !1, a.proxy(b.onSubmitValidate, b)), !1 !== b.options.uiEnabled && b.$element.attr("novalidate", "")
    },
    setupField: function(b) {
      var c = {
        active: !1
      };
      !1 !== b.options.uiEnabled && (c.active = !0, b.$element.attr(b.options.namespace + "id", b.__id__), c.$errorClassHandler = this._manageClassHandler(b), c.errorsWrapperId = "parsley-id-" + ("undefined" != typeof b.options.multiple ? "multiple-" + b.options.multiple : b.__id__), c.$errorsWrapper = a(b.options.errorsWrapper).attr("id", c.errorsWrapperId), c.lastValidationResult = [], c.validatedOnce = !1, c.validationInformationVisible = !1, b._ui = c, b.$element.is(b.options.excluded) || this._insertErrorWrapper(b), this.actualizeTriggers(b))
    },
    _manageClassHandler: function(b) {
      if ("string" == typeof b.options.classHandler && a(b.options.classHandler).length) return a(b.options.classHandler);
      var c = b.options.classHandler(b);
      return "undefined" != typeof c && c.length ? c : "undefined" == typeof b.options.multiple || b.$element.is("select") ? b.$element : b.$element.parent()
    },
    _insertErrorWrapper: function(b) {
      var c;
      if ("string" == typeof b.options.errorsContainer) {
        if (a(b.options.errorsContainer).length) return a(b.options.errorsContainer).append(b._ui.$errorsWrapper);
        window.console && window.console.warn && window.console.warn("The errors container `" + b.options.errorsContainer + "` does not exist in DOM")
      } else "function" == typeof b.options.errorsContainer && (c = b.options.errorsContainer(b));
      return "undefined" != typeof c && c.length ? c.append(b._ui.$errorsWrapper) : "undefined" == typeof b.options.multiple ? b.$element.after(b._ui.$errorsWrapper) : b.$element.parent().after(b._ui.$errorsWrapper)
    },
    actualizeTriggers: function(b) {
      var c = b.$element;
      if (b.options.multiple && (c = a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]')), c.off(".Parsley"), !1 !== b.options.trigger) {
        var d = b.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
        "" !== d && c.on(d.split(" ").join(".Parsley ") + ".Parsley", a.proxy("function" == typeof b.eventValidate ? b.eventValidate : this.eventValidate, b))
      }
    },
    eventValidate: function(a) {
      new RegExp("key").test(a.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
    },
    manageFailingFieldTrigger: function(b) {
      return b._ui.failedOnce = !0, b.options.multiple && a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function() {
        return new RegExp("change", "i").test(a(this).parsley().options.trigger || "") ? void 0 : a(this).on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
      }), b.$element.is("select") && !new RegExp("change", "i").test(b.options.trigger || "") ? b.$element.on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b)) : new RegExp("keyup", "i").test(b.options.trigger || "") ? void 0 : b.$element.on("keyup.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
    },
    reset: function(a) {
      a.$element.off(".Parsley"), a.$element.off(".ParsleyFailedOnce"), "undefined" != typeof a._ui && "ParsleyForm" !== a.__class__ && (a._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(a), a._ui.validatedOnce = !1, a._ui.lastValidationResult = [], a._ui.validationInformationVisible = !1)
    },
    destroy: function(a) {
      this.reset(a), "ParsleyForm" !== a.__class__ && ("undefined" != typeof a._ui && a._ui.$errorsWrapper.remove(), delete a._ui)
    },
    _successClass: function(a) {
      a._ui.validationInformationVisible = !0, a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)
    },
    _errorClass: function(a) {
      a._ui.validationInformationVisible = !0, a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)
    },
    _resetClass: function(a) {
      a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)
    }
  };
  var h = function(c, d, e, f) {
    this.__class__ = "OptionsFactory", this.__id__ = b.hash(4), this.formOptions = null, this.fieldOptions = null, this.staticOptions = a.extend(!0, {}, c, d, e, {
      namespace: f
    })
  };
  h.prototype = {
    get: function(a) {
      if ("undefined" == typeof a.__class__) throw new Error("Parsley Instance expected");
      switch (a.__class__) {
        case "Parsley":
          return this.staticOptions;
        case "ParsleyForm":
          return this.getFormOptions(a);
        case "ParsleyField":
        case "ParsleyFieldMultiple":
          return this.getFieldOptions(a);
        default:
          throw new Error("Instance " + a.__class__ + " is not supported")
      }
    },
    getFormOptions: function(c) {
      return this.formOptions = b.attr(c.$element, this.staticOptions.namespace), a.extend({}, this.staticOptions, this.formOptions)
    },
    getFieldOptions: function(c) {
      return this.fieldOptions = b.attr(c.$element, this.staticOptions.namespace), null === this.formOptions && "undefined" != typeof c.parent && (this.formOptions = this.getFormOptions(c.parent)), a.extend({}, this.staticOptions, this.formOptions, this.fieldOptions)
    }
  };
  var i = function(c, d) {
    if (this.__class__ = "ParsleyForm", this.__id__ = b.hash(4), "OptionsFactory" !== b.get(d, "__class__")) throw new Error("You must give an OptionsFactory instance");
    this.OptionsFactory = d, this.$element = a(c), this.validationResult = null, this.options = this.OptionsFactory.get(this)
  };
  i.prototype = {
    onSubmitValidate: function(b) {
      return this.validate(void 0, void 0, b), !1 === this.validationResult && b instanceof a.Event && (b.stopImmediatePropagation(), b.preventDefault()), this
    },
    validate: function(b, c, d) {
      this.submitEvent = d, this.validationResult = !0;
      var e = [];
      a.emit("parsley:form:validate", this), this._refreshFields();
      for (var f = 0; f < this.fields.length; f++)(!b || this._isFieldInGroup(this.fields[f], b)) && (e = this.fields[f].validate(c), !0 !== e && e.length > 0 && this.validationResult && (this.validationResult = !1));
      return a.emit("parsley:form:" + (this.validationResult ? "success" : "error"), this), a.emit("parsley:form:validated", this), this.validationResult
    },
    isValid: function(a, b) {
      this._refreshFields();
      for (var c = 0; c < this.fields.length; c++)
        if ((!a || this._isFieldInGroup(this.fields[c], a)) && !1 === this.fields[c].isValid(b)) return !1;
      return !0
    },
    _isFieldInGroup: function(c, d) {
      return b.isArray(c.options.group) ? -1 !== a.inArray(d, c.options.group) : c.options.group === d
    },
    _refreshFields: function() {
      return this.actualizeOptions()._bindFields()
    },
    _bindFields: function() {
      var a = this;
      return this.fields = [], this.fieldsMappedById = {}, this.$element.find(this.options.inputs).each(function() {
        var b = new window.Parsley(this, {}, a);
        "ParsleyField" !== b.__class__ && "ParsleyFieldMultiple" !== b.__class__ || b.$element.is(b.options.excluded) || "undefined" == typeof a.fieldsMappedById[b.__class__ + "-" + b.__id__] && (a.fieldsMappedById[b.__class__ + "-" + b.__id__] = b, a.fields.push(b))
      }), this
    }
  };
  var j = function(c, d, e, f, g) {
      var h = {};
      if (!new RegExp("ParsleyField").test(b.get(c, "__class__"))) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
      if ("function" == typeof window.ParsleyValidator.validators[d] && (h = window.ParsleyValidator.validators[d](e)), "Assert" !== h.__parentClass__) throw new Error("Valid validator expected");
      var i = function() {
        return "undefined" != typeof c.options[d + "Priority"] ? c.options[d + "Priority"] : b.get(h, "priority") || 2
      };
      return f = f || i(), "function" == typeof h.requirementsTransformer && (e = h.requirementsTransformer(), h = window.ParsleyValidator.validators[d](e)), a.extend(h, {
        name: d,
        requirements: e,
        priority: f,
        groups: [f],
        isDomConstraint: g || b.attr(c.$element, c.options.namespace, d)
      })
    },
    k = function(c, d, e) {
      this.__class__ = "ParsleyField", this.__id__ = b.hash(4), this.$element = a(c), "undefined" != typeof e ? (this.parent = e, this.OptionsFactory = this.parent.OptionsFactory, this.options = this.OptionsFactory.get(this)) : (this.OptionsFactory = d, this.options = this.OptionsFactory.get(this)), this.constraints = [], this.constraintsByName = {}, this.validationResult = [], this._bindConstraints()
    };
  k.prototype = {
    validate: function(b) {
      return this.value = this.getValue(), a.emit("parsley:field:validate", this), a.emit("parsley:field:" + (this.isValid(b, this.value) ? "success" : "error"), this), a.emit("parsley:field:validated", this), this.validationResult
    },
    isValid: function(a, b) {
      this.refreshConstraints();
      var c = this._getConstraintsSortedPriorities();
      if (0 === c.length) return this.validationResult = [];
      if (("undefined" == typeof b || null === b) && (b = this.getValue()), !b.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty && !0 !== a) return this.validationResult = [];
      if (!1 === this.options.priorityEnabled) return !0 === (this.validationResult = this.validateThroughValidator(b, this.constraints, "Any"));
      for (var d = 0; d < c.length; d++)
        if (!0 !== (this.validationResult = this.validateThroughValidator(b, this.constraints, c[d]))) return !1;
      return !0
    },
    getValue: function() {
      var a;
      return a = "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof a || null === a ? "" : !0 === this.options.trimValue ? a.replace(/^\s+|\s+$/g, "") : a
    },
    refreshConstraints: function() {
      return this.actualizeOptions()._bindConstraints()
    },
    addConstraint: function(a, b, c, d) {
      if (a = a.toLowerCase(), "function" == typeof window.ParsleyValidator.validators[a]) {
        var e = new j(this, a, b, c, d);
        "undefined" !== this.constraintsByName[e.name] && this.removeConstraint(e.name), this.constraints.push(e), this.constraintsByName[e.name] = e
      }
      return this
    },
    removeConstraint: function(a) {
      for (var b = 0; b < this.constraints.length; b++)
        if (a === this.constraints[b].name) {
          this.constraints.splice(b, 1);
          break
        }
      return delete this.constraintsByName[a], this
    },
    updateConstraint: function(a, b, c) {
      return this.removeConstraint(a).addConstraint(a, b, c)
    },
    _bindConstraints: function() {
      for (var a = [], b = {}, c = 0; c < this.constraints.length; c++) !1 === this.constraints[c].isDomConstraint && (a.push(this.constraints[c]), b[this.constraints[c].name] = this.constraints[c]);
      this.constraints = a, this.constraintsByName = b;
      for (var d in this.options) this.addConstraint(d, this.options[d]);
      return this._bindHtml5Constraints()
    },
    _bindHtml5Constraints: function() {
      (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0), "undefined" != typeof this.$element.attr("minlength") && "undefined" != typeof this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : "undefined" != typeof this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : "undefined" != typeof this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
      var a = this.$element.attr("type");
      return "undefined" == typeof a ? this : "number" === a ? "undefined" == typeof this.$element.attr("step") || 0 === parseFloat(this.$element.attr("step")) % 1 ? this.addConstraint("type", "integer", void 0, !0) : this.addConstraint("type", "number", void 0, !0) : new RegExp(a, "i").test("email url range") ? this.addConstraint("type", a, void 0, !0) : this
    },
    _isRequired: function() {
      return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
    },
    _getConstraintsSortedPriorities: function() {
      for (var a = [], b = 0; b < this.constraints.length; b++) - 1 === a.indexOf(this.constraints[b].priority) && a.push(this.constraints[b].priority);
      return a.sort(function(a, b) {
        return b - a
      }), a
    }
  };
  var l = function() {
    this.__class__ = "ParsleyFieldMultiple"
  };
  l.prototype = {
    addElement: function(a) {
      return this.$elements.push(a), this
    },
    refreshConstraints: function() {
      var b;
      if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
      for (var c = 0; c < this.$elements.length; c++)
        if (a("html").has(this.$elements[c]).length) {
          b = this.$elements[c].data("ParsleyFieldMultiple").refreshConstraints().constraints;
          for (var d = 0; d < b.length; d++) this.addConstraint(b[d].name, b[d].requirements, b[d].priority, b[d].isDomConstraint)
        } else this.$elements.splice(c, 1);
      return this
    },
    getValue: function() {
      if ("undefined" != typeof this.options.value) return this.options.value;
      if (this.$element.is("input[type=radio]")) return a("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').val() || "";
      if (this.$element.is("input[type=checkbox]")) {
        var b = [];
        return a("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').each(function() {
          b.push(a(this).val())
        }), b.length ? b : []
      }
      return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
    },
    _init: function(a) {
      return this.$elements = [this.$element], this.options.multiple = a, this
    }
  };
  var m = a({}),
    n = {};
  a.listen = function(a) {
    if ("undefined" == typeof n[a] && (n[a] = []), "function" == typeof arguments[1]) return n[a].push({
      fn: arguments[1]
    });
    if ("object" == typeof arguments[1] && "function" == typeof arguments[2]) return n[a].push({
      fn: arguments[2],
      ctxt: arguments[1]
    });
    throw new Error("Wrong parameters")
  }, a.listenTo = function(a, b, c) {
    if ("undefined" == typeof n[b] && (n[b] = []), !(a instanceof k || a instanceof i)) throw new Error("Must give Parsley instance");
    if ("string" != typeof b || "function" != typeof c) throw new Error("Wrong parameters");
    n[b].push({
      instance: a,
      fn: c
    })
  }, a.unsubscribe = function(a, b) {
    if ("undefined" != typeof n[a]) {
      if ("string" != typeof a || "function" != typeof b) throw new Error("Wrong arguments");
      for (var c = 0; c < n[a].length; c++)
        if (n[a][c].fn === b) return n[a].splice(c, 1)
    }
  }, a.unsubscribeTo = function(a, b) {
    if ("undefined" != typeof n[b]) {
      if (!(a instanceof k || a instanceof i)) throw new Error("Must give Parsley instance");
      for (var c = 0; c < n[b].length; c++)
        if ("undefined" != typeof n[b][c].instance && n[b][c].instance.__id__ === a.__id__) return n[b].splice(c, 1)
    }
  }, a.unsubscribeAll = function(a) {
    "undefined" != typeof n[a] && delete n[a]
  }, a.emit = function(a, b) {
    if ("undefined" != typeof n[a])
      for (var c = 0; c < n[a].length; c++)
        if ("undefined" != typeof n[a][c].instance) {
          if (b instanceof k || b instanceof i)
            if (n[a][c].instance.__id__ !== b.__id__) {
              if (n[a][c].instance instanceof i && b instanceof k)
                for (var d = 0; d < n[a][c].instance.fields.length; d++)
                  if (n[a][c].instance.fields[d].__id__ === b.__id__) {
                    n[a][c].fn.apply(m, Array.prototype.slice.call(arguments, 1));
                    continue
                  }
            } else n[a][c].fn.apply(m, Array.prototype.slice.call(arguments, 1))
        } else n[a][c].fn.apply("undefined" != typeof n[a][c].ctxt ? n[a][c].ctxt : m, Array.prototype.slice.call(arguments, 1))
  }, a.subscribed = function() {
    return n
  }, window.ParsleyConfig = window.ParsleyConfig || {}, window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {}, window.ParsleyConfig.i18n.en = a.extend(window.ParsleyConfig.i18n.en || {}, {
    defaultMessage: "This value seems to be invalid.",
    type: {
      email: "This value should be a valid email.",
      url: "This value should be a valid url.",
      number: "This value should be a valid number.",
      integer: "This value should be a valid integer.",
      digits: "This value should be digits.",
      alphanum: "This value should be alphanumeric."
    },
    notblank: "This value should not be blank.",
    required: "This value is required.",
    pattern: "This value seems to be invalid.",
    min: "This value should be greater than or equal to %s.",
    max: "This value should be lower than or equal to %s.",
    range: "This value should be between %s and %s.",
    minlength: "This value is too short. It should have %s characters or more.",
    maxlength: "This value is too long. It should have %s characters or fewer.",
    length: "This value length is invalid. It should be between %s and %s characters long.",
    mincheck: "You must select at least %s choices.",
    maxcheck: "You must select %s choices or fewer.",
    check: "You must select between %s and %s choices.",
    equalto: "This value should be the same."
  }), "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
  var o = function(c, d, e) {
    if (this.__class__ = "Parsley", this.__version__ = "2.0.7", this.__id__ = b.hash(4), "undefined" == typeof c) throw new Error("You must give an element");
    if ("undefined" != typeof e && "ParsleyForm" !== e.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
    return this.init(a(c), d, e)
  };
  o.prototype = {
    init: function(a, d, e) {
      if (!a.length) throw new Error("You must bind Parsley on an existing element.");
      if (this.$element = a, this.$element.data("Parsley")) {
        var f = this.$element.data("Parsley");
        return "undefined" != typeof e && (f.parent = e), f
      }
      return this.OptionsFactory = new h(c, b.get(window, "ParsleyConfig") || {}, d, this.getNamespace(d)), this.options = this.OptionsFactory.get(this), this.$element.is("form") || b.attr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.$element.is(this.options.inputs) && !this.$element.is(this.options.excluded) ? this.isMultiple() ? this.handleMultiple(e) : this.bind("parsleyField", e) : this
    },
    isMultiple: function() {
      return this.$element.is("input[type=radio], input[type=checkbox]") && "undefined" == typeof this.options.multiple || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
    },
    handleMultiple: function(c) {
      var d, e, f, g = this;
      if (this.options = a.extend(this.options, c ? c.OptionsFactory.get(c) : {}, b.attr(this.$element, this.options.namespace)), this.options.multiple ? e = this.options.multiple : "undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? e = d = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (e = this.$element.attr("id")), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")) return this.bind("parsleyFieldMultiple", c, e || this.__id__);
      if ("undefined" == typeof e) return window.console && window.console.warn && window.console.warn("To be binded by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
      if (e = e.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), "undefined" != typeof d && a('input[name="' + d + '"]').each(function() {
          a(this).is("input[type=radio], input[type=checkbox]") && a(this).attr(g.options.namespace + "multiple", e)
        }), a("[" + this.options.namespace + "multiple=" + e + "]").length)
        for (var h = 0; h < a("[" + this.options.namespace + "multiple=" + e + "]").length; h++)
          if ("undefined" != typeof a(a("[" + this.options.namespace + "multiple=" + e + "]").get(h)).data("Parsley")) {
            f = a(a("[" + this.options.namespace + "multiple=" + e + "]").get(h)).data("Parsley"), this.$element.data("ParsleyFieldMultiple") || (f.addElement(this.$element), this.$element.attr(this.options.namespace + "id", f.__id__));
            break
          }
      return this.bind("parsleyField", c, e, !0), f || this.bind("parsleyFieldMultiple", c, e)
    },
    getNamespace: function(a) {
      return "undefined" != typeof this.$element.data("parsleyNamespace") ? this.$element.data("parsleyNamespace") : "undefined" != typeof b.get(a, "namespace") ? a.namespace : "undefined" != typeof b.get(window, "ParsleyConfig.namespace") ? window.ParsleyConfig.namespace : c.namespace
    },
    bind: function(c, e, f, g) {
      var h;
      switch (c) {
        case "parsleyForm":
          h = a.extend(new i(this.$element, this.OptionsFactory), new d, window.ParsleyExtend)._bindFields();
          break;
        case "parsleyField":
          h = a.extend(new k(this.$element, this.OptionsFactory, e), new d, window.ParsleyExtend);
          break;
        case "parsleyFieldMultiple":
          h = a.extend(new k(this.$element, this.OptionsFactory, e), new d, new l, window.ParsleyExtend)._init(f);
          break;
        default:
          throw new Error(c + "is not a supported Parsley type")
      }
      return "undefined" != typeof f && b.setAttr(this.$element, this.options.namespace, "multiple", f), "undefined" != typeof g ? (this.$element.data("ParsleyFieldMultiple", h), h) : (new RegExp("ParsleyF", "i").test(h.__class__) && (this.$element.data("Parsley", h), a.emit("parsley:" + ("parsleyForm" === c ? "form" : "field") + ":init", h)), h)
    }
  }, a.fn.parsley = a.fn.psly = function(b) {
    if (this.length > 1) {
      var c = [];
      return this.each(function() {
        c.push(a(this).parsley(b))
      }), c
    }
    return a(this).length ? new o(this, b) : void(window.console && window.console.warn && window.console.warn("You must bind Parsley on an existing element."))
  }, window.ParsleyUI = "function" == typeof b.get(window, "ParsleyConfig.ParsleyUI") ? (new window.ParsleyConfig.ParsleyUI).listen() : (new g).listen(), "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}), "undefined" == typeof window.ParsleyConfig && (window.ParsleyConfig = {}), window.Parsley = window.psly = o, window.ParsleyUtils = b, window.ParsleyValidator = new f(window.ParsleyConfig.validators, window.ParsleyConfig.i18n), !1 !== b.get(window, "ParsleyConfig.autoBind") && a(function() {
    a("[data-parsley-validate]").length && a("[data-parsley-validate]").parsley()
  })
});

/*!
 * Affix
 */
$('#sidenav').affix({
  offset: {
    top: 520,
    bottom: 1000
  }
});

/*!
 * Highlight.pack.js
 */
! function(e) {
  "undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" == typeof define && define.amd && define([], function() {
    return window.hljs
  }))
}(function(e) {
  function n(e) {
    return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
  }

  function t(e) {
    return e.nodeName.toLowerCase()
  }

  function r(e, n) {
    var t = e && e.exec(n);
    return t && 0 == t.index
  }

  function a(e) {
    var n = (e.className + " " + (e.parentNode ? e.parentNode.className : "")).split(/\s+/);
    return n = n.map(function(e) {
      return e.replace(/^lang(uage)?-/, "")
    }), n.filter(function(e) {
      return N(e) || /no(-?)highlight/.test(e)
    })[0]
  }

  function o(e, n) {
    var t = {};
    for (var r in e) t[r] = e[r];
    if (n)
      for (var r in n) t[r] = n[r];
    return t
  }

  function i(e) {
    var n = [];
    return function r(e, a) {
      for (var o = e.firstChild; o; o = o.nextSibling) 3 == o.nodeType ? a += o.nodeValue.length : 1 == o.nodeType && (n.push({
        event: "start",
        offset: a,
        node: o
      }), a = r(o, a), t(o).match(/br|hr|img|input/) || n.push({
        event: "stop",
        offset: a,
        node: o
      }));
      return a
    }(e, 0), n
  }

  function c(e, r, a) {
    function o() {
      return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
    }

    function i(e) {
      function r(e) {
        return " " + e.nodeName + '="' + n(e.value) + '"'
      }
      l += "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
    }

    function c(e) {
      l += "</" + t(e) + ">"
    }

    function u(e) {
      ("start" == e.event ? i : c)(e.node)
    }
    for (var s = 0, l = "", f = []; e.length || r.length;) {
      var g = o();
      if (l += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g == e) {
        f.reverse().forEach(c);
        do u(g.splice(0, 1)[0]), g = o(); while (g == e && g.length && g[0].offset == s);
        f.reverse().forEach(i)
      } else "start" == g[0].event ? f.push(g[0].node) : f.pop(), u(g.splice(0, 1)[0])
    }
    return l + n(a.substr(s))
  }

  function u(e) {
    function n(e) {
      return e && e.source || e
    }

    function t(t, r) {
      return RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
    }

    function r(a, i) {
      if (!a.compiled) {
        if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
          var c = {},
            u = function(n, t) {
              e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function(e) {
                var t = e.split("|");
                c[t[0]] = [n, t[1] ? Number(t[1]) : 1]
              })
            };
          "string" == typeof a.k ? u("keyword", a.k) : Object.keys(a.k).forEach(function(e) {
            u(e, a.k[e])
          }), a.k = c
        }
        a.lR = t(a.l || /\b[A-Za-z0-9_]+\b/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = t(a.i)), void 0 === a.r && (a.r = 1), a.c || (a.c = []);
        var s = [];
        a.c.forEach(function(e) {
          e.v ? e.v.forEach(function(n) {
            s.push(o(e, n))
          }) : s.push("self" == e ? a : e)
        }), a.c = s, a.c.forEach(function(e) {
          r(e, a)
        }), a.starts && r(a.starts, i);
        var l = a.c.map(function(e) {
          return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
        }).concat([a.tE, a.i]).map(n).filter(Boolean);
        a.t = l.length ? t(l.join("|"), !0) : {
          exec: function() {
            return null
          }
        }
      }
    }
    r(e)
  }

  function s(e, t, a, o) {
    function i(e, n) {
      for (var t = 0; t < n.c.length; t++)
        if (r(n.c[t].bR, e)) return n.c[t]
    }

    function c(e, n) {
      return r(e.eR, n) ? e : e.eW ? c(e.parent, n) : void 0
    }

    function f(e, n) {
      return !a && r(n.iR, e)
    }

    function g(e, n) {
      var t = x.cI ? n[0].toLowerCase() : n[0];
      return e.k.hasOwnProperty(t) && e.k[t]
    }

    function p(e, n, t, r) {
      var a = r ? "" : E.classPrefix,
        o = '<span class="' + a,
        i = t ? "" : "</span>";
      return o += e + '">', o + n + i
    }

    function d() {
      if (!w.k) return n(y);
      var e = "",
        t = 0;
      w.lR.lastIndex = 0;
      for (var r = w.lR.exec(y); r;) {
        e += n(y.substr(t, r.index - t));
        var a = g(w, r);
        a ? (B += a[1], e += p(a[0], n(r[0]))) : e += n(r[0]), t = w.lR.lastIndex, r = w.lR.exec(y)
      }
      return e + n(y.substr(t))
    }

    function h() {
      if (w.sL && !R[w.sL]) return n(y);
      var e = w.sL ? s(w.sL, y, !0, L[w.sL]) : l(y);
      return w.r > 0 && (B += e.r), "continuous" == w.subLanguageMode && (L[w.sL] = e.top), p(e.language, e.value, !1, !0)
    }

    function v() {
      return void 0 !== w.sL ? h() : d()
    }

    function b(e, t) {
      var r = e.cN ? p(e.cN, "", !0) : "";
      e.rB ? (M += r, y = "") : e.eB ? (M += n(t) + r, y = "") : (M += r, y = t), w = Object.create(e, {
        parent: {
          value: w
        }
      })
    }

    function m(e, t) {
      if (y += e, void 0 === t) return M += v(), 0;
      var r = i(t, w);
      if (r) return M += v(), b(r, t), r.rB ? 0 : t.length;
      var a = c(w, t);
      if (a) {
        var o = w;
        o.rE || o.eE || (y += t), M += v();
        do w.cN && (M += "</span>"), B += w.r, w = w.parent; while (w != a.parent);
        return o.eE && (M += n(t)), y = "", a.starts && b(a.starts, ""), o.rE ? 0 : t.length
      }
      if (f(t, w)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (w.cN || "<unnamed>") + '"');
      return y += t, t.length || 1
    }
    var x = N(e);
    if (!x) throw new Error('Unknown language: "' + e + '"');
    u(x);
    for (var w = o || x, L = {}, M = "", k = w; k != x; k = k.parent) k.cN && (M = p(k.cN, "", !0) + M);
    var y = "",
      B = 0;
    try {
      for (var C, j, I = 0;;) {
        if (w.t.lastIndex = I, C = w.t.exec(t), !C) break;
        j = m(t.substr(I, C.index - I), C[0]), I = C.index + j
      }
      m(t.substr(I));
      for (var k = w; k.parent; k = k.parent) k.cN && (M += "</span>");
      return {
        r: B,
        value: M,
        language: e,
        top: w
      }
    } catch (A) {
      if (-1 != A.message.indexOf("Illegal")) return {
        r: 0,
        value: n(t)
      };
      throw A
    }
  }

  function l(e, t) {
    t = t || E.languages || Object.keys(R);
    var r = {
        r: 0,
        value: n(e)
      },
      a = r;
    return t.forEach(function(n) {
      if (N(n)) {
        var t = s(n, e, !1);
        t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t)
      }
    }), a.language && (r.second_best = a), r
  }

  function f(e) {
    return E.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, n) {
      return n.replace(/\t/g, E.tabReplace)
    })), E.useBR && (e = e.replace(/\n/g, "<br>")), e
  }

  function g(e, n, t) {
    var r = n ? x[n] : t,
      a = [e.trim()];
    return e.match(/(\s|^)hljs(\s|$)/) || a.push("hljs"), r && a.push(r), a.join(" ").trim()
  }

  function p(e) {
    var n = a(e);
    if (!/no(-?)highlight/.test(n)) {
      var t;
      E.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e;
      var r = t.textContent,
        o = n ? s(n, r, !0) : l(r),
        u = i(t);
      if (u.length) {
        var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
        p.innerHTML = o.value, o.value = c(u, i(p), r)
      }
      o.value = f(o.value), e.innerHTML = o.value, e.className = g(e.className, n, o.language), e.result = {
        language: o.language,
        re: o.r
      }, o.second_best && (e.second_best = {
        language: o.second_best.language,
        re: o.second_best.r
      })
    }
  }

  function d(e) {
    E = o(E, e)
  }

  function h() {
    if (!h.called) {
      h.called = !0;
      var e = document.querySelectorAll("pre code");
      Array.prototype.forEach.call(e, p)
    }
  }

  function v() {
    addEventListener("DOMContentLoaded", h, !1), addEventListener("load", h, !1)
  }

  function b(n, t) {
    var r = R[n] = t(e);
    r.aliases && r.aliases.forEach(function(e) {
      x[e] = n
    })
  }

  function m() {
    return Object.keys(R)
  }

  function N(e) {
    return R[e] || R[x[e]]
  }
  var E = {
      classPrefix: "hljs-",
      tabReplace: null,
      useBR: !1,
      languages: void 0
    },
    R = {},
    x = {};
  return e.highlight = s, e.highlightAuto = l, e.fixMarkup = f, e.highlightBlock = p, e.configure = d, e.initHighlighting = h, e.initHighlightingOnLoad = v, e.registerLanguage = b, e.listLanguages = m, e.getLanguage = N, e.inherit = o, e.IR = "[a-zA-Z][a-zA-Z0-9_]*", e.UIR = "[a-zA-Z_][a-zA-Z0-9_]*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
    b: "\\\\[\\s\\S]",
    r: 0
  }, e.ASM = {
    cN: "string",
    b: "'",
    e: "'",
    i: "\\n",
    c: [e.BE]
  }, e.QSM = {
    cN: "string",
    b: '"',
    e: '"',
    i: "\\n",
    c: [e.BE]
  }, e.PWM = {
    b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
  }, e.CLCM = {
    cN: "comment",
    b: "//",
    e: "$",
    c: [e.PWM]
  }, e.CBCM = {
    cN: "comment",
    b: "/\\*",
    e: "\\*/",
    c: [e.PWM]
  }, e.HCM = {
    cN: "comment",
    b: "#",
    e: "$",
    c: [e.PWM]
  }, e.NM = {
    cN: "number",
    b: e.NR,
    r: 0
  }, e.CNM = {
    cN: "number",
    b: e.CNR,
    r: 0
  }, e.BNM = {
    cN: "number",
    b: e.BNR,
    r: 0
  }, e.CSSNM = {
    cN: "number",
    b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    r: 0
  }, e.RM = {
    cN: "regexp",
    b: /\//,
    e: /\/[gimuy]*/,
    i: /\n/,
    c: [e.BE, {
      b: /\[/,
      e: /\]/,
      r: 0,
      c: [e.BE]
    }]
  }, e.TM = {
    cN: "title",
    b: e.IR,
    r: 0
  }, e.UTM = {
    cN: "title",
    b: e.UIR,
    r: 0
  }, e
});
hljs.registerLanguage("xml", function() {
  var t = "[A-Za-z0-9\\._:-]+",
    e = {
      b: /<\?(php)?(?!\w)/,
      e: /\?>/,
      sL: "php",
      subLanguageMode: "continuous"
    },
    c = {
      eW: !0,
      i: /</,
      r: 0,
      c: [e, {
        cN: "attribute",
        b: t,
        r: 0
      }, {
        b: "=",
        r: 0,
        c: [{
          cN: "value",
          c: [e],
          v: [{
            b: /"/,
            e: /"/
          }, {
            b: /'/,
            e: /'/
          }, {
            b: /[^\s\/>]+/
          }]
        }]
      }]
    };
  return {
    aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
    cI: !0,
    c: [{
      cN: "doctype",
      b: "<!DOCTYPE",
      e: ">",
      r: 10,
      c: [{
        b: "\\[",
        e: "\\]"
      }]
    }, {
      cN: "comment",
      b: "<!--",
      e: "-->",
      r: 10
    }, {
      cN: "cdata",
      b: "<\\!\\[CDATA\\[",
      e: "\\]\\]>",
      r: 10
    }, {
      cN: "tag",
      b: "<style(?=\\s|>|$)",
      e: ">",
      k: {
        title: "style"
      },
      c: [c],
      starts: {
        e: "</style>",
        rE: !0,
        sL: "css"
      }
    }, {
      cN: "tag",
      b: "<script(?=\\s|>|$)",
      e: ">",
      k: {
        title: "script"
      },
      c: [c],
      starts: {
        e: "</script>",
        rE: !0,
        sL: "javascript"
      }
    }, e, {
      cN: "pi",
      b: /<\?\w+/,
      e: /\?>/,
      r: 10
    }, {
      cN: "tag",
      b: "</?",
      e: "/?>",
      c: [{
        cN: "title",
        b: /[^ \/><\n\t]+/,
        r: 0
      }, c]
    }]
  }
});
hljs.registerLanguage("css", function(e) {
  var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
    a = {
      cN: "function",
      b: c + "\\(",
      rB: !0,
      eE: !0,
      e: "\\("
    };
  return {
    cI: !0,
    i: "[=/|']",
    c: [e.CBCM, {
      cN: "id",
      b: "\\#[A-Za-z0-9_-]+"
    }, {
      cN: "class",
      b: "\\.[A-Za-z0-9_-]+",
      r: 0
    }, {
      cN: "attr_selector",
      b: "\\[",
      e: "\\]",
      i: "$"
    }, {
      cN: "pseudo",
      b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
    }, {
      cN: "at_rule",
      b: "@(font-face|page)",
      l: "[a-z-]+",
      k: "font-face page"
    }, {
      cN: "at_rule",
      b: "@",
      e: "[{;]",
      c: [{
        cN: "keyword",
        b: /\S+/
      }, {
        b: /\s/,
        eW: !0,
        eE: !0,
        r: 0,
        c: [a, e.ASM, e.QSM, e.CSSNM]
      }]
    }, {
      cN: "tag",
      b: c,
      r: 0
    }, {
      cN: "rules",
      b: "{",
      e: "}",
      i: "[^\\s]",
      r: 0,
      c: [e.CBCM, {
        cN: "rule",
        b: "[^\\s]",
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
          cN: "attribute",
          b: "[A-Z\\_\\.\\-]+",
          e: ":",
          eE: !0,
          i: "[^\\s]",
          starts: {
            cN: "value",
            eW: !0,
            eE: !0,
            c: [a, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
              cN: "hexcolor",
              b: "#[0-9A-Fa-f]+"
            }, {
              cN: "important",
              b: "!important"
            }]
          }
        }]
      }]
    }]
  }
});
hljs.registerLanguage("ruby", function(e) {
  var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
    r = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
    c = {
      cN: "yardoctag",
      b: "@[A-Za-z]+"
    },
    a = {
      cN: "value",
      b: "#<",
      e: ">"
    },
    s = {
      cN: "comment",
      v: [{
        b: "#",
        e: "$",
        c: [c]
      }, {
        b: "^\\=begin",
        e: "^\\=end",
        c: [c],
        r: 10
      }, {
        b: "^__END__",
        e: "\\n$"
      }]
    },
    n = {
      cN: "subst",
      b: "#\\{",
      e: "}",
      k: r
    },
    t = {
      cN: "string",
      c: [e.BE, n],
      v: [{
        b: /'/,
        e: /'/
      }, {
        b: /"/,
        e: /"/
      }, {
        b: /`/,
        e: /`/
      }, {
        b: "%[qQwWx]?\\(",
        e: "\\)"
      }, {
        b: "%[qQwWx]?\\[",
        e: "\\]"
      }, {
        b: "%[qQwWx]?{",
        e: "}"
      }, {
        b: "%[qQwWx]?<",
        e: ">"
      }, {
        b: "%[qQwWx]?/",
        e: "/"
      }, {
        b: "%[qQwWx]?%",
        e: "%"
      }, {
        b: "%[qQwWx]?-",
        e: "-"
      }, {
        b: "%[qQwWx]?\\|",
        e: "\\|"
      }, {
        b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
      }]
    },
    i = {
      cN: "params",
      b: "\\(",
      e: "\\)",
      k: r
    },
    d = [t, a, s, {
      cN: "class",
      bK: "class module",
      e: "$|;",
      i: /=/,
      c: [e.inherit(e.TM, {
        b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
      }), {
        cN: "inheritance",
        b: "<\\s*",
        c: [{
          cN: "parent",
          b: "(" + e.IR + "::)?" + e.IR
        }]
      }, s]
    }, {
      cN: "function",
      bK: "def",
      e: " |$|;",
      r: 0,
      c: [e.inherit(e.TM, {
        b: b
      }), i, s]
    }, {
      cN: "constant",
      b: "(::)?(\\b[A-Z]\\w*(::)?)+",
      r: 0
    }, {
      cN: "symbol",
      b: e.UIR + "(\\!|\\?)?:",
      r: 0
    }, {
      cN: "symbol",
      b: ":",
      c: [t, {
        b: b
      }],
      r: 0
    }, {
      cN: "number",
      b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      r: 0
    }, {
      cN: "variable",
      b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, {
      b: "(" + e.RSR + ")\\s*",
      c: [a, s, {
        cN: "regexp",
        c: [e.BE, n],
        i: /\n/,
        v: [{
          b: "/",
          e: "/[a-z]*"
        }, {
          b: "%r{",
          e: "}[a-z]*"
        }, {
          b: "%r\\(",
          e: "\\)[a-z]*"
        }, {
          b: "%r!",
          e: "![a-z]*"
        }, {
          b: "%r\\[",
          e: "\\][a-z]*"
        }]
      }],
      r: 0
    }];
  n.c = d, i.c = d;
  var l = "[>?]>",
    u = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
    N = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
    o = [{
      b: /^\s*=>/,
      cN: "status",
      starts: {
        e: "$",
        c: d
      }
    }, {
      cN: "prompt",
      b: "^(" + l + "|" + u + "|" + N + ")",
      starts: {
        e: "$",
        c: d
      }
    }];
  return {
    aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
    k: r,
    c: [s].concat(o).concat(d)
  }
});
hljs.registerLanguage("apache", function(e) {
  var r = {
    cN: "number",
    b: "[\\$%]\\d+"
  };
  return {
    aliases: ["apacheconf"],
    cI: !0,
    c: [e.HCM, {
      cN: "tag",
      b: "</?",
      e: ">"
    }, {
      cN: "keyword",
      b: /\w+/,
      r: 0,
      k: {
        common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
      },
      starts: {
        e: /$/,
        r: 0,
        k: {
          literal: "on off all"
        },
        c: [{
          cN: "sqbracket",
          b: "\\s\\[",
          e: "\\]$"
        }, {
          cN: "cbracket",
          b: "[\\$%]\\{",
          e: "\\}",
          c: ["self", r]
        }, r, e.QSM]
      }
    }],
    i: /\S/
  }
});
hljs.registerLanguage("php", function(e) {
  var c = {
      cN: "variable",
      b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
    },
    i = {
      cN: "preprocessor",
      b: /<\?(php)?|\?>/
    },
    a = {
      cN: "string",
      c: [e.BE, i],
      v: [{
        b: 'b"',
        e: '"'
      }, {
        b: "b'",
        e: "'"
      }, e.inherit(e.ASM, {
        i: null
      }), e.inherit(e.QSM, {
        i: null
      })]
    },
    n = {
      v: [e.BNM, e.CNM]
    };
  return {
    aliases: ["php3", "php4", "php5", "php6"],
    cI: !0,
    k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
    c: [e.CLCM, e.HCM, {
      cN: "comment",
      b: "/\\*",
      e: "\\*/",
      c: [{
        cN: "phpdoc",
        b: "\\s@[A-Za-z]+"
      }, i]
    }, {
      cN: "comment",
      b: "__halt_compiler.+?;",
      eW: !0,
      k: "__halt_compiler",
      l: e.UIR
    }, {
      cN: "string",
      b: "<<<['\"]?\\w+['\"]?$",
      e: "^\\w+;",
      c: [e.BE]
    }, i, c, {
      b: /->+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
    }, {
      cN: "function",
      bK: "function",
      e: /[;{]/,
      eE: !0,
      i: "\\$|\\[|%",
      c: [e.UTM, {
        cN: "params",
        b: "\\(",
        e: "\\)",
        c: ["self", c, e.CBCM, a, n]
      }]
    }, {
      cN: "class",
      bK: "class interface",
      e: "{",
      eE: !0,
      i: /[:\(\$"]/,
      c: [{
        bK: "extends implements"
      }, e.UTM]
    }, {
      bK: "namespace",
      e: ";",
      i: /[\.']/,
      c: [e.UTM]
    }, {
      bK: "use",
      e: ";",
      c: [e.UTM]
    }, {
      b: "=>"
    }, a, n]
  }
});
hljs.registerLanguage("applescript", function(e) {
  var t = e.inherit(e.QSM, {
      i: ""
    }),
    r = {
      cN: "params",
      b: "\\(",
      e: "\\)",
      c: ["self", e.CNM, t]
    },
    o = [{
      cN: "comment",
      b: "--",
      e: "$"
    }, {
      cN: "comment",
      b: "\\(\\*",
      e: "\\*\\)",
      c: ["self", {
        b: "--",
        e: "$"
      }]
    }, e.HCM];
  return {
    aliases: ["osascript"],
    k: {
      keyword: "about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
      constant: "AppleScript false linefeed return pi quote result space tab true",
      type: "alias application boolean class constant date file integer list number real record string text",
      command: "activate beep count delay launch log offset read round run say summarize write",
      property: "character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
    },
    c: [t, e.CNM, {
      cN: "type",
      b: "\\bPOSIX file\\b"
    }, {
      cN: "command",
      b: "\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"
    }, {
      cN: "constant",
      b: "\\b(text item delimiters|current application|missing value)\\b"
    }, {
      cN: "keyword",
      b: "\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference))\\b"
    }, {
      cN: "property",
      b: "\\b(POSIX path|(date|time) string|quoted form)\\b"
    }, {
      cN: "function_start",
      bK: "on",
      i: "[${=;\\n]",
      c: [e.UTM, r]
    }].concat(o),
    i: "//|->|=>"
  }
});
hljs.registerLanguage("bash", function(e) {
  var t = {
      cN: "variable",
      v: [{
        b: /\$[\w\d#@][\w\d_]*/
      }, {
        b: /\$\{(.*?)\}/
      }]
    },
    s = {
      cN: "string",
      b: /"/,
      e: /"/,
      c: [e.BE, t, {
        cN: "variable",
        b: /\$\(/,
        e: /\)/,
        c: [e.BE]
      }]
    },
    a = {
      cN: "string",
      b: /'/,
      e: /'/
    };
  return {
    aliases: ["sh", "zsh"],
    l: /-?[a-z\.]+/,
    k: {
      keyword: "if then else elif fi for while in do done case esac function",
      literal: "true false",
      built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
      operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
    },
    c: [{
      cN: "shebang",
      b: /^#![^\n]+sh\s*$/,
      r: 10
    }, {
      cN: "function",
      b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      rB: !0,
      c: [e.inherit(e.TM, {
        b: /\w[\w\d_]*/
      })],
      r: 0
    }, e.HCM, e.NM, s, a, t]
  }
});
hljs.registerLanguage("javascript", function(r) {
  return {
    aliases: ["js"],
    k: {
      keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
      literal: "true false null undefined NaN Infinity",
      built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"
    },
    c: [{
      cN: "pi",
      r: 10,
      v: [{
        b: /^\s*('|")use strict('|")/
      }, {
        b: /^\s*('|")use asm('|")/
      }]
    }, r.ASM, r.QSM, r.CLCM, r.CBCM, r.CNM, {
      b: "(" + r.RSR + "|\\b(case|return|throw)\\b)\\s*",
      k: "return throw case",
      c: [r.CLCM, r.CBCM, r.RM, {
        b: /</,
        e: />;/,
        r: 0,
        sL: "xml"
      }],
      r: 0
    }, {
      cN: "function",
      bK: "function",
      e: /\{/,
      eE: !0,
      c: [r.inherit(r.TM, {
        b: /[A-Za-z$_][0-9A-Za-z$_]*/
      }), {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: [r.CLCM, r.CBCM],
        i: /["'\(]/
      }],
      i: /\[|%/
    }, {
      b: /\$[(.]/
    }, {
      b: "\\." + r.IR,
      r: 0
    }]
  }
});
hljs.registerLanguage("makefile", function(e) {
  var a = {
    cN: "variable",
    b: /\$\(/,
    e: /\)/,
    c: [e.BE]
  };
  return {
    aliases: ["mk", "mak"],
    c: [e.HCM, {
      b: /^\w+\s*\W*=/,
      rB: !0,
      r: 0,
      starts: {
        cN: "constant",
        e: /\s*\W*=/,
        eE: !0,
        starts: {
          e: /$/,
          r: 0,
          c: [a]
        }
      }
    }, {
      cN: "title",
      b: /^[\w]+:\s*$/
    }, {
      cN: "phony",
      b: /^\.PHONY:/,
      e: /$/,
      k: ".PHONY",
      l: /[\.\w]+/
    }, {
      b: /^\t+/,
      e: /$/,
      r: 0,
      c: [e.QSM, a]
    }]
  }
});
hljs.registerLanguage("markdown", function() {
  return {
    aliases: ["md", "mkdown", "mkd"],
    c: [{
      cN: "header",
      v: [{
        b: "^#{1,6}",
        e: "$"
      }, {
        b: "^.+?\\n[=-]{2,}$"
      }]
    }, {
      b: "<",
      e: ">",
      sL: "xml",
      r: 0
    }, {
      cN: "bullet",
      b: "^([*+-]|(\\d+\\.))\\s+"
    }, {
      cN: "strong",
      b: "[*_]{2}.+?[*_]{2}"
    }, {
      cN: "emphasis",
      v: [{
        b: "\\*.+?\\*"
      }, {
        b: "_.+?_",
        r: 0
      }]
    }, {
      cN: "blockquote",
      b: "^>\\s+",
      e: "$"
    }, {
      cN: "code",
      v: [{
        b: "`.+?`"
      }, {
        b: "^( {4}|	)",
        e: "$",
        r: 0
      }]
    }, {
      cN: "horizontal_rule",
      b: "^[-\\*]{3,}",
      e: "$"
    }, {
      b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
      rB: !0,
      c: [{
        cN: "link_label",
        b: "\\[",
        e: "\\]",
        eB: !0,
        rE: !0,
        r: 0
      }, {
        cN: "link_url",
        b: "\\]\\(",
        e: "\\)",
        eB: !0,
        eE: !0
      }, {
        cN: "link_reference",
        b: "\\]\\[",
        e: "\\]",
        eB: !0,
        eE: !0
      }],
      r: 10
    }, {
      b: "^\\[.+\\]:",
      rB: !0,
      c: [{
        cN: "link_reference",
        b: "\\[",
        e: "\\]:",
        eB: !0,
        eE: !0,
        starts: {
          cN: "link_url",
          e: "$"
        }
      }]
    }]
  }
});
hljs.registerLanguage("http", function() {
  return {
    i: "\\S",
    c: [{
      cN: "status",
      b: "^HTTP/[0-9\\.]+",
      e: "$",
      c: [{
        cN: "number",
        b: "\\b\\d{3}\\b"
      }]
    }, {
      cN: "request",
      b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
      rB: !0,
      e: "$",
      c: [{
        cN: "string",
        b: " ",
        e: " ",
        eB: !0,
        eE: !0
      }]
    }, {
      cN: "attribute",
      b: "^\\w",
      e: ": ",
      eE: !0,
      i: "\\n|\\s|=",
      starts: {
        cN: "string",
        e: "$"
      }
    }, {
      b: "\\n\\n",
      starts: {
        sL: "",
        eW: !0
      }
    }]
  }
});
hljs.registerLanguage("nginx", function(e) {
  var r = {
      cN: "variable",
      v: [{
        b: /\$\d+/
      }, {
        b: /\$\{/,
        e: /}/
      }, {
        b: "[\\$\\@]" + e.UIR
      }]
    },
    b = {
      eW: !0,
      l: "[a-z/_]+",
      k: {
        built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
      },
      r: 0,
      i: "=>",
      c: [e.HCM, {
        cN: "string",
        c: [e.BE, r],
        v: [{
          b: /"/,
          e: /"/
        }, {
          b: /'/,
          e: /'/
        }]
      }, {
        cN: "url",
        b: "([a-z]+):/",
        e: "\\s",
        eW: !0,
        eE: !0,
        c: [r]
      }, {
        cN: "regexp",
        c: [e.BE, r],
        v: [{
          b: "\\s\\^",
          e: "\\s|{|;",
          rE: !0
        }, {
          b: "~\\*?\\s+",
          e: "\\s|{|;",
          rE: !0
        }, {
          b: "\\*(\\.[a-z\\-]+)+"
        }, {
          b: "([a-z\\-]+\\.)+\\*"
        }]
      }, {
        cN: "number",
        b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
      }, {
        cN: "number",
        b: "\\b\\d+[kKmMgGdshdwy]*\\b",
        r: 0
      }, r]
    };
  return {
    aliases: ["nginxconf"],
    c: [e.HCM, {
      b: e.UIR + "\\s",
      e: ";|{",
      rB: !0,
      c: [{
        cN: "title",
        b: e.UIR,
        starts: b
      }],
      r: 0
    }],
    i: "[^\\s\\}]"
  }
});
hljs.registerLanguage("sql", function(e) {
  var t = {
    cN: "comment",
    b: "--",
    e: "$"
  };
  return {
    cI: !0,
    i: /[<>]/,
    c: [{
      cN: "operator",
      bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",
      e: /;/,
      eW: !0,
      k: {
        keyword: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
        literal: "true false null",
        built_in: "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"
      },
      c: [{
        cN: "string",
        b: "'",
        e: "'",
        c: [e.BE, {
          b: "''"
        }]
      }, {
        cN: "string",
        b: '"',
        e: '"',
        c: [e.BE, {
          b: '""'
        }]
      }, {
        cN: "string",
        b: "`",
        e: "`",
        c: [e.BE]
      }, e.CNM, e.CBCM, t]
    }, e.CBCM, t]
  }
});

$(document).ready(function() {
  $('code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});

/*!
 * Typed.js
 */
! function(t) {
  "use strict";
  var s = function(s, o) {
    this.el = t(s), this.options = t.extend({}, t.fn.typed.defaults, o), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.build()
  };
  s.prototype = {
    constructor: s,
    init: function() {
      var t = this;
      t.timeout = setTimeout(function() {
        t.typewrite(t.strings[t.arrayPos], t.strPos)
      }, t.startDelay)
    },
    build: function() {
      this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.init()
    },
    typewrite: function(t, s) {
      if (this.stop !== !0) {
        var o = Math.round(70 * Math.random()) + this.typeSpeed,
          e = this;
        e.timeout = setTimeout(function() {
          var o = 0,
            i = t.substr(s);
          if ("^" === i.charAt(0)) {
            var r = 1;
            /^\^\d+/.test(i) && (i = /\d+/.exec(i)[0], r += i.length, o = parseInt(i)), t = t.substring(0, s) + t.substring(s + r)
          }
          if ("html" === e.contentType) {
            var n = t.substr(s).charAt(0);
            if ("<" === n || "&" === n) {
              var a = "",
                h = "";
              for (h = "<" === n ? ">" : ";"; t.substr(s).charAt(0) !== h;) a += t.substr(s).charAt(0), s++;
              s++, a += h
            }
          }
          e.timeout = setTimeout(function() {
            if (s === t.length) {
              if (e.options.onStringTyped(e.arrayPos), e.arrayPos === e.strings.length - 1 && (e.options.callback(), e.curLoop++, e.loop === !1 || e.curLoop === e.loopCount)) return;
              e.timeout = setTimeout(function() {
                e.backspace(t, s)
              }, e.backDelay)
            } else {
              0 === s && e.options.preStringTyped(e.arrayPos);
              var o = t.substr(0, s + 1);
              e.attr ? e.el.attr(e.attr, o) : e.isInput ? e.el.val(o) : "html" === e.contentType ? e.el.html(o) : e.el.text(o), s++, e.typewrite(t, s)
            }
          }, o)
        }, o)
      }
    },
    backspace: function(t, s) {
      if (this.stop !== !0) {
        var o = Math.round(70 * Math.random()) + this.backSpeed,
          e = this;
        e.timeout = setTimeout(function() {
          if ("html" === e.contentType && ">" === t.substr(s).charAt(0)) {
            for (var o = "";
              "<" !== t.substr(s).charAt(0);) o -= t.substr(s).charAt(0), s--;
            s--, o += "<"
          }
          var i = t.substr(0, s);
          e.attr ? e.el.attr(e.attr, i) : e.isInput ? e.el.val(i) : "html" === e.contentType ? e.el.html(i) : e.el.text(i), s > e.stopNum ? (s--, e.backspace(t, s)) : s <= e.stopNum && (e.arrayPos++, e.arrayPos === e.strings.length ? (e.arrayPos = 0, e.init()) : e.typewrite(e.strings[e.arrayPos], s))
        }, o)
      }
    },
    reset: function() {
      var t = this;
      clearInterval(t.timeout);
      var s = this.el.attr("id");
      this.el.after('<span id="' + s + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), t.options.resetCallback()
    }
  }, t.fn.typed = function(o) {
    return this.each(function() {
      var e = t(this),
        i = e.data("typed"),
        r = "object" == typeof o && o;
      i || e.data("typed", i = new s(this, r)), "string" == typeof o && i[o]()
    })
  }, t.fn.typed.defaults = {
    strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    backDelay: 500,
    loop: !1,
    loopCount: !1,
    showCursor: !0,
    cursorChar: "|",
    attr: null,
    contentType: "html",
    callback: function() {},
    preStringTyped: function() {},
    onStringTyped: function() {},
    resetCallback: function() {}
  }
}(window.jQuery);

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
(function() {
  "use strict";
  var t = this,
    i = t.Chart,
    e = function(t) {
      this.canvas = t.canvas, this.ctx = t;
      var i = function(t, i) {
          return t["offset" + i] ? t["offset" + i] : document.defaultView.getComputedStyle(t).getPropertyValue(i)
        },
        e = this.width = i(t.canvas, "Width"),
        n = this.height = i(t.canvas, "Height");
      t.canvas.width = e, t.canvas.height = n;
      var e = this.width = t.canvas.width,
        n = this.height = t.canvas.height;
      return this.aspectRatio = this.width / this.height, s.retinaScale(this), this
    };
  e.defaults = {
    global: {
      animation: !0,
      animationSteps: 60,
      animationEasing: "easeOutQuart",
      showScale: !0,
      scaleOverride: !1,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: !0,
      scaleLabel: "<%=value%>",
      scaleIntegersOnly: !0,
      scaleBeginAtZero: !1,
      scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      responsive: !1,
      maintainAspectRatio: !0,
      showTooltips: !0,
      customTooltips: !1,
      tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
      tooltipFillColor: "rgba(0,0,0,0.8)",
      tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipFontSize: 14,
      tooltipFontStyle: "normal",
      tooltipFontColor: "#fff",
      tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipTitleFontSize: 14,
      tooltipTitleFontStyle: "bold",
      tooltipTitleFontColor: "#fff",
      tooltipYPadding: 6,
      tooltipXPadding: 6,
      tooltipCaretSize: 8,
      tooltipCornerRadius: 6,
      tooltipXOffset: 10,
      tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
      multiTooltipTemplate: "<%= value %>",
      multiTooltipKeyBackground: "#fff",
      onAnimationProgress: function() {},
      onAnimationComplete: function() {}
    }
  }, e.types = {};
  var s = e.helpers = {},
    n = s.each = function(t, i, e) {
      var s = Array.prototype.slice.call(arguments, 3);
      if (t)
        if (t.length === +t.length) {
          var n;
          for (n = 0; n < t.length; n++) i.apply(e, [t[n], n].concat(s))
        } else
          for (var o in t) i.apply(e, [t[o], o].concat(s))
    },
    o = s.clone = function(t) {
      var i = {};
      return n(t, function(e, s) {
        t.hasOwnProperty(s) && (i[s] = e)
      }), i
    },
    a = s.extend = function(t) {
      return n(Array.prototype.slice.call(arguments, 1), function(i) {
        n(i, function(e, s) {
          i.hasOwnProperty(s) && (t[s] = e)
        })
      }), t
    },
    h = s.merge = function() {
      var t = Array.prototype.slice.call(arguments, 0);
      return t.unshift({}), a.apply(null, t)
    },
    l = s.indexOf = function(t, i) {
      if (Array.prototype.indexOf) return t.indexOf(i);
      for (var e = 0; e < t.length; e++)
        if (t[e] === i) return e;
      return -1
    },
    r = (s.where = function(t, i) {
      var e = [];
      return s.each(t, function(t) {
        i(t) && e.push(t)
      }), e
    }, s.findNextWhere = function(t, i, e) {
      e || (e = -1);
      for (var s = e + 1; s < t.length; s++) {
        var n = t[s];
        if (i(n)) return n
      }
    }, s.findPreviousWhere = function(t, i, e) {
      e || (e = t.length);
      for (var s = e - 1; s >= 0; s--) {
        var n = t[s];
        if (i(n)) return n
      }
    }, s.inherits = function(t) {
      var i = this,
        e = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
          return i.apply(this, arguments)
        },
        s = function() {
          this.constructor = e
        };
      return s.prototype = i.prototype, e.prototype = new s, e.extend = r, t && a(e.prototype, t), e.__super__ = i.prototype, e
    }),
    c = s.noop = function() {},
    u = s.uid = function() {
      var t = 0;
      return function() {
        return "chart-" + t++
      }
    }(),
    d = s.warn = function(t) {
      window.console && "function" == typeof window.console.warn && console.warn(t)
    },
    p = s.amd = "function" == typeof define && define.amd,
    f = s.isNumber = function(t) {
      return !isNaN(parseFloat(t)) && isFinite(t)
    },
    g = s.max = function(t) {
      return Math.max.apply(Math, t)
    },
    m = s.min = function(t) {
      return Math.min.apply(Math, t)
    },
    v = (s.cap = function(t, i, e) {
      if (f(i)) {
        if (t > i) return i
      } else if (f(e) && e > t) return e;
      return t
    }, s.getDecimalPlaces = function(t) {
      return t % 1 !== 0 && f(t) ? t.toString().split(".")[1].length : 0
    }),
    S = s.radians = function(t) {
      return t * (Math.PI / 180)
    },
    x = (s.getAngleFromPoint = function(t, i) {
      var e = i.x - t.x,
        s = i.y - t.y,
        n = Math.sqrt(e * e + s * s),
        o = 2 * Math.PI + Math.atan2(s, e);
      return 0 > e && 0 > s && (o += 2 * Math.PI), {
        angle: o,
        distance: n
      }
    }, s.aliasPixel = function(t) {
      return t % 2 === 0 ? 0 : .5
    }),
    y = (s.splineCurve = function(t, i, e, s) {
      var n = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2)),
        o = Math.sqrt(Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2)),
        a = s * n / (n + o),
        h = s * o / (n + o);
      return {
        inner: {
          x: i.x - a * (e.x - t.x),
          y: i.y - a * (e.y - t.y)
        },
        outer: {
          x: i.x + h * (e.x - t.x),
          y: i.y + h * (e.y - t.y)
        }
      }
    }, s.calculateOrderOfMagnitude = function(t) {
      return Math.floor(Math.log(t) / Math.LN10)
    }),
    C = (s.calculateScaleRange = function(t, i, e, s, n) {
      var o = 2,
        a = Math.floor(i / (1.5 * e)),
        h = o >= a,
        l = g(t),
        r = m(t);
      l === r && (l += .5, r >= .5 && !s ? r -= .5 : l += .5);
      for (var c = Math.abs(l - r), u = y(c), d = Math.ceil(l / (1 * Math.pow(10, u))) * Math.pow(10, u), p = s ? 0 : Math.floor(r / (1 * Math.pow(10, u))) * Math.pow(10, u), f = d - p, v = Math.pow(10, u), S = Math.round(f / v);
        (S > a || a > 2 * S) && !h;)
        if (S > a) v *= 2, S = Math.round(f / v), S % 1 !== 0 && (h = !0);
        else if (n && u >= 0) {
        if (v / 2 % 1 !== 0) break;
        v /= 2, S = Math.round(f / v)
      } else v /= 2, S = Math.round(f / v);
      return h && (S = o, v = f / S), {
        steps: S,
        stepValue: v,
        min: p,
        max: p + S * v
      }
    }, s.template = function(t, i) {
      function e(t, i) {
        var e = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : s[t] = s[t];
        return i ? e(i) : e
      }
      if (t instanceof Function) return t(i);
      var s = {};
      return e(t, i)
    }),
    w = (s.generateLabels = function(t, i, e, s) {
      var o = new Array(i);
      return labelTemplateString && n(o, function(i, n) {
        o[n] = C(t, {
          value: e + s * (n + 1)
        })
      }), o
    }, s.easingEffects = {
      linear: function(t) {
        return t
      },
      easeInQuad: function(t) {
        return t * t
      },
      easeOutQuad: function(t) {
        return -1 * t * (t - 2)
      },
      easeInOutQuad: function(t) {
        return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
      },
      easeInCubic: function(t) {
        return t * t * t
      },
      easeOutCubic: function(t) {
        return 1 * ((t = t / 1 - 1) * t * t + 1)
      },
      easeInOutCubic: function(t) {
        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
      },
      easeInQuart: function(t) {
        return t * t * t * t
      },
      easeOutQuart: function(t) {
        return -1 * ((t = t / 1 - 1) * t * t * t - 1)
      },
      easeInOutQuart: function(t) {
        return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
      },
      easeInQuint: function(t) {
        return 1 * (t /= 1) * t * t * t * t
      },
      easeOutQuint: function(t) {
        return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
      },
      easeInOutQuint: function(t) {
        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
      },
      easeInSine: function(t) {
        return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
      },
      easeOutSine: function(t) {
        return 1 * Math.sin(t / 1 * (Math.PI / 2))
      },
      easeInOutSine: function(t) {
        return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
      },
      easeInExpo: function(t) {
        return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
      },
      easeOutExpo: function(t) {
        return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
      },
      easeInOutExpo: function(t) {
        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
      },
      easeInCirc: function(t) {
        return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
      },
      easeOutCirc: function(t) {
        return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
      },
      easeInOutCirc: function(t) {
        return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
      },
      easeInElastic: function(t) {
        var i = 1.70158,
          e = 0,
          s = 1;
        return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (e || (e = .3), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e)))
      },
      easeOutElastic: function(t) {
        var i = 1.70158,
          e = 0,
          s = 1;
        return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (e || (e = .3), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), s * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - i) * Math.PI / e) + 1)
      },
      easeInOutElastic: function(t) {
        var i = 1.70158,
          e = 0,
          s = 1;
        return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (e || (e = .3 * 1.5), s < Math.abs(1) ? (s = 1, i = e / 4) : i = e / (2 * Math.PI) * Math.asin(1 / s), 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e) : s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - i) * Math.PI / e) * .5 + 1)
      },
      easeInBack: function(t) {
        var i = 1.70158;
        return 1 * (t /= 1) * t * ((i + 1) * t - i)
      },
      easeOutBack: function(t) {
        var i = 1.70158;
        return 1 * ((t = t / 1 - 1) * t * ((i + 1) * t + i) + 1)
      },
      easeInOutBack: function(t) {
        var i = 1.70158;
        return (t /= .5) < 1 ? .5 * t * t * (((i *= 1.525) + 1) * t - i) : .5 * ((t -= 2) * t * (((i *= 1.525) + 1) * t + i) + 2)
      },
      easeInBounce: function(t) {
        return 1 - w.easeOutBounce(1 - t)
      },
      easeOutBounce: function(t) {
        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
      },
      easeInOutBounce: function(t) {
        return .5 > t ? .5 * w.easeInBounce(2 * t) : .5 * w.easeOutBounce(2 * t - 1) + .5
      }
    }),
    b = s.requestAnimFrame = function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
        return window.setTimeout(t, 1e3 / 60)
      }
    }(),
    P = s.cancelAnimFrame = function() {
      return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
        return window.clearTimeout(t, 1e3 / 60)
      }
    }(),
    L = (s.animationLoop = function(t, i, e, s, n, o) {
      var a = 0,
        h = w[e] || w.linear,
        l = function() {
          a++;
          var e = a / i,
            r = h(e);
          t.call(o, r, e, a), s.call(o, r, e), i > a ? o.animationFrame = b(l) : n.apply(o)
        };
      b(l)
    }, s.getRelativePosition = function(t) {
      var i, e, s = t.originalEvent || t,
        n = t.currentTarget || t.srcElement,
        o = n.getBoundingClientRect();
      return s.touches ? (i = s.touches[0].clientX - o.left, e = s.touches[0].clientY - o.top) : (i = s.clientX - o.left, e = s.clientY - o.top), {
        x: i,
        y: e
      }
    }, s.addEvent = function(t, i, e) {
      t.addEventListener ? t.addEventListener(i, e) : t.attachEvent ? t.attachEvent("on" + i, e) : t["on" + i] = e
    }),
    k = s.removeEvent = function(t, i, e) {
      t.removeEventListener ? t.removeEventListener(i, e, !1) : t.detachEvent ? t.detachEvent("on" + i, e) : t["on" + i] = c
    },
    F = (s.bindEvents = function(t, i, e) {
      t.events || (t.events = {}), n(i, function(i) {
        t.events[i] = function() {
          e.apply(t, arguments)
        }, L(t.chart.canvas, i, t.events[i])
      })
    }, s.unbindEvents = function(t, i) {
      n(i, function(i, e) {
        k(t.chart.canvas, e, i)
      })
    }),
    R = s.getMaximumWidth = function(t) {
      var i = t.parentNode;
      return i.clientWidth
    },
    T = s.getMaximumHeight = function(t) {
      var i = t.parentNode;
      return i.clientHeight
    },
    A = (s.getMaximumSize = s.getMaximumWidth, s.retinaScale = function(t) {
      var i = t.ctx,
        e = t.canvas.width,
        s = t.canvas.height;
      window.devicePixelRatio && (i.canvas.style.width = e + "px", i.canvas.style.height = s + "px", i.canvas.height = s * window.devicePixelRatio, i.canvas.width = e * window.devicePixelRatio, i.scale(window.devicePixelRatio, window.devicePixelRatio))
    }),
    M = s.clear = function(t) {
      t.ctx.clearRect(0, 0, t.width, t.height)
    },
    W = s.fontString = function(t, i, e) {
      return i + " " + t + "px " + e
    },
    z = s.longestText = function(t, i, e) {
      t.font = i;
      var s = 0;
      return n(e, function(i) {
        var e = t.measureText(i).width;
        s = e > s ? e : s
      }), s
    },
    B = s.drawRoundedRectangle = function(t, i, e, s, n, o) {
      t.beginPath(), t.moveTo(i + o, e), t.lineTo(i + s - o, e), t.quadraticCurveTo(i + s, e, i + s, e + o), t.lineTo(i + s, e + n - o), t.quadraticCurveTo(i + s, e + n, i + s - o, e + n), t.lineTo(i + o, e + n), t.quadraticCurveTo(i, e + n, i, e + n - o), t.lineTo(i, e + o), t.quadraticCurveTo(i, e, i + o, e), t.closePath()
    };
  e.instances = {}, e.Type = function(t, i, s) {
    this.options = i, this.chart = s, this.id = u(), e.instances[this.id] = this, i.responsive && this.resize(), this.initialize.call(this, t)
  }, a(e.Type.prototype, {
    initialize: function() {
      return this
    },
    clear: function() {
      return M(this.chart), this
    },
    stop: function() {
      return P(this.animationFrame), this
    },
    resize: function(t) {
      this.stop();
      var i = this.chart.canvas,
        e = R(this.chart.canvas),
        s = this.options.maintainAspectRatio ? e / this.chart.aspectRatio : T(this.chart.canvas);
      return i.width = this.chart.width = e, i.height = this.chart.height = s, A(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
    },
    reflow: c,
    render: function(t) {
      return t && this.reflow(), this.options.animation && !t ? s.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
    },
    generateLegend: function() {
      return C(this.options.legendTemplate, this)
    },
    destroy: function() {
      this.clear(), F(this, this.events);
      var t = this.chart.canvas;
      t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete e.instances[this.id]
    },
    showTooltip: function(t, i) {
      "undefined" == typeof this.activeElements && (this.activeElements = []);
      var o = function(t) {
        var i = !1;
        return t.length !== this.activeElements.length ? i = !0 : (n(t, function(t, e) {
          t !== this.activeElements[e] && (i = !0)
        }, this), i)
      }.call(this, t);
      if (o || i) {
        if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
          if (this.datasets && this.datasets.length > 1) {
            for (var a, h, r = this.datasets.length - 1; r >= 0 && (a = this.datasets[r].points || this.datasets[r].bars || this.datasets[r].segments, h = l(a, t[0]), -1 === h); r--);
            var c = [],
              u = [],
              d = function() {
                var t, i, e, n, o, a = [],
                  l = [],
                  r = [];
                return s.each(this.datasets, function(i) {
                  t = i.points || i.bars || i.segments, t[h] && t[h].hasValue() && a.push(t[h])
                }), s.each(a, function(t) {
                  l.push(t.x), r.push(t.y), c.push(s.template(this.options.multiTooltipTemplate, t)), u.push({
                    fill: t._saved.fillColor || t.fillColor,
                    stroke: t._saved.strokeColor || t.strokeColor
                  })
                }, this), o = m(r), e = g(r), n = m(l), i = g(l), {
                  x: n > this.chart.width / 2 ? n : i,
                  y: (o + e) / 2
                }
              }.call(this, h);
            new e.MultiTooltip({
              x: d.x,
              y: d.y,
              xPadding: this.options.tooltipXPadding,
              yPadding: this.options.tooltipYPadding,
              xOffset: this.options.tooltipXOffset,
              fillColor: this.options.tooltipFillColor,
              textColor: this.options.tooltipFontColor,
              fontFamily: this.options.tooltipFontFamily,
              fontStyle: this.options.tooltipFontStyle,
              fontSize: this.options.tooltipFontSize,
              titleTextColor: this.options.tooltipTitleFontColor,
              titleFontFamily: this.options.tooltipTitleFontFamily,
              titleFontStyle: this.options.tooltipTitleFontStyle,
              titleFontSize: this.options.tooltipTitleFontSize,
              cornerRadius: this.options.tooltipCornerRadius,
              labels: c,
              legendColors: u,
              legendColorBackground: this.options.multiTooltipKeyBackground,
              title: t[0].label,
              chart: this.chart,
              ctx: this.chart.ctx,
              custom: this.options.customTooltips
            }).draw()
          } else n(t, function(t) {
            var i = t.tooltipPosition();
            new e.Tooltip({
              x: Math.round(i.x),
              y: Math.round(i.y),
              xPadding: this.options.tooltipXPadding,
              yPadding: this.options.tooltipYPadding,
              fillColor: this.options.tooltipFillColor,
              textColor: this.options.tooltipFontColor,
              fontFamily: this.options.tooltipFontFamily,
              fontStyle: this.options.tooltipFontStyle,
              fontSize: this.options.tooltipFontSize,
              caretHeight: this.options.tooltipCaretSize,
              cornerRadius: this.options.tooltipCornerRadius,
              text: C(this.options.tooltipTemplate, t),
              chart: this.chart,
              custom: this.options.customTooltips
            }).draw()
          }, this);
        return this
      }
    },
    toBase64Image: function() {
      return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
    }
  }), e.Type.extend = function(t) {
    var i = this,
      s = function() {
        return i.apply(this, arguments)
      };
    if (s.prototype = o(i.prototype), a(s.prototype, t), s.extend = e.Type.extend, t.name || i.prototype.name) {
      var n = t.name || i.prototype.name,
        l = e.defaults[i.prototype.name] ? o(e.defaults[i.prototype.name]) : {};
      e.defaults[n] = a(l, t.defaults), e.types[n] = s, e.prototype[n] = function(t, i) {
        var o = h(e.defaults.global, e.defaults[n], i || {});
        return new s(t, o, this)
      }
    } else d("Name not provided for this chart, so it hasn't been registered");
    return i
  }, e.Element = function(t) {
    a(this, t), this.initialize.apply(this, arguments), this.save()
  }, a(e.Element.prototype, {
    initialize: function() {},
    restore: function(t) {
      return t ? n(t, function(t) {
        this[t] = this._saved[t]
      }, this) : a(this, this._saved), this
    },
    save: function() {
      return this._saved = o(this), delete this._saved._saved, this
    },
    update: function(t) {
      return n(t, function(t, i) {
        this._saved[i] = this[i], this[i] = t
      }, this), this
    },
    transition: function(t, i) {
      return n(t, function(t, e) {
        this[e] = (t - this._saved[e]) * i + this._saved[e]
      }, this), this
    },
    tooltipPosition: function() {
      return {
        x: this.x,
        y: this.y
      }
    },
    hasValue: function() {
      return f(this.value)
    }
  }), e.Element.extend = r, e.Point = e.Element.extend({
    display: !0,
    inRange: function(t, i) {
      var e = this.hitDetectionRadius + this.radius;
      return Math.pow(t - this.x, 2) + Math.pow(i - this.y, 2) < Math.pow(e, 2)
    },
    draw: function() {
      if (this.display) {
        var t = this.ctx;
        t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
      }
    }
  }), e.Arc = e.Element.extend({
    inRange: function(t, i) {
      var e = s.getAngleFromPoint(this, {
          x: t,
          y: i
        }),
        n = e.angle >= this.startAngle && e.angle <= this.endAngle,
        o = e.distance >= this.innerRadius && e.distance <= this.outerRadius;
      return n && o
    },
    tooltipPosition: function() {
      var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
        i = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
      return {
        x: this.x + Math.cos(t) * i,
        y: this.y + Math.sin(t) * i
      }
    },
    draw: function(t) {
      var i = this.ctx;
      i.beginPath(), i.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), i.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), i.closePath(), i.strokeStyle = this.strokeColor, i.lineWidth = this.strokeWidth, i.fillStyle = this.fillColor, i.fill(), i.lineJoin = "bevel", this.showStroke && i.stroke()
    }
  }), e.Rectangle = e.Element.extend({
    draw: function() {
      var t = this.ctx,
        i = this.width / 2,
        e = this.x - i,
        s = this.x + i,
        n = this.base - (this.base - this.y),
        o = this.strokeWidth / 2;
      this.showStroke && (e += o, s -= o, n += o), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(e, this.base), t.lineTo(e, n), t.lineTo(s, n), t.lineTo(s, this.base), t.fill(), this.showStroke && t.stroke()
    },
    height: function() {
      return this.base - this.y
    },
    inRange: function(t, i) {
      return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && i >= this.y && i <= this.base
    }
  }), e.Tooltip = e.Element.extend({
    draw: function() {
      var t = this.chart.ctx;
      t.font = W(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
      var i = this.caretPadding = 2,
        e = t.measureText(this.text).width + 2 * this.xPadding,
        s = this.fontSize + 2 * this.yPadding,
        n = s + this.caretHeight + i;
      this.x + e / 2 > this.chart.width ? this.xAlign = "left" : this.x - e / 2 < 0 && (this.xAlign = "right"), this.y - n < 0 && (this.yAlign = "below");
      var o = this.x - e / 2,
        a = this.y - n;
      if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
      else {
        switch (this.yAlign) {
          case "above":
            t.beginPath(), t.moveTo(this.x, this.y - i), t.lineTo(this.x + this.caretHeight, this.y - (i + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (i + this.caretHeight)), t.closePath(), t.fill();
            break;
          case "below":
            a = this.y + i + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + i), t.lineTo(this.x + this.caretHeight, this.y + i + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + i + this.caretHeight), t.closePath(), t.fill()
        }
        switch (this.xAlign) {
          case "left":
            o = this.x - e + (this.cornerRadius + this.caretHeight);
            break;
          case "right":
            o = this.x - (this.cornerRadius + this.caretHeight)
        }
        B(t, o, a, e, s, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, o + e / 2, a + s / 2)
      }
    }
  }), e.MultiTooltip = e.Element.extend({
    initialize: function() {
      this.font = W(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = W(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
      var t = this.ctx.measureText(this.title).width,
        i = z(this.ctx, this.font, this.labels) + this.fontSize + 3,
        e = g([i, t]);
      this.width = e + 2 * this.xPadding;
      var s = this.height / 2;
      this.y - s < 0 ? this.y = s : this.y + s > this.chart.height && (this.y = this.chart.height - s), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
    },
    getLineHeight: function(t) {
      var i = this.y - this.height / 2 + this.yPadding,
        e = t - 1;
      return 0 === t ? i + this.titleFontSize / 2 : i + (1.5 * this.fontSize * e + this.fontSize / 2) + 1.5 * this.titleFontSize
    },
    draw: function() {
      if (this.custom) this.custom(this);
      else {
        B(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
        var t = this.ctx;
        t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, s.each(this.labels, function(i, e) {
          t.fillStyle = this.textColor, t.fillText(i, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(e + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[e].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(e + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
        }, this)
      }
    }
  }), e.Scale = e.Element.extend({
    initialize: function() {
      this.fit()
    },
    buildYLabels: function() {
      this.yLabels = [];
      for (var t = v(this.stepValue), i = 0; i <= this.steps; i++) this.yLabels.push(C(this.templateString, {
        value: (this.min + i * this.stepValue).toFixed(t)
      }));
      this.yLabelWidth = this.display && this.showLabels ? z(this.ctx, this.font, this.yLabels) : 0
    },
    addXLabel: function(t) {
      this.xLabels.push(t), this.valuesCount++, this.fit()
    },
    removeXLabel: function() {
      this.xLabels.shift(), this.valuesCount--, this.fit()
    },
    fit: function() {
      this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
      var t, i = this.endPoint - this.startPoint;
      for (this.calculateYRange(i), this.buildYLabels(), this.calculateXLabelRotation(); i > this.endPoint - this.startPoint;) i = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(i), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
    },
    calculateXLabelRotation: function() {
      this.ctx.font = this.font;
      var t, i, e = this.ctx.measureText(this.xLabels[0]).width,
        s = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
      if (this.xScalePaddingRight = s / 2 + 3, this.xScalePaddingLeft = e / 2 > this.yLabelWidth + 10 ? e / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
        var n, o = z(this.ctx, this.font, this.xLabels);
        this.xLabelWidth = o;
        for (var a = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > a && 0 === this.xLabelRotation || this.xLabelWidth > a && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) n = Math.cos(S(this.xLabelRotation)), t = n * e, i = n * s, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = n * o;
        this.xLabelRotation > 0 && (this.endPoint -= Math.sin(S(this.xLabelRotation)) * o + 3)
      } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
    },
    calculateYRange: c,
    drawingArea: function() {
      return this.startPoint - this.endPoint
    },
    calculateY: function(t) {
      var i = this.drawingArea() / (this.min - this.max);
      return this.endPoint - i * (t - this.min)
    },
    calculateX: function(t) {
      var i = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
        e = i / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
        s = e * t + this.xScalePaddingLeft;
      return this.offsetGridLines && (s += e / 2), Math.round(s)
    },
    update: function(t) {
      s.extend(this, t), this.fit()
    },
    draw: function() {
      var t = this.ctx,
        i = (this.endPoint - this.startPoint) / this.steps,
        e = Math.round(this.xScalePaddingLeft);
      this.display && (t.fillStyle = this.textColor, t.font = this.font, n(this.yLabels, function(n, o) {
        var a = this.endPoint - i * o,
          h = Math.round(a),
          l = this.showHorizontalLines;
        t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(n, e - 10, a), 0 !== o || l || (l = !0), l && t.beginPath(), o > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), h += s.aliasPixel(t.lineWidth), l && (t.moveTo(e, h), t.lineTo(this.width, h), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(e - 5, h), t.lineTo(e, h), t.stroke(), t.closePath()
      }, this), n(this.xLabels, function(i, e) {
        var s = this.calculateX(e) + x(this.lineWidth),
          n = this.calculateX(e - (this.offsetGridLines ? .5 : 0)) + x(this.lineWidth),
          o = this.xLabelRotation > 0,
          a = this.showVerticalLines;
        0 !== e || a || (a = !0), a && t.beginPath(), e > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a && (t.moveTo(n, this.endPoint), t.lineTo(n, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(n, this.endPoint), t.lineTo(n, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(s, o ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * S(this.xLabelRotation)), t.font = this.font, t.textAlign = o ? "right" : "center", t.textBaseline = o ? "middle" : "top", t.fillText(i, 0, 0), t.restore()
      }, this))
    }
  }), e.RadialScale = e.Element.extend({
    initialize: function() {
      this.size = m([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
    },
    calculateCenterOffset: function(t) {
      var i = this.drawingArea / (this.max - this.min);
      return (t - this.min) * i
    },
    update: function() {
      this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
    },
    buildYLabels: function() {
      this.yLabels = [];
      for (var t = v(this.stepValue), i = 0; i <= this.steps; i++) this.yLabels.push(C(this.templateString, {
        value: (this.min + i * this.stepValue).toFixed(t)
      }))
    },
    getCircumference: function() {
      return 2 * Math.PI / this.valuesCount
    },
    setScaleSize: function() {
      var t, i, e, s, n, o, a, h, l, r, c, u, d = m([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
        p = this.width,
        g = 0;
      for (this.ctx.font = W(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), i = 0; i < this.valuesCount; i++) t = this.getPointPosition(i, d), e = this.ctx.measureText(C(this.templateString, {
        value: this.labels[i]
      })).width + 5, 0 === i || i === this.valuesCount / 2 ? (s = e / 2, t.x + s > p && (p = t.x + s, n = i), t.x - s < g && (g = t.x - s, a = i)) : i < this.valuesCount / 2 ? t.x + e > p && (p = t.x + e, n = i) : i > this.valuesCount / 2 && t.x - e < g && (g = t.x - e, a = i);
      l = g, r = Math.ceil(p - this.width), o = this.getIndexAngle(n), h = this.getIndexAngle(a), c = r / Math.sin(o + Math.PI / 2), u = l / Math.sin(h + Math.PI / 2), c = f(c) ? c : 0, u = f(u) ? u : 0, this.drawingArea = d - (u + c) / 2, this.setCenterPoint(u, c)
    },
    setCenterPoint: function(t, i) {
      var e = this.width - i - this.drawingArea,
        s = t + this.drawingArea;
      this.xCenter = (s + e) / 2, this.yCenter = this.height / 2
    },
    getIndexAngle: function(t) {
      var i = 2 * Math.PI / this.valuesCount;
      return t * i - Math.PI / 2
    },
    getPointPosition: function(t, i) {
      var e = this.getIndexAngle(t);
      return {
        x: Math.cos(e) * i + this.xCenter,
        y: Math.sin(e) * i + this.yCenter
      }
    },
    draw: function() {
      if (this.display) {
        var t = this.ctx;
        if (n(this.yLabels, function(i, e) {
            if (e > 0) {
              var s, n = e * (this.drawingArea / this.steps),
                o = this.yCenter - n;
              if (this.lineWidth > 0)
                if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI), t.closePath(), t.stroke();
                else {
                  t.beginPath();
                  for (var a = 0; a < this.valuesCount; a++) s = this.getPointPosition(a, this.calculateCenterOffset(this.min + e * this.stepValue)), 0 === a ? t.moveTo(s.x, s.y) : t.lineTo(s.x, s.y);
                  t.closePath(), t.stroke()
                }
              if (this.showLabels) {
                if (t.font = W(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                  var h = t.measureText(i).width;
                  t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - h / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                }
                t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(i, this.xCenter, o)
              }
            }
          }, this), !this.lineArc) {
          t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
          for (var i = this.valuesCount - 1; i >= 0; i--) {
            if (this.angleLineWidth > 0) {
              var e = this.getPointPosition(i, this.calculateCenterOffset(this.max));
              t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(e.x, e.y), t.stroke(), t.closePath()
            }
            var s = this.getPointPosition(i, this.calculateCenterOffset(this.max) + 5);
            t.font = W(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
            var o = this.labels.length,
              a = this.labels.length / 2,
              h = a / 2,
              l = h > i || i > o - h,
              r = i === h || i === o - h;
            t.textAlign = 0 === i ? "center" : i === a ? "center" : a > i ? "left" : "right", t.textBaseline = r ? "middle" : l ? "bottom" : "top", t.fillText(this.labels[i], s.x, s.y)
          }
        }
      }
    }
  }), s.addEvent(window, "resize", function() {
    var t;
    return function() {
      clearTimeout(t), t = setTimeout(function() {
        n(e.instances, function(t) {
          t.options.responsive && t.resize(t.render, !0)
        })
      }, 50)
    }
  }()), p ? define(function() {
    return e
  }) : "object" == typeof module && module.exports && (module.exports = e), t.Chart = e, e.noConflict = function() {
    return t.Chart = i, e
  }
}).call(this),
  function() {
    "use strict";
    var t = this,
      i = t.Chart,
      e = i.helpers,
      s = {
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        barShowStroke: !0,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
      };
    i.Type.extend({
      name: "Bar",
      defaults: s,
      initialize: function(t) {
        var s = this.options;
        this.ScaleClass = i.Scale.extend({
          offsetGridLines: !0,
          calculateBarX: function(t, i, e) {
            var n = this.calculateBaseWidth(),
              o = this.calculateX(e) - n / 2,
              a = this.calculateBarWidth(t);
            return o + a * i + i * s.barDatasetSpacing + a / 2
          },
          calculateBaseWidth: function() {
            return this.calculateX(1) - this.calculateX(0) - 2 * s.barValueSpacing
          },
          calculateBarWidth: function(t) {
            var i = this.calculateBaseWidth() - (t - 1) * s.barDatasetSpacing;
            return i / t
          }
        }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
          var i = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
          this.eachBars(function(t) {
            t.restore(["fillColor", "strokeColor"])
          }), e.each(i, function(t) {
            t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
          }), this.showTooltip(i)
        }), this.BarClass = i.Rectangle.extend({
          strokeWidth: this.options.barStrokeWidth,
          showStroke: this.options.barShowStroke,
          ctx: this.chart.ctx
        }), e.each(t.datasets, function(i) {
          var s = {
            label: i.label || null,
            fillColor: i.fillColor,
            strokeColor: i.strokeColor,
            bars: []
          };
          this.datasets.push(s), e.each(i.data, function(e, n) {
            s.bars.push(new this.BarClass({
              value: e,
              label: t.labels[n],
              datasetLabel: i.label,
              strokeColor: i.strokeColor,
              fillColor: i.fillColor,
              highlightFill: i.highlightFill || i.fillColor,
              highlightStroke: i.highlightStroke || i.strokeColor
            }))
          }, this)
        }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, i, s) {
          e.extend(t, {
            width: this.scale.calculateBarWidth(this.datasets.length),
            x: this.scale.calculateBarX(this.datasets.length, s, i),
            y: this.scale.endPoint
          }), t.save()
        }, this), this.render()
      },
      update: function() {
        this.scale.update(), e.each(this.activeElements, function(t) {
          t.restore(["fillColor", "strokeColor"])
        }), this.eachBars(function(t) {
          t.save()
        }), this.render()
      },
      eachBars: function(t) {
        e.each(this.datasets, function(i, s) {
          e.each(i.bars, t, this, s)
        }, this)
      },
      getBarsAtEvent: function(t) {
        for (var i, s = [], n = e.getRelativePosition(t), o = function(t) {
            s.push(t.bars[i])
          }, a = 0; a < this.datasets.length; a++)
          for (i = 0; i < this.datasets[a].bars.length; i++)
            if (this.datasets[a].bars[i].inRange(n.x, n.y)) return e.each(this.datasets, o), s;
        return s
      },
      buildScale: function(t) {
        var i = this,
          s = function() {
            var t = [];
            return i.eachBars(function(i) {
              t.push(i.value)
            }), t
          },
          n = {
            templateString: this.options.scaleLabel,
            height: this.chart.height,
            width: this.chart.width,
            ctx: this.chart.ctx,
            textColor: this.options.scaleFontColor,
            fontSize: this.options.scaleFontSize,
            fontStyle: this.options.scaleFontStyle,
            fontFamily: this.options.scaleFontFamily,
            valuesCount: t.length,
            beginAtZero: this.options.scaleBeginAtZero,
            integersOnly: this.options.scaleIntegersOnly,
            calculateYRange: function(t) {
              var i = e.calculateScaleRange(s(), t, this.fontSize, this.beginAtZero, this.integersOnly);
              e.extend(this, i)
            },
            xLabels: t,
            font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
            lineWidth: this.options.scaleLineWidth,
            lineColor: this.options.scaleLineColor,
            showHorizontalLines: this.options.scaleShowHorizontalLines,
            showVerticalLines: this.options.scaleShowVerticalLines,
            gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
            gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
            padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
            showLabels: this.options.scaleShowLabels,
            display: this.options.showScale
          };
        this.options.scaleOverride && e.extend(n, {
          calculateYRange: e.noop,
          steps: this.options.scaleSteps,
          stepValue: this.options.scaleStepWidth,
          min: this.options.scaleStartValue,
          max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
        }), this.scale = new this.ScaleClass(n)
      },
      addData: function(t, i) {
        e.each(t, function(t, e) {
          this.datasets[e].bars.push(new this.BarClass({
            value: t,
            label: i,
            x: this.scale.calculateBarX(this.datasets.length, e, this.scale.valuesCount + 1),
            y: this.scale.endPoint,
            width: this.scale.calculateBarWidth(this.datasets.length),
            base: this.scale.endPoint,
            strokeColor: this.datasets[e].strokeColor,
            fillColor: this.datasets[e].fillColor
          }))
        }, this), this.scale.addXLabel(i), this.update()
      },
      removeData: function() {
        this.scale.removeXLabel(), e.each(this.datasets, function(t) {
          t.bars.shift()
        }, this), this.update()
      },
      reflow: function() {
        e.extend(this.BarClass.prototype, {
          y: this.scale.endPoint,
          base: this.scale.endPoint
        });
        var t = e.extend({
          height: this.chart.height,
          width: this.chart.width
        });
        this.scale.update(t)
      },
      draw: function(t) {
        var i = t || 1;
        this.clear();
        this.chart.ctx;
        this.scale.draw(i), e.each(this.datasets, function(t, s) {
          e.each(t.bars, function(t, e) {
            t.hasValue() && (t.base = this.scale.endPoint, t.transition({
              x: this.scale.calculateBarX(this.datasets.length, s, e),
              y: this.scale.calculateY(t.value),
              width: this.scale.calculateBarWidth(this.datasets.length)
            }, i).draw())
          }, this)
        }, this)
      }
    })
  }.call(this),
  function() {
    "use strict";
    var t = this,
      i = t.Chart,
      e = i.helpers,
      s = {
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
      };
    i.Type.extend({
      name: "Doughnut",
      defaults: s,
      initialize: function(t) {
        this.segments = [], this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = i.Arc.extend({
          ctx: this.chart.ctx,
          x: this.chart.width / 2,
          y: this.chart.height / 2
        }), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
          var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
          e.each(this.segments, function(t) {
            t.restore(["fillColor"])
          }), e.each(i, function(t) {
            t.fillColor = t.highlightColor
          }), this.showTooltip(i)
        }), this.calculateTotal(t), e.each(t, function(t, i) {
          this.addData(t, i, !0)
        }, this), this.render()
      },
      getSegmentsAtEvent: function(t) {
        var i = [],
          s = e.getRelativePosition(t);
        return e.each(this.segments, function(t) {
          t.inRange(s.x, s.y) && i.push(t)
        }, this), i
      },
      addData: function(t, i, e) {
        var s = i || this.segments.length;
        this.segments.splice(s, 0, new this.SegmentArc({
          value: t.value,
          outerRadius: this.options.animateScale ? 0 : this.outerRadius,
          innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
          fillColor: t.color,
          highlightColor: t.highlight || t.color,
          showStroke: this.options.segmentShowStroke,
          strokeWidth: this.options.segmentStrokeWidth,
          strokeColor: this.options.segmentStrokeColor,
          startAngle: 1.5 * Math.PI,
          circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
          label: t.label
        })), e || (this.reflow(), this.update())
      },
      calculateCircumference: function(t) {
        return 2 * Math.PI * (Math.abs(t) / this.total)
      },
      calculateTotal: function(t) {
        this.total = 0, e.each(t, function(t) {
          this.total += Math.abs(t.value)
        }, this)
      },
      update: function() {
        this.calculateTotal(this.segments), e.each(this.activeElements, function(t) {
          t.restore(["fillColor"])
        }), e.each(this.segments, function(t) {
          t.save()
        }), this.render()
      },
      removeData: function(t) {
        var i = e.isNumber(t) ? t : this.segments.length - 1;
        this.segments.splice(i, 1), this.reflow(), this.update()
      },
      reflow: function() {
        e.extend(this.SegmentArc.prototype, {
          x: this.chart.width / 2,
          y: this.chart.height / 2
        }), this.outerRadius = (e.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, e.each(this.segments, function(t) {
          t.update({
            outerRadius: this.outerRadius,
            innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
          })
        }, this)
      },
      draw: function(t) {
        var i = t ? t : 1;
        this.clear(), e.each(this.segments, function(t, e) {
          t.transition({
            circumference: this.calculateCircumference(t.value),
            outerRadius: this.outerRadius,
            innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
          }, i), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle)
        }, this)
      }
    }), i.types.Doughnut.extend({
      name: "Pie",
      defaults: e.merge(s, {
        percentageInnerCutout: 0
      })
    })
  }.call(this),
  function() {
    "use strict";
    var t = this,
      i = t.Chart,
      e = i.helpers,
      s = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        bezierCurve: !0,
        bezierCurveTension: .4,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 2,
        datasetFill: !0,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
      };
    i.Type.extend({
      name: "Line",
      defaults: s,
      initialize: function(t) {
        this.PointClass = i.Point.extend({
          strokeWidth: this.options.pointDotStrokeWidth,
          radius: this.options.pointDotRadius,
          display: this.options.pointDot,
          hitDetectionRadius: this.options.pointHitDetectionRadius,
          ctx: this.chart.ctx,
          inRange: function(t) {
            return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
          }
        }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
          var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
          this.eachPoints(function(t) {
            t.restore(["fillColor", "strokeColor"])
          }), e.each(i, function(t) {
            t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
          }), this.showTooltip(i)
        }), e.each(t.datasets, function(i) {
          var s = {
            label: i.label || null,
            fillColor: i.fillColor,
            strokeColor: i.strokeColor,
            pointColor: i.pointColor,
            pointStrokeColor: i.pointStrokeColor,
            points: []
          };
          this.datasets.push(s), e.each(i.data, function(e, n) {
            s.points.push(new this.PointClass({
              value: e,
              label: t.labels[n],
              datasetLabel: i.label,
              strokeColor: i.pointStrokeColor,
              fillColor: i.pointColor,
              highlightFill: i.pointHighlightFill || i.pointColor,
              highlightStroke: i.pointHighlightStroke || i.pointStrokeColor
            }))
          }, this), this.buildScale(t.labels), this.eachPoints(function(t, i) {
            e.extend(t, {
              x: this.scale.calculateX(i),
              y: this.scale.endPoint
            }), t.save()
          }, this)
        }, this), this.render()
      },
      update: function() {
        this.scale.update(), e.each(this.activeElements, function(t) {
          t.restore(["fillColor", "strokeColor"])
        }), this.eachPoints(function(t) {
          t.save()
        }), this.render()
      },
      eachPoints: function(t) {
        e.each(this.datasets, function(i) {
          e.each(i.points, t, this)
        }, this)
      },
      getPointsAtEvent: function(t) {
        var i = [],
          s = e.getRelativePosition(t);
        return e.each(this.datasets, function(t) {
          e.each(t.points, function(t) {
            t.inRange(s.x, s.y) && i.push(t)
          })
        }, this), i
      },
      buildScale: function(t) {
        var s = this,
          n = function() {
            var t = [];
            return s.eachPoints(function(i) {
              t.push(i.value)
            }), t
          },
          o = {
            templateString: this.options.scaleLabel,
            height: this.chart.height,
            width: this.chart.width,
            ctx: this.chart.ctx,
            textColor: this.options.scaleFontColor,
            fontSize: this.options.scaleFontSize,
            fontStyle: this.options.scaleFontStyle,
            fontFamily: this.options.scaleFontFamily,
            valuesCount: t.length,
            beginAtZero: this.options.scaleBeginAtZero,
            integersOnly: this.options.scaleIntegersOnly,
            calculateYRange: function(t) {
              var i = e.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
              e.extend(this, i)
            },
            xLabels: t,
            font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
            lineWidth: this.options.scaleLineWidth,
            lineColor: this.options.scaleLineColor,
            showHorizontalLines: this.options.scaleShowHorizontalLines,
            showVerticalLines: this.options.scaleShowVerticalLines,
            gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
            gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
            padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
            showLabels: this.options.scaleShowLabels,
            display: this.options.showScale
          };
        this.options.scaleOverride && e.extend(o, {
          calculateYRange: e.noop,
          steps: this.options.scaleSteps,
          stepValue: this.options.scaleStepWidth,
          min: this.options.scaleStartValue,
          max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
        }), this.scale = new i.Scale(o)
      },
      addData: function(t, i) {
        e.each(t, function(t, e) {
          this.datasets[e].points.push(new this.PointClass({
            value: t,
            label: i,
            x: this.scale.calculateX(this.scale.valuesCount + 1),
            y: this.scale.endPoint,
            strokeColor: this.datasets[e].pointStrokeColor,
            fillColor: this.datasets[e].pointColor
          }))
        }, this), this.scale.addXLabel(i), this.update()
      },
      removeData: function() {
        this.scale.removeXLabel(), e.each(this.datasets, function(t) {
          t.points.shift()
        }, this), this.update()
      },
      reflow: function() {
        var t = e.extend({
          height: this.chart.height,
          width: this.chart.width
        });
        this.scale.update(t)
      },
      draw: function(t) {
        var i = t || 1;
        this.clear();
        var s = this.chart.ctx,
          n = function(t) {
            return null !== t.value
          },
          o = function(t, i, s) {
            return e.findNextWhere(i, n, s) || t
          },
          a = function(t, i, s) {
            return e.findPreviousWhere(i, n, s) || t
          };
        this.scale.draw(i), e.each(this.datasets, function(t) {
          var h = e.where(t.points, n);
          e.each(t.points, function(t, e) {
            t.hasValue() && t.transition({
              y: this.scale.calculateY(t.value),
              x: this.scale.calculateX(e)
            }, i)
          }, this), this.options.bezierCurve && e.each(h, function(t, i) {
            var s = i > 0 && i < h.length - 1 ? this.options.bezierCurveTension : 0;
            t.controlPoints = e.splineCurve(a(t, h, i), t, o(t, h, i), s), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
          }, this), s.lineWidth = this.options.datasetStrokeWidth, s.strokeStyle = t.strokeColor, s.beginPath(), e.each(h, function(t, i) {
            if (0 === i) s.moveTo(t.x, t.y);
            else if (this.options.bezierCurve) {
              var e = a(t, h, i);
              s.bezierCurveTo(e.controlPoints.outer.x, e.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
            } else s.lineTo(t.x, t.y)
          }, this), s.stroke(), this.options.datasetFill && h.length > 0 && (s.lineTo(h[h.length - 1].x, this.scale.endPoint), s.lineTo(h[0].x, this.scale.endPoint), s.fillStyle = t.fillColor, s.closePath(), s.fill()), e.each(h, function(t) {
            t.draw()
          })
        }, this)
      }
    })
  }.call(this),
  function() {
    "use strict";
    var t = this,
      i = t.Chart,
      e = i.helpers,
      s = {
        scaleShowLabelBackdrop: !0,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: !0,
        scaleBackdropPaddingY: 2,
        scaleBackdropPaddingX: 2,
        scaleShowLine: !0,
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
      };
    i.Type.extend({
      name: "PolarArea",
      defaults: s,
      initialize: function(t) {
        this.segments = [], this.SegmentArc = i.Arc.extend({
          showStroke: this.options.segmentShowStroke,
          strokeWidth: this.options.segmentStrokeWidth,
          strokeColor: this.options.segmentStrokeColor,
          ctx: this.chart.ctx,
          innerRadius: 0,
          x: this.chart.width / 2,
          y: this.chart.height / 2
        }), this.scale = new i.RadialScale({
          display: this.options.showScale,
          fontStyle: this.options.scaleFontStyle,
          fontSize: this.options.scaleFontSize,
          fontFamily: this.options.scaleFontFamily,
          fontColor: this.options.scaleFontColor,
          showLabels: this.options.scaleShowLabels,
          showLabelBackdrop: this.options.scaleShowLabelBackdrop,
          backdropColor: this.options.scaleBackdropColor,
          backdropPaddingY: this.options.scaleBackdropPaddingY,
          backdropPaddingX: this.options.scaleBackdropPaddingX,
          lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
          lineColor: this.options.scaleLineColor,
          lineArc: !0,
          width: this.chart.width,
          height: this.chart.height,
          xCenter: this.chart.width / 2,
          yCenter: this.chart.height / 2,
          ctx: this.chart.ctx,
          templateString: this.options.scaleLabel,
          valuesCount: t.length
        }), this.updateScaleRange(t), this.scale.update(), e.each(t, function(t, i) {
          this.addData(t, i, !0)
        }, this), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
          var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
          e.each(this.segments, function(t) {
            t.restore(["fillColor"])
          }), e.each(i, function(t) {
            t.fillColor = t.highlightColor
          }), this.showTooltip(i)
        }), this.render()
      },
      getSegmentsAtEvent: function(t) {
        var i = [],
          s = e.getRelativePosition(t);
        return e.each(this.segments, function(t) {
          t.inRange(s.x, s.y) && i.push(t)
        }, this), i
      },
      addData: function(t, i, e) {
        var s = i || this.segments.length;
        this.segments.splice(s, 0, new this.SegmentArc({
          fillColor: t.color,
          highlightColor: t.highlight || t.color,
          label: t.label,
          value: t.value,
          outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
          circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
          startAngle: 1.5 * Math.PI
        })), e || (this.reflow(), this.update())
      },
      removeData: function(t) {
        var i = e.isNumber(t) ? t : this.segments.length - 1;
        this.segments.splice(i, 1), this.reflow(), this.update()
      },
      calculateTotal: function(t) {
        this.total = 0, e.each(t, function(t) {
          this.total += t.value
        }, this), this.scale.valuesCount = this.segments.length
      },
      updateScaleRange: function(t) {
        var i = [];
        e.each(t, function(t) {
          i.push(t.value)
        });
        var s = this.options.scaleOverride ? {
          steps: this.options.scaleSteps,
          stepValue: this.options.scaleStepWidth,
          min: this.options.scaleStartValue,
          max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
        } : e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
        e.extend(this.scale, s, {
          size: e.min([this.chart.width, this.chart.height]),
          xCenter: this.chart.width / 2,
          yCenter: this.chart.height / 2
        })
      },
      update: function() {
        this.calculateTotal(this.segments), e.each(this.segments, function(t) {
          t.save()
        }), this.reflow(), this.render()
      },
      reflow: function() {
        e.extend(this.SegmentArc.prototype, {
          x: this.chart.width / 2,
          y: this.chart.height / 2
        }), this.updateScaleRange(this.segments), this.scale.update(), e.extend(this.scale, {
          xCenter: this.chart.width / 2,
          yCenter: this.chart.height / 2
        }), e.each(this.segments, function(t) {
          t.update({
            outerRadius: this.scale.calculateCenterOffset(t.value)
          })
        }, this)
      },
      draw: function(t) {
        var i = t || 1;
        this.clear(), e.each(this.segments, function(t, e) {
          t.transition({
            circumference: this.scale.getCircumference(),
            outerRadius: this.scale.calculateCenterOffset(t.value)
          }, i), t.endAngle = t.startAngle + t.circumference, 0 === e && (t.startAngle = 1.5 * Math.PI), e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle), t.draw()
        }, this), this.scale.draw()
      }
    })
  }.call(this),
  function() {
    "use strict";
    var t = this,
      i = t.Chart,
      e = i.helpers;
    i.Type.extend({
      name: "Radar",
      defaults: {
        scaleShowLine: !0,
        angleShowLineOut: !0,
        scaleShowLabels: !1,
        scaleBeginAtZero: !0,
        angleLineColor: "rgba(0,0,0,.1)",
        angleLineWidth: 1,
        pointLabelFontFamily: "'Arial'",
        pointLabelFontStyle: "normal",
        pointLabelFontSize: 10,
        pointLabelFontColor: "#666",
        pointDot: !0,
        pointDotRadius: 3,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 2,
        datasetFill: !0,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
      },
      initialize: function(t) {
        this.PointClass = i.Point.extend({
          strokeWidth: this.options.pointDotStrokeWidth,
          radius: this.options.pointDotRadius,
          display: this.options.pointDot,
          hitDetectionRadius: this.options.pointHitDetectionRadius,
          ctx: this.chart.ctx
        }), this.datasets = [], this.buildScale(t), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
          var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
          this.eachPoints(function(t) {
            t.restore(["fillColor", "strokeColor"])
          }), e.each(i, function(t) {
            t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
          }), this.showTooltip(i)
        }), e.each(t.datasets, function(i) {
          var s = {
            label: i.label || null,
            fillColor: i.fillColor,
            strokeColor: i.strokeColor,
            pointColor: i.pointColor,
            pointStrokeColor: i.pointStrokeColor,
            points: []
          };
          this.datasets.push(s), e.each(i.data, function(e, n) {
            var o;
            this.scale.animation || (o = this.scale.getPointPosition(n, this.scale.calculateCenterOffset(e))), s.points.push(new this.PointClass({
              value: e,
              label: t.labels[n],
              datasetLabel: i.label,
              x: this.options.animation ? this.scale.xCenter : o.x,
              y: this.options.animation ? this.scale.yCenter : o.y,
              strokeColor: i.pointStrokeColor,
              fillColor: i.pointColor,
              highlightFill: i.pointHighlightFill || i.pointColor,
              highlightStroke: i.pointHighlightStroke || i.pointStrokeColor
            }))
          }, this)
        }, this), this.render()
      },
      eachPoints: function(t) {
        e.each(this.datasets, function(i) {
          e.each(i.points, t, this)
        }, this)
      },
      getPointsAtEvent: function(t) {
        var i = e.getRelativePosition(t),
          s = e.getAngleFromPoint({
            x: this.scale.xCenter,
            y: this.scale.yCenter
          }, i),
          n = 2 * Math.PI / this.scale.valuesCount,
          o = Math.round((s.angle - 1.5 * Math.PI) / n),
          a = [];
        return (o >= this.scale.valuesCount || 0 > o) && (o = 0), s.distance <= this.scale.drawingArea && e.each(this.datasets, function(t) {
          a.push(t.points[o])
        }), a
      },
      buildScale: function(t) {
        this.scale = new i.RadialScale({
          display: this.options.showScale,
          fontStyle: this.options.scaleFontStyle,
          fontSize: this.options.scaleFontSize,
          fontFamily: this.options.scaleFontFamily,
          fontColor: this.options.scaleFontColor,
          showLabels: this.options.scaleShowLabels,
          showLabelBackdrop: this.options.scaleShowLabelBackdrop,
          backdropColor: this.options.scaleBackdropColor,
          backdropPaddingY: this.options.scaleBackdropPaddingY,
          backdropPaddingX: this.options.scaleBackdropPaddingX,
          lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
          lineColor: this.options.scaleLineColor,
          angleLineColor: this.options.angleLineColor,
          angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
          pointLabelFontColor: this.options.pointLabelFontColor,
          pointLabelFontSize: this.options.pointLabelFontSize,
          pointLabelFontFamily: this.options.pointLabelFontFamily,
          pointLabelFontStyle: this.options.pointLabelFontStyle,
          height: this.chart.height,
          width: this.chart.width,
          xCenter: this.chart.width / 2,
          yCenter: this.chart.height / 2,
          ctx: this.chart.ctx,
          templateString: this.options.scaleLabel,
          labels: t.labels,
          valuesCount: t.datasets[0].data.length
        }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
      },
      updateScaleRange: function(t) {
        var i = function() {
            var i = [];
            return e.each(t, function(t) {
              t.data ? i = i.concat(t.data) : e.each(t.points, function(t) {
                i.push(t.value)
              })
            }), i
          }(),
          s = this.options.scaleOverride ? {
            steps: this.options.scaleSteps,
            stepValue: this.options.scaleStepWidth,
            min: this.options.scaleStartValue,
            max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
          } : e.calculateScaleRange(i, e.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
        e.extend(this.scale, s)
      },
      addData: function(t, i) {
        this.scale.valuesCount++, e.each(t, function(t, e) {
          var s = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
          this.datasets[e].points.push(new this.PointClass({
            value: t,
            label: i,
            x: s.x,
            y: s.y,
            strokeColor: this.datasets[e].pointStrokeColor,
            fillColor: this.datasets[e].pointColor
          }))
        }, this), this.scale.labels.push(i), this.reflow(), this.update()
      },
      removeData: function() {
        this.scale.valuesCount--, this.scale.labels.shift(), e.each(this.datasets, function(t) {
          t.points.shift()
        }, this), this.reflow(), this.update()
      },
      update: function() {
        this.eachPoints(function(t) {
          t.save()
        }), this.reflow(), this.render()
      },
      reflow: function() {
        e.extend(this.scale, {
          width: this.chart.width,
          height: this.chart.height,
          size: e.min([this.chart.width, this.chart.height]),
          xCenter: this.chart.width / 2,
          yCenter: this.chart.height / 2
        }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
      },
      draw: function(t) {
        var i = t || 1,
          s = this.chart.ctx;
        this.clear(), this.scale.draw(), e.each(this.datasets, function(t) {
          e.each(t.points, function(t, e) {
            t.hasValue() && t.transition(this.scale.getPointPosition(e, this.scale.calculateCenterOffset(t.value)), i)
          }, this), s.lineWidth = this.options.datasetStrokeWidth, s.strokeStyle = t.strokeColor, s.beginPath(), e.each(t.points, function(t, i) {
            0 === i ? s.moveTo(t.x, t.y) : s.lineTo(t.x, t.y)
          }, this), s.closePath(), s.stroke(), s.fillStyle = t.fillColor, s.fill(), e.each(t.points, function(t) {
            t.hasValue() && t.draw()
          })
        }, this)
      }
    })
  }.call(this);

/*!
 * other domains, open new tab
 */
$(document.links).filter(function() {
  return this.hostname != window.location.hostname;
}).attr('target', '_blank');

/*!
 * slideout.min.js
 */
! function(e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var t;
    "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.Slideout = e()
  }
}(function() {
  var e, t, n;
  return function i(e, t, n) {
    function s(r, a) {
      if (!t[r]) {
        if (!e[r]) {
          var f = typeof require == "function" && require;
          if (!a && f) return f(r, !0);
          if (o) return o(r, !0);
          var u = new Error("Cannot find module '" + r + "'");
          throw u.code = "MODULE_NOT_FOUND", u
        }
        var l = t[r] = {
          exports: {}
        };
        e[r][0].call(l.exports, function(t) {
          var n = e[r][1][t];
          return s(n ? n : t)
        }, l, l.exports, i, e, t, n)
      }
      return t[r].exports
    }
    var o = typeof require == "function" && require;
    for (var r = 0; r < n.length; r++) s(n[r]);
    return s
  }({
    1: [function(e, t, n) {
      "use strict";
      var i = e("decouple");
      var s;
      var o = false;
      var r = window.document;
      var a = r.documentElement;
      var f = window.navigator.msPointerEnabled;
      var u = {
        start: f ? "MSPointerDown" : "touchstart",
        move: f ? "MSPointerMove" : "touchmove",
        end: f ? "MSPointerUp" : "touchend"
      };
      var l = function d() {
        var e = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;
        var t = r.getElementsByTagName("script")[0].style;
        for (var n in t) {
          if (e.test(n)) {
            return "-" + n.match(e)[0].toLowerCase() + "-"
          }
        }
        if ("WebkitOpacity" in t) {
          return "-webkit-"
        }
        if ("KhtmlOpacity" in t) {
          return "-khtml-"
        }
        return ""
      }();

      function p(e) {
        e = e || {};
        this._startOffsetX = 0;
        this._currentOffsetX = 0;
        this._opening = false;
        this._moved = false;
        this._opened = false;
        this._preventOpen = false;
        this.panel = e.panel;
        this.menu = e.menu;
        this.panel.className += " slideout-panel";
        this.menu.className += " slideout-menu";
        this._fx = e.fx || "ease";
        this._duration = parseInt(e.duration, 10) || 300;
        this._tolerance = parseInt(e.tolerance, 10) || 70;
        this._padding = parseInt(e.padding, 10) || 256;
        this._initTouchEvents()
      }
      p.prototype.open = function() {
        var e = this;
        if (a.className.search("slideout-open") === -1) {
          a.className += " slideout-open"
        }
        this._setTransition();
        this._translateXTo(this._padding);
        this._opened = true;
        setTimeout(function() {
          e.panel.style.transition = e.panel.style["-webkit-transition"] = ""
        }, this._duration + 50);
        return this
      };
      p.prototype.close = function() {
        var e = this;
        if (!this.isOpen() && !this._opening) {
          return this
        }
        this._setTransition();
        this._translateXTo(0);
        this._opened = false;
        setTimeout(function() {
          a.className = a.className.replace(/ slideout-open/, "");
          e.panel.style.transition = e.panel.style["-webkit-transition"] = ""
        }, this._duration + 50);
        return this
      };
      p.prototype.toggle = function() {
        return this.isOpen() ? this.close() : this.open()
      };
      p.prototype.isOpen = function() {
        return this._opened
      };
      p.prototype._translateXTo = function(e) {
        this._currentOffsetX = e;
        this.panel.style[l + "transform"] = this.panel.style.transform = "translate3d(" + e + "px, 0, 0)"
      };
      p.prototype._setTransition = function() {
        this.panel.style[l + "transition"] = this.panel.style.transition = l + "transform " + this._duration + "ms " + this._fx
      };
      p.prototype._initTouchEvents = function() {
        var e = this;
        i(r, "scroll", function() {
          if (!e._moved) {
            clearTimeout(s);
            o = true;
            s = setTimeout(function() {
              o = false
            }, 250)
          }
        });
        r.addEventListener(u.move, function(t) {
          if (e._moved) {
            t.preventDefault()
          }
        });
        this.panel.addEventListener(u.start, function(t) {
          e._moved = false;
          e._opening = false;
          e._startOffsetX = t.touches[0].pageX;
          e._preventOpen = !e.isOpen() && e.menu.clientWidth !== 0
        });
        this.panel.addEventListener("touchcancel", function() {
          e._moved = false;
          e._opening = false
        });
        this.panel.addEventListener(u.end, function() {
          if (e._moved) {
            e._opening && Math.abs(e._currentOffsetX) > e._tolerance ? e.open() : e.close()
          }
          e._moved = false
        });
        this.panel.addEventListener(u.move, function(t) {
          if (o || e._preventOpen) {
            return
          }
          var n = t.touches[0].clientX - e._startOffsetX;
          var i = e._currentOffsetX = n;
          if (Math.abs(i) > e._padding) {
            return
          }
          if (Math.abs(n) > 20) {
            e._opening = true;
            if (e._opened && n > 0 || !e._opened && n < 0) {
              return
            }
            if (!e._moved && a.className.search("slideout-open") === -1) {
              a.className += " slideout-open"
            }
            if (n <= 0) {
              i = n + e._padding;
              e._opening = false
            }
            e.panel.style[l + "transform"] = e.panel.style.transform = "translate3d(" + i + "px, 0, 0)";
            e._moved = true
          }
        })
      };
      t.exports = p
    }, {
      decouple: 2
    }],
    2: [function(e, t, n) {
      "use strict";
      var i = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
          window.setTimeout(e, 1e3 / 60)
        }
      }();

      function s(e, t, n) {
        var s, o = false;

        function r(e) {
          s = e;
          a()
        }

        function a() {
          if (!o) {
            i(f);
            o = true
          }
        }

        function f() {
          n.call(e, s);
          o = false
        }
        e.addEventListener(t, r, false)
      }
      t.exports = s
    }, {}]
  }, {}, [1])(1)
});

var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('slideoutmenu'),
  'padding': 256,
  'tolerance': 70
});

document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
  slideout.toggle();
});
