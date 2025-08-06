(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1233],
  {
    86259: function (e, t, o) {
      "use strict";
      var s = o(11527);
      o(50959),
        (t.Z = function (e) {
          let { className: t } = e;
          return (0, s.jsx)("svg", {
            className: t,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 448 512",
            children: (0, s.jsx)("path", {
              d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z",
            }),
          });
        });
    },
    35529: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return Footer;
        },
      });
      var s = o(11527),
        n = o(89666),
        r = o.n(n),
        i = {
          src: "/_next/static/media/Noya.b5912bbb.png",
          height: 95,
          width: 256,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEX19fXx8fH09PTz8/P4+Pj09PQkGPqcAAAABnRSTlMKGxk4Wi804abeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAG0lEQVR4nGNgYGBiZAABFkZWZkZmJhYGJqgIAAG7ACAptUc+AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        },
        a = o(59581),
        l = o.n(a),
        c = o(73909),
        _ = o(23874),
        x = o.n(_),
        d = o(63290),
        p = o.n(d),
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
                          children: (0, s.jsx)(x(), {
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
        u = o(50959),
        f = o(38603),
        m = o(41873);
      let h = [
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
        let [e, t] = (0, u.useState)(""),
          [o, n] = (0, u.useState)(!0),
          [a, c] = (0, u.useState)(!1),
          [_, x] = (0, u.useState)(!1),
          submitNewsletter = () => {
            if (b.test(e)) {
              x(!0);
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
                  x(!1);
                });
            } else n(!1);
          },
          d = {
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
          className: r().footer_container,
          id: "newsletter",
          children: [
            (0, s.jsx)("div", { className: r().footer_container_line }),
            (0, s.jsxs)("div", {
              className: r().footer_top_box,
              children: [
                (0, s.jsx)("div", { className: r().footer_top_box_line }),
                (0, s.jsx)("div", {
                  className: r().footer_top_logo_box,
                  children: (0, s.jsx)(l(), {
                    className: r().footer_top_logo,
                    src: i,
                    alt: "noya-footer",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: r().footer_links_box,
                  children: (0, s.jsx)(components_FooterLinks, {
                    items: d.Links,
                    title: "Links",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: r().footer_links_box,
                  children: (0, s.jsx)(components_FooterLinks, {
                    items: d.Help,
                    title: "Help",
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: r().footer_top_box_socials,
                  children: [
                    (0, s.jsx)("h3", { children: "Socials" }),
                    (0, s.jsx)("div", {
                      className: r().footer_top_box_socials_image_box,
                      children: h.map((e, t) =>
                        (0, s.jsx)(
                          "a",
                          {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: r().footer_top_box_socials_link,
                            children: (0, s.jsx)(l(), {
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
                  className: r().footer_news_letter_container,
                  children: [
                    (0, s.jsx)("h3", { children: "Newsletter" }),
                    (0, s.jsx)("p", { children: "Sign up to our Newsletter:" }),
                    (0, s.jsxs)("div", {
                      className: ""
                        .concat(
                          a ? "glow-button-success" : "glow-button",
                          " rounded-[5px] "
                        )
                        .concat(r().footer_news_letter_input_box),
                      children: [
                        (0, s.jsx)("input", {
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
                          style: o ? {} : { color: "red" },
                        }),
                        (0, s.jsx)("button", {
                          onClick: submitNewsletter,
                          className: r().color_1,
                          children: _
                            ? (0, s.jsx)(f.Z, { className: "w-5 h-5" })
                            : "Submit",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: r().footer_bottom_box,
              children: [
                (0, s.jsx)("p", {
                  children: "\xa9 2025 NOYA. All rights reserved.",
                }),
                (0, s.jsx)("div", {
                  className: r().footer_email_box,
                  children: (0, s.jsx)("div", {
                    className: r().footer_email_wrapper,
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    51869: function (e, t, o) {
      "use strict";
      var s = o(11527),
        n = o(15215),
        r = o(38603),
        i = o(51157);
      o(50959);
      let twitterText = (e) =>
        "\n\uD83D\uDE80 I'm diving into @NetworkNoya Space Race and you should too! \uD83C\uDF0C NOYA uses AI Agents to optimize for Omnichain yields. Join me now and get 10% more points!\nTag @NetworkNoya to ensure you're on board. #NoyaSpaceRace\n  \nClick below ⬇️⬇️⬇️ https://app.noya.ai/space-race-onboarding/".concat(
          e,
          "\n"
        );
      t.Z = function (e) {
        let { open: t, onClose: o, onSend: a, referralCode: l, loading: c } = e,
          { className: _, dialogRef: x, handleClose: d } = (0, i.Z)(o, t);
        return (0, s.jsx)("div", {
          ref: x,
          className: _,
          onClick: d,
          children: (0, s.jsxs)("div", {
            onClick: (e) => e.stopPropagation(),
            className:
              "w-full max-w-[min(661px,90%)] px-4 mx-auto relative h-[445px] max-h-[80vh] bg-black rounded-md shadow-2xl shadow-gradient flex flex-col items-center justify-between py-4",
            children: [
              (0, s.jsx)("button", {
                onClick: d,
                className:
                  "cursor-pointer absolute top-5 right-5 outline-none border-none bg-transparent",
                children: (0, s.jsx)(n.Z, { className: "w-4 h-4" }),
              }),
              (0, s.jsx)("p", {
                className:
                  "font-RussoOne text-[18px] md:text-[20px] lg:text-[22px] font-normal text-center text-white max-w-[480px]",
                children:
                  "The following tweet will be posted on your X account",
              }),
              (0, s.jsx)("div", { className: "gradient-border" }),
              (0, s.jsxs)("p", {
                className:
                  "font-EuclidCircularB text-[12px] md:text-[14px] font-normal  text-center text-[#E2CA4C] max-w-[480px]",
                children: [
                  "Please",
                  " ",
                  (0, s.jsx)("span", {
                    className:
                      "font-bold font-EuclidCircularB text-[12px] md:text-[14px]",
                    children: "confirm",
                  }),
                  " ",
                  "that you have read and agree with the content of the following tweet",
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "border-solid border border-[#FFFFFF26] backdrop-blur-md rounded-[5px] px-6 py-4 bg-[#ffffff1a] w-full max-w-[480px]",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "text-[12px] md:text-[14px] font-EuclidCircularB font-medium leading-6 text-[#ffffffbb]",
                    children: twitterText(l),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "w-full mt-4 flex flex-col items-start justify-start gap-3",
                  }),
                ],
              }),
              (0, s.jsx)("button", {
                onClick: () => {
                  a().then(() => {
                    d();
                  });
                },
                className:
                  "moving-bg font-RussoOne text-[16xp] md:text-[18px] font-normal text-white w-[185px] h-[41px] rounded-[5px]",
                children: c
                  ? (0, s.jsx)(r.Z, { className: "w-6 h-6" })
                  : "Share Post",
              }),
            ],
          }),
        });
      };
    },
    20471: function (e, t, o) {
      "use strict";
      var s = o(11527),
        n = o(23874),
        r = o.n(n);
      o(50959);
      var i = o(19202);
      t.Z = function (e) {
        let { points: t, children: o, done: n, locked: a } = e;
        return (0, s.jsxs)("div", {
          className: "flex justify-end items-center gap-4",
          children: [
            o,
            (0, s.jsx)("div", {
              className: "items-center ".concat(
                !n && "opacity-25",
                " gap-2 hidden sm:flex"
              ),
              children: (0, s.jsxs)("p", {
                className: "font-bold w-full font-Poppins ".concat(
                  n ? (a ? "text-[#8b8b88]" : "text-[#3AD265]") : "text-white",
                  " text-[14px] text-center sm:text-start"
                ),
                children: [
                  "+ ",
                  t,
                  " points",
                  " ",
                  n && a
                    ? (0, s.jsx)(r(), {
                        href: "/",
                        target: "_blank",
                        "data-tooltip-id": "info-tooltip-text",
                        "data-tooltip-content": "Bond at least $".concat(
                          i.jM,
                          " to unlock these points."
                        ),
                        children: "\uD83D\uDD12",
                      })
                    : (0, s.jsx)("span", {
                        className: "text-transparent select-none",
                        children: "\uD83D\uDD12",
                      }),
                ],
              }),
            }),
          ],
        });
      };
    },
    25949: function (e, t, o) {
      "use strict";
      o.d(t, {
        q: function () {
          return twitterText;
        },
      }),
        o(11527),
        o(50959),
        o(20471),
        o(86259),
        o(38603);
      let twitterText = (e) =>
        encodeURIComponent(
          "\n\uD83D\uDE80 I'm diving into @NetworkNoya Space Race and you should too! \uD83C\uDF0C NOYA uses AI Agents to optimize for Omnichain yields. Join me now and get 10% more points!\nTag @NetworkNoya to ensure you're on board. #NoyaSpaceRace\n  \nClick below ⬇️⬇️⬇️ https://app.noya.ai/space-race-onboarding/".concat(
            e,
            "\n"
          )
        );
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
]);
