"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6226],
  {
    97038: function (e, t, s) {
      s.d(t, {
        ConfigCtrl: function () {
          return I;
        },
        zv: function () {
          return f;
        },
        uA: function () {
          return g;
        },
        ExplorerCtrl: function () {
          return S;
        },
        jb: function () {
          return x;
        },
        OptionsCtrl: function () {
          return w;
        },
        AV: function () {
          return u;
        },
        ThemeCtrl: function () {
          return z;
        },
        ToastCtrl: function () {
          return F;
        },
      }),
        Symbol();
      let r = Symbol(),
        o = Object.getPrototypeOf,
        n = new WeakMap(),
        l = (e) =>
          e &&
          (n.has(e)
            ? n.get(e)
            : o(e) === Object.prototype || o(e) === Array.prototype),
        y = (e) => (l(e) && e[r]) || null,
        h = (e, t = !0) => {
          n.set(e, t);
        },
        isObject = (e) => "object" == typeof e && null !== e,
        i = new WeakMap(),
        a = new WeakSet(),
        buildProxyFunction = (
          e = Object.is,
          t = (e, t) => new Proxy(e, t),
          s = (e) =>
            isObject(e) &&
            !a.has(e) &&
            (Array.isArray(e) || !(Symbol.iterator in e)) &&
            !(e instanceof WeakMap) &&
            !(e instanceof WeakSet) &&
            !(e instanceof Error) &&
            !(e instanceof Number) &&
            !(e instanceof Date) &&
            !(e instanceof String) &&
            !(e instanceof RegExp) &&
            !(e instanceof ArrayBuffer),
          r = (e) => {
            switch (e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                throw e;
            }
          },
          o = new WeakMap(),
          n = (e, t, s = r) => {
            let c = o.get(e);
            if ((null == c ? void 0 : c[0]) === t) return c[1];
            let d = Array.isArray(e)
              ? []
              : Object.create(Object.getPrototypeOf(e));
            return (
              h(d, !0),
              o.set(e, [t, d]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(d, t)) return;
                let r = Reflect.get(e, t),
                  o = { value: r, enumerable: !0, configurable: !0 };
                if (a.has(r)) h(r, !1);
                else if (r instanceof Promise)
                  delete o.value, (o.get = () => s(r));
                else if (i.has(r)) {
                  let [e, t] = i.get(r);
                  o.value = n(e, t(), s);
                }
                Object.defineProperty(d, t, o);
              }),
              Object.preventExtensions(d)
            );
          },
          c = new WeakMap(),
          d = [1, 1],
          p = (r) => {
            if (!isObject(r)) throw Error("object required");
            let o = c.get(r);
            if (o) return o;
            let u = d[0],
              f = new Set(),
              notifyUpdate = (e, t = ++d[0]) => {
                u !== t && ((u = t), f.forEach((s) => s(e, t)));
              },
              m = d[1],
              ensureVersion = (e = ++d[1]) => (
                m === e ||
                  f.size ||
                  ((m = e),
                  b.forEach(([t]) => {
                    let s = t[1](e);
                    s > u && (u = s);
                  })),
                u
              ),
              createPropListener = (e) => (t, s) => {
                let r = [...t];
                (r[1] = [e, ...r[1]]), notifyUpdate(r, s);
              },
              b = new Map(),
              addPropListener = (e, t) => {
                if (b.has(e)) throw Error("prop listener already exists");
                if (f.size) {
                  let s = t[3](createPropListener(e));
                  b.set(e, [t, s]);
                } else b.set(e, [t]);
              },
              removePropListener = (e) => {
                var t;
                let s = b.get(e);
                s && (b.delete(e), null == (t = s[1]) || t.call(s));
              },
              addListener = (e) => {
                f.add(e),
                  1 === f.size &&
                    b.forEach(([e, t], s) => {
                      if (t) throw Error("remove already exists");
                      let r = e[3](createPropListener(s));
                      b.set(s, [e, r]);
                    });
                let removeListener = () => {
                  f.delete(e),
                    0 === f.size &&
                      b.forEach(([e, t], s) => {
                        t && (t(), b.set(s, [e]));
                      });
                };
                return removeListener;
              },
              g = Array.isArray(r)
                ? []
                : Object.create(Object.getPrototypeOf(r)),
              v = {
                deleteProperty(e, t) {
                  let s = Reflect.get(e, t);
                  removePropListener(t);
                  let r = Reflect.deleteProperty(e, t);
                  return r && notifyUpdate(["delete", [t], s]), r;
                },
                set(t, r, o, n) {
                  let d = Reflect.has(t, r),
                    u = Reflect.get(t, r, n);
                  if (d && (e(u, o) || (c.has(o) && e(u, c.get(o))))) return !0;
                  removePropListener(r), isObject(o) && (o = y(o) || o);
                  let f = o;
                  if (o instanceof Promise)
                    o.then((e) => {
                      (o.status = "fulfilled"),
                        (o.value = e),
                        notifyUpdate(["resolve", [r], e]);
                    }).catch((e) => {
                      (o.status = "rejected"),
                        (o.reason = e),
                        notifyUpdate(["reject", [r], e]);
                    });
                  else {
                    !i.has(o) && s(o) && (f = p(o));
                    let e = !a.has(f) && i.get(f);
                    e && addPropListener(r, e);
                  }
                  return (
                    Reflect.set(t, r, f, n),
                    notifyUpdate(["set", [r], o, u]),
                    !0
                  );
                },
              },
              w = t(g, v);
            c.set(r, w);
            let C = [g, ensureVersion, n, addListener];
            return (
              i.set(w, C),
              Reflect.ownKeys(r).forEach((e) => {
                let t = Object.getOwnPropertyDescriptor(r, e);
                "value" in t &&
                  ((w[e] = r[e]), delete t.value, delete t.writable),
                  Object.defineProperty(g, e, t);
              }),
              w
            );
          }
        ) => [p, i, a, e, t, s, r, o, n, c, d],
        [c] = buildProxyFunction();
      function proxy(e = {}) {
        return c(e);
      }
      function subscribe(e, t, s) {
        let r;
        let o = i.get(e);
        o || console.warn("Please use proxy object");
        let n = [],
          a = o[3],
          c = !1,
          d = a((e) => {
            if ((n.push(e), s)) {
              t(n.splice(0));
              return;
            }
            r ||
              (r = Promise.resolve().then(() => {
                (r = void 0), c && t(n.splice(0));
              }));
          });
        return (
          (c = !0),
          () => {
            (c = !1), d();
          }
        );
      }
      var d = s(55872).Buffer;
      let p = proxy({
          history: ["ConnectWallet"],
          view: "ConnectWallet",
          data: void 0,
        }),
        u = {
          state: p,
          subscribe: (e) => subscribe(p, () => e(p)),
          push(e, t) {
            e !== p.view &&
              ((p.view = e), t && (p.data = t), p.history.push(e));
          },
          reset(e) {
            (p.view = e), (p.history = [e]);
          },
          replace(e) {
            p.history.length > 1 &&
              ((p.history[p.history.length - 1] = e), (p.view = e));
          },
          goBack() {
            if (p.history.length > 1) {
              p.history.pop();
              let [e] = p.history.slice(-1);
              p.view = e;
            }
          },
          setData(e) {
            p.data = e;
          },
        },
        f = {
          WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
          WCM_VERSION: "WCM_VERSION",
          RECOMMENDED_WALLET_AMOUNT: 9,
          isMobile: () =>
            "undefined" != typeof window &&
            !!(
              window.matchMedia("(pointer:coarse)").matches ||
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
                navigator.userAgent
              )
            ),
          isAndroid: () =>
            f.isMobile() &&
            navigator.userAgent.toLowerCase().includes("android"),
          isIos() {
            let e = navigator.userAgent.toLowerCase();
            return f.isMobile() && (e.includes("iphone") || e.includes("ipad"));
          },
          isHttpUrl: (e) => e.startsWith("http://") || e.startsWith("https://"),
          isArray: (e) => Array.isArray(e) && e.length > 0,
          isTelegram: () =>
            "undefined" != typeof window &&
            (!!window.TelegramWebviewProxy ||
              !!window.Telegram ||
              !!window.TelegramWebviewProxyProto),
          formatNativeUrl(e, t, s) {
            if (f.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
            let r = e;
            r.includes("://") ||
              ((r = e.replaceAll("/", "").replaceAll(":", "")),
              (r = `${r}://`)),
              r.endsWith("/") || (r = `${r}/`),
              this.setWalletConnectDeepLink(r, s);
            let o = encodeURIComponent(t);
            return `${r}wc?uri=${o}`;
          },
          formatUniversalUrl(e, t, s) {
            if (!f.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
            let r = e;
            if (r.startsWith("https://t.me")) {
              let e = d.from(t).toString("base64").replace(/[=]/g, "");
              r.endsWith("/") && (r = r.slice(0, -1)),
                this.setWalletConnectDeepLink(r, s);
              let o = new URL(r);
              o.searchParams.set("startapp", e);
              let n = o.toString();
              return n;
            }
            r.endsWith("/") || (r = `${r}/`),
              this.setWalletConnectDeepLink(r, s);
            let o = encodeURIComponent(t);
            return `${r}wc?uri=${o}`;
          },
          wait: async (e) =>
            new Promise((t) => {
              setTimeout(t, e);
            }),
          openHref(e, t) {
            let s = this.isTelegram() ? "_blank" : t;
            window.open(e, s, "noreferrer noopener");
          },
          setWalletConnectDeepLink(e, t) {
            try {
              localStorage.setItem(
                f.WALLETCONNECT_DEEPLINK_CHOICE,
                JSON.stringify({ href: e, name: t })
              );
            } catch (e) {
              console.info("Unable to set WalletConnect deep link");
            }
          },
          setWalletConnectAndroidDeepLink(e) {
            try {
              let [t] = e.split("?");
              localStorage.setItem(
                f.WALLETCONNECT_DEEPLINK_CHOICE,
                JSON.stringify({ href: t, name: "Android" })
              );
            } catch (e) {
              console.info("Unable to set WalletConnect android deep link");
            }
          },
          removeWalletConnectDeepLink() {
            try {
              localStorage.removeItem(f.WALLETCONNECT_DEEPLINK_CHOICE);
            } catch (e) {
              console.info("Unable to remove WalletConnect deep link");
            }
          },
          setModalVersionInStorage() {
            try {
              "undefined" != typeof localStorage &&
                localStorage.setItem(f.WCM_VERSION, "2.7.0");
            } catch (e) {
              console.info("Unable to set Web3Modal version in storage");
            }
          },
          getWalletRouterData() {
            var e;
            let t = null == (e = u.state.data) ? void 0 : e.Wallet;
            if (!t) throw Error('Missing "Wallet" view data');
            return t;
          },
        },
        m =
          "undefined" != typeof location &&
          (location.hostname.includes("localhost") ||
            location.protocol.includes("https")),
        b = proxy({
          enabled: m,
          userSessionId: "",
          events: [],
          connectedWalletId: void 0,
        }),
        g = {
          state: b,
          subscribe: (e) =>
            subscribe(b.events, () =>
              e(
                (function (e, t) {
                  let s = i.get(e);
                  s || console.warn("Please use proxy object");
                  let [r, o, n] = s;
                  return n(r, o(), void 0);
                })(b.events[b.events.length - 1])
              )
            ),
          initialize() {
            b.enabled &&
              void 0 !== (null == crypto ? void 0 : crypto.randomUUID) &&
              (b.userSessionId = crypto.randomUUID());
          },
          setConnectedWalletId(e) {
            b.connectedWalletId = e;
          },
          click(e) {
            if (b.enabled) {
              let t = {
                type: "CLICK",
                name: e.name,
                userSessionId: b.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              b.events.push(t);
            }
          },
          track(e) {
            if (b.enabled) {
              let t = {
                type: "TRACK",
                name: e.name,
                userSessionId: b.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              b.events.push(t);
            }
          },
          view(e) {
            if (b.enabled) {
              let t = {
                type: "VIEW",
                name: e.name,
                userSessionId: b.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              b.events.push(t);
            }
          },
        },
        v = proxy({
          chains: void 0,
          walletConnectUri: void 0,
          isAuth: !1,
          isCustomDesktop: !1,
          isCustomMobile: !1,
          isDataLoaded: !1,
          isUiLoaded: !1,
        }),
        w = {
          state: v,
          subscribe: (e) => subscribe(v, () => e(v)),
          setChains(e) {
            v.chains = e;
          },
          setWalletConnectUri(e) {
            v.walletConnectUri = e;
          },
          setIsCustomDesktop(e) {
            v.isCustomDesktop = e;
          },
          setIsCustomMobile(e) {
            v.isCustomMobile = e;
          },
          setIsDataLoaded(e) {
            v.isDataLoaded = e;
          },
          setIsUiLoaded(e) {
            v.isUiLoaded = e;
          },
          setIsAuth(e) {
            v.isAuth = e;
          },
        },
        C = proxy({
          projectId: "",
          mobileWallets: void 0,
          desktopWallets: void 0,
          walletImages: void 0,
          chains: void 0,
          enableAuthMode: !1,
          enableExplorer: !0,
          explorerExcludedWalletIds: void 0,
          explorerRecommendedWalletIds: void 0,
          termsOfServiceUrl: void 0,
          privacyPolicyUrl: void 0,
        }),
        I = {
          state: C,
          subscribe: (e) => subscribe(C, () => e(C)),
          setConfig(e) {
            var t, s;
            g.initialize(),
              w.setChains(e.chains),
              w.setIsAuth(!!e.enableAuthMode),
              w.setIsCustomMobile(
                !!(null == (t = e.mobileWallets) ? void 0 : t.length)
              ),
              w.setIsCustomDesktop(
                !!(null == (s = e.desktopWallets) ? void 0 : s.length)
              ),
              f.setModalVersionInStorage(),
              Object.assign(C, e);
          },
        };
      var L = Object.defineProperty,
        O = Object.getOwnPropertySymbols,
        W = Object.prototype.hasOwnProperty,
        j = Object.prototype.propertyIsEnumerable,
        __defNormalProp$2 = (e, t, s) =>
          t in e
            ? L(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        __spreadValues$2 = (e, t) => {
          for (var s in t || (t = {}))
            W.call(t, s) && __defNormalProp$2(e, s, t[s]);
          if (O)
            for (var s of O(t)) j.call(t, s) && __defNormalProp$2(e, s, t[s]);
          return e;
        };
      let E = "https://explorer-api.walletconnect.com",
        P = "js-2.7.0";
      async function fetchListings(e, t) {
        let s = __spreadValues$2({ sdkType: "wcm", sdkVersion: P }, t),
          r = new URL(e, E);
        r.searchParams.append("projectId", I.state.projectId),
          Object.entries(s).forEach(([e, t]) => {
            t && r.searchParams.append(e, String(t));
          });
        let o = await fetch(r);
        return o.json();
      }
      let _ = {
        getDesktopListings: async (e) =>
          fetchListings("/w3m/v1/getDesktopListings", e),
        getMobileListings: async (e) =>
          fetchListings("/w3m/v1/getMobileListings", e),
        getInjectedListings: async (e) =>
          fetchListings("/w3m/v1/getInjectedListings", e),
        getAllListings: async (e) => fetchListings("/w3m/v1/getAllListings", e),
        getWalletImageUrl: (e) =>
          `${E}/w3m/v1/getWalletImage/${e}?projectId=${I.state.projectId}&sdkType=wcm&sdkVersion=${P}`,
        getAssetImageUrl: (e) =>
          `${E}/w3m/v1/getAssetImage/${e}?projectId=${I.state.projectId}&sdkType=wcm&sdkVersion=${P}`,
      };
      var A = Object.defineProperty,
        U = Object.getOwnPropertySymbols,
        k = Object.prototype.hasOwnProperty,
        M = Object.prototype.propertyIsEnumerable,
        __defNormalProp$1 = (e, t, s) =>
          t in e
            ? A(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        __spreadValues$1 = (e, t) => {
          for (var s in t || (t = {}))
            k.call(t, s) && __defNormalProp$1(e, s, t[s]);
          if (U)
            for (var s of U(t)) M.call(t, s) && __defNormalProp$1(e, s, t[s]);
          return e;
        };
      let N = f.isMobile(),
        D = proxy({
          wallets: { listings: [], total: 0, page: 1 },
          search: { listings: [], total: 0, page: 1 },
          recomendedWallets: [],
        }),
        S = {
          state: D,
          async getRecomendedWallets() {
            let {
              explorerRecommendedWalletIds: e,
              explorerExcludedWalletIds: t,
            } = I.state;
            if ("NONE" === e || ("ALL" === t && !e)) return D.recomendedWallets;
            if (f.isArray(e)) {
              let t = e.join(","),
                { listings: s } = await _.getAllListings({ recommendedIds: t }),
                r = Object.values(s);
              r.sort((t, s) => {
                let r = e.indexOf(t.id),
                  o = e.indexOf(s.id);
                return r - o;
              }),
                (D.recomendedWallets = r);
            } else {
              let { chains: e, isAuth: s } = w.state,
                r = null == e ? void 0 : e.join(","),
                o = f.isArray(t),
                n = {
                  page: 1,
                  sdks: s ? "auth_v1" : void 0,
                  entries: f.RECOMMENDED_WALLET_AMOUNT,
                  chains: r,
                  version: 2,
                  excludedIds: o ? t.join(",") : void 0,
                },
                { listings: i } = N
                  ? await _.getMobileListings(n)
                  : await _.getDesktopListings(n);
              D.recomendedWallets = Object.values(i);
            }
            return D.recomendedWallets;
          },
          async getWallets(e) {
            let t = __spreadValues$1({}, e),
              {
                explorerRecommendedWalletIds: s,
                explorerExcludedWalletIds: r,
              } = I.state,
              { recomendedWallets: o } = D;
            if ("ALL" === r) return D.wallets;
            o.length
              ? (t.excludedIds = o.map((e) => e.id).join(","))
              : f.isArray(s) && (t.excludedIds = s.join(",")),
              f.isArray(r) &&
                (t.excludedIds = [t.excludedIds, r].filter(Boolean).join(",")),
              w.state.isAuth && (t.sdks = "auth_v1");
            let { page: n, search: i } = e,
              { listings: a, total: c } = N
                ? await _.getMobileListings(t)
                : await _.getDesktopListings(t),
              d = Object.values(a),
              p = i ? "search" : "wallets";
            return (
              (D[p] = {
                listings: [...D[p].listings, ...d],
                total: c,
                page: null != n ? n : 1,
              }),
              { listings: d, total: c }
            );
          },
          getWalletImageUrl: (e) => _.getWalletImageUrl(e),
          getAssetImageUrl: (e) => _.getAssetImageUrl(e),
          resetSearch() {
            D.search = { listings: [], total: 0, page: 1 };
          },
        },
        T = proxy({ open: !1 }),
        x = {
          state: T,
          subscribe: (e) => subscribe(T, () => e(T)),
          open: async (e) =>
            new Promise((t) => {
              let { isUiLoaded: s, isDataLoaded: r } = w.state;
              if (
                (f.removeWalletConnectDeepLink(),
                w.setWalletConnectUri(null == e ? void 0 : e.uri),
                w.setChains(null == e ? void 0 : e.chains),
                u.reset("ConnectWallet"),
                s && r)
              )
                (T.open = !0), t();
              else {
                let e = setInterval(() => {
                  let s = w.state;
                  s.isUiLoaded &&
                    s.isDataLoaded &&
                    (clearInterval(e), (T.open = !0), t());
                }, 200);
              }
            }),
          close() {
            T.open = !1;
          },
        };
      var $ = Object.defineProperty,
        R = Object.getOwnPropertySymbols,
        V = Object.prototype.hasOwnProperty,
        H = Object.prototype.propertyIsEnumerable,
        __defNormalProp = (e, t, s) =>
          t in e
            ? $(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        __spreadValues = (e, t) => {
          for (var s in t || (t = {}))
            V.call(t, s) && __defNormalProp(e, s, t[s]);
          if (R)
            for (var s of R(t)) H.call(t, s) && __defNormalProp(e, s, t[s]);
          return e;
        };
      let K = proxy({
          themeMode:
            "undefined" != typeof matchMedia &&
            matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
        }),
        z = {
          state: K,
          subscribe: (e) => subscribe(K, () => e(K)),
          setThemeConfig(e) {
            let { themeMode: t, themeVariables: s } = e;
            t && (K.themeMode = t),
              s && (K.themeVariables = __spreadValues({}, s));
          },
        },
        B = proxy({ open: !1, message: "", variant: "success" }),
        F = {
          state: B,
          subscribe: (e) => subscribe(B, () => e(B)),
          openToast(e, t) {
            (B.open = !0), (B.message = e), (B.variant = t);
          },
          closeToast() {
            B.open = !1;
          },
        };
    },
    46226: function (e, t, s) {
      s.d(t, {
        WalletConnectModal: function () {
          return WalletConnectModal;
        },
      });
      var r = s(97038);
      let WalletConnectModal = class WalletConnectModal {
        constructor(e) {
          (this.openModal = r.jb.open),
            (this.closeModal = r.jb.close),
            (this.subscribeModal = r.jb.subscribe),
            (this.setTheme = r.ThemeCtrl.setThemeConfig),
            r.ThemeCtrl.setThemeConfig(e),
            r.ConfigCtrl.setConfig(e),
            this.initUi();
        }
        async initUi() {
          if ("undefined" != typeof window) {
            await s.e(422).then(s.bind(s, 80422));
            let e = document.createElement("wcm-modal");
            document.body.insertAdjacentElement("beforeend", e),
              r.OptionsCtrl.setIsUiLoaded(!0);
          }
        }
      };
    },
  },
]);
