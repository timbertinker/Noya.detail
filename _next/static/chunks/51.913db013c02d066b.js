(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [51],
  {
    26076: function (e, t, n) {
      !(function (e, t, n) {
        "use strict";
        function _interopDefaultLegacy(e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        }
        var r = _interopDefaultLegacy(t),
          o = _interopDefaultLegacy(n);
        function _arrayLikeToArray(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function ownKeys(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function _objectSpread2(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? ownKeys(Object(n), !0).forEach(function (t) {
                  var r, o;
                  (r = t),
                    (o = n[t]),
                    (r = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : t + "";
                    })(r)) in e
                      ? Object.defineProperty(e, r, {
                          value: o,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[r] = o);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ownKeys(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function _objectWithoutProperties(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = (function (e, t) {
              if (null == e) return {};
              var n = {};
              for (var r in e)
                if ({}.hasOwnProperty.call(e, r)) {
                  if (t.includes(r)) continue;
                  n[r] = e[r];
                }
              return n;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]),
                t.includes(n) ||
                  ({}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
          }
          return o;
        }
        var a = [
            "animationData",
            "loop",
            "autoplay",
            "initialSegment",
            "onComplete",
            "onLoopComplete",
            "onEnterFrame",
            "onSegmentStart",
            "onConfigReady",
            "onDataReady",
            "onDataFailed",
            "onLoadedImages",
            "onDOMLoaded",
            "onDestroy",
            "lottieRef",
            "renderer",
            "name",
            "assetsPath",
            "rendererSettings",
          ],
          useLottie = function (e, t) {
            var i,
              l = e.animationData,
              u = e.loop,
              s = e.autoplay,
              c = e.initialSegment,
              f = e.onComplete,
              d = e.onLoopComplete,
              m = e.onEnterFrame,
              p = e.onSegmentStart,
              y = e.onConfigReady,
              v = e.onDataReady,
              g = e.onDataFailed,
              h = e.onLoadedImages,
              b = e.onDOMLoaded,
              x = e.onDestroy;
            e.lottieRef, e.renderer, e.name, e.assetsPath, e.rendererSettings;
            var S = _objectWithoutProperties(e, a),
              w =
                (function (e) {
                  if (Array.isArray(e)) return e;
                })((i = n.useState(!1))) ||
                (function (e, t) {
                  var n =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != n) {
                    var r,
                      o,
                      a,
                      i,
                      l = [],
                      u = !0,
                      s = !1;
                    try {
                      if (((a = (n = n.call(e)).next), 0 === t)) {
                        if (Object(n) !== n) return;
                        u = !1;
                      } else
                        for (
                          ;
                          !(u = (r = a.call(n)).done) &&
                          (l.push(r.value), l.length !== t);
                          u = !0
                        );
                    } catch (e) {
                      (s = !0), (o = e);
                    } finally {
                      try {
                        if (
                          !u &&
                          null != n.return &&
                          ((i = n.return()), Object(i) !== i)
                        )
                          return;
                      } finally {
                        if (s) throw o;
                      }
                    }
                    return l;
                  }
                })(i, 2) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return _arrayLikeToArray(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? _arrayLikeToArray(e, t)
                        : void 0
                    );
                  }
                })(i, 2) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(),
              j = w[0],
              A = w[1],
              O = n.useRef(),
              F = n.useRef(null),
              loadAnimation = function () {
                var t,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                if (F.current) {
                  null === (t = O.current) || void 0 === t || t.destroy();
                  var o = _objectSpread2(
                    _objectSpread2(_objectSpread2({}, e), n),
                    {},
                    { container: F.current }
                  );
                  return (
                    (O.current = r.default.loadAnimation(o)),
                    A(!!O.current),
                    function () {
                      var e;
                      null === (e = O.current) || void 0 === e || e.destroy(),
                        (O.current = void 0);
                    }
                  );
                }
              };
            return (
              n.useEffect(
                function () {
                  var e = loadAnimation();
                  return function () {
                    return null == e ? void 0 : e();
                  };
                },
                [l, u]
              ),
              n.useEffect(
                function () {
                  O.current && (O.current.autoplay = !!s);
                },
                [s]
              ),
              n.useEffect(
                function () {
                  if (O.current) {
                    if (!c) {
                      O.current.resetSegments(!0);
                      return;
                    }
                    Array.isArray(c) &&
                      c.length &&
                      ((O.current.currentRawFrame < c[0] ||
                        O.current.currentRawFrame > c[1]) &&
                        (O.current.currentRawFrame = c[0]),
                      O.current.setSegment(c[0], c[1]));
                  }
                },
                [c]
              ),
              n.useEffect(
                function () {
                  var e = [
                    { name: "complete", handler: f },
                    { name: "loopComplete", handler: d },
                    { name: "enterFrame", handler: m },
                    { name: "segmentStart", handler: p },
                    { name: "config_ready", handler: y },
                    { name: "data_ready", handler: v },
                    { name: "data_failed", handler: g },
                    { name: "loaded_images", handler: h },
                    { name: "DOMLoaded", handler: b },
                    { name: "destroy", handler: x },
                  ].filter(function (e) {
                    return null != e.handler;
                  });
                  if (e.length) {
                    var t = e.map(function (e) {
                      var t;
                      return (
                        null === (t = O.current) ||
                          void 0 === t ||
                          t.addEventListener(e.name, e.handler),
                        function () {
                          var t;
                          null === (t = O.current) ||
                            void 0 === t ||
                            t.removeEventListener(e.name, e.handler);
                        }
                      );
                    });
                    return function () {
                      t.forEach(function (e) {
                        return e();
                      });
                    };
                  }
                },
                [f, d, m, p, y, v, g, h, b, x]
              ),
              {
                View: o.default.createElement(
                  "div",
                  _objectSpread2({ style: t, ref: F }, S)
                ),
                play: function () {
                  var e;
                  null === (e = O.current) || void 0 === e || e.play();
                },
                stop: function () {
                  var e;
                  null === (e = O.current) || void 0 === e || e.stop();
                },
                pause: function () {
                  var e;
                  null === (e = O.current) || void 0 === e || e.pause();
                },
                setSpeed: function (e) {
                  var t;
                  null === (t = O.current) || void 0 === t || t.setSpeed(e);
                },
                goToAndStop: function (e, t) {
                  var n;
                  null === (n = O.current) ||
                    void 0 === n ||
                    n.goToAndStop(e, t);
                },
                goToAndPlay: function (e, t) {
                  var n;
                  null === (n = O.current) ||
                    void 0 === n ||
                    n.goToAndPlay(e, t);
                },
                setDirection: function (e) {
                  var t;
                  null === (t = O.current) || void 0 === t || t.setDirection(e);
                },
                playSegments: function (e, t) {
                  var n;
                  null === (n = O.current) ||
                    void 0 === n ||
                    n.playSegments(e, t);
                },
                setSubframe: function (e) {
                  var t;
                  null === (t = O.current) || void 0 === t || t.setSubframe(e);
                },
                getDuration: function (e) {
                  var t;
                  return null === (t = O.current) || void 0 === t
                    ? void 0
                    : t.getDuration(e);
                },
                destroy: function () {
                  var e;
                  null === (e = O.current) || void 0 === e || e.destroy(),
                    (O.current = void 0);
                },
                animationContainerRef: F,
                animationLoaded: j,
                animationItem: O.current,
              }
            );
          },
          useInitInteractivity = function (e) {
            var t = e.wrapperRef,
              r = e.animationItem,
              o = e.mode,
              a = e.actions;
            n.useEffect(
              function () {
                var e,
                  n,
                  i,
                  l,
                  u,
                  s = t.current;
                if (s && r && a.length)
                  switch ((r.stop(), o)) {
                    case "scroll":
                      return (
                        (e = null),
                        (n = function () {
                          var t,
                            n,
                            o,
                            i =
                              ((n = (t = s.getBoundingClientRect()).top),
                              (o = t.height),
                              (window.innerHeight - n) /
                                (window.innerHeight + o)),
                            l = a.find(function (e) {
                              var t = e.visibility;
                              return t && i >= t[0] && i <= t[1];
                            });
                          if (l) {
                            if (
                              "seek" === l.type &&
                              l.visibility &&
                              2 === l.frames.length
                            ) {
                              var u =
                                l.frames[0] +
                                Math.ceil(
                                  ((i - l.visibility[0]) /
                                    (l.visibility[1] - l.visibility[0])) *
                                    l.frames[1]
                                );
                              r.goToAndStop(u - r.firstFrame - 1, !0);
                            }
                            "loop" === l.type &&
                              (null === e
                                ? (r.playSegments(l.frames, !0), (e = l.frames))
                                : e !== l.frames
                                ? (r.playSegments(l.frames, !0), (e = l.frames))
                                : r.isPaused &&
                                  (r.playSegments(l.frames, !0),
                                  (e = l.frames))),
                              "play" === l.type &&
                                r.isPaused &&
                                (r.resetSegments(!0), r.play()),
                              "stop" === l.type &&
                                r.goToAndStop(
                                  l.frames[0] - r.firstFrame - 1,
                                  !0
                                );
                          }
                        }),
                        document.addEventListener("scroll", n),
                        function () {
                          document.removeEventListener("scroll", n);
                        }
                      );
                    case "cursor":
                      return (
                        (i = function (e, t) {
                          var n = e,
                            o = t;
                          if (-1 !== n && -1 !== o) {
                            var i,
                              l,
                              u,
                              c,
                              f =
                                ((i = n),
                                (l = o),
                                (c = (u = s.getBoundingClientRect()).top),
                                {
                                  x: (i - u.left) / u.width,
                                  y: (l - c) / u.height,
                                });
                            (n = f.x), (o = f.y);
                          }
                          var d = a.find(function (e) {
                            var t = e.position;
                            return t && Array.isArray(t.x) && Array.isArray(t.y)
                              ? n >= t.x[0] &&
                                  n <= t.x[1] &&
                                  o >= t.y[0] &&
                                  o <= t.y[1]
                              : !(
                                  !t ||
                                  Number.isNaN(t.x) ||
                                  Number.isNaN(t.y)
                                ) &&
                                  n === t.x &&
                                  o === t.y;
                          });
                          if (d) {
                            if (
                              "seek" === d.type &&
                              d.position &&
                              Array.isArray(d.position.x) &&
                              Array.isArray(d.position.y) &&
                              2 === d.frames.length
                            ) {
                              var m =
                                  (n - d.position.x[0]) /
                                  (d.position.x[1] - d.position.x[0]),
                                p =
                                  (o - d.position.y[0]) /
                                  (d.position.y[1] - d.position.y[0]);
                              r.playSegments(d.frames, !0),
                                r.goToAndStop(
                                  Math.ceil(
                                    ((m + p) / 2) * (d.frames[1] - d.frames[0])
                                  ),
                                  !0
                                );
                            }
                            "loop" === d.type && r.playSegments(d.frames, !0),
                              "play" === d.type &&
                                (r.isPaused && r.resetSegments(!1),
                                r.playSegments(d.frames)),
                              "stop" === d.type &&
                                r.goToAndStop(d.frames[0], !0);
                          }
                        }),
                        (l = function (e) {
                          i(e.clientX, e.clientY);
                        }),
                        (u = function () {
                          i(-1, -1);
                        }),
                        s.addEventListener("mousemove", l),
                        s.addEventListener("mouseout", u),
                        function () {
                          s.removeEventListener("mousemove", l),
                            s.removeEventListener("mouseout", u);
                        }
                      );
                  }
              },
              [o, r]
            );
          },
          useLottieInteractivity = function (e) {
            var t = e.actions,
              n = e.mode,
              r = e.lottieObj,
              o = r.animationItem,
              a = r.View;
            return (
              useInitInteractivity({
                actions: t,
                animationItem: o,
                mode: n,
                wrapperRef: r.animationContainerRef,
              }),
              a
            );
          },
          i = ["style", "interactivity"];
        Object.defineProperty(e, "LottiePlayer", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
          (e.default = function (e) {
            var t,
              r,
              o,
              a = e.style,
              l = e.interactivity,
              u = useLottie(_objectWithoutProperties(e, i), a),
              s = u.View,
              c = u.play,
              f = u.stop,
              d = u.pause,
              m = u.setSpeed,
              p = u.goToAndStop,
              y = u.goToAndPlay,
              v = u.setDirection,
              g = u.playSegments,
              h = u.setSubframe,
              b = u.getDuration,
              x = u.destroy,
              S = u.animationContainerRef,
              w = u.animationLoaded,
              j = u.animationItem;
            return (
              n.useEffect(
                function () {
                  e.lottieRef &&
                    (e.lottieRef.current = {
                      play: c,
                      stop: f,
                      pause: d,
                      setSpeed: m,
                      goToAndPlay: y,
                      goToAndStop: p,
                      setDirection: v,
                      playSegments: g,
                      setSubframe: h,
                      getDuration: b,
                      destroy: x,
                      animationContainerRef: S,
                      animationLoaded: w,
                      animationItem: j,
                    });
                },
                [
                  null === (t = e.lottieRef) || void 0 === t
                    ? void 0
                    : t.current,
                ]
              ),
              useLottieInteractivity({
                lottieObj: {
                  View: s,
                  play: c,
                  stop: f,
                  pause: d,
                  setSpeed: m,
                  goToAndStop: p,
                  goToAndPlay: y,
                  setDirection: v,
                  playSegments: g,
                  setSubframe: h,
                  getDuration: b,
                  destroy: x,
                  animationContainerRef: S,
                  animationLoaded: w,
                  animationItem: j,
                },
                actions:
                  null !== (r = null == l ? void 0 : l.actions) && void 0 !== r
                    ? r
                    : [],
                mode:
                  null !== (o = null == l ? void 0 : l.mode) && void 0 !== o
                    ? o
                    : "scroll",
              })
            );
          }),
          (e.useLottie = useLottie),
          (e.useLottieInteractivity = useLottieInteractivity),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, n(95055), n(50959));
    },
    90051: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Task;
          },
        });
      var r = n(11527),
        o = n(50959),
        components_CheckOutlined = function (e) {
          let { className: t } = e;
          return (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            className: t,
            children: (0, r.jsx)("path", {
              d: "M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z",
            }),
          });
        },
        a = n(26076),
        i = n.n(a),
        l = n(59581),
        u = n.n(l),
        s = n(23874),
        c = n.n(s),
        Task = function (e) {
          let {
              title: t,
              optional: n,
              button: a,
              taskNumber: l,
              done: s = !1,
            } = e,
            f = o.useRef(null),
            d = o.useRef(0),
            m = o.useRef(!1);
          return (
            (0, o.useEffect)(() => {
              let e = f.current;
              e && (d.current = e.getDuration());
            }, [f]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("div", {
                  className: "w-full flex items-center gap-2",
                  children: [
                    (0, r.jsxs)("p", {
                      children: [
                        (0, r.jsxs)("span", {
                          className:
                            "font-EuclidCircularB font-thin w-fit text-[16px] text-[#FFFFFF80] text-start",
                          children: ["Task ", l, ":"],
                        }),
                        " ",
                        (0, r.jsx)("span", {
                          className:
                            "font-EuclidCircularB font-medium w-fit text-[16px] text-white text-start",
                          children: t,
                        }),
                      ],
                    }),
                    s &&
                      (0, r.jsx)(components_CheckOutlined, {
                        className: "fill-[#3AD265] w-[15px] h-[15px]",
                      }),
                  ],
                }),
                n &&
                  (0, r.jsxs)("p", {
                    className:
                      "font-EuclidCircularB font-thin w-fit text-[16px] text-[#FFFFFF80] text-start max-w-[350px]",
                    children: ["Optional: ", n],
                  }),
                (0, r.jsxs)(c(), {
                  href: a.href,
                  target: "_blank",
                  className:
                    "gap-2 hover-opacity cursor-pointer border border-[#FFFFFF80] bg-[#FFFFFF26] rounded-[10px] py-2 px-[12px] flex items-center justify-center text-white text-[18px] font-semibold font-EuclidCircularB w-full",
                  onMouseEnter: () => {
                    if (a.lottie && !m.current) {
                      var e;
                      null === (e = f.current) ||
                        void 0 === e ||
                        e.goToAndPlay(0),
                        (m.current = !0),
                        setTimeout(() => {
                          m.current = !1;
                        }, 1e3 * d.current - 800);
                    }
                  },
                  children: [
                    a.icon &&
                      (0, r.jsx)(u(), {
                        src: a.icon,
                        alt: "vault",
                        width: 18,
                        height: 18,
                        className: "object-contain",
                      }),
                    a.lottie &&
                      (a.absolute
                        ? (0, r.jsx)("div", {
                            className: "w-[18px] h-[18px] relative",
                            children: (0, r.jsx)(i(), {
                              lottieRef: f,
                              className:
                                "w-14 h-14 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
                              animationData: a.lottie,
                              autoplay: !1,
                              loop: !1,
                            }),
                          })
                        : (0, r.jsx)("div", {
                            className: "w-[18px] h-[18px] relative",
                            children: (0, r.jsx)(i(), {
                              lottieRef: f,
                              className:
                                "w-8 h-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
                              animationData: a.lottie,
                              autoplay: !1,
                              loop: !1,
                            }),
                          })),
                    a.text,
                  ],
                }),
              ],
            })
          );
        };
    },
  },
]);
