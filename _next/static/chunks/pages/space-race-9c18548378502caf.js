(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [486],
  {
    61255: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/space-race",
        function () {
          return a(1228);
        },
      ]);
    },
    48411: function (e, t, a) {
      "use strict";
      var s = a(11527);
      a(50959);
      var r = a(59581),
        n = a.n(r),
        i = a(15881),
        l = a(88562),
        o = a.n(l);
      t.Z = (e) => {
        let {
          title: t,
          description: a,
          headerImage: r,
          showHeader: l = !0,
          customButton: c,
          noButton: d,
          className: u,
          firstTextClassName: x,
          secondTextClassName: m,
          contentBoxClassName: p,
          reducedHeight: f = !1,
          button: h = {
            text: "Explore Vaults",
            icon: "/vault.svg",
            onClick: () => {},
            color: "color_1",
            border: "gradient",
          },
          secondButton: b,
        } = e;
        return (0, s.jsxs)("div", {
          className: ""
            .concat(o().D_Banner_Container, " ")
            .concat(f ? o().D_Banner_Container_Reduced : "", " ")
            .concat(u),
          children: [
            l && (0, s.jsx)(i.Z, {}),
            (0, s.jsxs)("div", {
              className: ""
                .concat(o().D_Banner_Content_Box, " ")
                .concat(p, " animate-fadeinFast"),
              children: [
                r &&
                  (0, s.jsx)(n(), {
                    src: "/".concat(r),
                    alt: "horse",
                    width: 50,
                    height: 50,
                  }),
                "string" == typeof t
                  ? (0, s.jsx)("h1", {
                      className: "gradient-text "
                        .concat(x, " ")
                        .concat(o().D_Banner_Content_Title),
                      children: t,
                    })
                  : t,
                (0, s.jsx)("p", {
                  className: "!leading-6 "
                    .concat(m, " ")
                    .concat(o().D_Banner_Content_Description),
                  children: a,
                }),
                !d &&
                  (c ||
                    (0, s.jsxs)("div", {
                      className:
                        "w-full flex flex-col sm:flex-row items-center justify-center gap-4",
                      children: [
                        (0, s.jsx)("div", {
                          className: "".concat(
                            "solid" == h.border
                              ? "border border-solid border-[#ffffff47] rounded-xl mt-6 hover-opacity"
                              : o().D_Banner_Content_Action_button_wrapper
                          ),
                          children: (0, s.jsxs)("button", {
                            className: ""
                              .concat(o().D_Banner_Content_Action_button, " ")
                              .concat(o()[h.color || "color_1"], " ")
                              .concat("solid" == h.border && "py-6", " px-4"),
                            onClick: h.onClick || (() => {}),
                            children: [
                              (0, s.jsx)(n(), {
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
                        b &&
                          (0, s.jsx)("a", {
                            target: "_blank",
                            href: b.link,
                            className: "".concat(
                              "solid" == b.border
                                ? "border border-solid border-[#ffffff47] rounded-xl mt-6 hover-opacity"
                                : o().D_Banner_Content_Action_button_wrapper
                            ),
                            children: (0, s.jsxs)("button", {
                              className: ""
                                .concat(o().D_Banner_Content_Action_button, " ")
                                .concat(o()[b.color || "color_1"], " ")
                                .concat("solid" == b.border && "py-6", " px-4"),
                              children: [
                                (0, s.jsx)(n(), {
                                  src: b.icon || "/vault.svg",
                                  alt: "vault",
                                  width: 20,
                                  height: 20,
                                  style: { marginRight: 15 },
                                }),
                                b.text || "Explore Vaults",
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
    63068: function (e, t, a) {
      "use strict";
      var s = a(11527),
        r = a(28254),
        n = a(43829),
        i = a(50959),
        l = a(38603),
        o = a(85703),
        c = a(59581),
        d = a.n(c);
      t.Z = function (e) {
        let {
            pairs: t,
            className: a,
            concat: c,
            pClassName: u,
            type: x = "p",
            children: m,
            loading: p,
          } = e,
          { data: f, isLoading: h } = (0, n.Zf)(void 0, {
            pollingInterval: 3e5,
          }),
          b = (0, r.C)((e) => e.ModalsReducer.currency),
          F = (0, i.useMemo)(() => {
            var e, a, s, r;
            let n = t.reduce((e, t) => {
                var a, s, r;
                let { valueInBase: n, baseSymbol: i } = t,
                  l = n;
                switch (i) {
                  case "ETH":
                    l =
                      n *
                      (null !== (a = null == f ? void 0 : f.ethPrice) &&
                      void 0 !== a
                        ? a
                        : 0);
                    break;
                  case "USDC":
                    l =
                      n *
                      (null !== (s = null == f ? void 0 : f.usdcPrice) &&
                      void 0 !== s
                        ? s
                        : 0);
                    break;
                  case "BTC":
                    l =
                      n *
                      (null !== (r = null == f ? void 0 : f.btcPrice) &&
                      void 0 !== r
                        ? r
                        : 0);
                    break;
                  case "USD":
                    l = n;
                }
                return e + l;
              }, 0),
              i = "";
            switch (b) {
              case "USD":
                i = o.ZP.formatWithExponential(
                  n /
                    (null !== (e = null == f ? void 0 : f.usdcPrice) &&
                    void 0 !== e
                      ? e
                      : 1)
                );
                break;
              case "USDC":
                i = o.ZP.formatWithExponential(
                  n /
                    (null !== (a = null == f ? void 0 : f.usdcPrice) &&
                    void 0 !== a
                      ? a
                      : 1)
                );
                break;
              case "ETH":
                i = o.ZP.formatWithExponential(
                  n /
                    (null !== (s = null == f ? void 0 : f.ethPrice) &&
                    void 0 !== s
                      ? s
                      : 1)
                );
                break;
              case "BTC":
                i = o.ZP.formatWithExponential(
                  n /
                    (null !== (r = null == f ? void 0 : f.btcPrice) &&
                    void 0 !== r
                      ? r
                      : 1)
                );
                break;
              default:
                i = o.ZP.formatWithExponential(100 * n);
            }
            return i;
          }, [b, t, f]),
          g = (0, i.useMemo)(() => {
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
        return (0, s.jsx)("section", {
          className: (0, o.cn)(
            "w-full flex items-center justify-center gap-1",
            a
          ),
          children:
            h || p
              ? (0, s.jsx)(l.Z, {
                  className: "w-5 h-5 mx-auto animate-fadeinReallyFast",
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)(x, {
                      className: (0, o.cn)("animate-fadeinReallyFast", u),
                      children: [c, " ", "$" === g ? "$" : "", F],
                    }),
                    "$" !== g &&
                      (0, s.jsx)(d(), {
                        className: "animate-fadeinReallyFast",
                        src: g,
                        alt: b,
                        width: 20,
                        height: 20,
                      }),
                    m,
                  ],
                }),
        });
      };
    },
    34938: function (e, t, a) {
      "use strict";
      var s = a(58791),
        r = a(79096),
        n = a(50959),
        i = a(6743);
      t.Z = function () {
        let { shouldRedirect: e = !0 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: t, isConnected: a } = (0, i.Z)(),
          {
            data: l,
            isLoading: o,
            error: c,
            refetch: d,
          } = (0, s.Nf)({ address: t }, { refetchOnFocus: !0 }),
          { replace: u } = (0, r.useRouter)();
        return (
          (0, n.useEffect)(() => {
            a && !o && !l && e && u("/space-race-onboarding");
          }, [a, o, l, t, e]),
          {
            userData: l,
            isUserDataLoading: o,
            error: c,
            validating: o,
            refetchUserData: d,
          }
        );
      };
    },
    1228: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return pages_space_race;
          },
        });
      var s = a(11527),
        r = a(35529),
        n = a(15881),
        i = a(48411),
        l = a(59581),
        o = a.n(l),
        c = a(50959),
        d = a(51136),
        points_multiplier = function (e) {
          let { value: t, disabled: a = !1 } = e;
          return (0, s.jsxs)("p", {
            className: "w-full text-center text-white ".concat(
              a && "text-opacity-[0.45]",
              " text-[12px] font-EuclidCircularB tracking-wide font-light whitespace-nowrap"
            ),
            children: [
              "Points Multiplier:",
              " ",
              (0, s.jsxs)("span", {
                className: "font-semibold text-[14px]",
                children: ["x", t % 1 == 0 ? "".concat(t, ".0") : t],
              }),
            ],
          });
        },
        stars_needed = function (e) {
          let { value: t } = e;
          return (0, s.jsxs)("p", {
            className:
              "w-full text-center text-[#FFFFFF73] text-[12px] font-EuclidCircularB tracking-wide font-light whitespace-nowrap",
            children: [
              "Stars Needed",
              (0, s.jsx)("br", {}),
              (0, s.jsx)("span", {
                className: "font-semibold text-[14px]",
                children: t,
              }),
            ],
          });
        },
        perks = function (e) {
          let { value: t, disabled: a = !1, onClick: r } = e;
          return (0, s.jsx)("p", {
            onClick: r,
            className: "w-full text-center text-white\n       ".concat(
              a
                ? "text-opacity-[0.45] text-[12px]"
                : "text-[14px] cursor-pointer",
              " font-EuclidCircularB tracking-wide font-light whitespace-nowrap"
            ),
            children: t,
          });
        };
      let formatNumber = (e) =>
        e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      var space_race_LevelBox = function (e) {
          let {
            icon: t,
            level: a,
            title: r,
            perk: n,
            selected: i = !1,
            multiplier: l,
            actionExecuter: c,
            starsNeeded: u,
            action: x,
          } = e;
          return (0, s.jsxs)("div", {
            className: "w-[151px] "
              .concat(n ? "h-[127px]" : "h-[104px]", " gradient-border-button ")
              .concat(
                i ? "color_in" : "color_solid",
                " flex flex-col items-center justify-between p-[10px] gap-1 relative"
              ),
            children: [
              (0, s.jsxs)("p", {
                className: "w-full text-center ".concat(
                  i ? "text-white" : "text-[#ffffff70]",
                  " text-[13px] font-EuclidCircularB tracking-wide line-clamp-1 font-semibold absolute -top-6"
                ),
                children: ["Level ", a],
              }),
              (0, s.jsx)("div", {
                className: "flex-1 w-full relative",
                children: (0, s.jsx)(o(), {
                  alt: "".concat(r, " icon"),
                  src: "/levels/".concat(t, ".png"),
                  fill: !0,
                  draggable: !1,
                  sizes: "100%",
                  className:
                    "h-full aspect-square object-contain top-0 ".concat(
                      !i && "opacity-50"
                    ),
                }),
              }),
              (0, s.jsx)("p", {
                className:
                  "text-[15px] line-clamp-1 w-full font-bold text-center font-EuclidCircularB tracking-wide text-white ".concat(
                    !i && "text-opacity-[0.45]"
                  ),
                children: r,
              }),
              (!i || n) &&
                (0, s.jsx)(points_multiplier, { value: l, disabled: !i }),
              !i &&
                n &&
                (0, s.jsxs)("div", {
                  className: "flex items-center justify-center gap-[2px]",
                  children: [
                    (0, s.jsx)(d.fWh, { color: "green", size: 15 }),
                    (0, s.jsx)(perks, { value: n, disabled: !0 }),
                  ],
                }),
              (0, s.jsx)("div", {
                className: "absolute ".concat(
                  i ? "-bottom-8 gap-[2px]" : "-bottom-10 gap-2",
                  " flex items-center justify-center"
                ),
                children: i
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(d.fWh, { color: "green", size: 15 }),
                        n
                          ? (0, s.jsx)(perks, {
                              value: n,
                              onClick: i ? () => c && c(x) : void 0,
                              disabled: !i,
                            })
                          : (0, s.jsx)(points_multiplier, { value: l }),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(stars_needed, { value: formatNumber(u) }),
                        (0, s.jsx)(o(), {
                          draggable: !1,
                          alt: "Stars Needed",
                          src: "/star-needed.svg",
                          width: 20,
                          height: 23,
                          className:
                            "object-contain select-none pointer-events-none",
                        }),
                      ],
                    }),
              }),
            ],
          });
        },
        looped_divider = function (e) {
          let { className: t } = e;
          return (0, s.jsxs)("svg", {
            className: "looped-divider ".concat(t),
            width: "1064",
            height: "222",
            viewBox: "0 0 1064 222",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, s.jsx)("path", {
                d: "M1024.31 1V1C1045.68 1 1063 18.3223 1063 39.6904V61.2359C1063 94.5033 1036.03 121.472 1002.76 121.472H50.7641C23.2801 121.472 1 143.752 1 171.236V188.5C1 206.449 15.5507 221 33.5 221V221",
                stroke: "url(#paint0_linear_5196_1424)",
                strokeOpacity: "0.5",
                strokeDasharray: "2 2",
              }),
              (0, s.jsx)("defs", {
                children: (0, s.jsxs)("linearGradient", {
                  id: "paint0_linear_5196_1424",
                  x1: "128.44",
                  y1: "0.999841",
                  x2: "956.8",
                  y2: "0.999803",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, s.jsx)("stop", { stopColor: "#7D6FF6" }),
                    (0, s.jsx)("stop", {
                      offset: "0.359375",
                      stopColor: "#58E1D9",
                    }),
                    (0, s.jsx)("stop", {
                      offset: "0.692708",
                      stopColor: "#7D6FF6",
                    }),
                    (0, s.jsx)("stop", { offset: "1", stopColor: "#58E1D9" }),
                  ],
                }),
              }),
            ],
          });
        },
        u = a(6743),
        x = a(19202),
        space_race_StatBox = function (e) {
          let { children: t, className: a, title: r, tooltip: n } = e;
          return (0, s.jsxs)("div", {
            className:
              "rounded-[10px] bg-[#FFFFFF1A] overflow-hidden flex flex-col ".concat(
                a
              ),
            children: [
              (0, s.jsxs)("div", {
                className:
                  "p-3 bg-[#FFFFFF0D] flex items-center justify-center gap-1",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "text-[20px] text-center font-semibold font-EuclidCircularB tracking-wide text-white",
                    children: r,
                  }),
                  n &&
                    (0, s.jsx)("a", {
                      "data-tooltip-id": "my-tooltip",
                      "data-tooltip-content": n,
                      children: (0, s.jsx)(o(), {
                        width: 15,
                        height: 15,
                        src: "/info-white-filled.svg",
                        alt: "info-".concat(r),
                        className: "mt-1",
                      }),
                    }),
                ],
              }),
              (0, s.jsx)("div", { className: "gradient-border" }),
              (0, s.jsx)("div", {
                className:
                  "w-full flex-1 flex flex-col justify-center py-4 md:py-0",
                children: t,
              }),
            ],
          });
        },
        gradient_info = function (e) {
          let {
            title: t,
            className: a,
            icon: r,
            text: n,
            tooltip: i,
            iconTop: l,
            onClickIconTop: c,
          } = e;
          return (0, s.jsxs)("div", {
            className:
              "w-full flex flex-col items-center justify-center gap-2 ".concat(
                a
              ),
            children: [
              (0, s.jsxs)("div", {
                className: "w-full flex justify-center items-center gap-1",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "text-center gradient-text font-semibold text-[20px] font-EuclidCircularB tracking-[-1px]",
                    children: t,
                  }),
                  l &&
                    (0, s.jsx)("a", {
                      "data-tooltip-id": "my-tooltip",
                      "data-tooltip-content": i,
                      children: (0, s.jsx)("button", {
                        onClick: c,
                        className:
                          "bg-transparent border-none mt-[6px] outline-none focus:outline-none cursor-pointer",
                        children: (0, s.jsx)(o(), {
                          src: l,
                          alt: "Icon Top",
                          width: 18,
                          height: 18,
                          className:
                            "object-contain select-none pointer-events-none cursor-pointer",
                        }),
                      }),
                    }),
                  i &&
                    !l &&
                    (0, s.jsx)("a", {
                      "data-tooltip-id": "my-tooltip",
                      "data-tooltip-content": i,
                      children: (0, s.jsx)(o(), {
                        width: 15,
                        height: 15,
                        src: "/info-white-filled.svg",
                        className: "mt-[6px]",
                        alt: "info-".concat(t),
                      }),
                    }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "w-full flex items-center justify-center gap-2",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "text-[20px] font-semibold font-EuclidCircularB text-white",
                    children: n,
                  }),
                  r &&
                    (0, s.jsx)(o(), {
                      src: r,
                      alt: "Stars Needed",
                      width: 20,
                      height: 20,
                      className:
                        "object-contain select-none pointer-events-none",
                    }),
                ],
              }),
            ],
          });
        },
        m = a(38603),
        p = a(64460),
        stat_button = function (e) {
          let {
              label: t,
              icon: a,
              onClick: r,
              className: n,
              done: i = !1,
              animatedGlow: l = !1,
              iconElement: c,
              labelClassName: d,
              iconClassName: u,
              loading: x = !1,
            } = e,
            f = "font-semibold font-EuclidCircularB text-[18px]";
          return (0, s.jsxs)("button", {
            onClick: r,
            className: (0, p.cn)(
              "gap-2 border bg-[#FFFFFF26] rounded-[10px] py-2 px-[12px]",
              "flex items-center justify-center text-white",
              f,
              {
                "border-[#3ad2657a] pointer-events-none": i,
                "border-[#FFFFFF80] cursor-pointer": !i,
                "hover-opacity": !l,
                "glow-button": l,
              },
              n
            ),
            children: [
              x
                ? (0, s.jsx)(m.Z, { className: "w-[18px] h-[18px]" })
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      c,
                      a &&
                        (0, s.jsx)(o(), {
                          src: a,
                          alt: "vault",
                          width: 18,
                          height: 18,
                          className: (0, p.cn)("object-contain", u),
                        }),
                    ],
                  }),
              d
                ? (0, s.jsx)("span", {
                    className: (0, p.cn)(f, d),
                    children: t,
                  })
                : t,
            ],
          });
        },
        f = a(23874),
        h = a.n(f),
        b = a(86259),
        F = a(85703),
        space_race_TaskBox = function (e) {
          let {
            description: t,
            points: a,
            title: r,
            button: n,
            type: i = "recurring",
            tooltip: l,
            keepLink: c = !1,
            done: d = !1,
            className: u,
          } = e;
          return (0, s.jsxs)("div", {
            className: (0, p.cn)(
              "flex-1 basis-[300px] self-stretch flex flex-col items-start justify-between",
              u
            ),
            children: [
              (0, s.jsxs)("div", {
                className:
                  "bg-[#28303699] p-7 rounded-[15px] w-full animate-fadeinFast flex flex-1 flex-col ".concat(
                    d && "success-box"
                  ),
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "w-full flex items-center justify-start gap-4 min-h-[75px]",
                    children: [
                      (0, s.jsx)(o(), {
                        src: "/noya-small.svg",
                        alt: "Noya Logo",
                        width: 58,
                        height: 58,
                        className:
                          "object-contain select-none pointer-events-none",
                      }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsxs)("p", {
                            className:
                              "font-EuclidCircularB text-[20px] font-medium text-white",
                            children: [
                              (0, s.jsx)("span", {
                                className:
                                  "font-EuclidCircularB text-[20px] font-medium text-white mr-[2px]",
                                children: r,
                              }),
                              l &&
                                (0, s.jsx)("a", {
                                  "data-tooltip-id": "my-tooltip",
                                  "data-tooltip-content": l,
                                  className: "inline-block h-[20px] ml-1",
                                  children: (0, s.jsx)(o(), {
                                    width: 15,
                                    height: 15,
                                    src: "/info-white-filled.svg",
                                    alt: "info-".concat(r),
                                    className: "mt-auto",
                                  }),
                                }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "w-full flex items-center justify-start mt-1 gap-1",
                            children: [
                              (0, s.jsx)("p", {
                                className:
                                  "font-EuclidCircularB text-[15px] font-normal ".concat(
                                    d ? "text-[#3AD265]" : "text-[#7D6FF6]"
                                  ),
                                children:
                                  "recurring" === i
                                    ? "Recurring"
                                    : d
                                    ? "Done"
                                    : "One Time",
                              }),
                              d &&
                                (0, s.jsx)(b.Z, {
                                  className: "fill-[#3AD265] w-4 h-4",
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "font-EuclidCircularB flex-1 text-[14px] font-light mt-6 text-[#FFFFFFC7]",
                    children: t,
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "w-full flex justify-start items-center mt-3 gap-1",
                    children: (0, s.jsxs)("p", {
                      className:
                        "font-EuclidCircularB text-[14px] font-semibold text-white",
                      children: [
                        "Total Points Gained:",
                        " ",
                        (0, s.jsx)("span", {
                          className: "text-[18px] font-EuclidCircularB",
                          children:
                            "one-time" !== i || d
                              ? F.ZP.formatNumberWithAbbreviation(a)
                              : 0,
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: (0, p.cn)(
                      "w-full sm:hidden mt-4",
                      n.containerClassName
                    ),
                    children:
                      n.link && (!d || c)
                        ? (0, s.jsx)(h(), {
                            href: n.link,
                            passHref: !0,
                            target: n.target,
                            className: "w-full",
                            children: (0, s.jsx)(stat_button, {
                              label: n.text,
                              icon: n.icon,
                              iconClassName: n.iconClassName,
                              className: "w-full",
                              done: d,
                              onClick: n.onClick,
                              loading: n.loading,
                            }),
                          })
                        : (0, s.jsx)(stat_button, {
                            label: n.text,
                            icon: n.icon,
                            iconClassName: n.iconClassName,
                            className: "w-full",
                            onClick: n.onClick,
                            done: d,
                            loading: n.loading,
                          }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: (0, p.cn)(
                  "w-fit hidden sm:block mt-4",
                  n.containerClassName
                ),
                children:
                  n.link && (!d || c)
                    ? (0, s.jsx)(h(), {
                        href: n.link,
                        passHref: !0,
                        target: n.target,
                        children: (0, s.jsx)(stat_button, {
                          label: n.text,
                          icon: n.icon,
                          iconClassName: n.iconClassName,
                          done: d,
                          onClick: n.onClick,
                          loading: n.loading,
                        }),
                      })
                    : (0, s.jsx)(stat_button, {
                        label: n.text,
                        icon: n.icon,
                        onClick: n.onClick,
                        done: d,
                        loading: n.loading,
                      }),
              }),
            ],
          });
        },
        g = a(49723),
        leaderboard_table_item = function (e) {
          let {
            label: t = "",
            tooltip: a,
            minW: r,
            border: n,
            basis: i,
            maxW: l,
            icon: c,
          } = e;
          return (0, s.jsxs)("div", {
            className: ""
              .concat(l || "grow", " shrink-0 ")
              .concat(r, " ")
              .concat(i, " ")
              .concat(
                n
                  ? "border-0 border-r border-solid border-[#FFFFFF1A] py-6 text-[14px] font-semibold"
                  : "py-3 text-[16px] font-semibold",
                " text-white text-center font-EuclidCircularB line-clamp-1 flex items-center gap-2 justify-center"
              ),
            children: [
              t,
              c,
              a &&
                (0, s.jsx)("a", {
                  "data-tooltip-id": "info-tooltip",
                  className: "cursor-pointer",
                  "data-tooltip-content": a,
                  children: (0, s.jsx)(o(), {
                    width: 15,
                    height: 15,
                    src: "/info-white-filled.svg",
                    alt: "info-{$label}",
                  }),
                }),
            ],
          });
        },
        leadeboard_entry_wrapper = function (e) {
          let { children: t } = e;
          return (0, s.jsx)("div", {
            className:
              "min-w-full [&>*:last-child]:!border-none w-[max-content] flex items-center border-0 border-b border-solid border-b-[#FFFFFF1A]",
            children: t,
          });
        },
        leaderboard_header = function (e) {
          let {} = e;
          return (0, s.jsxs)(leadeboard_entry_wrapper, {
            children: [
              (0, s.jsx)(leaderboard_table_item, {
                maxW: "max-[50px]",
                basis: "basis-[65px]",
                minW: "min-w-[65px]",
              }),
              (0, s.jsx)(leaderboard_table_item, {
                minW: "min-w-[250px]",
                basis: "basis-[250px]",
                label: "Wallet",
              }),
              (0, s.jsx)(leaderboard_table_item, {
                basis: "basis-[100px]",
                minW: "min-w-[100px]",
                label: "Level",
                tooltip: "Shows your current level in the space race.",
              }),
              (0, s.jsx)(leaderboard_table_item, {
                basis: "basis-[100px]",
                minW: "min-w-[100px]",
                label: "Stars",
                tooltip: "Displays how many stars you've collected in total.",
              }),
              (0, s.jsx)(leaderboard_table_item, {
                basis: "basis-[100px]",
                minW: "min-w-[100px]",
                label: "Points",
                tooltip: "Shows your total points for the week.",
              }),
              (0, s.jsx)(leaderboard_table_item, {
                basis: "basis-[100px]",
                minW: "min-w-[100px]",
                label: "Referrals",
                tooltip: "The number of Noyans you've referred.",
              }),
              (0, s.jsx)(leaderboard_table_item, {
                basis: "basis-[180px]",
                minW: "min-w-[180px]",
                label: "Points Referred",
              }),
              (0, s.jsx)(leaderboard_table_item, {
                basis: "basis-[140px]",
                minW: "min-w-[140px]",
                label: "Deposits",
                tooltip: "Total value of deposits for this user.",
              }),
              (0, s.jsx)(leaderboard_table_item, {
                basis: "basis-[140px]",
                minW: "min-w-[140px]",
                label: "Bonds",
                tooltip: "Total value of bonds for this user.",
              }),
              (0, s.jsx)(leaderboard_table_item, {
                basis: "basis-[120px]",
                minW: "min-w-[120px]",
                label: "Mindshare",
                tooltip: "User's mindshare percentage.",
              }),
            ],
          });
        },
        v = a(81625),
        w = a(63068),
        leaderboard_entry = function (e) {
          let { data: t, index: a, userVaultData: r, isLoadingUserData: n } = e,
            { name: i } = (0, v.Z)({ address: t.address });
          return (0, s.jsxs)(leadeboard_entry_wrapper, {
            children: [
              (0, s.jsx)(leaderboard_table_item, {
                minW: "min-w-[65px]",
                basis: "basis-[65px]",
                maxW: "max-[50px]",
                label: "".concat(a, "."),
                border: !0,
              }),
              (0, s.jsx)(leaderboard_table_item, {
                minW: "min-w-[250px]",
                basis: "basis-[250px]",
                label: i,
                border: !0,
              }),
              (0, s.jsx)(leaderboard_table_item, {
                minW: "min-w-[100px]",
                basis: "basis-[100px]",
                label: t.level,
                border: !0,
              }),
              (0, s.jsx)(leaderboard_table_item, {
                basis: "basis-[100px]",
                minW: "min-w-[100px]",
                label: F.ZP.formatNumberWithAbbreviation(t.stars),
                icon: (0, s.jsx)(o(), {
                  draggable: !1,
                  alt: "Stars Needed",
                  src: "/star-needed-solid.svg",
                  width: 20,
                  height: 23,
                  className: "object-contain select-none pointer-events-none",
                }),
                border: !0,
              }),
              (0, s.jsx)(leaderboard_table_item, {
                basis: "basis-[100px]",
                minW: "min-w-[100px]",
                label: F.ZP.formatNumberWithAbbreviation(
                  F.ZP.roundToTwo(t.points)
                ),
                border: !0,
              }),
              (0, s.jsx)(leaderboard_table_item, {
                basis: "basis-[100px]",
                minW: "min-w-[100px]",
                label: t.referrals.length,
                border: !0,
              }),
              (0, s.jsx)(leaderboard_table_item, {
                minW: "min-w-[180px]",
                basis: "basis-[180px]",
                label: "".concat(
                  F.ZP.formatNumberWithAbbreviation(
                    F.ZP.roundToTwo(t.pointsReferral)
                  )
                ),
                border: !0,
              }),
              (0, s.jsx)(leaderboard_table_item, {
                minW: "min-w-[140px]",
                basis: "basis-[140px]",
                label: (0, s.jsx)(w.Z, {
                  pairs: (null == r ? void 0 : r.deposits) || [],
                  className: "justify-center",
                  pClassName: "text-[14px] font-semibold text-center",
                  loading: n,
                }),
                border: !0,
              }),
              (0, s.jsx)(leaderboard_table_item, {
                minW: "min-w-[140px]",
                basis: "basis-[140px]",
                label: (0, s.jsx)(w.Z, {
                  pairs: (null == r ? void 0 : r.bonds) || [],
                  className: "justify-center",
                  pClassName: "text-[14px] font-semibold text-center",
                  loading: n,
                }),
                border: !0,
              }),
              (0, s.jsx)(leaderboard_table_item, {
                minW: "min-w-[120px]",
                basis: "basis-[120px]",
                label: "".concat(
                  ((null == r ? void 0 : r.mindshare) || 0).toFixed(2),
                  "%"
                ),
                border: !0,
              }),
            ],
          });
        },
        j = a(43829),
        Leaderboard = function (e) {
          let { onClose: t, data: a, loading: r } = e,
            { data: n } = (0, j.em)({ address: void 0 }),
            [i, l] = (0, c.useState)({}),
            [o, d] = (0, c.useState)(!1),
            [u] = (0, j.gS)(),
            fetchUserDataInBatches = async (e) => {
              if (!e.length) return;
              d(!0);
              let t = {};
              try {
                for (let a = 0; a < e.length; a += 100) {
                  let s = e.slice(a, a + 100),
                    r = s.map((e) => e.address),
                    n = await u({ userAddresses: r }).unwrap();
                  n.forEach((e) => {
                    t[e.userAddress] || (t[e.userAddress] = []),
                      t[e.userAddress].push(e);
                  });
                }
                l(t);
              } catch (e) {
                console.error("Failed to fetch user data:", e);
              } finally {
                d(!1);
              }
            };
          (0, c.useEffect)(() => {
            a.length > 0 && fetchUserDataInBatches(a);
          }, [a]);
          let x = (0, c.useMemo)(() => {
            let e = {};
            return (
              a.forEach((t) => {
                var a;
                let s = i[t.address] || [],
                  r = [],
                  l = [];
                if (s.length > 0)
                  s.forEach((e) => {
                    let t =
                      null == n
                        ? void 0
                        : n.find((t) => t.vaultId === e.vaultId);
                    if (t) {
                      let a = F.ZP.getSymbolFromVaultType(t.type),
                        s =
                          parseFloat(e.userBalance) /
                          10 ** t.baseToken.decimals,
                        n =
                          parseFloat(e.bondingBalance) /
                          10 ** t.baseToken.decimals;
                      s > 0 && r.push({ valueInBase: s, baseSymbol: a }),
                        n > 0 && l.push({ valueInBase: n, baseSymbol: a });
                    }
                  });
                else {
                  let e = t.deposits || 0,
                    a = t.bonds || 0;
                  e > 0 && r.push({ valueInBase: e, baseSymbol: "USD" }),
                    a > 0 && l.push({ valueInBase: a, baseSymbol: "USD" });
                }
                e[t.address] = {
                  deposits: r,
                  bonds: l,
                  mindshare:
                    (null !== (a = t.kaitoMindshare) && void 0 !== a ? a : 0) *
                    100,
                };
              }),
              e
            );
          }, [a, i, n]);
          return (0, s.jsxs)("div", {
            onClick: (e) => {
              e.stopPropagation();
            },
            className:
              "animate-fadein border-solid border border-[#ffffff21] relative flex flex-col items-center justify-center w-[95%] max-w-[1200px] bg-[#0f0f0f] rounded-md overflow-hidden pt-5",
            children: [
              (0, s.jsx)(g.u, {
                id: "info-tooltip",
                clickable: !0,
                noArrow: !0,
                className: "chart_box_header_tooltip z-10",
              }),
              t &&
                (0, s.jsx)("button", {
                  onClick: (e) => {
                    e.stopPropagation(), t();
                  },
                  className:
                    "absolute top-2 border-white cursor-pointer right-2 bg-[#FFFFFF08] rounded-full w-5 h-5 flex items-center justify-center",
                  children: (0, s.jsx)("svg", {
                    className: "w-3 h-3 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2.5",
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  }),
                }),
              (0, s.jsx)("div", {
                className: "w-full overflow-x-auto flex flex-col",
                children:
                  r || 0 == a.length
                    ? (0, s.jsx)("div", {
                        className:
                          "w-full flex items-center justify-center h-32",
                        children: (0, s.jsx)("p", {
                          className:
                            "gradient-text font-EuclidCircularB text-[16px] font-bold",
                          children:
                            0 == a.length
                              ? "No data available"
                              : "Loading Leaderboard",
                        }),
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(leaderboard_header, {}),
                          (0, s.jsx)("div", {
                            className:
                              "min-w-full w-fit max-h-[calc(100vh-150px)] [&>*:last-child]:!border-transparent [&>*:nth-child(even)]:bg-[#FFFFFF08]  overflow-y-auto",
                            children: a.map((e, t) =>
                              (0, s.jsx)(
                                leaderboard_entry,
                                {
                                  data: e,
                                  index: t + 1,
                                  userVaultData: x[e.address],
                                  isLoadingUserData: o,
                                },
                                e._id
                              )
                            ),
                          }),
                        ],
                      }),
              }),
            ],
          });
        },
        leaderboard_dialog = function (e) {
          let { onClose: t, open: a, data: r, loading: n = !1 } = e,
            i = [{ opacity: 1, offset: 0 }, { opacity: 0 }],
            l = { duration: 350, iterations: 1 },
            handleClose = () => {
              o.current && o.current.animate(i, l),
                setTimeout(() => {
                  t();
                }, l.duration);
            };
          (0, c.useEffect)(() => {
            let handleKeyDown = (e) => {
              "Escape" === e.key && a && handleClose();
            };
            return (
              document.addEventListener("keydown", handleKeyDown),
              () => {
                document.removeEventListener("keydown", handleKeyDown);
              }
            );
          }, [handleClose]),
            (0, c.useEffect)(() => {
              document.body.style.overflowY = a ? "hidden" : "auto";
            }, [a]);
          let o = c.useRef(null);
          return (0, s.jsx)("div", {
            ref: o,
            className:
              "fixed inset-0 z-[100] bg-[#000000a0] flex items-center justify-center animate-fadeinFast ".concat(
                a ? "block" : "hidden"
              ),
            onClick: handleClose,
            children: (0, s.jsx)(Leaderboard, {
              loading: n,
              onClose: handleClose,
              data: r,
            }),
          });
        },
        y = a(41873),
        N = a(58791),
        _ = a(91299),
        k = a(23178),
        points_calendar_view = function (e) {
          let { onClose: t, open: a, loading: r = !1, address: n } = e,
            [i, l] = (0, c.useState)(new Date()),
            [o, d] = (0, c.useState)("weekly"),
            formatDate = (e) =>
              e.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
            formatDateKey = (e) => {
              let t = e.getFullYear(),
                a = String(e.getMonth() + 1).padStart(2, "0"),
                s = String(e.getDate()).padStart(2, "0");
              return "".concat(t, "-").concat(a, "-").concat(s);
            },
            getMondayOfWeek = (e) => {
              let t = new Date(e),
                a = t.getDay(),
                s = t.getDate() - a + (0 === a ? -6 : 1);
              return new Date(t.setDate(s));
            },
            isToday = (e) => {
              let t = new Date();
              return formatDateKey(e) === formatDateKey(t);
            },
            isFutureDate = (e) => {
              let t = new Date();
              return t.setHours(23, 59, 59, 999), e > t;
            },
            isCurrentWeek = (e) => {
              let t = new Date(),
                a = getMondayOfWeek(e),
                s = new Date(a.getTime() + 5184e5);
              return t >= a && t <= s;
            },
            u = (0, c.useCallback)(() => {
              if ("daily" === o) {
                let e = formatDateKey(i);
                return { startDate: e, endDate: e };
              }
              {
                let e = getMondayOfWeek(i),
                  t = new Date(e.getTime() + 5184e5);
                return {
                  startDate: formatDateKey(e),
                  endDate: formatDateKey(t),
                };
              }
            }, [i, o]),
            { startDate: x, endDate: m } = u(),
            { data: p, isFetching: f } = (0, N.eP)(
              { address: n, startDate: x, endDate: m },
              { skip: !n || !a }
            ),
            h = c.useMemo(() => {
              if (!(null == p ? void 0 : p.dailySummaries)) return {};
              let e = {};
              return (
                p.dailySummaries.forEach((t) => {
                  e[t.date] = t;
                }),
                e
              );
            }, [p]),
            navigateDate = (e) => {
              let t = new Date(i);
              "daily" === o
                ? t.setDate(i.getDate() + ("next" === e ? 1 : -1))
                : t.setDate(i.getDate() + ("next" === e ? 7 : -7));
              let a = new Date();
              a.setHours(23, 59, 59, 999), t > a || l(t);
            },
            isNextDisabled = () => {
              let e = new Date(i);
              "daily" === o
                ? e.setDate(i.getDate() + 1)
                : e.setDate(i.getDate() + 7);
              let t = new Date();
              return t.setHours(23, 59, 59, 999), e > t;
            },
            getCurrentData = () => {
              if ("daily" === o) {
                let e = formatDateKey(i);
                return (
                  h[e] || {
                    date: e,
                    totalPoints: 0,
                    categories: {
                      bonds: 0,
                      deposits: 0,
                      referrals: 0,
                      socialTasks: 0,
                    },
                  }
                );
              }
              {
                let e = getMondayOfWeek(i),
                  t = [];
                for (let a = 0; a < 7; a++) {
                  let s = new Date(e);
                  s.setDate(e.getDate() + a);
                  let r = formatDateKey(s);
                  t.push(
                    h[r] || {
                      date: r,
                      totalPoints: 0,
                      categories: {
                        bonds: 0,
                        deposits: 0,
                        referrals: 0,
                        socialTasks: 0,
                      },
                    }
                  );
                }
                return t;
              }
            },
            shouldDisableTodayButton = () =>
              "daily" === o ? isToday(i) : isCurrentWeek(i);
          return (0, s.jsxs)("div", {
            onClick: (e) => {
              e.stopPropagation();
            },
            className:
              "animate-fadein border-solid border border-[#ffffff21] relative flex flex-col items-center justify-center w-[95%] max-w-[1200px] bg-[#0f0f0f] rounded-md overflow-hidden pt-6 pb-6",
            children: [
              t &&
                (0, s.jsx)("button", {
                  onClick: (e) => {
                    e.stopPropagation(), t();
                  },
                  className:
                    "absolute top-2 border-white cursor-pointer right-2 bg-[#FFFFFF08] rounded-full w-5 h-5 flex items-center justify-center",
                  children: (0, s.jsx)("svg", {
                    className: "w-3 h-3 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2.5",
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  }),
                }),
              (0, s.jsxs)("div", {
                className: "flex items-center gap-3 mb-6",
                children: [
                  (0, s.jsx)(stat_button, {
                    label: "Daily",
                    onClick: () => d("daily"),
                    className: "!py-1 !px-3 !text-[14px] !border-solid ".concat(
                      "daily" === o
                        ? "!border-[#7D6FF6] !bg-[#7D6FF640]"
                        : "!border-[#FFFFFF40] !bg-[#FFFFFF20]"
                    ),
                  }),
                  (0, s.jsx)(stat_button, {
                    label: "Weekly",
                    onClick: () => d("weekly"),
                    className: "!py-1 !px-3 !text-[14px] !border-solid ".concat(
                      "weekly" === o
                        ? "!border-[#7D6FF6] !bg-[#7D6FF640]"
                        : "!border-[#FFFFFF40] !bg-[#FFFFFF20]"
                    ),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "flex justify-center mb-6",
                children: (0, s.jsx)("button", {
                  onClick: () => {
                    l(new Date());
                  },
                  disabled: shouldDisableTodayButton(),
                  className:
                    "px-3 py-1 text-[12px] font-EuclidCircularB text-white border border-[#7D6FF6] rounded-full transition-colors ".concat(
                      shouldDisableTodayButton()
                        ? "bg-[#7D6FF620] opacity-40 cursor-not-allowed"
                        : "bg-[#7D6FF640] hover:bg-[#7D6FF660] cursor-pointer"
                    ),
                  children: "daily" === o ? "Today" : "This Week",
                }),
              }),
              (0, s.jsx)("div", {
                className: "w-full px-6",
                children:
                  r || f
                    ? (() => {
                        if ("daily" === o)
                          return (0, s.jsxs)("div", {
                            className: "w-full",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-between mb-6",
                                children: [
                                  (0, s.jsx)("button", {
                                    onClick: () => navigateDate("prev"),
                                    className:
                                      "flex items-center justify-center w-10 h-10 rounded-full border-solid border border-[#FFFFFF80] bg-[#FFFFFF26] text-white hover:bg-[#FFFFFF40] transition-colors cursor-pointer",
                                    children: (0, s.jsx)(_.Z, {
                                      className: "w-5 h-5",
                                    }),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                      (0, s.jsx)("h2", {
                                        className:
                                          "text-white font-RussoOne text-[18px] sm:text-[20px] font-semibold",
                                        children: isToday(i)
                                          ? "Today's Points"
                                          : "Points",
                                      }),
                                      (0, s.jsx)("p", {
                                        className:
                                          "text-gray-300 font-EuclidCircularB text-[14px] mt-1",
                                        children: formatDate(i),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("button", {
                                    onClick: () => navigateDate("next"),
                                    disabled: isNextDisabled(),
                                    className:
                                      "flex items-center justify-center w-10 h-10 rounded-full border-solid border transition-colors ".concat(
                                        isNextDisabled()
                                          ? "border-[#FFFFFF40] bg-[#FFFFFF10] text-gray-500 cursor-not-allowed"
                                          : "border-[#FFFFFF80] bg-[#FFFFFF26] text-white hover:bg-[#FFFFFF40] cursor-pointer"
                                      ),
                                    children: (0, s.jsx)(k.Z, {
                                      className: "w-5 h-5",
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "text-center mb-6",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "h-10 bg-gradient-to-r from-[#FFFFFF20] to-[#FFFFFF15] rounded w-24 mx-auto mb-2",
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "h-4 bg-[#FFFFFF15] rounded w-32 mx-auto",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "bg-[#FFFFFF08] rounded-lg overflow-hidden",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "px-4 py-3 bg-[#FFFFFF15] border-b border-[#FFFFFF1A]",
                                    children: (0, s.jsx)("div", {
                                      className:
                                        "h-5 bg-[#FFFFFF20] rounded w-32",
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "divide-y divide-[#FFFFFF1A]",
                                    children: [1, 2, 3, 4].map((e) =>
                                      (0, s.jsxs)(
                                        "div",
                                        {
                                          className:
                                            "px-4 py-3 flex justify-between items-center",
                                          children: [
                                            (0, s.jsx)("div", {
                                              className:
                                                "h-4 bg-[#FFFFFF15] rounded w-16",
                                            }),
                                            (0, s.jsx)("div", {
                                              className:
                                                "h-4 bg-[#FFFFFF15] rounded w-12",
                                            }),
                                          ],
                                        },
                                        e
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          });
                        {
                          let e = getMondayOfWeek(i),
                            t = new Date(e.getTime() + 5184e5);
                          return (0, s.jsxs)("div", {
                            className: "w-full",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center justify-between mb-6",
                                children: [
                                  (0, s.jsx)("button", {
                                    onClick: () => navigateDate("prev"),
                                    className:
                                      "flex items-center justify-center w-10 h-10 rounded-full border-solid border border-[#FFFFFF80] bg-[#FFFFFF26] text-white hover:bg-[#FFFFFF40] transition-colors cursor-pointer",
                                    children: (0, s.jsx)(_.Z, {
                                      className: "w-5 h-5",
                                    }),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                      (0, s.jsx)("h2", {
                                        className:
                                          "text-white font-RussoOne text-[18px] sm:text-[20px] font-semibold",
                                        children: isCurrentWeek(i)
                                          ? "Weekly Points"
                                          : "Points",
                                      }),
                                      (0, s.jsxs)("p", {
                                        className:
                                          "text-gray-300 font-EuclidCircularB text-[14px] mt-1",
                                        children: [
                                          formatDate(e),
                                          " - ",
                                          formatDate(t),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("button", {
                                    onClick: () => navigateDate("next"),
                                    disabled: isNextDisabled(),
                                    className:
                                      "flex items-center justify-center w-10 h-10 rounded-full border-solid border transition-colors ".concat(
                                        isNextDisabled()
                                          ? "border-[#FFFFFF40] bg-[#FFFFFF10] text-gray-500 cursor-not-allowed"
                                          : "border-[#FFFFFF80] bg-[#FFFFFF26] text-white hover:bg-[#FFFFFF40] cursor-pointer"
                                      ),
                                    children: (0, s.jsx)(k.Z, {
                                      className: "w-5 h-5",
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-3",
                                children: [1, 2, 3, 4, 5, 6, 7].map((e) =>
                                  (0, s.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "bg-[#FFFFFF08] rounded-lg p-4",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className: "text-center mb-3",
                                          children: [
                                            (0, s.jsx)("div", {
                                              className:
                                                "h-3 bg-[#FFFFFF15] rounded w-8 mx-auto mb-1",
                                            }),
                                            (0, s.jsx)("div", {
                                              className:
                                                "h-5 bg-[#FFFFFF20] rounded w-6 mx-auto",
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: "text-center mb-3",
                                          children: [
                                            (0, s.jsx)("div", {
                                              className:
                                                "h-4 bg-gradient-to-r from-[#FFFFFF20] to-[#FFFFFF15] rounded w-12 mx-auto mb-1",
                                            }),
                                            (0, s.jsx)("div", {
                                              className:
                                                "h-3 bg-[#FFFFFF10] rounded w-10 mx-auto",
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: "space-y-1",
                                          children: [
                                            (0, s.jsxs)("div", {
                                              className:
                                                "flex justify-between items-center gap-2",
                                              children: [
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "h-3 bg-[#FFFFFF15] rounded w-8",
                                                }),
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "h-3 bg-[#FFFFFF15] rounded w-4",
                                                }),
                                              ],
                                            }),
                                            (0, s.jsxs)("div", {
                                              className:
                                                "flex justify-between items-center gap-2",
                                              children: [
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "h-3 bg-[#FFFFFF15] rounded w-10",
                                                }),
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "h-3 bg-[#FFFFFF15] rounded w-6",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    e
                                  )
                                ),
                              }),
                            ],
                          });
                        }
                      })()
                    : (0, s.jsx)(s.Fragment, {
                        children:
                          "daily" === o
                            ? (() => {
                                let e = getCurrentData();
                                return (0, s.jsxs)("div", {
                                  className: "w-full",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between mb-6",
                                      children: [
                                        (0, s.jsx)("button", {
                                          onClick: () => navigateDate("prev"),
                                          className:
                                            "flex items-center justify-center w-10 h-10 rounded-full border-solid border border-[#FFFFFF80] bg-[#FFFFFF26] text-white hover:bg-[#FFFFFF40] transition-colors cursor-pointer",
                                          children: (0, s.jsx)(_.Z, {
                                            className: "w-5 h-5",
                                          }),
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: "text-center",
                                          children: [
                                            (0, s.jsx)("h2", {
                                              className:
                                                "text-white font-RussoOne text-[18px] sm:text-[20px] font-semibold",
                                              children: isToday(i)
                                                ? "Today's Points"
                                                : "Points",
                                            }),
                                            (0, s.jsx)("p", {
                                              className:
                                                "text-gray-300 font-EuclidCircularB text-[14px] mt-1",
                                              children: formatDate(i),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)("button", {
                                          onClick: () => navigateDate("next"),
                                          disabled: isNextDisabled(),
                                          className:
                                            "flex items-center justify-center w-10 h-10 rounded-full border-solid border transition-colors ".concat(
                                              isNextDisabled()
                                                ? "border-[#FFFFFF40] bg-[#FFFFFF10] text-gray-500 cursor-not-allowed"
                                                : "border-[#FFFFFF80] bg-[#FFFFFF26] text-white hover:bg-[#FFFFFF40] cursor-pointer"
                                            ),
                                          children: (0, s.jsx)(k.Z, {
                                            className: "w-5 h-5",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "text-center mb-6",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "text-white font-RussoOne text-[32px] font-bold gradient-text",
                                          children:
                                            F.ZP.formatNumberWithAbbreviation(
                                              e.totalPoints
                                            ),
                                        }),
                                        (0, s.jsx)("p", {
                                          className:
                                            "text-gray-300 font-EuclidCircularB text-[14px]",
                                          children: "Total Points Earned",
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "bg-[#FFFFFF08] rounded-lg overflow-hidden",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "px-4 py-3 bg-[#FFFFFF15] border-b border-[#FFFFFF1A]",
                                          children: (0, s.jsx)("h3", {
                                            className:
                                              "text-white font-EuclidCircularB font-semibold text-[16px]",
                                            children: "Points Breakdown",
                                          }),
                                        }),
                                        Object.keys(e.categories).length > 0
                                          ? (0, s.jsx)("div", {
                                              className:
                                                "divide-y divide-[#FFFFFF1A]",
                                              children: Object.entries(
                                                e.categories
                                              )
                                                .filter((e) => {
                                                  let [t, a] = e;
                                                  return a > 0;
                                                })
                                                .map((e) => {
                                                  let [t, a] = e;
                                                  return (0, s.jsxs)(
                                                    "div",
                                                    {
                                                      className:
                                                        "px-4 py-3 flex justify-between items-center",
                                                      children: [
                                                        (0, s.jsx)("span", {
                                                          className:
                                                            "text-white font-EuclidCircularB text-[14px] capitalize",
                                                          children: t,
                                                        }),
                                                        (0, s.jsxs)("span", {
                                                          className:
                                                            "text-white font-EuclidCircularB font-semibold text-[14px]",
                                                          children: [
                                                            F.ZP.formatNumberWithAbbreviation(
                                                              a
                                                            ),
                                                            " pts",
                                                          ],
                                                        }),
                                                      ],
                                                    },
                                                    t
                                                  );
                                                }),
                                            })
                                          : (0, s.jsx)("div", {
                                              className:
                                                "px-4 py-8 text-center",
                                              children: (0, s.jsx)("p", {
                                                className:
                                                  "text-gray-400 font-EuclidCircularB text-[14px]",
                                                children:
                                                  "No points earned on this day",
                                              }),
                                            }),
                                      ],
                                    }),
                                  ],
                                });
                              })()
                            : (() => {
                                let e = getCurrentData(),
                                  t = getMondayOfWeek(i),
                                  a = new Date(t.getTime() + 5184e5);
                                return (0, s.jsxs)("div", {
                                  className: "w-full",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between mb-6",
                                      children: [
                                        (0, s.jsx)("button", {
                                          onClick: () => navigateDate("prev"),
                                          className:
                                            "flex items-center justify-center w-10 h-10 rounded-full border-solid border border-[#FFFFFF80] bg-[#FFFFFF26] text-white hover:bg-[#FFFFFF40] transition-colors cursor-pointer",
                                          children: (0, s.jsx)(_.Z, {
                                            className: "w-5 h-5",
                                          }),
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: "text-center",
                                          children: [
                                            (0, s.jsx)("h2", {
                                              className:
                                                "text-white font-RussoOne text-[18px] sm:text-[20px] font-semibold",
                                              children: isCurrentWeek(i)
                                                ? "Weekly Points"
                                                : "Points",
                                            }),
                                            (0, s.jsxs)("p", {
                                              className:
                                                "text-gray-300 font-EuclidCircularB text-[14px] mt-1",
                                              children: [
                                                formatDate(t),
                                                " - ",
                                                formatDate(a),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)("button", {
                                          onClick: () => navigateDate("next"),
                                          disabled: isNextDisabled(),
                                          className:
                                            "flex items-center justify-center w-10 h-10 rounded-full border-solid border transition-colors ".concat(
                                              isNextDisabled()
                                                ? "border-[#FFFFFF40] bg-[#FFFFFF10] text-gray-500 cursor-not-allowed"
                                                : "border-[#FFFFFF80] bg-[#FFFFFF26] text-white hover:bg-[#FFFFFF40] cursor-pointer"
                                            ),
                                          children: (0, s.jsx)(k.Z, {
                                            className: "w-5 h-5",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-3",
                                      children: e.map((e, t) => {
                                        let a = new Date(e.date),
                                          r = a.toLocaleDateString("en-US", {
                                            weekday: "short",
                                          }),
                                          n = a.getDate(),
                                          i = isFutureDate(a);
                                        return (0, s.jsxs)(
                                          "div",
                                          {
                                            className:
                                              "bg-[#FFFFFF08] rounded-lg p-4 transition-opacity ".concat(
                                                i ? "opacity-40" : "opacity-100"
                                              ),
                                            children: [
                                              (0, s.jsxs)("div", {
                                                className: "text-center mb-3",
                                                children: [
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "text-white font-EuclidCircularB font-semibold text-[12px]",
                                                    children: r,
                                                  }),
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "text-white font-RussoOne text-[18px] font-bold",
                                                    children: n,
                                                  }),
                                                ],
                                              }),
                                              (0, s.jsxs)("div", {
                                                className: "text-center mb-3",
                                                children: [
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "text-white font-RussoOne text-[16px] font-bold gradient-text",
                                                    children: i
                                                      ? 0
                                                      : F.ZP.formatNumberWithAbbreviation(
                                                          e.totalPoints
                                                        ),
                                                  }),
                                                  (0, s.jsx)("div", {
                                                    className:
                                                      "text-gray-300 font-EuclidCircularB text-[10px]",
                                                    children: "points",
                                                  }),
                                                ],
                                              }),
                                              ((!i &&
                                                Object.keys(e.categories)
                                                  .length > 0) ||
                                                i) &&
                                                (0, s.jsx)("div", {
                                                  className: "space-y-1",
                                                  children: i
                                                    ? ["Bonds", "Deposits"].map(
                                                        (e) =>
                                                          (0, s.jsxs)(
                                                            "div",
                                                            {
                                                              className:
                                                                "flex justify-between items-center gap-2 text-[10px]",
                                                              children: [
                                                                (0, s.jsx)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-gray-300 truncate",
                                                                    children: e,
                                                                  }
                                                                ),
                                                                (0, s.jsx)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-white font-semibold",
                                                                    children:
                                                                      "0",
                                                                  }
                                                                ),
                                                              ],
                                                            },
                                                            e
                                                          )
                                                      )
                                                    : Object.entries(
                                                        e.categories
                                                      )
                                                        .filter((e) => {
                                                          let [t, a] = e;
                                                          return a > 0;
                                                        })
                                                        .sort(
                                                          (e, t) => t[1] - e[1]
                                                        )
                                                        .slice(0, 2)
                                                        .map((e) => {
                                                          let [t, a] = e;
                                                          return (0, s.jsxs)(
                                                            "div",
                                                            {
                                                              className:
                                                                "flex justify-between items-center gap-2 text-[10px]",
                                                              children: [
                                                                (0, s.jsx)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-gray-300 truncate capitalize",
                                                                    children: t,
                                                                  }
                                                                ),
                                                                (0, s.jsx)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "text-white font-semibold",
                                                                    children:
                                                                      F.ZP.formatNumberWithAbbreviation(
                                                                        a
                                                                      ),
                                                                  }
                                                                ),
                                                              ],
                                                            },
                                                            t
                                                          );
                                                        }),
                                                }),
                                            ],
                                          },
                                          e.date
                                        );
                                      }),
                                    }),
                                  ],
                                });
                              })(),
                      }),
              }),
            ],
          });
        },
        points_calendar_dialog = function (e) {
          let {
              onClose: t,
              open: a,
              address: r,
              referralCode: n,
              deletedTwitter: i,
            } = e,
            l = [{ opacity: 1, offset: 0 }, { opacity: 0 }],
            o = { duration: 350, iterations: 1 },
            handleClose = () => {
              d.current && d.current.animate(l, o),
                setTimeout(() => {
                  t();
                }, o.duration);
            };
          (0, c.useEffect)(() => {
            let handleKeyDown = (e) => {
              "Escape" === e.key && a && handleClose();
            };
            return (
              document.addEventListener("keydown", handleKeyDown),
              () => {
                document.removeEventListener("keydown", handleKeyDown);
              }
            );
          }, [handleClose]),
            (0, c.useEffect)(() => {
              document.body.style.overflowY = a ? "hidden" : "auto";
            }, [a]);
          let d = c.useRef(null);
          return (0, s.jsx)("div", {
            ref: d,
            className:
              "fixed inset-0 z-[100] bg-[#000000a0] overflow-y-auto animate-fadeinFast ".concat(
                a ? "block" : "hidden"
              ),
            onClick: handleClose,
            children: (0, s.jsx)("div", {
              className: "min-h-full flex items-center justify-center py-4",
              children: (0, s.jsx)(points_calendar_view, {
                onClose: handleClose,
                referralCode: n,
                address: r,
                open: a,
                loading: !1,
              }),
            }),
          });
        },
        referral_history_item = function (e) {
          let {
            label: t = "",
            tooltip: a,
            minW: r,
            border: n,
            basis: i,
            maxW: l,
            icon: c,
            extra: d,
          } = e;
          return (0, s.jsxs)("div", {
            className: ""
              .concat(l || "grow", " shrink-0 ")
              .concat(r, " ")
              .concat(i, " ")
              .concat(
                n
                  ? "border-0 border-r border-solid border-[#FFFFFF1A] py-6 text-[12px] sm:text-[14px] font-medium"
                  : "py-3 text-[14px] sm:text-[16px] font-semibold",
                " "
              )
              .concat(
                d,
                " text-white text-center font-EuclidCircularB line-clamp-1 flex items-center gap-2 justify-center"
              ),
            children: [
              t,
              c,
              a &&
                (0, s.jsx)("a", {
                  "data-tooltip-id": "info-tooltip",
                  className: "cursor-pointer",
                  "data-tooltip-content": a,
                  children: (0, s.jsx)(o(), {
                    width: 15,
                    height: 15,
                    src: "/info-white-filled.svg",
                    alt: "info-{$label}",
                  }),
                }),
            ],
          });
        },
        referral_history_entry_wrapper = function (e) {
          let { children: t, borderTop: a } = e;
          return (0, s.jsx)("div", {
            className:
              "min-w-full [&>*:last-child]:!border-none w-[max-content] flex items-center border-0 ".concat(
                a && "border-t border-t-[#FFFFFF1A]",
                " border-b border-solid border-b-[#FFFFFF1A]"
              ),
            children: t,
          });
        },
        referral_history_entry = function (e) {
          let { data: t, date: a, userVaultData: r, isLoadingUserData: n } = e,
            { name: i } = (0, v.Z)({ address: t.address });
          return (0, s.jsxs)(referral_history_entry_wrapper, {
            children: [
              (0, s.jsx)(referral_history_item, {
                minW: "min-w-[120px]",
                basis: "basis-[120px]",
                maxW: "max-[150px]",
                label: a,
                border: !0,
              }),
              (0, s.jsx)(referral_history_item, {
                minW: "min-w-[450px]",
                basis: "basis-[450px]",
                label: F.ZP.getReferredUser(i),
                border: !0,
              }),
              (0, s.jsx)(referral_history_item, {
                minW: "min-w-[150px]",
                basis: "basis-[150px]",
                maxW: "max-[170px]",
                label: (0, s.jsx)(w.Z, {
                  pairs: (null == r ? void 0 : r.deposits) || [],
                  className: "justify-center",
                  pClassName: "text-[14px] font-semibold text-center",
                  loading: n,
                }),
                border: !0,
              }),
              (0, s.jsx)(referral_history_item, {
                minW: "min-w-[150px]",
                basis: "basis-[150px]",
                maxW: "max-[170px]",
                label: (0, s.jsx)(w.Z, {
                  pairs: (null == r ? void 0 : r.bonds) || [],
                  className: "justify-center",
                  pClassName: "text-[14px] font-semibold text-center",
                  loading: n,
                }),
                border: !0,
              }),
            ],
          });
        },
        referral_history_header = function () {
          return (0, s.jsxs)(referral_history_entry_wrapper, {
            borderTop: !0,
            children: [
              (0, s.jsx)(referral_history_item, {
                minW: "min-w-[120px]",
                basis: "basis-[120px]",
                maxW: "max-[150px]",
                extra: "!font-bold text-[15px] sm:text-[16px]",
                label: "Date",
                border: !0,
              }),
              (0, s.jsx)(referral_history_item, {
                minW: "min-w-[450px]",
                basis: "basis-[450px]",
                extra: "!font-bold text-[15px] sm:text-[16px]",
                label: "Description",
                border: !0,
              }),
              (0, s.jsx)(referral_history_item, {
                minW: "min-w-[150px]",
                basis: "basis-[150px]",
                maxW: "max-[170px]",
                extra: "!font-bold text-[15px] sm:text-[16px]",
                label: "Value Deposited",
                border: !0,
              }),
              (0, s.jsx)(referral_history_item, {
                minW: "min-w-[150px]",
                basis: "basis-[150px]",
                maxW: "max-[170px]",
                extra: "!font-bold text-[15px] sm:text-[16px]",
                label: "Value Bonded",
                border: !0,
              }),
            ],
          });
        },
        components_GlobalPagination = function (e) {
          let { page: t, setPage: a, totalPages: r } = e,
            n = null != t ? t : 0,
            handlePageClick = (e) => {
              e >= 0 && e < r && e !== n && a(e);
            };
          return r <= 1
            ? null
            : (0, s.jsxs)("div", {
                className: "items-center flex justify-center my-4 gap-4",
                children: [
                  (0, s.jsx)("button", {
                    onClick: () => {
                      n > 0 && a(n - 1);
                    },
                    disabled: 0 === n,
                    className:
                      "flex items-center justify-center w-[30px] h-[30px] rounded-full border border-solid border-[#FFFFFF1A] cursor-pointer bg-black ".concat(
                        0 === n
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:opacity-70"
                      ),
                    "aria-label": "Previous page",
                    children: (0, s.jsx)(o(), {
                      src: "/chevron-left.svg",
                      alt: "Previous",
                      width: 16,
                      height: 16,
                      className: "z-40",
                    }),
                  }),
                  (() => {
                    if (r <= 5) return Array.from({ length: r }, (e, t) => t);
                    let e = [],
                      t = Math.floor(2.5);
                    if (n <= t) {
                      for (let t = 0; t < 4; t++) e.push(t);
                      r > 5 && (e.push("..."), e.push(r - 1));
                    } else if (n >= r - t - 1) {
                      e.push(0), r > 5 && e.push("...");
                      for (let t = r - 5 + 1; t < r; t++) e.push(t);
                    } else {
                      e.push(0), e.push("...");
                      for (let t = n - 1; t <= n + 1; t++) e.push(t);
                      e.push("..."), e.push(r - 1);
                    }
                    return e;
                  })().map((e, t) =>
                    (0, s.jsx)(
                      c.Fragment,
                      {
                        children:
                          "..." === e
                            ? (0, s.jsx)("span", {
                                className:
                                  "flex items-center justify-center w-[30px] h-[30px] text-white text-[14px] font-semibold",
                                children: "...",
                              })
                            : (0, s.jsx)("button", {
                                onClick: () => handlePageClick(e),
                                className:
                                  "flex items-center justify-center w-[30px] h-[30px] rounded-full border border-solid border-[#FFFFFF1A] text-white text-[14px] font-semibold cursor-pointer bg-black hover:opacity-70 ".concat(
                                    n === e ? "bg-[#FFFFFF1A]" : ""
                                  ),
                                "aria-label": "Go to page ".concat(e + 1),
                                "aria-current": n === e ? "page" : void 0,
                                children: e + 1,
                              }),
                      },
                      t
                    )
                  ),
                  (0, s.jsx)("button", {
                    onClick: () => {
                      n < r - 1 && a(n + 1);
                    },
                    disabled: n === r - 1,
                    className:
                      "flex items-center justify-center w-[30px] h-[30px] rounded-full border border-solid border-[#FFFFFF1A] cursor-pointer bg-black ".concat(
                        n === r - 1
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:opacity-70"
                      ),
                    "aria-label": "Next page",
                    children: (0, s.jsx)(o(), {
                      src: "/chevron-left.svg",
                      alt: "Next",
                      width: 16,
                      height: 16,
                      className: "z-40 rotate-180",
                    }),
                  }),
                ],
              });
        },
        space_race_ReferralHistory = function (e) {
          var t;
          let {
              onClose: a,
              pagination: r,
              loading: n,
              setPage: i,
              page: l,
            } = e,
            o = (0, c.useMemo)(() => {
              var e;
              return null !== (e = null == r ? void 0 : r.docs) && void 0 !== e
                ? e
                : [];
            }, [null == r ? void 0 : r.docs]),
            { data: d } = (0, j.em)({ address: void 0 }),
            [u] = (0, j.gS)(),
            [x, m] = (0, c.useState)({}),
            [p, f] = (0, c.useState)(!1),
            h = (0, c.useCallback)(
              async (e) => {
                if (!e.length) return;
                f(!0);
                let t = {};
                try {
                  for (let a = 0; a < e.length; a += 100) {
                    let s = e.slice(a, a + 100),
                      r = s.map((e) => e.address),
                      n = await u({ userAddresses: r }).unwrap();
                    n.forEach((e) => {
                      t[e.userAddress] || (t[e.userAddress] = []),
                        t[e.userAddress].push(e);
                    });
                  }
                  m(t);
                } catch (e) {
                  console.error("Failed to fetch user data:", e);
                } finally {
                  f(!1);
                }
              },
              [u]
            );
          (0, c.useEffect)(() => {
            o.length > 0 && h(o);
          }, [o, h]);
          let b = (0, c.useMemo)(() => {
              let e = {};
              return (
                o.forEach((t) => {
                  let a = x[t.address] || [],
                    s = [],
                    r = [];
                  if (a.length > 0)
                    a.forEach((e) => {
                      let t =
                        null == d
                          ? void 0
                          : d.find((t) => t.vaultId === e.vaultId);
                      if (t) {
                        let a = F.ZP.getSymbolFromVaultType(t.type),
                          n =
                            parseFloat(e.userBalance) /
                            10 ** t.baseToken.decimals,
                          i =
                            parseFloat(e.bondingBalance) /
                            10 ** t.baseToken.decimals;
                        n > 0 && s.push({ valueInBase: n, baseSymbol: a }),
                          i > 0 && r.push({ valueInBase: i, baseSymbol: a });
                      }
                    });
                  else {
                    let e = t.deposits || 0,
                      a = t.bonds || 0;
                    e > 0 && s.push({ valueInBase: e, baseSymbol: "USD" }),
                      a > 0 && r.push({ valueInBase: a, baseSymbol: "USD" });
                  }
                  e[t.address] = { deposits: s, bonds: r };
                }),
                e
              );
            }, [o, x, d]),
            v = c.useRef(null);
          return (0, s.jsxs)("div", {
            onClick: (e) => {
              e.stopPropagation();
            },
            className:
              "animate-fadein border-solid border border-[#ffffff21] relative flex flex-col items-center justify-center w-[95%] max-w-[1000px] bg-[#0f0f0f] rounded-md overflow-hidden pt-6",
            children: [
              (0, s.jsx)(g.u, {
                id: "info-tooltip",
                clickable: !0,
                noArrow: !0,
                className: "chart_box_header_tooltip z-10",
              }),
              a &&
                (0, s.jsx)("button", {
                  onClick: (e) => {
                    e.stopPropagation(), a();
                  },
                  className:
                    "absolute top-2 border-white cursor-pointer right-2 bg-[#FFFFFF08] rounded-full w-5 h-5 flex items-center justify-center",
                  children: (0, s.jsx)("svg", {
                    className: "w-3 h-3 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2.5",
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  }),
                }),
              (0, s.jsx)("p", {
                className:
                  "text-white font-RussoOne text-[16px] sm:text-[18px] md:text[20px] text-center font-semibold mb-3",
                children: "Successful Referrals",
              }),
              (0, s.jsx)("div", {
                className: "w-full overflow-x-auto flex flex-col",
                ref: v,
                children:
                  n || 0 == o.length
                    ? (0, s.jsx)("div", {
                        className:
                          "w-full flex items-center justify-center h-32",
                        children: (0, s.jsx)("p", {
                          className:
                            "gradient-text font-EuclidCircularB text-[16px] font-bold",
                          children:
                            0 == o.length
                              ? "No data available"
                              : p
                              ? "Loading User Data..."
                              : "Loading Points History",
                        }),
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(referral_history_header, {}),
                          (0, s.jsx)("div", {
                            className:
                              "min-w-full w-fit max-h-[calc(100vh-250px)] [&>*:nth-child(even)]:bg-[#FFFFFF08]  overflow-y-auto",
                            children: o.map((e) => {
                              let t = new Date(e.createdAt),
                                a = b[e.address];
                              return (0, s.jsx)(
                                referral_history_entry,
                                {
                                  data: e,
                                  userVaultData: a,
                                  isLoadingUserData: p,
                                  date: ""
                                    .concat(t.getDate(), ".")
                                    .concat(t.getMonth() + 1, ".")
                                    .concat(t.getFullYear()),
                                },
                                e._id
                              );
                            }),
                          }),
                        ],
                      }),
              }),
              !n &&
                !p &&
                o.length > 0 &&
                (0, s.jsx)(components_GlobalPagination, {
                  page: l,
                  setPage: (e) => {
                    n || p || i(e);
                  },
                  totalPages:
                    null !== (t = null == r ? void 0 : r.totalPages) &&
                    void 0 !== t
                      ? t
                      : 1,
                }),
            ],
          });
        },
        referral_history_dialog = function (e) {
          let { onClose: t, open: a, address: r, referralCode: n } = e,
            [i, l] = c.useState(0),
            [o, { data: d, isLoading: u, error: x }] = (0, N.Wn)();
          (0, c.useEffect)(() => {
            r && o({ address: r, page: i + 1 });
          }, [r, i]);
          let m = [{ opacity: 1, offset: 0 }, { opacity: 0 }],
            p = { duration: 350, iterations: 1 },
            handleClose = () => {
              f.current && f.current.animate(m, p),
                setTimeout(() => {
                  t();
                }, p.duration);
            };
          (0, c.useEffect)(() => {
            let handleKeyDown = (e) => {
              "Escape" === e.key && a && handleClose();
            };
            return (
              document.addEventListener("keydown", handleKeyDown),
              () => {
                document.removeEventListener("keydown", handleKeyDown);
              }
            );
          }, [handleClose]),
            (0, c.useEffect)(() => {
              document.body.style.overflowY = a ? "hidden" : "auto";
            }, [a]);
          let f = c.useRef(null);
          return (0, s.jsx)("div", {
            ref: f,
            className:
              "fixed inset-0 z-[100] bg-[#000000a0] flex items-center justify-center animate-fadeinFast ".concat(
                a ? "block" : "hidden"
              ),
            onClick: handleClose,
            children: (0, s.jsx)(space_race_ReferralHistory, {
              loading: u,
              onClose: handleClose,
              pagination: d,
              referralCode: n,
              setPage: l,
              page: i,
            }),
          });
        },
        CustomReferralLinkDialog = function (e) {
          let { onClose: t, open: a, address: r, oldValue: n } = e,
            i = c.useRef(null),
            l = [{ opacity: 1, offset: 0 }, { opacity: 0 }],
            o = { duration: 350, iterations: 1 },
            handleClose = () => {
              f ||
                (i.current && i.current.animate(l, o),
                setTimeout(() => {
                  t();
                }, o.duration));
            },
            [d, u] = c.useState(""),
            [x, { data: p, isLoading: f, isError: h, error: b }] = (0, N.Qy)(),
            handleGenerateCustomReferralLink = () => {
              if (!f && r && 0 !== d.trim().length && d.trim() !== n) {
                if (!/^[a-zA-Z0-9-]*$/.test(d.trim())) {
                  (0, y.x)("Invalid referral link", "error");
                  return;
                }
                if (d.trim().length > 20) {
                  (0, y.x)(
                    "Referral link must be 20 characters or less",
                    "error"
                  );
                  return;
                }
                if (d.trim().length < 2) {
                  (0, y.x)(
                    "Referral link must be at least 2 characters",
                    "error"
                  );
                  return;
                }
                x({ address: r, customReferralLink: d.trim() })
                  .unwrap()
                  .then((e) => {
                    var t;
                    (0, y.x)(
                      e.success
                        ? "Custom referral link created"
                        : null !== (t = e.message) && void 0 !== t
                        ? t
                        : "Could not create custom referral link",
                      e.success ? "success" : "warning"
                    ),
                      handleClose();
                  })
                  .catch((e) => {
                    var t, a, s;
                    (0, y.x)(
                      null !==
                        (s =
                          null !==
                            (a =
                              null == e
                                ? void 0
                                : null === (t = e.data) || void 0 === t
                                ? void 0
                                : t.message) && void 0 !== a
                            ? a
                            : null == e
                            ? void 0
                            : e.message) && void 0 !== s
                        ? s
                        : "Could not create custom referral link",
                      "error"
                    );
                  });
              }
            };
          return ((0, c.useEffect)(() => {
            a && u(null != n ? n : "");
          }, [a, n]),
          a)
            ? (0, s.jsx)("div", {
                ref: i,
                className:
                  "fixed inset-0 z-[100] bg-[#000000a0] flex items-center justify-center animate-fadeinFast ".concat(
                    a ? "block" : "hidden"
                  ),
                onClick: handleClose,
                children: (0, s.jsxs)("div", {
                  onClick: (e) => {
                    e.stopPropagation();
                  },
                  className:
                    "max-w-[400px] w-[95%] bg-[#0f0f0f] rounded-md overflow-hidden py-3 shadow-lg px-3 relative",
                  children: [
                    t &&
                      (0, s.jsx)("button", {
                        onClick: (e) => {
                          e.stopPropagation(), t();
                        },
                        className:
                          "absolute top-2 border-white cursor-pointer right-2 bg-[#FFFFFF08] rounded-full w-5 h-5 flex items-center justify-center",
                        children: (0, s.jsx)("svg", {
                          className: "w-3 h-3 text-white",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, s.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2.5",
                            d: "M6 18L18 6M6 6l12 12",
                          }),
                        }),
                      }),
                    (0, s.jsx)("p", {
                      className:
                        "text-white font-RussoOne text-[14px] sm:text-[16px] md:text[18px] text-start font-semibold mb-3",
                      children: "Enter your custom referral link below",
                    }),
                    (0, s.jsxs)("form", {
                      onSubmit: (e) => {
                        e.preventDefault(), handleGenerateCustomReferralLink();
                      },
                      children: [
                        (0, s.jsx)("input", {
                          type: "text",
                          required: !0,
                          className:
                            "w-full bg-[#1E1E1E] border-[1px] border-[#7D6FF6] rounded-md py-2 px-4 text-white text-[14px] sm:text-[16px] md:text[18px] font-EuclidCircularB font-semibold",
                          placeholder: "Ex: Crypto-Logan",
                          value: d,
                          onChange: (e) => u(e.target.value),
                        }),
                        (0, s.jsx)("button", {
                          type: "submit",
                          className:
                            "w-full bg-[#7D6FF6] rounded-md py-2 px-4 text-white text-[14px] sm:text-[16px] md:text[18px] font-EuclidCircularB font-semibold mt-4",
                          children: f
                            ? (0, s.jsx)(m.Z, { className: "w-4 h-4" })
                            : "Submit",
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : null;
        },
        C = a(25949),
        D = a(51869),
        B = a(34938),
        stars_history_item = function (e) {
          let {
            label: t = "",
            tooltip: a,
            minW: r,
            border: n,
            basis: i,
            maxW: l,
            icon: c,
            extra: d,
            deleted: u = !1,
          } = e;
          return (0, s.jsxs)("div", {
            className: ""
              .concat(l || "grow", " shrink-0 ")
              .concat(r, " ")
              .concat(i, " ")
              .concat(
                n
                  ? "border-0 border-r border-solid border-[#FFFFFF1A] py-6 text-[14px] font-medium"
                  : "py-3 text-[16px] font-semibold",
                " "
              )
              .concat(
                d,
                " text-white text-center font-EuclidCircularB line-clamp-1 flex items-center gap-2 justify-center"
              ),
            children: [
              t,
              " ",
              u &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsxs)("span", {
                      className: ""
                        .concat(
                          n
                            ? "text-[14px] font-medium"
                            : "text-[16px] font-semibold",
                          " "
                        )
                        .concat(
                          d,
                          " text-red-600 font-EuclidCircularB cursor-starer"
                        ),
                      children: ["- ", t],
                    }),
                    " ",
                    (0, s.jsx)("span", {
                      "data-tooltip-id": "info-tooltip",
                      "data-tooltip-content":
                        "You deleted this event. Stars were not penalized.",
                      className: ""
                        .concat(
                          n
                            ? "text-[14px] font-medium"
                            : "text-[16px] font-semibold",
                          " "
                        )
                        .concat(d, " font-EuclidCircularB cursor-starer"),
                      children: "ⓘ",
                    }),
                  ],
                }),
              c,
              a &&
                (0, s.jsx)("a", {
                  "data-tooltip-id": "info-tooltip",
                  className: "cursor-starer",
                  "data-tooltip-content": a,
                  children: (0, s.jsx)(o(), {
                    width: 15,
                    height: 15,
                    src: "/info-white-filled.svg",
                    alt: "info-{$label}",
                  }),
                }),
            ],
          });
        },
        stars_history_entry_wrapper = function (e) {
          let { children: t, borderTop: a } = e;
          return (0, s.jsx)("div", {
            className:
              "min-w-full [&>*:last-child]:!border-none w-[max-content] flex items-center border-0 ".concat(
                a && "border-t border-t-[#FFFFFF1A]",
                " border-b border-solid border-b-[#FFFFFF1A]"
              ),
            children: t,
          });
        },
        stars_history_entry = function (e) {
          let { data: t, date: a } = e;
          return (0, s.jsxs)(stars_history_entry_wrapper, {
            children: [
              (0, s.jsx)(stars_history_item, {
                minW: "min-w-[120px]",
                basis: "basis-[120px]",
                maxW: "max-[150px]",
                label: a,
                border: !0,
              }),
              (0, s.jsx)(stars_history_item, {
                minW: "min-w-[450px]",
                basis: "basis-[450px]",
                label: F.ZP.getRewardDescription(t),
                border: !0,
              }),
              (0, s.jsx)(stars_history_item, {
                minW: "min-w-[150px]",
                basis: "basis-[150px]",
                maxW: "max-[170px]",
                label: F.ZP.formatNumberWithAbbreviation(
                  F.ZP.roundToTwo(t.stars)
                ),
                border: !0,
              }),
            ],
          });
        },
        stars_history_header = function () {
          return (0, s.jsxs)(stars_history_entry_wrapper, {
            borderTop: !0,
            children: [
              (0, s.jsx)(stars_history_item, {
                minW: "min-w-[120px]",
                basis: "basis-[120px]",
                maxW: "max-[150px]",
                extra: "!font-bold text-[15px] sm:text-[16px]",
                label: "Date",
                border: !0,
              }),
              (0, s.jsx)(stars_history_item, {
                minW: "min-w-[450px]",
                basis: "basis-[450px]",
                extra: "!font-bold text-[15px] sm:text-[16px]",
                label: "Description",
                border: !0,
              }),
              (0, s.jsx)(stars_history_item, {
                minW: "min-w-[150px]",
                basis: "basis-[150px]",
                maxW: "max-[170px]",
                extra: "!font-bold text-[15px] sm:text-[16px]",
                label: "Stars Gained",
                border: !0,
              }),
            ],
          });
        },
        space_race_StarsHistory = function (e) {
          var t, a;
          let {
              onClose: r,
              pagination: n,
              loading: i,
              page: l,
              setPage: o,
            } = e,
            c =
              null !== (t = null == n ? void 0 : n.docs) && void 0 !== t
                ? t
                : [];
          return (0, s.jsxs)("div", {
            onClick: (e) => {
              e.stopPropagation();
            },
            className:
              "animate-fadein border-solid border border-[#ffffff21] relative flex flex-col items-center justify-center w-[95%] max-w-[800px] bg-[#0f0f0f] rounded-md overflow-hidden pt-6",
            children: [
              (0, s.jsx)(g.u, {
                id: "info-tooltip",
                clickable: !0,
                noArrow: !0,
                className: "chart_box_header_tooltip z-10",
              }),
              r &&
                (0, s.jsx)("button", {
                  onClick: (e) => {
                    e.stopPropagation(), r();
                  },
                  className:
                    "absolute top-2 border-white cursor-starer right-2 bg-[#FFFFFF08] rounded-full w-5 h-5 flex items-center justify-center",
                  children: (0, s.jsx)("svg", {
                    className: "w-3 h-3 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2.5",
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  }),
                }),
              (0, s.jsx)("p", {
                className:
                  "text-white font-RussoOne text-[16px] sm:text-[18px] md:text[20px] text-center font-semibold mb-3",
                children: "Total Stars Earned",
              }),
              (0, s.jsx)("div", {
                className: "w-full overflow-x-auto flex flex-col",
                children:
                  i || 0 == c.length
                    ? (0, s.jsx)("div", {
                        className:
                          "w-full flex items-center justify-center h-32",
                        children: (0, s.jsx)("p", {
                          className:
                            "gradient-text font-EuclidCircularB text-[16px] font-bold",
                          children:
                            0 == c.length
                              ? "No data available"
                              : "Loading Stars History",
                        }),
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(stars_history_header, {}),
                          (0, s.jsx)("div", {
                            className:
                              "min-w-full w-fit max-h-[calc(100vh-250px)] [&>*:nth-child(even)]:bg-[#FFFFFF08]  overflow-y-auto",
                            children: c.map((e) => {
                              let t = new Date(e.createdAt);
                              return (0, s.jsx)(
                                stars_history_entry,
                                {
                                  data: e,
                                  date: ""
                                    .concat(t.getDate(), ".")
                                    .concat(t.getMonth() + 1, ".")
                                    .concat(t.getFullYear()),
                                },
                                e._id
                              );
                            }),
                          }),
                        ],
                      }),
              }),
              !i &&
                c.length > 0 &&
                (0, s.jsx)(components_GlobalPagination, {
                  page: l,
                  setPage: (e) => {
                    i || o(e);
                  },
                  totalPages:
                    null !== (a = null == n ? void 0 : n.totalPages) &&
                    void 0 !== a
                      ? a
                      : 1,
                }),
            ],
          });
        },
        stars_history_dialog = function (e) {
          let { onClose: t, open: a, address: r } = e,
            [n, i] = c.useState(0),
            [l, { data: o, isLoading: d }] = (0, N.At)();
          (0, c.useEffect)(() => {
            r && l({ address: r, page: n + 1, limit: 10 });
          }, [r, n]);
          let u = [{ opacity: 1, offset: 0 }, { opacity: 0 }],
            x = { duration: 350, iterations: 1 },
            handleClose = () => {
              m.current && m.current.animate(u, x),
                setTimeout(() => {
                  t();
                }, x.duration);
            };
          (0, c.useEffect)(() => {
            let handleKeyDown = (e) => {
              "Escape" === e.key && a && handleClose();
            };
            return (
              document.addEventListener("keydown", handleKeyDown),
              () => {
                document.addEventListener("keydown", handleKeyDown);
              }
            );
          }, [handleClose]),
            (0, c.useEffect)(() => {
              document.body.style.overflowY = a ? "hidden" : "auto";
            }, [a]);
          let m = c.useRef(null);
          return (0, s.jsx)("div", {
            ref: m,
            className:
              "fixed inset-0 z-[100] bg-[#000000a0] flex items-center justify-center animate-fadeinFast ".concat(
                a ? "block" : "hidden"
              ),
            onClick: handleClose,
            children: (0, s.jsx)(space_race_StarsHistory, {
              loading: d,
              onClose: handleClose,
              pagination: o,
              page: n,
              setPage: i,
            }),
          });
        },
        E = a(55765),
        T = a(17296),
        S = a(31852);
      let P = Array.from({ length: 36 }, (e, t) => {
        let a = 10 * t;
        return {
          rotation: a,
          size: a % 30 == 0 ? "large" : a % 20 == 0 ? "medium" : "small",
        };
      });
      var circle = function (e) {
          let {
              muted: t = !1,
              isSpinning: a = !1,
              showReward: r = !1,
              rewardAmount: n = 0,
            } = e,
            i = (0, c.useRef)(null),
            l = (0, c.useRef)(0),
            o = (0, c.useRef)(null),
            d = (0, c.useRef)(0);
          return (
            (0, c.useEffect)(() => {
              i.current = new Audio("/single-click.wav");
              let checkForTicks = () => {
                if (o.current) {
                  try {
                    var e, a, s;
                    let r = window.getComputedStyle(o.current).transform;
                    if (!r || "none" === r) {
                      requestAnimationFrame(checkForTicks);
                      return;
                    }
                    let n =
                      null === (a = r.split("(")[1]) || void 0 === a
                        ? void 0
                        : null === (e = a.split(")")[0]) || void 0 === e
                        ? void 0
                        : e.split(",");
                    if (!n || n.length < 2) {
                      requestAnimationFrame(checkForTicks);
                      return;
                    }
                    let c = parseFloat(n[0]),
                      u = parseFloat(n[1]);
                    if (isNaN(c) || isNaN(u)) {
                      requestAnimationFrame(checkForTicks);
                      return;
                    }
                    let x = Math.round(Math.atan2(u, c) * (180 / Math.PI)),
                      m = (d.current + 360) % 360;
                    if (
                      Math.floor(((x + 360) % 360) / 10) !== Math.floor(m / 10)
                    ) {
                      let e = Date.now();
                      e - l.current > 50 &&
                        (t ||
                          null === (s = i.current) ||
                          void 0 === s ||
                          s
                            .play()
                            .then(() => {
                              i.current.currentTime = 0;
                            })
                            .catch(console.error),
                        (l.current = e));
                    }
                    d.current = x;
                  } catch (e) {
                    console.error("Error checking ticks:", e);
                  }
                  requestAnimationFrame(checkForTicks);
                }
              };
              return (
                checkForTicks(),
                () => {
                  var e;
                  null === (e = i.current) || void 0 === e || e.pause(),
                    (i.current = null);
                }
              );
            }, []),
            (0, c.useEffect)(() => {
              if (a && o.current) {
                let e = o.current.querySelector(".mark"),
                  t =
                    (e &&
                      parseFloat(
                        e.style.transform
                          .replace("rotate(", "")
                          .replace("deg)", "")
                      )) ||
                    0;
                (o.current.style.animation = "none"),
                  o.current.offsetWidth,
                  (o.current.style.animation =
                    "spin-wheel 5s cubic-bezier(0.4, 0.1, 0.3, 0.95)"),
                  setTimeout(() => {
                    if (o.current) {
                      let e = o.current.getElementsByClassName("mark");
                      Array.from(e).forEach((e, a) => {
                        e.style.transform = "rotate(".concat(
                          t + 3600 + P[a].rotation,
                          "deg)"
                        );
                      });
                    }
                  }, 5e3);
              }
            }, [a]),
            (0, s.jsxs)("div", {
              className:
                "w-full aspect-[16/6] relative max-w-[800px] mx-auto overflow-hidden",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "w-full h-full absolute bottom-0 left-0 right-0 top-0 origin-center z-[2] flex justify-center items-center",
                  style: { opacity: r ? 1 : 0, transition: "opacity 1s" },
                  children: (0, s.jsx)("div", {
                    className:
                      "w-fit h-fit gradient-wrapper-extra p-px rounded-md pointer-events-none select-none",
                    children: (0, s.jsx)("div", {
                      className: "w-full h-full bg-black rounded-md px-4 py-2",
                      children: (0, s.jsxs)("p", {
                        className:
                          "text-center text-white font-RussoOne font-bold text-2xl",
                        children: ["YOU WON ", n, " POINTS"],
                      }),
                    }),
                  }),
                }),
                (0, s.jsx)("div", {
                  className: (0, F.cn)(
                    "w-full aspect-square rounded-full secondary-to-transparent absolute bottom-0 left-0 right-0 origin-center z-[1]",
                    { success: r }
                  ),
                  children: (0, s.jsx)("div", {
                    ref: o,
                    className: "w-full h-full relative wheel-spin",
                    children: P.map((e, t) =>
                      (0, s.jsx)(
                        "div",
                        {
                          className:
                            "mark absolute top-0 left-1/2 w-0 h-1/2 origin-bottom",
                          style: {
                            transform: "rotate(".concat(e.rotation, "deg)"),
                          },
                          children: (0, s.jsx)("div", {
                            className:
                              "absolute bg-white top-0 left-1/2 transform -translate-x-1/2",
                            style: {
                              width:
                                "large" === e.size
                                  ? "4px"
                                  : "medium" === e.size
                                  ? "3px"
                                  : "2px",
                              height:
                                "large" === e.size
                                  ? "20px"
                                  : "medium" === e.size
                                  ? "15px"
                                  : "10px",
                            },
                          }),
                        },
                        t
                      )
                    ),
                  }),
                }),
              ],
            })
          );
        },
        spin_button = function (e) {
          let { spins: t, state: a, onSpin: r } = e;
          return (0, s.jsx)("div", {
            className:
              "flex justify-center items-center mt-6 -mb-6 select-none relative z-[3] ".concat(
                t > 0
                  ? "animate-fadein opacity-100 pointer-events-auto"
                  : "animate-fadeout opacity-0 pointer-events-none "
              ),
            children: (0, s.jsx)("button", {
              disabled: 0 === t || "loading" === a || "spinning" === a,
              onClick: r,
              className:
                "text-white font-RussoOne z-[1] text-xl xl:text-2xl cursor-pointer h-[40px] lg:h-[45px] xl:h-[50px] px-4 rounded-lg border-[#7D6FF6] border-solid bg-white bg-opacity-[15%] outline-none transition-all duration-75 ease-in-out disabled:opacity-50",
              children:
                "spinning" === a || "loading" === a
                  ? (0, s.jsx)(m.Z, { className: "w-5 h-5" })
                  : "claiming" === a
                  ? "Claim"
                  : "Spin",
            }),
          });
        },
        W = a(68563),
        SimplifiedSpins = function (e) {
          let { spins: t, address: a } = e,
            [r, { isLoading: n }] = (0, N.WM)(),
            [i, { entry: l }] = (0, S.S)(),
            [o, d] = c.useState(!1);
          (0, c.useEffect)(() => {
            l && !o && (null == l ? void 0 : l.isIntersecting) && d(!0);
          }, [l]);
          let [u, x] = (0, c.useState)("idle"),
            m = (0, c.useRef)(null),
            [p, f] = (0, c.useState)(!1),
            [h, b] = (0, c.useState)(0);
          return (
            (0, c.useEffect)(
              () => (
                (m.current = new Audio("/reward.wav")),
                (m.current.volume = 0.2),
                (m.current.oncanplaythrough = () => {
                  f(!0);
                }),
                m.current.load(),
                () => {
                  m.current = null;
                }
              ),
              []
            ),
            (0, s.jsxs)("div", {
              className: "pt-8 pb-12 relative w-full",
              style: { opacity: o ? 1 : 0, transition: "opacity 1s" },
              children: [
                (0, s.jsx)("div", {
                  className:
                    "absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-b from-black to-transparent z-[2] pointer-events-none",
                  ref: i,
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex w-full justify-center items-center flex-col select-none pointer-events-none relative z-[3]",
                  children: [
                    (0, s.jsx)("p", {
                      className:
                        "text-center z-[1] font-bold gradient-text font-RussoOne text-3xl xl:text-4xl relative",
                      children:
                        -1 === t
                          ? "YOU RAN OUT OF SPINS"
                          : "YOU HAVE "
                              .concat(t, " ")
                              .concat(1 === t ? "SPIN" : "SPINS"),
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-center z-[1] font-medium text-white font-EuclidCircularB text-xl xl:text-2xl relative",
                      children: "Spin to earn points",
                    }),
                  ],
                }),
                (0, s.jsx)(spin_button, {
                  spins: t,
                  state: p ? u : "loading",
                  onSpin: () => {
                    if (0 !== t && p && !(t <= 0) && !n) {
                      if ("claiming" === u) {
                        x("loading"),
                          setTimeout(() => {
                            x("idle");
                          }, 800);
                        return;
                      }
                      "idle" === u &&
                        (x("spinning"),
                        r({ address: a })
                          .unwrap()
                          .then((e) => {
                            (null == e ? void 0 : e.rewardAmount) &&
                              e.rewardAmount > 0 &&
                              (b(e.rewardAmount),
                              setTimeout(() => {
                                x("claiming"),
                                  setTimeout(() => {
                                    if (p) {
                                      var e;
                                      null === (e = m.current) ||
                                        void 0 === e ||
                                        e.play().catch(console.error);
                                    }
                                  }, 500);
                              }, 500));
                          })
                          .catch((e) => {
                            W.ZP.error(
                              "Something went wrong, please try again later."
                            ),
                              x("idle");
                          }));
                    }
                  },
                }),
                (0, s.jsx)(circle, {
                  rewardAmount: h,
                  isSpinning: "spinning" === u,
                  showReward: "claiming" === u,
                }),
                (0, s.jsx)("div", {
                  className:
                    "relative z-[4] -mt-[12px] mx-auto w-0 h-0 border-solid border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-transparent border-b-[30px]",
                  style: { borderBottomColor: "#ffffff87" },
                }),
              ],
            })
          );
        },
        components_GradientLink = function (e) {
          let { className: t } = e;
          return (0, s.jsxs)("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 23 23",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, p.cn)("object-contain animated-gradient-svg", t),
            children: [
              (0, s.jsx)("defs", {
                children: (0, s.jsxs)("linearGradient", {
                  id: "animated-link-gradient",
                  x1: "0%",
                  y1: "0%",
                  x2: "100%",
                  y2: "0%",
                  children: [
                    (0, s.jsx)("stop", {
                      offset: "0%",
                      stopColor: "var(--color-one)",
                    }),
                    (0, s.jsx)("stop", {
                      offset: "50%",
                      stopColor: "var(--color-two)",
                    }),
                    (0, s.jsx)("stop", {
                      offset: "100%",
                      stopColor: "var(--color-one)",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("path", {
                d: "M12.2796 18.074C12.4063 18.2003 12.5069 18.3504 12.5755 18.5156C12.6441 18.6808 12.6794 18.858 12.6794 19.0369C12.6794 19.2158 12.6441 19.393 12.5755 19.5582C12.5069 19.7234 12.4063 19.8735 12.2796 19.9998L11.6067 20.6727C10.3316 21.9478 8.60227 22.6641 6.79905 22.6641C4.99583 22.6641 3.26647 21.9478 1.9914 20.6727C0.716327 19.3976 0 17.6683 0 15.865C0 14.0618 0.716327 12.3324 1.9914 11.0574L4.72374 8.32617C5.94886 7.09802 7.59721 6.38478 9.33114 6.33255C11.0651 6.28032 12.7534 6.89305 14.0502 8.04523C14.1841 8.16424 14.2932 8.30846 14.3714 8.46964C14.4495 8.63083 14.4951 8.80583 14.5057 8.98466C14.5162 9.16349 14.4914 9.34263 14.4327 9.51187C14.374 9.68111 14.2825 9.83712 14.1635 9.97101C14.0445 10.1049 13.9002 10.214 13.7391 10.2922C13.5779 10.3703 13.4029 10.416 13.224 10.4265C13.0452 10.437 12.8661 10.4122 12.6968 10.3535C12.5276 10.2948 12.3716 10.2033 12.2377 10.0843C11.46 9.39365 10.4479 9.02622 9.40828 9.05718C8.36867 9.08813 7.38018 9.51513 6.64499 10.2508L3.91491 12.9786C3.14999 13.7436 2.72026 14.781 2.72026 15.8628C2.72026 16.9445 3.14999 17.982 3.91491 18.7469C4.67983 19.5118 5.71729 19.9416 6.79905 19.9416C7.88081 19.9416 8.91827 19.5118 9.68319 18.7469L10.3561 18.074C10.4823 17.9476 10.6323 17.8474 10.7973 17.779C10.9623 17.7105 11.1392 17.6753 11.3178 17.6753C11.4965 17.6753 11.6734 17.7105 11.8384 17.779C12.0034 17.8474 12.1533 17.9476 12.2796 18.074ZM20.6715 1.98808C19.3954 0.714973 17.6664 0 15.8638 0C14.0612 0 12.3323 0.714973 11.0562 1.98808L10.3833 2.66097C10.1279 2.91635 9.98443 3.26271 9.98443 3.62386C9.98443 3.98502 10.1279 4.33138 10.3833 4.58675C10.6386 4.84213 10.985 4.9856 11.3462 4.9856C11.7073 4.9856 12.0537 4.84213 12.3091 4.58675L12.9819 3.91386C13.7469 3.14894 14.7843 2.71921 15.8661 2.71921C16.9478 2.71921 17.9853 3.14894 18.7502 3.91386C19.5151 4.67878 19.9449 5.71624 19.9449 6.798C19.9449 7.87977 19.5151 8.91722 18.7502 9.68214L16.019 12.4145C15.2832 13.1499 14.2941 13.5762 13.2543 13.6064C12.2144 13.6365 11.2023 13.268 10.4252 12.5765C10.2913 12.4575 10.1353 12.366 9.96604 12.3073C9.7968 12.2486 9.61766 12.2238 9.43883 12.2343C9.26001 12.2448 9.085 12.2904 8.92382 12.3686C8.76263 12.4467 8.61841 12.5559 8.4994 12.6898C8.38039 12.8236 8.28892 12.9797 8.2302 13.1489C8.17149 13.3181 8.14668 13.4973 8.1572 13.6761C8.16772 13.8549 8.21336 14.0299 8.29151 14.1911C8.36966 14.3523 8.4788 14.4965 8.61268 14.6155C9.9086 15.7675 11.5958 16.3806 13.3289 16.3294C15.062 16.2782 16.71 15.5666 17.9357 14.3403L20.6681 11.6091C21.9427 10.3333 22.6589 8.60381 22.6596 6.80041C22.6602 4.997 21.9452 3.26705 20.6715 1.99035V1.98808Z",
                fill: "url(#animated-link-gradient)",
              }),
            ],
          });
        },
        L = a(41038),
        check_in_task = function (e) {
          var t, a;
          let { userData: r } = e,
            { signMessageAsync: n } = (0, L.Q)(),
            [i, l] = (0, c.useState)(!1),
            [o] = (0, N.JM)(),
            d = (0, c.useMemo)(() => {
              if (!r.lastStreak) return;
              let e = new Date(),
                t = new Date(r.lastStreak),
                a = Math.abs(e.getTime() - t.getTime());
              if (a < 3e5) return "just now";
              let s = Math.floor(a / 2592e6),
                n = a % 2592e6,
                i = Math.floor(n / 864e5),
                l = n % 864e5,
                o = Math.floor(l / 36e5),
                c = Math.floor((l % 36e5) / 6e4),
                d = "";
              return (
                s > 0 &&
                  ((d += "".concat(s, " month").concat(1 === s ? "" : "s")),
                  (i > 0 || o > 0 || c > 0) && (d += " ")),
                i > 0 &&
                  ((d += "".concat(i, " day").concat(1 === i ? "" : "s")),
                  (o > 0 || c > 0) && (d += " ")),
                o > 0 &&
                  ((d += "".concat(o, " hour").concat(1 === o ? "" : "s")),
                  c > 0 && (d += " ")),
                c > 0 &&
                  (d += "".concat(c, " minute").concat(1 === c ? "" : "s")),
                "".concat(d, " ago")
              );
            }, [r.lastStreak]);
          return (0, s.jsx)(space_race_TaskBox, {
            description:
              "You can check-in daily to earn points. If you check-in every day, you will earn 1 extra spin every week. Your current streak is "
                .concat(
                  null !== (t = null == r ? void 0 : r.streak) && void 0 !== t
                    ? t
                    : 0,
                  " day"
                )
                .concat((null == r ? void 0 : r.streak) === 1 ? "" : "s", ". ")
                .concat(
                  d
                    ? "Last check-in was ".concat(d, ".")
                    : "You have not checked in yet."
                ),
            points:
              null !== (a = null == r ? void 0 : r.checkInPoints) &&
              void 0 !== a
                ? a
                : 0,
            title: "Daily Check-In",
            type: "recurring",
            className: "max-w-[550px]",
            done: !!(
              (null == r ? void 0 : r.lastStreak) &&
              new Date(r.lastStreak) > new Date(Date.now() - 864e5)
            ),
            button: {
              text: "Check-In",
              icon: "/check.svg",
              loading: i,
              onClick: async () => {
                var e, t, a, s;
                let c = new Date(
                    null !== (e = r.lastStreak) && void 0 !== e ? e : ""
                  ),
                  d = new Date(),
                  u = Math.abs(d.getTime() - c.getTime());
                if (u < 864e5) {
                  W.ZP.success("You have already checked in today."), l(!1);
                  return;
                }
                if (!i)
                  try {
                    l(!0);
                    let e = await n({ message: "check-in" }),
                      a = await o({
                        address: r.address,
                        signature: e,
                      }).unwrap(),
                      s =
                        null !== (t = null == a ? void 0 : a.streak) &&
                        void 0 !== t
                          ? t
                          : 0;
                    s % 7 == 0
                      ? W.ZP.success("You have earned a free spin!")
                      : W.ZP.success("Daily check-in successful");
                  } catch (e) {
                    (
                      null == e
                        ? void 0
                        : null === (a = e.data) || void 0 === a
                        ? void 0
                        : a.message
                    )
                      ? W.ZP.error(
                          null == e
                            ? void 0
                            : null === (s = e.data) || void 0 === s
                            ? void 0
                            : s.message
                        )
                      : W.ZP.error("Daily check-in failed");
                  } finally {
                    l(!1);
                  }
              },
            },
          });
        };
      let Z = { 3: 1.2, 6: 1.6, 12: 2.2 };
      var space_race = function () {
          var e, t, a, r, n, l, d, p, f, h, b, v;
          let { isConnected: w } = (0, u.Z)(),
            { address: _ } = (0, u.Z)(),
            { userData: k, validating: S } = (0, B.Z)(),
            [P, L] = (0, c.useState)(!1),
            [A, R] = (0, c.useState)(!1),
            [M, I] = (0, c.useState)(!1),
            [O, z] = (0, c.useState)(!1),
            Y = [...x.Mh, ...x.Kh],
            { data: U, isLoading: K } = (0, j.em)({ address: _ }),
            { data: V } = (0, E.Z)({ vaults: null != U ? U : [], account: _ }),
            { data: H } = (0, j.C2)(
              { address: null != _ ? _ : "0x0" },
              { pollingInterval: 2e4 }
            ),
            { data: G } = (0, j.Zf)(void 0, { pollingInterval: 3e5 }),
            q = (0, c.useCallback)(
              (e, t) => {
                var a, s, r;
                let n = e;
                switch (t) {
                  case "ETH":
                    n =
                      e *
                      (null !== (a = null == G ? void 0 : G.ethPrice) &&
                      void 0 !== a
                        ? a
                        : 0);
                    break;
                  case "USDC":
                    n =
                      e *
                      (null !== (s = null == G ? void 0 : G.usdcPrice) &&
                      void 0 !== s
                        ? s
                        : 0);
                    break;
                  case "BTC":
                    n =
                      e *
                      (null !== (r = null == G ? void 0 : G.btcPrice) &&
                      void 0 !== r
                        ? r
                        : 0);
                    break;
                  default:
                    n = e;
                }
                return n;
              },
              [G]
            ),
            $ = (0, c.useMemo)(() => {
              var e;
              if (!H || !U || !k) return 1;
              let t = null !== (e = k.multiplier) && void 0 !== e ? e : 1,
                a = H.filter((e) => {
                  let { txnType: t, duration: a } = e;
                  return t === T.iI.bond && a;
                }).map((e) => {
                  let { BaseTokenAmount: t, duration: a, vaultId: s } = e,
                    r = null == U ? void 0 : U.find((e) => e.vaultId === s);
                  if (!r) return { amount: 0, multiplier: 0 };
                  let n = Z[(a / 2592e3).toString()];
                  return {
                    amount: q(Number(t), F.ZP.getSymbolFromVaultType(r.type)),
                    multiplier: n,
                  };
                }),
                s = Object.entries(V).reduce((e, t) => {
                  var a, s, r;
                  let [n, { balanceOf: i, totalAssets: l, totalSupply: o }] = t,
                    c = null == U ? void 0 : U.find((e) => e.vaultId === n);
                  if (!c) return e;
                  let d =
                      null !== (a = null == l ? void 0 : l.result) &&
                      void 0 !== a
                        ? a
                        : 0,
                    u =
                      null !== (s = null == i ? void 0 : i.result) &&
                      void 0 !== s
                        ? s
                        : 0,
                    x =
                      null !== (r = null == o ? void 0 : o.result) &&
                      void 0 !== r
                        ? r
                        : 1;
                  if (!x) return e;
                  let m = q((d * u) / x, F.ZP.getSymbolFromVaultType(c.type));
                  return e + m;
                }, 0),
                r = [...a, { amount: s, multiplier: 1 }],
                n = r.reduce((e, a) => {
                  let { amount: s, multiplier: r } = a;
                  return e + s * r * t;
                }, 0),
                i = r.reduce((e, t) => {
                  let { amount: a } = t;
                  return e + a;
                }, 0),
                l = i > 0 ? n / i : t;
              return F.ZP.formatWithExponential(l);
            }, [V, k, H, U, q]),
            getStarsNeeded = () => {
              var e;
              if (!k) return { needed: 0, total: 0 };
              let { level: t } = k,
                a = t - 1;
              if (a < 0 || a === Y.length - 1) return { needed: 0, total: 0 };
              let s =
                  null === (e = Y[a + 1]) || void 0 === e ? void 0 : e.stars,
                r = s - k.stars,
                n = s - Y[a].stars;
              return { needed: r, total: n };
            },
            { data: X, isLoading: J } = (0, N.ux)(),
            [Q, ee] = (0, c.useState)(!1),
            copyInviteLink = () => {
              if (
                !(null == k ? void 0 : k.referralCode) &&
                !(null == k ? void 0 : k.customReferralLink)
              )
                return;
              let e = window.location.origin;
              navigator.clipboard
                .writeText(
                  ""
                    .concat(e, "/space-race-onboarding/")
                    .concat(
                      (null == k ? void 0 : k.customReferralLink) ||
                        (null == k ? void 0 : k.referralCode)
                    )
                )
                .then(() => {
                  (0, y.x)("Copied to clipboard", "success");
                })
                .catch(() => {
                  (0, y.x)("Error copying to clipboard", "error");
                });
            },
            [et, { isLoading: ea }] = (0, N.F4)(),
            [es, er] = c.useState(!1),
            handleSendTwitterPost = async () => {
              await et({ address: null != _ ? _ : "" })
                .unwrap()
                .then((e) => {
                  e
                    ? (0, y.x)("Tweet published", "success")
                    : (0, y.x)("Tweet Could not be published", "error");
                })
                .catch((e) => {
                  (0, y.x)("Tweet Could not be published", "error");
                });
            };
          return _ && k
            ? (0, s.jsxs)("main", {
                children: [
                  (0, s.jsx)(CustomReferralLinkDialog, {
                    open: Q,
                    onClose: () => {
                      ee(!1);
                    },
                    address: _,
                    oldValue:
                      null !==
                        (e = null == k ? void 0 : k.customReferralLink) &&
                      void 0 !== e
                        ? e
                        : null,
                  }),
                  (0, s.jsx)(leaderboard_dialog, {
                    data: null != X ? X : [],
                    loading: J,
                    open: P,
                    onClose: () => L(!1),
                  }),
                  (0, s.jsx)(points_calendar_dialog, {
                    address: _,
                    open: A,
                    onClose: () => R(!1),
                    referralCode: null == k ? void 0 : k.referralCode,
                    deletedTwitter:
                      null !== (t = null == k ? void 0 : k.tweetDeleted) &&
                      void 0 !== t &&
                      t,
                  }),
                  (0, s.jsx)(stars_history_dialog, {
                    address: _,
                    open: M,
                    onClose: () => I(!1),
                  }),
                  (0, s.jsx)(referral_history_dialog, {
                    address: _,
                    open: O,
                    onClose: () => z(!1),
                    referralCode: null == k ? void 0 : k.referralCode,
                  }),
                  k &&
                    (0, s.jsx)(D.Z, {
                      referralCode: null == k ? void 0 : k.referralCode,
                      open: es,
                      onSend: handleSendTwitterPost,
                      loading: ea,
                      onClose: () => {
                        er(!1);
                      },
                    }),
                  (0, s.jsx)(i.Z, {
                    reducedHeight: !0,
                    title: "Win the Space Race",
                    description:
                      "Earn points by inviting Noyans, depositing in our vaults, and bonding deposits to unlock stars. Level up and ascend to the rank of Intergalactic Adventurer!",
                    customButton:
                      S &&
                      (0, s.jsx)("p", {
                        className:
                          "animated-gradient-text font-EuclidCircularB text-[16px] font-bold mt-4",
                        children:
                          "Hang Tight! We are authenticating your wallet",
                      }),
                    button: {
                      text: "Yap about NOYA",
                      icon: "/kaito.png",
                      color: "color_2",
                      border: "solid",
                      onClick: () =>
                        window.open("https://yaps.kaito.ai/", "_blank"),
                    },
                    secondButton: {
                      text: "Share Invite Link",
                      icon: "/twitter.svg",
                      color: "color_2",
                      border: "solid",
                      link:
                        "https://twitter.com/intent/tweet?text=" +
                        (0, C.q)(
                          null !==
                            (r =
                              null !==
                                (a =
                                  null == k ? void 0 : k.customReferralLink) &&
                              void 0 !== a
                                ? a
                                : null == k
                                ? void 0
                                : k.referralCode) && void 0 !== r
                            ? r
                            : ""
                        ),
                    },
                    showHeader: !1,
                    className:
                      "!min-h-fit mb-[30px] lg:mb-[80px] mt-[10px] lg:mt-[20px]",
                  }),
                  S
                    ? (0, s.jsx)("div", {
                        className:
                          "w-full h-[50vh] flex items-center justify-center animate-fadeinFast",
                        children: (0, s.jsx)(m.Z, { className: "w-10 h-10" }),
                      })
                    : w
                    ? (0, s.jsxs)("div", {
                        className:
                          "w-full max-w-[calc(991px+64px)] px-8 mx-auto relative animate-fadeinFast",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "flex items-center w-full justify-between mt-24 min-[1100px]:mt-8 relative min-[1100px]:flex-row flex-col max-[1099px]:gap-28",
                            children: [
                              x.Mh.map((e, t) =>
                                (0, s.jsxs)(
                                  c.Fragment,
                                  {
                                    children: [
                                      (0, s.jsx)(space_race_LevelBox, {
                                        icon: e.icon,
                                        level: e.number,
                                        title: e.name,
                                        perk: e.perk,
                                        multiplier: e.multiplier,
                                        selected:
                                          e.number <=
                                          ((null == k ? void 0 : k.level) || 0),
                                        starsNeeded: e.stars,
                                      }),
                                      t !== x.Mh.length - 1
                                        ? (0, s.jsx)(o(), {
                                            fill: !0,
                                            alt: "dashed line",
                                            src: "/dashed-line.svg",
                                            className:
                                              "!relative h-px flex-1 object-cover hidden min-[1100px]:block",
                                          })
                                        : (0, s.jsx)(looped_divider, {}),
                                    ],
                                  },
                                  e.name
                                )
                              ),
                              (0, s.jsx)(looped_divider, {}),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "flex items-center w-full justify-between max-[1099px]:mt-28 min-[1100px]:mt-[110px] relative min-[1100px]:flex-row flex-col max-[1099px]:gap-28",
                            children: x.Kh.map((e, t) =>
                              (0, s.jsxs)(
                                c.Fragment,
                                {
                                  children: [
                                    (0, s.jsx)(space_race_LevelBox, {
                                      icon: e.icon,
                                      level: e.number,
                                      title: e.name,
                                      perk: e.perk,
                                      starsNeeded: e.stars,
                                      multiplier: e.multiplier,
                                      selected:
                                        e.number <=
                                        (null == k ? void 0 : k.level),
                                      action: e.action,
                                      actionExecuter: e.action
                                        ? (e) => {
                                            "custom-referral-link" === e &&
                                              ee(!0);
                                          }
                                        : () => {
                                            W.ZP.success("Coming Soon!");
                                          },
                                    }),
                                    t !== x.Mh.length - 1 &&
                                      (0, s.jsx)(o(), {
                                        fill: !0,
                                        alt: "dashed line",
                                        src: "/dashed-line.svg",
                                        className:
                                          "!relative h-px flex-1 mb-[10px] object-cover hidden min-[1100px]:block",
                                      }),
                                  ],
                                },
                                e.name
                              )
                            ),
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "w-full flex items-center justify-center mt-20 mb-8",
                            children: (0, s.jsxs)("div", {
                              className:
                                "flex items-center gap-2 px-3 py-2 rounded-lg border border-solid border-[#FFFFFF20] bg-[#0000001a] backdrop-blur-sm",
                              children: [
                                (0, s.jsx)(o(), {
                                  src: "/star-needed-solid.svg",
                                  alt: "Star",
                                  width: 14,
                                  height: 14,
                                  className: "animate-pulse",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "animated-gradient-text text-[14px] font-medium font-EuclidCircularB",
                                  children: "More levels coming soon!",
                                }),
                                (0, s.jsx)(o(), {
                                  src: "/star-needed-solid.svg",
                                  alt: "Star",
                                  width: 14,
                                  height: 14,
                                  className: "animate-pulse",
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)(g.u, {
                            id: "my-tooltip",
                            clickable: !0,
                            noArrow: !0,
                            className: "chart_box_header_tooltip z-10",
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "w-full mt-2 z-50 flex items-center gap-2 mb-4",
                            children: (0, s.jsx)("p", {
                              className:
                                "text-center text-white font-semibold text-[18px] sm:text-[20px] md:text-[24px] font-EuclidCircularB",
                              children: "Your Stats",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "w-full flex items-start justify-between gap-4 flex-wrap",
                            children: [
                              (0, s.jsxs)(space_race_StatBox, {
                                title: "My Rewards",
                                className: "flex-1 basis-[200px] self-stretch",
                                children: [
                                  (0, s.jsx)(gradient_info, {
                                    tooltip:
                                      "Earn stars every week! The number of stars you receive is determined by the total points accumulated throughout the week.",
                                    title: "Stars",
                                    className: "pb-4",
                                    text: F.ZP.formatNumberWithAbbreviation(
                                      null !==
                                        (n = null == k ? void 0 : k.stars) &&
                                        void 0 !== n
                                        ? n
                                        : 0
                                    ),
                                    icon: "/star-needed.svg",
                                    iconTop: "/popup.svg",
                                    onClickIconTop: () => I(!0),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "gradient-border",
                                  }),
                                  (0, s.jsx)(gradient_info, {
                                    tooltip:
                                      "Earn points by completing tasks and leveling up. The more points you earn, the higher your rewards!",
                                    title: "Weekly Points",
                                    className: "pt-4",
                                    text: formatNumber(
                                      F.ZP.roundToTwo(
                                        null !==
                                          (l = null == k ? void 0 : k.points) &&
                                          void 0 !== l
                                          ? l
                                          : 0
                                      )
                                    ),
                                    iconTop: "/popup.svg",
                                    onClickIconTop: () => R(!0),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)(space_race_StatBox, {
                                title: "My Network",
                                className: "flex-1 basis-[200px] self-stretch",
                                children: [
                                  (0, s.jsx)(gradient_info, {
                                    tooltip:
                                      "Invite your friends and earn points together! The more friends you invite, the more points you earn.",
                                    title: "Referrals",
                                    className: "pb-4",
                                    text: (null == k ? void 0 : k.referrals)
                                      ? formatNumber(
                                          null == k
                                            ? void 0
                                            : k.referrals.length
                                        )
                                      : "0",
                                    iconTop: "/popup.svg",
                                    onClickIconTop: () => z(!0),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "gradient-border",
                                  }),
                                  (0, s.jsx)(gradient_info, {
                                    iconTop: "/popup.svg",
                                    onClickIconTop: () => {
                                      window.open(
                                        "https://yaps.kaito.ai/",
                                        "_blank"
                                      );
                                    },
                                    tooltip: (
                                      null == k ? void 0 : k.backupMindshare
                                    )
                                      ? "Your 7 day mindshare on Kaito."
                                      : "Your rank in the Kaito Yapper Leaderboard.",
                                    title: (
                                      null == k ? void 0 : k.backupMindshare
                                    )
                                      ? "Mindshare"
                                      : "Yap Rank",
                                    className: "pt-4",
                                    text: (
                                      null == k ? void 0 : k.backupMindshare
                                    )
                                      ? F.ZP.formatNumberWithAbbreviation(
                                          (null !==
                                            (d =
                                              null == k
                                                ? void 0
                                                : k.backupMindshare) &&
                                          void 0 !== d
                                            ? d
                                            : 0) * 100
                                        ) + "%"
                                      : formatNumber(
                                          null !==
                                            (p =
                                              null == k ? void 0 : k.yapRank) &&
                                            void 0 !== p
                                            ? p
                                            : 0
                                        ),
                                  }),
                                ],
                              }),
                              (0, s.jsxs)(space_race_StatBox, {
                                tooltip:
                                  "More stars mean higher levels. Each new level increases your points multiplier. The higher you go, the greater your rewards!",
                                title: "Your Level",
                                className:
                                  "flex-1 basis-[500px] min-[1050px]:ml-8 self-stretch",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: "pt-5 pb-3 px-6 w-full",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className:
                                          "w-full flex flex-col sm:flex-row items-start sm:items-center justify-start gap-1",
                                        children: [
                                          (0, s.jsxs)("p", {
                                            className:
                                              "text-[16px] text-start flex-1 font-semibold font-EuclidCircularB text-white",
                                            children: [
                                              "Level: ",
                                              null == k ? void 0 : k.level,
                                            ],
                                          }),
                                          (0, s.jsxs)("div", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              (0, s.jsxs)("p", {
                                                className:
                                                  "text-[12px] text-start font-light font-EuclidCircularB text-[#FFFFFF80]",
                                                children: [
                                                  "Stars Needed to Level up:",
                                                  " ",
                                                  (0, s.jsxs)("span", {
                                                    className:
                                                      "text-[14px] text-start font-semibold font-EuclidCircularB text-[#FFFFFF80]",
                                                    children: [
                                                      F.ZP.formatNumberWithAbbreviation(
                                                        getStarsNeeded().total -
                                                          getStarsNeeded()
                                                            .needed
                                                      ),
                                                      " ",
                                                      "/",
                                                      " ",
                                                      F.ZP.formatNumberWithAbbreviation(
                                                        getStarsNeeded().total
                                                      ),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, s.jsx)(o(), {
                                                draggable: !1,
                                                alt: "Stars Needed",
                                                src: "/star-needed-solid.svg",
                                                width: 15,
                                                height: 17,
                                                className:
                                                  "object-contain select-none pointer-events-none",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "w-full bg-[#454545] h-[9px] rounded-l-[5px] rounded-r-[5px] mt-2 flex items-center justify-start overflow-hidden",
                                        children: (0, s.jsx)("div", {
                                          className:
                                            "h-full bg-gradient-to-r from-[#7D6FF6] to-[#58E1D9]",
                                          style: {
                                            width: "".concat(
                                              ((getStarsNeeded().total -
                                                getStarsNeeded().needed) /
                                                getStarsNeeded().total) *
                                                100,
                                              "%"
                                            ),
                                          },
                                        }),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "w-full mt-4 flex items-start sm:items-center justify-between flex-col sm:flex-row gap-1",
                                        children: [
                                          (0, s.jsxs)("div", {
                                            className: "flex-1",
                                            children: [
                                              (0, s.jsx)("p", {
                                                className:
                                                  "text-[12px] text-start font-thin font-EuclidCircularB text-[#FFFFFF80]",
                                                children: "Level Multiplier:",
                                              }),
                                              (0, s.jsxs)("p", {
                                                className:
                                                  "text-[16px] text-start font-semibold font-EuclidCircularB text-white",
                                                children: [
                                                  "Base Points Multiplier :",
                                                  " ",
                                                  k
                                                    ? Y[k.level - 1].multiplier
                                                    : 0,
                                                  "x",
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, s.jsxs)("div", {
                                            children: [
                                              (0, s.jsx)("p", {
                                                className:
                                                  "text-[12px] text-start font-thin font-EuclidCircularB text-[#FFFFFF80]",
                                                children: "Next Reward:",
                                              }),
                                              (0, s.jsxs)("p", {
                                                className:
                                                  "text-[16px] text-start font-semibold font-EuclidCircularB text-white",
                                                children: [
                                                  "Points Multiplier :",
                                                  " ",
                                                  k
                                                    ? 10 === k.level
                                                      ? "Maxed out"
                                                      : Y[k.level - 1]
                                                          .multiplier + "x"
                                                    : 0,
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "w-full mt-4 flex items-start sm:items-center justify-between flex-col sm:flex-row gap-1",
                                        children: (0, s.jsxs)("div", {
                                          className: "flex-1",
                                          children: [
                                            (0, s.jsx)("p", {
                                              className:
                                                "text-[12px] text-start font-thin font-EuclidCircularB text-[#FFFFFF80]",
                                              children: "Average Multiplier:",
                                            }),
                                            (0, s.jsxs)("p", {
                                              className:
                                                "text-[16px] text-start font-semibold font-EuclidCircularB text-white",
                                              children: [
                                                "Average Points Multiplier : ",
                                                $,
                                                "x",
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "gradient-border",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "w-full flex items-center gap-3 px-6 mt-4 flex-col sm:flex-row mb-4",
                                    children: [
                                      (0, s.jsx)(stat_button, {
                                        animatedGlow: !0,
                                        label: "Copy Invite Link",
                                        labelClassName:
                                          "animated-gradient-text",
                                        className: "w-full sm:w-fit",
                                        iconElement: (0, s.jsx)(
                                          components_GradientLink,
                                          {}
                                        ),
                                        onClick: () => copyInviteLink(),
                                      }),
                                      (0, s.jsx)(stat_button, {
                                        label: "View Leaderboards",
                                        className: "w-full sm:w-fit",
                                        icon: "/bar-chart.svg",
                                        onClick: () => L(!0),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "text-start text-white mt-8 font-semibold text-[18px] sm:text-[20px] md:text-[24px] font-EuclidCircularB",
                            children: "Complete Tasks",
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex items-start justify-center flex-wrap gap-8 mb-16 mt-4 w-full",
                            children: [
                              (0, s.jsx)(space_race_TaskBox, {
                                tooltip:
                                  "Boost your points effortlessly by inviting a Noyan! Receive an extra 10% bonus from their earned points, and as a welcome gift, they'll also get an extra 10% points. Start sharing and earning more together!",
                                description:
                                  "This task will be completed if the user you invited deposits any amount in one of our vaults. The higher the deposit, the more points both of you gain.",
                                points: F.ZP.roundToTwo(
                                  null !==
                                    (f =
                                      null == k ? void 0 : k.pointsReferral) &&
                                    void 0 !== f
                                    ? f
                                    : 0
                                ),
                                title: "Invite a Noyan",
                                button: {
                                  text: "Copy Invite Link",
                                  icon: "/link.svg",
                                  onClick: () => {
                                    copyInviteLink();
                                  },
                                },
                              }),
                              (0, s.jsx)(space_race_TaskBox, {
                                tooltip:
                                  "Elevate your earnings with NOYA deposits. Tap into exceptional omnichain yields and earn bonus points on the side. Your investment grows, and your points tally rises!",
                                description:
                                  "This task will be completed if you deposit any amount in any of our vaults. The higher your deposit amount, the more points you will gain.",
                                points: F.ZP.roundToTwo(
                                  null !==
                                    (h =
                                      null == k ? void 0 : k.pointsDeposit) &&
                                    void 0 !== h
                                    ? h
                                    : 0
                                ),
                                title: "Deposit in any vault",
                                button: {
                                  text: "Go To Vaults",
                                  icon: "/vault.svg",
                                  link: "/",
                                  target: "_blank",
                                },
                              }),
                              (0, s.jsx)(space_race_TaskBox, {
                                description:
                                  "This task will be completed if you bond your deposits. The higher the bond and the longer the bond duration, the more points you will earn.",
                                points: F.ZP.roundToTwo(
                                  null !==
                                    (b =
                                      null == k ? void 0 : k.pointsBonding) &&
                                    void 0 !== b
                                    ? b
                                    : 0
                                ),
                                title: (0, s.jsxs)("span", {
                                  className:
                                    "font-EuclidCircularB text-[20px] font-medium text-white",
                                  children: [
                                    "Bond your ",
                                    (0, s.jsx)("br", {}),
                                    "Deposit",
                                  ],
                                }),
                                tooltip:
                                  "Bonding your deposits is a great way to earn extra points. The longer you bond, the more points you earn.",
                                button: {
                                  text: "Go To Vaults",
                                  icon: "/vault.svg",
                                  link: "/",
                                  target: "_blank",
                                },
                              }),
                              k &&
                                (0, s.jsx)(space_race_TaskBox, {
                                  tooltip:
                                    "Yap on Kaito to earn points. The more you yap, the more points you earn in addition to your weekly points.",
                                  description:
                                    "Yap on Kaito to earn points. The more you yap, the more points you earn in addition to your weekly points.",
                                  points: F.ZP.roundToTwo(
                                    null !==
                                      (v =
                                        null == k
                                          ? void 0
                                          : k.mindsharePoints) && void 0 !== v
                                      ? v
                                      : 0
                                  ),
                                  title: "Start Yapping on Kaito",
                                  button: {
                                    text: "Start Yapping",
                                    icon: "/kaito.png",
                                    link: "https://yaps.kaito.ai/",
                                    target: "_blank",
                                  },
                                }),
                              k &&
                                (0, s.jsx)(space_race_TaskBox, {
                                  done: !!k.twitter,
                                  description:
                                    "This task will be completed if you connect your Twitter account to your Noya wallet. You will receive immediate points.",
                                  points: 500,
                                  tooltip:
                                    "Connect your X account to your Noya account to earn points. You will receive immediate points.",
                                  title: "Connect X Account",
                                  type: "one-time",
                                  button: {
                                    text: k.twitter
                                      ? "Connected"
                                      : "Follow Us On X",
                                    iconClassName: "!w-[15px] !h-[15px]",
                                    icon: "/twitter.svg",
                                    link: ""
                                      .concat(
                                        "https://api.noya.ai/noya_space",
                                        "/auth/twitter?redirect=space-race&address="
                                      )
                                      .concat(_),
                                    target: "_blank",
                                  },
                                }),
                              k &&
                                !k.discord &&
                                (0, s.jsx)(space_race_TaskBox, {
                                  description:
                                    "This task will be completed if you join our Discord server. You will receive immediate points.",
                                  points: 500,
                                  done: !!k.discord,
                                  title: "Join our Discord",
                                  type: "one-time",
                                  tooltip:
                                    "Join our Discord server to earn points. You will receive immediate points.",
                                  button: {
                                    text: k.discord
                                      ? "Discord Connected"
                                      : "Join our Discord",
                                    icon: "/discord.svg",
                                    link: ""
                                      .concat(
                                        "https://api.noya.ai/noya_space",
                                        "/auth/discord?redirect=space-race&address="
                                      )
                                      .concat(_),
                                    target: "_blank",
                                  },
                                }),
                              k &&
                                k.discord &&
                                (0, s.jsx)(space_race_TaskBox, {
                                  description:
                                    "This task will be completed if you verify your Discord account. You will receive immediate points.",
                                  points: 500,
                                  done: !!k.discordVerified,
                                  title: "Verify your Discord",
                                  type: "one-time",
                                  button: {
                                    text: k.discordVerified
                                      ? "Discord Verified"
                                      : "Verify your Discord",
                                    icon: "/telegram.png",
                                    target: "_blank",
                                    link: "https://discord.com/channels/1100874221959249932/1101085939327045712",
                                  },
                                }),
                              (0, s.jsx)(check_in_task, { userData: k }),
                            ],
                          }),
                          (-1 === k.spins || k.spins > 0) &&
                            (0, s.jsx)(SimplifiedSpins, {
                              spins: k.spins,
                              address: _,
                            }),
                        ],
                      })
                    : (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                          className:
                            "min-h-[80vh] w-full flex items-center justify-center flex-col gap-4 relative animate-fadeinFast",
                          children: (0, s.jsx)("p", {
                            className:
                              "text-center animated-gradient-text text-[20px] font-RussoOne z-10",
                            children: "Checking your account...",
                          }),
                        }),
                      }),
                ],
              })
            : (0, s.jsx)(s.Fragment, {});
        },
        A = a(71002),
        R = a(93416);
      let M = c.memo(() => {
        let [e, t] = c.useState(!1);
        (0, c.useEffect)(() => {
          (0, R.bP)(async (e) => {
            await (0, A.R)(e);
          }).then(() => {
            t(!0);
          });
        }, []);
        let a = (0, c.useMemo)(
          () => ({
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: !1 },
                onHover: { enable: !0, mode: "bubble" },
              },
              modes: { bubble: { distance: 200, duration: 1.5, opacity: 1 } },
            },
            particles: {
              color: { value: "#ffffff" },
              links: { enable: !1 },
              collisions: { enable: !0 },
              move: {
                enable: !0,
                outModes: { default: "destroy" },
                random: !0,
                speed: 0.35,
                straight: !1,
              },
              number: { density: { enable: !0 }, value: 100 },
              opacity: {
                value: 0.5,
                animation: {
                  enable: !0,
                  speed: 3,
                  startValue: "random",
                  mode: "random",
                },
              },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: !0,
            fullScreen: { enable: !1, zIndex: 1 },
          }),
          []
        );
        return (0, s.jsx)("div", {
          className: "h-full w-full absolute top-0 left-0 right-0 bottom-0",
          children:
            e &&
            (0, s.jsx)(R.ZP, {
              id: "tsparticles",
              className: "w-full h-full",
              options: a,
            }),
        });
      });
      M.displayName = "StarryNight";
      var space_race_SpaceRaceLayout = function (e) {
          let { children: t } = e;
          return (0, s.jsxs)("div", {
            className:
              "w-full max-w-screen overflow-x-clip min-h-[1700px] relative bg-black pb-8",
            children: [
              (0, s.jsx)(M, {}, "starry-night"),
              (0, s.jsx)("div", {
                className:
                  "h-[1700px] w-full absolute top-0 left-0 bg-[url('/space-bg.png')] bg-cover bg-center",
              }),
              t,
            ],
          });
        },
        pages_space_race = function () {
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)(space_race_SpaceRaceLayout, {
              children: [
                (0, s.jsx)("div", {
                  className: "n-container",
                  children: (0, s.jsx)(n.Z, {}),
                }),
                (0, s.jsx)("div", {
                  className: "w-full min-h-[calc(100vh-100px)]",
                  children: (0, s.jsx)(space_race, {}),
                }),
                (0, s.jsx)(r.Z, {}),
              ],
            }),
          });
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
  },
  function (e) {
    e.O(0, [1942, 7508, 5881, 1233, 9774, 2888, 179], function () {
      return e((e.s = 61255));
    }),
      (_N_E = e.O());
  },
]);
