(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3333],
  {
    26655: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/report-bug",
        function () {
          return o(13801);
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
      var r = o(11527),
        _ = o(89666),
        n = o.n(_),
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
        a = o.n(i),
        l = o(73909),
        c = o(23874),
        u = o.n(c),
        x = o(63290),
        p = o.n(x),
        components_FooterLinks = (e) => {
          let { items: t, title: o } = e;
          return (0, r.jsx)("div", {
            className: p().footerLinkContainer,
            children: (0, r.jsx)("div", {
              className: p().wrapperBoxes,
              children: (0, r.jsxs)("div", {
                className: p().sectionBox,
                children: [
                  (0, r.jsx)("p", { className: p().title, children: o }),
                  (0, r.jsx)("div", {
                    children: t.map((e, t) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: p().linkBox,
                          children: (0, r.jsx)(u(), {
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
        d = o(50959),
        B = o(38603),
        m = o(41873);
      let g = [
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
        b = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      function Footer() {
        let [e, t] = (0, d.useState)(""),
          [o, _] = (0, d.useState)(!0),
          [i, l] = (0, d.useState)(!1),
          [c, u] = (0, d.useState)(!1),
          submitNewsletter = () => {
            if (b.test(e)) {
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
                      (0, m.x)("Email added to newsletter", "success"))
                    : (0, m.x)("Error adding email to newsletter", "error");
                })
                .catch((e) => {
                  (0, m.x)("Error adding email to newsletter", "error");
                })
                .finally(() => {
                  u(!1);
                });
            } else _(!1);
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
                  children: (0, r.jsx)(a(), {
                    className: n().footer_top_logo,
                    src: s,
                    alt: "noya-footer",
                  }),
                }),
                (0, r.jsx)("div", {
                  className: n().footer_links_box,
                  children: (0, r.jsx)(components_FooterLinks, {
                    items: x.Links,
                    title: "Links",
                  }),
                }),
                (0, r.jsx)("div", {
                  className: n().footer_links_box,
                  children: (0, r.jsx)(components_FooterLinks, {
                    items: x.Help,
                    title: "Help",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: n().footer_top_box_socials,
                  children: [
                    (0, r.jsx)("h3", { children: "Socials" }),
                    (0, r.jsx)("div", {
                      className: n().footer_top_box_socials_image_box,
                      children: g.map((e, t) =>
                        (0, r.jsx)(
                          "a",
                          {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: n().footer_top_box_socials_link,
                            children: (0, r.jsx)(a(), {
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
                            _(!0), t(e.target.value);
                          },
                          onKeyDown: (e) => {
                            "Enter" === e.key && submitNewsletter();
                          },
                          style: o ? {} : { color: "red" },
                        }),
                        (0, r.jsx)("button", {
                          onClick: submitNewsletter,
                          className: n().color_1,
                          children: c
                            ? (0, r.jsx)(B.Z, { className: "w-5 h-5" })
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
    13801: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          default: function () {
            return ReportBug;
          },
        });
      var r = o(11527),
        _ = o(59581),
        n = o.n(_),
        s = o(48428),
        i = o.n(s),
        a = {
          src: "/_next/static/media/bug.fbf7f943.svg",
          height: 234,
          width: 234,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = o(82438),
        c = o(50959),
        u = o(28254),
        x = o(60715),
        p = o(51194),
        d = o(41873),
        B = o(38603);
      let m = [
        "Got problem with testnet launch",
        "Can't see my balance",
        "Can't deposit my money",
        "Can't withdraw my reserve",
        "Other",
      ];
      function BugBounty() {
        let [e, t] = (0, c.useState)(!1),
          [o, _] = (0, c.useState)(""),
          [s, a] = (0, c.useState)(""),
          g = (0, u.T)(),
          [b, { isLoading: h }] = (0, p.E)(),
          submitBug = async () => {
            try {
              let e = await b({
                email: "",
                type: "Bug Report",
                subject: o,
                message: s,
              }).unwrap();
              return e ? 200 : 400;
            } catch (e) {
              return 400;
            }
          },
          f = (0, c.useRef)(null),
          closeMenu = (e) => {
            var o;
            let { target: r } = e;
            !(function (e) {
              if (!e || !("nodeType" in e)) throw Error("Node expected");
            })(r),
              (
                null === (o = f.current) || void 0 === o
                  ? void 0
                  : o.contains(r)
              )
                ? t((e) => !e)
                : t(!1);
          };
        return (
          (0, c.useEffect)(
            () => (
              document.body.addEventListener("click", closeMenu),
              () => {
                document.body.removeEventListener("click", closeMenu);
              }
            ),
            []
          )
        );
      }
      let DropDown = (e) => {
        let { items: t, setSelected: o, open: _, setOpen: s } = e,
          [l, u] = (0, c.useState)(!1);
        return (
          (0, c.useEffect)(() => {
            _
              ? u(!0)
              : setTimeout(() => {
                  u(!1);
                }, 500);
          }, [_]),
          (0, r.jsx)("section", {
            style: { display: l ? "" : "none" },
            className: ""
              .concat(
                i().BugBounty_report_dropDown_container,
                " animate__animated animate__fadeIn "
              )
              .concat(!_ && l && "animate__fadeOut"),
            children: t.map((e, t) =>
              (0, r.jsxs)(
                "div",
                {
                  onClick: () => o(e),
                  children: [
                    (0, r.jsx)(
                      n(),
                      {
                        src: a,
                        className:
                          i().BugBounty_report_dropDown_container_item_image,
                        alt: "index",
                      },
                      t
                    ),
                    (0, r.jsx)("p", { children: e }),
                  ],
                },
                e
              )
            ),
          })
        );
      };
      var g = o(35529),
        b = o(15881);
      function ReportBug() {
        return (0, r.jsxs)("section", {
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
            (0, r.jsx)(b.Z, {}),
            (0, r.jsx)(BugBounty, {}),
            (0, r.jsx)(g.Z, {}),
          ],
        });
      }
    },
    51194: function (e, t, o) {
      "use strict";
      o.d(t, {
        E: function () {
          return i;
        },
      });
      var r = o(25074);
      let _ = r.mA.injectEndpoints({ endpoints: (e) => ({}) }),
        n = r.mA.injectEndpoints({
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
        {} = _,
        {
          useSubscribeToNewsletterMutation: s,
          useSubmitContactFormMutation: i,
        } = n;
    },
    48428: function (e) {
      e.exports = {
        BugBounty_container: "BugBounty_BugBounty_container__pAzUw",
        BugBounty_report_box: "BugBounty_BugBounty_report_box__xpyXE",
        BugBounty_report_box_image:
          "BugBounty_BugBounty_report_box_image__xIuC5",
        BugBounty_report_box_text: "BugBounty_BugBounty_report_box_text__cBQ7T",
        BugBounty_report_box_selectBox:
          "BugBounty_BugBounty_report_box_selectBox__sv5_c",
        BugBounty_report_box_selectBox_title:
          "BugBounty_BugBounty_report_box_selectBox_title__yYiSk",
        BugBounty_report_box_selectBox_button:
          "BugBounty_BugBounty_report_box_selectBox_button__XeqVX",
        BugBounty_report_box_selectBox_button_text:
          "BugBounty_BugBounty_report_box_selectBox_button_text__S47jj",
        BugBounty_report_box_selectBox_button_icon:
          "BugBounty_BugBounty_report_box_selectBox_button_icon__lytXg",
        BugBounty_report_box_message:
          "BugBounty_BugBounty_report_box_message__BnFNS",
        BugBounty_report_box_message_title:
          "BugBounty_BugBounty_report_box_message_title__Nsoch",
        color_1: "BugBounty_color_1__KxD1x",
        BugBounty_report_dropDown_container:
          "BugBounty_BugBounty_report_dropDown_container__h_JQC",
        BugBounty_report_dropDown_container_item_image:
          "BugBounty_BugBounty_report_dropDown_container_item_image__BG82Y",
        home_contour_back: "BugBounty_home_contour_back__vDbIE",
        home_glow_left: "BugBounty_home_glow_left__PGrQ7",
        home_glow_right: "BugBounty_home_glow_right__xDbkG",
        home_star_back: "BugBounty_home_star_back__Ai5aE",
        home_star_back2: "BugBounty_home_star_back2__jXOUk",
        BugBounty_glow: "BugBounty_BugBounty_glow__Z7gB0",
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
      return e((e.s = 26655));
    }),
      (_N_E = e.O());
  },
]);
