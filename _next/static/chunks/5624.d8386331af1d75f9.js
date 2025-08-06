(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5624],
  {
    72165: function (o, l, _) {
      "use strict";
      function getBrowerCrypto() {
        return (
          (null === _.g || void 0 === _.g ? void 0 : _.g.crypto) ||
          (null === _.g || void 0 === _.g ? void 0 : _.g.msCrypto) ||
          {}
        );
      }
      function getSubtleCrypto() {
        let o = getBrowerCrypto();
        return o.subtle || o.webkitSubtle;
      }
      Object.defineProperty(l, "__esModule", { value: !0 }),
        (l.isBrowserCryptoAvailable =
          l.getSubtleCrypto =
          l.getBrowerCrypto =
            void 0),
        (l.getBrowerCrypto = getBrowerCrypto),
        (l.getSubtleCrypto = getSubtleCrypto),
        (l.isBrowserCryptoAvailable = function () {
          return !!getBrowerCrypto() && !!getSubtleCrypto();
        });
    },
    73027: function (o, l, _) {
      "use strict";
      var f = _(21481);
      function isReactNative() {
        return (
          "undefined" == typeof document &&
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function isNode() {
        return (
          void 0 !== f && void 0 !== f.versions && void 0 !== f.versions.node
        );
      }
      Object.defineProperty(l, "__esModule", { value: !0 }),
        (l.isBrowser = l.isNode = l.isReactNative = void 0),
        (l.isReactNative = isReactNative),
        (l.isNode = isNode),
        (l.isBrowser = function () {
          return !isReactNative() && !isNode();
        });
    },
    88497: function (o, l, _) {
      "use strict";
      Object.defineProperty(l, "__esModule", { value: !0 });
      let f = _(65949);
      f.__exportStar(_(72165), l), f.__exportStar(_(73027), l);
    },
    65624: function (o, l, _) {
      "use strict";
      let f;
      _.d(l, {
        EthereumProvider: function () {
          return a8;
        },
      });
      var m = {};
      _.r(m),
        _.d(m, {
          identity: function () {
            return t4;
          },
        });
      var b = {};
      _.r(b),
        _.d(b, {
          base2: function () {
            return t6;
          },
        });
      var w = {};
      _.r(w),
        _.d(w, {
          base8: function () {
            return t9;
          },
        });
      var E = {};
      _.r(E),
        _.d(E, {
          base10: function () {
            return t7;
          },
        });
      var D = {};
      _.r(D),
        _.d(D, {
          base16: function () {
            return it;
          },
          base16upper: function () {
            return ii;
          },
        });
      var P = {};
      _.r(P),
        _.d(P, {
          base32: function () {
            return ir;
          },
          base32hex: function () {
            return id;
          },
          base32hexpad: function () {
            return ih;
          },
          base32hexpadupper: function () {
            return iu;
          },
          base32hexupper: function () {
            return il;
          },
          base32pad: function () {
            return ia;
          },
          base32padupper: function () {
            return ic;
          },
          base32upper: function () {
            return io;
          },
          base32z: function () {
            return i_;
          },
        });
      var C = {};
      _.r(C),
        _.d(C, {
          base36: function () {
            return ip;
          },
          base36upper: function () {
            return ig;
          },
        });
      var A = {};
      _.r(A),
        _.d(A, {
          base58btc: function () {
            return iy;
          },
          base58flickr: function () {
            return im;
          },
        });
      var R = {};
      _.r(R),
        _.d(R, {
          base64: function () {
            return iv;
          },
          base64pad: function () {
            return ib;
          },
          base64url: function () {
            return ix;
          },
          base64urlpad: function () {
            return iw;
          },
        });
      var j = {};
      _.r(j),
        _.d(j, {
          base256emoji: function () {
            return iD;
          },
        });
      var q = {};
      _.r(q),
        _.d(q, {
          sha256: function () {
            return iO;
          },
          sha512: function () {
            return iC;
          },
        });
      var M = {};
      _.r(M),
        _.d(M, {
          identity: function () {
            return iA;
          },
        });
      var $ = {};
      _.r($),
        _.d($, {
          code: function () {
            return iT;
          },
          decode: function () {
            return raw_decode;
          },
          encode: function () {
            return raw_encode;
          },
          name: function () {
            return iR;
          },
        });
      var K = {};
      _.r(K),
        _.d(K, {
          code: function () {
            return iL;
          },
          decode: function () {
            return json_decode;
          },
          encode: function () {
            return json_encode;
          },
          name: function () {
            return ik;
          },
        });
      var G = _(72100),
        Y = _.n(G),
        Q = _(21481),
        __spreadArray = function (o, l, _) {
          if (_ || 2 == arguments.length)
            for (var f, m = 0, b = l.length; m < b; m++)
              (!f && m in l) ||
                (f || (f = Array.prototype.slice.call(l, 0, m)), (f[m] = l[m]));
          return o.concat(f || Array.prototype.slice.call(l));
        },
        BrowserInfo = function (o, l, _) {
          (this.name = o),
            (this.version = l),
            (this.os = _),
            (this.type = "browser");
        },
        NodeInfo = function (o) {
          (this.version = o),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = Q.platform);
        },
        SearchBotDeviceInfo = function (o, l, _, f) {
          (this.name = o),
            (this.version = l),
            (this.os = _),
            (this.bot = f),
            (this.type = "bot-device");
        },
        BotInfo = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        ReactNativeInfo = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        Z =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        ei = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        es = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function parseUserAgent(o) {
        var l =
          "" !== o &&
          ei.reduce(function (l, _) {
            var f = _[0],
              m = _[1];
            if (l) return l;
            var b = m.exec(o);
            return !!b && [f, b];
          }, !1);
        if (!l) return null;
        var _ = l[0],
          f = l[1];
        if ("searchbot" === _) return new BotInfo();
        var m = f[1] && f[1].split(".").join("_").split("_").slice(0, 3);
        m
          ? m.length < 3 &&
            (m = __spreadArray(
              __spreadArray([], m, !0),
              (function (o) {
                for (var l = [], _ = 0; _ < o; _++) l.push("0");
                return l;
              })(3 - m.length),
              !0
            ))
          : (m = []);
        var b = m.join("."),
          w = (function (o) {
            for (var l = 0, _ = es.length; l < _; l++) {
              var f = es[l],
                m = f[0];
              if (f[1].exec(o)) return m;
            }
            return null;
          })(o),
          E = Z.exec(o);
        return E && E[1]
          ? new SearchBotDeviceInfo(_, b, w, E[1])
          : new BrowserInfo(_, b, w);
      }
      var en = _(46196),
        eo = _(73079),
        ea = _(42669);
      let ec = "2.23.2",
        ed = {
          getDocsUrl: ({ docsBaseUrl: o, docsPath: l = "", docsSlug: _ }) =>
            l ? `${o ?? "https://viem.sh"}${l}${_ ? `#${_}` : ""}` : void 0,
          version: `viem@${ec}`,
        };
      let base_BaseError = class base_BaseError extends Error {
        constructor(o, l = {}) {
          let _ =
              l.cause instanceof base_BaseError
                ? l.cause.details
                : l.cause?.message
                ? l.cause.message
                : l.details,
            f =
              (l.cause instanceof base_BaseError && l.cause.docsPath) ||
              l.docsPath,
            m = ed.getDocsUrl?.({ ...l, docsPath: f }),
            b = [
              o || "An error occurred.",
              "",
              ...(l.metaMessages ? [...l.metaMessages, ""] : []),
              ...(m ? [`Docs: ${m}`] : []),
              ...(_ ? [`Details: ${_}`] : []),
              ...(ed.version ? [`Version: ${ed.version}`] : []),
            ].join("\n");
          super(b, l.cause ? { cause: l.cause } : void 0),
            Object.defineProperty(this, "details", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "docsPath", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "metaMessages", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "shortMessage", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "version", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseError",
            }),
            (this.details = _),
            (this.docsPath = f),
            (this.metaMessages = l.metaMessages),
            (this.name = l.name ?? this.name),
            (this.shortMessage = o),
            (this.version = ec);
        }
        walk(o) {
          return (function walk(o, l) {
            return l?.(o)
              ? o
              : o && "object" == typeof o && "cause" in o && void 0 !== o.cause
              ? walk(o.cause, l)
              : l
              ? null
              : o;
          })(this, o);
        }
      };
      function isHex(o, { strict: l = !0 } = {}) {
        return (
          !!o &&
          "string" == typeof o &&
          (l ? /^0x[0-9a-fA-F]*$/.test(o) : o.startsWith("0x"))
        );
      }
      let SizeExceedsPaddingSizeError = class SizeExceedsPaddingSizeError extends base_BaseError {
        constructor({ size: o, targetSize: l, type: _ }) {
          super(
            `${_.charAt(0).toUpperCase()}${_.slice(
              1
            ).toLowerCase()} size (${o}) exceeds padding size (${l}).`,
            { name: "SizeExceedsPaddingSizeError" }
          );
        }
      };
      function pad(o, { dir: l, size: _ = 32 } = {}) {
        return "string" == typeof o
          ? (function (o, { dir: l, size: _ = 32 } = {}) {
              if (null === _) return o;
              let f = o.replace("0x", "");
              if (f.length > 2 * _)
                throw new SizeExceedsPaddingSizeError({
                  size: Math.ceil(f.length / 2),
                  targetSize: _,
                  type: "hex",
                });
              return `0x${f["right" === l ? "padEnd" : "padStart"](
                2 * _,
                "0"
              )}`;
            })(o, { dir: l, size: _ })
          : (function (o, { dir: l, size: _ = 32 } = {}) {
              if (null === _) return o;
              if (o.length > _)
                throw new SizeExceedsPaddingSizeError({
                  size: o.length,
                  targetSize: _,
                  type: "bytes",
                });
              let f = new Uint8Array(_);
              for (let m = 0; m < _; m++) {
                let b = "right" === l;
                f[b ? m : _ - m - 1] = o[b ? m : o.length - m - 1];
              }
              return f;
            })(o, { dir: l, size: _ });
      }
      let IntegerOutOfRangeError = class IntegerOutOfRangeError extends base_BaseError {
        constructor({ max: o, min: l, signed: _, size: f, value: m }) {
          super(
            `Number "${m}" is not in safe ${
              f ? `${8 * f}-bit ${_ ? "signed" : "unsigned"} ` : ""
            }integer range ${o ? `(${l} to ${o})` : `(above ${l})`}`,
            { name: "IntegerOutOfRangeError" }
          );
        }
      };
      let SizeOverflowError = class SizeOverflowError extends base_BaseError {
        constructor({ givenSize: o, maxSize: l }) {
          super(`Size cannot exceed ${l} bytes. Given size: ${o} bytes.`, {
            name: "SizeOverflowError",
          });
        }
      };
      function size_size(o) {
        return isHex(o, { strict: !1 })
          ? Math.ceil((o.length - 2) / 2)
          : o.length;
      }
      function assertSize(o, { size: l }) {
        if (size_size(o) > l)
          throw new SizeOverflowError({ givenSize: size_size(o), maxSize: l });
      }
      function hexToBigInt(o, l = {}) {
        let { signed: _ } = l;
        l.size && assertSize(o, { size: l.size });
        let f = BigInt(o);
        if (!_) return f;
        let m = (o.length - 2) / 2,
          b = (1n << (8n * BigInt(m) - 1n)) - 1n;
        return f <= b ? f : f - BigInt(`0x${"f".padStart(2 * m, "f")}`) - 1n;
      }
      let el = Array.from({ length: 256 }, (o, l) =>
        l.toString(16).padStart(2, "0")
      );
      function toHex(o, l = {}) {
        return "number" == typeof o || "bigint" == typeof o
          ? numberToHex(o, l)
          : "string" == typeof o
          ? (function (o, l = {}) {
              let _ = eh.encode(o);
              return bytesToHex(_, l);
            })(o, l)
          : "boolean" == typeof o
          ? (function (o, l = {}) {
              let _ = `0x${Number(o)}`;
              return "number" == typeof l.size
                ? (assertSize(_, { size: l.size }), pad(_, { size: l.size }))
                : _;
            })(o, l)
          : bytesToHex(o, l);
      }
      function bytesToHex(o, l = {}) {
        let _ = "";
        for (let l = 0; l < o.length; l++) _ += el[o[l]];
        let f = `0x${_}`;
        return "number" == typeof l.size
          ? (assertSize(f, { size: l.size }),
            pad(f, { dir: "right", size: l.size }))
          : f;
      }
      function numberToHex(o, l = {}) {
        let _;
        let { signed: f, size: m } = l,
          b = BigInt(o);
        m
          ? (_ = f
              ? (1n << (8n * BigInt(m) - 1n)) - 1n
              : 2n ** (8n * BigInt(m)) - 1n)
          : "number" == typeof o && (_ = BigInt(Number.MAX_SAFE_INTEGER));
        let w = "bigint" == typeof _ && f ? -_ - 1n : 0;
        if ((_ && b > _) || b < w) {
          let l = "bigint" == typeof o ? "n" : "";
          throw new IntegerOutOfRangeError({
            max: _ ? `${_}${l}` : void 0,
            min: `${w}${l}`,
            signed: f,
            size: m,
            value: `${o}${l}`,
          });
        }
        let E = `0x${(f && b < 0
          ? (1n << BigInt(8 * m)) + BigInt(b)
          : b
        ).toString(16)}`;
        return m ? pad(E, { size: m }) : E;
      }
      let eh = new TextEncoder(),
        eu = new TextEncoder(),
        e_ = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function charCodeToBase16(o) {
        return o >= e_.zero && o <= e_.nine
          ? o - e_.zero
          : o >= e_.A && o <= e_.F
          ? o - (e_.A - 10)
          : o >= e_.a && o <= e_.f
          ? o - (e_.a - 10)
          : void 0;
      }
      function toBytes_hexToBytes(o, l = {}) {
        let _ = o;
        l.size &&
          (assertSize(_, { size: l.size }),
          (_ = pad(_, { dir: "right", size: l.size })));
        let f = _.slice(2);
        f.length % 2 && (f = `0${f}`);
        let m = f.length / 2,
          b = new Uint8Array(m);
        for (let o = 0, l = 0; o < m; o++) {
          let _ = charCodeToBase16(f.charCodeAt(l++)),
            m = charCodeToBase16(f.charCodeAt(l++));
          if (void 0 === _ || void 0 === m)
            throw new base_BaseError(
              `Invalid byte sequence ("${f[l - 2]}${f[l - 1]}" in "${f}").`
            );
          b[o] = 16 * _ + m;
        }
        return b;
      }
      function stringToBytes(o, l = {}) {
        let _ = eu.encode(o);
        return "number" == typeof l.size
          ? (assertSize(_, { size: l.size }),
            pad(_, { dir: "right", size: l.size }))
          : _;
      }
      var ep = _(74789);
      let ef = BigInt(4294967296 - 1),
        eg = BigInt(32),
        rotlSH = (o, l, _) => (o << _) | (l >>> (32 - _)),
        rotlSL = (o, l, _) => (l << _) | (o >>> (32 - _)),
        rotlBH = (o, l, _) => (l << (_ - 32)) | (o >>> (64 - _)),
        rotlBL = (o, l, _) => (o << (_ - 32)) | (l >>> (64 - _));
      var ey = _(3893);
      let em = [],
        ev = [],
        eb = [],
        ex = BigInt(0),
        ew = BigInt(1),
        eE = BigInt(2),
        eI = BigInt(7),
        eS = BigInt(256),
        eD = BigInt(113);
      for (let o = 0, l = ew, _ = 1, f = 0; o < 24; o++) {
        ([_, f] = [f, (2 * _ + 3 * f) % 5]),
          em.push(2 * (5 * f + _)),
          ev.push((((o + 1) * (o + 2)) / 2) % 64);
        let m = ex;
        for (let o = 0; o < 7; o++)
          (l = ((l << ew) ^ ((l >> eI) * eD)) % eS) & eE &&
            (m ^= ew << ((ew << BigInt(o)) - ew));
        eb.push(m);
      }
      let [eP, eO] = (function (o, l = !1) {
          let _ = new Uint32Array(o.length),
            f = new Uint32Array(o.length);
          for (let m = 0; m < o.length; m++) {
            let { h: b, l: w } = (function (o, l = !1) {
              return l
                ? { h: Number(o & ef), l: Number((o >> eg) & ef) }
                : { h: 0 | Number((o >> eg) & ef), l: 0 | Number(o & ef) };
            })(o[m], l);
            [_[m], f[m]] = [b, w];
          }
          return [_, f];
        })(eb, !0),
        rotlH = (o, l, _) => (_ > 32 ? rotlBH(o, l, _) : rotlSH(o, l, _)),
        rotlL = (o, l, _) => (_ > 32 ? rotlBL(o, l, _) : rotlSL(o, l, _));
      let Keccak = class Keccak extends ey.kb {
        constructor(o, l, _, f = !1, m = 24) {
          if (
            (super(),
            (this.blockLen = o),
            (this.suffix = l),
            (this.outputLen = _),
            (this.enableXOF = f),
            (this.rounds = m),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, ep.k8)(_),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, ey.Jq)(this.state));
        }
        keccak() {
          ey.iA || (0, ey.l1)(this.state32),
            (function (o, l = 24) {
              let _ = new Uint32Array(10);
              for (let f = 24 - l; f < 24; f++) {
                for (let l = 0; l < 10; l++)
                  _[l] = o[l] ^ o[l + 10] ^ o[l + 20] ^ o[l + 30] ^ o[l + 40];
                for (let l = 0; l < 10; l += 2) {
                  let f = (l + 8) % 10,
                    m = (l + 2) % 10,
                    b = _[m],
                    w = _[m + 1],
                    E = rotlH(b, w, 1) ^ _[f],
                    D = rotlL(b, w, 1) ^ _[f + 1];
                  for (let _ = 0; _ < 50; _ += 10)
                    (o[l + _] ^= E), (o[l + _ + 1] ^= D);
                }
                let l = o[2],
                  m = o[3];
                for (let _ = 0; _ < 24; _++) {
                  let f = ev[_],
                    b = rotlH(l, m, f),
                    w = rotlL(l, m, f),
                    E = em[_];
                  (l = o[E]), (m = o[E + 1]), (o[E] = b), (o[E + 1] = w);
                }
                for (let l = 0; l < 50; l += 10) {
                  for (let f = 0; f < 10; f++) _[f] = o[l + f];
                  for (let f = 0; f < 10; f++)
                    o[l + f] ^= ~_[(f + 2) % 10] & _[(f + 4) % 10];
                }
                (o[0] ^= eP[f]), (o[1] ^= eO[f]);
              }
              _.fill(0);
            })(this.state32, this.rounds),
            ey.iA || (0, ey.l1)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(o) {
          (0, ep.$h)(this);
          let { blockLen: l, state: _ } = this;
          o = (0, ey.O0)(o);
          let f = o.length;
          for (let m = 0; m < f; ) {
            let b = Math.min(l - this.pos, f - m);
            for (let l = 0; l < b; l++) _[this.pos++] ^= o[m++];
            this.pos === l && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: o, suffix: l, pos: _, blockLen: f } = this;
          (o[_] ^= l),
            (128 & l) != 0 && _ === f - 1 && this.keccak(),
            (o[f - 1] ^= 128),
            this.keccak();
        }
        writeInto(o) {
          (0, ep.$h)(this, !1), (0, ep.gk)(o), this.finish();
          let l = this.state,
            { blockLen: _ } = this;
          for (let f = 0, m = o.length; f < m; ) {
            this.posOut >= _ && this.keccak();
            let b = Math.min(_ - this.posOut, m - f);
            o.set(l.subarray(this.posOut, this.posOut + b), f),
              (this.posOut += b),
              (f += b);
          }
          return o;
        }
        xofInto(o) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(o);
        }
        xof(o) {
          return (0, ep.k8)(o), this.xofInto(new Uint8Array(o));
        }
        digestInto(o) {
          if (((0, ep.eB)(o, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(o), this.destroy(), o;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(o) {
          let {
            blockLen: l,
            suffix: _,
            outputLen: f,
            rounds: m,
            enableXOF: b,
          } = this;
          return (
            o || (o = new Keccak(l, _, f, b, m)),
            o.state32.set(this.state32),
            (o.pos = this.pos),
            (o.posOut = this.posOut),
            (o.finished = this.finished),
            (o.rounds = m),
            (o.suffix = _),
            (o.outputLen = f),
            (o.enableXOF = b),
            (o.destroyed = this.destroyed),
            o
          );
        }
      };
      let eC = (0, ey.hE)(() => new Keccak(136, 1, 32));
      function keccak256(o, l) {
        let _ = eC(
          isHex(o, { strict: !1 })
            ? (function (o, l = {}) {
                return "number" == typeof o || "bigint" == typeof o
                  ? (function (o, l) {
                      let _ = numberToHex(o, l);
                      return toBytes_hexToBytes(_);
                    })(o, l)
                  : "boolean" == typeof o
                  ? (function (o, l = {}) {
                      let _ = new Uint8Array(1);
                      return ((_[0] = Number(o)), "number" == typeof l.size)
                        ? (assertSize(_, { size: l.size }),
                          pad(_, { size: l.size }))
                        : _;
                    })(o, l)
                  : isHex(o)
                  ? toBytes_hexToBytes(o, l)
                  : stringToBytes(o, l);
              })(o)
            : o
        );
        return "bytes" === (l || "hex") ? _ : toHex(_);
      }
      let LruMap = class LruMap extends Map {
        constructor(o) {
          super(),
            Object.defineProperty(this, "maxSize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.maxSize = o);
        }
        get(o) {
          let l = super.get(o);
          return (
            super.has(o) && void 0 !== l && (this.delete(o), super.set(o, l)), l
          );
        }
        set(o, l) {
          if ((super.set(o, l), this.maxSize && this.size > this.maxSize)) {
            let o = this.keys().next().value;
            o && this.delete(o);
          }
          return this;
        }
      };
      let eA = new LruMap(8192);
      async function recoverPublicKey({ hash: o, signature: l }) {
        let f = isHex(o) ? o : toHex(o),
          { secp256k1: m } = await _.e(9678).then(_.bind(_, 49678)),
          b = (() => {
            if ("object" == typeof l && "r" in l && "s" in l) {
              let { r: o, s: _, v: f, yParity: b } = l,
                w = Number(b ?? f),
                E = toRecoveryBit(w);
              return new m.Signature(
                hexToBigInt(o),
                hexToBigInt(_)
              ).addRecoveryBit(E);
            }
            let o = isHex(l) ? l : toHex(l),
              _ = (function (o, l = {}) {
                return Number(hexToBigInt(o, l));
              })(`0x${o.slice(130)}`),
              f = toRecoveryBit(_);
            return m.Signature.fromCompact(o.substring(2, 130)).addRecoveryBit(
              f
            );
          })(),
          w = b.recoverPublicKey(f.substring(2)).toHex(!1);
        return `0x${w}`;
      }
      function toRecoveryBit(o) {
        if (0 === o || 1 === o) return o;
        if (27 === o) return 0;
        if (28 === o) return 1;
        throw Error("Invalid yParityOrV value");
      }
      async function recoverAddress({ hash: o, signature: l }) {
        return (function (o) {
          let l = keccak256(`0x${o.substring(4)}`).substring(26);
          return (function (o, l) {
            if (eA.has(`${o}.${l}`)) return eA.get(`${o}.${l}`);
            let _ = l ? `${l}${o.toLowerCase()}` : o.substring(2).toLowerCase(),
              f = keccak256(stringToBytes(_), "bytes"),
              m = (l ? _.substring(`${l}0x`.length) : _).split("");
            for (let o = 0; o < 40; o += 2)
              f[o >> 1] >> 4 >= 8 && m[o] && (m[o] = m[o].toUpperCase()),
                (15 & f[o >> 1]) >= 8 &&
                  m[o + 1] &&
                  (m[o + 1] = m[o + 1].toUpperCase());
            let b = `0x${m.join("")}`;
            return eA.set(`${o}.${l}`, b), b;
          })(`0x${l}`);
        })(await recoverPublicKey({ hash: o, signature: l }));
      }
      var eR = (function (o) {
        if (o.length >= 255) throw TypeError("Alphabet too long");
        let l = new Uint8Array(256);
        for (let o = 0; o < l.length; o++) l[o] = 255;
        for (let _ = 0; _ < o.length; _++) {
          let f = o.charAt(_),
            m = f.charCodeAt(0);
          if (255 !== l[m]) throw TypeError(f + " is ambiguous");
          l[m] = _;
        }
        let _ = o.length,
          f = o.charAt(0),
          m = Math.log(_) / Math.log(256),
          b = Math.log(256) / Math.log(_);
        function decodeUnsafe(o) {
          if ("string" != typeof o) throw TypeError("Expected String");
          if (0 === o.length) return new Uint8Array();
          let b = 0,
            w = 0,
            E = 0;
          for (; o[b] === f; ) w++, b++;
          let D = ((o.length - b) * m + 1) >>> 0,
            P = new Uint8Array(D);
          for (; b < o.length; ) {
            let f = o.charCodeAt(b);
            if (f > 255) return;
            let m = l[f];
            if (255 === m) return;
            let w = 0;
            for (let o = D - 1; (0 !== m || w < E) && -1 !== o; o--, w++)
              (m += (_ * P[o]) >>> 0),
                (P[o] = m % 256 >>> 0),
                (m = (m / 256) >>> 0);
            if (0 !== m) throw Error("Non-zero carry");
            (E = w), b++;
          }
          let C = D - E;
          for (; C !== D && 0 === P[C]; ) C++;
          let A = new Uint8Array(w + (D - C)),
            R = w;
          for (; C !== D; ) A[R++] = P[C++];
          return A;
        }
        return {
          encode: function (l) {
            if (
              (l instanceof Uint8Array ||
                (ArrayBuffer.isView(l)
                  ? (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength))
                  : Array.isArray(l) && (l = Uint8Array.from(l))),
              !(l instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === l.length) return "";
            let m = 0,
              w = 0,
              E = 0,
              D = l.length;
            for (; E !== D && 0 === l[E]; ) E++, m++;
            let P = ((D - E) * b + 1) >>> 0,
              C = new Uint8Array(P);
            for (; E !== D; ) {
              let o = l[E],
                f = 0;
              for (let l = P - 1; (0 !== o || f < w) && -1 !== l; l--, f++)
                (o += (256 * C[l]) >>> 0),
                  (C[l] = o % _ >>> 0),
                  (o = (o / _) >>> 0);
              if (0 !== o) throw Error("Non-zero carry");
              (w = f), E++;
            }
            let A = P - w;
            for (; A !== P && 0 === C[A]; ) A++;
            let R = f.repeat(m);
            for (; A < P; ++A) R += o.charAt(C[A]);
            return R;
          },
          decodeUnsafe,
          decode: function (o) {
            let l = decodeUnsafe(o);
            if (l) return l;
            throw Error("Non-base" + _ + " character");
          },
        };
      })("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
      let JSONStringify = (o) =>
          JSON.stringify(o, (o, l) =>
            "bigint" == typeof l ? l.toString() + "n" : l
          ),
        JSONParse = (o) => {
          let l = o.replace(
            /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            '$1"$2n"$3'
          );
          return JSON.parse(l, (o, l) => {
            let _ = "string" == typeof l && l.match(/^\d+n$/);
            return _ ? BigInt(l.substring(0, l.length - 1)) : l;
          });
        };
      function safeJsonParse(o) {
        if ("string" != typeof o)
          throw Error(`Cannot safe json parse value of type ${typeof o}`);
        try {
          return JSONParse(o);
        } catch (l) {
          return o;
        }
      }
      function safeJsonStringify(o) {
        return "string" == typeof o ? o : JSONStringify(o) || "";
      }
      function fe(o, ...l) {
        if (
          !(
            o instanceof Uint8Array ||
            (ArrayBuffer.isView(o) && "Uint8Array" === o.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (l.length > 0 && !l.includes(o.length))
          throw Error(
            "Uint8Array expected of length " + l + ", got length=" + o.length
          );
      }
      function De(o, l = !0) {
        if (o.destroyed) throw Error("Hash instance has been destroyed");
        if (l && o.finished)
          throw Error("Hash#digest() has already been called");
      }
      let eT =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0,
        _t = (o) => new DataView(o.buffer, o.byteOffset, o.byteLength);
      /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function de(
        o
      ) {
        return (
          "string" == typeof o &&
            (o = (function (o) {
              if ("string" != typeof o)
                throw Error("utf8ToBytes expected string, got " + typeof o);
              return new Uint8Array(new TextEncoder().encode(o));
            })(o)),
          fe(o),
          o
        );
      }
      let xn = class xn {
        clone() {
          return this._cloneInto();
        }
      };
      function he(o = 32) {
        if (eT && "function" == typeof eT.getRandomValues)
          return eT.getRandomValues(new Uint8Array(o));
        if (eT && "function" == typeof eT.randomBytes) return eT.randomBytes(o);
        throw Error("crypto.getRandomValues must be defined");
      }
      let An = class An extends xn {
        constructor(o, l, _, f) {
          super(),
            (this.blockLen = o),
            (this.outputLen = l),
            (this.padOffset = _),
            (this.isLE = f),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(o)),
            (this.view = _t(this.buffer));
        }
        update(o) {
          De(this);
          let { view: l, buffer: _, blockLen: f } = this;
          o = de(o);
          let m = o.length;
          for (let b = 0; b < m; ) {
            let w = Math.min(f - this.pos, m - b);
            if (w === f) {
              let l = _t(o);
              for (; f <= m - b; b += f) this.process(l, b);
              continue;
            }
            _.set(o.subarray(b, b + w), this.pos),
              (this.pos += w),
              (b += w),
              this.pos === f && (this.process(l, 0), (this.pos = 0));
          }
          return (this.length += o.length), this.roundClean(), this;
        }
        digestInto(o) {
          De(this),
            (function (o, l) {
              fe(o);
              let _ = l.outputLen;
              if (o.length < _)
                throw Error(
                  "digestInto() expects output buffer of length at least " + _
                );
            })(o, this),
            (this.finished = !0);
          let { buffer: l, view: _, blockLen: f, isLE: m } = this,
            { pos: b } = this;
          (l[b++] = 128),
            this.buffer.subarray(b).fill(0),
            this.padOffset > f - b && (this.process(_, 0), (b = 0));
          for (let o = b; o < f; o++) l[o] = 0;
          (function (o, l, _, f) {
            if ("function" == typeof o.setBigUint64)
              return o.setBigUint64(l, _, f);
            let m = BigInt(32),
              b = BigInt(4294967295),
              w = Number((_ >> m) & b),
              E = Number(_ & b),
              D = f ? 4 : 0,
              P = f ? 0 : 4;
            o.setUint32(l + D, w, f), o.setUint32(l + P, E, f);
          })(_, f - 8, BigInt(8 * this.length), m),
            this.process(_, 0);
          let w = _t(o),
            E = this.outputLen;
          if (E % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let D = E / 4,
            P = this.get();
          if (D > P.length) throw Error("_sha2: outputLen bigger than state");
          for (let o = 0; o < D; o++) w.setUint32(4 * o, P[o], m);
        }
        digest() {
          let { buffer: o, outputLen: l } = this;
          this.digestInto(o);
          let _ = o.slice(0, l);
          return this.destroy(), _;
        }
        _cloneInto(o) {
          o || (o = new this.constructor()), o.set(...this.get());
          let {
            blockLen: l,
            buffer: _,
            length: f,
            finished: m,
            destroyed: b,
            pos: w,
          } = this;
          return (
            (o.length = f),
            (o.pos = w),
            (o.finished = m),
            (o.destroyed = b),
            f % l && o.buffer.set(_),
            o
          );
        }
      };
      let eN = BigInt(4294967296 - 1),
        ej = BigInt(32);
      function le(o, l = !1) {
        return l
          ? { h: Number(o & eN), l: Number((o >> ej) & eN) }
          : { h: 0 | Number((o >> ej) & eN), l: 0 | Number(o & eN) };
      }
      let ek = {
          fromBig: le,
          split: function (o, l = !1) {
            let _ = new Uint32Array(o.length),
              f = new Uint32Array(o.length);
            for (let m = 0; m < o.length; m++) {
              let { h: b, l: w } = le(o[m], l);
              [_[m], f[m]] = [b, w];
            }
            return [_, f];
          },
          toBig: (o, l) => (BigInt(o >>> 0) << ej) | BigInt(l >>> 0),
          shrSH: (o, l, _) => o >>> _,
          shrSL: (o, l, _) => (o << (32 - _)) | (l >>> _),
          rotrSH: (o, l, _) => (o >>> _) | (l << (32 - _)),
          rotrSL: (o, l, _) => (o << (32 - _)) | (l >>> _),
          rotrBH: (o, l, _) => (o << (64 - _)) | (l >>> (_ - 32)),
          rotrBL: (o, l, _) => (o >>> (_ - 32)) | (l << (64 - _)),
          rotr32H: (o, l) => l,
          rotr32L: (o, l) => o,
          rotlSH: (o, l, _) => (o << _) | (l >>> (32 - _)),
          rotlSL: (o, l, _) => (l << _) | (o >>> (32 - _)),
          rotlBH: (o, l, _) => (l << (_ - 32)) | (o >>> (64 - _)),
          rotlBL: (o, l, _) => (o << (_ - 32)) | (l >>> (64 - _)),
          add: function (o, l, _, f) {
            let m = (l >>> 0) + (f >>> 0);
            return { h: (o + _ + ((m / 4294967296) | 0)) | 0, l: 0 | m };
          },
          add3L: (o, l, _) => (o >>> 0) + (l >>> 0) + (_ >>> 0),
          add3H: (o, l, _, f) => (l + _ + f + ((o / 4294967296) | 0)) | 0,
          add4L: (o, l, _, f) => (o >>> 0) + (l >>> 0) + (_ >>> 0) + (f >>> 0),
          add4H: (o, l, _, f, m) =>
            (l + _ + f + m + ((o / 4294967296) | 0)) | 0,
          add5H: (o, l, _, f, m, b) =>
            (l + _ + f + m + b + ((o / 4294967296) | 0)) | 0,
          add5L: (o, l, _, f, m) =>
            (o >>> 0) + (l >>> 0) + (_ >>> 0) + (f >>> 0) + (m >>> 0),
        },
        [eL, eB] = ek.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((o) => BigInt(o))
        ),
        eU = new Uint32Array(80),
        eq = new Uint32Array(80);
      let Jn = class Jn extends An {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          let {
            Ah: o,
            Al: l,
            Bh: _,
            Bl: f,
            Ch: m,
            Cl: b,
            Dh: w,
            Dl: E,
            Eh: D,
            El: P,
            Fh: C,
            Fl: A,
            Gh: R,
            Gl: j,
            Hh: q,
            Hl: M,
          } = this;
          return [o, l, _, f, m, b, w, E, D, P, C, A, R, j, q, M];
        }
        set(o, l, _, f, m, b, w, E, D, P, C, A, R, j, q, M) {
          (this.Ah = 0 | o),
            (this.Al = 0 | l),
            (this.Bh = 0 | _),
            (this.Bl = 0 | f),
            (this.Ch = 0 | m),
            (this.Cl = 0 | b),
            (this.Dh = 0 | w),
            (this.Dl = 0 | E),
            (this.Eh = 0 | D),
            (this.El = 0 | P),
            (this.Fh = 0 | C),
            (this.Fl = 0 | A),
            (this.Gh = 0 | R),
            (this.Gl = 0 | j),
            (this.Hh = 0 | q),
            (this.Hl = 0 | M);
        }
        process(o, l) {
          for (let _ = 0; _ < 16; _++, l += 4)
            (eU[_] = o.getUint32(l)), (eq[_] = o.getUint32((l += 4)));
          for (let o = 16; o < 80; o++) {
            let l = 0 | eU[o - 15],
              _ = 0 | eq[o - 15],
              f = ek.rotrSH(l, _, 1) ^ ek.rotrSH(l, _, 8) ^ ek.shrSH(l, _, 7),
              m = ek.rotrSL(l, _, 1) ^ ek.rotrSL(l, _, 8) ^ ek.shrSL(l, _, 7),
              b = 0 | eU[o - 2],
              w = 0 | eq[o - 2],
              E = ek.rotrSH(b, w, 19) ^ ek.rotrBH(b, w, 61) ^ ek.shrSH(b, w, 6),
              D = ek.rotrSL(b, w, 19) ^ ek.rotrBL(b, w, 61) ^ ek.shrSL(b, w, 6),
              P = ek.add4L(m, D, eq[o - 7], eq[o - 16]),
              C = ek.add4H(P, f, E, eU[o - 7], eU[o - 16]);
            (eU[o] = 0 | C), (eq[o] = 0 | P);
          }
          let {
            Ah: _,
            Al: f,
            Bh: m,
            Bl: b,
            Ch: w,
            Cl: E,
            Dh: D,
            Dl: P,
            Eh: C,
            El: A,
            Fh: R,
            Fl: j,
            Gh: q,
            Gl: M,
            Hh: $,
            Hl: K,
          } = this;
          for (let o = 0; o < 80; o++) {
            let l =
                ek.rotrSH(C, A, 14) ^ ek.rotrSH(C, A, 18) ^ ek.rotrBH(C, A, 41),
              G =
                ek.rotrSL(C, A, 14) ^ ek.rotrSL(C, A, 18) ^ ek.rotrBL(C, A, 41),
              Y = (C & R) ^ (~C & q),
              Q = (A & j) ^ (~A & M),
              Z = ek.add5L(K, G, Q, eB[o], eq[o]),
              ei = ek.add5H(Z, $, l, Y, eL[o], eU[o]),
              es = 0 | Z,
              en =
                ek.rotrSH(_, f, 28) ^ ek.rotrBH(_, f, 34) ^ ek.rotrBH(_, f, 39),
              eo =
                ek.rotrSL(_, f, 28) ^ ek.rotrBL(_, f, 34) ^ ek.rotrBL(_, f, 39),
              ea = (_ & m) ^ (_ & w) ^ (m & w),
              ec = (f & b) ^ (f & E) ^ (b & E);
            ($ = 0 | q),
              (K = 0 | M),
              (q = 0 | R),
              (M = 0 | j),
              (R = 0 | C),
              (j = 0 | A),
              ({ h: C, l: A } = ek.add(0 | D, 0 | P, 0 | ei, 0 | es)),
              (D = 0 | w),
              (P = 0 | E),
              (w = 0 | m),
              (E = 0 | b),
              (m = 0 | _),
              (b = 0 | f);
            let ed = ek.add3L(es, eo, ec);
            (_ = ek.add3H(ed, ei, en, ea)), (f = 0 | ed);
          }
          ({ h: _, l: f } = ek.add(0 | this.Ah, 0 | this.Al, 0 | _, 0 | f)),
            ({ h: m, l: b } = ek.add(0 | this.Bh, 0 | this.Bl, 0 | m, 0 | b)),
            ({ h: w, l: E } = ek.add(0 | this.Ch, 0 | this.Cl, 0 | w, 0 | E)),
            ({ h: D, l: P } = ek.add(0 | this.Dh, 0 | this.Dl, 0 | D, 0 | P)),
            ({ h: C, l: A } = ek.add(0 | this.Eh, 0 | this.El, 0 | C, 0 | A)),
            ({ h: R, l: j } = ek.add(0 | this.Fh, 0 | this.Fl, 0 | R, 0 | j)),
            ({ h: q, l: M } = ek.add(0 | this.Gh, 0 | this.Gl, 0 | q, 0 | M)),
            ({ h: $, l: K } = ek.add(0 | this.Hh, 0 | this.Hl, 0 | $, 0 | K)),
            this.set(_, f, m, b, w, E, D, P, C, A, R, j, q, M, $, K);
        }
        roundClean() {
          eU.fill(0), eq.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      };
      let eM = (function (o) {
          let e = (l) => o().update(de(l)).digest(),
            l = o();
          return (
            (e.outputLen = l.outputLen),
            (e.blockLen = l.blockLen),
            (e.create = () => o()),
            e
          );
        })(() => new Jn()),
        e$ = BigInt(0),
        ez = BigInt(1),
        eH = BigInt(2);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function It(
        o
      ) {
        return (
          o instanceof Uint8Array ||
          (ArrayBuffer.isView(o) && "Uint8Array" === o.constructor.name)
        );
      }
      function Ut(o) {
        if (!It(o)) throw Error("Uint8Array expected");
      }
      function Tt(o, l) {
        if ("boolean" != typeof l)
          throw Error(o + " boolean expected, got " + l);
      }
      let eF = Array.from({ length: 256 }, (o, l) =>
        l.toString(16).padStart(2, "0")
      );
      function Ft(o) {
        Ut(o);
        let l = "";
        for (let _ = 0; _ < o.length; _++) l += eF[o[_]];
        return l;
      }
      function pe(o) {
        if ("string" != typeof o)
          throw Error("hex string expected, got " + typeof o);
        return "" === o ? e$ : BigInt("0x" + o);
      }
      let eV = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function we(o) {
        return o >= eV._0 && o <= eV._9
          ? o - eV._0
          : o >= eV.A && o <= eV.F
          ? o - (eV.A - 10)
          : o >= eV.a && o <= eV.f
          ? o - (eV.a - 10)
          : void 0;
      }
      function Ee(o) {
        if ("string" != typeof o)
          throw Error("hex string expected, got " + typeof o);
        let l = o.length,
          _ = l / 2;
        if (l % 2)
          throw Error("hex string expected, got unpadded hex of length " + l);
        let f = new Uint8Array(_);
        for (let l = 0, m = 0; l < _; l++, m += 2) {
          let _ = we(o.charCodeAt(m)),
            b = we(o.charCodeAt(m + 1));
          if (void 0 === _ || void 0 === b) {
            let l = o[m] + o[m + 1];
            throw Error(
              'hex string expected, got non-hex character "' +
                l +
                '" at index ' +
                m
            );
          }
          f[l] = 16 * _ + b;
        }
        return f;
      }
      function Et(o) {
        return Ut(o), pe(Ft(Uint8Array.from(o).reverse()));
      }
      function ge(o, l) {
        return Ee(o.toString(16).padStart(2 * l, "0"));
      }
      function Nt(o, l) {
        return ge(o, l).reverse();
      }
      function W(o, l, _) {
        let f;
        if ("string" == typeof l)
          try {
            f = Ee(l);
          } catch (l) {
            throw Error(o + " must be hex string or Uint8Array, cause: " + l);
          }
        else if (It(l)) f = Uint8Array.from(l);
        else throw Error(o + " must be hex string or Uint8Array");
        let m = f.length;
        if ("number" == typeof _ && m !== _)
          throw Error(o + " of length " + _ + " expected, got " + m);
        return f;
      }
      function ye(...o) {
        let l = 0;
        for (let _ = 0; _ < o.length; _++) {
          let f = o[_];
          Ut(f), (l += f.length);
        }
        let _ = new Uint8Array(l);
        for (let l = 0, f = 0; l < o.length; l++) {
          let m = o[l];
          _.set(m, f), (f += m.length);
        }
        return _;
      }
      let Lt = (o) => "bigint" == typeof o && e$ <= o;
      function ft(o, l, _, f) {
        if (!(Lt(l) && Lt(_) && Lt(f)) || !(_ <= l) || !(l < f))
          throw Error(
            "expected valid " + o + ": " + _ + " <= n < " + f + ", got " + l
          );
      }
      let er = (o) => (eH << BigInt(o - 1)) - ez,
        eK = {
          bigint: (o) => "bigint" == typeof o,
          function: (o) => "function" == typeof o,
          boolean: (o) => "boolean" == typeof o,
          string: (o) => "string" == typeof o,
          stringOrUint8Array: (o) => "string" == typeof o || It(o),
          isSafeInteger: (o) => Number.isSafeInteger(o),
          array: (o) => Array.isArray(o),
          field: (o, l) => l.Fp.isValid(o),
          hash: (o) =>
            "function" == typeof o && Number.isSafeInteger(o.outputLen),
        };
      function Ot(o, l, _ = {}) {
        let r = (l, _, f) => {
          let m = eK[_];
          if ("function" != typeof m) throw Error("invalid validator function");
          let b = o[l];
          if (!(f && void 0 === b) && !m(b, o))
            throw Error(
              "param " + String(l) + " is invalid. Expected " + _ + ", got " + b
            );
        };
        for (let [o, _] of Object.entries(l)) r(o, _, !1);
        for (let [o, l] of Object.entries(_)) r(o, l, !0);
        return o;
      }
      function xe(o) {
        let l = new WeakMap();
        return (_, ...f) => {
          let m = l.get(_);
          if (void 0 !== m) return m;
          let b = o(_, ...f);
          return l.set(_, b), b;
        };
      }
      let eW = BigInt(0),
        eG = BigInt(1),
        eJ = BigInt(2),
        eY = BigInt(3),
        eX = BigInt(4),
        eQ = BigInt(5),
        eZ = BigInt(8);
      function H(o, l) {
        let _ = o % l;
        return _ >= eW ? _ : l + _;
      }
      function J(o, l, _) {
        let f = o;
        for (; l-- > eW; ) (f *= f), (f %= _);
        return f;
      }
      function Ae(o, l) {
        if (o === eW) throw Error("invert: expected non-zero number");
        if (l <= eW) throw Error("invert: expected positive modulus, got " + l);
        let _ = H(o, l),
          f = l,
          m = eW,
          b = eG;
        for (; _ !== eW; ) {
          let o = f / _,
            l = f % _,
            w = m - b * o;
          (f = _), (_ = l), (m = b), (b = w);
        }
        if (f !== eG) throw Error("invert: does not exist");
        return H(m, l);
      }
      let ur = (o, l) => (H(o, l) & eG) === eG,
        e0 = [
          "create",
          "isValid",
          "is0",
          "neg",
          "inv",
          "sqrt",
          "sqr",
          "eql",
          "add",
          "sub",
          "mul",
          "pow",
          "div",
          "addN",
          "subN",
          "mulN",
          "sqrN",
        ];
      function me(o, l) {
        let _ = void 0 !== l ? l : o.toString(2).length;
        return { nBitLength: _, nByteLength: Math.ceil(_ / 8) };
      }
      function _e(o, l, _ = !1, f = {}) {
        let m;
        if (o <= eW) throw Error("invalid field: expected ORDER > 0, got " + o);
        let { nBitLength: b, nByteLength: w } = me(o, l);
        if (w > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let E = Object.freeze({
          ORDER: o,
          isLE: _,
          BITS: b,
          BYTES: w,
          MASK: er(b),
          ZERO: eW,
          ONE: eG,
          create: (l) => H(l, o),
          isValid: (l) => {
            if ("bigint" != typeof l)
              throw Error(
                "invalid field element: expected bigint, got " + typeof l
              );
            return eW <= l && l < o;
          },
          is0: (o) => o === eW,
          isOdd: (o) => (o & eG) === eG,
          neg: (l) => H(-l, o),
          eql: (o, l) => o === l,
          sqr: (l) => H(l * l, o),
          add: (l, _) => H(l + _, o),
          sub: (l, _) => H(l - _, o),
          mul: (l, _) => H(l * _, o),
          pow: (o, l) =>
            (function (o, l, _) {
              if (_ < eW)
                throw Error("invalid exponent, negatives unsupported");
              if (_ === eW) return o.ONE;
              if (_ === eG) return l;
              let f = o.ONE,
                m = l;
              for (; _ > eW; )
                _ & eG && (f = o.mul(f, m)), (m = o.sqr(m)), (_ >>= eG);
              return f;
            })(E, o, l),
          div: (l, _) => H(l * Ae(_, o), o),
          sqrN: (o) => o * o,
          addN: (o, l) => o + l,
          subN: (o, l) => o - l,
          mulN: (o, l) => o * l,
          inv: (l) => Ae(l, o),
          sqrt:
            f.sqrt ||
            ((l) => (
              m ||
                (m = (function (o) {
                  if (o % eX === eY) {
                    let l = (o + eG) / eX;
                    return function (o, _) {
                      let f = o.pow(_, l);
                      if (!o.eql(o.sqr(f), _))
                        throw Error("Cannot find square root");
                      return f;
                    };
                  }
                  if (o % eZ === eQ) {
                    let l = (o - eQ) / eZ;
                    return function (o, _) {
                      let f = o.mul(_, eJ),
                        m = o.pow(f, l),
                        b = o.mul(_, m),
                        w = o.mul(o.mul(b, eJ), m),
                        E = o.mul(b, o.sub(w, o.ONE));
                      if (!o.eql(o.sqr(E), _))
                        throw Error("Cannot find square root");
                      return E;
                    };
                  }
                  return (function (o) {
                    let l, _, f;
                    let m = (o - eG) / eJ;
                    for (l = o - eG, _ = 0; l % eJ === eW; l /= eJ, _++);
                    for (
                      f = eJ;
                      f < o &&
                      (function (o, l, _) {
                        if (l < eW)
                          throw Error(
                            "invalid exponent, negatives unsupported"
                          );
                        if (_ <= eW) throw Error("invalid modulus");
                        if (_ === eG) return eW;
                        let f = eG;
                        for (; l > eW; )
                          l & eG && (f = (f * o) % _),
                            (o = (o * o) % _),
                            (l >>= eG);
                        return f;
                      })(f, m, o) !==
                        o - eG;
                      f++
                    )
                      if (f > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === _) {
                      let l = (o + eG) / eX;
                      return function (o, _) {
                        let f = o.pow(_, l);
                        if (!o.eql(o.sqr(f), _))
                          throw Error("Cannot find square root");
                        return f;
                      };
                    }
                    let b = (l + eG) / eJ;
                    return function (o, w) {
                      if (o.pow(w, m) === o.neg(o.ONE))
                        throw Error("Cannot find square root");
                      let E = _,
                        D = o.pow(o.mul(o.ONE, f), l),
                        P = o.pow(w, b),
                        C = o.pow(w, l);
                      for (; !o.eql(C, o.ONE); ) {
                        if (o.eql(C, o.ZERO)) return o.ZERO;
                        let l = 1;
                        for (let _ = o.sqr(C); l < E && !o.eql(_, o.ONE); l++)
                          _ = o.sqr(_);
                        let _ = o.pow(D, eG << BigInt(E - l - 1));
                        (D = o.sqr(_)),
                          (P = o.mul(P, _)),
                          (C = o.mul(C, D)),
                          (E = l);
                      }
                      return P;
                    };
                  })(o);
                })(o)),
              m(E, l)
            )),
          invertBatch: (o) =>
            (function (o, l) {
              let _ = Array(l.length),
                f = l.reduce(
                  (l, f, m) => (o.is0(f) ? l : ((_[m] = l), o.mul(l, f))),
                  o.ONE
                ),
                m = o.inv(f);
              return (
                l.reduceRight(
                  (l, f, m) =>
                    o.is0(f) ? l : ((_[m] = o.mul(l, _[m])), o.mul(l, f)),
                  m
                ),
                _
              );
            })(E, o),
          cmov: (o, l, _) => (_ ? l : o),
          toBytes: (o) => (_ ? Nt(o, w) : ge(o, w)),
          fromBytes: (o) => {
            if (o.length !== w)
              throw Error(
                "Field.fromBytes: expected " + w + " bytes, got " + o.length
              );
            return _ ? Et(o) : pe(Ft(o));
          },
        });
        return Object.freeze(E);
      }
      let e1 = BigInt(0),
        e2 = BigInt(1);
      function zt(o, l) {
        let _ = l.negate();
        return o ? _ : l;
      }
      function ve(o, l) {
        if (!Number.isSafeInteger(o) || o <= 0 || o > l)
          throw Error(
            "invalid window size, expected [1.." + l + "], got W=" + o
          );
      }
      function Mt(o, l) {
        ve(o, l);
        let _ = Math.ceil(l / o) + 1,
          f = 2 ** (o - 1);
        return { windows: _, windowSize: f };
      }
      let e8 = new WeakMap(),
        e3 = new WeakMap();
      function $t(o) {
        return e3.get(o) || 1;
      }
      let e5 = BigInt(0),
        e4 = BigInt(1),
        e6 = BigInt(2),
        e9 = BigInt(8),
        e7 = { zip215: !0 };
      BigInt(0), BigInt(1);
      let te = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        ),
        ti = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        );
      BigInt(0);
      let ts = BigInt(1),
        tr = BigInt(2);
      BigInt(3);
      let tn = BigInt(5),
        to = BigInt(8),
        ta = _e(te, void 0, !0),
        tc = {
          a: BigInt(-1),
          d: BigInt(
            "37095705934669439343138083508754565189542113879843219016388785533085940283555"
          ),
          Fp: ta,
          n: BigInt(
            "7237005577332262213973186563042994240857116359379907606001950938285454250989"
          ),
          h: to,
          Gx: BigInt(
            "15112221349535400772501151409588531511454012693041857206046113283949847762202"
          ),
          Gy: BigInt(
            "46316835694926478169428394003475163141307993866256225615783033603165251855960"
          ),
          hash: eM,
          randomBytes: he,
          adjustScalarBytes: function (o) {
            return (o[0] &= 248), (o[31] &= 127), (o[31] |= 64), o;
          },
          uvRatio: function (o, l) {
            let _ = H(l * l * l, te),
              f = H(_ * _ * l, te),
              m = (function (o) {
                let l = BigInt(10),
                  _ = BigInt(20),
                  f = BigInt(40),
                  m = BigInt(80),
                  b = (((o * o) % te) * o) % te,
                  w = (J(b, tr, te) * b) % te,
                  E = (J(w, ts, te) * o) % te,
                  D = (J(E, tn, te) * E) % te,
                  P = (J(D, l, te) * D) % te,
                  C = (J(P, _, te) * P) % te,
                  A = (J(C, f, te) * C) % te,
                  R = (J(A, m, te) * A) % te,
                  j = (J(R, m, te) * A) % te,
                  q = (J(j, l, te) * D) % te;
                return { pow_p_5_8: (J(q, tr, te) * o) % te, b2: b };
              })(o * f).pow_p_5_8,
              b = H(o * _ * m, te),
              w = H(l * b * b, te),
              E = b,
              D = H(b * ti, te),
              P = w === o,
              C = w === H(-o, te),
              A = w === H(-o * ti, te);
            return (
              P && (b = E),
              (C || A) && (b = D),
              ur(b, te) && (b = H(-b, te)),
              { isValid: P || C, value: b }
            );
          },
        },
        td = (function (o) {
          var l;
          let _ = (function (o) {
              let l =
                ((function (o) {
                  let l = e0.reduce((o, l) => ((o[l] = "function"), o), {
                    ORDER: "bigint",
                    MASK: "bigint",
                    BYTES: "isSafeInteger",
                    BITS: "isSafeInteger",
                  });
                  Ot(o, l);
                })(o.Fp),
                Ot(
                  o,
                  { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
                  { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
                ),
                Object.freeze({
                  ...me(o.n, o.nBitLength),
                  ...o,
                  p: o.Fp.ORDER,
                }));
              return (
                Ot(
                  o,
                  {
                    hash: "function",
                    a: "bigint",
                    d: "bigint",
                    randomBytes: "function",
                  },
                  {
                    adjustScalarBytes: "function",
                    domain: "function",
                    uvRatio: "function",
                    mapToCurve: "function",
                  }
                ),
                Object.freeze({ ...l })
              );
            })(o),
            {
              Fp: f,
              n: m,
              prehash: b,
              hash: w,
              randomBytes: E,
              nByteLength: D,
              h: P,
            } = _,
            C = e6 << (BigInt(8 * D) - e4),
            A = f.create,
            R = _e(_.n, _.nBitLength),
            j =
              _.uvRatio ||
              ((o, l) => {
                try {
                  return { isValid: !0, value: f.sqrt(o * f.inv(l)) };
                } catch {
                  return { isValid: !1, value: e5 };
                }
              }),
            q = _.adjustScalarBytes || ((o) => o),
            M =
              _.domain ||
              ((o, l, _) => {
                if ((Tt("phflag", _), l.length || _))
                  throw Error("Contexts/pre-hash are not supported");
                return o;
              });
          function g(o, l) {
            ft("coordinate " + o, l, e5, C);
          }
          function S(o) {
            if (!(o instanceof d)) throw Error("ExtendedPoint expected");
          }
          let $ = xe((o, l) => {
              let { ex: _, ey: m, ez: b } = o,
                w = o.is0();
              null == l && (l = w ? e9 : f.inv(b));
              let E = A(_ * l),
                D = A(m * l),
                P = A(b * l);
              if (w) return { x: e5, y: e4 };
              if (P !== e4) throw Error("invZ was invalid");
              return { x: E, y: D };
            }),
            K = xe((o) => {
              let { a: l, d: f } = _;
              if (o.is0()) throw Error("bad point: ZERO");
              let { ex: m, ey: b, ez: w, et: E } = o,
                D = A(m * m),
                P = A(b * b),
                C = A(w * w),
                R = A(C * C),
                j = A(D * l),
                q = A(C * A(j + P)),
                M = A(R + A(f * A(D * P)));
              if (q !== M) throw Error("bad point: equation left != right (1)");
              let $ = A(m * b),
                K = A(w * E);
              if ($ !== K) throw Error("bad point: equation left != right (2)");
              return !0;
            });
          let d = class d {
            constructor(o, l, _, f) {
              (this.ex = o),
                (this.ey = l),
                (this.ez = _),
                (this.et = f),
                g("x", o),
                g("y", l),
                g("z", _),
                g("t", f),
                Object.freeze(this);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(o) {
              if (o instanceof d) throw Error("extended point not allowed");
              let { x: l, y: _ } = o || {};
              return g("x", l), g("y", _), new d(l, _, e4, A(l * _));
            }
            static normalizeZ(o) {
              let l = f.invertBatch(o.map((o) => o.ez));
              return o.map((o, _) => o.toAffine(l[_])).map(d.fromAffine);
            }
            static msm(o, l) {
              return (function (o, l, _, f) {
                if (
                  ((function (o, l) {
                    if (!Array.isArray(o)) throw Error("array expected");
                    o.forEach((o, _) => {
                      if (!(o instanceof l))
                        throw Error("invalid point at index " + _);
                    });
                  })(_, o),
                  (function (o, l) {
                    if (!Array.isArray(o))
                      throw Error("array of scalars expected");
                    o.forEach((o, _) => {
                      if (!l.isValid(o))
                        throw Error("invalid scalar at index " + _);
                    });
                  })(f, l),
                  _.length !== f.length)
                )
                  throw Error(
                    "arrays of points and scalars must have equal length"
                  );
                let m = o.ZERO,
                  b = (function (o) {
                    let l;
                    for (l = 0; o > e$; o >>= ez, l += 1);
                    return l;
                  })(BigInt(_.length)),
                  w = b > 12 ? b - 3 : b > 4 ? b - 2 : b ? 2 : 1,
                  E = (1 << w) - 1,
                  D = Array(E + 1).fill(m),
                  P = Math.floor((l.BITS - 1) / w) * w,
                  C = m;
                for (let o = P; o >= 0; o -= w) {
                  D.fill(m);
                  for (let l = 0; l < f.length; l++) {
                    let m = f[l],
                      b = Number((m >> BigInt(o)) & BigInt(E));
                    D[b] = D[b].add(_[l]);
                  }
                  let l = m;
                  for (let o = D.length - 1, _ = m; o > 0; o--)
                    (_ = _.add(D[o])), (l = l.add(_));
                  if (((C = C.add(l)), 0 !== o))
                    for (let o = 0; o < w; o++) C = C.double();
                }
                return C;
              })(d, R, o, l);
            }
            _setWindowSize(o) {
              Q.setWindowSize(this, o);
            }
            assertValidity() {
              K(this);
            }
            equals(o) {
              S(o);
              let { ex: l, ey: _, ez: f } = this,
                { ex: m, ey: b, ez: w } = o,
                E = A(l * w),
                D = A(m * f),
                P = A(_ * w),
                C = A(b * f);
              return E === D && P === C;
            }
            is0() {
              return this.equals(d.ZERO);
            }
            negate() {
              return new d(A(-this.ex), this.ey, this.ez, A(-this.et));
            }
            double() {
              let { a: o } = _,
                { ex: l, ey: f, ez: m } = this,
                b = A(l * l),
                w = A(f * f),
                E = A(e6 * A(m * m)),
                D = A(o * b),
                P = l + f,
                C = A(A(P * P) - b - w),
                R = D + w,
                j = R - E,
                q = D - w,
                M = A(C * j),
                $ = A(R * q),
                K = A(C * q),
                G = A(j * R);
              return new d(M, $, G, K);
            }
            add(o) {
              S(o);
              let { a: l, d: f } = _,
                { ex: m, ey: b, ez: w, et: E } = this,
                { ex: D, ey: P, ez: C, et: R } = o;
              if (l === BigInt(-1)) {
                let o = A((b - m) * (P + D)),
                  l = A((b + m) * (P - D)),
                  _ = A(l - o);
                if (_ === e5) return this.double();
                let f = A(w * e6 * R),
                  j = A(E * e6 * C),
                  q = j + f,
                  M = l + o,
                  $ = j - f,
                  K = A(q * _),
                  G = A(M * $),
                  Y = A(q * $),
                  Q = A(_ * M);
                return new d(K, G, Q, Y);
              }
              let j = A(m * D),
                q = A(b * P),
                M = A(E * f * R),
                $ = A(w * C),
                K = A((m + b) * (D + P) - j - q),
                G = $ - M,
                Y = $ + M,
                Q = A(q - l * j),
                Z = A(K * G),
                ei = A(Y * Q),
                es = A(K * Q),
                en = A(G * Y);
              return new d(Z, ei, en, es);
            }
            subtract(o) {
              return this.add(o.negate());
            }
            wNAF(o) {
              return Q.wNAFCached(this, o, d.normalizeZ);
            }
            multiply(o) {
              ft("scalar", o, e4, m);
              let { p: l, f: _ } = this.wNAF(o);
              return d.normalizeZ([l, _])[0];
            }
            multiplyUnsafe(o, l = d.ZERO) {
              return (
                ft("scalar", o, e5, m),
                o === e5
                  ? Y
                  : this.is0() || o === e4
                  ? this
                  : Q.wNAFCachedUnsafe(this, o, d.normalizeZ, l)
              );
            }
            isSmallOrder() {
              return this.multiplyUnsafe(P).is0();
            }
            isTorsionFree() {
              return Q.unsafeLadder(this, m).is0();
            }
            toAffine(o) {
              return $(this, o);
            }
            clearCofactor() {
              let { h: o } = _;
              return o === e4 ? this : this.multiplyUnsafe(o);
            }
            static fromHex(o, l = !1) {
              let { d: m, a: b } = _,
                w = f.BYTES;
              (o = W("pointHex", o, w)), Tt("zip215", l);
              let E = o.slice(),
                D = o[w - 1];
              E[w - 1] = -129 & D;
              let P = Et(E),
                R = l ? C : f.ORDER;
              ft("pointHex.y", P, e5, R);
              let q = A(P * P),
                M = A(q - e4),
                $ = A(m * q - b),
                { isValid: K, value: G } = j(M, $);
              if (!K) throw Error("Point.fromHex: invalid y coordinate");
              let Y = (G & e4) === e4,
                Q = (128 & D) != 0;
              if (!l && G === e5 && Q)
                throw Error("Point.fromHex: x=0 and x_0=1");
              return Q !== Y && (G = A(-G)), d.fromAffine({ x: G, y: P });
            }
            static fromPrivateKey(o) {
              return O(o).point;
            }
            toRawBytes() {
              let { x: o, y: l } = this.toAffine(),
                _ = Nt(l, f.BYTES);
              return (_[_.length - 1] |= o & e4 ? 128 : 0), _;
            }
            toHex() {
              return Ft(this.toRawBytes());
            }
          };
          (d.BASE = new d(_.Gx, _.Gy, e4, A(_.Gx * _.Gy))),
            (d.ZERO = new d(e5, e4, e4, e5));
          let { BASE: G, ZERO: Y } = d,
            Q =
              ((l = 8 * D),
              {
                constTimeNegate: zt,
                hasPrecomputes: (o) => 1 !== $t(o),
                unsafeLadder(o, l, _ = d.ZERO) {
                  let f = o;
                  for (; l > e1; )
                    l & e2 && (_ = _.add(f)), (f = f.double()), (l >>= e2);
                  return _;
                },
                precomputeWindow(o, _) {
                  let { windows: f, windowSize: m } = Mt(_, l),
                    b = [],
                    w = o,
                    E = w;
                  for (let o = 0; o < f; o++) {
                    (E = w), b.push(E);
                    for (let o = 1; o < m; o++) (E = E.add(w)), b.push(E);
                    w = E.double();
                  }
                  return b;
                },
                wNAF(o, _, f) {
                  let { windows: m, windowSize: b } = Mt(o, l),
                    w = d.ZERO,
                    E = d.BASE,
                    D = BigInt(2 ** o - 1),
                    P = 2 ** o,
                    C = BigInt(o);
                  for (let o = 0; o < m; o++) {
                    let l = o * b,
                      m = Number(f & D);
                    (f >>= C), m > b && ((m -= P), (f += e2));
                    let A = l + Math.abs(m) - 1,
                      R = o % 2 != 0,
                      j = m < 0;
                    0 === m
                      ? (E = E.add(zt(R, _[l])))
                      : (w = w.add(zt(j, _[A])));
                  }
                  return { p: w, f: E };
                },
                wNAFUnsafe(o, _, f, m = d.ZERO) {
                  let { windows: b, windowSize: w } = Mt(o, l),
                    E = BigInt(2 ** o - 1),
                    D = 2 ** o,
                    P = BigInt(o);
                  for (let o = 0; o < b; o++) {
                    let l = o * w;
                    if (f === e1) break;
                    let b = Number(f & E);
                    if (((f >>= P), b > w && ((b -= D), (f += e2)), 0 === b))
                      continue;
                    let C = _[l + Math.abs(b) - 1];
                    b < 0 && (C = C.negate()), (m = m.add(C));
                  }
                  return m;
                },
                getPrecomputes(o, l, _) {
                  let f = e8.get(l);
                  return (
                    f ||
                      ((f = this.precomputeWindow(l, o)),
                      1 !== o && e8.set(l, _(f))),
                    f
                  );
                },
                wNAFCached(o, l, _) {
                  let f = $t(o);
                  return this.wNAF(f, this.getPrecomputes(f, o, _), l);
                },
                wNAFCachedUnsafe(o, l, _, f) {
                  let m = $t(o);
                  return 1 === m
                    ? this.unsafeLadder(o, l, f)
                    : this.wNAFUnsafe(m, this.getPrecomputes(m, o, _), l, f);
                },
                setWindowSize(o, _) {
                  ve(_, l), e3.set(o, _), e8.delete(o);
                },
              });
          function O(o) {
            let l = f.BYTES;
            o = W("private key", o, l);
            let _ = W("hashed private key", w(o), 2 * l),
              b = q(_.slice(0, l)),
              E = _.slice(l, 2 * l),
              D = H(Et(b), m),
              P = G.multiply(D),
              C = P.toRawBytes();
            return { head: b, prefix: E, scalar: D, point: P, pointBytes: C };
          }
          function tt(o = new Uint8Array(), ...l) {
            let _ = ye(...l);
            return H(Et(w(M(_, W("context", o), !!b))), m);
          }
          return (
            G._setWindowSize(8),
            {
              CURVE: _,
              getPublicKey: function (o) {
                return O(o).pointBytes;
              },
              sign: function (o, l, _ = {}) {
                (o = W("message", o)), b && (o = b(o));
                let { prefix: w, scalar: E, pointBytes: D } = O(l),
                  P = tt(_.context, w, o),
                  C = G.multiply(P).toRawBytes(),
                  A = tt(_.context, C, D, o),
                  R = H(P + A * E, m);
                ft("signature.s", R, e5, m);
                let j = ye(C, Nt(R, f.BYTES));
                return W("result", j, 2 * f.BYTES);
              },
              verify: function (o, l, _, m = e7) {
                let w, E, D;
                let { context: P, zip215: C } = m,
                  A = f.BYTES;
                (o = W("signature", o, 2 * A)),
                  (l = W("message", l)),
                  (_ = W("publicKey", _, A)),
                  void 0 !== C && Tt("zip215", C),
                  b && (l = b(l));
                let R = Et(o.slice(A, 2 * A));
                try {
                  (w = d.fromHex(_, C)),
                    (E = d.fromHex(o.slice(0, A), C)),
                    (D = G.multiplyUnsafe(R));
                } catch {
                  return !1;
                }
                if (!C && w.isSmallOrder()) return !1;
                let j = tt(P, E.toRawBytes(), w.toRawBytes(), l);
                return E.add(w.multiplyUnsafe(j))
                  .subtract(D)
                  .clearCofactor()
                  .equals(d.ZERO);
              },
              ExtendedPoint: d,
              utils: {
                getExtendedPublicKey: O,
                randomPrivateKey: () => E(f.BYTES),
                precompute: (o = 8, l = d.BASE) => (
                  l._setWindowSize(o), l.multiply(BigInt(3)), l
                ),
              },
            }
          );
        })(tc),
        tl = "base64url",
        th = "utf8",
        tu = "utf8",
        t_ = "base58btc";
      function Xt(o) {
        return null != globalThis.Buffer
          ? new Uint8Array(o.buffer, o.byteOffset, o.byteLength)
          : o;
      }
      function Le(o = 0) {
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? Xt(globalThis.Buffer.allocUnsafe(o))
          : new Uint8Array(o);
      }
      function Oe(o, l) {
        l || (l = o.reduce((o, l) => o + l.length, 0));
        let _ = Le(l),
          f = 0;
        for (let l of o) _.set(l, f), (f += l.length);
        return Xt(_);
      }
      var Tr = function (o, l) {
        if (o.length >= 255) throw TypeError("Alphabet too long");
        for (var _ = new Uint8Array(256), f = 0; f < _.length; f++) _[f] = 255;
        for (var m = 0; m < o.length; m++) {
          var b = o.charAt(m),
            w = b.charCodeAt(0);
          if (255 !== _[w]) throw TypeError(b + " is ambiguous");
          _[w] = m;
        }
        var E = o.length,
          D = o.charAt(0),
          P = Math.log(E) / Math.log(256),
          C = Math.log(256) / Math.log(E);
        function p(o) {
          if ("string" != typeof o) throw TypeError("Expected String");
          if (0 === o.length) return new Uint8Array();
          var l = 0;
          if (" " !== o[0]) {
            for (var f = 0, m = 0; o[l] === D; ) f++, l++;
            for (
              var b = ((o.length - l) * P + 1) >>> 0, w = new Uint8Array(b);
              o[l];

            ) {
              var C = _[o.charCodeAt(l)];
              if (255 === C) return;
              for (
                var A = 0, R = b - 1;
                (0 !== C || A < m) && -1 !== R;
                R--, A++
              )
                (C += (E * w[R]) >>> 0),
                  (w[R] = C % 256 >>> 0),
                  (C = (C / 256) >>> 0);
              if (0 !== C) throw Error("Non-zero carry");
              (m = A), l++;
            }
            if (" " !== o[l]) {
              for (var j = b - m; j !== b && 0 === w[j]; ) j++;
              for (var q = new Uint8Array(f + (b - j)), M = f; j !== b; )
                q[M++] = w[j++];
              return q;
            }
          }
        }
        return {
          encode: function (l) {
            if (
              (l instanceof Uint8Array ||
                (ArrayBuffer.isView(l)
                  ? (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength))
                  : Array.isArray(l) && (l = Uint8Array.from(l))),
              !(l instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === l.length) return "";
            for (var _ = 0, f = 0, m = 0, b = l.length; m !== b && 0 === l[m]; )
              m++, _++;
            for (
              var w = ((b - m) * C + 1) >>> 0, P = new Uint8Array(w);
              m !== b;

            ) {
              for (
                var A = l[m], R = 0, j = w - 1;
                (0 !== A || R < f) && -1 !== j;
                j--, R++
              )
                (A += (256 * P[j]) >>> 0),
                  (P[j] = A % E >>> 0),
                  (A = (A / E) >>> 0);
              if (0 !== A) throw Error("Non-zero carry");
              (f = R), m++;
            }
            for (var q = w - f; q !== w && 0 === P[q]; ) q++;
            for (var M = D.repeat(_); q < w; ++q) M += o.charAt(P[q]);
            return M;
          },
          decodeUnsafe: p,
          decode: function (o) {
            var _ = p(o);
            if (_) return _;
            throw Error(`Non-${l} character`);
          },
        };
      };
      let He = (o) => {
          if (o instanceof Uint8Array && "Uint8Array" === o.constructor.name)
            return o;
          if (o instanceof ArrayBuffer) return new Uint8Array(o);
          if (ArrayBuffer.isView(o))
            return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        Fr = (o) => new TextEncoder().encode(o),
        Nr = (o) => new TextDecoder().decode(o);
      let Lr = class Lr {
        constructor(o, l, _) {
          (this.name = o), (this.prefix = l), (this.baseEncode = _);
        }
        encode(o) {
          if (o instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(o)}`;
          throw Error("Unknown type, must be binary type");
        }
      };
      let Or = class Or {
        constructor(o, l, _) {
          if (((this.name = o), (this.prefix = l), void 0 === l.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = l.codePointAt(0)), (this.baseDecode = _);
        }
        decode(o) {
          if ("string" == typeof o) {
            if (o.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(o)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(o.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(o) {
          return ze(this, o);
        }
      };
      let Hr = class Hr {
        constructor(o) {
          this.decoders = o;
        }
        or(o) {
          return ze(this, o);
        }
        decode(o) {
          let l = o[0],
            _ = this.decoders[l];
          if (_) return _.decode(o);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              o
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      };
      let ze = (o, l) =>
        new Hr({
          ...(o.decoders || { [o.prefix]: o }),
          ...(l.decoders || { [l.prefix]: l }),
        });
      let zr = class zr {
        constructor(o, l, _, f) {
          (this.name = o),
            (this.prefix = l),
            (this.baseEncode = _),
            (this.baseDecode = f),
            (this.encoder = new Lr(o, l, _)),
            (this.decoder = new Or(o, l, f));
        }
        encode(o) {
          return this.encoder.encode(o);
        }
        decode(o) {
          return this.decoder.decode(o);
        }
      };
      let Bt = ({ name: o, prefix: l, encode: _, decode: f }) =>
          new zr(o, l, _, f),
        ht = ({ prefix: o, name: l, alphabet: _ }) => {
          let { encode: f, decode: m } = Tr(_, l);
          return Bt({ prefix: o, name: l, encode: f, decode: (o) => He(m(o)) });
        },
        Mr = (o, l, _, f) => {
          let m = {};
          for (let o = 0; o < l.length; ++o) m[l[o]] = o;
          let b = o.length;
          for (; "=" === o[b - 1]; ) --b;
          let w = new Uint8Array(((b * _) / 8) | 0),
            E = 0,
            D = 0,
            P = 0;
          for (let l = 0; l < b; ++l) {
            let b = m[o[l]];
            if (void 0 === b) throw SyntaxError(`Non-${f} character`);
            (D = (D << _) | b),
              (E += _) >= 8 && ((E -= 8), (w[P++] = 255 & (D >> E)));
          }
          if (E >= _ || 255 & (D << (8 - E)))
            throw SyntaxError("Unexpected end of data");
          return w;
        },
        qr = (o, l, _) => {
          let f = "=" === l[l.length - 1],
            m = (1 << _) - 1,
            b = "",
            w = 0,
            E = 0;
          for (let f = 0; f < o.length; ++f)
            for (E = (E << 8) | o[f], w += 8; w > _; )
              (w -= _), (b += l[m & (E >> w)]);
          if ((w && (b += l[m & (E << (_ - w))]), f))
            for (; (b.length * _) & 7; ) b += "=";
          return b;
        },
        k = ({ name: o, prefix: l, bitsPerChar: _, alphabet: f }) =>
          Bt({
            prefix: l,
            name: o,
            encode: (o) => qr(o, f, _),
            decode: (l) => Mr(l, f, _, o),
          }),
        tp = Bt({
          prefix: "\x00",
          name: "identity",
          encode: (o) => Nr(o),
          decode: (o) => Fr(o),
        });
      var tf = Object.freeze({ __proto__: null, identity: tp });
      let tg = k({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var ty = Object.freeze({ __proto__: null, base2: tg });
      let tm = k({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var tv = Object.freeze({ __proto__: null, base8: tm });
      let tb = ht({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var tx = Object.freeze({ __proto__: null, base10: tb });
      let tw = k({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        tE = k({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var tI = Object.freeze({ __proto__: null, base16: tw, base16upper: tE });
      let tS = k({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        tD = k({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        tP = k({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        tO = k({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        tC = k({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        tA = k({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        tR = k({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        tT = k({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        tN = k({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var tj = Object.freeze({
        __proto__: null,
        base32: tS,
        base32upper: tD,
        base32pad: tP,
        base32padupper: tO,
        base32hex: tC,
        base32hexupper: tA,
        base32hexpad: tR,
        base32hexpadupper: tT,
        base32z: tN,
      });
      let tk = ht({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        tL = ht({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var tB = Object.freeze({ __proto__: null, base36: tk, base36upper: tL });
      let tU = ht({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        tq = ht({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var tM = Object.freeze({
        __proto__: null,
        base58btc: tU,
        base58flickr: tq,
      });
      let t$ = k({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        tz = k({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        tH = k({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        tF = k({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var tV = Object.freeze({
        __proto__: null,
        base64: t$,
        base64pad: tz,
        base64url: tH,
        base64urlpad: tF,
      });
      let tK = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        tW = tK.reduce((o, l, _) => ((o[_] = l), o), []),
        tG = tK.reduce((o, l, _) => ((o[l.codePointAt(0)] = _), o), []),
        tJ = Bt({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (o) {
            return o.reduce((o, l) => (o += tW[l]), "");
          },
          decode: function (o) {
            let l = [];
            for (let _ of o) {
              let o = tG[_.codePointAt(0)];
              if (void 0 === o) throw Error(`Non-base256emoji character: ${_}`);
              l.push(o);
            }
            return new Uint8Array(l);
          },
        });
      var tY = Object.freeze({ __proto__: null, base256emoji: tJ });
      function $e(o, l, _) {
        (l = l || []), (_ = _ || 0);
        for (var f = _; o >= 2147483648; )
          (l[_++] = (255 & o) | 128), (o /= 128);
        for (; -128 & o; ) (l[_++] = (255 & o) | 128), (o >>>= 7);
        return (l[_] = 0 | o), ($e.bytes = _ - f + 1), l;
      }
      function Pt(o, l) {
        var _,
          f = 0,
          l = l || 0,
          m = 0,
          b = l,
          w = o.length;
        do {
          if (b >= w)
            throw ((Pt.bytes = 0), RangeError("Could not decode varint"));
          (_ = o[b++]),
            (f += m < 28 ? (127 & _) << m : (127 & _) * Math.pow(2, m)),
            (m += 7);
        } while (_ >= 128);
        return (Pt.bytes = b - l), f;
      }
      var tX = {
        encode: $e,
        decode: Pt,
        encodingLength: function (o) {
          return o < 128
            ? 1
            : o < 16384
            ? 2
            : o < 2097152
            ? 3
            : o < 268435456
            ? 4
            : o < 34359738368
            ? 5
            : o < 4398046511104
            ? 6
            : o < 562949953421312
            ? 7
            : o < 72057594037927940
            ? 8
            : o < 0x7fffffffffffffff
            ? 9
            : 10;
        },
      };
      let je = (o, l, _ = 0) => (tX.encode(o, l, _), l),
        Ze = (o) => tX.encodingLength(o),
        Qt = (o, l) => {
          let _ = l.byteLength,
            f = Ze(o),
            m = f + Ze(_),
            b = new Uint8Array(m + _);
          return je(o, b, 0), je(_, b, f), b.set(l, m), new Ro(o, _, l, b);
        };
      let Ro = class Ro {
        constructor(o, l, _, f) {
          (this.code = o), (this.size = l), (this.digest = _), (this.bytes = f);
        }
      };
      let Ge = ({ name: o, code: l, encode: _ }) => new jo(o, l, _);
      let jo = class jo {
        constructor(o, l, _) {
          (this.name = o), (this.code = l), (this.encode = _);
        }
        digest(o) {
          if (o instanceof Uint8Array) {
            let l = this.encode(o);
            return l instanceof Uint8Array
              ? Qt(this.code, l)
              : l.then((o) => Qt(this.code, o));
          }
          throw Error("Unknown type, must be binary type");
        }
      };
      let Ve = (o) => async (l) =>
          new Uint8Array(await crypto.subtle.digest(o, l)),
        tQ = Ge({ name: "sha2-256", code: 18, encode: Ve("SHA-256") }),
        tZ = Ge({ name: "sha2-512", code: 19, encode: Ve("SHA-512") });
      var t0 = Object.freeze({ __proto__: null, sha256: tQ, sha512: tZ }),
        t1 = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: He,
            digest: (o) => Qt(0, He(o)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let t2 = {
        ...tf,
        ...ty,
        ...tv,
        ...tx,
        ...tI,
        ...tj,
        ...tB,
        ...tM,
        ...tV,
        ...tY,
      };
      function We(o, l, _, f) {
        return {
          name: o,
          prefix: l,
          encoder: { name: o, prefix: l, encode: _ },
          decoder: { decode: f },
        };
      }
      ({ ...t0, ...t1 });
      let t8 = We(
          "utf8",
          "u",
          (o) => "u" + new TextDecoder("utf8").decode(o),
          (o) => new TextEncoder().encode(o.substring(1))
        ),
        t3 = We(
          "ascii",
          "a",
          (o) => {
            let l = "a";
            for (let _ = 0; _ < o.length; _++) l += String.fromCharCode(o[_]);
            return l;
          },
          (o) => {
            o = o.substring(1);
            let l = Le(o.length);
            for (let _ = 0; _ < o.length; _++) l[_] = o.charCodeAt(_);
            return l;
          }
        ),
        t5 = {
          utf8: t8,
          "utf-8": t8,
          hex: t2.base16,
          latin1: t3,
          ascii: t3,
          binary: t3,
          ...t2,
        };
      function ct(o, l = "utf8") {
        let _ = t5[l];
        if (!_) throw Error(`Unsupported encoding "${l}"`);
        return ("utf8" === l || "utf-8" === l) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(
              o.buffer,
              o.byteOffset,
              o.byteLength
            ).toString("utf8")
          : _.encoder.encode(o).substring(1);
      }
      function rt(o, l = "utf8") {
        let _ = t5[l];
        if (!_) throw Error(`Unsupported encoding "${l}"`);
        return ("utf8" === l || "utf-8" === l) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? Xt(globalThis.Buffer.from(o, "utf-8"))
          : _.decoder.decode(`${_.prefix}${o}`);
      }
      function lt(o) {
        return safeJsonParse(ct(rt(o, tl), th));
      }
      function bt(o) {
        return ct(rt(safeJsonStringify(o), th), tl);
      }
      function Qe(o) {
        let l = rt("K36", t_),
          _ = "z" + ct(Oe([l, o]), t_);
        return ["did", "key", _].join(":");
      }
      function sn(o) {
        let l = o.split("."),
          _ = lt(l[0]),
          f = lt(l[1]),
          m = rt(l[2], tl),
          b = rt(l.slice(0, 2).join("."), tu);
        return { header: _, payload: f, signature: m, data: b };
      }
      function Po(o = he(32)) {
        let l = td.getPublicKey(o);
        return { secretKey: Oe([o, l]), publicKey: l };
      }
      async function Qo(o, l, _, f, m = (0, en.fromMiliseconds)(Date.now())) {
        var b, w;
        let E = { alg: "EdDSA", typ: "JWT" },
          D = Qe(f.publicKey),
          P = { iss: D, sub: o, aud: l, iat: m, exp: m + _ },
          C = rt(
            [bt((b = { header: E, payload: P }).header), bt(b.payload)].join(
              "."
            ),
            tu
          ),
          A = td.sign(C, f.secretKey.slice(0, 32));
        return [
          bt((w = { header: E, payload: P, signature: A }).header),
          bt(w.payload),
          ct(w.signature, tl),
        ].join(".");
      }
      function allocUnsafe(o = 0) {
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? globalThis.Buffer.allocUnsafe(o)
          : new Uint8Array(o);
      }
      function concat(o, l) {
        l || (l = o.reduce((o, l) => o + l.length, 0));
        let _ = allocUnsafe(l),
          f = 0;
        for (let l of o) _.set(l, f), (f += l.length);
        return _;
      }
      var base_x = function (o, l) {
        if (o.length >= 255) throw TypeError("Alphabet too long");
        for (var _ = new Uint8Array(256), f = 0; f < _.length; f++) _[f] = 255;
        for (var m = 0; m < o.length; m++) {
          var b = o.charAt(m),
            w = b.charCodeAt(0);
          if (255 !== _[w]) throw TypeError(b + " is ambiguous");
          _[w] = m;
        }
        var E = o.length,
          D = o.charAt(0),
          P = Math.log(E) / Math.log(256),
          C = Math.log(256) / Math.log(E);
        function decodeUnsafe(o) {
          if ("string" != typeof o) throw TypeError("Expected String");
          if (0 === o.length) return new Uint8Array();
          var l = 0;
          if (" " !== o[0]) {
            for (var f = 0, m = 0; o[l] === D; ) f++, l++;
            for (
              var b = ((o.length - l) * P + 1) >>> 0, w = new Uint8Array(b);
              o[l];

            ) {
              var C = _[o.charCodeAt(l)];
              if (255 === C) return;
              for (
                var A = 0, R = b - 1;
                (0 !== C || A < m) && -1 !== R;
                R--, A++
              )
                (C += (E * w[R]) >>> 0),
                  (w[R] = C % 256 >>> 0),
                  (C = (C / 256) >>> 0);
              if (0 !== C) throw Error("Non-zero carry");
              (m = A), l++;
            }
            if (" " !== o[l]) {
              for (var j = b - m; j !== b && 0 === w[j]; ) j++;
              for (var q = new Uint8Array(f + (b - j)), M = f; j !== b; )
                q[M++] = w[j++];
              return q;
            }
          }
        }
        return {
          encode: function (l) {
            if (
              (l instanceof Uint8Array ||
                (ArrayBuffer.isView(l)
                  ? (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength))
                  : Array.isArray(l) && (l = Uint8Array.from(l))),
              !(l instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === l.length) return "";
            for (var _ = 0, f = 0, m = 0, b = l.length; m !== b && 0 === l[m]; )
              m++, _++;
            for (
              var w = ((b - m) * C + 1) >>> 0, P = new Uint8Array(w);
              m !== b;

            ) {
              for (
                var A = l[m], R = 0, j = w - 1;
                (0 !== A || R < f) && -1 !== j;
                j--, R++
              )
                (A += (256 * P[j]) >>> 0),
                  (P[j] = A % E >>> 0),
                  (A = (A / E) >>> 0);
              if (0 !== A) throw Error("Non-zero carry");
              (f = R), m++;
            }
            for (var q = w - f; q !== w && 0 === P[q]; ) q++;
            for (var M = D.repeat(_); q < w; ++q) M += o.charAt(P[q]);
            return M;
          },
          decodeUnsafe: decodeUnsafe,
          decode: function (o) {
            var _ = decodeUnsafe(o);
            if (_) return _;
            throw Error(`Non-${l} character`);
          },
        };
      };
      new Uint8Array(0);
      let equals = (o, l) => {
          if (o === l) return !0;
          if (o.byteLength !== l.byteLength) return !1;
          for (let _ = 0; _ < o.byteLength; _++) if (o[_] !== l[_]) return !1;
          return !0;
        },
        coerce = (o) => {
          if (o instanceof Uint8Array && "Uint8Array" === o.constructor.name)
            return o;
          if (o instanceof ArrayBuffer) return new Uint8Array(o);
          if (ArrayBuffer.isView(o))
            return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        fromString = (o) => new TextEncoder().encode(o),
        bytes_toString = (o) => new TextDecoder().decode(o);
      let Encoder = class Encoder {
        constructor(o, l, _) {
          (this.name = o), (this.prefix = l), (this.baseEncode = _);
        }
        encode(o) {
          if (o instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(o)}`;
          throw Error("Unknown type, must be binary type");
        }
      };
      let Decoder = class Decoder {
        constructor(o, l, _) {
          if (((this.name = o), (this.prefix = l), void 0 === l.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = l.codePointAt(0)), (this.baseDecode = _);
        }
        decode(o) {
          if ("string" == typeof o) {
            if (o.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(o)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(o.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(o) {
          return base_or(this, o);
        }
      };
      let ComposedDecoder = class ComposedDecoder {
        constructor(o) {
          this.decoders = o;
        }
        or(o) {
          return base_or(this, o);
        }
        decode(o) {
          let l = o[0],
            _ = this.decoders[l];
          if (_) return _.decode(o);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              o
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      };
      let base_or = (o, l) =>
        new ComposedDecoder({
          ...(o.decoders || { [o.prefix]: o }),
          ...(l.decoders || { [l.prefix]: l }),
        });
      let Codec = class Codec {
        constructor(o, l, _, f) {
          (this.name = o),
            (this.prefix = l),
            (this.baseEncode = _),
            (this.baseDecode = f),
            (this.encoder = new Encoder(o, l, _)),
            (this.decoder = new Decoder(o, l, f));
        }
        encode(o) {
          return this.encoder.encode(o);
        }
        decode(o) {
          return this.decoder.decode(o);
        }
      };
      let from = ({ name: o, prefix: l, encode: _, decode: f }) =>
          new Codec(o, l, _, f),
        baseX = ({ prefix: o, name: l, alphabet: _ }) => {
          let { encode: f, decode: m } = base_x(_, l);
          return from({
            prefix: o,
            name: l,
            encode: f,
            decode: (o) => coerce(m(o)),
          });
        },
        decode = (o, l, _, f) => {
          let m = {};
          for (let o = 0; o < l.length; ++o) m[l[o]] = o;
          let b = o.length;
          for (; "=" === o[b - 1]; ) --b;
          let w = new Uint8Array(((b * _) / 8) | 0),
            E = 0,
            D = 0,
            P = 0;
          for (let l = 0; l < b; ++l) {
            let b = m[o[l]];
            if (void 0 === b) throw SyntaxError(`Non-${f} character`);
            (D = (D << _) | b),
              (E += _) >= 8 && ((E -= 8), (w[P++] = 255 & (D >> E)));
          }
          if (E >= _ || 255 & (D << (8 - E)))
            throw SyntaxError("Unexpected end of data");
          return w;
        },
        encode = (o, l, _) => {
          let f = "=" === l[l.length - 1],
            m = (1 << _) - 1,
            b = "",
            w = 0,
            E = 0;
          for (let f = 0; f < o.length; ++f)
            for (E = (E << 8) | o[f], w += 8; w > _; )
              (w -= _), (b += l[m & (E >> w)]);
          if ((w && (b += l[m & (E << (_ - w))]), f))
            for (; (b.length * _) & 7; ) b += "=";
          return b;
        },
        rfc4648 = ({ name: o, prefix: l, bitsPerChar: _, alphabet: f }) =>
          from({
            prefix: l,
            name: o,
            encode: (o) => encode(o, f, _),
            decode: (l) => decode(l, f, _, o),
          }),
        t4 = from({
          prefix: "\x00",
          name: "identity",
          encode: (o) => bytes_toString(o),
          decode: (o) => fromString(o),
        }),
        t6 = rfc4648({
          prefix: "0",
          name: "base2",
          alphabet: "01",
          bitsPerChar: 1,
        }),
        t9 = rfc4648({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        t7 = baseX({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        it = rfc4648({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        ii = rfc4648({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        ir = rfc4648({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        io = rfc4648({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        ia = rfc4648({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        ic = rfc4648({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        id = rfc4648({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        il = rfc4648({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        ih = rfc4648({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        iu = rfc4648({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        i_ = rfc4648({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        ip = baseX({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        ig = baseX({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        iy = baseX({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        im = baseX({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        iv = rfc4648({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        ib = rfc4648({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        ix = rfc4648({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        iw = rfc4648({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        iE = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        iI = iE.reduce((o, l, _) => ((o[_] = l), o), []),
        iS = iE.reduce((o, l, _) => ((o[l.codePointAt(0)] = _), o), []),
        iD = from({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (o) {
            return o.reduce((o, l) => (o += iI[l]), "");
          },
          decode: function (o) {
            let l = [];
            for (let _ of o) {
              let o = iS[_.codePointAt(0)];
              if (void 0 === o) throw Error(`Non-base256emoji character: ${_}`);
              l.push(o);
            }
            return new Uint8Array(l);
          },
        });
      function varint_encode(o, l, _) {
        l = l || [];
        for (var f = (_ = _ || 0); o >= 2147483648; )
          (l[_++] = (255 & o) | 128), (o /= 128);
        for (; -128 & o; ) (l[_++] = (255 & o) | 128), (o >>>= 7);
        return (l[_] = 0 | o), (varint_encode.bytes = _ - f + 1), l;
      }
      function read(o, l) {
        var _,
          f = 0,
          l = l || 0,
          m = 0,
          b = l,
          w = o.length;
        do {
          if (b >= w)
            throw ((read.bytes = 0), RangeError("Could not decode varint"));
          (_ = o[b++]),
            (f += m < 28 ? (127 & _) << m : (127 & _) * Math.pow(2, m)),
            (m += 7);
        } while (_ >= 128);
        return (read.bytes = b - l), f;
      }
      var iP = {
        encode: varint_encode,
        decode: read,
        encodingLength: function (o) {
          return o < 128
            ? 1
            : o < 16384
            ? 2
            : o < 2097152
            ? 3
            : o < 268435456
            ? 4
            : o < 34359738368
            ? 5
            : o < 4398046511104
            ? 6
            : o < 562949953421312
            ? 7
            : o < 72057594037927940
            ? 8
            : o < 0x7fffffffffffffff
            ? 9
            : 10;
        },
      };
      let src_varint_decode = (o, l = 0) => {
          let _ = iP.decode(o, l);
          return [_, iP.decode.bytes];
        },
        encodeTo = (o, l, _ = 0) => (iP.encode(o, l, _), l),
        encodingLength = (o) => iP.encodingLength(o),
        create = (o, l) => {
          let _ = l.byteLength,
            f = encodingLength(o),
            m = f + encodingLength(_),
            b = new Uint8Array(m + _);
          return (
            encodeTo(o, b, 0),
            encodeTo(_, b, f),
            b.set(l, m),
            new Digest(o, _, l, b)
          );
        },
        digest_decode = (o) => {
          let l = coerce(o),
            [_, f] = src_varint_decode(l),
            [m, b] = src_varint_decode(l.subarray(f)),
            w = l.subarray(f + b);
          if (w.byteLength !== m) throw Error("Incorrect length");
          return new Digest(_, m, w, l);
        },
        digest_equals = (o, l) =>
          o === l ||
          (o.code === l.code && o.size === l.size && equals(o.bytes, l.bytes));
      let Digest = class Digest {
        constructor(o, l, _, f) {
          (this.code = o), (this.size = l), (this.digest = _), (this.bytes = f);
        }
      };
      let hasher_from = ({ name: o, code: l, encode: _ }) =>
        new Hasher(o, l, _);
      let Hasher = class Hasher {
        constructor(o, l, _) {
          (this.name = o), (this.code = l), (this.encode = _);
        }
        digest(o) {
          if (o instanceof Uint8Array) {
            let l = this.encode(o);
            return l instanceof Uint8Array
              ? create(this.code, l)
              : l.then((o) => create(this.code, o));
          }
          throw Error("Unknown type, must be binary type");
        }
      };
      let sha = (o) => async (l) =>
          new Uint8Array(await crypto.subtle.digest(o, l)),
        iO = hasher_from({
          name: "sha2-256",
          code: 18,
          encode: sha("SHA-256"),
        }),
        iC = hasher_from({
          name: "sha2-512",
          code: 19,
          encode: sha("SHA-512"),
        }),
        iA = {
          code: 0,
          name: "identity",
          encode: coerce,
          digest: (o) => create(0, coerce(o)),
        },
        iR = "raw",
        iT = 85,
        raw_encode = (o) => coerce(o),
        raw_decode = (o) => coerce(o),
        iN = new TextEncoder(),
        ij = new TextDecoder(),
        ik = "json",
        iL = 512,
        json_encode = (o) => iN.encode(JSON.stringify(o)),
        json_decode = (o) => JSON.parse(ij.decode(o));
      let CID = class CID {
        constructor(o, l, _, f) {
          (this.code = l),
            (this.version = o),
            (this.multihash = _),
            (this.bytes = f),
            (this.byteOffset = f.byteOffset),
            (this.byteLength = f.byteLength),
            (this.asCID = this),
            (this._baseCache = new Map()),
            Object.defineProperties(this, {
              byteOffset: i$,
              byteLength: i$,
              code: iM,
              version: iM,
              multihash: iM,
              bytes: iM,
              _baseCache: i$,
              asCID: i$,
            });
        }
        toV0() {
          if (0 === this.version) return this;
          {
            let { code: o, multihash: l } = this;
            if (o !== iB)
              throw Error("Cannot convert a non dag-pb CID to CIDv0");
            if (l.code !== iU)
              throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
            return CID.createV0(l);
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              let { code: o, digest: l } = this.multihash,
                _ = create(o, l);
              return CID.createV1(this.code, _);
            }
            case 1:
              return this;
            default:
              throw Error(
                `Can not convert CID version ${this.version} to version 0. This is a bug please report`
              );
          }
        }
        equals(o) {
          return (
            o &&
            this.code === o.code &&
            this.version === o.version &&
            digest_equals(this.multihash, o.multihash)
          );
        }
        toString(o) {
          let { bytes: l, version: _, _baseCache: f } = this;
          return 0 === _
            ? toStringV0(l, f, o || iy.encoder)
            : toStringV1(l, f, o || ir.encoder);
        }
        toJSON() {
          return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes,
          };
        }
        get [Symbol.toStringTag]() {
          return "CID";
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return "CID(" + this.toString() + ")";
        }
        static isCID(o) {
          return deprecate(/^0\.0/, iz), !!(o && (o[iq] || o.asCID === o));
        }
        get toBaseEncodedString() {
          throw Error("Deprecated, use .toString()");
        }
        get codec() {
          throw Error(
            '"codec" property is deprecated, use integer "code" property instead'
          );
        }
        get buffer() {
          throw Error(
            "Deprecated .buffer property, use .bytes to get Uint8Array instead"
          );
        }
        get multibaseName() {
          throw Error('"multibaseName" property is deprecated');
        }
        get prefix() {
          throw Error('"prefix" property is deprecated');
        }
        static asCID(o) {
          if (o instanceof CID) return o;
          if (null != o && o.asCID === o) {
            let { version: l, code: _, multihash: f, bytes: m } = o;
            return new CID(l, _, f, m || encodeCID(l, _, f.bytes));
          }
          if (null == o || !0 !== o[iq]) return null;
          {
            let { version: l, multihash: _, code: f } = o,
              m = digest_decode(_);
            return CID.create(l, f, m);
          }
        }
        static create(o, l, _) {
          if ("number" != typeof l)
            throw Error("String codecs are no longer supported");
          switch (o) {
            case 0:
              if (l === iB) return new CID(o, l, _, _.bytes);
              throw Error(
                `Version 0 CID must use dag-pb (code: ${iB}) block encoding`
              );
            case 1: {
              let f = encodeCID(o, l, _.bytes);
              return new CID(o, l, _, f);
            }
            default:
              throw Error("Invalid version");
          }
        }
        static createV0(o) {
          return CID.create(0, iB, o);
        }
        static createV1(o, l) {
          return CID.create(1, o, l);
        }
        static decode(o) {
          let [l, _] = CID.decodeFirst(o);
          if (_.length) throw Error("Incorrect length");
          return l;
        }
        static decodeFirst(o) {
          let l = CID.inspectBytes(o),
            _ = l.size - l.multihashSize,
            f = coerce(o.subarray(_, _ + l.multihashSize));
          if (f.byteLength !== l.multihashSize) throw Error("Incorrect length");
          let m = f.subarray(l.multihashSize - l.digestSize),
            b = new Digest(l.multihashCode, l.digestSize, m, f),
            w = 0 === l.version ? CID.createV0(b) : CID.createV1(l.codec, b);
          return [w, o.subarray(l.size)];
        }
        static inspectBytes(o) {
          let l = 0,
            next = () => {
              let [_, f] = src_varint_decode(o.subarray(l));
              return (l += f), _;
            },
            _ = next(),
            f = iB;
          if (
            (18 === _ ? ((_ = 0), (l = 0)) : 1 === _ && (f = next()),
            0 !== _ && 1 !== _)
          )
            throw RangeError(`Invalid CID version ${_}`);
          let m = l,
            b = next(),
            w = next(),
            E = l + w;
          return {
            version: _,
            codec: f,
            multihashCode: b,
            digestSize: w,
            multihashSize: E - m,
            size: E,
          };
        }
        static parse(o, l) {
          let [_, f] = parseCIDtoBytes(o, l),
            m = CID.decode(f);
          return m._baseCache.set(_, o), m;
        }
      };
      let parseCIDtoBytes = (o, l) => {
          switch (o[0]) {
            case "Q":
              return [iy.prefix, (l || iy).decode(`${iy.prefix}${o}`)];
            case iy.prefix:
              return [iy.prefix, (l || iy).decode(o)];
            case ir.prefix:
              return [ir.prefix, (l || ir).decode(o)];
            default:
              if (null == l)
                throw Error(
                  "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
                );
              return [o[0], l.decode(o)];
          }
        },
        toStringV0 = (o, l, _) => {
          let { prefix: f } = _;
          if (f !== iy.prefix)
            throw Error(`Cannot string encode V0 in ${_.name} encoding`);
          let m = l.get(f);
          if (null != m) return m;
          {
            let m = _.encode(o).slice(1);
            return l.set(f, m), m;
          }
        },
        toStringV1 = (o, l, _) => {
          let { prefix: f } = _,
            m = l.get(f);
          if (null != m) return m;
          {
            let m = _.encode(o);
            return l.set(f, m), m;
          }
        },
        iB = 112,
        iU = 18,
        encodeCID = (o, l, _) => {
          let f = encodingLength(o),
            m = f + encodingLength(l),
            b = new Uint8Array(m + _.byteLength);
          return encodeTo(o, b, 0), encodeTo(l, b, f), b.set(_, m), b;
        },
        iq = Symbol.for("@ipld/js-cid/CID"),
        iM = { writable: !1, configurable: !1, enumerable: !0 },
        i$ = { writable: !1, enumerable: !1, configurable: !1 },
        deprecate = (o, l) => {
          if (o.test("0.0.0-dev")) console.warn(l);
          else throw Error(l);
        },
        iz = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
        iH = { ...m, ...b, ...w, ...E, ...D, ...P, ...C, ...A, ...R, ...j };
      function createCodec(o, l, _, f) {
        return {
          name: o,
          prefix: l,
          encoder: { name: o, prefix: l, encode: _ },
          decoder: { decode: f },
        };
      }
      ({ ...q, ...M });
      let iF = createCodec(
          "utf8",
          "u",
          (o) => {
            let l = new TextDecoder("utf8");
            return "u" + l.decode(o);
          },
          (o) => {
            let l = new TextEncoder();
            return l.encode(o.substring(1));
          }
        ),
        iV = createCodec(
          "ascii",
          "a",
          (o) => {
            let l = "a";
            for (let _ = 0; _ < o.length; _++) l += String.fromCharCode(o[_]);
            return l;
          },
          (o) => {
            o = o.substring(1);
            let l = allocUnsafe(o.length);
            for (let _ = 0; _ < o.length; _++) l[_] = o.charCodeAt(_);
            return l;
          }
        ),
        iK = {
          utf8: iF,
          "utf-8": iF,
          hex: iH.base16,
          latin1: iV,
          ascii: iV,
          binary: iV,
          ...iH,
        };
      function from_string_fromString(o, l = "utf8") {
        let _ = iK[l];
        if (!_) throw Error(`Unsupported encoding "${l}"`);
        return ("utf8" === l || "utf-8" === l) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(o, "utf8")
          : _.decoder.decode(`${_.prefix}${o}`);
      }
      function to_string_toString(o, l = "utf8") {
        let _ = iK[l];
        if (!_) throw Error(`Unsupported encoding "${l}"`);
        return ("utf8" === l || "utf-8" === l) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(
              o.buffer,
              o.byteOffset,
              o.byteLength
            ).toString("utf8")
          : _.encoder.encode(o).substring(1);
      }
      let iW = {
        waku: {
          publish: "waku_publish",
          batchPublish: "waku_batchPublish",
          subscribe: "waku_subscribe",
          batchSubscribe: "waku_batchSubscribe",
          subscription: "waku_subscription",
          unsubscribe: "waku_unsubscribe",
          batchUnsubscribe: "waku_batchUnsubscribe",
          batchFetchMessages: "waku_batchFetchMessages",
        },
        irn: {
          publish: "irn_publish",
          batchPublish: "irn_batchPublish",
          subscribe: "irn_subscribe",
          batchSubscribe: "irn_batchSubscribe",
          subscription: "irn_subscription",
          unsubscribe: "irn_unsubscribe",
          batchUnsubscribe: "irn_batchUnsubscribe",
          batchFetchMessages: "irn_batchFetchMessages",
        },
        iridium: {
          publish: "iridium_publish",
          batchPublish: "iridium_batchPublish",
          subscribe: "iridium_subscribe",
          batchSubscribe: "iridium_batchSubscribe",
          subscription: "iridium_subscription",
          unsubscribe: "iridium_unsubscribe",
          batchUnsubscribe: "iridium_batchUnsubscribe",
          batchFetchMessages: "iridium_batchFetchMessages",
        },
      };
      var iG = _(21481),
        iJ = _(55872).Buffer;
      function index_es_Ie(o) {
        let [l, _] = o.split(":");
        return { namespace: l, reference: _ };
      }
      function index_es_Ko(o, l = []) {
        let _ = [];
        return (
          Object.keys(o).forEach((f) => {
            if (l.length && !l.includes(f)) return;
            let m = o[f];
            _.push(...m.accounts);
          }),
          _
        );
      }
      function ce(o, l) {
        return o.includes(":") ? [o] : l.chains || [];
      }
      var iY = Object.defineProperty,
        iX = Object.defineProperties,
        iQ = Object.getOwnPropertyDescriptors,
        iZ = Object.getOwnPropertySymbols,
        i0 = Object.prototype.hasOwnProperty,
        i1 = Object.prototype.propertyIsEnumerable,
        index_es_Rn = (o, l, _) =>
          l in o
            ? iY(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        dist_index_es_n = (o, l) => {
          for (var _ in l || (l = {})) i0.call(l, _) && index_es_Rn(o, _, l[_]);
          if (iZ) for (var _ of iZ(l)) i1.call(l, _) && index_es_Rn(o, _, l[_]);
          return o;
        },
        index_es_Jo = (o, l) => iX(o, iQ(l));
      let i2 = {
        reactNative: "react-native",
        node: "node",
        browser: "browser",
        unknown: "unknown",
      };
      function index_es_Re() {
        return (
          "u" > typeof iG &&
          "u" > typeof iG.versions &&
          "u" > typeof iG.versions.node
        );
      }
      function pt() {
        return (
          !(0, eo.getDocument)() &&
          !!(0, eo.getNavigator)() &&
          "ReactNative" === navigator.product
        );
      }
      function index_es_Yt() {
        return (
          !index_es_Re() && !!(0, eo.getNavigator)() && !!(0, eo.getDocument)()
        );
      }
      function index_es_xt() {
        return pt()
          ? i2.reactNative
          : index_es_Re()
          ? i2.node
          : index_es_Yt()
          ? i2.browser
          : i2.unknown;
      }
      function ri() {
        var o;
        try {
          return pt() &&
            "u" > typeof _.g &&
            "u" > typeof (null == _.g ? void 0 : _.g.Application)
            ? null == (o = _.g.Application)
              ? void 0
              : o.applicationId
            : void 0;
        } catch {
          return;
        }
      }
      function index_es_Pn() {
        return (
          (0, ea.D)() || { name: "", description: "", url: "", icons: [""] }
        );
      }
      function index_es_Mn(o, l, f) {
        let m = (function () {
            var o;
            if (
              index_es_xt() === i2.reactNative &&
              "u" > typeof _.g &&
              "u" > typeof (null == _.g ? void 0 : _.g.Platform)
            ) {
              let { OS: o, Version: l } = _.g.Platform;
              return [o, l].join("-");
            }
            let l = o
              ? parseUserAgent(o)
              : "undefined" == typeof document &&
                "undefined" != typeof navigator &&
                "ReactNative" === navigator.product
              ? new ReactNativeInfo()
              : "undefined" != typeof navigator
              ? parseUserAgent(navigator.userAgent)
              : void 0 !== Q && Q.version
              ? new NodeInfo(Q.version.slice(1))
              : null;
            if (null === l) return "unknown";
            let f = l.os ? l.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === l.type
              ? [f, l.name, l.version].join("-")
              : [f, l.version].join("-");
          })(),
          b = (function () {
            var o;
            let l = index_es_xt();
            return l === i2.browser
              ? [
                  l,
                  (null == (o = (0, eo.getLocation)()) ? void 0 : o.host) ||
                    "unknown",
                ].join(":")
              : l;
          })();
        return [[o, l].join("-"), ["js", f].join("-"), m, b].join("/");
      }
      function index_es_gt(o, l) {
        return o.filter((o) => l.includes(o)).length === o.length;
      }
      function fi(o) {
        return Object.fromEntries(o.entries());
      }
      function li(o) {
        return new Map(Object.entries(o));
      }
      function gi(o = en.FIVE_MINUTES, l) {
        let _, f, m, b;
        let w = (0, en.toMiliseconds)(o || en.FIVE_MINUTES);
        return {
          resolve: (o) => {
            m && _ && (clearTimeout(m), _(o), (b = Promise.resolve(o)));
          },
          reject: (o) => {
            m && f && (clearTimeout(m), f(o));
          },
          done: () =>
            new Promise((o, E) => {
              if (b) return o(b);
              (m = setTimeout(() => {
                let o = Error(l);
                (b = Promise.reject(o)), E(o);
              }, w)),
                (_ = o),
                (f = E);
            }),
        };
      }
      function yi(o, l, _) {
        return new Promise(async (f, m) => {
          let b = setTimeout(() => m(Error(_)), l);
          try {
            let l = await o;
            f(l);
          } catch (o) {
            m(o);
          }
          clearTimeout(b);
        });
      }
      function index_es_e(o, l) {
        if ("string" == typeof l && l.startsWith(`${o}:`)) return l;
        if ("topic" === o.toLowerCase()) {
          if ("string" != typeof l)
            throw Error(
              'Value must be "string" for expirer target type: topic'
            );
          return `topic:${l}`;
        }
        if ("id" === o.toLowerCase()) {
          if ("number" != typeof l)
            throw Error('Value must be "number" for expirer target type: id');
          return `id:${l}`;
        }
        throw Error(`Unknown expirer target type: ${o}`);
      }
      function bi(o) {
        let [l, _] = o.split(":"),
          f = { id: void 0, topic: void 0 };
        if ("topic" === l && "string" == typeof _) f.topic = _;
        else if ("id" === l && Number.isInteger(Number(_))) f.id = Number(_);
        else
          throw Error(
            `Invalid target, expected id:number or topic:string, got ${l}:${_}`
          );
        return f;
      }
      function Ei(o, l) {
        return (0, en.fromMiliseconds)(
          (l || Date.now()) + (0, en.toMiliseconds)(o)
        );
      }
      function vi(o) {
        return Date.now() >= (0, en.toMiliseconds)(o);
      }
      function xi(o, l) {
        return `${o}${l ? `:${l}` : ""}`;
      }
      function at(o = [], l = []) {
        return [...new Set([...o, ...l])];
      }
      async function Si({ id: o, topic: l, wcDeepLink: f }) {
        var m;
        try {
          if (!f) return;
          let b = "string" == typeof f ? JSON.parse(f) : f,
            w = b?.href;
          if ("string" != typeof w) return;
          let E = (function (o, l, _) {
              let f = `requestId=${l}&sessionTopic=${_}`;
              o.endsWith("/") && (o = o.slice(0, -1));
              let m = `${o}`;
              if (o.startsWith("https://t.me")) {
                let l = o.includes("?") ? "&startapp=" : "?startapp=";
                m = `${m}${l}${(function (o, l = !1) {
                  let _ = iJ.from(o).toString("base64");
                  return l ? _.replace(/[=]/g, "") : _;
                })(f, !0)}`;
              } else m = `${m}/wc?${f}`;
              return m;
            })(w, o, l),
            D = index_es_xt();
          if (D === i2.browser) {
            let o;
            if (!(null != (m = (0, eo.getDocument)()) && m.hasFocus())) {
              console.warn("Document does not have focus, skipping deeplink.");
              return;
            }
            (o = "_self"),
              (function () {
                try {
                  return window.self !== window.top;
                } catch {
                  return !1;
                }
              })()
                ? (o = "_top")
                : (("u" > typeof window &&
                    (!!window.TelegramWebviewProxy ||
                      !!window.Telegram ||
                      !!window.TelegramWebviewProxyProto)) ||
                    E.startsWith("https://") ||
                    E.startsWith("http://")) &&
                  (o = "_blank"),
              window.open(E, o, "noreferrer noopener");
          } else
            D === i2.reactNative &&
              "u" > typeof (null == _.g ? void 0 : _.g.Linking) &&
              (await _.g.Linking.openURL(E));
        } catch (o) {
          console.error(o);
        }
      }
      async function Oi(o, l) {
        let _ = "";
        try {
          if (index_es_Yt() && (_ = localStorage.getItem(l))) return _;
          _ = await o.getItem(l);
        } catch (o) {
          console.error(o);
        }
        return _;
      }
      function Ai(o, l) {
        if (!o.includes(l)) return null;
        let _ = o.split(/([&,?,=])/),
          f = _.indexOf(l);
        return _[f + 2];
      }
      function index_es_Bi() {
        return "u" > typeof crypto && null != crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (o) => {
              let l = (16 * Math.random()) | 0;
              return ("x" === o ? l : (3 & l) | 8).toString(16);
            });
      }
      function Ii() {
        return "u" > typeof iG && "true" === iG.env.IS_VITEST;
      }
      function index_es_Le(o) {
        return iJ.from(o, "base64").toString("utf-8");
      }
      function index_es_Gt(o) {
        if (!Number.isSafeInteger(o) || o < 0)
          throw Error("positive integer expected, got " + o);
      }
      function index_es_Wt(o, ...l) {
        if (
          !(
            o instanceof Uint8Array ||
            (ArrayBuffer.isView(o) && "Uint8Array" === o.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (l.length > 0 && !l.includes(o.length))
          throw Error(
            "Uint8Array expected of length " + l + ", got length=" + o.length
          );
      }
      function index_es_je(o) {
        if ("function" != typeof o || "function" != typeof o.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        index_es_Gt(o.outputLen), index_es_Gt(o.blockLen);
      }
      function index_es_Tt(o, l = !0) {
        if (o.destroyed) throw Error("Hash instance has been destroyed");
        if (l && o.finished)
          throw Error("Hash#digest() has already been called");
      }
      function index_es_Gn(o, l) {
        index_es_Wt(o);
        let _ = l.outputLen;
        if (o.length < _)
          throw Error(
            "digestInto() expects output buffer of length at least " + _
          );
      }
      let i8 = BigInt(4294967296 - 1),
        i3 = BigInt(32),
        _i = (o, l, _) => (o << _) | (l >>> (32 - _)),
        $i = (o, l, _) => (l << _) | (o >>> (32 - _)),
        Li = (o, l, _) => (l << (_ - 32)) | (o >>> (64 - _)),
        ji = (o, l, _) => (o << (_ - 32)) | (l >>> (64 - _)),
        i5 =
          "object" == typeof globalThis && "crypto" in globalThis
            ? globalThis.crypto
            : void 0;
      function dist_index_es_Ce(o) {
        return new DataView(o.buffer, o.byteOffset, o.byteLength);
      }
      function st(o, l) {
        return (o << (32 - l)) | (o >>> l);
      }
      let i4 = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      function index_es_Jn(o) {
        for (let _ = 0; _ < o.length; _++) {
          var l;
          o[_] =
            (((l = o[_]) << 24) & 4278190080) |
            ((l << 8) & 16711680) |
            ((l >>> 8) & 65280) |
            ((l >>> 24) & 255);
        }
      }
      function index_es_t(o) {
        return (
          "string" == typeof o &&
            (o = (function (o) {
              if ("string" != typeof o)
                throw Error("utf8ToBytes expected string, got " + typeof o);
              return new Uint8Array(new TextEncoder().encode(o));
            })(o)),
          index_es_Wt(o),
          o
        );
      }
      let index_es_Pe = class index_es_Pe {
        clone() {
          return this._cloneInto();
        }
      };
      function index_es_Qn(o) {
        let e = (l) => o().update(index_es_t(l)).digest(),
          l = o();
        return (
          (e.outputLen = l.outputLen),
          (e.blockLen = l.blockLen),
          (e.create = () => o()),
          e
        );
      }
      function index_es_$t(o = 32) {
        if (i5 && "function" == typeof i5.getRandomValues)
          return i5.getRandomValues(new Uint8Array(o));
        if (i5 && "function" == typeof i5.randomBytes) return i5.randomBytes(o);
        throw Error("crypto.getRandomValues must be defined");
      }
      let i6 = [],
        i9 = [],
        i7 = [],
        se = BigInt(0),
        si = BigInt(1),
        ss = BigInt(2),
        sr = BigInt(7),
        so = BigInt(256),
        sa = BigInt(113);
      for (let o = 0, l = si, _ = 1, f = 0; o < 24; o++) {
        ([_, f] = [f, (2 * _ + 3 * f) % 5]),
          i6.push(2 * (5 * f + _)),
          i9.push((((o + 1) * (o + 2)) / 2) % 64);
        let m = se;
        for (let o = 0; o < 7; o++)
          (l = ((l << si) ^ ((l >> sr) * sa)) % so) & ss &&
            (m ^= si << ((si << BigInt(o)) - si));
        i7.push(m);
      }
      let [sc, sd] = (function (o, l = !1) {
          let _ = new Uint32Array(o.length),
            f = new Uint32Array(o.length);
          for (let m = 0; m < o.length; m++) {
            let { h: b, l: w } = (function (o, l = !1) {
              return l
                ? { h: Number(o & i8), l: Number((o >> i3) & i8) }
                : { h: 0 | Number((o >> i3) & i8), l: 0 | Number(o & i8) };
            })(o[m], l);
            [_[m], f[m]] = [b, w];
          }
          return [_, f];
        })(i7, !0),
        index_es_rr = (o, l, _) => (_ > 32 ? Li(o, l, _) : _i(o, l, _)),
        index_es_or = (o, l, _) => (_ > 32 ? ji(o, l, _) : $i(o, l, _));
      let index_es_En = class index_es_En extends index_es_Pe {
        constructor(o, l, _, f = !1, m = 24) {
          var b;
          if (
            (super(),
            (this.blockLen = o),
            (this.suffix = l),
            (this.outputLen = _),
            (this.enableXOF = f),
            (this.rounds = m),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            index_es_Gt(_),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 =
              ((b = this.state),
              new Uint32Array(
                b.buffer,
                b.byteOffset,
                Math.floor(b.byteLength / 4)
              )));
        }
        keccak() {
          i4 || index_es_Jn(this.state32),
            (function (o, l = 24) {
              let _ = new Uint32Array(10);
              for (let f = 24 - l; f < 24; f++) {
                for (let l = 0; l < 10; l++)
                  _[l] = o[l] ^ o[l + 10] ^ o[l + 20] ^ o[l + 30] ^ o[l + 40];
                for (let l = 0; l < 10; l += 2) {
                  let f = (l + 8) % 10,
                    m = (l + 2) % 10,
                    b = _[m],
                    w = _[m + 1],
                    E = index_es_rr(b, w, 1) ^ _[f],
                    D = index_es_or(b, w, 1) ^ _[f + 1];
                  for (let _ = 0; _ < 50; _ += 10)
                    (o[l + _] ^= E), (o[l + _ + 1] ^= D);
                }
                let l = o[2],
                  m = o[3];
                for (let _ = 0; _ < 24; _++) {
                  let f = i9[_],
                    b = index_es_rr(l, m, f),
                    w = index_es_or(l, m, f),
                    E = i6[_];
                  (l = o[E]), (m = o[E + 1]), (o[E] = b), (o[E + 1] = w);
                }
                for (let l = 0; l < 50; l += 10) {
                  for (let f = 0; f < 10; f++) _[f] = o[l + f];
                  for (let f = 0; f < 10; f++)
                    o[l + f] ^= ~_[(f + 2) % 10] & _[(f + 4) % 10];
                }
                (o[0] ^= sc[f]), (o[1] ^= sd[f]);
              }
              _.fill(0);
            })(this.state32, this.rounds),
            i4 || index_es_Jn(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(o) {
          index_es_Tt(this);
          let { blockLen: l, state: _ } = this;
          o = index_es_t(o);
          let f = o.length;
          for (let m = 0; m < f; ) {
            let b = Math.min(l - this.pos, f - m);
            for (let l = 0; l < b; l++) _[this.pos++] ^= o[m++];
            this.pos === l && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: o, suffix: l, pos: _, blockLen: f } = this;
          (o[_] ^= l),
            (128 & l) != 0 && _ === f - 1 && this.keccak(),
            (o[f - 1] ^= 128),
            this.keccak();
        }
        writeInto(o) {
          index_es_Tt(this, !1), index_es_Wt(o), this.finish();
          let l = this.state,
            { blockLen: _ } = this;
          for (let f = 0, m = o.length; f < m; ) {
            this.posOut >= _ && this.keccak();
            let b = Math.min(_ - this.posOut, m - f);
            o.set(l.subarray(this.posOut, this.posOut + b), f),
              (this.posOut += b),
              (f += b);
          }
          return o;
        }
        xofInto(o) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(o);
        }
        xof(o) {
          return index_es_Gt(o), this.xofInto(new Uint8Array(o));
        }
        digestInto(o) {
          if ((index_es_Gn(o, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(o), this.destroy(), o;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(o) {
          let {
            blockLen: l,
            suffix: _,
            outputLen: f,
            rounds: m,
            enableXOF: b,
          } = this;
          return (
            o || (o = new index_es_En(l, _, f, b, m)),
            o.state32.set(this.state32),
            (o.pos = this.pos),
            (o.posOut = this.posOut),
            (o.finished = this.finished),
            (o.rounds = m),
            (o.suffix = _),
            (o.outputLen = f),
            (o.enableXOF = b),
            (o.destroyed = this.destroyed),
            o
          );
        }
      };
      let sl = index_es_Qn(() => new index_es_En(136, 1, 32));
      function index_es_ke(o) {
        let l = `Ethereum Signed Message:
${o.length}`,
          _ = new TextEncoder().encode(l + o);
        return "0x" + iJ.from(sl(_)).toString("hex");
      }
      async function index_es_ir(o, l, _, f, m, b) {
        switch (_.t) {
          case "eip191":
            return await index_es_sr(o, l, _.s);
          case "eip1271":
            return await index_es_cr(o, l, _.s, f, m, b);
          default:
            throw Error(
              `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${_.t}`
            );
        }
      }
      async function index_es_sr(o, l, _) {
        return (
          (
            await recoverAddress({ hash: index_es_ke(l), signature: _ })
          ).toLowerCase() === o.toLowerCase()
        );
      }
      async function index_es_cr(o, l, _, f, m, b) {
        let w = index_es_Ie(f);
        if (!w.namespace || !w.reference)
          throw Error(
            `isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${f}`
          );
        try {
          let w = "0x1626ba7e",
            E = _.substring(2),
            D = index_es_ke(l).substring(2),
            P = await fetch(
              `${
                b || "https://rpc.walletconnect.org/v1"
              }/?chainId=${f}&projectId=${m}`,
              {
                method: "POST",
                body: JSON.stringify({
                  id: Date.now() + Math.floor(1e3 * Math.random()),
                  jsonrpc: "2.0",
                  method: "eth_call",
                  params: [
                    {
                      to: o,
                      data:
                        w +
                        D +
                        "00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000041" +
                        E,
                    },
                    "latest",
                  ],
                }),
              }
            ),
            { result: C } = await P.json();
          return !!C && C.slice(0, w.length).toLowerCase() === w.toLowerCase();
        } catch (o) {
          return console.error("isValidEip1271Signature: ", o), !1;
        }
      }
      var sh = Object.defineProperty,
        su = Object.defineProperties,
        s_ = Object.getOwnPropertyDescriptors,
        sp = Object.getOwnPropertySymbols,
        sf = Object.prototype.hasOwnProperty,
        sg = Object.prototype.propertyIsEnumerable,
        index_es_ur = (o, l, _) =>
          l in o
            ? sh(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        index_es_Ve = (o, l) => {
          for (var _ in l || (l = {})) sf.call(l, _) && index_es_ur(o, _, l[_]);
          if (sp) for (var _ of sp(l)) sg.call(l, _) && index_es_ur(o, _, l[_]);
          return o;
        },
        index_es_fr = (o, l) => su(o, s_(l));
      let index_es_fe = (o) => o?.split(":"),
        index_es_lr = (o) => {
          let l = o && index_es_fe(o);
          if (l) return o.includes("did:pkh:") ? l[3] : l[1];
        },
        index_es_dr = (o) => {
          let l = o && index_es_fe(o);
          if (l) return l[2] + ":" + l[3];
        },
        index_es_Me = (o) => {
          let l = o && index_es_fe(o);
          if (l) return l.pop();
        };
      async function is(o) {
        let { cacao: l, projectId: _ } = o,
          { s: f, p: m } = l,
          b = index_es_hr(m, m.iss),
          w = index_es_Me(m.iss);
        return await index_es_ir(w, b, f, index_es_dr(m.iss), _);
      }
      let index_es_hr = (o, l) => {
        let _ = `${o.domain} wants you to sign in with your Ethereum account:`,
          f = index_es_Me(l);
        if (!o.aud && !o.uri)
          throw Error(
            "Either `aud` or `uri` is required to construct the message"
          );
        let m = o.statement || void 0,
          b = `URI: ${o.aud || o.uri}`,
          w = `Version: ${o.version}`,
          E = `Chain ID: ${index_es_lr(l)}`,
          D = `Nonce: ${o.nonce}`,
          P = `Issued At: ${o.iat}`,
          C = o.exp ? `Expiration Time: ${o.exp}` : void 0,
          A = o.nbf ? `Not Before: ${o.nbf}` : void 0,
          R = o.requestId ? `Request ID: ${o.requestId}` : void 0,
          j = o.resources
            ? `Resources:${o.resources
                .map(
                  (o) => `
- ${o}`
                )
                .join("")}`
            : void 0,
          q = index_es_de(o.resources);
        if (q) {
          let o = index_es_yt(q);
          m = (function (o = "", l) {
            index_es_ct(l);
            let _ =
              "I further authorize the stated URI to perform the following actions on my behalf: ";
            if (o.includes(_)) return o;
            let f = [],
              m = 0;
            Object.keys(l.att).forEach((o) => {
              let _ = Object.keys(l.att[o]).map((o) => ({
                ability: o.split("/")[0],
                action: o.split("/")[1],
              }));
              _.sort((o, l) => o.action.localeCompare(l.action));
              let b = {};
              _.forEach((o) => {
                b[o.ability] || (b[o.ability] = []),
                  b[o.ability].push(o.action);
              });
              let w = Object.keys(b).map(
                (l) => (
                  m++, `(${m}) '${l}': '${b[l].join("', '")}' for '${o}'.`
                )
              );
              f.push(w.join(", ").replace(".,", "."));
            });
            let b = f.join(" "),
              w = `${_}${b}`;
            return `${o ? o + " " : ""}${w}`;
          })(m, o);
        }
        return [_, f, "", m, "", b, w, E, D, P, C, A, R, j].filter(
          (o) => null != o
        ).join(`
`);
      };
      function index_es_ct(o) {
        if (!o) throw Error("No recap provided, value is undefined");
        if (!o.att) throw Error("No `att` property found");
        let l = Object.keys(o.att);
        if (!(null != l && l.length))
          throw Error("No resources found in `att` property");
        l.forEach((l) => {
          let _ = o.att[l];
          if (Array.isArray(_) || "object" != typeof _)
            throw Error(`Resource must be an object: ${l}`);
          if (!Object.keys(_).length)
            throw Error(`Resource object is empty: ${l}`);
          Object.keys(_).forEach((o) => {
            let l = _[o];
            if (!Array.isArray(l))
              throw Error(
                `Ability limits ${o} must be an array of objects, found: ${l}`
              );
            if (!l.length)
              throw Error(
                `Value of ${o} is empty array, must be an array with objects`
              );
            l.forEach((l) => {
              if ("object" != typeof l)
                throw Error(
                  `Ability limits (${o}) must be an array of objects, found: ${l}`
                );
            });
          });
        });
      }
      function index_es_le(o) {
        return (
          index_es_ct(o),
          `urn:recap:${iJ
            .from(JSON.stringify(o))
            .toString("base64")
            .replace(/=/g, "")}`
        );
      }
      function index_es_yt(o) {
        var l;
        let _ =
          ((l = o.replace("urn:recap:", "")),
          JSON.parse(iJ.from(l, "base64").toString("utf-8")));
        return index_es_ct(_), _;
      }
      function ds(o) {
        var l;
        let _ = index_es_yt(o);
        index_es_ct(_);
        let f = null == (l = _.att) ? void 0 : l.eip155;
        return f ? Object.keys(f).map((o) => o.split("/")[1]) : [];
      }
      function hs(o) {
        let l = index_es_yt(o);
        index_es_ct(l);
        let _ = [];
        return (
          Object.values(l.att).forEach((o) => {
            Object.values(o).forEach((o) => {
              var l;
              null != (l = o?.[0]) && l.chains && _.push(o[0].chains);
            });
          }),
          [...new Set(_.flat())]
        );
      }
      function index_es_de(o) {
        if (!o) return;
        let l = o?.[o.length - 1];
        return l && l.includes("urn:recap:") ? l : void 0;
      }
      function index_es_Ke(o) {
        if (!Number.isSafeInteger(o) || o < 0)
          throw Error("positive integer expected, got " + o);
      }
      function index_es_Sr(o) {
        return (
          o instanceof Uint8Array ||
          (ArrayBuffer.isView(o) && "Uint8Array" === o.constructor.name)
        );
      }
      function tt(o, ...l) {
        if (!index_es_Sr(o)) throw Error("Uint8Array expected");
        if (l.length > 0 && !l.includes(o.length))
          throw Error(
            "Uint8Array expected of length " + l + ", got length=" + o.length
          );
      }
      function index_es_Or(o, l = !0) {
        if (o.destroyed) throw Error("Hash instance has been destroyed");
        if (l && o.finished)
          throw Error("Hash#digest() has already been called");
      }
      function index_es_Ar(o) {
        if ("boolean" != typeof o) throw Error(`boolean expected, not ${o}`);
      }
      let mt = (o) =>
          new Uint32Array(o.buffer, o.byteOffset, Math.floor(o.byteLength / 4)),
        gs = (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
        sy = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      if (!sy) throw Error("Non little-endian hardware is not supported");
      function index_es_Fe(o) {
        if ("string" == typeof o)
          o = (function (o) {
            if ("string" != typeof o) throw Error("string expected");
            return new Uint8Array(new TextEncoder().encode(o));
          })(o);
        else if (index_es_Sr(o)) o = index_es_ze(o);
        else throw Error("Uint8Array expected, got " + typeof o);
        return o;
      }
      function index_es_Br(o, l, _ = !0) {
        if (void 0 === l) return new Uint8Array(o);
        if (l.length !== o)
          throw Error(
            "invalid output length, expected " + o + ", got: " + l.length
          );
        if (_ && l.byteOffset % 4 != 0)
          throw Error("invalid output, must be aligned");
        return l;
      }
      function index_es_Ir(o, l, _, f) {
        if ("function" == typeof o.setBigUint64) return o.setBigUint64(l, _, f);
        let m = BigInt(32),
          b = BigInt(4294967295),
          w = Number((_ >> m) & b),
          E = Number(_ & b),
          D = f ? 4 : 0,
          P = f ? 0 : 4;
        o.setUint32(l + D, w, f), o.setUint32(l + P, E, f);
      }
      function index_es_ze(o) {
        return Uint8Array.from(o);
      }
      function index_es_Lt(...o) {
        for (let l = 0; l < o.length; l++) o[l].fill(0);
      }
      let index_es_Nr = (o) =>
          Uint8Array.from(o.split("").map((o) => o.charCodeAt(0))),
        sm = index_es_Nr("expand 16-byte k"),
        sv = index_es_Nr("expand 32-byte k"),
        sb = mt(sm),
        sx = mt(sv);
      function V(o, l) {
        return (o << l) | (o >>> (32 - l));
      }
      function index_es_Ze(o) {
        return o.byteOffset % 4 == 0;
      }
      let sw = 4294967296 - 1,
        sE = new Uint32Array(),
        F = (o, l) => (255 & o[l++]) | ((255 & o[l++]) << 8);
      let Us = class Us {
        constructor(o) {
          (this.blockLen = 16),
            (this.outputLen = 16),
            (this.buffer = new Uint8Array(16)),
            (this.r = new Uint16Array(10)),
            (this.h = new Uint16Array(10)),
            (this.pad = new Uint16Array(8)),
            (this.pos = 0),
            (this.finished = !1),
            tt((o = index_es_Fe(o)), 32);
          let l = F(o, 0),
            _ = F(o, 2),
            f = F(o, 4),
            m = F(o, 6),
            b = F(o, 8),
            w = F(o, 10),
            E = F(o, 12),
            D = F(o, 14);
          (this.r[0] = 8191 & l),
            (this.r[1] = ((l >>> 13) | (_ << 3)) & 8191),
            (this.r[2] = ((_ >>> 10) | (f << 6)) & 7939),
            (this.r[3] = ((f >>> 7) | (m << 9)) & 8191),
            (this.r[4] = ((m >>> 4) | (b << 12)) & 255),
            (this.r[5] = (b >>> 1) & 8190),
            (this.r[6] = ((b >>> 14) | (w << 2)) & 8191),
            (this.r[7] = ((w >>> 11) | (E << 5)) & 8065),
            (this.r[8] = ((E >>> 8) | (D << 8)) & 8191),
            (this.r[9] = (D >>> 5) & 127);
          for (let l = 0; l < 8; l++) this.pad[l] = F(o, 16 + 2 * l);
        }
        process(o, l, _ = !1) {
          let { h: f, r: m } = this,
            b = m[0],
            w = m[1],
            E = m[2],
            D = m[3],
            P = m[4],
            C = m[5],
            A = m[6],
            R = m[7],
            j = m[8],
            q = m[9],
            M = F(o, l + 0),
            $ = F(o, l + 2),
            K = F(o, l + 4),
            G = F(o, l + 6),
            Y = F(o, l + 8),
            Q = F(o, l + 10),
            Z = F(o, l + 12),
            ei = F(o, l + 14),
            es = f[0] + (8191 & M),
            en = f[1] + (((M >>> 13) | ($ << 3)) & 8191),
            eo = f[2] + ((($ >>> 10) | (K << 6)) & 8191),
            ea = f[3] + (((K >>> 7) | (G << 9)) & 8191),
            ec = f[4] + (((G >>> 4) | (Y << 12)) & 8191),
            ed = f[5] + ((Y >>> 1) & 8191),
            el = f[6] + (((Y >>> 14) | (Q << 2)) & 8191),
            eh = f[7] + (((Q >>> 11) | (Z << 5)) & 8191),
            eu = f[8] + (((Z >>> 8) | (ei << 8)) & 8191),
            e_ = f[9] + ((ei >>> 5) | (_ ? 0 : 2048)),
            ep = 0,
            ef =
              0 +
              es * b +
              en * (5 * q) +
              eo * (5 * j) +
              ea * (5 * R) +
              ec * (5 * A);
          (ep = ef >>> 13),
            (ef &= 8191),
            (ef +=
              ed * (5 * C) +
              el * (5 * P) +
              eh * (5 * D) +
              eu * (5 * E) +
              e_ * (5 * w)),
            (ep += ef >>> 13),
            (ef &= 8191);
          let eg =
            ep + es * w + en * b + eo * (5 * q) + ea * (5 * j) + ec * (5 * R);
          (ep = eg >>> 13),
            (eg &= 8191),
            (eg +=
              ed * (5 * A) +
              el * (5 * C) +
              eh * (5 * P) +
              eu * (5 * D) +
              e_ * (5 * E)),
            (ep += eg >>> 13),
            (eg &= 8191);
          let ey = ep + es * E + en * w + eo * b + ea * (5 * q) + ec * (5 * j);
          (ep = ey >>> 13),
            (ey &= 8191),
            (ey +=
              ed * (5 * R) +
              el * (5 * A) +
              eh * (5 * C) +
              eu * (5 * P) +
              e_ * (5 * D)),
            (ep += ey >>> 13),
            (ey &= 8191);
          let em = ep + es * D + en * E + eo * w + ea * b + ec * (5 * q);
          (ep = em >>> 13),
            (em &= 8191),
            (em +=
              ed * (5 * j) +
              el * (5 * R) +
              eh * (5 * A) +
              eu * (5 * C) +
              e_ * (5 * P)),
            (ep += em >>> 13),
            (em &= 8191);
          let ev = ep + es * P + en * D + eo * E + ea * w + ec * b;
          (ep = ev >>> 13),
            (ev &= 8191),
            (ev +=
              ed * (5 * q) +
              el * (5 * j) +
              eh * (5 * R) +
              eu * (5 * A) +
              e_ * (5 * C)),
            (ep += ev >>> 13),
            (ev &= 8191);
          let eb = ep + es * C + en * P + eo * D + ea * E + ec * w;
          (ep = eb >>> 13),
            (eb &= 8191),
            (eb +=
              ed * b +
              el * (5 * q) +
              eh * (5 * j) +
              eu * (5 * R) +
              e_ * (5 * A)),
            (ep += eb >>> 13),
            (eb &= 8191);
          let ex = ep + es * A + en * C + eo * P + ea * D + ec * E;
          (ep = ex >>> 13),
            (ex &= 8191),
            (ex +=
              ed * w + el * b + eh * (5 * q) + eu * (5 * j) + e_ * (5 * R)),
            (ep += ex >>> 13),
            (ex &= 8191);
          let ew = ep + es * R + en * A + eo * C + ea * P + ec * D;
          (ep = ew >>> 13),
            (ew &= 8191),
            (ew += ed * E + el * w + eh * b + eu * (5 * q) + e_ * (5 * j)),
            (ep += ew >>> 13),
            (ew &= 8191);
          let eE = ep + es * j + en * R + eo * A + ea * C + ec * P;
          (ep = eE >>> 13),
            (eE &= 8191),
            (eE += ed * D + el * E + eh * w + eu * b + e_ * (5 * q)),
            (ep += eE >>> 13),
            (eE &= 8191);
          let eI = ep + es * q + en * j + eo * R + ea * A + ec * C;
          (ep = eI >>> 13),
            (eI &= 8191),
            (eI += ed * P + el * D + eh * E + eu * w + e_ * b),
            (ep += eI >>> 13),
            (eI &= 8191),
            (ef = 8191 & (ep = ((ep = ((ep << 2) + ep) | 0) + ef) | 0)),
            (ep >>>= 13),
            (eg += ep),
            (f[0] = ef),
            (f[1] = eg),
            (f[2] = ey),
            (f[3] = em),
            (f[4] = ev),
            (f[5] = eb),
            (f[6] = ex),
            (f[7] = ew),
            (f[8] = eE),
            (f[9] = eI);
        }
        finalize() {
          let { h: o, pad: l } = this,
            _ = new Uint16Array(10),
            f = o[1] >>> 13;
          o[1] &= 8191;
          for (let l = 2; l < 10; l++)
            (o[l] += f), (f = o[l] >>> 13), (o[l] &= 8191);
          (o[0] += 5 * f),
            (f = o[0] >>> 13),
            (o[0] &= 8191),
            (o[1] += f),
            (f = o[1] >>> 13),
            (o[1] &= 8191),
            (o[2] += f),
            (_[0] = o[0] + 5),
            (f = _[0] >>> 13),
            (_[0] &= 8191);
          for (let l = 1; l < 10; l++)
            (_[l] = o[l] + f), (f = _[l] >>> 13), (_[l] &= 8191);
          _[9] -= 8192;
          let m = (1 ^ f) - 1;
          for (let o = 0; o < 10; o++) _[o] &= m;
          m = ~m;
          for (let l = 0; l < 10; l++) o[l] = (o[l] & m) | _[l];
          (o[0] = (o[0] | (o[1] << 13)) & 65535),
            (o[1] = ((o[1] >>> 3) | (o[2] << 10)) & 65535),
            (o[2] = ((o[2] >>> 6) | (o[3] << 7)) & 65535),
            (o[3] = ((o[3] >>> 9) | (o[4] << 4)) & 65535),
            (o[4] = ((o[4] >>> 12) | (o[5] << 1) | (o[6] << 14)) & 65535),
            (o[5] = ((o[6] >>> 2) | (o[7] << 11)) & 65535),
            (o[6] = ((o[7] >>> 5) | (o[8] << 8)) & 65535),
            (o[7] = ((o[8] >>> 8) | (o[9] << 5)) & 65535);
          let b = o[0] + l[0];
          o[0] = 65535 & b;
          for (let _ = 1; _ < 8; _++)
            (b = (((o[_] + l[_]) | 0) + (b >>> 16)) | 0), (o[_] = 65535 & b);
          index_es_Lt(_);
        }
        update(o) {
          index_es_Or(this);
          let { buffer: l, blockLen: _ } = this;
          o = index_es_Fe(o);
          let f = o.length;
          for (let m = 0; m < f; ) {
            let b = Math.min(_ - this.pos, f - m);
            if (b === _) {
              for (; _ <= f - m; m += _) this.process(o, m);
              continue;
            }
            l.set(o.subarray(m, m + b), this.pos),
              (this.pos += b),
              (m += b),
              this.pos === _ && (this.process(l, 0, !1), (this.pos = 0));
          }
          return this;
        }
        destroy() {
          index_es_Lt(this.h, this.r, this.buffer, this.pad);
        }
        digestInto(o) {
          index_es_Or(this),
            (function (o, l) {
              tt(o);
              let _ = l.outputLen;
              if (o.length < _)
                throw Error(
                  "digestInto() expects output buffer of length at least " + _
                );
            })(o, this),
            (this.finished = !0);
          let { buffer: l, h: _ } = this,
            { pos: f } = this;
          if (f) {
            for (l[f++] = 1; f < 16; f++) l[f] = 0;
            this.process(l, 0, !0);
          }
          this.finalize();
          let m = 0;
          for (let l = 0; l < 8; l++)
            (o[m++] = _[l] >>> 0), (o[m++] = _[l] >>> 8);
          return o;
        }
        digest() {
          let { buffer: o, outputLen: l } = this;
          this.digestInto(o);
          let _ = o.slice(0, l);
          return this.destroy(), _;
        }
      };
      let sI = (function (o) {
          let e = (l, _) => o(_).update(index_es_Fe(l)).digest(),
            l = o(new Uint8Array(32));
          return (
            (e.outputLen = l.outputLen),
            (e.blockLen = l.blockLen),
            (e.create = (l) => o(l)),
            e
          );
        })((o) => new Us(o)),
        sS = (function (o, l) {
          let {
            allowShortKeys: _,
            extendNonceFn: f,
            counterLength: m,
            counterRight: b,
            rounds: w,
          } = (function (o, l) {
            if (null == l || "object" != typeof l)
              throw Error("options must be defined");
            return Object.assign(o, l);
          })(
            {
              allowShortKeys: !1,
              counterLength: 8,
              counterRight: !1,
              rounds: 20,
            },
            l
          );
          if ("function" != typeof o) throw Error("core must be a function");
          return (
            index_es_Ke(m),
            index_es_Ke(w),
            index_es_Ar(b),
            index_es_Ar(_),
            (l, E, D, P, C = 0) => {
              tt(l), tt(E), tt(D);
              let A = D.length;
              if (
                (void 0 === P && (P = new Uint8Array(A)),
                tt(P),
                index_es_Ke(C),
                C < 0 || C >= sw)
              )
                throw Error("arx: counter overflow");
              if (P.length < A)
                throw Error(
                  `arx: output (${P.length}) is shorter than data (${A})`
                );
              let R = [],
                j = l.length,
                q,
                M;
              if (32 === j) R.push((q = index_es_ze(l))), (M = sx);
              else if (16 === j && _)
                (q = new Uint8Array(32)).set(l),
                  q.set(l, 16),
                  (M = sb),
                  R.push(q);
              else throw Error(`arx: invalid 32-byte key, got length=${j}`);
              index_es_Ze(E) || R.push((E = index_es_ze(E)));
              let $ = mt(q);
              if (f) {
                if (24 !== E.length)
                  throw Error("arx: extended nonce must be 24 bytes");
                f(M, $, mt(E.subarray(0, 16)), $), (E = E.subarray(16));
              }
              let K = 16 - m;
              if (K !== E.length)
                throw Error(`arx: nonce must be ${K} or 16 bytes`);
              if (12 !== K) {
                let o = new Uint8Array(12);
                o.set(E, b ? 0 : 12 - E.length), (E = o), R.push(E);
              }
              let G = mt(E);
              return (
                (function (o, l, _, f, m, b, w, E) {
                  let D = m.length,
                    P = new Uint8Array(64),
                    C = mt(P),
                    A = index_es_Ze(m) && index_es_Ze(b),
                    R = A ? mt(m) : sE,
                    j = A ? mt(b) : sE;
                  for (let q = 0; q < D; w++) {
                    if ((o(l, _, f, C, w, E), w >= sw))
                      throw Error("arx: counter overflow");
                    let M = Math.min(64, D - q);
                    if (A && 64 === M) {
                      let o = q / 4;
                      if (q % 4 != 0)
                        throw Error("arx: invalid block position");
                      for (let l = 0, _; l < 16; l++)
                        j[(_ = o + l)] = R[_] ^ C[l];
                      q += 64;
                      continue;
                    }
                    for (let o = 0, l; o < M; o++) b[(l = q + o)] = m[l] ^ P[o];
                    q += M;
                  }
                })(o, M, $, G, D, P, C, w),
                index_es_Lt(...R),
                P
              );
            }
          );
        })(
          function (o, l, _, f, m, b = 20) {
            let w = o[0],
              E = o[1],
              D = o[2],
              P = o[3],
              C = l[0],
              A = l[1],
              R = l[2],
              j = l[3],
              q = l[4],
              M = l[5],
              $ = l[6],
              K = l[7],
              G = _[0],
              Y = _[1],
              Q = _[2],
              Z = w,
              ei = E,
              es = D,
              en = P,
              eo = C,
              ea = A,
              ec = R,
              ed = j,
              el = q,
              eh = M,
              eu = $,
              e_ = K,
              ep = m,
              ef = G,
              eg = Y,
              ey = Q;
            for (let o = 0; o < b; o += 2)
              (el = (el + (ep = V(ep ^ (Z = (Z + eo) | 0), 16))) | 0),
                (Z = (Z + (eo = V(eo ^ el, 12))) | 0),
                (el = (el + (ep = V(ep ^ Z, 8))) | 0),
                (eo = V(eo ^ el, 7)),
                (eh = (eh + (ef = V(ef ^ (ei = (ei + ea) | 0), 16))) | 0),
                (ei = (ei + (ea = V(ea ^ eh, 12))) | 0),
                (eh = (eh + (ef = V(ef ^ ei, 8))) | 0),
                (ea = V(ea ^ eh, 7)),
                (eu = (eu + (eg = V(eg ^ (es = (es + ec) | 0), 16))) | 0),
                (es = (es + (ec = V(ec ^ eu, 12))) | 0),
                (eu = (eu + (eg = V(eg ^ es, 8))) | 0),
                (ec = V(ec ^ eu, 7)),
                (e_ = (e_ + (ey = V(ey ^ (en = (en + ed) | 0), 16))) | 0),
                (en = (en + (ed = V(ed ^ e_, 12))) | 0),
                (e_ = (e_ + (ey = V(ey ^ en, 8))) | 0),
                (ed = V(ed ^ e_, 7)),
                (eu = (eu + (ey = V(ey ^ (Z = (Z + ea) | 0), 16))) | 0),
                (Z = (Z + (ea = V(ea ^ eu, 12))) | 0),
                (eu = (eu + (ey = V(ey ^ Z, 8))) | 0),
                (ea = V(ea ^ eu, 7)),
                (e_ = (e_ + (ep = V(ep ^ (ei = (ei + ec) | 0), 16))) | 0),
                (ei = (ei + (ec = V(ec ^ e_, 12))) | 0),
                (e_ = (e_ + (ep = V(ep ^ ei, 8))) | 0),
                (ec = V(ec ^ e_, 7)),
                (el = (el + (ef = V(ef ^ (es = (es + ed) | 0), 16))) | 0),
                (es = (es + (ed = V(ed ^ el, 12))) | 0),
                (el = (el + (ef = V(ef ^ es, 8))) | 0),
                (ed = V(ed ^ el, 7)),
                (eh = (eh + (eg = V(eg ^ (en = (en + eo) | 0), 16))) | 0),
                (en = (en + (eo = V(eo ^ eh, 12))) | 0),
                (eh = (eh + (eg = V(eg ^ en, 8))) | 0),
                (eo = V(eo ^ eh, 7));
            let em = 0;
            (f[em++] = (w + Z) | 0),
              (f[em++] = (E + ei) | 0),
              (f[em++] = (D + es) | 0),
              (f[em++] = (P + en) | 0),
              (f[em++] = (C + eo) | 0),
              (f[em++] = (A + ea) | 0),
              (f[em++] = (R + ec) | 0),
              (f[em++] = (j + ed) | 0),
              (f[em++] = (q + el) | 0),
              (f[em++] = (M + eh) | 0),
              (f[em++] = ($ + eu) | 0),
              (f[em++] = (K + e_) | 0),
              (f[em++] = (m + ep) | 0),
              (f[em++] = (G + ef) | 0),
              (f[em++] = (Y + eg) | 0),
              (f[em++] = (Q + ey) | 0);
          },
          { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
        ),
        sD = new Uint8Array(16),
        index_es_Rr = (o, l) => {
          o.update(l);
          let _ = l.length % 16;
          _ && o.update(sD.subarray(_));
        },
        sP = new Uint8Array(32);
      function index_es_r(o, l, _, f, m) {
        let b = o(l, _, sP),
          w = sI.create(b);
        m && index_es_Rr(w, m), index_es_Rr(w, f);
        let E = new Uint8Array(16),
          D = gs(E);
        index_es_Ir(D, 0, BigInt(m ? m.length : 0), !0),
          index_es_Ir(D, 8, BigInt(f.length), !0),
          w.update(E);
        let P = w.digest();
        return index_es_Lt(b, E), P;
      }
      let sO = ((o, l) => {
        function n(_, ...f) {
          if ((tt(_), void 0 !== o.nonceLength)) {
            let l = f[0];
            if (!l) throw Error("nonce / iv required");
            o.varSizeNonce ? tt(l) : tt(l, o.nonceLength);
          }
          let m = o.tagLength;
          m && void 0 !== f[1] && tt(f[1]);
          let b = l(_, ...f),
            c = (o, l) => {
              if (void 0 !== l) {
                if (2 !== o) throw Error("cipher output not supported");
                tt(l);
              }
            },
            w = !1;
          return {
            encrypt(o, l) {
              if (w)
                throw Error("cannot encrypt() twice with same key + nonce");
              return (w = !0), tt(o), c(b.encrypt.length, l), b.encrypt(o, l);
            },
            decrypt(o, l) {
              if ((tt(o), m && o.length < m))
                throw Error(
                  "invalid ciphertext length: smaller than tagLength=" + m
                );
              return c(b.decrypt.length, l), b.decrypt(o, l);
            },
          };
        }
        return Object.assign(n, o), n;
      })({ blockSize: 64, nonceLength: 12, tagLength: 16 }, (o, l, _) => ({
        encrypt(f, m) {
          let b = f.length;
          (m = index_es_Br(b + 16, m, !1)).set(f);
          let w = m.subarray(0, -16);
          sS(o, l, w, w, 1);
          let E = index_es_r(sS, o, l, w, _);
          return m.set(E, b), index_es_Lt(E), m;
        },
        decrypt(f, m) {
          m = index_es_Br(f.length - 16, m, !1);
          let b = f.subarray(0, -16),
            w = f.subarray(-16),
            E = index_es_r(sS, o, l, b, _);
          if (
            !(function (o, l) {
              if (o.length !== l.length) return !1;
              let _ = 0;
              for (let f = 0; f < o.length; f++) _ |= o[f] ^ l[f];
              return 0 === _;
            })(w, E)
          )
            throw Error("invalid tag");
          return (
            m.set(f.subarray(0, -16)), sS(o, l, m, m, 1), index_es_Lt(E), m
          );
        },
      }));
      let index_es_Lr = class index_es_Lr extends index_es_Pe {
        constructor(o, l) {
          super(), (this.finished = !1), (this.destroyed = !1), index_es_je(o);
          let _ = index_es_t(l);
          if (
            ((this.iHash = o.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let f = this.blockLen,
            m = new Uint8Array(f);
          m.set(_.length > f ? o.create().update(_).digest() : _);
          for (let o = 0; o < m.length; o++) m[o] ^= 54;
          this.iHash.update(m), (this.oHash = o.create());
          for (let o = 0; o < m.length; o++) m[o] ^= 106;
          this.oHash.update(m), m.fill(0);
        }
        update(o) {
          return index_es_Tt(this), this.iHash.update(o), this;
        }
        digestInto(o) {
          index_es_Tt(this),
            index_es_Wt(o, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(o),
            this.oHash.update(o),
            this.oHash.digestInto(o),
            this.destroy();
        }
        digest() {
          let o = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(o), o;
        }
        _cloneInto(o) {
          o || (o = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: l,
            iHash: _,
            finished: f,
            destroyed: m,
            blockLen: b,
            outputLen: w,
          } = this;
          return (
            (o.finished = f),
            (o.destroyed = m),
            (o.blockLen = b),
            (o.outputLen = w),
            (o.oHash = l._cloneInto(o.oHash)),
            (o.iHash = _._cloneInto(o.iHash)),
            o
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      };
      let index_es_pe = (o, l, _) => new index_es_Lr(o, l).update(_).digest();
      index_es_pe.create = (o, l) => new index_es_Lr(o, l);
      let sC = new Uint8Array([0]),
        sA = new Uint8Array(),
        Vs = (o, l, _, f, m) => {
          var b;
          return (function (o, l, _, f = 32) {
            if ((index_es_je(o), index_es_Gt(f), f > 255 * o.outputLen))
              throw Error("Length should be <= 255*HashLen");
            let m = Math.ceil(f / o.outputLen);
            void 0 === _ && (_ = sA);
            let b = new Uint8Array(m * o.outputLen),
              w = index_es_pe.create(o, l),
              E = w._cloneInto(),
              D = new Uint8Array(w.outputLen);
            for (let l = 0; l < m; l++)
              (sC[0] = l + 1),
                E.update(0 === l ? sA : D)
                  .update(_)
                  .update(sC)
                  .digestInto(D),
                b.set(D, o.outputLen * l),
                w._cloneInto(E);
            return (
              w.destroy(), E.destroy(), D.fill(0), sC.fill(0), b.slice(0, f)
            );
          })(
            o,
            ((b = _),
            index_es_je(o),
            void 0 === b && (b = new Uint8Array(o.outputLen)),
            index_es_pe(o, index_es_t(b), index_es_t(l))),
            f,
            m
          );
        };
      let qs = class qs extends index_es_Pe {
        constructor(o, l, _, f) {
          super(),
            (this.blockLen = o),
            (this.outputLen = l),
            (this.padOffset = _),
            (this.isLE = f),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(o)),
            (this.view = dist_index_es_Ce(this.buffer));
        }
        update(o) {
          index_es_Tt(this);
          let { view: l, buffer: _, blockLen: f } = this;
          o = index_es_t(o);
          let m = o.length;
          for (let b = 0; b < m; ) {
            let w = Math.min(f - this.pos, m - b);
            if (w === f) {
              let l = dist_index_es_Ce(o);
              for (; f <= m - b; b += f) this.process(l, b);
              continue;
            }
            _.set(o.subarray(b, b + w), this.pos),
              (this.pos += w),
              (b += w),
              this.pos === f && (this.process(l, 0), (this.pos = 0));
          }
          return (this.length += o.length), this.roundClean(), this;
        }
        digestInto(o) {
          index_es_Tt(this), index_es_Gn(o, this), (this.finished = !0);
          let { buffer: l, view: _, blockLen: f, isLE: m } = this,
            { pos: b } = this;
          (l[b++] = 128),
            this.buffer.subarray(b).fill(0),
            this.padOffset > f - b && (this.process(_, 0), (b = 0));
          for (let o = b; o < f; o++) l[o] = 0;
          (function (o, l, _, f) {
            if ("function" == typeof o.setBigUint64)
              return o.setBigUint64(l, _, f);
            let m = BigInt(32),
              b = BigInt(4294967295),
              w = Number((_ >> m) & b),
              E = Number(_ & b),
              D = f ? 4 : 0,
              P = f ? 0 : 4;
            o.setUint32(l + D, w, f), o.setUint32(l + P, E, f);
          })(_, f - 8, BigInt(8 * this.length), m),
            this.process(_, 0);
          let w = dist_index_es_Ce(o),
            E = this.outputLen;
          if (E % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let D = E / 4,
            P = this.get();
          if (D > P.length) throw Error("_sha2: outputLen bigger than state");
          for (let o = 0; o < D; o++) w.setUint32(4 * o, P[o], m);
        }
        digest() {
          let { buffer: o, outputLen: l } = this;
          this.digestInto(o);
          let _ = o.slice(0, l);
          return this.destroy(), _;
        }
        _cloneInto(o) {
          o || (o = new this.constructor()), o.set(...this.get());
          let {
            blockLen: l,
            buffer: _,
            length: f,
            finished: m,
            destroyed: b,
            pos: w,
          } = this;
          return (
            (o.length = f),
            (o.pos = w),
            (o.finished = m),
            (o.destroyed = b),
            f % l && o.buffer.set(_),
            o
          );
        }
      };
      let sR = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        sT = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        sN = new Uint32Array(64);
      let Fs = class Fs extends qs {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | sT[0]),
            (this.B = 0 | sT[1]),
            (this.C = 0 | sT[2]),
            (this.D = 0 | sT[3]),
            (this.E = 0 | sT[4]),
            (this.F = 0 | sT[5]),
            (this.G = 0 | sT[6]),
            (this.H = 0 | sT[7]);
        }
        get() {
          let { A: o, B: l, C: _, D: f, E: m, F: b, G: w, H: E } = this;
          return [o, l, _, f, m, b, w, E];
        }
        set(o, l, _, f, m, b, w, E) {
          (this.A = 0 | o),
            (this.B = 0 | l),
            (this.C = 0 | _),
            (this.D = 0 | f),
            (this.E = 0 | m),
            (this.F = 0 | b),
            (this.G = 0 | w),
            (this.H = 0 | E);
        }
        process(o, l) {
          for (let _ = 0; _ < 16; _++, l += 4) sN[_] = o.getUint32(l, !1);
          for (let o = 16; o < 64; o++) {
            let l = sN[o - 15],
              _ = sN[o - 2],
              f = st(l, 7) ^ st(l, 18) ^ (l >>> 3),
              m = st(_, 17) ^ st(_, 19) ^ (_ >>> 10);
            sN[o] = (m + sN[o - 7] + f + sN[o - 16]) | 0;
          }
          let { A: _, B: f, C: m, D: b, E: w, F: E, G: D, H: P } = this;
          for (let o = 0; o < 64; o++) {
            var C, A, R, j;
            let l = st(w, 6) ^ st(w, 11) ^ st(w, 25),
              q = (P + l + (((C = w) & E) ^ (~C & D)) + sR[o] + sN[o]) | 0,
              M =
                ((st(_, 2) ^ st(_, 13) ^ st(_, 22)) +
                  (((A = _) & (R = f)) ^ (A & (j = m)) ^ (R & j))) |
                0;
            (P = D),
              (D = E),
              (E = w),
              (w = (b + q) | 0),
              (b = m),
              (m = f),
              (f = _),
              (_ = (q + M) | 0);
          }
          (_ = (_ + this.A) | 0),
            (f = (f + this.B) | 0),
            (m = (m + this.C) | 0),
            (b = (b + this.D) | 0),
            (w = (w + this.E) | 0),
            (E = (E + this.F) | 0),
            (D = (D + this.G) | 0),
            (P = (P + this.H) | 0),
            this.set(_, f, m, b, w, E, D, P);
        }
        roundClean() {
          sN.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      };
      let sj = index_es_Qn(() => new Fs()),
        sk = BigInt(0),
        sL = BigInt(1),
        sB = BigInt(2);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function index_es_St(
        o
      ) {
        return (
          o instanceof Uint8Array ||
          (ArrayBuffer.isView(o) && "Uint8Array" === o.constructor.name)
        );
      }
      function index_es_Qt(o) {
        if (!index_es_St(o)) throw Error("Uint8Array expected");
      }
      function index_es_jt(o, l) {
        if ("boolean" != typeof l)
          throw Error(o + " boolean expected, got " + l);
      }
      let sU = Array.from({ length: 256 }, (o, l) =>
        l.toString(16).padStart(2, "0")
      );
      function Ct(o) {
        index_es_Qt(o);
        let l = "";
        for (let _ = 0; _ < o.length; _++) l += sU[o[_]];
        return l;
      }
      function index_es_Pt(o) {
        let l = o.toString(16);
        return 1 & l.length ? "0" + l : l;
      }
      function index_es_Ge(o) {
        if ("string" != typeof o)
          throw Error("hex string expected, got " + typeof o);
        return "" === o ? sk : BigInt("0x" + o);
      }
      let sq = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
      function index_es_Cr(o) {
        return o >= sq._0 && o <= sq._9
          ? o - sq._0
          : o >= sq.A && o <= sq.F
          ? o - (sq.A - 10)
          : o >= sq.a && o <= sq.f
          ? o - (sq.a - 10)
          : void 0;
      }
      function dist_index_es_kt(o) {
        if ("string" != typeof o)
          throw Error("hex string expected, got " + typeof o);
        let l = o.length,
          _ = l / 2;
        if (l % 2)
          throw Error("hex string expected, got unpadded hex of length " + l);
        let f = new Uint8Array(_);
        for (let l = 0, m = 0; l < _; l++, m += 2) {
          let _ = index_es_Cr(o.charCodeAt(m)),
            b = index_es_Cr(o.charCodeAt(m + 1));
          if (void 0 === _ || void 0 === b) {
            let l = o[m] + o[m + 1];
            throw Error(
              'hex string expected, got non-hex character "' +
                l +
                '" at index ' +
                m
            );
          }
          f[l] = 16 * _ + b;
        }
        return f;
      }
      function index_es_Ot(o) {
        return index_es_Ge(Ct(o));
      }
      function dist_index_es_te(o) {
        return index_es_Qt(o), index_es_Ge(Ct(Uint8Array.from(o).reverse()));
      }
      function index_es_Vt(o, l) {
        return dist_index_es_kt(o.toString(16).padStart(2 * l, "0"));
      }
      function index_es_me(o, l) {
        return index_es_Vt(o, l).reverse();
      }
      function et(o, l, _) {
        let f;
        if ("string" == typeof l)
          try {
            f = dist_index_es_kt(l);
          } catch (l) {
            throw Error(o + " must be hex string or Uint8Array, cause: " + l);
          }
        else if (index_es_St(l)) f = Uint8Array.from(l);
        else throw Error(o + " must be hex string or Uint8Array");
        let m = f.length;
        if ("number" == typeof _ && m !== _)
          throw Error(o + " of length " + _ + " expected, got " + m);
        return f;
      }
      function ee(...o) {
        let l = 0;
        for (let _ = 0; _ < o.length; _++) {
          let f = o[_];
          index_es_Qt(f), (l += f.length);
        }
        let _ = new Uint8Array(l);
        for (let l = 0, f = 0; l < o.length; l++) {
          let m = o[l];
          _.set(m, f), (f += m.length);
        }
        return _;
      }
      let index_es_We = (o) => "bigint" == typeof o && sk <= o;
      function index_es_we(o, l, _) {
        return (
          index_es_We(o) && index_es_We(l) && index_es_We(_) && l <= o && o < _
        );
      }
      function index_es_ft(o, l, _, f) {
        if (!index_es_we(l, _, f))
          throw Error(
            "expected valid " + o + ": " + _ + " <= n < " + f + ", got " + l
          );
      }
      function index_es_Pr(o) {
        let l;
        for (l = 0; o > sk; o >>= sL, l += 1);
        return l;
      }
      let index_es_Xe = (o) => (sB << BigInt(o - 1)) - sL,
        index_es_Je = (o) => new Uint8Array(o),
        index_es_kr = (o) => Uint8Array.from(o);
      function index_es_Vr(o, l, _) {
        if ("number" != typeof o || o < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof l || l < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof _) throw Error("hmacFn must be a function");
        let f = index_es_Je(o),
          m = index_es_Je(o),
          b = 0,
          s = () => {
            f.fill(1), m.fill(0), (b = 0);
          },
          c = (...o) => _(m, f, ...o),
          a = (o = index_es_Je()) => {
            (m = c(index_es_kr([0]), o)),
              (f = c()),
              0 !== o.length && ((m = c(index_es_kr([1]), o)), (f = c()));
          },
          u = () => {
            if (b++ >= 1e3) throw Error("drbg: tried 1000 values");
            let o = 0,
              _ = [];
            for (; o < l; ) {
              f = c();
              let l = f.slice();
              _.push(l), (o += f.length);
            }
            return ee(..._);
          };
        return (o, l) => {
          let _;
          for (s(), a(o); !(_ = l(u())); ) a();
          return s(), _;
        };
      }
      let sM = {
        bigint: (o) => "bigint" == typeof o,
        function: (o) => "function" == typeof o,
        boolean: (o) => "boolean" == typeof o,
        string: (o) => "string" == typeof o,
        stringOrUint8Array: (o) => "string" == typeof o || index_es_St(o),
        isSafeInteger: (o) => Number.isSafeInteger(o),
        array: (o) => Array.isArray(o),
        field: (o, l) => l.Fp.isValid(o),
        hash: (o) =>
          "function" == typeof o && Number.isSafeInteger(o.outputLen),
      };
      function index_es_Mt(o, l, _ = {}) {
        let r = (l, _, f) => {
          let m = sM[_];
          if ("function" != typeof m) throw Error("invalid validator function");
          let b = o[l];
          if (!(f && void 0 === b) && !m(b, o))
            throw Error(
              "param " + String(l) + " is invalid. Expected " + _ + ", got " + b
            );
        };
        for (let [o, _] of Object.entries(l)) r(o, _, !1);
        for (let [o, l] of Object.entries(_)) r(o, l, !0);
        return o;
      }
      function index_es_Qe(o) {
        let l = new WeakMap();
        return (_, ...f) => {
          let m = l.get(_);
          if (void 0 !== m) return m;
          let b = o(_, ...f);
          return l.set(_, b), b;
        };
      }
      var s$ = Object.freeze({
        __proto__: null,
        isBytes: index_es_St,
        abytes: index_es_Qt,
        abool: index_es_jt,
        bytesToHex: Ct,
        numberToHexUnpadded: index_es_Pt,
        hexToNumber: index_es_Ge,
        hexToBytes: dist_index_es_kt,
        bytesToNumberBE: index_es_Ot,
        bytesToNumberLE: dist_index_es_te,
        numberToBytesBE: index_es_Vt,
        numberToBytesLE: index_es_me,
        numberToVarBytesBE: function (o) {
          return dist_index_es_kt(index_es_Pt(o));
        },
        ensureBytes: et,
        concatBytes: ee,
        equalBytes: function (o, l) {
          if (o.length !== l.length) return !1;
          let _ = 0;
          for (let f = 0; f < o.length; f++) _ |= o[f] ^ l[f];
          return 0 === _;
        },
        utf8ToBytes: function (o) {
          if ("string" != typeof o) throw Error("string expected");
          return new Uint8Array(new TextEncoder().encode(o));
        },
        inRange: index_es_we,
        aInRange: index_es_ft,
        bitLen: index_es_Pr,
        bitGet: function (o, l) {
          return (o >> BigInt(l)) & sL;
        },
        bitSet: function (o, l, _) {
          return o | ((_ ? sL : sk) << BigInt(l));
        },
        bitMask: index_es_Xe,
        createHmacDrbg: index_es_Vr,
        validateObject: index_es_Mt,
        notImplemented: () => {
          throw Error("not implemented");
        },
        memoized: index_es_Qe,
      });
      let sz = BigInt(0),
        sH = BigInt(1),
        sF = BigInt(2),
        sV = BigInt(3),
        sK = BigInt(4),
        sW = BigInt(5),
        sG = BigInt(8);
      function X(o, l) {
        let _ = o % l;
        return _ >= sz ? _ : l + _;
      }
      function index_es_Hr(o, l, _) {
        if (l < sz) throw Error("invalid exponent, negatives unsupported");
        if (_ <= sz) throw Error("invalid modulus");
        if (_ === sH) return sz;
        let f = sH;
        for (; l > sz; )
          l & sH && (f = (f * o) % _), (o = (o * o) % _), (l >>= sH);
        return f;
      }
      function ot(o, l, _) {
        let f = o;
        for (; l-- > sz; ) (f *= f), (f %= _);
        return f;
      }
      function index_es_en(o, l) {
        if (o === sz) throw Error("invert: expected non-zero number");
        if (l <= sz) throw Error("invert: expected positive modulus, got " + l);
        let _ = X(o, l),
          f = l,
          m = sz,
          b = sH;
        for (; _ !== sz; ) {
          let o = f / _,
            l = f % _,
            w = m - b * o;
          (f = _), (_ = l), (m = b), (b = w);
        }
        if (f !== sH) throw Error("invert: does not exist");
        return X(m, l);
      }
      let sJ = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ];
      function index_es_qr(o, l) {
        let _ = void 0 !== l ? l : o.toString(2).length;
        return { nBitLength: _, nByteLength: Math.ceil(_ / 8) };
      }
      function index_es_Kr(o, l, _ = !1, f = {}) {
        let m;
        if (o <= sz) throw Error("invalid field: expected ORDER > 0, got " + o);
        let { nBitLength: b, nByteLength: w } = index_es_qr(o, l);
        if (w > 2048)
          throw Error("invalid field: expected ORDER of <= 2048 bytes");
        let E = Object.freeze({
          ORDER: o,
          isLE: _,
          BITS: b,
          BYTES: w,
          MASK: index_es_Xe(b),
          ZERO: sz,
          ONE: sH,
          create: (l) => X(l, o),
          isValid: (l) => {
            if ("bigint" != typeof l)
              throw Error(
                "invalid field element: expected bigint, got " + typeof l
              );
            return sz <= l && l < o;
          },
          is0: (o) => o === sz,
          isOdd: (o) => (o & sH) === sH,
          neg: (l) => X(-l, o),
          eql: (o, l) => o === l,
          sqr: (l) => X(l * l, o),
          add: (l, _) => X(l + _, o),
          sub: (l, _) => X(l - _, o),
          mul: (l, _) => X(l * _, o),
          pow: (o, l) =>
            (function (o, l, _) {
              if (_ < sz)
                throw Error("invalid exponent, negatives unsupported");
              if (_ === sz) return o.ONE;
              if (_ === sH) return l;
              let f = o.ONE,
                m = l;
              for (; _ > sz; )
                _ & sH && (f = o.mul(f, m)), (m = o.sqr(m)), (_ >>= sH);
              return f;
            })(E, o, l),
          div: (l, _) => X(l * index_es_en(_, o), o),
          sqrN: (o) => o * o,
          addN: (o, l) => o + l,
          subN: (o, l) => o - l,
          mulN: (o, l) => o * l,
          inv: (l) => index_es_en(l, o),
          sqrt:
            f.sqrt ||
            ((l) => (
              m ||
                (m = (function (o) {
                  if (o % sK === sV) {
                    let l = (o + sH) / sK;
                    return function (o, _) {
                      let f = o.pow(_, l);
                      if (!o.eql(o.sqr(f), _))
                        throw Error("Cannot find square root");
                      return f;
                    };
                  }
                  if (o % sG === sW) {
                    let l = (o - sW) / sG;
                    return function (o, _) {
                      let f = o.mul(_, sF),
                        m = o.pow(f, l),
                        b = o.mul(_, m),
                        w = o.mul(o.mul(b, sF), m),
                        E = o.mul(b, o.sub(w, o.ONE));
                      if (!o.eql(o.sqr(E), _))
                        throw Error("Cannot find square root");
                      return E;
                    };
                  }
                  return (function (o) {
                    let l, _, f;
                    let m = (o - sH) / sF;
                    for (l = o - sH, _ = 0; l % sF === sz; l /= sF, _++);
                    for (f = sF; f < o && index_es_Hr(f, m, o) !== o - sH; f++)
                      if (f > 1e3)
                        throw Error(
                          "Cannot find square root: likely non-prime P"
                        );
                    if (1 === _) {
                      let l = (o + sH) / sK;
                      return function (o, _) {
                        let f = o.pow(_, l);
                        if (!o.eql(o.sqr(f), _))
                          throw Error("Cannot find square root");
                        return f;
                      };
                    }
                    let b = (l + sH) / sF;
                    return function (o, w) {
                      if (o.pow(w, m) === o.neg(o.ONE))
                        throw Error("Cannot find square root");
                      let E = _,
                        D = o.pow(o.mul(o.ONE, f), l),
                        P = o.pow(w, b),
                        C = o.pow(w, l);
                      for (; !o.eql(C, o.ONE); ) {
                        if (o.eql(C, o.ZERO)) return o.ZERO;
                        let l = 1;
                        for (let _ = o.sqr(C); l < E && !o.eql(_, o.ONE); l++)
                          _ = o.sqr(_);
                        let _ = o.pow(D, sH << BigInt(E - l - 1));
                        (D = o.sqr(_)),
                          (P = o.mul(P, _)),
                          (C = o.mul(C, D)),
                          (E = l);
                      }
                      return P;
                    };
                  })(o);
                })(o)),
              m(E, l)
            )),
          invertBatch: (o) =>
            (function (o, l) {
              let _ = Array(l.length),
                f = l.reduce(
                  (l, f, m) => (o.is0(f) ? l : ((_[m] = l), o.mul(l, f))),
                  o.ONE
                ),
                m = o.inv(f);
              return (
                l.reduceRight(
                  (l, f, m) =>
                    o.is0(f) ? l : ((_[m] = o.mul(l, _[m])), o.mul(l, f)),
                  m
                ),
                _
              );
            })(E, o),
          cmov: (o, l, _) => (_ ? l : o),
          toBytes: (o) => (_ ? index_es_me(o, w) : index_es_Vt(o, w)),
          fromBytes: (o) => {
            if (o.length !== w)
              throw Error(
                "Field.fromBytes: expected " + w + " bytes, got " + o.length
              );
            return _ ? dist_index_es_te(o) : index_es_Ot(o);
          },
        });
        return Object.freeze(E);
      }
      function index_es_Fr(o) {
        if ("bigint" != typeof o) throw Error("field order must be bigint");
        let l = o.toString(2).length;
        return Math.ceil(l / 8);
      }
      function index_es_zr(o) {
        let l = index_es_Fr(o);
        return l + Math.ceil(l / 2);
      }
      let sY = BigInt(0),
        sX = BigInt(1);
      function index_es_nn(o, l) {
        let _ = l.negate();
        return o ? _ : l;
      }
      function index_es_Yr(o, l) {
        if (!Number.isSafeInteger(o) || o <= 0 || o > l)
          throw Error(
            "invalid window size, expected [1.." + l + "], got W=" + o
          );
      }
      function index_es_rn(o, l) {
        index_es_Yr(o, l);
        let _ = Math.ceil(l / o) + 1,
          f = 2 ** (o - 1);
        return { windows: _, windowSize: f };
      }
      let sQ = new WeakMap(),
        sZ = new WeakMap();
      function index_es_sn(o) {
        return sZ.get(o) || 1;
      }
      function index_es_Wr(o) {
        return (
          (function (o) {
            let l = sJ.reduce((o, l) => ((o[l] = "function"), o), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            });
            index_es_Mt(o, l);
          })(o.Fp),
          index_es_Mt(
            o,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({
            ...index_es_qr(o.n, o.nBitLength),
            ...o,
            p: o.Fp.ORDER,
          })
        );
      }
      BigInt(0), BigInt(1), BigInt(2), BigInt(8);
      let s0 = BigInt(0),
        s1 = BigInt(1),
        s2 = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        );
      BigInt(0);
      let s8 = BigInt(1),
        s3 = BigInt(2),
        s5 = BigInt(3),
        s4 = BigInt(5);
      BigInt(8);
      let s6 = (function (o) {
        let l =
            (index_es_Mt(
              o,
              { a: "bigint" },
              {
                montgomeryBits: "isSafeInteger",
                nByteLength: "isSafeInteger",
                adjustScalarBytes: "function",
                domain: "function",
                powPminus2: "function",
                Gu: "bigint",
              }
            ),
            Object.freeze({ ...o })),
          { P: _ } = l,
          r = (o) => X(o, _),
          f = l.montgomeryBits,
          m = Math.ceil(f / 8),
          b = l.nByteLength,
          w = l.adjustScalarBytes || ((o) => o),
          E = l.powPminus2 || ((o) => index_es_Hr(o, _ - BigInt(2), _));
        function u(o, l, _) {
          let f = r(o * (l - _));
          return [(l = r(l - f)), (_ = r(_ + f))];
        }
        let D = (l.a - BigInt(2)) / BigInt(4);
        function p(o, l) {
          let P = (function (o) {
              let l = et("u coordinate", o, m);
              return 32 === b && (l[31] &= 127), dist_index_es_te(l);
            })(l),
            C = (function (o) {
              let l = et("scalar", o),
                _ = l.length;
              if (_ !== m && _ !== b)
                throw Error(
                  "invalid scalar, expected " +
                    m +
                    " or " +
                    b +
                    " bytes, got " +
                    _
                );
              return dist_index_es_te(w(l));
            })(o),
            A = (function (o, l) {
              index_es_ft("u", o, s0, _), index_es_ft("scalar", l, s0, _);
              let m = s1,
                b = s0,
                w = o,
                P = s1,
                C = s0,
                A;
              for (let _ = BigInt(f - 1); _ >= s0; _--) {
                let f = (l >> _) & s1;
                (C ^= f),
                  (m = (A = u(C, m, w))[0]),
                  (w = A[1]),
                  (b = (A = u(C, b, P))[0]),
                  (P = A[1]),
                  (C = f);
                let E = m + b,
                  R = r(E * E),
                  j = m - b,
                  q = r(j * j),
                  M = R - q,
                  $ = w + P,
                  K = w - P,
                  G = r(K * E),
                  Y = r($ * j),
                  Q = G + Y,
                  Z = G - Y;
                (w = r(Q * Q)),
                  (P = r(o * r(Z * Z))),
                  (m = r(R * q)),
                  (b = r(M * (R + r(D * M))));
              }
              (m = (A = u(C, m, w))[0]),
                (w = A[1]),
                (b = (A = u(C, b, P))[0]),
                (P = A[1]);
              let R = E(b);
              return r(m * R);
            })(P, C);
          if (A === s0) throw Error("invalid private or public key received");
          return index_es_me(r(A), m);
        }
        let P = index_es_me(r(l.Gu), m);
        function v(o) {
          return p(o, P);
        }
        return {
          scalarMult: p,
          scalarMultBase: v,
          getSharedSecret: (o, l) => p(o, l),
          getPublicKey: (o) => v(o),
          utils: { randomPrivateKey: () => l.randomBytes(l.nByteLength) },
          GuBytes: P,
        };
      })({
        P: s2,
        a: BigInt(486662),
        montgomeryBits: 255,
        nByteLength: 32,
        Gu: BigInt(9),
        powPminus2: (o) => {
          let { pow_p_5_8: l, b2: _ } = (function (o) {
            let l = BigInt(10),
              _ = BigInt(20),
              f = BigInt(40),
              m = BigInt(80),
              b = (((o * o) % s2) * o) % s2,
              w = (ot(b, s3, s2) * b) % s2,
              E = (ot(w, s8, s2) * o) % s2,
              D = (ot(E, s4, s2) * E) % s2,
              P = (ot(D, l, s2) * D) % s2,
              C = (ot(P, _, s2) * P) % s2,
              A = (ot(C, f, s2) * C) % s2,
              R = (ot(A, m, s2) * A) % s2,
              j = (ot(R, m, s2) * A) % s2,
              q = (ot(j, l, s2) * D) % s2;
            return { pow_p_5_8: (ot(q, s3, s2) * o) % s2, b2: b };
          })(o);
          return X(ot(l, s5, s2) * _, s2);
        },
        adjustScalarBytes: function (o) {
          return (o[0] &= 248), (o[31] &= 127), (o[31] |= 64), o;
        },
        randomBytes: index_es_$t,
      });
      function index_es_Jr(o) {
        void 0 !== o.lowS && index_es_jt("lowS", o.lowS),
          void 0 !== o.prehash && index_es_jt("prehash", o.prehash);
      }
      let { bytesToNumberBE: s9, hexToBytes: s7 } = s$,
        re = {
          Err: class extends Error {
            constructor(o = "") {
              super(o);
            }
          },
          _tlv: {
            encode: (o, l) => {
              let { Err: _ } = re;
              if (o < 0 || o > 256) throw new _("tlv.encode: wrong tag");
              if (1 & l.length) throw new _("tlv.encode: unpadded data");
              let f = l.length / 2,
                m = index_es_Pt(f);
              if ((m.length / 2) & 128)
                throw new _("tlv.encode: long form length too big");
              let b = f > 127 ? index_es_Pt((m.length / 2) | 128) : "";
              return index_es_Pt(o) + b + m + l;
            },
            decode(o, l) {
              let { Err: _ } = re,
                f = 0;
              if (o < 0 || o > 256) throw new _("tlv.encode: wrong tag");
              if (l.length < 2 || l[f++] !== o)
                throw new _("tlv.decode: wrong tlv");
              let m = l[f++],
                b = !!(128 & m),
                w = 0;
              if (b) {
                let o = 127 & m;
                if (!o)
                  throw new _(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (o > 4)
                  throw new _("tlv.decode(long): byte length is too big");
                let b = l.subarray(f, f + o);
                if (b.length !== o)
                  throw new _("tlv.decode: length bytes not complete");
                if (0 === b[0])
                  throw new _("tlv.decode(long): zero leftmost byte");
                for (let o of b) w = (w << 8) | o;
                if (((f += o), w < 128))
                  throw new _("tlv.decode(long): not minimal encoding");
              } else w = m;
              let E = l.subarray(f, f + w);
              if (E.length !== w) throw new _("tlv.decode: wrong value length");
              return { v: E, l: l.subarray(f + w) };
            },
          },
          _int: {
            encode(o) {
              let { Err: l } = re;
              if (o < rs)
                throw new l("integer: negative integers are not allowed");
              let _ = index_es_Pt(o);
              if (
                (8 & Number.parseInt(_[0], 16) && (_ = "00" + _), 1 & _.length)
              )
                throw new l("unexpected DER parsing assertion: unpadded hex");
              return _;
            },
            decode(o) {
              let { Err: l } = re;
              if (128 & o[0])
                throw new l("invalid signature integer: negative");
              if (0 === o[0] && !(128 & o[1]))
                throw new l(
                  "invalid signature integer: unnecessary leading zero"
                );
              return s9(o);
            },
          },
          toSig(o) {
            let { Err: l, _int: _, _tlv: f } = re,
              m = "string" == typeof o ? s7(o) : o;
            index_es_Qt(m);
            let { v: b, l: w } = f.decode(48, m);
            if (w.length)
              throw new l("invalid signature: left bytes after parsing");
            let { v: E, l: D } = f.decode(2, b),
              { v: P, l: C } = f.decode(2, D);
            if (C.length)
              throw new l("invalid signature: left bytes after parsing");
            return { r: _.decode(E), s: _.decode(P) };
          },
          hexFromSig(o) {
            let { _tlv: l, _int: _ } = re,
              f = l.encode(2, _.encode(o.r)),
              m = l.encode(2, _.encode(o.s));
            return l.encode(48, f + m);
          },
        },
        rs = BigInt(0),
        rr = BigInt(1);
      BigInt(2);
      let rn = BigInt(3);
      BigInt(4);
      let ro = index_es_Kr(
          BigInt(
            "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
          )
        ),
        ra = ro.create(BigInt("-3")),
        rc = BigInt(
          "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
        ),
        rd = (function (o, l) {
          let n = (l) =>
            (function (o) {
              let l = (function (o) {
                  let l = index_es_Wr(o);
                  return (
                    index_es_Mt(
                      l,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...l })
                  );
                })(o),
                { Fp: _, n: f } = l,
                m = _.BYTES + 1,
                b = 2 * _.BYTES + 1;
              function s(o) {
                return X(o, f);
              }
              let {
                  ProjectivePoint: w,
                  normPrivateKeyToScalar: E,
                  weierstrassEquation: D,
                  isWithinCurveOrder: P,
                } = (function (o) {
                  var l;
                  let _ = (function (o) {
                      let l = index_es_Wr(o);
                      index_es_Mt(
                        l,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: _, Fp: f, a: m } = l;
                      if (_) {
                        if (!f.eql(m, f.ZERO))
                          throw Error(
                            "invalid endomorphism, can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof _ ||
                          "bigint" != typeof _.beta ||
                          "function" != typeof _.splitScalar
                        )
                          throw Error(
                            "invalid endomorphism, expected beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...l });
                    })(o),
                    { Fp: f } = _,
                    m = index_es_Kr(_.n, _.nBitLength),
                    b =
                      _.toBytes ||
                      ((o, l, _) => {
                        let m = l.toAffine();
                        return ee(
                          Uint8Array.from([4]),
                          f.toBytes(m.x),
                          f.toBytes(m.y)
                        );
                      }),
                    w =
                      _.fromBytes ||
                      ((o) => {
                        let l = o.subarray(1),
                          _ = f.fromBytes(l.subarray(0, f.BYTES)),
                          m = f.fromBytes(l.subarray(f.BYTES, 2 * f.BYTES));
                        return { x: _, y: m };
                      });
                  function s(o) {
                    let { a: l, b: m } = _,
                      b = f.sqr(o),
                      w = f.mul(b, o);
                    return f.add(f.add(w, f.mul(o, l)), m);
                  }
                  if (!f.eql(f.sqr(_.Gy), s(_.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function a(o) {
                    let l;
                    let {
                      allowedPrivateKeyLengths: f,
                      nByteLength: m,
                      wrapPrivateKey: b,
                      n: w,
                    } = _;
                    if (f && "bigint" != typeof o) {
                      if (
                        (index_es_St(o) && (o = Ct(o)),
                        "string" != typeof o || !f.includes(o.length))
                      )
                        throw Error("invalid private key");
                      o = o.padStart(2 * m, "0");
                    }
                    try {
                      l =
                        "bigint" == typeof o
                          ? o
                          : index_es_Ot(et("private key", o, m));
                    } catch {
                      throw Error(
                        "invalid private key, expected hex or " +
                          m +
                          " bytes, got " +
                          typeof o
                      );
                    }
                    return (
                      b && (l = X(l, w)),
                      index_es_ft("private key", l, rr, w),
                      l
                    );
                  }
                  function u(o) {
                    if (!(o instanceof h))
                      throw Error("ProjectivePoint expected");
                  }
                  let E = index_es_Qe((o, l) => {
                      let { px: _, py: m, pz: b } = o;
                      if (f.eql(b, f.ONE)) return { x: _, y: m };
                      let w = o.is0();
                      null == l && (l = w ? f.ONE : f.inv(b));
                      let E = f.mul(_, l),
                        D = f.mul(m, l),
                        P = f.mul(b, l);
                      if (w) return { x: f.ZERO, y: f.ZERO };
                      if (!f.eql(P, f.ONE)) throw Error("invZ was invalid");
                      return { x: E, y: D };
                    }),
                    D = index_es_Qe((o) => {
                      if (o.is0()) {
                        if (_.allowInfinityPoint && !f.is0(o.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: l, y: m } = o.toAffine();
                      if (!f.isValid(l) || !f.isValid(m))
                        throw Error("bad point: x or y not FE");
                      let b = f.sqr(m),
                        w = s(l);
                      if (!f.eql(b, w))
                        throw Error("bad point: equation left != right");
                      if (!o.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  let h = class h {
                    constructor(o, l, _) {
                      if (
                        ((this.px = o),
                        (this.py = l),
                        (this.pz = _),
                        null == o || !f.isValid(o))
                      )
                        throw Error("x required");
                      if (null == l || !f.isValid(l)) throw Error("y required");
                      if (null == _ || !f.isValid(_)) throw Error("z required");
                      Object.freeze(this);
                    }
                    static fromAffine(o) {
                      let { x: l, y: _ } = o || {};
                      if (!o || !f.isValid(l) || !f.isValid(_))
                        throw Error("invalid affine point");
                      if (o instanceof h)
                        throw Error("projective point not allowed");
                      let O = (o) => f.eql(o, f.ZERO);
                      return O(l) && O(_) ? h.ZERO : new h(l, _, f.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(o) {
                      let l = f.invertBatch(o.map((o) => o.pz));
                      return o
                        .map((o, _) => o.toAffine(l[_]))
                        .map(h.fromAffine);
                    }
                    static fromHex(o) {
                      let l = h.fromAffine(w(et("pointHex", o)));
                      return l.assertValidity(), l;
                    }
                    static fromPrivateKey(o) {
                      return h.BASE.multiply(a(o));
                    }
                    static msm(o, l) {
                      return (function (o, l, _, f) {
                        if (
                          ((function (o, l) {
                            if (!Array.isArray(o))
                              throw Error("array expected");
                            o.forEach((o, _) => {
                              if (!(o instanceof l))
                                throw Error("invalid point at index " + _);
                            });
                          })(_, o),
                          (function (o, l) {
                            if (!Array.isArray(o))
                              throw Error("array of scalars expected");
                            o.forEach((o, _) => {
                              if (!l.isValid(o))
                                throw Error("invalid scalar at index " + _);
                            });
                          })(f, l),
                          _.length !== f.length)
                        )
                          throw Error(
                            "arrays of points and scalars must have equal length"
                          );
                        let m = o.ZERO,
                          b = index_es_Pr(BigInt(_.length)),
                          w = b > 12 ? b - 3 : b > 4 ? b - 2 : b ? 2 : 1,
                          E = (1 << w) - 1,
                          D = Array(E + 1).fill(m),
                          P = Math.floor((l.BITS - 1) / w) * w,
                          C = m;
                        for (let o = P; o >= 0; o -= w) {
                          D.fill(m);
                          for (let l = 0; l < f.length; l++) {
                            let m = f[l],
                              b = Number((m >> BigInt(o)) & BigInt(E));
                            D[b] = D[b].add(_[l]);
                          }
                          let l = m;
                          for (let o = D.length - 1, _ = m; o > 0; o--)
                            (_ = _.add(D[o])), (l = l.add(_));
                          if (((C = C.add(l)), 0 !== o))
                            for (let o = 0; o < w; o++) C = C.double();
                        }
                        return C;
                      })(h, m, o, l);
                    }
                    _setWindowSize(o) {
                      C.setWindowSize(this, o);
                    }
                    assertValidity() {
                      D(this);
                    }
                    hasEvenY() {
                      let { y: o } = this.toAffine();
                      if (f.isOdd) return !f.isOdd(o);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(o) {
                      u(o);
                      let { px: l, py: _, pz: m } = this,
                        { px: b, py: w, pz: E } = o,
                        D = f.eql(f.mul(l, E), f.mul(b, m)),
                        P = f.eql(f.mul(_, E), f.mul(w, m));
                      return D && P;
                    }
                    negate() {
                      return new h(this.px, f.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: o, b: l } = _,
                        m = f.mul(l, rn),
                        { px: b, py: w, pz: E } = this,
                        D = f.ZERO,
                        P = f.ZERO,
                        C = f.ZERO,
                        A = f.mul(b, b),
                        R = f.mul(w, w),
                        j = f.mul(E, E),
                        q = f.mul(b, w);
                      return (
                        (q = f.add(q, q)),
                        (C = f.mul(b, E)),
                        (C = f.add(C, C)),
                        (D = f.mul(o, C)),
                        (P = f.mul(m, j)),
                        (P = f.add(D, P)),
                        (D = f.sub(R, P)),
                        (P = f.add(R, P)),
                        (P = f.mul(D, P)),
                        (D = f.mul(q, D)),
                        (C = f.mul(m, C)),
                        (j = f.mul(o, j)),
                        (q = f.sub(A, j)),
                        (q = f.mul(o, q)),
                        (q = f.add(q, C)),
                        (C = f.add(A, A)),
                        (A = f.add(C, A)),
                        (A = f.add(A, j)),
                        (A = f.mul(A, q)),
                        (P = f.add(P, A)),
                        (j = f.mul(w, E)),
                        (j = f.add(j, j)),
                        (A = f.mul(j, q)),
                        (D = f.sub(D, A)),
                        (C = f.mul(j, R)),
                        (C = f.add(C, C)),
                        (C = f.add(C, C)),
                        new h(D, P, C)
                      );
                    }
                    add(o) {
                      u(o);
                      let { px: l, py: m, pz: b } = this,
                        { px: w, py: E, pz: D } = o,
                        P = f.ZERO,
                        C = f.ZERO,
                        A = f.ZERO,
                        R = _.a,
                        j = f.mul(_.b, rn),
                        q = f.mul(l, w),
                        M = f.mul(m, E),
                        $ = f.mul(b, D),
                        K = f.add(l, m),
                        G = f.add(w, E);
                      (K = f.mul(K, G)),
                        (G = f.add(q, M)),
                        (K = f.sub(K, G)),
                        (G = f.add(l, b));
                      let Y = f.add(w, D);
                      return (
                        (G = f.mul(G, Y)),
                        (Y = f.add(q, $)),
                        (G = f.sub(G, Y)),
                        (Y = f.add(m, b)),
                        (P = f.add(E, D)),
                        (Y = f.mul(Y, P)),
                        (P = f.add(M, $)),
                        (Y = f.sub(Y, P)),
                        (A = f.mul(R, G)),
                        (P = f.mul(j, $)),
                        (A = f.add(P, A)),
                        (P = f.sub(M, A)),
                        (A = f.add(M, A)),
                        (C = f.mul(P, A)),
                        (M = f.add(q, q)),
                        (M = f.add(M, q)),
                        ($ = f.mul(R, $)),
                        (G = f.mul(j, G)),
                        (M = f.add(M, $)),
                        ($ = f.sub(q, $)),
                        ($ = f.mul(R, $)),
                        (G = f.add(G, $)),
                        (q = f.mul(M, G)),
                        (C = f.add(C, q)),
                        (q = f.mul(Y, G)),
                        (P = f.mul(K, P)),
                        (P = f.sub(P, q)),
                        (q = f.mul(K, M)),
                        (A = f.mul(Y, A)),
                        (A = f.add(A, q)),
                        new h(P, C, A)
                      );
                    }
                    subtract(o) {
                      return this.add(o.negate());
                    }
                    is0() {
                      return this.equals(h.ZERO);
                    }
                    wNAF(o) {
                      return C.wNAFCached(this, o, h.normalizeZ);
                    }
                    multiplyUnsafe(o) {
                      let { endo: l, n: m } = _;
                      index_es_ft("scalar", o, rs, m);
                      let b = h.ZERO;
                      if (o === rs) return b;
                      if (this.is0() || o === rr) return this;
                      if (!l || C.hasPrecomputes(this))
                        return C.wNAFCachedUnsafe(this, o, h.normalizeZ);
                      let {
                          k1neg: w,
                          k1: E,
                          k2neg: D,
                          k2: P,
                        } = l.splitScalar(o),
                        A = b,
                        R = b,
                        j = this;
                      for (; E > rs || P > rs; )
                        E & rr && (A = A.add(j)),
                          P & rr && (R = R.add(j)),
                          (j = j.double()),
                          (E >>= rr),
                          (P >>= rr);
                      return (
                        w && (A = A.negate()),
                        D && (R = R.negate()),
                        (R = new h(f.mul(R.px, l.beta), R.py, R.pz)),
                        A.add(R)
                      );
                    }
                    multiply(o) {
                      let l, m;
                      let { endo: b, n: w } = _;
                      if ((index_es_ft("scalar", o, rr, w), b)) {
                        let {
                            k1neg: _,
                            k1: w,
                            k2neg: E,
                            k2: D,
                          } = b.splitScalar(o),
                          { p: P, f: A } = this.wNAF(w),
                          { p: R, f: j } = this.wNAF(D);
                        (P = C.constTimeNegate(_, P)),
                          (R = C.constTimeNegate(E, R)),
                          (R = new h(f.mul(R.px, b.beta), R.py, R.pz)),
                          (l = P.add(R)),
                          (m = A.add(j));
                      } else {
                        let { p: _, f: f } = this.wNAF(o);
                        (l = _), (m = f);
                      }
                      return h.normalizeZ([l, m])[0];
                    }
                    multiplyAndAddUnsafe(o, l, _) {
                      let f = h.BASE,
                        N = (o, l) =>
                          l !== rs && l !== rr && o.equals(f)
                            ? o.multiply(l)
                            : o.multiplyUnsafe(l),
                        m = N(this, l).add(N(o, _));
                      return m.is0() ? void 0 : m;
                    }
                    toAffine(o) {
                      return E(this, o);
                    }
                    isTorsionFree() {
                      let { h: o, isTorsionFree: l } = _;
                      if (o === rr) return !0;
                      if (l) return l(h, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: o, clearCofactor: l } = _;
                      return o === rr
                        ? this
                        : l
                        ? l(h, this)
                        : this.multiplyUnsafe(_.h);
                    }
                    toRawBytes(o = !0) {
                      return (
                        index_es_jt("isCompressed", o),
                        this.assertValidity(),
                        b(h, this, o)
                      );
                    }
                    toHex(o = !0) {
                      return (
                        index_es_jt("isCompressed", o), Ct(this.toRawBytes(o))
                      );
                    }
                  };
                  (h.BASE = new h(_.Gx, _.Gy, f.ONE)),
                    (h.ZERO = new h(f.ZERO, f.ONE, f.ZERO));
                  let P = _.nBitLength,
                    C =
                      ((l = _.endo ? Math.ceil(P / 2) : P),
                      {
                        constTimeNegate: index_es_nn,
                        hasPrecomputes: (o) => 1 !== index_es_sn(o),
                        unsafeLadder(o, l, _ = h.ZERO) {
                          let f = o;
                          for (; l > sY; )
                            l & sX && (_ = _.add(f)),
                              (f = f.double()),
                              (l >>= sX);
                          return _;
                        },
                        precomputeWindow(o, _) {
                          let { windows: f, windowSize: m } = index_es_rn(_, l),
                            b = [],
                            w = o,
                            E = w;
                          for (let o = 0; o < f; o++) {
                            (E = w), b.push(E);
                            for (let o = 1; o < m; o++)
                              (E = E.add(w)), b.push(E);
                            w = E.double();
                          }
                          return b;
                        },
                        wNAF(o, _, f) {
                          let { windows: m, windowSize: b } = index_es_rn(o, l),
                            w = h.ZERO,
                            E = h.BASE,
                            D = BigInt(2 ** o - 1),
                            P = 2 ** o,
                            C = BigInt(o);
                          for (let o = 0; o < m; o++) {
                            let l = o * b,
                              m = Number(f & D);
                            (f >>= C), m > b && ((m -= P), (f += sX));
                            let A = l + Math.abs(m) - 1,
                              R = o % 2 != 0,
                              j = m < 0;
                            0 === m
                              ? (E = E.add(index_es_nn(R, _[l])))
                              : (w = w.add(index_es_nn(j, _[A])));
                          }
                          return { p: w, f: E };
                        },
                        wNAFUnsafe(o, _, f, m = h.ZERO) {
                          let { windows: b, windowSize: w } = index_es_rn(o, l),
                            E = BigInt(2 ** o - 1),
                            D = 2 ** o,
                            P = BigInt(o);
                          for (let o = 0; o < b; o++) {
                            let l = o * w;
                            if (f === sY) break;
                            let b = Number(f & E);
                            if (
                              ((f >>= P),
                              b > w && ((b -= D), (f += sX)),
                              0 === b)
                            )
                              continue;
                            let C = _[l + Math.abs(b) - 1];
                            b < 0 && (C = C.negate()), (m = m.add(C));
                          }
                          return m;
                        },
                        getPrecomputes(o, l, _) {
                          let f = sQ.get(l);
                          return (
                            f ||
                              ((f = this.precomputeWindow(l, o)),
                              1 !== o && sQ.set(l, _(f))),
                            f
                          );
                        },
                        wNAFCached(o, l, _) {
                          let f = index_es_sn(o);
                          return this.wNAF(f, this.getPrecomputes(f, o, _), l);
                        },
                        wNAFCachedUnsafe(o, l, _, f) {
                          let m = index_es_sn(o);
                          return 1 === m
                            ? this.unsafeLadder(o, l, f)
                            : this.wNAFUnsafe(
                                m,
                                this.getPrecomputes(m, o, _),
                                l,
                                f
                              );
                        },
                        setWindowSize(o, _) {
                          index_es_Yr(_, l), sZ.set(o, _), sQ.delete(o);
                        },
                      });
                  return {
                    CURVE: _,
                    ProjectivePoint: h,
                    normPrivateKeyToScalar: a,
                    weierstrassEquation: s,
                    isWithinCurveOrder: function (o) {
                      return index_es_we(o, rr, _.n);
                    },
                  };
                })({
                  ...l,
                  toBytes(o, l, f) {
                    let m = l.toAffine(),
                      b = _.toBytes(m.x);
                    return (
                      index_es_jt("isCompressed", f),
                      f
                        ? ee(Uint8Array.from([l.hasEvenY() ? 2 : 3]), b)
                        : ee(Uint8Array.from([4]), b, _.toBytes(m.y))
                    );
                  },
                  fromBytes(o) {
                    let l = o.length,
                      f = o[0],
                      w = o.subarray(1);
                    if (l === m && (2 === f || 3 === f)) {
                      let o;
                      let l = index_es_Ot(w);
                      if (!index_es_we(l, rr, _.ORDER))
                        throw Error("Point is not on curve");
                      let m = D(l);
                      try {
                        o = _.sqrt(m);
                      } catch (l) {
                        let o = l instanceof Error ? ": " + l.message : "";
                        throw Error("Point is not on curve" + o);
                      }
                      let b = (o & rr) === rr;
                      return (
                        ((1 & f) == 1) !== b && (o = _.neg(o)), { x: l, y: o }
                      );
                    }
                    if (l === b && 4 === f) {
                      let o = _.fromBytes(w.subarray(0, _.BYTES)),
                        l = _.fromBytes(w.subarray(_.BYTES, 2 * _.BYTES));
                      return { x: o, y: l };
                    }
                    throw Error(
                      "invalid Point, expected length of " +
                        m +
                        ", or uncompressed " +
                        b +
                        ", got " +
                        l
                    );
                  },
                }),
                h = (o) => Ct(index_es_Vt(o, l.nByteLength));
              function y(o) {
                let l = f >> rr;
                return o > l;
              }
              let p = (o, l, _) => index_es_Ot(o.slice(l, _));
              let d = class d {
                constructor(o, l, _) {
                  (this.r = o),
                    (this.s = l),
                    (this.recovery = _),
                    this.assertValidity();
                }
                static fromCompact(o) {
                  let _ = l.nByteLength;
                  return (
                    (o = et("compactSignature", o, 2 * _)),
                    new d(p(o, 0, _), p(o, _, 2 * _))
                  );
                }
                static fromDER(o) {
                  let { r: l, s: _ } = re.toSig(et("DER", o));
                  return new d(l, _);
                }
                assertValidity() {
                  index_es_ft("r", this.r, rr, f),
                    index_es_ft("s", this.s, rr, f);
                }
                addRecoveryBit(o) {
                  return new d(this.r, this.s, o);
                }
                recoverPublicKey(o) {
                  let { r: m, s: b, recovery: E } = this,
                    D = A(et("msgHash", o));
                  if (null == E || ![0, 1, 2, 3].includes(E))
                    throw Error("recovery id invalid");
                  let P = 2 === E || 3 === E ? m + l.n : m;
                  if (P >= _.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let C = (1 & E) == 0 ? "02" : "03",
                    R = w.fromHex(C + h(P)),
                    j = index_es_en(P, f),
                    q = s(-D * j),
                    M = s(b * j),
                    $ = w.BASE.multiplyAndAddUnsafe(R, q, M);
                  if (!$) throw Error("point at infinify");
                  return $.assertValidity(), $;
                }
                hasHighS() {
                  return y(this.s);
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new d(this.r, s(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return dist_index_es_kt(this.toDERHex());
                }
                toDERHex() {
                  return re.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return dist_index_es_kt(this.toCompactHex());
                }
                toCompactHex() {
                  return h(this.r) + h(this.s);
                }
              };
              function O(o) {
                let l = index_es_St(o),
                  _ = "string" == typeof o,
                  f = (l || _) && o.length;
                return l
                  ? f === m || f === b
                  : _
                  ? f === 2 * m || f === 2 * b
                  : o instanceof w;
              }
              let C =
                  l.bits2int ||
                  function (o) {
                    if (o.length > 8192) throw Error("input is too large");
                    let _ = index_es_Ot(o),
                      f = 8 * o.length - l.nBitLength;
                    return f > 0 ? _ >> BigInt(f) : _;
                  },
                A =
                  l.bits2int_modN ||
                  function (o) {
                    return s(C(o));
                  },
                R = index_es_Xe(l.nBitLength);
              function T(o) {
                return (
                  index_es_ft("num < 2^" + l.nBitLength, o, rs, R),
                  index_es_Vt(o, l.nByteLength)
                );
              }
              let j = { lowS: l.lowS, prehash: !1 },
                q = { lowS: l.lowS, prehash: !1 };
              return (
                w.BASE._setWindowSize(8),
                {
                  CURVE: l,
                  getPublicKey: function (o, l = !0) {
                    return w.fromPrivateKey(o).toRawBytes(l);
                  },
                  getSharedSecret: function (o, l, _ = !0) {
                    if (O(o)) throw Error("first arg must be private key");
                    if (!O(l)) throw Error("second arg must be public key");
                    return w.fromHex(l).multiply(E(o)).toRawBytes(_);
                  },
                  sign: function (o, m, b = j) {
                    let { seed: D, k2sig: R } = (function (o, m, b = j) {
                      if (["recovered", "canonical"].some((o) => o in b))
                        throw Error("sign() legacy options not supported");
                      let { hash: D, randomBytes: R } = l,
                        { lowS: q, prehash: M, extraEntropy: $ } = b;
                      null == q && (q = !0),
                        (o = et("msgHash", o)),
                        index_es_Jr(b),
                        M && (o = et("prehashed msgHash", D(o)));
                      let K = A(o),
                        G = E(m),
                        Y = [T(G), T(K)];
                      if (null != $ && !1 !== $) {
                        let o = !0 === $ ? R(_.BYTES) : $;
                        Y.push(et("extraEntropy", o));
                      }
                      let Q = ee(...Y);
                      return {
                        seed: Q,
                        k2sig: function (o) {
                          let l = C(o);
                          if (!P(l)) return;
                          let _ = index_es_en(l, f),
                            m = w.BASE.multiply(l).toAffine(),
                            b = s(m.x);
                          if (b === rs) return;
                          let E = s(_ * s(K + b * G));
                          if (E === rs) return;
                          let D = (m.x === b ? 0 : 2) | Number(m.y & rr),
                            A = E;
                          return (
                            q && y(E) && ((A = y(E) ? s(-E) : E), (D ^= 1)),
                            new d(b, A, D)
                          );
                        },
                      };
                    })(o, m, b);
                    return index_es_Vr(
                      l.hash.outputLen,
                      l.nByteLength,
                      l.hmac
                    )(D, R);
                  },
                  verify: function (o, _, m, b = q) {
                    let E, D;
                    (_ = et("msgHash", _)), (m = et("publicKey", m));
                    let { lowS: P, prehash: C, format: R } = b;
                    if ((index_es_Jr(b), "strict" in b))
                      throw Error("options.strict was renamed to lowS");
                    if (void 0 !== R && "compact" !== R && "der" !== R)
                      throw Error("format must be compact or der");
                    let j = "string" == typeof o || index_es_St(o),
                      M =
                        !j &&
                        !R &&
                        "object" == typeof o &&
                        null !== o &&
                        "bigint" == typeof o.r &&
                        "bigint" == typeof o.s;
                    if (!j && !M)
                      throw Error(
                        "invalid signature, expected Uint8Array, hex string or Signature instance"
                      );
                    try {
                      if ((M && (E = new d(o.r, o.s)), j)) {
                        try {
                          "compact" !== R && (E = d.fromDER(o));
                        } catch (o) {
                          if (!(o instanceof re.Err)) throw o;
                        }
                        E || "der" === R || (E = d.fromCompact(o));
                      }
                      D = w.fromHex(m);
                    } catch {
                      return !1;
                    }
                    if (!E || (P && E.hasHighS())) return !1;
                    C && (_ = l.hash(_));
                    let { r: $, s: K } = E,
                      G = A(_),
                      Y = index_es_en(K, f),
                      Q = s(G * Y),
                      Z = s($ * Y),
                      ei = w.BASE.multiplyAndAddUnsafe(D, Q, Z)?.toAffine();
                    return !!ei && s(ei.x) === $;
                  },
                  ProjectivePoint: w,
                  Signature: d,
                  utils: {
                    isValidPrivateKey(o) {
                      try {
                        return E(o), !0;
                      } catch {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: E,
                    randomPrivateKey: () => {
                      let o = index_es_zr(l.n);
                      return (function (o, l, _ = !1) {
                        let f = o.length,
                          m = index_es_Fr(l),
                          b = index_es_zr(l);
                        if (f < 16 || f < b || f > 1024)
                          throw Error(
                            "expected " + b + "-1024 bytes of input, got " + f
                          );
                        let w = _ ? dist_index_es_te(o) : index_es_Ot(o),
                          E = X(w, l - sH) + sH;
                        return _ ? index_es_me(E, m) : index_es_Vt(E, m);
                      })(l.randomBytes(o), l.n);
                    },
                    precompute: (o = 8, l = w.BASE) => (
                      l._setWindowSize(o), l.multiply(BigInt(3)), l
                    ),
                  },
                }
              );
            })({
              ...o,
              hash: l,
              hmac: (o, ..._) =>
                index_es_pe(
                  l,
                  o,
                  (function (...o) {
                    let l = 0;
                    for (let _ = 0; _ < o.length; _++) {
                      let f = o[_];
                      index_es_Wt(f), (l += f.length);
                    }
                    let _ = new Uint8Array(l);
                    for (let l = 0, f = 0; l < o.length; l++) {
                      let m = o[l];
                      _.set(m, f), (f += m.length);
                    }
                    return _;
                  })(..._)
                ),
              randomBytes: index_es_$t,
            });
          return { ...n(l), create: n };
        })(
          {
            a: ra,
            b: rc,
            Fp: ro,
            n: BigInt(
              "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
            ),
            Gx: BigInt(
              "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
            ),
            Gy: BigInt(
              "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
            ),
            h: BigInt(1),
            lowS: !1,
          },
          sj
        ),
        rl = "base10",
        rh = "base16",
        ru = "base64pad",
        r_ = "base64url",
        rp = "utf8";
      function jc() {
        let o = index_es_$t(32);
        return to_string_toString(o, rh);
      }
      function Pc(o) {
        let l = sj(from_string_fromString(o, rh));
        return to_string_toString(l, rh);
      }
      function kc(o) {
        let l = sj(from_string_fromString(o, rp));
        return to_string_toString(l, rh);
      }
      function index_es_Bt(o) {
        return Number(to_string_toString(o, rl));
      }
      function index_es_no(o) {
        return o.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      }
      function index_es_ro(o) {
        let l = o.replace(/-/g, "+").replace(/_/g, "/"),
          _ = (4 - (l.length % 4)) % 4;
        return l + "=".repeat(_);
      }
      function pn(o) {
        if (2 === index_es_Bt(o.type))
          return to_string_toString(concat([o.type, o.sealed]), ru);
        if (1 === index_es_Bt(o.type)) {
          if (typeof o.senderPublicKey > "u")
            throw Error("Missing sender public key for type 1 envelope");
          return to_string_toString(
            concat([o.type, o.senderPublicKey, o.iv, o.sealed]),
            ru
          );
        }
        return to_string_toString(concat([o.type, o.iv, o.sealed]), ru);
      }
      function index_es_ve(o) {
        let l = (o.encoding || ru) === r_ ? index_es_ro(o.encoded) : o.encoded,
          _ = from_string_fromString(l, ru),
          f = _.slice(0, 1);
        if (1 === index_es_Bt(f)) {
          let o = _.slice(1, 33),
            l = _.slice(33, 45),
            m = _.slice(45);
          return { type: f, sealed: m, iv: l, senderPublicKey: o };
        }
        if (2 === index_es_Bt(f)) {
          let o = _.slice(1),
            l = index_es_$t(12);
          return { type: f, sealed: o, iv: l };
        }
        let m = _.slice(1, 13),
          b = _.slice(13);
        return { type: f, sealed: b, iv: m };
      }
      function index_es_oo(o) {
        let l = o?.type || 0;
        if (1 === l) {
          if (typeof o?.senderPublicKey > "u")
            throw Error("missing sender public key");
          if (typeof o?.receiverPublicKey > "u")
            throw Error("missing receiver public key");
        }
        return {
          type: l,
          senderPublicKey: o?.senderPublicKey,
          receiverPublicKey: o?.receiverPublicKey,
        };
      }
      function Kc(o) {
        return (
          1 === o.type &&
          "string" == typeof o.senderPublicKey &&
          "string" == typeof o.receiverPublicKey
        );
      }
      function Zc(o) {
        return o?.relay || { protocol: "irn" };
      }
      function Yc(o) {
        let l = iW[o];
        if (typeof l > "u") throw Error(`Relay Protocol not supported: ${o}`);
        return l;
      }
      function Gc(o) {
        var l;
        if (!o.includes("wc:")) {
          let l = index_es_Le(o);
          null != l && l.includes("wc:") && (o = l);
        }
        o = (o = o.includes("wc://") ? o.replace("wc://", "") : o).includes(
          "wc:"
        )
          ? o.replace("wc:", "")
          : o;
        let _ = o.indexOf(":"),
          f = -1 !== o.indexOf("?") ? o.indexOf("?") : void 0,
          m = o.substring(0, _),
          b = o.substring(_ + 1, f).split("@"),
          w = "u" > typeof f ? o.substring(f) : "",
          E = new URLSearchParams(w),
          D = {};
        E.forEach((o, l) => {
          D[l] = o;
        });
        let P = "string" == typeof D.methods ? D.methods.split(",") : void 0;
        return {
          protocol: m,
          topic: (l = b[0]).startsWith("//") ? l.substring(2) : l,
          version: parseInt(b[1], 10),
          symKey: D.symKey,
          relay: (function (o, l = "-") {
            let _ = {},
              f = "relay" + l;
            return (
              Object.keys(o).forEach((l) => {
                if (l.startsWith(f)) {
                  let m = l.replace(f, ""),
                    b = o[l];
                  _[m] = b;
                }
              }),
              _
            );
          })(D),
          methods: P,
          expiryTimestamp: D.expiryTimestamp
            ? parseInt(D.expiryTimestamp, 10)
            : void 0,
        };
      }
      function Wc(o) {
        let l = new URLSearchParams(),
          _ = (function (o, l = "-") {
            let _ = {};
            return (
              Object.keys(o).forEach((f) => {
                o[f] && (_["relay" + l + f] = o[f]);
              }),
              _
            );
          })(o.relay);
        Object.keys(_)
          .sort()
          .forEach((o) => {
            l.set(o, _[o]);
          }),
          l.set("symKey", o.symKey),
          o.expiryTimestamp &&
            l.set("expiryTimestamp", o.expiryTimestamp.toString()),
          o.methods && l.set("methods", o.methods.join(","));
        let f = l.toString();
        return `${o.protocol}:${o.topic}@${o.version}?${f}`;
      }
      function Xc(o, l, _) {
        return `${o}?wc_ev=${_}&topic=${l}`;
      }
      function index_es_It(o) {
        let l = [];
        return (
          o.forEach((o) => {
            let [_, f] = o.split(":");
            l.push(`${_}:${f}`);
          }),
          l
        );
      }
      function index_es_gn(o) {
        return o.includes(":");
      }
      function index_es_yo(o) {
        return index_es_gn(o) ? o.split(":")[0] : o;
      }
      function ca(o, l) {
        l = l.map((o) => o.replace("did:pkh:", ""));
        let _ = (function (o) {
          let l = {};
          return (
            o?.forEach((o) => {
              var _;
              let [f, m] = o.split(":");
              l[f] ||
                (l[f] = { accounts: [], chains: [], events: [], methods: [] }),
                l[f].accounts.push(o),
                null == (_ = l[f].chains) || _.push(`${f}:${m}`);
            }),
            l
          );
        })(l);
        for (let [l, f] of Object.entries(_))
          f.methods ? (f.methods = at(f.methods, o)) : (f.methods = o),
            (f.events = ["chainChanged", "accountsChanged"]);
        return _;
      }
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      let rf = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        rg = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function index_es_ht(o, l) {
        let { message: _, code: f } = rg[o];
        return { message: l ? `${_} ${l}` : _, code: f };
      }
      function index_es_Nt(o, l) {
        let { message: _, code: f } = rf[o];
        return { message: l ? `${_} ${l}` : _, code: f };
      }
      function oe(o, l) {
        return (
          !!Array.isArray(o) && (!("u" > typeof l) || !o.length || o.every(l))
        );
      }
      function index_es_xe(o) {
        return (
          Object.getPrototypeOf(o) === Object.prototype && Object.keys(o).length
        );
      }
      function index_es_Et(o) {
        return typeof o > "u";
      }
      function index_es_nt(o, l) {
        return (
          !!(l && index_es_Et(o)) || ("string" == typeof o && !!o.trim().length)
        );
      }
      function index_es_Se(o, l) {
        return !!(l && index_es_Et(o)) || ("number" == typeof o && !isNaN(o));
      }
      function ie(o) {
        return (
          !!(index_es_nt(o, !1) && o.includes(":")) && 2 === o.split(":").length
        );
      }
      function index_es_mn(o) {
        let l = !0;
        return (
          oe(o)
            ? o.length && (l = o.every((o) => index_es_nt(o, !1)))
            : (l = !1),
          l
        );
      }
      function wn(o, l) {
        let _ = null;
        return (
          Object.values(o).forEach((o) => {
            var f;
            let m;
            if (_) return;
            let b =
              ((f = `${l}, namespace`),
              (m = null),
              index_es_mn(o?.methods)
                ? index_es_mn(o?.events) ||
                  (m = index_es_Nt(
                    "UNSUPPORTED_EVENTS",
                    `${f}, events should be an array of strings or empty array for no events`
                  ))
                : (m = index_es_Nt(
                    "UNSUPPORTED_METHODS",
                    `${f}, methods should be an array of strings or empty array for no methods`
                  )),
              m);
            b && (_ = b);
          }),
          _
        );
      }
      function index_es_Bo(o, l) {
        let _ = null;
        if (o && index_es_xe(o)) {
          let f;
          let m = wn(o, l);
          m && (_ = m);
          let b =
            ((f = null),
            Object.values(o).forEach((o) => {
              var _, m;
              let b;
              if (f) return;
              let w =
                ((_ = o?.accounts),
                (m = `${l} namespace`),
                (b = null),
                oe(_)
                  ? _.forEach((o) => {
                      b ||
                        (function (o) {
                          if (index_es_nt(o, !1) && o.includes(":")) {
                            let l = o.split(":");
                            if (3 === l.length) {
                              let o = l[0] + ":" + l[1];
                              return !!l[2] && ie(o);
                            }
                          }
                          return !1;
                        })(o) ||
                        (b = index_es_Nt(
                          "UNSUPPORTED_ACCOUNTS",
                          `${m}, account ${o} should be a string and conform to "namespace:chainId:address" format`
                        ));
                    })
                  : (b = index_es_Nt(
                      "UNSUPPORTED_ACCOUNTS",
                      `${m}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                    )),
                b);
              w && (f = w);
            }),
            f);
          b && (_ = b);
        } else
          _ = index_es_ht(
            "MISSING_OR_INVALID",
            `${l}, namespaces should be an object with data`
          );
        return _;
      }
      function index_es_Io(o) {
        return index_es_nt(o.protocol, !0);
      }
      function ya(o) {
        return "u" > typeof o;
      }
      function va(o, l) {
        return !(
          !ie(l) ||
          !(function (o) {
            let l = [];
            return (
              Object.values(o).forEach((o) => {
                l.push(...index_es_It(o.accounts));
              }),
              l
            );
          })(o).includes(l)
        );
      }
      function index_es_No(o, l, _) {
        let f = null,
          m = (function (o) {
            let l = {};
            return (
              Object.keys(o).forEach((_) => {
                var f;
                _.includes(":")
                  ? (l[_] = o[_])
                  : null == (f = o[_].chains) ||
                    f.forEach((f) => {
                      l[f] = { methods: o[_].methods, events: o[_].events };
                    });
              }),
              l
            );
          })(o),
          b = (function (o) {
            let l = {};
            return (
              Object.keys(o).forEach((_) => {
                if (_.includes(":")) l[_] = o[_];
                else {
                  let f = index_es_It(o[_].accounts);
                  f?.forEach((f) => {
                    l[f] = {
                      accounts: o[_].accounts.filter((o) =>
                        o.includes(`${f}:`)
                      ),
                      methods: o[_].methods,
                      events: o[_].events,
                    };
                  });
                }
              }),
              l
            );
          })(l),
          w = Object.keys(m),
          E = Object.keys(b),
          D = index_es_Uo(Object.keys(o)),
          P = index_es_Uo(Object.keys(l)),
          C = D.filter((o) => !P.includes(o));
        return (
          C.length &&
            (f = index_es_ht(
              "NON_CONFORMING_NAMESPACES",
              `${_} namespaces keys don't satisfy requiredNamespaces.
      Required: ${C.toString()}
      Received: ${Object.keys(l).toString()}`
            )),
          index_es_gt(w, E) ||
            (f = index_es_ht(
              "NON_CONFORMING_NAMESPACES",
              `${_} namespaces chains don't satisfy required namespaces.
      Required: ${w.toString()}
      Approved: ${E.toString()}`
            )),
          Object.keys(l).forEach((o) => {
            if (!o.includes(":") || f) return;
            let m = index_es_It(l[o].accounts);
            m.includes(o) ||
              (f = index_es_ht(
                "NON_CONFORMING_NAMESPACES",
                `${_} namespaces accounts don't satisfy namespace accounts for ${o}
        Required: ${o}
        Approved: ${m.toString()}`
              ));
          }),
          w.forEach((o) => {
            f ||
              (index_es_gt(m[o].methods, b[o].methods)
                ? index_es_gt(m[o].events, b[o].events) ||
                  (f = index_es_ht(
                    "NON_CONFORMING_NAMESPACES",
                    `${_} namespaces events don't satisfy namespace events for ${o}`
                  ))
                : (f = index_es_ht(
                    "NON_CONFORMING_NAMESPACES",
                    `${_} namespaces methods don't satisfy namespace methods for ${o}`
                  )));
          }),
          f
        );
      }
      function index_es_Uo(o) {
        return [
          ...new Set(o.map((o) => (o.includes(":") ? o.split(":")[0] : o))),
        ];
      }
      function Ia() {
        let o = index_es_xt();
        return new Promise((l) => {
          switch (o) {
            case i2.browser:
              l(index_es_Yt() && navigator?.onLine);
              break;
            case i2.reactNative:
              l(index_es_Ro());
              break;
            case i2.node:
            default:
              l(!0);
          }
        });
      }
      async function index_es_Ro() {
        if (pt() && "u" > typeof _.g && null != _.g && _.g.NetInfo) {
          let o = await (null == _.g ? void 0 : _.g.NetInfo.fetch());
          return o?.isConnected;
        }
        return !0;
      }
      let ry = {};
      let Ua = class Ua {
        static get(o) {
          return ry[o];
        }
        static set(o, l) {
          ry[o] = l;
        }
        static delete(o) {
          delete ry[o];
        }
      };
      let IEvents = class IEvents {};
      let heartbeat_dist_index_es_n = class heartbeat_dist_index_es_n extends IEvents {
        constructor(o) {
          super();
        }
      };
      let rm = en.FIVE_SECONDS,
        rv = { pulse: "heartbeat_pulse" };
      let index_es_i = class index_es_i extends heartbeat_dist_index_es_n {
        constructor(o) {
          super(o),
            (this.events = new G.EventEmitter()),
            (this.interval = rm),
            (this.interval = o?.interval || rm);
        }
        static async init(o) {
          let l = new index_es_i(o);
          return await l.init(), l;
        }
        async init() {
          await this.initialize();
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(o, l) {
          this.events.on(o, l);
        }
        once(o, l) {
          this.events.once(o, l);
        }
        off(o, l) {
          this.events.off(o, l);
        }
        removeListener(o, l) {
          this.events.removeListener(o, l);
        }
        async initialize() {
          this.intervalRef = setInterval(
            () => this.pulse(),
            (0, en.toMiliseconds)(this.interval)
          );
        }
        pulse() {
          this.events.emit(rv.pulse);
        }
      };
      let rb =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        rx =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        rw = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function jsonParseTransform(o, l) {
        if (
          "__proto__" === o ||
          ("constructor" === o && l && "object" == typeof l && "prototype" in l)
        ) {
          console.warn(
            `[destr] Dropping "${o}" key to prevent prototype pollution.`
          );
          return;
        }
        return l;
      }
      function destr(o, l = {}) {
        if ("string" != typeof o) return o;
        if ('"' === o[0] && '"' === o[o.length - 1] && -1 === o.indexOf("\\"))
          return o.slice(1, -1);
        let _ = o.trim();
        if (_.length <= 9)
          switch (_.toLowerCase()) {
            case "true":
              return !0;
            case "false":
              return !1;
            case "undefined":
              return;
            case "null":
              return null;
            case "nan":
              return Number.NaN;
            case "infinity":
              return Number.POSITIVE_INFINITY;
            case "-infinity":
              return Number.NEGATIVE_INFINITY;
          }
        if (!rw.test(o)) {
          if (l.strict) throw SyntaxError("[destr] Invalid JSON");
          return o;
        }
        try {
          if (rb.test(o) || rx.test(o)) {
            if (l.strict) throw Error("[destr] Possible prototype pollution");
            return JSON.parse(o, jsonParseTransform);
          }
          return JSON.parse(o);
        } catch (_) {
          if (l.strict) throw _;
          return o;
        }
      }
      var rE = _(55872).Buffer;
      function asyncCall(o, ...l) {
        try {
          var _;
          return (_ = o(...l)) && "function" == typeof _.then
            ? _
            : Promise.resolve(_);
        } catch (o) {
          return Promise.reject(o);
        }
      }
      function stringify(o) {
        if (
          (function (o) {
            let l = typeof o;
            return null === o || ("object" !== l && "function" !== l);
          })(o)
        )
          return String(o);
        if (
          (function (o) {
            let l = Object.getPrototypeOf(o);
            return !l || l.isPrototypeOf(Object);
          })(o) ||
          Array.isArray(o)
        )
          return JSON.stringify(o);
        if ("function" == typeof o.toJSON) return stringify(o.toJSON());
        throw Error("[unstorage] Cannot stringify value!");
      }
      let rI = "base64:";
      function normalizeKey(o) {
        return (
          (o &&
            o
              .split("?")[0]
              ?.replace(/[/\\]/g, ":")
              .replace(/:+/g, ":")
              .replace(/^:|:$/g, "")) ||
          ""
        );
      }
      function unstorage_mNKHTF5Y_normalizeBaseKey(o) {
        return (o = normalizeKey(o)) ? o + ":" : "";
      }
      let memory = () => {
        let o = new Map();
        return {
          name: "memory",
          getInstance: () => o,
          hasItem: (l) => o.has(l),
          getItem: (l) => o.get(l) ?? null,
          getItemRaw: (l) => o.get(l) ?? null,
          setItem(l, _) {
            o.set(l, _);
          },
          setItemRaw(l, _) {
            o.set(l, _);
          },
          removeItem(l) {
            o.delete(l);
          },
          getKeys: () => [...o.keys()],
          clear() {
            o.clear();
          },
          dispose() {
            o.clear();
          },
        };
      };
      function watch(o, l, _) {
        return o.watch ? o.watch((o, f) => l(o, _ + f)) : () => {};
      }
      async function dispose(o) {
        "function" == typeof o.dispose && (await asyncCall(o.dispose));
      }
      function promisifyRequest(o) {
        return new Promise((l, _) => {
          (o.oncomplete = o.onsuccess = () => l(o.result)),
            (o.onabort = o.onerror = () => _(o.error));
        });
      }
      function createStore(o, l) {
        let _ = indexedDB.open(o);
        _.onupgradeneeded = () => _.result.createObjectStore(l);
        let f = promisifyRequest(_);
        return (o, _) => f.then((f) => _(f.transaction(l, o).objectStore(l)));
      }
      function defaultGetStore() {
        return f || (f = createStore("keyval-store", "keyval")), f;
      }
      function get(o, l = defaultGetStore()) {
        return l("readonly", (l) => promisifyRequest(l.get(o)));
      }
      var z = (o = {}) => {
        let l;
        let _ = o.base && o.base.length > 0 ? `${o.base}:` : "",
          e = (o) => _ + o;
        return (
          o.dbName && o.storeName && (l = createStore(o.dbName, o.storeName)),
          {
            name: "idb-keyval",
            options: o,
            hasItem: async (o) => !(typeof (await get(e(o), l)) > "u"),
            getItem: async (o) => (await get(e(o), l)) ?? null,
            setItem: (o, _) =>
              (function (o, l, _ = defaultGetStore()) {
                return _(
                  "readwrite",
                  (_) => (_.put(l, o), promisifyRequest(_.transaction))
                );
              })(e(o), _, l),
            removeItem: (o) =>
              (function (o, l = defaultGetStore()) {
                return l(
                  "readwrite",
                  (l) => (l.delete(o), promisifyRequest(l.transaction))
                );
              })(e(o), l),
            getKeys: () =>
              (function (o = defaultGetStore()) {
                return o("readonly", (o) => {
                  var l;
                  if (o.getAllKeys) return promisifyRequest(o.getAllKeys());
                  let _ = [];
                  return ((l = (o) => _.push(o.key)),
                  (o.openCursor().onsuccess = function () {
                    this.result && (l(this.result), this.result.continue());
                  }),
                  promisifyRequest(o.transaction)).then(() => _);
                });
              })(l),
            clear: () =>
              (function (o = defaultGetStore()) {
                return o(
                  "readwrite",
                  (o) => (o.clear(), promisifyRequest(o.transaction))
                );
              })(l),
          }
        );
      };
      let index_es_ = class index_es_ {
        constructor() {
          this.indexedDb = (function (o = {}) {
            let l = {
                mounts: { "": o.driver || memory() },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {},
              },
              getMount = (o) => {
                for (let _ of l.mountpoints)
                  if (o.startsWith(_))
                    return {
                      base: _,
                      relativeKey: o.slice(_.length),
                      driver: l.mounts[_],
                    };
                return { base: "", relativeKey: o, driver: l.mounts[""] };
              },
              getMounts = (o, _) =>
                l.mountpoints
                  .filter((l) => l.startsWith(o) || (_ && o.startsWith(l)))
                  .map((_) => ({
                    relativeBase:
                      o.length > _.length ? o.slice(_.length) : void 0,
                    mountpoint: _,
                    driver: l.mounts[_],
                  })),
              onChange = (o, _) => {
                if (l.watching)
                  for (let f of ((_ = normalizeKey(_)), l.watchListeners))
                    f(o, _);
              },
              startWatch = async () => {
                if (!l.watching)
                  for (let o in ((l.watching = !0), l.mounts))
                    l.unwatch[o] = await watch(l.mounts[o], onChange, o);
              },
              stopWatch = async () => {
                if (l.watching) {
                  for (let o in l.unwatch) await l.unwatch[o]();
                  (l.unwatch = {}), (l.watching = !1);
                }
              },
              runBatch = (o, l, _) => {
                let f = new Map(),
                  getBatch = (o) => {
                    let l = f.get(o.base);
                    return (
                      l ||
                        ((l = { driver: o.driver, base: o.base, items: [] }),
                        f.set(o.base, l)),
                      l
                    );
                  };
                for (let _ of o) {
                  let o = "string" == typeof _,
                    f = normalizeKey(o ? _ : _.key),
                    m = o ? void 0 : _.value,
                    b = o || !_.options ? l : { ...l, ..._.options },
                    w = getMount(f);
                  getBatch(w).items.push({
                    key: f,
                    value: m,
                    relativeKey: w.relativeKey,
                    options: b,
                  });
                }
                return Promise.all([...f.values()].map((o) => _(o))).then((o) =>
                  o.flat()
                );
              },
              _ = {
                hasItem(o, l = {}) {
                  o = normalizeKey(o);
                  let { relativeKey: _, driver: f } = getMount(o);
                  return asyncCall(f.hasItem, _, l);
                },
                getItem(o, l = {}) {
                  o = normalizeKey(o);
                  let { relativeKey: _, driver: f } = getMount(o);
                  return asyncCall(f.getItem, _, l).then((o) => destr(o));
                },
                getItems: (o, l = {}) =>
                  runBatch(o, l, (o) =>
                    o.driver.getItems
                      ? asyncCall(
                          o.driver.getItems,
                          o.items.map((o) => ({
                            key: o.relativeKey,
                            options: o.options,
                          })),
                          l
                        ).then((l) =>
                          l.map((l) => ({
                            key: (function (...o) {
                              return normalizeKey(o.join(":"));
                            })(o.base, l.key),
                            value: destr(l.value),
                          }))
                        )
                      : Promise.all(
                          o.items.map((l) =>
                            asyncCall(
                              o.driver.getItem,
                              l.relativeKey,
                              l.options
                            ).then((o) => ({ key: l.key, value: destr(o) }))
                          )
                        )
                  ),
                getItemRaw(o, l = {}) {
                  o = normalizeKey(o);
                  let { relativeKey: _, driver: f } = getMount(o);
                  return f.getItemRaw
                    ? asyncCall(f.getItemRaw, _, l)
                    : asyncCall(f.getItem, _, l).then((o) => {
                        var l;
                        return "string" == typeof o && o.startsWith(rI)
                          ? ((l = o.slice(rI.length)),
                            globalThis.Buffer
                              ? rE.from(l, "base64")
                              : Uint8Array.from(globalThis.atob(l), (o) =>
                                  o.codePointAt(0)
                                ))
                          : o;
                      });
                },
                async setItem(o, l, f = {}) {
                  if (void 0 === l) return _.removeItem(o);
                  o = normalizeKey(o);
                  let { relativeKey: m, driver: b } = getMount(o);
                  b.setItem &&
                    (await asyncCall(b.setItem, m, stringify(l), f),
                    b.watch || onChange("update", o));
                },
                async setItems(o, l) {
                  await runBatch(o, l, async (o) => {
                    if (o.driver.setItems)
                      return asyncCall(
                        o.driver.setItems,
                        o.items.map((o) => ({
                          key: o.relativeKey,
                          value: stringify(o.value),
                          options: o.options,
                        })),
                        l
                      );
                    o.driver.setItem &&
                      (await Promise.all(
                        o.items.map((l) =>
                          asyncCall(
                            o.driver.setItem,
                            l.relativeKey,
                            stringify(l.value),
                            l.options
                          )
                        )
                      ));
                  });
                },
                async setItemRaw(o, l, f = {}) {
                  if (void 0 === l) return _.removeItem(o, f);
                  o = normalizeKey(o);
                  let { relativeKey: m, driver: b } = getMount(o);
                  if (b.setItemRaw) await asyncCall(b.setItemRaw, m, l, f);
                  else {
                    if (!b.setItem) return;
                    await asyncCall(
                      b.setItem,
                      m,
                      "string" == typeof l
                        ? l
                        : rI +
                            (globalThis.Buffer
                              ? rE.from(l).toString("base64")
                              : globalThis.btoa(String.fromCodePoint(...l))),
                      f
                    );
                  }
                  b.watch || onChange("update", o);
                },
                async removeItem(o, l = {}) {
                  "boolean" == typeof l && (l = { removeMeta: l }),
                    (o = normalizeKey(o));
                  let { relativeKey: _, driver: f } = getMount(o);
                  f.removeItem &&
                    (await asyncCall(f.removeItem, _, l),
                    (l.removeMeta || l.removeMata) &&
                      (await asyncCall(f.removeItem, _ + "$", l)),
                    f.watch || onChange("remove", o));
                },
                async getMeta(o, l = {}) {
                  "boolean" == typeof l && (l = { nativeOnly: l }),
                    (o = normalizeKey(o));
                  let { relativeKey: _, driver: f } = getMount(o),
                    m = Object.create(null);
                  if (
                    (f.getMeta &&
                      Object.assign(m, await asyncCall(f.getMeta, _, l)),
                    !l.nativeOnly)
                  ) {
                    let o = await asyncCall(f.getItem, _ + "$", l).then((o) =>
                      destr(o)
                    );
                    o &&
                      "object" == typeof o &&
                      ("string" == typeof o.atime &&
                        (o.atime = new Date(o.atime)),
                      "string" == typeof o.mtime &&
                        (o.mtime = new Date(o.mtime)),
                      Object.assign(m, o));
                  }
                  return m;
                },
                setMeta(o, l, _ = {}) {
                  return this.setItem(o + "$", l, _);
                },
                removeMeta(o, l = {}) {
                  return this.removeItem(o + "$", l);
                },
                async getKeys(o, l = {}) {
                  o = unstorage_mNKHTF5Y_normalizeBaseKey(o);
                  let _ = getMounts(o, !0),
                    f = [],
                    m = [],
                    b = !0;
                  for (let o of _) {
                    o.driver.flags?.maxDepth || (b = !1);
                    let _ = await asyncCall(
                      o.driver.getKeys,
                      o.relativeBase,
                      l
                    );
                    for (let l of _) {
                      let _ = o.mountpoint + normalizeKey(l);
                      f.some((o) => _.startsWith(o)) || m.push(_);
                    }
                    f = [
                      o.mountpoint,
                      ...f.filter((l) => !l.startsWith(o.mountpoint)),
                    ];
                  }
                  let w = void 0 !== l.maxDepth && !b;
                  return m.filter((_) => {
                    var f;
                    return (
                      (!w ||
                        (function (o, l) {
                          if (void 0 === l) return !0;
                          let _ = 0,
                            f = o.indexOf(":");
                          for (; f > -1; ) _++, (f = o.indexOf(":", f + 1));
                          return _ <= l;
                        })(_, l.maxDepth)) &&
                      ((f = o)
                        ? _.startsWith(f) && "$" !== _[_.length - 1]
                        : "$" !== _[_.length - 1])
                    );
                  });
                },
                async clear(o, l = {}) {
                  (o = unstorage_mNKHTF5Y_normalizeBaseKey(o)),
                    await Promise.all(
                      getMounts(o, !1).map(async (o) => {
                        if (o.driver.clear)
                          return asyncCall(o.driver.clear, o.relativeBase, l);
                        if (o.driver.removeItem) {
                          let _ = await o.driver.getKeys(
                            o.relativeBase || "",
                            l
                          );
                          return Promise.all(
                            _.map((_) => o.driver.removeItem(_, l))
                          );
                        }
                      })
                    );
                },
                async dispose() {
                  await Promise.all(
                    Object.values(l.mounts).map((o) => dispose(o))
                  );
                },
                watch: async (o) => (
                  await startWatch(),
                  l.watchListeners.push(o),
                  async () => {
                    (l.watchListeners = l.watchListeners.filter(
                      (l) => l !== o
                    )),
                      0 === l.watchListeners.length && (await stopWatch());
                  }
                ),
                async unwatch() {
                  (l.watchListeners = []), await stopWatch();
                },
                mount(o, f) {
                  if (
                    (o = unstorage_mNKHTF5Y_normalizeBaseKey(o)) &&
                    l.mounts[o]
                  )
                    throw Error(`already mounted at ${o}`);
                  return (
                    o &&
                      (l.mountpoints.push(o),
                      l.mountpoints.sort((o, l) => l.length - o.length)),
                    (l.mounts[o] = f),
                    l.watching &&
                      Promise.resolve(watch(f, onChange, o))
                        .then((_) => {
                          l.unwatch[o] = _;
                        })
                        .catch(console.error),
                    _
                  );
                },
                async unmount(o, _ = !0) {
                  (o = unstorage_mNKHTF5Y_normalizeBaseKey(o)) &&
                    l.mounts[o] &&
                    (l.watching &&
                      o in l.unwatch &&
                      (l.unwatch[o]?.(), delete l.unwatch[o]),
                    _ && (await dispose(l.mounts[o])),
                    (l.mountpoints = l.mountpoints.filter((l) => l !== o)),
                    delete l.mounts[o]);
                },
                getMount(o = "") {
                  o = normalizeKey(o) + ":";
                  let l = getMount(o);
                  return { driver: l.driver, base: l.base };
                },
                getMounts(o = "", l = {}) {
                  o = normalizeKey(o);
                  let _ = getMounts(o, l.parents);
                  return _.map((o) => ({
                    driver: o.driver,
                    base: o.mountpoint,
                  }));
                },
                keys: (o, l = {}) => _.getKeys(o, l),
                get: (o, l = {}) => _.getItem(o, l),
                set: (o, l, f = {}) => _.setItem(o, l, f),
                has: (o, l = {}) => _.hasItem(o, l),
                del: (o, l = {}) => _.removeItem(o, l),
                remove: (o, l = {}) => _.removeItem(o, l),
              };
            return _;
          })({
            driver: z({
              dbName: "WALLET_CONNECT_V2_INDEXED_DB",
              storeName: "keyvaluestorage",
            }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (
            await this.indexedDb.getItems(await this.indexedDb.getKeys())
          ).map((o) => [o.key, o.value]);
        }
        async getItem(o) {
          let l = await this.indexedDb.getItem(o);
          if (null !== l) return l;
        }
        async setItem(o, l) {
          await this.indexedDb.setItem(o, safeJsonStringify(l));
        }
        async removeItem(o) {
          await this.indexedDb.removeItem(o);
        }
      };
      var rS =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof _.g
            ? _.g
            : "u" > typeof self
            ? self
            : {},
        rD = { exports: {} };
      function dist_index_es_k(o) {
        var l;
        return [o[0], safeJsonParse(null != (l = o[1]) ? l : "")];
      }
      !(function () {
        function t() {}
        (t.prototype.getItem = function (o) {
          return this.hasOwnProperty(o) ? String(this[o]) : null;
        }),
          (t.prototype.setItem = function (o, l) {
            this[o] = String(l);
          }),
          (t.prototype.removeItem = function (o) {
            delete this[o];
          }),
          (t.prototype.clear = function () {
            let o = this;
            Object.keys(o).forEach(function (l) {
              (o[l] = void 0), delete o[l];
            });
          }),
          (t.prototype.key = function (o) {
            return (o = o || 0), Object.keys(this)[o];
          }),
          t.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          "u" > typeof rS && rS.localStorage
            ? (rD.exports = rS.localStorage)
            : "u" > typeof window && window.localStorage
            ? (rD.exports = window.localStorage)
            : (rD.exports = new t());
      })();
      let dist_index_es_K = class dist_index_es_K {
        constructor() {
          this.localStorage = rD.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(dist_index_es_k);
        }
        async getItem(o) {
          let l = this.localStorage.getItem(o);
          if (null !== l) return safeJsonParse(l);
        }
        async setItem(o, l) {
          this.localStorage.setItem(o, safeJsonStringify(l));
        }
        async removeItem(o) {
          this.localStorage.removeItem(o);
        }
      };
      let O = async (o, l, _) => {
          let f = "wc_storage_version",
            m = await l.getItem(f);
          if (m && m >= 1) {
            _(l);
            return;
          }
          let b = await o.getKeys();
          if (!b.length) {
            _(l);
            return;
          }
          let w = [];
          for (; b.length; ) {
            let _ = b.shift();
            if (!_) continue;
            let f = _.toLowerCase();
            if (
              f.includes("wc@") ||
              f.includes("walletconnect") ||
              f.includes("wc_") ||
              f.includes("wallet_connect")
            ) {
              let f = await o.getItem(_);
              await l.setItem(_, f), w.push(_);
            }
          }
          await l.setItem(f, 1), _(l), index_es_j(o, w);
        },
        index_es_j = async (o, l) => {
          l.length &&
            l.forEach(async (l) => {
              await o.removeItem(l);
            });
        };
      let index_es_h = class index_es_h {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (o) => {
              (this.storage = o), (this.initialized = !0);
            });
          let o = new dist_index_es_K();
          this.storage = o;
          try {
            let l = new index_es_();
            O(o, l, this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(o) {
          return await this.initialize(), this.storage.getItem(o);
        }
        async setItem(o, l) {
          return await this.initialize(), this.storage.setItem(o, l);
        }
        async removeItem(o) {
          return await this.initialize(), this.storage.removeItem(o);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((o) => {
              let l = setInterval(() => {
                this.initialized && (clearInterval(l), o());
              }, 20);
            }));
        }
      };
      var rP = _(86984),
        rO = _.n(rP);
      let rC = { level: "info" },
        rA = "custom_context";
      let index_es_O = class index_es_O {
        constructor(o) {
          (this.nodeValue = o),
            (this.sizeInBytes = new TextEncoder().encode(
              this.nodeValue
            ).length),
            (this.next = null);
        }
        get value() {
          return this.nodeValue;
        }
        get size() {
          return this.sizeInBytes;
        }
      };
      let index_es_d = class index_es_d {
        constructor(o) {
          (this.head = null),
            (this.tail = null),
            (this.lengthInNodes = 0),
            (this.maxSizeInBytes = o),
            (this.sizeInBytes = 0);
        }
        append(o) {
          let l = new index_es_O(o);
          if (l.size > this.maxSizeInBytes)
            throw Error(
              `[LinkedList] Value too big to insert into list: ${o} with size ${l.size}`
            );
          for (; this.size + l.size > this.maxSizeInBytes; ) this.shift();
          this.head ? this.tail && (this.tail.next = l) : (this.head = l),
            (this.tail = l),
            this.lengthInNodes++,
            (this.sizeInBytes += l.size);
        }
        shift() {
          if (!this.head) return;
          let o = this.head;
          (this.head = this.head.next),
            this.head || (this.tail = null),
            this.lengthInNodes--,
            (this.sizeInBytes -= o.size);
        }
        toArray() {
          let o = [],
            l = this.head;
          for (; null !== l; ) o.push(l.value), (l = l.next);
          return o;
        }
        get length() {
          return this.lengthInNodes;
        }
        get size() {
          return this.sizeInBytes;
        }
        toOrderedArray() {
          return Array.from(this);
        }
        [Symbol.iterator]() {
          let o = this.head;
          return {
            next: () => {
              if (!o) return { done: !0, value: null };
              let l = o.value;
              return (o = o.next), { done: !1, value: l };
            },
          };
        }
      };
      let L = class L {
        constructor(o, l = 1024e3) {
          (this.level = o ?? "error"),
            (this.levelValue = rP.levels.values[this.level]),
            (this.MAX_LOG_SIZE_IN_BYTES = l),
            (this.logs = new index_es_d(this.MAX_LOG_SIZE_IN_BYTES));
        }
        forwardToConsole(o, l) {
          l === rP.levels.values.error
            ? console.error(o)
            : l === rP.levels.values.warn
            ? console.warn(o)
            : l === rP.levels.values.debug
            ? console.debug(o)
            : l === rP.levels.values.trace
            ? console.trace(o)
            : console.log(o);
        }
        appendToLogs(o) {
          this.logs.append(
            safeJsonStringify({ timestamp: new Date().toISOString(), log: o })
          );
          let l = "string" == typeof o ? JSON.parse(o).level : o.level;
          l >= this.levelValue && this.forwardToConsole(o, l);
        }
        getLogs() {
          return this.logs;
        }
        clearLogs() {
          this.logs = new index_es_d(this.MAX_LOG_SIZE_IN_BYTES);
        }
        getLogArray() {
          return Array.from(this.logs);
        }
        logsToBlob(o) {
          let l = this.getLogArray();
          return (
            l.push(safeJsonStringify({ extraMetadata: o })),
            new Blob(l, { type: "application/json" })
          );
        }
      };
      let index_es_m = class index_es_m {
        constructor(o, l = 1024e3) {
          this.baseChunkLogger = new L(o, l);
        }
        write(o) {
          this.baseChunkLogger.appendToLogs(o);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(o) {
          return this.baseChunkLogger.logsToBlob(o);
        }
        downloadLogsBlobInBrowser(o) {
          let l = URL.createObjectURL(this.logsToBlob(o)),
            _ = document.createElement("a");
          (_.href = l),
            (_.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
            document.body.appendChild(_),
            _.click(),
            document.body.removeChild(_),
            URL.revokeObjectURL(l);
        }
      };
      let B = class B {
        constructor(o, l = 1024e3) {
          this.baseChunkLogger = new L(o, l);
        }
        write(o) {
          this.baseChunkLogger.appendToLogs(o);
        }
        getLogs() {
          return this.baseChunkLogger.getLogs();
        }
        clearLogs() {
          this.baseChunkLogger.clearLogs();
        }
        getLogArray() {
          return this.baseChunkLogger.getLogArray();
        }
        logsToBlob(o) {
          return this.baseChunkLogger.logsToBlob(o);
        }
      };
      var rR = Object.defineProperty,
        rT = Object.defineProperties,
        rN = Object.getOwnPropertyDescriptors,
        rj = Object.getOwnPropertySymbols,
        rk = Object.prototype.hasOwnProperty,
        rL = Object.prototype.propertyIsEnumerable,
        index_es_f = (o, l, _) =>
          l in o
            ? rR(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        i = (o, l) => {
          for (var _ in l || (l = {})) rk.call(l, _) && index_es_f(o, _, l[_]);
          if (rj) for (var _ of rj(l)) rL.call(l, _) && index_es_f(o, _, l[_]);
          return o;
        },
        index_es_g = (o, l) => rT(o, rN(l));
      function logger_dist_index_es_k(o) {
        return index_es_g(i({}, o), { level: o?.level || rC.level });
      }
      function index_es_y(o, l = rA) {
        return typeof o.bindings > "u"
          ? (function (o, l = rA) {
              return o[l] || "";
            })(o, l)
          : o.bindings().context || "";
      }
      function dist_index_es_E(o, l, _ = rA) {
        let f = (function (o, l, _ = rA) {
            let f = index_es_y(o, _);
            return f.trim() ? `${f}/${l}` : l;
          })(o, l, _),
          m = o.child({ context: f });
        return (function (o, l, _ = rA) {
          return (o[_] = l), o;
        })(m, f, _);
      }
      var rB = Object.defineProperty,
        index_es_u = (o, l, _) =>
          l in o
            ? rB(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        types_dist_index_es_c = (o, l, _) =>
          index_es_u(o, "symbol" != typeof l ? l + "" : l, _);
      let dist_index_es_h = class dist_index_es_h extends IEvents {
        constructor(o) {
          super(),
            (this.opts = o),
            types_dist_index_es_c(this, "protocol", "wc"),
            types_dist_index_es_c(this, "version", 2);
        }
      };
      var rU = Object.defineProperty,
        dist_index_es_b = (o, l, _) =>
          l in o
            ? rU(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        index_es_v = (o, l, _) =>
          dist_index_es_b(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_I = class index_es_I extends IEvents {
        constructor(o, l) {
          super(),
            (this.core = o),
            (this.logger = l),
            index_es_v(this, "records", new Map());
        }
      };
      let dist_index_es_y = class dist_index_es_y {
        constructor(o, l) {
          (this.logger = o), (this.core = l);
        }
      };
      let dist_index_es_m = class dist_index_es_m extends IEvents {
        constructor(o, l) {
          super(), (this.relayer = o), (this.logger = l);
        }
      };
      let dist_index_es_d = class dist_index_es_d extends IEvents {
        constructor(o) {
          super();
        }
      };
      let dist_index_es_f = class dist_index_es_f {
        constructor(o, l, _, f) {
          (this.core = o), (this.logger = l), (this.name = _);
        }
      };
      let dist_index_es_P = class dist_index_es_P extends IEvents {
        constructor(o, l) {
          super(), (this.relayer = o), (this.logger = l);
        }
      };
      let dist_index_es_S = class dist_index_es_S extends IEvents {
        constructor(o, l) {
          super(), (this.core = o), (this.logger = l);
        }
      };
      let index_es_M = class index_es_M {
        constructor(o, l, _) {
          (this.core = o), (this.logger = l), (this.store = _);
        }
      };
      let dist_index_es_O = class dist_index_es_O {
        constructor(o, l) {
          (this.projectId = o), (this.logger = l);
        }
      };
      let index_es_R = class index_es_R {
        constructor(o, l, _) {
          (this.core = o), (this.logger = l), (this.telemetryEnabled = _);
        }
      };
      var rq = Object.defineProperty,
        types_dist_index_es_k = (o, l, _) =>
          l in o
            ? rq(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        dist_index_es_i = (o, l, _) =>
          types_dist_index_es_k(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_J = class index_es_J {
        constructor(o) {
          (this.opts = o),
            dist_index_es_i(this, "protocol", "wc"),
            dist_index_es_i(this, "version", 2);
        }
      };
      let index_es_V = class index_es_V {
        constructor(o) {
          this.client = o;
        }
      };
      let rM = "INTERNAL_ERROR",
        r$ = "SERVER_ERROR",
        rz = [-32700, -32600, -32601, -32602, -32603],
        rH = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [rM]: { code: -32603, message: "Internal error" },
          [r$]: { code: -32e3, message: "Server error" },
        };
      function getError(o) {
        return Object.keys(rH).includes(o) ? rH[o] : rH[r$];
      }
      function parseConnectionError(o, l, _) {
        return o.message.includes("getaddrinfo ENOTFOUND") ||
          o.message.includes("connect ECONNREFUSED")
          ? Error(`Unavailable ${_} RPC url at ${l}`)
          : o;
      }
      var rF = _(88497);
      function payloadId(o = 3) {
        let l = Date.now() * Math.pow(10, o);
        return l + Math.floor(Math.random() * Math.pow(10, o));
      }
      function getBigIntRpcId(o = 6) {
        return BigInt(payloadId(o));
      }
      function formatJsonRpcRequest(o, l, _) {
        return { id: _ || payloadId(), jsonrpc: "2.0", method: o, params: l };
      }
      function formatJsonRpcResult(o, l) {
        return { id: o, jsonrpc: "2.0", result: l };
      }
      function formatJsonRpcError(o, l, _) {
        var f, m;
        return {
          id: o,
          jsonrpc: "2.0",
          error:
            void 0 === (f = l)
              ? getError(rM)
              : ("string" == typeof f &&
                  (f = Object.assign(Object.assign({}, getError(r$)), {
                    message: f,
                  })),
                void 0 !== _ && (f.data = _),
                (m = f.code),
                rz.includes(m) &&
                  (f = (function (o) {
                    let l = Object.values(rH).find((l) => l.code === o);
                    return l || rH[r$];
                  })(f.code)),
                f),
        };
      }
      let dist_index_es_e = class dist_index_es_e {};
      let jsonrpc_types_dist_index_es_n = class jsonrpc_types_dist_index_es_n extends dist_index_es_e {
        constructor() {
          super();
        }
      };
      let dist_index_es_r = class dist_index_es_r extends jsonrpc_types_dist_index_es_n {
        constructor(o) {
          super();
        }
      };
      function matchRegexProtocol(o, l) {
        let _ = (function (o) {
          let l = o.match(RegExp(/^\w+:/, "gi"));
          if (l && l.length) return l[0];
        })(o);
        return void 0 !== _ && new RegExp(l).test(_);
      }
      function isHttpUrl(o) {
        return matchRegexProtocol(o, "^https?:");
      }
      function isWsUrl(o) {
        return matchRegexProtocol(o, "^wss?:");
      }
      function isJsonRpcPayload(o) {
        return (
          "object" == typeof o &&
          "id" in o &&
          "jsonrpc" in o &&
          "2.0" === o.jsonrpc
        );
      }
      function isJsonRpcRequest(o) {
        return isJsonRpcPayload(o) && "method" in o;
      }
      function isJsonRpcResponse(o) {
        return isJsonRpcPayload(o) && (isJsonRpcResult(o) || isJsonRpcError(o));
      }
      function isJsonRpcResult(o) {
        return "result" in o;
      }
      function isJsonRpcError(o) {
        return "error" in o;
      }
      let jsonrpc_provider_dist_index_es_o = class jsonrpc_provider_dist_index_es_o extends dist_index_es_r {
        constructor(o) {
          super(o),
            (this.events = new G.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(o)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(o = this.connection) {
          await this.open(o);
        }
        async disconnect() {
          await this.close();
        }
        on(o, l) {
          this.events.on(o, l);
        }
        once(o, l) {
          this.events.once(o, l);
        }
        off(o, l) {
          this.events.off(o, l);
        }
        removeListener(o, l) {
          this.events.removeListener(o, l);
        }
        async request(o, l) {
          return this.requestStrict(
            formatJsonRpcRequest(
              o.method,
              o.params || [],
              o.id || getBigIntRpcId().toString()
            ),
            l
          );
        }
        async requestStrict(o, l) {
          return new Promise(async (_, f) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (o) {
                f(o);
              }
            this.events.on(`${o.id}`, (o) => {
              isJsonRpcError(o) ? f(o.error) : _(o.result);
            });
            try {
              await this.connection.send(o, l);
            } catch (o) {
              f(o);
            }
          });
        }
        setConnection(o = this.connection) {
          return o;
        }
        onPayload(o) {
          this.events.emit("payload", o),
            isJsonRpcResponse(o)
              ? this.events.emit(`${o.id}`, o)
              : this.events.emit("message", { type: o.method, data: o.params });
        }
        onClose(o) {
          o &&
            3e3 === o.code &&
            this.events.emit(
              "error",
              Error(
                `WebSocket connection closed abnormally with code: ${o.code} ${
                  o.reason ? `(${o.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        async open(o = this.connection) {
          (this.connection === o && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" == typeof o &&
              (await this.connection.open(o), (o = this.connection)),
            (this.connection = this.setConnection(o)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (o) => this.onPayload(o)),
            this.connection.on("close", (o) => this.onClose(o)),
            this.connection.on("error", (o) => this.events.emit("error", o)),
            this.connection.on("register_error", (o) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      };
      let jsonrpc_ws_connection_dist_index_es_w = () =>
          "u" > typeof WebSocket ||
          ("u" > typeof _.g && "u" > typeof _.g.WebSocket) ||
          ("u" > typeof window && "u" > typeof window.WebSocket) ||
          ("u" > typeof self && "u" > typeof self.WebSocket),
        jsonrpc_ws_connection_dist_index_es_d = (o) => o.split("?")[0],
        rV =
          "u" > typeof WebSocket
            ? WebSocket
            : "u" > typeof _.g && "u" > typeof _.g.WebSocket
            ? _.g.WebSocket
            : "u" > typeof window && "u" > typeof window.WebSocket
            ? window.WebSocket
            : "u" > typeof self && "u" > typeof self.WebSocket
            ? self.WebSocket
            : _(75e3);
      let jsonrpc_ws_connection_dist_index_es_f = class jsonrpc_ws_connection_dist_index_es_f {
        constructor(o) {
          if (
            ((this.url = o),
            (this.events = new G.EventEmitter()),
            (this.registering = !1),
            !isWsUrl(o))
          )
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${o}`
            );
          this.url = o;
        }
        get connected() {
          return "u" > typeof this.socket;
        }
        get connecting() {
          return this.registering;
        }
        on(o, l) {
          this.events.on(o, l);
        }
        once(o, l) {
          this.events.once(o, l);
        }
        off(o, l) {
          this.events.off(o, l);
        }
        removeListener(o, l) {
          this.events.removeListener(o, l);
        }
        async open(o = this.url) {
          await this.register(o);
        }
        async close() {
          return new Promise((o, l) => {
            if (typeof this.socket > "u") {
              l(Error("Connection already closed"));
              return;
            }
            (this.socket.onclose = (l) => {
              this.onClose(l), o();
            }),
              this.socket.close();
          });
        }
        async send(o) {
          typeof this.socket > "u" && (this.socket = await this.register());
          try {
            this.socket.send(safeJsonStringify(o));
          } catch (l) {
            this.onError(o.id, l);
          }
        }
        register(o = this.url) {
          if (!isWsUrl(o))
            throw Error(
              `Provided URL is not compatible with WebSocket connection: ${o}`
            );
          if (this.registering) {
            let o = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= o ||
                this.events.listenerCount("open") >= o) &&
                this.events.setMaxListeners(o + 1),
              new Promise((o, l) => {
                this.events.once("register_error", (o) => {
                  this.resetMaxListeners(), l(o);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), typeof this.socket > "u"))
                      return l(
                        Error("WebSocket connection is missing or invalid")
                      );
                    o(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = o),
            (this.registering = !0),
            new Promise((l, _) => {
              let f = (0, rF.isReactNative)()
                  ? void 0
                  : {
                      rejectUnauthorized: !RegExp(
                        "wss?://localhost(:d{2,5})?"
                      ).test(o),
                    },
                m = new rV(o, [], f);
              jsonrpc_ws_connection_dist_index_es_w()
                ? (m.onerror = (o) => {
                    _(this.emitError(o.error));
                  })
                : m.on("error", (o) => {
                    _(this.emitError(o));
                  }),
                (m.onopen = () => {
                  this.onOpen(m), l(m);
                });
            })
          );
        }
        onOpen(o) {
          (o.onmessage = (o) => this.onPayload(o)),
            (o.onclose = (o) => this.onClose(o)),
            (this.socket = o),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose(o) {
          (this.socket = void 0),
            (this.registering = !1),
            this.events.emit("close", o);
        }
        onPayload(o) {
          if (typeof o.data > "u") return;
          let l = "string" == typeof o.data ? safeJsonParse(o.data) : o.data;
          this.events.emit("payload", l);
        }
        onError(o, l) {
          let _ = this.parseError(l),
            f = _.message || _.toString(),
            m = formatJsonRpcError(o, f);
          this.events.emit("payload", m);
        }
        parseError(o, l = this.url) {
          return parseConnectionError(
            o,
            jsonrpc_ws_connection_dist_index_es_d(l),
            "WS"
          );
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(o) {
          let l = this.parseError(
            Error(
              o?.message ||
                `WebSocket connection failed for host: ${jsonrpc_ws_connection_dist_index_es_d(
                  this.url
                )}`
            )
          );
          return this.events.emit("register_error", l), l;
        }
      };
      var rK = _(55872).Buffer,
        rW = _(21481);
      let rG = "core",
        rJ = `wc@2:${rG}:`,
        rY = { logger: "error" },
        rX = { database: ":memory:" },
        rQ = "client_ed25519_seed",
        rZ = en.ONE_DAY,
        r0 = en.SIX_HOURS,
        r1 = "wss://relay.walletconnect.org",
        r2 = {
          message: "relayer_message",
          message_ack: "relayer_message_ack",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          publish: "relayer_publish",
        },
        r8 = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error",
        },
        r3 = "2.19.2",
        r5 = { link_mode: "link_mode", relay: "relay" },
        r4 = { inbound: "inbound", outbound: "outbound" },
        r6 = "WALLETCONNECT_LINK_MODE_APPS",
        r9 = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed",
        },
        r7 =
          (en.FIVE_SECONDS,
          {
            wc_pairingDelete: {
              req: { ttl: en.ONE_DAY, prompt: !1, tag: 1e3 },
              res: { ttl: en.ONE_DAY, prompt: !1, tag: 1001 },
            },
            wc_pairingPing: {
              req: { ttl: en.THIRTY_SECONDS, prompt: !1, tag: 1002 },
              res: { ttl: en.THIRTY_SECONDS, prompt: !1, tag: 1003 },
            },
            unregistered_method: {
              req: { ttl: en.ONE_DAY, prompt: !1, tag: 0 },
              res: { ttl: en.ONE_DAY, prompt: !1, tag: 0 },
            },
          }),
        ne = {
          create: "pairing_create",
          expire: "pairing_expire",
          delete: "pairing_delete",
          ping: "pairing_ping",
        },
        nt = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        ni = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        ns = "https://verify.walletconnect.org",
        nr = `${ns}/v3`,
        nn = ["https://verify.walletconnect.com", ns],
        no = {
          pairing_started: "pairing_started",
          pairing_uri_validation_success: "pairing_uri_validation_success",
          pairing_uri_not_expired: "pairing_uri_not_expired",
          store_new_pairing: "store_new_pairing",
          subscribing_pairing_topic: "subscribing_pairing_topic",
          subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
          existing_pairing: "existing_pairing",
          pairing_not_expired: "pairing_not_expired",
          emit_inactive_pairing: "emit_inactive_pairing",
          emit_session_proposal: "emit_session_proposal",
        },
        na = {
          no_internet_connection: "no_internet_connection",
          malformed_pairing_uri: "malformed_pairing_uri",
          active_pairing_already_exists: "active_pairing_already_exists",
          subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
          pairing_expired: "pairing_expired",
          proposal_listener_not_found: "proposal_listener_not_found",
        },
        nc = {
          session_approve_started: "session_approve_started",
          session_namespaces_validation_success:
            "session_namespaces_validation_success",
          subscribing_session_topic: "subscribing_session_topic",
          subscribe_session_topic_success: "subscribe_session_topic_success",
          publishing_session_approve: "publishing_session_approve",
          session_approve_publish_success: "session_approve_publish_success",
          store_session: "store_session",
          publishing_session_settle: "publishing_session_settle",
          session_settle_publish_success: "session_settle_publish_success",
        },
        nd = {
          no_internet_connection: "no_internet_connection",
          proposal_expired: "proposal_expired",
          subscribe_session_topic_failure: "subscribe_session_topic_failure",
          session_approve_publish_failure: "session_approve_publish_failure",
          session_settle_publish_failure: "session_settle_publish_failure",
          session_approve_namespace_validation_failure:
            "session_approve_namespace_validation_failure",
          proposal_not_found: "proposal_not_found",
        },
        nl = {
          authenticated_session_approve_started:
            "authenticated_session_approve_started",
          create_authenticated_session_topic:
            "create_authenticated_session_topic",
          cacaos_verified: "cacaos_verified",
          store_authenticated_session: "store_authenticated_session",
          subscribing_authenticated_session_topic:
            "subscribing_authenticated_session_topic",
          subscribe_authenticated_session_topic_success:
            "subscribe_authenticated_session_topic_success",
          publishing_authenticated_session_approve:
            "publishing_authenticated_session_approve",
        },
        nh = {
          no_internet_connection: "no_internet_connection",
          invalid_cacao: "invalid_cacao",
          subscribe_authenticated_session_topic_failure:
            "subscribe_authenticated_session_topic_failure",
          authenticated_session_approve_publish_failure:
            "authenticated_session_approve_publish_failure",
          authenticated_session_pending_request_not_found:
            "authenticated_session_pending_request_not_found",
        };
      var dist_index_es_nr = function (o, l) {
        if (o.length >= 255) throw TypeError("Alphabet too long");
        for (var _ = new Uint8Array(256), f = 0; f < _.length; f++) _[f] = 255;
        for (var m = 0; m < o.length; m++) {
          var b = o.charAt(m),
            w = b.charCodeAt(0);
          if (255 !== _[w]) throw TypeError(b + " is ambiguous");
          _[w] = m;
        }
        var E = o.length,
          D = o.charAt(0),
          P = Math.log(E) / Math.log(256),
          C = Math.log(256) / Math.log(E);
        function g(o) {
          if ("string" != typeof o) throw TypeError("Expected String");
          if (0 === o.length) return new Uint8Array();
          var l = 0;
          if (" " !== o[0]) {
            for (var f = 0, m = 0; o[l] === D; ) f++, l++;
            for (
              var b = ((o.length - l) * P + 1) >>> 0, w = new Uint8Array(b);
              o[l];

            ) {
              var C = _[o.charCodeAt(l)];
              if (255 === C) return;
              for (
                var A = 0, R = b - 1;
                (0 !== C || A < m) && -1 !== R;
                R--, A++
              )
                (C += (E * w[R]) >>> 0),
                  (w[R] = C % 256 >>> 0),
                  (C = (C / 256) >>> 0);
              if (0 !== C) throw Error("Non-zero carry");
              (m = A), l++;
            }
            if (" " !== o[l]) {
              for (var j = b - m; j !== b && 0 === w[j]; ) j++;
              for (var q = new Uint8Array(f + (b - j)), M = f; j !== b; )
                q[M++] = w[j++];
              return q;
            }
          }
        }
        return {
          encode: function (l) {
            if (
              (l instanceof Uint8Array ||
                (ArrayBuffer.isView(l)
                  ? (l = new Uint8Array(l.buffer, l.byteOffset, l.byteLength))
                  : Array.isArray(l) && (l = Uint8Array.from(l))),
              !(l instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === l.length) return "";
            for (var _ = 0, f = 0, m = 0, b = l.length; m !== b && 0 === l[m]; )
              m++, _++;
            for (
              var w = ((b - m) * C + 1) >>> 0, P = new Uint8Array(w);
              m !== b;

            ) {
              for (
                var A = l[m], R = 0, j = w - 1;
                (0 !== A || R < f) && -1 !== j;
                j--, R++
              )
                (A += (256 * P[j]) >>> 0),
                  (P[j] = A % E >>> 0),
                  (A = (A / E) >>> 0);
              if (0 !== A) throw Error("Non-zero carry");
              (f = R), m++;
            }
            for (var q = w - f; q !== w && 0 === P[q]; ) q++;
            for (var M = D.repeat(_); q < w; ++q) M += o.charAt(P[q]);
            return M;
          },
          decodeUnsafe: g,
          decode: function (o) {
            var _ = g(o);
            if (_) return _;
            throw Error(`Non-${l} character`);
          },
        };
      };
      let index_es_si = (o) => {
          if (o instanceof Uint8Array && "Uint8Array" === o.constructor.name)
            return o;
          if (o instanceof ArrayBuffer) return new Uint8Array(o);
          if (ArrayBuffer.isView(o))
            return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        dist_index_es_or = (o) => new TextEncoder().encode(o),
        dist_index_es_ar = (o) => new TextDecoder().decode(o);
      let dist_index_es_cr = class dist_index_es_cr {
        constructor(o, l, _) {
          (this.name = o), (this.prefix = l), (this.baseEncode = _);
        }
        encode(o) {
          if (o instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(o)}`;
          throw Error("Unknown type, must be binary type");
        }
      };
      let dist_index_es_hr = class dist_index_es_hr {
        constructor(o, l, _) {
          if (((this.name = o), (this.prefix = l), void 0 === l.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = l.codePointAt(0)), (this.baseDecode = _);
        }
        decode(o) {
          if ("string" == typeof o) {
            if (o.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(o)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(o.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(o) {
          return index_es_ri(this, o);
        }
      };
      let dist_index_es_lr = class dist_index_es_lr {
        constructor(o) {
          this.decoders = o;
        }
        or(o) {
          return index_es_ri(this, o);
        }
        decode(o) {
          let l = o[0],
            _ = this.decoders[l];
          if (_) return _.decode(o);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              o
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      };
      let index_es_ri = (o, l) =>
        new dist_index_es_lr({
          ...(o.decoders || { [o.prefix]: o }),
          ...(l.decoders || { [l.prefix]: l }),
        });
      let dist_index_es_ur = class dist_index_es_ur {
        constructor(o, l, _, f) {
          (this.name = o),
            (this.prefix = l),
            (this.baseEncode = _),
            (this.baseDecode = f),
            (this.encoder = new dist_index_es_cr(o, l, _)),
            (this.decoder = new dist_index_es_hr(o, l, f));
        }
        encode(o) {
          return this.encoder.encode(o);
        }
        decode(o) {
          return this.decoder.decode(o);
        }
      };
      let dist_index_es_Ee = ({ name: o, prefix: l, encode: _, decode: f }) =>
          new dist_index_es_ur(o, l, _, f),
        dist_index_es_de = ({ prefix: o, name: l, alphabet: _ }) => {
          let { encode: f, decode: m } = dist_index_es_nr(_, l);
          return dist_index_es_Ee({
            prefix: o,
            name: l,
            encode: f,
            decode: (o) => index_es_si(m(o)),
          });
        },
        dist_index_es_dr = (o, l, _, f) => {
          let m = {};
          for (let o = 0; o < l.length; ++o) m[l[o]] = o;
          let b = o.length;
          for (; "=" === o[b - 1]; ) --b;
          let w = new Uint8Array(((b * _) / 8) | 0),
            E = 0,
            D = 0,
            P = 0;
          for (let l = 0; l < b; ++l) {
            let b = m[o[l]];
            if (void 0 === b) throw SyntaxError(`Non-${f} character`);
            (D = (D << _) | b),
              (E += _) >= 8 && ((E -= 8), (w[P++] = 255 & (D >> E)));
          }
          if (E >= _ || 255 & (D << (8 - E)))
            throw SyntaxError("Unexpected end of data");
          return w;
        },
        dist_index_es_gr = (o, l, _) => {
          let f = "=" === l[l.length - 1],
            m = (1 << _) - 1,
            b = "",
            w = 0,
            E = 0;
          for (let f = 0; f < o.length; ++f)
            for (E = (E << 8) | o[f], w += 8; w > _; )
              (w -= _), (b += l[m & (E >> w)]);
          if ((w && (b += l[m & (E << (_ - w))]), f))
            for (; (b.length * _) & 7; ) b += "=";
          return b;
        },
        core_dist_index_es_P = ({
          name: o,
          prefix: l,
          bitsPerChar: _,
          alphabet: f,
        }) =>
          dist_index_es_Ee({
            prefix: l,
            name: o,
            encode: (o) => dist_index_es_gr(o, f, _),
            decode: (l) => dist_index_es_dr(l, f, _, o),
          }),
        nu = dist_index_es_Ee({
          prefix: "\x00",
          name: "identity",
          encode: (o) => dist_index_es_ar(o),
          decode: (o) => dist_index_es_or(o),
        });
      var n_ = Object.freeze({ __proto__: null, identity: nu });
      let np = core_dist_index_es_P({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var nf = Object.freeze({ __proto__: null, base2: np });
      let ng = core_dist_index_es_P({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var ny = Object.freeze({ __proto__: null, base8: ng });
      let nm = dist_index_es_de({
        prefix: "9",
        name: "base10",
        alphabet: "0123456789",
      });
      var nv = Object.freeze({ __proto__: null, base10: nm });
      let nb = core_dist_index_es_P({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        nx = core_dist_index_es_P({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var nw = Object.freeze({ __proto__: null, base16: nb, base16upper: nx });
      let nE = core_dist_index_es_P({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        nI = core_dist_index_es_P({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        nS = core_dist_index_es_P({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        nD = core_dist_index_es_P({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        nP = core_dist_index_es_P({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        nO = core_dist_index_es_P({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        nC = core_dist_index_es_P({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        nA = core_dist_index_es_P({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        nR = core_dist_index_es_P({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var nT = Object.freeze({
        __proto__: null,
        base32: nE,
        base32upper: nI,
        base32pad: nS,
        base32padupper: nD,
        base32hex: nP,
        base32hexupper: nO,
        base32hexpad: nC,
        base32hexpadupper: nA,
        base32z: nR,
      });
      let nN = dist_index_es_de({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        nj = dist_index_es_de({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var nk = Object.freeze({ __proto__: null, base36: nN, base36upper: nj });
      let nL = dist_index_es_de({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        nB = dist_index_es_de({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var nU = Object.freeze({
        __proto__: null,
        base58btc: nL,
        base58flickr: nB,
      });
      let nq = core_dist_index_es_P({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        nM = core_dist_index_es_P({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        n$ = core_dist_index_es_P({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        nz = core_dist_index_es_P({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var nH = Object.freeze({
        __proto__: null,
        base64: nq,
        base64pad: nM,
        base64url: n$,
        base64urlpad: nz,
      });
      let nF = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        nV = nF.reduce((o, l, _) => ((o[_] = l), o), []),
        nK = nF.reduce((o, l, _) => ((o[l.codePointAt(0)] = _), o), []),
        nW = dist_index_es_Ee({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (o) {
            return o.reduce((o, l) => (o += nV[l]), "");
          },
          decode: function (o) {
            let l = [];
            for (let _ of o) {
              let o = nK[_.codePointAt(0)];
              if (void 0 === o) throw Error(`Non-base256emoji character: ${_}`);
              l.push(o);
            }
            return new Uint8Array(l);
          },
        });
      var nG = Object.freeze({ __proto__: null, base256emoji: nW });
      function index_es_ai(o, l, _) {
        (l = l || []), (_ = _ || 0);
        for (var f = _; o >= 2147483648; )
          (l[_++] = (255 & o) | 128), (o /= 128);
        for (; -128 & o; ) (l[_++] = (255 & o) | 128), (o >>>= 7);
        return (l[_] = 0 | o), (index_es_ai.bytes = _ - f + 1), l;
      }
      function dist_index_es_Me(o, l) {
        var _,
          f = 0,
          l = l || 0,
          m = 0,
          b = l,
          w = o.length;
        do {
          if (b >= w)
            throw (
              ((dist_index_es_Me.bytes = 0),
              RangeError("Could not decode varint"))
            );
          (_ = o[b++]),
            (f += m < 28 ? (127 & _) << m : (127 & _) * Math.pow(2, m)),
            (m += 7);
        } while (_ >= 128);
        return (dist_index_es_Me.bytes = b - l), f;
      }
      var nJ = {
        encode: index_es_ai,
        decode: dist_index_es_Me,
        encodingLength: function (o) {
          return o < 128
            ? 1
            : o < 16384
            ? 2
            : o < 2097152
            ? 3
            : o < 268435456
            ? 4
            : o < 34359738368
            ? 5
            : o < 4398046511104
            ? 6
            : o < 562949953421312
            ? 7
            : o < 72057594037927940
            ? 8
            : o < 0x7fffffffffffffff
            ? 9
            : 10;
        },
      };
      let index_es_li = (o, l, _ = 0) => (nJ.encode(o, l, _), l),
        index_es_ui = (o) => nJ.encodingLength(o),
        dist_index_es_Ke = (o, l) => {
          let _ = l.byteLength,
            f = index_es_ui(o),
            m = f + index_es_ui(_),
            b = new Uint8Array(m + _);
          return (
            index_es_li(o, b, 0),
            index_es_li(_, b, f),
            b.set(l, m),
            new index_es_bn(o, _, l, b)
          );
        };
      let index_es_bn = class index_es_bn {
        constructor(o, l, _, f) {
          (this.code = o), (this.size = l), (this.digest = _), (this.bytes = f);
        }
      };
      let index_es_di = ({ name: o, code: l, encode: _ }) =>
        new dist_index_es_mn(o, l, _);
      let dist_index_es_mn = class dist_index_es_mn {
        constructor(o, l, _) {
          (this.name = o), (this.code = l), (this.encode = _);
        }
        digest(o) {
          if (o instanceof Uint8Array) {
            let l = this.encode(o);
            return l instanceof Uint8Array
              ? dist_index_es_Ke(this.code, l)
              : l.then((o) => dist_index_es_Ke(this.code, o));
          }
          throw Error("Unknown type, must be binary type");
        }
      };
      let index_es_gi = (o) => async (l) =>
          new Uint8Array(await crypto.subtle.digest(o, l)),
        nY = index_es_di({
          name: "sha2-256",
          code: 18,
          encode: index_es_gi("SHA-256"),
        }),
        nX = index_es_di({
          name: "sha2-512",
          code: 19,
          encode: index_es_gi("SHA-512"),
        });
      var nQ = Object.freeze({ __proto__: null, sha256: nY, sha512: nX }),
        nZ = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: index_es_si,
            digest: (o) => dist_index_es_Ke(0, index_es_si(o)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let n0 = {
        ...n_,
        ...nf,
        ...ny,
        ...nv,
        ...nw,
        ...nT,
        ...nk,
        ...nU,
        ...nH,
        ...nG,
      };
      function index_es_mi(o, l, _, f) {
        return {
          name: o,
          prefix: l,
          encoder: { name: o, prefix: l, encode: _ },
          decoder: { decode: f },
        };
      }
      ({ ...nQ, ...nZ });
      let n1 = index_es_mi(
          "utf8",
          "u",
          (o) => "u" + new TextDecoder("utf8").decode(o),
          (o) => new TextEncoder().encode(o.substring(1))
        ),
        n2 = index_es_mi(
          "ascii",
          "a",
          (o) => {
            let l = "a";
            for (let _ = 0; _ < o.length; _++) l += String.fromCharCode(o[_]);
            return l;
          },
          (o) => {
            o = o.substring(1);
            let l = (function (o = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? globalThis.Buffer.allocUnsafe(o)
                : new Uint8Array(o);
            })(o.length);
            for (let _ = 0; _ < o.length; _++) l[_] = o.charCodeAt(_);
            return l;
          }
        ),
        n8 = {
          utf8: n1,
          "utf-8": n1,
          hex: n0.base16,
          latin1: n2,
          ascii: n2,
          binary: n2,
          ...n0,
        };
      var n3 = Object.defineProperty,
        dist_index_es_Rn = (o, l, _) =>
          l in o
            ? n3(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        index_es_W = (o, l, _) =>
          dist_index_es_Rn(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_Di = class index_es_Di {
        constructor(o, l) {
          (this.core = o),
            (this.logger = l),
            index_es_W(this, "keychain", new Map()),
            index_es_W(this, "name", "keychain"),
            index_es_W(this, "version", "0.3"),
            index_es_W(this, "initialized", !1),
            index_es_W(this, "storagePrefix", rJ),
            index_es_W(this, "init", async () => {
              if (!this.initialized) {
                let o = await this.getKeyChain();
                "u" > typeof o && (this.keychain = o), (this.initialized = !0);
              }
            }),
            index_es_W(
              this,
              "has",
              (o) => (this.isInitialized(), this.keychain.has(o))
            ),
            index_es_W(this, "set", async (o, l) => {
              this.isInitialized(),
                this.keychain.set(o, l),
                await this.persist();
            }),
            index_es_W(this, "get", (o) => {
              this.isInitialized();
              let l = this.keychain.get(o);
              if (typeof l > "u") {
                let { message: l } = index_es_ht(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${o}`
                );
                throw Error(l);
              }
              return l;
            }),
            index_es_W(this, "del", async (o) => {
              this.isInitialized(),
                this.keychain.delete(o),
                await this.persist();
            }),
            (this.core = o),
            (this.logger = dist_index_es_E(l, this.name));
        }
        get context() {
          return index_es_y(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(o) {
          await this.core.storage.setItem(this.storageKey, fi(o));
        }
        async getKeyChain() {
          let o = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof o ? li(o) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: o } = index_es_ht("NOT_INITIALIZED", this.name);
            throw Error(o);
          }
        }
      };
      var n5 = Object.defineProperty,
        dist_index_es_An = (o, l, _) =>
          l in o
            ? n5(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        core_dist_index_es_S = (o, l, _) =>
          dist_index_es_An(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_vi = class index_es_vi {
        constructor(o, l, _) {
          (this.core = o),
            (this.logger = l),
            core_dist_index_es_S(this, "name", "crypto"),
            core_dist_index_es_S(this, "keychain"),
            core_dist_index_es_S(this, "randomSessionIdentifier", jc()),
            core_dist_index_es_S(this, "initialized", !1),
            core_dist_index_es_S(this, "init", async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            core_dist_index_es_S(
              this,
              "hasKeys",
              (o) => (this.isInitialized(), this.keychain.has(o))
            ),
            core_dist_index_es_S(this, "getClientId", async () => {
              this.isInitialized();
              let o = await this.getClientSeed(),
                l = Po(o);
              return Qe(l.publicKey);
            }),
            core_dist_index_es_S(this, "generateKeyPair", () => {
              this.isInitialized();
              let o = (function () {
                let o = s6.utils.randomPrivateKey(),
                  l = s6.getPublicKey(o);
                return {
                  privateKey: to_string_toString(o, rh),
                  publicKey: to_string_toString(l, rh),
                };
              })();
              return this.setPrivateKey(o.publicKey, o.privateKey);
            }),
            core_dist_index_es_S(this, "signJWT", async (o) => {
              this.isInitialized();
              let l = await this.getClientSeed(),
                _ = Po(l),
                f = this.randomSessionIdentifier;
              return await Qo(f, o, rZ, _);
            }),
            core_dist_index_es_S(this, "generateSharedKey", (o, l, _) => {
              this.isInitialized();
              let f = this.getPrivateKey(o),
                m = (function (o, l) {
                  let _ = s6.getSharedSecret(
                      from_string_fromString(o, rh),
                      from_string_fromString(l, rh)
                    ),
                    f = Vs(sj, _, void 0, void 0, 32);
                  return to_string_toString(f, rh);
                })(f, l);
              return this.setSymKey(m, _);
            }),
            core_dist_index_es_S(this, "setSymKey", async (o, l) => {
              this.isInitialized();
              let _ = l || Pc(o);
              return await this.keychain.set(_, o), _;
            }),
            core_dist_index_es_S(this, "deleteKeyPair", async (o) => {
              this.isInitialized(), await this.keychain.del(o);
            }),
            core_dist_index_es_S(this, "deleteSymKey", async (o) => {
              this.isInitialized(), await this.keychain.del(o);
            }),
            core_dist_index_es_S(this, "encode", async (o, l, _) => {
              this.isInitialized();
              let f = index_es_oo(_),
                m = safeJsonStringify(l);
              if (2 === f.type)
                return (function (o, l) {
                  let _ = from_string_fromString("2", rl),
                    f = index_es_$t(12),
                    m = from_string_fromString(o, rp),
                    b = pn({ type: _, sealed: m, iv: f });
                  return l === r_ ? index_es_no(b) : b;
                })(m, _?.encoding);
              if (Kc(f)) {
                let l = f.senderPublicKey,
                  _ = f.receiverPublicKey;
                o = await this.generateSharedKey(l, _);
              }
              let b = this.getSymKey(o),
                { type: w, senderPublicKey: E } = f;
              return (function (o) {
                var l;
                let _ =
                  ((l = "u" > typeof o.type ? o.type : 0),
                  from_string_fromString(`${l}`, rl));
                if (1 === index_es_Bt(_) && typeof o.senderPublicKey > "u")
                  throw Error("Missing sender public key for type 1 envelope");
                let f =
                    "u" > typeof o.senderPublicKey
                      ? from_string_fromString(o.senderPublicKey, rh)
                      : void 0,
                  m =
                    "u" > typeof o.iv
                      ? from_string_fromString(o.iv, rh)
                      : index_es_$t(12),
                  b = from_string_fromString(o.symKey, rh),
                  w = sO(b, m).encrypt(from_string_fromString(o.message, rp)),
                  E = pn({ type: _, sealed: w, iv: m, senderPublicKey: f });
                return o.encoding === r_ ? index_es_no(E) : E;
              })({
                type: w,
                symKey: b,
                message: m,
                senderPublicKey: E,
                encoding: _?.encoding,
              });
            }),
            core_dist_index_es_S(this, "decode", async (o, l, _) => {
              this.isInitialized();
              let f = (function (o, l) {
                let _ = index_es_ve({ encoded: o, encoding: l?.encoding });
                return index_es_oo({
                  type: index_es_Bt(_.type),
                  senderPublicKey:
                    "u" > typeof _.senderPublicKey
                      ? to_string_toString(_.senderPublicKey, rh)
                      : void 0,
                  receiverPublicKey: l?.receiverPublicKey,
                });
              })(l, _);
              if (2 === f.type) {
                let o = (function (o, l) {
                  let { sealed: _ } = index_es_ve({ encoded: o, encoding: l });
                  return to_string_toString(_, rp);
                })(l, _?.encoding);
                return safeJsonParse(o);
              }
              if (Kc(f)) {
                let l = f.receiverPublicKey,
                  _ = f.senderPublicKey;
                o = await this.generateSharedKey(l, _);
              }
              try {
                let f = this.getSymKey(o),
                  m = (function (o) {
                    let l = from_string_fromString(o.symKey, rh),
                      { sealed: _, iv: f } = index_es_ve({
                        encoded: o.encoded,
                        encoding: o.encoding,
                      }),
                      m = sO(l, f).decrypt(_);
                    if (null === m) throw Error("Failed to decrypt");
                    return to_string_toString(m, rp);
                  })({ symKey: f, encoded: l, encoding: _?.encoding });
                return safeJsonParse(m);
              } catch (l) {
                this.logger.error(
                  `Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(l);
              }
            }),
            core_dist_index_es_S(this, "getPayloadType", (o, l = ru) => {
              let _ = index_es_ve({ encoded: o, encoding: l });
              return index_es_Bt(_.type);
            }),
            core_dist_index_es_S(
              this,
              "getPayloadSenderPublicKey",
              (o, l = ru) => {
                let _ = index_es_ve({ encoded: o, encoding: l });
                return _.senderPublicKey
                  ? to_string_toString(_.senderPublicKey, rh)
                  : void 0;
              }
            ),
            (this.core = o),
            (this.logger = dist_index_es_E(l, this.name)),
            (this.keychain = _ || new index_es_Di(this.core, this.logger));
        }
        get context() {
          return index_es_y(this.logger);
        }
        async setPrivateKey(o, l) {
          return await this.keychain.set(o, l), o;
        }
        getPrivateKey(o) {
          return this.keychain.get(o);
        }
        async getClientSeed() {
          let o = "";
          try {
            o = this.keychain.get(rQ);
          } catch {
            (o = jc()), await this.keychain.set(rQ, o);
          }
          return (function (o, l = "utf8") {
            let _ = n8[l];
            if (!_) throw Error(`Unsupported encoding "${l}"`);
            return ("utf8" === l || "utf-8" === l) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? globalThis.Buffer.from(o, "utf8")
              : _.decoder.decode(`${_.prefix}${o}`);
          })(o, "base16");
        }
        getSymKey(o) {
          return this.keychain.get(o);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: o } = index_es_ht("NOT_INITIALIZED", this.name);
            throw Error(o);
          }
        }
      };
      var n4 = Object.defineProperty,
        n6 = Object.defineProperties,
        n9 = Object.getOwnPropertyDescriptors,
        n7 = Object.getOwnPropertySymbols,
        oi = Object.prototype.hasOwnProperty,
        os = Object.prototype.propertyIsEnumerable,
        dist_index_es_Ve = (o, l, _) =>
          l in o
            ? n4(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        dist_index_es_kn = (o, l) => {
          for (var _ in l || (l = {}))
            oi.call(l, _) && dist_index_es_Ve(o, _, l[_]);
          if (n7)
            for (var _ of n7(l)) os.call(l, _) && dist_index_es_Ve(o, _, l[_]);
          return o;
        },
        dist_index_es_jn = (o, l) => n6(o, n9(l)),
        core_dist_index_es_k = (o, l, _) =>
          dist_index_es_Ve(o, "symbol" != typeof l ? l + "" : l, _);
      let core_dist_index_es_i = class core_dist_index_es_i extends dist_index_es_y {
        constructor(o, l) {
          super(o, l),
            (this.logger = o),
            (this.core = l),
            core_dist_index_es_k(this, "messages", new Map()),
            core_dist_index_es_k(this, "messagesWithoutClientAck", new Map()),
            core_dist_index_es_k(this, "name", "messages"),
            core_dist_index_es_k(this, "version", "0.3"),
            core_dist_index_es_k(this, "initialized", !1),
            core_dist_index_es_k(this, "storagePrefix", rJ),
            core_dist_index_es_k(this, "init", async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  let o = await this.getRelayerMessages();
                  "u" > typeof o && (this.messages = o);
                  let l = await this.getRelayerMessagesWithoutClientAck();
                  "u" > typeof l && (this.messagesWithoutClientAck = l),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (o) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(o);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            core_dist_index_es_k(this, "set", async (o, l, _) => {
              this.isInitialized();
              let f = kc(l),
                m = this.messages.get(o);
              if ((typeof m > "u" && (m = {}), "u" > typeof m[f])) return f;
              if (((m[f] = l), this.messages.set(o, m), _ === r4.inbound)) {
                let _ = this.messagesWithoutClientAck.get(o) || {};
                this.messagesWithoutClientAck.set(
                  o,
                  dist_index_es_jn(dist_index_es_kn({}, _), { [f]: l })
                );
              }
              return await this.persist(), f;
            }),
            core_dist_index_es_k(this, "get", (o) => {
              this.isInitialized();
              let l = this.messages.get(o);
              return typeof l > "u" && (l = {}), l;
            }),
            core_dist_index_es_k(this, "getWithoutAck", (o) => {
              this.isInitialized();
              let l = {};
              for (let _ of o) {
                let o = this.messagesWithoutClientAck.get(_) || {};
                l[_] = Object.values(o);
              }
              return l;
            }),
            core_dist_index_es_k(this, "has", (o, l) => {
              this.isInitialized();
              let _ = this.get(o),
                f = kc(l);
              return "u" > typeof _[f];
            }),
            core_dist_index_es_k(this, "ack", async (o, l) => {
              this.isInitialized();
              let _ = this.messagesWithoutClientAck.get(o);
              if (typeof _ > "u") return;
              let f = kc(l);
              delete _[f],
                0 === Object.keys(_).length
                  ? this.messagesWithoutClientAck.delete(o)
                  : this.messagesWithoutClientAck.set(o, _),
                await this.persist();
            }),
            core_dist_index_es_k(this, "del", async (o) => {
              this.isInitialized(),
                this.messages.delete(o),
                this.messagesWithoutClientAck.delete(o),
                await this.persist();
            }),
            (this.logger = dist_index_es_E(o, this.name)),
            (this.core = l);
        }
        get context() {
          return index_es_y(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get storageKeyWithoutClientAck() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name +
            "_withoutClientAck"
          );
        }
        async setRelayerMessages(o) {
          await this.core.storage.setItem(this.storageKey, fi(o));
        }
        async setRelayerMessagesWithoutClientAck(o) {
          await this.core.storage.setItem(
            this.storageKeyWithoutClientAck,
            fi(o)
          );
        }
        async getRelayerMessages() {
          let o = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof o ? li(o) : void 0;
        }
        async getRelayerMessagesWithoutClientAck() {
          let o = await this.core.storage.getItem(
            this.storageKeyWithoutClientAck
          );
          return "u" > typeof o ? li(o) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages),
            await this.setRelayerMessagesWithoutClientAck(
              this.messagesWithoutClientAck
            );
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: o } = index_es_ht("NOT_INITIALIZED", this.name);
            throw Error(o);
          }
        }
      };
      var or = Object.defineProperty,
        on = Object.defineProperties,
        oo = Object.getOwnPropertyDescriptors,
        oa = Object.getOwnPropertySymbols,
        oc = Object.prototype.hasOwnProperty,
        od = Object.prototype.propertyIsEnumerable,
        dist_index_es_qe = (o, l, _) =>
          l in o
            ? or(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        dist_index_es_Ie = (o, l) => {
          for (var _ in l || (l = {}))
            oc.call(l, _) && dist_index_es_qe(o, _, l[_]);
          if (oa)
            for (var _ of oa(l)) od.call(l, _) && dist_index_es_qe(o, _, l[_]);
          return o;
        },
        dist_index_es_Ge = (o, l) => on(o, oo(l)),
        dist_index_es_V = (o, l, _) =>
          dist_index_es_qe(o, "symbol" != typeof l ? l + "" : l, _);
      let dist_index_es_Vn = class dist_index_es_Vn extends dist_index_es_m {
        constructor(o, l) {
          super(o, l),
            (this.relayer = o),
            (this.logger = l),
            dist_index_es_V(this, "events", new G.EventEmitter()),
            dist_index_es_V(this, "name", "publisher"),
            dist_index_es_V(this, "queue", new Map()),
            dist_index_es_V(
              this,
              "publishTimeout",
              (0, en.toMiliseconds)(en.ONE_MINUTE)
            ),
            dist_index_es_V(
              this,
              "initialPublishTimeout",
              (0, en.toMiliseconds)(15 * en.ONE_SECOND)
            ),
            dist_index_es_V(this, "needsTransportRestart", !1),
            dist_index_es_V(this, "publish", async (o, l, _) => {
              var f;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: o, message: l, opts: _ },
                });
              let m = _?.ttl || r0,
                b = Zc(_),
                w = _?.prompt || !1,
                E = _?.tag || 0,
                D = _?.id || getBigIntRpcId().toString(),
                P = {
                  topic: o,
                  message: l,
                  opts: {
                    ttl: m,
                    relay: b,
                    prompt: w,
                    tag: E,
                    id: D,
                    attestation: _?.attestation,
                    tvf: _?.tvf,
                  },
                },
                C = `Failed to publish payload, please try again. id:${D} tag:${E}`;
              try {
                let f = new Promise(async (f) => {
                  let x = ({ id: o }) => {
                    P.opts.id === o &&
                      (this.removeRequestFromQueue(o),
                      this.relayer.events.removeListener(r2.publish, x),
                      f(P));
                  };
                  this.relayer.events.on(r2.publish, x);
                  let b = yi(
                    new Promise((f, b) => {
                      this.rpcPublish({
                        topic: o,
                        message: l,
                        ttl: m,
                        prompt: w,
                        tag: E,
                        id: D,
                        attestation: _?.attestation,
                        tvf: _?.tvf,
                      })
                        .then(f)
                        .catch((o) => {
                          this.logger.warn(o, o?.message), b(o);
                        });
                    }),
                    this.initialPublishTimeout,
                    `Failed initial publish, retrying.... id:${D} tag:${E}`
                  );
                  try {
                    await b, this.events.removeListener(r2.publish, x);
                  } catch (o) {
                    this.queue.set(
                      D,
                      dist_index_es_Ge(dist_index_es_Ie({}, P), { attempt: 1 })
                    ),
                      this.logger.warn(o, o?.message);
                  }
                });
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { id: D, topic: o, message: l, opts: _ },
                }),
                  await yi(f, this.publishTimeout, C);
              } catch (o) {
                if (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(o),
                  null != (f = _?.internal) && f.throwOnFailedPublish)
                )
                  throw o;
              } finally {
                this.queue.delete(D);
              }
            }),
            dist_index_es_V(this, "on", (o, l) => {
              this.events.on(o, l);
            }),
            dist_index_es_V(this, "once", (o, l) => {
              this.events.once(o, l);
            }),
            dist_index_es_V(this, "off", (o, l) => {
              this.events.off(o, l);
            }),
            dist_index_es_V(this, "removeListener", (o, l) => {
              this.events.removeListener(o, l);
            }),
            (this.relayer = o),
            (this.logger = dist_index_es_E(l, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return index_es_y(this.logger);
        }
        async rpcPublish(o) {
          var l, _, f, m;
          let {
              topic: b,
              message: w,
              ttl: E = r0,
              prompt: D,
              tag: P,
              id: C,
              attestation: A,
              tvf: R,
            } = o,
            j = {
              method: Yc(Zc().protocol).publish,
              params: dist_index_es_Ie(
                {
                  topic: b,
                  message: w,
                  ttl: E,
                  prompt: D,
                  tag: P,
                  attestation: A,
                },
                R
              ),
              id: C,
            };
          index_es_Et(null == (l = j.params) ? void 0 : l.prompt) &&
            (null == (_ = j.params) || delete _.prompt),
            index_es_Et(null == (f = j.params) ? void 0 : f.tag) &&
              (null == (m = j.params) || delete m.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: j,
            });
          let q = await this.relayer.request(j);
          return (
            this.relayer.events.emit(r2.publish, o),
            this.logger.debug("Successfully Published Payload"),
            q
          );
        }
        removeRequestFromQueue(o) {
          this.queue.delete(o);
        }
        checkQueue() {
          this.queue.forEach(async (o, l) => {
            let _ = o.attempt + 1;
            this.queue.set(
              l,
              dist_index_es_Ge(dist_index_es_Ie({}, o), { attempt: _ })
            );
            let { topic: f, message: m, opts: b, attestation: w } = o;
            this.logger.warn(
              {},
              `Publisher: queue->publishing: ${o.opts.id}, tag: ${o.opts.tag}, attempt: ${_}`
            ),
              await this.rpcPublish(
                dist_index_es_Ge(dist_index_es_Ie({}, o), {
                  topic: f,
                  message: m,
                  ttl: b.ttl,
                  prompt: b.prompt,
                  tag: b.tag,
                  id: b.id,
                  attestation: w,
                  tvf: b.tvf,
                })
              ),
              this.logger.warn({}, `Publisher: queue->published: ${o.opts.id}`);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(rv.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1),
                this.relayer.events.emit(r2.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(r2.message_ack, (o) => {
              this.removeRequestFromQueue(o.id.toString());
            });
        }
      };
      var ol = Object.defineProperty,
        dist_index_es_Gn = (o, l, _) =>
          l in o
            ? ol(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        index_es_re = (o, l, _) =>
          dist_index_es_Gn(o, "symbol" != typeof l ? l + "" : l, _);
      let dist_index_es_Wn = class dist_index_es_Wn {
        constructor() {
          index_es_re(this, "map", new Map()),
            index_es_re(this, "set", (o, l) => {
              let _ = this.get(o);
              this.exists(o, l) || this.map.set(o, [..._, l]);
            }),
            index_es_re(this, "get", (o) => this.map.get(o) || []),
            index_es_re(this, "exists", (o, l) => this.get(o).includes(l)),
            index_es_re(this, "delete", (o, l) => {
              if (typeof l > "u") {
                this.map.delete(o);
                return;
              }
              if (!this.map.has(o)) return;
              let _ = this.get(o);
              if (!this.exists(o, l)) return;
              let f = _.filter((o) => o !== l);
              if (!f.length) {
                this.map.delete(o);
                return;
              }
              this.map.set(o, f);
            }),
            index_es_re(this, "clear", () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      };
      var oh = Object.defineProperty,
        ou = Object.defineProperties,
        o_ = Object.getOwnPropertyDescriptors,
        op = Object.getOwnPropertySymbols,
        of = Object.prototype.hasOwnProperty,
        og = Object.prototype.propertyIsEnumerable,
        dist_index_es_We = (o, l, _) =>
          l in o
            ? oh(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        dist_index_es_ge = (o, l) => {
          for (var _ in l || (l = {}))
            of.call(l, _) && dist_index_es_We(o, _, l[_]);
          if (op)
            for (var _ of op(l)) og.call(l, _) && dist_index_es_We(o, _, l[_]);
          return o;
        },
        dist_index_es_He = (o, l) => ou(o, o_(l)),
        core_dist_index_es_f = (o, l, _) =>
          dist_index_es_We(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_Ti = class index_es_Ti extends dist_index_es_P {
        constructor(o, l) {
          super(o, l),
            (this.relayer = o),
            (this.logger = l),
            core_dist_index_es_f(this, "subscriptions", new Map()),
            core_dist_index_es_f(this, "topicMap", new dist_index_es_Wn()),
            core_dist_index_es_f(this, "events", new G.EventEmitter()),
            core_dist_index_es_f(this, "name", "subscription"),
            core_dist_index_es_f(this, "version", "0.3"),
            core_dist_index_es_f(this, "pending", new Map()),
            core_dist_index_es_f(this, "cached", []),
            core_dist_index_es_f(this, "initialized", !1),
            core_dist_index_es_f(this, "storagePrefix", rJ),
            core_dist_index_es_f(
              this,
              "subscribeTimeout",
              (0, en.toMiliseconds)(en.ONE_MINUTE)
            ),
            core_dist_index_es_f(
              this,
              "initialSubscribeTimeout",
              (0, en.toMiliseconds)(15 * en.ONE_SECOND)
            ),
            core_dist_index_es_f(this, "clientId"),
            core_dist_index_es_f(this, "batchSubscribeTopicsLimit", 500),
            core_dist_index_es_f(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                await this.restore()),
                (this.initialized = !0);
            }),
            core_dist_index_es_f(this, "subscribe", async (o, l) => {
              this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: o, opts: l },
                });
              try {
                let _ = Zc(l),
                  f = { topic: o, relay: _, transportType: l?.transportType };
                this.pending.set(o, f);
                let m = await this.rpcSubscribe(o, _, l);
                return (
                  "string" == typeof m &&
                    (this.onSubscribe(m, f),
                    this.logger.debug("Successfully Subscribed Topic"),
                    this.logger.trace({
                      type: "method",
                      method: "subscribe",
                      params: { topic: o, opts: l },
                    })),
                  m
                );
              } catch (o) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(o),
                  o)
                );
              }
            }),
            core_dist_index_es_f(this, "unsubscribe", async (o, l) => {
              this.isInitialized(),
                "u" > typeof l?.id
                  ? await this.unsubscribeById(o, l.id, l)
                  : await this.unsubscribeByTopic(o, l);
            }),
            core_dist_index_es_f(
              this,
              "isSubscribed",
              (o) =>
                new Promise((l) => {
                  l(this.topicMap.topics.includes(o));
                })
            ),
            core_dist_index_es_f(
              this,
              "isKnownTopic",
              (o) =>
                new Promise((l) => {
                  l(
                    this.topicMap.topics.includes(o) ||
                      this.pending.has(o) ||
                      this.cached.some((l) => l.topic === o)
                  );
                })
            ),
            core_dist_index_es_f(this, "on", (o, l) => {
              this.events.on(o, l);
            }),
            core_dist_index_es_f(this, "once", (o, l) => {
              this.events.once(o, l);
            }),
            core_dist_index_es_f(this, "off", (o, l) => {
              this.events.off(o, l);
            }),
            core_dist_index_es_f(this, "removeListener", (o, l) => {
              this.events.removeListener(o, l);
            }),
            core_dist_index_es_f(this, "start", async () => {
              await this.onConnect();
            }),
            core_dist_index_es_f(this, "stop", async () => {
              await this.onDisconnect();
            }),
            core_dist_index_es_f(this, "restart", async () => {
              await this.restore(), await this.onRestart();
            }),
            core_dist_index_es_f(this, "checkPending", async () => {
              if (
                0 === this.pending.size &&
                (!this.initialized || !this.relayer.connected)
              )
                return;
              let o = [];
              this.pending.forEach((l) => {
                o.push(l);
              }),
                await this.batchSubscribe(o);
            }),
            core_dist_index_es_f(this, "registerEventListeners", () => {
              this.relayer.core.heartbeat.on(rv.pulse, async () => {
                await this.checkPending();
              }),
                this.events.on(r9.created, async (o) => {
                  let l = r9.created;
                  this.logger.info(`Emitting ${l}`),
                    this.logger.debug({ type: "event", event: l, data: o }),
                    await this.persist();
                }),
                this.events.on(r9.deleted, async (o) => {
                  let l = r9.deleted;
                  this.logger.info(`Emitting ${l}`),
                    this.logger.debug({ type: "event", event: l, data: o }),
                    await this.persist();
                });
            }),
            (this.relayer = o),
            (this.logger = dist_index_es_E(l, this.name)),
            (this.clientId = "");
        }
        get context() {
          return index_es_y(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        get hasAnyTopics() {
          return (
            this.topicMap.topics.length > 0 ||
            this.pending.size > 0 ||
            this.cached.length > 0 ||
            this.subscriptions.size > 0
          );
        }
        hasSubscription(o, l) {
          let _ = !1;
          try {
            _ = this.getSubscription(o).topic === l;
          } catch {}
          return _;
        }
        reset() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(o, l) {
          let _ = this.topicMap.get(o);
          await Promise.all(
            _.map(async (_) => await this.unsubscribeById(o, _, l))
          );
        }
        async unsubscribeById(o, l, _) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: o, id: l, opts: _ },
            });
          try {
            let f = Zc(_);
            await this.restartToComplete({ topic: o, id: l, relay: f }),
              await this.rpcUnsubscribe(o, l, f);
            let m = index_es_Nt("USER_DISCONNECTED", `${this.name}, ${o}`);
            await this.onUnsubscribe(o, l, m),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: o, id: l, opts: _ },
              });
          } catch (o) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(o),
              o)
            );
          }
        }
        async rpcSubscribe(o, l, _) {
          var f;
          (_ && _?.transportType !== r5.relay) ||
            (await this.restartToComplete({ topic: o, id: o, relay: l }));
          let m = { method: Yc(l.protocol).subscribe, params: { topic: o } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: m,
            });
          let b = null == (f = _?.internal) ? void 0 : f.throwOnFailedPublish;
          try {
            let l = await this.getSubscriptionId(o);
            if (_?.transportType === r5.link_mode)
              return (
                setTimeout(() => {
                  (this.relayer.connected || this.relayer.connecting) &&
                    this.relayer.request(m).catch((o) => this.logger.warn(o));
                }, (0, en.toMiliseconds)(en.ONE_SECOND)),
                l
              );
            let f = new Promise(async (l) => {
                let d = (_) => {
                  _.topic === o &&
                    (this.events.removeListener(r9.created, d), l(_.id));
                };
                this.events.on(r9.created, d);
                try {
                  let _ = await yi(
                    new Promise((o, l) => {
                      this.relayer
                        .request(m)
                        .catch((o) => {
                          this.logger.warn(o, o?.message), l(o);
                        })
                        .then(o);
                    }),
                    this.initialSubscribeTimeout,
                    `Subscribing to ${o} failed, please try again`
                  );
                  this.events.removeListener(r9.created, d), l(_);
                } catch {}
              }),
              w = await yi(
                f,
                this.subscribeTimeout,
                `Subscribing to ${o} failed, please try again`
              );
            if (!w && b)
              throw Error(`Subscribing to ${o} failed, please try again`);
            return w ? l : null;
          } catch (o) {
            if (
              (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(r2.connection_stalled),
              b)
            )
              throw o;
          }
          return null;
        }
        async rpcBatchSubscribe(o) {
          if (!o.length) return;
          let l = o[0].relay,
            _ = {
              method: Yc(l.protocol).batchSubscribe,
              params: { topics: o.map((o) => o.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: _,
            });
          try {
            await await yi(
              new Promise((o) => {
                this.relayer
                  .request(_)
                  .catch((o) => this.logger.warn(o))
                  .then(o);
              }),
              this.subscribeTimeout,
              "rpcBatchSubscribe failed, please try again"
            );
          } catch {
            this.relayer.events.emit(r2.connection_stalled);
          }
        }
        async rpcBatchFetchMessages(o) {
          let l;
          if (!o.length) return;
          let _ = o[0].relay,
            f = {
              method: Yc(_.protocol).batchFetchMessages,
              params: { topics: o.map((o) => o.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: f,
            });
          try {
            l = await await yi(
              new Promise((o, l) => {
                this.relayer
                  .request(f)
                  .catch((o) => {
                    this.logger.warn(o), l(o);
                  })
                  .then(o);
              }),
              this.subscribeTimeout,
              "rpcBatchFetchMessages failed, please try again"
            );
          } catch {
            this.relayer.events.emit(r2.connection_stalled);
          }
          return l;
        }
        rpcUnsubscribe(o, l, _) {
          let f = {
            method: Yc(_.protocol).unsubscribe,
            params: { topic: o, id: l },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: f,
            }),
            this.relayer.request(f)
          );
        }
        onSubscribe(o, l) {
          this.setSubscription(
            o,
            dist_index_es_He(dist_index_es_ge({}, l), { id: o })
          ),
            this.pending.delete(l.topic);
        }
        onBatchSubscribe(o) {
          o.length &&
            o.forEach((o) => {
              this.setSubscription(o.id, dist_index_es_ge({}, o)),
                this.pending.delete(o.topic);
            });
        }
        async onUnsubscribe(o, l, _) {
          this.events.removeAllListeners(l),
            this.hasSubscription(l, o) && this.deleteSubscription(l, _),
            await this.relayer.messages.del(o);
        }
        async setRelayerSubscriptions(o) {
          await this.relayer.core.storage.setItem(this.storageKey, o);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(o, l) {
          this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: o,
              subscription: l,
            }),
            this.addSubscription(o, l);
        }
        addSubscription(o, l) {
          this.subscriptions.set(o, dist_index_es_ge({}, l)),
            this.topicMap.set(l.topic, o),
            this.events.emit(r9.created, l);
        }
        getSubscription(o) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: o,
            });
          let l = this.subscriptions.get(o);
          if (!l) {
            let { message: l } = index_es_ht(
              "NO_MATCHING_KEY",
              `${this.name}: ${o}`
            );
            throw Error(l);
          }
          return l;
        }
        deleteSubscription(o, l) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: o,
              reason: l,
            });
          let _ = this.getSubscription(o);
          this.subscriptions.delete(o),
            this.topicMap.delete(_.topic, o),
            this.events.emit(
              r9.deleted,
              dist_index_es_He(dist_index_es_ge({}, _), { reason: l })
            );
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit(r9.sync);
        }
        async onRestart() {
          if (this.cached.length) {
            let o = [...this.cached],
              l = Math.ceil(
                this.cached.length / this.batchSubscribeTopicsLimit
              );
            for (let _ = 0; _ < l; _++) {
              let l = o.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(l);
            }
          }
          this.events.emit(r9.resubscribed);
        }
        async restore() {
          try {
            let o = await this.getRelayerSubscriptions();
            if (typeof o > "u" || !o.length) return;
            if (this.subscriptions.size) {
              let { message: o } = index_es_ht(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (
                (this.logger.error(o),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                Error(o))
              );
            }
            (this.cached = o),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (o) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(o);
          }
        }
        async batchSubscribe(o) {
          o.length &&
            (await this.rpcBatchSubscribe(o),
            this.onBatchSubscribe(
              await Promise.all(
                o.map(async (o) =>
                  dist_index_es_He(dist_index_es_ge({}, o), {
                    id: await this.getSubscriptionId(o.topic),
                  })
                )
              )
            ));
        }
        async batchFetchMessages(o) {
          var l;
          if (!o.length) return;
          this.logger.trace(
            `Fetching batch messages for ${o.length} subscriptions`
          );
          let _ = await this.rpcBatchFetchMessages(o);
          _ &&
            _.messages &&
            (await ((l = (0, en.toMiliseconds)(en.ONE_SECOND)),
            new Promise((o) => setTimeout(o, l))),
            await this.relayer.handleBatchMessageEvents(_.messages));
        }
        async onConnect() {
          await this.restart(), this.reset();
        }
        onDisconnect() {
          this.onDisable();
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: o } = index_es_ht("NOT_INITIALIZED", this.name);
            throw Error(o);
          }
        }
        async restartToComplete(o) {
          this.relayer.connected ||
            this.relayer.connecting ||
            (this.cached.push(o), await this.relayer.transportOpen());
        }
        async getClientId() {
          return (
            this.clientId ||
              (this.clientId = await this.relayer.core.crypto.getClientId()),
            this.clientId
          );
        }
        async getSubscriptionId(o) {
          return kc(o + (await this.getClientId()));
        }
      };
      var oy = Object.defineProperty,
        om = Object.getOwnPropertySymbols,
        ov = Object.prototype.hasOwnProperty,
        ob = Object.prototype.propertyIsEnumerable,
        dist_index_es_Ye = (o, l, _) =>
          l in o
            ? oy(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        index_es_Pi = (o, l) => {
          for (var _ in l || (l = {}))
            ov.call(l, _) && dist_index_es_Ye(o, _, l[_]);
          if (om)
            for (var _ of om(l)) ob.call(l, _) && dist_index_es_Ye(o, _, l[_]);
          return o;
        },
        core_dist_index_es_y = (o, l, _) =>
          dist_index_es_Ye(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_Si = class index_es_Si extends dist_index_es_d {
        constructor(o) {
          super(o),
            core_dist_index_es_y(this, "protocol", "wc"),
            core_dist_index_es_y(this, "version", 2),
            core_dist_index_es_y(this, "core"),
            core_dist_index_es_y(this, "logger"),
            core_dist_index_es_y(this, "events", new G.EventEmitter()),
            core_dist_index_es_y(this, "provider"),
            core_dist_index_es_y(this, "messages"),
            core_dist_index_es_y(this, "subscriber"),
            core_dist_index_es_y(this, "publisher"),
            core_dist_index_es_y(this, "name", "relayer"),
            core_dist_index_es_y(this, "transportExplicitlyClosed", !1),
            core_dist_index_es_y(this, "initialized", !1),
            core_dist_index_es_y(this, "connectionAttemptInProgress", !1),
            core_dist_index_es_y(this, "relayUrl"),
            core_dist_index_es_y(this, "projectId"),
            core_dist_index_es_y(this, "packageName"),
            core_dist_index_es_y(this, "bundleId"),
            core_dist_index_es_y(this, "hasExperiencedNetworkDisruption", !1),
            core_dist_index_es_y(this, "pingTimeout"),
            core_dist_index_es_y(
              this,
              "heartBeatTimeout",
              (0, en.toMiliseconds)(en.THIRTY_SECONDS + en.FIVE_SECONDS)
            ),
            core_dist_index_es_y(this, "reconnectTimeout"),
            core_dist_index_es_y(this, "connectPromise"),
            core_dist_index_es_y(this, "reconnectInProgress", !1),
            core_dist_index_es_y(this, "requestsInFlight", []),
            core_dist_index_es_y(
              this,
              "connectTimeout",
              (0, en.toMiliseconds)(15 * en.ONE_SECOND)
            ),
            core_dist_index_es_y(this, "request", async (o) => {
              var l, _;
              this.logger.debug("Publishing Request Payload");
              let f = o.id || getBigIntRpcId().toString();
              await this.toEstablishConnection();
              try {
                this.logger.trace(
                  {
                    id: f,
                    method: o.method,
                    topic: null == (l = o.params) ? void 0 : l.topic,
                  },
                  "relayer.request - publishing..."
                );
                let m = `${f}:${
                  (null == (_ = o.params) ? void 0 : _.tag) || ""
                }`;
                this.requestsInFlight.push(m);
                let b = await this.provider.request(o);
                return (
                  (this.requestsInFlight = this.requestsInFlight.filter(
                    (o) => o !== m
                  )),
                  b
                );
              } catch (o) {
                throw (this.logger.debug(`Failed to Publish Request: ${f}`), o);
              }
            }),
            core_dist_index_es_y(this, "resetPingTimeout", () => {
              index_es_Re() &&
                (clearTimeout(this.pingTimeout),
                (this.pingTimeout = setTimeout(() => {
                  var o, l, _, f;
                  try {
                    this.logger.debug(
                      {},
                      "pingTimeout: Connection stalled, terminating..."
                    ),
                      null ==
                        (f =
                          null ==
                          (_ =
                            null ==
                            (l =
                              null == (o = this.provider)
                                ? void 0
                                : o.connection)
                              ? void 0
                              : l.socket)
                            ? void 0
                            : _.terminate) || f.call(_);
                  } catch (o) {
                    this.logger.warn(o, o?.message);
                  }
                }, this.heartBeatTimeout)));
            }),
            core_dist_index_es_y(this, "onPayloadHandler", (o) => {
              this.onProviderPayload(o), this.resetPingTimeout();
            }),
            core_dist_index_es_y(this, "onConnectHandler", () => {
              this.logger.warn({}, "Relayer connected \uD83D\uDEDC"),
                this.startPingTimeout(),
                this.events.emit(r2.connect);
            }),
            core_dist_index_es_y(this, "onDisconnectHandler", () => {
              this.logger.warn({}, "Relayer disconnected \uD83D\uDED1"),
                (this.requestsInFlight = []),
                this.onProviderDisconnect();
            }),
            core_dist_index_es_y(this, "onProviderErrorHandler", (o) => {
              this.logger.fatal(`Fatal socket error: ${o.message}`),
                this.events.emit(r2.error, o),
                this.logger.fatal(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            core_dist_index_es_y(this, "registerProviderListeners", () => {
              this.provider.on(r8.payload, this.onPayloadHandler),
                this.provider.on(r8.connect, this.onConnectHandler),
                this.provider.on(r8.disconnect, this.onDisconnectHandler),
                this.provider.on(r8.error, this.onProviderErrorHandler);
            }),
            (this.core = o.core),
            (this.logger =
              "u" > typeof o.logger && "string" != typeof o.logger
                ? dist_index_es_E(o.logger, this.name)
                : rO()(logger_dist_index_es_k({ level: o.logger || "error" }))),
            (this.messages = new core_dist_index_es_i(this.logger, o.core)),
            (this.subscriber = new index_es_Ti(this, this.logger)),
            (this.publisher = new dist_index_es_Vn(this, this.logger)),
            (this.relayUrl = o?.relayUrl || r1),
            (this.projectId = o.projectId),
            pt() &&
            "u" > typeof _.g &&
            "u" > typeof (null == _.g ? void 0 : _.g.Platform) &&
            (null == _.g ? void 0 : _.g.Platform.OS) === "android"
              ? (this.packageName = ri())
              : pt() &&
                "u" > typeof _.g &&
                "u" > typeof (null == _.g ? void 0 : _.g.Platform) &&
                (null == _.g ? void 0 : _.g.Platform.OS) === "ios" &&
                (this.bundleId = ri()),
            (this.provider = {});
        }
        async init() {
          if (
            (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await Promise.all([this.messages.init(), this.subscriber.init()]),
            (this.initialized = !0),
            this.subscriber.hasAnyTopics)
          )
            try {
              await this.transportOpen();
            } catch (o) {
              this.logger.warn(o, o?.message);
            }
        }
        get context() {
          return index_es_y(this.logger);
        }
        get connected() {
          var o, l, _;
          return (
            (null ==
            (_ =
              null == (l = null == (o = this.provider) ? void 0 : o.connection)
                ? void 0
                : l.socket)
              ? void 0
              : _.readyState) === 1
          );
        }
        get connecting() {
          var o, l, _;
          return (
            (null ==
            (_ =
              null == (l = null == (o = this.provider) ? void 0 : o.connection)
                ? void 0
                : l.socket)
              ? void 0
              : _.readyState) === 0 || void 0 !== this.connectPromise
          );
        }
        async publish(o, l, _) {
          this.isInitialized(),
            await this.publisher.publish(o, l, _),
            await this.recordMessageEvent(
              {
                topic: o,
                message: l,
                publishedAt: Date.now(),
                transportType: r5.relay,
              },
              r4.outbound
            );
        }
        async subscribe(o, l) {
          var _, f, m;
          this.isInitialized(),
            (null != l && l.transportType && l?.transportType !== "relay") ||
              (await this.toEstablishConnection());
          let b =
              typeof (null == (_ = l?.internal)
                ? void 0
                : _.throwOnFailedPublish) > "u" ||
              (null == (f = l?.internal) ? void 0 : f.throwOnFailedPublish),
            w =
              (null == (m = this.subscriber.topicMap.get(o)) ? void 0 : m[0]) ||
              "",
            E,
            h = (l) => {
              l.topic === o && (this.subscriber.off(r9.created, h), E());
            };
          return (
            await Promise.all([
              new Promise((o) => {
                (E = o), this.subscriber.on(r9.created, h);
              }),
              new Promise(async (_, f) => {
                (w =
                  (await this.subscriber
                    .subscribe(
                      o,
                      index_es_Pi({ internal: { throwOnFailedPublish: b } }, l)
                    )
                    .catch((o) => {
                      b && f(o);
                    })) || w),
                  _();
              }),
            ]),
            w
          );
        }
        async unsubscribe(o, l) {
          this.isInitialized(), await this.subscriber.unsubscribe(o, l);
        }
        on(o, l) {
          this.events.on(o, l);
        }
        once(o, l) {
          this.events.once(o, l);
        }
        off(o, l) {
          this.events.off(o, l);
        }
        removeListener(o, l) {
          this.events.removeListener(o, l);
        }
        async transportDisconnect() {
          this.provider.disconnect &&
          (this.hasExperiencedNetworkDisruption || this.connected)
            ? await yi(
                this.provider.disconnect(),
                2e3,
                "provider.disconnect()"
              ).catch(() => this.onProviderDisconnect())
            : this.onProviderDisconnect();
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            await this.transportDisconnect();
        }
        async transportOpen(o) {
          if (!this.subscriber.hasAnyTopics) {
            this.logger.warn(
              "Starting WS connection skipped because the client has no topics to work with."
            );
            return;
          }
          if (
            (this.connectPromise
              ? (this.logger.debug(
                  {},
                  "Waiting for existing connection attempt to resolve..."
                ),
                await this.connectPromise,
                this.logger.debug({}, "Existing connection attempt resolved"))
              : ((this.connectPromise = new Promise(async (l, _) => {
                  await this.connect(o)
                    .then(l)
                    .catch(_)
                    .finally(() => {
                      this.connectPromise = void 0;
                    });
                })),
                await this.connectPromise),
            !this.connected)
          )
            throw Error(
              `Couldn't establish socket connection to the relay server: ${this.relayUrl}`
            );
        }
        async restartTransport(o) {
          this.logger.debug({}, "Restarting transport..."),
            this.connectionAttemptInProgress ||
              ((this.relayUrl = o || this.relayUrl),
              await this.confirmOnlineStateOrThrow(),
              await this.transportClose(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await Ia()))
            throw Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        async handleBatchMessageEvents(o) {
          if (o?.length === 0) {
            this.logger.trace("Batch message events is empty. Ignoring...");
            return;
          }
          let l = o.sort((o, l) => o.publishedAt - l.publishedAt);
          for (let o of (this.logger.debug(
            `Batch of ${l.length} message events sorted`
          ),
          l))
            try {
              await this.onMessageEvent(o);
            } catch (o) {
              this.logger.warn(
                o,
                "Error while processing batch message event: " + o?.message
              );
            }
          this.logger.trace(`Batch of ${l.length} message events processed`);
        }
        async onLinkMessageEvent(o, l) {
          let { topic: _ } = o;
          if (!l.sessionExists) {
            let o = Ei(en.FIVE_MINUTES);
            await this.core.pairing.pairings.set(_, {
              topic: _,
              expiry: o,
              relay: { protocol: "irn" },
              active: !1,
            });
          }
          this.events.emit(r2.message, o),
            await this.recordMessageEvent(o, r4.inbound);
        }
        async connect(o) {
          await this.confirmOnlineStateOrThrow(),
            o &&
              o !== this.relayUrl &&
              ((this.relayUrl = o), await this.transportDisconnect()),
            (this.connectionAttemptInProgress = !0),
            (this.transportExplicitlyClosed = !1);
          let l = 1;
          for (; l < 6; ) {
            try {
              if (this.transportExplicitlyClosed) break;
              this.logger.debug(
                {},
                `Connecting to ${this.relayUrl}, attempt: ${l}...`
              ),
                await this.createProvider(),
                await new Promise(async (o, l) => {
                  let n = () => {
                    l(
                      Error("Connection interrupted while trying to subscribe")
                    );
                  };
                  this.provider.once(r8.disconnect, n),
                    await yi(
                      new Promise((o, l) => {
                        this.provider.connect().then(o).catch(l);
                      }),
                      this.connectTimeout,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    )
                      .catch((o) => {
                        l(o);
                      })
                      .finally(() => {
                        this.provider.off(r8.disconnect, n),
                          clearTimeout(this.reconnectTimeout);
                      }),
                    await new Promise(async (o, l) => {
                      let c = () => {
                        l(
                          Error(
                            "Connection interrupted while trying to subscribe"
                          )
                        );
                      };
                      this.provider.once(r8.disconnect, c),
                        await this.subscriber
                          .start()
                          .then(o)
                          .catch(l)
                          .finally(() => {
                            this.provider.off(r8.disconnect, c);
                          });
                    }),
                    (this.hasExperiencedNetworkDisruption = !1),
                    o();
                });
            } catch (o) {
              await this.subscriber.stop(),
                this.logger.warn({}, o.message),
                (this.hasExperiencedNetworkDisruption = !0);
            } finally {
              this.connectionAttemptInProgress = !1;
            }
            if (this.connected) {
              this.logger.debug(
                {},
                `Connected to ${this.relayUrl} successfully on attempt: ${l}`
              );
              break;
            }
            await new Promise((o) =>
              setTimeout(o, (0, en.toMiliseconds)(1 * l))
            ),
              l++;
          }
        }
        startPingTimeout() {
          var o, l, _, f, m;
          if (index_es_Re())
            try {
              null !=
                (l = null == (o = this.provider) ? void 0 : o.connection) &&
                l.socket &&
                (null ==
                  (m =
                    null ==
                    (f = null == (_ = this.provider) ? void 0 : _.connection)
                      ? void 0
                      : f.socket) ||
                  m.on("ping", () => {
                    this.resetPingTimeout();
                  })),
                this.resetPingTimeout();
            } catch (o) {
              this.logger.warn(o, o?.message);
            }
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          let o = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new jsonrpc_provider_dist_index_es_o(
            new jsonrpc_ws_connection_dist_index_es_f(
              (function ({
                protocol: o,
                version: l,
                relayUrl: _,
                sdkVersion: f,
                auth: m,
                projectId: b,
                useOnCloseEvent: w,
                bundleId: E,
                packageName: D,
              }) {
                let P = _.split("?"),
                  C = index_es_Mn(o, l, f),
                  A = (function (o, l) {
                    let _ = new URLSearchParams(o);
                    for (let o of Object.keys(l).sort())
                      if (l.hasOwnProperty(o)) {
                        let f = l[o];
                        void 0 !== f && _.set(o, f);
                      }
                    return _.toString();
                  })(P[1] || "", {
                    auth: m,
                    ua: C,
                    projectId: b,
                    useOnCloseEvent: w || void 0,
                    packageName: D || void 0,
                    bundleId: E || void 0,
                  });
                return P[0] + "?" + A;
              })({
                sdkVersion: r3,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: o,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
                packageName: this.packageName,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(o, l) {
          let { topic: _, message: f } = o;
          await this.messages.set(_, f, l);
        }
        async shouldIgnoreMessageEvent(o) {
          let { topic: l, message: _ } = o;
          if (!_ || 0 === _.length)
            return this.logger.warn(`Ignoring invalid/empty message: ${_}`), !0;
          if (!(await this.subscriber.isKnownTopic(l)))
            return (
              this.logger.warn(`Ignoring message for unknown topic ${l}`), !0
            );
          let f = this.messages.has(l, _);
          return f && this.logger.warn(`Ignoring duplicate message: ${_}`), f;
        }
        async onProviderPayload(o) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: o,
            }),
            isJsonRpcRequest(o))
          ) {
            if (!o.method.endsWith("_subscription")) return;
            let l = o.params,
              { topic: _, message: f, publishedAt: m, attestation: b } = l.data,
              w = {
                topic: _,
                message: f,
                publishedAt: m,
                transportType: r5.relay,
                attestation: b,
              };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(index_es_Pi({ type: "event", event: l.id }, w)),
              this.events.emit(l.id, w),
              await this.acknowledgePayload(o),
              await this.onMessageEvent(w);
          } else isJsonRpcResponse(o) && this.events.emit(r2.message_ack, o);
        }
        async onMessageEvent(o) {
          (await this.shouldIgnoreMessageEvent(o)) ||
            (await this.recordMessageEvent(o, r4.inbound),
            this.events.emit(r2.message, o));
        }
        async acknowledgePayload(o) {
          let l = formatJsonRpcResult(o.id, !0);
          await this.provider.connection.send(l);
        }
        unregisterProviderListeners() {
          this.provider.off(r8.payload, this.onPayloadHandler),
            this.provider.off(r8.connect, this.onConnectHandler),
            this.provider.off(r8.disconnect, this.onDisconnectHandler),
            this.provider.off(r8.error, this.onProviderErrorHandler),
            clearTimeout(this.pingTimeout);
        }
        async registerEventListeners() {
          let o = await Ia();
          !(function (o) {
            switch (index_es_xt()) {
              case i2.browser:
                !pt() &&
                  index_es_Yt() &&
                  (window.addEventListener("online", () => o(!0)),
                  window.addEventListener("offline", () => o(!1)));
                break;
              case i2.reactNative:
                pt() &&
                  "u" > typeof _.g &&
                  null != _.g &&
                  _.g.NetInfo &&
                  _.g?.NetInfo.addEventListener((l) => o(l?.isConnected));
              case i2.node:
            }
          })(async (l) => {
            o !== l &&
              ((o = l),
              l
                ? await this.transportOpen().catch((o) =>
                    this.logger.error(o, o?.message)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          });
        }
        async onProviderDisconnect() {
          clearTimeout(this.pingTimeout),
            this.events.emit(r2.disconnect),
            (this.connectionAttemptInProgress = !1),
            !this.reconnectInProgress &&
              ((this.reconnectInProgress = !0),
              await this.subscriber.stop(),
              this.subscriber.hasAnyTopics &&
                (this.transportExplicitlyClosed ||
                  (this.reconnectTimeout = setTimeout(async () => {
                    await this.transportOpen().catch((o) =>
                      this.logger.error(o, o?.message)
                    ),
                      (this.reconnectTimeout = void 0),
                      (this.reconnectInProgress = !1);
                  }, (0, en.toMiliseconds)(0.1)))));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: o } = index_es_ht("NOT_INITIALIZED", this.name);
            throw Error(o);
          }
        }
        async toEstablishConnection() {
          await this.confirmOnlineStateOrThrow(),
            this.connected || (await this.connect());
        }
      };
      function dist_index_es_io() {}
      function index_es_Ri(o) {
        if (!o || "object" != typeof o) return !1;
        let l = Object.getPrototypeOf(o);
        return (
          (null === l ||
            l === Object.prototype ||
            null === Object.getPrototypeOf(l)) &&
          "[object Object]" === Object.prototype.toString.call(o)
        );
      }
      function index_es_Oi(o) {
        return Object.getOwnPropertySymbols(o).filter((l) =>
          Object.prototype.propertyIsEnumerable.call(o, l)
        );
      }
      function index_es_Ai(o) {
        return null == o
          ? void 0 === o
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(o);
      }
      let ox = "[object Arguments]",
        ow = "[object Object]";
      var oE = Object.defineProperty,
        oI = Object.getOwnPropertySymbols,
        oS = Object.prototype.hasOwnProperty,
        oD = Object.prototype.propertyIsEnumerable,
        dist_index_es_Xe = (o, l, _) =>
          l in o
            ? oE(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        index_es_$i = (o, l) => {
          for (var _ in l || (l = {}))
            oS.call(l, _) && dist_index_es_Xe(o, _, l[_]);
          if (oI)
            for (var _ of oI(l)) oD.call(l, _) && dist_index_es_Xe(o, _, l[_]);
          return o;
        },
        dist_index_es_z = (o, l, _) =>
          dist_index_es_Xe(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_zi = class index_es_zi extends dist_index_es_f {
        constructor(o, l, _, f = rJ, m) {
          super(o, l, _, f),
            (this.core = o),
            (this.logger = l),
            (this.name = _),
            dist_index_es_z(this, "map", new Map()),
            dist_index_es_z(this, "version", "0.3"),
            dist_index_es_z(this, "cached", []),
            dist_index_es_z(this, "initialized", !1),
            dist_index_es_z(this, "getKey"),
            dist_index_es_z(this, "storagePrefix", rJ),
            dist_index_es_z(this, "recentlyDeleted", []),
            dist_index_es_z(this, "recentlyDeletedLimit", 200),
            dist_index_es_z(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((o) => {
                  var l;
                  this.getKey && null !== o && !index_es_Et(o)
                    ? this.map.set(this.getKey(o), o)
                    : (null == (l = o?.proposer) ? void 0 : l.publicKey)
                    ? this.map.set(o.id, o)
                    : o?.topic && this.map.set(o.topic, o);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            dist_index_es_z(this, "set", async (o, l) => {
              this.isInitialized(),
                this.map.has(o)
                  ? await this.update(o, l)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: o,
                      value: l,
                    }),
                    this.map.set(o, l),
                    await this.persist());
            }),
            dist_index_es_z(
              this,
              "get",
              (o) => (
                this.isInitialized(),
                this.logger.debug("Getting value"),
                this.logger.trace({ type: "method", method: "get", key: o }),
                this.getData(o)
              )
            ),
            dist_index_es_z(
              this,
              "getAll",
              (o) => (
                this.isInitialized(),
                o
                  ? this.values.filter((l) =>
                      Object.keys(o).every((_) =>
                        (function dist_index_es_pe(o, l, _, f, m, b, w) {
                          let E = w(o, l, _, f, m, b);
                          if (void 0 !== E) return E;
                          if (typeof o == typeof l)
                            switch (typeof o) {
                              case "bigint":
                              case "string":
                              case "boolean":
                              case "symbol":
                              case "undefined":
                              case "function":
                                return o === l;
                              case "number":
                                return o === l || Object.is(o, l);
                            }
                          return (function dist_index_es_ye(o, l, _, f) {
                            if (Object.is(o, l)) return !0;
                            let m = index_es_Ai(o),
                              b = index_es_Ai(l);
                            if (
                              (m === ox && (m = ow),
                              b === ox && (b = ow),
                              m !== b)
                            )
                              return !1;
                            switch (m) {
                              case "[object String]":
                                return o.toString() === l.toString();
                              case "[object Number]": {
                                let _ = o.valueOf(),
                                  f = l.valueOf();
                                return (
                                  _ === f ||
                                  (Number.isNaN(_) && Number.isNaN(f))
                                );
                              }
                              case "[object Boolean]":
                              case "[object Date]":
                              case "[object Symbol]":
                                return Object.is(o.valueOf(), l.valueOf());
                              case "[object RegExp]":
                                return (
                                  o.source === l.source && o.flags === l.flags
                                );
                              case "[object Function]":
                                return o === l;
                            }
                            _ = _ ?? new Map();
                            let w = _.get(o),
                              E = _.get(l);
                            if (null != w && null != E) return w === l;
                            _.set(o, l), _.set(l, o);
                            try {
                              switch (m) {
                                case "[object Map]":
                                  if (o.size !== l.size) return !1;
                                  for (let [m, b] of o.entries())
                                    if (
                                      !l.has(m) ||
                                      !dist_index_es_pe(
                                        b,
                                        l.get(m),
                                        m,
                                        o,
                                        l,
                                        _,
                                        f
                                      )
                                    )
                                      return !1;
                                  return !0;
                                case "[object Set]": {
                                  if (o.size !== l.size) return !1;
                                  let m = Array.from(o.values()),
                                    b = Array.from(l.values());
                                  for (let w = 0; w < m.length; w++) {
                                    let E = m[w],
                                      D = b.findIndex((m) =>
                                        dist_index_es_pe(
                                          E,
                                          m,
                                          void 0,
                                          o,
                                          l,
                                          _,
                                          f
                                        )
                                      );
                                    if (-1 === D) return !1;
                                    b.splice(D, 1);
                                  }
                                  return !0;
                                }
                                case "[object Array]":
                                case "[object Uint8Array]":
                                case "[object Uint8ClampedArray]":
                                case "[object Uint16Array]":
                                case "[object Uint32Array]":
                                case "[object BigUint64Array]":
                                case "[object Int8Array]":
                                case "[object Int16Array]":
                                case "[object Int32Array]":
                                case "[object BigInt64Array]":
                                case "[object Float32Array]":
                                case "[object Float64Array]":
                                  if (
                                    ("u" > typeof rK &&
                                      rK.isBuffer(o) !== rK.isBuffer(l)) ||
                                    o.length !== l.length
                                  )
                                    return !1;
                                  for (let m = 0; m < o.length; m++)
                                    if (
                                      !dist_index_es_pe(
                                        o[m],
                                        l[m],
                                        m,
                                        o,
                                        l,
                                        _,
                                        f
                                      )
                                    )
                                      return !1;
                                  return !0;
                                case "[object ArrayBuffer]":
                                  return (
                                    o.byteLength === l.byteLength &&
                                    dist_index_es_ye(
                                      new Uint8Array(o),
                                      new Uint8Array(l),
                                      _,
                                      f
                                    )
                                  );
                                case "[object DataView]":
                                  return (
                                    o.byteLength === l.byteLength &&
                                    o.byteOffset === l.byteOffset &&
                                    dist_index_es_ye(
                                      new Uint8Array(o),
                                      new Uint8Array(l),
                                      _,
                                      f
                                    )
                                  );
                                case "[object Error]":
                                  return (
                                    o.name === l.name && o.message === l.message
                                  );
                                case ow: {
                                  if (
                                    !(
                                      dist_index_es_ye(
                                        o.constructor,
                                        l.constructor,
                                        _,
                                        f
                                      ) ||
                                      (index_es_Ri(o) && index_es_Ri(l))
                                    )
                                  )
                                    return !1;
                                  let m = [
                                      ...Object.keys(o),
                                      ...index_es_Oi(o),
                                    ],
                                    b = [...Object.keys(l), ...index_es_Oi(l)];
                                  if (m.length !== b.length) return !1;
                                  for (let b = 0; b < m.length; b++) {
                                    let w = m[b],
                                      E = o[w];
                                    if (!Object.hasOwn(l, w)) return !1;
                                    let D = l[w];
                                    if (!dist_index_es_pe(E, D, w, o, l, _, f))
                                      return !1;
                                  }
                                  return !0;
                                }
                                default:
                                  return !1;
                              }
                            } finally {
                              _.delete(o), _.delete(l);
                            }
                          })(o, l, b, w);
                        })(
                          l[_],
                          o[_],
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          dist_index_es_io
                        )
                      )
                    )
                  : this.values
              )
            ),
            dist_index_es_z(this, "update", async (o, l) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: o,
                  update: l,
                });
              let _ = index_es_$i(index_es_$i({}, this.getData(o)), l);
              this.map.set(o, _), await this.persist();
            }),
            dist_index_es_z(this, "delete", async (o, l) => {
              this.isInitialized(),
                this.map.has(o) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: o,
                    reason: l,
                  }),
                  this.map.delete(o),
                  this.addToRecentlyDeleted(o),
                  await this.persist());
            }),
            (this.logger = dist_index_es_E(l, this.name)),
            (this.storagePrefix = f),
            (this.getKey = m);
        }
        get context() {
          return index_es_y(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        addToRecentlyDeleted(o) {
          this.recentlyDeleted.push(o),
            this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
              this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
        }
        async setDataStore(o) {
          await this.core.storage.setItem(this.storageKey, o);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(o) {
          let l = this.map.get(o);
          if (!l) {
            if (this.recentlyDeleted.includes(o)) {
              let { message: l } = index_es_ht(
                "MISSING_OR_INVALID",
                `Record was recently deleted - ${this.name}: ${o}`
              );
              throw (this.logger.error(l), Error(l));
            }
            let { message: l } = index_es_ht(
              "NO_MATCHING_KEY",
              `${this.name}: ${o}`
            );
            throw (this.logger.error(l), Error(l));
          }
          return l;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let o = await this.getDataStore();
            if (typeof o > "u" || !o.length) return;
            if (this.map.size) {
              let { message: o } = index_es_ht(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(o), Error(o));
            }
            (this.cached = o),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (o) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(o);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: o } = index_es_ht("NOT_INITIALIZED", this.name);
            throw Error(o);
          }
        }
      };
      var oP = Object.defineProperty,
        dist_index_es_zo = (o, l, _) =>
          l in o
            ? oP(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        core_dist_index_es_p = (o, l, _) =>
          dist_index_es_zo(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_Li = class index_es_Li {
        constructor(o, l) {
          (this.core = o),
            (this.logger = l),
            core_dist_index_es_p(this, "name", "pairing"),
            core_dist_index_es_p(this, "version", "0.3"),
            core_dist_index_es_p(this, "events", new (Y())()),
            core_dist_index_es_p(this, "pairings"),
            core_dist_index_es_p(this, "initialized", !1),
            core_dist_index_es_p(this, "storagePrefix", rJ),
            core_dist_index_es_p(this, "ignoredPayloadTypes", [1]),
            core_dist_index_es_p(this, "registeredMethods", []),
            core_dist_index_es_p(this, "init", async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            core_dist_index_es_p(this, "register", ({ methods: o }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...o]),
                ]);
            }),
            core_dist_index_es_p(this, "create", async (o) => {
              this.isInitialized();
              let l = jc(),
                _ = await this.core.crypto.setSymKey(l),
                f = Ei(en.FIVE_MINUTES),
                m = { protocol: "irn" },
                b = {
                  topic: _,
                  expiry: f,
                  relay: m,
                  active: !1,
                  methods: o?.methods,
                },
                w = Wc({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: _,
                  symKey: l,
                  relay: m,
                  expiryTimestamp: f,
                  methods: o?.methods,
                });
              return (
                this.events.emit(ne.create, b),
                this.core.expirer.set(_, f),
                await this.pairings.set(_, b),
                await this.core.relayer.subscribe(_, {
                  transportType: o?.transportType,
                }),
                { topic: _, uri: w }
              );
            }),
            core_dist_index_es_p(this, "pair", async (o) => {
              let l;
              this.isInitialized();
              let _ = this.core.eventClient.createEvent({
                properties: { topic: o?.uri, trace: [no.pairing_started] },
              });
              this.isValidPair(o, _);
              let {
                topic: f,
                symKey: m,
                relay: b,
                expiryTimestamp: w,
                methods: E,
              } = Gc(o.uri);
              if (
                ((_.props.properties.topic = f),
                _.addTrace(no.pairing_uri_validation_success),
                _.addTrace(no.pairing_uri_not_expired),
                this.pairings.keys.includes(f))
              ) {
                if (
                  ((l = this.pairings.get(f)),
                  _.addTrace(no.existing_pairing),
                  l.active)
                )
                  throw (
                    (_.setError(na.active_pairing_already_exists),
                    Error(
                      `Pairing already exists: ${f}. Please try again with a new connection URI.`
                    ))
                  );
                _.addTrace(no.pairing_not_expired);
              }
              let D = w || Ei(en.FIVE_MINUTES),
                P = { topic: f, relay: b, expiry: D, active: !1, methods: E };
              this.core.expirer.set(f, D),
                await this.pairings.set(f, P),
                _.addTrace(no.store_new_pairing),
                o.activatePairing && (await this.activate({ topic: f })),
                this.events.emit(ne.create, P),
                _.addTrace(no.emit_inactive_pairing),
                this.core.crypto.keychain.has(f) ||
                  (await this.core.crypto.setSymKey(m, f)),
                _.addTrace(no.subscribing_pairing_topic);
              try {
                await this.core.relayer.confirmOnlineStateOrThrow();
              } catch {
                _.setError(na.no_internet_connection);
              }
              try {
                await this.core.relayer.subscribe(f, { relay: b });
              } catch (o) {
                throw (_.setError(na.subscribe_pairing_topic_failure), o);
              }
              return _.addTrace(no.subscribe_pairing_topic_success), P;
            }),
            core_dist_index_es_p(this, "activate", async ({ topic: o }) => {
              this.isInitialized();
              let l = Ei(en.FIVE_MINUTES);
              this.core.expirer.set(o, l),
                await this.pairings.update(o, { active: !0, expiry: l });
            }),
            core_dist_index_es_p(this, "ping", async (o) => {
              this.isInitialized(),
                await this.isValidPing(o),
                this.logger.warn(
                  "ping() is deprecated and will be removed in the next major release."
                );
              let { topic: l } = o;
              if (this.pairings.keys.includes(l)) {
                let o = await this.sendRequest(l, "wc_pairingPing", {}),
                  { done: _, resolve: f, reject: m } = gi();
                this.events.once(xi("pairing_ping", o), ({ error: o }) => {
                  o ? m(o) : f();
                }),
                  await _();
              }
            }),
            core_dist_index_es_p(
              this,
              "updateExpiry",
              async ({ topic: o, expiry: l }) => {
                this.isInitialized(),
                  await this.pairings.update(o, { expiry: l });
              }
            ),
            core_dist_index_es_p(
              this,
              "updateMetadata",
              async ({ topic: o, metadata: l }) => {
                this.isInitialized(),
                  await this.pairings.update(o, { peerMetadata: l });
              }
            ),
            core_dist_index_es_p(
              this,
              "getPairings",
              () => (this.isInitialized(), this.pairings.values)
            ),
            core_dist_index_es_p(this, "disconnect", async (o) => {
              this.isInitialized(), await this.isValidDisconnect(o);
              let { topic: l } = o;
              this.pairings.keys.includes(l) &&
                (await this.sendRequest(
                  l,
                  "wc_pairingDelete",
                  index_es_Nt("USER_DISCONNECTED")
                ),
                await this.deletePairing(l));
            }),
            core_dist_index_es_p(this, "formatUriFromPairing", (o) => {
              this.isInitialized();
              let { topic: l, relay: _, expiry: f, methods: m } = o,
                b = this.core.crypto.keychain.get(l);
              return Wc({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: l,
                symKey: b,
                relay: _,
                expiryTimestamp: f,
                methods: m,
              });
            }),
            core_dist_index_es_p(this, "sendRequest", async (o, l, _) => {
              let f = formatJsonRpcRequest(l, _),
                m = await this.core.crypto.encode(o, f),
                b = r7[l].req;
              return (
                this.core.history.set(o, f),
                this.core.relayer.publish(o, m, b),
                f.id
              );
            }),
            core_dist_index_es_p(this, "sendResult", async (o, l, _) => {
              let f = formatJsonRpcResult(o, _),
                m = await this.core.crypto.encode(l, f),
                b = (await this.core.history.get(l, o)).request.method,
                w = r7[b].res;
              await this.core.relayer.publish(l, m, w),
                await this.core.history.resolve(f);
            }),
            core_dist_index_es_p(this, "sendError", async (o, l, _) => {
              let f = formatJsonRpcError(o, _),
                m = await this.core.crypto.encode(l, f),
                b = (await this.core.history.get(l, o)).request.method,
                w = r7[b] ? r7[b].res : r7.unregistered_method.res;
              await this.core.relayer.publish(l, m, w),
                await this.core.history.resolve(f);
            }),
            core_dist_index_es_p(this, "deletePairing", async (o, l) => {
              await this.core.relayer.unsubscribe(o),
                await Promise.all([
                  this.pairings.delete(o, index_es_Nt("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(o),
                  l ? Promise.resolve() : this.core.expirer.del(o),
                ]);
            }),
            core_dist_index_es_p(this, "cleanup", async () => {
              let o = this.pairings.getAll().filter((o) => vi(o.expiry));
              await Promise.all(o.map((o) => this.deletePairing(o.topic)));
            }),
            core_dist_index_es_p(this, "onRelayEventRequest", async (o) => {
              let { topic: l, payload: _ } = o;
              switch (_.method) {
                case "wc_pairingPing":
                  return await this.onPairingPingRequest(l, _);
                case "wc_pairingDelete":
                  return await this.onPairingDeleteRequest(l, _);
                default:
                  return await this.onUnknownRpcMethodRequest(l, _);
              }
            }),
            core_dist_index_es_p(this, "onRelayEventResponse", async (o) => {
              let { topic: l, payload: _ } = o,
                f = (await this.core.history.get(l, _.id)).request.method;
              return "wc_pairingPing" === f
                ? this.onPairingPingResponse(l, _)
                : this.onUnknownRpcMethodResponse(f);
            }),
            core_dist_index_es_p(this, "onPairingPingRequest", async (o, l) => {
              let { id: _ } = l;
              try {
                this.isValidPing({ topic: o }),
                  await this.sendResult(_, o, !0),
                  this.events.emit(ne.ping, { id: _, topic: o });
              } catch (l) {
                await this.sendError(_, o, l), this.logger.error(l);
              }
            }),
            core_dist_index_es_p(this, "onPairingPingResponse", (o, l) => {
              let { id: _ } = l;
              setTimeout(() => {
                isJsonRpcResult(l)
                  ? this.events.emit(xi("pairing_ping", _), {})
                  : isJsonRpcError(l) &&
                    this.events.emit(xi("pairing_ping", _), { error: l.error });
              }, 500);
            }),
            core_dist_index_es_p(
              this,
              "onPairingDeleteRequest",
              async (o, l) => {
                let { id: _ } = l;
                try {
                  this.isValidDisconnect({ topic: o }),
                    await this.deletePairing(o),
                    this.events.emit(ne.delete, { id: _, topic: o });
                } catch (l) {
                  await this.sendError(_, o, l), this.logger.error(l);
                }
              }
            ),
            core_dist_index_es_p(
              this,
              "onUnknownRpcMethodRequest",
              async (o, l) => {
                let { id: _, method: f } = l;
                try {
                  if (this.registeredMethods.includes(f)) return;
                  let l = index_es_Nt("WC_METHOD_UNSUPPORTED", f);
                  await this.sendError(_, o, l), this.logger.error(l);
                } catch (l) {
                  await this.sendError(_, o, l), this.logger.error(l);
                }
              }
            ),
            core_dist_index_es_p(this, "onUnknownRpcMethodResponse", (o) => {
              this.registeredMethods.includes(o) ||
                this.logger.error(index_es_Nt("WC_METHOD_UNSUPPORTED", o));
            }),
            core_dist_index_es_p(this, "isValidPair", (o, l) => {
              var _;
              if (!ya(o)) {
                let { message: _ } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `pair() params: ${o}`
                );
                throw (l.setError(na.malformed_pairing_uri), Error(_));
              }
              if (
                !(function (o) {
                  function e(o) {
                    try {
                      return "u" > typeof new URL(o);
                    } catch {
                      return !1;
                    }
                  }
                  try {
                    if (index_es_nt(o, !1)) {
                      if (e(o)) return !0;
                      let l = index_es_Le(o);
                      return e(l);
                    }
                  } catch {}
                  return !1;
                })(o.uri)
              ) {
                let { message: _ } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${o.uri}`
                );
                throw (l.setError(na.malformed_pairing_uri), Error(_));
              }
              let f = Gc(o?.uri);
              if (!(null != (_ = f?.relay) && _.protocol)) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw (l.setError(na.malformed_pairing_uri), Error(o));
              }
              if (!(null != f && f.symKey)) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw (l.setError(na.malformed_pairing_uri), Error(o));
              }
              if (
                null != f &&
                f.expiryTimestamp &&
                (0, en.toMiliseconds)(f?.expiryTimestamp) < Date.now()
              ) {
                l.setError(na.pairing_expired);
                let { message: o } = index_es_ht(
                  "EXPIRED",
                  "pair() URI has expired. Please try again with a new connection URI."
                );
                throw Error(o);
              }
            }),
            core_dist_index_es_p(this, "isValidPing", async (o) => {
              if (!ya(o)) {
                let { message: l } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `ping() params: ${o}`
                );
                throw Error(l);
              }
              let { topic: l } = o;
              await this.isValidPairingTopic(l);
            }),
            core_dist_index_es_p(this, "isValidDisconnect", async (o) => {
              if (!ya(o)) {
                let { message: l } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${o}`
                );
                throw Error(l);
              }
              let { topic: l } = o;
              await this.isValidPairingTopic(l);
            }),
            core_dist_index_es_p(this, "isValidPairingTopic", async (o) => {
              if (!index_es_nt(o, !1)) {
                let { message: l } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${o}`
                );
                throw Error(l);
              }
              if (!this.pairings.keys.includes(o)) {
                let { message: l } = index_es_ht(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${o}`
                );
                throw Error(l);
              }
              if (vi(this.pairings.get(o).expiry)) {
                await this.deletePairing(o);
                let { message: l } = index_es_ht(
                  "EXPIRED",
                  `pairing topic: ${o}`
                );
                throw Error(l);
              }
            }),
            (this.core = o),
            (this.logger = dist_index_es_E(l, this.name)),
            (this.pairings = new index_es_zi(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return index_es_y(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: o } = index_es_ht("NOT_INITIALIZED", this.name);
            throw Error(o);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(r2.message, async (o) => {
            let { topic: l, message: _, transportType: f } = o;
            if (
              this.pairings.keys.includes(l) &&
              f !== r5.link_mode &&
              !this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(_)
              )
            )
              try {
                let o = await this.core.crypto.decode(l, _);
                isJsonRpcRequest(o)
                  ? (this.core.history.set(l, o),
                    await this.onRelayEventRequest({ topic: l, payload: o }))
                  : isJsonRpcResponse(o) &&
                    (await this.core.history.resolve(o),
                    await this.onRelayEventResponse({ topic: l, payload: o }),
                    this.core.history.delete(l, o.id)),
                  await this.core.relayer.messages.ack(l, _);
              } catch (o) {
                this.logger.error(o);
              }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(ni.expired, async (o) => {
            let { topic: l } = bi(o.target);
            l &&
              this.pairings.keys.includes(l) &&
              (await this.deletePairing(l, !0),
              this.events.emit(ne.expire, { topic: l }));
          });
        }
      };
      var oO = Object.defineProperty,
        index_es_ko = (o, l, _) =>
          l in o
            ? oO(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        dist_index_es_R = (o, l, _) =>
          index_es_ko(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_ki = class index_es_ki extends index_es_I {
        constructor(o, l) {
          super(o, l),
            (this.core = o),
            (this.logger = l),
            dist_index_es_R(this, "records", new Map()),
            dist_index_es_R(this, "events", new G.EventEmitter()),
            dist_index_es_R(this, "name", "history"),
            dist_index_es_R(this, "version", "0.3"),
            dist_index_es_R(this, "cached", []),
            dist_index_es_R(this, "initialized", !1),
            dist_index_es_R(this, "storagePrefix", rJ),
            dist_index_es_R(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((o) => this.records.set(o.id, o)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            dist_index_es_R(this, "set", (o, l, _) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: o,
                  request: l,
                  chainId: _,
                }),
                this.records.has(l.id))
              )
                return;
              let f = {
                id: l.id,
                topic: o,
                request: { method: l.method, params: l.params || null },
                chainId: _,
                expiry: Ei(en.THIRTY_DAYS),
              };
              this.records.set(f.id, f),
                this.persist(),
                this.events.emit(nt.created, f);
            }),
            dist_index_es_R(this, "resolve", async (o) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: o,
                }),
                !this.records.has(o.id))
              )
                return;
              let l = await this.getRecord(o.id);
              typeof l.response > "u" &&
                ((l.response = isJsonRpcError(o)
                  ? { error: o.error }
                  : { result: o.result }),
                this.records.set(l.id, l),
                this.persist(),
                this.events.emit(nt.updated, l));
            }),
            dist_index_es_R(
              this,
              "get",
              async (o, l) => (
                this.isInitialized(),
                this.logger.debug("Getting record"),
                this.logger.trace({
                  type: "method",
                  method: "get",
                  topic: o,
                  id: l,
                }),
                await this.getRecord(l)
              )
            ),
            dist_index_es_R(this, "delete", (o, l) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: l }),
                this.values.forEach((_) => {
                  _.topic !== o ||
                    ("u" > typeof l && _.id !== l) ||
                    (this.records.delete(_.id),
                    this.events.emit(nt.deleted, _));
                }),
                this.persist();
            }),
            dist_index_es_R(
              this,
              "exists",
              async (o, l) => (
                this.isInitialized(),
                !!this.records.has(l) && (await this.getRecord(l)).topic === o
              )
            ),
            dist_index_es_R(this, "on", (o, l) => {
              this.events.on(o, l);
            }),
            dist_index_es_R(this, "once", (o, l) => {
              this.events.once(o, l);
            }),
            dist_index_es_R(this, "off", (o, l) => {
              this.events.off(o, l);
            }),
            dist_index_es_R(this, "removeListener", (o, l) => {
              this.events.removeListener(o, l);
            }),
            (this.logger = dist_index_es_E(l, this.name));
        }
        get context() {
          return index_es_y(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let o = [];
          return (
            this.values.forEach((l) => {
              if ("u" > typeof l.response) return;
              let _ = {
                topic: l.topic,
                request: formatJsonRpcRequest(
                  l.request.method,
                  l.request.params,
                  l.id
                ),
                chainId: l.chainId,
              };
              return o.push(_);
            }),
            o
          );
        }
        async setJsonRpcRecords(o) {
          await this.core.storage.setItem(this.storageKey, o);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(o) {
          this.isInitialized();
          let l = this.records.get(o);
          if (!l) {
            let { message: l } = index_es_ht(
              "NO_MATCHING_KEY",
              `${this.name}: ${o}`
            );
            throw Error(l);
          }
          return l;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(nt.sync);
        }
        async restore() {
          try {
            let o = await this.getJsonRpcRecords();
            if (typeof o > "u" || !o.length) return;
            if (this.records.size) {
              let { message: o } = index_es_ht(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(o), Error(o));
            }
            (this.cached = o),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (o) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(o);
          }
        }
        registerEventListeners() {
          this.events.on(nt.created, (o) => {
            let l = nt.created;
            this.logger.info(`Emitting ${l}`),
              this.logger.debug({ type: "event", event: l, record: o });
          }),
            this.events.on(nt.updated, (o) => {
              let l = nt.updated;
              this.logger.info(`Emitting ${l}`),
                this.logger.debug({ type: "event", event: l, record: o });
            }),
            this.events.on(nt.deleted, (o) => {
              let l = nt.deleted;
              this.logger.info(`Emitting ${l}`),
                this.logger.debug({ type: "event", event: l, record: o });
            }),
            this.core.heartbeat.on(rv.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.isInitialized();
            let o = !1;
            this.records.forEach((l) => {
              (0, en.toMiliseconds)(l.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${l.id}`),
                this.records.delete(l.id),
                this.events.emit(nt.deleted, l, !1),
                (o = !0));
            }),
              o && this.persist();
          } catch (o) {
            this.logger.warn(o);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: o } = index_es_ht("NOT_INITIALIZED", this.name);
            throw Error(o);
          }
        }
      };
      var oC = Object.defineProperty,
        dist_index_es_Uo = (o, l, _) =>
          l in o
            ? oC(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        index_es_A = (o, l, _) =>
          dist_index_es_Uo(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_ji = class index_es_ji extends dist_index_es_S {
        constructor(o, l) {
          super(o, l),
            (this.core = o),
            (this.logger = l),
            index_es_A(this, "expirations", new Map()),
            index_es_A(this, "events", new G.EventEmitter()),
            index_es_A(this, "name", "expirer"),
            index_es_A(this, "version", "0.3"),
            index_es_A(this, "cached", []),
            index_es_A(this, "initialized", !1),
            index_es_A(this, "storagePrefix", rJ),
            index_es_A(this, "init", async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((o) => this.expirations.set(o.target, o)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            index_es_A(this, "has", (o) => {
              try {
                let l = this.formatTarget(o);
                return "u" > typeof this.getExpiration(l);
              } catch {
                return !1;
              }
            }),
            index_es_A(this, "set", (o, l) => {
              this.isInitialized();
              let _ = this.formatTarget(o),
                f = { target: _, expiry: l };
              this.expirations.set(_, f),
                this.checkExpiry(_, f),
                this.events.emit(ni.created, { target: _, expiration: f });
            }),
            index_es_A(this, "get", (o) => {
              this.isInitialized();
              let l = this.formatTarget(o);
              return this.getExpiration(l);
            }),
            index_es_A(this, "del", (o) => {
              if ((this.isInitialized(), this.has(o))) {
                let l = this.formatTarget(o),
                  _ = this.getExpiration(l);
                this.expirations.delete(l),
                  this.events.emit(ni.deleted, { target: l, expiration: _ });
              }
            }),
            index_es_A(this, "on", (o, l) => {
              this.events.on(o, l);
            }),
            index_es_A(this, "once", (o, l) => {
              this.events.once(o, l);
            }),
            index_es_A(this, "off", (o, l) => {
              this.events.off(o, l);
            }),
            index_es_A(this, "removeListener", (o, l) => {
              this.events.removeListener(o, l);
            }),
            (this.logger = dist_index_es_E(l, this.name));
        }
        get context() {
          return index_es_y(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(o) {
          if ("string" == typeof o) return index_es_e("topic", o);
          if ("number" == typeof o) return index_es_e("id", o);
          let { message: l } = index_es_ht(
            "UNKNOWN_TYPE",
            `Target type: ${typeof o}`
          );
          throw Error(l);
        }
        async setExpirations(o) {
          await this.core.storage.setItem(this.storageKey, o);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(ni.sync);
        }
        async restore() {
          try {
            let o = await this.getExpirations();
            if (typeof o > "u" || !o.length) return;
            if (this.expirations.size) {
              let { message: o } = index_es_ht(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(o), Error(o));
            }
            (this.cached = o),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (o) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(o);
          }
        }
        getExpiration(o) {
          let l = this.expirations.get(o);
          if (!l) {
            let { message: l } = index_es_ht(
              "NO_MATCHING_KEY",
              `${this.name}: ${o}`
            );
            throw (this.logger.warn(l), Error(l));
          }
          return l;
        }
        checkExpiry(o, l) {
          let { expiry: _ } = l;
          (0, en.toMiliseconds)(_) - Date.now() <= 0 && this.expire(o, l);
        }
        expire(o, l) {
          this.expirations.delete(o),
            this.events.emit(ni.expired, { target: o, expiration: l });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((o, l) => this.checkExpiry(l, o));
        }
        registerEventListeners() {
          this.core.heartbeat.on(rv.pulse, () => this.checkExpirations()),
            this.events.on(ni.created, (o) => {
              let l = ni.created;
              this.logger.info(`Emitting ${l}`),
                this.logger.debug({ type: "event", event: l, data: o }),
                this.persist();
            }),
            this.events.on(ni.expired, (o) => {
              let l = ni.expired;
              this.logger.info(`Emitting ${l}`),
                this.logger.debug({ type: "event", event: l, data: o }),
                this.persist();
            }),
            this.events.on(ni.deleted, (o) => {
              let l = ni.deleted;
              this.logger.info(`Emitting ${l}`),
                this.logger.debug({ type: "event", event: l, data: o }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: o } = index_es_ht("NOT_INITIALIZED", this.name);
            throw Error(o);
          }
        }
      };
      var oA = Object.defineProperty,
        index_es_Mo = (o, l, _) =>
          l in o
            ? oA(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        core_dist_index_es_w = (o, l, _) =>
          index_es_Mo(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_Ui = class index_es_Ui extends index_es_M {
        constructor(o, l, _) {
          super(o, l, _),
            (this.core = o),
            (this.logger = l),
            (this.store = _),
            core_dist_index_es_w(this, "name", "verify-api"),
            core_dist_index_es_w(this, "abortController"),
            core_dist_index_es_w(this, "isDevEnv"),
            core_dist_index_es_w(this, "verifyUrlV3", nr),
            core_dist_index_es_w(this, "storagePrefix", rJ),
            core_dist_index_es_w(this, "version", 2),
            core_dist_index_es_w(this, "publicKey"),
            core_dist_index_es_w(this, "fetchPromise"),
            core_dist_index_es_w(this, "init", async () => {
              var o;
              this.isDevEnv ||
                ((this.publicKey = await this.store.getItem(this.storeKey)),
                this.publicKey &&
                  (0, en.toMiliseconds)(
                    null == (o = this.publicKey) ? void 0 : o.expiresAt
                  ) < Date.now() &&
                  (this.logger.debug("verify v2 public key expired"),
                  await this.removePublicKey()));
            }),
            core_dist_index_es_w(this, "register", async (o) => {
              if (!index_es_Yt() || this.isDevEnv) return;
              let l = window.location.origin,
                { id: _, decryptedId: f } = o,
                m = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${l}&id=${_}&decryptedId=${f}`;
              try {
                let o = (0, eo.getDocument)(),
                  l = this.startAbortTimer(5 * en.ONE_SECOND),
                  f = await new Promise((f, b) => {
                    let u = () => {
                      window.removeEventListener("message", x),
                        o.body.removeChild(w),
                        b("attestation aborted");
                    };
                    this.abortController.signal.addEventListener("abort", u);
                    let w = o.createElement("iframe");
                    (w.src = m),
                      (w.style.display = "none"),
                      w.addEventListener("error", u, {
                        signal: this.abortController.signal,
                      });
                    let x = (m) => {
                      if (m.data && "string" == typeof m.data)
                        try {
                          let b = JSON.parse(m.data);
                          if ("verify_attestation" === b.type) {
                            if (sn(b.attestation).payload.id !== _) return;
                            clearInterval(l),
                              o.body.removeChild(w),
                              this.abortController.signal.removeEventListener(
                                "abort",
                                u
                              ),
                              window.removeEventListener("message", x),
                              f(null === b.attestation ? "" : b.attestation);
                          }
                        } catch (o) {
                          this.logger.warn(o);
                        }
                    };
                    o.body.appendChild(w),
                      window.addEventListener("message", x, {
                        signal: this.abortController.signal,
                      });
                  });
                return this.logger.debug("jwt attestation", f), f;
              } catch (o) {
                this.logger.warn(o);
              }
              return "";
            }),
            core_dist_index_es_w(this, "resolve", async (o) => {
              if (this.isDevEnv) return "";
              let { attestationId: l, hash: _, encryptedId: f } = o;
              if ("" === l) {
                this.logger.debug("resolve: attestationId is empty, skipping");
                return;
              }
              if (l) {
                if (sn(l).payload.id !== f) return;
                let o = await this.isValidJwtAttestation(l);
                if (o) {
                  if (!o.isVerified) {
                    this.logger.warn(
                      "resolve: jwt attestation: origin url not verified"
                    );
                    return;
                  }
                  return o;
                }
              }
              if (!_) return;
              let m = this.getVerifyUrl(o?.verifyUrl);
              return this.fetchAttestation(_, m);
            }),
            core_dist_index_es_w(this, "fetchAttestation", async (o, l) => {
              this.logger.debug(`resolving attestation: ${o} from url: ${l}`);
              let _ = this.startAbortTimer(5 * en.ONE_SECOND),
                f = await fetch(`${l}/attestation/${o}?v2Supported=true`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(_), 200 === f.status ? await f.json() : void 0
              );
            }),
            core_dist_index_es_w(this, "getVerifyUrl", (o) => {
              let l = o || ns;
              return (
                nn.includes(l) ||
                  (this.logger.info(
                    `verify url: ${l}, not included in trusted list, assigning default: ${ns}`
                  ),
                  (l = ns)),
                l
              );
            }),
            core_dist_index_es_w(this, "fetchPublicKey", async () => {
              try {
                this.logger.debug(
                  `fetching public key from: ${this.verifyUrlV3}`
                );
                let o = this.startAbortTimer(en.FIVE_SECONDS),
                  l = await fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal,
                  });
                return clearTimeout(o), await l.json();
              } catch (o) {
                this.logger.warn(o);
              }
            }),
            core_dist_index_es_w(this, "persistPublicKey", async (o) => {
              this.logger.debug("persisting public key to local storage", o),
                await this.store.setItem(this.storeKey, o),
                (this.publicKey = o);
            }),
            core_dist_index_es_w(this, "removePublicKey", async () => {
              this.logger.debug("removing verify v2 public key from storage"),
                await this.store.removeItem(this.storeKey),
                (this.publicKey = void 0);
            }),
            core_dist_index_es_w(this, "isValidJwtAttestation", async (o) => {
              let l = await this.getPublicKey();
              try {
                if (l) return this.validateAttestation(o, l);
              } catch (o) {
                this.logger.error(o),
                  this.logger.warn("error validating attestation");
              }
              let _ = await this.fetchAndPersistPublicKey();
              try {
                if (_) return this.validateAttestation(o, _);
              } catch (o) {
                this.logger.error(o),
                  this.logger.warn("error validating attestation");
              }
            }),
            core_dist_index_es_w(this, "getPublicKey", async () =>
              this.publicKey
                ? this.publicKey
                : await this.fetchAndPersistPublicKey()
            ),
            core_dist_index_es_w(this, "fetchAndPersistPublicKey", async () => {
              if (this.fetchPromise)
                return await this.fetchPromise, this.publicKey;
              this.fetchPromise = new Promise(async (o) => {
                let l = await this.fetchPublicKey();
                l && (await this.persistPublicKey(l), o(l));
              });
              let o = await this.fetchPromise;
              return (this.fetchPromise = void 0), o;
            }),
            core_dist_index_es_w(this, "validateAttestation", (o, l) => {
              let _ = (function (o, l) {
                  let [_, f, m] = o.split("."),
                    b = iJ.from(index_es_ro(m), "base64");
                  if (64 !== b.length) throw Error("Invalid signature length");
                  let w = b.slice(0, 32),
                    E = b.slice(32, 64),
                    D = `${_}.${f}`,
                    P = sj(D),
                    C = (function (o) {
                      let l = iJ.from(o.x, "base64"),
                        _ = iJ.from(o.y, "base64");
                      return concat([new Uint8Array([4]), l, _]);
                    })(l);
                  if (!rd.verify(concat([w, E]), P, C))
                    throw Error("Invalid signature");
                  return sn(o).payload;
                })(o, l.publicKey),
                f = {
                  hasExpired: (0, en.toMiliseconds)(_.exp) < Date.now(),
                  payload: _,
                };
              if (f.hasExpired)
                throw (
                  (this.logger.warn("resolve: jwt attestation expired"),
                  Error("JWT attestation expired"))
                );
              return {
                origin: f.payload.origin,
                isScam: f.payload.isScam,
                isVerified: f.payload.isVerified,
              };
            }),
            (this.logger = dist_index_es_E(l, this.name)),
            (this.abortController = new AbortController()),
            (this.isDevEnv = Ii()),
            this.init();
        }
        get storeKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//verify:public:key"
          );
        }
        get context() {
          return index_es_y(this.logger);
        }
        startAbortTimer(o) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, en.toMiliseconds)(o)
            )
          );
        }
      };
      var oR = Object.defineProperty,
        dist_index_es_Bo = (o, l, _) =>
          l in o
            ? oR(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        index_es_Fi = (o, l, _) =>
          dist_index_es_Bo(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_Mi = class index_es_Mi extends dist_index_es_O {
        constructor(o, l) {
          super(o, l),
            (this.projectId = o),
            (this.logger = l),
            index_es_Fi(this, "context", "echo"),
            index_es_Fi(this, "registerDeviceToken", async (o) => {
              let {
                  clientId: l,
                  token: _,
                  notificationType: f,
                  enableEncrypted: m = !1,
                } = o,
                b = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fetch(b, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: l,
                  type: f,
                  token: _,
                  always_raw: m,
                }),
              });
            }),
            (this.logger = dist_index_es_E(l, this.context));
        }
      };
      var oT = Object.defineProperty,
        oN = Object.getOwnPropertySymbols,
        oj = Object.prototype.hasOwnProperty,
        ok = Object.prototype.propertyIsEnumerable,
        dist_index_es_Ze = (o, l, _) =>
          l in o
            ? oT(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        dist_index_es_be = (o, l) => {
          for (var _ in l || (l = {}))
            oj.call(l, _) && dist_index_es_Ze(o, _, l[_]);
          if (oN)
            for (var _ of oN(l)) ok.call(l, _) && dist_index_es_Ze(o, _, l[_]);
          return o;
        },
        core_dist_index_es_E = (o, l, _) =>
          dist_index_es_Ze(o, "symbol" != typeof l ? l + "" : l, _);
      let Bi = class Bi extends index_es_R {
        constructor(o, l, _ = !0) {
          super(o, l, _),
            (this.core = o),
            (this.logger = l),
            core_dist_index_es_E(this, "context", "event-client"),
            core_dist_index_es_E(this, "storagePrefix", rJ),
            core_dist_index_es_E(this, "storageVersion", 0.1),
            core_dist_index_es_E(this, "events", new Map()),
            core_dist_index_es_E(this, "shouldPersist", !1),
            core_dist_index_es_E(this, "init", async () => {
              if (!Ii())
                try {
                  let o = {
                    eventId: index_es_Bi(),
                    timestamp: Date.now(),
                    domain: this.getAppDomain(),
                    props: {
                      event: "INIT",
                      type: "",
                      properties: {
                        client_id: await this.core.crypto.getClientId(),
                        user_agent: index_es_Mn(
                          this.core.relayer.protocol,
                          this.core.relayer.version,
                          r3
                        ),
                      },
                    },
                  };
                  await this.sendEvent([o]);
                } catch (o) {
                  this.logger.warn(o);
                }
            }),
            core_dist_index_es_E(this, "createEvent", (o) => {
              let {
                  event: l = "ERROR",
                  type: _ = "",
                  properties: { topic: f, trace: m },
                } = o,
                b = index_es_Bi(),
                w = this.core.projectId || "",
                E = Date.now(),
                D = dist_index_es_be(
                  {
                    eventId: b,
                    timestamp: E,
                    props: {
                      event: l,
                      type: _,
                      properties: { topic: f, trace: m },
                    },
                    bundleId: w,
                    domain: this.getAppDomain(),
                  },
                  this.setMethods(b)
                );
              return (
                this.telemetryEnabled &&
                  (this.events.set(b, D), (this.shouldPersist = !0)),
                D
              );
            }),
            core_dist_index_es_E(this, "getEvent", (o) => {
              let { eventId: l, topic: _ } = o;
              if (l) return this.events.get(l);
              let f = Array.from(this.events.values()).find(
                (o) => o.props.properties.topic === _
              );
              if (f)
                return dist_index_es_be(
                  dist_index_es_be({}, f),
                  this.setMethods(f.eventId)
                );
            }),
            core_dist_index_es_E(this, "deleteEvent", (o) => {
              let { eventId: l } = o;
              this.events.delete(l), (this.shouldPersist = !0);
            }),
            core_dist_index_es_E(this, "setEventListeners", () => {
              this.core.heartbeat.on(rv.pulse, async () => {
                this.shouldPersist && (await this.persist()),
                  this.events.forEach((o) => {
                    (0, en.fromMiliseconds)(Date.now()) -
                      (0, en.fromMiliseconds)(o.timestamp) >
                      86400 &&
                      (this.events.delete(o.eventId),
                      (this.shouldPersist = !0));
                  });
              });
            }),
            core_dist_index_es_E(this, "setMethods", (o) => ({
              addTrace: (l) => this.addTrace(o, l),
              setError: (l) => this.setError(o, l),
            })),
            core_dist_index_es_E(this, "addTrace", (o, l) => {
              let _ = this.events.get(o);
              _ &&
                (_.props.properties.trace.push(l),
                this.events.set(o, _),
                (this.shouldPersist = !0));
            }),
            core_dist_index_es_E(this, "setError", (o, l) => {
              let _ = this.events.get(o);
              _ &&
                ((_.props.type = l),
                (_.timestamp = Date.now()),
                this.events.set(o, _),
                (this.shouldPersist = !0));
            }),
            core_dist_index_es_E(this, "persist", async () => {
              await this.core.storage.setItem(
                this.storageKey,
                Array.from(this.events.values())
              ),
                (this.shouldPersist = !1);
            }),
            core_dist_index_es_E(this, "restore", async () => {
              try {
                let o =
                  (await this.core.storage.getItem(this.storageKey)) || [];
                if (!o.length) return;
                o.forEach((o) => {
                  this.events.set(
                    o.eventId,
                    dist_index_es_be(
                      dist_index_es_be({}, o),
                      this.setMethods(o.eventId)
                    )
                  );
                });
              } catch (o) {
                this.logger.warn(o);
              }
            }),
            core_dist_index_es_E(this, "submit", async () => {
              if (!this.telemetryEnabled || 0 === this.events.size) return;
              let o = [];
              for (let [l, _] of this.events) _.props.type && o.push(_);
              if (0 !== o.length)
                try {
                  if ((await this.sendEvent(o)).ok)
                    for (let l of o)
                      this.events.delete(l.eventId), (this.shouldPersist = !0);
                } catch (o) {
                  this.logger.warn(o);
                }
            }),
            core_dist_index_es_E(this, "sendEvent", async (o) => {
              let l = this.getAppDomain() ? "" : "&sp=desktop";
              return await fetch(
                `https://pulse.walletconnect.org/batch?projectId=${this.core.projectId}&st=events_sdk&sv=js-${r3}${l}`,
                { method: "POST", body: JSON.stringify(o) }
              );
            }),
            core_dist_index_es_E(this, "getAppDomain", () => index_es_Pn().url),
            (this.logger = dist_index_es_E(l, this.context)),
            (this.telemetryEnabled = _),
            _
              ? this.restore().then(async () => {
                  await this.submit(), this.setEventListeners();
                })
              : this.persist();
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.storageVersion +
            this.core.customStoragePrefix +
            "//" +
            this.context
          );
        }
      };
      var oL = Object.defineProperty,
        oB = Object.getOwnPropertySymbols,
        oU = Object.prototype.hasOwnProperty,
        oq = Object.prototype.propertyIsEnumerable,
        dist_index_es_Qe = (o, l, _) =>
          l in o
            ? oL(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        index_es_qi = (o, l) => {
          for (var _ in l || (l = {}))
            oU.call(l, _) && dist_index_es_Qe(o, _, l[_]);
          if (oB)
            for (var _ of oB(l)) oq.call(l, _) && dist_index_es_Qe(o, _, l[_]);
          return o;
        },
        core_dist_index_es_v = (o, l, _) =>
          dist_index_es_Qe(o, "symbol" != typeof l ? l + "" : l, _);
      let dist_index_es_Te = class dist_index_es_Te extends dist_index_es_h {
        constructor(o) {
          var l, _;
          super(o),
            core_dist_index_es_v(this, "protocol", "wc"),
            core_dist_index_es_v(this, "version", 2),
            core_dist_index_es_v(this, "name", rG),
            core_dist_index_es_v(this, "relayUrl"),
            core_dist_index_es_v(this, "projectId"),
            core_dist_index_es_v(this, "customStoragePrefix"),
            core_dist_index_es_v(this, "events", new G.EventEmitter()),
            core_dist_index_es_v(this, "logger"),
            core_dist_index_es_v(this, "heartbeat"),
            core_dist_index_es_v(this, "relayer"),
            core_dist_index_es_v(this, "crypto"),
            core_dist_index_es_v(this, "storage"),
            core_dist_index_es_v(this, "history"),
            core_dist_index_es_v(this, "expirer"),
            core_dist_index_es_v(this, "pairing"),
            core_dist_index_es_v(this, "verify"),
            core_dist_index_es_v(this, "echoClient"),
            core_dist_index_es_v(this, "linkModeSupportedApps"),
            core_dist_index_es_v(this, "eventClient"),
            core_dist_index_es_v(this, "initialized", !1),
            core_dist_index_es_v(this, "logChunkController"),
            core_dist_index_es_v(this, "on", (o, l) => this.events.on(o, l)),
            core_dist_index_es_v(this, "once", (o, l) =>
              this.events.once(o, l)
            ),
            core_dist_index_es_v(this, "off", (o, l) => this.events.off(o, l)),
            core_dist_index_es_v(this, "removeListener", (o, l) =>
              this.events.removeListener(o, l)
            ),
            core_dist_index_es_v(
              this,
              "dispatchEnvelope",
              ({ topic: o, message: l, sessionExists: _ }) => {
                if (!o || !l) return;
                let f = {
                  topic: o,
                  message: l,
                  publishedAt: Date.now(),
                  transportType: r5.link_mode,
                };
                this.relayer.onLinkMessageEvent(f, { sessionExists: _ });
              }
            );
          let f = this.getGlobalCore(o?.customStoragePrefix);
          if (f)
            try {
              return (
                (this.customStoragePrefix = f.customStoragePrefix),
                (this.logger = f.logger),
                (this.heartbeat = f.heartbeat),
                (this.crypto = f.crypto),
                (this.history = f.history),
                (this.expirer = f.expirer),
                (this.storage = f.storage),
                (this.relayer = f.relayer),
                (this.pairing = f.pairing),
                (this.verify = f.verify),
                (this.echoClient = f.echoClient),
                (this.linkModeSupportedApps = f.linkModeSupportedApps),
                (this.eventClient = f.eventClient),
                (this.initialized = f.initialized),
                (this.logChunkController = f.logChunkController),
                f
              );
            } catch (o) {
              console.warn("Failed to copy global core", o);
            }
          (this.projectId = o?.projectId),
            (this.relayUrl = o?.relayUrl || r1),
            (this.customStoragePrefix =
              null != o && o.customStoragePrefix
                ? `:${o.customStoragePrefix}`
                : "");
          let m = logger_dist_index_es_k({
              level:
                "string" == typeof o?.logger && o.logger ? o.logger : rY.logger,
              name: rG,
            }),
            { logger: b, chunkLoggerController: w } =
              "u" >
                typeof (_ = {
                  opts: m,
                  maxSizeInBytes: o?.maxLogBlobSizeInBytes,
                  loggerOverride: o?.logger,
                }).loggerOverride && "string" != typeof _.loggerOverride
                ? { logger: _.loggerOverride, chunkLoggerController: null }
                : "u" > typeof window
                ? (function (o) {
                    var l, _;
                    let f = new index_es_m(
                      null == (l = o.opts) ? void 0 : l.level,
                      o.maxSizeInBytes
                    );
                    return {
                      logger: rO()(
                        index_es_g(i({}, o.opts), {
                          level: "trace",
                          browser: index_es_g(
                            i({}, null == (_ = o.opts) ? void 0 : _.browser),
                            { write: (o) => f.write(o) }
                          ),
                        })
                      ),
                      chunkLoggerController: f,
                    };
                  })(_)
                : (function (o) {
                    var l;
                    let _ = new B(
                      null == (l = o.opts) ? void 0 : l.level,
                      o.maxSizeInBytes
                    );
                    return {
                      logger: rO()(
                        index_es_g(i({}, o.opts), { level: "trace" }),
                        _
                      ),
                      chunkLoggerController: _,
                    };
                  })(_);
          (this.logChunkController = w),
            null != (l = this.logChunkController) &&
              l.downloadLogsBlobInBrowser &&
              (window.downloadLogsBlobInBrowser = async () => {
                var o, l;
                null != (o = this.logChunkController) &&
                  o.downloadLogsBlobInBrowser &&
                  (null == (l = this.logChunkController) ||
                    l.downloadLogsBlobInBrowser({
                      clientId: await this.crypto.getClientId(),
                    }));
              }),
            (this.logger = dist_index_es_E(b, this.name)),
            (this.heartbeat = new index_es_i()),
            (this.crypto = new index_es_vi(this, this.logger, o?.keychain)),
            (this.history = new index_es_ki(this, this.logger)),
            (this.expirer = new index_es_ji(this, this.logger)),
            (this.storage =
              null != o && o.storage
                ? o.storage
                : new index_es_h(
                    index_es_qi(index_es_qi({}, rX), o?.storageOptions)
                  )),
            (this.relayer = new index_es_Si({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new index_es_Li(this, this.logger)),
            (this.verify = new index_es_Ui(this, this.logger, this.storage)),
            (this.echoClient = new index_es_Mi(
              this.projectId || "",
              this.logger
            )),
            (this.linkModeSupportedApps = []),
            (this.eventClient = new Bi(this, this.logger, o?.telemetryEnabled)),
            this.setGlobalCore(this);
        }
        static async init(o) {
          let l = new dist_index_es_Te(o);
          await l.initialize();
          let _ = await l.crypto.getClientId();
          return await l.storage.setItem("WALLETCONNECT_CLIENT_ID", _), l;
        }
        get context() {
          return index_es_y(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async getLogsBlob() {
          var o;
          return null == (o = this.logChunkController)
            ? void 0
            : o.logsToBlob({ clientId: await this.crypto.getClientId() });
        }
        async addLinkModeSupportedApp(o) {
          this.linkModeSupportedApps.includes(o) ||
            (this.linkModeSupportedApps.push(o),
            await this.storage.setItem(r6, this.linkModeSupportedApps));
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.linkModeSupportedApps =
                (await this.storage.getItem(r6)) || []),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (o) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                o
              ),
              this.logger.error(o.message),
              o)
            );
          }
        }
        getGlobalCore(o = "") {
          try {
            if (this.isGlobalCoreDisabled()) return;
            let l = `_walletConnectCore_${o}`,
              _ = `${l}_count`;
            return (
              (globalThis[_] = (globalThis[_] || 0) + 1),
              globalThis[_] > 1 &&
                console.warn(
                  `WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[_]} times.`
                ),
              globalThis[l]
            );
          } catch (o) {
            console.warn("Failed to get global WalletConnect core", o);
            return;
          }
        }
        setGlobalCore(o) {
          var l;
          try {
            if (this.isGlobalCoreDisabled()) return;
            let _ = `_walletConnectCore_${
              (null == (l = o.opts) ? void 0 : l.customStoragePrefix) || ""
            }`;
            globalThis[_] = o;
          } catch (o) {
            console.warn("Failed to set global WalletConnect core", o);
          }
        }
        isGlobalCoreDisabled() {
          try {
            return "u" > typeof rW && "true" === rW.env.DISABLE_GLOBAL_CORE;
          } catch {
            return !0;
          }
        }
      };
      let oM = "client",
        o$ = `wc@2:${oM}:`,
        oz = { name: oM, logger: "error" },
        oH = "WALLETCONNECT_DEEPLINK_CHOICE",
        oF = "Proposal expired",
        oV = en.SEVEN_DAYS,
        oK = {
          wc_sessionPropose: {
            req: { ttl: en.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: en.FIVE_MINUTES, prompt: !1, tag: 1101 },
            reject: { ttl: en.FIVE_MINUTES, prompt: !1, tag: 1120 },
            autoReject: { ttl: en.FIVE_MINUTES, prompt: !1, tag: 1121 },
          },
          wc_sessionSettle: {
            req: { ttl: en.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: en.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: en.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: en.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: en.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: en.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: en.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: en.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: en.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: en.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: en.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: en.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: en.ONE_DAY, prompt: !1, tag: 1114 },
            res: { ttl: en.ONE_DAY, prompt: !1, tag: 1115 },
          },
          wc_sessionAuthenticate: {
            req: { ttl: en.ONE_HOUR, prompt: !0, tag: 1116 },
            res: { ttl: en.ONE_HOUR, prompt: !1, tag: 1117 },
            reject: { ttl: en.FIVE_MINUTES, prompt: !1, tag: 1118 },
            autoReject: { ttl: en.FIVE_MINUTES, prompt: !1, tag: 1119 },
          },
        },
        oW = { min: en.FIVE_MINUTES, max: en.SEVEN_DAYS },
        oG = { idle: "IDLE", active: "ACTIVE" },
        oJ = {
          eth_sendTransaction: { key: "" },
          eth_sendRawTransaction: { key: "" },
          wallet_sendCalls: { key: "" },
          solana_signTransaction: { key: "signature" },
          solana_signAllTransactions: { key: "transactions" },
          solana_signAndSendTransaction: { key: "signature" },
        },
        oY = [
          "wc_sessionPropose",
          "wc_sessionRequest",
          "wc_authRequest",
          "wc_sessionAuthenticate",
        ],
        oX = "wc@1.5:auth:",
        oQ = `${oX}:PUB_KEY`;
      var oZ = Object.defineProperty,
        o0 = Object.defineProperties,
        o1 = Object.getOwnPropertyDescriptors,
        o2 = Object.getOwnPropertySymbols,
        o8 = Object.prototype.hasOwnProperty,
        o3 = Object.prototype.propertyIsEnumerable,
        sign_client_dist_index_es_Ke = (o, l, _) =>
          l in o
            ? oZ(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        sign_client_dist_index_es_v = (o, l) => {
          for (var _ in l || (l = {}))
            o8.call(l, _) && sign_client_dist_index_es_Ke(o, _, l[_]);
          if (o2)
            for (var _ of o2(l))
              o3.call(l, _) && sign_client_dist_index_es_Ke(o, _, l[_]);
          return o;
        },
        sign_client_dist_index_es_b = (o, l) => o0(o, o1(l)),
        sign_client_dist_index_es_c = (o, l, _) =>
          sign_client_dist_index_es_Ke(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_Ps = class index_es_Ps extends index_es_V {
        constructor(o) {
          super(o),
            sign_client_dist_index_es_c(this, "name", "engine"),
            sign_client_dist_index_es_c(this, "events", new (Y())()),
            sign_client_dist_index_es_c(this, "initialized", !1),
            sign_client_dist_index_es_c(this, "requestQueue", {
              state: oG.idle,
              queue: [],
            }),
            sign_client_dist_index_es_c(this, "sessionRequestQueue", {
              state: oG.idle,
              queue: [],
            }),
            sign_client_dist_index_es_c(
              this,
              "requestQueueDelay",
              en.ONE_SECOND
            ),
            sign_client_dist_index_es_c(
              this,
              "expectedPairingMethodMap",
              new Map()
            ),
            sign_client_dist_index_es_c(this, "recentlyDeletedMap", new Map()),
            sign_client_dist_index_es_c(this, "recentlyDeletedLimit", 200),
            sign_client_dist_index_es_c(this, "relayMessageCache", []),
            sign_client_dist_index_es_c(this, "pendingSessions", new Map()),
            sign_client_dist_index_es_c(this, "init", async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                await this.registerLinkModeListeners(),
                this.client.core.pairing.register({ methods: Object.keys(oK) }),
                (this.initialized = !0),
                setTimeout(async () => {
                  await this.processPendingMessageEvents(),
                    (this.sessionRequestQueue.queue =
                      this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, en.toMiliseconds)(this.requestQueueDelay)));
            }),
            sign_client_dist_index_es_c(this, "connect", async (o) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              let l = sign_client_dist_index_es_b(
                sign_client_dist_index_es_v({}, o),
                {
                  requiredNamespaces: o.requiredNamespaces || {},
                  optionalNamespaces: o.optionalNamespaces || {},
                }
              );
              await this.isValidConnect(l);
              let {
                  pairingTopic: _,
                  requiredNamespaces: f,
                  optionalNamespaces: m,
                  sessionProperties: b,
                  scopedProperties: w,
                  relays: E,
                } = l,
                D = _,
                P,
                C = !1;
              try {
                if (D) {
                  let o = this.client.core.pairing.pairings.get(D);
                  this.client.logger.warn(
                    "connect() with existing pairing topic is deprecated and will be removed in the next major release."
                  ),
                    (C = o.active);
                }
              } catch (o) {
                throw (
                  (this.client.logger.error(
                    `connect() -> pairing.get(${D}) failed`
                  ),
                  o)
                );
              }
              if (!D || !C) {
                let { topic: o, uri: l } =
                  await this.client.core.pairing.create();
                (D = o), (P = l);
              }
              if (!D) {
                let { message: o } = index_es_ht(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${D}`
                );
                throw Error(o);
              }
              let A = await this.client.core.crypto.generateKeyPair(),
                R = oK.wc_sessionPropose.req.ttl || en.FIVE_MINUTES,
                j = Ei(R),
                q = sign_client_dist_index_es_b(
                  sign_client_dist_index_es_v(
                    sign_client_dist_index_es_v(
                      {
                        requiredNamespaces: f,
                        optionalNamespaces: m,
                        relays: E ?? [{ protocol: "irn" }],
                        proposer: {
                          publicKey: A,
                          metadata: this.client.metadata,
                        },
                        expiryTimestamp: j,
                        pairingTopic: D,
                      },
                      b && { sessionProperties: b }
                    ),
                    w && { scopedProperties: w }
                  ),
                  { id: payloadId() }
                ),
                M = xi("session_connect", q.id),
                { reject: $, resolve: K, done: G } = gi(R, oF),
                I = ({ id: o }) => {
                  o === q.id &&
                    (this.client.events.off("proposal_expire", I),
                    this.pendingSessions.delete(q.id),
                    this.events.emit(M, { error: { message: oF, code: 0 } }));
                };
              return (
                this.client.events.on("proposal_expire", I),
                this.events.once(M, ({ error: o, session: l }) => {
                  this.client.events.off("proposal_expire", I),
                    o ? $(o) : l && K(l);
                }),
                await this.sendRequest({
                  topic: D,
                  method: "wc_sessionPropose",
                  params: q,
                  throwOnFailedPublish: !0,
                  clientRpcId: q.id,
                }),
                await this.setProposal(q.id, q),
                { uri: P, approval: G }
              );
            }),
            sign_client_dist_index_es_c(this, "pair", async (o) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                return await this.client.core.pairing.pair(o);
              } catch (o) {
                throw (this.client.logger.error("pair() failed"), o);
              }
            }),
            sign_client_dist_index_es_c(this, "approve", async (o) => {
              var l, _, f;
              let m = this.client.core.eventClient.createEvent({
                properties: {
                  topic: null == (l = o?.id) ? void 0 : l.toString(),
                  trace: [nc.session_approve_started],
                },
              });
              try {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
              } catch (o) {
                throw (m.setError(nd.no_internet_connection), o);
              }
              try {
                await this.isValidProposalId(o?.id);
              } catch (l) {
                throw (
                  (this.client.logger.error(
                    `approve() -> proposal.get(${o?.id}) failed`
                  ),
                  m.setError(nd.proposal_not_found),
                  l)
                );
              }
              try {
                await this.isValidApprove(o);
              } catch (o) {
                throw (
                  (this.client.logger.error(
                    "approve() -> isValidApprove() failed"
                  ),
                  m.setError(nd.session_approve_namespace_validation_failure),
                  o)
                );
              }
              let {
                  id: b,
                  relayProtocol: w,
                  namespaces: E,
                  sessionProperties: D,
                  scopedProperties: P,
                  sessionConfig: C,
                } = o,
                A = this.client.proposal.get(b);
              this.client.core.eventClient.deleteEvent({ eventId: m.eventId });
              let {
                  pairingTopic: R,
                  proposer: j,
                  requiredNamespaces: q,
                  optionalNamespaces: M,
                } = A,
                $ =
                  null == (_ = this.client.core.eventClient)
                    ? void 0
                    : _.getEvent({ topic: R });
              $ ||
                ($ =
                  null == (f = this.client.core.eventClient)
                    ? void 0
                    : f.createEvent({
                        type: nc.session_approve_started,
                        properties: {
                          topic: R,
                          trace: [
                            nc.session_approve_started,
                            nc.session_namespaces_validation_success,
                          ],
                        },
                      }));
              let K = await this.client.core.crypto.generateKeyPair(),
                G = j.publicKey,
                Y = await this.client.core.crypto.generateSharedKey(K, G),
                Q = sign_client_dist_index_es_v(
                  sign_client_dist_index_es_v(
                    sign_client_dist_index_es_v(
                      {
                        relay: { protocol: w ?? "irn" },
                        namespaces: E,
                        controller: {
                          publicKey: K,
                          metadata: this.client.metadata,
                        },
                        expiry: Ei(oV),
                      },
                      D && { sessionProperties: D }
                    ),
                    P && { scopedProperties: P }
                  ),
                  C && { sessionConfig: C }
                ),
                Z = r5.relay;
              $.addTrace(nc.subscribing_session_topic);
              try {
                await this.client.core.relayer.subscribe(Y, {
                  transportType: Z,
                });
              } catch (o) {
                throw ($.setError(nd.subscribe_session_topic_failure), o);
              }
              $.addTrace(nc.subscribe_session_topic_success);
              let ei = sign_client_dist_index_es_b(
                sign_client_dist_index_es_v({}, Q),
                {
                  topic: Y,
                  requiredNamespaces: q,
                  optionalNamespaces: M,
                  pairingTopic: R,
                  acknowledged: !1,
                  self: Q.controller,
                  peer: { publicKey: j.publicKey, metadata: j.metadata },
                  controller: K,
                  transportType: r5.relay,
                }
              );
              await this.client.session.set(Y, ei),
                $.addTrace(nc.store_session);
              try {
                $.addTrace(nc.publishing_session_settle),
                  await this.sendRequest({
                    topic: Y,
                    method: "wc_sessionSettle",
                    params: Q,
                    throwOnFailedPublish: !0,
                  }).catch((o) => {
                    throw ($?.setError(nd.session_settle_publish_failure), o);
                  }),
                  $.addTrace(nc.session_settle_publish_success),
                  $.addTrace(nc.publishing_session_approve),
                  await this.sendResult({
                    id: b,
                    topic: R,
                    result: {
                      relay: { protocol: w ?? "irn" },
                      responderPublicKey: K,
                    },
                    throwOnFailedPublish: !0,
                  }).catch((o) => {
                    throw ($?.setError(nd.session_approve_publish_failure), o);
                  }),
                  $.addTrace(nc.session_approve_publish_success);
              } catch (o) {
                throw (
                  (this.client.logger.error(o),
                  this.client.session.delete(
                    Y,
                    index_es_Nt("USER_DISCONNECTED")
                  ),
                  await this.client.core.relayer.unsubscribe(Y),
                  o)
                );
              }
              return (
                this.client.core.eventClient.deleteEvent({
                  eventId: $.eventId,
                }),
                await this.client.core.pairing.updateMetadata({
                  topic: R,
                  metadata: j.metadata,
                }),
                await this.client.proposal.delete(
                  b,
                  index_es_Nt("USER_DISCONNECTED")
                ),
                await this.client.core.pairing.activate({ topic: R }),
                await this.setExpiry(Y, Ei(oV)),
                {
                  topic: Y,
                  acknowledged: () =>
                    Promise.resolve(this.client.session.get(Y)),
                }
              );
            }),
            sign_client_dist_index_es_c(this, "reject", async (o) => {
              let l;
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidReject(o);
              } catch (o) {
                throw (
                  (this.client.logger.error(
                    "reject() -> isValidReject() failed"
                  ),
                  o)
                );
              }
              let { id: _, reason: f } = o;
              try {
                l = this.client.proposal.get(_).pairingTopic;
              } catch (o) {
                throw (
                  (this.client.logger.error(
                    `reject() -> proposal.get(${_}) failed`
                  ),
                  o)
                );
              }
              l &&
                (await this.sendError({
                  id: _,
                  topic: l,
                  error: f,
                  rpcOpts: oK.wc_sessionPropose.reject,
                }),
                await this.client.proposal.delete(
                  _,
                  index_es_Nt("USER_DISCONNECTED")
                ));
            }),
            sign_client_dist_index_es_c(this, "update", async (o) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidUpdate(o);
              } catch (o) {
                throw (
                  (this.client.logger.error(
                    "update() -> isValidUpdate() failed"
                  ),
                  o)
                );
              }
              let { topic: l, namespaces: _ } = o,
                { done: f, resolve: m, reject: b } = gi(),
                w = payloadId(),
                E = getBigIntRpcId().toString(),
                D = this.client.session.get(l).namespaces;
              return (
                this.events.once(xi("session_update", w), ({ error: o }) => {
                  o ? b(o) : m();
                }),
                await this.client.session.update(l, { namespaces: _ }),
                await this.sendRequest({
                  topic: l,
                  method: "wc_sessionUpdate",
                  params: { namespaces: _ },
                  throwOnFailedPublish: !0,
                  clientRpcId: w,
                  relayRpcId: E,
                }).catch((o) => {
                  this.client.logger.error(o),
                    this.client.session.update(l, { namespaces: D }),
                    b(o);
                }),
                { acknowledged: f }
              );
            }),
            sign_client_dist_index_es_c(this, "extend", async (o) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidExtend(o);
              } catch (o) {
                throw (
                  (this.client.logger.error(
                    "extend() -> isValidExtend() failed"
                  ),
                  o)
                );
              }
              let { topic: l } = o,
                _ = payloadId(),
                { done: f, resolve: m, reject: b } = gi();
              return (
                this.events.once(xi("session_extend", _), ({ error: o }) => {
                  o ? b(o) : m();
                }),
                await this.setExpiry(l, Ei(oV)),
                this.sendRequest({
                  topic: l,
                  method: "wc_sessionExtend",
                  params: {},
                  clientRpcId: _,
                  throwOnFailedPublish: !0,
                }).catch((o) => {
                  b(o);
                }),
                { acknowledged: f }
              );
            }),
            sign_client_dist_index_es_c(this, "request", async (o) => {
              this.isInitialized();
              try {
                await this.isValidRequest(o);
              } catch (o) {
                throw (
                  (this.client.logger.error(
                    "request() -> isValidRequest() failed"
                  ),
                  o)
                );
              }
              let {
                  chainId: l,
                  request: _,
                  topic: f,
                  expiry: m = oK.wc_sessionRequest.req.ttl,
                } = o,
                b = this.client.session.get(f);
              b?.transportType === r5.relay &&
                (await this.confirmOnlineStateOrThrow());
              let w = payloadId(),
                E = getBigIntRpcId().toString(),
                {
                  done: D,
                  resolve: P,
                  reject: C,
                } = gi(m, "Request expired. Please try again.");
              this.events.once(
                xi("session_request", w),
                ({ error: o, result: l }) => {
                  o ? C(o) : P(l);
                }
              );
              let A = "wc_sessionRequest",
                R = this.getAppLinkIfEnabled(b.peer.metadata, b.transportType);
              if (R)
                return (
                  await this.sendRequest({
                    clientRpcId: w,
                    relayRpcId: E,
                    topic: f,
                    method: A,
                    params: {
                      request: sign_client_dist_index_es_b(
                        sign_client_dist_index_es_v({}, _),
                        { expiryTimestamp: Ei(m) }
                      ),
                      chainId: l,
                    },
                    expiry: m,
                    throwOnFailedPublish: !0,
                    appLink: R,
                  }).catch((o) => C(o)),
                  this.client.events.emit("session_request_sent", {
                    topic: f,
                    request: _,
                    chainId: l,
                    id: w,
                  }),
                  await D()
                );
              let j = {
                  request: sign_client_dist_index_es_b(
                    sign_client_dist_index_es_v({}, _),
                    { expiryTimestamp: Ei(m) }
                  ),
                  chainId: l,
                },
                q = this.shouldSetTVF(A, j);
              return await Promise.all([
                new Promise(async (o) => {
                  await this.sendRequest(
                    sign_client_dist_index_es_v(
                      {
                        clientRpcId: w,
                        relayRpcId: E,
                        topic: f,
                        method: A,
                        params: j,
                        expiry: m,
                        throwOnFailedPublish: !0,
                      },
                      q && { tvf: this.getTVFParams(w, j) }
                    )
                  ).catch((o) => C(o)),
                    this.client.events.emit("session_request_sent", {
                      topic: f,
                      request: _,
                      chainId: l,
                      id: w,
                    }),
                    o();
                }),
                new Promise(async (o) => {
                  var l;
                  if (!(null != (l = b.sessionConfig) && l.disableDeepLink)) {
                    let o = await Oi(this.client.core.storage, oH);
                    await Si({ id: w, topic: f, wcDeepLink: o });
                  }
                  o();
                }),
                D(),
              ]).then((o) => o[2]);
            }),
            sign_client_dist_index_es_c(this, "respond", async (o) => {
              this.isInitialized(), await this.isValidRespond(o);
              let { topic: l, response: _ } = o,
                { id: f } = _,
                m = this.client.session.get(l);
              m.transportType === r5.relay &&
                (await this.confirmOnlineStateOrThrow());
              let b = this.getAppLinkIfEnabled(
                m.peer.metadata,
                m.transportType
              );
              isJsonRpcResult(_)
                ? await this.sendResult({
                    id: f,
                    topic: l,
                    result: _.result,
                    throwOnFailedPublish: !0,
                    appLink: b,
                  })
                : isJsonRpcError(_) &&
                  (await this.sendError({
                    id: f,
                    topic: l,
                    error: _.error,
                    appLink: b,
                  })),
                this.cleanupAfterResponse(o);
            }),
            sign_client_dist_index_es_c(this, "ping", async (o) => {
              this.isInitialized(), await this.confirmOnlineStateOrThrow();
              try {
                await this.isValidPing(o);
              } catch (o) {
                throw (
                  (this.client.logger.error("ping() -> isValidPing() failed"),
                  o)
                );
              }
              let { topic: l } = o;
              if (this.client.session.keys.includes(l)) {
                let o = payloadId(),
                  _ = getBigIntRpcId().toString(),
                  { done: f, resolve: m, reject: b } = gi();
                this.events.once(xi("session_ping", o), ({ error: o }) => {
                  o ? b(o) : m();
                }),
                  await Promise.all([
                    this.sendRequest({
                      topic: l,
                      method: "wc_sessionPing",
                      params: {},
                      throwOnFailedPublish: !0,
                      clientRpcId: o,
                      relayRpcId: _,
                    }),
                    f(),
                  ]);
              } else
                this.client.core.pairing.pairings.keys.includes(l) &&
                  (this.client.logger.warn(
                    "ping() on pairing topic is deprecated and will be removed in the next major release."
                  ),
                  await this.client.core.pairing.ping({ topic: l }));
            }),
            sign_client_dist_index_es_c(this, "emit", async (o) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidEmit(o);
              let { topic: l, event: _, chainId: f } = o,
                m = getBigIntRpcId().toString(),
                b = payloadId();
              await this.sendRequest({
                topic: l,
                method: "wc_sessionEvent",
                params: { event: _, chainId: f },
                throwOnFailedPublish: !0,
                relayRpcId: m,
                clientRpcId: b,
              });
            }),
            sign_client_dist_index_es_c(this, "disconnect", async (o) => {
              this.isInitialized(),
                await this.confirmOnlineStateOrThrow(),
                await this.isValidDisconnect(o);
              let { topic: l } = o;
              if (this.client.session.keys.includes(l))
                await this.sendRequest({
                  topic: l,
                  method: "wc_sessionDelete",
                  params: index_es_Nt("USER_DISCONNECTED"),
                  throwOnFailedPublish: !0,
                }),
                  await this.deleteSession({ topic: l, emitEvent: !1 });
              else if (this.client.core.pairing.pairings.keys.includes(l))
                await this.client.core.pairing.disconnect({ topic: l });
              else {
                let { message: o } = index_es_ht(
                  "MISMATCHED_TOPIC",
                  `Session or pairing topic not found: ${l}`
                );
                throw Error(o);
              }
            }),
            sign_client_dist_index_es_c(
              this,
              "find",
              (o) => (
                this.isInitialized(),
                this.client.session.getAll().filter((l) =>
                  (function (o, l) {
                    let { requiredNamespaces: _ } = l,
                      f = Object.keys(o.namespaces),
                      m = Object.keys(_),
                      b = !0;
                    return (
                      !!index_es_gt(m, f) &&
                      (f.forEach((l) => {
                        let {
                            accounts: f,
                            methods: m,
                            events: w,
                          } = o.namespaces[l],
                          E = index_es_It(f),
                          D = _[l];
                        (index_es_gt(ce(l, D), E) &&
                          index_es_gt(D.methods, m) &&
                          index_es_gt(D.events, w)) ||
                          (b = !1);
                      }),
                      b)
                    );
                  })(l, o)
                )
              )
            ),
            sign_client_dist_index_es_c(this, "getPendingSessionRequests", () =>
              this.client.pendingRequest.getAll()
            ),
            sign_client_dist_index_es_c(this, "authenticate", async (o, l) => {
              var _;
              let f;
              this.isInitialized(), this.isValidAuthenticate(o);
              let m =
                  l &&
                  this.client.core.linkModeSupportedApps.includes(l) &&
                  (null == (_ = this.client.metadata.redirect)
                    ? void 0
                    : _.linkMode),
                b = m ? r5.link_mode : r5.relay;
              b === r5.relay && (await this.confirmOnlineStateOrThrow());
              let {
                  chains: w,
                  statement: E = "",
                  uri: D,
                  domain: P,
                  nonce: C,
                  type: A,
                  exp: R,
                  nbf: j,
                  methods: q = [],
                  expiry: M,
                } = o,
                $ = [...(o.resources || [])],
                { topic: K, uri: G } = await this.client.core.pairing.create({
                  methods: ["wc_sessionAuthenticate"],
                  transportType: b,
                });
              this.client.logger.info({
                message: "Generated new pairing",
                pairing: { topic: K, uri: G },
              });
              let Y = await this.client.core.crypto.generateKeyPair(),
                Q = Pc(Y);
              if (
                (await Promise.all([
                  this.client.auth.authKeys.set(oQ, {
                    responseTopic: Q,
                    publicKey: Y,
                  }),
                  this.client.auth.pairingTopics.set(Q, {
                    topic: Q,
                    pairingTopic: K,
                  }),
                ]),
                await this.client.core.relayer.subscribe(Q, {
                  transportType: b,
                }),
                this.client.logger.info(
                  `sending request to new pairing topic: ${K}`
                ),
                q.length > 0)
              ) {
                let { namespace: o } = index_es_Ie(w[0]),
                  l = (function (o, l, _) {
                    let f = (function (o, l, _, f = {}) {
                      return (
                        _?.sort((o, l) => o.localeCompare(l)),
                        {
                          att: {
                            [o]: (function (o, l, _ = {}) {
                              l = l?.sort((o, l) => o.localeCompare(l));
                              let f = l.map((l) => ({ [`${o}/${l}`]: [_] }));
                              return Object.assign({}, ...f);
                            })(l, _, f),
                          },
                        }
                      );
                    })(o, l, _);
                    return index_es_le(f);
                  })(o, "request", q);
                index_es_de($) &&
                  (l = (function (o, l) {
                    let _ = index_es_yt(o),
                      f = index_es_yt(l),
                      m = (function (o, l) {
                        index_es_ct(o), index_es_ct(l);
                        let _ = Object.keys(o.att)
                            .concat(Object.keys(l.att))
                            .sort((o, l) => o.localeCompare(l)),
                          f = { att: {} };
                        return (
                          _.forEach((_) => {
                            var m, b;
                            Object.keys(
                              (null == (m = o.att) ? void 0 : m[_]) || {}
                            )
                              .concat(
                                Object.keys(
                                  (null == (b = l.att) ? void 0 : b[_]) || {}
                                )
                              )
                              .sort((o, l) => o.localeCompare(l))
                              .forEach((m) => {
                                var b, w;
                                f.att[_] = index_es_fr(
                                  index_es_Ve({}, f.att[_]),
                                  {
                                    [m]:
                                      (null == (b = o.att[_])
                                        ? void 0
                                        : b[m]) ||
                                      (null == (w = l.att[_]) ? void 0 : w[m]),
                                  }
                                );
                              });
                          }),
                          f
                        );
                      })(_, f);
                    return index_es_le(m);
                  })(l, $.pop())),
                  $.push(l);
              }
              let Z =
                  M && M > oK.wc_sessionAuthenticate.req.ttl
                    ? M
                    : oK.wc_sessionAuthenticate.req.ttl,
                ei = {
                  authPayload: {
                    type: A ?? "caip122",
                    chains: w,
                    statement: E,
                    aud: D,
                    domain: P,
                    version: "1",
                    nonce: C,
                    iat: new Date().toISOString(),
                    exp: R,
                    nbf: j,
                    resources: $,
                  },
                  requester: { publicKey: Y, metadata: this.client.metadata },
                  expiryTimestamp: Ei(Z),
                },
                es = {
                  eip155: {
                    chains: w,
                    methods: [...new Set(["personal_sign", ...q])],
                    events: ["chainChanged", "accountsChanged"],
                  },
                },
                en = {
                  requiredNamespaces: {},
                  optionalNamespaces: es,
                  relays: [{ protocol: "irn" }],
                  pairingTopic: K,
                  proposer: { publicKey: Y, metadata: this.client.metadata },
                  expiryTimestamp: Ei(oK.wc_sessionPropose.req.ttl),
                  id: payloadId(),
                },
                {
                  done: eo,
                  resolve: ea,
                  reject: ec,
                } = gi(Z, "Request expired"),
                ed = payloadId(),
                el = xi("session_connect", en.id),
                eh = xi("session_request", ed),
                pe = async ({ error: o, session: l }) => {
                  this.events.off(eh, ve), o ? ec(o) : l && ea({ session: l });
                },
                ve = async (o) => {
                  var _, f, m;
                  let w;
                  if (
                    (await this.deletePendingAuthRequest(ed, {
                      message: "fulfilled",
                      code: 0,
                    }),
                    o.error)
                  ) {
                    let l = index_es_Nt(
                      "WC_METHOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return o.error.code === l.code
                      ? void 0
                      : (this.events.off(el, pe), ec(o.error.message));
                  }
                  await this.deleteProposal(en.id), this.events.off(el, pe);
                  let { cacaos: E, responder: D } = o.result,
                    P = [],
                    C = [];
                  for (let o of E) {
                    (await is({
                      cacao: o,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        o,
                        "Signature verification failed"
                      ),
                      ec(
                        index_es_Nt(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    let { p: l } = o,
                      _ = index_es_de(l.resources),
                      f = [index_es_dr(l.iss)],
                      m = index_es_Me(l.iss);
                    if (_) {
                      let o = ds(_),
                        l = hs(_);
                      P.push(...o), f.push(...l);
                    }
                    for (let o of f) C.push(`${o}:${m}`);
                  }
                  let A = await this.client.core.crypto.generateSharedKey(
                    Y,
                    D.publicKey
                  );
                  P.length > 0 &&
                    ((w = {
                      topic: A,
                      acknowledged: !0,
                      self: { publicKey: Y, metadata: this.client.metadata },
                      peer: D,
                      controller: D.publicKey,
                      expiry: Ei(oV),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: K,
                      namespaces: ca([...new Set(P)], [...new Set(C)]),
                      transportType: b,
                    }),
                    await this.client.core.relayer.subscribe(A, {
                      transportType: b,
                    }),
                    await this.client.session.set(A, w),
                    K &&
                      (await this.client.core.pairing.updateMetadata({
                        topic: K,
                        metadata: D.metadata,
                      })),
                    (w = this.client.session.get(A))),
                    null != (_ = this.client.metadata.redirect) &&
                      _.linkMode &&
                      null != (f = D.metadata.redirect) &&
                      f.linkMode &&
                      null != (m = D.metadata.redirect) &&
                      m.universal &&
                      l &&
                      (this.client.core.addLinkModeSupportedApp(
                        D.metadata.redirect.universal
                      ),
                      this.client.session.update(A, {
                        transportType: r5.link_mode,
                      })),
                    ea({ auths: E, session: w });
                };
              this.events.once(el, pe), this.events.once(eh, ve);
              try {
                if (m) {
                  let o = formatJsonRpcRequest(
                    "wc_sessionAuthenticate",
                    ei,
                    ed
                  );
                  this.client.core.history.set(K, o);
                  let _ = await this.client.core.crypto.encode("", o, {
                    type: 2,
                    encoding: r_,
                  });
                  f = Xc(l, K, _);
                } else
                  await Promise.all([
                    this.sendRequest({
                      topic: K,
                      method: "wc_sessionAuthenticate",
                      params: ei,
                      expiry: o.expiry,
                      throwOnFailedPublish: !0,
                      clientRpcId: ed,
                    }),
                    this.sendRequest({
                      topic: K,
                      method: "wc_sessionPropose",
                      params: en,
                      expiry: oK.wc_sessionPropose.req.ttl,
                      throwOnFailedPublish: !0,
                      clientRpcId: en.id,
                    }),
                  ]);
              } catch (o) {
                throw (this.events.off(el, pe), this.events.off(eh, ve), o);
              }
              return (
                await this.setProposal(en.id, en),
                await this.setAuthRequest(ed, {
                  request: sign_client_dist_index_es_b(
                    sign_client_dist_index_es_v({}, ei),
                    { verifyContext: {} }
                  ),
                  pairingTopic: K,
                  transportType: b,
                }),
                { uri: f ?? G, response: eo }
              );
            }),
            sign_client_dist_index_es_c(
              this,
              "approveSessionAuthenticate",
              async (o) => {
                let l;
                let { id: _, auths: f } = o,
                  m = this.client.core.eventClient.createEvent({
                    properties: {
                      topic: _.toString(),
                      trace: [nl.authenticated_session_approve_started],
                    },
                  });
                try {
                  this.isInitialized();
                } catch (o) {
                  throw (m.setError(nh.no_internet_connection), o);
                }
                let b = this.getPendingAuthRequest(_);
                if (!b)
                  throw (
                    (m.setError(
                      nh.authenticated_session_pending_request_not_found
                    ),
                    Error(`Could not find pending auth request with id ${_}`))
                  );
                let w = b.transportType || r5.relay;
                w === r5.relay && (await this.confirmOnlineStateOrThrow());
                let E = b.requester.publicKey,
                  D = await this.client.core.crypto.generateKeyPair(),
                  P = Pc(E),
                  C = { type: 1, receiverPublicKey: E, senderPublicKey: D },
                  A = [],
                  R = [];
                for (let o of f) {
                  if (
                    !(await is({
                      cacao: o,
                      projectId: this.client.core.projectId,
                    }))
                  ) {
                    m.setError(nh.invalid_cacao);
                    let o = index_es_Nt(
                      "SESSION_SETTLEMENT_FAILED",
                      "Signature verification failed"
                    );
                    throw (
                      (await this.sendError({
                        id: _,
                        topic: P,
                        error: o,
                        encodeOpts: C,
                      }),
                      Error(o.message))
                    );
                  }
                  m.addTrace(nl.cacaos_verified);
                  let { p: l } = o,
                    f = index_es_de(l.resources),
                    b = [index_es_dr(l.iss)],
                    w = index_es_Me(l.iss);
                  if (f) {
                    let o = ds(f),
                      l = hs(f);
                    A.push(...o), b.push(...l);
                  }
                  for (let o of b) R.push(`${o}:${w}`);
                }
                let j = await this.client.core.crypto.generateSharedKey(D, E);
                if (
                  (m.addTrace(nl.create_authenticated_session_topic),
                  A?.length > 0)
                ) {
                  (l = {
                    topic: j,
                    acknowledged: !0,
                    self: { publicKey: D, metadata: this.client.metadata },
                    peer: { publicKey: E, metadata: b.requester.metadata },
                    controller: E,
                    expiry: Ei(oV),
                    authentication: f,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: { protocol: "irn" },
                    pairingTopic: b.pairingTopic,
                    namespaces: ca([...new Set(A)], [...new Set(R)]),
                    transportType: w,
                  }),
                    m.addTrace(nl.subscribing_authenticated_session_topic);
                  try {
                    await this.client.core.relayer.subscribe(j, {
                      transportType: w,
                    });
                  } catch (o) {
                    throw (
                      (m.setError(
                        nh.subscribe_authenticated_session_topic_failure
                      ),
                      o)
                    );
                  }
                  m.addTrace(nl.subscribe_authenticated_session_topic_success),
                    await this.client.session.set(j, l),
                    m.addTrace(nl.store_authenticated_session),
                    await this.client.core.pairing.updateMetadata({
                      topic: b.pairingTopic,
                      metadata: b.requester.metadata,
                    });
                }
                m.addTrace(nl.publishing_authenticated_session_approve);
                try {
                  await this.sendResult({
                    topic: P,
                    id: _,
                    result: {
                      cacaos: f,
                      responder: {
                        publicKey: D,
                        metadata: this.client.metadata,
                      },
                    },
                    encodeOpts: C,
                    throwOnFailedPublish: !0,
                    appLink: this.getAppLinkIfEnabled(b.requester.metadata, w),
                  });
                } catch (o) {
                  throw (
                    (m.setError(
                      nh.authenticated_session_approve_publish_failure
                    ),
                    o)
                  );
                }
                return (
                  await this.client.auth.requests.delete(_, {
                    message: "fulfilled",
                    code: 0,
                  }),
                  await this.client.core.pairing.activate({
                    topic: b.pairingTopic,
                  }),
                  this.client.core.eventClient.deleteEvent({
                    eventId: m.eventId,
                  }),
                  { session: l }
                );
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "rejectSessionAuthenticate",
              async (o) => {
                this.isInitialized();
                let { id: l, reason: _ } = o,
                  f = this.getPendingAuthRequest(l);
                if (!f)
                  throw Error(
                    `Could not find pending auth request with id ${l}`
                  );
                f.transportType === r5.relay &&
                  (await this.confirmOnlineStateOrThrow());
                let m = f.requester.publicKey,
                  b = await this.client.core.crypto.generateKeyPair(),
                  w = Pc(m);
                await this.sendError({
                  id: l,
                  topic: w,
                  error: _,
                  encodeOpts: {
                    type: 1,
                    receiverPublicKey: m,
                    senderPublicKey: b,
                  },
                  rpcOpts: oK.wc_sessionAuthenticate.reject,
                  appLink: this.getAppLinkIfEnabled(
                    f.requester.metadata,
                    f.transportType
                  ),
                }),
                  await this.client.auth.requests.delete(l, {
                    message: "rejected",
                    code: 0,
                  }),
                  await this.client.proposal.delete(
                    l,
                    index_es_Nt("USER_DISCONNECTED")
                  );
              }
            ),
            sign_client_dist_index_es_c(this, "formatAuthMessage", (o) => {
              this.isInitialized();
              let { request: l, iss: _ } = o;
              return index_es_hr(l, _);
            }),
            sign_client_dist_index_es_c(
              this,
              "processRelayMessageCache",
              () => {
                setTimeout(async () => {
                  if (0 !== this.relayMessageCache.length)
                    for (; this.relayMessageCache.length > 0; )
                      try {
                        let o = this.relayMessageCache.shift();
                        o && (await this.onRelayMessage(o));
                      } catch (o) {
                        this.client.logger.error(o);
                      }
                }, 50);
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "cleanupDuplicatePairings",
              async (o) => {
                if (o.pairingTopic)
                  try {
                    let l = this.client.core.pairing.pairings.get(
                        o.pairingTopic
                      ),
                      _ = this.client.core.pairing.pairings
                        .getAll()
                        .filter((_) => {
                          var f, m;
                          return (
                            (null == (f = _.peerMetadata) ? void 0 : f.url) &&
                            (null == (m = _.peerMetadata) ? void 0 : m.url) ===
                              o.peer.metadata.url &&
                            _.topic &&
                            _.topic !== l.topic
                          );
                        });
                    if (0 === _.length) return;
                    this.client.logger.info(
                      `Cleaning up ${_.length} duplicate pairing(s)`
                    ),
                      await Promise.all(
                        _.map((o) =>
                          this.client.core.pairing.disconnect({
                            topic: o.topic,
                          })
                        )
                      ),
                      this.client.logger.info(
                        "Duplicate pairings clean up finished"
                      );
                  } catch (o) {
                    this.client.logger.error(o);
                  }
              }
            ),
            sign_client_dist_index_es_c(this, "deleteSession", async (o) => {
              var l;
              let {
                  topic: _,
                  expirerHasDeleted: f = !1,
                  emitEvent: m = !0,
                  id: b = 0,
                } = o,
                { self: w } = this.client.session.get(_);
              await this.client.core.relayer.unsubscribe(_),
                await this.client.session.delete(
                  _,
                  index_es_Nt("USER_DISCONNECTED")
                ),
                this.addToRecentlyDeleted(_, "session"),
                this.client.core.crypto.keychain.has(w.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(w.publicKey)),
                this.client.core.crypto.keychain.has(_) &&
                  (await this.client.core.crypto.deleteSymKey(_)),
                f || this.client.core.expirer.del(_),
                this.client.core.storage
                  .removeItem(oH)
                  .catch((o) => this.client.logger.warn(o)),
                this.getPendingSessionRequests().forEach((o) => {
                  o.topic === _ &&
                    this.deletePendingSessionRequest(
                      o.id,
                      index_es_Nt("USER_DISCONNECTED")
                    );
                }),
                _ ===
                  (null == (l = this.sessionRequestQueue.queue[0])
                    ? void 0
                    : l.topic) && (this.sessionRequestQueue.state = oG.idle),
                m &&
                  this.client.events.emit("session_delete", {
                    id: b,
                    topic: _,
                  });
            }),
            sign_client_dist_index_es_c(
              this,
              "deleteProposal",
              async (o, l) => {
                if (l)
                  try {
                    let l = this.client.proposal.get(o),
                      _ = this.client.core.eventClient.getEvent({
                        topic: l.pairingTopic,
                      });
                    _?.setError(nd.proposal_expired);
                  } catch {}
                await Promise.all([
                  this.client.proposal.delete(
                    o,
                    index_es_Nt("USER_DISCONNECTED")
                  ),
                  l ? Promise.resolve() : this.client.core.expirer.del(o),
                ]),
                  this.addToRecentlyDeleted(o, "proposal");
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "deletePendingSessionRequest",
              async (o, l, _ = !1) => {
                await Promise.all([
                  this.client.pendingRequest.delete(o, l),
                  _ ? Promise.resolve() : this.client.core.expirer.del(o),
                ]),
                  this.addToRecentlyDeleted(o, "request"),
                  (this.sessionRequestQueue.queue =
                    this.sessionRequestQueue.queue.filter((l) => l.id !== o)),
                  _ &&
                    ((this.sessionRequestQueue.state = oG.idle),
                    this.client.events.emit("session_request_expire", {
                      id: o,
                    }));
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "deletePendingAuthRequest",
              async (o, l, _ = !1) => {
                await Promise.all([
                  this.client.auth.requests.delete(o, l),
                  _ ? Promise.resolve() : this.client.core.expirer.del(o),
                ]);
              }
            ),
            sign_client_dist_index_es_c(this, "setExpiry", async (o, l) => {
              this.client.session.keys.includes(o) &&
                (this.client.core.expirer.set(o, l),
                await this.client.session.update(o, { expiry: l }));
            }),
            sign_client_dist_index_es_c(this, "setProposal", async (o, l) => {
              this.client.core.expirer.set(o, Ei(oK.wc_sessionPropose.req.ttl)),
                await this.client.proposal.set(o, l);
            }),
            sign_client_dist_index_es_c(
              this,
              "setAuthRequest",
              async (o, l) => {
                let {
                  request: _,
                  pairingTopic: f,
                  transportType: m = r5.relay,
                } = l;
                this.client.core.expirer.set(o, _.expiryTimestamp),
                  await this.client.auth.requests.set(o, {
                    authPayload: _.authPayload,
                    requester: _.requester,
                    expiryTimestamp: _.expiryTimestamp,
                    id: o,
                    pairingTopic: f,
                    verifyContext: _.verifyContext,
                    transportType: m,
                  });
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "setPendingSessionRequest",
              async (o) => {
                let { id: l, topic: _, params: f, verifyContext: m } = o,
                  b =
                    f.request.expiryTimestamp ||
                    Ei(oK.wc_sessionRequest.req.ttl);
                this.client.core.expirer.set(l, b),
                  await this.client.pendingRequest.set(l, {
                    id: l,
                    topic: _,
                    params: f,
                    verifyContext: m,
                  });
              }
            ),
            sign_client_dist_index_es_c(this, "sendRequest", async (o) => {
              let l, f;
              let {
                  topic: m,
                  method: b,
                  params: w,
                  expiry: E,
                  relayRpcId: D,
                  clientRpcId: P,
                  throwOnFailedPublish: C,
                  appLink: A,
                  tvf: R,
                } = o,
                j = formatJsonRpcRequest(b, w, P),
                q = !!A;
              try {
                let o = q ? r_ : ru;
                l = await this.client.core.crypto.encode(m, j, { encoding: o });
              } catch (o) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendRequest() -> core.crypto.encode() for topic ${m} failed`
                  ),
                  o)
                );
              }
              if (oY.includes(b)) {
                let o = kc(JSON.stringify(j)),
                  _ = kc(l);
                f = await this.client.core.verify.register({
                  id: _,
                  decryptedId: o,
                });
              }
              let M = oK[b].req;
              if (
                ((M.attestation = f),
                E && (M.ttl = E),
                D && (M.id = D),
                this.client.core.history.set(m, j),
                q)
              ) {
                let o = Xc(A, m, l);
                await _.g.Linking.openURL(o, this.client.name);
              } else {
                let o = oK[b].req;
                E && (o.ttl = E),
                  D && (o.id = D),
                  (o.tvf = sign_client_dist_index_es_b(
                    sign_client_dist_index_es_v({}, R),
                    { correlationId: j.id }
                  )),
                  C
                    ? ((o.internal = sign_client_dist_index_es_b(
                        sign_client_dist_index_es_v({}, o.internal),
                        { throwOnFailedPublish: !0 }
                      )),
                      await this.client.core.relayer.publish(m, l, o))
                    : this.client.core.relayer
                        .publish(m, l, o)
                        .catch((o) => this.client.logger.error(o));
              }
              return j.id;
            }),
            sign_client_dist_index_es_c(this, "sendResult", async (o) => {
              let l, f, m;
              let {
                  id: b,
                  topic: w,
                  result: E,
                  throwOnFailedPublish: D,
                  encodeOpts: P,
                  appLink: C,
                } = o,
                A = formatJsonRpcResult(b, E),
                R = C && "u" > typeof (null == _.g ? void 0 : _.g.Linking);
              try {
                let o = R ? r_ : ru;
                l = await this.client.core.crypto.encode(
                  w,
                  A,
                  sign_client_dist_index_es_b(
                    sign_client_dist_index_es_v({}, P || {}),
                    { encoding: o }
                  )
                );
              } catch (o) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendResult() -> core.crypto.encode() for topic ${w} failed`
                  ),
                  o)
                );
              }
              try {
                f = await this.client.core.history.get(w, b);
                let o = f.request;
                try {
                  this.shouldSetTVF(o.method, o.params) &&
                    (m = this.getTVFParams(b, o.params, E));
                } catch (o) {
                  this.client.logger.warn(
                    "sendResult() -> getTVFParams() failed",
                    o
                  );
                }
              } catch (o) {
                throw (
                  (this.client.logger.error(
                    `sendResult() -> history.get(${w}, ${b}) failed`
                  ),
                  o)
                );
              }
              if (R) {
                let o = Xc(C, w, l);
                await _.g.Linking.openURL(o, this.client.name);
              } else {
                let o = f.request.method,
                  _ = oK[o].res;
                (_.tvf = sign_client_dist_index_es_b(
                  sign_client_dist_index_es_v({}, m),
                  { correlationId: b }
                )),
                  D
                    ? ((_.internal = sign_client_dist_index_es_b(
                        sign_client_dist_index_es_v({}, _.internal),
                        { throwOnFailedPublish: !0 }
                      )),
                      await this.client.core.relayer.publish(w, l, _))
                    : this.client.core.relayer
                        .publish(w, l, _)
                        .catch((o) => this.client.logger.error(o));
              }
              await this.client.core.history.resolve(A);
            }),
            sign_client_dist_index_es_c(this, "sendError", async (o) => {
              let l, f;
              let {
                  id: m,
                  topic: b,
                  error: w,
                  encodeOpts: E,
                  rpcOpts: D,
                  appLink: P,
                } = o,
                C = formatJsonRpcError(m, w),
                A = P && "u" > typeof (null == _.g ? void 0 : _.g.Linking);
              try {
                let o = A ? r_ : ru;
                l = await this.client.core.crypto.encode(
                  b,
                  C,
                  sign_client_dist_index_es_b(
                    sign_client_dist_index_es_v({}, E || {}),
                    { encoding: o }
                  )
                );
              } catch (o) {
                throw (
                  (await this.cleanup(),
                  this.client.logger.error(
                    `sendError() -> core.crypto.encode() for topic ${b} failed`
                  ),
                  o)
                );
              }
              try {
                f = await this.client.core.history.get(b, m);
              } catch (o) {
                throw (
                  (this.client.logger.error(
                    `sendError() -> history.get(${b}, ${m}) failed`
                  ),
                  o)
                );
              }
              if (A) {
                let o = Xc(P, b, l);
                await _.g.Linking.openURL(o, this.client.name);
              } else {
                let o = f.request.method,
                  _ = D || oK[o].res;
                this.client.core.relayer.publish(b, l, _);
              }
              await this.client.core.history.resolve(C);
            }),
            sign_client_dist_index_es_c(this, "cleanup", async () => {
              let o = [],
                l = [];
              this.client.session.getAll().forEach((l) => {
                let _ = !1;
                vi(l.expiry) && (_ = !0),
                  this.client.core.crypto.keychain.has(l.topic) || (_ = !0),
                  _ && o.push(l.topic);
              }),
                this.client.proposal.getAll().forEach((o) => {
                  vi(o.expiryTimestamp) && l.push(o.id);
                }),
                await Promise.all([
                  ...o.map((o) => this.deleteSession({ topic: o })),
                  ...l.map((o) => this.deleteProposal(o)),
                ]);
            }),
            sign_client_dist_index_es_c(
              this,
              "onProviderMessageEvent",
              async (o) => {
                !this.initialized || this.relayMessageCache.length > 0
                  ? this.relayMessageCache.push(o)
                  : await this.onRelayMessage(o);
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onRelayEventRequest",
              async (o) => {
                this.requestQueue.queue.push(o),
                  await this.processRequestsQueue();
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "processRequestsQueue",
              async () => {
                if (this.requestQueue.state === oG.active) {
                  this.client.logger.info(
                    "Request queue already active, skipping..."
                  );
                  return;
                }
                for (
                  this.client.logger.info(
                    `Request queue starting with ${this.requestQueue.queue.length} requests`
                  );
                  this.requestQueue.queue.length > 0;

                ) {
                  this.requestQueue.state = oG.active;
                  let o = this.requestQueue.queue.shift();
                  if (o)
                    try {
                      await this.processRequest(o);
                    } catch (o) {
                      this.client.logger.warn(o);
                    }
                }
                this.requestQueue.state = oG.idle;
              }
            ),
            sign_client_dist_index_es_c(this, "processRequest", async (o) => {
              let {
                  topic: l,
                  payload: _,
                  attestation: f,
                  transportType: m,
                  encryptedId: b,
                } = o,
                w = _.method;
              if (
                !this.shouldIgnorePairingRequest({ topic: l, requestMethod: w })
              )
                switch (w) {
                  case "wc_sessionPropose":
                    return await this.onSessionProposeRequest({
                      topic: l,
                      payload: _,
                      attestation: f,
                      encryptedId: b,
                    });
                  case "wc_sessionSettle":
                    return await this.onSessionSettleRequest(l, _);
                  case "wc_sessionUpdate":
                    return await this.onSessionUpdateRequest(l, _);
                  case "wc_sessionExtend":
                    return await this.onSessionExtendRequest(l, _);
                  case "wc_sessionPing":
                    return await this.onSessionPingRequest(l, _);
                  case "wc_sessionDelete":
                    return await this.onSessionDeleteRequest(l, _);
                  case "wc_sessionRequest":
                    return await this.onSessionRequest({
                      topic: l,
                      payload: _,
                      attestation: f,
                      encryptedId: b,
                      transportType: m,
                    });
                  case "wc_sessionEvent":
                    return await this.onSessionEventRequest(l, _);
                  case "wc_sessionAuthenticate":
                    return await this.onSessionAuthenticateRequest({
                      topic: l,
                      payload: _,
                      attestation: f,
                      encryptedId: b,
                      transportType: m,
                    });
                  default:
                    return this.client.logger.info(
                      `Unsupported request method ${w}`
                    );
                }
            }),
            sign_client_dist_index_es_c(
              this,
              "onRelayEventResponse",
              async (o) => {
                let { topic: l, payload: _, transportType: f } = o,
                  m = (await this.client.core.history.get(l, _.id)).request
                    .method;
                switch (m) {
                  case "wc_sessionPropose":
                    return this.onSessionProposeResponse(l, _, f);
                  case "wc_sessionSettle":
                    return this.onSessionSettleResponse(l, _);
                  case "wc_sessionUpdate":
                    return this.onSessionUpdateResponse(l, _);
                  case "wc_sessionExtend":
                    return this.onSessionExtendResponse(l, _);
                  case "wc_sessionPing":
                    return this.onSessionPingResponse(l, _);
                  case "wc_sessionRequest":
                    return this.onSessionRequestResponse(l, _);
                  case "wc_sessionAuthenticate":
                    return this.onSessionAuthenticateResponse(l, _);
                  default:
                    return this.client.logger.info(
                      `Unsupported response method ${m}`
                    );
                }
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onRelayEventUnknownPayload",
              (o) => {
                let { topic: l } = o,
                  { message: _ } = index_es_ht(
                    "MISSING_OR_INVALID",
                    `Decoded payload on topic ${l} is not identifiable as a JSON-RPC request or a response.`
                  );
                throw Error(_);
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "shouldIgnorePairingRequest",
              (o) => {
                let { topic: l, requestMethod: _ } = o,
                  f = this.expectedPairingMethodMap.get(l);
                return (
                  !(!f || f.includes(_)) &&
                  !!(
                    f.includes("wc_sessionAuthenticate") &&
                    this.client.events.listenerCount("session_authenticate") > 0
                  )
                );
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionProposeRequest",
              async (o) => {
                let {
                    topic: l,
                    payload: _,
                    attestation: f,
                    encryptedId: m,
                  } = o,
                  { params: b, id: w } = _;
                try {
                  let o = this.client.core.eventClient.getEvent({ topic: l });
                  0 === this.client.events.listenerCount("session_proposal") &&
                    (console.warn("No listener for session_proposal event"),
                    o?.setError(na.proposal_listener_not_found)),
                    this.isValidConnect(
                      sign_client_dist_index_es_v({}, _.params)
                    );
                  let E = b.expiryTimestamp || Ei(oK.wc_sessionPropose.req.ttl),
                    D = sign_client_dist_index_es_v(
                      { id: w, pairingTopic: l, expiryTimestamp: E },
                      b
                    );
                  await this.setProposal(w, D);
                  let P = await this.getVerifyContext({
                    attestationId: f,
                    hash: kc(JSON.stringify(_)),
                    encryptedId: m,
                    metadata: D.proposer.metadata,
                  });
                  o?.addTrace(no.emit_session_proposal),
                    this.client.events.emit("session_proposal", {
                      id: w,
                      params: D,
                      verifyContext: P,
                    });
                } catch (o) {
                  await this.sendError({
                    id: w,
                    topic: l,
                    error: o,
                    rpcOpts: oK.wc_sessionPropose.autoReject,
                  }),
                    this.client.logger.error(o);
                }
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionProposeResponse",
              async (o, l, _) => {
                let { id: f } = l;
                if (isJsonRpcResult(l)) {
                  let { result: m } = l;
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: m,
                  });
                  let b = this.client.proposal.get(f);
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: b,
                  });
                  let w = b.proposer.publicKey;
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: w,
                  });
                  let E = m.responderPublicKey;
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: E,
                  });
                  let D = await this.client.core.crypto.generateSharedKey(w, E);
                  this.pendingSessions.set(f, {
                    sessionTopic: D,
                    pairingTopic: o,
                    proposalId: f,
                    publicKey: w,
                  });
                  let P = await this.client.core.relayer.subscribe(D, {
                    transportType: _,
                  });
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: P,
                  }),
                    await this.client.core.pairing.activate({ topic: o });
                } else if (isJsonRpcError(l)) {
                  await this.client.proposal.delete(
                    f,
                    index_es_Nt("USER_DISCONNECTED")
                  );
                  let o = xi("session_connect", f);
                  if (0 === this.events.listenerCount(o))
                    throw Error(`emitting ${o} without any listeners, 954`);
                  this.events.emit(o, { error: l.error });
                }
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionSettleRequest",
              async (o, l) => {
                let { id: _, params: f } = l;
                try {
                  this.isValidSessionSettleRequest(f);
                  let {
                      relay: _,
                      controller: m,
                      expiry: b,
                      namespaces: w,
                      sessionProperties: E,
                      scopedProperties: D,
                      sessionConfig: P,
                    } = l.params,
                    C = [...this.pendingSessions.values()].find(
                      (l) => l.sessionTopic === o
                    );
                  if (!C)
                    return this.client.logger.error(
                      `Pending session not found for topic ${o}`
                    );
                  let A = this.client.proposal.get(C.proposalId),
                    R = sign_client_dist_index_es_b(
                      sign_client_dist_index_es_v(
                        sign_client_dist_index_es_v(
                          sign_client_dist_index_es_v(
                            {
                              topic: o,
                              relay: _,
                              expiry: b,
                              namespaces: w,
                              acknowledged: !0,
                              pairingTopic: C.pairingTopic,
                              requiredNamespaces: A.requiredNamespaces,
                              optionalNamespaces: A.optionalNamespaces,
                              controller: m.publicKey,
                              self: {
                                publicKey: C.publicKey,
                                metadata: this.client.metadata,
                              },
                              peer: {
                                publicKey: m.publicKey,
                                metadata: m.metadata,
                              },
                            },
                            E && { sessionProperties: E }
                          ),
                          D && { scopedProperties: D }
                        ),
                        P && { sessionConfig: P }
                      ),
                      { transportType: r5.relay }
                    );
                  await this.client.session.set(R.topic, R),
                    await this.setExpiry(R.topic, R.expiry),
                    await this.client.core.pairing.updateMetadata({
                      topic: C.pairingTopic,
                      metadata: R.peer.metadata,
                    }),
                    this.client.events.emit("session_connect", { session: R }),
                    this.events.emit(xi("session_connect", C.proposalId), {
                      session: R,
                    }),
                    this.pendingSessions.delete(C.proposalId),
                    this.deleteProposal(C.proposalId, !1),
                    this.cleanupDuplicatePairings(R),
                    await this.sendResult({
                      id: l.id,
                      topic: o,
                      result: !0,
                      throwOnFailedPublish: !0,
                    });
                } catch (l) {
                  await this.sendError({ id: _, topic: o, error: l }),
                    this.client.logger.error(l);
                }
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionSettleResponse",
              async (o, l) => {
                let { id: _ } = l;
                isJsonRpcResult(l)
                  ? (await this.client.session.update(o, { acknowledged: !0 }),
                    this.events.emit(xi("session_approve", _), {}))
                  : isJsonRpcError(l) &&
                    (await this.client.session.delete(
                      o,
                      index_es_Nt("USER_DISCONNECTED")
                    ),
                    this.events.emit(xi("session_approve", _), {
                      error: l.error,
                    }));
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionUpdateRequest",
              async (o, l) => {
                let { params: _, id: f } = l;
                try {
                  let l = `${o}_session_update`,
                    m = Ua.get(l);
                  if (m && this.isRequestOutOfSync(m, f)) {
                    this.client.logger.warn(
                      `Discarding out of sync request - ${f}`
                    ),
                      this.sendError({
                        id: f,
                        topic: o,
                        error: index_es_Nt("INVALID_UPDATE_REQUEST"),
                      });
                    return;
                  }
                  this.isValidUpdate(
                    sign_client_dist_index_es_v({ topic: o }, _)
                  );
                  try {
                    Ua.set(l, f),
                      await this.client.session.update(o, {
                        namespaces: _.namespaces,
                      }),
                      await this.sendResult({
                        id: f,
                        topic: o,
                        result: !0,
                        throwOnFailedPublish: !0,
                      });
                  } catch (o) {
                    throw (Ua.delete(l), o);
                  }
                  this.client.events.emit("session_update", {
                    id: f,
                    topic: o,
                    params: _,
                  });
                } catch (l) {
                  await this.sendError({ id: f, topic: o, error: l }),
                    this.client.logger.error(l);
                }
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "isRequestOutOfSync",
              (o, l) => l.toString().slice(0, -3) < o.toString().slice(0, -3)
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionUpdateResponse",
              (o, l) => {
                let { id: _ } = l,
                  f = xi("session_update", _);
                if (0 === this.events.listenerCount(f))
                  throw Error(`emitting ${f} without any listeners`);
                isJsonRpcResult(l)
                  ? this.events.emit(xi("session_update", _), {})
                  : isJsonRpcError(l) &&
                    this.events.emit(xi("session_update", _), {
                      error: l.error,
                    });
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionExtendRequest",
              async (o, l) => {
                let { id: _ } = l;
                try {
                  this.isValidExtend({ topic: o }),
                    await this.setExpiry(o, Ei(oV)),
                    await this.sendResult({
                      id: _,
                      topic: o,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.client.events.emit("session_extend", {
                      id: _,
                      topic: o,
                    });
                } catch (l) {
                  await this.sendError({ id: _, topic: o, error: l }),
                    this.client.logger.error(l);
                }
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionExtendResponse",
              (o, l) => {
                let { id: _ } = l,
                  f = xi("session_extend", _);
                if (0 === this.events.listenerCount(f))
                  throw Error(`emitting ${f} without any listeners`);
                isJsonRpcResult(l)
                  ? this.events.emit(xi("session_extend", _), {})
                  : isJsonRpcError(l) &&
                    this.events.emit(xi("session_extend", _), {
                      error: l.error,
                    });
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionPingRequest",
              async (o, l) => {
                let { id: _ } = l;
                try {
                  this.isValidPing({ topic: o }),
                    await this.sendResult({
                      id: _,
                      topic: o,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.client.events.emit("session_ping", {
                      id: _,
                      topic: o,
                    });
                } catch (l) {
                  await this.sendError({ id: _, topic: o, error: l }),
                    this.client.logger.error(l);
                }
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionPingResponse",
              (o, l) => {
                let { id: _ } = l,
                  f = xi("session_ping", _);
                setTimeout(() => {
                  if (0 === this.events.listenerCount(f))
                    throw Error(`emitting ${f} without any listeners 2176`);
                  isJsonRpcResult(l)
                    ? this.events.emit(xi("session_ping", _), {})
                    : isJsonRpcError(l) &&
                      this.events.emit(xi("session_ping", _), {
                        error: l.error,
                      });
                }, 500);
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionDeleteRequest",
              async (o, l) => {
                let { id: _ } = l;
                try {
                  this.isValidDisconnect({ topic: o, reason: l.params }),
                    Promise.all([
                      new Promise((l) => {
                        this.client.core.relayer.once(r2.publish, async () => {
                          l(await this.deleteSession({ topic: o, id: _ }));
                        });
                      }),
                      this.sendResult({
                        id: _,
                        topic: o,
                        result: !0,
                        throwOnFailedPublish: !0,
                      }),
                      this.cleanupPendingSentRequestsForTopic({
                        topic: o,
                        error: index_es_Nt("USER_DISCONNECTED"),
                      }),
                    ]).catch((o) => this.client.logger.error(o));
                } catch (o) {
                  this.client.logger.error(o);
                }
              }
            ),
            sign_client_dist_index_es_c(this, "onSessionRequest", async (o) => {
              var l, _, f;
              let {
                  topic: m,
                  payload: b,
                  attestation: w,
                  encryptedId: E,
                  transportType: D,
                } = o,
                { id: P, params: C } = b;
              try {
                await this.isValidRequest(
                  sign_client_dist_index_es_v({ topic: m }, C)
                );
                let o = this.client.session.get(m),
                  b = await this.getVerifyContext({
                    attestationId: w,
                    hash: kc(
                      JSON.stringify(
                        formatJsonRpcRequest("wc_sessionRequest", C, P)
                      )
                    ),
                    encryptedId: E,
                    metadata: o.peer.metadata,
                    transportType: D,
                  }),
                  A = { id: P, topic: m, params: C, verifyContext: b };
                await this.setPendingSessionRequest(A),
                  D === r5.link_mode &&
                    null != (l = o.peer.metadata.redirect) &&
                    l.universal &&
                    this.client.core.addLinkModeSupportedApp(
                      null == (_ = o.peer.metadata.redirect)
                        ? void 0
                        : _.universal
                    ),
                  null != (f = this.client.signConfig) && f.disableRequestQueue
                    ? this.emitSessionRequest(A)
                    : (this.addSessionRequestToSessionRequestQueue(A),
                      this.processSessionRequestQueue());
              } catch (o) {
                await this.sendError({ id: P, topic: m, error: o }),
                  this.client.logger.error(o);
              }
            }),
            sign_client_dist_index_es_c(
              this,
              "onSessionRequestResponse",
              (o, l) => {
                let { id: _ } = l,
                  f = xi("session_request", _);
                if (0 === this.events.listenerCount(f))
                  throw Error(`emitting ${f} without any listeners`);
                isJsonRpcResult(l)
                  ? this.events.emit(xi("session_request", _), {
                      result: l.result,
                    })
                  : isJsonRpcError(l) &&
                    this.events.emit(xi("session_request", _), {
                      error: l.error,
                    });
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionEventRequest",
              async (o, l) => {
                let { id: _, params: f } = l;
                try {
                  let l = `${o}_session_event_${f.event.name}`,
                    m = Ua.get(l);
                  if (m && this.isRequestOutOfSync(m, _)) {
                    this.client.logger.info(
                      `Discarding out of sync request - ${_}`
                    );
                    return;
                  }
                  this.isValidEmit(
                    sign_client_dist_index_es_v({ topic: o }, f)
                  ),
                    this.client.events.emit("session_event", {
                      id: _,
                      topic: o,
                      params: f,
                    }),
                    Ua.set(l, _);
                } catch (l) {
                  await this.sendError({ id: _, topic: o, error: l }),
                    this.client.logger.error(l);
                }
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionAuthenticateResponse",
              (o, l) => {
                let { id: _ } = l;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionAuthenticateResponse",
                  topic: o,
                  payload: l,
                }),
                  isJsonRpcResult(l)
                    ? this.events.emit(xi("session_request", _), {
                        result: l.result,
                      })
                    : isJsonRpcError(l) &&
                      this.events.emit(xi("session_request", _), {
                        error: l.error,
                      });
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "onSessionAuthenticateRequest",
              async (o) => {
                var l;
                let {
                  topic: _,
                  payload: f,
                  attestation: m,
                  encryptedId: b,
                  transportType: w,
                } = o;
                try {
                  let {
                      requester: o,
                      authPayload: E,
                      expiryTimestamp: D,
                    } = f.params,
                    P = await this.getVerifyContext({
                      attestationId: m,
                      hash: kc(JSON.stringify(f)),
                      encryptedId: b,
                      metadata: o.metadata,
                      transportType: w,
                    }),
                    C = {
                      requester: o,
                      pairingTopic: _,
                      id: f.id,
                      authPayload: E,
                      verifyContext: P,
                      expiryTimestamp: D,
                    };
                  await this.setAuthRequest(f.id, {
                    request: C,
                    pairingTopic: _,
                    transportType: w,
                  }),
                    w === r5.link_mode &&
                      null != (l = o.metadata.redirect) &&
                      l.universal &&
                      this.client.core.addLinkModeSupportedApp(
                        o.metadata.redirect.universal
                      ),
                    this.client.events.emit("session_authenticate", {
                      topic: _,
                      params: f.params,
                      id: f.id,
                      verifyContext: P,
                    });
                } catch (b) {
                  this.client.logger.error(b);
                  let o = f.params.requester.publicKey,
                    l = await this.client.core.crypto.generateKeyPair(),
                    m = this.getAppLinkIfEnabled(
                      f.params.requester.metadata,
                      w
                    );
                  await this.sendError({
                    id: f.id,
                    topic: _,
                    error: b,
                    encodeOpts: {
                      type: 1,
                      receiverPublicKey: o,
                      senderPublicKey: l,
                    },
                    rpcOpts: oK.wc_sessionAuthenticate.autoReject,
                    appLink: m,
                  });
                }
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "addSessionRequestToSessionRequestQueue",
              (o) => {
                this.sessionRequestQueue.queue.push(o);
              }
            ),
            sign_client_dist_index_es_c(this, "cleanupAfterResponse", (o) => {
              this.deletePendingSessionRequest(o.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = oG.idle),
                    this.processSessionRequestQueue();
                }, (0, en.toMiliseconds)(this.requestQueueDelay));
            }),
            sign_client_dist_index_es_c(
              this,
              "cleanupPendingSentRequestsForTopic",
              ({ topic: o, error: l }) => {
                let _ = this.client.core.history.pending;
                _.length > 0 &&
                  _.filter(
                    (l) =>
                      l.topic === o && "wc_sessionRequest" === l.request.method
                  ).forEach((o) => {
                    let _ = o.request.id,
                      f = xi("session_request", _);
                    if (0 === this.events.listenerCount(f))
                      throw Error(`emitting ${f} without any listeners`);
                    this.events.emit(xi("session_request", o.request.id), {
                      error: l,
                    });
                  });
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "processSessionRequestQueue",
              () => {
                if (this.sessionRequestQueue.state === oG.active) {
                  this.client.logger.info(
                    "session request queue is already active."
                  );
                  return;
                }
                let o = this.sessionRequestQueue.queue[0];
                if (!o) {
                  this.client.logger.info("session request queue is empty.");
                  return;
                }
                try {
                  (this.sessionRequestQueue.state = oG.active),
                    this.emitSessionRequest(o);
                } catch (o) {
                  this.client.logger.error(o);
                }
              }
            ),
            sign_client_dist_index_es_c(this, "emitSessionRequest", (o) => {
              this.client.events.emit("session_request", o);
            }),
            sign_client_dist_index_es_c(this, "onPairingCreated", (o) => {
              if (
                (o.methods &&
                  this.expectedPairingMethodMap.set(o.topic, o.methods),
                o.active)
              )
                return;
              let l = this.client.proposal
                .getAll()
                .find((l) => l.pairingTopic === o.topic);
              l &&
                this.onSessionProposeRequest({
                  topic: o.topic,
                  payload: formatJsonRpcRequest(
                    "wc_sessionPropose",
                    sign_client_dist_index_es_b(
                      sign_client_dist_index_es_v({}, l),
                      {
                        requiredNamespaces: l.requiredNamespaces,
                        optionalNamespaces: l.optionalNamespaces,
                        relays: l.relays,
                        proposer: l.proposer,
                        sessionProperties: l.sessionProperties,
                        scopedProperties: l.scopedProperties,
                      }
                    ),
                    l.id
                  ),
                });
            }),
            sign_client_dist_index_es_c(this, "isValidConnect", async (o) => {
              let l;
              if (!ya(o)) {
                let { message: l } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(o)}`
                );
                throw Error(l);
              }
              let {
                pairingTopic: _,
                requiredNamespaces: f,
                optionalNamespaces: m,
                sessionProperties: b,
                scopedProperties: w,
                relays: E,
              } = o;
              if (
                (index_es_Et(_) || (await this.isValidPairingTopic(_)),
                (l = !1),
                E
                  ? E &&
                    oe(E) &&
                    E.length &&
                    E.forEach((o) => {
                      l = index_es_Io(o);
                    })
                  : (l = !0),
                !l)
              ) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${E}`
                );
                throw Error(o);
              }
              if (
                (index_es_Et(f) ||
                  0 === index_es_xe(f) ||
                  this.validateNamespaces(f, "requiredNamespaces"),
                index_es_Et(m) ||
                  0 === index_es_xe(m) ||
                  this.validateNamespaces(m, "optionalNamespaces"),
                index_es_Et(b) ||
                  this.validateSessionProps(b, "sessionProperties"),
                !index_es_Et(w))
              ) {
                this.validateSessionProps(w, "scopedProperties");
                let o = Object.keys(f || {}).concat(Object.keys(m || {}));
                if (!Object.keys(w).every((l) => o.includes(l)))
                  throw Error(
                    `Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(
                      w
                    )}, required/optional namespaces: ${JSON.stringify(o)}`
                  );
              }
            }),
            sign_client_dist_index_es_c(this, "validateNamespaces", (o, l) => {
              let _ = (function (o, l, _) {
                let f = null;
                if (o && index_es_xe(o)) {
                  let m;
                  let b = wn(o, l);
                  b && (f = b);
                  let w =
                    ((m = null),
                    Object.entries(o).forEach(([o, f]) => {
                      var b, w;
                      let E;
                      if (m) return;
                      let D =
                        ((b = ce(o, f)),
                        (w = `${l} ${_}`),
                        (E = null),
                        oe(b) && b.length
                          ? b.forEach((o) => {
                              E ||
                                ie(o) ||
                                (E = index_es_Nt(
                                  "UNSUPPORTED_CHAINS",
                                  `${w}, chain ${o} should be a string and conform to "namespace:chainId" format`
                                ));
                            })
                          : ie(o) ||
                            (E = index_es_Nt(
                              "UNSUPPORTED_CHAINS",
                              `${w}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                            )),
                        E);
                      D && (m = D);
                    }),
                    m);
                  w && (f = w);
                } else
                  f = index_es_ht(
                    "MISSING_OR_INVALID",
                    `${l}, ${_} should be an object with data`
                  );
                return f;
              })(o, "connect()", l);
              if (_) throw Error(_.message);
            }),
            sign_client_dist_index_es_c(this, "isValidApprove", async (o) => {
              if (!ya(o))
                throw Error(
                  index_es_ht("MISSING_OR_INVALID", `approve() params: ${o}`)
                    .message
                );
              let {
                id: l,
                namespaces: _,
                relayProtocol: f,
                sessionProperties: m,
                scopedProperties: b,
              } = o;
              this.checkRecentlyDeleted(l), await this.isValidProposalId(l);
              let w = this.client.proposal.get(l),
                E = index_es_Bo(_, "approve()");
              if (E) throw Error(E.message);
              let D = index_es_No(w.requiredNamespaces, _, "approve()");
              if (D) throw Error(D.message);
              if (!index_es_nt(f, !0)) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${f}`
                );
                throw Error(o);
              }
              if (
                (index_es_Et(m) ||
                  this.validateSessionProps(m, "sessionProperties"),
                !index_es_Et(b))
              ) {
                this.validateSessionProps(b, "scopedProperties");
                let o = new Set(Object.keys(_));
                if (!Object.keys(b).every((l) => o.has(l)))
                  throw Error(
                    `Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(
                      b
                    )}, approved namespaces: ${Array.from(o).join(", ")}`
                  );
              }
            }),
            sign_client_dist_index_es_c(this, "isValidReject", async (o) => {
              if (!ya(o)) {
                let { message: l } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `reject() params: ${o}`
                );
                throw Error(l);
              }
              let { id: l, reason: _ } = o;
              if (
                (this.checkRecentlyDeleted(l),
                await this.isValidProposalId(l),
                !_ ||
                  "object" != typeof _ ||
                  !_.code ||
                  !index_es_Se(_.code, !1) ||
                  !_.message ||
                  !index_es_nt(_.message, !1))
              ) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(_)}`
                );
                throw Error(o);
              }
            }),
            sign_client_dist_index_es_c(
              this,
              "isValidSessionSettleRequest",
              (o) => {
                let l;
                if (!ya(o)) {
                  let { message: l } = index_es_ht(
                    "MISSING_OR_INVALID",
                    `onSessionSettleRequest() params: ${o}`
                  );
                  throw Error(l);
                }
                let { relay: _, controller: f, namespaces: m, expiry: b } = o;
                if (!index_es_Io(_)) {
                  let { message: o } = index_es_ht(
                    "MISSING_OR_INVALID",
                    "onSessionSettleRequest() relay protocol should be a string"
                  );
                  throw Error(o);
                }
                let w =
                  ((l = null),
                  index_es_nt(f?.publicKey, !1) ||
                    (l = index_es_ht(
                      "MISSING_OR_INVALID",
                      "onSessionSettleRequest() controller public key should be a string"
                    )),
                  l);
                if (w) throw Error(w.message);
                let E = index_es_Bo(m, "onSessionSettleRequest()");
                if (E) throw Error(E.message);
                if (vi(b)) {
                  let { message: o } = index_es_ht(
                    "EXPIRED",
                    "onSessionSettleRequest()"
                  );
                  throw Error(o);
                }
              }
            ),
            sign_client_dist_index_es_c(this, "isValidUpdate", async (o) => {
              if (!ya(o)) {
                let { message: l } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `update() params: ${o}`
                );
                throw Error(l);
              }
              let { topic: l, namespaces: _ } = o;
              this.checkRecentlyDeleted(l), await this.isValidSessionTopic(l);
              let f = this.client.session.get(l),
                m = index_es_Bo(_, "update()");
              if (m) throw Error(m.message);
              let b = index_es_No(f.requiredNamespaces, _, "update()");
              if (b) throw Error(b.message);
            }),
            sign_client_dist_index_es_c(this, "isValidExtend", async (o) => {
              if (!ya(o)) {
                let { message: l } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `extend() params: ${o}`
                );
                throw Error(l);
              }
              let { topic: l } = o;
              this.checkRecentlyDeleted(l), await this.isValidSessionTopic(l);
            }),
            sign_client_dist_index_es_c(this, "isValidRequest", async (o) => {
              var l;
              if (!ya(o)) {
                let { message: l } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `request() params: ${o}`
                );
                throw Error(l);
              }
              let { topic: _, request: f, chainId: m, expiry: b } = o;
              this.checkRecentlyDeleted(_), await this.isValidSessionTopic(_);
              let { namespaces: w } = this.client.session.get(_);
              if (!va(w, m)) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${m}`
                );
                throw Error(o);
              }
              if (index_es_Et(f) || !index_es_nt(f.method, !1)) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(f)}`
                );
                throw Error(o);
              }
              if (
                !(
                  index_es_nt((l = f.method), !1) &&
                  (function (o, l) {
                    let _ = [];
                    return (
                      Object.values(o).forEach((o) => {
                        index_es_It(o.accounts).includes(l) &&
                          _.push(...o.methods);
                      }),
                      _
                    );
                  })(w, m).includes(l)
                )
              ) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `request() method: ${f.method}`
                );
                throw Error(o);
              }
              if (
                b &&
                (!index_es_Se(b, !1) || !(b <= oW.max) || !(b >= oW.min))
              ) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${b}. Expiry must be a number (in seconds) between ${oW.min} and ${oW.max}`
                );
                throw Error(o);
              }
            }),
            sign_client_dist_index_es_c(this, "isValidRespond", async (o) => {
              var l;
              if (!ya(o)) {
                let { message: l } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `respond() params: ${o}`
                );
                throw Error(l);
              }
              let { topic: _, response: f } = o;
              try {
                await this.isValidSessionTopic(_);
              } catch (_) {
                throw (
                  (null != (l = o?.response) &&
                    l.id &&
                    this.cleanupAfterResponse(o),
                  _)
                );
              }
              if (
                index_es_Et(f) ||
                (index_es_Et(f.result) && index_es_Et(f.error)) ||
                !index_es_Se(f.id, !1) ||
                !index_es_nt(f.jsonrpc, !1)
              ) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(f)}`
                );
                throw Error(o);
              }
            }),
            sign_client_dist_index_es_c(this, "isValidPing", async (o) => {
              if (!ya(o)) {
                let { message: l } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `ping() params: ${o}`
                );
                throw Error(l);
              }
              let { topic: l } = o;
              await this.isValidSessionOrPairingTopic(l);
            }),
            sign_client_dist_index_es_c(this, "isValidEmit", async (o) => {
              var l;
              if (!ya(o)) {
                let { message: l } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `emit() params: ${o}`
                );
                throw Error(l);
              }
              let { topic: _, event: f, chainId: m } = o;
              await this.isValidSessionTopic(_);
              let { namespaces: b } = this.client.session.get(_);
              if (!va(b, m)) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${m}`
                );
                throw Error(o);
              }
              if (index_es_Et(f) || !index_es_nt(f.name, !1)) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(f)}`
                );
                throw Error(o);
              }
              if (
                !(
                  index_es_nt((l = f.name), !1) &&
                  (function (o, l) {
                    let _ = [];
                    return (
                      Object.values(o).forEach((o) => {
                        index_es_It(o.accounts).includes(l) &&
                          _.push(...o.events);
                      }),
                      _
                    );
                  })(b, m).includes(l)
                )
              ) {
                let { message: o } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(f)}`
                );
                throw Error(o);
              }
            }),
            sign_client_dist_index_es_c(
              this,
              "isValidDisconnect",
              async (o) => {
                if (!ya(o)) {
                  let { message: l } = index_es_ht(
                    "MISSING_OR_INVALID",
                    `disconnect() params: ${o}`
                  );
                  throw Error(l);
                }
                let { topic: l } = o;
                await this.isValidSessionOrPairingTopic(l);
              }
            ),
            sign_client_dist_index_es_c(this, "isValidAuthenticate", (o) => {
              let { chains: l, uri: _, domain: f, nonce: m } = o;
              if (!Array.isArray(l) || 0 === l.length)
                throw Error("chains is required and must be a non-empty array");
              if (!index_es_nt(_, !1)) throw Error("uri is required parameter");
              if (!index_es_nt(f, !1))
                throw Error("domain is required parameter");
              if (!index_es_nt(m, !1))
                throw Error("nonce is required parameter");
              if (
                [...new Set(l.map((o) => index_es_Ie(o).namespace))].length > 1
              )
                throw Error(
                  "Multi-namespace requests are not supported. Please request single namespace only."
                );
              let { namespace: b } = index_es_Ie(l[0]);
              if ("eip155" !== b)
                throw Error(
                  "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
                );
            }),
            sign_client_dist_index_es_c(this, "getVerifyContext", async (o) => {
              let {
                  attestationId: l,
                  hash: _,
                  encryptedId: f,
                  metadata: m,
                  transportType: b,
                } = o,
                w = {
                  verified: {
                    verifyUrl: m.verifyUrl || ns,
                    validation: "UNKNOWN",
                    origin: m.url || "",
                  },
                };
              try {
                if (b === r5.link_mode) {
                  let o = this.getAppLinkIfEnabled(m, b);
                  return (
                    (w.verified.validation =
                      o && new URL(o).origin === new URL(m.url).origin
                        ? "VALID"
                        : "INVALID"),
                    w
                  );
                }
                let o = await this.client.core.verify.resolve({
                  attestationId: l,
                  hash: _,
                  encryptedId: f,
                  verifyUrl: m.verifyUrl,
                });
                o &&
                  ((w.verified.origin = o.origin),
                  (w.verified.isScam = o.isScam),
                  (w.verified.validation =
                    o.origin === new URL(m.url).origin ? "VALID" : "INVALID"));
              } catch (o) {
                this.client.logger.warn(o);
              }
              return (
                this.client.logger.debug(
                  `Verify context: ${JSON.stringify(w)}`
                ),
                w
              );
            }),
            sign_client_dist_index_es_c(
              this,
              "validateSessionProps",
              (o, l) => {
                Object.values(o).forEach((_, f) => {
                  if (null == _) {
                    let { message: m } = index_es_ht(
                      "MISSING_OR_INVALID",
                      `${l} must contain an existing value for each key. Received: ${_} for key ${
                        Object.keys(o)[f]
                      }`
                    );
                    throw Error(m);
                  }
                });
              }
            ),
            sign_client_dist_index_es_c(this, "getPendingAuthRequest", (o) => {
              let l = this.client.auth.requests.get(o);
              return "object" == typeof l ? l : void 0;
            }),
            sign_client_dist_index_es_c(
              this,
              "addToRecentlyDeleted",
              (o, l) => {
                if (
                  (this.recentlyDeletedMap.set(o, l),
                  this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
                ) {
                  let o = 0,
                    l = this.recentlyDeletedLimit / 2;
                  for (let _ of this.recentlyDeletedMap.keys()) {
                    if (o++ >= l) break;
                    this.recentlyDeletedMap.delete(_);
                  }
                }
              }
            ),
            sign_client_dist_index_es_c(this, "checkRecentlyDeleted", (o) => {
              let l = this.recentlyDeletedMap.get(o);
              if (l) {
                let { message: _ } = index_es_ht(
                  "MISSING_OR_INVALID",
                  `Record was recently deleted - ${l}: ${o}`
                );
                throw Error(_);
              }
            }),
            sign_client_dist_index_es_c(this, "isLinkModeEnabled", (o, l) => {
              var f, m, b, w, E, D, P, C, A;
              return (
                !!o &&
                l === r5.link_mode &&
                (null ==
                (m = null == (f = this.client.metadata) ? void 0 : f.redirect)
                  ? void 0
                  : m.linkMode) === !0 &&
                (null ==
                (w = null == (b = this.client.metadata) ? void 0 : b.redirect)
                  ? void 0
                  : w.universal) !== void 0 &&
                (null ==
                (D = null == (E = this.client.metadata) ? void 0 : E.redirect)
                  ? void 0
                  : D.universal) !== "" &&
                (null == (P = o?.redirect) ? void 0 : P.universal) !== void 0 &&
                (null == (C = o?.redirect) ? void 0 : C.universal) !== "" &&
                (null == (A = o?.redirect) ? void 0 : A.linkMode) === !0 &&
                this.client.core.linkModeSupportedApps.includes(
                  o.redirect.universal
                ) &&
                "u" > typeof (null == _.g ? void 0 : _.g.Linking)
              );
            }),
            sign_client_dist_index_es_c(this, "getAppLinkIfEnabled", (o, l) => {
              var _;
              return this.isLinkModeEnabled(o, l)
                ? null == (_ = o?.redirect)
                  ? void 0
                  : _.universal
                : void 0;
            }),
            sign_client_dist_index_es_c(
              this,
              "handleLinkModeMessage",
              ({ url: o }) => {
                if (!o || !o.includes("wc_ev") || !o.includes("topic")) return;
                let l = Ai(o, "topic") || "",
                  _ = decodeURIComponent(Ai(o, "wc_ev") || ""),
                  f = this.client.session.keys.includes(l);
                f &&
                  this.client.session.update(l, {
                    transportType: r5.link_mode,
                  }),
                  this.client.core.dispatchEnvelope({
                    topic: l,
                    message: _,
                    sessionExists: f,
                  });
              }
            ),
            sign_client_dist_index_es_c(
              this,
              "registerLinkModeListeners",
              async () => {
                var o;
                if (
                  Ii() ||
                  (pt() &&
                    null != (o = this.client.metadata.redirect) &&
                    o.linkMode)
                ) {
                  let o = null == _.g ? void 0 : _.g.Linking;
                  if ("u" > typeof o) {
                    o.addEventListener(
                      "url",
                      this.handleLinkModeMessage,
                      this.client.name
                    );
                    let l = await o.getInitialURL();
                    l &&
                      setTimeout(() => {
                        this.handleLinkModeMessage({ url: l });
                      }, 50);
                  }
                }
              }
            ),
            sign_client_dist_index_es_c(this, "shouldSetTVF", (o, l) => {
              if (!l || "wc_sessionRequest" !== o) return !1;
              let { request: _ } = l;
              return Object.keys(oJ).includes(_.method);
            }),
            sign_client_dist_index_es_c(this, "getTVFParams", (o, l, _) => {
              var f, m;
              try {
                let b = l.request.method,
                  w = this.extractTxHashesFromResult(b, _);
                return sign_client_dist_index_es_b(
                  sign_client_dist_index_es_v(
                    { correlationId: o, rpcMethods: [b], chainId: l.chainId },
                    this.isValidContractData(l.request.params) && {
                      contractAddresses: [
                        null ==
                        (m = null == (f = l.request.params) ? void 0 : f[0])
                          ? void 0
                          : m.to,
                      ],
                    }
                  ),
                  { txHashes: w }
                );
              } catch (o) {
                this.client.logger.warn("Error getting TVF params", o);
              }
              return {};
            }),
            sign_client_dist_index_es_c(this, "isValidContractData", (o) => {
              var l;
              if (!o) return !1;
              try {
                let _ = o?.data || (null == (l = o?.[0]) ? void 0 : l.data);
                if (!_.startsWith("0x")) return !1;
                let f = _.slice(2);
                return !!/^[0-9a-fA-F]*$/.test(f) && f.length % 2 == 0;
              } catch {}
              return !1;
            }),
            sign_client_dist_index_es_c(
              this,
              "extractTxHashesFromResult",
              (o, l) => {
                try {
                  let _ = oJ[o];
                  if ("string" == typeof l) return [l];
                  let f = l[_.key];
                  if (oe(f))
                    return "solana_signAllTransactions" === o
                      ? f.map((o) =>
                          (function (o) {
                            let l = atob(o),
                              _ = new Uint8Array(l.length);
                            for (let o = 0; o < l.length; o++)
                              _[o] = l.charCodeAt(o);
                            let f = _[0];
                            if (0 === f) throw Error("No signatures found");
                            if (_.length < 1 + 64 * f)
                              throw Error(
                                "Transaction data too short for claimed signature count"
                              );
                            if (_.length < 100)
                              throw Error("Transaction too short");
                            let m = iJ.from(o, "base64").slice(1, 65);
                            return eR.encode(m);
                          })(o)
                        )
                      : f;
                  if ("string" == typeof f) return [f];
                } catch (o) {
                  this.client.logger.warn(
                    "Error extracting tx hashes from result",
                    o
                  );
                }
                return [];
              }
            );
        }
        async processPendingMessageEvents() {
          try {
            let o = this.client.session.keys,
              l = this.client.core.relayer.messages.getWithoutAck(o);
            for (let [o, _] of Object.entries(l))
              for (let l of _)
                try {
                  await this.onProviderMessageEvent({
                    topic: o,
                    message: l,
                    publishedAt: Date.now(),
                  });
                } catch {
                  this.client.logger.warn(
                    `Error processing pending message event for topic: ${o}, message: ${l}`
                  );
                }
          } catch (o) {
            this.client.logger.warn("processPendingMessageEvents failed", o);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: o } = index_es_ht("NOT_INITIALIZED", this.name);
            throw Error(o);
          }
        }
        async confirmOnlineStateOrThrow() {
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(r2.message, (o) => {
            this.onProviderMessageEvent(o);
          });
        }
        async onRelayMessage(o) {
          let { topic: l, message: _, attestation: f, transportType: m } = o,
            { publicKey: b } = this.client.auth.authKeys.keys.includes(oQ)
              ? this.client.auth.authKeys.get(oQ)
              : { responseTopic: void 0, publicKey: void 0 };
          try {
            let o = await this.client.core.crypto.decode(l, _, {
              receiverPublicKey: b,
              encoding: m === r5.link_mode ? r_ : ru,
            });
            isJsonRpcRequest(o)
              ? (this.client.core.history.set(l, o),
                await this.onRelayEventRequest({
                  topic: l,
                  payload: o,
                  attestation: f,
                  transportType: m,
                  encryptedId: kc(_),
                }))
              : isJsonRpcResponse(o)
              ? (await this.client.core.history.resolve(o),
                await this.onRelayEventResponse({
                  topic: l,
                  payload: o,
                  transportType: m,
                }),
                this.client.core.history.delete(l, o.id))
              : await this.onRelayEventUnknownPayload({
                  topic: l,
                  payload: o,
                  transportType: m,
                }),
              await this.client.core.relayer.messages.ack(l, _);
          } catch (o) {
            this.client.logger.error(o);
          }
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(ni.expired, async (o) => {
            let { topic: l, id: _ } = bi(o.target);
            return _ && this.client.pendingRequest.keys.includes(_)
              ? await this.deletePendingSessionRequest(
                  _,
                  index_es_ht("EXPIRED"),
                  !0
                )
              : _ && this.client.auth.requests.keys.includes(_)
              ? await this.deletePendingAuthRequest(
                  _,
                  index_es_ht("EXPIRED"),
                  !0
                )
              : void (l
                  ? this.client.session.keys.includes(l) &&
                    (await this.deleteSession({
                      topic: l,
                      expirerHasDeleted: !0,
                    }),
                    this.client.events.emit("session_expire", { topic: l }))
                  : _ &&
                    (await this.deleteProposal(_, !0),
                    this.client.events.emit("proposal_expire", { id: _ })));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(ne.create, (o) =>
            this.onPairingCreated(o)
          ),
            this.client.core.pairing.events.on(ne.delete, (o) => {
              this.addToRecentlyDeleted(o.topic, "pairing");
            });
        }
        isValidPairingTopic(o) {
          if (!index_es_nt(o, !1)) {
            let { message: l } = index_es_ht(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${o}`
            );
            throw Error(l);
          }
          if (!this.client.core.pairing.pairings.keys.includes(o)) {
            let { message: l } = index_es_ht(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${o}`
            );
            throw Error(l);
          }
          if (vi(this.client.core.pairing.pairings.get(o).expiry)) {
            let { message: l } = index_es_ht("EXPIRED", `pairing topic: ${o}`);
            throw Error(l);
          }
        }
        async isValidSessionTopic(o) {
          if (!index_es_nt(o, !1)) {
            let { message: l } = index_es_ht(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${o}`
            );
            throw Error(l);
          }
          if (
            (this.checkRecentlyDeleted(o),
            !this.client.session.keys.includes(o))
          ) {
            let { message: l } = index_es_ht(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${o}`
            );
            throw Error(l);
          }
          if (vi(this.client.session.get(o).expiry)) {
            await this.deleteSession({ topic: o });
            let { message: l } = index_es_ht("EXPIRED", `session topic: ${o}`);
            throw Error(l);
          }
          if (!this.client.core.crypto.keychain.has(o)) {
            let { message: l } = index_es_ht(
              "MISSING_OR_INVALID",
              `session topic does not exist in keychain: ${o}`
            );
            throw (await this.deleteSession({ topic: o }), Error(l));
          }
        }
        async isValidSessionOrPairingTopic(o) {
          if (
            (this.checkRecentlyDeleted(o), this.client.session.keys.includes(o))
          )
            await this.isValidSessionTopic(o);
          else if (this.client.core.pairing.pairings.keys.includes(o))
            this.isValidPairingTopic(o);
          else if (index_es_nt(o, !1)) {
            let { message: l } = index_es_ht(
              "NO_MATCHING_KEY",
              `session or pairing topic doesn't exist: ${o}`
            );
            throw Error(l);
          } else {
            let { message: l } = index_es_ht(
              "MISSING_OR_INVALID",
              `session or pairing topic should be a string: ${o}`
            );
            throw Error(l);
          }
        }
        async isValidProposalId(o) {
          if ("number" != typeof o) {
            let { message: l } = index_es_ht(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${o}`
            );
            throw Error(l);
          }
          if (!this.client.proposal.keys.includes(o)) {
            let { message: l } = index_es_ht(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${o}`
            );
            throw Error(l);
          }
          if (vi(this.client.proposal.get(o).expiryTimestamp)) {
            await this.deleteProposal(o);
            let { message: l } = index_es_ht("EXPIRED", `proposal id: ${o}`);
            throw Error(l);
          }
        }
      };
      let index_es_Ns = class index_es_Ns extends index_es_zi {
        constructor(o, l) {
          super(o, l, "proposal", o$), (this.core = o), (this.logger = l);
        }
      };
      let sign_client_dist_index_es_St = class sign_client_dist_index_es_St extends index_es_zi {
        constructor(o, l) {
          super(o, l, "session", o$), (this.core = o), (this.logger = l);
        }
      };
      let index_es_Os = class index_es_Os extends index_es_zi {
        constructor(o, l) {
          super(o, l, "request", o$, (o) => o.id),
            (this.core = o),
            (this.logger = l);
        }
      };
      let index_es_bs = class index_es_bs extends index_es_zi {
        constructor(o, l) {
          super(o, l, "authKeys", oX, () => oQ),
            (this.core = o),
            (this.logger = l);
        }
      };
      let index_es_As = class index_es_As extends index_es_zi {
        constructor(o, l) {
          super(o, l, "pairingTopics", oX), (this.core = o), (this.logger = l);
        }
      };
      let index_es_xs = class index_es_xs extends index_es_zi {
        constructor(o, l) {
          super(o, l, "requests", oX, (o) => o.id),
            (this.core = o),
            (this.logger = l);
        }
      };
      var o5 = Object.defineProperty,
        index_es_Vs = (o, l, _) =>
          l in o
            ? o5(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        sign_client_dist_index_es_Ge = (o, l, _) =>
          index_es_Vs(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_Ds = class index_es_Ds {
        constructor(o, l) {
          (this.core = o),
            (this.logger = l),
            sign_client_dist_index_es_Ge(this, "authKeys"),
            sign_client_dist_index_es_Ge(this, "pairingTopics"),
            sign_client_dist_index_es_Ge(this, "requests"),
            (this.authKeys = new index_es_bs(this.core, this.logger)),
            (this.pairingTopics = new index_es_As(this.core, this.logger)),
            (this.requests = new index_es_xs(this.core, this.logger));
        }
        async init() {
          await this.authKeys.init(),
            await this.pairingTopics.init(),
            await this.requests.init();
        }
      };
      var o4 = Object.defineProperty,
        index_es_ks = (o, l, _) =>
          l in o
            ? o4(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        sign_client_dist_index_es_E = (o, l, _) =>
          index_es_ks(o, "symbol" != typeof l ? l + "" : l, _);
      let sign_client_dist_index_es_Ee = class sign_client_dist_index_es_Ee extends index_es_J {
        constructor(o) {
          super(o),
            sign_client_dist_index_es_E(this, "protocol", "wc"),
            sign_client_dist_index_es_E(this, "version", 2),
            sign_client_dist_index_es_E(this, "name", oz.name),
            sign_client_dist_index_es_E(this, "metadata"),
            sign_client_dist_index_es_E(this, "core"),
            sign_client_dist_index_es_E(this, "logger"),
            sign_client_dist_index_es_E(this, "events", new G.EventEmitter()),
            sign_client_dist_index_es_E(this, "engine"),
            sign_client_dist_index_es_E(this, "session"),
            sign_client_dist_index_es_E(this, "proposal"),
            sign_client_dist_index_es_E(this, "pendingRequest"),
            sign_client_dist_index_es_E(this, "auth"),
            sign_client_dist_index_es_E(this, "signConfig"),
            sign_client_dist_index_es_E(this, "on", (o, l) =>
              this.events.on(o, l)
            ),
            sign_client_dist_index_es_E(this, "once", (o, l) =>
              this.events.once(o, l)
            ),
            sign_client_dist_index_es_E(this, "off", (o, l) =>
              this.events.off(o, l)
            ),
            sign_client_dist_index_es_E(this, "removeListener", (o, l) =>
              this.events.removeListener(o, l)
            ),
            sign_client_dist_index_es_E(this, "removeAllListeners", (o) =>
              this.events.removeAllListeners(o)
            ),
            sign_client_dist_index_es_E(this, "connect", async (o) => {
              try {
                return await this.engine.connect(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(this, "pair", async (o) => {
              try {
                return await this.engine.pair(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(this, "approve", async (o) => {
              try {
                return await this.engine.approve(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(this, "reject", async (o) => {
              try {
                return await this.engine.reject(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(this, "update", async (o) => {
              try {
                return await this.engine.update(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(this, "extend", async (o) => {
              try {
                return await this.engine.extend(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(this, "request", async (o) => {
              try {
                return await this.engine.request(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(this, "respond", async (o) => {
              try {
                return await this.engine.respond(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(this, "ping", async (o) => {
              try {
                return await this.engine.ping(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(this, "emit", async (o) => {
              try {
                return await this.engine.emit(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(this, "disconnect", async (o) => {
              try {
                return await this.engine.disconnect(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(this, "find", (o) => {
              try {
                return this.engine.find(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(
              this,
              "getPendingSessionRequests",
              () => {
                try {
                  return this.engine.getPendingSessionRequests();
                } catch (o) {
                  throw (this.logger.error(o.message), o);
                }
              }
            ),
            sign_client_dist_index_es_E(this, "authenticate", async (o, l) => {
              try {
                return await this.engine.authenticate(o, l);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(this, "formatAuthMessage", (o) => {
              try {
                return this.engine.formatAuthMessage(o);
              } catch (o) {
                throw (this.logger.error(o.message), o);
              }
            }),
            sign_client_dist_index_es_E(
              this,
              "approveSessionAuthenticate",
              async (o) => {
                try {
                  return await this.engine.approveSessionAuthenticate(o);
                } catch (o) {
                  throw (this.logger.error(o.message), o);
                }
              }
            ),
            sign_client_dist_index_es_E(
              this,
              "rejectSessionAuthenticate",
              async (o) => {
                try {
                  return await this.engine.rejectSessionAuthenticate(o);
                } catch (o) {
                  throw (this.logger.error(o.message), o);
                }
              }
            ),
            (this.name = o?.name || oz.name),
            (this.metadata = (function (o) {
              var l, _;
              let f = index_es_Pn();
              try {
                return (
                  null != o &&
                    o.url &&
                    f.url &&
                    o.url !== f.url &&
                    (console.warn(
                      `The configured WalletConnect 'metadata.url':${o.url} differs from the actual page url:${f.url}. This is probably unintended and can lead to issues.`
                    ),
                    (o.url = f.url)),
                  null != (l = o?.icons) &&
                    l.length &&
                    o.icons.length > 0 &&
                    (o.icons = o.icons.filter((o) => "" !== o)),
                  index_es_Jo(dist_index_es_n(dist_index_es_n({}, f), o), {
                    url: o?.url || f.url,
                    name: o?.name || f.name,
                    description: o?.description || f.description,
                    icons:
                      null != (_ = o?.icons) && _.length && o.icons.length > 0
                        ? o.icons
                        : f.icons,
                  })
                );
              } catch (l) {
                return console.warn("Error populating app metadata", l), o || f;
              }
            })(o?.metadata)),
            (this.signConfig = o?.signConfig);
          let l =
            "u" > typeof o?.logger && "string" != typeof o?.logger
              ? o.logger
              : rO()(logger_dist_index_es_k({ level: o?.logger || oz.logger }));
          (this.core = o?.core || new dist_index_es_Te(o)),
            (this.logger = dist_index_es_E(l, this.name)),
            (this.session = new sign_client_dist_index_es_St(
              this.core,
              this.logger
            )),
            (this.proposal = new index_es_Ns(this.core, this.logger)),
            (this.pendingRequest = new index_es_Os(this.core, this.logger)),
            (this.engine = new index_es_Ps(this)),
            (this.auth = new index_es_Ds(this.core, this.logger));
        }
        static async init(o) {
          let l = new sign_client_dist_index_es_Ee(o);
          return await l.initialize(), l;
        }
        get context() {
          return index_es_y(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.auth.init(),
              await this.engine.init(),
              this.logger.info("SignClient Initialization Success"),
              setTimeout(() => {
                this.engine.processRelayMessageCache();
              }, (0, en.toMiliseconds)(en.ONE_SECOND));
          } catch (o) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(o.message),
              o)
            );
          }
        }
      };
      var o6 = _(91024),
        o9 = _.n(o6),
        o7 = Object.defineProperty,
        ae = Object.defineProperties,
        ai = Object.getOwnPropertyDescriptors,
        as = Object.getOwnPropertySymbols,
        ar = Object.prototype.hasOwnProperty,
        an = Object.prototype.propertyIsEnumerable,
        jsonrpc_http_connection_dist_index_es_l = (o, l, _) =>
          l in o
            ? o7(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        jsonrpc_http_connection_dist_index_es_p = (o, l) => {
          for (var _ in l || (l = {}))
            ar.call(l, _) &&
              jsonrpc_http_connection_dist_index_es_l(o, _, l[_]);
          if (as)
            for (var _ of as(l))
              an.call(l, _) &&
                jsonrpc_http_connection_dist_index_es_l(o, _, l[_]);
          return o;
        },
        jsonrpc_http_connection_dist_index_es_v = (o, l) => ae(o, ai(l));
      let ao = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      let jsonrpc_http_connection_dist_index_es_f = class jsonrpc_http_connection_dist_index_es_f {
        constructor(o, l = !1) {
          if (
            ((this.url = o),
            (this.disableProviderPing = l),
            (this.events = new G.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !isHttpUrl(o))
          )
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${o}`
            );
          (this.url = o), (this.disableProviderPing = l);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(o, l) {
          this.events.on(o, l);
        }
        once(o, l) {
          this.events.once(o, l);
        }
        off(o, l) {
          this.events.off(o, l);
        }
        removeListener(o, l) {
          this.events.removeListener(o, l);
        }
        async open(o = this.url) {
          await this.register(o);
        }
        async close() {
          if (!this.isAvailable) throw Error("Connection already closed");
          this.onClose();
        }
        async send(o) {
          this.isAvailable || (await this.register());
          try {
            let l = safeJsonStringify(o),
              _ = await (
                await o9()(
                  this.url,
                  jsonrpc_http_connection_dist_index_es_v(
                    jsonrpc_http_connection_dist_index_es_p({}, ao),
                    { body: l }
                  )
                )
              ).json();
            this.onPayload({ data: _ });
          } catch (l) {
            this.onError(o.id, l);
          }
        }
        async register(o = this.url) {
          if (!isHttpUrl(o))
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${o}`
            );
          if (this.registering) {
            let o = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= o ||
                this.events.listenerCount("open") >= o) &&
                this.events.setMaxListeners(o + 1),
              new Promise((o, l) => {
                this.events.once("register_error", (o) => {
                  this.resetMaxListeners(), l(o);
                }),
                  this.events.once("open", () => {
                    if (
                      (this.resetMaxListeners(), typeof this.isAvailable > "u")
                    )
                      return l(Error("HTTP connection is missing or invalid"));
                    o();
                  });
              })
            );
          }
          (this.url = o), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let l = safeJsonStringify({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await o9()(
                o,
                jsonrpc_http_connection_dist_index_es_v(
                  jsonrpc_http_connection_dist_index_es_p({}, ao),
                  { body: l }
                )
              );
            }
            this.onOpen();
          } catch (l) {
            let o = this.parseError(l);
            throw (this.events.emit("register_error", o), this.onClose(), o);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(o) {
          if (typeof o.data > "u") return;
          let l = "string" == typeof o.data ? safeJsonParse(o.data) : o.data;
          this.events.emit("payload", l);
        }
        onError(o, l) {
          let _ = this.parseError(l),
            f = _.message || _.toString(),
            m = formatJsonRpcError(o, f);
          this.events.emit("payload", m);
        }
        parseError(o, l = this.url) {
          return parseConnectionError(o, l, "HTTP");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      };
      var aa = _(55872).Buffer;
      let ac = "error",
        ad = "wc@2:universal_provider:",
        al = "https://rpc.walletconnect.org/v1/",
        ah = "generic",
        au = `${al}bundler`,
        a_ = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
      function universal_provider_dist_index_es_Rt() {}
      function universal_provider_dist_index_es_G(o) {
        return null == o || ("object" != typeof o && "function" != typeof o);
      }
      function universal_provider_dist_index_es_J(o) {
        return ArrayBuffer.isView(o) && !(o instanceof DataView);
      }
      function index_es_st(o) {
        return "object" == typeof o && null !== o;
      }
      function index_es_it(o) {
        return Object.getOwnPropertySymbols(o).filter((l) =>
          Object.prototype.propertyIsEnumerable.call(o, l)
        );
      }
      function index_es_rt(o) {
        return null == o
          ? void 0 === o
            ? "[object Undefined]"
            : "[object Null]"
          : Object.prototype.toString.call(o);
      }
      let ap = "[object String]",
        af = "[object Number]",
        ag = "[object Boolean]",
        ay = "[object Arguments]";
      function universal_provider_dist_index_es_y(o, l, _, f = new Map(), m) {
        let b = m?.(o, l, _, f);
        if (null != b) return b;
        if (universal_provider_dist_index_es_G(o)) return o;
        if (f.has(o)) return f.get(o);
        if (Array.isArray(o)) {
          let l = Array(o.length);
          f.set(o, l);
          for (let b = 0; b < o.length; b++)
            l[b] = universal_provider_dist_index_es_y(o[b], b, _, f, m);
          return (
            Object.hasOwn(o, "index") && (l.index = o.index),
            Object.hasOwn(o, "input") && (l.input = o.input),
            l
          );
        }
        if (o instanceof Date) return new Date(o.getTime());
        if (o instanceof RegExp) {
          let l = new RegExp(o.source, o.flags);
          return (l.lastIndex = o.lastIndex), l;
        }
        if (o instanceof Map) {
          let l = new Map();
          for (let [b, w] of (f.set(o, l), o))
            l.set(b, universal_provider_dist_index_es_y(w, b, _, f, m));
          return l;
        }
        if (o instanceof Set) {
          let l = new Set();
          for (let b of (f.set(o, l), o))
            l.add(universal_provider_dist_index_es_y(b, void 0, _, f, m));
          return l;
        }
        if ("u" > typeof aa && aa.isBuffer(o)) return o.subarray();
        if (universal_provider_dist_index_es_J(o)) {
          let l = new (Object.getPrototypeOf(o).constructor)(o.length);
          f.set(o, l);
          for (let b = 0; b < o.length; b++)
            l[b] = universal_provider_dist_index_es_y(o[b], b, _, f, m);
          return l;
        }
        if (
          o instanceof ArrayBuffer ||
          ("u" > typeof SharedArrayBuffer && o instanceof SharedArrayBuffer)
        )
          return o.slice(0);
        if (o instanceof DataView) {
          let l = new DataView(o.buffer.slice(0), o.byteOffset, o.byteLength);
          return (
            f.set(o, l), universal_provider_dist_index_es_g(l, o, _, f, m), l
          );
        }
        if ("u" > typeof File && o instanceof File) {
          let l = new File([o], o.name, { type: o.type });
          return (
            f.set(o, l), universal_provider_dist_index_es_g(l, o, _, f, m), l
          );
        }
        if (o instanceof Blob) {
          let l = new Blob([o], { type: o.type });
          return (
            f.set(o, l), universal_provider_dist_index_es_g(l, o, _, f, m), l
          );
        }
        if (o instanceof Error) {
          let l = new o.constructor();
          return (
            f.set(o, l),
            (l.message = o.message),
            (l.name = o.name),
            (l.stack = o.stack),
            (l.cause = o.cause),
            universal_provider_dist_index_es_g(l, o, _, f, m),
            l
          );
        }
        if (
          "object" == typeof o &&
          (function (o) {
            switch (index_es_rt(o)) {
              case ay:
              case "[object Array]":
              case "[object ArrayBuffer]":
              case "[object DataView]":
              case ag:
              case "[object Date]":
              case "[object Float32Array]":
              case "[object Float64Array]":
              case "[object Int8Array]":
              case "[object Int16Array]":
              case "[object Int32Array]":
              case "[object Map]":
              case af:
              case "[object Object]":
              case "[object RegExp]":
              case "[object Set]":
              case ap:
              case "[object Symbol]":
              case "[object Uint8Array]":
              case "[object Uint8ClampedArray]":
              case "[object Uint16Array]":
              case "[object Uint32Array]":
                return !0;
              default:
                return !1;
            }
          })(o)
        ) {
          let l = Object.create(Object.getPrototypeOf(o));
          return (
            f.set(o, l), universal_provider_dist_index_es_g(l, o, _, f, m), l
          );
        }
        return o;
      }
      function universal_provider_dist_index_es_g(o, l, _ = o, f, m) {
        let b = [...Object.keys(l), ...index_es_it(l)];
        for (let w = 0; w < b.length; w++) {
          let E = b[w],
            D = Object.getOwnPropertyDescriptor(o, E);
          (null == D || D.writable) &&
            (o[E] = universal_provider_dist_index_es_y(l[E], E, _, f, m));
        }
      }
      function universal_provider_dist_index_es_ht(o) {
        return universal_provider_dist_index_es_y(
          o,
          void 0,
          o,
          new Map(),
          (l, _, f, m) => {
            let b = void 0;
            if (null != b) return b;
            if ("object" == typeof o)
              switch (Object.prototype.toString.call(o)) {
                case af:
                case ap:
                case ag: {
                  let l = new o.constructor(o?.valueOf());
                  return universal_provider_dist_index_es_g(l, o), l;
                }
                case ay: {
                  let l = {};
                  return (
                    universal_provider_dist_index_es_g(l, o),
                    (l.length = o.length),
                    (l[Symbol.iterator] = o[Symbol.iterator]),
                    l
                  );
                }
                default:
                  return;
              }
          }
        );
      }
      function dist_index_es_pt(o) {
        return (
          null !== o &&
          "object" == typeof o &&
          "[object Arguments]" === index_es_rt(o)
        );
      }
      var am = Object.defineProperty,
        av = Object.defineProperties,
        ab = Object.getOwnPropertyDescriptors,
        ax = Object.getOwnPropertySymbols,
        aw = Object.prototype.hasOwnProperty,
        aE = Object.prototype.propertyIsEnumerable,
        universal_provider_dist_index_es_ut = (o, l, _) =>
          l in o
            ? am(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        dist_index_es_F = (o, l) => {
          for (var _ in l || (l = {}))
            aw.call(l, _) && universal_provider_dist_index_es_ut(o, _, l[_]);
          if (ax)
            for (var _ of ax(l))
              aE.call(l, _) && universal_provider_dist_index_es_ut(o, _, l[_]);
          return o;
        },
        dist_index_es_ue = (o, l) => av(o, ab(l));
      function universal_provider_dist_index_es_p(o, l, _) {
        var f;
        let m = index_es_Ie(o);
        return (
          (null == (f = l.rpcMap) ? void 0 : f[m.reference]) ||
          `${al}?chainId=${m.namespace}:${m.reference}&projectId=${_}`
        );
      }
      function universal_provider_dist_index_es_P(o) {
        return o.includes(":") ? o.split(":")[1] : o;
      }
      function dist_index_es_lt(o) {
        return o.map((o) => `${o.split(":")[0]}:${o.split(":")[1]}`);
      }
      function universal_provider_dist_index_es_z(o = {}, l = {}) {
        let _ = universal_provider_dist_index_es_ft(o),
          f = universal_provider_dist_index_es_ft(l);
        return (function (o, ...l) {
          return (function (o, ...l) {
            let _ = l.slice(0, -1),
              f = l[l.length - 1],
              m = o;
            for (let o = 0; o < _.length; o++) {
              let l = _[o];
              m = (function U(o, l, _, f) {
                if (
                  (universal_provider_dist_index_es_G(o) && (o = Object(o)),
                  null == l || "object" != typeof l)
                )
                  return o;
                if (f.has(l))
                  return (function (o) {
                    if (universal_provider_dist_index_es_G(o)) return o;
                    if (
                      Array.isArray(o) ||
                      universal_provider_dist_index_es_J(o) ||
                      o instanceof ArrayBuffer ||
                      ("u" > typeof SharedArrayBuffer &&
                        o instanceof SharedArrayBuffer)
                    )
                      return o.slice(0);
                    let l = Object.getPrototypeOf(o),
                      _ = l.constructor;
                    if (
                      o instanceof Date ||
                      o instanceof Map ||
                      o instanceof Set
                    )
                      return new _(o);
                    if (o instanceof RegExp) {
                      let l = new _(o);
                      return (l.lastIndex = o.lastIndex), l;
                    }
                    if (o instanceof DataView) return new _(o.buffer.slice(0));
                    if (o instanceof Error) {
                      let l = new _(o.message);
                      return (
                        (l.stack = o.stack),
                        (l.name = o.name),
                        (l.cause = o.cause),
                        l
                      );
                    }
                    if ("u" > typeof File && o instanceof File)
                      return new _([o], o.name, {
                        type: o.type,
                        lastModified: o.lastModified,
                      });
                    if ("object" == typeof o) {
                      let _ = Object.create(l);
                      return Object.assign(_, o);
                    }
                    return o;
                  })(f.get(l));
                if ((f.set(l, o), Array.isArray(l))) {
                  l = l.slice();
                  for (let o = 0; o < l.length; o++) l[o] = l[o] ?? void 0;
                }
                let m = [...Object.keys(l), ...index_es_it(l)];
                for (let b = 0; b < m.length; b++) {
                  let w = m[b],
                    E = l[w],
                    D = o[w];
                  if (
                    (dist_index_es_pt(E) && (E = { ...E }),
                    dist_index_es_pt(D) && (D = { ...D }),
                    "u" > typeof aa &&
                      aa.isBuffer(E) &&
                      (E = universal_provider_dist_index_es_ht(E)),
                    Array.isArray(E))
                  ) {
                    if ("object" == typeof D && null != D) {
                      let o = [],
                        l = Reflect.ownKeys(D);
                      for (let _ = 0; _ < l.length; _++) {
                        let f = l[_];
                        o[f] = D[f];
                      }
                      D = o;
                    } else D = [];
                  }
                  let P = _(D, E, w, o, l, f);
                  null != P
                    ? (o[w] = P)
                    : Array.isArray(E) || (index_es_st(D) && index_es_st(E))
                    ? (o[w] = U(D, E, _, f))
                    : null == D &&
                      (function (o) {
                        if ("object" != typeof o || null == o) return !1;
                        if (null === Object.getPrototypeOf(o)) return !0;
                        if (
                          "[object Object]" !==
                          Object.prototype.toString.call(o)
                        ) {
                          let l = o[Symbol.toStringTag];
                          return (
                            !!(
                              null != l &&
                              Object.getOwnPropertyDescriptor(
                                o,
                                Symbol.toStringTag
                              )?.writable
                            ) && o.toString() === `[object ${l}]`
                          );
                        }
                        let l = o;
                        for (; null !== Object.getPrototypeOf(l); )
                          l = Object.getPrototypeOf(l);
                        return Object.getPrototypeOf(o) === l;
                      })(E)
                    ? (o[w] = U({}, E, _, f))
                    : null == D && universal_provider_dist_index_es_J(E)
                    ? (o[w] = universal_provider_dist_index_es_ht(E))
                    : (void 0 === D || void 0 !== E) && (o[w] = E);
                }
                return o;
              })(m, l, f, new Map());
            }
            return m;
          })(o, ...l, universal_provider_dist_index_es_Rt);
        })(_, f);
      }
      function universal_provider_dist_index_es_ft(o) {
        var l, _, f, m;
        let b = {};
        if (!index_es_xe(o)) return b;
        for (let [w, E] of Object.entries(o)) {
          let o = index_es_gn(w) ? [w] : E.chains,
            D = E.methods || [],
            P = E.events || [],
            C = E.rpcMap || {},
            A = index_es_yo(w);
          b[A] = dist_index_es_ue(
            dist_index_es_F(dist_index_es_F({}, b[A]), E),
            {
              chains: at(o, null == (l = b[A]) ? void 0 : l.chains),
              methods: at(D, null == (_ = b[A]) ? void 0 : _.methods),
              events: at(P, null == (f = b[A]) ? void 0 : f.events),
              rpcMap: dist_index_es_F(
                dist_index_es_F({}, C),
                null == (m = b[A]) ? void 0 : m.rpcMap
              ),
            }
          );
        }
        return b;
      }
      function dist_index_es_mt(o) {
        return o.includes(":") ? o.split(":")[2] : o;
      }
      function index_es_vt(o) {
        let l = {};
        for (let [_, f] of Object.entries(o)) {
          let o = f.methods || [],
            m = f.events || [],
            b = f.accounts || [],
            w = index_es_gn(_)
              ? [_]
              : f.chains
              ? f.chains
              : dist_index_es_lt(f.accounts);
          l[_] = { chains: w, methods: o, events: m, accounts: b };
        }
        return l;
      }
      function universal_provider_dist_index_es_k(o) {
        return "number" == typeof o
          ? o
          : o.includes("0x")
          ? parseInt(o, 16)
          : isNaN(Number((o = o.includes(":") ? o.split(":")[1] : o)))
          ? o
          : Number(o);
      }
      let aI = {},
        universal_provider_dist_index_es_h = (o) => aI[o],
        dist_index_es_W = (o, l) => {
          aI[o] = l;
        };
      var aS = Object.defineProperty,
        universal_provider_dist_index_es_me = (o, l, _) =>
          l in o
            ? aS(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        universal_provider_dist_index_es_b = (o, l, _) =>
          universal_provider_dist_index_es_me(
            o,
            "symbol" != typeof l ? l + "" : l,
            _
          );
      let dist_index_es_ve = class dist_index_es_ve {
        constructor(o) {
          universal_provider_dist_index_es_b(this, "name", "polkadot"),
            universal_provider_dist_index_es_b(this, "client"),
            universal_provider_dist_index_es_b(this, "httpProviders"),
            universal_provider_dist_index_es_b(this, "events"),
            universal_provider_dist_index_es_b(this, "namespace"),
            universal_provider_dist_index_es_b(this, "chainId"),
            (this.namespace = o.namespace),
            (this.events = universal_provider_dist_index_es_h("events")),
            (this.client = universal_provider_dist_index_es_h("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(o) {
          this.namespace = Object.assign(this.namespace, o);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let o = this.namespace.chains[0];
          if (!o) throw Error("ChainId not found");
          return o.split(":")[1];
        }
        request(o) {
          return this.namespace.methods.includes(o.request.method)
            ? this.client.request(o)
            : this.getHttpProvider().request(o.request);
        }
        setDefaultChain(o, l) {
          this.httpProviders[o] || this.setHttpProvider(o, l),
            (this.chainId = o),
            this.events.emit(a_.DEFAULT_CHAIN_CHANGED, `${this.name}:${o}`);
        }
        getAccounts() {
          let o = this.namespace.accounts;
          return (
            (o &&
              o
                .filter((o) => o.split(":")[1] === this.chainId.toString())
                .map((o) => o.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let o = {};
          return (
            this.namespace.chains.forEach((l) => {
              var _;
              let f = universal_provider_dist_index_es_P(l);
              o[f] = this.createHttpProvider(
                f,
                null == (_ = this.namespace.rpcMap) ? void 0 : _[l]
              );
            }),
            o
          );
        }
        getHttpProvider() {
          let o = `${this.name}:${this.chainId}`,
            l = this.httpProviders[o];
          if (typeof l > "u")
            throw Error(`JSON-RPC provider for ${o} not found`);
          return l;
        }
        setHttpProvider(o, l) {
          let _ = this.createHttpProvider(o, l);
          _ && (this.httpProviders[o] = _);
        }
        createHttpProvider(o, l) {
          let _ =
            l ||
            universal_provider_dist_index_es_p(
              o,
              this.namespace,
              this.client.core.projectId
            );
          if (!_) throw Error(`No RPC url provided for chainId: ${o}`);
          return new jsonrpc_provider_dist_index_es_o(
            new jsonrpc_http_connection_dist_index_es_f(
              _,
              universal_provider_dist_index_es_h("disableProviderPing")
            )
          );
        }
      };
      var aD = Object.defineProperty,
        aP = Object.defineProperties,
        aO = Object.getOwnPropertyDescriptors,
        aC = Object.getOwnPropertySymbols,
        aA = Object.prototype.hasOwnProperty,
        aR = Object.prototype.propertyIsEnumerable,
        universal_provider_dist_index_es_K = (o, l, _) =>
          l in o
            ? aD(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        universal_provider_dist_index_es_wt = (o, l) => {
          for (var _ in l || (l = {}))
            aA.call(l, _) && universal_provider_dist_index_es_K(o, _, l[_]);
          if (aC)
            for (var _ of aC(l))
              aR.call(l, _) && universal_provider_dist_index_es_K(o, _, l[_]);
          return o;
        },
        universal_provider_dist_index_es_yt = (o, l) => aP(o, aO(l)),
        dist_index_es_I = (o, l, _) =>
          universal_provider_dist_index_es_K(
            o,
            "symbol" != typeof l ? l + "" : l,
            _
          );
      let universal_provider_dist_index_es_Ie = class universal_provider_dist_index_es_Ie {
        constructor(o) {
          dist_index_es_I(this, "name", "eip155"),
            dist_index_es_I(this, "client"),
            dist_index_es_I(this, "chainId"),
            dist_index_es_I(this, "namespace"),
            dist_index_es_I(this, "httpProviders"),
            dist_index_es_I(this, "events"),
            (this.namespace = o.namespace),
            (this.events = universal_provider_dist_index_es_h("events")),
            (this.client = universal_provider_dist_index_es_h("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(o) {
          switch (o.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(o);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
            case "wallet_getCapabilities":
              return await this.getCapabilities(o);
            case "wallet_getCallsStatus":
              return await this.getCallStatus(o);
          }
          return this.namespace.methods.includes(o.request.method)
            ? await this.client.request(o)
            : this.getHttpProvider().request(o.request);
        }
        updateNamespace(o) {
          this.namespace = Object.assign(this.namespace, o);
        }
        setDefaultChain(o, l) {
          this.httpProviders[o] || this.setHttpProvider(parseInt(o), l),
            (this.chainId = parseInt(o)),
            this.events.emit(a_.DEFAULT_CHAIN_CHANGED, `${this.name}:${o}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let o = this.namespace.chains[0];
          if (!o) throw Error("ChainId not found");
          return o.split(":")[1];
        }
        createHttpProvider(o, l) {
          let _ =
            l ||
            universal_provider_dist_index_es_p(
              `${this.name}:${o}`,
              this.namespace,
              this.client.core.projectId
            );
          if (!_) throw Error(`No RPC url provided for chainId: ${o}`);
          return new jsonrpc_provider_dist_index_es_o(
            new jsonrpc_http_connection_dist_index_es_f(
              _,
              universal_provider_dist_index_es_h("disableProviderPing")
            )
          );
        }
        setHttpProvider(o, l) {
          let _ = this.createHttpProvider(o, l);
          _ && (this.httpProviders[o] = _);
        }
        createHttpProviders() {
          let o = {};
          return (
            this.namespace.chains.forEach((l) => {
              var _;
              let f = parseInt(universal_provider_dist_index_es_P(l));
              o[f] = this.createHttpProvider(
                f,
                null == (_ = this.namespace.rpcMap) ? void 0 : _[l]
              );
            }),
            o
          );
        }
        getAccounts() {
          let o = this.namespace.accounts;
          return o
            ? [
                ...new Set(
                  o
                    .filter((o) => o.split(":")[1] === this.chainId.toString())
                    .map((o) => o.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let o = this.chainId,
            l = this.httpProviders[o];
          if (typeof l > "u")
            throw Error(`JSON-RPC provider for ${o} not found`);
          return l;
        }
        async handleSwitchChain(o) {
          var l, _;
          let f = o.request.params
            ? null == (l = o.request.params[0])
              ? void 0
              : l.chainId
            : "0x0";
          f = f.startsWith("0x") ? f : `0x${f}`;
          let m = parseInt(f, 16);
          if (this.isChainApproved(m)) this.setDefaultChain(`${m}`);
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: o.topic,
              request: { method: o.request.method, params: [{ chainId: f }] },
              chainId: null == (_ = this.namespace.chains) ? void 0 : _[0],
            }),
              this.setDefaultChain(`${m}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${m}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(o) {
          return this.namespace.chains.includes(`${this.name}:${o}`);
        }
        async getCapabilities(o) {
          var l, _, f;
          let m =
            null == (_ = null == (l = o.request) ? void 0 : l.params)
              ? void 0
              : _[0];
          if (!m)
            throw Error(
              "Missing address parameter in `wallet_getCapabilities` request"
            );
          let b = this.client.session.get(o.topic),
            w =
              (null == (f = b?.sessionProperties) ? void 0 : f.capabilities) ||
              {};
          if (null != w && w[m]) return w?.[m];
          let E = await this.client.request(o);
          try {
            await this.client.session.update(o.topic, {
              sessionProperties: universal_provider_dist_index_es_yt(
                universal_provider_dist_index_es_wt(
                  {},
                  b.sessionProperties || {}
                ),
                {
                  capabilities: universal_provider_dist_index_es_yt(
                    universal_provider_dist_index_es_wt({}, w || {}),
                    { [m]: E }
                  ),
                }
              ),
            });
          } catch (o) {
            console.warn("Failed to update session with capabilities", o);
          }
          return E;
        }
        async getCallStatus(o) {
          var l, _;
          let f = this.client.session.get(o.topic),
            m = null == (l = f.sessionProperties) ? void 0 : l.bundler_name;
          if (m) {
            let l = this.getBundlerUrl(o.chainId, m);
            try {
              return await this.getUserOperationReceipt(l, o);
            } catch (o) {
              console.warn("Failed to fetch call status from bundler", o, l);
            }
          }
          let b = null == (_ = f.sessionProperties) ? void 0 : _.bundler_url;
          if (b)
            try {
              return await this.getUserOperationReceipt(b, o);
            } catch (o) {
              console.warn(
                "Failed to fetch call status from custom bundler",
                o,
                b
              );
            }
          if (this.namespace.methods.includes(o.request.method))
            return await this.client.request(o);
          throw Error("Fetching call status not approved by the wallet.");
        }
        async getUserOperationReceipt(o, l) {
          var _;
          let f = new URL(o),
            m = await fetch(f, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(
                formatJsonRpcRequest("eth_getUserOperationReceipt", [
                  null == (_ = l.request.params) ? void 0 : _[0],
                ])
              ),
            });
          if (!m.ok)
            throw Error(`Failed to fetch user operation receipt - ${m.status}`);
          return await m.json();
        }
        getBundlerUrl(o, l) {
          return `${au}?projectId=${this.client.core.projectId}&chainId=${o}&bundler=${l}`;
        }
      };
      var aT = Object.defineProperty,
        index_es_Oe = (o, l, _) =>
          l in o
            ? aT(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        universal_provider_dist_index_es_$ = (o, l, _) =>
          index_es_Oe(o, "symbol" != typeof l ? l + "" : l, _);
      let index_es_Ae = class index_es_Ae {
        constructor(o) {
          universal_provider_dist_index_es_$(this, "name", "solana"),
            universal_provider_dist_index_es_$(this, "client"),
            universal_provider_dist_index_es_$(this, "httpProviders"),
            universal_provider_dist_index_es_$(this, "events"),
            universal_provider_dist_index_es_$(this, "namespace"),
            universal_provider_dist_index_es_$(this, "chainId"),
            (this.namespace = o.namespace),
            (this.events = universal_provider_dist_index_es_h("events")),
            (this.client = universal_provider_dist_index_es_h("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(o) {
          this.namespace = Object.assign(this.namespace, o);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(o) {
          return this.namespace.methods.includes(o.request.method)
            ? this.client.request(o)
            : this.getHttpProvider().request(o.request);
        }
        setDefaultChain(o, l) {
          this.httpProviders[o] || this.setHttpProvider(o, l),
            (this.chainId = o),
            this.events.emit(a_.DEFAULT_CHAIN_CHANGED, `${this.name}:${o}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let o = this.namespace.chains[0];
          if (!o) throw Error("ChainId not found");
          return o.split(":")[1];
        }
        getAccounts() {
          let o = this.namespace.accounts;
          return o
            ? [
                ...new Set(
                  o
                    .filter((o) => o.split(":")[1] === this.chainId.toString())
                    .map((o) => o.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let o = {};
          return (
            this.namespace.chains.forEach((l) => {
              var _;
              let f = universal_provider_dist_index_es_P(l);
              o[f] = this.createHttpProvider(
                f,
                null == (_ = this.namespace.rpcMap) ? void 0 : _[l]
              );
            }),
            o
          );
        }
        getHttpProvider() {
          let o = `${this.name}:${this.chainId}`,
            l = this.httpProviders[o];
          if (typeof l > "u")
            throw Error(`JSON-RPC provider for ${o} not found`);
          return l;
        }
        setHttpProvider(o, l) {
          let _ = this.createHttpProvider(o, l);
          _ && (this.httpProviders[o] = _);
        }
        createHttpProvider(o, l) {
          let _ =
            l ||
            universal_provider_dist_index_es_p(
              o,
              this.namespace,
              this.client.core.projectId
            );
          if (!_) throw Error(`No RPC url provided for chainId: ${o}`);
          return new jsonrpc_provider_dist_index_es_o(
            new jsonrpc_http_connection_dist_index_es_f(
              _,
              universal_provider_dist_index_es_h("disableProviderPing")
            )
          );
        }
      };
      var aN = Object.defineProperty,
        universal_provider_dist_index_es_He = (o, l, _) =>
          l in o
            ? aN(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        universal_provider_dist_index_es_O = (o, l, _) =>
          universal_provider_dist_index_es_He(
            o,
            "symbol" != typeof l ? l + "" : l,
            _
          );
      let universal_provider_dist_index_es_Ee = class universal_provider_dist_index_es_Ee {
        constructor(o) {
          universal_provider_dist_index_es_O(this, "name", "cosmos"),
            universal_provider_dist_index_es_O(this, "client"),
            universal_provider_dist_index_es_O(this, "httpProviders"),
            universal_provider_dist_index_es_O(this, "events"),
            universal_provider_dist_index_es_O(this, "namespace"),
            universal_provider_dist_index_es_O(this, "chainId"),
            (this.namespace = o.namespace),
            (this.events = universal_provider_dist_index_es_h("events")),
            (this.client = universal_provider_dist_index_es_h("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(o) {
          this.namespace = Object.assign(this.namespace, o);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let o = this.namespace.chains[0];
          if (!o) throw Error("ChainId not found");
          return o.split(":")[1];
        }
        request(o) {
          return this.namespace.methods.includes(o.request.method)
            ? this.client.request(o)
            : this.getHttpProvider().request(o.request);
        }
        setDefaultChain(o, l) {
          this.httpProviders[o] || this.setHttpProvider(o, l),
            (this.chainId = o),
            this.events.emit(
              a_.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let o = this.namespace.accounts;
          return o
            ? [
                ...new Set(
                  o
                    .filter((o) => o.split(":")[1] === this.chainId.toString())
                    .map((o) => o.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let o = {};
          return (
            this.namespace.chains.forEach((l) => {
              var _;
              let f = universal_provider_dist_index_es_P(l);
              o[f] = this.createHttpProvider(
                f,
                null == (_ = this.namespace.rpcMap) ? void 0 : _[l]
              );
            }),
            o
          );
        }
        getHttpProvider() {
          let o = `${this.name}:${this.chainId}`,
            l = this.httpProviders[o];
          if (typeof l > "u")
            throw Error(`JSON-RPC provider for ${o} not found`);
          return l;
        }
        setHttpProvider(o, l) {
          let _ = this.createHttpProvider(o, l);
          _ && (this.httpProviders[o] = _);
        }
        createHttpProvider(o, l) {
          let _ =
            l ||
            universal_provider_dist_index_es_p(
              o,
              this.namespace,
              this.client.core.projectId
            );
          if (!_) throw Error(`No RPC url provided for chainId: ${o}`);
          return new jsonrpc_provider_dist_index_es_o(
            new jsonrpc_http_connection_dist_index_es_f(
              _,
              universal_provider_dist_index_es_h("disableProviderPing")
            )
          );
        }
      };
      var aj = Object.defineProperty,
        dist_index_es_Se = (o, l, _) =>
          l in o
            ? aj(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        dist_index_es_A = (o, l, _) =>
          dist_index_es_Se(o, "symbol" != typeof l ? l + "" : l, _);
      let universal_provider_dist_index_es_De = class universal_provider_dist_index_es_De {
        constructor(o) {
          dist_index_es_A(this, "name", "algorand"),
            dist_index_es_A(this, "client"),
            dist_index_es_A(this, "httpProviders"),
            dist_index_es_A(this, "events"),
            dist_index_es_A(this, "namespace"),
            dist_index_es_A(this, "chainId"),
            (this.namespace = o.namespace),
            (this.events = universal_provider_dist_index_es_h("events")),
            (this.client = universal_provider_dist_index_es_h("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(o) {
          this.namespace = Object.assign(this.namespace, o);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(o) {
          return this.namespace.methods.includes(o.request.method)
            ? this.client.request(o)
            : this.getHttpProvider().request(o.request);
        }
        setDefaultChain(o, l) {
          if (!this.httpProviders[o]) {
            let _ =
              l ||
              universal_provider_dist_index_es_p(
                `${this.name}:${o}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!_) throw Error(`No RPC url provided for chainId: ${o}`);
            this.setHttpProvider(o, _);
          }
          (this.chainId = o),
            this.events.emit(
              a_.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let o = this.namespace.chains[0];
          if (!o) throw Error("ChainId not found");
          return o.split(":")[1];
        }
        getAccounts() {
          let o = this.namespace.accounts;
          return o
            ? [
                ...new Set(
                  o
                    .filter((o) => o.split(":")[1] === this.chainId.toString())
                    .map((o) => o.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let o = {};
          return (
            this.namespace.chains.forEach((l) => {
              var _;
              o[l] = this.createHttpProvider(
                l,
                null == (_ = this.namespace.rpcMap) ? void 0 : _[l]
              );
            }),
            o
          );
        }
        getHttpProvider() {
          let o = `${this.name}:${this.chainId}`,
            l = this.httpProviders[o];
          if (typeof l > "u")
            throw Error(`JSON-RPC provider for ${o} not found`);
          return l;
        }
        setHttpProvider(o, l) {
          let _ = this.createHttpProvider(o, l);
          _ && (this.httpProviders[o] = _);
        }
        createHttpProvider(o, l) {
          let _ =
            l ||
            universal_provider_dist_index_es_p(
              o,
              this.namespace,
              this.client.core.projectId
            );
          return typeof _ > "u"
            ? void 0
            : new jsonrpc_provider_dist_index_es_o(
                new jsonrpc_http_connection_dist_index_es_f(
                  _,
                  universal_provider_dist_index_es_h("disableProviderPing")
                )
              );
        }
      };
      var ak = Object.defineProperty,
        universal_provider_dist_index_es_je = (o, l, _) =>
          l in o
            ? ak(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        universal_provider_dist_index_es_C = (o, l, _) =>
          universal_provider_dist_index_es_je(
            o,
            "symbol" != typeof l ? l + "" : l,
            _
          );
      let dist_index_es_Re = class dist_index_es_Re {
        constructor(o) {
          universal_provider_dist_index_es_C(this, "name", "cip34"),
            universal_provider_dist_index_es_C(this, "client"),
            universal_provider_dist_index_es_C(this, "httpProviders"),
            universal_provider_dist_index_es_C(this, "events"),
            universal_provider_dist_index_es_C(this, "namespace"),
            universal_provider_dist_index_es_C(this, "chainId"),
            (this.namespace = o.namespace),
            (this.events = universal_provider_dist_index_es_h("events")),
            (this.client = universal_provider_dist_index_es_h("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(o) {
          this.namespace = Object.assign(this.namespace, o);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let o = this.namespace.chains[0];
          if (!o) throw Error("ChainId not found");
          return o.split(":")[1];
        }
        request(o) {
          return this.namespace.methods.includes(o.request.method)
            ? this.client.request(o)
            : this.getHttpProvider().request(o.request);
        }
        setDefaultChain(o, l) {
          this.httpProviders[o] || this.setHttpProvider(o, l),
            (this.chainId = o),
            this.events.emit(
              a_.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          let o = this.namespace.accounts;
          return o
            ? [
                ...new Set(
                  o
                    .filter((o) => o.split(":")[1] === this.chainId.toString())
                    .map((o) => o.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let o = {};
          return (
            this.namespace.chains.forEach((l) => {
              let _ = this.getCardanoRPCUrl(l),
                f = universal_provider_dist_index_es_P(l);
              o[f] = this.createHttpProvider(f, _);
            }),
            o
          );
        }
        getHttpProvider() {
          let o = `${this.name}:${this.chainId}`,
            l = this.httpProviders[o];
          if (typeof l > "u")
            throw Error(`JSON-RPC provider for ${o} not found`);
          return l;
        }
        getCardanoRPCUrl(o) {
          let l = this.namespace.rpcMap;
          if (l) return l[o];
        }
        setHttpProvider(o, l) {
          let _ = this.createHttpProvider(o, l);
          _ && (this.httpProviders[o] = _);
        }
        createHttpProvider(o, l) {
          let _ = l || this.getCardanoRPCUrl(o);
          if (!_) throw Error(`No RPC url provided for chainId: ${o}`);
          return new jsonrpc_provider_dist_index_es_o(
            new jsonrpc_http_connection_dist_index_es_f(
              _,
              universal_provider_dist_index_es_h("disableProviderPing")
            )
          );
        }
      };
      var aL = Object.defineProperty,
        universal_provider_dist_index_es_Ue = (o, l, _) =>
          l in o
            ? aL(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        universal_provider_dist_index_es_H = (o, l, _) =>
          universal_provider_dist_index_es_Ue(
            o,
            "symbol" != typeof l ? l + "" : l,
            _
          );
      let universal_provider_dist_index_es_Fe = class universal_provider_dist_index_es_Fe {
        constructor(o) {
          universal_provider_dist_index_es_H(this, "name", "elrond"),
            universal_provider_dist_index_es_H(this, "client"),
            universal_provider_dist_index_es_H(this, "httpProviders"),
            universal_provider_dist_index_es_H(this, "events"),
            universal_provider_dist_index_es_H(this, "namespace"),
            universal_provider_dist_index_es_H(this, "chainId"),
            (this.namespace = o.namespace),
            (this.events = universal_provider_dist_index_es_h("events")),
            (this.client = universal_provider_dist_index_es_h("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(o) {
          this.namespace = Object.assign(this.namespace, o);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(o) {
          return this.namespace.methods.includes(o.request.method)
            ? this.client.request(o)
            : this.getHttpProvider().request(o.request);
        }
        setDefaultChain(o, l) {
          this.httpProviders[o] || this.setHttpProvider(o, l),
            (this.chainId = o),
            this.events.emit(a_.DEFAULT_CHAIN_CHANGED, `${this.name}:${o}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let o = this.namespace.chains[0];
          if (!o) throw Error("ChainId not found");
          return o.split(":")[1];
        }
        getAccounts() {
          let o = this.namespace.accounts;
          return o
            ? [
                ...new Set(
                  o
                    .filter((o) => o.split(":")[1] === this.chainId.toString())
                    .map((o) => o.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let o = {};
          return (
            this.namespace.chains.forEach((l) => {
              var _;
              let f = universal_provider_dist_index_es_P(l);
              o[f] = this.createHttpProvider(
                f,
                null == (_ = this.namespace.rpcMap) ? void 0 : _[l]
              );
            }),
            o
          );
        }
        getHttpProvider() {
          let o = `${this.name}:${this.chainId}`,
            l = this.httpProviders[o];
          if (typeof l > "u")
            throw Error(`JSON-RPC provider for ${o} not found`);
          return l;
        }
        setHttpProvider(o, l) {
          let _ = this.createHttpProvider(o, l);
          _ && (this.httpProviders[o] = _);
        }
        createHttpProvider(o, l) {
          let _ =
            l ||
            universal_provider_dist_index_es_p(
              o,
              this.namespace,
              this.client.core.projectId
            );
          if (!_) throw Error(`No RPC url provided for chainId: ${o}`);
          return new jsonrpc_provider_dist_index_es_o(
            new jsonrpc_http_connection_dist_index_es_f(
              _,
              universal_provider_dist_index_es_h("disableProviderPing")
            )
          );
        }
      };
      var aB = Object.defineProperty,
        dist_index_es_xe = (o, l, _) =>
          l in o
            ? aB(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        universal_provider_dist_index_es_E = (o, l, _) =>
          dist_index_es_xe(o, "symbol" != typeof l ? l + "" : l, _);
      let universal_provider_dist_index_es_Me = class universal_provider_dist_index_es_Me {
        constructor(o) {
          universal_provider_dist_index_es_E(this, "name", "multiversx"),
            universal_provider_dist_index_es_E(this, "client"),
            universal_provider_dist_index_es_E(this, "httpProviders"),
            universal_provider_dist_index_es_E(this, "events"),
            universal_provider_dist_index_es_E(this, "namespace"),
            universal_provider_dist_index_es_E(this, "chainId"),
            (this.namespace = o.namespace),
            (this.events = universal_provider_dist_index_es_h("events")),
            (this.client = universal_provider_dist_index_es_h("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(o) {
          this.namespace = Object.assign(this.namespace, o);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(o) {
          return this.namespace.methods.includes(o.request.method)
            ? this.client.request(o)
            : this.getHttpProvider().request(o.request);
        }
        setDefaultChain(o, l) {
          this.httpProviders[o] || this.setHttpProvider(o, l),
            (this.chainId = o),
            this.events.emit(a_.DEFAULT_CHAIN_CHANGED, `${this.name}:${o}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let o = this.namespace.chains[0];
          if (!o) throw Error("ChainId not found");
          return o.split(":")[1];
        }
        getAccounts() {
          let o = this.namespace.accounts;
          return o
            ? [
                ...new Set(
                  o
                    .filter((o) => o.split(":")[1] === this.chainId.toString())
                    .map((o) => o.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let o = {};
          return (
            this.namespace.chains.forEach((l) => {
              var _;
              let f = universal_provider_dist_index_es_P(l);
              o[f] = this.createHttpProvider(
                f,
                null == (_ = this.namespace.rpcMap) ? void 0 : _[l]
              );
            }),
            o
          );
        }
        getHttpProvider() {
          let o = `${this.name}:${this.chainId}`,
            l = this.httpProviders[o];
          if (typeof l > "u")
            throw Error(`JSON-RPC provider for ${o} not found`);
          return l;
        }
        setHttpProvider(o, l) {
          let _ = this.createHttpProvider(o, l);
          _ && (this.httpProviders[o] = _);
        }
        createHttpProvider(o, l) {
          let _ =
            l ||
            universal_provider_dist_index_es_p(
              o,
              this.namespace,
              this.client.core.projectId
            );
          if (!_) throw Error(`No RPC url provided for chainId: ${o}`);
          return new jsonrpc_provider_dist_index_es_o(
            new jsonrpc_http_connection_dist_index_es_f(
              _,
              universal_provider_dist_index_es_h("disableProviderPing")
            )
          );
        }
      };
      var aU = Object.defineProperty,
        universal_provider_dist_index_es_Ge = (o, l, _) =>
          l in o
            ? aU(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        universal_provider_dist_index_es_N = (o, l, _) =>
          universal_provider_dist_index_es_Ge(
            o,
            "symbol" != typeof l ? l + "" : l,
            _
          );
      let universal_provider_dist_index_es_Je = class universal_provider_dist_index_es_Je {
        constructor(o) {
          universal_provider_dist_index_es_N(this, "name", "near"),
            universal_provider_dist_index_es_N(this, "client"),
            universal_provider_dist_index_es_N(this, "httpProviders"),
            universal_provider_dist_index_es_N(this, "events"),
            universal_provider_dist_index_es_N(this, "namespace"),
            universal_provider_dist_index_es_N(this, "chainId"),
            (this.namespace = o.namespace),
            (this.events = universal_provider_dist_index_es_h("events")),
            (this.client = universal_provider_dist_index_es_h("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(o) {
          this.namespace = Object.assign(this.namespace, o);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let o = this.namespace.chains[0];
          if (!o) throw Error("ChainId not found");
          return o.split(":")[1];
        }
        request(o) {
          return this.namespace.methods.includes(o.request.method)
            ? this.client.request(o)
            : this.getHttpProvider().request(o.request);
        }
        setDefaultChain(o, l) {
          if (((this.chainId = o), !this.httpProviders[o])) {
            let _ =
              l ||
              universal_provider_dist_index_es_p(
                `${this.name}:${o}`,
                this.namespace
              );
            if (!_) throw Error(`No RPC url provided for chainId: ${o}`);
            this.setHttpProvider(o, _);
          }
          this.events.emit(
            a_.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let o = this.namespace.accounts;
          return (
            (o &&
              o
                .filter((o) => o.split(":")[1] === this.chainId.toString())
                .map((o) => o.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let o = {};
          return (
            this.namespace.chains.forEach((l) => {
              var _;
              o[l] = this.createHttpProvider(
                l,
                null == (_ = this.namespace.rpcMap) ? void 0 : _[l]
              );
            }),
            o
          );
        }
        getHttpProvider() {
          let o = `${this.name}:${this.chainId}`,
            l = this.httpProviders[o];
          if (typeof l > "u")
            throw Error(`JSON-RPC provider for ${o} not found`);
          return l;
        }
        setHttpProvider(o, l) {
          let _ = this.createHttpProvider(o, l);
          _ && (this.httpProviders[o] = _);
        }
        createHttpProvider(o, l) {
          let _ = l || universal_provider_dist_index_es_p(o, this.namespace);
          return typeof _ > "u"
            ? void 0
            : new jsonrpc_provider_dist_index_es_o(
                new jsonrpc_http_connection_dist_index_es_f(
                  _,
                  universal_provider_dist_index_es_h("disableProviderPing")
                )
              );
        }
      };
      var aq = Object.defineProperty,
        universal_provider_dist_index_es_ke = (o, l, _) =>
          l in o
            ? aq(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        universal_provider_dist_index_es_S = (o, l, _) =>
          universal_provider_dist_index_es_ke(
            o,
            "symbol" != typeof l ? l + "" : l,
            _
          );
      let universal_provider_dist_index_es_We = class universal_provider_dist_index_es_We {
        constructor(o) {
          universal_provider_dist_index_es_S(this, "name", "tezos"),
            universal_provider_dist_index_es_S(this, "client"),
            universal_provider_dist_index_es_S(this, "httpProviders"),
            universal_provider_dist_index_es_S(this, "events"),
            universal_provider_dist_index_es_S(this, "namespace"),
            universal_provider_dist_index_es_S(this, "chainId"),
            (this.namespace = o.namespace),
            (this.events = universal_provider_dist_index_es_h("events")),
            (this.client = universal_provider_dist_index_es_h("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(o) {
          this.namespace = Object.assign(this.namespace, o);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let o = this.namespace.chains[0];
          if (!o) throw Error("ChainId not found");
          return o.split(":")[1];
        }
        request(o) {
          return this.namespace.methods.includes(o.request.method)
            ? this.client.request(o)
            : this.getHttpProvider().request(o.request);
        }
        setDefaultChain(o, l) {
          if (((this.chainId = o), !this.httpProviders[o])) {
            let _ =
              l ||
              universal_provider_dist_index_es_p(
                `${this.name}:${o}`,
                this.namespace
              );
            if (!_) throw Error(`No RPC url provided for chainId: ${o}`);
            this.setHttpProvider(o, _);
          }
          this.events.emit(
            a_.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let o = this.namespace.accounts;
          return (
            (o &&
              o
                .filter((o) => o.split(":")[1] === this.chainId.toString())
                .map((o) => o.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let o = {};
          return (
            this.namespace.chains.forEach((l) => {
              o[l] = this.createHttpProvider(l);
            }),
            o
          );
        }
        getHttpProvider() {
          let o = `${this.name}:${this.chainId}`,
            l = this.httpProviders[o];
          if (typeof l > "u")
            throw Error(`JSON-RPC provider for ${o} not found`);
          return l;
        }
        setHttpProvider(o, l) {
          let _ = this.createHttpProvider(o, l);
          _ && (this.httpProviders[o] = _);
        }
        createHttpProvider(o, l) {
          let _ = l || universal_provider_dist_index_es_p(o, this.namespace);
          return typeof _ > "u"
            ? void 0
            : new jsonrpc_provider_dist_index_es_o(
                new jsonrpc_http_connection_dist_index_es_f(_)
              );
        }
      };
      var aM = Object.defineProperty,
        universal_provider_dist_index_es_Ve = (o, l, _) =>
          l in o
            ? aM(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        index_es_D = (o, l, _) =>
          universal_provider_dist_index_es_Ve(
            o,
            "symbol" != typeof l ? l + "" : l,
            _
          );
      let universal_provider_dist_index_es_Xe = class universal_provider_dist_index_es_Xe {
        constructor(o) {
          index_es_D(this, "name", ah),
            index_es_D(this, "client"),
            index_es_D(this, "httpProviders"),
            index_es_D(this, "events"),
            index_es_D(this, "namespace"),
            index_es_D(this, "chainId"),
            (this.namespace = o.namespace),
            (this.events = universal_provider_dist_index_es_h("events")),
            (this.client = universal_provider_dist_index_es_h("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(o) {
          (this.namespace.chains = [
            ...new Set((this.namespace.chains || []).concat(o.chains || [])),
          ]),
            (this.namespace.accounts = [
              ...new Set(
                (this.namespace.accounts || []).concat(o.accounts || [])
              ),
            ]),
            (this.namespace.methods = [
              ...new Set(
                (this.namespace.methods || []).concat(o.methods || [])
              ),
            ]),
            (this.namespace.events = [
              ...new Set((this.namespace.events || []).concat(o.events || [])),
            ]),
            (this.httpProviders = this.createHttpProviders());
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(o) {
          return this.namespace.methods.includes(o.request.method)
            ? this.client.request(o)
            : this.getHttpProvider(o.chainId).request(o.request);
        }
        setDefaultChain(o, l) {
          this.httpProviders[o] || this.setHttpProvider(o, l),
            (this.chainId = o),
            this.events.emit(a_.DEFAULT_CHAIN_CHANGED, `${this.name}:${o}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let o = this.namespace.chains[0];
          if (!o) throw Error("ChainId not found");
          return o.split(":")[1];
        }
        getAccounts() {
          let o = this.namespace.accounts;
          return o
            ? [
                ...new Set(
                  o
                    .filter((o) => o.split(":")[1] === this.chainId.toString())
                    .map((o) => o.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          var o, l;
          let _ = {};
          return (
            null == (l = null == (o = this.namespace) ? void 0 : o.accounts) ||
              l.forEach((o) => {
                let l = index_es_Ie(o);
                _[`${l.namespace}:${l.reference}`] = this.createHttpProvider(o);
              }),
            _
          );
        }
        getHttpProvider(o) {
          let l = this.httpProviders[o];
          if (typeof l > "u")
            throw Error(`JSON-RPC provider for ${o} not found`);
          return l;
        }
        setHttpProvider(o, l) {
          let _ = this.createHttpProvider(o, l);
          _ && (this.httpProviders[o] = _);
        }
        createHttpProvider(o, l) {
          let _ =
            l ||
            universal_provider_dist_index_es_p(
              o,
              this.namespace,
              this.client.core.projectId
            );
          if (!_) throw Error(`No RPC url provided for chainId: ${o}`);
          return new jsonrpc_provider_dist_index_es_o(
            new jsonrpc_http_connection_dist_index_es_f(
              _,
              universal_provider_dist_index_es_h("disableProviderPing")
            )
          );
        }
      };
      var a$ = Object.defineProperty,
        az = Object.defineProperties,
        aH = Object.getOwnPropertyDescriptors,
        aF = Object.getOwnPropertySymbols,
        aV = Object.prototype.hasOwnProperty,
        aK = Object.prototype.propertyIsEnumerable,
        universal_provider_dist_index_es_V = (o, l, _) =>
          l in o
            ? a$(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        universal_provider_dist_index_es_L = (o, l) => {
          for (var _ in l || (l = {}))
            aV.call(l, _) && universal_provider_dist_index_es_V(o, _, l[_]);
          if (aF)
            for (var _ of aF(l))
              aK.call(l, _) && universal_provider_dist_index_es_V(o, _, l[_]);
          return o;
        },
        index_es_X = (o, l) => az(o, aH(l)),
        dist_index_es_u = (o, l, _) =>
          universal_provider_dist_index_es_V(
            o,
            "symbol" != typeof l ? l + "" : l,
            _
          );
      let universal_provider_dist_index_es_x = class universal_provider_dist_index_es_x {
        constructor(o) {
          dist_index_es_u(this, "client"),
            dist_index_es_u(this, "namespaces"),
            dist_index_es_u(this, "optionalNamespaces"),
            dist_index_es_u(this, "sessionProperties"),
            dist_index_es_u(this, "scopedProperties"),
            dist_index_es_u(this, "events", new (Y())()),
            dist_index_es_u(this, "rpcProviders", {}),
            dist_index_es_u(this, "session"),
            dist_index_es_u(this, "providerOpts"),
            dist_index_es_u(this, "logger"),
            dist_index_es_u(this, "uri"),
            dist_index_es_u(this, "disableProviderPing", !1),
            (this.providerOpts = o),
            (this.logger =
              "u" > typeof o?.logger && "string" != typeof o?.logger
                ? o.logger
                : rO()(logger_dist_index_es_k({ level: o?.logger || ac }))),
            (this.disableProviderPing = o?.disableProviderPing || !1);
        }
        static async init(o) {
          let l = new universal_provider_dist_index_es_x(o);
          return await l.initialize(), l;
        }
        async request(o, l, _) {
          let [f, m] = this.validateChain(l);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(f).request({
            request: universal_provider_dist_index_es_L({}, o),
            chainId: `${f}:${m}`,
            topic: this.session.topic,
            expiry: _,
          });
        }
        sendAsync(o, l, _, f) {
          let m = new Date().getTime();
          this.request(o, _, f)
            .then((o) => l(null, formatJsonRpcResult(m, o)))
            .catch((o) => l(o, void 0));
        }
        async enable() {
          if (!this.client) throw Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
                scopedProperties: this.scopedProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var o;
          if (!this.session)
            throw Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (o = this.session) ? void 0 : o.topic,
            reason: index_es_Nt("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(o) {
          if (!this.client) throw Error("Sign Client not initialized");
          if (
            (this.setNamespaces(o),
            await this.cleanupPendingPairings(),
            !o.skipPairing)
          )
            return await this.pair(o.pairingTopic);
        }
        async authenticate(o, l) {
          if (!this.client) throw Error("Sign Client not initialized");
          this.setNamespaces(o), await this.cleanupPendingPairings();
          let { uri: _, response: f } = await this.client.authenticate(o, l);
          _ && ((this.uri = _), this.events.emit("display_uri", _));
          let m = await f();
          if (((this.session = m.session), this.session)) {
            let o = index_es_vt(this.session.namespaces);
            (this.namespaces = universal_provider_dist_index_es_z(
              this.namespaces,
              o
            )),
              await this.persist("namespaces", this.namespaces),
              this.onConnect();
          }
          return m;
        }
        on(o, l) {
          this.events.on(o, l);
        }
        once(o, l) {
          this.events.once(o, l);
        }
        removeListener(o, l) {
          this.events.removeListener(o, l);
        }
        off(o, l) {
          this.events.off(o, l);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(o) {
          let { uri: l, approval: _ } = await this.client.connect({
            pairingTopic: o,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties,
          });
          l && ((this.uri = l), this.events.emit("display_uri", l));
          let f = await _();
          this.session = f;
          let m = index_es_vt(f.namespaces);
          return (
            (this.namespaces = universal_provider_dist_index_es_z(
              this.namespaces,
              m
            )),
            await this.persist("namespaces", this.namespaces),
            await this.persist("optionalNamespaces", this.optionalNamespaces),
            this.onConnect(),
            this.session
          );
        }
        setDefaultChain(o, l) {
          try {
            if (!this.session) return;
            let [_, f] = this.validateChain(o),
              m = this.getProvider(_);
            m.name === ah
              ? m.setDefaultChain(`${_}:${f}`, l)
              : m.setDefaultChain(f, l);
          } catch (o) {
            if (!/Please call connect/.test(o.message)) throw o;
          }
        }
        async cleanupPendingPairings(o = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          let l = this.client.pairing.getAll();
          if (oe(l)) {
            for (let _ of l)
              o.deletePairings
                ? this.client.core.expirer.set(_.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    _.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${l.length}`);
          }
        }
        abortPairingAttempt() {
          this.logger.warn(
            "abortPairingAttempt is deprecated. This is now a no-op."
          );
        }
        async checkStorage() {
          (this.namespaces = (await this.getFromStore("namespaces")) || {}),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.session && this.createProviders();
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          var o, l;
          if (
            ((this.client =
              this.providerOpts.client ||
              (await sign_client_dist_index_es_Ee.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || ac,
                relayUrl:
                  this.providerOpts.relayUrl || "wss://relay.walletconnect.org",
                projectId: this.providerOpts.projectId,
                metadata: this.providerOpts.metadata,
                storageOptions: this.providerOpts.storageOptions,
                storage: this.providerOpts.storage,
                name: this.providerOpts.name,
                customStoragePrefix: this.providerOpts.customStoragePrefix,
                telemetryEnabled: this.providerOpts.telemetryEnabled,
              }))),
            this.providerOpts.session)
          )
            try {
              this.session = this.client.session.get(
                this.providerOpts.session.topic
              );
            } catch (_) {
              throw (
                (this.logger.error("Failed to get session", _),
                Error(
                  `The provided session: ${
                    null ==
                    (l = null == (o = this.providerOpts) ? void 0 : o.session)
                      ? void 0
                      : l.topic
                  } doesn't exist in the Sign client`
                ))
              );
            }
          else {
            let o = this.client.session.getAll();
            this.session = o[0];
          }
          this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw Error("Sign Client not initialized");
          if (!this.session)
            throw Error(
              "Session not initialized. Please call connect() before enable()"
            );
          let o = [
            ...new Set(
              Object.keys(this.session.namespaces).map((o) => index_es_yo(o))
            ),
          ];
          dist_index_es_W("client", this.client),
            dist_index_es_W("events", this.events),
            dist_index_es_W("disableProviderPing", this.disableProviderPing),
            o.forEach((o) => {
              if (!this.session) return;
              let l = (function (o, l) {
                  let _ = Object.keys(l.namespaces).filter((l) =>
                    l.includes(o)
                  );
                  if (!_.length) return [];
                  let f = [];
                  return (
                    _.forEach((o) => {
                      let _ = l.namespaces[o].accounts;
                      f.push(..._);
                    }),
                    f
                  );
                })(o, this.session),
                _ = dist_index_es_lt(l),
                f = universal_provider_dist_index_es_z(
                  this.namespaces,
                  this.optionalNamespaces
                ),
                m = index_es_X(universal_provider_dist_index_es_L({}, f[o]), {
                  accounts: l,
                  chains: _,
                });
              switch (o) {
                case "eip155":
                  this.rpcProviders[o] =
                    new universal_provider_dist_index_es_Ie({ namespace: m });
                  break;
                case "algorand":
                  this.rpcProviders[o] =
                    new universal_provider_dist_index_es_De({ namespace: m });
                  break;
                case "solana":
                  this.rpcProviders[o] = new index_es_Ae({ namespace: m });
                  break;
                case "cosmos":
                  this.rpcProviders[o] =
                    new universal_provider_dist_index_es_Ee({ namespace: m });
                  break;
                case "polkadot":
                  this.rpcProviders[o] = new dist_index_es_ve({ namespace: m });
                  break;
                case "cip34":
                  this.rpcProviders[o] = new dist_index_es_Re({ namespace: m });
                  break;
                case "elrond":
                  this.rpcProviders[o] =
                    new universal_provider_dist_index_es_Fe({ namespace: m });
                  break;
                case "multiversx":
                  this.rpcProviders[o] =
                    new universal_provider_dist_index_es_Me({ namespace: m });
                  break;
                case "near":
                  this.rpcProviders[o] =
                    new universal_provider_dist_index_es_Je({ namespace: m });
                  break;
                case "tezos":
                  this.rpcProviders[o] =
                    new universal_provider_dist_index_es_We({ namespace: m });
                  break;
                default:
                  this.rpcProviders[ah]
                    ? this.rpcProviders[ah].updateNamespace(m)
                    : (this.rpcProviders[ah] =
                        new universal_provider_dist_index_es_Xe({
                          namespace: m,
                        }));
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (o) => {
            var l;
            let { topic: _ } = o;
            _ === (null == (l = this.session) ? void 0 : l.topic) &&
              this.events.emit("session_ping", o);
          }),
            this.client.on("session_event", (o) => {
              var l;
              let { params: _, topic: f } = o;
              if (f !== (null == (l = this.session) ? void 0 : l.topic)) return;
              let { event: m } = _;
              if ("accountsChanged" === m.name) {
                let o = m.data;
                o &&
                  oe(o) &&
                  this.events.emit("accountsChanged", o.map(dist_index_es_mt));
              } else if ("chainChanged" === m.name) {
                let o = _.chainId,
                  l = _.event.data,
                  f = index_es_yo(o),
                  m =
                    universal_provider_dist_index_es_k(o) !==
                    universal_provider_dist_index_es_k(l)
                      ? `${f}:${universal_provider_dist_index_es_k(l)}`
                      : o;
                this.onChainChanged(m);
              } else this.events.emit(m.name, m.data);
              this.events.emit("session_event", o);
            }),
            this.client.on("session_update", ({ topic: o, params: l }) => {
              var _, f;
              if (o !== (null == (_ = this.session) ? void 0 : _.topic)) return;
              let { namespaces: m } = l,
                b = null == (f = this.client) ? void 0 : f.session.get(o);
              (this.session = index_es_X(
                universal_provider_dist_index_es_L({}, b),
                { namespaces: m }
              )),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: o, params: l });
            }),
            this.client.on("session_delete", async (o) => {
              var l;
              o.topic === (null == (l = this.session) ? void 0 : l.topic) &&
                (await this.cleanup(),
                this.events.emit("session_delete", o),
                this.events.emit(
                  "disconnect",
                  index_es_X(
                    universal_provider_dist_index_es_L(
                      {},
                      index_es_Nt("USER_DISCONNECTED")
                    ),
                    { data: o.topic }
                  )
                ));
            }),
            this.on(a_.DEFAULT_CHAIN_CHANGED, (o) => {
              this.onChainChanged(o, !0);
            });
        }
        getProvider(o) {
          return this.rpcProviders[o] || this.rpcProviders[ah];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((o) => {
            var l;
            this.getProvider(o).updateNamespace(
              null == (l = this.session) ? void 0 : l.namespaces[o]
            );
          });
        }
        setNamespaces(o) {
          let {
            namespaces: l,
            optionalNamespaces: _,
            sessionProperties: f,
            scopedProperties: m,
          } = o;
          l && Object.keys(l).length && (this.namespaces = l),
            _ && Object.keys(_).length && (this.optionalNamespaces = _),
            (this.sessionProperties = f),
            (this.scopedProperties = m);
        }
        validateChain(o) {
          let [l, _] = o?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [l, _];
          if (
            l &&
            !Object.keys(this.namespaces || {})
              .map((o) => index_es_yo(o))
              .includes(l)
          )
            throw Error(
              `Namespace '${l}' is not configured. Please call connect() first with namespace config.`
            );
          if (l && _) return [l, _];
          let f = index_es_yo(Object.keys(this.namespaces)[0]),
            m = this.rpcProviders[f].getDefaultChain();
          return [f, m];
        }
        async requestAccounts() {
          let [o] = this.validateChain();
          return await this.getProvider(o).requestAccounts();
        }
        async onChainChanged(o, l = !1) {
          if (!this.namespaces) return;
          let [_, f] = this.validateChain(o);
          if (!f) return;
          this.updateNamespaceChain(_, f), this.events.emit("chainChanged", f);
          let m = this.getProvider(_).getDefaultChain();
          l || this.getProvider(_).setDefaultChain(f),
            this.emitAccountsChangedOnChainChange({
              namespace: _,
              previousChainId: m,
              newChainId: o,
            }),
            await this.persist("namespaces", this.namespaces);
        }
        emitAccountsChangedOnChainChange({
          namespace: o,
          previousChainId: l,
          newChainId: _,
        }) {
          var f, m;
          try {
            if (l === _) return;
            let b =
              null ==
              (m = null == (f = this.session) ? void 0 : f.namespaces[o])
                ? void 0
                : m.accounts;
            if (!b) return;
            let w = b.filter((o) => o.includes(`${_}:`)).map(dist_index_es_mt);
            if (!oe(w)) return;
            this.events.emit("accountsChanged", w);
          } catch (o) {
            this.logger.warn(
              "Failed to emit accountsChanged on chain change",
              o
            );
          }
        }
        updateNamespaceChain(o, l) {
          if (!this.namespaces) return;
          let _ = this.namespaces[o] ? o : `${o}:${l}`;
          this.namespaces[_]
            ? this.namespaces[_] && (this.namespaces[_].defaultChain = l)
            : (this.namespaces[_] = {
                chains: [],
                methods: [],
                events: [],
                defaultChain: l,
              });
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            await this.deleteFromStore("namespaces"),
            await this.deleteFromStore("optionalNamespaces"),
            await this.deleteFromStore("sessionProperties"),
            (this.session = void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 }),
            await this.cleanupStorage();
        }
        async persist(o, l) {
          var _;
          let f = (null == (_ = this.session) ? void 0 : _.topic) || "";
          await this.client.core.storage.setItem(`${ad}/${o}${f}`, l);
        }
        async getFromStore(o) {
          var l;
          let _ = (null == (l = this.session) ? void 0 : l.topic) || "";
          return await this.client.core.storage.getItem(`${ad}/${o}${_}`);
        }
        async deleteFromStore(o) {
          var l;
          let _ = (null == (l = this.session) ? void 0 : l.topic) || "";
          await this.client.core.storage.removeItem(`${ad}/${o}${_}`);
        }
        async cleanupStorage() {
          var o;
          try {
            if ((null == (o = this.client) ? void 0 : o.session.length) > 0)
              return;
            let l = await this.client.core.storage.getKeys();
            for (let o of l)
              o.startsWith(ad) &&
                (await this.client.core.storage.removeItem(o));
          } catch (o) {
            this.logger.warn("Failed to cleanup storage", o);
          }
        }
      };
      let aW = ["eth_sendTransaction", "personal_sign"],
        aG = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
          "wallet_sendCalls",
          "wallet_getCapabilities",
          "wallet_getCallsStatus",
          "wallet_showCallsStatus",
        ],
        aJ = ["chainChanged", "accountsChanged"],
        aY = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ];
      var aX = Object.defineProperty,
        aQ = Object.defineProperties,
        aZ = Object.getOwnPropertyDescriptors,
        a0 = Object.getOwnPropertySymbols,
        a1 = Object.prototype.hasOwnProperty,
        a2 = Object.prototype.propertyIsEnumerable,
        ethereum_provider_dist_index_es_y = (o, l, _) =>
          l in o
            ? aX(o, l, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: _,
              })
            : (o[l] = _),
        ethereum_provider_dist_index_es_g = (o, l) => {
          for (var _ in l || (l = {}))
            a1.call(l, _) && ethereum_provider_dist_index_es_y(o, _, l[_]);
          if (a0)
            for (var _ of a0(l))
              a2.call(l, _) && ethereum_provider_dist_index_es_y(o, _, l[_]);
          return o;
        },
        ethereum_provider_dist_index_es_ = (o, l) => aQ(o, aZ(l)),
        ethereum_provider_dist_index_es_o = (o, l, _) =>
          ethereum_provider_dist_index_es_y(
            o,
            "symbol" != typeof l ? l + "" : l,
            _
          );
      function ethereum_provider_dist_index_es_v(o) {
        return Number(o[0].split(":")[1]);
      }
      function ethereum_provider_dist_index_es_C(o) {
        return `0x${o.toString(16)}`;
      }
      let ethereum_provider_dist_index_es_w = class ethereum_provider_dist_index_es_w {
        constructor() {
          ethereum_provider_dist_index_es_o(
            this,
            "events",
            new G.EventEmitter()
          ),
            ethereum_provider_dist_index_es_o(this, "namespace", "eip155"),
            ethereum_provider_dist_index_es_o(this, "accounts", []),
            ethereum_provider_dist_index_es_o(this, "signer"),
            ethereum_provider_dist_index_es_o(this, "chainId", 1),
            ethereum_provider_dist_index_es_o(this, "modal"),
            ethereum_provider_dist_index_es_o(this, "rpc"),
            ethereum_provider_dist_index_es_o(
              this,
              "STORAGE_KEY",
              "wc@2:ethereum_provider:"
            ),
            ethereum_provider_dist_index_es_o(
              this,
              "on",
              (o, l) => (this.events.on(o, l), this)
            ),
            ethereum_provider_dist_index_es_o(
              this,
              "once",
              (o, l) => (this.events.once(o, l), this)
            ),
            ethereum_provider_dist_index_es_o(
              this,
              "removeListener",
              (o, l) => (this.events.removeListener(o, l), this)
            ),
            ethereum_provider_dist_index_es_o(
              this,
              "off",
              (o, l) => (this.events.off(o, l), this)
            ),
            ethereum_provider_dist_index_es_o(this, "parseAccount", (o) =>
              this.isCompatibleChainId(o) ? this.parseAccountId(o).address : o
            ),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(o) {
          let l = new ethereum_provider_dist_index_es_w();
          return await l.initialize(o), l;
        }
        async request(o, l) {
          return await this.signer.request(
            o,
            this.formatChainId(this.chainId),
            l
          );
        }
        sendAsync(o, l, _) {
          this.signer.sendAsync(o, l, this.formatChainId(this.chainId), _);
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(o) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(o);
          let { required: l, optional: _ } = (function (o) {
            let {
              chains: l,
              optionalChains: _,
              methods: f,
              optionalMethods: m,
              events: b,
              optionalEvents: w,
              rpcMap: E,
            } = o;
            if (!oe(l)) throw Error("Invalid chains");
            let D = {
                chains: l,
                methods: f || aW,
                events: b || aJ,
                rpcMap: ethereum_provider_dist_index_es_g(
                  {},
                  l.length
                    ? {
                        [ethereum_provider_dist_index_es_v(l)]:
                          E[ethereum_provider_dist_index_es_v(l)],
                      }
                    : {}
                ),
              },
              P = b?.filter((o) => !aJ.includes(o)),
              C = f?.filter((o) => !aW.includes(o));
            if (
              !_ &&
              !w &&
              !m &&
              !(null != P && P.length) &&
              !(null != C && C.length)
            )
              return { required: l.length ? D : void 0 };
            let A = (P?.length && C?.length) || !_,
              R = {
                chains: [...new Set(A ? D.chains.concat(_ || []) : _)],
                methods: [
                  ...new Set(D.methods.concat(null != m && m.length ? m : aG)),
                ],
                events: [
                  ...new Set(D.events.concat(null != w && w.length ? w : aY)),
                ],
                rpcMap: E,
              };
            return {
              required: l.length ? D : void 0,
              optional: _.length ? R : void 0,
            };
          })(this.rpc);
          try {
            let f = await new Promise(async (f, m) => {
              var b;
              this.rpc.showQrModal &&
                (null == (b = this.modal) ||
                  b.subscribeModal((o) => {
                    o.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      m(Error("Connection request reset. Please try again.")));
                  }));
              let w =
                null != o && o.scopedProperties
                  ? { [this.namespace]: o.scopedProperties }
                  : void 0;
              await this.signer
                .connect(
                  ethereum_provider_dist_index_es_(
                    ethereum_provider_dist_index_es_g(
                      {
                        namespaces: ethereum_provider_dist_index_es_g(
                          {},
                          l && { [this.namespace]: l }
                        ),
                      },
                      _ && { optionalNamespaces: { [this.namespace]: _ } }
                    ),
                    { pairingTopic: o?.pairingTopic, scopedProperties: w }
                  )
                )
                .then((o) => {
                  f(o);
                })
                .catch((o) => {
                  m(Error(o.message));
                });
            });
            if (!f) return;
            let m = index_es_Ko(f.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : m),
              this.setAccounts(m),
              this.events.emit("connect", {
                chainId: ethereum_provider_dist_index_es_C(this.chainId),
              });
          } catch (o) {
            throw (this.signer.logger.error(o), o);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async authenticate(o, l) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts({ chains: o?.chains });
          try {
            let _ = await new Promise(async (_, f) => {
                var m;
                this.rpc.showQrModal &&
                  (null == (m = this.modal) ||
                    m.subscribeModal((o) => {
                      o.open ||
                        this.signer.session ||
                        (this.signer.abortPairingAttempt(),
                        f(
                          Error("Connection request reset. Please try again.")
                        ));
                    })),
                  await this.signer
                    .authenticate(
                      ethereum_provider_dist_index_es_(
                        ethereum_provider_dist_index_es_g({}, o),
                        { chains: this.rpc.chains }
                      ),
                      l
                    )
                    .then((o) => {
                      _(o);
                    })
                    .catch((o) => {
                      f(Error(o.message));
                    });
              }),
              f = _.session;
            if (f) {
              let o = index_es_Ko(f.namespaces, [this.namespace]);
              this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o),
                this.setAccounts(o),
                this.events.emit("connect", {
                  chainId: ethereum_provider_dist_index_es_C(this.chainId),
                });
            }
            return _;
          } catch (o) {
            throw (this.signer.logger.error(o), o);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (o) => {
            let { params: l } = o,
              { event: _ } = l;
            "accountsChanged" === _.name
              ? ((this.accounts = this.parseAccounts(_.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === _.name
              ? this.setChainId(this.formatChainId(_.data))
              : this.events.emit(_.name, _.data),
              this.events.emit("session_event", o);
          }),
            this.signer.on("accountsChanged", (o) => {
              (this.accounts = this.parseAccounts(o)),
                this.events.emit("accountsChanged", this.accounts);
            }),
            this.signer.on("chainChanged", (o) => {
              let l = parseInt(o);
              (this.chainId = l),
                this.events.emit(
                  "chainChanged",
                  ethereum_provider_dist_index_es_C(this.chainId)
                ),
                this.persist();
            }),
            this.signer.on("session_update", (o) => {
              this.events.emit("session_update", o);
            }),
            this.signer.on("session_delete", (o) => {
              this.reset(),
                this.events.emit("session_delete", o),
                this.events.emit(
                  "disconnect",
                  ethereum_provider_dist_index_es_(
                    ethereum_provider_dist_index_es_g(
                      {},
                      index_es_Nt("USER_DISCONNECTED")
                    ),
                    { data: o.topic, name: "USER_DISCONNECTED" }
                  )
                );
            }),
            this.signer.on("display_uri", (o) => {
              var l, _;
              this.rpc.showQrModal &&
                (null == (l = this.modal) || l.closeModal(),
                null == (_ = this.modal) || _.openModal({ uri: o })),
                this.events.emit("display_uri", o);
            });
        }
        switchEthereumChain(o) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: o.toString(16) }],
          });
        }
        isCompatibleChainId(o) {
          return "string" == typeof o && o.startsWith(`${this.namespace}:`);
        }
        formatChainId(o) {
          return `${this.namespace}:${o}`;
        }
        parseChainId(o) {
          return Number(o.split(":")[1]);
        }
        setChainIds(o) {
          let l = o
            .filter((o) => this.isCompatibleChainId(o))
            .map((o) => this.parseChainId(o));
          l.length &&
            ((this.chainId = l[0]),
            this.events.emit(
              "chainChanged",
              ethereum_provider_dist_index_es_C(this.chainId)
            ),
            this.persist());
        }
        setChainId(o) {
          if (this.isCompatibleChainId(o)) {
            let l = this.parseChainId(o);
            (this.chainId = l), this.switchEthereumChain(l);
          }
        }
        parseAccountId(o) {
          let [l, _, f] = o.split(":");
          return { chainId: `${l}:${_}`, address: f };
        }
        setAccounts(o) {
          (this.accounts = o
            .filter(
              (o) =>
                this.parseChainId(this.parseAccountId(o).chainId) ===
                this.chainId
            )
            .map((o) => this.parseAccountId(o).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(o) {
          var l, _;
          let f = null != (l = o?.chains) ? l : [],
            m = null != (_ = o?.optionalChains) ? _ : [],
            b = f.concat(m);
          if (!b.length)
            throw Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          let w = f.length ? o?.methods || aW : [],
            E = f.length ? o?.events || aJ : [],
            D = o?.optionalMethods || [],
            P = o?.optionalEvents || [],
            C = o?.rpcMap || this.buildRpcMap(b, o.projectId),
            A = o?.qrModalOptions || void 0;
          return {
            chains: f?.map((o) => this.formatChainId(o)),
            optionalChains: m.map((o) => this.formatChainId(o)),
            methods: w,
            events: E,
            optionalMethods: D,
            optionalEvents: P,
            rpcMap: C,
            showQrModal: !!(null != o && o.showQrModal),
            qrModalOptions: A,
            projectId: o.projectId,
            metadata: o.metadata,
          };
        }
        buildRpcMap(o, l) {
          let _ = {};
          return (
            o.forEach((o) => {
              _[o] = this.getRpcUrl(o, l);
            }),
            _
          );
        }
        async initialize(o) {
          if (
            ((this.rpc = this.getRpcConfig(o)),
            (this.chainId = this.rpc.chains.length
              ? ethereum_provider_dist_index_es_v(this.rpc.chains)
              : ethereum_provider_dist_index_es_v(this.rpc.optionalChains)),
            (this.signer = await universal_provider_dist_index_es_x.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: o.disableProviderPing,
              relayUrl: o.relayUrl,
              storage: o.storage,
              storageOptions: o.storageOptions,
              customStoragePrefix: o.customStoragePrefix,
              telemetryEnabled: o.telemetryEnabled,
              logger: o.logger,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let o;
            try {
              let { WalletConnectModal: l } = await _.e(6226).then(
                _.bind(_, 46226)
              );
              o = l;
            } catch {
              throw Error(
                "To use QR modal, please install @walletconnect/modal package"
              );
            }
            if (o)
              try {
                this.modal = new o(
                  ethereum_provider_dist_index_es_g(
                    { projectId: this.rpc.projectId },
                    this.rpc.qrModalOptions
                  )
                );
              } catch (o) {
                throw (
                  (this.signer.logger.error(o),
                  Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(o) {
          if (!o) return;
          let { chains: l, optionalChains: _, rpcMap: f } = o;
          l &&
            oe(l) &&
            ((this.rpc.chains = l.map((o) => this.formatChainId(o))),
            l.forEach((o) => {
              this.rpc.rpcMap[o] = f?.[o] || this.getRpcUrl(o);
            })),
            _ &&
              oe(_) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = _?.map((o) => this.formatChainId(o))),
              _.forEach((o) => {
                this.rpc.rpcMap[o] = f?.[o] || this.getRpcUrl(o);
              }));
        }
        getRpcUrl(o, l) {
          var _;
          return (
            (null == (_ = this.rpc.rpcMap) ? void 0 : _[o]) ||
            `https://rpc.walletconnect.org/v1/?chainId=eip155:${o}&projectId=${
              l || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (this.session)
            try {
              let o = await this.signer.client.core.storage.getItem(
                  `${this.STORAGE_KEY}/chainId`
                ),
                l = this.session.namespaces[`${this.namespace}:${o}`]
                  ? this.session.namespaces[`${this.namespace}:${o}`]
                  : this.session.namespaces[this.namespace];
              this.setChainIds(o ? [this.formatChainId(o)] : l?.accounts),
                this.setAccounts(l?.accounts);
            } catch (o) {
              this.signer.logger.error(
                "Failed to load persisted session, clearing state..."
              ),
                this.signer.logger.error(o),
                await this.disconnect().catch((o) =>
                  this.signer.logger.warn(o)
                );
            }
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(o) {
          return "string" == typeof o || o instanceof String
            ? [this.parseAccount(o)]
            : o.map((o) => this.parseAccount(o));
        }
      };
      let a8 = ethereum_provider_dist_index_es_w;
    },
    98319: function (o, l, _) {
      "use strict";
      Object.defineProperty(l, "__esModule", { value: !0 });
      let f = _(65949);
      f.__exportStar(_(93497), l), f.__exportStar(_(72879), l);
    },
    93497: function (o, l) {
      "use strict";
      Object.defineProperty(l, "__esModule", { value: !0 }),
        (l.ONE_THOUSAND = l.ONE_HUNDRED = void 0),
        (l.ONE_HUNDRED = 100),
        (l.ONE_THOUSAND = 1e3);
    },
    72879: function (o, l) {
      "use strict";
      Object.defineProperty(l, "__esModule", { value: !0 }),
        (l.ONE_YEAR =
          l.FOUR_WEEKS =
          l.THREE_WEEKS =
          l.TWO_WEEKS =
          l.ONE_WEEK =
          l.THIRTY_DAYS =
          l.SEVEN_DAYS =
          l.FIVE_DAYS =
          l.THREE_DAYS =
          l.ONE_DAY =
          l.TWENTY_FOUR_HOURS =
          l.TWELVE_HOURS =
          l.SIX_HOURS =
          l.THREE_HOURS =
          l.ONE_HOUR =
          l.SIXTY_MINUTES =
          l.THIRTY_MINUTES =
          l.TEN_MINUTES =
          l.FIVE_MINUTES =
          l.ONE_MINUTE =
          l.SIXTY_SECONDS =
          l.THIRTY_SECONDS =
          l.TEN_SECONDS =
          l.FIVE_SECONDS =
          l.ONE_SECOND =
            void 0),
        (l.ONE_SECOND = 1),
        (l.FIVE_SECONDS = 5),
        (l.TEN_SECONDS = 10),
        (l.THIRTY_SECONDS = 30),
        (l.SIXTY_SECONDS = 60),
        (l.ONE_MINUTE = l.SIXTY_SECONDS),
        (l.FIVE_MINUTES = 5 * l.ONE_MINUTE),
        (l.TEN_MINUTES = 10 * l.ONE_MINUTE),
        (l.THIRTY_MINUTES = 30 * l.ONE_MINUTE),
        (l.SIXTY_MINUTES = 60 * l.ONE_MINUTE),
        (l.ONE_HOUR = l.SIXTY_MINUTES),
        (l.THREE_HOURS = 3 * l.ONE_HOUR),
        (l.SIX_HOURS = 6 * l.ONE_HOUR),
        (l.TWELVE_HOURS = 12 * l.ONE_HOUR),
        (l.TWENTY_FOUR_HOURS = 24 * l.ONE_HOUR),
        (l.ONE_DAY = l.TWENTY_FOUR_HOURS),
        (l.THREE_DAYS = 3 * l.ONE_DAY),
        (l.FIVE_DAYS = 5 * l.ONE_DAY),
        (l.SEVEN_DAYS = 7 * l.ONE_DAY),
        (l.THIRTY_DAYS = 30 * l.ONE_DAY),
        (l.ONE_WEEK = l.SEVEN_DAYS),
        (l.TWO_WEEKS = 2 * l.ONE_WEEK),
        (l.THREE_WEEKS = 3 * l.ONE_WEEK),
        (l.FOUR_WEEKS = 4 * l.ONE_WEEK),
        (l.ONE_YEAR = 365 * l.ONE_DAY);
    },
    46196: function (o, l, _) {
      "use strict";
      Object.defineProperty(l, "__esModule", { value: !0 });
      let f = _(65949);
      f.__exportStar(_(20728), l),
        f.__exportStar(_(51215), l),
        f.__exportStar(_(88244), l),
        f.__exportStar(_(98319), l);
    },
    88244: function (o, l, _) {
      "use strict";
      Object.defineProperty(l, "__esModule", { value: !0 });
      let f = _(65949);
      f.__exportStar(_(74218), l);
    },
    74218: function (o, l) {
      "use strict";
      Object.defineProperty(l, "__esModule", { value: !0 }),
        (l.IWatch = void 0),
        (l.IWatch = class {});
    },
    40658: function (o, l, _) {
      "use strict";
      Object.defineProperty(l, "__esModule", { value: !0 }),
        (l.fromMiliseconds = l.toMiliseconds = void 0);
      let f = _(98319);
      (l.toMiliseconds = function (o) {
        return o * f.ONE_THOUSAND;
      }),
        (l.fromMiliseconds = function (o) {
          return Math.floor(o / f.ONE_THOUSAND);
        });
    },
    52993: function (o, l) {
      "use strict";
      Object.defineProperty(l, "__esModule", { value: !0 }),
        (l.delay = void 0),
        (l.delay = function (o) {
          return new Promise((l) => {
            setTimeout(() => {
              l(!0);
            }, o);
          });
        });
    },
    20728: function (o, l, _) {
      "use strict";
      Object.defineProperty(l, "__esModule", { value: !0 });
      let f = _(65949);
      f.__exportStar(_(52993), l), f.__exportStar(_(40658), l);
    },
    51215: function (o, l) {
      "use strict";
      Object.defineProperty(l, "__esModule", { value: !0 }), (l.Watch = void 0);
      let Watch = class Watch {
        constructor() {
          this.timestamps = new Map();
        }
        start(o) {
          if (this.timestamps.has(o))
            throw Error(`Watch already started for label: ${o}`);
          this.timestamps.set(o, { started: Date.now() });
        }
        stop(o) {
          let l = this.get(o);
          if (void 0 !== l.elapsed)
            throw Error(`Watch already stopped for label: ${o}`);
          let _ = Date.now() - l.started;
          this.timestamps.set(o, { started: l.started, elapsed: _ });
        }
        get(o) {
          let l = this.timestamps.get(o);
          if (void 0 === l) throw Error(`No timestamp found for label: ${o}`);
          return l;
        }
        elapsed(o) {
          let l = this.get(o),
            _ = l.elapsed || Date.now() - l.started;
          return _;
        }
      };
      (l.Watch = Watch), (l.default = Watch);
    },
    73079: function (o, l) {
      "use strict";
      function getFromWindow(o) {
        let l;
        return (
          "undefined" != typeof window &&
            void 0 !== window[o] &&
            (l = window[o]),
          l
        );
      }
      function getFromWindowOrThrow(o) {
        let l = getFromWindow(o);
        if (!l) throw Error(`${o} is not defined in Window`);
        return l;
      }
      Object.defineProperty(l, "__esModule", { value: !0 }),
        (l.getLocalStorage =
          l.getLocalStorageOrThrow =
          l.getCrypto =
          l.getCryptoOrThrow =
          l.getLocation =
          l.getLocationOrThrow =
          l.getNavigator =
          l.getNavigatorOrThrow =
          l.getDocument =
          l.getDocumentOrThrow =
          l.getFromWindowOrThrow =
          l.getFromWindow =
            void 0),
        (l.getFromWindow = getFromWindow),
        (l.getFromWindowOrThrow = getFromWindowOrThrow),
        (l.getDocumentOrThrow = function () {
          return getFromWindowOrThrow("document");
        }),
        (l.getDocument = function () {
          return getFromWindow("document");
        }),
        (l.getNavigatorOrThrow = function () {
          return getFromWindowOrThrow("navigator");
        }),
        (l.getNavigator = function () {
          return getFromWindow("navigator");
        }),
        (l.getLocationOrThrow = function () {
          return getFromWindowOrThrow("location");
        }),
        (l.getLocation = function () {
          return getFromWindow("location");
        }),
        (l.getCryptoOrThrow = function () {
          return getFromWindowOrThrow("crypto");
        }),
        (l.getCrypto = function () {
          return getFromWindow("crypto");
        }),
        (l.getLocalStorageOrThrow = function () {
          return getFromWindowOrThrow("localStorage");
        }),
        (l.getLocalStorage = function () {
          return getFromWindow("localStorage");
        });
    },
    42669: function (o, l, _) {
      "use strict";
      l.D = void 0;
      let f = _(73079);
      l.D = function () {
        let o, l, _;
        try {
          (o = f.getDocumentOrThrow()), (l = f.getLocationOrThrow());
        } catch (o) {
          return null;
        }
        function getWindowMetadataOfAny(...l) {
          let _ = o.getElementsByTagName("meta");
          for (let o = 0; o < _.length; o++) {
            let f = _[o],
              m = ["itemprop", "property", "name"]
                .map((o) => f.getAttribute(o))
                .filter((o) => !!o && l.includes(o));
            if (m.length && m) {
              let o = f.getAttribute("content");
              if (o) return o;
            }
          }
          return "";
        }
        let m =
            ((_ = getWindowMetadataOfAny(
              "name",
              "og:site_name",
              "og:title",
              "twitter:title"
            )) || (_ = o.title),
            _),
          b = (function () {
            let o = getWindowMetadataOfAny(
              "description",
              "og:description",
              "twitter:description",
              "keywords"
            );
            return o;
          })(),
          w = l.origin,
          E = (function () {
            let _ = o.getElementsByTagName("link"),
              f = [];
            for (let o = 0; o < _.length; o++) {
              let m = _[o],
                b = m.getAttribute("rel");
              if (b && b.toLowerCase().indexOf("icon") > -1) {
                let o = m.getAttribute("href");
                if (o) {
                  if (
                    -1 === o.toLowerCase().indexOf("https:") &&
                    -1 === o.toLowerCase().indexOf("http:") &&
                    0 !== o.indexOf("//")
                  ) {
                    let _ = l.protocol + "//" + l.host;
                    if (0 === o.indexOf("/")) _ += o;
                    else {
                      let f = l.pathname.split("/");
                      f.pop();
                      let m = f.join("/");
                      _ += m + "/" + o;
                    }
                    f.push(_);
                  } else if (0 === o.indexOf("//")) {
                    let _ = l.protocol + o;
                    f.push(_);
                  } else f.push(o);
                }
              }
            }
            return f;
          })();
        return { description: b, url: w, icons: E, name: m };
      };
    },
    91024: function (o, l, _) {
      var f =
          ("undefined" != typeof globalThis && globalThis) ||
          ("undefined" != typeof self && self) ||
          (void 0 !== _.g && _.g),
        m = (function () {
          function F() {
            (this.fetch = !1), (this.DOMException = f.DOMException);
          }
          return (F.prototype = f), new F();
        })();
      (function (o) {
        var l =
            (void 0 !== m && m) ||
            ("undefined" != typeof self && self) ||
            (void 0 !== _.g && _.g) ||
            {},
          f = {
            searchParams: "URLSearchParams" in l,
            iterable: "Symbol" in l && "iterator" in Symbol,
            blob:
              "FileReader" in l &&
              "Blob" in l &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (o) {
                  return !1;
                }
              })(),
            formData: "FormData" in l,
            arrayBuffer: "ArrayBuffer" in l,
          };
        if (f.arrayBuffer)
          var b = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            w =
              ArrayBuffer.isView ||
              function (o) {
                return o && b.indexOf(Object.prototype.toString.call(o)) > -1;
              };
        function normalizeName(o) {
          if (
            ("string" != typeof o && (o = String(o)),
            /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(o) || "" === o)
          )
            throw TypeError(
              'Invalid character in header field name: "' + o + '"'
            );
          return o.toLowerCase();
        }
        function normalizeValue(o) {
          return "string" != typeof o && (o = String(o)), o;
        }
        function iteratorFor(o) {
          var l = {
            next: function () {
              var l = o.shift();
              return { done: void 0 === l, value: l };
            },
          };
          return (
            f.iterable &&
              (l[Symbol.iterator] = function () {
                return l;
              }),
            l
          );
        }
        function Headers(o) {
          (this.map = {}),
            o instanceof Headers
              ? o.forEach(function (o, l) {
                  this.append(l, o);
                }, this)
              : Array.isArray(o)
              ? o.forEach(function (o) {
                  if (2 != o.length)
                    throw TypeError(
                      "Headers constructor: expected name/value pair to be length 2, found" +
                        o.length
                    );
                  this.append(o[0], o[1]);
                }, this)
              : o &&
                Object.getOwnPropertyNames(o).forEach(function (l) {
                  this.append(l, o[l]);
                }, this);
        }
        function consumed(o) {
          if (!o._noBody) {
            if (o.bodyUsed) return Promise.reject(TypeError("Already read"));
            o.bodyUsed = !0;
          }
        }
        function fileReaderReady(o) {
          return new Promise(function (l, _) {
            (o.onload = function () {
              l(o.result);
            }),
              (o.onerror = function () {
                _(o.error);
              });
          });
        }
        function readBlobAsArrayBuffer(o) {
          var l = new FileReader(),
            _ = fileReaderReady(l);
          return l.readAsArrayBuffer(o), _;
        }
        function bufferClone(o) {
          if (o.slice) return o.slice(0);
          var l = new Uint8Array(o.byteLength);
          return l.set(new Uint8Array(o)), l.buffer;
        }
        function Body() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (o) {
              if (((this.bodyUsed = this.bodyUsed), (this._bodyInit = o), o)) {
                if ("string" == typeof o) this._bodyText = o;
                else if (f.blob && Blob.prototype.isPrototypeOf(o))
                  this._bodyBlob = o;
                else if (f.formData && FormData.prototype.isPrototypeOf(o))
                  this._bodyFormData = o;
                else if (
                  f.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(o)
                )
                  this._bodyText = o.toString();
                else {
                  var l;
                  f.arrayBuffer &&
                  f.blob &&
                  (l = o) &&
                  DataView.prototype.isPrototypeOf(l)
                    ? ((this._bodyArrayBuffer = bufferClone(o.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : f.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(o) || w(o))
                    ? (this._bodyArrayBuffer = bufferClone(o))
                    : (this._bodyText = o = Object.prototype.toString.call(o));
                }
              } else (this._noBody = !0), (this._bodyText = "");
              !this.headers.get("content-type") &&
                ("string" == typeof o
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : f.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(o) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
            }),
            f.blob &&
              (this.blob = function () {
                var o = consumed(this);
                if (o) return o;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (!this._bodyFormData)
                  return Promise.resolve(new Blob([this._bodyText]));
                throw Error("could not read FormData body as blob");
              }),
            (this.arrayBuffer = function () {
              if (this._bodyArrayBuffer)
                return (
                  consumed(this) ||
                  (ArrayBuffer.isView(this._bodyArrayBuffer)
                    ? Promise.resolve(
                        this._bodyArrayBuffer.buffer.slice(
                          this._bodyArrayBuffer.byteOffset,
                          this._bodyArrayBuffer.byteOffset +
                            this._bodyArrayBuffer.byteLength
                        )
                      )
                    : Promise.resolve(this._bodyArrayBuffer))
                );
              if (f.blob) return this.blob().then(readBlobAsArrayBuffer);
              throw Error("could not read as ArrayBuffer");
            }),
            (this.text = function () {
              var o,
                l,
                _,
                f,
                m,
                b = consumed(this);
              if (b) return b;
              if (this._bodyBlob)
                return (
                  (o = this._bodyBlob),
                  (_ = fileReaderReady((l = new FileReader()))),
                  (m = (f = /charset=([A-Za-z0-9_-]+)/.exec(o.type))
                    ? f[1]
                    : "utf-8"),
                  l.readAsText(o, m),
                  _
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (o) {
                    for (
                      var l = new Uint8Array(o), _ = Array(l.length), f = 0;
                      f < l.length;
                      f++
                    )
                      _[f] = String.fromCharCode(l[f]);
                    return _.join("");
                  })(this._bodyArrayBuffer)
                );
              if (!this._bodyFormData) return Promise.resolve(this._bodyText);
              throw Error("could not read FormData body as text");
            }),
            f.formData &&
              (this.formData = function () {
                return this.text().then(decode);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (Headers.prototype.append = function (o, l) {
          (o = normalizeName(o)), (l = normalizeValue(l));
          var _ = this.map[o];
          this.map[o] = _ ? _ + ", " + l : l;
        }),
          (Headers.prototype.delete = function (o) {
            delete this.map[normalizeName(o)];
          }),
          (Headers.prototype.get = function (o) {
            return (o = normalizeName(o)), this.has(o) ? this.map[o] : null;
          }),
          (Headers.prototype.has = function (o) {
            return this.map.hasOwnProperty(normalizeName(o));
          }),
          (Headers.prototype.set = function (o, l) {
            this.map[normalizeName(o)] = normalizeValue(l);
          }),
          (Headers.prototype.forEach = function (o, l) {
            for (var _ in this.map)
              this.map.hasOwnProperty(_) && o.call(l, this.map[_], _, this);
          }),
          (Headers.prototype.keys = function () {
            var o = [];
            return (
              this.forEach(function (l, _) {
                o.push(_);
              }),
              iteratorFor(o)
            );
          }),
          (Headers.prototype.values = function () {
            var o = [];
            return (
              this.forEach(function (l) {
                o.push(l);
              }),
              iteratorFor(o)
            );
          }),
          (Headers.prototype.entries = function () {
            var o = [];
            return (
              this.forEach(function (l, _) {
                o.push([_, l]);
              }),
              iteratorFor(o)
            );
          }),
          f.iterable &&
            (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
        var E = [
          "CONNECT",
          "DELETE",
          "GET",
          "HEAD",
          "OPTIONS",
          "PATCH",
          "POST",
          "PUT",
          "TRACE",
        ];
        function Request(o, _) {
          if (!(this instanceof Request))
            throw TypeError(
              'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
            );
          var f,
            m,
            b = (_ = _ || {}).body;
          if (o instanceof Request) {
            if (o.bodyUsed) throw TypeError("Already read");
            (this.url = o.url),
              (this.credentials = o.credentials),
              _.headers || (this.headers = new Headers(o.headers)),
              (this.method = o.method),
              (this.mode = o.mode),
              (this.signal = o.signal),
              b ||
                null == o._bodyInit ||
                ((b = o._bodyInit), (o.bodyUsed = !0));
          } else this.url = String(o);
          if (
            ((this.credentials =
              _.credentials || this.credentials || "same-origin"),
            (_.headers || !this.headers) &&
              (this.headers = new Headers(_.headers)),
            (this.method =
              ((m = (f = _.method || this.method || "GET").toUpperCase()),
              E.indexOf(m) > -1 ? m : f)),
            (this.mode = _.mode || this.mode || null),
            (this.signal =
              _.signal ||
              this.signal ||
              (function () {
                if ("AbortController" in l) return new AbortController().signal;
              })()),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && b)
          )
            throw TypeError("Body not allowed for GET or HEAD requests");
          if (
            (this._initBody(b),
            ("GET" === this.method || "HEAD" === this.method) &&
              ("no-store" === _.cache || "no-cache" === _.cache))
          ) {
            var w = /([?&])_=[^&]*/;
            w.test(this.url)
              ? (this.url = this.url.replace(w, "$1_=" + new Date().getTime()))
              : (this.url +=
                  (/\?/.test(this.url) ? "&" : "?") +
                  "_=" +
                  new Date().getTime());
          }
        }
        function decode(o) {
          var l = new FormData();
          return (
            o
              .trim()
              .split("&")
              .forEach(function (o) {
                if (o) {
                  var _ = o.split("="),
                    f = _.shift().replace(/\+/g, " "),
                    m = _.join("=").replace(/\+/g, " ");
                  l.append(decodeURIComponent(f), decodeURIComponent(m));
                }
              }),
            l
          );
        }
        function Response(o, l) {
          if (!(this instanceof Response))
            throw TypeError(
              'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
            );
          if (
            (l || (l = {}),
            (this.type = "default"),
            (this.status = void 0 === l.status ? 200 : l.status),
            this.status < 200 || this.status > 599)
          )
            throw RangeError(
              "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
            );
          (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText =
              void 0 === l.statusText ? "" : "" + l.statusText),
            (this.headers = new Headers(l.headers)),
            (this.url = l.url || ""),
            this._initBody(o);
        }
        (Request.prototype.clone = function () {
          return new Request(this, { body: this._bodyInit });
        }),
          Body.call(Request.prototype),
          Body.call(Response.prototype),
          (Response.prototype.clone = function () {
            return new Response(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers(this.headers),
              url: this.url,
            });
          }),
          (Response.error = function () {
            var o = new Response(null, { status: 200, statusText: "" });
            return (o.ok = !1), (o.status = 0), (o.type = "error"), o;
          });
        var D = [301, 302, 303, 307, 308];
        (Response.redirect = function (o, l) {
          if (-1 === D.indexOf(l)) throw RangeError("Invalid status code");
          return new Response(null, { status: l, headers: { location: o } });
        }),
          (o.DOMException = l.DOMException);
        try {
          new o.DOMException();
        } catch (l) {
          (o.DOMException = function (o, l) {
            (this.message = o), (this.name = l);
            var _ = Error(o);
            this.stack = _.stack;
          }),
            (o.DOMException.prototype = Object.create(Error.prototype)),
            (o.DOMException.prototype.constructor = o.DOMException);
        }
        function fetch(_, m) {
          return new Promise(function (b, w) {
            var E = new Request(_, m);
            if (E.signal && E.signal.aborted)
              return w(new o.DOMException("Aborted", "AbortError"));
            var D = new XMLHttpRequest();
            function abortXhr() {
              D.abort();
            }
            if (
              ((D.onload = function () {
                var o,
                  l,
                  _ = {
                    statusText: D.statusText,
                    headers:
                      ((o = D.getAllResponseHeaders() || ""),
                      (l = new Headers()),
                      o
                        .replace(/\r?\n[\t ]+/g, " ")
                        .split("\r")
                        .map(function (o) {
                          return 0 === o.indexOf("\n")
                            ? o.substr(1, o.length)
                            : o;
                        })
                        .forEach(function (o) {
                          var _ = o.split(":"),
                            f = _.shift().trim();
                          if (f) {
                            var m = _.join(":").trim();
                            try {
                              l.append(f, m);
                            } catch (o) {
                              console.warn("Response " + o.message);
                            }
                          }
                        }),
                      l),
                  };
                0 === E.url.indexOf("file://") &&
                (D.status < 200 || D.status > 599)
                  ? (_.status = 200)
                  : (_.status = D.status),
                  (_.url =
                    "responseURL" in D
                      ? D.responseURL
                      : _.headers.get("X-Request-URL"));
                var f = "response" in D ? D.response : D.responseText;
                setTimeout(function () {
                  b(new Response(f, _));
                }, 0);
              }),
              (D.onerror = function () {
                setTimeout(function () {
                  w(TypeError("Network request failed"));
                }, 0);
              }),
              (D.ontimeout = function () {
                setTimeout(function () {
                  w(TypeError("Network request timed out"));
                }, 0);
              }),
              (D.onabort = function () {
                setTimeout(function () {
                  w(new o.DOMException("Aborted", "AbortError"));
                }, 0);
              }),
              D.open(
                E.method,
                (function (o) {
                  try {
                    return "" === o && l.location.href ? l.location.href : o;
                  } catch (l) {
                    return o;
                  }
                })(E.url),
                !0
              ),
              "include" === E.credentials
                ? (D.withCredentials = !0)
                : "omit" === E.credentials && (D.withCredentials = !1),
              "responseType" in D &&
                (f.blob
                  ? (D.responseType = "blob")
                  : f.arrayBuffer && (D.responseType = "arraybuffer")),
              m &&
                "object" == typeof m.headers &&
                !(
                  m.headers instanceof Headers ||
                  (l.Headers && m.headers instanceof l.Headers)
                ))
            ) {
              var P = [];
              Object.getOwnPropertyNames(m.headers).forEach(function (o) {
                P.push(normalizeName(o)),
                  D.setRequestHeader(o, normalizeValue(m.headers[o]));
              }),
                E.headers.forEach(function (o, l) {
                  -1 === P.indexOf(l) && D.setRequestHeader(l, o);
                });
            } else
              E.headers.forEach(function (o, l) {
                D.setRequestHeader(l, o);
              });
            E.signal &&
              (E.signal.addEventListener("abort", abortXhr),
              (D.onreadystatechange = function () {
                4 === D.readyState &&
                  E.signal.removeEventListener("abort", abortXhr);
              })),
              D.send(void 0 === E._bodyInit ? null : E._bodyInit);
          });
        }
        (fetch.polyfill = !0),
          l.fetch ||
            ((l.fetch = fetch),
            (l.Headers = Headers),
            (l.Request = Request),
            (l.Response = Response)),
          (o.Headers = Headers),
          (o.Request = Request),
          (o.Response = Response),
          (o.fetch = fetch),
          Object.defineProperty(o, "__esModule", { value: !0 });
      })({}),
        (m.fetch.ponyfill = !0),
        delete m.fetch.polyfill;
      var b = f.fetch ? f : m;
      ((l = b.fetch).default = b.fetch),
        (l.fetch = b.fetch),
        (l.Headers = b.Headers),
        (l.Request = b.Request),
        (l.Response = b.Response),
        (o.exports = l);
    },
    72100: function (o) {
      "use strict";
      var l,
        _ = "object" == typeof Reflect ? Reflect : null,
        f =
          _ && "function" == typeof _.apply
            ? _.apply
            : function (o, l, _) {
                return Function.prototype.apply.call(o, l, _);
              };
      l =
        _ && "function" == typeof _.ownKeys
          ? _.ownKeys
          : Object.getOwnPropertySymbols
          ? function (o) {
              return Object.getOwnPropertyNames(o).concat(
                Object.getOwnPropertySymbols(o)
              );
            }
          : function (o) {
              return Object.getOwnPropertyNames(o);
            };
      var m =
        Number.isNaN ||
        function (o) {
          return o != o;
        };
      function EventEmitter() {
        EventEmitter.init.call(this);
      }
      (o.exports = EventEmitter),
        (o.exports.once = function (o, l) {
          return new Promise(function (_, f) {
            function errorListener(_) {
              o.removeListener(l, resolver), f(_);
            }
            function resolver() {
              "function" == typeof o.removeListener &&
                o.removeListener("error", errorListener),
                _([].slice.call(arguments));
            }
            eventTargetAgnosticAddListener(o, l, resolver, { once: !0 }),
              "error" !== l &&
                "function" == typeof o.on &&
                eventTargetAgnosticAddListener(o, "error", errorListener, {
                  once: !0,
                });
          });
        }),
        (EventEmitter.EventEmitter = EventEmitter),
        (EventEmitter.prototype._events = void 0),
        (EventEmitter.prototype._eventsCount = 0),
        (EventEmitter.prototype._maxListeners = void 0);
      var b = 10;
      function checkListener(o) {
        if ("function" != typeof o)
          throw TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof o
          );
      }
      function _getMaxListeners(o) {
        return void 0 === o._maxListeners
          ? EventEmitter.defaultMaxListeners
          : o._maxListeners;
      }
      function _addListener(o, l, _, f) {
        if (
          (checkListener(_),
          void 0 === (b = o._events)
            ? ((b = o._events = Object.create(null)), (o._eventsCount = 0))
            : (void 0 !== b.newListener &&
                (o.emit("newListener", l, _.listener ? _.listener : _),
                (b = o._events)),
              (w = b[l])),
          void 0 === w)
        )
          (w = b[l] = _), ++o._eventsCount;
        else if (
          ("function" == typeof w
            ? (w = b[l] = f ? [_, w] : [w, _])
            : f
            ? w.unshift(_)
            : w.push(_),
          (m = _getMaxListeners(o)) > 0 && w.length > m && !w.warned)
        ) {
          w.warned = !0;
          var m,
            b,
            w,
            E = Error(
              "Possible EventEmitter memory leak detected. " +
                w.length +
                " " +
                String(l) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
          (E.name = "MaxListenersExceededWarning"),
            (E.emitter = o),
            (E.type = l),
            (E.count = w.length),
            console && console.warn && console.warn(E);
        }
        return o;
      }
      function onceWrapper() {
        if (!this.fired)
          return (this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
      }
      function _onceWrap(o, l, _) {
        var f = { fired: !1, wrapFn: void 0, target: o, type: l, listener: _ },
          m = onceWrapper.bind(f);
        return (m.listener = _), (f.wrapFn = m), m;
      }
      function _listeners(o, l, _) {
        var f = o._events;
        if (void 0 === f) return [];
        var m = f[l];
        return void 0 === m
          ? []
          : "function" == typeof m
          ? _
            ? [m.listener || m]
            : [m]
          : _
          ? (function (o) {
              for (var l = Array(o.length), _ = 0; _ < l.length; ++_)
                l[_] = o[_].listener || o[_];
              return l;
            })(m)
          : arrayClone(m, m.length);
      }
      function listenerCount(o) {
        var l = this._events;
        if (void 0 !== l) {
          var _ = l[o];
          if ("function" == typeof _) return 1;
          if (void 0 !== _) return _.length;
        }
        return 0;
      }
      function arrayClone(o, l) {
        for (var _ = Array(l), f = 0; f < l; ++f) _[f] = o[f];
        return _;
      }
      function eventTargetAgnosticAddListener(o, l, _, f) {
        if ("function" == typeof o.on) f.once ? o.once(l, _) : o.on(l, _);
        else if ("function" == typeof o.addEventListener)
          o.addEventListener(l, function wrapListener(m) {
            f.once && o.removeEventListener(l, wrapListener), _(m);
          });
        else
          throw TypeError(
            'The "emitter" argument must be of type EventEmitter. Received type ' +
              typeof o
          );
      }
      Object.defineProperty(EventEmitter, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return b;
        },
        set: function (o) {
          if ("number" != typeof o || o < 0 || m(o))
            throw RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                o +
                "."
            );
          b = o;
        },
      }),
        (EventEmitter.init = function () {
          (void 0 === this._events ||
            this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (EventEmitter.prototype.setMaxListeners = function (o) {
          if ("number" != typeof o || o < 0 || m(o))
            throw RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                o +
                "."
            );
          return (this._maxListeners = o), this;
        }),
        (EventEmitter.prototype.getMaxListeners = function () {
          return _getMaxListeners(this);
        }),
        (EventEmitter.prototype.emit = function (o) {
          for (var l = [], _ = 1; _ < arguments.length; _++)
            l.push(arguments[_]);
          var m = "error" === o,
            b = this._events;
          if (void 0 !== b) m = m && void 0 === b.error;
          else if (!m) return !1;
          if (m) {
            if ((l.length > 0 && (w = l[0]), w instanceof Error)) throw w;
            var w,
              E = Error("Unhandled error." + (w ? " (" + w.message + ")" : ""));
            throw ((E.context = w), E);
          }
          var D = b[o];
          if (void 0 === D) return !1;
          if ("function" == typeof D) f(D, this, l);
          else
            for (var P = D.length, C = arrayClone(D, P), _ = 0; _ < P; ++_)
              f(C[_], this, l);
          return !0;
        }),
        (EventEmitter.prototype.addListener = function (o, l) {
          return _addListener(this, o, l, !1);
        }),
        (EventEmitter.prototype.on = EventEmitter.prototype.addListener),
        (EventEmitter.prototype.prependListener = function (o, l) {
          return _addListener(this, o, l, !0);
        }),
        (EventEmitter.prototype.once = function (o, l) {
          return checkListener(l), this.on(o, _onceWrap(this, o, l)), this;
        }),
        (EventEmitter.prototype.prependOnceListener = function (o, l) {
          return (
            checkListener(l),
            this.prependListener(o, _onceWrap(this, o, l)),
            this
          );
        }),
        (EventEmitter.prototype.removeListener = function (o, l) {
          var _, f, m, b, w;
          if (
            (checkListener(l),
            void 0 === (f = this._events) || void 0 === (_ = f[o]))
          )
            return this;
          if (_ === l || _.listener === l)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete f[o],
                f.removeListener &&
                  this.emit("removeListener", o, _.listener || l));
          else if ("function" != typeof _) {
            for (m = -1, b = _.length - 1; b >= 0; b--)
              if (_[b] === l || _[b].listener === l) {
                (w = _[b].listener), (m = b);
                break;
              }
            if (m < 0) return this;
            0 === m
              ? _.shift()
              : (function (o, l) {
                  for (; l + 1 < o.length; l++) o[l] = o[l + 1];
                  o.pop();
                })(_, m),
              1 === _.length && (f[o] = _[0]),
              void 0 !== f.removeListener &&
                this.emit("removeListener", o, w || l);
          }
          return this;
        }),
        (EventEmitter.prototype.off = EventEmitter.prototype.removeListener),
        (EventEmitter.prototype.removeAllListeners = function (o) {
          var l, _, f;
          if (void 0 === (_ = this._events)) return this;
          if (void 0 === _.removeListener)
            return (
              0 == arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== _[o] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete _[o]),
              this
            );
          if (0 == arguments.length) {
            var m,
              b = Object.keys(_);
            for (f = 0; f < b.length; ++f)
              "removeListener" !== (m = b[f]) && this.removeAllListeners(m);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (l = _[o])) this.removeListener(o, l);
          else if (void 0 !== l)
            for (f = l.length - 1; f >= 0; f--) this.removeListener(o, l[f]);
          return this;
        }),
        (EventEmitter.prototype.listeners = function (o) {
          return _listeners(this, o, !0);
        }),
        (EventEmitter.prototype.rawListeners = function (o) {
          return _listeners(this, o, !1);
        }),
        (EventEmitter.listenerCount = function (o, l) {
          return "function" == typeof o.listenerCount
            ? o.listenerCount(l)
            : listenerCount.call(o, l);
        }),
        (EventEmitter.prototype.listenerCount = listenerCount),
        (EventEmitter.prototype.eventNames = function () {
          return this._eventsCount > 0 ? l(this._events) : [];
        });
    },
    57828: function (o) {
      "use strict";
      function tryStringify(o) {
        try {
          return JSON.stringify(o);
        } catch (o) {
          return '"[Circular]"';
        }
      }
      o.exports = function (o, l, _) {
        var f = (_ && _.stringify) || tryStringify;
        if ("object" == typeof o && null !== o) {
          var m = l.length + 1;
          if (1 === m) return o;
          var b = Array(m);
          b[0] = f(o);
          for (var w = 1; w < m; w++) b[w] = f(l[w]);
          return b.join(" ");
        }
        if ("string" != typeof o) return o;
        var E = l.length;
        if (0 === E) return o;
        for (
          var D = "", P = 0, C = -1, A = (o && o.length) || 0, R = 0;
          R < A;

        ) {
          if (37 === o.charCodeAt(R) && R + 1 < A) {
            switch (((C = C > -1 ? C : 0), o.charCodeAt(R + 1))) {
              case 100:
              case 102:
                if (P >= E || null == l[P]) break;
                C < R && (D += o.slice(C, R)),
                  (D += Number(l[P])),
                  (C = R + 2),
                  R++;
                break;
              case 105:
                if (P >= E || null == l[P]) break;
                C < R && (D += o.slice(C, R)),
                  (D += Math.floor(Number(l[P]))),
                  (C = R + 2),
                  R++;
                break;
              case 79:
              case 111:
              case 106:
                if (P >= E || void 0 === l[P]) break;
                C < R && (D += o.slice(C, R));
                var j = typeof l[P];
                if ("string" === j) {
                  (D += "'" + l[P] + "'"), (C = R + 2), R++;
                  break;
                }
                if ("function" === j) {
                  (D += l[P].name || "<anonymous>"), (C = R + 2), R++;
                  break;
                }
                (D += f(l[P])), (C = R + 2), R++;
                break;
              case 115:
                if (P >= E) break;
                C < R && (D += o.slice(C, R)),
                  (D += String(l[P])),
                  (C = R + 2),
                  R++;
                break;
              case 37:
                C < R && (D += o.slice(C, R)),
                  (D += "%"),
                  (C = R + 2),
                  R++,
                  P--;
            }
            ++P;
          }
          ++R;
        }
        return -1 === C ? o : (C < A && (D += o.slice(C)), D);
      };
    },
    65949: function (o, l, _) {
      "use strict";
      _.r(l),
        _.d(l, {
          __assign: function () {
            return __assign;
          },
          __asyncDelegator: function () {
            return __asyncDelegator;
          },
          __asyncGenerator: function () {
            return __asyncGenerator;
          },
          __asyncValues: function () {
            return __asyncValues;
          },
          __await: function () {
            return __await;
          },
          __awaiter: function () {
            return __awaiter;
          },
          __classPrivateFieldGet: function () {
            return __classPrivateFieldGet;
          },
          __classPrivateFieldSet: function () {
            return __classPrivateFieldSet;
          },
          __createBinding: function () {
            return __createBinding;
          },
          __decorate: function () {
            return __decorate;
          },
          __exportStar: function () {
            return __exportStar;
          },
          __extends: function () {
            return __extends;
          },
          __generator: function () {
            return __generator;
          },
          __importDefault: function () {
            return __importDefault;
          },
          __importStar: function () {
            return __importStar;
          },
          __makeTemplateObject: function () {
            return __makeTemplateObject;
          },
          __metadata: function () {
            return __metadata;
          },
          __param: function () {
            return __param;
          },
          __read: function () {
            return __read;
          },
          __rest: function () {
            return __rest;
          },
          __spread: function () {
            return __spread;
          },
          __spreadArrays: function () {
            return __spreadArrays;
          },
          __values: function () {
            return __values;
          },
        });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var extendStatics =
        function (o, l) {
          return (extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (o, l) {
                o.__proto__ = l;
              }) ||
            function (o, l) {
              for (var _ in l) l.hasOwnProperty(_) && (o[_] = l[_]);
            })(o, l);
        };
      function __extends(o, l) {
        function __() {
          this.constructor = o;
        }
        extendStatics(o, l),
          (o.prototype =
            null === l
              ? Object.create(l)
              : ((__.prototype = l.prototype), new __()));
      }
      var __assign = function () {
        return (__assign =
          Object.assign ||
          function (o) {
            for (var l, _ = 1, f = arguments.length; _ < f; _++)
              for (var m in (l = arguments[_]))
                Object.prototype.hasOwnProperty.call(l, m) && (o[m] = l[m]);
            return o;
          }).apply(this, arguments);
      };
      function __rest(o, l) {
        var _ = {};
        for (var f in o)
          Object.prototype.hasOwnProperty.call(o, f) &&
            0 > l.indexOf(f) &&
            (_[f] = o[f]);
        if (null != o && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var m = 0, f = Object.getOwnPropertySymbols(o);
            m < f.length;
            m++
          )
            0 > l.indexOf(f[m]) &&
              Object.prototype.propertyIsEnumerable.call(o, f[m]) &&
              (_[f[m]] = o[f[m]]);
        return _;
      }
      function __decorate(o, l, _, f) {
        var m,
          b = arguments.length,
          w =
            b < 3
              ? l
              : null === f
              ? (f = Object.getOwnPropertyDescriptor(l, _))
              : f;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          w = Reflect.decorate(o, l, _, f);
        else
          for (var E = o.length - 1; E >= 0; E--)
            (m = o[E]) &&
              (w = (b < 3 ? m(w) : b > 3 ? m(l, _, w) : m(l, _)) || w);
        return b > 3 && w && Object.defineProperty(l, _, w), w;
      }
      function __param(o, l) {
        return function (_, f) {
          l(_, f, o);
        };
      }
      function __metadata(o, l) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(o, l);
      }
      function __awaiter(o, l, _, f) {
        return new (_ || (_ = Promise))(function (m, b) {
          function fulfilled(o) {
            try {
              step(f.next(o));
            } catch (o) {
              b(o);
            }
          }
          function rejected(o) {
            try {
              step(f.throw(o));
            } catch (o) {
              b(o);
            }
          }
          function step(o) {
            var l;
            o.done
              ? m(o.value)
              : ((l = o.value) instanceof _
                  ? l
                  : new _(function (o) {
                      o(l);
                    })
                ).then(fulfilled, rejected);
          }
          step((f = f.apply(o, l || [])).next());
        });
      }
      function __generator(o, l) {
        var _,
          f,
          m,
          b,
          w = {
            label: 0,
            sent: function () {
              if (1 & m[0]) throw m[1];
              return m[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (b = { next: verb(0), throw: verb(1), return: verb(2) }),
          "function" == typeof Symbol &&
            (b[Symbol.iterator] = function () {
              return this;
            }),
          b
        );
        function verb(b) {
          return function (E) {
            return (function (b) {
              if (_) throw TypeError("Generator is already executing.");
              for (; w; )
                try {
                  if (
                    ((_ = 1),
                    f &&
                      (m =
                        2 & b[0]
                          ? f.return
                          : b[0]
                          ? f.throw || ((m = f.return) && m.call(f), 0)
                          : f.next) &&
                      !(m = m.call(f, b[1])).done)
                  )
                    return m;
                  switch (((f = 0), m && (b = [2 & b[0], m.value]), b[0])) {
                    case 0:
                    case 1:
                      m = b;
                      break;
                    case 4:
                      return w.label++, { value: b[1], done: !1 };
                    case 5:
                      w.label++, (f = b[1]), (b = [0]);
                      continue;
                    case 7:
                      (b = w.ops.pop()), w.trys.pop();
                      continue;
                    default:
                      if (
                        !(m = (m = w.trys).length > 0 && m[m.length - 1]) &&
                        (6 === b[0] || 2 === b[0])
                      ) {
                        w = 0;
                        continue;
                      }
                      if (3 === b[0] && (!m || (b[1] > m[0] && b[1] < m[3]))) {
                        w.label = b[1];
                        break;
                      }
                      if (6 === b[0] && w.label < m[1]) {
                        (w.label = m[1]), (m = b);
                        break;
                      }
                      if (m && w.label < m[2]) {
                        (w.label = m[2]), w.ops.push(b);
                        break;
                      }
                      m[2] && w.ops.pop(), w.trys.pop();
                      continue;
                  }
                  b = l.call(o, w);
                } catch (o) {
                  (b = [6, o]), (f = 0);
                } finally {
                  _ = m = 0;
                }
              if (5 & b[0]) throw b[1];
              return { value: b[0] ? b[1] : void 0, done: !0 };
            })([b, E]);
          };
        }
      }
      function __createBinding(o, l, _, f) {
        void 0 === f && (f = _), (o[f] = l[_]);
      }
      function __exportStar(o, l) {
        for (var _ in o)
          "default" === _ || l.hasOwnProperty(_) || (l[_] = o[_]);
      }
      function __values(o) {
        var l = "function" == typeof Symbol && Symbol.iterator,
          _ = l && o[l],
          f = 0;
        if (_) return _.call(o);
        if (o && "number" == typeof o.length)
          return {
            next: function () {
              return (
                o && f >= o.length && (o = void 0),
                { value: o && o[f++], done: !o }
              );
            },
          };
        throw TypeError(
          l ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function __read(o, l) {
        var _ = "function" == typeof Symbol && o[Symbol.iterator];
        if (!_) return o;
        var f,
          m,
          b = _.call(o),
          w = [];
        try {
          for (; (void 0 === l || l-- > 0) && !(f = b.next()).done; )
            w.push(f.value);
        } catch (o) {
          m = { error: o };
        } finally {
          try {
            f && !f.done && (_ = b.return) && _.call(b);
          } finally {
            if (m) throw m.error;
          }
        }
        return w;
      }
      function __spread() {
        for (var o = [], l = 0; l < arguments.length; l++)
          o = o.concat(__read(arguments[l]));
        return o;
      }
      function __spreadArrays() {
        for (var o = 0, l = 0, _ = arguments.length; l < _; l++)
          o += arguments[l].length;
        for (var f = Array(o), m = 0, l = 0; l < _; l++)
          for (var b = arguments[l], w = 0, E = b.length; w < E; w++, m++)
            f[m] = b[w];
        return f;
      }
      function __await(o) {
        return this instanceof __await ? ((this.v = o), this) : new __await(o);
      }
      function __asyncGenerator(o, l, _) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var f,
          m = _.apply(o, l || []),
          b = [];
        return (
          (f = {}),
          verb("next"),
          verb("throw"),
          verb("return"),
          (f[Symbol.asyncIterator] = function () {
            return this;
          }),
          f
        );
        function verb(o) {
          m[o] &&
            (f[o] = function (l) {
              return new Promise(function (_, f) {
                b.push([o, l, _, f]) > 1 || resume(o, l);
              });
            });
        }
        function resume(o, l) {
          try {
            var _;
            (_ = m[o](l)).value instanceof __await
              ? Promise.resolve(_.value.v).then(fulfill, reject)
              : settle(b[0][2], _);
          } catch (o) {
            settle(b[0][3], o);
          }
        }
        function fulfill(o) {
          resume("next", o);
        }
        function reject(o) {
          resume("throw", o);
        }
        function settle(o, l) {
          o(l), b.shift(), b.length && resume(b[0][0], b[0][1]);
        }
      }
      function __asyncDelegator(o) {
        var l, _;
        return (
          (l = {}),
          verb("next"),
          verb("throw", function (o) {
            throw o;
          }),
          verb("return"),
          (l[Symbol.iterator] = function () {
            return this;
          }),
          l
        );
        function verb(f, m) {
          l[f] = o[f]
            ? function (l) {
                return (_ = !_)
                  ? { value: __await(o[f](l)), done: "return" === f }
                  : m
                  ? m(l)
                  : l;
              }
            : m;
        }
      }
      function __asyncValues(o) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var l,
          _ = o[Symbol.asyncIterator];
        return _
          ? _.call(o)
          : ((o = __values(o)),
            (l = {}),
            verb("next"),
            verb("throw"),
            verb("return"),
            (l[Symbol.asyncIterator] = function () {
              return this;
            }),
            l);
        function verb(_) {
          l[_] =
            o[_] &&
            function (l) {
              return new Promise(function (f, m) {
                !(function (o, l, _, f) {
                  Promise.resolve(f).then(function (l) {
                    o({ value: l, done: _ });
                  }, l);
                })(f, m, (l = o[_](l)).done, l.value);
              });
            };
        }
      }
      function __makeTemplateObject(o, l) {
        return (
          Object.defineProperty
            ? Object.defineProperty(o, "raw", { value: l })
            : (o.raw = l),
          o
        );
      }
      function __importStar(o) {
        if (o && o.__esModule) return o;
        var l = {};
        if (null != o)
          for (var _ in o) Object.hasOwnProperty.call(o, _) && (l[_] = o[_]);
        return (l.default = o), l;
      }
      function __importDefault(o) {
        return o && o.__esModule ? o : { default: o };
      }
      function __classPrivateFieldGet(o, l) {
        if (!l.has(o))
          throw TypeError("attempted to get private field on non-instance");
        return l.get(o);
      }
      function __classPrivateFieldSet(o, l, _) {
        if (!l.has(o))
          throw TypeError("attempted to set private field on non-instance");
        return l.set(o, _), _;
      }
    },
    75e3: function (o) {
      "use strict";
      o.exports = function () {
        throw Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    86984: function (o, l, _) {
      "use strict";
      let f = _(57828);
      o.exports = pino;
      let m =
        (function () {
          function defd(o) {
            return void 0 !== o && o;
          }
          try {
            if ("undefined" != typeof globalThis) return globalThis;
            return (
              Object.defineProperty(Object.prototype, "globalThis", {
                get: function () {
                  return (
                    delete Object.prototype.globalThis, (this.globalThis = this)
                  );
                },
                configurable: !0,
              }),
              globalThis
            );
          } catch (o) {
            return defd(self) || defd(window) || defd(this) || {};
          }
        })().console || {};
      function pino(o) {
        var l;
        (o = o || {}).browser = o.browser || {};
        let _ = o.browser.transmit;
        if (_ && "function" != typeof _.send)
          throw Error("pino: transmit option must have a send function");
        let f = o.browser.write || m;
        o.browser.write && (o.browser.asObject = !0);
        let b = o.serializers || {},
          w = (function (o, l) {
            if (Array.isArray(o)) {
              let l = o.filter(function (o) {
                return "!stdSerializers.err" !== o;
              });
              return l;
            }
            return !0 === o && Object.keys(l);
          })(o.browser.serialize, b),
          E = o.browser.serialize;
        Array.isArray(o.browser.serialize) &&
          o.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (E = !1),
          "function" == typeof f &&
            (f.error = f.fatal = f.warn = f.info = f.debug = f.trace = f),
          !1 === o.enabled && (o.level = "silent");
        let D = o.level || "info",
          P = Object.create(f);
        P.log || (P.log = noop),
          Object.defineProperty(P, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(P, "level", {
            get: function () {
              return this._level;
            },
            set: function (o) {
              if ("silent" !== o && !this.levels.values[o])
                throw Error("unknown level " + o);
              (this._level = o),
                set(C, P, "error", "log"),
                set(C, P, "fatal", "error"),
                set(C, P, "warn", "error"),
                set(C, P, "info", "log"),
                set(C, P, "debug", "log"),
                set(C, P, "trace", "log");
            },
          });
        let C = {
          transmit: _,
          serialize: w,
          asObject: o.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp:
            "function" == typeof (l = o).timestamp
              ? l.timestamp
              : !1 === l.timestamp
              ? nullTime
              : epochTime,
        };
        return (
          (P.levels = pino.levels),
          (P.level = D),
          (P.setMaxListeners =
            P.getMaxListeners =
            P.emit =
            P.addListener =
            P.on =
            P.prependListener =
            P.once =
            P.prependOnceListener =
            P.removeListener =
            P.removeAllListeners =
            P.listeners =
            P.listenerCount =
            P.eventNames =
            P.write =
            P.flush =
              noop),
          (P.serializers = b),
          (P._serialize = w),
          (P._stdErrSerialize = E),
          (P.child = function (l, f) {
            if (!l) throw Error("missing bindings for child Pino");
            (f = f || {}),
              w && l.serializers && (f.serializers = l.serializers);
            let m = f.serializers;
            if (w && m) {
              var E = Object.assign({}, b, m),
                D = !0 === o.browser.serialize ? Object.keys(E) : w;
              delete l.serializers,
                applySerializers([l], D, E, this._stdErrSerialize);
            }
            function Child(o) {
              (this._childLevel = (0 | o._childLevel) + 1),
                (this.error = bind(o, l, "error")),
                (this.fatal = bind(o, l, "fatal")),
                (this.warn = bind(o, l, "warn")),
                (this.info = bind(o, l, "info")),
                (this.debug = bind(o, l, "debug")),
                (this.trace = bind(o, l, "trace")),
                E && ((this.serializers = E), (this._serialize = D)),
                _ &&
                  (this._logEvent = createLogEventShape(
                    [].concat(o._logEvent.bindings, l)
                  ));
            }
            return (Child.prototype = this), new Child(this);
          }),
          _ && (P._logEvent = createLogEventShape()),
          P
        );
      }
      function set(o, l, _, b) {
        let w = Object.getPrototypeOf(l);
        (l[_] =
          l.levelVal > l.levels.values[_]
            ? noop
            : w[_]
            ? w[_]
            : m[_] || m[b] || noop),
          (function (o, l, _) {
            if (o.transmit || l[_] !== noop) {
              var b;
              l[_] =
                ((b = l[_]),
                function () {
                  let w = o.timestamp(),
                    E = Array(arguments.length),
                    D =
                      Object.getPrototypeOf && Object.getPrototypeOf(this) === m
                        ? m
                        : this;
                  for (var P = 0; P < E.length; P++) E[P] = arguments[P];
                  if (
                    (o.serialize &&
                      !o.asObject &&
                      applySerializers(
                        E,
                        this._serialize,
                        this.serializers,
                        this._stdErrSerialize
                      ),
                    o.asObject
                      ? b.call(
                          D,
                          (function (o, l, _, m) {
                            o._serialize &&
                              applySerializers(
                                _,
                                o._serialize,
                                o.serializers,
                                o._stdErrSerialize
                              );
                            let b = _.slice(),
                              w = b[0],
                              E = {};
                            m && (E.time = m),
                              (E.level = pino.levels.values[l]);
                            let D = (0 | o._childLevel) + 1;
                            if (
                              (D < 1 && (D = 1),
                              null !== w && "object" == typeof w)
                            ) {
                              for (; D-- && "object" == typeof b[0]; )
                                Object.assign(E, b.shift());
                              w = b.length ? f(b.shift(), b) : void 0;
                            } else
                              "string" == typeof w && (w = f(b.shift(), b));
                            return void 0 !== w && (E.msg = w), E;
                          })(this, _, E, w)
                        )
                      : b.apply(D, E),
                    o.transmit)
                  ) {
                    let f = o.transmit.level || l.level,
                      m = pino.levels.values[f],
                      b = pino.levels.values[_];
                    if (b < m) return;
                    (function (o, l, _) {
                      let f = l.send,
                        m = l.ts,
                        b = l.methodLevel,
                        w = l.methodValue,
                        E = l.val,
                        D = o._logEvent.bindings;
                      applySerializers(
                        _,
                        o._serialize || Object.keys(o.serializers),
                        o.serializers,
                        void 0 === o._stdErrSerialize || o._stdErrSerialize
                      ),
                        (o._logEvent.ts = m),
                        (o._logEvent.messages = _.filter(function (o) {
                          return -1 === D.indexOf(o);
                        })),
                        (o._logEvent.level.label = b),
                        (o._logEvent.level.value = w),
                        f(b, o._logEvent, E),
                        (o._logEvent = createLogEventShape(D));
                    })(
                      this,
                      {
                        ts: w,
                        methodLevel: _,
                        methodValue: b,
                        transmitLevel: f,
                        transmitValue:
                          pino.levels.values[o.transmit.level || l.level],
                        send: o.transmit.send,
                        val: l.levelVal,
                      },
                      E
                    );
                  }
                });
            }
          })(o, l, _);
      }
      function applySerializers(o, l, _, f) {
        for (let m in o)
          if (f && o[m] instanceof Error) o[m] = pino.stdSerializers.err(o[m]);
          else if ("object" == typeof o[m] && !Array.isArray(o[m]))
            for (let f in o[m])
              l && l.indexOf(f) > -1 && f in _ && (o[m][f] = _[f](o[m][f]));
      }
      function bind(o, l, _) {
        return function () {
          let f = Array(1 + arguments.length);
          f[0] = l;
          for (var m = 1; m < f.length; m++) f[m] = arguments[m - 1];
          return o[_].apply(this, f);
        };
      }
      function createLogEventShape(o) {
        return {
          ts: 0,
          messages: [],
          bindings: o || [],
          level: { label: "", value: 0 },
        };
      }
      function mock() {
        return {};
      }
      function passthrough(o) {
        return o;
      }
      function noop() {}
      function nullTime() {
        return !1;
      }
      function epochTime() {
        return Date.now();
      }
      (pino.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (pino.stdSerializers = {
          mapHttpRequest: mock,
          mapHttpResponse: mock,
          wrapRequestSerializer: passthrough,
          wrapResponseSerializer: passthrough,
          wrapErrorSerializer: passthrough,
          req: mock,
          res: mock,
          err: function (o) {
            let l = {
              type: o.constructor.name,
              msg: o.message,
              stack: o.stack,
            };
            for (let _ in o) void 0 === l[_] && (l[_] = o[_]);
            return l;
          },
        }),
        (pino.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime,
            epochTime,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
    74789: function (o, l, _) {
      "use strict";
      function anumber(o) {
        if (!Number.isSafeInteger(o) || o < 0)
          throw Error("positive integer expected, got " + o);
      }
      function abytes(o, ...l) {
        if (
          !(
            o instanceof Uint8Array ||
            (ArrayBuffer.isView(o) && "Uint8Array" === o.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (l.length > 0 && !l.includes(o.length))
          throw Error(
            "Uint8Array expected of length " + l + ", got length=" + o.length
          );
      }
      function ahash(o) {
        if ("function" != typeof o || "function" != typeof o.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        anumber(o.outputLen), anumber(o.blockLen);
      }
      function aexists(o, l = !0) {
        if (o.destroyed) throw Error("Hash instance has been destroyed");
        if (l && o.finished)
          throw Error("Hash#digest() has already been called");
      }
      function aoutput(o, l) {
        abytes(o);
        let _ = l.outputLen;
        if (o.length < _)
          throw Error(
            "digestInto() expects output buffer of length at least " + _
          );
      }
      _.d(l, {
        $h: function () {
          return aexists;
        },
        eB: function () {
          return aoutput;
        },
        gk: function () {
          return abytes;
        },
        k8: function () {
          return anumber;
        },
        z3: function () {
          return ahash;
        },
      });
    },
    3893: function (o, l, _) {
      "use strict";
      _.d(l, {
        kb: function () {
          return Hash;
        },
        l1: function () {
          return byteSwap32;
        },
        eV: function () {
          return concatBytes;
        },
        GL: function () {
          return createView;
        },
        iA: function () {
          return b;
        },
        O6: function () {
          return randomBytes;
        },
        np: function () {
          return rotr;
        },
        O0: function () {
          return toBytes;
        },
        Jq: function () {
          return u32;
        },
        hE: function () {
          return wrapConstructor;
        },
      });
      let f =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var m = _(74789);
      function u32(o) {
        return new Uint32Array(
          o.buffer,
          o.byteOffset,
          Math.floor(o.byteLength / 4)
        );
      }
      function createView(o) {
        return new DataView(o.buffer, o.byteOffset, o.byteLength);
      }
      function rotr(o, l) {
        return (o << (32 - l)) | (o >>> l);
      }
      let b = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      function byteSwap32(o) {
        for (let _ = 0; _ < o.length; _++) {
          var l;
          o[_] =
            (((l = o[_]) << 24) & 4278190080) |
            ((l << 8) & 16711680) |
            ((l >>> 8) & 65280) |
            ((l >>> 24) & 255);
        }
      }
      function toBytes(o) {
        return (
          "string" == typeof o &&
            (o = (function (o) {
              if ("string" != typeof o)
                throw Error("utf8ToBytes expected string, got " + typeof o);
              return new Uint8Array(new TextEncoder().encode(o));
            })(o)),
          (0, m.gk)(o),
          o
        );
      }
      function concatBytes(...o) {
        let l = 0;
        for (let _ = 0; _ < o.length; _++) {
          let f = o[_];
          (0, m.gk)(f), (l += f.length);
        }
        let _ = new Uint8Array(l);
        for (let l = 0, f = 0; l < o.length; l++) {
          let m = o[l];
          _.set(m, f), (f += m.length);
        }
        return _;
      }
      let Hash = class Hash {
        clone() {
          return this._cloneInto();
        }
      };
      function wrapConstructor(o) {
        let hashC = (l) => o().update(toBytes(l)).digest(),
          l = o();
        return (
          (hashC.outputLen = l.outputLen),
          (hashC.blockLen = l.blockLen),
          (hashC.create = () => o()),
          hashC
        );
      }
      function randomBytes(o = 32) {
        if (f && "function" == typeof f.getRandomValues)
          return f.getRandomValues(new Uint8Array(o));
        if (f && "function" == typeof f.randomBytes) return f.randomBytes(o);
        throw Error("crypto.getRandomValues must be defined");
      }
    },
  },
]);
