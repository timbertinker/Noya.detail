(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5881],
  {
    15881: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return components_Header;
        },
      });
      var a = n(11527),
        i = n(75961),
        o = n.n(i),
        s = n(50959),
        r = n(79096),
        l = n(59581),
        c = n.n(l),
        d = {
          src: "/_next/static/media/burger.d2e387e0.svg",
          height: 16,
          width: 28,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = n(28254),
        m = n(51386),
        x = n(60715);
      let getMobileOperatingSystem = () => {
        var e = navigator.userAgent || navigator.vendor;
        return /windows phone/i.test(e)
          ? "Windows Phone"
          : /android/i.test(e)
          ? "Android"
          : /iPad|iPhone|iPod/.test(e)
          ? "iOS"
          : "unknown";
      };
      var h = n(52690),
        u = n(88102),
        notification_item = function (e) {
          let { read: t, title: n, deleteNotification: i, action: o } = e;
          return (0, a.jsxs)("div", {
            className: "w-full flex justify-between items-start gap-2",
            children: [
              !t &&
                (0, a.jsx)("div", {
                  className:
                    "w-[5px] h-[5px] mt-[6px] rounded-full bg-[#7D6FF6]",
                }),
              (0, a.jsxs)("div", {
                className: "flex items-center flex-1 gap-2",
                children: [
                  (function (e) {
                    let t = e.split(" "),
                      n = t.map((e, t) =>
                        /\d/.test(e)
                          ? (0, a.jsxs)(
                              "span",
                              {
                                className:
                                  "font-bold text-white font-EuclidCircularB text-[13px]",
                                children: [e, " "],
                              },
                              "word-".concat(t)
                            )
                          : e + " "
                      );
                    return o
                      ? (0, a.jsx)("a", {
                          className:
                            "font-normal flex-1 text-start text-white font-EuclidCircularB text-[13px] cursor-pointer",
                          href: o,
                          target: "_blank",
                          children: n,
                        })
                      : (0, a.jsx)("p", {
                          className:
                            "font-normal flex-1 text-start text-white font-EuclidCircularB text-[13px]",
                          children: n,
                        });
                  })(n),
                  (0, a.jsx)("button", {
                    onClick: i,
                    className:
                      "bg-transparent border-none outline-none focus:outline-none cursor-pointer",
                    children: (0, a.jsx)(c(), {
                      src: "/x.svg",
                      height: 6,
                      width: 6,
                      alt: "close",
                      className: "mr-2 object-contain",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        p = n(58791),
        f = n(38603),
        w = n(9737),
        g = n(85703),
        components_Notifications = function (e) {
          let { address: t } = e,
            { data: n } = (0, p.Nf)({ address: t }),
            i = s.useRef(null),
            o = s.useRef(null),
            [r, l] = s.useState(!1),
            [d] = (0, p.nx)(),
            [_] = (0, p.sJ)(),
            m = [{ opacity: 1 }, { opacity: 0 }],
            x = { duration: 250, iterations: 1 };
          (0, s.useEffect)(() => {
            function handleClickOutside(e) {
              o.current &&
                !o.current.contains(e.target) &&
                (i.current && i.current.animate(m, x),
                setTimeout(() => {
                  l(!1);
                }, x.duration));
            }
            function handleEscape(e) {
              "Escape" === e.key &&
                (i.current && i.current.animate(m, x),
                setTimeout(() => {
                  l(!1);
                }, x.duration));
            }
            return (
              document.addEventListener("keydown", handleEscape),
              document.addEventListener("mousedown", handleClickOutside),
              () => {
                document.removeEventListener("mousedown", handleClickOutside),
                  document.removeEventListener("keydown", handleEscape);
              }
            );
          }, []);
          let { data: h, isFetching: u } = (0, p.mI)({ address: t || "" }),
            [b] = (0, p.Jm)(),
            j = null != h ? h : [];
          return n
            ? (0, a.jsxs)("div", {
                className:
                  "flex gap-4 lg:gap-6 sl:gap-8 items-center ml-6 mr-2 lg:mr-4 sl:mr-6",
                children: [
                  (0, a.jsx)(w.Z, { className: "max-[1020px]:hidden" }),
                  (0, a.jsxs)("div", {
                    className: "relative",
                    ref: o,
                    children: [
                      j.filter((e) => !e.read).length > 0 &&
                        (0, a.jsx)("div", {
                          className: "absolute top-1 -right-1 z-[10]",
                          children: (0, a.jsx)("div", {
                            className:
                              "w-[12px] h-[12px] text-white font-EuclidCircularB text-[10px] font-normal flex items-center justify-center rounded-full bg-[#FF4D00]",
                            children: j.filter((e) => !e.read).length,
                          }),
                        }),
                      (0, a.jsx)("button", {
                        onClick: () => {
                          r && i.current
                            ? (i.current.animate(m, x),
                              setTimeout(() => {
                                l(!1);
                              }, x.duration))
                            : (l(!0),
                              t &&
                                setTimeout(() => {
                                  d({ address: t });
                                }, 3e3));
                        },
                        className:
                          "mt-[6px] bg-transparent border-none outline-none focus:outline-none cursor-pointer",
                        children: r
                          ? (0, a.jsx)(c(), {
                              className: "object-contain animate-fadeinFast",
                              src: "/notification.svg",
                              alt: "wallet noya",
                              width: 18,
                              height: 18,
                            })
                          : (0, a.jsx)(c(), {
                              className:
                                "object-contain hover:animate-shakeOnceSlightly",
                              src: "/notification-outlined.svg",
                              alt: "wallet noya",
                              width: 18,
                              height: 18,
                            }),
                      }),
                      r &&
                        (0, a.jsx)("div", {
                          ref: i,
                          className:
                            "absolute top-[calc(100%+10px)] right-0 animate-fadeinReallyFast z-[100]",
                          children: (0, a.jsxs)("div", {
                            className:
                              "bg-black gradient-border-button-thick solid rounded-[5px] max-w-[calc(100vw-50px)] w-[270px] flex flex-col justify-start items-center",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "w-full flex justify-between mt-1 items-center",
                                children: [
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-[#ffffff00] select-none font-EuclidCircularB font-semibold text-[12px]",
                                    children: "Clear all",
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-white font-EuclidCircularB font-semibold text-[16px]",
                                    children: "Notifications",
                                  }),
                                  (0, a.jsx)("p", {
                                    onClick: () => {
                                      b({ address: t });
                                    },
                                    className:
                                      "text-[#ffffff83] font-EuclidCircularB font-semibold text-[10px] cursor-pointer",
                                    children: "Clear all",
                                  }),
                                ],
                              }),
                              u
                                ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "gradient-border my-3 !h-[2px]",
                                      }),
                                      (0, a.jsx)(f.Z, {
                                        className: "w-6 h-6 mt-2",
                                      }),
                                    ],
                                  })
                                : 0 === j.length
                                ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "gradient-border my-3 !h-[2px]",
                                      }),
                                      (0, a.jsx)("p", {
                                        className:
                                          "text-white font-EuclidCircularB font-medium mt-3 text-[14px]",
                                        children: "No notifications",
                                      }),
                                    ],
                                  })
                                : j.map((e) =>
                                    (0, a.jsxs)(
                                      s.Fragment,
                                      {
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "gradient-border my-3 !h-[2px]",
                                          }),
                                          (0, a.jsx)(notification_item, {
                                            deleteNotification: () => {
                                              _({
                                                address: t,
                                                notificationId: e._id,
                                              });
                                            },
                                            action: g.ZP.getNotificationAction(
                                              e,
                                              n
                                            ),
                                            read: e.read,
                                            title: e.message,
                                          }),
                                        ],
                                      },
                                      e._id
                                    )
                                  ),
                              (0, a.jsx)("div", { className: "mt-2 !h-[2px]" }),
                            ],
                          }),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        },
        b = n(88644),
        j = n(6743),
        H = n(88494),
        C = n(23874),
        N = n.n(C),
        v = n(81625),
        connected_dropdown = function () {
          let { address: e, isConnected: t } = (0, j.Z)(),
            n = (0, s.useRef)(null),
            [i, o] = (0, s.useState)(!1),
            { name: r } = (0, v.Z)({ address: e });
          (0, s.useEffect)(() => {
            let handleKeyDown = (e) => {
              "Escape" === e.key && i && o(!1);
            };
            function handleClickOutside(e) {
              n.current && !n.current.contains(e.target) && o(!1);
            }
            return (
              document.addEventListener("mousedown", handleClickOutside),
              document.addEventListener("keydown", handleKeyDown),
              () => {
                document.removeEventListener("mousedown", handleClickOutside),
                  document.removeEventListener("keydown", handleKeyDown);
              }
            );
          }, [i]);
          let { disconnect: l } = (0, b.q)();
          return t
            ? (0, a.jsx)("div", {
                className:
                  "relative w-[158px] min-w-[158px] h-[40px] ml-[20px] max-[1020px]:!hidden",
                onClick: () => o(!i),
                ref: n,
                children: (0, a.jsx)("div", {
                  className:
                    "gradient-wrapper-extra rounded-[5px] justify-start items-center w-full h-fit absolute top-0 left-0 right-0 p-px",
                  children: (0, a.jsxs)("div", {
                    className:
                      "rounded-[5px] bg-black min-h-[40px] relative px-[10px]",
                    style: {
                      maxHeight: i ? "calc(100vh - 100px)" : "40px",
                      overflow: "hidden",
                      transition: "max-height 0.45s",
                    },
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "h-[40px] flex items-center justify-between select-none cursor-pointer",
                        children: [
                          (0, a.jsx)(c(), {
                            alt: "Noya Logo",
                            width: 16,
                            height: 16,
                            src: "/noya-small.svg",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "font-RussoOne font-normal text-[14px] text-white",
                            children: r,
                          }),
                          (0, a.jsx)(c(), {
                            style: {
                              transform: i ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.45s",
                            },
                            alt: "Arrow",
                            width: 16,
                            height: 16,
                            src: "/arrow copy.svg",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "w-full pb-3 flex flex-col items-start justify-start gap-3",
                        children: [
                          (0, a.jsx)("div", { className: "gradient-border" }),
                          (0, a.jsx)(N(), {
                            href: "/",
                            className: "w-full",
                            children: (0, a.jsx)(H.Z, {
                              className: "text-[14px] font-Poppins w-full",
                              text: "Dashboard",
                            }),
                          }),
                          (0, a.jsx)(N(), {
                            href: "/profile",
                            className: "w-full",
                            children: (0, a.jsx)(H.Z, {
                              className: "text-[14px] font-Poppins w-full",
                              text: "Profile",
                            }),
                          }),
                          (0, a.jsx)(H.Z, {
                            className:
                              "text-[14px] font-Poppins text-white w-full",
                            text: "Disconnect",
                            onClick: () => {
                              l();
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              })
            : null;
        };
      function NavBar() {
        let e = (0, _.T)(),
          t = getMobileOperatingSystem(),
          n = (0, r.useRouter)(),
          i = (0, a.jsxs)("svg", {
            className: o().Header_logo,
            width: "150",
            height: "59",
            viewBox: "0 0 150 59",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsxs)("g", {
                clipPath: "url(#clip0_2469_22451)",
                className: o().noyaCircle,
                children: [
                  (0, a.jsx)("path", {
                    d: "M32.2082 31.9272C33.7676 31.9272 35.0317 30.6631 35.0317 29.1038C35.0317 27.5444 33.7676 26.2803 32.2082 26.2803C30.6489 26.2803 29.3848 27.5444 29.3848 29.1038C29.3848 30.6631 30.6489 31.9272 32.2082 31.9272Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M84.7688 31.9272C86.3282 31.9272 87.5923 30.6631 87.5923 29.1038C87.5923 27.5444 86.3282 26.2803 84.7688 26.2803C83.2094 26.2803 81.9453 27.5444 81.9453 29.1038C81.9453 30.6631 83.2094 31.9272 84.7688 31.9272Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M39.9065 13.3447C41.4659 13.3447 42.73 12.0806 42.73 10.5212C42.73 8.96187 41.4659 7.69775 39.9065 7.69775C38.3471 7.69775 37.083 8.96187 37.083 10.5212C37.083 12.0806 38.3471 13.3447 39.9065 13.3447Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M77.0706 50.5117C78.6299 50.5117 79.894 49.2476 79.894 47.6882C79.894 46.1289 78.6299 44.8647 77.0706 44.8647C75.5112 44.8647 74.2471 46.1289 74.2471 47.6882C74.2471 49.2476 75.5112 50.5117 77.0706 50.5117Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M58.4885 5.64697C60.0479 5.64697 61.312 4.38285 61.312 2.82348C61.312 1.26412 60.0479 0 58.4885 0C56.9292 0 55.665 1.26412 55.665 2.82348C55.665 4.38285 56.9292 5.64697 58.4885 5.64697Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M58.4885 58.2095C60.0479 58.2095 61.312 56.9454 61.312 55.386C61.312 53.8266 60.0479 52.5625 58.4885 52.5625C56.9292 52.5625 55.665 53.8266 55.665 55.386C55.665 56.9454 56.9292 58.2095 58.4885 58.2095Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M58.5007 5.64697C60.0601 5.64697 61.3242 4.38285 61.3242 2.82348C61.3242 1.26412 60.0601 0 58.5007 0C56.9414 0 55.6772 1.26412 55.6772 2.82348C55.6772 4.38285 56.9414 5.64697 58.5007 5.64697Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M58.5007 58.2095C60.0601 58.2095 61.3242 56.9454 61.3242 55.386C61.3242 53.8266 60.0601 52.5625 58.5007 52.5625C56.9414 52.5625 55.6772 53.8266 55.6772 55.386C55.6772 56.9454 56.9414 58.2095 58.5007 58.2095Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M77.72 14.0063C79.2793 14.0063 80.5435 12.7422 80.5435 11.1829C80.5435 9.62349 79.2793 8.35938 77.72 8.35938C76.1606 8.35938 74.8965 9.62349 74.8965 11.1829C74.8965 12.7422 76.1606 14.0063 77.72 14.0063Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M39.2795 49.8501C40.8389 49.8501 42.103 48.586 42.103 47.0266C42.103 45.4672 40.8389 44.2031 39.2795 44.2031C37.7202 44.2031 36.4561 45.4672 36.4561 47.0266C36.4561 48.586 37.7202 49.8501 39.2795 49.8501Z",
                    fill: "white",
                  }),
                ],
              }),
              (0, a.jsxs)("g", {
                clipPath: "url(#clip0_2469_22451)",
                children: [
                  (0, a.jsx)("path", {
                    d: "M20.3888 17.2495V40.9579H17.6122L3.38621 23.279V40.9604H0V17.252H2.77659L17.0026 34.9333V17.252H20.3888V17.2495Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M46.1479 29.1061C46.1479 22.3189 51.3803 17.252 58.4982 17.252C65.6162 17.252 70.7819 22.2844 70.7819 29.1061C70.7819 35.9279 65.5495 40.9603 58.4982 40.9603C51.4469 40.9603 46.1479 35.8934 46.1479 29.1061ZM67.4722 29.1061C67.4722 23.9725 63.6318 20.1988 58.4982 20.1988C53.3646 20.1988 49.4576 23.9725 49.4576 29.1061C49.4576 34.2397 53.298 38.0134 58.4982 38.0134C63.6985 38.0134 67.4722 34.2397 67.4722 29.1061Z",
                    fill: "#7D6FF6",
                  }),
                  (0, a.jsx)("path", {
                    d: "M104.661 32.7638V40.9603H101.307V32.6972L91.8916 17.252H95.5147L103.102 29.7503L110.723 17.252H114.077L104.661 32.7638Z",
                    fill: "white",
                  }),
                  (0, a.jsx)("path", {
                    d: "M143.835 35.032H131.235L128.627 40.9603H125.137L135.873 17.252H139.227L149.998 40.9603H146.441L143.832 35.032H143.835ZM142.65 32.322L137.536 20.7048L132.422 32.322H142.65Z",
                    fill: "white",
                  }),
                ],
              }),
              (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                  id: "clip0_2469_22451",
                  children: (0, a.jsx)("rect", {
                    width: "150",
                    height: "58.2097",
                    fill: "white",
                  }),
                }),
              }),
            ],
          }),
          { address: s } = (0, j.Z)(),
          [l] = (0, p.nd)(),
          { data: h, isFetching: u } = (0, p.Nf)({ address: s }),
          handleProtectedRoute = (e) => {
            s
              ? n.pathname !== "/".concat(e) &&
                (h
                  ? n.push({ pathname: "/".concat(e) })
                  : !h && u
                  ? n.push({ pathname: "/space-race-onboarding" })
                  : l({ address: s })
                      .unwrap()
                      .then((t) => {
                        t
                          ? n.push({ pathname: "/".concat(e) })
                          : n.push({ pathname: "/space-race-onboarding" });
                      })
                      .catch((e) => {
                        n.push({ pathname: "/space-race-onboarding" });
                      }))
              : n.push({ pathname: "/space-race-onboarding" });
          };
        return (0, a.jsxs)("div", {
          className: o().Header_content_box,
          children: [
            (0, a.jsx)(N(), {
              href: "/",
              children:
                "iOS" === t
                  ? (0, a.jsx)(c(), {
                      src: m.Z,
                      alt: "noya-logo",
                      className: o().Header_logo,
                    })
                  : (0, a.jsx)(a.Fragment, { children: i }),
            }),
            (0, a.jsxs)("div", {
              className: o().Header_items_box,
              children: [
                (0, a.jsxs)("ul", {
                  className: o().Header_links_box,
                  children: [
                    (0, a.jsxs)("li", {
                      className: o().Header_more_wrapper,
                      children: [
                        (0, a.jsx)("div", {
                          className: o().Header_links_box_effect,
                        }),
                        (0, a.jsx)("div", {
                          className: o().Header_links_box_button,
                          onClick: () => {
                            n.push("/");
                          },
                          children: "Protocols",
                        }),
                        (0, a.jsx)("div", {
                          className: o().more,
                          children: (0, a.jsx)("div", {
                            className: "animate-fadeinReallyFast ".concat(
                              o().more_child_wrapper
                            ),
                            children: (0, a.jsx)("div", {
                              className: "".concat(o().more_child),
                              children: [
                                {
                                  title: "Omnivaults",
                                  onclick: () => n.push("/"),
                                },
                                {
                                  title: "Agent",
                                  onclick: () => handleProtectedRoute("Agent"),
                                  comingSoon: !0,
                                  tooltip: "The Agent module is currently in development",
                                },
                                {
                                  title: "Borrowing Optimizer",
                                  onclick: () => {
                                    window.open(
                                      "https://noya-borrow.vercel.app/",
                                      "_blank"
                                    );
                                  },
                                },
                              ].map((e, t) =>
                                (0, a.jsxs)(
                                  "li",
                                  {
                                    onClick: e.comingSoon ? void 0 : e.onclick,
                                    children: [
                                      (0, a.jsx)("div", {
                                        className: o().Header_links_box_effect,
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: ""
                                          .concat(o().Header_links_box_button, " ")
                                          .concat(e.comingSoon ? o().coming_soon : ""),
                                        "data-tooltip": e.tooltip,
                                        children: [
                                          e.title,
                                          e.comingSoon &&
                                            (0, a.jsx)("span", {
                                              className: o().soon_label,
                                              children: "Soon",
                                            }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                    [
                      {
                        title: "Space Race",
                        onclick: () => handleProtectedRoute("space-race"),
                        comingSoon: !1,
                        tooltip: "",
                      },
                      {
                        title: "DeFi",
                        onclick: () => handleProtectedRoute("deFi"),
                        comingSoon: !0,
                        tooltip: "The DeFi module is currently in development",
                      },
                    ].map((e, t) =>
                      (0, a.jsxs)(
                        "li",
                        {
                          onClick: e.comingSoon ? void 0 : e.onclick,
                          children: [
                            (0, a.jsx)("div", {
                              className: o().Header_links_box_effect,
                            }),
                            (0, a.jsxs)("div", {
                              className: ""
                                .concat(o().Header_links_box_button, " ")
                                .concat(e.comingSoon ? o().coming_soon : ""),
                              "data-tooltip": e.tooltip,
                              children: [
                                e.title,
                                e.comingSoon &&
                                  (0, a.jsx)("span", {
                                    className: o().soon_label,
                                    children: "Soon",
                                  }),
                              ],
                            }),
                          ],
                        },
                        t
                      )
                    ),
                    (0, a.jsxs)("li", {
                      className: o().Header_more_wrapper,
                      children: [
                        (0, a.jsx)("div", {
                          className: o().Header_links_box_effect,
                        }),
                        (0, a.jsx)("div", {
                          className: o().Header_links_box_button,
                          children: "More",
                        }),
                        (0, a.jsx)("div", {
                          className: o().more,
                          children: (0, a.jsx)("div", {
                            className: "animate-fadeinReallyFast ".concat(
                              o().more_child_wrapper
                            ),
                            children: (0, a.jsx)("div", {
                              className: "".concat(o().more_child),
                              children: [
                                {
                                  title: "ZKML",
                                  onclick: () => window.open("/zkml", "_blank"),
                                },
                                {
                                  title: "Docs",
                                  onclick: () =>
                                    window.open(
                                      "https://docs.noya.network",
                                      "_blank"
                                    ),
                                },
                              ].map((e) =>
                                (0, a.jsx)(
                                  H.Z,
                                  {
                                    className: "".concat(o().more_text),
                                    text: e.title,
                                    onClick: e.onclick,
                                  },
                                  e.title
                                )
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(Connectbutton, { hidden: !0 }),
              ],
            }),
            (0, a.jsx)(c(), {
              src: d,
              alt: "burger-menu",
              className: o().Header_burger_icon,
              onClick: () => e((0, x.dl)(!0)),
            }),
          ],
        });
      }
      let Connectbutton = (e) => {
        let { className: t, hidden: n = !1 } = e,
          [i, r] = (0, s.useState)(!1),
          l = (0, s.useRef)(null),
          c = (0, _.T)(),
          d = (0, j.Z)(),
          { disconnect: m } = (0, b.q)(),
          disconnectWallet = () => {
            c((0, u.Gu)(void 0)), m();
          };
        return (
          (0, s.useEffect)(() => {
            let close = (e) => {
              l.current && !l.current.contains(e.target) && r(!1);
            };
            return (
              window.addEventListener("click", close),
              () => {
                window.removeEventListener("click", close);
              }
            );
          }, []),
          (0, s.useEffect)(() => {
            d.address
              ? c((0, u.Gu)({ account: d.address }))
              : disconnectWallet();
          }, [d.address]),
          (0, a.jsx)(h.NL.Custom, {
            children: (e) => {
              let {
                  account: s,
                  chain: c,
                  openConnectModal: d,
                  authenticationStatus: _,
                  mounted: m,
                } = e,
                x =
                  m &&
                  "loading" !== _ &&
                  s &&
                  c &&
                  (!_ || "authenticated" === _);
              return x
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(components_Notifications, {
                        address: s.address,
                      }),
                      (0, a.jsx)(connected_dropdown, {}),
                    ],
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      x &&
                        (0, a.jsx)(components_Notifications, {
                          address: s.address,
                        }),
                      (0, a.jsx)("div", {
                        ref: l,
                        onClick: () => {
                          x ? r((e) => !e) : d();
                        },
                        style: {
                          borderRadius: i ? "5px 5px 0 0" : "",
                          borderBottom: i ? "none" : "",
                          backgroundColor: i ? "black" : "",
                        },
                        className: ""
                          .concat(t, " ")
                          .concat(
                            ""
                              .concat(o().Header_items_box_button, " ")
                              .concat(n && o().hidden, " ")
                              .concat(o().color_1),
                            " "
                          )
                          .concat(n && "max-[1020px]:!hidden"),
                        children: "Connect Wallet",
                      }),
                    ],
                  });
            },
          })
        );
      };
      var components_Header = () =>
        (0, a.jsxs)("section", {
          className: o().Header_container,
          children: [
            (0, a.jsx)(NavBar, {}),
            (0, a.jsx)("div", { className: o().Header_bottom_line }),
          ],
        });
    },
    81625: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return getShortenedAddress;
        },
      });
      var a = n(47505),
        i = n(28378);
      function getShortenedAddress(e) {
        return e
          ? ""
              .concat(e.slice(0, 4), "...")
              .concat(e.slice(e.length - 4, e.length))
          : "";
      }
      t.Z = function (e) {
        let {
            address: t,
            hideAddress: n = !0,
            showAddressIfENSNotFound: o = !0,
          } = e,
          { data: s, isLoading: r } = (0, i.F)({ address: t, chainId: a.R.id });
        return t
          ? {
              name:
                null != s ? s : o ? (n ? getShortenedAddress(t) : t) : "N/A",
              isLoading: r,
            }
          : { name: "", isLoading: !1 };
      };
    },
    75961: function (e) {
      e.exports = {
        Header_container: "Header_Header_container__p4llD",
        Header_bottom_line: "Header_Header_bottom_line__e6lSV",
        Header_content_box: "Header_Header_content_box__XdE1w",
        Header_logo: "Header_Header_logo__tJOhA",
        noyaCircle: "Header_noyaCircle__CaAQ5",
        rotate: "Header_rotate__sLKLH",
        Header_items_box: "Header_Header_items_box__w1iKW",
        Header_links_box: "Header_Header_links_box__e52bJ",
        Header_more_wrapper: "Header_Header_more_wrapper__wmtU2",
        more: "Header_more__ExxJY",
        more_child: "Header_more_child__Nmg15",
        more_child_wrapper: "Header_more_child_wrapper__olQZF",
        more_text: "Header_more_text__POUfa",
        Header_links_box_effect: "Header_Header_links_box_effect__NzrVP",
        AnimateBorder: "Header_AnimateBorder__qCqQm",
        Header_links_box_button: "Header_Header_links_box_button__F8ERe",
        coming_soon: "Header_coming_soon__fTp76",
        soon_label: "Header_soon_label__O9e_K",
        Header_items_box_button: "Header_Header_items_box_button__aXdLV",
        color_1: "Header_color_1___kmoi",
        Header_burger_icon: "Header_Header_burger_icon__X61QQ",
        Header_items_box_button_connected:
          "Header_Header_items_box_button_connected__A4ZaE",
        Header_items_box_button_connected_img:
          "Header_Header_items_box_button_connected_img__CZ3RL",
        Header_items_box_button_connected_icon:
          "Header_Header_items_box_button_connected_icon__JCbua",
        hidden: "Header_hidden__pcG11",
        AccountDropdown_container: "Header_AccountDropdown_container__vihO9",
        AccountDropdown_container_line:
          "Header_AccountDropdown_container_line__Fg2zu",
        AccountDropdown_container_item:
          "Header_AccountDropdown_container_item___KMQt",
      };
    },
  },
]);
