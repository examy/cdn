!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self)["frappeCharts2"] = e()
}(this, (function () {
    "use strict";

    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(e)
    }

    function e(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function i(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && r(t, e)
    }

    function s(t) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function r(t, e) {
        return (r = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function o(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function l(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                }))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, i = s(t);
            if (e) {
                var a = s(this).constructor;
                n = Reflect.construct(i, arguments, a)
            } else n = i.apply(this, arguments);
            return o(this, n)
        }
    }

    function c(t, e, n) {
        return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var i = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t));) ;
                return t
            }(t, e);
            if (i) {
                var a = Object.getOwnPropertyDescriptor(i, e);
                return a.get ? a.get.call(n) : a.value
            }
        })(t, e, n || t)
    }

    function u(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var n = [], i = !0, a = !1, s = void 0;
            try {
                for (var r, o = t[Symbol.iterator](); !(i = (r = o.next()).done) && (n.push(r.value), !e || n.length !== e); i = !0) ;
            } catch (t) {
                a = !0, s = t
            } finally {
                try {
                    i || null == o.return || o.return()
                } finally {
                    if (a) throw s
                }
            }
            return n
        }(t, e) || d(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function h(t) {
        return function (t) {
            if (Array.isArray(t)) return f(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || d(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(t, e) {
        if (t) {
            if ("string" == typeof t) return f(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
        }
    }

    function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    function p(t, e) {
        return "string" == typeof t ? (e || document).querySelector(t) : t || null
    }

    function v(t) {
        var e = t.getBoundingClientRect();
        return {
            top: e.top + (document.documentElement.scrollTop || document.body.scrollTop),
            left: e.left + (document.documentElement.scrollLeft || document.body.scrollLeft)
        }
    }

    function g(t) {
        return null === t.offsetParent
    }

    function m(t) {
        var e = t.getBoundingClientRect();
        return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
    }

    p.create = function (e, n) {
        var i = document.createElement(e);
        for (var a in n) {
            var s = n[a];
            if ("inside" === a) p(s).appendChild(i); else if ("around" === a) {
                var r = p(s);
                r.parentNode.insertBefore(i, r), i.appendChild(r)
            } else "styles" === a ? "object" === t(s) && Object.keys(s).map((function (t) {
                i.style[t] = s[t]
            })) : a in i ? i[a] = s : i.setAttribute(a, s)
        }
        return i
    };
    var y = {
        margins: {top: 0, bottom: 0, left: 0, right: 0},
        paddings: {top: 0, bottom: 0, left: 0, right: 0},
        baseHeight: 50,
        titleHeight: 0,
        legendHeight: 0,
        titleFontSize: 7
    };

    function b(t) {
        return t.titleHeight + t.margins.top + t.paddings.top
    }

    function x(t) {
        return t.margins.left + t.paddings.left
    }

    function k(t) {
        return t.margins.top + t.margins.bottom + t.paddings.top + t.paddings.bottom + t.titleHeight + t.legendHeight
    }

    function w(t) {
        return t.margins.left + t.margins.right + t.paddings.left + t.paddings.right
    }

    var A = ["pink", "blue", "green", "grey", "red", "yellow", "purple", "teal", "cyan", "orange"], L = {
        bar: A,
        line: A,
        pie: A,
        percentage: A,
        heatmap: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"],
        donut: A
    }, D = Math.PI / 180, M = function () {
        function t(n) {
            var i = n.parent, a = void 0 === i ? null : i, s = n.colors, r = void 0 === s ? [] : s;
            e(this, t), this.parent = a, this.colors = r, this.titleName = "", this.titleValue = "", this.listValues = [], this.titleValueFirst = 0, this.x = 0, this.y = 0, this.top = 0, this.left = 0, this.setup()
        }

        return i(t, [{
            key: "setup", value: function () {
                this.makeTooltip()
            }
        }, {
            key: "refresh", value: function () {
                this.fill(), this.calcPosition()
            }
        }, {
            key: "makeTooltip", value: function () {
                var t = this;
                this.container = p.create("div", {
                    inside: this.parent,
                    className: "graph-svg-tip-v2 comparison",
                    innerHTML: '<span class="title"></span>\n\t\t\t\t<ul class="data-point-list"></ul>\n\t\t\t\t<div class="svg-pointer"></div>'
                }), this.hideTip(), this.title = this.container.querySelector(".title"), this.list = this.container.querySelector(".data-point-list"), this.dataPointList = this.container.querySelector(".data-point-list"), this.parent.addEventListener("mouseleave", (function () {
                    t.hideTip()
                }))
            }
        }, {
            key: "fill", value: function () {
                var t, e = this;
                this.index && this.container.setAttribute("data-point-index", this.index), t = this.titleValueFirst ? "<strong>".concat(this.titleValue, "</strong>").concat(this.titleName) : "".concat(this.titleName, "<strong>").concat(this.titleValue, "</strong>"), this.listValues.length > 4 ? this.list.classList.add("tooltip-grid") : this.list.classList.remove("tooltip-grid"), this.title.innerHTML = t, this.dataPointList.innerHTML = "", this.listValues.map((function (t, n) {
                    var i = e.colors[n] || "black", a = 0 === t.formatted || t.formatted ? t.formatted : t.value,
                        s = p.create("li", {innerHTML: '<div class="tooltip-legend" style="background: '.concat(i, ';"></div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class="tooltip-value">').concat(0 === a || a ? a : "", '</div>\n\t\t\t\t\t\t<div class="tooltip-label">').concat(t.title ? t.title : "", "</div>\n\t\t\t\t\t</div>")});
                    e.dataPointList.appendChild(s)
                }))
            }
        }, {
            key: "calcPosition", value: function () {
                var t = this.container.offsetWidth;
                this.top = this.y - this.container.offsetHeight - 7.48, this.left = this.x - t / 2;
                var e = this.parent.offsetWidth - t, n = this.container.querySelector(".svg-pointer");
                if (this.left < 0) n.style.left = "calc(50% - ".concat(-1 * this.left, "px)"), this.left = 0; else if (this.left > e) {
                    var i = this.left - e, a = "calc(50% + ".concat(i, "px)");
                    n.style.left = a, this.left = e
                } else n.style.left = "50%"
            }
        }, {
            key: "setValues", value: function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
                this.titleName = n.name, this.titleValue = n.value, this.listValues = i, this.x = t, this.y = e, this.titleValueFirst = n.valueFirst || 0, this.index = a, this.refresh()
            }
        }, {
            key: "hideTip", value: function () {
                this.container.style.top = "0px", this.container.style.left = "0px", this.container.style.opacity = "0"
            }
        }, {
            key: "showTip", value: function () {
                this.container.style.top = this.top + "px", this.container.style.left = this.left + "px", this.container.style.opacity = "1"
            }
        }]), t
    }();

    function T(t) {
        return parseFloat(t.toFixed(2))
    }

    function C(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        n || (n = i ? t[0] : t[t.length - 1]);
        var a = new Array(Math.abs(e)).fill(n);
        return t = i ? a.concat(t) : t.concat(a)
    }

    function P(t, e) {
        return (t + "").length * e
    }

    function N(t, e) {
        return {x: Math.sin(t * D) * e, y: Math.cos(t * D) * e}
    }

    function E(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return !Number.isNaN(t) && (void 0 !== t && (!!Number.isFinite(t) && !(e && t < 0)))
    }

    function O(t) {
        return Number(Math.round(t + "e4") + "e-4")
    }

    function S(e) {
        var n, i, a;
        if (e instanceof Date) return new Date(e.getTime());
        if ("object" !== t(e) || null === e) return e;
        for (a in n = Array.isArray(e) ? [] : {}, e) i = e[a], n[a] = S(i);
        return n
    }

    function F(t, e) {
        var n, i;
        return t <= e ? (n = e - t, i = t) : (n = t - e, i = e), [n, i]
    }

    function z(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length - t.length;
        return n > 0 ? t = C(t, n) : e = C(e, n), [t, e]
    }

    function H(t, e) {
        if (t) return t.length > e ? t.slice(0, e - 3) + "..." : t
    }

    function R(t) {
        var e;
        if ("number" == typeof t) e = t; else if ("string" == typeof t && (e = Number(t), Number.isNaN(e))) return t;
        var n = Math.floor(Math.log10(Math.abs(e)));
        if (n <= 2) return e;
        var i = Math.floor(n / 3), a = Math.pow(10, n - 3 * i) * +(e / Math.pow(10, n)).toFixed(1);
        return Math.round(100 * a) / 100 + " " + ["", "K", "M", "B", "T"][i]
    }

    function W(t, e) {
        for (var n = [], i = 0; i < t.length; i++) n.push([t[i], e[i]]);
        var a = function (t, e, n, i) {
            var a, s, r, o, l = (a = e || t, r = (s = n || t)[0] - a[0], o = s[1] - a[1], {
                length: Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2)),
                angle: Math.atan2(o, r)
            }), c = l.angle + (i ? Math.PI : 0), u = .2 * l.length;
            return [t[0] + Math.cos(c) * u, t[1] + Math.sin(c) * u]
        };
        return function (t, e) {
            return t.reduce((function (t, n, i, a) {
                return 0 === i ? "".concat(n[0], ",").concat(n[1]) : "".concat(t, " ").concat(e(n, i, a))
            }), "")
        }(n, (function (t, e, n) {
            var i = a(n[e - 1], n[e - 2], t), s = a(t, n[e - 1], n[e + 1], !0);
            return "C ".concat(i[0], ",").concat(i[1], " ").concat(s[0], ",").concat(s[1], " ").concat(t[0], ",").concat(t[1])
        }))
    }

    function j(t, e) {
        return "string" == typeof t ? (e || document).querySelector(t) : t || null
    }

    function I(e, n) {
        var i = document.createElementNS("http://www.w3.org/2000/svg", e);
        for (var a in n) {
            var s = n[a];
            if ("inside" === a) j(s).appendChild(i); else if ("around" === a) {
                var r = j(s);
                r.parentNode.insertBefore(i, r), i.appendChild(r)
            } else "styles" === a ? "object" === t(s) && Object.keys(s).map((function (t) {
                i.style[t] = s[t]
            })) : ("className" === a && (a = "class"), "innerHTML" === a ? i.textContent = s : i.setAttribute(a, s))
        }
        return i
    }

    function Y(t, e) {
        return I("linearGradient", {inside: t, id: e, x1: 0, x2: 0, y1: 0, y2: 1})
    }

    function B(t, e, n, i) {
        return I("stop", {inside: t, style: "stop-color: ".concat(n), offset: e, "stop-opacity": i})
    }

    function V(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            i = {className: t, transform: e};
        return n && (i.inside = n), I("g", i)
    }

    function U(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none",
            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2;
        return I("path", {className: e, d: t, styles: {stroke: n, fill: i, "stroke-width": a}})
    }

    function _(t, e, n, i) {
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, r = n.x + t.x, o = n.y + t.y,
            l = n.x + e.x, c = n.y + e.y;
        return "M".concat(n.x, " ").concat(n.y, "\n\t\tL").concat(r, " ").concat(o, "\n\t\tA ").concat(i, " ").concat(i, " 0 ").concat(s, " ").concat(a ? 1 : 0, "\n\t\t").concat(l, " ").concat(c, " z")
    }

    function q(t, e, n, i) {
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, r = n.x + t.x, o = n.y + t.y,
            l = n.x + e.x, c = 2 * n.y, u = n.y + e.y;
        return "M".concat(n.x, " ").concat(n.y, "\n\t\tL").concat(r, " ").concat(o, "\n\t\tA ").concat(i, " ").concat(i, " 0 ").concat(s, " ").concat(a ? 1 : 0, "\n\t\t").concat(l, " ").concat(c, " z\n\t\tL").concat(r, " ").concat(c, "\n\t\tA ").concat(i, " ").concat(i, " 0 ").concat(s, " ").concat(a ? 1 : 0, "\n\t\t").concat(l, " ").concat(u, " z")
    }

    function G(t, e, n, i) {
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, r = n.x + t.x, o = n.y + t.y,
            l = n.x + e.x, c = n.y + e.y;
        return "M".concat(r, " ").concat(o, "\n\t\tA ").concat(i, " ").concat(i, " 0 ").concat(s, " ").concat(a ? 1 : 0, "\n\t\t").concat(l, " ").concat(c)
    }

    function X(t, e, n, i) {
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, r = n.x + t.x, o = n.y + t.y,
            l = n.x + e.x, c = 2 * i + o, u = n.y + t.y;
        return "M".concat(r, " ").concat(o, "\n\t\tA ").concat(i, " ").concat(i, " 0 ").concat(s, " ").concat(a ? 1 : 0, "\n\t\t").concat(l, " ").concat(c, "\n\t\tM").concat(r, " ").concat(c, "\n\t\tA ").concat(i, " ").concat(i, " 0 ").concat(s, " ").concat(a ? 1 : 0, "\n\t\t").concat(l, " ").concat(u)
    }

    function J(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = "path-fill-gradient-" + e + "-" + (n ? "lighter" : "default"), a = Y(t, i), s = [1, .6, .2];
        return n && (s = [.4, .05, 0]), B(a, "0%", e, s[0]), B(a, "50%", e, s[1]), B(a, "100%", e, s[2]), i
    }

    function K(x, width, height) {
        var radius = height / 4;
        var mid = height / 2;
        var xOffset = width - radius;

        return `M${x},0 h${xOffset} q${radius},0 ${radius},${radius} v${mid} q0,${radius} -${radius},${radius} h-${xOffset} z`;
    }
    // function K(t, e, n) {
    //     var i = n / 4, a = e - i;
    //     return "M".concat(t, ",0 h").concat(a, " q").concat(i, ",0 ").concat(i, ",").concat(i, " q0,").concat(i, " -").concat(i, ",").concat(i, " h-").concat(a, " v").concat(n, "z")
    // }
    function createRectanglePath(props) {
        const {
            width,
            height,
            topLeftRadius,
            topRightRadius,
            bottomRightRadius,
            bottomLeftRadius,
        } = props;

        return [
            // Move to the start point, considering top left radius
            `M ${topLeftRadius} 0`,
            // Draw a horizontal line to the top right corner, considering top right radius
            `H ${width - topRightRadius}`,
            // Draw an arc for top right corner if radius is greater than 0
            topRightRadius > 0
                ? `A ${topRightRadius} ${topRightRadius} 0 0 1 ${width} ${topRightRadius}`
                : null,
            // Draw a vertical line to the bottom right corner, considering bottom right radius
            `V ${height - bottomRightRadius}`,
            // Draw an arc for bottom right corner if radius is greater than 0
            bottomRightRadius > 0
                ? `A ${bottomRightRadius} ${bottomRightRadius} 0 0 1 ${
                    width - bottomRightRadius
                } ${height}`
                : null,
            // Draw a horizontal line to the bottom left corner, considering bottom left radius
            `H ${bottomLeftRadius}`,
            // Draw an arc for bottom left corner if radius is greater than 0
            bottomLeftRadius > 0
                ? `A ${bottomLeftRadius} ${bottomLeftRadius} 0 0 1 0 ${
                    height - bottomLeftRadius
                }`
                : null,
            // Draw a vertical line to the top left corner, considering top left radius
            `V ${topLeftRadius}`,
            // Draw an arc for top left corner if radius is greater than 0
            topLeftRadius > 0
                ? `A ${topLeftRadius} ${topLeftRadius} 0 0 1 ${topLeftRadius} 0`
                : null,
            // Close the path
            'Z',
        ]
            .filter((v) => v != null)
            .join(' ');
    }

    function $ddd(x, width, height) {
        var radius = height / 4;

        var xOffset = width - radius;

        // Extract the part of the function that is specific to the top left corner
        var topLeftCorner = `M ${x + radius},0 h${xOffset} v${height} h-${xOffset}`;

        return topLeftCorner + ` q-${radius}, 0 -${radius},-${radius} q0,-${radius} ${radius},-${radius}z`;
    }

    function $(x, width, height) {
        var radius = height / 4;
        const node = {
            width: width,
            height: height,
            bottomLeftRadius: radius,
            bottomRightRadius: 0,
            topLeftRadius: radius,
            topRightRadius: 0
        };

        const svgPath = createRectanglePath(node);
        return svgPath;
        var radius = height / 4;
        var mid = height / 2;
        var xOffset = width - radius;
        var topLeftRadius = x + radius;
        const topLeftPath = [
            // Move to the start point, considering top left radius
            `M ${topLeftRadius} 0`,
            // Draw a horizontal line to the top right corner, considering top right radius
            `H ${width - 0}`,
        ];

        return topLeftPath.concat([
            // Draw a vertical line to the bottom left corner, considering bottom left radius
            `V ${height}`,
            // Draw an arc for bottom left corner if radius is greater than 0
            `q${radius},0 ${radius},${radius}`,
            `V ${mid}`,
            // Draw an arc for bottom left corner if radius is greater than 0
            `q0,${radius} -${radius},${radius}`,
            // Close the path
            'Z',
        ]);
    }

    function $fshds(x, width, height) {
        var radius = height / 4;
        var mid = height / 2;
        var xOffset = width - radius;

        return `M${x + radius},0 h${xOffset} v${height} h-${xOffset} q-${radius}, 0 -${radius},-${radius} q0,-${radius} ${radius},-${radius}z`;
    }

    // function $(t, e, n) {
    //     var i = n / 2, a = e - i;
    //     return "M".concat(t + i, ",0 h").concat(a, " v").concat(n, " h-").concat(a, " q-").concat(i, ", 0 -").concat(i, ",-").concat(i, " q0,-").concat(i, " ").concat(i, ",-").concat(i, "z")
    // }

    function Q(t, e, n, i, a) {
        var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "none",
            r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {},
            o = {className: t, x: e, y: n, width: i, height: i, rx: a, fill: s};
        return Object.keys(r).map((function (t) {
            o[t] = r[t]
        })), I("rect", o)
    }

    function Z(t, e, n, i) {
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none",
            s = arguments.length > 5 ? arguments[5] : void 0, r = arguments.length > 6 ? arguments[6] : void 0,
            o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
            l = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        o || (o = 10);
        var c = {className: "legend-dot", x: 0, y: 4 - n, height: n, width: n, rx: i, fill: a}, u = I("text", {
            className: "legend-dataset-label",
            x: n,
            y: 0,
            dx: o + "px",
            dy: o / 3 + "px",
            "font-size": 1.6 * o + "px",
            "text-anchor": "start",
            innerHTML: s = l ? H(s, 18) : s
        }), h = null;
        r && (h = I("text", {
            className: "legend-dataset-value",
            x: n,
            y: 20,
            dx: "10px",
            dy: 10 / 3 + "px",
            "font-size": "12px",
            "text-anchor": "start",
            innerHTML: r
        }));
        var d = I("g", {transform: "translate(".concat(t, ", ").concat(e, ")")});
        return d.appendChild(I("rect", c)), d.appendChild(u), r && h && d.appendChild(h), d
    }

    function tt(t, e, n, i) {
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, s = a.fontSize || 10,
            r = void 0 !== a.dy ? a.dy : s / 2, o = a.fill || "var(--charts-label-color)", l = a.textAnchor || "start";
        return I("text", {
            className: t,
            x: e,
            y: n,
            dy: r + "px",
            "font-size": s + "px",
            fill: o,
            "text-anchor": l,
            innerHTML: i
        })
    }

    function et(t, e, n, i) {
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, s = I("line", {
            className: "line-vertical " + a.className,
            x1: 0,
            x2: 0,
            y1: n,
            y2: i,
            styles: {stroke: a.stroke}
        }), r = I("text", {
            x: 0,
            y: n > i ? n + 4 : n - 4 - 10,
            dy: "10px",
            "font-size": "10px",
            "text-anchor": "middle",
            innerHTML: e + ""
        }), o = I("g", {transform: "translate(".concat(t, ", 0)")});
        return o.appendChild(s), o.appendChild(r), o
    }

    function nt(t, e, n, i) {
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        a.lineType || (a.lineType = ""), a.shortenNumbers && (e = R(e));
        var s = "line-horizontal " + a.className + ("dashed" === a.lineType ? "dashed" : ""),
            r = I("line", {className: s, x1: n, x2: i, y1: 0, y2: 0, styles: {stroke: a.stroke}}), o = I("text", {
                x: n < i ? n - 4 : n + 4,
                y: 0,
                dy: "3px",
                "font-size": "10px",
                "text-anchor": n < i ? "end" : "start",
                innerHTML: e + ""
            }), l = I("g", {transform: "translate(0, ".concat(t, ")"), "stroke-opacity": 1});
        return 0 !== o && "0" !== o || (l.style.stroke = "rgba(27, 31, 35, 0.6)"), l.appendChild(r), l.appendChild(o), l
    }

    var it = {
        bar: function (t) {
            var e;
            "rect" !== t.nodeName && (e = t.getAttribute("transform"), t = t.childNodes[0]);
            var n = t.cloneNode();
            return n.style.fill = "#000000", n.style.opacity = "0.4", e && n.setAttribute("transform", e), n
        }, dot: function (t) {
            var e;
            "circle" !== t.nodeName && (e = t.getAttribute("transform"), t = t.childNodes[0]);
            var n = t.cloneNode(), i = t.getAttribute("r"), a = t.getAttribute("fill");
            return n.setAttribute("r", parseInt(i) + 4), n.setAttribute("fill", a), n.style.opacity = "0.6", e && n.setAttribute("transform", e), n
        }, heat_square: function (t) {
            var e;
            "circle" !== t.nodeName && (e = t.getAttribute("transform"), t = t.childNodes[0]);
            var n = t.cloneNode(), i = t.getAttribute("r"), a = t.getAttribute("fill");
            return n.setAttribute("r", parseInt(i) + 4), n.setAttribute("fill", a), n.style.opacity = "0.6", e && n.setAttribute("transform", e), n
        }
    }, at = {
        bar: function (t, e) {
            var n;
            "rect" !== t.nodeName && (n = t.getAttribute("transform"), t = t.childNodes[0]);
            var i = ["x", "y", "width", "height"];
            Object.values(t.attributes).filter((function (t) {
                return i.includes(t.name) && t.specified
            })).map((function (t) {
                e.setAttribute(t.name, t.nodeValue)
            })), n && e.setAttribute("transform", n)
        }, dot: function (t, e) {
            var n;
            "circle" !== t.nodeName && (n = t.getAttribute("transform"), t = t.childNodes[0]);
            var i = ["cx", "cy"];
            Object.values(t.attributes).filter((function (t) {
                return i.includes(t.name) && t.specified
            })).map((function (t) {
                e.setAttribute(t.name, t.nodeValue)
            })), n && e.setAttribute("transform", n)
        }, heat_square: function (t, e) {
            var n;
            "circle" !== t.nodeName && (n = t.getAttribute("transform"), t = t.childNodes[0]);
            var i = ["cx", "cy"];
            Object.values(t.attributes).filter((function (t) {
                return i.includes(t.name) && t.specified
            })).map((function (t) {
                e.setAttribute(t.name, t.nodeValue)
            })), n && e.setAttribute("transform", n)
        }
    }, st = {
        pink: "#F683AE",
        blue: "#318AD8",
        green: "#48BB74",
        grey: "#A6B1B9",
        red: "#F56B6B",
        yellow: "#FACF7A",
        purple: "#44427B",
        teal: "#5FD8C4",
        cyan: "#15CCEF",
        orange: "#F8814F",
        "light-pink": "#FED7E5",
        "light-blue": "#BFDDF7",
        "light-green": "#48BB74",
        "light-grey": "#F4F5F6",
        "light-red": "#F6DFDF",
        "light-yellow": "#FEE9BF",
        "light-purple": "#E8E8F7",
        "light-teal": "#D3FDF6",
        "light-cyan": "#DDF8FD",
        "light-orange": "#FECDB8"
    };

    function rt(t, e, n, i) {
        var a = "string" == typeof e ? e : e.join(", ");
        return [t, {transform: n.join(", ")}, i, "easein", "translate", {transform: a}]
    }

    function ot(t, e, n) {
        return rt(t, [0, n], [0, e], 350)
    }

    function lt(t, e) {
        return [t, {d: e}, 350, "easein"]
    }

    var ct = {
        ease: "0.25 0.1 0.25 1",
        linear: "0 0 1 1",
        easein: "0.1 0.8 0.2 1",
        easeout: "0 0 0.58 1",
        easeinout: "0.42 0 0.58 1"
    };

    function ut(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear",
            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0,
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}, r = t.cloneNode(!0),
            o = t.cloneNode(!0);
        for (var l in e) {
            var c = void 0;
            c = "transform" === l ? document.createElementNS("http://www.w3.org/2000/svg", "animateTransform") : document.createElementNS("http://www.w3.org/2000/svg", "animate");
            var u = s[l] || t.getAttribute(l), h = e[l], d = {
                attributeName: l,
                from: u,
                to: h,
                begin: "0s",
                dur: n / 1e3 + "s",
                values: u + ";" + h,
                keySplines: ct[i],
                keyTimes: "0;1",
                calcMode: "spline",
                fill: "freeze"
            };
            for (var f in a && (d.type = a), d) c.setAttribute(f, d[f]);
            r.appendChild(c), a ? o.setAttribute(l, "translate(".concat(h, ")")) : o.setAttribute(l, h)
        }
        return [r, o]
    }

    function ht(t, e) {
        t.style.transform = e, t.style.webkitTransform = e, t.style.msTransform = e, t.style.mozTransform = e, t.style.oTransform = e
    }

    function dt(t, e) {
        var n = [], i = [];
        e.map((function (t) {
            var e, a, s = t[0], r = s.parentNode;
            t[0] = s;
            var o = u(ut.apply(void 0, h(t)), 2);
            e = o[0], a = o[1], n.push(a), i.push([e, r]), r.replaceChild(e, s)
        }));
        var a = t.cloneNode(!0);
        return i.map((function (t, i) {
            t[1].replaceChild(n[i], t[0]), e[i][0] = n[i]
        })), a
    }

    function ft(t, e, n) {
        if (0 !== n.length) {
            var i = dt(e, n);
            e.parentNode == t && (t.removeChild(e), t.appendChild(i)), setTimeout((function () {
                i.parentNode == t && (t.removeChild(i), t.appendChild(e))
            }), 250)
        }
    }

    var pt = function () {
            function t(n, i) {
                if (e(this, t), i = S(i), this.parent = "string" == typeof n ? document.querySelector(n) : n, !(this.parent instanceof HTMLElement)) throw new Error("No `parent` element to render on was provided.");
                this.rawChartArgs = i, this.title = i.title || "", this.type = i.type || "", this.realData = this.prepareData(i.data), this.data = this.prepareFirstData(this.realData), this.colors = this.validateColors(i.colors, this.type), this.config = {
                    showTooltip: 1,
                    showLegend: void 0 !== i.showLegend ? i.showLegend : 1,
                    isNavigable: i.isNavigable || 0,
                    animate: void 0 !== i.animate ? i.animate : 1,
                    truncateLegends: i.truncateLegends || 1
                }, this.measures = JSON.parse(JSON.stringify(y));
                var a = this.measures;
                this.setMeasures(i), this.title.length || (a.titleHeight = 0), this.config.showLegend || (a.legendHeight = 0), this.argHeight = i.height || a.baseHeight, this.state = {}, this.options = {}, this.initTimeout = 700, this.config.isNavigable && (this.overlays = []), this.configure(i)
            }

            return i(t, [{
                key: "prepareData", value: function (t) {
                    return t
                }
            }, {
                key: "prepareFirstData", value: function (t) {
                    return t
                }
            }, {
                key: "validateColors", value: function (t, e) {
                    var n = [];
                    return (t = (t || []).concat(L[e])).forEach((function (t) {
                        var e = function (t) {
                            return /rgb[a]{0,1}\([\d, ]+\)/gim.test(t) ? /\D+(\d*)\D+(\d*)\D+(\d*)/gim.exec(t).map((function (t, e) {
                                return 0 !== e ? Number(t).toString(16) : "#"
                            })).reduce((function (t, e) {
                                return "".concat(t).concat(e)
                            })) : st[t] || t
                        }(t);
                        !function (t) {
                            return /(^\s*)(#)((?:[A-Fa-f0-9]{3}){1,2})$/i.test(t) || /(^\s*)(rgb|hsl)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/i.test(t)
                        }(e) ? console.warn('"' + t + '" is not a valid color.') : n.push(e)
                    })), n
                }
            }, {
                key: "setMeasures", value: function () {
                }
            }, {
                key: "configure", value: function () {
                    var t = this, e = this.argHeight;
                    this.baseHeight = e, this.height = e - k(this.measures), this.boundDrawFn = function () {
                        return t.draw(!0)
                    }, window.addEventListener("resize", this.boundDrawFn), window.addEventListener("orientationchange", this.boundDrawFn)
                }
            }, {
                key: "destroy", value: function () {
                    window.removeEventListener("resize", this.boundDrawFn), window.removeEventListener("orientationchange", this.boundDrawFn)
                }
            }, {
                key: "setup", value: function () {
                    this.makeContainer(), this.updateWidth(), this.makeTooltip(), this.draw(!1, !0)
                }
            }, {
                key: "makeContainer", value: function () {
                    this.parent.innerHTML = "";
                    var t = {inside: this.parent, className: "chart-container-v2"};
                    this.independentWidth && (t.styles = {width: this.independentWidth + "px"}), this.container = p.create("div", t)
                }
            }, {
                key: "makeTooltip", value: function () {
                    this.tip = new M({parent: this.container, colors: this.colors}), this.bindTooltip()
                }
            }, {
                key: "bindTooltip", value: function () {
                }
            }, {
                key: "draw", value: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e && g(this.parent) || (this.updateWidth(), this.calc(e), this.makeChartArea(), this.setupComponents(), this.components.forEach((function (e) {
                        return e.setup(t.drawArea)
                    })), this.render(this.components, !1), n && (this.data = this.realData, setTimeout((function () {
                        t.update(t.data, !0)
                    }), this.initTimeout)), this.config.showLegend && this.renderLegend(), this.setupNavigation(n))
                }
            }, {
                key: "calc", value: function () {
                }
            }, {
                key: "updateWidth", value: function () {
                    var t, e, n;
                    this.baseWidth = (t = this.parent, e = window.getComputedStyle(t), n = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), t.clientWidth - n), this.width = this.baseWidth - w(this.measures)
                }
            }, {
                key: "makeChartArea", value: function () {
                    this.svg && this.container.removeChild(this.svg);
                    var t, e, n, i, a = this.measures;
                    this.svg = (t = this.container, e = "frappe-chart chart", n = this.baseWidth, i = this.baseHeight, I("svg", {
                        className: e,
                        inside: t,
                        width: n,
                        height: i
                    })), this.svgDefs = I("defs", {inside: this.svg}), this.title.length && (this.titleEL = tt("title", a.margins.left, a.margins.top, this.title, {
                        fontSize: a.titleFontSize,
                        fill: "#666666",
                        dy: a.titleFontSize
                    }));
                    var s = b(a);
                    this.drawArea = V(this.type + "-chart chart-draw-area", "translate(".concat(x(a), ", ").concat(s, ")")), this.config.showLegend && (s += this.height + a.paddings.bottom, this.legendArea = V("chart-legend", "translate(".concat(x(a), ", ").concat(s, ")"))), this.title.length && this.svg.appendChild(this.titleEL), this.svg.appendChild(this.drawArea), this.config.showLegend && this.svg.appendChild(this.legendArea), this.updateTipOffset(x(a), b(a))
                }
            }, {
                key: "updateTipOffset", value: function (t, e) {
                    this.tip.offset = {x: t, y: e}
                }
            }, {
                key: "setupComponents", value: function () {
                    this.components = new Map
                }
            }, {
                key: "update", value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t || console.error("No data to update."), e || (t = S(t)), this.data = this.prepareData(t), this.calc(), this.render(this.components, this.config.animate)
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.components,
                        n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.config.isNavigable && this.overlays.map((function (t) {
                        return t.parentNode.removeChild(t)
                    }));
                    var i = [];
                    e.forEach((function (t) {
                        i = i.concat(t.update(n))
                    })), i.length > 0 ? (ft(this.container, this.svg, i), setTimeout((function () {
                        e.forEach((function (t) {
                            return t.make()
                        })), t.updateNav()
                    }), 400)) : (e.forEach((function (t) {
                        return t.make()
                    })), this.updateNav())
                }
            }, {
                key: "updateNav", value: function () {
                    this.config.isNavigable && (this.makeOverlay(), this.bindUnits())
                }
            }, {
                key: "renderLegend", value: function (t) {
                    var e = this;
                    this.legendArea.textContent = "";
                    var n = 0, i = 0;
                    t.map((function (t, a) {
                        var s = Math.floor(e.width / 150);
                        n > s && (n = 0, i += e.config.legendRowHeight);
                        var r = 150 * n, o = e.makeLegend(t, a, r, i);
                        e.legendArea.appendChild(o), n++
                    }))
                }
            }, {
                key: "makeLegend", value: function () {
                }
            }, {
                key: "setupNavigation", value: function () {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.config.isNavigable && e && (this.bindOverlay(), this.keyActions = {
                        13: this.onEnterKey.bind(this),
                        37: this.onLeftArrow.bind(this),
                        38: this.onUpArrow.bind(this),
                        39: this.onRightArrow.bind(this),
                        40: this.onDownArrow.bind(this)
                    }, document.addEventListener("keydown", (function (e) {
                        m(t.container) && (e = e || window.event, t.keyActions[e.keyCode] && t.keyActions[e.keyCode]())
                    })))
                }
            }, {
                key: "makeOverlay", value: function () {
                }
            }, {
                key: "updateOverlay", value: function () {
                }
            }, {
                key: "bindOverlay", value: function () {
                }
            }, {
                key: "bindUnits", value: function () {
                }
            }, {
                key: "onLeftArrow", value: function () {
                }
            }, {
                key: "onRightArrow", value: function () {
                }
            }, {
                key: "onUpArrow", value: function () {
                }
            }, {
                key: "onDownArrow", value: function () {
                }
            }, {
                key: "onEnterKey", value: function () {
                }
            }, {
                key: "addDataPoint", value: function () {
                }
            }, {
                key: "removeDataPoint", value: function () {
                }
            }, {
                key: "getDataPoint", value: function () {
                }
            }, {
                key: "setCurrentDataPoint", value: function () {
                }
            }, {
                key: "updateDataset", value: function () {
                }
            }, {
                key: "export", value: function () {
                    var t = function (t) {
                        var e = t.cloneNode(!0);
                        e.classList.add("chart-container-v2"), e.setAttribute("xmlns", "http://www.w3.org/2000/svg"), e.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                        var n = p.create("style", {innerHTML: ".chart-container-v2{position:relative;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif}.chart-container-v2 .axis,.chart-container-v2 .chart-label{fill:#555b51}.chart-container-v2 .axis line,.chart-container-v2 .chart-label line{stroke:#dadada}.chart-container-v2 .dataset-units circle{stroke:#fff;stroke-width:2}.chart-container-v2 .dataset-units path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container-v2 .dataset-path{stroke-width:2px}.chart-container-v2 .path-group path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container-v2 line.dashed{stroke-dasharray:5,3}.chart-container-v2 .axis-line .specific-value{text-anchor:start}.chart-container-v2 .axis-line .y-line{text-anchor:end}.chart-container-v2 .axis-line .x-line{text-anchor:middle}.chart-container-v2 .legend-dataset-text{fill:#6c7680;font-weight:600}.graph-svg-tip-v2{position:absolute;z-index:99999;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.8);border-radius:3px}.graph-svg-tip-v2 ul{padding-left:0;display:flex}.graph-svg-tip-v2 ol{padding-left:0;display:flex}.graph-svg-tip-v2 ul.data-point-list li{min-width:90px;flex:1;font-weight:600}.graph-svg-tip-v2 strong{color:#dfe2e5;font-weight:600}.graph-svg-tip-v2 .svg-pointer{position:absolute;height:5px;margin:0 0 0 -5px;content:' ';border:5px solid transparent;}.graph-svg-tip-v2.comparison{padding:0;text-align:left;pointer-events:none}.graph-svg-tip-v2.comparison .title{display:block;padding:10px;margin:0;font-weight:600;line-height:1;pointer-events:none}.graph-svg-tip-v2.comparison ul{margin:0;white-space:nowrap;list-style:none}.graph-svg-tip-v2.comparison li{display:inline-block;padding:5px 10px}"});
                        e.insertBefore(n, e.firstChild);
                        var i = p.create("div");
                        return i.appendChild(e), i.innerHTML
                    }(this.svg);
                    !function (t, e) {
                        var n = document.createElement("a");
                        n.style = "display: none";
                        var i = new Blob(e, {type: "image/svg+xml; charset=utf-8"}), a = window.URL.createObjectURL(i);
                        n.href = a, n.download = t, document.body.appendChild(n), n.click(), setTimeout((function () {
                            document.body.removeChild(n), window.URL.revokeObjectURL(a)
                        }), 300)
                    }(this.title || "Chart", [t])
                }
            }]), t
        }(), vt = function (t) {
            a(r, t);
            var n = l(r);

            function r(t, i) {
                return e(this, r), n.call(this, t, i)
            }

            return i(r, [{
                key: "configure", value: function (t) {
                    c(s(r.prototype), "configure", this).call(this, t), this.config.formatTooltipY = (t.tooltipOptions || {}).formatTooltipY, this.config.maxSlices = t.maxSlices || 20, this.config.maxLegendPoints = t.maxLegendPoints || 20, this.config.legendRowHeight = 60
                }
            }, {
                key: "calc", value: function () {
                    var t = this, e = this.state, n = this.config.maxSlices;
                    e.sliceTotals = [];
                    var i = this.data.labels.map((function (e, n) {
                        var i = 0;
                        return t.data.datasets.map((function (t) {
                            i += t.values[n]
                        })), [i, e]
                    })).filter((function (t) {
                        return t[0] >= 0
                    })), a = i;
                    if (i.length > n) {
                        i.sort((function (t, e) {
                            return e[0] - t[0]
                        })), a = i.slice(0, n - 1);
                        var s = i.slice(n - 1), r = 0;
                        s.map((function (t) {
                            r += t[0]
                        })), a.push([r, "Rest"]), this.colors[n - 1] = "grey"
                    }
                    e.labels = [], a.map((function (t) {
                        e.sliceTotals.push(O(t[0])), e.labels.push(t[1])
                    })), e.grandTotal = e.sliceTotals.reduce((function (t, e) {
                        return t + e
                    }), 0), this.center = {x: this.width / 2, y: this.height / 2}
                }
            }, {
                key: "renderLegend", value: function () {
                    var t = this.state;
                    this.legendArea.textContent = "", this.legendTotals = t.sliceTotals.slice(0, this.config.maxLegendPoints), c(s(r.prototype), "renderLegend", this).call(this, this.legendTotals)
                }
            }, {
                key: "makeLegend", value: function (t, e, n, i) {
                    var a = this.config.formatTooltipY ? this.config.formatTooltipY(t) : t;
                    return Z(n, i, 12, 3, this.colors[e], this.state.labels[e], a, null, this.config.truncateLegends)
                }
            }]), r
        }(pt),
        gt = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        mt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function yt(t) {
        var e = new Date(t);
        return e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e
    }

    function bt(t) {
        var e = t.getDate(), n = t.getMonth() + 1;
        return [t.getFullYear(), (n > 9 ? "" : "0") + n, (e > 9 ? "" : "0") + e].join("-")
    }

    function xt(t) {
        return new Date(t.getTime())
    }

    function kt(t, e) {
        var n = Dt(t);
        return Math.ceil(function (t, e) {
            return (yt(e) - yt(t)) / 864e5
        }(n, e) / 7)
    }

    function wt(t, e) {
        return t.getMonth() === e.getMonth() && t.getFullYear() === e.getFullYear()
    }

    function At(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = gt[t];
        return e ? n.slice(0, 3) : n
    }

    function Lt(t, e) {
        return new Date(e, t + 1, 0)
    }

    function Dt(t) {
        var e = xt(t), n = e.getDay();
        return 0 !== n && Mt(e, -1 * n), e
    }

    function Mt(t, e) {
        t.setDate(t.getDate() + e)
    }

    var Tt = function () {
        function t(n) {
            var i = n.layerClass, a = void 0 === i ? "" : i, s = n.layerTransform, r = void 0 === s ? "" : s,
                o = n.constants, l = n.getData, c = n.makeElements, u = n.animateElements;
            e(this, t), this.layerTransform = r, this.constants = o, this.makeElements = c, this.getData = l, this.animateElements = u, this.store = [], this.labels = [], this.layerClass = a, this.layerClass = "function" == typeof this.layerClass ? this.layerClass() : this.layerClass, this.refresh()
        }

        return i(t, [{
            key: "refresh", value: function (t) {
                this.data = t || this.getData()
            }
        }, {
            key: "setup", value: function (t) {
                this.layer = V(this.layerClass, this.layerTransform, t)
            }
        }, {
            key: "make", value: function () {
                this.render(this.data), this.oldData = this.data
            }
        }, {
            key: "render", value: function (t) {
                var e = this;
                this.store = this.makeElements(t), this.layer.textContent = "", this.store.forEach((function (t) {
                    e.layer.appendChild(t)
                })), this.labels.forEach((function (t) {
                    e.layer.appendChild(t)
                }))
            }
        }, {
            key: "update", value: function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.refresh();
                var e = [];
                return t && (e = this.animateElements(this.data) || []), e
            }
        }]), t
    }(), Ct = {
        donutSlices: {
            layerClass: "donut-slices", makeElements: function (t) {
                return t.sliceStrings.map((function (e, n) {
                    var i = U(e, "donut-path", t.colors[n], "none", t.strokeWidth);
                    return i.style.transition = "transform .3s;", i
                }))
            }, animateElements: function (t) {
                return this.store.map((function (e, n) {
                    return lt(e, t.sliceStrings[n])
                }))
            }
        }, pieSlices: {
            layerClass: "pie-slices", makeElements: function (t) {
                return t.sliceStrings.map((function (e, n) {
                    var i = U(e, "pie-path", "none", t.colors[n]);
                    return i.style.transition = "transform .3s;", i
                }))
            }, animateElements: function (t) {
                return this.store.map((function (e, n) {
                    return lt(e, t.sliceStrings[n])
                }))
            }
        }, percentageBars: {
            layerClass: "percentage-bars", makeElements: function (t) {
                var e = this, n = t.xPositions.length;
                return t.xPositions.map((function (i, a) {
                    var s = a == n - 1, r = 0 == a;
                    return function (t, e, n, i, a, s) {
                        var r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "none";
                        if (s) {
                            var o = K(t, n, i);
                            return U(o, "percentage-bar", null, r)
                        }
                        if (a) {
                            var l = $(t, n, i);
                            return U(l, "percentage-bar", null, r)
                        }
                        var c = {className: "percentage-bar", x: t, y: e, width: n, height: i, fill: r};
                        return I("rect", c)
                    }(i, 0, t.widths[a], e.constants.barHeight, r, s, t.colors[a])
                }))
            }, animateElements: function (t) {
                if (t) return []
            }
        }, yAxis: {
            layerClass: "y axis", makeElements: function (t) {
                var e = this;
                return t.positions.map((function (n, i) {
                    return function (t, e, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        E(t) || (t = 0), i.pos || (i.pos = "left"), i.offset || (i.offset = 0), i.mode || (i.mode = "span"), i.stroke || (i.stroke = "#E2E6E9"), i.className || (i.className = "");
                        var a = -6, s = "span" === i.mode ? n + 6 : 0;
                        return "tick" === i.mode && "right" === i.pos && (a = n + 6, s = n), a += i.offset, s += i.offset, "number" == typeof e && (e = O(e)), nt(t, e, a, s, {
                            className: i.className,
                            lineType: i.lineType,
                            shortenNumbers: i.shortenNumbers
                        })
                    }(n, t.labels[i], e.constants.width, {
                        mode: e.constants.mode,
                        pos: e.constants.pos,
                        shortenNumbers: e.constants.shortenNumbers
                    })
                }))
            }, animateElements: function (t) {
                var e = t.positions, n = t.labels, i = this.oldData.positions, a = this.oldData.labels,
                    s = u(z(i, e), 2);
                i = s[0], e = s[1];
                var r = u(z(a, n), 2);
                return a = r[0], n = r[1], this.render({positions: i, labels: n}), this.store.map((function (t, n) {
                    return ot(t, e[n], i[n])
                }))
            }
        }, xAxis: {
            layerClass: "x axis", makeElements: function (t) {
                var e = this;
                return t.positions.map((function (n, i) {
                    return function (t, e, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        E(t) || (t = 0), i.pos || (i.pos = "bottom"), i.offset || (i.offset = 0), i.mode || (i.mode = "span"), i.className || (i.className = "");
                        var a = n + 6, s = "span" === i.mode ? -6 : n;
                        return "tick" === i.mode && "top" === i.pos && (a = -6, s = 0), et(t, e, a, s, {
                            className: i.className,
                            lineType: i.lineType
                        })
                    }(n, t.calcLabels[i], e.constants.height, {mode: e.constants.mode, pos: e.constants.pos})
                }))
            }, animateElements: function (t) {
                var e = t.positions, n = t.calcLabels, i = this.oldData.positions, a = this.oldData.calcLabels,
                    s = u(z(i, e), 2);
                i = s[0], e = s[1];
                var r = u(z(a, n), 2);
                return a = r[0], n = r[1], this.render({positions: i, calcLabels: n}), this.store.map((function (t, n) {
                    return function (t, e, n) {
                        return rt(t, [n, 0], [e, 0], 350)
                    }(t, e[n], i[n])
                }))
            }
        }, yMarkers: {
            layerClass: "y-markers", makeElements: function (t) {
                var e = this;
                return t.map((function (t) {
                    return function (t, e, n) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        E(t) || (t = 0), i.labelPos || (i.labelPos = "right"), i.lineType || (i.lineType = "dashed");
                        var a = "left" === i.labelPos ? 4 : n - P(e, 5) - 4, s = I("text", {
                            className: "chart-label",
                            x: a,
                            y: 0,
                            dy: "-5px",
                            "font-size": "10px",
                            "text-anchor": "start",
                            innerHTML: e + ""
                        }), r = nt(t, "", 0, n, {
                            stroke: i.stroke || "#E2E6E9",
                            className: i.className || "",
                            lineType: i.lineType
                        });
                        return r.appendChild(s), r
                    }(t.position, t.label, e.constants.width, {
                        labelPos: t.options.labelPos,
                        stroke: t.options.stroke,
                        mode: "span",
                        lineType: t.options.lineType
                    })
                }))
            }, animateElements: function (t) {
                var e = u(z(this.oldData, t), 2);
                this.oldData = e[0];
                var n = (t = e[1]).map((function (t) {
                    return t.position
                })), i = t.map((function (t) {
                    return t.label
                })), a = t.map((function (t) {
                    return t.options
                })), s = this.oldData.map((function (t) {
                    return t.position
                }));
                return this.render(s.map((function (t, e) {
                    return {position: s[e], label: i[e], options: a[e]}
                }))), this.store.map((function (t, e) {
                    return ot(t, n[e], s[e])
                }))
            }
        }, yRegions: {
            layerClass: "y-regions", makeElements: function (t) {
                var e = this;
                return t.map((function (t) {
                    return function (t, e, n, i) {
                        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, s = t - e,
                            r = I("rect", {
                                className: "bar mini",
                                styles: {
                                    fill: a.fill || "rgba(228, 234, 239, 0.49)",
                                    stroke: a.stroke || "#E2E6E9",
                                    "stroke-dasharray": "".concat(n, ", ").concat(s)
                                },
                                x: 0,
                                y: 0,
                                width: n,
                                height: s
                            });
                        a.labelPos || (a.labelPos = "right");
                        var o = "left" === a.labelPos ? 4 : n - P(i + "", 4.5) - 4, l = I("text", {
                            className: "chart-label",
                            x: o,
                            y: 0,
                            dy: "-5px",
                            "font-size": "10px",
                            "text-anchor": "start",
                            innerHTML: i + ""
                        }), c = I("g", {transform: "translate(0, ".concat(e, ")")});
                        return c.appendChild(r), c.appendChild(l), c
                    }(t.startPos, t.endPos, e.constants.width, t.label, {
                        labelPos: t.options.labelPos,
                        stroke: t.options.stroke,
                        fill: t.options.fill
                    })
                }))
            }, animateElements: function (t) {
                var e = u(z(this.oldData, t), 2);
                this.oldData = e[0];
                var n = (t = e[1]).map((function (t) {
                    return t.endPos
                })), i = t.map((function (t) {
                    return t.label
                })), a = t.map((function (t) {
                    return t.startPos
                })), s = t.map((function (t) {
                    return t.options
                })), r = this.oldData.map((function (t) {
                    return t.endPos
                })), o = this.oldData.map((function (t) {
                    return t.startPos
                }));
                this.render(r.map((function (t, e) {
                    return {startPos: o[e], endPos: r[e], label: i[e], options: s[e]}
                })));
                var l = [];
                return this.store.map((function (t, e) {
                    l = l.concat(function (t, e, n, i) {
                        var a = e - n, s = t.childNodes[0], r = s.getAttribute("width");
                        return [[s, {
                            height: a,
                            "stroke-dasharray": "".concat(r, ", ").concat(a)
                        }, 350, "easein"], rt(t, [0, i], [0, n], 350)]
                    }(t, a[e], n[e], r[e]))
                })), l
            }
        }, heatDomain: {
            layerClass: function () {
                return "heat-domain domain-" + this.constants.index
            }, makeElements: function (t) {
                var e = this, n = this.constants, i = n.index, a = n.colWidth, s = n.rowHeight, r = n.squareSize,
                    o = n.radius, l = n.xTranslate, c = l, u = 0;
                return this.serializedSubDomains = [], t.cols.map((function (t, n) {
                    1 === n && e.labels.push(tt("domain-name", c, -12, At(i, !0).toUpperCase(), {fontSize: 9})), t.map((function (t, n) {
                        if (t.fill) {
                            var i = {"data-date": t.yyyyMmDd, "data-value": t.dataValue, "data-day": n},
                                a = Q("day", c, u, r, o, t.fill, i);
                            e.serializedSubDomains.push(a)
                        }
                        u += s
                    })), u = 0, c += a
                })), this.serializedSubDomains
            }, animateElements: function (t) {
                if (t) return []
            }
        }, barGraph: {
            layerClass: function () {
                return "dataset-units dataset-bars dataset-" + this.constants.index
            }, makeElements: function (t) {
                var e = this.constants;
                return this.unitType = "bar", this.units = t.yPositions.map((function (n, i) {
                    return function (t, e, n, i) {
                        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                            r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                            o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {},
                            l = F(e, o.zeroLine), c = u(l, 2), h = c[0], d = c[1];
                        d -= r, 0 === h && (h = o.minHeight, d -= o.minHeight), E(t) || (t = 0), E(d) || (d = 0), E(h, !0) || (h = 0), E(n, !0) || (n = 0);
                        var f = I("rect", {
                            className: "bar mini",
                            style: "fill: ".concat(i),
                            "data-point-index": s,
                            x: t,
                            y: d,
                            width: n,
                            height: h
                        });
                        if ((a += "") || a.length) {
                            f.setAttribute("y", 0), f.setAttribute("x", 0);
                            var p = I("text", {
                                className: "data-point-value",
                                x: n / 2,
                                y: 0,
                                dy: "-5px",
                                "font-size": "10px",
                                "text-anchor": "middle",
                                innerHTML: a
                            }), v = I("g", {
                                "data-point-index": s,
                                transform: "translate(".concat(t, ", ").concat(d, ")")
                            });
                            return v.appendChild(f), v.appendChild(p), v
                        }
                        return f
                    }(t.xPositions[i], n, t.barWidth, e.color, t.labels[i], i, t.offsets[i], {
                        zeroLine: t.zeroLine,
                        barsWidth: t.barsWidth,
                        minHeight: e.minHeight
                    })
                })), this.units
            }, animateElements: function (t) {
                var e = t.xPositions, n = t.yPositions, i = t.offsets, a = t.labels, s = this.oldData.xPositions,
                    r = this.oldData.yPositions, o = this.oldData.offsets, l = this.oldData.labels, c = u(z(s, e), 2);
                s = c[0], e = c[1];
                var h = u(z(r, n), 2);
                r = h[0], n = h[1];
                var d = u(z(o, i), 2);
                o = d[0], i = d[1];
                var f = u(z(l, a), 2);
                l = f[0], a = f[1], this.render({
                    xPositions: s,
                    yPositions: r,
                    offsets: o,
                    labels: a,
                    zeroLine: this.oldData.zeroLine,
                    barsWidth: this.oldData.barsWidth,
                    barWidth: this.oldData.barWidth
                });
                var p = [];
                return this.store.map((function (a, s) {
                    p = p.concat(function (t, e, n, i) {
                        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                            r = F(n, s.zeroLine), o = u(r, 2), l = o[0], c = o[1];
                        if (c -= a, "rect" !== t.nodeName) {
                            var h = t.childNodes[0], d = [h, {width: i, height: l}, 350, "easein"],
                                f = t.getAttribute("transform").split("(")[1].slice(0, -1), p = rt(t, f, [e, c], 350);
                            return [d, p]
                        }
                        return [[t, {width: i, height: l, x: e, y: c}, 350, "easein"]]
                    }(a, e[s], n[s], t.barWidth, i[s], {zeroLine: t.zeroLine}))
                })), p
            }
        }, lineGraph: {
            layerClass: function () {
                return "dataset-units dataset-line dataset-" + this.constants.index
            }, makeElements: function (t) {
                var e = this.constants;
                return this.unitType = "dot", this.paths = {}, e.hideLine || (this.paths = function (t, e, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                        s = e.map((function (e, n) {
                            return t[n] + "," + e
                        })), r = s.join("L");
                    i.spline && (r = W(t, e));
                    var o = U("M" + r, "line-graph-path", n);
                    if (i.heatline) {
                        var l = J(a.svgDefs, n);
                        o.style.stroke = "url(#".concat(l, ")")
                    }
                    var c = {path: o};
                    if (i.regionFill) {
                        var u = J(a.svgDefs, n, !0),
                            h = "M" + "".concat(t[0], ",").concat(a.zeroLine, "L") + r + "L".concat(t.slice(-1)[0], ",").concat(a.zeroLine);
                        c.region = U(h, "region-fill", "none", "url(#".concat(u, ")"))
                    }
                    return c
                }(t.xPositions, t.yPositions, e.color, {
                    heatline: e.heatline,
                    regionFill: e.regionFill,
                    spline: e.spline
                }, {
                    svgDefs: e.svgDefs,
                    zeroLine: t.zeroLine
                })), this.units = [], e.showDots && (this.units = t.yPositions.map((function (n, i) {
                    return function (t, e, n, i) {
                        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                            r = I("circle", {style: "fill: ".concat(i), "data-point-index": s, cx: t, cy: e, r: n});
                        if ((a += "") || a.length) {
                            r.setAttribute("cy", 0), r.setAttribute("cx", 0);
                            var o = I("text", {
                                className: "data-point-value",
                                x: 0,
                                y: 0,
                                dy: -5 - n + "px",
                                "font-size": "10px",
                                "text-anchor": "middle",
                                innerHTML: a
                            }), l = I("g", {
                                "data-point-index": s,
                                transform: "translate(".concat(t, ", ").concat(e, ")")
                            });
                            return l.appendChild(r), l.appendChild(o), l
                        }
                        return r
                    }(t.xPositions[i], n, t.radius, e.color, e.valuesOverPoints ? t.values[i] : "", i)
                }))), Object.values(this.paths).concat(this.units)
            }, animateElements: function (t) {
                var e = t.xPositions, n = t.yPositions, i = t.values, a = this.oldData.xPositions,
                    s = this.oldData.yPositions, r = this.oldData.values, o = u(z(a, e), 2);
                a = o[0], e = o[1];
                var l = u(z(s, n), 2);
                s = l[0], n = l[1];
                var c = u(z(r, i), 2);
                r = c[0], i = c[1], this.render({
                    xPositions: a,
                    yPositions: s,
                    values: i,
                    zeroLine: this.oldData.zeroLine,
                    radius: this.oldData.radius
                });
                var h = [];
                return Object.keys(this.paths).length && (h = h.concat(function (t, e, n, i, a) {
                    var s = [], r = n.map((function (t, n) {
                        return e[n] + "," + t
                    })).join("L");
                    a && (r = W(e, n));
                    var o = [t.path, {d: "M" + r}, 350, "easein"];
                    if (s.push(o), t.region) {
                        var l = "".concat(e[0], ",").concat(i, "L"), c = "L".concat(e.slice(-1)[0], ", ").concat(i),
                            u = [t.region, {d: "M" + l + r + c}, 350, "easein"];
                        s.push(u)
                    }
                    return s
                }(this.paths, e, n, t.zeroLine, this.constants.spline))), this.units.length && this.units.map((function (t, i) {
                    h = h.concat(function (t, e, n) {
                        if ("circle" !== t.nodeName) {
                            var i = t.getAttribute("transform").split("(")[1].slice(0, -1);
                            return [rt(t, i, [e, n], 350)]
                        }
                        return [[t, {cx: e, cy: n}, 350, "easein"]]
                    }(t, e[i], n[i]))
                })), h
            }
        }
    };

    function Pt(t, e, n) {
        var i = Object.keys(Ct).filter((function (e) {
            return t.includes(e)
        })), a = Ct[i[0]];
        return Object.assign(a, {constants: e, getData: n}), new Tt(a)
    }

    var Nt = function (t) {
        a(r, t);
        var n = l(r);

        function r(t, i) {
            var a;
            return e(this, r), (a = n.call(this, t, i)).type = "percentage", a.setup(), a
        }

        return i(r, [{
            key: "setMeasures", value: function (t) {
                var e = this.measures;
                this.barOptions = t.barOptions || {};
                var n = this.barOptions;
                n.height = n.height || 16, e.paddings.right = 30, e.paddings.top = 60, e.paddings.bottom = 0, e.legendHeight = 80, e.baseHeight = 8 * n.height + k(e)
            }
        }, {
            key: "setupComponents", value: function () {
                var t = this.state, e = [["percentageBars", {barHeight: this.barOptions.height}, function () {
                    return {xPositions: t.xPositions, widths: t.widths, colors: this.colors}
                }.bind(this)]];
                this.components = new Map(e.map((function (t) {
                    var e = Pt.apply(void 0, h(t));
                    return [t[0], e]
                })))
            }
        }, {
            key: "calc", value: function () {
                var t = this;
                c(s(r.prototype), "calc", this).call(this);
                var e = this.state;
                e.xPositions = [], e.widths = [];
                var n = 0;
                e.sliceTotals.map((function (i) {
                    var a = t.width * i / e.grandTotal;
                    e.widths.push(a), e.xPositions.push(n), n += a
                }))
            }
        }, {
            key: "makeDataByIndex", value: function () {
            }
        }, {
            key: "bindTooltip", value: function () {
                var t = this, e = this.state;
                this.container.addEventListener("mousemove", (function (n) {
                    var i = t.components.get("percentageBars").store, a = n.target;
                    if (i.includes(a)) {
                        var s = i.indexOf(a), r = v(t.container), o = v(a),
                            l = a.getAttribute("width") || a.getBoundingClientRect().width,
                            c = o.left - r.left + parseInt(l) / 2, u = o.top - r.top,
                            h = (t.formattedLabels && t.formattedLabels.length > 0 ? t.formattedLabels[s] : t.state.labels[s]) + ": ",
                            d = e.sliceTotals[s] / e.grandTotal;
                        t.tip.setValues(c, u, {name: h, value: (100 * d).toFixed(1) + "%"}), t.tip.showTip()
                    }
                }))
            }
        }]), r
    }(vt), Et = function (t) {
        a(r, t);
        var n = l(r);

        function r(t, i) {
            var a;
            return e(this, r), (a = n.call(this, t, i)).initTimeout = 0, a.init = 1, a.setup(), a
        }

        return i(r, [{
            key: "configure", value: function (t) {
                c(s(r.prototype), "configure", this).call(this, t), this.mouseMove = this.mouseMove.bind(this), this.mouseLeave = this.mouseLeave.bind(this), this.hoverRadio = t.hoverRadio || .1, this.config.startAngle = t.startAngle || 0, this.type = "pie", this.sliceName = "pieSlices", this.arcFunc = _, this.shapeFunc = q, this.clockWise = t.clockWise || !1
            }
        }, {
            key: "getRadius", value: function () {
                return this.height > this.width ? this.center.x : this.center.y
            }
        }, {
            key: "calc", value: function () {
                var t = this;
                c(s(r.prototype), "calc", this).call(this);
                var e = this.state;
                this.radius = this.getRadius();
                var n = this.radius, i = this.clockWise, a = e.slicesProperties || [];
                e.sliceStrings = [], e.slicesProperties = [];
                var o = 180 - this.config.startAngle;
                e.sliceTotals.map((function (s, r) {
                    var l, c, u = o, h = s / e.grandTotal * 360, d = h > 180 ? 1 : 0, f = i ? -h : h, p = o += f,
                        v = N(u, n), g = N(p, n), m = t.init && a[r];
                    t.init ? (l = m ? m.startPosition : v, c = m ? m.endPosition : v) : (l = v, c = g);
                    var y = 360 === h ? t.shapeFunc(l, c, t.center, t.radius, i, d) : t.arcFunc(l, c, t.center, t.radius, i, d);
                    e.sliceStrings.push(y), e.slicesProperties.push({
                        startPosition: v,
                        endPosition: g,
                        value: s,
                        total: e.grandTotal,
                        startAngle: u,
                        endAngle: p,
                        angle: f
                    })
                })), this.init = 0
            }
        }, {
            key: "setupComponents", value: function () {
                var t = this.state, e = [["pieSlices", {}, function () {
                    return {sliceStrings: t.sliceStrings, colors: this.colors}
                }.bind(this)]];
                this.components = new Map(e.map((function (t) {
                    var e = Pt.apply(void 0, h(t));
                    return [t[0], e]
                })))
            }
        }, {
            key: "calTranslateByAngle", value: function (t) {
                var e = this.radius, n = this.hoverRadio, i = N(t.startAngle + t.angle / 2, e);
                return "translate3d(".concat(i.x * n, "px,").concat(i.y * n, "px,0)")
            }
        }, {
            key: "hoverSlice", value: function (t, e, n, i) {
                if (t) {
                    var a = this.colors[e];
                    if (n) {
                        ht(t, this.calTranslateByAngle(this.state.slicesProperties[e]));
                        var s = v(this.svg), r = i.pageX - s.left + 10, o = i.pageY - s.top - 10,
                            l = (this.formatted_labels && this.formatted_labels.length > 0 ? this.formatted_labels[e] : this.state.labels[e]) + ": ",
                            c = (100 * this.state.sliceTotals[e] / this.state.grandTotal).toFixed(1);
                        this.tip.setValues(r, o, {name: l, value: c + "%"}), this.tip.showTip()
                    } else ht(t, "translate3d(0,0,0)"), this.tip.hideTip(), t.style.fill = a
                }
            }
        }, {
            key: "bindTooltip", value: function () {
                this.container.addEventListener("mousemove", this.mouseMove), this.container.addEventListener("mouseleave", this.mouseLeave)
            }
        }, {
            key: "mouseMove", value: function (t) {
                var e = t.target, n = this.components.get(this.sliceName).store, i = this.curActiveSliceIndex,
                    a = this.curActiveSlice;
                if (n.includes(e)) {
                    var s = n.indexOf(e);
                    this.hoverSlice(a, i, !1), this.curActiveSlice = e, this.curActiveSliceIndex = s, this.hoverSlice(e, s, !0, t)
                } else this.mouseLeave()
            }
        }, {
            key: "mouseLeave", value: function () {
                this.hoverSlice(this.curActiveSlice, this.curActiveSliceIndex, !1)
            }
        }]), r
    }(vt);

    function Ot(t) {
        if (0 === t) return [0, 0];
        if (isNaN(t)) return {mantissa: -6755399441055744, exponent: 972};
        var e = t > 0 ? 1 : -1;
        if (!isFinite(t)) return {mantissa: 4503599627370496 * e, exponent: 972};
        t = Math.abs(t);
        var n = Math.floor(Math.log10(t));
        return [e * (t / Math.pow(10, n)), n]
    }

    function St(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = Math.ceil(t), i = Math.floor(e),
            a = n - i, s = a, r = 1;
        a > 5 && (a % 2 != 0 && (a = ++n - i), s = a / 2, r = 2), a <= 2 && (r = a / (s = 4)), 0 === a && (s = 5, r = 1);
        for (var o = [], l = 0; l <= s; l++) o.push(i + r * l);
        return o
    }

    function Ft(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = Ot(t), i = u(n, 2), a = i[0],
            s = i[1], r = e ? e / Math.pow(10, s) : 0, o = St(a = a.toFixed(6), r);
        return o = o.map((function (t) {
            return t * Math.pow(10, s)
        }))
    }

    function zt(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = Math.max.apply(Math, h(t)),
            i = Math.min.apply(Math, h(t)), a = [];

        function s(t, e) {
            for (var n = Ft(t), i = n[1] - n[0], a = 0, s = 1; a < e; s++) a += i, n.unshift(-1 * a);
            return n
        }

        if (n >= 0 && i >= 0) Ot(n)[1], a = e ? Ft(n, i) : Ft(n); else if (n > 0 && i < 0) {
            var r = Math.abs(i);
            if (n >= r) Ot(n)[1], a = s(n, r); else {
                Ot(r)[1];
                var o = s(r, n);
                a = o.reverse().map((function (t) {
                    return -1 * t
                }))
            }
        } else if (n <= 0 && i <= 0) {
            var l = Math.abs(i), c = Math.abs(n);
            Ot(l)[1], a = (a = e ? Ft(l, c) : Ft(l)).reverse().map((function (t) {
                return -1 * t
            }))
        }
        return a
    }

    function Ht(t) {
        var e, n = Rt(t);
        if (t.indexOf(0) >= 0) e = t.indexOf(0); else if (t[0] > 0) {
            e = -1 * t[0] / n
        } else {
            e = -1 * t[t.length - 1] / n + (t.length - 1)
        }
        return e
    }

    function Rt(t) {
        return t[1] - t[0]
    }

    function Wt(t) {
        return t[t.length - 1] - t[0]
    }

    function jt(t, e) {
        return T(e.zeroLine - t * e.scaleMultiplier)
    }

    var It = function (t) {
        a(s, t);
        var n = l(s);

        function s(t, i) {
            var a;
            e(this, s), (a = n.call(this, t, i)).type = "heatmap", a.countLabel = i.countLabel || "";
            var r = ["Sunday", "Monday"], o = r.includes(i.startSubDomain) ? i.startSubDomain : "Sunday";
            return a.startSubDomainIndex = r.indexOf(o), a.setup(), a
        }

        return i(s, [{
            key: "setMeasures", value: function (t) {
                var e = this.measures;
                this.discreteDomains = 0 === t.discreteDomains ? 0 : 1, e.paddings.top = 36, e.paddings.bottom = 0, e.legendHeight = 24, e.baseHeight = 84 + k(e);
                var n = this.data, i = this.discreteDomains ? 12 : 0;
                this.independentWidth = 12 * (kt(n.start, n.end) + i) + w(e)
            }
        }, {
            key: "updateWidth", value: function () {
                var t = this.discreteDomains ? 12 : 0, e = this.state.noOfWeeks ? this.state.noOfWeeks : 52;
                this.baseWidth = 12 * (e + t) + w(this.measures)
            }
        }, {
            key: "prepareData", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data;
                if (t.start && t.end && t.start > t.end) throw new Error("Start date cannot be greater than end date.");
                if (t.start || (t.start = new Date, t.start.setFullYear(t.start.getFullYear() - 1)), t.end || (t.end = new Date), t.dataPoints = t.dataPoints || {}, parseInt(Object.keys(t.dataPoints)[0]) > 1e5) {
                    var e = {};
                    Object.keys(t.dataPoints).forEach((function (n) {
                        var i = new Date(1e3 * n);
                        e[bt(i)] = t.dataPoints[n]
                    })), t.dataPoints = e
                }
                return t
            }
        }, {
            key: "calc", value: function () {
                var t = this.state;
                t.start = xt(this.data.start), t.end = xt(this.data.end), t.firstWeekStart = xt(t.start), t.noOfWeeks = kt(t.start, t.end), t.distribution = function (t, e) {
                    for (var n = Math.max.apply(Math, h(t)), i = 1 / (e - 1), a = [], s = 0; s < e; s++) {
                        var r = n * (i * s);
                        a.push(r)
                    }
                    return a
                }(Object.values(this.data.dataPoints), 5), t.domainConfigs = this.getDomains()
            }
        }, {
            key: "setupComponents", value: function () {
                var t = this, e = this.state, n = this.discreteDomains ? 0 : 1,
                    i = e.domainConfigs.map((function (i, a) {
                        return ["heatDomain", {
                            index: i.index,
                            colWidth: 12,
                            rowHeight: 12,
                            squareSize: 10,
                            radius: t.rawChartArgs.radius || 0,
                            xTranslate: 12 * e.domainConfigs.filter((function (t, e) {
                                return e < a
                            })).map((function (t) {
                                return t.cols.length - n
                            })).reduce((function (t, e) {
                                return t + e
                            }), 0)
                        }, function () {
                            return e.domainConfigs[a]
                        }.bind(t)]
                    }));
                this.components = new Map(i.map((function (t, e) {
                    var n = Pt.apply(void 0, h(t));
                    return [t[0] + "-" + e, n]
                })));
                var a = 0;
                mt.forEach((function (e, n) {
                    if ([1, 3, 5].includes(n)) {
                        var i = tt("subdomain-name", -6, a, e, {fontSize: 10, dy: 8, textAnchor: "end"});
                        t.drawArea.appendChild(i)
                    }
                    a += 12
                }))
            }
        }, {
            key: "update", value: function (t) {
                t || console.error("No data to update."), this.data = this.prepareData(t), this.draw(), this.bindTooltip()
            }
        }, {
            key: "bindTooltip", value: function () {
                var t = this;
                this.container.addEventListener("mousemove", (function (e) {
                    t.components.forEach((function (n) {
                        var i = n.store, a = e.target;
                        if (i.includes(a)) {
                            var s = a.getAttribute("data-value"), r = a.getAttribute("data-date").split("-"),
                                o = At(parseInt(r[1]) - 1, !0), l = t.container.getBoundingClientRect(),
                                c = a.getBoundingClientRect(), u = parseInt(e.target.getAttribute("width")),
                                h = c.left - l.left + u / 2, d = c.top - l.top, f = s + " " + t.countLabel,
                                p = " on " + o + " " + r[0] + ", " + r[2];
                            t.tip.setValues(h, d, {name: p, value: f, valueFirst: 1}, []), t.tip.showTip()
                        }
                    }))
                }))
            }
        }, {
            key: "renderLegend", value: function () {
                var t = this;
                this.legendArea.textContent = "";
                var e = 0, n = this.rawChartArgs.radius || 0,
                    i = tt("subdomain-name", e, 12, "Less", {fontSize: 11, dy: 9});
                e = 30, this.legendArea.appendChild(i), this.colors.slice(0, 5).map((function (i, a) {
                    var s = Q("heatmap-legend-unit", e + 15 * a, 12, 10, n, i);
                    t.legendArea.appendChild(s)
                }));
                var a = tt("subdomain-name", e + 75 + 3, 12, "More", {fontSize: 11, dy: 9});
                this.legendArea.appendChild(a)
            }
        }, {
            key: "getDomains", value: function () {
                for (var t = this.state, e = [t.start.getMonth(), t.start.getFullYear()], n = e[0], i = e[1], a = [t.end.getMonth(), t.end.getFullYear()], s = a[0] - n + 1 + 12 * (a[1] - i), r = [], o = xt(t.start), l = 0; l < s; l++) {
                    var c = t.end;
                    if (!wt(o, t.end)) {
                        var u = [o.getMonth(), o.getFullYear()];
                        c = Lt(u[0], u[1])
                    }
                    r.push(this.getDomainConfig(o, c)), Mt(c, 1), o = c
                }
                return r
            }
        }, {
            key: "getDomainConfig", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = [t.getMonth(), t.getFullYear()], i = n[0], a = n[1], s = Dt(t), r = {index: i, cols: []};
                Mt(e = xt(e) || Lt(i, a), 1);
                for (var o, l = kt(s, e), c = [], u = 0; u < l; u++) o = this.getCol(s, i), c.push(o), Mt(s = new Date(o[6].yyyyMmDd), 1);
                return void 0 !== o[6].dataValue && (Mt(s, 1), c.push(this.getCol(s, i, !0))), r.cols = c, r
            }
        }, {
            key: "getCol", value: function (t, e) {
                for (var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = this.state, a = xt(t), s = [], r = 0; r < 7; r++, Mt(a, 1)) {
                    var o = {}, l = a >= i.start && a <= i.end;
                    n || a.getMonth() !== e || !l ? o.yyyyMmDd = bt(a) : o = this.getSubDomainConfig(a), s.push(o)
                }
                return s
            }
        }, {
            key: "getSubDomainConfig", value: function (t) {
                var e, n, i = bt(t), a = this.data.dataPoints[i];
                return {
                    yyyyMmDd: i,
                    dataValue: a || 0,
                    fill: this.colors[(e = a, n = this.state.distribution, n.filter((function (t) {
                        return t < e
                    })).length)]
                }
            }
        }]), s
    }(pt);

    function Yt(t, e) {
        t.labels = t.labels || [];
        var n = t.labels.length, i = t.datasets, a = new Array(n).fill(0);
        return i || (i = [{values: a}]), i.map((function (t) {
            if (t.values) {
                var i = t.values;
                i = (i = i.map((function (t) {
                    return isNaN(t) ? 0 : t
                }))).length > n ? i.slice(0, n) : C(i, n - i.length, 0)
            } else t.values = a;
            t.chartType || (t.chartType = e)
        })), t.yRegions && t.yRegions.map((function (t) {
            if (t.end < t.start) {
                var e = [t.end, t.start];
                t.start = e[0], t.end = e[1]
            }
        })), t
    }

    function Bt(t) {
        var e = t.labels.length, n = new Array(e).fill(0), i = {
            labels: t.labels.slice(0, -1), datasets: t.datasets.map((function (t) {
                return {name: "", values: n.slice(0, -1), chartType: t.chartType}
            }))
        };
        return t.yMarkers && (i.yMarkers = [{value: 0, label: ""}]), t.yRegions && (i.yRegions = [{
            start: 0,
            end: 0,
            label: ""
        }]), i
    }

    var Vt = function (t) {
        a(r, t);
        var n = l(r);

        function r(t, i) {
            var a;
            return e(this, r), (a = n.call(this, t, i)).barOptions = i.barOptions || {}, a.lineOptions = i.lineOptions || {}, a.type = i.type || "line", a.init = 1, a.setup(), a
        }

        return i(r, [{
            key: "setMeasures", value: function () {
                this.data.datasets.length <= 1 && (this.config.showLegend = 0, this.measures.paddings.bottom = 30)
            }
        }, {
            key: "configure", value: function (t) {
                c(s(r.prototype), "configure", this).call(this, t), t.axisOptions = t.axisOptions || {}, t.tooltipOptions = t.tooltipOptions || {}, this.config.xAxisMode = t.axisOptions.xAxisMode || "span", this.config.yAxisMode = t.axisOptions.yAxisMode || "span", this.config.xIsSeries = t.axisOptions.xIsSeries || 0, this.config.shortenYAxisNumbers = t.axisOptions.shortenYAxisNumbers || 0, this.config.formatTooltipX = t.tooltipOptions.formatTooltipX, this.config.formatTooltipY = t.tooltipOptions.formatTooltipY, this.config.valuesOverPoints = t.valuesOverPoints, this.config.legendRowHeight = 30
            }
        }, {
            key: "prepareData", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data;
                return Yt(t, this.type)
            }
        }, {
            key: "prepareFirstData", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data;
                return Bt(t)
            }
        }, {
            key: "calc", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.calcXPositions(), t || this.calcYAxisParameters(this.getAllYValues(), "line" === this.type), this.makeDataByIndex()
            }
        }, {
            key: "calcXPositions", value: function () {
                var t = this.state, e = this.data.labels;
                t.datasetLength = e.length, t.unitWidth = this.width / t.datasetLength, t.xOffset = t.unitWidth / 2, t.xAxis = {
                    labels: e,
                    positions: e.map((function (e, n) {
                        return T(t.xOffset + n * t.unitWidth)
                    }))
                }
            }
        }, {
            key: "calcYAxisParameters", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "false", n = zt(t, e),
                    i = this.height / Wt(n), a = Rt(n) * i, s = this.height - Ht(n) * a;
                this.state.yAxis = {
                    labels: n, positions: n.map((function (t) {
                        return s - t * i
                    })), scaleMultiplier: i, zeroLine: s
                }, this.calcDatasetPoints(), this.calcYExtremes(), this.calcYRegions()
            }
        }, {
            key: "calcDatasetPoints", value: function () {
                var t = this.state, e = function (e) {
                    return e.map((function (e) {
                        return jt(e, t.yAxis)
                    }))
                };
                t.datasets = this.data.datasets.map((function (t, n) {
                    var i = t.values, a = t.cumulativeYs || [];
                    return {
                        name: t.name.replace(/<|>|&/g, (function (t) {
                            return "&" == t ? "&amp;" : "<" == t ? "&lt;" : "&gt;"
                        })),
                        index: n,
                        chartType: t.chartType,
                        values: i,
                        yPositions: e(i),
                        cumulativeYs: a,
                        cumulativeYPos: e(a)
                    }
                }))
            }
        }, {
            key: "calcYExtremes", value: function () {
                var t = this.state;
                this.barOptions.stacked ? t.yExtremes = t.datasets[t.datasets.length - 1].cumulativeYPos : (t.yExtremes = new Array(t.datasetLength).fill(9999), t.datasets.map((function (e) {
                    e.yPositions.map((function (e, n) {
                        e < t.yExtremes[n] && (t.yExtremes[n] = e)
                    }))
                })))
            }
        }, {
            key: "calcYRegions", value: function () {
                var t = this.state;
                this.data.yMarkers && (this.state.yMarkers = this.data.yMarkers.map((function (e) {
                    return e.position = jt(e.value, t.yAxis), e.options || (e.options = {}), e
                }))), this.data.yRegions && (this.state.yRegions = this.data.yRegions.map((function (e) {
                    return e.startPos = jt(e.start, t.yAxis), e.endPos = jt(e.end, t.yAxis), e.options || (e.options = {}), e
                })))
            }
        }, {
            key: "getAllYValues", value: function () {
                var t, e = this, n = "values";
                if (this.barOptions.stacked) {
                    n = "cumulativeYs";
                    var i = new Array(this.state.datasetLength).fill(0);
                    this.data.datasets.map((function (t, a) {
                        var s = e.data.datasets[a].values;
                        t[n] = i = i.map((function (t, e) {
                            return t + s[e]
                        }))
                    }))
                }
                var a = this.data.datasets.map((function (t) {
                    return t[n]
                }));
                return this.data.yMarkers && a.push(this.data.yMarkers.map((function (t) {
                    return t.value
                }))), this.data.yRegions && this.data.yRegions.map((function (t) {
                    a.push([t.end, t.start])
                })), (t = []).concat.apply(t, h(a))
            }
        }, {
            key: "setupComponents", value: function () {
                var t = this, e = [["yAxis", {
                    mode: this.config.yAxisMode,
                    width: this.width,
                    shortenNumbers: this.config.shortenYAxisNumbers
                }, function () {
                    return this.state.yAxis
                }.bind(this)], ["xAxis", {mode: this.config.xAxisMode, height: this.height}, function () {
                    var t = this.state;
                    return t.xAxis.calcLabels = function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            i = t / e.length * .6;
                        i <= 0 && (i = 1);
                        var a, s = i / 7;
                        if (n) {
                            var r = Math.max.apply(Math, h(e.map((function (t) {
                                return t.length
                            }))));
                            a = Math.ceil(r / s)
                        }
                        var o = e.map((function (t, i) {
                            return (t += "").length > s && (n ? i % a != 0 && i !== e.length - 1 && (t = "") : t = s - 3 > 0 ? t.slice(0, s - 3) + " ..." : t.slice(0, s) + ".."), t
                        }));
                        return o
                    }(this.width, t.xAxis.labels, this.config.xIsSeries), t.xAxis
                }.bind(this)], ["yRegions", {width: this.width, pos: "right"}, function () {
                    return this.state.yRegions
                }.bind(this)]], n = this.state.datasets.filter((function (t) {
                    return "bar" === t.chartType
                })), i = this.state.datasets.filter((function (t) {
                    return "line" === t.chartType
                })), a = n.map((function (e) {
                    var i = e.index;
                    return ["barGraph-" + e.index, {
                        index: i,
                        color: t.colors[i],
                        stacked: t.barOptions.stacked,
                        valuesOverPoints: t.config.valuesOverPoints,
                        minHeight: 0 * t.height
                    }, function () {
                        var t = this.state, e = t.datasets[i], a = this.barOptions.stacked,
                            s = this.barOptions.spaceRatio || .5, r = t.unitWidth * (1 - s), o = r / (a ? 1 : n.length),
                            l = t.xAxis.positions.map((function (t) {
                                return t - r / 2
                            }));
                        a || (l = l.map((function (t) {
                            return t + o * i
                        })));
                        var c = new Array(t.datasetLength).fill("");
                        this.config.valuesOverPoints && (c = a && e.index === t.datasets.length - 1 ? e.cumulativeYs : e.values);
                        var u = new Array(t.datasetLength).fill(0);
                        return a && (u = e.yPositions.map((function (t, n) {
                            return t - e.cumulativeYPos[n]
                        }))), {
                            xPositions: l,
                            yPositions: e.yPositions,
                            offsets: u,
                            labels: c,
                            zeroLine: t.yAxis.zeroLine,
                            barsWidth: r,
                            barWidth: o
                        }
                    }.bind(t)]
                })), s = i.map((function (e) {
                    var n = e.index;
                    return ["lineGraph-" + e.index, {
                        index: n,
                        color: t.colors[n],
                        svgDefs: t.svgDefs,
                        heatline: t.lineOptions.heatline,
                        regionFill: t.lineOptions.regionFill,
                        spline: t.lineOptions.spline,
                        showDots: t.lineOptions.showDots,
                        hideLine: t.lineOptions.hideLine,
                        valuesOverPoints: t.config.valuesOverPoints
                    }, function () {
                        var t = this.state, e = t.datasets[n],
                            i = t.yAxis.positions[0] < t.yAxis.zeroLine ? t.yAxis.positions[0] : t.yAxis.zeroLine;
                        return {
                            xPositions: t.xAxis.positions,
                            yPositions: e.yPositions,
                            values: e.values,
                            zeroLine: i,
                            radius: this.lineOptions.dotSize || 4
                        }
                    }.bind(t)]
                })), r = [["yMarkers", {width: this.width, pos: "right"}, function () {
                    return this.state.yMarkers
                }.bind(this)]];
                e = e.concat(a, s, r);
                var o = ["yMarkers", "yRegions"];
                this.dataUnitComponents = [], this.components = new Map(e.filter((function (e) {
                    return !o.includes(e[0]) || t.state[e[0]]
                })).map((function (e) {
                    var n = Pt.apply(void 0, h(e));
                    return (e[0].includes("lineGraph") || e[0].includes("barGraph")) && t.dataUnitComponents.push(n), [e[0], n]
                })))
            }
        }, {
            key: "makeDataByIndex", value: function () {
                var t = this;
                this.dataByIndex = {};
                var e = this.state, n = this.config.formatTooltipX, i = this.config.formatTooltipY;
                e.xAxis.labels.map((function (a, s) {
                    var r = t.state.datasets.map((function (e, n) {
                        var a = e.values[s];
                        return {
                            title: e.name,
                            value: a,
                            yPos: e.yPositions[s],
                            color: t.colors[n],
                            formatted: i ? i(a) : a
                        }
                    }));
                    t.dataByIndex[s] = {
                        label: a,
                        formattedLabel: n ? n(a) : a,
                        xPos: e.xAxis.positions[s],
                        values: r,
                        yExtreme: e.yExtremes[s]
                    }
                }))
            }
        }, {
            key: "bindTooltip", value: function () {
                var t = this;
                this.container.addEventListener("mousemove", (function (e) {
                    var n = t.measures, i = v(t.container), a = e.pageX - i.left - x(n), s = e.pageY - i.top;
                    s < t.height + b(n) && s > b(n) ? t.mapTooltipXPosition(a) : t.tip.hideTip()
                }))
            }
        }, {
            key: "mapTooltipXPosition", value: function (t) {
                var e = this.state;
                if (e.yExtremes) {
                    var n = function (t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = e.reduce((function (e, n) {
                                return Math.abs(n - t) < Math.abs(e - t) ? n : e
                            }), []);
                        return n ? e.indexOf(i) : i
                    }(t, e.xAxis.positions, !0);
                    if (n >= 0) {
                        var i = this.dataByIndex[n];
                        this.tip.setValues(i.xPos + this.tip.offset.x, i.yExtreme + this.tip.offset.y, {
                            name: i.formattedLabel,
                            value: ""
                        }, i.values, n), this.tip.showTip()
                    }
                }
            }
        }, {
            key: "renderLegend", value: function () {
                var t = this.data;
                t.datasets.length > 1 && c(s(r.prototype), "renderLegend", this).call(this, t.datasets)
            }
        }, {
            key: "makeLegend", value: function (t, e, n, i) {
                return Z(n, i + 5, 12, 3, this.colors[e], t.name, null, 8.75, this.config.truncateLegends)
            }
        }, {
            key: "makeOverlay", value: function () {
                var t = this;
                this.init ? this.init = 0 : (this.overlayGuides && this.overlayGuides.forEach((function (t) {
                    var e = t.overlay;
                    e.parentNode.removeChild(e)
                })), this.overlayGuides = this.dataUnitComponents.map((function (t) {
                    return {type: t.unitType, overlay: void 0, units: t.units}
                })), void 0 === this.state.currentIndex && (this.state.currentIndex = this.state.datasetLength - 1), this.overlayGuides.map((function (e) {
                    var n = e.units[t.state.currentIndex];
                    e.overlay = it[e.type](n), t.drawArea.appendChild(e.overlay)
                })))
            }
        }, {
            key: "updateOverlayGuides", value: function () {
                this.overlayGuides && this.overlayGuides.forEach((function (t) {
                    var e = t.overlay;
                    e.parentNode.removeChild(e)
                }))
            }
        }, {
            key: "bindOverlay", value: function () {
                var t = this;
                this.parent.addEventListener("data-select", (function () {
                    t.updateOverlay()
                }))
            }
        }, {
            key: "bindUnits", value: function () {
                var t = this;
                this.dataUnitComponents.map((function (e) {
                    e.units.map((function (e) {
                        e.addEventListener("click", (function () {
                            var n = e.getAttribute("data-point-index");
                            t.setCurrentDataPoint(n)
                        }))
                    }))
                })), this.tip.container.addEventListener("click", (function () {
                    var e = t.tip.container.getAttribute("data-point-index");
                    t.setCurrentDataPoint(e)
                }))
            }
        }, {
            key: "updateOverlay", value: function () {
                var t = this;
                this.overlayGuides.map((function (e) {
                    var n = e.units[t.state.currentIndex];
                    at[e.type](n, e.overlay)
                }))
            }
        }, {
            key: "onLeftArrow", value: function () {
                this.setCurrentDataPoint(this.state.currentIndex - 1)
            }
        }, {
            key: "onRightArrow", value: function () {
                this.setCurrentDataPoint(this.state.currentIndex + 1)
            }
        }, {
            key: "getDataPoint", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.currentIndex,
                    e = this.state, n = {
                        index: t, label: e.xAxis.labels[t], values: e.datasets.map((function (e) {
                            return e.values[t]
                        }))
                    };
                return n
            }
        }, {
            key: "setCurrentDataPoint", value: function (t) {
                var e = this.state;
                (t = parseInt(t)) < 0 && (t = 0), t >= e.xAxis.labels.length && (t = e.xAxis.labels.length - 1), t !== e.currentIndex && (e.currentIndex = t, function (t, e, n) {
                    var i = document.createEvent("HTMLEvents");
                    for (var a in i.initEvent(e, !0, !0), n) i[a] = n[a];
                    t.dispatchEvent(i)
                }(this.parent, "data-select", this.getDataPoint()))
            }
        }, {
            key: "addDataPoint", value: function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state.datasetLength;
                c(s(r.prototype), "addDataPoint", this).call(this, t, e, n), this.data.labels.splice(n, 0, t), this.data.datasets.map((function (t, i) {
                    t.values.splice(n, 0, e[i])
                })), this.update(this.data)
            }
        }, {
            key: "removeDataPoint", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.datasetLength - 1;
                this.data.labels.length <= 1 || (c(s(r.prototype), "removeDataPoint", this).call(this, t), this.data.labels.splice(t, 1), this.data.datasets.map((function (e) {
                    e.values.splice(t, 1)
                })), this.update(this.data))
            }
        }, {
            key: "updateDataset", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.data.datasets[e].values = t, this.update(this.data)
            }
        }, {
            key: "updateDatasets", value: function (t) {
                this.data.datasets.map((function (e, n) {
                    t[n] && (e.values = t[n])
                })), this.update(this.data)
            }
        }]), r
    }(pt), Ut = {
        bar: Vt, line: Vt, percentage: Nt, heatmap: It, pie: Et, donut: function (t) {
            a(r, t);
            var n = l(r);

            function r(t, i) {
                return e(this, r), n.call(this, t, i)
            }

            return i(r, [{
                key: "configure", value: function (t) {
                    c(s(r.prototype), "configure", this).call(this, t), this.type = "donut", this.sliceName = "donutSlices", this.arcFunc = G, this.shapeFunc = X, this.strokeWidth = t.strokeWidth || 30
                }
            }, {
                key: "getRadius", value: function () {
                    return this.height > this.width ? this.center.x - this.strokeWidth / 2 : this.center.y - this.strokeWidth / 2
                }
            }, {
                key: "setupComponents", value: function () {
                    var t = this.state, e = [[this.sliceName, {}, function () {
                        return {sliceStrings: t.sliceStrings, colors: this.colors, strokeWidth: this.strokeWidth}
                    }.bind(this)]];
                    this.components = new Map(e.map((function (t) {
                        var e = Pt.apply(void 0, h(t));
                        return [t[0], e]
                    })))
                }
            }]), r
        }(Et)
    };
    var _t = Object.freeze({
        __proto__: null, Chart: function t(n, i) {
            return e(this, t), function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "line",
                    e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0;
                return "axis-mixed" === t ? (n.type = "line", new Vt(e, n)) : Ut[t] ? new Ut[t](e, n) : void console.error("Undefined chart type: " + t)
            }(i.type, n, i)
        }, PercentageChart: Nt, PieChart: Et, Heatmap: It, AxisChart: Vt
    }), qt = {NAME: "Frappe Charts", VERSION: "2.0.0-rc5"};
    return qt = Object.assign({}, qt, _t)
}));
(function (window) {
    window['frappeCharts2'] = window['frappeCharts2']
    return window['frappeCharts2'];
// export

})(window);

