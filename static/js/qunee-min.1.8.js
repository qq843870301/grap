window.Q = function(t, i, n) {
    "use strict";

    function e(t, i, n) {
        if (t[th]()) {
            var s = t._f5 || t.getChildren();
            if (s) {
                s = s._jp || s;
                for (var r = 0, h = s.length; h > r; r++)
                    if (i[ih](n, s[r]) === !1 || e(s[r], i, n) === !1) return !1;
                return !0
            }
        }
    }

    function s(t) {
        if (!t[th]()) return t instanceof FU ? t : null;
        for (var i, n = t._f5._jp, e = n.length - 1; e >= 0;) {
            if (i = n[e], i = s(i)) return i;
            e--
        }
        return null
    }

    function r(t, i, n, e) {
        return e ? h(t, i, n) : a(t, i, n)
    }

    function h(t, i, n) {
        t = t._jp || t;
        for (var e, s = 0, r = t[nh]; r > s; s++)
            if (e = t[s], e[th]() && !h(e[eh], i, n) || i[ih](n, e) === !1) return !1;
        return !0
    }

    function a(t, i, n) {
        t = t._jp || t;
        for (var e, s = 0, r = t[nh]; r > s; s++)
            if (e = t[s], i.call(n, e) === !1 || e.hasChildren() && !a(e[eh], i, n)) return !1;
        return !0
    }

    function o(t, i, n, e) {
        return e ? f(t, i, n) : u(t, i, n)
    }

    function f(t, i, n) {
        t = t._jp || t;
        for (var e, s = t[nh], r = s - 1; r >= 0; r--)
            if (e = t[r], e[th]() && !f(e[eh], i, n) || i[ih](n, e) === !1) return !1;
        return !0
    }

    function u(t, i, n) {
        t = t._jp || t;
        for (var e, s = t.length, r = s - 1; r >= 0; r--)
            if (e = t[r], i[ih](n, e) === !1 || e.hasChildren() && !u(e.children, i, n)) return !1;
        return !0
    }

    function c(t, i, n) {
        for (var e, s = (t._jp || t)[sh](0); s[nh];) {
            e = s[0], s = s.splice(1);
            var r = i[ih](n, e);
            if (r === !1) return !1;
            if (e[th]()) {
                var h = e[eh];
                h = h._jp || h, s = s[rh](h)
            }
        }
        return !0
    }

    function d(t, i, n) {
        for (var e, s = (t._jp || t)[sh](0); s.length;) {
            e = s[s[nh] - 1], s = s[hh](0, s[nh] - 1);
            var r = i.call(n, e);
            if (r === !1) return !1;
            if (e.hasChildren()) {
                var h = e[eh];
                h = h._jp || h, s = s[rh](h)
            }
        }
        return !0
    }

    function _(t, i) {
        function n(t, n) {
            for (var e = t[nh], s = n[nh], r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f;) h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return h
        }

        function e(t) {
            var i = t[nh],
                s = Math.ceil(i / 2);
            return 1 >= i ? t : n(e(t[sh](0, s)), e(t.slice(s)))
        }
        return e(t)
    }

    function l(t, i, n, e) {
        t instanceof xq && (t = t._jp);
        for (var s = 0, r = (t._jp || t)[nh]; r > s; s++) {
            var h = i[ih](n, t[s], s, e);
            if (h === !1) return !1
        }
        return !0
    }

    function v(t, i, n) {
        for (var e = t instanceof xq, s = t._jp || t, r = 0, h = s[nh]; h > r; r++) {
            var a = s[r];
            i.call(n, a) && (e ? t[ah](a) : t.splice(r, 1), r--, h--)
        }
    }

    function b(t, i, n, e) {
        t instanceof xq && (t = t._jp);
        for (var s = (t._jp || t)[nh] - 1; s >= 0; s--) {
            var r = i.call(n, t[s], s, e);
            if (r === !1) return !1
        }
        return !0
    }

    function y(t) {
        if (t[oh] instanceof Function) return t.clone(!0);
        var i, n = [];
        return l(t, function(t) {
            i = t && t.clone instanceof Function ? t[oh]() : t, n[fh](i)
        }, this), n
    }

    function g(t, i, e) {
        e === n || 0 > e ? t.push(i) : t.splice(e, 0, i)
    }

    function m(t, i) {
        var n = t[uh](i);
        return 0 > n || n >= t[nh] ? !1 : t.splice(n, 1)
    }

    function x(t, i) {
        var n = !1;
        return l(t, function(t) {
            return i == t ? (n = !0, !1) : void 0
        }), n
    }

    function p(t, i) {
        var n = t;
        for (var e in i)
            if (i.__lookupGetter__) {
                var s = i.__lookupGetter__(e),
                    r = i.__lookupSetter__(e);
                s || r ? (s && n.__defineGetter__(e, s), r && n.__defineSetter__(e, r)) : n[e] = i[e]
            } else n[e] = i[e];
        return n
    }

    function E(t, i, n) {
        if (!(t instanceof Function)) throw new Error("subclass must be type of Function");
        var e = null;
        ch == typeof i && (e = i, i = t, t = function() {
            i[dh](this, arguments)
        });
        var s = t.prototype,
            r = function() {};
        return r[_h] = i.prototype, t[_h] = new r, t[lh] = i.prototype, t[lh].constructor = i, p(t[_h], s), e && p(t[_h], e), n && p(t[_h], n), t.prototype.class = t, t
    }

    function w(t, i, n) {
        return T(t, i, "constructor", n)
    }

    function T(t, i, n, e) {
        var s = i[lh];
        if (s) {
            var r = s[n];
            return r ? r[dh](t, e) : void 0
        }
    }

    function k(t, i, n, e) {
        if ("constructor" == n) return O(t, i, e);
        if (i[vh] instanceof Function) {
            var s = i[vh][_h][n];
            return s instanceof Function ? s[dh](t, e) : void 0
        }
    }

    function O(t, i, n) {
        return i[vh] instanceof Function ? i.super_[dh](t, n) : void 0
    }

    function S(t, i) {
        return t.super_ = i, t.prototype = Object[bh](i[_h], {
            super_: {
                value: i,
                enumerable: !1
            },
            constructor: {
                value: t,
                enumerable: !1
            }
        }), t
    }

    function M(t, i, n) {
        if (!(t instanceof Function) && t instanceof Object) {
            i = t[yh];
            var e;
            return t.hasOwnProperty("constructor") ? (e = t.constructor, delete t.constructor) : e = i ? function() {
                i[dh](this, arguments)
            } : function() {}, M(e, i, t)
        }
        if (i && !(i instanceof Function) && i instanceof Object) return M(t, i.super, i);
        if (i && S(t, i), n) {
            var s = t.prototype;
            for (var r in n) s[r] = n[r]
        }
        return t
    }

    function I(t, i, e, s, r) {
        if (s) return void Object[gh](t, i, {
            value: e,
            enumerable: !0
        });
        var h = {
                configurable: !0,
                enumerable: !0
            },
            a = mh + i;
        e !== n && (t[a] = e), h.get = function() {
            return this[a]
        }, h.set = function(t) {
            var n = this[a];
            if (n == t) return !1;
            var e = new $q(this, i, t, n);
            return this[xh](e) ? (this[a] = t, r && r[ih](this, t, n), this.onEvent(e), !0) : !1
        }, Object[gh](t, i, h)
    }

    function P(t, i) {
        for (var n = 0, e = i.length; e > n; n++) {
            var s = i[n];
            I(t, s[ph] || s, s[Eh] || s.value, s.readOnly, s[wh])
        }
    }

    function C(t, i, n) {
        return i instanceof Object ? t = t.bind(i) : i && !n && (n = parseInt(i)), i && !n && (n = parseInt(i)), n ? setTimeout(t, n) : setTimeout(t)
    }

    function A(i, n) {
        return n && (i = i[Th](n)), t[kh](i)
    }

    function L(t, i) {
        return t[Oh] = i, t
    }

    function R(t, i) {
        if (!t.hasOwnProperty(Sh)) {
            var n = t[Mh](Ih);
            if (!n) return L(t, i);
            for (var e = n.split(Ph), s = 0, r = e.length; r > s; s++)
                if (e[s] == i) return;
            return n += Ph + i, L(t, n)
        }
        t[Sh].add(i)
    }

    function j(t, i) {
        if (!t.hasOwnProperty(Sh)) {
            var n = t.getAttribute(Ih);
            if (!n || !n[uh](i)) return;
            for (var e = "", s = n[Ch](Ph), r = 0, h = s[nh]; h > r; r++) s[r] != i && (e += s[r] + Ph);
            return L(t, e)
        }
        t.classList[ah](i)
    }

    function D(t) {
        return !isNaN(t) && t instanceof Number || Ah == typeof t
    }

    function N(t) {
        return t !== n && (t instanceof String || Lh == typeof t)
    }

    function B(t) {
        return t !== n && (t instanceof Boolean || Rh == typeof t)
    }

    function $(t) {
        return Array.isArray(t)
    }

    function F(i) {
        i || (i = t[jh]), i.preventDefault ? i[Dh]() : i[Nh] = !1
    }

    function z(i) {
        i || (i = t[jh]), i[Bh] ? i.stopPropagation() : i[$h] || (i[$h] = !0)
    }

    function G(t) {
        F(t), z(t)
    }

    function q(t) {
        return Math.floor(Math[Fh]() * t)
    }

    function Y() {
        return Math[Fh]() >= .5
    }

    function H(t) {
        var i = !0;
        for (var n in t) {
            i = !1;
            break
        }
        return i
    }

    function U(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math.floor(16777215 * Math.random());
            return zh + (i >> 16 & 255) + Gh + (i >> 8 & 255) + Gh + (255 & i) + Gh + t[qh](2) + Yh
        }
        return X(Math[Hh](16777215 * Math.random()))
    }

    function W(t) {
        return t > 0 ? Math.floor(t) : Math[Uh](t)
    }

    function V(t) {
        return t > 0 ? Math.ceil(t) : Math.floor(t)
    }

    function X(t) {
        return 16777216 > t ? Wh + (Vh + t.toString(16)).slice(-6) : zh + (t >> 16 & 255) + Gh + (t >> 8 & 255) + Gh + (255 & t) + Gh + ((t >> 24 & 255) / 255)[qh](2) + Yh
    }

    function K(t, i, n) {
        ch != typeof n || n.hasOwnProperty(Xh) || (n[Xh] = !0), Object[gh](t, i, n)
    }

    function J(t, i) {
        for (var n in i)
            if (Kh != n[0]) {
                var e = i[n];
                ch != typeof e || e.hasOwnProperty(Xh) || (e.enumerable = !0)
            }
        Object[Jh](t, i)
    }

    function Z(i, n) {
        n || (n = t);
        for (var e = i[Ch](Zh), s = 0, r = e[nh]; r > s; s++) {
            var h = e[s];
            n = n[h]
        }
        return n
    }

    function Q(t) {
        return t instanceof MouseEvent || t instanceof Object && t[Qh] !== n
    }

    function ti() {
        t.console && console.log.apply(console, arguments)
    }

    function ii(i) {
        t[ta] && console[ia](i)
    }

    function ni(i) {
        t.console && console[na](i)
    }

    function ei(t, i, n) {
        var e, s, r;
        0 == t._mz ? (e = -1, r = 0, s = i) : 0 == t._mx ? (e = 0, r = 1, s = n) : (e = -1 / t._mz, s = (t._mz - e) * i + t._my, r = 1);
        var h = new kq;
        return h._mz = e, h._my = s, h._mx = r, h._mw = i, h._ms = n, h._kt = Math[ea](e, r), h._mxos = Math.cos(h._kt), h[sa] = Math.sin(h._kt), h
    }

    function si(t, i, n, e, s) {
        var r, h;
        i > e ? r = -1 : e > i && (r = 1), n > s ? h = -1 : s > n && (h = 1);
        var a, o;
        if (!r) return o = 0 > h ? t.y : t[ra], {
            x: i,
            y: o
        };
        if (!h) return a = 0 > r ? t.x : t[ha], {
            x: a,
            y: n
        };
        var f = (n - s) / (i - e),
            u = n - f * i,
            c = 0 > r ? i - t.x : i - t[ha],
            d = 0 > h ? n - t.y : n - t[ra];
        return Math.abs(f) >= Math.abs(d / c) ? (o = 0 > h ? t.y : t[ra], a = (o - u) / f) : (a = 0 > r ? t.x : t.right, o = f * a + u), {
            x: a,
            y: o
        }
    }

    function ri(t, i, n, e, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
    }

    function hi(t, i, n, e, s, r) {
        return s >= t && t + n >= s && r >= i && i + e >= r
    }

    function ai(t, i, n, e, s, r, h, a, o) {
        return o && (t -= o, i -= o, n += o + o, e += o + o), s >= t && r >= i && t + n >= s + h && i + e >= r + a
    }

    function oi(t, i, n, e, s, r, h, a) {
        var o = t;
        o += n;
        var f = i;
        f += e;
        var u = s;
        u += h;
        var c = r;
        return c += a, s > t && (t = s), r > i && (i = r), o > u && (o = u), f > c && (f = c), o -= t, f -= i, 0 > o || 0 > f ? null : new Sq(t, i, o, f)
    }

    function fi(t) {
        return aa in t && oa in t
    }

    function ui(t, i) {
        var n = ci(t, i.width, i.height);
        return n.x += i.x || 0, n.y += i.y || 0, n
    }

    function ci(t, i, e) {
        if (!t) return {
            x: 0,
            y: 0
        };
        if (N(t) && (t = Iq[fa](t)), t instanceof Iq) {
            var s, r, h = t[ua],
                a = t.verticalPosition;
            switch (h) {
                case Pq:
                    s = 0;
                    break;
                case Aq:
                    s = i;
                    break;
                default:
                    s = i / 2
            }
            switch (a) {
                case Lq:
                    r = 0;
                    break;
                case jq:
                    r = e;
                    break;
                default:
                    r = e / 2
            }
            return {
                x: s,
                y: r
            }
        }
        if (t.x !== n) return t.byPercent ? {
            x: t.x * i,
            y: t.y * e
        } : {
            x: t.x,
            y: t.y
        };
        throw new Error("Position not be supported - " + t)
    }

    function di(t, i, n) {
        t[eh].add(i, n), t[ca](i, n)
    }

    function _i(t, i) {
        t._f5 && (t._f5[ah](i), t.onChildRemove(i))
    }

    function li(t) {
        return t[da](/^-ms-/, _a)[da](/-([\da-z])/gi, function(t, i) {
            return i.toUpperCase()
        })
    }

    function vi(t) {
        return t[da](/[A-Z]/g, function(t) {
            return la + t[va]()
        })[da](/^ms-/, ba)
    }

    function bi(t, i) {
        var n = t[ya];
        if (!n) return !1;
        var e, s;
        for (e in i) i.hasOwnProperty(e) && (s = iY(e)) && (n[s] = i[e]);
        return t
    }

    function yi(t) {
        var i, n, e = "";
        for (i in t) t.hasOwnProperty(i) && (n = iY(i)) && (e += vi(n) + ga + t[i] + ma);
        return e ? e[xa](0, e[nh] - 1) : e
    }

    function gi(t, i, n) {
        (i = iY(i)) && (t[ya][i] = n)
    }

    function mi(t, i) {
        return Qq ? (i && !N(i) && (i = yi(i)), Qq.insertRule ? void Qq[pa](t + Ea + i + wa, 0) : void(Qq.addRule && Qq[Ta](t, i, 0))) : !1
    }

    function xi(t, i) {
        var n = t[ka];
        return n ? (i = i || t.getBoundingClientRect(), i[Oa] / n) : 1
    }

    function pi(i, n) {
        i[Qh] && (i = i[Sa] && i[Sa][nh] ? i[Sa][0] : i.touches[0]);
        var e = n.getBoundingClientRect(),
            s = i[Ma] || 0,
            r = i[Ia] || 0;
        yq && dq && (t.pageXOffset && s == i[Pa] && (s -= t[Ca]), t[Aa] && r == i.pageY && (r -= t[Aa])), s -= e[La], r -= e.top;
        var h = xi(n, e);
        return h && 1 !== h && (s /= h, r /= h), {
            x: s,
            y: r
        }
    }

    function Ei(t, i) {
        var n, e;
        t[Qh] ? (n = t.cx, e = t.cy) : (n = t[Ma], e = t.clientY);
        var s = xi(i);
        return s && 1 !== s && (n /= s, e /= s), {
            timeStamp: t[Ra],
            x: n,
            y: e
        }
    }

    function wi(t, i, n) {
        this._li = t, this[ja] = n, this._handler = i, this._dragPoints = new ki, this._install()
    }

    function Ti(t) {
        return _q && t[Da] || !_q && t[Na]
    }

    function ki() {
        this.points = []
    }

    function Oi(t, i, n, e, s) {
        Mi(t, function(e) {
            if (i) {
                var s = e[Ba];
                if (!s) return void(n || AY)($a + t + Fa);
                i(s)
            }
        }, n, e, s)
    }

    function Si(t, i, n, e, s) {
        Mi(t, function(e) {
            if (i) {
                var s, r = e.responseText;
                if (!r) return (n || AY)($a + t + za), s = new Error($a + t + za), i(r, s);
                try {
                    r = JSON[Ga](r)
                } catch (h) {
                    (n || AY)(h), s = h
                }
                i(r, s)
            }
        }, n, e, s)
    }

    function Mi(t, i, n, e, s) {
        (n === !1 || e === !1) && (s = !1);
        try {
            var r = new XMLHttpRequest,
                h = encodeURI(t);
            if (s !== !1) {
                var a;
                a = h[uh](qa) > 0 ? "&" : qa, h += a + Ya + Date.now()
            }
            r[Ha](Ua, h), r.onreadystatechange = function() {
                return 4 == r[Wa] ? r[Va] && 200 != r[Va] ? void(n || AY)($a + t + Xa) : void(i && i(r)) : void 0
            }, r[Ka](e)
        } catch (o) {
            (n || AY)($a + t + Xa, o)
        }
    }

    function ri(t, i, n, e, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= n || 0 >= e ? !1 : (h += s, a += r, n += t, e += i, (s > h || h > t) && (r > a || a > i) && (t > n || n > s) && (i > e || e > r))
    }

    function ai(t, i, n, e, s, r, h, a) {
        return s >= t && r >= i && t + n >= s + h && i + e >= r + a
    }

    function Ii(t, i, n) {
        return t instanceof Object && t.x ? Ci(t, i, 0, 0) : Pi(t, i, n, 0, 0)
    }

    function Pi(t, i, n, e, s) {
        var r = Math.sin(n),
            h = Math.cos(n),
            a = t - e,
            o = i - s;
        return t = a * h - o * r + e, i = a * r + o * h + s, new wq(t, i, n)
    }

    function Ci(t, i, n, e) {
        n = n || 0, e = e || 0;
        var s = Math.sin(i),
            r = Math.cos(i),
            h = t.x - n,
            a = t.y - e;
        return t.x = h * r - a * s + n, t.y = h * s + a * r + e, t
    }

    function Ai(t, i, n) {
        return Li(t, i, n, 0, 0)
    }

    function Li(t, i, n, e, s) {
        var r = Pi(t.x, t.y, i, e, s),
            h = Pi(t.x + t[Oa], t.y, i, e, s),
            a = Pi(t.x + t[Oa], t.y + t.height, i, e, s),
            o = Pi(t.x, t.y + t[Ja], i, e, s);
        return n ? n.clear() : n = new Sq, n[Za](r), n[Za](h), n[Za](a), n.addPoint(o), n
    }

    function Ri(t, i) {
        var n = this[Qa] || 1;
        this[ya].width = t + to, this[ya][Ja] = i + to, this[Oa] = t * n, this[Ja] = i * n
    }

    function ji(t) {
        var i = t.webkitBackingStorePixelRatio || t[io] || t[no] || t[eo] || t[so] || 1;
        return jY / i
    }

    function Di(t, n, e) {
        var s = i[ro](ho);
        if (s.g = s[ao](oo), t !== !0 && !e) return t && n && (s[Oa] = t, s[Ja] = n), s;
        var r = s.g;
        return r[Qa] = s[Qa] = ji(r), s[fo] = Ri, r._k9 = function() {
            this[ho][Oa] = this.canvas.width
        }, t && n && s[fo](t, n), s
    }

    function Ni(t, i) {
        return DY || (DY = Di()), t && i && (DY[Oa] = t, DY[Ja] = i), DY.g
    }

    function Bi(t, i, n) {
        return (n || mq[uo]) + Ph + (i || mq.FONT_SIZE) + co + (t || mq[_o])
    }

    function $i(t, i, n, e, s, r, h, a, o, f) {
        if (t[lo](), t[vo](n, e), NY && BY > h) {
            var u = h / BY;
            t[bo](u, u), h = BY, f = null
        }
        o || (o = mq.LINE_HEIGHT), h || (h = mq[yo]), o *= h, t[go] = f || Bi(r, h, a), t[mo] = s, t[xo] = po;
        for (var c = o / 2, d = i[Ch](Eo), _ = 0, l = d[nh]; l > _; _++) {
            var v = d[_];
            t.fillText(v, 0, c), c += o
        }
        t[wo]()
    }

    function Fi(t, i, n, e, s, r) {
        if (!t) return {
            width: 0,
            height: 0
        };
        if (i || (i = mq[yo]), NY && BY > i) {
            var h = i / BY,
                a = Fi(t, BY, n, e, s);
            return a[Oa] *= h, a[Ja] *= h, a
        }
        var o = Ni();
        o[go] = r || Bi(n, i, e), s || (s = mq[To]);
        for (var f = i * s, u = 0, c = 0, d = t[Ch](Eo), _ = 0, l = d[nh]; l > _; _++) {
            var v = d[_];
            u = Math.max(o.measureText(v)[Oa], u), c += f
        }
        return {
            width: u,
            height: c
        }
    }

    function zi(t, i, n, e, s) {
        var r;
        try {
            r = t[ko](i, n, e, s)
        } catch (h) {}
        return r
    }

    function Gi(t) {
        return Math.log(t + Math[Oo](t * t + 1))
    }

    function qi(t, i) {
        i = i || t(1);
        var n = 1 / i,
            e = .5 * n,
            s = Math.min(1, i / 100);
        return function(r) {
            if (0 >= r) return 0;
            if (r >= i) return 1;
            for (var h = r * n, a = 0; a++ < 10;) {
                var o = t(h),
                    f = r - o;
                if (Math.abs(f) <= s) return h;
                h += f * e
            }
            return h
        }
    }

    function Yi(t, i, n) {
        var e = 1 - t,
            s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
            r = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var h = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
                a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {
                x: s,
                y: r,
                rotate: Math[ea](a, h)
            }
        }
        return {
            t: t,
            x: s,
            y: r
        }
    }

    function Hi(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e : -1
    }

    function Ui(t, i) {
        i.add(t[4], t[5]);
        var n = Hi(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = Yi(n, t);
            i.add(e.x, e.y)
        }
        var s = Hi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = Yi(s, t);
            i.add(e.x, e.y)
        }
        return i
    }

    function Wi(t, i) {
        return Math.abs(t - i) < 1e-7
    }

    function Vi(t, i) {
        return Wi(t[0], i[0]) && Wi(t[1], i[1])
    }

    function Xi(t) {
        if (Vi([t[0], t[1]], [t[2], t[3]])) {
            var i = t[0],
                n = t[1],
                e = t[4],
                s = t[5],
                r = Math.sqrt($Y(i, n, e, s));
            return function(t) {
                return r * t
            }
        }
        if (Vi([t[0], t[1]], [t[4], t[5]]) || Vi([t[2], t[3]], [t[4], t[5]])) {
            var i = t[0],
                n = t[1],
                e = t[2],
                s = t[3],
                r = Math.sqrt($Y(i, n, e, s));
            return function(t) {
                return r * t
            }
        }
        var h = t[0],
            a = t[2],
            o = t[4],
            f = h - 2 * a + o,
            u = 2 * a - 2 * h;
        h = t[1], a = t[3], o = t[5];
        var c = h - 2 * a + o,
            d = 2 * a - 2 * h,
            _ = 4 * (f * f + c * c),
            l = 4 * (f * u + c * d),
            v = u * u + d * d,
            r = 4 * _ * v - l * l,
            b = 1 / r,
            y = .125 * Math.pow(_, -1.5),
            g = 2 * Math[Oo](_),
            m = (r * Gi(l / Math[Oo](r)) + 2 * Math[Oo](_) * l * Math.sqrt(v)) * y;
        return function(t) {
            var i = l + 2 * t * _,
                n = i / Math[Oo](r),
                e = i * i * b;
            return (r * Math.log(n + Math[Oo](e + 1)) + g * i * Math[Oo](v + t * l + t * t * _)) * y - m
        }
    }

    function Ki(t, i, n) {
        var e = 1 - t,
            s = i[0],
            r = i[2],
            h = i[4],
            a = i[6],
            o = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
        if (n) var f = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
        s = i[1], r = i[3], h = i[5], a = i[7];
        var u = s * e * e * e + 3 * r * t * e * e + 3 * h * t * t * e + a * t * t * t;
        if (n) {
            var c = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + (-3 * t * t + 6 * t - 3) * s;
            return {
                x: o,
                y: u,
                rotate: Math[ea](c, f)
            }
        }
        return {
            x: o,
            y: u
        }
    }

    function Ji(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
        var r = 2 * t - 4 * i + 2 * n,
            h = i - t,
            a = r * r - 4 * s * h;
        return 0 > a ? void 0 : 0 == a ? [-r / (2 * s)] : (a = Math[Oo](a), [(a - r) / (2 * s), (-a - r) / (2 * s)])
    }

    function Zi(t, i) {
        i.add(t[6], t[7]);
        var n = Ji(t[0], t[2], t[4], t[6]);
        if (n)
            for (var e = 0; e < n[nh]; e++) {
                var s = n[e];
                if (!(0 >= s || s >= 1)) {
                    var r = Ki(s, t);
                    i.add(r.x, r.y)
                }
            }
        if (n = Ji(t[1], t[3], t[5], t[7]))
            for (var e = 0; e < n.length; e++) {
                var s = n[e];
                if (!(0 >= s || s >= 1)) {
                    var r = Ki(s, t);
                    i.add(r.x, r.y)
                }
            }
    }

    function Qi(t) {
        var i = {
                x: t[0],
                y: t[1]
            },
            n = {
                x: t[2],
                y: t[3]
            },
            e = {
                x: t[4],
                y: t[5]
            },
            s = {
                x: t[6],
                y: t[7]
            },
            r = i.x - 0,
            h = i.y - 0,
            a = n.x - 0,
            o = n.y - 0,
            f = e.x - 0,
            u = e.y - 0,
            c = s.x - 0,
            d = s.y - 0,
            _ = 3 * (-r + 3 * a - 3 * f + c),
            l = 6 * (r - 2 * a + f),
            v = 3 * (-r + a),
            b = 3 * (-h + 3 * o - 3 * u + d),
            y = 6 * (h - 2 * o + u),
            g = 3 * (-h + o),
            m = function(t) {
                var i = _ * t * t + l * t + v,
                    n = b * t * t + y * t + g;
                return Math.sqrt(i * i + n * n)
            },
            x = (m(0) + 4 * m(.5) + m(1)) / 6;
        return x
    }

    function tn(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e,
                r = 2 * t - 4 * i + 2 * n,
                h = i - t;
            return function(t) {
                return 3 * (s * t * t + r * t + h)
            }
        }

        function e(t, i) {
            var n = s(t),
                e = r(t);
            return Math[Oo](n * n + e * e) * i
        }
        var s = n(t[0], t[2], t[4], t[6]),
            r = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var h = 1 / i;
        return function(t) {
            if (!t) return 0;
            for (var i, n = 0, s = 0;;) {
                if (i = n + h, i >= t) return s += e(n, i - n);
                s += e(n, h), n = i
            }
        }
    }

    function nn(t, i, n) {
        return $Y(i, n, t.cx, t.cy) <= t[So] + FY
    }

    function en(t, i, n, e) {
        return n = n || sn(t, i), new rn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
    }

    function sn(t, i) {
        return Tq(t.x, t.y, i.x, i.y)
    }

    function rn(t, i, n, e, s, r, h) {
        this.cx = t, this.cy = i, this.r = n, this[So] = n * n, this.p1 = e, this.p2 = s, this.p3 = r, this._otherPoint = h
    }

    function hn(t, i, n, e) {
        this.cx = t, this.cy = i, this[Oa] = n, this[Ja] = e
    }

    function an(t) {
        var i = t[0],
            n = t[1],
            e = t[2],
            s = rn[Mo](i, n, e);
        return fn(t, i, n, e, s)
    }

    function on(t, i) {
        i = i || un(t);
        for (var n, e = i[Oa] / i[Ja], s = [], r = t[nh], h = 0; r > h; h++) n = t[h], s[fh]({
            x: n.x,
            y: n.y * e
        });
        var a = an(s);
        return a ? new hn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
    }

    function fn(t, i, n, e, s) {
        for (var r, h, a = t[nh], o = s[So], f = 0; a > f; f++)
            if (r = t[f], r != i && r != n && r != e) {
                var u = $Y(s.cx, s.cy, r.x, r.y);
                u - FY > o && (o = u, h = r)
            }
        if (!h) return s;
        var c, d = rn._jvCircle(h, i, n),
            _ = rn[Mo](h, i, e),
            l = rn._jvCircle(h, e, n);
        return nn(d, e.x, e.y) && (c = d), nn(_, n.x, n.y) && (!c || c.r > _.r) && (c = _), nn(l, i.x, i.y) && (!c || c.r > l.r) && (c = l), i = c.p1, n = c.p2, e = c.p3 || c._otherPoint, fn(t, i, n, e, c)
    }

    function un(t) {
        for (var i, n = t.length, e = new Sq, s = 0; n > s; s++) i = t[s], e.add(i.x, i.y);
        return e
    }

    function cn(t, i, n, e, s) {
        this._5v && this[Io]();
        var r = s ? this[Po](s) : this[Co],
            h = n / r.width,
            a = t - h * r.x,
            o = e / r.height,
            f = i - o * r.y,
            u = this._fd,
            c = [];
        return l(u, function(t) {
            var i = t[oh](),
                n = i[Ao];
            if (n && n[nh]) {
                for (var e = n[nh], s = [], r = 0; e > r; r++) {
                    var u = n[r];
                    r++;
                    var d = n[r];
                    u = h * u + a, d = o * d + f, s.push(u), s[fh](d)
                }
                i[Ao] = s
            }
            c.push(i)
        }, this), new yH(c)
    }

    function dn(t, i, n, e, s, r) {
        if (s = s || 0, n = n || 0, !s && !r) return !1;
        if (!e) {
            var h = this.getBounds(s);
            if (!h[Lo](t, i, n)) return !1
        }
        var a = Math[Ro](2 * n) || 1,
            o = Ni(a, a),
            f = (o[ho], -t + n),
            u = -i + n;
        if (o[jo](1, 0, 0, 1, f, u), !o[Do]) {
            this._lj(o), s && o[No](), r && o[Bo]();
            var c = zi(o, 0, 0, a, a);
            if (!c) return !1;
            c = c[$o];
            for (var d = c[nh] / 4; d > 0;) {
                if (c[4 * d - 1] > bH) return !0;
                --d
            }
            return !1
        }
        return o[Fo] = (s || 0) + 2 * n, this._lj(o), s && o[Do](n, n) ? !0 : r ? o[zo](n, n) : !1
    }

    function _n(t, i, n) {
        if (!this._iu) return null;
        var e = this._fd;
        if (e[nh] < 2) return null;
        n === !1 && (t += this._iu);
        var s = e[0];
        if (0 >= t) return Vs(s[Ao][0], s[Ao][1], e[1].points[0], e[1][Ao][1], t, i);
        if (t >= this._iu) {
            s = e[e[nh] - 1];
            var r, h, a = s[Ao],
                o = a[nh],
                f = a[o - 2],
                u = a[o - 1];
            if (o >= 4) r = a[o - 4], h = a[o - 3];
            else {
                s = e[e[nh] - 2];
                var c = s[Go];
                r = c.x, h = c.y
            }
            return Vs(f, u, f + f - r, u + u - h, t - this._iu, i)
        }
        for (var d, _ = 0, l = 1, o = e[nh]; o > l; l++)
            if (d = e[l], d._iu) {
                if (!(_ + d._iu < t)) {
                    var v, c = s[Go];
                    if (d[qo] == _H) {
                        var b = d[Ao];
                        v = ln(t - _, d, c.x, c.y, b[0], b[1], b[2], b[3], d._r)
                    } else {
                        if (!d._lf) return Vs(c.x, c.y, d[Ao][0], d[Ao][1], t - _, i);
                        var y = qi(d._lf, d._iu)(t - _),
                            b = d.points;
                        v = d[qo] == dH && 6 == b.length ? Ki(y, [c.x, c.y][rh](b), !0) : Yi(y, [c.x, c.y][rh](b), !0)
                    }
                    return i && (v.x -= i * Math.sin(v[Yo] || 0), v.y += i * Math.cos(v[Yo] || 0)), v
                }
                _ += d._iu, s = d
            } else s = d
    }

    function ln(t, i, n, e, s, r, h, a) {
        if (t <= i._l1) return Vs(n, e, s, r, t, t);
        if (t >= i._iu) return t -= i._iu, Vs(i[Ho], i[Uo], h, a, t, t);
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i._CCW && (o = -o);
            var f = Pi(i[Wo], i[Vo], o, i._o.x, i._o.y);
            return f[Yo] += i[Xo] || 0, f.rotate += Math.PI, f
        }
        return Vs(i._p1x, i[Vo], i[Ho], i._p2y, t, t)
    }

    function ei(t, i, n) {
        var e, s, r;
        0 == t._mz ? (e = -1, r = 0, s = i) : 0 == t._mx ? (e = 0, r = 1, s = n) : (e = -1 / t._mz, s = (t._mz - e) * i + t._my, r = 1);
        var h = new kq;
        return h._mz = e, h._my = s, h._mx = r, h._mw = i, h._ms = n, h
    }

    function vn(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
    }

    function bn(t, i, n, e, s, r, h, a) {
        var o = Tq(i, n, e, s),
            f = Tq(e, s, r, h);
        if (!o || !f) return t._d = 0, t._r = 0, t._l1 = o, t._l2 = f, t._iu = 0;
        var u = gn(e, s, i, n),
            c = gn(e, s, r, h);
        t[Xo] = u, t._mz2 = c;
        var d = u - c;
        d = vn(d), d > Math.PI && (d = 2 * Math.PI - d, t._CCW = !0);
        var _ = Math.PI - d,
            l = Math.tan(d / 2),
            v = a / l,
            b = Math.min(o, f);
        v > b && (v = b, a = l * v);
        var y, g = e + Math.cos(u) * v,
            m = s + Math.sin(u) * v,
            x = e + Math.cos(c) * v,
            p = s + Math.sin(c) * v,
            E = new kq(i, n, e, s),
            w = new kq(e, s, r, h),
            T = ei(E, g, m),
            k = ei(w, x, p),
            O = T._3d(k),
            S = Math[ea](m - O.y, g - O.x),
            M = Math[ea](p - O.y, x - O.x);
        y = t._CCW ? M : S;
        for (var I, P = 0; 4 > P;) {
            var C = P * pq;
            if (vn(C - y) <= _) {
                var A, L;
                if (I ? I++ : I = 1, 0 == P ? (A = O.x + a, L = O.y) : 1 == P ? (A = O.x, L = O.y + a) : 2 == P ? (A = O.x - a, L = O.y) : (A = O.x, L = O.y - a), t[Ko + I] = {
                    x: A,
                    y: L
                }, 2 == I) break
            }
            P++
        }
        return t[Wo] = g, t[Vo] = m, t._p2x = x, t[Uo] = p, t._o = O, t._d = v, t._r = a, t._l1 = o - v, t._l2 = f - v, t._iu = t._l1 + _ * a
    }

    function yn(t, i, n, e, s, r, h) {
        var a = gn(n, e, t, i),
            o = gn(n, e, s, r),
            f = a - o;
        return h ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f)
    }

    function gn(t, i, n, e) {
        return Math[ea](e - i, n - t)
    }

    function mn(t, i) {
        for (var n = t[ko](0, 0, i.width, i[Ja])[$o], e = !1, s = 3, r = n[nh]; r > s; s += 4)
            if (n[s] < 255) {
                e = !0;
                break
            }
        return e
    }

    function xn(t) {
        return t = En(t), /^png/i.test(t) || /^gif/i [Jo](t)
    }

    function pn(t, i, n, e, s) {
        if (i && n) {
            t[Fo] = .5, t.strokeStyle = Zo, t[Qo](0, 0, i, n), e && (t.fillStyle = e, t.fillRect(0, 0, i, n));
            var r = 2,
                h = 40,
                a = 28,
                o = 10,
                f = Math.min(i / (h + o), n / (a + o));
            t[lo](), t.globalAlpha = .6, t.translate(i / 2, n / 2), t[bo](f, f), t[vo](-h / 2, -a / 2), t[tf](), t[nf](0, 0, h, a), t[ef](), t[sf] = rf, t.fill(), t[hf] = 1, t.moveTo(0, 21), t[af](12, 12), t[af](26, 28), t[of](18, 18), t[af](28, 8), t[af](40, 18), t[Fo] = r, t[ff] = uf, t[No](), s && (t[tf](), t[of](26, -4), t.lineTo(17, 11), t.lineTo(23, 17), t.lineTo(14, 32), t.lineWidth = 5, t.strokeStyle = e || cf, t[No]()), t.restore()
        }
    }

    function En(t) {
        var i = GY[df](t);
        if (i) return i[1];
        var n = t.lastIndexOf(Zh);
        return n >= 0 && n < t[nh] - 1 ? t[xa](n + 1) : void 0
    }

    function wn(t) {
        if (!t) return null;
        if (t instanceof yH) return XY;
        if (t[_f] instanceof Function) return VY;
        if (N(t)) {
            var i = En(t);
            if (i) {
                if (!rq && qY[Jo](i)) return WY;
                if (YY.test(i)) return UY
            }
            return HY
        }
    }

    function Tn(t, i, n) {
        if (this._ll = wn(t), !this._ll) throw new Error("the image format is not supported", t);
        this._lh = t, this[lf] = i, this._9a = n, this[Oa] = i || mq.IMAGE_WIDTH, this[Ja] = n || mq[vf], this._j3 = {}
    }

    function kn(t, i, n, e) {
        return i ? (QY[t] = new Tn(i, n, e), t) : void delete QY[t]
    }

    function On(t) {
        if (t._kk) return t._kk;
        var i = N(t);
        if (!i && !t.name) return t._kk = new Tn(t);
        var n = t[ph] || t;
        return n in QY ? QY[n] : QY[n] = new Tn(t)
    }

    function Sn(t) {
        return t in QY
    }

    function Mn(t, i, n) {
        n = n || {};
        var e = t[Po](n[Fo]);
        if (!e.width || !e.height) return !1;
        var s = i[ao](oo),
            r = i[Qa] || 1,
            h = n[bf] || yf,
            a = /full/i [Jo](h),
            o = /uniform/i.test(h),
            f = 1,
            u = 1;
        if (a) {
            var c = i[Oa],
                d = i[Ja],
                _ = n.padding,
                l = 0,
                v = 0;
            if (_) {
                var b, y, g, m;
                D(_) ? b = y = g = m = _ : (b = _.top || 0, y = _.bottom || 0, g = _[La] || 0, m = _[ha] || 0), c -= g + m, d -= b + y, l += g, v += b
            }
            f = c / e[Oa], u = d / e.height, o && (f > u ? (l += (c - u * e[Oa]) / 2, f = u) : u > f && (v += (d - f * e.height) / 2, u = f)), (l || v) && s.translate(l, v)
        }
        s.translate(-e.x * f, -e.y * u), t.draw(s, r, n, f, u, !0)
    }

    function In(t, i, n) {
        var e = On(t);
        return e ? (e[Io](), (e._ll == WY || e._6p()) && e._mzd(function(t) {
            t[gf] && (this.width = this[Oa], Mn(t[gf], this, n))
        }, i), void Mn(e, i, n)) : (LY[na](mf + t), !1)
    }

    function Pn(t, i, e, s) {
        var r = t[nh];
        if (r && !(0 > r)) {
            s = s || 1;
            for (var h, a, o, f = [], u = 0; u++ < r;)
                if (h = t.getLocation(u, 0), h && Tq(i, e, h.x, h.y) <= s) {
                    a = u, o = h.rotate;
                    break
                }
            if (a !== n) {
                for (var c, d, _ = 0, u = 0, l = t._fd.length; l > u; u++) {
                    if (h = t._fd[u], !c && (_ += h._iu || 0, _ > a))
                        if (c = !0, h.type == uH || h[qo] == lH) f[fh](new vH(uH, [i, e]));
                        else {
                            var v = Math.max(10, h._iu / 6),
                                b = v * Math.sin(o),
                                y = v * Math.cos(o);
                            if (h[qo] == dH) {
                                var g = h[Ao][0],
                                    m = h[Ao][1];
                                if (d) {
                                    var x = new kq(i, e, i + y, e + b),
                                        p = x._3d(new kq(d[Go].x, d[Go].y, h[Ao][0], h[Ao][1]));
                                    p.x !== n && (g = p.x, m = p.y)
                                }
                                f[fh](new vH(dH, [g, m, i - y, e - b, i, e]))
                            } else f[fh](new vH(cH, [i - y, e - b, i, e])); if (h[Ao])
                                if (h[qo] == dH) {
                                    h.points[0] = i + y, h[Ao][1] = e + b;
                                    var x = new kq(i, e, i + y, e + b),
                                        p = x._3d(new kq(h.points[2], h.points[3], h.points[4], h[Ao][5]));
                                    p.x !== n && (h.points[2] = p.x, h[Ao][3] = p.y)
                                } else if (h[qo] == cH) {
                                h[qo] = dH, h[Ao] = [i + y, e + b].concat(h[Ao]);
                                var x = new kq(i, e, i + y, e + b),
                                    p = x._3d(new kq(h.points[2], h[Ao][3], h[Ao][4], h.points[5]));
                                p.x !== n && (h.points[2] = p.x, h[Ao][3] = p.y)
                            } else h.type == uH && (h[qo] = cH, h.points = [i + y, e + b][rh](h[Ao]), u == l - 1 && (h[xf] = !0))
                        }
                    f[fh](h), d = h
                }
                return f
            }
        }
    }

    function Cn(t) {
        var i = t[Oa],
            n = t.height,
            e = zi(t.g, 0, 0, i, n);
        return e ? Ln(e.data, i, n) : void 0
    }

    function An(t, i, n) {
        this._13(t, i, n)
    }

    function Ln(t, i, n) {
        return new An(t, i, n)
    }

    function Rn(t) {
        if (Wh == t[0]) {
            if (t = t.substring(1), 3 == t[nh]) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
            else if (6 != t.length) return;
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i [Jo](t)) {
            var i = t.indexOf(pf),
                n = t[uh](Yh);
            if (0 > i || i > n) return;
            if (t = t.substring(i + 1, n), t = t.split(Gh), t[nh] < 3) return;
            var e = parseInt(t[0]),
                s = parseInt(t[1]),
                r = parseInt(t[2]),
                h = 3 == t[nh] ? 255 : parseInt(t[3]);
            return [e, s, r, h]
        }
        LY[na]("color format error, [" + t + Ef)
    }

    function jn(t, i, n) {
        return n || (n = mq.BLEND_MODE), n == RY[wf] ? t * i : n == RY[Tf] ? Math.min(t, i) : n == RY[kf] ? 1 - (1 - i) / t : n == RY.BLEND_MODE_LINEAR_BURN ? t + i - 1 : n == RY[Of] ? Math.max(t, i) : n == RY[Sf] ? t + i - t * i : i
    }

    function Dn(t, i, n) {
        var e = zi(t.g, 0, 0, t[Oa], t.height);
        if (e) {
            var s = e[$o];
            if (n instanceof Function) s = n(t, s, i) || s;
            else {
                var r = i[0] / 255,
                    h = i[1] / 255,
                    a = i[2] / 255;
                if (n == RY[Mf])
                    for (var o = 0, f = s[nh]; f > o; o += 4) {
                        var u = 77 * s[o] + 151 * s[o + 1] + 28 * s[o + 2] >> 8;
                        s[o] = u * r | 0, s[o + 1] = u * h | 0, s[o + 2] = u * a | 0
                    } else
                        for (var o = 0, f = s[nh]; f > o; o += 4) s[o] = 255 * jn(r, s[o] / 255, n) | 0, s[o + 1] = 255 * jn(h, s[o + 1] / 255, n) | 0, s[o + 2] = 255 * jn(a, s[o + 2] / 255, n) | 0
            }
            var t = Di(t[Oa], t[Ja]);
            return t.g.putImageData(e, 0, 0), t
        }
    }

    function Nn(t, i, n, e) {
        return 1 > n && (n = 1), Bn(t - n, i - n, 2 * n, 2 * n, e)
    }

    function Bn(t, i, n, e, s) {
        n = Math.round(n) || 1, e = Math.round(e) || 1;
        var r = Ni(n, e);
        r.setTransform(1, 0, 0, 1, -t, -i), s[_f](r);
        var h = zi(r, 0, 0, n, e);
        if (!h) return !1;
        h = h[$o];
        for (var a = h.length / 4; a-- > 0;)
            if (h[4 * a - 1] > bH) return !0;
        return !1
    }

    function $n(t, i, n, e, s, r) {
        t -= s.$x, i -= s.$y;
        var h = s._fj.intersection(t, i, n, e);
        if (!h) return !1;
        t = h.x * r, i = h.y * r, n = h.width * r, e = h[Ja] * r, n = Math[Ro](n) || 1, e = Math[Ro](e) || 1;
        var a = Ni(),
            o = a[ho];
        o[Oa] < n || o[Ja] < e ? (o[Oa] = n, o[Ja] = e) : (a.setTransform(1, 0, 0, 1, 0, 0), a[If](0, 0, n, e)), a[jo](1, 0, 0, 1, -t - s.$x * r, -i - s.$y * r), a[bo](r, r), s._jh(a, 1);
        var f = zi(a, 0, 0, n, e);
        if (!f) return !1;
        f = f[$o];
        for (var u = f.length / 4; u-- > 0;)
            if (f[4 * u - 1] > bH) return !0;
        return !1
    }

    function Fn(t, i, n, e, s, r, h, a, o) {
        if (hi(t, i, n, e, a, o)) return null;
        var f, u, c, d = new vH(uH, [t + n - s, i]),
            _ = new vH(cH, [t + n, i, t + n, i + r]),
            l = new vH(uH, [t + n, i + e - r]),
            v = new vH(cH, [t + n, i + e, t + n - s, i + e]),
            b = new vH(uH, [t + s, i + e]),
            y = new vH(cH, [t, i + e, t, i + e - r]),
            g = new vH(uH, [t, i + r]),
            m = new vH(cH, [t, i, t + s, i]),
            x = (new vH(lH), [d, _, l, v, b, y, g, m]),
            p = new Sq(t + s, i + r, n - s - s, e - r - r);
        t > a ? (f = Pq, c = 5) : a > t + n ? (f = Aq, c = 1) : (f = Cq, c = 0), i > o ? (u = Lq, f == Pq && (c = 7)) : o > i + e ? (u = jq, f == Aq ? c = 3 : f == Cq && (c = 4)) : (u = Rq, f == Pq ? c = 6 : f == Aq && (c = 2));
        var E = Un(c, t, i, n, e, s, r, h, a, o, p),
            w = E[0],
            T = E[1],
            k = new yH,
            O = k._fd;
        O[fh](new vH(fH, [w.x, w.y])), O[fh](new vH(uH, [a, o])), O[fh](new vH(uH, [T.x, T.y])), T._ln && (O[fh](T._ln), T[Pf]++);
        for (var S = T[Pf] % 8, M = w[Pf]; O[fh](x[S]), ++S, S %= 8, S != M;);
        return w._ln && O[fh](w._ln), k[Cf](), k
    }

    function zn(t, i, e, s, r, h, a, o, f, u, c, d, _, l) {
        var v = new kq(d, _, e, s),
            b = new kq(i[0], i[1], i[4], i[5]),
            y = b._3d(v, c),
            g = y[0],
            m = y[1];
        if (g[Af] !== n) {
            g[Pf] = (t - 1) % 8, m[Pf] = (t + 1) % 8;
            var x = g._rest;
            7 == t ? (g.y = h + u + Math.min(l[Ja], x), m.x = r + f + Math.min(l[Oa], x)) : 5 == t ? (g.x = r + f + Math.min(l[Oa], x), m.y = h + o - u - Math.min(l[Ja], x)) : 3 == t ? (g.y = h + o - u - Math.min(l.height, x), m.x = r + a - f - Math.min(l.width, x)) : 1 == t && (g.x = r + a - f - Math.min(l[Oa], x), m.y = h + u + Math.min(l[Ja], x))
        } else {
            v._mm(v._mw, v._ms, g.x, g.y), g = v._$e(i), v._mm(v._mw, v._ms, m.x, m.y), m = v._$e(i);
            var p = Wn(i, [g, m]),
                E = p[0],
                w = p[2];
            g._lnNO = t, m[Pf] = t, g._ln = new vH(cH, E.slice(2)), m._ln = new vH(cH, w[sh](2))
        }
        return [g, m]
    }

    function Gn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (o - a >= i + r) u = {
            y: n,
            x: o - a
        }, u[Pf] = 0;
        else {
            u = {
                y: n + h,
                x: Math.max(i, o - a)
            };
            var d = [i, n + h, i, n, i + r, n],
                _ = new kq(o, f, u.x, u.y);
            if (u = _._$e(d)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Wn(d, [u]);
                l = l[0], l && (u._ln = new vH(cH, l[sh](2))), u[Pf] = 7
            } else u = {
                y: n,
                x: i + r
            }, u[Pf] = 0
        } if (i + e - r >= o + a) c = {
            y: n,
            x: o + a
        }, c._lnNO = 0;
        else {
            c = {
                y: n + h,
                x: Math.min(i + e, o + a)
            };
            var v = [i + e - r, n, i + e, n, i + e, n + h],
                _ = new kq(o, f, c.x, c.y);
            if (c = _._$e(v)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Wn(v, [c]);
                l && l[l.length - 1] && (c._ln = new vH(cH, l[l.length - 1][sh](2))), c[Pf] = 1
            } else c = {
                y: n,
                x: i + e - r
            }, c[Pf] = 0
        }
        return [u, c]
    }

    function qn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (f - a >= n + h) u = {
            x: i + e,
            y: f - a
        }, u._lnNO = 2;
        else {
            u = {
                x: i + e - r,
                y: Math.max(n, f - a)
            };
            var d = [i + e - r, n, i + e, n, i + e, n + h],
                _ = new kq(o, f, u.x, u.y);
            if (u = _._$e(d)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Wn(d, [u]);
                l = l[0], l && (u._ln = new vH(cH, l[sh](2))), u[Pf] = 1
            } else u = {
                x: i + e,
                y: n + h
            }, u._lnNO = 2
        } if (n + s - h >= f + a) c = {
            x: i + e,
            y: f + a
        }, c._lnNO = 2;
        else {
            c = {
                x: i + e - r,
                y: Math.min(n + s, f + a)
            };
            var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
                _ = new kq(o, f, c.x, c.y);
            if (c = _._$e(v)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Wn(v, [c]);
                l[1] && (c._ln = new vH(cH, l[1].slice(2))), c[Pf] = 3
            } else c = {
                x: i + e,
                y: n + s - h
            }, c._lnNO = 2
        }
        return [u, c]
    }

    function Yn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (o - a >= i + r) c = {
            y: n + s,
            x: o - a
        }, c._lnNO = 4;
        else {
            c = {
                y: n + s - h,
                x: Math.max(i, o - a)
            };
            var d = [i + r, n + s, i, n + s, i, n + s - h],
                _ = new kq(o, f, c.x, c.y);
            if (c = _._$e(d)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Wn(d, [c]);
                l = l[l[nh] - 1], l && (c._ln = new vH(cH, l.slice(2))), c[Pf] = 5
            } else c = {
                y: n + s,
                x: i + r
            }, c[Pf] = 4
        } if (i + e - r >= o + a) u = {
            y: n + s,
            x: o + a
        }, u[Pf] = 4;
        else {
            u = {
                y: n + s - h,
                x: Math.min(i + e, o + a)
            };
            var v = [i + e, n + s - h, i + e, n + s, i + e - r, n + s],
                _ = new kq(o, f, u.x, u.y);
            if (u = _._$e(v)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Wn(v, [u]);
                l[0] && (u._ln = new vH(cH, l[0][sh](2))), u[Pf] = 3
            } else u = {
                y: n + s,
                x: i + e - r
            }, u[Pf] = 4
        }
        return [u, c]
    }

    function Hn(t, i, n, e, s, r, h, a, o, f) {
        var u, c;
        if (f - a >= n + h) c = {
            x: i,
            y: f - a
        }, c._lnNO = 6;
        else {
            c = {
                x: i + r,
                y: Math.max(n, f - a)
            };
            var d = [i, n + h, i, n, i + r, n],
                _ = new kq(o, f, c.x, c.y);
            if (c = _._$e(d)) {
                $(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Wn(d, [c]);
                l = l[l[nh] - 1], l && (c._ln = new vH(cH, l[sh](2)))
            } else c = {
                x: i,
                y: n + h
            };
            c[Pf] = 7
        } if (n + s - h >= f + a) u = {
            x: i,
            y: f + a
        }, u._lnNO = 6;
        else {
            u = {
                x: i + r,
                y: Math.min(n + s, f + a)
            };
            var v = [i + r, n + s, i, n + s, i, n + s - h],
                _ = new kq(o, f, u.x, u.y);
            if (u = _._$e(v)) {
                $(u) && (u = u[0].t > u[1].t ? u[0] : u[1]);
                var l = Wn(v, [u]);
                l[0] && (u._ln = new vH(cH, l[0][sh](2))), u[Pf] = 5
            } else u = {
                x: i,
                y: n + s - h
            }, u._lnNO = 6
        }
        return [u, c]
    }

    function Un(t, i, n, e, s, r, h, a, o, f, u) {
        var c = a / 2;
        switch (r = r || 1e-4, h = h || 1e-4, t) {
            case 7:
                var d = [i, n + h, i, n, i + r, n],
                    _ = i + r,
                    l = n + h;
                return zn(t, d, _, l, i, n, e, s, r, h, a, o, f, u);
            case 5:
                return d = [i + r, n + s, i, n + s, i, n + s - h], _ = i + r, l = n + s - h, zn(t, d, _, l, i, n, e, s, r, h, a, o, f, u);
            case 3:
                return d = [i + e, n + s - h, i + e, n + s, i + e - r, n + s], _ = i + e - r, l = n + s - h, zn(t, d, _, l, i, n, e, s, r, h, a, o, f, u);
            case 1:
                return d = [i + e - r, n, i + e, n, i + e, n + h], _ = i + e - r, l = n + h, zn(t, d, _, l, i, n, e, s, r, h, a, o, f, u);
            case 0:
                return Gn(t, i, n, e, s, r, h, c, o, f, u);
            case 2:
                return qn(t, i, n, e, s, r, h, c, o, f, u);
            case 4:
                return Yn(t, i, n, e, s, r, h, c, o, f, u);
            case 6:
                return Hn(t, i, n, e, s, r, h, c, o, f, u)
        }
    }

    function Wn(t, i) {
        for (var e, s, r, h, a, o, f = t[0], u = t[1], c = t[2], d = t[3], _ = t[4], l = t[5], v = [], b = 0; b < i[nh]; b++) a = i[b], o = a.t, 0 != o && 1 != o ? (e = f + (c - f) * o, s = u + (d - u) * o, r = c + (_ - c) * o, h = d + (l - d) * o, v[fh]([f, u, e, s, a.x, a.y]), f = a.x, u = a.y, c = r, d = h) : v.push(null);
        return r !== n && v[fh]([a.x, a.y, r, h, _, l]), v
    }

    function Vn(t) {
        return this[Lf] && this[Rf] && (t.x -= this[Rf].x, t.y -= this._mz6.y), this.$rotate && Ci(t, this.$rotate), t.x += this[jf] || 0, t.y += this.$offsetY || 0, this[Df] && this[Nf] ? Ci(t, this.$_hostRotate) : t
    }

    function Xn(t) {
        return this[Df] && this[Nf] && Ci(t, -this[Nf]), t.x -= this[jf] || 0, t.y -= this.$offsetY || 0, this[Bf] && Ci(t, -this[Bf]), this[Lf] && this[Rf] && (t.x += this[Rf].x, t.y += this[Rf].y), t
    }

    function Kn() {
        var t = this.$invalidateSize;
        this[$f] && (this[$f] = !1, this[Ff] = !0, this._7u[zf](this._j9), this[Gf] && this._7u.grow(this[Gf]), this[qf] && this._7u[Yf](this.$border));
        var i = this._$n();
        if (i) var n = this[Hf] && this[Uf];
        return this[Ff] && this[Lf] && (this.$invalidateAnchorPoint = !1, n && (t = !0), this[Rf] = ci(this[Wf], this._7u.width, this._7u[Ja]), this[Rf].x += this._7u.x, this[Rf].y += this._7u.y), i ? (t && (this._myackgroundGradientInvalidateFlag = !0, Jn[ih](this, n)), this._myackgroundGradientInvalidateFlag && (this._myackgroundGradientInvalidateFlag = !1, this[Vf] = this[Xf] && this[Kf] && this[Kf][Co] ? tH[_h][Jf].call(this[Xf], this._m5Shape[Co]) : null), t) : (this[Zf] = !1, t)
    }

    function Jn(t) {
        var i = this._7u.x + this[qf] / 2,
            n = this._7u.y + this.$border / 2,
            e = this._7u[Oa] - this[qf],
            s = this._7u[Ja] - this[qf],
            r = 0,
            h = 0;
        if (this[Qf] && (D(this.$borderRadius) ? r = h = this.$borderRadius : (r = this[Qf].x || 0, h = this[Qf].y || 0), r = Math.min(r, e / 2), h = Math.min(h, s / 2)), t && (this._pointerX = this[Rf].x - this.$offsetX + this[tu], this[iu] = this._mz6.y - this[nu] + this[eu], !this._7u.intersectsPoint(this[su], this[iu]))) {
            var a = new mH(i, n, e, s, r, h, this[Uf], this[su], this[iu]);
            return this[Kf] = a._ln, this[Kf][Co].set(i, n, e, s), void(this[Zf] = !0)
        }
        this[Kf] && this[Kf][ru](), this[Kf] = GU.getRect(i, n, e, s, r, h, this[Kf]), this[Kf][Co].set(i, n, e, s)
    }

    function Zn(t, i, n, e) {
        return e && (t[Oa] < 0 || t.height < 0) ? (t.x = i, t.y = n, void(t[Oa] = t[Ja] = 0)) : (i < t.x ? (t[Oa] += t.x - i, t.x = i) : i > t.x + t[Oa] && (t[Oa] = i - t.x), void(n < t.y ? (t.height += t.y - n, t.y = n) : n > t.y + t[Ja] && (t[Ja] = n - t.y)))
    }

    function Qn(t, i, e) {
        var s, r = t.position,
            h = t.layoutByPath === n ? this.layoutByPath : t[hu];
        return this[au] instanceof yH && h ? (s = zY._mzp(r, this[au], this[Fo], i, e), s.x *= this._ja, s.y *= this._jc) : (s = ci(r, this._7u.width, this._7u.height), s.x += this._7u.x, s.y += this._7u.y), Vn[ih](this, s)
    }

    function te(t, i) {
        if (i)
            if (i._7u[ou]()) t.$x = i.$x, t.$y = i.$y;
            else {
                var n = Qn[ih](i, t);
                t.$x = n.x, t.$y = n.y, t[fu] = n[Yo]
            } else t.$x = 0, t.$y = 0;
        t[uu] && EH[ih](t)
    }

    function ie(t) {
        if (t[cu] === n) {
            var i, e;
            if (t[du]) i = t[_u], e = t[du];
            else {
                var s;
                if (t[lu] !== n) s = lu;
                else {
                    if (t.webkitLineDash === n) return !1;
                    s = vu
                }
                e = function(t) {
                    this[s] = t
                }, i = function() {
                    return this[s]
                }
            }
            K(t, cu, {
                get: function() {
                    return i[ih](this)
                },
                set: function(t) {
                    e.call(this, t)
                }
            })
        }
        if (t[bu] === n) {
            var r;
            if (t[yu] !== n) r = yu;
            else {
                if (t.webkitLineDashOffset === n) return;
                r = gu
            }
            K(t, bu, {
                get: function() {
                    return this[r]
                },
                set: function(t) {
                    this[r] = t
                }
            })
        }
    }

    function ne(t, i, n, e, s) {
        var r, h, a, o, f, u, c, d, _ = function(t) {
                return function(i) {
                    t(i)
                }
            },
            l = function() {
                h = null, a = null, o = f, f = null, u = null
            },
            v = function(t) {
                r = t, c || (c = Di()), c[Oa] = r[Oa], c[Ja] = r[Ja], i[Oa] = r[Oa], i[Ja] = r[Ja]
            },
            b = function(t) {
                y(), l(), h = t.transparencyGiven ? t[mu] : null, a = 10 * t[xu], f = t[pu]
            },
            y = function() {
                if (u) {
                    var t = u[ko](0, 0, r[Oa], r.height),
                        n = {
                            data: t,
                            _pixels: Ln(t[$o], r[Oa], r[Ja]),
                            delay: a
                        };
                    s[ih](i, n)
                }
            },
            g = function(t) {
                u || (u = c[ao](oo));
                var i = t[Eu] ? t.lct : r.gct,
                    n = u[ko](t[wu], t.topPos, t.width, t[Ja]);
                t[Tu][ku](function(t, e) {
                    h !== t ? (n[$o][4 * e + 0] = i[t][0], n[$o][4 * e + 1] = i[t][1], n[$o][4 * e + 2] = i[t][2], n.data[4 * e + 3] = 255) : (2 === o || 3 === o) && (n.data[4 * e + 3] = 0)
                }), u[Ou](n, t.leftPos, t.topPos)
            },
            m = function() {},
            x = {
                hdr: _(v),
                gce: _(b),
                com: _(m),
                app: {
                    NETSCAPE: _(m)
                },
                img: _(g, !0),
                eof: function() {
                    y(), n[ih](i)
                }
            },
            p = new XMLHttpRequest;
        rq || p.overrideMimeType("text/plain; charset=x-user-defined"), p[Su] = function() {
            d = new SH(p[Mu]);
            try {
                IH(d, x)
            } catch (t) {
                e.call(i, Ga)
            }
        }, p[Iu] = function() {
            e[ih](i, Pu)
        }, p[Ha](Ua, t, !0), p[Ka]()
    }

    function ee(t) {
        var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 99, 110, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 57, 50, 54, 55, 54, 49, 48, 53, 50, 50, 48, 10, 10, 10];
        return i.forEach(function(n, e) {
            i[e] = t(n)
        }), i.join("")
    }

    function se(t, i) {
        try {
            if (null == t || t.length < 8) return;
            if (null == i || i[nh] <= 0) return;
            for (var n = "", e = 0; e < i[nh]; e++) n += i[Cu](e).toString();
            var s = Math[Hh](n[nh] / 5),
                r = parseInt(n[Au](s) + n.charAt(2 * s) + n[Au](3 * s) + n[Au](4 * s) + n[Au](5 * s), 10),
                h = Math[Ro](i[nh] / 2),
                a = Math.pow(2, 31) - 1,
                o = parseInt(t[xa](t.length - 8, t[nh]), 16);
            for (t = t.substring(0, t[nh] - 8), n += o; n[nh] > 10;) n = (parseInt(n[xa](0, 10), 10) + parseInt(n[xa](10, n[nh]), 10)).toString();
            n = (r * n + h) % a;
            for (var f = "", u = "", e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math[Hh](n / a * 255), 10), u += String[Lu](f), n = (r * n + h) % a;
            return 0 | u[0] ? hU = jH[Ru + BH + ju](u) : null
        } catch (c) {}
    }

    function re() {
        var t = CH;
        if (!t) return void(dU = !0);
        rU = t;
        var i;
        t = t[Ch](Gh);
        for (var n = 0; n < t.length && (i = se(t[n], LH), !(i && i[Ch](Eo)[nh] >= 8));) 1 == t.length && (i = se(t[n], Du)), n++;
        if (!i || i.split(Eo)[nh] < 8) return fU = !0, "" === LH || LH == Nu + GH + Bu + qH + $u || LH == Fu + zH + zu ? (uU = vU, dU = !1, void(sU = !1)) : (uU = vU, void(dU = !0));
        sU = i[Ch](Eo);
        var e = sU[3];
        if (e != bV) return void(fU = !0);
        dU = !1;
        var s = sU[0];
        (Gu == s || qu == s) && (fU = !1);
        var r = sU[5];
        cU = r;
        var h = sU[6];
        uU = h
    }

    function he() {
        var t = rU;
        if (t) {
            var i;
            t = t[Ch](Gh);
            for (var n = 0; n < t.length && (i = bU(t[n], LH), !(i && i.split(Eo)[nh] >= 8));) 1 == t[nh] && (i = bU(t[n], Du)), n++;
            if (i[Ch](Eo)[nh] >= 8) return void(_U = !1)
        }
        return LH && LH != Nu + GH + Bu + qH + $u && LH != Fu + zH + zu ? void(_U = !0) : void(_U = !1)
    }

    function ae() {
        if (fU) {
            var t = yr[VH + qo]._jh,
                i = oU;
            yr[VH + qo]._jh = function() {
                t.apply(this, arguments), i[ih](this[Yu], this.g)
            };
            var n = PU[VH + qo]._gt;
            PU[VH + qo]._gt = function(t) {
                n[dh](this, arguments), i[ih](this, t)
            }
        }
    }

    function oe() {
        if (cU !== !0 && cU) {
            var t = cU.split(Zh);
            if (3 != t[nh]) return void(YU[_h]._jh = null);
            var i = parseInt(t[0], 10),
                n = parseInt(t[1], 10),
                e = parseInt(t[2], 10),
                s = 3,
                r = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            AH > r && (YU.prototype._jh = null)
        }
    }

    function fe() {
        var t = 0 | uU;
        if (t) {
            var i = Jq[_h]._km;
            Jq[VH + qo]._km = function() {
                return this._jp.length > t ? !1 : i[dh](this, arguments)
            }
        }
    }

    function ue() {
        dU && (xq[VH + qo]._km = xq[VH + qo]._fe)
    }

    function ce() {
        if (_U) {
            var t = oU,
                i = PU[VH + qo]._gt;
            PU[VH + qo]._gt = function(n) {
                i[dh](this, arguments), t.call(this, n)
            }
        }
    }

    function de() {
        if (lU) {
            var t = yr[VH + qo]._jh,
                i = oU;
            yr[VH + qo]._jh = function() {
                t[dh](this, arguments), i[ih](this[Yu], this.g)
            }
        }
    }

    function _e() {
        sU === n && (PU[VH + qo]._j2 = Sq[Hu])
    }

    function le(t) {
        var i = Di(!0);
        return ie(i.g), i[Uu] = function() {
            return !1
        }, t[Wu](i), i[Oh] = pU, i
    }

    function _(t, i) {
        function n(t, n) {
            for (var e = t.length, s = n.length, r = e + s, h = new Array(r), a = 0, o = 0, f = 0; r > f;) h[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
            return h
        }

        function e(t) {
            var i = t[nh],
                s = Math[Uh](i / 2);
            return 1 >= i ? t : n(e(t[sh](0, s)), e(t.slice(s)))
        }
        return e(t)
    }

    function ve(t) {
        t.width = t[Oa]
    }

    function be(t) {
        SU || (SU = "imageSmoothingEnabled" in CanvasRenderingContext2D[_h] ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled" in CanvasRenderingContext2D[_h] ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled" in CanvasRenderingContext2D[_h] ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled" in CanvasRenderingContext2D[_h] ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"), t[SU] = !1
    }

    function ye(t, i, n, e, s) {
        e = V(i + e) - (i = W(i)), s = V(n + s) - (n = W(n)), t[If](i, n, e, s), t.rect(i, n, e, s)
    }

    function W(t) {
        return Math[Hh](t)
    }

    function V(t) {
        return Math[Uh](t)
    }

    function ge(t) {
        var i = [];
        return t[ku](function(t) {
            i[fh](-t)
        }), i
    }

    function me(t) {
        return t %= AU, 0 > t && (t += AU), t
    }

    function xe(t, i, n, e, s, r, h, a) {
        var o = ((t * e - i * n) * (s - h) - (t - n) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h)),
            f = ((t * e - i * n) * (r - a) - (i - e) * (s * a - r * h)) / ((t - n) * (r - a) - (i - e) * (s - h));
        if (isNaN(o) || isNaN(f)) return !1;
        if (t >= n) {
            if (!(o >= n && t >= o)) return !1
        } else if (!(o >= t && n >= o)) return !1;
        if (i >= e) {
            if (!(f >= e && i >= f)) return !1
        } else if (!(f >= i && e >= f)) return !1;
        if (s >= h) {
            if (!(o >= h && s >= o)) return !1
        } else if (!(o >= s && h >= o)) return !1;
        if (r >= a) {
            if (!(f >= a && r >= f)) return !1
        } else if (!(f >= r && a >= f)) return !1;
        return !0
    }

    function pe(t, i) {
        for (var n = 0, e = t[nh]; e > n;) {
            for (var s = t[n], r = t[(n + 1) % e], h = 0; 4 > h;) {
                var a = i[h],
                    o = i[(h + 1) % e];
                if (xe(s[0], s[1], r[0], r[1], a[0], a[1], o[0], o[1])) return !0;
                h++
            }
            n++
        }
        return !1
    }

    function Ee(t, i, n, e) {
        return [t * e - i * n, t * n + i * e]
    }

    function we(t) {
        return t[Vu] ? (t = t[Vu], t._da ? t._da : t instanceof qU && t._gw === !1 ? t : null) : null
    }

    function Te(t, i, n) {
        if (n = n || i[Xu], n == t) return !1;
        var e = t.getEdgeBundle(n);
        return e || (e = new rV(t, n), t[Ku][n.id] = e), e._hp(i, t)
    }

    function ke(t, i, n) {
        if (n = n || i[Xu], n == t) return !1;
        var e = t[Ju](n);
        return e ? e._myv(i, t) : void 0
    }

    function Oe(t, i, e) {
        return e === n && (e = i.toAgent), e != t ? (t._7p || (t._7p = new xq), t._7p.add(i) === !1 ? !1 : void t._8x++) : void 0
    }

    function Se(t, i, n) {
        return t._7p && t._7p.remove(i) !== !1 ? (t._8x--, void ke(t, i, n)) : !1
    }

    function Me(t, i) {
        return i[Zu] != t ? (t._8o || (t._8o = new xq), t._8o.add(i) === !1 ? !1 : void t[Qu]++) : void 0
    }

    function Ie(t, i) {
        return t._8o && t._8o[ah](i) !== !1 ? (t[Qu]--, void ke(i[Zu], i, t)) : !1
    }

    function Pe(t, i) {
        if (i === n && (i = t instanceof $U), i) {
            if (t.isInvalid()) return null;
            var e = Pe(t[tc], !1);
            if (t[ic]()) return e;
            for (var s = Pe(t.to, !1); null != e && null != s;) {
                if (e == s) return e;
                if (e[nc](s)) return s;
                if (s[nc](e)) return e;
                e = Pe(e, !1), s = Pe(s, !1)
            }
            return null
        }
        for (var r = t[Vu]; null != r;) {
            if (r._i2()) return r;
            r = r[Vu]
        }
        return null
    }

    function Ce(t, i, n) {
        t._i2() && t[th]() && t.children[ku](function(t) {
            t instanceof FU && i.add(t) && Ce(t, i, n)
        }, this), t[ec]() && t._d3.forEach(function(t) {
            (null == n || n.accept(t)) && i.add(t) && Ce(t, i, n)
        })
    }

    function Ae(t, i) {
        i[Vu] ? i.parent[sc](i, i[Vu][rc] - 1) : t[hc][ac](i, t[hc][nh] - 1)
    }

    function Le(t, i) {
        i[Vu] ? i[Vu][sc](i, 0) : t.roots[ac](i, 0)
    }

    function Re(t, i) {
        if (i instanceof $U) return void(i[oc]() || De(t, i));
        for (Ae(t, i); i = i.parent;) Ae(t, i)
    }

    function je(t, i) {
        if (i instanceof $U) return void(i[oc]() || Ne(t, i));
        for (Le(t, i); i = i[Vu];) Le(t, i)
    }

    function De(t, i) {
        var n = i[Zu];
        if (i[ic]()) Ae(t, n);
        else {
            var e = i[Xu];
            Ae(t, n), Ae(t, e)
        }
    }

    function Ne(t, i) {
        var n = i[Zu];
        if (i[ic]()) Le(t, n);
        else {
            var e = i[Xu];
            Le(t, n), Le(t, e)
        }
    }

    function Be(t, i) {
        return t._8x++, t._fr ? (i._i6 = t._hw, t._hw._i4 = i, void(t._hw = i)) : (t._fr = i, void(t._hw = i))
    }

    function $e(t, i) {
        t._8x--, t._hw == i && (t._hw = i._i6), i._i6 ? i._i6._i4 = i._i4 : t._fr = i._i4, i._i4 && (i._i4._i6 = i._i6), i._i6 = null, i._i4 = null, ke(t, i, i.$to)
    }

    function Fe(t, i) {
        return t[Qu]++, t._hu ? (i._ji = t._j4, t._j4._jf = i, void(t._j4 = i)) : (t._hu = i, void(t._j4 = i))
    }

    function ze(t, i) {
        t[Qu]--, t._j4 == i && (t._j4 = i._ji), i._ji ? i._ji._jf = i._jf : t._hu = i._jf, i._jf && (i._jf._ji = i._ji), i._ji = null, i._jf = null
    }

    function Ge(t, i) {
        return i = i || new xq, t[fc](function(t) {
            i.add({
                id: t.id,
                edge: t,
                fromAgent: t.$from._da,
                toAgent: t.$to._da
            })
        }), t[uc](function(t) {
            t instanceof FU && Ge(t, i)
        }), i
    }

    function qe(t, i, n) {
        return He(t, i, n) === !1 ? !1 : Ye(t, i, n)
    }

    function Ye(t, i, n) {
        if (t._fr)
            for (var e = t._fr; e;) {
                if (i[ih](n, e) === !1) return !1;
                e = e._i4
            }
    }

    function He(t, i, n) {
        if (t._hu)
            for (var e = t._hu; e;) {
                if (i.call(n, e) === !1) return !1;
                e = e._jf
            }
    }

    function Ue(t, i, e, s, r, h, a) {
        return h || a ? (h = h || 0, a = a === n ? h : a || 0, h = Math.min(h, s / 2), a = Math.min(a, r / 2), t.moveTo(i + h, e), t[af](i + s - h, e), t[cc](i + s, e, i + s, e + a), t.lineTo(i + s, e + r - a), t.quadTo(i + s, e + r, i + s - h, e + r), t[af](i + h, e + r), t[cc](i, e + r, i, e + r - a), t[af](i, e + a), t[cc](i, e, i + h, e), t.closePath(), t) : (t.moveTo(i, e), t[af](i + s, e), t[af](i + s, e + r), t[af](i, e + r), t[Cf](), t)
    }

    function We(t, i) {
        var n = i.r || 1,
            e = i.cx || 0,
            s = i.cy || 0,
            r = n * Math.tan(Math.PI / 8),
            h = n * Math.sin(Math.PI / 4);
        t.moveTo(e + n, s), t[cc](e + n, s + r, e + h, s + h), t[cc](e + r, s + n, e, s + n), t[cc](e - r, s + n, e - h, s + h), t[cc](e - n, s + r, e - n, s), t[cc](e - n, s - r, e - h, s - h), t[cc](e - r, s - n, e, s - n), t.quadTo(e + r, s - n, e + h, s - h), t[cc](e + n, s - r, e + n, s)
    }

    function Ve(t, i, n, e, s) {
        i instanceof hn && (e = i[Oa], s = i[Ja], n = i.cy - s / 2, i = i.cx - e / 2);
        var r = .5522848,
            h = e / 2 * r,
            a = s / 2 * r,
            o = i + e,
            f = n + s,
            u = i + e / 2,
            c = n + s / 2;
        return t[of](i, c), t.curveTo(i, c - a, u - h, n, u, n), t.curveTo(u + h, n, o, c - a, o, c), t.curveTo(o, c + a, u + h, f, u, f), t[dc](u - h, f, i, c + a, i, c), t
    }

    function Xe(t, i, n, e, s) {
        var r = 2 * e,
            h = 2 * s,
            a = i + e / 2,
            o = n + s / 2;
        return t[of](a - r / 4, o - h / 12), t[af](i + .306 * e, n + .579 * s), t.lineTo(a - r / 6, o + h / 4), t[af](i + e / 2, n + .733 * s), t[af](a + r / 6, o + h / 4), t[af](i + .693 * e, n + .579 * s), t[af](a + r / 4, o - h / 12), t[af](i + .611 * e, n + .332 * s), t.lineTo(a + 0, o - h / 4), t.lineTo(i + .388 * e, n + .332 * s), t[Cf](), t
    }

    function Ke(t, i, n, e, s) {
        return t[of](i, n), t[af](i + e, n + s / 2), t.lineTo(i, n + s), t[Cf](), t
    }

    function Je(t, i, n, e, s) {
        return t[of](i, n + s / 2), t.lineTo(i + e / 2, n), t[af](i + e, n + s / 2), t.lineTo(i + e / 2, n + s), t[Cf](), t
    }

    function Ze(t, i, n, e, s, r) {
        return t[of](i, n), t.lineTo(i + e, n + s / 2), t.lineTo(i, n + s), r || (t.lineTo(i + .25 * e, n + s / 2), t[Cf]()), t
    }

    function Qe(t, i, n, e, s) {
        if (!t || 3 > t) throw new Error("edge number must greater than 2");
        t = 0 | t, e = e || 50, s = s || 0, i = i || 0, n = n || 0;
        for (var r, h, a = 0, o = 2 * Math.PI / t, f = new yH; t > a;) r = i + e * Math.cos(s), h = n + e * Math.sin(s), a ? f[af](r, h) : f.moveTo(r, h), ++a, s += o;
        return f[Cf](), f
    }

    function ts() {
        var t = new yH;
        return t[of](75, 40), t.curveTo(75, 37, 70, 25, 50, 25), t[dc](20, 25, 20, 62.5, 20, 62.5), t[dc](20, 80, 40, 102, 75, 120), t[dc](110, 102, 130, 80, 130, 62.5), t.curveTo(130, 62.5, 130, 25, 100, 25), t.curveTo(85, 25, 75, 37, 75, 40), t
    }

    function is() {
        var t = new yH;
        return t[of](20, 0), t.lineTo(80, 0), t.lineTo(100, 100), t[af](0, 100), t[Cf](), t
    }

    function ns() {
        var t = new yH;
        return t.moveTo(100, 0), t[af](100, 80), t.lineTo(0, 100), t[af](0, 20), t[Cf](), t
    }

    function es() {
        var t = new yH;
        return t[of](20, 0), t.lineTo(100, 0), t[af](80, 100), t.lineTo(0, 100), t[Cf](), t
    }

    function ss() {
        var t = new yH;
        return t.moveTo(43, 23), t[af](28, 10), t[af](37, 2), t[af](63, 31), t[af](37, 59), t[af](28, 52), t.lineTo(44, 38), t.lineTo(3, 38), t.lineTo(3, 23), t.closePath(), t
    }

    function rs() {
        var t = new yH;
        return t[of](1, 8), t.lineTo(7, 2), t[af](32, 26), t[af](7, 50), t[af](1, 44), t.lineTo(18, 26), t[Cf](), t[of](27, 8), t[af](33, 2), t.lineTo(57, 26), t[af](33, 50), t[af](27, 44), t[af](44, 26), t[Cf](), t
    }

    function hs() {
        var t = new yH;
        return t.moveTo(0, 15), t[af](23, 15), t[af](23, 1), t[af](47, 23), t[af](23, 43), t[af](23, 29), t[af](0, 29), t[Cf](), t
    }

    function as() {
        var t = new yH;
        return t[of](0, 21), t[af](30, 21), t[af](19, 0), t[af](25, 0), t[af](47, 25), t[af](25, 48), t[af](19, 48), t[af](30, 28), t[af](0, 28), t[Cf](), t
    }

    function os() {
        var t = new yH;
        return t[of](0, 0), t[af](34, 24), t.lineTo(0, 48), t[af](14, 24), t[Cf](), t
    }

    function fs() {
        var t = new yH;
        return t[of](20, 0), t[af](34, 14), t.lineTo(20, 28), t.lineTo(22, 18), t[af](1, 25), t.lineTo(10, 14), t.lineTo(1, 3), t[af](22, 10), t[Cf](), t
    }

    function us() {
        var t = new yH;
        return t[of](4, 18), t.lineTo(45, 18), t.lineTo(37, 4), t[af](83, 25), t[af](37, 46), t.lineTo(45, 32), t[af](4, 32), t[Cf](), t
    }

    function cs() {
        var t = new yH;
        return t.moveTo(17, 11), t[af](27, 11), t[af](42, 27), t[af](27, 42), t[af](17, 42), t[af](28, 30), t[af](4, 30), t.lineTo(4, 23), t[af](28, 23), t[Cf](), t
    }

    function ds() {
        GU[_c](RY[lc], Ve(new yH, 0, 0, 100, 100)), GU[_c](RY.SHAPE_RECT, Ue(new yH, 0, 0, 100, 100)), GU.register(RY.SHAPE_ROUNDRECT, Ue(new yH, 0, 0, 100, 100, 20, 20)), GU.register(RY[vc], Xe(new yH, 0, 0, 100, 100)), GU[_c](RY[bc], Ke(new yH, 0, 0, 100, 100)), GU.register(RY[yc], Qe(5)), GU[_c](RY.SHAPE_HEXAGON, Qe(6)), GU[_c](RY[gc], Je(new yH, 0, 0, 100, 100)), GU[_c](RY[mc], ts()), GU[_c](RY.SHAPE_TRAPEZIUM, is()), GU.register(RY[xc], ns()), GU.register(RY[pc], es());
        var t = new yH;
        t[of](20, 0), t[af](40, 0), t[af](40, 20), t.lineTo(60, 20), t[af](60, 40), t.lineTo(40, 40), t.lineTo(40, 60), t[af](20, 60), t.lineTo(20, 40), t.lineTo(0, 40), t[af](0, 20), t[af](20, 20), t.closePath(), GU[_c](RY[Ec], t), GU[_c](RY[wc], Ze(new yH, 0, 0, 100, 100)), GU[_c](RY[Tc], ss()), GU.register(RY[kc], rs()), GU[_c](RY.SHAPE_ARROW_3, hs()), GU[_c](RY.SHAPE_ARROW_4, as()), GU[_c](RY[Oc], os()), GU[_c](RY.SHAPE_ARROW_6, fs()), GU[_c](RY[Sc], us()), GU.register(RY[Mc], cs()), GU[_c](RY[Ic], Ze(new yH, 0, 0, 100, 100, !0))
    }

    function _s() {
        w(this, _s, arguments), this[Pc] = !0
    }

    function ls() {
        w(this, ls), this._$r = new Hq
    }

    function vs() {
        if (this._gw === !0) {
            var t = this._7p,
                i = this._8o;
            if (t)
                for (t = t._jp; t.length;) {
                    var n = t[0];
                    Se(this, n, n.toAgent)
                }
            if (i)
                for (i = i._jp; i[nh];) {
                    var n = i[0];
                    Ie(this, n, n[Zu])
                }
            return void this[uc](function(t) {
                t._i2() && vs[ih](t)
            })
        }
        var e = Ge(this);
        e[ku](function(t) {
            t = t[Cc];
            var i = t[Ac],
                n = t.$to,
                e = i[nc](this),
                s = n[nc](this);
            e && !s ? (Oe(this, t), Te(this, t)) : s && !e && (Me(this, t), Te(t.fromAgent, t, this))
        }, this)
    }

    function bs() {
        w(this, bs, arguments), this[Lc] = null
    }

    function ys(t, i, n, e) {
        return t[i] = n, e ? {
            get: function() {
                return this[i]
            },
            set: function(t) {
                if (t !== this[i]) {
                    this[i] = t, !this._mz9, this._19 = !0;
                    for (var n = e.length; --n >= 0;) this[e[n]] = !0
                }
            }
        } : {
            get: function() {
                return this[i]
            },
            set: function(t) {
                t !== this[i] && (this[i] = t)
            }
        }
    }

    function gs(t, i) {
        var n = {},
            e = {};
        for (var s in i) {
            var r = i[s];
            r[Rc] && r.validateFlags.forEach(function(t, i, n) {
                n[i] = jc + t, e[t] = !0
            }), n[s] = ys(t, mh + s, r[Dc], r[Rc])
        }
        for (var h in e) t[jc + h] = !0;
        Object.defineProperties(t, n)
    }

    function ms(t, i, n, e) {
        if (Array[Nc](i))
            for (var s = i.length; --s >= 0;) ms(t, i[s], n, e);
        else {
            var r = i.target;
            if (r) {
                if (r instanceof YU || (r = t[r]), !r) return
            } else r = t; if (e || (e = t[Bc](i.property, n)), i.bindingProperty && (r[i.bindingProperty] = e), i[$c]) {
                var h = i[$c];
                h instanceof Function || (h = t[h]), h instanceof Function && h[ih](t, e, r)
            }
        }
    }

    function xs() {
        HU[ku](function(t) {
            this[t] = {}
        }, this)
    }

    function ps(t, i, n, e) {
        return e == RY[Fc] ? void(t[n] = i) : e == RY[zc] ? void t.set(n, i) : e == RY.PROPERTY_TYPE_STYLE ? void t.setStyle(n, i) : !1
    }

    function Es() {
        w(this, Es, arguments)
    }

    function ws() {
        w(this, ws, arguments)
    }

    function Ts(t, i, n, e, s, r) {
        var h = ks(t, i, n, e),
            a = [];
        return Is(t) ? Os(h, i, n, a, e[Gc](UU[qc]), s, r) : $s(t, i, n, a, h, e, s, r), a
    }

    function ks(t, i, n) {
        if (null != t) {
            if (t == RY[Yc] || t == RY[Hc] || t == RY[Uc] || t == RY.EDGE_TYPE_EXTEND_LEFT || t == RY[Wc]) return !0;
            if (t == RY[Vc] || t == RY[Xc] || t == RY[Kc] || t == RY.EDGE_TYPE_EXTEND_TOP || t == RY[Jc]) return !1
        }
        var e = As(i, n),
            s = Ls(i, n);
        return e >= s
    }

    function Os(t, i, n, e, s) {
        t ? qs(i, n, e, s) : Ys(i, n, e, s)
    }

    function Ss(t, i) {
        return i.getStyle(UU[Zc])
    }

    function Ms(t) {
        return null != t && (t == RY[Qc] || t == RY[td] || t == RY.EDGE_TYPE_EXTEND_BOTTOM || t == RY[Wc])
    }

    function Is(t) {
        return t && (t == RY.EDGE_TYPE_ELBOW || t == RY[Yc] || t == RY.EDGE_TYPE_ELBOW_VERTICAL)
    }

    function Ps(t, i, n, e, s) {
        if (t == RY[Uc] || t == RY.EDGE_TYPE_VERTICAL_HORIZONTAL) return new wq(e.x + e[Oa] / 2, e.y + e[Ja] / 2);
        var r;
        if (Ms(t)) {
            var h = Math.min(n.y, e.y),
                a = Math.min(n.x, e.x),
                o = Math.max(n[ra], e.bottom),
                f = Math.max(n[ha], e[ha]);
            if (r = s.getStyle(UU[qc]), t == RY.EDGE_TYPE_EXTEND_TOP) return new wq((a + f) / 2, h - r);
            if (t == RY.EDGE_TYPE_EXTEND_LEFT) return new wq(a - r, (h + o) / 2);
            if (t == RY[Jc]) return new wq((a + f) / 2, o + r);
            if (t == RY.EDGE_TYPE_EXTEND_RIGHT) return new wq(f + r, (h + o) / 2)
        }
        var u = Ss(t, s);
        if (r = u ? Rs(t, i, n, e, s[Gc](UU.EDGE_SPLIT_PERCENT)) : s[Gc](UU[id]), r == Number.NEGATIVE_INFINITY || r == Number[nd]) return new wq(e.x + e[Oa] / 2, e.y + e[Ja] / 2);
        if (0 == r) return new wq(n.x + n[Oa] / 2, n.y + n[Ja] / 2);
        if (i) {
            var c = n.x + n[ha] < e.x + e[ha];
            return new wq(Ns(c, r, n.x, n[Oa]), n.y + n.height / 2)
        }
        var d = n.y + n[ra] < e.y + e[ra];
        return new wq(n.x + n.width / 2, Ns(d, r, n.y, n.height))
    }

    function Cs(t, i, n, e) {
        var s = Math.max(i, e) - Math.min(t, n);
        return s - (i - t + e - n)
    }

    function As(t, i) {
        var n = Math.max(t.x + (t[Oa] || 0), i.x + (i[Oa] || 0)) - Math.min(t.x, i.x);
        return n - (t.width || 0) - (i[Oa] || 0)
    }

    function Ls(t, i) {
        var n = Math.max(t.y + (t[Ja] || 0), i.y + (i[Ja] || 0)) - Math.min(t.y, i.y);
        return n - (t[Ja] || 0) - (i[Ja] || 0)
    }

    function Rs(t, i, n, e, s) {
        var r = js(s, i, n, e, null);
        return r * s
    }

    function js(t, i, n, e) {
        return i ? Ds(t, n.x, n[ha], e.x, e[ha]) : Ds(t, n.y, n.bottom, e.y, e[ra])
    }

    function Ds(t, i, n, e, s) {
        var r = Cs(i, n, e, s),
            h = e + s > i + n;
        if (r > 0) {
            if (1 == t) return r + (s - e) / 2;
            if (t >= 0 && 1 > t) return r;
            if (0 > t) return h ? e - i : n - s
        }
        return Math.abs(h && t > 0 || !h && 0 > t ? n - s : i - e)
    }

    function Ns(t, i, n, e) {
        return t == i > 0 ? n + e + Math.abs(i) : n - Math.abs(i)
    }

    function Bs(t, i) {
        var n = t[nh];
        if (!(3 > n)) {
            var e = i.getStyle(UU[ed]);
            if (e != RY[sd]) {
                var s = i[Gc](UU.EDGE_CORNER_RADIUS),
                    r = 0,
                    h = 0;
                s && (D(s) ? r = h = s : (r = s.x || 0, h = s.y || 0));
                for (var a, o, f, u, c = t[0], d = t[1], _ = null, l = 2; n > l; l++) {
                    var v = t[l],
                        b = d.x - c.x,
                        y = d.y - c.y,
                        x = v.x - d.x,
                        p = v.y - d.y,
                        E = !b || b > -FY && FY > b,
                        w = !y || y > -FY && FY > y,
                        T = !x || x > -FY && FY > x,
                        k = !p || p > -FY && FY > p,
                        O = w;
                    (E && k || w && T) && (O ? (a = Math.min(2 == l ? Math.abs(b) : Math.abs(b) / 2, r), o = Math.min(l == n - 1 ? Math.abs(p) : Math.abs(p) / 2, h), f = new wq(d.x - (b > 0 ? a : -a), d.y), u = new wq(d.x, d.y + (p > 0 ? o : -o))) : (a = Math.min(l == n - 1 ? Math.abs(x) : Math.abs(x) / 2, r), o = Math.min(2 == l ? Math.abs(y) : Math.abs(y) / 2, h), f = new wq(d.x, d.y - (y > 0 ? o : -o)), u = new wq(d.x + (x > 0 ? a : -a), d.y)), m(t, d), l--, n--, (f.x != c.x || f.y != c.y) && (g(t, f, l), l++, n++), e == RY[rd] ? (g(t, u, l), l++, n++) : e == RY.EDGE_CORNER_ROUND && (g(t, [d, u], l), l++, n++)), c = d, d = v
                }
                null != _ && u.x == d.x && u.y == d.y && m(t, d)
            }
        }
    }

    function $s(t, i, n, e, s, r, h, a) {
        var o = r.getStyle(UU[hd]),
            f = !0;
        null != o || (o = Ps(t, s, i, n, r)), s ? Gs(i, n, o, e, f, h, a) : zs(i, n, o, e, f, h, a)
    }

    function Fs(t, i, n) {
        return i >= t.x && i <= t.right && n >= t.y && n <= t[ra]
    }

    function zs(t, i, n, e, s, r, h) {
        var a = Math.max(t.y, i.y),
            o = Math.min(t.y + t[Ja], i.y + i[Ja]),
            f = null != n ? n.y : o + (a - o) / 2,
            u = r ? r.x : t.x + t[Oa] / 2,
            c = h ? h.x : i.x + i.width / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[Oa] && (u = n.x), n.x >= i.x && n.x <= i.x + i[Oa] && (c = n.x)), Fs(i, u, f) || Fs(t, u, f) || e.push(new wq(u, f)), Fs(i, c, f) || Fs(t, c, f) || e.push(new wq(c, f)), 0 == e[nh])
            if (null != n) Fs(i, n.x, f) || Fs(t, n.x, f) || e.push(new wq(n.x, f));
            else {
                var d = Math.max(t.x, i.x),
                    _ = Math.min(t.x + t.width, i.x + i.width);
                e[fh](new wq(d + (_ - d) / 2, f))
            }
    }

    function Gs(t, i, n, e, s) {
        var r = Math.max(t.x, i.x),
            h = Math.min(t.x + t.width, i.x + i[Oa]),
            a = null != n ? n.x : h + (r - h) / 2,
            o = t.y + t[Ja] / 2,
            f = i.y + i[Ja] / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[Ja] && (o = n.y), n.y >= i.y && n.y <= i.y + i[Ja] && (f = n.y)), Fs(i, a, o) || Fs(t, a, o) || e[fh](new wq(a, o)), Fs(i, a, f) || Fs(t, a, f) || e[fh](new wq(a, f)), 0 == e.length)
            if (null != n) Fs(i, a, n.y) || Fs(t, a, n.y) || e[fh](new wq(a, n.y));
            else {
                var u = Math.max(t.y, i.y),
                    c = Math.min(t.y + t[Ja], i.y + i[Ja]);
                e[fh](new wq(a, u + (c - u) / 2))
            }
    }

    function qs(t, i, n, e) {
        var s = i.x + i[Oa] < t.x,
            r = t.x + t[Oa] < i.x,
            h = s ? t.x : t.x + t.width,
            a = t.y + t[Ja] / 2,
            o = r ? i.x : i.x + i[Oa],
            f = i.y + i[Ja] / 2,
            u = e,
            c = s ? -u : u,
            d = new wq(h + c, a);
        c = r ? -u : u;
        var _ = new wq(o + c, f);
        if (s == r) {
            var l = s ? Math.min(h, o) - e : Math.max(h, o) + e;
            n[fh](new wq(l, a)), n[fh](new wq(l, f))
        } else if (d.x < _.x == s) {
            var v = a + (f - a) / 2;
            n[fh](d), n.push(new wq(d.x, v)), n[fh](new wq(_.x, v)), n[fh](_)
        } else n[fh](d), n[fh](_)
    }

    function Ys(t, i, n, e) {
        var s = i.y + i[Ja] < t.y,
            r = t.y + t[Ja] < i.y,
            h = t.x + t.width / 2,
            a = s ? t.y : t.y + t[Ja],
            o = i.x + i.width / 2,
            f = r ? i.y : i.y + i[Ja],
            u = e,
            c = s ? -u : u,
            d = new wq(h, a + c);
        c = r ? -u : u;
        var _ = new wq(o, f + c);
        if (s == r) {
            var l = s ? Math.min(a, f) - e : Math.max(a, f) + e;
            n[fh](new wq(h, l)), n.push(new wq(o, l))
        } else if (d.y < _.y == s) {
            var v = h + (o - h) / 2;
            n.push(d), n[fh](new wq(v, d.y)), n[fh](new wq(v, _.y)), n[fh](_)
        } else n[fh](d), n[fh](_)
    }

    function Hs(t) {
        return t == RY[ad] || t == RY[Hc] || t == RY[Uc] || t == RY[Xc] || t == RY.EDGE_TYPE_VERTICAL_HORIZONTAL || t == RY.EDGE_TYPE_EXTEND_TOP || t == RY[td] || t == RY[Jc] || t == RY[Wc] || t == RY[od] || t == RY.EDGE_TYPE_ELBOW_HORIZONTAL || t == RY.EDGE_TYPE_ELBOW_VERTICAL
    }

    function Us(t, i) {
        var n, e;
        i && i.width && i[Ja] ? (n = i[Oa], e = i.height) : n = e = isNaN(i) ? mq[fd] : i;
        var s = GU[ud](t, -n, -e / 2, n, e);
        return s || (s = new yH, s[of](-n, -e / 2), s.lineTo(0, 0), s[af](-n, e / 2)), s
    }

    function Ws(t, i) {
        var n = Math.sin(i),
            e = Math.cos(i),
            s = t.x,
            r = t.y;
        return t.x = s * e - r * n, t.y = s * n + r * e, t
    }

    function Vs(t, i, n, e, s, r) {
        var h = Math[ea](e - i, n - t),
            a = new wq(s, r);
        return a.rotate = h, Ws(a, h), a.x += t, a.y += i, a
    }

    function Xs(t, i, e, s, r, h) {
        i = si(s, i.x, i.y, e.x, e.y), e = si(r, e.x, e.y, i.x, i.y);
        var a = Math.PI / 2 + Math[ea](e.y - i.y, e.x - i.x),
            o = t * Math.cos(a),
            f = t * Math.sin(a);
        i.x += o, i.y += f, e.x += o, e.y += f;
        var u = e.x - i.x,
            c = e.y - i.y;
        if (h == RY[cd]) {
            var d = Math[Oo](u * u + c * c),
                _ = 5;
            return d > 2 * _ && (a = Math.atan2(e.y - i.y, e.x - i.x), u = _ * Math.cos(a), c = _ * Math.sin(a), i.x += u, i.y += c, e.x -= u, e.y -= c), [new vH(uH, [i.x, i.y]), new vH(uH, [e.x, e.y])]
        }
        return [new vH(dH, [i.x + .25 * u, i.y + .25 * c, i.x + .75 * u, i.y + .75 * c, n, n])]
    }

    function Ks(t, i, e) {
        if (g(t, new vH(fH, [i.x, i.y]), 0), e) {
            if (t[nh] > 1) {
                var s = t[t[nh] - 1];
                if (cH == s[qo] && (s[xf] || s[Ao][2] === n || null === s[Ao][2])) return s.points[2] = e.x, s.points[3] = e.y, void(s[xf] = !0);
                if (dH == s[qo] && (s[xf] || s[Ao][4] === n || null === s[Ao][4])) return s[Ao][4] = e.x, s[Ao][5] = e.y, void(s[xf] = !0)
            }
            t[fh](new vH(uH, [e.x, e.y]))
        }
    }

    function Js(t, i, n) {
        var e = i[dd](t[Gc](UU[_d]), n),
            s = t.getStyle(UU[ld]);
        return s && (e.x += s.x || 0, e.y += s.y || 0), e
    }

    function Zs(t, i, n) {
        var e = i.getPortPoint(t[Gc](UU[vd]), n),
            s = t.getStyle(UU[bd]);
        return s && (e.x += s.x || 0, e.y += s.y || 0), e
    }

    function Qs(t, i, n, e, s) {
        var r = e == s,
            h = t[yd].getUI(e),
            a = r ? h : t[yd][gd](s);
        if (h && a) {
            var o = i.edgeType,
                f = t.getEndPointBounds(h),
                u = r ? f : t[md](a),
                c = i[xd]();
            if (r && !c) return t[pd](t[Ed], h, o, f);
            var d = Js(t, h, f),
                _ = Zs(t, a, u);
            if (!r && !o && !c) {
                var l = e.busLayout,
                    v = s[Pc];
                if (l != v) {
                    var b, y, g, m, x = i[wd];
                    l ? (b = h, y = f, g = a, m = u) : (b = a, y = u, g = h, m = f);
                    var p = rr(y, b, l, g, m, x);
                    if (p && 2 == p[nh]) {
                        var E = p[0],
                            w = p[1];
                        return n[of](E.x, E.y), w.x == E.x && w.y == E.y && (w.y += .01), n[af](w.x, w.y), void(n._5v = !0)
                    }
                }
            }
            t._39(i, n, h, a, o, f, u, d, _), (!r || c) && tr(t, i, n, h, a, o, f, u, d, _), n._5v = !0
        }
    }

    function tr(t, i, e, s, r, h, a, o, f, u) {
        var c = t[Td],
            d = t[kd];
        if (!c && !d) return void Ks(e._fd, f, u);
        var _ = e._fd;
        if (_.length) {
            if (c) {
                var l = _[0],
                    v = l[Od];
                ir(s, a, v, f, n, n)
            }
            if (d) {
                var b, y = _[_.length - 1],
                    g = y.lastPoint,
                    m = y[Ao][nh],
                    x = g.x === n || g.y === n;
                m >= 4 && (x || o.contains(g.x, g.y)) && (x || (u = g), b = !0, g = {
                    x: y.points[m - 4],
                    y: y[Ao][m - 3]
                }, o.contains(g.x, g.y) && (u = g, m >= 6 ? (g = {
                    x: y[Ao][m - 6],
                    y: y[Ao][m - 5]
                }, y[Ao] = y[Ao][sh](0, 4), y[qo] = cH) : 1 == _[nh] ? (g = {
                    x: f.x,
                    y: f.y
                }, y.points = y[Ao][sh](0, 2), y[qo] = uH) : (y = _[_[nh] - 2], g = y[Go]))), ir(r, o, g, u, n, n), b && (m = y[Ao].length, y.points[m - 2] = u.x, y[Ao][m - 1] = u.y, u = null)
            }
        } else {
            var p = Math.atan2(u.y - f.y, u.x - f.x),
                E = Math.cos(p),
                w = Math.sin(p);
            c && ir(s, a, u, f, E, w), d && ir(r, o, f, u, -E, -w)
        }
        Ks(e._fd, f, u)
    }

    function ir(t, i, e, s, r, h) {
        if (r === n) {
            var a = Math.atan2(e.y - s.y, e.x - s.x);
            r = Math.cos(a), h = Math.sin(a)
        }
        for (e = {
            x: e.x,
            y: e.y
        }, i[Sd](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y));;) {
            if (!i[Sd](e.x, e.y)) return s;
            if (t[Md](e.x - r, e.y - h, mq.LOOKING_EDGE_ENDPOINT_TOLERANCE)) {
                s.x = e.x - r / 2, s.y = e.y - h / 2;
                break
            }
            e.x -= r, e.y -= h
        }
        return s
    }

    function nr(t, i, n, e, s, r, h, a) {
        if (i[xd]()) return i._95;
        var o = i[Id];
        if (Hs(o)) {
            var f = Ts(o, n, e, t, h, a);
            if (!f || !f[nh]) return null;
            g(f, h, 0), f.push(a), o != RY[od] && Bs(f, t);
            for (var u = [], c = f[nh], d = 1; c - 1 > d; d++) {
                var _ = f[d];
                u[fh]($(_) ? new vH(cH, [_[0].x, _[0].y, _[1].x, _[1].y]) : new vH(uH, [_.x, _.y]))
            }
            return u
        }
        if (i.$bundleEnabled) {
            var l = t._24();
            if (!l) return;
            return Xs(l, h, a, n, e, t.getStyle(UU[Pd]))
        }
    }

    function er(t, i, n) {
        var e = t[Gc](UU[Cd]),
            s = t._24(),
            r = e + .2 * s,
            h = i.x + i[Oa] - r,
            a = i.y,
            o = i.x + i[Oa],
            f = i.y + r;
        e += s;
        var u = .707,
            c = -.707,
            d = i.x + i[Oa],
            _ = i.y,
            l = d + u * e,
            v = _ + c * e,
            b = {
                x: h,
                y: a
            },
            y = {
                x: l,
                y: v
            },
            g = {
                x: o,
                y: f
            },
            m = b.x,
            x = y.x,
            p = g.x,
            E = b.y,
            w = y.y,
            T = g.y,
            k = ((T - E) * (w * w - E * E + x * x - m * m) + (w - E) * (E * E - T * T + m * m - p * p)) / (2 * (x - m) * (T - E) - 2 * (p - m) * (w - E)),
            O = ((p - m) * (x * x - m * m + w * w - E * E) + (x - m) * (m * m - p * p + E * E - T * T)) / (2 * (w - E) * (p - m) - 2 * (T - E) * (x - m)),
            r = Math[Oo]((m - k) * (m - k) + (E - O) * (E - O)),
            S = Math[ea](b.y - O, b.x - k),
            M = Math[ea](g.y - O, g.x - k),
            I = M - S;
        return 0 > I && (I += 2 * Math.PI), sr(k, O, S, I, r, r, !0, n)
    }

    function sr(t, i, n, e, s, r, h, a) {
        var o, f, u, c, d, _, l, v, b, y, g;
        if (Math.abs(e) > 2 * Math.PI && (e = 2 * Math.PI), d = Math[Uh](Math.abs(e) / (Math.PI / 4)), o = e / d, f = o, u = n, d > 0) {
            _ = t + Math.cos(u) * s, l = i + Math.sin(u) * r, moveTo ? a[of](_, l) : a[af](_, l);
            for (var m = 0; d > m; m++) u += f, c = u - f / 2, v = t + Math.cos(u) * s, b = i + Math.sin(u) * r, y = t + Math.cos(c) * (s / Math.cos(f / 2)), g = i + Math.sin(c) * (r / Math.cos(f / 2)), a[cc](y, g, v, b)
        }
    }

    function rr(t, i, n, e, s, r) {
        var h = s.cx,
            a = s.cy,
            o = Math.cos(r),
            f = Math.sin(r),
            u = ar(i, t, {
                x: h,
                y: a
            }, -o, -f);
        if (!u) {
            var c = h < t.x,
                d = h > t.right,
                _ = a < t.y,
                l = a > t.bottom,
                v = t.cx,
                b = t.cy,
                y = c || d,
                g = _ || l;
            r = Math[ea](a - b, h - v), y || g || (r += Math.PI), o = Math.cos(r), f = Math.sin(r), u = ar(i, t, {
                x: h,
                y: a
            }, -o, -f) || {
                x: v,
                y: b
            }
        }
        var m = ar(e, s, {
            x: u.x,
            y: u.y
        }, -u[Ad] || o, -u[Ld] || f, !1) || {
            x: h,
            y: a
        };
        return n ? [u, m] : [m, u]
    }

    function hr(t, i, n, e, s, r) {
        var h = i < t.x,
            a = i > t[ha],
            o = n < t.y,
            f = n > t.bottom;
        if (h && e > 0) {
            var u = t.x - i,
                c = n + u * s / e;
            if (c >= t.y && c <= t[ra]) return {
                x: t.x,
                y: c,
                perX: e,
                perY: s
            }
        }
        if (a && 0 > e) {
            var u = t[ha] - i,
                c = n + u * s / e;
            if (c >= t.y && c <= t[ra]) return {
                x: t[ha],
                y: c,
                perX: e,
                perY: s
            }
        }
        if (o && s > 0) {
            var d = t.y - n,
                _ = i + d * e / s;
            if (_ >= t.x && _ <= t.right) return {
                x: _,
                y: t.y,
                perX: e,
                perY: s
            }
        }
        if (f && 0 > s) {
            var d = t[ra] - n,
                _ = i + d * e / s;
            if (_ >= t.x && _ <= t[ha]) return {
                x: _,
                y: t[ra],
                perX: e,
                perY: s
            }
        }
        return r !== !1 ? hr(t, i, n, -e, -s, !1) : void 0
    }

    function ar(t, i, n, e, s, r) {
        if (!i[Sd](n.x, n.y)) {
            if (n = hr(i, n.x, n.y, e, s, r), !n) return;
            return or(t, i, n, n[Ad], n.perY)
        }
        return r === !1 ? or(t, i, n, e, s) : or(t, i, {
            x: n.x,
            y: n.y,
            perX: e,
            perY: s
        }, e, s) || or(t, i, n, -e, -s)
    }

    function or(t, i, n, e, s) {
        for (;;) {
            if (!i.contains(n.x, n.y)) return;
            if (t[Md](n.x + e, n.y + s)) break;
            n.x += e, n.y += s
        }
        return n
    }

    function fr(t) {
        return Sn(t) ? t : t[Rd](/.(gif|jpg|jpeg|png)$/gi) || /^data:image\/(\w+\+?\w+);base64,/i [Jo](t) ? t : (t = Z(t), t instanceof Object && t[_f] ? t : void 0)
    }

    function ur(t) {
        for (var i = t[Vu]; i;) {
            if (i.enableSubNetwork) return i;
            i = i.parent
        }
        return null
    }

    function cr() {
        w(this, cr, arguments)
    }

    function dr(t, n, e, s, r, h, a) {
        var o = i[ro](jd);
        o.className = Dd, bi(o, uW), n && bi(o, n);
        var f = i[ro](Nd);
        return h && (yq && (f.ontouchstart = h), oY || (f.onclick = h)), f.name = a, f.src = e, bi(f, cW), r && bi(f, r), s && gi(f, Bd, $d), o._img = f, o.appendChild(f), t[Wu](o), o
    }

    function _r(t, n) {
        this[Fd] = i[ro](jd), this[Fd][Oh] = zd, bi(this._navPane, {
            "background-color": Gd,
            overflow: qd,
            "user-select": Yd,
            position: Hd
        }), this[Ud] = dr(this[Fd], {
            width: Wd
        }, mq.NAVIGATION_IMAGE_TOP, !1, null, n, Vd), this[Xd] = dr(this[Fd], {
            height: Wd
        }, mq.NAVIGATION_IMAGE_LEFT, !1, dW, n, La), this[Kd] = dr(this._navPane, {
            height: Wd,
            right: Jd
        }, mq[Zd], !0, dW, n, ha), this[Qd] = dr(this[Fd], {
            width: Wd,
            bottom: Jd
        }, mq.NAVIGATION_IMAGE_TOP, !0, null, n, ra), t.appendChild(this[Fd])
    }

    function lr(t, i) {
        if (!mq[Zd]) {
            var n = Di(20, 40),
                e = n.g;
            e[bo](e.ratio, e[Qa]), e[of](16, 4), e[af](4, 20), e[af](16, 36), e[Fo] = 3, e.lineCap = Ro, e[t_] = Ro, e.strokeStyle = cf, e[i_] = n_, e[e_] = 5, e[No](), mq[Zd] = n[s_]();
            var s = Di(n[Ja], n[Oa], !1);
            s.g[vo](s[Oa], 0), s.g[Yo](Math.PI / 2), s.g[r_](n, 0, 0), mq[h_] = s[s_]()
        }
        this[Yu] = t;
        var r = function(i) {
            G(i);
            var n, e, s = i[a_],
                r = s[ph];
            if (La == r) n = 1;
            else if (ha == r) n = -1;
            else if (Vd == r) e = 1;
            else {
                if (ra != r) return;
                e = -1
            }
            yq && (s[Oh] = o_, setTimeout(function() {
                s[Oh] = ""
            }, 100)), G(i), t._kd[f_](n, e)
        };
        _r[ih](this, i, r), this._36(i[ka], i[u_])
    }

    function vr(t, i) {
        this._myaseCanvas = t, this[c_](i, t)
    }

    function br() {
        w(this, br, arguments)
    }

    function yr(t, i) {
        this._myaseCanvas = t, this._j0 = le(i), this.g = this._j0.g, this._9d = new xq
    }

    function gr(t) {
        var i = t[d_],
            n = [];
        return t[__][ku](function(i) {
            t[l_](i) && t[v_](i) && n[fh](i)
        }), i.set(n)
    }

    function mr(t, i, n, e) {
        var s = t[Co];
        n = n || s, i = i || 1;
        var r = null;
        r && n.width * n.height * i * i > r && (i = Math[Oo](r / n[Oa] / n[Ja]));
        var h = Di();
        ie(h.g), h[Oa] = n.width * i, h[Ja] = n.height * i, t._8i._gt(h.g, i, n);
        var a = null;
        try {
            a = h[s_](e || b_)
        } catch (o) {
            LY[na](o)
        }
        return {
            canvas: h,
            data: a,
            width: h[Oa],
            height: h[Ja]
        }
    }

    function xr(t) {
        this[yd] = t, this[y_] = t[y_]
    }

    function pr(t, i) {
        this.interactions = t, this.defaultCursor = i || g_
    }

    function Er() {
        w(this, Er, arguments)
    }

    function wr(t, i) {
        if (!t) return i;
        var e = {};
        for (var s in t) e[s] = t[s];
        for (var s in i) e[s] === n && (e[s] = i[s]);
        return e
    }

    function Tr() {
        w(this, Tr, arguments)
    }

    function kr(t, i, n, e) {
        var s;
        return t.forEachReverseVisibleUI(function(r) {
            var h = r[$o];
            return h instanceof LY.Node && (!e || e(h) !== !1) && r[m_][Lo](i - r.x, n - r.y) && r[Md](i, n, mq[x_] / t[bo]) ? (s = h, !1) : void 0
        }), s
    }

    function Or(t) {
        this[nf] = t[Po](), this[Ao] = t[p_](), this[E_] = t[w_]()
    }

    function Sr() {
        w(this, Sr, arguments)
    }

    function Mr() {
        w(this, Mr, arguments)
    }

    function Ir() {
        w(this, Ir, arguments)
    }

    function Pr(i, n, e) {
        i += t[Ca], n += t[Aa];
        var s = e.getBoundingClientRect();
        return {
            x: i + s[La],
            y: n + s.top
        }
    }

    function Cr(t, i, n) {
        var e = t[T_],
            s = t[k_];
        t[ya][La] = i - e / 2 + to, t[ya].top = n - s / 2 + to
    }

    function Ar(t) {
        var n = i[ro](ho),
            e = n[ao](oo),
            s = getComputedStyle(t, null),
            r = s[go];
        r || (r = s[O_] + Ph + s[S_] + Ph + s[M_]), e.font = r;
        var h = t.value,
            a = h[Ch](Eo),
            o = parseInt(s[S_]),
            f = 0,
            u = 0;
        return LY[ku](a, function(t) {
            var i = e[I_](t)[Oa];
            i > f && (f = i), u += 1.2 * o
        }), {
            width: f,
            height: u
        }
    }

    function Lr(t, n) {
        if (Ah == typeof t.selectionStart && Ah == typeof t[P_]) {
            var e = t.value,
                s = t[C_];
            t[Dc] = e[sh](0, s) + n + e[sh](t[P_]), t.selectionEnd = t[C_] = s + n[nh]
        } else if (A_ != typeof i[L_]) {
            var r = i[L_][R_]();
            r[j_] = n, r.collapse(!1), r[D_]()
        }
    }

    function Rr(i) {
        if (rq) {
            var n = t[N_] || t[Ca],
                e = t[B_] || t[Aa];
            return i.select(), void t[$_](n, e)
        }
        i.select()
    }

    function jr() {}

    function Dr() {
        w(this, Dr, arguments), this[F_] = yq ? 8 : 5
    }

    function Nr(t) {
        return t[qo] == cH || t.type == dH
    }

    function Br() {
        w(this, Br, arguments), this[F_] = yq ? 8 : 4, this[z_] = yq ? 30 : 20
    }

    function $r(t, i) {
        var n = new Sq;
        return n[Za](Vn.call(t, {
            x: i.x,
            y: i.y
        })), n[Za](Vn[ih](t, {
            x: i.x + i[Oa],
            y: i.y
        })), n[Za](Vn.call(t, {
            x: i.x + i[Oa],
            y: i.y + i[Ja]
        })), n[Za](Vn[ih](t, {
            x: i.x,
            y: i.y + i.height
        })), n
    }

    function Fr(t) {
        t %= 2 * Math.PI;
        var i = Math[Ro](t / vW);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : G_
    }

    function zr() {}

    function Gr(n, e, s) {
        var r = i[q_],
            h = new Sq(t[Ca], t[Aa], r.clientWidth - 2, r.clientHeight - 2),
            a = n.offsetWidth,
            o = n.offsetHeight;
        e + a > h.x + h[Oa] && (e = h.x + h[Oa] - a), s + o > h.y + h[Ja] && (s = h.y + h[Ja] - o), e < h.x && (e = h.x), s < h.y && (s = h.y), n[ya][La] = e + to, n[ya].top = s + to
    }

    function qr(t) {
        this[Y_] = t, this[H_] = function(t) {
            return this._kh && (this[U_] ? (cancelAnimationFrame(this._kh), this[U_] = null) : clearTimeout(this._kh), this._kh = null), t === !0 || t === !1 ? void this._mzction() : t ? void(this._kh = setTimeout(function() {
                this[Y_](), this._kh = null
            }.bind(this), t)) : (this[U_] = !0, void(this._kh = requestAnimationFrame(function() {
                this[Y_](), this._kh = null, this[U_] = null
            }[Th](this))))
        }
    }

    function Yr(t, i, n, e, s) {
        this.source = t, this.type = W_, this.kind = i, this[jh] = n, this[$o] = e, this[V_] = s
    }

    function Hr(t) {
        this._4a = {}, this._kd = t, this._kd._1d[X_](this._9n, this), this.currentMode = RY[K_]
    }

    function Ur(t) {
        return t >= 100 && 200 > t
    }

    function Wr(t) {
        return t == CW || t == $W || t == BW || t == RW || t == GW || t == qW
    }

    function Vr() {
        var t, i, n = {},
            e = [],
            s = 0,
            r = {},
            h = 0;
        this[yd][ku](function(a) {
            if (this.isLayoutable(a))
                if (a instanceof FU) {
                    var o = {
                        node: a,
                        id: a.id,
                        x: a.x,
                        y: a.y
                    };
                    for (this[J_] && this.appendNodeInfo(a, o), n[a.id] = o, e[fh](o), s++, i = a[Vu]; i instanceof qU;) {
                        t || (t = {});
                        var f = t[i.id];
                        f || (f = t[i.id] = {
                            id: i.id,
                            children: []
                        }), f[eh].push(o), i = i.parent
                    }
                } else if (a instanceof $U && !a[ic]() && a.fromAgent && a.toAgent) {
                var o = {
                    edge: a
                };
                r[a.id] = o, h++
            }
        }, this);
        var a = {};
        for (var o in r) {
            var f = r[o],
                u = f[Cc],
                c = u.fromAgent,
                d = u[Xu],
                _ = c.id + la + d.id,
                l = d.id + la + c.id;
            if (n[c.id] && n[d.id] && !a[_] && !a[l]) {
                var v = n[c.id],
                    b = n[d.id];
                f[tc] = v, f.to = b, a[_] = f, this[Z_] && this[Z_](u, f)
            } else delete r[o], h--
        }
        return {
            groups: t,
            nodesArray: e,
            nodes: n,
            nodeCount: s,
            edges: r,
            edgeCount: h,
            minEnergy: this.minEnergyFunction(s, h)
        }
    }

    function Xr(t) {
        this.graph = t, this[Q_] = {}
    }

    function Kr() {
        w(this, Kr, arguments)
    }

    function Jr(t, i, n, e, s) {
        e ? t[fc](function(e) {
            var r = e.otherNode(t);
            r != n && r._marker != s && i(r, t)
        }, this, !0) : t[tl](function(e) {
            var r = e.toAgent;
            r != n && r[il] != s && i(r, t)
        })
    }
    var Zr = "104bb8bf2cdae005e7609de9c6da8b2aa00b373757feaa797470f5edafa3e3e85f2a49f03f63ba34421406c1d1c13c6a266e627b48802ba22d431ad6dcaaf55a5df31dd73df144713832cb7b8cf96e660ee377d451e35593a53e19323c4b099aa2d67997a95ebe67c010304a5299cddf0c8fe87854e5db7ab6a67a15d645817df325565f3374d014bdca82353a8ac9688e4ff6dff316834a23b9a2b704a6df72c62b077b245e4a23717318e81fab7e82fbc71eda9917b81997771ca29432e69544242b2f524f96cb6c86438439f1b9db21b26522fc0f718cc6d02ab653d1a21d125f22ed6ac931e3547a7a5e63bfb209af9a3bd998d010c5c08b294ccda62006df1d50dcd49588ff5e1bb9a5b9db76682a2333cd8cefe4eeaefa37cb20972911577c248fdde383500daedfa584cc4135f377e544019346cf1f52dd88b2138b72ab929434ecd6989795deaa4f3e1df3db3d025c4ae953c8b19356fd00d768b165d237b47113fa5207899dfeac9eeecd2dae956efd84540fc87114f3a810bc6a0c35f125bc560d36d8d772c59ec230aeffd5260e8fa08bdd065d2fc9089ed32ae4dd92b5623960b12fa4706864a805824d7976b9c5a169d635bb88d72ae4d10044b06a7a7692e68dd6273dbb9c67de28682aea3a75207395b708352e4eb32c1b22346ff8a5e1c170a0ef319baa14291bc034d767da76bb6619b5f25c65e4bc79b19abc5867a2525fd45dfd850f71fd541b71145170285af1ae289f1edfc030c51d6dfaa453ab6a759ce3dd4117b97bd73530cebbc4caab7a79dd77f1844f555f9cf5ba67bb969d6b42dc1c7ea3230bba79c63a9041d0adf19b107ca9d6467b382597a4e312be3ef19e5ab74d3e8a2b7d592281324e4d4318c6883376e4d5fe2ea19bf0895ee07240acf35d8ef90e10c0627ce83cabe1d7caf3d025c41425d3cdcc2f1ca16277e94e001efbaee8bb40c4ba0e77afd7dce2706c41d4ed11f3049504f7fa400a2e9578034d238f09f7ff377872eb77554560c3b562e0f80763753a5793658ea91ecfd6d37ae73d72150edf685a656d67332430c29de1782d20682ba98f89d9caa52bd1e922c3cc43985c595fb35a9a1c4cf729b517fc7186c5e67c939fd1b9eb21250f014d303733048ce3a4202ba142acd5171607eaa681f5d6467a0aba58fd7a15535adeecde87573433d8d87616d86594a26295bdcc7752a03bf7acbf081d2a65b43495f2f95fe3e7328e21c9605e53b8121a12049132cf8988166393a08852cd7b8ff0cd96fc852c7e9b34fcc8bff21c21c2e9bdeefa799cc22494779b2fe5f83dec482f559a2ed646e90a1b31b9ae12958a16b9b7035de3d65aaedd44507090f7295092f1a6168b17a42b1d044ed9545a9f298c258fd637aa41bab233aa2ee83d6be48c6195f9c27a337b729269a08872dfdf8165c1ddfa9cbd5ef95256808867f9b765092d16470f44caab89cdde2f3592d0dc6dad150f1f82bfda350b38828eac58dfe1ee30022aac404f259fc1774e7da331d3637cc8a6a54aa2f8477f65b826e1f0c4fa1b9d0e66756f4f818362b62cedf1495ed2f03ca2204c893fa16bdda60fd93b96f68fc5abe9a34091446b1294250114403735ab94224d90c18dcc179d3046d9b793a89e584f60854f3554532e0174e3f37b4886a6da03b63687397f0d93801feb1b80051d6fffc9ff68419c73ab18b398d120d31d1f81feb4a46b369dce5a034925329ec6394032b19af211ffe1541f49a1a985bff567824905a9e57df077162ada6431af52b3341d11b641f4fcd453ce099364e93dd59f42fc2ddc6126edd5d9309524225e35c88480ae078c2f829e81e795057cc46acaa39330e335a2728a808f4f905382b462a475dc07a0d10bd87db67cf0a7d3bb1411271d8f4071a89f3093fabac2282714757430f0a971817e7f14754f35e606d85bc3f370198dffe52a41c10c90336b1223c517536b8e55a2cc35d394d809ff73396af9e4badf89bbc291121d98adde8028383789cecca81e446669b80c39c9f3967a737aae665c2e90915222624b45609d1527ce1ba93ff3322653699cef208d535cd06a64ebaca2cfaa7d7da6233364b1cee34ca7ae2e208ca7b5c32c4c006248421c5247ce2269866b220f36121adbed33d8517ff81d73b213c1ed131a7d026e1de7538416ec903fa1f9f2138d85da2de556202fffa4ad59222ef0fe3b6714af7aed3cc8017096b852120d351ff1e7991af6faa70fa0b4a1e1ec3eb8881a507e1b5496fbba1e105001cbda6ac68c1075a29ed3224ee9c93dea4e6297aac0b4cf6a4caa889c93850014d6a77940e78be34a82f4fbf31132c5c5f04a2602ddc19c003303871294ef2b18f5f845a7a0a6d9174c5a8bce0c1c42487511a477746d2a990549f1e923c13ffeeb596b5c0fc5dc368e3e6743e79908f28c48a58dbc502bac58dda868f81b171636d32c41d3d76602cbc296e3ab8e996ef7780aab23ccf822d44ecd34c312facfa7439e6837205e3d596d9e3ca802e1bc6121943dd3edd83d38353ebdbd4c213c5ab5957c527129c07a8f898a59fd222cc5c8b071682bf30014f5d88d095e6985d2a42f4d1427787b9868a76c43bdcba2a952cd3f19184abb2a3116959e0d048020e2257b02e8a369a33c42f9177f71f10c5666fb0d84c73b10265b25e32dafe6b542cc1b3f0ef221fa43177899616e87a5cde21df6baf1020100a93184ab5301ba0977389f972e8074abc1073742706dc5b5bf0e314925a81e12b42eb4676d02dc26e36193f9df6d9dafe53c4fa7b943528b1cd4d7e93e5d5cafdf09d42022f2eba59ba814d791e8cac678a15190072472f98aed8598f6ba3d7f099d874024f272a97496431054c2be6c198474c4f523028c1f61a7cc460eb8b4ce4ed84acfab75c1cba03c410e05793b93609af7595554c1f7a5352a791c25cd872c0b3e619665221f4a9351bdeaa035592104e7a14974e0053fa43fc53ee964de37ce9cd27e8575608beaa7d9bc8cfcb05f8e557b570fe8eef9b368f29db286cdacef0a93c13c5e681d6b2114424208f4cb9da1f459a0bb8ba1bda5b9f76d287a3e1b437825ccc24ac63e0f060774b57fee67fa2f1c4130b621ae705021224e8f171ba4900504293161b4e7359184029a1b85b5ded88b34edcbf1f19adb04db2965c56d4bd005d76ef5e3424532d963c70d5b6a8d837cb5b8d99b2487246feee1c9fb66c7d870b76660965df09657c6b98e742172c758929760f8aacb98c6377b1808553ceb988376803b0ded76098a81a692ee84bd0c41d5f1b14c6ccf724adbcb4ade38360e8360a14daceaee9fe98a3b6f1579bfe315417e566ab4dd0142195bc3b892bfcb645630ce540c401ae690dce47444993f108063ac639a3f9246cd9323d15a5d351b69b42b72fe28497da81e4a62deffc281876167b19e6c2997d6de862b2352c69b8acf9103cb665f6c9484929e7089f55fd527c48f7a177bb9f796b089f5f5c40a0efe4bd4ecf903e977b798f0383936d820fcff4305fe0fb4f284e073aa579190dfa9909b3ddf4ec39a20807e3c98cc3958c11e7a9d45274309ac561c9d395d24183d63a728960c12594e31868cc3959bfcf2b7dbcf8433d00f174c7ba9f2b609eb212d770858983afc6c9dc09ba835c87e47245632d8189a97253f96eeb4962158380aae4b7bf605fad4cbce3a9fdc6cf83dc41c6f573a83a099d98b3ebb772458341cf885b803502a1331f3e7951c2c162c4cf2c85805bcdf518aa7bb5a6473ff51ce19de5a614260eddac43415ea6f379eaed25b86f8f8e9871184c437bde40060dab17afd52c41047cd0146ce1b9d06e54c213cf70a25d10f8692cba0bb6019c21f9750401f38e2a55a66b6383f73cad34c6240edc8a2de5a492a95bc8ad36fd626f1157a83568579b24ae930fb06ff324e6963030671dce45b03081dec835297f2154d95c5f77b03c87e29b9ac56feb293e4433cb326c8ff62e1de796f8cc847a205ba4b655246059560b8cee679741f48931e9a320f8bb1ac08c8a08cf971266989a8083939ebe05639439a35da326b77f02e977f0bb43e2d5649d8610b0556eab0d974c1a38628f296463d24d9ebc289947cc045896bcaac16fd9d3f1c3ffa81ad7e22206ce065d2dd4eaeee11c9f9d964035e24e2832028cc30704190bda1e5c15d07bc88093fab8a37786feea2192f54f97543bb796f7586e0c1fc18b52b1d25d7b34b988002c0e0dc1fb216ef558b74e011d135e22668032ec0d117d49c4fa0d7bb1d79400d118c114e7b8334180db54919b04a3644e983b7e020e88858d0586ee7f187eecdab34419fd773e81c048b6f11342fcb4c6dc3d26dd38a65037aab5535bd66ffc0768b241a03ffa77c1914cea0939ba49ef2b9fddfc14aaa362f530278f2f64263cd12e630ed339f626e7b6d4390d84502dfa6e0e7768bebfd055d7d3eac774e7477556c5cb47385ffbd73cbed259e957ad4088264c1b37c28accade9f68c6050ae539ad608aeed3f297b135a3b2ec218385c8da3574c6a76386cb8fea66276ec89bb97c4fb57c7d2e64f3a15cdf1e99429bcdfc9605a566ddec9ac229487f323405cb2ad6ce873aa37d3d79c1aca9912fe2d33f1d836d9beeeb27eb550ede64407b3057b93e676d733e70614087e0d3c6d44e229e80e788803dbeb7ef85e23b3a3ecada265a335ff3d6170b634543268f4133a963312228304bb3e1ff79dd6af507b8de5232a159c1667e9189210089775f07801b3fc55b86c0374bb1c98cc8446b24b8cc3c404f9bb5b7589f7af3c69a755165e887a02af3675aec32c2e9eee391ba737001f6077d119dab913b3aa5d46f5dcdb7a5fc4b1af6900000238aa8aaad530ffc94febc23ef2c9faada166300d3cdce49126ae58cbec314839b38e89f38e8e0309395e14a379361a967d94c2774ec570ba6559b337a834e0a37256b6472b416f680860a7b237fb9c696e5e0222ae78149f39f99ec92b1e4cb9dea30cd3426b51dab4854ce568ed407e59dc9a319db0d2e67f3ede31ee0a0970dcd180499fd095e3172854abe7c6fc46592728eaca838f8fdcdc210100a90e374fe722fa25bd6dfd33ad191b8de819358e3b81c48c14f6eb626c4c0e8c28fd6df988c35c88eb30ef739e57709b7b1caa43f9b08fbb555726761b59277822e438c331ed4635eadb08496880bebdc3d2b7ce8156d4e48eb8765a28a57bf37aee575cc4bead49d7e5a6ae7daa6262b1571568c57c74c35b819eb181369b6d74e3c483b14a3f3ff2d2f034011ec6d94e108d940a369fa4573231bc21bea6d8734d636ee7bf8b49d179de0369d772e93434d9f0450efca4cf7c49f228af5a90e9b3fe0b19bfcfb2f246426d22dfcc778ba92a8b84ae0ceeb29097156c6f3b7cccf348aa6b4758102b6dff2c7e5bd397c32f807e9a453a190f4af31f1d9a761096bf1cc423c743e500ca3a85f37420b8c6efa5aa66bb8082130917826d38d930dd41021afa7858eb33b9ae7c49c3725b02c254b1889e7b93531bb85ae479e524fc9d663cda3e8c22276335ed0f55219ec09a4445b956dbb72524f7d175eb4434ae468f5642702f39ffa542ac9246c27e48b48ecd2be74adf7b9c0bcbdf54ba244c8d87c6751bb6646bfdd65d1d3ff611939f82095e436f6270a8e7dcf7b8859efdb13eb1ea8674dcba7c5e7f99f47d2fe4d84a18bf2d7d1abc09538cf297c44f9719f65b71026f64cdfeb6eea0572ff10ff20076f1d5151740edef73350627b206cca4c4c016512586579dd48bf1b336c269e2a4c53fe65d40a2d250387ed21a0f0dc48f034813aaae21f82658ddc97bdecb558390dd3bee72e8d66ceaf7e080069bf732103abd70f19d69efbb134e52969d3db29c898102b51130170b6d9ab939aa1c8ebe647b61894782a4b2b4642549cc7edb33995c045f56294007a2fea570fac44a2b8060219aa66ebfffba889e9a8e76d95eaeddc903a53bf1bfb5c02bc1b02a969770e10c85e4fe680388b28d10606ff21c76d36c7e2fb7433d68a6b33d8547d40e6bf72c53127e6e86b6501f6ae86f03fa0859268ea781a92378a8bfae635aa68cfafad1f3fb2bd3caac1ae8deb61ea906c016666e9159a99ee308fe6907ee7cf576a4f8d20e4231ab96c3949e96b4e3ad867cfeef6eca6dc6248e0017f56ed74beacb64309c67c010ae2688aa8b9da6d6b7312048133735cf4e4a1f3766f1e7360b2548b1940453b46313099583e38ce30ef1d89cc1b3f62b4b993e7b05dc1b3c82f9991ba0156d25f92aba59864d66c0ff6961490b7d22cd0169c97bb536dd97c7367649a9e8367a108114e442e65ad8b0f2a445c5a8dfe986ebba04cfca4b608c3eee290adbe2241cfc209533edd7ff2187a6f3290699cf6bca50266427c88e32abb415305098bb36955c621491948de0271a5ba7d073d38fc87ea590ecd88bd239bdde2cac4bff8f570b37a3a97e8f535ffca9e9a5209dc0cf45c52f8fbab246909bea4163f3621f22fd5197c7b43cc1b3125858a26d8a68974138037eae157c04fbd38725a0092b67c632c79788f655c5d2822825feffb3daa40e01b3a177ef31053f2570a1b48c2cf84ee7c650361c7c41b9ed89e835fe590cd66fc267b9c5f5523218fcb374e3aeba9a30958964c8be0ce891cfe9402dbf34ea33e8df21f34e6ceaa8052d624c525c4abba70b5c6c6ee6097769899adc313e9c7c2e34128588546afa2e22485ce4c4aad2f0e262564aa33006d1d9f50cf495a82d95b5006a236d344cf58c4369364f1bfb949e0cb82c188ee1256f7b6f9957e993f313fe09cdab160e822fdf470022b4bd6c70725f421edc34b9952bc9496d46a68dc0d872e3b93b1d93fd7c697710f23323d61b8cb8d15d499ff662fd1002d6ee701fa786a0b415ba53f2f11431eba030784ed09447e3f91a9eebc88940c35a0213f8a9e2b616793454363845391dfc472250da650356da2cae6c97d8d6f062fcd7b6e5eb1454baa845700c1dfacd0352bc9291412f2fa8b6a5f685545b741ab13a100bcbd794a67e9f547a84e34d00e0eea8d7cc7195f342ddbe83e59981fa3dc81c0d34d24b213efacb8f7ea1b35e1c2ff262aa399ae58571998ea2e8a76e535b67118a316ac493e63fc095d9c9b8db1b6d869ff57f88c11f46cfd844a5b56bd66ddfd72b1592b1a722b1e292349aad10dd738b9e79db1402b30e0d1e86ed6b88a3733d66f1a94bdf202c521e46064b54b192764c9c7a745c50f022988815485e02b06d2f0000828c9a8abcb6eb0106eaf11c3f674bb05c03390c90cf02afa4356bb195242f985d18c886591708f209444823ac798cce60771dd625503daff4a9bcc26eb7581f90efe4a51e2372ea22b83c6c2cc2ed1314bb7945913310eeb8ed815400e554d886ebf538c18374ce27cf357ed1a1833f9e7395944f06b7c3db0f2e103d4d629caef430850c95c8ca0dacc66a1825f5290816552bdd0cd31d69ec09750d1d70f685ecd41bb82d2eeb9c913f00a186e217a962d5764b2a212d607ed8344c290f400ba26d03fe8a17acc04d8d9f966cd3de470da10a61b7aaeb4bb86fd626adc3ff86dbfa67508f55e72fc541b59e94e32142ff68d8993b80e3bb1a34480883d1da92f0d7b975c69fccc7f210c54d9f3bf14ce662c16a2b72687f855f02407a403e1916b047216c8406c800fa67cb3d7764274c546e00ac8c2a04364b113c4c34d262cbc0142ca3a7fe8e9d1360446c48488ea0051adc88ff72b9995399386a5c15d215341a877f1101fec6e29f3274302f1a46c789a2ac8bd99c1441a43d6150c622501fa9f65ad561f5ead2ca50f5cb96cd29043bde077ceaecb4363bbd8a1f9008b041a937acd0e92a67e85739c42d44035bc262d726544e613e29330a8569c85a7ece40f463b3f4a608d485f2a02da4ba26999736c12f4524dcb6e957d7a713cb79dc0c779424ff6a0bb291fb574906844f63e605903993faed53508e752350f53022d20d9b8976fbf17977fe4ba01779d23975963fb42249004111e23889a55f0974602b65eaf6b48e551c34673cfad39917b15910cb996112001016d10bf79e0c16d700f05db80431d0771d331de7f31a40f1a79dc1eeada2a4c7574b9721c6955b0286a8c57a4b36d0f9c8db5185b5bffb858b084c16ed141d86bff206634a3f464f3ffa46878d40d7c35a9a9496a706df9f77fc5d899bc84b66a4c6e091a4e3952610def2c67c9b5de6dbe24296d287f780cf5101e6951212cab0d16c7bb9bbae4fa98fae8a04dca1127a63c5b6f1b576b9a0b7dd76c5df40f638ca85989dc0f62bc9b9e4e583b0be0659eb89842f382582cd7aa9600c04008d5f97ab7348cd25a2f9bf042cc1fa21cfd902e0ff8c6cc499dd50cddbe8a7ba5d5a2c7d078f88bb65d45016b53c320d0fefabff54b3d820135bf26c23e0a4cbce7458960a766ebd0db18363b24d23b7f4a6bf323a15e8d0b2a06d1b13de97de2a730a034754b3118fa871f8e03d87e97635e59ae99e3bb8d40c8bfbe782553088e0fedf9e9659bf8840d766ffd5acfb8c7190242f6776fe19adfb9a1aef6d4f57d425b22d0592baae64cdc35b2f677cb1321eb192dba4542ab95635f6eabdd438d8b10d616861db8de121349f57e120d4b66b230863a983e5c1471cb74ea523e1279def3a76b141b916649e06541f0d8c59380e520603610303bdf9a78f3213b90794c95d500c407df965e5b424aafa147deaf112a759700e6816e23f868fec746a483700255b4bc5eb6850692fee23aa8117a696ba8d45e3068e8cf9cd8de91e8da6a431944f8d876bf494980d7ea9126e1f7d5abb995fb9a2bafae1ec32d2300549679bfbd77e8adeca6f1c13e27c2b6ef158239dbf82b47e36efa6e3857ea53d21d27efc4042e368d7f9955cfae56b267d466c20c2c4de8c4c893dd2fa0b932b92ccde1850bcd19cdee71389519843586402ef9d4d64fb8420419bf559afc508c444af6535701eb260f8df92276b13561a76c7fac3b168edd66807587263dd88bfaba83031ee0bd9e987fa7e7d38e0118d0c0e00c4a23a9c9bd142c2f098e0d2012afe901663830abddf6e14b4d559a4fc13c0af9121700d74797d54f59197c234b12b6a5f47495d95e9607afd2676258e19f7913dcc0e00612d48d7be398c483f6185832803a9f3054bbb0735dad17813dee85b399e22b938f2a8bd139a30b92425168399fb13de69ecfae3f216741600e319cac8fca6e6f8f066bc64240469f3322e489e7bd31204659e52eeda376effa4cc84c82f5a682310785bb4d9a48e695765bbcdc9c5633e44641d28df50bd11a51b367ba962b5b4bda7e17affd35c2ef038ccbcb2847c80e84e41e4d9690d1b09f90f1453e4cb4bf0a23324f1b339898308a03575292b7ab7a93b7d2cf41cac71c546042888727c6a66ceee98a3354790709858603f995baed89c9a3cfa010d0d4a5834f84c92ffb303384a8c1accb3a26073b21ae07fb712c5bcc1e49f659f070aff1b8a841900a95fa37d673748d1562b3ad5b8efa89d1c5df985a5129da5d229fdc35d84027017bd689f5cc3eca08a6915c1ecdf948473e0de2a8056c6b30818ea37cc8d4528dad31f52f4dc480573000f63cdeacf28438c45ea218f0ac04fcf283b6877a2a21510ba9ff7347424ffe6286065c77811a63c71e480e6a5f21b2c3c94c7fbeac7c74701b8031209ee536f58eb1a2467aa9b787a7de725072287fc72816c90f9b682f174fb2c67d1744ffbbf2214f939282c11e5173316522121e1faf22efbc17f2c912549537a3fde8384c5ea3e2c12f6d96193e75c56ebaf7fc483f0d5863cf2358b87d732597b2df6ce185d5221a232fc07c5d63540fe483abba0fce5db5b7fdd3568956c75f135d0245d75e772bc71093226fdb024adc1bb35523779a8c4c30116d6fcd4620aa0425d61651a13653007f64d1325b8b78f11dbad7cdc86a280b4870cb9127877e253fd3b09784aadcd14a324455be9f53d076d2deff693ce30539b884d1ea3d8e22b9c8f9917217b77dfb5d79e646f78ffb5e7d47b1eba1c16bb569ceec68b5a80f1766c71699462a0a1d5919289bc1234da17d67808e74dbf1ab54fd4750633efcef79d44b9b8051b131c4c9848a0159163e5510c56b9f7288af7e1c9ae4679987366bd1a889aa95b60771e36178d66ddcca66b5f42ccadf660431ad9fd1dfa82955708361cab839ed01231746e8f8f6385242780cbc810f98be5f03c53a99bdfa36d869e98631e50319d77640aa12f8a024561653e1dc15c6ba6f4fbfa76d23f8911ec279a4c4674dda09300fed66e5f55a9fb2c02cefbeb5ecf0cdccb0c2ccc2c7ef1f761b58678fe7116ffab2221b62c1180ed75394b534b8fef1ecf983f9a875fce12fe3e942bbd0ebd37cc7bdc7536fb5b4016711ce74785c0ec77947c1ac01fa46243395f68e31c1a8c4aaa38db654bde9f3745224d025beb8ce8f747bd21ecc482ba73a0671edeb822a189fde23b7009f16cff943b2415bad4cadd046bbb7a469bdeba0f950028931163ef23b5b1d4488118925a598da5ef830eeecd83956311672cc45950d458e070cf7d29c4e6f1768d29e22b9cce1601f6eb44f60602e81cb565fc461842b292020e8e9b04f0237e7b68fdc02f817d0878e5dab52f1e45be400b4deab17b57bd8cdee8bbc73c556b5387d03a0d520aa53f9b27cb2b01fa87deee51fe091c315e744e70106592c13ae3f00876ba9a6c4b7684efad50c581689806f22ba47071d30198cee7ac52735100e995ee1f1d0a84ef496d0cb38bd623ee4fe06c5502717843a29467a7111055064f27708a785488d6939d396073dc2e4eb210e40588da9a6b7b45a04c1c503e530a0ea4e358cac4433980df42d1530ec9f571de652391295ded09b3263970fed53c93e151ff1268e992ea15b311d4e6bcb083c31535bf0199b5195584c1d7fdb25ff4e3ac0be99110b90e7bd74128d2c4afe4c3612bf765a91bcb6a652805579a18d9e6496742b33e40d96d97a8b285abcee4660cd91955c286a2d8d38dc2d38c738ead6a58bf666d7281396d34ef751365c501a1c65992aba8c1ccb5c7ff218d5aa15dce7616276aa36652636cdae9f6ae0df0f6b7af5e67ea1e2ea3d82e54c88bacf17f52be778b382bce300bfb1e341b83edfd1bdce04663e99c2752c3343cadc6a9679de874892968425c41d05874e1b1e0edc110d4df2d79abfdfd4bce40283fc237ae93a8337359d4e22a94e8dbf191fcac773b1f79a2f55afa6fdeb74ad4ab41e2095b648a7ca1a55e69a920695f88a02cec97f7377da7040b074fd203f674c1cadb3df85506c637a544f709a3de418699561843f9c6e1c6d4a15a3a648e06ab0f321eefedb082294cc5d85f87b98455f3064df728d91045b6cb3a8183c5fdb7d96c3c23b4fc1c3a4118d53f3a144cbb73d7d39e343b6c596de201c0397a7f82845c16922f2c9893ddc60003d241fc538470adb834d4d316b123549ca1020717316aeb91956a33b2fc15f0e16ac71a350ba1d425f96f91f024bd020b97517ac2ad0b03536b79602926350575fc1bcb04aaf506671835742d7c4c62cba313fc11ad7263369602d14fd3ac2b960e05df074c0de211aa36de8c5c388084698b1953e3289d5f55605c1d6697d80bd1a1ee97d2d8ebb9e3ab81a10b20b12d938486897d41cc8a156fa16afbb727bdef69d09d974c04fd45c4c1d7848f5225ba4c0568831f598914187becf4a2ce2da2d38bb57ce479e0c4efd6b429cf4865af21266f02a0c9e1f6a6afa39b1d6cd892e0dd9853575f8425642db81dec7a20410998678b871ac59e32fd7670a29b2ad4b18899d7f08b29da83d0cc92ad9971e95f97d4daefee1010905b4e43e6a51497ecd4a09ac82229163230c4b83f879057972af9615d09baefd27ba0ec7ce3b7404354d03c32a9c75a0f608899da679f39f402fea9da18ae7b06c7317ee5a4fd289e43f4224c05d713d52822d75643121aefbaf8cd57cc055d05139081a0065df06e5c91172c27c8a5def5ba776230b952450644f8dff3373b5f4f33acbbc4339dc555e9625d8246646e8ef59af121607843b16577fe42e1a5274efac515df34722a3e552b3b1c396511ed6490f18183076d4dd85734ea29dd323f4f2b5230336ef25b09023518173157195422ab8ea8cfb721da2a98a0e3c954d9a9e34eebc849c8cd6757c1cbcc850b45cf67abd55b952b05196484c7e5552a234e99ba6f68ba0a7393aa7aa12c6c05cc4829ea534aa836f7aab9bad471ec3fe7400a7cc455923e1a014b77981e25e9db29da64169b31157c3dcacc8f32ad0c5103fdd13feabeb740cbf41188e7344cec31fe7af86de486524c543228a078f6eb4e98619c428bd88a0ce158f40e2c86fd0ecfbf2495ef3cf820f6301aa8949230b28687685c62926b92e508d83a4de55922f6c4537bdcdfffbb350f277bb7a873abb684225d5f253214a2ab8843a7e266cff93e05c0ea19bdc508d95597380549da997b82a26f39a16f3a13d711353c3bb6fd18c4dd50ae7f36aba4d155eb9b387292cff6737d992db0701829063611ef0549ed4259c31635068f4c0c947eab096d9962f38d1cbdcca441f069a3c68589b114e9eb09b71657b500e239543d6b12e70672d9497a9471efe3aea9f5ff2bd65bfefcd426cb3aee61bc2534747529747d5e8f32200da77248508e1815c5de6f4550fc117f1fdef0d958f0aee34d9c9b200ed45a0c5a14ad8a608ad19240206ed926f1fa13db3ede4ce8cc9f4f493adbc47714c9b3879eea1ed5cedcfb342738fdbf8ca2534e31345df6ffdfb09f0f5db70aa1dd773062b332f1d00e4db6bf542b840955bd74f9281ebbcc284c9717720dede87208d1d028b8d648204255a51487a4395dce2c0836557df6247f7ec85aa9ad855ecea6b8209587edf02ac84849a13b44f201d0d8a7ca4375f38d567d784ed92146332315325146991e6eb63006c7e72eae0a88b0d0abbb95649ff2e96737b852747a4751ec5aad5cd83b3785b8d3995e9706f2beb7ed4692afeb26bdbf2cd0677d413bee3ca06b608b492611ea4aa460d8b646d771058a6c6dc6bfe7d0bb68bad62b77f47789114c7c29cbab6edd99f8fc9a2a20de4bc0e787c313a7e17d72c0f3852444c9a04bdabaa843fd07da5900564d287a3042a54ec02823b34ad3d60e10356eb1e652d62bb0cb0c7c8d0ea77d965c6c386f02b5b290c70727ac97dbeede2215d35d6d023156c92878f409af7823a1fcc63503796375a54b5822f14ccc916cd4bd914ec69c7bce42b04dc9fb65ce03acc31f8de273bd27d0ad61c4483514980bb89a797b625fe85cf3f90fdbbd8a7430b800720ad91a02205100c77c74526a46383ba524e346698e3e8ea3c4a3817f38fc112ff5a302a696a96ca4347c01060c1e88e626758736b0d879ae1f19fd3225727ad63f6e8285b21be131c09131dcaf04e2416af2fb77e1f9245260b2f99f46f647f3702c801086109e84356d21269afe2ebb6db8e821142356cdb3c70909d41e92e5d6ff957d96ed87a9601b82852b02f6ecc438633ec6d0547080ce1d27d3b7675496bc82f1520de28796428625ede324abc56e794ab2229fad20e6125ffb43661bcb460d480bfd23d61377c93a03940ec330fc46c156c30b2a6d051ca9d9b62f699dfb2f670374c0c020d65f2222a6f5cdd986a8b44a9e2e41fb9083b319afb5f6db67aa6afcbc221c67a1b763f83559d9bbbcb80f0e27b59dadee1fbd61f20570104cd288eb680e450fd15362088d7b50816ee9fee876d4be7674b589d2dd6dc8dc8a7ce738cf7b45ded814834ff666136fbd1cdc0f05b82005a939ef9171a868c9a7dce93388efe5a28c627351d1f9727a6d28547d09906f988173dfbb31cce308fba7621bd3d9884a99d369034d4207e8c4a25b14e8f2d6adfa4166f7bd2927b85fb68594212fae002d2c33e41eeaf15dae16e89c22a37ad2cb83842de45af8d677375039beb46e4368f9ca94e412b52a7629978674811c66f0c91f09bbacf31fca66fd34260a0ff5379b7bbfc53fbe0801381f3f0c1c6c9fc6635bd9978c5402d45dc5716065789e516b1953b21f5bbcfd8598445055e2f8d96b7b71793d29c2a1cfb2542bcd35c6ac354b3ff51415a62067d43e326a694059f0ce8496561f3961f3997577afbacc52243f1a1eb808d82e4b80ad346c9b994f1b44466be159a4066fed4dd023dcafc6a5da630fdae6df005b84a643a3f004cd3d3b14129d75680018a9cc401be6891747e198c706fe99e3220f3aee3a51fb785feea2c3aca174b5a34c9561b664f21281f11cfd3ff09b5b422288d67f60f20b983579cfa18e695bfed92e2dff166d3cbb7e9413e4f230847405a346d1a647b53cd12580619c33d0a68296302acbaae3233538c81cbf9f36e4adfb275a0f238e50ffe7130dbe44344a2efaa3a81f64efbfa1a6ebcf4cbca6fbdf309a119a574a9acf0795c44f7d83cef44187902f50f69859dbf64558dc331b29ecb97c148004edbe243695fe284f98bea745af0774c6ba1478730bd98792cc6e2e711a2c1c5b90df2f07150410f64e73fcf11a7a268cb5abab543636d337142fe66b2ab0e3ac64bbd5db77a5a260135d6c4384d5c0890e34a76f21d00fa95ca5411736388fcd1b29c8f7f480064b416b9080dcddec496fe1321760a213ec981dbd4097a3155fb673b25fa8388b20c1312c93bc7043123305191848c2678ff7d5f9ab3f0042623d08f08d016d198453121fe077e9139e42fcc02dadb65db1884ab49e9b7a994b2b4d741c6be8cfe1de0dc31e231e8e3e4e6c91e50e591a23675c0234fec6c490e2165e3830aa25fc4e47e55a687457db7b46d1a9f9fb6070ca1098168bec093d1d09aea4e6d624ce96609d193b5aeab6d14166dc147dd885612c3ec1fb576a9b9434b50b4b610e413c209a569c2ebe883301d05165adb7fa7a4067a182b402eeb83d7e27f42dca5aabda167960c0ceb953e2e7a2790e2310e0331a62c86b05ad5e41c4e4ce34a88f59103d0b510f08a4dd73f9f6cd92f6241da05038750b25e0e6fe4a21a320c1a77154dc967f0b2159e4d63b60ddbd8fac267effef3e0fe44e986d886fbf4437f9e4e82349c916ef1aad80ca12841fe7cc822111de2afb3b324a1eeaa82afd7c463741badfb230affc50d87b3c00c8995ae4dc505bd918e36abdea3d5ca4dafb7571410d593d0454aa5bc75799f560a338e5240283d181d9d6b0d3bfec4a4632d1c4cf1a1e1a58016cfe43783d5a54fdfa6142d32d43e7488949695a0bf34e8ecd2260ebc1c2e3c2b030cfd4cc26fd61f96fcbfcee9e22641f49c1f1935945e9c19203c4bf4a47b3b68aee82b5d90517e94d608d39395ef782ffd1358e6530904c07b8d4b8acea5f9e88e84257ce4efa80fba9e9e8cc2d3d70457ca9aa246057b5003e8b836ceab45bcec59444a6b136fd8145e54f45115a03acd9cd999cdbb3b25dee6b66b7e62fa0cd265aa7b8dcea771261dfb22d2b640c17c032d8a9e839457a2297878d9ebafdfed990d80186262dcaf1726c465dde2d53dc2dcefbc511537e6f98b379205a48104647db3cbcb75fa12a7f1c55816d5b7ca1409014d8e44fe2986c1633845c078e063da285d14a4a03fc7231b6caf07540095459fe99865b98044758644a590ebe840011a62fbbe4cdb525e0a998ef86a797ba70b69216a08f3b6ae3434456e7a4458800461ca9fd8b8ca045c5d5a0883955e82690f25959922b50c26dfdc73b72bcf9feb87c402857e47db9afec75dd1b560f8941d06e50ce426ce6af5a2a8caba818d63060778f4a761c62443d65052ea315c1887c84716662d0c9286f90d0e4c5ffcb26c3f27af889c80e31f7a0371907ed74049eb6514814442bb263c3a684d9c4509a727de191509b15e7f4a3bc5835de0722458e6e05bd149aa9cb52cc05138e2f7c1dfd8fe8d627898cc040b000ac53de7fc8e65275c140370a7af97ec8d548882a92f06a6cb3fd595a8e048f3a7aa9db3b8dcd818978824791654d54c20ae2f9d98723a1b8cb65217215a0ef295e67165a210c92ad94cc133ea7c6e8f4752cee271673fa0c49e76fe176e5c723ff5b0661a2b0c7c893091dfad970f79d2afab8420d74eafdc3ecedd731815e50b791624feeade5c83bbdb9fea06b4db519849f831aa5829e8889083dd1e6e3db7a32a33fec748d4a32f1aab24dcc9b08d9814902d1a00bf28788ed044b01b580d7e11dbc66f842b91e8c5f40085068c795db47ad4a1ddad8fceb91e2d4330ec30db0b4c90a568a102f84c4db015b0adc90d8f2e1de7d0da01091c86",
        Qr = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
    ! function(t) {
        function i(t, i) {
            for (var n = "", e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
            var s = Math.floor(n.length / 5),
                r = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
                h = Math.round(i.length / 2),
                a = Math.pow(2, 31) - 1,
                o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), n += o; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
            n = (r * n + h) % a;
            for (var f = "", u = "", e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)), u += String.fromCharCode(f), n = (r * n + h) % a;
            return u
        }
        t = i(t, "QUNEE"), Qr = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
    }(Zr);
    var th = Qr[0] + Qr[1] + Qr[2],
        ih = Qr[3],
        nh = Qr[4],
        eh = Qr[5],
        sh = Qr[6],
        rh = Qr[7],
        hh = Qr[8],
        ah = Qr[9],
        oh = Qr[10],
        fh = Qr[11],
        uh = Qr[12] + Qr[13] + Qr[14],
        ch = Qr[15],
        dh = Qr[16],
        _h = Qr[17],
        lh = Qr[18],
        vh = Qr[19] + Qr[20],
        bh = Qr[21],
        yh = Qr[19],
        gh = Qr[22] + Qr[23] + Qr[24],
        mh = Qr[25],
        xh = Qr[26] + Qr[27] + Qr[28],
        ph = Qr[29],
        Eh = Qr[30] + Qr[31] + Qr[32],
        wh = Qr[33] + Qr[34] + Qr[35],
        Th = Qr[36],
        kh = Qr[37] + Qr[38] + Qr[39] + Qr[40] + Qr[41],
        Oh = Qr[42] + Qr[43] + Qr[44],
        Sh = Qr[42] + Qr[45] + Qr[46],
        Mh = Qr[47] + Qr[38] + Qr[48],
        Ih = Qr[42],
        Ph = Qr[49],
        Ch = Qr[50],
        Ah = Qr[51],
        Lh = Qr[52],
        Rh = Qr[53],
        jh = Qr[54],
        Dh = Qr[55] + Qr[56] + Qr[57],
        Nh = Qr[58] + Qr[31] + Qr[32],
        Bh = Qr[59] + Qr[23] + Qr[60],
        $h = Qr[61] + Qr[62] + Qr[63],
        Fh = Qr[64],
        zh = Qr[65] + Qr[66],
        Gh = Qr[67],
        qh = Qr[68] + Qr[40] + Qr[69],
        Yh = Qr[70],
        Hh = Qr[71],
        Uh = Qr[72],
        Wh = Qr[73],
        Vh = Qr[74],
        Xh = Qr[75],
        Kh = Qr[20],
        Jh = Qr[22] + Qr[23] + Qr[76],
        Zh = Qr[77],
        Qh = Qr[78],
        ta = Qr[79],
        ia = Qr[80],
        na = Qr[81],
        ea = Qr[82] + Qr[83],
        sa = Qr[20] + Qr[84],
        ra = Qr[85],
        ha = Qr[86],
        aa = Qr[87],
        oa = Qr[88],
        fa = Qr[89] + Qr[34] + Qr[90],
        ua = Qr[91] + Qr[23] + Qr[92],
        ca = Qr[33] + Qr[1] + Qr[93] + Qr[38] + Qr[94],
        da = Qr[95],
        _a = Qr[96] + Qr[97],
        la = Qr[97],
        va = Qr[68] + Qr[45] + Qr[98] + Qr[1] + Qr[99],
        ba = Qr[97] + Qr[96] + Qr[97],
        ya = Qr[100],
        ga = Qr[101],
        ma = Qr[102],
        xa = Qr[103],
        pa = Qr[104] + Qr[105] + Qr[106],
        Ea = Qr[107],
        wa = Qr[108],
        Ta = Qr[109] + Qr[105] + Qr[106],
        ka = Qr[110] + Qr[111] + Qr[112],
        Oa = Qr[113],
        Sa = Qr[114] + Qr[115] + Qr[116],
        Ma = Qr[110] + Qr[117],
        Ia = Qr[110] + Qr[118],
        Pa = Qr[119] + Qr[117],
        Ca = Qr[119] + Qr[120] + Qr[121],
        Aa = Qr[119] + Qr[122] + Qr[121],
        La = Qr[123],
        Ra = Qr[124] + Qr[34] + Qr[125],
        ja = Qr[20] + Qr[126],
        Da = Qr[127] + Qr[128] + Qr[129],
        Na = Qr[130] + Qr[128] + Qr[129],
        Ba = Qr[131] + Qr[132],
        $a = Qr[133],
        Fa = Qr[134] + Qr[132] + Qr[49] + Qr[135] + Qr[49] + Qr[81] + Qr[77],
        za = Qr[134] + Qr[136] + Qr[49] + Qr[135] + Qr[49] + Qr[81] + Qr[77],
        Ga = Qr[137],
        qa = Qr[138],
        Ya = Qr[139] + Qr[124] + Qr[140],
        Ha = Qr[141],
        Ua = Qr[142],
        Wa = Qr[143] + Qr[34] + Qr[144],
        Va = Qr[145],
        Xa = Qr[134] + Qr[146] + Qr[49] + Qr[81],
        Ka = Qr[147],
        Ja = Qr[148],
        Za = Qr[109] + Qr[23] + Qr[149],
        Qa = Qr[150],
        to = Qr[151],
        io = Qr[152] + Qr[62] + Qr[153] + Qr[34] + Qr[154] + Qr[23] + Qr[155] + Qr[105] + Qr[156],
        no = Qr[96] + Qr[62] + Qr[153] + Qr[34] + Qr[154] + Qr[23] + Qr[155] + Qr[105] + Qr[156],
        eo = Qr[157] + Qr[62] + Qr[153] + Qr[34] + Qr[154] + Qr[23] + Qr[155] + Qr[105] + Qr[156],
        so = Qr[158] + Qr[34] + Qr[154] + Qr[23] + Qr[155] + Qr[105] + Qr[156],
        ro = Qr[21] + Qr[27] + Qr[159],
        ho = Qr[160],
        ao = Qr[47] + Qr[1] + Qr[161],
        oo = Qr[83] + Qr[162],
        fo = Qr[163] + Qr[34] + Qr[164],
        uo = Qr[165] + Qr[20] + Qr[166],
        co = Qr[151] + Qr[49],
        _o = Qr[165] + Qr[20] + Qr[167],
        lo = Qr[168],
        vo = Qr[169],
        bo = Qr[170],
        yo = Qr[165] + Qr[20] + Qr[171],
        go = Qr[172],
        mo = Qr[173] + Qr[38] + Qr[174],
        xo = Qr[173] + Qr[62] + Qr[175],
        po = Qr[176],
        Eo = Qr[177],
        wo = Qr[178],
        To = Qr[179] + Qr[20] + Qr[180],
        ko = Qr[47] + Qr[181] + Qr[182] + Qr[56] + Qr[183],
        Oo = Qr[184],
        So = Qr[20] + Qr[185] + Qr[105],
        Mo = Qr[20] + Qr[186] + Qr[1] + Qr[187],
        Io = Qr[188],
        Po = Qr[47] + Qr[62] + Qr[189],
        Co = Qr[190],
        Ao = Qr[191],
        Lo = Qr[192] + Qr[23] + Qr[149],
        Ro = Qr[193],
        jo = Qr[163] + Qr[115] + Qr[194],
        Do = Qr[195] + Qr[23] + Qr[149] + Qr[181] + Qr[196] + Qr[34] + Qr[197],
        No = Qr[198],
        Bo = Qr[199],
        $o = Qr[200],
        Fo = Qr[201] + Qr[111] + Qr[112],
        zo = Qr[195] + Qr[23] + Qr[149] + Qr[181] + Qr[196] + Qr[23] + Qr[202],
        Go = Qr[203] + Qr[23] + Qr[149],
        qo = Qr[204],
        Yo = Qr[205],
        Ho = Qr[20] + Qr[206] + Qr[83] + Qr[87],
        Uo = Qr[20] + Qr[206] + Qr[83] + Qr[88],
        Wo = Qr[20] + Qr[206] + Qr[207] + Qr[87],
        Vo = Qr[20] + Qr[206] + Qr[207] + Qr[88],
        Xo = Qr[20] + Qr[208] + Qr[207],
        Ko = Qr[25] + Qr[209] + Qr[23] + Qr[149],
        Jo = Qr[210],
        Zo = Qr[73] + Qr[211],
        Qo = Qr[198] + Qr[105] + Qr[212],
        tf = Qr[213] + Qr[23] + Qr[202],
        nf = Qr[214],
        ef = Qr[215],
        sf = Qr[199] + Qr[34] + Qr[216],
        rf = Qr[73] + Qr[14] + Qr[217] + Qr[14] + Qr[207] + Qr[14] + Qr[83],
        hf = Qr[218] + Qr[38] + Qr[219],
        af = Qr[201] + Qr[115] + Qr[157],
        of = Qr[220] + Qr[115] + Qr[157],
        ff = Qr[198] + Qr[34] + Qr[216],
        uf = Qr[73] + Qr[221],
        cf = Qr[73] + Qr[222],
        df = Qr[223],
        _f = Qr[224],
        lf = Qr[20] + Qr[225],
        vf = Qr[226] + Qr[20] + Qr[180],
        bf = Qr[170] + Qr[227] + Qr[228],
        yf = Qr[229] + Qr[77] + Qr[230],
        gf = Qr[231],
        mf = Qr[224] + Qr[49] + Qr[232] + Qr[49] + Qr[81] + Qr[233],
        xf = Qr[234] + Qr[115] + Qr[235],
        pf = Qr[66],
        Ef = Qr[236],
        wf = Qr[237] + Qr[20] + Qr[238] + Qr[20] + Qr[239],
        Tf = Qr[237] + Qr[20] + Qr[238] + Qr[20] + Qr[240],
        kf = Qr[237] + Qr[20] + Qr[238] + Qr[20] + Qr[241] + Qr[20] + Qr[242],
        Of = Qr[237] + Qr[20] + Qr[238] + Qr[20] + Qr[243],
        Sf = Qr[237] + Qr[20] + Qr[238] + Qr[20] + Qr[244],
        Mf = Qr[237] + Qr[20] + Qr[238] + Qr[20] + Qr[245],
        If = Qr[246] + Qr[105] + Qr[212],
        Pf = Qr[20] + Qr[247] + Qr[248],
        Cf = Qr[249] + Qr[23] + Qr[202],
        Af = Qr[20] + Qr[250],
        Lf = Qr[25] + Qr[251] + Qr[62] + Qr[88] + Qr[38] + Qr[252] + Qr[23] + Qr[149],
        Rf = Qr[20] + Qr[208] + Qr[253],
        jf = Qr[25] + Qr[254] + Qr[117],
        Df = Qr[25] + Qr[255],
        Nf = Qr[256] + Qr[257] + Qr[105] + Qr[258],
        Bf = Qr[25] + Qr[205],
        $f = Qr[25] + Qr[259] + Qr[34] + Qr[164],
        Ff = Qr[25] + Qr[259] + Qr[38] + Qr[252] + Qr[23] + Qr[149],
        zf = Qr[163] + Qr[62] + Qr[88] + Qr[105] + Qr[212],
        Gf = Qr[25] + Qr[260],
        qf = Qr[25] + Qr[261],
        Yf = Qr[262],
        Hf = Qr[263] + Qr[23] + Qr[264],
        Uf = Qr[25] + Qr[265] + Qr[111] + Qr[112],
        Wf = Qr[25] + Qr[266] + Qr[23] + Qr[92],
        Vf = Qr[20] + Qr[267] + Qr[268] + Qr[269],
        Xf = Qr[270] + Qr[268] + Qr[269],
        Kf = Qr[20] + Qr[271] + Qr[272] + Qr[34] + Qr[273],
        Jf = Qr[274] + Qr[268] + Qr[269],
        Zf = Qr[139] + Qr[271] + Qr[275] + Qr[23] + Qr[264],
        Qf = Qr[25] + Qr[261] + Qr[105] + Qr[276],
        tu = Qr[25] + Qr[265] + Qr[117],
        iu = Qr[20] + Qr[265] + Qr[118],
        nu = Qr[25] + Qr[254] + Qr[118],
        eu = Qr[25] + Qr[265] + Qr[118],
        su = Qr[20] + Qr[265] + Qr[117],
        ru = Qr[246],
        hu = Qr[251] + Qr[62] + Qr[88] + Qr[23] + Qr[202],
        au = Qr[25] + Qr[200],
        ou = Qr[195] + Qr[27] + Qr[277],
        fu = Qr[20] + Qr[257] + Qr[105] + Qr[258],
        uu = Qr[25] + Qr[259] + Qr[105] + Qr[258],
        cu = Qr[201] + Qr[56] + Qr[278],
        du = Qr[163] + Qr[45] + Qr[279] + Qr[56] + Qr[278],
        _u = Qr[47] + Qr[45] + Qr[279] + Qr[56] + Qr[278],
        lu = Qr[152] + Qr[56] + Qr[278],
        vu = Qr[280] + Qr[45] + Qr[279] + Qr[56] + Qr[278],
        bu = Qr[201] + Qr[56] + Qr[278] + Qr[13] + Qr[121],
        yu = Qr[152] + Qr[56] + Qr[278] + Qr[13] + Qr[121],
        gu = Qr[280] + Qr[45] + Qr[279] + Qr[56] + Qr[278] + Qr[13] + Qr[121],
        mu = Qr[281] + Qr[181] + Qr[282],
        xu = Qr[283] + Qr[115] + Qr[284],
        pu = Qr[285] + Qr[227] + Qr[286],
        Eu = Qr[287] + Qr[40] + Qr[288],
        wu = Qr[123] + Qr[23] + Qr[289],
        Tu = Qr[290],
        ku = Qr[291] + Qr[27] + Qr[292],
        Ou = Qr[293] + Qr[181] + Qr[182] + Qr[56] + Qr[183],
        Su = Qr[294],
        Mu = Qr[131] + Qr[115] + Qr[295],
        Iu = Qr[296],
        Pu = Qr[297],
        Cu = Qr[298] + Qr[1] + Qr[228] + Qr[38] + Qr[299],
        Au = Qr[298] + Qr[38] + Qr[299],
        Lu = Qr[89] + Qr[1] + Qr[300] + Qr[1] + Qr[228],
        Ru = Qr[301] + Qr[302],
        ju = Qr[303],
        Du = Qr[304],
        Nu = Qr[305],
        Bu = Qr[306],
        $u = Qr[299],
        Fu = Qr[307],
        zu = Qr[217] + Qr[77] + Qr[217] + Qr[77] + Qr[207],
        Gu = Qr[83],
        qu = Qr[308],
        Yu = Qr[20] + Qr[309] + Qr[1] + Qr[310],
        Hu = Qr[311],
        Uu = Qr[312],
        Wu = Qr[313] + Qr[1] + Qr[93],
        Vu = Qr[314],
        Xu = Qr[68] + Qr[38] + Qr[315],
        Ku = Qr[20] + Qr[316] + Qr[43] + Qr[317],
        Ju = Qr[47] + Qr[27] + Qr[318] + Qr[62] + Qr[319],
        Zu = Qr[89] + Qr[38] + Qr[315],
        Qu = Qr[20] + Qr[320],
        tc = Qr[89],
        ic = Qr[195] + Qr[45] + Qr[321],
        nc = Qr[195] + Qr[56] + Qr[322] + Qr[13] + Qr[14],
        ec = Qr[0] + Qr[40] + Qr[323],
        sc = Qr[163] + Qr[1] + Qr[93] + Qr[181] + Qr[282],
        rc = Qr[5] + Qr[1] + Qr[324],
        hc = Qr[325],
        ac = Qr[163] + Qr[181] + Qr[282],
        oc = Qr[195] + Qr[181] + Qr[326],
        fc = Qr[291] + Qr[27] + Qr[292] + Qr[27] + Qr[318],
        uc = Qr[291] + Qr[27] + Qr[292] + Qr[1] + Qr[93],
        cc = Qr[327] + Qr[115] + Qr[157],
        dc = Qr[328] + Qr[115] + Qr[157],
        _c = Qr[329],
        lc = Qr[330] + Qr[20] + Qr[331],
        vc = Qr[330] + Qr[20] + Qr[332],
        bc = Qr[330] + Qr[20] + Qr[333],
        yc = Qr[330] + Qr[20] + Qr[334],
        gc = Qr[330] + Qr[20] + Qr[335],
        mc = Qr[330] + Qr[20] + Qr[336],
        xc = Qr[330] + Qr[20] + Qr[337],
        pc = Qr[330] + Qr[20] + Qr[338],
        Ec = Qr[330] + Qr[20] + Qr[339],
        wc = Qr[330] + Qr[20] + Qr[340] + Qr[20] + Qr[341],
        Tc = Qr[330] + Qr[20] + Qr[340] + Qr[20] + Qr[207],
        kc = Qr[330] + Qr[20] + Qr[340] + Qr[20] + Qr[83],
        Oc = Qr[330] + Qr[20] + Qr[340] + Qr[20] + Qr[272],
        Sc = Qr[330] + Qr[20] + Qr[340] + Qr[20] + Qr[275],
        Mc = Qr[330] + Qr[20] + Qr[340] + Qr[20] + Qr[342],
        Ic = Qr[330] + Qr[20] + Qr[340] + Qr[20] + Qr[343],
        Pc = Qr[344] + Qr[45] + Qr[345],
        Cc = Qr[346],
        Ac = Qr[25] + Qr[89],
        Lc = Qr[25] + Qr[232],
        Rc = Qr[188] + Qr[40] + Qr[347],
        jc = Qr[25] + Qr[259],
        Dc = Qr[348],
        Nc = Qr[195] + Qr[38] + Qr[349],
        Bc = Qr[47] + Qr[23] + Qr[24],
        $c = Qr[350],
        Fc = Qr[351] + Qr[20] + Qr[352] + Qr[20] + Qr[353],
        zc = Qr[351] + Qr[20] + Qr[352] + Qr[20] + Qr[354],
        Gc = Qr[47] + Qr[34] + Qr[216],
        qc = Qr[355] + Qr[20] + Qr[356],
        Yc = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[357] + Qr[20] + Qr[358],
        Hc = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[359] + Qr[20] + Qr[358],
        Uc = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[358] + Qr[20] + Qr[360],
        Wc = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[356] + Qr[20] + Qr[361],
        Vc = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[357] + Qr[20] + Qr[360],
        Xc = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[359] + Qr[20] + Qr[360],
        Kc = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[360] + Qr[20] + Qr[358],
        Jc = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[356] + Qr[20] + Qr[362],
        Zc = Qr[355] + Qr[20] + Qr[363] + Qr[20] + Qr[364] + Qr[20] + Qr[365],
        Qc = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[356] + Qr[20] + Qr[366],
        td = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[356] + Qr[20] + Qr[367],
        id = Qr[355] + Qr[20] + Qr[363] + Qr[20] + Qr[368],
        nd = Qr[369] + Qr[20] + Qr[370],
        ed = Qr[355] + Qr[20] + Qr[371],
        sd = Qr[355] + Qr[20] + Qr[371] + Qr[20] + Qr[372],
        rd = Qr[355] + Qr[20] + Qr[371] + Qr[20] + Qr[373],
        hd = Qr[355] + Qr[20] + Qr[374] + Qr[20] + Qr[375],
        ad = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[359],
        od = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[357],
        fd = Qr[340] + Qr[20] + Qr[171],
        ud = Qr[47] + Qr[34] + Qr[273],
        cd = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[352] + Qr[20] + Qr[377],
        dd = Qr[47] + Qr[23] + Qr[378] + Qr[23] + Qr[149],
        _d = Qr[355] + Qr[20] + Qr[379] + Qr[20] + Qr[380],
        ld = Qr[355] + Qr[20] + Qr[379] + Qr[20] + Qr[381],
        vd = Qr[355] + Qr[20] + Qr[382] + Qr[20] + Qr[380],
        bd = Qr[355] + Qr[20] + Qr[382] + Qr[20] + Qr[381],
        yd = Qr[383],
        gd = Qr[47] + Qr[384],
        md = Qr[47] + Qr[27] + Qr[385] + Qr[23] + Qr[149] + Qr[62] + Qr[189],
        xd = Qr[0] + Qr[23] + Qr[202] + Qr[34] + Qr[386],
        pd = Qr[224] + Qr[45] + Qr[321] + Qr[27] + Qr[318],
        Ed = Qr[387],
        wd = Qr[388],
        Td = Qr[89] + Qr[38] + Qr[299] + Qr[27] + Qr[318],
        kd = Qr[68] + Qr[38] + Qr[299] + Qr[27] + Qr[318],
        Od = Qr[389] + Qr[23] + Qr[149],
        Sd = Qr[390],
        Md = Qr[391] + Qr[115] + Qr[392],
        Id = Qr[346] + Qr[115] + Qr[393],
        Pd = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[352],
        Cd = Qr[355] + Qr[20] + Qr[394] + Qr[20] + Qr[395],
        Ad = Qr[396] + Qr[117],
        Ld = Qr[396] + Qr[118],
        Rd = Qr[397],
        jd = Qr[398],
        Dd = Qr[399] + Qr[97] + Qr[268] + Qr[400] + Qr[97] + Qr[43] + Qr[401] + Qr[97] + Qr[62] + Qr[402],
        Nd = Qr[403],
        Bd = Qr[404],
        $d = Qr[205] + Qr[66] + Qr[405] + Qr[406] + Qr[70],
        Fd = Qr[20] + Qr[407] + Qr[23] + Qr[408],
        zd = Qr[399] + Qr[97] + Qr[268] + Qr[400] + Qr[97] + Qr[43] + Qr[401],
        Gd = Qr[65] + Qr[66] + Qr[217] + Qr[409] + Qr[217] + Qr[409] + Qr[217] + Qr[409] + Qr[217] + Qr[70],
        qd = Qr[410],
        Yd = Qr[411],
        Hd = Qr[412],
        Ud = Qr[20] + Qr[413],
        Wd = Qr[414] + Qr[415],
        Vd = Qr[413],
        Xd = Qr[20] + Qr[123],
        Kd = Qr[20] + Qr[86],
        Jd = Qr[217] + Qr[151],
        Zd = Qr[416] + Qr[20] + Qr[226] + Qr[20] + Qr[367],
        Qd = Qr[20] + Qr[417],
        t_ = Qr[201] + Qr[418] + Qr[419],
        i_ = Qr[420] + Qr[1] + Qr[421],
        n_ = Qr[73] + Qr[422],
        e_ = Qr[420] + Qr[62] + Qr[423],
        s_ = Qr[68] + Qr[56] + Qr[183] + Qr[424],
        r_ = Qr[224] + Qr[181] + Qr[182],
        h_ = Qr[416] + Qr[20] + Qr[226] + Qr[20] + Qr[366],
        a_ = Qr[425],
        o_ = Qr[426],
        f_ = Qr[20] + Qr[208] + Qr[83],
        u_ = Qr[110] + Qr[427] + Qr[428],
        c_ = Qr[429],
        d_ = Qr[430] + Qr[227] + Qr[431],
        __ = Qr[383] + Qr[227] + Qr[431],
        l_ = Qr[195] + Qr[31] + Qr[432],
        v_ = Qr[195] + Qr[34] + Qr[433],
        b_ = Qr[232] + Qr[434] + Qr[435],
        y_ = Qr[413] + Qr[1] + Qr[310],
        g_ = Qr[30],
        m_ = Qr[436] + Qr[62] + Qr[189],
        x_ = Qr[437] + Qr[20] + Qr[438],
        p_ = Qr[47] + Qr[23] + Qr[378] + Qr[23] + Qr[439],
        E_ = Qr[30] + Qr[23] + Qr[149],
        w_ = Qr[47] + Qr[56] + Qr[57] + Qr[23] + Qr[378] + Qr[23] + Qr[149],
        T_ = Qr[254] + Qr[111] + Qr[112],
        k_ = Qr[254] + Qr[427] + Qr[428],
        O_ = Qr[172] + Qr[34] + Qr[216],
        S_ = Qr[172] + Qr[34] + Qr[164],
        M_ = Qr[172] + Qr[40] + Qr[440],
        I_ = Qr[441] + Qr[115] + Qr[295],
        P_ = Qr[430] + Qr[27] + Qr[385],
        C_ = Qr[430] + Qr[34] + Qr[442],
        A_ = Qr[443],
        L_ = Qr[430],
        R_ = Qr[21] + Qr[105] + Qr[444],
        j_ = Qr[173],
        D_ = Qr[445],
        N_ = Qr[446] + Qr[117],
        B_ = Qr[446] + Qr[118],
        $_ = Qr[446] + Qr[115] + Qr[157],
        F_ = Qr[447] + Qr[34] + Qr[164],
        z_ = Qr[20] + Qr[205] + Qr[427] + Qr[448] + Qr[45] + Qr[449],
        G_ = Qr[450] + Qr[97] + Qr[451],
        q_ = Qr[452] + Qr[27] + Qr[159],
        Y_ = Qr[20] + Qr[453],
        H_ = Qr[454],
        U_ = Qr[20] + Qr[195] + Qr[40] + Qr[41] + Qr[115] + Qr[455],
        W_ = Qr[456],
        V_ = Qr[457],
        X_ = Qr[109] + Qr[45] + Qr[458],
        K_ = Qr[459] + Qr[20] + Qr[238] + Qr[20] + Qr[460],
        J_ = Qr[313] + Qr[43] + Qr[228] + Qr[181] + Qr[461],
        Z_ = Qr[313] + Qr[27] + Qr[318] + Qr[181] + Qr[461],
        Q_ = Qr[462] + Qr[227] + Qr[463] + Qr[43] + Qr[317],
        tl = Qr[291] + Qr[27] + Qr[292] + Qr[13] + Qr[464] + Qr[27] + Qr[318],
        il = Qr[20] + Qr[465],
        nl = Qr[466],
        el = Qr[467] + Qr[38] + Qr[315],
        sl = Qr[468],
        rl = Qr[280] + Qr[105] + Qr[469] + Qr[38] + Qr[39] + Qr[40] + Qr[41],
        hl = Qr[152] + Qr[105] + Qr[469] + Qr[38] + Qr[39] + Qr[40] + Qr[41],
        al = Qr[163] + Qr[115] + Qr[470],
        ol = Qr[61] + Qr[38] + Qr[39] + Qr[40] + Qr[41],
        fl = Qr[96] + Qr[1] + Qr[471] + Qr[38] + Qr[39] + Qr[40] + Qr[41],
        ul = Qr[73] + Qr[472],
        cl = Qr[20] + Qr[172] + Qr[34] + Qr[216],
        dl = Qr[473],
        _l = Qr[20] + Qr[172] + Qr[34] + Qr[164],
        ll = Qr[20] + Qr[172] + Qr[1] + Qr[474],
        vl = Qr[20] + Qr[172] + Qr[40] + Qr[440],
        bl = Qr[20] + Qr[172],
        yl = Qr[390] + Qr[62] + Qr[88] + Qr[181] + Qr[162],
        gl = Qr[134] + Qr[475] + Qr[49] + Qr[476],
        ml = Qr[20] + Qr[477] + Qr[308],
        xl = Qr[9] + Qr[62] + Qr[88] + Qr[181] + Qr[162],
        pl = Qr[47] + Qr[62] + Qr[88] + Qr[181] + Qr[162],
        El = Qr[68] + Qr[56] + Qr[478],
        wl = Qr[68] + Qr[302] + Qr[479] + Qr[1] + Qr[99],
        Tl = Qr[389] + Qr[27] + Qr[159] + Qr[1] + Qr[93],
        kl = Qr[480] + Qr[115] + Qr[393],
        Ol = Qr[481] + Qr[43] + Qr[44],
        Sl = Qr[23] + Qr[149] + Qr[66],
        Ml = Qr[409],
        Il = Qr[482],
        Pl = Qr[20] + Qr[483],
        Cl = Qr[34] + Qr[164] + Qr[66],
        Al = Qr[484] + Qr[49] + Qr[81],
        Ll = Qr[192] + Qr[105] + Qr[212],
        Rl = Qr[109] + Qr[105] + Qr[212],
        jl = Qr[485] + Qr[20] + Qr[368],
        Dl = Qr[486],
        Nl = Qr[192],
        Bl = Qr[487],
        $l = Qr[488] + Qr[23] + Qr[92],
        Fl = Qr[489] + Qr[43] + Qr[44],
        zl = Qr[490],
        Gl = Qr[491],
        ql = Qr[492],
        Yl = Qr[271],
        Hl = Qr[493],
        Ul = Qr[367] + Qr[20] + Qr[366],
        Wl = Qr[367] + Qr[20] + Qr[494],
        Vl = Qr[495] + Qr[20] + Qr[366],
        Xl = Qr[361] + Qr[20] + Qr[494],
        Kl = Qr[361] + Qr[20] + Qr[362],
        Jl = Qr[367] + Qr[20] + Qr[362],
        Zl = Qr[495] + Qr[20] + Qr[494],
        Ql = Qr[361] + Qr[20] + Qr[366],
        tv = Qr[496],
        iv = Qr[497],
        nv = Qr[498],
        ev = Qr[231] + Qr[499],
        sv = Qr[409] + Qr[204] + Qr[499],
        rv = Qr[409] + Qr[498] + Qr[499],
        hv = Qr[500] + Qr[31] + Qr[32],
        av = Qr[501] + Qr[115] + Qr[393],
        ov = Qr[501] + Qr[77] + Qr[502],
        fv = Qr[409] + Qr[501] + Qr[43] + Qr[44] + Qr[499],
        uv = Qr[409] + Qr[500] + Qr[31] + Qr[32] + Qr[499],
        cv = Qr[409] + Qr[348] + Qr[499],
        dv = Qr[501] + Qr[43] + Qr[44],
        _v = Qr[503] + Qr[181] + Qr[282],
        lv = Qr[504] + Qr[77] + Qr[109],
        vv = Qr[504] + Qr[77] + Qr[9],
        bv = Qr[504] + Qr[77] + Qr[12],
        yv = Qr[505],
        gv = Qr[33] + Qr[27] + Qr[28],
        mv = Qr[506],
        xv = Qr[507],
        pv = Qr[126],
        Ev = Qr[508],
        wv = Qr[12],
        Tv = Qr[500] + Qr[181] + Qr[282],
        kv = Qr[409] + Qr[200] + Qr[499],
        Ov = Qr[409] + Qr[12] + Qr[499],
        Sv = Qr[409] + Qr[500] + Qr[181] + Qr[282] + Qr[499],
        Mv = Qr[509] + Qr[20] + Qr[510],
        Iv = Qr[109],
        Pv = Qr[509] + Qr[20] + Qr[511],
        Cv = Qr[509] + Qr[20] + Qr[512],
        Av = Qr[509] + Qr[20] + Qr[513] + Qr[20] + Qr[514],
        Lv = Qr[12] + Qr[77] + Qr[502],
        Rv = Qr[20] + Qr[515] + Qr[253],
        jv = Qr[20] + Qr[477] + Qr[217],
        Dv = Qr[33] + Qr[23] + Qr[516] + Qr[1] + Qr[474],
        Nv = Qr[33] + Qr[1] + Qr[93] + Qr[105] + Qr[517],
        Bv = Qr[68] + Qr[1] + Qr[2],
        $v = Qr[33] + Qr[1] + Qr[2] + Qr[1] + Qr[518],
        Fv = Qr[47] + Qr[181] + Qr[162],
        zv = Qr[519],
        Gv = Qr[20] + Qr[520],
        qv = Qr[20] + Qr[521],
        Yv = Qr[508] + Qr[1] + Qr[522] + Qr[56] + Qr[523],
        Hv = Qr[26] + Qr[56] + Qr[183] + Qr[23] + Qr[24] + Qr[1] + Qr[522],
        Uv = Qr[314] + Qr[1] + Qr[522] + Qr[56] + Qr[523],
        Wv = Qr[504] + Qr[181] + Qr[282] + Qr[1] + Qr[522] + Qr[56] + Qr[523],
        Vv = Qr[25] + Qr[325],
        Xv = Qr[524],
        Kv = Qr[47] + Qr[27] + Qr[525],
        Jv = Qr[139] + Qr[272] + Qr[526],
        Zv = Qr[20] + Qr[527] + Qr[181] + Qr[282] + Qr[40] + Qr[288],
        Qv = Qr[200] + Qr[528],
        tb = Qr[47] + Qr[62] + Qr[88] + Qr[181] + Qr[282],
        ib = Qr[20] + Qr[430] + Qr[227] + Qr[431],
        nb = Qr[20] + Qr[529] + Qr[1] + Qr[522] + Qr[45] + Qr[458],
        eb = Qr[115] + Qr[194],
        sb = Qr[21] + Qr[115] + Qr[295] + Qr[43] + Qr[228],
        rb = Qr[173] + Qr[434] + Qr[530],
        hb = Qr[304] + Qr[97] + Qr[531],
        ab = Qr[532],
        ob = Qr[533],
        fb = Qr[534],
        ub = Qr[109] + Qr[27] + Qr[28] + Qr[45] + Qr[458],
        cb = Qr[9] + Qr[27] + Qr[28] + Qr[45] + Qr[458],
        db = Qr[535] + Qr[20] + Qr[536] + Qr[20] + Qr[537] + Qr[20] + Qr[538],
        _b = Qr[539] + Qr[67] + Qr[540] + Qr[67] + Qr[541] + Qr[67] + Qr[542],
        lb = Qr[543],
        vb = Qr[544] + Qr[545] + Qr[34] + Qr[546],
        bb = Qr[547] + Qr[67] + Qr[548] + Qr[67] + Qr[549] + Qr[67] + Qr[550] + Qr[67] + Qr[551] + Qr[67] + Qr[552] + Qr[67] + Qr[553] + Qr[67] + Qr[554] + Qr[67],
        yb = Qr[67] + Qr[539] + Qr[67] + Qr[540] + Qr[67] + Qr[541] + Qr[67] + Qr[542],
        gb = Qr[115] + Qr[555] + Qr[27] + Qr[28],
        mb = Qr[30] + Qr[23] + Qr[556],
        xb = Qr[20] + Qr[557] + Qr[181] + Qr[558],
        pb = Qr[20] + Qr[33] + Qr[111] + Qr[559] + Qr[227] + Qr[545] + Qr[227] + Qr[560],
        Eb = Qr[20] + Qr[33] + Qr[111] + Qr[559] + Qr[227] + Qr[545] + Qr[302] + Qr[206],
        wb = Qr[139] + Qr[561],
        Tb = Qr[20] + Qr[208] + Qr[562],
        kb = Qr[552],
        Ob = Qr[549],
        Sb = Qr[139] + Qr[453],
        Mb = Qr[20] + Qr[68] + Qr[563] + Qr[28],
        Ib = Qr[20] + Qr[534] + Qr[27] + Qr[28],
        Pb = Qr[20] + Qr[33] + Qr[27] + Qr[28],
        Cb = Qr[33],
        Ab = Qr[139] + Qr[564] + Qr[23] + Qr[565] + Qr[115] + Qr[455],
        Lb = Qr[139] + Qr[33] + Qr[45] + Qr[566] + Qr[23] + Qr[565] + Qr[40] + Qr[567],
        Rb = Qr[20] + Qr[568] + Qr[27] + Qr[28],
        jb = Qr[139] + Qr[569] + Qr[1] + Qr[570],
        Db = Qr[571],
        Nb = Qr[572] + Qr[83],
        Bb = Qr[572],
        $b = Qr[573],
        Fb = Qr[139] + Qr[574] + Qr[115] + Qr[555] + Qr[27] + Qr[28],
        zb = Qr[139] + Qr[575] + Qr[1] + Qr[324] + Qr[1] + Qr[522],
        Gb = Qr[20] + Qr[576],
        qb = Qr[139] + Qr[568] + Qr[227] + Qr[577] + Qr[115] + Qr[555] + Qr[27] + Qr[28],
        Yb = Qr[20] + Qr[170],
        Hb = Qr[162] + Qr[34] + Qr[578],
        Ub = Qr[579] + Qr[34] + Qr[578],
        Wb = Qr[139] + Qr[580],
        Vb = Qr[581],
        Xb = Qr[20] + Qr[582],
        Kb = Qr[583],
        Jb = Qr[584],
        Zb = Qr[20] + Qr[585],
        Qb = Qr[139] + Qr[586],
        ty = Qr[20] + Qr[587],
        iy = Qr[20] + Qr[534] + Qr[115] + Qr[555] + Qr[27] + Qr[28],
        ny = Qr[548],
        ey = Qr[139] + Qr[568] + Qr[45] + Qr[566] + Qr[23] + Qr[565],
        sy = Qr[550],
        ry = Qr[551],
        hy = Qr[547],
        ay = Qr[588],
        oy = Qr[589] + Qr[56] + Qr[590],
        fy = Qr[20] + Qr[447],
        uy = Qr[591],
        cy = Qr[592],
        dy = Qr[593] + Qr[117],
        _y = Qr[593] + Qr[118],
        ly = Qr[20] + Qr[568] + Qr[56] + Qr[594] + Qr[56] + Qr[595],
        vy = Qr[20] + Qr[596],
        by = Qr[597] + Qr[20] + Qr[536],
        yy = Qr[139] + Qr[598] + Qr[115] + Qr[455],
        gy = Qr[139] + Qr[599],
        my = Qr[600],
        xy = Qr[586],
        py = Qr[576] + Qr[83],
        Ey = Qr[576],
        wy = Qr[20] + Qr[569] + Qr[45] + Qr[566] + Qr[23] + Qr[565] + Qr[115] + Qr[455],
        Ty = Qr[587] + Qr[83],
        ky = Qr[587],
        Oy = Qr[20] + Qr[601] + Qr[23] + Qr[439],
        Sy = Qr[602] + Qr[83],
        My = Qr[602],
        Iy = Qr[596] + Qr[83],
        Py = Qr[596],
        Cy = Qr[47] + Qr[1] + Qr[603] + Qr[34] + Qr[604],
        Ay = Qr[585] + Qr[83],
        Ly = Qr[585],
        Ry = Qr[20] + Qr[605] + Qr[562] + Qr[34] + Qr[606],
        jy = Qr[47] + Qr[56] + Qr[183],
        Dy = Qr[47] + Qr[27] + Qr[159] + Qr[62] + Qr[88] + Qr[227] + Qr[545] + Qr[27] + Qr[28],
        Ny = Qr[47] + Qr[607] + Qr[88] + Qr[227] + Qr[545] + Qr[27] + Qr[28],
        By = Qr[20] + Qr[608] + Qr[56] + Qr[183],
        $y = Qr[20] + Qr[609] + Qr[45] + Qr[610],
        Fy = Qr[33] + Qr[27] + Qr[159] + Qr[105] + Qr[611],
        zy = Qr[33] + Qr[1] + Qr[518],
        Gy = Qr[20] + Qr[612] + Qr[613],
        qy = Qr[20] + Qr[614] + Qr[181] + Qr[615] + Qr[45] + Qr[610],
        Yy = Qr[20] + Qr[616] + Qr[181] + Qr[617],
        Hy = Qr[139] + Qr[33] + Qr[27] + Qr[28],
        Uy = Qr[139] + Qr[534] + Qr[27] + Qr[28],
        Wy = Qr[618],
        Vy = Qr[20] + Qr[616] + Qr[181] + Qr[615],
        Xy = Qr[20] + Qr[568] + Qr[117],
        Ky = Qr[619],
        Jy = Qr[620] + Qr[118],
        Zy = Qr[20] + Qr[568] + Qr[118],
        Qy = Qr[621] + Qr[56] + Qr[590] + Qr[117],
        tg = Qr[621] + Qr[56] + Qr[590] + Qr[118],
        ig = Qr[97] + Qr[280] + Qr[97] + Qr[622] + Qr[97] + Qr[623],
        ng = Qr[97] + Qr[280] + Qr[97] + Qr[622] + Qr[97] + Qr[624],
        eg = Qr[97] + Qr[280] + Qr[97] + Qr[625],
        sg = Qr[97] + Qr[280] + Qr[97] + Qr[626],
        rg = Qr[97] + Qr[152] + Qr[97] + Qr[622] + Qr[97] + Qr[623],
        hg = Qr[97] + Qr[152] + Qr[97] + Qr[622] + Qr[97] + Qr[624],
        ag = Qr[97] + Qr[152] + Qr[97] + Qr[625],
        og = Qr[97] + Qr[152] + Qr[97] + Qr[626],
        fg = Qr[627],
        ug = Qr[220],
        cg = Qr[628] + Qr[66] + Qr[200] + Qr[101] + Qr[232] + Qr[434] + Qr[629] + Qr[102] + Qr[630] + Qr[631] + Qr[67] + Qr[632] + Qr[633] + Qr[634] + Qr[217] + Qr[635] + Qr[636] + Qr[637] + Qr[638] + Qr[639] + Qr[640] + Qr[641] + Qr[14] + Qr[342] + Qr[434] + Qr[562] + Qr[638] + Qr[642] + Qr[493] + Qr[83] + Qr[643] + Qr[217] + Qr[162] + Qr[83] + Qr[40] + Qr[88] + Qr[644] + Qr[562] + Qr[632] + Qr[645] + Qr[493] + Qr[646] + Qr[196] + Qr[647] + Qr[490] + Qr[648] + Qr[272] + Qr[649] + Qr[650] + Qr[651] + Qr[43] + Qr[652] + Qr[434] + Qr[23] + Qr[653] + Qr[23] + Qr[634] + Qr[227] + Qr[654] + Qr[655] + Qr[14] + Qr[656] + Qr[88] + Qr[657] + Qr[196] + Qr[434] + Qr[658] + Qr[659] + Qr[660] + Qr[661] + Qr[651] + Qr[38] + Qr[662] + Qr[268] + Qr[640] + Qr[117] + Qr[663] + Qr[664] + Qr[665] + Qr[666] + Qr[271] + Qr[667] + Qr[634] + Qr[207] + Qr[1] + Qr[668] + Qr[669] + Qr[490] + Qr[38] + Qr[207] + Qr[88] + Qr[38] + Qr[663] + Qr[670] + Qr[128] + Qr[638] + Qr[118] + Qr[634] + Qr[62] + Qr[671] + Qr[672] + Qr[673] + Qr[674] + Qr[675] + Qr[676] + Qr[640] + Qr[677] + Qr[640] + Qr[678] + Qr[342] + Qr[638] + Qr[434] + Qr[663] + Qr[679] + Qr[680] + Qr[681] + Qr[682] + Qr[272] + Qr[683] + Qr[684] + Qr[342] + Qr[49] + Qr[342] + Qr[67] + Qr[627],
        dg = Qr[685] + Qr[13] + Qr[464],
        _g = Qr[685] + Qr[181] + Qr[196],
        lg = Qr[20] + Qr[686],
        vg = Qr[20] + Qr[37] + Qr[687],
        bg = Qr[20] + Qr[33] + Qr[34] + Qr[688],
        yg = Qr[20] + Qr[689],
        gg = Qr[217] + Qr[77] + Qr[217],
        mg = Qr[195] + Qr[115] + Qr[555] + Qr[34] + Qr[690],
        xg = Qr[195] + Qr[691],
        pg = Qr[390] + Qr[105] + Qr[212],
        Eg = Qr[105] + Qr[212],
        wg = Qr[34] + Qr[164],
        Tg = Qr[181] + Qr[692],
        kg = Qr[27] + Qr[28],
        Og = Qr[23] + Qr[24] + Qr[1] + Qr[522] + Qr[27] + Qr[28],
        Sg = Qr[45] + Qr[46] + Qr[27] + Qr[28],
        Mg = Qr[427] + Qr[693],
        Ig = Qr[56] + Qr[523],
        Pg = Qr[23] + Qr[92],
        Cg = Qr[34] + Qr[694] + Qr[227] + Qr[431],
        Ag = Qr[56] + Qr[183] + Qr[227] + Qr[431],
        Lg = Qr[146] + Qr[424],
        Rg = Qr[195] + Qr[227] + Qr[695] + Qr[128] + Qr[129],
        jg = Qr[696] + Qr[56] + Qr[595],
        Dg = Qr[427] + Qr[278] + Qr[45] + Qr[46],
        Ng = Qr[697],
        Bg = Qr[698],
        $g = Qr[109] + Qr[699] + Qr[106],
        Fg = Qr[700],
        zg = Qr[701],
        Gg = Qr[261] + Qr[77] + Qr[214],
        qg = Qr[261],
        Yg = Qr[420],
        Hg = Qr[702],
        Ug = Qr[702] + Qr[77] + Qr[427],
        Wg = Qr[702] + Qr[77] + Qr[31],
        Vg = Qr[703],
        Xg = Qr[703] + Qr[77] + Qr[427],
        Kg = Qr[703] + Qr[77] + Qr[31],
        Jg = Qr[703] + Qr[77] + Qr[427] + Qr[77] + Qr[31],
        Zg = Qr[703] + Qr[77] + Qr[31] + Qr[77] + Qr[427],
        Qg = Qr[704] + Qr[77] + Qr[413],
        tm = Qr[704] + Qr[77] + Qr[123],
        im = Qr[704] + Qr[77] + Qr[85],
        nm = Qr[704] + Qr[77] + Qr[86],
        em = Qr[705],
        sm = Qr[706],
        rm = Qr[707],
        hm = Qr[708],
        am = Qr[709],
        om = Qr[710],
        fm = Qr[711],
        um = Qr[712],
        cm = Qr[713],
        dm = Qr[714],
        _m = Qr[715],
        lm = Qr[716],
        vm = Qr[717],
        bm = Qr[718],
        ym = Qr[719],
        gm = Qr[720],
        mm = Qr[721] + Qr[77] + Qr[722],
        xm = Qr[721] + Qr[77] + Qr[207],
        pm = Qr[721] + Qr[77] + Qr[83],
        Em = Qr[721] + Qr[77] + Qr[308],
        wm = Qr[721] + Qr[77] + Qr[663],
        Tm = Qr[721] + Qr[77] + Qr[272],
        km = Qr[721] + Qr[77] + Qr[253],
        Om = Qr[721] + Qr[77] + Qr[275],
        Sm = Qr[721] + Qr[77] + Qr[342],
        Mm = Qr[721] + Qr[77] + Qr[141],
        Im = Qr[723],
        Pm = Qr[179] + Qr[20] + Qr[724] + Qr[20] + Qr[352] + Qr[20] + Qr[725],
        Cm = Qr[185],
        Am = Qr[179] + Qr[20] + Qr[726] + Qr[20] + Qr[352] + Qr[20] + Qr[373],
        Lm = Qr[179] + Qr[20] + Qr[726] + Qr[20] + Qr[352] + Qr[20] + Qr[727],
        Rm = Qr[179] + Qr[20] + Qr[726] + Qr[20] + Qr[352] + Qr[20] + Qr[728],
        jm = Qr[729],
        Dm = Qr[328],
        Nm = Qr[730],
        Bm = Qr[437] + Qr[20] + Qr[731],
        $m = Qr[437] + Qr[20] + Qr[732] + Qr[20] + Qr[733],
        Fm = Qr[437] + Qr[20] + Qr[352],
        zm = Qr[731] + Qr[20] + Qr[734],
        Gm = Qr[735] + Qr[20] + Qr[736],
        qm = Qr[226] + Qr[20] + Qr[485] + Qr[20] + Qr[171],
        Ym = Qr[737] + Qr[23] + Qr[155] + Qr[105] + Qr[156],
        Hm = Qr[738] + Qr[115] + Qr[157],
        Um = Qr[739] + Qr[1] + Qr[740] + Qr[115] + Qr[157],
        Wm = Qr[741] + Qr[1] + Qr[740] + Qr[115] + Qr[157],
        Vm = Qr[25] + Qr[209] + Qr[23] + Qr[149] + Qr[207],
        Xm = Qr[25] + Qr[209] + Qr[23] + Qr[149] + Qr[83],
        Km = Qr[226] + Qr[20] + Qr[460],
        Jm = Qr[742] + Qr[1] + Qr[421],
        Zm = Qr[485] + Qr[20] + Qr[743] + Qr[20] + Qr[744],
        Qm = Qr[20] + Qr[745],
        tx = Qr[314] + Qr[43] + Qr[228],
        ix = Qr[9] + Qr[1] + Qr[93],
        nx = Qr[181] + Qr[182] + Qr[49] + Qr[146] + Qr[49] + Qr[81] + Qr[233],
        ex = Qr[20] + Qr[290],
        sx = Qr[20] + Qr[746],
        rx = Qr[720] + Qr[13] + Qr[747],
        hx = Qr[38] + Qr[748],
        ax = Qr[749],
        ox = Qr[750],
        fx = Qr[20] + Qr[113],
        ux = Qr[20] + Qr[148],
        cx = Qr[420] + Qr[13] + Qr[121] + Qr[117],
        dx = Qr[420] + Qr[13] + Qr[121] + Qr[118],
        _x = Qr[226] + Qr[20] + Qr[751],
        lx = Qr[742] + Qr[1] + Qr[421] + Qr[62] + Qr[752] + Qr[227] + Qr[228],
        vx = Qr[20] + Qr[30] + Qr[1] + Qr[753],
        bx = Qr[754] + Qr[34] + Qr[578],
        yx = Qr[232],
        gx = Qr[146],
        mx = Qr[9] + Qr[45] + Qr[458],
        xx = Qr[0] + Qr[181] + Qr[182],
        px = Qr[47] + Qr[38] + Qr[755] + Qr[181] + Qr[756],
        Ex = Qr[757],
        wx = Qr[758],
        Tx = Qr[759] + Qr[20] + Qr[352] + Qr[20] + Qr[760],
        kx = Qr[21] + Qr[45] + Qr[761] + Qr[268] + Qr[269],
        Ox = Qr[109] + Qr[1] + Qr[421] + Qr[34] + Qr[413],
        Sx = Qr[759] + Qr[20] + Qr[352] + Qr[20] + Qr[762],
        Mx = Qr[762] + Qr[20] + Qr[759] + Qr[20] + Qr[360],
        Ix = Qr[762] + Qr[20] + Qr[759] + Qr[20] + Qr[358],
        Px = Qr[760] + Qr[20] + Qr[759],
        Cx = Qr[763] + Qr[20] + Qr[762] + Qr[20] + Qr[759],
        Ax = Qr[763] + Qr[20] + Qr[762] + Qr[20] + Qr[759] + Qr[20] + Qr[360],
        Lx = Qr[668],
        Rx = Qr[764],
        jx = Qr[665],
        Dx = Qr[765] + Qr[20] + Qr[179] + Qr[20] + Qr[382],
        Nx = Qr[765] + Qr[20] + Qr[766] + Qr[20] + Qr[382],
        Bx = Qr[765] + Qr[20] + Qr[767] + Qr[20] + Qr[382],
        $x = Qr[765] + Qr[20] + Qr[768],
        Fx = Qr[23] + Qr[202] + Qr[34] + Qr[769],
        zx = Qr[68] + Qr[136],
        Gx = Qr[437] + Qr[20] + Qr[352] + Qr[20] + Qr[732],
        qx = Qr[430] + Qr[34] + Qr[770] + Qr[62] + Qr[423],
        Yx = Qr[430] + Qr[1] + Qr[421],
        Hx = Qr[430] + Qr[34] + Qr[770] + Qr[13] + Qr[121] + Qr[117],
        Ux = Qr[430] + Qr[34] + Qr[770] + Qr[13] + Qr[121] + Qr[118],
        Wx = Qr[771],
        Vx = Qr[430] + Qr[62] + Qr[772],
        Xx = Qr[201] + Qr[1] + Qr[773],
        Kx = Qr[430] + Qr[115] + Qr[393],
        Jx = Qr[771] + Qr[34] + Qr[216],
        Zx = Qr[65] + Qr[66] + Qr[217] + Qr[67] + Qr[217] + Qr[67] + Qr[217] + Qr[67] + Qr[217] + Qr[70],
        Qx = Qr[199] + Qr[1] + Qr[421],
        tp = Qr[20] + Qr[199] + Qr[268] + Qr[269],
        ip = Qr[201] + Qr[40] + Qr[774] + Qr[1] + Qr[421],
        np = Qr[201] + Qr[56] + Qr[278] + Qr[1] + Qr[773],
        ep = Qr[20] + Qr[775] + Qr[34] + Qr[164],
        sp = Qr[20] + Qr[776] + Qr[23] + Qr[777] + Qr[111] + Qr[112],
        rp = Qr[20] + Qr[776] + Qr[23] + Qr[777],
        hp = Qr[778],
        ap = Qr[779],
        op = Qr[780] + Qr[77] + Qr[781],
        fp = Qr[237] + Qr[20] + Qr[238] + Qr[20] + Qr[762] + Qr[20] + Qr[242],
        up = Qr[782] + Qr[77] + Qr[781],
        cp = Qr[783],
        dp = Qr[593],
        _p = Qr[784],
        lp = Qr[729] + Qr[45] + Qr[785],
        vp = Qr[73] + Qr[207] + Qr[1] + Qr[253] + Qr[62] + Qr[562] + Qr[56],
        bp = Qr[73] + Qr[786],
        yp = Qr[73] + Qr[787] + Qr[27] + Qr[342] + Qr[62],
        gp = Qr[73] + Qr[788] + Qr[62] + Qr[789],
        mp = Qr[73] + Qr[788] + Qr[38] + Qr[790],
        xp = Qr[73] + Qr[791] + Qr[1] + Qr[792],
        pp = Qr[73] + Qr[793],
        Ep = Qr[73] + Qr[207] + Qr[56] + Qr[253] + Qr[1] + Qr[562] + Qr[40],
        wp = Qr[73] + Qr[794] + Qr[62] + Qr[217],
        Tp = Qr[73] + Qr[795] + Qr[796],
        kp = Qr[73] + Qr[207] + Qr[40] + Qr[253] + Qr[797] + Qr[83],
        Op = Qr[73] + Qr[788] + Qr[38] + Qr[798],
        Sp = Qr[73] + Qr[799],
        Mp = Qr[73] + Qr[83] + Qr[651] + Qr[342] + Qr[800],
        Ip = Qr[73] + Qr[801],
        Pp = Qr[73] + Qr[802] + Qr[56] + Qr[792],
        Cp = Qr[73] + Qr[803],
        Ap = Qr[73] + Qr[207] + Qr[40] + Qr[804] + Qr[38] + Qr[663],
        Lp = Qr[73] + Qr[805] + Qr[806] + Qr[83],
        Rp = Qr[73] + Qr[807] + Qr[808],
        jp = Qr[73] + Qr[207] + Qr[27] + Qr[253] + Qr[809] + Qr[217],
        Dp = Qr[73] + Qr[810],
        Np = Qr[73] + Qr[14] + Qr[275] + Qr[14] + Qr[342] + Qr[14] + Qr[342],
        Bp = Qr[73] + Qr[253] + Qr[38] + Qr[811],
        $p = Qr[73] + Qr[663] + Qr[40] + Qr[663] + Qr[1] + Qr[663] + Qr[62],
        Fp = Qr[73] + Qr[812],
        zp = Qr[73] + Qr[813],
        Gp = Qr[73] + Qr[253] + Qr[40] + Qr[253] + Qr[27] + Qr[253] + Qr[40],
        qp = Qr[73] + Qr[663] + Qr[1] + Qr[814],
        Yp = Qr[73] + Qr[815],
        Hp = Qr[73] + Qr[275] + Qr[56] + Qr[275] + Qr[56] + Qr[275] + Qr[56],
        Up = Qr[73] + Qr[816],
        Wp = Qr[73] + Qr[817],
        Vp = Qr[73] + Qr[818],
        Xp = Qr[73] + Qr[562] + Qr[27] + Qr[562] + Qr[56] + Qr[562] + Qr[56],
        Kp = Qr[73] + Qr[38] + Qr[275] + Qr[38] + Qr[272] + Qr[38] + Qr[663],
        Jp = Qr[73] + Qr[38] + Qr[562] + Qr[38] + Qr[253] + Qr[38] + Qr[272],
        Zp = Qr[73] + Qr[38] + Qr[275] + Qr[38] + Qr[663] + Qr[38] + Qr[308],
        Qp = Qr[73] + Qr[819],
        tE = Qr[73] + Qr[27] + Qr[562] + Qr[820],
        iE = Qr[73] + Qr[562] + Qr[821] + Qr[217] + Qr[764] + Qr[217],
        nE = Qr[73] + Qr[491] + Qr[562] + Qr[822],
        eE = Qr[73] + Qr[308] + Qr[651] + Qr[308] + Qr[764] + Qr[823],
        sE = Qr[73] + Qr[62] + Qr[83] + Qr[824],
        rE = Qr[73] + Qr[83] + Qr[27] + Qr[342] + Qr[825],
        hE = Qr[73] + Qr[826],
        aE = Qr[73] + Qr[493] + Qr[272] + Qr[493] + Qr[272] + Qr[493] + Qr[253],
        oE = Qr[399] + Qr[97],
        fE = Qr[20] + Qr[827],
        uE = Qr[20] + Qr[828],
        cE = Qr[20] + Qr[829],
        dE = Qr[830] + Qr[62] + Qr[831],
        _E = Qr[830] + Qr[62] + Qr[832],
        lE = Qr[830] + Qr[302] + Qr[833],
        vE = Qr[181] + Qr[326] + Qr[49] + Qr[834] + Qr[49] + Qr[835] + Qr[77],
        bE = Qr[830],
        yE = Qr[836],
        gE = Qr[43] + Qr[837] + Qr[49] + Qr[764] + Qr[49] + Qr[836] + Qr[49] + Qr[838] + Qr[77],
        mE = Qr[839],
        xE = Qr[780] + Qr[105] + Qr[840],
        pE = Qr[841] + Qr[34] + Qr[164],
        EE = Qr[842] + Qr[1] + Qr[421],
        wE = Qr[775] + Qr[38] + Qr[843] + Qr[105] + Qr[156],
        TE = Qr[841] + Qr[40] + Qr[288],
        kE = Qr[844],
        OE = Qr[467] + Qr[181] + Qr[845],
        SE = Qr[281] + Qr[268] + Qr[846],
        ME = Qr[847],
        IE = Qr[848],
        PE = Qr[849] + Qr[427] + Qr[850],
        CE = Qr[849] + Qr[56] + Qr[183],
        AE = Qr[851],
        LE = Qr[852],
        RE = Qr[853] + Qr[56] + Qr[183],
        jE = Qr[854],
        DE = Qr[855] + Qr[1] + Qr[228],
        NE = Qr[856],
        BE = Qr[857],
        $E = Qr[858],
        FE = Qr[859],
        zE = Qr[295] + Qr[115] + Qr[393],
        GE = Qr[860],
        qE = Qr[853],
        YE = Qr[861],
        HE = Qr[862],
        UE = Qr[287] + Qr[34] + Qr[164],
        WE = Qr[863] + Qr[227] + Qr[623] + Qr[1] + Qr[228] + Qr[34] + Qr[164],
        VE = Qr[864],
        XE = Qr[295],
        KE = Qr[865],
        JE = Qr[302] + Qr[866] + Qr[49] + Qr[867] + Qr[499] + Qr[217] + Qr[87],
        ZE = Qr[553],
        QE = Qr[839] + Qr[128] + Qr[129],
        tw = Qr[868] + Qr[128] + Qr[129],
        iw = Qr[869] + Qr[1] + Qr[228],
        nw = Qr[177] + Qr[31] + Qr[870] + Qr[233],
        ew = Qr[177] + Qr[23] + Qr[871] + Qr[49] + Qr[56] + Qr[872] + Qr[233],
        sw = Qr[873],
        rw = Qr[874],
        hw = Qr[875],
        aw = Qr[14] + Qr[876] + Qr[493] + Qr[663] + Qr[651] + Qr[877] + Qr[878] + Qr[275] + Qr[764] + Qr[879] + Qr[651] + Qr[880] + Qr[491] + Qr[308] + Qr[881] + Qr[562] + Qr[882] + Qr[883] + Qr[884] + Qr[885] + Qr[886] + Qr[217] + Qr[493] + Qr[272] + Qr[14] + Qr[887] + Qr[764] + Qr[888] + Qr[889] + Qr[890] + Qr[491] + Qr[891] + Qr[521] + Qr[308] + Qr[892] + Qr[217] + Qr[893] + Qr[894] + Qr[493] + Qr[895] + Qr[896] + Qr[897] + Qr[898] + Qr[308] + Qr[651] + Qr[899] + Qr[14] + Qr[900] + Qr[901] + Qr[253] + Qr[493] + Qr[902] + Qr[14] + Qr[903] + Qr[904] + Qr[562] + Qr[905] + Qr[906] + Qr[14] + Qr[562] + Qr[491] + Qr[272] + Qr[162] + Qr[207] + Qr[651] + Qr[663] + Qr[651] + Qr[907] + Qr[493] + Qr[83] + Qr[162] + Qr[890] + Qr[908] + Qr[342] + Qr[162] + Qr[308] + Qr[651] + Qr[67] + Qr[909] + Qr[207] + Qr[764] + Qr[910] + Qr[162] + Qr[911] + Qr[764] + Qr[912] + Qr[14] + Qr[913] + Qr[889] + Qr[914] + Qr[915] + Qr[916] + Qr[917] + Qr[663] + Qr[918] + Qr[919] + Qr[920] + Qr[921] + Qr[764] + Qr[275] + Qr[922] + Qr[308] + Qr[491] + Qr[217] + Qr[923] + Qr[924] + Qr[925] + Qr[926] + Qr[651] + Qr[927] + Qr[928] + Qr[217] + Qr[491] + Qr[929] + Qr[930] + Qr[931] + Qr[909] + Qr[932] + Qr[933] + Qr[934] + Qr[491] + Qr[217] + Qr[935] + Qr[936] + Qr[937] + Qr[938] + Qr[491] + Qr[939] + Qr[940] + Qr[562] + Qr[493] + Qr[941] + Qr[491] + Qr[942] + Qr[943] + Qr[253] + Qr[944] + Qr[945] + Qr[764] + Qr[946] + Qr[651] + Qr[207] + Qr[947] + Qr[948] + Qr[949] + Qr[342] + Qr[491] + Qr[950] + Qr[651] + Qr[951] + Qr[943] + Qr[67] + Qr[342] + Qr[952] + Qr[562] + Qr[14] + Qr[83] + Qr[14] + Qr[953] + Qr[651] + Qr[954] + Qr[898] + Qr[955] + Qr[896] + Qr[207] + Qr[491] + Qr[956] + Qr[651] + Qr[663] + Qr[957] + Qr[958] + Qr[162] + Qr[959] + Qr[960] + Qr[961] + Qr[962] + Qr[963] + Qr[964] + Qr[965] + Qr[493] + Qr[562] + Qr[908] + Qr[823] + Qr[491] + Qr[966] + Qr[14] + Qr[967] + Qr[493] + Qr[272] + Qr[94] + Qr[968] + Qr[651] + Qr[969] + Qr[14] + Qr[970] + Qr[764] + Qr[308] + Qr[491] + Qr[562] + Qr[764] + Qr[971] + Qr[972] + Qr[973] + Qr[764] + Qr[974] + Qr[764] + Qr[975] + Qr[976] + Qr[977] + Qr[978] + Qr[979] + Qr[491] + Qr[980] + Qr[491] + Qr[981] + Qr[493] + Qr[342] + Qr[493] + Qr[982] + Qr[521] + Qr[983] + Qr[491] + Qr[308] + Qr[162] + Qr[984] + Qr[905] + Qr[948] + Qr[14],
        ow = Qr[177] + Qr[45] + Qr[985] + Qr[49] + Qr[68] + Qr[499],
        fw = Qr[415] + Qr[986] + Qr[987] + Qr[415] + Qr[308] + Qr[38] + Qr[415] + Qr[986] + Qr[988] + Qr[77] + Qr[304] + Qr[77] + Qr[859] + Qr[415] + Qr[83] + Qr[1] + Qr[989] + Qr[77] + Qr[304] + Qr[77] + Qr[859] + Qr[415] + Qr[83] + Qr[1] + Qr[990] + Qr[77] + Qr[304] + Qr[77] + Qr[859],
        uw = Qr[991],
        cw = Qr[992],
        dw = Qr[993],
        _w = Qr[163] + Qr[115],
        lw = Qr[994],
        vw = Qr[275] + Qr[77],
        bw = Qr[949],
        yw = Qr[289],
        gw = Qr[995],
        mw = Qr[1] + Qr[310],
        xw = Qr[105] + Qr[996],
        pw = Qr[1] + Qr[997],
        Ew = Qr[998],
        ww = Qr[999],
        Tw = Qr[1e3],
        kw = Qr[1001],
        Ow = Qr[1002],
        Sw = Qr[1003],
        Mw = Qr[1004],
        Iw = Qr[1005],
        Pw = Qr[470],
        Cw = Qr[1006],
        Aw = Qr[1007],
        Lw = Qr[399] + Qr[1008],
        Rw = Qr[49] + Qr[291] + Qr[49] + Qr[1009] + Qr[272],
        jw = Qr[1010],
        Dw = Qr[1011],
        Nw = Qr[1012] + Qr[111] + Qr[559],
        Bw = Qr[1013],
        $w = Qr[1014] + Qr[77] + Qr[890] + Qr[77] + Qr[207],
        Fw = Qr[34] + Qr[90],
        zw = Qr[27] + Qr[159],
        Gw = Qr[44],
        qw = Qr[1015],
        Yw = Qr[1016] + Qr[111] + Qr[559],
        Hw = Qr[56] + Qr[872],
        Uw = Qr[1017],
        Ww = Qr[295] + Qr[83] + Qr[56],
        Vw = Qr[490] + Qr[115] + Qr[295],
        Xw = Qr[1018],
        Kw = Qr[217] + Qr[49] + Qr[217],
        Jw = Qr[399] + Qr[97] + Qr[1] + Qr[310],
        Zw = Qr[399] + Qr[97] + Qr[1] + Qr[310] + Qr[23] + Qr[1019],
        Qw = Qr[399] + Qr[97] + Qr[268] + Qr[400],
        tT = Qr[20] + Qr[477] + Qr[207],
        iT = Qr[20] + Qr[1020] + Qr[45] + Qr[46],
        nT = Qr[20] + Qr[1021],
        eT = Qr[163] + Qr[23] + Qr[516],
        sT = Qr[20] + Qr[272] + Qr[1022],
        rT = Qr[259],
        hT = Qr[20] + Qr[1023],
        aT = Qr[20] + Qr[527],
        oT = Qr[1024],
        fT = Qr[1021],
        uT = Qr[20] + Qr[1025] + Qr[687],
        cT = Qr[20] + Qr[515] + Qr[342],
        dT = Qr[20] + Qr[1026],
        _T = Qr[20] + Qr[1027],
        lT = Qr[229] + Qr[105] + Qr[1028],
        vT = Qr[1029],
        bT = Qr[20] + Qr[1030],
        yT = Qr[20] + Qr[1031],
        gT = Qr[20] + Qr[1032],
        mT = Qr[489],
        xT = Qr[665] + Qr[181] + Qr[282],
        pT = Qr[1033] + Qr[62] + Qr[1034],
        ET = Qr[742],
        wT = Qr[20] + Qr[1035],
        TT = Qr[20] + Qr[527] + Qr[1] + Qr[310] + Qr[34] + Qr[164] + Qr[40] + Qr[288],
        kT = Qr[1036] + Qr[115] + Qr[194],
        OT = Qr[1037] + Qr[227] + Qr[1038],
        ST = Qr[1039],
        MT = Qr[20] + Qr[557] + Qr[227] + Qr[1038],
        IT = Qr[1029] + Qr[66],
        PT = Qr[1040],
        CT = Qr[139] + Qr[632] + Qr[217],
        AT = Qr[1041],
        LT = Qr[47] + Qr[27] + Qr[159] + Qr[62] + Qr[88] + Qr[181] + Qr[162],
        RT = Qr[20] + Qr[208] + Qr[275],
        jT = Qr[20] + Qr[515] + Qr[207],
        DT = Qr[1042] + Qr[27] + Qr[159],
        NT = Qr[1043] + Qr[181] + Qr[282],
        BT = Qr[20] + Qr[1044],
        $T = Qr[436] + Qr[181] + Qr[162],
        FT = Qr[139] + Qr[658] + Qr[562],
        zT = Qr[20] + Qr[1045],
        GT = Qr[20] + Qr[527] + Qr[62] + Qr[189] + Qr[40] + Qr[288],
        qT = Qr[291] + Qr[27] + Qr[292] + Qr[105] + Qr[1046],
        YT = Qr[169] + Qr[115] + Qr[157],
        HT = Qr[20] + Qr[1047] + Qr[1] + Qr[310],
        UT = Qr[47] + Qr[268] + Qr[1048] + Qr[62] + Qr[189],
        WT = Qr[20] + Qr[1021] + Qr[1] + Qr[1049],
        VT = Qr[160] + Qr[62] + Qr[189],
        XT = Qr[20] + Qr[68] + Qr[181] + Qr[1050] + Qr[105] + Qr[212],
        KT = Qr[20] + Qr[1051],
        JT = Qr[1052] + Qr[77] + Qr[571],
        ZT = Qr[1052] + Qr[77] + Qr[1053],
        QT = Qr[416] + Qr[20] + Qr[352],
        tk = Qr[416] + Qr[20] + Qr[1054],
        ik = Qr[20] + Qr[1055],
        nk = Qr[20] + Qr[413] + Qr[1] + Qr[310],
        ek = Qr[20] + Qr[477] + Qr[342],
        sk = Qr[20] + Qr[272] + Qr[638],
        rk = Qr[20] + Qr[632] + Qr[217] + Qr[40] + Qr[1056],
        hk = Qr[195] + Qr[62] + Qr[319] + Qr[27] + Qr[1057],
        ak = Qr[20] + Qr[253] + Qr[640],
        ok = Qr[20] + Qr[1058],
        fk = Qr[20] + Qr[1059] + Qr[38] + Qr[1060],
        uk = Qr[1059] + Qr[38] + Qr[299] + Qr[1] + Qr[1061],
        ck = Qr[259] + Qr[31] + Qr[1062],
        dk = Qr[20] + Qr[129],
        _k = Qr[20] + Qr[275] + Qr[299] + Qr[1] + Qr[474],
        lk = Qr[1063] + Qr[77] + Qr[190],
        vk = Qr[139] + Qr[663] + Qr[492],
        bk = Qr[68] + Qr[1] + Qr[310],
        yk = Qr[68] + Qr[45] + Qr[1064],
        gk = Qr[1065],
        mk = Qr[259] + Qr[105] + Qr[1066],
        xk = Qr[436] + Qr[1] + Qr[1067],
        pk = Qr[1068] + Qr[34] + Qr[1069] + Qr[43] + Qr[1070],
        Ek = Qr[1071],
        wk = Qr[33] + Qr[23] + Qr[24] + Qr[1] + Qr[522],
        Tk = Qr[259] + Qr[56] + Qr[183],
        kk = Qr[20] + Qr[1072],
        Ok = Qr[20] + Qr[346] + Qr[62] + Qr[319] + Qr[181] + Qr[1073] + Qr[40] + Qr[288],
        Sk = Qr[188] + Qr[27] + Qr[318] + Qr[62] + Qr[319],
        Mk = Qr[20] + Qr[1074],
        Ik = Qr[291] + Qr[27] + Qr[292] + Qr[62] + Qr[88] + Qr[56] + Qr[1075] + Qr[40] + Qr[1076],
        Pk = Qr[139] + Qr[1077],
        Ck = Qr[47] + Qr[181] + Qr[282] + Qr[62] + Qr[88] + Qr[181] + Qr[162],
        Ak = Qr[384] + Qr[528],
        Lk = Qr[134] + Qr[475] + Qr[49] + Qr[1078],
        Rk = Qr[163] + Qr[181] + Qr[282] + Qr[62] + Qr[1079],
        jk = Qr[163] + Qr[181] + Qr[282] + Qr[38] + Qr[1080],
        Dk = Qr[1021] + Qr[62] + Qr[189],
        Nk = Qr[20] + Qr[1081] + Qr[227] + Qr[431],
        Bk = Qr[20] + Qr[1047] + Qr[227],
        $k = Qr[20] + Qr[218] + Qr[62] + Qr[189],
        Fk = Qr[254],
        zk = Qr[25] + Qr[29],
        Gk = Qr[163] + Qr[34] + Qr[216],
        qk = Qr[436],
        Yk = Qr[20] + Qr[1082],
        Hk = Qr[1083] + Qr[384] + Qr[613],
        Uk = Qr[9] + Qr[384],
        Wk = Qr[399] + Qr[77] + Qr[27] + Qr[159],
        Vk = Qr[1084],
        Xk = Qr[293] + Qr[34] + Qr[1085],
        Kk = Qr[1086] + Qr[268] + Qr[1087],
        Jk = Qr[1088],
        Zk = Qr[399] + Qr[77] + Qr[27] + Qr[318],
        Qk = Qr[20] + Qr[1089],
        tO = Qr[1090] + Qr[27] + Qr[1057],
        iO = Qr[387] + Qr[77] + Qr[1091],
        nO = Qr[1092] + Qr[23] + Qr[202] + Qr[1] + Qr[522],
        eO = Qr[109] + Qr[23] + Qr[202] + Qr[34] + Qr[769],
        sO = Qr[195] + Qr[43] + Qr[1093],
        rO = Qr[68],
        hO = Qr[399] + Qr[97] + Qr[480],
        aO = Qr[25] + Qr[1094],
        oO = Qr[20] + Qr[1095],
        fO = Qr[1096] + Qr[34] + Qr[1097],
        uO = Qr[20] + Qr[1098],
        cO = Qr[1094],
        dO = Qr[257],
        _O = Qr[68] + Qr[40] + Qr[323],
        lO = Qr[20] + Qr[257],
        vO = Qr[399] + Qr[77] + Qr[43] + Qr[228],
        bO = Qr[1099] + Qr[77] + Qr[109],
        yO = Qr[1099] + Qr[77] + Qr[9],
        gO = Qr[266] + Qr[23] + Qr[92],
        mO = Qr[1100] + Qr[20] + Qr[1101],
        xO = Qr[340] + Qr[20] + Qr[382],
        pO = Qr[399] + Qr[77] + Qr[34] + Qr[273] + Qr[43] + Qr[228],
        EO = Qr[9] + Qr[23] + Qr[202] + Qr[34] + Qr[769],
        wO = Qr[1102],
        TO = Qr[34] + Qr[273] + Qr[43] + Qr[228],
        kO = Qr[399] + Qr[77] + Qr[62] + Qr[1103],
        OO = Qr[462] + Qr[34] + Qr[1069] + Qr[43] + Qr[1070],
        SO = Qr[1104] + Qr[20] + Qr[352],
        MO = Qr[1104] + Qr[20] + Qr[1105],
        IO = Qr[1104] + Qr[20] + Qr[1106],
        PO = Qr[1104] + Qr[20] + Qr[1107] + Qr[20] + Qr[171],
        CO = Qr[259] + Qr[40] + Qr[288],
        AO = Qr[25] + Qr[1108] + Qr[115] + Qr[393],
        LO = Qr[1108],
        RO = Qr[25] + Qr[1109] + Qr[34] + Qr[164],
        jO = Qr[399] + Qr[77] + Qr[268] + Qr[1087],
        DO = Qr[1109] + Qr[34] + Qr[164],
        NO = Qr[1108] + Qr[115] + Qr[393],
        BO = Qr[260],
        $O = Qr[1108] + Qr[181] + Qr[182],
        FO = Qr[399] + Qr[77] + Qr[115] + Qr[295],
        zO = Qr[115] + Qr[295],
        GO = Qr[73] + Qr[1110],
        qO = Qr[25] + Qr[266] + Qr[23] + Qr[149],
        YO = Qr[430] + Qr[62] + Qr[1111] + Qr[1] + Qr[421],
        HO = Qr[199] + Qr[105] + Qr[212],
        UO = Qr[1112] + Qr[34] + Qr[694],
        WO = Qr[1112] + Qr[34] + Qr[694] + Qr[34] + Qr[1085],
        VO = Qr[25] + Qr[1113],
        XO = Qr[254] + Qr[117],
        KO = Qr[254] + Qr[118],
        JO = Qr[20] + Qr[1114],
        ZO = Qr[261] + Qr[1] + Qr[421],
        QO = Qr[261] + Qr[45] + Qr[279] + Qr[56] + Qr[278] + Qr[13] + Qr[121],
        tS = Qr[25] + Qr[270] + Qr[1] + Qr[421],
        iS = Qr[25] + Qr[259] + Qr[56] + Qr[183],
        nS = Qr[25] + Qr[270] + Qr[268] + Qr[269],
        eS = Qr[188] + Qr[34] + Qr[164],
        sS = Qr[33] + Qr[62] + Qr[189] + Qr[1] + Qr[474],
        rS = Qr[25] + Qr[259] + Qr[45] + Qr[1115],
        hS = Qr[25] + Qr[259] + Qr[31] + Qr[1062],
        aS = Qr[25] + Qr[1041],
        oS = Qr[25] + Qr[263] + Qr[27] + Qr[277],
        fS = Qr[1116],
        uS = Qr[1096] + Qr[31] + Qr[1117],
        cS = Qr[33] + Qr[56] + Qr[183] + Qr[1] + Qr[474],
        dS = Qr[20] + Qr[477] + Qr[253],
        _S = Qr[31] + Qr[1062],
        lS = Qr[45] + Qr[1115],
        vS = Qr[38] + Qr[252] + Qr[23] + Qr[149],
        bS = Qr[62] + Qr[1111] + Qr[268] + Qr[269],
        yS = Qr[437] + Qr[20] + Qr[241],
        gS = Qr[105] + Qr[258],
        mS = Qr[56] + Qr[183],
        xS = Qr[351] + Qr[20] + Qr[352] + Qr[20] + Qr[166],
        pS = Qr[1083] + Qr[23] + Qr[24],
        ES = Qr[430] + Qr[77] + Qr[780],
        wS = Qr[430] + Qr[77] + Qr[261],
        TS = Qr[437] + Qr[20] + Qr[732] + Qr[20] + Qr[381] + Qr[20] + Qr[117],
        kS = Qr[437] + Qr[20] + Qr[732] + Qr[20] + Qr[381] + Qr[20] + Qr[118],
        OS = Qr[430] + Qr[77] + Qr[204],
        SS = Qr[742] + Qr[77] + Qr[780],
        MS = Qr[1118],
        IS = Qr[1113],
        PS = Qr[420] + Qr[77] + Qr[1119],
        CS = Qr[732] + Qr[20] + Qr[241],
        AS = Qr[420] + Qr[77] + Qr[780],
        LS = Qr[732] + Qr[20] + Qr[381] + Qr[20] + Qr[117],
        RS = Qr[420] + Qr[77] + Qr[254] + Qr[77] + Qr[87],
        jS = Qr[732] + Qr[20] + Qr[381] + Qr[20] + Qr[118],
        DS = Qr[420] + Qr[77] + Qr[254] + Qr[77] + Qr[88],
        NS = Qr[330] + Qr[20] + Qr[1120],
        BS = Qr[1121] + Qr[77] + Qr[198],
        $S = Qr[1121] + Qr[77] + Qr[198] + Qr[77] + Qr[100],
        FS = Qr[330] + Qr[20] + Qr[179] + Qr[20] + Qr[1122],
        zS = Qr[1121] + Qr[77] + Qr[201] + Qr[77] + Qr[1123],
        GS = Qr[330] + Qr[20] + Qr[179] + Qr[20] + Qr[1122] + Qr[20] + Qr[381],
        qS = Qr[1121] + Qr[77] + Qr[199] + Qr[77] + Qr[780],
        YS = Qr[330] + Qr[20] + Qr[1124] + Qr[20] + Qr[759],
        HS = Qr[1121] + Qr[77] + Qr[199] + Qr[77] + Qr[1125],
        US = Qr[1121] + Qr[77] + Qr[771],
        WS = Qr[330] + Qr[20] + Qr[1126] + Qr[20] + Qr[166],
        VS = Qr[1121] + Qr[77] + Qr[771] + Qr[77] + Qr[100],
        XS = Qr[1127] + Qr[20] + Qr[364] + Qr[20] + Qr[1128],
        KS = Qr[251] + Qr[77] + Qr[1129] + Qr[77] + Qr[387],
        JS = Qr[270] + Qr[77] + Qr[780],
        ZS = Qr[1130] + Qr[20] + Qr[759],
        QS = Qr[270] + Qr[77] + Qr[1125],
        tM = Qr[731],
        iM = Qr[261] + Qr[77] + Qr[113],
        nM = Qr[731] + Qr[20] + Qr[241],
        eM = Qr[261] + Qr[77] + Qr[780],
        sM = Qr[261] + Qr[77] + Qr[201] + Qr[77] + Qr[1123],
        rM = Qr[731] + Qr[20] + Qr[179] + Qr[20] + Qr[1122] + Qr[20] + Qr[381],
        hM = Qr[261] + Qr[77] + Qr[496],
        aM = Qr[1105],
        oM = Qr[201] + Qr[77] + Qr[1131],
        fM = Qr[179] + Qr[20] + Qr[726],
        uM = Qr[201] + Qr[77] + Qr[1040],
        cM = Qr[201] + Qr[77] + Qr[1123] + Qr[77] + Qr[1131],
        dM = Qr[179] + Qr[20] + Qr[1122] + Qr[20] + Qr[726],
        _M = Qr[201] + Qr[77] + Qr[1123] + Qr[77] + Qr[1040],
        lM = Qr[226] + Qr[20] + Qr[1130] + Qr[20] + Qr[241],
        vM = Qr[226] + Qr[20] + Qr[1130] + Qr[20] + Qr[759],
        bM = Qr[226] + Qr[20] + Qr[731],
        yM = Qr[232] + Qr[77] + Qr[261] + Qr[77] + Qr[113],
        gM = Qr[226] + Qr[20] + Qr[731] + Qr[20] + Qr[166],
        mM = Qr[226] + Qr[20] + Qr[731] + Qr[20] + Qr[241],
        xM = Qr[232] + Qr[77] + Qr[261] + Qr[77] + Qr[100],
        pM = Qr[226] + Qr[20] + Qr[731] + Qr[20] + Qr[734],
        EM = Qr[232] + Qr[77] + Qr[496],
        wM = Qr[226] + Qr[20] + Qr[1105],
        TM = Qr[232] + Qr[77] + Qr[260],
        kM = Qr[226] + Qr[20] + Qr[643] + Qr[20] + Qr[513],
        OM = Qr[232] + Qr[77] + Qr[665] + Qr[77] + Qr[12],
        SM = Qr[232] + Qr[77] + Qr[1132],
        MM = Qr[232] + Qr[77] + Qr[1113],
        IM = Qr[1133] + Qr[20] + Qr[1134],
        PM = Qr[857] + Qr[77] + Qr[205],
        CM = Qr[857] + Qr[77] + Qr[1135],
        AM = Qr[1133] + Qr[20] + Qr[1136],
        LM = Qr[857] + Qr[77] + Qr[1041],
        RM = Qr[1133] + Qr[20] + Qr[241],
        jM = Qr[857] + Qr[77] + Qr[780],
        DM = Qr[1133] + Qr[20] + Qr[165] + Qr[20] + Qr[171],
        NM = Qr[857] + Qr[77] + Qr[172] + Qr[77] + Qr[1024],
        BM = Qr[857] + Qr[77] + Qr[172] + Qr[77] + Qr[1137],
        $M = Qr[857] + Qr[77] + Qr[172] + Qr[77] + Qr[100],
        FM = Qr[1133] + Qr[20] + Qr[1105],
        zM = Qr[857] + Qr[77] + Qr[260],
        GM = Qr[1133] + Qr[20] + Qr[735] + Qr[20] + Qr[736],
        qM = Qr[857] + Qr[77] + Qr[265] + Qr[77] + Qr[113],
        YM = Qr[1133] + Qr[20] + Qr[735],
        HM = Qr[857] + Qr[77] + Qr[265],
        UM = Qr[1133] + Qr[20] + Qr[734],
        WM = Qr[857] + Qr[77] + Qr[496],
        VM = Qr[857] + Qr[77] + Qr[254] + Qr[77] + Qr[87],
        XM = Qr[1133] + Qr[20] + Qr[381] + Qr[20] + Qr[118],
        KM = Qr[857] + Qr[77] + Qr[254] + Qr[77] + Qr[88],
        JM = Qr[1133] + Qr[20] + Qr[171],
        ZM = Qr[857] + Qr[77] + Qr[1024],
        QM = Qr[1133] + Qr[20] + Qr[1138] + Qr[20] + Qr[1139],
        tI = Qr[857] + Qr[77] + Qr[1140] + Qr[77] + Qr[1135],
        iI = Qr[1133] + Qr[20] + Qr[731],
        nI = Qr[857] + Qr[77] + Qr[261],
        eI = Qr[1133] + Qr[20] + Qr[731] + Qr[20] + Qr[166],
        sI = Qr[857] + Qr[77] + Qr[261] + Qr[77] + Qr[100],
        rI = Qr[1133] + Qr[20] + Qr[1130] + Qr[20] + Qr[759],
        hI = Qr[1133] + Qr[20] + Qr[1141],
        aI = Qr[857] + Qr[77] + Qr[255],
        oI = Qr[1133] + Qr[20] + Qr[732] + Qr[20] + Qr[733],
        fI = Qr[857] + Qr[77] + Qr[420] + Qr[77] + Qr[1119],
        uI = Qr[1133] + Qr[20] + Qr[732] + Qr[20] + Qr[241],
        cI = Qr[857] + Qr[77] + Qr[420] + Qr[77] + Qr[780],
        dI = Qr[1133] + Qr[20] + Qr[732] + Qr[20] + Qr[381] + Qr[20] + Qr[117],
        _I = Qr[1133] + Qr[20] + Qr[643] + Qr[20] + Qr[513],
        lI = Qr[857] + Qr[77] + Qr[665] + Qr[77] + Qr[12],
        vI = Qr[1133] + Qr[20] + Qr[1142] + Qr[20] + Qr[366],
        bI = Qr[857] + Qr[77] + Qr[33] + Qr[77] + Qr[413],
        yI = Qr[1104] + Qr[20] + Qr[1130] + Qr[20] + Qr[241],
        gI = Qr[1104] + Qr[20] + Qr[1120],
        mI = Qr[1108] + Qr[77] + Qr[198],
        xI = Qr[1104] + Qr[20] + Qr[1120] + Qr[20] + Qr[166],
        pI = Qr[1108] + Qr[77] + Qr[198] + Qr[77] + Qr[780],
        EI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[1134],
        wI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[1139],
        TI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[241],
        kI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[165] + Qr[20] + Qr[171],
        OI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[165] + Qr[20] + Qr[166],
        SI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[1105],
        MI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[735] + Qr[20] + Qr[736],
        II = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[735],
        PI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[381] + Qr[20] + Qr[117],
        CI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[381] + Qr[20] + Qr[118],
        AI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[731],
        LI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[731] + Qr[20] + Qr[166],
        RI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[1130] + Qr[20] + Qr[241],
        jI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[1130] + Qr[20] + Qr[759],
        DI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[1141],
        NI = Qr[346] + Qr[77] + Qr[113],
        BI = Qr[355] + Qr[20] + Qr[241],
        $I = Qr[346] + Qr[77] + Qr[780],
        FI = Qr[355] + Qr[20] + Qr[1126],
        zI = Qr[346] + Qr[77] + Qr[771],
        GI = Qr[355] + Qr[20] + Qr[1126] + Qr[20] + Qr[166],
        qI = Qr[346] + Qr[77] + Qr[771] + Qr[77] + Qr[100],
        YI = Qr[355] + Qr[20] + Qr[179] + Qr[20] + Qr[1122],
        HI = Qr[346] + Qr[77] + Qr[201] + Qr[77] + Qr[1123],
        UI = Qr[355] + Qr[20] + Qr[179] + Qr[20] + Qr[1122] + Qr[20] + Qr[381],
        WI = Qr[346] + Qr[77] + Qr[89] + Qr[77] + Qr[254],
        VI = Qr[346] + Qr[77] + Qr[68] + Qr[77] + Qr[254],
        XI = Qr[355] + Qr[20] + Qr[1124] + Qr[20] + Qr[241],
        KI = Qr[346] + Qr[77] + Qr[199] + Qr[77] + Qr[780],
        JI = Qr[346] + Qr[77] + Qr[1090] + Qr[77] + Qr[204],
        ZI = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1143],
        QI = Qr[346] + Qr[77] + Qr[1090] + Qr[77] + Qr[1144],
        tP = Qr[346] + Qr[77] + Qr[1145] + Qr[77] + Qr[1146],
        iP = Qr[346] + Qr[77] + Qr[704],
        nP = Qr[346] + Qr[77] + Qr[1147] + Qr[77] + Qr[1148],
        eP = Qr[355] + Qr[20] + Qr[363] + Qr[20] + Qr[365],
        sP = Qr[346] + Qr[77] + Qr[50] + Qr[77] + Qr[1149],
        rP = Qr[346] + Qr[77] + Qr[50] + Qr[77] + Qr[348],
        hP = Qr[346] + Qr[77] + Qr[1150],
        aP = Qr[346] + Qr[77] + Qr[1150] + Qr[77] + Qr[496],
        oP = Qr[355] + Qr[20] + Qr[379] + Qr[20] + Qr[1151] + Qr[20] + Qr[355],
        fP = Qr[346] + Qr[77] + Qr[89] + Qr[77] + Qr[1152] + Qr[77] + Qr[346],
        uP = Qr[355] + Qr[20] + Qr[382] + Qr[20] + Qr[1151] + Qr[20] + Qr[355],
        cP = Qr[346] + Qr[77] + Qr[68] + Qr[77] + Qr[1152] + Qr[77] + Qr[346],
        dP = Qr[346] + Qr[77] + Qr[89] + Qr[77] + Qr[1153],
        _P = Qr[346] + Qr[77] + Qr[68] + Qr[77] + Qr[1153],
        lP = Qr[340] + Qr[20] + Qr[379],
        vP = Qr[721] + Qr[77] + Qr[89],
        bP = Qr[340] + Qr[20] + Qr[379] + Qr[20] + Qr[171],
        yP = Qr[721] + Qr[77] + Qr[89] + Qr[77] + Qr[1024],
        gP = Qr[340] + Qr[20] + Qr[379] + Qr[20] + Qr[381],
        mP = Qr[721] + Qr[77] + Qr[89] + Qr[77] + Qr[254],
        xP = Qr[340] + Qr[20] + Qr[379] + Qr[20] + Qr[1120],
        pP = Qr[721] + Qr[77] + Qr[89] + Qr[77] + Qr[198],
        EP = Qr[340] + Qr[20] + Qr[379] + Qr[20] + Qr[1120] + Qr[20] + Qr[166],
        wP = Qr[340] + Qr[20] + Qr[379] + Qr[20] + Qr[1126],
        TP = Qr[721] + Qr[77] + Qr[89] + Qr[77] + Qr[771],
        kP = Qr[340] + Qr[20] + Qr[379] + Qr[20] + Qr[1126] + Qr[20] + Qr[166],
        OP = Qr[721] + Qr[77] + Qr[89] + Qr[77] + Qr[201] + Qr[77] + Qr[1123],
        SP = Qr[340] + Qr[20] + Qr[379] + Qr[20] + Qr[1124] + Qr[20] + Qr[241],
        MP = Qr[340] + Qr[20] + Qr[379] + Qr[20] + Qr[1124] + Qr[20] + Qr[759],
        IP = Qr[340] + Qr[20] + Qr[379] + Qr[20] + Qr[179] + Qr[20] + Qr[724],
        PP = Qr[721] + Qr[77] + Qr[89] + Qr[77] + Qr[201] + Qr[77] + Qr[1131],
        CP = Qr[340] + Qr[20] + Qr[379] + Qr[20] + Qr[179] + Qr[20] + Qr[726],
        AP = Qr[721] + Qr[77] + Qr[89] + Qr[77] + Qr[201] + Qr[77] + Qr[1040],
        LP = Qr[721] + Qr[77] + Qr[68],
        RP = Qr[340] + Qr[20] + Qr[382] + Qr[20] + Qr[171],
        jP = Qr[721] + Qr[77] + Qr[68] + Qr[77] + Qr[1024],
        DP = Qr[721] + Qr[77] + Qr[68] + Qr[77] + Qr[254],
        NP = Qr[340] + Qr[20] + Qr[382] + Qr[20] + Qr[1120],
        BP = Qr[721] + Qr[77] + Qr[68] + Qr[77] + Qr[198],
        $P = Qr[340] + Qr[20] + Qr[382] + Qr[20] + Qr[1120] + Qr[20] + Qr[166],
        FP = Qr[340] + Qr[20] + Qr[382] + Qr[20] + Qr[1126],
        zP = Qr[721] + Qr[77] + Qr[68] + Qr[77] + Qr[771],
        GP = Qr[340] + Qr[20] + Qr[382] + Qr[20] + Qr[1126] + Qr[20] + Qr[166],
        qP = Qr[340] + Qr[20] + Qr[382] + Qr[20] + Qr[179] + Qr[20] + Qr[1122],
        YP = Qr[721] + Qr[77] + Qr[68] + Qr[77] + Qr[201] + Qr[77] + Qr[1123],
        HP = Qr[340] + Qr[20] + Qr[382] + Qr[20] + Qr[1124] + Qr[20] + Qr[241],
        UP = Qr[721] + Qr[77] + Qr[68] + Qr[77] + Qr[199] + Qr[77] + Qr[780],
        WP = Qr[340] + Qr[20] + Qr[382] + Qr[20] + Qr[1124] + Qr[20] + Qr[759],
        VP = Qr[340] + Qr[20] + Qr[382] + Qr[20] + Qr[179] + Qr[20] + Qr[724],
        XP = Qr[721] + Qr[77] + Qr[68] + Qr[77] + Qr[201] + Qr[77] + Qr[1131],
        KP = Qr[340] + Qr[20] + Qr[382] + Qr[20] + Qr[179] + Qr[20] + Qr[726],
        JP = Qr[721] + Qr[77] + Qr[68] + Qr[77] + Qr[201] + Qr[77] + Qr[1040],
        ZP = Qr[1133] + Qr[20] + Qr[1139],
        QP = Qr[1135],
        tC = Qr[780],
        iC = Qr[1133] + Qr[20] + Qr[1130] + Qr[20] + Qr[241],
        nC = Qr[270] + Qr[1] + Qr[421],
        eC = Qr[263] + Qr[13] + Qr[196] + Qr[115] + Qr[1154],
        sC = Qr[732] + Qr[20] + Qr[733],
        rC = Qr[1133] + Qr[20] + Qr[165] + Qr[20] + Qr[167],
        hC = Qr[1140] + Qr[23] + Qr[92],
        aC = Qr[265] + Qr[111] + Qr[112],
        oC = Qr[261] + Qr[105] + Qr[276],
        fC = Qr[255],
        uC = Qr[1133] + Qr[20] + Qr[732] + Qr[20] + Qr[381] + Qr[20] + Qr[118],
        cC = Qr[1155] + Qr[20] + Qr[241],
        dC = Qr[1155] + Qr[20] + Qr[241] + Qr[20] + Qr[237] + Qr[20] + Qr[238],
        _C = Qr[20] + Qr[83] + Qr[658],
        lC = Qr[1130] + Qr[20] + Qr[241],
        vC = Qr[261] + Qr[45] + Qr[279] + Qr[56] + Qr[278],
        bC = Qr[20] + Qr[1156],
        yC = Qr[330] + Qr[20] + Qr[1120] + Qr[20] + Qr[166],
        gC = Qr[330] + Qr[20] + Qr[1124] + Qr[20] + Qr[241],
        mC = Qr[1132] + Qr[115] + Qr[393],
        xC = Qr[330] + Qr[20] + Qr[1126],
        pC = Qr[199] + Qr[268] + Qr[269],
        EC = Qr[179] + Qr[20] + Qr[724],
        wC = Qr[226] + Qr[20] + Qr[731] + Qr[20] + Qr[179] + Qr[20] + Qr[1122],
        TC = Qr[226] + Qr[20] + Qr[731] + Qr[20] + Qr[179] + Qr[20] + Qr[1122] + Qr[20] + Qr[381],
        kC = Qr[226] + Qr[20] + Qr[1118],
        OC = Qr[1157] + Qr[62] + Qr[1158],
        SC = Qr[20] + Qr[1159],
        MC = Qr[1121],
        IC = Qr[1104] + Qr[20] + Qr[1130] + Qr[20] + Qr[759],
        PC = Qr[1104] + Qr[20] + Qr[1120] + Qr[20] + Qr[179] + Qr[20] + Qr[1122],
        CC = Qr[1104] + Qr[20] + Qr[1120] + Qr[20] + Qr[179] + Qr[20] + Qr[1122] + Qr[20] + Qr[381],
        AC = Qr[20] + Qr[663] + Qr[492],
        LC = Qr[89] + Qr[38] + Qr[1160],
        RC = Qr[68] + Qr[38] + Qr[1160],
        jC = Qr[179] + Qr[20] + Qr[1122] + Qr[20] + Qr[724],
        DC = Qr[201] + Qr[56] + Qr[278] + Qr[418] + Qr[419],
        NC = Qr[89] + Qr[38] + Qr[1160] + Qr[34] + Qr[164],
        BC = Qr[89] + Qr[38] + Qr[1160] + Qr[13] + Qr[121],
        $C = Qr[89] + Qr[38] + Qr[1160] + Qr[34] + Qr[197],
        FC = Qr[89] + Qr[38] + Qr[1160] + Qr[34] + Qr[197] + Qr[34] + Qr[216],
        zC = Qr[89] + Qr[38] + Qr[1160] + Qr[13] + Qr[1161],
        GC = Qr[89] + Qr[38] + Qr[1160] + Qr[40] + Qr[774] + Qr[1] + Qr[421],
        qC = Qr[89] + Qr[38] + Qr[1160] + Qr[45] + Qr[279] + Qr[56] + Qr[278],
        YC = Qr[89] + Qr[38] + Qr[1160] + Qr[45] + Qr[279] + Qr[418] + Qr[419],
        HC = Qr[89] + Qr[38] + Qr[1160] + Qr[45] + Qr[279] + Qr[1] + Qr[773],
        UC = Qr[68] + Qr[38] + Qr[1160] + Qr[34] + Qr[164],
        WC = Qr[340] + Qr[20] + Qr[382] + Qr[20] + Qr[381],
        VC = Qr[68] + Qr[38] + Qr[1160] + Qr[13] + Qr[121],
        XC = Qr[68] + Qr[38] + Qr[1160] + Qr[34] + Qr[197],
        KC = Qr[68] + Qr[38] + Qr[1160] + Qr[34] + Qr[197] + Qr[34] + Qr[216],
        JC = Qr[68] + Qr[38] + Qr[1160] + Qr[13] + Qr[1161],
        ZC = Qr[68] + Qr[38] + Qr[1160] + Qr[13] + Qr[1161] + Qr[34] + Qr[216],
        QC = Qr[68] + Qr[38] + Qr[1160] + Qr[40] + Qr[774] + Qr[1] + Qr[421],
        tA = Qr[68] + Qr[38] + Qr[1160] + Qr[40] + Qr[774] + Qr[268] + Qr[269],
        iA = Qr[68] + Qr[38] + Qr[1160] + Qr[45] + Qr[279] + Qr[56] + Qr[278],
        nA = Qr[340] + Qr[20] + Qr[382] + Qr[20] + Qr[179] + Qr[20] + Qr[1122] + Qr[20] + Qr[381],
        eA = Qr[68] + Qr[38] + Qr[1160] + Qr[45] + Qr[279] + Qr[418] + Qr[419],
        sA = Qr[68] + Qr[38] + Qr[1160] + Qr[45] + Qr[279] + Qr[1] + Qr[773],
        rA = Qr[1090] + Qr[45] + Qr[1162],
        hA = Qr[731] + Qr[20] + Qr[179] + Qr[20] + Qr[1122],
        aA = Qr[259] + Qr[34] + Qr[273],
        oA = Qr[330] + Qr[20] + Qr[179] + Qr[20] + Qr[1124] + Qr[20] + Qr[241],
        fA = Qr[340] + Qr[20] + Qr[379] + Qr[20] + Qr[179] + Qr[20] + Qr[1122],
        uA = Qr[340] + Qr[20] + Qr[379] + Qr[20] + Qr[179] + Qr[20] + Qr[1122] + Qr[20] + Qr[381],
        cA = Qr[259] + Qr[1] + Qr[2] + Qr[181] + Qr[282],
        dA = Qr[259] + Qr[34] + Qr[164],
        _A = Qr[25] + Qr[259] + Qr[1] + Qr[93],
        lA = Qr[20] + Qr[515] + Qr[663],
        vA = Qr[9] + Qr[62] + Qr[1163],
        bA = Qr[33] + Qr[62] + Qr[1163] + Qr[23] + Qr[24] + Qr[1] + Qr[522],
        yA = Qr[109] + Qr[1] + Qr[93],
        gA = Qr[429] + Qr[62] + Qr[1163] + Qr[23] + Qr[76],
        mA = Qr[501],
        xA = Qr[1083] + Qr[23] + Qr[76],
        pA = Qr[109] + Qr[62] + Qr[1163],
        EA = Qr[188] + Qr[1] + Qr[2],
        wA = Qr[441],
        TA = Qr[25] + Qr[430] + Qr[62] + Qr[772],
        kA = Qr[25] + Qr[420] + Qr[13] + Qr[121] + Qr[117],
        OA = Qr[25] + Qr[420] + Qr[13] + Qr[121] + Qr[118],
        SA = Qr[25] + Qr[430] + Qr[34] + Qr[770] + Qr[13] + Qr[121] + Qr[118],
        MA = Qr[25] + Qr[420] + Qr[62] + Qr[423],
        IA = Qr[1164] + Qr[1] + Qr[474],
        PA = Qr[25] + Qr[742] + Qr[1] + Qr[421],
        CA = Qr[25] + Qr[420] + Qr[1] + Qr[421],
        AA = Qr[25] + Qr[742] + Qr[1] + Qr[421] + Qr[62] + Qr[752] + Qr[227] + Qr[228],
        LA = Qr[1164],
        RA = Qr[25] + Qr[259] + Qr[62] + Qr[189],
        jA = Qr[776],
        DA = Qr[20] + Qr[1165],
        NA = Qr[20] + Qr[1166],
        BA = Qr[73] + Qr[1167],
        $A = Qr[25] + Qr[1024],
        FA = Qr[25] + Qr[259] + Qr[34] + Qr[578],
        zA = Qr[20] + Qr[776] + Qr[62] + Qr[189],
        GA = Qr[25] + Qr[259] + Qr[40] + Qr[774] + Qr[268] + Qr[269],
        qA = Qr[25] + Qr[199] + Qr[268] + Qr[269],
        YA = Qr[25] + Qr[1132] + Qr[115] + Qr[393],
        HA = Qr[25] + Qr[199] + Qr[1] + Qr[421],
        UA = Qr[34] + Qr[578],
        WA = Qr[40] + Qr[774] + Qr[268] + Qr[269],
        VA = Qr[25] + Qr[172] + Qr[34] + Qr[164],
        XA = Qr[25] + Qr[172] + Qr[40] + Qr[440],
        KA = Qr[25] + Qr[172] + Qr[34] + Qr[216],
        JA = Qr[25] + Qr[172],
        ZA = Qr[163] + Qr[227] + Qr[1168] + Qr[62] + Qr[189],
        QA = Qr[1138] + Qr[20] + Qr[1139],
        tL = Qr[40] + Qr[997],
        iL = Qr[25] + Qr[259] + Qr[40] + Qr[997],
        nL = Qr[387] + Qr[62] + Qr[189],
        eL = Qr[25] + Qr[259] + Qr[40] + Qr[1169] + Qr[38] + Qr[1160],
        sL = Qr[25] + Qr[259] + Qr[115] + Qr[157] + Qr[38] + Qr[1160],
        rL = Qr[25] + Qr[771],
        hL = Qr[188] + Qr[115] + Qr[157] + Qr[38] + Qr[1160],
        aL = Qr[25] + Qr[89] + Qr[38] + Qr[1160],
        oL = Qr[25] + Qr[89] + Qr[38] + Qr[1160] + Qr[34] + Qr[273],
        fL = Qr[25] + Qr[89] + Qr[38] + Qr[1160] + Qr[13] + Qr[121],
        uL = Qr[47] + Qr[45] + Qr[1115],
        cL = Qr[89] + Qr[38] + Qr[1160] + Qr[45] + Qr[1115],
        dL = Qr[89] + Qr[38] + Qr[1160] + Qr[34] + Qr[1085],
        _L = Qr[268] + Qr[269],
        lL = Qr[89] + Qr[38] + Qr[1160] + Qr[40] + Qr[774] + Qr[268] + Qr[269],
        vL = Qr[25] + Qr[68] + Qr[38] + Qr[1160] + Qr[34] + Qr[273],
        bL = Qr[25] + Qr[68] + Qr[38] + Qr[1160] + Qr[13] + Qr[121],
        yL = Qr[25] + Qr[68] + Qr[38] + Qr[1160],
        gL = Qr[25] + Qr[68] + Qr[38] + Qr[1160] + Qr[34] + Qr[164],
        mL = Qr[68] + Qr[38] + Qr[1160] + Qr[34] + Qr[1085],
        xL = Qr[68] + Qr[38] + Qr[1160] + Qr[45] + Qr[1115],
        pL = Qr[38] + Qr[1160] + Qr[34] + Qr[197],
        EL = Qr[25] + Qr[201] + Qr[111] + Qr[112],
        wL = Qr[38] + Qr[1160] + Qr[34] + Qr[197] + Qr[34] + Qr[216],
        TL = Qr[38] + Qr[1160] + Qr[34] + Qr[1085],
        kL = Qr[38] + Qr[1160] + Qr[45] + Qr[279] + Qr[56] + Qr[278],
        OL = Qr[38] + Qr[1160] + Qr[45] + Qr[279] + Qr[56] + Qr[278] + Qr[13] + Qr[121],
        SL = Qr[38] + Qr[1160] + Qr[40] + Qr[774] + Qr[1] + Qr[421],
        ML = Qr[38] + Qr[1160] + Qr[40] + Qr[774] + Qr[268] + Qr[269],
        IL = Qr[38] + Qr[1160] + Qr[45] + Qr[279] + Qr[1] + Qr[773],
        PL = Qr[38] + Qr[1160] + Qr[45] + Qr[279] + Qr[418] + Qr[419],
        CL = Qr[38] + Qr[1160] + Qr[13] + Qr[1161],
        AL = Qr[38] + Qr[1160] + Qr[13] + Qr[1161] + Qr[34] + Qr[216],
        LL = Qr[224] + Qr[38] + Qr[1160],
        RL = Qr[40] + Qr[1169] + Qr[38] + Qr[1160],
        jL = Qr[115] + Qr[157] + Qr[38] + Qr[1160],
        DL = Qr[47] + Qr[45] + Qr[1170] + Qr[62] + Qr[189],
        NL = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[1171],
        BL = Qr[47] + Qr[122] + Qr[121],
        $L = Qr[47] + Qr[62] + Qr[319] + Qr[45] + Qr[1162],
        FL = Qr[21] + Qr[62] + Qr[319] + Qr[45] + Qr[1162],
        zL = Qr[1172],
        GL = Qr[188] + Qr[23] + Qr[439],
        qL = Qr[224] + Qr[105] + Qr[1173] + Qr[45] + Qr[279],
        YL = Qr[355] + Qr[20] + Qr[352] + Qr[20] + Qr[460],
        HL = Qr[704] + Qr[77],
        UL = Qr[20] + Qr[1174],
        WL = Qr[1175] + Qr[23] + Qr[1176],
        VL = Qr[205] + Qr[117],
        XL = Qr[205] + Qr[118],
        KL = Qr[1153],
        JL = Qr[47] + Qr[45] + Qr[1170] + Qr[23] + Qr[1176],
        ZL = Qr[495] + Qr[20] + Qr[362],
        QL = Qr[73] + Qr[1177],
        tR = Qr[355] + Qr[20] + Qr[736],
        iR = Qr[355] + Qr[20] + Qr[371] + Qr[20] + Qr[734],
        nR = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1133] + Qr[20] + Qr[1178] + Qr[20] + Qr[1139],
        eR = Qr[73] + Qr[1179] + Qr[1180] + Qr[272],
        sR = Qr[73] + Qr[1181] + Qr[27] + Qr[217],
        rR = Qr[237] + Qr[20] + Qr[238],
        hR = Qr[1182] + Qr[20] + Qr[355] + Qr[20] + Qr[1183] + Qr[20] + Qr[438],
        aR = Qr[20] + Qr[1184],
        oR = Qr[451],
        fR = Qr[1185],
        uR = Qr[1186],
        cR = Qr[59] + Qr[27] + Qr[28],
        dR = Qr[200] + Qr[115] + Qr[1187],
        _R = Qr[218] + Qr[115] + Qr[157] + Qr[45] + Qr[1188],
        lR = Qr[1189] + Qr[38] + Qr[1190],
        vR = Qr[43] + Qr[228],
        bR = Qr[21] + Qr[115] + Qr[295],
        yR = Qr[21] + Qr[34] + Qr[273] + Qr[43] + Qr[228],
        gR = Qr[268] + Qr[1087],
        mR = Qr[21] + Qr[268] + Qr[1087],
        xR = Qr[21] + Qr[43] + Qr[228],
        pR = Qr[20] + Qr[1191],
        ER = Qr[1192],
        wR = Qr[110] + Qr[23] + Qr[76],
        TR = Qr[531],
        kR = Qr[33] + Qr[27] + Qr[159] + Qr[1] + Qr[1193],
        OR = Qr[1194] + Qr[20] + Qr[1195],
        SR = Qr[33] + Qr[181] + Qr[615] + Qr[27] + Qr[28],
        MR = Qr[1196],
        IR = Qr[1197],
        PR = Qr[1175],
        CR = Qr[1198] + Qr[45] + Qr[1199] + Qr[115] + Qr[157],
        AR = Qr[996] + Qr[23] + Qr[149] + Qr[27] + Qr[1200],
        LR = Qr[109] + Qr[27] + Qr[159],
        RR = Qr[47] + Qr[56] + Qr[57] + Qr[34] + Qr[216],
        jR = Qr[1201] + Qr[62] + Qr[189],
        DR = Qr[59] + Qr[38] + Qr[39],
        NR = Qr[20] + Qr[1202] + Qr[62] + Qr[189],
        BR = Qr[3] + Qr[45] + Qr[1203],
        $R = Qr[622] + Qr[38] + Qr[299],
        FR = Qr[622] + Qr[181] + Qr[196],
        zR = Qr[20] + Qr[1204],
        GR = Qr[195] + Qr[181] + Qr[1073],
        qR = Qr[573] + Qr[115] + Qr[157],
        YR = Qr[220] + Qr[115] + Qr[157] + Qr[1] + Qr[1061],
        HR = Qr[622] + Qr[115] + Qr[157] + Qr[13] + Qr[1205],
        UR = Qr[622] + Qr[38] + Qr[39],
        WR = Qr[1206] + Qr[20] + Qr[1207],
        VR = Qr[170] + Qr[34] + Qr[688],
        XR = Qr[20] + Qr[1208] + Qr[38] + Qr[39],
        KR = Qr[1209],
        JR = Qr[1210],
        ZR = Qr[1211] + Qr[34] + Qr[1212] + Qr[38] + Qr[755],
        QR = Qr[163] + Qr[45] + Qr[1115],
        tj = Qr[195] + Qr[227] + Qr[1213],
        ij = Qr[20] + Qr[1214] + Qr[40] + Qr[1056],
        nj = Qr[109] + Qr[1] + Qr[1215] + Qr[181] + Qr[615],
        ej = Qr[9] + Qr[1] + Qr[1215] + Qr[181] + Qr[615],
        sj = Qr[1216],
        rj = Qr[56] + Qr[1217] + Qr[49] + Qr[27] + Qr[1218] + Qr[233],
        hj = Qr[9] + Qr[34] + Qr[694],
        aj = Qr[1194] + Qr[20] + Qr[1219],
        oj = Qr[34] + Qr[273],
        fj = Qr[45] + Qr[279],
        uj = Qr[34] + Qr[1085],
        cj = Qr[21] + Qr[27] + Qr[318],
        dj = Qr[27] + Qr[318],
        _j = Qr[346] + Qr[1220] + Qr[1067],
        lj = Qr[456] + Qr[23] + Qr[76],
        vj = Qr[1221] + Qr[27] + Qr[277] + Qr[45] + Qr[1162],
        bj = Qr[45] + Qr[1162] + Qr[49] + Qr[1] + Qr[1222] + Qr[133] + Qr[299] + Qr[49] + Qr[27] + Qr[277],
        yj = Qr[259] + Qr[27] + Qr[159],
        gj = Qr[456] + Qr[227] + Qr[228],
        mj = Qr[1223],
        xj = Qr[1224] + Qr[27] + Qr[525],
        pj = Qr[1225] + Qr[105] + Qr[1226],
        Ej = Qr[1175] + Qr[23] + Qr[439],
        wj = Qr[160] + Qr[23] + Qr[1019],
        Tj = Qr[1227],
        kj = Qr[20] + Qr[557] + Qr[227] + Qr[228],
        Oj = Qr[501] + Qr[1] + Qr[522] + Qr[56] + Qr[523],
        Sj = Qr[200] + Qr[1] + Qr[522] + Qr[56] + Qr[523],
        Mj = Qr[430] + Qr[1] + Qr[522] + Qr[56] + Qr[523],
        Ij = Qr[20] + Qr[1021] + Qr[62] + Qr[189],
        Pj = Qr[1228] + Qr[20] + Qr[1229],
        Cj = Qr[1230] + Qr[105] + Qr[1226],
        Aj = Qr[1104] + Qr[20] + Qr[1107] + Qr[20] + Qr[736],
        Lj = Qr[1104] + Qr[20] + Qr[1107] + Qr[20] + Qr[180],
        Rj = Qr[1104] + Qr[20] + Qr[352] + Qr[20] + Qr[708],
        jj = Qr[1104] + Qr[20] + Qr[352] + Qr[20] + Qr[331],
        Dj = Qr[1231] + Qr[299],
        Nj = Qr[1232] + Qr[151],
        Bj = Qr[1233] + Qr[49] + Qr[217] + Qr[77] + Qr[83] + Qr[613] + Qr[49] + Qr[1234] + Qr[97] + Qr[623],
        $j = Qr[867],
        Fj = Qr[77] + Qr[399] + Qr[97] + Qr[268] + Qr[400] + Qr[97] + Qr[43] + Qr[401] + Qr[49] + Qr[403],
        zj = Qr[1233] + Qr[101] + Qr[207] + Qr[102] + Qr[270] + Qr[97] + Qr[780] + Qr[499] + Qr[65] + Qr[66] + Qr[217] + Qr[409] + Qr[217] + Qr[409] + Qr[217] + Qr[409] + Qr[217] + Qr[77] + Qr[272] + Qr[70],
        Gj = Qr[77] + Qr[399] + Qr[97] + Qr[268] + Qr[400] + Qr[97] + Qr[43] + Qr[401],
        qj = Qr[1233] + Qr[101] + Qr[217] + Qr[102],
        Yj = Qr[1235],
        Hj = Qr[101] + Qr[1233] + Qr[49] + Qr[308] + Qr[613] + Qr[49] + Qr[1236] + Qr[97] + Qr[741] + Qr[66] + Qr[217] + Qr[77] + Qr[342] + Qr[409] + Qr[217] + Qr[409] + Qr[217] + Qr[77] + Qr[342] + Qr[409] + Qr[207] + Qr[70],
        Uj = Qr[77] + Qr[399] + Qr[97] + Qr[268] + Qr[400] + Qr[97] + Qr[43] + Qr[401] + Qr[101] + Qr[426],
        Wj = Qr[1233] + Qr[101] + Qr[207] + Qr[102],
        Vj = Qr[101] + Qr[1233] + Qr[49] + Qr[217] + Qr[77] + Qr[308] + Qr[613] + Qr[49] + Qr[782],
        Xj = Qr[20] + Qr[403],
        Kj = Qr[20] + Qr[1237],
        Jj = Qr[77] + Qr[399] + Qr[97] + Qr[268] + Qr[400] + Qr[97] + Qr[34] + Qr[546] + Qr[62] + Qr[1238],
        Zj = Qr[1239] + Qr[499] + Qr[83] + Qr[151] + Qr[1240] + Qr[1135] + Qr[499] + Qr[1018] + Qr[102] + Qr[1241] + Qr[97] + Qr[1242] + Qr[499] + Qr[261] + Qr[97] + Qr[1241] + Qr[102] + Qr[1241] + Qr[97] + Qr[420] + Qr[1243] + Qr[222] + Qr[49] + Qr[217] + Qr[151] + Qr[49] + Qr[217] + Qr[151] + Qr[49] + Qr[207] + Qr[151] + Qr[1240] + Qr[270] + Qr[97] + Qr[780] + Qr[499] + Qr[65] + Qr[66] + Qr[1244] + Qr[67] + Qr[1244] + Qr[67] + Qr[1244] + Qr[67] + Qr[217] + Qr[77] + Qr[308] + Qr[1245] + Qr[261] + Qr[97] + Qr[496] + Qr[499] + Qr[663] + Qr[151] + Qr[102] + Qr[1239] + Qr[499] + Qr[207] + Qr[151] + Qr[102],
        Qj = Qr[77] + Qr[399] + Qr[97] + Qr[268] + Qr[400] + Qr[97] + Qr[34] + Qr[546] + Qr[62] + Qr[1238] + Qr[77] + Qr[426] + Qr[1246] + Qr[399] + Qr[97] + Qr[268] + Qr[400] + Qr[97] + Qr[34] + Qr[546] + Qr[62] + Qr[1238] + Qr[101] + Qr[426],
        tD = Qr[1239] + Qr[97] + Qr[85] + Qr[499] + Qr[342] + Qr[151] + Qr[102],
        iD = Qr[1239] + Qr[97] + Qr[86] + Qr[499] + Qr[342] + Qr[151] + Qr[102],
        nD = Qr[77] + Qr[399] + Qr[97] + Qr[268] + Qr[400] + Qr[97] + Qr[34] + Qr[546] + Qr[23] + Qr[408],
        eD = Qr[101] + Qr[1233] + Qr[49] + Qr[308] + Qr[613] + Qr[49] + Qr[1236] + Qr[97] + Qr[741] + Qr[66] + Qr[217] + Qr[77] + Qr[342] + Qr[409] + Qr[217] + Qr[409] + Qr[217] + Qr[77] + Qr[342] + Qr[409] + Qr[207] + Qr[1245],
        sD = Qr[20] + Qr[488] + Qr[56] + Qr[594] + Qr[34] + Qr[690],
        rD = Qr[20] + Qr[91] + Qr[56] + Qr[594] + Qr[34] + Qr[690],
        hD = Qr[399] + Qr[97] + Qr[268] + Qr[400] + Qr[97] + Qr[34] + Qr[546] + Qr[23] + Qr[408],
        aD = Qr[20] + Qr[1247],
        oD = Qr[62] + Qr[1248],
        fD = Qr[1164] + Qr[62] + Qr[189],
        uD = Qr[387] + Qr[34] + Qr[386],
        cD = Qr[1249],
        dD = Qr[1250] + Qr[20] + Qr[1251],
        _D = Qr[33] + Qr[38] + Qr[39] + Qr[34] + Qr[442],
        lD = Qr[33] + Qr[38] + Qr[39] + Qr[27] + Qr[385],
        vD = Qr[20] + Qr[68] + Qr[1252],
        bD = Qr[20] + Qr[89] + Qr[34] + Qr[578],
        yD = Qr[1253],
        gD = Qr[754] + Qr[115] + Qr[284],
        mD = Qr[1254] + Qr[115] + Qr[393],
        xD = Qr[20] + Qr[89] + Qr[1252],
        pD = Qr[459] + Qr[20] + Qr[1255] + Qr[20] + Qr[171] + Qr[20] + Qr[1256],
        ED = Qr[459] + Qr[20] + Qr[1134] + Qr[20] + Qr[1255] + Qr[20] + Qr[171] + Qr[20] + Qr[1256],
        wD = Qr[109] + Qr[56] + Qr[183] + Qr[23] + Qr[24] + Qr[1] + Qr[522] + Qr[45] + Qr[458],
        TD = Qr[1063],
        kD = Qr[200] + Qr[23] + Qr[24] + Qr[1] + Qr[522] + Qr[56] + Qr[523],
        OD = Qr[33] + Qr[56] + Qr[183] + Qr[23] + Qr[24] + Qr[1] + Qr[522],
        SD = Qr[9] + Qr[56] + Qr[183] + Qr[23] + Qr[24] + Qr[1] + Qr[522] + Qr[45] + Qr[458],
        MD = Qr[9] + Qr[56] + Qr[1257],
        ID = Qr[1249] + Qr[45] + Qr[46],
        PD = Qr[20] + Qr[1258] + Qr[181] + Qr[162],
        CD = Qr[109] + Qr[56] + Qr[1257],
        AD = Qr[56] + Qr[1257] + Qr[181] + Qr[615],
        LD = Qr[1259],
        RD = Qr[224] + Qr[23] + Qr[149],
        jD = Qr[47] + Qr[56] + Qr[57] + Qr[56] + Qr[1260] + Qr[34] + Qr[1085],
        DD = Qr[462] + Qr[23] + Qr[149],
        ND = Qr[620],
        BD = Qr[20] + Qr[1261],
        $D = Qr[20] + Qr[557] + Qr[23] + Qr[378],
        FD = Qr[1262] + Qr[23] + Qr[149],
        zD = Qr[68] + Qr[45] + Qr[1064] + Qr[23] + Qr[149],
        GD = Qr[1263] + Qr[20] + Qr[1264] + Qr[20] + Qr[537],
        qD = Qr[620] + Qr[23] + Qr[378],
        YD = Qr[20] + Qr[1265],
        HD = Qr[765] + Qr[20] + Qr[1266] + Qr[20] + Qr[382],
        UD = Qr[21] + Qr[27] + Qr[318] + Qr[62] + Qr[88] + Qr[181] + Qr[615],
        WD = Qr[1267],
        VD = Qr[1268],
        XD = Qr[1] + Qr[1269] + Qr[27] + Qr[318] + Qr[181] + Qr[615],
        KD = Qr[224] + Qr[105] + Qr[212],
        JD = Qr[73] + Qr[207] + Qr[56] + Qr[1270],
        ZD = Qr[73] + Qr[27] + Qr[1271],
        QD = Qr[1272],
        tN = Qr[765] + Qr[20] + Qr[1273] + Qr[20] + Qr[382],
        iN = Qr[21] + Qr[34] + Qr[273] + Qr[62] + Qr[88] + Qr[181] + Qr[615],
        nN = Qr[1] + Qr[1269] + Qr[34] + Qr[273] + Qr[181] + Qr[615],
        eN = Qr[21] + Qr[45] + Qr[279] + Qr[62] + Qr[88] + Qr[181] + Qr[615],
        sN = Qr[1] + Qr[1269] + Qr[45] + Qr[279] + Qr[181] + Qr[615],
        rN = Qr[27] + Qr[318] + Qr[384],
        hN = Qr[100] + Qr[56] + Qr[1260],
        aN = Qr[1198] + Qr[45] + Qr[1199] + Qr[40] + Qr[1169],
        oN = Qr[1274],
        fN = Qr[399] + Qr[97] + Qr[45] + Qr[1162] + Qr[27] + Qr[1275],
        uN = Qr[1276] + Qr[1277] + Qr[1278] + Qr[27] + Qr[49] + Qr[207] + Qr[151],
        cN = Qr[272] + Qr[151],
        dN = Qr[1279],
        _N = Qr[33] + Qr[31] + Qr[32] + Qr[1] + Qr[522],
        lN = Qr[1280],
        vN = Qr[1133] + Qr[20] + Qr[1281] + Qr[20] + Qr[1282] + Qr[20] + Qr[1283] + Qr[20] + Qr[1284] + Qr[20] + Qr[1285],
        bN = Qr[61] + Qr[27] + Qr[1286],
        yN = Qr[21] + Qr[1009],
        gN = Qr[59] + Qr[27] + Qr[1286] + Qr[111] + Qr[1287] + Qr[1] + Qr[570] + Qr[13] + Qr[196] + Qr[111] + Qr[559],
        mN = Qr[33] + Qr[1] + Qr[570] + Qr[13] + Qr[196] + Qr[111] + Qr[559],
        xN = Qr[163] + Qr[115] + Qr[295],
        pN = Qr[59] + Qr[27] + Qr[1286],
        EN = Qr[195] + Qr[27] + Qr[1288],
        wN = Qr[857] + Qr[27] + Qr[1275],
        TN = Qr[1289],
        kN = Qr[195] + Qr[27] + Qr[1200],
        ON = Qr[620] + Qr[45] + Qr[1162] + Qr[27] + Qr[1286],
        SN = Qr[0] + Qr[27] + Qr[318] + Qr[62] + Qr[319],
        MN = Qr[1036] + Qr[27] + Qr[1290],
        IN = Qr[355] + Qr[20] + Qr[376],
        PN = Qr[1291] + Qr[34] + Qr[1069] + Qr[43] + Qr[1070],
        CN = Qr[1068] + Qr[56] + Qr[1292] + Qr[1] + Qr[570] + Qr[115] + Qr[157] + Qr[13] + Qr[1205],
        AN = Qr[1293] + Qr[34] + Qr[578],
        LN = Qr[27] + Qr[1286] + Qr[181] + Qr[615],
        RN = Qr[452],
        jN = Qr[1294],
        DN = Qr[1295] + Qr[49] + Qr[232] + Qr[233],
        NN = Qr[49] + Qr[87] + Qr[49],
        BN = Qr[561] + Qr[27] + Qr[1218],
        $N = Qr[462] + Qr[56] + Qr[1296] + Qr[27] + Qr[159],
        FN = Qr[195] + Qr[34] + Qr[1297],
        zN = Qr[1194] + Qr[20] + Qr[1273] + Qr[20] + Qr[1298],
        GN = Qr[26] + Qr[181] + Qr[615] + Qr[27] + Qr[28],
        qN = Qr[1194] + Qr[20] + Qr[1299],
        YN = Qr[220] + Qr[27] + Qr[1218],
        HN = Qr[291] + Qr[27] + Qr[292] + Qr[105] + Qr[1046] + Qr[31] + Qr[432] + Qr[384],
        UN = Qr[316] + Qr[111] + Qr[1300],
        WN = Qr[1194] + Qr[20] + Qr[1273] + Qr[20] + Qr[1301],
        VN = Qr[1302] + Qr[20] + Qr[1298],
        XN = Qr[1068] + Qr[181] + Qr[1303],
        KN = Qr[20] + Qr[1304],
        JN = Qr[20] + Qr[1305] + Qr[27] + Qr[1286],
        ZN = Qr[195] + Qr[27] + Qr[385] + Qr[23] + Qr[149] + Qr[27] + Qr[1200],
        QN = Qr[195] + Qr[27] + Qr[385] + Qr[23] + Qr[149],
        tB = Qr[195] + Qr[1] + Qr[1306] + Qr[23] + Qr[149],
        iB = Qr[224] + Qr[45] + Qr[279],
        nB = Qr[73] + Qr[1307],
        eB = Qr[20] + Qr[1308] + Qr[23] + Qr[1309],
        sB = Qr[195] + Qr[105] + Qr[1310],
        rB = Qr[195] + Qr[40] + Qr[1169],
        hB = Qr[500] + Qr[23] + Qr[439],
        aB = Qr[579] + Qr[34] + Qr[769],
        oB = Qr[1311] + Qr[34] + Qr[769],
        fB = Qr[500] + Qr[43] + Qr[295] + Qr[23] + Qr[439],
        uB = Qr[375] + Qr[20] + Qr[1273] + Qr[20] + Qr[1298],
        cB = Qr[1148],
        dB = Qr[1312],
        _B = Qr[20] + Qr[1313],
        lB = Qr[1314],
        vB = Qr[375] + Qr[20] + Qr[1299],
        bB = Qr[1148] + Qr[181] + Qr[282],
        yB = Qr[375] + Qr[20] + Qr[1273] + Qr[20] + Qr[1301],
        gB = Qr[437] + Qr[20] + Qr[1315] + Qr[20] + Qr[1124] + Qr[20] + Qr[241],
        mB = Qr[1315] + Qr[20] + Qr[437] + Qr[20] + Qr[238] + Qr[20] + Qr[1316],
        xB = Qr[1317],
        pB = Qr[1315] + Qr[20] + Qr[437] + Qr[20] + Qr[238] + Qr[20] + Qr[1318],
        EB = Qr[1319],
        wB = Qr[20] + Qr[996],
        TB = Qr[20] + Qr[129] + Qr[115] + Qr[455],
        kB = Qr[1320] + Qr[20] + Qr[1301],
        OB = Qr[437] + Qr[20] + Qr[1315] + Qr[20] + Qr[1120] + Qr[20] + Qr[241],
        SB = Qr[1321] + Qr[34] + Qr[694] + Qr[227] + Qr[228],
        MB = Qr[1320] + Qr[20] + Qr[1322],
        IB = Qr[1315] + Qr[20] + Qr[437] + Qr[20] + Qr[238],
        PB = Qr[1068] + Qr[105] + Qr[1323] + Qr[34] + Qr[694] + Qr[62] + Qr[88] + Qr[105] + Qr[1324] + Qr[62] + Qr[402],
        CB = Qr[1325],
        AB = Qr[1326],
        LB = Qr[20] + Qr[1327],
        RB = Qr[1328] + Qr[97] + Qr[451],
        jB = Qr[1329] + Qr[97] + Qr[451],
        DB = Qr[1330] + Qr[97] + Qr[451],
        NB = Qr[20] + Qr[205] + Qr[23] + Qr[149],
        BB = Qr[65] + Qr[66] + Qr[217] + Qr[409] + Qr[1331] + Qr[409] + Qr[217] + Qr[409] + Qr[207] + Qr[70],
        $B = Qr[73] + Qr[1332] + Qr[217],
        FB = Qr[195] + Qr[34] + Qr[1333],
        zB = Qr[195] + Qr[105] + Qr[1334],
        GB = Qr[20] + Qr[1335],
        qB = Qr[20] + Qr[1336],
        YB = Qr[163] + Qr[1] + Qr[603] + Qr[27] + Qr[159],
        HB = Qr[1337] + Qr[20] + Qr[1298],
        UB = Qr[1338],
        WB = Qr[1337] + Qr[20] + Qr[1301],
        VB = Qr[1036] + Qr[34] + Qr[1212],
        XB = Qr[147] + Qr[115] + Qr[157] + Qr[115] + Qr[1154],
        KB = Qr[445] + Qr[38] + Qr[755],
        JB = Qr[1339] + Qr[20] + Qr[1340],
        ZB = Qr[1339] + Qr[20] + Qr[597],
        QB = Qr[1341] + Qr[20] + Qr[1342],
        t$ = Qr[399] + Qr[97] + Qr[115] + Qr[1343],
        i$ = Qr[1344] + Qr[20] + Qr[381] + Qr[20] + Qr[117],
        n$ = Qr[1344] + Qr[20] + Qr[381] + Qr[20] + Qr[118],
        e$ = Qr[73] + Qr[1345],
        s$ = Qr[207] + Qr[151] + Qr[49] + Qr[1276] + Qr[1277] + Qr[56] + Qr[562] + Qr[56] + Qr[562] + Qr[56] + Qr[562],
        r$ = Qr[83] + Qr[151] + Qr[49] + Qr[663] + Qr[151],
        h$ = Qr[47] + Qr[181] + Qr[1346],
        a$ = Qr[1347],
        o$ = Qr[263],
        f$ = Qr[1348] + Qr[1349] + Qr[1350],
        u$ = Qr[47] + Qr[115] + Qr[1343] + Qr[27] + Qr[159],
        c$ = Qr[1351] + Qr[1009],
        d$ = Qr[20] + Qr[1352],
        _$ = Qr[1353],
        l$ = Qr[1012],
        v$ = Qr[620] + Qr[115] + Qr[455],
        b$ = Qr[163] + Qr[115] + Qr[1343],
        y$ = Qr[59] + Qr[115] + Qr[455],
        g$ = Qr[1068] + Qr[115] + Qr[1343],
        m$ = Qr[1084] + Qr[115] + Qr[393],
        x$ = Qr[1084] + Qr[56] + Qr[1354],
        p$ = Qr[283] + Qr[38] + Qr[1190],
        E$ = Qr[1068] + Qr[111] + Qr[1355] + Qr[643] + Qr[1356],
        w$ = Qr[622] + Qr[62] + Qr[88] + Qr[227] + Qr[545] + Qr[27] + Qr[28],
        T$ = Qr[1063] + Qr[77] + Qr[220] + Qr[77] + Qr[620],
        k$ = Qr[1063] + Qr[77] + Qr[1357],
        O$ = Qr[1063] + Qr[77] + Qr[220] + Qr[77] + Qr[996],
        S$ = Qr[1063] + Qr[77] + Qr[1358],
        M$ = Qr[1063] + Qr[77] + Qr[1359],
        I$ = Qr[1148] + Qr[77] + Qr[220] + Qr[77] + Qr[620],
        P$ = Qr[1148] + Qr[77] + Qr[1357],
        C$ = Qr[1148] + Qr[77] + Qr[220] + Qr[77] + Qr[996],
        A$ = Qr[451] + Qr[77] + Qr[620],
        L$ = Qr[1360],
        R$ = Qr[451] + Qr[77] + Qr[996],
        j$ = Qr[1361],
        D$ = Qr[1362],
        N$ = Qr[1134] + Qr[20] + Qr[1301],
        B$ = Qr[205] + Qr[77] + Qr[996],
        $$ = Qr[1208] + Qr[77] + Qr[620],
        F$ = Qr[1302] + Qr[20] + Qr[1301],
        z$ = Qr[1208] + Qr[77] + Qr[996],
        G$ = Qr[1108] + Qr[77] + Qr[1071],
        q$ = Qr[346] + Qr[77] + Qr[1090],
        Y$ = Qr[1320] + Qr[20] + Qr[1298],
        H$ = Qr[445] + Qr[77] + Qr[620],
        U$ = Qr[445] + Qr[77] + Qr[1363],
        W$ = Qr[445] + Qr[77] + Qr[996],
        V$ = Qr[1263] + Qr[20] + Qr[536],
        X$ = Qr[564] + Qr[77] + Qr[550],
        K$ = Qr[20] + Qr[456] + Qr[34] + Qr[690],
        J$ = Qr[20] + Qr[33] + Qr[27] + Qr[159] + Qr[105] + Qr[611],
        Z$ = Qr[20] + Qr[33] + Qr[27] + Qr[159] + Qr[1] + Qr[518],
        Q$ = Qr[462] + Qr[227] + Qr[228],
        tF = Qr[20] + Qr[1364] + Qr[181] + Qr[615],
        iF = Qr[20] + Qr[1365] + Qr[1] + Qr[1215] + Qr[181] + Qr[615] + Qr[45] + Qr[458],
        nF = Qr[462] + Qr[181] + Qr[615] + Qr[227] + Qr[228],
        eF = Qr[30] + Qr[1] + Qr[1366],
        sF = Qr[47] + Qr[181] + Qr[615] + Qr[181] + Qr[1367],
        rF = Qr[329] + Qr[181] + Qr[617],
        hF = Qr[459] + Qr[20] + Qr[238] + Qr[20] + Qr[1368],
        aF = Qr[1369],
        oF = Qr[459] + Qr[20] + Qr[238] + Qr[20] + Qr[1370],
        fF = Qr[1371],
        uF = Qr[459] + Qr[20] + Qr[238] + Qr[20] + Qr[1372],
        cF = Qr[1373],
        dF = Qr[21] + Qr[77] + Qr[1374] + Qr[77] + Qr[346],
        _F = Qr[459] + Qr[20] + Qr[238] + Qr[20] + Qr[1375] + Qr[20] + Qr[355],
        lF = Qr[21] + Qr[77] + Qr[346],
        vF = Qr[459] + Qr[20] + Qr[238] + Qr[20] + Qr[1375] + Qr[20] + Qr[330],
        bF = Qr[21] + Qr[77] + Qr[1121],
        yF = Qr[459] + Qr[20] + Qr[238] + Qr[20] + Qr[1375] + Qr[20] + Qr[179],
        gF = Qr[21] + Qr[77] + Qr[201],
        mF = Qr[459] + Qr[20] + Qr[238] + Qr[20] + Qr[1375] + Qr[20] + Qr[1376] + Qr[20] + Qr[355],
        xF = Qr[459] + Qr[20] + Qr[238] + Qr[20] + Qr[437],
        pF = Qr[23] + Qr[1222] + Qr[181] + Qr[615],
        EF = Qr[34] + Qr[694] + Qr[181] + Qr[615],
        wF = Qr[227] + Qr[560] + Qr[181] + Qr[615],
        TF = Qr[111] + Qr[1355] + Qr[643] + Qr[1356] + Qr[181] + Qr[615],
        kF = Qr[56] + Qr[1292] + Qr[1] + Qr[570] + Qr[181] + Qr[615],
        OF = Qr[27] + Qr[1377] + Qr[181] + Qr[615],
        SF = Qr[115] + Qr[1343] + Qr[181] + Qr[615],
        MF = Qr[105] + Qr[1323] + Qr[34] + Qr[694] + Qr[181] + Qr[615],
        IF = Qr[105] + Qr[1323] + Qr[34] + Qr[694] + Qr[181] + Qr[615] + Qr[62] + Qr[88] + Qr[105] + Qr[1324] + Qr[62] + Qr[402],
        PF = Qr[23] + Qr[439] + Qr[181] + Qr[615],
        CF = Qr[47] + Qr[607] + Qr[189],
        AF = Qr[1378],
        LF = Qr[1379],
        RF = Qr[1380],
        jF = Qr[1129] + Qr[38] + Qr[1381],
        DF = Qr[1353] + Qr[45] + Qr[1382],
        NF = Qr[1383] + Qr[20] + Qr[361],
        BF = Qr[1383] + Qr[20] + Qr[367],
        $F = Qr[1383] + Qr[20] + Qr[494],
        FF = Qr[1383] + Qr[20] + Qr[361] + Qr[20] + Qr[366],
        zF = Qr[1383] + Qr[20] + Qr[367] + Qr[20] + Qr[366],
        GF = Qr[1383] + Qr[20] + Qr[362] + Qr[20] + Qr[367],
        qF = Qr[1383] + Qr[20] + Qr[362] + Qr[20] + Qr[361],
        YF = Qr[1383] + Qr[20] + Qr[366] + Qr[20] + Qr[361],
        HF = Qr[1384],
        UF = Qr[1385] + Qr[77] + Qr[1386],
        WF = Qr[1384] + Qr[77] + Qr[638],
        VF = Qr[1384] + Qr[77] + Qr[526],
        XF = Qr[1127] + Qr[20] + Qr[352] + Qr[20] + Qr[1387],
        KF = Qr[1127] + Qr[20] + Qr[352] + Qr[20] + Qr[1387] + Qr[20] + Qr[358],
        JF = Qr[1127] + Qr[20] + Qr[352] + Qr[20] + Qr[1388] + Qr[20] + Qr[1389],
        ZF = Qr[47] + Qr[43] + Qr[228] + Qr[34] + Qr[164],
        QF = Qr[314] + Qr[1] + Qr[2] + Qr[56] + Qr[1390],
        tz = Qr[20] + Qr[477] + Qr[663],
        iz = Qr[47] + Qr[1391] + Qr[773],
        nz = Qr[47] + Qr[1392] + Qr[773],
        ez = Qr[47] + Qr[45] + Qr[345] + Qr[115] + Qr[393],
        sz = Qr[638] + Qr[268] + Qr[773],
        rz = Qr[526] + Qr[268] + Qr[773],
        hz = Qr[251] + Qr[115] + Qr[393],
        az = Qr[1393],
        oz = Qr[1394],
        fz = Qr[20] + Qr[1395],
        uz = Qr[1096] + Qr[45] + Qr[345],
        cz = Qr[314] + Qr[62] + Qr[189],
        dz = Qr[480],
        _z = Qr[20] + Qr[1396],
        lz = Qr[20] + Qr[1397] + Qr[45] + Qr[1115],
        vz = Qr[20] + Qr[651] + Qr[217],
        bz = Qr[257] + Qr[1398],
        yz = Qr[257] + Qr[1399],
        gz = Qr[20] + Qr[1400] + Qr[23] + Qr[516] + Qr[1] + Qr[2] + Qr[56] + Qr[1390],
        mz = Qr[480] + Qr[117],
        xz = Qr[480] + Qr[118],
        pz = Qr[20] + Qr[1401],
        Ez = Qr[20] + Qr[477] + Qr[562],
        wz = Qr[251] + Qr[105] + Qr[1046],
        Tz = Qr[259] + Qr[45] + Qr[345] + Qr[56] + Qr[478],
        kz = Qr[1402],
        Oz = Qr[1293] + Qr[45] + Qr[345] + Qr[56] + Qr[478],
        Sz = Qr[47] + Qr[227] + Qr[1403] + Qr[181] + Qr[1404],
        Mz = Qr[251] + Qr[56] + Qr[478],
        Iz = Qr[480] + Qr[1] + Qr[324],
        Pz = Qr[346] + Qr[1] + Qr[324],
        Cz = Qr[1405],
        Az = Qr[1406],
        Lz = Qr[20] + Qr[605] + Qr[83] + Qr[492],
        Rz = Qr[1407],
        jz = Qr[620] + Qr[38] + Qr[1408],
        Dz = Qr[62] + Qr[1409] + Qr[45] + Qr[1410],
        Nz = Qr[1411],
        Bz = Qr[1412],
        $z = Qr[230],
        Fz = Qr[1413],
        zz = Qr[1414] + Qr[20] + Qr[1415] + Qr[20] + Qr[1416],
        Gz = Qr[734] + Qr[20] + Qr[238] + Qr[20] + Qr[1417],
        qz = Qr[195] + Qr[45] + Qr[1418],
        Yz = Qr[47] + Qr[268] + Qr[773],
        Hz = Qr[1419],
        Uz = Qr[388] + Qr[34] + Qr[1420],
        Wz = Qr[496] + Qr[227] + Qr[228],
        Vz = Qr[20] + Qr[1421],
        Xz = Qr[480] + Qr[83],
        Kz = Qr[355] + Qr[20] + Qr[376] + Qr[20] + Qr[1106],
        Jz = Qr[480] + Qr[207],
        Zz = Qr[1198] + Qr[62] + Qr[1422],
        Qz = Qr[20] + Qr[527] + Qr[62] + Qr[1423] + Qr[40] + Qr[288],
        tG = Qr[195] + Qr[23] + Qr[1424] + Qr[13] + Qr[1425],
        iG = Qr[1426] + Qr[27] + Qr[318],
        nG = Qr[1427],
        eG = Qr[1428] + Qr[181] + Qr[1429],
        sG = Qr[1430],
        rG = Qr[1430] + Qr[117],
        hG = Qr[1431],
        aG = Qr[1430] + Qr[118],
        oG = Qr[195] + Qr[181] + Qr[1432],
        fG = Qr[1293],
        uG = Qr[1107] + Qr[20] + Qr[368],
        cG = Qr[1433],
        dG = Qr[1434],
        _G = Qr[251] + Qr[27] + Qr[1435],
        lG = Qr[251] + Qr[227] + Qr[1436],
        vG = Qr[1437],
        bG = Qr[1438],
        yG = Qr[20] + Qr[1439] + Qr[40] + Qr[1440],
        gG = Qr[1406] + Qr[38] + Qr[349],
        mG = Qr[1441],
        xG = Qr[462] + Qr[27] + Qr[1442],
        pG = Qr[34] + Qr[1443] + Qr[45] + Qr[1410],
        EG = Qr[1234] + Qr[13] + Qr[464] + Qr[34] + Qr[1444],
        wG = Qr[500] + Qr[45] + Qr[1382],
        TG = Qr[20] + Qr[1445],
        kG = Qr[20] + Qr[1446],
        OG = Qr[291] + Qr[27] + Qr[292] + Qr[181] + Qr[196] + Qr[27] + Qr[318],
        SG = Qr[325] + Qr[49] + Qr[81],
        MG = Qr[291] + Qr[27] + Qr[292] + Qr[62] + Qr[88] + Qr[115] + Qr[1447] + Qr[56] + Qr[1075] + Qr[40] + Qr[1076] + Qr[34] + Qr[1448],
        IG = Qr[291] + Qr[27] + Qr[292] + Qr[62] + Qr[88] + Qr[115] + Qr[1447] + Qr[62] + Qr[1449] + Qr[40] + Qr[1076] + Qr[34] + Qr[1448],
        PG = Qr[68] + Qr[1] + Qr[421],
        CG = Qr[195] + Qr[1450],
        AG = Qr[195] + Qr[13] + Qr[1451],
        LG = Qr[195] + Qr[111] + Qr[1452],
        RG = Qr[195] + Qr[268] + Qr[1453],
        jG = Qr[195] + Qr[1] + Qr[1454],
        DG = Qr[195] + Qr[227] + Qr[1455],
        NG = Qr[56] + Qr[57] + Qr[34] + Qr[1085],
        BG = Qr[56] + Qr[1456],
        $G = Qr[268] + Qr[1457],
        FG = Qr[268] + Qr[400],
        zG = Qr[27] + Qr[159] + Qr[384],
        GG = Qr[43] + Qr[228] + Qr[384],
        qG = Qr[45] + Qr[1162] + Qr[384],
        YG = Qr[181] + Qr[182] + Qr[384],
        HG = Qr[23] + Qr[202],
        UG = Qr[181] + Qr[615] + Qr[27] + Qr[28],
        WG = Qr[268] + Qr[400] + Qr[227] + Qr[431],
        VG = Qr[27] + Qr[318] + Qr[62] + Qr[319],
        XG = Qr[115] + Qr[1458] + Qr[45] + Qr[1410],
        KG = Qr[399] + Qr[1459] + Qr[49] + Qr[291] + Qr[49] + Qr[1009] + Qr[272],
        JG = Qr[83] + Qr[77] + Qr[217],
        ZG = Qr[83] + Qr[77] + Qr[275] + Qr[49] + Qr[1113],
        QG = Qr[399] + Qr[1459] + Qr[233] + Qr[56] + Qr[1460] + Qr[49] + Qr[1] + Qr[1461] + Qr[49] + Qr[291] + Qr[49] + Qr[1009] + Qr[272] + Qr[434] + Qr[1] + Qr[310],
        tq = Qr[687] + Qr[1257],
        iq = Qr[1462] + Qr[434] + Qr[1232] + Qr[434] + Qr[1463],
        nq = 0;
    if (t[nl]) {
        var eq = navigator[el],
            sq = /opera/i [Jo](eq),
            rq = !sq && /msie/i [Jo](eq),
            hq = /rv:11.0/i.test(eq),
            aq = /MSIE 10./i [Jo](eq);
        if (/Edge/i [Jo](eq), hq && (rq = !0), /msie\s[6,7,8]/i [Jo](eq)) throw new Error("your browser is not supported");
        var oq = /webkit|khtml/i [Jo](eq),
            fq = !oq && /gecko/i [Jo](eq),
            uq = /firefox\//i [Jo](eq),
            cq = /Chrome\//i.test(eq),
            dq = !cq && /Safari\//i [Jo](eq),
            _q = /Macintosh;/i [Jo](eq),
            lq = /(iPad|iPhone|iPod)/g [Jo](eq),
            vq = /Android/g [Jo](eq),
            bq = /Windows Phone/g [Jo](eq),
            yq = (lq || vq || bq) && sl in t,
            gq = eq[Rd](/AppleWebKit\/([0-9\.]*)/);
        if (gq && gq.length > 1) {
            parseFloat(gq[1])
        }
        vq && parseFloat(eq[Rd](/Android\s([0-9\.]*)/)[1])
    }
    t[kh] || (t[kh] = t[rl] || t[hl] || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(i) {
        return t[al](function() {
            i()
        }, 1e3 / 60)
    }), t[ol] || (t.cancelAnimationFrame = t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || t[fl] || function(i) {
        return t.clearTimeout(i)
    });
    var mq = {
        SELECTION_TOLERANCE: yq ? 7 : 4,
        LABEL_COLOR: ul
    };
    J(mq, {
        FONT_STYLE: {
            get: function() {
                return this[cl] || (this[cl] = dl)
            },
            set: function(t) {
                this[cl] != t && (this[cl] = t, this._fontChanged = !0)
            }
        },
        FONT_SIZE: {
            get: function() {
                return this._fontSize || (this[_l] = 12)
            },
            set: function(t) {
                this._fontSize != t && (this[_l] = t, this[ll] = !0)
            }
        },
        FONT_FAMILY: {
            get: function() {
                return this[vl] || (this[vl] = "Verdana,helvetica,arial,sans-serif")
            },
            set: function(t) {
                this[vl] != t && (this[vl] = t, this[ll] = !0)
            }
        },
        FONT: {
            get: function() {
                return (this[ll] || this[ll] === n) && (this[ll] = !1, this[bl] = this[uo] + Ph + this[yo] + co + this[_o]), this._font
            }
        }
    });
    var xq = function(t) {
        this._jp = [], this._lf = {}, t && this.add(t)
    };
    xq[_h] = {
        _jp: null,
        _lf: null,
        get: function(t) {
            return this.getByIndex(t)
        },
        getById: function(t) {
            return this._lf[t]
        },
        getByIndex: function(t) {
            return this._jp[t]
        },
        forEach: function(t, i, n) {
            return l(this._jp, t, i, n)
        },
        forEachReverse: function(t, i, n) {
            return b(this._jp, t, i, n)
        },
        size: function() {
            return this._jp[nh]
        },
        contains: function(t) {
            return this[yl](t.id)
        },
        containsById: function(t) {
            return this._lf.hasOwnProperty(t)
        },
        setIndex: function(t, i) {
            var n = this._jp.indexOf(t);
            if (0 > n) throw new Error($a + t.id + gl);
            return n == i ? !1 : (this._jp[hh](n, 1), this._jp[hh](i, 0, t), !0)
        },
        setIndexAfter: function(t, i) {
            var n = this._jp[uh](t);
            if (0 > n) throw new Error($a + t.id + gl);
            return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._jp[hh](n, 1), this._jp[hh](i, 0, t), i)
        },
        setIndexBefore: function(t, i) {
            var n = this._jp[uh](t);
            if (0 > n) throw new Error($a + t.id + gl);
            return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._jp.splice(n, 1), this._jp[hh](i, 0, t), i)
        },
        indexOf: function(t) {
            return this._jp.indexOf(t)
        },
        getIndexById: function(t) {
            var i = this.getById(t);
            return i ? this._jp.indexOf(i) : -1
        },
        add: function(t, i) {
            return $(t) ? this._f3(t, i) : this._km(t, i)
        },
        addFirst: function(t) {
            return this.add(t, 0)
        },
        _f3: function(t, i) {
            if (0 == t[nh]) return !1;
            var e = !1,
                s = i >= 0;
            t = t._jp || t;
            for (var r = 0, h = t.length; h > r; r++) {
                var a = t[r];
                null !== a && a !== n && this._km(a, i, !0) && (e = !0, s && i++)
            }
            return e
        },
        _km: function(t, i) {
            var e = t.id;
            return e === n || this[yl](e) ? !1 : (g(this._jp, t, i), this._lf[e] = t, t)
        },
        remove: function(t) {
            return $(t) ? this[ml](t) : t.id ? this._fe(t.id, t) : this[xl](t)
        },
        _my3: function(t) {
            if (0 == t[nh]) return !1;
            var i = !1;
            t = t._jp || t;
            for (var e = 0, s = t[nh]; s > e; e++) {
                var r = t[e];
                if (null !== r && r !== n) {
                    r.id === n && (r = this._lf[r]);
                    var h = r.id;
                    this._fe(h, r, !0) && (i = !0)
                }
            }
            return i
        },
        _fe: function(t, i) {
            return t !== n && this.containsById(t) ? ((null === i || i === n) && (i = this[pl](t)), delete this._lf[t], m(this._jp, i), !0) : !1
        },
        removeById: function(t) {
            var i = this._lf[t];
            return i ? this._fe(t, i) : !1
        },
        set: function(t) {
            if (!t || 0 == t) return this[ru]();
            if (this[ou]() || !$(t)) return this[ru](), this.add(t);
            var i = [],
                n = {},
                e = 0;
            if (l(t, function(t) {
                this._lf[t.id] ? (n[t.id] = t, e++) : i[fh](t)
            }, this), e != this[nh]) {
                var s = [];
                this[ku](function(t) {
                    n[t.id] || s.push(t)
                }, this), s[nh] && this[ml](s)
            }
            return i.length && this._f3(i), !0
        },
        clear: function() {
            return this[ou]() ? !1 : (this._jp.length = 0, this._lf = {}, !0)
        },
        toDatas: function() {
            return this._jp[sh](0)
        },
        isEmpty: function() {
            return 0 == this._jp.length
        },
        valueOf: function() {
            return this._jp[nh]
        },
        clone: function(t) {
            var i = new xq;
            return i.add(t ? y(this._jp) : this[El]()), i
        }
    }, J(xq.prototype, {
        datas: {
            get: function() {
                return this._jp
            }
        },
        random: {
            get: function() {
                return this._jp && this._jp.length ? this._jp[q(this._jp[nh])] : null
            }
        },
        length: {
            get: function() {
                return this._jp ? this._jp[nh] : 0
            }
        }
    });
    var pq = (2 * Math.PI, .5 * Math.PI),
        Eq = function(t, i) {
            i = i[wl]();
            for (var n = rq ? t.firstChild : t[Tl]; n && (1 != n[kl] || n[Ol] && n.tagName[wl]() != i);) n = rq ? n.nextSibling : n.nextElementSibling;
            return n && 1 == n[kl] && n[Ol] && n[Ol][wl]() == i ? n : null
        },
        wq = function(t, i, n) {
            t instanceof wq && (i = t.y, t = t.x, n = t[Yo]), this.set(t, i, n)
        },
        Tq = function(t, i, n, e) {
            var s = t - n,
                r = i - e;
            return Math.sqrt(s * s + r * r)
        };
    wq[_h] = {
        x: 0,
        y: 0,
        rotate: n,
        set: function(t, i, n) {
            this.x = t || 0, this.y = i || 0, this[Yo] = n || 0
        },
        negate: function() {
            this.x = -this.x, this.y = -this.y
        },
        offset: function(t, i) {
            this.x += t, this.y += i
        },
        equals: function(t) {
            return this.x == t.x && this.y == t.y
        },
        distanceTo: function(t) {
            return Tq(this.x, this.y, t.x, t.y)
        },
        toString: function() {
            return Sl + this.x + Ml + this.y + Yh
        },
        clone: function() {
            return new wq(this.x, this.y)
        }
    }, Object[gh](wq.prototype, Il, {
        get: function() {
            return Math[Oo](this.x * this.x + this.y * this.y)
        }
    });
    var kq = function(t, i, e, s) {
        t !== n && this._mm(t, i, e, s)
    };
    kq.prototype = {
        _mw: null,
        _ms: null,
        _mv: null,
        _mu: null,
        _mz: null,
        _my: null,
        _mx: 1,
        _mm: function(t, i, n, e) {
            this._mw = t, this._ms = i, this._mv = n, this._mu = e, t == n ? (this._mz = -1, this._mx = 0, this._my = t) : (this._mz = (i - e) / (t - n), this._my = i - this._mz * t, this._mx = 1), this._kt = Math.atan2(this._mu - this._ms, this._mv - this._mw), this[Pl] = Math.cos(this._kt), this[sa] = Math.sin(this._kt)
        },
        _mxd: function(t) {
            return 0 == this._mx ? Number.NaN : this._mz * t + this._my
        },
        _mxc: function(t) {
            return 0 == this._mz ? Number.NaN : (t - this._my) / this._mz
        },
        _$e: function(t) {
            var i, n, e, s, r, h = t[0],
                a = t[2],
                o = t[4],
                f = t[1],
                u = t[3],
                c = t[5],
                d = this._mz,
                _ = this._my,
                l = this._mx;
            if (0 == l ? (e = Math.sqrt((-d * d * h - d * _) * o + d * d * a * a + 2 * d * _ * a - d * _ * h), s = -d * a + d * h, r = d * o - 2 * d * a + d * h) : (e = Math.sqrt((-f + d * h + _) * c + u * u + (-2 * d * a - 2 * _) * u + (d * o + _) * f + (-d * d * h - d * _) * o + d * d * a * a + 2 * d * _ * a - d * _ * h), s = -u + f + d * a - d * h, r = c - 2 * u + f - d * o + 2 * d * a - d * h), 0 != r) {
                i = (e + s) / r, n = (-e + s) / r;
                var v, b;
                return i >= 0 && 1 >= i && (v = Yi(i, t)), n >= 0 && 1 >= n && (b = Yi(n, t)), v && b ? [v, b] : v ? v : b ? b : void 0
            }
        },
        _3d: function(t, i, n) {
            if (this._mz == t._mz || 0 == this._mx && 0 == t._mx) return null;
            var e, s;
            if (e = 0 == this._mx ? this._my : 0 == t._mx ? t._my : (t._my - this._my) / (this._mz - t._mz), s = 0 == this._mz ? this._my : 0 == t._mz ? t._my : this._mx ? this._mz * e + this._my : t._mz * e + t._my, !i) return {
                x: e,
                y: s
            };
            var r, h, a;
            if (n) r = -i / 2, h = -r;
            else {
                r = -Tq(this._mw, this._ms, e, s), h = Tq(this._mv, this._mu, e, s);
                var o = -r + h;
                if (o > i) {
                    var f = i / o;
                    r *= f, h *= f
                } else a = (i - o) / 2
            }
            var u = this._6i(e, s, r),
                c = this._6i(e, s, h);
            return a && (u._rest = a, c._rest = a), [u, c]
        },
        _6i: function(t, i, n) {
            return 0 == this._mx ? {
                x: t,
                y: i + n
            } : {
                x: t + n * this[Pl],
                y: i + n * this[sa]
            }
        }
    };
    var Oq = function(t, i) {
        this[Oa] = t, this[Ja] = i
    };
    Oq.prototype = {
        width: 0,
        height: 0,
        isEmpty: function() {
            return this[Oa] <= 0 || this[Ja] <= 0
        },
        clone: function() {
            return new Oq(this[Oa], this.height)
        },
        toString: function() {
            return Cl + this.width + Ml + this[Ja] + Yh
        }
    };
    var Sq = function(t, i, e, s) {
        t instanceof Object && !D(t) && (i = t.y, e = t[Oa], s = t[Ja], t = t.x), e === n && (e = -1), s === n && (s = -1), this.x = t || 0, this.y = i || 0, this[Oa] = e, this.height = s
    };
    Sq[_h] = {
        x: 0,
        y: 0,
        width: -1,
        height: -1,
        setByRect: function(t) {
            this.x = t.x || 0, this.y = t.y || 0, this.width = t[Oa] || 0, this[Ja] = t[Ja] || 0
        },
        set: function(t, i, n, e) {
            this.x = t || 0, this.y = i || 0, this[Oa] = n || 0, this[Ja] = e || 0
        },
        offset: function(t, i) {
            return this.x += t, this.y += i, this
        },
        contains: function(t, i, n, e) {
            if (1 == arguments[nh]) {
                if (ch == typeof t && fi(t)) return this[Sd](t.x, t.y, t.width, t[Ja]);
                throw {
                    message: Al
                }
            }
            return 2 == arguments.length ? t >= this.x && t <= this.x + this[Oa] && i >= this.y && i <= this.y + this.height : ai(this.x, this.y, this.width, this[Ja], t, i, n || 0, e || 0)
        },
        intersectsPoint: function(t, i, n) {
            return this[Oa] <= 0 && this.height <= 0 ? !1 : n ? this[Ll](t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this[Oa] && i >= this.y && i <= this.y + this[Ja]
        },
        intersectsRect: function(t, i, n, e) {
            return ri(this.x, this.y, this.width, this[Ja], t, i, n, e)
        },
        intersects: function(t, i) {
            return D(t[Oa]) ? this[Ll](t.x, t.y, t.width, t[Ja]) : this[Lo](t, i)
        },
        intersection: function(t, i, n, e) {
            var s = this.x,
                r = this.y,
                h = s;
            h += this.width;
            var a = r;
            a += this[Ja];
            var o = t;
            o += n;
            var f = i;
            return f += e, t > s && (s = t), i > r && (r = i), h > o && (h = o), a > f && (a = f), h -= s, a -= r, 0 > h || 0 > a ? null : new Sq(s, r, h, a)
        },
        addPoint: function(t) {
            this.add(t.x, t.y)
        },
        add: function(t, i) {
            if (D(t[Oa])) return this[Rl](t.x, t.y, t.width, t[Ja]);
            if (D(t.x) && (i = t.y, t = t.x), this.width < 0 || this[Ja] < 0) return this.x = t, this.y = i, void(this[Oa] = this[Ja] = 0);
            var n = this.x,
                e = this.y,
                s = this.width,
                r = this.height;
            s += n, r += e, n > t && (n = t), e > i && (e = i), t > s && (s = t), i > r && (r = i), s -= n, r -= e, s > Number[jl] && (s = Number[jl]), r > Number.MAX_VALUE && (r = Number.MAX_VALUE), this.set(n, e, s, r)
        },
        addRect: function(t, i, n, e) {
            var s = this[Oa],
                r = this.height;
            (0 > s || 0 > r) && this.set(t, i, n, e);
            var h = n,
                a = e;
            if (!(0 > h || 0 > a)) {
                var o = this.x,
                    f = this.y;
                s += o, r += f;
                var u = t,
                    c = i;
                h += u, a += c, o > u && (o = u), f > c && (f = c), h > s && (s = h), a > r && (r = a), s -= o, r -= f, s > Number[jl] && (s = Number[jl]), r > Number[jl] && (r = Number[jl]), this.set(o, f, s, r)
            }
        },
        shrink: function(t, i, n, e) {
            return D(t) ? 1 == arguments.length ? e = i = n = t || 0 : 2 == arguments[nh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[La] || 0, n = t[ra] || 0, e = t[ha] || 0, t = t.top || 0), this.x += i, this.y += t, this[Oa] -= i + e, this[Ja] -= t + n, this
        },
        grow: function(t, i, n, e) {
            return D(t) ? 1 == arguments[nh] ? e = i = n = t || 0 : 2 == arguments.length ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[La] || 0, n = t[ra] || 0, e = t.right || 0, t = t.top || 0), this.x -= i, this.y -= t, this[Oa] += i + e, this[Ja] += t + n, this
        },
        scale: function(t) {
            return this.x *= t, this.y *= t, this[Oa] *= t, this.height *= t, this
        },
        isEmpty: function() {
            return this[Oa] <= 0 && this[Ja] <= 0
        },
        toString: function() {
            return this.x + Dl + this.y + Dl + this.width + Dl + this[Ja]
        },
        union: function(t) {
            var i = this.width,
                n = this.height;
            if (0 > i || 0 > n) return new Sq(t.x, t.y, t.width, t[Ja]);
            var e = t.width,
                s = t[Ja];
            if (0 > e || 0 > s) return new Sq(this.x, this.y, this.width, this[Ja]);
            var r = this.x,
                h = this.y;
            i += r, n += h;
            var a = t.x,
                o = t.y;
            return e += a, s += o, r > a && (r = a), h > o && (h = o), e > i && (i = e), s > n && (n = s), i -= r, n -= h, i > Number[jl] && (i = Number[jl]), n > Number[jl] && (n = Number.MAX_VALUE), new Sq(r, h, i, n)
        },
        clear: function() {
            this.set(0, 0, -1, -1)
        },
        equals: function(t) {
            return t && this.x == t.x && this.y == t.y && this[Oa] == t[Oa] && this.height == t[Ja]
        },
        clone: function(t, i) {
            return new Sq(this.x + (t || 0), this.y + (i || 0), this.width, this.height)
        },
        toArray: function() {
            return [this.x, this.y, this.width, this.height]
        },
        getIntersectionPoint: function(t, i, n, e) {
            return si(this, t, i, n, e)
        }
    }, E(Sq, Oq), Sq[Hu] = function(t, i) {
        return t == i || t && i && t.x == i.x && t.y == i.y && t.width == i[Oa] && t[Ja] == i[Ja]
    }, J(Sq[_h], {
        left: {
            get: function() {
                return this.x
            }
        },
        top: {
            get: function() {
                return this.y
            }
        },
        bottom: {
            get: function() {
                return this.y + this.height
            }
        },
        right: {
            get: function() {
                return this.x + this.width
            }
        },
        cx: {
            get: function() {
                return this.x + this.width / 2
            }
        },
        cy: {
            get: function() {
                return this.y + this[Ja] / 2
            }
        },
        center: {
            get: function() {
                return new wq(this.cx, this.cy)
            }
        }
    }), Sq[Nl] = ri, Sq[Bl] = oi, Sq[Lo] = hi;
    var Mq = function(t, i, n, e) {
        1 == arguments[nh] ? i = n = e = t : 2 == arguments[nh] && (n = t, e = i), this.set(t, i, n, e)
    };
    Mq[_h] = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        set: function(t, i, n, e) {
            this.top = t || 0, this.left = i || 0, this.bottom = n || 0, this.right = e || 0
        },
        clone: function() {
            return new Mq(this.top, this[La], this.bottom, this[ha])
        },
        equals: function(t) {
            return t && this.top == t.top && this[ra] == t.bottom && this[La] == t[La] && this[ha] == t[ha]
        }
    };
    var Iq = function(t, i) {
        this.horizontalPosition = t, this[$l] = i
    };
    Iq.prototype = {
        verticalPosition: !1,
        horizontalPosition: !1,
        toString: function() {
            return (this[ua] || "") + (this.verticalPosition || "")
        }
    }, K(Iq[_h], Fl, {
        get: function() {
            return (this[ua] || "") + (this.verticalPosition || "")
        }
    });
    var Pq = zl,
        Cq = Gl,
        Aq = ql,
        Lq = $u,
        Rq = Yl,
        jq = Hl;
    Iq[Ul] = new Iq(Pq, Lq), Iq[Wl] = new Iq(Pq, Rq), Iq.LEFT_BOTTOM = new Iq(Pq, jq), Iq[Vl] = new Iq(Cq, Lq), Iq.CENTER_MIDDLE = new Iq(Cq, Rq), Iq.CENTER_BOTTOM = new Iq(Cq, jq), Iq.RIGHT_TOP = new Iq(Aq, Lq), Iq[Xl] = new Iq(Aq, Rq), Iq[Kl] = new Iq(Aq, jq);
    var Dq = [Iq[Ul], Iq.LEFT_MIDDLE, Iq[Jl], Iq.CENTER_TOP, Iq[Zl], Iq.CENTER_BOTTOM, Iq[Ql], Iq[Xl], Iq[Kl]];
    K(Iq, Fh, {
        get: function() {
            return Dq[q(Dq[nh])]
        }
    }), Iq[fa] = function(t) {
        for (var i in Iq) {
            var n = Iq[i];
            if (n && Fh != i && n instanceof Iq && n.toString() == t) return n
        }
        throw new Error("Position not be supported - " + t)
    };
    var Nq = function(t, i, n, e, s) {
        this.set(t, i, n, e), this[tv] = s
    };
    Nq.prototype = {
        radius: 0,
        classify: function(t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
        },
        intersectsRect: function(t, i, n, e) {
            if (T(this, Nq, Ll, arguments) === !1) return !1;
            var s = this.x,
                r = this.y,
                h = s + this[Oa],
                a = r + this[Ja],
                o = 2 * radius,
                f = 2 * radius,
                u = Math.min(this[Oa], Math.abs(o)) / 2,
                c = Math.min(this.height, Math.abs(f)) / 2,
                d = this[iv](t, s, h, u),
                _ = this[iv](t + n, s, h, u),
                l = this[iv](i, r, a, c),
                v = this.classify(i + e, r, a, c);
            return 2 == d || 2 == _ || 2 == l || 2 == v ? !0 : 2 > d && _ > 2 || 2 > l && v > 2 ? !0 : (t = 1 == _ ? t = t + n - (s + u) : t -= h - u, i = 1 == v ? i = i + e - (r + c) : i -= a - c, t /= u, i /= c, 1 >= t * t + i * i)
        },
        intersectsPoint: function(t, i) {
            if (T(this, Nq, Lo, arguments) === !1) return !1;
            var n = this.x,
                e = this.y,
                s = n + this[Oa],
                r = e + this[Ja];
            if (n > t || e > i || t >= s || i >= r) return !1;
            var h = 2 * radius,
                a = 2 * radius,
                o = Math.min(this[Oa], Math.abs(h)) / 2,
                f = Math.min(this.height, Math.abs(a)) / 2;
            return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = r - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i)
        },
        clone: function() {
            return new Nq(this.x, this.y, this[Oa], this[Ja], this[tv])
        }
    }, E(Nq, Sq);
    var Bq = function(t, i, n, e) {
        this[gf] = t, this[qo] = i, this[nv] = n, this[Dc] = e
    };
    Bq[_h] = {
        source: null,
        type: null,
        kind: null,
        value: null,
        toString: function() {
            return ev + this[gf] + sv + this[qo] + rv + this[nv]
        }
    };
    var $q = function(t, i, n, e, s) {
        this[gf] = t, this[nv] = i, this[hv] = e, this.value = n, this[av] = s
    };
    $q[_h] = {
        type: ov,
        propertyType: null,
        toString: function() {
            return ev + this[gf] + sv + this.type + fv + this[nv] + uv + this[hv] + cv + this[Dc]
        }
    }, E($q, Bq), K($q.prototype, dv, {
        get: function() {
            return this[nv]
        },
        set: function(t) {
            this.kind = t
        }
    });
    var Fq = function(t, i, n) {
        this[gf] = t, this.oldValue = t.parent, this.value = i, this[_v] = n, this.oldValue && (this.oldIndex = this[hv].getChildIndex(t))
    };
    Fq[_h] = {
        kind: Vu
    }, E(Fq, $q);
    var zq = function(t, i) {
        this[gf] = t, this[Dc] = i
    };
    zq.prototype.kind = lv, E(zq, $q);
    var Gq = function(t, i) {
        this.source = t, this[Dc] = i
    };
    Gq[_h][nv] = vv, E(Gq, $q);
    var qq = function(t, i, n, e) {
        this[gf] = i, this[hv] = n, this[Dc] = e, this[Vu] = t, this.child = i, this.oldIndex = n, this[_v] = e
    };
    qq.prototype[nv] = bv, E(qq, $q);
    var Yq = function() {};
    Yq.prototype = {
        listener: null,
        beforeEvent: function(t) {
            return null != this.listener && this.listener[xh] ? this[yv].beforeEvent(t) : !0
        },
        onEvent: function(t) {
            null != this.listener && this[yv].onEvent && this.listener[gv](t)
        }
    };
    var Hq = function() {
            w(this, Hq, arguments), this[mv] = {}, this[xv] = []
        },
        Uq = function(t, i) {
            this[yv] = t, this[pv] = i, t instanceof Function ? this[gv] = t : (this[gv] = t[gv], this[xh] = t[xh]), this[Hu] = function(t) {
                return t && this[yv] == t[yv] && this[pv] == t[pv]
            }
        };
    Uq[_h] = {
        equals: function(t) {
            return t && this[yv] == t.listener && this[pv] == t.scope
        },
        destroy: function() {
            delete this[pv], delete this[yv]
        }
    }, Hq[_h] = {
        listeners: null,
        _mye: function() {
            return this[xv] && this.listeners[nh] > 0
        },
        _7f: function(t, i) {
            return t instanceof Hq ? t : new Uq(t, i)
        },
        _8z: function(t, i) {
            if (t instanceof Hq) return this[xv][uh](t);
            for (var n = this[xv], e = 0, s = n[nh]; s > e; e++) {
                var r = n[e];
                if (r[yv] == t && r[pv] == i) return e
            }
            return -1
        },
        contains: function(t, i) {
            return this._8z(t, i) >= 0
        },
        addListener: function(t, i) {
            return this.contains(t, i) ? !1 : void this[xv][fh](this._7f(t, i))
        },
        removeListener: function(t, i) {
            var n = this._8z(t, i);
            n >= 0 && this[xv][hh](n, 1)
        },
        on: function(t, i) {
            this[X_](t, i)
        },
        un: function(t, i, n) {
            this.removeListener(t, i, n)
        },
        onEvent: function(t) {
            return this[xv] ? void l(this[xv], function(i) {
                i[gv] && (i.scope ? i[gv][ih](i[pv], t) : i[gv](t))
            }, this) : !1
        },
        beforeEvent: function(t) {
            return this[xv] ? l(this.listeners, function(i) {
                return i[xh] ? i.scope ? i[xh][ih](i[pv], t) : i[xh](t) : !0
            }, this) : !0
        },
        _dy: function(t) {
            return this[xh](t) === !1 ? !1 : (this[gv](t), !0)
        },
        clear: function() {
            this[xv] = []
        },
        destroy: function() {
            this.clear()
        }
    }, E(Hq, Yq);
    var Wq = {
            onEvent: function() {},
            beforeEvent: function() {}
        },
        Vq = function(t, i, n, e, s) {
            this[gf] = t, this[qo] = Ev, this[nv] = i, this.data = n, this[wv] = e, this[Tv] = s
        };
    Vq[_h] = {
        index: -1,
        oldIndex: -1,
        toString: function() {
            return ev + this.source + sv + this[qo] + rv + this.kind + kv + this.data + Ov + this.index + Sv + this[Tv]
        }
    }, E(Vq, Bq), Vq[Mv] = Iv, Vq[Pv] = ah, Vq[Cv] = ru, Vq[Av] = Lv;
    var Xq = function() {
        this.id = ++nq, this[Rv] = {}
    };
    Xq[_h] = {
        _mx6: null,
        id: null,
        get: function(t) {
            return this._mx6[t]
        },
        set: function(t, i) {
            var n = this.get(t);
            if (n === i) return !1;
            var e = new $q(this, t, i, n);
            return e[av] = RY[zc], this[jv](t, i, e, this[Rv])
        },
        _my0: function(t, i, e, s) {
            return this.beforeEvent(e) === !1 ? !1 : (s || (s = this._mx6), i === n ? delete s[t] : s[t] = i, this[gv](e), !0)
        },
        remove: function(t) {
            this.set(t, null)
        },
        valueOf: function() {
            return this.id
        },
        toString: function() {
            return this.id
        },
        _d5: function(t, i) {
            if (i === n && (i = -1), this == t || t == this._jd) return !1;
            if (t && this == t._jd && !t._d5(null)) return !1;
            var e = new Fq(this, t, i);
            if (!this[xh](e)) return !1;
            var s, r, h = this._jd;
            return t && (s = new zq(t, this), !t[xh](s)) ? !1 : null == h || (r = new Gq(h, this), h[xh](r)) ? (this._jd = t, null != t && di(t, this, i), null != h && _i(h, this), this[gv](e), null != t && t.onEvent(s), null != h && h[gv](r), this[Dv](h, t), !0) : !1
        },
        addChild: function(t, i) {
            var n = t._d5(this, i);
            return n && this[ca](t, i), n
        },
        removeChild: function(t) {
            if (!this._f5 || !this._f5[Sd](t)) return !1;
            var i = t._d5(null);
            return this[Nv](t), i
        },
        toChildren: function() {
            return this._f5 ? this._f5[El]() : null
        },
        clearChildren: function() {
            if (this._f5 && this._f5[nh]) {
                var t = this[Bv]();
                l(t, function(t) {
                    t._d5(null)
                }, this), this[$v](t)
            }
        },
        forEachChild: function(t, i) {
            return this[th]() ? this._f5[ku](t, i) : !1
        },
        onChildAdd: function() {},
        onChildRemove: function() {},
        onChildrenClear: function() {},
        onParentChanged: function() {},
        getChildIndex: function(t) {
            return this._f5 && this._f5[nh] ? this._f5[uh](t) : -1
        },
        setChildIndex: function(t, i) {
            if (!this._f5 || !this._f5[nh]) return !1;
            var n = this._f5[uh](t);
            if (0 > n || n == i) return !1;
            var e = new qq(this, t, n, i);
            return this[xh](e) === !1 ? !1 : (this._f5[ah](t) && this._f5.add(t, i), this[gv](e), !0)
        },
        hasChildren: function() {
            return this._f5 && this._f5.length > 0
        },
        getChildAt: function(t) {
            return null == this._f5 ? null : this._f5._jp[t]
        },
        isDescendantOf: function(t) {
            if (!t[th]()) return !1;
            for (var i = this[Vu]; null != i;) {
                if (t == i) return !0;
                i = i[Vu]
            }
            return !1
        },
        firePropertyChangeEvent: function(t, i, n, e) {
            this.onEvent(new $q(this, t, i, n, e))
        }
    }, E(Xq, Yq), J(Xq.prototype, {
        childrenCount: {
            get: function() {
                return this._f5 ? this._f5[nh] : 0
            }
        },
        children: {
            get: function() {
                return this._f5 || (this._f5 = new xq), this._f5
            }
        },
        parent: {
            get: function() {
                return this._jd
            },
            set: function(t) {
                this._d5(t, -1)
            }
        },
        properties: {
            get: function() {
                return this[Rv]
            },
            set: function(t) {
                this._mx6 != t && (this[Rv] = t)
            }
        }
    });
    var Kq = function() {
        this._jp = [], this._lf = {}, this._1d = new Hq
    };
    Kq.prototype = {
        beforeEvent: function(t) {
            return null != this._1d && this._1d[xh] ? this._1d[xh](t) : !0
        },
        onEvent: function(t) {
            return this._1d instanceof Function ? void this._1d(t) : void(null != this._1d && this._1d[gv] && this._1d[gv](t))
        },
        _1d: null,
        setIndex: function(t, i) {
            if (!this[Sd](t)) throw new Error($a + t[Fv]() + gl);
            var n = this.indexOf(t);
            if (n == i) return !1;
            var e = new Vq(this, Vq[Av], t, i, n);
            return this[xh](e) === !1 ? !1 : (this._jp.remove(t) >= 0 && this._jp.add(i, t), this[gv](e), !0)
        },
        _f3: function(t, i) {
            if (0 == t[nh]) return !1;
            var e = !1,
                s = i >= 0,
                r = new Vq(this, Vq[Mv], t, i);
            if (this[xh](r) === !1) return !1;
            var h = [];
            t = t._jp || t;
            for (var a = 0, o = t.length; o > a; a++) {
                var f = t[a];
                null !== f && f !== n && this._km(f, i, !0) && (h.push(f), e = !0, s && i++)
            }
            return r[$o] = h, this[gv](r), e
        },
        _km: function(t, i, n) {
            if (this[zv](t) === !1) return !1;
            if (n) return T(this, Kq, Gv, arguments);
            var e = new Vq(this, Vq.KIND_ADD, t, i);
            return this[xh](e) === !1 ? !1 : T(this, Kq, Gv, arguments) ? (this._kr(t, e), t) : !1
        },
        _kr: function(t, i) {
            this[gv](i)
        },
        _my3: function(t) {
            if (0 == t[nh]) return !1;
            var i = new Vq(this, Vq[Pv], t);
            if (this[xh](i) === !1) return !1;
            var e = [],
                s = !1;
            t = t._jp || t;
            for (var r = 0, h = t[nh]; h > r; r++) {
                var a = t[r];
                if (null !== a && a !== n) {
                    var o = a.id || a;
                    a.id === n && (a = null), this._fe(o, a, !0) && (e[fh](a), s = !0)
                }
            }
            return i[$o] = e, this[gv](i), s
        },
        _fe: function(t, i, n) {
            if (n) return T(this, Kq, qv, arguments);
            var e = new Vq(this, Vq[Pv], i);
            return this.beforeEvent(e) === !1 ? !1 : T(this, Kq, qv, arguments) ? (this.onEvent(e), !0) : !1
        },
        clear: function() {
            if (this[ou]()) return !1;
            var t = new Vq(this, Vq[Cv], this[El]());
            return this[xh](t) === !1 ? !1 : T(this, Kq, ru) ? (this.onEvent(t), !0) : !1
        },
        accept: function(t) {
            return this.filter && this.filter(t) === !1 ? !1 : !0
        }
    }, E(Kq, xq), K(Kq[_h], Yv, {
        get: function() {
            return this._1d
        }
    });
    var Jq = function() {
        w(this, Jq, arguments), this.selectionChangeDispatcher = new Hq, this._selectionModel = new Zq(this), this._selectionModel._1d = this.selectionChangeDispatcher, this.dataChangeDispatcher = new Hq, this.dataChangeDispatcher[X_]({
            beforeEvent: this[Hv],
            onEvent: this.onDataPropertyChanged
        }, this), this[Uv] = new Hq, this[Wv] = new Hq, this[Vv] = new xq;
        var t = this;
        this[Vv][ac] = function(i, n) {
            if (!t[Vv][Sd](i)) throw new Error($a + i.id + gl);
            var e = t.$roots._jp[uh](i);
            if (e == n) return !1;
            t[Vv]._jp[hh](e, 1), t[Vv]._jp[hh](n, 0, i), t._myqIndexFlag = !0;
            var s = new qq(t, i, e, n);
            return t._1x(s), !0
        }
    };
    Jq[_h] = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _kr: function(t, i) {
            t.listener = this.dataChangeDispatcher, t.parent || this.$roots.add(t), this[gv](i)
        },
        _fe: function(t, i) {
            if (T(this, Jq, qv, arguments)) {
                if (i instanceof $U) i[Xv]();
                else if (i instanceof FU) {
                    var n = i[Kv]();
                    this[ah](n)
                }
                var e = i.parent;
                return null == e ? this[Vv][ah](i) : (e.removeChild(i), e[Jv] = !0), i[th]() && this[ah](i.toChildren()), i[yv] = null, !0
            }
            return !1
        },
        _5e: function(t) {
            var i = t[gf];
            this[Sd](i) && (null == i[Vu] ? this.$roots.add(i) : null == t[hv] && this[Vv].remove(i), this[Uv][gv](t))
        },
        _1x: function(t) {
            this[Wv][gv](t)
        },
        beforeDataPropertyChange: function(t) {
            return t instanceof Fq ? this[Uv][xh](t) : !0
        },
        onDataPropertyChanged: function(t) {
            return t instanceof Fq ? (this[Zv] = !0, t[gf][Zv] = !0, void this._5e(t)) : void(t instanceof qq && (this[Zv] = !0, t.source[Zv] = !0, this._1x(t)))
        },
        toRoots: function() {
            return this[Vv][El]()
        },
        _ex: function(t) {
            var i, n = t._jd;
            i = n ? n._f5 : this[Vv];
            var e = i[uh](t);
            if (0 > e) throw new Error(Qv + t + "' not exist in the box");
            return 0 == e ? n : i[tb](e - 1)
        },
        _f0: function(t) {
            var i, n = t._jd;
            i = n ? n._f5 : this[Vv];
            var e = i.indexOf(t);
            if (0 > e) throw new Error(Qv + t + "' not exist in the box");
            return e == i[nh] - 1 ? n ? this._f0(n) : null : i[tb](e + 1)
        },
        forEachByDepthFirst: function(t, i, n) {
            return this.$roots[nh] ? r(this[Vv], t, i, n) : !1
        },
        forEachByDepthFirstReverse: function(t, i, n) {
            return this[Vv][nh] ? o(this.$roots, t, i, n) : !1
        },
        forEachByBreadthFirst: function(t, i) {
            return this.$roots.length ? c(this.$roots, t, i) : !1
        },
        forEachByBreadthFirstReverse: function(t, i) {
            return this[Vv][nh] ? d(this[Vv], t, i) : !1
        },
        clear: function() {
            return T(this, Jq, ru) ? (this[Vv][ru](), this.selectionModel[ru](), !0) : !1
        }
    }, E(Jq, Kq), J(Jq[_h], {
        selectionModel: {
            get: function() {
                return this[ib]
            }
        },
        roots: {
            get: function() {
                return this[Vv]
            }
        }
    });
    var Zq = function(t) {
        w(this, Zq), this.box = t, this[nb] = {
            onEvent: function(t) {
                Vq.KIND_REMOVE == t.kind ? null != t[$o] ? this[ah](t[$o]) : null != t.datas && this.remove(t[V_]) : Vq.KIND_CLEAR == t[nv] && this[ru]()
            }
        }, this.box.listChangeDispatcher[X_](this[nb], this)
    };
    Zq.prototype = {
        box: null,
        isSelected: function(t) {
            return this.containsById(t.id || t)
        },
        select: function(t) {
            return this.add(t)
        },
        unselect: function(t) {
            return this.remove(t)
        },
        reverseSelect: function(t) {
            return this[Sd](t) ? this.remove(t) : this.add(t)
        },
        accept: function(t) {
            return this.box.contains(t)
        }
    }, E(Zq, Kq);
    var Qq = null,
        tY = null,
        iY = function() {
            if (!i[ro]) return function(t) {
                return t
            };
            var t = i.createElement(jd),
                e = t[ya],
                s = {};
            return function(t) {
                if (s[t]) return s[t];
                var i = li(t);
                return e[i] !== n || tY && e[i = li(tY + i)] !== n ? (s[t] = i, i) : t
            }
        }(),
        nY = {};
    ! function() {
        if (!i.head) return !1;
        for (var e = i.head, s = "Webkit Moz O ms Khtml" [Ch](Ph), r = 0; r < s[nh]; r++)
            if (e.style[s[r] + eb] !== n) {
                tY = la + s[r].toLowerCase() + la;
                break
            }
        var h = i[ro](ya);
        t.createPopup || h[Wu](i[sb]("")), h[qo] = rb, h.id = hb, e[Wu](h), Qq = h[ab];
        var a, o;
        for (var f in nY) {
            var u = nY[f];
            a = f, o = "";
            for (var c in u) o += iY(c) + ga + u[c] + ob;
            mi(a, o)
        }
    }();
    var eY = function(t, i, n, e, s) {
            if (s) {
                var r = function(t) {
                    r.handle[ih](r.scope, t)
                };
                return r.scope = s, r[fb] = n, t[ub](i, r, e), r
            }
            return t[ub](i, n, e), n
        },
        sY = function(t, i, n) {
            t[cb](i, n)
        };
    if (mq[db] = 200, mq.LONG_PRESS_INTERVAL = 800, mq.DELAY_CLICK = !0, t[nl] && navigator[el]) {
        var rY, hY = /mobile|tablet|ip(ad|hone|od)|android/i,
            aY = sl in t,
            oY = aY && hY.test(navigator.userAgent);
        if (oY) rY = _b;
        else {
            var fY = lb in t ? "mousewheel" : vb;
            rY = bb + fY, aY && (rY += yb)
        }
        rY = rY[Ch](/[\s,]+/);
        var uY = function(i) {
                return t.TouchEvent && i instanceof t[gb]
            },
            cY = function() {
                return mq[db]
            },
            dY = function() {
                return mq.LONG_PRESS_INTERVAL
            },
            F = function(t) {
                t[Dh] ? t[Dh]() : t[Nh] = !1
            },
            z = function(t) {
                t[Bh] && t[Bh](), t[$h] = !0
            },
            G = function(t) {
                F(t), z(t)
            },
            _Y = function(t) {
                return t[mb] || t[Nh] === !1
            },
            lY = function(t) {
                mY[xb] && mY._mxurrentItem[pb](t)
            },
            vY = function(t) {
                if (mY[xb]) {
                    var i = mY[xb];
                    i[Eb](t), bY(null)
                }
            },
            bY = function(t) {
                mY[xb] != t && (mY[xb] && (mY._mxurrentItem[wb] = !1), mY[xb] = t)
            },
            yY = function(i, n) {
                rY.forEach(function(t) {
                    i[ub](t, n, !1)
                }), yq || mY[Tb] || (mY[Tb] = !0, t[ub](kb, lY, !0), t[ub](Ob, vY, !0))
            },
            gY = function(t, i) {
                rY[ku](function(n) {
                    t[cb](n, i, !1)
                })
            };
        wi[_h] = {
            _install: function() {
                this[Sb] || (this[Sb] = function(t) {
                    this[Y_](t)
                }[Th](this), yY(this._li, this.__mzction))
            },
            _uninstall: function() {
                this[Sb] && gY(this._li, this[Sb])
            },
            _mzction: function(t) {
                t = this[Mb](t);
                var i = t[qo];
                this[Ib](t, i) === !1 && this[Pb](t, Cb + i)
            },
            _mxancelLongPressTimer: function() {
                this.__longPressTimer && (clearTimeout(this[Ab]), this[Ab] = null)
            },
            __kxLongPress: function(t) {
                this[Lb] || (this.__onLongPressFunction = function() {
                    this[Rb] && (this[jb] = !0, this[Rb][Db] ? this[Pb](this[Rb], Nb) : this._onEvent(this[Rb], Bb))
                }.bind(this)), this._mxancelLongPressTimer(), this[Ab] = setTimeout(this.__onLongPressFunction, dY(t))
            },
            __fixTouchEvent: function(t) {
                for (var i, n, e = 0, s = 0, r = t[Qh].length, h = 0; r > h;) {
                    var a = t[Qh][h++],
                        o = a[Ma],
                        f = a[Ia];
                    if (2 == h) {
                        var u = n[0] - o,
                            c = n[1] - f;
                        i = Math.sqrt(u * u + c * c)
                    }
                    n = [o, f], e += o, s += f
                }
                t.cx = e / r, t.cy = s / r, t[$b] = {
                    x: t.cx,
                    y: t.cy,
                    clientX: t.cx,
                    clientY: t.cy
                }, t[Il] = i
            },
            __touchCountChange: function(t) {
                this._dragPoints[ru](), this._8s = Ei(t, this._li)
            },
            _handleTouchEvent: function(t, i) {
                switch (i) {
                    case "touchstart":
                        z(t), this[Fb](t), this[zb](t);
                        var n = t.touches[nh];
                        this[Rb] || (this[Rb] = t, this[Gb](t), this[jb] = !1, this.__kxLongPress(t)), 1 == n && (this[qb] = null), n >= 2 && !this[qb] && (this[qb] = {
                            cx: t.cx,
                            cy: t.cy,
                            distance: t[Il]
                        });
                        break;
                    case "touchmove":
                        G(t), this.__fixTouchEvent(t);
                        var n = t[Qh].length;
                        if (n >= 2 && this[qb]) {
                            var e = this.__kxMulTouchEvent[Il];
                            t[Yb] = t.distance / e, t[Hb] = this.__kxMulTouchEvent.prevScale ? t[Yb] / this.__kxMulTouchEvent[Ub] : t[Yb], this[qb][Ub] = t[Yb], this[Wb] || (this.__pinching = !0, this._onEvent(t, Vb))
                        }
                        this.__dragging || (this[wb] = !0, this[Xb](t)), this._ondrag(t), this[Wb] && this._onEvent(t, Kb);
                        break;
                    case "touchend":
                        G(t);
                        var n = t[Qh].length;
                        n && (this[Fb](t), this[zb](t)), 1 >= n && (this[Wb] && (this.__pinching = !1, this._onEvent(t, Jb)), this.__kxMulTouchEvent = null), 0 == n && (this[wb] ? (this[Zb](t), this[wb] = !1) : t.timeStamp - this._kxEvent.timeStamp < .8 * cY(t) && this[Qb](this[Rb]), this[ty](t));
                        break;
                    case "touchcancel":
                        this.__dragging = !1, this[Wb] = !1, this[qb] = null
                }
                return !1
            },
            _handleEvent: function(t, i) {
                if (uY(t)) return this[iy](t, i);
                if (ny == i) z(t), bY(this), this._8s = Ei(t, this._li), this[Rb] || (this._kxEvent = t, this[Gb](t)), this[jb] = !1, this[ey](t);
                else if (Ob == i) bY(), this[ty](t);
                else if (sy == i) {
                    if (this[jb]) return !0;
                    if (this._isDelayClick()) return this.__onclick(t), !0
                } else if (ry == i) {
                    if (this._isDelayClick()) return !0
                } else {
                    if (hy == i) return this._onEvent(t, ay), this[Rb] && _Y(t) && bY(this), !0;
                    if (i == fY) {
                        var e = t[oy];
                        if (e !== n ? e /= 120 : e = -t.detail, !e) return;
                        return t.delta = e, this._onEvent(t, lb)
                    }
                }
                return !1
            },
            _onEvent: function(t, i) {
                if (this[fy]) {
                    var n = this[fy];
                    if (i = i || t.type, n instanceof Function) return n(t, i);
                    if (!(n[zv] instanceof Function && n[zv](i, t) === !1)) return n[uy] instanceof Function && n.onevent(i, t, this[ja] || this._li), n[i] instanceof Function ? n[i][ih](n, t, this[ja] || this._li) : void 0
                }
            },
            _toQEvent: function(t) {
                return t
            },
            _onWindowMouseUp: function(t) {
                this.__dragging && (G(t), this[wb] = !1, t = this[Mb](t), this[Zb](t), this[ty](t), this[Pb](t, cy))
            },
            _kxDragDistance: 4,
            _onWindowMouseMove: function(t) {
                if (this[Rb]) {
                    if (G(t), !this[wb]) {
                        var i = this[Rb][dy] - t[dy],
                            n = this._kxEvent.screenY - t[_y],
                            e = i * i + n * n;
                        if (e < this[ly]) return;
                        this[wb] = !0, this[Xb](t)
                    }
                    this[vy](this[Mb](t))
                }
            },
            _isDelayClick: function() {
                return mq[by]
            },
            __onclick: function(t) {
                if (!this[jb]) {
                    var i = cY(t);
                    this[yy] ? this[gy] || (clearTimeout(this[yy]), this[yy] = null, this[Pb](t, my), this[gy] = !0) : (this[gy] = !1, this[yy] = setTimeout(function(t) {
                        this[yy] = null, this[gy] || this[Pb](t, xy)
                    }[Th](this, t, i), i))
                }
            },
            _onstart: function(t) {
                t[Db] ? this[Pb](t, py) : this._onEvent(t, Ey)
            },
            _onrelease: function(t) {
                this[Rb] && (this[wy](), t[Db] ? this[Pb](t, Ty) : this._onEvent(t, ky), this._kxEvent = null, this._8s = null)
            },
            _mzppendDragInfo: function(t) {
                var i = this._8s;
                this._8s = Ei(t, this._li), this[Oy].add(i, this._8s, t)
            },
            _kxdrag: function() {
                this[jb] = !0, this[wy](), this._kxEvent[Db] ? this[Pb](this._kxEvent, Sy) : this._onEvent(this[Rb], My)
            },
            _ondrag: function(t) {
                this._mzppendDragInfo(t), this[Rb][Db] ? this[Pb](t, Iy) : this[Pb](t, Py)
            },
            _enddrag: function(t) {
                if (t[Ra] - this._8s.timeStamp < 100) {
                    var i = this[Oy][Cy]();
                    i && (t.vx = i.x, t.vy = i.y)
                }
                this[Rb][Db] ? this._onEvent(t, Ay) : this[Pb](t, Ly), this[Oy][ru]()
            },
            _id: function() {
                this[Ry]()
            },
            _k9Status: function() {
                mY._mxurrentItem == this && delete mY._mxurrentItem, this[wy](), delete this._8s, this[Rb] && (delete this._kxEvent[jy], delete this._kxEvent[gd], delete this._kxEvent)
            }
        };
        var mY = M(function(t) {
            this._kd = t, wi[dh](this, [t.canvasPanel, null, t])
        }, {
            "super": wi,
            _moData: function(t) {
                return this._kd[Dy](t)
            },
            _ky: function(t) {
                return this._kd[Ny](t)
            },
            _toQEvent: function(i) {
                return (i instanceof MouseEvent || t.TouchEvent && i instanceof t[gb]) && (i[jy] = this[By][Th](this, i), i.getUI = this._ky[Th](this, i)), i
            },
            _onElementRemoved: function(t) {
                this[$y](function(i) {
                    i[Fy] instanceof Function && i[Fy](t, this._kd)
                })
            },
            _onElementClear: function() {
                this[$y](function(t) {
                    t[zy] instanceof Function && t[zy](this._kd)
                })
            },
            _id: function(t) {
                this[Gy] && this._idInteractions(this[Gy], t), this[qy] && this[Yy](this[qy], t), this._k9Status()
            },
            _kd: null,
            _26s: null,
            _mxustomInteractionListeners: null,
            _mmInteraction: function(t) {
                return this[Gy] == t ? !1 : (this._26s && this[Gy][nh] && this._idInteractions(this._26s), void(this._26s = t))
            },
            _miCustomInteractionListener: function(t) {
                this[qy] || (this[qy] = []), this._mxustomInteractionListeners[fh](t)
            },
            _jtCustomInteractionListener: function(t) {
                this[qy] && 0 != this._mxustomInteractionListeners.length && m(this[qy], t)
            },
            _onEvent: function(t, i, n) {
                this._kd[i] instanceof Function && this._kd[i][ih](this._kd, t, n), this[Gy] && this[Hy](t, i, this[Gy], n), this._mxustomInteractionListeners && this.__onEvent(t, i, this[qy], n)
            },
            _ihListeners: function(t) {
                this._26s && l(this[Gy], t, this), this[qy] && l(this._mxustomInteractionListeners, t, this)
            },
            __onEvent: function(t, i, n, e) {
                if (!$(n)) return void this[Uy](t, i, n, e);
                for (var s = 0; s < n.length; s++) {
                    var r = n[s];
                    this.__handleEvent(t, i, r, e)
                }
            },
            __handleEvent: function(t, i, n, e) {
                if (!(n[zv] instanceof Function && n[zv](i, t, this._kd, e) === !1)) {
                    n[uy] instanceof Function && n[uy](i, t, this._kd, e);
                    var s = n[i];
                    s instanceof Function && s[ih](n, t, this._kd, e)
                }
            },
            _idInteraction: function(t) {
                t[Wy] instanceof Function && t[Wy].call(t, this._kd)
            },
            _idInteractions: function(t, i) {
                if (!$(t)) return void this[Vy](t, i);
                for (var n = 0; n < t[nh]; n++) {
                    var e = t[n];
                    e && this[Vy](e, i)
                }
            }
        })
    }
    ki[_h] = {
        limitCount: 10,
        points: null,
        add: function(t, i, n) {
            0 == this[Ao][nh] && (this[Xy] = t.x, this._kxY = t.y);
            var e = i.timeStamp - t.timeStamp || 1;
            n[Ky] = e;
            var s = i.x - t.x,
                r = i.y - t.y;
            n.dx = s, n.dy = r, n.startX = this[Xy], n[Jy] = this[Zy], n[Qy] = i.x - this[Xy], n[tg] = i.y - this._kxY, this.points[hh](0, 0, {
                interval: e,
                dx: s,
                dy: r
            }), this[Ao][nh] > this.limitCount && this.points.pop()
        },
        getCurrentSpeed: function() {
            if (!this[Ao].length) return null;
            for (var t = 0, i = 0, n = 0, e = 0, s = this[Ao][nh]; s > e; e++) {
                var r = this[Ao][e],
                    h = r.interval;
                if (h > 150) {
                    t = 0;
                    break
                }
                if (t += h, i += r.dx, n += r.dy, t > 300) break
            }
            return 0 == t || 0 == i && 0 == n ? null : {
                x: i / t,
                y: n / t
            }
        },
        clear: function() {
            this[Ao] = []
        }
    };
    var xY, pY, EY, wY;
    oq ? (xY = ig, pY = ng, EY = eg, wY = sg) : fq ? (xY = rg, pY = hg, EY = ag, wY = og) : (xY = fg, pY = fg, EY = g_, wY = ug);
    var TY = cg,
        kY = Math.PI,
        OY = Math.pow,
        SY = Math.sin,
        MY = 1.70158,
        IY = {
            swing: function(t) {
                return -Math.cos(t * kY) / 2 + .5
            },
            easeNone: function(t) {
                return t
            },
            easeIn: function(t) {
                return t * t
            },
            easeOut: function(t) {
                return (2 - t) * t
            },
            easeBoth: function(t) {
                return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
            },
            easeInStrong: function(t) {
                return t * t * t * t
            },
            easeOutStrong: function(t) {
                return 1 - --t * t * t * t
            },
            easeBothStrong: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
            },
            elasticIn: function(t) {
                var i = .3,
                    n = i / 4;
                return 0 === t || 1 === t ? t : -(OY(2, 10 * (t -= 1)) * SY(2 * (t - n) * kY / i))
            },
            elasticOut: function(t) {
                var i = .3,
                    n = i / 4;
                return 0 === t || 1 === t ? t : OY(2, -10 * t) * SY(2 * (t - n) * kY / i) + 1
            },
            elasticBoth: function(t) {
                var i = .45,
                    n = i / 4;
                return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * OY(2, 10 * (t -= 1)) * SY(2 * (t - n) * kY / i) : OY(2, -10 * (t -= 1)) * SY(2 * (t - n) * kY / i) * .5 + 1
            },
            backIn: function(t) {
                return 1 === t && (t -= .001), t * t * ((MY + 1) * t - MY)
            },
            backOut: function(t) {
                return (t -= 1) * t * ((MY + 1) * t + MY) + 1
            },
            backBoth: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * (((MY *= 1.525) + 1) * t - MY) : .5 * ((t -= 2) * t * (((MY *= 1.525) + 1) * t + MY) + 2)
            },
            bounceIn: function(t) {
                return 1 - IY[dg](1 - t)
            },
            bounceOut: function(t) {
                var i, n = 7.5625;
                return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
            },
            bounceBoth: function(t) {
                return .5 > t ? .5 * IY[_g](2 * t) : .5 * IY.bounceOut(2 * t - 1) + .5
            }
        },
        PY = function(t) {
            this._k2 = t
        };
    PY.prototype = {
        _k2: null,
        _8a: function() {
            this[lg] instanceof Function && (this[lg](), this[lg] = null)
        },
        _kx: function(t) {
            var i = Date.now();
            this._lm(), this._mxallback = t, this._requestID = requestAnimationFrame(function n() {
                var t = Date.now(),
                    e = t - i;
                return !e || this._k2 && this._k2(e) !== !1 ? (i = t, void(this._requestID = requestAnimationFrame(n.bind(this)))) : void this._lm()
            }[Th](this))
        },
        _5x: function() {},
        _lm: function() {
            return this._requestID ? (this._5x(), this._8a(), t[ol](this[vg]), void delete this[vg]) : !1
        },
        _d8: function() {
            return null != this[vg]
        }
    };
    var CY = function(t, i, n, e) {
        this[bg] = t, this._scope = i || this, this._32 = e, n && n > 0 && (this._ik = n)
    };
    CY[_h] = {
        _ik: 1e3,
        _32: null,
        _e1: 0,
        _lm: function() {
            return this._e1 = 0, this._d1 = 0, T(this, CY, yg)
        },
        _d1: 0,
        _k2: function(t) {
            if (this._e1 += t, this._e1 >= this._ik) return this[bg].call(this[ja], 1, (1 - this._d1) * this._ik, t, this._ik), !1;
            var i = this._e1 / this._ik;
            return this._32 && (i = this._32(i)), this[bg][ih](this._scope, i, (i - this._d1) * this._ik, t, this._ik) === !1 ? !1 : void(this._d1 = i)
        }
    }, E(CY, PY);
    var AY = function(t) {
            ni(t)
        },
        LY = {
            version: gg,
            extend: E,
            doSuperConstructor: w,
            doSuper: T,
            createFunction: function(t, i) {
                return i.bind(t)
            },
            setClass: L,
            appendClass: R,
            removeClass: j,
            forEach: l,
            forEachReverse: b,
            isNumber: D,
            isString: N,
            isBoolean: B,
            isArray: $,
            eventPreventDefault: F,
            eventStopPropagation: z,
            stopEvent: G,
            callLater: C,
            nextFrame: A,
            forEachChild: e,
            forEachByDepthFirst: r,
            forEachByDepthFirstReverse: o,
            forEachByBreadthFirst: c,
            randomInt: q,
            randomBool: Y,
            randomColor: U,
            addEventListener: eY,
            getFirstElementChildByTagName: Eq
        };
    LY[mg] = yq, LY[xg] = lq, LY[Lo] = hi, LY[pg] = ai, LY[Eg] = Sq, LY[wg] = Oq, LY.Point = wq, LY[Tg] = Mq, LY[kg] = Bq, LY[Og] = $q, LY[Sg] = Vq, LY[Mg] = Yq, LY[Ig] = Hq, LY[Pg] = Iq, LY.Data = Xq, LY[Cg] = Zq, LY[Ag] = Jq, LY.IListener = Wq, LY[Lg] = Mi, LY.loadXML = Oi, LY.loadJSON = Si, LY[Rg] = Ti, LY[jg] = Tq, LY[Dg] = xq, LY.DragSupport = wi, LY.alert = function(t) {
        alert(t)
    }, LY[Ng] = function(t, i, n, e) {
        var s = prompt(t, i);
        return s != i && n ? n.call(e, s) : s
    }, LY[Bg] = function(t, i, n) {
        var e = confirm(t);
        return e && i ? i[ih](n) : e
    }, LY[$g] = mi;
    var RY = {
        IMAGE_ADJUST_FLIP: Fg,
        IMAGE_ADJUST_MIRROR: zg,
        SELECTION_TYPE_BORDER_RECT: Gg,
        SELECTION_TYPE_BORDER: qg,
        SELECTION_TYPE_SHADOW: Yg,
        NS_SVG: "http://www.w3.org/2000/svg",
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: Hg,
        EDGE_TYPE_ELBOW_HORIZONTAL: Ug,
        EDGE_TYPE_ELBOW_VERTICAL: Wg,
        EDGE_TYPE_ORTHOGONAL: Vg,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: Xg,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: Kg,
        EDGE_TYPE_HORIZONTAL_VERTICAL: Jg,
        EDGE_TYPE_VERTICAL_HORIZONTAL: Zg,
        EDGE_TYPE_EXTEND_TOP: Qg,
        EDGE_TYPE_EXTEND_LEFT: tm,
        EDGE_TYPE_EXTEND_BOTTOM: im,
        EDGE_TYPE_EXTEND_RIGHT: nm,
        EDGE_TYPE_ZIGZAG: em,
        EDGE_CORNER_NONE: Yd,
        EDGE_CORNER_ROUND: Ro,
        EDGE_CORNER_BEVEL: sm,
        GROUP_TYPE_RECT: nf,
        GROUP_TYPE_CIRCLE: rm,
        GROUP_TYPE_ELLIPSE: hm,
        SHAPE_CIRCLE: am,
        SHAPE_RECT: nf,
        SHAPE_ROUNDRECT: om,
        SHAPE_STAR: fm,
        SHAPE_TRIANGLE: um,
        SHAPE_HEXAGON: cm,
        SHAPE_PENTAGON: dm,
        SHAPE_TRAPEZIUM: _m,
        SHAPE_RHOMBUS: lm,
        SHAPE_PARALLELOGRAM: vm,
        SHAPE_HEART: bm,
        SHAPE_DIAMOND: ym,
        SHAPE_CROSS: gm,
        SHAPE_ARROW_STANDARD: mm,
        SHAPE_ARROW_1: xm,
        SHAPE_ARROW_2: pm,
        SHAPE_ARROW_3: Em,
        SHAPE_ARROW_4: wm,
        SHAPE_ARROW_5: Tm,
        SHAPE_ARROW_6: km,
        SHAPE_ARROW_7: Om,
        SHAPE_ARROW_8: Sm,
        SHAPE_ARROW_OPEN: Mm
    };
    RY.LINE_CAP_TYPE_BUTT = Im, RY.LINE_CAP_TYPE_ROUND = Ro, RY[Pm] = Cm, RY[Am] = sm, RY[Lm] = Ro, RY[Rm] = jm, RY.EDGE_BUNDLE_TYPE_CURVE = Dm, RY[cd] = Nm, mq.SELECTION_TYPE = RY.SELECTION_TYPE_SHADOW, mq.SELECTION_TOLERANCE = oY ? 8 : 3, mq[Bm] = 2, mq[$m] = 7, mq.SELECTION_COLOR = X(3422561023), mq[Fm] = RY.SELECTION_TYPE_SHADOW, mq[zm] = 10, mq[Gm] = 10, mq[fd] = 10, mq[qm] = 200, mq[To] = 1.2;
    var jY = t[Ym] || 1;
    1 > jY && (jY = 1);
    var DY;
    LY.createCanvas = Di;
    var NY = cq && !yq,
        BY = 9,
        $Y = function(t, i, n, e) {
            var s = t - n,
                r = i - e;
            return s * s + r * r
        };
    rn[_h] = {
        equals: function(t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    }, rn[Mo] = function(t, i, n) {
        if (!n) return en(t, i);
        var e = $Y(t.x, t.y, i.x, i.y),
            s = $Y(t.x, t.y, n.x, n.y),
            r = $Y(n.x, n.y, i.x, i.y);
        if (e + FY >= s + r) return en(t, i, 0, n);
        if (s + FY >= e + r) return en(t, n, 0, i);
        if (r + FY >= e + s) return en(i, n, 0, t);
        var h;
        Math.abs(n.y - i.y) < 1e-4 && (h = t, t = i, i = h), h = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
        var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * h),
            o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
        return new rn(a, o, Tq(a, o, t.x, t.y), t, i, n)
    };
    var FY = .01,
        zY = {
            _mzp: function(t, i, e, s, r) {
                if (N(t) && (t = Iq[fa](t)), !t) return {
                    x: 0,
                    y: 0
                };
                var h = 0,
                    a = 0,
                    o = i._iu;
                if (e = e || 0, t.x === n) {
                    var f = t.horizontalPosition,
                        u = t.verticalPosition,
                        c = !0;
                    switch (f) {
                        case Aq:
                            c = !1;
                            break;
                        case Cq:
                            h += o / 2
                    }
                    switch (u) {
                        case Lq:
                            a -= e / 2;
                            break;
                        case jq:
                            a += e / 2
                    }
                } else h = t.x, a = t.y, Math.abs(h) > 0 && Math.abs(h) < 1 && (h *= o);
                r && null != s && (a += s.y, h += Math.abs(s.x) < 1 ? s.x * o : s.x);
                var d = _n[ih](i, h, a, c);
                return d ? (r || null == s || d.offset(s), d) : {
                    x: 0,
                    y: 0
                }
            },
            _lj: function(t, i) {
                var n = i[qo],
                    e = i.points;
                switch (n) {
                    case _H:
                        t[Hm](e[0], e[1], e[2], e[3], i._r);
                        break;
                    case fH:
                        t[of](e[0], e[1]);
                        break;
                    case uH:
                        t[af](e[0], e[1]);
                        break;
                    case cH:
                        t[Um](e[0], e[1], e[2], e[3]);
                        break;
                    case dH:
                        t[Wm](e[0], e[1], e[2], e[3], e[4], e[5]);
                        break;
                    case lH:
                        t[Cf]()
                }
            },
            _5b: function(t, i, n, e) {
                var s = i[qo];
                if (s != fH && s != lH) {
                    var r = n[Go],
                        h = i[Ao];
                    switch (n.type == fH && t.add(r.x, r.y), s) {
                        case _H:
                            bn(i, r.x, r.y, h[0], h[1], h[2], h[3], h[4]), t.add(h[0], h[1]), t.add(i[Wo], i[Vo]), t.add(i[Ho], i[Uo]), i[Vm] && t.add(i.$boundaryPoint1.x, i.$boundaryPoint1.y), i[Xm] && t.add(i[Xm].x, i[Xm].y);
                            break;
                        case uH:
                            t.add(h[0], h[1]);
                            break;
                        case cH:
                            Ui([r.x, r.y][rh](h), t);
                            break;
                        case dH:
                            Zi([r.x, r.y].concat(h), t);
                            break;
                        case lH:
                            e && t.add(e[Ao][0], e.points[1])
                    }
                }
            },
            _5c: function(t, i, n) {
                var e = t[qo];
                if (e == fH) return 0;
                var s = i.lastPoint,
                    r = t.points;
                switch (e == dH && 4 == r.length && (e = cH), e) {
                    case uH:
                        return Tq(r[0], r[1], s.x, s.y);
                    case _H:
                        return t._iu;
                    case cH:
                        var h = Xi([s.x, s.y].concat(r));
                        return t._lf = h, h(1);
                    case dH:
                        var h = tn([s.x, s.y].concat(r));
                        return t._lf = h, h(1) || Qi([s.x, s.y].concat(r));
                    case lH:
                        if (s && n) return t[Ao] = n[Ao], Tq(n.points[0], n[Ao][1], s.x, s.y)
                }
                return 0
            }
        },
        GY = /^data:image\/(\w+);base64,/i,
        qY = /^gif/i,
        YY = /^svg/i,
        HY = 10,
        UY = 11,
        WY = 12,
        VY = 20,
        XY = 30;
    mq.IMAGE_WIDTH = 50, mq[vf] = 30, mq[Km] = {
        draw: function(t, i) {
            pn(t, i[Oa], i[Ja], i[Jm])
        }
    }, mq.IMAGE_INVALID = {
        draw: function(t, i) {
            pn(t, i.width, i.height, i[Jm], !0)
        }
    }, mq[Zm] = 1e6;
    var KY = 1,
        JY = 2,
        ZY = 3;
    Tn[_h] = {
        _iz: 0,
        _5v: !0,
        _kk: null,
        _j0: null,
        _lh: null,
        _ll: null,
        _mzs: n,
        _9a: n,
        _6p: function() {
            return this._iz == KY
        },
        getBounds: function(t) {
            return this._ll == XY ? this._lh[Po](t) : (this._5v && this._ey(), this)
        },
        validate: function() {
            this._5v && this._ey()
        },
        _ey: function() {
            if (this._5v = !1, this._ll == XY) return this._lh[Io](), void this[zf](this._lh.bounds);
            if (this._ll == VY) return void this._8u();
            if (this._iz != KY) try {
                this._e5()
            } catch (t) {
                this._iz = ZY, LY[na](t)
            }
        },
        _5d: function() {
            this._dy(), this[Qm].clear(), delete this[Qm]
        },
        _hq: function(t) {
            this._kk[tx] && this._kk[tx][ix](this._kk), this._iz = ZY, LY.error(nx + this._lh), this[ex] = null, this._j0 = null, this._kk = null, t !== !1 && this._5d()
        },
        _e5: function() {
            var t = this._lh;
            if (this._iz = KY, this._dispatcher = new Hq, this._ll == WY) {
                for (var n in TH) this[n] = TH[n];
                return void ne(this._lh, this, this[sx], this._hq, this._ew)
            }
            this._kk || (this._kk = i.createElement(Nd), this._kk[rx] = hx, rq && (this._kk[ya][ax] = qd, i.body[Wu](this._kk))), rq ? (this._kk.onload = function() {
                setTimeout(this._7k[Th](this), 100)
            }[Th](this), this._kk.onerror = this._hq[Th](this)) : (this._kk.onload = this._7k[Th](this), this._kk.onerror = this._7k[Th](this)), this._kk.src = t
        },
        _hr: !0,
        _7k: function() {
            var t = this._kk[Oa],
                i = this._kk.height;
            if (!t || !i) return void this._hq();
            if (this._kk.parentNode && this._kk[tx][ix](this._kk), this._iz = JY, this[Oa] = t, this.height = i, rq && this._ll == UY) this[ex] = null, this._hr = !1;
            else if (this._ll == UY || xn(this._kk.src)) {
                var n = Di();
                n.width = t, n[Ja] = i, n.g[r_](this._kk, 0, 0, t, i), mn(n.g, n) && (this._j0 = n, this[ex] = Cn(n))
            }
            this._5d()
        },
        _8u: function() {
            var t = this._lh;
            if (!(t[_f] instanceof Function)) return void this._hq(!1);
            if (t[ox] === !1 && t[Oa] && t[Ja]) return this[Oa] = t[Oa], void(this[Ja] = t.height);
            var i = t[Oa] || mq.IMAGE_MAX_SIZE,
                n = t[Ja] || mq[qm],
                e = this._e7();
            e[Oa] = i, e[Ja] = n;
            var s = e.g;
            t[_f](s);
            var r = zi(s, 0, 0, i, n);
            if (r) {
                var h = Ln(r[$o], i, n);
                this.x = h._x, this.y = h._y, this.width = h[fx], this.height = h[ux], e.width = this[Oa], e[Ja] = this[Ja], s.putImageData(r, -this.x, -this.y), this[ex] = h
            }
        },
        _e7: function() {
            return this._j0 || (this._j0 = Di())
        },
        draw: function(t, i, n, e, s, r) {
            if (this[Oa] && this[Ja]) {
                i = i || 1, e = e || 1, s = s || 1;
                var h = this[Oa] * e,
                    a = this[Ja] * s;
                if (r && n[i_] && (t[i_] = n[i_], t.shadowBlur = (n.shadowBlur || 0) * i, t[cx] = (n[cx] || 0) * i, t[dx] = (n.shadowOffsetY || 0) * i), this._iz == KY) return void(mq.IMAGE_DEFAULT && mq[Km][_f](t, {
                    src: this._lh,
                    width: h,
                    height: a,
                    renderColor: n[Jm]
                }));
                if (this._iz == ZY) return void(mq[_x] && mq.IMAGE_INVALID[_f](t, {
                    src: this._lh,
                    width: h,
                    height: a,
                    renderColor: n[Jm]
                }));
                if (this._ll == XY) return t[bo](e, s), void this._lh[_f](t, i, n);
                var o = this._f7(i, e, s);
                return o ? ((this.x || this.y) && t.translate(this.x * e, this.y * s), t[bo](e / o[bo], s / o.scale), void o._lj(t, n.renderColor, n[lx])) : void this._j2(t, i, e, s, this[Oa] * e, this[Ja] * s, n)
            }
        },
        _j2: function(t, i, n, e, s, r, h) {
            if (this._ll == VY) return 1 != n && 1 != e && t.scale(n, e), void this._lh[_f](t, h);
            if (this._kk) {
                if (!uq) return void t[r_](this._kk, 0, 0, s, r);
                var n = i * s / this[Oa],
                    e = i * r / this[Ja];
                t[bo](1 / n, 1 / e), t.drawImage(this._kk, 0, 0, s * n, r * e)
            }
        },
        _j3: null,
        _f7: function(t, i, n) {
            if (this._ll == VY && this._lh[ox] === !1) return null;
            if (this._ll == HY || (t *= Math.max(i, n)) <= 1) return this[vx] || (this[vx] = this._f9(this._j0 || this._kk, 1, this._hr)), this[vx];
            var e = this._j3[bx] || 0;
            if (t = Math[Uh](t), e >= t) {
                for (var s = t, r = this._j3[s]; !r && ++s <= e;) r = this._j3[s];
                if (r) return r
            }
            t % 2 && t++;
            var h = this[Oa] * t,
                a = this[Ja] * t;
            if (h * a > mq[Zm]) return null;
            var o = Di(h, a);
            return (this.x || this.y) && o.g.translate(-this.x * t, -this.y * t), this._j2(o.g, 1, t, t, h, a), this._f9(o, t)
        },
        _f9: function(t, i) {
            var n = new gH(t, i);
            return this._j3[i] = n, this._j3[bx] = i, n
        },
        hitTest: function(t, i, n) {
            if (this._ll == XY) return this._lh[Md][dh](this._lh, arguments);
            if (!(this[ex] || this._kk && this._kk[ex])) return !0;
            var e = this[ex] || this._kk._pixels;
            return e._hs(t, i, n)
        },
        _dy: function() {
            this._dispatcher && this[Qm][gv](new Bq(this, yx, gx, this._kk))
        },
        _mzd: function(t, i) {
            this[Qm] && this[Qm][X_](t, i)
        },
        _6w: function(t, i) {
            this[Qm] && this._dispatcher[mx](t, i)
        },
        _myu: function(t) {
            this._j3 = {}, (t || this[Oa] * this[Ja] > 1e5) && (this._kk = null, this._j0 = null)
        }
    }, E(Tn, Sq);
    var QY = {};
    LY[r_] = In, LY.registerImage = kn, LY[xx] = Sn, LY[px] = function() {
        var t = [];
        for (var i in QY) t[fh](i);
        return t
    };
    var tH = function(t, i, n, e, s, r) {
        this[qo] = t, this[Ex] = i, this[wx] = n, this[wd] = e || 0, this.tx = s || 0, this.ty = r || 0
    };
    RY[Tx] = ql, RY.GRADIENT_TYPE_LINEAR = zl, tH[_h] = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: Iq[Zl],
        isEmpty: function() {
            return null == this[Ex] || 0 == this[Ex][nh]
        },
        _60: function() {
            var t = this[Ex][nh];
            if (1 == t) return [0];
            for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i[fh](n * e);
            return this[wx] || (this.positions = i), i
        },
        generatorGradient: function(t) {
            if (null == this.colors || 0 == this[Ex].length) return null;
            var i, n = Ni();
            if (this.type == RY.GRADIENT_TYPE_LINEAR) {
                var e = this[wd];
                e > Math.PI && (e -= Math.PI);
                var s;
                if (e <= Math.PI / 2) {
                    var r = Math[ea](t[Ja], t[Oa]),
                        h = Math[Oo](t[Oa] * t[Oa] + t[Ja] * t[Ja]),
                        a = r - e;
                    s = Math.cos(a) * h
                } else {
                    var r = Math[ea](t[Oa], t[Ja]),
                        h = Math[Oo](t[Oa] * t.width + t[Ja] * t.height),
                        a = r - (e - Math.PI / 2);
                    s = Math.cos(a) * h
                }
                var o = s / 2,
                    f = o * Math.cos(e),
                    u = o * Math.sin(e),
                    c = t.x + t.width / 2 - f,
                    d = t.y + t.height / 2 - u,
                    _ = t.x + t[Oa] / 2 + f,
                    l = t.y + t[Ja] / 2 + u;
                i = n[kx](c, d, _, l)
            } else {
                if (!(this.type = RY[Tx])) return null;
                var v = ci(this.position, t[Oa], t[Ja]);
                v.x += t.x, v.y += t.y, this.tx && (v.x += Math.abs(this.tx) < 1 ? t.width * this.tx : this.tx), this.ty && (v.y += Math.abs(this.ty) < 1 ? t[Ja] * this.ty : this.ty);
                var b = Tq(v.x, v.y, t.x, t.y);
                b = Math.max(b, Tq(v.x, v.y, t.x, t.y + t.height)), b = Math.max(b, Tq(v.x, v.y, t.x + t[Oa], t.y + t[Ja])), b = Math.max(b, Tq(v.x, v.y, t.x + t[Oa], t.y)), i = n.createRadialGradient(v.x, v.y, 0, v.x, v.y, b)
            }
            var y = this[Ex],
                g = this.positions;
            g && g[nh] == y[nh] || (g = this._60());
            for (var m = 0, x = y[nh]; x > m; m++) i[Ox](g[m], y[m]);
            return i
        }
    };
    var iH = new tH(RY.GRADIENT_TYPE_LINEAR, [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
        nH = new tH(RY[Sx], [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], 0),
        eH = (new tH(RY[Sx], [X(1154272460), X(1442840575)], [.1, .9], 0), new tH(RY[Tx], [X(2298478591), X(1156509422), X(1720223880), X(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
        sH = [X(0), X(4294901760), X(4294967040), X(4278255360), X(4278250239), X(4278190992), X(4294901958), X(0)],
        rH = [0, .12, .28, .45, .6, .75, .8, 1],
        hH = new tH(RY[Sx], sH, rH),
        aH = new tH(RY[Sx], sH, rH, Math.PI / 2),
        oH = new tH(RY.GRADIENT_TYPE_RADIAL, sH, rH);
    tH[Mx] = iH, tH[Ix] = nH, tH[Px] = eH, tH[Cx] = hH, tH[Ax] = aH, tH.RAINBOW_RADIAL_GRADIENT = oH;
    var fH = Yl,
        uH = zl,
        cH = Lx,
        dH = Gl,
        _H = Rx,
        lH = jx;
    RY.SEGMENT_MOVE_TO = fH, RY[Dx] = uH, RY.SEGMENT_QUAD_TO = cH, RY[Nx] = dH, RY[Bx] = _H, RY[$x] = lH;
    var vH = function(t, i) {
        this.id = ++nq, $(t) ? this[Ao] = t : (this.type = t, this[Ao] = i)
    };
    vH[_h] = {
        toJSON: function() {
            var t = {
                type: this.type,
                points: this[Ao]
            };
            return this[xf] && (t.invalidTerminal = !0), t
        },
        parseJSON: function(t) {
            this[qo] = t[qo], this[Ao] = t.points, this.invalidTerminal = t[xf]
        },
        points: null,
        type: uH,
        clone: function() {
            return new vH(this[qo], this[Ao] ? y(this.points) : null)
        },
        move: function(t, i) {
            if (this[Ao])
                for (var n = 0, e = this.points[nh]; e > n; n++) {
                    var s = this[Ao][n];
                    LY.isNumber(s) && (this[Ao][n] += n % 2 == 0 ? t : i)
                }
        }
    }, J(vH[_h], {
        lastPoint: {
            get: function() {
                return this[qo] == _H ? {
                    x: this[Ho],
                    y: this[Uo]
                } : {
                    x: this[Ao][this[Ao][nh] - 2],
                    y: this[Ao][this[Ao][nh] - 1]
                }
            }
        },
        firstPoint: {
            get: function() {
                return {
                    x: this[Ao][0],
                    y: this[Ao][1]
                }
            }
        }
    }), LY[Fx] = vH;
    var bH = 0,
        yH = function(t) {
            this[Co] = new Sq, this._fd = t || []
        };
    yH[_h] = {
        toJSON: function() {
            var t = [];
            return this._fd[ku](function(i) {
                t[fh](i[zx]())
            }), t
        },
        parseJSON: function(t) {
            var i = this._fd;
            t[ku](function(t) {
                i[fh](new vH(t.type, t[Ao]))
            })
        },
        clear: function() {
            this._fd.length = 0, this.bounds[ru](), this._iu = 0, this._5v = !0
        },
        _e3: !0,
        _5y: function(t, i) {
            this._e3 && 0 === this._fd[nh] && t != fH && this._fd[fh](new vH(fH, [0, 0])), this._fd.push(new vH(t, i)), this._5v = !0
        },
        add: function(t, i) {
            g(this._fd, t, i), this._5v = !0
        },
        removePathSegment: function(t) {
            return t >= this._fd.length ? !1 : (this._fd[hh](t, 1), void(this._5v = !0))
        },
        moveTo: function(t, i) {
            this._5y(fH, [t, i])
        },
        lineTo: function(t, i) {
            this._5y(uH, [t, i])
        },
        quadTo: function(t, i, n, e) {
            this._5y(cH, [t, i, n, e])
        },
        curveTo: function(t, i, n, e, s, r) {
            this._5y(dH, [t, i, n, e, s, r])
        },
        arcTo: function(t, i, n, e, s) {
            this._5y(_H, [t, i, n, e, s])
        },
        closePath: function() {
            this._5y(lH)
        },
        _7m: function(t, i, n, e, s) {
            if (e.selectionColor) {
                if (n == RY[Gx]) {
                    if (!e[qx]) return;
                    return t.shadowColor = e[Yx], t[e_] = e[qx] * i, t[cx] = (e[Hx] || 0) * i, void(t[dx] = (e[Ux] || 0) * i)
                }
                if (n == RY.SELECTION_TYPE_BORDER) {
                    if (!e.selectionBorder) return;
                    t[ff] = e[Yx];
                    var r = s[Fo] || 0;
                    s[Wx] && (r += 2 * s[Wx]), t[Fo] = e[Vx] + r, this._lj(t), t.stroke()
                }
            }
        },
        _5v: !0,
        _fd: null,
        _iu: 0,
        lineCap: Im,
        lineJoin: Ro,
        draw: function(t, i, n, e, s) {
            t[Xx] = n.lineCap || this.lineCap, t.lineJoin = n[t_] || this[t_], e && (s || (s = n), this._7m(t, i, s[Kx], s, n));
            var r = e && s[Kx] == RY.SELECTION_TYPE_SHADOW;
            n[Jx] && (this._lj(t), t[Fo] = n[Fo] + 2 * (n.outline || 0), t.strokeStyle = n[Jx], t[No](), r && (r = !1, t[i_] = Zx)), t.lineWidth = 0, this._lj(t), n[Qx] && (t[sf] = n[Jm] || n[Qx], t[Bo]()), n.fillGradient && (t[sf] = n[tp] || n.fillGradient, t.fill()), n.lineWidth && (t[Fo] = n[Fo], n.lineDash && (n[ip] && (t[ff] = n[ip], t[No](), r && (t[i_] = Zx)), t.lineCap = n[np] || t[Xx], t[t_] = n.lineDashJoin || t[t_], t[cu] = n[cu], t.lineDashOffset = n[bu]), t[ff] = n[Jm] || n.strokeStyle, t.stroke(), t[cu] = [])
        },
        _lj: function(t) {
            t[tf]();
            for (var i, n, e = 0, s = this._fd[nh]; s > e; e++) i = this._fd[e], zY._lj(t, i, n), n = i
        },
        invalidate: function() {
            this._5v = !0
        },
        validate: function() {
            if (this._5v = !1, this[Co].clear(), this._iu = 0, 0 != this._fd[nh])
                for (var t, i, n = this._fd, e = 1, s = n[0], r = s, h = n[nh]; h > e; e++) t = n[e], t[qo] == fH ? r = t : (zY._5b(this[Co], t, s, r), i = zY._5c(t, s, r), t._iu = i, this._iu += i), s = t
        },
        getBounds: function(t, i) {
            if (this._5v && this[Io](), i = i || new Sq, t) {
                var n = t / 2;
                i.set(this.bounds.x - n, this[Co].y - n, this[Co][Oa] + t, this[Co].height + t)
            } else i.set(this[Co].x, this[Co].y, this[Co][Oa], this.bounds.height);
            return i
        },
        hitTest: function(t, i, n, e, s, r) {
            return dn[ih](this, t, i, n, e, s, r)
        },
        toSegments: function() {
            return [][rh](this._fd)
        },
        generator: function(t, i, n, e, s) {
            return cn[ih](this, t, i, n, e, s)
        },
        getLocation: function(t, i) {
            return _n[ih](this, t, i || 0)
        }
    }, J(yH[_h], {
        segments: {
            get: function() {
                return this._fd
            },
            set: function(t) {
                this[ru](), this._fd = t
            }
        },
        length: {
            get: function() {
                return this._5v && this.validate(), this._iu
            }
        },
        _empty: {
            get: function() {
                return 0 == this._fd[nh]
            }
        }
    }), An[_h] = {
        _13: function(t, i) {
            var n, e, s, r, h, a = t[nh],
                o = 0,
                f = 0;
            for (h = 0; a > h; h += 4)
                if (t[h + 3] > 0) {
                    n = (h + 4) / i / 4 | 0;
                    break
                }
            for (h = a - 4; h >= 0; h -= 4)
                if (t[h + 3] > 0) {
                    e = (h + 4) / i / 4 | 0;
                    break
                }
            for (o = 0; i > o; o++) {
                for (f = n; e > f; f++)
                    if (t[f * i * 4 + 4 * o + 3] > 0) {
                        s = o;
                        break
                    }
                if (s >= 0) break
            }
            for (o = i - 1; o >= 0; o--) {
                for (f = n; e > f; f++)
                    if (t[f * i * 4 + 4 * o + 3] > 0) {
                        r = o;
                        break
                    }
                if (r >= 0) break
            }
            this._x = s, this._y = n, this._width = r - s + 1, this[ux] = e - n + 1, this._j9 = new Sq(s, n, this[fx], this[ux]), this[ep] = this[fx] * this[ux], this[sp] = i, this._originalPixels = t
        },
        _ej: function(t, i) {
            return this[rp][4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
        },
        _hs: function(t, i, n) {
            (!n || 1 >= n) && (n = 1), n = 0 | n, t = Math.round(t - this._x) - n, i = Math[Ro](i - this._y) - n, n += n;
            for (var e = t, s = i; i + n > s;) {
                for (var e = t; t + n > e;) {
                    if (this._ej(e, s)) return !0;
                    ++e
                }++s
            }
            return !1
        }
    }, RY[Tf] = hp, RY[wf] = ap, RY[kf] = op, RY[fp] = up, RY[Of] = cp, RY[Sf] = dp, RY[Mf] = _p, mq.BLEND_MODE = RY[fp];
    var gH = function(t, i, n) {
        this._j0 = t, this[bo] = i || 1, this._hr = n
    };
    gH[_h] = {
        scale: 1,
        _j0: null,
        _j3: null,
        _hr: !0,
        _lj: function(t, i, n) {
            if (i && (i = Rn(i)), !i || this._hr === !1) return void t[r_](this._j0, 0, 0);
            if (this._j0 instanceof Image) {
                var e = Di();
                e.width = this._j0[Oa], e[Ja] = this._j0.height, e.g[r_](this._j0, 0, 0, this._j0[Oa], this._j0[Ja]), this._j0 = e
            }
            this._j3 || (this._j3 = {});
            var s = i + n,
                e = this._j3[s];
            if (e || (e = Dn(this._j0, i, n), e || (this._hr = !1), this._j3[s] = e || this._j0), e)
                if (rq) try {
                    t[r_](e, 0, 0)
                } catch (r) {} else t[r_](e, 0, 0)
        }
    };
    var mH = function(t, i, n, e, s, r, h, a, o) {
            this._ln = Fn(t, i, n, e, s, r, h, a, o)
        },
        xH = {
            server: {
                draw: function(t) {
                    t.save(), t[vo](0, 0), t.beginPath(), t[of](0, 0), t[af](40, 0), t[af](40, 40), t[af](0, 40), t[Cf](), t.clip(), t[vo](0, 0), t[vo](0, 0), t[bo](1, 1), t[vo](0, 0), t[ff] = Zx, t[Xx] = Im, t.lineJoin = jm, t[lp] = 4, t[lo](), t.save(), t[wo](), t[lo](), t[wo](), t.save(), t.restore(), t[lo](), t[wo](), t[lo](), t.restore(), t[lo](), t[wo](), t[lo](), t[wo](), t[lo](), t[wo](), t[lo](), t[wo](), t[lo](), t.restore(), t[lo](), t[wo](), t.save(), t[wo](), t[lo](), t[wo](), t[wo](), t.save();
                    var i = t[kx](6.75, 3.9033, 30.5914, 27.7447);
                    i[Ox](.0493, vp), i.addColorStop(.0689, bp), i[Ox](.0939, yp), i.addColorStop(.129, gp), i.addColorStop(.2266, mp), i.addColorStop(.2556, xp), i[Ox](.2869, pp), i[Ox](.3194, Ep), i[Ox](.3525, wp), i[Ox](.3695, Tp), i[Ox](.5025, kp), i[Ox](.9212, Op), i.addColorStop(1, Sp), t[sf] = i, t.beginPath(), t[of](25.677, 4.113), t[Wm](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t.bezierCurveTo(19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t[Wm](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t[Wm](9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t[Wm](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t.bezierCurveTo(5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t[Wm](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t[Wm](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t[Wm](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t[Wm](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t[Wm](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t[Wm](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t[Wm](25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t[Wm](25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t.closePath(), t[Bo](), t[No](), t[wo](), t[lo](), t[lo](), t.fillStyle = Mp, t[tf](), t.moveTo(19.763, 6.645), t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t[Wm](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t.bezierCurveTo(21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t[Wm](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t[af](21.398, 36.253), t[Wm](21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t[Wm](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t.bezierCurveTo(20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t.bezierCurveTo(20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t[af](4.675, 37.877), t.bezierCurveTo(4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t.bezierCurveTo(3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t.bezierCurveTo(3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t.bezierCurveTo(3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t[af](2.924, 8.431), t[Wm](2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t[Wm](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t.bezierCurveTo(4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t[af](19.763, 6.645), t.closePath(), t[Bo](), t.stroke(), t[wo](), t.restore(), t[lo](), t.fillStyle = Ip, t.beginPath(), t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t[Cf](), t[Bo](), t.stroke(), t[wo](), t.save(), t[sf] = Mp, t[tf](), t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t[Cf](), t[Bo](), t.stroke(), t[wo](), t[lo](), t.fillStyle = Ip, t[tf](), t[of](19.377, 17.247), t[Wm](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t[af](5.882, 18.108999999999998), t[Wm](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t.lineTo(5.02, 11.144), t.bezierCurveTo(5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t.lineTo(18.516, 10.281), t[Wm](18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t[af](19.377, 17.247), t[Cf](), t.fill(), t[No](), t[wo](), t[lo](), t[lo](), t[sf] = Mp, t[tf](), t.moveTo(18.536, 13.176), t[Wm](18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794), t.lineTo(6.479, 13.794), t[Wm](6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176), t[af](5.861, 11.84), t.bezierCurveTo(5.861, 11.498, 6.137, 11.221, 6.479, 11.221), t.lineTo(17.918, 11.221), t.bezierCurveTo(18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84), t[af](18.535, 13.176), t[Cf](), t.fill(), t[No](), t.restore(), t.save(), t.fillStyle = Mp, t.beginPath(), t[of](18.536, 16.551), t[Wm](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997), t.lineTo(6.479, 17.168999999999997), t[Wm](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551), t.lineTo(5.861, 15.215999999999998), t[Wm](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998), t[af](17.918, 14.596999999999998), t[Wm](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998), t[af](18.535, 16.551), t[Cf](), t[Bo](), t.stroke(), t.restore(), t[wo](), t[wo]()
                }
            },
            exchanger2: {
                draw: function(t) {
                    t[lo](), t[vo](0, 0), t[tf](), t[of](0, 0), t[af](40, 0), t[af](40, 40), t.lineTo(0, 40), t[Cf](), t[ef](), t[vo](0, 0), t[vo](0, 0), t.scale(1, 1), t.translate(0, 0), t[ff] = Zx, t[Xx] = Im, t.lineJoin = jm, t[lp] = 4, t[lo](), t[lo](), t[wo](), t.save(), t[wo](), t[lo](), t[wo](), t[lo](), t[wo](), t.save(), t.restore(), t.save(), t.restore(), t[lo](), t[wo](), t[lo](), t[wo](), t[lo](), t.restore(), t[lo](), t.restore(), t[wo](), t[lo]();
                    var i = t[kx](.4102, 24.3613, 39.5898, 24.3613);
                    i.addColorStop(0, vp), i.addColorStop(.0788, mp), i.addColorStop(.2046, Pp), i.addColorStop(.3649, Cp), i[Ox](.5432, Ap), i.addColorStop(.6798, Lp), i[Ox](.7462, Rp), i[Ox](.8508, jp), i.addColorStop(.98, xp), i[Ox](1, Dp), t.fillStyle = i, t[tf](), t[of](.41, 16.649), t[Wm](.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t[Wm](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t[Wm](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t[Wm](26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t.bezierCurveTo(38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t.bezierCurveTo(39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t[Wm](39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t.closePath(), t[Bo](), t[No](), t[wo](), t[lo](), t[lo](), t.fillStyle = Mp, t.beginPath(), t[of](16.4, 25.185), t.bezierCurveTo(12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t.bezierCurveTo(3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t[Wm](1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t[Wm](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t.bezierCurveTo(22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t[Wm](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t.bezierCurveTo(40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t.bezierCurveTo(33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t.bezierCurveTo(23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t[Wm](13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t[Cf](), t[Bo](), t[No](), t[wo](), t.restore(), t.save(), t[lo](), t[lo](), t[lo](), t[lo](), t[sf] = Np, t[tf](), t.moveTo(5.21, 21.754), t[af](8.188, 17.922), t[af](9.53, 18.75), t[af](15.956, 16.004), t.lineTo(18.547, 17.523), t[af](12.074, 20.334), t[af](13.464, 21.204), t[af](5.21, 21.754), t[Cf](), t.fill(), t.stroke(), t.restore(), t[wo](), t[wo](), t[lo](), t[lo](), t[lo](), t.fillStyle = Np, t.beginPath(), t[of](17.88, 14.61), t[af](9.85, 13.522), t[af](11.703, 12.757), t[af](7.436, 10.285), t.lineTo(10.783, 8.942), t[af](15.091, 11.357), t[af](16.88, 10.614), t[af](17.88, 14.61), t[Cf](), t[Bo](), t[No](), t[wo](), t.restore(), t.save(), t[lo](), t[sf] = Np, t[tf](), t.moveTo(17.88, 14.61), t[af](9.85, 13.522), t.lineTo(11.703, 12.757), t.lineTo(7.436, 10.285), t[af](10.783, 8.942), t[af](15.091, 11.357), t[af](16.88, 10.614), t[af](17.88, 14.61), t.closePath(), t[Bo](), t[No](), t.restore(), t.restore(), t[wo](), t.save(), t[lo](), t.save(), t.fillStyle = Np, t.beginPath(), t[of](23.556, 15.339), t[af](20.93, 13.879), t[af](26.953, 11.304), t[af](25.559, 10.567), t[af](33.251, 9.909), t.lineTo(31.087, 13.467), t[af](29.619, 12.703), t.lineTo(23.556, 15.339), t.closePath(), t[Bo](), t[No](), t.restore(), t[wo](), t[wo](), t[lo](), t.save(), t.save(), t[sf] = Np, t.beginPath(), t[of](30.028, 23.383), t[af](24.821, 20.366), t.lineTo(22.915, 21.227), t.lineTo(21.669, 16.762), t[af](30.189, 17.942), t[af](28.33, 18.782), t[af](33.579, 21.725), t[af](30.028, 23.383), t.closePath(), t[Bo](), t[No](), t[wo](), t.restore(), t[lo](), t[lo](), t[sf] = Np, t.beginPath(), t.moveTo(30.028, 23.383), t[af](24.821, 20.366), t[af](22.915, 21.227), t.lineTo(21.669, 16.762), t[af](30.189, 17.942), t[af](28.33, 18.782), t[af](33.579, 21.725), t[af](30.028, 23.383), t[Cf](), t.fill(), t.stroke(), t[wo](), t[wo](), t.restore(), t[wo](), t[wo](), t[wo]()
                }
            },
            exchanger: {
                draw: function(t) {
                    t[lo](), t[vo](0, 0), t[tf](), t[of](0, 0), t[af](40, 0), t[af](40, 40), t[af](0, 40), t[Cf](), t[ef](), t[vo](0, 0), t[vo](0, 0), t.scale(1, 1), t[vo](0, 0), t.strokeStyle = Zx, t[Xx] = Im, t.lineJoin = jm, t[lp] = 4, t[lo](), t[lo](), t[wo](), t[lo](), t.restore(), t[lo](), t.restore(), t.save(), t[wo](), t.save(), t.restore(), t[lo](), t[wo](), t[lo](), t.restore(), t[wo](), t[lo]();
                    var i = t.createLinearGradient(.2095, 20.7588, 39.4941, 20.7588);
                    i.addColorStop(0, Bp), i[Ox](.0788, $p), i.addColorStop(.352, Fp), i[Ox](.6967, zp), i[Ox](.8916, Gp), i[Ox](.9557, qp), i[Ox](1, Yp), t.fillStyle = i, t[tf](), t.moveTo(39.449, 12.417), t.lineTo(39.384, 9.424), t[Wm](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t[Wm](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t.bezierCurveTo(.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t[Wm](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t[Wm](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t[Wm](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t.bezierCurveTo(34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t[Wm](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t[af](37.711, 30.316999999999997), t[af](39.281, 16.498999999999995), t[Wm](39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t[Wm](39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t.closePath(), t.fill(), t[No](), t[wo](), t.save(), t.save(), t[lo](), t[lo](), t[wo](), t[lo](), t[wo](), t[lo](), t.restore(), t[lo](), t.restore(), t[lo](), t[wo](), t[lo](), t.restore(), t[lo](), t[wo](), t[lo](), t[wo](), t[lo](), t[wo](), t[wo](), t[lo]();
                    var i = t[kx](19.8052, 7.7949, 19.8052, 24.7632);
                    i[Ox](0, Hp), i.addColorStop(.1455, Up), i[Ox](.2975, Wp), i[Ox](.4527, Vp), i.addColorStop(.6099, Xp), i[Ox](.7687, Kp), i[Ox](.9268, Jp), i[Ox](.9754, Zp), i[Ox](1, Qp), t.fillStyle = i, t.beginPath(), t.moveTo(33.591, 24.763), t[Wm](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t[Wm](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t[Wm](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t[Wm](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t[Wm](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t[Wm](16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t[Wm](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t.bezierCurveTo(36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t[Wm](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t.bezierCurveTo(39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t[Wm](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t[Wm](37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t[Wm](37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t[Cf](), t[Bo](), t[No](), t.restore(), t[wo](), t[wo](), t[lo](), t[lo](), t[lo](), t[sf] = Np, t[tf](), t[of](10.427, 19.292), t[af](5.735, 16.452), t.lineTo(12.58, 13.8), t[af](12.045, 15.07), t[af](20.482, 15.072), t[af](19.667, 17.887), t[af](11.029, 17.851), t[af](10.427, 19.292), t.closePath(), t[Bo](), t[No](), t[wo](), t.restore(), t.save(), t[lo](), t.fillStyle = Np, t.beginPath(), t.moveTo(13.041, 13.042), t[af](8.641, 10.73), t[af](14.82, 8.474), t[af](14.373, 9.537), t[af](22.102, 9.479), t[af](21.425, 11.816), t.lineTo(13.54, 11.85), t[af](13.041, 13.042), t[Cf](), t[Bo](), t[No](), t[wo](), t[wo](), t.save(), t[lo](), t[sf] = Np, t[tf](), t[of](29.787, 16.049), t[af](29.979, 14.704), t[af](21.51, 14.706), t[af](22.214, 12.147), t[af](30.486, 12.116), t[af](30.653, 10.926), t[af](36.141, 13.4), t[af](29.787, 16.049), t[Cf](), t.fill(), t.stroke(), t[wo](), t[wo](), t.save(), t[lo](), t.fillStyle = Np, t.beginPath(), t[of](28.775, 23.14), t[af](29.011, 21.49), t[af](19.668, 21.405), t[af](20.523, 18.295), t.lineTo(29.613, 18.338), t[af](29.815, 16.898), t[af](35.832, 19.964), t.lineTo(28.775, 23.14), t[Cf](), t[Bo](), t.stroke(), t[wo](), t[wo](), t[wo](), t[wo]()
                }
            },
            cloud: {
                draw: function(t) {
                    t[lo](), t.beginPath(), t[of](0, 0), t[af](90.75, 0), t[af](90.75, 62.125), t[af](0, 62.125), t[Cf](), t[ef](), t[ff] = Zx, t.lineCap = Im, t[t_] = jm, t[lp] = 4, t[lo]();
                    var i = t.createLinearGradient(44.0054, 6.4116, 44.0054, 51.3674);
                    i[Ox](0, "rgba(159, 160, 160, 0.7)"), i[Ox](.9726, tE), t.fillStyle = i, t[tf](), t[of](57.07, 20.354), t.bezierCurveTo(57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t[Wm](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t[Wm](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t[Wm](18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t[Wm](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t[Wm](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t.bezierCurveTo(34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t[Wm](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t[Wm](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t[Wm](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t[Wm](73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t[Cf](), t.fill(), t[No](), t[wo](), t.restore()
                }
            },
            node: {
                width: 60,
                height: 100,
                draw: function(t) {
                    t[lo](), t[vo](0, 0), t[tf](), t[of](0, 0), t[af](40, 0), t[af](40, 40), t[af](0, 40), t[Cf](), t[ef](), t[vo](0, 0), t[vo](0, 0), t.scale(1, 1), t[vo](0, 0), t[ff] = Zx, t[Xx] = Im, t[t_] = jm, t.miterLimit = 4, t[lo](), t.fillStyle = iE, t[tf](), t[of](13.948, 31.075), t[af](25.914, 31.075), t.quadraticCurveTo(25.914, 31.075, 25.914, 31.075), t[af](25.914, 34.862), t[Um](25.914, 34.862, 25.914, 34.862), t[af](13.948, 34.862), t[Um](13.948, 34.862, 13.948, 34.862), t[af](13.948, 31.075), t[Um](13.948, 31.075, 13.948, 31.075), t[Cf](), t[Bo](), t[No](), t[wo](), t[lo](), t[sf] = nE, t[tf](), t.moveTo(29.679, 35.972), t[Wm](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t[af](11.456, 37.244), t[Wm](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t[af](10.183, 36.136), t[Wm](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t[af](28.407, 34.863), t[Wm](29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t[af](29.678, 35.972), t[Cf](), t.fill(), t[No](), t.restore(), t.save(), t[sf] = nE, t.beginPath(), t[of](.196, 29.346), t.bezierCurveTo(.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t[af](37.936, 31.075), t[Wm](38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t.lineTo(39.665, 27.174), t[af](.196, 27.174), t[af](.196, 29.346), t[Cf](), t[Bo](), t[No](), t.restore(), t.save(), t.fillStyle = eE, t[tf](), t.moveTo(37.937, 3.884), t.lineTo(1.926, 3.884), t.bezierCurveTo(.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t[af](.19699999999999984, 27.12), t.lineTo(39.666000000000004, 27.12), t[af](39.666000000000004, 5.615), t[Wm](39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t.closePath(), t[Bo](), t.stroke(), t[wo](), t.save(), t.save(), t[wo](), t.save(), t[wo](), t[wo](), t[lo]();
                    var i = t.createLinearGradient(6.9609, 2.9341, 32.9008, 28.874);
                    i[Ox](0, sE), i[Ox](1, rE), t[sf] = i, t[tf](), t[of](35.788, 6.39), t[af](4.074, 6.39), t[Wm](3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t[af](2.702, 24.616), t.lineTo(37.159, 24.616), t[af](37.159, 7.763), t.bezierCurveTo(37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t[Cf](), t[Bo](), t[No](), t[wo](), t[wo]()
                }
            },
            group: {
                draw: function(t) {
                    t.save(), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(47.75, 0), t[af](47.75, 40), t[af](0, 40), t[Cf](), t[ef](), t[vo](0, 0), t.translate(0, 0), t[bo](1, 1), t[vo](0, 0), t[ff] = Zx, t[Xx] = Im, t[t_] = jm, t[lp] = 4, t[lo](), t[lo](), t[sf] = iE, t[tf](), t.moveTo(10.447, 26.005), t.lineTo(18.847, 26.005), t[Um](18.847, 26.005, 18.847, 26.005), t[af](18.847, 28.663), t.quadraticCurveTo(18.847, 28.663, 18.847, 28.663), t[af](10.447, 28.663), t.quadraticCurveTo(10.447, 28.663, 10.447, 28.663), t[af](10.447, 26.005), t[Um](10.447, 26.005, 10.447, 26.005), t[Cf](), t.fill(), t[No](), t[wo](), t[lo](), t.fillStyle = nE, t[tf](), t[of](21.491, 29.443), t[Wm](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t[af](8.698, 30.338), t.bezierCurveTo(8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t[af](7.8020000000000005, 29.557000000000002), t[Wm](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t[af](20.597, 28.662000000000003), t[Wm](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t.lineTo(21.491, 29.443), t[Cf](), t[Bo](), t.stroke(), t[wo](), t.save(), t.fillStyle = nE, t[tf](), t[of](.789, 24.79), t[Wm](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t[af](27.289, 26.005), t[Wm](27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t[af](28.504, 23.267), t[af](.789, 23.267), t[af](.789, 24.79), t[Cf](), t[Bo](), t.stroke(), t[wo](), t.save(), t.fillStyle = eE, t[tf](), t[of](27.289, 6.912), t[af](2.006, 6.912), t[Wm](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t[af](.7889999999999997, 23.227), t[af](28.503999999999998, 23.227), t.lineTo(28.503999999999998, 8.126), t[Wm](28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t[Cf](), t[Bo](), t[No](), t[wo](), t.save(), t[lo](), t[wo](), t[lo](), t[wo](), t[wo](), t[lo]();
                    var i = t.createLinearGradient(5.54, 6.2451, 23.7529, 24.458);
                    i[Ox](0, sE), i[Ox](1, rE), t[sf] = i, t[tf](), t[of](25.78, 8.671), t[af](3.514, 8.671), t[Wm](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t[af](2.549, 21.466), t[af](26.743, 21.466), t.lineTo(26.743, 9.636), t[Wm](26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t.closePath(), t[Bo](), t[No](), t.restore(), t[wo](), t.save(), t[lo](), t[sf] = iE, t.beginPath(), t[of](27.053, 33.602), t[af](36.22, 33.602), t.quadraticCurveTo(36.22, 33.602, 36.22, 33.602), t[af](36.22, 36.501), t[Um](36.22, 36.501, 36.22, 36.501), t[af](27.053, 36.501), t[Um](27.053, 36.501, 27.053, 36.501), t[af](27.053, 33.602), t[Um](27.053, 33.602, 27.053, 33.602), t[Cf](), t[Bo](), t[No](), t.restore(), t[lo](), t[sf] = nE, t.beginPath(), t.moveTo(39.104, 37.352), t[Wm](39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t[af](25.143, 38.327), t[Wm](24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t.lineTo(24.166, 37.477999999999994), t.bezierCurveTo(24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t[af](38.131, 36.501), t[Wm](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t.lineTo(39.105, 37.352), t.closePath(), t[Bo](), t[No](), t[wo](), t[lo](), t.fillStyle = nE, t[tf](), t[of](16.514, 32.275), t.bezierCurveTo(16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t[af](45.433, 33.601), t[Wm](46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t[af](46.758, 30.607999999999997), t[af](16.514, 30.607999999999997), t[af](16.514, 32.275), t[Cf](), t[Bo](), t.stroke(), t[wo](), t[lo](), t[sf] = eE, t[tf](), t[of](45.433, 12.763), t.lineTo(17.839, 12.763), t[Wm](17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t.lineTo(16.514, 30.57), t[af](46.757999999999996, 30.57), t[af](46.757999999999996, 14.088), t[Wm](46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t[Cf](), t[Bo](), t.stroke(), t.restore(), t[lo](), t[lo](), t[wo](), t[lo](), t[wo](), t[wo](), t.save(), i = t.createLinearGradient(21.6973, 12.0352, 41.5743, 31.9122), i.addColorStop(0, sE), i[Ox](1, rE), t[sf] = i, t[tf](), t[of](43.785, 14.683), t[af](19.486, 14.683), t[Wm](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t[af](44.837, 28.649), t.lineTo(44.837, 15.734), t.bezierCurveTo(44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t[Cf](), t.fill(), t[No](), t[wo](), t.restore(), t[lo](), t[hf] = .5, t[tf](), t[of](23.709, 36.33), t[af](4.232, 36.33), t[af](4.232, 27.199), t[af](5.304, 27.199), t[af](5.304, 35.259), t.lineTo(23.709, 35.259), t.lineTo(23.709, 36.33), t[Cf](), t.fill(), t[No](), t.restore(), t.restore()
                }
            },
            subnetwork: {
                draw: function(t) {
                    t[lo](), t.translate(0, 0), t.beginPath(), t[of](0, 0), t[af](60.75, 0), t.lineTo(60.75, 42.125), t.lineTo(0, 42.125), t[Cf](), t[ef](), t.translate(0, .26859504132231393), t[bo](.6694214876033058, .6694214876033058), t[vo](0, 0), t[ff] = Zx, t[Xx] = Im, t[t_] = jm, t[lp] = 4, t[lo](), t[lo](), t.restore(), t.save(), t[wo](), t.restore(), t[lo]();
                    var i = t.createLinearGradient(43.6724, -2.7627, 43.6724, 59.3806);
                    i.addColorStop(0, "rgba(159, 160, 160, 0.7)"), i[Ox](.9726, tE), t.fillStyle = i, t.beginPath(), t.moveTo(61.732, 16.509), t.bezierCurveTo(61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t[Wm](58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t[Wm](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t.bezierCurveTo(9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t[Wm](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t[Wm](23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t.bezierCurveTo(31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t.bezierCurveTo(42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t.bezierCurveTo(51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t[Wm](74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t.bezierCurveTo(85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t[Cf](), t.fill(), t.stroke(), t.restore(), t.save(), t[lo](), t[sf] = iE, t.beginPath(), t.moveTo(34.966, 44.287), t.lineTo(45.112, 44.287), t[Um](45.112, 44.287, 45.112, 44.287), t[af](45.112, 47.497), t[Um](45.112, 47.497, 45.112, 47.497), t.lineTo(34.966, 47.497), t[Um](34.966, 47.497, 34.966, 47.497), t[af](34.966, 44.287), t.quadraticCurveTo(34.966, 44.287, 34.966, 44.287), t[Cf](), t[Bo](), t[No](), t.restore(), t.save(), t[sf] = hE, t.beginPath(), t[of](48.306, 48.439), t[Wm](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t[af](32.854, 49.52), t[Wm](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t[af](31.771, 48.578), t.bezierCurveTo(31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t[af](47.226, 47.497), t[Wm](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t[af](48.306, 48.439), t.closePath(), t[Bo](), t[No](), t[wo](), t.save(), t.fillStyle = aE, t[tf](), t.moveTo(23.302, 42.82), t[Wm](23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t.lineTo(55.308, 44.287), t[Wm](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t[af](56.775, 40.98), t[af](23.302, 40.98), t.lineTo(23.302, 42.82), t[Cf](), t[Bo](), t.stroke(), t[wo](), t[lo](), t[sf] = eE, t[tf](), t.moveTo(55.307, 21.229), t.lineTo(24.771, 21.229), t[Wm](23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t.lineTo(23.301000000000002, 40.933), t.lineTo(56.774, 40.933), t[af](56.774, 22.695), t[Wm](56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t.closePath(), t[Bo](), t[No](), t.restore(), t[lo](), t[lo](), t[wo](), t[lo](), t.restore(), t[wo](), t.save(), i = t.createLinearGradient(29.04, 20.4219, 51.0363, 42.4181), i.addColorStop(0, sE), i.addColorStop(1, rE), t.fillStyle = i, t[tf](), t[of](53.485, 23.353), t[af](26.592, 23.353), t.bezierCurveTo(25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t[af](25.427, 38.807), t[af](54.647, 38.807), t[af](54.647, 24.517000000000003), t[Wm](54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t[Cf](), t[Bo](), t[No](), t[wo](), t[wo](), t[wo]()
                }
            }
        };
    for (var pH in xH) kn(oE + pH, xH[pH]);
    var EH = function() {
            this.$invalidateRotate = !1;
            var t = this._fj;
            t[ru]();
            var i = this[qf] || 0,
                n = this._7u.x + i / 2,
                e = this._7u.y + i / 2,
                s = this._7u[Oa] - i,
                r = this._7u.height - i,
                h = Vn[ih](this, {
                    x: n,
                    y: e
                });
            Zn(t, h.x, h.y, !0), h = Vn[ih](this, {
                x: n + s,
                y: e
            }), Zn(t, h.x, h.y), h = Vn.call(this, {
                x: n + s,
                y: e + r
            }), Zn(t, h.x, h.y), h = Vn[ih](this, {
                x: n,
                y: e + r
            }), Zn(t, h.x, h.y), this[Zf] && (h = Vn[ih](this, {
                x: this[su],
                y: this[iu]
            }), Zn(t, h.x, h.y)), i && t[Yf](i / 2)
        },
        wH = 20,
        TH = {
            _fq: !1,
            _jz: null,
            _mxx: 0,
            _ld: -1,
            _kh: null,
            _ew: function(t) {
                this._jz || (this._jz = [], this._iz = JY), this._jz.push(t), this._ev(), this._kx()
            },
            _kx: function() {
                if (!this._kh) {
                    var t = this;
                    this._kh = setTimeout(function i() {
                        return t._ev() !== !1 ? void(t._kh = setTimeout(i, t._g1())) : void delete t._kh
                    }, this._g1())
                }
            },
            _g1: function() {
                return Math.max(wH, this._jz[this._ld].delay)
            },
            _ev: function() {
                return this._g2(this._ld + 1)
            },
            _g2: function(t) {
                if (this._fq) t %= this[fE];
                else if (t >= this._jz[nh]) return !1;
                if (this._ld == t) return !1;
                this._ld = t;
                var i = this._jz[this._ld],
                    n = i._mxache;
                return n || (i[uE] = n = Di(this[Oa], this[Ja]), n.g[Ou](i[$o], 0, 0), n[ex] = i[ex]), this._kk = n, this.$invalidateSize = !0, this._dy()
            },
            _mxo: function() {
                return this._jz ? (this._fq = !0, this[fE] = this._jz.length, 1 == this[fE] ? this._dy() : void this._kx()) : void this._hq()
            },
            _lm: function() {
                this._kh && (clearTimeout(this._kh), delete this._kh)
            },
            _dy: function() {
                var t = this[Qm].listeners;
                if (!t || !t[nh]) return !1;
                for (var i = new Bq(this, yx, gx, this._kk), n = 0, e = t[nh]; e > n; n++) {
                    var s = t[n];
                    s.scope._jd && s[pv]._jd[cE] ? (t[hh](n, 1), n--, e--) : s[gv][ih](s.scope, i)
                }
                return t.length > 0
            },
            _mzd: function(t, i) {
                this._dispatcher[X_](t, i), this._fq && !this._kh && this._kx()
            },
            _6w: function(t, i) {
                this._dispatcher.removeListener(t, i), this[Qm]._mye() || this._lm()
            },
            _id: function() {
                this._lm(), this[Qm][ru]()
            },
            _f7: function() {
                var t = this._kk._myufferedImage;
                return t || (this._kk._myufferedImage = t = new gH(this._kk, 1)), t
            }
        },
        kH = function(t) {
            return t.reduce(function(t, i) {
                return 2 * t + i
            }, 0)
        },
        OH = function(t) {
            for (var i = [], n = 7; n >= 0; n--) i.push(!!(t & 1 << n));
            return i
        },
        SH = function(t) {
            this[$o] = t, this.len = this[$o].length, this.pos = 0, this[dE] = function() {
                if (this.pos >= this[$o][nh]) throw new Error("Attempted to read past end of stream.");
                return 255 & t.charCodeAt(this.pos++)
            }, this[_E] = function(t) {
                for (var i = [], n = 0; t > n; n++) i[fh](this[dE]());
                return i
            }, this.read = function(t) {
                for (var i = "", n = 0; t > n; n++) i += String[Lu](this[dE]());
                return i
            }, this[lE] = function() {
                var t = this[_E](2);
                return (t[1] << 8) + t[0]
            }
        },
        MH = function(t, i, n) {
            for (var e, s, r = 0, h = function(t) {
                for (var n = 0, e = 0; t > e; e++) i[Cu](r >> 3) & 1 << (7 & r) && (n |= 1 << e), r++;
                return n
            }, a = [], o = 1 << t, f = o + 1, u = t + 1, c = [], d = function() {
                c = [], u = t + 1;
                for (var i = 0; o > i; i++) c[i] = [i];
                c[o] = [], c[f] = null
            }, _ = 0; s = e, e = h(u), !(_++ > n);)
                if (e !== o) {
                    if (e === f) break;
                    if (e < c[nh]) s !== o && c[fh](c[s][rh](c[e][0]));
                    else {
                        if (e !== c.length) throw new Error(vE);
                        c[fh](c[s][rh](c[s][0]))
                    }
                    a[fh][dh](a, c[e]), c.length === 1 << u && 12 > u && u++
                } else d();
            return a
        },
        IH = function(t, i) {
            i || (i = {});
            var n = function(i) {
                    for (var n = [], e = 0; i > e; e++) n[fh](t[_E](3));
                    return n
                },
                e = function() {
                    var i, n;
                    n = "";
                    do i = t[dE](), n += t[bE](i); while (0 !== i);
                    return n
                },
                s = function() {
                    var e = {};
                    if (e.sig = t[bE](3), e.ver = t.read(3), yE !== e.sig) throw new Error(gE);
                    e[Oa] = t[lE](), e[Ja] = t[lE]();
                    var s = OH(t[dE]());
                    e.gctFlag = s[mE](), e[xE] = kH(s.splice(0, 3)), e.sorted = s[mE](), e[pE] = kH(s.splice(0, 3)), e[EE] = t.readByte(), e[wE] = t[dE](), e[TE] && (e.gct = n(1 << e[pE] + 1)), i.hdr && i.hdr(e)
                },
                r = function(n) {
                    var s = function(n) {
                            var e = (t[dE](), OH(t[dE]()));
                            n[kE] = e.splice(0, 3), n.disposalMethod = kH(e[hh](0, 3)), n[OE] = e[mE](), n[SE] = e[mE](), n.delayTime = t.readUnsigned(), n.transparencyIndex = t[dE](), n[ME] = t.readByte(), i.gce && i.gce(n)
                        },
                        r = function(t) {
                            t[IE] = e(), i.com && i.com(t)
                        },
                        h = function(n) {
                            t[dE](), n[PE] = t[_E](12), n[CE] = e(), i.pte && i.pte(n)
                        },
                        a = function(n) {
                            var s = function(n) {
                                    t[dE](), n.unknown = t.readByte(), n[AE] = t[lE](), n[ME] = t[dE](), i.app && i.app[LE] && i.app[LE](n)
                                },
                                r = function(t) {
                                    t[RE] = e(), i.app && i.app[t.identifier] && i.app[t.identifier](t)
                                };
                            switch (t[dE](), n[jE] = t.read(8), n[DE] = t[bE](3), n[jE]) {
                                case "NETSCAPE":
                                    s(n);
                                    break;
                                default:
                                    r(n)
                            }
                        },
                        o = function(t) {
                            t[$o] = e(), i[NE] && i[NE](t)
                        };
                    switch (n[BE] = t.readByte(), n.label) {
                        case 249:
                            n.extType = $E, s(n);
                            break;
                        case 254:
                            n.extType = FE, r(n);
                            break;
                        case 1:
                            n[zE] = GE, h(n);
                            break;
                        case 255:
                            n[zE] = qE, a(n);
                            break;
                        default:
                            n[zE] = NE, o(n)
                    }
                },
                h = function(s) {
                    var r = function(t, i) {
                        for (var n = new Array(t[nh]), e = t[nh] / i, s = function(e, s) {
                            var r = t[sh](s * i, (s + 1) * i);
                            n[hh][dh](n, [e * i, i][rh](r))
                        }, r = [0, 4, 2, 1], h = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++)
                            for (var f = r[o]; e > f; f += h[o]) s(f, a), a++;
                        return n
                    };
                    s[wu] = t[lE](), s.topPos = t.readUnsigned(), s[Oa] = t[lE](), s.height = t[lE]();
                    var h = s.width * s.height,
                        a = OH(t[dE]());
                    s[Eu] = a[mE](), s[YE] = a[mE](), s[HE] = a.shift(), s[kE] = a[hh](0, 2), s[UE] = kH(a[hh](0, 3)), s.lctFlag && (s.lct = n(1 << s.lctSize + 1)), s.lzwMinCodeSize = t[dE]();
                    var o = e();
                    s[Tu] = MH(s[WE], o, h), s[YE] && (s.pixels = r(s[Tu], s[Oa])), i.img && i.img(s)
                },
                a = function() {
                    var n = {};
                    switch (n.sentinel = t[dE](), String[Lu](n[VE])) {
                        case "!":
                            n.type = XE, r(n);
                            break;
                        case ",":
                            n[qo] = Nd, h(n);
                            break;
                        case ";":
                            n.type = KE, i.eof && i.eof(n);
                            break;
                        default:
                            throw new Error(JE + n[VE].toString(16))
                    }
                    KE !== n[qo] && setTimeout(a, 0)
                },
                o = function() {
                    s(), setTimeout(a, 0)
                };
            o()
        },
        PH = "";
    i.addEventListener && i.addEventListener(ZE, function(t) {
        if (t.ctrlKey && t[QE] && t[tw] && 73 == t[iw]) {
            var i = LY.name + nw + LY.version + ew + LY.publishDate + Eo + LY[sw] + Eo + LY[rw] + PH;
            LY[hw](i)
        }
    }, !1);
    var CH = aw;
    PH = ow + decodeURIComponent(fw);
    var AH, LH, RH, jH = t,
        DH = uw,
        NH = cw,
        BH = dw,
        $H = _w,
        FH = lw,
        zH = vw,
        GH = bw,
        qH = yw,
        YH = gw,
        HH = mw,
        UH = xw,
        WH = pw,
        VH = Ew,
        XH = ww,
        KH = bh,
        JH = Tw,
        ZH = kw,
        QH = Ow,
        tU = Sw,
        iU = Mw,
        nU = Iw,
        eU = jH[$H + Pw];
    eU && (LH = jH[XH + Cw][FH + Aw], eU.call(jH, re, JH), eU[ih](jH, he, tU), eU[ih](jH, function() {
        rU && rU == CH && (lU = !1)
    }, ZH));
    var sU, rU, hU, aU = 111,
        oU = function(t, i) {
            i || (i = Lw + NH + Rw);
            try {
                RH.call(t, i, 6 * aU, 1 * aU)
            } catch (n) {}
        },
        fU = !0,
        uU = !0,
        cU = !0,
        dU = !0,
        _U = !0,
        lU = !0,
        vU = 2048,
        bU = function(t, i) {
            return se ? se(t, i) || "" : void 0
        };
    if (i[ro]) {
        var yU = i[ro](jw);
        yU[ya][Dw] = Yd, yU[Su] = function(t) {
            var i = t[a_][Nw],
                n = LH;
            if ("" === n || Bw == n || $w == n) return void this[tx][tx][ix](this[tx]);
            var e = i[Fw].fromCharCode;
            i[$H + Pw](function() {
                ee(e) != sU && (YU[_h]._jh = null)
            }, tU), this[tx][tx][ix](this[tx])
        };
        var gU = i[ro](jd);
        gU[ya][Oa] = Jd, gU[ya][Ja] = Jd, gU[ya].overflow = qd, gU[Wu](yU), i.documentElement[Wu](gU)
    }
    if (i[KH + zw]) {
        var mU = i[KH + zw](YH + Gw);
        mU[ya][Dw] = Yd, mU[Su] = function(t) {
            var i = qw,
                n = t[a_][i + Yw];
            AH = n[Hw].now();
            var e = n[HH + UH + Uw + WH + Ww][VH + qo];
            RH = e[DH + Vw], cq && (n = jH);
            var s = n[$H + Pw];
            s.call(jH, ue, tU), s[ih](jH, ce, iU), s[ih](jH, _e, ZH), s[ih](jH, ae, QH), s[ih](jH, fe, nU), s[ih](jH, de, tU), s[ih](jH, oe, tU), this[tx][tx][ix](this[tx])
        };
        var gU = i.createElement(jd);
        gU[ya].width = Jd, gU.style[Ja] = Jd, gU[ya].overflow = qd, gU[Wu](mU), i[q_].appendChild(gU)
    }
    var xU = {
            position: Xw,
            userSelect: Yd,
            outline: Yd,
            transformOrigin: Kw,
            "-webkit-tap-highlight-color": Zx
        },
        pU = Jw;
    mi(Zh + pU, xU);
    var EU = {
            width: Wd,
            height: Wd,
            position: Hd,
            overflow: qd,
            textAlign: La,
            outline: Yd,
            tapHighlightColor: Zx,
            userSelect: Yd
        },
        wU = Zw;
    mi(Zh + wU, EU);
    var TU = Qw,
        kU = {
            overflow: qd,
            "text-align": La,
            "-webkit-tap-highlight-color": Zx,
            outline: Yd
        };
    mi(Zh + TU, kU);
    var OU = M(function(t) {
        this[tT] = new MU, this._mq = new xq, this._87 = [], this._mxh = [], this[iT] = [], this._8c = {}, this.bounds = new Sq, this._jq = new RU, this[nT] = new jU, this._jq[yv] = function(t) {
            this._6j(t)
        }[Th](this), this._mx1(), this[eT](t)
    }, {
        _mz7: null,
        _j0: null,
        _mq: null,
        _mxh: null,
        _jq: null,
        _myq: function(t) {
            return t ? (this._5vs || (this._5vs = {}), this._5vs[t] ? !1 : (this[sT][t] = !0, void this[rT]())) : this[rT]()
        },
        _mz0: function(t) {
            return this[sT] && this._5vs[t]
        },
        isInvalidate: function() {
            return this._5v
        },
        clear: function() {
            this._mq.clear(), this[hT][nh] = 0, this._8c = {}, this[Tb] = !1, this[rT]()
        },
        _65: function() {
            this[aT](oT), this._2f()
        },
        _2f: function() {
            this._myq(fT)
        },
        invalidate: function(t) {
            (t || !this._5v) && (this._5v = !0, this._lm || (this._jhingID = requestAnimationFrame(this._ey.bind(this))))
        },
        _6r: function(t) {
            return this._lm = t, t ? void(this._jhingID && (cancelAnimationFrame(this[uT]), this._jhingID = null)) : void(this._5v && this[rT](!0))
        },
        _ey: function() {
            this[uT] = null, this._5v = !1;
            var t = this._mz9;
            this[Tb] || (this[cT](), this[Tb] = !0), this[dT](!t), this._37(), this._jh(), this._1r()
        },
        _myp: function(t) {
            this[_T] = t || this[lT], (t || this._5vs[oT]) && this._9j(), (t || this._5vs[vT]) && this._6e(), this[bT](t), this._40(t), this._5vs = {}
        },
        _37: function() {
            this[hT][nh] = 0;
            var t = this[nT];
            if (this._mq[ku](function(i) {
                if (i.__i0 !== !1) {
                    var n = this[yT](i);
                    t[Nl](n.x, n.y, n.width, n[Ja]) && this[hT][fh](i)
                }
            }, this), this[hT] = this._ib(this._mxh), !this[_T]) {
                var i = this[tT];
                this._ljingList[nh] = 0, i[gT](this._viewport), i._hb() || this[hT][ku](function(t) {
                    var n = this._mzz(t);
                    i._em(n.x, n.y, n[Oa], n[Ja]) && this[iT][fh](t)
                }, this)
            }
        },
        _ib: function(t) {
            return cq ? t = _(t, this._9y) : t[mT](this._9y), t
        },
        _9y: function(t, i) {
            return t = t.zIndex || 0, i = i[xT] || 0, t - i
        },
        _mzz: function(t) {
            return t[pT]
        },
        _jh: function() {
            if (this[_T]) return this._ds(), this._6g(!0), void this[ET](this._mxtx, this._mxh);
            this._6g(this[wT]);
            var t = this[tT],
                i = this._mxtx;
            i[lo](), this[wT] && (be(i), i[r_](this[wT][ho], this[wT].x, this[wT].y)), t._ir(i, this._dq.bind(this)), this._ds(), this.render(i, this[iT]), i[wo]()
        },
        _6g: function(t) {
            this[TT] ? (this._myqCanvasSizeFlag = !1, this._j0[fo](this._width, this[ux])) : t && ve(this._j0)
        },
        _9j: function() {
            var t = this[Oa],
                i = this[Ja];
            return this[fx] == t && this[ux] == i ? !1 : (this[fx] = t, this._height = i, void(this[TT] = !0))
        },
        _40: function(t) {
            if (!t && !this[sT][fT]) return !1;
            var i = this._jq[kT]([0, 0]),
                n = this.scale,
                e = this._width / n,
                s = this._height / n,
                r = this[Yo],
                h = this[nT];
            if (h.x == i[0] && h.y == i[1] && h[Oa] == e && h[Ja] == s && h[Yo] == r) return !1;
            var a = h[zx]();
            return this._viewport.set(i[0], i[1], e, s, r, n), this._36(this[nT], a, t), !0
        },
        _36: function(t, i, n) {
            this[_T] || n || (this._myuffer = this._fu(i, t))
        },
        _6j: function() {
            if (this[Tb]) {
                if (this._lm) {
                    var t;
                    this._mxurrentMatrix ? this._mxurrentMatrix[OT] = t = CU.mul([], this._jq.m, CU[ST]([], this[MT].m)) : t = this._jq.m, this._5h(t)
                }
                this[aT](vT), this._2f()
            }
        },
        _5h: function(t) {
            this.__mxssMatrix = t, DU.setStyle(this._j0, Bd, t ? IT + t[PT](Gh) + ")" : "")
        },
        _6e: function() {
            var t = this._mxurrentMatrix;
            if (this[MT] = {
                tx: this._jq.m[4],
                ty: this._jq.m[5],
                m: this._jq.m.slice(),
                scale: this._jq._g6(),
                rotate: this._jq._do()
            }, this.__mxssMatrix && this._5h(null), !this[_T]) {
                if (this._2r(this[MT], t), !t || t[bo] != this[MT][bo]) return this._6z(this._mxurrentMatrix[bo], t ? t[bo] : null), void(this[_T] = !0);
                if (!t || t.rotate != this[MT].rotate) return this._5j(this._mxurrentMatrix[Yo], t ? t[Yo] : null), void(this._mzr = !0);
                var i = t.m[4] - this[MT].m[4],
                    n = t.m[5] - this._mxurrentMatrix.m[5],
                    e = this[Qa];
                i *= e, n *= e;
                var s = 1e-4;
                (Math.abs(i - Math[Ro](i)) > s || Math.abs(n - Math[Ro](n)) > s) && (this._mzr = !0)
            }
        },
        _6b: function() {
            var t = this.bounds,
                i = t[oh]();
            t[ru](), this._mq[ku](function(i) {
                i[CT] !== !1 && t.add(this[yT](i))
            }, this), t[Hu](i) || this._34(t, i)
        },
        _34: function() {},
        _mz9: !1,
        _mx8: function() {},
        _99: function(t) {
            var i = t[Qa];
            t[bo](i, i), t.transform[dh](t, this._jq.m)
        },
        render: function(t, i) {
            i && i[nh] && (t[lo](), this._99(t), i[ku](function(i) {
                if (t[lo](), i[AT] !== !1) try {
                    i.render(t)
                } catch (n) {
                    console[na](n)
                }
                t[wo]()
            }, this), t[wo]())
        },
        setParent: function(t) {
            N(t) && (t = i[LT](t)), this._me != t && (this._me && this._mz7 && (j(this._me, TU), this._me[ix](this[RT])), this._me = t, this._me && (R(this._me, TU), this._me[Wu](this._62()), this._65()))
        },
        _62: function() {
            return this._mz7 || this[jT](), this[RT]
        },
        _mx1: function() {
            var t = Di(!0);
            ie(t.g), t[Oh] = pU;
            var n = i[ro](jd);
            return n[ub](ny, function(t) {
                return i[DT] == this ? (t[Dh] && t[Dh](), !1) : void 0
            }.bind(n), !1), n.className = wU, n[Wu](t), n[NT] = 0, this._j0 = t, this[RT] = n, this[BT] = this._j0.getContext(oo), t
        },
        toLogical: function(t, i) {
            return t instanceof Object && (Q(t) && (t = this._85(t)), Array[Nc](t) ? (i = t[1] || 0, t = t[0] || 0) : (i = t.y || 0, t = t.x || 0)), this._jq[kT]([t, i])
        },
        toCanvas: function(t, i) {
            return this._jq[Bd]([t, i])
        },
        _85: function(t) {
            return pi(t, this[RT])
        },
        _ed: function(t, i, n) {
            if (t[Md] instanceof Function) return t[Md](i, n);
            var e = this._mzz(t);
            return e ? n ? Sq[Nl](e.x, e.y, e[Oa], e[Ja], i[0] - n, i[1] - n, n + n, n + n) : Sq.intersects(e.x, e.y, e[Oa], e.height, i[0], i[1]) : t
        },
        hitTest: function(t, i) {
            return this._8d(t, i)
        },
        _8d: function(t, i) {
            i = this._91(i), t = this.toLogical(t);
            for (var n, e = this[hT][nh]; --e >= 0;)
                if (n = this[hT][e], this._ed(n, t, i)) return n
        },
        _91: function(t) {
            return (t === n || null === t) && (t = mq[x_]), t ? t / this.scale : 0
        },
        getUIByMouseEvent: function(t, i) {
            if (t.uiId) return this._mq[pl](t.uiId);
            var n = this._8d(t, i);
            return t[$T] = n ? n.id : -1, n
        },
        _8c: null,
        invalidateUI: function(t) {
            this._8c[t.id] = t, this.invalidate()
        },
        _9r: function(t) {
            t.validate instanceof Function && t[Io](this)
        },
        _mxa: function(t, i) {
            t[FT] && this._fv(t.__j9);
            var n = t[CT];
            if (t[CT] = this._eg(t, i), !t[CT]) return n;
            var e = t.__j9;
            this._9r(t);
            var s = this[yT](t);
            t.__j9 = {
                x: s.x,
                y: s.y,
                width: s.width,
                height: s.height
            };
            var r = t[CT] !== n || !Sq[Hu](e, s);
            return r && t[FT] && this._fv(t[FT]), r
        },
        _eg: function(t) {
            return t[AT] !== !1
        },
        _$p: function(t) {
            this._mq[ku](function(i) {
                this[zT](i, t)
            }, this), this._8c = {}, this._6b()
        },
        _mzg: function(t) {
            var i = this[bo];
            if (t) return this._$p(i);
            var n = this[GT];
            this[GT] = !1;
            for (var e in this._8c) {
                var s = this._8c[e];
                n ? this[zT](s, i) : n = this[zT](s, i)
            }
            this._8c = {}, n && this._6b()
        },
        _87: null,
        _1r: function() {
            if (!this._87[nh]) return !1;
            var t = this._87;
            this._87 = [], t[ku](function(t) {
                try {
                    var i = t[ih],
                        n = t[pv],
                        e = t.delay;
                    n instanceof Object ? i = i.bind(n) : n && !e && (e = parseInt(n)), e ? setTimeout(i, e) : i()
                } catch (s) {}
            }, this), this._5v && this._ey()
        },
        _dw: function(t, i, n) {
            this._87.push({
                call: t,
                scope: i,
                delay: n
            }), this._5v || this._1r()
        },
        _4j: function(t, i) {
            for (var n = this[hT], e = 0, s = n[nh]; s > e; e++)
                if (t.call(i, n[e]) === !1) return !1
        },
        _ea: function(t, i) {
            this._mq[ku](t, i)
        },
        _$s: function(t, i) {
            for (var n = this[hT], e = n.length - 1; e >= 0; e--)
                if (t[ih](i, n[e]) === !1) return !1
        },
        _4q: function(t, i) {
            this._mq[qT](t, i)
        },
        _3z: function() {
            return this[Co]
        },
        _fh: function(t, i, n) {
            t /= this[bo] || 1, this._jm(t, i, n)
        },
        _jm: function(t, i, e) {
            if (this[Tb] && (i === n || null === i)) {
                var s = this.toLogical(this.width / 2, this[Ja] / 2);
                i = s[0] || 0, e = s[1] || 0
            }
            return this._jq[bo](t, [i || 0, e || 0])
        },
        _dv: function(t, i) {
            this._jq.translate([t, i], !0)
        },
        _mzm: function(t, i, n, e) {
            if (n == this[bo] && e !== !1) {
                var s = this.ratio;
                s != (0 | s) && (t = Math[Ro](t * s) / s, i = Math.round(i * s) / s)
            }
            this._jq[YT]([t, i], n)
        },
        _jk: function(t, i) {
            return this._jm(this._du, t, i)
        },
        _i9: function(t, i) {
            return this._jm(1 / this._du, t, i)
        },
        _1e: function() {
            var t = this._3z();
            if (!t.isEmpty()) {
                var i = this[Oa] / t.width,
                    n = this[Ja] / t[Ja],
                    e = Math.min(i, n);
                return e = Math.max(this._fo, Math.min(this._fn, e)), {
                    scale: e,
                    cx: t.cx,
                    cy: t.cy
                }
            }
        },
        _du: 1.3,
        _fn: 10,
        _fo: .1,
        _mzr: !1,
        _6z: function() {},
        _5j: function() {},
        _2r: function() {},
        _ds: function() {
            this[wT] = null, this[tT]._k9()
        },
        _dq: function(t) {
            var i = this._jq,
                n = this._j0.ratio,
                e = this[bo],
                s = i._do();
            if (!s) {
                var r = i[Bd]([t[0], t[1]]);
                return r[0] *= n, r[1] *= n, n *= e, r[2] = t[2] * n, r[3] = t[3] * n, r
            }
            var h = new Sq,
                a = i[Bd]([t[0], t[1]]);
            return h.add(a[0], a[1]), a = i.transform([t[0] + t[2], t[1]]), h.add(a[0], a[1]), a = i[Bd]([t[0], t[1] + t[3]]), h.add(a[0], a[1]), a = i[Bd]([t[0] + t[2], t[1] + t[3]]), h.add(a[0], a[1]), [h.x * n, h.y * n, h[Oa] * n, h[Ja] * n]
        },
        _fu: function(t, n) {
            var e = this._j0;
            if (e[Oa] && e[Ja]) {
                var s = n._30(t.x, t.y, t.width, t[Ja]);
                if (s && s.width && s.width) {
                    var r = this[bo] * this[Qa],
                        h = this[tT],
                        a = {},
                        o = 1e-6;
                    s.x > o && (a[La] = n._45(0, 0, s.x, n.height, r)), n[Oa] - s[ha] > o && (a[ha] = n._45(s[ha], 0, n[Oa] - s[ha], n[Ja], r)), s.y > o && (a.top = n._45(s.x, 0, s.width, s.y, r)), n[Ja] - s[ra] > o && (a[ra] = n._45(s.x, s.bottom, s.width, n[Ja] - s.bottom, r)), H(a) || h._4s(a);
                    var f = n._i8(t.x, t.y),
                        u = (f[0] - s.x) * r,
                        c = (f[1] - s.y) * r,
                        d = s[Oa] * r,
                        _ = s[Ja] * r;
                    u = Math.round(u), c = Math[Ro](c), d = Math[Ro](d), _ = Math[Ro](_);
                    var l = this[HT];
                    return l || (l = this[HT] = i[ro](ho), l.g = l[ao](oo)), l[Oa] = d, l[Ja] = _, be(l.g), l.g[r_](e, u, c), u = f[0] * r - u, c = f[1] * r - c, {
                        x: u,
                        y: c,
                        canvas: l
                    }
                }
            }
        },
        _m5: function(t, i, n, e) {
            this._my1._mi(t, i, n, e)
        },
        _fv: function(t) {
            this[tT]._if(t)
        }
    });
    Object[Jh](OU[_h], {
        width: {
            get: function() {
                return this._mz7.clientWidth
            }
        },
        height: {
            get: function() {
                return this[RT].clientHeight
            }
        },
        rotate: {
            get: function() {
                return this._jq._do()
            }
        },
        tx: {
            get: function() {
                return this._jq._8f()[0]
            }
        },
        ty: {
            get: function() {
                return this._jq._8f()[1]
            }
        },
        ratio: {
            get: function() {
                return this._j0 ? this._j0[Qa] : void 0
            }
        },
        scale: {
            get: function() {
                return this._jq._g6()
            },
            set: function(t) {
                this._fh(t)
            }
        },
        renderScale: {
            get: function() {
                return this[bo] * this[Qa]
            }
        },
        uis: {
            get: function() {
                return this._mq
            }
        },
        length: {
            get: function() {
                return this._mq[nh]
            }
        },
        viewportBounds: {
            get: function() {
                return this._viewport[UT]()
            }
        }
    });
    var SU, MU = M({
        constructor: function() {
            this._fz = [], this._j9 = new Sq, this._fx = rq ? 20 : 50
        },
        _fx: 20,
        _fz: null,
        _m6: !1,
        _j9: null,
        _k9: function() {
            this._m6 = !1, this._fz[nh] = 0, this[WT] = null, this._j9[ru]()
        },
        _hb: function() {
            return 0 == this._fz.length && !this[WT]
        },
        _mi: function(t, i, n, e) {
            0 >= n || 0 >= e || this._fz[fh]([t, i, n, e])
        },
        _if: function(t) {
            this._mi(t.x, t.y, t[Oa], t[Ja])
        },
        _4s: function(t) {
            var i = this._j9;
            for (var n in t) {
                var e = t[n],
                    s = e[UT]();
                i.add(s)
            }
            this[WT] = t
        },
        _mzu: function(t, i) {
            for (var n = [], e = this._fz, s = 0, r = e.length; r > s; s++) {
                var h = e[s];
                t.intersects(h[0], h[1], h[2], h[3]) && (n[fh](h), this._j9.addRect(h[0], h[1], h[2], h[3]))
            }
            this._fz = n, this._m6 = i || n[nh] >= this._fx
        },
        _em: function(t, i, n, e) {
            if (!this._j9.intersectsRect(t, i, n, e)) return !1;
            if (this._m6) return !0;
            if (this[WT]) {
                var s = this._viewportClips;
                for (var r in s)
                    if (s[r][Nl](t, i, n, e)) return !0
            }
            for (var h, a = 0, o = this._fz[nh]; o > a; a++)
                if (h = this._fz[a], Sq.intersects(t, i, n, e, h[0], h[1], h[2], h[3])) return !0;
            return !1
        },
        _ir: function(t, i) {
            if (this._hb()) return !1;
            if (t[tf](), this._m6) {
                var n = i([this._j9.x, this._j9.y, this._j9[Oa], this._j9[Ja]]);
                return ye(t, n[0], n[1], n[2], n[3]), void t[ef]()
            }
            if (this._viewportClips)
                for (var e in this[WT]) {
                    var n = this[WT][e][VT];
                    ye(t, n[0], n[1], n[2], n[3])
                }
            for (var s = this._fz, r = 0, h = s.length; h > r; r++) {
                var n = i(s[r]);
                ye(t, n[0], n[1], n[2], n[3])
            }
            t[ef]()
        }
    });
    MU[XT] = function(t, i, n, e) {
        return t instanceof Object && (i = t.y, n = t[Oa], e = t.height, t = t.x), n = V(t + n) - (t = W(t)), e = V(i + e) - (i = W(i)), [t, i, n, e]
    }, MU[KT] = W, MU._go = V, RY.NAVIGATION_BUTTON = JT, RY.NAVIGATION_SCROLLBAR = ZT, mq[QT] = RY[tk];
    var IU = M({
        _jh: function() {
            k(this, IU, ik, arguments), this[nk]._jh()
        },
        _9y: function(t, i) {
            return t = t.$data.zIndex || 0, i = i[au][xT] || 0, t - i
        },
        "super": OU,
        constructor: function(t, n) {
            this._kd = t, N(n) && (n = i[LT](n)), n && n.tagName || (n = i[ro](jd)), O(this, IU, [n]), this[nk] = new yr(this, this[RT]), this._gp = [], this._kd._5[X_](this._1a, this), this._kd._1d[X_](this._9n, this), this._kd._$v.addListener(this._6s, this), this._kd._$i.addListener(this._2g, this), this._kd._$k[X_](this._3f, this), this[ek] = {}, this._3o(mq.NAVIGATION_TYPE, !0)
        },
        _5h: function(t) {
            k(this, IU, sk, arguments), this[nk]._5h(t)
        },
        _g7: function(t) {
            return t.id || (t = this._mq[pl](t)), t ? (this._mq[ah](t), t[Wy](), t[FT] && this._fv(t.__j9), void(this[GT] = !0)) : !1
        },
        _ga: function() {
            this._mq.forEach(function(t) {
                t[Wy]()
            }), this._mq[ru]()
        },
        _eg: function(t, i) {
            var n = t[$o] || t;
            return n._$o && (n._$o = !1, n._i0 = this._4w(n, i)), n._i0 !== !1
        },
        _4w: function(t, i) {
            return this._3s(t, i) ? !this._kd[rk] || this._kd[rk](t, i) !== !1 : !1
        },
        _9q: function(t) {
            return this._kd._3g == ur(t)
        },
        _3s: function(t, i) {
            if (t[AT] === !1) return !1;
            if (!(t instanceof $U)) return this._kd._3g != ur(t) ? !1 : !t._da;
            var n = t[Zu],
                e = t[Xu];
            if (!n || !e) return !1;
            if (n == e && !t.isLooped()) return !1;
            if (t[hk]()) {
                var s = t[Ju](!0);
                if (s && !s._eg(t, i)) return !1
            }
            return this._eg(n, i) && this._eg(e, i) ? !0 : !1
        },
        _mzz: function(t) {
            return t._mz9 ? {
                x: t.$x + t[m_].x,
                y: t.$y + t[m_].y,
                width: t.uiBounds[Oa],
                height: t[m_][Ja]
            } : void 0
        },
        _2t: function(t) {
            var i = this._ky(t);
            if (i) {
                var n = this[yT](i);
                if (n) return new Sq(n)
            }
        },
        _ed: function(t, i, n) {
            return t[Md](i[0], i[1], n)
        },
        hitTest: function(t, i) {
            var n = k(this, IU, Md, arguments);
            if (n) {
                t = this.toLogical(t), i = this._91(i);
                var e = n[Md](t[0], t[1], i, !0);
                if (e instanceof YU) return e
            }
            return n
        },
        _3c: function(t) {
            return this[Ny](t)
        },
        _6g: function() {
            k(this, IU, ak, arguments), this[nk]._in(this[Oa], this.height)
        },
        _l1: 1,
        _mxh: null,
        _7s: null,
        _7t: null,
        _mq: null,
        _me: null,
        _j0: null,
        _my1: null,
        _5v: !1,
        _mz9: !1,
        _jq: null,
        _4j: function(t, i) {
            for (var n = this._mxh, e = 0, s = n[nh]; s > e; e++)
                if (t[ih](i, n[e]) === !1) return !1
        },
        _ea: function(t, i) {
            this._mq[ku](t, i)
        },
        _$s: function(t, i) {
            for (var n = this[hT], e = n[nh] - 1; e >= 0; e--)
                if (t[ih](i, n[e]) === !1) return !1
        },
        _4q: function(t, i) {
            this._mq[qT](t, i)
        },
        _36: function(t) {
            k(this, IU, ok, arguments), this._viewportChanged = {
                value: t
            }
        },
        _mx8: function() {
            this._40(!0), this[fk] || (this._originAdjusted = !0, this._kd && this._kd[uk] && this._jq.translateTo([this.width / 2, this.height / 2]))
        },
        _ey: function() {
            if (!this[cE] && this._5v) {
                if (this[uT] = null, this._5v = !1, this._mz9 && this._kd && this._kd._$o && (this._kd._$o = !1, this._kd.forEach(function(t) {
                    t[ck](!0)
                })), k(this, IU, dk, arguments), this[_k]) {
                    this._6t && this._6t._k0();
                    var t = this._7tChanged[Dc],
                        i = this[_k].old;
                    this._7tChanged = null, this._kd._3y(new $q(this._kd, lk, t, i))
                }
                this._viewportChanged && (this._viewportChanged = !1, this._6t && this._6t._36 && this._6t._36(this[nT][Oa] * this[nT].scale, this._viewport[Ja] * this[nT].scale), this._kd._3y(new $q(this._kd, fT, this._viewport)))
            }
        },
        _gp: null,
        _mxa: function(t) {
            var i = t[au];
            if (!t._19 && !i._5v && !i._$o) return !1;
            var n = t[$f];
            return n = k(this, IU, zT, arguments) || n
        },
        _9r: function(t) {
            var i = t.$data;
            i[vk] && (i[vk] = !1, t._4r()), i[Jv] && i._i2() && (t._52(), i.__5v = !1), (t._19 || i._5v) && (i._5v = !1, t[Io]())
        },
        _gs: function(t, i) {
            var n = t[Qa];
            t[bo](n, n), t.transform.apply(t, this._jq.m);
            for (var e = this.renderScale, s = [], r = 0, h = i[nh]; h > r; r++) {
                var a = i[r];
                a._jh(t, e), a._js && a._js.length && s.push(a)
            }
            if (s[nh])
                for (r = 0, h = s[nh]; h > r; r++) s[r]._9p(t, e)
        },
        render: function(t, i) {
            if (i[nh]) {
                if (t.save(), rq) try {
                    this._gs(t, i)
                } catch (n) {} else this._gs(t, i);
                t[wo]()
            }
        },
        _gt: function(t, i, n) {
            t.save(), t[vo](-n.x * i, -n.y * i), t.scale(i, i);
            var e, s, r = this._mq._jp[sh]();
            r = this._ib(r);
            for (var h = [], a = 0, o = r[nh]; o > a; a++) e = r[a], e[CT] && (s = this[yT](e), n.intersectsRect(s.x, s.y, s[Oa], s.height) && (e._jh(t, i), e._js && e._js.length && h.push(e)));
            if (h[nh])
                for (a = 0, o = h[nh]; o > a; a++) h[a]._9p(t, i);
            t[wo]()
        },
        _10: function() {},
        _1o: function() {
            for (var t, i, n = this._mq._jp, e = new Sq, s = n[nh] - 1; s >= 0; s--) t = n[s], t._i0 && (i = t[m_], e[Rl](t.$x + i.x, t.$y + i.y, i.width, i[Ja]));
            var r = this._7t;
            this._7t = e, e[Hu](r) || this._10(r, e)
        },
        _5k: function() {
            this._mxh.length = 0, this._7s = {}
        },
        _kz: function() {
            this._k9()
        },
        _id: function() {
            this._k9(), this._ided = !0, this._5v = !1, this._topCanvas[ru](), this._87[nh] = 0, this._6t && (this._6t._id(), delete this._6t)
        },
        _ky: function(t) {
            return this._mq.getById(t.id || t)
        },
        _9: function(t) {
            return this._e8(t)
        },
        _gy: function(t, i) {
            var n = this[bk](t, i);
            return {
                x: n[0],
                y: n[1]
            }
        },
        _e8: function(t, i) {
            var n = this[yk](t, i);
            return {
                x: n[0],
                y: n[1]
            }
        },
        _$c: null,
        _3f: function(t) {
            var i = t[gf],
                n = t[$o];
            if (n)
                if (this[Tb]) {
                    var e, s;
                    if ($(n))
                        for (var r = 0, h = n[nh]; h > r; r++) s = n[r].id, e = this._mq.getById(s), e && (e[gk] = i[yl](s), e[mk]());
                    else {
                        if (s = n.id, e = this._mq[pl](s), !e) return;
                        e[gk] = i.containsById(s), e.invalidateRender()
                    }
                    this[aT]()
                } else {
                    this._$c || (this._$c = {});
                    var e, s;
                    if ($(n))
                        for (var r = 0, h = n.length; h > r; r++) s = n[r].id, this._$c[s] = !0;
                    else s = n.id, this._$c[s] = !0
                }
        },
        _kd: null,
        _mxk: function(t) {
            var i = t[xk];
            return i ? new i(t, this._kd) : void 0
        },
        _1a: function(t) {
            if (!this._mz9) return !1;
            var i = t.source,
                n = t.kind;
            pk == n && this._kd[ck](), xk == n ? (this._g7(i.id), this._kr(i)) : Ek == n && i._i2() && t.value && this._58(i);
            var e = this._mq[pl](i.id);
            e && e[Tb] && e[wk](t) && this[aT]()
        },
        _3i: function(t) {
            var i = this._ky(t);
            i && (i[Tk](), this[aT]())
        },
        _9n: function(t) {
            if (!this[Tb]) return !1;
            switch (t.kind) {
                case Vq[Mv]:
                    this._kr(t[$o]);
                    break;
                case Vq[Pv]:
                    this._h5(t[$o]);
                    break;
                case Vq.KIND_CLEAR:
                    this._ic(t[$o])
            }
        },
        _k9: function() {
            this[ek] = {}, this._ga(), this.clear()
        },
        _my8: null,
        _kr: function(t) {
            var i = this[kk](t);
            i && (this._mq.add(i), this[Tb] && (this[ek][t.id] = t), this._myq())
        },
        _h5: function(t) {
            if (Array.isArray(t)) {
                for (var i, n = [], e = 0, s = t[nh]; s > e; e++) i = t[e].id, n[fh](i), delete this[ek][i];
                t = n
            } else t = t.id, delete this[ek][t], t = [t];
            t.forEach(function(t) {
                this._g7(t)
            }, this), this[aT]()
        },
        _ic: function() {
            this._k9()
        },
        _6s: function(t) {
            return this._mz9 ? void(t[gf] instanceof FU && !this[ek][t.source.id] && (t[hv] && (this._3i(t[hv]), t[hv][Jv] = !0), t[Dc] && (this._3i(t[Dc]), t.value[Jv] = !0), this._58(t[gf]))) : !1
        },
        _2g: function(t) {
            return this._mz9 ? void(t.source instanceof FU && !this[ek][t.source.id] && this._58(t[gf])) : !1
        },
        _2h: function(t) {
            if (t[Ok]) {
                var i = t.getEdgeBundle(!0);
                if (!i) return t[Ok] = !1, void t[Sk]();
                i[Io](this._kd), i[Mk](function(t) {
                    t[Sk]()
                })
            }
        },
        _$p: function(t) {
            var i, n = (this._kd, this._kd[__]),
                e = this._mq,
                s = [],
                r = 1;
            if (n[Ik](function(t) {
                return t instanceof $U ? (this._2h(t), void s[fh](t)) : (i = this[kk](t), void(i && (e.add(i), t.__ld = r++)))
            }, this), e[nh])
                for (var h = e._jp, r = h[nh] - 1; r >= 0; r--) i = h[r], this._3b(i, i[au], t);
            for (var a, r = 0, o = s[nh]; o > r; r++)
                if (a = s[r], i = this[kk](a)) {
                    this._3b(i, a, t), e.add(i);
                    var f = a[Zu],
                        u = a[Xu],
                        c = f[Pk] || 0;
                    f != u && (c = Math.max(c, u.__ld || 0)), a[Pk] = c
                }
            if (s.length && e._jp[mT](function(t, i) {
                return t[au][Pk] - i[au][Pk]
            }), this._$c) {
                var d = n.selectionModel;
                for (var _ in this._$c)
                    if (d.containsById(_)) {
                        var i = e[pl](_);
                        i && (i.selected = !0)
                    }
                this._$c = null
            }
            this._6b()
        },
        _mzg: function(t, i) {
            if (t) return this._$p();
            var n = this[GT];
            this[GT] = !1;
            for (var e in this._my8) {
                var s = this[ek][e];
                s instanceof FU ? this._58(s) : this._5i(s)
            }
            this[ek] = {};
            for (var r, h, a = this._mq._jp, o = [], f = a.length - 1; f >= 0; f--) r = a[f], h = r[au], h instanceof $U ? (this._2h(h), o.push(r)) : this._3b(r, h, i) && !n && (n = !0);
            if (o[nh])
                for (var f = 0, u = o[nh]; u > f; f++) r = o[f], this._3b(r, r[au], i) && !n && (n = !0);
            n && this._6b()
        },
        _3b: function(t, i, n) {
            if (i instanceof $U) return i[vk] && (i[vk] = !1, t._4r()), this[zT](t, n);
            if (i.__5v && i._i2() && (t._52(), i[Jv] = !1), this[zT](t, n)) {
                var e = this._4f(i);
                return e && (e[Jv] = !0), i.hasEdge() && i.forEachEdge(function(t) {
                    t.__4r = !0
                }, this), !0
            }
        },
        _2o: function(t, i) {
            var n = t.fromAgent,
                e = t[Xu],
                s = i[Ck](n.id);
            if (n == e) return s;
            var r = i[Ck](e.id);
            return Math.max(s, r)
        },
        _2b: function(t, i) {
            var n = this[__]._gj(t);
            return n ? i[Ck](n.id) : 0
        },
        _58: function(t) {
            var i = this._mq,
                n = i[pl](t.id);
            if (!n) throw new Error(Ak + t[ph] + Lk);
            var s = this._2b(t, i),
                r = [n];
            t[th]() && e(t, function(t) {
                t instanceof FU && (n = i.getById(t.id), n && r[fh](n))
            }, this), this._4h(i, s, r)
        },
        _5i: function(t) {
            var i = this._mq[pl](t.id);
            if (i) {
                var n = this._2o(t, this._mq);
                this._mq[Rk](i, n)
            }
        },
        _4h: function(t, i, n) {
            function e(t) {
                s.add(t)
            }
            var s = new xq;
            l(n, function(n) {
                i = t[jk](n, i), n[au].forEachEdge(e)
            }, this), 0 != s.length && s[ku](this._5i, this)
        },
        _4f: function(t) {
            var i = Pe(t);
            return i && i[Ek] ? i : null
        },
        _6u: null,
        _6t: null,
        _3o: function(t, i) {
            return i || t != this._6u ? (this._6u = t, this._6t && (this._6t._id(), delete this._6t), t == RY[tk] ? void(this._6t = new vr(this, this[RT])) : t == RY.NAVIGATION_BUTTON ? void(this._6t = new lr(this, this[RT])) : void 0) : !1
        },
        _2r: function(t, i) {
            this._6t && this._6t._k0(), this._kd._3y(new $q(this._kd, Bd, t, i))
        },
        _6z: function(t, i) {
            this._kd._3y(new $q(this._kd, bo, t, i))
        },
        _34: function(t, i) {
            this[_k] = {
                value: t,
                old: i
            }
        },
        _7d: function() {
            this._65()
        }
    });
    Object.defineProperties(IU[_h], {
        _viewportBounds: {
            get: function() {
                return this[Dk]
            }
        },
        _scale: {
            get: function() {
                return this.scale
            },
            set: function(t) {
                this._fh(t)
            }
        },
        _tx: {
            get: function() {
                return this.tx
            }
        },
        _ty: {
            get: function() {
                return this.ty
            }
        },
        graphModel: {
            get: function() {
                return this._kd[Nk]
            }
        }
    });
    var PU = OU,
        CU = {};
    CU[bh] = function() {
        return [1, 0, 0, 1, 0, 0]
    }, CU[ST] = function(t, i) {
        var n = i[0],
            e = i[1],
            s = i[2],
            r = i[3],
            h = i[4],
            a = i[5],
            o = n * r - e * s;
        return o ? (o = 1 / o, t[0] = r * o, t[1] = -e * o, t[2] = -s * o, t[3] = n * o, t[4] = (s * a - r * h) * o, t[5] = (e * h - n * a) * o, t) : null
    }, CU.multiply = function(t, i, n) {
        var e = i[0],
            s = i[1],
            r = i[2],
            h = i[3],
            a = i[4],
            o = i[5],
            f = n[0],
            u = n[1],
            c = n[2],
            d = n[3],
            _ = n[4],
            l = n[5];
        return t[0] = e * f + r * u, t[1] = s * f + h * u, t[2] = e * c + r * d, t[3] = s * c + h * d, t[4] = e * _ + r * l + a, t[5] = s * _ + h * l + o, t
    }, CU.mul = CU[ap], CU[Yo] = function(t, i, n) {
        var e = i[0],
            s = i[1],
            r = i[2],
            h = i[3],
            a = i[4],
            o = i[5],
            f = Math.sin(n),
            u = Math.cos(n);
        return t[0] = e * u + r * f, t[1] = s * u + h * f, t[2] = e * -f + r * u, t[3] = s * -f + h * u, t[4] = a, t[5] = o, t
    }, CU.scale = function(t, i, n) {
        var e = i[0],
            s = i[1],
            r = i[2],
            h = i[3],
            a = i[4],
            o = i[5],
            f = n[0],
            u = n[1];
        return t[0] = e * f, t[1] = s * f, t[2] = r * u, t[3] = h * u, t[4] = a, t[5] = o, t
    }, CU.translate = function(t, i, n) {
        var e = i[0],
            s = i[1],
            r = i[2],
            h = i[3],
            a = i[4],
            o = i[5],
            f = n[0],
            u = n[1];
        return t[0] = e, t[1] = s, t[2] = r, t[3] = h, t[4] = e * f + r * u + a, t[5] = s * f + h * u + o, t
    }, CU[Bd] = function(t, i) {
        var n = i[0],
            e = i[1];
        return [n * t[0] + e * t[2] + t[4], n * t[1] + e * t[3] + t[5]]
    }, CU[kT] = function(t, i) {
        return CU[Bd](CU[ST]([], t), i)
    };
    var AU = Math.PI + Math.PI,
        LU = D,
        RU = M({
            equals: function(t) {
                if (!t || !Array[Nc](t)) return !1;
                for (var i = this.m, n = 0; n < i[nh];) {
                    if (i[n] != t[n]) return !1;
                    ++n
                }
                return !0
            },
            constructor: function(t) {
                this.m = t || CU[bh](), this.im = []
            },
            listener: null,
            _5v: !0,
            invalidate: function() {
                return this._5v = !0, this._myackM && this.equals(this._myackM) ? !1 : (this[yv] && this[yv]({
                    target: this,
                    kind: rT
                }), this[Bk] = this.m.slice(), this)
            },
            validate: function() {
                return this._5v = !1, CU.invert(this.im, this.m), this
            },
            translate: function(t, i) {
                return LU(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i !== !1 ? (this.m[4] += t[0], this.m[5] += t[1], this[rT]()) : (CU[vo](this.m, this.m, t), this.invalidate())
            },
            translateTo: function(t, i) {
                return LU(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i && (i /= this._g6(), CU[bo](this.m, this.m, [i, i])), this.m[4] = t[0], this.m[5] = t[1], this[rT]()
            },
            scale: function(t, i) {
                return Ah == typeof t && (t = [t, t]), i ? (CU[vo](this.m, this.m, i), CU[bo](this.m, this.m, t), CU[vo](this.m, this.m, ge(i))) : CU[bo](this.m, this.m, t), this[rT]()
            },
            rotate: function(t, i) {
                return i ? (CU.translate(this.m, this.m, i), CU[Yo](this.m, this.m, t), CU.translate(this.m, this.m, ge(i))) : CU[Yo](this.m, this.m, t), this[rT]()
            },
            transform: function(t) {
                return CU[Bd](this.m, t)
            },
            reverseTransform: function(t) {
                return CU[Bd](this._42(), t)
            },
            toString: function() {
                return IT + this.m.join(Gh) + Yh
            },
            _42: function() {
                return this._5v && this[Io](), this.im
            },
            _dp: function() {
                var t = this.m[0],
                    i = this.m[1],
                    n = this.m[2],
                    e = this.m[3];
                return [Math.sqrt(t * t + n * n), Math[Oo](i * i + e * e)]
            },
            _g6: function() {
                var t = this.m[0],
                    i = this.m[2];
                return Math[Oo](t * t + i * i)
            },
            _8f: function() {
                return [this.m[4], this.m[5]]
            },
            _mxm: function() {
                var t = this.m[0],
                    i = this.m[1],
                    n = this.m[2],
                    e = this.m[3];
                return [me(Math[ea](i, e)), me(Math[ea](-n, t))]
            },
            _do: function() {
                return me(Math[ea](this.m[1], this.m[3]))
            }
        }),
        jU = M({
            constructor: function() {},
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            rotate: 0,
            set: function(t, i, n, e, s, r) {
                return this.x = t, this.y = i, this[Oa] = n, this.height = e, this[Yo] = s, this[Pl] = Math.cos(s), this[sa] = Math.sin(s), this[bo] = r, this._globalBounds = null, this
            },
            _i8: function(t, i) {
                return t -= this.x, i -= this.y, this[Yo] ? Ee(t, i, this[sa], this[Pl]) : [t, i]
            },
            _8e: function(t) {
                var i = new Sq;
                return i.add(this._i8(t.x, t.y)), i.add(this._i8(t.x + t[Oa], t.y)), i.add(this._i8(t.x, t.y + t[Ja])), i.add(this._i8(t.x + t[Oa], t.y + t[Ja])), i
            },
            _g9: function(t, i) {
                if (this.rotate) {
                    var n = Ee(t, i, Math.sin(-this[Yo]), Math.cos(-this[Yo]));
                    t = n[0], i = n[1]
                }
                return [this.x + t, this.y + i]
            },
            _5s: function(t, i) {
                var n = this._i8(t, i);
                return t = n[0], i = n[1], t >= 0 && i >= 0 && t <= this[Oa] && i <= this[Ja]
            },
            intersects: function(t, i, n, e) {
                if (!this[Yo]) return Sq[Nl](this.x, this.y, this.width, this.height, t, i, n, e);
                if (!n || !e) return this._5s(t, i);
                var s = this[UT]();
                if (!s[Nl](t, i, n, e)) return !1;
                for (var r = s[Ao], h = 0; h < r[nh];) {
                    var a = r[h];
                    if (Sq.intersectsPoint(t, i, n, e, a[0], a[1])) return !0;
                    h++
                }
                var o = [
                    [t, i],
                    [t + n, i],
                    [t, i + e],
                    [t + n, i + e]
                ];
                for (h = 0; h < o.length;) {
                    var a = o[h];
                    if (this._5s(a[0], a[1])) return !0;
                    h++
                }
                return pe(r, o)
            },
            getGlobalBounds: function() {
                return this._globalBounds || (this[$k] = this._77(0, 0, this.width, this[Ja])), this._globalBounds
            },
            _77: function(t, i, n, e) {
                if (!this[Yo]) return new Sq(this.x + t, this.y + i, n, e);
                var s = [],
                    r = new Sq,
                    h = this._g9(t, i);
                return s[fh](h), r.add(h[0], h[1]), h = this._g9(t + n, i), s.push(h), r.add(h[0], h[1]), h = this._g9(t, i + e), s[fh](h), r.add(h[0], h[1]), h = this._g9(t + n, i + e), s[fh](h), r.add(h[0], h[1]), r[Ao] = s, r
            },
            _45: function(t, i, n, e, s) {
                var r;
                if (this.rotate) {
                    var h = this._g9(t, i);
                    r = (new jU).set(h[0], h[1], n, e, this[Yo], this[bo])
                } else r = (new jU).set(this.x + t, this.y + i, n, e, 0, this[bo]);
                return r.canvasBounds = [Math.round(s * t), Math.round(s * i), Math[Ro](s * n), Math.round(s * e)], r
            },
            _30: function(t, i, n, e) {
                if (!this.rotate) {
                    var s = Sq[Bl](this.x, this.y, this[Oa], this[Ja], t, i, n, e);
                    return s && s[Fk](-this.x, -this.y), s
                }
                var r = this._i8(t, i);
                return t = r[0], i = r[1], Sq.intersection(0, 0, this.width, this.height, r[0], r[1], n, e)
            },
            equals: function(t) {
                return this.x == t.x && this.y == t.y && this[Oa] == t[Oa] && this.height == t[Ja] && this.rotate == t.rotate
            },
            toString: function() {
                return this.x + Gh + this.y + Gh + this[Oa] + Gh + this[Ja] + Gh + this[Yo]
            },
            toJSON: function() {
                return {
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this[Ja],
                    rotate: this.rotate,
                    scale: this[bo]
                }
            }
        }),
        DU = {
            setStyle: gi,
            setStyles: bi,
            addRule: mi,
            pre: iY
        },
        NU = function(t, i, n, e) {
            this.source = t, this.kind = i, this.oldValue = e, this[Dc] = n, this.propertyType = RY.PROPERTY_TYPE_STYLE
        };
    E(NU, $q);
    var BU = function(t) {
        this.id = ++nq, this[Rv] = {}, this._j8 = {}, t && (this[zk] = t)
    };
    BU[_h] = {
        _j8: null,
        getStyle: function(t) {
            return this._j8[t]
        },
        setStyle: function(t, i) {
            var n = this._j8[t];
            return n === i || n && i && n[Hu] && n[Hu](i) ? !1 : this[jv](t, i, new NU(this, t, i, n), this._j8)
        },
        putStyles: function(t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._j8[n] = e : this[Gk](n, e)
            }
        },
        _$o: !0,
        invalidateVisibility: function(t) {
            this._$o = !0, t || (this instanceof FU && this.hasEdge() && this[fc](function(t) {
                t._$o = !0
            }), this._i2() && this.hasChildren() && this[uc](function(t) {
                t[ck]()
            }))
        },
        onParentChanged: function() {
            this.invalidateVisibility()
        },
        _i2: function() {
            return !this._49 && this instanceof qU
        },
        invalidate: function() {
            this.onEvent(new Bq(this, qk, rT))
        },
        _mxf: null,
        addUI: function(t, i) {
            if (this[Yk] || (this[Yk] = new xq), t.id || (t.id = ++nq), this._mxf[yl](t.id)) return !1;
            var n = {
                id: t.id,
                ui: t,
                bindingProperties: i
            };
            this._mxf.add(n);
            var e = new Bq(this, qk, Iv, n);
            return this[gv](e)
        },
        removeUI: function(t) {
            if (!this[Yk]) return !1;
            var i = this[Yk][pl](t.id || t);
            return i ? (this[Yk][ah](i), void this[gv](new Bq(this, qk, ah, i))) : !1
        },
        clearUIs: function() {
            this[Hk] && this[Hk].toDatas()[ku](function(t) {
                this[Uk](t.ui)
            }.bind(this))
        },
        toString: function() {
            return this[zk] || this.id
        },
        type: Wk,
        _49: !1,
        _i0: !0,
        inGroup: function(t) {
            var i = Pe(this);
            return i == t || i && t instanceof qU && i[nc](t)
        }
    }, E(BU, Xq), P(BU[_h], [xk, ph, xT, Vk]), J(BU.prototype, {
        enableSubNetwork: {
            get: function() {
                return this._49
            },
            set: function(t) {
                if (this._49 != t) {
                    var i = this._49;
                    this._49 = t, this instanceof FU && this._$x(), this[gv](new $q(this, pk, t, i))
                }
            }
        },
        bindingUIs: {
            get: function() {
                return this[Yk]
            }
        },
        styles: {
            get: function() {
                return this._j8
            },
            set: function(t) {
                if (this._j8 != t) {
                    for (var i in this._j8) i in t || (t[i] = n);
                    this[Xk](t), this._j8 = t
                }
            }
        }
    }), LY[Kk] = Pe;
    var $U = function(t, i, n) {
        this.id = ++nq, this[Rv] = {}, this._j8 = {}, n && (this[zk] = n), this.$from = t, this.$to = i, this[Jk]()
    };
    $U[_h] = {
        $uiClass: Es,
        _ji: null,
        _i6: null,
        _jf: null,
        _i4: null,
        _di: !1,
        type: Zk,
        otherNode: function(t) {
            return t == this[tc] ? this.to : t == this.to ? this[tc] : void 0
        },
        connect: function() {
            if (this._di) return !1;
            if (!this[Ac] || !this.$to) return !1;
            if (this._di = !0, this[Ac] == this.$to) return void this.$from._hy(this);
            Fe(this.$to, this), Be(this[Ac], this), Te(this[Ac], this, this.$to);
            var t = this[Zu],
                i = this[Xu];
            if (t != i) {
                var n;
                this[Ac]._da && (Oe(t, this, i), n = !0), this.$to._da && (Me(i, this, t), n = !0), n && Te(t, this, i)
            }
        },
        disconnect: function() {
            if (!this._di) return !1;
            if (this._di = !1, this.$from == this.$to) return void this[Ac][Qk](this);
            $e(this.$from, this), ze(this.$to, this), ke(this[Ac], this, this.$to);
            var t = this[Zu],
                i = this.toAgent;
            if (t != i) {
                var n;
                this[Ac]._da && (Se(t, this, i), n = !0), this.$to._da && (Ie(i, this, t), n = !0), n && ke(t, this, i)
            }
        },
        isConnected: function() {
            return this._di
        },
        isInvalid: function() {
            return !this[Ac] || !this.$to
        },
        isLooped: function() {
            return this.$from == this.$to
        },
        getEdgeBundle: function(t) {
            return t ? this._2m() : this.isLooped() ? this.$from._3u : this[Ac].getEdgeBundle(this.$to)
        },
        hasEdgeBundle: function() {
            var t = this[Ju](!0);
            return t && t.edges.length > 1
        },
        _2m: function() {
            var t = this[Zu],
                i = this[Xu];
            return t == i ? this.$from._da || this.$to._da ? null : this.$from._3u : this[Zu].getEdgeBundle(this[Xu])
        },
        _95: null,
        hasPathSegments: function() {
            return this._95 && !this._95.isEmpty()
        },
        isBundleEnabled: function() {
            return this[tO] && !this[xd]() && !this.edgeType
        },
        firePathChange: function(t) {
            this[gv](new $q(this, iO, t))
        },
        addPathSegment: function(t, i, n) {
            var e = new vH(i || uH, t);
            this._95 || (this._95 = new xq), this._95.add(e, n), this[nO](e)
        },
        addPathSegement: function() {
            return LY.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this[eO][dh](this, arguments)
        },
        removePathSegmentByIndex: function(t) {
            if (!this._95) return !1;
            var i = this._95.getByIndex(t);
            i && (this._95.remove(i), this[nO](i))
        },
        removePathSegment: function(t) {
            return this._95 ? (this._95[ah](t), void this.firePathChange(t)) : !1
        },
        movePathSegment: function(t, i, n) {
            if (!this._95) return !1;
            if (t = t || 0, i = i || 0, LY[sO](n)) {
                var e = this._95.getByIndex(n);
                return e ? (e[ug](t, i), void this.firePathChange()) : !1
            }
            l(function(n) {
                n[ug](t, i)
            }), this.firePathChange()
        },
        move: function(t, i) {
            return this._95 ? (this._95.forEach(function(n) {
                n.move(t, i)
            }, this), void this[nO]()) : !1
        },
        validateEdgeBundle: function() {}
    }, E($U, BU), J($U.prototype, {
        pathSegments: {
            get: function() {
                return this._95
            },
            set: function(t) {
                LY[Nc](t) && (t = new xq(t)), this._95 = t, this[nO]()
            }
        },
        from: {
            get: function() {
                return this[Ac]
            },
            set: function(t) {
                if (this.$from != t) {
                    var i = new $q(this, tc, t, this[Ac]);
                    this[xh](i) !== !1 && (this[Xv](), this.$from = t, this[Jk](), this.onEvent(i))
                }
            }
        },
        to: {
            get: function() {
                return this.$to
            },
            set: function(t) {
                if (this.$to != t) {
                    var i = new $q(this, rO, t, this.$to);
                    this.beforeEvent(i) !== !1 && (this[Xv](), this.$to = t, this[Jk](), this[gv](i))
                }
            }
        },
        fromAgent: {
            get: function() {
                return this[Ac] ? this[Ac]._da || this.$from : null
            }
        },
        toAgent: {
            get: function() {
                return this.$to ? this.$to._da || this.$to : null
            }
        }
    }), P($U[_h], [Id, {
            name: tO,
            value: !0
        },
        wd
    ]);
    var FU = function(t, i, n) {
        2 == arguments[nh] && D(t) && (n = i, i = t, t = null), this.id = ++nq, this[Rv] = {}, this._j8 = {}, t && (this[zk] = t), this[Lc] = hO, this.$anchorPosition = Iq.CENTER_MIDDLE, this[aO] = {
            x: i || 0,
            y: n || 0
        }, this[Ku] = {}
    };
    FU[_h] = {
        $uiClass: ws,
        _da: null,
        forEachEdge: function(t, i, n) {
            return !n && this._ko && this._ko[ku](t, i) === !1 ? !1 : qe(this, t, i)
        },
        forEachOutEdge: function(t, i) {
            return Ye(this, t, i)
        },
        forEachInEdge: function(t, i) {
            return He(this, t, i)
        },
        getEdges: function() {
            var t = [];
            return this[fc](function(i) {
                t[fh](i)
            }), t
        },
        _hu: null,
        _fr: null,
        _j4: null,
        _hw: null,
        _mzy: 0,
        _8x: 0,
        hasInEdge: function() {
            return null != this._hu
        },
        hasOutEdge: function() {
            return null != this._fr
        },
        hasEdge: function() {
            return null != this._hu || null != this._fr || this.hasLoops()
        },
        linkedWith: function(t) {
            return t.from == this || t.to == this || t[Zu] == this || t[Xu] == this
        },
        hasEdgeWith: function(t) {
            var i = this.getEdgeBundle(t);
            return i && i.edges[nh] > 0
        },
        _ko: null,
        _3u: null,
        hasLoops: function() {
            return this._ko && this._ko[nh] > 0
        },
        _hy: function(t) {
            return this._ko || (this._ko = new xq, this._3u = new rV(this, this, this._ko)), this._3u._hp(t)
        },
        _myt: function(t) {
            return this._3u ? this._3u[oO](t) : void 0
        },
        getEdgeBundle: function(t) {
            return t == this ? this._3u : this[Ku][t.id] || t[Ku][this.id]
        },
        _67: function() {
            return this._8o && this._8o.length
        },
        _4x: function() {
            return this._7p && this._7p.length
        },
        _93: function() {
            return this._67() || this._4x()
        },
        _7p: null,
        _8o: null,
        _mxb: function() {
            var t = this._da,
                i = we(this);
            if (t != i) {
                var n = Ge(this);
                this._97(i), n[ku](function(t) {
                    var i = t[Zu],
                        n = t[Xu],
                        t = t[Cc],
                        e = t[Ac]._da,
                        s = t.$to._da;
                    i != n && (i && Se(i, t, n || t.$to), n && Ie(n, t, i || t[Ac])), e != s && (e && Oe(e, t, s || t.$to), s && Me(s, t, e || t.$from), Te(e || t[Ac], t, s || t.$to))
                }, this)
            }
        },
        onParentChanged: function() {
            LY[fO](this, FU, Dv, arguments), this[uO]()
        },
        _7r: null,
        _$x: function() {
            var t;
            if (this._49 ? t = null : (t = this._da, t || this._gw !== !1 || (t = this)), this._7r == t) return !1;
            if (this._7r = t, this._f5 && this._f5._jp.length)
                for (var i, n = this._f5._jp, e = 0, s = n.length; s > e; e++) i = n[e], i instanceof FU && i._97(t)
        },
        setLocation: function(t, i) {
            if (this.$location && this[aO].x == t && this.$location.y == i) return !1;
            var n;
            n = this.$location ? {
                x: this[aO].x,
                y: this.$location.y
            } : this[aO];
            var e = new $q(this, cO, n, {
                x: t,
                y: i
            });
            return this[xh](e) === !1 ? !1 : (this[aO] ? (this[aO].x = t, this[aO].y = i) : this.$location = new wq(t, i), this[gv](e), !0)
        },
        _d3: null,
        addFollower: function(t) {
            return null == t ? !1 : t.host = this
        },
        removeFollower: function(t) {
            return this._d3 && this._d3[Sd](t) ? t[dO] = null : !1
        },
        hasFollowers: function() {
            return this._d3 && !this._d3[ou]()
        },
        toFollowers: function() {
            return this.hasFollowers() ? this._d3.toDatas() : null
        },
        clearFollowers: function() {
            this.hasFollowers() && (this[_O](), l(this[_O](), function(t) {
                t[dO] = null
            }))
        },
        getFollowerIndex: function(t) {
            return this._d3 && this._d3[Sd](t) ? this._d3[uh](t) : -1
        },
        setFollowerIndex: function(t, i) {
            return this._d3 && this._d3[Sd](t) ? void this._d3.setIndex(t, i) : -1
        },
        getFollowerCount: function() {
            return this._d3 ? this._d3[nh] : 0
        },
        _8q: function() {
            return this._d3 ? this._d3 : (this._d3 = new xq, this._d3)
        },
        isFollow: function(t) {
            if (!t || !this[lO]) return !1;
            for (var i = this._host; i;) {
                if (i == t) return !0;
                i = i[lO]
            }
            return !1
        },
        _97: function(t) {
            return t == this._da ? !1 : (this._da = t, this[ck](), void this._$x())
        },
        type: vO
    }, E(FU, BU), J(FU[_h], {
        loops: {
            get: function() {
                return this._ko
            }
        },
        edgeCount: {
            get: function() {
                return this[Qu] + this._8x
            }
        },
        agentNode: {
            get: function() {
                return this._da || this
            }
        },
        host: {
            set: function(t) {
                if (this == t || t == this._host) return !1;
                var i = new $q(this, dO, this[lO], t);
                if (!1 === this[xh](i)) return !1;
                var n = null,
                    e = null,
                    s = this[lO];
                if (null != t && (n = new $q(t, bO, null, this), !1 === t.beforeEvent(n))) return !1;
                if (null != s && (e = new $q(s, yO, null, this), !1 === s[xh](e))) return !1;
                if (this[lO] = t, null != t) {
                    var r = t._8q();
                    r.add(this)
                }
                if (null != s) {
                    var r = s._8q();
                    r[ah](this)
                }
                return this[gv](i), null != t && t.onEvent(n), null != s && s[gv](e), !0
            },
            get: function() {
                return this[lO]
            }
        }
    }), P(FU.prototype, [cO, oT, yx, Yo, gO]), J(FU[_h], {
        x: {
            get: function() {
                return this[cO].x
            },
            set: function(t) {
                t != this[cO].x && (this[cO] = new wq(t, this.location.y))
            }
        },
        y: {
            get: function() {
                return this[cO].y
            },
            set: function(t) {
                t != this[cO].y && (this[cO] = new wq(this.location.x, t))
            }
        }
    });
    var zU = function(t, i) {
        t instanceof yH && (i = t, t = n), w(this, zU, [t]), this.path = i || new yH, this[gO] = null, this[xk] = br, mq[mO] || (mq[mO] = {}, mq[mO][UU[xO]] = !1), this.putStyles(mq[mO])
    };
    zU[_h] = {
        $uiClass: br,
        type: pO,
        moveTo: function(t, i) {
            this[Ed][of](t, i), this.firePathChange()
        },
        lineTo: function(t, i) {
            this.path.lineTo(t, i), this.firePathChange()
        },
        quadTo: function(t, i, n, e) {
            this.path.quadTo(t, i, n, e), this[nO]()
        },
        curveTo: function(t, i, n, e, s, r) {
            this[Ed].curveTo(t, i, n, e, s, r), this.firePathChange()
        },
        arcTo: function(t, i, n, e, s) {
            this[Ed][Hm](t, i, n, e, s), this.firePathChange()
        },
        closePath: function() {
            this[Ed][Cf](), this.firePathChange()
        },
        clear: function() {
            this[Ed].clear(), this.firePathChange()
        },
        removePathSegmentByIndex: function(t) {
            this.path[EO](t) !== !1 && this[nO]()
        },
        firePathChange: function() {
            this[Ed]._5v = !0, this.onEvent(new $q(this, iO))
        },
        addPathSegment: function(t, i, n) {
            this[Ed].add(new vH(i || uH, t), n), this[nO]()
        }
    }, E(zU, FU), J(zU[_h], {
        path: {
            get: function() {
                return this.image
            },
            set: function(t) {
                this.image = t
            }
        },
        pathSegments: {
            get: function() {
                return this[Ed][wO]
            },
            set: function(t) {
                this.path[wO] = t || [], this.firePathChange()
            }
        },
        length: {
            get: function() {
                return this[Ed][nh]
            }
        }
    }), LY[TO] = zU;
    var GU = {
        _j6: {},
        register: function(t, i) {
            GU._j6[t] = i
        },
        getShape: function(t, i, e, s, r, h) {
            s === n && (s = i, r = e, i = 0, e = 0), s || (s = 50), r || (r = 50);
            var a = GU._j6[t];
            return a ? a.generator instanceof Function ? a.generator(i, e, s, r, h) : a : void 0
        },
        getRect: function(t, i, n, e, s, r, h) {
            return t instanceof Object && Oa in t && (i = t.y, n = t[Oa], e = t[Ja], s = t.rx, r = t.ry, h = t[Ed], t = t.x), Ue(h || new yH, t, i, n, e, s, r)
        },
        getAllShapes: function(t, i, n, e, s) {
            var r = {};
            for (var h in GU._j6) {
                var a = GU[ud](h, t, i, n, e, s);
                a && (r[h] = a)
            }
            return r
        },
        createRegularShape: function(t, i, n, e, s) {
            return Qe(t, i, n, e, s)
        }
    };
    ds(), _s.prototype = {
        type: kO
    }, E(_s, zU), LY.Bus = _s, ls[_h] = {
        _gj: function(t) {
            var i, n = t._jd;
            i = n ? n._f5 : this[Vv];
            var e = i[uh](t);
            if (0 > e) throw new Error(Qv + t + "' not exist in the box");
            for (; e >= 0;) {
                if (0 == e) return n instanceof FU ? n : null;
                e -= 1;
                var r = i[tb](e);
                if (r = s(r)) return r
            }
            return null
        },
        forEachNode: function(t, i) {
            this[ku](function(n) {
                return n instanceof FU && t.call(i, n) === !1 ? !1 : void 0
            })
        },
        _3g: null
    }, E(ls, Jq), J(ls.prototype, {
        propertyChangeDispatcher: {
            get: function() {
                return this._$r
            }
        },
        currentSubNetwork: {
            get: function() {
                return this._3g
            },
            set: function(t) {
                if (t && !t[pk] && (t = null), this._3g != t) {
                    var i = this._3g;
                    this._3g = t, this._$r[gv](new $q(this, OO, t, i))
                }
            }
        }
    }), mq[SO] = RY.GROUP_TYPE_RECT, mq[MO] = 5, mq[IO] = !0, mq[PO] = {
        width: 60,
        height: 60
    };
    var qU = function(t, i, e) {
        w(this, qU, arguments), (i === n || e === n) && (this[aO][CO] = !0), this[AO] = mq.GROUP_TYPE, this[Gf] = mq[MO], this[Lc] = xH[LO], this[RO] = mq[PO], this[Ek] = mq[IO]
    };
    qU[_h] = {
        type: jO,
        $uiClass: cr,
        _8n: function() {
            return !this._gw && !this._da
        },
        forEachOutEdge: function(t, i, n) {
            return Ye(this, t, i) === !1 ? !1 : !n && this._8n() && this._7p ? this._7p[ku](t, i) : void 0
        },
        forEachInEdge: function(t, i, n) {
            return He(this, t, i) === !1 ? !1 : !n && this._8n() && this._8o ? this._8o.forEach(t, i) : void 0
        },
        forEachEdge: function(t, i, n) {
            return T(this, qU, fc, arguments) === !1 ? !1 : n || n || !this._8n() ? void 0 : this._8o && this._8o[ku](t, i) === !1 ? !1 : this._7p ? this._7p[ku](t, i) : void 0
        },
        hasInEdge: function(t) {
            return t ? null != this._hu : null != this._hu || this._67()
        },
        hasOutEdge: function(t) {
            return t ? null != this._fr : null != this._fr || this._4x()
        },
        hasEdge: function(t) {
            return t ? null != this._hu || null != this._fr : null != this._hu || null != this._fr || this._93()
        }
    }, E(qU, FU), J(qU[_h], {
        expanded: {
            get: function() {
                return this._gw
            },
            set: function(t) {
                if (this._gw != t) {
                    var i = new $q(this, Ek, t, this._gw);
                    this.beforeEvent(i) !== !1 && (this._gw = t, this._$x(), this[gv](i), this._da || vs[ih](this))
                }
            }
        }
    }), P(qU[_h], [DO, NO, BO, $O]), LY.Group = qU, bs.prototype[qo] = FO, E(bs, FU), LY[zO] = bs;
    var YU = function(t) {
        this._j9 = new Sq, this._7u = new Sq, this._fj = new Sq, this.id = ++nq, t && (this[$o] = t)
    };
    YU.prototype = {
        invalidate: function() {
            this[Tk]()
        },
        _19: !0,
        _j9: null,
        _7u: null,
        _fj: null,
        _mz9: !1,
        _ja: 1,
        _jc: 1,
        _i0: !0,
        _7w: 0,
        _69: 0,
        _jd: null,
        _mz6: null,
        borderColor: GO,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _15: function() {
            this[qO] = ci(this.anchorPosition, this._7w, this._69)
        },
        setMeasuredBounds: function(t, i, n, e) {
            return t instanceof Object && (n = t.x, e = t.y, i = t.height, t = t[Oa]), this._j9[Oa] == t && this._j9[Ja] == i && this._j9.x == n && this._j9.y == e ? !1 : void this._j9.set(n || 0, e || 0, t || 0, i || 0)
        },
        initialize: function() {},
        measure: function() {},
        draw: function() {},
        _7m: function(t, i, n) {
            n[Kx] == RY[Gx] ? (t.shadowColor = n.selectionColor, t[e_] = n.selectionShadowBlur * i, t.shadowOffsetX = (n.selectionShadowOffsetX || 0) * i, t[dx] = (n[Ux] || 0) * i) : this._1q(t, i, n)
        },
        _1q: function(t, i, n) {
            var e = n[Vx] || 0;
            n[YO] && (t[sf] = n.selectionBackgroundColor, t[HO](this._7u.x - e / 2, this._7u.y - e / 2, this._7u[Oa] + e, this._7u[Ja] + e)), t[ff] = n[Yx], t.lineWidth = e, t[Qo](this._7u.x - e / 2, this._7u.y - e / 2, this._7u[Oa] + e, this._7u.height + e)
        },
        _jh: function(t, i, n, e) {
            if (!this._i0) return !1;
            if (this[UO] || (n = this.selected), (n && !this[WO] || !e) && (e = this), t[lo](), 1 != this[VO] && (t.globalAlpha = this[VO]), t[vo](this.$x, this.$y), this[Df] && this.$_hostRotate && t.rotate(this[Nf]), (this[XO] || this[KO]) && t.translate(this.offsetX, this[KO]), this[Bf] && t[Yo](this.$rotate), this[Lf] && this[Rf] && t[vo](-this[Rf].x, -this[Rf].y), this[i_] && (t.shadowColor = this.shadowColor, t[e_] = this[e_] * i, t[cx] = this[cx] * i, t[dx] = this.shadowOffsetY * i), n && e[Kx] == RY.SELECTION_TYPE_BORDER_RECT && (this._1q(t, i, e), n = !1), this._$n() && this[Kf] && !this[Kf][JO]) {
                this[Kf][Io]();
                var s = {
                    lineWidth: this.$border,
                    strokeStyle: this[ZO],
                    lineDash: this.borderLineDash,
                    lineDashOffset: this[QO],
                    fillColor: this[tS],
                    fillGradient: this[Vf],
                    lineCap: Im,
                    lineJoin: Ro
                };
                this[Kf][_f](t, i, s, n, e), n = !1, t.shadowColor = Zx
            }
            t[tf](), this[_f](t, i, n, e), t[wo]()
        },
        invalidateData: function() {
            this[iS] = !0, this[$f] = !0, this._19 = !0
        },
        invalidateSize: function() {
            this[$f] = !0, this._19 = !0
        },
        invalidateRender: function() {
            this._19 = !0
        },
        _4w: function() {},
        _$n: function() {
            return this[tS] || this[nS] || this[qf]
        },
        _3w: function() {
            return this[tS] || this.$backgroundGradient
        },
        doValidate: function() {
            return this[iS] && (this[iS] = !1, this.measure() !== !1 && (this.$invalidateSize = !0)), this[$f] && this.validateSize && this[eS](), Kn.call(this) ? (this[uu] = !0, this[sS] && this[sS](), !0) : this[rS] ? (this.$invalidateRotate = !0, this[rS] = !1, !0) : void 0
        },
        validate: function() {
            var t = this._i0;
            return this[hS] && (this[hS] = !1, this._i0 = this[aS], !this._i0 || (this[au] || this[oS]) && this._4w() !== !1 || (this._i0 = !1)), this._i0 ? (this._19 = !1, this[Tb] || (this[fS](), this._mz9 = !0), this[uS]()) : t != this._i0
        },
        _i8: function(t, i) {
            return t -= this.$x, i -= this.$y, Xn[ih](this, {
                x: t,
                y: i
            })
        },
        hitTest: function(t, i, n, e) {
            if (t -= this.$x, i -= this.$y, !this._fj[Lo](t, i, n)) return !1;
            var s = Xn[ih](this, {
                x: t,
                y: i
            });
            return t = s.x, i = s.y, !e && this._$n() && this._m5Shape && this._m5Shape[Md](t, i, n, !1, this[qf], this.$backgroundColor || this[nS]) ? !0 : this.doHitTest(t, i, n)
        },
        doHitTest: function(t, i, n) {
            return this._j9.intersectsPoint(t, i, n)
        },
        hitTestByBounds: function(t, i, n, e) {
            var s = this._i8(t, i);
            return !e && this._$n() && this[Kf] && this[Kf][Md](t, i, n, !1, this.$border, this[tS] || this[nS]) ? !0 : this._j9[Lo](s.x, s.y, n)
        },
        onDataChanged: function() {
            this[iS] = !0, this._19 = !0, this.$invalidateVisibility = !0
        },
        getBounds: function() {
            var t = this._fj[oh]();
            return t[Fk](this.x, this.y), this[Vu] && (this.parent[Yo] && Ai(t, this[Vu][Yo], t), t.offset(this.parent.x || 0, this.parent.y || 0)), t
        },
        destroy: function() {
            this._ided = !0
        },
        _de: !1
    }, J(YU[_h], {
        originalBounds: {
            get: function() {
                return this._j9
            }
        },
        data: {
            get: function() {
                return this[au]
            },
            set: function(t) {
                if (this[au] != t) {
                    var i = this.$data;
                    this.$data = t, this[cS](t, i)
                }
            }
        },
        parent: {
            get: function() {
                return this._jd
            }
        },
        showOnTop: {
            get: function() {
                return this._de
            },
            set: function(t) {
                t != this._de && (this._de = t, this._19 = !0, this._jd && this._jd[dS] && this._jd._my6(this))
            }
        }
    }), gs(YU[_h], {
        visible: {
            value: !0,
            validateFlags: [_S, lS]
        },
        showEmpty: {
            validateFlags: [_S]
        },
        anchorPosition: {
            value: Iq[Zl],
            validateFlags: [vS, lS]
        },
        position: {
            value: Iq.CENTER_MIDDLE,
            validateFlags: [lS]
        },
        offsetX: {
            value: 0,
            validateFlags: [lS]
        },
        offsetY: {
            value: 0,
            validateFlags: [lS]
        },
        layoutByAnchorPoint: {
            value: !0,
            validateFlags: [wg, vS, lS]
        },
        padding: {
            value: 0,
            validateFlags: [wg]
        },
        border: {
            value: 0,
            validateFlags: [wg]
        },
        borderRadius: {
            value: mq.BORDER_RADIUS
        },
        showPointer: {
            value: !1,
            validateFlags: [wg]
        },
        pointerX: {
            value: 0,
            validateFlags: [wg]
        },
        pointerY: {
            value: 0,
            validateFlags: [wg]
        },
        pointerWidth: {
            value: mq.POINTER_WIDTH
        },
        backgroundColor: {
            validateFlags: [wg]
        },
        backgroundGradient: {
            validateFlags: [wg, bS]
        },
        selected: {
            value: !1,
            validateFlags: [wg]
        },
        selectionBorder: {
            value: mq[Bm],
            validateFlags: [wg]
        },
        selectionShadowBlur: {
            value: mq[$m],
            validateFlags: [wg]
        },
        selectionColor: {
            value: mq[yS],
            validateFlags: [wg]
        },
        selectionType: {
            value: mq[Fm],
            validateFlags: [wg]
        },
        selectionShadowOffsetX: {
            value: 0,
            validateFlags: [wg]
        },
        selectionShadowOffsetY: {
            value: 0,
            validateFlags: [wg]
        },
        shadowBlur: {
            value: 0,
            validateFlags: [wg]
        },
        shadowColor: {
            validateFlags: [wg]
        },
        shadowOffsetX: {
            value: 0,
            validateFlags: [wg]
        },
        shadowOffsetY: {
            value: 0,
            validateFlags: [wg]
        },
        renderColorBlendMode: {},
        renderColor: {},
        x: {
            value: 0,
            validateFlags: [lS]
        },
        y: {
            value: 0,
            validateFlags: [lS]
        },
        rotatable: {
            value: !0,
            validateFlags: [gS, wg]
        },
        rotate: {
            value: 0,
            validateFlags: [gS, wg]
        },
        _hostRotate: {
            validateFlags: [gS]
        },
        lineWidth: {
            value: 0,
            validateFlags: [mS]
        },
        alpha: {
            value: 1
        }
    });
    var HU = [RY[Fc], RY[xS], RY[zc]];
    xs[_h] = {
        removeBinding: function(t) {
            for (var i = HU[nh]; --i >= 0;) {
                var n = HU[i],
                    e = this[n];
                for (var s in e) {
                    var r = e[s];
                    Array[Nc](r) ? (v(r, function(i) {
                        return i[a_] == t
                    }, this), r[nh] || delete e[s]) : r[a_] == t && delete e[s]
                }
            }
        },
        _23: function(t, i, n) {
            if (!n && (n = this[i.propertyType || RY.PROPERTY_TYPE_ACCESSOR], !n)) return !1;
            var e = n[t];
            e ? (Array.isArray(e) || (n[t] = e = [e]), e.push(i)) : n[t] = i
        },
        _2d: function(t, i, n, e, s, r) {
            t = t || RY[Fc];
            var h = this[t];
            if (!h) return !1;
            var a = {
                property: i,
                propertyType: t,
                bindingProperty: e,
                target: n,
                callback: s,
                invalidateSize: r
            };
            this._23(i, a, h)
        },
        onBindingPropertyChange: function(t, i, n, e) {
            var s = this[n || RY.PROPERTY_TYPE_ACCESSOR];
            if (!s) return !1;
            var r = s[i];
            return r ? (t._19 = !0, ms(t, r, n, e), !0) : !1
        },
        initBindingProperties: function(t, i) {
            for (var e = HU[nh]; --e >= 0;) {
                var s = HU[e],
                    r = this[s];
                for (var h in r) {
                    var a = r[h];
                    if (a[pS]) {
                        var o = a[a_];
                        if (o) {
                            if (!(o instanceof YU || (o = t[o]))) continue
                        } else o = t;
                        var f;
                        f = i === !1 ? t[Bc](a.property, s) : s == RY.PROPERTY_TYPE_STYLE ? t[yd][Gc](t.$data, a.property) : t[au][a.property], f !== n && (o[a.bindingProperty] = f)
                    }
                }
            }
        }
    };
    var UU = {};
    UU.SELECTION_COLOR = ES, UU[Bm] = wS, UU.SELECTION_SHADOW_BLUR = "selection.shadow.blur", UU[TS] = "selection.shadow.offset.x", UU[kS] = "selection.shadow.offset.y", UU[Fm] = OS, UU.RENDER_COLOR = SS, UU.RENDER_COLOR_BLEND_MODE = "render.color.blend.mode", UU[MS] = IS, UU.SHADOW_BLUR = PS, UU[CS] = AS, UU[LS] = RS, UU[jS] = DS, UU[NS] = BS, UU.SHAPE_STROKE_STYLE = $S, UU.SHAPE_LINE_FILL_COLOR = "shape.stroke.fill.color", UU[FS] = zS, UU[GS] = "shape.line.dash.offset", UU.SHAPE_FILL_COLOR = qS, UU[YS] = HS, UU.SHAPE_OUTLINE = US, UU[WS] = VS, UU[XS] = KS, UU.BACKGROUND_COLOR = JS, UU[ZS] = QS, UU[tM] = iM, UU[nM] = eM, UU.BORDER_LINE_DASH = sM, UU[rM] = "border.line.dash.offset", UU.BORDER_RADIUS = hM, UU[aM] = BO, UU.LINE_CAP = oM, UU[fM] = uM, UU.LINE_DASH_CAP = cM, UU[dM] = _M, UU[lM] = "image.background.color", UU[vM] = "image.background.gradient", UU[bM] = yM, UU[gM] = UU[mM] = xM, UU.IMAGE_BORDER_LINE_DASH = "image.border.line.dash", UU.IMAGE_BORDER_LINE_DASH_OFFSET = "image.border.line.dash.offset", UU.IMAGE_RADIUS = UU[pM] = EM, UU[wM] = TM, UU[kM] = OM, UU.IMAGE_ADJUST = SM, UU.IMAGE_ALPHA = MM, UU[IM] = PM, UU.LABEL_POSITION = CM, UU[AM] = LM, UU.LABEL_ANCHOR_POSITION = "label.anchor.position", UU[RM] = jM, UU[DM] = NM, UU.LABEL_FONT_FAMILY = BM, UU.LABEL_FONT_STYLE = $M, UU[FM] = zM, UU[GM] = qM, UU[YM] = HM, UU[UM] = WM, UU.LABEL_OFFSET_X = VM, UU[XM] = KM, UU[JM] = ZM, UU[QM] = tI, UU[iI] = nI, UU[eI] = sI, UU.LABEL_BACKGROUND_COLOR = "label.background.color", UU[rI] = "label.background.gradient", UU[hI] = aI, UU[oI] = fI, UU[uI] = cI, UU[dI] = "label.shadow.offset.x", UU.LABEL_SHADOW_OFFSET_Y = "label.shadow.offset.y", UU[_I] = lI, UU[vI] = bI, UU[yI] = "group.background.color", UU.GROUP_BACKGROUND_GRADIENT = "group.background.gradient", UU[gI] = mI, UU[xI] = pI, UU.GROUP_STROKE_LINE_DASH = "group.stroke.line.dash", UU.GROUP_STROKE_LINE_DASH_OFFSET = "group.stroke.line.dash.offset", UU[EI] = "edge.bundle.label.rotate", UU[wI] = "edge.bundle.label.position", UU.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = "edge.bundle.label.anchor.position", UU[TI] = "edge.bundle.label.color", UU[kI] = "edge.bundle.label.font.size", UU.EDGE_BUNDLE_LABEL_FONT_FAMILY = "edge.bundle.label.font.family", UU[OI] = "edge.bundle.label.font.style", UU[SI] = "edge.bundle.label.padding", UU[MI] = "edge.bundle.label.pointer.width", UU[II] = "edge.bundle.label.pointer", UU.EDGE_BUNDLE_LABEL_RADIUS = "edge.bundle.label.radius", UU[PI] = "edge.bundle.label.offset.x", UU[CI] = "edge.bundle.label.offset.y", UU[AI] = "edge.bundle.label.border", UU[LI] = "edge.bundle.label.border.color", UU[RI] = "edge.bundle.label.background.color", UU[jI] = "edge.bundle.label.background.gradient", UU[DI] = "edge.bundle.label.rotatable", UU.EDGE_WIDTH = NI, UU[BI] = $I, UU[FI] = zI, UU[GI] = qI, UU[YI] = HI, UU[UI] = "edge.line.dash.offset", UU[ld] = WI, UU[bd] = VI, UU[XI] = KI, UU.EDGE_BUNDLE_TYPE = JI, UU[ZI] = QI, UU.EDGE_LOOPED_EXTAND = tP, UU[qc] = iP, UU.EDGE_CONTROL_POINT = nP, UU[Zc] = "edge.split.by.percent", UU[eP] = sP, UU[id] = rP, UU[ed] = hP, UU.EDGE_CORNER_RADIUS = aP, UU[oP] = fP, UU[uP] = cP, UU.EDGE_FROM_PORT = dP, UU[vd] = _P, UU[lP] = vP, UU[bP] = yP, UU[gP] = mP, UU[xP] = pP, UU[EP] = "arrow.from.stroke.style", UU[wP] = TP, UU[kP] = "arrow.from.outline.style", UU.ARROW_FROM_LINE_DASH = OP, UU.ARROW_FROM_LINE_DASH_OFFSET = "arrow.from.line.dash.offset", UU[SP] = "arrow.from.fill.color", UU[MP] = "arrow.from.fill.gradient", UU[IP] = PP, UU[CP] = AP, UU.ARROW_TO = LP, UU[RP] = jP, UU.ARROW_TO_OFFSET = DP, UU[NP] = BP, UU[$P] = "arrow.to.stroke.style", UU[FP] = zP, UU[GP] = "arrow.to.outline.style", UU[qP] = YP, UU.ARROW_TO_LINE_DASH_OFFSET = "arrow.to.line.dash.offset", UU[HP] = UP, UU[WP] = "arrow.to.fill.gradient", UU[VP] = XP, UU[KP] = JP;
    var WU = new xs,
        VU = RY.PROPERTY_TYPE_ACCESSOR,
        XU = RY[xS],
        KU = !1;
    WU._2d(XU, UU.SELECTION_TYPE, null, Kx), WU._2d(XU, UU[Bm], null, Vx), WU._2d(XU, UU.SELECTION_SHADOW_BLUR, null, qx), WU._2d(XU, UU[yS], null, Yx), WU._2d(XU, UU[TS], null, "selectionShadowOffsetX"), WU._2d(XU, UU[kS], null, "selectionShadowOffsetY"), WU._2d(VU, ph, BE, $o), WU._2d(XU, UU[AM], BE, AT), WU._2d(XU, UU[ZP], BE, QP), WU._2d(XU, UU.LABEL_ANCHOR_POSITION, BE, gO), WU._2d(XU, UU.LABEL_COLOR, BE, tC), WU._2d(XU, UU[DM], BE, S_), WU._2d(XU, UU.LABEL_BORDER, BE, qg), WU._2d(XU, UU[eI], BE, ZO), WU._2d(XU, UU[iC], BE, nC), WU._2d(XU, UU[vI], BE, eC), KU || (WU._2d(XU, UU[sC], null, e_), WU._2d(XU, UU[CS], null, i_), WU._2d(XU, UU.SHADOW_OFFSET_X, null, cx), WU._2d(XU, UU.SHADOW_OFFSET_Y, null, dx), WU._2d(XU, UU[rC], BE, M_), WU._2d(XU, UU.LABEL_FONT_STYLE, BE, O_), WU._2d(XU, UU.LABEL_ALIGN_POSITION, BE, hC), WU._2d(XU, UU[IM], BE, Yo), WU._2d(XU, UU[FM], BE, BO), WU._2d(XU, UU[GM], BE, aC), WU._2d(XU, UU.LABEL_POINTER, BE, Hf), WU._2d(XU, UU[UM], BE, oC), WU._2d(XU, UU.LABEL_OFFSET_X, BE, XO), WU._2d(XU, UU[XM], BE, KO), WU._2d(XU, UU.LABEL_ROTATABLE, BE, fC), WU._2d(XU, UU[rI], BE, Xf), WU._2d(XU, UU[JM], BE, oT), WU._2d(XU, UU.LABEL_SHADOW_BLUR, BE, e_), WU._2d(XU, UU[uI], BE, i_), WU._2d(XU, UU[dI], BE, cx), WU._2d(XU, UU[uC], BE, dx), WU._2d(XU, UU[_I], BE, xT), WU._2d(XU, UU[cC], null, Jm), WU._2d(XU, UU[dC], null, lx), WU._2d(XU, UU[MS], null, IS));
    var JU = new xs;
    JU._2d(VU, cO), JU._2d(VU, gO, null, _C), JU._2d(VU, Yo, null, Yo), KU || (JU._2d(XU, UU[lC], null, nC), JU._2d(XU, UU.BACKGROUND_GRADIENT, null, Xf), JU._2d(XU, UU[aM], null, BO), JU._2d(XU, UU[tM], null, qg), JU._2d(XU, UU.BORDER_RADIUS, null, oC), JU._2d(XU, UU[nM], null, ZO), JU._2d(XU, UU.BORDER_LINE_DASH, null, vC), JU._2d(XU, UU[rM], null, QO)), JU._2d(VU, yx, yx, $o, bC), JU._2d(VU, oT, yx, oT), JU._2d(XU, UU[NS], yx, Fo), JU._2d(XU, UU[yC], yx, ff), JU._2d(XU, UU[gC], yx, Qx), JU._2d(XU, UU[XS], yx, hu), KU || (JU._2d(XU, UU.IMAGE_ADJUST, yx, mC), JU._2d(XU, UU[xC], yx, Wx), JU._2d(XU, UU.SHAPE_OUTLINE_STYLE, yx, Jx), JU._2d(XU, UU.SHAPE_FILL_GRADIENT, yx, pC), JU._2d(XU, UU.SHAPE_LINE_DASH, yx, cu), JU._2d(XU, UU.SHAPE_LINE_DASH_OFFSET, yx, bu), JU._2d(XU, UU[EC], yx, Xx), JU._2d(XU, UU[fM], yx, t_), JU._2d(XU, UU[lM], yx, nC), JU._2d(XU, UU.IMAGE_BACKGROUND_GRADIENT, yx, Xf), JU._2d(XU, UU[wM], yx, BO), JU._2d(XU, UU[bM], yx, qg), JU._2d(XU, UU[pM], yx, oC), JU._2d(XU, UU[mM], yx, ZO), JU._2d(XU, UU[wC], yx, vC), JU._2d(XU, UU[TC], yx, QO), JU._2d(XU, UU[kM], yx, xT), JU._2d(XU, UU[kC], yx, IS)), JU._2d(VU, Ek, null, null, OC), JU._2d(VU, pk, null, null, OC);
    var ZU = new xs;
    ZU._2d(VU, NO, null, null, SC), ZU._2d(VU, $O, null, null, SC), ZU._2d(VU, DO, null, null, SC), ZU._2d(VU, BO, null, null, SC), ZU._2d(XU, UU.GROUP_BACKGROUND_COLOR, MC, Qx), ZU._2d(XU, UU[IC], MC, pC), ZU._2d(XU, UU[gI], MC, Fo), ZU._2d(XU, UU[xI], MC, ff), ZU._2d(XU, UU[PC], MC, cu), ZU._2d(XU, UU[CC], MC, bu);
    var QU = new xs;
    QU._2d(VU, tc, MC, null, AC), QU._2d(VU, rO, MC, null, AC), QU._2d(VU, Id, MC, null, AC), QU._2d(XU, UU[qc], MC, null, AC), QU._2d(XU, UU[Pd], MC, null, AC), QU._2d(XU, UU.EDGE_WIDTH, MC, Fo), QU._2d(XU, UU[BI], MC, ff), QU._2d(XU, UU.ARROW_FROM, MC, LC), QU._2d(XU, UU[xO], MC, RC), KU || (QU._2d(XU, UU[jC], MC, np), QU._2d(XU, UU[dM], MC, DC), QU._2d(XU, UU[XI], MC, ip), QU._2d(XU, UU[oP], null, Td, AC), QU._2d(XU, UU[uP], null, kd, AC), QU._2d(XU, UU[FI], MC, Wx), QU._2d(XU, UU.EDGE_OUTLINE_STYLE, MC, Jx), QU._2d(XU, UU[YI], MC, cu), QU._2d(XU, UU[UI], MC, bu), QU._2d(XU, UU[hd], MC, null, AC), QU._2d(XU, UU[ld], MC, null, AC), QU._2d(XU, UU[bd], MC, null, AC), QU._2d(XU, UU[_d], MC, null, AC), QU._2d(XU, UU.EDGE_TO_PORT, MC, null, AC), QU._2d(XU, UU.LINE_CAP, MC, Xx), QU._2d(XU, UU[fM], MC, t_), QU._2d(VU, iO, null, null, AC, !0), QU._2d(VU, wd, null, null, AC, !0), QU._2d(XU, UU.ARROW_FROM_SIZE, MC, NC), QU._2d(XU, UU.ARROW_FROM_OFFSET, MC, BC), QU._2d(XU, UU[xP], MC, $C), QU._2d(XU, UU[EP], MC, FC), QU._2d(XU, UU[wP], MC, zC), QU._2d(XU, UU[kP], MC, "fromArrowOutlineStyle"), QU._2d(XU, UU[SP], MC, GC), QU._2d(XU, UU[MP], MC, "fromArrowFillGradient"), QU._2d(XU, UU.ARROW_FROM_LINE_DASH, MC, qC), QU._2d(XU, UU.ARROW_FROM_LINE_DASH_OFFSET, MC, "fromArrowLineDashOffset"), QU._2d(XU, UU[CP], MC, YC), QU._2d(XU, UU[IP], MC, HC), QU._2d(XU, UU[RP], MC, UC), QU._2d(XU, UU[WC], MC, VC), QU._2d(XU, UU[NP], MC, XC), QU._2d(XU, UU[$P], MC, KC), QU._2d(XU, UU.ARROW_TO_OUTLINE, MC, JC), QU._2d(XU, UU[GP], MC, ZC), QU._2d(XU, UU.ARROW_TO_FILL_COLOR, MC, QC), QU._2d(XU, UU[WP], MC, tA), QU._2d(XU, UU[qP], MC, iA), QU._2d(XU, UU[nA], MC, "toArrowLineDashOffset"), QU._2d(XU, UU.ARROW_TO_LINE_JOIN, MC, eA), QU._2d(XU, UU.ARROW_TO_LINE_CAP, MC, sA));
    var tW = new xs;
    tW._2d(XU, UU[TI], rA, tC), tW._2d(XU, UU[wI], rA, QP), tW._2d(XU, UU.EDGE_BUNDLE_LABEL_ANCHOR_POSITION, rA, gO), tW._2d(XU, UU[kI], rA, S_), tW._2d(XU, UU.EDGE_BUNDLE_LABEL_ROTATABLE, rA, fC), KU || (tW._2d(XU, UU[EI], rA, Yo), tW._2d(XU, UU.EDGE_BUNDLE_LABEL_FONT_FAMILY, rA, M_), tW._2d(XU, UU[OI], rA, O_), tW._2d(XU, UU[SI], rA, BO), tW._2d(XU, UU[MI], rA, aC), tW._2d(XU, UU[II], rA, Hf), tW._2d(XU, UU.EDGE_BUNDLE_LABEL_RADIUS, rA, oC), tW._2d(XU, UU.EDGE_BUNDLE_LABEL_OFFSET_X, rA, XO), tW._2d(XU, UU[CI], rA, KO), tW._2d(XU, UU[AI], rA, qg), tW._2d(XU, UU[LI], rA, ZO), tW._2d(XU, UU.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR, rA, nC), tW._2d(XU, UU[jI], rA, Xf));
    var iW = new xs;
    iW._2d(VU, cO), iW._2d(XU, UU.BACKGROUND_COLOR, null, nC), iW._2d(XU, UU.BACKGROUND_GRADIENT, null, Xf), iW._2d(XU, UU[aM], null, BO), iW._2d(XU, UU.BORDER, null, qg), iW._2d(XU, UU[zm], null, oC), iW._2d(XU, UU[nM], null, ZO), iW._2d(XU, UU[hA], null, vC), iW._2d(XU, UU[rM], null, QO), iW._2d(VU, Yo, null, Yo), iW._2d(VU, iO, null, null, aA), iW._2d(VU, Ed, yx, $o), iW._2d(VU, oT, yx, oT), iW._2d(XU, UU[NS], yx, Fo), iW._2d(XU, UU.SHAPE_STROKE_STYLE, yx, ff), iW._2d(XU, UU[gC], yx, Qx), iW._2d(XU, UU[YS], yx, pC), KU || (iW._2d(XU, UU[jC], yx, np), iW._2d(XU, UU.LINE_DASH_JOIN, yx, DC), iW._2d(XU, UU[oA], yx, ip), iW._2d(XU, UU[xC], yx, Wx), iW._2d(XU, UU[WS], yx, Jx), iW._2d(XU, UU[FS], yx, cu), iW._2d(XU, UU.SHAPE_LINE_DASH_OFFSET, yx, bu), iW._2d(XU, UU[EC], yx, Xx), iW._2d(XU, UU[fM], yx, t_), iW._2d(XU, UU[XS], yx, hu), iW._2d(XU, UU.IMAGE_BACKGROUND_COLOR, yx, nC), iW._2d(XU, UU.IMAGE_BACKGROUND_GRADIENT, yx, Xf), iW._2d(XU, UU[wM], yx, BO), iW._2d(XU, UU[bM], yx, qg), iW._2d(XU, UU[pM], yx, oC), iW._2d(XU, UU[mM], yx, ZO), iW._2d(XU, UU[wC], yx, vC), iW._2d(XU, UU[TC], yx, QO), iW._2d(XU, UU[lP], yx, LC), iW._2d(XU, UU.ARROW_FROM_SIZE, yx, NC), iW._2d(XU, UU[gP], yx, BC), iW._2d(XU, UU[xP], yx, $C), iW._2d(XU, UU.ARROW_FROM_STROKE_STYLE, yx, FC), iW._2d(XU, UU.ARROW_FROM_FILL_COLOR, yx, GC), iW._2d(XU, UU[MP], yx, "fromArrowFillGradient"), iW._2d(XU, UU[fA], yx, qC), iW._2d(XU, UU[uA], yx, "fromArrowLineDashOffset"), iW._2d(XU, UU.ARROW_FROM_LINE_JOIN, yx, YC), iW._2d(XU, UU[IP], yx, HC), iW._2d(XU, UU[RP], yx, UC), iW._2d(XU, UU[WC], yx, VC), iW._2d(XU, UU[xO], yx, RC), iW._2d(XU, UU[NP], yx, XC), iW._2d(XU, UU[$P], yx, KC), iW._2d(XU, UU.ARROW_TO_FILL_COLOR, yx, QC), iW._2d(XU, UU[WP], yx, tA), iW._2d(XU, UU[qP], yx, iA), iW._2d(XU, UU.ARROW_TO_LINE_DASH_OFFSET, yx, "toArrowLineDashOffset"), iW._2d(XU, UU[KP], yx, eA), iW._2d(XU, UU[VP], yx, sA));
    var nW = function(t, i) {
            return t = t.zIndex, i = i[xT], t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
        },
        eW = function(t, i) {
            this[m_] = new Sq, w(this, eW, arguments), this.id = this[au].id, this.graph = i, this._f5 = [], this._mx4 = new xs
        };
    eW.prototype = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _mx4: null,
        _f5: null,
        addChild: function(t, i) {
            t._jd = this, i !== n ? g(this._f5, t, i) : this._f5[fh](t), t._de && this[dS](t), this[cA](), this[dA](), this[_A] = !0
        },
        removeChild: function(t) {
            this[lA][vA](t), t._jd = null, m(this._f5, t), this._js && this._js[ah](t), this.invalidateSize(), this[_A] = !0
        },
        getProperty: function(t, i) {
            return i == RY[xS] ? this[yd].getStyle(this.$data, t) : i == RY.PROPERTY_TYPE_CLIENT ? this[au].get(t) : this[au][t]
        },
        getStyle: function(t) {
            return this[yd][Gc](this[au], t)
        },
        _$t: function(t, i, n) {
            var e = this._mx4[bA](this, t, i, n);
            return WU.onBindingPropertyChange(this, t, i, n) || e
        },
        onPropertyChange: function(t) {
            if (xT == t[nv]) return this[mk](), !0;
            if (qk == t.type) {
                if (rT == t[nv]) return this.invalidate(), !0;
                var i = t[Dc];
                return i && i.ui ? (Iv == t[nv] ? this._9f(i) : ah == t[nv] && this[ix](i.ui), !0) : !1
            }
            return this._$t(t.kind, t[av] || VU, t[Dc])
        },
        label: null,
        initLabel: function() {
            var t = new rW;
            t.name = BE, this[yA](t), this[BE] = t
        },
        initialize: function() {
            this.initLabel(), this[au][Yk] && this[au]._mxf[ku](this._9f, this), WU.initBindingProperties(this), this._mx4[gA](this, !1)
        },
        addBinding: function(t, i) {
            return i.property ? (i.target = t, void this[lA]._23(i[mA], i)) : !1
        },
        _f6: function(t, i) {
            var n = this[au];
            if (!n[Yk]) return !1;
            var e = n[Yk][pl](t.id);
            if (!e || !e[xA]) return !1;
            var s = e[xA];
            if ($(s)) {
                var r = !1;
                return l(s, function(t) {
                    return $o == t.bindingProperty ? (r = ps(n, i, t.property, t.propertyType), !1) : void 0
                }, this), r
            }
            return $o == s[pS] ? ps(n, i, s[mA], s[av]) : !1
        },
        _9f: function(t) {
            var i = t.ui;
            if (i) {
                var n = t[xA];
                n && (Array[Nc](n) ? n[ku](function(t) {
                    this[pA](i, t)
                }, this) : this[pA](i, n)), this[yA](i)
            }
        },
        validate: function() {
            return this._mz9 || (this[fS](), this[Tb] = !0), this[uS]()
        },
        _8: !0,
        invalidateChildrenIndex: function() {
            this._8 = !0
        },
        doValidate: function() {
            if (this._19 && (this._19 = !1, this[EA]() && (this[wA](), this[$f] = !0), this._8 && (this._8 = !1, cq ? this._f5 = _(this._f5, nW) : this._f5.sort(nW))), Kn.call(this) && (this[uu] = !0), this.$invalidateRotate) {
                EH[ih](this), this.uiBounds.setByRect(this._fj);
                var t = this[TA] || 0,
                    i = Math.max(this.$selectionBorder || 0, this[kA] || 0, this.$selectionShadowOffsetX || 0),
                    n = Math.max(this[OA] || 0, this[SA] || 0),
                    e = Math.max(2 * t, this[MA], this.$selectionShadowBlur);
                e += mq.UI_BOUNDS_GROW || 0;
                var s = e - i,
                    r = e + i,
                    h = e - n,
                    a = e + n;
                return 0 > s && (s = 0), 0 > r && (r = 0), 0 > h && (h = 0), 0 > a && (a = 0), this.uiBounds.grow(h, s, a, r), this[sS] && this[sS](), this.$invalidateBounds = !0, !0
            }
        },
        validateChildren: function() {
            var t = this.$invalidateChild;
            this[_A] = !1;
            var i = this._myody,
                n = this[IA];
            i && (i[PA] = this[PA], i.$renderColorBlendMode = this.$renderColorBlendMode, i[CA] = this[CA], i.$shadowBlur = this.$shadowBlur, i.$shadowOffsetX = this[kA], i.$shadowOffsetY = this.$shadowOffsetY), this[IA] = !1, i && i._19 && (n = i[Io]() || n, i.$x = 0, i.$y = 0, i[uu] && EH[ih](i), t = !0);
            for (var e = 0, s = this._f5.length; s > e; e++) {
                var r = this._f5[e];
                if (r != i) {
                    var h = r._19 && r[Io]();
                    (h || n) && r._i0 && te(r, i, this), !t && h && (t = !0)
                }
            }
            return t
        },
        measure: function() {
            this._j9[ru]();
            for (var t, i, n = 0, e = this._f5[nh]; e > n; n++) t = this._f5[n], t._i0 && (i = t._fj, i[Oa] <= 0 || i[Ja] <= 0 || this._j9[Rl](t.$x + i.x, t.$y + i.y, i.width, i.height))
        },
        _js: null,
        _my6: function(t) {
            if (!this._js) {
                if (!t[eC]) return;
                return this._js = new xq, this._js.add(t)
            }
            return t.showOnTop ? this._js.add(t) : this._js[ah](t)
        },
        draw: function(t, i, n) {
            for (var e, s = 0, r = this._f5[nh]; r > s; s++) e = this._f5[s], e._i0 && !e[eC] && e._jh(t, i, n, this)
        },
        _9p: function(t, i) {
            if (!this._i0 || !this._js || !this._js[nh]) return !1;
            t[lo](), t[vo](this.$x, this.$y), this[Df] && this.$_hostRotate && t.rotate(this[Nf]), (this.offsetX || this.offsetY) && t[vo](this.offsetX, this[KO]), this.$rotate && t[Yo](this[Bf]), this[Lf] && this[Rf] && t[vo](-this._mz6.x, -this[Rf].y), this[i_] && (t[i_] = this[i_], t[e_] = this[e_] * i, t[cx] = this[cx] * i, t[dx] = this.shadowOffsetY * i), t.beginPath();
            for (var n, e = 0, s = this._f5[nh]; s > e; e++) n = this._f5[e], n._i0 && n[eC] && n._jh(t, i, this[gk], this);
            t[wo]()
        },
        doHitTest: function(t, i, n) {
            if (n) {
                if (!this._j9.intersectsRect(t - n, i - n, 2 * n, 2 * n)) return !1
            } else if (!this._j9.intersectsPoint(t, i)) return !1;
            return this.hitTestChildren(t, i, n)
        },
        hitTestChildren: function(t, i, n) {
            for (var e, s = this._f5.length - 1; s >= 0; s--)
                if (e = this._f5[s], e._i0 && e[Md](t, i, n)) return e;
            return !1
        },
        destroy: function() {
            this[cE] = !0;
            for (var t, i = this._f5.length - 1; i >= 0; i--) t = this._f5[i], t[Wy]()
        }
    }, E(eW, YU), J(eW.prototype, {
        renderColorBlendMode: {
            get: function() {
                return this.$renderColorBlendMode
            },
            set: function(t) {
                this[AA] = t, this._19 = !0, this[LA] && (this[LA].renderColorBlendMode = this[AA])
            }
        },
        renderColor: {
            get: function() {
                return this[PA]
            },
            set: function(t) {
                this[PA] = t, this._19 = !0, this.body && (this.body[Jm] = this.$renderColor)
            }
        },
        bodyBounds: {
            get: function() {
                if (this[RA]) {
                    this[RA] = !1;
                    var t, i = this.body;
                    t = i && i._i0 && !this._$n() ? i._fj[oh]() : this._7u[oh](), this[Yo] && (t[jA] = t.clone(), t[Yo] = this.rotate, t.tx = this.x, t.ty = this.y, Ai(t, this[Yo], t)), t.x += this.$x, t.y += this.$y, this[DA] = t
                }
                return this[DA]
            }
        },
        bounds: {
            get: function() {
                return new Sq((this.$x || 0) + this[m_].x, (this.$y || 0) + this[m_].y, this[m_][Oa], this.uiBounds[Ja])
            }
        },
        body: {
            get: function() {
                return this[NA]
            },
            set: function(t) {
                t && this._myody != t && (this[NA] = t, this[IA] = !0, this[dA]())
            }
        }
    }), mq.UI_BOUNDS_GROW = 1;
    var sW = function() {
        w(this, sW, arguments)
    };
    sW[_h] = {
        strokeStyle: BA,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _ja: 1,
        _jc: 1,
        outline: 0,
        onDataChanged: function(t) {
            T(this, sW, cS, arguments), this._kk && this._7k && this._kk._6w(this._7k, this), t && this[bC](t)
        },
        _myz: function(t) {
            this._kk = On(t), this._kk[Io](), (this._kk._ll == WY || this._kk._6p()) && (this._7k || (this._7k = function() {
                this[Tk](), this._jd && this._jd[yd] && (this._jd[dA](), this._jd.graph[rT]())
            }), this._kk._mzd(this._7k, this))
        },
        _kk: null,
        initialize: function() {
            this._myz(this.$data)
        },
        _4w: function() {
            return this._kk && this._kk[_f]
        },
        _9j: function(t) {
            if (!t || t.width <= 0 || t[Ja] <= 0 || !this[$A] || !(this[oT] instanceof Object)) return this._ja = 1, void(this._jc = 1);
            var i = this[oT][Oa],
                e = this.size.height;
            if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._ja = 1, void(this._jc = 1);
            var s, r, h = t[Oa],
                a = t[Ja];
            i >= 0 && (s = i / h), e >= 0 && (r = e / a), 0 > i ? s = r : 0 > e && (r = s), this._ja = s, this._jc = r
        },
        validateSize: function() {
            if (this[FA]) {
                this.$invalidateScale = !1;
                var t = this[zA];
                this._ja, this._jc, this._9j(t), this.setMeasuredBounds(t[Oa] * this._ja, t[Ja] * this._jc, t.x * this._ja, t.y * this._jc)
            }
        },
        measure: function() {
            var t = this._kk.getBounds(this[Fo] + this.outline);
            return t ? (this[FA] = !0, void(this[zA] = t[oh]())) : void this._j9.set(0, 0, 0, 0)
        },
        onBoundsChanged: function() {
            this.$invalidateFillGradient = !0
        },
        _1g: function() {
            this[GA] = !1, this._fillGradient = this[pC] ? tH[_h].generatorGradient.call(this[qA], this._7u) : null
        },
        _k1: function(t) {
            var i, n;
            if (Fg == this[YA]) i = 1, n = -1;
            else {
                if (zg != this[YA]) return;
                i = -1, n = 1
            }
            var e = this._j9.cx,
                s = this._j9.cy;
            t[vo](e, s), t[bo](i, n), t[vo](-e, -s)
        },
        draw: function(t, i, n, e) {
            if (this._ja && this._jc) {
                if (this.$invalidateFillGradient && this._1g(), t.save(), this[YA] && this._k1(t), this._kk._ll == XY) return t.scale(this._ja, this._jc), this._kk._lh[_f](t, i, this, n, e || this), void t.restore();
                n && this._7m(t, i, e), this._kk[_f](t, i, this, this._ja, this._jc), t[wo]()
            }
        },
        doHitTest: function(t, i, n) {
            if (this._kk.hitTest) {
                if (Fg == this[YA]) {
                    var e = this._j9.cy;
                    i = 2 * e - i
                } else if (zg == this.$adjustType) {
                    var s = this._j9.cx;
                    t = 2 * s - t
                }
                t /= this._ja, i /= this._jc;
                var r = (this._ja + this._jc) / 2;
                return r > 1 && (n /= r, n = 0 | n), this._kk._lh instanceof yH ? this._kk._lh[Md](t, i, n, !0, this.$lineWidth, this[HA] || this.$fillGradient) : this._kk[Md](t, i, n)
            }
            return !0
        },
        $invalidateScale: !0,
        $invalidateFillGradient: !0
    }, E(sW, YU), gs(sW[_h], {
        adjustType: {},
        fillColor: {},
        size: {
            validateFlags: [wg, UA]
        },
        fillGradient: {
            validateFlags: [WA]
        }
    }), J(sW.prototype, {
        originalBounds: {
            get: function() {
                return this[zA]
            }
        }
    }), mq.ALIGN_POSITION = Iq[Zl];
    var rW = function() {
        w(this, rW, arguments), this[tC] = mq[RM]
    };
    rW[_h] = {
        color: mq.LABEL_COLOR,
        showPointer: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        _gf: null,
        alignPosition: null,
        measure: function() {
            this.font;
            var t = Fi(this[au], this[VA], this[XA], this[KA], mq[To], this[JA]);
            if (this._gf = t, this[$A]) {
                var i = this.$size.width || 0,
                    n = this[$A][Ja] || 0;
                return this[ZA](i > t[Oa] ? i : t.width, n > t[Ja] ? n : t[Ja])
            }
            return this[ZA](t.width, t.height)
        },
        doHitTest: function(t, i, n) {
            return this[au] ? Nn(t, i, n, this) : !1
        },
        draw: function(t, i, n, e) {
            if (n && this._7m(t, i, e), this.$fontSize || mq[yo], this.$rotatable && this.$_hostRotate) {
                var s = vn(this.$_hostRotate);
                s > pq && 3 * pq > s && (t.translate(this._j9.width / 2, this._j9[Ja] / 2), t[Yo](Math.PI), t[vo](-this._j9[Oa] / 2, -this._j9.height / 2))
            }
            var r = this[hC] || mq[QA],
                h = r.horizontalPosition,
                a = r.verticalPosition,
                o = 0;
            h == Cq ? (h = $b, o += this._j9[Oa] / 2) : h == Aq ? (h = ha, o += this._j9[Oa]) : h = La;
            var f = 0;
            a == Rq ? f = (this._j9[Ja] - this._gf[Ja]) / 2 : a == jq && (f = this._j9[Ja] - this._gf[Ja]), t[sf] = this[tC], $i(t, this.$data, o, f, h, this[XA], this.$fontSize, this[KA], mq[To], this[JA])
        },
        _4w: function() {
            return null != this[au] || this.$size
        },
        $invalidateFont: !0
    }, E(rW, YU), gs(rW.prototype, {
        size: {
            validateFlags: [mS]
        },
        fontStyle: {
            validateFlags: [mS, tL]
        },
        fontSize: {
            validateFlags: [mS, tL]
        },
        fontFamily: {
            validateFlags: [mS, tL]
        }
    }), J(rW[_h], {
        font: {
            get: function() {
                return this.$invalidateFont && (this[iL] = !1, this[JA] = (this.$fontStyle || mq[uo]) + Ph + (this[VA] || mq[yo]) + co + (this[XA] || mq[_o])), this[JA]
            }
        }
    });
    var hW = function(t) {
        t = t || new yH, this[nL] = new Sq, w(this, hW, [t])
    };
    hW[_h] = {
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function() {
            this[eL] = !0, this[sL] = !0, this.$data[Po](this.$lineWidth + this[rL], this[nL]), this[ZA](this[nL])
        },
        validateSize: function() {
            if (this[eL] || this[sL]) {
                var t = this[nL][oh]();
                if (this[eL]) {
                    this.$invalidateFromArrow = !1;
                    var i = this.validateFromArrow();
                    i && t.add(i)
                }
                if (this[sL]) {
                    this[sL] = !1;
                    var i = this[hL]();
                    i && t.add(i)
                }
                this.setMeasuredBounds(t)
            }
        },
        validateFromArrow: function() {
            if (!this[au]._iu || !this[aL]) return void(this[oL] = null);
            var t = this[au],
                i = 0,
                n = 0,
                e = this[fL];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._iu)), this.fromArrowLocation = t[uL](i, n), this[cL][Yo] = Math.PI + this[cL][Yo] || 0, this.$fromArrowShape = Us(this[aL], this.$fromArrowSize);
            var s = this[oL][Po](this.fromArrowStyles[Fo] + this[dL][Wx]);
            return this.fromArrowFillGradient instanceof LY[_L] ? this.fromArrowStyles[tp] = tH.prototype.generatorGradient[ih](this[lL], s) : this[dL] && (this[dL][tp] = null), s.offset(this.fromArrowLocation.x, this[cL].y), Li(s, this[cL][Yo], s, this[cL].x, this[cL].y), s
        },
        validateToArrow: function() {
            if (!this[au]._iu || !this.$toArrow) return void(this[vL] = null);
            var t = this[au],
                i = 0,
                n = 0,
                e = this[bL];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0), 0 > i && i > -1 && (i *= t._iu), i += t._iu, this.toArrowLocation = t[uL](i, n), this[vL] = Us(this[yL], this[gL]);
            var s = this[vL][Po](this[mL][Fo] + this[mL][Wx]);
            return this[tA] instanceof LY[_L] ? this.toArrowStyles._fillGradient = tH[_h][Jf].call(this[tA], s) : this[mL] && (this[mL][tp] = null), s.offset(this[xL].x, this[xL].y), Li(s, this.toArrowLocation.rotate, s, this[xL].x, this[xL].y), s
        },
        _1z: function(t) {
            var i = t ? "from" : rO,
                e = this[i + pL];
            e === n && (e = this[EL]);
            var s = this[i + wL];
            s === n && (s = this[ff]);
            var r = this[i + TL];
            r || (this[i + TL] = r = {}), r[Fo] = e, r.strokeStyle = s, r.lineDash = this[i + kL], r[bu] = this[i + OL], r[Qx] = this[i + SL], r.fillGradient = this[i + ML], r[Xx] = this[i + IL], r.lineJoin = this[i + PL], r[Wx] = this[i + CL] || 0, r[Jx] = this[i + AL]
        },
        doValidate: function() {
            return this[aL] && this._1z(!0), this[yL] && this._1z(!1), T(this, hW, uS)
        },
        drawArrow: function(t, i, n, e) {
            if (this[aL] && this.$fromArrowShape) {
                t.save();
                var s = this.fromArrowLocation,
                    r = s.x,
                    h = s.y,
                    a = s[Yo];
                t[vo](r, h), a && t[Yo](a), this.$fromArrowShape[_f](t, i, this[dL], n, e), t[wo]()
            }
            if (this[yL] && this[vL]) {
                t[lo]();
                var s = this[xL],
                    r = s.x,
                    h = s.y,
                    a = s[Yo];
                t[vo](r, h), a && t[Yo](a), this[vL][_f](t, i, this[mL], n, e), t[wo]()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function() {
            this.$invalidateFillGradient = !0
        },
        _1g: function() {
            this[GA] = !1, this._fillGradient = this[qA] ? tH.prototype[Jf][ih](this[qA], this._7u) : null
        },
        draw: function(t, i, n, e) {
            this.$invalidateFillGradient && this._1g(), this[au][_f](t, i, this, n, e), this[LL](t, i, n, e)
        },
        doHitTest: function(t, i, n) {
            if (this[au].hitTest(t, i, n, !0, this[EL] + this[rL], this[HA] || this.$fillGradient)) return !0;
            if (this[yL] && this.$toArrowShape) {
                var e = t - this[xL].x,
                    s = i - this[xL].y;
                if (this[xL].rotate) {
                    var r = Ii(e, s, -this[xL][Yo]);
                    e = r.x, s = r.y
                }
                var h = this[mL][Qx] || this.toArrowStyles.fillGradient;
                if (this[vL][Md](e, s, n, !0, this[mL][Fo], h)) return !0
            }
            if (this[aL] && this.$fromArrowShape) {
                var e = t - this[cL].x,
                    s = i - this[cL].y;
                if (this[cL][Yo]) {
                    var r = Ii(e, s, -this[cL][Yo]);
                    e = r.x, s = r.y
                }
                var h = this.fromArrowStyles.fillColor || this.fromArrowStyles.fillGradient;
                if (this.$fromArrowShape.hitTest(e, s, n, !0, this[dL][Fo], h)) return !0
            }
            return !1
        },
        $fromArrowOutline: 0,
        $toArrowOutline: 0,
        $invalidateFillGradient: !0,
        $invalidateFromArrow: !0,
        $invalidateToArrow: !0
    }, E(hW, YU), gs(hW[_h], {
        strokeStyle: {
            validateFlags: [RL, jL]
        },
        fillColor: {},
        fillGradient: {
            validateFlags: [WA]
        },
        fromArrowOffset: {
            validateFlags: [RL, wg]
        },
        fromArrowSize: {
            validateFlags: [RL, wg]
        },
        fromArrow: {
            validateFlags: [RL, wg]
        },
        fromArrowOutline: {
            validateFlags: [RL, wg]
        },
        fromArrowStroke: {
            validateFlags: [RL, wg]
        },
        fromArrowStrokeStyle: {
            validateFlags: [RL]
        },
        toArrowOffset: {
            validateFlags: [jL, wg]
        },
        toArrowSize: {
            validateFlags: [jL, wg]
        },
        toArrow: {
            validateFlags: [jL, wg]
        },
        toArrowOutline: {
            validateFlags: [jL, wg]
        },
        toArrowStroke: {
            validateFlags: [jL, wg]
        },
        toArrowStrokeStyle: {
            validateFlags: [jL]
        },
        outline: {
            value: 0,
            validateFlags: [mS]
        }
    }), J(hW.prototype, {
        length: {
            get: function() {
                return this[$o].length
            }
        }
    }), Es[_h] = {
        shape: null,
        path: null,
        initialize: function() {
            T(this, Es, fS), this.path = new yH, this[Ed]._e3 = !1, this.shape = new hW(this.path), this.addChild(this[MC], 0), this[NA] = this[MC], QU.initBindingProperties(this)
        },
        _1k: !0,
        _5l: null,
        _$n: function() {
            return !1
        },
        _3w: function() {
            return !1
        },
        validatePoints: function() {
            this[MC][Tk]();
            var t = this[au],
                i = this[Ed];
            i[ru]();
            var n = t[Zu],
                e = t[Xu];
            n && e && Qs(this, t, i, n, e)
        },
        getEndPointBounds: function(t) {
            return t[DL]()
        },
        _39: function(t, i, n, e, s, r, h, a, o) {
            return t[xd]() ? void(i[wO] = t.pathSegments.toDatas()) : n == e ? void this.drawLoopedEdge(i, n, s, r, a, o) : void this.drawEdge(i, n, e, s, r, h, a, o)
        },
        drawLoopedEdge: function(t, i, n, e) {
            er(this, e, t)
        },
        drawEdge: function(t, i, n, e, s, r, h, a) {
            if (e == RY[NL]) {
                var o = (h.x + a.x) / 2,
                    f = (h.y + a.y) / 2,
                    u = h.x - a.x,
                    c = h.y - a.y,
                    d = Math.sqrt(u * u + c * c),
                    _ = Math[ea](c, u);
                _ += Math.PI / 6, d *= .04, d > 30 && (d = 30);
                var l = Math.cos(_) * d,
                    v = Math.sin(_) * d;
                return t.lineTo(o - v, f + l), void t.lineTo(o + v, f - l)
            }
            var b = nr(this, this[$o], s, r, i, n, h, a);
            b && (t._fd = b)
        },
        _24: function() {
            if (!this[$o].isBundleEnabled()) return null;
            var t = this[$o].getEdgeBundle(!0);
            if (!t || !t.canBind(this.graph) || !t._gw) return null;
            var i = t[BL](this);
            return t.isPositiveOrder(this.$data) || (i = -i), i
        },
        checkBundleLabel: function() {
            var t = this[$L]();
            return t ? (this.bundleLabel || this[FL](), this.bundleLabel._i0 = !0, void(this[rA][$o] = t)) : void(this[rA] && (this.bundleLabel._i0 = !1, this[rA][$o] = null))
        },
        createBundleLabel: function() {
            var t = new rW;
            t[zL] = !1, this[rA] = t, this[yA](this.bundleLabel), tW[gA](this)
        },
        getBundleLabel: function() {
            return this[yd][$L](this[$o])
        },
        doValidate: function() {
            return this._1k && (this._1k = !1, this[GL]()), this.checkBundleLabel(), T(this, Es, uS)
        },
        _4r: function() {
            this._1k = !0, this[dA]()
        },
        _$t: function(t, i, n) {
            var e = this._mx4[bA](this, t, i, n);
            return e = WU[bA](this, t, i, n) || e, this[rA] && this[rA][au] && (e = tW.onBindingPropertyChange(this, t, i, n) || e), QU[bA](this, t, i, n) || e
        }
    }, E(Es, eW), Es[qL] = function(t, i, n, e) {
        if (t[of](i.x, i.y), !e || e == RY[YL]) return void t[af](n.x, n.y);
        if (e == RY.EDGE_TYPE_VERTICAL_HORIZONTAL) t[af](i.x, n.y);
        else if (e == RY[Uc]) t.lineTo(n.x, i.y);
        else if (0 == e.indexOf(RY.EDGE_TYPE_ORTHOGONAL)) {
            var s;
            s = e == RY[Hc] ? !0 : e == RY[Xc] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
            var r = (i.x + n.x) / 2,
                h = (i.y + n.y) / 2;
            s ? (t.lineTo(r, i.y), t.lineTo(r, n.y)) : (t[af](i.x, h), t[af](n.x, h))
        } else if (0 == e[uh](RY.EDGE_TYPE_ELBOW)) {
            var s, a = aW[UU.EDGE_EXTEND] || 0;
            s = e == RY[Yc] ? !0 : e == RY.EDGE_TYPE_ELBOW_VERTICAL ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y), s ? (t[af](i.x + a, i.y), t[af](n.x - a, n.y)) : (t[af](i.x, i.y + a), t[af](n.x, n.y - a))
        } else if (0 == e.indexOf(HL)) {
            var a = aW[UU.EDGE_EXTEND] || 0;
            if (e == RY[Qc]) {
                var o = Math.min(i.y, n.y) - a;
                t[af](i.x, o), t.lineTo(n.x, o)
            } else if (e == RY[Jc]) {
                var o = Math.max(i.y, n.y) + a;
                t.lineTo(i.x, o), t.lineTo(n.x, o)
            } else if (e == RY[td]) {
                var f = Math.min(i.x, n.x) - a;
                t[af](f, i.y), t[af](f, n.y)
            } else if (e == RY.EDGE_TYPE_EXTEND_RIGHT) {
                var f = Math.max(i.x, n.x) + a;
                t.lineTo(f, i.y), t[af](f, n.y)
            }
        } else if (e == RY[NL]) {
            var r = (i.x + n.x) / 2,
                h = (i.y + n.y) / 2,
                u = i.x - n.x,
                c = i.y - n.y,
                d = Math[Oo](u * u + c * c),
                _ = Math[ea](c, u);
            _ += Math.PI / 6, d *= .04, d > 30 && (d = 30);
            var l = Math.cos(_) * d,
                v = Math.sin(_) * d;
            t[af](r - v, h + l), t[af](r + v, h - l)
        }
        t[af](n.x, n.y)
    }, J(Es[_h], {
        length: {
            get: function() {
                return this[Ed] ? this.path[nh] : 0
            }
        }
    }), Es.prototype[Za] = function(t, i, n) {
        var e = Pn(this[Ed], t, i, n);
        if (e && e[nh] > 2) {
            var s = this.data,
                r = e[e[nh] - 1];
            s.pathSegments = r.type == uH ? e[hh](1, e[nh] - 2) : e[hh](1, e[nh] - 1)
        }
    }, ws[_h] = {
        _2j: null,
        image: null,
        initialize: function() {
            T(this, ws, fS), this[UL](), JU[gA](this)
        },
        _myz: function() {
            this.data[yx] ? this[yx] && (this.body = this.image) : this[BE] && (this[LA] = this.label)
        },
        _myc: function() {
            this[yx] = new sW, this[yA](this[yx], 0), this[bC]()
        },
        doValidate: function() {
            this[LA] && (this instanceof cr && !this[au][$O] && this._56() ? this.body[Lf] = !1 : (this[LA][Lf] = null != this._2j, this[LA].anchorPosition = this._2j));
            var t = this.$data.$location,
                i = 0,
                n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[RA] = !0), this.$x = i, this.$y = n, eW.prototype.doValidate[ih](this) || e
        },
        _$t: function(t, i, n) {
            var e = this._mx4[bA](this, t, i, n);
            return e = WU.onBindingPropertyChange(this, t, i, n) || e, JU[bA](this, t, i, n) || e
        },
        getLinkablePorts: function() {
            console.log(this[$o][WL], '123')
            return this[$o][WL]
        },
        getLinkableBounds: function() {
            return this.bodyBounds
        },
        getDefaultPortPoint: function(t) {
            return ui(Iq[Zl], t || this.getLinkableBounds())
        },
        getPortPoint: function(t, i) {
            if (!t) return this[w_](i);
            i = i || this.getLinkableBounds();
            var n;
            console.log(i[jA], '33')
            return i[jA] ? (n = ui(t, i[jA]), i.rotate && (n = Pi(n.x, n.y, i[Yo], i[VL] || 0, i[XL] || 0)), n.x += i.tx || 0, n.y += i.ty || 0) : n = ui(t, i), n[KL] = t, n
        },
        getPortPoints: function() {
            var t = this[JL]();
            if (t && Array[Nc](t)) {
                var i = [],
                    n = this[DL]();
                return t.forEach(function(t) {
                    i[fh](this[dd](t, n))
                }.bind(this)), i
            }
        }
    }, E(ws, eW);
    var aW = {};
    aW[UU[yS]] = mq.SELECTION_COLOR, aW[UU.SELECTION_BORDER] = mq[Bm], aW[UU[$m]] = mq.SELECTION_SHADOW_BLUR, aW[UU[Fm]] = RY[Gx], aW[UU[TS]] = 2, aW[UU[kS]] = 2, aW[UU.LABEL_COLOR] = mq[RM], aW[UU[ZP]] = Iq[ZL], aW[UU.LABEL_ANCHOR_POSITION] = Iq.CENTER_TOP, aW[UU.LABEL_PADDING] = new Mq(0, 2), aW[UU.LABEL_POINTER_WIDTH] = 8, aW[UU.LABEL_RADIUS] = 8, aW[UU[YM]] = !0, aW[UU[iI]] = 0, aW[UU[eI]] = BA, aW[UU[hI]] = !0, aW[UU.LABEL_BACKGROUND_COLOR] = null, aW[UU.LABEL_BACKGROUND_GRADIENT] = null, aW[UU[BI]] = QL, aW[UU[tR]] = 1.5, aW[UU.EDGE_FROM_AT_EDGE] = !0, aW[UU[uP]] = !0, aW[UU[yI]] = X(3438210798), aW[UU.GROUP_STROKE] = 1, aW[UU[xI]] = BA, aW[UU[xO]] = !0, aW[UU[bP]] = mq.ARROW_SIZE, aW[UU[RP]] = mq[fd], aW[UU[Cd]] = 10, aW[UU[iR]] = 8, aW[UU[ed]] = RY.EDGE_CORNER_ROUND, aW[UU[Zc]] = !0, aW[UU[qc]] = 20, aW[UU[eP]] = .5, aW[UU.EDGE_SPLIT_VALUE] = 20, aW[UU[ZI]] = 20, aW[UU[nR]] = Iq[ZL], aW[UU[wI]] = Iq[Vl], aW[UU.EDGE_BUNDLE_LABEL_COLOR] = eR, aW[UU[NS]] = 1, aW[UU[yC]] = sR, aW[UU[dC]] = mq[rR], aW[UU.ALPHA] = 1, mq[hR] = 2;
    var oW = function(i, n) {
        this._$r = new Hq, this._$r.on(function(t) {
            OO == t[nv] && this[ck]()
        }, this), this._1d = new Hq, this._1d[X_](function(t) {
            !this[OO] || t[nv] != Vq[Cv] && t[nv] != Vq[Pv] || this[__][Sd](this[OO]) || (this[OO] = null)
        }, this), this._5 = new Hq, this._$v = new Hq, this._$i = new Hq, this._$k = new Hq, this[__] = n || new ls, this._8i = new IU(this, i), this._2e = new Hr(this), this._14 = new Hq, this[aR] = eY(t, oR, function() {
            this.updateViewport()
        }, !1, this), this._8i._mz7[fR] = function(t) {
            this[fR](t)
        }[Th](this), this._8i[RT].ondragover = function(t) {
            this[uR](t)
        }.bind(this)
    };
    oW[_h] = {
        originAtCenter: !0,
        editable: !1,
        ondragover: function(t) {
            LY[cR](t)
        },
        getDropInfo: function(t, i) {
            var n = null;
            if (i) try {
                n = JSON[Ga](i)
            } catch (e) {}
            return n
        },
        ondrop: function(t) {
            var i = t[dR];
            if (i) {
                var n = i[jy](j_),
                    e = this.getDropInfo(t, n);
                e || (e = {}, e.image = i[jy](yx), e[qo] = i[jy](qo), e[BE] = i[jy](BE), e.groupImage = i.getData($O));
                var s = this[_R](t);
                if (s = this.toLogical(s.x, s.y), !(this[lR] instanceof Function && this[lR].call(this, t, s, e) === !1) && (e.image || e[BE] || e[qo])) {
                    var r = e.image,
                        h = e.type,
                        a = e[BE],
                        o = e[$O];
                    LY[cR](t);
                    var f;
                    if (h && vR != h ? zO == h ? f = this[bR](a, s.x, s.y) : TO == h ? f = this[yR](a, s.x, s.y) : gR == h ? (f = this[mR](a, s.x, s.y), o && (o = fr(o), o && (f[$O] = o))) : (h = Z(h), h instanceof Function && h[_h] instanceof FU && (f = new h, f[ph] = a, f[cO] = new wq(s.x, s.y), this[Nk].add(f))) : f = this[xR](a, s.x, s.y), f) {
                        if (r && (r = fr(r), r && (f[yx] = r)), t[QE]) {
                            var u = this.getElementByMouseEvent(t);
                            u && this[pR](u) && (f[Vu] = u)
                        }
                        if (e[ER])
                            for (var c in e.properties) f[c] = e.properties[c];
                        if (e.clientProperties)
                            for (var c in e.clientProperties) f.set(c, e[wR][c]);
                        if (e[TR] && f[Xk](e.styles), this[kR](f, t, e) === !1) return !1;
                        var d = new Yr(this, Yr[OR], t, f);
                        return this[SR](d), f
                    }
                }
            }
        },
        _myf: function(t) {
            return t[pk] || t instanceof qU || t.droppable
        },
        enableDoubleClickToOverview: !0,
        _8i: null,
        _$r: null,
        _1d: null,
        _5: null,
        _$k: null,
        _$v: null,
        _$i: null,
        _1j: function(t) {
            return this._$r[xh](t)
        },
        _3y: function(t) {
            this._$r[gv](t), fT == t[nv] && this.checkLimitedBounds()
        },
        isVisible: function(t) {
            return this._8i._eg(t)
        },
        isMovable: function(t) {
            return (t instanceof FU || t instanceof $U && t[xd]()) && t.movable !== !1
        },
        isSelectable: function(t) {
            return t[MR] !== !1
        },
        isEditable: function(t) {
            return t[zL] !== !1
        },
        isRotatable: function(t) {
            return t[fC] !== !1
        },
        isResizable: function(t) {
            return t[IR] !== !1
        },
        canLinkFrom: function(t) {
            return t[PR] !== !1 && t.canLinkFrom !== !1
        },
        canLinkTo: function(t, i) {
            return t[PR] === !1 || t[CR] === !1 ? !1 : i instanceof LY[gR] && t.isDescendantOf(i) ? !1 : t instanceof LY[gR] && i.isDescendantOf(t) ? !1 : !0
        },
        isEndPointEditable: function(t) {
            return t[AR] !== !1
        },
        createNode: function(t, i, n) {
            var e = new FU(t, i, n);
            return this._kdModel.add(e), e
        },
        createText: function(t, i, n) {
            var e = new bs(t, i, n);
            return this._kdModel.add(e), e
        },
        createShapeNode: function(t, i, n, e) {
            D(i) && (e = n, n = i, i = null);
            var s = new zU(t, i);
            return s[aO] = new wq(n, e), this[Nk].add(s), s
        },
        createGroup: function(t, i, n) {
            var e = new qU(t, i, n);
            return this._kdModel.add(e), e
        },
        createEdge: function(t, i, n) {
            if (t instanceof FU) {
                var e = n;
                n = i, i = t, t = e
            }
            var s = new $U(i, n);
            return t && (s.$name = t), this[Nk].add(s), s
        },
        addElement: function(t, i) {
            this[Nk].add(t), i && t[th]() && t[uc](function(t) {
                this[LR](t, i)
            }, this)
        },
        removeElement: function(t) {
            this[Nk].remove(t)
        },
        clear: function() {
            this._kdModel[ru]()
        },
        getStyle: function(t, i) {
            var e = t._j8[i];
            return e !== n ? e : this[RR](i)
        },
        getDefaultStyle: function(t) {
            if (this._j8) {
                var i = this._j8[t];
                if (i !== n) return i
            }
            return aW[t]
        },
        _2q: function(t, i) {
            if (!this[jR] || this[jR][Sd](this[Dk])) return i && i(), !1;
            t = this._21(), this[DR]();
            var n, e, s, r = this.viewportBounds,
                h = this[jR],
                a = r.width / this[jR].width,
                o = r[Ja] / this[jR][Ja];
            if (1 >= a && 1 >= o) return n = h[La] > r.left ? h[La] : h[ha] < r[ha] ? r.left - (r[ha] - h[ha]) : r[La], e = h.top > r.top ? h.top : h[ra] < r[ra] ? r.top - (r[ra] - h[ra]) : r.top, void this[YT](-n * this.scale, -e * this[bo], this[bo], !1, i);
            var f = a > o;
            s = Math.max(a, o), f ? (n = h.x, e = h.y + (r.top - h.top) * (1 - s) / s, e >= h.y ? e = h.y : e < h.bottom - r.height / s && (e = h.bottom - r.height / s)) : (e = h.y, n = h.x + (r.left - h[La]) * (1 - s) / s, n >= h.x ? n = h.x : n < h.right - r[Oa] / s && (n = h[ha] - r[Oa] / s)), s *= this[bo], n *= s, e *= s, this[YT](-n, -e, s, t, i)
        },
        checkLimitedBounds: function(t) {
            return this[NR] || !this[jR] || this[jR][Sd](this[Dk]) ? !1 : (this[NR] = !0, void this[BR](function() {
                this._2q(t, function() {
                    this._mxheckingBounds = !1
                }[Th](this))
            }, this))
        },
        zoomByMouseEvent: function(t, i, n, e) {
            var s = this[_R](t);
            return Ah == typeof i ? this[$R](Math.pow(1.1, i), s.x, s.y, n, e) : i ? this[FR](s.x, s.y, n, e) : this.zoomOut(s.x, s.y, n, e)
        },
        resetScale: 1,
        translate: function(t, i, n) {
            return this[YT](this.tx + t, this.ty + i, this[bo], n)
        },
        translateTo: function(t, i, n, e, s) {
            if (n && (n = Math.min(this[bx], Math.max(this.minScale, n))), e) {
                var r = this._54();
                return void r._ku(t, i, n, e, s)
            }
            var h = this._8i[zR](t, i, n);
            return s && s(), h
        },
        centerTo: function(t, i, e, s, r) {
            return (!e || 0 >= e) && (e = this[bo]), s === n && (s = this._21()), this[YT](this[Oa] / 2 - t * e, this[Ja] / 2 - i * e, e, s, r)
        },
        moveToCenter: function(t, i) {
            if (arguments[2] === !1 || !this._8i[GR]()) {
                var n = this[Co];
                return void this[qR](n.cx, n.cy, t, i)
            }
            return this._8i[Tb] || (i = !1), this[BR](this[YR][Th](this, t, i, !1))
        },
        zoomToOverview: function(t, i) {
            if (arguments[2] === !1 || !this._8i[GR]()) {
                var n = this._8i._1e();
                return void(n && (i && (n[bo] = Math.min(n[bo], i)), this[qR](n.cx, n.cy, n.scale, t)))
            }
            return this._8i[Tb] || (t = !1), this[BR](this[HR].bind(this, t, i, !1))
        },
        _21: function() {
            return this._8i._mz9 ? this[UR] === n || null === this[UR] ? mq[WR] : this[UR] : !1
        },
        zoomAt: function(t, i, e, s, r) {
            s === n && (s = this._21()), i === n && (i = this[Oa] / 2), i = i || 0, e === n && (e = this[Ja] / 2), e = e || 0;
            var h = this[bo];
            return t = Math.min(this[bx], Math.max(this.minScale, h * t)), i = t * (this.tx - i) / h + i, e = t * (this.ty - e) / h + e, this[YT](i, e, t, s, r)
        },
        zoomOut: function(t, i, n, e) {
            return this[$R](1 / this[VR], t, i, n, e)
        },
        zoomIn: function(t, i, n, e) {
            return this[$R](this.scaleStep, t, i, n, e)
        },
        _54: function() {
            return this._panAnimation || (this._panAnimation = new lW(this)), this[XR]
        },
        onAnimationStart: function() {},
        onAnimationEnd: function() {},
        isAnimating: function() {
            return this._panAnimation && this[XR]._d8()
        },
        enableInertia: !0,
        _mz2: function(t, i) {
            var n = this._54();
            return n._fl(t || 0, i || 0)
        },
        stopAnimation: function() {
            this[XR] && this[XR]._lm()
        },
        getUI: function(t) {
            return Q(t) ? this._8i._3c(t) : this._8i._ky(t)
        },
        getUIByMouseEvent: function(t) {
            return this._8i._3c(t)
        },
        hitTest: function(t) {
            return this._8i.hitTest(t)
        },
        globalToLocal: function(t) {
            return this._8i._85(t)
        },
        toCanvas: function(t, i) {
            return this._8i._gy(t, i)
        },
        toLogical: function(t, i) {
            return Q(t) ? this._8i._9(t) : this._8i._e8(t, i)
        },
        getElementByMouseEvent: function(t) {
            var i = this._8i._3c(t);
            return i ? i.$data : void 0
        },
        getElement: function(t) {
            return Q(t) ? this[Dy](t) : this._kdModel.getById(t)
        },
        invalidate: function() {
            this._8i._myq()
        },
        invalidateUI: function(t) {
            t[rT](), this[rT]()
        },
        invalidateElement: function(t) {
            this._8i._3i(t)
        },
        getUIBounds: function(t) {
            return this._8i._2t(t)
        },
        forEachVisibleUI: function(t, i) {
            return this._8i._4j(t, i)
        },
        forEachReverseVisibleUI: function(t, i) {
            return this._8i._$s(t, i)
        },
        forEachUI: function(t, i) {
            return this._8i._ea(t, i)
        },
        forEachReverseUI: function(t, i) {
            return this._8i._4q(t, i)
        },
        forEach: function(t, i) {
            return this[Nk].forEach(t, i)
        },
        getElementByName: function(t) {
            var i;
            return this[ku](function(n) {
                return n[ph] == t ? (i = n, !1) : void 0
            }), i
        },
        focus: function(i) {
            if (i) {
                var n = t.scrollX || t[Ca],
                    e = t[B_] || t[Aa];
                return this.canvasPanel.focus(), void t[$_](n, e)
            }
            this.canvasPanel[KR]()
        },
        callLater: function(t, i, n) {
            this._8i._dw(t, i, n)
        },
        exportImage: function(t, i, n) {
            return mr(this, t, i, n)
        },
        setSelection: function(t) {
            return this[Nk][ib].set(t)
        },
        select: function(t) {
            return this[Nk][ib].select(t)
        },
        unselect: function(t) {
            return this[Nk]._selectionModel[JR](t)
        },
        reverseSelect: function(t) {
            return this[Nk][ib].reverseSelect(t)
        },
        selectAll: function() {
            gr(this)
        },
        unSelectAll: function() {
            this[d_][ru]()
        },
        unselectAll: function() {
            this[ZR]()
        },
        isSelected: function(t) {
            return this._kdModel[ib][Sd](t)
        },
        sendToTop: function(t) {
            Re(this._kdModel, t)
        },
        sendToBottom: function(t) {
            je(this[Nk], t)
        },
        moveElements: function(t, i, n) {
            var e = [],
                s = new xq;
            return l(t, function(t) {
                t instanceof FU ? e.push(t) : t instanceof $U && s.add(t)
            }), this._dn(e, i, n, s)
        },
        _dn: function(t, i, n, e) {
            if (0 == i && 0 == n || 0 == t[nh] && 0 == e.length) return !1;
            if (0 != t.length) {
                var s = this._48(t);
                e = this._47(s, e), l(s, function(t) {
                    var e = t[aO];
                    e ? t[QR](e.x + i, e.y + n) : t[QR](i, n)
                })
            }
            return e && e[nh] && this._dl(e, i, n), !0
        },
        _dl: function(t, i, n) {
            t.forEach(function(t) {
                t[ug](i, n)
            })
        },
        _47: function(t, i) {
            return this[__][ku](function(n) {
                n instanceof $U && this.isMovable(n) && t[Sd](n[Zu]) && t[Sd](n[Xu]) && i.add(n)
            }, this), i
        },
        _48: function(t) {
            var i = new xq;
            return l(t, function(t) {
                !this[tj](t), i.add(t), Ce(t, i, this[ij])
            }, this), i
        },
        reverseExpanded: function(t) {
            if (!t.isBundleEnabled()) return !1;
            var i = t[Ju](!0);
            return i ? i.reverseExpanded() !== !1 ? (this[rT](), !0) : void 0 : !1
        },
        _2e: null,
        _14: null,
        beforeInteractionEvent: function(t) {
            return this._14.beforeEvent(t)
        },
        onInteractionEvent: function(t) {
            this._14[gv](t)
        },
        addCustomInteraction: function(t) {
            this._2e[nj](t)
        },
        removeCustomInteraction: function(t) {
            this._2e[ej](t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function(t) {
            return t[Vk] || t[ph]
        },
        updateViewport: function() {
            this._8i._7d()
        },
        destroy: function() {
            this._3y(new $q(this, Wy, !0, this[cE])), this[cE] = !0, sY(t, oR, this[aR]), this._2e[Wy](), this.graphModel = new ls;
            var i = this[sj];
            this._8i._id(), i && (i.innerHTML = "")
        },
        onPropertyChange: function(t, i, n) {
            this._$r[X_](function(e) {
                e[nv] == t && i.call(n, e)
            })
        },
        removeSelection: function() {
            var t = this[d_]._jp;
            return t && 0 != t[nh] ? (t = t[sh](), this[Nk][ah](t), t) : !1
        },
        removeSelectionByInteraction: function(t) {
            var i = this[d_].datas;
            return i && 0 != i[nh] ? void LY.confirm(rj + i[nh], function() {
                var i = this[hj]();
                if (i) {
                    var n = new Yr(this, Yr[aj], t, i);
                    this[SR](n)
                }
            }, this) : !1
        },
        createShapeByInteraction: function(t, i, n, e) {
            var s = new yH(i);
            i[nh] > 2 && s.closePath();
            var r = this[yR](oj, s, n, e);
            this.onElementCreated(r, t);
            var h = new Yr(this, Yr[OR], t, r);
            return this[SR](h), r
        },
        createLineByInteraction: function(t, i, n, e) {
            var s = new yH(i),
                r = this[yR](fj, s, n, e);
            r[Gk](LY.Styles.SHAPE_FILL_COLOR, null), r[Gk](LY[uj].SHAPE_FILL_GRADIENT, null), r[Gk](LY[uj].LAYOUT_BY_PATH, !0), this[kR](r, t);
            var h = new Yr(this, Yr[OR], t, r);
            return this[SR](h), r
        },
        createEdgeByInteraction: function(t, i, n, e, s, r) {
            var h = this[cj](dj, t, i);
            if (s && h[Gk](LY.Styles[_d], s), r && h[Gk](LY.Styles[vd], r), e) h._95 = e;
            else {
                var a = this[_j],
                    o = this[Id];
                this[lj] && (a = this.interactionProperties.uiClass || a, o = this[lj].edgeType || o), a && (h.uiClass = a), o && (h[Id] = o)
            }
            this[kR](h, n);
            var f = new Yr(this, Yr[OR], n, h);
            return this[SR](f), h
        },
        onElementCreated: function(t) {
            !t[Vu] && this[OO] && (t.parent = this[OO])
        },
        allowEmptyLabel: !1,
        startLabelEdit: function(t, i, n, e) {
            var s = this;
            n.startEdit(e.x, e.y, i[$o], this[Gc](t, UU[DM]), function(n) {
                return s.onLabelEdit(t, i, n, i[Vu])
            })
        },
        onLabelEdit: function(t, i, n, e) {
            if (!n && !this[vj]) return LY[hw](bj), !1;
            if (BE == i[ph]) {
                if (t[ph] == n) return !1;
                t[ph] = n
            } else e._f6(i, n) === !1 && (i[$o] = n, this[yj](t))
        },
        setInteractionMode: function(t, i) {
            this[gj] = t, this[lj] = i
        },
        upSubNetwork: function() {
            return this._3g ? this[OO] = ur(this._3g) : !1
        },
        _$o: !1,
        invalidateVisibility: function() {
            this._$o = !0, this.invalidate()
        },
        getBundleLabel: function(t) {
            var i = t.getEdgeBundle(!0);
            return i && i.agentEdge == t ? mj + i[xj][nh] : null
        },
        zoomAnimation: null,
        pauseRendering: function(t, i) {
            (this[pj] || i) && this._8i._6r(t)
        },
        _4c: n,
        enableRectangleSelectionByRightButton: !0,
        getLinkablePoints: function(t) {
            return t[Ej]
        }
    }, J(oW[_h], {
        center: {
            get: function() {
                return this[yk](this.html[ka] / 2, this.html[u_] / 2)
            }
        },
        visibleFilter: {
            get: function() {
                return this[rk]
            },
            set: function(t) {
                this._i0Filter = t, this[ck]()
            }
        },
        topCanvas: {
            get: function() {
                return this._8i[nk]
            }
        },
        propertyChangeDispatcher: {
            get: function() {
                return this._$r
            }
        },
        listChangeDispatcher: {
            get: function() {
                return this._1d
            }
        },
        dataPropertyChangeDispatcher: {
            get: function() {
                return this._5
            }
        },
        selectionChangeDispatcher: {
            get: function() {
                return this._$k
            }
        },
        parentChangeDispatcher: {
            get: function() {
                return this._$v
            }
        },
        childIndexChangeDispatcher: {
            get: function() {
                return this._$i
            }
        },
        interactionDispatcher: {
            get: function() {
                return this._14
            }
        },
        cursor: {
            set: function(t) {
                this[wj][ya][Tj] = t || this._2e.defaultCursor
            },
            get: function() {
                return this[wj].style[Tj]
            }
        },
        interactionMode: {
            get: function() {
                return this._2e[kj]
            },
            set: function(t) {
                var i = this.interactionMode;
                i != t && (this._2e.currentMode = t, this._3y(new $q(this, gj, t, i)))
            }
        },
        scaleStep: {
            get: function() {
                return this._8i._du
            },
            set: function(t) {
                this._8i._du = t
            }
        },
        maxScale: {
            get: function() {
                return this._8i._fn
            },
            set: function(t) {
                this._8i._fn = t
            }
        },
        minScale: {
            get: function() {
                return this._8i._fo
            },
            set: function(t) {
                this._8i._fo = t
            }
        },
        scale: {
            get: function() {
                return this._8i._scale
            },
            set: function(t) {
                return this._8i[Yb] = t
            }
        },
        tx: {
            get: function() {
                return this._8i._tx
            }
        },
        ty: {
            get: function() {
                return this._8i._ty
            }
        },
        styles: {
            get: function() {
                return this._j8
            },
            set: function(t) {
                this._j8 = t
            }
        },
        selectionModel: {
            get: function() {
                return this[Nk][ib]
            }
        },
        graphModel: {
            get: function() {
                return this[Nk]
            },
            set: function(t) {
                if (this[Nk] == t) return !1;
                var i = this[Nk],
                    n = new $q(this, __, i, t);
                return this._1j(n) === !1 ? !1 : (null != i && (i[Oj][mx](this._$r, this), i[Yv][mx](this._1d, this), i[Sj][mx](this._5, this), i[Uv].removeListener(this._$v, this), i[Wv][mx](this._$i, this), i[Mj].removeListener(this._$k, this)), this._kdModel = t, this[Nk] && (this[Nk].propertyChangeDispatcher.addListener(this._$r, this), this[Nk][Yv][X_](this._1d, this), this[Nk][Sj].addListener(this._5, this), this[Nk].parentChangeDispatcher[X_](this._$v, this), this[Nk][Wv][X_](this._$i, this), this[Nk][Mj][X_](this._$k, this)), this._8i && this._8i._kz(), void this._3y(n))
            }
        },
        count: {
            get: function() {
                return this[Nk][nh]
            }
        },
        width: {
            get: function() {
                return this[sj][ka]
            }
        },
        height: {
            get: function() {
                return this.html[u_]
            }
        },
        viewportBounds: {
            get: function() {
                return this._8i[Ij]
            }
        },
        bounds: {
            get: function() {
                return this._8i._3z()
            }
        },
        canvasPanel: {
            get: function() {
                return this._8i._mz7
            }
        },
        html: {
            get: function() {
                return this._8i[RT][tx]
            }
        },
        navigationType: {
            get: function() {
                return this._8i._6u
            },
            set: function(t) {
                this._8i._3o(t)
            }
        },
        _3g: {
            get: function() {
                return this._kdModel._3g
            }
        },
        currentSubNetwork: {
            get: function() {
                return this[Nk].currentSubNetwork
            },
            set: function(t) {
                this[Nk][OO] = t
            }
        },
        limitedBounds: {
            get: function() {
                return this._limitedBounds
            },
            set: function(t) {
                return Sq[Hu](t, this._limitedBounds) ? !1 : t ? void(this._limitedBounds = new Sq(t)) : void(this._limitedBounds = null)
            }
        },
        ratio: {
            get: function() {
                return this._8i[Qa]
            }
        },
        delayedRendering: {
            get: function() {
                return this._4c === n ? mq[Pj] : this._4c
            },
            set: function(t) {
                t != this.delayedRendering && (this._4c = t, this[Cj](!1, !0))
            }
        },
        fullRefresh: {
            get: function() {
                return this._8i.fullRefresh
            },
            set: function(t) {
                this._8i[lT] = t
            }
        }
    }), mq[Pj] = !0, mq[Aj] = 60, mq[Lj] = 60, cr.prototype = {
        _myz: function() {
            return this._56() ? void 0 : T(this, cr, bC, arguments)
        },
        initialize: function() {
            T(this, cr, fS), this[OC]()
        },
        _myg: function() {
            this._ln = new yH, this.shape = new sW(this._ln), this[MC][hu] = !1, this[yA](this.shape, 0), this[LA] = this[MC]
        },
        checkBody: function() {
            return this._56() ? (this._1v = !0, this.shape ? (this.shape[AT] = !0, this[LA] = this[MC]) : (this._myg(), ZU.initBindingProperties(this)), void(this[yx] && (this[yx][AT] = !1))) : (this[yx] ? (this[yx].visible = !0, this[LA] = this[yx]) : this[UL](), void(this[MC] && (this[MC][AT] = !1)))
        },
        _56: function() {
            return this[au]._i2() && this.$data[Ek]
        },
        _ln: null,
        _1v: !0,
        _52: function() {
            this._19 = !0, this._1v = !0
        },
        doValidate: function() {
            if (this._1v && this._56()) {
                if (this._1v = !1, this[MC][Tk](), this[au].groupImage) {
                    this[MC].data = this.$data[$O];
                    var t = this._1u();
                    return this[MC][XO] = t.x + t[Oa] / 2, this.shape[KO] = t.y + t[Ja] / 2, this[MC].size = {
                        width: t[Oa],
                        height: t.height
                    }, ws[_h][uS][ih](this)
                }
                this.shape.offsetX = 0, this[MC][KO] = 0;
                var i = this._84(this[au][NO]);
                this._ln[ru](), i instanceof Sq ? Ue(this._ln, i.x, i.y, i[Oa], i[Ja], i.rx, i.ry) : i instanceof rn ? We(this._ln, i) : i instanceof hn && Ve(this._ln, i), this._ln._5v = !0, this.shape[Tk]()
            }
            return ws[_h][uS][ih](this)
        },
        _6h: function(t, i, n, e, s) {
            switch (Ah != typeof e && (e = -i / 2), Ah != typeof s && (s = -n / 2), t) {
                case RY.GROUP_TYPE_CIRCLE:
                    var r = Math.max(i, n) / 2;
                    return new rn(e + i / 2, s + n / 2, r);
                case RY[Rj]:
                    return new hn(e + i / 2, s + n / 2, i, n);
                default:
                    return new Sq(e, s, i, n)
            }
        },
        _1u: function() {
            return this._84(null)
        },
        _84: function(t) {
            var i, e, s = this[$o],
                r = s[BO],
                h = s[DO],
                a = mq[Aj],
                o = mq.GROUP_MIN_HEIGHT;
            if (h && (Ah == typeof h[Oa] && (a = h[Oa]), Ah == typeof h.height && (o = h[Ja]), i = h.x, e = h.y), !s.hasChildren()) return this._6h(t, a, o, i, e);
            var f, u = this[au]._f5._jp;
            (t == RY.GROUP_TYPE_CIRCLE || t == RY[Rj]) && (f = []);
            for (var c, d, _, l, v = new Sq, b = 0, y = u[nh]; y > b; b++) {
                var g = u[b];
                if (this.graph[l_](g) && !(g instanceof $U)) {
                    var m = this[yd][gd](g);
                    m && (c = m.$x + m._fj.x, d = m.$y + m._fj.y, _ = m._fj[Oa], l = m._fj[Ja], v[Rl](c, d, _, l), f && (f[fh]({
                        x: c,
                        y: d
                    }), f.push({
                        x: c + _,
                        y: d
                    }), f.push({
                        x: c + _,
                        y: d + l
                    }), f.push({
                        x: c,
                        y: d + l
                    })))
                }
            }
            if (v[ou]()) return this._6h(t, a, o, i, e);
            var x = this[au].$location;
            x ? x[CO] && (x[CO] = !1, i === n && (x.x = v.cx), e === n && (x.y = v.cy)) : x = this[au][aO] = {
                x: v.cx,
                y: v.cy
            }, r && v[Yf](r), Ah == typeof i && i + x.x < v.x && (v[Oa] += v.x - (i + x.x), v.x = i + x.x, f && f[fh]({
                x: v.x,
                y: v.cy
            })), Ah == typeof e && e + x.y < v.y && (v[Ja] += v.y - (v.y, e + x.y), v.y = e + x.y, f && f.push({
                x: v.cx,
                y: v.y
            }));
            var p, i = x.x,
                e = x.y;
            if (t == RY[jj]) {
                p = an(f), p.cx -= i, p.cy -= e;
                var E = Math.max(a, o) / 2;
                return p.r < E && (p.cx += E - p.r, p.cy += E - p.r, p.r = E), p
            }
            return t == RY[Rj] ? (p = on(f, v), p.cx -= i, p.cy -= e, p.width < a && (p.cx += (a - p.width) / 2, p[Oa] = a), p[Ja] < o && (p.cy += (o - p.height) / 2, p[Ja] = o), p) : (p = v, v[Oa] < a && (v[Oa] = a), v[Ja] < o && (v.height = o), v[Fk](-i, -e), p)
        },
        _$t: function(t, i, n) {
            if (!this._56()) return T(this, cr, Dj, arguments);
            var e = this[lA][bA](this, t, i, n);
            return e = WU[bA](this, t, i, n) || e, e = JU[bA](this, t, i, n) || e, ZU[bA](this, t, i, n) || e
        }
    }, E(cr, ws), LY.GroupUI = cr;
    var fW = {
        draw: function() {}
    };
    mq[Zd] = null, mq[h_] = null;
    var uW = {
            position: Xw,
            "text-align": $b
        },
        cW = {
            padding: Nj,
            transition: Bj
        },
        dW = {
            position: Hd,
            display: $j
        };
    mi(Fj, "opacity:0.7;vertical-align:middle;"), mi(".Q-Graph-Nav img:hover,img.hover", zj), yq || (mi(Gj, qj + iY(Yj) + Hj), mi(Uj, Wj + iY(Yj) + Vj)), lr.prototype = {
        _mxv: function(t, i) {
            return t._i0 == i ? !1 : (t._i0 = i, void(t[ya][ax] = i ? "visible" : qd))
        },
        _36: function(t, i) {
            var n = i / 2 - this[Xd][Xj][u_] / 2 + to;
            this._left._img[ya].top = n, this._right._img[ya].top = n, this._navPane[ya][Oa] = t + to, this._navPane[ya].height = i + to
        },
        _9k: function(t, i, n, e) {
            this._mxv(this[Ud], t), this[Kj](this[Xd], i), this[Kj](this[Qd], n), this._mxv(this[Kd], e)
        },
        _id: function() {
            var t = this[Fd].parentNode;
            t && t[ix](this[Fd])
        },
        _k0: function() {
            var t = this[Yu]._kd;
            if (t) {
                var i = t[Co];
                if (i[ou]()) return void this._9k(!1, !1, !1, !1);
                var n = t[Dk],
                    e = n.y > i.y + 1,
                    s = n.x > i.x + 1,
                    r = n.bottom < i.bottom - 1,
                    h = n[ha] < i.right - 1;
                this._9k(e, s, r, h)
            }
        }
    };
    var _W = 10;
    mi(Jj, Zj), mi(Qj, "background-color: #7E7E7E;" + iY(Yj) + ": background-color 0.2s linear;"), mi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), mi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), mi(".Q-Graph-ScrollBar--V.Both", tD), mi(".Q-Graph-ScrollBar--H.Both", iD), yq || (mi(nD, qj + iY(Yj) + eD), mi(".Q-Graph:hover .Q-Graph-ScrollPane", Wj + iY(Yj) + ":opacity 0.3s linear;")), vr[_h] = {
        _id: function() {
            this[sD]._id(), this._horizontalDragSupport._id(), delete this[sD], delete this[rD], this._li[tx] && this._li[tx].removeChild(this._li)
        },
        _li: null,
        _myl: null,
        _8k: null,
        init: function(t) {
            var n = i[ro](jd);
            n[Oh] = hD, bi(n, {
                width: Wd,
                height: Wd,
                position: Hd
            });
            var e = i.createElement(jd);
            e[Oh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = i.createElement(jd);
            s[Oh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", n.appendChild(e), n[Wu](s), t.appendChild(n), this._li = n, this._8k = s, this._myl = e, s.isH = !0;
            var r = this,
                h = {
                    onstart: function(t, i) {
                        i.classList.add(o_)
                    },
                    onrelease: function(t, i) {
                        i[Sh][ah](o_)
                    },
                    ondrag: function(t, i) {
                        var n = r[Yu]._kd;
                        if (n) {
                            var e = i.isH,
                                s = e ? t.dx : t.dy;
                            if (s && i.scale) {
                                var h = n[bo] / i[bo];
                                e ? n[vo](-h * s, 0) : n.translate(0, -h * s), LY.stopEvent(t)
                            }
                        }
                    },
                    enddrag: function(t, i) {
                        var n = r._myaseCanvas._kd;
                        if (n && n.enableInertia) {
                            var e = i.isH,
                                s = e ? t.vx : t.vy;
                            if (Math.abs(s) > .1) {
                                var h = n.scale / i.scale;
                                s *= h, e ? n._mz2(-s, 0) : n[f_](0, -s)
                            }
                        }
                    }
                };
            this[sD] = new wi(e, h), this[rD] = new wi(s, h)
        },
        _36: function() {
            var t = this[Yu]._kd;
            t && t[BR](this._k0[Th](this))
        },
        _k0: function() {
            var t = this[Yu]._kd;
            if (t) {
                var i = t.bounds;
                if (i.isEmpty()) return this._4o(!1), void this._4m(!1);
                var n = t[Dk],
                    e = t[Oa],
                    s = t[Ja],
                    r = t[bo],
                    h = 1 / r,
                    a = n.x > i.x + h || n[ha] < i[ha] - h,
                    o = n.y > i.y + h || n.bottom < i.bottom - h,
                    f = a && o;
                f ? (R(this[aD], oD), R(this._8k, oD)) : (j(this._myl, oD), j(this._8k, oD)), this._4o(a, n, i, f ? e - _W : e), this._4m(o, n, i, f ? s - _W : s)
            }
        },
        _4o: function(t, i, n, e) {
            if (!t) return this._8k.style[Dw] = Yd, void(this._8k[bo] = 0);
            var s = Math.min(i.x, n.x),
                r = Math.max(i.right, n[ha]),
                h = r - s,
                a = e / h;
            this._8k.scale = a, this._8k[ya][La] = parseInt((i.x - s) * a) + to, this._8k[ya][ha] = parseInt((r - i[ha]) * a) + to, this._8k[ya][Dw] = ""
        },
        _4m: function(t, i, n, e) {
            if (!t) return this[aD].style[Dw] = Yd, void(this[aD][bo] = 0);
            var s = Math.min(i.y, n.y),
                r = Math.max(i.bottom, n.bottom),
                h = r - s,
                a = e / h;
            this[aD][bo] = a, this[aD][ya].top = parseInt((i.y - s) * a) + to, this[aD][ya].bottom = parseInt((r - i[ra]) * a) + to, this[aD][ya][Dw] = ""
        }
    }, br[_h] = {
        shape: null,
        initialize: function() {
            T(this, br, fS), this[UL](), iW[gA](this)
        },
        _myc: function() {
            this[yx] = new hW(this[au][Ed]), this[yA](this.image, 0), this.body = this[yx]
        },
        invalidateShape: function() {
            this[yx][Tk](), this[mk]()
        },
        _$t: function(t, i, n) {
            var e = this[lA].onBindingPropertyChange(this, t, i, n);
            return e = WU[bA](this, t, i, n) || e, iW.onBindingPropertyChange(this, t, i, n) || e
        },
        doValidate: function() {
            this[LA] && (this.image.data = this.data[Ed], this.body[Lf] = null != this._2j, this[LA].anchorPosition = this._2j);
            var t = this.$data[aO],
                i = 0,
                n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[RA] = !0), this.$x = i, this.$y = n, eW[_h].doValidate[ih](this) || e
        },
        getLinkablePorts: function() {
            return this[$o][WL]
        },
        getLinkableBounds: function() {
            return this[fD]
        },
        getDefaultPortPoint: function(t) {
            return ui(Iq[Zl], t || this.getLinkableBounds())
        },
        getPortPoint: function(t, i) {
            if (!t) return this[w_](i);
            i = i || this.getLinkableBounds();
            var n;
            return i[jA] ? (n = ui(t, i[jA]), i[Yo] && (n = Pi(n.x, n.y, i.rotate, i.rotateX || 0, i.rotateY || 0)), n.x += i.tx || 0, n.y += i.ty || 0) : n = ui(t, i), n[KL] = t, n
        },
        getPortPoints: function() {
            var t = this[JL]();
            if (t && Array[Nc](t)) {
                var i = [],
                    n = this.getLinkableBounds();
                return t[ku](function(t) {
                    i[fh](this[dd](t, n))
                }[Th](this)), i
            }
        }
    }, E(br, eW), J(br.prototype, {
        path: {
            get: function() {
                return this.data[Ed]
            }
        },
        length: {
            get: function() {
                return this.data[nh]
            }
        }
    }), br[_h].addPoint = function(t, i, n) {
        var e = this._i8(t, i),
            s = this[$o],
            r = Pn(s[Ed], e.x, e.y, n);
        r && (s[uD] = r)
    }, yr[_h] = {
        _m7: function() {
            this._j0.style[ax] = AT
        },
        _k4: function() {
            this._j0[ya].visibility = qd
        },
        clear: function() {
            this._9d[ru](), this[aT]()
        },
        contains: function(t) {
            return t instanceof Object && t.id && (t = t.id), this._9d[yl](t)
        },
        _5h: function(t) {
            DU[Gk](this._j0, Bd, t ? IT + t[PT](Gh) + ")" : "")
        },
        addDrawable: function(t, i) {
            if (i) {
                var n = {
                    id: ++nq,
                    drawable: t,
                    scope: i
                };
                return this._9d.add(n), n
            }
            return t.id || (t.id = ++nq), this._9d.add(t), t
        },
        removeDrawable: function(t) {
            return t.id ? void this._9d[ah](t) : this._9d.removeById(t)
        },
        _9d: null,
        invalidate: function() {
            this._myq()
        },
        _myq: function() {
            this[Yu]._5v || this._jh()
        },
        _in: function(t, i) {
            this._j0[fo](t, i)
        },
        _jh: function() {
            var t = this._myaseCanvas[Yb],
                i = this.g;
            i._k9(), i.save(), this[Yu]._99(i);
            for (var n = this._9d._jp, e = 0, s = n[nh]; s > e; e++) i[lo](), i[tf](), this._gu(i, n[e], t), i[wo]();
            i[wo]()
        },
        _gu: function(t, i, n) {
            return i instanceof Function ? void i(t, n) : void(i[cD] instanceof Function && i[pv] && i[cD][ih](i[pv], t, n))
        }
    }, mq.ZOOM_ANIMATE = !0;
    var lW = function(t) {
        this._kd = t
    };
    mq[dD] = 600, mq.ANIMATION_TYPE = IY.easeOut, lW[_h] = {
        _kd: null,
        _db: null,
        _fl: function(t, i, n) {
            this._lm();
            var e = Math.abs(t / 2),
                s = Math.abs(i / 2),
                r = Math.min(mq[dD], .6 * Math.max(e, s) * 1e3);
            if (10 > r) return !1;
            var h = function(t) {
                    return -(2 * Math.pow(t, 1.5) - 3 * t)
                },
                a = t * r / 3,
                o = i * r / 3;
            this._ku(this._kd.tx + a, this._kd.ty + o, 0, {
                duration: r,
                animationType: h
            }, n)
        },
        _6n: function(t, i, n, e, s) {
            this._db && this._db._lm(), s && (this.__delayRender = !0, this._kd.pauseRendering(!0)), this._4e(), this._db = new CY(t, this, i, n), this._db._5x = this._5x[Th](this), this._db._kx(e)
        },
        _4e: function() {
            this._kd[_D]()
        },
        _5x: function() {
            this.__delayRender && (this._kd.pauseRendering(!1), delete this.__delayRender), this._kd[lD]()
        },
        _d8: function() {
            return this._db && this._db._d8()
        },
        _lm: function() {
            this._db && this._db._lm()
        },
        _io: function(t) {
            var i = this._fromTX + (this[vD] - this._fromTX) * t,
                n = this._fromTY + (this._toTY - this._fromTY) * t,
                e = this[bD] + (this._toScale - this._fromScale) * t;
            this._kd[YT](i, n, e, this.toInt)
        },
        _ku: function(t, i, n, e, s) {
            this._lm();
            var r = this._kd,
                h = r[bo];
            if (0 >= n && (n = h), t != r.tx || i != r.ty || n != h) {
                var a, o, f;
                e instanceof Object && (a = e[yD], o = e[gD], f = e[mD]);
                var u = r.tx,
                    c = r.ty;
                if (!a)
                    if (n != h) {
                        var d = n > h ? n / h : h / n;
                        d = Math.log(d) / Math.log(1.3), a = 60 * d
                    } else {
                        var _ = Tq(t, i, u, c);
                        a = _ / 2
                    }
                o = o || mq[dD], f = f || mq.ANIMATION_TYPE, a = Math.min(o, a), this[xD] = u, this._fromTY = c, this[bD] = h, this[vD] = t, this._toTY = i, this._toScale = n, this._6n(this._io, a, f, s, n != h)
            }
        }
    }, mq.INTERACTION_HANDLER_SIZE_TOUCH = 8, mq[pD] = 4, mq.INTERACTION_ROTATE_HANDLER_SIZE_TOUCH = 30, mq[ED] = 20;
    var vW = Math.PI / 4;
    xr[_h] = {
        element: null,
        _$l: !1,
        setCurrentElement: function(t, i) {
            this.element = t, i && this[wD]()
        },
        onDataPropertyChange: function(t) {
            this[TD] && t[gf] == this[TD] && this[yd][BR](function() {
                this._9b()
            }, this)
        },
        addDataPropertyChangeListener: function() {
            this._$l || (this._$l = !0, this[yd][kD].addListener(this._1a, this))
        },
        removeDataPropertyChangeListener: function() {
            this._$l && (this._$l = !1, this[yd].dataPropertyChangeDispatcher[mx](this._1a, this))
        },
        _1a: function(t) {
            this.element && t.source == this[TD] && this[OD](t)
        },
        onDataPropertyChange: function() {},
        onElementRemoved: function(t, i) {
            this.element && (t == this[TD] || $(t) && x(t, this[TD])) && this[Wy](i)
        },
        onClear: function(t) {
            this[TD] && this[Wy](t)
        },
        destroy: function() {
            delete this[TD], this[SD](), this[MD](), this[ID] = null
        },
        invalidate: function() {
            this[y_][rT]()
        },
        removeDrawable: function() {
            this[PD] && (this.topCanvas[MD](this[PD]), delete this[PD], this.invalidate())
        },
        drawableList: null,
        addDrawable: function() {
            this._ljableId || (this._ljableId = this[y_][CD](this[_f], this).id, this[rT]())
        },
        isShowing: function() {
            return this[PD]
        },
        draw: function(t, i) {
            this[ID] && this[ID].forEach(function(n) {
                n[_f](t, i)
            }), this.doDraw(t, i)
        },
        doDraw: function() {},
        escapable: !0,
        onkeydown: function(t, i) {
            this.escapable && 27 == t[iw] && (G(t), this[Wy](i))
        }
    }, LY[AD] = xr, pr[_h] = {
        defaultCursor: g_,
        getInteractionInstances: function(t) {
            if (!this[LD]) return null;
            for (var i = [], n = 0, e = this[LD][nh]; e > n; n++) {
                var s = this.interactions[n];
                s instanceof Function && (s = new s(t)), s.install instanceof Function && s.install(t), i.push(s)
            }
            return i
        }
    }, Er.prototype = {
        _d6: null,
        _k6: null,
        destroy: function() {
            T(this, Er, Wy, arguments), delete this._k6, delete this._8s, delete this._d6
        },
        doDraw: function(t) {
            var i = this[Ao];
            i && (t[tf](), i[ku](function(i) {
                this[RD](t, i)
            }, this), this.isClosePath && t[Cf](), this.styleDraw(t))
        },
        styleDraw: function(t) {
            var i = wr(this.graph[lj], this[jD](this.graph));
            i.lineWidth && (t[Fo] = i[Fo], i[Xx] && (t[Xx] = i[Xx]), i[t_] && (t[t_] = i[t_]), i[cu] && (t.lineDash = i[cu], t[bu] = i[bu] || 0), t[ff] = i.strokeStyle, t[No]()), i[sf] && (t[sf] = i[sf], t.fill())
        },
        drawPoint: function(t, i, n) {
            if (n) return void t[of](i.x, i.y);
            if (LY.isArray(i)) {
                var e = i[0],
                    s = i[1];
                t[Um](e.x, e.y, s.x, s.y)
            } else t.lineTo(i.x, i.y)
        },
        setCurrentPoint: function(t) {
            this[DD] = t
        },
        addPoint: function(t) {
            this._k6 || (this._k6 = [], this[CD]()), this._k6[fh](t), this[rT]()
        }
    }, E(Er, xr), J(Er[_h], {
        currentPoint: {
            get: function() {
                return this._8s
            },
            set: function(t) {
                this._8s = t, this[rT]()
            }
        },
        prevPoint: {
            get: function() {
                return this._k6 && this._k6[nh] ? this._k6[this._k6[nh] - 1] : null
            }
        },
        points: {
            get: function() {
                return this._8s && this._k6 && this._k6[nh] ? this._k6[rh](this._8s) : void 0
            }
        }
    }), LY.DrawPathInteraction = Er, Tr[_h] = {
        _iq: function(t, i) {
            return this[ND] && t != this.start ? this._d9(t, i) : this[BD](t, i)
        },
        _myn: function(t, i) {
            return t instanceof FU && i.canLinkFrom(t)
        },
        _d9: function(t, i) {
            return t instanceof FU && i.canLinkTo(t, this[ND])
        },
        _9t: function(t, i, n, e) {
            if (this._mxurrentPort) return this[$D][FD](n, e);
            var s = i.getUI(t);
            return s && s[fD] ? s.bodyBounds.center : t[cO]
        },
        _mxz: function(t) {
            this._kh && (clearTimeout(this._kh), delete this._kh), this._kh = setTimeout(function(t) {
                if (delete this._kh, this[ND] && this[DD]) {
                    var i = t.x - this.currentPoint.x,
                        n = t.y - this[DD].y;
                    Math[Oo](i * i + n * n) * this[yd][bo] <= 2 && this.addPoint(this.currentPoint)
                }
            }.bind(this, this[zD](t)), mq[GD])
        },
        destroy: function() {
            T(this, Tr, Wy, arguments), this[ND] = null, this[qD] = null, this._kh && (clearTimeout(this._kh), delete this._kh), this[YD] = null, this[$D] = null
        },
        ondblclick: function(t, i) {
            this.destroy(i)
        },
        finish: function(t, i, n, e) {
            var s;
            this._k6 && this._k6[nh] >= 2 && (this._k6[mE](), s = new xq, l(this._k6, function(t) {
                if (LY[Nc](t)) {
                    var i = t[0],
                        n = t[1];
                    s.add(new vH(RY[HD], [i.x, i.y, n.x, n.y]))
                } else s.add(new vH(RY[Dx], [t.x, t.y]))
            }, this)), i[UD](this[ND], n, t, s, this[qD], e), this[Wy](i)
        },
        onstart: function(t, i) {
            if (this[ND]) {
                var n = t.getData(),
                    e = i.toLogical(t);
                return this._d9(n, i) ? void this[WD](t, i, n, new Or(i.getUI(n))[FD](e.x, e.y)[KL]) : void this[Za](e)
            }
        },
        startdrag: function(t, i) {
            if (!this[ND] && !t.responded) {
                var n = t.getData();
                if (n && this._myn(n, i)) {
                    t[VD] = !0, this.start = n;
                    var e = i.toLogical(t),
                        s = this._9t(n, i, e.x, e.y);
                    this[qD] = s[KL], this[Za](s)
                }
            }
        },
        ondrag: function(t, i) {
            this.onmousemove(t, i)
        },
        enddrag: function(t, i) {
            if (this[ND]) {
                var n = t.getData();
                if (this._d9(n, i)) {
                    var e = i[yk](t);
                    this[WD](t, i, n, new Or(i[gd](n))[FD](e.x, e.y)[KL])
                }
            }
        },
        onrelease: function(t, i) {
            uY(t) && this.destroy(i)
        },
        _mym: null,
        onmousemove: function(t, i) {
            var n = i[yk](t),
                e = kr(i, n.x, n.y, function(t) {
                    return this._iq(t, i)
                }[Th](this));
            e != this._mym && (this[YD] = e, this[$D] = e ? new Or(i.getUI(e)) : null, e ? (this.addDrawable(), this[ID] = [this._mxurrentPort]) : this.drawableList = null, this[rT]());
            var s;
            this._mxurrentPort && (s = this[$D].nearestPoint(n.x, n.y), this[rT]()), this[ND] && (this[DD] = s || n, uY(t) && this._mxz(t, i))
        },
        toLogicalPoint: function(t) {
            return this.graph.toLogical(t)
        },
        getDefaultDrawStyles: function() {
            return {
                lineWidth: this[yd][RR](UU[tR]),
                strokeStyle: this.graph[RR](UU[BI]),
                lineDash: this[yd][RR](UU[YI]),
                lineDashOffset: this[yd].getDefaultStyle(UU.EDGE_LINE_DASH_OFFSET),
                lineCap: this.graph[RR](UU[EC]),
                lineJoin: this[yd].getDefaultStyle(UU[fM])
            }
        }
    }, E(Tr, Er), LY[XD] = Tr, Or.prototype[KD] = function(t, i, n) {
        var e = 0;
        t[tf](), t[nf](n.x - e, n.y - e, n.width + 2 * e, n.height + 2 * e), t[Fo] = 2 / i, t.strokeStyle = sR, t[No]()
    }, Or.prototype.drawPoint = function(t, i, n) {
        var e = 4;
        t[tf]();
        var s = e / i;
        t.moveTo(n.x + s, n.y), t.arc(n.x, n.y, s, 0, 2 * Math.PI, !1), t[Fo] = 1 / i, n.marked ? (t[ff] = JD, t[sf] = ZD) : (t[ff] = sR, t[sf] = "rgba(255, 255, 255, 0.8)"), t[Bo](), t.stroke()
    }, Or[_h].draw = function(t, i) {
        var n = this[nf];
        this.drawRect(t, i, n), this[Ao] && this[Ao].forEach(function(n) {
            this[RD](t, i, n)
        }.bind(this))
    }, Or[_h][FD] = function(t, i, n) {
        if (this.points) {
            n = n || 20, n *= n;
            var e, s = n;
            return this[Ao].forEach(function(r) {
                r[QD] && (r[QD] = !1);
                var h = r.x - t,
                    a = r.y - i,
                    o = h * h + a * a;
                n > o && s > o && (s = o, e = r)
            }), e && (e[QD] = !0), e || this[E_]
        }
        return this[E_]
    }, Sr[_h] = {
        getDefaultDrawStyles: function() {
            return {
                lineWidth: this[yd][RR](UU.SHAPE_STROKE),
                strokeStyle: this[yd][RR](UU[yC]),
                fillStyle: this[yd][RR](UU[gC])
            }
        },
        finish: function(t, i) {
            if (this._k6 && this._k6[nh]) {
                var n = this._k6,
                    e = 0,
                    s = 0,
                    r = 0;
                n.forEach(function(t) {
                    return LY.isArray(t) ? void t[ku](function() {
                        e += t.x, s += t.y, r++
                    }) : (e += t.x, s += t.y, void r++)
                }), e /= r, s /= r;
                var h = [];
                n[ku](function(t, i) {
                    if (0 == i) return void h[fh](new vH(RY[tN], [t.x - e, t.y - s]));
                    if (LY.isArray(t)) {
                        var n = t[0],
                            r = t[1];
                        h[fh](new vH(RY.SEGMENT_QUAD_TO, [n.x - e, n.y - s, r.x - e, r.y - s]))
                    } else h[fh](new vH(RY[Dx], [t.x - e, t.y - s]))
                }), this[ro](t, h, e, s), this[Wy](i)
            }
        },
        startdrag: function(t) {
            t[VD] = !0
        },
        createElement: function(t, i, n, e) {
            return this[yd][iN](t, i, n, e)
        },
        onstart: function(t, i) {
            var n = i[yk](t);
            this._d6 = n, this.addPoint(n)
        },
        onmousemove: function(t, i) {
            this._d6 && (this[DD] = i[yk](t))
        },
        ondblclick: function(t, i) {
            if (this._d6) {
                if (this._k6[nh] < 3) return void this[Wy](i);
                delete this._k6[this._k6.length - 1], this[WD](t, i)
            }
        },
        isClosePath: !0
    }, E(Sr, Er), LY[nN] = Sr, Mr[_h] = {
        isClosePath: !1,
        createElement: function(t, i, n, e) {
            return this[yd][eN](t, i, n, e)
        },
        getDefaultDrawStyles: function() {
            return {
                lineWidth: aW[UU[NS]],
                strokeStyle: aW[UU[yC]],
                lineDash: this.graph[RR](UU.SHAPE_LINE_DASH),
                lineDashOffset: this[yd][RR](UU[GS]),
                lineCap: this[yd][RR](UU[EC]),
                lineJoin: this[yd][RR](UU[fM])
            }
        }
    }, E(Mr, Sr), LY[sN] = Mr, Ir[_h] = {
        destroy: function(t) {
            T(this, Ir, Wy, arguments), t.cursor = "", this.start = null
        },
        doDraw: function(t) {
            if (this[ND] && this.currentPoint) {
                var i, n;
                this[yd][lj] && (i = this[yd][lj][xk], n = this.graph[lj][Id]), i = i || this[yd][_j] || LY[rN], n = n || this[yd][Id];
                var e = i.drawReferenceLine || LY[rN].drawReferenceLine,
                    s = this.graph[gd](this.start);
                s && s[fD] && (s = s[fD][$b], t[tf](), e(t, s, this[DD], n), this[hN](t))
            }
        },
        canLinkFrom: function(t, i) {
            return t instanceof FU && i[aN](t)
        },
        canLinkTo: function(t, i) {
            return t instanceof FU && i[CR](t, this.start)
        },
        startdrag: function(t, i) {
            var n = t[jy]();
            this[aN](n, i) && (t.responded = !0, this[ND] = n, i[Tj] = fg, this.addDrawable())
        },
        ondrag: function(t, i) {
            this.start && (LY.stopEvent(t), this.currentPoint = i[yk](t), this[rT]())
        },
        enddrag: function(t, i) {
            if (this.start) {
                this.invalidate();
                var n = t.getData();
                this.canLinkTo(n, i) && i[UD](this[ND], n, t), this[Wy](i)
            }
        },
        getDefaultDrawStyles: function() {
            return {
                lineWidth: this.graph.getDefaultStyle(UU[tR]),
                strokeStyle: this[yd][RR](UU[BI]),
                lineDash: this[yd][RR](UU[YI]),
                lineDashOffset: this[yd][RR](UU[UI]),
                lineCap: this[yd][RR](UU.LINE_CAP),
                lineJoin: this[yd][RR](UU[fM])
            }
        }
    }, E(Ir, Er), LY.CreateSimpleEdgeInteraction = Ir, mq.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS = !1, jr.prototype = {
        html: null,
        createHTML: function() {
            var t = i[ro](oN);
            t.className = fN, t[ya][QP] = Xw, t.style[mo] = $b, t.style.border = uN, t[ya].padding = cN, t.style.boxShadow = "0px 0px 10px rgba(40, 85, 184, 0.75)", t.style[Dw] = Yd, t[ya].overflow = qd;
            var n = this;
            return t[dN] = function(t) {
                n[_N](t)
            }, t.onkeydown = function(t) {
                return 27 == t[iw] ? void n.cancelEdit() : void 0
            }, t[lN] = function(i) {
                if (13 == i[iw] || 10 == i[iw]) {
                    if (i[Dh](), i[tw] || i[Na] || i.shiftKey) return Lr(t, Eo), void n[_N](i);
                    n.stopEdit()
                }
            }, i[LA][Wu](t), t
        },
        setText: function(t, i) {
            this.html[Dc] = t || "", i && (this[sj][ya].fontSize = i), Rr(this[sj]), this.onSizeChange(this[sj])
        },
        onSizeChange: function(t) {
            var i = (t[T_], t[k_], Ar(t));
            return t[ya][Oa] = i.width + 30 + to, t.style[Ja] = i[Ja] + 10 + to, i
        },
        onValueChange: function(t) {
            var i = t[a_];
            this.onSizeChange(i), i[ya].left = i.x - i.offsetWidth / 2 + to
        },
        onClickOnWindow: function(t) {
            t[a_] != this.html && (mq[vN] ? this.stopEdit() : this[bN]())
        },
        startEdit: function(i, n, e, s, r) {
            this[sj] || (this[sj] = this[yN]()), this[gN] || (this[gN] = function(t) {
                this[mN](t)
            }[Th](this)), t[ub](ny, this[gN], !0), this[$c] = r, this[sj].x = i, this[sj].y = n, this.html[ya][Dw] = $j, Cr(this[sj], i, n), this[xN](e, s || 10), Cr(this[sj], i, n)
        },
        isEditing: function() {
            return Yd != this[sj][ya][Dw]
        },
        cancelEdit: function() {
            this[pN](!0)
        },
        stopEdit: function(i) {
            if (this[EN]()) {
                t[cb](ny, this[gN]);
                var n = this[sj][Dc];
                !i && this.callback && this[$c](n), this.html[ya][Dw] = Yd, this[sj][Dc] = null, this[$c] = null
            }
        },
        destroy: function() {
            this[sj] && i.body[ix](this[sj])
        }
    }, LY.LabelEditor = jr;
    var bW = function(t) {
        this[yd] = t
    };
    bW[_h] = {
        destroy: function(t) {
            t[wN] && (t[wN][Wy](), delete t[wN])
        },
        ondblclick: function(t, i) {
            var n = t.getData();
            if (n) {
                if (n[TN] !== !1) {
                    if (i.editable && i[kN](n)) {
                        var e = i.hitTest(t);
                        if (e instanceof rW && e[zL] !== !1) {
                            var s = i[wN];
                            s || (i[wN] = s = new jr);
                            var r = e[Po]();
                            return r = i[bk](r.x + r[Oa] / 2, r.y + r.height / 2), r = Pr(r.x, r.y, i[sj]), void i[ON](n, e, s, r)
                        }
                    }
                    var h = n instanceof qU,
                        a = n instanceof $U && n[SN]();
                    return n._49 && (Ti(t) || !h && !a) ? void(i.currentSubNetwork = n) : h ? (n[Ek] = !n[Ek], void this.graph[SR](new Yr(this[yd], Yr[IO], t, n))) : void(a && this[yd][MN](n) && this[yd].onInteractionEvent(new Yr(this.graph, Yr[IN], t, n)))
                }
            } else {
                if (i[OO]) return void i[PN]();
                if (i[CN]) {
                    var o = i[AN] || 1;
                    Math.abs(i.scale - o) < 1e-4 ? i[HR]() : i.moveToCenter(o)
                }
            }
        }
    };
    var yW = function(t) {
        this[yd] = t
    };
    yW.prototype = {
        onkeydown: function(t, i) {
            if (i[zL]) {
                var n = t[iw];
                if (8 == n || 46 == n || 127 == n) return i.removeSelectionByInteraction(t), void F(t);
                if (Ti(t)) {
                    if (67 == n);
                    else if (86 == n);
                    else if (90 == n);
                    else if (89 != n) return;
                    F(t)
                }
            }
        }
    }, LY[LN] = yW;
    var gW = function(t) {
        this[yd] = t
    };
    gW.prototype = {
        onkeydown: function(i, n) {
            if (i[Da] && 83 == i[iw]) {
                var e = n.exportImage(n.scale, n[Dk]),
                    s = t[Ha](),
                    r = s[RN];
                r[jN] = DN + e[Oa] + NN + e.height;
                var h = r[ro](Nd);
                h.src = e[$o], r[LA][Wu](h), F(i)
            }
        }
    };
    var mW = function(t) {
        this[yd] = t
    };
    mW[_h] = {
        destroy: function() {
            delete this[BN], delete this[$N]
        },
        _29: function(t) {
            var i = new xq;
            return t[d_][ku](function(n) {
                t[tj](n) && t.isVisible(n) && i.add(n)
            }, this), i
        },
        onstart: function(t, i) {
            this[$N] && this[Wy](i)
        },
        startdrag: function(t, i) {
            if (!(t.responded || t.touches && 1 != t.touches[nh])) {
                var n = t.getData();
                if (!n || !i[FN](n) || !i[tj](n)) return void this[Wy](i);
                t.responded = !0, this[$N] = n, this[BN] = this._29(i);
                var e = new Yr(i, Yr[zN], t, this[$N], this.draggingElements[V_]);
                return i[GN](e) === !1 ? void this[Wy](i) : void i[SR](e)
            }
        },
        ondrag: function(t, i) {
            if (this[$N]) {
                if (t[Qh] && 1 != t[Qh][nh]) return void this[Ly](t, i);
                G(t);
                var n = t.dx,
                    e = t.dy,
                    s = i[bo];
                n /= s, e /= s;
                var r = new Yr(i, Yr[qN], t, this[$N], this[BN].datas);
                i[YN](this[BN][V_], n, e), i[SR](r)
            }
        },
        enddrag: function(t, i) {
            if (this[$N]) {
                if (this[BN] && this.draggingElements[nh]) {
                    if (t[QE]) {
                        var n, e = i.toLogical(t),
                            s = e.x,
                            r = e.y;
                        i[HN](function(t) {
                            var i = t[$o];
                            if (!this[BN][Sd](i) && t.uiBounds[Lo](s - t.x, r - t.y) && t.hitTest(s, r, 1)) {
                                if (i instanceof LY.Edge) {
                                    if (!i[pk]) return;
                                    for (var e = this.draggingElements[nh]; e-- > 0;) {
                                        var h = this.draggingElements.get(e);
                                        if (h instanceof LY.Node && h[UN](i)) return
                                    }
                                    return n = i, !1
                                }
                                return (i.enableSubNetwork || i._i2() && i[Ek]) && (n = i), !1
                            }
                        }, this), n && this[BN][ku](function(t) {
                            for (var i = t.parent; i;) {
                                if (this[BN][Sd](i)) return;
                                i = i[Vu]
                            }
                            t.parent = n
                        }, this)
                    }
                    var h = new Yr(i, Yr.ELEMENT_MOVE_END, t, this[$N], this.draggingElements.datas);
                    i[SR](h)
                }
                this[Wy](i)
            }
        },
        onpinch: function(t, i) {
            this.currentDraggingElement && this[Ly](t, i)
        },
        step: 1,
        onkeydown: function(t, i) {
            if (Ti(t)) {
                var n, e;
                if (37 == t[iw] ? n = -1 : 39 == t[iw] ? n = 1 : 38 == t[iw] ? e = -1 : 40 == t.keyCode && (e = 1), n || e) {
                    var s = this._29(i)[V_];
                    if (0 != s[nh]) {
                        F(t), n = n || 0, e = e || 0;
                        var r = this.step / i[bo],
                            h = new Yr(i, Yr[WN], t, null, s);
                        i.moveElements(s, n * r, e * r), i[SR](h)
                    }
                }
            }
        }
    };
    var xW = function(t) {
        this[yd] = t
    };
    xW[_h] = {
        onkeydown: function(t, i) {
            Ti(t) || (37 == t.keyCode ? (this._5m(i, 1, 0), F(t)) : 39 == t[iw] ? (this._5m(i, -1, 0), F(t)) : 38 == t[iw] ? (this._5m(i, 0, 1), F(t)) : 40 == t[iw] && (this._5m(i, 0, -1), F(t)))
        },
        _5m: function(t, i, n) {
            t[f_](i, n)
        },
        onstart: function(t, i) {
            this._kx && this[Wy](i)
        },
        _kx: !1,
        startdrag: function(t, i) {
            if (!t.responded) {
                t[VD] = !0, this._kx = !0, i.cursor = wY;
                var n = new Yr(i, Yr[VN], t);
                i[SR](n)
            }
        },
        ondrag: function(t, i) {
            this._kx && i[vo](t.dx || 0, t.dy || 0)
        },
        enddrag: function(t, i) {
            if (this._kx) {
                if (i[XN] !== !1) {
                    var n = t.vx,
                        e = t.vy;
                    (Math.abs(n) > .1 || Math.abs(e) > .1) && i[f_](n, e)
                }
                this[Wy](i);
                var s = new Yr(i, Yr.PAN_END, t);
                i[SR](s)
            }
        },
        startpinch: function(t, i) {
            i[Cj](!0)
        },
        onpinch: function(t, i) {
            this._kx = !0;
            var n = t[Hb];
            if (n) {
                var e = i[_R](t[$b]);
                i[$R](n, e.x, e.y, !1)
            }
        },
        endpinch: function(t, i) {
            i.pauseRendering(!1)
        },
        destroy: function(t) {
            this._kx = !1, t[Tj] = null
        }
    }, Dr.prototype = {
        onDataPropertyChange: function() {
            this.graph[BR](function() {
                this._k0()
            }, this)
        },
        destroy: function() {
            this.graph[Tj] = null, this.element && delete this[TD][KN], this._mousePressed = !1, delete this._95, delete this._8s, delete this[JN], T(this, Dr, Wy, arguments)
        },
        _95: null,
        _4v: function(t) {
            this._95 = t, this[rT]()
        },
        isEndPointEditable: function(t, i) {
            return this[yd][ZN](t, i)
        },
        drawPoint: function(t, i, n) {
            (!i[QN] || this[ZN](this[TD], i.isFrom)) && (t.beginPath(), i[tB] ? t[nf](i.x - this.handlerSize / n, i.y - this.handlerSize / n, this[F_] / n * 2, this[F_] / n * 2) : t.arc(i.x, i.y, this[F_] / n, 0, 2 * Math.PI, !1), t[Fo] = 1 / n, t[cu] = [], t.strokeStyle = n_, t[sf] = "rgba(255, 255, 0, 0.8)", t[No](), t.fill())
        },
        _g4: function(t, i, n, e) {
            e ? t[of](i, n) : t[af](i, n)
        },
        doDraw: function(t, i) {
            this[iB](t, i)
        },
        drawLine: function(t, i) {
            if (this._95 && this._95[nh]) {
                var n = this._95;
                t.save();
                var e = this[TD] instanceof zU;
                e && (t[vo](this[TD].x, this[TD].y), this[TD][Yo] && t[Yo](this[TD][Yo]));
                var s, r = [];
                t.beginPath();
                var h = n[nh];
                n.forEach(function(i, n) {
                    if (i.type != RY[$x])
                        for (var e = !n || n == h - 1, a = 0, o = i.points; a + 1 < o[nh];) {
                            var f = o[a],
                                u = o[a + 1],
                                c = {
                                    x: f,
                                    y: u,
                                    isControlPoint: this._6l(i, a)
                                };
                            e && (c[QN] = !0, c.isFrom = 0 == n), r[fh](c), this._g4(t, c.x, c.y, null == s), s = c, a += 2
                        }
                }, this), t[Fo] = 1 / i, t[cu] = [2 / i, 3 / i], t[ff] = nB, t[No](), r[ku](function(n, e) {
                    this.drawPoint(t, n, i, e)
                }, this), t[wo]()
            }
        },
        invalidate: function() {
            this[y_][rT]()
        },
        _38: function(t) {
            if (this.element != t && (this.element && this[Wy](), t && this[kN](t))) {
                var i = this._4u(t, this[yd]);
                i && (this.setCurrentElement(t, !0), t._editting = !0, this[JN] = !0, this._4v(i), this[CD]())
            }
        },
        _k0: function() {
            if (this.isShowing() && this[TD]) {
                var t = this._4u(this[TD], this[yd]);
                return t ? void this._4v(t) : void this[Wy](this[yd])
            }
        },
        _4u: function(t, i) {
            if (i[kN](t)) {
                var n = t.pathSegments || [];
                n instanceof xq && (n = n.toDatas());
                var e = i[gd](t);
                if (e instanceof LY[rN]) {
                    var s = e.getEndPointBounds(i[gd](t[Zu])),
                        r = e[md](i.getUI(t[Xu])),
                        h = s[$b],
                        a = r[$b],
                        o = e[Gc](UU.EDGE_FROM_OFFSET),
                        f = e.getStyle(UU[bd]);
                    o && (h.x += o.x || 0, h.y += o.y || 0), f && (a.x += f.x || 0, a.y += f.y || 0), n[hh](0, 0, new LY[Fx](RY[tN], [h.x, h.y])), n.push(new LY[Fx](RY[tN], [a.x, a.y]))
                }
                return n
            }
        },
        _i8: function(t, i) {
            t -= this.element.x, i -= this[TD].y;
            var n = {
                x: t,
                y: i
            };
            return this[TD][Yo] && Ws(n, -this[TD][Yo]), n
        },
        onclick: function(t, i) {
            if (i[zL] && t[tw] && this[TD]) {
                var n = this._gg(t, i);
                if (n && n[tB]) return void(n[wv] >= 0 && this[TD].removePathSegmentByIndex(n[wv]));
                if (this[TD] == t[jy]()) {
                    var e = i[yk](t),
                        s = i.getUI(this.element);
                    s[Za](e.x, e.y, this[F_] || 2)
                }
            }
        },
        isEditable: function(t) {
            return this[yd].isEditable(t) && (t instanceof zU || t instanceof $U && (!t.isLooped() || t[xd]()))
        },
        ondblclick: function(t, i) {
            if (!i.editable) return void(this.element && this[Wy](i));
            var n = t[jy]();
            return !n || n == this[TD] || n[KN] ? void this[Wy](i) : void this._38(n)
        },
        onstart: function(t, i) {
            if (this[eB] = !0, !i[zL]) return void(this[TD] && this[Wy](i));
            if (!t[VD]) {
                if (this.element && this._gg(t, i)) return void(t[VD] = !0);
                var n = t.getData();
                return n && i[sB](n) && n instanceof zU ? void(this[TD] && n != this.element && this[Wy]()) : void this._38(n)
            }
        },
        onrelease: function() {
            this._mousePressed = !1, this[TD] && (this._mxanEdit = !0)
        },
        _8s: null,
        _gg: function(t, i) {
            var n = i[yk](t);
            this[TD] instanceof zU && (n = this._i8(n.x, n.y));
            var e, s = i.scale,
                r = this[F_] / s,
                h = this._95,
                a = h[nh],
                o = this[TD] instanceof LY[dj];
            return h[ku](function(t, s) {
                for (var f = 0, u = t[Ao]; f + 1 < u.length;) {
                    var c = u[f],
                        d = u[f + 1],
                        _ = Tq(n.x, n.y, c, d);
                    if (r > _) {
                        if (e = {
                            oldPoints: u.slice(0),
                            segment: t,
                            index: s,
                            pointIndex: f
                        }, o && (e[wv] -= 1), o && !Nr(t) && (0 == s || s == h[nh] - 1)) {
                            e[QN] = !0;
                            var l = 0 == s;
                            e[rB] = l;
                            var v = l ? LY.Styles.EDGE_FROM_OFFSET : LY.Styles.EDGE_TO_OFFSET,
                                b = i.getStyle(this[TD], v) || {};
                            e[hB] = [b.x || 0, b.y || 0]
                        }
                        return this._6l(t, f) && (e[tB] = !0, s > 0 && (e[aB] = h instanceof xq ? h[tb](s - 1) : h[s - 1]), a > s + 1 && (e[oB] = h instanceof xq ? h[tb](s + 1) : h[s + 1], e.nextSegment.points && (e[fB] = e[oB][Ao].slice(0)))), !1
                    }
                    f += 2
                }
            }, this), e && e[QN] && !this.isEndPointEditable(this[TD], e.isFrom) ? void 0 : e
        },
        _6l: function(t, i) {
            return i == t[Ao][nh] - 2
        },
        startdrag: function(t, i) {
            if (this[TD] && this[JN] && (this._8s = this._gg(t, i), this._8s)) {
                this[MD](), t.responded = !0;
                var n = new Yr(i, Yr[uB], t, this[TD]);
                n[cB] = this._8s, i[SR](n)
            }
        },
        onkeyup: function(t, i) {
            this[eB] && 16 != !t[iw] && this.element && this._8s && this._8s[dB] && this[_B](this._8s[dB].x, this._8s[dB].y, i, t, !1)
        },
        onkeydown: function(t, i) {
            T(this, Dr, lB, arguments), this[eB] && this[TD] && this._8s && t.shiftKey && this._8s[dB] && this[_B](this._8s.delta.x, this._8s[dB].y, i, t, !0)
        },
        _mxu: function(t, i, n, e, s) {
            var r = this._8s,
                h = this[TD],
                a = r[hB],
                o = r.segment;
            if (r[QN]) {
                var f = r[rB] ? LY[uj].EDGE_FROM_OFFSET : LY[uj][bd],
                    u = {
                        x: a[0] + t,
                        y: a[1] + i
                    };
                h.setStyle(f, u);
                var c = new Yr(n, Yr[vB], e, h);
                return c[cB] = r, void n[SR](c)
            }
            if (s && r.isControlPoint) {
                var d = {
                        x: a[a.length - 2] + t,
                        y: a[a[nh] - 1] + i
                    },
                    _ = r.prevSegment,
                    l = r[oB],
                    v = 20 / n.scale,
                    b = Number[jl],
                    y = b,
                    g = b,
                    m = b;
                _ && (_ = _[Go], b = Math.abs(d.x - _.x), g = Math.abs(d.y - _.y)), l && (l = l.lastPoint, y = Math.abs(d.x - l.x), m = Math.abs(d.y - l.y)), v > b && y > b ? t += _.x - d.x : v > y && b > y && (t += l.x - d.x), v > g && m > g ? i += _.y - d.y : v > m && g > m && (i += l.y - d.y)
            }
            if (r[tB] && Nr(o)) {
                for (var x = o[Ao][nh] - 4; x < o[Ao].length;) {
                    var p = a[x] + t,
                        E = a[x + 1] + i;
                    o.points[x] = p, o[Ao][x + 1] = E, x += 2
                }
                if (r[oB] && Nr(r.nextSegment)) {
                    var w = r[fB],
                        p = w[0] + t,
                        E = w[1] + i;
                    r[oB][Ao][0] = p, r.nextSegment.points[1] = E
                }
            } else {
                var x = r[bB],
                    p = a[x] + t,
                    E = a[x + 1] + i;
                o[Ao][x] = p, o[Ao][x + 1] = E
            }
            h.firePathChange();
            var c = new Yr(n, Yr.POINT_MOVING, e, h);
            c[cB] = r, n.onInteractionEvent(c)
        },
        ondrag: function(t, i) {
            if (this.element && this._8s) {
                var n = this._8s,
                    e = this[TD],
                    s = t[Qy],
                    r = t.totalDeltaY,
                    h = i[bo];
                if (s /= h, r /= h, e.rotate) {
                    var a = {
                        x: s,
                        y: r
                    };
                    Ws(a, -e[Yo]), s = a.x, r = a.y
                }
                n.delta = {
                    x: s,
                    y: r
                }, this[_B](s, r, i, t, t[QE])
            }
        },
        enddrag: function(t, i) {
            if (this[TD] && this._8s) {
                this[CD](), this._k0();
                var n = new Yr(i, Yr[yB], t, this.element);
                n[cB] = this._8s, i.onInteractionEvent(n)
            }
        },
        onmousemove: function(t, i) {
            this[TD] && (i[Tj] = t[tw] && (this._gg(t, i) || this[TD] == t.getData()) ? "crosshair" : null)
        }
    }, E(Dr, xr), mq.SELECTION_RECTANGLE_STROKE = 1, mq.SELECTION_RECTANGLE_STROKE_COLOR = X(3724541951), mq[gB] = X(1430753245), RY[mB] = xB, RY[pB] = EB, mq.RECTANGLE_SELECTION_MODE = RY[mB];
    var pW = function(t) {
        this[yd] = t, this.topCanvas = t.topCanvas
    };
    pW.prototype = {
        onstart: function(t, i) {
            this._kx && this[Wy](i)
        },
        startdrag: function(t, i) {
            t[VD] || (t[VD] = !0, this._kx = i.toLogical(t), i[Tj] = fg, this._$zId = this[y_][CD](this._$z, this).id)
        },
        ondrag: function(t, i) {
            if (this._kx) {
                G(t), this[wB] = i[yk](t), this[rT]();
                var n = new Yr(i, Yr.SELECT_START, t, i.selectionModel);
                i[SR](n)
            }
        },
        enddrag: function(t, i) {
            if (this._kx) {
                this[TB] && (clearTimeout(this[TB]), this[TB] = null), this._ey(!0), this[Wy](i);
                var n = new Yr(i, Yr[kB], t, i[d_]);
                i[SR](n)
            }
        },
        onpinch: function(t, i) {
            this._kx && this[Ly](t, i)
        },
        _$z: function(t, i) {
            t[ff] = mq[OB], t[sf] = mq.SELECTION_RECTANGLE_FILL_COLOR, t[Fo] = mq.SELECTION_RECTANGLE_STROKE / i;
            var n = this._kx.x,
                e = this._kx.y;
            t.rect(n, e, this[wB].x - n, this[wB].y - e), t.fill(), t[No]()
        },
        invalidate: function() {
            return this.invalidateFlag ? void this.topCanvas[rT]() : (this.invalidateFlag = !0, void(this[TB] = setTimeout(this._ey[Th](this), 100)))
        },
        _ey: function(t) {
            if (this.invalidateFlag = !1, this._eyTimer = null, !this._kx || aq && !t) return void this[y_][rT]();
            var i = Math.min(this._kx.x, this[wB].x),
                n = Math.min(this._kx.y, this[wB].y),
                e = Math.abs(this._kx.x - this[wB].x),
                s = Math.abs(this._kx.y - this._end.y);
            if (!e || !s) return void this[yd][d_][ru]();
            var r = [],
                h = this[yd][bo],
                a = this.graph[SB];
            if (this[yd].forEachVisibleUI(function(t) {
                t._i0 && this.graph.isSelectable(t.$data) && this.inRectangle(i, n, e, s, t, h, a) && r[fh](t[$o])
            }.bind(this)), this[yd][d_].set(r), this[y_][rT](), !t) {
                var o = new Yr(this[yd], Yr[MB], null, this[yd].selectionModel);
                this.graph[SR](o)
            }
        },
        inRectangle: function(t, i, n, e, s, r, h) {
            var a = s[Po]();
            return ai(t, i, n, e, a.x, a.y, a.width, a[Ja]) ? !0 : (h = h || mq[IB], h == RY.RECTANGLE_SELECTION_MODE_CONTAIN ? !1 : $n(t, i, n, e, s, r))
        },
        destroy: function(t) {
            this._kx = null, t[Tj] = null, this._$zId && (this[y_][MD](this._$zId), delete this._$zId, this.topCanvas.invalidate())
        }
    };
    var EW = M({
            "super": pW,
            onstart: null,
            startdrag: null,
            ondrag: null,
            enddrag: null,
            accept: function(t, i, n) {
                return n[PB] !== !1
            },
            oncontextmenu: function(t, i) {
                i[CB] || G(t)
            },
            onstart2: function() {
                pW[_h][Ey][dh](this, arguments)
            },
            startdrag2: function(t, i) {
                t[VD] || (i[CB] && i.popupmenu[AB] instanceof Function && i[CB][AB](), pW[_h][My][dh](this, arguments))
            },
            ondrag2: function() {
                pW.prototype[Py][dh](this, arguments)
            },
            enddrag2: function() {
                pW[_h][Ly][dh](this, arguments)
            }
        }),
        vW = Math.PI / 4;
    Br.prototype = {
        _dc: !1,
        _dg: !1,
        onDataPropertyChange: function() {
            this.graph.callLater(function() {
                this._9b()
            }, this)
        },
        ondblclick: function(t, i) {
            this[TD] && this[Wy](i)
        },
        destroy: function(t) {
            t.cursor = null, delete this._mxt, delete this[NA], delete this._8s, delete this._mxanEdit, delete this._k6, delete this._rotatePoint, delete this._dg, delete this._dc, delete this[LB], T(this, Br, Wy, arguments)
        },
        _mxt: null,
        _k6: null,
        _88: function(t) {
            this[DA] = t;
            var i = this[DA].x,
                n = this[DA].y,
                e = this._mxt[Oa],
                s = this[DA].height;
            if (this[TD] instanceof qU && this[TD][Ek], this._dg) {
                var r = [];
                r[fh]({
                    x: i,
                    y: n,
                    p: Iq[Ul],
                    cursor: RB,
                    rotate: 5 * vW
                }), r.push({
                    x: i + e / 2,
                    y: n,
                    p: Iq[Vl],
                    cursor: jB,
                    rotate: 6 * vW
                }), r.push({
                    x: i + e,
                    y: n,
                    p: Iq[Ql],
                    cursor: G_,
                    rotate: 7 * vW
                }), r[fh]({
                    x: i,
                    y: n + s / 2,
                    p: Iq[Wl],
                    cursor: DB,
                    rotate: 4 * vW
                }), r[fh]({
                    x: i,
                    y: n + s,
                    p: Iq[Jl],
                    cursor: G_,
                    rotate: 3 * vW
                }), r[fh]({
                    x: i + e,
                    y: n + s / 2,
                    p: Iq[Xl],
                    cursor: DB,
                    rotate: 0
                }), r[fh]({
                    x: i + e / 2,
                    y: n + s,
                    p: Iq.CENTER_BOTTOM,
                    cursor: jB,
                    rotate: 2 * vW
                }), r[fh]({
                    x: i + e,
                    y: n + s,
                    p: Iq[Kl],
                    cursor: RB,
                    rotate: vW
                }), this._k6 = r
            }
            this[NB] = this._dc ? {
                x: i + e / 2,
                y: n,
                cursor: TY
            } : null, this.invalidate()
        },
        _dk: function(t, i, n, e) {
            t[tf]();
            var s = (this[F_] - 1) / e;
            t[nf](i - s, n - s, 2 * s, 2 * s), t[Fo] = 1 / e, t[cu] = [], t.strokeStyle = n_, t[sf] = "rgba(255, 255, 255, 0.8)", t[No](), t.fill()
        },
        _5q: function(t, i, n, e, s, r) {
            s = s || this[F_], r = r || BB, t.beginPath(), s /= e, t.arc(i, n, s, 0, 2 * Math.PI, !1), t[Fo] = 1 / e, t[cu] = [], t[ff] = n_, t.fillStyle = r, t[No](), t[Bo]()
        },
        _i8: function(t, i) {
            t -= this.element.x, i -= this.element.y;
            var n = {
                x: t,
                y: i
            };
            return this.element[Yo] && Ws(n, -this[TD][Yo]), n
        },
        doDraw: function(t, i) {
            if (this[DA]) {
                if (t[lo](), t.translate(this[TD].x, this[TD].y), this[TD][Yo] && t[Yo](this.element.rotate), this[NB]) {
                    this._5q(t, 0, 0, i, 3, $B);
                    var n = this[NB].x,
                        e = this._rotatePoint.y - this[z_] / i;
                    t[tf](), t[of](n, this[NB].y), t[af](n, e), t[Fo] = 1 / i, t[ff] = nB, t[No](), this._5q(t, n, e, i)
                }
                if (this._k6) {
                    var s = this._mxt.x,
                        r = this[DA].y,
                        h = this._mxt[Oa],
                        a = this._mxt.height;
                    t[tf](), t[nf](s, r, h, a), t[Fo] = 1 / i, t[cu] = [2 / i, 3 / i], t[ff] = nB, t[No](), l(this._k6, function(n) {
                        this._dk(t, n.x, n.y, i)
                    }, this)
                }
                t.restore()
            }
        },
        _9b: function() {
            if (this[FB]() && this.element) {
                var t = this[yd].getUI(this[TD]);
                this[NA] = t.body;
                var i = $r(this[NA], this[NA]._j9),
                    n = $r(this._myody, this[NA]._7u);
                this[LB] = new Mq(i.y - n.y, i.x - n.x, n[ra] - i[ra], n[ha] - i[ha]), this._88(n)
            }
        },
        _myj: function(t, i) {
            return i[sB](t)
        },
        _myi: function(t, i) {
            return !(t instanceof qU && t[Ek] || !i[zB](t))
        },
        _mxr: function(t, i) {
            return t instanceof FU && i[kN](t)
        },
        onstart: function(t, i) {
            if (!i.editable) return void(this[TD] && this[Wy](i));
            if (!t[VD]) {
                var n = i[gd](t),
                    e = t[jy]();
                if (e != this[TD]) {
                    if (this.element) {
                        if (this._gg(t, i)) return void(t[VD] = !0);
                        this[Wy](i)
                    }
                    if (e && !e._editting && this[GB](e, i)) {
                        var s = this._myj(e, i, n),
                            r = this[qB](e, i, n);
                        (s || r) && (this[YB](e, !0), this[CD](), this._dg = s, this._dc = r, this._9b())
                    }
                }
            }
        },
        onrelease: function(t, i) {
            this[TD] && (this[JN] = !0, this[CD](), i.callLater(function() {
                this._9b()
            }, this))
        },
        _8s: null,
        _gg: function(t, i) {
            var n = i.toLogical(t);
            n = this._i8(n.x, n.y);
            var e = i[bo],
                s = this.handlerSize / e;
            if (this._rotatePoint) {
                var r = this[NB].x,
                    h = this._rotatePoint.y - this[z_] / e;
                if (Tq(n.x, n.y, r, h) < s) return this[NB]
            }
            if (this._k6 && this._k6[nh]) {
                var a;
                return l(this._k6, function(t) {
                    return Tq(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
                }, this), a
            }
        },
        onmousemove: function(t, i) {
            if (this[TD]) {
                var n = this._gg(t, i);
                if (!n) return void(i[Tj] = null);
                if (n != this[NB] && this.element[Yo]) {
                    var e = n.rotate + this.element.rotate;
                    return void(i.cursor = Fr(e))
                }
                i[Tj] = n[Tj]
            }
        },
        startdrag: function(t, i) {
            if (this[TD] && (this[MD](), this[JN] && (this._8s = this._gg(t, i), this._8s))) {
                if (t[VD] = !0, this._8s == this[NB]) return this._8s[ND] = i[yk](t), void(this._8s[Yo] = this[TD][Yo] || 0);
                var n = new Yr(i, Yr[HB], t, this[TD]);
                n[cB] = this._8s, i[SR](n)
            }
        },
        _6d: function(t, i, n, e, s, r) {
            var h = this[DA],
                a = h.x,
                o = h.y,
                f = h[Oa],
                u = h[Ja];
            if (r) {
                var c = e != f;
                c ? s = e * u / f : e = s * f / u
            }
            var d = t[Ed][wO],
                _ = e / f,
                l = s / u,
                v = -a * _ + i,
                b = -o * l + n;
            d[ku](function(t) {
                if (t[qo] != RY[$x]) {
                    var e = t[Ao];
                    if (e && e.length)
                        for (var s = 0, r = e.length; r > s; s += 2) {
                            var h = e[s],
                                f = e[s + 1];
                            e[s] = (h - a) * _ + i - v, e[s + 1] = (f - o) * l + n - b
                        }
                }
            }), this._mxt.set(i - v, n - b, e, s), t.setLocation(t.x + v, t.y + b), t.firePathChange()
        },
        _9g: function(t, i, n, e, s) {
            this[DA].set(i, n, e, s), t[DO] = {
                x: i,
                y: n,
                width: e,
                height: s
            }
        },
        _4d: function(t, i, n, e, s) {
            if (this[TD] instanceof qU) return this._9g(this[TD], t, i, n, e, s);
            if (this[TD] instanceof zU) return this._6d(this.element, t, i, n, e, s);
            var r = this[NA] instanceof rW;
            if (!r && s) {
                var h = this._mxt,
                    a = this._myody.originalBounds,
                    o = n != h[Oa];
                o ? e = n * a[Ja] / a.width : n = e * a.width / a[Ja]
            }
            var f = this.element[gO],
                u = new Oq(n - this[LB][La] - this[LB][ha], e - this._insets.top - this[LB][ra]);
            if (u.width < 1 && (n = this[LB][La] + this[LB][ha] + 1, u[Oa] = 1), u[Ja] < 1 && (e = this._insets.top + this[LB].bottom + 1, u[Ja] = 1), r ? this[TD][Gk](UU.LABEL_SIZE, u) : this[TD][oT] = u, f) {
                var c = ci(f, n, e),
                    d = c.x + t - (this[NA][XO] || 0),
                    _ = c.y + i - (this[NA][KO] || 0);
                if (this[DA].set(t - d, i - _, n, e), this[TD][Yo]) {
                    var c = Ws({
                        x: d,
                        y: _
                    }, this.element[Yo]);
                    d = c.x, _ = c.y
                }
                this[TD].x += d, this.element.y += _
            } else {
                var d = this[DA].x * n / this[DA][Oa] - t,
                    _ = this[DA].y * e / this[DA].height - i;
                if (this._mxt.set(t + d, i + _, n, e), this[TD][Yo]) {
                    var c = Ws({
                        x: d,
                        y: _
                    }, this.element[Yo]);
                    d = c.x, _ = c.y
                }
                this[TD].x -= d, this[TD].y -= _
            }
        },
        ondrag: function(t, i) {
            if (this[TD] && this._8s)
                if (this._8s != this._rotatePoint) {
                    var n = t.dx,
                        e = t.dy,
                        s = i[bo];
                    if (n /= s, e /= s, this[TD][Yo]) {
                        var r = {
                            x: n,
                            y: e
                        };
                        Ws(r, -this.element[Yo]), n = r.x, e = r.y
                    }
                    var h = this._8s.p,
                        a = this[DA],
                        o = a.x,
                        f = a.y,
                        u = a.width,
                        c = a.height;
                    h[ua] == Pq ? n >= u ? (o += u, u = n - u || 1) : (o += n, u -= n) : h.horizontalPosition == Aq && (-n >= u ? (u = -n - u || 1, o -= u) : u += n), h[$l] == Lq ? e >= c ? (f += c, c = e - c || 1) : (f += e, c -= e) : h[$l] == jq && (-e >= c ? (c = -e - c || 1, f -= c) : c += e), this._4d(o, f, u, c, t[QE]);
                    var d = new Yr(i, Yr[UB], t, this[TD]);
                    d[cB] = this._8s, i.onInteractionEvent(d)
                } else {
                    var r = i.toLogical(t),
                        _ = yn(r.x, r.y, this[TD].x, this[TD].y, this._8s[ND].x, this._8s[ND].y, !0);
                    _ += this._8s.rotate || 0, t[QE] && (_ = Math[Ro](_ / Math.PI * 4) * Math.PI / 4), this[TD][Yo] = _ % (2 * Math.PI);
                    var d = new Yr(i, Yr.ROTATING, t, this[TD])
                }
        },
        enddrag: function(t, i) {
            if (this[TD] && this._8s && this._8s != this._rotatePoint) {
                var n = new Yr(i, Yr[WB], t, this[TD]);
                n[cB] = this._8s, i.onInteractionEvent(n)
            }
        }
    }, E(Br, xr), LY.ResizeInteraction = Br;
    var wW = function(t) {
        this[yd] = t
    };
    wW[_h] = {
        onstart2: function(t, i) {
            this[Ey](t, i)
        },
        onclick: function(t, i) {
            if (!Ti(t)) {
                var n = t[jy]();
                if (n && i[v_](n) && (!i.isSelected(n) || 1 != i.selectionModel[nh])) {
                    i.setSelection(n);
                    var e = new Yr(i, Yr.SELECT, t, i[d_]);
                    i[SR](e)
                }
            }
        },
        onstart: function(t, i) {
            if (!t.responded) {
                var n = t.getData();
                if (n && !i.isSelectable(n) && (n = null), n && Ti(t)) {
                    i[VB](n);
                    var e = new Yr(i, Yr.SELECT, t, i[d_]);
                    return void i.onInteractionEvent(e)
                }
                if (!n || !i.selectionModel[FN](n)) {
                    n ? (i.setSelection(n), i[XB](n)) : i.setSelection(null);
                    var e = new Yr(i, Yr.SELECT, t, i[d_]);
                    i.onInteractionEvent(e)
                }
            }
        },
        onkeydown: function(t, i) {
            return 27 == t[iw] ? void i[ZR]() : void(Ti(t) && 65 == t[iw] && (i[KB](), F(t)))
        }
    }, mq[JB] = 3e3, mq[ZB] = 1e3, zr[QB] = t$, zr[i$] = 0, zr[n$] = 15, mi(Zh + zr.CLASS_NAME, {
        "user-select": Yd,
        "background-color": e$,
        overflow: qd,
        "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
        color: BA,
        "pointer-events": Yd,
        border: s$,
        padding: r$,
        display: $j,
        position: Xw
    }), zr[h$] = function() {
        var t = zr[a$];
        return t || (t = zr[a$] = new zr), t
    }, zr[o$] = function(t, i, n) {
        zr[h$]().show(t, i, n)
    }, zr[AB] = function() {
        zr[h$]().hide()
    }, zr.prototype = {
        getTooltipElement: function() {
            var t = this._li;
            return t || (t = i[ro](jd), t[Oh] = zr.CLASS_NAME, this._li = t, i[LA][Wu](t)), t
        },
        update: function(t, i) {
            if (this[FB]()) {
                var n = j_ == i;
                t && !n && (t = t[da](/\n/g, f$));
                var e = this[u$]();
                n ? e.textContent = t || "" : e[c$] = t || "", Gr(e, this._info.x + zr[i$], this._info.y + zr[n$])
            }
        },
        setTooltip: function(t, i) {
            if (!t || !t.content) return this[d$] = null, this._li && (this._li[ya][Dw] = Yd), void(this._9m = Date.now());
            this._9m = null, this._info = t;
            var n = this.getTooltipElement();
            n.style[Dw] = "", this[_$](this._info[l$], this._info[qo]), isNaN(i) && (i = mq[JB]), i && this[v$](this[b$][Th](this, !1), i)
        },
        _9m: null,
        _kh: null,
        stopTimer: function() {
            this._kh && (clearTimeout(this._kh), this._kh = null)
        },
        startTimer: function(t, i) {
            this[y$](), this._kh = setTimeout(function(t) {
                this._kh = null, t()
            }.bind(this, t), i)
        },
        show: function(t, i, n) {
            return this[FB]() || this._9m && Date.now() - this._9m < 1e3 ? void this[b$](t, n) : (isNaN(i) && (i = mq[ZB]), void(i ? this[v$](this[b$][Th](this, t, n), i) : this.setTooltip(t, n)))
        },
        isShowing: function() {
            return this._li && Yd !== this._li[ya].display
        },
        hide: function() {
            this[y$](), this[FB]() && this[b$](!1)
        }
    };
    var TW = function(t) {
        this.graph = t
    };
    TW.prototype = {
        onstart: function(t, i) {
            this[Wy](i)
        },
        _il: null,
        onmousemove: function(t, i) {
            if (i[g$]) {
                var n = t.getData(),
                    e = n ? i.getTooltip(n) : null;
                return e ? void zr[o$]({
                    target: n,
                    content: e,
                    type: n[m$],
                    x: t[Pa],
                    y: t.pageY
                }, i.tooltipDelay, i[x$]) : void zr.hide()
            }
        },
        destroy: function() {
            zr.hide()
        }
    };
    var kW = function(t) {
        this[yd] = t
    };
    kW[_h] = {
        destroy: function() {
            this[p$] && (this[p$] = null)
        },
        onmousewheel: function(t, i) {
            if (i[E$] !== !1 && t[dB]) {
                if (LY.stopEvent(t), i.delayedRendering) {
                    var n = this.delayAction;
                    n || (n = this[p$] = new qr(function() {
                        i[Cj](!1)
                    })), i.pauseRendering(!0), n[H_](100)
                }
                i[w$](t, t.delta, !1)
            }
        }
    };
    var OW = function(t) {
        this[yd] = t
    };
    OW[_h] = {
        onclick: function(t, i) {
            i[w$](t, !Ti(t))
        }
    };
    var SW = function(t) {
        this[yd] = t
    };
    SW[_h] = {
        onclick: function(t, i) {
            i[w$](t, Ti(t))
        }
    }, E(Yr, Bq), Yr.ELEMENT_MOVE_START = T$, Yr[qN] = k$, Yr[WN] = O$, Yr.ELEMENT_CREATED = S$, Yr[aj] = M$, Yr[uB] = I$, Yr[vB] = P$, Yr[yB] = C$, Yr[HB] = A$, Yr[UB] = L$, Yr.RESIZE_END = R$, Yr[j$] = D$, Yr[N$] = B$, Yr.PAN_START = $$, Yr[F$] = z$, Yr[IO] = G$, Yr.EDGE_BUNDLE = q$, Yr.SELECT = D_, Yr[Y$] = H$, Yr[MB] = U$, Yr[kB] = W$, Yr[V$] = X$, Hr[_h] = {
        _9n: function(t) {
            if (this[K$]) switch (t[nv]) {
                case Vq.KIND_REMOVE:
                    this[K$][J$](t.data);
                    break;
                case Vq.KIND_CLEAR:
                    this[K$][Z$](t.data)
            }
        },
        destroy: function() {
            delete this._kd, delete this._4a, this[K$] && (this._interactionSupport._id(), delete this[K$])
        },
        _kd: null,
        _4a: null,
        defaultMode: null,
        _h8: function(t, i, n) {
            this._4a[t] = new pr(i, n), t == this[Q$] && this[K$][tF](i)
        },
        addCustomInteraction: function(t) {
            this._interactionSupport._miCustomInteractionListener(t)
        },
        removeCustomInteraction: function(t) {
            this[K$][iF](t)
        },
        _mo: function(t) {
            var i = this._4a[t];
            return i ? i : MW[t]
        }
    }, J(Hr[_h], {
        defaultCursor: {
            get: function() {
                return this[nF] ? this.currentInteractionMode[eF] : void 0
            }
        },
        currentMode: {
            get: function() {
                return this[kj]
            },
            set: function(t) {
                this._mxurrentMode != t && (this._mxurrentMode, this[K$] || (this[K$] = new mY(this._kd)), this[kj] = t, this[nF] = this._mo(this[kj]), this._kd[Tj] = this[eF], this[K$][tF](this[nF] ? this[nF][sF](this._kd) : []))
            }
        }
    });
    var MW = {};
    mq[rF] = function(t, i, n) {
        var e = new pr(i, n);
        MW[t] = e
    }, RY[hF] = aF, RY[K_] = g_, RY.INTERACTION_MODE_SELECTION = L_, RY[oF] = fF, RY[uF] = cF, RY.INTERACTION_MODE_CREATE_SIMPLE_EDGE = dF, RY[_F] = lF, RY[vF] = bF, RY[yF] = gF, mq.registerInteractions(RY[hF], [wW, xW, kW, gW, bW, TW, EW]), mq.registerInteractions(RY[mF], [yW, Ir, wW, xW, kW, gW, TW]), mq[rF](RY[_F], [yW, Dr, wW, Tr, xW, kW, gW, TW]), mq[rF](RY[vF], [yW, Sr, wW, xW, kW, gW, TW]), mq[rF](RY[yF], [Mr, wW, xW, kW, gW, TW]), mq.registerInteractions(RY.INTERACTION_MODE_DEFAULT, [yW, Br, Dr, wW, mW, xW, kW, gW, bW, TW, EW]), mq[rF](RY[xF], [yW, Br, Dr, wW, mW, pW, xW, kW, gW, bW, TW]), mq[rF](RY.INTERACTION_MODE_ZOOMIN, [kW, gW, OW], xY), mq[rF](RY[uF], [kW, gW, SW], pY), LY[pF] = xW, LY[EF] = wW, LY[wF] = mW, LY[TF] = kW, LY[kF] = bW, LY[OF] = gW, LY[SF] = TW, LY[MF] = pW, LY[IF] = EW, LY[PF] = Dr;
    var IW = function(t) {
        this[yd] = t
    };
    LY.Layouter = IW, IW[_h] = {
        getNodeBounds: function(t) {
            return this[yd][CF](t)
        },
        isLayoutable: function(t) {
            return this.graph[l_](t) && t[AF] !== !1
        },
        getLayoutResult: function() {},
        updateLocations: function(t, i, n, e, s) {
            if (i === !0) {
                if (this[LF] || (this[LF] = new fV), n && (this.animate[yD] = n), e && (this.animate[mD] = e), this.animate[RF] = t, s) {
                    var r = s,
                        h = this;
                    s = function() {
                        r.call(h, t)
                    }
                }
                return void this.animate[ND](s)
            }
            for (var a in t) {
                var o = t[a],
                    f = o.node;
                f[QR](o.x, o.y)
            }
            s && s[ih](this, t)
        },
        _fb: function(t) {
            var i, n, e, s = null;
            t && (i = t[jF], s = t[$c], n = t.duration, e = t.animationType);
            var r = this.getLayoutResult(t);
            return r ? (this[DF](r, i, n, e, s), r) : !1
        },
        doLayout: function(t, i) {
            return this[yd] && i !== !0 ? void this.graph.callLater(function() {
                this._fb(t)
            }, this) : this._fb(t)
        }
    };
    var PW = 110,
        CW = 120,
        AW = 130,
        LW = 210,
        RW = 220,
        jW = 230,
        DW = 111,
        NW = 112,
        BW = 121,
        $W = 122,
        FW = 211,
        zW = 212,
        GW = 221,
        qW = 222;
    RY[NF] = PW, RY[BF] = CW, RY.DIRECTION_CENTER = AW, RY.DIRECTION_BOTTOM = LW, RY.DIRECTION_TOP = RW, RY[$F] = jW, RY[FF] = DW, RY.DIRECTION_RIGHT_BOTTOM = NW, RY[zF] = BW, RY.DIRECTION_LEFT_BOTTOM = $W, RY[GF] = FW, RY[qF] = zW, RY.DIRECTION_TOP_LEFT = GW, RY[YF] = qW;
    var YW = HF,
        HW = UF,
        UW = WF,
        WW = VF;
    RY[XF] = YW, RY[KF] = UW, RY.LAYOUT_TYPE_EVEN_VERTICAL = WW, RY[JF] = HW, LY.isHorizontalDirection = Ur;
    var VW = function(t) {
        this.graph = t
    };
    VW[_h] = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: LW,
        layoutType: YW,
        defaultSize: {
            width: 50,
            height: 60
        },
        getNodeSize: function(t) {
            if (this.graph._8i[Tb]) {
                var i = this[yd][gd](t);
                if (i) return i._fj
            }
            return t[yx] && t[yx][Co] ? {
                width: t[yx][Co][Oa],
                height: t[yx][Co].height
            } : this.defaultSize
        },
        _myx: function(t, i) {
            var n = t.id;
            if (!(n in this._9x) && this.isLayoutable(t)) {
                var e, s = this[ZF](t);
                e = s instanceof Sq ? [-s.x, -s.y] : [s[Oa] / 2, s[Ja] / 2];
                var r = (t[QF], i ? this._9x[i.id] : this[tz]);
                this._9x[n] = new XW(this[iz](t), this[nz](t), this[ez](t), t[QF], r, t, s.width, s[Ja], e)
            }
        },
        getHGap: function(t) {
            return t && D(t[sz]) ? t[sz] : this[sz]
        },
        getVGap: function(t) {
            return t && D(t[rz]) ? t.vGap : this.vGap
        },
        getLayoutType: function(t) {
            return t && t[hz] ? t[hz] : this[hz]
        },
        _9x: null,
        _my4: null,
        _k9: function() {
            this._9x = null, this._my4 = null
        },
        getLayoutResult: function(t) {
            var i, n, e, s, r = this[yd];
            t instanceof Object && (i = t.x, n = t.y, r = t[az] || this.graph, e = t.bounds, s = t[oz]), this._9x = {}, this._my4 = new XW, this[tz]._mm(this[sz], this[rz], this[QF], this[hz]);
            var h = {},
                a = dV(r, this[fz], this, !1, s);
            return a && (this[tz]._fb(i || 0, n || 0, h), e && e.set(this[tz].x, this[tz].y, this[tz][Oa], this[tz].height)), this._k9(), h
        },
        doLayout: function(t, i) {
            if (D(t)) {
                var n = t,
                    e = 0;
                D(i) && (e = i), t = {
                    x: n,
                    y: e
                }, i = !0
            }
            return T(this, VW, uz, [t, i])
        }
    }, E(VW, IW);
    var XW = function(t, i, n, e, s, r, h, a, o) {
        this._lx = t || 0, this._ly = i || 0, this.layoutType = n, this[QF] = e, this[cz] = s, s && s._gd(this), this[dz] = r, this._e0 = h, this[_z] = a, this[lz] = o
    };
    XW.prototype = {
        _mm: function(t, i, n, e) {
            this._lx = t, this._ly = i, this[QF] = n, this[hz] = e
        },
        _81: function() {
            this._f5 = []
        },
        _lx: 0,
        _ly: 0,
        _f5: null,
        _e0: 0,
        _mys: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _gd: function(t) {
            this._f5 || (this._f5 = []), this._f5[fh](t)
        },
        _d0: function(t, i, n, e) {
            var s = new Sq;
            return n(this._f5, function(n) {
                n._3q(t, i), s.add(n), e ? t += n[Oa] + this._lx : i += n[Ja] + this._ly
            }, this), s
        },
        _7y: function(t, i, n, e, s) {
            var r, h = e ? this._lx : this._ly,
                a = e ? this._ly : this._lx,
                o = e ? "width" : Ja,
                f = e ? "height" : Oa,
                u = e ? "_e0" : _z,
                c = e ? "_mys" : vz,
                d = e ? "hostDX" : bz,
                _ = e ? "hostDY" : yz,
                v = new Sq,
                b = 0,
                y = 0,
                g = [],
                m = 0,
                x = 0;
            n(this._f5, function(n) {
                var s = x >= y;
                n[gz] = s ? e ? CW : RW : e ? PW : LW, n._3q(t, i), s ? (g[fh](n), b = Math.max(b, n[o]), y += n[f] + a) : (r || (r = []), r[fh](n), m = Math.max(m, n[o]), x += n[f] + a)
            }, this), y -= a, x -= a;
            var p = Math.max(y, x),
                E = h,
                w = 0;
            this.node && (s && (E += this[u] + h, p > this[c] ? this[_] = (p - this[c]) / 2 : w = (this[c] - p) / 2), this[d] = b + E / 2 - this[u] / 2);
            var T = 0,
                k = w;
            return l(g, function(t) {
                e ? t[Fk](b - t[o], k) : t[Fk](k, b - t[o]), k += a + t[f], v.add(t)
            }, this), r ? (k = w, T = b + E, l(r, function(t) {
                e ? t[Fk](T, k) : t.offset(k, T), k += a + t[f], v.add(t)
            }, this), v) : v
        },
        offset: function(t, i) {
            this.x += t, this.y += i, this[mz] += t, this[xz] += i, this._72(t, i)
        },
        _mya: function(t, i) {
            return 2 * this.cx - t - i - t
        },
        _my9: function(t, i) {
            return 2 * this.cy - t - i - t
        },
        _m3: function(t) {
            if (this._f5 && 0 != this._f5[nh]) {
                if (t) return this.node && (this[mz] += this[pz](this.nodeX, this._e0)), void l(this._f5, function(t) {
                    t[Fk](this._mya(t.x, t[Oa]), 0)
                }, this);
                this.node && (this.nodeY += this[Ez](this[xz], this[_z])), l(this._f5, function(t) {
                    t.offset(0, this[Ez](t.y, t[Ja]))
                }, this)
            }
        },
        _72: function(t, i) {
            this._f5 && l(this._f5, function(n) {
                n.offset(t, i)
            }, this)
        },
        _3q: function(t, i) {
            return this.x = t || 0, this.y = i || 0, this._f5 && 0 != this._f5[nh] ? void this._1b(this.x, this.y, this[hz]) : void(this[dz] && (this.width = this._e0, this.height = this[_z], this[mz] = this.x, this[xz] = this.y))
        },
        _76: function(t) {
            if (this[dz]) {
                var i = this[lz],
                    n = i[0],
                    e = i[1];
                t[this[dz].id] = {
                    node: this[dz],
                    x: this.nodeX + n,
                    y: this[xz] + e,
                    left: this[mz],
                    top: this[xz],
                    width: this._e0,
                    height: this[_z]
                }
            }
            this._f5 && l(this._f5, function(i) {
                i._76(t)
            }, this)
        },
        _fb: function(t, i, n) {
            this._3q(t, i), this._76(n)
        },
        _1b: function(t, i, e) {
            var s, r = t,
                h = i;
            !this.parentChildrenDirection && this[cz] && (this[QF] = this._inheritedParentChildrenDirection || this[cz].parentChildrenDirection);
            var a = this.parentChildrenDirection,
                o = Ur(a);
            if (this[dz]) {
                s = a == AW || a == jW;
                var f = Wr(a);
                s || (o ? t += this._e0 + this._lx : i += this[_z] + this._ly)
            }
            var u, c = this[dz] && this[dz][wz] ? b : l;
            if (e == HW) u = this._7y(t, i, c, !o, s);
            else {
                var d;
                d = e == YW ? !o : e == UW, u = this._d0(t, i, c, d, s)
            }
            var _ = 0,
                v = 0;
            if (u && !u[ou]() && (_ = u[Oa], v = u.height, this.add(u)), this[dz]) {
                if (this[mz] = r, this[xz] = h, this[yz] !== n || this[bz] !== n) this[mz] += this[yz] || 0, this[xz] += this[bz] || 0;
                else {
                    var y;
                    y = a == LW || a == RW || a == CW || a == PW ? 1 : a == zW || a == qW || a == $W || a == NW ? 0 : 2, o ? 1 == y ? this[xz] += v / 2 - this[_z] / 2 : 2 == y && (this.nodeY += v - this[_z]) : 1 == y ? this[mz] += _ / 2 - this._e0 / 2 : 2 == y && (this[mz] += _ - this._e0)
                }
                this.addRect(this[mz], this[xz], this._e0, this[_z]), f && this._m3(o)
            }
        },
        node: null,
        uiBounds: null
    }, E(XW, Sq), Xr[_h] = {
        layoutDatas: null,
        isMovable: function(t) {
            return !this.currentMovingNodes[t.id]
        },
        _64: !1,
        _3k: function() {
            this._64 = !0, this[yd]._1d[X_](this._9v, this), this[yd]._14[X_](this._26, this)
        },
        _1i: function() {
            this._64 = !1, this.graph._1d[mx](this._9v, this), this[yd]._14[mx](this._26, this)
        },
        invalidateFlag: !0,
        invalidateLayoutDatas: function() {
            this.invalidateFlag = !0
        },
        resetLayoutDatas: function() {
            return this.invalidateFlag = !1, this.layoutDatas = Vr[ih](this)
        },
        _26: function(t) {
            Yr[zN] == t.kind ? (this[Q_] = {}, t.datas.forEach(function(t) {
                this[Q_][t.id] = t
            }, this)) : Yr[WN] == t[nv] && (this[Q_] = {})
        },
        _9v: function() {
            this[Tz]()
        },
        isRunning: function() {
            return this[kz] && this[kz]._d8()
        },
        getLayoutResult: function() {
            this.stop(), this[Oz]();
            for (var t = this[Sz](this[Mz][Iz] || 0, this[Mz][Pz] || 0), i = 0; t > i && this[Cz](!1) !== !1; i++);
            var n = this[Mz].nodes;
            return this.onstop(), n
        },
        _lt: function() {
            return !1
        },
        step: function(t) {
            if (t === !1) return this._lt(this.timeStep);
            (this[CO] || !this[Mz]) && this.resetLayoutDatas();
            var i = this._lt(t),
                n = this[Mz][Az];
            for (var e in n) {
                var s = n[e],
                    r = s[dz];
                this[tj](r) ? r[QR](s.x, s.y) : (s.x = r.x, s.y = r.y, s.vx = 0, s.vy = 0)
            }
            return i
        },
        onstop: function() {
            delete this[Mz]
        },
        start: function(t) {
            if (this.isRunning()) return !1;
            this._64 || this._3k(), this._k2r || (this._k2r = function(t) {
                return this[Cz](t)
            }.bind(this)), this[Tz](), this[kz] = new PY(this[Lz]);
            var i = this;
            return this[kz]._kx(function() {
                i[Rz](), t && t()
            }), !0
        },
        stop: function() {
            this[kz] && (this.timer._lm(), this[Rz]())
        },
        getMaxIterations: function(t) {
            return Math.min(1e3, 3 * t + 10)
        },
        minEnergyFunction: function(t, i) {
            return 10 + Math.pow(t + i, 1.4)
        },
        resetGraph: function() {
            this._64 || this._3k(), this[Oz]()
        },
        destroy: function() {
            this.stop(), this._1i()
        }
    }, E(Xr, IW);
    var KW = function(t, i, n, e) {
        this.graph = t, D(i) && (this.radius = i), D(n) && (this.gap = n), D(e) && (this[jz] = e)
    };
    LY[Dz] = KW;
    var JW = Nz,
        ZW = Bz,
        QW = $z,
        tV = Fz;
    RY.ANGLE_SPACING_PROPORTIONAL = JW, RY[zz] = ZW, RY.RADIUS_MODE_UNIFORM = QW, RY[Gz] = tV, KW[_h] = {
        angleSpacing: JW,
        radiusMode: tV,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _9x: null,
        _my4: null,
        _k9: function() {
            this._9x = null, this._my4 = null
        },
        getLayoutResult: function(t) {
            var i, n = 0,
                e = 0,
                s = this[yd];
            t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t.root || this[yd], i = t.bounds), this._9x = {}, this._my4 = new eV(this);
            var r = {},
                h = _V(s, this._myx, this);
            return h && (this[tz]._f5 && 1 == this[tz]._f5.length && (this[tz] = this[tz]._f5[0]), this[tz]._ei(!0), this._my4._5g(n, e, this[jz], r, i)), this._k9(), r
        },
        _myx: function(t, i) {
            if (this[qz](t)) {
                var n = i ? this._9x[i.id] : this[tz];
                this._9x[t.id] = new eV(this, t, n)
            }
        },
        defaultSize: 40,
        getRadius: function() {
            return this[tv]
        },
        getNodeSize: function(t) {
            if (this[yd]._8i[Tb]) {
                var i = this[yd][gd](t);
                if (i) return (i._fj[Oa] + i._fj.height) / 2
            }
            return this.defaultSize
        },
        getGap: function() {
            return this.gap
        },
        _2l: function(t, i, n) {
            return this[ZF](t, i, n) + this[Yz](t, i, n)
        }
    };
    var iV = function(t) {
            var i, n = this._f5[nh],
                e = 0,
                s = 0;
            if (l(this._f5, function(t) {
                var n = t._ei();
                1 > n && (n = 1), s += n, n > e && (e = n, i = t)
            }, this), n > 1) {
                var r = 0,
                    h = {},
                    a = s / n / 3;
                s = 0, l(this._f5, function(t) {
                    var i = t._m9;
                    a > i && (i = a), h[t.id] = i, s += i
                }, this);
                var o = AU / s;
                l(this._f5, function(i, n) {
                    var e = h[i.id],
                        s = e * o;
                    0 === n && (r = t ? -s / 2 : -s), i._kt = r + s / 2, i._kw = s, r += s
                }, this)
            }
            return [e, i._kw]
        },
        nV = function(t) {
            var i = this._7i,
                n = 2 * Math.PI / i,
                e = 0,
                s = t ? 0 : i > 1 ? -n / 2 : 0;
            return l(this._f5, function(t) {
                t._kt = s % AU, s += n, t._kw = n;
                var i = t._ei();
                i > e && (e = i)
            }, this), [e, n]
        },
        eV = function(t, i, n) {
            this[Hz] = t, i && (this._ma = i, this.id = i.id), n && (n._gd(this), n._m8 = !1, this._kp = n._kp + 1)
        },
        AU = 2 * Math.PI;
    eV[_h] = {
        _kw: 0,
        _kt: 0,
        _jn: 0,
        _ec: 0,
        _mxw: 0,
        _kp: 0,
        _m8: !0,
        _m9: 0,
        _gm: 0,
        _f5: null,
        _ma: null,
        _gd: function(t) {
            this._f5 || (this._f5 = []), this._f5[fh](t), t[Vu] = this
        },
        _gb: function(t) {
            if (this._kt = (this._kt + t) % AU, this._f5) {
                var i = this._f5[nh];
                if (1 == i) return void this._f5[0]._gb(this._kt);
                t = this._kt + Math.PI, l(this._f5, function(i) {
                    i._gb(t)
                }, this)
            }
        },
        _7i: 0,
        _7b: function(t) {
            return this._ma && (this._gm = this[Hz]._2l(this._ma, this._kp, this._m8) / 2), this._f5 ? (this._gm, this._7i = this._f5[nh], this._7i <= 2 || this[Hz][Uz] == ZW ? nV[ih](this, t) : iV[ih](this, t)) : null
        },
        _ei: function(t) {
            var i = this._7b(t);
            if (!i) return this._m9 = this._gm;
            var n = i[0],
                e = i[1],
                s = this[Hz].getRadius(this._ma, this._kp);
            if (s < this._gm && (s = this._gm), this._ec = s, this._gm + n > s && (s = this._gm + n), n && this._7i > 1 && e < Math.PI) {
                var r = n / Math.sin(e / 2);
                r > s && (s = r)
            }
            return this._jn = s, this._m9 = s + n, this._ma && this._f5 && this.layouter[Wz] == tV && l(this._f5, function(t) {
                var i = t._m9;
                1 == t._7i && (i /= 2);
                var n = this._gm + i,
                    e = t._kw;
                if (e && e < Math.PI) {
                    var s = Math.sin(e / 2),
                        r = i / s;
                    r > i && (i = r)
                }
                n > i && (i = n), t[Vz] = i
            }, this), (!this._ma || t) && this._gb(0), this._m9
        },
        _5g: function(t, i, n, e, s) {
            if (this._ma && (e[this._ma.id] = {
                x: t,
                y: i,
                node: this._ma
            }, s && s.addRect(t - this._gm / 2, i - this._gm / 2, this._gm, this._gm)), this._f5) {
                if (!this._ma && 1 == this._f5[nh]) return void this._f5[0]._5g(t, i, n, e, s);
                n = n || 0;
                var r = this._jn,
                    h = this._ec;
                l(this._f5, function(a) {
                    var o = r;
                    a._mxw && (o = Math.max(h, a[Vz]));
                    var f = a._kt + n,
                        u = t + o * Math.cos(f),
                        c = i + o * Math.sin(f);
                    a._5g(u, c, n, e, s)
                }, this)
            }
        }
    }, E(KW, IW);
    var sV = function() {
        w(this, sV, arguments)
    };
    E(sV, Kr);
    var rV = function(t, i) {
        this.node1 = t, this[Xz] = i, t == i ? (this.isLooped = !0, this._kn = t._ko) : this._kn = new xq, this._82 = [], this._gw = mq[Kz]
    };
    mq[Kz] = !0, rV[_h] = {
        node1: null,
        node2: null,
        _kn: null,
        _gw: mq[Kz],
        _82: null,
        _ft: null,
        agentEdge: null,
        _mzt: function(t, i, n) {
            this._kn[ku](function(e) {
                return n && e.$from != n && e.fromAgent != n ? void 0 : t[ih](i, e)
            })
        },
        _59: 0,
        _50: 0,
        _hp: function(t, i) {
            return this._kn.add(t) === !1 ? !1 : (i == this[Jz] ? this._59++ : this._50++, this._mz9 ? void this._12(t) : void(this._mz9 = !0))
        },
        _myv: function(t, i) {
            return this._kn[ah](t) === !1 ? !1 : (i == this[Jz] ? this._59-- : this._50--, this._12(t), void this._kn[ku](function(t) {
                t[Ok] = !0, t[vk] = !0
            }, this))
        },
        _12: function(t) {
            this._myqBindableFlag = !0, this._5v = !0, t[Ok] = !0, t[vk] = !0
        },
        _myq: function() {
            this._5v || (this._5v = !0, this._kn[ku](function(t) {
                t[Ok] = !0
            }))
        },
        isEmpty: function() {
            return this._kn.isEmpty()
        },
        isPositiveOrder: function(t) {
            return this[Jz] == t[Ac] || this[Jz] == t[Zu]
        },
        canBind: function(t) {
            return t && this._5v && this[Io](t), this._kn[nh] > 1 && this._82[nh] > 1
        },
        _hn: function(t) {
            return this._82[uh](t)
        },
        getYOffset: function(t) {
            return this._ft[t.id]
        },
        _4l: function(t) {
            if (!this[Zz]()) return void(this._ft = {});
            var i = {},
                n = this._82[nh];
            if (!(2 > n)) {
                var e = 0,
                    s = this._82[0];
                i[s.id] = 0;
                for (var r = 1; n > r; r++) {
                    s = this._82[r];
                    var h = t[Gc](s, UU.EDGE_BUNDLE_GAP) || aW[UU[ZI]];
                    e += h, i[s.id] = e
                }
                if (!this[ic] && e)
                    for (var a = e / 2, r = 0; n > r; r++) s = this._82[r], i[s.id] -= a;
                this._ft = i
            }
        },
        _mzo: function(t) {
            return this._gw == t ? !1 : (this._gw = t, this[aT](), !0)
        },
        reverseExpanded: function() {
            return this._mzo(!this._gw)
        },
        _16: function() {
            this[Qz] = !1, this._82[nh] = 0;
            var t;
            this._kn[ku](function(i) {
                if (i[hk]()) {
                    if (!this[tG](i)) return t || (t = []), void t[fh](i);
                    this._82[fh](i)
                }
            }, this), t && (this._82 = t[rh](this._82))
        },
        _eg: function(t) {
            return t == this[iG] || !this[Zz]() || this._gw
        },
        validate: function(t) {
            this._5v = !1, this._kn.forEach(function(t) {
                t[Ok] = !1
            }), this._myqBindableFlag && this._16();
            var i = this._gw,
                n = this[Zz](),
                e = !n || i;
            l(this._82, function(t) {
                t._$o = !0, t._i0InBundle = e, e && (t.__4r = !0)
            }, this), e ? this._9i(null, t) : (this._9i(this._82[0], t), this[iG]._i0InBundle = !0, this[iG].__4r = !0), e && this._4l(t)
        },
        _9i: function(t, i) {
            if (t != this[iG]) {
                var n = this[iG];
                return this[iG] = t, i && i._3y(new $q(this, iG, t, n)), !0
            }
        }
    }, J(rV[_h], {
        bindableEdges: {
            get: function() {
                return this._82
            }
        },
        edges: {
            get: function() {
                return this._kn._jp
            }
        },
        length: {
            get: function() {
                return this._kn ? this._kn[nh] : 1
            }
        },
        expanded: {
            get: function() {
                return this._gw
            },
            set: function(t) {
                return this._gw == t ? !1 : (this._gw = t, void this[aT]())
            }
        }
    });
    var hV = function() {
            function t(t, i) {
                this[dz] = t, this[LA] = i
            }

            function i() {
                this[nG] = [], this.popIdx = 0
            }
            var n = -1e6,
                e = .8;
            i[_h] = {
                isEmpty: function() {
                    return 0 === this[eG]
                },
                push: function(i, n) {
                    var e = this[nG][this[eG]];
                    e ? (e[dz] = i, e[LA] = n) : this.stack[this[eG]] = new t(i, n), ++this[eG]
                },
                pop: function() {
                    return this[eG] > 0 ? this[nG][--this[eG]] : void 0
                },
                reset: function() {
                    this[eG] = 0
                }
            };
            var s = [],
                r = new i,
                h = function() {
                    this.body = null, this.quads = [], this[sG] = 0, this[rG] = 0, this.massY = 0, this[La] = 0, this.top = 0, this[ra] = 0, this[ha] = 0, this.isInternal = !1
                },
                a = [],
                o = 0,
                f = function() {
                    var t;
                    return a[o] ? (t = a[o], t.quads[0] = null, t[hG][1] = null, t[hG][2] = null, t[hG][3] = null, t.body = null, t[sG] = t[rG] = t[aG] = 0, t[La] = t.right = t.top = t[ra] = 0, t[oG] = !1) : (t = new h, a[o] = t), ++o, t
                },
                u = f(),
                c = function(t, i) {
                    var n = Math.abs(t.x - i.x),
                        e = Math.abs(t.y - i.y);
                    return 1e-8 > n && 1e-8 > e
                },
                d = function(t) {
                    for (r[fG](), r[fh](u, t); !r[ou]();) {
                        var i = r.pop(),
                            n = i[dz],
                            e = i[LA];
                        if (n[oG]) {
                            var s = e.x,
                                h = e.y;
                            n.mass = n.mass + e[sG], n[rG] = n.massX + e[sG] * s, n.massY = n[aG] + e.mass * h;
                            var a = 0,
                                o = n.left,
                                d = (n[ha] + o) / 2,
                                _ = n.top,
                                l = (n[ra] + _) / 2;
                            if (s > d) {
                                a += 1;
                                var v = o;
                                o = d, d += d - v
                            }
                            if (h > l) {
                                a += 2;
                                var b = _;
                                _ = l, l += l - b
                            }
                            var y = n[hG][a];
                            y || (y = f(), y.left = o, y.top = _, y[ha] = d, y[ra] = l, n[hG][a] = y), r[fh](y, e)
                        } else if (n[LA]) {
                            var g = n[LA];
                            if (n[LA] = null, n[oG] = !0, c(g, e)) {
                                if (n[ha] - n[La] < 1e-8) return;
                                do {
                                    var m = Math[Fh](),
                                        x = (n[ha] - n[La]) * m,
                                        p = (n.bottom - n.top) * m;
                                    g.x = n.left + x, g.y = n.top + p
                                } while (c(g, e))
                            }
                            r[fh](n, g), r[fh](n, e)
                        } else n[LA] = e
                    }
                },
                _ = function(t) {
                    var i, r, h, a, o = s,
                        f = 1,
                        c = 0,
                        d = 1;
                    for (o[0] = u; f;) {
                        var _ = o[c],
                            l = _[LA];
                        f -= 1, c += 1, l && l !== t ? (r = l.x - t.x, h = l.y - t.y, a = Math[Oo](r * r + h * h), 0 === a && (r = (Math[Fh]() - .5) / 50, h = (Math[Fh]() - .5) / 50, a = Math[Oo](r * r + h * h)), i = n * l[sG] * t[sG] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (r = _[rG] / _[sG] - t.x, h = _[aG] / _[sG] - t.y, a = Math[Oo](r * r + h * h), 0 === a && (r = (Math[Fh]() - .5) / 50, h = (Math[Fh]() - .5) / 50, a = Math[Oo](r * r + h * h)), (_[ha] - _[La]) / a < e ? (i = n * _.mass * t[sG] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h) : (_.quads[0] && (o[d] = _.quads[0], f += 1, d += 1), _[hG][1] && (o[d] = _[hG][1], f += 1, d += 1), _[hG][2] && (o[d] = _.quads[2], f += 1, d += 1), _[hG][3] && (o[d] = _.quads[3], f += 1, d += 1)))
                    }
                },
                l = function(t, i) {
                    n = i;
                    var e, s = Number[jl],
                        r = Number[jl],
                        h = Number[uG],
                        a = Number.MIN_VALUE,
                        c = t,
                        _ = c[nh];
                    for (e = _; e--;) {
                        var l = c[e].x,
                            v = c[e].y;
                        s > l && (s = l), l > h && (h = l), r > v && (r = v), v > a && (a = v)
                    }
                    var b = h - s,
                        y = a - r;
                    for (b > y ? a = r + b : h = s + y, o = 0, u = f(), u.left = s, u[ha] = h, u.top = r, u.bottom = a, e = _; e--;) d(c[e], u)
                };
            return {
                init: l,
                update: _
            }
        },
        aV = function(t) {
            t.fx -= t.x * this[cG], t.fy -= t.y * this[cG]
        },
        oV = function(t) {
            if (0 != t.k) {
                var i = this._d2,
                    n = t[tc],
                    e = t.to,
                    s = e.x - n.x,
                    r = e.y - n.y,
                    h = s * s + r * r,
                    a = Math[Oo](h) || .1,
                    o = (a - i) * t.k * this[dG];
                o /= a;
                var f = o * s,
                    u = o * r;
                e.fx -= f, e.fy -= u, n.fx += f, n.fy += u
            }
        };
    Kr.prototype = {
        appendNodeInfo: function(t, i) {
            i[sG] = t.layoutMass || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
        },
        appendEdgeInfo: function(t, i) {
            i.k = t[_G] || 1
        },
        setMass: function(t, i) {
            t[lG] = i, this[Mz] && this.layoutDatas.nodes && (t = this.layoutDatas[Az][t.id], t && (t[sG] = i))
        },
        setElasticity: function(t, i) {
            t.layoutElasticity = i, this[Mz] && this[Mz][vG] && (t = this[Mz][vG][t.id], t && (t.k = i))
        },
        _d2: 50,
        _hc: .5,
        timeStep: .05,
        repulsion: 50,
        attractive: .1,
        elastic: 3,
        _mc: 1e3,
        _k7: function(t) {
            return this._mc + .3 * (t - this._mc)
        },
        _lt: function(t, i) {
            var n = (Date.now(), this.layoutDatas.nodes);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math[Fh]() - .5, s.y += Math[Fh]() - .5), aV[ih](this, s)
            }
            var r = this.layoutDatas[bG];
            if (r)
                for (var e in r) {
                    var h = r[e],
                        a = h[eh],
                        o = 0,
                        f = 0;
                    a.forEach(function(t) {
                        o += t.x, f += t.y
                    }), o /= a[nh], f /= a[nh];
                    var u = 10 * this[cG];
                    a[ku](function(t) {
                        t.fx -= (t.x - o) * u, t.fy -= (t.y - f) * u
                    })
                }
            var c = this._nbodyForce;
            c || (c = this[yG] = hV()), c.init(this[Mz][gG], -this.repulsion * this[mG] * this[mG]);
            for (var e in n) c[_$](n[e]);
            if (this[dG]) {
                var d = this.layoutDatas[vG];
                for (var e in d) oV[ih](this, d[e])
            }
            return this._mb(t)
        },
        _mb: function(t) {
            var i = this[Mz].minEnergy,
                n = (this[Mz].currentEnergy, this[Mz][Az]),
                t = this.timeStep,
                e = 0,
                s = this._hc;
            for (var r in n) {
                var h = n[r],
                    a = h.fx / h.mass,
                    o = h.fy / h[sG],
                    f = h.vx += a * t,
                    u = h.vy += o * t;
                h.x += f * t, h.y += u * t, i > e && (e += 2 * (f * f + u * u)), h.fx = 0, h.fy = 0, h.vx *= s, h.vy *= s
            }
            return this[Mz][xG] = e, e >= i
        }
    }, E(Kr, Xr), LY[pG] = Kr;
    var fV = function(t) {
        this[RF] = t
    };
    fV.prototype = {
        oldLocations: null,
        _eo: null,
        duration: 700,
        animationType: IY[EG],
        _74: function(t) {
            if (this._eo = t, this[wG] = {}, t)
                for (var i in t) {
                    var n = t[i],
                        e = n.node;
                    this[wG][i] = {
                        x: e.x,
                        y: e.y
                    }
                }
        },
        setLocation: function(t, i, n) {
            t[QR](i, n)
        },
        forEach: function(t, i) {
            for (var n in this.locations) {
                var e = this[wG][n],
                    s = this[RF][n];
                t[ih](i, e, s)
            }
        },
        _ix: function(t) {
            this[ku](function(i, n) {
                var e = n[dz],
                    s = i.x + (n.x - i.x) * t,
                    r = i.y + (n.y - i.y) * t;
                this[QR](e, s, r)
            }, this)
        },
        stop: function() {
            this[TG] && this._mznimate._lm()
        },
        start: function(t) {
            this[TG] ? (this[TG]._lm(), this[TG]._ik = this.duration, this[TG]._dbType = this[mD], this[TG]._onfinish = this[kG]) : this[TG] = new CY(this._ix, this, this.duration, this.animationType), this[TG]._kx(t)
        }
    }, J(fV[_h], {
        locations: {
            get: function() {
                return this._eo
            },
            set: function(t) {
                this._eo != t && this._74(t)
            }
        }
    });
    var uV = function(t) {
            function i(i) {
                var n = !1;
                return i[OG](function(i) {
                    return t.contains(i) && !i.isLooped() ? (n = !0, !1) : void 0
                }), n
            }

            function n(i) {
                var n = !1;
                return i[tl](function(i) {
                    return t[Sd](i) && !i[ic]() ? (n = !0, !1) : void 0
                }), n
            }
            var e, s = new xq;
            return t[ku](function(t) {
                t instanceof FU && (i(t) ? !e && n(t) && (e = t) : s.add(t))
            }), s.isEmpty() && e && s.add(e), s
        },
        cV = function(t, i, n, e, s, r) {
            if (i instanceof Xq) return t(i, n, e, s, r), i;
            if (i instanceof oW) {
                var h = new xq;
                i._kdModel[ku](function(t) {
                    return i[l_](t) ? t._i2() && t._gw && t[th]() ? void(t.$location && (t.$location.invalidateFlag = !1)) : void h.add(t) : void 0
                }), i = h
            } else if (Array[Nc](i)) i = new xq(i);
            else if (!(i instanceof xq)) throw new Error(SG);
            return i = uV(i, e), i.forEach(function(i) {
                t(i, n, e, s, r)
            }), i
        },
        dV = function(t, i, n, e, s) {
            return cV(lV, t, i, n, e, s)
        },
        _V = function(t, i, n, e, s) {
            return cV(vV, t, i, n, e, s)
        };
    ls[_h][MG] = function(t, i, n, e) {
        dV(this, t, i, n, e)
    }, ls[_h][IG] = function(t, i, n, e) {
        t instanceof Object && 1 == arguments[nh] && (i = t.scope), _V(this, t, i, n, e)
    }, LY[MG] = dV, LY[IG] = _V;
    var lV = function(t, i, n, e, s) {
            function r(t, i, n, e, s, h, a, o) {
                t[il] = h, e || i[ih](n, t, o, a), Jr(t, function(o) {
                    r(o, i, n, e, s, h, a + 1, t)
                }, o, s, h, n), e && i[ih](n, t, o, a)
            }
            r(t, i, n, e, s, {}, 0)
        },
        vV = function(t, i, n, e, s) {
            function r(t, i, n, e, s, h, a) {
                var o, f = t[nh];
                t[ku](function(t, r) {
                    var u = t.v;
                    u[il] = h, e || i.call(n, u, t._from, a, r, f), Jr(u, function(t) {
                        o || (o = []), t[il] = h, o[fh]({
                            v: t,
                            _from: u
                        })
                    }, u, s, h, n)
                }), o && r(o, i, n, e, s, h, a + 1), e && t.forEach(function(t, e) {
                    i.call(n, t.v, t._from, a, e, f)
                })
            }
            r([{
                v: t
            }], i, n, e, s, {}, 0)
        };
    LY[PG] = X, LY.log = ti, LY.error = ni, LY.trace = ii, LY[CG] = rq, LY[AG] = sq, LY[LG] = oq, LY[RG] = fq, LY.isFirefox = uq, LY.isSafari = dq, LY[jG] = cq, LY[DG] = _q, LY[NG] = aW, LY[BG] = mq, LY[uj] = UU, LY.Consts = RY, LY[$G] = xH, LY[FG] = oW, LY.BaseUI = YU, LY[zG] = eW, LY[GG] = ws, LY[rN] = Es, LY[qG] = rW, LY[YG] = sW, LY.Shapes = GU, LY[HG] = yH, LY[_L] = tH, LY[UG] = Yr, LY[zw] = BU, LY[vR] = FU, LY.Edge = $U, LY[WG] = ls, LY[VG] = rV, LY[XG] = VW, LY[ph] = KG;
    var bV = JG;
    return LY.version = ZG, LY[sw] = QG, LY[rw] = "Copyright Â© 2018 Qunee.com", LY.css = bi, LY[tq] = fW, ti = function() {}, LY.publishDate = iq, LY
    console.log(LY.version, 'LY.version')
}(window, document);