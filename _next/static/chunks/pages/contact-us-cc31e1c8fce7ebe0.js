(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8455],
  {
    35139: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact-us",
        function () {
          return o(42194);
        },
      ]);
    },
    35529: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return Footer;
        },
      });
      var s = o(11527),
        r = o(89666),
        _ = o.n(r),
        n = {
          src: "/_next/static/media/Noya.b5912bbb.png",
          height: 95,
          width: 256,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEX19fXx8fH09PTz8/P4+Pj09PQkGPqcAAAABnRSTlMKGxk4Wi804abeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAG0lEQVR4nGNgYGBiZAABFkZWZkZmJhYGJqgIAAG7ACAptUc+AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        },
        a = o(59581),
        i = o.n(a),
        l = o(73909),
        c = o(23874),
        u = o.n(c),
        x = o(63290),
        p = o.n(x),
        components_FooterLinks = (e) => {
          let { items: t, title: o } = e;
          return (0, s.jsx)("div", {
            className: p().footerLinkContainer,
            children: (0, s.jsx)("div", {
              className: p().wrapperBoxes,
              children: (0, s.jsxs)("div", {
                className: p().sectionBox,
                children: [
                  (0, s.jsx)("p", { className: p().title, children: o }),
                  (0, s.jsx)("div", {
                    children: t.map((e, t) =>
                      (0, s.jsx)(
                        "div",
                        {
                          className: p().linkBox,
                          children: (0, s.jsx)(u(), {
                            target: "_blank",
                            href: e.url,
                            passHref: !0,
                            children: (0, s.jsx)("p", { children: e.title }),
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
        d = o(50959),
        m = o(38603),
        b = o(41873);
      let h = [
          {
            icon: l.Z,
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
        let [e, t] = (0, d.useState)(""),
          [o, r] = (0, d.useState)(!0),
          [a, l] = (0, d.useState)(!1),
          [c, u] = (0, d.useState)(!1),
          submitNewsletter = () => {
            if (g.test(e)) {
              u(!0);
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
                    ? (l(!0),
                      t(""),
                      (0, b.x)("Email added to newsletter", "success"))
                    : (0, b.x)("Error adding email to newsletter", "error");
                })
                .catch((e) => {
                  (0, b.x)("Error adding email to newsletter", "error");
                })
                .finally(() => {
                  u(!1);
                });
            } else r(!1);
          },
          x = {
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
        return (0, s.jsxs)("section", {
          className: _().footer_container,
          id: "newsletter",
          children: [
            (0, s.jsx)("div", { className: _().footer_container_line }),
            (0, s.jsxs)("div", {
              className: _().footer_top_box,
              children: [
                (0, s.jsx)("div", { className: _().footer_top_box_line }),
                (0, s.jsx)("div", {
                  className: _().footer_top_logo_box,
                  children: (0, s.jsx)(i(), {
                    className: _().footer_top_logo,
                    src: n,
                    alt: "noya-footer",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: _().footer_links_box,
                  children: (0, s.jsx)(components_FooterLinks, {
                    items: x.Links,
                    title: "Links",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: _().footer_links_box,
                  children: (0, s.jsx)(components_FooterLinks, {
                    items: x.Help,
                    title: "Help",
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: _().footer_top_box_socials,
                  children: [
                    (0, s.jsx)("h3", { children: "Socials" }),
                    (0, s.jsx)("div", {
                      className: _().footer_top_box_socials_image_box,
                      children: h.map((e, t) =>
                        (0, s.jsx)(
                          "a",
                          {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: _().footer_top_box_socials_link,
                            children: (0, s.jsx)(i(), {
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
                (0, s.jsxs)("div", {
                  className: _().footer_news_letter_container,
                  children: [
                    (0, s.jsx)("h3", { children: "Newsletter" }),
                    (0, s.jsx)("p", { children: "Sign up to our Newsletter:" }),
                    (0, s.jsxs)("div", {
                      className: ""
                        .concat(
                          a ? "glow-button-success" : "glow-button",
                          " rounded-[5px] "
                        )
                        .concat(_().footer_news_letter_input_box),
                      children: [
                        (0, s.jsx)("input", {
                          type: "text",
                          id: "footer-newsletter-input",
                          placeholder: "Your e-mail here",
                          value: e,
                          onChange: (e) => {
                            r(!0), t(e.target.value);
                          },
                          onKeyDown: (e) => {
                            "Enter" === e.key && submitNewsletter();
                          },
                          style: o ? {} : { color: "red" },
                        }),
                        (0, s.jsx)("button", {
                          onClick: submitNewsletter,
                          className: _().color_1,
                          children: c
                            ? (0, s.jsx)(m.Z, { className: "w-5 h-5" })
                            : "Submit",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: _().footer_bottom_box,
              children: [
                (0, s.jsx)("p", {
                  children: "\xa9 2025 NOYA. All rights reserved.",
                }),
                (0, s.jsx)("div", {
                  className: _().footer_email_box,
                  children: (0, s.jsx)("div", {
                    className: _().footer_email_wrapper,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    42194: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return contact_us;
          },
        });
      var s = o(11527),
        r = o(59581),
        _ = o.n(r),
        n = o(39448),
        a = o.n(n),
        i = o(82438),
        l = o(50959),
        c = o(28254),
        u = o(60715),
        x = o(51194),
        p = o(38603),
        d = o(41873);
      let m = ["ZKML", "Omnivaults", "Deposit", "Suggestion", "Other"];
      function ContactUs() {
        let [e, t] = (0, l.useState)(!1),
          [o, r] = (0, l.useState)(""),
          [n, b] = (0, l.useState)(""),
          [h, g] = (0, l.useState)(""),
          B = (0, c.T)(),
          [f, { isLoading: y, isSuccess: j }] = (0, x.E)(),
          submitMessage = async () => {
            try {
              let e = await f({
                type: "Contact Form",
                subject: o,
                message: n,
                email: h,
              }).unwrap();
              return e ? 200 : 400;
            } catch (e) {
              return 400;
            }
          },
          w = (0, l.useRef)(null),
          closeMenu = (e) => {
            var o;
            let { target: s } = e;
            !(function (e) {
              if (!e || !("nodeType" in e)) throw Error("Node expected");
            })(s),
              (
                null === (o = w.current) || void 0 === o
                  ? void 0
                  : o.contains(s)
              )
                ? t((e) => !e)
                : t(!1);
          };
        return (
          (0, l.useEffect)(
            () => (
              document.body.addEventListener("click", closeMenu),
              () => {
                document.body.removeEventListener("click", closeMenu);
              }
            ),
            []
          ),
          (0, s.jsxs)("section", {
            className: a().BugBounty_container,
            children: [
              (0, s.jsx)("div", { className: a().home_contour_back }),
              (0, s.jsx)("div", { className: a().home_glow_left }),
              (0, s.jsx)("div", { className: a().home_glow_right }),
              (0, s.jsx)("div", { className: a().home_star_back }),
              (0, s.jsx)("div", { className: a().home_star_back2 }),
              (0, s.jsxs)("div", {
                className: a().BugBounty_report_box,
                children: [
                  (0, s.jsxs)("div", {
                    className: a().BugBounty_report_box_text,
                    children: [
                      (0, s.jsx)("h2", {
                        className: "gradient-text",
                        children: "Contact Us",
                      }),
                      (0, s.jsx)("p", { children: "We Listen" }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: a().BugBounty_report_box_selectBox,
                    children: [
                      (0, s.jsx)("p", {
                        className: a().BugBounty_report_box_selectBox_title,
                        children: "Subject",
                      }),
                      (0, s.jsxs)("div", {
                        ref: w,
                        className: a().BugBounty_report_box_selectBox_button,
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              a().BugBounty_report_box_selectBox_button_text,
                            children: "" === o ? "Select a subject" : o,
                          }),
                          (0, s.jsx)(_(), {
                            style: e ? { rotate: "180deg" } : {},
                            src: i.Z,
                            alt: "arrow",
                            className:
                              a().BugBounty_report_box_selectBox_button_icon,
                          }),
                          (0, s.jsx)(DropDown, {
                            items: m,
                            setSelected: r,
                            open: e,
                            setOpen: t,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: a().BugBounty_report_box_message,
                    children: [
                      (0, s.jsx)("p", {
                        className: a().BugBounty_report_box_message_title,
                        children: "Email",
                      }),
                      (0, s.jsx)("input", {
                        value: h,
                        onChange: (e) => {
                          g(e.target.value);
                        },
                        placeholder: "Write your e-mail here",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: a().BugBounty_report_box_message,
                    children: [
                      (0, s.jsx)("p", {
                        className: a().BugBounty_report_box_message_title,
                        children: "Message",
                      }),
                      (0, s.jsx)("textarea", {
                        value: n,
                        onChange: (e) => {
                          b(e.target.value);
                        },
                        placeholder: "Write your mail here",
                      }),
                    ],
                  }),
                  (0, s.jsx)("button", {
                    onClick: async () => {
                      if (!y) {
                        if (!h.trim()) {
                          (0, d.x)("Please enter an email", "error");
                          return;
                        }
                        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(h)) {
                          (0, d.x)("Please enter a valid email", "error");
                          return;
                        }
                        if (n.length < 10) {
                          (0, d.x)(
                            "Message should be at least 10 characters long",
                            "error"
                          );
                          return;
                        }
                        if ("" === o) {
                          (0, d.x)("Please select a subject", "error");
                          return;
                        }
                        200 === (await submitMessage())
                          ? (B((0, u.L8)("contact")), b(""), g(""), r(""))
                          : (0, d.x)("Something went wrong", "error");
                      }
                    },
                    children: y
                      ? (0, s.jsx)(p.Z, { className: "w-5 h-5" })
                      : "Send Mail",
                  }),
                ],
              }),
            ],
          })
        );
      }
      let DropDown = (e) => {
        let { items: t, setSelected: o, open: r, setOpen: _ } = e,
          [n, i] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            r
              ? i(!0)
              : setTimeout(() => {
                  i(!1);
                }, 500);
          }, [r]),
          (0, s.jsx)("section", {
            style: { display: n ? "" : "none" },
            className: ""
              .concat(
                a().BugBounty_report_dropDown_container,
                " animate__animated animate__fadeIn "
              )
              .concat(!r && n && "animate__fadeOut"),
            children: t.map((e, t) =>
              (0, s.jsx)(
                "div",
                {
                  onClick: () => o(e),
                  children: (0, s.jsx)("p", { children: e }),
                },
                e
              )
            ),
          })
        );
      };
      var b = o(35529),
        h = o(15881),
        contact_us = () =>
          (0, s.jsxs)("section", {
            style: {
              height: "fitContent",
              width: "100vw",
              minHeight: "100vh",
              backgroundColor: "#000000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            },
            children: [
              (0, s.jsx)(h.Z, {}),
              (0, s.jsx)(ContactUs, {}),
              (0, s.jsx)(b.Z, {}),
            ],
          });
    },
    51194: function (e, t, o) {
      "use strict";
      o.d(t, {
        E: function () {
          return a;
        },
      });
      var s = o(25074);
      let r = s.mA.injectEndpoints({ endpoints: (e) => ({}) }),
        _ = s.mA.injectEndpoints({
          endpoints: (e) => ({
            submitContactForm: e.mutation({
              transformResponse: (e) => e.data,
              query: (e) => ({
                url: "users/contact-form",
                method: "POST",
                body: e,
              }),
            }),
            subscribeToNewsletter: e.mutation({
              transformResponse: (e) => e.data,
              query: (e) => ({
                url: "users/newsletter/subscribe",
                method: "POST",
                body: e,
              }),
            }),
          }),
        }),
        {} = r,
        {
          useSubscribeToNewsletterMutation: n,
          useSubmitContactFormMutation: a,
        } = _;
    },
    39448: function (e) {
      e.exports = {
        BugBounty_container: "contactus-style_BugBounty_container__qrS3I",
        BugBounty_report_box: "contactus-style_BugBounty_report_box__6JqqN",
        BugBounty_report_box_image:
          "contactus-style_BugBounty_report_box_image__v76TE",
        BugBounty_report_box_text:
          "contactus-style_BugBounty_report_box_text__d_SWT",
        BugBounty_report_box_selectBox:
          "contactus-style_BugBounty_report_box_selectBox__8hBkJ",
        BugBounty_report_box_selectBox_title:
          "contactus-style_BugBounty_report_box_selectBox_title__Ws1yz",
        BugBounty_report_box_selectBox_button:
          "contactus-style_BugBounty_report_box_selectBox_button__CTt6I",
        BugBounty_report_box_selectBox_button_text:
          "contactus-style_BugBounty_report_box_selectBox_button_text__iGUyy",
        BugBounty_report_box_selectBox_button_icon:
          "contactus-style_BugBounty_report_box_selectBox_button_icon__TNPdo",
        BugBounty_report_box_message:
          "contactus-style_BugBounty_report_box_message__FLazb",
        BugBounty_report_box_message_title:
          "contactus-style_BugBounty_report_box_message_title__OjJNE",
        color_1: "contactus-style_color_1__PHERV",
        BugBounty_report_dropDown_container:
          "contactus-style_BugBounty_report_dropDown_container__Hkh2U",
        BugBounty_report_dropDown_container_item_image:
          "contactus-style_BugBounty_report_dropDown_container_item_image__aAsRt",
        home_contour_back: "contactus-style_home_contour_back__xH6sH",
        home_glow_left: "contactus-style_home_glow_left__l8qpB",
        home_glow_right: "contactus-style_home_glow_right__Jlt98",
        home_star_back: "contactus-style_home_star_back__QJouQ",
        home_star_back2: "contactus-style_home_star_back2__H_KvJ",
        BugBounty_glow: "contactus-style_BugBounty_glow__2UCUm",
      };
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
  },
  function (e) {
    e.O(0, [5881, 9774, 2888, 179], function () {
      return e((e.s = 35139));
    }),
      (_N_E = e.O());
  },
]);
