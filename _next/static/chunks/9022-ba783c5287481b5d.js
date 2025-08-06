"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9022],
  {
    4432: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return step_2;
        },
        H: function () {
          return m;
        },
      });
      var s = n(11527),
        o = n(38603),
        a = n(59581),
        r = n.n(a),
        i = n(50959),
        l = n(86259),
        step_2_Tip = (e) => {
          let { children: t, done: n = !1 } = e;
          return (0, s.jsxs)("div", {
            className: "flex items-start w-full justify-start",
            children: [
              n
                ? (0, s.jsx)(l.Z, {
                    className:
                      "w-[15px] h-[15px] mt-[2px] fill-[#3AD265] mr-1 -ml-1",
                  })
                : (0, s.jsx)("div", {
                    className:
                      "w-[6px] h-[6px] rounded-full bg-white mt-2 mr-3",
                  }),
              (0, s.jsx)("p", {
                className:
                  "font-light w-full font-EuclidCircularB text-white text-[16px] text-start sm:text-start",
                children: t,
              }),
            ],
          });
        },
        c = n(23874),
        d = n.n(c),
        step_2_SocialBox = function (e) {
          let {
              icon: t,
              link: n,
              text: a,
              done: i,
              onClick: c,
              loading: u = !1,
              keepLink: x = !1,
            } = e,
            f = n || x ? d() : "div";
          return (0, s.jsxs)(f, {
            target: "_blank",
            href: n,
            onClick: i && !x ? void 0 : c,
            className:
              "gradient-border-button-extra-thick glow-button relative cursor-pointer max-w-full w-[280px] py-2 px-8 bg-transparent text-white border-none outline-none font-EuclidCircularB font-medium text-[12px] flex items-center justify-center gap-2 ".concat(
                i &&
                  "".concat(!x && "pointer-events-none", " glow-button-success")
              ),
            children: [
              a,
              i &&
                (0, s.jsx)("div", {
                  className:
                    "absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#ffffff] flex items-center justify-center",
                  children: (0, s.jsx)(l.Z, {
                    className: "w-3 h-3 fill-green-600",
                  }),
                }),
              u
                ? (0, s.jsx)(o.Z, { className: "w-4 h-4" })
                : (0, s.jsx)(r(), {
                    src: "/".concat(t, ".svg"),
                    width: 18,
                    height: 18,
                    alt: "".concat(t, "-").concat(a),
                  }),
            ],
          });
        },
        u = n(20471),
        x = n(58791),
        f = n(41873),
        h = n(25949),
        p = n(19202);
      let m = RegExp(
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$"
      );
      var step_2 = function (e) {
        var t, n;
        let {
            loading: a,
            goNext: c,
            email: d,
            setEmail: w,
            address: b,
            emailDisabled: j,
            twitterDisabled: v,
            discordVerified: g,
            discordDisabled: y,
            twitterPostDisabled: N,
            twitterPostLoading: k,
            sendTwitterPost: C,
            bonded: _,
            hasTwitterToken: E,
            twitterPostUrl: Z,
            locked: B,
            isWhiteListed: F,
            userData: R,
            copyReferralLink: S,
          } = e,
          [D, { isLoading: A, isSuccess: T }] = (0, x.Pr)(),
          P = i.useRef(0),
          sendEmail = async (e) => {
            if ((e.preventDefault(), !A)) {
              if (Date.now() - P.current < 3e4) {
                (0, f.x)(
                  "Please wait 30 seconds before sending another email",
                  "error"
                );
                return;
              }
              if (!m.test(d)) {
                (0, f.x)("Please enter a valid email address", "error");
                return;
              }
              d &&
                D({ address: b, email: d })
                  .unwrap()
                  .then((e) => {
                    (0, f.x)("Verification email sent", "success"),
                      (P.current = Date.now());
                  })
                  .catch((e) => {
                    (0, f.x)(e.data.message, "error");
                  });
            }
          };
        return (0, s.jsxs)("div", {
          className: "w-full",
          children: [
            (0, s.jsxs)("div", {
              className:
                "flex flex-col sm:flex-row items-center sm:items-start justify-center relative gap-6 animate-fadein",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-1 flex-col text-white justify-start gap-4 self-center",
                  children: [
                    (0, s.jsx)(u.Z, {
                      locked: B,
                      points: 500,
                      done: y && g,
                      children: (0, s.jsx)(step_2_SocialBox, {
                        icon: "discord",
                        text:
                          g || y
                            ? y && !g
                              ? "Verify your Discord"
                              : "Discord Connected"
                            : "Join our Discord",
                        link:
                          y && !g
                            ? "https://discord.com/channels/1100874221959249932/1101085939327045712"
                            : ""
                                .concat(
                                  "https://api.noya.ai/noya_space",
                                  "/auth/discord?address="
                                )
                                .concat(b),
                        done: y && g,
                      }),
                    }),
                    (0, s.jsx)(u.Z, {
                      locked: B,
                      points: 500,
                      done: v,
                      children: (0, s.jsx)(step_2_SocialBox, {
                        icon: "twitter",
                        text: v ? "X Connected" : "Connect and follow us on X",
                        link: ""
                          .concat(
                            "https://api.noya.ai/noya_space",
                            "/auth/twitter?address="
                          )
                          .concat(b),
                        done: v,
                      }),
                    }),
                    (0, s.jsx)(u.Z, {
                      locked: B,
                      points: 500,
                      done: j,
                      children: (0, s.jsxs)("form", {
                        onSubmit: sendEmail,
                        className:
                          "gradient-border-button-extra-thick glow-button bg-[#FFFFFF14] flex items-center w-[280px] max-w-full relative",
                        children: [
                          j &&
                            (0, s.jsx)("div", {
                              className:
                                "absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#ffffff] flex items-center justify-center",
                              children: (0, s.jsx)(l.Z, {
                                className: "w-3 h-3 fill-green-600",
                              }),
                            }),
                          (0, s.jsx)("input", {
                            disabled: j || A,
                            value: d,
                            onChange: (e) => !A && !j && w(e.target.value),
                            type: "email",
                            required: !0,
                            placeholder: "Write your email here",
                            className:
                              "bg-transparent outline-none flex-1 border-none pl-6 py-3 text-white font-EuclidCircularB text-[12px]",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "self-stretch gradient-border-vertical !h-auto",
                          }),
                          (0, s.jsx)("button", {
                            disabled: j || A,
                            type: "submit",
                            className: "".concat(
                              !j && "cursor-pointer",
                              " w-14 bg-transparent border-none outline-none mx-2 text-white font-semibold font-EuclidCircularB text-[12px]"
                            ),
                            children: A
                              ? (0, s.jsx)(o.Z, { className: "w-4 h-4" })
                              : j
                              ? "Verified"
                              : "Submit",
                          }),
                          T &&
                            (0, s.jsx)("p", {
                              className:
                                "font-EuclidCircularB text-[12px] font-semibold text-[#3AD265] absolute top-full mt-2 w-full left-0 animate-fadeinReallyFast",
                              children:
                                "Email verification sent, check your inbox!",
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "self-stretch gradient-border-vertical !h-auto",
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex-1 flex flex-col items-start justify-start gap-4 self-center",
                  children: [
                    (0, s.jsxs)(step_2_Tip, {
                      children: [
                        "Every week, your",
                        " ",
                        (0, s.jsx)("span", {
                          className:
                            "font-semibold font-EuclidCircularB text-white text-[16px] text-center sm:text-start",
                          children: "Points",
                        }),
                        " ",
                        "convert into",
                        " ",
                        (0, s.jsx)("span", {
                          className:
                            "font-semibold font-EuclidCircularB text-white text-[16px] text-center sm:text-start",
                          children: "Stars",
                        }),
                        " ",
                        (0, s.jsx)(r(), {
                          src: "/star-needed-solid.svg",
                          width: 18,
                          height: 18,
                          alt: "noya-stars",
                          className: "inline-block -mb-1",
                        }),
                        " ",
                      ],
                    }),
                    (0, s.jsx)(step_2_Tip, {
                      children:
                        "The more stars you have, the higher your level will be",
                    }),
                    (0, s.jsxs)(step_2_Tip, {
                      children: [
                        "Higher levels give you perks, merch, gated access to vaults, and",
                        " ",
                        (0, s.jsx)("span", {
                          className:
                            "font-semibold font-EuclidCircularB text-white text-[16px] text-center sm:text-start",
                          children: "bigger multipliers",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(step_2_Tip, {
                      done: v && y && j && _,
                      children: [
                        "You get a",
                        " ",
                        (0, s.jsx)("span", {
                          className:
                            "font-semibold font-EuclidCircularB text-white text-[16px] text-center sm:text-start",
                          children: "weekly spin",
                        }),
                        " ",
                        "for more",
                        " ",
                        (0, s.jsx)("span", {
                          className:
                            "font-semibold font-EuclidCircularB text-white text-[16px] text-center sm:text-start",
                          children: "rewards",
                        }),
                        " ",
                        "if you connect your socials and bond liquidity",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            F &&
              (0, s.jsxs)("p", {
                className:
                  "text-[#FFFFFF80] text-center max-w-[620px] mx-auto mt-6 font-EuclidCircularB text-[14px] font-normal",
                children: [
                  "ⓘ",
                  " ",
                  (0, s.jsx)("span", {
                    className:
                      "text-[#EFD860] font-EuclidCircularB text-[14px] font-bold",
                    children: "Important",
                  }),
                  ": To claim the points, you must deposit and bond at least $",
                  p.jM,
                  " in any of our vaults",
                ],
              }),
            (0, s.jsxs)("div", {
              className: "flex justify-center items-center gap-4 mt-8",
              children: [
                F
                  ? (0, s.jsx)("button", {
                      onClick: A ? void 0 : c,
                      className:
                        "moving-bg px-4 h-[40px] rounded-[5px] border-none outline-none text-white font-bold font-RussoOne text-[14px] block",
                      children: a
                        ? (0, s.jsx)(o.Z, { className: "w-6 h-6" })
                        : "Next Step",
                    })
                  : (0, s.jsx)("button", {
                      onClick: S,
                      className:
                        "hover-button-wrapper p-px rounded-[5px] border-none outline-none decoration-none !mt-0",
                      children: (0, s.jsx)("div", {
                        className:
                          "text-white hover-button font-bold h-[38px] px-4 rounded-[5px] font-RussoOne text-[14px] flex items-center justify-center",
                        children: a
                          ? (0, s.jsx)(o.Z, { className: "w-6 h-6" })
                          : "Copy Referral Link",
                      }),
                    }),
                !F &&
                  (null == R ? void 0 : R.referralCode) &&
                  (0, s.jsx)("a", {
                    href: "https://twitter.com/intent/tweet?text=".concat(
                      (0, h.q)(
                        null !==
                          (n =
                            null !==
                              (t = null == R ? void 0 : R.customReferralLink) &&
                            void 0 !== t
                              ? t
                              : null == R
                              ? void 0
                              : R.referralCode) && void 0 !== n
                          ? n
                          : ""
                      )
                    ),
                    target: "_blank",
                    className:
                      "moving-bg p-px rounded-[5px] border-none outline-none decoration-none !mt-0",
                    children: (0, s.jsx)("div", {
                      className:
                        "text-white font-bold h-[38px] px-4 rounded-[5px] font-RussoOne text-[14px] flex items-center justify-center",
                      children: "Share on Twitter",
                    }),
                  }),
              ],
            }),
          ],
        });
      };
    },
    43493: function (e, t, n) {
      n.d(t, {
        N: function () {
          return useHandleSocialConnections;
        },
      });
      var s = n(79096),
        o = n(50959),
        a = n(85703);
      function useHandleSocialConnections() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: t, replace: n } = (0, s.useRouter)(),
          { twitter: r, discord: i } = t;
        (0, o.useEffect)(() => {
          let handleConnectionResult = (e, t) => {
            if ("string" != typeof t) return;
            let n = "",
              s = "error";
            switch (t) {
              case "authentication-failed":
                n = "Oops! We couldn't authenticate your ".concat(
                  e,
                  " account. Want to try again?"
                );
                break;
              case "already-in-use":
                n = "Looks like this ".concat(
                  e,
                  " account is already linked to another user. Got another one?"
                );
                break;
              case "not-following-noya":
                n = "Looks like this ".concat(
                  e,
                  " account is not following Noya."
                );
                break;
              case "user-not-found":
                n = "We couldn't find your ".concat(
                  e,
                  " account. Double-check your details?"
                );
                break;
              case "internal-error":
                n = "Something went wrong on our end with ".concat(
                  e,
                  ". Give it another shot?"
                );
                break;
              case "success":
                (n = "Awesome! Your ".concat(e, " account is now connected.")),
                  (s = "success");
                break;
              default:
                return;
            }
            "not-following-noya" === t
              ? a.ZP.showToast(n, s, {
                  onClick: () => {
                    window.open("https://x.com/NetworkNoya", "_blank");
                  },
                  text: "Follow",
                })
              : a.ZP.showToast(n, s);
          };
          if (
            (handleConnectionResult("X", r),
            handleConnectionResult("Discord", i),
            r || i)
          ) {
            var s, o, l;
            let a = { ...t };
            delete a.twitter, delete a.discord;
            let r =
              null !==
                (o =
                  null === (s = e.preserveParams) || void 0 === s
                    ? void 0
                    : s.reduce((e, n) => (t[n] && (e[n] = t[n]), e), {})) &&
              void 0 !== o
                ? o
                : {};
            n({
              pathname:
                null !== (l = e.redirectPath) && void 0 !== l
                  ? l
                  : window.location.pathname,
              query: r,
            });
          }
        }, [r, i]);
      }
    },
  },
]);
