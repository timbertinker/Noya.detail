"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6040],
  {
    66040: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return ec;
        },
        h_: function () {
          return eu;
        },
        zt: function () {
          return ea;
        },
        fC: function () {
          return el;
        },
        pn: function () {
          return TooltipProvider;
        },
        xz: function () {
          return es;
        },
      });
      var r,
        o = n(50959),
        i = n.t(o, 2);
      function composeEventHandlers(
        e,
        t,
        { checkForDefaultPrevented: n = !0 } = {}
      ) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      function setRef(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function composeRefs(...e) {
        return (t) => {
          let n = !1,
            r = e.map((e) => {
              let r = setRef(e, t);
              return n || "function" != typeof r || (n = !0), r;
            });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                let n = r[t];
                "function" == typeof n ? n() : setRef(e[t], null);
              }
            };
        };
      }
      function useComposedRefs(...e) {
        return o.useCallback(composeRefs(...e), e);
      }
      var a = n(11527);
      function createContextScope(e, t = []) {
        let n = [],
          createScope = () => {
            let t = n.map((e) => o.createContext(e));
            return function (n) {
              let r = n?.[e] || t;
              return o.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                [n, r]
              );
            };
          };
        return (
          (createScope.scopeName = e),
          [
            function (t, r) {
              let i = o.createContext(r),
                l = n.length;
              n = [...n, r];
              let Provider = (t) => {
                let { scope: n, children: r, ...s } = t,
                  u = n?.[e]?.[l] || i,
                  c = o.useMemo(() => s, Object.values(s));
                return (0, a.jsx)(u.Provider, { value: c, children: r });
              };
              return (
                (Provider.displayName = t + "Provider"),
                [
                  Provider,
                  function (n, a) {
                    let s = a?.[e]?.[l] || i,
                      u = o.useContext(s);
                    if (u) return u;
                    if (void 0 !== r) return r;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let createScope = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e),
                      i = o[`__scope${r}`];
                    return { ...t, ...i };
                  }, {});
                  return o.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: r }),
                    [r]
                  );
                };
              };
              return (createScope.scopeName = t.scopeName), createScope;
            })(createScope, ...t),
          ]
        );
      }
      var l = n(10422),
        s = Symbol("radix.slottable");
      function isSlottable(e) {
        return (
          o.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === s
        );
      }
      var u = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let n = (function (e) {
            let t = (function (e) {
                let t = o.forwardRef((e, t) => {
                  let { children: n, ...r } = e;
                  if (o.isValidElement(n)) {
                    let e, i;
                    let a =
                        (e = Object.getOwnPropertyDescriptor(
                          n.props,
                          "ref"
                        )?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning
                          ? n.ref
                          : (e = Object.getOwnPropertyDescriptor(
                              n,
                              "ref"
                            )?.get) &&
                            "isReactWarning" in e &&
                            e.isReactWarning
                          ? n.props.ref
                          : n.props.ref || n.ref,
                      l = (function (e, t) {
                        let n = { ...t };
                        for (let r in t) {
                          let o = e[r],
                            i = t[r],
                            a = /^on[A-Z]/.test(r);
                          a
                            ? o && i
                              ? (n[r] = (...e) => {
                                  i(...e), o(...e);
                                })
                              : o && (n[r] = o)
                            : "style" === r
                            ? (n[r] = { ...o, ...i })
                            : "className" === r &&
                              (n[r] = [o, i].filter(Boolean).join(" "));
                        }
                        return { ...e, ...n };
                      })(r, n.props);
                    return (
                      n.type !== o.Fragment &&
                        (l.ref = t ? composeRefs(t, a) : a),
                      o.cloneElement(n, l)
                    );
                  }
                  return o.Children.count(n) > 1 ? o.Children.only(null) : null;
                });
                return (t.displayName = `${e}.SlotClone`), t;
              })(e),
              n = o.forwardRef((e, n) => {
                let { children: r, ...i } = e,
                  l = o.Children.toArray(r),
                  s = l.find(isSlottable);
                if (s) {
                  let e = s.props.children,
                    r = l.map((t) =>
                      t !== s
                        ? t
                        : o.Children.count(e) > 1
                        ? o.Children.only(null)
                        : o.isValidElement(e)
                        ? e.props.children
                        : null
                    );
                  return (0, a.jsx)(t, {
                    ...i,
                    ref: n,
                    children: o.isValidElement(e)
                      ? o.cloneElement(e, void 0, r)
                      : null,
                  });
                }
                return (0, a.jsx)(t, { ...i, ref: n, children: r });
              });
            return (n.displayName = `${e}.Slot`), n;
          })(`Primitive.${t}`),
          r = o.forwardRef((e, r) => {
            let { asChild: o, ...i } = e,
              l = o ? n : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, a.jsx)(l, { ...i, ref: r })
            );
          });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
      }, {});
      function useCallbackRef(e) {
        let t = o.useRef(e);
        return (
          o.useEffect(() => {
            t.current = e;
          }),
          o.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
      var c = "dismissableLayer.update",
        d = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = o.forwardRef((e, t) => {
          let {
              disableOutsidePointerEvents: n = !1,
              onEscapeKeyDown: i,
              onPointerDownOutside: l,
              onFocusOutside: s,
              onInteractOutside: f,
              onDismiss: p,
              ...m
            } = e,
            h = o.useContext(d),
            [v, y] = o.useState(null),
            g = v?.ownerDocument ?? globalThis?.document,
            [, w] = o.useState({}),
            x = useComposedRefs(t, (e) => y(e)),
            b = Array.from(h.layers),
            [E] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
            C = b.indexOf(E),
            P = v ? b.indexOf(v) : -1,
            R = h.layersWithOutsidePointerEventsDisabled.size > 0,
            T = P >= C,
            S = (function (e, t = globalThis?.document) {
              let n = useCallbackRef(e),
                r = o.useRef(!1),
                i = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let handlePointerDown = (e) => {
                      if (e.target && !r.current) {
                        let handleAndDispatchPointerDownOutsideEvent2 =
                            function () {
                              handleAndDispatchCustomEvent(
                                "dismissableLayer.pointerDownOutside",
                                n,
                                r,
                                { discrete: !0 }
                              );
                            },
                          r = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", i.current),
                            (i.current =
                              handleAndDispatchPointerDownOutsideEvent2),
                            t.addEventListener("click", i.current, {
                              once: !0,
                            }))
                          : handleAndDispatchPointerDownOutsideEvent2();
                      } else t.removeEventListener("click", i.current);
                      r.current = !1;
                    },
                    e = window.setTimeout(() => {
                      t.addEventListener("pointerdown", handlePointerDown);
                    }, 0);
                  return () => {
                    window.clearTimeout(e),
                      t.removeEventListener("pointerdown", handlePointerDown),
                      t.removeEventListener("click", i.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...h.branches].some((e) => e.contains(t));
              !T || n || (l?.(e), f?.(e), e.defaultPrevented || p?.());
            }, g),
            A = (function (e, t = globalThis?.document) {
              let n = useCallbackRef(e),
                r = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let handleFocus = (e) => {
                    e.target &&
                      !r.current &&
                      handleAndDispatchCustomEvent(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", handleFocus),
                    () => t.removeEventListener("focusin", handleFocus)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target,
                n = [...h.branches].some((e) => e.contains(t));
              n || (s?.(e), f?.(e), e.defaultPrevented || p?.());
            }, g);
          return (
            !(function (e, t = globalThis?.document) {
              let n = useCallbackRef(e);
              o.useEffect(() => {
                let handleKeyDown = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", handleKeyDown, { capture: !0 }),
                  () =>
                    t.removeEventListener("keydown", handleKeyDown, {
                      capture: !0,
                    })
                );
              }, [n, t]);
            })((e) => {
              let t = P === h.layers.size - 1;
              t &&
                (i?.(e), !e.defaultPrevented && p && (e.preventDefault(), p()));
            }, g),
            o.useEffect(() => {
              if (v)
                return (
                  n &&
                    (0 === h.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = g.body.style.pointerEvents),
                      (g.body.style.pointerEvents = "none")),
                    h.layersWithOutsidePointerEventsDisabled.add(v)),
                  h.layers.add(v),
                  dispatchUpdate(),
                  () => {
                    n &&
                      1 === h.layersWithOutsidePointerEventsDisabled.size &&
                      (g.body.style.pointerEvents = r);
                  }
                );
            }, [v, g, n, h]),
            o.useEffect(
              () => () => {
                v &&
                  (h.layers.delete(v),
                  h.layersWithOutsidePointerEventsDisabled.delete(v),
                  dispatchUpdate());
              },
              [v, h]
            ),
            o.useEffect(() => {
              let handleUpdate = () => w({});
              return (
                document.addEventListener(c, handleUpdate),
                () => document.removeEventListener(c, handleUpdate)
              );
            }, []),
            (0, a.jsx)(u.div, {
              ...m,
              ref: x,
              style: {
                pointerEvents: R ? (T ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: composeEventHandlers(
                e.onFocusCapture,
                A.onFocusCapture
              ),
              onBlurCapture: composeEventHandlers(
                e.onBlurCapture,
                A.onBlurCapture
              ),
              onPointerDownCapture: composeEventHandlers(
                e.onPointerDownCapture,
                S.onPointerDownCapture
              ),
            })
          );
        });
      function dispatchUpdate() {
        let e = new CustomEvent(c);
        document.dispatchEvent(e);
      }
      function handleAndDispatchCustomEvent(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && o.addEventListener(e, t, { once: !0 }), r)
          ? o && l.flushSync(() => o.dispatchEvent(i))
          : o.dispatchEvent(i);
      }
      (f.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(d),
            r = o.useRef(null),
            i = useComposedRefs(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, a.jsx)(u.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch");
      var p = globalThis?.document ? o.useLayoutEffect : () => {},
        m = i[" useId ".trim().toString()] || (() => void 0),
        h = 0,
        v = n(63166),
        y = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function deepEqual(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!deepEqual(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !deepEqual(e[n], t[n]))
              return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function getDPR(e) {
        if ("undefined" == typeof window) return 1;
        let t = e.ownerDocument.defaultView || window;
        return t.devicePixelRatio || 1;
      }
      function roundByDPR(e, t) {
        let n = getDPR(e);
        return Math.round(t * n) / n;
      }
      function useLatestRef(e) {
        let t = o.useRef(e);
        return (
          y(() => {
            t.current = e;
          }),
          t
        );
      }
      let arrow$1 = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? (0, v.x7)({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? (0, v.x7)({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        offset = (e, t) => ({ ...(0, v.cv)(e), options: [e, t] }),
        shift = (e, t) => ({ ...(0, v.uY)(e), options: [e, t] }),
        limitShift = (e, t) => ({ ...(0, v.dr)(e), options: [e, t] }),
        flip = (e, t) => ({ ...(0, v.RR)(e), options: [e, t] }),
        size = (e, t) => ({ ...(0, v.dp)(e), options: [e, t] }),
        hide = (e, t) => ({ ...(0, v.Cp)(e), options: [e, t] }),
        floating_ui_react_dom_arrow = (e, t) => ({
          ...arrow$1(e),
          options: [e, t],
        });
      var g = o.forwardRef((e, t) => {
        let { children: n, width: r = 10, height: o = 5, ...i } = e;
        return (0, a.jsx)(u.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild
            ? n
            : (0, a.jsx)("polygon", { points: "0,0 30,0 15,10" }),
        });
      });
      g.displayName = "Arrow";
      var w = "Popper",
        [x, b] = createContextScope(w),
        [E, C] = x(w),
        Popper = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, i] = o.useState(null);
          return (0, a.jsx)(E, {
            scope: t,
            anchor: r,
            onAnchorChange: i,
            children: n,
          });
        };
      Popper.displayName = w;
      var P = "PopperAnchor",
        R = o.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...i } = e,
            l = C(P, n),
            s = o.useRef(null),
            c = useComposedRefs(t, s);
          return (
            o.useEffect(() => {
              l.onAnchorChange(r?.current || s.current);
            }),
            r ? null : (0, a.jsx)(u.div, { ...i, ref: c })
          );
        });
      R.displayName = P;
      var T = "PopperContent",
        [S, A] = x(T),
        N = o.forwardRef((e, t) => {
          let {
              __scopePopper: n,
              side: r = "bottom",
              sideOffset: i = 0,
              align: s = "center",
              alignOffset: c = 0,
              arrowPadding: d = 0,
              avoidCollisions: f = !0,
              collisionBoundary: m = [],
              collisionPadding: h = 0,
              sticky: g = "partial",
              hideWhenDetached: w = !1,
              updatePositionStrategy: x = "optimized",
              onPlaced: b,
              ...E
            } = e,
            P = C(T, n),
            [R, A] = o.useState(null),
            N = useComposedRefs(t, (e) => A(e)),
            [O, D] = o.useState(null),
            L = (function (e) {
              let [t, n] = o.useState(void 0);
              return (
                p(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(O),
            j = L?.width ?? 0,
            k = L?.height ?? 0,
            _ =
              "number" == typeof h
                ? h
                : { top: 0, right: 0, bottom: 0, left: 0, ...h },
            M = Array.isArray(m) ? m : [m],
            $ = M.length > 0,
            I = { padding: _, boundary: M.filter(isNotNull), altBoundary: $ },
            {
              refs: F,
              floatingStyles: H,
              placement: W,
              isPositioned: z,
              middlewareData: B,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: i,
                  elements: { reference: a, floating: s } = {},
                  transform: u = !0,
                  whileElementsMounted: c,
                  open: d,
                } = e,
                [f, p] = o.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [m, h] = o.useState(r);
              deepEqual(m, r) || h(r);
              let [g, w] = o.useState(null),
                [x, b] = o.useState(null),
                E = o.useCallback((e) => {
                  e !== T.current && ((T.current = e), w(e));
                }, []),
                C = o.useCallback((e) => {
                  e !== S.current && ((S.current = e), b(e));
                }, []),
                P = a || g,
                R = s || x,
                T = o.useRef(null),
                S = o.useRef(null),
                A = o.useRef(f),
                N = null != c,
                O = useLatestRef(c),
                D = useLatestRef(i),
                L = useLatestRef(d),
                j = o.useCallback(() => {
                  if (!T.current || !S.current) return;
                  let e = { placement: t, strategy: n, middleware: m };
                  D.current && (e.platform = D.current),
                    (0, v.oo)(T.current, S.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== L.current };
                      k.current &&
                        !deepEqual(A.current, t) &&
                        ((A.current = t),
                        l.flushSync(() => {
                          p(t);
                        }));
                    });
                }, [m, t, n, D, L]);
              y(() => {
                !1 === d &&
                  A.current.isPositioned &&
                  ((A.current.isPositioned = !1),
                  p((e) => ({ ...e, isPositioned: !1 })));
              }, [d]);
              let k = o.useRef(!1);
              y(
                () => (
                  (k.current = !0),
                  () => {
                    k.current = !1;
                  }
                ),
                []
              ),
                y(() => {
                  if ((P && (T.current = P), R && (S.current = R), P && R)) {
                    if (O.current) return O.current(P, R, j);
                    j();
                  }
                }, [P, R, j, O, N]);
              let _ = o.useMemo(
                  () => ({
                    reference: T,
                    floating: S,
                    setReference: E,
                    setFloating: C,
                  }),
                  [E, C]
                ),
                M = o.useMemo(() => ({ reference: P, floating: R }), [P, R]),
                $ = o.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!M.floating) return e;
                  let t = roundByDPR(M.floating, f.x),
                    r = roundByDPR(M.floating, f.y);
                  return u
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(getDPR(M.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, u, M.floating, f.x, f.y]);
              return o.useMemo(
                () => ({
                  ...f,
                  update: j,
                  refs: _,
                  elements: M,
                  floatingStyles: $,
                }),
                [f, j, _, M, $]
              );
            })({
              strategy: "fixed",
              placement: r + ("center" !== s ? "-" + s : ""),
              whileElementsMounted: (...e) => {
                let t = (0, v.Me)(...e, { animationFrame: "always" === x });
                return t;
              },
              elements: { reference: P.anchor },
              middleware: [
                offset({ mainAxis: i + k, alignmentAxis: c }),
                f &&
                  shift({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === g ? limitShift() : void 0,
                    ...I,
                  }),
                f && flip({ ...I }),
                size({
                  ...I,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    let { width: o, height: i } = t.reference,
                      a = e.floating.style;
                    a.setProperty("--radix-popper-available-width", `${n}px`),
                      a.setProperty(
                        "--radix-popper-available-height",
                        `${r}px`
                      ),
                      a.setProperty("--radix-popper-anchor-width", `${o}px`),
                      a.setProperty("--radix-popper-anchor-height", `${i}px`);
                  },
                }),
                O && floating_ui_react_dom_arrow({ element: O, padding: d }),
                transformOrigin({ arrowWidth: j, arrowHeight: k }),
                w && hide({ strategy: "referenceHidden", ...I }),
              ],
            }),
            [U, Y] = getSideAndAlignFromPlacement(W),
            V = useCallbackRef(b);
          p(() => {
            z && V?.();
          }, [z, V]);
          let X = B.arrow?.x,
            q = B.arrow?.y,
            G = B.arrow?.centerOffset !== 0,
            [K, Z] = o.useState();
          return (
            p(() => {
              R && Z(window.getComputedStyle(R).zIndex);
            }, [R]),
            (0, a.jsx)("div", {
              ref: F.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...H,
                transform: z ? H.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: K,
                "--radix-popper-transform-origin": [
                  B.transformOrigin?.x,
                  B.transformOrigin?.y,
                ].join(" "),
                ...(B.hide?.referenceHidden && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, a.jsx)(S, {
                scope: n,
                placedSide: U,
                onArrowChange: D,
                arrowX: X,
                arrowY: q,
                shouldHideArrow: G,
                children: (0, a.jsx)(u.div, {
                  "data-side": U,
                  "data-align": Y,
                  ...E,
                  ref: N,
                  style: { ...E.style, animation: z ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      N.displayName = T;
      var O = "PopperArrow",
        D = { top: "bottom", right: "left", bottom: "top", left: "right" },
        L = o.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = A(O, n),
            i = D[o.placedSide];
          return (0,
          a.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, a.jsx)(g, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function isNotNull(e) {
        return null !== e;
      }
      L.displayName = O;
      var transformOrigin = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          let { placement: n, rects: r, middlewareData: o } = t,
            i = o.arrow?.centerOffset !== 0,
            a = i ? 0 : e.arrowWidth,
            l = i ? 0 : e.arrowHeight,
            [s, u] = getSideAndAlignFromPlacement(n),
            c = { start: "0%", center: "50%", end: "100%" }[u],
            d = (o.arrow?.x ?? 0) + a / 2,
            f = (o.arrow?.y ?? 0) + l / 2,
            p = "",
            m = "";
          return (
            "bottom" === s
              ? ((p = i ? c : `${d}px`), (m = `${-l}px`))
              : "top" === s
              ? ((p = i ? c : `${d}px`), (m = `${r.floating.height + l}px`))
              : "right" === s
              ? ((p = `${-l}px`), (m = i ? c : `${f}px`))
              : "left" === s &&
                ((p = `${r.floating.width + l}px`), (m = i ? c : `${f}px`)),
            { data: { x: p, y: m } }
          );
        },
      });
      function getSideAndAlignFromPlacement(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var j = o.forwardRef((e, t) => {
        let { container: n, ...r } = e,
          [i, s] = o.useState(!1);
        p(() => s(!0), []);
        let c = n || (i && globalThis?.document?.body);
        return c
          ? l.createPortal((0, a.jsx)(u.div, { ...r, ref: t }), c)
          : null;
      });
      j.displayName = "Portal";
      var Presence = (e) => {
        let t, n;
        let { present: r, children: i } = e,
          a = (function (e) {
            var t;
            let [n, r] = o.useState(),
              i = o.useRef(null),
              a = o.useRef(e),
              l = o.useRef("none"),
              s = e ? "mounted" : "unmounted",
              [u, c] =
                ((t = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                o.useReducer((e, n) => {
                  let r = t[e][n];
                  return r ?? e;
                }, s));
            return (
              o.useEffect(() => {
                let e = getAnimationName(i.current);
                l.current = "mounted" === u ? e : "none";
              }, [u]),
              p(() => {
                let t = i.current,
                  n = a.current,
                  r = n !== e;
                if (r) {
                  let r = l.current,
                    o = getAnimationName(t);
                  e
                    ? c("MOUNT")
                    : "none" === o || t?.display === "none"
                    ? c("UNMOUNT")
                    : n && r !== o
                    ? c("ANIMATION_OUT")
                    : c("UNMOUNT"),
                    (a.current = e);
                }
              }, [e, c]),
              p(() => {
                if (n) {
                  let e;
                  let t = n.ownerDocument.defaultView ?? window,
                    handleAnimationEnd = (r) => {
                      let o = getAnimationName(i.current),
                        l = o.includes(r.animationName);
                      if (
                        r.target === n &&
                        l &&
                        (c("ANIMATION_END"), !a.current)
                      ) {
                        let r = n.style.animationFillMode;
                        (n.style.animationFillMode = "forwards"),
                          (e = t.setTimeout(() => {
                            "forwards" === n.style.animationFillMode &&
                              (n.style.animationFillMode = r);
                          }));
                      }
                    },
                    handleAnimationStart = (e) => {
                      e.target === n &&
                        (l.current = getAnimationName(i.current));
                    };
                  return (
                    n.addEventListener("animationstart", handleAnimationStart),
                    n.addEventListener("animationcancel", handleAnimationEnd),
                    n.addEventListener("animationend", handleAnimationEnd),
                    () => {
                      t.clearTimeout(e),
                        n.removeEventListener(
                          "animationstart",
                          handleAnimationStart
                        ),
                        n.removeEventListener(
                          "animationcancel",
                          handleAnimationEnd
                        ),
                        n.removeEventListener(
                          "animationend",
                          handleAnimationEnd
                        );
                    }
                  );
                }
                c("ANIMATION_END");
              }, [n, c]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(u),
                ref: o.useCallback((e) => {
                  (i.current = e ? getComputedStyle(e) : null), r(e);
                }, []),
              }
            );
          })(r),
          l =
            "function" == typeof i
              ? i({ present: a.isPresent })
              : o.Children.only(i),
          s = useComposedRefs(
            a.ref,
            (t = Object.getOwnPropertyDescriptor(l.props, "ref")?.get) &&
              "isReactWarning" in t &&
              t.isReactWarning
              ? l.ref
              : (t = Object.getOwnPropertyDescriptor(l, "ref")?.get) &&
                "isReactWarning" in t &&
                t.isReactWarning
              ? l.props.ref
              : l.props.ref || l.ref
          ),
          u = "function" == typeof i;
        return u || a.isPresent ? o.cloneElement(l, { ref: s }) : null;
      };
      function getAnimationName(e) {
        return e?.animationName || "none";
      }
      Presence.displayName = "Presence";
      var k = i[" useInsertionEffect ".trim().toString()] || p;
      Symbol("RADIX:SYNC_STATE");
      var _ = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
        }),
        M = o.forwardRef((e, t) =>
          (0, a.jsx)(u.span, { ...e, ref: t, style: { ..._, ...e.style } })
        );
      M.displayName = "VisuallyHidden";
      var [$, I] = createContextScope("Tooltip", [b]),
        F = b(),
        H = "TooltipProvider",
        W = "tooltip.open",
        [z, B] = $(H),
        TooltipProvider = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: n = 700,
              skipDelayDuration: r = 300,
              disableHoverableContent: i = !1,
              children: l,
            } = e,
            s = o.useRef(!0),
            u = o.useRef(!1),
            c = o.useRef(0);
          return (
            o.useEffect(() => {
              let e = c.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, a.jsx)(z, {
              scope: t,
              isOpenDelayedRef: s,
              delayDuration: n,
              onOpen: o.useCallback(() => {
                window.clearTimeout(c.current), (s.current = !1);
              }, []),
              onClose: o.useCallback(() => {
                window.clearTimeout(c.current),
                  (c.current = window.setTimeout(() => (s.current = !0), r));
              }, [r]),
              isPointerInTransitRef: u,
              onPointerInTransitChange: o.useCallback((e) => {
                u.current = e;
              }, []),
              disableHoverableContent: i,
              children: l,
            })
          );
        };
      TooltipProvider.displayName = H;
      var U = "Tooltip",
        [Y, V] = $(U),
        Tooltip = (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: r,
              defaultOpen: i,
              onOpenChange: l,
              disableHoverableContent: s,
              delayDuration: u,
            } = e,
            c = B(U, e.__scopeTooltip),
            d = F(t),
            [f, v] = o.useState(null),
            y = (function (e) {
              let [t, n] = o.useState(m());
              return (
                p(() => {
                  e || n((e) => e ?? String(h++));
                }, [e]),
                e || (t ? `radix-${t}` : "")
              );
            })(),
            g = o.useRef(0),
            w = s ?? c.disableHoverableContent,
            x = u ?? c.delayDuration,
            b = o.useRef(!1),
            [E, C] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {},
              caller: r,
            }) {
              let [i, a, l] = (function ({ defaultProp: e, onChange: t }) {
                  let [n, r] = o.useState(e),
                    i = o.useRef(n),
                    a = o.useRef(t);
                  return (
                    k(() => {
                      a.current = t;
                    }, [t]),
                    o.useEffect(() => {
                      i.current !== n && (a.current?.(n), (i.current = n));
                    }, [n, i]),
                    [n, r, a]
                  );
                })({ defaultProp: t, onChange: n }),
                s = void 0 !== e,
                u = s ? e : i;
              {
                let t = o.useRef(void 0 !== e);
                o.useEffect(() => {
                  let e = t.current;
                  if (e !== s) {
                    let t = s ? "controlled" : "uncontrolled";
                    console.warn(
                      `${r} is changing from ${
                        e ? "controlled" : "uncontrolled"
                      } to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
                    );
                  }
                  t.current = s;
                }, [s, r]);
              }
              let c = o.useCallback(
                (t) => {
                  if (s) {
                    let n = "function" == typeof t ? t(e) : t;
                    n !== e && l.current?.(n);
                  } else a(t);
                },
                [s, e, a, l]
              );
              return [u, c];
            })({
              prop: r,
              defaultProp: i ?? !1,
              onChange: (e) => {
                e
                  ? (c.onOpen(), document.dispatchEvent(new CustomEvent(W)))
                  : c.onClose(),
                  l?.(e);
              },
              caller: U,
            }),
            P = o.useMemo(
              () =>
                E ? (b.current ? "delayed-open" : "instant-open") : "closed",
              [E]
            ),
            R = o.useCallback(() => {
              window.clearTimeout(g.current),
                (g.current = 0),
                (b.current = !1),
                C(!0);
            }, [C]),
            T = o.useCallback(() => {
              window.clearTimeout(g.current), (g.current = 0), C(!1);
            }, [C]),
            S = o.useCallback(() => {
              window.clearTimeout(g.current),
                (g.current = window.setTimeout(() => {
                  (b.current = !0), C(!0), (g.current = 0);
                }, x));
            }, [x, C]);
          return (
            o.useEffect(
              () => () => {
                g.current && (window.clearTimeout(g.current), (g.current = 0));
              },
              []
            ),
            (0, a.jsx)(Popper, {
              ...d,
              children: (0, a.jsx)(Y, {
                scope: t,
                contentId: y,
                open: E,
                stateAttribute: P,
                trigger: f,
                onTriggerChange: v,
                onTriggerEnter: o.useCallback(() => {
                  c.isOpenDelayedRef.current ? S() : R();
                }, [c.isOpenDelayedRef, S, R]),
                onTriggerLeave: o.useCallback(() => {
                  w ? T() : (window.clearTimeout(g.current), (g.current = 0));
                }, [T, w]),
                onOpen: R,
                onClose: T,
                disableHoverableContent: w,
                children: n,
              }),
            })
          );
        };
      Tooltip.displayName = U;
      var X = "TooltipTrigger",
        q = o.forwardRef((e, t) => {
          let { __scopeTooltip: n, ...r } = e,
            i = V(X, n),
            l = B(X, n),
            s = F(n),
            c = o.useRef(null),
            d = useComposedRefs(t, c, i.onTriggerChange),
            f = o.useRef(!1),
            p = o.useRef(!1),
            m = o.useCallback(() => (f.current = !1), []);
          return (
            o.useEffect(
              () => () => document.removeEventListener("pointerup", m),
              [m]
            ),
            (0, a.jsx)(R, {
              asChild: !0,
              ...s,
              children: (0, a.jsx)(u.button, {
                "aria-describedby": i.open ? i.contentId : void 0,
                "data-state": i.stateAttribute,
                ...r,
                ref: d,
                onPointerMove: composeEventHandlers(e.onPointerMove, (e) => {
                  "touch" === e.pointerType ||
                    p.current ||
                    l.isPointerInTransitRef.current ||
                    (i.onTriggerEnter(), (p.current = !0));
                }),
                onPointerLeave: composeEventHandlers(e.onPointerLeave, () => {
                  i.onTriggerLeave(), (p.current = !1);
                }),
                onPointerDown: composeEventHandlers(e.onPointerDown, () => {
                  i.open && i.onClose(),
                    (f.current = !0),
                    document.addEventListener("pointerup", m, { once: !0 });
                }),
                onFocus: composeEventHandlers(e.onFocus, () => {
                  f.current || i.onOpen();
                }),
                onBlur: composeEventHandlers(e.onBlur, i.onClose),
                onClick: composeEventHandlers(e.onClick, i.onClose),
              }),
            })
          );
        });
      q.displayName = X;
      var G = "TooltipPortal",
        [K, Z] = $(G, { forceMount: void 0 }),
        TooltipPortal = (e) => {
          let {
              __scopeTooltip: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            i = V(G, t);
          return (0, a.jsx)(K, {
            scope: t,
            forceMount: n,
            children: (0, a.jsx)(Presence, {
              present: n || i.open,
              children: (0, a.jsx)(j, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      TooltipPortal.displayName = G;
      var J = "TooltipContent",
        Q = o.forwardRef((e, t) => {
          let n = Z(J, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
            l = V(J, e.__scopeTooltip);
          return (0, a.jsx)(Presence, {
            present: r || l.open,
            children: l.disableHoverableContent
              ? (0, a.jsx)(eo, { side: o, ...i, ref: t })
              : (0, a.jsx)(ee, { side: o, ...i, ref: t }),
          });
        }),
        ee = o.forwardRef((e, t) => {
          let n = V(J, e.__scopeTooltip),
            r = B(J, e.__scopeTooltip),
            i = o.useRef(null),
            l = useComposedRefs(t, i),
            [s, u] = o.useState(null),
            { trigger: c, onClose: d } = n,
            f = i.current,
            { onPointerInTransitChange: p } = r,
            m = o.useCallback(() => {
              u(null), p(!1);
            }, [p]),
            h = o.useCallback(
              (e, t) => {
                let n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let n = Math.abs(t.top - e.y),
                      r = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      i = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, o, i)) {
                      case i:
                        return "left";
                      case o:
                        return "right";
                      case n:
                        return "top";
                      case r:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(r, n.getBoundingClientRect()),
                  i = (function (e, t, n = 5) {
                    let r = [];
                    switch (t) {
                      case "top":
                        r.push(
                          { x: e.x - n, y: e.y + n },
                          { x: e.x + n, y: e.y + n }
                        );
                        break;
                      case "bottom":
                        r.push(
                          { x: e.x - n, y: e.y - n },
                          { x: e.x + n, y: e.y - n }
                        );
                        break;
                      case "left":
                        r.push(
                          { x: e.x + n, y: e.y - n },
                          { x: e.x + n, y: e.y + n }
                        );
                        break;
                      case "right":
                        r.push(
                          { x: e.x - n, y: e.y - n },
                          { x: e.x - n, y: e.y + n }
                        );
                    }
                    return r;
                  })(r, o),
                  a = (function (e) {
                    let { top: t, right: n, bottom: r, left: o } = e;
                    return [
                      { x: o, y: t },
                      { x: n, y: t },
                      { x: n, y: r },
                      { x: o, y: r },
                    ];
                  })(t.getBoundingClientRect()),
                  l = (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                          ? 1
                          : e.y < t.y
                          ? -1
                          : e.y > t.y
                          ? 1
                          : 0
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                          let r = e[n];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              n = t[t.length - 2];
                            if (
                              (e.x - n.x) * (r.y - n.y) >=
                              (e.y - n.y) * (r.x - n.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(r);
                        }
                        t.pop();
                        let n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let r = e[t];
                          for (; n.length >= 2; ) {
                            let e = n[n.length - 1],
                              t = n[n.length - 2];
                            if (
                              (e.x - t.x) * (r.y - t.y) >=
                              (e.y - t.y) * (r.x - t.x)
                            )
                              n.pop();
                            else break;
                          }
                          n.push(r);
                        }
                        return (n.pop(),
                        1 === t.length &&
                          1 === n.length &&
                          t[0].x === n[0].x &&
                          t[0].y === n[0].y)
                          ? t
                          : t.concat(n);
                      })(t)
                    );
                  })([...i, ...a]);
                u(l), p(!0);
              },
              [p]
            );
          return (
            o.useEffect(() => () => m(), [m]),
            o.useEffect(() => {
              if (c && f) {
                let handleTriggerLeave = (e) => h(e, f),
                  handleContentLeave = (e) => h(e, c);
                return (
                  c.addEventListener("pointerleave", handleTriggerLeave),
                  f.addEventListener("pointerleave", handleContentLeave),
                  () => {
                    c.removeEventListener("pointerleave", handleTriggerLeave),
                      f.removeEventListener("pointerleave", handleContentLeave);
                  }
                );
              }
            }, [c, f, h, m]),
            o.useEffect(() => {
              if (s) {
                let handleTrackPointerGrace = (e) => {
                  let t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r = c?.contains(t) || f?.contains(t),
                    o = !(function (e, t) {
                      let { x: n, y: r } = e,
                        o = !1;
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        let a = t[e],
                          l = t[i],
                          s = a.x,
                          u = a.y,
                          c = l.x,
                          d = l.y,
                          f =
                            u > r != d > r &&
                            n < ((c - s) * (r - u)) / (d - u) + s;
                        f && (o = !o);
                      }
                      return o;
                    })(n, s);
                  r ? m() : o && (m(), d());
                };
                return (
                  document.addEventListener(
                    "pointermove",
                    handleTrackPointerGrace
                  ),
                  () =>
                    document.removeEventListener(
                      "pointermove",
                      handleTrackPointerGrace
                    )
                );
              }
            }, [c, f, s, d, m]),
            (0, a.jsx)(eo, { ...e, ref: l })
          );
        }),
        [et, en] = $(U, { isInside: !1 }),
        er = (function (e) {
          let Slottable2 = ({ children: e }) =>
            (0, a.jsx)(a.Fragment, { children: e });
          return (
            (Slottable2.displayName = `${e}.Slottable`),
            (Slottable2.__radixId = s),
            Slottable2
          );
        })("TooltipContent"),
        eo = o.forwardRef((e, t) => {
          let {
              __scopeTooltip: n,
              children: r,
              "aria-label": i,
              onEscapeKeyDown: l,
              onPointerDownOutside: s,
              ...u
            } = e,
            c = V(J, n),
            d = F(n),
            { onClose: p } = c;
          return (
            o.useEffect(
              () => (
                document.addEventListener(W, p),
                () => document.removeEventListener(W, p)
              ),
              [p]
            ),
            o.useEffect(() => {
              if (c.trigger) {
                let handleScroll = (e) => {
                  let t = e.target;
                  t?.contains(c.trigger) && p();
                };
                return (
                  window.addEventListener("scroll", handleScroll, {
                    capture: !0,
                  }),
                  () =>
                    window.removeEventListener("scroll", handleScroll, {
                      capture: !0,
                    })
                );
              }
            }, [c.trigger, p]),
            (0, a.jsx)(f, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: l,
              onPointerDownOutside: s,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: p,
              children: (0, a.jsxs)(N, {
                "data-state": c.stateAttribute,
                ...d,
                ...u,
                ref: t,
                style: {
                  ...u.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
                children: [
                  (0, a.jsx)(er, { children: r }),
                  (0, a.jsx)(et, {
                    scope: n,
                    isInside: !0,
                    children: (0, a.jsx)(M, {
                      id: c.contentId,
                      role: "tooltip",
                      children: i || r,
                    }),
                  }),
                ],
              }),
            })
          );
        });
      Q.displayName = J;
      var ei = "TooltipArrow";
      o.forwardRef((e, t) => {
        let { __scopeTooltip: n, ...r } = e,
          o = F(n),
          i = en(ei, n);
        return i.isInside ? null : (0, a.jsx)(L, { ...o, ...r, ref: t });
      }).displayName = ei;
      var ea = TooltipProvider,
        el = Tooltip,
        es = q,
        eu = TooltipPortal,
        ec = Q;
    },
  },
]);
