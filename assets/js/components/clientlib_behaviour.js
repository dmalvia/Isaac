/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement) cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function() {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function(b, e) {
            c || bD.test(a) ? d(a, e) : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
        });
        else if (!c && f.type(b) === "object")
            for (var e in b) b_(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bS,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? 1 : 0,
            g = 4;
        if (d > 0) {
            if (c !== "border")
                for (; e < g; e += 2) c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) d = a.style[b];
        if (bt.test(d)) return d;
        d = parseFloat(d) || 0;
        if (c)
            for (; e < g; e += 2) d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i)
                    for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d])
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function(a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function(a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {},
            c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function() {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function(a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function(a, b) {
                    return (b + "").toUpperCase()
                },
                y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function(a, d, f) {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) return f.ready(a);
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return F.call(this, 0)
                },
                get: function(a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function(a, b) {
                    return e.each(this, a, b)
                },
                ready: function(a) {
                    e.bindReady(), A.add(a);
                    return this
                },
                eq: function(a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(e.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function() {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++)
                    if ((a = arguments[j]) != null)
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) continue;
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                    return i
            }, e.extend({
                noConflict: function(b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) return setTimeout(e.ready, 1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) return;
                        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!A) {
                        A = e.Callbacks("once memory");
                        if (c.readyState === "complete") return setTimeout(e.ready, 1);
                        if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1);
                        else if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (d) {}
                            c.documentElement.doScroll && b && J()
                        }
                    }
                },
                isFunction: function(a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function(a) {
                    return e.type(a) === "array"
                },
                isWindow: function(a) {
                    return a != null && a == a.window
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw new Error(a)
                },
                parseJSON: function(b) {
                    if (typeof b != "string" || !b) return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function(c) {
                    if (typeof c != "string" || !c) return null;
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && j.test(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function(a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d) {
                        if (i) {
                            for (f in a)
                                if (c.apply(a[f], d) === !1) break
                        } else
                            for (; g < h;)
                                if (c.apply(a[g++], d) === !1) break
                    } else if (i) {
                        for (f in a)
                            if (c.call(a[f], f, a[f]) === !1) break
                    } else
                        for (; g < h;)
                            if (c.call(a[g], g, a[g++]) === !1) break; return a
                },
                trim: G ? function(a) {
                    return a == null ? "" : G.call(a)
                } : function(a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (H) return H.call(b, a, c);
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number")
                        for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else
                        while (c[e] !== b) a[d++] = c[e++];
                    a.length = d;
                    return a
                },
                grep: function(a, b, c) {
                    var d = [],
                        e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function(a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k)
                        for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
                    else
                        for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function(a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = F.call(arguments, 2),
                        g = function() {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function(a, c, d, f, g, h, i) {
                    var j, k = d == null,
                        l = 0,
                        m = a.length;
                    if (d && typeof d == "object") {
                        for (l in d) e.access(a, c, l, d[l], 1, h, f);
                        g = 1
                    } else if (f !== b) {
                        j = i === b && e.isFunction(f), k && (j ? (j = c, c = function(a, b, c) {
                            return j.call(e(a), c)
                        }) : (c.call(a, f), c = null));
                        if (c)
                            for (; l < m; l++) c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
                        g = 1
                    }
                    return g ? a : k ? c.call(a) : m ? c(a[0], d) : h
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(d, f) {
                        f && f instanceof e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function() {
                c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
            } : c.attachEvent && (B = function() {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
            });
            return e
        }(),
        g = {};
    f.Callbacks = function(a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m, n = function(b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g)
            },
            o = function(b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;
                for (; c && m < l; m++)
                    if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])))
            },
            p = {
                add: function() {
                    if (c) {
                        var a = c.length;
                        n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]))
                    }
                    return this
                },
                remove: function() {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++)
                            for (var f = 0; f < c.length; f++)
                                if (b[d] === c[f]) {
                                    j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                                    if (a.unique) break
                                }
                    }
                    return this
                },
                has: function(a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++)
                            if (a === c[b]) return !0
                    }
                    return !1
                },
                empty: function() {
                    c = [];
                    return this
                },
                disable: function() {
                    c = d = e = b;
                    return this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    d = b, (!e || e === !0) && p.disable();
                    return this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(b, c) {
                    d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
                    return this
                },
                fire: function() {
                    p.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function(a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function() {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function(a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function() {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    },
                    pipe: function(a, b, c) {
                        return f.Deferred(function(d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function(a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function() {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (a == null) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                },
                i = h.promise({}),
                j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function() {
                e = "resolved"
            }, c.disable, d.lock).fail(function() {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function(a) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function() {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement("div"),
            q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!c.createElement("form").enctype,
            html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
        if (p.attachEvent)
            for (n in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
        j.removeChild(p), j = g = h = p = i = null, f(function() {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName("body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
                doesNotAddBorder: g.offsetTop !== 5,
                doesAddBorderForTableAndCells: i.offsetTop === 5
            }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function(a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function(a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function(a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function(a, c) {
            var d, e, g, h, i, j = this[0],
                k = 0,
                m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") return this.each(function() {
                f.data(this, a)
            });
            d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
            return f.access(this, function(c) {
                if (c === b) {
                    m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
                    return m === b && d[1] ? this.data(d[0]) : m
                }
                d[1] = c, this.each(function() {
                    var b = f(this);
                    b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1)
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function() {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function(a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) return f.queue(this[0], a);
            return c === b ? this : this.each(function() {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--)
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function(a, b) {
            return f.access(this, f.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return f.access(this, f.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            a = f.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function(c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function() {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, g = this[0]; {
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function(d) {
                        var g = f(this),
                            h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function(a) {
                                return a == null ? "" : a + ""
                            })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
                            if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
                    if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
                }
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                },
                set: function(a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function() {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function(a, b) {
            var c, d, e, g, h, i = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; i < g; i++) e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value : null
                },
                set: function(a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function(a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {
        name: !0,
        id: !0,
        coords: !0
    }, w = f.valHooks.button = {
        get: function(a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
        },
        set: function(a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function(a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function(a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    }), f.attrHooks.contenteditable = {
        get: w.get,
        set: function(a, b, c) {
            b === "" && (b = "false"), w.set(a, b, c)
        }
    }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /(?:^|\s)hover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function(
            a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        },
        H = function(a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        },
        I = function(a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
            add: function(a, c, d, e, g) {
                var h, i, j, k, l, m, n, o, p, q, r, s;
                if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                    d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function(a) {
                        return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem, arguments) : b
                    }, i.elem = a), c = f.trim(I(c)).split(" ");
                    for (k = 0; k < c.length; k++) {
                        l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                            type: m,
                            origType: l[1],
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: g,
                            quick: g && G(g),
                            namespace: n.join(".")
                        }, p), r = j[m];
                        if (!r) {
                            r = j[m] = [], r.delegateCount = 0;
                            if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                        }
                        s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                    }
                    a = null
                }
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var g = f.hasData(a) && f._data(a),
                    h, i, j, k, l, m, n, o, p, q, r, s;
                if (!!g && !!(o = g.events)) {
                    b = f.trim(I(b || "")).split(" ");
                    for (h = 0; h < b.length; h++) {
                        i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                        if (!j) {
                            for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                            continue
                        }
                        p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                        for (n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                        r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                    }
                    f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, e, g) {
                if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                    var h = c.type || c,
                        i = [],
                        j, k, l, m, n, o, p, q, r, s;
                    if (E.test(h + f.event.triggered)) return;
                    h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                    if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                    c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";
                    if (!e) {
                        j = f.cache;
                        for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                        return
                    }
                    c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                    if (p.trigger && p.trigger.apply(e, d) === !1) return;
                    r = [
                        [e, p.bindType || h]
                    ];
                    if (!g && !p.noBubble && !f.isWindow(e)) {
                        s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                        for (; m; m = m.parentNode) r.push([m, s]), n = m;
                        n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                    }
                    for (l = 0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                    c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
                    return c.result
                }
            },
            dispatch: function(c) {
                c = f.event.fix(c || a.event);
                var d = (f._data(this, "events") || {})[c.type] || [],
                    e = d.delegateCount,
                    g = [].slice.call(arguments, 0),
                    h = !c.exclusive && !c.namespace,
                    i = f.event.special[c.type] || {},
                    j = [],
                    k, l, m, n, o, p, q, r, s, t, u;
                g[0] = c, c.delegateTarget = this;
                if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
                    if (e && (!c.button || c.type !== "click")) {
                        n = f(this), n.context = this.ownerDocument || this;
                        for (m = c.target; m != this; m = m.parentNode || this)
                            if (m.disabled !== !0) {
                                p = {}, r = [], n[0] = m;
                                for (k = 0; k < e; k++) s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
                                r.length && j.push({
                                    elem: m,
                                    matches: r
                                })
                            }
                    }
                    d.length > e && j.push({
                        elem: this,
                        matches: d.slice(e)
                    });
                    for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                        q = j[k], c.currentTarget = q.elem;
                        for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                            s = q.matches[l];
                            if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()))
                        }
                    }
                    i.postDispatch && i.postDispatch.call(this, c);
                    return c.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                    return a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, d) {
                    var e, f, g, h = d.button,
                        i = d.fromElement;
                    a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                    return a
                }
            },
            fix: function(a) {
                if (a[f.expando]) return a;
                var d, e, g = a,
                    h = f.event.fixHooks[a.type] || {},
                    i = h.props ? this.props.concat(h.props) : this.props;
                a = f.Event(g);
                for (d = i.length; d;) e = i[--d], a[e] = g[e];
                a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
                return h.filter ? h.filter(a, g) : a
            },
            special: {
                ready: {
                    setup: f.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        f.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = f.extend(new f.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        }, f.Event = function(a, b) {
            if (!(this instanceof f.Event)) return new f.Event(a, b);
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
        }, f.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = K;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = K;
                var a = this.originalEvent;
                !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = K, this.stopPropagation()
            },
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J
        }, f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            f.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c = this,
                        d = a.relatedTarget,
                        e = a.handleObj,
                        g = e.selector,
                        h;
                    if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
                    return h
                }
            }
        }), f.support.submitBubbles || (f.event.special.submit = {
            setup: function() {
                if (f.nodeName(this, "form")) return !1;
                f.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                    d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
                        a._submit_bubble = !0
                    }), d._submit_attached = !0)
                })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function() {
                if (f.nodeName(this, "form")) return !1;
                f.event.remove(this, "._submit")
            }
        }), f.support.changeBubbles || (f.event.special.change = {
            setup: function() {
                if (z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function(a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), f.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                    });
                    return !1
                }
                f.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function(a) {
                        this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                    }), b._change_attached = !0)
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                f.event.remove(this, "._change");
                return z.test(this.nodeName)
            }
        }), f.support.focusinBubbles || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var d = 0,
                e = function(a) {
                    f.event.simulate(b, a.target, f.event.fix(a), !0)
                };
            f.event.special[b] = {
                setup: function() {
                    d++ === 0 && c.addEventListener(a, e, !0)
                },
                teardown: function() {
                    --d === 0 && c.removeEventListener(a, e, !0)
                }
            }
        }), f.fn.extend({
            on: function(a, c, d, e, g) {
                var h, i;
                if (typeof a == "object") {
                    typeof c != "string" && (d = d || c, c = b);
                    for (i in a) this.on(i, c, d, a[i], g);
                    return this
                }
                d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
                if (e === !1) e = J;
                else if (!e) return this;
                g === 1 && (h = e, e = function(a) {
                    f().off(a);
                    return h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = f.guid++));
                return this.each(function() {
                    f.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                    return this
                }
                if (typeof a == "object") {
                    for (var g in a) this.off(g, c, a[g]);
                    return this
                }
                if (c === !1 || typeof c == "function") d = c, c = b;
                d === !1 && (d = J);
                return this.each(function() {
                    f.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                f(this.context).on(a, this.selector, b, c);
                return this
            },
            die: function(a, b) {
                f(this.context).off(a, this.selector || "**", b);
                return this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    f.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) return f.event.trigger(a, b, this[0], !0)
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || f.guid++,
                    d = 0,
                    e = function(c) {
                        var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                        f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                        return b[e].apply(this, arguments) || !1
                    };
                e.guid = c;
                while (d < b.length) b[d++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            f.fn[b] = function(a, c) {
                c == null && (c = a, a = null);
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
        }),
        function() {
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                g || (j[d] = c, j.sizset = h);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (m.filter(b, [j]).length > 0) {
                                    k = j;
                                    break
                                }
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }

            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = "sizcache" + (Math.random() + "").replace(".", ""),
                e = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function() {
                i = !1;
                return 0
            });
            var m = function(b, d, e, f) {
                e = e || [], d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) return [];
                if (!b || typeof b != "string") return e;
                var i, j, k, l, n, q, r, t, u = !0,
                    v = m.isXML(d),
                    w = [],
                    x = b;
                do {
                    a.exec(""), i = a.exec(x);
                    if (i) {
                        x = i[3], w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b))
                    if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
                    else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                    }
                else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                        while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                    } else k = w = []
                }
                k || (k = j), k || m.error(q || b);
                if (g.call(k) === "[object Array]")
                    if (!u) e.push.apply(e, k);
                    else if (d && d.nodeType === 1)
                    for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
                else
                    for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
                else s(k, e);
                l && (m(l, h, e, f), m.uniqueSort(e));
                return e
            };
            m.uniqueSort = function(a) {
                if (u) {
                    h = i, a.sort(u);
                    if (h)
                        for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
                }
                return a
            }, m.matches = function(a, b) {
                return m(a, null, null, b)
            }, m.matchesSelector = function(a, b) {
                return m(b, null, null, [a]).length > 0
            }, m.find = function(a, b, c) {
                var d, e, f, g, h, i;
                if (!a) return [];
                for (e = 0, f = o.order.length; e < f; e++) {
                    h = o.order[e];
                    if (g = o.leftMatch[h].exec(a)) {
                        i = g[1], g.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                            if (d != null) {
                                a = a.replace(o.match[h], "");
                                break
                            }
                        }
                    }
                }
                d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
                return {
                    set: d,
                    expr: a
                }
            }, m.filter = function(a, c, d, e) {
                var f, g, h, i, j, k, l, n, p, q = a,
                    r = [],
                    s = c,
                    t = c && c[0] && m.isXML(c[0]);
                while (a && c.length) {
                    for (h in o.filter)
                        if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                            k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                            if (l.substr(l.length - 1) === "\\") continue;
                            s === r && (r = []);
                            if (o.preFilter[h]) {
                                f = o.preFilter[h](f, s, d, r, e, t);
                                if (!f) g = i = !0;
                                else if (f === !0) continue
                            }
                            if (f)
                                for (n = 0;
                                    (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                            if (i !== b) {
                                d || (s = r), a = a.replace(o.match[h], "");
                                if (!g) return [];
                                break
                            }
                        }
                    if (a === q)
                        if (g == null) m.error(a);
                        else break;
                    q = a
                }
                return s
            }, m.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            };
            var n = m.getText = function(a) {
                    var b, c, d = a.nodeType,
                        e = "";
                    if (d) {
                        if (d === 1 || d === 9 || d === 11) {
                            if (typeof a.textContent == "string") return a.textContent;
                            if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                            for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                        } else if (d === 3 || d === 4) return a.nodeValue
                    } else
                        for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
                    return e
                },
                o = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c = typeof b == "string",
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f = 0, g = a.length, h; f < g; f++)
                                if (h = a[f]) {
                                    while ((h = h.previousSibling) && h.nodeType !== 1);
                                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                                }
                            e && m.filter(b, a, !0)
                        },
                        ">": function(a, b) {
                            var c, d = typeof b == "string",
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                b = b.toLowerCase();
                                for (; e < f; e++) {
                                    c = a[e];
                                    if (c) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                                }
                            } else {
                                for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && m.filter(b, a, !0)
                            }
                        },
                        "": function(a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                        },
                        "~": function(a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if (typeof b.getElementById != "undefined" && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function(a, b) {
                            if (typeof b.getElementsByName != "undefined") {
                                var c = [],
                                    d = b.getElementsByName(a[1]);
                                for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                return c.length === 0 ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            a = " " + a[1].replace(j, "") + " ";
                            if (f) return a;
                            for (var g = 0, h;
                                (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(j, "")
                        },
                        TAG: function(a, b) {
                            return a[1].replace(j, "").toLowerCase()
                        },
                        CHILD: function(a) {
                            if (a[1] === "nth") {
                                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else a[2] && m.error(a[0]);
                            a[0] = e++;
                            return a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, "");
                            !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                            return a
                        },
                        PSEUDO: function(b, c, d, e, f) {
                            if (b[1] === "not")
                                if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
                                else {
                                    var g = m.filter(b[3], c, d, !0 ^ f);
                                    d || e.push.apply(e, g);
                                    return !1
                                }
                            else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                            return b
                        },
                        POS: function(a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return a.disabled === !1 && a.type !== "hidden"
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            return a.checked === !0
                        },
                        selected: function(a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return a.selected === !0
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                        },
                        radio: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                        },
                        checkbox: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                        },
                        file: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "file" === a.type
                        },
                        password: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "password" === a.type
                        },
                        submit: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "submit" === a.type
                        },
                        image: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "image" === a.type
                        },
                        reset: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "reset" === a.type
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && "button" === a.type || b === "button"
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return b === 0
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return b % 2 === 0
                        },
                        odd: function(a, b) {
                            return b % 2 === 1
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) return f(a, c, b, d);
                            if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                            if (e === "not") {
                                var g = b[3];
                                for (var h = 0, i = g.length; h < i; h++)
                                    if (g[h] === a) return !1;
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function(a, b) {
                            var c, e, f, g, h, i, j, k = b[1],
                                l = a;
                            switch (k) {
                                case "only":
                                case "first":
                                    while (l = l.previousSibling)
                                        if (l.nodeType === 1) return !1;
                                    if (k === "first") return !0;
                                    l = a;
                                case "last":
                                    while (l = l.nextSibling)
                                        if (l.nodeType === 1) return !1;
                                    return !0;
                                case "nth":
                                    c = b[2], e = b[3];
                                    if (c === 1 && e === 0) return !0;
                                    f = b[0], g = a.parentNode;
                                    if (g && (g[d] !== f || !a.nodeIndex)) {
                                        i = 0;
                                        for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                        g[d] = f
                                    }
                                    j = a.nodeIndex - e;
                                    return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                            }
                        },
                        ID: function(a, b) {
                            return a.nodeType === 1 && a.getAttribute("id") === b
                        },
                        TAG: function(a, b) {
                            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                        },
                        CLASS: function(a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function(a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        POS: function(a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            if (f) return f(a, c, b, d)
                        }
                    }
                },
                p = o.match.POS,
                q = function(a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
            o.match.globalPOS = p;
            var s = function(a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                s = function(a, b) {
                    var c = 0,
                        d = b || [];
                    if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                    else if (typeof a.length == "number")
                        for (var e = a.length; c < e; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
            }
            var u, v;
            c.documentElement.compareDocumentPosition ? u = function(a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
                    return a.compareDocumentPosition(b) & 4 ? -1 : 1
                } : (u = function(a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        i = b.parentNode,
                        j = g;
                    if (g === i) return v(a, b);
                    if (!g) return -1;
                    if (!i) return 1;
                    while (j) e.unshift(j), j = j.parentNode;
                    j = i;
                    while (j) f.unshift(j), j = j.parentNode;
                    c = e.length, d = f.length;
                    for (var k = 0; k < c && k < d; k++)
                        if (e[k] !== f[k]) return v(e[k], f[k]);
                    return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
                }, v = function(a, b, c) {
                    if (a === b) return c;
                    var d = a.nextSibling;
                    while (d) {
                        if (d === b) return -1;
                        d = d.nextSibling
                    }
                    return 1
                }),
                function() {
                    var a = c.createElement("div"),
                        d = "script" + (new Date).getTime(),
                        e = c.documentElement;
                    a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function(a, c, d) {
                        if (typeof c.getElementById != "undefined" && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                        }
                    }, o.filter.ID = function(a, b) {
                        var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                        return a.nodeType === 1 && c && c.nodeValue === b
                    }), e.removeChild(a), e = a = null
                }(),
                function() {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if (a[1] === "*") {
                            var d = [];
                            for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                            c = d
                        }
                        return c
                    }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), c.querySelectorAll && function() {
                    var a = m,
                        b = c.createElement("div"),
                        d = "__sizzle__";
                    b.innerHTML = "<p class='TEST'></p>";
                    if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                        m = function(b, e, f, g) {
                            e = e || c;
                            if (!g && !m.isXML(e)) {
                                var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                                    if (h[1]) return s(e.getElementsByTagName(b), f);
                                    if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                                }
                                if (e.nodeType === 9) {
                                    if (b === "body" && e.body) return s([e.body], f);
                                    if (h && h[3]) {
                                        var i = e.getElementById(h[3]);
                                        if (!i || !i.parentNode) return s([], f);
                                        if (i.id === h[3]) return s([i], f)
                                    }
                                    try {
                                        return s(e.querySelectorAll(b), f)
                                    } catch (j) {}
                                } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                    var k = e,
                                        l = e.getAttribute("id"),
                                        n = l || d,
                                        p = e.parentNode,
                                        q = /^\s*[+~]/.test(b);
                                    l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                                    try {
                                        if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                    } catch (r) {} finally {
                                        l || k.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, e, f, g)
                        };
                        for (var e in a) m[e] = a[e];
                        b = null
                    }
                }(),
                function() {
                    var a = c.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div"),
                            e = !1;
                        try {
                            b.call(c.documentElement, "[test!='']:sizzle")
                        } catch (f) {
                            e = !0
                        }
                        m.matchesSelector = function(a, c) {
                            c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!m.isXML(a)) try {
                                if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                    var f = b.call(a, c);
                                    if (f || !d || a.document && a.document.nodeType !== 11) return f
                                }
                            } catch (g) {}
                            return m(c, null, null, [a]).length > 0
                        }
                    }
                }(),
                function() {
                    var a = c.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                        a.lastChild.className = "e";
                        if (a.getElementsByClassName("e").length === 1) return;
                        o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
                            if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                        }, a = null
                    }
                }(), c.documentElement.contains ? m.contains = function(a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                } : m.contains = function() {
                    return !1
                }, m.isXML = function(a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                };
            var y = function(a, b, c) {
                var d, e = [],
                    f = "",
                    g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
                return m.filter(f, e)
            };
            m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
        }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.globalPOS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(a) {
            var b = this,
                c, d;
            if (typeof a != "string") return f(a).filter(function() {
                for (c = 0, d = b.length; c < d; c++)
                    if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function(a, b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])
                if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function(a) {
            return f.access(this, function(a) {
                return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function() {
                var b = f(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = f.isFunction(a);
            return this.each(function(c) {
                f(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f
                    .clean(arguments);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f.clean(arguments));
                return a
            }
        },
        remove: function(a, b) {
            for (var c = 0, d;
                (d = this[c]) != null; c++)
                if (!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var a = 0, b;
                (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        },
        clone: function(a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function() {
                return f.clone(this, a, b)
            })
        },
        html: function(a) {
            return f.access(this, function(a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (; d < e; d++) c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (g) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function(a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function(b) {
                    var c = f(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function() {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, g, h, i, j = a[0],
                k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function() {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function(e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                    fragment: i
                } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, function(a, b) {
                    b.src ? f.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), f.buildFragment = function(a, b, d) {
        var e, g, h, i, j = a[0];
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
        return {
            fragment: e,
            cacheable: g
        }
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        f.fn[a] = function(c) {
            var d = [],
                e = f(c),
                g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function(a, b, c) {
            var d, e, g, h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bk(a, h), d = bl(a), e = bl(h);
                for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
            }
            if (b) {
                bj(a, h);
                if (c) {
                    d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) bj(d[g], e[g])
                }
            }
            d = e = null;
            return h
        },
        clean: function(a, b, d, e) {
            var g, h, i, j = [];
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            for (var k = 0, l;
                (l = a[k]) != null; k++) {
                typeof l == "number" && (l += "");
                if (!l) continue;
                if (typeof l == "string")
                    if (!_.test(l)) l = b.createTextNode(l);
                    else {
                        l = l.replace(Y, "<$1></$2>");
                        var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                            n = bg[m] || bg._default,
                            o = n[0],
                            p = b.createElement("div"),
                            q = bh.childNodes,
                            r;
                        b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];
                        while (o--) p = p.lastChild;
                        if (!f.support.tbody) {
                            var s = $.test(l),
                                t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];
                            for (i = t.length - 1; i >= 0; --i) f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i])
                        }!f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)))
                    }
                var u;
                if (!f.support.appendChecked)
                    if (l[0] && typeof(u = l.length) == "number")
                        for (i = 0; i < u; i++) bn(l[i]);
                    else bn(l);
                l.nodeType ? j.push(l) : j = f.merge(j, l)
            }
            if (d) {
                g = function(a) {
                    return !a.type || be.test(a.type)
                };
                for (k = 0; j[k]; k++) {
                    h = j[k];
                    if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
                    else {
                        if (h.nodeType === 1) {
                            var v = f.grep(h.getElementsByTagName("script"), g);
                            j.splice.apply(j, [k + 1, 0].concat(v))
                        }
                        d.appendChild(h)
                    }
                }
            }
            return j
        },
        cleanData: function(a) {
            var b, c, d = f.cache,
                e = f.event.special,
                g = f.support.deleteExpando;
            for (var h = 0, i;
                (i = a[h]) != null; h++) {
                if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                c = i[f.expando];
                if (c) {
                    b = d[c];
                    if (b && b.events) {
                        for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bp = /alpha\([^)]*\)/i,
        bq = /opacity=([^)]*)/,
        br = /([A-Z]|^ms)/g,
        bs = /^[\-+]?(?:\d*\.)?\d+$/i,
        bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        bu = /^([\-+])=([\-+.\de]+)/,
        bv = /^margin/,
        bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bx = ["Top", "Right", "Bottom", "Left"],
        by, bz, bA;
    f.fn.css = function(a, c) {
        return f.access(this, function(a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        }, a, c, arguments.length > 1)
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = by(a, "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {}
            }
        },
        css: function(a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (by) return by(a, c)
        },
        swap: function(a, b, c) {
            var d = {},
                e, f;
            for (f in b) d[f] = a.style[f], a.style[f] = b[f];
            e = c.call(a);
            for (f in b) a.style[f] = d[f];
            return e
        }
    }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function(a, b) {
        var c, d, e, g, h = a.style;
        b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
        return c
    }), c.documentElement.currentStyle && (bA = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), by = bz || bA, f.each(["height", "width"], function(a, b) {
        f.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function() {
                    return bB(a, b, d)
                })
            },
            set: function(a, b) {
                return bs.test(b) ? b + "px" : b
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function(a, b) {
            return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e
        }
    }), f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(a, b) {
                return f.swap(a, {
                    display: "inline-block"
                }, function() {
                    return b ? by(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }), f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function(a) {
        return !f.expr.filters.hidden(a)
    }), f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        f.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = typeof c == "string" ? c.split(" ") : [c],
                    f = {};
                for (d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }
    });
    var bC = /%20/g,
        bD = /\[\]$/,
        bE = /\r?\n/g,
        bF = /#.*$/,
        bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bJ = /^(?:GET|HEAD)$/,
        bK = /^\/\//,
        bL = /\?/,
        bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bN = /^(?:select|textarea)/i,
        bO = /\s+/,
        bP = /([?&])_=[^&]*/,
        bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bR = f.fn.load,
        bS = {},
        bT = {},
        bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
        load: function(a, c, d) {
            if (typeof a != "string" && bR) return bR.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function(a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bE, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bE, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function(a, c) {
        f[c] = function(a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function(a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? ca(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0;
                        else try {
                            r = cb(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bG.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function(a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (s < 2)
                        for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[u](d[u]);
            p = bZ(bT, d, c, v);
            if (!p) w(-1, "No Transport");
            else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) w(-1, z);
                    else throw z
                }
            }
            return v
        },
        param: function(a, c) {
            var d = [],
                e = function(a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (var g in a) b_(g, a[g], c, e);
            return d.join("&").replace(bC, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cc = f.now(),
        cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return f.expando + "_" + cc++
        }
    }), f.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function(a) {
                g = [a]
            }, d.always(function() {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function() {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function(a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ? function() {
            for (var a in cg) cg[a](0, 1)
        } : !1,
        cf = 0,
        cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && ch() || ci()
        } : ch,
        function(a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function(c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return {
                    send: function(e, g) {
                        var h = c.xhr(),
                            i, j;
                        c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                        if (c.xhrFields)
                            for (j in c.xhrFields) h[j] = c.xhrFields[j];
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (j in e) h.setRequestHeader(j, e[j])
                        } catch (k) {}
                        h.send(c.hasContent && c.data || null), d = function(a, e) {
                            var j, k, l, m, n;
                            try {
                                if (d && (e || h.readyState === 4)) {
                                    d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                                    if (e) h.readyState !== 4 && h.abort();
                                    else {
                                        j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);
                                        try {
                                            m.text = h.responseText
                                        } catch (a) {}
                                        try {
                                            k = h.statusText
                                        } catch (o) {
                                            k = ""
                                        }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                    }
                                }
                            } catch (p) {
                                e || g(-1, p)
                            }
                            m && g(j, k, m, l)
                        }, !c.async || h.readyState === 4 ? d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = d), h.onreadystatechange = d)
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
    var cj = {},
        ck, cl, cm = /^(?:toggle|show|hide)$/,
        cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        co, cp = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cq;
    f.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(ct("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0) return this.animate(ct("hide", 3), a, b, c);
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function(a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l) i in a || (a[i] = l[i])
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function(a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)
                    for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] && g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function(a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete, d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return -Math.cos(a * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function(a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function() {
                f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end))
            }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = cq || cr(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show)
                        for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function() {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(co), co = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(cp.concat.apply([], cp), function(a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function(a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function(a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {}
        if (!d || !f.contains(c, a)) return d ? {
            top: d.top,
            left: d.left
        } : {
            top: 0,
            left: 0
        };
        var g = b.body,
            h = cy(b),
            i = c.clientTop || g.clientTop || 0,
            j = c.clientLeft || g.clientLeft || 0,
            k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
            l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
            m = d.top + k - i,
            n = d.left + l - j;
        return {
            top: m,
            left: n
        }
    } : cv = function(a, b, c) {
        var d, e = a.offsetParent,
            g = a,
            h = b.body,
            i = b.defaultView,
            j = i ? i.getComputedStyle(a, null) : a.currentStyle,
            k = a.offsetTop,
            l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
            if (f.support.fixedPosition && j.position === "fixed") break;
            d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d
        }
        if (j.position === "relative" || j.position === "static") k += h.offsetTop, l += h.offsetLeft;
        f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
        return {
            top: k,
            left: l
        }
    }, f.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            f.offset.setOffset(this, a, b)
        });
        var c = this[0],
            d = c && c.ownerDocument;
        if (!d) return null;
        if (c === d.body) return f.offset.bodyOffset(c);
        return cv(c, d, d.documentElement)
    }, f.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a),
                g = e.offset(),
                h = f.css(a, "top"),
                i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                k = {},
                l = {},
                m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = cx.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || c.body;
                while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function(e) {
            return f.access(this, function(a, e, g) {
                var h = cy(a);
                if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
                h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g
            }, a, e, arguments.length, null)
        }
    }), f.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        var d = "client" + a,
            e = "scroll" + a,
            g = "offset" + a;
        f.fn["inner" + a] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null
        }, f.fn["outer" + a] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, f.fn[c] = function(a) {
            return f.access(this, function(a, c, h) {
                var i, j, k, l;
                if (f.isWindow(a)) {
                    i = a.document, j = i.documentElement[d];
                    return f.support.boxModel && j || i.body && i.body[d] || j
                }
                if (a.nodeType === 9) {
                    i = a.documentElement;
                    if (i[d] >= i[e]) return i[d];
                    return Math.max(a.body[e], i[e], a.body[g], i[g])
                }
                if (h === b) {
                    k = f.css(a, c), l = parseFloat(k);
                    return f.isNumeric(l) ? l : k
                }
                f(a).css(c, h)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = f, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return f
    })
})(window);
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.2.0", d.prototype.close = function(b) {
        function c() {
            f.detach().trigger("closed.bs.alert").remove()
        }
        var d = a(this),
            e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, c.prototype.keydown = function(a) {
        switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        a.preventDefault()
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.to = function(b) {
        var c = this,
            d = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
            e = c || d[b](),
            f = this.interval,
            g = "next" == b ? "left" : "right",
            h = "next" == b ? "first" : "last",
            i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = e[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: g
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(e)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: g
            });
            return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function() {
                e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.collapse"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        toggle: !0
    }, c.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, c.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var c = a.Event("show.bs.collapse");
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                var d = this.$parent && this.$parent.find("> .panel > .in");
                if (d && d.length) {
                    var e = d.data("bs.collapse");
                    if (e && e.transitioning) return;
                    b.call(d, "hide"), e || d.data("bs.collapse", null)
                }
                var f = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;
                var g = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return g.call(this);
                var h = a.camelCase(["scroll", f].join("-"));
                this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h])
            }
        }
    }, c.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, c.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var d = a.fn.collapse;
    a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = d, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(c) {
        var d, e = a(this),
            f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
            g = a(f),
            h = g.data("bs.collapse"),
            i = h ? "toggle" : e.data(),
            j = e.attr("data-parent"),
            k = j && a(j);
        h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), b.call(g, i)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = c(a(this)),
                e = {
                    relatedTarget: this
                };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.2.0", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                    g = e.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a",
                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var c = this,
            d = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                c.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var c = this,
            d = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var e = a.support.transition && d;
            if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var f = function() {
                c.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f()
        } else b && b()
    }, c.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var c = a.contains(document.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !c) return;
            var d = this,
                e = this.tip(),
                f = this.getUID(this.type);
            this.setContent(), e.attr("id", f), this.$element.attr("aria-describedby", f), this.options.animation && e.addClass("fade");
            var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
                h = /\s?auto?\s?/i,
                i = h.test(g);
            i && (g = g.replace(h, "") || "top"), e.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(g).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
            var j = this.getPosition(),
                k = e[0].offsetWidth,
                l = e[0].offsetHeight;
            if (i) {
                var m = g,
                    n = this.$element.parent(),
                    o = this.getPosition(n);
                g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top" : "top" == g && j.top - o.scroll - l < 0 ? "bottom" : "right" == g && j.right + k > o.width ? "left" : "left" == g && j.left - k < o.left ? "right" : g, e.removeClass(m).addClass(g)
            }
            var p = this.getCalculatedOffset(g, j, k, l);
            this.applyPlacement(p, g);
            var q = function() {
                d.$element.trigger("shown.bs." + d.type), d.hoverState = null
            };
            a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j,
            m = k.left ? "left" : "top",
            n = k.left ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(l, d[0][n], m)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this,
            d = this.tip(),
            e = a.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName;
        return a.extend({}, "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(),
            width: d ? a(window).width() : b.outerWidth(),
            height: d ? a(window).height() : b.outerHeight()
        }, d ? {
            top: 0,
            left: 0
        } : b.offset())
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.2.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.2.0", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = "offset",
            c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this),
                e = d.data("target") || d.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[b]().top + c, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]), d.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.2.0", c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
                f = a.Event("show.bs.tab", {
                    relatedTarget: e
                });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.closest("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }
        var f = c.find("> .active"),
            g = d && a.support.transition && f.hasClass("fade");
        g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(c) {
        c.preventDefault(), b.call(a(this), "show")
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.2.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = a(document).height(),
                d = this.$target.scrollTop(),
                e = this.$element.offset(),
                f = this.options.offset,
                g = f.top,
                h = f.bottom;
            "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                null != this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""),
                    k = a.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                    top: b - this.$element.height() - h
                }))
            }
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);
/*
 AngularJS v1.2.27
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W, X, u) {
    'use strict';

    function z(b) {
        return function() {
            var a = arguments[0],
                c, a = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.2.27/" + (b ? b + "/" : "") + a;
            for (c = 1; c < arguments.length; c++) a = a + (1 == c ? "?" : "&") + "p" + (c - 1) + "=" + encodeURIComponent("function" == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[c] ? "undefined" : "string" != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
            return Error(a)
        }
    }

    function Sa(b) {
        if (null == b || Ja(b)) return !1;
        var a = b.length;
        return 1 === b.nodeType && a ? !0 : G(b) || L(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function r(b, a, c) {
        var d;
        if (b)
            if (N(b))
                for (d in b) "prototype" == d || ("length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d);
            else if (L(b) || Sa(b))
            for (d = 0; d < b.length; d++) a.call(c, b[d], d);
        else if (b.forEach && b.forEach !== r) b.forEach(a, c);
        else
            for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d);
        return b
    }

    function Xb(b) {
        var a = [],
            c;
        for (c in b) b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }

    function Sc(b,
        a, c) {
        for (var d = Xb(b), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
        return d
    }

    function Yb(b) {
        return function(a, c) {
            b(c, a)
        }
    }

    function ib() {
        for (var b = na.length, a; b;) {
            b--;
            a = na[b].charCodeAt(0);
            if (57 == a) return na[b] = "A", na.join("");
            if (90 == a) na[b] = "0";
            else return na[b] = String.fromCharCode(a + 1), na.join("")
        }
        na.unshift("0");
        return na.join("")
    }

    function Zb(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function E(b) {
        var a = b.$$hashKey;
        r(arguments, function(a) {
            a !== b && r(a, function(a, c) {
                b[c] = a
            })
        });
        Zb(b, a);
        return b
    }

    function U(b) {
        return parseInt(b,
            10)
    }

    function $b(b, a) {
        return E(new(E(function() {}, {
            prototype: b
        })), a)
    }

    function v() {}

    function ga(b) {
        return b
    }

    function aa(b) {
        return function() {
            return b
        }
    }

    function F(b) {
        return "undefined" === typeof b
    }

    function D(b) {
        return "undefined" !== typeof b
    }

    function T(b) {
        return null != b && "object" === typeof b
    }

    function G(b) {
        return "string" === typeof b
    }

    function jb(b) {
        return "number" === typeof b
    }

    function va(b) {
        return "[object Date]" === Ba.call(b)
    }

    function N(b) {
        return "function" === typeof b
    }

    function kb(b) {
        return "[object RegExp]" === Ba.call(b)
    }

    function Ja(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }

    function Tc(b) {
        return !(!b || !(b.nodeName || b.prop && b.attr && b.find))
    }

    function Uc(b, a, c) {
        var d = [];
        r(b, function(b, f, g) {
            d.push(a.call(c, b, f, g))
        });
        return d
    }

    function Ta(b, a) {
        if (b.indexOf) return b.indexOf(a);
        for (var c = 0; c < b.length; c++)
            if (a === b[c]) return c;
        return -1
    }

    function Ua(b, a) {
        var c = Ta(b, a);
        0 <= c && b.splice(c, 1);
        return a
    }

    function Ka(b, a, c, d) {
        if (Ja(b) || b && b.$evalAsync && b.$watch) throw Va("cpws");
        if (a) {
            if (b === a) throw Va("cpi");
            c = c || [];
            d = d || [];
            if (T(b)) {
                var e = Ta(c, b);
                if (-1 !== e) return d[e];
                c.push(b);
                d.push(a)
            }
            if (L(b))
                for (var f = a.length = 0; f < b.length; f++) e = Ka(b[f], null, c, d), T(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);
            else {
                var g = a.$$hashKey;
                L(a) ? a.length = 0 : r(a, function(b, c) {
                    delete a[c]
                });
                for (f in b) e = Ka(b[f], null, c, d), T(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e;
                Zb(a, g)
            }
        } else if (a = b) L(b) ? a = Ka(b, [], c, d) : va(b) ? a = new Date(b.getTime()) : kb(b) ? (a = RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : T(b) && (a = Ka(b, {}, c, d));
        return a
    }

    function ha(b, a) {
        if (L(b)) {
            a = a || [];
            for (var c = 0; c < b.length; c++) a[c] = b[c]
        } else if (T(b))
            for (c in a = a || {}, b) !lb.call(b, c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (a[c] = b[c]);
        return a || b
    }

    function Ca(b, a) {
        if (b === a) return !0;
        if (null === b || null === a) return !1;
        if (b !== b && a !== a) return !0;
        var c = typeof b,
            d;
        if (c == typeof a && "object" == c)
            if (L(b)) {
                if (!L(a)) return !1;
                if ((c = b.length) == a.length) {
                    for (d = 0; d < c; d++)
                        if (!Ca(b[d], a[d])) return !1;
                    return !0
                }
            } else {
                if (va(b)) return va(a) ? isNaN(b.getTime()) && isNaN(a.getTime()) || b.getTime() ===
                    a.getTime() : !1;
                if (kb(b) && kb(a)) return b.toString() == a.toString();
                if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Ja(b) || Ja(a) || L(a)) return !1;
                c = {};
                for (d in b)
                    if ("$" !== d.charAt(0) && !N(b[d])) {
                        if (!Ca(b[d], a[d])) return !1;
                        c[d] = !0
                    }
                for (d in a)
                    if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== u && !N(a[d])) return !1;
                return !0
            }
        return !1
    }

    function Bb(b, a) {
        var c = 2 < arguments.length ? wa.call(arguments, 2) : [];
        return !N(a) || a instanceof RegExp ? a : c.length ? function() {
            return arguments.length ? a.apply(b, c.concat(wa.call(arguments,
                0))) : a.apply(b, c)
        } : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }

    function Vc(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) ? c = u : Ja(a) ? c = "$WINDOW" : a && X === a ? c = "$DOCUMENT" : a && (a.$evalAsync && a.$watch) && (c = "$SCOPE");
        return c
    }

    function oa(b, a) {
        return "undefined" === typeof b ? u : JSON.stringify(b, Vc, a ? "  " : null)
    }

    function ac(b) {
        return G(b) ? JSON.parse(b) : b
    }

    function Wa(b) {
        "function" === typeof b ? b = !0 : b && 0 !== b.length ? (b = x("" + b), b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
        return b
    }

    function ia(b) {
        b = A(b).clone();
        try {
            b.empty()
        } catch (a) {}
        var c = A("<div>").append(b).html();
        try {
            return 3 === b[0].nodeType ? x(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + x(b)
            })
        } catch (d) {
            return x(c)
        }
    }

    function bc(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {}
    }

    function cc(b) {
        var a = {},
            c, d;
        r((b || "").split("&"), function(b) {
            b && (c = b.replace(/\+/g, "%20").split("="), d = bc(c[0]), D(d) && (b = D(c[1]) ? bc(c[1]) : !0, lb.call(a, d) ? L(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function Cb(b) {
        var a = [];
        r(b, function(b, d) {
            L(b) ? r(b, function(b) {
                a.push(Da(d, !0) + (!0 === b ? "" : "=" + Da(b, !0)))
            }) : a.push(Da(d, !0) + (!0 === b ? "" : "=" + Da(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function mb(b) {
        return Da(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Da(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
    }

    function Wc(b, a) {
        function c(a) {
            a && d.push(a)
        }
        var d = [b],
            e, f, g = ["ng:app", "ng-app", "x-ng-app",
                "data-ng-app"
            ],
            h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        r(g, function(a) {
            g[a] = !0;
            c(X.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (r(b.querySelectorAll("." + a), c), r(b.querySelectorAll("." + a + "\\:"), c), r(b.querySelectorAll("[" + a + "]"), c))
        });
        r(d, function(a) {
            if (!e) {
                var b = h.exec(" " + a.className + " ");
                b ? (e = a, f = (b[2] || "").replace(/\s+/g, ",")) : r(a.attributes, function(b) {
                    !e && g[b.name] && (e = a, f = b.value)
                })
            }
        });
        e && a(e, f ? [f] : [])
    }

    function dc(b, a) {
        var c = function() {
                b = A(b);
                if (b.injector()) {
                    var c = b[0] === X ?
                        "document" : ia(b);
                    throw Va("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
                }
                a = a || [];
                a.unshift(["$provide", function(a) {
                    a.value("$rootElement", b)
                }]);
                a.unshift("ng");
                c = ec(a);
                c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(a, b, c, d, e) {
                    a.$apply(function() {
                        b.data("$injector", d);
                        c(b)(a)
                    })
                }]);
                return c
            },
            d = /^NG_DEFER_BOOTSTRAP!/;
        if (W && !d.test(W.name)) return c();
        W.name = W.name.replace(d, "");
        Xa.resumeBootstrap = function(b) {
            r(b, function(b) {
                a.push(b)
            });
            c()
        }
    }

    function nb(b, a) {
        a =
            a || "_";
        return b.replace(Xc, function(b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }

    function Db(b, a, c) {
        if (!b) throw Va("areq", a || "?", c || "required");
        return b
    }

    function Ya(b, a, c) {
        c && L(b) && (b = b[b.length - 1]);
        Db(N(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function Ea(b, a) {
        if ("hasOwnProperty" === b) throw Va("badname", a);
    }

    function fc(b, a, c) {
        if (!a) return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g = 0; g < f; g++) d = a[g], b && (b = (e = b)[d]);
        return !c && N(b) ? Bb(e, b) : b
    }

    function Eb(b) {
        var a =
            b[0];
        b = b[b.length - 1];
        if (a === b) return A(a);
        var c = [a];
        do {
            a = a.nextSibling;
            if (!a) break;
            c.push(a)
        } while (a !== b);
        return A(c)
    }

    function Yc(b) {
        var a = z("$injector"),
            c = z("ng");
        b = b.angular || (b.angular = {});
        b.$$minErr = b.$$minErr || z;
        return b.module || (b.module = function() {
            var b = {};
            return function(e, f, g) {
                if ("hasOwnProperty" === e) throw c("badname", "module");
                f && b.hasOwnProperty(e) && (b[e] = null);
                return b[e] || (b[e] = function() {
                    function b(a, d, e) {
                        return function() {
                            c[e || "push"]([a, d, arguments]);
                            return n
                        }
                    }
                    if (!f) throw a("nomod",
                        e);
                    var c = [],
                        d = [],
                        l = b("$injector", "invoke"),
                        n = {
                            _invokeQueue: c,
                            _runBlocks: d,
                            requires: f,
                            name: e,
                            provider: b("$provide", "provider"),
                            factory: b("$provide", "factory"),
                            service: b("$provide", "service"),
                            value: b("$provide", "value"),
                            constant: b("$provide", "constant", "unshift"),
                            animation: b("$animateProvider", "register"),
                            filter: b("$filterProvider", "register"),
                            controller: b("$controllerProvider", "register"),
                            directive: b("$compileProvider", "directive"),
                            config: l,
                            run: function(a) {
                                d.push(a);
                                return this
                            }
                        };
                    g && l(g);
                    return n
                }())
            }
        }())
    }

    function Zc(b) {
        E(b, {
            bootstrap: dc,
            copy: Ka,
            extend: E,
            equals: Ca,
            element: A,
            forEach: r,
            injector: ec,
            noop: v,
            bind: Bb,
            toJson: oa,
            fromJson: ac,
            identity: ga,
            isUndefined: F,
            isDefined: D,
            isString: G,
            isFunction: N,
            isObject: T,
            isNumber: jb,
            isElement: Tc,
            isArray: L,
            version: $c,
            isDate: va,
            lowercase: x,
            uppercase: La,
            callbacks: {
                counter: 0
            },
            $$minErr: z,
            $$csp: Za
        });
        $a = Yc(W);
        try {
            $a("ngLocale")
        } catch (a) {
            $a("ngLocale", []).provider("$locale", ad)
        }
        $a("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider({
                $$sanitizeUri: bd
            });
            a.provider("$compile",
                gc).directive({
                a: cd,
                input: hc,
                textarea: hc,
                form: dd,
                script: ed,
                select: fd,
                style: gd,
                option: hd,
                ngBind: id,
                ngBindHtml: jd,
                ngBindTemplate: kd,
                ngClass: ld,
                ngClassEven: md,
                ngClassOdd: nd,
                ngCloak: od,
                ngController: pd,
                ngForm: qd,
                ngHide: rd,
                ngIf: sd,
                ngInclude: td,
                ngInit: ud,
                ngNonBindable: vd,
                ngPluralize: wd,
                ngRepeat: xd,
                ngShow: yd,
                ngStyle: zd,
                ngSwitch: Ad,
                ngSwitchWhen: Bd,
                ngSwitchDefault: Cd,
                ngOptions: Dd,
                ngTransclude: Ed,
                ngModel: Fd,
                ngList: Gd,
                ngChange: Hd,
                required: ic,
                ngRequired: ic,
                ngValue: Id
            }).directive({
                ngInclude: Jd
            }).directive(Fb).directive(jc);
            a.provider({
                $anchorScroll: Kd,
                $animate: Ld,
                $browser: Md,
                $cacheFactory: Nd,
                $controller: Od,
                $document: Pd,
                $exceptionHandler: Qd,
                $filter: kc,
                $interpolate: Rd,
                $interval: Sd,
                $http: Td,
                $httpBackend: Ud,
                $location: Vd,
                $log: Wd,
                $parse: Xd,
                $rootScope: Yd,
                $q: Zd,
                $sce: $d,
                $sceDelegate: ae,
                $sniffer: be,
                $templateCache: ce,
                $timeout: de,
                $window: ee,
                $$rAF: fe,
                $$asyncCallback: ge
            })
        }])
    }

    function ab(b) {
        return b.replace(he, function(a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(ie, "Moz$1")
    }

    function Gb(b, a, c, d) {
        function e(b) {
            var e = c && b ? [this.filter(b)] : [this],
                k = a,
                m, l, n, q, p, s;
            if (!d || null != b)
                for (; e.length;)
                    for (m = e.shift(), l = 0, n = m.length; l < n; l++)
                        for (q = A(m[l]), k ? q.triggerHandler("$destroy") : k = !k, p = 0, q = (s = q.children()).length; p < q; p++) e.push(Fa(s[p]));
            return f.apply(this, arguments)
        }
        var f = Fa.fn[b],
            f = f.$original || f;
        e.$original = f;
        Fa.fn[b] = e
    }

    function S(b) {
        if (b instanceof S) return b;
        G(b) && (b = $(b));
        if (!(this instanceof S)) {
            if (G(b) && "<" != b.charAt(0)) throw Hb("nosel");
            return new S(b)
        }
        if (G(b)) {
            var a = b;
            b = X;
            var c;
            if (c = je.exec(a)) b = [b.createElement(c[1])];
            else {
                var d =
                    b,
                    e;
                b = d.createDocumentFragment();
                c = [];
                if (Ib.test(a)) {
                    d = b.appendChild(d.createElement("div"));
                    e = (ke.exec(a) || ["", ""])[1].toLowerCase();
                    e = da[e] || da._default;
                    d.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(le, "<$1></$2>") + e[2];
                    d.removeChild(d.firstChild);
                    for (a = e[0]; a--;) d = d.lastChild;
                    a = 0;
                    for (e = d.childNodes.length; a < e; ++a) c.push(d.childNodes[a]);
                    d = b.firstChild;
                    d.textContent = ""
                } else c.push(d.createTextNode(a));
                b.textContent = "";
                b.innerHTML = "";
                b = c
            }
            Jb(this, b);
            A(X.createDocumentFragment()).append(this)
        } else Jb(this,
            b)
    }

    function Kb(b) {
        return b.cloneNode(!0)
    }

    function Ma(b) {
        Lb(b);
        var a = 0;
        for (b = b.childNodes || []; a < b.length; a++) Ma(b[a])
    }

    function lc(b, a, c, d) {
        if (D(d)) throw Hb("offargs");
        var e = pa(b, "events");
        pa(b, "handle") && (F(a) ? r(e, function(a, c) {
            bb(b, c, a);
            delete e[c]
        }) : r(a.split(" "), function(a) {
            F(c) ? (bb(b, a, e[a]), delete e[a]) : Ua(e[a] || [], c)
        }))
    }

    function Lb(b, a) {
        var c = b.ng339,
            d = cb[c];
        d && (a ? delete cb[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), lc(b)), delete cb[c], b.ng339 = u))
    }

    function pa(b, a, c) {
        var d =
            b.ng339,
            d = cb[d || -1];
        if (D(c)) d || (b.ng339 = d = ++me, d = cb[d] = {}), d[a] = c;
        else return d && d[a]
    }

    function Mb(b, a, c) {
        var d = pa(b, "data"),
            e = D(c),
            f = !e && D(a),
            g = f && !T(a);
        d || g || pa(b, "data", d = {});
        if (e) d[a] = c;
        else if (f) {
            if (g) return d && d[a];
            E(d, a)
        } else return d
    }

    function Nb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
    }

    function ob(b, a) {
        a && b.setAttribute && r(a.split(" "), function(a) {
            b.setAttribute("class", $((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g,
                " ").replace(" " + $(a) + " ", " ")))
        })
    }

    function pb(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            r(a.split(" "), function(a) {
                a = $(a); - 1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class", $(c))
        }
    }

    function Jb(b, a) {
        if (a) {
            a = a.nodeName || !D(a.length) || Ja(a) ? [a] : a;
            for (var c = 0; c < a.length; c++) b.push(a[c])
        }
    }

    function mc(b, a) {
        return qb(b, "$" + (a || "ngController") + "Controller")
    }

    function qb(b, a, c) {
        9 == b.nodeType && (b = b.documentElement);
        for (a = L(a) ? a : [a]; b;) {
            for (var d =
                    0, e = a.length; d < e; d++)
                if ((c = A.data(b, a[d])) !== u) return c;
            b = b.parentNode || 11 === b.nodeType && b.host
        }
    }

    function nc(b) {
        for (var a = 0, c = b.childNodes; a < c.length; a++) Ma(c[a]);
        for (; b.firstChild;) b.removeChild(b.firstChild)
    }

    function oc(b, a) {
        var c = rb[a.toLowerCase()];
        return c && pc[b.nodeName] && c
    }

    function ne(b, a) {
        var c = function(c, e) {
            c.preventDefault || (c.preventDefault = function() {
                c.returnValue = !1
            });
            c.stopPropagation || (c.stopPropagation = function() {
                c.cancelBubble = !0
            });
            c.target || (c.target = c.srcElement || X);
            if (F(c.defaultPrevented)) {
                var f =
                    c.preventDefault;
                c.preventDefault = function() {
                    c.defaultPrevented = !0;
                    f.call(c)
                };
                c.defaultPrevented = !1
            }
            c.isDefaultPrevented = function() {
                return c.defaultPrevented || !1 === c.returnValue
            };
            var g = ha(a[e || c.type] || []);
            r(g, function(a) {
                a.call(b, c)
            });
            8 >= R ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
        };
        c.elem = b;
        return c
    }

    function Na(b, a) {
        var c = typeof b,
            d;
        "function" == c || "object" == c && null !== b ? "function" == typeof(d =
            b.$$hashKey) ? d = b.$$hashKey() : d === u && (d = b.$$hashKey = (a || ib)()) : d = b;
        return c + ":" + d
    }

    function db(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function() {
                return ++c
            }
        }
        r(b, this.put, this)
    }

    function qc(b) {
        var a, c;
        "function" === typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(oe, ""), c = c.match(pe), r(c[1].split(qe), function(b) {
            b.replace(re, function(b, c, d) {
                a.push(d)
            })
        })), b.$inject = a) : L(b) ? (c = b.length - 1, Ya(b[c], "fn"), a = b.slice(0, c)) : Ya(b, "fn", !0);
        return a
    }

    function ec(b) {
        function a(a) {
            return function(b, c) {
                if (T(b)) r(b,
                    Yb(a));
                else return a(b, c)
            }
        }

        function c(a, b) {
            Ea(a, "service");
            if (N(b) || L(b)) b = n.instantiate(b);
            if (!b.$get) throw eb("pget", a);
            return l[a + h] = b
        }

        function d(a, b) {
            return c(a, {
                $get: b
            })
        }

        function e(a) {
            var b = [],
                c, d, f, h;
            r(a, function(a) {
                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        if (G(a))
                            for (c = $a(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, f = 0, h = d.length; f < h; f++) {
                                var g = d[f],
                                    k = n.get(g[0]);
                                k[g[1]].apply(k, g[2])
                            } else N(a) ? b.push(n.invoke(a)) : L(a) ? b.push(n.invoke(a)) : Ya(a, "module")
                    } catch (p) {
                        throw L(a) && (a =
                            a[a.length - 1]), p.message && (p.stack && -1 == p.stack.indexOf(p.message)) && (p = p.message + "\n" + p.stack), eb("modulerr", a, p.stack || p.message || p);
                    }
                }
            });
            return b
        }

        function f(a, b) {
            function c(d) {
                if (a.hasOwnProperty(d)) {
                    if (a[d] === g) throw eb("cdep", d + " <- " + k.join(" <- "));
                    return a[d]
                }
                try {
                    return k.unshift(d), a[d] = g, a[d] = b(d)
                } catch (e) {
                    throw a[d] === g && delete a[d], e;
                } finally {
                    k.shift()
                }
            }

            function d(a, b, e) {
                var f = [],
                    h = qc(a),
                    g, k, p;
                k = 0;
                for (g = h.length; k < g; k++) {
                    p = h[k];
                    if ("string" !== typeof p) throw eb("itkn", p);
                    f.push(e && e.hasOwnProperty(p) ?
                        e[p] : c(p))
                }
                L(a) && (a = a[g]);
                return a.apply(b, f)
            }
            return {
                invoke: d,
                instantiate: function(a, b) {
                    var c = function() {},
                        e;
                    c.prototype = (L(a) ? a[a.length - 1] : a).prototype;
                    c = new c;
                    e = d(a, c, b);
                    return T(e) || N(e) ? e : c
                },
                get: c,
                annotate: qc,
                has: function(b) {
                    return l.hasOwnProperty(b + h) || a.hasOwnProperty(b)
                }
            }
        }
        var g = {},
            h = "Provider",
            k = [],
            m = new db([], !0),
            l = {
                $provide: {
                    provider: a(c),
                    factory: a(d),
                    service: a(function(a, b) {
                        return d(a, ["$injector", function(a) {
                            return a.instantiate(b)
                        }])
                    }),
                    value: a(function(a, b) {
                        return d(a, aa(b))
                    }),
                    constant: a(function(a,
                        b) {
                        Ea(a, "constant");
                        l[a] = b;
                        q[a] = b
                    }),
                    decorator: function(a, b) {
                        var c = n.get(a + h),
                            d = c.$get;
                        c.$get = function() {
                            var a = p.invoke(d, c);
                            return p.invoke(b, null, {
                                $delegate: a
                            })
                        }
                    }
                }
            },
            n = l.$injector = f(l, function() {
                throw eb("unpr", k.join(" <- "));
            }),
            q = {},
            p = q.$injector = f(q, function(a) {
                a = n.get(a + h);
                return p.invoke(a.$get, a)
            });
        r(e(b), function(a) {
            p.invoke(a || v)
        });
        return p
    }

    function Kd() {
        var b = !0;
        this.disableAutoScrolling = function() {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
            function e(a) {
                var b = null;
                r(a, function(a) {
                    b || "a" !== x(a.nodeName) || (b = a)
                });
                return b
            }

            function f() {
                var b = c.hash(),
                    d;
                b ? (d = g.getElementById(b)) ? d.scrollIntoView() : (d = e(g.getElementsByName(b))) ? d.scrollIntoView() : "top" === b && a.scrollTo(0, 0) : a.scrollTo(0, 0)
            }
            var g = a.document;
            b && d.$watch(function() {
                return c.hash()
            }, function() {
                d.$evalAsync(f)
            });
            return f
        }]
    }

    function ge() {
        this.$get = ["$$rAF", "$timeout", function(b, a) {
            return b.supported ? function(a) {
                return b(a)
            } : function(b) {
                return a(b, 0, !1)
            }
        }]
    }

    function se(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null,
                    wa.call(arguments, 1))
            } finally {
                if (s--, 0 === s)
                    for (; J.length;) try {
                        J.pop()()
                    } catch (b) {
                        c.error(b)
                    }
            }
        }

        function f(a, b) {
            (function ea() {
                r(w, function(a) {
                    a()
                });
                t = b(ea, a)
            })()
        }

        function g() {
            y != h.url() && (y = h.url(), r(ba, function(a) {
                a(h.url())
            }))
        }
        var h = this,
            k = a[0],
            m = b.location,
            l = b.history,
            n = b.setTimeout,
            q = b.clearTimeout,
            p = {};
        h.isMock = !1;
        var s = 0,
            J = [];
        h.$$completeOutstandingRequest = e;
        h.$$incOutstandingRequestCount = function() {
            s++
        };
        h.notifyWhenNoOutstandingRequests = function(a) {
            r(w, function(a) {
                a()
            });
            0 === s ? a() : J.push(a)
        };
        var w = [],
            t;
        h.addPollFn = function(a) {
            F(t) && f(100, n);
            w.push(a);
            return a
        };
        var y = m.href,
            K = a.find("base"),
            B = null;
        h.url = function(a, c) {
            m !== b.location && (m = b.location);
            l !== b.history && (l = b.history);
            if (a) {
                if (y != a) {
                    var e = y && Ga(y) === Ga(a);
                    y = a;
                    !e && d.history ? c ? l.replaceState(null, "", a) : (l.pushState(null, "", a), K.attr("href", K.attr("href"))) : (e || (B = a), c ? m.replace(a) : m.href = a);
                    return h
                }
            } else return B || m.href.replace(/%27/g, "'")
        };
        var ba = [],
            O = !1;
        h.onUrlChange = function(a) {
            if (!O) {
                if (d.history) A(b).on("popstate", g);
                if (d.hashchange) A(b).on("hashchange",
                    g);
                else h.addPollFn(g);
                O = !0
            }
            ba.push(a);
            return a
        };
        h.$$checkUrlChange = g;
        h.baseHref = function() {
            var a = K.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var M = {},
            ca = "",
            P = h.baseHref();
        h.cookies = function(a, b) {
            var d, e, f, h;
            if (a) b === u ? k.cookie = escape(a) + "=;path=" + P + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : G(b) && (d = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + P).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
            else {
                if (k.cookie !==
                    ca)
                    for (ca = k.cookie, d = ca.split("; "), M = {}, f = 0; f < d.length; f++) e = d[f], h = e.indexOf("="), 0 < h && (a = unescape(e.substring(0, h)), M[a] === u && (M[a] = unescape(e.substring(h + 1))));
                return M
            }
        };
        h.defer = function(a, b) {
            var c;
            s++;
            c = n(function() {
                delete p[c];
                e(a)
            }, b || 0);
            p[c] = !0;
            return c
        };
        h.defer.cancel = function(a) {
            return p[a] ? (delete p[a], q(a), e(v), !0) : !1
        }
    }

    function Md() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
            return new se(b, d, a, c)
        }]
    }

    function Nd() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    a !=
                        n && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }
                if (b in a) throw z("$cacheFactory")("iid", b);
                var g = 0,
                    h = E({}, d, {
                        id: b
                    }),
                    k = {},
                    m = d && d.capacity || Number.MAX_VALUE,
                    l = {},
                    n = null,
                    q = null;
                return a[b] = {
                    put: function(a, b) {
                        if (m < Number.MAX_VALUE) {
                            var c = l[a] || (l[a] = {
                                key: a
                            });
                            e(c)
                        }
                        if (!F(b)) return a in k || g++, k[a] = b, g > m && this.remove(q.key), b
                    },
                    get: function(a) {
                        if (m < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b) return;
                            e(b)
                        }
                        return k[a]
                    },
                    remove: function(a) {
                        if (m < Number.MAX_VALUE) {
                            var b =
                                l[a];
                            if (!b) return;
                            b == n && (n = b.p);
                            b == q && (q = b.n);
                            f(b.n, b.p);
                            delete l[a]
                        }
                        delete k[a];
                        g--
                    },
                    removeAll: function() {
                        k = {};
                        g = 0;
                        l = {};
                        n = q = null
                    },
                    destroy: function() {
                        l = h = k = null;
                        delete a[b]
                    },
                    info: function() {
                        return E({}, h, {
                            size: g
                        })
                    }
                }
            }
            var a = {};
            b.info = function() {
                var b = {};
                r(a, function(a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function(b) {
                return a[b]
            };
            return b
        }
    }

    function ce() {
        this.$get = ["$cacheFactory", function(b) {
            return b("templates")
        }]
    }

    function gc(b, a) {
        var c = {},
            d = "Directive",
            e = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,
            f = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
            g = /^(on[a-z]+|formaction)$/;
        this.directive = function k(a, e) {
            Ea(a, "directive");
            G(a) ? (Db(e, "directiveFactory"), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, ["$injector", "$exceptionHandler", function(b, d) {
                var e = [];
                r(c[a], function(c, f) {
                    try {
                        var g = b.invoke(c);
                        N(g) ? g = {
                            compile: aa(g)
                        } : !g.compile && g.link && (g.compile = aa(g.link));
                        g.priority = g.priority || 0;
                        g.index = f;
                        g.name = g.name || a;
                        g.require = g.require || g.controller && g.name;
                        g.restrict = g.restrict || "A";
                        e.push(g)
                    } catch (k) {
                        d(k)
                    }
                });
                return e
            }])), c[a].push(e)) : r(a, Yb(k));
            return this
        };
        this.aHrefSanitizationWhitelist = function(b) {
            return D(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function(b) {
            return D(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, l, n, q, p, s, J, w, t, y, K) {
            function B(a, b, c, d, e) {
                a instanceof
                A || (a = A(a));
                r(a, function(b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = A(b).wrap("<span></span>").parent()[0])
                });
                var f = O(a, b, a, c, d, e);
                ba(a, "ng-scope");
                return function(b, c, d, e) {
                    Db(b, "scope");
                    var g = c ? Oa.clone.call(a) : a;
                    r(d, function(a, b) {
                        g.data("$" + b + "Controller", a)
                    });
                    d = 0;
                    for (var k = g.length; d < k; d++) {
                        var p = g[d].nodeType;
                        1 !== p && 9 !== p || g.eq(d).data("$scope", b)
                    }
                    c && c(g, b);
                    f && f(b, g, g, e);
                    return g
                }
            }

            function ba(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }

            function O(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, p, l, m, q,
                        n, w;
                    f = c.length;
                    var s = Array(f);
                    for (m = 0; m < f; m++) s[m] = c[m];
                    n = m = 0;
                    for (q = k.length; m < q; n++) p = s[n], c = k[m++], f = k[m++], c ? (c.scope ? (l = a.$new(), A.data(p, "$scope", l)) : l = a, w = c.transcludeOnThisElement ? M(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? M(a, b) : null, c(f, l, p, d, w)) : f && f(a, p.childNodes, u, e)
                }
                for (var k = [], p, l, m, q, n = 0; n < a.length; n++) p = new Ob, l = ca(a[n], [], p, 0 === n ? d : u, e), (f = l.length ? I(l, a[n], p, b, c, null, [], [], f) : null) && f.scope && ba(p.$$element, "ng-scope"), p = f && f.terminal || !(m = a[n].childNodes) || !m.length ?
                    null : O(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), k.push(f, p), q = q || f || p, f = null;
                return q ? g : null
            }

            function M(a, b, c) {
                return function(d, e, f) {
                    var g = !1;
                    d || (d = a.$new(), g = d.$$transcluded = !0);
                    e = b(d, e, f, c);
                    if (g) e.on("$destroy", function() {
                        d.$destroy()
                    });
                    return e
                }
            }

            function ca(a, b, c, d, g) {
                var k = c.$attr,
                    p;
                switch (a.nodeType) {
                    case 1:
                        ea(b, qa(Pa(a).toLowerCase()), "E", d, g);
                        for (var l, m, q, n = a.attributes, w = 0, s = n && n.length; w < s; w++) {
                            var t = !1,
                                J = !1;
                            l = n[w];
                            if (!R || 8 <= R || l.specified) {
                                p = l.name;
                                m =
                                    $(l.value);
                                l = qa(p);
                                if (q = U.test(l)) p = nb(l.substr(6), "-");
                                var y = l.replace(/(Start|End)$/, "");
                                l === y + "Start" && (t = p, J = p.substr(0, p.length - 5) + "end", p = p.substr(0, p.length - 6));
                                l = qa(p.toLowerCase());
                                k[l] = p;
                                if (q || !c.hasOwnProperty(l)) c[l] = m, oc(a, l) && (c[l] = !0);
                                S(a, b, m, l);
                                ea(b, l, "A", d, g, t, J)
                            }
                        }
                        a = a.className;
                        if (G(a) && "" !== a)
                            for (; p = f.exec(a);) l = qa(p[2]), ea(b, l, "C", d, g) && (c[l] = $(p[3])), a = a.substr(p.index + p[0].length);
                        break;
                    case 3:
                        x(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (p = e.exec(a.nodeValue)) l = qa(p[1]), ea(b, l, "M", d,
                                g) && (c[l] = $(p[2]))
                        } catch (B) {}
                }
                b.sort(F);
                return b
            }

            function P(a, b, c) {
                var d = [],
                    e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ja("uterdir", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return A(d)
            }

            function C(a, b, c) {
                return function(d, e, f, g, k) {
                    e = P(e[0], b, c);
                    return a(d, e, f, g, k)
                }
            }

            function I(a, c, d, e, f, g, k, q, n) {
                function w(a, b, c, d) {
                    if (a) {
                        c && (a = C(a, c, d));
                        a.require = H.require;
                        a.directiveName = z;
                        if (K === H || H.$$isolateScope) a = rc(a, {
                            isolateScope: !0
                        });
                        k.push(a)
                    }
                    if (b) {
                        c && (b = C(b, c, d));
                        b.require = H.require;
                        b.directiveName = z;
                        if (K === H || H.$$isolateScope) b = rc(b, {
                            isolateScope: !0
                        });
                        q.push(b)
                    }
                }

                function t(a, b, c, d) {
                    var e, f = "data",
                        g = !1;
                    if (G(b)) {
                        for (;
                            "^" == (e = b.charAt(0)) || "?" == e;) b = b.substr(1), "^" == e && (f = "inheritedData"), g = g || "?" == e;
                        e = null;
                        d && "data" === f && (e = d[b]);
                        e = e || c[f]("$" + b + "Controller");
                        if (!e && !g) throw ja("ctreq", b, a);
                    } else L(b) && (e = [], r(b, function(b) {
                        e.push(t(a, b, c, d))
                    }));
                    return e
                }

                function J(a, e, f, g, n) {
                    function w(a, b) {
                        var c;
                        2 > arguments.length &&
                            (b = a, a = u);
                        Ia && (c = ca);
                        return n(a, b, c)
                    }
                    var y, Q, B, M, C, P, ca = {},
                        ra;
                    y = c === f ? d : ha(d, new Ob(A(f), d.$attr));
                    Q = y.$$element;
                    if (K) {
                        var ue = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        P = e.$new(!0);
                        !I || I !== K && I !== K.$$originalDirective ? Q.data("$isolateScopeNoTemplate", P) : Q.data("$isolateScope", P);
                        ba(Q, "ng-isolate-scope");
                        r(K.scope, function(a, c) {
                            var d = a.match(ue) || [],
                                f = d[3] || c,
                                g = "?" == d[2],
                                d = d[1],
                                k, l, n, q;
                            P.$$isolateBindings[c] = d + f;
                            switch (d) {
                                case "@":
                                    y.$observe(f, function(a) {
                                        P[c] = a
                                    });
                                    y.$$observers[f].$$scope = e;
                                    y[f] && (P[c] = b(y[f])(e));
                                    break;
                                case "=":
                                    if (g && !y[f]) break;
                                    l = p(y[f]);
                                    q = l.literal ? Ca : function(a, b) {
                                        return a === b || a !== a && b !== b
                                    };
                                    n = l.assign || function() {
                                        k = P[c] = l(e);
                                        throw ja("nonassign", y[f], K.name);
                                    };
                                    k = P[c] = l(e);
                                    P.$watch(function() {
                                        var a = l(e);
                                        q(a, P[c]) || (q(a, k) ? n(e, a = P[c]) : P[c] = a);
                                        return k = a
                                    }, null, l.literal);
                                    break;
                                case "&":
                                    l = p(y[f]);
                                    P[c] = function(a) {
                                        return l(e, a)
                                    };
                                    break;
                                default:
                                    throw ja("iscp", K.name, c, a);
                            }
                        })
                    }
                    ra = n && w;
                    O && r(O, function(a) {
                        var b = {
                                $scope: a === K || a.$$isolateScope ? P : e,
                                $element: Q,
                                $attrs: y,
                                $transclude: ra
                            },
                            c;
                        C = a.controller;
                        "@" == C && (C = y[a.name]);
                        c = s(C, b);
                        ca[a.name] = c;
                        Ia || Q.data("$" + a.name + "Controller", c);
                        a.controllerAs && (b.$scope[a.controllerAs] = c)
                    });
                    g = 0;
                    for (B = k.length; g < B; g++) try {
                        M = k[g], M(M.isolateScope ? P : e, Q, y, M.require && t(M.directiveName, M.require, Q, ca), ra)
                    } catch (H) {
                        l(H, ia(Q))
                    }
                    g = e;
                    K && (K.template || null === K.templateUrl) && (g = P);
                    a && a(g, f.childNodes, u, n);
                    for (g = q.length - 1; 0 <= g; g--) try {
                        M = q[g], M(M.isolateScope ? P : e, Q, y, M.require && t(M.directiveName, M.require, Q, ca), ra)
                    } catch (D) {
                        l(D, ia(Q))
                    }
                }
                n = n || {};
                for (var y = -Number.MAX_VALUE,
                        M, O = n.controllerDirectives, K = n.newIsolateScopeDirective, I = n.templateDirective, ea = n.nonTlbTranscludeDirective, F = !1, E = !1, Ia = n.hasElementTranscludeDirective, x = d.$$element = A(c), H, z, V, S = e, R, Ha = 0, sa = a.length; Ha < sa; Ha++) {
                    H = a[Ha];
                    var U = H.$$start,
                        Y = H.$$end;
                    U && (x = P(c, U, Y));
                    V = u;
                    if (y > H.priority) break;
                    if (V = H.scope) M = M || H, H.templateUrl || (fb("new/isolated scope", K, H, x), T(V) && (K = H));
                    z = H.name;
                    !H.templateUrl && H.controller && (V = H.controller, O = O || {}, fb("'" + z + "' controller", O[z], H, x), O[z] = H);
                    if (V = H.transclude) F = !0, H.$$tlb ||
                        (fb("transclusion", ea, H, x), ea = H), "element" == V ? (Ia = !0, y = H.priority, V = x, x = d.$$element = A(X.createComment(" " + z + ": " + d[z] + " ")), c = x[0], ra(f, wa.call(V, 0), c), S = B(V, e, y, g && g.name, {
                            nonTlbTranscludeDirective: ea
                        })) : (V = A(Kb(c)).contents(), x.empty(), S = B(V, e));
                    if (H.template)
                        if (E = !0, fb("template", I, H, x), I = H, V = N(H.template) ? H.template(x, d) : H.template, V = W(V), H.replace) {
                            g = H;
                            V = Ib.test(V) ? A($(V)) : [];
                            c = V[0];
                            if (1 != V.length || 1 !== c.nodeType) throw ja("tplrt", z, "");
                            ra(f, x, c);
                            sa = {
                                $attr: {}
                            };
                            V = ca(c, [], sa);
                            var Z = a.splice(Ha +
                                1, a.length - (Ha + 1));
                            K && D(V);
                            a = a.concat(V).concat(Z);
                            v(d, sa);
                            sa = a.length
                        } else x.html(V);
                    if (H.templateUrl) E = !0, fb("template", I, H, x), I = H, H.replace && (g = H), J = te(a.splice(Ha, a.length - Ha), x, d, f, F && S, k, q, {
                        controllerDirectives: O,
                        newIsolateScopeDirective: K,
                        templateDirective: I,
                        nonTlbTranscludeDirective: ea
                    }), sa = a.length;
                    else if (H.compile) try {
                        R = H.compile(x, d, S), N(R) ? w(null, R, U, Y) : R && w(R.pre, R.post, U, Y)
                    } catch (ve) {
                        l(ve, ia(x))
                    }
                    H.terminal && (J.terminal = !0, y = Math.max(y, H.priority))
                }
                J.scope = M && !0 === M.scope;
                J.transcludeOnThisElement =
                    F;
                J.templateOnThisElement = E;
                J.transclude = S;
                n.hasElementTranscludeDirective = Ia;
                return J
            }

            function D(a) {
                for (var b = 0, c = a.length; b < c; b++) a[b] = $b(a[b], {
                    $$isolateScope: !0
                })
            }

            function ea(b, e, f, g, p, m, n) {
                if (e === p) return null;
                p = null;
                if (c.hasOwnProperty(e)) {
                    var q;
                    e = a.get(e + d);
                    for (var w = 0, s = e.length; w < s; w++) try {
                        q = e[w], (g === u || g > q.priority) && -1 != q.restrict.indexOf(f) && (m && (q = $b(q, {
                            $$start: m,
                            $$end: n
                        })), b.push(q), p = q)
                    } catch (y) {
                        l(y)
                    }
                }
                return p
            }

            function v(a, b) {
                var c = b.$attr,
                    d = a.$attr,
                    e = a.$$element;
                r(a, function(d, e) {
                    "$" !=
                    e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                r(b, function(b, f) {
                    "class" == f ? (ba(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function te(a, b, c, d, e, f, g, k) {
                var p = [],
                    l, m, w = b[0],
                    s = a.shift(),
                    y = E({}, s, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: s
                    }),
                    J = N(s.templateUrl) ? s.templateUrl(b, c) : s.templateUrl;
                b.empty();
                n.get(t.getTrustedResourceUrl(J), {
                    cache: q
                }).success(function(q) {
                    var n, t;
                    q = W(q);
                    if (s.replace) {
                        q = Ib.test(q) ? A($(q)) : [];
                        n = q[0];
                        if (1 != q.length || 1 !== n.nodeType) throw ja("tplrt", s.name, J);
                        q = {
                            $attr: {}
                        };
                        ra(d, b, n);
                        var B = ca(n, [], q);
                        T(s.scope) && D(B);
                        a = B.concat(a);
                        v(c, q)
                    } else n = w, b.html(q);
                    a.unshift(y);
                    l = I(a, n, c, e, b, s, f, g, k);
                    r(d, function(a, c) {
                        a == n && (d[c] = b[0])
                    });
                    for (m = O(b[0].childNodes, e); p.length;) {
                        q = p.shift();
                        t = p.shift();
                        var K = p.shift(),
                            C = p.shift(),
                            B = b[0];
                        if (t !== w) {
                            var P = t.className;
                            k.hasElementTranscludeDirective &&
                                s.replace || (B = Kb(n));
                            ra(K, A(t), B);
                            ba(A(B), P)
                        }
                        t = l.transcludeOnThisElement ? M(q, l.transclude, C) : C;
                        l(m, q, B, d, t)
                    }
                    p = null
                }).error(function(a, b, c, d) {
                    throw ja("tpload", d.url);
                });
                return function(a, b, c, d, e) {
                    a = e;
                    p ? (p.push(b), p.push(c), p.push(d), p.push(a)) : (l.transcludeOnThisElement && (a = M(b, l.transclude, e)), l(m, b, c, d, a))
                }
            }

            function F(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function fb(a, b, c, d) {
                if (b) throw ja("multidir", b.name, c.name, a, ia(d));
            }

            function x(a,
                c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function(a) {
                        var b = a.parent().length;
                        b && ba(a.parent(), "ng-binding");
                        return function(a, c) {
                            var e = c.parent(),
                                f = e.data("$binding") || [];
                            f.push(d);
                            e.data("$binding", f);
                            b || ba(e, "ng-binding");
                            a.$watch(d, function(a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function z(a, b) {
                if ("srcdoc" == b) return t.HTML;
                var c = Pa(a);
                if ("xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b)) return t.RESOURCE_URL
            }

            function S(a, c, d, e) {
                var f = b(d, !0);
                if (f) {
                    if ("multiple" === e && "SELECT" ===
                        Pa(a)) throw ja("selmulti", ia(a));
                    c.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(c, d, k) {
                                    d = k.$$observers || (k.$$observers = {});
                                    if (g.test(e)) throw ja("nodomevents");
                                    if (f = b(k[e], !0, z(a, e))) k[e] = f(c), (d[e] || (d[e] = [])).$$inter = !0, (k.$$observers && k.$$observers[e].$$scope || c).$watch(f, function(a, b) {
                                        "class" === e && a != b ? k.$updateClass(a, b) : k.$set(e, a)
                                    })
                                }
                            }
                        }
                    })
                }
            }

            function ra(a, b, c) {
                var d = b[0],
                    e = b.length,
                    f = d.parentNode,
                    g, k;
                if (a)
                    for (g = 0, k = a.length; g < k; g++)
                        if (a[g] == d) {
                            a[g++] = c;
                            k = g + e - 1;
                            for (var p = a.length; g <
                                p; g++, k++) k < p ? a[g] = a[k] : delete a[g];
                            a.length -= e - 1;
                            break
                        }
                f && f.replaceChild(c, d);
                a = X.createDocumentFragment();
                a.appendChild(d);
                c[A.expando] = d[A.expando];
                d = 1;
                for (e = b.length; d < e; d++) f = b[d], A(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1
            }

            function rc(a, b) {
                return E(function() {
                    return a.apply(null, arguments)
                }, a, b)
            }
            var Ob = function(a, b) {
                this.$$element = a;
                this.$attr = b || {}
            };
            Ob.prototype = {
                $normalize: qa,
                $addClass: function(a) {
                    a && 0 < a.length && y.addClass(this.$$element, a)
                },
                $removeClass: function(a) {
                    a && 0 <
                        a.length && y.removeClass(this.$$element, a)
                },
                $updateClass: function(a, b) {
                    var c = sc(a, b),
                        d = sc(b, a);
                    0 === c.length ? y.removeClass(this.$$element, d) : 0 === d.length ? y.addClass(this.$$element, c) : y.setClass(this.$$element, c, d)
                },
                $set: function(a, b, c, d) {
                    var e = oc(this.$$element[0], a);
                    e && (this.$$element.prop(a, b), d = e);
                    this[a] = b;
                    d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = nb(a, "-"));
                    e = Pa(this.$$element);
                    if ("A" === e && "href" === a || "IMG" === e && "src" === a) this[a] = b = K(b, "src" === a);
                    !1 !== c && (null === b || b === u ? this.$$element.removeAttr(d) :
                        this.$$element.attr(d, b));
                    (c = this.$$observers) && r(c[a], function(a) {
                        try {
                            a(b)
                        } catch (c) {
                            l(c)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = {}),
                        e = d[a] || (d[a] = []);
                    e.push(b);
                    J.$evalAsync(function() {
                        e.$$inter || b(c[a])
                    });
                    return b
                }
            };
            var sa = b.startSymbol(),
                Ia = b.endSymbol(),
                W = "{{" == sa || "}}" == Ia ? ga : function(a) {
                    return a.replace(/\{\{/g, sa).replace(/}}/g, Ia)
                },
                U = /^ngAttr[A-Z]/;
            return B
        }]
    }

    function qa(b) {
        return ab(b.replace(we, ""))
    }

    function sc(b, a) {
        var c = "",
            d = b.split(/\s+/),
            e = a.split(/\s+/),
            f = 0;
        a: for (; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++)
                if (g == e[h]) continue a;
            c += (0 < c.length ? " " : "") + g
        }
        return c
    }

    function Od() {
        var b = {},
            a = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(a, d) {
            Ea(a, "controller");
            T(a) ? E(b, a) : b[a] = d
        };
        this.$get = ["$injector", "$window", function(c, d) {
            return function(e, f) {
                var g, h, k;
                G(e) && (g = e.match(a), h = g[1], k = g[3], e = b.hasOwnProperty(h) ? b[h] : fc(f.$scope, h, !0) || fc(d, h, !0), Ya(e, h, !0));
                g = c.instantiate(e, f);
                if (k) {
                    if (!f || "object" !== typeof f.$scope) throw z("$controller")("noscp",
                        h || e.name, k);
                    f.$scope[k] = g
                }
                return g
            }
        }]
    }

    function Pd() {
        this.$get = ["$window", function(b) {
            return A(b.document)
        }]
    }

    function Qd() {
        this.$get = ["$log", function(b) {
            return function(a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function tc(b) {
        var a = {},
            c, d, e;
        if (!b) return a;
        r(b.split("\n"), function(b) {
            e = b.indexOf(":");
            c = x($(b.substr(0, e)));
            d = $(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + ", " + d : d)
        });
        return a
    }

    function uc(b) {
        var a = T(b) ? b : u;
        return function(c) {
            a || (a = tc(b));
            return c ? a[x(c)] || null : a
        }
    }

    function vc(b, a, c) {
        if (N(c)) return c(b,
            a);
        r(c, function(c) {
            b = c(b, a)
        });
        return b
    }

    function Td() {
        var b = /^\s*(\[|\{[^\{])/,
            a = /[\}\]]\s*$/,
            c = /^\)\]\}',?\n/,
            d = {
                "Content-Type": "application/json;charset=utf-8"
            },
            e = this.defaults = {
                transformResponse: [function(d) {
                    G(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = ac(d)));
                    return d
                }],
                transformRequest: [function(a) {
                    return T(a) && "[object File]" !== Ba.call(a) && "[object Blob]" !== Ba.call(a) ? oa(a) : a
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: ha(d),
                    put: ha(d),
                    patch: ha(d)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            f = this.interceptors = [],
            g = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, c, d, n, q) {
            function p(a) {
                function b(a) {
                    var d = E({}, a, {
                        data: vc(a.data, a.headers, c.transformResponse)
                    });
                    return 200 <= a.status && 300 > a.status ? d : n.reject(d)
                }
                var c = {
                        method: "get",
                        transformRequest: e.transformRequest,
                        transformResponse: e.transformResponse
                    },
                    d = function(a) {
                        var b = e.headers,
                            c = E({}, a.headers),
                            d, f, b = E({}, b.common, b[x(a.method)]);
                        a: for (d in b) {
                            a = x(d);
                            for (f in c)
                                if (x(f) === a) continue a;
                            c[d] = b[d]
                        }(function(a) {
                            var b;
                            r(a, function(c, d) {
                                N(c) && (b = c(), null != b ? a[d] = b : delete a[d])
                            })
                        })(c);
                        return c
                    }(a);
                E(c, a);
                c.headers = d;
                c.method = La(c.method);
                var f = [function(a) {
                        d = a.headers;
                        var c = vc(a.data, uc(d), a.transformRequest);
                        F(c) && r(d, function(a, b) {
                            "content-type" === x(b) && delete d[b]
                        });
                        F(a.withCredentials) && !F(e.withCredentials) && (a.withCredentials = e.withCredentials);
                        return s(a, c, d).then(b, b)
                    }, u],
                    g = n.when(c);
                for (r(t, function(a) {
                        (a.request || a.requestError) &&
                        f.unshift(a.request, a.requestError);
                        (a.response || a.responseError) && f.push(a.response, a.responseError)
                    }); f.length;) {
                    a = f.shift();
                    var h = f.shift(),
                        g = g.then(a, h)
                }
                g.success = function(a) {
                    g.then(function(b) {
                        a(b.data, b.status, b.headers, c)
                    });
                    return g
                };
                g.error = function(a) {
                    g.then(null, function(b) {
                        a(b.data, b.status, b.headers, c)
                    });
                    return g
                };
                return g
            }

            function s(c, f, g) {
                function m(a, b, c, e) {
                    C && (200 <= a && 300 > a ? C.put(A, [a, b, tc(c), e]) : C.remove(A));
                    q(b, a, c, e);
                    d.$$phase || d.$apply()
                }

                function q(a, b, d, e) {
                    b = Math.max(b, 0);
                    (200 <=
                        b && 300 > b ? t.resolve : t.reject)({
                        data: a,
                        status: b,
                        headers: uc(d),
                        config: c,
                        statusText: e
                    })
                }

                function s() {
                    var a = Ta(p.pendingRequests, c); - 1 !== a && p.pendingRequests.splice(a, 1)
                }
                var t = n.defer(),
                    r = t.promise,
                    C, I, A = J(c.url, c.params);
                p.pendingRequests.push(c);
                r.then(s, s);
                !c.cache && !e.cache || (!1 === c.cache || "GET" !== c.method && "JSONP" !== c.method) || (C = T(c.cache) ? c.cache : T(e.cache) ? e.cache : w);
                if (C)
                    if (I = C.get(A), D(I)) {
                        if (I && N(I.then)) return I.then(s, s), I;
                        L(I) ? q(I[1], I[0], ha(I[2]), I[3]) : q(I, 200, {}, "OK")
                    } else C.put(A, r);
                F(I) &&
                    ((I = Pb(c.url) ? b.cookies()[c.xsrfCookieName || e.xsrfCookieName] : u) && (g[c.xsrfHeaderName || e.xsrfHeaderName] = I), a(c.method, A, f, m, g, c.timeout, c.withCredentials, c.responseType));
                return r
            }

            function J(a, b) {
                if (!b) return a;
                var c = [];
                Sc(b, function(a, b) {
                    null === a || F(a) || (L(a) || (a = [a]), r(a, function(a) {
                        T(a) && (a = va(a) ? a.toISOString() : oa(a));
                        c.push(Da(b) + "=" + Da(a))
                    }))
                });
                0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                return a
            }
            var w = c("$http"),
                t = [];
            r(f, function(a) {
                t.unshift(G(a) ? q.get(a) : q.invoke(a))
            });
            r(g,
                function(a, b) {
                    var c = G(a) ? q.get(a) : q.invoke(a);
                    t.splice(b, 0, {
                        response: function(a) {
                            return c(n.when(a))
                        },
                        responseError: function(a) {
                            return c(n.reject(a))
                        }
                    })
                });
            p.pendingRequests = [];
            (function(a) {
                r(arguments, function(a) {
                    p[a] = function(b, c) {
                        return p(E(c || {}, {
                            method: a,
                            url: b
                        }))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function(a) {
                r(arguments, function(a) {
                    p[a] = function(b, c, d) {
                        return p(E(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            })("post", "put", "patch");
            p.defaults = e;
            return p
        }]
    }

    function xe(b) {
        if (8 >= R && (!b.match(/^(get|post|head|put|delete|options)$/i) ||
                !W.XMLHttpRequest)) return new W.ActiveXObject("Microsoft.XMLHTTP");
        if (W.XMLHttpRequest) return new W.XMLHttpRequest;
        throw z("$httpBackend")("noxhr");
    }

    function Ud() {
        this.$get = ["$browser", "$window", "$document", function(b, a, c) {
            return ye(b, xe, b.defer, a.angular.callbacks, c[0])
        }]
    }

    function ye(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"),
                g = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            g = function(a) {
                bb(f, "load", g);
                bb(f, "error", g);
                e.body.removeChild(f);
                f = null;
                var h = -1,
                    s = "unknown";
                a && ("load" !==
                    a.type || d[b].called || (a = {
                        type: "error"
                    }), s = a.type, h = "error" === a.type ? 404 : 200);
                c && c(h, s)
            };
            sb(f, "load", g);
            sb(f, "error", g);
            8 >= R && (f.onreadystatechange = function() {
                G(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, g({
                    type: "load"
                }))
            });
            e.body.appendChild(f);
            return g
        }
        var g = -1;
        return function(e, k, m, l, n, q, p, s) {
            function J() {
                t = g;
                K && K();
                B && B.abort()
            }

            function w(a, d, e, f, g) {
                O && c.cancel(O);
                K = B = null;
                0 === d && (d = e ? 200 : "file" == xa(k).protocol ? 404 : 0);
                a(1223 === d ? 204 : d, e, f, g || "");
                b.$$completeOutstandingRequest(v)
            }
            var t;
            b.$$incOutstandingRequestCount();
            k = k || b.url();
            if ("jsonp" == x(e)) {
                var y = "_" + (d.counter++).toString(36);
                d[y] = function(a) {
                    d[y].data = a;
                    d[y].called = !0
                };
                var K = f(k.replace("JSON_CALLBACK", "angular.callbacks." + y), y, function(a, b) {
                    w(l, a, d[y].data, "", b);
                    d[y] = v
                })
            } else {
                var B = a(e);
                B.open(e, k, !0);
                r(n, function(a, b) {
                    D(a) && B.setRequestHeader(b, a)
                });
                B.onreadystatechange = function() {
                    if (B && 4 == B.readyState) {
                        var a = null,
                            b = null,
                            c = "";
                        t !== g && (a = B.getAllResponseHeaders(), b = "response" in B ? B.response : B.responseText);
                        t === g &&
                            10 > R || (c = B.statusText);
                        w(l, t || B.status, b, a, c)
                    }
                };
                p && (B.withCredentials = !0);
                if (s) try {
                    B.responseType = s
                } catch (ba) {
                    if ("json" !== s) throw ba;
                }
                B.send(m || null)
            }
            if (0 < q) var O = c(J, q);
            else q && N(q.then) && q.then(J)
        }
    }

    function Rd() {
        var b = "{{",
            a = "}}";
        this.startSymbol = function(a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function(b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(f, m, l) {
                for (var n, q, p = 0, s = [], J = f.length, w = !1, t = []; p < J;) - 1 != (n = f.indexOf(b, p)) && -1 != (q = f.indexOf(a,
                    n + g)) ? (p != n && s.push(f.substring(p, n)), s.push(p = c(w = f.substring(n + g, q))), p.exp = w, p = q + h, w = !0) : (p != J && s.push(f.substring(p)), p = J);
                (J = s.length) || (s.push(""), J = 1);
                if (l && 1 < s.length) throw wc("noconcat", f);
                if (!m || w) return t.length = J, p = function(a) {
                    try {
                        for (var b = 0, c = J, g; b < c; b++) {
                            if ("function" == typeof(g = s[b]))
                                if (g = g(a), g = l ? e.getTrusted(l, g) : e.valueOf(g), null == g) g = "";
                                else switch (typeof g) {
                                    case "string":
                                        break;
                                    case "number":
                                        g = "" + g;
                                        break;
                                    default:
                                        g = oa(g)
                                }
                                t[b] = g
                        }
                        return t.join("")
                    } catch (h) {
                        a = wc("interr", f, h.toString()),
                            d(a)
                    }
                }, p.exp = f, p.parts = s, p
            }
            var g = b.length,
                h = a.length;
            f.startSymbol = function() {
                return b
            };
            f.endSymbol = function() {
                return a
            };
            return f
        }]
    }

    function Sd() {
        this.$get = ["$rootScope", "$window", "$q", function(b, a, c) {
            function d(d, g, h, k) {
                var m = a.setInterval,
                    l = a.clearInterval,
                    n = c.defer(),
                    q = n.promise,
                    p = 0,
                    s = D(k) && !k;
                h = D(h) ? h : 0;
                q.then(null, null, d);
                q.$$intervalId = m(function() {
                    n.notify(p++);
                    0 < h && p >= h && (n.resolve(p), l(q.$$intervalId), delete e[q.$$intervalId]);
                    s || b.$apply()
                }, g);
                e[q.$$intervalId] = n;
                return q
            }
            var e = {};
            d.cancel =
                function(b) {
                    return b && b.$$intervalId in e ? (e[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete e[b.$$intervalId], !0) : !1
                };
            return d
        }]
    }

    function ad() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(b) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }

    function Qb(b) {
        b = b.split("/");
        for (var a = b.length; a--;) b[a] =
            mb(b[a]);
        return b.join("/")
    }

    function xc(b, a, c) {
        b = xa(b, c);
        a.$$protocol = b.protocol;
        a.$$host = b.hostname;
        a.$$port = U(b.port) || ze[b.protocol] || null
    }

    function yc(b, a, c) {
        var d = "/" !== b.charAt(0);
        d && (b = "/" + b);
        b = xa(b, c);
        a.$$path = decodeURIComponent(d && "/" === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
        a.$$search = cc(b.search);
        a.$$hash = decodeURIComponent(b.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function ta(b, a) {
        if (0 === a.indexOf(b)) return a.substr(b.length)
    }

    function Ga(b) {
        var a =
            b.indexOf("#");
        return -1 == a ? b : b.substr(0, a)
    }

    function Rb(b) {
        return b.substr(0, Ga(b).lastIndexOf("/") + 1)
    }

    function zc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = Rb(b);
        xc(b, this, b);
        this.$$parse = function(a) {
            var e = ta(c, a);
            if (!G(e)) throw Sb("ipthprfx", a, c);
            yc(e, this, b);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function() {
            var a = Cb(this.$$search),
                b = this.$$hash ? "#" + mb(this.$$hash) : "";
            this.$$url = Qb(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function(d,
            e) {
            var f, g;
            (f = ta(b, d)) !== u ? (g = f, g = (f = ta(a, f)) !== u ? c + (ta("/", f) || f) : b + g) : (f = ta(c, d)) !== u ? g = c + f : c == d + "/" && (g = c);
            g && this.$$parse(g);
            return !!g
        }
    }

    function Tb(b, a) {
        var c = Rb(b);
        xc(b, this, b);
        this.$$parse = function(d) {
            var e = ta(b, d) || ta(c, d),
                e = "#" == e.charAt(0) ? ta(a, e) : this.$$html5 ? e : "";
            if (!G(e)) throw Sb("ihshprfx", d, a);
            yc(e, this, b);
            d = this.$$path;
            var f = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(b) && (e = e.replace(b, ""));
            f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
            this.$$path = d;
            this.$$compose()
        };
        this.$$compose = function() {
            var c = Cb(this.$$search),
                e = this.$$hash ? "#" + mb(this.$$hash) : "";
            this.$$url = Qb(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
        };
        this.$$parseLinkUrl = function(a, c) {
            return Ga(b) == Ga(a) ? (this.$$parse(a), !0) : !1
        }
    }

    function Ac(b, a) {
        this.$$html5 = !0;
        Tb.apply(this, arguments);
        var c = Rb(b);
        this.$$parseLinkUrl = function(d, e) {
            var f, g;
            b == Ga(d) ? f = d : (g = ta(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose = function() {
            var c = Cb(this.$$search),
                e = this.$$hash ? "#" + mb(this.$$hash) : "";
            this.$$url = Qb(this.$$path) +
                (c ? "?" + c : "") + e;
            this.$$absUrl = b + a + this.$$url
        }
    }

    function tb(b) {
        return function() {
            return this[b]
        }
    }

    function Bc(b, a) {
        return function(c) {
            if (F(c)) return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Vd() {
        var b = "",
            a = !1;
        this.hashPrefix = function(a) {
            return D(a) ? (b = a, this) : b
        };
        this.html5Mode = function(b) {
            return D(b) ? (a = b, this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(c, d, e, f) {
            function g(a) {
                c.$broadcast("$locationChangeSuccess", h.absUrl(), a)
            }
            var h, k = d.baseHref(),
                m = d.url();
            a ? (k = m.substring(0, m.indexOf("/", m.indexOf("//") + 2)) + (k || "/"), e = e.history ? zc : Ac) : (k = Ga(m), e = Tb);
            h = new e(k, "#" + b);
            h.$$parseLinkUrl(m, m);
            var l = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
                if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
                    for (var b = A(a.target);
                        "a" !== x(b[0].nodeName);)
                        if (b[0] === f[0] || !(b = b.parent())[0]) return;
                    var e = b.prop("href"),
                        g = b.attr("href") || b.attr("xlink:href");
                    T(e) && "[object SVGAnimatedString]" === e.toString() && (e = xa(e.animVal).href);
                    l.test(e) || (!e || (b.attr("target") || a.isDefaultPrevented()) ||
                        !h.$$parseLinkUrl(e, g)) || (a.preventDefault(), h.absUrl() != d.url() && (c.$apply(), W.angular["ff-684208-preventDefault"] = !0))
                }
            });
            h.absUrl() != m && d.url(h.absUrl(), !0);
            d.onUrlChange(function(a) {
                h.absUrl() != a && (c.$evalAsync(function() {
                    var b = h.absUrl();
                    h.$$parse(a);
                    c.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (h.$$parse(b), d.url(b)) : g(b)
                }), c.$$phase || c.$digest())
            });
            var n = 0;
            c.$watch(function() {
                var a = d.url(),
                    b = h.$$replace;
                n && a == h.absUrl() || (n++, c.$evalAsync(function() {
                    c.$broadcast("$locationChangeStart",
                        h.absUrl(), a).defaultPrevented ? h.$$parse(a) : (d.url(h.absUrl(), b), g(a))
                }));
                h.$$replace = !1;
                return n
            });
            return h
        }]
    }

    function Wd() {
        var b = !0,
            a = this;
        this.debugEnabled = function(a) {
            return D(a) ? (b = a, this) : b
        };
        this.$get = ["$window", function(c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = c.console || {},
                    e = b[a] || b.log || v;
                a = !1;
                try {
                    a = !!e.apply
                } catch (k) {}
                return a ?
                    function() {
                        var a = [];
                        r(arguments, function(b) {
                            a.push(d(b))
                        });
                        return e.apply(b, a)
                    } : function(a, b) {
                        e(a, null == b ? "" : b)
                    }
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        b && c.apply(a, arguments)
                    }
                }()
            }
        }]
    }

    function ka(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw la("isecfld", a);
        return b
    }

    function ma(b, a) {
        if (b) {
            if (b.constructor === b) throw la("isecfn", a);
            if (b.document &&
                b.location && b.alert && b.setInterval) throw la("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw la("isecdom", a);
            if (b === Object) throw la("isecobj", a);
        }
        return b
    }

    function ub(b, a, c, d, e) {
        ma(b, d);
        e = e || {};
        a = a.split(".");
        for (var f, g = 0; 1 < a.length; g++) {
            f = ka(a.shift(), d);
            var h = ma(b[f], d);
            h || (h = {}, b[f] = h);
            b = h;
            b.then && e.unwrapPromises && (ya(d), "$$v" in b || function(a) {
                a.then(function(b) {
                    a.$$v = b
                })
            }(b), b.$$v === u && (b.$$v = {}), b = b.$$v)
        }
        f = ka(a.shift(), d);
        ma(b[f], d);
        return b[f] = c
    }

    function Qa(b) {
        return "constructor" ==
            b
    }

    function Cc(b, a, c, d, e, f, g) {
        ka(b, f);
        ka(a, f);
        ka(c, f);
        ka(d, f);
        ka(e, f);
        var h = function(a) {
                return ma(a, f)
            },
            k = g.expensiveChecks,
            m = k || Qa(b) ? h : ga,
            l = k || Qa(a) ? h : ga,
            n = k || Qa(c) ? h : ga,
            q = k || Qa(d) ? h : ga,
            p = k || Qa(e) ? h : ga;
        return g.unwrapPromises ? function(g, h) {
            var k = h && h.hasOwnProperty(b) ? h : g,
                t;
            if (null == k) return k;
            (k = m(k[b])) && k.then && (ya(f), "$$v" in k || (t = k, t.$$v = u, t.then(function(a) {
                t.$$v = m(a)
            })), k = m(k.$$v));
            if (!a) return k;
            if (null == k) return u;
            (k = l(k[a])) && k.then && (ya(f), "$$v" in k || (t = k, t.$$v = u, t.then(function(a) {
                t.$$v =
                    l(a)
            })), k = l(k.$$v));
            if (!c) return k;
            if (null == k) return u;
            (k = n(k[c])) && k.then && (ya(f), "$$v" in k || (t = k, t.$$v = u, t.then(function(a) {
                t.$$v = n(a)
            })), k = n(k.$$v));
            if (!d) return k;
            if (null == k) return u;
            (k = q(k[d])) && k.then && (ya(f), "$$v" in k || (t = k, t.$$v = u, t.then(function(a) {
                t.$$v = q(a)
            })), k = q(k.$$v));
            if (!e) return k;
            if (null == k) return u;
            (k = p(k[e])) && k.then && (ya(f), "$$v" in k || (t = k, t.$$v = u, t.then(function(a) {
                t.$$v = p(a)
            })), k = p(k.$$v));
            return k
        } : function(f, g) {
            var h = g && g.hasOwnProperty(b) ? g : f;
            if (null == h) return h;
            h = m(h[b]);
            if (!a) return h;
            if (null == h) return u;
            h = l(h[a]);
            if (!c) return h;
            if (null == h) return u;
            h = n(h[c]);
            if (!d) return h;
            if (null == h) return u;
            h = q(h[d]);
            return e ? null == h ? u : h = p(h[e]) : h
        }
    }

    function Ae(b, a) {
        return function(c, d) {
            return b(c, d, ya, ma, a)
        }
    }

    function Dc(b, a, c) {
        var d = a.expensiveChecks,
            e = d ? Be : Ce;
        if (e.hasOwnProperty(b)) return e[b];
        var f = b.split("."),
            g = f.length,
            h;
        if (a.csp) h = 6 > g ? Cc(f[0], f[1], f[2], f[3], f[4], c, a) : function(b, d) {
            var e = 0,
                h;
            do h = Cc(f[e++], f[e++], f[e++], f[e++], f[e++], c, a)(b, d), d = u, b = h; while (e < g);
            return h
        };
        else {
            var k = "var p;\n";
            d && (k += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var m = d;
            r(f, function(b, e) {
                ka(b, c);
                var f = (e ? "s" : '((l&&l.hasOwnProperty("' + b + '"))?l:s)') + '["' + b + '"]',
                    g = d || Qa(b);
                g && (f = "eso(" + f + ", fe)", m = !0);
                k += "if(s == null) return undefined;\ns=" + f + ";\n";
                a.unwrapPromises && (k += 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=' + (g ? "eso(v)" : "v") + ";});\n}\n s=" + (g ? "eso(s.$$v)" : "s.$$v") + "\n}\n")
            });
            k += "return s;";
            h = new Function("s", "l", "pw", "eso", "fe", k);
            h.toString = aa(k);
            if (m || a.unwrapPromises) h = Ae(h, c)
        }
        "hasOwnProperty" !== b && (e[b] = h);
        return h
    }

    function Xd() {
        var b = {},
            a = {},
            c = {
                csp: !1,
                unwrapPromises: !1,
                logPromiseWarnings: !0,
                expensiveChecks: !1
            };
        this.unwrapPromises = function(a) {
            return D(a) ? (c.unwrapPromises = !!a, this) : c.unwrapPromises
        };
        this.logPromiseWarnings = function(a) {
            return D(a) ? (c.logPromiseWarnings = a, this) : c.logPromiseWarnings
        };
        this.$get = ["$filter", "$sniffer", "$log", function(d, e, f) {
            c.csp = e.csp;
            var g = {
                csp: c.csp,
                unwrapPromises: c.unwrapPromises,
                logPromiseWarnings: c.logPromiseWarnings,
                expensiveChecks: !0
            };
            ya = function(a) {
                c.logPromiseWarnings && !Ec.hasOwnProperty(a) && (Ec[a] = !0, f.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
            };
            return function(e, f) {
                var m;
                switch (typeof e) {
                    case "string":
                        var l = f ? a : b;
                        if (l.hasOwnProperty(e)) return l[e];
                        m = f ? g : c;
                        var n = new Ub(m);
                        m = (new gb(n, d, m)).parse(e);
                        "hasOwnProperty" !== e && (l[e] = m);
                        return m;
                    case "function":
                        return e;
                    default:
                        return v
                }
            }
        }]
    }

    function Zd() {
        this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
            return De(function(a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function De(b, a) {
        function c(a) {
            return a
        }

        function d(a) {
            return g(a)
        }
        var e = function() {
                var g = [],
                    m, l;
                return l = {
                    resolve: function(a) {
                        if (g) {
                            var c = g;
                            g = u;
                            m = f(a);
                            c.length && b(function() {
                                for (var a, b = 0, d = c.length; b < d; b++) a = c[b], m.then(a[0], a[1], a[2])
                            })
                        }
                    },
                    reject: function(a) {
                        l.resolve(h(a))
                    },
                    notify: function(a) {
                        if (g) {
                            var c = g;
                            g.length && b(function() {
                                for (var b, d = 0, e = c.length; d < e; d++) b =
                                    c[d], b[2](a)
                            })
                        }
                    },
                    promise: {
                        then: function(b, f, h) {
                            var l = e(),
                                J = function(d) {
                                    try {
                                        l.resolve((N(b) ? b : c)(d))
                                    } catch (e) {
                                        l.reject(e), a(e)
                                    }
                                },
                                w = function(b) {
                                    try {
                                        l.resolve((N(f) ? f : d)(b))
                                    } catch (c) {
                                        l.reject(c), a(c)
                                    }
                                },
                                t = function(b) {
                                    try {
                                        l.notify((N(h) ? h : c)(b))
                                    } catch (d) {
                                        a(d)
                                    }
                                };
                            g ? g.push([J, w, t]) : m.then(J, w, t);
                            return l.promise
                        },
                        "catch": function(a) {
                            return this.then(null, a)
                        },
                        "finally": function(a) {
                            function b(a, c) {
                                var d = e();
                                c ? d.resolve(a) : d.reject(a);
                                return d.promise
                            }

                            function d(e, f) {
                                var g = null;
                                try {
                                    g = (a || c)()
                                } catch (h) {
                                    return b(h, !1)
                                }
                                return g && N(g.then) ? g.then(function() {
                                    return b(e, f)
                                }, function(a) {
                                    return b(a, !1)
                                }) : b(e, f)
                            }
                            return this.then(function(a) {
                                return d(a, !0)
                            }, function(a) {
                                return d(a, !1)
                            })
                        }
                    }
                }
            },
            f = function(a) {
                return a && N(a.then) ? a : {
                    then: function(c) {
                        var d = e();
                        b(function() {
                            d.resolve(c(a))
                        });
                        return d.promise
                    }
                }
            },
            g = function(a) {
                var b = e();
                b.reject(a);
                return b.promise
            },
            h = function(c) {
                return {
                    then: function(f, g) {
                        var h = e();
                        b(function() {
                            try {
                                h.resolve((N(g) ? g : d)(c))
                            } catch (b) {
                                h.reject(b), a(b)
                            }
                        });
                        return h.promise
                    }
                }
            };
        return {
            defer: e,
            reject: g,
            when: function(h, m, l, n) {
                var q = e(),
                    p, s = function(b) {
                        try {
                            return (N(m) ? m : c)(b)
                        } catch (d) {
                            return a(d), g(d)
                        }
                    },
                    J = function(b) {
                        try {
                            return (N(l) ? l : d)(b)
                        } catch (c) {
                            return a(c), g(c)
                        }
                    },
                    w = function(b) {
                        try {
                            return (N(n) ? n : c)(b)
                        } catch (d) {
                            a(d)
                        }
                    };
                b(function() {
                    f(h).then(function(a) {
                        p || (p = !0, q.resolve(f(a).then(s, J, w)))
                    }, function(a) {
                        p || (p = !0, q.resolve(J(a)))
                    }, function(a) {
                        p || q.notify(w(a))
                    })
                });
                return q.promise
            },
            all: function(a) {
                var b = e(),
                    c = 0,
                    d = L(a) ? [] : {};
                r(a, function(a, e) {
                    c++;
                    f(a).then(function(a) {
                        d.hasOwnProperty(e) || (d[e] = a,
                            --c || b.resolve(d))
                    }, function(a) {
                        d.hasOwnProperty(e) || b.reject(a)
                    })
                });
                0 === c && b.resolve(d);
                return b.promise
            }
        }
    }

    function fe() {
        this.$get = ["$window", "$timeout", function(b, a) {
            var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame,
                d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
                e = !!c,
                f = e ? function(a) {
                    var b = c(a);
                    return function() {
                        d(b)
                    }
                } : function(b) {
                    var c = a(b, 16.66, !1);
                    return function() {
                        a.cancel(c)
                    }
                };
            f.supported =
                e;
            return f
        }]
    }

    function Yd() {
        var b = 10,
            a = z("$rootScope"),
            c = null;
        this.digestTtl = function(a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(d, e, f, g) {
            function h() {
                this.$id = ib();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$postDigestQueue = [];
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$isolateBindings = {}
            }

            function k(b) {
                if (q.$$phase) throw a("inprog", q.$$phase);
                q.$$phase = b
            }

            function m(a, b) {
                var c = f(a);
                Ya(c, b);
                return c
            }

            function l(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function n() {}
            h.prototype = {
                constructor: h,
                $new: function(a) {
                    a ? (a = new h, a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead =
                            this.$$childTail = null;
                        this.$$listeners = {};
                        this.$$listenerCount = {};
                        this.$id = ib();
                        this.$$childScopeClass = null
                    }, this.$$childScopeClass.prototype = this), a = new this.$$childScopeClass);
                    a["this"] = a;
                    a.$parent = this;
                    a.$$prevSibling = this.$$childTail;
                    this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                    return a
                },
                $watch: function(a, b, d) {
                    var e = m(a, "watch"),
                        f = this.$$watchers,
                        g = {
                            fn: b,
                            last: n,
                            get: e,
                            exp: a,
                            eq: !!d
                        };
                    c = null;
                    if (!N(b)) {
                        var h = m(b || v, "listener");
                        g.fn = function(a,
                            b, c) {
                            h(c)
                        }
                    }
                    if ("string" == typeof a && e.constant) {
                        var k = g.fn;
                        g.fn = function(a, b, c) {
                            k.call(this, a, b, c);
                            Ua(f, g)
                        }
                    }
                    f || (f = this.$$watchers = []);
                    f.unshift(g);
                    return function() {
                        Ua(f, g);
                        c = null
                    }
                },
                $watchCollection: function(a, b) {
                    var c = this,
                        d, e, g, h = 1 < b.length,
                        k = 0,
                        l = f(a),
                        m = [],
                        n = {},
                        q = !0,
                        r = 0;
                    return this.$watch(function() {
                        d = l(c);
                        var a, b, f;
                        if (T(d))
                            if (Sa(d))
                                for (e !== m && (e = m, r = e.length = 0, k++), a = d.length, r !== a && (k++, e.length = r = a), b = 0; b < a; b++) f = e[b] !== e[b] && d[b] !== d[b], f || e[b] === d[b] || (k++, e[b] = d[b]);
                            else {
                                e !== n && (e = n = {}, r = 0,
                                    k++);
                                a = 0;
                                for (b in d) d.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ? (f = e[b] !== e[b] && d[b] !== d[b], f || e[b] === d[b] || (k++, e[b] = d[b])) : (r++, e[b] = d[b], k++));
                                if (r > a)
                                    for (b in k++, e) e.hasOwnProperty(b) && !d.hasOwnProperty(b) && (r--, delete e[b])
                            }
                        else e !== d && (e = d, k++);
                        return k
                    }, function() {
                        q ? (q = !1, b(d, d, c)) : b(d, g, c);
                        if (h)
                            if (T(d))
                                if (Sa(d)) {
                                    g = Array(d.length);
                                    for (var a = 0; a < d.length; a++) g[a] = d[a]
                                } else
                                    for (a in g = {}, d) lb.call(d, a) && (g[a] = d[a]);
                        else g = d
                    })
                },
                $digest: function() {
                    var d, f, h, l, m = this.$$asyncQueue,
                        r = this.$$postDigestQueue,
                        K, B, u = b,
                        O, M = [],
                        A, P, C;
                    k("$digest");
                    g.$$checkUrlChange();
                    c = null;
                    do {
                        B = !1;
                        for (O = this; m.length;) {
                            try {
                                C = m.shift(), C.scope.$eval(C.expression)
                            } catch (I) {
                                q.$$phase = null, e(I)
                            }
                            c = null
                        }
                        a: do {
                            if (l = O.$$watchers)
                                for (K = l.length; K--;) try {
                                    if (d = l[K])
                                        if ((f = d.get(O)) !== (h = d.last) && !(d.eq ? Ca(f, h) : "number" === typeof f && "number" === typeof h && isNaN(f) && isNaN(h))) B = !0, c = d, d.last = d.eq ? Ka(f, null) : f, d.fn(f, h === n ? f : h, O), 5 > u && (A = 4 - u, M[A] || (M[A] = []), P = N(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, P += "; newVal: " + oa(f) + "; oldVal: " +
                                            oa(h), M[A].push(P));
                                        else if (d === c) {
                                        B = !1;
                                        break a
                                    }
                                } catch (D) {
                                    q.$$phase = null, e(D)
                                }
                            if (!(l = O.$$childHead || O !== this && O.$$nextSibling))
                                for (; O !== this && !(l = O.$$nextSibling);) O = O.$parent
                        } while (O = l);
                        if ((B || m.length) && !u--) throw q.$$phase = null, a("infdig", b, oa(M));
                    } while (B || m.length);
                    for (q.$$phase = null; r.length;) try {
                        r.shift()()
                    } catch (x) {
                        e(x)
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this !== q && (r(this.$$listenerCount, Bb(null, l, this)), a.$$childHead ==
                            this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = v, this.$on = this.$watch = function() {
                                return v
                            })
                    }
                },
                $eval: function(a, b) {
                    return f(a)(this, b)
                },
                $evalAsync: function(a) {
                    q.$$phase || q.$$asyncQueue.length || g.defer(function() {
                        q.$$asyncQueue.length && q.$digest()
                    });
                    this.$$asyncQueue.push({
                        scope: this,
                        expression: a
                    })
                },
                $$postDigest: function(a) {
                    this.$$postDigestQueue.push(a)
                },
                $apply: function(a) {
                    try {
                        return k("$apply"), this.$eval(a)
                    } catch (b) {
                        e(b)
                    } finally {
                        q.$$phase = null;
                        try {
                            q.$digest()
                        } catch (c) {
                            throw e(c), c;
                        }
                    }
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] ||
                        (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        var d = Ta(c, b); - 1 !== d && (c[d] = null, l(e, 1, a))
                    }
                },
                $emit: function(a, b) {
                    var c = [],
                        d, f = this,
                        g = !1,
                        h = {
                            name: a,
                            targetScope: f,
                            stopPropagation: function() {
                                g = !0
                            },
                            preventDefault: function() {
                                h.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        k = [h].concat(wa.call(arguments, 1)),
                        l, m;
                    do {
                        d = f.$$listeners[a] || c;
                        h.currentScope = f;
                        l = 0;
                        for (m = d.length; l < m; l++)
                            if (d[l]) try {
                                d[l].apply(null, k)
                            } catch (n) {
                                e(n)
                            } else d.splice(l, 1), l--, m--;
                        if (g) break;
                        f = f.$parent
                    } while (f);
                    return h
                },
                $broadcast: function(a, b) {
                    for (var c = this, d = this, f = {
                            name: a,
                            targetScope: this,
                            preventDefault: function() {
                                f.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        }, g = [f].concat(wa.call(arguments, 1)), h, k; c = d;) {
                        f.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (k = d.length; h < k; h++)
                            if (d[h]) try {
                                d[h].apply(null, g)
                            } catch (l) {
                                e(l)
                            } else d.splice(h, 1), h--, k--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                            for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
                    }
                    return f
                }
            };
            var q = new h;
            return q
        }]
    }

    function bd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/,
            a = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(a) {
            return D(a) ? (b = a, this) : b
        };
        this.imgSrcSanitizationWhitelist = function(b) {
            return D(b) ? (a = b, this) : a
        };
        this.$get = function() {
            return function(c, d) {
                var e = d ? a : b,
                    f;
                if (!R || 8 <= R)
                    if (f = xa(c).href, "" !== f && !f.match(e)) return "unsafe:" + f;
                return c
            }
        }
    }

    function Ee(b) {
        if ("self" === b) return b;
        if (G(b)) {
            if (-1 < b.indexOf("***")) throw za("iwcard", b);
            b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
                "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return RegExp("^" + b + "$")
        }
        if (kb(b)) return RegExp("^" + b.source + "$");
        throw za("imatcher");
    }

    function Fc(b) {
        var a = [];
        D(b) && r(b, function(b) {
            a.push(Ee(b))
        });
        return a
    }

    function ae() {
        this.SCE_CONTEXTS = fa;
        var b = ["self"],
            a = [];
        this.resourceUrlWhitelist = function(a) {
            arguments.length && (b = Fc(a));
            return b
        };
        this.resourceUrlBlacklist = function(b) {
            arguments.length && (a = Fc(b));
            return a
        };
        this.$get = ["$injector", function(c) {
            function d(a) {
                var b =
                    function(a) {
                        this.$$unwrapTrustedValue = function() {
                            return a
                        }
                    };
                a && (b.prototype = new a);
                b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }
            var e = function(a) {
                throw za("unsafe");
            };
            c.has("$sanitize") && (e = c.get("$sanitize"));
            var f = d(),
                g = {};
            g[fa.HTML] = d(f);
            g[fa.CSS] = d(f);
            g[fa.URL] = d(f);
            g[fa.JS] = d(f);
            g[fa.RESOURCE_URL] = d(g[fa.URL]);
            return {
                trustAs: function(a, b) {
                    var c = g.hasOwnProperty(a) ? g[a] : null;
                    if (!c) throw za("icontext",
                        a, b);
                    if (null === b || b === u || "" === b) return b;
                    if ("string" !== typeof b) throw za("itype", a);
                    return new c(b)
                },
                getTrusted: function(c, d) {
                    if (null === d || d === u || "" === d) return d;
                    var f = g.hasOwnProperty(c) ? g[c] : null;
                    if (f && d instanceof f) return d.$$unwrapTrustedValue();
                    if (c === fa.RESOURCE_URL) {
                        var f = xa(d.toString()),
                            l, n, q = !1;
                        l = 0;
                        for (n = b.length; l < n; l++)
                            if ("self" === b[l] ? Pb(f) : b[l].exec(f.href)) {
                                q = !0;
                                break
                            }
                        if (q)
                            for (l = 0, n = a.length; l < n; l++)
                                if ("self" === a[l] ? Pb(f) : a[l].exec(f.href)) {
                                    q = !1;
                                    break
                                }
                        if (q) return d;
                        throw za("insecurl",
                            d.toString());
                    }
                    if (c === fa.HTML) return e(d);
                    throw za("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof f ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function $d() {
        var b = !0;
        this.enabled = function(a) {
            arguments.length && (b = !!a);
            return b
        };
        this.$get = ["$parse", "$sniffer", "$sceDelegate", function(a, c, d) {
            if (b && c.msie && 8 > c.msieDocumentMode) throw za("iequirks");
            var e = ha(fa);
            e.isEnabled = function() {
                return b
            };
            e.trustAs = d.trustAs;
            e.getTrusted = d.getTrusted;
            e.valueOf = d.valueOf;
            b || (e.trustAs = e.getTrusted = function(a, b) {
                    return b
                },
                e.valueOf = ga);
            e.parseAs = function(b, c) {
                var d = a(c);
                return d.literal && d.constant ? d : function(a, c) {
                    return e.getTrusted(b, d(a, c))
                }
            };
            var f = e.parseAs,
                g = e.getTrusted,
                h = e.trustAs;
            r(fa, function(a, b) {
                var c = x(b);
                e[ab("parse_as_" + c)] = function(b) {
                    return f(a, b)
                };
                e[ab("get_trusted_" + c)] = function(b) {
                    return g(a, b)
                };
                e[ab("trust_as_" + c)] = function(b) {
                    return h(a, b)
                }
            });
            return e
        }]
    }

    function be() {
        this.$get = ["$window", "$document", function(b, a) {
            var c = {},
                d = U((/android (\d+)/.exec(x((b.navigator || {}).userAgent)) || [])[1]),
                e = /Boxee/i.test((b.navigator || {}).userAgent),
                f = a[0] || {},
                g = f.documentMode,
                h, k = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                m = f.body && f.body.style,
                l = !1,
                n = !1;
            if (m) {
                for (var q in m)
                    if (l = k.exec(q)) {
                        h = l[0];
                        h = h.substr(0, 1).toUpperCase() + h.substr(1);
                        break
                    }
                h || (h = "WebkitOpacity" in m && "webkit");
                l = !!("transition" in m || h + "Transition" in m);
                n = !!("animation" in m || h + "Animation" in m);
                !d || l && n || (l = G(f.body.style.webkitTransition), n = G(f.body.style.webkitAnimation))
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e),
                hashchange: "onhashchange" in b && (!g || 7 <
                    g),
                hasEvent: function(a) {
                    if ("input" == a && 9 == R) return !1;
                    if (F(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b
                    }
                    return c[a]
                },
                csp: Za(),
                vendorPrefix: h,
                transitions: l,
                animations: n,
                android: d,
                msie: R,
                msieDocumentMode: g
            }
        }]
    }

    function de() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(b, a, c, d) {
            function e(e, h, k) {
                var m = c.defer(),
                    l = m.promise,
                    n = D(k) && !k;
                h = a.defer(function() {
                    try {
                        m.resolve(e())
                    } catch (a) {
                        m.reject(a), d(a)
                    } finally {
                        delete f[l.$$timeoutId]
                    }
                    n || b.$apply()
                }, h);
                l.$$timeoutId = h;
                f[h] = m;
                return l
            }
            var f = {};
            e.cancel = function(b) {
                return b && b.$$timeoutId in f ? (f[b.$$timeoutId].reject("canceled"), delete f[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
            };
            return e
        }]
    }

    function xa(b, a) {
        var c = b;
        R && (Y.setAttribute("href", c), c = Y.href);
        Y.setAttribute("href", c);
        return {
            href: Y.href,
            protocol: Y.protocol ? Y.protocol.replace(/:$/, "") : "",
            host: Y.host,
            search: Y.search ? Y.search.replace(/^\?/, "") : "",
            hash: Y.hash ? Y.hash.replace(/^#/, "") : "",
            hostname: Y.hostname,
            port: Y.port,
            pathname: "/" === Y.pathname.charAt(0) ? Y.pathname : "/" + Y.pathname
        }
    }

    function Pb(b) {
        b = G(b) ? xa(b) : b;
        return b.protocol === Gc.protocol && b.host === Gc.host
    }

    function ee() {
        this.$get = aa(W)
    }

    function kc(b) {
        function a(d, e) {
            if (T(d)) {
                var f = {};
                r(d, function(b, c) {
                    f[c] = a(c, b)
                });
                return f
            }
            return b.factory(d + c, e)
        }
        var c = "Filter";
        this.register = a;
        this.$get = ["$injector", function(a) {
            return function(b) {
                return a.get(b + c)
            }
        }];
        a("currency", Hc);
        a("date", Ic);
        a("filter", Fe);
        a("json", Ge);
        a("limitTo", He);
        a("lowercase", Ie);
        a("number", Jc);
        a("orderBy", Kc);
        a("uppercase", Je)
    }

    function Fe() {
        return function(b,
            a, c) {
            if (!L(b)) return b;
            var d = typeof c,
                e = [];
            e.check = function(a) {
                for (var b = 0; b < e.length; b++)
                    if (!e[b](a)) return !1;
                return !0
            };
            "function" !== d && (c = "boolean" === d && c ? function(a, b) {
                return Xa.equals(a, b)
            } : function(a, b) {
                if (a && b && "object" === typeof a && "object" === typeof b) {
                    for (var d in a)
                        if ("$" !== d.charAt(0) && lb.call(a, d) && c(a[d], b[d])) return !0;
                    return !1
                }
                b = ("" + b).toLowerCase();
                return -1 < ("" + a).toLowerCase().indexOf(b)
            });
            var f = function(a, b) {
                if ("string" === typeof b && "!" === b.charAt(0)) return !f(a, b.substr(1));
                switch (typeof a) {
                    case "boolean":
                    case "number":
                    case "string":
                        return c(a,
                            b);
                    case "object":
                        switch (typeof b) {
                            case "object":
                                return c(a, b);
                            default:
                                for (var d in a)
                                    if ("$" !== d.charAt(0) && f(a[d], b)) return !0
                        }
                        return !1;
                    case "array":
                        for (d = 0; d < a.length; d++)
                            if (f(a[d], b)) return !0;
                        return !1;
                    default:
                        return !1
                }
            };
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    a = {
                        $: a
                    };
                case "object":
                    for (var g in a)(function(b) {
                        "undefined" !== typeof a[b] && e.push(function(c) {
                            return f("$" == b ? c : c && c[b], a[b])
                        })
                    })(g);
                    break;
                case "function":
                    e.push(a);
                    break;
                default:
                    return b
            }
            d = [];
            for (g = 0; g < b.length; g++) {
                var h =
                    b[g];
                e.check(h) && d.push(h)
            }
            return d
        }
    }

    function Hc(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            F(d) && (d = a.CURRENCY_SYM);
            return Lc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
        }
    }

    function Jc(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return Lc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function Lc(b, a, c, d, e) {
        if (null == b || !isFinite(b) || T(b)) return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "",
            h = "",
            k = [],
            m = !1;
        if (-1 !== g.indexOf("e")) {
            var l = g.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] &&
                l[3] > e + 1 ? (g = "0", b = 0) : (h = g, m = !0)
        }
        if (m) 0 < e && (-1 < b && 1 > b) && (h = b.toFixed(e));
        else {
            g = (g.split(Mc)[1] || "").length;
            F(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            0 === b && (f = !1);
            b = ("" + b).split(Mc);
            g = b[0];
            b = b[1] || "";
            var l = 0,
                n = a.lgSize,
                q = a.gSize;
            if (g.length >= n + q)
                for (l = g.length - n, m = 0; m < l; m++) 0 === (l - m) % q && 0 !== m && (h += c), h += g.charAt(m);
            for (m = l; m < g.length; m++) 0 === (g.length - m) % n && 0 !== m && (h += c), h += g.charAt(m);
            for (; b.length < e;) b += "0";
            e && "0" !== e && (h += d + b.substr(0,
                e))
        }
        k.push(f ? a.negPre : a.posPre);
        k.push(h);
        k.push(f ? a.negSuf : a.posSuf);
        return k.join("")
    }

    function Vb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;) b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function Z(b, a, c, d) {
        c = c || 0;
        return function(e) {
            e = e["get" + b]();
            if (0 < c || e > -c) e += c;
            0 === e && -12 == c && (e = 12);
            return Vb(e, a, d)
        }
    }

    function vb(b, a) {
        return function(c, d) {
            var e = c["get" + b](),
                f = La(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function Ic(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0,
                    g = 0,
                    h = b[8] ?
                    a.setUTCFullYear : a.setFullYear,
                    k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = U(b[9] + b[10]), g = U(b[9] + b[11]));
                h.call(a, U(b[1]), U(b[2]) - 1, U(b[3]));
                f = U(b[4] || 0) - f;
                g = U(b[5] || 0) - g;
                h = U(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                k.call(a, f, g, h, b)
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e) {
            var f = "",
                g = [],
                h, k;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            G(c) && (c = Ke.test(c) ? U(c) : a(c));
            jb(c) && (c = new Date(c));
            if (!va(c)) return c;
            for (; e;)(k = Le.exec(e)) ? (g = g.concat(wa.call(k, 1)), e = g.pop()) : (g.push(e), e = null);
            r(g, function(a) {
                h = Me[a];
                f += h ? h(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return f
        }
    }

    function Ge() {
        return function(b) {
            return oa(b, !0)
        }
    }

    function He() {
        return function(b, a) {
            if (!L(b) && !G(b)) return b;
            a = Infinity === Math.abs(Number(a)) ? Number(a) : U(a);
            if (G(b)) return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
            var c = [],
                d, e;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            0 < a ? (d = 0, e = a) : (d =
                b.length + a, e = b.length);
            for (; d < e; d++) c.push(b[d]);
            return c
        }
    }

    function Kc(b) {
        return function(a, c, d) {
            function e(a, b) {
                return Wa(b) ? function(b, c) {
                    return a(c, b)
                } : a
            }

            function f(a, b) {
                var c = typeof a,
                    d = typeof b;
                return c == d ? (va(a) && va(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
            }
            if (!Sa(a)) return a;
            c = L(c) ? c : [c];
            0 === c.length && (c = ["+"]);
            c = Uc(c, function(a) {
                var c = !1,
                    d = a || ga;
                if (G(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);
                    if ("" === a) return e(function(a, b) {
                        return f(a, b)
                    }, c);
                    d = b(a);
                    if (d.constant) {
                        var m = d();
                        return e(function(a, b) {
                            return f(a[m], b[m])
                        }, c)
                    }
                }
                return e(function(a, b) {
                    return f(d(a), d(b))
                }, c)
            });
            return wa.call(a).sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e
                }
                return 0
            }, d))
        }
    }

    function Aa(b) {
        N(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return aa(b)
    }

    function Nc(b, a, c, d) {
        function e(a, c) {
            c = c ? "-" + nb(c, "-") : "";
            d.setClass(b, (a ? wb : xb) + c, (a ? xb : wb) + c)
        }
        var f = this,
            g = b.parent().controller("form") ||
            yb,
            h = 0,
            k = f.$error = {},
            m = [];
        f.$name = a.name || a.ngForm;
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        g.$addControl(f);
        b.addClass(Ra);
        e(!0);
        f.$addControl = function(a) {
            Ea(a.$name, "input");
            m.push(a);
            a.$name && (f[a.$name] = a)
        };
        f.$removeControl = function(a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            r(k, function(b, c) {
                f.$setValidity(c, !0, a)
            });
            Ua(m, a)
        };
        f.$setValidity = function(a, b, c) {
            var d = k[a];
            if (b) d && (Ua(d, c), d.length || (h--, h || (e(b), f.$valid = !0, f.$invalid = !1), k[a] = !1, e(!0, a), g.$setValidity(a, !0, f)));
            else {
                h ||
                    e(b);
                if (d) {
                    if (-1 != Ta(d, c)) return
                } else k[a] = d = [], h++, e(!1, a), g.$setValidity(a, !1, f);
                d.push(c);
                f.$valid = !1;
                f.$invalid = !0
            }
        };
        f.$setDirty = function() {
            d.removeClass(b, Ra);
            d.addClass(b, zb);
            f.$dirty = !0;
            f.$pristine = !1;
            g.$setDirty()
        };
        f.$setPristine = function() {
            d.removeClass(b, zb);
            d.addClass(b, Ra);
            f.$dirty = !1;
            f.$pristine = !0;
            r(m, function(a) {
                a.$setPristine()
            })
        }
    }

    function ua(b, a, c, d) {
        b.$setValidity(a, c);
        return c ? d : u
    }

    function Oc(b, a) {
        var c, d;
        if (a)
            for (c = 0; c < a.length; ++c)
                if (d = a[c], b[d]) return !0;
        return !1
    }

    function Ne(b,
        a, c, d, e) {
        T(e) && (b.$$hasNativeValidators = !0, b.$parsers.push(function(f) {
            if (b.$error[a] || Oc(e, d) || !Oc(e, c)) return f;
            b.$setValidity(a, !1)
        }))
    }

    function Ab(b, a, c, d, e, f) {
        var g = a.prop(Oe),
            h = a[0].placeholder,
            k = {},
            m = x(a[0].type);
        d.$$validityState = g;
        if (!e.android) {
            var l = !1;
            a.on("compositionstart", function(a) {
                l = !0
            });
            a.on("compositionend", function() {
                l = !1;
                n()
            })
        }
        var n = function(e) {
            if (!l) {
                var f = a.val();
                if (R && "input" === (e || k).type && a[0].placeholder !== h) h = a[0].placeholder;
                else if ("password" !== m && Wa(c.ngTrim || "T") &&
                    (f = $(f)), e = g && d.$$hasNativeValidators, d.$viewValue !== f || "" === f && e) b.$root.$$phase ? d.$setViewValue(f) : b.$apply(function() {
                    d.$setViewValue(f)
                })
            }
        };
        if (e.hasEvent("input")) a.on("input", n);
        else {
            var q, p = function() {
                q || (q = f.defer(function() {
                    n();
                    q = null
                }))
            };
            a.on("keydown", function(a) {
                a = a.keyCode;
                91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || p()
            });
            if (e.hasEvent("paste")) a.on("paste cut", p)
        }
        a.on("change", n);
        d.$render = function() {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        };
        var s = c.ngPattern;
        s && ((e = s.match(/^\/(.*)\/([gim]*)$/)) ?
            (s = RegExp(e[1], e[2]), e = function(a) {
                return ua(d, "pattern", d.$isEmpty(a) || s.test(a), a)
            }) : e = function(c) {
                var e = b.$eval(s);
                if (!e || !e.test) throw z("ngPattern")("noregexp", s, e, ia(a));
                return ua(d, "pattern", d.$isEmpty(c) || e.test(c), c)
            }, d.$formatters.push(e), d.$parsers.push(e));
        if (c.ngMinlength) {
            var r = U(c.ngMinlength);
            e = function(a) {
                return ua(d, "minlength", d.$isEmpty(a) || a.length >= r, a)
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var w = U(c.ngMaxlength);
            e = function(a) {
                return ua(d, "maxlength", d.$isEmpty(a) ||
                    a.length <= w, a)
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
    }

    function Wb(b, a) {
        b = "ngClass" + b;
        return ["$animate", function(c) {
            function d(a, b) {
                var c = [],
                    d = 0;
                a: for (; d < a.length; d++) {
                    for (var e = a[d], l = 0; l < b.length; l++)
                        if (e == b[l]) continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                if (!L(a)) {
                    if (G(a)) return a.split(" ");
                    if (T(a)) {
                        var b = [];
                        r(a, function(a, c) {
                            a && (b = b.concat(c.split(" ")))
                        });
                        return b
                    }
                }
                return a
            }
            return {
                restrict: "AC",
                link: function(f, g, h) {
                    function k(a, b) {
                        var c = g.data("$classCounts") || {},
                            d = [];
                        r(a, function(a) {
                            if (0 <
                                b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                        });
                        g.data("$classCounts", c);
                        return d.join(" ")
                    }

                    function m(b) {
                        if (!0 === a || f.$index % 2 === a) {
                            var m = e(b || []);
                            if (!l) {
                                var p = k(m, 1);
                                h.$addClass(p)
                            } else if (!Ca(b, l)) {
                                var s = e(l),
                                    p = d(m, s),
                                    m = d(s, m),
                                    m = k(m, -1),
                                    p = k(p, 1);
                                0 === p.length ? c.removeClass(g, m) : 0 === m.length ? c.addClass(g, p) : c.setClass(g, p, m)
                            }
                        }
                        l = ha(b)
                    }
                    var l;
                    f.$watch(h[b], m, !0);
                    h.$observe("class", function(a) {
                        m(f.$eval(h[b]))
                    });
                    "ngClass" !== b && f.$watch("$index", function(c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var l = e(f.$eval(h[b]));
                            g === a ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g))
                        }
                    })
                }
            }
        }]
    }
    var Oe = "validity",
        x = function(b) {
            return G(b) ? b.toLowerCase() : b
        },
        lb = Object.prototype.hasOwnProperty,
        La = function(b) {
            return G(b) ? b.toUpperCase() : b
        },
        R, A, Fa, wa = [].slice,
        Pe = [].push,
        Ba = Object.prototype.toString,
        Va = z("ng"),
        Xa = W.angular || (W.angular = {}),
        $a, Pa, na = ["0", "0", "0"];
    R = U((/msie (\d+)/.exec(x(navigator.userAgent)) || [])[1]);
    isNaN(R) && (R = U((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent)) || [])[1]));
    v.$inject = [];
    ga.$inject = [];
    var L =
        function() {
            return N(Array.isArray) ? Array.isArray : function(b) {
                return "[object Array]" === Ba.call(b)
            }
        }(),
        $ = function() {
            return String.prototype.trim ? function(b) {
                return G(b) ? b.trim() : b
            } : function(b) {
                return G(b) ? b.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : b
            }
        }();
    Pa = 9 > R ? function(b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && "HTML" != b.scopeName ? La(b.scopeName + ":" + b.nodeName) : b.nodeName
    } : function(b) {
        return b.nodeName ? b.nodeName : b[0].nodeName
    };
    var Za = function() {
            if (D(Za.isActive_)) return Za.isActive_;
            var b = !(!X.querySelector("[ng-csp]") &&
                !X.querySelector("[data-ng-csp]"));
            if (!b) try {
                new Function("")
            } catch (a) {
                b = !0
            }
            return Za.isActive_ = b
        },
        Xc = /[A-Z]/g,
        $c = {
            full: "1.2.27",
            major: 1,
            minor: 2,
            dot: 27,
            codeName: "prime-factorization"
        };
    S.expando = "ng339";
    var cb = S.cache = {},
        me = 1,
        sb = W.document.addEventListener ? function(b, a, c) {
            b.addEventListener(a, c, !1)
        } : function(b, a, c) {
            b.attachEvent("on" + a, c)
        },
        bb = W.document.removeEventListener ? function(b, a, c) {
            b.removeEventListener(a, c, !1)
        } : function(b, a, c) {
            b.detachEvent("on" + a, c)
        };
    S._data = function(b) {
        return this.cache[b[this.expando]] || {}
    };
    var he = /([\:\-\_]+(.))/g,
        ie = /^moz([A-Z])/,
        Hb = z("jqLite"),
        je = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Ib = /<|&#?\w+;/,
        ke = /<([\w:]+)/,
        le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        da = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    da.optgroup = da.option;
    da.tbody = da.tfoot = da.colgroup =
        da.caption = da.thead;
    da.th = da.td;
    var Oa = S.prototype = {
            ready: function(b) {
                function a() {
                    c || (c = !0, b())
                }
                var c = !1;
                "complete" === X.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), S(W).on("load", a))
            },
            toString: function() {
                var b = [];
                r(this, function(a) {
                    b.push("" + a)
                });
                return "[" + b.join(", ") + "]"
            },
            eq: function(b) {
                return 0 <= b ? A(this[b]) : A(this[this.length + b])
            },
            length: 0,
            push: Pe,
            sort: [].sort,
            splice: [].splice
        },
        rb = {};
    r("multiple selected checked disabled readOnly required open".split(" "), function(b) {
        rb[x(b)] = b
    });
    var pc = {};
    r("input select option textarea button form details".split(" "), function(b) {
        pc[La(b)] = !0
    });
    r({
        data: Mb,
        removeData: Lb
    }, function(b, a) {
        S[a] = b
    });
    r({
        data: Mb,
        inheritedData: qb,
        scope: function(b) {
            return A.data(b, "$scope") || qb(b.parentNode || b, ["$isolateScope", "$scope"])
        },
        isolateScope: function(b) {
            return A.data(b, "$isolateScope") || A.data(b, "$isolateScopeNoTemplate")
        },
        controller: mc,
        injector: function(b) {
            return qb(b, "$injector")
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a)
        },
        hasClass: Nb,
        css: function(b,
            a, c) {
            a = ab(a);
            if (D(c)) b.style[a] = c;
            else {
                var d;
                8 >= R && (d = b.currentStyle && b.currentStyle[a], "" === d && (d = "auto"));
                d = d || b.style[a];
                8 >= R && (d = "" === d ? u : d);
                return d
            }
        },
        attr: function(b, a, c) {
            var d = x(a);
            if (rb[d])
                if (D(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
                else return b[a] || (b.attributes.getNamedItem(a) || v).specified ? d : u;
            else if (D(c)) b.setAttribute(a, c);
            else if (b.getAttribute) return b = b.getAttribute(a, 2), null === b ? u : b
        },
        prop: function(b, a, c) {
            if (D(c)) b[a] = c;
            else return b[a]
        },
        text: function() {
            function b(b,
                d) {
                var e = a[b.nodeType];
                if (F(d)) return e ? b[e] : "";
                b[e] = d
            }
            var a = [];
            9 > R ? (a[1] = "innerText", a[3] = "nodeValue") : a[1] = a[3] = "textContent";
            b.$dv = "";
            return b
        }(),
        val: function(b, a) {
            if (F(a)) {
                if ("SELECT" === Pa(b) && b.multiple) {
                    var c = [];
                    r(b.options, function(a) {
                        a.selected && c.push(a.value || a.text)
                    });
                    return 0 === c.length ? null : c
                }
                return b.value
            }
            b.value = a
        },
        html: function(b, a) {
            if (F(a)) return b.innerHTML;
            for (var c = 0, d = b.childNodes; c < d.length; c++) Ma(d[c]);
            b.innerHTML = a
        },
        empty: nc
    }, function(b, a) {
        S.prototype[a] = function(a, d) {
            var e,
                f, g = this.length;
            if (b !== nc && (2 == b.length && b !== Nb && b !== mc ? a : d) === u) {
                if (T(a)) {
                    for (e = 0; e < g; e++)
                        if (b === Mb) b(this[e], a);
                        else
                            for (f in a) b(this[e], f, a[f]);
                    return this
                }
                e = b.$dv;
                g = e === u ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = b(this[f], a, d);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++) b(this[e], a, d);
            return this
        }
    });
    r({
        removeData: Lb,
        dealoc: Ma,
        on: function a(c, d, e, f) {
            if (D(f)) throw Hb("onargs");
            var g = pa(c, "events"),
                h = pa(c, "handle");
            g || pa(c, "events", g = {});
            h || pa(c, "handle", h = ne(c, g));
            r(d.split(" "), function(d) {
                var f = g[d];
                if (!f) {
                    if ("mouseenter" ==
                        d || "mouseleave" == d) {
                        var l = X.body.contains || X.body.compareDocumentPosition ? function(a, c) {
                            var d = 9 === a.nodeType ? a.documentElement : a,
                                e = c && c.parentNode;
                            return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
                        } : function(a, c) {
                            if (c)
                                for (; c = c.parentNode;)
                                    if (c === a) return !0;
                            return !1
                        };
                        g[d] = [];
                        a(c, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[d], function(a) {
                            var c = a.relatedTarget;
                            c && (c === this || l(this, c)) || h(a, d)
                        })
                    } else sb(c, d, h), g[d] = [];
                    f = g[d]
                }
                f.push(e)
            })
        },
        off: lc,
        one: function(a, c, d) {
            a = A(a);
            a.on(c, function f() {
                a.off(c, d);
                a.off(c, f)
            });
            a.on(c, d)
        },
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            Ma(a);
            r(new S(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c
            })
        },
        children: function(a) {
            var c = [];
            r(a.childNodes, function(a) {
                1 === a.nodeType && c.push(a)
            });
            return c
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || []
        },
        append: function(a, c) {
            r(new S(c), function(c) {
                1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c)
            })
        },
        prepend: function(a,
            c) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                r(new S(c), function(c) {
                    a.insertBefore(c, d)
                })
            }
        },
        wrap: function(a, c) {
            c = A(c)[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        },
        remove: function(a) {
            Ma(a);
            var c = a.parentNode;
            c && c.removeChild(a)
        },
        after: function(a, c) {
            var d = a,
                e = a.parentNode;
            r(new S(c), function(a) {
                e.insertBefore(a, d.nextSibling);
                d = a
            })
        },
        addClass: pb,
        removeClass: ob,
        toggleClass: function(a, c, d) {
            c && r(c.split(" "), function(c) {
                var f = d;
                F(f) && (f = !Nb(a, c));
                (f ? pb : ob)(a, c)
            })
        },
        parent: function(a) {
            return (a =
                a.parentNode) && 11 !== a.nodeType ? a : null
        },
        next: function(a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            for (a = a.nextSibling; null != a && 1 !== a.nodeType;) a = a.nextSibling;
            return a
        },
        find: function(a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : []
        },
        clone: Kb,
        triggerHandler: function(a, c, d) {
            var e, f;
            e = c.type || c;
            var g = (pa(a, "events") || {})[e];
            g && (e = {
                    preventDefault: function() {
                        this.defaultPrevented = !0
                    },
                    isDefaultPrevented: function() {
                        return !0 === this.defaultPrevented
                    },
                    stopPropagation: v,
                    type: e,
                    target: a
                },
                c.type && (e = E(e, c)), c = ha(g), f = d ? [e].concat(d) : [e], r(c, function(c) {
                    c.apply(a, f)
                }))
        }
    }, function(a, c) {
        S.prototype[c] = function(c, e, f) {
            for (var g, h = 0; h < this.length; h++) F(g) ? (g = a(this[h], c, e, f), D(g) && (g = A(g))) : Jb(g, a(this[h], c, e, f));
            return D(g) ? g : this
        };
        S.prototype.bind = S.prototype.on;
        S.prototype.unbind = S.prototype.off
    });
    db.prototype = {
        put: function(a, c) {
            this[Na(a, this.nextUid)] = c
        },
        get: function(a) {
            return this[Na(a, this.nextUid)]
        },
        remove: function(a) {
            var c = this[a = Na(a, this.nextUid)];
            delete this[a];
            return c
        }
    };
    var pe =
        /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        qe = /,/,
        re = /^\s*(_?)(\S+?)\1\s*$/,
        oe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        eb = z("$injector"),
        Qe = z("$animate"),
        Ld = ["$provide", function(a) {
            this.$$selectors = {};
            this.register = function(c, d) {
                var e = c + "-animation";
                if (c && "." != c.charAt(0)) throw Qe("notcsel", c);
                this.$$selectors[c.substr(1)] = e;
                a.factory(e, d)
            };
            this.classNameFilter = function(a) {
                1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
                return this.$$classNameFilter
            };
            this.$get = ["$timeout", "$$asyncCallback",
                function(a, d) {
                    return {
                        enter: function(a, c, g, h) {
                            g ? g.after(a) : (c && c[0] || (c = g.parent()), c.append(a));
                            h && d(h)
                        },
                        leave: function(a, c) {
                            a.remove();
                            c && d(c)
                        },
                        move: function(a, c, d, h) {
                            this.enter(a, c, d, h)
                        },
                        addClass: function(a, c, g) {
                            c = G(c) ? c : L(c) ? c.join(" ") : "";
                            r(a, function(a) {
                                pb(a, c)
                            });
                            g && d(g)
                        },
                        removeClass: function(a, c, g) {
                            c = G(c) ? c : L(c) ? c.join(" ") : "";
                            r(a, function(a) {
                                ob(a, c)
                            });
                            g && d(g)
                        },
                        setClass: function(a, c, g, h) {
                            r(a, function(a) {
                                pb(a, c);
                                ob(a, g)
                            });
                            h && d(h)
                        },
                        enabled: v
                    }
                }
            ]
        }],
        ja = z("$compile");
    gc.$inject = ["$provide", "$$sanitizeUriProvider"];
    var we = /^(x[\:\-_]|data[\:\-_])/i,
        wc = z("$interpolate"),
        Re = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        ze = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Sb = z("$location");
    Ac.prototype = Tb.prototype = zc.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: tb("$$absUrl"),
        url: function(a) {
            if (F(a)) return this.$$url;
            a = Re.exec(a);
            a[1] && this.path(decodeURIComponent(a[1]));
            (a[2] || a[1]) && this.search(a[3] || "");
            this.hash(a[5] || "");
            return this
        },
        protocol: tb("$$protocol"),
        host: tb("$$host"),
        port: tb("$$port"),
        path: Bc("$$path", function(a) {
            a = null !== a ? a.toString() :
                "";
            return "/" == a.charAt(0) ? a : "/" + a
        }),
        search: function(a, c) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (G(a) || jb(a)) a = a.toString(), this.$$search = cc(a);
                    else if (T(a)) r(a, function(c, e) {
                        null == c && delete a[e]
                    }), this.$$search = a;
                    else throw Sb("isrcharg");
                    break;
                default:
                    F(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
            }
            this.$$compose();
            return this
        },
        hash: Bc("$$hash", function(a) {
            return null !== a ? a.toString() : ""
        }),
        replace: function() {
            this.$$replace = !0;
            return this
        }
    };
    var la = z("$parse"),
        Ec = {},
        ya, Se = Function.prototype.call,
        Te = Function.prototype.apply,
        Pc = Function.prototype.bind,
        hb = {
            "null": function() {
                return null
            },
            "true": function() {
                return !0
            },
            "false": function() {
                return !1
            },
            undefined: v,
            "+": function(a, c, d, e) {
                d = d(a, c);
                e = e(a, c);
                return D(d) ? D(e) ? d + e : d : D(e) ? e : u
            },
            "-": function(a, c, d, e) {
                d = d(a, c);
                e = e(a, c);
                return (D(d) ? d : 0) - (D(e) ? e : 0)
            },
            "*": function(a, c, d, e) {
                return d(a, c) * e(a, c)
            },
            "/": function(a, c, d, e) {
                return d(a, c) / e(a, c)
            },
            "%": function(a, c, d, e) {
                return d(a, c) % e(a, c)
            },
            "^": function(a, c, d, e) {
                return d(a, c) ^
                    e(a, c)
            },
            "=": v,
            "===": function(a, c, d, e) {
                return d(a, c) === e(a, c)
            },
            "!==": function(a, c, d, e) {
                return d(a, c) !== e(a, c)
            },
            "==": function(a, c, d, e) {
                return d(a, c) == e(a, c)
            },
            "!=": function(a, c, d, e) {
                return d(a, c) != e(a, c)
            },
            "<": function(a, c, d, e) {
                return d(a, c) < e(a, c)
            },
            ">": function(a, c, d, e) {
                return d(a, c) > e(a, c)
            },
            "<=": function(a, c, d, e) {
                return d(a, c) <= e(a, c)
            },
            ">=": function(a, c, d, e) {
                return d(a, c) >= e(a, c)
            },
            "&&": function(a, c, d, e) {
                return d(a, c) && e(a, c)
            },
            "||": function(a, c, d, e) {
                return d(a, c) || e(a, c)
            },
            "&": function(a, c, d, e) {
                return d(a,
                    c) & e(a, c)
            },
            "|": function(a, c, d, e) {
                return e(a, c)(a, c, d(a, c))
            },
            "!": function(a, c, d) {
                return !d(a, c)
            }
        },
        Ue = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        Ub = function(a) {
            this.options = a
        };
    Ub.prototype = {
        constructor: Ub,
        lex: function(a) {
            this.text = a;
            this.index = 0;
            this.ch = u;
            this.lastCh = ":";
            for (this.tokens = []; this.index < this.text.length;) {
                this.ch = this.text.charAt(this.index);
                if (this.is("\"'")) this.readString(this.ch);
                else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
                else if (this.isIdent(this.ch)) this.readIdent();
                else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch
                }), this.index++;
                else if (this.isWhitespace(this.ch)) {
                    this.index++;
                    continue
                } else {
                    a = this.ch + this.peek();
                    var c = a + this.peek(2),
                        d = hb[this.ch],
                        e = hb[a],
                        f = hb[c];
                    f ? (this.tokens.push({
                        index: this.index,
                        text: c,
                        fn: f
                    }), this.index += 3) : e ? (this.tokens.push({
                        index: this.index,
                        text: a,
                        fn: e
                    }), this.index += 2) : d ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: d
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index +
                        1)
                }
                this.lastCh = this.ch
            }
            return this.tokens
        },
        is: function(a) {
            return -1 !== a.indexOf(this.ch)
        },
        was: function(a) {
            return -1 !== a.indexOf(this.lastCh)
        },
        peek: function(a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        },
        isNumber: function(a) {
            return "0" <= a && "9" >= a
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        },
        isIdent: function(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a)
        },
        throwError: function(a, c, d) {
            d = d || this.index;
            c = D(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
            throw la("lexerr", a, c, this.text);
        },
        readNumber: function() {
            for (var a = "", c = this.index; this.index < this.text.length;) {
                var d = x(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d;
                else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e)) a += d;
                    else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d;
                    else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length -
                            1)) break;
                    else this.throwError("Invalid exponent")
                }
                this.index++
            }
            a *= 1;
            this.tokens.push({
                index: c,
                text: a,
                literal: !0,
                constant: !0,
                fn: function() {
                    return a
                }
            })
        },
        readIdent: function() {
            for (var a = this, c = "", d = this.index, e, f, g, h; this.index < this.text.length;) {
                h = this.text.charAt(this.index);
                if ("." === h || this.isIdent(h) || this.isNumber(h)) "." === h && (e = this.index), c += h;
                else break;
                this.index++
            }
            if (e)
                for (f = this.index; f < this.text.length;) {
                    h = this.text.charAt(f);
                    if ("(" === h) {
                        g = c.substr(e - d + 1);
                        c = c.substr(0, e - d);
                        this.index = f;
                        break
                    }
                    if (this.isWhitespace(h)) f++;
                    else break
                }
            d = {
                index: d,
                text: c
            };
            if (hb.hasOwnProperty(c)) d.fn = hb[c], d.literal = !0, d.constant = !0;
            else {
                var k = Dc(c, this.options, this.text);
                d.fn = E(function(a, c) {
                    return k(a, c)
                }, {
                    assign: function(d, e) {
                        return ub(d, c, e, a.text, a.options)
                    }
                })
            }
            this.tokens.push(d);
            g && (this.tokens.push({
                index: e,
                text: "."
            }), this.tokens.push({
                index: e + 1,
                text: g
            }))
        },
        readString: function(a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length;) {
                var g = this.text.charAt(this.index),
                    e = e + g;
                if (f) "u" === g ? (f = this.text.substring(this.index +
                    1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Ue[g] || g, f = !1;
                else if ("\\" === g) f = !0;
                else {
                    if (g === a) {
                        this.index++;
                        this.tokens.push({
                            index: c,
                            text: e,
                            string: d,
                            literal: !0,
                            constant: !0,
                            fn: function() {
                                return d
                            }
                        });
                        return
                    }
                    d += g
                }
                this.index++
            }
            this.throwError("Unterminated quote", c)
        }
    };
    var gb = function(a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d
    };
    gb.ZERO = E(function() {
        return 0
    }, {
        constant: !0
    });
    gb.prototype = {
        constructor: gb,
        parse: function(a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            a.literal = !!a.literal;
            a.constant = !!a.constant;
            return a
        },
        primary: function() {
            var a;
            if (this.expect("(")) a = this.filterChain(), this.consume(")");
            else if (this.expect("[")) a = this.arrayDeclaration();
            else if (this.expect("{")) a = this.object();
            else {
                var c = this.expect();
                (a = c.fn) || this.throwError("not a primary expression", c);
                a.literal = !!c.literal;
                a.constant = !!c.constant
            }
            for (var d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        },
        throwError: function(a, c) {
            throw la("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw la("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function(a, c, d, e) {
            if (0 < this.tokens.length) {
                var f = this.tokens[0],
                    g = f.text;
                if (g ===
                    a || g === c || g === d || g === e || !(a || c || d || e)) return f
            }
            return !1
        },
        expect: function(a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
        },
        consume: function(a) {
            this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
        },
        unaryFn: function(a, c) {
            return E(function(d, e) {
                return a(d, e, c)
            }, {
                constant: c.constant
            })
        },
        ternaryFn: function(a, c, d) {
            return E(function(e, f) {
                return a(e, f) ? c(e, f) : d(e, f)
            }, {
                constant: a.constant && c.constant && d.constant
            })
        },
        binaryFn: function(a, c, d) {
            return E(function(e, f) {
                return c(e,
                    f, a, d)
            }, {
                constant: a.constant && d.constant
            })
        },
        statements: function() {
            for (var a = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(c, d) {
                    for (var e, f = 0; f < a.length; f++) {
                        var g = a[f];
                        g && (e = g(c, d))
                    }
                    return e
                }
        },
        filterChain: function() {
            for (var a = this.expression(), c;;)
                if (c = this.expect("|")) a = this.binaryFn(a, c.fn, this.filter());
                else return a
        },
        filter: function() {
            for (var a = this.expect(), c = this.$filter(a.text), d = [];;)
                if (a = this.expect(":")) d.push(this.expression());
                else {
                    var e = function(a, e, h) {
                        h = [h];
                        for (var k = 0; k < d.length; k++) h.push(d[k](a, e));
                        return c.apply(a, h)
                    };
                    return function() {
                        return e
                    }
                }
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var a = this.ternary(),
                c, d;
            return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), function(d, f) {
                return a.assign(d, c(d, f), f)
            }) : a
        },
        ternary: function() {
            var a = this.logicalOR(),
                c, d;
            if (this.expect("?")) {
                c = this.assignment();
                if (d = this.expect(":")) return this.ternaryFn(a, c, this.assignment());
                this.throwError("expected :", d)
            } else return a
        },
        logicalOR: function() {
            for (var a = this.logicalAND(), c;;)
                if (c = this.expect("||")) a = this.binaryFn(a, c.fn, this.logicalAND());
                else return a
        },
        logicalAND: function() {
            var a = this.equality(),
                c;
            if (c = this.expect("&&")) a = this.binaryFn(a, c.fn, this.logicalAND());
            return a
        },
        equality: function() {
            var a = this.relational(),
                c;
            if (c = this.expect("==", "!=", "===", "!==")) a = this.binaryFn(a, c.fn, this.equality());
            return a
        },
        relational: function() {
            var a = this.additive(),
                c;
            if (c = this.expect("<", ">", "<=", ">=")) a = this.binaryFn(a, c.fn, this.relational());
            return a
        },
        additive: function() {
            for (var a = this.multiplicative(), c; c = this.expect("+", "-");) a = this.binaryFn(a, c.fn, this.multiplicative());
            return a
        },
        multiplicative: function() {
            for (var a = this.unary(), c; c = this.expect("*", "/", "%");) a = this.binaryFn(a, c.fn, this.unary());
            return a
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(gb.ZERO, a.fn,
                this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
        },
        fieldAccess: function(a) {
            var c = this,
                d = this.expect().text,
                e = Dc(d, this.options, this.text);
            return E(function(c, d, h) {
                return e(h || a(c, d))
            }, {
                assign: function(e, g, h) {
                    (h = a(e, h)) || a.assign(e, h = {});
                    return ub(h, d, g, c.text, c.options)
                }
            })
        },
        objectIndex: function(a) {
            var c = this,
                d = this.expression();
            this.consume("]");
            return E(function(e, f) {
                var g = a(e, f),
                    h = d(e, f),
                    k;
                ka(h, c.text);
                if (!g) return u;
                (g = ma(g[h], c.text)) && (g.then && c.options.unwrapPromises) &&
                (k = g, "$$v" in g || (k.$$v = u, k.then(function(a) {
                    k.$$v = a
                })), g = g.$$v);
                return g
            }, {
                assign: function(e, f, g) {
                    var h = ka(d(e, g), c.text);
                    (g = ma(a(e, g), c.text)) || a.assign(e, g = {});
                    return g[h] = f
                }
            })
        },
        functionCall: function(a, c) {
            var d = [];
            if (")" !== this.peekToken().text) {
                do d.push(this.expression()); while (this.expect(","))
            }
            this.consume(")");
            var e = this;
            return function(f, g) {
                for (var h = [], k = c ? c(f, g) : f, m = 0; m < d.length; m++) h.push(ma(d[m](f, g), e.text));
                m = a(f, g, k) || v;
                ma(k, e.text);
                var l = e.text;
                if (m) {
                    if (m.constructor === m) throw la("isecfn",
                        l);
                    if (m === Se || m === Te || Pc && m === Pc) throw la("isecff", l);
                }
                h = m.apply ? m.apply(k, h) : m(h[0], h[1], h[2], h[3], h[4]);
                return ma(h, e.text)
            }
        },
        arrayDeclaration: function() {
            var a = [],
                c = !0;
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    var d = this.expression();
                    a.push(d);
                    d.constant || (c = !1)
                } while (this.expect(","))
            }
            this.consume("]");
            return E(function(c, d) {
                for (var g = [], h = 0; h < a.length; h++) g.push(a[h](c, d));
                return g
            }, {
                literal: !0,
                constant: c
            })
        },
        object: function() {
            var a = [],
                c = !0;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    var d = this.expect(),
                        d = d.string || d.text;
                    this.consume(":");
                    var e = this.expression();
                    a.push({
                        key: d,
                        value: e
                    });
                    e.constant || (c = !1)
                } while (this.expect(","))
            }
            this.consume("}");
            return E(function(c, d) {
                for (var e = {}, k = 0; k < a.length; k++) {
                    var m = a[k];
                    e[m.key] = m.value(c, d)
                }
                return e
            }, {
                literal: !0,
                constant: c
            })
        }
    };
    var Ce = {},
        Be = {},
        za = z("$sce"),
        fa = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Y = X.createElement("a"),
        Gc = xa(W.location.href, !0);
    kc.$inject = ["$provide"];
    Hc.$inject = ["$locale"];
    Jc.$inject = ["$locale"];
    var Mc = ".",
        Me = {
            yyyy: Z("FullYear", 4),
            yy: Z("FullYear", 2, 0, !0),
            y: Z("FullYear", 1),
            MMMM: vb("Month"),
            MMM: vb("Month", !0),
            MM: Z("Month", 2, 1),
            M: Z("Month", 1, 1),
            dd: Z("Date", 2),
            d: Z("Date", 1),
            HH: Z("Hours", 2),
            H: Z("Hours", 1),
            hh: Z("Hours", 2, -12),
            h: Z("Hours", 1, -12),
            mm: Z("Minutes", 2),
            m: Z("Minutes", 1),
            ss: Z("Seconds", 2),
            s: Z("Seconds", 1),
            sss: Z("Milliseconds", 3),
            EEEE: vb("Day"),
            EEE: vb("Day", !0),
            a: function(a, c) {
                return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
            },
            Z: function(a) {
                a = -1 * a.getTimezoneOffset();
                return a = (0 <= a ? "+" : "") + (Vb(Math[0 <
                    a ? "floor" : "ceil"](a / 60), 2) + Vb(Math.abs(a % 60), 2))
            }
        },
        Le = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
        Ke = /^\-?\d+$/;
    Ic.$inject = ["$locale"];
    var Ie = aa(x),
        Je = aa(La);
    Kc.$inject = ["$parse"];
    var cd = aa({
            restrict: "E",
            compile: function(a, c) {
                8 >= R && (c.href || c.name || c.$set("href", ""), a.append(X.createComment("IE fix")));
                if (!c.href && !c.xlinkHref && !c.name) return function(a, c) {
                    var f = "[object SVGAnimatedString]" === Ba.call(c.prop("href")) ? "xlink:href" : "href";
                    c.on("click", function(a) {
                        c.attr(f) ||
                            a.preventDefault()
                    })
                }
            }
        }),
        Fb = {};
    r(rb, function(a, c) {
        if ("multiple" != a) {
            var d = qa("ng-" + c);
            Fb[d] = function() {
                return {
                    priority: 100,
                    link: function(a, f, g) {
                        a.$watch(g[d], function(a) {
                            g.$set(c, !!a)
                        })
                    }
                }
            }
        }
    });
    r(["src", "srcset", "href"], function(a) {
        var c = qa("ng-" + a);
        Fb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, f) {
                    var g = a,
                        h = a;
                    "href" === a && "[object SVGAnimatedString]" === Ba.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);
                    f.$observe(c, function(c) {
                        c ? (f.$set(h, c), R && g && e.prop(g, f[h])) : "href" ===
                            a && f.$set(h, null)
                    })
                }
            }
        }
    });
    var yb = {
        $addControl: v,
        $removeControl: v,
        $setValidity: v,
        $setDirty: v,
        $setPristine: v
    };
    Nc.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var Qc = function(a) {
            return ["$timeout", function(c) {
                return {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    controller: Nc,
                    compile: function() {
                        return {
                            pre: function(a, e, f, g) {
                                if (!f.action) {
                                    var h = function(a) {
                                        a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                    };
                                    sb(e[0], "submit", h);
                                    e.on("$destroy", function() {
                                        c(function() {
                                            bb(e[0], "submit", h)
                                        }, 0, !1)
                                    })
                                }
                                var k = e.parent().controller("form"),
                                    m = f.name || f.ngForm;
                                m && ub(a, m, g, m);
                                if (k) e.on("$destroy", function() {
                                    k.$removeControl(g);
                                    m && ub(a, m, u, m);
                                    E(g, yb)
                                })
                            }
                        }
                    }
                }
            }]
        },
        dd = Qc(),
        qd = Qc(!0),
        Ve = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        We = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        Xe = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        Rc = {
            text: Ab,
            number: function(a, c, d, e, f, g) {
                Ab(a, c, d, e, f, g);
                e.$parsers.push(function(a) {
                    var c = e.$isEmpty(a);
                    if (c || Xe.test(a)) return e.$setValidity("number", !0), "" === a ? null : c ? a : parseFloat(a);
                    e.$setValidity("number", !1);
                    return u
                });
                Ne(e, "number", Ye, null, e.$$validityState);
                e.$formatters.push(function(a) {
                    return e.$isEmpty(a) ? "" : "" + a
                });
                d.min && (a = function(a) {
                    var c = parseFloat(d.min);
                    return ua(e, "min", e.$isEmpty(a) || a >= c, a)
                }, e.$parsers.push(a), e.$formatters.push(a));
                d.max && (a = function(a) {
                    var c = parseFloat(d.max);
                    return ua(e, "max", e.$isEmpty(a) || a <= c, a)
                }, e.$parsers.push(a), e.$formatters.push(a));
                e.$formatters.push(function(a) {
                    return ua(e, "number", e.$isEmpty(a) ||
                        jb(a), a)
                })
            },
            url: function(a, c, d, e, f, g) {
                Ab(a, c, d, e, f, g);
                a = function(a) {
                    return ua(e, "url", e.$isEmpty(a) || Ve.test(a), a)
                };
                e.$formatters.push(a);
                e.$parsers.push(a)
            },
            email: function(a, c, d, e, f, g) {
                Ab(a, c, d, e, f, g);
                a = function(a) {
                    return ua(e, "email", e.$isEmpty(a) || We.test(a), a)
                };
                e.$formatters.push(a);
                e.$parsers.push(a)
            },
            radio: function(a, c, d, e) {
                F(d.name) && c.attr("name", ib());
                c.on("click", function() {
                    c[0].checked && a.$apply(function() {
                        e.$setViewValue(d.value)
                    })
                });
                e.$render = function() {
                    c[0].checked = d.value == e.$viewValue
                };
                d.$observe("value", e.$render)
            },
            checkbox: function(a, c, d, e) {
                var f = d.ngTrueValue,
                    g = d.ngFalseValue;
                G(f) || (f = !0);
                G(g) || (g = !1);
                c.on("click", function() {
                    a.$apply(function() {
                        e.$setViewValue(c[0].checked)
                    })
                });
                e.$render = function() {
                    c[0].checked = e.$viewValue
                };
                e.$isEmpty = function(a) {
                    return a !== f
                };
                e.$formatters.push(function(a) {
                    return a === f
                });
                e.$parsers.push(function(a) {
                    return a ? f : g
                })
            },
            hidden: v,
            button: v,
            submit: v,
            reset: v,
            file: v
        },
        Ye = ["badInput"],
        hc = ["$browser", "$sniffer", function(a, c) {
            return {
                restrict: "E",
                require: "?ngModel",
                link: function(d, e, f, g) {
                    g && (Rc[x(f.type)] || Rc.text)(d, e, f, g, c, a)
                }
            }
        }],
        wb = "ng-valid",
        xb = "ng-invalid",
        Ra = "ng-pristine",
        zb = "ng-dirty",
        Ze = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(a, c, d, e, f, g) {
            function h(a, c) {
                c = c ? "-" + nb(c, "-") : "";
                g.removeClass(e, (a ? xb : wb) + c);
                g.addClass(e, (a ? wb : xb) + c)
            }
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$name =
                d.name;
            var k = f(d.ngModel),
                m = k.assign;
            if (!m) throw z("ngModel")("nonassign", d.ngModel, ia(e));
            this.$render = v;
            this.$isEmpty = function(a) {
                return F(a) || "" === a || null === a || a !== a
            };
            var l = e.inheritedData("$formController") || yb,
                n = 0,
                q = this.$error = {};
            e.addClass(Ra);
            h(!0);
            this.$setValidity = function(a, c) {
                q[a] !== !c && (c ? (q[a] && n--, n || (h(!0), this.$valid = !0, this.$invalid = !1)) : (h(!1), this.$invalid = !0, this.$valid = !1, n++), q[a] = !c, h(c, a), l.$setValidity(a, c, this))
            };
            this.$setPristine = function() {
                this.$dirty = !1;
                this.$pristine = !0;
                g.removeClass(e, zb);
                g.addClass(e, Ra)
            };
            this.$setViewValue = function(d) {
                this.$viewValue = d;
                this.$pristine && (this.$dirty = !0, this.$pristine = !1, g.removeClass(e, Ra), g.addClass(e, zb), l.$setDirty());
                r(this.$parsers, function(a) {
                    d = a(d)
                });
                this.$modelValue !== d && (this.$modelValue = d, m(a, d), r(this.$viewChangeListeners, function(a) {
                    try {
                        a()
                    } catch (d) {
                        c(d)
                    }
                }))
            };
            var p = this;
            a.$watch(function() {
                var c = k(a);
                if (p.$modelValue !== c) {
                    var d = p.$formatters,
                        e = d.length;
                    for (p.$modelValue = c; e--;) c = d[e](c);
                    p.$viewValue !== c && (p.$viewValue =
                        c, p.$render())
                }
                return c
            })
        }],
        Fd = function() {
            return {
                require: ["ngModel", "^?form"],
                controller: Ze,
                link: function(a, c, d, e) {
                    var f = e[0],
                        g = e[1] || yb;
                    g.$addControl(f);
                    a.$on("$destroy", function() {
                        g.$removeControl(f)
                    })
                }
            }
        },
        Hd = aa({
            require: "ngModel",
            link: function(a, c, d, e) {
                e.$viewChangeListeners.push(function() {
                    a.$eval(d.ngChange)
                })
            }
        }),
        ic = function() {
            return {
                require: "?ngModel",
                link: function(a, c, d, e) {
                    if (e) {
                        d.required = !0;
                        var f = function(a) {
                            if (d.required && e.$isEmpty(a)) e.$setValidity("required", !1);
                            else return e.$setValidity("required", !0), a
                        };
                        e.$formatters.push(f);
                        e.$parsers.unshift(f);
                        d.$observe("required", function() {
                            f(e.$viewValue)
                        })
                    }
                }
            }
        },
        Gd = function() {
            return {
                require: "ngModel",
                link: function(a, c, d, e) {
                    var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                    e.$parsers.push(function(a) {
                        if (!F(a)) {
                            var c = [];
                            a && r(a.split(f), function(a) {
                                a && c.push($(a))
                            });
                            return c
                        }
                    });
                    e.$formatters.push(function(a) {
                        return L(a) ? a.join(", ") : u
                    });
                    e.$isEmpty = function(a) {
                        return !a || !a.length
                    }
                }
            }
        },
        $e = /^(true|false|\d+)$/,
        Id = function() {
            return {
                priority: 100,
                compile: function(a, c) {
                    return $e.test(c.ngValue) ? function(a, c, f) {
                        f.$set("value", a.$eval(f.ngValue))
                    } : function(a, c, f) {
                        a.$watch(f.ngValue, function(a) {
                            f.$set("value", a)
                        })
                    }
                }
            }
        },
        id = Aa({
            compile: function(a) {
                a.addClass("ng-binding");
                return function(a, d, e) {
                    d.data("$binding", e.ngBind);
                    a.$watch(e.ngBind, function(a) {
                        d.text(a == u ? "" : a)
                    })
                }
            }
        }),
        kd = ["$interpolate", function(a) {
            return function(c, d, e) {
                c = a(d.attr(e.$attr.ngBindTemplate));
                d.addClass("ng-binding").data("$binding", c);
                e.$observe("ngBindTemplate", function(a) {
                    d.text(a)
                })
            }
        }],
        jd = ["$sce", "$parse", function(a, c) {
            return {
                compile: function(d) {
                    d.addClass("ng-binding");
                    return function(d, f, g) {
                        f.data("$binding", g.ngBindHtml);
                        var h = c(g.ngBindHtml);
                        d.$watch(function() {
                            return (h(d) || "").toString()
                        }, function(c) {
                            f.html(a.getTrustedHtml(h(d)) || "")
                        })
                    }
                }
            }
        }],
        ld = Wb("", !0),
        nd = Wb("Odd", 0),
        md = Wb("Even", 1),
        od = Aa({
            compile: function(a, c) {
                c.$set("ngCloak", u);
                a.removeClass("ng-cloak")
            }
        }),
        pd = [function() {
            return {
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        jc = {},
        af = {
            blur: !0,
            focus: !0
        };
    r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
        function(a) {
            var c = qa("ng-" + a);
            jc[c] = ["$parse", "$rootScope", function(d, e) {
                return {
                    compile: function(f, g) {
                        var h = d(g[c], !0);
                        return function(c, d) {
                            d.on(a, function(d) {
                                var f = function() {
                                    h(c, {
                                        $event: d
                                    })
                                };
                                af[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
                            })
                        }
                    }
                }
            }]
        });
    var sd = ["$animate", function(a) {
            return {
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function(c, d, e, f, g) {
                    var h, k, m;
                    c.$watch(e.ngIf, function(f) {
                        Wa(f) ? k || (k = c.$new(), g(k, function(c) {
                            c[c.length++] = X.createComment(" end ngIf: " + e.ngIf +
                                " ");
                            h = {
                                clone: c
                            };
                            a.enter(c, d.parent(), d)
                        })) : (m && (m.remove(), m = null), k && (k.$destroy(), k = null), h && (m = Eb(h.clone), a.leave(m, function() {
                            m = null
                        }), h = null))
                    })
                }
            }
        }],
        td = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(a, c, d, e, f) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Xa.noop,
                compile: function(g, h) {
                    var k = h.ngInclude || h.src,
                        m = h.onload || "",
                        l = h.autoscroll;
                    return function(g, h, p, r, J) {
                        var w = 0,
                            t, y, u, B = function() {
                                y && (y.remove(), y = null);
                                t && (t.$destroy(), t = null);
                                u && (e.leave(u, function() {
                                    y = null
                                }), y = u, u = null)
                            };
                        g.$watch(f.parseAsResourceUrl(k), function(f) {
                            var k = function() {
                                    !D(l) || l && !g.$eval(l) || d()
                                },
                                p = ++w;
                            f ? (a.get(f, {
                                cache: c
                            }).success(function(a) {
                                if (p === w) {
                                    var c = g.$new();
                                    r.template = a;
                                    a = J(c, function(a) {
                                        B();
                                        e.enter(a, null, h, k)
                                    });
                                    t = c;
                                    u = a;
                                    t.$emit("$includeContentLoaded");
                                    g.$eval(m)
                                }
                            }).error(function() {
                                p === w && B()
                            }), g.$emit("$includeContentRequested")) : (B(), r.template = null)
                        })
                    }
                }
            }
        }],
        Jd = ["$compile", function(a) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function(c, d, e, f) {
                    d.html(f.template);
                    a(d.contents())(c)
                }
            }
        }],
        ud = Aa({
            priority: 450,
            compile: function() {
                return {
                    pre: function(a, c, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }),
        vd = Aa({
            terminal: !0,
            priority: 1E3
        }),
        wd = ["$locale", "$interpolate", function(a, c) {
            var d = /{}/g;
            return {
                restrict: "EA",
                link: function(e, f, g) {
                    var h = g.count,
                        k = g.$attr.when && f.attr(g.$attr.when),
                        m = g.offset || 0,
                        l = e.$eval(k) || {},
                        n = {},
                        q = c.startSymbol(),
                        p = c.endSymbol(),
                        s = /^when(Minus)?(.+)$/;
                    r(g, function(a, c) {
                        s.test(c) && (l[x(c.replace("when", "").replace("Minus", "-"))] =
                            f.attr(g.$attr[c]))
                    });
                    r(l, function(a, e) {
                        n[e] = c(a.replace(d, q + h + "-" + m + p))
                    });
                    e.$watch(function() {
                        var c = parseFloat(e.$eval(h));
                        if (isNaN(c)) return "";
                        c in l || (c = a.pluralCat(c - m));
                        return n[c](e, f, !0)
                    }, function(a) {
                        f.text(a)
                    })
                }
            }
        }],
        xd = ["$parse", "$animate", function(a, c) {
            var d = z("ngRepeat");
            return {
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                link: function(e, f, g, h, k) {
                    var m = g.ngRepeat,
                        l = m.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),
                        n, q, p, s, u, w, t = {
                            $id: Na
                        };
                    if (!l) throw d("iexp",
                        m);
                    g = l[1];
                    h = l[2];
                    (l = l[3]) ? (n = a(l), q = function(a, c, d) {
                        w && (t[w] = a);
                        t[u] = c;
                        t.$index = d;
                        return n(e, t)
                    }) : (p = function(a, c) {
                        return Na(c)
                    }, s = function(a) {
                        return a
                    });
                    l = g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                    if (!l) throw d("iidexp", g);
                    u = l[3] || l[1];
                    w = l[2];
                    var y = {};
                    e.$watchCollection(h, function(a) {
                        var g, h, l = f[0],
                            n, t = {},
                            D, C, I, x, G, v, z, F = [];
                        if (Sa(a)) v = a, G = q || p;
                        else {
                            G = q || s;
                            v = [];
                            for (I in a) a.hasOwnProperty(I) && "$" != I.charAt(0) && v.push(I);
                            v.sort()
                        }
                        D = v.length;
                        h = F.length = v.length;
                        for (g = 0; g < h; g++)
                            if (I = a ===
                                v ? g : v[g], x = a[I], n = G(I, x, g), Ea(n, "`track by` id"), y.hasOwnProperty(n)) z = y[n], delete y[n], t[n] = z, F[g] = z;
                            else {
                                if (t.hasOwnProperty(n)) throw r(F, function(a) {
                                    a && a.scope && (y[a.id] = a)
                                }), d("dupes", m, n, oa(x));
                                F[g] = {
                                    id: n
                                };
                                t[n] = !1
                            }
                        for (I in y) y.hasOwnProperty(I) && (z = y[I], g = Eb(z.clone), c.leave(g), r(g, function(a) {
                            a.$$NG_REMOVED = !0
                        }), z.scope.$destroy());
                        g = 0;
                        for (h = v.length; g < h; g++) {
                            I = a === v ? g : v[g];
                            x = a[I];
                            z = F[g];
                            F[g - 1] && (l = F[g - 1].clone[F[g - 1].clone.length - 1]);
                            if (z.scope) {
                                C = z.scope;
                                n = l;
                                do n = n.nextSibling; while (n && n.$$NG_REMOVED);
                                z.clone[0] != n && c.move(Eb(z.clone), null, A(l));
                                l = z.clone[z.clone.length - 1]
                            } else C = e.$new();
                            C[u] = x;
                            w && (C[w] = I);
                            C.$index = g;
                            C.$first = 0 === g;
                            C.$last = g === D - 1;
                            C.$middle = !(C.$first || C.$last);
                            C.$odd = !(C.$even = 0 === (g & 1));
                            z.scope || k(C, function(a) {
                                a[a.length++] = X.createComment(" end ngRepeat: " + m + " ");
                                c.enter(a, null, A(l));
                                l = a;
                                z.scope = C;
                                z.clone = a;
                                t[z.id] = z
                            })
                        }
                        y = t
                    })
                }
            }
        }],
        yd = ["$animate", function(a) {
            return function(c, d, e) {
                c.$watch(e.ngShow, function(c) {
                    a[Wa(c) ? "removeClass" : "addClass"](d, "ng-hide")
                })
            }
        }],
        rd = ["$animate",
            function(a) {
                return function(c, d, e) {
                    c.$watch(e.ngHide, function(c) {
                        a[Wa(c) ? "addClass" : "removeClass"](d, "ng-hide")
                    })
                }
            }
        ],
        zd = Aa(function(a, c, d) {
            a.$watch(d.ngStyle, function(a, d) {
                d && a !== d && r(d, function(a, d) {
                    c.css(d, "")
                });
                a && c.css(a)
            }, !0)
        }),
        Ad = ["$animate", function(a) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: ["$scope", function() {
                    this.cases = {}
                }],
                link: function(c, d, e, f) {
                    var g = [],
                        h = [],
                        k = [],
                        m = [];
                    c.$watch(e.ngSwitch || e.on, function(d) {
                        var n, q;
                        n = 0;
                        for (q = k.length; n < q; ++n) k[n].remove();
                        n = k.length = 0;
                        for (q =
                            m.length; n < q; ++n) {
                            var p = h[n];
                            m[n].$destroy();
                            k[n] = p;
                            a.leave(p, function() {
                                k.splice(n, 1)
                            })
                        }
                        h.length = 0;
                        m.length = 0;
                        if (g = f.cases["!" + d] || f.cases["?"]) c.$eval(e.change), r(g, function(d) {
                            var e = c.$new();
                            m.push(e);
                            d.transclude(e, function(c) {
                                var e = d.element;
                                h.push(c);
                                a.enter(c, e.parent(), e)
                            })
                        })
                    })
                }
            }
        }],
        Bd = Aa({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function(a, c, d, e, f) {
                e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
                e.cases["!" + d.ngSwitchWhen].push({
                    transclude: f,
                    element: c
                })
            }
        }),
        Cd =
        Aa({
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function(a, c, d, e, f) {
                e.cases["?"] = e.cases["?"] || [];
                e.cases["?"].push({
                    transclude: f,
                    element: c
                })
            }
        }),
        Ed = Aa({
            link: function(a, c, d, e, f) {
                if (!f) throw z("ngTransclude")("orphan", ia(c));
                f(function(a) {
                    c.empty();
                    c.append(a)
                })
            }
        }),
        ed = ["$templateCache", function(a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(c, d) {
                    "text/ng-template" == d.type && a.put(d.id, c[0].text)
                }
            }
        }],
        bf = z("ngOptions"),
        Dd = aa({
            terminal: !0
        }),
        fd = ["$compile", "$parse", function(a, c) {
            var d =
                /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                e = {
                    $setViewValue: v
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function(a, c, d) {
                    var k = this,
                        m = {},
                        l = e,
                        n;
                    k.databound = d.ngModel;
                    k.init = function(a, c, d) {
                        l = a;
                        n = d
                    };
                    k.addOption = function(c) {
                        Ea(c, '"option value"');
                        m[c] = !0;
                        l.$viewValue == c && (a.val(c), n.parent() && n.remove())
                    };
                    k.removeOption = function(a) {
                        this.hasOption(a) && (delete m[a], l.$viewValue == a && this.renderUnknownOption(a))
                    };
                    k.renderUnknownOption = function(c) {
                        c = "? " + Na(c) + " ?";
                        n.val(c);
                        a.prepend(n);
                        a.val(c);
                        n.prop("selected", !0)
                    };
                    k.hasOption = function(a) {
                        return m.hasOwnProperty(a)
                    };
                    c.$on("$destroy", function() {
                        k.renderUnknownOption = v
                    })
                }],
                link: function(e, g, h, k) {
                    function m(a, c, d, e) {
                        d.$render = function() {
                            var a = d.$viewValue;
                            e.hasOption(a) ? (x.parent() && x.remove(), c.val(a), "" === a && w.prop("selected", !0)) : F(a) && w ? c.val("") : e.renderUnknownOption(a)
                        };
                        c.on("change", function() {
                            a.$apply(function() {
                                x.parent() && x.remove();
                                d.$setViewValue(c.val())
                            })
                        })
                    }

                    function l(a, c, d) {
                        var e;
                        d.$render = function() {
                            var a = new db(d.$viewValue);
                            r(c.find("option"), function(c) {
                                c.selected = D(a.get(c.value))
                            })
                        };
                        a.$watch(function() {
                            Ca(e, d.$viewValue) || (e = ha(d.$viewValue), d.$render())
                        });
                        c.on("change", function() {
                            a.$apply(function() {
                                var a = [];
                                r(c.find("option"), function(c) {
                                    c.selected && a.push(c.value)
                                });
                                d.$setViewValue(a)
                            })
                        })
                    }

                    function n(e, f, g) {
                        function h() {
                            var a = {
                                    "": []
                                },
                                c = [""],
                                d, k,
                                s, u, v;
                            s = g.$modelValue;
                            u = A(e) || [];
                            var F = n ? Xb(u) : u,
                                G, Q, C;
                            Q = {};
                            C = !1;
                            if (p)
                                if (k = g.$modelValue, w && L(k))
                                    for (C = new db([]), d = {}, v = 0; v < k.length; v++) d[m] = k[v], C.put(w(e, d), k[v]);
                                else C = new db(k);
                            v = C;
                            var E, K;
                            for (C = 0; G = F.length, C < G; C++) {
                                k = C;
                                if (n) {
                                    k = F[C];
                                    if ("$" === k.charAt(0)) continue;
                                    Q[n] = k
                                }
                                Q[m] = u[k];
                                d = r(e, Q) || "";
                                (k = a[d]) || (k = a[d] = [], c.push(d));
                                p ? d = D(v.remove(w ? w(e, Q) : x(e, Q))) : (w ? (d = {}, d[m] = s, d = w(e, d) === w(e, Q)) : d = s === x(e, Q), v = v || d);
                                E = l(e, Q);
                                E = D(E) ? E : "";
                                k.push({
                                    id: w ? w(e, Q) : n ? F[C] : C,
                                    label: E,
                                    selected: d
                                })
                            }
                            p || (z || null ===
                                s ? a[""].unshift({
                                    id: "",
                                    label: "",
                                    selected: !v
                                }) : v || a[""].unshift({
                                    id: "?",
                                    label: "",
                                    selected: !0
                                }));
                            Q = 0;
                            for (F = c.length; Q < F; Q++) {
                                d = c[Q];
                                k = a[d];
                                B.length <= Q ? (s = {
                                    element: y.clone().attr("label", d),
                                    label: k.label
                                }, u = [s], B.push(u), f.append(s.element)) : (u = B[Q], s = u[0], s.label != d && s.element.attr("label", s.label = d));
                                E = null;
                                C = 0;
                                for (G = k.length; C < G; C++) d = k[C], (v = u[C + 1]) ? (E = v.element, v.label !== d.label && (E.text(v.label = d.label), E.prop("label", v.label)), v.id !== d.id && E.val(v.id = d.id), E[0].selected !== d.selected && (E.prop("selected",
                                    v.selected = d.selected), R && E.prop("selected", v.selected))) : ("" === d.id && z ? K = z : (K = t.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), u.push({
                                    element: K,
                                    label: d.label,
                                    id: d.id,
                                    selected: d.selected
                                }), q.addOption(d.label, K), E ? E.after(K) : s.element.append(K), E = K);
                                for (C++; u.length > C;) d = u.pop(), q.removeOption(d.label), d.element.remove()
                            }
                            for (; B.length > Q;) B.pop()[0].element.remove()
                        }
                        var k;
                        if (!(k = s.match(d))) throw bf("iexp", s, ia(f));
                        var l = c(k[2] || k[1]),
                            m = k[4] || k[6],
                            n = k[5],
                            r = c(k[3] || ""),
                            x = c(k[2] ? k[1] : m),
                            A = c(k[7]),
                            w = k[8] ? c(k[8]) : null,
                            B = [
                                [{
                                    element: f,
                                    label: ""
                                }]
                            ];
                        z && (a(z)(e), z.removeClass("ng-scope"), z.remove());
                        f.empty();
                        f.on("change", function() {
                            e.$apply(function() {
                                var a, c = A(e) || [],
                                    d = {},
                                    k, l, q, r, s, t, v;
                                if (p)
                                    for (l = [], r = 0, t = B.length; r < t; r++)
                                        for (a = B[r], q = 1, s = a.length; q < s; q++) {
                                            if ((k = a[q].element)[0].selected) {
                                                k = k.val();
                                                n && (d[n] = k);
                                                if (w)
                                                    for (v = 0; v < c.length && (d[m] = c[v], w(e, d) != k); v++);
                                                else d[m] = c[k];
                                                l.push(x(e, d))
                                            }
                                        } else if (k = f.val(), "?" == k) l = u;
                                        else if ("" ===
                                    k) l = null;
                                else if (w)
                                    for (v = 0; v < c.length; v++) {
                                        if (d[m] = c[v], w(e, d) == k) {
                                            l = x(e, d);
                                            break
                                        }
                                    } else d[m] = c[k], n && (d[n] = k), l = x(e, d);
                                g.$setViewValue(l);
                                h()
                            })
                        });
                        g.$render = h;
                        e.$watchCollection(A, h);
                        e.$watchCollection(function() {
                            var a = {},
                                c = A(e);
                            if (c) {
                                for (var d = Array(c.length), f = 0, g = c.length; f < g; f++) a[m] = c[f], d[f] = l(e, a);
                                return d
                            }
                        }, h);
                        p && e.$watchCollection(function() {
                            return g.$modelValue
                        }, h)
                    }
                    if (k[1]) {
                        var q = k[0];
                        k = k[1];
                        var p = h.multiple,
                            s = h.ngOptions,
                            z = !1,
                            w, t = A(X.createElement("option")),
                            y = A(X.createElement("optgroup")),
                            x = t.clone();
                        h = 0;
                        for (var B = g.children(), v = B.length; h < v; h++)
                            if ("" === B[h].value) {
                                w = z = B.eq(h);
                                break
                            }
                        q.init(k, z, x);
                        p && (k.$isEmpty = function(a) {
                            return !a || 0 === a.length
                        });
                        s ? n(e, g, k) : p ? l(e, g, k) : m(e, g, k, q)
                    }
                }
            }
        }],
        hd = ["$interpolate", function(a) {
            var c = {
                addOption: v,
                removeOption: v
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function(d, e) {
                    if (F(e.value)) {
                        var f = a(d.text(), !0);
                        f || e.$set("value", d.text())
                    }
                    return function(a, d, e) {
                        var m = d.parent(),
                            l = m.data("$selectController") || m.parent().data("$selectController");
                        l && l.databound ?
                            d.prop("selected", !1) : l = c;
                        f ? a.$watch(f, function(a, c) {
                            e.$set("value", a);
                            a !== c && l.removeOption(c);
                            l.addOption(a)
                        }) : l.addOption(e.value);
                        d.on("$destroy", function() {
                            l.removeOption(e.value)
                        })
                    }
                }
            }
        }],
        gd = aa({
            restrict: "E",
            terminal: !0
        });
    W.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Fa = W.jQuery) && Fa.fn.on ? (A = Fa, E(Fa.fn, {
        scope: Oa.scope,
        isolateScope: Oa.isolateScope,
        controller: Oa.controller,
        injector: Oa.injector,
        inheritedData: Oa.inheritedData
    }), Gb("remove", !0, !0, !1), Gb("empty", !1, !1, !1), Gb("html", !1, !1, !0)) : A = S, Xa.element = A, Zc(Xa), A(X).ready(function() {
        Wc(X, dc)
    }))
})(window, document);
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.12.0 - 2014-11-16
 * License: MIT
 */
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function(a, b, c) {
    function d(a) {
        for (var b in a)
            if (void 0 !== f.style[b]) return a[b]
    }
    var e = function(d, f, g) {
            g = g || {};
            var h = a.defer(),
                i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"],
                j = function() {
                    c.$apply(function() {
                        d.unbind(i, j), h.resolve(d)
                    })
                };
            return i && d.bind(i, j), b(function() {
                angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
            }), h.promise.cancel = function() {
                i && d.unbind(i, j), h.reject("Transition cancelled")
            }, h.promise
        },
        f = document.createElement("trans"),
        g = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend"
        },
        h = {
            WebkitTransition: "webkitAnimationEnd",
            MozTransition: "animationend",
            OTransition: "oAnimationEnd",
            transition: "animationend"
        };
    return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
}]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function(a) {
    return {
        link: function(b, c, d) {
            function e(b) {
                function d() {
                    j === e && (j = void 0)
                }
                var e = a(c, b);
                return j && j.cancel(), j = e, e.then(d, d), e
            }

            function f() {
                k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({
                    height: c[0].scrollHeight + "px"
                }).then(g))
            }

            function g() {
                c.removeClass("collapsing"), c.addClass("collapse in"), c.css({
                    height: "auto"
                })
            }

            function h() {
                if (k) k = !1, i(), c.css({
                    height: 0
                });
                else {
                    c.css({
                        height: c[0].scrollHeight + "px"
                    }); {
                        c[0].offsetWidth
                    }
                    c.removeClass("collapse in").addClass("collapsing"), e({
                        height: 0
                    }).then(i)
                }
            }

            function i() {
                c.removeClass("collapsing"), c.addClass("collapse")
            }
            var j, k = !0;
            b.$watch(d.collapse, function(a) {
                a ? h() : f()
            })
        }
    }
}]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
    closeOthers: !0
}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function(a, b, c) {
    this.groups = [], this.closeOthers = function(d) {
        var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
        e && angular.forEach(this.groups, function(a) {
            a !== d && (a.isOpen = !1)
        })
    }, this.addGroup = function(a) {
        var b = this;
        this.groups.push(a), a.$on("$destroy", function() {
            b.removeGroup(a)
        })
    }, this.removeGroup = function(a) {
        var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(b, 1)
    }
}]).directive("accordion", function() {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    }
}).directive("accordionGroup", function() {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/accordion/accordion-group.html",
        scope: {
            heading: "@",
            isOpen: "=?",
            isDisabled: "=?"
        },
        controller: function() {
            this.setHeading = function(a) {
                this.heading = a
            }
        },
        link: function(a, b, c, d) {
            d.addGroup(a), a.$watch("isOpen", function(b) {
                b && d.closeOthers(a)
            }), a.toggleOpen = function() {
                a.isDisabled || (a.isOpen = !a.isOpen)
            }
        }
    }
}).directive("accordionHeading", function() {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        link: function(a, b, c, d, e) {
            d.setHeading(e(a, function() {}))
        }
    }
}).directive("accordionTransclude", function() {
    return {
        require: "^accordionGroup",
        link: function(a, b, c, d) {
            a.$watch(function() {
                return d[c.accordionTransclude]
            }, function(a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function(a, b) {
    a.closeable = "close" in b, this.close = a.close
}]).directive("alert", function() {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@",
            close: "&"
        }
    }
}).directive("dismissOnTimeout", ["$timeout", function(a) {
    return {
        require: "alert",
        link: function(b, c, d, e) {
            a(function() {
                e.close()
            }, parseInt(d.dismissOnTimeout, 10))
        }
    }
}]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
    return function(a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
            b.html(a || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", ["buttonConfig", function(a) {
    this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
}]).directive("btnRadio", function() {
    return {
        require: ["btnRadio", "ngModel"],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f.$render = function() {
                b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
            }, b.bind(e.toggleEvent, function() {
                var d = b.hasClass(e.activeClass);
                (!d || angular.isDefined(c.uncheckable)) && a.$apply(function() {
                    f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
                })
            })
        }
    }
}).directive("btnCheckbox", function() {
    return {
        require: ["btnCheckbox", "ngModel"],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0)
            }

            function f() {
                return g(c.btnCheckboxFalse, !1)
            }

            function g(b, c) {
                var d = a.$eval(b);
                return angular.isDefined(d) ? d : c
            }
            var h = d[0],
                i = d[1];
            i.$render = function() {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
            }, b.bind(h.toggleEvent, function() {
                a.$apply(function() {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$interval", "$transition", function(a, b, c, d) {
    function e() {
        f();
        var b = +a.interval;
        !isNaN(b) && b > 0 && (h = c(g, b))
    }

    function f() {
        h && (c.cancel(h), h = null)
    }

    function g() {
        var b = +a.interval;
        i && !isNaN(b) && b > 0 ? a.next() : a.pause()
    }
    var h, i, j = this,
        k = j.slides = a.slides = [],
        l = -1;
    j.currentSlide = null;
    var m = !1;
    j.select = a.select = function(c, f) {
        function g() {
            if (!m) {
                if (j.currentSlide && angular.isString(f) && !a.noTransition && c.$element) {
                    c.$element.addClass(f); {
                        c.$element[0].offsetWidth
                    }
                    angular.forEach(k, function(a) {
                            angular.extend(a, {
                                direction: "",
                                entering: !1,
                                leaving: !1,
                                active: !1
                            })
                        }), angular.extend(c, {
                            direction: f,
                            active: !0,
                            entering: !0
                        }), angular.extend(j.currentSlide || {}, {
                            direction: f,
                            leaving: !0
                        }), a.$currentTransition = d(c.$element, {}),
                        function(b, c) {
                            a.$currentTransition.then(function() {
                                h(b, c)
                            }, function() {
                                h(b, c)
                            })
                        }(c, j.currentSlide)
                } else h(c, j.currentSlide);
                j.currentSlide = c, l = i, e()
            }
        }

        function h(b, c) {
            angular.extend(b, {
                direction: "",
                active: !0,
                leaving: !1,
                entering: !1
            }), angular.extend(c || {}, {
                direction: "",
                active: !1,
                leaving: !1,
                entering: !1
            }), a.$currentTransition = null
        }
        var i = k.indexOf(c);
        void 0 === f && (f = i > l ? "next" : "prev"), c && c !== j.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
    }, a.$on("$destroy", function() {
        m = !0
    }), j.indexOfSlide = function(a) {
        return k.indexOf(a)
    }, a.next = function() {
        var b = (l + 1) % k.length;
        return a.$currentTransition ? void 0 : j.select(k[b], "next")
    }, a.prev = function() {
        var b = 0 > l - 1 ? k.length - 1 : l - 1;
        return a.$currentTransition ? void 0 : j.select(k[b], "prev")
    }, a.isActive = function(a) {
        return j.currentSlide === a
    }, a.$watch("interval", e), a.$on("$destroy", f), a.play = function() {
        i || (i = !0, e())
    }, a.pause = function() {
        a.noPause || (i = !1, f())
    }, j.addSlide = function(b, c) {
        b.$element = c, k.push(b), 1 === k.length || b.active ? (j.select(k[k.length - 1]), 1 == k.length && a.play()) : b.active = !1
    }, j.removeSlide = function(a) {
        var b = k.indexOf(a);
        k.splice(b, 1), k.length > 0 && a.active ? j.select(b >= k.length ? k[b - 1] : k[b]) : l > b && l--
    }
}]).directive("carousel", [function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        controller: "CarouselController",
        require: "carousel",
        templateUrl: "template/carousel/carousel.html",
        scope: {
            interval: "=",
            noTransition: "=",
            noPause: "="
        }
    }
}]).directive("slide", function() {
    return {
        require: "^carousel",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/carousel/slide.html",
        scope: {
            active: "=?"
        },
        link: function(a, b, c, d) {
            d.addSlide(a, b), a.$on("$destroy", function() {
                d.removeSlide(a)
            }), a.$watch("active", function(b) {
                b && d.select(a)
            })
        }
    }
}), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function(a, b) {
    function c(a) {
        var c = [],
            d = a.split("");
        return angular.forEach(e, function(b, e) {
            var f = a.indexOf(e);
            if (f > -1) {
                a = a.split(""), d[f] = "(" + b.regex + ")", a[f] = "$";
                for (var g = f + 1, h = f + e.length; h > g; g++) d[g] = "", a[g] = "$";
                a = a.join(""), c.push({
                    index: f,
                    apply: b.apply
                })
            }
        }), {
            regex: new RegExp("^" + d.join("") + "$"),
            map: b(c, "index")
        }
    }

    function d(a, b, c) {
        return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
    }
    this.parsers = {};
    var e = {
        yyyy: {
            regex: "\\d{4}",
            apply: function(a) {
                this.year = +a
            }
        },
        yy: {
            regex: "\\d{2}",
            apply: function(a) {
                this.year = +a + 2e3
            }
        },
        y: {
            regex: "\\d{1,4}",
            apply: function(a) {
                this.year = +a
            }
        },
        MMMM: {
            regex: a.DATETIME_FORMATS.MONTH.join("|"),
            apply: function(b) {
                this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
            }
        },
        MMM: {
            regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
            apply: function(b) {
                this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
            }
        },
        MM: {
            regex: "0[1-9]|1[0-2]",
            apply: function(a) {
                this.month = a - 1
            }
        },
        M: {
            regex: "[1-9]|1[0-2]",
            apply: function(a) {
                this.month = a - 1
            }
        },
        dd: {
            regex: "[0-2][0-9]{1}|3[0-1]{1}",
            apply: function(a) {
                this.date = +a
            }
        },
        d: {
            regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
            apply: function(a) {
                this.date = +a
            }
        },
        EEEE: {
            regex: a.DATETIME_FORMATS.DAY.join("|")
        },
        EEE: {
            regex: a.DATETIME_FORMATS.SHORTDAY.join("|")
        }
    };
    this.parse = function(b, e) {
        if (!angular.isString(b) || !e) return b;
        e = a.DATETIME_FORMATS[e] || e, this.parsers[e] || (this.parsers[e] = c(e));
        var f = this.parsers[e],
            g = f.regex,
            h = f.map,
            i = b.match(g);
        if (i && i.length) {
            for (var j, k = {
                    year: 1900,
                    month: 0,
                    date: 1,
                    hours: 0
                }, l = 1, m = i.length; m > l; l++) {
                var n = h[l - 1];
                n.apply && n.apply.call(k, i[l])
            }
            return d(k.year, k.month, k.date) && (j = new Date(k.year, k.month, k.date, k.hours)), j
        }
    }
}]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function(a, b) {
    function c(a, c) {
        return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
    }

    function d(a) {
        return "static" === (c(a, "position") || "static")
    }
    var e = function(b) {
        for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
        return e || c
    };
    return {
        position: function(b) {
            var c = this.offset(b),
                d = {
                    top: 0,
                    left: 0
                },
                f = e(b[0]);
            f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
            var g = b[0].getBoundingClientRect();
            return {
                width: g.width || b.prop("offsetWidth"),
                height: g.height || b.prop("offsetHeight"),
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offset: function(c) {
            var d = c[0].getBoundingClientRect();
            return {
                width: d.width || c.prop("offsetWidth"),
                height: d.height || c.prop("offsetHeight"),
                top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
                left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
            }
        },
        positionElements: function(a, b, c, d) {
            var e, f, g, h, i = c.split("-"),
                j = i[0],
                k = i[1] || "center";
            e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
            var l = {
                    center: function() {
                        return e.left + e.width / 2 - f / 2
                    },
                    left: function() {
                        return e.left
                    },
                    right: function() {
                        return e.left + e.width
                    }
                },
                m = {
                    center: function() {
                        return e.top + e.height / 2 - g / 2
                    },
                    top: function() {
                        return e.top
                    },
                    bottom: function() {
                        return e.top + e.height
                    }
                };
            switch (j) {
                case "right":
                    h = {
                        top: m[k](),
                        left: l[j]()
                    };
                    break;
                case "left":
                    h = {
                        top: m[k](),
                        left: e.left - f
                    };
                    break;
                case "bottom":
                    h = {
                        top: m[j](),
                        left: l[k]()
                    };
                    break;
                default:
                    h = {
                        top: e.top - g,
                        left: l[k]()
                    }
            }
            return h
        }
    }
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null
}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function(a, b, c, d, e, f, g, h) {
    var i = this,
        j = {
            $setViewValue: angular.noop
        };
    this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function(c, e) {
        i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
    }), angular.forEach(["minDate", "maxDate"], function(d) {
        b[d] ? a.$parent.$watch(c(b[d]), function(a) {
            i[d] = a ? new Date(a) : null, i.refreshView()
        }) : i[d] = h[d] ? new Date(h[d]) : null
    }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date, a.isActive = function(b) {
        return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
    }, this.init = function(a) {
        j = a, j.$render = function() {
            i.render()
        }
    }, this.render = function() {
        if (j.$modelValue) {
            var a = new Date(j.$modelValue),
                b = !isNaN(a);
            b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
        }
        this.refreshView()
    }, this.refreshView = function() {
        if (this.element) {
            this._refreshView();
            var a = j.$modelValue ? new Date(j.$modelValue) : null;
            j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
        }
    }, this.createDateObject = function(a, b) {
        var c = j.$modelValue ? new Date(j.$modelValue) : null;
        return {
            date: a,
            label: g(a, b),
            selected: c && 0 === this.compare(a, c),
            disabled: this.isDisabled(a),
            current: 0 === this.compare(a, new Date)
        }
    }, this.isDisabled = function(c) {
        return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
            date: c,
            mode: a.datepickerMode
        })
    }, this.split = function(a, b) {
        for (var c = []; a.length > 0;) c.push(a.splice(0, b));
        return c
    }, a.select = function(b) {
        if (a.datepickerMode === i.minMode) {
            var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
        } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
    }, a.move = function(a) {
        var b = i.activeDate.getFullYear() + a * (i.step.years || 0),
            c = i.activeDate.getMonth() + a * (i.step.months || 0);
        i.activeDate.setFullYear(b, c, 1), i.refreshView()
    }, a.toggleMode = function(b) {
        b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
    }, a.keys = {
        13: "enter",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    var k = function() {
        e(function() {
            i.element[0].focus()
        }, 0, !1)
    };
    a.$on("datepicker.focus", k), a.keydown = function(b) {
        var c = a.keys[b.which];
        if (c && !b.shiftKey && !b.altKey)
            if (b.preventDefault(), b.stopPropagation(), "enter" === c || "space" === c) {
                if (i.isDisabled(i.activeDate)) return;
                a.select(i.activeDate), k()
            } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
    }
}]).directive("datepicker", function() {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/datepicker.html",
        scope: {
            datepickerMode: "=?",
            dateDisabled: "&"
        },
        require: ["datepicker", "?^ngModel"],
        controller: "DatepickerController",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f)
        }
    }
}).directive("daypicker", ["dateFilter", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/day.html",
        require: "^datepicker",
        link: function(b, c, d, e) {
            function f(a, b) {
                return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
            }

            function g(a, b) {
                var c = new Array(b),
                    d = new Date(a),
                    e = 0;
                for (d.setHours(12); b > e;) c[e++] = new Date(d), d.setDate(d.getDate() + 1);
                return c
            }

            function h(a) {
                var b = new Date(a);
                b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                var c = b.getTime();
                return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
            }
            b.showWeeks = e.showWeeks, e.step = {
                months: 1
            }, e.element = c;
            var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            e._refreshView = function() {
                var c = e.activeDate.getFullYear(),
                    d = e.activeDate.getMonth(),
                    f = new Date(c, d, 1),
                    i = e.startingDay - f.getDay(),
                    j = i > 0 ? 7 - i : -i,
                    k = new Date(f);
                j > 0 && k.setDate(-j + 1);
                for (var l = g(k, 42), m = 0; 42 > m; m++) l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
                    secondary: l[m].getMonth() !== d,
                    uid: b.uniqueId + "-" + m
                });
                b.labels = new Array(7);
                for (var n = 0; 7 > n; n++) b.labels[n] = {
                    abbr: a(l[n].date, e.formatDayHeader),
                    full: a(l[n].date, "EEEE")
                };
                if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
                    b.weekNumbers = [];
                    for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;);
                }
            }, e.compare = function(a, b) {
                return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
            }, e.handleKeyDown = function(a) {
                var b = e.activeDate.getDate();
                if ("left" === a) b -= 1;
                else if ("up" === a) b -= 7;
                else if ("right" === a) b += 1;
                else if ("down" === a) b += 7;
                else if ("pageup" === a || "pagedown" === a) {
                    var c = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
                    e.activeDate.setMonth(c, 1), b = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), b)
                } else "home" === a ? b = 1 : "end" === a && (b = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
                e.activeDate.setDate(b)
            }, e.refreshView()
        }
    }
}]).directive("monthpicker", ["dateFilter", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/month.html",
        require: "^datepicker",
        link: function(b, c, d, e) {
            e.step = {
                years: 1
            }, e.element = c, e._refreshView = function() {
                for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++) c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {
                    uid: b.uniqueId + "-" + f
                });
                b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
            }, e.compare = function(a, b) {
                return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
            }, e.handleKeyDown = function(a) {
                var b = e.activeDate.getMonth();
                if ("left" === a) b -= 1;
                else if ("up" === a) b -= 3;
                else if ("right" === a) b += 1;
                else if ("down" === a) b += 3;
                else if ("pageup" === a || "pagedown" === a) {
                    var c = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
                    e.activeDate.setFullYear(c)
                } else "home" === a ? b = 0 : "end" === a && (b = 11);
                e.activeDate.setMonth(b)
            }, e.refreshView()
        }
    }
}]).directive("yearpicker", ["dateFilter", function() {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/year.html",
        require: "^datepicker",
        link: function(a, b, c, d) {
            function e(a) {
                return parseInt((a - 1) / f, 10) * f + 1
            }
            var f = d.yearRange;
            d.step = {
                years: f
            }, d.element = b, d._refreshView = function() {
                for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++) b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {
                    uid: a.uniqueId + "-" + c
                });
                a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
            }, d.compare = function(a, b) {
                return a.getFullYear() - b.getFullYear()
            }, d.handleKeyDown = function(a) {
                var b = d.activeDate.getFullYear();
                "left" === a ? b -= 1 : "up" === a ? b -= 5 : "right" === a ? b += 1 : "down" === a ? b += 5 : "pageup" === a || "pagedown" === a ? b += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? b = e(d.activeDate.getFullYear()) : "end" === a && (b = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(b)
            }, d.refreshView()
        }
    }
}]).constant("datepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0
}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function(a, b, c, d, e, f, g) {
    return {
        restrict: "EA",
        require: "ngModel",
        scope: {
            isOpen: "=?",
            currentText: "@",
            clearText: "@",
            closeText: "@",
            dateDisabled: "&"
        },
        link: function(h, i, j, k) {
            function l(a) {
                return a.replace(/([A-Z])/g, function(a) {
                    return "-" + a.toLowerCase()
                })
            }

            function m(a) {
                if (a) {
                    if (angular.isDate(a) && !isNaN(a)) return k.$setValidity("date", !0), a;
                    if (angular.isString(a)) {
                        var b = f.parse(a, n) || new Date(a);
                        return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
                    }
                    return void k.$setValidity("date", !1)
                }
                return k.$setValidity("date", !0), null
            }
            var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection,
                p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
            h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function(a) {
                return h[a + "Text"] || g[a + "Text"]
            }, j.$observe("datepickerPopup", function(a) {
                n = a || g.datepickerPopup, k.$render()
            });
            var q = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
            q.attr({
                "ng-model": "date",
                "ng-change": "dateSelection()"
            });
            var r = angular.element(q.children()[0]);
            j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function(a, b) {
                r.attr(l(b), a)
            }), h.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function(a) {
                if (j[a]) {
                    var c = b(j[a]);
                    if (h.$parent.$watch(c, function(b) {
                            h.watchData[a] = b
                        }), r.attr(l(a), "watchData." + a), "datepickerMode" === a) {
                        var d = c.assign;
                        h.$watch("watchData." + a, function(a, b) {
                            a !== b && d(h.$parent, a)
                        })
                    }
                }
            }), j.dateDisabled && r.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), k.$parsers.unshift(m), h.dateSelection = function(a) {
                angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus())
            }, i.bind("input change keyup", function() {
                h.$apply(function() {
                    h.date = k.$modelValue
                })
            }), k.$render = function() {
                var a = k.$viewValue ? e(k.$viewValue, n) : "";
                i.val(a), h.date = m(k.$modelValue)
            };
            var s = function(a) {
                    h.isOpen && a.target !== i[0] && h.$apply(function() {
                        h.isOpen = !1
                    })
                },
                t = function(a) {
                    h.keydown(a)
                };
            i.bind("keydown", t), h.keydown = function(a) {
                27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
            }, h.$watch("isOpen", function(a) {
                a ? (h.$broadcast("datepicker.focus"), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", s)) : c.unbind("click", s)
            }), h.select = function(a) {
                if ("today" === a) {
                    var b = new Date;
                    angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
                }
                h.dateSelection(a)
            }, h.close = function() {
                h.isOpen = !1, i[0].focus()
            };
            var u = a(q)(h);
            q.remove(), p ? c.find("body").append(u) : i.after(u), h.$on("$destroy", function() {
                u.remove(), i.unbind("keydown", t), c.unbind("click", s)
            })
        }
    }
}]).directive("datepickerPopupWrap", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        templateUrl: "template/datepicker/popup.html",
        link: function(a, b) {
            b.bind("click", function(a) {
                a.preventDefault(), a.stopPropagation()
            })
        }
    }
}), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {
    openClass: "open"
}).service("dropdownService", ["$document", function(a) {
    var b = null;
    this.open = function(e) {
        b || (a.bind("click", c), a.bind("keydown", d)), b && b !== e && (b.isOpen = !1), b = e
    }, this.close = function(e) {
        b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
    };
    var c = function(a) {
            if (b) {
                var c = b.getToggleElement();
                a && c && c[0].contains(a.target) || b.$apply(function() {
                    b.isOpen = !1
                })
            }
        },
        d = function(a) {
            27 === a.which && (b.focusToggleElement(), c())
        }
}]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function(a, b, c, d, e, f) {
    var g, h = this,
        i = a.$new(),
        j = d.openClass,
        k = angular.noop,
        l = b.onToggle ? c(b.onToggle) : angular.noop;
    this.init = function(d) {
        h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function(a) {
            i.isOpen = !!a
        }))
    }, this.toggle = function(a) {
        return i.isOpen = arguments.length ? !!a : !i.isOpen
    }, this.isOpen = function() {
        return i.isOpen
    }, i.getToggleElement = function() {
        return h.toggleElement
    }, i.focusToggleElement = function() {
        h.toggleElement && h.toggleElement[0].focus()
    }, i.$watch("isOpen", function(b, c) {
        f[b ? "addClass" : "removeClass"](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, {
            open: !!b
        })
    }), a.$on("$locationChangeSuccess", function() {
        i.isOpen = !1
    }), a.$on("$destroy", function() {
        i.$destroy()
    })
}]).directive("dropdown", function() {
    return {
        controller: "DropdownController",
        link: function(a, b, c, d) {
            d.init(b)
        }
    }
}).directive("dropdownToggle", function() {
    return {
        require: "?^dropdown",
        link: function(a, b, c, d) {
            if (d) {
                d.toggleElement = b;
                var e = function(e) {
                    e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function() {
                        d.toggle()
                    })
                };
                b.bind("click", e), b.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), a.$watch(d.isOpen, function(a) {
                    b.attr("aria-expanded", !!a)
                }), a.$on("$destroy", function() {
                    b.unbind("click", e)
                })
            }
        }
    }
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function() {
    return {
        createNew: function() {
            var a = [];
            return {
                add: function(b, c) {
                    a.push({
                        key: b,
                        value: c
                    })
                },
                get: function(b) {
                    for (var c = 0; c < a.length; c++)
                        if (b == a[c].key) return a[c]
                },
                keys: function() {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                    return b
                },
                top: function() {
                    return a[a.length - 1]
                },
                remove: function(b) {
                    for (var c = -1, d = 0; d < a.length; d++)
                        if (b == a[d].key) {
                            c = d;
                            break
                        }
                    return a.splice(c, 1)[0]
                },
                removeTop: function() {
                    return a.splice(a.length - 1, 1)[0]
                },
                length: function() {
                    return a.length
                }
            }
        }
    }
}).directive("modalBackdrop", ["$timeout", function(a) {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/modal/backdrop.html",
        link: function(b, c, d) {
            b.backdropClass = d.backdropClass || "", b.animate = !1, a(function() {
                b.animate = !0
            })
        }
    }
}]).directive("modalWindow", ["$modalStack", "$timeout", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            index: "@",
            animate: "="
        },
        replace: !0,
        transclude: !0,
        templateUrl: function(a, b) {
            return b.templateUrl || "template/modal/window.html"
        },
        link: function(c, d, e) {
            d.addClass(e.windowClass || ""), c.size = e.size, b(function() {
                c.animate = !0, d[0].querySelectorAll("[autofocus]").length || d[0].focus()
            }), c.close = function(b) {
                var c = a.getTop();
                c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
            }
        }
    }
}]).directive("modalTransclude", function() {
    return {
        link: function(a, b, c, d, e) {
            e(a.$parent, function(a) {
                b.empty(), b.append(a)
            })
        }
    }
}).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function(a, b, c, d, e, f) {
    function g() {
        for (var a = -1, b = n.keys(), c = 0; c < b.length; c++) n.get(b[c]).value.backdrop && (a = c);
        return a
    }

    function h(a) {
        var b = c.find("body").eq(0),
            d = n.get(a).value;
        n.remove(a), j(d.modalDomEl, d.modalScope, 300, function() {
            d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i()
        })
    }

    function i() {
        if (k && -1 == g()) {
            var a = l;
            j(k, l, 150, function() {
                a.$destroy(), a = null
            }), k = void 0, l = void 0
        }
    }

    function j(c, d, e, f) {
        function g() {
            g.done || (g.done = !0, c.remove(), f && f())
        }
        d.animate = !1;
        var h = a.transitionEndEventName;
        if (h) {
            var i = b(g, e);
            c.bind(h, function() {
                b.cancel(i), g(), d.$apply()
            })
        } else b(g)
    }
    var k, l, m = "modal-open",
        n = f.createNew(),
        o = {};
    return e.$watch(g, function(a) {
        l && (l.index = a)
    }), c.bind("keydown", function(a) {
        var b;
        27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function() {
            o.dismiss(b.key, "escape key press")
        })))
    }), o.open = function(a, b) {
        n.add(a, {
            deferred: b.deferred,
            modalScope: b.scope,
            backdrop: b.backdrop,
            keyboard: b.keyboard
        });
        var f = c.find("body").eq(0),
            h = g();
        if (h >= 0 && !k) {
            l = e.$new(!0), l.index = h;
            var i = angular.element("<div modal-backdrop></div>");
            i.attr("backdrop-class", b.backdropClass), k = d(i)(l), f.append(k)
        }
        var j = angular.element("<div modal-window></div>");
        j.attr({
            "template-url": b.windowTemplateUrl,
            "window-class": b.windowClass,
            size: b.size,
            index: n.length() - 1,
            animate: "animate"
        }).html(b.content);
        var o = d(j)(b.scope);
        n.top().value.modalDomEl = o, f.append(o), f.addClass(m)
    }, o.close = function(a, b) {
        var c = n.get(a);
        c && (c.value.deferred.resolve(b), h(a))
    }, o.dismiss = function(a, b) {
        var c = n.get(a);
        c && (c.value.deferred.reject(b), h(a))
    }, o.dismissAll = function(a) {
        for (var b = this.getTop(); b;) this.dismiss(b.key, a), b = this.getTop()
    }, o.getTop = function() {
        return n.top()
    }, o
}]).provider("$modal", function() {
    var a = {
        options: {
            backdrop: !0,
            keyboard: !0
        },
        $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function(b, c, d, e, f, g, h) {
            function i(a) {
                return a.template ? d.when(a.template) : e.get(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl, {
                    cache: f
                }).then(function(a) {
                    return a.data
                })
            }

            function j(a) {
                var c = [];
                return angular.forEach(a, function(a) {
                    (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
                }), c
            }
            var k = {};
            return k.open = function(b) {
                var e = d.defer(),
                    f = d.defer(),
                    k = {
                        result: e.promise,
                        opened: f.promise,
                        close: function(a) {
                            h.close(k, a)
                        },
                        dismiss: function(a) {
                            h.dismiss(k, a)
                        }
                    };
                if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                var l = d.all([i(b)].concat(j(b.resolve)));
                return l.then(function(a) {
                    var d = (b.scope || c).$new();
                    d.$close = k.close, d.$dismiss = k.dismiss;
                    var f, i = {},
                        j = 1;
                    b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function(b, c) {
                        i[c] = a[j++]
                    }), f = g(b.controller, i), b.controllerAs && (d[b.controllerAs] = f)), h.open(k, {
                        scope: d,
                        deferred: e,
                        content: a[0],
                        backdrop: b.backdrop,
                        keyboard: b.keyboard,
                        backdropClass: b.backdropClass,
                        windowClass: b.windowClass,
                        windowTemplateUrl: b.windowTemplateUrl,
                        size: b.size
                    })
                }, function(a) {
                    e.reject(a)
                }), l.then(function() {
                    f.resolve(!0)
                }, function() {
                    f.reject(!1)
                }), k
            }, k
        }]
    };
    return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function(a, b, c) {
    var d = this,
        e = {
            $setViewValue: angular.noop
        },
        f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function(f, g) {
        e = f, this.config = g, e.$render = function() {
            d.render()
        }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
            d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
        }) : this.itemsPerPage = g.itemsPerPage
    }, this.calculateTotalPages = function() {
        var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
        return Math.max(b || 0, 1)
    }, this.render = function() {
        a.page = parseInt(e.$viewValue, 10) || 1
    }, a.selectPage = function(b) {
        a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render())
    }, a.getText = function(b) {
        return a[b + "Text"] || d.config[b + "Text"]
    }, a.noPrevious = function() {
        return 1 === a.page
    }, a.noNext = function() {
        return a.page === a.totalPages
    }, a.$watch("totalItems", function() {
        a.totalPages = d.calculateTotalPages()
    }), a.$watch("totalPages", function(b) {
        f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
    })
}]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", ["$parse", "paginationConfig", function(a, b) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            firstText: "@",
            previousText: "@",
            nextText: "@",
            lastText: "@"
        },
        require: ["pagination", "?ngModel"],
        controller: "PaginationController",
        templateUrl: "template/pagination/pagination.html",
        replace: !0,
        link: function(c, d, e, f) {
            function g(a, b, c) {
                return {
                    number: a,
                    text: b,
                    active: c
                }
            }

            function h(a, b) {
                var c = [],
                    d = 1,
                    e = b,
                    f = angular.isDefined(k) && b > k;
                f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
                for (var h = d; e >= h; h++) {
                    var i = g(h, h, h === a);
                    c.push(i)
                }
                if (f && !l) {
                    if (d > 1) {
                        var j = g(d - 1, "...", !1);
                        c.unshift(j)
                    }
                    if (b > e) {
                        var m = g(e + 1, "...", !1);
                        c.push(m)
                    }
                }
                return c
            }
            var i = f[0],
                j = f[1];
            if (j) {
                var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize,
                    l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
                c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                    k = parseInt(a, 10), i.render()
                });
                var m = i.render;
                i.render = function() {
                    m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
                }
            }
        }
    }
}]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("pager", ["pagerConfig", function(a) {
    return {
        restrict: "EA",
        scope: {
            totalItems: "=",
            previousText: "@",
            nextText: "@"
        },
        require: ["pager", "?ngModel"],
        controller: "PaginationController",
        templateUrl: "template/pagination/pager.html",
        replace: !0,
        link: function(b, c, d, e) {
            var f = e[0],
                g = e[1];
            g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
        }
    }
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
    function a(a) {
        var b = /[A-Z]/g,
            c = "-";
        return a.replace(b, function(a, b) {
            return (b ? c : "") + a.toLowerCase()
        })
    }
    var b = {
            placement: "top",
            animation: !0,
            popupDelay: 0
        },
        c = {
            mouseenter: "mouseleave",
            click: "click",
            focus: "blur"
        },
        d = {};
    this.options = function(a) {
        angular.extend(d, a)
    }, this.setTriggers = function(a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate", function(e, f, g, h, i, j) {
        return function(e, k, l) {
            function m(a) {
                var b = a || n.trigger || l,
                    d = c[b] || b;
                return {
                    show: b,
                    hide: d
                }
            }
            var n = angular.extend({}, b, d),
                o = a(e),
                p = j.startSymbol(),
                q = j.endSymbol(),
                r = "<div " + o + '-popup title="' + p + "title" + q + '" content="' + p + "content" + q + '" placement="' + p + "placement" + q + '" animation="animation" is-open="isOpen"></div>';
            return {
                restrict: "EA",
                compile: function() {
                    var a = f(r);
                    return function(b, c, d) {
                        function f() {
                            D.isOpen ? l() : j()
                        }

                        function j() {
                            (!C || b.$eval(d[k + "Enable"])) && (s(), D.popupDelay ? z || (z = g(o, D.popupDelay, !1), z.then(function(a) {
                                a()
                            })) : o()())
                        }

                        function l() {
                            b.$apply(function() {
                                p()
                            })
                        }

                        function o() {
                            return z = null, y && (g.cancel(y), y = null), D.content ? (q(), w.css({
                                top: 0,
                                left: 0,
                                display: "block"
                            }), A ? h.find("body").append(w) : c.after(w), E(), D.isOpen = !0, D.$digest(), E) : angular.noop
                        }

                        function p() {
                            D.isOpen = !1, g.cancel(z), z = null, D.animation ? y || (y = g(r, 500)) : r()
                        }

                        function q() {
                            w && r(), x = D.$new(), w = a(x, angular.noop)
                        }

                        function r() {
                            y = null, w && (w.remove(), w = null), x && (x.$destroy(), x = null)
                        }

                        function s() {
                            t(), u()
                        }

                        function t() {
                            var a = d[k + "Placement"];
                            D.placement = angular.isDefined(a) ? a : n.placement
                        }

                        function u() {
                            var a = d[k + "PopupDelay"],
                                b = parseInt(a, 10);
                            D.popupDelay = isNaN(b) ? n.popupDelay : b
                        }

                        function v() {
                            var a = d[k + "Trigger"];
                            F(), B = m(a), B.show === B.hide ? c.bind(B.show, f) : (c.bind(B.show, j), c.bind(B.hide, l))
                        }
                        var w, x, y, z, A = angular.isDefined(n.appendToBody) ? n.appendToBody : !1,
                            B = m(void 0),
                            C = angular.isDefined(d[k + "Enable"]),
                            D = b.$new(!0),
                            E = function() {
                                var a = i.positionElements(c, w, D.placement, A);
                                a.top += "px", a.left += "px", w.css(a)
                            };
                        D.isOpen = !1, d.$observe(e, function(a) {
                            D.content = a, !a && D.isOpen && p()
                        }), d.$observe(k + "Title", function(a) {
                            D.title = a
                        });
                        var F = function() {
                            c.unbind(B.show, j), c.unbind(B.hide, l)
                        };
                        v();
                        var G = b.$eval(d[k + "Animation"]);
                        D.animation = angular.isDefined(G) ? !!G : n.animation;
                        var H = b.$eval(d[k + "AppendToBody"]);
                        A = angular.isDefined(H) ? H : A, A && b.$on("$locationChangeSuccess", function() {
                            D.isOpen && p()
                        }), b.$on("$destroy", function() {
                            g.cancel(y), g.cancel(z), F(), r(), D = null
                        })
                    }
                }
            }
        }
    }]
}).directive("tooltipPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    }
}).directive("tooltip", ["$tooltip", function(a) {
    return a("tooltip", "tooltip", "mouseenter")
}]).directive("tooltipHtmlUnsafePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
}).directive("tooltipHtmlUnsafe", ["$tooltip", function(a) {
    return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    }
}).directive("popover", ["$tooltip", function(a) {
    return a("popover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function(a, b, c) {
    var d = this,
        e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function(b, c) {
        e || c.css({
            transition: "none"
        }), this.bars.push(b), b.$watch("value", function(c) {
            b.percent = +(100 * c / a.max).toFixed(2)
        }), b.$on("$destroy", function() {
            c = null, d.removeBar(b)
        })
    }, this.removeBar = function(a) {
        this.bars.splice(this.bars.indexOf(a), 1)
    }
}]).directive("progress", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        templateUrl: "template/progressbar/progress.html"
    }
}).directive("bar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function(a, b, c, d) {
            d.addBar(a, b)
        }
    }
}).directive("progressbar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function(a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]))
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function(a, b, c) {
    var d = {
        $setViewValue: angular.noop
    };
    this.init = function(e) {
        d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
        var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
        a.range = this.buildTemplateObjects(f)
    }, this.buildTemplateObjects = function(a) {
        for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
            index: b
        }, {
            stateOn: this.stateOn,
            stateOff: this.stateOff
        }, a[b]);
        return a
    }, a.rate = function(b) {
        !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
    }, a.enter = function(b) {
        a.readonly || (a.value = b), a.onHover({
            value: b
        })
    }, a.reset = function() {
        a.value = d.$viewValue, a.onLeave()
    }, a.onKeydown = function(b) {
        /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
    }, this.render = function() {
        a.value = d.$viewValue
    }
}]).directive("rating", function() {
    return {
        restrict: "EA",
        require: ["rating", "ngModel"],
        scope: {
            readonly: "=?",
            onHover: "&",
            onLeave: "&"
        },
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f)
        }
    }
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function(a) {
    var b = this,
        c = b.tabs = a.tabs = [];
    b.select = function(a) {
        angular.forEach(c, function(b) {
            b.active && b !== a && (b.active = !1, b.onDeselect())
        }), a.active = !0, a.onSelect()
    }, b.addTab = function(a) {
        c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a)
    }, b.removeTab = function(a) {
        var e = c.indexOf(a);
        if (a.active && c.length > 1 && !d) {
            var f = e == c.length - 1 ? e - 1 : e + 1;
            b.select(c[f])
        }
        c.splice(e, 1)
    };
    var d;
    a.$on("$destroy", function() {
        d = !0
    })
}]).directive("tabset", function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@"
        },
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function(a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
        }
    }
}).directive("tab", ["$parse", function(a) {
    return {
        require: "^tabset",
        restrict: "EA",
        replace: !0,
        templateUrl: "template/tabs/tab.html",
        transclude: !0,
        scope: {
            active: "=?",
            heading: "@",
            onSelect: "&select",
            onDeselect: "&deselect"
        },
        controller: function() {},
        compile: function(b, c, d) {
            return function(b, c, e, f) {
                b.$watch("active", function(a) {
                    a && f.select(b)
                }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
                    b.disabled = !!a
                }), b.select = function() {
                    b.disabled || (b.active = !0)
                }, f.addTab(b), b.$on("$destroy", function() {
                    f.removeTab(b)
                }), b.$transcludeFn = d
            }
        }
    }
}]).directive("tabHeadingTransclude", [function() {
    return {
        restrict: "A",
        require: "^tab",
        link: function(a, b) {
            a.$watch("headingElement", function(a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}]).directive("tabContentTransclude", function() {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
    }
    return {
        restrict: "A",
        require: "^tabset",
        link: function(b, c, d) {
            var e = b.$eval(d.tabContentTransclude);
            e.$transcludeFn(e.$parent, function(b) {
                angular.forEach(b, function(b) {
                    a(b) ? e.headingElement = b : c.append(b)
                })
            })
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0
}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function(a, b, c, d, e, f) {
    function g() {
        var b = parseInt(a.hours, 10),
            c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
        return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
    }

    function h() {
        var b = parseInt(a.minutes, 10);
        return b >= 0 && 60 > b ? b : void 0
    }

    function i(a) {
        return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
    }

    function j(a) {
        k(), o.$setViewValue(new Date(n)), l(a)
    }

    function k() {
        o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
    }

    function l(b) {
        var c = n.getHours(),
            d = n.getMinutes();
        a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1]
    }

    function m(a) {
        var b = new Date(n.getTime() + 6e4 * a);
        n.setHours(b.getHours(), b.getMinutes()), j()
    }
    var n = new Date,
        o = {
            $setViewValue: angular.noop
        },
        p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
    this.init = function(c, d) {
        o = c, o.$render = this.render;
        var e = d.eq(0),
            g = d.eq(1),
            h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
        h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
    };
    var q = f.hourStep;
    b.hourStep && a.$parent.$watch(c(b.hourStep), function(a) {
        q = parseInt(a, 10)
    });
    var r = f.minuteStep;
    b.minuteStep && a.$parent.$watch(c(b.minuteStep), function(a) {
        r = parseInt(a, 10)
    }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function(b) {
        if (a.showMeridian = !!b, o.$error.time) {
            var c = g(),
                d = h();
            angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
        } else l()
    }), this.setupMousewheelEvents = function(b, c) {
        var d = function(a) {
            a.originalEvent && (a = a.originalEvent);
            var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
            return a.detail || b > 0
        };
        b.bind("mousewheel wheel", function(b) {
            a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
        }), c.bind("mousewheel wheel", function(b) {
            a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
        })
    }, this.setupInputEvents = function(b, c) {
        if (a.readonlyInput) return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
        var d = function(b, c) {
            o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
        };
        a.updateHours = function() {
            var a = g();
            angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
        }, b.bind("blur", function() {
            !a.invalidHours && a.hours < 10 && a.$apply(function() {
                a.hours = i(a.hours)
            })
        }), a.updateMinutes = function() {
            var a = h();
            angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
        }, c.bind("blur", function() {
            !a.invalidMinutes && a.minutes < 10 && a.$apply(function() {
                a.minutes = i(a.minutes)
            })
        })
    }, this.render = function() {
        var a = o.$modelValue ? new Date(o.$modelValue) : null;
        isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
    }, a.incrementHours = function() {
        m(60 * q)
    }, a.decrementHours = function() {
        m(60 * -q)
    }, a.incrementMinutes = function() {
        m(r)
    }, a.decrementMinutes = function() {
        m(-r)
    }, a.toggleMeridian = function() {
        m(720 * (n.getHours() < 12 ? 1 : -1))
    }
}]).directive("timepicker", function() {
    return {
        restrict: "EA",
        require: ["timepicker", "?^ngModel"],
        controller: "TimepickerController",
        replace: !0,
        scope: {},
        templateUrl: "template/timepicker/timepicker.html",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f, b.find("input"))
        }
    }
}), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function(a) {
    var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
    return {
        parse: function(c) {
            var d = c.match(b);
            if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
            return {
                itemName: d[3],
                source: a(d[4]),
                viewMapper: a(d[2] || d[1]),
                modelMapper: a(d[1])
            }
        }
    }
}]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function(a, b, c, d, e, f, g) {
    var h = [9, 13, 27, 38, 40];
    return {
        require: "ngModel",
        link: function(i, j, k, l) {
            var m, n = i.$eval(k.typeaheadMinLength) || 1,
                o = i.$eval(k.typeaheadWaitMs) || 0,
                p = i.$eval(k.typeaheadEditable) !== !1,
                q = b(k.typeaheadLoading).assign || angular.noop,
                r = b(k.typeaheadOnSelect),
                s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0,
                t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1,
                u = i.$eval(k.typeaheadFocusFirst) !== !1,
                v = b(k.ngModel).assign,
                w = g.parse(k.typeahead),
                x = i.$new();
            i.$on("$destroy", function() {
                x.$destroy()
            });
            var y = "typeahead-" + x.$id + "-" + Math.floor(1e4 * Math.random());
            j.attr({
                "aria-autocomplete": "list",
                "aria-expanded": !1,
                "aria-owns": y
            });
            var z = angular.element("<div typeahead-popup></div>");
            z.attr({
                id: y,
                matches: "matches",
                active: "activeIdx",
                select: "select(activeIdx)",
                query: "query",
                position: "position"
            }), angular.isDefined(k.typeaheadTemplateUrl) && z.attr("template-url", k.typeaheadTemplateUrl);
            var A = function() {
                    x.matches = [], x.activeIdx = -1, j.attr("aria-expanded", !1)
                },
                B = function(a) {
                    return y + "-option-" + a
                };
            x.$watch("activeIdx", function(a) {
                0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", B(a))
            });
            var C = function(a) {
                var b = {
                    $viewValue: a
                };
                q(i, !0), c.when(w.source(i, b)).then(function(c) {
                    var d = a === l.$viewValue;
                    if (d && m)
                        if (c.length > 0) {
                            x.activeIdx = u ? 0 : -1, x.matches.length = 0;
                            for (var e = 0; e < c.length; e++) b[w.itemName] = c[e], x.matches.push({
                                id: B(e),
                                label: w.viewMapper(x, b),
                                model: c[e]
                            });
                            x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
                        } else A();
                    d && q(i, !1)
                }, function() {
                    A(), q(i, !1)
                })
            };
            A(), x.query = void 0;
            var D, E = function(a) {
                    D = d(function() {
                        C(a)
                    }, o)
                },
                F = function() {
                    D && d.cancel(D)
                };
            l.$parsers.unshift(function(a) {
                return m = !0, a && a.length >= n ? o > 0 ? (F(), E(a)) : C(a) : (q(i, !1), F(), A()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
            }), l.$formatters.push(function(a) {
                var b, c, d = {};
                return s ? (d.$model = a, s(i, d)) : (d[w.itemName] = a, b = w.viewMapper(i, d), d[w.itemName] = void 0, c = w.viewMapper(i, d), b !== c ? b : a)
            }), x.select = function(a) {
                var b, c, e = {};
                e[w.itemName] = c = x.matches[a].model, b = w.modelMapper(i, e), v(i, b), l.$setValidity("editable", !0), r(i, {
                    $item: c,
                    $model: b,
                    $label: w.viewMapper(i, e)
                }), A(), d(function() {
                    j[0].focus()
                }, 0, !1)
            }, j.bind("keydown", function(a) {
                0 !== x.matches.length && -1 !== h.indexOf(a.which) && (-1 != x.activeIdx || 13 !== a.which && 9 !== a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function() {
                    x.select(x.activeIdx)
                }) : 27 === a.which && (a.stopPropagation(), A(), x.$digest()))
            }), j.bind("blur", function() {
                m = !1
            });
            var G = function(a) {
                j[0] !== a.target && (A(), x.$digest())
            };
            e.bind("click", G), i.$on("$destroy", function() {
                e.unbind("click", G), t && H.remove()
            });
            var H = a(z)(x);
            t ? e.find("body").append(H) : j.after(H)
        }
    }
}]).directive("typeaheadPopup", function() {
    return {
        restrict: "EA",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function(a, b, c) {
            a.templateUrl = c.templateUrl, a.isOpen = function() {
                return a.matches.length > 0
            }, a.isActive = function(b) {
                return a.active == b
            }, a.selectActive = function(b) {
                a.active = b
            }, a.selectMatch = function(b) {
                a.select({
                    activeIdx: b
                })
            }
        }
    }
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function(a, b, c, d) {
    return {
        restrict: "EA",
        scope: {
            index: "=",
            match: "=",
            query: "="
        },
        link: function(e, f, g) {
            var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
            a.get(h, {
                cache: b
            }).success(function(a) {
                f.replaceWith(c(a.trim())(e))
            })
        }
    }
}]).filter("typeaheadHighlight", function() {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    return function(b, c) {
        return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
}]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function(a) {
    a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
}]), angular.module("template/alert/alert.html", []).run(["$templateCache", function(a) {
    a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
}]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
}]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function(a) {
    a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
}]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
}]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
}]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function(a) {
    a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
}]), angular.module("template/modal/window.html", []).run(["$templateCache", function(a) {
    a.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')
}]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
}]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function(a) {
    a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
}]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]), angular.module("template/popover/popover.html", []).run(["$templateCache", function(a) {
    a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
}]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
}]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function(a) {
    a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
}]), angular.module("template/rating/rating.html", []).run(["$templateCache", function(a) {
    a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
}]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function(a) {
    a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function(a) {
    a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
}]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function(a) {
    a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
}]);
/* From local.js */
var livesearchon = ""; //Enable or disable live search. "true" for on. blank or any other value for off.
var minchars = 2; //Min number of characters input before suggestions are triggered
var suggestionsfile = "/en_GX/webadmin/ajax/livesearch/livesearch.xml";
var arr_ss = new Array();

/*** Graceful degrade for non-javascript users & some event capture for livesearch ***/
// window.onload = addscript; // Graceful degrade stuff for non-javascript users
document.onclick = hidelivesearch; // Onclick capturing for closing live search box
(function($) {
    $.fn.jTruncate = function(h) {
        var i = {
            length: 300,
            minTrail: 20,
            moreText: "more",
            lessText: "less",
            ellipsisText: "...",
            moreAni: "",
            lessAni: ""
        };
        var h = $.extend(i, h);
        return this.each(function() {
            obj = $(this);
            var a = obj.html();
            if (a.length > h.length + h.minTrail) {
                var b = a.indexOf(' ', h.length);
                if (b != -1) {
                    var b = a.indexOf(' ', h.length);
                    var c = a.substring(0, b);
                    var d = a.substring(b, a.length - 1);
                    obj.html(c + '<span class="truncate_ellipsis">' + h.ellipsisText + '</span>' + '<span class="truncate_more">' + d + '</span>');
                    obj.find('.truncate_more').css("display", "none");
                    obj.append('<div class="clearboth">' + '<a href="#" class="truncate_more_link">' + h.moreText + '</a>' + '</div>');
                    var e = $('.truncate_more_link', obj);
                    var f = $('.truncate_more', obj);
                    var g = $('.truncate_ellipsis', obj);
                    e.click(function() {
                        if (e.text() == h.moreText) {
                            f.show(h.moreAni);
                            e.text(h.lessText);
                            g.css("display", "none")
                        } else {
                            f.hide(h.lessAni);
                            e.text(h.moreText);
                            g.css("display", "inline")
                        }
                        return false
                    })
                }
            }
        })
    }
})(jQuery);

var ccode = "";
var lcode = "";
var lccode = "";
var jsdevice = "desktop";

function addscript() {

}

/* ALL jquery.document ready loaded here */

$(document).ready(function() {

    /* 2013 HP */
    $("#homeslider .slide").css("width", ($('#homeslider').width() - 40));
    $("#homeslider .slide").css("height", ($('#homeslider').height() - 27));
    $("#homeslider").scrollable({
            circular: true,
            size: 1,
            speed: 600,
            easing: 'swing',
            touch: false
        })
        .navigator({
            navi: ".navi"
        })
        .autoscroll({
            autoplay: true,
            autopause: true,
            interval: 8000
        }).handleSwipes();
    var navicount = 0;
    $("#homeslider .navi a").each(function(index) {
        navicount = index + 1;
        $(this).html(navicount);
    });
    if (navicount == 1) {
        $("#homeslider").data("scrollable").stop();
        $("#homeslider").addClass("singleslide");
    }
    $("#homeslider").click(function() {
        $("#homeslider").data("scrollable").stop();
    });
    $("#homeslider > .sliderfooter > a").click(function() {
        $("#homeslider").data("scrollable").stop();
    });

    /*
        $("#videoslider .slide").css("width", ($('#videoslider').width()-40));
		$("#videoslider .slide").css("height", ($('#videoslider').height()-27));
		$("#videoslider")
			.scrollable({ circular: true, size: 1, speed: 600, easing: 'swing', touch: false, next: '.vidnext', prev: '.vidprev' })
			.navigator({navi: ".vidnavi"})
			.autoscroll({ interval: 5000, autopause: true, autoplay: false, api: false });
		$("#videoslider > .items > .video").prepend("<div class='vidicon'></div>");
		*/
    /* END */

    $('#intlsiteslink').click(function() {
        $("#intlsites").toggle();
        return false;
    });
    $('.intlclose').click(function() {
        $("#intlsites").hide();
    });

    $('#morecontactsbutton').click(function() {
        $("#morecontacts").slideDown("medium");
        $("#lesscontactsbutton").show();
        $("#morecontactsbutton").hide();
        return false;
    });
    $('#lesscontactsbutton').click(function() {
        $("#morecontacts").slideUp("medium");
        $("#morecontactsbutton").show();
        $("#lesscontactsbutton").hide();
        return false;
    });
    $('#showlocalbutton').click(function() {
        $("#localcontacts").slideDown("medium");
        $("#hidelocalbutton").show();
        $("#showlocalbutton").hide();
        return false;
    });
    $('#hidelocalbutton').click(function() {
        $("#localcontacts").slideUp("medium");
        $("#showlocalbutton").show();
        $("#hidelocalbutton").hide();
        return false;
    });
    $('.shareprint').click(function() {
        window.print();
        return false;
    });


    $("#pwcslider .feature").css("width", ($('#pwcslider').width() - 40));
    $("#pwcslider .feature").css("height", ($('#pwcslider').height() - 27));
    //$("#pwcslider").scrollable({ circular: true, size: 1, speed: 400, easing: 'swing', touch: false }).navigator({navi: ".navi",naviItem: 'a'}).autoscroll({ autoplay: true, autopause: true, interval: 5000 }).handleSwipes();
    //$("#pwcslider").scrollable({ circular: true, size: 1, speed: 400, easing: 'swing', touch: false }).navigator().autoscroll({ autoplay: true, autopause: true, interval: 5000 }).handleSwipes();
    //$("#pwcslider").scrollable({ circular: true, size: 1, speed: 400, easing: 'swing', touch: false }).navigator({navi: ".navi",naviItem: 'a'}).handleSwipes();
    $("#pwcslider").scrollable({
        circular: true,
        size: 1,
        speed: 400,
        easing: 'swing',
        touch: false
    }).navigator({
        navi: ".navi",
        naviItem: 'a'
    });
    //$("#pwcslider.static").data("scrollable").stop();

    var contacttooltipoffset = 0
    if (((BrowserDetect.browser) == "Explorer") & ((BrowserDetect.version) == 8)) {
        contacttooltipoffset = -225;
    }
    $(".contacttooltip").tooltip({
        position: "bottom left",
        relative: "true",
        offset: [-27, contacttooltipoffset]
    });

    $('.expander h3').click(function() {
        $(this).parent('div').slideToggle('fast', function() {});
        $(this).parent().siblings('div').slideToggle('fast', function() {});
    });

    //$("#accordion").tabs("#accordion div.pane", {tabs: 'h2', effect: 'slide', initialIndex: null});
    $("#accordion > h2").click(function() {
        if (this.className == "current") {
            $(this).removeClass("current");
            $(this).next("div.pane").slideToggle("slow", function() {
                $("#accordion h2").css("overflow", "hidden")
            });
        } else {
            $(this).parent().children("h2").removeClass("current");
            $(this).parent().children("div.pane").slideUp("slow");
            $(this).toggleClass("current");
            $(this).next("div.pane").slideToggle("slow", function() {
                $("#accordion h2").css("overflow", "hidden")
            });
        }
    });
    $(".accordion > h2").click(function() {
        if (this.className == "current") {
            $(this).removeClass("current");
            $(this).next("div.pane").slideToggle("slow", function() {
                $(".accordion h2").css("overflow", "hidden")
            });
        } else {
            $(this).parent().children("h2").removeClass("current");
            $(this).parent().children("div.pane").slideUp("slow");
            $(this).toggleClass("current");
            $(this).next("div.pane").slideToggle("slow", function() {
                $(".accordion h2").css("overflow", "hidden")
            });
        }
    });

    $("#promofeatures").scrollable().navigator({
        navi: "#flowtabs",
        naviItem: 'a'
    });
    $(".promostaticnav").tabs("#promostatic > .item", {
        effect: 'fade',
        rotate: 'true',
        fadeOutSpeed: 'fast'
    }).slideshow({
        autoplay: 'true',
        interval: '9000'
    });

    $('.tooltipgeneral[title]').tooltip({
        tipClass: 'tipgeneral',
        position: 'top right',
        offset: [-2, -18]
    });

    var highestBox = 0;
    $('.matchheight', this).each(function() {
        if ($(this).height() > highestBox)
            highestBox = $(this).height();
    });
    $('.matchheight', this).height(highestBox);

    /*
    if ($("#pagetoolsnew").length) {
    	$("#pagetoolsnew a").each(function( index ) {
    		var origlink = $(this).attr('href');
    		var theitem = "#" + $(this).attr('id');
    		getbitly(origlink, function(short_url) {
    			$(theitem).attr("href", short_url);
    		});
    	});
    }
    */

});


/*
$(window).load(function(){

});
*/


$.fn.handleSwipes = function() {
    return this.each(function() {
        var api = $(this).data("scrollable");
        if (api) {
            api.getRoot().addSwipeEvents().bind('swipeleft', function() {
                api.next();
            }).bind('swiperight', function() {
                api.prev();
            });
        }
    });
};
/*
function openpopup() {
	window.open('popup.html','popup','width=500,height=500');
}
*/

/* 2013 Homepage 
function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).outerHeight(true);
		if(thisHeight > tallest) {
			tallest = thisHeight-5;
		}
	});
	group.height(tallest);
}

$(document).ready(function() {
	setTimeout(function(){
		equalHeight($(".matchheight"));
	}, 300);
});

$(window).bind("load", function() {
   equalHeight($(".matchheight"));
});
*/

/*** START Primary nav hover function for IE ***/
if (document.getElementById('nav')) {
    sfHover = function() {
        var sfEls = document.getElementById("nav").getElementsByTagName("LI");
        for (var i = 0; i < sfEls.length; i++) {
            sfEls[i].onmouseover = function() {
                this.className += " sfhover";
            }
            sfEls[i].onmouseout = function() {
                this.className = this.className.replace(new RegExp(" sfhover\\b"), "");
            }
        }
    }
    if (window.attachEvent) window.attachEvent("onload", sfHover);
}


/*** START Live search ***/

var xmlHttp, metacnt

function showResult(str) {
    // Clear the suggestions box when no chars
    if (str.length <= minchars) {
        document.getElementById("livesearch").innerHTML = "";
        document.getElementById("livesearch").style.visibility = "hidden";
        return
    }
    if (livesearchon != "true") {
        return
    }

    // Place the AJAX loading gif. Replaced with the clear icon after the request is complete (below)
    document.getElementById("livesearchbutton").src = "/etc/designs/pwc/css_common/image/ajaxload.gif";
    document.getElementById("livesearchbutton").className = "";

    xmlhttp = null;

    var metas = document.getElementsByTagName('META');
    for (metacnt = 0; metacnt < metas.length; metacnt++) {
        if (metas[metacnt].getAttribute('NAME') == "pwcCountry") {
            ccode = metas[metacnt].getAttribute('CONTENT');
        } else if (metas[metacnt].getAttribute('NAME') == "pwcLang") {
            lcode = metas[metacnt].getAttribute('CONTENT');
        } else if (metas[metacnt].getAttribute('NAME') == "pwcLocale") {
            lccode = metas[metacnt].getAttribute('CONTENT');
        }
        if ((ccode != "") && (lcode != "") && (lccode != "")) break;
    }
    if (ccode == "") {
        ccode = "gx";
    }
    if (lcode == "") {
        lcode = "en";
    }
    if (lccode == "") {
        lccode = "en_GX";
    }

    if (suggestionsfilelocal == "") {
        var url = "/en_GX/webadmin/search/liveresults.xml?pwcGeo=" + ccode + "&pwcLang=" + lcode + "&q=" + str + "*";
    } else {
        var url = suggestionsfilelocal + "&q=" + str + "*";
    }
    //$("#footerlinks").append(url);

    if (window.XMLHttpRequest) { // code for IE7, Firefox, Mozilla, etc.
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // code for IE5, IE6
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (xmlhttp != null) {
        xmlhttp.onreadystatechange = processsearch;
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    } else {
        //alert("Your browser does not support XMLHTTP.");
        clearlivesearch();
        return;
    }
}

function processsearch() { // Check if file is valid & if so do something with its contents

    // Take the current search string
    var str = document.getElementById("searchfield").value.toLowerCase();

    // Break the loop when http call is complete or there's an error
    if (xmlhttp.readyState != 4) return;
    if (xmlhttp.status != 200) {
        /*
        	alert("Problem retrieving XML data");
        	alert(xmlhttp.readyState);
        	alert(xmlhttp.status);
        */
        clearlivesearch();
        return;
    }

    // Locate the link element to traverse
    x = xmlhttp.responseXML.documentElement.getElementsByTagName("link");
    var searchoutput = "";

    if (livesearchheader === undefined) {
        var livesearchheader = "Recommended results";
    }
    if (livesearchlink === undefined) {
        var livesearchlink = "View all results";
    }
    if (livesearchurl === undefined) {
        var livesearchurl = "/en_GX/webadmin/search/search.jhtml?pwcGeo=" + ccode + "&pwcLang=" + lcode + "&localeOverride=" + lccode + "&pwcHideLevel=0&q=";
    }

    var searchoutputheader = "<div id='livesearchheader'>" + livesearchheader + "</div>";
    var searchoutputfooter = "<div id='livesearchfooter'><a href='" + livesearchurl + str + "'>" + livesearchlink + " >></a></div>";

    if (str.length > minchars) {

        // Loop through all link elements
        for (i = 0; i < x.length; i++) {
            if (i == 5) {
                break;
            }
            xtitles = x[i].getElementsByTagName("title");
            xkeywords = x[i].getElementsByTagName("keyword");
            xurls = x[i].getElementsByTagName("url"); {
                try {
                    var testquery = xkeywords[0].firstChild.nodeValue.toLowerCase();
                    if (testquery.indexOf(str) != -1) {
                        searchoutput = searchoutput + "<a href='" + xurls[0].firstChild.nodeValue + "?query=" + str + "&live=1" + "'>" + xtitles[0].firstChild.nodeValue + "</a><br />";
                    } else {
                        searchoutput = searchoutput + "";
                    }
                } catch (er) {
                    searchoutput = searchoutput + "";
                }
            }
        }

    }

    if (searchoutput == "") {
        // Collapse the suggestions box when no matches & halt the ajax loading gif
        document.getElementById("livesearch").style.visibility = "hidden";
        document.getElementById("livesearchbutton").src = "/etc/designs/pwc/css_common/image/tran.gif";
        document.getElementById("livesearchbutton").className = "";
    } else {
        // Return the response, only when xml http call is done. Show the close button, replacing the ajax gif
        if (xmlhttp.readyState == 4 || xmlhttp.readyState == "complete") {
            document.getElementById("livesearch").style.visibility = "visible";
            document.getElementById("livesearch").innerHTML = searchoutputheader + searchoutput + searchoutputfooter;
            document.getElementById("livesearchbutton").src = "/etc/designs/pwc/css_common/image/tran.gif";
            document.getElementById("livesearchbutton").className = "";
        }
    }

}

function clearsearch() { //Clear from initial focus
    document.getElementById("searchfield").value = "";
}

function clearlivesearch() { // Clear from the button & also hide the button
    document.getElementById("searchfield").value = " Search";
    document.getElementById("livesearch").innerHTML = "";
    document.getElementById("livesearch").style.visibility = "hidden";
    document.getElementById("livesearchbutton").src = "/etc/designs/pwc/css_common/image/tran.gif";
    document.getElementById("livesearchbutton").className = "";
}

// Hide the livesearch box on a click outside its div
function hidelivesearch(evt) {
    evt = evt || window.event;
    var targ = evt.target || evt.srcElement;

    // If the livesearch box is open, clear it
    if (targ.id == "livesearch" || targ.id == "livesearchheader" || targ.id == "livesearchfooter" || targ.id == "searchsubmit") {
        return;
    } else {
        if (document.getElementById("livesearch")) {
            if (document.getElementById("livesearch").style.visibility == "visible") {
                clearlivesearch();
            }
        }
    }

}

/* Homepage Follow bar 
var followbarhtml = "<div id='followbar'><div id='followinner'><span>Follow us:</span>";

if ($('meta[name=pwcCountry]').attr("content") == 'rm') {

	if (arr_follow [0] === undefined) {
		// Twitter
		arr_follow [0] = new Array()
		arr_follow [0][0] = "/en_GX/webadmin/assets/image/follow-twitter.jpg";
		arr_follow [0][1] = "https://twitter.com/PwC_LLP/"
		arr_follow [0][2] = "";  // E.G. arr_ss [0][2] = "&param=something";
		arr_follow [0][3] = "Follow us on Twitter";
		arr_follow [0][4] = "";
		arr_follow [0][5] = "_new";
	}
	if (arr_follow [1] === undefined) {
		// LinkedIn
		arr_follow [1] = new Array()
		arr_follow [1][0] = "/en_GX/webadmin/assets/image/follow-linkedin.jpg";
		arr_follow [1][1] = "http://www.linkedin.com/company/pwc"
		arr_follow [1][2] = "";
		arr_follow [1][3] = "Follow us on Linked In";
		arr_follow [1][4] = "";
		arr_follow [1][5] = "_new";
	}
	if (arr_follow [2] === undefined) {
		// Youtube
		arr_follow [2] = new Array()
		arr_follow [2][0] = "/en_GX/webadmin/assets/image/follow-youtube.jpg";
		arr_follow [2][1] = "http://www.linkedin.com/company/pwc"
		arr_follow [2][2] = "";
		arr_follow [2][3] = "Follow us on Youtube";
		arr_follow [2][4] = "";
		arr_follow [2][5] = "_new";
	}
	if (arr_follow [3] === undefined) {
		// Facebook
		arr_follow [3] = new Array()
		arr_follow [3][0] = "/en_GX/webadmin/assets/image/follow-facebook.jpg";
		arr_follow [3][1] = "https://www.facebook.com/pwcfanpage"
		arr_follow [3][2] = "";
		arr_follow [3][3] = "Follow us on Facebook";
		arr_follow [3][4] = "";
		arr_follow [3][5] = "_new";
	}
	if (arr_follow [4] === undefined) {
		// RSS
		arr_follow [4] = new Array()
		arr_follow [4][0] = "/en_GX/webadmin/assets/image/follow-rss.jpg";
		arr_follow [4][1] = "#"
		arr_follow [4][2] = "";
		arr_follow [4][3] = "Our RSS feed";
		arr_follow [4][4] = "";
		arr_follow [4][5] = "_new";
	}
	/*
	if (arr_follow [5] === undefined) {
		// Subscribe
		arr_follow [5] = new Array()
		arr_follow [5][0] = "/en_GX/webadmin/assets/image/follow-subscribe.jpg";
		arr_follow [5][1] = "#"
		arr_follow [5][2] = "";
		arr_follow [5][3] = "Subscribe";
		arr_follow [5][4] = "";
		arr_follow [5][5] = "_new";
	}
	*/
/*
	for (i=0;i<arr_follow.length; i++) {
		 followbarhtml += "<a href='" + arr_follow[i][1] + "&title=" + arr_follow[i][2] + "' onclick='" + arr_follow[i][4] + "' target='_blank'><img src='" + arr_follow[i][0] + "' border='0' alt='" + arr_follow[i][3] + "' /></a>";
	}
}
	followbarhtml += "<a id='followhide'>Hide</a></div></div>"

*/
/*** START Send & share global defaults ***/

if (sharetitle === undefined) {
    var sharetitle = "Share";
}

function writesharelink() {
    document.write("<li id='ptshare'><a href='#' target='_self' class='shareicon' onclick='shareboxreveal(); return false;'>" + sharetitle + "</a></li>");
}

// Icon, Pre-URL, Post-URL, Description/alt tag, Onlick, A Target. Only declare them if they don't already exist from local.js

if (arr_ss[0] === undefined) {
    // Twitter
    arr_ss[0] = new Array()
    arr_ss[0][0] = "/etc/designs/pwc/css_common/image/share_twitter.gif";
    arr_ss[0][1] = "http://twitter.com/home?status=" + escape(window.location);
    arr_ss[0][2] = ""; // E.G. arr_ss [0][2] = "&param=something";
    arr_ss[0][3] = "Twitter";
    arr_ss[0][4] = "";
    arr_ss[0][5] = "_new";
}

if (arr_ss[1] === undefined) {
    // Facebook
    arr_ss[1] = new Array()
    arr_ss[1][0] = "/etc/designs/pwc/css_common/image/share_facebook.gif";
    arr_ss[1][1] = "http://www.facebook.com/share.php?u=" + escape(window.location);
    arr_ss[1][2] = "";
    arr_ss[1][3] = "Facebook";
    arr_ss[1][4] = "";
    arr_ss[1][5] = "_new";
}

if (arr_ss[2] === undefined) {
    // Linkedin
    arr_ss[2] = new Array()
    arr_ss[2][0] = "/etc/designs/pwc/css_common/image/share_linked.gif";
    arr_ss[2][1] = "http://www.linkedin.com/shareArticle?mini=true&url=" + escape(window.location);
    arr_ss[2][2] = "";
    arr_ss[2][3] = "Linkedin";
    arr_ss[2][4] = "";
    arr_ss[2][5] = "_new";
}

if (arr_ss[3] === undefined) {
    // Google+
    arr_ss[3] = new Array()
    arr_ss[3][0] = "/etc/designs/pwc/css_common/image/share_googleplus2.gif";
    arr_ss[3][1] = "https://plus.google.com/share?url=" + escape(window.location);
    arr_ss[3][2] = "";
    arr_ss[3][3] = "Google+";
    arr_ss[3][4] = "";
    arr_ss[3][5] = "_new";
}

/*
	if (arr_ss [4] === undefined) {
		// Mixx
		arr_ss [4] = new Array()
		arr_ss [4][0] = "/en_GX/webadmin/assets/image/share_mixx.gif";
		arr_ss [4][1] = "http://www.mixx.com/submit?page_url=" + escape(window.location);
		arr_ss [4][2] = "";
		arr_ss [4][3] = "Mixx";
		arr_ss [4][4] = "";
		arr_ss [4][5] = "_new";
	}

	if (arr_ss [5] === undefined) {
		// Digg
		arr_ss [5] = new Array()
		arr_ss [5][0] = "/en_GX/webadmin/assets/image/share_digg.gif";
		arr_ss [5][1] = "http://digg.com/submit?phase=2&url=" + escape(window.location);
		arr_ss [5][2] = "";
		arr_ss [5][3] = "Digg";
		arr_ss [5][4] = "";
		arr_ss [5][5] = "_new";
	}
*/

function shareboxreveal() { // Show, hide or add to territory selector box
    document.getElementById('sharebox').style.display = 'block';
}

function shareboxhide() { // Clear the contents of the box and hide the div
    document.getElementById('sharebox').style.display = 'none';
}

function writesharebox() { // Taken from HTML for 3rd party templates
    var sendshare = "<div id='sharebox'><ul id='shareicons'><div id='shareboxclose'><a href='#' onClick='shareboxhide(); return false;'><img src='/etc/designs/pwc/css_common/image/icon_close.gif' alt='Close' border='0' /></a></div>"
    if (window.sendsharetitle === undefined) {
        window.sendsharetitle = escape("Page title here");
    }
    for (i = 0; i < arr_ss.length; i++) {
        sendshare = sendshare + "<li id='share" + i + "'><a href='" + arr_ss[i][1] + "&title=" + sendsharetitle + arr_ss[i][2] + "' onclick='" + arr_ss[i][4] + "' target='_blank' class='shareicon'><img src='" + arr_ss[i][0] + "' border='0' alt='" + arr_ss[i][3] + "' />&nbsp;" + arr_ss[i][3] + "</a></li>";
    }
    sendshare = sendshare + "</ul></div>";
    document.write(sendshare);
}

function writesharelinks() {
    var sharelinks = ""
    for (i = 0; i < arr_ss.length; i++) {
        sharelinks = sharelinks + "<li id='share" + i + "'><a href='" + arr_ss[i][1] + arr_ss[i][2] + "' onclick='" + arr_ss[i][4] + "' target='" + arr_ss[i][5] + "' class='shareitem'><img src='" + arr_ss[i][0] + "' border='0' alt='" + arr_ss[i][3] + "' /></a></li>";
    }
}

// Default R2 forms validation message (translatable))
if (formvalidationmsg === undefined) {
    var formvalidationmsg = "Please complete the highlighted fields";
}

/*** START Lightweight browser detection ***/

//alert(BrowserDetect.browser + ' ' + BrowserDetect.version + ' on ' + BrowserDetect.OS);

var BrowserDetect = {
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) ||
            this.searchVersion(navigator.appVersion) ||
            "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function(data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            } else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function(dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    }, {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    }, {
        prop: window.opera,
        identity: "Opera"
    }, {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    }, {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    }, { // for newer Netscapes (6+)
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    }, {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    }, { // for older Netscapes (4-)
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    dataOS: [{
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    }, {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    }, {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }]

};
BrowserDetect.init();


//RELEASE 4.1
var documentForm

function getXMLObject() //XML OBJECT
{
    var xmlHttp = false;
    try {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP") // For Old Microsoft Browsers
    } catch (e) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP") // For Microsoft IE 6.0+
        } catch (e2) {
            xmlHttp = false // No Browser accepts the XMLHTTP Object then false
        }
    }
    if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
        xmlHttp = new XMLHttpRequest(); //For Mozilla, Opera Browsers
    }
    return xmlHttp; // Mandatory Statement returning the ajax object created
}

function ajaxFunction() {
    xmlhttp = new getXMLObject();
    if (xmlhttp) {
        var recaptcha_challenge_field = document.getElementById("recaptcha_challenge_field").value;
        var recaptcha_response_field = document.getElementById("recaptcha_response_field").value;
        xmlhttp.open("GET", "/reCaptcha?recaptcha_challenge_field=" + recaptcha_challenge_field + "&recaptcha_response_field=" + recaptcha_response_field, true);
        xmlhttp.onreadystatechange = handleServerResponse;
        //xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlhttp.send();
    }
}

function handleServerResponse() {
    if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200) {
            if (xmlhttp.responseText == "valid") {
                var note = document.getElementById('note').value;
                var yourRealEmail = document.getElementById('yourRealEmail').value;
                document.getElementById('note').value = yourRealEmail + " recommends this page. " + "\n\n" + note;
                documentForm.action = document.getElementsByName('LotusURL')[0].value;
                documentForm.submit();
                return;
            } else if (xmlhttp.responseText == "invalid") {
                document.getElementById("errormessage").innerHTML = "<span style='color:#FF0000'><b>* CAPTCHA validation failed.</b></span>";
                Recaptcha.reload();
                return;
            }

        } else {
            alert("Error during AJAX call. Please try again");
        }
    }
}


// ############### START EMAIL A COLLEAGE FUNCTIONS #######################
// Name -- emailpage
//Author: Roger Darus/E Solutions
//Additional Editors: Roger Darus/E Solutions
//Additional Editors: Sirnjeet Kalwan
// Description of code -- Form input validation and window opener

//RELEASE 4.1
function inputValidation(form) {
    documentForm = form;
    var errorText;
    document.getElementById("errormessage").innerHTML = "";
    // Valid friends email
    errorText = form.ValidationField1.value;
    if (!validEmailMulti(form.friendsEmail.value)) {
        alert(errorText);
        form.friendsEmail.focus();
        return;
    }
    //Validate name
    errorText = form.ValidationField2.value;
    if (form.name.value == "") {
        alert(errorText);
        form.name.focus();
        return;
    }
    //Validate users email address	
    errorText = form.ValidationField3.value;
    if (!validEmailMulti(form.yourEmail.value)) {
        alert(errorText);
        form.yourEmail.focus();
        return;
    }
    ajaxFunction();

}

function validEmail(email) {
    var reg1 = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/; // not valid
    var reg2 = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,6}|[0-9]{1,3})(\]?)$/; // valid
    return (!reg1.test(email) && reg2.test(email));
}

function removeSpaces(string) {
    var tstring = "";
    string = '' + string;
    splitstring = string.split(" ");
    for (i = 0; i < splitstring.length; i++)
        tstring += splitstring[i];
    return tstring;
}

function validEmailMulti(email) {
    email = removeSpaces(email);
    var final = 0;
    while (final == 0) {
        comma = email.indexOf(",");
        if (comma == -1) {
            final = 1;
            currentemail = email
        } else {
            currentemail = email.substring(0, comma);
            email = email.substring(comma + 1, email.length);
        }
        returncode = validEmail(currentemail);
        if (!returncode) {
            return false;
        }
        if (final == 1) {
            return true;
        }
    }
}

// read meta tag for value
function readMetaTag(tagName) {

    var content = "";

    // check for various browsers and versions  

    if (document.getElementById) {
        if (document.getElementById(tagName)) content = document.getElementById(tagName).content;
    } else if (document.all) {
        if (document.all[tagName]) content = document.all[tagName].content;
    } else if (document.layers) {
        if (document.layers[tagName]) content = document.layers[tagName].content;
    }

    return content;

}
//form validation
function ValidateandSubmit() {

    var msgtxt = "";
    var frmName = "";
    var frm;

    if (document.getElementById) {
        frm = document.getElementById("_Notes");
    } else if (document.all) {
        frm = document.all["_Notes"];
    } else if (document.layers) {
        frm = document.layers["_Notes"];
    }

    if (frm != null) {
        frmName = "_Notes";
    } else {
        frmName = "_onlineForm";
    }

    var reqflds = document[frmName].ReqFields.value;
    reqflds = reqflds.split(";");

    var valType = document[frmName].ValidationType.value;
    valType = valType.split(";");

    var alrtVals = document[frmName].AlertValue.value;
    alrtVals = alrtVals.split("@@");

    var firstFocus;
    var success = true;
    var focusSet = 0;
    var noOfLines = 0;
    var fldval = "";


    for (i = 0; i < reqflds.length; i++) {
        reqflds[i] = "document." + frmName + "." + reqflds[i];
    }

    for (i = 0; i < reqflds.length; i++) {

        if (valType[i] == "Text") {

            var fldval = eval(reqflds[i]).value;
            if (fldval == "") {
                msgtxt = msgtxt + "\n" + alrtVals[i];
                if (focusSet == 0) {
                    firstFocus = eval(reqflds[i]);
                    focusSet = 1;
                    success = false;
                }
            }
        } else if (valType[i] == "Email") {
            var reg1 = /(@.*@)|(\.\.)|(@\.)|(\.@)|(^\.)/; // not valid
            var reg2 = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,6}|[0-9]{1,3})(\]?)$/; // valid
            var fldval = eval(reqflds[i]).value;

            if (!reg1.test(fldval) && reg2.test(fldval)) {} else {
                msgtxt = msgtxt + "\n" + alrtVals[i];
            }
            if (focusSet == 0) {
                firstFocus = eval(reqflds[i]);
                focusSet = 1;
                success = false
            };
        } else if (valType[i] == "Check/Radio") {
            var x = "";

            if (isNaN(eval(reqflds[i]).length)) {
                // Checkbox contains only one choice.
                if (eval(reqflds[i]).checked) {
                    x = "pass";
                }
            } else {
                for (var r = 0; r < eval(reqflds[i]).length; r++) {
                    if (eval(reqflds[i])[r].checked) {
                        x = "pass";
                    }
                }
            }
            if (x == "") {
                msgtxt = msgtxt + "\n" + alrtVals[i];
                if (focusSet == 0) {
                    firstFocus = eval(reqflds[i])[0];
                    focusSet = 1;
                    success = false
                };
            }
        } else if (valType[i] == "Option") {

            var selection = "";
            var list = eval(reqflds[i]);
            selection = list.selectedIndex;

            if (selection == 0) {
                msgtxt = msgtxt + "\n" + alrtVals[i];
                if (focusSet == 0) {
                    firstFocus = eval(reqflds[i]);
                    focusSet = 1;
                    success = false
                };
            }
        } else if (valType[i] == "Option-Multi") {

            var selection = "";
            var list = eval(reqflds[i]);
            selection = list.selectedIndex;

            if (selection == -1) {
                msgtxt = msgtxt + "\n" + alrtVals[i];
                if (focusSet == 0) {
                    firstFocus = eval(reqflds[i]);
                    focusSet = 1;
                    success = false
                };
            }
        }
    }

    if (msgtxt == "") {
        document[frmName].submit();
    } else {
        alert(msgtxt);
        if (focusSet == 1) {
            firstFocus.focus();
        }
    }
}

// -----------------------------------------------------
// SAVE FORM FIELD SELECTIONS IN COOKIES                         
// @author: nerlijman001                           
// -----------------------------------------------------

var ONLINE_FORM_FIELD_SEPARATOR = '!@@';
var ONLINE_FORM_SEPARATOR = '\|@\|';
var ONLINE_FORM_MULTIVALUED_SEPARATOR = ';@';

//var ONLINE_FORM_FIELD_SEPARATOR = ';';
//var ONLINE_FORM_SEPARATOR = '\|';
//var ONLINE_FORM_MULTIVALUED_SEPARATOR = ',';

var EXPIRATION_DAYS = 365;
var MULTI_PREFIX = "_m_";

String.prototype.startsWith = function(s) {
    return (this.match("^" + s) == s);
}

//----------------------------
//TCS-R2
function getLotusForm() {
    var frmName = "";
    var frm;

    if (document._Notes) {
        frm = document._Notes;
    }
    if (document.forms) {
        frm = document.forms["_Notes"];
    }

    if (!frm) {
        if (document.all) {
            frm = document.all["_Notes"];
        }
    }

    if (!frm) {
        if (document.layers) {
            frm = document.layers["_Notes"];
        }
    }

    if (!frm) {
        if (document.getElementById) {
            frm = document.getElementById("_Notes");
        }
    }

    if (frm != null) {
        return frm;
    }
    return document.getElementById('_onlineForm');
}

//TCS-R2
function getOnlineForm() {
    return getLotusForm();
}

//----------------------------
/*function getOnlineForm() {
	var o = document.getElementById('_onlineForm');
	return o;
}*/

function saveOnlineFormSelections() {
    var f = getOnlineForm();
    if (f) {
        saveSelections(f);
    }

}

function loadOnlineFormSelections() {
    var f = getOnlineForm();
    if (f) {
        if (f.name = '_Notes') {
            f.id = f.name;
        }
        loadSelections(f);
    }
}

function getExpirationDate() {
    var today = new Date();
    return new Date(today.getTime() + EXPIRATION_DAYS * 24 * 60 * 60 * 1000);
}

// input1,value2
function saveSelections(frm) {
    var setvalue;
    var fieldType;
    var formname = frm.name;
    var items = new Array();

    var exp = getExpirationDate();

    //var string = "formname=" + formname + ONLINE_FORM_SEPARATOR;
    var string = "";
    var cookieName = formname;

    var n = frm.length;
    for (i = 0; i < n; i++) {
        if (frm[i].name != '' && !items[frm[i].name]) {
            string += getFieldStringValue(frm, frm[i].name, frm[i].type);
            items[frm[i].name] = frm[i].name;
        }
    }
    string = string.substring(0, string.length - ONLINE_FORM_SEPARATOR.length);
    setCookie(cookieName, string, exp);
}

function removeLastSeparator(r, sep) {

}

function getFieldStringValue(frm, e, fieldType) {
    var index;
    var string = "";

    // RADIO BUTTON
    if (fieldType == "radio") {
        for (x = 0; x < frm.elements[e].length; x++) {
            if (frm.elements[e][x].checked) {
                index = x;
            }
        }
        string += e + ONLINE_FORM_FIELD_SEPARATOR + index + ONLINE_FORM_SEPARATOR;
    }

    // TEXT, TEXTAREA, and DROPDOWN
    if ((fieldType == "text") ||
        (fieldType == "textarea") ||
        (fieldType == "select-one")) {
        string += e + ONLINE_FORM_FIELD_SEPARATOR + frm.elements[e].value + ONLINE_FORM_SEPARATOR;
    }

    // CHECKBOX o LIST
    if (fieldType == "checkbox" || fieldType == "select-multiple") {
        var setvalue = '';
        if (frm.elements[e].length) {
            // is an array, save as multi valuated
            for (x = 0; x < frm.elements[e].length; x++) {
                if (frm.elements[e][x].checked || frm.elements[e][x].selected) {
                    setvalue += "1" + ONLINE_FORM_MULTIVALUED_SEPARATOR;
                } else {
                    setvalue += "0" + ONLINE_FORM_MULTIVALUED_SEPARATOR;
                }
            }
            setvalue = setvalue.substring(0, setvalue.length - ONLINE_FORM_MULTIVALUED_SEPARATOR.length);
            string += MULTI_PREFIX + e + ONLINE_FORM_FIELD_SEPARATOR + setvalue + ONLINE_FORM_SEPARATOR;
        } else {
            // Is not an array
            if (frm.elements[e].checked) {
                setvalue = "1";
            }
            if (!frm.elements[e].checked) {
                setvalue = "0";
            }
            string += e + ONLINE_FORM_FIELD_SEPARATOR + setvalue + ONLINE_FORM_SEPARATOR;
        }
    }

    // HIDDEN field
    if (fieldType == "hidden") {
        string += e + ONLINE_FORM_FIELD_SEPARATOR + frm.elements[e].value + ONLINE_FORM_SEPARATOR;
    }
    return string;
}

function saveField(o) {
    var cookieString = "";
    var frm = getOnlineForm();
    var e;
    var x;
    var cookieName;
    var fieldValues;

    var formname = frm.id;
    cookieName = formname;
    fieldValues = getCookie(cookieName);

    if (!fieldValues) {
        cookieString += getFieldStringValue(frm, o.name, o.type);
    } else {
        var fieldArray = fieldValues.split(ONLINE_FORM_SEPARATOR);

        for (i = 0; i < fieldArray.length; i++) {
            var f = fieldArray[i];
            var values = f.split(ONLINE_FORM_FIELD_SEPARATOR);
            var fieldName = values[0];
            var fieldValue = values[1];
            if (fieldName != o.name) {
                cookieString += f + ONLINE_FORM_SEPARATOR;
            }
        }
        cookieString += getFieldStringValue(frm, o.name, o.type);
    }
    cookieString = cookieString.substring(0, cookieString.length - ONLINE_FORM_SEPARATOR.length);
    var exp = getExpirationDate();
    setCookie(cookieName, cookieString, exp);
}

//
// LOAD FORM FIELD SELECTIONS FROM SAVED COOKIES
//
function loadSelections(frm) {
    var e;
    var x;
    var cookieName;
    var fieldArray;
    var fieldValues;
    var fieldValue;

    var formname = frm.id;
    cookieName = formname;
    fieldValues = getCookie(cookieName);

    if (!fieldValues) return;

    fieldArray = fieldValues.split(ONLINE_FORM_SEPARATOR);

    var n = frm.length;
    for (i = 0; i < n; i++) {
        e = frm[i].name;
        var fieldType = frm[i].type;

        if (e == '' || fieldType == "reset") continue;

        var fieldObject;
        var fieldValue = '';
        multivalued = false;

        // Search for the value
        for (j = 0; j < fieldArray.length; j++) {
            var f = fieldArray[j];
            var values = f.split(ONLINE_FORM_FIELD_SEPARATOR);
            fieldName = values[0];
            if (fieldName == e) {
                fieldValue = values[1];
                break;
            } else {
                if (fieldName.startsWith(MULTI_PREFIX + e)) {
                    multivalued = true;
                    fieldValue = values[1];
                    var arrayValues = fieldValue.split(ONLINE_FORM_MULTIVALUED_SEPARATOR);
                    for (k = 0; k < arrayValues.length; k++) {
                        var arrayValue = arrayValues[k];
                        if (frm[i].multiple) {
                            frm.elements[e][k].selected = (arrayValue == '1');
                        } else {
                            frm.elements[e][k].checked = (arrayValue == '1');
                        }

                    }
                    break;
                }
            }
        }

        if (multivalued) {
            continue;
        }

        //
        // TEXT, TEXTAREA, and DROPDOWN
        if ((fieldType == "text") ||
            (fieldType == "textarea") ||
            (fieldType == "select-one")) {
            frm.elements[e].value = fieldValue;
        }

        // CHECKBOX
        if (fieldType == "checkbox") {
            fld_checkbox = fieldValue;
            if (fld_checkbox == "1") {
                frm.elements[e].checked = true;
            }
        }

        // RADIO BUTTON
        //
        if (fieldType == "radio") {
            x = fieldValue;
            frm.elements[e][x].checked = true;
        }

        //
        // HIDDEN field
        //
        if (fieldType == "hidden") {
            frm.elements[e].value = fieldValue;
        }
    }
}

function setCookie(name, value, expires, path, domain, secure) {
    var c = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
    document.cookie = c;
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0)
            return null;
    } else {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

function resetOnlineFormSelections() {
    var frm = getOnlineForm();
    var formname = frm.name;
    var exp = getExpirationDate();
    var string = "";
    var cookieName = formname;
    setCookie(cookieName, string, exp);
}
//END COOKIES SUPPORT

/* 2010 Contacts */

function loadxmlcontacts() {
    var str = document.getElementById("countrycontactsddl").value.toLowerCase();
    if (str == "#") {
        return false;
    }
    var failmsg = "<h4>Sorry, there are no contacts for this selection</h4>";
    var headtxt = "<div class='contacts-modal-content'><h1>Contacts</h1>";
    var countrytxt = ""
    var contacttxt = "";

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            x = xmlhttp.responseXML.documentElement.getElementsByTagName("card");
            for (i = 0; i < x.length; i++) {

                xcc = x[i].getElementsByTagName("language_code");
                xcname = x[i].getElementsByTagName("country_name");
                xfname = x[i].getElementsByTagName("pwcc_first_name");
                xlname = x[i].getElementsByTagName("pwcc_last_name");
                xrole = x[i].getElementsByTagName("pwcc_title");
                xnumber = x[i].getElementsByTagName("pwcc_telephone");
                xfax = x[i].getElementsByTagName("pwcc_fax");
                xemail = x[i].getElementsByTagName("pwcc_email");


                contacttxt = contacttxt + "<dl>";
                if ((xfname[0].firstChild != null) & (xlname[0].firstChild != null)) {
                    contacttxt = contacttxt + "<dt>" + xfname[0].firstChild.nodeValue + " " + xlname[0].firstChild.nodeValue + "</dt>";
                }
                if (xrole[0].firstChild != null) {
                    contacttxt = contacttxt + "<dd>" + xrole[0].firstChild.nodeValue + "</dd>";
                }
                if (xnumber[0].firstChild != null) {
                    contacttxt = contacttxt + "<dd>Tel: " + xnumber[0].firstChild.nodeValue + "</dd>";
                }
                if (xfax[0].firstChild != null) {
                    contacttxt = contacttxt + "<dd>Fax: " + xfax[0].firstChild.nodeValue + "</dd>";
                }
                if (xemail[0].firstChild != null) {
                    contacttxt = contacttxt + "<dd><a href='" + xemail[0].firstChild.nodeValue + "'>Email</a></dd>";
                }
                contacttxt = contacttxt + "</dl>";
                if (xcname[0].firstChild != null) {
                    countrytxt = "<h2>" + xcname[0].firstChild.nodeValue + "</h2>";
                }

            }
            if (contacttxt != "") {
                document.getElementById('contactsmodal').innerHTML = headtxt + countrytxt + contacttxt + '</div>';
                $("#contactsmodalwrapper").data("overlay").load();
            } else {
                document.getElementById('contactsmodal').innerHTML = headtxt + failmsg + '</div>';
                $("#contactsmodalwrapper").data("overlay").load();
            }
        } else if (xmlhttp.status != 200) {
            document.getElementById('contactsmodal').innerHTML = headtxt + failmsg + '</div>';
            $("#contactsmodalwrapper").data("overlay").load();
        }
    }
    var xmlurl = "/contacts/BusinessCardServlet?tags=" + str;
    //var xmlurl = "http://pwcstg-wip.pwcinternal.com/gx/en/test/testcontacts.xml";
    xmlhttp.open("GET", xmlurl, true);
    xmlhttp.send();
}

(function($) {

    var defaults = {
        'swipeTolerance': 40
    };

    var touchStatus = function(target, touch) {
        this.target = $(target);
        this.touch = touch;
        this.startX = this.currentX = touch.screenX;
        this.startY = this.currentY = touch.screenY;
        this.eventType = null;
    }
    touchStatus.options = {};
    touchStatus.latestTap = null;

    touchStatus.prototype.move = function(touch) {
        this.currentX = touch.screenX;
        this.currentY = touch.screenY;
    }

    touchStatus.prototype.process = function() {
        var offsetX = this.currentX - this.startX;
        var offsetY = this.currentY - this.startY;
        if (offsetX == 0 && offsetY == 0) {
            this.checkForDoubleTap();
        } else if (Math.abs(offsetY) > touchStatus.options.swipeTolerance && Math.abs(offsetY) > Math.abs(offsetX)) {
            this.eventType = offsetY > 0 ? 'swipedown' : 'swipeup';
            this.target.trigger('swipe', [this])
        } else if (Math.abs(offsetX) > touchStatus.options.swipeTolerance) {
            this.eventType = offsetX > 0 ? 'swiperight' : 'swipeleft';
            this.target.trigger('swipe', [this])
        }
        if (this.eventType) this.target.trigger(this.eventType, [this])
        this.target.trigger('touch', [this])
    }

    touchStatus.prototype.checkForDoubleTap = function() {
        if (touchStatus.latestTap) {
            if ((new Date() - touchStatus.latestTap) < 400)
                this.eventType = 'doubletap'
        }
        if (!this.eventType) this.eventType = 'tap'
        touchStatus.latestTap = new Date()
    }

    var swipeEvents = function(elements, options) {
        touchStatus.options = $.extend(defaults, options);
        elements.bind('touchstart', this.touchStart);
        elements.bind('touchmove', this.touchMove);
        elements.bind('touchcancel', this.touchCancel);
        elements.bind('touchend', this.touchEnd);
    }

    swipeEvents.prototype.touchStart = function(evt) {
        var target = this;
        swipeEvents.eachTouch(evt, function(touch) {
            swipeEvents.touches[touch.identifier] = new touchStatus(target, touch);
        })
    }

    swipeEvents.prototype.touchMove = function(evt) {
        swipeEvents.eachTouch(evt, function(touch) {
            var loc = swipeEvents.touches[touch.identifier]
            if (loc) loc.move(touch)
        })
    }

    swipeEvents.prototype.touchCancel = function(evt) {
        swipeEvents.eachTouch(evt, function(touch) {
            swipeEvents.purge(touch, true)
        })
    }

    swipeEvents.prototype.touchEnd = function(evt) {
        swipeEvents.eachTouch(evt, function(touch) {
            swipeEvents.purge(touch)
        })
    }

    swipeEvents.touches = {}
    swipeEvents.purge = function(touch, cancelled) {
        if (!cancelled) {
            var loc = swipeEvents.touches[touch.identifier]
            if (loc) loc.process()
        }
        delete swipeEvents.touches[touch.identifier]
    }

    swipeEvents.eachTouch = function(evt, callback) {
        var evt = evt.originalEvent;
        var num = evt.changedTouches.length;
        for (var i = 0; i < num; i++) {
            callback(evt.changedTouches[i])
        }
    }

    // adds custom events:
    //   touch      // all events
    //   swipe      // only swipe* events
    //   swipeleft
    //   swiperight
    //   swipeup
    //   swipedown
    //   tap
    //   doubletap
    $.fn.addSwipeEvents = function(options, callback) {
        if (!callback && jQuery.isFunction(options)) {
            callback = options;
            options = null;
        }
        new swipeEvents(this, options);
        if (callback) this.bind('touch', callback);
        return this;
    }
})(jQuery);

/*! jCarousel - v0.3.1 - 2014-04-26
 * http://sorgalla.com/jcarousel
 * Copyright (c) 2014 Jan Sorgalla; Licensed MIT */
(function(t) {
    "use strict";
    var i = t.jCarousel = {};
    i.version = "0.3.1";
    var s = /^([+\-]=)?(.+)$/;
    i.parseTarget = function(t) {
        var i = !1,
            e = "object" != typeof t ? s.exec(t) : null;
        return e ? (t = parseInt(e[2], 10) || 0, e[1] && (i = !0, "-=" === e[1] && (t *= -1))) : "object" != typeof t && (t = parseInt(t, 10) || 0), {
            target: t,
            relative: i
        }
    }, i.detectCarousel = function(t) {
        for (var i; t.length > 0;) {
            if (i = t.filter("[data-jcarousel]"), i.length > 0) return i;
            if (i = t.find("[data-jcarousel]"), i.length > 0) return i;
            t = t.parent()
        }
        return null
    }, i.base = function(s) {
        return {
            version: i.version,
            _options: {},
            _element: null,
            _carousel: null,
            _init: t.noop,
            _create: t.noop,
            _destroy: t.noop,
            _reload: t.noop,
            create: function() {
                return this._element.attr("data-" + s.toLowerCase(), !0).data(s, this), !1 === this._trigger("create") ? this : (this._create(), this._trigger("createend"), this)
            },
            destroy: function() {
                return !1 === this._trigger("destroy") ? this : (this._destroy(), this._trigger("destroyend"), this._element.removeData(s).removeAttr("data-" + s.toLowerCase()), this)
            },
            reload: function(t) {
                return !1 === this._trigger("reload") ? this : (t && this.options(t), this._reload(), this._trigger("reloadend"), this)
            },
            element: function() {
                return this._element
            },
            options: function(i, s) {
                if (0 === arguments.length) return t.extend({}, this._options);
                if ("string" == typeof i) {
                    if (s === void 0) return this._options[i] === void 0 ? null : this._options[i];
                    this._options[i] = s
                } else this._options = t.extend({}, this._options, i);
                return this
            },
            carousel: function() {
                return this._carousel || (this._carousel = i.detectCarousel(this.options("carousel") || this._element), this._carousel || t.error('Could not detect carousel for plugin "' + s + '"')), this._carousel
            },
            _trigger: function(i, e, r) {
                var n, o = !1;
                return r = [this].concat(r || []), (e || this._element).each(function() {
                    n = t.Event((s + ":" + i).toLowerCase()), t(this).trigger(n, r), n.isDefaultPrevented() && (o = !0)
                }), !o
            }
        }
    }, i.plugin = function(s, e) {
        var r = t[s] = function(i, s) {
            this._element = t(i), this.options(s), this._init(), this.create()
        };
        return r.fn = r.prototype = t.extend({}, i.base(s), e), t.fn[s] = function(i) {
            var e = Array.prototype.slice.call(arguments, 1),
                n = this;
            return "string" == typeof i ? this.each(function() {
                var r = t(this).data(s);
                if (!r) return t.error("Cannot call methods on " + s + " prior to initialization; " + 'attempted to call method "' + i + '"');
                if (!t.isFunction(r[i]) || "_" === i.charAt(0)) return t.error('No such method "' + i + '" for ' + s + " instance");
                var o = r[i].apply(r, e);
                return o !== r && o !== void 0 ? (n = o, !1) : void 0
            }) : this.each(function() {
                var e = t(this).data(s);
                e instanceof r ? e.reload(i) : new r(this, i)
            }), n
        }, r
    }
})(jQuery),
function(t, i) {
    "use strict";
    var s = function(t) {
        return parseFloat(t) || 0
    };
    t.jCarousel.plugin("jcarousel", {
        animating: !1,
        tail: 0,
        inTail: !1,
        resizeTimer: null,
        lt: null,
        vertical: !1,
        rtl: !1,
        circular: !1,
        underflow: !1,
        relative: !1,
        _options: {
            list: function() {
                return this.element().children().eq(0)
            },
            items: function() {
                return this.list().children()
            },
            animation: 400,
            transitions: !1,
            wrap: null,
            vertical: null,
            rtl: null,
            center: !1
        },
        _list: null,
        _items: null,
        _target: null,
        _first: null,
        _last: null,
        _visible: null,
        _fullyvisible: null,
        _init: function() {
            var t = this;
            return this.onWindowResize = function() {
                t.resizeTimer && clearTimeout(t.resizeTimer), t.resizeTimer = setTimeout(function() {
                    t.reload()
                }, 100)
            }, this
        },
        _create: function() {
            this._reload(), t(i).on("resize.jcarousel", this.onWindowResize)
        },
        _destroy: function() {
            t(i).off("resize.jcarousel", this.onWindowResize)
        },
        _reload: function() {
            this.vertical = this.options("vertical"), null == this.vertical && (this.vertical = this.list().height() > this.list().width()), this.rtl = this.options("rtl"), null == this.rtl && (this.rtl = function(i) {
                if ("rtl" === ("" + i.attr("dir")).toLowerCase()) return !0;
                var s = !1;
                return i.parents("[dir]").each(function() {
                    return /rtl/i.test(t(this).attr("dir")) ? (s = !0, !1) : void 0
                }), s
            }(this._element)), this.lt = this.vertical ? "top" : "left", this.relative = "relative" === this.list().css("position"), this._list = null, this._items = null;
            var i = this._target && this.index(this._target) >= 0 ? this._target : this.closest();
            this.circular = "circular" === this.options("wrap"), this.underflow = !1;
            var s = {
                left: 0,
                top: 0
            };
            return i.length > 0 && (this._prepare(i), this.list().find("[data-jcarousel-clone]").remove(), this._items = null, this.underflow = this._fullyvisible.length >= this.items().length, this.circular = this.circular && !this.underflow, s[this.lt] = this._position(i) + "px"), this.move(s), this
        },
        list: function() {
            if (null === this._list) {
                var i = this.options("list");
                this._list = t.isFunction(i) ? i.call(this) : this._element.find(i)
            }
            return this._list
        },
        items: function() {
            if (null === this._items) {
                var i = this.options("items");
                this._items = (t.isFunction(i) ? i.call(this) : this.list().find(i)).not("[data-jcarousel-clone]")
            }
            return this._items
        },
        index: function(t) {
            return this.items().index(t)
        },
        closest: function() {
            var i, e = this,
                r = this.list().position()[this.lt],
                n = t(),
                o = !1,
                l = this.vertical ? "bottom" : this.rtl && !this.relative ? "left" : "right";
            return this.rtl && this.relative && !this.vertical && (r += this.list().width() - this.clipping()), this.items().each(function() {
                if (n = t(this), o) return !1;
                var a = e.dimension(n);
                if (r += a, r >= 0) {
                    if (i = a - s(n.css("margin-" + l)), !(0 >= Math.abs(r) - a + i / 2)) return !1;
                    o = !0
                }
            }), n
        },
        target: function() {
            return this._target
        },
        first: function() {
            return this._first
        },
        last: function() {
            return this._last
        },
        visible: function() {
            return this._visible
        },
        fullyvisible: function() {
            return this._fullyvisible
        },
        hasNext: function() {
            if (!1 === this._trigger("hasnext")) return !0;
            var t = this.options("wrap"),
                i = this.items().length - 1;
            return i >= 0 && !this.underflow && (t && "first" !== t || i > this.index(this._last) || this.tail && !this.inTail) ? !0 : !1
        },
        hasPrev: function() {
            if (!1 === this._trigger("hasprev")) return !0;
            var t = this.options("wrap");
            return this.items().length > 0 && !this.underflow && (t && "last" !== t || this.index(this._first) > 0 || this.tail && this.inTail) ? !0 : !1
        },
        clipping: function() {
            return this._element["inner" + (this.vertical ? "Height" : "Width")]()
        },
        dimension: function(t) {
            return t["outer" + (this.vertical ? "Height" : "Width")](!0)
        },
        scroll: function(i, s, e) {
            if (this.animating) return this;
            if (!1 === this._trigger("scroll", null, [i, s])) return this;
            t.isFunction(s) && (e = s, s = !0);
            var r = t.jCarousel.parseTarget(i);
            if (r.relative) {
                var n, o, l, a, h, u, c, f, d = this.items().length - 1,
                    _ = Math.abs(r.target),
                    p = this.options("wrap");
                if (r.target > 0) {
                    var g = this.index(this._last);
                    if (g >= d && this.tail) this.inTail ? "both" === p || "last" === p ? this._scroll(0, s, e) : t.isFunction(e) && e.call(this, !1) : this._scrollTail(s, e);
                    else if (n = this.index(this._target), this.underflow && n === d && ("circular" === p || "both" === p || "last" === p) || !this.underflow && g === d && ("both" === p || "last" === p)) this._scroll(0, s, e);
                    else if (l = n + _, this.circular && l > d) {
                        for (f = d, h = this.items().get(-1); l > f++;) h = this.items().eq(0), u = this._visible.index(h) >= 0, u && h.after(h.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(h), u || (c = {}, c[this.lt] = this.dimension(h), this.moveBy(c)), this._items = null;
                        this._scroll(h, s, e)
                    } else this._scroll(Math.min(l, d), s, e)
                } else if (this.inTail) this._scroll(Math.max(this.index(this._first) - _ + 1, 0), s, e);
                else if (o = this.index(this._first), n = this.index(this._target), a = this.underflow ? n : o, l = a - _, 0 >= a && (this.underflow && "circular" === p || "both" === p || "first" === p)) this._scroll(d, s, e);
                else if (this.circular && 0 > l) {
                    for (f = l, h = this.items().get(0); 0 > f++;) {
                        h = this.items().eq(-1), u = this._visible.index(h) >= 0, u && h.after(h.clone(!0).attr("data-jcarousel-clone", !0)), this.list().prepend(h), this._items = null;
                        var v = this.dimension(h);
                        c = {}, c[this.lt] = -v, this.moveBy(c)
                    }
                    this._scroll(h, s, e)
                } else this._scroll(Math.max(l, 0), s, e)
            } else this._scroll(r.target, s, e);
            return this._trigger("scrollend"), this
        },
        moveBy: function(t, i) {
            var e = this.list().position(),
                r = 1,
                n = 0;
            return this.rtl && !this.vertical && (r = -1, this.relative && (n = this.list().width() - this.clipping())), t.left && (t.left = e.left + n + s(t.left) * r + "px"), t.top && (t.top = e.top + n + s(t.top) * r + "px"), this.move(t, i)
        },
        move: function(i, s) {
            s = s || {};
            var e = this.options("transitions"),
                r = !!e,
                n = !!e.transforms,
                o = !!e.transforms3d,
                l = s.duration || 0,
                a = this.list();
            if (!r && l > 0) return a.animate(i, s), void 0;
            var h = s.complete || t.noop,
                u = {};
            if (r) {
                var c = a.css(["transitionDuration", "transitionTimingFunction", "transitionProperty"]),
                    f = h;
                h = function() {
                    t(this).css(c), f.call(this)
                }, u = {
                    transitionDuration: (l > 0 ? l / 1e3 : 0) + "s",
                    transitionTimingFunction: e.easing || s.easing,
                    transitionProperty: l > 0 ? function() {
                        return n || o ? "all" : i.left ? "left" : "top"
                    }() : "none",
                    transform: "none"
                }
            }
            o ? u.transform = "translate3d(" + (i.left || 0) + "," + (i.top || 0) + ",0)" : n ? u.transform = "translate(" + (i.left || 0) + "," + (i.top || 0) + ")" : t.extend(u, i), r && l > 0 && a.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", h), a.css(u), 0 >= l && a.each(function() {
                h.call(this)
            })
        },
        _scroll: function(i, s, e) {
            if (this.animating) return t.isFunction(e) && e.call(this, !1), this;
            if ("object" != typeof i ? i = this.items().eq(i) : i.jquery === void 0 && (i = t(i)), 0 === i.length) return t.isFunction(e) && e.call(this, !1), this;
            this.inTail = !1, this._prepare(i);
            var r = this._position(i),
                n = this.list().position()[this.lt];
            if (r === n) return t.isFunction(e) && e.call(this, !1), this;
            var o = {};
            return o[this.lt] = r + "px", this._animate(o, s, e), this
        },
        _scrollTail: function(i, s) {
            if (this.animating || !this.tail) return t.isFunction(s) && s.call(this, !1), this;
            var e = this.list().position()[this.lt];
            this.rtl && this.relative && !this.vertical && (e += this.list().width() - this.clipping()), this.rtl && !this.vertical ? e += this.tail : e -= this.tail, this.inTail = !0;
            var r = {};
            return r[this.lt] = e + "px", this._update({
                target: this._target.next(),
                fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
            }), this._animate(r, i, s), this
        },
        _animate: function(i, s, e) {
            if (e = e || t.noop, !1 === this._trigger("animate")) return e.call(this, !1), this;
            this.animating = !0;
            var r = this.options("animation"),
                n = t.proxy(function() {
                    this.animating = !1;
                    var t = this.list().find("[data-jcarousel-clone]");
                    t.length > 0 && (t.remove(), this._reload()), this._trigger("animateend"), e.call(this, !0)
                }, this),
                o = "object" == typeof r ? t.extend({}, r) : {
                    duration: r
                },
                l = o.complete || t.noop;
            return s === !1 ? o.duration = 0 : t.fx.speeds[o.duration] !== void 0 && (o.duration = t.fx.speeds[o.duration]), o.complete = function() {
                n(), l.call(this)
            }, this.move(i, o), this
        },
        _prepare: function(i) {
            var e, r, n, o, l = this.index(i),
                a = l,
                h = this.dimension(i),
                u = this.clipping(),
                c = this.vertical ? "bottom" : this.rtl ? "left" : "right",
                f = this.options("center"),
                d = {
                    target: i,
                    first: i,
                    last: i,
                    visible: i,
                    fullyvisible: u >= h ? i : t()
                };
            if (f && (h /= 2, u /= 2), u > h)
                for (;;) {
                    if (e = this.items().eq(++a), 0 === e.length) {
                        if (!this.circular) break;
                        if (e = this.items().eq(0), i.get(0) === e.get(0)) break;
                        if (r = this._visible.index(e) >= 0, r && e.after(e.clone(!0).attr("data-jcarousel-clone", !0)), this.list().append(e), !r) {
                            var _ = {};
                            _[this.lt] = this.dimension(e), this.moveBy(_)
                        }
                        this._items = null
                    }
                    if (o = this.dimension(e), 0 === o) break;
                    if (h += o, d.last = e, d.visible = d.visible.add(e), n = s(e.css("margin-" + c)), u >= h - n && (d.fullyvisible = d.fullyvisible.add(e)), h >= u) break
                }
            if (!this.circular && !f && u > h)
                for (a = l;;) {
                    if (0 > --a) break;
                    if (e = this.items().eq(a), 0 === e.length) break;
                    if (o = this.dimension(e), 0 === o) break;
                    if (h += o, d.first = e, d.visible = d.visible.add(e), n = s(e.css("margin-" + c)), u >= h - n && (d.fullyvisible = d.fullyvisible.add(e)), h >= u) break
                }
            return this._update(d), this.tail = 0, f || "circular" === this.options("wrap") || "custom" === this.options("wrap") || this.index(d.last) !== this.items().length - 1 || (h -= s(d.last.css("margin-" + c)), h > u && (this.tail = h - u)), this
        },
        _position: function(t) {
            var i = this._first,
                s = i.position()[this.lt],
                e = this.options("center"),
                r = e ? this.clipping() / 2 - this.dimension(i) / 2 : 0;
            return this.rtl && !this.vertical ? (s -= this.relative ? this.list().width() - this.dimension(i) : this.clipping() - this.dimension(i), s += r) : s -= r, !e && (this.index(t) > this.index(i) || this.inTail) && this.tail ? (s = this.rtl && !this.vertical ? s - this.tail : s + this.tail, this.inTail = !0) : this.inTail = !1, -s
        },
        _update: function(i) {
            var s, e = this,
                r = {
                    target: this._target || t(),
                    first: this._first || t(),
                    last: this._last || t(),
                    visible: this._visible || t(),
                    fullyvisible: this._fullyvisible || t()
                },
                n = this.index(i.first || r.first) < this.index(r.first),
                o = function(s) {
                    var o = [],
                        l = [];
                    i[s].each(function() {
                        0 > r[s].index(this) && o.push(this)
                    }), r[s].each(function() {
                        0 > i[s].index(this) && l.push(this)
                    }), n ? o = o.reverse() : l = l.reverse(), e._trigger(s + "in", t(o)), e._trigger(s + "out", t(l)), e["_" + s] = i[s]
                };
            for (s in i) o(s);
            return this
        }
    })
}(jQuery, window),
function(t) {
    "use strict";
    t.jcarousel.fn.scrollIntoView = function(i, s, e) {
        var r, n = t.jCarousel.parseTarget(i),
            o = this.index(this._fullyvisible.first()),
            l = this.index(this._fullyvisible.last());
        if (r = n.relative ? 0 > n.target ? Math.max(0, o + n.target) : l + n.target : "object" != typeof n.target ? n.target : this.index(n.target), o > r) return this.scroll(r, s, e);
        if (r >= o && l >= r) return t.isFunction(e) && e.call(this, !1), this;
        for (var a, h = this.items(), u = this.clipping(), c = this.vertical ? "bottom" : this.rtl ? "left" : "right", f = 0;;) {
            if (a = h.eq(r), 0 === a.length) break;
            if (f += this.dimension(a), f >= u) {
                var d = parseFloat(a.css("margin-" + c)) || 0;
                f - d !== u && r++;
                break
            }
            if (0 >= r) break;
            r--
        }
        return this.scroll(r, s, e)
    }
}(jQuery),
function(t) {
    "use strict";
    t.jCarousel.plugin("jcarouselControl", {
        _options: {
            target: "+=1",
            event: "click",
            method: "scroll"
        },
        _active: null,
        _init: function() {
            this.onDestroy = t.proxy(function() {
                this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
            }, this), this.onReload = t.proxy(this._reload, this), this.onEvent = t.proxy(function(i) {
                i.preventDefault();
                var s = this.options("method");
                t.isFunction(s) ? s.call(this) : this.carousel().jcarousel(this.options("method"), this.options("target"))
            }, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend", this.onReload), this._element.on(this.options("event") + ".jcarouselcontrol", this.onEvent), this._reload()
        },
        _destroy: function() {
            this._element.off(".jcarouselcontrol", this.onEvent), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend", this.onReload)
        },
        _reload: function() {
            var i, s = t.jCarousel.parseTarget(this.options("target")),
                e = this.carousel();
            if (s.relative) i = e.jcarousel(s.target > 0 ? "hasNext" : "hasPrev");
            else {
                var r = "object" != typeof s.target ? e.jcarousel("items").eq(s.target) : s.target;
                i = e.jcarousel("target").index(r) >= 0
            }
            return this._active !== i && (this._trigger(i ? "active" : "inactive"), this._active = i), this
        }
    })
}(jQuery),
function(t) {
    "use strict";
    t.jCarousel.plugin("jcarouselPagination", {
        _options: {
            perPage: null,
            item: function(t) {
                return '<a href="#' + t + '">' + t + "</a>"
            },
            event: "click",
            method: "scroll"
        },
        _carouselItems: null,
        _pages: {},
        _items: {},
        _currentPage: null,
        _init: function() {
            this.onDestroy = t.proxy(function() {
                this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
            }, this), this.onReload = t.proxy(this._reload, this), this.onScroll = t.proxy(this._update, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend", this.onReload).on("jcarousel:scrollend", this.onScroll), this._reload()
        },
        _destroy: function() {
            this._clear(), this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend", this.onReload).off("jcarousel:scrollend", this.onScroll), this._carouselItems = null
        },
        _reload: function() {
            var i = this.options("perPage");
            if (this._pages = {}, this._items = {}, t.isFunction(i) && (i = i.call(this)), null == i) this._pages = this._calculatePages();
            else
                for (var s, e = parseInt(i, 10) || 0, r = this._getCarouselItems(), n = 1, o = 0;;) {
                    if (s = r.eq(o++), 0 === s.length) break;
                    this._pages[n] = this._pages[n] ? this._pages[n].add(s) : s, 0 === o % e && n++
                }
            this._clear();
            var l = this,
                a = this.carousel().data("jcarousel"),
                h = this._element,
                u = this.options("item"),
                c = this._getCarouselItems().length;
            t.each(this._pages, function(i, s) {
                var e = l._items[i] = t(u.call(l, i, s));
                e.on(l.options("event") + ".jcarouselpagination", t.proxy(function() {
                    var t = s.eq(0);
                    if (a.circular) {
                        var e = a.index(a.target()),
                            r = a.index(t);
                        parseFloat(i) > parseFloat(l._currentPage) ? e > r && (t = "+=" + (c - e + r)) : r > e && (t = "-=" + (e + (c - r)))
                    }
                    a[this.options("method")](t)
                }, l)), h.append(e)
            }), this._update()
        },
        _update: function() {
            var i, s = this.carousel().jcarousel("target");
            t.each(this._pages, function(t, e) {
                return e.each(function() {
                    return s.is(this) ? (i = t, !1) : void 0
                }), i ? !1 : void 0
            }), this._currentPage !== i && (this._trigger("inactive", this._items[this._currentPage]), this._trigger("active", this._items[i])), this._currentPage = i
        },
        items: function() {
            return this._items
        },
        reloadCarouselItems: function() {
            return this._carouselItems = null, this
        },
        _clear: function() {
            this._element.empty(), this._currentPage = null
        },
        _calculatePages: function() {
            for (var t, i = this.carousel().data("jcarousel"), s = this._getCarouselItems(), e = i.clipping(), r = 0, n = 0, o = 1, l = {};;) {
                if (t = s.eq(n++), 0 === t.length) break;
                l[o] = l[o] ? l[o].add(t) : t, r += i.dimension(t), r >= e && (o++, r = 0)
            }
            return l
        },
        _getCarouselItems: function() {
            return this._carouselItems || (this._carouselItems = this.carousel().jcarousel("items")), this._carouselItems
        }
    })
}(jQuery),
function(t) {
    "use strict";
    t.jCarousel.plugin("jcarouselAutoscroll", {
        _options: {
            target: "+=1",
            interval: 3e3,
            autostart: !0
        },
        _timer: null,
        _init: function() {
            this.onDestroy = t.proxy(function() {
                this._destroy(), this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
            }, this), this.onAnimateEnd = t.proxy(this.start, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy), this.options("autostart") && this.start()
        },
        _destroy: function() {
            this.stop(), this.carousel().off("jcarousel:destroy", this.onDestroy)
        },
        start: function() {
            return this.stop(), this.carousel().one("jcarousel:animateend", this.onAnimateEnd), this._timer = setTimeout(t.proxy(function() {
                this.carousel().jcarousel("scroll", this.options("target"))
            }, this), this.options("interval")), this
        },
        stop: function() {
            return this._timer && (this._timer = clearTimeout(this._timer)), this.carousel().off("jcarousel:animateend", this.onAnimateEnd), this
        }
    })
}(jQuery);
/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * 
 * overlay/overlay.js
 * overlay/overlay.apple.js
 * scrollable/scrollable.js
 * scrollable/scrollable.autoscroll.js
 * scrollable/scrollable.navigator.js
 * tabs/tabs.js
 * tabs/tabs.slideshow.js
 * toolbox/toolbox.expose.js
 * toolbox/toolbox.flashembed.js
 * toolbox/toolbox.mousewheel.js
 * tooltip/tooltip.js
 * tooltip/tooltip.slide.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 * jquery.event.wheel.js - rev 1 
 * Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
 * Liscensed under the MIT License (MIT-LICENSE.txt)
 * http://www.opensource.org/licenses/mit-license.php
 * Created: 2008-07-01 | Updated: 2008-07-14
 * 
 * ----- 
 * 
 */
(function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    }, a.tools.overlay = {
        addEffect: function(a, b, d) {
            c[a] = [b, d]
        },
        conf: {
            close: null,
            closeOnClick: !0,
            closeOnEsc: !0,
            closeSpeed: "fast",
            effect: "default",
            fixed: !a.browser.msie || a.browser.version > 6,
            left: "center",
            load: !1,
            mask: null,
            oneInstance: !0,
            speed: "normal",
            target: null,
            top: "10%"
        }
    };
    var b = [],
        c = {};
    a.tools.overlay.addEffect("default", function(b, c) {
        var d = this.getConf(),
            e = a(window);
        d.fixed || (b.top += e.scrollTop(), b.left += e.scrollLeft()), b.position = d.fixed ? "fixed" : "absolute", this.getOverlay().css(b).fadeIn(d.speed, c)
    }, function(a) {
        this.getOverlay().fadeOut(this.getConf().closeSpeed, a)
    });

    function d(d, e) {
        var f = this,
            g = d.add(f),
            h = a(window),
            i, j, k, l = a.tools.expose && (e.mask || e.expose),
            m = Math.random().toString().slice(10);
        l && (typeof l == "string" && (l = {
            color: l
        }), l.closeOnClick = l.closeOnEsc = !1);
        var n = e.target || d.attr("rel");
        j = n ? a(n) : null || d;
        if (!j.length) throw "Could not find Overlay: " + n;
        d && d.index(j) == -1 && d.click(function(a) {
            f.load(a);
            return a.preventDefault()
        }), a.extend(f, {
            load: function(d) {
                if (f.isOpened()) return f;
                var i = c[e.effect];
                if (!i) throw "Overlay: cannot find effect : \"" + e.effect + "\"";
                e.oneInstance && a.each(b, function() {
                    this.close(d)
                }), d = d || a.Event(), d.type = "onBeforeLoad", g.trigger(d);
                if (d.isDefaultPrevented()) return f;
                k = !0, l && a(j).expose(l);
                var n = e.top,
                    o = e.left,
                    p = j.outerWidth({
                        margin: !0
                    }),
                    q = j.outerHeight({
                        margin: !0
                    });
                typeof n == "string" && (n = n == "center" ? Math.max((h.height() - q) / 2, 0) : parseInt(n, 10) / 100 * h.height()), o == "center" && (o = Math.max((h.width() - p) / 2, 0)), i[0].call(f, {
                    top: n,
                    left: o
                }, function() {
                    k && (d.type = "onLoad", g.trigger(d))
                }), l && e.closeOnClick && a.mask.getMask().one("click", f.close), e.closeOnClick && a(document).on("click." + m, function(b) {
                    a(b.target).parents(j).length || f.close(b)
                }), e.closeOnEsc && a(document).on("keydown." + m, function(a) {
                    a.keyCode == 27 && f.close(a)
                });
                return f
            },
            close: function(b) {
                if (!f.isOpened()) return f;
                b = b || a.Event(), b.type = "onBeforeClose", g.trigger(b);
                if (!b.isDefaultPrevented()) {
                    k = !1, c[e.effect][1].call(f, function() {
                        b.type = "onClose", g.trigger(b)
                    }), a(document).off("click." + m + " keydown." + m), l && a.mask.close();
                    return f
                }
            },
            getOverlay: function() {
                return j
            },
            getTrigger: function() {
                return d
            },
            getClosers: function() {
                return i
            },
            isOpened: function() {
                return k
            },
            getConf: function() {
                return e
            }
        }), a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","), function(b, c) {
            a.isFunction(e[c]) && a(f).on(c, e[c]), f[c] = function(b) {
                b && a(f).on(c, b);
                return f
            }
        }), i = j.find(e.close || ".close"), !i.length && !e.close && (i = a("<a class=\"close\"></a>"), j.prepend(i)), i.click(function(a) {
            f.close(a)
        }), e.load && f.load()
    }
    a.fn.overlay = function(c) {
        var e = this.data("overlay");
        if (e) return e;
        a.isFunction(c) && (c = {
            onBeforeLoad: c
        }), c = a.extend(!0, {}, a.tools.overlay.conf, c), this.each(function() {
            e = new d(a(this), c), b.push(e), a(this).data("overlay", e)
        });
        return c.api ? e : this
    }
})(jQuery);
(function(a) {
    var b = a.tools.overlay,
        c = a(window);
    a.extend(b.conf, {
        start: {
            top: null,
            left: null
        },
        fadeInSpeed: "fast",
        zIndex: 9999
    });

    function d(a) {
        var b = a.offset();
        return {
            top: b.top + a.height() / 2,
            left: b.left + a.width() / 2
        }
    }
    var e = function(b, e) {
            var f = this.getOverlay(),
                g = this.getConf(),
                h = this.getTrigger(),
                i = this,
                j = f.outerWidth({
                    margin: !0
                }),
                k = f.data("img"),
                l = g.fixed ? "fixed" : "absolute";
            if (!k) {
                var m = f.css("backgroundImage");
                if (!m) throw "background-image CSS property not set for overlay";
                m = m.slice(m.indexOf("(") + 1, m.indexOf(")")).replace(/\"/g, ""), f.css("backgroundImage", "none"), k = a("<img src=\"" + m + "\"/>"), k.css({
                    border: 0,
                    display: "none"
                }).width(j), a("body").append(k), f.data("img", k)
            }
            var n = g.start.top || Math.round(c.height() / 2),
                o = g.start.left || Math.round(c.width() / 2);
            if (h) {
                var p = d(h);
                n = p.top, o = p.left
            }
            g.fixed ? (n -= c.scrollTop(), o -= c.scrollLeft()) : (b.top += c.scrollTop(), b.left += c.scrollLeft()), k.css({
                position: "absolute",
                top: n,
                left: o,
                width: 0,
                zIndex: g.zIndex
            }).show(), b.position = l, f.css(b), k.animate({
                top: b.top,
                left: b.left,
                width: j
            }, g.speed, function() {
                f.css("zIndex", g.zIndex + 1).fadeIn(g.fadeInSpeed, function() {
                    i.isOpened() && !a(this).index(f) ? e.call() : f.hide()
                })
            }).css("position", l)
        },
        f = function(b) {
            var e = this.getOverlay().hide(),
                f = this.getConf(),
                g = this.getTrigger(),
                h = e.data("img"),
                i = {
                    top: f.start.top,
                    left: f.start.left,
                    width: 0
                };
            g && a.extend(i, d(g)), f.fixed && h.css({
                position: "absolute"
            }).animate({
                top: "+=" + c.scrollTop(),
                left: "+=" + c.scrollLeft()
            }, 0), h.animate(i, f.closeSpeed, b)
        };
    b.addEffect("apple", e, f)
})(jQuery);
(function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    }, a.tools.scrollable = {
        conf: {
            activeClass: "active",
            circular: !1,
            clonedClass: "cloned",
            disabledClass: "disabled",
            easing: "swing",
            initialIndex: 0,
            item: "> *",
            items: ".items",
            keyboard: !0,
            mousewheel: !1,
            next: ".next",
            prev: ".prev",
            size: 1,
            speed: 400,
            vertical: !1,
            touch: !0,
            wheelSpeed: 0
        }
    };

    function b(a, b) {
        var c = parseInt(a.css(b), 10);
        if (c) return c;
        var d = a[0].currentStyle;
        return d && d.width && parseInt(d.width, 10)
    }

    function c(b, c) {
        var d = a(c);
        return d.length < 2 ? d : b.parent().find(c)
    }
    var d;

    function e(b, e) {
        var f = this,
            g = b.add(f),
            h = b.children(),
            i = 0,
            j = e.vertical;
        d || (d = f), h.length > 1 && (h = a(e.items, b)), e.size > 1 && (e.circular = !1), a.extend(f, {
            getConf: function() {
                return e
            },
            getIndex: function() {
                return i
            },
            getSize: function() {
                return f.getItems().size()
            },
            getNaviButtons: function() {
                return n.add(o)
            },
            getRoot: function() {
                return b
            },
            getItemWrap: function() {
                return h
            },
            getItems: function() {
                return h.find(e.item).not("." + e.clonedClass)
            },
            move: function(a, b) {
                return f.seekTo(i + a, b)
            },
            next: function(a) {
                return f.move(e.size, a)
            },
            prev: function(a) {
                return f.move(-e.size, a)
            },
            begin: function(a) {
                return f.seekTo(0, a)
            },
            end: function(a) {
                return f.seekTo(f.getSize() - 1, a)
            },
            focus: function() {
                d = f;
                return f
            },
            addItem: function(b) {
                b = a(b), e.circular ? (h.children().last().before(b), h.children().first().replaceWith(b.clone().addClass(e.clonedClass))) : (h.append(b), o.removeClass("disabled")), g.trigger("onAddItem", [b]);
                return f
            },
            seekTo: function(b, c, k) {
                b.jquery || (b *= 1);
                if (e.circular && b === 0 && i == -1 && c !== 0) return f;
                if (!e.circular && b < 0 || b > f.getSize() || b < -1) return f;
                var l = b;
                b.jquery ? b = f.getItems().index(b) : l = f.getItems().eq(b);
                var m = a.Event("onBeforeSeek");
                if (!k) {
                    g.trigger(m, [b, c]);
                    if (m.isDefaultPrevented() || !l.length) return f
                }
                var n = j ? {
                    top: -l.position().top
                } : {
                    left: -l.position().left
                };
                i = b, d = f, c === undefined && (c = e.speed), h.animate(n, c, e.easing, k || function() {
                    g.trigger("onSeek", [b])
                });
                return f
            }
        }), a.each(["onBeforeSeek", "onSeek", "onAddItem"], function(b, c) {
            a.isFunction(e[c]) && a(f).on(c, e[c]), f[c] = function(b) {
                b && a(f).on(c, b);
                return f
            }
        });
        if (e.circular) {
            var k = f.getItems().slice(-1).clone().prependTo(h),
                l = f.getItems().eq(1).clone().appendTo(h);
            k.add(l).addClass(e.clonedClass), f.onBeforeSeek(function(a, b, c) {
                if (!a.isDefaultPrevented()) {
                    if (b == -1) {
                        f.seekTo(k, c, function() {
                            f.end(0)
                        });
                        return a.preventDefault()
                    }
                    b == f.getSize() && f.seekTo(l, c, function() {
                        f.begin(0)
                    })
                }
            });
            var m = b.parents().add(b).filter(function() {
                if (a(this).css("display") === "none") return !0
            });
            m.length ? (m.show(), f.seekTo(0, 0, function() {}), m.hide()) : f.seekTo(0, 0, function() {})
        }
        var n = c(b, e.prev).click(function(a) {
                a.stopPropagation(), f.prev()
            }),
            o = c(b, e.next).click(function(a) {
                a.stopPropagation(), f.next()
            });
        e.circular || (f.onBeforeSeek(function(a, b) {
            setTimeout(function() {
                a.isDefaultPrevented() || (n.toggleClass(e.disabledClass, b <= 0), o.toggleClass(e.disabledClass, b >= f.getSize() - 1))
            }, 1)
        }), e.initialIndex || n.addClass(e.disabledClass)), f.getSize() < 2 && n.add(o).addClass(e.disabledClass), e.mousewheel && a.fn.mousewheel && b.mousewheel(function(a, b) {
            if (e.mousewheel) {
                f.move(b < 0 ? 1 : -1, e.wheelSpeed || 50);
                return !1
            }
        });
        if (e.touch) {
            var p = {};
            h[0].ontouchstart = function(a) {
                var b = a.touches[0];
                p.x = b.clientX, p.y = b.clientY
            }, h[0].ontouchmove = function(a) {
                if (a.touches.length == 1 && !h.is(":animated")) {
                    var b = a.touches[0],
                        c = p.x - b.clientX,
                        d = p.y - b.clientY;
                    f[j && d > 0 || !j && c > 0 ? "next" : "prev"](), a.preventDefault()
                }
            }
        }
        e.keyboard && a(document).on("keydown.scrollable", function(b) {
            if (!(!e.keyboard || b.altKey || b.ctrlKey || b.metaKey || a(b.target).is(":input"))) {
                if (e.keyboard != "static" && d != f) return;
                var c = b.keyCode;
                if (j && (c == 38 || c == 40)) {
                    f.move(c == 38 ? -1 : 1);
                    return b.preventDefault()
                }
                if (!j && (c == 37 || c == 39)) {
                    f.move(c == 37 ? -1 : 1);
                    return b.preventDefault()
                }
            }
        }), e.initialIndex && f.seekTo(e.initialIndex, 0, function() {})
    }
    a.fn.scrollable = function(b) {
        var c = this.data("scrollable");
        if (c) return c;
        b = a.extend({}, a.tools.scrollable.conf, b), this.each(function() {
            c = new e(a(this), b), a(this).data("scrollable", c)
        });
        return b.api ? c : this
    }
})(jQuery);
(function(a) {
    var b = a.tools.scrollable;
    b.autoscroll = {
        conf: {
            autoplay: !0,
            interval: 3e3,
            autopause: !0
        }
    }, a.fn.autoscroll = function(c) {
        typeof c == "number" && (c = {
            interval: c
        });
        var d = a.extend({}, b.autoscroll.conf, c),
            e;
        this.each(function() {
            var b = a(this).data("scrollable"),
                c = b.getRoot(),
                f, g = !1;

            function h() {
                f && clearTimeout(f), f = setTimeout(function() {
                    b.next()
                }, d.interval)
            }
            b && (e = b), b.play = function() {
                f || (g = !1, c.on("onSeek", h), h())
            }, b.pause = function() {
                f = clearTimeout(f), c.off("onSeek", h)
            }, b.resume = function() {
                g || b.play()
            }, b.stop = function() {
                g = !0, b.pause()
            }, d.autopause && c.add(b.getNaviButtons()).hover(b.pause, b.resume), d.autoplay && b.play()
        });
        return d.api ? e : this
    }
})(jQuery);
(function(a) {
    var b = a.tools.scrollable;
    b.navigator = {
        conf: {
            navi: ".navi",
            naviItem: null,
            activeClass: "active",
            indexed: !1,
            idPrefix: null,
            history: !1
        }
    };

    function c(b, c) {
        var d = a(c);
        return d.length < 2 ? d : b.parent().find(c)
    }
    a.fn.navigator = function(d) {
        typeof d == "string" && (d = {
            navi: d
        }), d = a.extend({}, b.navigator.conf, d);
        var e;
        this.each(function() {
            var b = a(this).data("scrollable"),
                f = d.navi.jquery ? d.navi : c(b.getRoot(), d.navi),
                g = b.getNaviButtons(),
                h = d.activeClass,
                i = d.history && history.pushState,
                j = b.getConf().size;
            b && (e = b), b.getNaviButtons = function() {
                return g.add(f)
            }, i && (history.pushState({
                i: 0
            }, ""), a(window).on("popstate", function(a) {
                var c = a.originalEvent.state;
                c && b.seekTo(c.i)
            }));

            function k(a, c, d) {
                b.seekTo(c), d.preventDefault(), i && history.pushState({
                    i: c
                }, "")
            }

            function l() {
                return f.find(d.naviItem || "> *")
            }

            function m(b) {
                var c = a("<" + (d.naviItem || "a") + "/>").click(function(c) {
                    k(a(this), b, c)
                });
                b === 0 && c.addClass(h), d.indexed && c.text(b + 1), d.idPrefix && c.attr("id", d.idPrefix + b);
                return c.appendTo(f)
            }
            l().length ? l().each(function(b) {
                a(this).click(function(c) {
                    k(a(this), b, c)
                })
            }) : a.each(b.getItems(), function(a) {
                a % j == 0 && m(a)
            }), b.onBeforeSeek(function(a, b) {
                setTimeout(function() {
                    if (!a.isDefaultPrevented()) {
                        var c = b / j,
                            d = l().eq(c);
                        d.length && l().removeClass(h).eq(c).addClass(h)
                    }
                }, 1)
            }), b.onAddItem(function(a, c) {
                var d = b.getItems().index(c);
                d % j == 0 && m(d)
            })
        });
        return d.api ? e : this
    }
})(jQuery);
(function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    }, a.tools.tabs = {
        conf: {
            tabs: "a",
            current: "current",
            onBeforeClick: null,
            onClick: null,
            effect: "default",
            initialEffect: !1,
            initialIndex: 0,
            event: "click",
            rotate: !1,
            slideUpSpeed: 400,
            slideDownSpeed: 400,
            history: !1
        },
        addEffect: function(a, c) {
            b[a] = c
        }
    };
    var b = {
            "default": function(a, b) {
                this.getPanes().hide().eq(a).show(), b.call()
            },
            fade: function(a, b) {
                var c = this.getConf(),
                    d = c.fadeOutSpeed,
                    e = this.getPanes();
                d ? e.fadeOut(d) : e.hide(), e.eq(a).fadeIn(c.fadeInSpeed, b)
            },
            slide: function(a, b) {
                var c = this.getConf();
                this.getPanes().slideUp(c.slideUpSpeed), this.getPanes().eq(a).slideDown(c.slideDownSpeed, b)
            },
            ajax: function(a, b) {
                this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"), b)
            }
        },
        c, d;
    a.tools.tabs.addEffect("horizontal", function(b, e) {
        if (!c) {
            var f = this.getPanes().eq(b),
                g = this.getCurrentPane();
            d || (d = this.getPanes().eq(0).width()), c = !0, f.show(), g.animate({
                width: 0
            }, {
                step: function(a) {
                    f.css("width", d - a)
                },
                complete: function() {
                    a(this).hide(), e.call(), c = !1
                }
            }), g.length || (e.call(), c = !1)
        }
    });

    function e(c, d, e) {
        var f = this,
            g = c.add(this),
            h = c.find(e.tabs),
            i = d.jquery ? d : c.children(d),
            j;
        h.length || (h = c.children()), i.length || (i = c.parent().find(d)), i.length || (i = a(d)), a.extend(this, {
            click: function(d, i) {
                var k = h.eq(d),
                    l = !c.data("tabs");
                typeof d == "string" && d.replace("#", "") && (k = h.filter("[href*=\"" + d.replace("#", "") + "\"]"), d = Math.max(h.index(k), 0));
                if (e.rotate) {
                    var m = h.length - 1;
                    if (d < 0) return f.click(m, i);
                    if (d > m) return f.click(0, i)
                }
                if (!k.length) {
                    if (j >= 0) return f;
                    d = e.initialIndex, k = h.eq(d)
                }
                if (d === j) return f;
                i = i || a.Event(), i.type = "onBeforeClick", g.trigger(i, [d]);
                if (!i.isDefaultPrevented()) {
                    var n = l ? e.initialEffect && e.effect || "default" : e.effect;
                    b[n].call(f, d, function() {
                        j = d, i.type = "onClick", g.trigger(i, [d])
                    }), h.removeClass(e.current), k.addClass(e.current);
                    return f
                }
            },
            getConf: function() {
                return e
            },
            getTabs: function() {
                return h
            },
            getPanes: function() {
                return i
            },
            getCurrentPane: function() {
                return i.eq(j)
            },
            getCurrentTab: function() {
                return h.eq(j)
            },
            getIndex: function() {
                return j
            },
            next: function() {
                return f.click(j + 1)
            },
            prev: function() {
                return f.click(j - 1)
            },
            destroy: function() {
                h.off(e.event).removeClass(e.current), i.find("a[href^=\"#\"]").off("click.T");
                return f
            }
        }), a.each("onBeforeClick,onClick".split(","), function(b, c) {
            a.isFunction(e[c]) && a(f).on(c, e[c]), f[c] = function(b) {
                b && a(f).on(c, b);
                return f
            }
        }), e.history && a.fn.history && (a.tools.history.init(h), e.event = "history"), h.each(function(b) {
            a(this).on(e.event, function(a) {
                f.click(b, a);
                return a.preventDefault()
            })
        }), i.find("a[href^=\"#\"]").on("click.T", function(b) {
            f.click(a(this).attr("href"), b)
        }), location.hash && e.tabs == "a" && c.find("[href=\"" + location.hash + "\"]").length ? f.click(location.hash) : (e.initialIndex === 0 || e.initialIndex > 0) && f.click(e.initialIndex)
    }
    a.fn.tabs = function(b, c) {
        var d = this.data("tabs");
        d && (d.destroy(), this.removeData("tabs")), a.isFunction(c) && (c = {
            onBeforeClick: c
        }), c = a.extend({}, a.tools.tabs.conf, c), this.each(function() {
            d = new e(a(this), b, c), a(this).data("tabs", d)
        });
        return c.api ? d : this
    }
})(jQuery);
(function(a) {
    var b;
    b = a.tools.tabs.slideshow = {
        conf: {
            next: ".forward",
            prev: ".backward",
            disabledClass: "disabled",
            autoplay: !1,
            autopause: !0,
            interval: 3e3,
            clickable: !0,
            api: !1
        }
    };

    function c(b, c) {
        var d = this,
            e = b.add(this),
            f = b.data("tabs"),
            g, h = !0;

        function i(c) {
            var d = a(c);
            return d.length < 2 ? d : b.parent().find(c)
        }
        var j = i(c.next).click(function() {
                f.next()
            }),
            k = i(c.prev).click(function() {
                f.prev()
            });

        function l() {
            g = setTimeout(function() {
                f.next()
            }, c.interval)
        }
        a.extend(d, {
            getTabs: function() {
                return f
            },
            getConf: function() {
                return c
            },
            play: function() {
                if (g) return d;
                var b = a.Event("onBeforePlay");
                e.trigger(b);
                if (b.isDefaultPrevented()) return d;
                h = !1, e.trigger("onPlay"), e.on("onClick", l), l();
                return d
            },
            pause: function() {
                if (!g) return d;
                var b = a.Event("onBeforePause");
                e.trigger(b);
                if (b.isDefaultPrevented()) return d;
                g = clearTimeout(g), e.trigger("onPause"), e.off("onClick", l);
                return d
            },
            resume: function() {
                h || d.play()
            },
            stop: function() {
                d.pause(), h = !0
            }
        }), a.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","), function(b, e) {
            a.isFunction(c[e]) && a(d).on(e, c[e]), d[e] = function(b) {
                return a(d).on(e, b)
            }
        }), c.autopause && f.getTabs().add(j).add(k).add(f.getPanes()).hover(d.pause, d.resume), c.autoplay && d.play(), c.clickable && f.getPanes().click(function() {
            f.next()
        });
        if (!f.getConf().rotate) {
            var m = c.disabledClass;
            f.getIndex() || k.addClass(m), f.onBeforeClick(function(a, b) {
                k.toggleClass(m, !b), j.toggleClass(m, b == f.getTabs().length - 1)
            })
        }
    }
    a.fn.slideshow = function(d) {
        var e = this.data("slideshow");
        if (e) return e;
        d = a.extend({}, b.conf, d), this.each(function() {
            e = new c(a(this), d), a(this).data("slideshow", e)
        });
        return d.api ? e : this
    }
})(jQuery);
(function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    };
    var b;
    b = a.tools.expose = {
        conf: {
            maskId: "exposeMask",
            loadSpeed: "slow",
            closeSpeed: "fast",
            closeOnClick: !0,
            closeOnEsc: !0,
            zIndex: 9998,
            opacity: .8,
            startOpacity: 0,
            color: "#fff",
            onLoad: null,
            onClose: null
        }
    };

    function c() {
        if (a.browser.msie) {
            var b = a(document).height(),
                c = a(window).height();
            return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, b - c < 20 ? c : b]
        }
        return [a(document).width(), a(document).height()]
    }

    function d(b) {
        if (b) return b.call(a.mask)
    }
    var e, f, g, h, i;
    a.mask = {
        load: function(j, k) {
            if (g) return this;
            typeof j == "string" && (j = {
                color: j
            }), j = j || h, h = j = a.extend(a.extend({}, b.conf), j), e = a("#" + j.maskId), e.length || (e = a("<div/>").attr("id", j.maskId), a("body").append(e));
            var l = c();
            e.css({
                position: "absolute",
                top: 0,
                left: 0,
                width: l[0],
                height: l[1],
                display: "none",
                opacity: j.startOpacity,
                zIndex: j.zIndex
            }), j.color && e.css("backgroundColor", j.color);
            if (d(j.onBeforeLoad) === !1) return this;
            j.closeOnEsc && a(document).on("keydown.mask", function(b) {
                b.keyCode == 27 && a.mask.close(b)
            }), j.closeOnClick && e.on("click.mask", function(b) {
                a.mask.close(b)
            }), a(window).on("resize.mask", function() {
                a.mask.fit()
            }), k && k.length && (i = k.eq(0).css("zIndex"), a.each(k, function() {
                var b = a(this);
                /relative|absolute|fixed/i.test(b.css("position")) || b.css("position", "relative")
            }), f = k.css({
                zIndex: Math.max(j.zIndex + 1, i == "auto" ? 0 : i)
            })), e.css({
                display: "block"
            }).fadeTo(j.loadSpeed, j.opacity, function() {
                a.mask.fit(), d(j.onLoad), g = "full"
            }), g = !0;
            return this
        },
        close: function() {
            if (g) {
                if (d(h.onBeforeClose) === !1) return this;
                e.fadeOut(h.closeSpeed, function() {
                    d(h.onClose), f && f.css({
                        zIndex: i
                    }), g = !1
                }), a(document).off("keydown.mask"), e.off("click.mask"), a(window).off("resize.mask")
            }
            return this
        },
        fit: function() {
            if (g) {
                var a = c();
                e.css({
                    width: a[0],
                    height: a[1]
                })
            }
        },
        getMask: function() {
            return e
        },
        isLoaded: function(a) {
            return a ? g == "full" : g
        },
        getConf: function() {
            return h
        },
        getExposed: function() {
            return f
        }
    }, a.fn.mask = function(b) {
        a.mask.load(b);
        return this
    }, a.fn.expose = function(b) {
        a.mask.load(b, this);
        return this
    }
})(jQuery);
(function() {
    var a = document.all,
        b = "http://www.adobe.com/go/getflashplayer",
        c = typeof jQuery == "function",
        d = /(\d+)[^\d]+(\d+)[^\d]*(\d*)/,
        e = {
            width: "100%",
            height: "100%",
            id: "_" + ("" + Math.random()).slice(9),
            allowfullscreen: !0,
            allowscriptaccess: "always",
            quality: "high",
            version: [3, 0],
            onFail: null,
            expressInstall: null,
            w3c: !1,
            cachebusting: !1
        };
    window.attachEvent && window.attachEvent("onbeforeunload", function() {
        __flash_unloadHandler = function() {}, __flash_savedUnloadHandler = function() {}
    });

    function f(a, b) {
        if (b)
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }

    function g(a, b) {
        var c = [];
        for (var d in a) a.hasOwnProperty(d) && (c[d] = b(a[d]));
        return c
    }
    window.flashembed = function(a, b, c) {
        typeof a == "string" && (a = document.getElementById(a.replace("#", "")));
        if (a) {
            typeof b == "string" && (b = {
                src: b
            });
            return new j(a, f(f({}, e), b), c)
        }
    };
    var h = f(window.flashembed, {
            conf: e,
            getVersion: function() {
                var a, b;
                try {
                    b = navigator.plugins["Shockwave Flash"].description.slice(16)
                } catch (c) {
                    try {
                        a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = a && a.GetVariable("$version")
                    } catch (e) {
                        try {
                            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = a && a.GetVariable("$version")
                        } catch (f) {}
                    }
                }
                b = d.exec(b);
                return b ? [b[1], b[3]] : [0, 0]
            },
            asString: function(a) {
                if (a === null || a === undefined) return null;
                var b = typeof a;
                b == "object" && a.push && (b = "array");
                switch (b) {
                    case "string":
                        a = a.replace(new RegExp("([\"\\\\])", "g"), "\\$1"), a = a.replace(/^\s?(\d+\.?\d*)%/, "$1pct");
                        return "\"" + a + "\"";
                    case "array":
                        return "[" + g(a, function(a) {
                            return h.asString(a)
                        }).join(",") + "]";
                    case "function":
                        return "\"function()\"";
                    case "object":
                        var c = [];
                        for (var d in a) a.hasOwnProperty(d) && c.push("\"" + d + "\":" + h.asString(a[d]));
                        return "{" + c.join(",") + "}"
                }
                return String(a).replace(/\s/g, " ").replace(/\'/g, "\"")
            },
            getHTML: function(b, c) {
                b = f({}, b);
                var d = "<object width=\"" + b.width + "\" height=\"" + b.height + "\" id=\"" + b.id + "\" name=\"" + b.id + "\"";
                b.cachebusting && (b.src += (b.src.indexOf("?") != -1 ? "&" : "?") + Math.random()), b.w3c || !a ? d += " data=\"" + b.src + "\" type=\"application/x-shockwave-flash\"" : d += " classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\"", d += ">";
                if (b.w3c || a) d += "<param name=\"movie\" value=\"" + b.src + "\" />";
                b.width = b.height = b.id = b.w3c = b.src = null, b.onFail = b.version = b.expressInstall = null;
                for (var e in b) b[e] && (d += "<param name=\"" + e + "\" value=\"" + b[e] + "\" />");
                var g = "";
                if (c) {
                    for (var i in c)
                        if (c[i]) {
                            var j = c[i];
                            g += i + "=" + encodeURIComponent(/function|object/.test(typeof j) ? h.asString(j) : j) + "&"
                        }
                    g = g.slice(0, -1), d += "<param name=\"flashvars\" value='" + g + "' />"
                }
                d += "</object>";
                return d
            },
            isSupported: function(a) {
                return i[0] > a[0] || i[0] == a[0] && i[1] >= a[1]
            }
        }),
        i = h.getVersion();

    function j(c, d, e) {
        if (h.isSupported(d.version)) c.innerHTML = h.getHTML(d, e);
        else if (d.expressInstall && h.isSupported([6, 65])) c.innerHTML = h.getHTML(f(d, {
            src: d.expressInstall
        }), {
            MMredirectURL: location.href,
            MMplayerType: "PlugIn",
            MMdoctitle: document.title
        });
        else {
            c.innerHTML.replace(/\s/g, "") || (c.innerHTML = "<h2>Flash version " + d.version + " or greater is required</h2><h3>" + (i[0] > 0 ? "Your version is " + i : "You have no flash plugin installed") + "</h3>" + (c.tagName == "A" ? "<p>Click here to download latest version</p>" : "<p>Download latest version from <a href='" + b + "'>here</a></p>"), c.tagName == "A" && (c.onclick = function() {
                location.href = b
            }));
            if (d.onFail) {
                var g = d.onFail.call(this);
                typeof g == "string" && (c.innerHTML = g)
            }
        }
        a && (window[d.id] = document.getElementById(d.id)), f(this, {
            getRoot: function() {
                return c
            },
            getOptions: function() {
                return d
            },
            getConf: function() {
                return e
            },
            getApi: function() {
                return c.firstChild
            }
        })
    }
    c && (jQuery.tools = jQuery.tools || {
        version: "v1.2.7"
    }, jQuery.tools.flashembed = {
        conf: e
    }, jQuery.fn.flashembed = function(a, b) {
        return this.each(function() {
            jQuery(this).data("flashembed", flashembed(this, a, b))
        })
    })
})();
(function(a) {
    a.fn.mousewheel = function(a) {
        return this[a ? "on" : "trigger"]("wheel", a)
    }, a.event.special.wheel = {
        setup: function() {
            a.event.add(this, b, c, {})
        },
        teardown: function() {
            a.event.remove(this, b, c)
        }
    };
    var b = a.browser.mozilla ? "DOMMouseScroll" + (a.browser.version < "1.9" ? " mousemove" : "") : "mousewheel";

    function c(b) {
        switch (b.type) {
            case "mousemove":
                return a.extend(b.data, {
                    clientX: b.clientX,
                    clientY: b.clientY,
                    pageX: b.pageX,
                    pageY: b.pageY
                });
            case "DOMMouseScroll":
                a.extend(b, b.data), b.delta = -b.detail / 3;
                break;
            case "mousewheel":
                b.delta = b.wheelDelta / 120
        }
        b.type = "wheel";
        return a.event.handle.call(this, b, b.delta)
    }
})(jQuery);
(function(a) {
    a.tools = a.tools || {
        version: "v1.2.7"
    }, a.tools.tooltip = {
        conf: {
            effect: "toggle",
            fadeOutSpeed: "fast",
            predelay: 0,
            delay: 30,
            opacity: 1,
            tip: 0,
            fadeIE: !1,
            position: ["top", "center"],
            offset: [0, 0],
            relative: !1,
            cancelDefault: !0,
            events: {
                def: "mouseenter,mouseleave",
                input: "focus,blur",
                widget: "focus mouseenter,blur mouseleave",
                tooltip: "mouseenter,mouseleave"
            },
            layout: "<div/>",
            tipClass: "tooltip"
        },
        addEffect: function(a, c, d) {
            b[a] = [c, d]
        }
    };
    var b = {
        toggle: [function(a) {
            var b = this.getConf(),
                c = this.getTip(),
                d = b.opacity;
            d < 1 && c.css({
                opacity: d
            }), c.show(), a.call()
        }, function(a) {
            this.getTip().hide(), a.call()
        }],
        fade: [function(b) {
            var c = this.getConf();
            !a.browser.msie || c.fadeIE ? this.getTip().fadeTo(c.fadeInSpeed, c.opacity, b) : (this.getTip().show(), b())
        }, function(b) {
            var c = this.getConf();
            !a.browser.msie || c.fadeIE ? this.getTip().fadeOut(c.fadeOutSpeed, b) : (this.getTip().hide(), b())
        }]
    };

    function c(b, c, d) {
        var e = d.relative ? b.position().top : b.offset().top,
            f = d.relative ? b.position().left : b.offset().left,
            g = d.position[0];
        e -= c.outerHeight() - d.offset[0], f += b.outerWidth() + d.offset[1], /iPad/i.test(navigator.userAgent) && (e -= a(window).scrollTop());
        var h = c.outerHeight() + b.outerHeight();
        g == "center" && (e += h / 2), g == "bottom" && (e += h), g = d.position[1];
        var i = c.outerWidth() + b.outerWidth();
        g == "center" && (f -= i / 2), g == "left" && (f -= i);
        return {
            top: e,
            left: f
        }
    }

    function d(d, e) {
        var f = this,
            g = d.add(f),
            h, i = 0,
            j = 0,
            k = d.attr("title"),
            l = d.attr("data-tooltip"),
            m = b[e.effect],
            n, o = d.is(":input"),
            p = o && d.is(":checkbox, :radio, select, :button, :submit"),
            q = d.attr("type"),
            r = e.events[q] || e.events[o ? p ? "widget" : "input" : "def"];
        if (!m) throw "Nonexistent effect \"" + e.effect + "\"";
        r = r.split(/,\s*/);
        if (r.length != 2) throw "Tooltip: bad events configuration for " + q;
        d.on(r[0], function(a) {
            clearTimeout(i), e.predelay ? j = setTimeout(function() {
                f.show(a)
            }, e.predelay) : f.show(a)
        }).on(r[1], function(a) {
            clearTimeout(j), e.delay ? i = setTimeout(function() {
                f.hide(a)
            }, e.delay) : f.hide(a)
        }), k && e.cancelDefault && (d.removeAttr("title"), d.data("title", k)), a.extend(f, {
            show: function(b) {
                if (!h) {
                    l ? h = a(l) : e.tip ? h = a(e.tip).eq(0) : k ? h = a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k) : (h = d.next(), h.length || (h = d.parent().next()));
                    if (!h.length) throw "Cannot find tooltip for " + d
                }
                if (f.isShown()) return f;
                h.stop(!0, !0);
                var o = c(d, h, e);
                e.tip && h.html(d.data("title")), b = a.Event(), b.type = "onBeforeShow", g.trigger(b, [o]);
                if (b.isDefaultPrevented()) return f;
                o = c(d, h, e), h.css({
                    position: "absolute",
                    top: o.top,
                    left: o.left
                }), n = !0, m[0].call(f, function() {
                    b.type = "onShow", n = "full", g.trigger(b)
                });
                var p = e.events.tooltip.split(/,\s*/);
                h.data("__set") || (h.off(p[0]).on(p[0], function() {
                    clearTimeout(i), clearTimeout(j)
                }), p[1] && !d.is("input:not(:checkbox, :radio), textarea") && h.off(p[1]).on(p[1], function(a) {
                    a.relatedTarget != d[0] && d.trigger(r[1].split(" ")[0])
                }), e.tip || h.data("__set", !0));
                return f
            },
            hide: function(c) {
                if (!h || !f.isShown()) return f;
                c = a.Event(), c.type = "onBeforeHide", g.trigger(c);
                if (!c.isDefaultPrevented()) {
                    n = !1, b[e.effect][1].call(f, function() {
                        c.type = "onHide", g.trigger(c)
                    });
                    return f
                }
            },
            isShown: function(a) {
                return a ? n == "full" : n
            },
            getConf: function() {
                return e
            },
            getTip: function() {
                return h
            },
            getTrigger: function() {
                return d
            }
        }), a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","), function(b, c) {
            a.isFunction(e[c]) && a(f).on(c, e[c]), f[c] = function(b) {
                b && a(f).on(c, b);
                return f
            }
        })
    }
    a.fn.tooltip = function(b) {
        var c = this.data("tooltip");
        if (c) return c;
        b = a.extend(!0, {}, a.tools.tooltip.conf, b), typeof b.position == "string" && (b.position = b.position.split(/,?\s/)), this.each(function() {
            c = new d(a(this), b), a(this).data("tooltip", c)
        });
        return b.api ? c : this
    }
})(jQuery);
(function(a) {
    var b = a.tools.tooltip;
    a.extend(b.conf, {
        direction: "up",
        bounce: !1,
        slideOffset: 10,
        slideInSpeed: 200,
        slideOutSpeed: 200,
        slideFade: !a.browser.msie
    });
    var c = {
        up: ["-", "top"],
        down: ["+", "top"],
        left: ["-", "left"],
        right: ["+", "left"]
    };
    b.addEffect("slide", function(a) {
        var b = this.getConf(),
            d = this.getTip(),
            e = b.slideFade ? {
                opacity: b.opacity
            } : {},
            f = c[b.direction] || c.up;
        e[f[1]] = f[0] + "=" + b.slideOffset, b.slideFade && d.css({
            opacity: 0
        }), d.show().animate(e, b.slideInSpeed, a)
    }, function(b) {
        var d = this.getConf(),
            e = d.slideOffset,
            f = d.slideFade ? {
                opacity: 0
            } : {},
            g = c[d.direction] || c.up,
            h = "" + g[0];
        d.bounce && (h = h == "+" ? "-" : "+"), f[g[1]] = h + "=" + e, this.getTip().animate(f, d.slideOutSpeed, function() {
            a(this).hide(), b.call()
        })
    })
})(jQuery);


// Following is PwC Media Player library
// v13 Sept 2013
// (c) 2013 PwC

function thisMovie(movieName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName];
    } else {
        return document[movieName];
    }
}

function PauseMedia(value) {
    thisMovie(value).MediaController('pause');
}

function PlayMedia(value) {
    thisMovie(value).MediaController('play');
}

function PauseAllMedia() {
    $('object').each(function() {
        var tmp = $(this).attr("id");
        thisMovie(tmp).MediaController('pause');
    });


}

function PlayAllMedia() {
    $('object').each(function() {
        var tmp = $(this).attr("id");
        thisMovie(tmp).MediaController('play');
    });


}

function CloseOverlay() {
    $(".media-overlay").each(function() {
        $(this).overlay().close();
    });
};

function ShowThumb(ddd, bool) {

    if (bool) {
        CloseOverlay();
        $(window.location).attr('href', $(ddd).attr("src")); //if its an overlay
    } else {

        thumbnailHtml = "<a href='" + $(ddd).attr("src") + "'><img style='background-color: rgb(0,0,0)' src='" + $(ddd).attr("poster") + "' width='" + $(ddd).attr("width") + "' height='" + $(ddd).attr("height") + "' alt='Play media' /><img style='position:relative;top:-24px;left:0px;' src='" + $(ddd).attr("media-playbutton") + "' alt='Play button' /></a>";

        var temp = $(ddd).parent();
        $(temp).html(thumbnailHtml);
    }
};
//Create embedded media plugin

(function($) {
    jQuery.extend({
        getUrlVars: function() {
            var vars = [],
                hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        },
        getUrlVar: function(name) {
            return jQuery.getUrlVars()[name];
        }
    });



    $.fn.embedMedia = function(t) {
        var _mob = false;
        (jsdevice == 'mobile') ? _mob = true: _mob = false;

        //(jQuery.getUrlVar('mobiletvh') == '1' ) ? _mob = true : _mob = false;

        //Determine if media should use UK's servers
        var _mediaPageURL = window.location.href.toString();
        var _mediaURLPrefix = "download.pwc.com";
        if (_mediaPageURL.search(".co.uk") >= 0 ||
            _mediaPageURL.search("/uk/en") >= 0 ||
            _mediaPageURL.search("/en_UK/uk") >= 0 ||
            _mediaPageURL.search("/en_uk/uk") >= 0) {
            _mediaURLPrefix = "pwc-uk.edgesuite.net/pwc";
        }
        if (_mediaPageURL.search(".co.uk/careers") >= 0 ||
            _mediaPageURL.search("/uk/en/careers") >= 0 ||
            _mediaPageURL.search("/en_UK/uk/careers") >= 0 ||
            _mediaPageURL.search("/en_uk/uk/careers") >= 0) {
            _mediaURLPrefix = "download.pwc.com";
        }

        //PATH TO ASSETS
        //var mediaSwfPath 	= "";
        //var imagePath		= "";
        var mediaSwfPath = "http://www.pwc.com/gx/en/assets/media/";
        var imagePath = "http:///en_GX/webadmin/assets/image/";



        //START each media-embed

        //DEFAULT VALUES DO NOT EDIT
        var mediaFlashObjectId = "flash_" + t; //The identifier if this is a flash object
        var mediaSrc = ""; //relative source of media (audio/video/image)
        var mediaTitle = ""; //Basic title to display below overlay
        var mediaWidth = "540"; //width of media
        var mediaHeight = "300"; //height of media 		
        var mediaTrack = "true"; //webtrends
        var mediaHd = "false"; //HD video - string gets passed to flash player
        var mediaMobile = false; //mobile backup video
        var mediaPoster = ""; //Still image for audio and HTML5 player
        var mediaFlashvars = ""; //Used for regular flash movies 
        var mediaStreaming = "false"; //Override default streaming behavior
        var mediaColor = "orange"; //one of eight choices
        var mediaAltFlashID = null; //a div section used for alternate content in case no flash
        var mediaActivateNow = false; //start video immediately or not
        var mediaCuepoints = ""; //relative path to a cuepoints xml file

        if ($(this).attr("media-objectid")) {
            mediaFlashObjectId = $(this).attr("media-objectid");
        }
        if ($(this).attr("media-title")) {
            mediaTitle = $(this).attr("media-title");
        }
        if ($(this).attr("media-src")) {
            mediaSrc = $(this).attr("media-src");
        }
        if ($(this).attr("media-width")) {
            mediaWidth = $(this).attr("media-width");
        }
        if ($(this).attr("media-height")) {
            mediaHeight = $(this).attr("media-height");
        }
        if ($(this).attr("media-track")) {
            mediaTrack = $(this).attr("media-track");
        }
        if ($(this).attr("media-poster")) {
            mediaPoster = $(this).attr("media-poster");
        }
        if ($(this).attr("media-hd")) {
            mediaHd = $(this).attr("media-hd");
        }
        if (($(this).attr("media-mobile")) && ($(this).attr("media-mobile") == "true")) {
            mediaMobile = true;
        }
        if ($(this).attr("media-flashvars")) {
            mediaFlashvars = "?" + $(this).attr("media-flashvars");
        }
        if ($(this).attr("media-streaming")) {
            mediaStreaming = $(this).attr("media-streaming");
        }
        if ($(this).attr("media-color")) {
            mediaColor = $(this).attr("media-color");
        }
        if ($(this).attr("media-alternate-id")) {
            mediaAltFlashID = $(this).attr("media-alternate-id");
        }
        if (($(this).attr("media-activatenow")) && ($(this).attr("media-activatenow") == "true")) {
            mediaActivateNow = true;
        }
        if ($(this).attr("media-cuepoints")) {
            mediaCuepoints = $(this).attr("media-cuepoints");
        }

        //resize for mobile
        if (_mob) {
            var mw = parseInt(mediaWidth);
            var mh = parseInt(mediaHeight);
            var aspectratio = mw / mh;
            mh = 310 / aspectratio;
            mediaWidth = "310";
            mediaHeight = String(mh);
        }



        //reformat mediatitle
        var reformattedMediaTitle = mediaTitle.replace(/[\'\?]/g, "");
        //hide the alternate-id
        (mediaAltFlashID) ? $(mediaAltFlashID).css("display", "none"): undefined;


        //check for file extension
        var mediaType = "";
        var fileExtension = "";
        var buttonSrc = null;
        fileExtension = mediaSrc.substring(mediaSrc.lastIndexOf(".") + 1, mediaSrc.length).toLowerCase();
        if ((fileExtension == "jpeg") || (fileExtension == "jpg") || (fileExtension == "gif") || (fileExtension == "png")) {
            mediaType = "image";
        } else if (fileExtension == "mp3") {
            buttonSrc = "media-audio-button.jpg";
            mediaType = "audio";

        } else if (fileExtension == "swf") {
            mediaType = "flash";
        } else {
            mediaType = "video";
            buttonSrc = "media-play-button.jpg";
        }

        //Set mobile version flag
        var showmobileVersion = false;
        if ((mediaType == "audio") && (flashembed.isSupported([10, 0]) == false)) {
            showmobileVersion = true;
        } else if ((mediaType == "video") && (flashembed.isSupported([10, 0]) == false) && (mediaMobile)) {
            showmobileVersion = true;
        }

        if ((showmobileVersion == true)) { //START mobile

            var newHtml = "";
            //Create HTML5 player with plain video link as fallback
            switch (mediaType) {
                case "video":
                    newHtml = "<video poster='" + mediaPoster + "' media-playbutton='" + imagePath + buttonSrc + "' src='http://" + _mediaURLPrefix + mediaSrc + ".mp4' controls height='" + mediaHeight + "' width='" + mediaWidth + "' onerror='ShowThumb($(this),false);'><a href='http://" + _mediaURLPrefix + mediaSrc + ".mp4'><img style='background-color: rgb(0,0,0)' src='" + mediaPoster + "' width='" + mediaWidth + "' height='" + mediaHeight + "' alt='Play media' /><img style='position:relative;top:-24px;left:0px;' src='" + imagePath + buttonSrc + "' alt='Play button' /></a></video>"
                    break;

                case "audio":
                    newHtml = "<a href='http://" + _mediaURLPrefix + mediaSrc + "'><img style='background-color: rgb(0,0,0)' src='" + mediaPoster + "' width='" + mediaWidth + "' height='" + mediaHeight + "' alt='Play media' /><img style='position:relative;top:0px;left:-" + mediaWidth + "px;' src='" + imagePath + buttonSrc + "' alt='Play button' /></a>"


                    break;

            }
            $(this).html(newHtml);

        } else {
            //START Can show flash
            if (flashembed.isSupported([10, 0])) {

                //START flashembed generic flash
                if (mediaType == "flash") {

                    $(this).flashembed({
                        //params
                        src: mediaSrc + mediaFlashvars,
                        version: [10, 60], //requires version 10.1
                        wmode: 'transparent',
                        allowscriptaccess: 'always',
                        allowfullscreen: 'true',
                        bgcolor: '#FFFFFF',
                        expressInstall: mediaSwfPath + 'expressinstall.swf',
                        width: mediaWidth,
                        height: mediaHeight,
                        id: mediaFlashObjectId
                    });

                    //END flashembed generic player
                    //$(this).html(regularFlashHtml);

                } else {

                    $(this).flashembed({
                        //params
                        src: mediaSwfPath + 'pwcMedia.swf',

                        version: [10, 60], //requires version 10.1
                        expressInstall: mediaSwfPath + 'expressinstall.swf',
                        wmode: 'transparent',
                        allowscriptaccess: 'always',
                        allowfullscreen: 'true',
                        width: mediaWidth,
                        height: mediaHeight,
                        id: mediaFlashObjectId
                    }, {
                        media: mediaSrc,
                        color: mediaColor,
                        player: mediaSwfPath + 'pwcMediaPlayer.swf',
                        instantplay: mediaActivateNow,
                        hd: mediaHd,
                        videowidth: mediaWidth,
                        videoheight: mediaHeight,
                        webtrends: mediaTrack,
                        title: reformattedMediaTitle,
                        poster: mediaPoster,
                        stream: mediaStreaming,
                        cuepoints: mediaCuepoints,
                        mediadomain: _mediaURLPrefix
                    }); //END flashembed media player

                    //	$(this).html(flashMediaPlayerHtml);

                } //END flashembed generic flash ELSE


            } else //END flash is supported

            { //BEGIN alternate flash content
                if (mediaAltFlashID) {

                    $(this).html($("#" + mediaAltFlashID).html());
                } else {
                    var altmediacontent = "<div align='center' style='padding:10px;' ><p>You need Adobe Flash to view this.</p><a href='http://get.adobe.com/flashplayer/' target='_blank' ><img src='" + imagePath + "media-get-flash.jpg' /></a></div>";
                    $(this).html(altmediacontent);
                }

            } //END alternate flash content

        } //END mobile or flash


    };
})(jQuery);




//Overlay method
(function($) {
    $.fn.overlayMedia = function(p) {


        var $this = $(this);

        var _mob = false;
        (jsdevice == 'mobile') ? _mob = true: _mob = false;
        //(jQuery.getUrlVar('mobiletvh') == '1' ) ? _mob = true : _mob = false;

        //Determine if media should use UK's servers
        var _mediaPageURL = window.location.href.toString();
        var _mediaURLPrefix = "download.pwc.com";
        if (_mediaPageURL.search(".co.uk") >= 0 ||
            _mediaPageURL.search("/uk/en") >= 0 ||
            _mediaPageURL.search("/en_UK/uk") >= 0 ||
            _mediaPageURL.search("/en_uk/uk") >= 0) {
            _mediaURLPrefix = "pwc-uk.edgesuite.net/pwc";
        }
        if (_mediaPageURL.search(".co.uk/careers") >= 0 ||
            _mediaPageURL.search("/uk/en/careers") >= 0 ||
            _mediaPageURL.search("/en_UK/uk/careers") >= 0 ||
            _mediaPageURL.search("/en_uk/uk/careers") >= 0) {
            _mediaURLPrefix = "download.pwc.com";
        }

        //PATH TO ASSETS
        //var mediaSwfPath 	= "";
        //var imagePath		= "";
        var mediaSwfPath = "http://www.pwc.com/gx/en/assets/media/";
        var imagePath = "http://www.pwc.com/en_GX/webadmin/assets/image/";

        //START each media-overlay
        if ($("#pwc-media-overlay").length) {} else {
            $("<div class='expanding_overlay' id='pwc-media-overlay'><div id='media-player'> </div><div id='media-details' style='font-size:small' ></div></div>").appendTo('body');
        }


        //DEFAULT VALUES DO NOT EDIT
        var mediaFlashObjectId = "flash_" + p; //The identifier if this is a flash object
        var mediaSrc = ""; //relative source of media (audio/video/image)
        var mediaTitle = ""; //Basic title to display below overlay
        var mediaWidth = "540"; //width of media
        var mediaHeight = "300"; //height of media 		
        var mediaTrack = "true"; //webtrends
        var mediaDetailsId = null; //Div ID for raw HTML content in lieu of title
        var mediaHd = "false"; //HD video - string gets passed to flash player
        var mediaMobile = false; //mobile backup video
        var mediaPoster = ""; //Still image for audio and HTML5 player
        var mediaFlashvars = ""; //Used for regular flash movies 
        var mediaStreaming = "false"; //Override default streaming behavior
        var mediaActivateNow = false; //Immediately open the modal or not (when created dynamically)
        var mediaColor = "orange"; //Color family (8 choices)
        var mediaAltFlashID = null; //a div section used for alternate content in case no flash
        var mediaCuepoints = ""; //relative path to a cuepoints xml file
        var mediaType = ""; //added Oct 17 2011- force a media type (helpful with external ajax)

        if ($(this).attr("media-objectid")) {
            mediaFlashObjectId = $(this).attr("media-objectid");
        }
        if ($(this).attr("media-title")) {
            mediaTitle = $(this).attr("media-title");
        }
        if ($(this).attr("media-src")) {
            mediaSrc = $(this).attr("media-src");
        }
        if ($(this).attr("media-width")) {
            mediaWidth = $(this).attr("media-width");
        }
        if ($(this).attr("media-height")) {
            mediaHeight = $(this).attr("media-height");
        }
        if ($(this).attr("media-track")) {
            mediaTrack = $(this).attr("media-track");
        }
        if ($(this).attr("media-poster")) {
            mediaPoster = $(this).attr("media-poster");
        }
        if ($(this).attr("media-details-id")) {
            mediaDetailsId = $(this).attr("media-details-id");
        }
        if ($(this).attr("media-hd")) {
            mediaHd = $(this).attr("media-hd");
        }
        if (($(this).attr("media-mobile")) && ($(this).attr("media-mobile") == "true")) {
            mediaMobile = true;
        }
        if ($(this).attr("media-flashvars")) {
            mediaFlashvars = "?" + $(this).attr("media-flashvars");
        }
        if ($(this).attr("media-streaming")) {
            mediaStreaming = $(this).attr("media-streaming");
        }
        if ($(this).attr("media-color")) {
            mediaColor = $(this).attr("media-color");
        }
        if (($(this).attr("media-activatenow")) && ($(this).attr("media-activatenow") == "true")) {
            mediaActivateNow = true;
        }
        if ($(this).attr("media-alternate-id")) {
            mediaAltFlashID = $(this).attr("media-alternate-id");
        }
        if ($(this).attr("media-cuepoints")) {
            mediaCuepoints = $(this).attr("media-cuepoints");
        }
        if ($(this).attr("media-type")) {
            mediaType = $(this).attr("media-type");
        }

        //resize for mobile
        if (_mob) {
            var mw = parseInt(mediaWidth);
            var mh = parseInt(mediaHeight);
            var aspectratio = mw / mh;
            mh = 310 / aspectratio;
            mediaWidth = "310";
            mediaHeight = String(mh);
        }

        //reformat mediatitle
        var reformattedMediaTitle = mediaTitle.replace(/[\'\?]/g, "");
        //hide the alternate-id
        (mediaAltFlashID) ? $("#" + mediaAltFlashID).css("display", "none"): undefined;
        //hide details ID if it exists
        (mediaDetailsId) ? $("#" + mediaDetailsId).css("display", "none"): undefined;



        //check for file extension
        var fileExtension = "";
        fileExtension = mediaSrc.substring(mediaSrc.lastIndexOf(".") + 1, mediaSrc.length).toLowerCase();
        if (mediaType != "") {
            //use the user-assigned mediaType
        } else if (mediaSrc.charAt(0) == "#") {
            mediaType = "html";
        } else if ((fileExtension == "jhtml") || (fileExtension == "html") || (fileExtension == "htm")) {
            mediaType = "external";
        } else if ((fileExtension == "jpeg") || (fileExtension == "jpg") || (fileExtension == "gif") || (fileExtension == "png")) {
            mediaType = "image";
        } else if (fileExtension == "mp3") {
            mediaType = "audio";
        } else if (fileExtension == "swf") {
            mediaType = "flash";
        } else {
            mediaType = "video";
        }


        //Set mobile version flag
        var showmobileVersion = false;
        if ((mediaType == "audio") && (flashembed.isSupported([10, 0]) == false)) {
            showmobileVersion = true;
        } else if ((mediaType == "video") && (flashembed.isSupported([10, 0]) == false) && (mediaMobile)) {
            showmobileVersion = true;
        }

        if ((showmobileVersion) && (mediaType == "audio")) { //if audio - jump right to audio

            $(this).click(function() {
                //redirect to media
                document.location = "http://" + _mediaURLPrefix + mediaSrc;

            });

        } else { //create standard overlay

            $(this).overlay({ //START overlay

                    target: '#pwc-media-overlay',
                    //effect 					: 'apple',
                    speed: 1,
                    closeOnClick: true,
                    closeonEscape: true,
                    fadeInSpeed: 0,
                    fadeOutSpeed: 0,
                    zIndex: 20000,
                    fixed: false,
                    top: '8%',
                    mask: {
                        color: '#ffffff',
                        loadSpeed: 0,
                        opacity: 0.85
                    },
                    load: mediaActivateNow,
                    onClose: function() {
                        //reset some styles 
                        if (mediaType == "html") {
                            //if it's inline we move the div back to body DOM and hide it
                            $(mediaSrc).css('display', 'none');
                            $(mediaSrc).appendTo("body");

                        }
                        $("#media-player").css("background-color", "");
                        $("#media-player").css("border", "");

                        $("#media-player").empty();
                    },
                    onLoad: function() {
                        //hide the background image for odd sizes

                        if ((mediaType == "external") || (mediaType == "html") || (mediaType == "image") || (mediaType == "flash") || (mediaHeight == "45")) {
                            $("img[src*=media-transparent]").attr("id", "media-transparent-background"); //assign ID to transparent background
                            $("#media-transparent-background").fadeOut('fast');

                        }

                        //for new multiplayer, wait for modal to finish before building multiplayer HTML
                        //$modalAOK = true;
                        $("#pwc-media-overlay").trigger("modalready");


                    },
                    onBeforeClose: function() {


                    },
                    onBeforeLoad: function() { //START onBeforeLoad of overlay

                            $mediaTrigger = $this;
                            this.getOverlay().appendTo('body'); //IE7 fix for z-index issue
                            var formattedtitle = "<h3>" + mediaTitle + "</h3>";
                            $("#media-details").css("width", (mediaWidth + "px"));
                            $("#media-details").css("z-index", "20020");
                            //use the title or inline content div for details
                            (mediaDetailsId) ? $("#media-details").html($("#" + mediaDetailsId).html()): $("#media-details").html(formattedtitle);

                            //no poster image for non-audio media
                            (mediaType != "audio") ? mediaPoster = "": undefined;

                            //START file extension conditional
                            switch (mediaType) {

                                case "external":

                                    $("#media-player").css("background-color", "#FFFFFF");
                                    $("#media-player").css("border", "1px solid #968c6d");

                                    var externalHtml = "<iframe type='text/html' width='" + mediaWidth + "' height='" + mediaHeight + "' src='" + mediaSrc + "' frameborder='0' style='overflow-x:hidden;overflow-y:scroll;' scrolling='yes'></iframe>";
                                    $("#media-player").html(externalHtml);


                                    break;

                                case "image":
                                    //image

                                    var imageHtml = "<img src=\"" + mediaSrc + "\" alt=\"" + mediaTitle + "\" width=\"" + mediaWidth + "\" height=\"" + mediaHeight + "\" />";

                                    $("#media-player").html(imageHtml);
                                    break;

                                case "html":

                                    var tempContentDiv = "";
                                    if (mediaSrc.search('youtube') >= 0) { //remove padding for overlay youtube vids and create youtube iframe embed
                                        var ytheight = 394;
                                        var ytwidth = 700;
                                        var ytid = "yt-" + p;
                                        if ($(mediaSrc).attr('height') != undefined) {
                                            ytheight = $(mediaSrc).attr('height');
                                        }
                                        if ($(mediaSrc).attr('width') != undefined) {
                                            ytwidth = $(mediaSrc).attr('width');
                                        }
                                        if ($(mediaSrc).attr('id') != undefined) {
                                            ytid = $(mediaSrc).attr('id');
                                        }

                                        tempContentDiv = "<div id='media-inline-html-div' style='overflow-y:auto;width:" + mediaWidth + "px;height:" + mediaHeight + "px;padding:0;'><iframe id='" + ytid + "' frameborder='0' height='" + ytheight + "' src='" + $(mediaSrc).attr('src') + "' width='" + ytwidth + "'></iframe></div>";
                                        $("#media-player").append(tempContentDiv);
                                        $("#media-inline-html-div").css('padding', '0');
                                        $("#media-player").css("background-color", "#000000");
                                        $("#media-player").css("border", "1px solid #000000");




                                    } else {
                                        tempContentDiv = "<div id='media-inline-html-div' style='overflow-y:auto;width:" + mediaWidth + "px;height:" + mediaHeight + "px;padding:0px 10px 10px 10px;'></div>";
                                        $("#media-player").append(tempContentDiv);
                                        $("#media-player").css("background-color", "#FFFFFF");
                                        $("#media-player").css("border", "1px solid #cccccc");
                                        $(mediaSrc).appendTo("#media-inline-html-div");
                                        $(mediaSrc).css('display', 'block');
                                    }



                                    //
                                    //set some styles 


                                    break;



                                default:
                                    //START Can show flash
                                    if (flashembed.isSupported([10, 0])) {

                                        //START flashembed generic flash
                                        if (mediaType == "flash") {
                                            //set some styles 
                                            $("#media-player").css("background-color", "#FFFFFF");
                                            $("#media-player").css("border", "1px solid #968c6d");
                                            //START flashembed generic player
                                            flashembed("media-player", {
                                                //params
                                                src: mediaSrc + mediaFlashvars,
                                                version: [10, 60], //requires version 10.1
                                                wmode: 'transparent',
                                                allowscriptaccess: 'always',
                                                allowfullscreen: 'true',
                                                bgcolor: '#FFFFFF',
                                                expressInstall: mediaSwfPath + 'expressinstall.swf',
                                                width: mediaWidth,
                                                height: mediaHeight,
                                                id: mediaFlashObjectId
                                            }); //END flashembed generic player

                                        } else {
                                            $("#media-player").css("border", "1px solid #968c6d");
                                            $("#media-player").css("border-bottom", "none");

                                            //START flashembed media player
                                            flashembed("media-player", {
                                                //params
                                                src: mediaSwfPath + 'pwcMedia.swf',
                                                expressInstall: mediaSwfPath + 'expressinstall.swf',
                                                version: [10, 60], //requires version 10.1
                                                wmode: 'transparent',
                                                allowscriptaccess: 'always',
                                                allowfullscreen: 'true',
                                                width: mediaWidth,
                                                height: mediaHeight,
                                                id: mediaFlashObjectId
                                            }, {
                                                media: mediaSrc,
                                                color: mediaColor,
                                                player: mediaSwfPath + 'pwcMediaPlayer.swf',
                                                instantplay: 'true',
                                                hd: mediaHd,
                                                videowidth: mediaWidth,
                                                videoheight: mediaHeight,
                                                webtrends: mediaTrack,
                                                title: reformattedMediaTitle,
                                                poster: mediaPoster,
                                                stream: mediaStreaming,
                                                cuepoints: mediaCuepoints,
                                                mediadomain: _mediaURLPrefix
                                            }); //END flashembed media player
                                        } //END flashembed generic flash


                                    } else {

                                        //show mobile content if activated, and if it's a video
                                        if ((showmobileVersion) && (mediaType == "video")) {
                                            //HTML5

                                            var newHtml = "<video poster='" + mediaPoster + "' autoplay src='http://" + _mediaURLPrefix + mediaSrc + ".mp4' controls height='" + mediaHeight + "' width='" + mediaWidth + "' onerror='ShowThumb($(this),true);'>You need Adobe Flash or HTML5 to view this content</video>"
                                            $("#media-player").html(newHtml);

                                        } else {

                                            if (mediaAltFlashID) {
                                                $("#media-player").html("<div align='center' style='padding:10px;background-color:#ffffff' >" + $("#" + mediaAltFlashID).html() + "</div>");
                                            } else {
                                                var altmediacontent = "<div align='center' style='padding:10px;background-color:#ffffff' ><p>You need Adobe Flash to view this.</p><a href='http://get.adobe.com/flashplayer/' target='_blank' ><img src='" + imagePath + "media-get-flash.jpg' /></a></div>";
                                                $("#media-player").html(altmediacontent);
                                            }
                                        }
                                    } //END Can show flash

                            }




                        } //END onBeforeLoad of overlay


                }) //END overlay

        } //END mobile redirect OR overlay 




    }
})(jQuery);



// yt multiplayer
(function($) {
    $.fn.ytmulti = function(options) {

        //SET DEFAULT VALUES
        var settings = $.extend({
            showheader: true,
            openplaylist: false,
            shownextup: true,
            showtotal: true,
            showlearnmore: true,
            inmodal: false,
            learnmoretext: 'Learn more',
            learnmorelink: '',
            headertext: 'Related videos',
            nextuptext: 'Next up - ',
            nowplayingtext: 'Now playing',
            viewdesctext: 'Read more',
            hidedesctext: 'Hide',
            playvideotext: 'Play video',
            totaloftext: 'of',
            totalvideostext: 'videos',
            playiconpath: 'http://www.pwc.com/en_GX/webadmin/assets/image/vid-icon-2.png',
            playiconmobilepath: 'http://www.pwc.com/en_GX/webadmin/assets/image/media-play-button.gif',
            videolist: [],
            customlist: [],
            autoplay: true,
            initialindex: null

        }, options);

        //mobile or not
        var _mob = false;
        (jsdevice == 'mobile') ? _mob = true: _mob = false;

        //counter for info loading
        var _counter = 0;

        //videoinfo array
        var videoinfo = [];

        //make unique
        var _d = new Date();
        var _n = _d.getTime();
        var $this = $(this);

        //player ready
        var _ready = false;

        if (settings.inmodal) {
            settings.showheader = false; //disable collapsible header in modal
        }

        //create multiplayer holder div
        var holderHtml = "";
        if (_mob) {
            //mobile html
            holderHtml = '<div class="multi-wrapper">\n';
            holderHtml += '	<div class="multi-loading"></div>\n';
            holderHtml += '<div class="multi-head" style="display:none;"><div class="multi-embed"></div><div class="clearer"></div></div><div class="multi-right-m multi-head-right-m"></div><div class="clearer"></div><divclass="multi-playlist-header multi-open" style="display:none;"><h3 class="multi-header-section-h3 multi-header-open">' + settings.headertext + '</h3></div><div class="multi-playlist-wrapper" style="display:none;"></div><div class="multi-player-bottom-border">.</div></div>';
        } else {
            holderHtml = '\n<div class="multi-wrapper">\n';
            holderHtml += '	<div class="multi-loading"></div>\n';
            holderHtml += '	<div class="multi-head" style="display:none;">\n';
            holderHtml += '		<div class="multi-embed"></div>\n';
            holderHtml += '		<div class="multi-right multi-head-right"></div>\n';
            holderHtml += '	</div>\n';
            holderHtml += '	<div class="clearer"></div>\n';
            holderHtml += '	<div class="multi-head-custom"></div>\n';
            holderHtml += '	<div class="multi-head-nextup"></div>\n';
            holderHtml += '	<div class="multi-playlist-header multi-open" style="display:none;"><h3 class="multi-header-section-h3 multi-header-open">' + settings.headertext + '</h3></div>\n';
            holderHtml += '	<div class="multi-playlist-wrapper" style="display:none;"></div>\n';
            //holderHtml +='	<div class="multi-player-bottom-border">.</div>\n';
            holderHtml += '</div>\n';
        }
        $this.html(holderHtml);

        return this.each(function() {

            //define jquery div vars
            var $multiwrapper = $this.find('.multi-wrapper');
            var $multiloading = $this.find('.multi-loading');
            var $multihead = $this.find('.multi-head');
            var $multiembed = $this.find('.multi-embed');
            var $multiright = $this.find('.multi-right');
            var $multiheadright = $this.find('.multi-head-right');
            var $multiheadcustom = $this.find('.multi-head-custom');
            var $multiheadnextup = $this.find('.multi-head-nextup');
            var $multiplaylistheader = $this.find('.multi-playlist-header');
            var $multiheadersectionh3 = $this.find('.multi-header-section-h3');
            var $multiplaylistwrapper = $this.find('.multi-playlist-wrapper');
            //var $multiplayerbottomborder	= $this.find('.multi-player-bottom-border');


            function callJavascript(query, callback) {

                var closedData;
                $.getJSON(url, function(response) {
                    closedData = response.data;
                }).done(function(parsedResponse, statusText, jqXhr) {

                    callback(closedData);

                });



            }


            function constructPlayer() {


                //DETERMINE starting index			
                //look for a different index than 0 via initialindex and url query
                var _startIndex = 0;
                var _initialindex = settings.initialindex;
                if (_initialindex != null) {
                    _startIndex = _initialindex;
                    --_startIndex;

                }

                var indexurlvar = jQuery.getUrlVar('vi');
                if (typeof indexurlvar != 'undefined') {
                    _startIndex = indexurlvar;
                    //check that it's not 0 to start with, and converts friendly 1,2,3, to 0,1,2 for array access
                    (_startIndex > 0) ? (--_startIndex) : undefined;

                } else {
                    //if in modal, look for trigger element index (like on homepage mediabox
                    if (settings.inmodal) {
                        //$mediaTrigger is defined above the overlay plugin
                        _startIndex = $mediaTrigger.attr('rel');

                    }

                }
                //can't be more than list of vids
                (_startIndex >= settings.videolist.length) ? (_startIndex = 0) : undefined;


                //loop through items to construct playlist HTML
                var itemHtml = "";

                if (_mob) {
                    //do mobile HTML
                    for (t = 0; t < settings.videolist.length; t++) {

                        //display the playlist section
                        itemHtml += '<div class="multi-item-' + t + ' multi-playlist-item-m" rel="' + t + '">';
                        itemHtml += '<div>';

                        itemHtml += '<div class="multi-item-thumb-' + t + ' multi-item-thumb-container-m" rel="' + t + '"><img class="multi-item-thumb-m" src="' + videoinfo[t].thumb + '" /><img class="multi-thumb-playButton-' + t + ' multi-item-thumb-playButton-m" src="' + settings.playiconmobilepath + '"></img></div>';
                        itemHtml += '<div class="multi-item-np-' + t + ' multi-item-np multi-item-np-m">' + settings.nowplayingtext + '</div>';
                        itemHtml += '<div class="multi-item-title-' + t + ' multi-item-title-m" rel="' + t + '">' + videoinfo[t].title + '</div>';
                        //itemHtml +=			'<div class="longdesc-text">' + videoinfo[t].desc + '</div>';
                        itemHtml += '</div>';
                        itemHtml += '</div>'
                        itemHtml += '<div class="clearer"></div>';
                    }




                } else {

                    var clearit = 0;

                    for (t = 0; t < settings.videolist.length; t++) {


                        //display the playlist section
                        itemHtml += '\n<div class="multi-item-' + t + ' multi-playlist-item">\n';
                        itemHtml += '	<div>' + '\n';

                        itemHtml += '		<div class="multi-expanding-section">\n';
                        itemHtml += '			<div class="shortdesc shortdesc-' + t + '">\n';
                        itemHtml += '				<div  class="multi-item-thumb-' + t + ' multi-item-thumb-container" rel="' + t + '"><img alt="' + settings.playvideotext + '" title="' + settings.playvideotext + '" class="multi-item-thumb" src="' + videoinfo[t].thumb + '" /><img class="multi-thumb-playButton-' + t + ' multi-item-thumb-playButton" src="' + settings.playiconpath + '" alt="' + settings.playvideotext + '" title="' + settings.playvideotext + '"></img></div>\n';
                        itemHtml += '				<div class="multi-item-np-' + t + ' multi-item-np">' + settings.nowplayingtext + '</div>\n';
                        itemHtml += '				<div class="multi-item-title-' + t + ' multi-item-title" rel="' + t + '">' + videoinfo[t].title + '</div>\n';
                        itemHtml += '				<div class="shortdesc-text">' + videoinfo[t].desc + '</div>\n';
                        itemHtml += '				<h3 class="multi-short-h3-' + t + ' " rel="' + t + '">' + settings.viewdesctext + '</h3>\n';
                        itemHtml += '			</div>';

                        itemHtml += '			<div class="longdesc longdesc-' + t + ' longdesc-closed"><h3 class="multi-long-h3-' + t + ' " rel="' + t + '">' + settings.hidedesctext + '</h3>\n';
                        itemHtml += '				<div class="longdesc-text-' + t + ' longdesc-text" style="overflow:hidden">' + videoinfo[t].desc + '</div>\n';
                        itemHtml += '				<div rel="' + t + '" class="multi-desc-play-' + t + ' multi-desc-play"><span class="multi-desc-dotdotdot-' + t + '" style="display:none;">... </span>' + settings.playvideotext + '</div>\n';
                        itemHtml += '			</div>\n';
                        itemHtml += '		</div>\n';
                        itemHtml += '	</div>\n';
                        itemHtml += '</div>\n';
                        clearit++;

                        //every third item we want to add a clearer
                        if (clearit == 3) {
                            itemHtml += '<div class="clearer"></div>\n';
                            clearit = 0

                        }

                    }
                }


                itemHtml += '<div class="clearer"></div>';

                //add playlist item to playlist wrapper
                $multiplaylistwrapper.html(itemHtml);


                //END playlist HTML				

                //START  SHOW/HIDE content
                //show the playlist header or not
                if (settings.showheader) {
                    //add total video count
                    $multiplaylistheader.fadeIn();

                } else {
                    //if we hide the header we show the playlist by default
                    settings.openplaylist = true;
                }
                if (!settings.shownextup) {
                    $multiheadnextup.hide();
                }


                $multiloading.hide();
                $multihead.fadeIn();

                //Set some initial conditions if the playlist should be hidden on load
                if (!settings.openplaylist) {
                    $multiplaylistheader.removeClass('multi-open');
                    $multiheadersectionh3.removeClass('multi-header-open');
                    $multiheadersectionh3.addClass('multi-header-closed');
                }
                //the main playlist has to be visible on DOM for a split second to calculate heights
                var titleHeight = 0;
                var totalHeight = 0;

                $multiplaylistwrapper.show(function() {
                    //when complete...
                    //adjust heights of titles to make the 'show description's all line up...largest wins
                    //Determine tallest title and tallest playlist item...

                    for (i = 0; i < settings.videolist.length; i++) {
                        var tempHeight = $this.find('.multi-item-title-' + i).height();
                        if (tempHeight > titleHeight) {
                            titleHeight = tempHeight;
                            totalHeight = $this.find('.multi-item-' + i).height();
                        }
                    }

                    //...now assign biggest height to ALL titles and items
                    for (h = 0; h < settings.videolist.length; h++) {
                        $this.find('.multi-item-title-' + h).css('height', titleHeight);
                        $this.find('.multi-item-' + h).css('height', totalHeight);

                    }

                    //actually hide playlist if needed
                    if (!settings.openplaylist) {
                        //but not on mobile
                        if (!_mob) {
                            $(this).hide();
                        }
                    }


                });




                // END SHOW/HIDE content

                //START events/actions
                //Add the expanding description activations

                $this.find('.multi-expanding-section h3').click(function() {

                    var h = $(this).attr('rel');
                    $this.find('.longdesc-' + h).slideToggle('fast', function() {});
                    $this.find('.shortdesc-' + h).slideToggle('fast', function() {

                        if ($this.find('.longdesc-text-' + h).height() > (totalHeight - 45)) {
                            //console.log($this.find('.longdesc-text-' + h).css('height'));
                            $this.find('.longdesc-text-' + h).css({
                                'height': totalHeight - 47
                            });
                            $this.find('.multi-desc-dotdotdot-' + h).show();
                        }
                    });

                });

                //Add the thumbnail click events
                for (c = 0; c < settings.videolist.length; c++) {
                    if (_mob) {
                        $this.find('.multi-item-' + c).click(function() {
                            (settings.autoplay) ? (ChangeVideo($(this).attr('rel'), 1)) : (ChangeVideo($(this).attr('rel'), 0));
                        });
                    } else {

                        $this.find('.multi-item-thumb-' + c).click(function() {
                            (settings.autoplay) ? (ChangeVideo($(this).attr('rel'), 1)) : (ChangeVideo($(this).attr('rel'), 0));
                        });
                        $this.find('.multi-item-title-' + c).click(function() {
                            (settings.autoplay) ? (ChangeVideo($(this).attr('rel'), 1)) : (ChangeVideo($(this).attr('rel'), 0));
                        });
                        $this.find('.multi-desc-play-' + c).click(function() {
                            (settings.autoplay) ? (ChangeVideo($(this).attr('rel'), 1)) : (ChangeVideo($(this).attr('rel'), 0));
                        });


                    }

                }
                $multiheadnextup.click(function() {
                    (settings.autoplay) ? (ChangeVideo($multiheadnextup.attr('rel'), 1)) : (ChangeVideo($multiheadnextup.attr('rel'), 0));
                });

                //main playlist open/close - only create this if showheader = true
                if (settings.showheader) {
                    $multiplaylistheader.click(function() {

                        if ($(this).hasClass('multi-open')) {

                            $(this).removeClass('multi-open');
                            $multiplaylistwrapper.slideToggle(400);
                            $multiheadersectionh3.removeClass('multi-header-open');
                            $multiheadersectionh3.addClass('multi-header-closed');
                            $multiheadersectionh3.animate({
                                'padding': '5px 30px 5px 10px'
                            });

                        } else {

                            $multiplaylistwrapper.slideToggle(400);
                            $(this).toggleClass('multi-open');
                            $multiheadersectionh3.removeClass('multi-header-closed');
                            $multiheadersectionh3.addClass('multi-header-open');
                            $multiheadersectionh3.animate({
                                'padding': '5px 30px 5px 0px'
                            });
                        }
                    });
                }
                $multiplaylistwrapper.css('margin-top', '4px'); //add a little white space above playlist

                //END events/actions

                ChangeVideo(_startIndex, 0);

            }
            ///////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////
            function ChangeVideo(index, autoplay) {

                //turn off autoplay for modal play because some browsers will start video after modal is closed
                (settings.inmodal) ? autoplay = 0: undefined;

                var playerHeight = 205;
                var playerWidth = 364;

                if (_mob) {
                    playerHeight = 174;
                    playerWidth = 310
                }


                $multiembed.empty().html('<iframe id="yt-' + videoinfo[index].id + '" frameborder="0" height="' + playerHeight + '" src="http://www.youtube.com/embed/' + videoinfo[index].id + '?enablejsapi=1&amp;rel=0&amp;version=3&amp;wmode=opaque&amp;vq=480&amp;autoplay=' + autoplay + '" width="' + playerWidth + '">&#160;</iframe>');

                //check if the standard youtube tracking is already in place and if so, add this video to the arrays
                if (typeof _ytIDs != 'undefined') {
                    //add to tracking array
                    var arrayIndex = _ytPlayerArray.length;
                    //add to ID array for tracking
                    _ytIDs[arrayIndex] = videoinfo[index].id;
                    //add to player array for tracking
                    _ytPlayerArray[arrayIndex] = new YT.Player(('yt-' + videoinfo[index].id), {
                        events: {
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }

                ChangeInfo(index);

            }

            function ChangeInfo(index) {
                var topRightHtml = '<h3 class="multi-head-right-title">' + videoinfo[index].title + '</h3>';
                topRightHtml += '<div class="multi-head-right-desc" style="overflow:hidden;">' + videoinfo[index].desc + '</div>';
                topRightHtml += '<span class="multi-head-right-dotdotdot" style="display:none;">...</span>';

                //show the learn more top right if desired
                if ((settings.showlearnmore) && (videoinfo[index].relatedUrl != null)) {
                    topRightHtml += '<a class="fg100 multi-head-right-learnmore" href="' + videoinfo[index].relatedUrl + '" target="_new" style="font-size:.9em">' + settings.learnmoretext + '</a>';
                }

                if (_mob) {

                    $this.find('.multi-right-m').empty().html(topRightHtml);
                } else {
                    $multiright.empty().html(topRightHtml);
                    var descHeight = 180 - $this.find('.multi-head-right-title').height(); //205 - 25 ( for the 'learn more' link if present ) = 180

                    var $multiheadrightdesc = $this.find('.multi-head-right-desc');
                    if ($multiheadrightdesc.height() > descHeight) {
                        $multiheadrightdesc.height(descHeight);
                        $this.find('.multi-head-right-dotdotdot').show();
                    }
                }



                //Change the Now playing indicator				
                for (c = 0; c < settings.videolist.length; c++) {
                    if (c != index) {
                        $this.find('.multi-item-np-' + c).hide();
                        $this.find('.multi-item-' + c).removeClass('multi-background-color-25');
                        $this.find('.multi-thumb-playButton-' + c).show();

                    }
                }

                //show the Now playing, change bg item color, and hide playbutton for the new video
                $this.find('.multi-item-np-' + index).show();
                $this.find('.multi-item-' + index).addClass('multi-background-color-25');
                $this.find('.multi-thumb-playButton-' + index).hide();

                //scroll to top of screen
                var targetScrollHeight = $multiwrapper.offset().top;
                if ($(window).scrollTop() >= targetScrollHeight) {

                    ($('html, body').animate({
                        scrollTop: (targetScrollHeight - 10)
                    }, 800))
                }

                //change the Next up area
                if (settings.shownextup) {


                    var nextIndex = index;
                    ++nextIndex;
                    if ((nextIndex) == videoinfo.length) {
                        nextIndex = 0;
                    }



                    $multiheadnextup.empty().html('<span class="multi-nextup-prefix">' + settings.nextuptext + '</span><span class="multi-nextup-text">' + videoinfo[nextIndex].title + '</span>');
                    if (settings.showtotal) {
                        $multiheadnextup.append('  <span class="multi-next-total">' + (nextIndex + 1) + ' ' + settings.totaloftext + ' ' + videoinfo.length + ' ' + settings.totalvideostext + '</span>');
                    }
                    $multiheadnextup.attr('rel', nextIndex);


                } else {

                }

                //change the custom HTML area
                if (settings.customlist.length == settings.videolist.length) {
                    //var $customhtml = ;

                    $multiheadcustom.empty();
                    (settings.customlist[index] != '') ? $(settings.customlist[index] + ' div').clone(true).appendTo($multiheadcustom): undefined;
                    //console.log($(settings.customlist[index]+' div').first().html());
                }


            }

            //do after successful response from yt
            var callback = function(data) {
                    //console.log(data);

                    if (typeof data != 'undefined') { //Added this in case someone tries to include a video that was deleted on YouTube
                        //determine where to insert the info into the videoinfo array so we don't lose the order
                        var index;
                        for (y = 0; y < settings.videolist.length; y++) {
                            if (data.id == settings.videolist[y]) {
                                index = y;
                                break;
                            }

                        }

                        videoinfo[index].id = data.id;
                        videoinfo[index].title = data.title;
                        videoinfo[index].thumb = 'http://img.youtube.com/vi/' + data.id + '/mqdefault.jpg';


                        //URL match regexs
                        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
                        var exp2 = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
                        var itemRelatedURL = "";
                        var itemSummary = "";

                        if (data.description != null) {
                            videoinfo[index].relatedUrl = data.description.match(exp2);
                            videoinfo[index].desc = data.description.replace(exp, "");
                            videoinfo[index].desc = videoinfo[index].desc.replace("Learn more at PwC.com - ", "");

                            if (videoinfo[index].desc.length > 25) {
                                videoinfo[index].shortdesc = videoinfo[index].desc.slice(0, 25);
                            } else videoinfo[index].shortdesc = videoinfo[index].desc + '<br/><br/>';



                        }

                        //override each video's learnmorelink if necessary
                        if (settings.learnmorelink != '') {
                            videoinfo[index].relatedUrl = settings.learnmorelink;
                        }


                    } else {
                        //console.log('this one is undefined')  
                    } //END typeof undefined

                    _counter++;

                    if (!settings.inmodal) {
                        //not in modal
                        if (_counter == settings.videolist.length) {
                            constructPlayer();
                        }
                    }



                } //END callback

            function CheckReady(index) { //polled every .5 sec for counter and if modal is ready
                if ((_counter == settings.videolist.length) && (modalready)) {
                    clearInterval(keepchecking);
                    constructPlayer();
                }
            }

            if (settings.inmodal) {

                var modalready = false;

                $('#pwc-media-overlay').on('modalready', function() {

                    modalready = true;
                    $this.css('font-size', '.75em');
                    $this.css('line-height', '140%');
                    //$('#media-inline-html-div').css('padding','15px 5px 0 15px');
                    //$('#media-inline-html-div').css('padding','0px 5px 0 15px');
                    (_mob) ? $('#media-inline-html-div').css('overflow-y', 'auto'): $('#media-inline-html-div').css('overflow-y', 'hidden');
                    //$('#media-player').css('paddiing','0 0 0 0');
                });

                $this.bind('changevideo', function(event, index) {

                    ChangeVideo(parseInt(index), false);

                });




                var keepchecking = setInterval(CheckReady, 500);

            }
            //Start multiplayer
            for (q = 0; q < settings.videolist.length; q++) {

                //populate videoinfo with blank info and request json info
                videoinfo.push({
                    id: "",
                    title: "",
                    relatedUrl: "",
                    desc: "",
                    thumb: ""
                });
                var url = "https://gdata.youtube.com/feeds/api/videos/" + settings.videolist[q] + "?alt=jsonc&v=2&callback=?";
                $multiloading.html('Loading...<img src="http://www.pwc.com/en_GX/webadmin/assets/image/loading.gif" />');
                callJavascript(url, callback);
            }

        });


    };


})(jQuery);


// yt multiplayer
(function($) {
    $.fn.ytplaylist = function(options) {

        //SET DEFAULT VALUES
        var settings = $.extend({
            autoload: false,
            maxresults: 9, //if autoloading, how many to show at once
            showexpander: false, //show the expanding description or not
            showdate: true, //show the publish date or not
            playlistid: '',
            loadmoretext: 'Load more videos',
            viewdesctext: 'Read more',
            showremaining: true,
            showloadmore: true, //shows/hides the whole load more box
            showmaxresults: 9,
            remainingtext: 'more videos',
            hidedesctext: 'Hide',
            learnmoretext: 'Learn more',
            playvideotext: 'Play video',
            playiconpath: 'http://www.pwc.com/en_GX/webadmin/assets/image/vid-icon-2.png',
            playiconmobilepath: 'http://www.pwc.com/en_GX/webadmin/assets/image/media-play-button.gif'

        }, options);

        return this.each(function() {
            //mobile or not
            var _mob = false;
            (jsdevice == 'mobile') ? _mob = true: _mob = false;
            //testing:
            //_mob = true;


            //flag for info loading
            var _dataloaded = false;


            //make unique
            var _n = "unique-" + Math.floor((Math.random() * 1000000) + 1);
            var $this = $(this);

            //player ready
            var _ready = false;



            //create multiplayer holder div
            var holderHtml = "";
            if (_mob) {
                //mobile html
                holderHtml = '<div class="multi-wrapper" >\n';
                holderHtml += '	<div class="multi-loading"></div>\n';
                holderHtml += '<div class="multi-playlist-wrapper" ></div>\n';
                holderHtml += '<div class="multi-player-loadmore"></div>\n';
                holderHtml += '<div class="multi-player-bottom-border">.</div></div>';
            } else {
                holderHtml = '\n<div class="multi-wrapper" >\n';
                holderHtml += '	<div class="multi-loading"></div>\n';
                holderHtml += '	<div class="multi-playlist-wrapper"></div>\n';
                holderHtml += ' </div><div class="multi-player-loadmore"></div>';
                holderHtml += '</div>\n';
            }
            $this.html(holderHtml);

            //define jquery div vars
            var $multiwrapper = $this.find('.multi-wrapper');
            var $multiloading = $this.find('.multi-loading');
            var $multiplaylistwrapper = $this.find('.multi-playlist-wrapper');
            var $multiplaylistloadmore = $this.find('.multi-player-loadmore');



            var start_index = 1;
            var load_more = false;
            var last_index = 0;
            var timing = "good";


            if (!settings.autoload) {
                $multiplaylistloadmore.click(function() {
                    if (load_more == true) {
                        settings.maxresults = settings.showmaxresults; //Put this in so you show more than the initial results number
                        var _playListURL = "https://gdata.youtube.com/feeds/api/playlists/" + settings.playlistid + "?v=2&alt=jsonc&start-index=" + start_index + "&max-results=" + settings.maxresults + "&callback=?";
                        //console.log(_playListURL);
                        getYouTubePlaylist(_playListURL);
                    };

                });
            }




            function callJavascript(query, callback) {

                var closedData;
                $.getJSON(query, function(response) {
                    //console.log(response);
                    closedData = response.data;
                }).done(function(parsedResponse, statusText, jqXhr) {
                    callback(closedData);
                    timing = "good";
                });



            }


            ///////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////
            function getYouTubePlaylist(playlistURL) {




                //do after successful response from yt
                var callback = function(data) {

                    $multiplaylistloadmore.hide();

                    //console.log(data);
                    //console.log("wrapper is " + $("#wrapper").height());


                    var numberofvideos = 0;
                    var clearit = 0;

                    var itemHtml = '';
                    //loop through all the data
                    $.each(data.items, function(i, item) {


                        var itemid = item.video.id;
                        var itemtitle = item.video.title;
                        var itemthumb = 'http://img.youtube.com/vi/' + item.video.id + '/mqdefault.jpg';
                        var uniqueid = _n + start_index + '-' + i;

                        var itemdate = new Date(item.video.uploaded);
                        //format date
                        var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
                        var upload_day = itemdate.getDate();
                        var upload_month = itemdate.getMonth();
                        var upload_year = itemdate.getFullYear();
                        var itemdateformatted = m_names[upload_month] + " " + upload_day + ", " + upload_year;
                        //console.log(itemdate);

                        //URL match regexs
                        var exp1 = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
                        var exp2 = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
                        var itemRelatedURL = "";
                        var itemlongdesc = "";
                        var itemshortdesc = "";

                        if (item.video.description != null) {
                            itemRelatedURL = item.video.description.match(exp2);
                            itemlongdesc = item.video.description.replace(exp1, "");
                            itemlongdesc = itemlongdesc.replace("Learn more at PwC.com - ", "");

                            if (itemlongdesc.length > 25) {
                                itemshortdesc = itemlongdesc.slice(0, 25);
                            } else itemshortdesc = itemlongdesc + '<br/><br/>';
                        }

                        //create the media-details div

                        itemHtml += '<div style="display:none;" id="media-details-' + uniqueid + '" ><div style="background:#ffffff;padding:5px 5px 5px 5px;"><h3>' + itemtitle + '</h3><p>' + itemlongdesc + '</p>\n';
                        if (itemRelatedURL != "") {
                            itemHtml += '<p><a href="' + itemRelatedURL + '" style="text-decoration:underline;" >' + settings.learnmoretext + '</a></p>\n';
                        }
                        itemHtml += '</div></div>\n';
                        numberofvideos++;
                        if (_mob) {
                            //do mobile HTML


                            //display the playlist section
                            itemHtml += '<div class="multi-item-' + uniqueid + ' multi-playlist-item-m multi-playlist-item-item media-overlayX ' + _n + '" media-details-id="media-details-' + uniqueid + '" media-src="#youtubevideo' + uniqueid + '" media-title="' + itemtitle + '" media-height="174" media-width="310" rel="' + uniqueid + '">';
                            itemHtml += '<div>';
                            itemHtml += '<iframe frameborder="0" height="174" id="youtubevideo' + uniqueid + '" src="http://www.youtube.com/embed/' + itemid + '?rel=0&amp;wmode=opaque" style="display:none;" width="310">&#160;</iframe>';

                            itemHtml += '<div class="multi-item-thumb-' + uniqueid + ' multi-item-thumb-container-m" media-src="#youtubevideo' + uniqueid + '" media-title="' + itemtitle + '" media-height="394" media-width="700"  rel="' + uniqueid + '"><img class="multi-item-thumb-m" src="' + itemthumb + '" /><img class="multi-thumb-playButton-' + uniqueid + ' multi-item-thumb-playButton-m" src="' + settings.playiconmobilepath + '"></img></div>';
                            itemHtml += '<div class="multi-item-np-' + uniqueid + ' multi-item-np multi-item-np-m"></div>';
                            itemHtml += '<div class="multi-item-title-' + uniqueid + ' multi-item-title-m" rel="' + uniqueid + '">' + itemtitle + '</div>';
                            itemHtml += '</div>';
                            itemHtml += '</div>'
                            itemHtml += '<div class="clearer"></div>';
                        } else {


                            //display the playlist section
                            itemHtml += '\n<div  class="multi-item-' + uniqueid + ' multi-playlist-item multi-playlist-item-item">\n';
                            itemHtml += '	<div>' + '\n';
                            itemHtml += '<iframe frameborder="0" height="394" id="youtubevideo' + uniqueid + '" src="http://www.youtube.com/embed/' + itemid + '?rel=0&amp;wmode=opaque&amp;vq=hd720" style="display:none;" width="700">&#160;</iframe>';
                            if (settings.showexpander) {
                                itemHtml += '		<div class="multi-expanding-section">\n';
                                itemHtml += '			<div class="shortdesc shortdesc-' + uniqueid + '">\n';
                            }
                            itemHtml += '				<div  class="media-overlayX ' + _n + '" media-src="#youtubevideo' + uniqueid + '" media-title="' + itemtitle + '" media-height="394" media-width="700" rel="' + uniqueid + '" media-details-id="media-details-' + uniqueid + '" >\n';
                            itemHtml += '				<div  class="multi-item-thumb-' + uniqueid + ' multi-item-thumb-container" ><img alt="' + settings.playvideotext + '" title="' + settings.playvideotext + '" class="multi-item-thumb" src="' + itemthumb + '" /><img class="multi-thumb-playButton-' + uniqueid + ' multi-item-thumb-playButton" src="' + settings.playiconpath + '" alt="' + settings.playvideotext + '" title="' + settings.playvideotext + '"></img></div>\n';
                            itemHtml += '				<div class="multi-item-np-' + uniqueid + ' multi-item-np"></div>\n';
                            itemHtml += '				<div class="multi-item-title-' + uniqueid + ' multi-item-title" rel="' + uniqueid + '">' + itemtitle + '</div>\n';
                            if (settings.showdate) {
                                itemHtml += '				<div class="multi-item-title" style="font-weight:normal" >' + itemdateformatted + '</div>\n';
                            }
                            itemHtml += '				</div>\n';
                            if (settings.showexpander) {
                                itemHtml += '				<div class="shortdesc-text">' + itemlongdesc + '</div>\n';
                                itemHtml += '				<h3 class="multi-short-h3-' + uniqueid + ' " rel="' + uniqueid + '">' + settings.viewdesctext + '</h3>\n';
                                itemHtml += '			</div>';

                                itemHtml += '			<div class="longdesc longdesc-' + uniqueid + ' longdesc-closed"><h3 class="multi-long-h3-' + uniqueid + ' " rel="' + uniqueid + '">' + settings.hidedesctext + '</h3>\n';
                                itemHtml += '				<div class="longdesc-text-' + uniqueid + ' longdesc-text" style="overflow:hidden">' + itemlongdesc + '</div>\n';
                                itemHtml += '				<div rel="' + uniqueid + '" class="multi-desc-play-' + uniqueid + ' multi-desc-play media-overlayX" media-src="#youtubevideo' + uniqueid + '" media-title="' + itemtitle + '" media-height="394" media-width="700" media-details-id="media-details-' + uniqueid + '" ><span class="multi-desc-dotdotdot-' + uniqueid + '" style="display:none;">... </span>' + settings.playvideotext + '</div>\n';
                            }
                            itemHtml += '			</div>\n';
                            itemHtml += '		</div>\n';
                            itemHtml += '	</div>\n';
                            itemHtml += '</div>\n';
                            clearit++;

                            //every third item we want to add a clearer
                            if (clearit == 3) {
                                itemHtml += '<div class="clearer"></div>\n';
                                clearit = 0;

                            } else if ((clearit < 3) && numberofvideos == data.items.length) {
                                itemHtml += '<div class="clearer"></div>\n';


                            }



                        }




                    });

                    //add playlist item to playlist wrapper
                    $multiplaylistwrapper.append(itemHtml);




                    var titleHeight = 0;
                    var totalHeight = 0;




                    if (settings.showexpander) {
                        //Add the expanding description activations

                        $this.find('.multi-expanding-section h3:not(.multibound)').addClass('multibound').click(function() {

                            var h = $(this).attr('rel');
                            $this.find('.longdesc-' + h).slideToggle('fast', function() {});
                            $this.find('.shortdesc-' + h).slideToggle('fast', function() {

                                if ($this.find('.longdesc-text-' + h).height() > (totalHeight - 45)) {
                                    //console.log($this.find('.longdesc-text-' + h).css('height'));
                                    $this.find('.longdesc-text-' + h).css({
                                        'height': totalHeight - 47
                                    });
                                    $this.find('.multi-desc-dotdotdot-' + h).show();
                                }
                            });

                        });
                    }

                    //when complete...
                    //adjust heights of titles to make the 'show description's all line up...largest wins
                    //Determine tallest title and tallest playlist item...

                    for (d = 0; d < numberofvideos; d++) {
                        var tempHeight = $this.find('.multi-item-title-' + _n + start_index + '-' + d).height();
                        if (tempHeight > titleHeight) {
                            titleHeight = tempHeight;
                            totalHeight = $this.find('.multi-item-' + _n + start_index + '-' + d).height();
                        }
                    }
                    //console.log("totalHeight=" + totalHeight);
                    //...now assign biggest height to ALL titles and items
                    for (h = 0; h < numberofvideos; h++) {
                        $this.find('.multi-item-title-' + _n + start_index + '-' + h).css('height', titleHeight);
                        $this.find('.multi-item-' + _n + start_index + '-' + h).css('height', totalHeight);

                    }

                    //END Typeof

                    //determine if more will be loaded
                    if (data.items && data.items.length && data != null) {

                        if (data.items.length == settings.maxresults) {
                            load_more = true;
                            var intStartIndex = parseInt(start_index, 10);
                            last_index = intStartIndex;
                            var intMaxResults = parseInt(settings.maxresults, 10);
                            var newStartIndex = intStartIndex + intMaxResults;
                            start_index = newStartIndex;
                        } else {
                            load_more = false;
                            //$multiplaylistloadmore.hide();
                        }
                    } else {
                        load_more = false;
                        //$multiplaylistloadmore.hide();
                    }

                    $('.' + _n).each(function(b) {
                        $(this).overlayMedia(b);
                    }); // JavaScript Document 

                    //console.log("multiplaylistwrapper height: " +$multiplaylistwrapper.height());
                    //console.log("window.height is " + $(window).height());
                    //console.log(load_more);
                    if (settings.autoload) {
                        //if window.height is bigger than the multiplaylistwrapper, can't scroll to load more. check and load more automatically if so
                        if ((load_more == true) && ($(window).height() > $multiplaylistwrapper.height())) {
                            var _playListURL = "https://gdata.youtube.com/feeds/api/playlists/" + settings.playlistid + "?v=2&alt=jsonc&start-index=" + start_index + "&max-results=" + settings.maxresults + "&callback=?";
                            //console.log(_playListURL);
                            getYouTubePlaylist(_playListURL);
                        }

                    } else if (load_more == true) { //show the "Load more videos" button


                        var loadmorehtml = "";
                        var videosremaining = data.totalItems - $multiplaylistwrapper.children(".multi-playlist-item-item").length;
                        if (settings.showremaining) {

                            loadmorehtml = '<div><h3>' + settings.loadmoretext + '</h3><span class="multi-load-more-remaining">' + videosremaining + ' ' + settings.remainingtext + '</span></div>';
                        } else loadmorehtml = '<div><h3>' + settings.loadmoretext + '</h3></div>';

                        $multiplaylistloadmore.html(loadmorehtml);
                        if ((settings.showloadmore) && (videosremaining > 0)) { //show the load more button unless user specified otherwise
                            $multiplaylistloadmore.show();
                        }


                    }

                }; //END Callback

                callJavascript(playlistURL, callback);
            };

            if (settings.autoload) {
                $(window).scroll(function() {
                    if (timing == "good") {
                        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 50) {
                            timing = "bad";
                            if (load_more == true) {

                                if (last_index != start_index) {
                                    if ((last_index + settings.maxresults) == start_index) {
                                        var _playListURL = "https://gdata.youtube.com/feeds/api/playlists/" + settings.playlistid + "?v=2&alt=jsonc&start-index=" + start_index + "&max-results=" + settings.maxresults + "&callback=?";
                                        //console.log(_playListURL);

                                        getYouTubePlaylist(_playListURL);

                                    }
                                }
                            }

                        }
                    }
                });
            }

            //   START PLAYLIST ACTION


            var url = "https://gdata.youtube.com/feeds/api/playlists/" + settings.playlistid + "?v=2&alt=jsonc&start-index=1&max-results=" + settings.maxresults + "&callback=?";
            //var url = "https://gdata.youtube.com/feeds/api/videos?author=pwcus&q=advisory&max-results=50&v=2&alt=jsonc";
            //console.log(url);
            getYouTubePlaylist(url);

        });


    };


})(jQuery);



$(document).ready(function() { //START document ready

    //current overlay trigger element
    var $mediaTrigger;

    //fix youtube iframes for mobile...jsdevice is defined in scripts.js and m.js
    if (jsdevice == 'mobile') {
        $('iframe').each(function(i) {
            if ($(this).attr('src').search('youtube.com') >= 0) {
                var ytwidth = parseFloat($(this).attr('width'));
                var ytheight = parseFloat($(this).attr('height'));
                var aspectratio = ytwidth / ytheight;
                if (ytwidth > 310) {
                    var newheight = parseInt(310 / aspectratio);
                    $(this).attr('width', '310');
                    $(this).attr('height', String(newheight));

                }
            }
        });

    }
    <!--only scan div elements -->
    $("div.media-embed").each(function(a) {
        $(this).embedMedia(a)
    });
    <!-- the modal can go on almost anything -->
    $(".media-overlay").each(function(b) {
        $(this).overlayMedia(b)
    });
    //Check for overlay in url
    var _overlayvar = jQuery.getUrlVar('overlay');
    if (typeof _overlayvar != 'undefined') {
        if ($("#" + _overlayvar).length) {
            var api = $("#" + _overlayvar).data("overlay");
            api.load();
        }

    }




}); //END document ready




/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v1.1.0
 * MIT license
 */

(function(window) {



    // -------------------------- utils -------------------------- //

    var slice = Array.prototype.slice;

    function noop() {}

    // -------------------------- definition -------------------------- //

    function defineBridget($) {

        // bail if no jQuery
        if (!$) {
            return;
        }

        // -------------------------- addOptionMethod -------------------------- //

        /**
         * adds option method -> $().plugin('option', {...})
         * @param {Function} PluginClass - constructor class
         */
        function addOptionMethod(PluginClass) {
            // don't overwrite original option method
            if (PluginClass.prototype.option) {
                return;
            }

            // option setter
            PluginClass.prototype.option = function(opts) {
                // bail out if not an object
                if (!$.isPlainObject(opts)) {
                    return;
                }
                this.options = $.extend(true, this.options, opts);
            };
        }

        // -------------------------- plugin bridge -------------------------- //

        // helper function for logging errors
        // $.error breaks jQuery chaining
        var logError = typeof console === 'undefined' ? noop :
            function(message) {
                console.error(message);
            };

        /**
         * jQuery plugin bridge, access methods like $elem.plugin('method')
         * @param {String} namespace - plugin name
         * @param {Function} PluginClass - constructor class
         */
        function bridge(namespace, PluginClass) {
            // add to jQuery fn namespace
            $.fn[namespace] = function(options) {
                if (typeof options === 'string') {
                    // call plugin method when first argument is a string
                    // get arguments for method
                    var args = slice.call(arguments, 1);

                    for (var i = 0, len = this.length; i < len; i++) {
                        var elem = this[i];
                        var instance = $.data(elem, namespace);
                        if (!instance) {
                            logError("cannot call methods on " + namespace + " prior to initialization; " +
                                "attempted to call '" + options + "'");
                            continue;
                        }
                        if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
                            logError("no such method '" + options + "' for " + namespace + " instance");
                            continue;
                        }

                        // trigger method with arguments
                        var returnValue = instance[options].apply(instance, args);

                        // break look and return first value if provided
                        if (returnValue !== undefined) {
                            return returnValue;
                        }
                    }
                    // return this if no return value
                    return this;
                } else {
                    return this.each(function() {
                        var instance = $.data(this, namespace);
                        if (instance) {
                            // apply options & init
                            instance.option(options);
                            instance._init();
                        } else {
                            // initialize new instance
                            instance = new PluginClass(this, options);
                            $.data(this, namespace, instance);
                        }
                    });
                }
            };

        }

        // -------------------------- bridget -------------------------- //

        /**
         * converts a Prototypical class into a proper jQuery plugin
         *   the class must have a ._init method
         * @param {String} namespace - plugin name, used in $().pluginName
         * @param {Function} PluginClass - constructor class
         */
        $.bridget = function(namespace, PluginClass) {
            addOptionMethod(PluginClass);
            bridge(namespace, PluginClass);
        };

        return $.bridget;

    }

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('jquery-bridget/jquery.bridget', ['jquery'], defineBridget);
    } else if (typeof exports === 'object') {
        defineBridget(require('jquery'));
    } else {
        // get jquery from browser global
        defineBridget(window.jQuery);
    }

})(window);

/*!
 * eventie v1.0.6
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */

(function(window) {



    var docElem = document.documentElement;

    var bind = function() {};

    function getIEEvent(obj) {
        var event = window.event;
        // add event.target
        event.target = event.target || event.srcElement || obj;
        return event;
    }

    if (docElem.addEventListener) {
        bind = function(obj, type, fn) {
            obj.addEventListener(type, fn, false);
        };
    } else if (docElem.attachEvent) {
        bind = function(obj, type, fn) {
            obj[type + fn] = fn.handleEvent ?
                function() {
                    var event = getIEEvent(obj);
                    fn.handleEvent.call(fn, event);
                } :
                function() {
                    var event = getIEEvent(obj);
                    fn.call(obj, event);
                };
            obj.attachEvent("on" + type, obj[type + fn]);
        };
    }

    var unbind = function() {};

    if (docElem.removeEventListener) {
        unbind = function(obj, type, fn) {
            obj.removeEventListener(type, fn, false);
        };
    } else if (docElem.detachEvent) {
        unbind = function(obj, type, fn) {
            obj.detachEvent("on" + type, obj[type + fn]);
            try {
                delete obj[type + fn];
            } catch (err) {
                // can't delete window object properties
                obj[type + fn] = undefined;
            }
        };
    }

    var eventie = {
        bind: bind,
        unbind: unbind
    };

    // ----- module definition ----- //

    if (typeof define === 'function' && define.amd) {
        // AMD
        define('eventie/eventie', eventie);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = eventie;
    } else {
        // browser global
        window.eventie = eventie;
    }

})(window);

/*!
 * EventEmitter v4.2.11 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */

;
(function() {
    'use strict';

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        } else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of its properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    } else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        } else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        } else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        } else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;

                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        } else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define('eventEmitter/EventEmitter', [], function() {
            return EventEmitter;
        });
    } else if (typeof module === 'object' && module.exports) {
        module.exports = EventEmitter;
    } else {
        exports.EventEmitter = EventEmitter;
    }
}.call(this));

/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

(function(window) {



    var prefixes = 'Webkit Moz ms Ms O'.split(' ');
    var docElemStyle = document.documentElement.style;

    function getStyleProperty(propName) {
        if (!propName) {
            return;
        }

        // test standard property first
        if (typeof docElemStyle[propName] === 'string') {
            return propName;
        }

        // capitalize
        propName = propName.charAt(0).toUpperCase() + propName.slice(1);

        // test vendor specific properties
        var prefixed;
        for (var i = 0, len = prefixes.length; i < len; i++) {
            prefixed = prefixes[i] + propName;
            if (typeof docElemStyle[prefixed] === 'string') {
                return prefixed;
            }
        }
    }

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('get-style-property/get-style-property', [], function() {
            return getStyleProperty;
        });
    } else if (typeof exports === 'object') {
        // CommonJS for Component
        module.exports = getStyleProperty;
    } else {
        // browser global
        window.getStyleProperty = getStyleProperty;
    }

})(window);

/*!
 * getSize v1.2.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false, console: false */

(function(window, undefined) {



    // -------------------------- helpers -------------------------- //

    // get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf('%') === -1 && !isNaN(num);
        return isValid && num;
    }

    function noop() {}

    var logError = typeof console === 'undefined' ? noop :
        function(message) {
            console.error(message);
        };

    // -------------------------- measurements -------------------------- //

    var measurements = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
    ];

    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0, len = measurements.length; i < len; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }



    function defineGetSize(getStyleProperty) {

        // -------------------------- setup -------------------------- //

        var isSetup = false;

        var getStyle, boxSizingProp, isBoxSizeOuter;

        /**
         * setup vars and functions
         * do it on initial getSize(), rather than on script load
         * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397
         */
        function setup() {
            // setup once
            if (isSetup) {
                return;
            }
            isSetup = true;

            var getComputedStyle = window.getComputedStyle;
            getStyle = (function() {
                var getStyleFn = getComputedStyle ?
                    function(elem) {
                        return getComputedStyle(elem, null);
                    } :
                    function(elem) {
                        return elem.currentStyle;
                    };

                return function getStyle(elem) {
                    var style = getStyleFn(elem);
                    if (!style) {
                        logError('Style returned ' + style +
                            '. Are you running this code in a hidden iframe on Firefox? ' +
                            'See http://bit.ly/getsizebug1');
                    }
                    return style;
                };
            })();

            // -------------------------- box sizing -------------------------- //

            boxSizingProp = getStyleProperty('boxSizing');

            /**
             * WebKit measures the outer-width on style.width on border-box elems
             * IE & Firefox measures the inner-width
             */
            if (boxSizingProp) {
                var div = document.createElement('div');
                div.style.width = '200px';
                div.style.padding = '1px 2px 3px 4px';
                div.style.borderStyle = 'solid';
                div.style.borderWidth = '1px 2px 3px 4px';
                div.style[boxSizingProp] = 'border-box';

                var body = document.body || document.documentElement;
                body.appendChild(div);
                var style = getStyle(div);

                isBoxSizeOuter = getStyleSize(style.width) === 200;
                body.removeChild(div);
            }

        }

        // -------------------------- getSize -------------------------- //

        function getSize(elem) {
            setup();

            // use querySeletor if elem is string
            if (typeof elem === 'string') {
                elem = document.querySelector(elem);
            }

            // do not proceed on non-objects
            if (!elem || typeof elem !== 'object' || !elem.nodeType) {
                return;
            }

            var style = getStyle(elem);

            // if hidden, everything is 0
            if (style.display === 'none') {
                return getZeroSize();
            }

            var size = {};
            size.width = elem.offsetWidth;
            size.height = elem.offsetHeight;

            var isBorderBox = size.isBorderBox = !!(boxSizingProp &&
                style[boxSizingProp] && style[boxSizingProp] === 'border-box');

            // get all measurements
            for (var i = 0, len = measurements.length; i < len; i++) {
                var measurement = measurements[i];
                var value = style[measurement];
                value = mungeNonPixel(elem, value);
                var num = parseFloat(value);
                // any 'auto', 'medium' value will be 0
                size[measurement] = !isNaN(num) ? num : 0;
            }

            var paddingWidth = size.paddingLeft + size.paddingRight;
            var paddingHeight = size.paddingTop + size.paddingBottom;
            var marginWidth = size.marginLeft + size.marginRight;
            var marginHeight = size.marginTop + size.marginBottom;
            var borderWidth = size.borderLeftWidth + size.borderRightWidth;
            var borderHeight = size.borderTopWidth + size.borderBottomWidth;

            var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

            // overwrite width and height if we can get it from style
            var styleWidth = getStyleSize(style.width);
            if (styleWidth !== false) {
                size.width = styleWidth +
                    // add padding and border unless it's already including it
                    (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
            }

            var styleHeight = getStyleSize(style.height);
            if (styleHeight !== false) {
                size.height = styleHeight +
                    // add padding and border unless it's already including it
                    (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
            }

            size.innerWidth = size.width - (paddingWidth + borderWidth);
            size.innerHeight = size.height - (paddingHeight + borderHeight);

            size.outerWidth = size.width + marginWidth;
            size.outerHeight = size.height + marginHeight;

            return size;
        }

        // IE8 returns percent values, not pixels
        // taken from jQuery's curCSS
        function mungeNonPixel(elem, value) {
            // IE8 and has percent value
            if (window.getComputedStyle || value.indexOf('%') === -1) {
                return value;
            }
            var style = elem.style;
            // Remember the original values
            var left = style.left;
            var rs = elem.runtimeStyle;
            var rsLeft = rs && rs.left;

            // Put in the new values to get a computed value out
            if (rsLeft) {
                rs.left = elem.currentStyle.left;
            }
            style.left = value;
            value = style.pixelLeft;

            // Revert the changed values
            style.left = left;
            if (rsLeft) {
                rs.left = rsLeft;
            }

            return value;
        }

        return getSize;

    }

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD for RequireJS
        define('get-size/get-size', ['get-style-property/get-style-property'], defineGetSize);
    } else if (typeof exports === 'object') {
        // CommonJS for Component
        module.exports = defineGetSize(require('desandro-get-style-property'));
    } else {
        // browser global
        window.getSize = defineGetSize(window.getStyleProperty);
    }

})(window);

/*!
 * docReady v1.0.4
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false, require: false, module: false */

(function(window) {



    var document = window.document;
    // collection of functions to be triggered on ready
    var queue = [];

    function docReady(fn) {
        // throw out non-functions
        if (typeof fn !== 'function') {
            return;
        }

        if (docReady.isReady) {
            // ready now, hit it
            fn();
        } else {
            // queue function when ready
            queue.push(fn);
        }
    }

    docReady.isReady = false;

    // triggered on various doc ready events
    function onReady(event) {
        // bail if already triggered or IE8 document is not ready just yet
        var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
        if (docReady.isReady || isIE8NotReady) {
            return;
        }

        trigger();
    }

    function trigger() {
        docReady.isReady = true;
        // process queue
        for (var i = 0, len = queue.length; i < len; i++) {
            var fn = queue[i];
            fn();
        }
    }

    function defineDocReady(eventie) {
        // trigger ready if page is ready
        if (document.readyState === 'complete') {
            trigger();
        } else {
            // listen for events
            eventie.bind(document, 'DOMContentLoaded', onReady);
            eventie.bind(document, 'readystatechange', onReady);
            eventie.bind(window, 'load', onReady);
        }

        return docReady;
    }

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('doc-ready/doc-ready', ['eventie/eventie'], defineDocReady);
    } else if (typeof exports === 'object') {
        module.exports = defineDocReady(require('eventie'));
    } else {
        // browser global
        window.docReady = defineDocReady(window.eventie);
    }

})(window);

/**
 * matchesSelector v1.0.3
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

(function(ElemProto) {

    'use strict';

    var matchesMethod = (function() {
        // check for the standard method name first
        if (ElemProto.matches) {
            return 'matches';
        }
        // check un-prefixed
        if (ElemProto.matchesSelector) {
            return 'matchesSelector';
        }
        // check vendor prefixes
        var prefixes = ['webkit', 'moz', 'ms', 'o'];

        for (var i = 0, len = prefixes.length; i < len; i++) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if (ElemProto[method]) {
                return method;
            }
        }
    })();

    // ----- match ----- //

    function match(elem, selector) {
        return elem[matchesMethod](selector);
    }

    // ----- appendToFragment ----- //

    function checkParent(elem) {
        // not needed if already has parent
        if (elem.parentNode) {
            return;
        }
        var fragment = document.createDocumentFragment();
        fragment.appendChild(elem);
    }

    // ----- query ----- //

    // fall back to using QSA
    // thx @jonathantneal https://gist.github.com/3062955
    function query(elem, selector) {
        // append to fragment if no parent
        checkParent(elem);

        // match elem with all selected elems of parent
        var elems = elem.parentNode.querySelectorAll(selector);
        for (var i = 0, len = elems.length; i < len; i++) {
            // return true if match
            if (elems[i] === elem) {
                return true;
            }
        }
        // otherwise return false
        return false;
    }

    // ----- matchChild ----- //

    function matchChild(elem, selector) {
        checkParent(elem);
        return match(elem, selector);
    }

    // ----- matchesSelector ----- //

    var matchesSelector;

    if (matchesMethod) {
        // IE9 supports matchesSelector, but doesn't work on orphaned elems
        // check for that
        var div = document.createElement('div');
        var supportsOrphans = match(div, 'div');
        matchesSelector = supportsOrphans ? match : matchChild;
    } else {
        matchesSelector = query;
    }

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('matches-selector/matches-selector', [], function() {
            return matchesSelector;
        });
    } else if (typeof exports === 'object') {
        module.exports = matchesSelector;
    } else {
        // browser global
        window.matchesSelector = matchesSelector;
    }

})(Element.prototype);

/**
 * Fizzy UI utils v1.0.1
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

(function(window, factory) {
    /*global define: false, module: false, require: false */
    'use strict';
    // universal module definition

    if (typeof define == 'function' && define.amd) {
        // AMD
        define('fizzy-ui-utils/utils', [
            'doc-ready/doc-ready',
            'matches-selector/matches-selector'
        ], function(docReady, matchesSelector) {
            return factory(window, docReady, matchesSelector);
        });
    } else if (typeof exports == 'object') {
        // CommonJS
        module.exports = factory(
            window,
            require('doc-ready'),
            require('desandro-matches-selector')
        );
    } else {
        // browser global
        window.fizzyUIUtils = factory(
            window,
            window.docReady,
            window.matchesSelector
        );
    }

}(window, function factory(window, docReady, matchesSelector) {



    var utils = {};

    // ----- extend ----- //

    // extends objects
    utils.extend = function(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    };

    // ----- modulo ----- //

    utils.modulo = function(num, div) {
        return ((num % div) + div) % div;
    };

    // ----- isArray ----- //

    var objToString = Object.prototype.toString;
    utils.isArray = function(obj) {
        return objToString.call(obj) == '[object Array]';
    };

    // ----- makeArray ----- //

    // turn element or nodeList into an array
    utils.makeArray = function(obj) {
        var ary = [];
        if (utils.isArray(obj)) {
            // use object if already an array
            ary = obj;
        } else if (obj && typeof obj.length == 'number') {
            // convert nodeList to array
            for (var i = 0, len = obj.length; i < len; i++) {
                ary.push(obj[i]);
            }
        } else {
            // array of single index
            ary.push(obj);
        }
        return ary;
    };

    // ----- indexOf ----- //

    // index of helper cause IE8
    utils.indexOf = Array.prototype.indexOf ? function(ary, obj) {
        return ary.indexOf(obj);
    } : function(ary, obj) {
        for (var i = 0, len = ary.length; i < len; i++) {
            if (ary[i] === obj) {
                return i;
            }
        }
        return -1;
    };

    // ----- removeFrom ----- //

    utils.removeFrom = function(ary, obj) {
        var index = utils.indexOf(ary, obj);
        if (index != -1) {
            ary.splice(index, 1);
        }
    };

    // ----- isElement ----- //

    // http://stackoverflow.com/a/384380/182183
    utils.isElement = (typeof HTMLElement == 'function' || typeof HTMLElement == 'object') ?
        function isElementDOM2(obj) {
            return obj instanceof HTMLElement;
        } :
        function isElementQuirky(obj) {
            return obj && typeof obj == 'object' &&
                obj.nodeType == 1 && typeof obj.nodeName == 'string';
        };

    // ----- setText ----- //

    utils.setText = (function() {
        var setTextProperty;

        function setText(elem, text) {
            // only check setTextProperty once
            setTextProperty = setTextProperty || (document.documentElement.textContent !== undefined ? 'textContent' : 'innerText');
            elem[setTextProperty] = text;
        }
        return setText;
    })();

    // ----- getParent ----- //

    utils.getParent = function(elem, selector) {
        while (elem != document.body) {
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) {
                return elem;
            }
        }
    };

    // ----- getQueryElement ----- //

    // use element as selector string
    utils.getQueryElement = function(elem) {
        if (typeof elem == 'string') {
            return document.querySelector(elem);
        }
        return elem;
    };

    // ----- handleEvent ----- //

    // enable .ontype to trigger from .addEventListener( elem, 'type' )
    utils.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };

    // ----- filterFindElements ----- //

    utils.filterFindElements = function(elems, selector) {
        // make array of elems
        elems = utils.makeArray(elems);
        var ffElems = [];

        for (var i = 0, len = elems.length; i < len; i++) {
            var elem = elems[i];
            // check that elem is an actual element
            if (!utils.isElement(elem)) {
                continue;
            }
            // filter & find items if we have a selector
            if (selector) {
                // filter siblings
                if (matchesSelector(elem, selector)) {
                    ffElems.push(elem);
                }
                // find children
                var childElems = elem.querySelectorAll(selector);
                // concat childElems to filterFound array
                for (var j = 0, jLen = childElems.length; j < jLen; j++) {
                    ffElems.push(childElems[j]);
                }
            } else {
                ffElems.push(elem);
            }
        }

        return ffElems;
    };

    // ----- debounceMethod ----- //

    utils.debounceMethod = function(_class, methodName, threshold) {
        // original method
        var method = _class.prototype[methodName];
        var timeoutName = methodName + 'Timeout';

        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            if (timeout) {
                clearTimeout(timeout);
            }
            var args = arguments;

            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold || 100);
        };
    };

    // ----- htmlInit ----- //

    // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + '-' + $2;
        }).toLowerCase();
    };

    var console = window.console;
    /**
     * allow user to initialize classes via .js-namespace class
     * htmlInit( Widget, 'widgetName' )
     * options are parsed from data-namespace-option attribute
     */
    utils.htmlInit = function(WidgetClass, namespace) {
        docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var elems = document.querySelectorAll('.js-' + dashedNamespace);
            var dataAttr = 'data-' + dashedNamespace + '-options';

            for (var i = 0, len = elems.length; i < len; i++) {
                var elem = elems[i];
                var attr = elem.getAttribute(dataAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    // log error, do not initialize
                    if (console) {
                        console.error('Error parsing ' + dataAttr + ' on ' +
                            elem.nodeName.toLowerCase() + (elem.id ? '#' + elem.id : '') + ': ' +
                            error);
                    }
                    continue;
                }
                // initialize
                var instance = new WidgetClass(elem, options);
                // make available via $().data('layoutname')
                var jQuery = window.jQuery;
                if (jQuery) {
                    jQuery.data(elem, namespace, instance);
                }
            }
        });
    };

    // -----  ----- //

    return utils;

}));

/**
 * Outlayer Item
 */

(function(window, factory) {
    'use strict';
    // universal module definition
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('outlayer/item', [
                'eventEmitter/EventEmitter',
                'get-size/get-size',
                'get-style-property/get-style-property',
                'fizzy-ui-utils/utils'
            ],
            function(EventEmitter, getSize, getStyleProperty, utils) {
                return factory(window, EventEmitter, getSize, getStyleProperty, utils);
            }
        );
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(
            window,
            require('wolfy87-eventemitter'),
            require('get-size'),
            require('desandro-get-style-property'),
            require('fizzy-ui-utils')
        );
    } else {
        // browser global
        window.Outlayer = {};
        window.Outlayer.Item = factory(
            window,
            window.EventEmitter,
            window.getSize,
            window.getStyleProperty,
            window.fizzyUIUtils
        );
    }

}(window, function factory(window, EventEmitter, getSize, getStyleProperty, utils) {
    'use strict';

    // ----- helpers ----- //

    var getComputedStyle = window.getComputedStyle;
    var getStyle = getComputedStyle ?
        function(elem) {
            return getComputedStyle(elem, null);
        } :
        function(elem) {
            return elem.currentStyle;
        };


    function isEmptyObj(obj) {
        for (var prop in obj) {
            return false;
        }
        prop = null;
        return true;
    }

    // -------------------------- CSS3 support -------------------------- //

    var transitionProperty = getStyleProperty('transition');
    var transformProperty = getStyleProperty('transform');
    var supportsCSS3 = transitionProperty && transformProperty;
    var is3d = !!getStyleProperty('perspective');

    var transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'otransitionend',
        transition: 'transitionend'
    }[transitionProperty];

    // properties that could have vendor prefix
    var prefixableProperties = [
        'transform',
        'transition',
        'transitionDuration',
        'transitionProperty'
    ];

    // cache all vendor properties
    var vendorProperties = (function() {
        var cache = {};
        for (var i = 0, len = prefixableProperties.length; i < len; i++) {
            var prop = prefixableProperties[i];
            var supportedProp = getStyleProperty(prop);
            if (supportedProp && supportedProp !== prop) {
                cache[prop] = supportedProp;
            }
        }
        return cache;
    })();

    // -------------------------- Item -------------------------- //

    function Item(element, layout) {
        if (!element) {
            return;
        }

        this.element = element;
        // parent layout class, i.e. Masonry, Isotope, or Packery
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };

        this._create();
    }

    // inherit EventEmitter
    utils.extend(Item.prototype, EventEmitter.prototype);

    Item.prototype._create = function() {
        // transition objects
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };

        this.css({
            position: 'absolute'
        });
    };

    // trigger specified handler for event type
    Item.prototype.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };

    Item.prototype.getSize = function() {
        this.size = getSize(this.element);
    };

    /**
     * apply CSS styles to element
     * @param {Object} style
     */
    Item.prototype.css = function(style) {
        var elemStyle = this.element.style;

        for (var prop in style) {
            // use vendor property if available
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
        }
    };

    // measure position, and sets it
    Item.prototype.getPosition = function() {
        var style = getStyle(this.element);
        var layoutOptions = this.layout.options;
        var isOriginLeft = layoutOptions.isOriginLeft;
        var isOriginTop = layoutOptions.isOriginTop;
        var xValue = style[isOriginLeft ? 'left' : 'right'];
        var yValue = style[isOriginTop ? 'top' : 'bottom'];
        // convert percent to pixels
        var layoutSize = this.layout.size;
        var x = xValue.indexOf('%') != -1 ?
            (parseFloat(xValue) / 100) * layoutSize.width : parseInt(xValue, 10);
        var y = yValue.indexOf('%') != -1 ?
            (parseFloat(yValue) / 100) * layoutSize.height : parseInt(yValue, 10);

        // clean up 'auto' or other non-integer values
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        // remove padding from measurement
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

        this.position.x = x;
        this.position.y = y;
    };

    // set settled position, apply padding
    Item.prototype.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var layoutOptions = this.layout.options;
        var style = {};

        // x
        var xPadding = layoutOptions.isOriginLeft ? 'paddingLeft' : 'paddingRight';
        var xProperty = layoutOptions.isOriginLeft ? 'left' : 'right';
        var xResetProperty = layoutOptions.isOriginLeft ? 'right' : 'left';

        var x = this.position.x + layoutSize[xPadding];
        // set in percentage or pixels
        style[xProperty] = this.getXValue(x);
        // reset other property
        style[xResetProperty] = '';

        // y
        var yPadding = layoutOptions.isOriginTop ? 'paddingTop' : 'paddingBottom';
        var yProperty = layoutOptions.isOriginTop ? 'top' : 'bottom';
        var yResetProperty = layoutOptions.isOriginTop ? 'bottom' : 'top';

        var y = this.position.y + layoutSize[yPadding];
        // set in percentage or pixels
        style[yProperty] = this.getYValue(y);
        // reset other property
        style[yResetProperty] = '';

        this.css(style);
        this.emitEvent('layout', [this]);
    };

    Item.prototype.getXValue = function(x) {
        var layoutOptions = this.layout.options;
        return layoutOptions.percentPosition && !layoutOptions.isHorizontal ?
            ((x / this.layout.size.width) * 100) + '%' : x + 'px';
    };

    Item.prototype.getYValue = function(y) {
        var layoutOptions = this.layout.options;
        return layoutOptions.percentPosition && layoutOptions.isHorizontal ?
            ((y / this.layout.size.height) * 100) + '%' : y + 'px';
    };


    Item.prototype._transitionTo = function(x, y) {
        this.getPosition();
        // get current x & y from top/left
        var curX = this.position.x;
        var curY = this.position.y;

        var compareX = parseInt(x, 10);
        var compareY = parseInt(y, 10);
        var didNotMove = compareX === this.position.x && compareY === this.position.y;

        // save end position
        this.setPosition(x, y);

        // if did not move and not transitioning, just go to layout
        if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
        }

        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);

        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    };

    Item.prototype.getTranslate = function(x, y) {
        // flip cooridinates if origin on right or bottom
        var layoutOptions = this.layout.options;
        x = layoutOptions.isOriginLeft ? x : -x;
        y = layoutOptions.isOriginTop ? y : -y;

        if (is3d) {
            return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
        }

        return 'translate(' + x + 'px, ' + y + 'px)';
    };

    // non transition + transform support
    Item.prototype.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
    };

    // use transition and transforms if supported
    Item.prototype.moveTo = supportsCSS3 ?
        Item.prototype._transitionTo : Item.prototype.goTo;

    Item.prototype.setPosition = function(x, y) {
        this.position.x = parseInt(x, 10);
        this.position.y = parseInt(y, 10);
    };

    // ----- transition ----- //

    /**
     * @param {Object} style - CSS
     * @param {Function} onTransitionEnd
     */

    // non transition, just trigger callback
    Item.prototype._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) {
            this._removeStyles(args.to);
        }
        for (var prop in args.onTransitionEnd) {
            args.onTransitionEnd[prop].call(this);
        }
    };

    /**
     * proper transition
     * @param {Object} args - arguments
     *   @param {Object} to - style to transition to
     *   @param {Object} from - style to start transition from
     *   @param {Boolean} isCleaning - removes transition styles after transition
     *   @param {Function} onTransitionEnd - callback
     */
    Item.prototype._transition = function(args) {
        // redirect to nonTransition if no transition duration
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
        }

        var _transition = this._transn;
        // keep track of onTransitionEnd callback by css property
        for (var prop in args.onTransitionEnd) {
            _transition.onEnd[prop] = args.onTransitionEnd[prop];
        }
        // keep track of properties that are transitioning
        for (prop in args.to) {
            _transition.ingProperties[prop] = true;
            // keep track of properties to clean up when transition is done
            if (args.isCleaning) {
                _transition.clean[prop] = true;
            }
        }

        // set from styles
        if (args.from) {
            this.css(args.from);
            // force redraw. http://blog.alexmaccaw.com/css-transitions
            var h = this.element.offsetHeight;
            // hack for JSHint to hush about unused var
            h = null;
        }
        // enable transition
        this.enableTransition(args.to);
        // set styles that are transitioning
        this.css(args.to);

        this.isTransitioning = true;

    };

    // dash before all cap letters, including first for
    // WebkitTransform => -webkit-transform
    function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
            return '-' + $1.toLowerCase();
        });
    }

    var transitionProps = 'opacity,' +
        toDashedAll(vendorProperties.transform || 'transform');

    Item.prototype.enableTransition = function( /* style */ ) {
        // HACK changing transitionProperty during a transition
        // will cause transition to jump
        if (this.isTransitioning) {
            return;
        }

        // make `transition: foo, bar, baz` from style object
        // HACK un-comment this when enableTransition can work
        // while a transition is happening
        // var transitionValues = [];
        // for ( var prop in style ) {
        //   // dash-ify camelCased properties like WebkitTransition
        //   prop = vendorProperties[ prop ] || prop;
        //   transitionValues.push( toDashedAll( prop ) );
        // }
        // enable transition styles
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: this.layout.options.transitionDuration
        });
        // listen for transition end event
        this.element.addEventListener(transitionEndEvent, this, false);
    };

    Item.prototype.transition = Item.prototype[transitionProperty ? '_transition' : '_nonTransition'];

    // ----- events ----- //

    Item.prototype.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event);
    };

    Item.prototype.onotransitionend = function(event) {
        this.ontransitionend(event);
    };

    // properties that I munge to make my life easier
    var dashedVendorProperties = {
        '-webkit-transform': 'transform',
        '-moz-transform': 'transform',
        '-o-transform': 'transform'
    };

    Item.prototype.ontransitionend = function(event) {
        // disregard bubbled events from children
        if (event.target !== this.element) {
            return;
        }
        var _transition = this._transn;
        // get property name of transitioned property, convert to prefix-free
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;

        // remove property that has completed transitioning
        delete _transition.ingProperties[propertyName];
        // check if any properties are still transitioning
        if (isEmptyObj(_transition.ingProperties)) {
            // all properties have completed transitioning
            this.disableTransition();
        }
        // clean style
        if (propertyName in _transition.clean) {
            // clean up style
            this.element.style[event.propertyName] = '';
            delete _transition.clean[propertyName];
        }
        // trigger onTransitionEnd callback
        if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
        }

        this.emitEvent('transitionEnd', [this]);
    };

    Item.prototype.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
    };

    /**
     * removes style property from element
     * @param {Object} style
     **/
    Item.prototype._removeStyles = function(style) {
        // clean up transition styles
        var cleanStyle = {};
        for (var prop in style) {
            cleanStyle[prop] = '';
        }
        this.css(cleanStyle);
    };

    var cleanTransitionStyle = {
        transitionProperty: '',
        transitionDuration: ''
    };

    Item.prototype.removeTransitionStyles = function() {
        // remove transition
        this.css(cleanTransitionStyle);
    };

    // ----- show/hide/remove ----- //

    // remove element from DOM
    Item.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        // remove display: none
        this.css({
            display: ''
        });
        this.emitEvent('remove', [this]);
    };

    Item.prototype.remove = function() {
        // just remove element if no transition support or no transition
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
        }

        // start transition
        var _this = this;
        this.once('transitionEnd', function() {
            _this.removeElem();
        });
        this.hide();
    };

    Item.prototype.reveal = function() {
        delete this.isHidden;
        // remove display: none
        this.css({
            display: ''
        });

        var options = this.layout.options;

        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;

        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };

    Item.prototype.onRevealTransitionEnd = function() {
        // check if still visible
        // during transition, item may have been hidden
        if (!this.isHidden) {
            this.emitEvent('reveal');
        }
    };

    /**
     * get style property use for hide/reveal transition end
     * @param {String} styleProperty - hiddenStyle/visibleStyle
     * @returns {String}
     */
    Item.prototype.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        // use opacity
        if (optionStyle.opacity) {
            return 'opacity';
        }
        // get first property
        for (var prop in optionStyle) {
            return prop;
        }
    };

    Item.prototype.hide = function() {
        // set flag
        this.isHidden = true;
        // remove display: none
        this.css({
            display: ''
        });

        var options = this.layout.options;

        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;

        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            // keep hidden stuff hidden
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };

    Item.prototype.onHideTransitionEnd = function() {
        // check if still hidden
        // during transition, item may have been un-hidden
        if (this.isHidden) {
            this.css({
                display: 'none'
            });
            this.emitEvent('hide');
        }
    };

    Item.prototype.destroy = function() {
        this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
        });
    };

    return Item;

}));

/*!
 * Outlayer v1.4.2
 * the brains and guts of a layout library
 * MIT license
 */

(function(window, factory) {
    'use strict';
    // universal module definition

    if (typeof define == 'function' && define.amd) {
        // AMD
        define('outlayer/outlayer', [
                'eventie/eventie',
                'eventEmitter/EventEmitter',
                'get-size/get-size',
                'fizzy-ui-utils/utils',
                './item'
            ],
            function(eventie, EventEmitter, getSize, utils, Item) {
                return factory(window, eventie, EventEmitter, getSize, utils, Item);
            }
        );
    } else if (typeof exports == 'object') {
        // CommonJS
        module.exports = factory(
            window,
            require('eventie'),
            require('wolfy87-eventemitter'),
            require('get-size'),
            require('fizzy-ui-utils'),
            require('./item')
        );
    } else {
        // browser global
        window.Outlayer = factory(
            window,
            window.eventie,
            window.EventEmitter,
            window.getSize,
            window.fizzyUIUtils,
            window.Outlayer.Item
        );
    }

}(window, function factory(window, eventie, EventEmitter, getSize, utils, Item) {
    'use strict';

    // ----- vars ----- //

    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function() {};

    // -------------------------- Outlayer -------------------------- //

    // globally unique identifiers
    var GUID = 0;
    // internal store of all Outlayer intances
    var instances = {};


    /**
     * @param {Element, String} element
     * @param {Object} options
     * @constructor
     */
    function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) {
                console.error('Bad element for ' + this.constructor.namespace +
                    ': ' + (queryElement || element));
            }
            return;
        }
        this.element = queryElement;
        // add jQuery
        if (jQuery) {
            this.$element = jQuery(this.element);
        }

        // options
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);

        // add id for Outlayer.getFromElement
        var id = ++GUID;
        this.element.outlayerGUID = id; // expando
        instances[id] = this; // associate via id

        // kick it off
        this._create();

        if (this.options.isInitLayout) {
            this.layout();
        }
    }

    // settings are for internal use only
    Outlayer.namespace = 'outlayer';
    Outlayer.Item = Item;

    // default options
    Outlayer.defaults = {
        containerStyle: {
            position: 'relative'
        },
        isInitLayout: true,
        isOriginLeft: true,
        isOriginTop: true,
        isResizeBound: true,
        isResizingContainer: true,
        // item options
        transitionDuration: '0.4s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
    };

    // inherit EventEmitter
    utils.extend(Outlayer.prototype, EventEmitter.prototype);

    /**
     * set options
     * @param {Object} opts
     */
    Outlayer.prototype.option = function(opts) {
        utils.extend(this.options, opts);
    };

    Outlayer.prototype._create = function() {
        // get items from children
        this.reloadItems();
        // elements that affect layout, but are not laid out
        this.stamps = [];
        this.stamp(this.options.stamp);
        // set container style
        utils.extend(this.element.style, this.options.containerStyle);

        // bind resize method
        if (this.options.isResizeBound) {
            this.bindResize();
        }
    };

    // goes through all children again and gets bricks in proper order
    Outlayer.prototype.reloadItems = function() {
        // collection of item elements
        this.items = this._itemize(this.element.children);
    };


    /**
     * turn elements into Outlayer.Items to be used in layout
     * @param {Array or NodeList or HTMLElement} elems
     * @returns {Array} items - collection of new Outlayer Items
     */
    Outlayer.prototype._itemize = function(elems) {

        var itemElems = this._filterFindItemElements(elems);
        var Item = this.constructor.Item;

        // create new Outlayer Items for collection
        var items = [];
        for (var i = 0, len = itemElems.length; i < len; i++) {
            var elem = itemElems[i];
            var item = new Item(elem, this);
            items.push(item);
        }

        return items;
    };

    /**
     * get item elements to be used in layout
     * @param {Array or NodeList or HTMLElement} elems
     * @returns {Array} items - item elements
     */
    Outlayer.prototype._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
    };

    /**
     * getter method for getting item elements
     * @returns {Array} elems - collection of item elements
     */
    Outlayer.prototype.getItemElements = function() {
        var elems = [];
        for (var i = 0, len = this.items.length; i < len; i++) {
            elems.push(this.items[i].element);
        }
        return elems;
    };

    // ----- init & layout ----- //

    /**
     * lays out all items
     */
    Outlayer.prototype.layout = function() {
        this._resetLayout();
        this._manageStamps();

        // don't animate first layout
        var isInstant = this.options.isLayoutInstant !== undefined ?
            this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);

        // flag for initalized
        this._isLayoutInited = true;
    };

    // _init is alias for layout
    Outlayer.prototype._init = Outlayer.prototype.layout;

    /**
     * logic before any new layout
     */
    Outlayer.prototype._resetLayout = function() {
        this.getSize();
    };


    Outlayer.prototype.getSize = function() {
        this.size = getSize(this.element);
    };

    /**
     * get measurement from option, for columnWidth, rowHeight, gutter
     * if option is String -> get element from selector string, & get size of element
     * if option is Element -> get size of element
     * else use option as a number
     *
     * @param {String} measurement
     * @param {String} size - width or height
     * @private
     */
    Outlayer.prototype._getMeasurement = function(measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) {
            // default to 0
            this[measurement] = 0;
        } else {
            // use option as an element
            if (typeof option === 'string') {
                elem = this.element.querySelector(option);
            } else if (utils.isElement(option)) {
                elem = option;
            }
            // use size of element, if element
            this[measurement] = elem ? getSize(elem)[size] : option;
        }
    };

    /**
     * layout a collection of item elements
     * @api public
     */
    Outlayer.prototype.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);

        this._layoutItems(items, isInstant);

        this._postLayout();
    };

    /**
     * get the items to be laid out
     * you may want to skip over some items
     * @param {Array} items
     * @returns {Array} items
     */
    Outlayer.prototype._getItemsForLayout = function(items) {
        var layoutItems = [];
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            if (!item.isIgnored) {
                layoutItems.push(item);
            }
        }
        return layoutItems;
    };

    /**
     * layout items
     * @param {Array} items
     * @param {Boolean} isInstant
     */
    Outlayer.prototype._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems('layout', items);

        if (!items || !items.length) {
            // no items, emit event with empty array
            return;
        }

        var queue = [];

        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            // get x/y object from method
            var position = this._getItemLayoutPosition(item);
            // enqueue
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
        }

        this._processLayoutQueue(queue);
    };

    /**
     * get item layout position
     * @param {Outlayer.Item} item
     * @returns {Object} x and y position
     */
    Outlayer.prototype._getItemLayoutPosition = function( /* item */ ) {
        return {
            x: 0,
            y: 0
        };
    };

    /**
     * iterate over array and position each item
     * Reason being - separating this logic prevents 'layout invalidation'
     * thx @paul_irish
     * @param {Array} queue
     */
    Outlayer.prototype._processLayoutQueue = function(queue) {
        for (var i = 0, len = queue.length; i < len; i++) {
            var obj = queue[i];
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant);
        }
    };

    /**
     * Sets position of item in DOM
     * @param {Outlayer.Item} item
     * @param {Number} x - horizontal position
     * @param {Number} y - vertical position
     * @param {Boolean} isInstant - disables transitions
     */
    Outlayer.prototype._positionItem = function(item, x, y, isInstant) {
        if (isInstant) {
            // if not transition, just set CSS
            item.goTo(x, y);
        } else {
            item.moveTo(x, y);
        }
    };

    /**
     * Any logic you want to do after each layout,
     * i.e. size the container
     */
    Outlayer.prototype._postLayout = function() {
        this.resizeContainer();
    };

    Outlayer.prototype.resizeContainer = function() {
        if (!this.options.isResizingContainer) {
            return;
        }
        var size = this._getContainerSize();
        if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
        }
    };

    /**
     * Sets width or height of container if returned
     * @returns {Object} size
     *   @param {Number} width
     *   @param {Number} height
     */
    Outlayer.prototype._getContainerSize = noop;

    /**
     * @param {Number} measure - size of width or height
     * @param {Boolean} isWidth
     */
    Outlayer.prototype._setContainerMeasure = function(measure, isWidth) {
        if (measure === undefined) {
            return;
        }

        var elemSize = this.size;
        // add padding and border width if border box
        if (elemSize.isBorderBox) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
                elemSize.borderLeftWidth + elemSize.borderRightWidth :
                elemSize.paddingBottom + elemSize.paddingTop +
                elemSize.borderTopWidth + elemSize.borderBottomWidth;
        }

        measure = Math.max(measure, 0);
        this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
    };

    /**
     * emit eventComplete on a collection of items events
     * @param {String} eventName
     * @param {Array} items - Outlayer.Items
     */
    Outlayer.prototype._emitCompleteOnItems = function(eventName, items) {
        var _this = this;

        function onComplete() {
            _this.dispatchEvent(eventName + 'Complete', null, [items]);
        }

        var count = items.length;
        if (!items || !count) {
            onComplete();
            return;
        }

        var doneCount = 0;

        function tick() {
            doneCount++;
            if (doneCount === count) {
                onComplete();
            }
        }

        // bind callback
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            item.once(eventName, tick);
        }
    };

    /**
     * emits events via eventEmitter and jQuery events
     * @param {String} type - name of event
     * @param {Event} event - original event
     * @param {Array} args - extra arguments
     */
    Outlayer.prototype.dispatchEvent = function(type, event, args) {
        // add original event to arguments
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);

        if (jQuery) {
            // set this.$element
            this.$element = this.$element || jQuery(this.element);
            if (event) {
                // create jQuery event
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else {
                // just trigger with type if no event available
                this.$element.trigger(type, args);
            }
        }
    };

    // -------------------------- ignore & stamps -------------------------- //


    /**
     * keep item in collection, but do not lay it out
     * ignored items do not get skipped in layout
     * @param {Element} elem
     */
    Outlayer.prototype.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            item.isIgnored = true;
        }
    };

    /**
     * return item to layout collection
     * @param {Element} elem
     */
    Outlayer.prototype.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            delete item.isIgnored;
        }
    };

    /**
     * adds elements to stamps
     * @param {NodeList, Array, Element, or String} elems
     */
    Outlayer.prototype.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }

        this.stamps = this.stamps.concat(elems);
        // ignore
        for (var i = 0, len = elems.length; i < len; i++) {
            var elem = elems[i];
            this.ignore(elem);
        }
    };

    /**
     * removes elements to stamps
     * @param {NodeList, Array, or Element} elems
     */
    Outlayer.prototype.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }

        for (var i = 0, len = elems.length; i < len; i++) {
            var elem = elems[i];
            // filter out removed stamp elements
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
        }

    };

    /**
     * finds child elements
     * @param {NodeList, Array, Element, or String} elems
     * @returns {Array} elems
     */
    Outlayer.prototype._find = function(elems) {
        if (!elems) {
            return;
        }
        // if string, use argument as selector string
        if (typeof elems === 'string') {
            elems = this.element.querySelectorAll(elems);
        }
        elems = utils.makeArray(elems);
        return elems;
    };

    Outlayer.prototype._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) {
            return;
        }

        this._getBoundingRect();

        for (var i = 0, len = this.stamps.length; i < len; i++) {
            var stamp = this.stamps[i];
            this._manageStamp(stamp);
        }
    };

    // update boundingLeft / Top
    Outlayer.prototype._getBoundingRect = function() {
        // get bounding rect for container element
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        };
    };

    /**
     * @param {Element} stamp
     **/
    Outlayer.prototype._manageStamp = noop;

    /**
     * get x/y position of element relative to container element
     * @param {Element} elem
     * @returns {Object} offset - has left, top, right, bottom
     */
    Outlayer.prototype._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
    };

    // -------------------------- resize -------------------------- //

    // enable event handlers for listeners
    // i.e. resize -> onresize
    Outlayer.prototype.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };

    /**
     * Bind layout to window resizing
     */
    Outlayer.prototype.bindResize = function() {
        // bind just one listener
        if (this.isResizeBound) {
            return;
        }
        eventie.bind(window, 'resize', this);
        this.isResizeBound = true;
    };

    /**
     * Unbind layout to window resizing
     */
    Outlayer.prototype.unbindResize = function() {
        if (this.isResizeBound) {
            eventie.unbind(window, 'resize', this);
        }
        this.isResizeBound = false;
    };

    // original debounce by John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

    // this fires every resize
    Outlayer.prototype.onresize = function() {
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }

        var _this = this;

        function delayed() {
            _this.resize();
            delete _this.resizeTimeout;
        }

        this.resizeTimeout = setTimeout(delayed, 100);
    };

    // debounced, layout on resize
    Outlayer.prototype.resize = function() {
        // don't trigger if size did not change
        // or if resize was unbound. See #9
        if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
        }

        this.layout();
    };

    /**
     * check if layout is needed post layout
     * @returns Boolean
     */
    Outlayer.prototype.needsResizeLayout = function() {
        var size = getSize(this.element);
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    };

    // -------------------------- methods -------------------------- //

    /**
     * add items to Outlayer instance
     * @param {Array or NodeList or Element} elems
     * @returns {Array} items - Outlayer.Items
     **/
    Outlayer.prototype.addItems = function(elems) {
        var items = this._itemize(elems);
        // add items to collection
        if (items.length) {
            this.items = this.items.concat(items);
        }
        return items;
    };

    /**
     * Layout newly-appended item elements
     * @param {Array or NodeList or Element} elems
     */
    Outlayer.prototype.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        // layout and reveal just the new items
        this.layoutItems(items, true);
        this.reveal(items);
    };

    /**
     * Layout prepended elements
     * @param {Array or NodeList or Element} elems
     */
    Outlayer.prototype.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        // add items to beginning of collection
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        // start new layout
        this._resetLayout();
        this._manageStamps();
        // layout new stuff without transition
        this.layoutItems(items, true);
        this.reveal(items);
        // layout previous items
        this.layoutItems(previousItems);
    };

    /**
     * reveal a collection of items
     * @param {Array of Outlayer.Items} items
     */
    Outlayer.prototype.reveal = function(items) {
        this._emitCompleteOnItems('reveal', items);

        var len = items && items.length;
        for (var i = 0; len && i < len; i++) {
            var item = items[i];
            item.reveal();
        }
    };

    /**
     * hide a collection of items
     * @param {Array of Outlayer.Items} items
     */
    Outlayer.prototype.hide = function(items) {
        this._emitCompleteOnItems('hide', items);

        var len = items && items.length;
        for (var i = 0; len && i < len; i++) {
            var item = items[i];
            item.hide();
        }
    };

    /**
     * reveal item elements
     * @param {Array}, {Element}, {NodeList} items
     */
    Outlayer.prototype.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items);
    };

    /**
     * hide item elements
     * @param {Array}, {Element}, {NodeList} items
     */
    Outlayer.prototype.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items);
    };

    /**
     * get Outlayer.Item, given an Element
     * @param {Element} elem
     * @param {Function} callback
     * @returns {Outlayer.Item} item
     */
    Outlayer.prototype.getItem = function(elem) {
        // loop through items to get the one that matches
        for (var i = 0, len = this.items.length; i < len; i++) {
            var item = this.items[i];
            if (item.element === elem) {
                // return item
                return item;
            }
        }
    };

    /**
     * get collection of Outlayer.Items, given Elements
     * @param {Array} elems
     * @returns {Array} items - Outlayer.Items
     */
    Outlayer.prototype.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        for (var i = 0, len = elems.length; i < len; i++) {
            var elem = elems[i];
            var item = this.getItem(elem);
            if (item) {
                items.push(item);
            }
        }

        return items;
    };

    /**
     * remove element(s) from instance and DOM
     * @param {Array or NodeList or Element} elems
     */
    Outlayer.prototype.remove = function(elems) {
        var removeItems = this.getItems(elems);

        this._emitCompleteOnItems('remove', removeItems);

        // bail if no items to remove
        if (!removeItems || !removeItems.length) {
            return;
        }

        for (var i = 0, len = removeItems.length; i < len; i++) {
            var item = removeItems[i];
            item.remove();
            // remove item from collection
            utils.removeFrom(this.items, item);
        }
    };

    // ----- destroy ----- //

    // remove and disable Outlayer instance
    Outlayer.prototype.destroy = function() {
        // clean up dynamic styles
        var style = this.element.style;
        style.height = '';
        style.position = '';
        style.width = '';
        // destroy items
        for (var i = 0, len = this.items.length; i < len; i++) {
            var item = this.items[i];
            item.destroy();
        }

        this.unbindResize();

        var id = this.element.outlayerGUID;
        delete instances[id]; // remove reference to instance by id
        delete this.element.outlayerGUID;
        // remove data for jQuery
        if (jQuery) {
            jQuery.removeData(this.element, this.constructor.namespace);
        }

    };

    // -------------------------- data -------------------------- //

    /**
     * get Outlayer instance from element
     * @param {Element} elem
     * @returns {Outlayer}
     */
    Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
    };


    // -------------------------- create Outlayer class -------------------------- //

    /**
     * create a layout class
     * @param {String} namespace
     */
    Outlayer.create = function(namespace, options) {
        // sub-class Outlayer
        function Layout() {
            Outlayer.apply(this, arguments);
        }
        // inherit Outlayer prototype, use Object.create if there
        if (Object.create) {
            Layout.prototype = Object.create(Outlayer.prototype);
        } else {
            utils.extend(Layout.prototype, Outlayer.prototype);
        }
        // set contructor, used for namespace and Item
        Layout.prototype.constructor = Layout;

        Layout.defaults = utils.extend({}, Outlayer.defaults);
        // apply new options
        utils.extend(Layout.defaults, options);
        // keep prototype.settings for backwards compatibility (Packery v1.2.0)
        Layout.prototype.settings = {};

        Layout.namespace = namespace;

        Layout.data = Outlayer.data;

        // sub-class Item
        Layout.Item = function LayoutItem() {
            Item.apply(this, arguments);
        };

        Layout.Item.prototype = new Item();

        // -------------------------- declarative -------------------------- //

        utils.htmlInit(Layout, namespace);

        // -------------------------- jQuery bridge -------------------------- //

        // make into jQuery plugin
        if (jQuery && jQuery.bridget) {
            jQuery.bridget(namespace, Layout);
        }

        return Layout;
    };

    // ----- fin ----- //

    // back in global
    Outlayer.Item = Item;

    return Outlayer;

}));


/**
 * Isotope Item
 **/

(function(window, factory) {
    'use strict';
    // universal module definition
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('isotope/js/item', [
                'outlayer/outlayer'
            ],
            factory);
    } else if (typeof exports == 'object') {
        // CommonJS
        module.exports = factory(
            require('outlayer')
        );
    } else {
        // browser global
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(
            window.Outlayer
        );
    }

}(window, function factory(Outlayer) {
    'use strict';

    // -------------------------- Item -------------------------- //

    // sub-class Outlayer Item
    function Item() {
        Outlayer.Item.apply(this, arguments);
    }

    Item.prototype = new Outlayer.Item();

    Item.prototype._create = function() {
        // assign id, used for original-order sorting
        this.id = this.layout.itemGUID++;
        Outlayer.Item.prototype._create.call(this);
        this.sortData = {};
    };

    Item.prototype.updateSortData = function() {
        if (this.isIgnored) {
            return;
        }
        // default sorters
        this.sortData.id = this.id;
        // for backward compatibility
        this.sortData['original-order'] = this.id;
        this.sortData.random = Math.random();
        // go thru getSortData obj and apply the sorters
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for (var key in getSortData) {
            var sorter = sorters[key];
            this.sortData[key] = sorter(this.element, this);
        }
    };

    var _destroy = Item.prototype.destroy;
    Item.prototype.destroy = function() {
        // call super
        _destroy.apply(this, arguments);
        // reset display, #741
        this.css({
            display: ''
        });
    };

    return Item;

}));

/**
 * Isotope LayoutMode
 */

(function(window, factory) {
    'use strict';
    // universal module definition

    if (typeof define == 'function' && define.amd) {
        // AMD
        define('isotope/js/layout-mode', [
                'get-size/get-size',
                'outlayer/outlayer'
            ],
            factory);
    } else if (typeof exports == 'object') {
        // CommonJS
        module.exports = factory(
            require('get-size'),
            require('outlayer')
        );
    } else {
        // browser global
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(
            window.getSize,
            window.Outlayer
        );
    }

}(window, function factory(getSize, Outlayer) {
    'use strict';

    // layout mode class
    function LayoutMode(isotope) {
        this.isotope = isotope;
        // link properties
        if (isotope) {
            this.options = isotope.options[this.namespace];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size;
        }
    }

    /**
     * some methods should just defer to default Outlayer method
     * and reference the Isotope instance as `this`
     **/
    (function() {
        var facadeMethods = [
            '_resetLayout',
            '_getItemLayoutPosition',
            '_manageStamp',
            '_getContainerSize',
            '_getElementOffset',
            'needsResizeLayout'
        ];

        for (var i = 0, len = facadeMethods.length; i < len; i++) {
            var methodName = facadeMethods[i];
            LayoutMode.prototype[methodName] = getOutlayerMethod(methodName);
        }

        function getOutlayerMethod(methodName) {
            return function() {
                return Outlayer.prototype[methodName].apply(this.isotope, arguments);
            };
        }
    })();

    // -----  ----- //

    // for horizontal layout modes, check vertical size
    LayoutMode.prototype.needsVerticalResizeLayout = function() {
        // don't trigger if size did not change
        var size = getSize(this.isotope.element);
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    };

    // ----- measurements ----- //

    LayoutMode.prototype._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
    };

    LayoutMode.prototype.getColumnWidth = function() {
        this.getSegmentSize('column', 'Width');
    };

    LayoutMode.prototype.getRowHeight = function() {
        this.getSegmentSize('row', 'Height');
    };

    /**
     * get columnWidth or rowHeight
     * segment: 'column' or 'row'
     * size 'Width' or 'Height'
     **/
    LayoutMode.prototype.getSegmentSize = function(segment, size) {
        var segmentName = segment + size;
        var outerSize = 'outer' + size;
        // columnWidth / outerWidth // rowHeight / outerHeight
        this._getMeasurement(segmentName, outerSize);
        // got rowHeight or columnWidth, we can chill
        if (this[segmentName]) {
            return;
        }
        // fall back to item of first element
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] = firstItemSize && firstItemSize[outerSize] ||
            // or size of container
            this.isotope.size['inner' + size];
    };

    LayoutMode.prototype.getFirstItemSize = function() {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize(firstItem.element);
    };

    // ----- methods that should reference isotope ----- //

    LayoutMode.prototype.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
    };

    LayoutMode.prototype.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size;
    };

    // -------------------------- create -------------------------- //

    LayoutMode.modes = {};

    LayoutMode.create = function(namespace, options) {

        function Mode() {
            LayoutMode.apply(this, arguments);
        }

        Mode.prototype = new LayoutMode();

        // default options
        if (options) {
            Mode.options = options;
        }

        Mode.prototype.namespace = namespace;
        // register in Isotope
        LayoutMode.modes[namespace] = Mode;

        return Mode;
    };

    return LayoutMode;

}));

/*!
 * Masonry v3.3.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

(function(window, factory) {
    'use strict';
    // universal module definition
    if (typeof define === 'function' && define.amd) {
        // AMD
        define('masonry/masonry', [
                'outlayer/outlayer',
                'get-size/get-size',
                'fizzy-ui-utils/utils'
            ],
            factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(
            require('outlayer'),
            require('get-size'),
            require('fizzy-ui-utils')
        );
    } else {
        // browser global
        window.Masonry = factory(
            window.Outlayer,
            window.getSize,
            window.fizzyUIUtils
        );
    }

}(window, function factory(Outlayer, getSize, utils) {



    // -------------------------- masonryDefinition -------------------------- //

    // create an Outlayer layout class
    var Masonry = Outlayer.create('masonry');

    Masonry.prototype._resetLayout = function() {
        this.getSize();
        this._getMeasurement('columnWidth', 'outerWidth');
        this._getMeasurement('gutter', 'outerWidth');
        this.measureColumns();

        // reset column Y
        var i = this.cols;
        this.colYs = [];
        while (i--) {
            this.colYs.push(0);
        }

        this.maxY = 0;
    };

    Masonry.prototype.measureColumns = function() {
        this.getContainerWidth();
        // if columnWidth is 0, default to outerWidth of first item
        if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            // columnWidth fall back to item of first element
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth ||
                // if first elem has no width, default to size of container
                this.containerWidth;
        }

        var columnWidth = this.columnWidth += this.gutter;

        // calculate columns
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        // fix rounding errors, typically with gutters
        var excess = columnWidth - containerWidth % columnWidth;
        // if overshoot is less than a pixel, round up, otherwise floor it
        var mathMethod = excess && excess < 1 ? 'round' : 'floor';
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
    };

    Masonry.prototype.getContainerWidth = function() {
        // container is parent if fit width
        var container = this.options.isFitWidth ? this.element.parentNode : this.element;
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
    };

    Masonry.prototype._getItemLayoutPosition = function(item) {
        item.getSize();
        // how many columns does this brick span
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
        // round if off by 1 pixel, otherwise use ceil
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);

        var colGroup = this._getColGroup(colSpan);
        // get the minimum Y value from the columns
        var minimumY = Math.min.apply(Math, colGroup);
        var shortColIndex = utils.indexOf(colGroup, minimumY);

        // position the brick
        var position = {
            x: this.columnWidth * shortColIndex,
            y: minimumY
        };

        // apply setHeight to necessary columns
        var setHeight = minimumY + item.size.outerHeight;
        var setSpan = this.cols + 1 - colGroup.length;
        for (var i = 0; i < setSpan; i++) {
            this.colYs[shortColIndex + i] = setHeight;
        }

        return position;
    };

    /**
     * @param {Number} colSpan - number of columns the element spans
     * @returns {Array} colGroup
     */
    Masonry.prototype._getColGroup = function(colSpan) {
        if (colSpan < 2) {
            // if brick spans only one column, use all the column Ys
            return this.colYs;
        }

        var colGroup = [];
        // how many different places could this brick fit horizontally
        var groupCount = this.cols + 1 - colSpan;
        // for each group potential horizontal position
        for (var i = 0; i < groupCount; i++) {
            // make an array of colY values for that one group
            var groupColYs = this.colYs.slice(i, i + colSpan);
            // and get the max value of the array
            colGroup[i] = Math.max.apply(Math, groupColYs);
        }
        return colGroup;
    };

    Masonry.prototype._manageStamp = function(stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        // get the columns that this stamp affects
        var firstX = this.options.isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        // lastCol should not go over if multiple of columnWidth #425
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        // set colYs to bottom of the stamp
        var stampMaxY = (this.options.isOriginTop ? offset.top : offset.bottom) +
            stampSize.outerHeight;
        for (var i = firstCol; i <= lastCol; i++) {
            this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
        }
    };

    Masonry.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
            height: this.maxY
        };

        if (this.options.isFitWidth) {
            size.width = this._getContainerFitWidth();
        }

        return size;
    };

    Masonry.prototype._getContainerFitWidth = function() {
        var unusedCols = 0;
        // count unused columns
        var i = this.cols;
        while (--i) {
            if (this.colYs[i] !== 0) {
                break;
            }
            unusedCols++;
        }
        // fit container to columns that have been used
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    };

    Masonry.prototype.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth !== this.containerWidth;
    };

    return Masonry;

}));

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * http://masonry.desandro.com
 */

(function(window, factory) {
    'use strict';
    // universal module definition
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('isotope/js/layout-modes/masonry', [
                '../layout-mode',
                'masonry/masonry'
            ],
            factory);
    } else if (typeof exports == 'object') {
        // CommonJS
        module.exports = factory(
            require('../layout-mode'),
            require('masonry-layout')
        );
    } else {
        // browser global
        factory(
            window.Isotope.LayoutMode,
            window.Masonry
        );
    }

}(window, function factory(LayoutMode, Masonry) {
    'use strict';

    // -------------------------- helpers -------------------------- //

    // extend objects
    function extend(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }

    // -------------------------- masonryDefinition -------------------------- //

    // create an Outlayer layout class
    var MasonryMode = LayoutMode.create('masonry');

    // save on to these methods
    var _getElementOffset = MasonryMode.prototype._getElementOffset;
    var layout = MasonryMode.prototype.layout;
    var _getMeasurement = MasonryMode.prototype._getMeasurement;

    // sub-class Masonry
    extend(MasonryMode.prototype, Masonry.prototype);

    // set back, as it was overwritten by Masonry
    MasonryMode.prototype._getElementOffset = _getElementOffset;
    MasonryMode.prototype.layout = layout;
    MasonryMode.prototype._getMeasurement = _getMeasurement;

    var measureColumns = MasonryMode.prototype.measureColumns;
    MasonryMode.prototype.measureColumns = function() {
        // set items, used if measuring first item
        this.items = this.isotope.filteredItems;
        measureColumns.call(this);
    };

    // HACK copy over isOriginLeft/Top options
    var _manageStamp = MasonryMode.prototype._manageStamp;
    MasonryMode.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft;
        this.options.isOriginTop = this.isotope.options.isOriginTop;
        _manageStamp.apply(this, arguments);
    };

    return MasonryMode;

}));

/**
 * fitRows layout mode
 */

(function(window, factory) {
    'use strict';
    // universal module definition
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('isotope/js/layout-modes/fit-rows', [
                '../layout-mode'
            ],
            factory);
    } else if (typeof exports == 'object') {
        // CommonJS
        module.exports = factory(
            require('../layout-mode')
        );
    } else {
        // browser global
        factory(
            window.Isotope.LayoutMode
        );
    }

}(window, function factory(LayoutMode) {
    'use strict';

    var FitRows = LayoutMode.create('fitRows');

    FitRows.prototype._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement('gutter', 'outerWidth');
    };

    FitRows.prototype._getItemLayoutPosition = function(item) {
        item.getSize();

        var itemWidth = item.size.outerWidth + this.gutter;
        // if this element cannot fit in the current row
        var containerWidth = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && itemWidth + this.x > containerWidth) {
            this.x = 0;
            this.y = this.maxY;
        }

        var position = {
            x: this.x,
            y: this.y
        };

        this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
        this.x += itemWidth;

        return position;
    };

    FitRows.prototype._getContainerSize = function() {
        return {
            height: this.maxY
        };
    };

    return FitRows;

}));

/**
 * vertical layout mode
 */

(function(window, factory) {
    'use strict';
    // universal module definition
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('isotope/js/layout-modes/vertical', [
                '../layout-mode'
            ],
            factory);
    } else if (typeof exports == 'object') {
        // CommonJS
        module.exports = factory(
            require('../layout-mode')
        );
    } else {
        // browser global
        factory(
            window.Isotope.LayoutMode
        );
    }

}(window, function factory(LayoutMode) {
    'use strict';

    var Vertical = LayoutMode.create('vertical', {
        horizontalAlignment: 0
    });

    Vertical.prototype._resetLayout = function() {
        this.y = 0;
    };

    Vertical.prototype._getItemLayoutPosition = function(item) {
        item.getSize();
        var x = (this.isotope.size.innerWidth - item.size.outerWidth) *
            this.options.horizontalAlignment;
        var y = this.y;
        this.y += item.size.outerHeight;
        return {
            x: x,
            y: y
        };
    };

    Vertical.prototype._getContainerSize = function() {
        return {
            height: this.y
        };
    };

    return Vertical;

}));

/*!
 * Isotope v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

(function(window, factory) {
    'use strict';
    // universal module definition

    if (typeof define == 'function' && define.amd) {
        // AMD
        define([
                'outlayer/outlayer',
                'get-size/get-size',
                'matches-selector/matches-selector',
                'fizzy-ui-utils/utils',
                'isotope/js/item',
                'isotope/js/layout-mode',
                // include default layout modes
                'isotope/js/layout-modes/masonry',
                'isotope/js/layout-modes/fit-rows',
                'isotope/js/layout-modes/vertical'
            ],
            function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
                return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
            });
    } else if (typeof exports == 'object') {
        // CommonJS
        module.exports = factory(
            window,
            require('outlayer'),
            require('get-size'),
            require('desandro-matches-selector'),
            require('fizzy-ui-utils'),
            require('./item'),
            require('./layout-mode'),
            // include default layout modes
            require('./layout-modes/masonry'),
            require('./layout-modes/fit-rows'),
            require('./layout-modes/vertical')
        );
    } else {
        // browser global
        window.Isotope = factory(
            window,
            window.Outlayer,
            window.getSize,
            window.matchesSelector,
            window.fizzyUIUtils,
            window.Isotope.Item,
            window.Isotope.LayoutMode
        );
    }

}(window, function factory(window, Outlayer, getSize, matchesSelector, utils,
    Item, LayoutMode) {



    // -------------------------- vars -------------------------- //

    var jQuery = window.jQuery;

    // -------------------------- helpers -------------------------- //

    var trim = String.prototype.trim ?
        function(str) {
            return str.trim();
        } :
        function(str) {
            return str.replace(/^\s+|\s+$/g, '');
        };

    var docElem = document.documentElement;

    var getText = docElem.textContent ?
        function(elem) {
            return elem.textContent;
        } :
        function(elem) {
            return elem.innerText;
        };

    // -------------------------- isotopeDefinition -------------------------- //

    // create an Outlayer layout class
    var Isotope = Outlayer.create('isotope', {
        layoutMode: "masonry",
        isJQueryFiltering: true,
        sortAscending: true
    });

    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;

    Isotope.prototype._create = function() {
        this.itemGUID = 0;
        // functions that sort items
        this._sorters = {};
        this._getSorters();
        // call super
        Outlayer.prototype._create.call(this);

        // create layout modes
        this.modes = {};
        // start filteredItems with all items
        this.filteredItems = this.items;
        // keep of track of sortBys
        this.sortHistory = ['original-order'];
        // create from registered layout modes
        for (var name in LayoutMode.modes) {
            this._initLayoutMode(name);
        }
    };

    Isotope.prototype.reloadItems = function() {
        // reset item ID counter
        this.itemGUID = 0;
        // call super
        Outlayer.prototype.reloadItems.call(this);
    };

    Isotope.prototype._itemize = function() {
        var items = Outlayer.prototype._itemize.apply(this, arguments);
        // assign ID for original-order
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            item.id = this.itemGUID++;
        }
        this._updateItemsSortData(items);
        return items;
    };


    // -------------------------- layout -------------------------- //

    Isotope.prototype._initLayoutMode = function(name) {
        var Mode = LayoutMode.modes[name];
        // set mode options
        // HACK extend initial options, back-fill in default options
        var initialOpts = this.options[name] || {};
        this.options[name] = Mode.options ?
            utils.extend(Mode.options, initialOpts) : initialOpts;
        // init layout mode instance
        this.modes[name] = new Mode(this);
    };


    Isotope.prototype.layout = function() {
        // if first time doing layout, do all magic
        if (!this._isLayoutInited && this.options.isInitLayout) {
            this.arrange();
            return;
        }
        this._layout();
    };

    // private method to be used in layout() & magic()
    Isotope.prototype._layout = function() {
        // don't animate first layout
        var isInstant = this._getIsInstant();
        // layout flow
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, isInstant);

        // flag for initalized
        this._isLayoutInited = true;
    };

    // filter + sort + layout
    Isotope.prototype.arrange = function(opts) {
        // set any options pass
        this.option(opts);
        this._getIsInstant();
        // filter, sort, and layout

        // filter
        var filtered = this._filter(this.items);
        this.filteredItems = filtered.matches;

        var _this = this;

        function hideReveal() {
            _this.reveal(filtered.needReveal);
            _this.hide(filtered.needHide);
        }

        this._bindArrangeComplete();

        if (this._isInstant) {
            this._noTransition(hideReveal);
        } else {
            hideReveal();
        }

        this._sort();
        this._layout();
    };
    // alias to _init for main plugin method
    Isotope.prototype._init = Isotope.prototype.arrange;

    // HACK
    // Don't animate/transition first layout
    // Or don't animate/transition other layouts
    Isotope.prototype._getIsInstant = function() {
        var isInstant = this.options.isLayoutInstant !== undefined ?
            this.options.isLayoutInstant : !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant;
    };

    // listen for layoutComplete, hideComplete and revealComplete
    // to trigger arrangeComplete
    Isotope.prototype._bindArrangeComplete = function() {
        // listen for 3 events to trigger arrangeComplete
        var isLayoutComplete, isHideComplete, isRevealComplete;
        var _this = this;

        function arrangeParallelCallback() {
            if (isLayoutComplete && isHideComplete && isRevealComplete) {
                _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
            }
        }
        this.once('layoutComplete', function() {
            isLayoutComplete = true;
            arrangeParallelCallback();
        });
        this.once('hideComplete', function() {
            isHideComplete = true;
            arrangeParallelCallback();
        });
        this.once('revealComplete', function() {
            isRevealComplete = true;
            arrangeParallelCallback();
        });
    };

    // -------------------------- filter -------------------------- //

    Isotope.prototype._filter = function(items) {
        var filter = this.options.filter;
        filter = filter || '*';
        var matches = [];
        var hiddenMatched = [];
        var visibleUnmatched = [];

        var test = this._getFilterTest(filter);

        // test each item
        for (var i = 0, len = items.length; i < len; i++) {
            var item = items[i];
            if (item.isIgnored) {
                continue;
            }
            // add item to either matched or unmatched group
            var isMatched = test(item);
            // item.isFilterMatched = isMatched;
            // add to matches if its a match
            if (isMatched) {
                matches.push(item);
            }
            // add to additional group if item needs to be hidden or revealed
            if (isMatched && item.isHidden) {
                hiddenMatched.push(item);
            } else if (!isMatched && !item.isHidden) {
                visibleUnmatched.push(item);
            }
        }

        // return collections of items to be manipulated
        return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched
        };
    };

    // get a jQuery, function, or a matchesSelector test given the filter
    Isotope.prototype._getFilterTest = function(filter) {
        if (jQuery && this.options.isJQueryFiltering) {
            // use jQuery
            return function(item) {
                return jQuery(item.element).is(filter);
            };
        }
        if (typeof filter == 'function') {
            // use filter as function
            return function(item) {
                return filter(item.element);
            };
        }
        // default, use filter as selector string
        return function(item) {
            return matchesSelector(item.element, filter);
        };
    };

    // -------------------------- sorting -------------------------- //

    /**
     * @params {Array} elems
     * @public
     */
    Isotope.prototype.updateSortData = function(elems) {
        // get items
        var items;
        if (elems) {
            elems = utils.makeArray(elems);
            items = this.getItems(elems);
        } else {
            // update all items if no elems provided
            items = this.items;
        }

        this._getSorters();
        this._updateItemsSortData(items);
    };

    Isotope.prototype._getSorters = function() {
        var getSortData = this.options.getSortData;
        for (var key in getSortData) {
            var sorter = getSortData[key];
            this._sorters[key] = mungeSorter(sorter);
        }
    };

    /**
     * @params {Array} items - of Isotope.Items
     * @private
     */
    Isotope.prototype._updateItemsSortData = function(items) {
        // do not update if no items
        var len = items && items.length;

        for (var i = 0; len && i < len; i++) {
            var item = items[i];
            item.updateSortData();
        }
    };

    // ----- munge sorter ----- //

    // encapsulate this, as we just need mungeSorter
    // other functions in here are just for munging
    var mungeSorter = (function() {
        // add a magic layer to sorters for convienent shorthands
        // `.foo-bar` will use the text of .foo-bar querySelector
        // `[foo-bar]` will use attribute
        // you can also add parser
        // `.foo-bar parseInt` will parse that as a number
        function mungeSorter(sorter) {
            // if not a string, return function or whatever it is
            if (typeof sorter != 'string') {
                return sorter;
            }
            // parse the sorter string
            var args = trim(sorter).split(' ');
            var query = args[0];
            // check if query looks like [an-attribute]
            var attrMatch = query.match(/^\[(.+)\]$/);
            var attr = attrMatch && attrMatch[1];
            var getValue = getValueGetter(attr, query);
            // use second argument as a parser
            var parser = Isotope.sortDataParsers[args[1]];
            // parse the value, if there was a parser
            sorter = parser ? function(elem) {
                    return elem && parser(getValue(elem));
                } :
                // otherwise just return value
                function(elem) {
                    return elem && getValue(elem);
                };

            return sorter;
        }

        // get an attribute getter, or get text of the querySelector
        function getValueGetter(attr, query) {
            var getValue;
            // if query looks like [foo-bar], get attribute
            if (attr) {
                getValue = function(elem) {
                    return elem.getAttribute(attr);
                };
            } else {
                // otherwise, assume its a querySelector, and get its text
                getValue = function(elem) {
                    var child = elem.querySelector(query);
                    return child && getText(child);
                };
            }
            return getValue;
        }

        return mungeSorter;
    })();

    // parsers used in getSortData shortcut strings
    Isotope.sortDataParsers = {
        'parseInt': function(val) {
            return parseInt(val, 10);
        },
        'parseFloat': function(val) {
            return parseFloat(val);
        }
    };

    // ----- sort method ----- //

    // sort filteredItem order
    Isotope.prototype._sort = function() {
        var sortByOpt = this.options.sortBy;
        if (!sortByOpt) {
            return;
        }
        // concat all sortBy and sortHistory
        var sortBys = [].concat.apply(sortByOpt, this.sortHistory);
        // sort magic
        var itemSorter = getItemSorter(sortBys, this.options.sortAscending);
        this.filteredItems.sort(itemSorter);
        // keep track of sortBy History
        if (sortByOpt != this.sortHistory[0]) {
            // add to front, oldest goes in last
            this.sortHistory.unshift(sortByOpt);
        }
    };

    // returns a function used for sorting
    function getItemSorter(sortBys, sortAsc) {
        return function sorter(itemA, itemB) {
            // cycle through all sortKeys
            for (var i = 0, len = sortBys.length; i < len; i++) {
                var sortBy = sortBys[i];
                var a = itemA.sortData[sortBy];
                var b = itemB.sortData[sortBy];
                if (a > b || a < b) {
                    // if sortAsc is an object, use the value given the sortBy key
                    var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                    var direction = isAscending ? 1 : -1;
                    return (a > b ? 1 : -1) * direction;
                }
            }
            return 0;
        };
    }

    // -------------------------- methods -------------------------- //

    // get layout mode
    Isotope.prototype._mode = function() {
        var layoutMode = this.options.layoutMode;
        var mode = this.modes[layoutMode];
        if (!mode) {
            // TODO console.error
            throw new Error('No layout mode: ' + layoutMode);
        }
        // HACK sync mode's options
        // any options set after init for layout mode need to be synced
        mode.options = this.options[layoutMode];
        return mode;
    };

    Isotope.prototype._resetLayout = function() {
        // trigger original reset layout
        Outlayer.prototype._resetLayout.call(this);
        this._mode()._resetLayout();
    };

    Isotope.prototype._getItemLayoutPosition = function(item) {
        return this._mode()._getItemLayoutPosition(item);
    };

    Isotope.prototype._manageStamp = function(stamp) {
        this._mode()._manageStamp(stamp);
    };

    Isotope.prototype._getContainerSize = function() {
        return this._mode()._getContainerSize();
    };

    Isotope.prototype.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
    };

    // -------------------------- adding & removing -------------------------- //

    // HEADS UP overwrites default Outlayer appended
    Isotope.prototype.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        // filter, layout, reveal new items
        var filteredItems = this._filterRevealAdded(items);
        // add to filteredItems
        this.filteredItems = this.filteredItems.concat(filteredItems);
    };

    // HEADS UP overwrites default Outlayer prepended
    Isotope.prototype.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        // start new layout
        this._resetLayout();
        this._manageStamps();
        // filter, layout, reveal new items
        var filteredItems = this._filterRevealAdded(items);
        // layout previous items
        this.layoutItems(this.filteredItems);
        // add to items and filteredItems
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items);
    };

    Isotope.prototype._filterRevealAdded = function(items) {
        var filtered = this._filter(items);
        this.hide(filtered.needHide);
        // reveal all new items
        this.reveal(filtered.matches);
        // layout new items, no transition
        this.layoutItems(filtered.matches, true);
        return filtered.matches;
    };

    /**
     * Filter, sort, and layout newly-appended item elements
     * @param {Array or NodeList or Element} elems
     */
    Isotope.prototype.insert = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        // append item elements
        var i, item;
        var len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i];
            this.element.appendChild(item.element);
        }
        // filter new stuff
        var filteredInsertItems = this._filter(items).matches;
        // set flag
        for (i = 0; i < len; i++) {
            items[i].isLayoutInstant = true;
        }
        this.arrange();
        // reset flag
        for (i = 0; i < len; i++) {
            delete items[i].isLayoutInstant;
        }
        this.reveal(filteredInsertItems);
    };

    var _remove = Isotope.prototype.remove;
    Isotope.prototype.remove = function(elems) {
        elems = utils.makeArray(elems);
        var removeItems = this.getItems(elems);
        // do regular thing
        _remove.call(this, elems);
        // bail if no items to remove
        var len = removeItems && removeItems.length;
        if (!len) {
            return;
        }
        // remove elems from filteredItems
        for (var i = 0; i < len; i++) {
            var item = removeItems[i];
            // remove item from collection
            utils.removeFrom(this.filteredItems, item);
        }
    };

    Isotope.prototype.shuffle = function() {
        // update random sortData
        for (var i = 0, len = this.items.length; i < len; i++) {
            var item = this.items[i];
            item.sortData.random = Math.random();
        }
        this.options.sortBy = 'random';
        this._sort();
        this._layout();
    };

    /**
     * trigger fn without transition
     * kind of hacky to have this in the first place
     * @param {Function} fn
     * @returns ret
     * @private
     */
    Isotope.prototype._noTransition = function(fn) {
        // save transitionDuration before disabling
        var transitionDuration = this.options.transitionDuration;
        // disable transition
        this.options.transitionDuration = 0;
        // do it
        var returnValue = fn.call(this);
        // re-enable transition for reveal
        this.options.transitionDuration = transitionDuration;
        return returnValue;
    };

    // ----- helper methods ----- //

    /**
     * getter method for getting filtered item elements
     * @returns {Array} elems - collection of item elements
     */
    Isotope.prototype.getFilteredItemElements = function() {
        var elems = [];
        for (var i = 0, len = this.filteredItems.length; i < len; i++) {
            elems.push(this.filteredItems[i].element);
        }
        return elems;
    };

    // -----  ----- //

    return Isotope;

}));


/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function f(e) {
            this.img = e
        }

        function c(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), f.prototype = new t, f.prototype.check = function() {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, f.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return c.prototype = new t, c.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, c.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, c.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, c.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });