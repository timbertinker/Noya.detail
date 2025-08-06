(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7832],
  {
    35529: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return Footer;
        },
      });
      var r = o(11527),
        a = o(89666),
        n = o.n(a),
        s = {
          src: "/_next/static/media/Noya.b5912bbb.png",
          height: 95,
          width: 256,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEX19fXx8fH09PTz8/P4+Pj09PQkGPqcAAAABnRSTlMKGxk4Wi804abeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAG0lEQVR4nGNgYGBiZAABFkZWZkZmJhYGJqgIAAG7ACAptUc+AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        },
        i = o(59581),
        l = o.n(i),
        c = o(73909),
        _ = o(23874),
        d = o.n(_),
        p = o(63290),
        u = o.n(p),
        components_FooterLinks = (e) => {
          let { items: t, title: o } = e;
          return (0, r.jsx)("div", {
            className: u().footerLinkContainer,
            children: (0, r.jsx)("div", {
              className: u().wrapperBoxes,
              children: (0, r.jsxs)("div", {
                className: u().sectionBox,
                children: [
                  (0, r.jsx)("p", { className: u().title, children: o }),
                  (0, r.jsx)("div", {
                    children: t.map((e, t) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: u().linkBox,
                          children: (0, r.jsx)(d(), {
                            target: "_blank",
                            href: e.url,
                            passHref: !0,
                            children: (0, r.jsx)("p", { children: e.title }),
                          }),
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            }),
          });
        },
        h = o(50959),
        x = o(38603),
        m = o(41873);
      let f = [
          {
            icon: c.Z,
            link: "https://x.com/networknoya",
            className:
              "h-[54px] w-[34px] object-contain object-right-center select-none cursor-pointer transition-all duration-250 ease-in-out mr-[10px]",
          },
          {
            icon: {
              src: "/telegram.png",
              height: 54,
              width: 54,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://discord.gg/BGS5qX6fPj",
            className:
              "h-[54px] w-[54px] select-none cursor-pointer transition-all duration-250 ease-in-out mr-[10px]",
          },
        ],
        b = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      function Footer() {
        let [e, t] = (0, h.useState)(""),
          [o, a] = (0, h.useState)(!0),
          [i, c] = (0, h.useState)(!1),
          [_, d] = (0, h.useState)(!1),
          submitNewsletter = () => {
            if (b.test(e)) {
              d(!0);
              let o = JSON.stringify({ email: e });
              fetch(
                "https://www.noya.network/noya_space/api/users/newsletter/subscribe",
                {
                  body: o,
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                }
              )
                .then((e) => {
                  e.ok
                    ? (c(!0),
                      t(""),
                      (0, m.x)("Email added to newsletter", "success"))
                    : (0, m.x)("Error adding email to newsletter", "error");
                })
                .catch((e) => {
                  (0, m.x)("Error adding email to newsletter", "error");
                })
                .finally(() => {
                  d(!1);
                });
            } else a(!1);
          },
          p = {
            Links: [
              { title: "ZKML", url: "/zkml" },
              { title: "Docs", url: "https://docs.noya.network" },
            ],
            Help: [
              {
                title: "Terms of Service",
                url: "https://docs.noya.network/audits-and-risk/disclaimer-and-terms",
              },
              {
                title: "Privacy Policy",
                url: "https://docs.noya.network/audits-and-risk/privacy-policy",
              },
            ],
          };
        return (0, r.jsxs)("section", {
          className: n().footer_container,
          id: "newsletter",
          children: [
            (0, r.jsx)("div", { className: n().footer_container_line }),
            (0, r.jsxs)("div", {
              className: n().footer_top_box,
              children: [
                (0, r.jsx)("div", { className: n().footer_top_box_line }),
                (0, r.jsx)("div", {
                  className: n().footer_top_logo_box,
                  children: (0, r.jsx)(l(), {
                    className: n().footer_top_logo,
                    src: s,
                    alt: "noya-footer",
                  }),
                }),
                (0, r.jsx)("div", {
                  className: n().footer_links_box,
                  children: (0, r.jsx)(components_FooterLinks, {
                    items: p.Links,
                    title: "Links",
                  }),
                }),
                (0, r.jsx)("div", {
                  className: n().footer_links_box,
                  children: (0, r.jsx)(components_FooterLinks, {
                    items: p.Help,
                    title: "Help",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: n().footer_top_box_socials,
                  children: [
                    (0, r.jsx)("h3", { children: "Socials" }),
                    (0, r.jsx)("div", {
                      className: n().footer_top_box_socials_image_box,
                      children: f.map((e, t) =>
                        (0, r.jsx)(
                          "a",
                          {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: n().footer_top_box_socials_link,
                            children: (0, r.jsx)(l(), {
                              src: e.icon,
                              alt: "social".concat(t),
                              className: e.className,
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: n().footer_news_letter_container,
                  children: [
                    (0, r.jsx)("h3", { children: "Newsletter" }),
                    (0, r.jsx)("p", { children: "Sign up to our Newsletter:" }),
                    (0, r.jsxs)("div", {
                      className: ""
                        .concat(
                          i ? "glow-button-success" : "glow-button",
                          " rounded-[5px] "
                        )
                        .concat(n().footer_news_letter_input_box),
                      children: [
                        (0, r.jsx)("input", {
                          type: "text",
                          id: "footer-newsletter-input",
                          placeholder: "Your e-mail here",
                          value: e,
                          onChange: (e) => {
                            a(!0), t(e.target.value);
                          },
                          onKeyDown: (e) => {
                            "Enter" === e.key && submitNewsletter();
                          },
                          style: o ? {} : { color: "red" },
                        }),
                        (0, r.jsx)("button", {
                          onClick: submitNewsletter,
                          className: n().color_1,
                          children: _
                            ? (0, r.jsx)(x.Z, { className: "w-5 h-5" })
                            : "Submit",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: n().footer_bottom_box,
              children: [
                (0, r.jsx)("p", {
                  children: "\xa9 2025 NOYA. All rights reserved.",
                }),
                (0, r.jsx)("div", {
                  className: n().footer_email_box,
                  children: (0, r.jsx)("div", {
                    className: n().footer_email_wrapper,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    26604: function (e, t, o) {
      "use strict";
      var r = o(11527),
        a = o(56774),
        n = o(66040),
        s = o(59581),
        i = o.n(s);
      t.Z = function (e) {
        let { items: t, children: o, imageOptions: s } = e;
        return (0, r.jsx)(n.pn, {
          children: (0, r.jsxs)(a.u, {
            delayDuration: 0,
            children: [
              (0, r.jsx)(a.aJ, { asChild: !0, children: o }),
              (0, r.jsx)(a._v, {
                className: "p-2 ".concat(
                  1 === t.length
                    ? "w-[120px] xl:w-[150px]"
                    : 2 === t.length
                    ? "w-[200px] xl:w-[250px]"
                    : "w-[250px] xl:w-[350px]"
                ),
                onClick: (e) => e.stopPropagation(),
                children: (0, r.jsx)("div", {
                  className: "grid gap-3 ".concat(
                    1 === t.length
                      ? "grid-cols-1"
                      : 2 === t.length
                      ? "grid-cols-2"
                      : "grid-cols-2 xl:grid-cols-3"
                  ),
                  children: t.map((e) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        className:
                          "flex items-center justify-center gap-2 min-w-0",
                        children: [
                          e.logoComponent
                            ? e.logoComponent
                            : e.logoSrc &&
                              (0, r.jsx)(i(), {
                                src: e.logoSrc,
                                alt: e.name,
                                width: s.width,
                                height: s.height,
                                className: "rounded-full shrink-0",
                              }),
                          (0, r.jsx)("p", {
                            className: "text-sm font-medium truncate",
                            children: e.name,
                          }),
                        ],
                      },
                      e.name
                    )
                  ),
                }),
              }),
            ],
          }),
        });
      };
    },
    75993: function (e, t, o) {
      "use strict";
      var r = o(11527),
        a = o(28254),
        n = o(43829),
        s = o(50959),
        i = o(38603),
        l = o(85703),
        c = o(59581),
        _ = o.n(c);
      t.Z = function (e) {
        let {
            baseSymbol: t,
            valueInBase: o,
            className: c,
            concat: d,
            pClassName: p,
            type: u = "p",
            children: h,
            loading: x,
          } = e,
          { data: m, isLoading: f } = (0, n.Zf)(void 0, {
            pollingInterval: 3e5,
          }),
          b = (0, a.C)((e) => e.ModalsReducer.currency),
          g = (0, s.useMemo)(() => {
            var e, r, a, n, s, i, c;
            let _ = o;
            switch (t) {
              case "ETH":
                _ =
                  o *
                  (null !== (e = null == m ? void 0 : m.ethPrice) &&
                  void 0 !== e
                    ? e
                    : 0);
                break;
              case "USDC":
                _ =
                  o *
                  (null !== (r = null == m ? void 0 : m.usdcPrice) &&
                  void 0 !== r
                    ? r
                    : 0);
                break;
              case "BTC":
                _ =
                  o *
                  (null !== (a = null == m ? void 0 : m.btcPrice) &&
                  void 0 !== a
                    ? a
                    : 0);
                break;
              default:
                _ = o;
            }
            let d = "";
            switch (b) {
              case "USD":
                let p =
                  _ /
                  (null !== (n = null == m ? void 0 : m.usdcPrice) &&
                  void 0 !== n
                    ? n
                    : 1);
                d = l.ZP.formatWithExponential(p);
                break;
              case "USDC":
                let u =
                  _ /
                  (null !== (s = null == m ? void 0 : m.usdcPrice) &&
                  void 0 !== s
                    ? s
                    : 1);
                d = l.ZP.formatWithExponential(u);
                break;
              case "ETH":
                let h =
                  _ /
                  (null !== (i = null == m ? void 0 : m.ethPrice) &&
                  void 0 !== i
                    ? i
                    : 1);
                d = l.ZP.formatWithExponential(h);
                break;
              case "BTC":
                let x =
                  _ /
                  (null !== (c = null == m ? void 0 : m.btcPrice) &&
                  void 0 !== c
                    ? c
                    : 1);
                d = l.ZP.formatWithExponential(x);
                break;
              default:
                d = l.ZP.formatWithExponential(100 * _);
            }
            return d;
          }, [b, o, t, m]),
          j = (0, s.useMemo)(() => {
            switch (b) {
              case "USD":
              default:
                return "$";
              case "USDC":
                return "/usdc.svg";
              case "ETH":
                return "/coins/eth.svg";
              case "BTC":
                return "/coins/wbtc.svg";
            }
          }, [b]);
        return (0, r.jsx)("section", {
          className: (0, l.cn)(
            "w-full flex items-center justify-center gap-1",
            c
          ),
          children:
            f || x
              ? (0, r.jsx)(i.Z, {
                  className: "w-5 h-5 mx-auto animate-fadeinReallyFast",
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsxs)(u, {
                      className: (0, l.cn)("animate-fadeinReallyFast", p),
                      children: [d, " ", "$" === j ? "$" : "", g],
                    }),
                    "$" !== j &&
                      (0, r.jsx)(_(), {
                        className: "animate-fadeinReallyFast",
                        src: j,
                        alt: b,
                        width: 20,
                        height: 20,
                      }),
                    h,
                  ],
                }),
        });
      };
    },
    47922: function (e, t, o) {
      "use strict";
      var r = o(11527),
        a = o(56774),
        n = o(85703),
        s = o(59581),
        i = o.n(s),
        l = o(23874),
        c = o.n(l);
      o(50959),
        (t.Z = function (e) {
          let { deposit: t, withdrawal: o } = e;
          return 0 === t && 0 === o
            ? null
            : (0, r.jsx)(a.pn, {
                delayDuration: 200,
                children: (0, r.jsxs)(a.u, {
                  children: [
                    (0, r.jsx)(a.aJ, {
                      asChild: !0,
                      children: (0, r.jsx)(c(), {
                        className: "cursor-pointer animate-fadeinFast",
                        href: "/profile#history-table-vault",
                        children: (0, r.jsxs)("div", {
                          className:
                            "flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity duration-300",
                          children: [
                            (0, r.jsx)(i(), {
                              src: "/info-yellow.svg",
                              alt: "clock",
                              width: 12,
                              height: 12,
                              className: "cursor-pointer",
                            }),
                            t > 0 && o > 0
                              ? (0, r.jsxs)("p", {
                                  className:
                                    "!text-[#FFFF00] text-xs font-EuclidCircularB font-normal",
                                  children: [
                                    "Pending:",
                                    " ",
                                    t > 0 &&
                                      (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsxs)("span", {
                                            className: "font-semibold",
                                            children: [
                                              "$",
                                              n.ZP.formatNumberWithAbbreviation(
                                                t
                                              ),
                                            ],
                                          }),
                                          " ",
                                          "deposit",
                                        ],
                                      }),
                                    " ",
                                    "&",
                                    " ",
                                    o > 0 &&
                                      (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsxs)("span", {
                                            className: "font-semibold",
                                            children: [
                                              "$",
                                              n.ZP.formatNumberWithAbbreviation(
                                                o
                                              ),
                                            ],
                                          }),
                                          " ",
                                          "withdrawal",
                                        ],
                                      }),
                                  ],
                                })
                              : (0, r.jsxs)("p", {
                                  className:
                                    "!text-[#FFFF00] text-xs font-EuclidCircularB font-normal",
                                  children: [
                                    "$",
                                    t
                                      ? n.ZP.formatNumberWithAbbreviation(t)
                                      : n.ZP.formatNumberWithAbbreviation(o),
                                    " ",
                                    t ? "deposit" : "withdrawal",
                                    " pending",
                                  ],
                                }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)(a._v, {
                      className: "max-w-[250px]",
                      children: (0, r.jsx)("p", {
                        children:
                          "You can check your pending transactions in the history table.",
                      }),
                    }),
                  ],
                }),
              });
        });
    },
    56774: function (e, t, o) {
      "use strict";
      o.d(t, {
        _v: function () {
          return c;
        },
        aJ: function () {
          return l;
        },
        pn: function () {
          return TooltipProvider;
        },
        u: function () {
          return i;
        },
      });
      var r = o(11527),
        a = o(50959),
        n = o(66040),
        s = o(64460);
      let TooltipProvider = (e) => {
          let { children: t, ...o } = e;
          return (0, r.jsx)(n.zt, { delayDuration: 0, ...o, children: t });
        },
        i = n.fC,
        l = n.xz,
        c = a.forwardRef((e, t) => {
          let { className: o, sideOffset: a = 4, ...i } = e;
          return (0, r.jsx)(n.h_, {
            children: (0, r.jsx)(n.VY, {
              ref: t,
              sideOffset: a,
              className: (0, s.cn)(
                "z-50 overflow-hidden rounded-md border-solid !border !border-[#7d6ff6] !bg-[#19171e] px-3 py-1.5 text-sm font-normal text-white font-EuclidCircularB animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                o
              ),
              ...i,
            }),
          });
        });
      (c.displayName = n.VY.displayName),
        (TooltipProvider.displayName = n.zt.displayName);
    },
    89666: function (e) {
      e.exports = {
        footer_container: "Footer_footer_container__Op3HX",
        footer_container_line: "Footer_footer_container_line__K5d78",
        footer_top_box: "Footer_footer_top_box__up0Z2",
        footer_top_box_line: "Footer_footer_top_box_line__cMhzp",
        footer_top_logo_box: "Footer_footer_top_logo_box__tjtRZ",
        footer_top_logo: "Footer_footer_top_logo__whUEs",
        footer_news_letter_container:
          "Footer_footer_news_letter_container__GfbdJ",
        footer_top_box_socials: "Footer_footer_top_box_socials__HHw__",
        footer_top_box_socials_image_box:
          "Footer_footer_top_box_socials_image_box___rItH",
        footer_top_box_socials_image:
          "Footer_footer_top_box_socials_image__ft36n",
        footer_bottom_box: "Footer_footer_bottom_box__MkT9j",
        footer_news_letter_input_box:
          "Footer_footer_news_letter_input_box__v0Pyn",
        color_1: "Footer_color_1__baVD_",
        footer_email_icon: "Footer_footer_email_icon__8DIh4",
        footer_email_wrapper: "Footer_footer_email_wrapper__QpJLS",
        footer_links_box: "Footer_footer_links_box__9xabF",
        footer_top_box_socials_link:
          "Footer_footer_top_box_socials_link__CXNQ3",
      };
    },
    63290: function (e) {
      e.exports = {
        footerLinkContainer: "FooterLinks_footerLinkContainer__KWXJY",
        title: "FooterLinks_title__EYpiq",
        linkBox: "FooterLinks_linkBox__5uI4y",
        wrapperBoxes: "FooterLinks_wrapperBoxes__5C2At",
        sectionBox: "FooterLinks_sectionBox__0wx0d",
      };
    },
    38402: function (e) {
      e.exports = {
        launch_app_container: "launch-app-style_launch_app_container__Ph7Px",
        portfolio_container: "launch-app-style_portfolio_container__E5kUm",
        launch_app_glow: "launch-app-style_launch_app_glow__Ugr7x",
        launch_app_star_back: "launch-app-style_launch_app_star_back__8Y8kL",
        launch_app_star_back2: "launch-app-style_launch_app_star_back2__YdfNn",
        launch_app_back_box: "launch-app-style_launch_app_back_box__c_izP",
        launch_app_back_icon: "launch-app-style_launch_app_back_icon__ajjpx",
        VisitCheck_container: "launch-app-style_VisitCheck_container__B4Wh5",
        VisitCheck_container_button:
          "launch-app-style_VisitCheck_container_button__BmiPu",
        color_1: "launch-app-style_color_1__a7lGQ",
      };
    },
  },
]);
