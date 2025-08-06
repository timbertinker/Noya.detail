"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7508],
  {
    91299: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return a;
        },
      });
      var s = i(88299);
      /**
       * @license lucide-react v0.462.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, s.Z)("ChevronLeft", [
        ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
      ]);
    },
    23178: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return a;
        },
      });
      var s = i(88299);
      /**
       * @license lucide-react v0.462.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, s.Z)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    44454: function (t, e, i) {
      i.d(e, {
        w_: function () {
          return GenIcon;
        },
      });
      var s = i(50959),
        a = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = s.createContext && s.createContext(a),
        __assign = function () {
          return (__assign =
            Object.assign ||
            function (t) {
              for (var e, i = 1, s = arguments.length; i < s; i++)
                for (var a in (e = arguments[i]))
                  Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
              return t;
            }).apply(this, arguments);
        },
        __rest = function (t, e) {
          var i = {};
          for (var s in t)
            Object.prototype.hasOwnProperty.call(t, s) &&
              0 > e.indexOf(s) &&
              (i[s] = t[s]);
          if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (
              var a = 0, s = Object.getOwnPropertySymbols(t);
              a < s.length;
              a++
            )
              0 > e.indexOf(s[a]) &&
                Object.prototype.propertyIsEnumerable.call(t, s[a]) &&
                (i[s[a]] = t[s[a]]);
          return i;
        };
      function GenIcon(t) {
        return function (e) {
          return s.createElement(
            IconBase,
            __assign({ attr: __assign({}, t.attr) }, e),
            (function Tree2Element(t) {
              return (
                t &&
                t.map(function (t, e) {
                  return s.createElement(
                    t.tag,
                    __assign({ key: e }, t.attr),
                    Tree2Element(t.child)
                  );
                })
              );
            })(t.child)
          );
        };
      }
      function IconBase(t) {
        var elem = function (e) {
          var i,
            a = t.attr,
            o = t.size,
            r = t.title,
            l = __rest(t, ["attr", "size", "title"]),
            c = o || e.size || "1em";
          return (
            e.className && (i = e.className),
            t.className && (i = (i ? i + " " : "") + t.className),
            s.createElement(
              "svg",
              __assign(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                a,
                l,
                {
                  className: i,
                  style: __assign(
                    __assign({ color: t.color || e.color }, e.style),
                    t.style
                  ),
                  height: c,
                  width: c,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              r && s.createElement("title", null, r),
              t.children
            )
          );
        };
        return void 0 !== o
          ? s.createElement(o.Consumer, null, function (t) {
              return elem(t);
            })
          : elem(a);
      }
    },
    31852: function (t, e, i) {
      i.d(e, {
        S: function () {
          return useIntersectionObserver;
        },
      });
      var s,
        a = i(50959),
        o = [0],
        r =
          ((s = new Map()),
          {
            getObserver: function (t) {
              var e = t.root,
                i = t.rootMargin,
                a = t.threshold,
                o = s.get(e);
              o || ((o = new Map()), s.set(e, o));
              var r = JSON.stringify({ rootMargin: i, threshold: a }),
                l = o.get(r);
              if (!l) {
                var c = new Map();
                (l = {
                  observer: new IntersectionObserver(
                    function (t) {
                      t.forEach(function (t) {
                        var e = c.get(t.target);
                        null == e || e(t);
                      });
                    },
                    { root: e, rootMargin: i, threshold: a }
                  ),
                  entryCallbacks: c,
                }),
                  o.set(r, l);
              }
              return {
                observe: function (t, e) {
                  var i, s;
                  null == (i = l) || i.entryCallbacks.set(t, e),
                    null == (s = l) || s.observer.observe(t);
                },
                unobserve: function (t) {
                  var e, i;
                  null == (e = l) || e.entryCallbacks.delete(t),
                    null == (i = l) || i.observer.unobserve(t);
                },
              };
            },
          });
      function useIntersectionObserver(t) {
        var e,
          i,
          s = null != (e = null == t ? void 0 : t.rootMargin) ? e : "0px",
          l = null != (i = null == t ? void 0 : t.threshold) ? i : o,
          c = (0, a.useRef)(null),
          h = (0, a.useRef)(null),
          d = (0, a.useRef)(null),
          u = (0, a.useState)(),
          p = u[0],
          g = u[1],
          m = (0, a.useCallback)(
            function () {
              var t = c.current;
              if (!t) {
                g(void 0);
                return;
              }
              var e = r.getObserver({
                root: h.current,
                rootMargin: s,
                threshold: l,
              });
              e.observe(t, function (t) {
                g(t);
              }),
                (d.current = e);
            },
            [s, l]
          ),
          v = (0, a.useCallback)(function () {
            var t = d.current,
              e = c.current;
            e && (null == t || t.unobserve(e)), (d.current = null);
          }, []);
        return [
          (0, a.useCallback)(
            function (t) {
              v(), (c.current = t), m();
            },
            [m, v]
          ),
          {
            entry: p,
            rootRef: (0, a.useCallback)(
              function (t) {
                v(), (h.current = t), m();
              },
              [m, v]
            ),
          },
        ];
      }
    },
    26444: function (t, e, i) {
      var s,
        a,
        o,
        r,
        l,
        c,
        h,
        d,
        u,
        p,
        g,
        m,
        v,
        y,
        b,
        w,
        x,
        _,
        C,
        k,
        z,
        S,
        O,
        R,
        P,
        M,
        E,
        D,
        I,
        T,
        L,
        B,
        F,
        A,
        V,
        q,
        G,
        U,
        W,
        H,
        N,
        Z,
        j,
        $;
      i.d(e, {
        qHU: function () {
          return d;
        },
        RC2: function () {
          return AnimatableColor;
        },
        NV1: function () {
          return o;
        },
        Cdc: function () {
          return Circle;
        },
        Dpx: function () {
          return y;
        },
        Hyf: function () {
          return r;
        },
        gqJ: function () {
          return g;
        },
        nxi: function () {
          return S;
        },
        L8z: function () {
          return ExternalInteractorBase;
        },
        OzF: function () {
          return OptionsColor;
        },
        Voc: function () {
          return b;
        },
        DYc: function () {
          return l;
        },
        Igb: function () {
          return _;
        },
        $Sh: function () {
          return ParticlesInteractorBase;
        },
        lZr: function () {
          return c;
        },
        AeJ: function () {
          return Rectangle;
        },
        RnL: function () {
          return k;
        },
        SWe: function () {
          return ValueWithRandom;
        },
        OWs: function () {
          return Vector;
        },
        dUB: function () {
          return arrayRandomIndex;
        },
        paW: function () {
          return calcPositionOrRandomFromSize;
        },
        Gz$: function () {
          return calcPositionOrRandomFromSizeRanged;
        },
        M_G: function () {
          return calculateBounds;
        },
        kRC: function () {
          return circleBounce;
        },
        gy4: function () {
          return circleBounceDataFromParticle;
        },
        uZ5: function () {
          return clamp;
        },
        ocL: function () {
          return colorMix;
        },
        ZBL: function () {
          return deepExtend;
        },
        Idc: function () {
          return degToRad;
        },
        iCg: function () {
          return divMode;
        },
        XDe: function () {
          return divModeExecute;
        },
        txi: function () {
          return tn;
        },
        pSR: function () {
          return drawLine;
        },
        gK4: function () {
          return J;
        },
        KH1: function () {
          return executeOnSingleOrMultiple;
        },
        Spd: function () {
          return getDistance;
        },
        oW6: function () {
          return getDistances;
        },
        bS$: function () {
          return getHslAnimationFromHsl;
        },
        BEi: function () {
          return getLinkColor;
        },
        Dt5: function () {
          return getLinkRandomColor;
        },
        jl5: function () {
          return getLogger;
        },
        sZz: function () {
          return getRandom;
        },
        KIV: function () {
          return getRangeMax;
        },
        Gu7: function () {
          return getRangeValue;
        },
        apW: function () {
          return getSize;
        },
        vzQ: function () {
          return getStyleFromHsl;
        },
        izR: function () {
          return getStyleFromRgb;
        },
        jz_: function () {
          return te;
        },
        veL: function () {
          return hslToRgb;
        },
        Y6v: function () {
          return hslaToRgba;
        },
        V0: function () {
          return initParticleNumericAnimationValue;
        },
        kJL: function () {
          return isArray;
        },
        wm$: function () {
          return isDivModeEnabled;
        },
        dBL: function () {
          return isInArray;
        },
        Ft: function () {
          return isNull;
        },
        hj$: function () {
          return isNumber;
        },
        Kn2: function () {
          return isObject;
        },
        Ac: function () {
          return isPointInside;
        },
        KrJ: function () {
          return isSsr;
        },
        c86: function () {
          return itemFromArray;
        },
        wA_: function () {
          return itemFromSingleOrMultiple;
        },
        mxw: function () {
          return loadFont;
        },
        hTV: function () {
          return loadParticlesOptions;
        },
        X5o: function () {
          return ti;
        },
        aMP: function () {
          return X;
        },
        WtO: function () {
          return K;
        },
        usR: function () {
          return ts;
        },
        BVM: function () {
          return parseAlpha;
        },
        tZy: function () {
          return tt;
        },
        vdf: function () {
          return randomInRange;
        },
        lNs: function () {
          return rangeColorToHsl;
        },
        tXk: function () {
          return rangeColorToRgb;
        },
        dpV: function () {
          return rectBounce;
        },
        lCU: function () {
          return rgbToHsl;
        },
        Cst: function () {
          return setRangeValue;
        },
        S6T: function () {
          return tv;
        },
        CrJ: function () {
          return updateAnimation;
        },
        PBz: function () {
          return updateColor;
        },
      });
      let Y = "generated",
        X = "pointerleave",
        K = "pointermove",
        Q = "touchend",
        J = "tsParticles - Error",
        tt = 100,
        te = 0.5,
        ti = 1e3,
        ts = { x: 0, y: 0, z: 0 },
        ta = { a: 1, b: 0, c: 0, d: 1 },
        to = "random",
        tn = 2,
        tr = Math.PI * tn,
        tl = "true",
        tc = "false",
        th = "canvas",
        td = 0,
        tu = te + 0.25;
      function isBoolean(t) {
        return "boolean" == typeof t;
      }
      function isString(t) {
        return "string" == typeof t;
      }
      function isNumber(t) {
        return "number" == typeof t;
      }
      function isObject(t) {
        return "object" == typeof t && null !== t;
      }
      function isArray(t) {
        return Array.isArray(t);
      }
      function isNull(t) {
        return null == t;
      }
      ((O = s || (s = {})).bottom = "bottom"),
        (O.bottomLeft = "bottom-left"),
        (O.bottomRight = "bottom-right"),
        (O.left = "left"),
        (O.none = "none"),
        (O.right = "right"),
        (O.top = "top"),
        (O.topLeft = "top-left"),
        (O.topRight = "top-right"),
        (O.outside = "outside"),
        (O.inside = "inside");
      let Vector3d = class Vector3d {
        constructor(t, e, i) {
          if (
            ((this._updateFromAngle = (t, e) => {
              (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
            }),
            !isNumber(t) && t)
          )
            (this.x = t.x), (this.y = t.y), (this.z = t.z ? t.z : ts.z);
          else if (void 0 !== t && void 0 !== e)
            (this.x = t), (this.y = e), (this.z = i ?? ts.z);
          else throw Error(`${J} Vector3d not initialized correctly`);
        }
        static get origin() {
          return Vector3d.create(ts.x, ts.y, ts.z);
        }
        get angle() {
          return Math.atan2(this.y, this.x);
        }
        set angle(t) {
          this._updateFromAngle(t, this.length);
        }
        get length() {
          return Math.sqrt(this.getLengthSq());
        }
        set length(t) {
          this._updateFromAngle(this.angle, t);
        }
        static clone(t) {
          return Vector3d.create(t.x, t.y, t.z);
        }
        static create(t, e, i) {
          return new Vector3d(t, e, i);
        }
        add(t) {
          return Vector3d.create(this.x + t.x, this.y + t.y, this.z + t.z);
        }
        addTo(t) {
          (this.x += t.x), (this.y += t.y), (this.z += t.z);
        }
        copy() {
          return Vector3d.clone(this);
        }
        distanceTo(t) {
          return this.sub(t).length;
        }
        distanceToSq(t) {
          return this.sub(t).getLengthSq();
        }
        div(t) {
          return Vector3d.create(this.x / t, this.y / t, this.z / t);
        }
        divTo(t) {
          (this.x /= t), (this.y /= t), (this.z /= t);
        }
        getLengthSq() {
          return this.x ** 2 + this.y ** 2;
        }
        mult(t) {
          return Vector3d.create(this.x * t, this.y * t, this.z * t);
        }
        multTo(t) {
          (this.x *= t), (this.y *= t), (this.z *= t);
        }
        normalize() {
          let t = this.length;
          0 != t && this.multTo(1 / t);
        }
        rotate(t) {
          return Vector3d.create(
            this.x * Math.cos(t) - this.y * Math.sin(t),
            this.x * Math.sin(t) + this.y * Math.cos(t),
            ts.z
          );
        }
        setTo(t) {
          (this.x = t.x), (this.y = t.y), (this.z = t.z ? t.z : ts.z);
        }
        sub(t) {
          return Vector3d.create(this.x - t.x, this.y - t.y, this.z - t.z);
        }
        subFrom(t) {
          (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
        }
      };
      let Vector = class Vector extends Vector3d {
        constructor(t, e) {
          super(t, e, ts.z);
        }
        static get origin() {
          return Vector.create(ts.x, ts.y);
        }
        static clone(t) {
          return Vector.create(t.x, t.y);
        }
        static create(t, e) {
          return new Vector(t, e);
        }
      };
      let tp = Math.random,
        tf = {
          nextFrame: (t) => requestAnimationFrame(t),
          cancel: (t) => cancelAnimationFrame(t),
        };
      function getRandom() {
        return clamp(tp(), 0, 1 - Number.EPSILON);
      }
      function clamp(t, e, i) {
        return Math.min(Math.max(t, e), i);
      }
      function mix(t, e, i, s) {
        return Math.floor((t * i + e * s) / (i + s));
      }
      function randomInRange(t) {
        let e = getRangeMax(t),
          i = getRangeMin(t);
        return e === i && (i = 0), getRandom() * (e - i) + i;
      }
      function getRangeValue(t) {
        return isNumber(t) ? t : randomInRange(t);
      }
      function getRangeMin(t) {
        return isNumber(t) ? t : t.min;
      }
      function getRangeMax(t) {
        return isNumber(t) ? t : t.max;
      }
      function setRangeValue(t, e) {
        if (t === e || (void 0 === e && isNumber(t))) return t;
        let i = getRangeMin(t),
          s = getRangeMax(t);
        return void 0 !== e
          ? { min: Math.min(i, e), max: Math.max(s, e) }
          : setRangeValue(i, s);
      }
      function getDistances(t, e) {
        let i = t.x - e.x,
          s = t.y - e.y;
        return { dx: i, dy: s, distance: Math.sqrt(i ** 2 + s ** 2) };
      }
      function getDistance(t, e) {
        return getDistances(t, e).distance;
      }
      function degToRad(t) {
        return (t * Math.PI) / 180;
      }
      function collisionVelocity(t, e, i, s) {
        return Vector.create(
          (t.x * (i - s)) / (i + s) + (e.x * tn * s) / (i + s),
          t.y
        );
      }
      function calcPositionOrRandomFromSize(t) {
        return {
          x: ((t.position?.x ?? getRandom() * tt) * t.size.width) / tt,
          y: ((t.position?.y ?? getRandom() * tt) * t.size.height) / tt,
        };
      }
      function calcPositionOrRandomFromSizeRanged(t) {
        let e = {
          x: t.position?.x !== void 0 ? getRangeValue(t.position.x) : void 0,
          y: t.position?.y !== void 0 ? getRangeValue(t.position.y) : void 0,
        };
        return calcPositionOrRandomFromSize({ size: t.size, position: e });
      }
      function parseAlpha(t) {
        return t ? (t.endsWith("%") ? parseFloat(t) / tt : parseFloat(t)) : 1;
      }
      ((R = a || (a = {})).auto = "auto"),
        (R.increase = "increase"),
        (R.decrease = "decrease"),
        (R.random = "random"),
        ((P = o || (o = {})).increasing = "increasing"),
        (P.decreasing = "decreasing"),
        ((M = r || (r = {})).none = "none"),
        (M.max = "max"),
        (M.min = "min"),
        ((E = l || (l = {})).bottom = "bottom"),
        (E.left = "left"),
        (E.right = "right"),
        (E.top = "top"),
        ((D = c || (c = {})).precise = "precise"),
        (D.percent = "percent"),
        ((I = h || (h = {})).max = "max"),
        (I.min = "min"),
        (I.random = "random");
      let tg = {
        debug: console.debug,
        error: console.error,
        info: console.info,
        log: console.log,
        verbose: console.log,
        warning: console.warn,
      };
      function getLogger() {
        return tg;
      }
      function rectSideBounce(t) {
        let e = { bounced: !1 },
          {
            pSide: i,
            pOtherSide: s,
            rectSide: a,
            rectOtherSide: o,
            velocity: r,
            factor: l,
          } = t;
        return (
          s.min < o.min ||
            s.min > o.max ||
            s.max < o.min ||
            s.max > o.max ||
            (((i.max >= a.min && i.max <= (a.max + a.min) * te && r > 0) ||
              (i.min <= a.max && i.min > (a.max + a.min) * te && r < 0)) &&
              ((e.velocity = -(r * l)), (e.bounced = !0))),
          e
        );
      }
      function isSsr() {
        return (
          "undefined" == typeof window ||
          !window ||
          void 0 === window.document ||
          !window.document
        );
      }
      function safeMatchMedia(t) {
        if (!isSsr() && "undefined" != typeof matchMedia) return matchMedia(t);
      }
      function isInArray(t, e) {
        return t === e || (isArray(e) && e.indexOf(t) > -1);
      }
      async function loadFont(t, e) {
        try {
          await document.fonts.load(`${e ?? "400"} 36px '${t ?? "Verdana"}'`);
        } catch {}
      }
      function arrayRandomIndex(t) {
        return Math.floor(getRandom() * t.length);
      }
      function itemFromArray(t, e, i = !0) {
        return t[void 0 !== e && i ? e % t.length : arrayRandomIndex(t)];
      }
      function isPointInside(t, e, i, s, a) {
        var o;
        let r;
        return (
          (o = calculateBounds(t, s ?? 0)),
          (r = !0),
          (a && a !== l.bottom) || (r = o.top < e.height + i.x),
          r && (!a || a === l.left) && (r = o.right > i.x),
          r && (!a || a === l.right) && (r = o.left < e.width + i.y),
          r && (!a || a === l.top) && (r = o.bottom > i.y),
          r
        );
      }
      function calculateBounds(t, e) {
        return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
      }
      function deepExtend(t, ...e) {
        for (let i of e) {
          if (null == i) continue;
          if (!isObject(i)) {
            t = i;
            continue;
          }
          let e = Array.isArray(i);
          for (let s in (e && (isObject(t) || !t || !Array.isArray(t))
            ? (t = [])
            : !e && (isObject(t) || !t || Array.isArray(t)) && (t = {}),
          i)) {
            if ("__proto__" === s) continue;
            let e = i[s],
              a = t;
            a[s] =
              isObject(e) && Array.isArray(e)
                ? e.map((t) => deepExtend(a[s], t))
                : deepExtend(a[s], e);
          }
        }
        return t;
      }
      function isDivModeEnabled(t, e) {
        return !!findItemFromSingleOrMultiple(
          e,
          (e) => e.enable && isInArray(t, e.mode)
        );
      }
      function divModeExecute(t, e, i) {
        executeOnSingleOrMultiple(e, (e) => {
          let s = e.mode,
            a = e.enable;
          a &&
            isInArray(t, s) &&
            (function (t, e) {
              let i = t.selectors;
              executeOnSingleOrMultiple(i, (i) => {
                e(i, t);
              });
            })(e, i);
        });
      }
      function divMode(t, e) {
        if (e && t)
          return findItemFromSingleOrMultiple(t, (t) =>
            (function (t, e) {
              let i = executeOnSingleOrMultiple(e, (e) => t.matches(e));
              return isArray(i) ? i.some((t) => t) : i;
            })(e, t.selectors)
          );
      }
      function circleBounceDataFromParticle(t) {
        return {
          position: t.getPosition(),
          radius: t.getRadius(),
          mass: t.getMass(),
          velocity: t.velocity,
          factor: Vector.create(
            getRangeValue(t.options.bounce.horizontal.value),
            getRangeValue(t.options.bounce.vertical.value)
          ),
        };
      }
      function circleBounce(t, e) {
        let { x: i, y: s } = t.velocity.sub(e.velocity),
          [a, o] = [t.position, e.position],
          { dx: r, dy: l } = getDistances(o, a);
        if (i * r + s * l < 0) return;
        let c = -Math.atan2(l, r),
          h = t.mass,
          d = e.mass,
          u = t.velocity.rotate(c),
          p = e.velocity.rotate(c),
          g = collisionVelocity(u, p, h, d),
          m = collisionVelocity(p, u, h, d),
          v = g.rotate(-c),
          y = m.rotate(-c);
        (t.velocity.x = v.x * t.factor.x),
          (t.velocity.y = v.y * t.factor.y),
          (e.velocity.x = y.x * e.factor.x),
          (e.velocity.y = y.y * e.factor.y);
      }
      function rectBounce(t, e) {
        let i = t.getPosition(),
          s = t.getRadius(),
          a = calculateBounds(i, s),
          o = t.options.bounce,
          r = rectSideBounce({
            pSide: { min: a.left, max: a.right },
            pOtherSide: { min: a.top, max: a.bottom },
            rectSide: { min: e.left, max: e.right },
            rectOtherSide: { min: e.top, max: e.bottom },
            velocity: t.velocity.x,
            factor: getRangeValue(o.horizontal.value),
          });
        r.bounced &&
          (void 0 !== r.velocity && (t.velocity.x = r.velocity),
          void 0 !== r.position && (t.position.x = r.position));
        let l = rectSideBounce({
          pSide: { min: a.top, max: a.bottom },
          pOtherSide: { min: a.left, max: a.right },
          rectSide: { min: e.top, max: e.bottom },
          rectOtherSide: { min: e.left, max: e.right },
          velocity: t.velocity.y,
          factor: getRangeValue(o.vertical.value),
        });
        l.bounced &&
          (void 0 !== l.velocity && (t.velocity.y = l.velocity),
          void 0 !== l.position && (t.position.y = l.position));
      }
      function executeOnSingleOrMultiple(t, e) {
        return isArray(t) ? t.map((t, i) => e(t, i)) : e(t, 0);
      }
      function itemFromSingleOrMultiple(t, e, i) {
        return isArray(t) ? itemFromArray(t, e, i) : t;
      }
      function findItemFromSingleOrMultiple(t, e) {
        return isArray(t) ? t.find((t, i) => e(t, i)) : e(t, 0) ? t : void 0;
      }
      function initParticleNumericAnimationValue(t, e) {
        let i = t.value,
          s = t.animation,
          r = {
            delayTime: getRangeValue(s.delay) * ti,
            enable: s.enable,
            value: getRangeValue(t.value) * e,
            max: getRangeMax(i) * e,
            min: getRangeMin(i) * e,
            loops: 0,
            maxLoops: getRangeValue(s.count),
            time: 0,
          };
        if (s.enable) {
          switch (((r.decay = 1 - getRangeValue(s.decay)), s.mode)) {
            case a.increase:
              r.status = o.increasing;
              break;
            case a.decrease:
              r.status = o.decreasing;
              break;
            case a.random:
              r.status = getRandom() >= te ? o.increasing : o.decreasing;
          }
          let t = s.mode === a.auto;
          switch (s.startValue) {
            case h.min:
              (r.value = r.min), t && (r.status = o.increasing);
              break;
            case h.max:
              (r.value = r.max), t && (r.status = o.decreasing);
              break;
            case h.random:
            default:
              (r.value = randomInRange(r)),
                t &&
                  (r.status = getRandom() >= te ? o.increasing : o.decreasing);
          }
        }
        return (r.initialValue = r.value), r;
      }
      function getPositionOrSize(t, e) {
        let i = t.mode === c.percent;
        if (!i) {
          let { mode: e, ...i } = t;
          return i;
        }
        return "x" in t
          ? { x: (t.x / tt) * e.width, y: (t.y / tt) * e.height }
          : {
              width: (t.width / tt) * e.width,
              height: (t.height / tt) * e.height,
            };
      }
      function getSize(t, e) {
        return getPositionOrSize(t, e);
      }
      function updateAnimation(t, e, i, s, a) {
        if (
          t.destroyed ||
          !e ||
          !e.enable ||
          ((e.maxLoops ?? 0) > 0 && (e.loops ?? 0) > (e.maxLoops ?? 0))
        )
          return;
        let l = (e.velocity ?? 0) * a.factor,
          c = e.min,
          h = e.max,
          d = e.decay ?? 1;
        if (
          (e.time || (e.time = 0),
          (e.delayTime ?? 0) > 0 &&
            e.time < (e.delayTime ?? 0) &&
            (e.time += a.value),
          !((e.delayTime ?? 0) > 0) || !(e.time < (e.delayTime ?? 0)))
        ) {
          switch (e.status) {
            case o.increasing:
              e.value >= h
                ? (i ? (e.status = o.decreasing) : (e.value -= h),
                  e.loops || (e.loops = 0),
                  e.loops++)
                : (e.value += l);
              break;
            case o.decreasing:
              e.value <= c
                ? (i ? (e.status = o.increasing) : (e.value += h),
                  e.loops || (e.loops = 0),
                  e.loops++)
                : (e.value -= l);
          }
          e.velocity && 1 !== d && (e.velocity *= d),
            (function (t, e, i, s, a) {
              switch (e) {
                case r.max:
                  i >= a && t.destroy();
                  break;
                case r.min:
                  i <= s && t.destroy();
              }
            })(t, s, e.value, c, h),
            t.destroyed || (e.value = clamp(e.value, c, h));
        }
      }
      let tm = (function (t) {
        let e = new Map();
        return (...i) => {
          let s = JSON.stringify(i);
          if (e.has(s)) return e.get(s);
          let a = t(...i);
          return e.set(s, a), a;
        };
      })(function (t) {
        let e = document.createElement("div").style,
          i = {
            width: "100%",
            height: "100%",
            margin: "0",
            padding: "0",
            borderWidth: "0",
            position: "fixed",
            zIndex: t.toString(10),
            "z-index": t.toString(10),
            top: "0",
            left: "0",
          };
        for (let t in i) {
          let s = i[t];
          e.setProperty(t, s);
        }
        return e;
      });
      function rangeColorToRgb(t, e, i, s = !0) {
        if (!e) return;
        let a = isString(e) ? { value: e } : e;
        if (isString(a.value))
          return (function colorToRgb(t, e, i, s = !0) {
            if (!e) return;
            let a = isString(e) ? { value: e } : e;
            if (isString(a.value))
              return a.value === to
                ? getRandomRgbColor()
                : (function (t, e) {
                    if (e) {
                      for (let i of t.colorManagers.values())
                        if (e.startsWith(i.stringPrefix))
                          return i.parseString(e);
                    }
                  })(t, a.value);
            if (isArray(a.value))
              return colorToRgb(t, { value: itemFromArray(a.value, i, s) });
            for (let e of t.colorManagers.values()) {
              let t = e.handleColor(a);
              if (t) return t;
            }
          })(t, a.value, i, s);
        if (isArray(a.value))
          return rangeColorToRgb(t, { value: itemFromArray(a.value, i, s) });
        for (let e of t.colorManagers.values()) {
          let t = e.handleRangeColor(a);
          if (t) return t;
        }
      }
      function rangeColorToHsl(t, e, i, s = !0) {
        let a = rangeColorToRgb(t, e, i, s);
        return a ? rgbToHsl(a) : void 0;
      }
      function rgbToHsl(t) {
        let e = t.r / 255,
          i = t.g / 255,
          s = t.b / 255,
          a = Math.max(e, i, s),
          o = Math.min(e, i, s),
          r = { h: 0, l: (a + o) * te, s: 0 };
        return (
          a !== o &&
            ((r.s = r.l < te ? (a - o) / (a + o) : (a - o) / (tn - a - o)),
            (r.h =
              e === a
                ? (i - s) / (a - o)
                : (r.h =
                    i === a
                      ? tn + (s - e) / (a - o)
                      : tn * tn + (e - i) / (a - o)))),
          (r.l *= 100),
          (r.s *= 100),
          (r.h *= 60),
          r.h < 0 && (r.h += 360),
          r.h >= 360 && (r.h -= 360),
          r
        );
      }
      function hslToRgb(t) {
        let e = ((t.h % 360) + 360) % 360,
          i = Math.max(0, Math.min(100, t.s)),
          s = Math.max(0, Math.min(100, t.l)),
          a = e / 360,
          o = i / 100,
          r = s / 100;
        if (0 === i) {
          let t = Math.round(255 * r);
          return { r: t, g: t, b: t };
        }
        let channel = (t, e, i) => {
            if ((i < 0 && i++, i > 1 && i--, 6 * i < 1))
              return t + (e - t) * 6 * i;
            if (i * tn < 1) return e;
            if (3 * i < 1 * tn) {
              let s = tn / 3;
              return t + (e - t) * (s - i) * 6;
            }
            return t;
          },
          l = r < te ? r * (1 + o) : r + o - r * o,
          c = tn * r - l,
          h = Math.min(255, 255 * channel(c, l, a + 0.3333333333333333)),
          d = Math.min(255, 255 * channel(c, l, a)),
          u = Math.min(255, 255 * channel(c, l, a - 0.3333333333333333));
        return { r: Math.round(h), g: Math.round(d), b: Math.round(u) };
      }
      function hslaToRgba(t) {
        let e = hslToRgb(t);
        return { a: t.a, b: e.b, g: e.g, r: e.r };
      }
      function getRandomRgbColor(t) {
        let e = t ?? 0;
        return {
          b: Math.floor(randomInRange(setRangeValue(e, 256))),
          g: Math.floor(randomInRange(setRangeValue(e, 256))),
          r: Math.floor(randomInRange(setRangeValue(e, 256))),
        };
      }
      function getStyleFromRgb(t, e) {
        return `rgba(${t.r}, ${t.g}, ${t.b}, ${e ?? 1})`;
      }
      function getStyleFromHsl(t, e) {
        return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${e ?? 1})`;
      }
      function colorMix(t, e, i, s) {
        let a = t,
          o = e;
        return (
          void 0 === a.r && (a = hslToRgb(t)),
          void 0 === o.r && (o = hslToRgb(e)),
          {
            b: mix(a.b, o.b, i, s),
            g: mix(a.g, o.g, i, s),
            r: mix(a.r, o.r, i, s),
          }
        );
      }
      function getLinkColor(t, e, i) {
        if (i === to) return getRandomRgbColor();
        if ("mid" !== i) return i;
        {
          let i = t.getFillColor() ?? t.getStrokeColor(),
            s = e?.getFillColor() ?? e?.getStrokeColor();
          if (i && s && e) return colorMix(i, s, t.getRadius(), e.getRadius());
          {
            let t = i ?? s;
            if (t) return hslToRgb(t);
          }
        }
      }
      function getLinkRandomColor(t, e, i, s) {
        let a = isString(e) ? e : e.value;
        return a === to
          ? s
            ? rangeColorToRgb(t, { value: a })
            : i
            ? to
            : "mid"
          : "mid" === a
          ? "mid"
          : rangeColorToRgb(t, { value: a });
      }
      function getHslFromAnimation(t) {
        return void 0 !== t
          ? { h: t.h.value, s: t.s.value, l: t.l.value }
          : void 0;
      }
      function getHslAnimationFromHsl(t, e, i) {
        let s = {
          h: { enable: !1, value: t.h },
          s: { enable: !1, value: t.s },
          l: { enable: !1, value: t.l },
        };
        return (
          e &&
            (setColorAnimation(s.h, e.h, i),
            setColorAnimation(s.s, e.s, i),
            setColorAnimation(s.l, e.l, i)),
          s
        );
      }
      function setColorAnimation(t, e, i) {
        (t.enable = e.enable),
          t.enable
            ? ((t.velocity = (getRangeValue(e.speed) / tt) * i),
              (t.decay = 1 - getRangeValue(e.decay)),
              (t.status = o.increasing),
              (t.loops = 0),
              (t.maxLoops = getRangeValue(e.count)),
              (t.time = 0),
              (t.delayTime = getRangeValue(e.delay) * ti),
              e.sync || ((t.velocity *= getRandom()), (t.value *= getRandom())),
              (t.initialValue = t.value),
              (t.offset = setRangeValue(e.offset)))
            : (t.velocity = 0);
      }
      function updateColorValue(t, e, i, s) {
        if (
          !t ||
          !t.enable ||
          ((t.maxLoops ?? 0) > 0 && (t.loops ?? 0) > (t.maxLoops ?? 0)) ||
          (t.time || (t.time = 0),
          (t.delayTime ?? 0) > 0 &&
            t.time < (t.delayTime ?? 0) &&
            (t.time += s.value),
          (t.delayTime ?? 0) > 0 && t.time < (t.delayTime ?? 0))
        )
          return;
        let a = t.offset ? randomInRange(t.offset) : 0,
          r = (t.velocity ?? 0) * s.factor + 3.6 * a,
          l = t.decay ?? 1,
          c = getRangeMax(e),
          h = getRangeMin(e);
        i && t.status !== o.increasing
          ? ((t.value -= r),
            t.value < 0 &&
              (t.loops || (t.loops = 0), t.loops++, (t.status = o.increasing)))
          : ((t.value += r),
            t.value > c &&
              (t.loops || (t.loops = 0),
              t.loops++,
              i ? (t.status = o.decreasing) : (t.value -= c))),
          t.velocity && 1 !== l && (t.velocity *= l),
          (t.value = clamp(t.value, h, c));
      }
      function updateColor(t, e) {
        if (!t) return;
        let { h: i, s, l: a } = t,
          o = {
            h: { min: 0, max: 360 },
            s: { min: 0, max: 100 },
            l: { min: 0, max: 100 },
          };
        i && updateColorValue(i, o.h, !1, e),
          s && updateColorValue(s, o.s, !0, e),
          a && updateColorValue(a, o.l, !0, e);
      }
      function drawLine(t, e, i) {
        t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
      }
      function clear(t, e) {
        t.clearRect(ts.x, ts.y, e.width, e.height);
      }
      function setStyle(t, e, i = !1) {
        if (!e || !t) return;
        let s = t.style;
        if (!s) return;
        let a = new Set();
        for (let t in s)
          Object.prototype.hasOwnProperty.call(s, t) && a.add(s[t]);
        for (let t in e)
          Object.prototype.hasOwnProperty.call(e, t) && a.add(e[t]);
        for (let t of a) {
          let a = e.getPropertyValue(t);
          a ? s.setProperty(t, a, i ? "important" : "") : s.removeProperty(t);
        }
      }
      ((T = d || (d = {})).darken = "darken"), (T.enlighten = "enlighten");
      let Canvas = class Canvas {
        constructor(t, e) {
          (this.container = t),
            (this._applyPostDrawUpdaters = (t) => {
              for (let e of this._postDrawUpdaters) e.afterDraw?.(t);
            }),
            (this._applyPreDrawUpdaters = (t, e, i, s, a, o) => {
              for (let r of this._preDrawUpdaters) {
                if (r.getColorStyles) {
                  let { fill: o, stroke: l } = r.getColorStyles(e, t, i, s);
                  o && (a.fill = o), l && (a.stroke = l);
                }
                if (r.getTransformValues) {
                  let t = r.getTransformValues(e);
                  for (let e in t)
                    !(function (t, e, i) {
                      let s = e[i];
                      void 0 !== s && (t[i] = (t[i] ?? 1) * s);
                    })(o, t, e);
                }
                r.beforeDraw?.(e);
              }
            }),
            (this._applyResizePlugins = () => {
              for (let t of this._resizePlugins) t.resize?.();
            }),
            (this._getPluginParticleColors = (t) => {
              let e, i;
              for (let s of this._colorPlugins)
                if (
                  (!e &&
                    s.particleFillColor &&
                    (e = rangeColorToHsl(this._engine, s.particleFillColor(t))),
                  !i &&
                    s.particleStrokeColor &&
                    (i = rangeColorToHsl(
                      this._engine,
                      s.particleStrokeColor(t)
                    )),
                  e && i)
                )
                  break;
              return [e, i];
            }),
            (this._initCover = async () => {
              let t = this.container.actualOptions,
                e = t.backgroundMask.cover,
                i = e.color;
              if (i) {
                let t = rangeColorToRgb(this._engine, i);
                if (t) {
                  let i = { ...t, a: e.opacity };
                  this._coverColorStyle = getStyleFromRgb(i, i.a);
                }
              } else
                await new Promise((t, i) => {
                  if (!e.image) return;
                  let s = document.createElement("img");
                  s.addEventListener("load", () => {
                    (this._coverImage = { image: s, opacity: e.opacity }), t();
                  }),
                    s.addEventListener("error", (t) => {
                      i(t.error);
                    }),
                    (s.src = e.image);
                });
            }),
            (this._initStyle = () => {
              let t = this.element,
                e = this.container.actualOptions;
              if (t)
                for (let i in (this._fullScreen
                  ? this._setFullScreenStyle()
                  : this._resetOriginalStyle(),
                e.style)) {
                  if (
                    !i ||
                    !e.style ||
                    !Object.prototype.hasOwnProperty.call(e.style, i)
                  )
                    continue;
                  let s = e.style[i];
                  s && t.style.setProperty(i, s, "important");
                }
            }),
            (this._initTrail = async () => {
              let t = this.container.actualOptions,
                e = t.particles.move.trail,
                i = e.fill;
              if (!e.enable) return;
              let s = 1 / e.length;
              if (i.color) {
                let t = rangeColorToRgb(this._engine, i.color);
                if (!t) return;
                this._trailFill = { color: { ...t }, opacity: s };
              } else
                await new Promise((t, e) => {
                  if (!i.image) return;
                  let a = document.createElement("img");
                  a.addEventListener("load", () => {
                    (this._trailFill = { image: a, opacity: s }), t();
                  }),
                    a.addEventListener("error", (t) => {
                      e(t.error);
                    }),
                    (a.src = i.image);
                });
            }),
            (this._paintBase = (t) => {
              this.draw((e) => {
                var i;
                return (
                  (i = this.size),
                  void ((e.fillStyle = t ?? "rgba(0,0,0,0)"),
                  e.fillRect(ts.x, ts.y, i.width, i.height))
                );
              });
            }),
            (this._paintImage = (t, e) => {
              this.draw((i) => {
                var s;
                return (
                  (s = this.size),
                  void (
                    t &&
                    ((i.globalAlpha = e),
                    i.drawImage(t, ts.x, ts.y, s.width, s.height),
                    (i.globalAlpha = 1))
                  )
                );
              });
            }),
            (this._repairStyle = () => {
              let t = this.element;
              t &&
                (this._safeMutationObserver((t) => t.disconnect()),
                this._initStyle(),
                this.initBackground(),
                this._safeMutationObserver((e) => {
                  t && t instanceof Node && e.observe(t, { attributes: !0 });
                }));
            }),
            (this._resetOriginalStyle = () => {
              let t = this.element,
                e = this._originalStyle;
              t && e && setStyle(t, e, !0);
            }),
            (this._safeMutationObserver = (t) => {
              this._mutationObserver && t(this._mutationObserver);
            }),
            (this._setFullScreenStyle = () => {
              let t = this.element;
              t &&
                setStyle(
                  t,
                  tm(this.container.actualOptions.fullScreen.zIndex),
                  !0
                );
            }),
            (this._engine = e),
            (this._standardSize = { height: 0, width: 0 });
          let i = t.retina.pixelRatio,
            s = this._standardSize;
          (this.size = { height: s.height * i, width: s.width * i }),
            (this._context = null),
            (this._generated = !1),
            (this._preDrawUpdaters = []),
            (this._postDrawUpdaters = []),
            (this._resizePlugins = []),
            (this._colorPlugins = []);
        }
        get _fullScreen() {
          return this.container.actualOptions.fullScreen.enable;
        }
        clear() {
          let t = this.container.actualOptions,
            e = t.particles.move.trail,
            i = this._trailFill;
          t.backgroundMask.enable
            ? this.paint()
            : e.enable && e.length > 0 && i
            ? i.color
              ? this._paintBase(getStyleFromRgb(i.color, i.opacity))
              : i.image && this._paintImage(i.image, i.opacity)
            : t.clear &&
              this.draw((t) => {
                clear(t, this.size);
              });
        }
        destroy() {
          if ((this.stop(), this._generated)) {
            let t = this.element;
            t?.remove(), (this.element = void 0);
          } else this._resetOriginalStyle();
          (this._preDrawUpdaters = []),
            (this._postDrawUpdaters = []),
            (this._resizePlugins = []),
            (this._colorPlugins = []);
        }
        draw(t) {
          let e = this._context;
          if (e) return t(e);
        }
        drawAsync(t) {
          let e = this._context;
          if (e) return t(e);
        }
        drawParticle(t, e) {
          if (t.spawning || t.destroyed) return;
          let i = t.getRadius();
          if (i <= 0) return;
          let s = t.getFillColor(),
            a = t.getStrokeColor() ?? s,
            [o, r] = this._getPluginParticleColors(t);
          o || (o = s),
            r || (r = a),
            (o || r) &&
              this.draw((s) => {
                let a = this.container,
                  l = a.actualOptions,
                  c = t.options.zIndex,
                  h = 1 - t.zIndexFactor,
                  d = h ** c.opacityRate,
                  u = t.bubble.opacity ?? t.opacity?.value ?? 1,
                  p = t.strokeOpacity ?? u,
                  g = u * d,
                  m = {},
                  v = { fill: o ? getStyleFromHsl(o, g) : void 0 };
                (v.stroke = r ? getStyleFromHsl(r, p * d) : v.fill),
                  this._applyPreDrawUpdaters(s, t, i, g, v, m),
                  (function (t) {
                    let {
                        container: e,
                        context: i,
                        particle: s,
                        delta: a,
                        colorStyles: o,
                        backgroundMask: r,
                        composite: l,
                        radius: c,
                        opacity: h,
                        shadow: d,
                        transform: u,
                      } = t,
                      p = s.getPosition(),
                      g = s.rotation + (s.pathRotation ? s.velocity.angle : 0),
                      m = { sin: Math.sin(g), cos: Math.cos(g) },
                      v = !!g,
                      y = {
                        a: m.cos * (u.a ?? ta.a),
                        b: v ? m.sin * (u.b ?? 1) : u.b ?? ta.b,
                        c: v ? -m.sin * (u.c ?? 1) : u.c ?? ta.c,
                        d: m.cos * (u.d ?? ta.d),
                      };
                    i.setTransform(y.a, y.b, y.c, y.d, p.x, p.y),
                      r && (i.globalCompositeOperation = l);
                    let b = s.shadowColor;
                    d.enable &&
                      b &&
                      ((i.shadowBlur = d.blur),
                      (i.shadowColor = getStyleFromRgb(b)),
                      (i.shadowOffsetX = d.offset.x),
                      (i.shadowOffsetY = d.offset.y)),
                      o.fill && (i.fillStyle = o.fill);
                    let w = s.strokeWidth ?? 0;
                    (i.lineWidth = w), o.stroke && (i.strokeStyle = o.stroke);
                    let x = {
                      container: e,
                      context: i,
                      particle: s,
                      radius: c,
                      opacity: h,
                      delta: a,
                      transformData: y,
                      strokeWidth: w,
                    };
                    (function (t) {
                      let {
                        container: e,
                        context: i,
                        particle: s,
                        radius: a,
                        opacity: o,
                        delta: r,
                        strokeWidth: l,
                        transformData: c,
                      } = t;
                      if (!s.shape) return;
                      let h = e.shapeDrawers.get(s.shape);
                      h &&
                        (i.beginPath(),
                        h.draw({
                          context: i,
                          particle: s,
                          radius: a,
                          opacity: o,
                          delta: r,
                          pixelRatio: e.retina.pixelRatio,
                          transformData: { ...c },
                        }),
                        s.shapeClose && i.closePath(),
                        l > 0 && i.stroke(),
                        s.shapeFill && i.fill());
                    })(x),
                      (function (t) {
                        let {
                          container: e,
                          context: i,
                          particle: s,
                          radius: a,
                          opacity: o,
                          delta: r,
                          transformData: l,
                        } = t;
                        if (!s.shape) return;
                        let c = e.shapeDrawers.get(s.shape);
                        c?.afterDraw &&
                          c.afterDraw({
                            context: i,
                            particle: s,
                            radius: a,
                            opacity: o,
                            delta: r,
                            pixelRatio: e.retina.pixelRatio,
                            transformData: { ...l },
                          });
                      })(x),
                      (function (t) {
                        let {
                          container: e,
                          context: i,
                          particle: s,
                          radius: a,
                          opacity: o,
                          delta: r,
                          transformData: l,
                        } = t;
                        if (!s.effect) return;
                        let c = e.effectDrawers.get(s.effect);
                        c &&
                          c.draw({
                            context: i,
                            particle: s,
                            radius: a,
                            opacity: o,
                            delta: r,
                            pixelRatio: e.retina.pixelRatio,
                            transformData: { ...l },
                          });
                      })(x),
                      (i.globalCompositeOperation = "source-over"),
                      i.resetTransform();
                  })({
                    container: a,
                    context: s,
                    particle: t,
                    delta: e,
                    colorStyles: v,
                    backgroundMask: l.backgroundMask.enable,
                    composite: l.backgroundMask.composite,
                    radius: i * h ** c.sizeRate,
                    opacity: g,
                    shadow: t.options.shadow,
                    transform: m,
                  }),
                  this._applyPostDrawUpdaters(t);
              });
        }
        drawParticlePlugin(t, e, i) {
          this.draw((s) => {
            t.drawParticle && t.drawParticle(s, e, i);
          });
        }
        drawPlugin(t, e) {
          this.draw((i) => {
            t.draw && t.draw(i, e);
          });
        }
        async init() {
          this._safeMutationObserver((t) => t.disconnect()),
            (this._mutationObserver = (function (t) {
              if (!isSsr() && "undefined" != typeof MutationObserver)
                return new MutationObserver(t);
            })((t) => {
              for (let e of t)
                "attributes" === e.type &&
                  "style" === e.attributeName &&
                  this._repairStyle();
            })),
            this.resize(),
            this._initStyle(),
            await this._initCover();
          try {
            await this._initTrail();
          } catch (t) {
            tg.error(t);
          }
          this.initBackground(),
            this._safeMutationObserver((t) => {
              this.element &&
                this.element instanceof Node &&
                t.observe(this.element, { attributes: !0 });
            }),
            this.initUpdaters(),
            this.initPlugins(),
            this.paint();
        }
        initBackground() {
          let t = this.container.actualOptions,
            e = t.background,
            i = this.element;
          if (!i) return;
          let s = i.style;
          if (s) {
            if (e.color) {
              let t = rangeColorToRgb(this._engine, e.color);
              s.backgroundColor = t ? getStyleFromRgb(t, e.opacity) : "";
            } else s.backgroundColor = "";
            (s.backgroundImage = e.image || ""),
              (s.backgroundPosition = e.position || ""),
              (s.backgroundRepeat = e.repeat || ""),
              (s.backgroundSize = e.size || "");
          }
        }
        initPlugins() {
          for (let t of ((this._resizePlugins = []),
          this.container.plugins.values()))
            t.resize && this._resizePlugins.push(t),
              (t.particleFillColor ?? t.particleStrokeColor) &&
                this._colorPlugins.push(t);
        }
        initUpdaters() {
          for (let t of ((this._preDrawUpdaters = []),
          (this._postDrawUpdaters = []),
          this.container.particles.updaters))
            t.afterDraw && this._postDrawUpdaters.push(t),
              (t.getColorStyles ?? t.getTransformValues ?? t.beforeDraw) &&
                this._preDrawUpdaters.push(t);
        }
        loadCanvas(t) {
          this._generated && this.element && this.element.remove(),
            (this._generated =
              t.dataset && Y in t.dataset
                ? "true" === t.dataset[Y]
                : this._generated),
            (this.element = t),
            (this.element.ariaHidden = "true"),
            (this._originalStyle = (function (t) {
              let e = document.createElement("div").style;
              if (!t) return e;
              for (let i in t) {
                let s = t[i];
                if (!Object.prototype.hasOwnProperty.call(t, i) || isNull(s))
                  continue;
                let a = t.getPropertyValue?.(s);
                if (!a) continue;
                let o = t.getPropertyPriority?.(s);
                o ? e.setProperty?.(s, a, o) : e.setProperty?.(s, a);
              }
              return e;
            })(this.element.style));
          let e = this._standardSize;
          (e.height = t.offsetHeight), (e.width = t.offsetWidth);
          let i = this.container.retina.pixelRatio,
            s = this.size;
          (t.height = s.height = e.height * i),
            (t.width = s.width = e.width * i),
            (this._context = this.element.getContext("2d")),
            this._safeMutationObserver((t) => t.disconnect()),
            this.container.retina.init(),
            this.initBackground(),
            this._safeMutationObserver((t) => {
              this.element &&
                this.element instanceof Node &&
                t.observe(this.element, { attributes: !0 });
            });
        }
        paint() {
          let t = this.container.actualOptions;
          this.draw((e) => {
            t.backgroundMask.enable && t.backgroundMask.cover
              ? (clear(e, this.size),
                this._coverImage
                  ? this._paintImage(
                      this._coverImage.image,
                      this._coverImage.opacity
                    )
                  : this._coverColorStyle
                  ? this._paintBase(this._coverColorStyle)
                  : this._paintBase())
              : this._paintBase();
          });
        }
        resize() {
          if (!this.element) return !1;
          let t = this.container,
            e = t.canvas._standardSize,
            i = {
              width: this.element.offsetWidth,
              height: this.element.offsetHeight,
            },
            s = t.retina.pixelRatio,
            a = { width: i.width * s, height: i.height * s };
          if (
            i.height === e.height &&
            i.width === e.width &&
            a.height === this.element.height &&
            a.width === this.element.width
          )
            return !1;
          let o = { ...e };
          (e.height = i.height), (e.width = i.width);
          let r = this.size;
          return (
            (this.element.width = r.width = a.width),
            (this.element.height = r.height = a.height),
            this.container.started &&
              t.particles.setResizeFactor({
                width: e.width / o.width,
                height: e.height / o.height,
              }),
            !0
          );
        }
        stop() {
          this._safeMutationObserver((t) => t.disconnect()),
            (this._mutationObserver = void 0),
            this.draw((t) => clear(t, this.size));
        }
        async windowResize() {
          if (!this.element || !this.resize()) return;
          let t = this.container,
            e = t.updateActualOptions();
          t.particles.setDensity(),
            this._applyResizePlugins(),
            e && (await t.refresh());
        }
      };
      function manageListener(t, e, i, s, a) {
        if (s) {
          let s = { passive: !0 };
          isBoolean(a) ? (s.capture = a) : void 0 !== a && (s = a),
            t.addEventListener(e, i, s);
        } else t.removeEventListener(e, i, a);
      }
      ((L = u || (u = {})).canvas = "canvas"),
        (L.parent = "parent"),
        (L.window = "window");
      let EventListeners = class EventListeners {
        constructor(t) {
          (this.container = t),
            (this._doMouseTouchClick = (t) => {
              let e = this.container,
                i = e.actualOptions;
              if (this._canPush) {
                let t = e.interactivity.mouse,
                  s = t.position;
                if (!s) return;
                (t.clickPosition = { ...s }),
                  (t.clickTime = new Date().getTime());
                let a = i.interactivity.events.onClick;
                executeOnSingleOrMultiple(a.mode, (t) =>
                  this.container.handleClickMode(t)
                );
              }
              "touchend" === t.type &&
                setTimeout(() => this._mouseTouchFinish(), 500);
            }),
            (this._handleThemeChange = (t) => {
              let e = this.container,
                i = e.options,
                s = i.defaultThemes,
                a = t.matches ? s.dark : s.light,
                o = i.themes.find((t) => t.name === a);
              o?.default.auto && e.loadTheme(a);
            }),
            (this._handleVisibilityChange = () => {
              let t = this.container,
                e = t.actualOptions;
              this._mouseTouchFinish(),
                e.pauseOnBlur &&
                  (document?.hidden
                    ? ((t.pageHidden = !0), t.pause())
                    : ((t.pageHidden = !1),
                      t.animationStatus ? t.play(!0) : t.draw(!0)));
            }),
            (this._handleWindowResize = () => {
              this._resizeTimeout &&
                (clearTimeout(this._resizeTimeout), delete this._resizeTimeout);
              let handleResize = async () => {
                let t = this.container.canvas;
                await t?.windowResize();
              };
              this._resizeTimeout = setTimeout(
                () => void handleResize(),
                this.container.actualOptions.interactivity.events.resize.delay *
                  ti
              );
            }),
            (this._manageInteractivityListeners = (t, e) => {
              let i = this._handlers,
                s = this.container,
                a = s.actualOptions,
                o = s.interactivity.element;
              if (!o) return;
              let r = s.canvas.element;
              r && (r.style.pointerEvents = o === r ? "initial" : "none"),
                (a.interactivity.events.onHover.enable ||
                  a.interactivity.events.onClick.enable) &&
                  (manageListener(o, K, i.mouseMove, e),
                  manageListener(o, "touchstart", i.touchStart, e),
                  manageListener(o, "touchmove", i.touchMove, e),
                  a.interactivity.events.onClick.enable
                    ? (manageListener(o, Q, i.touchEndClick, e),
                      manageListener(o, "pointerup", i.mouseUp, e),
                      manageListener(o, "pointerdown", i.mouseDown, e))
                    : manageListener(o, Q, i.touchEnd, e),
                  manageListener(o, t, i.mouseLeave, e),
                  manageListener(o, "touchcancel", i.touchCancel, e));
            }),
            (this._manageListeners = (t) => {
              let e = this._handlers,
                i = this.container,
                s = i.actualOptions,
                a = s.interactivity.detectsOn,
                o = i.canvas.element,
                r = X;
              a === u.window
                ? ((i.interactivity.element = window), (r = "pointerout"))
                : a === u.parent && o
                ? (i.interactivity.element = o.parentElement ?? o.parentNode)
                : (i.interactivity.element = o),
                this._manageMediaMatch(t),
                this._manageResize(t),
                this._manageInteractivityListeners(r, t),
                document &&
                  manageListener(
                    document,
                    "visibilitychange",
                    e.visibilityChange,
                    t,
                    !1
                  );
            }),
            (this._manageMediaMatch = (t) => {
              let e = this._handlers,
                i = safeMatchMedia("(prefers-color-scheme: dark)");
              if (i) {
                if (void 0 !== i.addEventListener) {
                  manageListener(i, "change", e.themeChange, t);
                  return;
                }
                void 0 !== i.addListener &&
                  (t
                    ? i.addListener(e.oldThemeChange)
                    : i.removeListener(e.oldThemeChange));
              }
            }),
            (this._manageResize = (t) => {
              let e = this._handlers,
                i = this.container,
                s = i.actualOptions;
              if (!s.interactivity.events.resize) return;
              if ("undefined" == typeof ResizeObserver) {
                manageListener(window, "resize", e.resize, t);
                return;
              }
              let a = i.canvas.element;
              this._resizeObserver && !t
                ? (a && this._resizeObserver.unobserve(a),
                  this._resizeObserver.disconnect(),
                  delete this._resizeObserver)
                : !this._resizeObserver &&
                  t &&
                  a &&
                  ((this._resizeObserver = new ResizeObserver((t) => {
                    let e = t.find((t) => t.target === a);
                    e && this._handleWindowResize();
                  })),
                  this._resizeObserver.observe(a));
            }),
            (this._mouseDown = () => {
              let { interactivity: t } = this.container;
              if (!t) return;
              let { mouse: e } = t;
              (e.clicking = !0), (e.downPosition = e.position);
            }),
            (this._mouseTouchClick = (t) => {
              let e = this.container,
                i = e.actualOptions,
                { mouse: s } = e.interactivity;
              s.inside = !0;
              let a = !1,
                o = s.position;
              if (o && i.interactivity.events.onClick.enable) {
                for (let t of e.plugins.values())
                  if (t.clickPositionValid && (a = t.clickPositionValid(o)))
                    break;
                a || this._doMouseTouchClick(t), (s.clicking = !1);
              }
            }),
            (this._mouseTouchFinish = () => {
              let t = this.container.interactivity;
              if (!t) return;
              let e = t.mouse;
              delete e.position,
                delete e.clickPosition,
                delete e.downPosition,
                (t.status = X),
                (e.inside = !1),
                (e.clicking = !1);
            }),
            (this._mouseTouchMove = (t) => {
              let e;
              let i = this.container,
                s = i.actualOptions,
                a = i.interactivity,
                o = i.canvas.element;
              if (!a?.element) return;
              if (((a.mouse.inside = !0), t.type.startsWith("pointer"))) {
                if (((this._canPush = !0), a.element === window)) {
                  if (o) {
                    let i = o.getBoundingClientRect();
                    e = { x: t.clientX - i.left, y: t.clientY - i.top };
                  }
                } else if (s.interactivity.detectsOn === u.parent) {
                  let i = t.target,
                    s = t.currentTarget;
                  if (i && s && o) {
                    let a = i.getBoundingClientRect(),
                      r = s.getBoundingClientRect(),
                      l = o.getBoundingClientRect();
                    e = {
                      x: t.offsetX + tn * a.left - (r.left + l.left),
                      y: t.offsetY + tn * a.top - (r.top + l.top),
                    };
                  } else
                    e = {
                      x: t.offsetX ?? t.clientX,
                      y: t.offsetY ?? t.clientY,
                    };
                } else
                  t.target === o &&
                    (e = {
                      x: t.offsetX ?? t.clientX,
                      y: t.offsetY ?? t.clientY,
                    });
              } else if (((this._canPush = "touchmove" !== t.type), o)) {
                let i = t.touches[t.touches.length - 1],
                  s = o.getBoundingClientRect();
                e = {
                  x: i.clientX - (s.left ?? 0),
                  y: i.clientY - (s.top ?? 0),
                };
              }
              let r = i.retina.pixelRatio;
              e && ((e.x *= r), (e.y *= r)),
                (a.mouse.position = e),
                (a.status = K);
            }),
            (this._touchEnd = (t) => {
              let e = Array.from(t.changedTouches);
              for (let t of e) this._touches.delete(t.identifier);
              this._mouseTouchFinish();
            }),
            (this._touchEndClick = (t) => {
              let e = Array.from(t.changedTouches);
              for (let t of e) this._touches.delete(t.identifier);
              this._mouseTouchClick(t);
            }),
            (this._touchStart = (t) => {
              let e = Array.from(t.changedTouches);
              for (let t of e)
                this._touches.set(t.identifier, performance.now());
              this._mouseTouchMove(t);
            }),
            (this._canPush = !0),
            (this._touches = new Map()),
            (this._handlers = {
              mouseDown: () => this._mouseDown(),
              mouseLeave: () => this._mouseTouchFinish(),
              mouseMove: (t) => this._mouseTouchMove(t),
              mouseUp: (t) => this._mouseTouchClick(t),
              touchStart: (t) => this._touchStart(t),
              touchMove: (t) => this._mouseTouchMove(t),
              touchEnd: (t) => this._touchEnd(t),
              touchCancel: (t) => this._touchEnd(t),
              touchEndClick: (t) => this._touchEndClick(t),
              visibilityChange: () => this._handleVisibilityChange(),
              themeChange: (t) => this._handleThemeChange(t),
              oldThemeChange: (t) => this._handleThemeChange(t),
              resize: () => {
                this._handleWindowResize();
              },
            });
        }
        addListeners() {
          this._manageListeners(!0);
        }
        removeListeners() {
          this._manageListeners(!1);
        }
      };
      ((B = p || (p = {})).configAdded = "configAdded"),
        (B.containerInit = "containerInit"),
        (B.particlesSetup = "particlesSetup"),
        (B.containerStarted = "containerStarted"),
        (B.containerStopped = "containerStopped"),
        (B.containerDestroyed = "containerDestroyed"),
        (B.containerPaused = "containerPaused"),
        (B.containerPlay = "containerPlay"),
        (B.containerBuilt = "containerBuilt"),
        (B.particleAdded = "particleAdded"),
        (B.particleDestroyed = "particleDestroyed"),
        (B.particleRemoved = "particleRemoved");
      let OptionsColor = class OptionsColor {
        constructor() {
          this.value = "";
        }
        static create(t, e) {
          let i = new OptionsColor();
          return (
            i.load(t),
            void 0 !== e &&
              (isString(e) || isArray(e) ? i.load({ value: e }) : i.load(e)),
            i
          );
        }
        load(t) {
          !isNull(t) && (isNull(t.value) || (this.value = t.value));
        }
      };
      let Background = class Background {
        constructor() {
          (this.color = new OptionsColor()),
            (this.color.value = ""),
            (this.image = ""),
            (this.position = ""),
            (this.repeat = ""),
            (this.size = ""),
            (this.opacity = 1);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.color &&
              (this.color = OptionsColor.create(this.color, t.color)),
            void 0 !== t.image && (this.image = t.image),
            void 0 !== t.position && (this.position = t.position),
            void 0 !== t.repeat && (this.repeat = t.repeat),
            void 0 !== t.size && (this.size = t.size),
            void 0 === t.opacity || (this.opacity = t.opacity));
        }
      };
      let BackgroundMaskCover = class BackgroundMaskCover {
        constructor() {
          this.opacity = 1;
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.color &&
              (this.color = OptionsColor.create(this.color, t.color)),
            void 0 !== t.image && (this.image = t.image),
            void 0 === t.opacity || (this.opacity = t.opacity));
        }
      };
      let BackgroundMask = class BackgroundMask {
        constructor() {
          (this.composite = "destination-out"),
            (this.cover = new BackgroundMaskCover()),
            (this.enable = !1);
        }
        load(t) {
          if (!isNull(t)) {
            if (
              (void 0 !== t.composite && (this.composite = t.composite),
              void 0 !== t.cover)
            ) {
              let e = t.cover,
                i = isString(t.cover) ? { color: t.cover } : t.cover;
              this.cover.load(
                void 0 !== e.color || void 0 !== e.image ? e : { color: i }
              );
            }
            void 0 !== t.enable && (this.enable = t.enable);
          }
        }
      };
      let FullScreen = class FullScreen {
        constructor() {
          (this.enable = !0), (this.zIndex = 0);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 === t.zIndex || (this.zIndex = t.zIndex));
        }
      };
      let ClickEvent = class ClickEvent {
        constructor() {
          (this.enable = !1), (this.mode = []);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 === t.mode || (this.mode = t.mode));
        }
      };
      ((F = g || (g = {})).circle = "circle"), (F.rectangle = "rectangle");
      let DivEvent = class DivEvent {
        constructor() {
          (this.selectors = []),
            (this.enable = !1),
            (this.mode = []),
            (this.type = g.circle);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.selectors && (this.selectors = t.selectors),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 === t.type || (this.type = t.type));
        }
      };
      let Parallax = class Parallax {
        constructor() {
          (this.enable = !1), (this.force = 2), (this.smooth = 10);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.force && (this.force = t.force),
            void 0 === t.smooth || (this.smooth = t.smooth));
        }
      };
      let HoverEvent = class HoverEvent {
        constructor() {
          (this.enable = !1),
            (this.mode = []),
            (this.parallax = new Parallax());
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.mode && (this.mode = t.mode),
            this.parallax.load(t.parallax));
        }
      };
      let ResizeEvent = class ResizeEvent {
        constructor() {
          (this.delay = 0.5), (this.enable = !0);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.delay && (this.delay = t.delay),
            void 0 === t.enable || (this.enable = t.enable));
        }
      };
      let Events = class Events {
        constructor() {
          (this.onClick = new ClickEvent()),
            (this.onDiv = new DivEvent()),
            (this.onHover = new HoverEvent()),
            (this.resize = new ResizeEvent());
        }
        load(t) {
          if (isNull(t)) return;
          this.onClick.load(t.onClick);
          let e = t.onDiv;
          void 0 !== e &&
            (this.onDiv = executeOnSingleOrMultiple(e, (t) => {
              let e = new DivEvent();
              return e.load(t), e;
            })),
            this.onHover.load(t.onHover),
            this.resize.load(t.resize);
        }
      };
      let Modes = class Modes {
        constructor(t, e) {
          (this._engine = t), (this._container = e);
        }
        load(t) {
          if (isNull(t) || !this._container) return;
          let e = this._engine.interactors.get(this._container);
          if (e)
            for (let i of e) i.loadModeOptions && i.loadModeOptions(this, t);
        }
      };
      let Interactivity = class Interactivity {
        constructor(t, e) {
          (this.detectsOn = u.window),
            (this.events = new Events()),
            (this.modes = new Modes(t, e));
        }
        load(t) {
          if (isNull(t)) return;
          let e = t.detectsOn;
          void 0 !== e && (this.detectsOn = e),
            this.events.load(t.events),
            this.modes.load(t.modes);
        }
      };
      let ManualParticle = class ManualParticle {
        load(t) {
          !isNull(t) &&
            (t.position &&
              (this.position = {
                x: t.position.x ?? 50,
                y: t.position.y ?? 50,
                mode: t.position.mode ?? c.percent,
              }),
            t.options && (this.options = deepExtend({}, t.options)));
        }
      };
      ((A = m || (m = {})).screen = "screen"), (A.canvas = "canvas");
      let Responsive = class Responsive {
        constructor() {
          (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = m.canvas);
        }
        load(t) {
          !isNull(t) &&
            (isNull(t.maxWidth) || (this.maxWidth = t.maxWidth),
            isNull(t.mode) ||
              (t.mode === m.screen
                ? (this.mode = m.screen)
                : (this.mode = m.canvas)),
            isNull(t.options) || (this.options = deepExtend({}, t.options)));
        }
      };
      ((V = v || (v = {})).any = "any"), (V.dark = "dark"), (V.light = "light");
      let ThemeDefault = class ThemeDefault {
        constructor() {
          (this.auto = !1), (this.mode = v.any), (this.value = !1);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.auto && (this.auto = t.auto),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 === t.value || (this.value = t.value));
        }
      };
      let Theme = class Theme {
        constructor() {
          (this.name = ""), (this.default = new ThemeDefault());
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.name && (this.name = t.name),
            this.default.load(t.default),
            void 0 !== t.options && (this.options = deepExtend({}, t.options)));
        }
      };
      let AnimationOptions = class AnimationOptions {
        constructor() {
          (this.count = 0),
            (this.enable = !1),
            (this.speed = 1),
            (this.decay = 0),
            (this.delay = 0),
            (this.sync = !1);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.count && (this.count = setRangeValue(t.count)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = setRangeValue(t.speed)),
            void 0 !== t.decay && (this.decay = setRangeValue(t.decay)),
            void 0 !== t.delay && (this.delay = setRangeValue(t.delay)),
            void 0 === t.sync || (this.sync = t.sync));
        }
      };
      let RangedAnimationOptions = class RangedAnimationOptions extends AnimationOptions {
        constructor() {
          super(), (this.mode = a.auto), (this.startValue = h.random);
        }
        load(t) {
          super.load(t),
            isNull(t) ||
              (void 0 !== t.mode && (this.mode = t.mode),
              void 0 === t.startValue || (this.startValue = t.startValue));
        }
      };
      let ColorAnimation = class ColorAnimation extends AnimationOptions {
        constructor() {
          super(), (this.offset = 0), (this.sync = !0);
        }
        load(t) {
          super.load(t),
            isNull(t) ||
              void 0 === t.offset ||
              (this.offset = setRangeValue(t.offset));
        }
      };
      let HslAnimation = class HslAnimation {
        constructor() {
          (this.h = new ColorAnimation()),
            (this.s = new ColorAnimation()),
            (this.l = new ColorAnimation());
        }
        load(t) {
          isNull(t) || (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
        }
      };
      let AnimatableColor = class AnimatableColor extends OptionsColor {
        constructor() {
          super(), (this.animation = new HslAnimation());
        }
        static create(t, e) {
          let i = new AnimatableColor();
          return (
            i.load(t),
            void 0 !== e &&
              (isString(e) || isArray(e) ? i.load({ value: e }) : i.load(e)),
            i
          );
        }
        load(t) {
          if ((super.load(t), isNull(t))) return;
          let e = t.animation;
          void 0 !== e &&
            (void 0 !== e.enable
              ? this.animation.h.load(e)
              : this.animation.load(t.animation));
        }
      };
      ((q = y || (y = {})).absorb = "absorb"),
        (q.bounce = "bounce"),
        (q.destroy = "destroy");
      let CollisionsAbsorb = class CollisionsAbsorb {
        constructor() {
          this.speed = 2;
        }
        load(t) {
          isNull(t) || void 0 === t.speed || (this.speed = t.speed);
        }
      };
      let CollisionsOverlap = class CollisionsOverlap {
        constructor() {
          (this.enable = !0), (this.retries = 0);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 === t.retries || (this.retries = t.retries));
        }
      };
      let ValueWithRandom = class ValueWithRandom {
        constructor() {
          this.value = 0;
        }
        load(t) {
          !isNull(t) &&
            (isNull(t.value) || (this.value = setRangeValue(t.value)));
        }
      };
      let AnimationValueWithRandom = class AnimationValueWithRandom extends ValueWithRandom {
        constructor() {
          super(), (this.animation = new AnimationOptions());
        }
        load(t) {
          if ((super.load(t), isNull(t))) return;
          let e = t.animation;
          void 0 !== e && this.animation.load(e);
        }
      };
      let RangedAnimationValueWithRandom = class RangedAnimationValueWithRandom extends AnimationValueWithRandom {
        constructor() {
          super(), (this.animation = new RangedAnimationOptions());
        }
        load(t) {
          super.load(t);
        }
      };
      let ParticlesBounceFactor = class ParticlesBounceFactor extends ValueWithRandom {
        constructor() {
          super(), (this.value = 1);
        }
      };
      let ParticlesBounce = class ParticlesBounce {
        constructor() {
          (this.horizontal = new ParticlesBounceFactor()),
            (this.vertical = new ParticlesBounceFactor());
        }
        load(t) {
          isNull(t) ||
            (this.horizontal.load(t.horizontal),
            this.vertical.load(t.vertical));
        }
      };
      let Collisions = class Collisions {
        constructor() {
          (this.absorb = new CollisionsAbsorb()),
            (this.bounce = new ParticlesBounce()),
            (this.enable = !1),
            (this.maxSpeed = 50),
            (this.mode = y.bounce),
            (this.overlap = new CollisionsOverlap());
        }
        load(t) {
          isNull(t) ||
            (this.absorb.load(t.absorb),
            this.bounce.load(t.bounce),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.maxSpeed &&
              (this.maxSpeed = setRangeValue(t.maxSpeed)),
            void 0 !== t.mode && (this.mode = t.mode),
            this.overlap.load(t.overlap));
        }
      };
      let Effect = class Effect {
        constructor() {
          (this.close = !0),
            (this.fill = !0),
            (this.options = {}),
            (this.type = []);
        }
        load(t) {
          if (isNull(t)) return;
          let e = t.options;
          if (void 0 !== e)
            for (let t in e) {
              let i = e[t];
              i && (this.options[t] = deepExtend(this.options[t] ?? {}, i));
            }
          void 0 !== t.close && (this.close = t.close),
            void 0 !== t.fill && (this.fill = t.fill),
            void 0 !== t.type && (this.type = t.type);
        }
      };
      let MoveAngle = class MoveAngle {
        constructor() {
          (this.offset = 0), (this.value = 90);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.offset && (this.offset = setRangeValue(t.offset)),
            void 0 !== t.value && (this.value = setRangeValue(t.value)));
        }
      };
      let MoveAttract = class MoveAttract {
        constructor() {
          (this.distance = 200),
            (this.enable = !1),
            (this.rotate = { x: 3e3, y: 3e3 });
        }
        load(t) {
          if (
            !isNull(t) &&
            (void 0 !== t.distance &&
              (this.distance = setRangeValue(t.distance)),
            void 0 !== t.enable && (this.enable = t.enable),
            t.rotate)
          ) {
            let e = t.rotate.x;
            void 0 !== e && (this.rotate.x = e);
            let i = t.rotate.y;
            void 0 !== i && (this.rotate.y = i);
          }
        }
      };
      let MoveCenter = class MoveCenter {
        constructor() {
          (this.x = 50),
            (this.y = 50),
            (this.mode = c.percent),
            (this.radius = 0);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.x && (this.x = t.x),
            void 0 !== t.y && (this.y = t.y),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 === t.radius || (this.radius = t.radius));
        }
      };
      let MoveGravity = class MoveGravity {
        constructor() {
          (this.acceleration = 9.81),
            (this.enable = !1),
            (this.inverse = !1),
            (this.maxSpeed = 50);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.acceleration &&
              (this.acceleration = setRangeValue(t.acceleration)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.inverse && (this.inverse = t.inverse),
            void 0 !== t.maxSpeed &&
              (this.maxSpeed = setRangeValue(t.maxSpeed)));
        }
      };
      let MovePath = class MovePath {
        constructor() {
          (this.clamp = !0),
            (this.delay = new ValueWithRandom()),
            (this.enable = !1),
            (this.options = {});
        }
        load(t) {
          !isNull(t) &&
            (void 0 !== t.clamp && (this.clamp = t.clamp),
            this.delay.load(t.delay),
            void 0 !== t.enable && (this.enable = t.enable),
            (this.generator = t.generator),
            t.options && (this.options = deepExtend(this.options, t.options)));
        }
      };
      let MoveTrailFill = class MoveTrailFill {
        load(t) {
          isNull(t) ||
            (void 0 !== t.color &&
              (this.color = OptionsColor.create(this.color, t.color)),
            void 0 === t.image || (this.image = t.image));
        }
      };
      let MoveTrail = class MoveTrail {
        constructor() {
          (this.enable = !1),
            (this.length = 10),
            (this.fill = new MoveTrailFill());
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.fill && this.fill.load(t.fill),
            void 0 === t.length || (this.length = t.length));
        }
      };
      ((G = b || (b = {})).bounce = "bounce"),
        (G.none = "none"),
        (G.out = "out"),
        (G.destroy = "destroy"),
        (G.split = "split");
      let OutModes = class OutModes {
        constructor() {
          this.default = b.out;
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.default && (this.default = t.default),
            (this.bottom = t.bottom ?? t.default),
            (this.left = t.left ?? t.default),
            (this.right = t.right ?? t.default),
            (this.top = t.top ?? t.default));
        }
      };
      let Spin = class Spin {
        constructor() {
          (this.acceleration = 0), (this.enable = !1);
        }
        load(t) {
          !isNull(t) &&
            (void 0 !== t.acceleration &&
              (this.acceleration = setRangeValue(t.acceleration)),
            void 0 !== t.enable && (this.enable = t.enable),
            t.position && (this.position = deepExtend({}, t.position)));
        }
      };
      let Move = class Move {
        constructor() {
          (this.angle = new MoveAngle()),
            (this.attract = new MoveAttract()),
            (this.center = new MoveCenter()),
            (this.decay = 0),
            (this.distance = {}),
            (this.direction = s.none),
            (this.drift = 0),
            (this.enable = !1),
            (this.gravity = new MoveGravity()),
            (this.path = new MovePath()),
            (this.outModes = new OutModes()),
            (this.random = !1),
            (this.size = !1),
            (this.speed = 2),
            (this.spin = new Spin()),
            (this.straight = !1),
            (this.trail = new MoveTrail()),
            (this.vibrate = !1),
            (this.warp = !1);
        }
        load(t) {
          if (isNull(t)) return;
          this.angle.load(isNumber(t.angle) ? { value: t.angle } : t.angle),
            this.attract.load(t.attract),
            this.center.load(t.center),
            void 0 !== t.decay && (this.decay = setRangeValue(t.decay)),
            void 0 !== t.direction && (this.direction = t.direction),
            void 0 !== t.distance &&
              (this.distance = isNumber(t.distance)
                ? { horizontal: t.distance, vertical: t.distance }
                : { ...t.distance }),
            void 0 !== t.drift && (this.drift = setRangeValue(t.drift)),
            void 0 !== t.enable && (this.enable = t.enable),
            this.gravity.load(t.gravity);
          let e = t.outModes;
          void 0 !== e &&
            (isObject(e)
              ? this.outModes.load(e)
              : this.outModes.load({ default: e })),
            this.path.load(t.path),
            void 0 !== t.random && (this.random = t.random),
            void 0 !== t.size && (this.size = t.size),
            void 0 !== t.speed && (this.speed = setRangeValue(t.speed)),
            this.spin.load(t.spin),
            void 0 !== t.straight && (this.straight = t.straight),
            this.trail.load(t.trail),
            void 0 !== t.vibrate && (this.vibrate = t.vibrate),
            void 0 !== t.warp && (this.warp = t.warp);
        }
      };
      let OpacityAnimation = class OpacityAnimation extends RangedAnimationOptions {
        constructor() {
          super(), (this.destroy = r.none), (this.speed = 2);
        }
        load(t) {
          super.load(t),
            isNull(t) || void 0 === t.destroy || (this.destroy = t.destroy);
        }
      };
      let Opacity = class Opacity extends RangedAnimationValueWithRandom {
        constructor() {
          super(), (this.animation = new OpacityAnimation()), (this.value = 1);
        }
        load(t) {
          if (isNull(t)) return;
          super.load(t);
          let e = t.animation;
          void 0 !== e && this.animation.load(e);
        }
      };
      let ParticlesDensity = class ParticlesDensity {
        constructor() {
          (this.enable = !1), (this.width = 1920), (this.height = 1080);
        }
        load(t) {
          if (isNull(t)) return;
          void 0 !== t.enable && (this.enable = t.enable);
          let e = t.width;
          void 0 !== e && (this.width = e);
          let i = t.height;
          void 0 !== i && (this.height = i);
        }
      };
      ((U = w || (w = {})).delete = "delete"), (U.wait = "wait");
      let ParticlesNumberLimit = class ParticlesNumberLimit {
        constructor() {
          (this.mode = w.delete), (this.value = 0);
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.mode && (this.mode = t.mode),
            void 0 === t.value || (this.value = t.value));
        }
      };
      let ParticlesNumber = class ParticlesNumber {
        constructor() {
          (this.density = new ParticlesDensity()),
            (this.limit = new ParticlesNumberLimit()),
            (this.value = 0);
        }
        load(t) {
          isNull(t) ||
            (this.density.load(t.density),
            this.limit.load(t.limit),
            void 0 === t.value || (this.value = t.value));
        }
      };
      let Shadow = class Shadow {
        constructor() {
          (this.blur = 0),
            (this.color = new OptionsColor()),
            (this.enable = !1),
            (this.offset = { x: 0, y: 0 }),
            (this.color.value = "#000");
        }
        load(t) {
          !isNull(t) &&
            (void 0 !== t.blur && (this.blur = t.blur),
            (this.color = OptionsColor.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.offset &&
              (void 0 !== t.offset.x && (this.offset.x = t.offset.x),
              void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
        }
      };
      let Shape = class Shape {
        constructor() {
          (this.close = !0),
            (this.fill = !0),
            (this.options = {}),
            (this.type = "circle");
        }
        load(t) {
          if (isNull(t)) return;
          let e = t.options;
          if (void 0 !== e)
            for (let t in e) {
              let i = e[t];
              i && (this.options[t] = deepExtend(this.options[t] ?? {}, i));
            }
          void 0 !== t.close && (this.close = t.close),
            void 0 !== t.fill && (this.fill = t.fill),
            void 0 !== t.type && (this.type = t.type);
        }
      };
      let SizeAnimation = class SizeAnimation extends RangedAnimationOptions {
        constructor() {
          super(), (this.destroy = r.none), (this.speed = 5);
        }
        load(t) {
          super.load(t),
            isNull(t) || void 0 === t.destroy || (this.destroy = t.destroy);
        }
      };
      let Size = class Size extends RangedAnimationValueWithRandom {
        constructor() {
          super(), (this.animation = new SizeAnimation()), (this.value = 3);
        }
        load(t) {
          if ((super.load(t), isNull(t))) return;
          let e = t.animation;
          void 0 !== e && this.animation.load(e);
        }
      };
      let Stroke = class Stroke {
        constructor() {
          this.width = 0;
        }
        load(t) {
          isNull(t) ||
            (void 0 !== t.color &&
              (this.color = AnimatableColor.create(this.color, t.color)),
            void 0 !== t.width && (this.width = setRangeValue(t.width)),
            void 0 !== t.opacity && (this.opacity = setRangeValue(t.opacity)));
        }
      };
      let ZIndex = class ZIndex extends ValueWithRandom {
        constructor() {
          super(),
            (this.opacityRate = 1),
            (this.sizeRate = 1),
            (this.velocityRate = 1);
        }
        load(t) {
          super.load(t),
            isNull(t) ||
              (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate),
              void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate),
              void 0 === t.velocityRate ||
                (this.velocityRate = t.velocityRate));
        }
      };
      let ParticlesOptions = class ParticlesOptions {
        constructor(t, e) {
          (this._engine = t),
            (this._container = e),
            (this.bounce = new ParticlesBounce()),
            (this.collisions = new Collisions()),
            (this.color = new AnimatableColor()),
            (this.color.value = "#fff"),
            (this.effect = new Effect()),
            (this.groups = {}),
            (this.move = new Move()),
            (this.number = new ParticlesNumber()),
            (this.opacity = new Opacity()),
            (this.reduceDuplicates = !1),
            (this.shadow = new Shadow()),
            (this.shape = new Shape()),
            (this.size = new Size()),
            (this.stroke = new Stroke()),
            (this.zIndex = new ZIndex());
        }
        load(t) {
          if (isNull(t)) return;
          if (void 0 !== t.groups)
            for (let e of Object.keys(t.groups)) {
              if (!Object.hasOwn(t.groups, e)) continue;
              let i = t.groups[e];
              void 0 !== i &&
                (this.groups[e] = deepExtend(this.groups[e] ?? {}, i));
            }
          void 0 !== t.reduceDuplicates &&
            (this.reduceDuplicates = t.reduceDuplicates),
            this.bounce.load(t.bounce),
            this.color.load(AnimatableColor.create(this.color, t.color)),
            this.effect.load(t.effect),
            this.move.load(t.move),
            this.number.load(t.number),
            this.opacity.load(t.opacity),
            this.shape.load(t.shape),
            this.size.load(t.size),
            this.shadow.load(t.shadow),
            this.zIndex.load(t.zIndex),
            this.collisions.load(t.collisions),
            void 0 !== t.interactivity &&
              (this.interactivity = deepExtend({}, t.interactivity));
          let e = t.stroke;
          if (
            (e &&
              (this.stroke = executeOnSingleOrMultiple(e, (t) => {
                let e = new Stroke();
                return e.load(t), e;
              })),
            this._container)
          ) {
            let e = this._engine.updaters.get(this._container);
            if (e) for (let i of e) i.loadOptions && i.loadOptions(this, t);
            let i = this._engine.interactors.get(this._container);
            if (i)
              for (let e of i)
                e.loadParticlesOptions && e.loadParticlesOptions(this, t);
          }
        }
      };
      function loadOptions(t, ...e) {
        for (let i of e) t.load(i);
      }
      function loadParticlesOptions(t, e, ...i) {
        let s = new ParticlesOptions(t, e);
        return loadOptions(s, ...i), s;
      }
      let Options = class Options {
        constructor(t, e) {
          (this._findDefaultTheme = (t) =>
            this.themes.find((e) => e.default.value && e.default.mode === t) ??
            this.themes.find(
              (t) => t.default.value && t.default.mode === v.any
            )),
            (this._importPreset = (t) => {
              this.load(this._engine.getPreset(t));
            }),
            (this._engine = t),
            (this._container = e),
            (this.autoPlay = !0),
            (this.background = new Background()),
            (this.backgroundMask = new BackgroundMask()),
            (this.clear = !0),
            (this.defaultThemes = {}),
            (this.delay = 0),
            (this.fullScreen = new FullScreen()),
            (this.detectRetina = !0),
            (this.duration = 0),
            (this.fpsLimit = 120),
            (this.interactivity = new Interactivity(t, e)),
            (this.manualParticles = []),
            (this.particles = loadParticlesOptions(
              this._engine,
              this._container
            )),
            (this.pauseOnBlur = !0),
            (this.pauseOnOutsideViewport = !0),
            (this.responsive = []),
            (this.smooth = !1),
            (this.style = {}),
            (this.themes = []),
            (this.zLayers = 100);
        }
        load(t) {
          if (isNull(t)) return;
          void 0 !== t.preset &&
            executeOnSingleOrMultiple(t.preset, (t) => this._importPreset(t)),
            void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
            void 0 !== t.clear && (this.clear = t.clear),
            void 0 !== t.key && (this.key = t.key),
            void 0 !== t.name && (this.name = t.name),
            void 0 !== t.delay && (this.delay = setRangeValue(t.delay));
          let e = t.detectRetina;
          void 0 !== e && (this.detectRetina = e),
            void 0 !== t.duration &&
              (this.duration = setRangeValue(t.duration));
          let i = t.fpsLimit;
          void 0 !== i && (this.fpsLimit = i),
            void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
            void 0 !== t.pauseOnOutsideViewport &&
              (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
            void 0 !== t.zLayers && (this.zLayers = t.zLayers),
            this.background.load(t.background);
          let s = t.fullScreen;
          isBoolean(s) ? (this.fullScreen.enable = s) : this.fullScreen.load(s),
            this.backgroundMask.load(t.backgroundMask),
            this.interactivity.load(t.interactivity),
            t.manualParticles &&
              (this.manualParticles = t.manualParticles.map((t) => {
                let e = new ManualParticle();
                return e.load(t), e;
              })),
            this.particles.load(t.particles),
            (this.style = deepExtend(this.style, t.style)),
            this._engine.loadOptions(this, t),
            void 0 !== t.smooth && (this.smooth = t.smooth);
          let a = this._engine.interactors.get(this._container);
          if (a) for (let e of a) e.loadOptions && e.loadOptions(this, t);
          if (void 0 !== t.responsive)
            for (let e of t.responsive) {
              let t = new Responsive();
              t.load(e), this.responsive.push(t);
            }
          if (
            (this.responsive.sort((t, e) => t.maxWidth - e.maxWidth),
            void 0 !== t.themes)
          )
            for (let e of t.themes) {
              let t = this.themes.find((t) => t.name === e.name);
              if (t) t.load(e);
              else {
                let t = new Theme();
                t.load(e), this.themes.push(t);
              }
            }
          (this.defaultThemes.dark = this._findDefaultTheme(v.dark)?.name),
            (this.defaultThemes.light = this._findDefaultTheme(v.light)?.name);
        }
        setResponsive(t, e, i) {
          this.load(i);
          let s = this.responsive.find((i) =>
            i.mode === m.screen && screen
              ? i.maxWidth > screen.availWidth
              : i.maxWidth * e > t
          );
          return this.load(s?.options), s?.maxWidth;
        }
        setTheme(t) {
          if (t) {
            let e = this.themes.find((e) => e.name === t);
            e && this.load(e.options);
          } else {
            let t = safeMatchMedia("(prefers-color-scheme: dark)"),
              e = t?.matches,
              i = this._findDefaultTheme(e ? v.dark : v.light);
            i && this.load(i.options);
          }
        }
      };
      ((W = x || (x = {})).external = "external"), (W.particles = "particles");
      let InteractionManager = class InteractionManager {
        constructor(t, e) {
          (this.container = e),
            (this._engine = t),
            (this._interactors = []),
            (this._externalInteractors = []),
            (this._particleInteractors = []);
        }
        externalInteract(t) {
          for (let e of this._externalInteractors)
            e.isEnabled() && e.interact(t);
        }
        handleClickMode(t) {
          for (let e of this._externalInteractors) e.handleClickMode?.(t);
        }
        async init() {
          for (let t of ((this._interactors = await this._engine.getInteractors(
            this.container,
            !0
          )),
          (this._externalInteractors = []),
          (this._particleInteractors = []),
          this._interactors)) {
            switch (t.type) {
              case x.external:
                this._externalInteractors.push(t);
                break;
              case x.particles:
                this._particleInteractors.push(t);
            }
            t.init();
          }
        }
        particlesInteract(t, e) {
          for (let i of this._externalInteractors) i.clear(t, e);
          for (let i of this._particleInteractors)
            i.isEnabled(t) && i.interact(t, e);
        }
        reset(t) {
          for (let e of this._externalInteractors) e.isEnabled() && e.reset(t);
          for (let e of this._particleInteractors) e.isEnabled(t) && e.reset(t);
        }
      };
      function fixOutMode(t) {
        if (!isInArray(t.outMode, t.checkModes)) return;
        let e = t.radius * tn;
        t.coord > t.maxCoord - e
          ? t.setCb(-t.radius)
          : t.coord < e && t.setCb(t.radius);
      }
      ((H = _ || (_ = {})).normal = "normal"),
        (H.inside = "inside"),
        (H.outside = "outside");
      let Particle = class Particle {
        constructor(t, e) {
          (this.container = e),
            (this._calcPosition = (t, e, i, s = td) => {
              var a;
              for (let s of t.plugins.values()) {
                let t =
                  void 0 !== s.particlePosition
                    ? s.particlePosition(e, this)
                    : void 0;
                if (t) return Vector3d.create(t.x, t.y, i);
              }
              let o = t.canvas.size,
                r =
                  ((a = { size: o, position: e }),
                  {
                    x: a.position?.x ?? getRandom() * a.size.width,
                    y: a.position?.y ?? getRandom() * a.size.height,
                  }),
                l = Vector3d.create(r.x, r.y, i),
                c = this.getRadius(),
                h = this.options.move.outModes,
                fixHorizontal = (e) => {
                  fixOutMode({
                    outMode: e,
                    checkModes: [b.bounce],
                    coord: l.x,
                    maxCoord: t.canvas.size.width,
                    setCb: (t) => (l.x += t),
                    radius: c,
                  });
                },
                fixVertical = (e) => {
                  fixOutMode({
                    outMode: e,
                    checkModes: [b.bounce],
                    coord: l.y,
                    maxCoord: t.canvas.size.height,
                    setCb: (t) => (l.y += t),
                    radius: c,
                  });
                };
              return (fixHorizontal(h.left ?? h.default),
              fixHorizontal(h.right ?? h.default),
              fixVertical(h.top ?? h.default),
              fixVertical(h.bottom ?? h.default),
              this._checkOverlap(l, s))
                ? this._calcPosition(t, void 0, i, s + 1)
                : l;
            }),
            (this._calculateVelocity = () => {
              let t = (function (t) {
                  let e = Vector.origin;
                  return (e.length = 1), (e.angle = t), e;
                })(this.direction),
                e = t.copy(),
                i = this.options.move;
              if (i.direction === s.inside || i.direction === s.outside)
                return e;
              let a = degToRad(getRangeValue(i.angle.value)),
                o = degToRad(getRangeValue(i.angle.offset)),
                r = { left: o - a * te, right: o + a * te };
              return (
                i.straight ||
                  (e.angle += randomInRange(setRangeValue(r.left, r.right))),
                i.random &&
                  "number" == typeof i.speed &&
                  (e.length *= getRandom()),
                e
              );
            }),
            (this._checkOverlap = (t, e = td) => {
              let i = this.options.collisions,
                s = this.getRadius();
              if (!i.enable) return !1;
              let a = i.overlap;
              if (a.enable) return !1;
              let o = a.retries;
              if (o >= 0 && e > o)
                throw Error(`${J} particle is overlapping and can't be placed`);
              return !!this.container.particles.find(
                (e) => getDistance(t, e.position) < s + e.getRadius()
              );
            }),
            (this._getRollColor = (t) => {
              if (!t || !this.roll || (!this.backColor && !this.roll.alter))
                return t;
              let e = this.roll.horizontal && this.roll.vertical ? 1 * tn : 1,
                i = this.roll.horizontal ? Math.PI * te : 0,
                s =
                  Math.floor(((this.roll.angle ?? 0) + i) / (Math.PI / e)) % tn;
              if (!s) return t;
              if (this.backColor) return this.backColor;
              if (this.roll.alter) {
                var a, o;
                return (
                  (a = this.roll.alter.type),
                  (o = this.roll.alter.value),
                  { h: t.h, s: t.s, l: t.l + (a === d.darken ? -1 : 1) * o }
                );
              }
              return t;
            }),
            (this._initPosition = (t) => {
              let e = this.container,
                i = getRangeValue(this.options.zIndex.value);
              (this.position = this._calcPosition(
                e,
                t,
                clamp(i, 0, e.zLayers)
              )),
                (this.initialPosition = this.position.copy());
              let a = e.canvas.size;
              switch (
                ((this.moveCenter = {
                  ...getPositionOrSize(this.options.move.center, a),
                  radius: this.options.move.center.radius ?? 0,
                  mode: this.options.move.center.mode ?? c.percent,
                }),
                (this.direction = (function (t, e, i) {
                  if (isNumber(t)) return degToRad(t);
                  switch (t) {
                    case s.top:
                      return -Math.PI * te;
                    case s.topRight:
                      return -(0.25 * Math.PI);
                    case s.right:
                      return 0;
                    case s.bottomRight:
                      return 0.25 * Math.PI;
                    case s.bottom:
                      return Math.PI * te;
                    case s.bottomLeft:
                      return Math.PI * tu;
                    case s.left:
                      return Math.PI;
                    case s.topLeft:
                      return -Math.PI * tu;
                    case s.inside:
                      return Math.atan2(i.y - e.y, i.x - e.x);
                    case s.outside:
                      return Math.atan2(e.y - i.y, e.x - i.x);
                    default:
                      return getRandom() * tr;
                  }
                })(
                  this.options.move.direction,
                  this.position,
                  this.moveCenter
                )),
                this.options.move.direction)
              ) {
                case s.inside:
                  this.outType = _.inside;
                  break;
                case s.outside:
                  this.outType = _.outside;
              }
              this.offset = Vector.origin;
            }),
            (this._engine = t);
        }
        destroy(t) {
          if (this.unbreakable || this.destroyed) return;
          (this.destroyed = !0),
            (this.bubble.inRange = !1),
            (this.slow.inRange = !1);
          let e = this.container,
            i = this.pathGenerator,
            s = e.shapeDrawers.get(this.shape);
          for (let i of (s?.particleDestroy?.(this), e.plugins.values()))
            i.particleDestroyed?.(this, t);
          for (let i of e.particles.updaters) i.particleDestroyed?.(this, t);
          i?.reset(this),
            this._engine.dispatchEvent(p.particleDestroyed, {
              container: this.container,
              data: { particle: this },
            });
        }
        draw(t) {
          let e = this.container,
            i = e.canvas;
          for (let s of e.plugins.values()) i.drawParticlePlugin(s, this, t);
          i.drawParticle(this, t);
        }
        getFillColor() {
          return this._getRollColor(
            this.bubble.color ?? getHslFromAnimation(this.color)
          );
        }
        getMass() {
          return this.getRadius() ** 2 * Math.PI * te;
        }
        getPosition() {
          return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z,
          };
        }
        getRadius() {
          return this.bubble.radius ?? this.size.value;
        }
        getStrokeColor() {
          return this._getRollColor(
            this.bubble.color ?? getHslFromAnimation(this.strokeColor)
          );
        }
        init(t, e, i, s) {
          let a = this.container,
            o = this._engine;
          (this.id = t),
            (this.group = s),
            (this.effectClose = !0),
            (this.effectFill = !0),
            (this.shapeClose = !0),
            (this.shapeFill = !0),
            (this.pathRotation = !1),
            (this.lastPathTime = 0),
            (this.destroyed = !1),
            (this.unbreakable = !1),
            (this.isRotating = !1),
            (this.rotation = 0),
            (this.misplaced = !1),
            (this.retina = { maxDistance: {} }),
            (this.outType = _.normal),
            (this.ignoresResizeRatio = !0);
          let r = a.retina.pixelRatio,
            l = a.actualOptions,
            c = loadParticlesOptions(this._engine, a, l.particles),
            { reduceDuplicates: h } = c,
            d = c.effect.type,
            u = c.shape.type;
          (this.effect = itemFromSingleOrMultiple(d, this.id, h)),
            (this.shape = itemFromSingleOrMultiple(u, this.id, h));
          let p = c.effect,
            g = c.shape;
          if (i) {
            if (i.effect?.type) {
              let t = i.effect.type,
                e = itemFromSingleOrMultiple(t, this.id, h);
              e && ((this.effect = e), p.load(i.effect));
            }
            if (i.shape?.type) {
              let t = i.shape.type,
                e = itemFromSingleOrMultiple(t, this.id, h);
              e && ((this.shape = e), g.load(i.shape));
            }
          }
          if (this.effect === to) {
            let t = [...this.container.effectDrawers.keys()];
            this.effect = t[Math.floor(Math.random() * t.length)];
          }
          if (this.shape === to) {
            let t = [...this.container.shapeDrawers.keys()];
            this.shape = t[Math.floor(Math.random() * t.length)];
          }
          (this.effectData = (function (t, e, i, s) {
            let a = e.options[t];
            if (a)
              return deepExtend(
                { close: e.close, fill: e.fill },
                itemFromSingleOrMultiple(a, i, s)
              );
          })(this.effect, p, this.id, h)),
            (this.shapeData = (function (t, e, i, s) {
              let a = e.options[t];
              if (a)
                return deepExtend(
                  { close: e.close, fill: e.fill },
                  itemFromSingleOrMultiple(a, i, s)
                );
            })(this.shape, g, this.id, h)),
            c.load(i);
          let m = this.effectData;
          m && c.load(m.particles);
          let v = this.shapeData;
          v && c.load(v.particles);
          let y = new Interactivity(o, a);
          y.load(a.actualOptions.interactivity),
            y.load(c.interactivity),
            (this.interactivity = y),
            (this.effectFill = m?.fill ?? c.effect.fill),
            (this.effectClose = m?.close ?? c.effect.close),
            (this.shapeFill = v?.fill ?? c.shape.fill),
            (this.shapeClose = v?.close ?? c.shape.close),
            (this.options = c);
          let b = this.options.move.path;
          (this.pathDelay = getRangeValue(b.delay.value) * ti),
            b.generator &&
              ((this.pathGenerator = this._engine.getPathGenerator(
                b.generator
              )),
              this.pathGenerator &&
                a.addPath(b.generator, this.pathGenerator) &&
                this.pathGenerator.init(a)),
            a.retina.initParticle(this),
            (this.size = initParticleNumericAnimationValue(
              this.options.size,
              r
            )),
            (this.bubble = { inRange: !1 }),
            (this.slow = { inRange: !1, factor: 1 }),
            this._initPosition(e),
            (this.initialVelocity = this._calculateVelocity()),
            (this.velocity = this.initialVelocity.copy()),
            (this.moveDecay = 1 - getRangeValue(this.options.move.decay));
          let w = a.particles;
          w.setLastZIndex(this.position.z),
            (this.zIndexFactor = this.position.z / a.zLayers),
            (this.sides = 24);
          let x = a.effectDrawers.get(this.effect);
          !x &&
            (x = this._engine.getEffectDrawer(this.effect)) &&
            a.effectDrawers.set(this.effect, x),
            x?.loadEffect && x.loadEffect(this);
          let C = a.shapeDrawers.get(this.shape);
          !C &&
            (C = this._engine.getShapeDrawer(this.shape)) &&
            a.shapeDrawers.set(this.shape, C),
            C?.loadShape && C.loadShape(this);
          let k = C?.getSidesCount;
          for (let t of (k && (this.sides = k(this)),
          (this.spawning = !1),
          (this.shadowColor = rangeColorToRgb(
            this._engine,
            this.options.shadow.color
          )),
          w.updaters))
            t.init(this);
          for (let t of w.movers) t.init?.(this);
          for (let t of (x?.particleInit?.(a, this),
          C?.particleInit?.(a, this),
          a.plugins.values()))
            t.particleCreated?.(this);
        }
        isInsideCanvas() {
          let t = this.getRadius(),
            e = this.container.canvas.size,
            i = this.position;
          return (
            i.x >= -t && i.y >= -t && i.y <= e.height + t && i.x <= e.width + t
          );
        }
        isVisible() {
          return !this.destroyed && !this.spawning && this.isInsideCanvas();
        }
        reset() {
          for (let t of this.container.particles.updaters) t.reset?.(this);
        }
      };
      let Point = class Point {
        constructor(t, e) {
          (this.position = t), (this.particle = e);
        }
      };
      ((N = C || (C = {})).circle = "circle"), (N.rectangle = "rectangle");
      let BaseRange = class BaseRange {
        constructor(t, e, i) {
          (this.position = { x: t, y: e }), (this.type = i);
        }
      };
      let Circle = class Circle extends BaseRange {
        constructor(t, e, i) {
          super(t, e, C.circle), (this.radius = i);
        }
        contains(t) {
          return getDistance(t, this.position) <= this.radius;
        }
        intersects(t) {
          let e = this.position,
            i = t.position,
            s = { x: Math.abs(i.x - e.x), y: Math.abs(i.y - e.y) },
            a = this.radius;
          if (t instanceof Circle || t.type === C.circle) {
            let e = a + t.radius,
              i = Math.sqrt(s.x ** 2 + s.y ** 2);
            return e > i;
          }
          if (t instanceof Rectangle || t.type === C.rectangle) {
            let { width: e, height: i } = t.size,
              o = Math.pow(s.x - e, 2) + Math.pow(s.y - i, 2);
            return (
              o <= a ** 2 ||
              (s.x <= a + e && s.y <= a + i) ||
              s.x <= e ||
              s.y <= i
            );
          }
          return !1;
        }
      };
      let Rectangle = class Rectangle extends BaseRange {
        constructor(t, e, i, s) {
          super(t, e, C.rectangle), (this.size = { height: s, width: i });
        }
        contains(t) {
          let e = this.size.width,
            i = this.size.height,
            s = this.position;
          return t.x >= s.x && t.x <= s.x + e && t.y >= s.y && t.y <= s.y + i;
        }
        intersects(t) {
          if (t instanceof Circle) return t.intersects(this);
          let e = this.size.width,
            i = this.size.height,
            s = this.position,
            a = t.position,
            o = t instanceof Rectangle ? t.size : { width: 0, height: 0 },
            r = o.width,
            l = o.height;
          return (
            a.x < s.x + e && a.x + r > s.x && a.y < s.y + i && a.y + l > s.y
          );
        }
      };
      let QuadTree = class QuadTree {
        constructor(t, e) {
          (this.rectangle = t),
            (this.capacity = e),
            (this._subdivide = () => {
              let { x: t, y: e } = this.rectangle.position,
                { width: i, height: s } = this.rectangle.size,
                { capacity: a } = this;
              for (let o = 0; o < 4; o++) {
                let r = o % tn;
                this._subs.push(
                  new QuadTree(
                    new Rectangle(
                      t + i * te * r,
                      e + s * te * (Math.round(o * te) - r),
                      i * te,
                      s * te
                    ),
                    a
                  )
                );
              }
              this._divided = !0;
            }),
            (this._points = []),
            (this._divided = !1),
            (this._subs = []);
        }
        insert(t) {
          return (
            !!this.rectangle.contains(t.position) &&
            (this._points.length < this.capacity
              ? (this._points.push(t), !0)
              : (this._divided || this._subdivide(),
                this._subs.some((e) => e.insert(t))))
          );
        }
        query(t, e) {
          let i = [];
          if (!t.intersects(this.rectangle)) return [];
          for (let s of this._points)
            (!t.contains(s.position) &&
              getDistance(t.position, s.position) > s.particle.getRadius() &&
              (!e || e(s.particle))) ||
              i.push(s.particle);
          if (this._divided) for (let s of this._subs) i.push(...s.query(t, e));
          return i;
        }
        queryCircle(t, e, i) {
          return this.query(new Circle(t.x, t.y, e), i);
        }
        queryRectangle(t, e, i) {
          return this.query(new Rectangle(t.x, t.y, e.width, e.height), i);
        }
      };
      let qTreeRectangle = (t) => {
        let { height: e, width: i } = t;
        return new Rectangle(-0.25 * i, -0.25 * e, 1.5 * i, 1.5 * e);
      };
      let Particles = class Particles {
        constructor(t, e) {
          (this._addToPool = (...t) => {
            this._pool.push(...t);
          }),
            (this._applyDensity = (t, e, i) => {
              let s = t.number;
              if (!t.number.density?.enable) {
                void 0 === i
                  ? (this._limit = s.limit.value)
                  : s.limit && this._groupLimits.set(i, s.limit.value);
                return;
              }
              let a = this._initDensityFactor(s.density),
                o = s.value,
                r = s.limit.value > 0 ? s.limit.value : o,
                l = Math.min(o, r) * a + e,
                c = Math.min(
                  this.count,
                  this.filter((t) => t.group === i).length
                );
              void 0 === i
                ? (this._limit = s.limit.value * a)
                : this._groupLimits.set(i, s.limit.value * a),
                c < l
                  ? this.push(Math.abs(l - c), void 0, t, i)
                  : c > l && this.removeQuantity(c - l, i);
            }),
            (this._initDensityFactor = (t) => {
              let e = this._container;
              if (!e.canvas.element || !t.enable) return 1;
              let i = e.canvas.element,
                s = e.retina.pixelRatio;
              return (i.width * i.height) / (t.height * t.width * s ** 2);
            }),
            (this._pushParticle = (t, e, i, s) => {
              try {
                let a = this._pool.pop();
                a || (a = new Particle(this._engine, this._container)),
                  a.init(this._nextId, t, e, i);
                let o = !0;
                if ((s && (o = s(a)), !o)) return;
                return (
                  this._array.push(a),
                  this._zArray.push(a),
                  this._nextId++,
                  this._engine.dispatchEvent(p.particleAdded, {
                    container: this._container,
                    data: { particle: a },
                  }),
                  a
                );
              } catch (t) {
                tg.warning(`${J} adding particle: ${t}`);
              }
            }),
            (this._removeParticle = (t, e, i) => {
              let s = this._array[t];
              if (!s || s.group !== e) return !1;
              let a = this._zArray.indexOf(s);
              return (
                this._array.splice(t, 1),
                this._zArray.splice(a, 1),
                s.destroy(i),
                this._engine.dispatchEvent(p.particleRemoved, {
                  container: this._container,
                  data: { particle: s },
                }),
                this._addToPool(s),
                !0
              );
            }),
            (this._engine = t),
            (this._container = e),
            (this._nextId = 0),
            (this._array = []),
            (this._zArray = []),
            (this._pool = []),
            (this._limit = 0),
            (this._groupLimits = new Map()),
            (this._needsSort = !1),
            (this._lastZIndex = 0),
            (this._interactionManager = new InteractionManager(t, e)),
            (this._pluginsInitialized = !1);
          let i = e.canvas.size;
          (this.quadTree = new QuadTree(qTreeRectangle(i), 4)),
            (this.movers = []),
            (this.updaters = []);
        }
        get count() {
          return this._array.length;
        }
        addManualParticles() {
          let t = this._container,
            e = t.actualOptions;
          e.manualParticles.forEach((e) =>
            this.addParticle(
              e.position
                ? getPositionOrSize(e.position, t.canvas.size)
                : void 0,
              e.options
            )
          );
        }
        addParticle(t, e, i, s) {
          let a = this._container.actualOptions.particles.number.limit.mode,
            o =
              void 0 === i
                ? this._limit
                : this._groupLimits.get(i) ?? this._limit,
            r = this.count;
          if (o > 0)
            switch (a) {
              case w.delete: {
                let t = r + 1 - o;
                t > 0 && this.removeQuantity(t);
                break;
              }
              case w.wait:
                if (r >= o) return;
            }
          return this._pushParticle(t, e, i, s);
        }
        clear() {
          (this._array = []),
            (this._zArray = []),
            (this._pluginsInitialized = !1);
        }
        destroy() {
          (this._array = []),
            (this._zArray = []),
            (this.movers = []),
            (this.updaters = []);
        }
        draw(t) {
          let e = this._container,
            i = e.canvas;
          for (let s of (i.clear(), this.update(t), e.plugins.values()))
            i.drawPlugin(s, t);
          for (let e of this._zArray) e.draw(t);
        }
        filter(t) {
          return this._array.filter(t);
        }
        find(t) {
          return this._array.find(t);
        }
        get(t) {
          return this._array[t];
        }
        handleClickMode(t) {
          this._interactionManager.handleClickMode(t);
        }
        async init() {
          let t = this._container,
            e = t.actualOptions;
          (this._lastZIndex = 0),
            (this._needsSort = !1),
            await this.initPlugins();
          let i = !1;
          for (let e of t.plugins.values())
            if ((i = e.particlesInitialization?.() ?? i)) break;
          if ((this.addManualParticles(), !i)) {
            let t = e.particles,
              i = t.groups;
            for (let e in i) {
              let s = i[e];
              for (
                let i = this.count, a = 0;
                a < s.number?.value && i < t.number.value;
                i++, a++
              )
                this.addParticle(void 0, s, e);
            }
            for (let e = this.count; e < t.number.value; e++)
              this.addParticle();
          }
        }
        async initPlugins() {
          if (this._pluginsInitialized) return;
          let t = this._container;
          for (let e of ((this.movers = await this._engine.getMovers(t, !0)),
          (this.updaters = await this._engine.getUpdaters(t, !0)),
          await this._interactionManager.init(),
          t.pathGenerators.values()))
            e.init(t);
        }
        push(t, e, i, s) {
          for (let a = 0; a < t; a++) this.addParticle(e?.position, i, s);
        }
        async redraw() {
          this.clear(), await this.init(), this.draw({ value: 0, factor: 0 });
        }
        remove(t, e, i) {
          this.removeAt(this._array.indexOf(t), void 0, e, i);
        }
        removeAt(t, e = 1, i, s) {
          if (t < 0 || t > this.count) return;
          let a = 0;
          for (let o = t; a < e && o < this.count; o++)
            this._removeParticle(o, i, s) && (o--, a++);
        }
        removeQuantity(t, e) {
          this.removeAt(0, t, e);
        }
        setDensity() {
          let t = this._container.actualOptions,
            e = t.particles.groups;
          for (let t in e) this._applyDensity(e[t], 0, t);
          this._applyDensity(t.particles, t.manualParticles.length);
        }
        setLastZIndex(t) {
          (this._lastZIndex = t),
            (this._needsSort = this._needsSort || this._lastZIndex < t);
        }
        setResizeFactor(t) {
          this._resizeFactor = t;
        }
        update(t) {
          let e = this._container,
            i = new Set();
          for (let t of ((this.quadTree = new QuadTree(
            qTreeRectangle(e.canvas.size),
            4
          )),
          e.pathGenerators.values()))
            t.update();
          for (let i of e.plugins.values()) i.update?.(t);
          let s = this._resizeFactor;
          for (let e of this._array) {
            for (let i of (s &&
              !e.ignoresResizeRatio &&
              ((e.position.x *= s.width),
              (e.position.y *= s.height),
              (e.initialPosition.x *= s.width),
              (e.initialPosition.y *= s.height)),
            (e.ignoresResizeRatio = !1),
            this._interactionManager.reset(e),
            this._container.plugins.values())) {
              if (e.destroyed) break;
              i.particleUpdate?.(e, t);
            }
            for (let i of this.movers) i.isEnabled(e) && i.move(e, t);
            if (e.destroyed) {
              i.add(e);
              continue;
            }
            this.quadTree.insert(new Point(e.getPosition(), e));
          }
          if (i.size) {
            let checkDelete = (t) => !i.has(t);
            for (let t of ((this._array = this.filter(checkDelete)),
            (this._zArray = this._zArray.filter(checkDelete)),
            i))
              this._engine.dispatchEvent(p.particleRemoved, {
                container: this._container,
                data: { particle: t },
              });
            this._addToPool(...i);
          }
          for (let e of (this._interactionManager.externalInteract(t),
          this._array)) {
            for (let i of this.updaters) i.update(e, t);
            e.destroyed ||
              e.spawning ||
              this._interactionManager.particlesInteract(e, t);
          }
          if ((delete this._resizeFactor, this._needsSort)) {
            let t = this._zArray;
            t.sort((t, e) => e.position.z - t.position.z || t.id - e.id),
              (this._lastZIndex = t[t.length - 1].position.z),
              (this._needsSort = !1);
          }
        }
      };
      let Retina = class Retina {
        constructor(t) {
          (this.container = t), (this.pixelRatio = 1), (this.reduceFactor = 1);
        }
        init() {
          let t = this.container,
            e = t.actualOptions;
          (this.pixelRatio =
            !e.detectRetina || isSsr() ? 1 : window.devicePixelRatio),
            (this.reduceFactor = 1);
          let i = this.pixelRatio,
            s = t.canvas;
          if (s.element) {
            let t = s.element;
            (s.size.width = t.offsetWidth * i),
              (s.size.height = t.offsetHeight * i);
          }
          let a = e.particles,
            o = a.move;
          (this.maxSpeed = getRangeValue(o.gravity.maxSpeed) * i),
            (this.sizeAnimationSpeed =
              getRangeValue(a.size.animation.speed) * i);
        }
        initParticle(t) {
          let e = t.options,
            i = this.pixelRatio,
            s = e.move,
            a = s.distance,
            o = t.retina;
          (o.moveDrift = getRangeValue(s.drift) * i),
            (o.moveSpeed = getRangeValue(s.speed) * i),
            (o.sizeAnimationSpeed = getRangeValue(e.size.animation.speed) * i);
          let r = o.maxDistance;
          (r.horizontal = void 0 !== a.horizontal ? a.horizontal * i : void 0),
            (r.vertical = void 0 !== a.vertical ? a.vertical * i : void 0),
            (o.maxSpeed = getRangeValue(s.gravity.maxSpeed) * i);
        }
      };
      function guardCheck(t) {
        return t && !t.destroyed;
      }
      function loadContainerOptions(t, e, ...i) {
        let s = new Options(t, e);
        return loadOptions(s, ...i), s;
      }
      let Container = class Container {
        constructor(t, e, i) {
          (this._intersectionManager = (t) => {
            if (guardCheck(this) && this.actualOptions.pauseOnOutsideViewport)
              for (let e of t)
                e.target === this.interactivity.element &&
                  (e.isIntersecting ? this.play() : this.pause());
          }),
            (this._nextFrame = (t) => {
              try {
                if (
                  !this._smooth &&
                  void 0 !== this._lastFrameTime &&
                  t < this._lastFrameTime + ti / this.fpsLimit
                ) {
                  this.draw(!1);
                  return;
                }
                this._lastFrameTime ??= t;
                let e = (function (t, e = 60, i = !1) {
                  return { value: t, factor: i ? 60 / e : (60 * t) / ti };
                })(t - this._lastFrameTime, this.fpsLimit, this._smooth);
                if (
                  (this.addLifeTime(e.value),
                  (this._lastFrameTime = t),
                  e.value > ti)
                ) {
                  this.draw(!1);
                  return;
                }
                if ((this.particles.draw(e), !this.alive())) {
                  this.destroy();
                  return;
                }
                this.animationStatus && this.draw(!1);
              } catch (t) {
                tg.error(`${J} in animation loop`, t);
              }
            }),
            (this._engine = t),
            (this.id = Symbol(e)),
            (this.fpsLimit = 120),
            (this._smooth = !1),
            (this._delay = 0),
            (this._duration = 0),
            (this._lifeTime = 0),
            (this._firstStart = !0),
            (this.started = !1),
            (this.destroyed = !1),
            (this._paused = !0),
            (this._lastFrameTime = 0),
            (this.zLayers = 100),
            (this.pageHidden = !1),
            (this._clickHandlers = new Map()),
            (this._sourceOptions = i),
            (this._initialSourceOptions = i),
            (this.retina = new Retina(this)),
            (this.canvas = new Canvas(this, this._engine)),
            (this.particles = new Particles(this._engine, this)),
            (this.pathGenerators = new Map()),
            (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
            (this.plugins = new Map()),
            (this.effectDrawers = new Map()),
            (this.shapeDrawers = new Map()),
            (this._options = loadContainerOptions(this._engine, this)),
            (this.actualOptions = loadContainerOptions(this._engine, this)),
            (this._eventListeners = new EventListeners(this)),
            (this._intersectionObserver = (function (t) {
              if (!isSsr() && "undefined" != typeof IntersectionObserver)
                return new IntersectionObserver(t);
            })((t) => this._intersectionManager(t))),
            this._engine.dispatchEvent(p.containerBuilt, { container: this });
        }
        get animationStatus() {
          return !this._paused && !this.pageHidden && guardCheck(this);
        }
        get options() {
          return this._options;
        }
        get sourceOptions() {
          return this._sourceOptions;
        }
        addClickHandler(t) {
          if (!guardCheck(this)) return;
          let e = this.interactivity.element;
          if (!e) return;
          let clickOrTouchHandler = (e, i, s) => {
              if (!guardCheck(this)) return;
              let a = this.retina.pixelRatio,
                o = { x: i.x * a, y: i.y * a },
                r = this.particles.quadTree.queryCircle(o, s * a);
              t(e, r);
            },
            i = !1,
            s = !1;
          for (let [t, a] of (this._clickHandlers.set("click", (t) => {
            if (!guardCheck(this)) return;
            let e = { x: t.offsetX || t.clientX, y: t.offsetY || t.clientY };
            clickOrTouchHandler(t, e, 1);
          }),
          this._clickHandlers.set("touchstart", () => {
            guardCheck(this) && ((i = !0), (s = !1));
          }),
          this._clickHandlers.set("touchmove", () => {
            guardCheck(this) && (s = !0);
          }),
          this._clickHandlers.set("touchend", (t) => {
            if (guardCheck(this)) {
              if (i && !s) {
                let e = t.touches[t.touches.length - 1];
                if (!e && !(e = t.changedTouches[t.changedTouches.length - 1]))
                  return;
                let i = this.canvas.element,
                  s = i ? i.getBoundingClientRect() : void 0,
                  a = {
                    x: e.clientX - (s ? s.left : 0),
                    y: e.clientY - (s ? s.top : 0),
                  };
                clickOrTouchHandler(t, a, Math.max(e.radiusX, e.radiusY));
              }
              (i = !1), (s = !1);
            }
          }),
          this._clickHandlers.set("touchcancel", () => {
            guardCheck(this) && ((i = !1), (s = !1));
          }),
          this._clickHandlers))
            e.addEventListener(t, a);
        }
        addLifeTime(t) {
          this._lifeTime += t;
        }
        addPath(t, e, i = !1) {
          return (
            !(!guardCheck(this) || (!i && this.pathGenerators.has(t))) &&
            (this.pathGenerators.set(t, e), !0)
          );
        }
        alive() {
          return !this._duration || this._lifeTime <= this._duration;
        }
        clearClickHandlers() {
          if (guardCheck(this)) {
            for (let [t, e] of this._clickHandlers)
              this.interactivity.element?.removeEventListener(t, e);
            this._clickHandlers.clear();
          }
        }
        destroy(t = !0) {
          if (guardCheck(this)) {
            for (let t of (this.stop(),
            this.clearClickHandlers(),
            this.particles.destroy(),
            this.canvas.destroy(),
            this.effectDrawers.values()))
              t.destroy?.(this);
            for (let t of this.shapeDrawers.values()) t.destroy?.(this);
            for (let t of this.effectDrawers.keys())
              this.effectDrawers.delete(t);
            for (let t of this.shapeDrawers.keys()) this.shapeDrawers.delete(t);
            if ((this._engine.clearPlugins(this), (this.destroyed = !0), t)) {
              let t = this._engine.items,
                e = t.findIndex((t) => t === this);
              e >= 0 && t.splice(e, 1);
            }
            this._engine.dispatchEvent(p.containerDestroyed, {
              container: this,
            });
          }
        }
        draw(t) {
          if (!guardCheck(this)) return;
          let e = t,
            frame = (t) => {
              e && ((this._lastFrameTime = void 0), (e = !1)),
                this._nextFrame(t);
            };
          this._drawAnimationFrame = tf.nextFrame((t) => frame(t));
        }
        async export(t, e = {}) {
          for (let i of this.plugins.values()) {
            if (!i.export) continue;
            let s = await i.export(t, e);
            if (s.supported) return s.blob;
          }
          tg.error(`${J} - Export plugin with type ${t} not found`);
        }
        handleClickMode(t) {
          if (guardCheck(this))
            for (let e of (this.particles.handleClickMode(t),
            this.plugins.values()))
              e.handleClickMode?.(t);
        }
        async init() {
          if (!guardCheck(this)) return;
          let t = this._engine.getSupportedEffects();
          for (let e of t) {
            let t = this._engine.getEffectDrawer(e);
            t && this.effectDrawers.set(e, t);
          }
          let e = this._engine.getSupportedShapes();
          for (let t of e) {
            let e = this._engine.getShapeDrawer(t);
            e && this.shapeDrawers.set(t, e);
          }
          await this.particles.initPlugins(),
            (this._options = loadContainerOptions(
              this._engine,
              this,
              this._initialSourceOptions,
              this.sourceOptions
            )),
            (this.actualOptions = loadContainerOptions(
              this._engine,
              this,
              this._options
            ));
          let i = await this._engine.getAvailablePlugins(this);
          for (let [t, e] of i) this.plugins.set(t, e);
          this.retina.init(),
            await this.canvas.init(),
            this.updateActualOptions(),
            this.canvas.initBackground(),
            this.canvas.resize();
          let {
            zLayers: s,
            duration: a,
            delay: o,
            fpsLimit: r,
            smooth: l,
          } = this.actualOptions;
          for (let t of ((this.zLayers = s),
          (this._duration = getRangeValue(a) * ti),
          (this._delay = getRangeValue(o) * ti),
          (this._lifeTime = 0),
          (this.fpsLimit = r > 0 ? r : 120),
          (this._smooth = l),
          this.effectDrawers.values()))
            await t.init?.(this);
          for (let t of this.shapeDrawers.values()) await t.init?.(this);
          for (let t of this.plugins.values()) await t.init?.();
          for (let t of (this._engine.dispatchEvent(p.containerInit, {
            container: this,
          }),
          await this.particles.init(),
          this.particles.setDensity(),
          this.plugins.values()))
            t.particlesSetup?.();
          this._engine.dispatchEvent(p.particlesSetup, { container: this });
        }
        async loadTheme(t) {
          guardCheck(this) && ((this._currentTheme = t), await this.refresh());
        }
        pause() {
          if (guardCheck(this)) {
            if (void 0 !== this._drawAnimationFrame) {
              var t;
              (t = this._drawAnimationFrame),
                tf.cancel(t),
                delete this._drawAnimationFrame;
            }
            if (!this._paused) {
              for (let t of this.plugins.values()) t.pause?.();
              this.pageHidden || (this._paused = !0),
                this._engine.dispatchEvent(p.containerPaused, {
                  container: this,
                });
            }
          }
        }
        play(t) {
          if (!guardCheck(this)) return;
          let e = this._paused || t;
          if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = !1;
            return;
          }
          if ((this._paused && (this._paused = !1), e))
            for (let t of this.plugins.values()) t.play && t.play();
          this._engine.dispatchEvent(p.containerPlay, { container: this }),
            this.draw(e ?? !1);
        }
        async refresh() {
          if (guardCheck(this)) return this.stop(), this.start();
        }
        async reset(t) {
          if (guardCheck(this))
            return (
              (this._initialSourceOptions = t),
              (this._sourceOptions = t),
              (this._options = loadContainerOptions(
                this._engine,
                this,
                this._initialSourceOptions,
                this.sourceOptions
              )),
              (this.actualOptions = loadContainerOptions(
                this._engine,
                this,
                this._options
              )),
              this.refresh()
            );
        }
        async start() {
          guardCheck(this) &&
            !this.started &&
            (await this.init(),
            (this.started = !0),
            await new Promise((t) => {
              let start = async () => {
                for (let t of (this._eventListeners.addListeners(),
                this.interactivity.element instanceof HTMLElement &&
                  this._intersectionObserver &&
                  this._intersectionObserver.observe(
                    this.interactivity.element
                  ),
                this.plugins.values()))
                  await t.start?.();
                this._engine.dispatchEvent(p.containerStarted, {
                  container: this,
                }),
                  this.play(),
                  t();
              };
              this._delayTimeout = setTimeout(() => void start(), this._delay);
            }));
        }
        stop() {
          if (guardCheck(this) && this.started) {
            for (let t of (this._delayTimeout &&
              (clearTimeout(this._delayTimeout), delete this._delayTimeout),
            (this._firstStart = !0),
            (this.started = !1),
            this._eventListeners.removeListeners(),
            this.pause(),
            this.particles.clear(),
            this.canvas.stop(),
            this.interactivity.element instanceof HTMLElement &&
              this._intersectionObserver &&
              this._intersectionObserver.unobserve(this.interactivity.element),
            this.plugins.values()))
              t.stop?.();
            for (let t of this.plugins.keys()) this.plugins.delete(t);
            (this._sourceOptions = this._options),
              this._engine.dispatchEvent(p.containerStopped, {
                container: this,
              });
          }
        }
        updateActualOptions() {
          this.actualOptions.responsive = [];
          let t = this.actualOptions.setResponsive(
            this.canvas.size.width,
            this.retina.pixelRatio,
            this._options
          );
          return (
            this.actualOptions.setTheme(this._currentTheme),
            this._responsiveMaxWidth !== t &&
              ((this._responsiveMaxWidth = t), !0)
          );
        }
      };
      let EventDispatcher = class EventDispatcher {
        constructor() {
          this._listeners = new Map();
        }
        addEventListener(t, e) {
          this.removeEventListener(t, e);
          let i = this._listeners.get(t);
          i || ((i = []), this._listeners.set(t, i)), i.push(e);
        }
        dispatchEvent(t, e) {
          let i = this._listeners.get(t);
          i?.forEach((t) => t(e));
        }
        hasEventListener(t) {
          return !!this._listeners.get(t);
        }
        removeAllEventListeners(t) {
          t ? this._listeners.delete(t) : (this._listeners = new Map());
        }
        removeEventListener(t, e) {
          let i = this._listeners.get(t);
          if (!i) return;
          let s = i.length,
            a = i.indexOf(e);
          a < 0 || (1 === s ? this._listeners.delete(t) : i.splice(a, 1));
        }
      };
      async function getItemsFromInitializer(t, e, i, s = !1) {
        let a = e.get(t);
        return (
          (!a || s) &&
            ((a = await Promise.all([...i.values()].map((e) => e(t)))),
            e.set(t, a)),
          a
        );
      }
      async function getDataFromUrl(t) {
        let e = itemFromSingleOrMultiple(t.url, t.index);
        if (!e) return t.fallback;
        let i = await fetch(e);
        return i.ok
          ? await i.json()
          : (tg.error(`${J} ${i.status} while retrieving config file`),
            t.fallback);
      }
      let getCanvasFromContainer = (t) => {
          let e;
          if (t instanceof HTMLCanvasElement || t.tagName.toLowerCase() === th)
            (e = t).dataset[Y] || (e.dataset[Y] = tc);
          else {
            let i = t.getElementsByTagName(th);
            i.length
              ? ((e = i[0]).dataset[Y] = tc)
              : (((e = document.createElement(th)).dataset[Y] = tl),
                t.appendChild(e));
          }
          let i = "100%";
          return (
            e.style.width || (e.style.width = i),
            e.style.height || (e.style.height = i),
            e
          );
        },
        getDomContainer = (t, e) => {
          let i = e ?? document.getElementById(t);
          return (
            i ||
              (((i = document.createElement("div")).id = t),
              (i.dataset[Y] = tl),
              document.body.append(i)),
            i
          );
        };
      let Engine = class Engine {
        constructor() {
          (this._configs = new Map()),
            (this._domArray = []),
            (this._eventDispatcher = new EventDispatcher()),
            (this._initialized = !1),
            (this.plugins = []),
            (this.colorManagers = new Map()),
            (this.easingFunctions = new Map()),
            (this._initializers = {
              interactors: new Map(),
              movers: new Map(),
              updaters: new Map(),
            }),
            (this.interactors = new Map()),
            (this.movers = new Map()),
            (this.updaters = new Map()),
            (this.presets = new Map()),
            (this.effectDrawers = new Map()),
            (this.shapeDrawers = new Map()),
            (this.pathGenerators = new Map());
        }
        get configs() {
          let t = {};
          for (let [e, i] of this._configs) t[e] = i;
          return t;
        }
        get items() {
          return this._domArray;
        }
        get version() {
          return "3.8.1";
        }
        async addColorManager(t, e = !0) {
          this.colorManagers.set(t.key, t), await this.refresh(e);
        }
        addConfig(t) {
          let e = t.key ?? t.name ?? "default";
          this._configs.set(e, t),
            this._eventDispatcher.dispatchEvent(p.configAdded, {
              data: { name: e, config: t },
            });
        }
        async addEasing(t, e, i = !0) {
          this.getEasing(t) ||
            (this.easingFunctions.set(t, e), await this.refresh(i));
        }
        async addEffect(t, e, i = !0) {
          executeOnSingleOrMultiple(t, (t) => {
            this.getEffectDrawer(t) || this.effectDrawers.set(t, e);
          }),
            await this.refresh(i);
        }
        addEventListener(t, e) {
          this._eventDispatcher.addEventListener(t, e);
        }
        async addInteractor(t, e, i = !0) {
          this._initializers.interactors.set(t, e), await this.refresh(i);
        }
        async addMover(t, e, i = !0) {
          this._initializers.movers.set(t, e), await this.refresh(i);
        }
        async addParticleUpdater(t, e, i = !0) {
          this._initializers.updaters.set(t, e), await this.refresh(i);
        }
        async addPathGenerator(t, e, i = !0) {
          this.getPathGenerator(t) || this.pathGenerators.set(t, e),
            await this.refresh(i);
        }
        async addPlugin(t, e = !0) {
          this.getPlugin(t.id) || this.plugins.push(t), await this.refresh(e);
        }
        async addPreset(t, e, i = !1, s = !0) {
          (i || !this.getPreset(t)) && this.presets.set(t, e),
            await this.refresh(s);
        }
        async addShape(t, e = !0) {
          for (let e of t.validTypes)
            this.getShapeDrawer(e) || this.shapeDrawers.set(e, t);
          await this.refresh(e);
        }
        checkVersion(t) {
          if (this.version !== t)
            throw Error(
              `The tsParticles version is different from the loaded plugins version. Engine version: ${this.version}. Plugin version: ${t}`
            );
        }
        clearPlugins(t) {
          this.updaters.delete(t),
            this.movers.delete(t),
            this.interactors.delete(t);
        }
        dispatchEvent(t, e) {
          this._eventDispatcher.dispatchEvent(t, e);
        }
        dom() {
          return this.items;
        }
        domItem(t) {
          return this.item(t);
        }
        async getAvailablePlugins(t) {
          let e = new Map();
          for (let i of this.plugins)
            i.needsPlugin(t.actualOptions) && e.set(i.id, await i.getPlugin(t));
          return e;
        }
        getEasing(t) {
          return this.easingFunctions.get(t) ?? ((t) => t);
        }
        getEffectDrawer(t) {
          return this.effectDrawers.get(t);
        }
        async getInteractors(t, e = !1) {
          return getItemsFromInitializer(
            t,
            this.interactors,
            this._initializers.interactors,
            e
          );
        }
        async getMovers(t, e = !1) {
          return getItemsFromInitializer(
            t,
            this.movers,
            this._initializers.movers,
            e
          );
        }
        getPathGenerator(t) {
          return this.pathGenerators.get(t);
        }
        getPlugin(t) {
          return this.plugins.find((e) => e.id === t);
        }
        getPreset(t) {
          return this.presets.get(t);
        }
        getShapeDrawer(t) {
          return this.shapeDrawers.get(t);
        }
        getSupportedEffects() {
          return this.effectDrawers.keys();
        }
        getSupportedShapes() {
          return this.shapeDrawers.keys();
        }
        async getUpdaters(t, e = !1) {
          return getItemsFromInitializer(
            t,
            this.updaters,
            this._initializers.updaters,
            e
          );
        }
        init() {
          this._initialized || (this._initialized = !0);
        }
        item(t) {
          let { items: e } = this,
            i = e[t];
          if (!i || i.destroyed) {
            e.splice(t, 1);
            return;
          }
          return i;
        }
        async load(t) {
          let e =
              t.id ??
              t.element?.id ??
              `tsparticles${Math.floor(1e4 * getRandom())}`,
            { index: i, url: s } = t,
            a = s
              ? await getDataFromUrl({ fallback: t.options, url: s, index: i })
              : t.options,
            o = itemFromSingleOrMultiple(a, i),
            { items: r } = this,
            l = r.findIndex((t) => t.id.description === e),
            c = new Container(this, e, o);
          if (l >= 0) {
            let t = this.item(l);
            t && !t.destroyed && t.destroy(!1), r.splice(l, t ? 1 : 0, c);
          } else r.push(c);
          let h = getDomContainer(e, t.element),
            d = getCanvasFromContainer(h);
          return c.canvas.loadCanvas(d), await c.start(), c;
        }
        loadOptions(t, e) {
          this.plugins.forEach((i) => i.loadOptions?.(t, e));
        }
        loadParticlesOptions(t, e, ...i) {
          let s = this.updaters.get(t);
          s && s.forEach((t) => t.loadOptions?.(e, ...i));
        }
        async refresh(t = !0) {
          t && (await Promise.all(this.items.map((t) => t.refresh())));
        }
        removeEventListener(t, e) {
          this._eventDispatcher.removeEventListener(t, e);
        }
        setOnClickHandler(t) {
          let { items: e } = this;
          if (!e.length)
            throw Error(
              `${J} can only set click handlers after calling tsParticles.load()`
            );
          e.forEach((e) => e.addClickHandler(t));
        }
      };
      let ExternalInteractorBase = class ExternalInteractorBase {
        constructor(t) {
          (this.type = x.external), (this.container = t);
        }
      };
      let ParticlesInteractorBase = class ParticlesInteractorBase {
        constructor(t) {
          (this.type = x.particles), (this.container = t);
        }
      };
      ((Z = k || (k = {})).clockwise = "clockwise"),
        (Z.counterClockwise = "counter-clockwise"),
        (Z.random = "random"),
        ((j = z || (z = {})).linear = "linear"),
        (j.radial = "radial"),
        (j.random = "random"),
        (($ = S || (S = {})).easeInBack = "ease-in-back"),
        ($.easeInCirc = "ease-in-circ"),
        ($.easeInCubic = "ease-in-cubic"),
        ($.easeInLinear = "ease-in-linear"),
        ($.easeInQuad = "ease-in-quad"),
        ($.easeInQuart = "ease-in-quart"),
        ($.easeInQuint = "ease-in-quint"),
        ($.easeInExpo = "ease-in-expo"),
        ($.easeInSine = "ease-in-sine"),
        ($.easeOutBack = "ease-out-back"),
        ($.easeOutCirc = "ease-out-circ"),
        ($.easeOutCubic = "ease-out-cubic"),
        ($.easeOutLinear = "ease-out-linear"),
        ($.easeOutQuad = "ease-out-quad"),
        ($.easeOutQuart = "ease-out-quart"),
        ($.easeOutQuint = "ease-out-quint"),
        ($.easeOutExpo = "ease-out-expo"),
        ($.easeOutSine = "ease-out-sine"),
        ($.easeInOutBack = "ease-in-out-back"),
        ($.easeInOutCirc = "ease-in-out-circ"),
        ($.easeInOutCubic = "ease-in-out-cubic"),
        ($.easeInOutLinear = "ease-in-out-linear"),
        ($.easeInOutQuad = "ease-in-out-quad"),
        ($.easeInOutQuart = "ease-in-out-quart"),
        ($.easeInOutQuint = "ease-in-out-quint"),
        ($.easeInOutExpo = "ease-in-out-expo"),
        ($.easeInOutSine = "ease-in-out-sine");
      let tv = (function () {
        let t = new Engine();
        return t.init(), t;
      })();
      isSsr() || (window.tsParticles = tv);
    },
    93416: function (t, e, i) {
      i.d(e, {
        ZP: function () {
          return f;
        },
        bP: function () {
          return n;
        },
      });
      var s = i(26444),
        a = i(11527),
        o = i(50959);
      let f = (t) => {
        let e = t.id ?? "tsparticles";
        return (
          (0, o.useEffect)(() => {
            let i;
            return (
              s.S6T.load({ id: e, url: t.url, options: t.options }).then(
                (e) => {
                  var s;
                  (i = e), null == (s = t.particlesLoaded) || s.call(t, e);
                }
              ),
              () => {
                null == i || i.destroy();
              }
            );
          }, [e, t, t.url, t.options]),
          (0, a.jsx)("div", { id: e, className: t.className })
        );
      };
      async function n(t) {
        await t(s.S6T);
      }
    },
    71002: function (t, e, i) {
      i.d(e, {
        R: function () {
          return loadFull;
        },
      });
      var s,
        a,
        o,
        r,
        l,
        c,
        h,
        d,
        u,
        p,
        g,
        m,
        v,
        y,
        b,
        w,
        x,
        _,
        C,
        k,
        z,
        S,
        O = i(26444);
      let AbsorberSizeLimit = class AbsorberSizeLimit {
        constructor() {
          (this.radius = 0), (this.mass = 0);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.mass && (this.mass = t.mass),
            void 0 === t.radius || (this.radius = t.radius));
        }
      };
      let AbsorberSize = class AbsorberSize extends O.SWe {
        constructor() {
          super(),
            (this.density = 5),
            (this.value = 50),
            (this.limit = new AbsorberSizeLimit());
        }
        load(t) {
          (0, O.Ft)(t) ||
            (super.load(t),
            void 0 !== t.density && (this.density = t.density),
            (0, O.hj$)(t.limit)
              ? (this.limit.radius = t.limit)
              : this.limit.load(t.limit));
        }
      };
      let Absorber = class Absorber {
        constructor() {
          (this.color = new O.OzF()),
            (this.color.value = "#000000"),
            (this.draggable = !1),
            (this.opacity = 1),
            (this.destroy = !0),
            (this.orbits = !1),
            (this.size = new AbsorberSize());
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.color &&
              (this.color = O.OzF.create(this.color, t.color)),
            void 0 !== t.draggable && (this.draggable = t.draggable),
            (this.name = t.name),
            void 0 !== t.opacity && (this.opacity = t.opacity),
            void 0 !== t.position &&
              ((this.position = {}),
              void 0 !== t.position.x &&
                (this.position.x = (0, O.Cst)(t.position.x)),
              void 0 !== t.position.y &&
                (this.position.y = (0, O.Cst)(t.position.y))),
            void 0 !== t.size && this.size.load(t.size),
            void 0 !== t.destroy && (this.destroy = t.destroy),
            void 0 === t.orbits || (this.orbits = t.orbits));
        }
      };
      (g || (g = {})).absorber = "absorber";
      let R = 2 * Math.PI;
      let AbsorberInstance = class AbsorberInstance {
        constructor(t, e, i, s, a) {
          (this._calcPosition = () => {
            let t = (0, O.Gz$)({
              size: this._container.canvas.size,
              position: this.options.position,
            });
            return O.OWs.create(t.x, t.y);
          }),
            (this._updateParticlePosition = (t, e) => {
              if (t.destroyed) return;
              let i = this._container,
                s = i.canvas.size;
              if (t.needsNewPosition) {
                let e = (0, O.paW)({ size: s });
                t.position.setTo(e),
                  t.velocity.setTo(t.initialVelocity),
                  (t.absorberOrbit = void 0),
                  (t.needsNewPosition = !1);
              }
              if (this.options.orbits) {
                if (
                  (void 0 === t.absorberOrbit &&
                    ((t.absorberOrbit = O.OWs.origin),
                    (t.absorberOrbit.length = (0, O.Spd)(
                      t.getPosition(),
                      this.position
                    )),
                    (t.absorberOrbit.angle = (0, O.sZz)() * R)),
                  t.absorberOrbit.length <= this.size && !this.options.destroy)
                ) {
                  let e = Math.min(s.width, s.height);
                  t.absorberOrbit.length = e * (1 + (0.2 * (0, O.sZz)() - 0.1));
                }
                void 0 === t.absorberOrbitDirection &&
                  (t.absorberOrbitDirection =
                    t.velocity.x >= 0
                      ? O.RnL.clockwise
                      : O.RnL.counterClockwise);
                let a = t.absorberOrbit.length,
                  o = t.absorberOrbit.angle,
                  r = t.absorberOrbitDirection;
                t.velocity.setTo(O.OWs.origin);
                let l = {
                  x: r === O.RnL.clockwise ? Math.cos : Math.sin,
                  y: r === O.RnL.clockwise ? Math.sin : Math.cos,
                };
                (t.position.x = this.position.x + a * l.x(o)),
                  (t.position.y = this.position.y + a * l.y(o)),
                  (t.absorberOrbit.length -= e.length),
                  (t.absorberOrbit.angle +=
                    (((t.retina.moveSpeed ?? 0) * i.retina.pixelRatio) /
                      O.tZy) *
                    i.retina.reduceFactor);
              } else {
                let i = O.OWs.origin;
                (i.length = e.length), (i.angle = e.angle), t.velocity.addTo(i);
              }
            }),
            (this._absorbers = t),
            (this._container = e),
            (this._engine = i),
            (this.initialPosition = a ? O.OWs.create(a.x, a.y) : void 0),
            s instanceof Absorber
              ? (this.options = s)
              : ((this.options = new Absorber()), this.options.load(s)),
            (this.dragging = !1),
            (this.name = this.options.name),
            (this.opacity = this.options.opacity),
            (this.size =
              (0, O.Gu7)(this.options.size.value) * e.retina.pixelRatio),
            (this.mass =
              this.size * this.options.size.density * e.retina.reduceFactor);
          let o = this.options.size.limit;
          (this.limit = {
            radius: o.radius * e.retina.pixelRatio * e.retina.reduceFactor,
            mass: o.mass,
          }),
            (this.color = (0, O.tXk)(this._engine, this.options.color) ?? {
              b: 0,
              g: 0,
              r: 0,
            }),
            (this.position =
              this.initialPosition?.copy() ?? this._calcPosition());
        }
        attract(t) {
          let e = this._container,
            i = this.options;
          if (i.draggable) {
            let t = e.interactivity.mouse;
            if (t.clicking && t.downPosition) {
              let e = (0, O.Spd)(this.position, t.downPosition);
              e <= this.size && (this.dragging = !0);
            } else this.dragging = !1;
            this.dragging &&
              t.position &&
              ((this.position.x = t.position.x),
              (this.position.y = t.position.y));
          }
          let s = t.getPosition(),
            { dx: a, dy: o, distance: r } = (0, O.oW6)(this.position, s),
            l = O.OWs.create(a, o);
          if (
            ((l.length = (this.mass / Math.pow(r, 2)) * e.retina.reduceFactor),
            r < this.size + t.getRadius())
          ) {
            let s = 0.033 * t.getRadius() * e.retina.pixelRatio;
            (this.size > t.getRadius() && r < this.size - t.getRadius()) ||
            (void 0 !== t.absorberOrbit && t.absorberOrbit.length < 0)
              ? i.destroy
                ? t.destroy()
                : ((t.needsNewPosition = !0),
                  this._updateParticlePosition(t, l))
              : (i.destroy && (t.size.value -= s),
                this._updateParticlePosition(t, l)),
              (this.limit.radius <= 0 || this.size < this.limit.radius) &&
                (this.size += s),
              (this.limit.mass <= 0 || this.mass < this.limit.mass) &&
                (this.mass +=
                  s * this.options.size.density * e.retina.reduceFactor);
          } else this._updateParticlePosition(t, l);
        }
        draw(t) {
          t.translate(this.position.x, this.position.y),
            t.beginPath(),
            t.arc(O.usR.x, O.usR.y, this.size, 0, R, !1),
            t.closePath(),
            (t.fillStyle = (0, O.izR)(this.color, this.opacity)),
            t.fill();
        }
        resize() {
          let t = this.initialPosition;
          this.position =
            t && (0, O.Ac)(t, this._container.canvas.size, O.OWs.origin)
              ? t
              : this._calcPosition();
        }
      };
      let Absorbers = class Absorbers {
        constructor(t, e) {
          (this._container = t),
            (this._engine = e),
            (this.array = []),
            (this.absorbers = []),
            (this.interactivityAbsorbers = []),
            (t.getAbsorber = (t) =>
              void 0 === t || (0, O.hj$)(t)
                ? this.array[t ?? 0]
                : this.array.find((e) => e.name === t)),
            (t.addAbsorber = async (t, e) => this.addAbsorber(t, e));
        }
        async addAbsorber(t, e) {
          let i = new AbsorberInstance(
            this,
            this._container,
            this._engine,
            t,
            e
          );
          return this.array.push(i), Promise.resolve(i);
        }
        draw(t) {
          for (let e of this.array) e.draw(t);
        }
        handleClickMode(t) {
          let e = this.absorbers,
            i = this.interactivityAbsorbers;
          if (t === g.absorber) {
            let t = (0, O.wA_)(i),
              s = t ?? (0, O.wA_)(e),
              a = this._container.interactivity.mouse.clickPosition;
            this.addAbsorber(s, a);
          }
        }
        async init() {
          (this.absorbers = this._container.actualOptions.absorbers),
            (this.interactivityAbsorbers =
              this._container.actualOptions.interactivity.modes.absorbers);
          let t = (0, O.KH1)(this.absorbers, async (t) => {
            await this.addAbsorber(t);
          });
          t instanceof Array ? await Promise.all(t) : await t;
        }
        particleUpdate(t) {
          for (let e of this.array) if ((e.attract(t), t.destroyed)) break;
        }
        removeAbsorber(t) {
          let e = this.array.indexOf(t);
          e >= 0 && this.array.splice(e, 1);
        }
        resize() {
          for (let t of this.array) t.resize();
        }
        stop() {
          this.array = [];
        }
      };
      let AbsorbersPlugin = class AbsorbersPlugin {
        constructor(t) {
          (this.id = "absorbers"), (this._engine = t);
        }
        async getPlugin(t) {
          return Promise.resolve(new Absorbers(t, this._engine));
        }
        loadOptions(t, e) {
          (this.needsPlugin(t) || this.needsPlugin(e)) &&
            (e?.absorbers &&
              (t.absorbers = (0, O.KH1)(e.absorbers, (t) => {
                let e = new Absorber();
                return e.load(t), e;
              })),
            (t.interactivity.modes.absorbers = (0, O.KH1)(
              e?.interactivity?.modes?.absorbers,
              (t) => {
                let e = new Absorber();
                return e.load(t), e;
              }
            )));
        }
        needsPlugin(t) {
          if (!t) return !1;
          let e = t.absorbers;
          return (0, O.kJL)(e)
            ? !!e.length
            : !!(
                e ||
                (t.interactivity?.events?.onClick?.mode &&
                  (0, O.dBL)(g.absorber, t.interactivity.events.onClick.mode))
              );
        }
      };
      async function loadAbsorbersPlugin(t, e = !0) {
        t.checkVersion("3.8.1"), await t.addPlugin(new AbsorbersPlugin(t), e);
      }
      let DestroyBounds = class DestroyBounds {
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.bottom && (this.bottom = (0, O.Cst)(t.bottom)),
            void 0 !== t.left && (this.left = (0, O.Cst)(t.left)),
            void 0 !== t.right && (this.right = (0, O.Cst)(t.right)),
            void 0 !== t.top && (this.top = (0, O.Cst)(t.top)));
        }
      };
      ((s = m || (m = {})).none = "none"), (s.split = "split");
      let SplitFactor = class SplitFactor extends O.SWe {
        constructor() {
          super(), (this.value = 3);
        }
      };
      let SplitRate = class SplitRate extends O.SWe {
        constructor() {
          super(), (this.value = { min: 4, max: 9 });
        }
      };
      let Split = class Split {
        constructor() {
          (this.count = 1),
            (this.factor = new SplitFactor()),
            (this.rate = new SplitRate()),
            (this.sizeOffset = !0);
        }
        load(t) {
          !(0, O.Ft)(t) &&
            (void 0 !== t.color &&
              (this.color = O.OzF.create(this.color, t.color)),
            void 0 !== t.count && (this.count = t.count),
            this.factor.load(t.factor),
            this.rate.load(t.rate),
            (this.particles = (0, O.KH1)(t.particles, (t) =>
              (0, O.ZBL)({}, t)
            )),
            void 0 !== t.sizeOffset && (this.sizeOffset = t.sizeOffset),
            t.colorOffset &&
              ((this.colorOffset = this.colorOffset ?? {}),
              void 0 !== t.colorOffset.h &&
                (this.colorOffset.h = t.colorOffset.h),
              void 0 !== t.colorOffset.s &&
                (this.colorOffset.s = t.colorOffset.s),
              void 0 !== t.colorOffset.l &&
                (this.colorOffset.l = t.colorOffset.l)));
        }
      };
      let Destroy = class Destroy {
        constructor() {
          (this.bounds = new DestroyBounds()),
            (this.mode = m.none),
            (this.split = new Split());
        }
        load(t) {
          (0, O.Ft)(t) ||
            (t.mode && (this.mode = t.mode),
            t.bounds && this.bounds.load(t.bounds),
            this.split.load(t.split));
        }
      };
      let DestroyUpdater = class DestroyUpdater {
        constructor(t, e) {
          (this.container = e), (this.engine = t);
        }
        init(t) {
          let e = this.container,
            i = t.options,
            s = i.destroy;
          if (!s) return;
          t.splitCount = 0;
          let a = s.bounds;
          t.destroyBounds || (t.destroyBounds = {});
          let { bottom: o, left: r, right: l, top: c } = a,
            { destroyBounds: h } = t,
            d = e.canvas.size;
          o && (h.bottom = ((0, O.Gu7)(o) * d.height) / O.tZy),
            r && (h.left = ((0, O.Gu7)(r) * d.width) / O.tZy),
            l && (h.right = ((0, O.Gu7)(l) * d.width) / O.tZy),
            c && (h.top = ((0, O.Gu7)(c) * d.height) / O.tZy);
        }
        isEnabled(t) {
          return !t.destroyed;
        }
        loadOptions(t, ...e) {
          for (let i of (t.destroy || (t.destroy = new Destroy()), e))
            t.destroy.load(i?.destroy);
        }
        particleDestroyed(t, e) {
          if (e) return;
          let i = t.options.destroy;
          i &&
            i.mode === m.split &&
            (function (t, e, i) {
              let s = i.options.destroy;
              if (!s) return;
              let a = s.split;
              if (
                a.count >= 0 &&
                (void 0 === i.splitCount || i.splitCount++ > a.count)
              )
                return;
              let o = (0, O.Gu7)(a.rate.value),
                r = (0, O.wA_)(a.particles);
              for (let s = 0; s < o; s++)
                !(function (t, e, i, s) {
                  let a = i.options.destroy;
                  if (!a) return;
                  let o = a.split,
                    r = (0, O.hTV)(t, e, i.options),
                    l = (0, O.Gu7)(o.factor.value),
                    c = i.getFillColor();
                  o.color
                    ? r.color.load(o.color)
                    : o.colorOffset && c
                    ? r.color.load({
                        value: {
                          hsl: {
                            h: c.h + (0, O.Gu7)(o.colorOffset.h ?? 0),
                            s: c.s + (0, O.Gu7)(o.colorOffset.s ?? 0),
                            l: c.l + (0, O.Gu7)(o.colorOffset.l ?? 0),
                          },
                        },
                      })
                    : r.color.load({ value: { hsl: i.getFillColor() } }),
                    r.move.load({
                      center: {
                        x: i.position.x,
                        y: i.position.y,
                        mode: O.lZr.precise,
                      },
                    }),
                    (0, O.hj$)(r.size.value)
                      ? (r.size.value /= l)
                      : ((r.size.value.min /= l), (r.size.value.max /= l)),
                    r.load(s);
                  let h = o.sizeOffset
                      ? (0, O.Cst)(-i.size.value, i.size.value)
                      : 0,
                    d = {
                      x: i.position.x + (0, O.vdf)(h),
                      y: i.position.y + (0, O.vdf)(h),
                    };
                  e.particles.addParticle(
                    d,
                    r,
                    i.group,
                    (t) =>
                      !(t.size.value < 0.5) &&
                      ((t.velocity.length = (0, O.vdf)(
                        (0, O.Cst)(i.velocity.length, t.velocity.length)
                      )),
                      (t.splitCount = (i.splitCount ?? 0) + 1),
                      (t.unbreakable = !0),
                      setTimeout(() => {
                        t.unbreakable = !1;
                      }, 500),
                      !0)
                  );
                })(t, e, i, r);
            })(this.engine, this.container, t);
        }
        update(t) {
          if (!this.isEnabled(t)) return;
          let e = t.getPosition(),
            i = t.destroyBounds;
          i &&
            ((void 0 !== i.bottom && e.y >= i.bottom) ||
              (void 0 !== i.left && e.x <= i.left) ||
              (void 0 !== i.right && e.x >= i.right) ||
              (void 0 !== i.top && e.y <= i.top)) &&
            t.destroy();
        }
      };
      async function loadDestroyUpdater(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addParticleUpdater(
            "destroy",
            (e) => Promise.resolve(new DestroyUpdater(t, e)),
            e
          );
      }
      let EmitterLife = class EmitterLife {
        constructor() {
          this.wait = !1;
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.count && (this.count = t.count),
            void 0 !== t.delay && (this.delay = (0, O.Cst)(t.delay)),
            void 0 !== t.duration && (this.duration = (0, O.Cst)(t.duration)),
            void 0 === t.wait || (this.wait = t.wait));
        }
      };
      let EmitterRate = class EmitterRate {
        constructor() {
          (this.quantity = 1), (this.delay = 0.1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.quantity && (this.quantity = (0, O.Cst)(t.quantity)),
            void 0 !== t.delay && (this.delay = (0, O.Cst)(t.delay)));
        }
      };
      let EmitterShapeReplace = class EmitterShapeReplace {
        constructor() {
          (this.color = !1), (this.opacity = !1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.color && (this.color = t.color),
            void 0 === t.opacity || (this.opacity = t.opacity));
        }
      };
      let EmitterShape = class EmitterShape {
        constructor() {
          (this.options = {}),
            (this.replace = new EmitterShapeReplace()),
            (this.type = "square");
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.options &&
              (this.options = (0, O.ZBL)({}, t.options ?? {})),
            this.replace.load(t.replace),
            void 0 === t.type || (this.type = t.type));
        }
      };
      let EmitterSize = class EmitterSize {
        constructor() {
          (this.mode = O.lZr.percent), (this.height = 0), (this.width = 0);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.height && (this.height = t.height),
            void 0 === t.width || (this.width = t.width));
        }
      };
      let Emitter = class Emitter {
        constructor() {
          (this.autoPlay = !0),
            (this.fill = !0),
            (this.life = new EmitterLife()),
            (this.rate = new EmitterRate()),
            (this.shape = new EmitterShape()),
            (this.startCount = 0);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
            void 0 !== t.size &&
              (this.size || (this.size = new EmitterSize()),
              this.size.load(t.size)),
            void 0 !== t.direction && (this.direction = t.direction),
            (this.domId = t.domId),
            void 0 !== t.fill && (this.fill = t.fill),
            this.life.load(t.life),
            (this.name = t.name),
            (this.particles = (0, O.KH1)(t.particles, (t) =>
              (0, O.ZBL)({}, t)
            )),
            this.rate.load(t.rate),
            this.shape.load(t.shape),
            void 0 !== t.position &&
              ((this.position = {}),
              void 0 !== t.position.x &&
                (this.position.x = (0, O.Cst)(t.position.x)),
              void 0 !== t.position.y &&
                (this.position.y = (0, O.Cst)(t.position.y))),
            void 0 !== t.spawnColor &&
              (void 0 === this.spawnColor && (this.spawnColor = new O.RC2()),
              this.spawnColor.load(t.spawnColor)),
            void 0 === t.startCount || (this.startCount = t.startCount));
        }
      };
      (v || (v = {})).emitter = "emitter";
      let P = 1;
      function setParticlesOptionsColor(t, e) {
        t.color ? (t.color.value = e) : (t.color = { value: e });
      }
      let EmitterInstance = class EmitterInstance {
        constructor(t, e, i, s, a) {
          (this.emitters = e),
            (this.container = i),
            (this._destroy = () => {
              this._mutationObserver?.disconnect(),
                (this._mutationObserver = void 0),
                this._resizeObserver?.disconnect(),
                (this._resizeObserver = void 0),
                this.emitters.removeEmitter(this),
                this._engine.dispatchEvent("emitterDestroyed", {
                  container: this.container,
                  data: { emitter: this },
                });
            }),
            (this._prepareToDie = () => {
              if (this._paused) return;
              let t =
                this.options.life?.duration !== void 0
                  ? (0, O.Gu7)(this.options.life.duration)
                  : void 0;
              this.container.retina.reduceFactor &&
                (this._lifeCount > 0 || this._immortal) &&
                void 0 !== t &&
                t > 0 &&
                (this._duration = t * O.X5o);
            }),
            (this._setColorAnimation = (t, e, i, s = P) => {
              let a = this.container;
              if (!t.enable) return e;
              let o = (0, O.vdf)(t.offset),
                r = (0, O.Gu7)(this.options.rate.delay),
                l = (r * O.X5o) / a.retina.reduceFactor,
                c = (0, O.Gu7)(t.speed ?? 0);
              return (e + (c * a.fpsLimit) / l + o * s) % i;
            }),
            (this._engine = t),
            (this._currentDuration = 0),
            (this._currentEmitDelay = 0),
            (this._currentSpawnDelay = 0),
            (this._initialPosition = a),
            s instanceof Emitter
              ? (this.options = s)
              : ((this.options = new Emitter()), this.options.load(s)),
            (this._spawnDelay =
              ((0, O.Gu7)(this.options.life.delay ?? 0) * O.X5o) /
              this.container.retina.reduceFactor),
            (this.position = this._initialPosition ?? this._calcPosition()),
            (this.name = this.options.name),
            (this.fill = this.options.fill),
            (this._firstSpawn = !this.options.life.wait),
            (this._startParticlesAdded = !1);
          let o = (0, O.ZBL)({}, this.options.particles);
          if (
            ((o ??= {}),
            (o.move ??= {}),
            (o.move.direction ??= this.options.direction),
            this.options.spawnColor &&
              (this.spawnColor = (0, O.lNs)(
                this._engine,
                this.options.spawnColor
              )),
            (this._paused = !this.options.autoPlay),
            (this._particlesOptions = o),
            (this._size = this._calcSize()),
            (this.size = (0, O.apW)(this._size, this.container.canvas.size)),
            (this._lifeCount = this.options.life.count ?? -1),
            (this._immortal = this._lifeCount <= 0),
            this.options.domId)
          ) {
            let t = document.getElementById(this.options.domId);
            t &&
              ((this._mutationObserver = new MutationObserver(() => {
                this.resize();
              })),
              (this._resizeObserver = new ResizeObserver(() => {
                this.resize();
              })),
              this._mutationObserver.observe(t, {
                attributes: !0,
                attributeFilter: ["style", "width", "height"],
              }),
              this._resizeObserver.observe(t));
          }
          let r = this.options.shape,
            l = this._engine.emitterShapeManager?.getShapeGenerator(r.type);
          l &&
            (this._shape = l.generate(
              this.position,
              this.size,
              this.fill,
              r.options
            )),
            this._engine.dispatchEvent("emitterCreated", {
              container: i,
              data: { emitter: this },
            }),
            this.play();
        }
        externalPause() {
          (this._paused = !0), this.pause();
        }
        externalPlay() {
          (this._paused = !1), this.play();
        }
        async init() {
          await this._shape?.init();
        }
        pause() {
          this._paused || delete this._emitDelay;
        }
        play() {
          if (
            !this._paused &&
            this.container.retina.reduceFactor &&
            (this._lifeCount > 0 ||
              this._immortal ||
              !this.options.life.count) &&
            (this._firstSpawn ||
              this._currentSpawnDelay >= (this._spawnDelay ?? 0))
          ) {
            if (void 0 === this._emitDelay) {
              let t = (0, O.Gu7)(this.options.rate.delay);
              this._emitDelay =
                (t * O.X5o) / this.container.retina.reduceFactor;
            }
            (this._lifeCount > 0 || this._immortal) && this._prepareToDie();
          }
        }
        resize() {
          let t = this._initialPosition;
          (this.position =
            t && (0, O.Ac)(t, this.container.canvas.size, O.OWs.origin)
              ? t
              : this._calcPosition()),
            (this._size = this._calcSize()),
            (this.size = (0, O.apW)(this._size, this.container.canvas.size)),
            this._shape?.resize(this.position, this.size);
        }
        update(t) {
          !this._paused &&
            (this._firstSpawn &&
              ((this._firstSpawn = !1),
              (this._currentSpawnDelay = this._spawnDelay ?? 0),
              (this._currentEmitDelay = this._emitDelay ?? 0)),
            this._startParticlesAdded ||
              ((this._startParticlesAdded = !0),
              this._emitParticles(this.options.startCount)),
            void 0 !== this._duration &&
              ((this._currentDuration += t.value),
              this._currentDuration >= this._duration &&
                (this.pause(),
                void 0 !== this._spawnDelay && delete this._spawnDelay,
                !this._immortal && this._lifeCount--,
                this._lifeCount > 0 || this._immortal
                  ? ((this.position = this._calcPosition()),
                    this._shape?.resize(this.position, this.size),
                    (this._spawnDelay =
                      ((0, O.Gu7)(this.options.life.delay ?? 0) * O.X5o) /
                      this.container.retina.reduceFactor))
                  : this._destroy(),
                (this._currentDuration -= this._duration),
                delete this._duration)),
            void 0 !== this._spawnDelay &&
              ((this._currentSpawnDelay += t.value),
              this._currentSpawnDelay >= this._spawnDelay &&
                (this._engine.dispatchEvent("emitterPlay", {
                  container: this.container,
                }),
                this.play(),
                (this._currentSpawnDelay -= this._currentSpawnDelay),
                delete this._spawnDelay)),
            void 0 !== this._emitDelay &&
              ((this._currentEmitDelay += t.value),
              this._currentEmitDelay >= this._emitDelay &&
                (this._emit(), (this._currentEmitDelay -= this._emitDelay))));
        }
        _calcPosition() {
          if (this.options.domId) {
            let t = document.getElementById(this.options.domId);
            if (t) {
              let e = t.getBoundingClientRect(),
                i = this.container.retina.pixelRatio;
              return {
                x: (e.x + 0.5 * e.width) * i,
                y: (e.y + 0.5 * e.height) * i,
              };
            }
          }
          return (0, O.Gz$)({
            size: this.container.canvas.size,
            position: this.options.position,
          });
        }
        _calcSize() {
          let t = this.container;
          if (this.options.domId) {
            let e = document.getElementById(this.options.domId);
            if (e) {
              let i = e.getBoundingClientRect();
              return {
                width: i.width * t.retina.pixelRatio,
                height: i.height * t.retina.pixelRatio,
                mode: O.lZr.precise,
              };
            }
          }
          return (
            this.options.size ??
            (() => {
              let t = new EmitterSize();
              return t.load({ height: 0, mode: O.lZr.percent, width: 0 }), t;
            })()
          );
        }
        _emit() {
          if (this._paused) return;
          let t = (0, O.Gu7)(this.options.rate.quantity);
          this._emitParticles(t);
        }
        _emitParticles(t) {
          let e = (0, O.wA_)(this._particlesOptions);
          for (let i = 0; i < t; i++) {
            let t = (0, O.ZBL)({}, e);
            if (this.spawnColor) {
              let e = this.options.spawnColor?.animation;
              if (e) {
                let t = { h: 360, s: 100, l: 100 };
                (this.spawnColor.h = this._setColorAnimation(
                  e.h,
                  this.spawnColor.h,
                  t.h,
                  3.6
                )),
                  (this.spawnColor.s = this._setColorAnimation(
                    e.s,
                    this.spawnColor.s,
                    t.s
                  )),
                  (this.spawnColor.l = this._setColorAnimation(
                    e.l,
                    this.spawnColor.l,
                    t.l
                  ));
              }
              setParticlesOptionsColor(t, this.spawnColor);
            }
            let i = this.options.shape,
              s = this.position;
            if (this._shape) {
              let e = this._shape.randomPosition();
              if (e) {
                s = e.position;
                let a = i.replace;
                a.color && e.color && setParticlesOptionsColor(t, e.color),
                  a.opacity &&
                    (t.opacity
                      ? (t.opacity.value = e.opacity)
                      : (t.opacity = { value: e.opacity }));
              } else s = null;
            }
            s && this.container.particles.addParticle(s, t);
          }
        }
      };
      let Emitters = class Emitters {
        constructor(t, e) {
          (this.container = e),
            (this._engine = t),
            (this.array = []),
            (this.emitters = []),
            (this.interactivityEmitters = {
              random: { count: 1, enable: !1 },
              value: [],
            }),
            (e.getEmitter = (t) =>
              void 0 === t || (0, O.hj$)(t)
                ? this.array[t ?? 0]
                : this.array.find((e) => e.name === t)),
            (e.addEmitter = async (t, e) => this.addEmitter(t, e)),
            (e.removeEmitter = (t) => {
              let i = e.getEmitter(t);
              i && this.removeEmitter(i);
            }),
            (e.playEmitter = (t) => {
              let i = e.getEmitter(t);
              i && i.externalPlay();
            }),
            (e.pauseEmitter = (t) => {
              let i = e.getEmitter(t);
              i && i.externalPause();
            });
        }
        async addEmitter(t, e) {
          let i = new Emitter();
          i.load(t);
          let s = new EmitterInstance(this._engine, this, this.container, i, e);
          return await s.init(), this.array.push(s), s;
        }
        handleClickMode(t) {
          let e;
          let i = this.emitters,
            s = this.interactivityEmitters;
          if (t !== v.emitter) return;
          if (s && (0, O.kJL)(s.value)) {
            if (s.value.length > 0 && s.random.enable) {
              e = [];
              let t = [];
              for (let i = 0; i < s.random.count; i++) {
                let a = (0, O.dUB)(s.value);
                if (t.includes(a) && t.length < s.value.length) {
                  i--;
                  continue;
                }
                t.push(a), e.push((0, O.c86)(s.value, a));
              }
            } else e = s.value;
          } else e = s?.value;
          let a = e ?? i,
            o = this.container.interactivity.mouse.clickPosition;
          (0, O.KH1)(a, async (t) => {
            await this.addEmitter(t, o);
          });
        }
        async init() {
          if (
            ((this.emitters = this.container.actualOptions.emitters),
            (this.interactivityEmitters =
              this.container.actualOptions.interactivity.modes.emitters),
            this.emitters)
          ) {
            if ((0, O.kJL)(this.emitters))
              for (let t of this.emitters) await this.addEmitter(t);
            else await this.addEmitter(this.emitters);
          }
        }
        pause() {
          for (let t of this.array) t.pause();
        }
        play() {
          for (let t of this.array) t.play();
        }
        removeEmitter(t) {
          let e = this.array.indexOf(t);
          e >= 0 && this.array.splice(e, 1);
        }
        resize() {
          for (let t of this.array) t.resize();
        }
        stop() {
          this.array = [];
        }
        update(t) {
          for (let e of this.array) e.update(t);
        }
      };
      let EmittersPlugin = class EmittersPlugin {
        constructor(t) {
          (this._engine = t), (this.id = "emitters");
        }
        getPlugin(t) {
          return Promise.resolve(new Emitters(this._engine, t));
        }
        loadOptions(t, e) {
          if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
          e?.emitters &&
            (t.emitters = (0, O.KH1)(e.emitters, (t) => {
              let e = new Emitter();
              return e.load(t), e;
            }));
          let i = e?.interactivity?.modes?.emitters;
          if (i) {
            if ((0, O.kJL)(i))
              t.interactivity.modes.emitters = {
                random: { count: 1, enable: !0 },
                value: i.map((t) => {
                  let e = new Emitter();
                  return e.load(t), e;
                }),
              };
            else if (void 0 !== i.value) {
              if ((0, O.kJL)(i.value))
                t.interactivity.modes.emitters = {
                  random: {
                    count: i.random.count ?? 1,
                    enable: i.random.enable ?? !1,
                  },
                  value: i.value.map((t) => {
                    let e = new Emitter();
                    return e.load(t), e;
                  }),
                };
              else {
                let e = new Emitter();
                e.load(i.value),
                  (t.interactivity.modes.emitters = {
                    random: {
                      count: i.random.count ?? 1,
                      enable: i.random.enable ?? !1,
                    },
                    value: e,
                  });
              }
            } else {
              let e = (t.interactivity.modes.emitters = {
                random: { count: 1, enable: !1 },
                value: new Emitter(),
              });
              e.value.load(i);
            }
          }
        }
        needsPlugin(t) {
          if (!t) return !1;
          let e = t.emitters;
          return (
            ((0, O.kJL)(e) && !!e.length) ||
            void 0 !== e ||
            (!!t.interactivity?.events?.onClick?.mode &&
              (0, O.dBL)(v.emitter, t.interactivity.events.onClick.mode))
          );
        }
      };
      let M = new Map();
      let ShapeManager = class ShapeManager {
        constructor(t) {
          this._engine = t;
        }
        addShapeGenerator(t, e) {
          this.getShapeGenerator(t) || M.set(t, e);
        }
        getShapeGenerator(t) {
          return M.get(t);
        }
        getSupportedShapeGenerators() {
          return M.keys();
        }
      };
      let EmitterShapeBase = class EmitterShapeBase {
        constructor(t, e, i, s) {
          (this.position = t),
            (this.size = e),
            (this.fill = i),
            (this.options = s);
        }
        resize(t, e) {
          (this.position = t), (this.size = e);
        }
      };
      async function loadEmittersPlugin(t, e = !0) {
        t.checkVersion("3.8.1"),
          t.emitterShapeManager ||
            (t.emitterShapeManager = new ShapeManager(t)),
          t.addEmitterShapeGenerator ||
            (t.addEmitterShapeGenerator = (e, i) => {
              t.emitterShapeManager?.addShapeGenerator(e, i);
            });
        let i = new EmittersPlugin(t);
        await t.addPlugin(i, e);
      }
      let E = 2 * Math.PI;
      let EmittersCircleShape = class EmittersCircleShape extends EmitterShapeBase {
        constructor(t, e, i, s) {
          super(t, e, i, s);
        }
        async init() {}
        randomPosition() {
          let t = this.size,
            e = this.fill,
            i = this.position,
            [s, a] = [0.5 * t.width, 0.5 * t.height],
            o = ((t, e) => {
              let i = 0.25 * (0, O.sZz)(),
                s = Math.atan((e / t) * Math.tan(E * i)),
                a = (0, O.sZz)();
              return a < 0.25
                ? s
                : a < 0.5
                ? Math.PI - s
                : a < 0.75
                ? Math.PI + s
                : -s;
            })(s, a),
            r =
              (s * a) /
              Math.sqrt((a * Math.cos(o)) ** 2 + (s * Math.sin(o)) ** 2),
            l = e ? r * Math.sqrt((0, O.sZz)()) : r;
          return {
            position: { x: i.x + l * Math.cos(o), y: i.y + l * Math.sin(o) },
          };
        }
      };
      let EmittersCircleShapeGenerator = class EmittersCircleShapeGenerator {
        generate(t, e, i, s) {
          return new EmittersCircleShape(t, e, i, s);
        }
      };
      async function loadEmittersShapeCircle(t, e = !0) {
        t.checkVersion("3.8.1"),
          t.addEmitterShapeGenerator?.(
            "circle",
            new EmittersCircleShapeGenerator()
          ),
          await t.refresh(e);
      }
      function randomSquareCoordinate(t, e) {
        return t + e * ((0, O.sZz)() - O.jz_);
      }
      ((a = y || (y = {}))[(a.TopLeft = 0)] = "TopLeft"),
        (a[(a.TopRight = 1)] = "TopRight"),
        (a[(a.BottomRight = 2)] = "BottomRight"),
        (a[(a.BottomLeft = 3)] = "BottomLeft");
      let EmittersSquareShape = class EmittersSquareShape extends EmitterShapeBase {
        constructor(t, e, i, s) {
          super(t, e, i, s);
        }
        async init() {}
        randomPosition() {
          let t = this.fill,
            e = this.position,
            i = this.size;
          if (t)
            return {
              position: {
                x: randomSquareCoordinate(e.x, i.width),
                y: randomSquareCoordinate(e.y, i.height),
              },
            };
          {
            let t = i.width * O.jz_,
              s = i.height * O.jz_,
              a = Math.floor(4 * (0, O.sZz)()),
              o = ((0, O.sZz)() - O.jz_) * O.txi;
            switch (a) {
              case y.TopLeft:
                return { position: { x: e.x + o * t, y: e.y - s } };
              case y.TopRight:
                return { position: { x: e.x - t, y: e.y + o * s } };
              case y.BottomRight:
                return { position: { x: e.x + o * t, y: e.y + s } };
              case y.BottomLeft:
              default:
                return { position: { x: e.x + t, y: e.y + o * s } };
            }
          }
        }
      };
      let EmittersSquareShapeGenerator = class EmittersSquareShapeGenerator {
        generate(t, e, i, s) {
          return new EmittersSquareShape(t, e, i, s);
        }
      };
      async function loadEmittersShapeSquare(t, e = !0) {
        t.checkVersion("3.8.1"),
          t.addEmitterShapeGenerator?.(
            "square",
            new EmittersSquareShapeGenerator()
          ),
          await t.refresh(e);
      }
      let Trail = class Trail {
        constructor() {
          (this.delay = 1), (this.pauseOnStop = !1), (this.quantity = 1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.delay && (this.delay = t.delay),
            void 0 !== t.quantity && (this.quantity = t.quantity),
            void 0 !== t.particles &&
              (this.particles = (0, O.ZBL)({}, t.particles)),
            void 0 === t.pauseOnStop || (this.pauseOnStop = t.pauseOnStop));
        }
      };
      let D = "trail";
      let TrailMaker = class TrailMaker extends O.L8z {
        constructor(t) {
          super(t), (this._delay = 0);
        }
        clear() {}
        init() {}
        interact(t) {
          let e = this.container,
            { interactivity: i } = e;
          if (!e.retina.reduceFactor) return;
          let s = e.actualOptions,
            a = s.interactivity.modes.trail;
          if (!a) return;
          let o = (a.delay * O.X5o) / this.container.retina.reduceFactor;
          if ((this._delay < o && (this._delay += t.value), this._delay < o))
            return;
          let r = !(
              a.pauseOnStop &&
              (i.mouse.position === this._lastPosition ||
                (i.mouse.position?.x === this._lastPosition?.x &&
                  i.mouse.position?.y === this._lastPosition?.y))
            ),
            l = e.interactivity.mouse.position;
          l ? (this._lastPosition = { ...l }) : delete this._lastPosition,
            r &&
              e.particles.push(a.quantity, e.interactivity.mouse, a.particles),
            (this._delay -= o);
        }
        isEnabled(t) {
          let e = this.container,
            i = e.actualOptions,
            s = e.interactivity.mouse,
            a = (t?.interactivity ?? i.interactivity).events;
          return (
            (s.clicking &&
              s.inside &&
              !!s.position &&
              (0, O.dBL)(D, a.onClick.mode)) ||
            (s.inside && !!s.position && (0, O.dBL)(D, a.onHover.mode))
          );
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.trail || (t.trail = new Trail()), e))
            t.trail.load(i?.trail);
        }
        reset() {}
      };
      async function loadExternalTrailInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "externalTrail",
            (t) => Promise.resolve(new TrailMaker(t)),
            e
          );
      }
      ((o = b || (b = {})).both = "both"),
        (o.horizontal = "horizontal"),
        (o.vertical = "vertical");
      let I = 2 * Math.PI;
      let RollLight = class RollLight {
        constructor() {
          (this.enable = !1), (this.value = 0);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.value && (this.value = (0, O.Cst)(t.value)));
        }
      };
      let Roll = class Roll {
        constructor() {
          (this.darken = new RollLight()),
            (this.enable = !1),
            (this.enlighten = new RollLight()),
            (this.mode = b.vertical),
            (this.speed = 25);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.backColor &&
              (this.backColor = O.OzF.create(this.backColor, t.backColor)),
            this.darken.load(t.darken),
            void 0 !== t.enable && (this.enable = t.enable),
            this.enlighten.load(t.enlighten),
            void 0 !== t.mode && (this.mode = t.mode),
            void 0 !== t.speed && (this.speed = (0, O.Cst)(t.speed)));
        }
      };
      let RollUpdater = class RollUpdater {
        constructor(t) {
          this._engine = t;
        }
        getTransformValues(t) {
          let e = t.roll?.enable && t.roll,
            i = e && e.horizontal,
            s = e && e.vertical;
          return {
            a: i ? Math.cos(e.angle) : void 0,
            d: s ? Math.sin(e.angle) : void 0,
          };
        }
        init(t) {
          !(function (t, e) {
            let i = e.options.roll;
            if (!i?.enable) {
              e.roll = {
                enable: !1,
                horizontal: !1,
                vertical: !1,
                angle: 0,
                speed: 0,
              };
              return;
            }
            if (
              ((e.roll = {
                enable: i.enable,
                horizontal: i.mode === b.horizontal || i.mode === b.both,
                vertical: i.mode === b.vertical || i.mode === b.both,
                angle: (0, O.sZz)() * I,
                speed: (0, O.Gu7)(i.speed) / 360,
              }),
              i.backColor)
            )
              e.backColor = (0, O.lNs)(t, i.backColor);
            else if (i.darken.enable && i.enlighten.enable) {
              let t = (0, O.sZz)() >= O.jz_ ? O.qHU.darken : O.qHU.enlighten;
              e.roll.alter = {
                type: t,
                value: (0, O.Gu7)(
                  t === O.qHU.darken ? i.darken.value : i.enlighten.value
                ),
              };
            } else
              i.darken.enable
                ? (e.roll.alter = {
                    type: O.qHU.darken,
                    value: (0, O.Gu7)(i.darken.value),
                  })
                : i.enlighten.enable &&
                  (e.roll.alter = {
                    type: O.qHU.enlighten,
                    value: (0, O.Gu7)(i.enlighten.value),
                  });
          })(this._engine, t);
        }
        isEnabled(t) {
          let e = t.options.roll;
          return !t.destroyed && !t.spawning && !!e?.enable;
        }
        loadOptions(t, ...e) {
          for (let i of (t.roll || (t.roll = new Roll()), e))
            t.roll.load(i?.roll);
        }
        update(t, e) {
          this.isEnabled(t) &&
            (function (t, e) {
              let i = t.options.roll,
                s = t.roll;
              if (!s || !i?.enable) return;
              let a = s.speed * e.factor;
              (s.angle += a), s.angle > I && (s.angle -= I);
            })(t, e);
        }
      };
      async function loadRollUpdater(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addParticleUpdater(
            "roll",
            () => Promise.resolve(new RollUpdater(t)),
            e
          );
      }
      let T = 2 * Math.PI;
      let BaseMover = class BaseMover {
        init(t) {
          let e = t.options,
            i = e.move.gravity;
          (t.gravity = {
            enable: i.enable,
            acceleration: (0, O.Gu7)(i.acceleration),
            inverse: i.inverse,
          }),
            (function (t) {
              let e = t.container,
                i = t.options,
                s = i.move.spin;
              if (!s.enable) return;
              let a = s.position ?? { x: 50, y: 50 },
                o = {
                  x: 0.01 * a.x * e.canvas.size.width,
                  y: 0.01 * a.y * e.canvas.size.height,
                },
                r = t.getPosition(),
                l = (0, O.Spd)(r, o),
                c = (0, O.Gu7)(s.acceleration);
              (t.retina.spinAcceleration = c * e.retina.pixelRatio),
                (t.spin = {
                  center: o,
                  direction:
                    t.velocity.x >= 0
                      ? O.RnL.clockwise
                      : O.RnL.counterClockwise,
                  angle: (0, O.sZz)() * T,
                  radius: l,
                  acceleration: t.retina.spinAcceleration,
                });
            })(t);
        }
        isEnabled(t) {
          return !t.destroyed && t.options.move.enable;
        }
        move(t, e) {
          let i = t.options,
            s = i.move;
          if (!s.enable) return;
          let a = t.container,
            o = a.retina.pixelRatio;
          (t.retina.moveSpeed ??= (0, O.Gu7)(s.speed) * o),
            (t.retina.moveDrift ??= (0, O.Gu7)(t.options.move.drift) * o);
          let r = t.slow.inRange ? t.slow.factor : 1,
            l = t.retina.moveSpeed * a.retina.reduceFactor,
            c = t.retina.moveDrift,
            h = (0, O.KIV)(i.size.value) * o,
            d = s.size ? t.getRadius() / h : 1,
            u = e.factor || 1,
            p = (l * d * r * u) / 2,
            g = t.retina.maxSpeed ?? a.retina.maxSpeed;
          s.spin.enable
            ? (function (t, e) {
                let i = t.container;
                if (!t.spin) return;
                let s = t.spin.direction === O.RnL.clockwise,
                  a = {
                    x: s ? Math.cos : Math.sin,
                    y: s ? Math.sin : Math.cos,
                  };
                (t.position.x =
                  t.spin.center.x + t.spin.radius * a.x(t.spin.angle)),
                  (t.position.y =
                    t.spin.center.y + t.spin.radius * a.y(t.spin.angle)),
                  (t.spin.radius += t.spin.acceleration);
                let o = Math.max(i.canvas.size.width, i.canvas.size.height),
                  r = 0.5 * o;
                t.spin.radius > r
                  ? ((t.spin.radius = r), (t.spin.acceleration *= -1))
                  : t.spin.radius < 0 &&
                    ((t.spin.radius = 0), (t.spin.acceleration *= -1)),
                  (t.spin.angle += 0.01 * e * (1 - t.spin.radius / o));
              })(t, p)
            : (function (t, e, i, s, a, o) {
                (function (t, e) {
                  let i = t.options,
                    s = i.move.path,
                    a = s.enable;
                  if (!a) return;
                  if (t.lastPathTime <= t.pathDelay) {
                    t.lastPathTime += e.value;
                    return;
                  }
                  let o = t.pathGenerator?.generate(t, e);
                  o && t.velocity.addTo(o),
                    s.clamp &&
                      ((t.velocity.x = (0, O.uZ5)(t.velocity.x, -1, 1)),
                      (t.velocity.y = (0, O.uZ5)(t.velocity.y, -1, 1))),
                    (t.lastPathTime -= t.pathDelay);
                })(t, o);
                let r = t.gravity,
                  l = r?.enable && r.inverse ? -1 : 1;
                a && i && (t.velocity.x += (a * o.factor) / (60 * i)),
                  r?.enable &&
                    i &&
                    (t.velocity.y +=
                      (l * (r.acceleration * o.factor)) / (60 * i));
                let c = t.moveDecay;
                t.velocity.multTo(c);
                let h = t.velocity.mult(i);
                r?.enable &&
                  s > 0 &&
                  ((!r.inverse && h.y >= 0 && h.y >= s) ||
                    (r.inverse && h.y <= 0 && h.y <= -s)) &&
                  ((h.y = l * s), i && (t.velocity.y = h.y / i));
                let d = t.options.zIndex,
                  u = (1 - t.zIndexFactor) ** d.velocityRate;
                h.multTo(u);
                let { position: p } = t;
                p.addTo(h),
                  e.vibrate &&
                    ((p.x += Math.sin(p.x * Math.cos(p.y))),
                    (p.y += Math.cos(p.y * Math.sin(p.x))));
              })(t, s, p, g, c, e),
            (function (t) {
              let e = t.initialPosition,
                { dx: i, dy: s } = (0, O.oW6)(e, t.position),
                a = Math.abs(i),
                o = Math.abs(s),
                { maxDistance: r } = t.retina,
                l = r.horizontal,
                c = r.vertical;
              if (l || c) {
                if (((l && a >= l) || (c && o >= c)) && !t.misplaced)
                  (t.misplaced = (!!l && a > l) || (!!c && o > c)),
                    l && (t.velocity.x = 0.5 * t.velocity.y - t.velocity.x),
                    c && (t.velocity.y = 0.5 * t.velocity.x - t.velocity.y);
                else if ((!l || a < l) && (!c || o < c) && t.misplaced)
                  t.misplaced = !1;
                else if (t.misplaced) {
                  let i = t.position,
                    s = t.velocity;
                  l &&
                    ((i.x < e.x && s.x < 0) || (i.x > e.x && s.x > 0)) &&
                    (s.x *= -(0, O.sZz)()),
                    c &&
                      ((i.y < e.y && s.y < 0) || (i.y > e.y && s.y > 0)) &&
                      (s.y *= -(0, O.sZz)());
                }
              }
            })(t);
        }
      };
      async function loadBaseMover(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addMover("base", () => Promise.resolve(new BaseMover()), e);
      }
      let L = 2 * Math.PI;
      let CircleDrawer = class CircleDrawer {
        constructor() {
          this.validTypes = ["circle"];
        }
        draw(t) {
          !(function (t) {
            let { context: e, particle: i, radius: s } = t;
            i.circleRange || (i.circleRange = { min: 0, max: L });
            let a = i.circleRange;
            e.arc(0, 0, s, a.min, a.max, !1);
          })(t);
        }
        getSidesCount() {
          return 12;
        }
        particleInit(t, e) {
          let i = e.shapeData,
            s = i?.angle ?? { max: 360, min: 0 };
          e.circleRange = (0, O.Kn2)(s)
            ? { min: (0, O.Idc)(s.min), max: (0, O.Idc)(s.max) }
            : { min: 0, max: (0, O.Idc)(s) };
        }
      };
      async function loadCircleShape(t, e = !0) {
        t.checkVersion("3.8.1"), await t.addShape(new CircleDrawer(), e);
      }
      let ColorUpdater = class ColorUpdater {
        constructor(t, e) {
          (this._container = t), (this._engine = e);
        }
        init(t) {
          let e = (0, O.lNs)(
            this._engine,
            t.options.color,
            t.id,
            t.options.reduceDuplicates
          );
          e &&
            (t.color = (0, O.bS$)(
              e,
              t.options.color.animation,
              this._container.retina.reduceFactor
            ));
        }
        isEnabled(t) {
          let { h: e, s: i, l: s } = t.options.color.animation,
            { color: a } = t;
          return (
            !t.destroyed &&
            !t.spawning &&
            ((a?.h.value !== void 0 && e.enable) ||
              (a?.s.value !== void 0 && i.enable) ||
              (a?.l.value !== void 0 && s.enable))
          );
        }
        update(t, e) {
          (0, O.PBz)(t.color, e);
        }
      };
      async function loadColorUpdater(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addParticleUpdater(
            "color",
            (e) => Promise.resolve(new ColorUpdater(e, t)),
            e
          );
      }
      ((r = w || (w = {}))[(r.r = 1)] = "r"),
        (r[(r.g = 2)] = "g"),
        (r[(r.b = 3)] = "b"),
        (r[(r.a = 4)] = "a");
      let B = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
        F = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i;
      let HexColorManager = class HexColorManager {
        constructor() {
          (this.key = "hex"), (this.stringPrefix = "#");
        }
        handleColor(t) {
          return this._parseString(t.value);
        }
        handleRangeColor(t) {
          return this._parseString(t.value);
        }
        parseString(t) {
          return this._parseString(t);
        }
        _parseString(t) {
          if ("string" != typeof t || !t?.startsWith(this.stringPrefix)) return;
          let e = t.replace(
              B,
              (t, e, i, s, a) =>
                e + e + i + i + s + s + (void 0 !== a ? a + a : "")
            ),
            i = F.exec(e);
          return i
            ? {
                a: void 0 !== i[w.a] ? parseInt(i[w.a], 16) / 255 : 1,
                b: parseInt(i[w.b], 16),
                g: parseInt(i[w.g], 16),
                r: parseInt(i[w.r], 16),
              }
            : void 0;
        }
      };
      async function loadHexColorPlugin(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addColorManager(new HexColorManager(), e);
      }
      ((l = x || (x = {}))[(l.h = 1)] = "h"),
        (l[(l.s = 2)] = "s"),
        (l[(l.l = 3)] = "l"),
        (l[(l.a = 5)] = "a");
      let HslColorManager = class HslColorManager {
        constructor() {
          (this.key = "hsl"), (this.stringPrefix = "hsl");
        }
        handleColor(t) {
          let e = t.value,
            i = e.hsl ?? t.value;
          if (void 0 !== i.h && void 0 !== i.s && void 0 !== i.l)
            return (0, O.veL)(i);
        }
        handleRangeColor(t) {
          let e = t.value,
            i = e.hsl ?? t.value;
          if (void 0 !== i.h && void 0 !== i.l)
            return (0, O.veL)({
              h: (0, O.Gu7)(i.h),
              l: (0, O.Gu7)(i.l),
              s: (0, O.Gu7)(i.s),
            });
        }
        parseString(t) {
          if (!t.startsWith("hsl")) return;
          let e =
            /hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i.exec(
              t
            );
          return e
            ? (0, O.Y6v)({
                a: e.length > 4 ? (0, O.BVM)(e[x.a]) : 1,
                h: parseInt(e[x.h], 10),
                l: parseInt(e[x.l], 10),
                s: parseInt(e[x.s], 10),
              })
            : void 0;
        }
      };
      async function loadHslColorPlugin(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addColorManager(new HslColorManager(), e);
      }
      let OpacityUpdater = class OpacityUpdater {
        constructor(t) {
          this.container = t;
        }
        init(t) {
          let e = t.options.opacity;
          t.opacity = (0, O.V0)(e, 1);
          let i = e.animation;
          i.enable &&
            ((t.opacity.velocity =
              ((0, O.Gu7)(i.speed) / O.tZy) *
              this.container.retina.reduceFactor),
            i.sync || (t.opacity.velocity *= (0, O.sZz)()));
        }
        isEnabled(t) {
          return (
            !t.destroyed &&
            !t.spawning &&
            !!t.opacity &&
            t.opacity.enable &&
            ((t.opacity.maxLoops ?? 0) <= 0 ||
              ((t.opacity.maxLoops ?? 0) > 0 &&
                (t.opacity.loops ?? 0) < (t.opacity.maxLoops ?? 0)))
          );
        }
        reset(t) {
          t.opacity && ((t.opacity.time = 0), (t.opacity.loops = 0));
        }
        update(t, e) {
          this.isEnabled(t) &&
            t.opacity &&
            (0, O.CrJ)(
              t,
              t.opacity,
              !0,
              t.options.opacity.animation.destroy,
              e
            );
        }
      };
      async function loadOpacityUpdater(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addParticleUpdater(
            "opacity",
            (t) => Promise.resolve(new OpacityUpdater(t)),
            e
          );
      }
      let BounceOutMode = class BounceOutMode {
        constructor(t) {
          (this.container = t), (this.modes = [O.Voc.bounce, O.Voc.split]);
        }
        update(t, e, i, s) {
          if (!this.modes.includes(s)) return;
          let a = this.container,
            o = !1;
          for (let s of a.plugins.values())
            if (
              (void 0 !== s.particleBounce && (o = s.particleBounce(t, i, e)),
              o)
            )
              break;
          if (o) return;
          let r = t.getPosition(),
            l = t.offset,
            c = t.getRadius(),
            h = (0, O.M_G)(r, c),
            d = a.canvas.size;
          !(function (t) {
            if (
              (t.outMode !== O.Voc.bounce && t.outMode !== O.Voc.split) ||
              (t.direction !== O.DYc.left && t.direction !== O.DYc.right)
            )
              return;
            t.bounds.right < 0 && t.direction === O.DYc.left
              ? (t.particle.position.x = t.size + t.offset.x)
              : t.bounds.left > t.canvasSize.width &&
                t.direction === O.DYc.right &&
                (t.particle.position.x =
                  t.canvasSize.width - t.size - t.offset.x);
            let e = t.particle.velocity.x,
              i = !1;
            if (
              (t.direction === O.DYc.right &&
                t.bounds.right >= t.canvasSize.width &&
                e > 0) ||
              (t.direction === O.DYc.left && t.bounds.left <= 0 && e < 0)
            ) {
              let e = (0, O.Gu7)(t.particle.options.bounce.horizontal.value);
              (t.particle.velocity.x *= -e), (i = !0);
            }
            if (!i) return;
            let s = t.offset.x + t.size;
            t.bounds.right >= t.canvasSize.width && t.direction === O.DYc.right
              ? (t.particle.position.x = t.canvasSize.width - s)
              : t.bounds.left <= 0 &&
                t.direction === O.DYc.left &&
                (t.particle.position.x = s),
              t.outMode === O.Voc.split && t.particle.destroy();
          })({
            particle: t,
            outMode: s,
            direction: e,
            bounds: h,
            canvasSize: d,
            offset: l,
            size: c,
          }),
            (function (t) {
              if (
                (t.outMode !== O.Voc.bounce && t.outMode !== O.Voc.split) ||
                (t.direction !== O.DYc.bottom && t.direction !== O.DYc.top)
              )
                return;
              t.bounds.bottom < 0 && t.direction === O.DYc.top
                ? (t.particle.position.y = t.size + t.offset.y)
                : t.bounds.top > t.canvasSize.height &&
                  t.direction === O.DYc.bottom &&
                  (t.particle.position.y =
                    t.canvasSize.height - t.size - t.offset.y);
              let e = t.particle.velocity.y,
                i = !1;
              if (
                (t.direction === O.DYc.bottom &&
                  t.bounds.bottom >= t.canvasSize.height &&
                  e > 0) ||
                (t.direction === O.DYc.top && t.bounds.top <= 0 && e < 0)
              ) {
                let e = (0, O.Gu7)(t.particle.options.bounce.vertical.value);
                (t.particle.velocity.y *= -e), (i = !0);
              }
              if (!i) return;
              let s = t.offset.y + t.size;
              t.bounds.bottom >= t.canvasSize.height &&
              t.direction === O.DYc.bottom
                ? (t.particle.position.y = t.canvasSize.height - s)
                : t.bounds.top <= 0 &&
                  t.direction === O.DYc.top &&
                  (t.particle.position.y = s),
                t.outMode === O.Voc.split && t.particle.destroy();
            })({
              particle: t,
              outMode: s,
              direction: e,
              bounds: h,
              canvasSize: d,
              offset: l,
              size: c,
            });
        }
      };
      let DestroyOutMode = class DestroyOutMode {
        constructor(t) {
          (this.container = t), (this.modes = [O.Voc.destroy]);
        }
        update(t, e, i, s) {
          if (!this.modes.includes(s)) return;
          let a = this.container;
          switch (t.outType) {
            case O.Igb.normal:
            case O.Igb.outside:
              if (
                (0, O.Ac)(
                  t.position,
                  a.canvas.size,
                  O.OWs.origin,
                  t.getRadius(),
                  e
                )
              )
                return;
              break;
            case O.Igb.inside: {
              let { dx: e, dy: i } = (0, O.oW6)(t.position, t.moveCenter),
                { x: s, y: a } = t.velocity;
              if (
                (s < 0 && e > t.moveCenter.radius) ||
                (a < 0 && i > t.moveCenter.radius) ||
                (s >= 0 && e < -t.moveCenter.radius) ||
                (a >= 0 && i < -t.moveCenter.radius)
              )
                return;
            }
          }
          a.particles.remove(t, t.group, !0);
        }
      };
      let NoneOutMode = class NoneOutMode {
        constructor(t) {
          (this.container = t), (this.modes = [O.Voc.none]);
        }
        update(t, e, i, s) {
          if (
            !this.modes.includes(s) ||
            ((t.options.move.distance.horizontal &&
              (e === O.DYc.left || e === O.DYc.right)) ??
              (t.options.move.distance.vertical &&
                (e === O.DYc.top || e === O.DYc.bottom)))
          )
            return;
          let a = t.options.move.gravity,
            o = this.container,
            r = o.canvas.size,
            l = t.getRadius();
          if (a.enable) {
            let i = t.position;
            ((!a.inverse && i.y > r.height + l && e === O.DYc.bottom) ||
              (a.inverse && i.y < -l && e === O.DYc.top)) &&
              o.particles.remove(t);
          } else {
            if (
              (t.velocity.y > 0 && t.position.y <= r.height + l) ||
              (t.velocity.y < 0 && t.position.y >= -l) ||
              (t.velocity.x > 0 && t.position.x <= r.width + l) ||
              (t.velocity.x < 0 && t.position.x >= -l)
            )
              return;
            (0, O.Ac)(t.position, o.canvas.size, O.OWs.origin, l, e) ||
              o.particles.remove(t);
          }
        }
      };
      let OutOutMode = class OutOutMode {
        constructor(t) {
          (this.container = t), (this.modes = [O.Voc.out]);
        }
        update(t, e, i, s) {
          if (!this.modes.includes(s)) return;
          let a = this.container;
          if (t.outType === O.Igb.inside) {
            let { x: e, y: i } = t.velocity,
              s = O.OWs.origin;
            (s.length = t.moveCenter.radius),
              (s.angle = t.velocity.angle + Math.PI),
              s.addTo(O.OWs.create(t.moveCenter));
            let { dx: o, dy: r } = (0, O.oW6)(t.position, s);
            if (
              (e <= 0 && o >= 0) ||
              (i <= 0 && r >= 0) ||
              (e >= 0 && o <= 0) ||
              (i >= 0 && r <= 0)
            )
              return;
            (t.position.x = Math.floor(
              (0, O.vdf)({ min: 0, max: a.canvas.size.width })
            )),
              (t.position.y = Math.floor(
                (0, O.vdf)({ min: 0, max: a.canvas.size.height })
              ));
            let { dx: l, dy: c } = (0, O.oW6)(t.position, t.moveCenter);
            (t.direction = Math.atan2(-c, -l)),
              (t.velocity.angle = t.direction);
          } else {
            if (
              (0, O.Ac)(
                t.position,
                a.canvas.size,
                O.OWs.origin,
                t.getRadius(),
                e
              )
            )
              return;
            switch (t.outType) {
              case O.Igb.outside: {
                (t.position.x =
                  Math.floor(
                    (0, O.vdf)({
                      min: -t.moveCenter.radius,
                      max: t.moveCenter.radius,
                    })
                  ) + t.moveCenter.x),
                  (t.position.y =
                    Math.floor(
                      (0, O.vdf)({
                        min: -t.moveCenter.radius,
                        max: t.moveCenter.radius,
                      })
                    ) + t.moveCenter.y);
                let { dx: e, dy: i } = (0, O.oW6)(t.position, t.moveCenter);
                t.moveCenter.radius &&
                  ((t.direction = Math.atan2(i, e)),
                  (t.velocity.angle = t.direction));
                break;
              }
              case O.Igb.normal: {
                let i = t.options.move.warp,
                  s = a.canvas.size,
                  o = {
                    bottom: s.height + t.getRadius() + t.offset.y,
                    left: -t.getRadius() - t.offset.x,
                    right: s.width + t.getRadius() + t.offset.x,
                    top: -t.getRadius() - t.offset.y,
                  },
                  r = t.getRadius(),
                  l = (0, O.M_G)(t.position, r);
                e === O.DYc.right && l.left > s.width + t.offset.x
                  ? ((t.position.x = o.left),
                    (t.initialPosition.x = t.position.x),
                    i ||
                      ((t.position.y = (0, O.sZz)() * s.height),
                      (t.initialPosition.y = t.position.y)))
                  : e === O.DYc.left &&
                    l.right < -t.offset.x &&
                    ((t.position.x = o.right),
                    (t.initialPosition.x = t.position.x),
                    i ||
                      ((t.position.y = (0, O.sZz)() * s.height),
                      (t.initialPosition.y = t.position.y))),
                  e === O.DYc.bottom && l.top > s.height + t.offset.y
                    ? (i ||
                        ((t.position.x = (0, O.sZz)() * s.width),
                        (t.initialPosition.x = t.position.x)),
                      (t.position.y = o.top),
                      (t.initialPosition.y = t.position.y))
                    : e === O.DYc.top &&
                      l.bottom < -t.offset.y &&
                      (i ||
                        ((t.position.x = (0, O.sZz)() * s.width),
                        (t.initialPosition.x = t.position.x)),
                      (t.position.y = o.bottom),
                      (t.initialPosition.y = t.position.y));
              }
            }
          }
        }
      };
      let checkOutMode = (t, e) =>
        t.default === e ||
        t.bottom === e ||
        t.left === e ||
        t.right === e ||
        t.top === e;
      let OutOfCanvasUpdater = class OutOfCanvasUpdater {
        constructor(t) {
          (this._addUpdaterIfMissing = (t, e, i) => {
            let s = t.options.move.outModes;
            !this.updaters.has(e) &&
              checkOutMode(s, e) &&
              this.updaters.set(e, i(this.container));
          }),
            (this._updateOutMode = (t, e, i, s) => {
              for (let a of this.updaters.values()) a.update(t, s, e, i);
            }),
            (this.container = t),
            (this.updaters = new Map());
        }
        init(t) {
          this._addUpdaterIfMissing(
            t,
            O.Voc.bounce,
            (t) => new BounceOutMode(t)
          ),
            this._addUpdaterIfMissing(t, O.Voc.out, (t) => new OutOutMode(t)),
            this._addUpdaterIfMissing(
              t,
              O.Voc.destroy,
              (t) => new DestroyOutMode(t)
            ),
            this._addUpdaterIfMissing(t, O.Voc.none, (t) => new NoneOutMode(t));
        }
        isEnabled(t) {
          return !t.destroyed && !t.spawning;
        }
        update(t, e) {
          let i = t.options.move.outModes;
          this._updateOutMode(t, e, i.bottom ?? i.default, O.DYc.bottom),
            this._updateOutMode(t, e, i.left ?? i.default, O.DYc.left),
            this._updateOutMode(t, e, i.right ?? i.default, O.DYc.right),
            this._updateOutMode(t, e, i.top ?? i.default, O.DYc.top);
        }
      };
      async function loadOutModesUpdater(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addParticleUpdater(
            "outModes",
            (t) => Promise.resolve(new OutOfCanvasUpdater(t)),
            e
          );
      }
      ((c = _ || (_ = {}))[(c.r = 1)] = "r"),
        (c[(c.g = 2)] = "g"),
        (c[(c.b = 3)] = "b"),
        (c[(c.a = 5)] = "a");
      let RgbColorManager = class RgbColorManager {
        constructor() {
          (this.key = "rgb"), (this.stringPrefix = "rgb");
        }
        handleColor(t) {
          let e = t.value,
            i = e.rgb ?? t.value;
          if (void 0 !== i.r) return i;
        }
        handleRangeColor(t) {
          let e = t.value,
            i = e.rgb ?? t.value;
          if (void 0 !== i.r)
            return {
              r: (0, O.Gu7)(i.r),
              g: (0, O.Gu7)(i.g),
              b: (0, O.Gu7)(i.b),
            };
        }
        parseString(t) {
          if (!t.startsWith(this.stringPrefix)) return;
          let e =
            /rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i.exec(
              t
            );
          return e
            ? {
                a: e.length > 4 ? (0, O.BVM)(e[_.a]) : 1,
                b: parseInt(e[_.b], 10),
                g: parseInt(e[_.g], 10),
                r: parseInt(e[_.r], 10),
              }
            : void 0;
        }
      };
      async function loadRgbColorPlugin(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addColorManager(new RgbColorManager(), e);
      }
      let SizeUpdater = class SizeUpdater {
        init(t) {
          let e = t.container,
            i = t.options.size,
            s = i.animation;
          s.enable &&
            ((t.size.velocity =
              ((t.retina.sizeAnimationSpeed ?? e.retina.sizeAnimationSpeed) /
                O.tZy) *
              e.retina.reduceFactor),
            s.sync || (t.size.velocity *= (0, O.sZz)()));
        }
        isEnabled(t) {
          return (
            !t.destroyed &&
            !t.spawning &&
            t.size.enable &&
            ((t.size.maxLoops ?? 0) <= 0 ||
              ((t.size.maxLoops ?? 0) > 0 &&
                (t.size.loops ?? 0) < (t.size.maxLoops ?? 0)))
          );
        }
        reset(t) {
          t.size.loops = 0;
        }
        update(t, e) {
          this.isEnabled(t) &&
            (0, O.CrJ)(t, t.size, !0, t.options.size.animation.destroy, e);
        }
      };
      async function loadSizeUpdater(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addParticleUpdater(
            "size",
            () => Promise.resolve(new SizeUpdater()),
            e
          );
      }
      async function loadBasic(t, e = !0) {
        t.checkVersion("3.8.1"),
          await loadHexColorPlugin(t, !1),
          await loadHslColorPlugin(t, !1),
          await loadRgbColorPlugin(t, !1),
          await loadBaseMover(t, !1),
          await loadCircleShape(t, !1),
          await loadColorUpdater(t, !1),
          await loadOpacityUpdater(t, !1),
          await loadOutModesUpdater(t, !1),
          await loadSizeUpdater(t, !1),
          await t.refresh(e);
      }
      async function loadEasingQuadPlugin(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addEasing(O.nxi.easeInQuad, (t) => t ** 2, !1),
          await t.addEasing(O.nxi.easeOutQuad, (t) => 1 - (1 - t) ** 2, !1),
          await t.addEasing(
            O.nxi.easeInOutQuad,
            (t) => (t < 0.5 ? 2 * t ** 2 : 1 - (-2 * t + 2) ** 2 / 2),
            !1
          ),
          await t.refresh(e);
      }
      let A =
        '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';
      let EmojiDrawer = class EmojiDrawer {
        constructor() {
          (this.validTypes = ["emoji"]), (this._emojiShapeDict = new Map());
        }
        destroy() {
          for (let [t, e] of this._emojiShapeDict)
            e instanceof ImageBitmap && e?.close(),
              this._emojiShapeDict.delete(t);
        }
        draw(t) {
          let e = t.particle.emojiDataKey;
          if (!e) return;
          let i = this._emojiShapeDict.get(e);
          i &&
            (function (t, e) {
              let { context: i, opacity: s } = t,
                a = i.globalAlpha;
              if (!e) return;
              let o = e.width,
                r = 0.5 * o;
              (i.globalAlpha = s),
                i.drawImage(e, -r, -r, o, o),
                (i.globalAlpha = a);
            })(t, i);
        }
        async init(t) {
          let e = t.actualOptions,
            { validTypes: i } = this;
          if (!i.find((t) => (0, O.dBL)(t, e.particles.shape.type))) return;
          let s = [(0, O.mxw)(A)],
            a = i.map((t) => e.particles.shape.options[t]).find((t) => !!t);
          a &&
            (0, O.KH1)(a, (t) => {
              t.font && s.push((0, O.mxw)(t.font));
            }),
            await Promise.all(s);
        }
        particleDestroy(t) {
          t.emojiDataKey = void 0;
        }
        particleInit(t, e) {
          let i;
          let s = e.shapeData;
          if (!s?.value) return;
          let a = (0, O.wA_)(s.value, e.randomIndexData);
          if (!a) return;
          let o =
              "string" == typeof a
                ? { font: s.font ?? A, padding: s.padding ?? 0, value: a }
                : { font: A, padding: 0, ...s, ...a },
            r = o.font,
            l = o.value,
            c = `${l}_${r}`;
          if (this._emojiShapeDict.has(c)) {
            e.emojiDataKey = c;
            return;
          }
          let h = 2 * o.padding,
            d = (0, O.KIV)(e.size.value),
            u = d + h,
            p = 2 * u;
          if ("undefined" != typeof OffscreenCanvas) {
            let t = new OffscreenCanvas(p, p),
              e = t.getContext("2d");
            if (!e) return;
            (e.font = `400 ${2 * d}px ${r}`),
              (e.textBaseline = "middle"),
              (e.textAlign = "center"),
              e.fillText(l, u, u),
              (i = t.transferToImageBitmap());
          } else {
            let t = document.createElement("canvas");
            (t.width = p), (t.height = p);
            let e = t.getContext("2d");
            if (!e) return;
            (e.font = `400 ${2 * d}px ${r}`),
              (e.textBaseline = "middle"),
              (e.textAlign = "center"),
              e.fillText(l, u, u),
              (i = t);
          }
          this._emojiShapeDict.set(c, i), (e.emojiDataKey = c);
        }
      };
      async function loadEmojiShape(t, e = !0) {
        t.checkVersion("3.8.1"), await t.addShape(new EmojiDrawer(), e);
      }
      function processAttract(t, e, i, s, a, o) {
        let r = e.actualOptions.interactivity.modes.attract;
        if (!r) return;
        let l = e.particles.quadTree.query(a, o);
        for (let e of l) {
          let { dx: a, dy: o, distance: l } = (0, O.oW6)(e.position, i),
            c = r.speed * r.factor,
            h = (0, O.uZ5)(t.getEasing(r.easing)(1 - l / s) * c, 1, r.maxSpeed),
            d = O.OWs.create(l ? (a / l) * h : c, l ? (o / l) * h : c);
          e.position.subFrom(d);
        }
      }
      let Attract = class Attract {
        constructor() {
          (this.distance = 200),
            (this.duration = 0.4),
            (this.easing = O.nxi.easeOutQuad),
            (this.factor = 1),
            (this.maxSpeed = 50),
            (this.speed = 1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.easing && (this.easing = t.easing),
            void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed),
            void 0 === t.speed || (this.speed = t.speed));
        }
      };
      let V = "attract";
      let Attractor = class Attractor extends O.L8z {
        constructor(t, e) {
          super(e),
            (this._engine = t),
            e.attract || (e.attract = { particles: [] }),
            (this.handleClickMode = (t) => {
              let i = this.container.actualOptions,
                s = i.interactivity.modes.attract;
              if (s && t === V) {
                for (let t of (e.attract || (e.attract = { particles: [] }),
                (e.attract.clicking = !0),
                (e.attract.count = 0),
                e.attract.particles))
                  this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
                (e.attract.particles = []),
                  (e.attract.finish = !1),
                  setTimeout(() => {
                    e.destroyed ||
                      (e.attract || (e.attract = { particles: [] }),
                      (e.attract.clicking = !1));
                  }, s.duration * O.X5o);
              }
            });
        }
        clear() {}
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.attract;
          e &&
            (t.retina.attractModeDistance = e.distance * t.retina.pixelRatio);
        }
        interact() {
          let t = this.container,
            e = t.actualOptions,
            i = t.interactivity.status === O.WtO,
            s = e.interactivity.events,
            { enable: a, mode: o } = s.onHover,
            { enable: r, mode: l } = s.onClick;
          i && a && (0, O.dBL)(V, o)
            ? (function (t, e, i) {
                let s = e.interactivity.mouse.position,
                  a = e.retina.attractModeDistance;
                a &&
                  !(a < 0) &&
                  s &&
                  processAttract(t, e, s, a, new O.Cdc(s.x, s.y, a), (t) =>
                    i(t)
                  );
              })(this._engine, this.container, (t) => this.isEnabled(t))
            : r &&
              (0, O.dBL)(V, l) &&
              (function (t, e, i) {
                e.attract || (e.attract = { particles: [] });
                let { attract: s } = e;
                if (
                  (s.finish ||
                    (s.count || (s.count = 0),
                    s.count++,
                    s.count !== e.particles.count || (s.finish = !0)),
                  s.clicking)
                ) {
                  let s = e.interactivity.mouse.clickPosition,
                    a = e.retina.attractModeDistance;
                  if (!a || a < 0 || !s) return;
                  processAttract(t, e, s, a, new O.Cdc(s.x, s.y, a), (t) =>
                    i(t)
                  );
                } else !1 === s.clicking && (s.particles = []);
              })(this._engine, this.container, (t) => this.isEnabled(t));
        }
        isEnabled(t) {
          let e = this.container,
            i = e.actualOptions,
            s = e.interactivity.mouse,
            a = (t?.interactivity ?? i.interactivity).events;
          if (
            (!s.position || !a.onHover.enable) &&
            (!s.clickPosition || !a.onClick.enable)
          )
            return !1;
          let o = a.onHover.mode,
            r = a.onClick.mode;
          return (0, O.dBL)(V, o) || (0, O.dBL)(V, r);
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.attract || (t.attract = new Attract()), e))
            t.attract.load(i?.attract);
        }
        reset() {}
      };
      async function loadExternalAttractInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "externalAttract",
            (e) => Promise.resolve(new Attractor(t, e)),
            e
          );
      }
      let q = 0.5 * Math.PI;
      function processBounce(t, e, i, s, a) {
        let o = t.particles.quadTree.query(s, a);
        for (let t of o)
          s instanceof O.Cdc
            ? (0, O.kRC)((0, O.gy4)(t), {
                position: e,
                radius: i,
                mass: i ** 2 * q,
                velocity: O.OWs.origin,
                factor: O.OWs.origin,
              })
            : s instanceof O.AeJ && (0, O.dpV)(t, (0, O.M_G)(e, i));
      }
      let Bounce = class Bounce {
        constructor() {
          this.distance = 200;
        }
        load(t) {
          (0, O.Ft)(t) || void 0 === t.distance || (this.distance = t.distance);
        }
      };
      let G = "bounce";
      let Bouncer = class Bouncer extends O.L8z {
        constructor(t) {
          super(t);
        }
        clear() {}
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.bounce;
          e && (t.retina.bounceModeDistance = e.distance * t.retina.pixelRatio);
        }
        interact() {
          let t = this.container,
            e = t.actualOptions,
            i = e.interactivity.events,
            s = t.interactivity.status === O.WtO,
            a = i.onHover.enable,
            o = i.onHover.mode,
            r = i.onDiv;
          if (s && a && (0, O.dBL)(G, o))
            !(function (t, e) {
              let i = t.retina.pixelRatio,
                s = t.interactivity.mouse.position,
                a = t.retina.bounceModeDistance;
              a &&
                !(a < 0) &&
                s &&
                processBounce(t, s, a, new O.Cdc(s.x, s.y, a + 10 * i), e);
            })(this.container, (t) => this.isEnabled(t));
          else {
            var l, c;
            (l = this.container),
              (c = (t) => this.isEnabled(t)),
              (0, O.XDe)(G, r, (t, e) =>
                (function (t, e, i, s) {
                  let a = document.querySelectorAll(e);
                  a.length &&
                    a.forEach((e) => {
                      let a = t.retina.pixelRatio,
                        o = {
                          x: (e.offsetLeft + 0.5 * e.offsetWidth) * a,
                          y: (e.offsetTop + 0.5 * e.offsetHeight) * a,
                        },
                        r = 0.5 * e.offsetWidth * a,
                        l = 10 * a,
                        c =
                          i.type === O.gqJ.circle
                            ? new O.Cdc(o.x, o.y, r + l)
                            : new O.AeJ(
                                e.offsetLeft * a - l,
                                e.offsetTop * a - l,
                                e.offsetWidth * a + 2 * l,
                                e.offsetHeight * a + 2 * l
                              );
                      s(o, r, c);
                    });
                })(l, t, e, (t, e, i) => processBounce(l, t, e, i, c))
              );
          }
        }
        isEnabled(t) {
          let e = this.container,
            i = e.actualOptions,
            s = e.interactivity.mouse,
            a = (t?.interactivity ?? i.interactivity).events,
            o = a.onDiv;
          return (
            (!!s.position &&
              a.onHover.enable &&
              (0, O.dBL)(G, a.onHover.mode)) ||
            (0, O.wm$)(G, o)
          );
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.bounce || (t.bounce = new Bounce()), e))
            t.bounce.load(i?.bounce);
        }
        reset() {}
      };
      async function loadExternalBounceInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "externalBounce",
            (t) => Promise.resolve(new Bouncer(t)),
            e
          );
      }
      let BubbleBase = class BubbleBase {
        constructor() {
          (this.distance = 200), (this.duration = 0.4), (this.mix = !1);
        }
        load(t) {
          if (!(0, O.Ft)(t)) {
            if (
              (void 0 !== t.distance && (this.distance = t.distance),
              void 0 !== t.duration && (this.duration = t.duration),
              void 0 !== t.mix && (this.mix = t.mix),
              void 0 !== t.opacity && (this.opacity = t.opacity),
              void 0 !== t.color)
            ) {
              let e = (0, O.kJL)(this.color) ? void 0 : this.color;
              this.color = (0, O.KH1)(t.color, (t) => O.OzF.create(e, t));
            }
            void 0 !== t.size && (this.size = t.size);
          }
        }
      };
      let BubbleDiv = class BubbleDiv extends BubbleBase {
        constructor() {
          super(), (this.selectors = []);
        }
        load(t) {
          super.load(t),
            (0, O.Ft)(t) ||
              void 0 === t.selectors ||
              (this.selectors = t.selectors);
        }
      };
      let Bubble = class Bubble extends BubbleBase {
        load(t) {
          super.load(t),
            (0, O.Ft)(t) ||
              (this.divs = (0, O.KH1)(t.divs, (t) => {
                let e = new BubbleDiv();
                return e.load(t), e;
              }));
        }
      };
      function calculateBubbleValue(t, e, i, s) {
        if (e >= i) {
          let a = t + (e - i) * s;
          return (0, O.uZ5)(a, t, e);
        }
        if (e < i) {
          let a = t - (i - e) * s;
          return (0, O.uZ5)(a, e, t);
        }
      }
      ((h = C || (C = {})).color = "color"),
        (h.opacity = "opacity"),
        (h.size = "size");
      let U = "bubble";
      let Bubbler = class Bubbler extends O.L8z {
        constructor(t, e) {
          super(t),
            (this._clickBubble = () => {
              let t = this.container,
                e = t.actualOptions,
                i = t.interactivity.mouse.clickPosition,
                s = e.interactivity.modes.bubble;
              if (!s || !i) return;
              t.bubble || (t.bubble = {});
              let a = t.retina.bubbleModeDistance;
              if (!a || a < 0) return;
              let o = t.particles.quadTree.queryCircle(i, a, (t) =>
                  this.isEnabled(t)
                ),
                { bubble: r } = t;
              for (let e of o) {
                if (!r.clicking) continue;
                e.bubble.inRange = !r.durationEnd;
                let o = e.getPosition(),
                  l = (0, O.Spd)(o, i),
                  c =
                    (new Date().getTime() -
                      (t.interactivity.mouse.clickTime ?? 0)) /
                    O.X5o;
                c > s.duration && (r.durationEnd = !0),
                  c > 2 * s.duration &&
                    ((r.clicking = !1), (r.durationEnd = !1));
                let h = {
                  bubbleObj: {
                    optValue: t.retina.bubbleModeSize,
                    value: e.bubble.radius,
                  },
                  particlesObj: {
                    optValue:
                      (0, O.KIV)(e.options.size.value) * t.retina.pixelRatio,
                    value: e.size.value,
                  },
                  type: C.size,
                };
                this._process(e, l, c, h);
                let d = {
                  bubbleObj: { optValue: s.opacity, value: e.bubble.opacity },
                  particlesObj: {
                    optValue: (0, O.KIV)(e.options.opacity.value),
                    value: e.opacity?.value ?? 1,
                  },
                  type: C.opacity,
                };
                this._process(e, l, c, d),
                  !r.durationEnd && l <= a
                    ? this._hoverBubbleColor(e, l)
                    : delete e.bubble.color;
              }
            }),
            (this._hoverBubble = () => {
              let t = this.container,
                e = t.interactivity.mouse.position,
                i = t.retina.bubbleModeDistance;
              if (!i || i < 0 || !e) return;
              let s = t.particles.quadTree.queryCircle(e, i, (t) =>
                this.isEnabled(t)
              );
              for (let a of s) {
                a.bubble.inRange = !0;
                let s = a.getPosition(),
                  o = (0, O.Spd)(s, e),
                  r = 1 - o / i;
                o <= i
                  ? r >= 0 &&
                    t.interactivity.status === O.WtO &&
                    (this._hoverBubbleSize(a, r),
                    this._hoverBubbleOpacity(a, r),
                    this._hoverBubbleColor(a, r))
                  : this.reset(a),
                  t.interactivity.status === O.aMP && this.reset(a);
              }
            }),
            (this._hoverBubbleColor = (t, e, i) => {
              let s = this.container.actualOptions,
                a = i ?? s.interactivity.modes.bubble;
              if (a) {
                if (!t.bubble.finalColor) {
                  let e = a.color;
                  if (!e) return;
                  let i = (0, O.wA_)(e);
                  t.bubble.finalColor = (0, O.lNs)(this._engine, i);
                }
                if (t.bubble.finalColor) {
                  if (a.mix) {
                    t.bubble.color = void 0;
                    let i = t.getFillColor();
                    t.bubble.color = i
                      ? (0, O.lCU)((0, O.ocL)(i, t.bubble.finalColor, 1 - e, e))
                      : t.bubble.finalColor;
                  } else t.bubble.color = t.bubble.finalColor;
                }
              }
            }),
            (this._hoverBubbleOpacity = (t, e, i) => {
              let s = this.container,
                a = s.actualOptions,
                o = i?.opacity ?? a.interactivity.modes.bubble?.opacity;
              if (!o) return;
              let r = t.options.opacity.value,
                l = t.opacity?.value ?? 1,
                c = calculateBubbleValue(l, o, (0, O.KIV)(r), e);
              void 0 !== c && (t.bubble.opacity = c);
            }),
            (this._hoverBubbleSize = (t, e, i) => {
              let s = this.container,
                a = i?.size
                  ? i.size * s.retina.pixelRatio
                  : s.retina.bubbleModeSize;
              if (void 0 === a) return;
              let o = (0, O.KIV)(t.options.size.value) * s.retina.pixelRatio,
                r = t.size.value,
                l = calculateBubbleValue(r, a, o, e);
              void 0 !== l && (t.bubble.radius = l);
            }),
            (this._process = (t, e, i, s) => {
              let a = this.container,
                o = s.bubbleObj.optValue,
                r = a.actualOptions,
                l = r.interactivity.modes.bubble;
              if (!l || void 0 === o) return;
              let c = l.duration,
                h = a.retina.bubbleModeDistance,
                d = s.particlesObj.optValue,
                u = s.bubbleObj.value,
                p = s.particlesObj.value ?? 0,
                g = s.type;
              if (h && !(h < 0) && o !== d) {
                if ((a.bubble || (a.bubble = {}), a.bubble.durationEnd))
                  u &&
                    (g === C.size && delete t.bubble.radius,
                    g === C.opacity && delete t.bubble.opacity);
                else if (e <= h) {
                  if ((u ?? p) !== o) {
                    let e = p - (i * (p - o)) / c;
                    g === C.size && (t.bubble.radius = e),
                      g === C.opacity && (t.bubble.opacity = e);
                  }
                } else
                  g === C.size && delete t.bubble.radius,
                    g === C.opacity && delete t.bubble.opacity;
              }
            }),
            (this._singleSelectorHover = (t, e, i) => {
              let s = this.container,
                a = document.querySelectorAll(e),
                o = s.actualOptions.interactivity.modes.bubble;
              o &&
                a.length &&
                a.forEach((e) => {
                  let a = s.retina.pixelRatio,
                    r = {
                      x: (e.offsetLeft + 0.5 * e.offsetWidth) * a,
                      y: (e.offsetTop + 0.5 * e.offsetHeight) * a,
                    },
                    l = 0.5 * e.offsetWidth * a,
                    c =
                      i.type === O.gqJ.circle
                        ? new O.Cdc(r.x, r.y, l)
                        : new O.AeJ(
                            e.offsetLeft * a,
                            e.offsetTop * a,
                            e.offsetWidth * a,
                            e.offsetHeight * a
                          ),
                    h = s.particles.quadTree.query(c, (t) => this.isEnabled(t));
                  for (let i of h) {
                    if (!c.contains(i.getPosition())) continue;
                    i.bubble.inRange = !0;
                    let s = o.divs,
                      a = (0, O.iCg)(s, e);
                    (i.bubble.div && i.bubble.div === e) ||
                      (this.clear(i, t, !0), (i.bubble.div = e)),
                      this._hoverBubbleSize(i, 1, a),
                      this._hoverBubbleOpacity(i, 1, a),
                      this._hoverBubbleColor(i, 1, a);
                  }
                });
            }),
            (this._engine = e),
            t.bubble || (t.bubble = {}),
            (this.handleClickMode = (e) => {
              e === U &&
                (t.bubble || (t.bubble = {}), (t.bubble.clicking = !0));
            });
        }
        clear(t, e, i) {
          (!t.bubble.inRange || i) &&
            (delete t.bubble.div,
            delete t.bubble.opacity,
            delete t.bubble.radius,
            delete t.bubble.color);
        }
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.bubble;
          e &&
            ((t.retina.bubbleModeDistance = e.distance * t.retina.pixelRatio),
            void 0 !== e.size &&
              (t.retina.bubbleModeSize = e.size * t.retina.pixelRatio));
        }
        interact(t) {
          let e = this.container.actualOptions,
            i = e.interactivity.events,
            s = i.onHover,
            a = i.onClick,
            o = s.enable,
            r = s.mode,
            l = a.enable,
            c = a.mode,
            h = i.onDiv;
          o && (0, O.dBL)(U, r)
            ? this._hoverBubble()
            : l && (0, O.dBL)(U, c)
            ? this._clickBubble()
            : (0, O.XDe)(U, h, (e, i) => this._singleSelectorHover(t, e, i));
        }
        isEnabled(t) {
          let e = this.container,
            i = e.actualOptions,
            s = e.interactivity.mouse,
            a = (t?.interactivity ?? i.interactivity).events,
            { onClick: o, onDiv: r, onHover: l } = a,
            c = (0, O.wm$)(U, r);
          return (
            (!!c ||
              (!!l.enable && !!s.position) ||
              (!!o.enable && !!s.clickPosition)) &&
            ((0, O.dBL)(U, l.mode) || (0, O.dBL)(U, o.mode) || c)
          );
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.bubble || (t.bubble = new Bubble()), e))
            t.bubble.load(i?.bubble);
        }
        reset(t) {
          t.bubble.inRange = !1;
        }
      };
      async function loadExternalBubbleInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "externalBubble",
            (e) => Promise.resolve(new Bubbler(e, t)),
            e
          );
      }
      let ConnectLinks = class ConnectLinks {
        constructor() {
          this.opacity = 0.5;
        }
        load(t) {
          (0, O.Ft)(t) || void 0 === t.opacity || (this.opacity = t.opacity);
        }
      };
      let Connect = class Connect {
        constructor() {
          (this.distance = 80),
            (this.links = new ConnectLinks()),
            (this.radius = 60);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.distance && (this.distance = t.distance),
            this.links.load(t.links),
            void 0 === t.radius || (this.radius = t.radius));
        }
      };
      let Connector = class Connector extends O.L8z {
        constructor(t) {
          super(t);
        }
        clear() {}
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.connect;
          e &&
            ((t.retina.connectModeDistance = e.distance * t.retina.pixelRatio),
            (t.retina.connectModeRadius = e.radius * t.retina.pixelRatio));
        }
        interact() {
          let t = this.container,
            e = t.actualOptions;
          if (
            e.interactivity.events.onHover.enable &&
            "pointermove" === t.interactivity.status
          ) {
            let e = t.interactivity.mouse.position,
              { connectModeDistance: i, connectModeRadius: s } = t.retina;
            if (!i || i < 0 || !s || s < 0 || !e) return;
            let a = t.particles.quadTree.queryCircle(e, Math.abs(s), (t) =>
              this.isEnabled(t)
            );
            a.forEach((e, s) => {
              let o = e.getPosition();
              for (let r of a.slice(s + 1)) {
                let s = r.getPosition(),
                  a = Math.abs(i),
                  l = Math.abs(o.x - s.x),
                  c = Math.abs(o.y - s.y);
                l < a &&
                  c < a &&
                  (function (t, e, i) {
                    t.canvas.draw((s) => {
                      var a;
                      let o = (function (t, e, i, s) {
                        let a = t.actualOptions,
                          o = a.interactivity.modes.connect;
                        if (o)
                          return (function (t, e, i, s) {
                            let a = Math.floor(i.getRadius() / e.getRadius()),
                              o = e.getFillColor(),
                              r = i.getFillColor();
                            if (!o || !r) return;
                            let l = e.getPosition(),
                              c = i.getPosition(),
                              h = (0, O.ocL)(
                                o,
                                r,
                                e.getRadius(),
                                i.getRadius()
                              ),
                              d = t.createLinearGradient(l.x, l.y, c.x, c.y);
                            return (
                              d.addColorStop(0, (0, O.vzQ)(o, s)),
                              d.addColorStop(
                                (0, O.uZ5)(a, 0, 1),
                                (0, O.izR)(h, s)
                              ),
                              d.addColorStop(1, (0, O.vzQ)(r, s)),
                              d
                            );
                          })(e, i, s, o.links.opacity);
                      })(t, s, e, i);
                      if (!o) return;
                      let r = e.getPosition(),
                        l = i.getPosition();
                      (a = e.retina.linksWidth ?? 0),
                        (0, O.pSR)(s, r, l),
                        (s.lineWidth = a),
                        (s.strokeStyle = o),
                        s.stroke();
                    });
                  })(t, e, r);
              }
            });
          }
        }
        isEnabled(t) {
          let e = this.container,
            i = e.interactivity.mouse,
            s = (t?.interactivity ?? e.actualOptions.interactivity).events;
          return (
            !!s.onHover.enable &&
            !!i.position &&
            (0, O.dBL)("connect", s.onHover.mode)
          );
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.connect || (t.connect = new Connect()), e))
            t.connect.load(i?.connect);
        }
        reset() {}
      };
      async function loadExternalConnectInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "externalConnect",
            (t) => Promise.resolve(new Connector(t)),
            e
          );
      }
      let GrabLinks = class GrabLinks {
        constructor() {
          (this.blink = !1), (this.consent = !1), (this.opacity = 1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.blink && (this.blink = t.blink),
            void 0 !== t.color &&
              (this.color = O.OzF.create(this.color, t.color)),
            void 0 !== t.consent && (this.consent = t.consent),
            void 0 === t.opacity || (this.opacity = t.opacity));
        }
      };
      let Grab = class Grab {
        constructor() {
          (this.distance = 100), (this.links = new GrabLinks());
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.distance && (this.distance = t.distance),
            this.links.load(t.links));
        }
      };
      let Grabber = class Grabber extends O.L8z {
        constructor(t, e) {
          super(t), (this._engine = e);
        }
        clear() {}
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.grab;
          e && (t.retina.grabModeDistance = e.distance * t.retina.pixelRatio);
        }
        interact() {
          let t = this.container,
            e = t.actualOptions,
            i = e.interactivity;
          if (
            !i.modes.grab ||
            !i.events.onHover.enable ||
            t.interactivity.status !== O.WtO
          )
            return;
          let s = t.interactivity.mouse.position;
          if (!s) return;
          let a = t.retina.grabModeDistance;
          if (!a || a < 0) return;
          let o = t.particles.quadTree.queryCircle(s, a, (t) =>
            this.isEnabled(t)
          );
          for (let e of o) {
            let o = e.getPosition(),
              r = (0, O.Spd)(o, s);
            if (r > a) continue;
            let l = i.modes.grab.links,
              c = l.opacity,
              h = c - (r * c) / a;
            if (h <= 0) continue;
            let d = l.color ?? e.options.links?.color;
            if (!t.particles.grabLineColor && d) {
              let e = i.modes.grab.links;
              t.particles.grabLineColor = (0, O.Dt5)(
                this._engine,
                d,
                e.blink,
                e.consent
              );
            }
            let u = (0, O.BEi)(e, void 0, t.particles.grabLineColor);
            u &&
              (function (t, e, i, s, a) {
                t.canvas.draw((t) => {
                  var o;
                  let r = e.getPosition();
                  (o = e.retina.linksWidth ?? 0),
                    (0, O.pSR)(t, r, a),
                    (t.strokeStyle = (0, O.izR)(i, s)),
                    (t.lineWidth = o),
                    t.stroke();
                });
              })(t, e, u, h, s);
          }
        }
        isEnabled(t) {
          let e = this.container,
            i = e.interactivity.mouse,
            s = (t?.interactivity ?? e.actualOptions.interactivity).events;
          return (
            s.onHover.enable &&
            !!i.position &&
            (0, O.dBL)("grab", s.onHover.mode)
          );
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.grab || (t.grab = new Grab()), e))
            t.grab.load(i?.grab);
        }
        reset() {}
      };
      async function loadExternalGrabInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "externalGrab",
            (e) => Promise.resolve(new Grabber(e, t)),
            e
          );
      }
      let Pauser = class Pauser extends O.L8z {
        constructor(t) {
          super(t),
            (this.handleClickMode = (t) => {
              if ("pause" !== t) return;
              let e = this.container;
              e.animationStatus ? e.pause() : e.play();
            });
        }
        clear() {}
        init() {}
        interact() {}
        isEnabled() {
          return !0;
        }
        reset() {}
      };
      async function loadExternalPauseInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "externalPause",
            (t) => Promise.resolve(new Pauser(t)),
            e
          );
      }
      let Push = class Push {
        constructor() {
          (this.default = !0), (this.groups = []), (this.quantity = 4);
        }
        load(t) {
          if ((0, O.Ft)(t)) return;
          void 0 !== t.default && (this.default = t.default),
            void 0 !== t.groups && (this.groups = t.groups.map((t) => t)),
            this.groups.length || (this.default = !0);
          let e = t.quantity;
          void 0 !== e && (this.quantity = (0, O.Cst)(e));
        }
      };
      let Pusher = class Pusher extends O.L8z {
        constructor(t) {
          super(t),
            (this.handleClickMode = (t) => {
              if ("push" !== t) return;
              let e = this.container,
                i = e.actualOptions,
                s = i.interactivity.modes.push;
              if (!s) return;
              let a = (0, O.Gu7)(s.quantity);
              if (a <= 0) return;
              let o = (0, O.c86)([void 0, ...s.groups]),
                r = void 0 !== o ? e.actualOptions.particles.groups[o] : void 0;
              e.particles.push(a, e.interactivity.mouse, r, o);
            });
        }
        clear() {}
        init() {}
        interact() {}
        isEnabled() {
          return !0;
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.push || (t.push = new Push()), e))
            t.push.load(i?.push);
        }
        reset() {}
      };
      async function loadExternalPushInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "externalPush",
            (t) => Promise.resolve(new Pusher(t)),
            e
          );
      }
      let Remove = class Remove {
        constructor() {
          this.quantity = 2;
        }
        load(t) {
          if ((0, O.Ft)(t)) return;
          let e = t.quantity;
          void 0 !== e && (this.quantity = (0, O.Cst)(e));
        }
      };
      let Remover = class Remover extends O.L8z {
        constructor(t) {
          super(t),
            (this.handleClickMode = (t) => {
              let e = this.container,
                i = e.actualOptions;
              if (!i.interactivity.modes.remove || "remove" !== t) return;
              let s = (0, O.Gu7)(i.interactivity.modes.remove.quantity);
              e.particles.removeQuantity(s);
            });
        }
        clear() {}
        init() {}
        interact() {}
        isEnabled() {
          return !0;
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.remove || (t.remove = new Remove()), e))
            t.remove.load(i?.remove);
        }
        reset() {}
      };
      async function loadExternalRemoveInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "externalRemove",
            (t) => Promise.resolve(new Remover(t)),
            e
          );
      }
      let RepulseBase = class RepulseBase {
        constructor() {
          (this.distance = 200),
            (this.duration = 0.4),
            (this.factor = 100),
            (this.speed = 1),
            (this.maxSpeed = 50),
            (this.easing = O.nxi.easeOutQuad);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.duration && (this.duration = t.duration),
            void 0 !== t.easing && (this.easing = t.easing),
            void 0 !== t.factor && (this.factor = t.factor),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 === t.maxSpeed || (this.maxSpeed = t.maxSpeed));
        }
      };
      let RepulseDiv = class RepulseDiv extends RepulseBase {
        constructor() {
          super(), (this.selectors = []);
        }
        load(t) {
          super.load(t),
            (0, O.Ft)(t) ||
              void 0 === t.selectors ||
              (this.selectors = t.selectors);
        }
      };
      let Repulse = class Repulse extends RepulseBase {
        load(t) {
          super.load(t),
            (0, O.Ft)(t) ||
              (this.divs = (0, O.KH1)(t.divs, (t) => {
                let e = new RepulseDiv();
                return e.load(t), e;
              }));
        }
      };
      let W = "repulse";
      let Repulser = class Repulser extends O.L8z {
        constructor(t, e) {
          super(e),
            (this._clickRepulse = () => {
              let t = this.container,
                e = t.actualOptions.interactivity.modes.repulse;
              if (!e) return;
              let i = t.repulse ?? { particles: [] };
              if (
                (i.finish ||
                  (i.count || (i.count = 0),
                  i.count++,
                  i.count !== t.particles.count || (i.finish = !0)),
                i.clicking)
              ) {
                let s = t.retina.repulseModeDistance;
                if (!s || s < 0) return;
                let a = Math.pow(s / 6, 3),
                  o = t.interactivity.mouse.clickPosition;
                if (void 0 === o) return;
                let r = new O.Cdc(o.x, o.y, a),
                  l = t.particles.quadTree.query(r, (t) => this.isEnabled(t));
                for (let t of l) {
                  let { dx: s, dy: r, distance: l } = (0, O.oW6)(o, t.position),
                    c = l ** 2,
                    h = e.speed,
                    d = (-a * h) / c;
                  if (c <= a) {
                    i.particles.push(t);
                    let e = O.OWs.create(s, r);
                    (e.length = d), t.velocity.setTo(e);
                  }
                }
              } else if (!1 === i.clicking) {
                for (let t of i.particles) t.velocity.setTo(t.initialVelocity);
                i.particles = [];
              }
            }),
            (this._hoverRepulse = () => {
              let t = this.container,
                e = t.interactivity.mouse.position,
                i = t.retina.repulseModeDistance;
              i &&
                !(i < 0) &&
                e &&
                this._processRepulse(e, i, new O.Cdc(e.x, e.y, i));
            }),
            (this._processRepulse = (t, e, i, s) => {
              let a = this.container,
                o = a.particles.quadTree.query(i, (t) => this.isEnabled(t)),
                r = a.actualOptions.interactivity.modes.repulse;
              if (!r) return;
              let { easing: l, speed: c, factor: h, maxSpeed: d } = r,
                u = this._engine.getEasing(l),
                p = (s?.speed ?? c) * h;
              for (let i of o) {
                let { dx: s, dy: a, distance: o } = (0, O.oW6)(i.position, t),
                  r = (0, O.uZ5)(u(1 - o / e) * p, 0, d),
                  l = O.OWs.create(o ? (s / o) * r : p, o ? (a / o) * r : p);
                i.position.addTo(l);
              }
            }),
            (this._singleSelectorRepulse = (t, e) => {
              let i = this.container,
                s = i.actualOptions.interactivity.modes.repulse;
              if (!s) return;
              let a = document.querySelectorAll(t);
              a.length &&
                a.forEach((t) => {
                  let a = i.retina.pixelRatio,
                    o = {
                      x: (t.offsetLeft + 0.5 * t.offsetWidth) * a,
                      y: (t.offsetTop + 0.5 * t.offsetHeight) * a,
                    },
                    r = 0.5 * t.offsetWidth * a,
                    l =
                      e.type === O.gqJ.circle
                        ? new O.Cdc(o.x, o.y, r)
                        : new O.AeJ(
                            t.offsetLeft * a,
                            t.offsetTop * a,
                            t.offsetWidth * a,
                            t.offsetHeight * a
                          ),
                    c = s.divs,
                    h = (0, O.iCg)(c, t);
                  this._processRepulse(o, r, l, h);
                });
            }),
            (this._engine = t),
            e.repulse || (e.repulse = { particles: [] }),
            (this.handleClickMode = (t) => {
              let i = this.container.actualOptions,
                s = i.interactivity.modes.repulse;
              if (!s || t !== W) return;
              e.repulse || (e.repulse = { particles: [] });
              let a = e.repulse;
              for (let t of ((a.clicking = !0),
              (a.count = 0),
              e.repulse.particles))
                this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
              (a.particles = []),
                (a.finish = !1),
                setTimeout(() => {
                  e.destroyed || (a.clicking = !1);
                }, s.duration * O.X5o);
            });
        }
        clear() {}
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.repulse;
          e &&
            (t.retina.repulseModeDistance = e.distance * t.retina.pixelRatio);
        }
        interact() {
          let t = this.container,
            e = t.actualOptions,
            i = t.interactivity.status === O.WtO,
            s = e.interactivity.events,
            a = s.onHover,
            o = a.enable,
            r = a.mode,
            l = s.onClick,
            c = l.enable,
            h = l.mode,
            d = s.onDiv;
          i && o && (0, O.dBL)(W, r)
            ? this._hoverRepulse()
            : c && (0, O.dBL)(W, h)
            ? this._clickRepulse()
            : (0, O.XDe)(W, d, (t, e) => this._singleSelectorRepulse(t, e));
        }
        isEnabled(t) {
          let e = this.container,
            i = e.actualOptions,
            s = e.interactivity.mouse,
            a = (t?.interactivity ?? i.interactivity).events,
            o = a.onDiv,
            r = a.onHover,
            l = a.onClick,
            c = (0, O.wm$)(W, o);
          if (!(c || (r.enable && s.position) || (l.enable && s.clickPosition)))
            return !1;
          let h = r.mode,
            d = l.mode;
          return (0, O.dBL)(W, h) || (0, O.dBL)(W, d) || c;
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.repulse || (t.repulse = new Repulse()), e))
            t.repulse.load(i?.repulse);
        }
        reset() {}
      };
      async function loadExternalRepulseInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "externalRepulse",
            (e) => Promise.resolve(new Repulser(t, e)),
            e
          );
      }
      let Slow = class Slow {
        constructor() {
          (this.factor = 3), (this.radius = 200);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.factor && (this.factor = t.factor),
            void 0 === t.radius || (this.radius = t.radius));
        }
      };
      let Slower = class Slower extends O.L8z {
        constructor(t) {
          super(t);
        }
        clear(t, e, i) {
          (!t.slow.inRange || i) && (t.slow.factor = 1);
        }
        init() {
          let t = this.container,
            e = t.actualOptions.interactivity.modes.slow;
          e && (t.retina.slowModeRadius = e.radius * t.retina.pixelRatio);
        }
        interact() {}
        isEnabled(t) {
          let e = this.container,
            i = e.interactivity.mouse,
            s = (t?.interactivity ?? e.actualOptions.interactivity).events;
          return (
            s.onHover.enable &&
            !!i.position &&
            (0, O.dBL)("slow", s.onHover.mode)
          );
        }
        loadModeOptions(t, ...e) {
          for (let i of (t.slow || (t.slow = new Slow()), e))
            t.slow.load(i?.slow);
        }
        reset(t) {
          t.slow.inRange = !1;
          let e = this.container,
            i = e.actualOptions,
            s = e.interactivity.mouse.position,
            a = e.retina.slowModeRadius,
            o = i.interactivity.modes.slow;
          if (!o || !a || a < 0 || !s) return;
          let r = t.getPosition(),
            l = (0, O.Spd)(s, r),
            c = o.factor,
            { slow: h } = t;
          l > a || ((h.inRange = !0), (h.factor = l / a / c));
        }
      };
      async function loadExternalSlowInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "externalSlow",
            (t) => Promise.resolve(new Slower(t)),
            e
          );
      }
      let H =
        /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
      async function loadImage(t) {
        return new Promise((e) => {
          t.loading = !0;
          let i = new Image();
          (t.element = i),
            i.addEventListener("load", () => {
              (t.loading = !1), e();
            }),
            i.addEventListener("error", () => {
              (t.element = void 0),
                (t.error = !0),
                (t.loading = !1),
                (0, O.jl5)().error(`${O.gK4} loading image: ${t.source}`),
                e();
            }),
            (i.src = t.source);
        });
      }
      async function downloadSvgImage(t) {
        if ("svg" !== t.type) {
          await loadImage(t);
          return;
        }
        t.loading = !0;
        let e = await fetch(t.source);
        e.ok
          ? (t.svgData = await e.text())
          : ((0, O.jl5)().error(`${O.gK4} Image not found`), (t.error = !0)),
          (t.loading = !1);
      }
      let N = [0, 4, 2, 1],
        Z = [8, 8, 4, 2];
      let ByteStream = class ByteStream {
        constructor(t) {
          (this.pos = 0), (this.data = new Uint8ClampedArray(t));
        }
        getString(t) {
          let e = this.data.slice(this.pos, this.pos + t);
          return (
            (this.pos += e.length),
            e.reduce((t, e) => t + String.fromCharCode(e), "")
          );
        }
        nextByte() {
          return this.data[this.pos++];
        }
        nextTwoBytes() {
          return (
            (this.pos += 2),
            this.data[this.pos - 2] + (this.data[this.pos - 1] << 8)
          );
        }
        readSubBlocks() {
          let t = "",
            e = 0;
          do {
            e = this.data[this.pos++];
            for (
              let i = e;
              --i >= 0;
              t += String.fromCharCode(this.data[this.pos++])
            );
          } while (0 !== e);
          return t;
        }
        readSubBlocksBin() {
          let t = this.data[this.pos],
            e = 0;
          for (let i = 0; 0 !== t; i += t + 1, t = this.data[this.pos + i])
            e += t;
          let i = new Uint8Array(e);
          t = this.data[this.pos++];
          for (let e = 0; 0 !== t; t = this.data[this.pos++])
            for (let s = t; --s >= 0; i[e++] = this.data[this.pos++]);
          return i;
        }
        skipSubBlocks() {
          for (
            ;
            0 !== this.data[this.pos];
            this.pos += this.data[this.pos] + 1
          );
          this.pos++;
        }
      };
      ((d = k || (k = {}))[(d.Replace = 0)] = "Replace"),
        (d[(d.Combine = 1)] = "Combine"),
        (d[(d.RestoreBackground = 2)] = "RestoreBackground"),
        (d[(d.RestorePrevious = 3)] = "RestorePrevious"),
        (d[(d.UndefinedA = 4)] = "UndefinedA"),
        (d[(d.UndefinedB = 5)] = "UndefinedB"),
        (d[(d.UndefinedC = 6)] = "UndefinedC"),
        (d[(d.UndefinedD = 7)] = "UndefinedD"),
        ((u = z || (z = {}))[(u.Extension = 33)] = "Extension"),
        (u[(u.ApplicationExtension = 255)] = "ApplicationExtension"),
        (u[(u.GraphicsControlExtension = 249)] = "GraphicsControlExtension"),
        (u[(u.PlainTextExtension = 1)] = "PlainTextExtension"),
        (u[(u.CommentExtension = 254)] = "CommentExtension"),
        (u[(u.Image = 44)] = "Image"),
        (u[(u.EndOfFile = 59)] = "EndOfFile");
      let j = { x: 0, y: 0 };
      function parseColorTable(t, e) {
        let i = [];
        for (let s = 0; s < e; s++)
          i.push({
            r: t.data[t.pos],
            g: t.data[t.pos + 1],
            b: t.data[t.pos + 2],
          }),
            (t.pos += 3);
        return i;
      }
      async function parseImageBlock(t, e, i, s, a, o) {
        let r = e.frames[s(!0)];
        (r.left = t.nextTwoBytes()),
          (r.top = t.nextTwoBytes()),
          (r.width = t.nextTwoBytes()),
          (r.height = t.nextTwoBytes());
        let l = t.nextByte(),
          c = (128 & l) == 128;
        (r.sortFlag = (32 & l) == 32),
          (r.reserved = (24 & l) >>> 3),
          c && (r.localColorTable = parseColorTable(t, 1 << ((7 & l) + 1)));
        let getColor = (t) => {
            let {
              r: s,
              g: o,
              b: l,
            } = (c ? r.localColorTable : e.globalColorTable)[t];
            return t !== a(null)
              ? { r: s, g: o, b: l, a: 255 }
              : { r: s, g: o, b: l, a: i ? ~~((s + o + l) / 3) : 0 };
          },
          h = (() => {
            try {
              return new ImageData(r.width, r.height, { colorSpace: "srgb" });
            } catch (t) {
              if (t instanceof DOMException && "IndexSizeError" === t.name)
                return null;
              throw t;
            }
          })();
        if (null == h) throw EvalError("GIF frame size is to large");
        let d = t.nextByte(),
          u = t.readSubBlocksBin(),
          p = 1 << d,
          readBits = (t, e) => {
            let i = t >>> 3,
              s = 7 & t;
            return (
              ((u[i] + (u[i + 1] << 8) + (u[i + 2] << 16)) &
                (((1 << e) - 1) << s)) >>>
              s
            );
          };
        if ((64 & l) == 64) {
          for (let i = 0, a = d + 1, l = 0, c = [[0]], u = 0; u < 4; u++) {
            if (N[u] < r.height) {
              let t = 0,
                e = 0,
                s = !1;
              for (; !s; ) {
                let o = i;
                if (((i = readBits(l, a)), (l += a + 1), i === p)) {
                  (a = d + 1), (c.length = p + 2);
                  for (let t = 0; t < c.length; t++) c[t] = t < p ? [t] : [];
                } else {
                  for (let s of (i >= c.length
                    ? c.push(c[o].concat(c[o][0]))
                    : o !== p && c.push(c[o].concat(c[i][0])),
                  c[i])) {
                    let { r: i, g: a, b: o, a: l } = getColor(s);
                    h.data.set(
                      [i, a, o, l],
                      N[u] * r.width + Z[u] * e + (t % (4 * r.width))
                    ),
                      (t += 4);
                  }
                  c.length === 1 << a && a < 12 && a++;
                }
                t === 4 * r.width * (e + 1) &&
                  (e++, N[u] + Z[u] * e >= r.height && (s = !0));
              }
            }
            o?.(
              t.pos / (t.data.length - 1),
              s(!1) + 1,
              h,
              { x: r.left, y: r.top },
              { width: e.width, height: e.height }
            );
          }
          (r.image = h), (r.bitmap = await createImageBitmap(h));
        } else {
          let i = 0,
            a = d + 1,
            l = 0,
            c = -4,
            u = !1,
            g = [[0]];
          for (; !u; ) {
            let t = i;
            if (((i = readBits(l, a)), (l += a), i === p)) {
              (a = d + 1), (g.length = p + 2);
              for (let t = 0; t < g.length; t++) g[t] = t < p ? [t] : [];
            } else {
              if (i === p + 1) {
                u = !0;
                break;
              }
              for (let e of (i >= g.length
                ? g.push(g[t].concat(g[t][0]))
                : t !== p && g.push(g[t].concat(g[i][0])),
              g[i])) {
                let { r: t, g: i, b: s, a } = getColor(e);
                h.data.set([t, i, s, a], (c += 4));
              }
              g.length >= 1 << a && a < 12 && a++;
            }
          }
          (r.image = h),
            (r.bitmap = await createImageBitmap(h)),
            o?.(
              (t.pos + 1) / t.data.length,
              s(!1) + 1,
              r.image,
              { x: r.left, y: r.top },
              { width: e.width, height: e.height }
            );
        }
      }
      async function parseBlock(t, e, i, s, a, o) {
        switch (t.nextByte()) {
          case z.EndOfFile:
            return !0;
          case z.Image:
            await parseImageBlock(t, e, i, s, a, o);
            break;
          case z.Extension:
            !(function (t, e, i, s) {
              switch (t.nextByte()) {
                case z.GraphicsControlExtension: {
                  let a = e.frames[i(!1)];
                  t.pos++;
                  let o = t.nextByte();
                  (a.GCreserved = (224 & o) >>> 5),
                    (a.disposalMethod = (28 & o) >>> 2),
                    (a.userInputDelayFlag = (2 & o) == 2),
                    (a.delayTime = 10 * t.nextTwoBytes());
                  let r = t.nextByte();
                  (1 & o) == 1 && s(r), t.pos++;
                  break;
                }
                case z.ApplicationExtension: {
                  t.pos++;
                  let i = {
                    identifier: t.getString(8),
                    authenticationCode: t.getString(3),
                    data: t.readSubBlocksBin(),
                  };
                  e.applicationExtensions.push(i);
                  break;
                }
                case z.CommentExtension:
                  e.comments.push([i(!1), t.readSubBlocks()]);
                  break;
                case z.PlainTextExtension:
                  if (0 === e.globalColorTable.length)
                    throw EvalError(
                      "plain text extension without global color table"
                    );
                  t.pos++,
                    (e.frames[i(!1)].plainTextData = {
                      left: t.nextTwoBytes(),
                      top: t.nextTwoBytes(),
                      width: t.nextTwoBytes(),
                      height: t.nextTwoBytes(),
                      charSize: {
                        width: t.nextTwoBytes(),
                        height: t.nextTwoBytes(),
                      },
                      foregroundColor: t.nextByte(),
                      backgroundColor: t.nextByte(),
                      text: t.readSubBlocks(),
                    });
                  break;
                default:
                  t.skipSubBlocks();
              }
            })(t, e, s, a);
            break;
          default:
            throw EvalError("undefined block found");
        }
        return !1;
      }
      async function decodeGIF(t, e, i) {
        i || (i = !1);
        let s = await fetch(t);
        if (!s.ok && 404 === s.status) throw EvalError("file not found");
        let a = await s.arrayBuffer(),
          o = {
            width: 0,
            height: 0,
            totalTime: 0,
            colorRes: 0,
            pixelAspectRatio: 0,
            frames: [],
            sortFlag: !1,
            globalColorTable: [],
            backgroundImage: new ImageData(1, 1, { colorSpace: "srgb" }),
            comments: [],
            applicationExtensions: [],
          },
          r = new ByteStream(new Uint8ClampedArray(a));
        if ("GIF89a" !== r.getString(6))
          throw Error("not a supported GIF file");
        (o.width = r.nextTwoBytes()), (o.height = r.nextTwoBytes());
        let l = r.nextByte(),
          c = (128 & l) == 128;
        (o.colorRes = (112 & l) >>> 4), (o.sortFlag = (8 & l) == 8);
        let h = r.nextByte();
        (o.pixelAspectRatio = r.nextByte()),
          0 !== o.pixelAspectRatio &&
            (o.pixelAspectRatio = (o.pixelAspectRatio + 15) / 64),
          c && (o.globalColorTable = parseColorTable(r, 1 << ((7 & l) + 1)));
        let d = (() => {
          try {
            return new ImageData(o.width, o.height, { colorSpace: "srgb" });
          } catch (t) {
            if (t instanceof DOMException && "IndexSizeError" === t.name)
              return null;
            throw t;
          }
        })();
        if (null == d) throw Error("GIF frame size is to large");
        let { r: u, g: p, b: g } = o.globalColorTable[h];
        d.data.set(c ? [u, p, g, 255] : [0, 0, 0, 0]);
        for (let t = 4; t < d.data.length; t *= 2) d.data.copyWithin(t, 0, t);
        o.backgroundImage = d;
        let m = -1,
          v = !0,
          y = -1,
          getframeIndex = (t) => (t && (v = !0), m),
          getTransparencyIndex = (t) => (null != t && (y = t), y);
        try {
          do
            v &&
              (o.frames.push({
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                disposalMethod: k.Replace,
                image: new ImageData(1, 1, { colorSpace: "srgb" }),
                plainTextData: null,
                userInputDelayFlag: !1,
                delayTime: 0,
                sortFlag: !1,
                localColorTable: [],
                reserved: 0,
                GCreserved: 0,
              }),
              m++,
              (y = -1),
              (v = !1));
          while (
            !(await parseBlock(r, o, i, getframeIndex, getTransparencyIndex, e))
          );
          for (let t of (o.frames.length--, o.frames)) {
            if (t.userInputDelayFlag && 0 === t.delayTime) {
              o.totalTime = 1 / 0;
              break;
            }
            o.totalTime += t.delayTime;
          }
          return o;
        } catch (t) {
          if (t instanceof EvalError)
            throw Error(`error while parsing frame ${m} "${t.message}"`);
          throw t;
        }
      }
      async function loadGifImage(t) {
        if ("gif" !== t.type) {
          await loadImage(t);
          return;
        }
        t.loading = !0;
        try {
          (t.gifData = await decodeGIF(t.source)),
            (t.gifLoopCount =
              (function (t) {
                for (let e of t.applicationExtensions)
                  if (e.identifier + e.authenticationCode === "NETSCAPE2.0")
                    return e.data[1] + (e.data[2] << 8);
                return NaN;
              })(t.gifData) ?? 0),
            t.gifLoopCount || (t.gifLoopCount = 1 / 0);
        } catch {
          t.error = !0;
        }
        t.loading = !1;
      }
      let ImageDrawer = class ImageDrawer {
        constructor(t) {
          (this.validTypes = ["image", "images"]),
            (this.loadImageShape = async (t) => {
              if (!this._engine.loadImage)
                throw Error(`${O.gK4} image shape not initialized`);
              await this._engine.loadImage({
                gif: t.gif,
                name: t.name,
                replaceColor: t.replaceColor ?? !1,
                src: t.src,
              });
            }),
            (this._engine = t);
        }
        addImage(t) {
          this._engine.images || (this._engine.images = []),
            this._engine.images.push(t);
        }
        draw(t) {
          let { context: e, radius: i, particle: s, opacity: a } = t,
            o = s.image,
            r = o?.element;
          if (o) {
            if (((e.globalAlpha = a), o.gif && o.gifData))
              !(function (t) {
                let { context: e, radius: i, particle: s, delta: a } = t,
                  o = s.image;
                if (!o?.gifData || !o.gif) return;
                let r = new OffscreenCanvas(o.gifData.width, o.gifData.height),
                  l = r.getContext("2d");
                if (!l)
                  throw Error("could not create offscreen canvas context");
                (l.imageSmoothingQuality = "low"),
                  (l.imageSmoothingEnabled = !1),
                  l.clearRect(j.x, j.y, r.width, r.height),
                  void 0 === s.gifLoopCount &&
                    (s.gifLoopCount = o.gifLoopCount ?? 0);
                let c = s.gifFrame ?? 0,
                  h = {
                    x: -(0.5 * o.gifData.width),
                    y: -(0.5 * o.gifData.height),
                  },
                  d = o.gifData.frames[c];
                if ((void 0 === s.gifTime && (s.gifTime = 0), d.bitmap)) {
                  switch (
                    (e.scale(i / o.gifData.width, i / o.gifData.height),
                    d.disposalMethod)
                  ) {
                    case k.UndefinedA:
                    case k.UndefinedB:
                    case k.UndefinedC:
                    case k.UndefinedD:
                    case k.Replace:
                      l.drawImage(d.bitmap, d.left, d.top),
                        e.drawImage(r, h.x, h.y),
                        l.clearRect(j.x, j.y, r.width, r.height);
                      break;
                    case k.Combine:
                      l.drawImage(d.bitmap, d.left, d.top),
                        e.drawImage(r, h.x, h.y);
                      break;
                    case k.RestoreBackground:
                      l.drawImage(d.bitmap, d.left, d.top),
                        e.drawImage(r, h.x, h.y),
                        l.clearRect(j.x, j.y, r.width, r.height),
                        o.gifData.globalColorTable.length
                          ? l.putImageData(o.gifData.backgroundImage, h.x, h.y)
                          : l.putImageData(
                              o.gifData.frames[0].image,
                              h.x + d.left,
                              h.y + d.top
                            );
                      break;
                    case k.RestorePrevious: {
                      let t = l.getImageData(j.x, j.y, r.width, r.height);
                      l.drawImage(d.bitmap, d.left, d.top),
                        e.drawImage(r, h.x, h.y),
                        l.clearRect(j.x, j.y, r.width, r.height),
                        l.putImageData(t, j.x, j.y);
                    }
                  }
                  if (((s.gifTime += a.value), s.gifTime > d.delayTime)) {
                    if (
                      ((s.gifTime -= d.delayTime),
                      ++c >= o.gifData.frames.length)
                    ) {
                      if (--s.gifLoopCount <= 0) return;
                      (c = 0), l.clearRect(j.x, j.y, r.width, r.height);
                    }
                    s.gifFrame = c;
                  }
                  e.scale(o.gifData.width / i, o.gifData.height / i);
                }
              })(t);
            else if (r) {
              let t = o.ratio,
                s = { x: -i, y: -i },
                a = 2 * i;
              e.drawImage(r, s.x, s.y, a, a / t);
            }
            e.globalAlpha = 1;
          }
        }
        getSidesCount() {
          return 12;
        }
        async init(t) {
          let e = t.actualOptions;
          if (e.preload && this._engine.loadImage)
            for (let t of e.preload) await this._engine.loadImage(t);
        }
        loadShape(t) {
          if ("image" !== t.shape && "images" !== t.shape) return;
          this._engine.images || (this._engine.images = []);
          let e = t.shapeData;
          if (!e) return;
          let i = this._engine.images.find(
            (t) => t.name === e.name || t.source === e.src
          );
          i ||
            this.loadImageShape(e).then(() => {
              this.loadShape(t);
            });
        }
        particleInit(t, e) {
          if ("image" !== e.shape && "images" !== e.shape) return;
          this._engine.images || (this._engine.images = []);
          let i = this._engine.images,
            s = e.shapeData;
          if (!s) return;
          let a = e.getFillColor(),
            o = i.find((t) => t.name === s.name || t.source === s.src);
          if (!o) return;
          let r = s.replaceColor ?? o.replaceColor;
          if (o.loading) {
            setTimeout(() => {
              this.particleInit(t, e);
            });
            return;
          }
          (async () => {
            let t;
            (t =
              o.svgData && a
                ? await (function (t, e, i, s) {
                    let a = (function (t, e, i) {
                        let { svgData: s } = t;
                        if (!s) return "";
                        let a = (0, O.vzQ)(e, i);
                        if (s.includes("fill")) return s.replace(H, () => a);
                        let o = s.indexOf(">");
                        return `${s.substring(0, o)} fill="${a}"${s.substring(
                          o
                        )}`;
                      })(t, i, s.opacity?.value ?? 1),
                      o = {
                        color: i,
                        gif: e.gif,
                        data: { ...t, svgData: a },
                        loaded: !1,
                        ratio: e.width / e.height,
                        replaceColor: e.replaceColor,
                        source: e.src,
                      };
                    return new Promise((e) => {
                      let i = new Blob([a], { type: "image/svg+xml" }),
                        s = URL || window.URL || window.webkitURL || window,
                        r = s.createObjectURL(i),
                        l = new Image();
                      l.addEventListener("load", () => {
                        (o.loaded = !0),
                          (o.element = l),
                          e(o),
                          s.revokeObjectURL(r);
                      });
                      let errorHandler = async () => {
                        s.revokeObjectURL(r);
                        let i = { ...t, error: !1, loading: !0 };
                        await loadImage(i),
                          (o.loaded = !0),
                          (o.element = i.element),
                          e(o);
                      };
                      l.addEventListener("error", () => void errorHandler()),
                        (l.src = r);
                    });
                  })(o, s, a, e)
                : {
                    color: a,
                    data: o,
                    element: o.element,
                    gif: o.gif,
                    gifData: o.gifData,
                    gifLoopCount: o.gifLoopCount,
                    loaded: !0,
                    ratio:
                      s.width && s.height ? s.width / s.height : o.ratio ?? 1,
                    replaceColor: r,
                    source: s.src,
                  }).ratio || (t.ratio = 1);
            let i = s.fill ?? e.shapeFill,
              l = s.close ?? e.shapeClose,
              c = { image: t, fill: i, close: l };
            (e.image = c.image),
              (e.shapeFill = c.fill),
              (e.shapeClose = c.close);
          })();
        }
      };
      let Preload = class Preload {
        constructor() {
          (this.src = ""), (this.gif = !1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.gif && (this.gif = t.gif),
            void 0 !== t.height && (this.height = t.height),
            void 0 !== t.name && (this.name = t.name),
            void 0 !== t.replaceColor && (this.replaceColor = t.replaceColor),
            void 0 !== t.src && (this.src = t.src),
            void 0 === t.width || (this.width = t.width));
        }
      };
      let ImagePreloaderPlugin = class ImagePreloaderPlugin {
        constructor(t) {
          (this.id = "imagePreloader"), (this._engine = t);
        }
        async getPlugin() {
          return await Promise.resolve(), {};
        }
        loadOptions(t, e) {
          if (!e?.preload) return;
          t.preload || (t.preload = []);
          let i = t.preload;
          for (let t of e.preload) {
            let e = i.find((e) => e.name === t.name || e.src === t.src);
            if (e) e.load(t);
            else {
              let e = new Preload();
              e.load(t), i.push(e);
            }
          }
        }
        needsPlugin() {
          return !0;
        }
      };
      async function loadImageShape(t, e = !0) {
        t.checkVersion("3.8.1"),
          t.loadImage ||
            (t.loadImage = async (e) => {
              if (!e.name && !e.src)
                throw Error(`${O.gK4} no image source provided`);
              if (
                (t.images || (t.images = []),
                !t.images.find((t) => t.name === e.name || t.source === e.src))
              )
                try {
                  let i;
                  let s = {
                    gif: e.gif ?? !1,
                    name: e.name ?? e.src,
                    source: e.src,
                    type: e.src.substring(e.src.length - 3),
                    error: !1,
                    loading: !0,
                    replaceColor: e.replaceColor,
                    ratio: e.width && e.height ? e.width / e.height : void 0,
                  };
                  t.images.push(s),
                    (i = e.gif
                      ? loadGifImage
                      : e.replaceColor
                      ? downloadSvgImage
                      : loadImage),
                    await i(s);
                } catch {
                  throw Error(`${O.gK4} ${e.name ?? e.src} not found`);
                }
            });
        let i = new ImagePreloaderPlugin(t);
        await t.addPlugin(i, e), await t.addShape(new ImageDrawer(t), e);
      }
      let LifeDelay = class LifeDelay extends O.SWe {
        constructor() {
          super(), (this.sync = !1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (super.load(t), void 0 === t.sync || (this.sync = t.sync));
        }
      };
      let LifeDuration = class LifeDuration extends O.SWe {
        constructor() {
          super(), (this.sync = !1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (super.load(t), void 0 === t.sync || (this.sync = t.sync));
        }
      };
      let Life = class Life {
        constructor() {
          (this.count = 0),
            (this.delay = new LifeDelay()),
            (this.duration = new LifeDuration());
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.count && (this.count = t.count),
            this.delay.load(t.delay),
            this.duration.load(t.duration));
        }
      };
      let LifeUpdater = class LifeUpdater {
        constructor(t) {
          this.container = t;
        }
        init(t) {
          let e = this.container,
            i = t.options,
            s = i.life;
          s &&
            ((t.life = {
              delay: e.retina.reduceFactor
                ? (((0, O.Gu7)(s.delay.value) *
                    (s.delay.sync ? 1 : (0, O.sZz)())) /
                    e.retina.reduceFactor) *
                  O.X5o
                : 0,
              delayTime: 0,
              duration: e.retina.reduceFactor
                ? (((0, O.Gu7)(s.duration.value) *
                    (s.duration.sync ? 1 : (0, O.sZz)())) /
                    e.retina.reduceFactor) *
                  O.X5o
                : 0,
              time: 0,
              count: s.count,
            }),
            t.life.duration <= 0 && (t.life.duration = -1),
            t.life.count <= 0 && (t.life.count = -1),
            t.life && (t.spawning = t.life.delay > 0));
        }
        isEnabled(t) {
          return !t.destroyed;
        }
        loadOptions(t, ...e) {
          for (let i of (t.life || (t.life = new Life()), e))
            t.life.load(i?.life);
        }
        update(t, e) {
          this.isEnabled(t) &&
            t.life &&
            (function (t, e, i) {
              if (!t.life) return;
              let s = t.life,
                a = !1;
              if (t.spawning) {
                if (((s.delayTime += e.value), !(s.delayTime >= t.life.delay)))
                  return;
                (a = !0), (t.spawning = !1), (s.delayTime = 0), (s.time = 0);
              }
              if (
                -1 === s.duration ||
                t.spawning ||
                (a ? (s.time = 0) : (s.time += e.value), s.time < s.duration)
              )
                return;
              if (
                ((s.time = 0),
                t.life.count > 0 && t.life.count--,
                0 === t.life.count)
              ) {
                t.destroy();
                return;
              }
              let o = (0, O.Cst)(0, i.width),
                r = (0, O.Cst)(0, i.width);
              (t.position.x = (0, O.vdf)(o)),
                (t.position.y = (0, O.vdf)(r)),
                (t.spawning = !0),
                (s.delayTime = 0),
                (s.time = 0),
                t.reset();
              let l = t.options.life;
              l &&
                ((s.delay = (0, O.Gu7)(l.delay.value) * O.X5o),
                (s.duration = (0, O.Gu7)(l.duration.value) * O.X5o));
            })(t, e, this.container.canvas.size);
        }
      };
      async function loadLifeUpdater(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addParticleUpdater(
            "life",
            async (t) => Promise.resolve(new LifeUpdater(t)),
            e
          );
      }
      let LineDrawer = class LineDrawer {
        constructor() {
          this.validTypes = ["line"];
        }
        draw(t) {
          !(function (t) {
            let { context: e, particle: i, radius: s } = t,
              a = i.shapeData;
            e.moveTo(-s, 0), e.lineTo(s, 0), (e.lineCap = a?.cap ?? "butt");
          })(t);
        }
        getSidesCount() {
          return 1;
        }
      };
      async function loadLineShape(t, e = !0) {
        t.checkVersion("3.8.1"), await t.addShape(new LineDrawer(), e);
      }
      let ParallaxMover = class ParallaxMover {
        init() {}
        isEnabled(t) {
          return (
            !(0, O.KrJ)() &&
            !t.destroyed &&
            t.container.actualOptions.interactivity.events.onHover.parallax
              .enable
          );
        }
        move(t) {
          let e = t.container,
            i = e.actualOptions,
            s = i.interactivity.events.onHover.parallax;
          if ((0, O.KrJ)() || !s.enable) return;
          let a = s.force,
            o = e.interactivity.mouse.position;
          if (!o) return;
          let r = e.canvas.size,
            l = { x: 0.5 * r.width, y: 0.5 * r.height },
            c = s.smooth,
            h = t.getRadius() / a,
            d = { x: (o.x - l.x) * h, y: (o.y - l.y) * h },
            { offset: u } = t;
          (u.x += (d.x - u.x) / c), (u.y += (d.y - u.y) / c);
        }
      };
      async function loadParallaxMover(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addMover(
            "parallax",
            () => Promise.resolve(new ParallaxMover()),
            e
          );
      }
      let Attractor_Attractor = class Attractor_Attractor extends O.$Sh {
        constructor(t) {
          super(t);
        }
        clear() {}
        init() {}
        interact(t) {
          let e = this.container;
          void 0 === t.attractDistance &&
            (t.attractDistance =
              (0, O.Gu7)(t.options.move.attract.distance) *
              e.retina.pixelRatio);
          let i = t.attractDistance,
            s = t.getPosition(),
            a = e.particles.quadTree.queryCircle(s, i);
          for (let e of a) {
            if (
              t === e ||
              !e.options.move.attract.enable ||
              e.destroyed ||
              e.spawning
            )
              continue;
            let i = e.getPosition(),
              { dx: a, dy: o } = (0, O.oW6)(s, i),
              r = t.options.move.attract.rotate,
              l = a / (1e3 * r.x),
              c = o / (1e3 * r.y),
              h = e.size.value / t.size.value,
              d = 1 / h;
            (t.velocity.x -= l * h),
              (t.velocity.y -= c * h),
              (e.velocity.x += l * d),
              (e.velocity.y += c * d);
          }
        }
        isEnabled(t) {
          return t.options.move.attract.enable;
        }
        reset() {}
      };
      async function loadParticlesAttractInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "particlesAttract",
            (t) => Promise.resolve(new Attractor_Attractor(t)),
            e
          );
      }
      function updateAbsorb(t, e, i, s, a, o) {
        let r = (0, O.uZ5)(
          (t.options.collisions.absorb.speed * a.factor) / 10,
          0,
          s
        );
        (t.size.value += 0.5 * r),
          (i.size.value -= r),
          s <= o && ((i.size.value = 0), i.destroy());
      }
      let fixBounceSpeed = (t) => {
        void 0 === t.collisionMaxSpeed &&
          (t.collisionMaxSpeed = (0, O.Gu7)(t.options.collisions.maxSpeed)),
          t.velocity.length > t.collisionMaxSpeed &&
            (t.velocity.length = t.collisionMaxSpeed);
      };
      function bounce(t, e) {
        (0, O.kRC)((0, O.gy4)(t), (0, O.gy4)(e)),
          fixBounceSpeed(t),
          fixBounceSpeed(e);
      }
      let Collider = class Collider extends O.$Sh {
        constructor(t) {
          super(t);
        }
        clear() {}
        init() {}
        interact(t, e) {
          if (t.destroyed || t.spawning) return;
          let i = this.container,
            s = t.getPosition(),
            a = t.getRadius(),
            o = i.particles.quadTree.queryCircle(s, 2 * a);
          for (let r of o) {
            if (
              t === r ||
              !r.options.collisions.enable ||
              t.options.collisions.mode !== r.options.collisions.mode ||
              r.destroyed ||
              r.spawning
            )
              continue;
            let o = r.getPosition(),
              l = r.getRadius();
            if (Math.abs(Math.round(s.z) - Math.round(o.z)) > a + l) continue;
            let c = (0, O.Spd)(s, o),
              h = a + l;
            c > h ||
              (function (t, e, i, s) {
                switch (t.options.collisions.mode) {
                  case O.Dpx.absorb:
                    !(function (t, e, i, s) {
                      let a = t.getRadius(),
                        o = e.getRadius();
                      void 0 === a && void 0 !== o
                        ? t.destroy()
                        : void 0 !== a && void 0 === o
                        ? e.destroy()
                        : void 0 !== a &&
                          void 0 !== o &&
                          (a >= o
                            ? updateAbsorb(t, a, e, o, i, s)
                            : updateAbsorb(e, o, t, a, i, s));
                    })(t, e, i, s);
                    break;
                  case O.Dpx.bounce:
                    bounce(t, e);
                    break;
                  case O.Dpx.destroy:
                    !(function (t, e) {
                      if (
                        (t.unbreakable || e.unbreakable || bounce(t, e),
                        void 0 === t.getRadius() && void 0 !== e.getRadius())
                      )
                        t.destroy();
                      else if (
                        void 0 !== t.getRadius() &&
                        void 0 === e.getRadius()
                      )
                        e.destroy();
                      else if (
                        void 0 !== t.getRadius() &&
                        void 0 !== e.getRadius()
                      ) {
                        let i = t.getRadius() >= e.getRadius() ? e : t;
                        i.destroy();
                      }
                    })(t, e);
                }
              })(t, r, e, i.retina.pixelRatio);
          }
        }
        isEnabled(t) {
          return t.options.collisions.enable;
        }
        reset() {}
      };
      async function loadParticlesCollisionsInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addInteractor(
            "particlesCollisions",
            (t) => Promise.resolve(new Collider(t)),
            e
          );
      }
      let CircleWarp = class CircleWarp extends O.Cdc {
        constructor(t, e, i, s) {
          super(t, e, i), (this.canvasSize = s), (this.canvasSize = { ...s });
        }
        contains(t) {
          let { width: e, height: i } = this.canvasSize,
            { x: s, y: a } = t;
          return (
            super.contains(t) ||
            super.contains({ x: s - e, y: a }) ||
            super.contains({ x: s - e, y: a - i }) ||
            super.contains({ x: s, y: a - i })
          );
        }
        intersects(t) {
          if (super.intersects(t)) return !0;
          let e = {
            x: t.position.x - this.canvasSize.width,
            y: t.position.y - this.canvasSize.height,
          };
          if (void 0 !== t.radius) {
            let i = new O.Cdc(e.x, e.y, 2 * t.radius);
            return super.intersects(i);
          }
          if (void 0 !== t.size) {
            let i = new O.AeJ(e.x, e.y, 2 * t.size.width, 2 * t.size.height);
            return super.intersects(i);
          }
          return !1;
        }
      };
      let LinksShadow = class LinksShadow {
        constructor() {
          (this.blur = 5),
            (this.color = new O.OzF()),
            (this.color.value = "#000"),
            (this.enable = !1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.blur && (this.blur = t.blur),
            (this.color = O.OzF.create(this.color, t.color)),
            void 0 === t.enable || (this.enable = t.enable));
        }
      };
      let LinksTriangle = class LinksTriangle {
        constructor() {
          (this.enable = !1), (this.frequency = 1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.color &&
              (this.color = O.OzF.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.frequency && (this.frequency = t.frequency),
            void 0 === t.opacity || (this.opacity = t.opacity));
        }
      };
      let Links = class Links {
        constructor() {
          (this.blink = !1),
            (this.color = new O.OzF()),
            (this.color.value = "#fff"),
            (this.consent = !1),
            (this.distance = 100),
            (this.enable = !1),
            (this.frequency = 1),
            (this.opacity = 1),
            (this.shadow = new LinksShadow()),
            (this.triangles = new LinksTriangle()),
            (this.width = 1),
            (this.warp = !1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.id && (this.id = t.id),
            void 0 !== t.blink && (this.blink = t.blink),
            (this.color = O.OzF.create(this.color, t.color)),
            void 0 !== t.consent && (this.consent = t.consent),
            void 0 !== t.distance && (this.distance = t.distance),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.frequency && (this.frequency = t.frequency),
            void 0 !== t.opacity && (this.opacity = t.opacity),
            this.shadow.load(t.shadow),
            this.triangles.load(t.triangles),
            void 0 !== t.width && (this.width = t.width),
            void 0 === t.warp || (this.warp = t.warp));
        }
      };
      let $ = { x: 0, y: 0 };
      let Linker = class Linker extends O.$Sh {
        constructor(t, e) {
          super(t),
            (this._setColor = (t) => {
              if (!t.options.links) return;
              let e = this._linkContainer,
                i = t.options.links,
                s =
                  void 0 === i.id
                    ? e.particles.linksColor
                    : e.particles.linksColors.get(i.id);
              if (s) return;
              let a = i.color;
              (s = (0, O.Dt5)(this._engine, a, i.blink, i.consent)),
                void 0 === i.id
                  ? (e.particles.linksColor = s)
                  : e.particles.linksColors.set(i.id, s);
            }),
            (this._linkContainer = t),
            (this._engine = e);
        }
        clear() {}
        init() {
          (this._linkContainer.particles.linksColor = void 0),
            (this._linkContainer.particles.linksColors = new Map());
        }
        interact(t) {
          let e;
          if (!t.options.links) return;
          t.links = [];
          let i = t.getPosition(),
            s = this.container,
            a = s.canvas.size;
          if (i.x < $.x || i.y < $.y || i.x > a.width || i.y > a.height) return;
          let o = t.options.links,
            r = o.opacity,
            l = t.retina.linksDistance ?? 0,
            c = o.warp;
          e = c ? new CircleWarp(i.x, i.y, l, a) : new O.Cdc(i.x, i.y, l);
          let h = s.particles.quadTree.query(e);
          for (let e of h) {
            let s = e.options.links;
            if (
              t === e ||
              !s?.enable ||
              o.id !== s.id ||
              e.spawning ||
              e.destroyed ||
              !e.links ||
              t.links.some((t) => t.destination === e) ||
              e.links.some((e) => e.destination === t)
            )
              continue;
            let h = e.getPosition();
            if (h.x < $.x || h.y < $.y || h.x > a.width || h.y > a.height)
              continue;
            let d = (function (t, e, i, s, a) {
              let { dx: o, dy: r, distance: l } = (0, O.oW6)(t, e);
              if (!a || l <= i) return l;
              let c = { x: Math.abs(o), y: Math.abs(r) },
                h = {
                  x: Math.min(c.x, s.width - c.x),
                  y: Math.min(c.y, s.height - c.y),
                };
              return Math.sqrt(h.x ** 2 + h.y ** 2);
            })(i, h, l, a, c && s.warp);
            if (d > l) continue;
            let u = (1 - d / l) * r;
            this._setColor(t), t.links.push({ destination: e, opacity: u });
          }
        }
        isEnabled(t) {
          return !!t.options.links?.enable;
        }
        loadParticlesOptions(t, ...e) {
          for (let i of (t.links || (t.links = new Links()), e))
            t.links.load(i?.links);
        }
        reset() {}
      };
      async function loadLinksInteraction(t, e = !0) {
        await t.addInteractor(
          "particlesLinks",
          async (e) => Promise.resolve(new Linker(e, t)),
          e
        );
      }
      function setLinkFrequency(t, e) {
        var i;
        let s = ((i = t.map((t) => t.id)).sort((t, e) => t - e), i.join("_")),
          a = e.get(s);
        return void 0 === a && ((a = (0, O.sZz)()), e.set(s, a)), a;
      }
      let LinkInstance = class LinkInstance {
        constructor(t, e) {
          (this._drawLinkLine = (t, e) => {
            let i = t.options.links;
            if (!i?.enable) return;
            let s = this._container,
              a = s.actualOptions,
              o = e.destination,
              r = t.getPosition(),
              l = o.getPosition(),
              c = e.opacity;
            s.canvas.draw((e) => {
              let h;
              let d = t.options.twinkle?.lines;
              if (d?.enable) {
                let t = d.frequency,
                  e = (0, O.tXk)(this._engine, d.color),
                  i = (0, O.sZz)() < t;
                i && e && ((h = e), (c = (0, O.Gu7)(d.opacity)));
              }
              if (!h) {
                let e =
                  void 0 !== i.id
                    ? s.particles.linksColors.get(i.id)
                    : s.particles.linksColor;
                h = (0, O.BEi)(t, o, e);
              }
              if (!h) return;
              let u = t.retina.linksWidth ?? 0,
                p = t.retina.linksDistance ?? 0,
                { backgroundMask: g } = a;
              !(function (t) {
                let e = !1,
                  {
                    begin: i,
                    end: s,
                    engine: a,
                    maxDistance: o,
                    context: r,
                    canvasSize: l,
                    width: c,
                    backgroundMask: h,
                    colorLine: d,
                    opacity: u,
                    links: p,
                  } = t;
                if ((0, O.Spd)(i, s) <= o) (0, O.pSR)(r, i, s), (e = !0);
                else if (p.warp) {
                  let t, a;
                  let c = { x: s.x - l.width, y: s.y },
                    h = (0, O.oW6)(i, c);
                  if (h.distance <= o) {
                    let e = i.y - (h.dy / h.dx) * i.x;
                    (t = { x: 0, y: e }), (a = { x: l.width, y: e });
                  } else {
                    let e = { x: s.x, y: s.y - l.height },
                      r = (0, O.oW6)(i, e);
                    if (r.distance <= o) {
                      let e = i.y - (r.dy / r.dx) * i.x,
                        s = -e / (r.dy / r.dx);
                      (t = { x: s, y: 0 }), (a = { x: s, y: l.height });
                    } else {
                      let e = { x: s.x - l.width, y: s.y - l.height },
                        r = (0, O.oW6)(i, e);
                      if (r.distance <= o) {
                        let e = i.y - (r.dy / r.dx) * i.x,
                          s = -e / (r.dy / r.dx);
                        a = {
                          x: (t = { x: s, y: e }).x + l.width,
                          y: t.y + l.height,
                        };
                      }
                    }
                  }
                  t &&
                    a &&
                    ((0, O.pSR)(r, i, t), (0, O.pSR)(r, s, a), (e = !0));
                }
                if (!e) return;
                (r.lineWidth = c),
                  h.enable && (r.globalCompositeOperation = h.composite),
                  (r.strokeStyle = (0, O.izR)(d, u));
                let { shadow: g } = p;
                if (g.enable) {
                  let t = (0, O.tXk)(a, g.color);
                  t &&
                    ((r.shadowBlur = g.blur), (r.shadowColor = (0, O.izR)(t)));
                }
                r.stroke();
              })({
                context: e,
                width: u,
                begin: r,
                end: l,
                engine: this._engine,
                maxDistance: p,
                canvasSize: s.canvas.size,
                links: i,
                backgroundMask: g,
                colorLine: h,
                opacity: c,
              });
            });
          }),
            (this._drawLinkTriangle = (t, e, i) => {
              let s = t.options.links;
              if (!s?.enable) return;
              let a = s.triangles;
              if (!a.enable) return;
              let o = this._container,
                r = o.actualOptions,
                l = e.destination,
                c = i.destination,
                h = a.opacity ?? (e.opacity + i.opacity) * 0.5;
              h <= 0 ||
                o.canvas.draw((e) => {
                  let i = t.getPosition(),
                    d = l.getPosition(),
                    u = c.getPosition(),
                    p = t.retina.linksDistance ?? 0;
                  if (
                    (0, O.Spd)(i, d) > p ||
                    (0, O.Spd)(u, d) > p ||
                    (0, O.Spd)(u, i) > p
                  )
                    return;
                  let g = (0, O.tXk)(this._engine, a.color);
                  if (!g) {
                    let e =
                      void 0 !== s.id
                        ? o.particles.linksColors.get(s.id)
                        : o.particles.linksColor;
                    g = (0, O.BEi)(t, l, e);
                  }
                  g &&
                    (function (t) {
                      let {
                        context: e,
                        pos1: i,
                        pos2: s,
                        pos3: a,
                        backgroundMask: o,
                        colorTriangle: r,
                        opacityTriangle: l,
                      } = t;
                      e.beginPath(),
                        e.moveTo(i.x, i.y),
                        e.lineTo(s.x, s.y),
                        e.lineTo(a.x, a.y),
                        e.closePath(),
                        o.enable && (e.globalCompositeOperation = o.composite),
                        (e.fillStyle = (0, O.izR)(r, l)),
                        e.fill();
                    })({
                      context: e,
                      pos1: i,
                      pos2: d,
                      pos3: u,
                      backgroundMask: r.backgroundMask,
                      colorTriangle: g,
                      opacityTriangle: h,
                    });
                });
            }),
            (this._drawTriangles = (t, e, i, s) => {
              let a = i.destination;
              if (
                !(
                  t.links?.triangles.enable && a.options.links?.triangles.enable
                )
              )
                return;
              let o = a.links?.filter((t) => {
                let e = this._getLinkFrequency(a, t.destination);
                return (
                  a.options.links &&
                  e <= a.options.links.frequency &&
                  s.findIndex((e) => e.destination === t.destination) >= 0
                );
              });
              if (o?.length)
                for (let s of o) {
                  let o = s.destination,
                    r = this._getTriangleFrequency(e, a, o);
                  r > t.links.triangles.frequency ||
                    this._drawLinkTriangle(e, i, s);
                }
            }),
            (this._getLinkFrequency = (t, e) =>
              setLinkFrequency([t, e], this._freqs.links)),
            (this._getTriangleFrequency = (t, e, i) =>
              setLinkFrequency([t, e, i], this._freqs.triangles)),
            (this._container = t),
            (this._engine = e),
            (this._freqs = { links: new Map(), triangles: new Map() });
        }
        drawParticle(t, e) {
          let { links: i, options: s } = e;
          if (!i?.length) return;
          let a = i.filter(
            (t) =>
              s.links &&
              (s.links.frequency >= 1 ||
                this._getLinkFrequency(e, t.destination) <= s.links.frequency)
          );
          for (let t of a)
            this._drawTriangles(s, e, t, a),
              t.opacity > 0 &&
                (e.retina.linksWidth ?? 0) > 0 &&
                this._drawLinkLine(e, t);
        }
        async init() {
          (this._freqs.links = new Map()),
            (this._freqs.triangles = new Map()),
            await Promise.resolve();
        }
        particleCreated(t) {
          if (((t.links = []), !t.options.links)) return;
          let e = this._container.retina.pixelRatio,
            { retina: i } = t,
            { distance: s, width: a } = t.options.links;
          (i.linksDistance = s * e), (i.linksWidth = a * e);
        }
        particleDestroyed(t) {
          t.links = [];
        }
      };
      let LinksPlugin = class LinksPlugin {
        constructor(t) {
          (this.id = "links"), (this._engine = t);
        }
        getPlugin(t) {
          return Promise.resolve(new LinkInstance(t, this._engine));
        }
        loadOptions() {}
        needsPlugin() {
          return !0;
        }
      };
      async function loadLinksPlugin(t, e = !0) {
        let i = new LinksPlugin(t);
        await t.addPlugin(i, e);
      }
      async function loadParticlesLinksInteraction(t, e = !0) {
        t.checkVersion("3.8.1"),
          await loadLinksInteraction(t, e),
          await loadLinksPlugin(t, e);
      }
      let Y = { x: 0, y: 0 };
      let PolygonDrawerBase = class PolygonDrawerBase {
        draw(t) {
          let { particle: e, radius: i } = t,
            s = this.getCenter(e, i),
            a = this.getSidesData(e, i);
          !(function (t, e, i) {
            let { context: s } = t,
              a = i.count.numerator * i.count.denominator,
              o = i.count.numerator / i.count.denominator,
              r = Math.PI - (0, O.Idc)((180 * (o - 2)) / o);
            if (s) {
              s.beginPath(), s.translate(e.x, e.y), s.moveTo(Y.x, Y.y);
              for (let t = 0; t < a; t++)
                s.lineTo(i.length, Y.y),
                  s.translate(i.length, Y.y),
                  s.rotate(r);
            }
          })(t, s, a);
        }
        getSidesCount(t) {
          let e = t.shapeData;
          return Math.round((0, O.Gu7)(e?.sides ?? 5));
        }
      };
      let PolygonDrawer = class PolygonDrawer extends PolygonDrawerBase {
        constructor() {
          super(...arguments), (this.validTypes = ["polygon"]);
        }
        getCenter(t, e) {
          return { x: -e / (t.sides / 3.5), y: -e / 0.76 };
        }
        getSidesData(t, e) {
          let i = t.sides;
          return {
            count: { denominator: 1, numerator: i },
            length: (2.66 * e) / (i / 3),
          };
        }
      };
      let TriangleDrawer = class TriangleDrawer extends PolygonDrawerBase {
        constructor() {
          super(...arguments), (this.validTypes = ["triangle"]);
        }
        getCenter(t, e) {
          return { x: -e, y: e / 1.66 };
        }
        getSidesCount() {
          return 3;
        }
        getSidesData(t, e) {
          return { count: { denominator: 2, numerator: 3 }, length: 2 * e };
        }
      };
      async function loadGenericPolygonShape(t, e = !0) {
        t.checkVersion("3.8.1"), await t.addShape(new PolygonDrawer(), e);
      }
      async function loadTriangleShape(t, e = !0) {
        t.checkVersion("3.8.1"), await t.addShape(new TriangleDrawer(), e);
      }
      async function loadPolygonShape(t, e = !0) {
        t.checkVersion("3.8.1"),
          await loadGenericPolygonShape(t, e),
          await loadTriangleShape(t, e);
      }
      let RotateAnimation = class RotateAnimation {
        constructor() {
          (this.enable = !1),
            (this.speed = 0),
            (this.decay = 0),
            (this.sync = !1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = (0, O.Cst)(t.speed)),
            void 0 !== t.decay && (this.decay = (0, O.Cst)(t.decay)),
            void 0 === t.sync || (this.sync = t.sync));
        }
      };
      let Rotate = class Rotate extends O.SWe {
        constructor() {
          super(),
            (this.animation = new RotateAnimation()),
            (this.direction = O.RnL.clockwise),
            (this.path = !1),
            (this.value = 0);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (super.load(t),
            void 0 !== t.direction && (this.direction = t.direction),
            this.animation.load(t.animation),
            void 0 === t.path || (this.path = t.path));
        }
      };
      let X = 2 * Math.PI;
      let RotateUpdater = class RotateUpdater {
        constructor(t) {
          this.container = t;
        }
        init(t) {
          let e = t.options.rotate;
          if (!e) return;
          (t.rotate = {
            enable: e.animation.enable,
            value: (0, O.Idc)((0, O.Gu7)(e.value)),
            min: 0,
            max: X,
          }),
            (t.pathRotation = e.path);
          let i = e.direction;
          if (i === O.RnL.random) {
            let t = Math.floor(2 * (0, O.sZz)());
            i = t > 0 ? O.RnL.counterClockwise : O.RnL.clockwise;
          }
          switch (i) {
            case O.RnL.counterClockwise:
            case "counterClockwise":
              t.rotate.status = O.NV1.decreasing;
              break;
            case O.RnL.clockwise:
              t.rotate.status = O.NV1.increasing;
          }
          let s = e.animation;
          s.enable &&
            ((t.rotate.decay = 1 - (0, O.Gu7)(s.decay)),
            (t.rotate.velocity =
              ((0, O.Gu7)(s.speed) / 360) * this.container.retina.reduceFactor),
            s.sync || (t.rotate.velocity *= (0, O.sZz)())),
            (t.rotation = t.rotate.value);
        }
        isEnabled(t) {
          let e = t.options.rotate;
          return (
            !!e &&
            !t.destroyed &&
            !t.spawning &&
            (!!e.value || e.animation.enable || e.path)
          );
        }
        loadOptions(t, ...e) {
          for (let i of (t.rotate || (t.rotate = new Rotate()), e))
            t.rotate.load(i?.rotate);
        }
        update(t, e) {
          this.isEnabled(t) &&
            ((t.isRotating = !!t.rotate),
            t.rotate &&
              ((0, O.CrJ)(t, t.rotate, !1, O.Hyf.none, e),
              (t.rotation = t.rotate.value)));
        }
      };
      async function loadRotateUpdater(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addParticleUpdater(
            "rotate",
            (t) => Promise.resolve(new RotateUpdater(t)),
            e
          );
      }
      let K = Math.sqrt(2);
      let SquareDrawer = class SquareDrawer {
        constructor() {
          this.validTypes = ["edge", "square"];
        }
        draw(t) {
          !(function (t) {
            let { context: e, radius: i } = t,
              s = i / K,
              a = 2 * s;
            e.rect(-s, -s, a, a);
          })(t);
        }
        getSidesCount() {
          return 4;
        }
      };
      async function loadSquareShape(t, e = !0) {
        t.checkVersion("3.8.1"), await t.addShape(new SquareDrawer(), e);
      }
      let Q = { x: 0, y: 0 };
      let StarDrawer = class StarDrawer {
        constructor() {
          this.validTypes = ["star"];
        }
        draw(t) {
          !(function (t) {
            let { context: e, particle: i, radius: s } = t,
              a = i.sides,
              o = i.starInset ?? 2;
            e.moveTo(Q.x, Q.y - s);
            for (let t = 0; t < a; t++)
              e.rotate(Math.PI / a),
                e.lineTo(Q.x, Q.y - s * o),
                e.rotate(Math.PI / a),
                e.lineTo(Q.x, Q.y - s);
          })(t);
        }
        getSidesCount(t) {
          let e = t.shapeData;
          return Math.round((0, O.Gu7)(e?.sides ?? 5));
        }
        particleInit(t, e) {
          let i = e.shapeData;
          e.starInset = (0, O.Gu7)(i?.inset ?? 2);
        }
      };
      async function loadStarShape(t, e = !0) {
        t.checkVersion("3.8.1"), await t.addShape(new StarDrawer(), e);
      }
      let StrokeColorUpdater = class StrokeColorUpdater {
        constructor(t, e) {
          (this._container = t), (this._engine = e);
        }
        init(t) {
          let e = this._container,
            i = t.options,
            s = (0, O.wA_)(i.stroke, t.id, i.reduceDuplicates);
          (t.strokeWidth = (0, O.Gu7)(s.width) * e.retina.pixelRatio),
            (t.strokeOpacity = (0, O.Gu7)(s.opacity ?? 1)),
            (t.strokeAnimation = s.color?.animation);
          let a = (0, O.lNs)(this._engine, s.color) ?? t.getFillColor();
          a &&
            (t.strokeColor = (0, O.bS$)(
              a,
              t.strokeAnimation,
              e.retina.reduceFactor
            ));
        }
        isEnabled(t) {
          let e = t.strokeAnimation,
            { strokeColor: i } = t;
          return (
            !t.destroyed &&
            !t.spawning &&
            !!e &&
            ((i?.h.value !== void 0 && i.h.enable) ||
              (i?.s.value !== void 0 && i.s.enable) ||
              (i?.l.value !== void 0 && i.l.enable))
          );
        }
        update(t, e) {
          this.isEnabled(t) && (0, O.PBz)(t.strokeColor, e);
        }
      };
      async function loadStrokeColorUpdater(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addParticleUpdater(
            "strokeColor",
            (e) => Promise.resolve(new StrokeColorUpdater(e, t)),
            e
          );
      }
      async function loadSlim(t, e = !0) {
        t.checkVersion("3.8.1"),
          await loadParallaxMover(t, !1),
          await loadExternalAttractInteraction(t, !1),
          await loadExternalBounceInteraction(t, !1),
          await loadExternalBubbleInteraction(t, !1),
          await loadExternalConnectInteraction(t, !1),
          await loadExternalGrabInteraction(t, !1),
          await loadExternalPauseInteraction(t, !1),
          await loadExternalPushInteraction(t, !1),
          await loadExternalRemoveInteraction(t, !1),
          await loadExternalRepulseInteraction(t, !1),
          await loadExternalSlowInteraction(t, !1),
          await loadParticlesAttractInteraction(t, !1),
          await loadParticlesCollisionsInteraction(t, !1),
          await loadParticlesLinksInteraction(t, !1),
          await loadEasingQuadPlugin(t, !1),
          await loadEmojiShape(t, !1),
          await loadImageShape(t, !1),
          await loadLineShape(t, !1),
          await loadPolygonShape(t, !1),
          await loadSquareShape(t, !1),
          await loadStarShape(t, !1),
          await loadLifeUpdater(t, !1),
          await loadRotateUpdater(t, !1),
          await loadStrokeColorUpdater(t, !1),
          await loadBasic(t, e);
      }
      let TextDrawer = class TextDrawer {
        constructor() {
          this.validTypes = ["text", "character", "char", "multiline-text"];
        }
        draw(t) {
          !(function (t) {
            let { context: e, particle: i, radius: s, opacity: a } = t,
              o = i.shapeData;
            if (!o) return;
            let r = o.value;
            if (void 0 === r) return;
            void 0 === i.text && (i.text = (0, O.wA_)(r, i.randomIndexData));
            let l = i.text,
              c = o.style ?? "",
              h = o.weight ?? "400",
              d = 2 * Math.round(s),
              u = o.font ?? "Verdana",
              p = i.shapeFill,
              g = l?.split("\n");
            if (g) {
              (e.font = `${c} ${h} ${d}px "${u}"`), (e.globalAlpha = a);
              for (let t = 0; t < g.length; t++)
                !(function (t, e, i, s, a, o) {
                  let r = e.length * i * 0.5,
                    l = { x: -r, y: 0.5 * i },
                    c = 2 * i;
                  o
                    ? t.fillText(e, l.x, l.y + c * a)
                    : t.strokeText(e, l.x, l.y + c * a);
                })(e, g[t], s, 0, t, p);
              e.globalAlpha = 1;
            }
          })(t);
        }
        async init(t) {
          let e = t.actualOptions,
            { validTypes: i } = this;
          if (i.find((t) => (0, O.dBL)(t, e.particles.shape.type))) {
            let t = i.map((t) => e.particles.shape.options[t]).find((t) => !!t),
              s = [];
            (0, O.KH1)(t, (t) => {
              s.push((0, O.mxw)(t.font, t.weight));
            }),
              await Promise.all(s);
          }
        }
        particleInit(t, e) {
          if (!e.shape || !this.validTypes.includes(e.shape)) return;
          let i = e.shapeData;
          if (void 0 === i) return;
          let s = i.value;
          void 0 !== s && (e.text = (0, O.wA_)(s, e.randomIndexData));
        }
      };
      async function loadTextShape(t, e = !0) {
        t.checkVersion("3.8.1"), await t.addShape(new TextDrawer(), e);
      }
      ((p = S || (S = {})).clockwise = "clockwise"),
        (p.counterClockwise = "counter-clockwise"),
        (p.random = "random");
      let TiltAnimation = class TiltAnimation {
        constructor() {
          (this.enable = !1),
            (this.speed = 0),
            (this.decay = 0),
            (this.sync = !1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed && (this.speed = (0, O.Cst)(t.speed)),
            void 0 !== t.decay && (this.decay = (0, O.Cst)(t.decay)),
            void 0 === t.sync || (this.sync = t.sync));
        }
      };
      let Tilt = class Tilt extends O.SWe {
        constructor() {
          super(),
            (this.animation = new TiltAnimation()),
            (this.direction = S.clockwise),
            (this.enable = !1),
            (this.value = 0);
        }
        load(t) {
          super.load(t),
            (0, O.Ft)(t) ||
              (this.animation.load(t.animation),
              void 0 !== t.direction && (this.direction = t.direction),
              void 0 === t.enable || (this.enable = t.enable));
        }
      };
      let J = 2 * Math.PI;
      let TiltUpdater = class TiltUpdater {
        constructor(t) {
          this.container = t;
        }
        getTransformValues(t) {
          let e = t.tilt?.enable && t.tilt;
          return {
            b: e ? Math.cos(e.value) * e.cosDirection : void 0,
            c: e ? Math.sin(e.value) * e.sinDirection : void 0,
          };
        }
        init(t) {
          let e = t.options.tilt;
          if (!e) return;
          t.tilt = {
            enable: e.enable,
            value: (0, O.Idc)((0, O.Gu7)(e.value)),
            sinDirection: (0, O.sZz)() >= O.jz_ ? 1 : -1,
            cosDirection: (0, O.sZz)() >= O.jz_ ? 1 : -1,
            min: 0,
            max: J,
          };
          let i = e.direction;
          if (i === S.random) {
            let t = Math.floor(2 * (0, O.sZz)());
            i = t > 0 ? S.counterClockwise : S.clockwise;
          }
          switch (i) {
            case S.counterClockwise:
            case "counterClockwise":
              t.tilt.status = O.NV1.decreasing;
              break;
            case S.clockwise:
              t.tilt.status = O.NV1.increasing;
          }
          let s = t.options.tilt?.animation;
          s?.enable &&
            ((t.tilt.decay = 1 - (0, O.Gu7)(s.decay)),
            (t.tilt.velocity =
              ((0, O.Gu7)(s.speed) / 360) * this.container.retina.reduceFactor),
            s.sync || (t.tilt.velocity *= (0, O.sZz)()));
        }
        isEnabled(t) {
          let e = t.options.tilt?.animation;
          return !t.destroyed && !t.spawning && !!e?.enable;
        }
        loadOptions(t, ...e) {
          for (let i of (t.tilt || (t.tilt = new Tilt()), e))
            t.tilt.load(i?.tilt);
        }
        async update(t, e) {
          this.isEnabled(t) &&
            t.tilt &&
            ((0, O.CrJ)(t, t.tilt, !1, O.Hyf.none, e), await Promise.resolve());
        }
      };
      async function loadTiltUpdater(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addParticleUpdater(
            "tilt",
            (t) => Promise.resolve(new TiltUpdater(t)),
            e
          );
      }
      let TwinkleValues = class TwinkleValues {
        constructor() {
          (this.enable = !1), (this.frequency = 0.05), (this.opacity = 1);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.color &&
              (this.color = O.OzF.create(this.color, t.color)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.frequency && (this.frequency = t.frequency),
            void 0 !== t.opacity && (this.opacity = (0, O.Cst)(t.opacity)));
        }
      };
      let Twinkle = class Twinkle {
        constructor() {
          (this.lines = new TwinkleValues()),
            (this.particles = new TwinkleValues());
        }
        load(t) {
          (0, O.Ft)(t) ||
            (this.lines.load(t.lines), this.particles.load(t.particles));
        }
      };
      let TwinkleUpdater = class TwinkleUpdater {
        constructor(t) {
          this._engine = t;
        }
        getColorStyles(t, e, i, s) {
          let a = t.options,
            o = a.twinkle;
          if (!o) return {};
          let r = o.particles,
            l = r.enable && (0, O.sZz)() < r.frequency,
            c = t.options.zIndex,
            h = (1 - t.zIndexFactor) ** c.opacityRate,
            d = l ? (0, O.Gu7)(r.opacity) * h : s,
            u = (0, O.lNs)(this._engine, r.color),
            p = u ? (0, O.vzQ)(u, d) : void 0,
            g = {},
            m = l && p;
          return (g.fill = m ? p : void 0), (g.stroke = m ? p : void 0), g;
        }
        async init() {
          await Promise.resolve();
        }
        isEnabled(t) {
          let e = t.options,
            i = e.twinkle;
          return !!i && i.particles.enable;
        }
        loadOptions(t, ...e) {
          for (let i of (t.twinkle || (t.twinkle = new Twinkle()), e))
            t.twinkle.load(i?.twinkle);
        }
        async update() {
          await Promise.resolve();
        }
      };
      async function loadTwinkleUpdater(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addParticleUpdater(
            "twinkle",
            () => Promise.resolve(new TwinkleUpdater(t)),
            e
          );
      }
      let WobbleSpeed = class WobbleSpeed {
        constructor() {
          (this.angle = 50), (this.move = 10);
        }
        load(t) {
          (0, O.Ft)(t) ||
            (void 0 !== t.angle && (this.angle = (0, O.Cst)(t.angle)),
            void 0 !== t.move && (this.move = (0, O.Cst)(t.move)));
        }
      };
      let Wobble = class Wobble {
        constructor() {
          (this.distance = 5),
            (this.enable = !1),
            (this.speed = new WobbleSpeed());
        }
        load(t) {
          if (
            !(0, O.Ft)(t) &&
            (void 0 !== t.distance && (this.distance = (0, O.Cst)(t.distance)),
            void 0 !== t.enable && (this.enable = t.enable),
            void 0 !== t.speed)
          ) {
            if ((0, O.hj$)(t.speed)) this.speed.load({ angle: t.speed });
            else {
              let e = t.speed;
              void 0 !== e.min
                ? this.speed.load({ angle: e })
                : this.speed.load(t.speed);
            }
          }
        }
      };
      let tt = 2 * Math.PI,
        te = 2 * Math.PI;
      let WobbleUpdater = class WobbleUpdater {
        constructor(t) {
          this.container = t;
        }
        init(t) {
          let e = t.options.wobble;
          e?.enable
            ? (t.wobble = {
                angle: (0, O.sZz)() * te,
                angleSpeed: (0, O.Gu7)(e.speed.angle) / 360,
                moveSpeed: (0, O.Gu7)(e.speed.move) / 10,
              })
            : (t.wobble = { angle: 0, angleSpeed: 0, moveSpeed: 0 }),
            (t.retina.wobbleDistance =
              (0, O.Gu7)(e?.distance ?? 0) * this.container.retina.pixelRatio);
        }
        isEnabled(t) {
          return !t.destroyed && !t.spawning && !!t.options.wobble?.enable;
        }
        loadOptions(t, ...e) {
          for (let i of (t.wobble || (t.wobble = new Wobble()), e))
            t.wobble.load(i?.wobble);
        }
        update(t, e) {
          this.isEnabled(t) &&
            (function (t, e) {
              let { wobble: i } = t.options,
                { wobble: s } = t;
              if (!i?.enable || !s) return;
              let a = s.angleSpeed * e.factor,
                o = s.moveSpeed * e.factor,
                r =
                  (o * ((t.retina.wobbleDistance ?? 0) * e.factor)) /
                  (O.X5o / 60),
                { position: l } = t;
              (s.angle += a),
                s.angle > tt && (s.angle -= tt),
                (l.x += r * Math.cos(s.angle)),
                (l.y += r * Math.abs(Math.sin(s.angle)));
            })(t, e);
        }
      };
      async function loadWobbleUpdater(t, e = !0) {
        t.checkVersion("3.8.1"),
          await t.addParticleUpdater(
            "wobble",
            (t) => Promise.resolve(new WobbleUpdater(t)),
            e
          );
      }
      async function loadFull(t, e = !0) {
        t.checkVersion("3.8.1"),
          await loadDestroyUpdater(t, !1),
          await loadRollUpdater(t, !1),
          await loadTiltUpdater(t, !1),
          await loadTwinkleUpdater(t, !1),
          await loadWobbleUpdater(t, !1),
          await loadTextShape(t, !1),
          await loadExternalTrailInteraction(t, !1),
          await loadAbsorbersPlugin(t, !1),
          await loadEmittersPlugin(t, !1),
          await loadEmittersShapeCircle(t, !1),
          await loadEmittersShapeSquare(t, !1),
          await loadSlim(t, e);
      }
    },
  },
]);
