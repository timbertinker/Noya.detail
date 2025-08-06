(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2947],
  {
    54423: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/zkml",
        function () {
          return i(46117);
        },
      ]);
    },
    35529: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return Footer;
        },
      });
      var o = i(11527),
        n = i(89666),
        a = i.n(n),
        s = {
          src: "/_next/static/media/Noya.b5912bbb.png",
          height: 95,
          width: 256,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEX19fXx8fH09PTz8/P4+Pj09PQkGPqcAAAABnRSTlMKGxk4Wi804abeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAG0lEQVR4nGNgYGBiZAABFkZWZkZmJhYGJqgIAAG7ACAptUc+AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        },
        r = i(59581),
        l = i.n(r),
        c = i(73909),
        _ = i(23874),
        d = i.n(_),
        m = i(63290),
        u = i.n(m),
        components_FooterLinks = (e) => {
          let { items: t, title: i } = e;
          return (0, o.jsx)("div", {
            className: u().footerLinkContainer,
            children: (0, o.jsx)("div", {
              className: u().wrapperBoxes,
              children: (0, o.jsxs)("div", {
                className: u().sectionBox,
                children: [
                  (0, o.jsx)("p", { className: u().title, children: i }),
                  (0, o.jsx)("div", {
                    children: t.map((e, t) =>
                      (0, o.jsx)(
                        "div",
                        {
                          className: u().linkBox,
                          children: (0, o.jsx)(d(), {
                            target: "_blank",
                            href: e.url,
                            passHref: !0,
                            children: (0, o.jsx)("p", { children: e.title }),
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
        b = i(50959),
        p = i(38603),
        h = i(41873);
      let x = [
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
        g = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      function Footer() {
        let [e, t] = (0, b.useState)(""),
          [i, n] = (0, b.useState)(!0),
          [r, c] = (0, b.useState)(!1),
          [_, d] = (0, b.useState)(!1),
          submitNewsletter = () => {
            if (g.test(e)) {
              d(!0);
              let i = JSON.stringify({ email: e });
              fetch(
                "https://www.noya.network/noya_space/api/users/newsletter/subscribe",
                {
                  body: i,
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                }
              )
                .then((e) => {
                  e.ok
                    ? (c(!0),
                      t(""),
                      (0, h.x)("Email added to newsletter", "success"))
                    : (0, h.x)("Error adding email to newsletter", "error");
                })
                .catch((e) => {
                  (0, h.x)("Error adding email to newsletter", "error");
                })
                .finally(() => {
                  d(!1);
                });
            } else n(!1);
          },
          m = {
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
        return (0, o.jsxs)("section", {
          className: a().footer_container,
          id: "newsletter",
          children: [
            (0, o.jsx)("div", { className: a().footer_container_line }),
            (0, o.jsxs)("div", {
              className: a().footer_top_box,
              children: [
                (0, o.jsx)("div", { className: a().footer_top_box_line }),
                (0, o.jsx)("div", {
                  className: a().footer_top_logo_box,
                  children: (0, o.jsx)(l(), {
                    className: a().footer_top_logo,
                    src: s,
                    alt: "noya-footer",
                  }),
                }),
                (0, o.jsx)("div", {
                  className: a().footer_links_box,
                  children: (0, o.jsx)(components_FooterLinks, {
                    items: m.Links,
                    title: "Links",
                  }),
                }),
                (0, o.jsx)("div", {
                  className: a().footer_links_box,
                  children: (0, o.jsx)(components_FooterLinks, {
                    items: m.Help,
                    title: "Help",
                  }),
                }),
                (0, o.jsxs)("div", {
                  className: a().footer_top_box_socials,
                  children: [
                    (0, o.jsx)("h3", { children: "Socials" }),
                    (0, o.jsx)("div", {
                      className: a().footer_top_box_socials_image_box,
                      children: x.map((e, t) =>
                        (0, o.jsx)(
                          "a",
                          {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: a().footer_top_box_socials_link,
                            children: (0, o.jsx)(l(), {
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
                (0, o.jsxs)("div", {
                  className: a().footer_news_letter_container,
                  children: [
                    (0, o.jsx)("h3", { children: "Newsletter" }),
                    (0, o.jsx)("p", { children: "Sign up to our Newsletter:" }),
                    (0, o.jsxs)("div", {
                      className: ""
                        .concat(
                          r ? "glow-button-success" : "glow-button",
                          " rounded-[5px] "
                        )
                        .concat(a().footer_news_letter_input_box),
                      children: [
                        (0, o.jsx)("input", {
                          type: "text",
                          id: "footer-newsletter-input",
                          placeholder: "Your e-mail here",
                          value: e,
                          onChange: (e) => {
                            n(!0), t(e.target.value);
                          },
                          onKeyDown: (e) => {
                            "Enter" === e.key && submitNewsletter();
                          },
                          style: i ? {} : { color: "red" },
                        }),
                        (0, o.jsx)("button", {
                          onClick: submitNewsletter,
                          className: a().color_1,
                          children: _
                            ? (0, o.jsx)(p.Z, { className: "w-5 h-5" })
                            : "Submit",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: a().footer_bottom_box,
              children: [
                (0, o.jsx)("p", {
                  children: "\xa9 2025 NOYA. All rights reserved.",
                }),
                (0, o.jsx)("div", {
                  className: a().footer_email_box,
                  children: (0, o.jsx)("div", {
                    className: a().footer_email_wrapper,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    34466: function (e, t, i) {
      "use strict";
      var o = i(11527),
        n = i(28254),
        a = i(50959);
      t.Z = (e) => {
        let {
            src: t,
            style: i = {},
            loop: s,
            mute: r,
            playWithIntersection: l,
            className: c,
          } = e,
          _ = (0, a.useRef)(null),
          d = (0, n.C)((e) => e.PortfolioReducer.OperationSystem);
        return (
          (0, a.useEffect)(() => {
            void 0 !== l
              ? !0 === l && _.current && _.current.play()
              : _.current && _.current.play();
          }, [l]),
          (0, o.jsx)("video", {
            playsInline: !0,
            className: c,
            muted: void 0 === r,
            ref: _,
            style: { width: "100%", height: "100%", ...i },
            loop: void 0 === s || !0 === s,
            children: (0, o.jsx)("source", {
              src: t,
              type: "Android" === d ? "video/webm" : "video/mp4",
            }),
          })
        );
      };
    },
    82866: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return Pagination;
        },
      });
      var o = i(11527),
        n = i(50959),
        a = i(53008),
        s = i.n(a),
        r = i(59581),
        l = i.n(r),
        c = {
          src: "/_next/static/media/page-arrow.a2999a2f.svg",
          height: 12,
          width: 9,
          blurWidth: 0,
          blurHeight: 0,
        };
      function Pagination(e) {
        let {
            length: t,
            setSlice1: i,
            setSlice2: a,
            tableRef: r,
            showRows: _,
            className: d,
            rows: m = [5, 10, 25],
          } = e,
          u = m.filter((e) => t >= e),
          [b, p] = (0, n.useState)(u[0]),
          [h, x] = (0, n.useState)([]),
          [g, f] = (0, n.useState)(1);
        return ((0, n.useEffect)(() => {
          let e = [];
          if ((f(1), i(0), a(b), null == r || r.current, t % b == 0)) {
            let i = t / b;
            for (let t = 1; t <= i; t++) e.push(t);
            x(e);
          } else {
            let i = t / b + 1;
            for (let t = 1; t <= i; t++) e.push(t);
            x(e);
          }
        }, [b, t]),
        0 === u.length)
          ? null
          : t < b
          ? (0, o.jsx)(o.Fragment, {})
          : (0, o.jsxs)("section", {
              className: "".concat(s().Pagination_container, " ").concat(d),
              children: [
                (0, o.jsxs)("div", {
                  style: { display: !1 === _ ? "none" : "" },
                  className: s().Pagination_rows_container,
                  children: [
                    (0, o.jsx)("p", { children: "Number of rows displayed:" }),
                    (0, o.jsx)("div", {
                      className: s().Pagination_rows_box,
                      children: u.map((e) =>
                        (0, o.jsx)(
                          "div",
                          {
                            style: b === e ? { background: "#7d6ff6" } : {},
                            onClick: () => p(e),
                            children: e,
                          },
                          e
                        )
                      ),
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: s().Pagination_pages_container,
                  children: [
                    (0, o.jsx)(l(), {
                      className: s().Pagination_pages_container_arrow,
                      src: c,
                      alt: "left-arrow",
                      style: { rotate: "180deg" },
                      onClick: () => {
                        g === h[0] ||
                          (i((g - 1) * b - b), a((g - 1) * b), f(g - 1));
                      },
                    }),
                    (0, o.jsx)("div", {
                      className: s().Pagination_pages_box,
                      style: h.length < 5 ? { justifyContent: "center" } : {},
                      children:
                        h.length > 5
                          ? (0, o.jsxs)(o.Fragment, {
                              children: [
                                h
                                  .slice(
                                    h[h.length - 1] - g <= 4
                                      ? h.length - 5
                                      : g -
                                          h[
                                            h.length % 2 == 0
                                              ? h.length / 2
                                              : h.length - 0.5
                                          ] >=
                                        0
                                      ? 0
                                      : g - 1,
                                    h[h.length - 1] - g <= 4
                                      ? h.length - 2
                                      : g -
                                          h[
                                            h.length % 2 == 0
                                              ? h.length / 2
                                              : h.length - 0.5
                                          ] >=
                                        0
                                      ? 2
                                      : g + 1
                                  )
                                  .map((e, t) =>
                                    (0, o.jsx)(
                                      "div",
                                      {
                                        onClick: () => {
                                          f(e),
                                            1 === e
                                              ? (i(0), a(b))
                                              : (i(e * b - b), a(e * b));
                                        },
                                        style:
                                          g === e
                                            ? {
                                                background: "#7d6ff6",
                                                margin: h.length < 5 ? 15 : 0,
                                              }
                                            : { margin: h.length < 5 ? 15 : 0 },
                                        children: e,
                                      },
                                      "page".concat(e)
                                    )
                                  ),
                                g < h[h.length - 5] &&
                                  (0, o.jsx)("p", { children: "..." }),
                                h
                                  .slice(
                                    h[h.length - 1] - g <= 4
                                      ? h.length - 2
                                      : g -
                                          h[
                                            h.length % 2 == 0
                                              ? h.length / 2
                                              : h.length - 0.5
                                          ] >=
                                        0
                                      ? g - 2
                                      : h.length - 2,
                                    h[h.length - 1] - g <= 4
                                      ? h.length
                                      : g -
                                          h[
                                            h.length % 2 == 0
                                              ? h.length / 2
                                              : h.length - 0.5
                                          ] >=
                                        0
                                      ? g
                                      : h.length
                                  )
                                  .map((e, t) =>
                                    (0, o.jsx)(
                                      "div",
                                      {
                                        onClick: () => {
                                          f(e),
                                            1 === e
                                              ? (i(0), a(b))
                                              : (i(e * b - b), a(e * b));
                                        },
                                        style:
                                          g === e
                                            ? {
                                                background: "#7d6ff6",
                                                margin: h.length < 5 ? 15 : 0,
                                              }
                                            : { margin: h.length < 5 ? 15 : 0 },
                                        children: e,
                                      },
                                      "page".concat(e)
                                    )
                                  ),
                              ],
                            })
                          : (0, o.jsx)(o.Fragment, {
                              children: h.map((e) =>
                                (0, o.jsx)(
                                  "div",
                                  {
                                    onClick: () => {
                                      f(e),
                                        1 === e
                                          ? (i(0), a(b))
                                          : (i(e * b - b), a(e * b));
                                    },
                                    style:
                                      g === e
                                        ? {
                                            background: "#7d6ff6",
                                            margin: h.length < 5 ? 15 : 0,
                                          }
                                        : { margin: h.length < 5 ? 15 : 0 },
                                    children: e,
                                  },
                                  "page".concat(e)
                                )
                              ),
                            }),
                    }),
                    (0, o.jsx)(l(), {
                      className: s().Pagination_pages_container_arrow,
                      src: c,
                      alt: "left-arrow",
                      onClick: () => {
                        g === h[h.length - 1] ||
                          (i((g + 1) * b - b), a((g + 1) * b), f(g + 1));
                      },
                    }),
                  ],
                }),
              ],
            });
      }
    },
    46117: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return ZKML;
          },
        });
      var o = i(11527),
        n = i(15881),
        a = i(21184),
        s = i.n(a),
        r = i(15053),
        l = i.n(r),
        c = {
          src: "/_next/static/media/docs.01c335d6.svg",
          height: 21,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = i(59581),
        d = i.n(_),
        m = {
          src: "/_next/static/media/play.ceadb60a.svg",
          height: 24,
          width: 25,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = i(28254),
        b = i(60715);
      function ZKMLDesc() {
        let e = (0, u.T)();
        return (0, o.jsxs)("section", {
          className: l().ZKMLDesc_container,
          children: [
            (0, o.jsxs)("h1", {
              children: [
                "The future is ",
                (0, o.jsx)("span", { children: "ZKML" }),
              ],
            }),
            (0, o.jsx)("h3", { children: "Here’s how we’ve implemented it" }),
            (0, o.jsxs)("p", {
              children: [
                "NOYA executes Scalable Omnichain DeFi Strategies using Smart Liquidity. It's using AI to predict and",
                (0, o.jsx)("br", {}),
                "optimize yields, bridging fees, slippage, and rewards.",
              ],
            }),
            (0, o.jsxs)("div", {
              className: l().ZKMLDesc_buttons_box,
              children: [
                (0, o.jsxs)("div", {
                  className: l().ZKMLDesc_buttons_box_watch_video,
                  onClick: () => e((0, b.ir)(!0)),
                  children: [
                    (0, o.jsx)(d(), {
                      className: l().ZKMLDesc_buttons_box_watch_video_icon,
                      src: m,
                      alt: "play",
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: l().ZKMLDesc_button_wrapper,
                  children: (0, o.jsxs)("button", {
                    onClick: () =>
                      window.open(
                        "https://docs.noya.network/noyas-zkml/why-zkml",
                        "_blank"
                      ),
                    className: ""
                      .concat(l().ZKMLDesc_button_docs, " ")
                      .concat(l().color_1),
                    children: [
                      (0, o.jsx)(d(), {
                        src: c,
                        alt: "docs",
                        className: l().ZKMLDesc_button_image,
                      }),
                      "Official Docs",
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var p = i(50959),
        h = i(96230),
        x = i.n(h),
        g = {
          src: "/_next/static/media/USDC.0e57196c.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = {
          src: "/_next/static/media/Tether.b2c45bc0.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        k = {
          src: "/_next/static/media/Frax.b222e553.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        v = {
          src: "/_next/static/media/VST.d5df1ac7.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        };
      let j = [
        {
          title: "Predictive",
          span: "Embrace Predictive Brilliance:",
          content:
            "Leverage the potent capabilities of Machine Learning, enabling predictive precision to guide your future decisions",
          img: {
            src: "/_next/static/media/predictive.5a65042e.svg",
            height: 75,
            width: 107,
            blurWidth: 0,
            blurHeight: 0,
          },
        },
        {
          title: "Private",
          span: "Your Secrets Stay Secret:",
          content:
            "Embrace NOYA's provision for model weight privacy, ensuring that those building on our platform can maintain the confidentiality of their unique strategies",
          img: {
            src: "/_next/static/media/privacy.482bbe10.svg",
            height: 102,
            width: 146,
            blurWidth: 0,
            blurHeight: 0,
          },
        },
        {
          title: "Trustless Operations",
          span: "No Trust? No Problem:",
          content:
            "In the world of NOYA, your liquidity is untouched until the output of the model is verified, embodying the essence of trustless functionality",
          img: {
            src: "/_next/static/media/trustless.03c67a0a.svg",
            height: 101,
            width: 108,
            blurWidth: 0,
            blurHeight: 0,
          },
        },
        {
          title: "Verifiable Backtesting Results",
          span: "Evidence of Excellence:",
          content:
            "All backtesting results can be independently verified, ensuring transparency and building trust in our system's effectiveness",
          img: {
            src: "/_next/static/media/verifiable.8ba97b95.svg",
            height: 120,
            width: 119,
            blurWidth: 0,
            blurHeight: 0,
          },
        },
      ];
      function Benefits() {
        return (0, o.jsxs)("section", {
          className: x().zkml_benefits_container,
          children: [
            (0, o.jsxs)("div", {
              className: x().zkml_benefits_title,
              children: [
                (0, o.jsxs)("h1", {
                  children: [
                    "Benefits of ",
                    (0, o.jsx)("span", { children: "ZKML" }),
                  ],
                }),
                (0, o.jsx)("p", {
                  children:
                    "Unmatched performance with the power of Machine Learning",
                }),
              ],
            }),
            j.map((e, t) =>
              (0, o.jsx)(
                BenefitBox,
                {
                  title: e.title,
                  span: e.span,
                  content: e.content,
                  img: e.img,
                  index: t,
                },
                e.title
              )
            ),
          ],
        });
      }
      let BenefitBox = (e) => {
        let { title: t, span: i, content: n, img: a, index: s } = e;
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("section", {
            className: x().zkml_benefitBox_container,
            style: s % 2 != 0 ? { direction: "rtl" } : {},
            children: [
              (0, o.jsx)("div", {
                className: x().zkml_benefitBox_container_line,
                style:
                  s % 2 == 0
                    ? { rotate: "-7deg" }
                    : { display: 3 === s ? "none" : "" },
              }),
              (0, o.jsx)("div", {
                className: x().zkml_benefitBox_container_glow,
                style: s % 2 == 0 ? { right: "0%", left: "unset" } : {},
              }),
              (0, o.jsxs)("div", {
                className: x().zkml_benefitBox_data,
                children: [
                  (0, o.jsx)("h1", { children: t }),
                  (0, o.jsxs)("p", {
                    children: [(0, o.jsx)("span", { children: i }), " ", n],
                  }),
                ],
              }),
              (0, o.jsx)("div", {
                className: x().zkml_benefitBox_img_box,
                children: (0, o.jsx)(d(), {
                  src: a,
                  alt: "".concat(i),
                  className: x().zkml_benefitBox_img,
                }),
              }),
            ],
          }),
        });
      };
      var y = i(35529),
        L = i(82866),
        N = i(13816),
        w = i.n(N),
        B = i(63844),
        I = i.n(B);
      function LiquidityItem(e) {
        let { data: t, lastItem: i, background: n } = e,
          a = (0, u.T)();
        return (0, o.jsxs)("section", {
          className: I().LiquidityItem_container,
          style: {
            border: i ? "none" : "",
            borderRadius: i ? "0 0 5px 5px" : "",
            background: n,
          },
          children: [
            (0, o.jsx)("div", {
              className: I().LiquidityItem_cell,
              children: (0, o.jsx)("p", { children: t.date }),
            }),
            (0, o.jsx)("div", {
              className: I().LiquidityItem_cell,
              children: (0, o.jsx)("p", { children: t.chain }),
            }),
            (0, o.jsx)("div", {
              className: I().LiquidityItem_cell,
              children: (0, o.jsx)("p", { children: t.protocol }),
            }),
            (0, o.jsx)("div", {
              className: I().LiquidityItem_cell,
              children: (0, o.jsx)("p", { children: t.pool }),
            }),
            (0, o.jsx)("div", {
              className: I().LiquidityItem_cell,
              children:
                t.hasProof &&
                (0, o.jsx)("section", {
                  className: I().LiquidityItem_proof_wrapper,
                  children: (0, o.jsx)("button", {
                    onClick: () => {
                      a(
                        (0, b.Lb)({
                          input: t.pool,
                          output: t.pool,
                          date: t.date,
                          proof: t.proof,
                          publicInputs: t.publicInputs,
                          verifierLink: t.verifierLink,
                          otherInfo: void 0,
                        })
                      );
                    },
                    className: ""
                      .concat(I().LiquidityItem_proof_button, " ")
                      .concat("" === n ? I().color_1 : I().color_2),
                    children: "Verify Proof",
                  }),
                }),
            }),
          ],
        });
      }
      var A = i(90733),
        M = i(59440),
        q = i(641),
        z = i.n(q),
        T = {
          src: "/_next/static/media/clock.4276bd77.svg",
          height: 11,
          width: 11,
          blurWidth: 0,
          blurHeight: 0,
        };
      function MobileLiquidityItem(e) {
        let { data: t, lastItem: i, background: n } = e,
          a = (0, u.T)();
        return (0, o.jsxs)(
          "section",
          {
            className: z().MLI_container,
            style: {
              border: i ? "none" : "",
              borderRadius: i ? "0 0 5px 5px" : "",
              background: n,
            },
            children: [
              (0, o.jsxs)("div", {
                className: z().top,
                children: [
                  (0, o.jsxs)("div", {
                    className: z().time,
                    children: [
                      (0, o.jsx)(d(), { src: T, alt: "time" }),
                      t.date,
                    ],
                  }),
                  t.hasProof &&
                    (0, o.jsx)("section", {
                      onClick: () => {
                        a(
                          (0, b.Lb)({
                            input: t.pool,
                            output: t.pool,
                            date: t.date,
                            proof: t.proof,
                            publicInputs: t.publicInputs,
                            verifierLink: t.verifierLink,
                            otherInfo: void 0,
                          })
                        );
                      },
                      className: z().VaultLocation_prev_proof_wrapper,
                      children: (0, o.jsx)("button", {
                        className: ""
                          .concat(z().VaultLocation_prev_proof_button, " ")
                          .concat("" === n ? z().color_1 : z().color_2),
                        children: "Verify",
                      }),
                    }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: z().bottom,
                children: [
                  (0, o.jsx)("div", { className: z().info, children: t.chain }),
                  (0, o.jsx)("div", {
                    className: z().info,
                    children: t.protocol,
                  }),
                  (0, o.jsx)("div", { className: z().info, children: t.pool }),
                ],
              }),
            ],
          },
          "-".concat(t.date, "-")
        );
      }
      let S = [
          {
            time: { date: "Monday, April 27, 2023" },
            from: { img: [v, k], name: "VST-FRAX" },
            to: void 0,
            proof: "xgnbnaynas178daa",
            chain: { name: "Ethereum", img: A.BF },
          },
          {
            time: { date: "Monday, April 25, 2023" },
            from: { img: [g, f], name: "USDC-USDT" },
            to: { img: [v, k], name: "VST-FRAX" },
            proof: "xgnbnaynas178daa",
            chain: { name: "Ethereum", img: A.BF },
          },
          {
            time: { date: "Monday, April 23, 2023" },
            from: { img: [k, g], name: "FRAX-USDC" },
            to: { img: [g, f], name: "USDC-USDT" },
            proof: "xgnbnaynas178daa",
            chain: { name: "Avax", img: A.u7 },
          },
          {
            time: { date: "Monday, April 19, 2023" },
            from: { img: [v, k], name: "VST-FRAX" },
            to: { img: [k, g], name: "FRAX-USDC" },
            proof: "xgnbnaynas178daa",
            chain: { name: "Avax", img: A.u7 },
          },
          {
            time: { date: "Monday, April 15, 2023" },
            from: { img: [g, f], name: "USDC-USDT" },
            to: { img: [v, k], name: "VST-FRAX" },
            proof: "xgnbnaynas178daa",
            chain: { name: "Avax", img: A.u7 },
          },
        ],
        P = ["Time of Occurence", "Chain", "Protocol", "Pool", "Proof"];
      function LiquidityTable(e) {
        let { tableData: t } = e,
          [i, n] = (0, p.useState)(0),
          [a, s] = (0, p.useState)(5),
          { width: r } = (0, M.Z)(),
          l = (0, p.useRef)(null),
          c = "",
          _ =
            "linear-gradient(90deg, rgba(125, 111, 246, 0.1) 0%, rgba(88, 225, 217, 0.1) 100%)";
        return (0, o.jsxs)("section", {
          ref: l,
          className: w().LiquidityTable_container,
          children: [
            (0, o.jsx)("div", {
              className: w().LiquidityTable_title,
              children: (0, o.jsx)("h3", {
                children: "Liqudity Movement Records",
              }),
            }),
            (0, o.jsxs)("div", {
              className: w().LiquidityTable_box,
              children: [
                (0, o.jsxs)("div", {
                  className: w().LiquidityTable_box_header,
                  children: [
                    r && r > 600
                      ? (0, o.jsx)(o.Fragment, {
                          children: P.map((e, t) =>
                            (0, o.jsx)(
                              "div",
                              {
                                className: w().LiquidityTable_box_header_item,
                                children: (0, o.jsx)("p", {
                                  style:
                                    t === P.length - 1
                                      ? { position: "unset" }
                                      : {},
                                  children: e,
                                }),
                              },
                              t
                            )
                          ),
                        })
                      : (0, o.jsx)(o.Fragment, {
                          children: "Liqudity Movement Records",
                        }),
                    (0, o.jsx)("div", {
                      className: w().LiquidityTable_box_header_line,
                    }),
                  ],
                }),
                0 === t.length &&
                  (0, o.jsx)("div", {
                    className:
                      "flex w-full mt-8 mb-8 lg:mb-0 items-center justify-center ",
                    children: (0, o.jsx)("p", {
                      className:
                        "gradient-text font-RussoOne text-md lg:text-xl font-bold",
                      children: "Coming Soon",
                    }),
                  }),
                r && r > 600
                  ? (0, o.jsx)(o.Fragment, {
                      children: t.slice(i, a).map((e, n) => {
                        let s = 0 === n ? null : t.slice(i, a)[n - 1].date;
                        return (
                          (c =
                            0 === n
                              ? ""
                              : 1 === n
                              ? e.date === s
                                ? _
                                : ""
                              : e.date === s
                              ? c === _
                                ? _
                                : ""
                              : c === _
                              ? ""
                              : _),
                          (0, o.jsx)(
                            LiquidityItem,
                            {
                              data: e,
                              lastItem: n === S.slice(i, a).length - 1,
                              background: 0 === n ? _ : c,
                            },
                            e.proof
                          )
                        );
                      }),
                    })
                  : (0, o.jsx)(o.Fragment, {
                      children: t.slice(i, a).map((e, n) => {
                        let s = 0 === n ? null : t.slice(i, a)[n - 1].date;
                        return (
                          (c =
                            0 === n
                              ? ""
                              : 1 === n
                              ? e.date === s
                                ? _
                                : ""
                              : e.date === s
                              ? c === _
                                ? _
                                : ""
                              : c === _
                              ? ""
                              : _),
                          (0, o.jsx)(
                            MobileLiquidityItem,
                            {
                              data: e,
                              lastItem: n === S.slice(i, a).length - 1,
                              background: 0 === n ? _ : c,
                            },
                            e.proof
                          )
                        );
                      }),
                    }),
              ],
            }),
            (0, o.jsx)(L.Z, {
              setSlice1: n,
              setSlice2: s,
              length: t.length,
              tableRef: l,
            }),
          ],
        });
      }
      var C = i(23443),
        D = i.n(C),
        F = i(50451),
        Z = i.n(F);
      function BascketingItem(e) {
        let { data: t, index: i, lastItem: n, background: a } = e,
          s = (0, u.T)();
        return (0, o.jsxs)("section", {
          className: Z().BascketingItem_container,
          style: {
            border: n ? "none" : "",
            borderRadius: n ? "0 0 5px 5px" : "",
            background: a,
          },
          children: [
            (0, o.jsx)("div", {
              className: Z().BascketingItem_cell,
              children: (0, o.jsx)("p", { children: t.date }),
            }),
            (0, o.jsx)("div", {
              className: Z().BascketingItem_cell,
              children: (0, o.jsx)("p", { children: t.chain }),
            }),
            (0, o.jsx)("div", {
              className: Z().BascketingItem_cell,
              children: (0, o.jsx)("p", { children: t.protocol }),
            }),
            (0, o.jsx)("div", {
              className: Z().BascketingItem_cell,
              children: (0, o.jsx)("p", { children: t.pool }),
            }),
            (0, o.jsx)("div", {
              className: Z().BascketingItem_cell,
              children:
                t.hasProof &&
                (0, o.jsx)("section", {
                  className: Z().BascketingItem_proof_wrapper,
                  children: (0, o.jsx)("button", {
                    onClick: () => {
                      s(
                        (0, b.Lb)({
                          input: t.pool,
                          output: t.pool,
                          date: t.date,
                          proof: t.proof,
                          publicInputs: t.publicInputs,
                          verifierLink: t.verifierLink,
                          otherInfo: void 0,
                        })
                      );
                    },
                    className: ""
                      .concat(Z().BascketingItem_proof_button, " ")
                      .concat("" === a ? Z().color_1 : Z().color_2),
                    children: "Verify Proof",
                  }),
                }),
            }),
          ],
        });
      }
      var R = i(58541),
        E = i.n(R),
        K = i(26870);
      function MobileBascketingItem(e) {
        let { data: t, index: i, lastItem: n, background: a } = e,
          s = (0, K.I0)();
        return (0, o.jsxs)(
          "section",
          {
            className: E().MBI_container,
            style: {
              border: n ? "none" : "",
              borderRadius: n ? "0 0 5px 5px" : "",
              background: a,
            },
            children: [
              (0, o.jsxs)("div", {
                className: E().top,
                children: [
                  (0, o.jsxs)("div", {
                    className: E().time,
                    children: [
                      (0, o.jsx)(d(), { src: T, alt: "time" }),
                      t.date,
                    ],
                  }),
                  t.hasProof &&
                    (0, o.jsx)("section", {
                      onClick: () => {
                        s(
                          (0, b.Lb)({
                            input: t.pool,
                            output: t.pool,
                            date: t.date,
                            proof: t.proof,
                            publicInputs: t.publicInputs,
                            verifierLink: t.verifierLink,
                            otherInfo: void 0,
                          })
                        );
                      },
                      className: E().VaultLocation_prev_proof_wrapper,
                      children: (0, o.jsx)("button", {
                        className: ""
                          .concat(E().VaultLocation_prev_proof_button, " ")
                          .concat("" === a ? E().color_1 : E().color_2),
                        children: "Verify",
                      }),
                    }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: E().bottom,
                children: [
                  (0, o.jsx)("div", { className: E().info, children: t.chain }),
                  (0, o.jsx)("div", {
                    className: E().info,
                    children: t.protocol,
                  }),
                  (0, o.jsx)("div", { className: E().info, children: t.pool }),
                ],
              }),
            ],
          },
          "".concat(t.date, "-").concat(i)
        );
      }
      let V = ["Time of Occurence", "Chain", "Protocol", "Pool", "Proof"];
      function BascketingTable(e) {
        let { tableData: t } = e,
          [i, n] = (0, p.useState)(0),
          [a, s] = (0, p.useState)(5),
          { width: r } = (0, M.Z)(),
          l = (0, p.useRef)(null),
          [c, _] = (0, p.useState)([]);
        (0, p.useEffect)(() => {
          fetch("https://noya.network/proof_api/getRecords", { method: "GET" })
            .then((e) => e.json())
            .then((e) => {
              _(
                e
                  .reverse()
                  .map(
                    (e) => (
                      (e.NoyaStrategy_apr_sinceInception = (
                        100 * Number(e.NoyaStrategy_apr_sinceInception)
                      ).toFixed(3)),
                      {
                        index: e.timestamp,
                        time: { date: e.timestamp },
                        Position: {
                          previousPool: e.current_bestPool_1.replace(
                            "_curve-dex",
                            ""
                          ),
                          pool: e.bestPool_1.replace("_curve-dex", ""),
                        },
                        proof: "",
                        APR:
                          e.NoyaStrategy_apr_sinceInception > 0
                            ? e.NoyaStrategy_apr_sinceInception
                            : 0,
                      }
                    )
                  )
              );
            });
        }, []);
        let d = "",
          m =
            "linear-gradient(90deg, rgba(125, 111, 246, 0.1) 0%, rgba(88, 225, 217, 0.1) 100%)";
        return (0, o.jsxs)("section", {
          ref: l,
          className: D().BascketingTable_container,
          children: [
            (0, o.jsx)("div", {
              className: D().BascketingTable_title,
              children: "Backtesting Records",
            }),
            (0, o.jsxs)("div", {
              className: "relative ".concat(D().BascketingTable_box),
              children: [
                (0, o.jsxs)("div", {
                  className: D().BascketingTable_box_header,
                  children: [
                    r && r > 600
                      ? (0, o.jsx)(o.Fragment, {
                          children: V.map((e, t) =>
                            (0, o.jsx)(
                              "div",
                              {
                                className: D().BascketingTable_box_header_item,
                                children: (0, o.jsx)("p", {
                                  style:
                                    t === V.length - 1 || t === V.length - 2
                                      ? { position: "unset" }
                                      : {},
                                  children: e,
                                }),
                              },
                              t
                            )
                          ),
                        })
                      : (0, o.jsx)(o.Fragment, {
                          children: "Backtesting Records",
                        }),
                    (0, o.jsx)("div", {
                      className: D().BascketingTable_box_header_line,
                    }),
                  ],
                }),
                0 === t.length &&
                  (0, o.jsx)("div", {
                    className:
                      "flex w-full items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                    children: (0, o.jsx)("p", {
                      className:
                        "gradient-text font-RussoOne text-md lg:text-xl font-bold",
                      children: "Coming Soon",
                    }),
                  }),
                r && r > 600
                  ? (0, o.jsx)(o.Fragment, {
                      children: t.slice(i, a).map((e, n) => {
                        let s = 0 === n ? null : t.slice(i, a)[n - 1].date;
                        return (
                          (d =
                            0 === n
                              ? ""
                              : 1 === n
                              ? e.date === s
                                ? m
                                : ""
                              : e.date === s
                              ? d === m
                                ? m
                                : ""
                              : d === m
                              ? ""
                              : m),
                          (0, o.jsx)(
                            BascketingItem,
                            {
                              data: e,
                              index: n,
                              lastItem: n === c.slice(i, a).length - 1,
                              background: 0 === n ? m : d,
                            },
                            e.proof
                          )
                        );
                      }),
                    })
                  : (0, o.jsx)(o.Fragment, {
                      children: t.slice(i, a).map((e, n) => {
                        let s = 0 === n ? null : t.slice(i, a)[n - 1].date;
                        return (
                          (d =
                            0 === n
                              ? ""
                              : 1 === n
                              ? e.date === s
                                ? m
                                : ""
                              : e.date === s
                              ? d === m
                                ? m
                                : ""
                              : d === m
                              ? ""
                              : m),
                          (0, o.jsx)(
                            MobileBascketingItem,
                            {
                              data: e,
                              index: n,
                              lastItem: n === c.slice(i, a).length - 1,
                              background: 0 === n ? m : d,
                            },
                            e.publicInputs
                          )
                        );
                      }),
                    }),
              ],
            }),
            (0, o.jsx)(L.Z, {
              setSlice1: n,
              setSlice2: s,
              length: t.length,
              tableRef: l,
            }),
          ],
        });
      }
      var O = i(68550),
        H = i.n(O),
        W = i(34466),
        U = i(31852),
        zkml_modules_Animation = () => {
          let e = (0, u.C)((e) => e.PortfolioReducer.OperationSystem),
            [t, { entry: i }] = (0, U.S)(),
            n = i && i.isIntersecting,
            [a, s] = (0, p.useState)(!1);
          return (
            (0, p.useEffect)(() => {
              n && s(!0);
            }, [n]),
            (0, o.jsxs)("div", {
              className: H().Animation_Container,
              children: [
                (0, o.jsx)("div", {
                  className: H().Animation_Container_intersector,
                  ref: t,
                }),
                (0, o.jsx)(W.Z, {
                  src:
                    "iOS" === e || "unknown" === e ? "/zkml.mp4" : "/zkml.webm",
                  style: { objectFit: "cover" },
                  playWithIntersection: n,
                  loop: a,
                }),
              ],
            })
          );
        };
      function ZKML() {
        let [e, t] = (0, p.useState)([]),
          [i, a] = (0, p.useState)([]),
          fetchTablesData = async () => {
            await fetch(
              "https://www.noya.network/noya_data/vaultData/Curve%20Pool/"
            )
              .then((e) => e.json())
              .then((e) => {
                a(
                  e.data.backtestingData.map((t) => ({
                    ...t,
                    verifierLink: e.data.verifierContract,
                  }))
                ),
                  t(
                    e.data.prevLocationsData.map((t) => ({
                      ...t,
                      verifierLink: e.data.verifierContract,
                    }))
                  );
              })
              .catch((e) => console.error(e));
          };
        return (
          (0, p.useEffect)(() => {
            fetchTablesData();
          }, []),
          (0, o.jsxs)("section", {
            className: s().zkml_container,
            children: [
              (0, o.jsx)("div", { className: s().zkml_star_back }),
              (0, o.jsx)("div", { className: s().zkml_star_back2 }),
              (0, o.jsx)("div", { className: s().zkml_star_back3 }),
              (0, o.jsx)("div", { className: s().zkml_star_back4 }),
              (0, o.jsx)("div", { className: s().zkml_star_back5 }),
              (0, o.jsx)("div", { className: s().zkml_star_back6 }),
              (0, o.jsx)("div", { className: s().zkml_glow }),
              (0, o.jsx)("div", { className: s().zkml_left_glow }),
              (0, o.jsx)("div", { className: s().zkml_contour_back }),
              (0, o.jsx)(n.Z, {}),
              (0, o.jsx)(ZKMLDesc, {}),
              (0, o.jsx)(Benefits, {}),
              (0, o.jsx)(zkml_modules_Animation, {}),
              (0, o.jsx)(LiquidityTable, { tableData: e }),
              (0, o.jsx)(BascketingTable, { tableData: i }),
              (0, o.jsx)(y.Z, {}),
            ],
          })
        );
      }
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
    68550: function (e) {
      e.exports = {
        Animation_Container: "animation-style_Animation_Container__fpvSo",
        Animation_Container_intersector:
          "animation-style_Animation_Container_intersector__nuXcJ",
      };
    },
    96230: function (e) {
      e.exports = {
        zkml_benefits_container: "Benefits_zkml_benefits_container__cg5pm",
        zkml_benefits_title: "Benefits_zkml_benefits_title__sw6Qy",
        zkml_benefitBox_container: "Benefits_zkml_benefitBox_container__b9o4i",
        zkml_benefitBox_container_glow:
          "Benefits_zkml_benefitBox_container_glow__5LW1E",
        zkml_benefitBox_container_line:
          "Benefits_zkml_benefitBox_container_line__SJ3JS",
        zkml_benefitBox_data: "Benefits_zkml_benefitBox_data__0MW4b",
        zkml_benefitBox_img_box: "Benefits_zkml_benefitBox_img_box__llrH6",
        zkml_benefitBox_img: "Benefits_zkml_benefitBox_img__pZUqj",
      };
    },
    15053: function (e) {
      e.exports = {
        ZKMLDesc_container: "Description_ZKMLDesc_container__dNoP5",
        ZKMLDesc_buttons_box: "Description_ZKMLDesc_buttons_box__KVO1o",
        ZKMLDesc_buttons_box_watch_video:
          "Description_ZKMLDesc_buttons_box_watch_video__pESKo",
        ZKMLDesc_buttons_box_watch_video_icon:
          "Description_ZKMLDesc_buttons_box_watch_video_icon__w_gj6",
        ZKMLDesc_button_wrapper: "Description_ZKMLDesc_button_wrapper__jERhe",
        ZKMLDesc_button_image: "Description_ZKMLDesc_button_image__Ul2pz",
        ZKMLDesc_button_gitHub: "Description_ZKMLDesc_button_gitHub__kw_8l",
        color_1: "Description_color_1__7zKTc",
        ZKMLDesc_button_docs: "Description_ZKMLDesc_button_docs__w6mRk",
      };
    },
    23443: function (e) {
      e.exports = {
        BascketingTable_container:
          "Bascketing_BascketingTable_container__AjEBm",
        BascketingTable_title: "Bascketing_BascketingTable_title__AwRFC",
        BascketingTable_box: "Bascketing_BascketingTable_box__GjCwx",
        BascketingTable_box_header:
          "Bascketing_BascketingTable_box_header__NmBC7",
        BascketingTable_box_header_line:
          "Bascketing_BascketingTable_box_header_line__gY1ey",
        BascketingTable_box_header_item:
          "Bascketing_BascketingTable_box_header_item__ajMZa",
      };
    },
    50451: function (e) {
      e.exports = {
        BascketingItem_container:
          "BascketingItem_BascketingItem_container__dEBBs",
        BascketingItem_cell: "BascketingItem_BascketingItem_cell__2xrkR",
        BascketingItem_proof_wrapper:
          "BascketingItem_BascketingItem_proof_wrapper__hfMu3",
        BascketingItem_proof_button:
          "BascketingItem_BascketingItem_proof_button__SHgq6",
        color_1: "BascketingItem_color_1__YABQg",
        color_2: "BascketingItem_color_2__bgO8Q",
      };
    },
    58541: function (e) {
      e.exports = {
        MBI_container: "MobileBascketingItem_MBI_container__ASIEY",
        top: "MobileBascketingItem_top__LV_3k",
        time: "MobileBascketingItem_time__CdoPv",
        VaultLocation_prev_proof_wrapper:
          "MobileBascketingItem_VaultLocation_prev_proof_wrapper__ZWBGv",
        VaultLocation_prev_proof_button:
          "MobileBascketingItem_VaultLocation_prev_proof_button__8oKEy",
        bottom: "MobileBascketingItem_bottom__OtLo8",
        info: "MobileBascketingItem_info___lyN3",
        color_1: "MobileBascketingItem_color_1__Nsv3a",
        color_2: "MobileBascketingItem_color_2__YGXHM",
      };
    },
    13816: function (e) {
      e.exports = {
        LiquidityTable_container: "Liquidity_LiquidityTable_container__qR1cD",
        LiquidityTable_container_blur:
          "Liquidity_LiquidityTable_container_blur__1lsGf",
        LiquidityTable_title: "Liquidity_LiquidityTable_title__WLZkZ",
        LiquidityTable_box: "Liquidity_LiquidityTable_box__7RxZf",
        LiquidityTable_box_header: "Liquidity_LiquidityTable_box_header__sSlGu",
        LiquidityTable_box_header_line:
          "Liquidity_LiquidityTable_box_header_line__T0fwk",
        LiquidityTable_box_header_item:
          "Liquidity_LiquidityTable_box_header_item___Zt0q",
        LiquidityItem_container_toolTip:
          "Liquidity_LiquidityItem_container_toolTip__ooY9e",
      };
    },
    63844: function (e) {
      e.exports = {
        LiquidityItem_container: "LiquidityItem_LiquidityItem_container__8yv5g",
        LiquidityItem_cell: "LiquidityItem_LiquidityItem_cell__e_vdd",
        LiquidityItem_proof_wrapper:
          "LiquidityItem_LiquidityItem_proof_wrapper__D_T_R",
        LiquidityItem_proof_button:
          "LiquidityItem_LiquidityItem_proof_button__Agd4P",
        color_1: "LiquidityItem_color_1__pSxq_",
        color_2: "LiquidityItem_color_2__nN2FF",
      };
    },
    641: function (e) {
      e.exports = {
        MLI_container: "MobileLiquidityItem_MLI_container__jSUxv",
        top: "MobileLiquidityItem_top__uG0ry",
        time: "MobileLiquidityItem_time__bVVeU",
        VaultLocation_prev_proof_wrapper:
          "MobileLiquidityItem_VaultLocation_prev_proof_wrapper__97i7I",
        VaultLocation_prev_proof_button:
          "MobileLiquidityItem_VaultLocation_prev_proof_button__ESh_8",
        bottom: "MobileLiquidityItem_bottom__pEAbf",
        info: "MobileLiquidityItem_info__cP1U7",
        color_1: "MobileLiquidityItem_color_1__4pcz2",
        color_2: "MobileLiquidityItem_color_2__5JFq4",
      };
    },
    53008: function (e) {
      e.exports = {
        Pagination_container: "Pagination_Pagination_container__JtvWy",
        Pagination_rows_container:
          "Pagination_Pagination_rows_container__ia8_3",
        Pagination_rows_box: "Pagination_Pagination_rows_box__KMBBx",
        Pagination_pages_container:
          "Pagination_Pagination_pages_container__FV0MJ",
        Pagination_pages_box: "Pagination_Pagination_pages_box__V_3v3",
        Pagination_pages_container_arrow:
          "Pagination_Pagination_pages_container_arrow__LEFMv",
      };
    },
    21184: function (e) {
      e.exports = {
        zkml_container: "zkml_zkml_container__F9TXd",
        zkml_star_back: "zkml_zkml_star_back__8iX9e",
        zkml_star_back2: "zkml_zkml_star_back2__MfPa_",
        zkml_star_back3: "zkml_zkml_star_back3__2ipLo",
        zkml_star_back4: "zkml_zkml_star_back4__IVDRe",
        zkml_star_back5: "zkml_zkml_star_back5__J0Jj0",
        zkml_star_back6: "zkml_zkml_star_back6__inbOV",
        zkml_glow: "zkml_zkml_glow__QPwRD",
        zkml_left_glow: "zkml_zkml_left_glow__UKZ_w",
        zkml_contour_back: "zkml_zkml_contour_back__ZwIRY",
      };
    },
    31852: function (e, t, i) {
      "use strict";
      i.d(t, {
        S: function () {
          return useIntersectionObserver;
        },
      });
      var o,
        n = i(50959),
        a = [0],
        s =
          ((o = new Map()),
          {
            getObserver: function (e) {
              var t = e.root,
                i = e.rootMargin,
                n = e.threshold,
                a = o.get(t);
              a || ((a = new Map()), o.set(t, a));
              var s = JSON.stringify({ rootMargin: i, threshold: n }),
                r = a.get(s);
              if (!r) {
                var l = new Map();
                (r = {
                  observer: new IntersectionObserver(
                    function (e) {
                      e.forEach(function (e) {
                        var t = l.get(e.target);
                        null == t || t(e);
                      });
                    },
                    { root: t, rootMargin: i, threshold: n }
                  ),
                  entryCallbacks: l,
                }),
                  a.set(s, r);
              }
              return {
                observe: function (e, t) {
                  var i, o;
                  null == (i = r) || i.entryCallbacks.set(e, t),
                    null == (o = r) || o.observer.observe(e);
                },
                unobserve: function (e) {
                  var t, i;
                  null == (t = r) || t.entryCallbacks.delete(e),
                    null == (i = r) || i.observer.unobserve(e);
                },
              };
            },
          });
      function useIntersectionObserver(e) {
        var t,
          i,
          o = null != (t = null == e ? void 0 : e.rootMargin) ? t : "0px",
          r = null != (i = null == e ? void 0 : e.threshold) ? i : a,
          l = (0, n.useRef)(null),
          c = (0, n.useRef)(null),
          _ = (0, n.useRef)(null),
          d = (0, n.useState)(),
          m = d[0],
          u = d[1],
          b = (0, n.useCallback)(
            function () {
              var e = l.current;
              if (!e) {
                u(void 0);
                return;
              }
              var t = s.getObserver({
                root: c.current,
                rootMargin: o,
                threshold: r,
              });
              t.observe(e, function (e) {
                u(e);
              }),
                (_.current = t);
            },
            [o, r]
          ),
          p = (0, n.useCallback)(function () {
            var e = _.current,
              t = l.current;
            t && (null == e || e.unobserve(t)), (_.current = null);
          }, []);
        return [
          (0, n.useCallback)(
            function (e) {
              p(), (l.current = e), b();
            },
            [b, p]
          ),
          {
            entry: m,
            rootRef: (0, n.useCallback)(
              function (e) {
                p(), (c.current = e), b();
              },
              [b, p]
            ),
          },
        ];
      }
    },
  },
  function (e) {
    e.O(0, [5881, 9774, 2888, 179], function () {
      return e((e.s = 54423));
    }),
      (_N_E = e.O());
  },
]);
