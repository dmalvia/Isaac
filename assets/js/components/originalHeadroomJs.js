var extra = ! function(n, t) {
    "use strict";

    function u(n) {
        this.callback = n;
        this.ticking = !1
    }

    function f(n) {
        var t, r, i, u;
        if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
        for (i = n || {}, r = 1; r < arguments.length; r++) {
            u = arguments[r] || {};
            for (t in u) i[t] = "object" == typeof i[t] ? f(i[t], u[t]) : i[t] || u[t]
        }
        return i
    }

    function e(n) {
        return n === Object(n) ? n : {
            down: n,
            up: n
        }
    }

    function i(n, t) {
        t = f(t, i.options);
        this.lastKnownScrollY = 0;
        this.elem = n;
        this.debouncer = new u(this.update.bind(this));
        this.tolerance = e(t.tolerance);
        this.classes = t.classes;
        this.offset = t.offset;
        this.initialised = !1;
        this.onPin = t.onPin;
        this.onUnpin = t.onUnpin;
        this.onTop = t.onTop;
        this.onNotTop = t.onNotTop
    }
    var r = {
        bind: !! function() {}.bind,
        classList: "classList" in t.documentElement,
        rAF: !!(n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame)
    };
    n.requestAnimationFrame = n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame;
    u.prototype = {
        constructor: u,
        update: function() {
            this.callback && this.callback();
            this.ticking = !1
        },
        requestTick: function() {
            this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
        },
        handleEvent: function() {
            this.requestTick()
        }
    };
    i.prototype = {
        constructor: i,
        init: function() {
            if (i.cutsTheMustard) return this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this
        },
        destroy: function() {
            var t = this.classes;
            this.initialised = !1;
            n.removeEventListener("scroll", this.debouncer, !1);
            this.elem.classList.remove(t.unpinned, t.pinned, t.top, t.initial)
        },
        attachEvent: function() {
            this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, n.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
        },
        unpin: function() {
            $("#languageField_valid").hide();
            var n = this.elem.classList,
                t = this.classes;
            (n.contains(t.pinned) || !n.contains(t.unpinned)) && (n.add(t.unpinned), n.remove(t.pinned), this.onUnpin && this.onUnpin.call(this));
            $("#menuAdditional .open").removeClass("open");
            $("#dropdownTrigger_lg.open").trigger("click")
        },
        pin: function() {
            var n = this.elem.classList,
                t = this.classes;
            n.contains(t.unpinned) && (n.remove(t.unpinned), n.add(t.pinned), this.onPin && this.onPin.call(this))
        },
        top: function() {
            var n = this.elem.classList,
                t = this.classes;
            n.contains(t.top) || (n.add(t.top), n.remove(t.notTop), this.onTop && this.onTop.call(this))
        },
        notTop: function() {
            var n = this.elem.classList,
                t = this.classes;
            n.contains(t.notTop) || (n.add(t.notTop), n.remove(t.top), this.onNotTop && this.onNotTop.call(this))
        },
        getScrollY: function() {
            return void 0 !== n.pageYOffset ? n.pageYOffset : (t.documentElement || t.body.parentNode || t.body).scrollTop
        },
        getViewportHeight: function() {
            return n.innerHeight || t.documentElement.clientHeight || t.body.clientHeight
        },
        getDocumentHeight: function() {
            var n = t.body,
                i = t.documentElement;
            return Math.max(n.scrollHeight, i.scrollHeight, n.offsetHeight, i.offsetHeight, n.clientHeight, i.clientHeight)
        },
        isOutOfBounds: function(n) {
            var t = 0 > n,
                i = n + this.getViewportHeight() > this.getDocumentHeight();
            return t || i
        },
        toleranceExceeded: function(n, t) {
            return Math.abs(n - this.lastKnownScrollY) >= this.tolerance[t]
        },
        shouldUnpin: function(n, t) {
            var i = n > this.lastKnownScrollY,
                r = n >= this.offset;
            return i && r && t
        },
        shouldPin: function(n, t) {
            var i = n < this.lastKnownScrollY,
                r = n <= this.offset;
            return i && t || r
        },
        update: function() {
            var n = this.getScrollY(),
                i = n > this.lastKnownScrollY ? "down" : "up",
                t = this.toleranceExceeded(n, i);
            this.isOutOfBounds(n) || (n <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(n, t) ? this.unpin() : this.shouldPin(n, t) && this.pin(), this.lastKnownScrollY = n)
        }
    };
    i.options = {
        tolerance: {
            up: 0,
            down: 0
        },
        offset: 0,
        classes: {
            pinned: "headroom--pinned",
            unpinned: "headroom--unpinned",
            top: "headroom--top",
            notTop: "headroom--not-top",
            initial: "headroom"
        }
    };
    i.cutsTheMustard = "undefined" != typeof r && r.rAF && r.bind && r.classList;
    n.Headroom = i
}(window, document);