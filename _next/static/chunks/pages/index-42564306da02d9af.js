(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    93564: function (e, t, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return l(4872);
        },
      ]);
    },
    63068: function (e, t, l) {
      "use strict";
      var a = l(11527),
        s = l(28254),
        n = l(43829),
        i = l(50959),
        r = l(38603),
        o = l(85703),
        d = l(59581),
        c = l.n(d);
      t.Z = function (e) {
        let {
            pairs: t,
            className: l,
            concat: d,
            pClassName: u,
            type: x = "p",
            children: m,
            loading: p,
          } = e,
          { data: h, isLoading: f } = (0, n.Zf)(void 0, {
            pollingInterval: 3e5,
          }),
          v = (0, s.C)((e) => e.ModalsReducer.currency),
          b = (0, i.useMemo)(() => {
            var e, l, a, s;
            let n = t.reduce((e, t) => {
                var l, a, s;
                let { valueInBase: n, baseSymbol: i } = t,
                  r = n;
                switch (i) {
                  case "ETH":
                    r =
                      n *
                      (null !== (l = null == h ? void 0 : h.ethPrice) &&
                      void 0 !== l
                        ? l
                        : 0);
                    break;
                  case "USDC":
                    r =
                      n *
                      (null !== (a = null == h ? void 0 : h.usdcPrice) &&
                      void 0 !== a
                        ? a
                        : 0);
                    break;
                  case "BTC":
                    r =
                      n *
                      (null !== (s = null == h ? void 0 : h.btcPrice) &&
                      void 0 !== s
                        ? s
                        : 0);
                    break;
                  case "USD":
                    r = n;
                }
                return e + r;
              }, 0),
              i = "";
            switch (v) {
              case "USD":
                i = o.ZP.formatWithExponential(
                  n /
                    (null !== (e = null == h ? void 0 : h.usdcPrice) &&
                    void 0 !== e
                      ? e
                      : 1)
                );
                break;
              case "USDC":
                i = o.ZP.formatWithExponential(
                  n /
                    (null !== (l = null == h ? void 0 : h.usdcPrice) &&
                    void 0 !== l
                      ? l
                      : 1)
                );
                break;
              case "ETH":
                i = o.ZP.formatWithExponential(
                  n /
                    (null !== (a = null == h ? void 0 : h.ethPrice) &&
                    void 0 !== a
                      ? a
                      : 1)
                );
                break;
              case "BTC":
                i = o.ZP.formatWithExponential(
                  n /
                    (null !== (s = null == h ? void 0 : h.btcPrice) &&
                    void 0 !== s
                      ? s
                      : 1)
                );
                break;
              default:
                i = o.ZP.formatWithExponential(100 * n);
            }
            return i;
          }, [v, t, h]),
          g = (0, i.useMemo)(() => {
            switch (v) {
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
          }, [v]);
        return (0, a.jsx)("section", {
          className: (0, o.cn)(
            "w-full flex items-center justify-center gap-1",
            l
          ),
          children:
            f || p
              ? (0, a.jsx)(r.Z, {
                  className: "w-5 h-5 mx-auto animate-fadeinReallyFast",
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsxs)(x, {
                      className: (0, o.cn)("animate-fadeinReallyFast", u),
                      children: [d, " ", "$" === g ? "$" : "", b],
                    }),
                    "$" !== g &&
                      (0, a.jsx)(c(), {
                        className: "animate-fadeinReallyFast",
                        src: g,
                        alt: v,
                        width: 20,
                        height: 20,
                      }),
                    m,
                  ],
                }),
        });
      };
    },
    34466: function (e, t, l) {
      "use strict";
      var a = l(11527),
        s = l(28254),
        n = l(50959);
      t.Z = (e) => {
        let {
            src: t,
            style: l = {},
            loop: i,
            mute: r,
            playWithIntersection: o,
            className: d,
          } = e,
          c = (0, n.useRef)(null),
          u = (0, s.C)((e) => e.PortfolioReducer.OperationSystem);
        return (
          (0, n.useEffect)(() => {
            void 0 !== o
              ? !0 === o && c.current && c.current.play()
              : c.current && c.current.play();
          }, [o]),
          (0, a.jsx)("video", {
            playsInline: !0,
            className: d,
            muted: void 0 === r,
            ref: c,
            style: { width: "100%", height: "100%", ...l },
            loop: void 0 === i || !0 === i,
            children: (0, a.jsx)("source", {
              src: t,
              type: "Android" === u ? "video/webm" : "video/mp4",
            }),
          })
        );
      };
    },
    4872: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return LaunchApp;
          },
        });
      var a = l(11527),
        s = l(35529),
        n = l(15881),
        i = l(38402),
        r = l.n(i),
        o = l(50959),
        d = l(55765),
        c = l(6743),
        u = l(43829),
        x = l(59581),
        m = l.n(x),
        p = l(84874),
        h = l.n(p),
        f = {
          src: "/_next/static/media/profit-arrow.24735dc8.svg",
          height: 26,
          width: 26,
          blurWidth: 0,
          blurHeight: 0,
        },
        v = l(59440),
        b = l(34466),
        g = l(28254),
        w = l(38603),
        _ = l(75993),
        j = l(17296),
        y = l(63068),
        N = l(56774),
        k = l(93622),
        C = l(85703),
        B = l(64460),
        components_DataTable = function (e) {
          let { children: t, className: l } = e;
          return (0, a.jsx)("div", {
            className: (0, B.cn)(
              "shadow-wrapper rounded-sm p-px relative z-[2]",
              l
            ),
            children: (0, a.jsx)("div", {
              className: "w-full h-full bg-[#19171f] rounded-sm",
              children: t,
            }),
          });
        },
        data_table_header = function (e) {
          let { children: t, className: l } = e;
          return (0, a.jsx)("div", {
            className: (0, B.cn)(
              "bg-black rounded-t-sm flex items-center",
              "border border-solid border-t-0 border-l-0 border-b border-r-0 border-b-[#7d6ff540]",
              l
            ),
            children: t,
          });
        },
        data_table_header_item = function (e) {
          let { children: t, className: l, isLast: s } = e;
          return (0, a.jsx)("div", {
            className: (0, C.cn)(
              "py-[10px] px-2 flex-1 flex-shrink-0 overflow-hidden text-ellipsis min-w-0 flex gap-1 items-center justify-center",
              "font-montserrat clampMixedLarge text-[#ceced8] font-medium whitespace-nowrap text-center",
              {
                "border border-solid border-t-0 border-l-0 border-b-0 border-r border-r-[#7d6ff540]":
                  !s,
              },
              l
            ),
            children: t,
          });
        },
        data_table_body = function (e) {
          let { children: t, className: l } = e;
          return (0, a.jsx)("div", {
            className: (0, B.cn)("w-full flex items-center", l),
            children: t,
          });
        },
        data_table_body_item = function (e) {
          let {
            children: t,
            isLast: l,
            className: s,
            color: n = "gradient",
          } = e;
          return (0, a.jsx)("div", {
            className: (0, B.cn)(
              "flex-1 flex gap-2 items-center justify-center py-[10px] px-2",
              "font-RussoOne font-normal whitespace-nowrap clampHuge text-center",
              {
                "border border-solid border-t-0 border-l-0 border-b-0 border-r border-r-[#7d6ff540]":
                  !l,
                "gradient-text-green": "green" === n,
                "gradient-text": "gradient" === n,
              },
              s
            ),
            children: t,
          });
        },
        P = l(47922);
      function Balances(e) {
        let {
            loading: t = !1,
            tvl: l = [],
            numberOfOmnivaults: s = 0,
            chainsCovered: n = 0,
            protocolsCovered: i = 0,
            portfolioBalance: r,
            dailyProfit: d,
            totalProfit: x,
            isLoadingAPYs: p = !1,
            isLoadingProfits: B = !1,
          } = e,
          { width: T } = (0, v.Z)(),
          S = (0, g.C)((e) => e.PortfolioReducer.OperationSystem),
          { data: F, isLoading: A } = (0, u.p$)(),
          { address: D } = (0, c.Z)(),
          { data: O } = (0, u.C2)({ address: D }),
          { data: R } = (0, u.em)({ address: D }),
          { convertToUSD: Z } = (0, k.B)(),
          I = (0, o.useMemo)(() => {
            if (!O) return 0;
            let e = 0;
            for (let l of O)
              if (l.txnType === j.iI.deposit && l.state !== j.og.done) {
                var t;
                let a =
                  null == R ? void 0 : R.find((e) => e.vaultId === l.vaultId);
                if (!a) continue;
                let s =
                    parseFloat(
                      null !== (t = l.BaseTokenAmount) && void 0 !== t ? t : "0"
                    ) /
                    10 ** a.baseToken.decimals,
                  n = Z(s, C.ZP.getSymbolFromVaultType(a.type));
                e += n;
              }
            return e;
          }, [O, R, Z]),
          M = (0, o.useMemo)(() => {
            if (!O) return 0;
            let e = 0;
            for (let l of O)
              if (l.txnType === j.iI.withdraw && l.state !== j.og.done) {
                var t;
                let a =
                  null == R ? void 0 : R.find((e) => e.vaultId === l.vaultId);
                if (!a) continue;
                let s =
                    parseFloat(
                      null !== (t = l.BaseTokenAmount) && void 0 !== t ? t : "0"
                    ) /
                    10 ** a.baseToken.decimals,
                  n = Z(s, C.ZP.getSymbolFromVaultType(a.type));
                e += n;
              }
            return e;
          }, [O, R, Z]);
        return (0, a.jsxs)("section", {
          className: h().Balances_container,
          children: [
            (0, a.jsx)("div", { className: h().Balances_glow }),
            (0, a.jsx)("div", {
              className: "".concat(
                h().Balances_left_box_title,
                " !justify-center 640px:!justify-start"
              ),
              children: "Balances",
            }),
            (0, a.jsx)("div", {
              style: { display: "flex", width: "100%", alignItems: "center" },
              children: (0, a.jsxs)(N.pn, {
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "w-full max-w-[350px] mx-auto 640px:max-w-none md:w-[60%] flex items-start justify-start gap-3 flex-col sm:flex-row",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "w-full sm:w-[50%] flex flex-col gap-3",
                        children: [
                          (0, a.jsxs)(components_DataTable, {
                            className: "w-[100%]",
                            children: [
                              (0, a.jsx)(data_table_header, {
                                children: (0, a.jsx)(data_table_header_item, {
                                  children: "Portfolio Balance",
                                }),
                              }),
                              (0, a.jsx)(data_table_body, {
                                children: (0, a.jsxs)(data_table_body_item, {
                                  className: "!flex-col !gap-0",
                                  color: "none",
                                  children: [
                                    (0, a.jsx)(_.Z, {
                                      valueInBase: r,
                                      baseSymbol: "USD",
                                      className: "justify-start w-fit",
                                      pClassName: "font-RussoOne gradient-text",
                                      type: "p",
                                    }),
                                    (0, a.jsx)(P.Z, {
                                      deposit: I,
                                      withdrawal: M,
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)(components_DataTable, {
                            className: "w-[100%]",
                            children: [
                              (0, a.jsxs)(data_table_header, {
                                children: [
                                  (0, a.jsxs)(data_table_header_item, {
                                    children: [
                                      (0, a.jsx)(m(), {
                                        src: f,
                                        alt: "profit-arrow-1",
                                        width: 14,
                                        height: 14,
                                        style: {
                                          transform: d
                                            ? d > 0
                                              ? "rotate(0deg)"
                                              : "rotate(180deg)"
                                            : "rotate(0deg)",
                                        },
                                      }),
                                      "Weekly Profits",
                                    ],
                                  }),
                                  (0, a.jsxs)(data_table_header_item, {
                                    isLast: !0,
                                    children: [
                                      (0, a.jsx)(m(), {
                                        src: f,
                                        alt: "profit-arrow-2",
                                        width: 14,
                                        height: 14,
                                        style: {
                                          transform: x
                                            ? x > 0
                                              ? "rotate(0deg)"
                                              : "rotate(180deg)"
                                            : "rotate(0deg)",
                                        },
                                      }),
                                      "Total Profits",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)(data_table_body, {
                                children: [
                                  (0, a.jsx)(data_table_body_item, {
                                    color: "green",
                                    children: B
                                      ? (0, a.jsx)("div", {
                                          className: "pl-3 mx-auto",
                                          children: (0, a.jsx)(w.Z, {
                                            className: "w-6 h-6 mx-auto",
                                          }),
                                        })
                                      : (0, a.jsx)(_.Z, {
                                          valueInBase: null != d ? d : 0,
                                          baseSymbol: "USD",
                                          type: "p",
                                          pClassName: "font-RussoOne",
                                          concat: d && d < 0.1 ? "~" : "",
                                        }),
                                  }),
                                  (0, a.jsx)(data_table_body_item, {
                                    color: "green",
                                    isLast: !0,
                                    children: B
                                      ? (0, a.jsx)(w.Z, {
                                          className: "w-6 h-6",
                                        })
                                      : (0, a.jsx)(_.Z, {
                                          valueInBase: null != x ? x : 0,
                                          baseSymbol: "USD",
                                          type: "p",
                                          pClassName: "font-RussoOne",
                                          concat: x && x < 0.1 ? "~" : "",
                                        }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "w-full sm:w-[50%] flex flex-col gap-3",
                        children: [
                          (0, a.jsxs)(components_DataTable, {
                            className: "w-[100%]",
                            children: [
                              (0, a.jsxs)(data_table_header, {
                                children: [
                                  (0, a.jsx)(data_table_header_item, {
                                    children: "TVL",
                                  }),
                                  (0, a.jsx)(data_table_header_item, {
                                    isLast: !0,
                                    children: "# of Omnivaults",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)(data_table_body, {
                                children: [
                                  (0, a.jsx)(data_table_body_item, {
                                    children: t
                                      ? (0, a.jsx)(w.Z, {
                                          className: "w-6 h-6 m-auto",
                                        })
                                      : (0, a.jsx)(y.Z, {
                                          pairs: l,
                                          pClassName: "font-RussoOne",
                                        }),
                                  }),
                                  (0, a.jsx)(data_table_body_item, {
                                    isLast: !0,
                                    children: t
                                      ? (0, a.jsx)(w.Z, {
                                          className: "w-6 h-6 m-auto",
                                        })
                                      : s,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)(components_DataTable, {
                            className: "w-[100%]",
                            children: [
                              (0, a.jsxs)(data_table_header, {
                                children: [
                                  (0, a.jsx)(data_table_header_item, {
                                    children: "Chains",
                                  }),
                                  (0, a.jsx)(data_table_header_item, {
                                    children: "Protocols",
                                  }),
                                  (0, a.jsx)(data_table_header_item, {
                                    isLast: !0,
                                    children: "Pools",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)(data_table_body, {
                                children: [
                                  (0, a.jsx)(data_table_body_item, {
                                    children: t
                                      ? (0, a.jsx)(w.Z, {
                                          className: "w-6 h-6 m-auto",
                                        })
                                      : n,
                                  }),
                                  (0, a.jsx)(data_table_body_item, {
                                    children: t
                                      ? (0, a.jsx)(w.Z, {
                                          className: "w-6 h-6 m-auto",
                                        })
                                      : i,
                                  }),
                                  (0, a.jsx)(data_table_body_item, {
                                    isLast: !0,
                                    children: A
                                      ? (0, a.jsx)(w.Z, {
                                          className: "w-6 h-6",
                                        })
                                      : null != F
                                      ? F
                                      : 29,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "hidden md:block w-[40%] h-[180px]",
                    children: (0, a.jsx)(b.Z, {
                      src:
                        "iOS" === S || "unknown" === S
                          ? "portfolio.mp4"
                          : "portfolio.webm",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var T = l(27577),
        S = l.n(T);
      function OmniDescription() {
        let { width: e } = (0, v.Z)();
        return (0, a.jsx)("section", {
          className: S().OmniDesc_container,
          children: (0, a.jsxs)("div", {
            className: S().OmniDesc_desc_box,
            children: [
              (0, a.jsx)("p", {
                children:
                  "This website does not intend to offer securities for sale or request the purchase of securities in any jurisdiction where such actions are prohibited by law. The information provided should not be construed as investment advice, as NOYA Network does not provide investment advisory services and lacks the required regulatory authorizations to do so. This website is provided for convenience purposes only and may be subject to changes without prior notice to users. Users are strongly encouraged to acquaint themselves with smart contracts and the associated risks before using Noya.",
              }),
              (0, a.jsx)("p", {
                children:
                  "Please be aware that actual results and developments may significantly differ from any forecasts, opinions, or expectations expressed on this website. Past performance of any portfolio should not be regarded as a reliable indicator of its future performance. In accordance with applicable law, the DAO and its directors, officers, employees, and agents disclaim all liability for any loss or damage arising from the use of or reliance on the material contained on this website, whether or not caused by a negligent act or omission.",
              }),
              (0, a.jsx)("p", {
                children:
                  "It's important to note that the release, publication, or distribution of this website and any materials herein may be subject to restrictions in certain jurisdictions. Therefore, users are responsible for being aware of and complying with any such restrictions. As a user of the NOYA Network website, it is your responsibility to exercise due diligence and take necessary precautions when engaging with digital assets and smart contracts to safeguard your investments and ensure a secure experience.",
              }),
            ],
          }),
        });
      }
      var F = l(74836),
        A = l(1908);
      function DataTableColumnHeader(e) {
        let {
          column: t,
          title: l,
          className: s,
          hasSorting: n = !0,
          info: i,
        } = e;
        return (0, a.jsxs)("button", {
          className:
            "flex cursor-pointer items-center space-x-2 bg-transparent border-none outline-none text-white ".concat(
              s
            ),
          onClick: () => t.toggleSorting(),
          children: [
            (0, a.jsx)("p", {
              className: "text-[1.3vw] xl:text-[16px] font-EuclidCircularB",
              children: l,
            }),
            n &&
              (0, a.jsxs)("div", {
                className: "flex flex-col items-center justify-center",
                children: [
                  (0, a.jsx)(m(), {
                    src: "/sort.svg",
                    width: 10,
                    height: 10,
                    alt: "arrow",
                    className:
                      "!relative !w-[0.8vw] !h-[0.8vw] xl:!w-[10px] xl:!h-[10px]",
                    style: {
                      transform: "rotate(180deg)",
                      opacity:
                        !1 === t.getIsSorted() || "asc" === t.getIsSorted()
                          ? 1
                          : 0.5,
                      transition: "opacity 0.2s",
                    },
                  }),
                  (0, a.jsx)(m(), {
                    src: "/sort.svg",
                    width: 10,
                    height: 10,
                    alt: "arrow",
                    className:
                      "!relative !w-[0.8vw] !h-[0.8vw] xl:!w-[10px] xl:!h-[10px]",
                    style: {
                      opacity:
                        !1 === t.getIsSorted() || "desc" === t.getIsSorted()
                          ? 1
                          : 0.5,
                      transition: "opacity 0.2s",
                    },
                  }),
                ],
              }),
            i &&
              (0, a.jsx)("a", {
                "data-tooltip-id": "my-tooltip",
                className: "hidden md:block",
                "data-tooltip-content": i,
                children: (0, a.jsx)(m(), {
                  src: "/info-outline.svg",
                  width: 24,
                  height: 24,
                  alt: "info",
                  className:
                    "cursor-pointer relative !w-[1.6vw] !h-[1.6vw] xl:!w-[14px] xl:!h-[14px] mt-1",
                }),
              }),
          ],
        });
      }
      var D = l(26604);
      let O = [
          "$0 - $1k",
          "$1k - $5k",
          "$5k - $10k",
          "$10k - $50k",
          "$50k - $100k",
          "$100k - $200k",
          "$200k - $500k",
          "$500k - $1M",
          "$1M +",
        ],
        R = ["Very Low", "Moderate", "Medium", "High", "Very High"],
        Z = ["1-5%", "5-10%", "10-15%", "15-20%", "20%+"],
        I = [
          {
            accessorKey: "name",
            header: (e) => {
              let { column: t } = e;
              return (0, a.jsx)(DataTableColumnHeader, {
                info: "A vault where liquidity is deployed across multiple chains, protocols, and assets.",
                title: "Vaults",
                column: t,
              });
            },
            filterFn: (e, t, l) => RegExp(l, "i").test(e.original.name),
            cell: (e) => {
              let { row: t } = e,
                l = t.original,
                s = (0, C.tY)(l.vaultId, "vaults"),
                n = l.name;
              return (0, a.jsxs)("div", {
                className: "flex items-center space-x-2",
                children: [
                  s &&
                    (0, a.jsx)(m(), {
                      draggable: !1,
                      src: s,
                      alt: n,
                      width: 24,
                      height: 24,
                      className:
                        "rounded-full select-none pointer-events-none !relative w-[2.2vw] h-[2.2vw] xl:w-[24px] xl:h-[24px]",
                    }),
                  (0, a.jsx)("p", {
                    className:
                      "min-w-[80px] text-[1.35vw] lg:text-[14px] xl:text-[15px] capitalize font-RussoOne gradient-text leading-3 xl:leading-5",
                    children: n,
                  }),
                ],
              });
            },
          },
          {
            accessorKey: "chains",
            header: (e) => {
              let { column: t } = e;
              return (0, a.jsx)(DataTableColumnHeader, {
                info: "Chains where the strategy is deployed",
                title: "Networks",
                column: t,
              });
            },
            filterFn: (e, t, l) =>
              Array.isArray(l)
                ? e.original.chains.some((e) => l.includes(e.chainName))
                : "string" != typeof l ||
                  e.original.chains.some(
                    (e) => e.chainName.toLowerCase() === l.toLowerCase()
                  ),
            cell: (e) => {
              let { row: t } = e,
                l = t.original.chains;
              return (0, a.jsxs)("div", {
                className: "flex items-center relative",
                children: [
                  l
                    .slice(0, 3)
                    .map((e, t) =>
                      (0, a.jsx)(
                        "a",
                        {
                          "data-tooltip-id": "my-tooltip",
                          "data-tooltip-content": ""
                            .concat(e.chainName.charAt(0).toUpperCase())
                            .concat(e.chainName.slice(1)),
                          className:
                            "relative w-[2.6vw] xl:w-8 h-[2.6vw] xl:h-8 rounded-full overflow-hidden mr-[-1vw] xl:mr-[-10px]",
                          children: (0, a.jsx)(m(), {
                            draggable: !1,
                            src: (0, C.tY)(e.chainId.toString(), "chains"),
                            alt: e.chainName,
                            width: 24,
                            height: 24,
                            className:
                              "rounded-full select-none pointer-events-none w-full h-full",
                          }),
                        },
                        t
                      )
                    ),
                  l.length > 3 &&
                    (0, a.jsx)(D.Z, {
                      items: l
                        .slice(3)
                        .map((e) => ({
                          logoSrc: (0, C.tY)(e.chainId.toString(), "chains"),
                          name: e.chainName,
                        })),
                      imageOptions: { width: 20, height: 20 },
                      children: (0, a.jsxs)("div", {
                        className:
                          "text-[1.3vw] xl:text-[14px] font-RussoOne ml-[1.3vw] xl:ml-4 relative [&>section]:hover:!opacity-100 [&>section]:hover:!pointer-events-auto",
                        children: ["+", l.length - 3],
                      }),
                    }),
                ],
              });
            },
          },
          {
            accessorKey: "protocols",
            header: (e) => {
              let { column: t } = e;
              return (0, a.jsx)(DataTableColumnHeader, {
                info: "Protocols where the strategy deploys capital",
                title: "Protocols",
                column: t,
              });
            },
            filterFn: (e, t, l) =>
              e.original.protocols.some((e) => l.includes(e)),
            cell: (e) => {
              let { row: t } = e,
                l = t.original.protocols;
              return (0, a.jsxs)("div", {
                className: "flex items-center relative",
                children: [
                  l
                    .slice(0, 3)
                    .map((e, t) =>
                      (0, a.jsx)(
                        "a",
                        {
                          "data-tooltip-id": "my-tooltip",
                          "data-tooltip-content": ""
                            .concat(e.charAt(0).toUpperCase())
                            .concat(e.slice(1)),
                          className:
                            "relative w-[2.6vw] xl:w-8 h-[2.6vw] xl:h-8 rounded-full overflow-hidden mr-[-1vw] xl:mr-[-10px]",
                          children: (0, a.jsx)(m(), {
                            draggable: !1,
                            src: (0, C.tY)(e, "protocols"),
                            alt: e,
                            width: 24,
                            height: 24,
                            className:
                              "!absolute w-[calc(100%+2px)] h-[calc(100%+2px)] rounded-full object-cover top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]",
                          }),
                        },
                        t
                      )
                    ),
                  l.length > 3 &&
                    (0, a.jsxs)("div", {
                      className:
                        "text-[1.3vw] xl:text-[14px] font-RussoOne ml-[1.3vw] xl:ml-4 relative [&>section]:hover:!opacity-100 [&>section]:hover:!pointer-events-auto",
                      children: [
                        "+",
                        l.length - 3,
                        (0, a.jsx)("section", {
                          className: (0, C.cn)(
                            "absolute z-[100] bottom-0 gap-2 right-0 opacity-0 transition-all pointer-events-none border border-solid border-[#7d6ff6] bg-[#19171f] rounded-[3px] lg:rounded-[5px] p-[5px] lg:p-2 flex flex-wrap justify-between",
                            "".concat(
                              l.length > 5
                                ? "w-fit sm:w-[200px] md:w-[350px]"
                                : l.length > 4
                                ? "w-fit sm:w-[200px]"
                                : "w-fit"
                            )
                          ),
                          children: l
                            .slice(3)
                            .map((e, t) =>
                              (0, a.jsxs)(
                                "div",
                                {
                                  className:
                                    "flex items-center space-x-1 min-w-0 [&>*]:whitespace-nowrap flex-[1 1 auto]",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "relative w-[1.3vw] xl:w-4 h-[1.3vw] xl:h-4 rounded-full overflow-hidden",
                                      children: (0, a.jsx)(m(), {
                                        draggable: !1,
                                        src: (0, C.tY)(e, "protocols"),
                                        alt: e,
                                        width: 24,
                                        height: 24,
                                        className:
                                          "!absolute w-[calc(100%+2px)] h-[calc(100%+2px)] rounded-full object-cover top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]",
                                      }),
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "text-[1.3vw] xl:text-[14px] font-EuclidCircularB capitalize",
                                      children: e,
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                        }),
                      ],
                    }),
                ],
              });
            },
          },
          {
            accessorKey: "assets",
            header: (e) => {
              let { column: t } = e;
              return (0, a.jsx)(DataTableColumnHeader, {
                info: "The assets that the strategies are allowed to use",
                title: "Assets",
                column: t,
              });
            },
            cell: (e) => {
              let { row: t } = e,
                l = t.original.tokens;
              return (0, a.jsxs)("div", {
                className: "flex items-center relative",
                children: [
                  l
                    .slice(0, 3)
                    .map((e, t) =>
                      (0, a.jsx)(
                        "a",
                        {
                          "data-tooltip-id": "my-tooltip",
                          "data-tooltip-content": e.toUpperCase(),
                          className:
                            "relative w-[2.6vw] xl:w-8 h-[2.6vw] xl:h-8 rounded-full overflow-hidden mr-[-1vw] xl:mr-[-10px]",
                          children: (0, a.jsx)(m(), {
                            draggable: !1,
                            src: (0, C.tY)(e, "tokens"),
                            alt: e,
                            width: 24,
                            height: 24,
                            className:
                              "rounded-full select-none pointer-events-none w-full h-full",
                          }),
                        },
                        t
                      )
                    ),
                  l.length > 3 &&
                    (0, a.jsx)(D.Z, {
                      items: l
                        .slice(3)
                        .map((e) => ({
                          logoSrc: (0, C.tY)(e, "tokens"),
                          name: e.toUpperCase(),
                        })),
                      imageOptions: { width: 20, height: 20 },
                      children: (0, a.jsxs)("div", {
                        className:
                          "text-[1.3vw] xl:text-[14px] font-RussoOne ml-[1.3vw] xl:ml-4 relative [&>section]:hover:!opacity-100 [&>section]:hover:!pointer-events-auto",
                        children: ["+", l.length - 3],
                      }),
                    }),
                ],
              });
            },
          },
          {
            accessorKey: "deposited",
            sortingFn: (e, t) => {
              var l, a, s, n, i, r, o, d, c, u, x, m;
              return (
                (null !==
                  (c =
                    null === (a = t.original.onChainData) || void 0 === a
                      ? void 0
                      : null === (l = a.balanceOf) || void 0 === l
                      ? void 0
                      : l.result) && void 0 !== c
                  ? c
                  : 0) *
                  (null !==
                    (u =
                      null === (n = t.original.onChainData) || void 0 === n
                        ? void 0
                        : null === (s = n.totalAssets) || void 0 === s
                        ? void 0
                        : s.result) && void 0 !== u
                    ? u
                    : 0) -
                (null !==
                  (x =
                    null === (r = e.original.onChainData) || void 0 === r
                      ? void 0
                      : null === (i = r.balanceOf) || void 0 === i
                      ? void 0
                      : i.result) && void 0 !== x
                  ? x
                  : 0) *
                  (null !==
                    (m =
                      null === (d = e.original.onChainData) || void 0 === d
                        ? void 0
                        : null === (o = d.totalAssets) || void 0 === o
                        ? void 0
                        : o.result) && void 0 !== m
                    ? m
                    : 0)
              );
            },
            header: (e) => {
              let { column: t } = e;
              return (0, a.jsx)(DataTableColumnHeader, {
                info: "The amount you deposited",
                title: "Deposited",
                column: t,
                className: "justify-center w-full",
              });
            },
            cell: (e) => {
              var t, l, s, n, i, r, o, d, c;
              let { row: u } = e,
                x = u.original.onChainData,
                m = u.original.onChainStatus,
                p =
                  (null !==
                    (i =
                      null == x
                        ? void 0
                        : null === (t = x.totalSupply) || void 0 === t
                        ? void 0
                        : t.result) && void 0 !== i
                    ? i
                    : 1) === 0
                    ? 0
                    : ((null !== (r = u.original.verifiedTvl) && void 0 !== r
                        ? r
                        : 0) *
                        (null !==
                          (o =
                            null == x
                              ? void 0
                              : null === (l = x.balanceOf) || void 0 === l
                              ? void 0
                              : l.result) && void 0 !== o
                          ? o
                          : 0)) /
                      (null !==
                        (d =
                          null == x
                            ? void 0
                            : null === (s = x.totalSupply) || void 0 === s
                            ? void 0
                            : s.result) && void 0 !== d
                        ? d
                        : 1),
                h =
                  null !==
                    (c =
                      null == x
                        ? void 0
                        : null === (n = x.bondedBalance) || void 0 === n
                        ? void 0
                        : n.result) && void 0 !== c
                    ? c
                    : 0;
              return "loading" === m
                ? (0, a.jsx)("div", {
                    className: "flex items-center justify-center",
                    children: (0, a.jsx)(w.Z, {
                      className: "w-5 h-5 text-center",
                    }),
                  })
                : (0, a.jsx)(_.Z, {
                    valueInBase: p + h,
                    pClassName:
                      "text-[1.3vw] xl:text-[14px] font-RussoOne text-center",
                    baseSymbol: C.ZP.getSymbolFromVaultType(u.original.type),
                  });
            },
          },
          {
            accessorKey: "tvl",
            filterFn: (e, t, l) => {
              var a;
              let s =
                null !== (a = e.original.verifiedTvl) && void 0 !== a ? a : 0;
              return l.some((e) => {
                let t = e.split(" - ").map((e) => {
                  e.endsWith("+") && (e = e.slice(0, -2));
                  let t = e.slice(1, -1);
                  return e.endsWith("k")
                    ? 1e3 * Number(t)
                    : e.endsWith("M")
                    ? 1e6 * Number(t)
                    : Number(t);
                });
                return 1 === t.length
                  ? s >= t[0]
                  : 2 === t.length && s >= t[0] && s <= t[1];
              });
            },
            sortingFn: (e, t) => {
              var l, a;
              let s =
                  null !== (l = e.original.verifiedTvl) && void 0 !== l ? l : 0,
                n =
                  null !== (a = t.original.verifiedTvl) && void 0 !== a ? a : 0;
              return n - s;
            },
            header: (e) => {
              let { column: t } = e;
              return (0, a.jsx)(DataTableColumnHeader, {
                info: "Total value locked in the strategy",
                title: "TVL",
                column: t,
                className: "justify-center w-full",
              });
            },
            cell: (e) => {
              var t;
              let { row: l } = e,
                s =
                  null !== (t = l.original.verifiedTvl) && void 0 !== t ? t : 0;
              return (0, a.jsx)(_.Z, {
                valueInBase: s,
                pClassName:
                  "text-[1.3vw] xl:text-[14px] font-RussoOne text-center",
                baseSymbol: C.ZP.getSymbolFromVaultType(l.original.type),
              });
            },
          },
          {
            accessorKey: "risk",
            header: (e) => {
              let { column: t } = e;
              return (0, a.jsx)(DataTableColumnHeader, {
                title: "Risk",
                info: "The higher the risk, the higher the estimated probability of chain, protocol, or asset failure",
                column: t,
                className: "justify-center w-full",
              });
            },
            filterFn: (e, t, l) =>
              l.some((t) => {
                let l = R.indexOf(t);
                return e.original.risk === l + 1;
              }),
            cell: (e) => {
              let { row: t } = e,
                l = t.original.risk;
              return (0, a.jsxs)("div", {
                className:
                  "flex items-end gap-1 justify-center w-full h-[2.2vw] xl:h-6 [&>div]:w-[5px] [&>div]:bg-[#d9d9d9]",
                children: [
                  (0, a.jsx)("div", {
                    style: {
                      backgroundColor: l >= 1 ? "#04FF00" : "",
                      height: "20%",
                    },
                  }),
                  (0, a.jsx)("div", {
                    style: {
                      backgroundColor: l >= 2 ? "#B9E65C" : "",
                      height: "40%",
                    },
                  }),
                  (0, a.jsx)("div", {
                    style: {
                      backgroundColor: l >= 3 ? "#EFD860" : "",
                      height: "60%",
                    },
                  }),
                  (0, a.jsx)("div", {
                    style: {
                      backgroundColor: l >= 4 ? "#FFA34E" : "",
                      height: "80%",
                    },
                  }),
                  (0, a.jsx)("div", {
                    style: {
                      backgroundColor: l >= 5 ? "#FF0000" : "",
                      height: "100%",
                    },
                  }),
                ],
              });
            },
          },
          {
            accessorKey: "apy",
            filterFn: (e, t, l) => {
              let a = e.original.apy;
              return l.some((e) => {
                var t, l;
                let s = e.split("-").map((e) => Number(e.slice(0, -1)));
                return (
                  (s[0] <=
                    (null !== (t = null == a ? void 0 : a.movingAverageAPY) &&
                    void 0 !== t
                      ? t
                      : 0) *
                      100 ||
                    20 === s[0]) &&
                  (s[1] >=
                    (null !== (l = null == a ? void 0 : a.movingAverageAPY) &&
                    void 0 !== l
                      ? l
                      : 0) *
                      100 ||
                    20 === s[1])
                );
              });
            },
            header: (e) => {
              let { column: t } = e;
              return (0, a.jsx)(DataTableColumnHeader, {
                title: "APY",
                info: "Total Annualized Percentage Yield",
                column: t,
                className: "justify-center w-full",
              });
            },
            cell: (e) => {
              var t, l;
              let { row: s } = e,
                n = s.original.apy;
              return (0, a.jsxs)("div", {
                className: "flex items-center w-full justify-center gap-1",
                children: [
                  (0, a.jsx)("span", {
                    className: (0, C.cn)(
                      "text-[1.3vw] xl:text-[14px]",
                      "font-RussoOne text-center"
                    ),
                    children:
                      n && n.movingAverageAPY > 0
                        ? "".concat(
                            Number(
                              (null !==
                                (t = null == n ? void 0 : n.movingAverageAPY) &&
                              void 0 !== t
                                ? t
                                : 0) * 100
                            ).toFixed(2),
                            "%"
                          )
                        : "-",
                  }),
                  (0, a.jsxs)("div", {
                    className: (0, C.cn)("relative group", {
                      "opacity-0": !(n && n.movingAverageAPY > 0),
                    }),
                    children: [
                      (0, a.jsx)(m(), {
                        src: "/star-needed-solid.svg",
                        alt: "star",
                        width: 15,
                        height: 15,
                        className: (0, C.cn)(
                          "cursor-pointer mt-[2px]",
                          "opacity-60 hover:opacity-100 transition-opacity"
                        ),
                      }),
                      (0, a.jsx)("div", {
                        className: (0, C.cn)(
                          "absolute opacity-0 invisible",
                          "group-hover:opacity-100 group-hover:visible",
                          "transition-all duration-200",
                          "right-full top-1/2 -translate-y-1/2 mr-2",
                          "2xl:bottom-full 2xl:left-1/2 2xl:-translate-x-1/2 2xl:mb-2",
                          "2xl:right-auto 2xl:top-auto 2xl:translate-y-0"
                        ),
                        children: (0, a.jsx)("div", {
                          className: (0, C.cn)(
                            "bg-[#100f14] border border-[#7d6ff6]",
                            "rounded-md p-3 min-w-[250px] shadow-lg"
                          ),
                          children: (0, a.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "text-[#B4B7C0]",
                                    children: "APY",
                                  }),
                                  (0, a.jsxs)("span", {
                                    className: "text-white",
                                    children: [
                                      Number(
                                        (null !==
                                          (l =
                                            null == n
                                              ? void 0
                                              : n.movingAverageAPY) &&
                                        void 0 !== l
                                          ? l
                                          : 0) * 100
                                      ).toFixed(2),
                                      "%",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "w-full h-px bg-[#7d6ff6] my-2",
                              }),
                              (0, a.jsx)("div", {
                                className: "flex justify-between items-center",
                                children: (0, a.jsxs)("span", {
                                  className: (0, C.cn)(
                                    "text-white text-[1.3vw] xl:text-[14px]",
                                    "font-Poppins tracking-[0.5px] leading-[1.3]"
                                  ),
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: (0, C.cn)(
                                        "text-white text-[1.3vw] xl:text-[14px]",
                                        "font-Poppins"
                                      ),
                                      children:
                                        "In addition to the APY, you will be earning points. Points turn into",
                                    }),
                                    (0, a.jsx)(m(), {
                                      src: "/star-needed-solid.svg",
                                      alt: "star",
                                      width: 15,
                                      height: 15,
                                      className: "pt-1 inline-block",
                                    }),
                                    (0, a.jsx)("span", {
                                      className: (0, C.cn)(
                                        "text-white text-[1.3vw] xl:text-[14px]",
                                        "font-Poppins"
                                      ),
                                      children: "every week",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              });
            },
          },
          {
            accessorKey: "type",
            filterFn: (e, t, l) =>
              "all" === l.toString().toLowerCase() || e.original.type === l,
          },
        ],
        M = o.forwardRef((e, t) => {
          let { className: l, ...s } = e;
          return (0, a.jsx)("div", {
            className: "relative w-full overflow-visible",
            children: (0, a.jsx)("table", {
              ref: t,
              className: (0, C.cn)("w-full caption-bottom text-sm", l),
              ...s,
            }),
          });
        });
      M.displayName = "Table";
      let V = o.forwardRef((e, t) => {
        let { className: l, ...s } = e;
        return (0, a.jsx)("thead", {
          ref: t,
          className: (0, C.cn)("[&_tr]:border-b", l),
          ...s,
        });
      });
      V.displayName = "TableHeader";
      let E = o.forwardRef((e, t) => {
        let { className: l, ...s } = e;
        return (0, a.jsx)("tbody", {
          ref: t,
          className: (0, C.cn)("[&_tr:last-child]:border-0", l),
          ...s,
        });
      });
      E.displayName = "TableBody";
      let L = o.forwardRef((e, t) => {
        let { className: l, ...s } = e;
        return (0, a.jsx)("tfoot", {
          ref: t,
          className: (0, C.cn)(
            "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
            l
          ),
          ...s,
        });
      });
      L.displayName = "TableFooter";
      let Y = o.forwardRef((e, t) => {
        let { className: l, ...s } = e;
        return (0, a.jsx)("tr", { ref: t, className: (0, C.cn)(l), ...s });
      });
      Y.displayName = "TableRow";
      let $ = o.forwardRef((e, t) => {
        let { className: l, ...s } = e;
        return (0, a.jsx)("th", {
          ref: t,
          className: (0, C.cn)(
            "h-12 px-2 md:px-3 lg:px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
            l
          ),
          ...s,
        });
      });
      $.displayName = "TableHead";
      let H = o.forwardRef((e, t) => {
        let { className: l, ...s } = e;
        return (0, a.jsx)("td", {
          ref: t,
          className: (0, C.cn)(
            "p-2 md:p-3 lg:p-4 align-middle [&:has([role=checkbox])]:pr-0",
            l
          ),
          ...s,
        });
      });
      H.displayName = "TableCell";
      let U = o.forwardRef((e, t) => {
        let { className: l, ...s } = e;
        return (0, a.jsx)("caption", {
          ref: t,
          className: (0, C.cn)("mt-4 text-sm text-muted-foreground", l),
          ...s,
        });
      });
      U.displayName = "TableCaption";
      var z = l(49723),
        K = l(51157),
        filter_list = function (e) {
          let { selectedValues: t, title: l, toggleValue: s, values: n } = e;
          return (0, a.jsxs)("div", {
            className:
              "flex-1 basis-[100px] shrink-0 border-l border-r-0 border-t-0 border-b-0 border-solid border-[#ffffff21] self-stretch",
            children: [
              (0, a.jsx)("div", {
                className:
                  "border-l-0 border-t-0 border-r-0 border-b border-solid border-[#ffffff21] px-4 py-2",
                children: (0, a.jsx)("p", {
                  className:
                    "font-EuclidCircularB text-[14px] font-bold text-white",
                  children: l,
                }),
              }),
              (0, a.jsx)("div", {
                className:
                  "px-2 py-2 flex flex-col justify-start items-start gap-2 max-h-[220px] overflow-y-auto pretty-scroll overflow-x-hidden",
                children: n.map((e) => {
                  let l = t.includes(e);
                  return (0, a.jsxs)(
                    "button",
                    {
                      onClick: () => s(e),
                      className:
                        "flex items-center justify-start gap-2 bg-transparent border-none outline-none cursor-pointer",
                      children: [
                        (0, a.jsx)("div", {
                          style: {
                            transition: "all 0.2s ease-in-out",
                            border: l ? "none" : "1px solid #FFFFFF",
                            background: l
                              ? "linear-gradient(270deg, #58E1D9 -76.1%, #7D6FF6 154.41%)"
                              : "none",
                            borderRadius: "2px",
                            width: "10px",
                            height: "10px",
                          },
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "font-EuclidCircularB capitalize text-[14px] font-medium text-white whitespace-nowrap",
                          children: e,
                        }),
                      ],
                    },
                    e
                  );
                }),
              }),
            ],
          });
        },
        components_AdvancedFilters = function (e) {
          let {
            selectedChains: t,
            setSelectedChains: l,
            chains: s,
            protocols: n,
            selectedProtocols: i,
            setSelectedProtocols: r,
            selectedTVL: o,
            setSelectedTVL: d,
            tvl: c,
            selectedRisk: u,
            setSelectedRisk: x,
            risk: m,
            selectedAPY: p,
            setSelectedAPY: h,
            apy: f,
            filterRef: v,
          } = e;
          return (0, a.jsxs)("div", {
            ref: v,
            className:
              "border-solid z-[4] animate-fadeinReallyFast border rounded-b-[5px] border-[#7D6FF6] w-[580px] bg-[#1a1a1a] absolute top-[100%] right-0 flex items-start",
            children: [
              (0, a.jsx)(filter_list, {
                selectedValues: t,
                values: s,
                title: "Chains",
                toggleValue: (e) => {
                  t.includes(e) ? l(t.filter((t) => t !== e)) : l([...t, e]);
                },
              }),
              (0, a.jsx)(filter_list, {
                selectedValues: i,
                values: n,
                title: "Protocols",
                toggleValue: (e) => {
                  i.includes(e) ? r(i.filter((t) => t !== e)) : r([...i, e]);
                },
              }),
              (0, a.jsx)(filter_list, {
                selectedValues: o,
                values: c,
                title: "TVL",
                toggleValue: (e) => {
                  o.includes(e) ? d(o.filter((t) => t !== e)) : d([...o, e]);
                },
              }),
              (0, a.jsx)(filter_list, {
                selectedValues: u,
                values: m,
                title: "Risk",
                toggleValue: (e) => {
                  u.includes(e) ? x(u.filter((t) => t !== e)) : x([...u, e]);
                },
              }),
              (0, a.jsx)(filter_list, {
                selectedValues: p,
                values: f,
                title: "APY",
                toggleValue: (e) => {
                  p.includes(e) ? h(p.filter((t) => t !== e)) : h([...p, e]);
                },
              }),
            ],
          });
        },
        W = l(23874),
        X = l.n(W),
        vault_item_mobile = function (e) {
          let {
            apy: t,
            title: l,
            icon: s,
            link: n,
            risk: i,
            loadingTvl: r,
            tvl: o,
          } = e;
          return (0, a.jsx)(X(), {
            href: n,
            passHref: !0,
            className:
              "gradient-wrapper block w-[min(338px,90vw)] mx-auto !rounded-md overflow-hidden mb-8",
            children: (0, a.jsxs)("div", {
              className: "w-full bg-[#19171f] !rounded-md overflow-hidden",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "w-full flex justify-start items-center py-3 px-3 gap-2 bg-black",
                  children: [
                    (0, a.jsx)(m(), {
                      src: "".concat(s),
                      alt: "".concat(s),
                      height: 30,
                      width: 30,
                      className: "object-contain",
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-[16px] gradient-text font-RussoOne font-semibold",
                      children: l,
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: "gradient-border !h-[2px]" }),
                (0, a.jsxs)("div", {
                  className: "py-4 px-2 flex items-start justify-evenly w-full",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-between gap-2 self-stretch",
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "font-EuclidCircularB text-[16px] font-light",
                          children: "Risk",
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex items-end gap-1 justify-center w-full h-7 [&>div]:w-[5px] [&>div]:bg-[#d9d9d9]",
                          children: [
                            (0, a.jsx)("div", {
                              style: {
                                backgroundColor: i >= 1 ? "#04FF00" : "",
                                height: "20%",
                              },
                            }),
                            (0, a.jsx)("div", {
                              style: {
                                backgroundColor: i >= 2 ? "#B9E65C" : "",
                                height: "40%",
                              },
                            }),
                            (0, a.jsx)("div", {
                              style: {
                                backgroundColor: i >= 3 ? "#EFD860" : "",
                                height: "60%",
                              },
                            }),
                            (0, a.jsx)("div", {
                              style: {
                                backgroundColor: i >= 4 ? "#FFA34E" : "",
                                height: "80%",
                              },
                            }),
                            (0, a.jsx)("div", {
                              style: {
                                backgroundColor: i >= 5 ? "#FF0000" : "",
                                height: "100%",
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "gradient-border-vertical self-stretch !h-auto",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-between gap-2 self-stretch",
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "font-EuclidCircularB text-[16px] font-light",
                          children: "TVL",
                        }),
                        r
                          ? (0, a.jsx)(w.Z, { className: "w-3 h-3" })
                          : (0, a.jsxs)("p", {
                              className:
                                "font-EuclidCircularB text-[16px] font-bold text-center",
                              children: ["$", o],
                            }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "gradient-border-vertical self-stretch !h-auto",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-between gap-2 self-stretch",
                      children: [
                        (0, a.jsx)("p", {
                          className:
                            "font-EuclidCircularB text-[16px] font-light",
                          children: "APY",
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "font-EuclidCircularB text-[12px] font-bold text-center",
                          children: t ? "".concat(t.toFixed(2), "%") : "-",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        q = l(79096),
        components_UpdatedVaultsTable = function (e) {
          var t, l, s, n, i, r, d, c, u, x, p, h, f, v, b, g;
          let { className: _, vaultsData: y, isLoading: N } = e,
            [k, B] = (0, o.useState)([]),
            [P, T] = (0, o.useState)([]),
            [S, D] = (0, o.useState)({ pageIndex: 0, pageSize: 100 }),
            L = (0, F.b7)({
              data: null != y ? y : [],
              columns: I,
              getCoreRowModel: (0, A.sC)(),
              onColumnFiltersChange: T,
              getPaginationRowModel: (0, A.G_)(),
              getFilteredRowModel: (0, A.vL)(),
              getSortedRowModel: (0, A.tj)(),
              onSortingChange: B,
              onPaginationChange: D,
              state: {
                sorting: k,
                columnFilters: P,
                pagination: S,
                columnVisibility: { type: !1 },
              },
            }),
            U = (0, o.useCallback)(
              (e) =>
                (-1 === P.findIndex((e) => "type" === e.id) &&
                  e === j.g9.all) ||
                P.some((t) => "type" === t.id && t.value === e),
              [P]
            ),
            [W, X] = (0, o.useState)(!1),
            { dialogRef: J, handleClose: Q } = (0, K.Z)(
              () => {
                X(!1);
              },
              W,
              !0
            ),
            [G, ee] = (0, o.useState)(!1),
            { dialogRef: et, handleClose: el } = (0, K.Z)(
              () => {
                ee(!1);
              },
              G,
              !0
            ),
            ea = o.useMemo(() => {
              if (!y) return [];
              let e = y.map((e) => e.chains),
                t = e.flat(),
                l = new Set(t.map((e) => e.chainName));
              return Array.from(l);
            }, [y]),
            es = o.useMemo(() => {
              if (!y) return [];
              let e = y.map((e) => e.protocols),
                t = e.flat(),
                l = new Set(t.map((e) => e));
              return Array.from(l);
            }, [y]),
            { push: en } = (0, q.useRouter)();
          return (0, a.jsxs)("div", {
            className: "w-full relative",
            children: [
              (0, a.jsx)("div", {
                className:
                  "w-full h-full absolute z-[2] pointer-events-none opacity-50 hidden sm:block",
                style: {
                  backgroundImage: "url('/contour.svg')",
                  backgroundSize: "100% 200%",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                },
              }),
              (0, a.jsxs)("div", {
                className: (0, C.cn)(
                  "w-full max-w-[min(338px,90vw)] sm:max-w-[min(1200px,95%)] mx-auto [&>*]:transition-all relative z-[3]",
                  _
                ),
                children: [
                  (0, a.jsx)(z.u, {
                    id: "my-tooltip",
                    className: "chart_box_header_tooltip",
                    noArrow: !0,
                    clickable: !0,
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-white font-Poppins font-semibold text-[18px]",
                        children: "OmniVaults",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "mobile-table-filter p-px rounded-[5px] cursor-pointer relative sm:hidden",
                        onClick: () => {
                          W
                            ? Q()
                            : setTimeout(() => {
                                X(!0);
                              }, 50);
                        },
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "flex items-center gap-2 rounded-[5px] w-[100px] justify-center py-1",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-white font-Poppins font-semibold xl:text-[14px] select-none pointer-events-none",
                                children:
                                  null !==
                                    (x =
                                      null ===
                                        (t = P.find((e) => "type" === e.id)) ||
                                      void 0 === t
                                        ? void 0
                                        : t.value) && void 0 !== x
                                    ? x
                                    : "All",
                              }),
                              (0, a.jsx)(m(), {
                                style: {
                                  rotate: W ? "180deg" : "0deg",
                                  transition: "0.3s ease-in-out",
                                },
                                src: "/selectArrow.svg",
                                alt: "arrow",
                                width: 17,
                                height: 17,
                                draggable: !1,
                                className:
                                  "object-contain !w-[17px] !h-auto pointer-events-none select-none",
                              }),
                            ],
                          }),
                          W &&
                            (0, a.jsx)("div", {
                              ref: J,
                              className:
                                "absolute top-full mt-2 left-0 z-10 overflow-hidden animate-fadeinFast w-full h-fit bg-[#19171f] border border-solid border-[#7c6ff56f] rounded-[5px]",
                              children: (0, a.jsx)("div", {
                                className: "flex flex-col",
                                children: Object.entries(j.g9).map((e, t) => {
                                  let [l, s] = e;
                                  return (0, a.jsx)(
                                    "button",
                                    {
                                      onClick: () => {
                                        U(s) ||
                                          T((e) => [
                                            ...e.filter((e) => "type" !== e.id),
                                            { id: "type", value: s },
                                          ]);
                                      },
                                      className: (0, C.cn)(
                                        "px-4 py-3 capitalize relative cursor-pointer border border-solid border-t-0 border-l-0 !border-r-0 border-b-0 border-[#7c6ff56f] bg-transparent",
                                        {
                                          "border-b":
                                            t !== Object.keys(j.g9).length - 1,
                                          "rounded-tl-[5px]": 0 === t,
                                          "rounded-tr-[5px]": 0 === t,
                                          "rounded-bl-[5px]":
                                            t === Object.keys(j.g9).length - 1,
                                          "rounded-br-[5px]":
                                            t === Object.keys(j.g9).length - 1,
                                        }
                                      ),
                                      children: (0, a.jsx)("p", {
                                        className:
                                          "relative font-[Montserrat] text-[12px] xl:text-[14px] pointer-events-none text-white",
                                        children: l,
                                      }),
                                    },
                                    l
                                  );
                                }),
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-end justify-between",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "items-end justify-start h-[3.5vw] xl:h-[42px] hidden sm:flex",
                        children: Object.entries(j.g9).map((e, t) => {
                          let [l, s] = e;
                          return (0, a.jsxs)(
                            "button",
                            {
                              onClick: () => {
                                U(s) ||
                                  T((e) => [
                                    ...e.filter((e) => "type" !== e.id),
                                    { id: "type", value: s },
                                  ]);
                              },
                              className: (0, C.cn)(
                                "table-filter px-3 xl:px-4 py-2 xl:py-3 capitalize relative cursor-pointer",
                                {
                                  active: U(s),
                                  nonactive: !U(s),
                                  "rounded-tl-[5px]": 0 === t,
                                  "rounded-tr-[5px]":
                                    t === Object.keys(j.g9).length - 1,
                                }
                              ),
                              children: [
                                (0, a.jsx)("div", {
                                  className: (0, C.cn)(
                                    "absolute top-0 left-0 right-0 w-full z-1 transition-all duration-200 ease-in-out bg-black flex items-center justify-center",
                                    {
                                      "h-[110%]": U(s),
                                      "h-full": !U(s),
                                      "bg-opacity-0": !U(s),
                                      "bg-opacity-100": U(s),
                                      "rounded-tl-[5px]": 0 === t,
                                      "rounded-tr-[5px]":
                                        t === Object.keys(j.g9).length - 1,
                                    }
                                  ),
                                  children: (0, a.jsx)("p", {
                                    className:
                                      "relative font-[Montserrat] text-[1.2vw] xl:text-[14px]",
                                    children: l,
                                  }),
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "relative font-[Montserrat] text-[1.2vw] xl:text-[14px] pointer-events-none opacity-0",
                                  children: l,
                                }),
                              ],
                            },
                            l
                          );
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "items-center gap-2 hidden sm:flex mb-1",
                        children: [
                          (0, a.jsx)("input", {
                            value:
                              null !==
                                (p =
                                  null ===
                                    (l = P.find((e) => "name" === e.id)) ||
                                  void 0 === l
                                    ? void 0
                                    : l.value) && void 0 !== p
                                ? p
                                : "",
                            onChange: (e) => {
                              "" === e.target.value
                                ? T((e) => [
                                    ...e.filter((e) => "name" !== e.id),
                                  ])
                                : T((t) => [
                                    ...t.filter((e) => "name" !== e.id),
                                    { id: "name", value: e.target.value },
                                  ]);
                            },
                            placeholder: "Search Omnivaults",
                            className:
                              "bg-[#D9D9D91A] px-2 glow-button placeholder:text-[#FFFFFF40] text-white font-Poppins text-[12px] xl:text-[14px] font-normal outline-none border-none w-[130px] xl:w-[181px] h-[25px] xl:h-[35px] rounded-[5px]",
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "light-gradient-wrapper p-px rounded-t-[5px] relative",
                            children: [
                              (0, a.jsxs)("button", {
                                onClick: () => {
                                  G
                                    ? el()
                                    : setTimeout(() => {
                                        ee(!0);
                                      }, 50);
                                },
                                className:
                                  "flex glow-button gap-1 items-center rounded-t-[5px] cursor-pointer bg-[#101012] w-[130px] xl:w-[181px] h-[25px] xl:h-[35px] justify-center border-none outline-none",
                                children: [
                                  (0, a.jsx)("p", {
                                    className:
                                      "font-EuclidCircularB font-medium text-[12px] xl:text-[14px] text-white",
                                    children: "Advanced Filters",
                                  }),
                                  (0, a.jsx)(m(), {
                                    src: "/chevron.svg",
                                    alt: "chevron",
                                    width: 10,
                                    height: 5,
                                    className: "".concat(
                                      G ? "" : "transform rotate-180",
                                      " invert-[0.2]"
                                    ),
                                    style: {
                                      transition: "transform 0.2s ease-in-out",
                                    },
                                  }),
                                ],
                              }),
                              G &&
                                (0, a.jsx)(components_AdvancedFilters, {
                                  filterRef: et,
                                  selectedChains:
                                    null !==
                                      (h =
                                        null ===
                                          (s = P.find(
                                            (e) => "chains" === e.id
                                          )) || void 0 === s
                                          ? void 0
                                          : s.value) && void 0 !== h
                                      ? h
                                      : [],
                                  setSelectedChains: (e) => {
                                    0 === e.length
                                      ? T((e) => [
                                          ...e.filter((e) => "chains" !== e.id),
                                        ])
                                      : T((t) => [
                                          ...t.filter((e) => "chains" !== e.id),
                                          { id: "chains", value: e },
                                        ]);
                                  },
                                  chains: ea,
                                  selectedProtocols:
                                    null !==
                                      (f =
                                        null ===
                                          (n = P.find(
                                            (e) => "protocols" === e.id
                                          )) || void 0 === n
                                          ? void 0
                                          : n.value) && void 0 !== f
                                      ? f
                                      : [],
                                  setSelectedProtocols: (e) => {
                                    0 === e.length
                                      ? T((e) => [
                                          ...e.filter(
                                            (e) => "protocols" !== e.id
                                          ),
                                        ])
                                      : T((t) => [
                                          ...t.filter(
                                            (e) => "protocols" !== e.id
                                          ),
                                          { id: "protocols", value: e },
                                        ]);
                                  },
                                  protocols: es,
                                  selectedTVL:
                                    null !==
                                      (v =
                                        null ===
                                          (i = P.find((e) => "tvl" === e.id)) ||
                                        void 0 === i
                                          ? void 0
                                          : i.value) && void 0 !== v
                                      ? v
                                      : [],
                                  setSelectedTVL: (e) => {
                                    0 === e.length
                                      ? T((e) => [
                                          ...e.filter((e) => "tvl" !== e.id),
                                        ])
                                      : T((t) => [
                                          ...t.filter((e) => "tvl" !== e.id),
                                          { id: "tvl", value: e },
                                        ]);
                                  },
                                  tvl: O,
                                  selectedRisk:
                                    null !==
                                      (b =
                                        null ===
                                          (r = P.find(
                                            (e) => "risk" === e.id
                                          )) || void 0 === r
                                          ? void 0
                                          : r.value) && void 0 !== b
                                      ? b
                                      : [],
                                  setSelectedRisk: (e) => {
                                    0 === e.length
                                      ? T((e) => [
                                          ...e.filter((e) => "risk" !== e.id),
                                        ])
                                      : T((t) => [
                                          ...t.filter((e) => "risk" !== e.id),
                                          { id: "risk", value: e },
                                        ]);
                                  },
                                  risk: R,
                                  selectedAPY:
                                    null !==
                                      (g =
                                        null ===
                                          (d = P.find((e) => "apy" === e.id)) ||
                                        void 0 === d
                                          ? void 0
                                          : d.value) && void 0 !== g
                                      ? g
                                      : [],
                                  setSelectedAPY: (e) => {
                                    0 === e.length
                                      ? T((e) => [
                                          ...e.filter((e) => "apy" !== e.id),
                                        ])
                                      : T((t) => [
                                          ...t.filter((e) => "apy" !== e.id),
                                          { id: "apy", value: e },
                                        ]);
                                  },
                                  apy: Z,
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: (0, C.cn)(
                      "w-full rounded-md sm:rounded-t-none p-px [&>*]:text-white glow-table-container hidden sm:block"
                    ),
                    children: (0, a.jsxs)(M, {
                      className: "!border-spacing-0",
                      children: [
                        (0, a.jsx)(V, {
                          className: "bg-black",
                          children: L.getHeaderGroups().map((e) =>
                            (0, a.jsx)(
                              Y,
                              {
                                className: "h-auto xl:h-[66px]",
                                children: e.headers.map((t, l) =>
                                  (0, a.jsx)(
                                    $,
                                    {
                                      className: (0, C.cn)({
                                        "rounded-tl-md sm:!rounded-tl-none":
                                          0 === l,
                                        "rounded-tr-md sm:!rounded-tr-none":
                                          l === e.headers.length - 1,
                                      }),
                                      children: t.isPlaceholder
                                        ? null
                                        : (0, F.ie)(
                                            t.column.columnDef.header,
                                            t.getContext()
                                          ),
                                    },
                                    t.id
                                  )
                                ),
                              },
                              e.id
                            )
                          ),
                        }),
                        (0, a.jsx)(E, {
                          children: N
                            ? (0, a.jsx)(Y, {
                                className:
                                  "glow-table-row-clear-no-hover rounded-b-md",
                                children: (0, a.jsx)(H, {
                                  colSpan: I.length - 1,
                                  className: "h-24 text-center rounded-b-md",
                                  children: (0, a.jsx)(w.Z, {
                                    className: "w-5 h-5 mx-auto",
                                  }),
                                }),
                              })
                            : (
                                null === (c = L.getRowModel().rows) ||
                                void 0 === c
                                  ? void 0
                                  : c.length
                              )
                            ? L.getRowModel().rows.map((e, t) =>
                                (0, a.jsx)(
                                  Y,
                                  {
                                    onClick: () => {
                                      en(
                                        "/vault/".concat(
                                          e.original.name.replaceAll(" ", "-")
                                        )
                                      );
                                    },
                                    "data-state":
                                      e.getIsSelected() && "selected",
                                    className: (0, C.cn)(
                                      {
                                        "glow-table-row-clear": t % 2 == 0,
                                        "glow-table-row-black": t % 2 != 0,
                                        "!rounded-b-md":
                                          t === L.getRowModel().rows.length - 1,
                                      },
                                      "cursor-pointer"
                                    ),
                                    children: e
                                      .getVisibleCells()
                                      .map((e, l) =>
                                        (0, a.jsx)(
                                          H,
                                          {
                                            className: (0, C.cn)(
                                              "h-[6vw] xl:h-[75px]",
                                              {
                                                "!rounded-bl-md":
                                                  0 === l &&
                                                  t ===
                                                    L.getRowModel().rows
                                                      .length -
                                                      1,
                                                "!rounded-br-md":
                                                  l === I.length - 2 &&
                                                  t ===
                                                    L.getRowModel().rows
                                                      .length -
                                                      1,
                                              }
                                            ),
                                            children: (0, F.ie)(
                                              e.column.columnDef.cell,
                                              e.getContext()
                                            ),
                                          },
                                          e.id
                                        )
                                      ),
                                  },
                                  e.id
                                )
                              )
                            : (0, a.jsx)(Y, {
                                className:
                                  "glow-table-row-clear-no-hover rounded-b-md",
                                children: (0, a.jsx)(H, {
                                  colSpan: I.length - 1,
                                  className: "h-24 text-center rounded-b-md",
                                  children:
                                    U(j.g9.BTC) || U(j.g9.others)
                                      ? (0, a.jsxs)("p", {
                                          className:
                                            "text-white font-Poppins font-semibold text-[16px] relative",
                                          children: [
                                            "Soon",
                                            " ",
                                            (0, a.jsx)("span", {
                                              className:
                                                "top-[-16%] absolute ml-1 text-[14px]",
                                              children: "TM",
                                            }),
                                          ],
                                        })
                                      : (0, a.jsx)("p", {
                                          className:
                                            "text-white font-Poppins font-semibold text-[16px]",
                                          children: "No vaults found",
                                        }),
                                }),
                              }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "w-full block sm:hidden",
                    children: N
                      ? (0, a.jsx)("div", {
                          className:
                            "flex items-center justify-center min-h-[100px]",
                          children: (0, a.jsx)(w.Z, { className: "w-6 h-6" }),
                        })
                      : 0 === L.getRowModel().rows.length
                      ? (0, a.jsx)("div", {
                          className:
                            "flex items-center justify-center min-h-[100px]",
                          children: (0, a.jsx)("p", {
                            className:
                              "text-white font-Poppins font-semibold text-[16px]",
                            children: "No vaults found",
                          }),
                        })
                      : (0, a.jsx)("div", {
                          className: "flex flex-col gap-8",
                          children:
                            null === (u = L.getRowModel().rows) || void 0 === u
                              ? void 0
                              : u.map((e) => {
                                  var t, l, s, n, i;
                                  let { original: r } = e;
                                  return (0, a.jsx)(
                                    vault_item_mobile,
                                    {
                                      risk: r.risk,
                                      title: r.name,
                                      link: "/vault/".concat(
                                        r.name.replaceAll(" ", "-")
                                      ),
                                      icon: (0, C.tY)(r.vaultId, "vaults"),
                                      apy:
                                        (null !==
                                          (n =
                                            null == r
                                              ? void 0
                                              : null === (t = r.apy) ||
                                                void 0 === t
                                              ? void 0
                                              : t.movingAverageAPY) &&
                                        void 0 !== n
                                          ? n
                                          : 0) * 100,
                                      loadingTvl: "loading" === r.onChainStatus,
                                      tvl: C.ZP.roundToTwo(
                                        null !==
                                          (i =
                                            null === (s = r.onChainData) ||
                                            void 0 === s
                                              ? void 0
                                              : null === (l = s.totalAssets) ||
                                                void 0 === l
                                              ? void 0
                                              : l.result) && void 0 !== i
                                          ? i
                                          : 0
                                      ),
                                    },
                                    r.vaultId
                                  );
                                }),
                        }),
                  }),
                ],
              }),
            ],
          });
        },
        launch_app_moudules = function (e) {
          let {} = e,
            { address: t } = (0, c.Z)(),
            { data: l, isLoading: s } = (0, u.em)(
              { address: t },
              { pollingInterval: 1e4 }
            ),
            { data: n } = (0, u.Ru)(),
            { data: i, status: r } = (0, d.Z)({
              vaults: null != l ? l : [],
              account: t,
            }),
            x = (0, o.useMemo)(() => {
              if (l) {
                let e = l.map((e) => e.protocols),
                  t = e.flat(),
                  a = Array.from(new Set(t));
                return a.length;
              }
              return 0;
            }, [l]),
            m = (0, o.useMemo)(() => {
              if (i) {
                let e = null != l ? l : [],
                  t = Object.entries(i).map((t) => {
                    let [l, a] = t,
                      s = e.find((e) => e.vaultId === l);
                    return s
                      ? {
                          baseSymbol: C.ZP.getSymbolFromVaultType(s.type),
                          valueInBase: a.totalAssets.result,
                        }
                      : null;
                  });
                return t.filter((e) => null !== e);
              }
              return [];
            }, [i, l]),
            p = (0, o.useMemo)(() => {
              if (l) {
                let e = l.map((e) => e.chains.map((e) => e.chainId)),
                  t = e.flat(),
                  a = Array.from(new Set(t));
                return a.length;
              }
              return 0;
            }, [l]),
            { data: h } = (0, u.Zf)(void 0, { pollingInterval: 3e5 }),
            f = (0, o.useCallback)(
              function (e, t) {
                var l, a, s;
                let n =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  i = e;
                if (!n) return i;
                switch (t) {
                  case "ETH":
                    i =
                      e *
                      (null !== (l = null == h ? void 0 : h.ethPrice) &&
                      void 0 !== l
                        ? l
                        : 0);
                    break;
                  case "USDC":
                    i =
                      e *
                      (null !== (a = null == h ? void 0 : h.usdcPrice) &&
                      void 0 !== a
                        ? a
                        : 0);
                    break;
                  case "BTC":
                    i =
                      e *
                      (null !== (s = null == h ? void 0 : h.btcPrice) &&
                      void 0 !== s
                        ? s
                        : 0);
                    break;
                  default:
                    i = e;
                }
                return i;
              },
              [h]
            ),
            v = (0, o.useMemo)(() => {
              if (i) {
                let e = Object.entries(i).reduce((e, t) => {
                  let [a, s] = t,
                    n = null == l ? void 0 : l.find((e) => e.vaultId === a);
                  if (!n) return e;
                  let i = s.totalAssets.result || 0,
                    r = s.balanceOf.result || 0,
                    o = s.totalSupply.result || 1;
                  if (0 === o) return e;
                  let d = s.bondedBalance.result || 0,
                    c = f(d, C.ZP.getSymbolFromVaultType(n.type)),
                    u = f((i * r) / o, C.ZP.getSymbolFromVaultType(n.type));
                  return e + u + c;
                }, 0);
                return e;
              }
              return 0;
            }, [i, l, f]),
            { data: b, isLoading: g } = (0, u.bw)(void 0, {
              pollingInterval: 3e5,
            }),
            { data: w } = (0, u.ZR)(),
            { data: _, isLoading: j } = (0, u.$o)(
              {
                address:
                  null != t ? t : "0x0000000000000000000000000000000000000000",
              },
              { skip: !t }
            ),
            y = (0, o.useMemo)(
              () =>
                (null == _ ? void 0 : _.vaultsProfits)
                  ? Object.entries(_.vaultsProfits).reduce((e, t) => {
                      let [a, s] = t,
                        n = null == l ? void 0 : l.find((e) => e.vaultId === a);
                      if (!n) return e;
                      let i = C.ZP.getSymbolFromVaultType(n.type),
                        r = f(
                          Number(s.profitTotal) / 10 ** n.baseToken.decimals,
                          i
                        );
                      return e + r;
                    }, 0)
                  : 0,
              [_, l, f]
            ),
            N = (0, o.useMemo)(
              () =>
                (null == _ ? void 0 : _.vaultsProfits)
                  ? Object.entries(_.vaultsProfits).reduce((e, t) => {
                      let [a, s] = t,
                        n = null == l ? void 0 : l.find((e) => e.vaultId === a);
                      if (!n) return e;
                      let i = C.ZP.getSymbolFromVaultType(n.type),
                        r = f(
                          Number(s.profitWeekly) / 10 ** n.baseToken.decimals,
                          i
                        );
                      return e + r;
                    }, 0)
                  : 0,
              [_, l, f]
            );
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(Balances, {
                loading: "loading" === r,
                chainsCovered: p,
                numberOfOmnivaults: l ? l.length : 0,
                protocolsCovered: x,
                portfolioBalance: v,
                dailyProfit: N,
                totalProfit: y,
                tvl: m,
                isLoadingAPYs: g,
                isLoadingProfits: j,
              }),
              (0, a.jsx)(components_UpdatedVaultsTable, {
                className: "mb-32 mt-4",
                isLoading: s,
                vaultsData:
                  null == l
                    ? void 0
                    : l.map((e) => {
                        var t, l, a;
                        return {
                          ...e,
                          onChainData: null == i ? void 0 : i[e.vaultId],
                          onChainStatus: r,
                          verifiedTvl:
                            (null !==
                              (l =
                                null == w
                                  ? void 0
                                  : null === (t = w[e.vaultId]) || void 0 === t
                                  ? void 0
                                  : t.tvl) && void 0 !== l
                              ? l
                              : 0) /
                            10 ** e.baseToken.decimals,
                          apy: g
                            ? { currentAPY: 0, movingAverageAPY: 0 }
                            : null !==
                                (a =
                                  null == b
                                    ? void 0
                                    : b[e.vaultId.toString()]) && void 0 !== a
                            ? a
                            : { currentAPY: 0, movingAverageAPY: 0 },
                        };
                      }),
              }),
              (0, a.jsx)(OmniDescription, {}),
            ],
          });
        };
      function LaunchApp() {
        return (0, a.jsxs)("section", {
          className: r().launch_app_container,
          children: [
            (0, a.jsx)("div", { className: r().launch_app_glow }),
            (0, a.jsx)("div", { className: r().launch_app_star_back }),
            (0, a.jsx)("div", { className: r().launch_app_star_back2 }),
            (0, a.jsx)(n.Z, {}),
            (0, a.jsx)(launch_app_moudules, {}),
            (0, a.jsx)(s.Z, {}),
          ],
        });
      }
    },
    84874: function (e) {
      e.exports = {
        Balances_container: "Balances_Balances_container__hrSM_",
        Balances_glow: "Balances_Balances_glow__Imtht",
        Balances_left_box: "Balances_Balances_left_box__7BE_k",
        Balances_right_box: "Balances_Balances_right_box__VsFKq",
        Balances_left_box_title: "Balances_Balances_left_box_title__mwC3I",
        Balances_left_box_data_container:
          "Balances_Balances_left_box_data_container__1_4LJ",
        Balances_portfolio_wrapper:
          "Balances_Balances_portfolio_wrapper__Dtcnw",
        Balances_portfolio: "Balances_Balances_portfolio__h4_XL",
        Balances_portfolio_title: "Balances_Balances_portfolio_title__KvILI",
        Balances_portfolio_balance_box:
          "Balances_Balances_portfolio_balance_box__cVQcM",
        Balances_portfolio_balance_box_arrow:
          "Balances_Balances_portfolio_balance_box_arrow__xJxxP",
        Balances_portfolio_profits_box:
          "Balances_Balances_portfolio_profits_box__kkJYX",
        Balances_portfolio_profit: "Balances_Balances_portfolio_profit__EmPTH",
        Balances_portfolio_profit_arrow:
          "Balances_Balances_portfolio_profit_arrow__u6X_w",
        Balances_datas_box: "Balances_Balances_datas_box__QRvcd",
        Balances_data_box_wrapper: "Balances_Balances_data_box_wrapper__PxjVV",
        Balances_data_box: "Balances_Balances_data_box__fOs55",
        Balances_data_box_title: "Balances_Balances_data_box_title__JDI87",
        Balances_data_box_content: "Balances_Balances_data_box_content__gu7UM",
      };
    },
    27577: function (e) {
      e.exports = {
        OmniDesc_container: "OmniDescription_OmniDesc_container__QSCgm",
        OmniDesc_desc_box: "OmniDescription_OmniDesc_desc_box__k0LcX",
      };
    },
  },
  function (e) {
    e.O(0, [6040, 4836, 5881, 7832, 9774, 2888, 179], function () {
      return e((e.s = 93564));
    }),
      (_N_E = e.O());
  },
]);
