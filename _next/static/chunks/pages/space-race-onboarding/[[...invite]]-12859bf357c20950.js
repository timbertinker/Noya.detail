(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9152],
  {
    67126: function (e, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/space-race-onboarding/[[...invite]]",
        function () {
          return t(86603);
        },
      ]);
    },
    87027: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          noSSR: function () {
            return noSSR;
          },
          default: function () {
            return dynamic;
          },
        });
      let i = t(81351),
        a = (t(50959), i._(t(43295)));
      function convertModule(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function noSSR(e, r) {
        return delete r.webpack, delete r.modules, e(r);
      }
      function dynamic(e, r) {
        let t = a.default,
          i = {
            loading: (e) => {
              let { error: r, isLoading: t, pastDelay: i } = e;
              return null;
            },
          };
        e instanceof Promise
          ? (i.loader = () => e)
          : "function" == typeof e
          ? (i.loader = e)
          : "object" == typeof e && (i = { ...i, ...e }),
          (i = { ...i, ...r });
        let n = i.loader;
        return (i.loadableGenerated &&
          ((i = { ...i, ...i.loadableGenerated }), delete i.loadableGenerated),
        "boolean" != typeof i.ssr || i.ssr)
          ? t({
              ...i,
              loader: () =>
                null != n
                  ? n().then(convertModule)
                  : Promise.resolve(convertModule(() => null)),
            })
          : (delete i.webpack, delete i.modules, noSSR(t, i));
      }
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    1386: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let i = t(81351),
        a = i._(t(50959)),
        n = a.default.createContext(null);
    },
    43295: function (e, r, t) {
      "use strict";
      /**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let i = t(81351),
        a = i._(t(50959)),
        n = t(1386),
        o = [],
        s = [],
        x = !1;
      function load(e) {
        let r = e(),
          t = { loading: !0, loaded: null, error: null };
        return (
          (t.promise = r
            .then((e) => ((t.loading = !1), (t.loaded = e), e))
            .catch((e) => {
              throw ((t.loading = !1), (t.error = e), e);
            })),
          t
        );
      }
      let LoadableSubscription = class LoadableSubscription {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: r } = this;
          e.loading &&
            ("number" == typeof r.delay &&
              (0 === r.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, r.delay))),
            "number" == typeof r.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, r.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((e) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(e) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...e,
          }),
            this._callbacks.forEach((e) => e());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, r) {
          (this._loadFn = e),
            (this._opts = r),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      };
      function Loadable(e) {
        return (function (e, r) {
          let t = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              r
            ),
            i = null;
          function init() {
            if (!i) {
              let r = new LoadableSubscription(e, t);
              i = {
                getCurrentValue: r.getCurrentValue.bind(r),
                subscribe: r.subscribe.bind(r),
                retry: r.retry.bind(r),
                promise: r.promise.bind(r),
              };
            }
            return i.promise();
          }
          if (!x) {
            let e = t.webpack ? t.webpack() : t.modules;
            e &&
              s.push((r) => {
                for (let t of e) if (r.includes(t)) return init();
              });
          }
          function LoadableComponent(e, r) {
            !(function () {
              init();
              let e = a.default.useContext(n.LoadableContext);
              e &&
                Array.isArray(t.modules) &&
                t.modules.forEach((r) => {
                  e(r);
                });
            })();
            let o = a.default.useSyncExternalStore(
              i.subscribe,
              i.getCurrentValue,
              i.getCurrentValue
            );
            return (
              a.default.useImperativeHandle(r, () => ({ retry: i.retry }), []),
              a.default.useMemo(() => {
                var r;
                return o.loading || o.error
                  ? a.default.createElement(t.loading, {
                      isLoading: o.loading,
                      pastDelay: o.pastDelay,
                      timedOut: o.timedOut,
                      error: o.error,
                      retry: i.retry,
                    })
                  : o.loaded
                  ? a.default.createElement(
                      (r = o.loaded) && r.default ? r.default : r,
                      e
                    )
                  : null;
              }, [e, o])
            );
          }
          return (
            (LoadableComponent.preload = () => init()),
            (LoadableComponent.displayName = "LoadableComponent"),
            a.default.forwardRef(LoadableComponent)
          );
        })(load, e);
      }
      function flushInitializers(e, r) {
        let t = [];
        for (; e.length; ) {
          let i = e.pop();
          t.push(i(r));
        }
        return Promise.all(t).then(() => {
          if (e.length) return flushInitializers(e, r);
        });
      }
      (Loadable.preloadAll = () =>
        new Promise((e, r) => {
          flushInitializers(o).then(e, r);
        })),
        (Loadable.preloadReady = (e) => (
          void 0 === e && (e = []),
          new Promise((r) => {
            let res = () => ((x = !0), r());
            flushInitializers(s, e).then(res, res);
          })
        )),
        (window.__NEXT_PRELOADREADY = Loadable.preloadReady);
      let l = Loadable;
    },
    48411: function (e, r, t) {
      "use strict";
      var i = t(11527);
      t(50959);
      var a = t(59581),
        n = t.n(a),
        o = t(15881),
        s = t(88562),
        x = t.n(s);
      r.Z = (e) => {
        let {
          title: r,
          description: t,
          headerImage: a,
          showHeader: s = !0,
          customButton: l,
          noButton: c,
          className: d,
          firstTextClassName: u,
          secondTextClassName: m,
          contentBoxClassName: k,
          reducedHeight: p = !1,
          button: h = {
            text: "Explore Vaults",
            icon: "/vault.svg",
            onClick: () => {},
            color: "color_1",
            border: "gradient",
          },
          secondButton: f,
        } = e;
        return (0, i.jsxs)("div", {
          className: ""
            .concat(x().D_Banner_Container, " ")
            .concat(p ? x().D_Banner_Container_Reduced : "", " ")
            .concat(d),
          children: [
            s && (0, i.jsx)(o.Z, {}),
            (0, i.jsxs)("div", {
              className: ""
                .concat(x().D_Banner_Content_Box, " ")
                .concat(k, " animate-fadeinFast"),
              children: [
                a &&
                  (0, i.jsx)(n(), {
                    src: "/".concat(a),
                    alt: "horse",
                    width: 50,
                    height: 50,
                  }),
                "string" == typeof r
                  ? (0, i.jsx)("h1", {
                      className: "gradient-text "
                        .concat(u, " ")
                        .concat(x().D_Banner_Content_Title),
                      children: r,
                    })
                  : r,
                (0, i.jsx)("p", {
                  className: "!leading-6 "
                    .concat(m, " ")
                    .concat(x().D_Banner_Content_Description),
                  children: t,
                }),
                !c &&
                  (l ||
                    (0, i.jsxs)("div", {
                      className:
                        "w-full flex flex-col sm:flex-row items-center justify-center gap-4",
                      children: [
                        (0, i.jsx)("div", {
                          className: "".concat(
                            "solid" == h.border
                              ? "border border-solid border-[#ffffff47] rounded-xl mt-6 hover-opacity"
                              : x().D_Banner_Content_Action_button_wrapper
                          ),
                          children: (0, i.jsxs)("button", {
                            className: ""
                              .concat(x().D_Banner_Content_Action_button, " ")
                              .concat(x()[h.color || "color_1"], " ")
                              .concat("solid" == h.border && "py-6", " px-4"),
                            onClick: h.onClick || (() => {}),
                            children: [
                              (0, i.jsx)(n(), {
                                src: h.icon || "/vault.svg",
                                alt: "vault",
                                width: 20,
                                height: 20,
                                style: { marginRight: 15 },
                              }),
                              h.text || "Explore Vaults",
                            ],
                          }),
                        }),
                        f &&
                          (0, i.jsx)("a", {
                            target: "_blank",
                            href: f.link,
                            className: "".concat(
                              "solid" == f.border
                                ? "border border-solid border-[#ffffff47] rounded-xl mt-6 hover-opacity"
                                : x().D_Banner_Content_Action_button_wrapper
                            ),
                            children: (0, i.jsxs)("button", {
                              className: ""
                                .concat(x().D_Banner_Content_Action_button, " ")
                                .concat(x()[f.color || "color_1"], " ")
                                .concat("solid" == f.border && "py-6", " px-4"),
                              children: [
                                (0, i.jsx)(n(), {
                                  src: f.icon || "/vault.svg",
                                  alt: "vault",
                                  width: 20,
                                  height: 20,
                                  style: { marginRight: 15 },
                                }),
                                f.text || "Explore Vaults",
                              ],
                            }),
                          }),
                      ],
                    })),
              ],
            }),
          ],
        });
      };
    },
    34466: function (e, r, t) {
      "use strict";
      var i = t(11527),
        a = t(28254),
        n = t(50959);
      r.Z = (e) => {
        let {
            src: r,
            style: t = {},
            loop: o,
            mute: s,
            playWithIntersection: x,
            className: l,
          } = e,
          c = (0, n.useRef)(null),
          d = (0, a.C)((e) => e.PortfolioReducer.OperationSystem);
        return (
          (0, n.useEffect)(() => {
            void 0 !== x
              ? !0 === x && c.current && c.current.play()
              : c.current && c.current.play();
          }, [x]),
          (0, i.jsx)("video", {
            playsInline: !0,
            className: l,
            muted: void 0 === s,
            ref: c,
            style: { width: "100%", height: "100%", ...t },
            loop: void 0 === o || !0 === o,
            children: (0, i.jsx)("source", {
              src: r,
              type: "Android" === d ? "video/webm" : "video/mp4",
            }),
          })
        );
      };
    },
    94564: function (e, r, t) {
      "use strict";
      var i = t(11527);
      t(50959),
        (r.Z = function (e) {
          let { children: r } = e;
          return (0, i.jsxs)("div", {
            className:
              "w-full min-h-screen relative bg-black pb-8 flex items-center justify-between flex-col",
            children: [
              (0, i.jsx)("div", {
                className:
                  "h-full w-full absolute top-0 left-0 bg-[url('/space-onboarding.png')] bg-cover bg-bottom",
              }),
              r,
              (0, i.jsx)("div", {}),
            ],
          });
        });
    },
    86603: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          default: function () {
            return _invite_;
          },
        });
      var i = t(11527),
        a = t(48411),
        n = t(35529),
        o = t(15881),
        s = t(51869),
        x = t(38603),
        l = t(34466),
        c = t(94564),
        d = t(50959),
        u = t(15215),
        m = t(51157);
      let k = [
        {
          text: "Disclaimer And Terms",
          link: "https://docs.noya.ai/audits-and-risk/disclaimer-and-terms",
        },
        {
          text: "Privacy Policy",
          link: "https://docs.noya.ai/audits-and-risk/privacy-policy",
        },
        {
          text: "Risk And Warning",
          link: "https://docs.noya.ai/audits-and-risk/risk-and-monitoring",
        },
        {
          text: "Space Race",
          link: "https://docs.noya.ai/audits-and-risk/space-race",
        },
        {
          text: "Space Race Disclaimer",
          link: "https://docs.noya.ai/audits-and-risk/space-race-disclaimer",
        },
      ];
      var space_race_onboarding_TermsDialog = function (e) {
          let { onClose: r, open: t, signMessage: a } = e,
            { dialogRef: n, handleClose: o, className: s } = (0, m.Z)(r, t);
          return (0, i.jsx)("div", {
            ref: n,
            onClick: o,
            className: s,
            children: (0, i.jsxs)("div", {
              onClick: (e) => e.stopPropagation(),
              className:
                "w-full max-w-[min(661px,90%)] px-4 mx-auto relative h-[445px] max-h-[80vh] bg-black bg-terms-bg bg-center bg-cover bg-no-repeat rounded-md shadow-2xl shadow-gradient flex flex-col items-center justify-between py-4",
              children: [
                (0, i.jsx)("button", {
                  onClick: o,
                  className:
                    "cursor-pointer absolute top-5 right-5 outline-none border-none bg-transparent",
                  children: (0, i.jsx)(u.Z, { className: "w-4 h-4" }),
                }),
                (0, i.jsx)("p", {
                  className:
                    "font-RussoOne text-[22px] md:text-[24px] lg:text-[28px] font-normal text-center text-white max-w-[480px]",
                  children: "Terms & Conditions",
                }),
                (0, i.jsx)("div", { className: "gradient-border" }),
                (0, i.jsxs)("p", {
                  className:
                    "font-EuclidCircularB text-[12px] md:text-[14px] font-normal  text-center text-[#E2CA4C] max-w-[480px]",
                  children: [
                    "Please",
                    " ",
                    (0, i.jsx)("span", {
                      className:
                        "font-bold font-EuclidCircularB text-[12px] md:text-[14px]",
                      children: "sign",
                    }),
                    " ",
                    "the message before connecting your wallet.",
                  ],
                }),
                (0, i.jsxs)("div", {
                  className:
                    "border-solid border border-[#FFFFFF26] backdrop-blur-md rounded-[5px] px-6 py-4 bg-[#ffffff1a] w-full max-w-[480px]",
                  children: [
                    (0, i.jsxs)("p", {
                      className:
                        "text-[12px] md:text-[14px] font-EuclidCircularB font-light text-[#FFFFFF80]",
                      children: [
                        "By clicking",
                        " ",
                        (0, i.jsx)("span", {
                          className: "font-EuclidCircularB font-bold",
                          children: "“Sign Message”",
                        }),
                        " ",
                        "below, you confirm that you",
                        " ",
                        (0, i.jsx)("span", {
                          className: "font-EuclidCircularB font-bold",
                          children: "read",
                        }),
                        " and agree with the content in these following pages in full:",
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "w-full mt-4 flex flex-col items-start justify-start gap-3",
                      children: k.map((e) =>
                        (0, i.jsxs)(
                          "a",
                          {
                            href: e.link,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "flex items-center justify-start gap-2",
                            children: [
                              (0, i.jsx)("div", {
                                className: "w-1 h-1 rounded-full bg-white",
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-[12px] md:text-[14px] font-EuclidCircularB font-normal text-white hover:text-[#E2CA4C] block transition-colors",
                                children: e.text,
                              }),
                            ],
                          },
                          e.text
                        )
                      ),
                    }),
                  ],
                }),
                (0, i.jsx)("button", {
                  onClick: () => {
                    o(),
                      setTimeout(() => {
                        a();
                      }, 250);
                  },
                  className:
                    "moving-bg font-RussoOne text-[16xp] md:text-[18px] font-normal text-white w-[185px] h-[41px] rounded-[5px]",
                  children: "Sign Message",
                }),
              ],
            }),
          });
        },
        p = t(41038),
        h = t(41873),
        step_1 = function (e) {
          let { loading: r, openConnectModal: t, address: a, goNext: n } = e,
            [o, s] = (0, d.useState)(!1),
            { signMessageAsync: l } = (0, p.Q)();
          return (0, i.jsxs)("div", {
            className: "w-full -mt-10",
            children: [
              (0, i.jsx)(space_race_onboarding_TermsDialog, {
                signMessage: () => {
                  l({
                    message:
                      '\nBy clicking on Sign Message, you have read and agree to comply with following terms, and read and agree with the links included in this message.\n\nhttps://docs.noya.ai/audits-and-risk/privacy-policy\nhttps://docs.noya.ai/audits-and-risk/space-race\nhttps://docs.noya.ai/audits-and-risk/space-race-disclaimer\nhttps://docs.noya.ai/audits-and-risk/risk-and-warning\nhttps://docs.noya.ai/audits-and-risk/disclaimer-and-terms\n\nYou must be of legal age in your jurisdiction to use our services.\n\nCrypto investments carry risks. Understand and acknowledge the risks before participating. Past performance is not indicative of future results.\nInformation on the platform is not financial advice.\nConsult with a financial advisor before making investment decisions.\nWe may update terms. Check for changes regularly. Continued use implies acceptance of modified terms.\nKeep your account secure. Provide accurate information during registration. Report any suspicious activity promptly.\nRespect laws and regulations. No fraudulent, abusive, or illegal activities. Respect our intellectual property rights. Do not reproduce or distribute platform content without permission.\nUnderstand how we collect, use, and disclose your data.\nYour privacy is important to us.\nWe reserve the right to terminate accounts for violations.\nYou can terminate your account at any time.\nUse the platform at your own risk.\nWe provide services "as is" without warranties.\nWe are not liable for indirect, incidental, or consequential damages.\n\nBy participating in this Network, you confirm that you are not a citizen, resident, or entity of the United States, Russia, North Korea, Syria, or any other jurisdiction where participating in this Network would be restricted, illegal, or considered high-risk. This includes, but is not limited to, countries or regions subject to sanctions, restrictions, or identified as high-risk by international bodies or local authorities.\n\nYou also acknowledge that you are not located in, under the control of, or a resident of any country or region subject to sanctions or restrictions imposed by the United Nations, the European Union, or any other applicable international, federal, state, or local laws or regulations. Furthermore, you agree that you have not been included in any trade embargoes, economic sanctions lists, such as the United Nations Security Council Sanctions List, the European Union’s list of sanctioned persons, or any other applicable sanctions authority.\n\nBy proceeding with any transaction or interaction related to this Network, you agree to abide by all relevant laws and regulations applicable to your jurisdiction and accept full responsibility for ensuring that your participation is lawful\n',
                  })
                    .then((e) => {
                      e && n(e);
                    })
                    .catch(() => {
                      (0, h.x)("Invalid signature", "error");
                    });
                },
                open: o,
                onClose: () => s(!1),
              }),
              (0, i.jsx)("div", {
                className:
                  "flex w-full lg:max-w-[500px] lg:mx-auto items-center justify-center lg:justify-start",
                children: (0, i.jsx)("button", {
                  onClick: () => setTimeout(() => s(!0), 50),
                  className:
                    "moving-bg w-[211px] animate-fadeinFast h-[40px] rounded-[5px] border-none outline-none text-white font-normal font-RussoOne text-[14px] block mt-4",
                  children: r
                    ? (0, i.jsx)(x.Z, { className: "w-6 h-6" })
                    : "Sign Message",
                }),
              }),
            ],
          });
        },
        f = t(4432),
        y = t(23874),
        _ = t.n(y),
        b = t(58170),
        v = t.n(b),
        g = t(79096),
        G = JSON.parse(
          '{"v":"4.8.0","meta":{"g":"LottieFiles AE 1.0.0","a":"","k":"","d":"","tc":""},"fr":30,"ip":0,"op":151,"w":2000,"h":2000,"nm":"Vault","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1000,1336,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":124,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":125,"s":[100,95,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":128,"s":[100,102,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":130,"s":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":131,"s":[100,98,100]},{"t":132,"s":[100,100,100]}],"ix":6}},"ao":0,"ip":0,"op":151,"st":0,"bm":0,"completed":true},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 8","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-98.846,-342.144,0],"ix":2},"a":{"a":0,"k":[901.154,993.856,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[295.297,168.041],[290.312,168.041],[281.321,164.01600000000002],[281.321,-158.632],[285.346,-167.623],[290.331,-167.623],[299.322,-163.598],[299.322,159.05]],"o":[[290.331,168.041],[285.346,168.041],[281.321,159.05],[281.321,-163.598],[290.312,-167.623],[295.297,-167.623],[299.322,-158.632],[299.322,164.01600000000002]],"v":[[290.331,168.041],[290.312,168.041],[281.321,159.05],[281.321,-158.632],[290.312,-167.623],[290.331,-167.623],[299.322,-158.632],[299.322,159.05]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-7.203,167.832],[-12.188,167.832],[-21.179,163.80700000000002],[-21.179,-158.841],[-17.154,-167.832],[-12.169,-167.832],[-3.178,-163.80700000000002],[-3.178,158.841]],"o":[[-12.169,167.832],[-17.154,167.832],[-21.179,158.841],[-21.179,-163.80700000000002],[-12.188,-167.832],[-7.203,-167.832],[-3.178,-158.841],[-3.178,163.80700000000002]],"v":[[-12.169,167.832],[-12.188,167.832],[-21.179,158.841],[-21.179,-158.841],[-12.188,-167.832],[-12.169,-167.832],[-3.178,-158.841],[-3.178,158.841]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-7.203,167.832],[-12.188,167.832],[-21.179,163.80700000000002],[-21.179,-158.841],[-17.154,-167.832],[-12.169,-167.832],[-3.178,-163.80700000000002],[-3.178,158.841]],"o":[[-12.169,167.832],[-17.154,167.832],[-21.179,158.841],[-21.179,-163.80700000000002],[-12.188,-167.832],[-7.203,-167.832],[-3.178,-158.841],[-3.178,163.80700000000002]],"v":[[-12.169,167.832],[-12.188,167.832],[-21.179,158.841],[-21.179,-158.841],[-12.188,-167.832],[-12.169,-167.832],[-3.178,-158.841],[-3.178,158.841]],"c":true}]},{"t":125,"s":[{"i":[[295.297,168.041],[290.312,168.041],[281.321,164.01600000000002],[281.321,-158.632],[285.346,-167.623],[290.331,-167.623],[299.322,-163.598],[299.322,159.05]],"o":[[290.331,168.041],[285.346,168.041],[281.321,159.05],[281.321,-163.598],[290.312,-167.623],[295.297,-167.623],[299.322,-158.632],[299.322,164.01600000000002]],"v":[[290.331,168.041],[290.312,168.041],[281.321,159.05],[281.321,-158.632],[290.312,-167.623],[290.331,-167.623],[299.322,-158.632],[299.322,159.05]],"c":true}]}],"ix":2},"nm":"BODY","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ind":2,"ty":"sh","ix":3,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[295.404,168.082],[290.312,168.041],[281.321,164.01600000000002],[281.321,159.05],[285.346,150.059],[290.438,150.1],[299.429,154.125],[299.429,159.091]],"o":[[290.438,168.082],[285.346,168.041],[281.321,159.05],[281.321,154.084],[290.312,150.059],[295.404,150.1],[299.429,159.091],[299.429,164.05700000000002]],"v":[[290.438,168.082],[290.312,168.041],[281.321,159.05],[281.321,159.05],[290.312,150.059],[290.438,150.1],[299.429,159.091],[299.429,159.091]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[17.154,167.832],[-12.188,167.832],[-21.179,163.80700000000002],[-21.179,158.841],[-17.154,149.85],[12.188,149.85],[21.179,153.875],[21.179,158.841]],"o":[[12.188,167.832],[-17.154,167.832],[-21.179,158.841],[-21.179,153.875],[-12.188,149.85],[17.154,149.85],[21.179,158.841],[21.179,163.80700000000002]],"v":[[12.188,167.832],[-12.188,167.832],[-21.179,158.841],[-21.179,158.841],[-12.188,149.85],[12.188,149.85],[21.179,158.841],[21.179,158.841]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[17.154,167.832],[-12.188,167.832],[-21.179,163.80700000000002],[-21.179,158.841],[-17.154,149.85],[12.188,149.85],[21.179,153.875],[21.179,158.841]],"o":[[12.188,167.832],[-17.154,167.832],[-21.179,158.841],[-21.179,153.875],[-12.188,149.85],[17.154,149.85],[21.179,158.841],[21.179,163.80700000000002]],"v":[[12.188,167.832],[-12.188,167.832],[-21.179,158.841],[-21.179,158.841],[-12.188,149.85],[12.188,149.85],[21.179,158.841],[21.179,158.841]],"c":true}]},{"t":125,"s":[{"i":[[295.404,168.082],[290.312,168.041],[281.321,164.01600000000002],[281.321,159.05],[285.346,150.059],[290.438,150.1],[299.429,154.125],[299.429,159.091]],"o":[[290.438,168.082],[285.346,168.041],[281.321,159.05],[281.321,154.084],[290.312,150.059],[295.404,150.1],[299.429,159.091],[299.429,164.05700000000002]],"v":[[290.438,168.082],[290.312,168.041],[281.321,159.05],[281.321,159.05],[290.312,150.059],[290.438,150.1],[299.429,159.091],[299.429,159.091]],"c":true}]}],"ix":2},"nm":"BOT","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ind":3,"ty":"sh","ix":4,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[295.404,-149.6],[290.312,-149.641],[281.321,-153.666],[281.321,-158.632],[285.346,-167.623],[290.438,-167.582],[299.429,-163.55700000000002],[299.429,-158.591]],"o":[[290.438,-149.6],[285.346,-149.641],[281.321,-158.632],[281.321,-163.598],[290.312,-167.623],[295.404,-167.582],[299.429,-158.591],[299.429,-153.625]],"v":[[290.438,-149.6],[290.312,-149.641],[281.321,-158.632],[281.321,-158.632],[290.312,-167.623],[290.438,-167.582],[299.429,-158.591],[299.429,-158.591]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[17.154,-149.85],[-12.188,-149.85],[-21.179,-153.875],[-21.179,-158.841],[-17.154,-167.832],[12.188,-167.832],[21.179,-163.80700000000002],[21.179,-158.841]],"o":[[12.188,-149.85],[-17.154,-149.85],[-21.179,-158.841],[-21.179,-163.80700000000002],[-12.188,-167.832],[17.154,-167.832],[21.179,-158.841],[21.179,-153.875]],"v":[[12.188,-149.85],[-12.188,-149.85],[-21.179,-158.841],[-21.179,-158.841],[-12.188,-167.832],[12.188,-167.832],[21.179,-158.841],[21.179,-158.841]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[17.154,-149.85],[-12.188,-149.85],[-21.179,-153.875],[-21.179,-158.841],[-17.154,-167.832],[12.188,-167.832],[21.179,-163.80700000000002],[21.179,-158.841]],"o":[[12.188,-149.85],[-17.154,-149.85],[-21.179,-158.841],[-21.179,-163.80700000000002],[-12.188,-167.832],[17.154,-167.832],[21.179,-158.841],[21.179,-153.875]],"v":[[12.188,-149.85],[-12.188,-149.85],[-21.179,-158.841],[-21.179,-158.841],[-12.188,-167.832],[12.188,-167.832],[21.179,-158.841],[21.179,-158.841]],"c":true}]},{"t":125,"s":[{"i":[[295.404,-149.6],[290.312,-149.641],[281.321,-153.666],[281.321,-158.632],[285.346,-167.623],[290.438,-167.582],[299.429,-163.55700000000002],[299.429,-158.591]],"o":[[290.438,-149.6],[285.346,-149.641],[281.321,-158.632],[281.321,-163.598],[290.312,-167.623],[295.404,-167.582],[299.429,-158.591],[299.429,-153.625]],"v":[[290.438,-149.6],[290.312,-149.641],[281.321,-158.632],[281.321,-158.632],[290.312,-167.623],[290.438,-167.582],[299.429,-158.591],[299.429,-158.591]],"c":true}]}],"ix":2},"nm":"TOP","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"mm","mm":2,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":1,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.74,0.74,0.74,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[898.157,994.556],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 5","np":7,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[261.369,-21.358],[294.061,-11.876],[284.631,21],[251.94,11.517999999999999]],"o":[[284.631,-21.358],[294.061,11.517999999999999],[261.369,21],[251.94,-11.876]],"v":[[273,-21.358],[294.061,-0.179],[273,21],[251.94,-0.179]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-5.186,-21.179],[9.391,-11.697],[5.186,21.179],[-9.391,11.697]],"o":[[5.186,-21.179],[9.391,11.697],[-5.186,21.179],[-9.391,-11.697]],"v":[[0,-21.179],[9.391,0],[0,21.179],[-9.391,0]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-5.186,-21.179],[9.391,-11.697],[5.186,21.179],[-9.391,11.697]],"o":[[5.186,-21.179],[9.391,11.697],[-5.186,21.179],[-9.391,-11.697]],"v":[[0,-21.179],[9.391,0],[0,21.179],[-9.391,0]],"c":true}]},{"t":125,"s":[{"i":[[261.369,-21.358],[294.061,-11.876],[284.631,21],[251.94,11.517999999999999]],"o":[[284.631,-21.358],[294.061,11.517999999999999],[261.369,21],[251.94,-11.876]],"v":[[273,-21.358],[294.061,-0.179],[273,21],[251.94,-0.179]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[915.939,1151.998],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[261.369,-21.358],[294.061,-11.876],[284.631,21],[251.94,11.517999999999999]],"o":[[284.631,-21.358],[294.061,11.517999999999999],[261.369,21],[251.94,-11.876]],"v":[[273,-21.358],[294.061,-0.179],[273,21],[251.94,-0.179]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-5.186,-21.179],[9.391,-11.697],[5.186,21.179],[-9.391,11.697]],"o":[[5.186,-21.179],[9.391,11.697],[-5.186,21.179],[-9.391,-11.697]],"v":[[0,-21.179],[9.391,0],[0,21.179],[-9.391,0]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-5.186,-21.179],[9.391,-11.697],[5.186,21.179],[-9.391,11.697]],"o":[[5.186,-21.179],[9.391,11.697],[-5.186,21.179],[-9.391,-11.697]],"v":[[0,-21.179],[9.391,0],[0,21.179],[-9.391,0]],"c":true}]},{"t":125,"s":[{"i":[[261.369,-21.358],[294.061,-11.876],[284.631,21],[251.94,11.517999999999999]],"o":[[284.631,-21.358],[294.061,11.517999999999999],[261.369,21],[251.94,-11.876]],"v":[[273,-21.358],[294.061,-0.179],[273,21],[251.94,-0.179]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[915.939,835.714],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true}],"ip":0,"op":151,"st":0,"bm":0,"completed":true},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 10","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.854,-337.049,0],"ix":2},"a":{"a":0,"k":[1000.854,998.951,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[-25.38,-45.954],[45.954,-25.38],[25.38,45.954],[-45.954,25.38]],"o":[[25.38,-45.954],[45.954,25.38],[-25.38,45.954],[-45.954,-25.38]],"v":[[0,-45.954],[45.954,0],[0,45.954],[-45.954,0]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-227.503,-48.034],[-189.045,-29.695999999999998],[-200.137,33.884],[-238.595,15.546]],"o":[[-200.137,-48.034],[-189.045,15.546],[-227.503,33.884],[-238.595,-29.695999999999998]],"v":[[-213.82,-48.034],[-189.045,-7.075],[-213.82,33.884],[-238.595,-7.075]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-227.503,-48.034],[-189.045,-29.695999999999998],[-200.137,33.884],[-238.595,15.546]],"o":[[-200.137,-48.034],[-189.045,15.546],[-227.503,33.884],[-238.595,-29.695999999999998]],"v":[[-213.82,-48.034],[-189.045,-7.075],[-213.82,33.884],[-238.595,-7.075]],"c":true}]},{"t":125,"s":[{"i":[[-25.38,-45.954],[45.954,-25.38],[25.38,45.954],[-45.954,25.38]],"o":[[25.38,-45.954],[45.954,25.38],[-25.38,45.954],[-45.954,-25.38]],"v":[[0,-45.954],[45.954,0],[0,45.954],[-45.954,0]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":15.984,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,998.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[-12.359,-22.378],[22.378,-12.359],[12.359,22.378],[-22.378,12.359]],"o":[[12.359,-22.378],[22.378,12.359],[-12.359,22.378],[-22.378,-12.359]],"v":[[0,-22.378],[22.378,0],[0,22.378],[-22.378,0]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-222.549,-27.055],[-203.63,-18.11],[-209.08700000000002,12.905],[-228.006,3.96]],"o":[[-209.08700000000002,-27.055],[-203.63,3.96],[-222.549,12.905],[-228.006,-18.11]],"v":[[-215.818,-27.055],[-203.63,-7.075],[-215.818,12.905],[-228.006,-7.075]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-222.549,-27.055],[-203.63,-18.11],[-209.08700000000002,12.905],[-228.006,3.96]],"o":[[-209.08700000000002,-27.055],[-203.63,3.96],[-222.549,12.905],[-228.006,-18.11]],"v":[[-215.818,-27.055],[-203.63,-7.075],[-215.818,12.905],[-228.006,-7.075]],"c":true}]},{"t":125,"s":[{"i":[[-12.359,-22.378],[22.378,-12.359],[12.359,22.378],[-22.378,12.359]],"o":[[12.359,-22.378],[22.378,12.359],[-12.359,22.378],[-22.378,-12.359]],"v":[[0,-22.378],[22.378,0],[0,22.378],[-22.378,0]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.65,0.65,0.65,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,998.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[-27.587,-49.95],[49.95,-27.587],[27.587,49.95],[-49.95,27.587]],"o":[[27.587,-49.95],[49.95,27.587],[-27.587,49.95],[-49.95,-27.587]],"v":[[0,-49.95],[49.95,0],[0,49.95],[-49.95,0]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-227.503,-48.034],[-189.045,-29.695999999999998],[-200.137,33.884],[-238.595,15.546]],"o":[[-200.137,-48.034],[-189.045,15.546],[-227.503,33.884],[-238.595,-29.695999999999998]],"v":[[-213.82,-48.034],[-189.045,-7.075],[-213.82,33.884],[-238.595,-7.075]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-227.503,-48.034],[-189.045,-29.695999999999998],[-200.137,33.884],[-238.595,15.546]],"o":[[-200.137,-48.034],[-189.045,15.546],[-227.503,33.884],[-238.595,-29.695999999999998]],"v":[[-213.82,-48.034],[-189.045,-7.075],[-213.82,33.884],[-238.595,-7.075]],"c":true}]},{"t":125,"s":[{"i":[[-27.587,-49.95],[49.95,-27.587],[27.587,49.95],[-49.95,27.587]],"o":[[27.587,-49.95],[49.95,27.587],[-27.587,49.95],[-49.95,-27.587]],"v":[[0,-49.95],[49.95,0],[0,49.95],[-49.95,0]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.81,0.81,0.81,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,998.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,998.951],"ix":2},"a":{"a":0,"k":[1000.854,998.951],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[1036.174,963.631],[1047.476,952.328],[1058.779,941.026],[1036.174,963.631]],"o":[[1036.174,963.631],[1047.476,952.328],[1058.779,941.026],[1036.174,963.631]],"v":[[1036.174,963.631],[1047.476,952.328],[1058.779,941.026],[1036.174,963.631]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[803.428,960.917],[828.403,960.917],[838.403,938.749],[803.428,960.917]],"o":[[803.428,960.917],[828.403,960.917],[838.403,938.749],[803.428,960.917]],"v":[[803.428,960.917],[828.403,960.917],[838.403,938.749],[803.428,960.917]],"c":false}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[803.428,960.917],[828.403,960.917],[838.403,938.749],[803.428,960.917]],"o":[[803.428,960.917],[828.403,960.917],[838.403,938.749],[803.428,960.917]],"v":[[803.428,960.917],[828.403,960.917],[838.403,938.749],[803.428,960.917]],"c":false}]},{"t":125,"s":[{"i":[[1036.174,963.631],[1047.476,952.328],[1058.779,941.026],[1036.174,963.631]],"o":[[1036.174,963.631],[1047.476,952.328],[1058.779,941.026],[1036.174,963.631]],"v":[[1036.174,963.631],[1047.476,952.328],[1058.779,941.026],[1036.174,963.631]],"c":true}]}],"ix":2},"nm":"Path 8","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[1000.854,1048.9],[1000.854,1080.868],[1000.854,1048.9]],"o":[[1000.854,1048.9],[1000.854,1080.868],[1000.854,1048.9]],"v":[[1000.854,1048.9],[1000.854,1080.868],[1000.854,1048.9]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[811.331,1033.835],[811.403,1065.003],[786.356,1033.835]],"o":[[811.331,1033.835],[811.403,1065.003],[786.356,1033.835]],"v":[[811.331,1033.835],[811.403,1065.003],[786.356,1033.835]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[811.331,1033.835],[811.403,1065.003],[786.356,1033.835]],"o":[[811.331,1033.835],[811.403,1065.003],[786.356,1033.835]],"v":[[811.331,1033.835],[811.403,1065.003],[786.356,1033.835]],"c":true}]},{"t":125,"s":[{"i":[[1000.854,1048.9],[1000.854,1080.868],[1000.854,1048.9]],"o":[[1000.854,1048.9],[1000.854,1080.868],[1000.854,1048.9]],"v":[[1000.854,1048.9],[1000.854,1080.868],[1000.854,1048.9]],"c":true}]}],"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ind":2,"ty":"sh","ix":3,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[1036.174,1034.27],[1047.476,1045.572],[1058.779,1056.875],[1036.174,1034.27]],"o":[[1036.174,1034.27],[1047.476,1045.572],[1058.779,1056.875],[1036.174,1034.27]],"v":[[1036.174,1034.27],[1047.476,1045.572],[1058.779,1056.875],[1036.174,1034.27]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[803.428,1022.835],[828.403,1022.835],[838.403,1045.003],[803.428,1022.835]],"o":[[803.428,1022.835],[828.403,1022.835],[838.403,1045.003],[803.428,1022.835]],"v":[[803.428,1022.835],[828.403,1022.835],[838.403,1045.003],[803.428,1022.835]],"c":false}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[803.428,1022.835],[828.403,1022.835],[838.403,1045.003],[803.428,1022.835]],"o":[[803.428,1022.835],[828.403,1022.835],[838.403,1045.003],[803.428,1022.835]],"v":[[803.428,1022.835],[828.403,1022.835],[838.403,1045.003],[803.428,1022.835]],"c":false}]},{"t":125,"s":[{"i":[[1036.174,1034.27],[1047.476,1045.572],[1058.779,1056.875],[1036.174,1034.27]],"o":[[1036.174,1034.27],[1047.476,1045.572],[1058.779,1056.875],[1036.174,1034.27]],"v":[[1036.174,1034.27],[1047.476,1045.572],[1058.779,1056.875],[1036.174,1034.27]],"c":true}]}],"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ind":3,"ty":"sh","ix":4,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[1050.804,998.951],[1082.772,998.951],[1050.804,998.951]],"o":[[1050.804,998.951],[1082.772,998.951],[1050.804,998.951]],"v":[[1050.804,998.951],[1082.772,998.951],[1050.804,998.951]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[857.564,991.876],[837.084,991.876],[816.605,991.876]],"o":[[857.564,991.876],[837.084,991.876],[816.605,991.876]],"v":[[857.564,991.876],[837.084,991.876],[816.605,991.876]],"c":false}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[857.564,991.876],[837.084,991.876],[816.605,991.876]],"o":[[857.564,991.876],[837.084,991.876],[816.605,991.876]],"v":[[857.564,991.876],[837.084,991.876],[816.605,991.876]],"c":false}]},{"t":125,"s":[{"i":[[1050.804,998.951],[1082.772,998.951],[1050.804,998.951]],"o":[[1050.804,998.951],[1082.772,998.951],[1050.804,998.951]],"v":[[1050.804,998.951],[1082.772,998.951],[1050.804,998.951]],"c":true}]}],"ix":2},"nm":"Path 6","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ind":4,"ty":"sh","ix":5,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[1000.854,949.001],[1000.854,917.033],[1000.854,949.001]],"o":[[1000.854,949.001],[1000.854,917.033],[1000.854,949.001]],"v":[[1000.854,949.001],[1000.854,917.033],[1000.854,949.001]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[786.331,949.917],[811.403,918.749],[811.306,949.917]],"o":[[786.331,949.917],[811.403,918.749],[811.306,949.917]],"v":[[786.331,949.917],[811.403,918.749],[811.306,949.917]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[786.331,949.917],[811.403,918.749],[811.306,949.917]],"o":[[786.331,949.917],[811.403,918.749],[811.306,949.917]],"v":[[786.331,949.917],[811.403,918.749],[811.306,949.917]],"c":true}]},{"t":125,"s":[{"i":[[1000.854,949.001],[1000.854,917.033],[1000.854,949.001]],"o":[[1000.854,949.001],[1000.854,917.033],[1000.854,949.001]],"v":[[1000.854,949.001],[1000.854,917.033],[1000.854,949.001]],"c":true}]}],"ix":2},"nm":"Path 7","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ind":5,"ty":"sh","ix":6,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[950.905,998.951],[918.937,998.951],[950.905,998.951]],"o":[[950.905,998.951],[918.937,998.951],[950.905,998.951]],"v":[[950.905,998.951],[918.937,998.951],[950.905,998.951]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[803.073,989.451],[787.937,989.451],[803.073,989.451]],"o":[[803.073,989.451],[787.937,989.451],[803.073,989.451]],"v":[[803.073,989.451],[787.937,989.451],[803.073,989.451]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[803.073,989.451],[787.937,989.451],[803.073,989.451]],"o":[[803.073,989.451],[787.937,989.451],[803.073,989.451]],"v":[[803.073,989.451],[787.937,989.451],[803.073,989.451]],"c":true}]},{"t":125,"s":[{"i":[[950.905,998.951],[918.937,998.951],[950.905,998.951]],"o":[[950.905,998.951],[918.937,998.951],[950.905,998.951]],"v":[[950.905,998.951],[918.937,998.951],[950.905,998.951]],"c":true}]}],"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ind":6,"ty":"sh","ix":7,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[965.535,1034.27],[942.93,1056.875],[965.535,1034.27]],"o":[[965.535,1034.27],[942.93,1056.875],[965.535,1034.27]],"v":[[965.535,1034.27],[942.93,1056.875],[965.535,1034.27]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[793.5,1027.77],[803.297,1054.875],[810,1024.77]],"o":[[793.5,1027.77],[803.297,1054.875],[810,1024.77]],"v":[[793.5,1027.77],[803.297,1054.875],[810,1024.77]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[793.5,1027.77],[803.297,1054.875],[810,1024.77]],"o":[[793.5,1027.77],[803.297,1054.875],[810,1024.77]],"v":[[793.5,1027.77],[803.297,1054.875],[810,1024.77]],"c":true}]},{"t":125,"s":[{"i":[[965.535,1034.27],[942.93,1056.875],[965.535,1034.27]],"o":[[965.535,1034.27],[942.93,1056.875],[965.535,1034.27]],"v":[[965.535,1034.27],[942.93,1056.875],[965.535,1034.27]],"c":true}]}],"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ind":7,"ty":"sh","ix":8,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[965.535,963.631],[942.93,941.026],[965.535,963.631]],"o":[[965.535,963.631],[942.93,941.026],[965.535,963.631]],"v":[[965.535,963.631],[942.93,941.026],[965.535,963.631]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[786,950.131],[799.297,931.526],[810,954.131]],"o":[[786,950.131],[799.297,931.526],[810,954.131]],"v":[[786,950.131],[799.297,931.526],[810,954.131]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[786,950.131],[799.297,931.526],[810,954.131]],"o":[[786,950.131],[799.297,931.526],[810,954.131]],"v":[[786,950.131],[799.297,931.526],[810,954.131]],"c":true}]},{"t":125,"s":[{"i":[[965.535,963.631],[942.93,941.026],[965.535,963.631]],"o":[[965.535,963.631],[942.93,941.026],[965.535,963.631]],"v":[[965.535,963.631],[942.93,941.026],[965.535,963.631]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":19.98,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Spikes","np":10,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[189.237,55.032],[231.394,30.318],[211.643,-37.476],[183.687,-40.459],[177.119,-37.519],[177.119,48.34],[180.05900000000003,54.909]],"o":[[214.643,51.023999999999994],[231.394,-14.836000000000002],[189.237,-40.336],[180.05900000000003,-40.459],[177.119,-33.891],[177.119,51.968],[183.687,54.909]],"v":[[189.237,55.032],[231.394,7.741],[189.237,-40.336],[183.687,-40.459],[177.119,-33.891],[177.119,48.34],[183.687,54.909]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[3.297,41.059],[28.072,22.677000000000003],[16.883,-41.059],[-21.504,-41.059],[-28.072,-38.119],[-28.072,34.49],[-25.132,41.059]],"o":[[17.083,41.059],[28.072,-22.477],[3.297,-41.059],[-25.132,-41.059],[-28.072,-34.491],[-28.072,38.118],[-21.504,41.059]],"v":[[3.297,41.059],[28.072,0.1],[3.297,-41.059],[-21.504,-41.059],[-28.072,-34.491],[-28.072,34.49],[-21.504,41.059]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[3.297,41.059],[28.072,22.677000000000003],[16.883,-41.059],[-21.504,-41.059],[-28.072,-38.119],[-28.072,34.49],[-25.132,41.059]],"o":[[17.083,41.059],[28.072,-22.477],[3.297,-41.059],[-25.132,-41.059],[-28.072,-34.491],[-28.072,38.118],[-21.504,41.059]],"v":[[3.297,41.059],[28.072,0.1],[3.297,-41.059],[-21.504,-41.059],[-28.072,-34.491],[-28.072,34.49],[-21.504,41.059]],"c":true}]},{"t":125,"s":[{"i":[[189.237,55.032],[231.394,30.318],[211.643,-37.476],[183.687,-40.459],[177.119,-37.519],[177.119,48.34],[180.05900000000003,54.909]],"o":[[214.643,51.023999999999994],[231.394,-14.836000000000002],[189.237,-40.336],[180.05900000000003,-40.459],[177.119,-33.891],[177.119,51.968],[183.687,54.909]],"v":[[189.237,55.032],[231.394,7.741],[189.237,-40.336],[183.687,-40.459],[177.119,-33.891],[177.119,48.34],[183.687,54.909]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":13.986,"ix":5},"lc":1,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.47,0.47,0.47,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[815.106,991.976],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 8","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[-59.587,-107.892],[107.892,-59.587],[59.587,107.892],[-107.892,59.587]],"o":[[59.587,-107.892],[107.892,59.587],[-59.587,107.892],[-107.892,-59.587]],"v":[[0,-107.892],[107.892,0],[0,107.892],[-107.892,0]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-201.879,-98.983],[-129.305,-57.834],[-150.237,84.833],[-222.811,43.684]],"o":[[-150.237,-98.983],[-129.305,43.684],[-201.879,84.833],[-222.811,-57.834]],"v":[[-176.058,-98.983],[-129.305,-7.075],[-176.058,84.833],[-222.811,-7.075]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-201.879,-98.983],[-129.305,-57.834],[-150.237,84.833],[-222.811,43.684]],"o":[[-150.237,-98.983],[-129.305,43.684],[-201.879,84.833],[-222.811,-57.834]],"v":[[-176.058,-98.983],[-129.305,-7.075],[-176.058,84.833],[-222.811,-7.075]],"c":true}]},{"t":125,"s":[{"i":[[-59.587,-107.892],[107.892,-59.587],[59.587,107.892],[-107.892,59.587]],"o":[[59.587,-107.892],[107.892,59.587],[-59.587,107.892],[-107.892,-59.587]],"v":[[0,-107.892],[107.892,0],[0,107.892],[-107.892,0]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.74,0.74,0.74,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,998.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[-71.725,-129.87],[129.87,-71.725],[71.725,129.87],[-129.87,71.725]],"o":[[71.725,-129.87],[129.87,71.725],[-71.725,129.87],[-129.87,-71.725]],"v":[[0,-129.87],[129.87,0],[0,129.87],[-129.87,0]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-204.54500000000002,-117.964],[-112.122,-68.317],[-138.779,103.814],[-231.202,54.166999999999994]],"o":[[-138.779,-117.964],[-112.122,54.166999999999994],[-204.54500000000002,103.814],[-231.202,-68.317]],"v":[[-171.662,-117.964],[-112.122,-7.075],[-171.662,103.814],[-231.202,-7.075]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-204.54500000000002,-117.964],[-112.122,-68.317],[-138.779,103.814],[-231.202,54.166999999999994]],"o":[[-138.779,-117.964],[-112.122,54.166999999999994],[-204.54500000000002,103.814],[-231.202,-68.317]],"v":[[-171.662,-117.964],[-112.122,-7.075],[-171.662,103.814],[-231.202,-7.075]],"c":true}]},{"t":125,"s":[{"i":[[-71.725,-129.87],[129.87,-71.725],[71.725,129.87],[-129.87,71.725]],"o":[[71.725,-129.87],[129.87,71.725],[-71.725,129.87],[-129.87,-71.725]],"v":[[0,-129.87],[129.87,0],[0,129.87],[-129.87,0]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.89,0.89,0.89,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,998.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 7","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false,"_render":true}],"ip":0,"op":151,"st":0,"bm":0,"completed":true},{"ddd":0,"ind":4,"ty":4,"nm":"Layer 11","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-7.138,-337.049,0],"ix":2},"a":{"a":0,"k":[992.862,998.951,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[267.732,-253.346],[267.732,235.764],[253.346,267.732],[-235.764,267.732],[-267.732,253.346],[-267.732,-235.764],[-253.346,-267.732],[235.764,-267.732]],"o":[[267.732,-235.764],[267.732,253.346],[235.764,267.732],[-253.346,267.732],[-267.732,235.764],[-267.732,-253.346],[-235.764,-267.732],[253.346,-267.732]],"v":[[267.732,-235.764],[267.732,235.764],[235.764,267.732],[-235.764,267.732],[-267.732,235.764],[-267.732,-235.764],[-235.764,-267.732],[235.764,-267.732]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-53.746,-300.699],[-53.746,279.72],[-67.333,314.485],[-245.354,272.927],[-267.732,253.346],[-267.732,-235.764],[-257.942,-270.13],[-83.916,-310.689]],"o":[[-53.746,-279.72],[-53.746,300.699],[-83.916,310.689],[-257.94100000000003,269.93],[-267.732,235.764],[-267.732,-253.346],[-245.554,-272.927],[-67.532,-314.485]],"v":[[-53.746,-279.72],[-53.746,279.72],[-83.916,310.689],[-245.354,272.927],[-267.732,235.764],[-267.732,-235.764],[-245.554,-272.927],[-83.916,-310.689]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-53.746,-300.699],[-53.746,279.72],[-67.333,314.485],[-245.354,272.927],[-267.732,253.346],[-267.732,-235.764],[-257.942,-270.13],[-83.916,-310.689]],"o":[[-53.746,-279.72],[-53.746,300.699],[-83.916,310.689],[-257.94100000000003,269.93],[-267.732,235.764],[-267.732,-253.346],[-245.554,-272.927],[-67.532,-314.485]],"v":[[-53.746,-279.72],[-53.746,279.72],[-83.916,310.689],[-245.354,272.927],[-267.732,235.764],[-267.732,-235.764],[-245.554,-272.927],[-83.916,-310.689]],"c":true}]},{"t":125,"s":[{"i":[[267.732,-253.346],[267.732,235.764],[253.346,267.732],[-235.764,267.732],[-267.732,253.346],[-267.732,-235.764],[-253.346,-267.732],[235.764,-267.732]],"o":[[267.732,-235.764],[267.732,253.346],[235.764,267.732],[-253.346,267.732],[-267.732,235.764],[-267.732,-253.346],[-235.764,-267.732],[253.346,-267.732]],"v":[[267.732,-235.764],[267.732,235.764],[235.764,267.732],[-235.764,267.732],[-267.732,235.764],[-267.732,-235.764],[-235.764,-267.732],[235.764,-267.732]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,998.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[253.346,2.997],[-235.764,2.997],[-267.732,-11.389],[-267.732,-2.997],[-253.346,28.971],[235.764,28.971],[267.732,14.585],[267.732,-28.971]],"o":[[235.764,2.997],[-253.346,2.997],[-267.732,-28.971],[-267.732,14.585],[-235.764,28.971],[253.346,28.971],[267.732,-2.997],[267.732,-11.389]],"v":[[235.764,2.997],[-235.764,2.997],[-267.732,-28.971],[-267.732,-2.997],[-235.764,28.971],[235.764,28.971],[267.732,-2.997],[267.732,-28.971]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-67.532,43.756],[-245.354,1.998],[-267.532,-17.583],[-267.532,-3.197],[-257.742,31.169],[-83.916,71.728],[-53.746,61.738],[-53.746,8.791]],"o":[[-83.916,39.76],[-257.742,-0.9989999999999999],[-267.532,-35.165],[-267.532,14.385000000000002],[-245.354,33.966],[-67.532,75.524],[-53.746,40.759],[-53.746,29.97]],"v":[[-83.916,39.76],[-245.354,1.998],[-267.532,-35.165],[-267.532,-3.197],[-245.354,33.966],[-83.916,71.728],[-53.746,40.759],[-53.746,8.791]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-67.532,43.756],[-245.354,1.998],[-267.532,-17.583],[-267.532,-3.197],[-257.742,31.169],[-83.916,71.728],[-53.746,61.738],[-53.746,8.791]],"o":[[-83.916,39.76],[-257.742,-0.9989999999999999],[-267.532,-35.165],[-267.532,14.385000000000002],[-245.354,33.966],[-67.532,75.524],[-53.746,40.759],[-53.746,29.97]],"v":[[-83.916,39.76],[-245.354,1.998],[-267.532,-35.165],[-267.532,-3.197],[-245.354,33.966],[-83.916,71.728],[-53.746,40.759],[-53.746,8.791]],"c":true}]},{"t":125,"s":[{"i":[[253.346,2.997],[-235.764,2.997],[-267.732,-11.389],[-267.732,-2.997],[-253.346,28.971],[235.764,28.971],[267.732,14.585],[267.732,-28.971]],"o":[[235.764,2.997],[-253.346,2.997],[-267.732,-28.971],[-267.732,14.585],[-235.764,28.971],[253.346,28.971],[267.732,-2.997],[267.732,-11.389]],"v":[[235.764,2.997],[-235.764,2.997],[-267.732,-28.971],[-267.732,-2.997],[-235.764,28.971],[235.764,28.971],[267.732,-2.997],[267.732,-28.971]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.74,0.74,0.74,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,1237.712],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[253.346,-23.976],[-235.764,-23.976],[-267.732,-9.59],[-267.732,23.976],[-253.346,-1.998],[235.764,-1.998],[267.732,6.393999999999998],[267.732,7.992]],"o":[[235.764,-23.976],[-253.346,-23.976],[-267.732,7.992],[-267.732,6.393999999999998],[-235.764,-1.998],[253.346,-1.998],[267.732,23.976],[267.732,-9.79]],"v":[[235.764,-23.976],[-235.764,-23.976],[-267.732,7.992],[-267.732,23.976],[-235.764,-1.998],[235.764,-1.998],[267.732,23.976],[267.732,7.992]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-67.532,-70.72900000000001],[-245.354,-29.171],[-267.532,-9.59],[-267.532,31.968],[-257.742,-2.398],[-83.916,-42.957],[-53.746,-32.967],[-53.746,-35.964]],"o":[[-83.916,-66.933],[-257.742,-26.174],[-267.532,7.992],[-267.532,14.386],[-245.354,-5.195],[-67.532,-46.753],[-53.746,-11.988],[-53.746,-56.943]],"v":[[-83.916,-66.933],[-245.354,-29.171],[-267.532,7.992],[-267.532,31.968],[-245.354,-5.195],[-83.916,-42.957],[-53.746,-11.988],[-53.746,-35.964]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-67.532,-70.72900000000001],[-245.354,-29.171],[-267.532,-9.59],[-267.532,31.968],[-257.742,-2.398],[-83.916,-42.957],[-53.746,-32.967],[-53.746,-35.964]],"o":[[-83.916,-66.933],[-257.742,-26.174],[-267.532,7.992],[-267.532,14.386],[-245.354,-5.195],[-67.532,-46.753],[-53.746,-11.988],[-53.746,-56.943]],"v":[[-83.916,-66.933],[-245.354,-29.171],[-267.532,7.992],[-267.532,31.968],[-245.354,-5.195],[-83.916,-42.957],[-53.746,-11.988],[-53.746,-35.964]],"c":true}]},{"t":125,"s":[{"i":[[253.346,-23.976],[-235.764,-23.976],[-267.732,-9.59],[-267.732,23.976],[-253.346,-1.998],[235.764,-1.998],[267.732,6.393999999999998],[267.732,7.992]],"o":[[235.764,-23.976],[-253.346,-23.976],[-267.732,7.992],[-267.732,6.393999999999998],[-235.764,-1.998],[253.346,-1.998],[267.732,23.976],[267.732,-9.79]],"v":[[235.764,-23.976],[-235.764,-23.976],[-267.732,7.992],[-267.732,23.976],[-235.764,-1.998],[235.764,-1.998],[267.732,23.976],[267.732,7.992]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.95,0.95,0.95,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,755.195],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[267.732,-253.346],[267.732,235.764],[253.346,267.732],[-235.764,267.732],[-267.732,253.346],[-267.732,-235.764],[-253.346,-267.732],[235.764,-267.732]],"o":[[267.732,-235.764],[267.732,253.346],[235.764,267.732],[-253.346,267.732],[-267.732,235.764],[-267.732,-253.346],[-235.764,-267.732],[253.346,-267.732]],"v":[[267.732,-235.764],[267.732,235.764],[235.764,267.732],[-235.764,267.732],[-267.732,235.764],[-267.732,-235.764],[-235.764,-267.732],[235.764,-267.732]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-50.683,-300.699],[-50.683,279.72],[-64.27,314.485],[-242.291,272.927],[-264.669,253.346],[-264.669,-235.764],[-254.87900000000002,-270.13],[-80.853,-310.689]],"o":[[-50.683,-279.72],[-50.683,300.699],[-80.853,310.689],[-254.878,269.93],[-264.669,235.764],[-264.669,-253.346],[-242.491,-272.927],[-64.469,-314.485]],"v":[[-50.683,-279.72],[-50.683,279.72],[-80.853,310.689],[-242.291,272.927],[-264.669,235.764],[-264.669,-235.764],[-242.491,-272.927],[-80.853,-310.689]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-50.683,-300.699],[-50.683,279.72],[-64.27,314.485],[-242.291,272.927],[-264.669,253.346],[-264.669,-235.764],[-254.87900000000002,-270.13],[-80.853,-310.689]],"o":[[-50.683,-279.72],[-50.683,300.699],[-80.853,310.689],[-254.878,269.93],[-264.669,235.764],[-264.669,-253.346],[-242.491,-272.927],[-64.469,-314.485]],"v":[[-50.683,-279.72],[-50.683,279.72],[-80.853,310.689],[-242.291,272.927],[-264.669,235.764],[-264.669,-235.764],[-242.491,-272.927],[-80.853,-310.689]],"c":true}]},{"t":125,"s":[{"i":[[267.732,-253.346],[267.732,235.764],[253.346,267.732],[-235.764,267.732],[-267.732,253.346],[-267.732,-235.764],[-253.346,-267.732],[235.764,-267.732]],"o":[[267.732,-235.764],[267.732,253.346],[235.764,267.732],[-253.346,267.732],[-267.732,235.764],[-267.732,-253.346],[-235.764,-267.732],[253.346,-267.732]],"v":[[267.732,-235.764],[267.732,235.764],[235.764,267.732],[-235.764,267.732],[-267.732,235.764],[-267.732,-235.764],[-235.764,-267.732],[235.764,-267.732]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.89,0.89,0.89,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,998.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,998.951],"ix":2},"a":{"a":0,"k":[1000.854,998.951],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"COVER","np":4,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false,"_render":true}],"ip":0,"op":151,"st":0,"bm":0,"completed":true},{"ddd":0,"ind":5,"ty":4,"nm":"Layer 1","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-112.033,-336.776,0],"ix":2},"a":{"a":0,"k":[887.967,999.224,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[-106.893,249.667],[-106.893,-232.43],[-96.703,-258.196],[339.149,-263.442],[394.893,-254.065],[394.893,234.27],[385.211,262.28700000000003],[-89.116,262.848]],"o":[[-106.893,231.485],[-106.893,-250.612],[-84.116,-260.793],[369.319,-268.713],[394.893,-234.559],[394.893,253.96300000000002],[339.149,263.341],[-101.703,260.451]],"v":[[-106.893,231.485],[-106.893,-232.43],[-84.116,-260.793],[339.149,-263.442],[394.893,-234.559],[394.893,234.27],[339.149,263.341],[-89.116,262.848]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-106.893,259.66700000000003],[-106.893,-242.43],[-96.703,-277.196],[51.149,-310.962],[106.893,-300.972],[106.893,279.247],[88.985,318.099],[-84.116,278.848]],"o":[[-106.893,241.485],[-106.893,-260.612],[-84.116,-279.793],[81.319,-316.577],[106.893,-280.193],[106.893,300.226],[51.149,310.216],[-96.703,276.451]],"v":[[-106.893,241.485],[-106.893,-242.43],[-84.116,-279.793],[51.149,-310.962],[106.893,-280.193],[106.893,279.247],[51.149,310.216],[-84.116,278.848]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-106.893,259.66700000000003],[-106.893,-242.43],[-96.703,-277.196],[51.149,-310.962],[106.893,-300.972],[106.893,279.247],[88.985,318.099],[-84.116,278.848]],"o":[[-106.893,241.485],[-106.893,-260.612],[-84.116,-279.793],[81.319,-316.577],[106.893,-280.193],[106.893,300.226],[51.149,310.216],[-96.703,276.451]],"v":[[-106.893,241.485],[-106.893,-242.43],[-84.116,-279.793],[51.149,-310.962],[106.893,-280.193],[106.893,279.247],[51.149,310.216],[-84.116,278.848]],"c":true}]},{"t":125,"s":[{"i":[[-106.893,249.667],[-106.893,-232.43],[-96.703,-258.196],[323.149,-262.953],[378.893,-253.576],[378.893,234.759],[369.211,262.776],[-89.116,262.848]],"o":[[-106.893,231.485],[-106.893,-250.612],[-84.116,-260.793],[353.319,-268.224],[378.893,-234.07],[378.893,254.452],[323.149,263.83],[-101.703,260.451]],"v":[[-106.893,231.485],[-106.893,-232.43],[-84.116,-260.793],[323.149,-262.953],[378.893,-234.07],[378.893,234.759],[323.149,263.83],[-89.116,262.848]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.74,0.74,0.74,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[865.79,999.224],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 7","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[208.917,-22.755],[217.581,-12.737],[215.082,22],[206.419,11.981]],"o":[[215.083,-22.755],[217.581,11.981],[208.918,22],[206.419,-12.737]],"v":[[212,-22.755],[217.581,-0.378],[212,22],[206.419,-0.378]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-12.359,-22.378],[22.378,-12.359],[12.359,22.378],[-22.378,12.359]],"o":[[12.359,-22.378],[22.378,12.359],[-12.359,22.378],[-22.378,-12.359]],"v":[[0,-22.378],[22.378,0],[0,22.378],[-22.378,0]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-12.359,-22.378],[22.378,-12.359],[12.359,22.378],[-22.378,12.359]],"o":[[12.359,-22.378],[22.378,12.359],[-12.359,22.378],[-22.378,-12.359]],"v":[[0,-22.378],[22.378,0],[0,22.378],[-22.378,0]],"c":true}]},{"t":125,"s":[{"i":[[208.917,-22.755],[217.581,-12.737],[215.082,22],[206.419,11.981]],"o":[[215.083,-22.755],[217.581,11.981],[208.918,22],[206.419,-12.737]],"v":[[212,-22.755],[217.581,-0.378],[212,22],[206.419,-0.378]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.89,0.89,0.89,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1036.419,872.078],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[210.3,-22.755],[187.922,-12.766],[197.912,22],[232.078,22],[232.078,-22.555],[210.3,-22.555]],"o":[[197.912,-22.755],[187.922,12.01],[210.3,22],[232.078,22],[232.078,-22.555],[210.3,-22.555]],"v":[[210.3,-22.755],[187.922,-0.378],[210.3,22],[232.078,22],[232.078,-22.555],[210.3,-22.555]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[0.3,-22.378],[-22.078,-12.388],[-12.088,22.378],[22.078,22.378],[22.078,-22.178],[0.3,-22.178]],"o":[[-12.088,-22.378],[-22.078,12.388],[0.3,22.378],[22.078,22.378],[22.078,-22.178],[0.3,-22.178]],"v":[[0.3,-22.378],[-22.078,0],[0.3,22.378],[22.078,22.378],[22.078,-22.178],[0.3,-22.178]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[0.3,-22.378],[-22.078,-12.388],[-12.088,22.378],[22.078,22.378],[22.078,-22.178],[0.3,-22.178]],"o":[[-12.088,-22.378],[-22.078,12.388],[0.3,22.378],[22.078,22.378],[22.078,-22.178],[0.3,-22.178]],"v":[[0.3,-22.378],[-22.078,0],[0.3,22.378],[22.078,22.378],[22.078,-22.178],[0.3,-22.178]],"c":true}]},{"t":125,"s":[{"i":[[210.3,-22.755],[187.922,-12.766],[197.912,22],[232.078,22],[232.078,-22.555],[210.3,-22.555]],"o":[[197.912,-22.755],[187.922,12.01],[210.3,22],[232.078,22],[232.078,-22.555],[210.3,-22.555]],"v":[[210.3,-22.755],[187.922,-0.378],[210.3,22],[232.078,22],[232.078,-22.555],[210.3,-22.555]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.74,0.74,0.74,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1014.341,872.078],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[208.917,-22.755],[217.581,-12.737],[215.082,22],[206.419,11.981]],"o":[[215.083,-22.755],[217.581,11.981],[208.918,22],[206.419,-12.737]],"v":[[212,-22.755],[217.581,-0.378],[212,22],[206.419,-0.378]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[-12.359,-22.378],[22.378,-12.359],[12.359,22.378],[-22.378,12.359]],"o":[[12.359,-22.378],[22.378,12.359],[-12.359,22.378],[-22.378,-12.359]],"v":[[0,-22.378],[22.378,0],[0,22.378],[-22.378,0]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[-12.359,-22.378],[22.378,-12.359],[12.359,22.378],[-22.378,12.359]],"o":[[12.359,-22.378],[22.378,12.359],[-12.359,22.378],[-22.378,-12.359]],"v":[[0,-22.378],[22.378,0],[0,22.378],[-22.378,0]],"c":true}]},{"t":125,"s":[{"i":[[208.917,-22.755],[217.581,-12.737],[215.082,22],[206.419,11.981]],"o":[[215.083,-22.755],[217.581,11.981],[208.918,22],[206.419,-12.737]],"v":[[212,-22.755],[217.581,-0.378],[212,22],[206.419,-0.378]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.89,0.89,0.89,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1036.419,1127.023],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 3","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[210.3,-22.755],[187.922,-12.766],[197.912,22],[232.078,22],[232.078,-22.555],[210.3,-22.555]],"o":[[197.912,-22.755],[187.922,12.01],[210.3,22],[232.078,22],[232.078,-22.555],[210.3,-22.555]],"v":[[210.3,-22.755],[187.922,-0.378],[210.3,22],[232.078,22],[232.078,-22.555],[210.3,-22.555]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[0.3,-22.378],[-22.078,-12.388],[-12.088,22.378],[22.078,22.378],[22.078,-22.178],[0.3,-22.178]],"o":[[-12.088,-22.378],[-22.078,12.388],[0.3,22.378],[22.078,22.378],[22.078,-22.178],[0.3,-22.178]],"v":[[0.3,-22.378],[-22.078,0],[0.3,22.378],[22.078,22.378],[22.078,-22.178],[0.3,-22.178]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[0.3,-22.378],[-22.078,-12.388],[-12.088,22.378],[22.078,22.378],[22.078,-22.178],[0.3,-22.178]],"o":[[-12.088,-22.378],[-22.078,12.388],[0.3,22.378],[22.078,22.378],[22.078,-22.178],[0.3,-22.178]],"v":[[0.3,-22.378],[-22.078,0],[0.3,22.378],[22.078,22.378],[22.078,-22.178],[0.3,-22.178]],"c":true}]},{"t":125,"s":[{"i":[[210.3,-22.755],[187.922,-12.766],[197.912,22],[232.078,22],[232.078,-22.555],[210.3,-22.555]],"o":[[197.912,-22.755],[187.922,12.01],[210.3,22],[232.078,22],[232.078,-22.555],[210.3,-22.555]],"v":[[210.3,-22.755],[187.922,-0.378],[210.3,22],[232.078,22],[232.078,-22.555],[210.3,-22.555]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.74,0.74,0.74,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1014.341,1127.223],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 4","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1014.341,872.078],"ix":2},"a":{"a":0,"k":[1014.341,872.078],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"PIN_T","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[281.71700000000004,248.831],[18.34,259.026],[-96.107,259.026],[-93.107,-256.026],[21.34,-256.026],[262.73,-251.03],[286.107,-238.043],[289.107,238.856]],"o":[[268.73,250.03],[18.34,259.026],[-96.107,259.026],[-93.107,-256.026],[21.34,-256.026],[275.71700000000004,-249.831],[286.107,-225.056],[289.107,252.043]],"v":[[268.73,250.03],[18.34,259.026],[-96.107,259.026],[-93.107,-256.026],[21.34,-256.026],[262.73,-251.03],[286.107,-225.056],[289.107,238.856]],"c":true}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0},"t":57,"s":[{"i":[[82.717,268.83099999999996],[21.34,274.026],[-93.107,274.026],[-93.107,-274.026],[21.34,-274.026],[69.73,-270.03],[93.107,-257.043],[93.107,243.856]],"o":[[69.73,270.03],[21.34,274.026],[-93.107,274.026],[-93.107,-274.026],[21.34,-274.026],[82.717,-268.83099999999996],[93.107,-244.056],[93.107,257.043]],"v":[[69.73,270.03],[21.34,274.026],[-93.107,274.026],[-93.107,-274.026],[21.34,-274.026],[69.73,-270.03],[93.107,-244.056],[93.107,243.856]],"c":true}]},{"i":{"x":1,"y":1},"o":{"x":1,"y":0},"t":105,"s":[{"i":[[82.717,268.83099999999996],[21.34,274.026],[-93.107,274.026],[-93.107,-274.026],[21.34,-274.026],[69.73,-270.03],[93.107,-257.043],[93.107,243.856]],"o":[[69.73,270.03],[21.34,274.026],[-93.107,274.026],[-93.107,-274.026],[21.34,-274.026],[82.717,-268.83099999999996],[93.107,-244.056],[93.107,257.043]],"v":[[69.73,270.03],[21.34,274.026],[-93.107,274.026],[-93.107,-274.026],[21.34,-274.026],[69.73,-270.03],[93.107,-244.056],[93.107,243.856]],"c":true}]},{"t":125,"s":[{"i":[[281.71700000000004,248.831],[18.34,259.026],[-96.107,259.026],[-93.107,-256.026],[21.34,-256.026],[262.73,-251.03],[286.107,-238.043],[289.107,238.856]],"o":[[268.73,250.03],[18.34,259.026],[-96.107,259.026],[-93.107,-256.026],[21.34,-256.026],[275.71700000000004,-249.831],[286.107,-225.056],[289.107,252.043]],"v":[[268.73,250.03],[18.34,259.026],[-96.107,259.026],[-93.107,-256.026],[21.34,-256.026],[262.73,-251.03],[286.107,-225.056],[289.107,238.856]],"c":true}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.89,0.89,0.89,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[941.714,998.851],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 8","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false,"_render":true}],"ip":0,"op":151,"st":0,"bm":0,"completed":true},{"ddd":0,"ind":6,"ty":4,"nm":"Layer 12","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0.854,-298.288,0],"ix":2},"a":{"a":0,"k":[1000.854,1037.712,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[45.591,36.364],[-33.329,36.364],[-53.309,26.174],[-40.522,-24.575],[-30.732,-36.364],[22.415,-36.364],[38.797999999999995,-31.368],[50.387,14.585]],"o":[[33.204,36.364],[-45.717,36.364],[-50.312,14.585],[-38.924,-31.368],[-22.34,-36.364],[30.807,-36.364],[40.596,-24.575],[53.184,25.974]],"v":[[33.204,36.364],[-33.329,36.364],[-50.312,14.585],[-40.522,-24.575],[-22.34,-36.364],[22.415,-36.364],[40.596,-24.575],[50.387,14.585]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[994.424,1103.646],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[45.527,36.364],[-33.394,36.364],[-53.374,26.174],[-40.587,-24.575],[-30.796,-36.364],[22.55,-36.364],[38.934,-31.368],[50.522,14.585]],"o":[[33.14,36.364],[-45.782,36.364],[-50.377,14.585],[-38.989000000000004,-31.368],[-22.405,-36.364],[30.942,-36.364],[40.732,-24.575],[53.12,25.974]],"v":[[33.14,36.364],[-33.394,36.364],[-50.377,14.585],[-40.587,-24.575],[-22.405,-36.364],[22.55,-36.364],[40.732,-24.575],[50.522,14.585]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1157.325,1176.374],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[45.556999999999995,36.364],[-33.365,36.364],[-53.344,26.174],[-40.557,-24.575],[-30.767,-36.364],[22.579,-36.364],[38.963,-31.368],[50.552,14.585]],"o":[[33.169,36.364],[-45.753,36.364],[-50.347,14.585],[-38.959,-31.368],[-22.375,-36.364],[30.971,-36.364],[40.761,-24.575],[52.949,25.974]],"v":[[33.169,36.364],[-33.365,36.364],[-50.347,14.585],[-40.557,-24.575],[-22.375,-36.364],[22.579,-36.364],[40.761,-24.575],[50.552,14.585]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1052.001,1030.919],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[45.527,36.364],[-33.394,36.364],[-53.374,26.174],[-40.587,-24.575],[-30.796,-36.364],[22.55,-36.364],[38.934,-31.368],[50.522,14.585]],"o":[[33.14,36.364],[-45.782,36.364],[-50.377,14.585],[-38.989000000000004,-31.368],[-22.405,-36.364],[30.942,-36.364],[40.732,-24.575],[53.119,25.974]],"v":[[33.14,36.364],[-33.394,36.364],[-50.377,14.585],[-40.587,-24.575],[-22.405,-36.364],[22.55,-36.364],[40.732,-24.575],[50.522,14.585]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1103.379,1103.646],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 9","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[45.527,36.364],[-33.394,36.364],[-53.374,26.174],[-40.587,-24.575],[-30.797,-36.364],[22.55,-36.364],[38.934,-31.368],[50.522,14.585]],"o":[[33.14,36.364],[-45.782,36.364],[-50.377,14.585],[-38.989000000000004,-31.368],[-22.405,-36.364],[30.942,-36.364],[40.732,-24.575],[53.12,25.974]],"v":[[33.14,36.364],[-33.394,36.364],[-50.377,14.585],[-40.587,-24.575],[-22.405,-36.364],[22.55,-36.364],[40.732,-24.575],[50.522,14.585]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1045.437,1176.374],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 13","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"STROKES","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[45.591,36.364],[-33.329,36.364],[-53.309,26.174],[-40.522,-24.575],[-30.732,-36.364],[22.415,-36.364],[38.797999999999995,-31.368],[50.387,14.585]],"o":[[33.204,36.364],[-45.717,36.364],[-50.312,14.585],[-38.924,-31.368],[-22.34,-36.364],[30.807,-36.364],[40.596,-24.575],[53.184,25.974]],"v":[[33.204,36.364],[-33.329,36.364],[-50.312,14.585],[-40.522,-24.575],[-22.34,-36.364],[22.415,-36.364],[40.596,-24.575],[50.387,14.585]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.75,0.75,0.75,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[994.424,1103.646],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[47.943999999999996,24.575],[35.757,-24.176],[25.966,-35.964],[-27.18,-35.964],[-43.564,-30.968999999999998],[-46.161,-20.779],[-41.566,-21.978],[5.787,-21.978],[22.171,-16.983],[33.759,28.971],[34.558,33.766]],"o":[[45.547,14.985],[34.159,-30.968999999999998],[17.575,-35.964],[-35.572,-35.964],[-45.362,-24.176],[-43.963,-21.578],[-39.168,-21.978],[14.178999999999998,-21.978],[23.969,-10.19],[34.358,31.369],[43.149,33.366]],"v":[[45.547,14.985],[35.757,-24.176],[17.575,-35.964],[-27.18,-35.964],[-45.362,-24.176],[-46.161,-20.779],[-39.168,-21.978],[5.787,-21.978],[23.969,-10.19],[33.759,28.971],[34.158,35.964]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.83,0.83,0.83,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1161.901,1175.974],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[45.527,36.364],[-33.394,36.364],[-53.374,26.174],[-40.587,-24.575],[-30.796,-36.364],[22.55,-36.364],[38.934,-31.368],[50.522,14.585]],"o":[[33.14,36.364],[-45.782,36.364],[-50.377,14.585],[-38.989000000000004,-31.368],[-22.405,-36.364],[30.942,-36.364],[40.732,-24.575],[53.12,25.974]],"v":[[33.14,36.364],[-33.394,36.364],[-50.377,14.585],[-40.587,-24.575],[-22.405,-36.364],[22.55,-36.364],[40.732,-24.575],[50.522,14.585]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.75,0.75,0.75,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1157.325,1176.374],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[47.654,24.775],[35.466,-24.176],[25.674999999999997,-35.964],[-27.671,-35.964],[-44.055,-30.968999999999998],[-45.853,-23.776],[-41.657000000000004,-24.775],[5.496,-24.775],[21.880000000000003,-19.78],[33.468,26.174],[34.267,32.967]],"o":[[45.256,14.985],[33.868,-30.968999999999998],[17.284,-35.964],[-36.063,-35.964],[-45.853,-24.176],[-43.855000000000004,-24.375],[-39.459,-24.775],[13.888,-24.775],[23.678,-12.987],[34.267,29.570999999999998],[42.659,33.565999999999995]],"v":[[45.256,14.985],[35.466,-24.176],[17.284,-35.964],[-27.671,-35.964],[-45.853,-24.176],[-45.853,-23.776],[-39.459,-24.775],[5.496,-24.775],[23.678,-12.987],[33.468,26.174],[33.268,35.964]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.83,0.83,0.83,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1056.897,1030.52],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[45.556999999999995,36.364],[-33.365,36.364],[-53.344,26.174],[-40.557,-24.575],[-30.767,-36.364],[22.579,-36.364],[38.963,-31.368],[50.552,14.585]],"o":[[33.169,36.364],[-45.753,36.364],[-50.347,14.585],[-38.959,-31.368],[-22.375,-36.364],[30.971,-36.364],[40.761,-24.575],[52.949,25.974]],"v":[[33.169,36.364],[-33.365,36.364],[-50.347,14.585],[-40.557,-24.575],[-22.375,-36.364],[22.579,-36.364],[40.761,-24.575],[50.552,14.585]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.75,0.75,0.75,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1052.001,1030.919],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 8","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[47.835,24.476],[35.648,-24.076],[25.857,-35.864],[-27.289,-35.864],[-43.672999999999995,-30.869],[-46.07,-21.678],[-41.275,-23.077],[6.277,-23.077],[22.661,-18.082],[34.249,27.872],[35.049,33.266999999999996]],"o":[[45.438,15.085],[34.050000000000004,-30.869],[17.466,-35.864],[-35.681,-35.864],[-45.471,-24.076],[-43.672,-22.477],[-38.678,-23.077],[14.669,-23.077],[24.459,-11.289],[34.848,30.669],[43.24,33.067]],"v":[[45.438,15.085],[35.648,-24.076],[17.466,-35.864],[-27.289,-35.864],[-45.471,-24.076],[-46.07,-21.678],[-38.678,-23.077],[6.277,-23.077],[24.459,-11.289],[34.249,27.872],[34.649,35.864]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.83,0.83,0.83,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1108.064,1103.147],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 10","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[45.527,36.364],[-33.394,36.364],[-53.374,26.174],[-40.587,-24.575],[-30.796,-36.364],[22.55,-36.364],[38.934,-31.368],[50.522,14.585]],"o":[[33.14,36.364],[-45.782,36.364],[-50.377,14.585],[-38.989000000000004,-31.368],[-22.405,-36.364],[30.942,-36.364],[40.732,-24.575],[53.119,25.974]],"v":[[33.14,36.364],[-33.394,36.364],[-50.377,14.585],[-40.587,-24.575],[-22.405,-36.364],[22.55,-36.364],[40.732,-24.575],[50.522,14.585]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.75,0.75,0.75,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1103.379,1103.646],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 11","np":2,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[19.48,-28.971],[-19.48,-30.769],[-8.092,8.791],[5.894,30.769]],"o":[[19.48,-28.971],[-19.48,-30.769],[-8.092,8.791],[5.894,30.769]],"v":[[19.48,-28.971],[-19.48,-30.769],[-8.092,8.791],[5.894,30.769]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.56,0.56,0.56,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1056.898,1102.048],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 12","np":2,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[47.776,24.975],[35.588,-24.376],[25.796999999999997,-36.164],[-27.549,-36.164],[-43.933,-31.169],[-45.931,-23.377],[-42.334,-23.976],[4.419,-23.976],[20.802999999999997,-18.981],[32.391,26.973],[33.19,33.367000000000004]],"o":[[45.378,14.785],[33.99,-31.169],[17.406,-36.164],[-35.941,-36.164],[-45.731,-24.376],[-44.132999999999996,-23.776999999999997],[-40.536,-23.976],[12.811,-23.976],[22.601,-12.188],[33.19,30.169999999999998],[42.181,34.166000000000004]],"v":[[45.378,14.785],[35.588,-24.376],[17.406,-36.164],[-27.549,-36.164],[-45.731,-24.376],[-45.931,-23.377],[-40.536,-23.976],[4.419,-23.976],[22.601,-12.188],[32.391,26.973],[32.391,36.164]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.83,0.83,0.83,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1050.382,1176.174],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 14","np":2,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[45.527,36.364],[-33.394,36.364],[-53.374,26.174],[-40.587,-24.575],[-30.797,-36.364],[22.55,-36.364],[38.934,-31.368],[50.522,14.585]],"o":[[33.14,36.364],[-45.782,36.364],[-50.377,14.585],[-38.989000000000004,-31.368],[-22.405,-36.364],[30.942,-36.364],[40.732,-24.575],[53.12,25.974]],"v":[[33.14,36.364],[-33.394,36.364],[-50.377,14.585],[-40.587,-24.575],[-22.405,-36.364],[22.55,-36.364],[40.732,-24.575],[50.522,14.585]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.75,0.75,0.75,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1045.437,1176.374],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 15","np":2,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[15.884,-29.87],[-15.884,-29.87],[-3.497,14.885],[2.298,29.87]],"o":[[15.884,-29.87],[-15.884,-29.87],[-3.497,14.885],[2.298,29.87]],"v":[[15.884,-29.87],[-15.884,-29.87],[-3.497,14.885],[2.298,29.87]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.56,0.56,0.56,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1104.451,1173.676],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 16","np":2,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"SOLIDS","np":11,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1104.451,1173.676],"ix":2},"a":{"a":0,"k":[1104.451,1173.676],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":1,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-29.798,3.8370000000000015],[-4.8759999999999994,-28.905],[29.798,-3.8370000000000015],[4.8759999999999994,28.905]],"o":[[-19.996,-22.423000000000002],[22.624000000000002,-18.641],[19.996,22.423000000000002],[-22.624000000000002,18.641]],"v":[[-24.897,-9.293],[8.874,-23.773],[24.897,9.293],[-8.874,23.773]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1142.408,1022.818],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[66.18,-63.137],[39.008,-73.327],[30.616,-64.935],[16.63,-75.325],[-5.548,-89.91],[-11.741,-89.50999999999999],[-39.314,-15.584],[-39.913,-13.986],[-66.487,57.143],[-66.087,63.336999999999996],[-39.114,73.327],[-30.722,64.935],[-16.736,75.325],[5.441,89.91],[11.635,89.50999999999999],[39.207,15.584],[39.807,13.986],[66.38,-57.143]],"o":[[63.183,-64.336],[37.010000000000005,-67.733],[19.427999999999997,-68.93100000000001],[18.628,-80.919],[-8.545,-90.90899999999999],[-12.74,-86.713],[-39.314,-15.584],[-39.913,-13.986],[-67.48599999999999,60.14],[-63.29,64.336],[-37.116,67.733],[-19.534,68.93100000000001],[-18.734,80.919],[8.437999999999999,90.90899999999999],[12.634,86.713],[39.207,15.584],[39.807,13.986],[67.579,-59.94]],"v":[[63.183,-64.336],[39.008,-73.327],[25.022,-66.933],[18.628,-80.919],[-5.548,-89.91],[-12.74,-86.713],[-39.314,-15.584],[-39.913,-13.986],[-66.487,57.143],[-63.29,64.336],[-39.114,73.327],[-25.128,66.933],[-18.734,80.919],[5.441,89.91],[12.634,86.713],[39.207,15.584],[39.807,13.986],[66.38,-57.143]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.67,0.67,0.67,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1142.865,1022.128],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[89.211,-79.121],[-10.29,-116.284],[-21.677999999999997,-115.485],[-56.843,-21.179],[-90.01,67.732],[-89.211,79.121],[10.29,116.284],[21.677999999999997,115.485],[56.843,21.179],[90.01,-67.732]],"o":[[83.816,-81.119],[-15.684999999999999,-118.28200000000001],[-23.676,-110.09],[-56.843,-21.179],[-92.00800000000001,73.127],[-83.816,81.119],[15.684999999999999,118.28200000000001],[23.676,110.09],[56.843,21.179],[92.00800000000001,-73.127]],"v":[[83.816,-81.119],[-10.29,-116.284],[-23.676,-110.09],[-56.843,-21.179],[-90.01,67.732],[-83.816,81.119],[10.29,116.284],[23.676,110.09],[56.843,21.179],[90.01,-67.732]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.5,0.5,0.5,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1142.613,1022.927],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 3","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1116.613,1100.927],"ix":2},"a":{"a":0,"k":[1116.613,1100.927],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.35],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[-17]},{"i":{"x":[0.35],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":62,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.65],"y":[0]},"t":116,"s":[0]},{"t":126,"s":[-17]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-22.653,-19.732],[18.375,-22.838],[22.653,19.732],[-18.375,22.838]],"o":[[3.488999999999999,-29.838],[28.959000000000003,4.538],[-3.488999999999999,29.838],[-28.959000000000003,-4.538]],"v":[[-9.582,-24.785],[23.667,-9.15],[9.582,24.785],[-23.667,9.15]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1208.003,1116.418],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[91.04899999999999,7.592],[80.66,-19.58],[68.872,-20.18],[67.27300000000001,-37.562],[63.477,-63.936],[61.307,-66.87],[57.396,-67.61],[-14.445,-39.76],[-16.043,-39.161],[-86.773,-11.788],[-91.16799999999999,-7.3919999999999995],[-80.579,19.58],[-68.791,20.18],[-67.19300000000001,37.562],[-63.396,63.936],[-59,68.332],[14.526,39.76],[16.124,39.161],[59.076,22.538],[86.854,11.788]],"o":[[90.05,4.595],[75.066,-17.381999999999998],[64.47600000000001,-31.368000000000002],[72.867,-39.76],[62.754999999999995,-65.621],[58.571,-67.643],[56.284,-67.133],[-14.445,-39.76],[-16.043,-39.161],[-89.57,-10.589],[-89.969,-4.595],[-74.985,17.381999999999998],[-64.39500000000001,31.368000000000002],[-72.787,39.76],[-62.197,66.733],[-56.203,67.133],[14.526,39.76],[16.124,39.161],[59.076,22.538],[89.651,10.789]],"v":[[90.05,4.595],[80.66,-19.58],[66.674,-25.774],[72.867,-39.76],[63.477,-63.936],[59.659,-67.336],[56.284,-67.133],[-14.445,-39.76],[-16.043,-39.161],[-86.773,-11.788],[-89.969,-4.595],[-80.579,19.58],[-66.593,25.774],[-72.787,39.76],[-63.396,63.936],[-56.203,67.133],[14.526,39.76],[16.124,39.161],[59.076,22.538],[86.854,11.788]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.67,0.67,0.67,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1209.105,1116.034],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[118.541,14.186],[80.179,-84.915],[71.987,-92.90700000000001],[60.167,-88.414],[-21.919,-56.543],[-110.43,-22.378],[-118.42200000000001,-14.186],[-80.261,84.915],[-72.069,92.90700000000001],[21.837,56.743],[60.471,41.83],[110.348,22.577]],"o":[[116.343,8.791],[78.181,-90.31],[66.592,-90.909],[60.167,-88.414],[-21.919,-56.543],[-115.825,-20.38],[-116.424,-8.791],[-78.26299999999999,90.31],[-66.674,90.909],[21.837,56.743],[60.471,41.83],[115.743,20.179000000000002]],"v":[[116.343,8.791],[80.179,-84.915],[66.592,-90.909],[60.167,-88.414],[-21.919,-56.543],[-110.43,-22.378],[-116.424,-8.791],[-80.261,84.915],[-66.674,90.909],[21.837,56.743],[60.471,41.83],[110.348,22.577]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.5,0.5,0.5,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1208.188,1116.433],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 3","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1129.188,1143.433],"ix":2},"a":{"a":0,"k":[1129.188,1143.433],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.35],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[-44]},{"i":{"x":[0.35],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":62,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.65],"y":[0]},"t":116,"s":[0]},{"t":126,"s":[-44]}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 3","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[252.987,-27.123],[206.733,30.719],[206.713,30.719],[195.704,23.227],[-187.832,23.227],[-202.377,25.804],[-258.781,-22.208],[-245.834,-30.719],[236.204,-30.719]],"o":[[258.781,-21.329],[206.733,30.719],[202.078,26.104],[188.691,23.227],[-196.204,23.227],[-206.553,30.02],[-253.566,-27.482999999999997],[-235.324,-30.719],[244.995,-30.719]],"v":[[258.781,-21.329],[206.733,30.719],[206.713,30.719],[188.691,23.227],[-187.832,23.227],[-206.553,30.02],[-258.781,-22.208],[-235.324,-30.719],[236.204,-30.719]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.48,0.48,0.48,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.421,761.938],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-26.08,26.08],[26.08,-26.08]],"o":[[-26.08,26.08],[26.08,-26.08]],"v":[[-26.08,26.08],[26.08,-26.08]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":13.538,"ix":5},"lc":1,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[768.701,1231.104],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[26.027,26.027],[-26.027,-26.027]],"o":[[26.027,26.027],[-26.027,-26.027]],"v":[[26.027,26.027],[-26.027,-26.027]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":13.538,"ix":5},"lc":1,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1233.169,1231.266],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[213.786,-195.284],[213.786,188.251],[210.90900000000002,201.65900000000002],[206.274,206.294],[195.26500000000001,213.786],[-188.271,213.786],[-201.65900000000002,210.90900000000002],[-213.786,195.284],[-213.786,-188.251],[-211.628,-202.31799999999998],[-196.64299999999997,-213.786],[188.252,-213.786],[201.639,-210.90900000000002],[206.294,-206.294]],"o":[[213.786,-188.251],[213.786,195.284],[206.294,206.294],[201.639,210.90900000000002],[188.252,213.786],[-195.284,213.786],[-210.90900000000002,201.65900000000002],[-213.786,188.251],[-213.786,-195.644],[-202.817,-211.209],[-188.271,-213.786],[195.26500000000001,-213.786],[206.274,-206.294],[210.90900000000002,-201.65900000000002]],"v":[[213.786,-188.251],[213.786,188.251],[206.294,206.294],[206.274,206.294],[188.252,213.786],[-188.271,213.786],[-206.294,206.294],[-213.786,188.251],[-213.786,-188.251],[-206.993,-206.993],[-188.271,-213.786],[188.252,-213.786],[206.274,-206.294],[206.294,-206.294]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.6,0.6,0.6,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.86,998.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 4","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[267.732,-248.811],[267.732,231.508],[264.135,248.292],[244.555,263.476],[-235.764,263.476],[-267.732,249.09],[-267.732,-240.02],[-265.015,-257.622],[-206.993,-211.249],[-196.64299999999997,-218.042],[188.252,-218.042],[201.638,-215.16400000000002],[206.294,-210.549],[258.341,-262.597]],"o":[[267.732,-240.02],[267.732,240.299],[252.547,259.88],[235.764,263.476],[-253.346,263.476],[-267.732,231.508],[-267.732,-249.27100000000002],[-259.221,-263.476],[-202.817,-215.465],[-188.271,-218.042],[195.26500000000001,-218.042],[206.273,-210.549],[206.294,-210.549],[264.135,-256.803]],"v":[[267.732,-240.02],[267.732,231.508],[258.341,254.086],[235.764,263.476],[-235.764,263.476],[-267.732,231.508],[-267.732,-240.02],[-259.221,-263.476],[-206.993,-211.249],[-188.271,-218.042],[188.252,-218.042],[206.273,-210.549],[206.294,-210.549],[258.341,-262.597]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.74,0.74,0.74,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.86,1003.207],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 5","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.86,1003.207],"ix":2},"a":{"a":0,"k":[1000.86,1003.207],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[303.896,339.66],[-259.74,339.66],[-339.66,303.896],[-339.66,-259.74],[-303.896,-339.66],[259.74,-339.66],[339.66,-303.896],[339.66,259.74]],"o":[[259.74,339.66],[-303.896,339.66],[-339.66,259.74],[-339.66,-303.896],[-259.74,-339.66],[303.896,-339.66],[339.66,-259.74],[339.66,303.896]],"v":[[259.74,339.66],[-259.74,339.66],[-339.66,259.74],[-339.66,-259.74],[-259.74,-339.66],[259.74,-339.66],[339.66,-259.74],[339.66,259.74]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,998.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[303.896,16.983],[-259.74,16.983],[-339.66,-18.781],[-339.66,-16.983],[-303.896,62.937],[259.74,62.937],[339.66,27.173],[339.66,-62.937]],"o":[[259.74,16.983],[-303.896,16.983],[-339.66,-62.937],[-339.66,27.173],[-259.74,62.937],[303.896,62.937],[339.66,-16.983],[339.66,-18.781]],"v":[[259.74,16.983],[-259.74,16.983],[-339.66,-62.937],[-339.66,-16.983],[-259.74,62.937],[259.74,62.937],[339.66,-16.983],[339.66,-62.937]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.74,0.74,0.74,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,1275.674],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[303.896,-62.937],[-259.74,-62.937],[-339.66,-27.173],[-339.66,62.937],[-303.896,-16.983],[259.74,-16.983],[339.66,18.781],[339.66,16.983]],"o":[[259.74,-62.937],[-303.896,-62.937],[-339.66,16.983],[-339.66,18.781],[-259.74,-16.983],[303.896,-16.983],[339.66,62.937],[339.66,-27.173]],"v":[[259.74,-62.937],[-259.74,-62.937],[-339.66,16.983],[-339.66,62.937],[-259.74,-16.983],[259.74,-16.983],[339.66,62.937],[339.66,16.983]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.95,0.95,0.95,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,722.228],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[303.896,339.66],[-259.74,339.66],[-339.66,303.896],[-339.66,-259.74],[-303.896,-339.66],[259.74,-339.66],[339.66,-303.896],[339.66,259.74]],"o":[[259.74,339.66],[-303.896,339.66],[-339.66,259.74],[-339.66,-303.896],[-259.74,-339.66],[303.896,-339.66],[339.66,-259.74],[339.66,303.896]],"v":[[259.74,339.66],[-259.74,339.66],[-339.66,259.74],[-339.66,-259.74],[-259.74,-339.66],[259.74,-339.66],[339.66,-259.74],[339.66,259.74]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.89,0.89,0.89,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,998.951],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 4","np":3,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,998.951],"ix":2},"a":{"a":0,"k":[1000.854,998.951],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,1370.579],"ix":2},"a":{"a":0,"k":[1000.854,1370.579],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 4","np":3,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false,"_render":true}],"ip":0,"op":151,"st":0,"bm":0,"completed":true},{"ddd":0,"ind":7,"ty":4,"nm":"Layer 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1000.854,1037.712,0],"ix":2},"a":{"a":0,"k":[1000.854,1037.712,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-77.922,-7.193],[-77.922,-21.978],[-72.527,-33.966],[65.934,-33.966],[77.922,-28.571],[77.922,21.978],[72.527,33.966],[-21.778,33.966],[-40.56,30.169999999999998]],"o":[[-77.922,-7.193],[-77.922,-28.571],[-65.934,-33.966],[72.527,-33.966],[77.922,-21.978],[77.922,28.571],[65.934,33.966],[-31.368,33.966],[-47.353,23.377]],"v":[[-77.922,-7.193],[-77.922,-21.978],[-65.934,-33.966],[65.934,-33.966],[77.922,-21.978],[77.922,21.978],[65.934,33.966],[-21.778,33.966],[-47.353,23.377]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.74,0.74,0.74,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1159.695,1345.604],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[77.922,-7.193],[77.922,-21.978],[72.527,-33.966],[-65.934,-33.966],[-77.922,-28.571],[-77.922,21.978],[-72.527,33.966],[21.778,33.966],[40.56,30.169999999999998]],"o":[[77.922,-7.193],[77.922,-28.571],[65.934,-33.966],[-72.527,-33.966],[-77.922,-21.978],[-77.922,28.571],[-65.934,33.966],[31.368,33.966],[47.353,23.377]],"v":[[77.922,-7.193],[77.922,-21.978],[65.934,-33.966],[-65.934,-33.966],[-77.922,-21.978],[-77.922,21.978],[-65.934,33.966],[21.778,33.966],[47.353,23.377]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"st","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":11.988,"ix":5},"lc":1,"lj":1,"ml":10,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.74,0.74,0.74,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[842.013,1345.604],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 2","np":3,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-201.493,-45.554],[364.835,-25.159],[201.493,45.554],[-364.835,25.159]],"o":[[201.493,-45.554],[364.835,25.159],[-201.493,45.554],[-364.835,-25.159]],"v":[[0,-45.554],[364.835,0],[0,45.554],[-364.835,0]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false,"_render":true},{"ty":"fl","c":{"a":0,"k":[0.23,0.23,0.23,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,1370.579],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,1370.579],"ix":2},"a":{"a":0,"k":[1000.854,1370.579],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 3","np":3,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false,"_render":true},{"ty":"tr","p":{"a":0,"k":[1000.854,1370.579],"ix":2},"a":{"a":0,"k":[1000.854,1370.579],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform","_render":true}],"nm":"Group 4","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false,"_render":true}],"ip":0,"op":151,"st":0,"bm":0,"completed":true}],"markers":[],"__complete":true}'
        ),
        E = JSON.parse(
          '{"nm":"Untitled file","ddd":0,"h":50,"w":50,"meta":{"g":"@lottiefiles/creator 1.12.0"},"layers":[{"ty":0,"nm":" Lottie-Experiment","sr":1,"st":0,"op":180,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[74.99549999999999,74.9985]},"s":{"a":0,"k":[100,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,50]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"w":150,"h":150,"refId":"precomp_Lottie-Experiment_a8d8e962-9538-4034-a3f3-2ac899414103","ind":1}],"v":"5.7.0","fr":30,"op":180,"ip":0,"assets":[{"nm":"Lottie-Experiment","id":"precomp_Lottie-Experiment_a8d8e962-9538-4034-a3f3-2ac899414103","fr":90,"layers":[{"ty":4,"nm":"Formebene 1","sr":1,"st":0,"op":181,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"o":{"x":0.255,"y":0},"i":{"x":0,"y":1},"s":[0,0,100],"t":75},{"s":[90,90,100],"t":90}],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[49.879999999999995,49.06999999999999],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":70},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":75},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[100],"t":85},{"s":[0],"t":100}],"ix":11}},"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Ellipse 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Pfad 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[-13.25,0],[0,-13.25],[13.25,0],[0,13.25]],"o":[[13.25,0],[0,13.25],[-13.25,0],[0,-13.25]],"v":[[0,-23.992],[23.992,0],[0,23.992],[-23.992,0]]},"ix":2}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Pfade trimmen 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":65},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[19],"t":75},{"s":[24],"t":90}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[0],"t":65},{"o":{"x":0.167,"y":0.167},"i":{"x":0.833,"y":0.833},"s":[15],"t":75},{"s":[12],"t":90}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Kontur 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5},"c":{"a":0,"k":[1,1,1],"ix":3}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[0.117,0.867],"ix":2},"r":{"a":0,"k":0,"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":1},{"ty":4,"nm":"unlock Konturen","sr":1,"st":0,"op":181,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[42,42,0],"ix":1},"s":{"a":0,"k":[150,150,100],"ix":6},"sk":{"a":0,"k":0},"p":{"a":0,"k":[50,56],"ix":2},"r":{"a":0,"k":0,"ix":10},"sa":{"a":0,"k":0},"o":{"a":0,"k":100,"ix":11}},"shapes":[{"ty":"gr","bm":0,"hd":false,"mn":"ADBE Vector Group","nm":"Gruppe 1","ix":1,"cix":2,"np":4,"it":[{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Pfad 1","ix":1,"d":1,"ks":{"a":0,"k":{"c":true,"i":[[0,0],[0.678,-0.016],[0,0],[0.017,0.678],[0,0],[-0.68,0.015],[0,0],[-0.017,-0.679]],"o":[[-0.019,0.678],[0,0],[-0.679,-0.016],[0,0],[0.015,-0.68],[0,0],[0.679,0.016],[0,0]],"v":[[1.378,4.716],[0.135,5.956],[-0.114,5.956],[-1.356,4.716],[-1.356,2.651],[-0.114,1.409],[0.136,1.409],[1.378,2.651]]},"ix":2}},{"ty":"sh","bm":0,"hd":false,"mn":"ADBE Vector Shape - Group","nm":"Pfad 2","ix":2,"d":1,"ks":{"a":1,"k":[{"o":{"x":1,"y":0},"i":{"x":0.887,"y":1},"s":[{"c":true,"i":[[0.849,0.061],[0,0],[0,0],[0,0],[-1.419,-0.028],[-0.027,-1.379],[0,0],[0,0],[0,0],[0,0],[2.957,0],[0,-2.975],[0,0],[0,0],[0.004,-0.913],[0,0],[-0.913,-0.002],[0,0],[-0.004,0.913],[0,0]],"o":[[0,0],[0,0],[0,0],[0.028,-1.418],[1.379,0.027],[0,0],[0,0],[0,0],[0,0],[-0.03,-2.95],[-2.975,0],[0,0],[0,0],[-0.913,0.001],[0,0],[0.004,0.913],[0,0],[0.913,-0.002],[0,0],[0.06,-0.849]],"v":[[6.415,-1.06],[6.268,-1.06],[-2.514,-1.06],[-2.514,-3.62],[0.105,-6.138],[2.623,-3.62],[2.609,-3.544],[5.424,-3.544],[5.438,-3.677],[5.433,-3.677],[0.052,-9.012],[-5.335,-3.625],[-5.335,-1.064],[-6.246,-1.064],[-7.903,0.587],[-7.903,7.36],[-6.246,9.012],[6.186,9.012],[7.843,7.36],[7.843,0.587]]}],"t":50},{"s":[{"c":true,"i":[[0.849,0.061],[0,0],[0,0],[0,0],[-1.419,-0.028],[-0.027,-1.379],[0,0],[0,0],[0,0],[0,0],[2.957,0],[0,-2.975],[0,0],[0,0],[0.004,-0.913],[0,0],[-0.913,-0.002],[0,0],[-0.004,0.913],[0,0]],"o":[[0,0],[0,0],[0,0],[0.028,-1.418],[1.379,0.027],[0,0],[0,0],[0,0],[0,0],[-0.03,-2.95],[-2.975,0],[0,0],[0,0],[-0.913,0.001],[0,0],[0.004,0.913],[0,0],[0.913,-0.002],[0,0],[0.06,-0.849]],"v":[[6.415,-1.06],[6.268,-1.06],[-2.514,-1.06],[-2.514,-3.62],[0.105,-6.138],[2.623,-3.62],[2.626,-0.854],[5.441,-0.854],[5.438,-3.677],[5.433,-3.677],[0.052,-9.012],[-5.335,-3.625],[-5.335,-1.064],[-6.246,-1.064],[-7.903,0.587],[-7.903,7.36],[-6.246,9.012],[6.186,9.012],[7.843,7.36],[7.843,0.587]]}],"t":80}],"ix":2}},{"ty":"mm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Merge","nm":"Pfade zusammenf\xc3\xbchren 1","mm":1},{"ty":"fl","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Fill","nm":"Fl\xc3\xa4che 1","c":{"a":0,"k":[1,1,1],"ix":4},"r":1,"o":{"a":0,"k":100,"ix":5}},{"ty":"tr","a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"sk":{"a":0,"k":0,"ix":4},"p":{"a":0,"k":[41.905,37.013],"ix":2},"r":{"a":1,"k":[{"o":{"x":0.421,"y":0},"i":{"x":0.013,"y":1},"s":[0],"t":30},{"o":{"x":0.167,"y":0.167},"i":{"x":0.246,"y":1},"s":[-20],"t":62},{"s":[0],"t":90}],"ix":6},"sa":{"a":0,"k":0,"ix":5},"o":{"a":0,"k":100,"ix":7}}]}],"ind":2}]}]}'
        );
      let B = v()(
        () => Promise.all([t.e(3349), t.e(51)]).then(t.bind(t, 90051)),
        { loadableGenerated: { webpack: () => [90051] }, ssr: !1 }
      );
      var step_3 = function (e) {
          let { goBack: r, user: t } = e,
            { push: a } = (0, g.useRouter)();
          return (0, i.jsxs)("div", {
            className: "w-full",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex flex-col sm:flex-row items-center sm:items-start justify-center relative gap-6 animate-fadein max-w-[800px] mx-auto",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "flex flex-1 flex-col text-white justify-center items-start gap-4",
                    children: (0, i.jsx)(B, {
                      done: !!(
                        (null == t ? void 0 : t.deposits) &&
                        (null == t ? void 0 : t.deposits) > 0
                      ),
                      taskNumber: 1,
                      title: "Deposit any amount",
                      optional:
                        "Click below to explore our vaults and pick your favorite based on your preferences.",
                      button: {
                        text: "Go To Vaults",
                        lottie: G,
                        absolute: !0,
                        href: "/",
                      },
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "self-stretch gradient-border-vertical !h-auto",
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "flex-1 flex flex-col items-start justify-start gap-4",
                    children: (0, i.jsx)(B, {
                      done: !!(
                        (null == t ? void 0 : t.bonds) &&
                        (null == t ? void 0 : t.bonds) > 0
                      ),
                      taskNumber: 2,
                      title: "Bond your deposit",
                      optional:
                        "After you've deposited, come back to this page and bond your deposit.",
                      button: { text: "Bond Deposit", lottie: E, href: "/" },
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "flex items-center justify-center mt-8 gap-4",
                children: [
                  (0, i.jsx)("div", {
                    className: "hover-button-wrapper !mt-0",
                    children: (0, i.jsx)("button", {
                      onClick: r,
                      className: "hover-button !h-[40px] w-[90px]",
                      children: "Go Back",
                    }),
                  }),
                  (0, i.jsx)(_(), {
                    href: "/space-race",
                    onClick: (e) => {
                      e.preventDefault(),
                        e.ctrlKey || e.metaKey || a("/"),
                        window.open("/space-race", "_blank");
                    },
                    className:
                      "moving-bg w-[153px] h-[40px] rounded-[5px] border-none outline-none !text-white items-center justify-center font-bold font-RussoOne text-[14px] flex",
                    children: "Go to Space Race",
                  }),
                ],
              }),
            ],
          });
        },
        getBrowserType = function () {
          let [e, r] = (0, d.useState)("unknown");
          return (
            (0, d.useEffect)(() => {
              let e = window.navigator.userAgent;
              e.indexOf("Firefox") > -1
                ? r("Firefox")
                : e.indexOf("Opera") > -1 || e.indexOf("OPR") > -1
                ? r("Opera")
                : e.indexOf("Trident") > -1
                ? r("IE")
                : e.indexOf("Edge") > -1
                ? r("Edge")
                : e.indexOf("Chrome") > -1
                ? r("Chrome")
                : e.indexOf("Safari") > -1
                ? r("Safari")
                : r("unknown");
            }, []),
            { browserType: e }
          );
        },
        D = t(58791),
        A = t(52690),
        V = t(59581),
        w = t.n(V),
        S = t(6743),
        j = t(43493),
        _invite_ = function (e) {
          var r, t, u;
          let {} = e,
            [m, k] = d.useState(1),
            [p, { isLoading: y }] = (0, D.F4)(),
            [_, b] = d.useState(!1),
            handleSendTwitterPost = async () => {
              await p({ address: null != v ? v : "" })
                .unwrap()
                .then((e) => {
                  e
                    ? (0, h.x)("Tweet published", "success")
                    : (0, h.x)("Tweet Could not be published", "error");
                })
                .catch((e) => {
                  (0, h.x)("Tweet Could not be published", "error");
                });
            },
            { address: v } = (0, S.Z)(),
            { openConnectModal: G, connectModalOpen: E } = (0, A.We)(),
            {
              data: B,
              isFetching: V,
              startedTimeStamp: F,
              isError: T,
              refetch: P,
            } = (0, D.Nf)(
              { address: null != v ? v : "" },
              { refetchOnFocus: !0 }
            );
          (0, d.useEffect)(() => {
            (!v || !B || T) && m > 1 && k(1);
          }, [v, B, T, F]),
            (0, d.useEffect)(() => {
              B &&
                B.signature &&
                B.signature.length > 4 &&
                !T &&
                !E &&
                1 === m &&
                v &&
                k(2);
            }, [B, E, m, v, F]);
          let [N, { isLoading: C, isSuccess: O }] = (0, D.ny)(),
            [R, L] = d.useState(!1),
            [M, Z] = d.useState("");
          (0, d.useEffect)(() => {
            B && B.email && Z(B.email);
          }, [B]);
          let checkSocials = async () => {
              L(!0),
                setTimeout(() => {
                  L(!1), k(3);
                }, 1e3);
            },
            { query: I, replace: U } = (0, g.useRouter)(),
            { invite: Y, twitter: W, discord: z } = I,
            [K, { isLoading: X, data: q }] = (0, D.Zf)();
          (0, d.useEffect)(() => {
            let e = Y ? Y[0] : "";
            if ("string" == typeof e && !X) {
              if (
                e.length < 1 ||
                (null == B ? void 0 : B.referralCode) === e ||
                (null == B ? void 0 : B.customReferralLink) === e
              )
                return;
              K({ referralCode: e });
            }
          }, [Y]);
          let { browserType: H } = getBrowserType();
          return (
            (0, j.N)({
              redirectPath: "/space-race-onboarding",
              preserveParams: ["invite"],
            }),
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsxs)("main", {
                children: [
                  B &&
                    _ &&
                    (0, i.jsx)(s.Z, {
                      referralCode: null == B ? void 0 : B.referralCode,
                      open: _,
                      onSend: handleSendTwitterPost,
                      loading: y,
                      onClose: () => {
                        b(!1);
                      },
                    }),
                  (0, i.jsxs)(c.Z, {
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "flex w-full items-center justify-center flex-c",
                        children: (0, i.jsx)(o.Z, {}),
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-[1200px] mx-auto",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "flex-1 ".concat(
                              1 === m &&
                                "flex flex-col justify-start items-start"
                            ),
                            children: [
                              (0, i.jsx)(a.Z, {
                                className: "".concat(
                                  1 === m
                                    ? "!min-h-fit mt-[10px] lg:mt-[100px] lg:!max-w-full"
                                    : "!min-h-fit mt-[30px]"
                                ),
                                secondTextClassName: "".concat(
                                  1 === m && "lg:!text-start",
                                  " !text-[#CECED8] lg:!text-white "
                                ),
                                contentBoxClassName: "".concat(
                                  1 === m && "lg:!max-w-[500px] lg:!mx-auto"
                                ),
                                noButton: !0,
                                reducedHeight: !0,
                                showHeader: !1,
                                title: (0, i.jsxs)("h1", {
                                  className:
                                    "text-[26px] w-full font-normal font-RussoOne text-center lg:text-start leading-[32px] lg:leading-[50px]",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className:
                                        "text-[26px] w-full gradient-text font-normal font-RussoOne hidden lg:block",
                                      children: "Welcome to the Space Race",
                                    }),
                                    (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        (0, i.jsx)("span", {
                                          className:
                                            "text-[26px] w-full text-white gradient-text-break font-normal font-RussoOne lg:hidden",
                                          children: "Welcome to the",
                                        }),
                                        " ",
                                        (0, i.jsx)("br", {
                                          className: "lg:hidden",
                                        }),
                                        (0, i.jsx)("span", {
                                          className:
                                            "text-[26px] w-full gradient-text font-normal font-RussoOne lg:hidden",
                                          children: "Space Race",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                description:
                                  1 === m
                                    ? "Let AI Agents do the work and optimize for Omnichain yield!"
                                    : "",
                              }),
                              (0, i.jsxs)("div", {
                                className:
                                  "w-full max-w-[calc(991px+64px)] px-8 mx-auto relative mb-24",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "w-full hidden lg:block",
                                    children:
                                      1 === m &&
                                      (0, i.jsx)(i.Fragment, {
                                        children: X
                                          ? (0, i.jsx)(x.Z, {
                                              className:
                                                "w-10 animate-fadeinFast h-10 mx-auto flex justify-center mb-8",
                                            })
                                          : (null == q ? void 0 : q.user) &&
                                            (null == q
                                              ? void 0
                                              : q.user.address) !=
                                              (null == B
                                                ? void 0
                                                : B.address) &&
                                            (0, i.jsxs)("div", {
                                              className:
                                                "flex max-w-[500px] mx-auto animate-fadeinFast mt-2 items-start justify-center lg:justify-start gap-2 mb-8",
                                              children: [
                                                (0, i.jsx)(w(), {
                                                  draggable: !1,
                                                  src: "/info-outline.svg",
                                                  alt: "info",
                                                  width: 20,
                                                  height: 20,
                                                  className:
                                                    "object-contain invert-[0.5] mt-[3px]",
                                                }),
                                                (0, i.jsxs)("p", {
                                                  className:
                                                    "font-normal max-w-[324px] font-EuclidCircularB text-[14px] text-start leading-[17px] lg:leading-6 text-[#FFFFFF80]",
                                                  children: [
                                                    "You are being referred by user",
                                                    " ",
                                                    null == q
                                                      ? void 0
                                                      : null === (r = q.user) ||
                                                        void 0 === r
                                                      ? void 0
                                                      : r.address,
                                                    ". You will be earning 10% more points.",
                                                  ],
                                                }),
                                              ],
                                            }),
                                      }),
                                  }),
                                  1 === m &&
                                    (0, i.jsx)("p", {
                                      className:
                                        "text-white text-[14px] mb-12 font-light font-EuclidCircularB sm:text-[16px] text-center lg:text-start animate-fadein max-w-[500px] mx-auto ",
                                    }),
                                  2 === m &&
                                    (0, i.jsx)("p", {
                                      className:
                                        "text-white text-[14px] mb-14 font-light font-EuclidCircularB sm:text-[16px] text-center animate-fadein max-w-[500px] mx-auto leading-6",
                                      children:
                                        "You can optionally connect your X account, email, or discord to receive points immediately",
                                    }),
                                  3 === m &&
                                    (0, i.jsx)("p", {
                                      className:
                                        "text-white text-[14px] mb-14 font-light font-EuclidCircularB sm:text-[16px] text-center animate-fadein max-w-[500px] mx-auto leading-6",
                                      children:
                                        "You can deposit now and start earning immediately. Bond your deposit for extra rewards.",
                                    }),
                                  1 === m &&
                                    (0, i.jsx)(step_1, {
                                      address: v,
                                      openConnectModal: G,
                                      loading: C,
                                      goNext: (e) => {
                                        if (v && !R && !C && !V && e) {
                                          let r = Y ? Y[0] : "";
                                          N({
                                            address: v,
                                            signature: e,
                                            referralCode:
                                              "string" == typeof r ? r : void 0,
                                          })
                                            .unwrap()
                                            .then(() => {
                                              P().then(() => {
                                                k(2);
                                              });
                                            })
                                            .catch((e) => {
                                              (0, h.x)(
                                                "Error creating user",
                                                "error"
                                              );
                                            });
                                        }
                                      },
                                    }),
                                  2 === m &&
                                    (0, i.jsx)(f.Z, {
                                      locked: !!(null == B
                                        ? void 0
                                        : B.lockedPoints),
                                      twitterPostDisabled: !!(null == B
                                        ? void 0
                                        : B.twitterPostUrl),
                                      twitterPostLoading: y,
                                      sendTwitterPost: () =>
                                        setTimeout(() => b(!0), 50),
                                      twitterDisabled: !!(null == B
                                        ? void 0
                                        : B.twitter),
                                      discordVerified: !!(null == B
                                        ? void 0
                                        : B.discordVerified),
                                      discordDisabled: !!(null == B
                                        ? void 0
                                        : B.discord),
                                      emailDisabled: !!(null == B
                                        ? void 0
                                        : B.email),
                                      twitterPostUrl:
                                        null == B ? void 0 : B.twitterPostUrl,
                                      address: null != v ? v : "",
                                      loading: R,
                                      goNext: checkSocials,
                                      email: M,
                                      setEmail: Z,
                                      bonded:
                                        (null !==
                                          (u = null == B ? void 0 : B.bonds) &&
                                        void 0 !== u
                                          ? u
                                          : 0) > 0,
                                      hasTwitterToken: !!(null == B
                                        ? void 0
                                        : B.hasTwitterToken),
                                      isWhiteListed: !0,
                                      copyReferralLink: () => {
                                        if (
                                          !(null == B
                                            ? void 0
                                            : B.customReferralLink) &&
                                          !(null == B ? void 0 : B.referralCode)
                                        )
                                          return;
                                        let e = window.location.origin;
                                        navigator.clipboard
                                          .writeText(
                                            ""
                                              .concat(
                                                e,
                                                "/space-race-onboarding/"
                                              )
                                              .concat(
                                                (null == B
                                                  ? void 0
                                                  : B.customReferralLink) ||
                                                  (null == B
                                                    ? void 0
                                                    : B.referralCode)
                                              )
                                          )
                                          .then(() => {
                                            (0, h.x)(
                                              "Copied to clipboard",
                                              "success"
                                            );
                                          })
                                          .catch(() => {
                                            (0, h.x)(
                                              "Error copying to clipboard",
                                              "error"
                                            );
                                          });
                                      },
                                      userData: B,
                                    }),
                                  3 === m &&
                                    (0, i.jsx)(step_3, {
                                      goBack: () => k(2),
                                      user: B,
                                    }),
                                  (0, i.jsx)("div", {
                                    className: "w-full lg:hidden mt-12",
                                    children:
                                      1 === m &&
                                      (0, i.jsx)(i.Fragment, {
                                        children: X
                                          ? (0, i.jsx)(x.Z, {
                                              className:
                                                "w-10 animate-fadeinFast h-10 mx-auto flex justify-center",
                                            })
                                          : (null == q ? void 0 : q.user) &&
                                            (null == q
                                              ? void 0
                                              : q.user.address) !=
                                              (null == B
                                                ? void 0
                                                : B.address) &&
                                            (0, i.jsxs)("div", {
                                              className:
                                                "flex max-w-[500px] mx-auto animate-fadeinFast mt-2 items-start justify-center lg:justify-start gap-2",
                                              children: [
                                                (0, i.jsx)(w(), {
                                                  draggable: !1,
                                                  src: "/info-outline.svg",
                                                  alt: "info",
                                                  width: 20,
                                                  height: 20,
                                                  className:
                                                    "object-contain invert-[0.5] mt-[3px]",
                                                }),
                                                (0, i.jsxs)("p", {
                                                  className:
                                                    "font-normal max-w-[324px] font-EuclidCircularB text-[14px] text-start leading-[17px] lg:leading-6 text-[#FFFFFF80]",
                                                  children: [
                                                    "You are being referred by user",
                                                    " ",
                                                    null == q
                                                      ? void 0
                                                      : null === (t = q.user) ||
                                                        void 0 === t
                                                      ? void 0
                                                      : t.address,
                                                    ". You will be earning 10% more points.",
                                                  ],
                                                }),
                                              ],
                                            }),
                                      }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          1 === m &&
                            (0, i.jsx)("div", {
                              className:
                                "animate-fadeinFast mt-[30px] lg:mt-0 flex-1 self-stretch relative flex items-center justify-center lg:justify-start",
                              children:
                                "Safari" === H
                                  ? (0, i.jsx)(w(), {
                                      src: "/Spacerace.png",
                                      fill: !0,
                                      alt: "step-1",
                                      className:
                                        "max-h-[432px] mx-auto lg:mx-[50px] max-w-[432px] object-contain object-center !w-[35%] lg:!w-full h-full !relative",
                                    })
                                  : (0, i.jsx)("div", {
                                      className:
                                        "rounded-full image-container overflow-hidden max-h-[432px] mx-auto lg:mx-[50px] max-w-[432px] object-contain object-center !w-[35%] lg:!w-full h-full !relative",
                                      children: (0, i.jsx)(l.Z, {
                                        className: "w-full h-full",
                                        src: "/Spaceracev3.webm",
                                      }),
                                    }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(n.Z, {}),
                ],
              }),
            })
          );
        };
    },
    88562: function (e) {
      e.exports = {
        D_Banner_Container: "dynamic-banner_D_Banner_Container__Eq26y",
        D_Banner_Container_Reduced:
          "dynamic-banner_D_Banner_Container_Reduced__E4igN",
        D_Banner_Content_Box: "dynamic-banner_D_Banner_Content_Box__y9ElC",
        D_Banner_Content_Title: "dynamic-banner_D_Banner_Content_Title__1wZ__",
        D_Banner_Content_Description:
          "dynamic-banner_D_Banner_Content_Description__nbOdx",
        D_Banner_Content_Action_button_wrapper:
          "dynamic-banner_D_Banner_Content_Action_button_wrapper__d4ZRz",
        D_Banner_Content_Action_button:
          "dynamic-banner_D_Banner_Content_Action_button__U2qLv",
        color_2: "dynamic-banner_color_2__mawlh",
        color_1: "dynamic-banner_color_1__1XyC8",
      };
    },
    58170: function (e, r, t) {
      e.exports = t(87027);
    },
  },
  function (e) {
    e.O(0, [5881, 1233, 9022, 9774, 2888, 179], function () {
      return e((e.s = 67126));
    }),
      (_N_E = e.O());
  },
]);
