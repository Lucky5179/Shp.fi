import { a as Fr } from "./chunk-VIPA2VKU.mjs";
import {
  $ as ae,
  A as Zr,
  B as Qr,
  C as $r,
  D as et,
  E as rt,
  F as tt,
  N as J,
  P as ve,
  R as m,
  U as j,
  V as ze,
  W as Y,
  X as It,
  Y as at,
  Z as re,
  _ as P,
  a as Mt,
  b as br,
  ba as Z,
  c as h,
  ca as Nt,
  d as Yr,
  da as Wt,
  f as Xr,
  g as H,
  ga as de,
  i as Vt,
  ia as I,
  j as ee,
  k as ce,
  l as X,
  m as At,
  n as G,
  o as N,
  oa as Ie,
  p as xe,
  pa as Bt,
  q as ne,
  r as Rt,
  ra as te,
  s as r,
  sa as Sr,
  t as b,
  ta as $,
  u as kr,
  ua as V,
  v as _,
  w as c,
  wa as be,
  x as z,
  xa as Q,
  y as er,
  ya as O,
  z as Jr,
  za as nt,
} from "./chunk-R2F25RPH.mjs";
import "./chunk-2TUB4ERK.mjs";
import { b as B, c as A } from "./chunk-RIUMFBNJ.mjs";
var Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
var rr,
  Fe = Mt,
  Ve = (rr = Fe) && typeof rr == "object" && "default" in rr ? rr.default : rr;
function _t(t, a) {
  (a == null || a > t.length) && (a = t.length);
  for (var o = 0, n = new Array(a); o < a; o++) n[o] = t[o];
  return n;
}
var Dt = function (t) {
    return Ve.createElement("div", null, t.children);
  },
  jt = function (t) {
    return Ve.createElement(
      "span",
      { style: { whiteSpace: "pre" } },
      t.children
    );
  },
  Ot = function (t) {
    return Ve.createElement("span", null, t.children);
  },
  Pa = Fe.memo(Dt),
  Ma = Fe.memo(jt),
  Va = Fe.memo(Ot),
  Aa = Fe.forwardRef(function (t, a) {
    var o = t.className,
      n = t.style,
      i = t.LineWrapper,
      f = i === void 0 ? Pa : i,
      s = t.WordWrapper,
      d = s === void 0 ? Ma : s,
      p = t.LetterWrapper,
      l = p === void 0 ? Va : p,
      g = t.extraProps,
      u = "";
    Ve.Children.map(t.children, function (C) {
      if (typeof C != "string" && typeof C != "number")
        throw new Error("SplitText expect a text as children");
      u += String(C);
    });
    var x = Fe.useRef(null),
      y = Fe.useState([]),
      k = y[0],
      L = y[1],
      S = Fe.useRef(0);
    Fe.useLayoutEffect(
      function () {
        return (function () {
          var C = x.current;
          if (C) {
            if (k.length > 0)
              return (function (q, le) {
                for (
                  var me,
                    se =
                      S.current ||
                      q
                        .map(function (ge) {
                          return ge.length;
                        })
                        .sort(function (ge, He) {
                          return He - ge;
                        })[0],
                    U = [],
                    ye = "",
                    he = 0,
                    ke = (function (ge, He) {
                      var Le;
                      if (typeof Symbol > "u" || ge[Symbol.iterator] == null) {
                        if (
                          Array.isArray(ge) ||
                          (Le = (function (Pe, zr) {
                            if (Pe) {
                              if (typeof Pe == "string") return _t(Pe, void 0);
                              var fe = Object.prototype.toString
                                .call(Pe)
                                .slice(8, -1);
                              return (
                                fe === "Object" &&
                                  Pe.constructor &&
                                  (fe = Pe.constructor.name),
                                fe === "Map" || fe === "Set"
                                  ? Array.from(Pe)
                                  : fe === "Arguments" ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      fe
                                    )
                                  ? _t(Pe, void 0)
                                  : void 0
                              );
                            }
                          })(ge))
                        ) {
                          Le && (ge = Le);
                          var Ge = 0;
                          return function () {
                            return Ge >= ge.length
                              ? { done: !0 }
                              : { done: !1, value: ge[Ge++] };
                          };
                        }
                        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                      }
                      return (Le = ge[Symbol.iterator]()).next.bind(Le);
                    })(le.split(" ").entries());
                  !(me = ke()).done;

                ) {
                  var E = me.value[1];
                  (he += E.length + 1) > se + 1 &&
                    (U.push(ye), (ye = ""), (he = 0)),
                    (ye += E.trim() + " ");
                }
                U.push(ye),
                  L(
                    U.map(function (ge) {
                      return ge.trim();
                    })
                  ),
                  se > S.current && (S.current = se);
              })(k, u);
            for (
              var w, F = [], e = [], T = 0, K = Array.from(C.children);
              T < K.length;
              T++
            ) {
              var W = K[T],
                R = W.getBoundingClientRect().top;
              w == null && (w = R),
                R !== w && (F.push(e.join(" ")), (e = [])),
                (w = R),
                e.push((W.textContent || "").trim());
            }
            F.push(e.join(" ")), L(F);
          }
        })();
      },
      [u]
    );
    var M = 0,
      v = 0;
    return k.length
      ? Ve.createElement(
          "div",
          {
            className: o,
            ref: function (C) {
              (x.current = C),
                typeof a == "function" ? a(C) : a && (a.current = C);
            },
            style: n,
          },
          k.map(function (C, w) {
            var F = C.split(" ");
            return (
              (F = F.map(function (e, T) {
                return T === F.length - 1 ? e : e + " ";
              })),
              Ve.createElement(
                f,
                { key: w, lineIndex: w, extraProps: g },
                F.map(function (e, T) {
                  var K = e.split("");
                  return Ve.createElement(
                    d,
                    {
                      key: T,
                      lineIndex: w,
                      wordIndex: T,
                      countIndex: M++,
                      extraProps: g,
                    },
                    K.map(function (W, R) {
                      return Ve.createElement(
                        l,
                        {
                          key: R,
                          lineIndex: w,
                          wordIndex: T,
                          letterIndex: R,
                          countIndex: v++,
                          extraProps: g,
                        },
                        W
                      );
                    })
                  );
                })
              )
            );
          })
        )
      : Ve.createElement(
          "div",
          { className: o, ref: x, style: n },
          u.split(" ").map(function (C, w) {
            return Ve.createElement("span", { key: w }, C, " ");
          })
        );
  }),
  Ra = Fe.forwardRef(function (t, a) {
    var o,
      n,
      i,
      f = t.children,
      s = (function (u, x) {
        if (u == null) return {};
        var y,
          k,
          L = {},
          S = Object.keys(u);
        for (k = 0; k < S.length; k++)
          x.indexOf((y = S[k])) >= 0 || (L[y] = u[y]);
        return L;
      })(t, ["children"]),
      d = Fe.useState(0),
      p = d[0],
      l = d[1],
      g =
        ((o = function () {
          return l(function (u) {
            return u + 1;
          });
        }),
        n === void 0 && (n = !1),
        function () {
          for (
            var u = this, x = arguments.length, y = new Array(x), k = 0;
            k < x;
            k++
          )
            y[k] = arguments[k];
          var L = n && !i,
            S = function () {
              return o.apply(u, y);
            };
          clearTimeout(i), (i = setTimeout(S, 300)), L && S();
        });
    return (
      Fe.useEffect(function () {
        return (
          A.addEventListener("resize", g),
          function () {
            return A.removeEventListener("resize", g);
          }
        );
      }, []),
      Ve.createElement(Aa, Object.assign({ key: p }, s, { ref: a }), f)
    );
  });
(Ne.LetterWrapper = Ot),
  (Ne.LineWrapper = Dt),
  (Ne.SplitText = Ra),
  (Ne.WordWrapper = jt);
var Wm = Ne.__esModule,
  Bm = Ne.LetterWrapper,
  _m = Ne.LineWrapper,
  zt = Ne.SplitText,
  Dm = Ne.WordWrapper;
var Ia = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
};
function Ee(t) {
  let {
      opacity: a,
      x: o,
      y: n,
      scale: i,
      rotate: f,
      rotateX: s,
      rotateY: d,
    } = t.effectOptions,
    [p, l] = xe(!1),
    g = ve.current() === ve.canvas,
    u = er(g ? 1 : 0),
    x = t.transitionOptions.type === "spring",
    y = {
      type: t.transitionOptions.type,
      stiffness: t.transitionOptions.stiffness,
      damping: t.transitionOptions.damping,
      mass: t.transitionOptions.mass,
    },
    k = {
      type: t.transitionOptions.type,
      duration: t.transitionOptions.duration,
      ease: t.transitionOptions.ease,
    },
    L = {
      hidden: {
        opacity: a,
        x: o,
        y: n,
        scale: i,
        rotate: f,
        rotateX: s,
        rotateY: d,
      },
      visible: Ia,
    },
    S = x ? y : k,
    M = t.transitionOptions.delay,
    v = t.type === "letter",
    C = t.type === "word",
    w = t.type === "line",
    F = { display: "contents" };
  function e({ isLetter: W, isWord: R, isLine: q }) {
    let le = { type: t.type, variants: L, perWord: t.perWord };
    return W
      ? { LetterWrapper: (me) => r(ot, { ...me, ...le }) }
      : q
      ? { LineWrapper: (me) => r(ot, { ...me, ...le }) }
      : { WordWrapper: (me) => r(ot, { ...me, ...le }) };
  }
  let [T, K] = et();
  return (
    ce(() => {
      if (g) return;
      let W,
        R = requestAnimationFrame(() => {
          T.current &&
            (u.set(1),
            (W = K(".motion-text-segment", t.variant ? L.visible : L.hidden, {
              ...S,
              delay: tt(t.stagger, { startDelay: M }),
            })),
            W.then(() => l(!0)));
        });
      return () => {
        W?.stop(), cancelAnimationFrame(R);
      };
    }, [t.variant]),
    r(c.div, {
      ref: T,
      style: {
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: t.overflow ? "visible" : "hidden",
        fontSize: t.font.fontSize,
        fontFamily: t.font.font,
        fontWeight: t.font.fontWeight,
        letterSpacing: t.font.letterSpacing,
        lineHeight: t.font.lineHeightType
          ? t.font.lineHeight
          : `${t.font.lineHeightPixels}px`,
        textAlign: t.font.textAlign,
        whiteSpace: t.font.whiteSpace,
        color: t.color,
        left: `${t.font.offset}%`,
        margin: 0,
        padding: 0,
        opacity: u,
      },
      initial: g || p ? "visible" : "hidden",
      children: g
        ? t.text
        : r(zt, {
            style: F,
            ...e({ isLetter: v, isWord: C, isLine: w }),
            children: t.text,
          }),
    })
  );
}
var Na = (t, a, o, n = 0, i = 0, f = 0, s = 0, d) =>
    t ? (d ? i : n) : a ? n : s,
  ot = ({
    type: t,
    countIndex: a = 0,
    letterIndex: o = 0,
    wordIndex: n = 0,
    lineIndex: i = 0,
    variants: f,
    isCanvas: s,
    children: d,
    perWord: p,
    ...l
  }) => {
    let y = Na(t === "letter", t === "word", t === "line", a, o, n, i, p);
    return r(c.span, {
      ...l,
      style: {
        perspective: 1200,
        display: "inline-block",
        whiteSpace: "pre",
        margin: 0,
        padding: 0,
        willChange: "transform",
      },
      variants: f,
      className: "motion-text-segment",
      children: d,
    });
  };
Ee.displayName = "Motion Text";
Ee.defaultProps = {
  text: "Hello World",
  stagger: 0.05,
  variant: !0,
  newTab: !0,
  tag: "heading1",
  effectOptions: { x: 0, y: 100, rotate: 0, rotateX: 0, rotateY: 0 },
  transitionOptions: {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 1,
    delay: 0.05,
  },
  overflow: !1,
  font: {
    font: "Inter",
    fontSize: 32,
    fontWeight: 400,
    textAlign: "center",
    lineHeight: 1.2,
    lineHeightType: !0,
    lineHeightPixels: 100,
    letterSpacing: 0,
    offset: 0,
    whiteSpace: "nowrap",
  },
};
j(Ee, {
  text: {
    type: m.String,
    title: "Text",
    defaultValue: "Hello World",
    displayTextArea: !0,
  },
  type: {
    title: "Type",
    type: m.Enum,
    options: ["letter", "word", "line"],
    optionTitles: ["Letter", "Word", "Line"],
    defaultValue: "letter",
  },
  perWord: {
    type: m.Boolean,
    title: "Per Word",
    defaultValue: !1,
    hidden: (t) => t.type !== "letter",
  },
  variant: {
    title: "Animate",
    type: m.Boolean,
    defaultValue: !0,
    enabledTitle: "In",
    disabledTitle: "Out",
  },
  overflow: {
    title: "Overflow",
    type: m.Boolean,
    enabledTitle: "Show",
    disabledTitle: "Hide",
    defaultValue: !1,
  },
  stagger: {
    title: "Stagger",
    type: m.Number,
    step: 0.01,
    defaultValue: 0.05,
    displayStepper: !0,
  },
  effectOptions: {
    title: "From",
    type: m.Object,
    controls: {
      opacity: {
        title: "Opacity",
        type: m.Number,
        min: 0,
        max: 1,
        step: 0.01,
        defaultValue: 0,
      },
      x: {
        title: "X",
        type: m.Number,
        min: -200,
        max: 200,
        unit: "%",
        step: 1,
        defaultValue: 0,
        displayStepper: !0,
      },
      y: {
        title: "Y",
        type: m.Number,
        min: -200,
        max: 200,
        unit: "%",
        step: 1,
        defaultValue: 100,
        displayStepper: !0,
      },
      scale: {
        title: "Scale",
        type: m.Number,
        min: 0,
        max: 5,
        step: 0.01,
        defaultValue: 1,
        displayStepper: !0,
      },
      rotate: {
        title: "Rotate",
        type: m.Number,
        min: -360,
        max: 360,
        unit: "\xB0",
        step: 1,
        defaultValue: 0,
      },
      rotateX: {
        title: "Rotate X",
        type: m.Number,
        min: -360,
        max: 360,
        unit: "\xB0",
        step: 1,
        defaultValue: 0,
      },
      rotateY: {
        title: "Rotate Y",
        type: m.Number,
        min: -360,
        max: 360,
        unit: "\xB0",
        step: 1,
        defaultValue: 0,
      },
    },
  },
  transitionOptions: {
    type: m.Transition,
    title: "Transition",
    defaultValue: {
      type: "spring",
      stiffness: 400,
      damping: 30,
      mass: 1,
      delay: 0.05,
    },
  },
  color: { type: m.Color, defaultValue: "#888" },
  font: {
    type: m.Object,
    controls: {
      font: { type: m.String, placeholder: "Inter", defaultValue: "Inter" },
      fontSize: {
        title: "Size",
        type: m.Number,
        min: 0,
        max: 500,
        step: 0.5,
        defaultValue: 32,
      },
      fontWeight: {
        type: m.Enum,
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        defaultValue: 400,
        title: "Weight",
      },
      textAlign: {
        type: m.Enum,
        displaySegmentedControl: !0,
        title: "Align",
        options: ["left", "center", "right"],
        optionTitles: ["Left", "Center", "Right"],
        defaultValue: "center",
      },
      letterSpacing: {
        title: "Letter",
        type: m.Number,
        defaultValue: 0,
        step: 0.1,
        displayStepper: !0,
      },
      offset: {
        type: m.Number,
        title: "Offset",
        min: -100,
        max: 100,
        displayStepper: !0,
        step: 0.25,
        defaultValue: 0,
        unit: "%",
      },
      whiteSpace: {
        type: m.Enum,
        title: "Space",
        options: [
          "normal",
          "nowrap",
          "pre",
          "pre-wrap",
          "preline",
          "break-spaces",
        ],
        optionTitles: [
          "Normal",
          "No Wrap",
          "Pre",
          "Pre Wrap",
          "Preline",
          "Break Spaces",
        ],
        defaultValue: "center",
      },
      lineHeight: {
        type: m.Number,
        title: "Line",
        min: -500,
        max: 500,
        displayStepper: !0,
        step: 0.1,
        defaultValue: 1.2,
        hidden: (t) => !t.lineHeightType,
      },
      lineHeightPixels: {
        type: m.Number,
        title: "Line",
        min: -500,
        max: 500,
        displayStepper: !0,
        step: 0.1,
        defaultValue: 100,
        hidden: (t) => t.lineHeightType,
      },
      lineHeightType: {
        type: m.Boolean,
        title: " ",
        enabledTitle: "em",
        disabledTitle: "px",
        defaultValue: !0,
      },
    },
  },
});
var tr = (t) => t;
var Cr = { ms: (t) => 1e3 * t, s: (t) => t / 1e3 };
function it(t, a) {
  return a ? t * (1e3 / a) : 0;
}
var Et = (t, a, o) =>
    (((1 - 3 * o + 3 * a) * t + (3 * o - 6 * a)) * t + 3 * a) * t,
  Wa = 1e-7,
  Ba = 12;
function _a(t, a, o, n, i) {
  let f,
    s,
    d = 0;
  do (s = a + (o - a) / 2), (f = Et(s, n, i) - t), f > 0 ? (o = s) : (a = s);
  while (Math.abs(f) > Wa && ++d < Ba);
  return s;
}
function ar(t, a, o, n) {
  if (t === a && o === n) return tr;
  let i = (f) => _a(f, 0, 1, t, o);
  return (f) => (f === 0 || f === 1 ? f : Et(i(f), a, n));
}
var lf = {
  ease: ar(0.25, 0.1, 0.25, 1),
  "ease-in": ar(0.42, 0, 1, 1),
  "ease-in-out": ar(0.42, 0, 0.58, 1),
  "ease-out": ar(0, 0, 0.58, 1),
};
function Ht(t, a) {
  var o = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) &&
      a.indexOf(n) < 0 &&
      (o[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") {
    var i = 0;
    for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      a.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
        (o[n[i]] = t[n[i]]);
  }
  return o;
}
var Ue = {};
Object.defineProperty(Ue, "__esModule", { value: !0 });
Ue.warning = function () {};
Ue.invariant = function () {};
var df = Ue.__esModule,
  pf = Ue.warning,
  Ea = Ue.invariant;
var Ha = 5;
function Kr(t, a, o) {
  let n = Math.max(a - Ha, 0);
  return it(o - t(n), a - n);
}
var Ye = { stiffness: 100, damping: 10, mass: 1 },
  Ga = (t = Ye.stiffness, a = Ye.damping, o = Ye.mass) =>
    a / (2 * Math.sqrt(t * o));
function qa(t, a, o) {
  return (t < a && o >= a) || (t > a && o <= a);
}
var st = ({
    stiffness: t = Ye.stiffness,
    damping: a = Ye.damping,
    mass: o = Ye.mass,
    from: n = 0,
    to: i = 1,
    velocity: f = 0,
    restSpeed: s = 2,
    restDistance: d = 0.5,
  } = {}) => {
    f = f ? Cr.s(f) : 0;
    let p = { done: !1, hasReachedTarget: !1, current: n, target: i },
      l = i - n,
      g = Math.sqrt(t / o) / 1e3,
      u = Ga(t, a, o),
      x;
    if (u < 1) {
      let y = g * Math.sqrt(1 - u * u);
      x = (k) =>
        i -
        Math.exp(-u * g * k) *
          (((u * g * l - f) / y) * Math.sin(y * k) + l * Math.cos(y * k));
    } else x = (y) => i - Math.exp(-g * y) * (l + (g * l - f) * y);
    return (y) => {
      p.current = x(y);
      let k = y === 0 ? f : Kr(x, y, p.current),
        L = Math.abs(k) <= s,
        S = Math.abs(i - p.current) <= d;
      return (p.done = L && S), (p.hasReachedTarget = qa(n, i, p.current)), p;
    };
  },
  Gt = ({
    from: t = 0,
    velocity: a = 0,
    power: o = 0.8,
    decay: n = 0.325,
    bounceDamping: i,
    bounceStiffness: f,
    changeTarget: s,
    min: d,
    max: p,
    restDistance: l = 0.5,
    restSpeed: g,
  }) => {
    n = Cr.ms(n);
    let u = { hasReachedTarget: !1, done: !1, current: t, target: t },
      x = (T) => (d !== void 0 && T < d) || (p !== void 0 && T > p),
      y = (T) =>
        d === void 0
          ? p
          : p === void 0 || Math.abs(d - T) < Math.abs(p - T)
          ? d
          : p,
      k = o * a,
      L = t + k,
      S = s === void 0 ? L : s(L);
    (u.target = S), S !== L && (k = S - t);
    let M = (T) => -k * Math.exp(-T / n),
      v = (T) => S + M(T),
      C = (T) => {
        let K = M(T),
          W = v(T);
        (u.done = Math.abs(K) <= l), (u.current = u.done ? S : W);
      },
      w,
      F,
      e = (T) => {
        x(u.current) &&
          ((w = T),
          (F = st({
            from: u.current,
            to: y(u.current),
            velocity: Kr(v, T, u.current),
            damping: i,
            stiffness: f,
            restDistance: l,
            restSpeed: g,
          })));
      };
    return (
      e(0),
      (T) => {
        let K = !1;
        return (
          !F && w === void 0 && ((K = !0), C(T), e(T)),
          w !== void 0 && T > w
            ? ((u.hasReachedTarget = !0), F(T - w))
            : ((u.hasReachedTarget = !1), !K && C(T), u)
        );
      }
    );
  },
  lt = 10,
  Ua = 1e4;
function qt(t) {
  let a,
    o = lt,
    n = t(0),
    i = [n.current];
  for (; !n.done && o < Ua; )
    (n = t(o)),
      i.push(n.done ? n.target : n.current),
      a === void 0 && n.hasReachedTarget && (a = o),
      (o += lt);
  let f = o - lt;
  return (
    i.length === 1 && i.push(n.current),
    { keyframes: i, duration: f / 1e3, overshootDuration: (a ?? f) / 1e3 }
  );
}
var Ya = ["", "X", "Y", "Z"],
  Xa = ["translate", "scale", "rotate", "skew"];
var Ut = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (t) => t + "deg",
  },
  Ja = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (t) => t + "px",
    },
    rotate: Ut,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: tr },
    skew: Ut,
  },
  Za = new Map(),
  Qa = (t) => `--motion-${t}`,
  Qt = ["x", "y", "z"];
Xa.forEach((t) => {
  Ya.forEach((a) => {
    Qt.push(t + a), Za.set(Qa(t + a), Ja[t]);
  });
});
var Df = new Set(Qt);
var Yt = (t) => document.createElement("div").animate(t, { duration: 0.001 }),
  Xt = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        Yt({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!Yt({ opacity: [0, 1] }).finished,
  },
  ct = {},
  $a = {};
for (let t in Xt) $a[t] = () => (ct[t] === void 0 && (ct[t] = Xt[t]()), ct[t]);
function $t(t, a) {
  var o;
  return (
    typeof t == "string"
      ? a
        ? (((o = a[t]) !== null && o !== void 0) ||
            (a[t] = document.querySelectorAll(t)),
          (t = a[t]))
        : (t = document.querySelectorAll(t))
      : t instanceof Element && (t = [t]),
    Array.from(t || [])
  );
}
function ea(t) {
  let a = new WeakMap();
  return (o = {}) => {
    let n = new Map(),
      i = (s = 0, d = 100, p = 0, l = !1) => {
        let g = `${s}-${d}-${p}-${l}`;
        return (
          n.has(g) ||
            n.set(
              g,
              t(
                Object.assign(
                  {
                    from: s,
                    to: d,
                    velocity: p,
                    restSpeed: l ? 0.05 : 2,
                    restDistance: l ? 0.01 : 0.5,
                  },
                  o
                )
              )
            ),
          n.get(g)
        );
      },
      f = (s) => (a.has(s) || a.set(s, qt(s)), a.get(s));
    return {
      createAnimation: (s, d, p, l, g) => {
        var u, x;
        let y,
          k = s.length;
        if (p && k <= 2 && s.every(en)) {
          let S = s[k - 1],
            M = k === 1 ? null : s[0],
            v = 0,
            C = 0,
            w = g?.generator;
          if (w) {
            let { animation: T, generatorStartTime: K } = g,
              W = T?.startTime || K || 0,
              R = T?.currentTime || performance.now() - W,
              q = w(R).current;
            (C = (u = M) !== null && u !== void 0 ? u : q),
              (k === 1 || (k === 2 && s[0] === null)) &&
                (v = Kr((le) => w(le).current, R, q));
          } else C = (x = M) !== null && x !== void 0 ? x : parseFloat(d());
          let F = i(C, S, v, l?.includes("scale")),
            e = f(F);
          (y = Object.assign(Object.assign({}, e), { easing: "linear" })),
            g &&
              ((g.generator = F), (g.generatorStartTime = performance.now()));
        } else y = { easing: "ease", duration: f(i(0, 100)).overshootDuration };
        return y;
      },
    };
  };
}
var en = (t) => typeof t != "string",
  jf = ea(st),
  Of = ea(Gt),
  rn = { any: 0, all: 1 };
function tn(t, a, { root: o, margin: n, amount: i = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let f = $t(t),
    s = new WeakMap(),
    d = (l) => {
      l.forEach((g) => {
        let u = s.get(g.target);
        if (g.isIntersecting !== !!u)
          if (g.isIntersecting) {
            let x = a(g);
            typeof x == "function" ? s.set(g.target, x) : p.unobserve(g.target);
          } else u && (u(g), s.delete(g.target));
      });
    },
    p = new IntersectionObserver(d, {
      root: o,
      rootMargin: n,
      threshold: typeof i == "number" ? i : rn[i],
    });
  return f.forEach((l) => p.observe(l)), () => p.disconnect();
}
var Tr = new WeakMap(),
  Be;
function an(t, a) {
  if (a) {
    let { inlineSize: o, blockSize: n } = a[0];
    return { width: o, height: n };
  }
  return t instanceof SVGElement && "getBBox" in t
    ? t.getBBox()
    : { width: t.offsetWidth, height: t.offsetHeight };
}
function nn({ target: t, contentRect: a, borderBoxSize: o }) {
  var n;
  (n = Tr.get(t)) === null ||
    n === void 0 ||
    n.forEach((i) => {
      i({
        target: t,
        contentSize: a,
        get size() {
          return an(t, o);
        },
      });
    });
}
function on(t) {
  t.forEach(nn);
}
function ln() {
  typeof ResizeObserver < "u" && (Be = new ResizeObserver(on));
}
function sn(t, a) {
  Be || ln();
  let o = $t(t);
  return (
    o.forEach((n) => {
      let i = Tr.get(n);
      i || ((i = new Set()), Tr.set(n, i)), i.add(a), Be?.observe(n);
    }),
    () => {
      o.forEach((n) => {
        let i = Tr.get(n);
        i?.delete(a), i?.size || Be?.unobserve(n);
      });
    }
  );
}
var Lr = new Set(),
  nr;
function cn() {
  (nr = () => {
    let t = { width: A.innerWidth, height: A.innerHeight },
      a = { target: A, size: t, contentSize: t };
    Lr.forEach((o) => o(a));
  }),
    A.addEventListener("resize", nr);
}
function mn(t) {
  return (
    Lr.add(t),
    nr || cn(),
    () => {
      Lr.delete(t), !Lr.size && nr && (nr = void 0);
    }
  );
}
function ra(t, a) {
  return typeof t == "function" ? mn(t) : sn(t, a);
}
function mt(t, a, o) {
  t.dispatchEvent(new CustomEvent(a, { detail: { originalEvent: o } }));
}
function Jt(t, a, o) {
  t.dispatchEvent(new CustomEvent(a, { detail: { originalEntry: o } }));
}
var fn = {
    isActive: (t) => !!t.inView,
    subscribe: (t, { enable: a, disable: o }, { inViewOptions: n = {} }) => {
      let { once: i } = n,
        f = Ht(n, ["once"]);
      return tn(
        t,
        (s) => {
          if ((a(), Jt(t, "viewenter", s), !i))
            return (d) => {
              o(), Jt(t, "viewleave", d);
            };
        },
        f
      );
    },
  },
  Zt = (t, a, o) => (n) => {
    (!n.pointerType || n.pointerType === "mouse") && (o(), mt(t, a, n));
  },
  dn = {
    isActive: (t) => !!t.hover,
    subscribe: (t, { enable: a, disable: o }) => {
      let n = Zt(t, "hoverstart", a),
        i = Zt(t, "hoverend", o);
      return (
        t.addEventListener("pointerenter", n),
        t.addEventListener("pointerleave", i),
        () => {
          t.removeEventListener("pointerenter", n),
            t.removeEventListener("pointerleave", i);
        }
      );
    },
  },
  pn = {
    isActive: (t) => !!t.press,
    subscribe: (t, { enable: a, disable: o }) => {
      let n = (f) => {
          o(), mt(t, "pressend", f), A.removeEventListener("pointerup", n);
        },
        i = (f) => {
          a(), mt(t, "pressstart", f), A.addEventListener("pointerup", n);
        };
      return (
        t.addEventListener("pointerdown", i),
        () => {
          t.removeEventListener("pointerdown", i),
            A.removeEventListener("pointerup", n);
        }
      );
    },
  },
  un = { inView: fn, hover: dn, press: pn },
  zf = ["initial", "animate", ...Object.keys(un), "exit"];
var hn = 100,
  gn = {
    left: (t) => `translateX(-${t}px)`,
    right: (t) => `translateX(${t}px)`,
    top: (t) => `translateY(-${t}px)`,
    bottom: (t) => `translateY(${t}px)`,
  },
  ft =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function Xe(t) {
  let {
      slots: a,
      gap: o,
      padding: n,
      paddingPerSide: i,
      paddingTop: f,
      paddingRight: s,
      paddingBottom: d,
      paddingLeft: p,
      speed: l,
      hoverFactor: g,
      direction: u,
      alignment: x,
      sizingOptions: y,
      fadeOptions: k,
      style: L,
    } = t,
    {
      fadeContent: S,
      overflow: M,
      fadeWidth: v,
      fadeInset: C,
      fadeAlpha: w,
    } = k,
    { widthType: F, heightType: e } = y,
    T = i ? `${f}px ${s}px ${d}px ${p}px` : `${n}px`,
    K = ve.current() === ve.canvas,
    W = a.filter(Boolean),
    R = br.count(W),
    q = R > 0;
  u === !0 && (u = "left");
  let le = u === "left" || u === "right",
    me = er(0),
    se = gn[u],
    U = Jr(me, se),
    ye = N(null),
    he = G(() => [Xr(), Xr()], []),
    [ke, E] = xe({ parent: null, children: null }),
    ge = [],
    He = [],
    Le = 0,
    Ge = 0;
  K && ((Le = R ? Math.floor(10 / R) : 0), (Ge = 1)),
    !K &&
      q &&
      ke.parent &&
      ((Le = Math.round((ke.parent / ke.children) * 2) + 1),
      (Le = Math.min(Le, hn)),
      (Ge = 1));
  let Pe = Vt(() => {
      if (q && ye.current) {
        let oe = le ? ye.current.offsetWidth : ye.current.offsetHeight,
          ie = he[0].current
            ? le
              ? he[0].current.offsetLeft
              : he[0].current.offsetTop
            : 0,
          Se =
            (he[1].current
              ? le
                ? he[1].current.offsetLeft + he[1].current.offsetWidth
                : he[1].current.offsetTop + he[1].current.offsetHeight
              : 0) -
            ie +
            o;
        E({ parent: oe, children: Se });
      }
    }, []),
    zr = K ? { contentVisibility: "auto" } : {};
  if (q) {
    if (!K) {
      let oe = N(!0);
      ce(
        () => (
          kr.read(Pe),
          ra(ye.current, ({ contentSize: ie }) => {
            !oe.current && (ie.width || ie.height) && kr.read(Pe),
              (oe.current = !1);
          })
        ),
        []
      );
    }
    ge = br.map(W, (oe, ie) => {
      var We, Se, De, je;
      let Oe;
      ie === 0 && (Oe = he[0]), ie === W.length - 1 && (Oe = he[1]);
      let qe = {
        width: F
          ? (We = oe.props) === null || We === void 0
            ? void 0
            : We.width
          : "100%",
        height: e
          ? (Se = oe.props) === null || Se === void 0
            ? void 0
            : Se.height
          : "100%",
      };
      return r(z, {
        inherit: "id",
        children: r("li", {
          ref: Oe,
          style: qe,
          children: Yr(
            oe,
            {
              style: {
                ...((De = oe.props) === null || De === void 0
                  ? void 0
                  : De.style),
                ...qe,
                flexShrink: 0,
                ...zr,
              },
              layoutId: oe.props.layoutId
                ? oe.props.layoutId + "-original-" + ie
                : void 0,
            },
            (je = oe.props) === null || je === void 0 ? void 0 : je.children
          ),
        }),
      });
    });
  }
  if (!K)
    for (let oe = 0; oe < Le; oe++)
      He = [
        ...He,
        ...br.map(W, (ie, We) => {
          var Se, De, je, Oe, qe, Ur;
          let La = {
            width: F
              ? (Se = ie.props) === null || Se === void 0
                ? void 0
                : Se.width
              : "100%",
            height: e
              ? (De = ie.props) === null || De === void 0
                ? void 0
                : De.height
              : "100%",
            willChange: "transform",
          };
          return r(
            z,
            {
              inherit: "id",
              children: r(
                "li",
                {
                  style: La,
                  "aria-hidden": !0,
                  children: Yr(
                    ie,
                    {
                      key: oe + " " + We,
                      style: {
                        ...((je = ie.props) === null || je === void 0
                          ? void 0
                          : je.style),
                        width: F
                          ? (Oe = ie.props) === null || Oe === void 0
                            ? void 0
                            : Oe.width
                          : "100%",
                        height: e
                          ? (qe = ie.props) === null || qe === void 0
                            ? void 0
                            : qe.height
                          : "100%",
                        flexShrink: 0,
                        ...zr,
                      },
                      layoutId: ie.props.layoutId
                        ? ie.props.layoutId + "-dupe-" + oe
                        : void 0,
                    },
                    (Ur = ie.props) === null || Ur === void 0
                      ? void 0
                      : Ur.children
                  ),
                },
                oe + "li" + We
              ),
            },
            oe + "lg" + We
          );
        }),
      ];
  let fe = ke.children + ke.children * Math.round(ke.parent / ke.children),
    Er = N(null),
    Hr = N(null),
    wr = N(0),
    Gr = N(!1),
    Tt = Qr(),
    Lt = N(null),
    Me = N(null);
  if (!K) {
    let oe = rt(ye);
    ft
      ? (ce(() => {
          if (!(Tt || !fe || !l))
            return (
              (Me.current = Lt.current.animate(
                { transform: [se(0), se(fe)] },
                {
                  duration: (Math.abs(fe) / l) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                }
              )),
              () => Me.current.cancel()
            );
        }, [g, fe, l]),
        ce(() => {
          Me.current &&
            (oe && Me.current.playState === "paused"
              ? Me.current.play()
              : !oe &&
                Me.current.playState === "running" &&
                Me.current.pause());
        }, [oe]))
      : Zr((ie) => {
          if (!fe || Tt || ft) return;
          Er.current === null && (Er.current = ie), (ie = ie - Er.current);
          let Se = (Hr.current === null ? 0 : ie - Hr.current) * (l / 1e3);
          Gr.current && (Se *= g),
            (wr.current += Se),
            (wr.current = $r(0, fe, wr.current)),
            (Hr.current = ie),
            oe && me.set(wr.current);
        });
  }
  let Fa = le ? "to right" : "to bottom",
    Pt = v / 2,
    Ca = 100 - v / 2,
    Ka = bn(C, 0, Pt),
    Ta = 100 - C,
    qr = `linear-gradient(${Fa}, rgba(0, 0, 0, ${w}) ${Ka}%, rgba(0, 0, 0, 1) ${Pt}%, rgba(0, 0, 0, 1) ${Ca}%, rgba(0, 0, 0, ${w}) ${Ta}%)`;
  return q
    ? r("section", {
        style: {
          ...ta,
          opacity: Ge,
          WebkitMaskImage: S ? qr : void 0,
          MozMaskImage: S ? qr : void 0,
          maskImage: S ? qr : void 0,
          overflow: M ? "visible" : "hidden",
          padding: T,
        },
        ref: ye,
        children: b(c.ul, {
          ref: Lt,
          style: {
            ...ta,
            gap: o,
            top: u === "bottom" && aa(fe) ? -fe : void 0,
            left: u === "right" && aa(fe) ? -fe : void 0,
            placeItems: x,
            position: "relative",
            flexDirection: le ? "row" : "column",
            ...L,
            willChange: K ? "auto" : "transform",
            transform: ft ? se(0) : U,
          },
          onMouseEnter: () => {
            (Gr.current = !0), Me.current && (Me.current.playbackRate = g);
          },
          onMouseLeave: () => {
            (Gr.current = !1), Me.current && (Me.current.playbackRate = 1);
          },
          children: [ge, He],
        }),
      })
    : b("section", {
        style: xn,
        children: [
          r("div", { style: yn, children: "\u2728" }),
          r("p", { style: vn, children: "Connect to Content" }),
          r("p", {
            style: wn,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
Xe.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
j(Xe, {
  slots: {
    type: m.Array,
    title: "Children",
    control: { type: m.ComponentInstance },
  },
  speed: {
    type: m.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: m.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: m.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: m.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: m.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: m.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: m.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: m.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: m.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: m.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: m.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(t) {
          return t.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: m.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeInset: {
        type: m.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: m.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: m.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var ta = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  xn = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  yn = { fontSize: 32, marginBottom: 10 },
  vn = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  wn = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  bn = (t, a, o) => Math.min(Math.max(t, a), o),
  aa = (t) => typeof t == "number" && !isNaN(t);
function Je(t) {
  let { opacity: a, backgroundSize: o, borderRadius: n } = t;
  return r("div", {
    style: { ...kn, opacity: a, backgroundSize: o, borderRadius: n },
  });
}
Je.defaultProps = { opacity: 0.5, backgroundSize: 128, radius: 0 };
j(Je, {
  backgroundSize: { title: "Size", type: m.Number, min: 64, max: 256 },
  opacity: {
    title: "Opacity",
    type: m.Number,
    step: 0.1,
    displayStepper: !0,
    max: 1,
    min: 0,
  },
  borderRadius: {
    title: "Radius",
    type: m.Number,
    min: 0,
    max: 1e3,
    step: 1,
    displayStepper: !0,
  },
});
var kn = {
  width: "100%",
  height: "100%",
  backgroundSize: "256px 256px",
  backgroundRepeat: "repeat",
  backgroundImage:
    "url('/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
};
var Sn = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
var Fn = {
    ...Sn,
    borderRadius: 6,
    background: "rgba(149, 149, 149, 0.1)",
    border: "1px dashed rgba(149, 149, 149, 0.15)",
    color: "#a5a5a5",
    flexDirection: "column",
  },
  Ze = H((t, a) => r("div", { style: Fn, ref: a }));
var dt,
  na = (t) => {
    if (!dt) {
      let a = t.forwardRef(
        ({ color: o = "currentColor", size: n = 24, ...i }, f) =>
          t.createElement(
            "svg",
            {
              ref: f,
              xmlns: "http://www.w3.org/2000/svg",
              width: n,
              height: n,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: o,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              ...i,
            },
            t.createElement("path", {
              d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            }),
            t.createElement("polyline", { points: "9 22 9 12 15 12 15 22" })
          )
      );
      (a.displayName = "Home"), (dt = a);
    }
    return dt;
  };
var Qe = {
    onClick: { type: m.EventHandler },
    onMouseDown: { type: m.EventHandler },
    onMouseUp: { type: m.EventHandler },
    onMouseEnter: { type: m.EventHandler },
    onMouseLeave: { type: m.EventHandler },
  },
  Cn = (t, a) => t.find((o) => o.toLowerCase().includes(a));
function $e(t, a, o = "", n, i) {
  let f = G(() => {
    if (o == null || o?.length === 0) return null;
    let d = o.toLowerCase().replace(/-|\s/g, "");
    var p;
    return (p = i[d]) !== null && p !== void 0 ? p : Cn(t, d);
  }, [n, o]);
  return a ? n : f;
}
var Pr = [
    "activity",
    "airplay",
    "alert-circle",
    "alert-octagon",
    "alert-triangle",
    "align-center",
    "align-justify",
    "align-left",
    "align-right",
    "anchor",
    "aperture",
    "archive",
    "arrow-down",
    "arrow-down-circle",
    "arrow-down-left",
    "arrow-down-right",
    "arrow-left",
    "arrow-left-circle",
    "arrow-right",
    "arrow-right-circle",
    "arrow-up",
    "arrow-up-circle",
    "arrow-up-left",
    "arrow-up-right",
    "at-sign",
    "award",
    "bar-chart",
    "bar-chart-2",
    "battery",
    "battery-charging",
    "bell",
    "bell-off",
    "bluetooth",
    "bold",
    "book",
    "book-open",
    "bookmark",
    "box",
    "briefcase",
    "calendar",
    "camera",
    "camera-off",
    "cast",
    "check",
    "check-circle",
    "check-square",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "chevrons-down",
    "chevrons-left",
    "chevrons-right",
    "chevrons-up",
    "chrome",
    "circle",
    "clipboard",
    "clock",
    "cloud",
    "cloud-drizzle",
    "cloud-lightning",
    "cloud-off",
    "cloud-rain",
    "cloud-snow",
    "code",
    "codepen",
    "codesandbox",
    "coffee",
    "columns",
    "command",
    "compass",
    "copy",
    "corner-down-left",
    "corner-down-right",
    "corner-left-down",
    "corner-left-up",
    "corner-right-down",
    "corner-right-up",
    "corner-up-left",
    "corner-up-right",
    "cpu",
    "credit-card",
    "crop",
    "crosshair",
    "database",
    "delete",
    "disc",
    "divide",
    "divide-circle",
    "divide-square",
    "dollar-sign",
    "download",
    "download-cloud",
    "dribbble",
    "droplet",
    "edit",
    "edit-2",
    "edit-3",
    "external-link",
    "eye",
    "eye-off",
    "facebook",
    "fast-forward",
    "feather",
    "figma",
    "file",
    "file-minus",
    "file-plus",
    "file-text",
    "film",
    "filter",
    "flag",
    "folder",
    "folder-minus",
    "folder-plus",
    "framer",
    "frown",
    "gift",
    "git-branch",
    "git-commit",
    "git-merge",
    "git-pull-request",
    "github",
    "gitlab",
    "globe",
    "grid",
    "hard-drive",
    "hash",
    "headphones",
    "heart",
    "help-circle",
    "hexagon",
    "home",
    "image",
    "inbox",
    "info",
    "instagram",
    "italic",
    "key",
    "layers",
    "layout",
    "life-buoy",
    "link",
    "link-2",
    "linkedin",
    "list",
    "loader",
    "lock",
    "log-in",
    "log-out",
    "mail",
    "map",
    "map-pin",
    "maximize",
    "maximize-2",
    "meh",
    "menu",
    "message-circle",
    "message-square",
    "mic",
    "mic-off",
    "minimize",
    "minimize-2",
    "minus",
    "minus-circle",
    "minus-square",
    "monitor",
    "moon",
    "more-horizontal",
    "more-vertical",
    "mouse-pointer",
    "move",
    "music",
    "navigation",
    "navigation-2",
    "octagon",
    "package",
    "paperclip",
    "pause",
    "pause-circle",
    "pen-tool",
    "percent",
    "phone",
    "phone-call",
    "phone-forwarded",
    "phone-incoming",
    "phone-missed",
    "phone-off",
    "phone-outgoing",
    "pie-chart",
    "play",
    "play-circle",
    "plus",
    "plus-circle",
    "plus-square",
    "pocket",
    "power",
    "printer",
    "radio",
    "refresh-ccw",
    "refresh-cw",
    "repeat",
    "rewind",
    "rotate-ccw",
    "rotate-cw",
    "rss",
    "save",
    "scissors",
    "search",
    "send",
    "server",
    "settings",
    "share",
    "share-2",
    "shield",
    "shield-off",
    "shopping-bag",
    "shopping-cart",
    "shuffle",
    "sidebar",
    "skip-back",
    "skip-forward",
    "slack",
    "slash",
    "sliders",
    "smartphone",
    "smile",
    "speaker",
    "square",
    "star",
    "stop-circle",
    "sun",
    "sunrise",
    "sunset",
    "tablet",
    "tag",
    "target",
    "terminal",
    "thermometer",
    "thumbs-down",
    "thumbs-up",
    "toggle-left",
    "toggle-right",
    "tool",
    "trash",
    "trash-2",
    "trello",
    "trending-down",
    "trending-up",
    "triangle",
    "truck",
    "tv",
    "twitch",
    "twitter",
    "type",
    "umbrella",
    "underline",
    "unlock",
    "upload",
    "upload-cloud",
    "user",
    "user-check",
    "user-minus",
    "user-plus",
    "user-x",
    "users",
    "video",
    "video-off",
    "voicemail",
    "volume",
    "volume-1",
    "volume-2",
    "volume-x",
    "watch",
    "wifi",
    "wifi-off",
    "wind",
    "x",
    "x-circle",
    "x-octagon",
    "x-square",
    "youtube",
    "zap",
    "zap-off",
    "zoom-in",
    "zoom-out",
  ],
  Kn = "https://framer.com/m/feather-icons/",
  Tn = Pr.map((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Ln = Pr.reduce((t, a) => ((t[a.toLowerCase()] = a), t), {});
function we(t) {
  let {
      color: a,
      selectByList: o,
      iconSearch: n,
      iconSelection: i,
      onClick: f,
      onMouseDown: s,
      onMouseUp: d,
      onMouseEnter: p,
      onMouseLeave: l,
      mirrored: g,
    } = t,
    u = N(!1),
    x = $e(Pr, o, n, i, Ln),
    [y, k] = xe(x === "Home" ? na(ne) : null);
  async function L() {
    let v = !0;
    try {
      let w = await import(`${Kn}${x}.js@0.0.29`);
      v && k(w.default(ne));
    } catch (C) {
      console.log(C), v && k(null);
    }
    return () => {
      v = !1;
    };
  }
  ce(() => {
    L();
  }, [x]);
  let M = ve.current() === ve.canvas ? r(Ze, {}) : null;
  return r("div", {
    style: { display: "contents" },
    onClick: f,
    onMouseEnter: p,
    onMouseLeave: l,
    onMouseDown: s,
    onMouseUp: d,
    children: y
      ? r(y, {
          style: {
            width: "100%",
            height: "100%",
            transform: g ? "scale(-1, 1)" : void 0,
          },
          color: a,
        })
      : M,
  });
}
we.displayName = "Feather";
we.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "home",
  iconSearch: "Home",
  color: "#66F",
  selectByList: !0,
  mirrored: !1,
};
j(we, {
  selectByList: {
    type: m.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: we.defaultProps.selectByList,
  },
  iconSelection: {
    type: m.Enum,
    options: Pr,
    optionTitles: Tn,
    defaultValue: we.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: t }) => !t,
    description:
      "Find every icon name on the [Feather site](https://feathericons.com/)",
  },
  iconSearch: {
    type: m.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: t }) => t,
  },
  mirrored: {
    type: m.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: we.defaultProps.mirrored,
  },
  color: { type: m.Color, title: "Color", defaultValue: we.defaultProps.color },
  ...Qe,
});
var Pn = O(we),
  Mr = ze(we),
  Mn = {
    DMd89ikes: { hover: !0 },
    N55f9FJxc: { hover: !0 },
    OlpYPL4uF: { hover: !0 },
    R2ZVs939o: { hover: !0 },
    rm7iJvumB: { hover: !0 },
    RrALB9OPK: { hover: !0 },
  },
  Vn = [
    "N55f9FJxc",
    "rm7iJvumB",
    "DMd89ikes",
    "xjbrmDjxY",
    "R2ZVs939o",
    "OlpYPL4uF",
    "RrALB9OPK",
  ],
  An = "framer-nhG2x",
  Rn = {
    DMd89ikes: "framer-v-15fgfgz",
    N55f9FJxc: "framer-v-uaiwkz",
    OlpYPL4uF: "framer-v-148stgn",
    R2ZVs939o: "framer-v-1re9vl8",
    rm7iJvumB: "framer-v-58uig3",
    RrALB9OPK: "framer-v-1i5y0i0",
    xjbrmDjxY: "framer-v-1fjx1ap",
  };
function Vr(t, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, t[n])), o;
}
var In = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Nn = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  Wn = c.create(h),
  Bn = {
    "Alert-circle": "alert-circle",
    "Alert-octagon": "alert-octagon",
    "Alert-triangle": "alert-triangle",
    "Align-center": "align-center",
    "Align-justify": "align-justify",
    "Align-left": "align-left",
    "Align-right": "align-right",
    "Arrow-down-circle": "arrow-down-circle",
    "Arrow-down-left": "arrow-down-left",
    "Arrow-down-right": "arrow-down-right",
    "Arrow-down": "arrow-down",
    "Arrow-left-circle": "arrow-left-circle",
    "Arrow-left": "arrow-left",
    "Arrow-right-circle": "arrow-right-circle",
    "Arrow-right": "arrow-right",
    "Arrow-up-circle": "arrow-up-circle",
    "Arrow-up-left": "arrow-up-left",
    "Arrow-up-right": "arrow-up-right",
    "Arrow-up": "arrow-up",
    "At-sign": "at-sign",
    "Bar-chart-2": "bar-chart-2",
    "Bar-chart": "bar-chart",
    "Battery-charging": "battery-charging",
    "Bell-off": "bell-off",
    "Book-open": "book-open",
    "Camera-off": "camera-off",
    "Check-circle": "check-circle",
    "Check-square": "check-square",
    "Chevron-down": "chevron-down",
    "Chevron-left": "chevron-left",
    "Chevron-right": "chevron-right",
    "Chevron-up": "chevron-up",
    "Chevrons-down": "chevrons-down",
    "Chevrons-left": "chevrons-left",
    "Chevrons-right": "chevrons-right",
    "Chevrons-up": "chevrons-up",
    "Cloud-drizzle": "cloud-drizzle",
    "Cloud-lightning": "cloud-lightning",
    "Cloud-off": "cloud-off",
    "Cloud-rain": "cloud-rain",
    "Cloud-snow": "cloud-snow",
    "Corner-down-left": "corner-down-left",
    "Corner-down-right": "corner-down-right",
    "Corner-left-down": "corner-left-down",
    "Corner-left-up": "corner-left-up",
    "Corner-right-down": "corner-right-down",
    "Corner-right-up": "corner-right-up",
    "Corner-up-left": "corner-up-left",
    "Corner-up-right": "corner-up-right",
    "Credit-card": "credit-card",
    "Divide-circle": "divide-circle",
    "Divide-square": "divide-square",
    "Dollar-sign": "dollar-sign",
    "Download-cloud": "download-cloud",
    "Edit-2": "edit-2",
    "Edit-3": "edit-3",
    "External-link": "external-link",
    "Eye-off": "eye-off",
    "Fast-forward": "fast-forward",
    "File-minus": "file-minus",
    "File-plus": "file-plus",
    "File-text": "file-text",
    "Folder-minus": "folder-minus",
    "Folder-plus": "folder-plus",
    "Git-branch": "git-branch",
    "Git-commit": "git-commit",
    "Git-merge": "git-merge",
    "Git-pull-request": "git-pull-request",
    "Hard-drive": "hard-drive",
    "Help-circle": "help-circle",
    "Life-buoy": "life-buoy",
    "Link-2": "link-2",
    "Log-in": "log-in",
    "Log-out": "log-out",
    "Map-pin": "map-pin",
    "Maximize-2": "maximize-2",
    "Message-circle": "message-circle",
    "Message-square": "message-square",
    "Mic-off": "mic-off",
    "Minimize-2": "minimize-2",
    "Minus-circle": "minus-circle",
    "Minus-square": "minus-square",
    "More-horizontal": "more-horizontal",
    "More-vertical": "more-vertical",
    "Mouse-pointer": "mouse-pointer",
    "Navigation-2": "navigation-2",
    "Pause-circle": "pause-circle",
    "Pen-tool": "pen-tool",
    "Phone-call": "phone-call",
    "Phone-forwarded": "phone-forwarded",
    "Phone-incoming": "phone-incoming",
    "Phone-missed": "phone-missed",
    "Phone-off": "phone-off",
    "Phone-outgoing": "phone-outgoing",
    "Pie-chart": "pie-chart",
    "Play-circle": "play-circle",
    "Plus-circle": "plus-circle",
    "Plus-square": "plus-square",
    "Refresh-ccw": "refresh-ccw",
    "Refresh-cw": "refresh-cw",
    "Rotate-ccw": "rotate-ccw",
    "Rotate-cw": "rotate-cw",
    "Share-2": "share-2",
    "Shield-off": "shield-off",
    "Shopping-bag": "shopping-bag",
    "Shopping-cart": "shopping-cart",
    "Skip-back": "skip-back",
    "Skip-forward": "skip-forward",
    "Stop-circle": "stop-circle",
    "Thumbs-down": "thumbs-down",
    "Thumbs-up": "thumbs-up",
    "Toggle-left": "toggle-left",
    "Toggle-right": "toggle-right",
    "Trash-2": "trash-2",
    "Trending-down": "trending-down",
    "Trending-up": "trending-up",
    "Upload-cloud": "upload-cloud",
    "User-check": "user-check",
    "User-minus": "user-minus",
    "User-plus": "user-plus",
    "User-x": "user-x",
    "Video-off": "video-off",
    "Volume-1": "volume-1",
    "Volume-2": "volume-2",
    "Volume-x": "volume-x",
    "Wifi-off": "wifi-off",
    "X-circle": "x-circle",
    "X-octagon": "x-octagon",
    "X-square": "x-square",
    "Zap-off": "zap-off",
    "Zoom-in": "zoom-in",
    "Zoom-out": "zoom-out",
    Activity: "activity",
    Airplay: "airplay",
    Anchor: "anchor",
    Aperture: "aperture",
    Archive: "archive",
    Award: "award",
    Battery: "battery",
    Bell: "bell",
    Bluetooth: "bluetooth",
    Bold: "bold",
    Book: "book",
    Bookmark: "bookmark",
    Box: "box",
    Briefcase: "briefcase",
    Calendar: "calendar",
    Camera: "camera",
    Cast: "cast",
    Check: "check",
    Chrome: "chrome",
    Circle: "circle",
    Clipboard: "clipboard",
    Clock: "clock",
    Cloud: "cloud",
    Code: "code",
    Codepen: "codepen",
    Codesandbox: "codesandbox",
    Coffee: "coffee",
    Columns: "columns",
    Command: "command",
    Compass: "compass",
    Copy: "copy",
    Cpu: "cpu",
    Crop: "crop",
    Crosshair: "crosshair",
    Database: "database",
    Delete: "delete",
    Disc: "disc",
    Divide: "divide",
    Download: "download",
    Dribbble: "dribbble",
    Droplet: "droplet",
    Edit: "edit",
    Eye: "eye",
    Facebook: "facebook",
    Feather: "feather",
    Figma: "figma",
    File: "file",
    Film: "film",
    Filter: "filter",
    Flag: "flag",
    Folder: "folder",
    Framer: "framer",
    Frown: "frown",
    Gift: "gift",
    Github: "github",
    Gitlab: "gitlab",
    Globe: "globe",
    Grid: "grid",
    Hash: "hash",
    Headphones: "headphones",
    Heart: "heart",
    Hexagon: "hexagon",
    Home: "home",
    Image: "image",
    Inbox: "inbox",
    Info: "info",
    Instagram: "instagram",
    Italic: "italic",
    Key: "key",
    Layers: "layers",
    Layout: "layout",
    Link: "link",
    Linkedin: "linkedin",
    List: "list",
    Loader: "loader",
    Lock: "lock",
    Mail: "mail",
    Map: "map",
    Maximize: "maximize",
    Meh: "meh",
    Menu: "menu",
    Mic: "mic",
    Minimize: "minimize",
    Minus: "minus",
    Monitor: "monitor",
    Moon: "moon",
    Move: "move",
    Music: "music",
    Navigation: "navigation",
    Octagon: "octagon",
    Package: "package",
    Paperclip: "paperclip",
    Pause: "pause",
    Percent: "percent",
    Phone: "phone",
    Play: "play",
    Plus: "plus",
    Pocket: "pocket",
    Power: "power",
    Printer: "printer",
    Radio: "radio",
    Repeat: "repeat",
    Rewind: "rewind",
    Rss: "rss",
    Save: "save",
    Scissors: "scissors",
    Search: "search",
    Send: "send",
    Server: "server",
    Settings: "settings",
    Share: "share",
    Shield: "shield",
    Shuffle: "shuffle",
    Sidebar: "sidebar",
    Slack: "slack",
    Slash: "slash",
    Sliders: "sliders",
    Smartphone: "smartphone",
    Smile: "smile",
    Speaker: "speaker",
    Square: "square",
    Star: "star",
    Sun: "sun",
    Sunrise: "sunrise",
    Sunset: "sunset",
    Tablet: "tablet",
    Tag: "tag",
    Target: "target",
    Terminal: "terminal",
    Thermometer: "thermometer",
    Tool: "tool",
    Trash: "trash",
    Trello: "trello",
    Triangle: "triangle",
    Truck: "truck",
    Tv: "tv",
    Twitch: "twitch",
    Twitter: "twitter",
    Type: "type",
    Umbrella: "umbrella",
    Underline: "underline",
    Unlock: "unlock",
    Upload: "upload",
    User: "user",
    Users: "users",
    Video: "video",
    Voicemail: "voicemail",
    Volume: "volume",
    Watch: "watch",
    Wifi: "wifi",
    Wind: "wind",
    X: "x",
    Youtube: "youtube",
    Zap: "zap",
  },
  _n = {
    Default: "N55f9FJxc",
    Telegram: "OlpYPL4uF",
    Ghost: "xjbrmDjxY",
    Header: "R2ZVs939o",
    Outline: "DMd89ikes",
    Secondary: "rm7iJvumB",
    Twitter: "RrALB9OPK",
  },
  Dn = ({
    height: t,
    icon: a,
    id: o,
    leftIcon: n,
    link: i,
    newTab: f,
    rightIcon: s,
    smoothScroll: d,
    tap2: p,
    title: l,
    width: g,
    ...u
  }) => {
    var x, y, k, L, S, M, v;
    return {
      ...u,
      cITQpDSzU: d ?? u.cITQpDSzU,
      cSN7oJ9Cy: s ?? u.cSN7oJ9Cy,
      eVKX59h3Y: i ?? u.eVKX59h3Y,
      GQMIB2fo_:
        (k =
          (y = (x = Bn[a]) !== null && x !== void 0 ? x : a) !== null &&
          y !== void 0
            ? y
            : u.GQMIB2fo_) !== null && k !== void 0
          ? k
          : "framer",
      hvc8_eco1: (L = n ?? u.hvc8_eco1) !== null && L !== void 0 ? L : !0,
      jY9wMwBAL: (S = l ?? u.jY9wMwBAL) !== null && S !== void 0 ? S : "Button",
      Q5d6XPMqx: f ?? u.Q5d6XPMqx,
      variant:
        (v = (M = _n[u.variant]) !== null && M !== void 0 ? M : u.variant) !==
          null && v !== void 0
          ? v
          : "N55f9FJxc",
      VrG3TKAfJ: p ?? u.VrG3TKAfJ,
    };
  },
  jn = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  On = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      {
        style: i,
        className: f,
        layoutId: s,
        variant: d,
        GQMIB2fo_: p,
        jY9wMwBAL: l,
        hvc8_eco1: g,
        cSN7oJ9Cy: u,
        VrG3TKAfJ: x,
        eVKX59h3Y: y,
        Q5d6XPMqx: k,
        cITQpDSzU: L,
        ...S
      } = Dn(t),
      {
        baseVariant: M,
        classNames: v,
        clearLoadingGesture: C,
        gestureHandlers: w,
        gestureVariant: F,
        isLoading: e,
        setGestureState: T,
        setVariant: K,
        variants: W,
      } = te({
        cycleOrder: Vn,
        defaultVariant: "N55f9FJxc",
        enabledGestures: Mn,
        variant: d,
        variantClassNames: Rn,
      }),
      R = jn(t, W),
      { activeVariantCallback: q, delay: le } = Ie(M),
      me = q(async (...ke) => {
        if ((T({ isPressed: !1 }), x && (await x(...ke)) === !1)) return !1;
      }),
      se = N(null),
      U = X(),
      ye = [],
      he = re();
    return r(z, {
      id: s ?? U,
      children: r(Wn, {
        animate: W,
        initial: !1,
        children: r(Nn, {
          value: In,
          children: r(de, {
            href: y,
            openInNewTab: k,
            smoothScroll: L,
            children: b(c.a, {
              ...S,
              ...w,
              className: `${Y(
                An,
                ...ye,
                "framer-uaiwkz",
                f,
                v
              )} framer-1vgnk7b`,
              "data-border": !0,
              "data-framer-name": "Default",
              "data-highlight": !0,
              "data-reset": "button",
              layoutDependency: R,
              layoutId: "N55f9FJxc",
              onTap: me,
              ref: a ?? se,
              style: {
                "--border-bottom-width": "1px",
                "--border-color": "rgba(33, 33, 33, 0)",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor:
                  "var(--token-d32a7d96-0caa-4965-903f-d51473e13090, rgb(121, 37, 161))",
                borderBottomLeftRadius: 6,
                borderBottomRightRadius: 6,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                opacity: 1,
                ...i,
              },
              variants: {
                "DMd89ikes-hover": {
                  backgroundColor: "rgba(214, 214, 214, 0.05)",
                },
                "N55f9FJxc-hover": { opacity: 0.8 },
                "OlpYPL4uF-hover": {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  backgroundColor: "rgb(79, 89, 226)",
                },
                "R2ZVs939o-hover": {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
                "rm7iJvumB-hover": { opacity: 0.8 },
                "RrALB9OPK-hover": {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  backgroundColor: "rgb(48, 151, 238)",
                },
                DMd89ikes: {
                  "--border-color":
                    "var(--token-c45f398b-a236-4306-91ba-4afcf6996804, rgb(228, 228, 231))",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                },
                OlpYPL4uF: {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  backgroundColor: "rgb(244, 244, 245)",
                },
                R2ZVs939o: {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                },
                rm7iJvumB: {
                  backgroundColor:
                    "var(--token-f7c800b4-d4e3-4064-b453-be51d4e6bec4, rgb(244, 244, 245))",
                },
                RrALB9OPK: {
                  "--border-bottom-width": "0px",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-top-width": "0px",
                  backgroundColor: "rgb(244, 244, 245)",
                },
                xjbrmDjxY: {
                  "--border-color": "rgba(255, 255, 255, 0.4)",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                },
              },
              ...Vr(
                {
                  "DMd89ikes-hover": { "data-framer-name": void 0 },
                  "N55f9FJxc-hover": { "data-framer-name": void 0 },
                  "OlpYPL4uF-hover": {
                    "data-framer-name": void 0,
                    "data-highlight": void 0,
                    onTap: void 0,
                  },
                  "R2ZVs939o-hover": {
                    "data-framer-name": void 0,
                    "data-highlight": void 0,
                    onTap: void 0,
                  },
                  "rm7iJvumB-hover": { "data-framer-name": void 0 },
                  "RrALB9OPK-hover": {
                    "data-framer-name": void 0,
                    "data-highlight": void 0,
                    onTap: void 0,
                  },
                  DMd89ikes: { "data-framer-name": "Outline" },
                  OlpYPL4uF: {
                    "data-framer-name": "Telegram",
                    "data-highlight": void 0,
                    onTap: void 0,
                  },
                  R2ZVs939o: {
                    "data-framer-name": "Header",
                    "data-highlight": void 0,
                    onTap: void 0,
                  },
                  rm7iJvumB: { "data-framer-name": "Secondary" },
                  RrALB9OPK: {
                    "data-framer-name": "Twitter",
                    "data-highlight": void 0,
                    onTap: void 0,
                  },
                  xjbrmDjxY: {
                    "data-framer-name": "Ghost",
                    "data-highlight": void 0,
                    onTap: void 0,
                  },
                },
                M,
                F
              ),
              children: [
                g &&
                  r(P, {
                    children: r(c.div, {
                      className: "framer-19wk2bb-container",
                      layoutDependency: R,
                      layoutId: "ij4tkvV_J-container",
                      children: r(we, {
                        color:
                          "var(--token-055501a8-daae-4f09-a0c1-7155a83ec8c6, rgb(250, 250, 250))",
                        height: "100%",
                        iconSearch: "Home",
                        iconSelection: p,
                        id: "ij4tkvV_J",
                        layoutId: "ij4tkvV_J",
                        mirrored: !1,
                        selectByList: !0,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                        ...Vr(
                          {
                            "OlpYPL4uF-hover": { color: "rgb(244, 244, 245)" },
                            "RrALB9OPK-hover": { color: "rgb(244, 244, 245)" },
                            DMd89ikes: { color: "rgb(255, 255, 255)" },
                            OlpYPL4uF: { color: "rgb(24, 24, 26)" },
                            R2ZVs939o: { color: "rgb(255, 255, 255)" },
                            rm7iJvumB: {
                              color:
                                "var(--token-b272a1a7-2936-4f98-a6cf-4bd21a4f898c, rgb(24, 24, 27))",
                            },
                            RrALB9OPK: { color: "rgb(24, 24, 26)" },
                            xjbrmDjxY: { color: "rgba(255, 255, 255, 0.4)" },
                          },
                          M,
                          F
                        ),
                      }),
                    }),
                  }),
                r(V, {
                  __fromCanvasComponent: !0,
                  children: r(h, {
                    children: r(c.p, {
                      style: {
                        "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                        "--framer-font-family":
                          '"Work Sans", "Work Sans Placeholder", sans-serif',
                        "--framer-font-size": "14px",
                        "--framer-font-weight": "500",
                        "--framer-letter-spacing": "-0.5px",
                        "--framer-line-height": "1em",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-055501a8-daae-4f09-a0c1-7155a83ec8c6, rgb(250, 250, 250)))",
                      },
                      children: "Button",
                    }),
                  }),
                  className: "framer-51tvrt",
                  fonts: ["GF;Work Sans-500"],
                  layoutDependency: R,
                  layoutId: "XBO0bm8zy",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-055501a8-daae-4f09-a0c1-7155a83ec8c6, rgb(250, 250, 250))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  text: l,
                  variants: {
                    "N55f9FJxc-hover": {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                    },
                    "OlpYPL4uF-hover": {
                      "--extracted-r6o4lv": "rgb(244, 244, 245)",
                    },
                    "RrALB9OPK-hover": {
                      "--extracted-r6o4lv": "rgb(244, 244, 245)",
                    },
                    DMd89ikes: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                    OlpYPL4uF: { "--extracted-r6o4lv": "rgb(24, 24, 26)" },
                    R2ZVs939o: { "--extracted-r6o4lv": "rgb(255, 255, 255)" },
                    rm7iJvumB: {
                      "--extracted-r6o4lv":
                        "var(--token-b272a1a7-2936-4f98-a6cf-4bd21a4f898c, rgb(24, 24, 27))",
                    },
                    RrALB9OPK: { "--extracted-r6o4lv": "rgb(24, 24, 26)" },
                    xjbrmDjxY: {
                      "--extracted-r6o4lv": "rgba(255, 255, 255, 0.4)",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...Vr(
                    {
                      "N55f9FJxc-hover": {
                        children: r(h, {
                          children: r(c.p, {
                            style: {
                              "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                              "--framer-font-family":
                                '"Work Sans", "Work Sans Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "1em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                      "OlpYPL4uF-hover": {
                        children: r(h, {
                          children: r(c.p, {
                            style: {
                              "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                              "--framer-font-family":
                                '"Work Sans", "Work Sans Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "1em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(244, 244, 245))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                      "RrALB9OPK-hover": {
                        children: r(h, {
                          children: r(c.p, {
                            style: {
                              "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                              "--framer-font-family":
                                '"Work Sans", "Work Sans Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "1em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(244, 244, 245))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                      DMd89ikes: {
                        children: r(h, {
                          children: r(c.p, {
                            style: {
                              "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                              "--framer-font-family":
                                '"Work Sans", "Work Sans Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "1em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                      OlpYPL4uF: {
                        children: r(h, {
                          children: r(c.p, {
                            style: {
                              "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                              "--framer-font-family":
                                '"Work Sans", "Work Sans Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "1em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(24, 24, 26))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                      R2ZVs939o: {
                        children: r(h, {
                          children: r(c.p, {
                            style: {
                              "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                              "--framer-font-family":
                                '"Work Sans", "Work Sans Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "1em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                      rm7iJvumB: {
                        children: r(h, {
                          children: r(c.p, {
                            style: {
                              "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                              "--framer-font-family":
                                '"Work Sans", "Work Sans Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "1em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-b272a1a7-2936-4f98-a6cf-4bd21a4f898c, rgb(24, 24, 27)))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                      RrALB9OPK: {
                        children: r(h, {
                          children: r(c.p, {
                            style: {
                              "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                              "--framer-font-family":
                                '"Work Sans", "Work Sans Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "1em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgb(24, 24, 26))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                      xjbrmDjxY: {
                        children: r(h, {
                          children: r(c.p, {
                            style: {
                              "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                              "--framer-font-family":
                                '"Work Sans", "Work Sans Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-letter-spacing": "-0.5px",
                              "--framer-line-height": "1em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.4))",
                            },
                            children: "Button",
                          }),
                        }),
                      },
                    },
                    M,
                    F
                  ),
                }),
                u &&
                  r(P, {
                    children: r(c.div, {
                      className: "framer-s979c5-container",
                      layoutDependency: R,
                      layoutId: "FHtxJHG2m-container",
                      children: r(we, {
                        color:
                          "var(--token-055501a8-daae-4f09-a0c1-7155a83ec8c6, rgb(250, 250, 250))",
                        height: "100%",
                        iconSearch: "Home",
                        iconSelection: p,
                        id: "FHtxJHG2m",
                        layoutId: "FHtxJHG2m",
                        mirrored: !1,
                        selectByList: !0,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                        ...Vr(
                          {
                            "OlpYPL4uF-hover": { color: "rgb(244, 244, 245)" },
                            "RrALB9OPK-hover": { color: "rgb(244, 244, 245)" },
                            DMd89ikes: { color: "rgb(255, 255, 255)" },
                            OlpYPL4uF: { color: "rgb(24, 24, 26)" },
                            R2ZVs939o: { color: "rgb(255, 255, 255)" },
                            rm7iJvumB: {
                              color:
                                "var(--token-b272a1a7-2936-4f98-a6cf-4bd21a4f898c, rgb(24, 24, 27))",
                            },
                            RrALB9OPK: { color: "rgb(24, 24, 26)" },
                            xjbrmDjxY: { color: "rgba(255, 255, 255, 0.4)" },
                          },
                          M,
                          F
                        ),
                      }),
                    }),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  zn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-nhG2x.framer-1vgnk7b, .framer-nhG2x .framer-1vgnk7b { display: block; }",
    ".framer-nhG2x.framer-uaiwkz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; min-height: 40px; overflow: visible; padding: 8px 16px 8px 16px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-nhG2x .framer-19wk2bb-container, .framer-nhG2x .framer-s979c5-container { flex: none; height: 15px; position: relative; width: 16px; }",
    ".framer-nhG2x .framer-51tvrt { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-nhG2x.framer-uaiwkz { gap: 0px; } .framer-nhG2x.framer-uaiwkz > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-nhG2x.framer-uaiwkz > :first-child { margin-left: 0px; } .framer-nhG2x.framer-uaiwkz > :last-child { margin-right: 0px; } }",
    ".framer-nhG2x.framer-v-1fjx1ap.framer-uaiwkz { cursor: unset; }",
    ".framer-nhG2x.framer-v-15fgfgz.hover .framer-19wk2bb-container { order: 0; }",
    ".framer-nhG2x.framer-v-15fgfgz.hover .framer-51tvrt { order: 1; }",
    ".framer-nhG2x.framer-v-15fgfgz.hover .framer-s979c5-container { order: 2; }",
    '.framer-nhG2x[data-border="true"]::after, .framer-nhG2x [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  or = Z(On, zn, "framer-nhG2x"),
  pe = or;
or.displayName = "Button";
or.defaultProps = { height: 40, width: 99 };
j(or, {
  variant: {
    options: [
      "N55f9FJxc",
      "rm7iJvumB",
      "DMd89ikes",
      "xjbrmDjxY",
      "R2ZVs939o",
      "OlpYPL4uF",
      "RrALB9OPK",
    ],
    optionTitles: [
      "Default",
      "Secondary",
      "Outline",
      "Ghost",
      "Header",
      "Telegram",
      "Twitter",
    ],
    title: "Variant",
    type: m.Enum,
  },
  GQMIB2fo_: Mr?.iconSelection && {
    ...Mr.iconSelection,
    defaultValue: "framer",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  jY9wMwBAL: {
    defaultValue: "Button",
    displayTextArea: !1,
    title: "Title",
    type: m.String,
  },
  hvc8_eco1: { defaultValue: !0, title: "Left-Icon", type: m.Boolean },
  cSN7oJ9Cy: { defaultValue: !1, title: "Right-Icon", type: m.Boolean },
  VrG3TKAfJ: { title: "Tap 2", type: m.EventHandler },
  eVKX59h3Y: { title: "Link", type: m.Link },
  Q5d6XPMqx: { defaultValue: !1, title: "New Tab", type: m.Boolean },
  cITQpDSzU: { defaultValue: !1, title: "Smooth Scroll", type: m.Boolean },
});
Q(
  or,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K3vXNi0Dp6_cOyA.woff2",
          weight: "500",
        },
      ],
    },
    ...Pn,
  ],
  { supportsExplicitInterCodegen: !0 }
);
function Ae(t) {
  let a = N(null),
    [o, n] = xe(!1);
  return (
    ce(() => {
      let i = B.userAgent || "",
        f = i.includes("Macintosh"),
        s = /^((?!chrome|android).)*safari/i.test(i);
      n(f && s);
    }, []),
    ce(() => {
      let i = a.current;
      i && (i.disablePictureInPicture = !0);
    }, []),
    b(Rt, {
      children: [
        !t.movFile &&
          !t.webmFile &&
          b("div", {
            children: [
              r("img", {
                src: t.webpFallbackImage,
                alt: "Fallback Image (WEBP)",
                style: { objectFit: "contain", ...t.style },
              }),
              r("img", {
                src: t.pngFallbackImage,
                alt: "Fallback Image (PNG)",
                style: { objectFit: "contain", ...t.style },
              }),
            ],
          }),
        b("video", {
          ref: a,
          autoPlay: !0,
          loop: !0,
          muted: !0,
          playsInline: !0,
          style: {
            objectFit: "contain",
            filter: o ? "brightness(0.98)" : "none",
            ...t.style,
          },
          children: [
            r("source", { src: t.movFile, type: "video/mp4; codecs=hvc1" }),
            !o && r("source", { src: t.webmFile, type: "video/webm" }),
            r("p", { children: "Your browser does not support HTML5 video." }),
          ],
        }),
      ],
    })
  );
}
Ae.defaultProps = {
  movFile: "",
  webmFile: "",
  webpFallbackImage: "",
  pngFallbackImage: "",
};
j(Ae, {
  movFile: {
    type: m.File,
    title: "MP4",
    allowedFileTypes: ["mp4"],
    defaultValue: "",
  },
  webmFile: {
    type: m.File,
    title: "WEBM",
    allowedFileTypes: ["webm"],
    defaultValue: "",
  },
  webpFallbackImage: {
    type: m.File,
    title: "WEBP Fallback",
    allowedFileTypes: ["webp"],
    defaultValue: "",
  },
  pngFallbackImage: {
    type: m.File,
    title: "PNG Fallback",
    allowedFileTypes: ["png"],
    defaultValue: "",
  },
});
var pt,
  oa = (t) => (
    pt ||
      (pt = t.forwardRef(function ({ title: n, titleId: i, ...f }, s) {
        return t.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              "aria-hidden": "true",
              "data-slot": "icon",
              ref: s,
              "aria-labelledby": i,
            },
            f
          ),
          n ? t.createElement("title", { id: i }, n) : null,
          t.createElement("path", {
            d: "M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z",
          }),
          t.createElement("path", {
            d: "m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z",
          })
        );
      })),
    pt
  );
var ut = [
    "AcademicCap",
    "AdjustmentsVertical",
    "ArchiveBox",
    "ArchiveBoxArrowDown",
    "ArchiveBoxXMark",
    "ArrowDown",
    "ArrowDownCircle",
    "ArrowDownLeft",
    "ArrowDownOnSquare",
    "ArrowDownRight",
    "ArrowDownTray",
    "ArrowLeft",
    "ArrowLeftCircle",
    "ArrowLeftOnRectangle",
    "ArrowLongDown",
    "ArrowLongLeft",
    "ArrowLongRight",
    "ArrowLongUp",
    "ArrowPath",
    "ArrowRight",
    "ArrowRightCircle",
    "ArrowSmallDown",
    "ArrowSmallLeft",
    "ArrowSmallRight",
    "ArrowSmallUp",
    "ArrowTrendingDown",
    "ArrowTrendingUp",
    "ArrowUp",
    "ArrowUpCircle",
    "ArrowUpLeft",
    "ArrowUpOnSquare",
    "ArrowUpOnSquareStack",
    "ArrowUpRight",
    "ArrowUpTray",
    "ArrowUturnDown",
    "ArrowUturnLeft",
    "ArrowUturnRight",
    "ArrowUturnUp",
    "ArrowsPointingIn",
    "ArrowsPointingOut",
    "ArrowsRightLeft",
    "ArrowsUpDown",
    "AtSymbol",
    "Backspace",
    "Backward",
    "Banknotes",
    "Bars2",
    "Bars3",
    "Bars3BottomLeft",
    "Bars3BottomRight",
    "Bars3CenterLeft",
    "Bars4",
    "BarsArrowDown",
    "BarsArrowUp",
    "Battery0",
    "Battery100",
    "Battery50",
    "Beaker",
    "Bell",
    "BellAlert",
    "BellSlash",
    "BellSnooze",
    "Bolt",
    "BoltSlash",
    "BookOpen",
    "Bookmark",
    "BookmarkSlash",
    "BookmarkSquare",
    "Briefcase",
    "BugAnt",
    "BuildingLibrary",
    "BuildingOffice",
    "BuildingOffice2",
    "BuildingStorefront",
    "Cake",
    "Calculator",
    "Calendar",
    "CalendarDays",
    "Camera",
    "ChartBar",
    "ChartBarSquare",
    "ChartPie",
    "ChatBubbleLeft",
    "ChatBubbleLeftRight",
    "ChatBubbleOvalLeft",
    "Check",
    "CheckBadge",
    "CheckCircle",
    "ChevronDoubleDown",
    "ChevronDoubleLeft",
    "ChevronDoubleRight",
    "ChevronDoubleUp",
    "ChevronDown",
    "ChevronLeft",
    "ChevronRight",
    "ChevronUp",
    "ChevronUpDown",
    "CircleStack",
    "Clipboard",
    "ClipboardDocument",
    "Clock",
    "Cloud",
    "CloudArrowDown",
    "CloudArrowUp",
    "CodeBracket",
    "CodeBracketSquare",
    "Cog",
    "Cog6Tooth",
    "Cog8Tooth",
    "CommandLine",
    "ComputerDesktop",
    "CpuChip",
    "CreditCard",
    "Cube",
    "CubeTransparent",
    "CurrencyBangladeshi",
    "CurrencyDollar",
    "CurrencyEuro",
    "CurrencyPound",
    "CurrencyRupee",
    "CurrencyYen",
    "CursorArrowRays",
    "CursorArrowRipple",
    "DevicePhoneMobile",
    "DeviceTablet",
    "Document",
    "DocumentArrowDown",
    "DocumentArrowUp",
    "DocumentChartBar",
    "DocumentCheck",
    "DocumentDuplicate",
    "DocumentMinus",
    "DocumentPlus",
    "DocumentText",
    "EllipsisHorizontal",
    "EllipsisVertical",
    "Envelope",
    "EnvelopeOpen",
    "ExclamationCircle",
    "ExclamationTriangle",
    "Eye",
    "EyeDropper",
    "EyeSlash",
    "FaceFrown",
    "FaceSmile",
    "Film",
    "FingerPrint",
    "Fire",
    "Flag",
    "Folder",
    "FolderArrowDown",
    "FolderMinus",
    "FolderOpen",
    "FolderPlus",
    "Forward",
    "Funnel",
    "Gif",
    "Gift",
    "GiftTop",
    "GlobeAlt",
    "GlobeAmericas",
    "GlobeAsiaAustralia",
    "GlobeEuropeAfrica",
    "HandRaised",
    "HandThumbDown",
    "HandThumbUp",
    "Hashtag",
    "Heart",
    "Home",
    "HomeModern",
    "Identification",
    "Inbox",
    "InboxArrowDown",
    "InboxStack",
    "InformationCircle",
    "Key",
    "Language",
    "Lifebuoy",
    "LightBulb",
    "Link",
    "ListBullet",
    "LockClosed",
    "LockOpen",
    "MagnifyingGlass",
    "MagnifyingGlassMinus",
    "MagnifyingGlassPlus",
    "Map",
    "MapPin",
    "Megaphone",
    "Microphone",
    "Minus",
    "MinusCircle",
    "MinusSmall",
    "Moon",
    "MusicalNote",
    "Newspaper",
    "NoSymbol",
    "PaintBrush",
    "PaperAirplane",
    "PaperClip",
    "Pause",
    "PauseCircle",
    "Pencil",
    "PencilSquare",
    "Phone",
    "PhoneArrowDownLeft",
    "PhoneArrowUpRight",
    "PhoneXMark",
    "Photo",
    "Play",
    "PlayCircle",
    "PlayPause",
    "Plus",
    "PlusCircle",
    "PlusSmall",
    "Power",
    "PresentationChartBar",
    "Printer",
    "PuzzlePiece",
    "QrCode",
    "QuestionMarkCircle",
    "QueueList",
    "Radio",
    "ReceiptPercent",
    "ReceiptRefund",
    "RectangleGroup",
    "RectangleStack",
    "RocketLaunch",
    "Rss",
    "Scale",
    "Scissors",
    "Server",
    "ServerStack",
    "Share",
    "ShieldCheck",
    "ShieldExclamation",
    "ShoppingBag",
    "ShoppingCart",
    "Signal",
    "SignalSlash",
    "Sparkles",
    "SpeakerWave",
    "SpeakerXMark",
    "Square2Stack",
    "Square3Stack3D",
    "Squares2X2",
    "SquaresPlus",
    "Star",
    "Stop",
    "StopCircle",
    "Sun",
    "Swatch",
    "TableCells",
    "Tag",
    "Ticket",
    "Trash",
    "Trophy",
    "Truck",
    "Tv",
    "User",
    "UserCircle",
    "UserGroup",
    "UserMinus",
    "UserPlus",
    "Users",
    "Variable",
    "VideoCamera",
    "VideoCameraSlash",
    "ViewColumns",
    "ViewfinderCircle",
    "Wallet",
    "Wifi",
    "Window",
    "Wrench",
    "WrenchScrewdriver",
    "XCircle",
    "XMark",
    "index",
  ],
  En = "https://framer.com/m/hero-icons/",
  Hn = ut.reduce((t, a) => ((t[a.toLowerCase()] = a), t), {});
function Ce(t) {
  let {
      color: a,
      selectByList: o,
      iconSearch: n,
      iconSelection: i,
      onClick: f,
      onMouseDown: s,
      onMouseUp: d,
      onMouseEnter: p,
      onMouseLeave: l,
      mirrored: g,
    } = t,
    u = N(!1),
    x = $e(ut, o, n, i, Hn),
    [y, k] = xe(x === "Home" ? oa(ne) : null);
  async function L() {
    try {
      let C = await import(`${En}${x}.js@0.0.28`);
      u.current && k(C.default(ne));
    } catch {
      u.current && k(null);
    }
  }
  ce(
    () => (
      (u.current = !0),
      L(),
      () => {
        u.current = !1;
      }
    ),
    [x]
  );
  let M = ve.current() === ve.canvas ? r(Ze, {}) : null;
  return r(c.div, {
    style: { display: "contents" },
    onClick: f,
    onMouseEnter: p,
    onMouseLeave: l,
    onMouseDown: s,
    onMouseUp: d,
    children: y
      ? r(y, {
          style: {
            width: "100%",
            height: "100%",
            transform: g ? "scale(-1, 1)" : void 0,
          },
          color: a,
        })
      : M,
  });
}
Ce.displayName = "Hero";
Ce.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "Home",
  iconSearch: "Home",
  color: "#66F",
  selectByList: !0,
  mirrored: !1,
};
j(Ce, {
  selectByList: {
    type: m.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: Ce.defaultProps.selectByList,
  },
  iconSelection: {
    type: m.Enum,
    options: ut,
    defaultValue: Ce.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: t }) => !t,
    description:
      "Find every icon name on the [Hero site](https://heroicons.com/)",
  },
  iconSearch: {
    type: m.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: t }) => t,
  },
  mirrored: {
    type: m.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: Ce.defaultProps.mirrored,
  },
  color: { type: m.Color, title: "Color", defaultValue: Ce.defaultProps.color },
  ...Qe,
});
var Gn = O(Ce),
  Ar = ze(Ce),
  qn = ["ZojWloZhk", "x6KOtXpCF"],
  Un = "framer-39Ta2",
  Yn = { x6KOtXpCF: "framer-v-1qzclyd", ZojWloZhk: "framer-v-13iw8e7" };
function Xn(t, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, t[n])), o;
}
var Jn = { damping: 25, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Zn = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  Qn = c.create(h),
  $n = { "Variant 1": "ZojWloZhk", "Variant 2": "x6KOtXpCF" },
  eo = ({
    accentColor: t,
    explainerTitle: a,
    height: o,
    icon: n,
    id: i,
    width: f,
    ...s
  }) => {
    var d, p, l, g, u;
    return {
      ...s,
      MncVo8KO0:
        (d = n ?? s.MncVo8KO0) !== null && d !== void 0 ? d : "AcademicCap",
      p8ciatZS0:
        (p = a ?? s.p8ciatZS0) !== null && p !== void 0
          ? p
          : "Deposit Any Asset",
      usqI_pxdu:
        (l = t ?? s.usqI_pxdu) !== null && l !== void 0
          ? l
          : "rgb(194, 194, 194)",
      variant:
        (u = (g = $n[s.variant]) !== null && g !== void 0 ? g : s.variant) !==
          null && u !== void 0
          ? u
          : "ZojWloZhk",
    };
  },
  ro = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  to = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      {
        style: i,
        className: f,
        layoutId: s,
        variant: d,
        usqI_pxdu: p,
        p8ciatZS0: l,
        MncVo8KO0: g,
        ...u
      } = eo(t),
      {
        baseVariant: x,
        classNames: y,
        clearLoadingGesture: k,
        gestureHandlers: L,
        gestureVariant: S,
        isLoading: M,
        setGestureState: v,
        setVariant: C,
        variants: w,
      } = te({
        cycleOrder: qn,
        defaultVariant: "ZojWloZhk",
        variant: d,
        variantClassNames: Yn,
      }),
      F = ro(t, w),
      e = N(null),
      T = () => x !== "x6KOtXpCF",
      K = () => x === "x6KOtXpCF",
      W = X(),
      R = [],
      q = re();
    return r(z, {
      id: s ?? W,
      children: r(Qn, {
        animate: w,
        initial: !1,
        children: r(Zn, {
          value: Jn,
          children: b(c.div, {
            ...u,
            ...L,
            className: Y(Un, ...R, "framer-13iw8e7", f, y),
            "data-framer-name": "Variant 1",
            layoutDependency: F,
            layoutId: "ZojWloZhk",
            ref: a ?? e,
            style: {
              backgroundColor:
                "var(--token-ddb33851-f942-4c00-a71e-63a2f30228e6, rgb(5, 5, 6))",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              ...i,
            },
            ...Xn({ x6KOtXpCF: { "data-framer-name": "Variant 2" } }, x, S),
            children: [
              T() &&
                r(P, {
                  children: r(c.div, {
                    className: "framer-1caans9-container",
                    layoutDependency: F,
                    layoutId: "KgILTZ1HP-container",
                    children: r(Ce, {
                      color: p,
                      height: "100%",
                      iconSearch: "Home",
                      iconSelection: g,
                      id: "KgILTZ1HP",
                      layoutId: "KgILTZ1HP",
                      mirrored: !1,
                      selectByList: !0,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
              K() &&
                r(P, {
                  children: r(c.div, {
                    className: "framer-1iv5age-container",
                    layoutDependency: F,
                    layoutId: "SKWGdsjgv-container",
                    children: r(Ce, {
                      color: p,
                      height: "100%",
                      iconSearch: "Home",
                      iconSelection: "ArrowRight",
                      id: "SKWGdsjgv",
                      layoutId: "SKWGdsjgv",
                      mirrored: !1,
                      selectByList: !0,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
              r(V, {
                __fromCanvasComponent: !0,
                children: r(h, {
                  children: r(c.h2, {
                    style: {
                      "--font-selector": "R0Y7V29yayBTYW5zLTYwMA==",
                      "--framer-font-family":
                        '"Work Sans", "Work Sans Placeholder", sans-serif',
                      "--framer-font-weight": "600",
                      "--framer-letter-spacing": "-0.8px",
                      "--framer-line-height": "1.5em",
                      "--framer-text-alignment": "center",
                      "--framer-text-color":
                        "var(--extracted-1of0zx5, var(--variable-reference-usqI_pxdu-XRH92TZ81))",
                    },
                    children: "Deposit Any Asset",
                  }),
                }),
                className: "framer-1lws2br",
                fonts: ["GF;Work Sans-600"],
                layoutDependency: F,
                layoutId: "lYhQDaPbU",
                style: {
                  "--extracted-1of0zx5":
                    "var(--variable-reference-usqI_pxdu-XRH92TZ81)",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                  "--framer-paragraph-spacing": "0px",
                  "--variable-reference-usqI_pxdu-XRH92TZ81": p,
                },
                text: l,
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
            ],
          }),
        }),
      }),
    });
  }),
  ao = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-39Ta2.framer-1ueld5e, .framer-39Ta2 .framer-1ueld5e { display: block; }",
    ".framer-39Ta2.framer-13iw8e7 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 5px 20px 5px 15px; position: relative; width: min-content; }",
    ".framer-39Ta2 .framer-1caans9-container, .framer-39Ta2 .framer-1iv5age-container { flex: none; height: 24px; position: relative; width: 24px; }",
    ".framer-39Ta2 .framer-1lws2br { -webkit-user-select: none; flex: none; height: auto; overflow: visible; position: relative; user-select: none; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-39Ta2.framer-13iw8e7 { gap: 0px; } .framer-39Ta2.framer-13iw8e7 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-39Ta2.framer-13iw8e7 > :first-child { margin-left: 0px; } .framer-39Ta2.framer-13iw8e7 > :last-child { margin-right: 0px; } }",
    ".framer-39Ta2.framer-v-1qzclyd.framer-13iw8e7 { padding: 5px 15px 5px 20px; }",
    ".framer-39Ta2.framer-v-1qzclyd .framer-1iv5age-container { order: 2; }",
    ".framer-39Ta2.framer-v-1qzclyd .framer-1lws2br { order: 1; }",
  ],
  ir = Z(to, ao, "framer-39Ta2"),
  Rr = ir;
ir.displayName = "Animated Button";
ir.defaultProps = { height: 40, width: 197 };
j(ir, {
  variant: {
    options: ["ZojWloZhk", "x6KOtXpCF"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: m.Enum,
  },
  usqI_pxdu: {
    defaultValue: "rgb(194, 194, 194)",
    title: "Accent Color",
    type: m.Color,
  },
  p8ciatZS0: {
    defaultValue: "Deposit Any Asset",
    displayTextArea: !1,
    title: "Explainer Title",
    type: m.String,
  },
  MncVo8KO0: Ar?.iconSelection && {
    ...Ar.iconSelection,
    defaultValue: "AcademicCap",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
});
Q(
  ir,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQNi0Dp6_cOyA.woff2",
          weight: "600",
        },
      ],
    },
    ...Gn,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var no = O(Rr),
  oo = O(Ae),
  Ir = ze(Rr),
  _e = ze(Ae),
  io = { ZSZVmz8PY: { hover: !0 } },
  lo = "framer-vhio7",
  so = { ZSZVmz8PY: "framer-v-12fd2tr" };
function ia(t, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, t[n])), o;
}
var co = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  mo = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  fo = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: mo,
  },
  po = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  uo = c.create(h),
  ho = ({
    accentColor: t,
    background: a,
    explainerDescription: o,
    explainerTitle: n,
    height: i,
    icon: f,
    id: s,
    link: d,
    mP4: p,
    wEBM: l,
    width: g,
    ...u
  }) => {
    var x, y, k, L, S;
    return {
      ...u,
      aa8umYql3: p ?? u.aa8umYql3,
      Azw99DJXD: d ?? u.Azw99DJXD,
      bATS1N0ME:
        (x = n ?? u.bATS1N0ME) !== null && x !== void 0
          ? x
          : "Optimize and Rebalance",
      HZSFmPgtP:
        (y = f ?? u.HZSFmPgtP) !== null && y !== void 0 ? y : "AcademicCap",
      kLWZXAKEN:
        (k = t ?? u.kLWZXAKEN) !== null && k !== void 0
          ? k
          : "rgb(194, 194, 194)",
      MmzxXOXWw: l ?? u.MmzxXOXWw,
      RNxPvt45N:
        (L = o ?? u.RNxPvt45N) !== null && L !== void 0
          ? L
          : "Sheep Zap converts any major crypto into the vault's base currency for seamless staking.",
      SlsCzV7yO:
        (S = a ?? u.SlsCzV7yO) !== null && S !== void 0
          ? S
          : "rgba(247, 247, 247, 0.4)",
    };
  },
  go = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  xo = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      {
        style: i,
        className: f,
        layoutId: s,
        variant: d,
        bATS1N0ME: p,
        RNxPvt45N: l,
        SlsCzV7yO: g,
        kLWZXAKEN: u,
        HZSFmPgtP: x,
        Azw99DJXD: y,
        aa8umYql3: k,
        MmzxXOXWw: L,
        ...S
      } = ho(t),
      {
        baseVariant: M,
        classNames: v,
        clearLoadingGesture: C,
        gestureHandlers: w,
        gestureVariant: F,
        isLoading: e,
        setGestureState: T,
        setVariant: K,
        variants: W,
      } = te({
        defaultVariant: "ZSZVmz8PY",
        enabledGestures: io,
        variant: d,
        variantClassNames: so,
      }),
      R = go(t, W),
      q = N(null),
      le = X(),
      me = [],
      se = re();
    return r(z, {
      id: s ?? le,
      children: r(uo, {
        animate: W,
        initial: !1,
        children: r(po, {
          value: co,
          children: b(c.div, {
            ...S,
            ...w,
            className: Y(lo, ...me, "framer-12fd2tr", f, v),
            "data-framer-name": "Variant 1",
            layoutDependency: R,
            layoutId: "ZSZVmz8PY",
            ref: a ?? q,
            style: {
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              ...i,
            },
            ...ia({ "ZSZVmz8PY-hover": { "data-framer-name": void 0 } }, M, F),
            children: [
              r(V, {
                __fromCanvasComponent: !0,
                children: r(h, {
                  children: r(c.h3, {
                    style: {
                      "--font-selector": "R0Y7SW50ZXItNTAw",
                      "--framer-font-family":
                        '"Inter", "Inter Placeholder", sans-serif',
                      "--framer-font-size": "18px",
                      "--framer-font-weight": "500",
                      "--framer-letter-spacing": "-0.5px",
                      "--framer-line-height": "1.4em",
                      "--framer-text-alignment": "left",
                      "--framer-text-color":
                        "var(--extracted-a0htzi, var(--variable-reference-kLWZXAKEN-gWYmdNar4))",
                    },
                    children:
                      "Sheep Zap converts any major crypto into the vault's base currency for seamless staking.",
                  }),
                }),
                className: "framer-1qcsii1",
                fonts: ["GF;Inter-500"],
                layoutDependency: R,
                layoutId: "vlcNhR2ae",
                style: {
                  "--extracted-a0htzi":
                    "var(--variable-reference-kLWZXAKEN-gWYmdNar4)",
                  "--framer-paragraph-spacing": "0px",
                  "--variable-reference-kLWZXAKEN-gWYmdNar4": u,
                },
                text: l,
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
              r(de, {
                href: y,
                openInNewTab: !0,
                children: r(c.a, {
                  className: "framer-quc84z framer-sy9g2u",
                  "data-framer-name": "Fill",
                  layoutDependency: R,
                  layoutId: "sdrn94798",
                  style: {
                    backgroundColor: g,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                  },
                }),
              }),
              r(P, {
                height: 40,
                y: (se?.y || 0) + 20,
                children: r(c.div, {
                  className: "framer-1ykqvbw-container",
                  layoutDependency: R,
                  layoutId: "YYQPqD9BK-container",
                  whileHover: fo,
                  children: r(Rr, {
                    height: "100%",
                    id: "YYQPqD9BK",
                    layoutId: "YYQPqD9BK",
                    MncVo8KO0: x,
                    p8ciatZS0: p,
                    style: { height: "100%" },
                    usqI_pxdu: u,
                    variant: "ZojWloZhk",
                    width: "100%",
                    ...ia(
                      { "ZSZVmz8PY-hover": { variant: "x6KOtXpCF" } },
                      M,
                      F
                    ),
                  }),
                }),
              }),
              r(P, {
                children: r(c.div, {
                  className: "framer-gq4eop-container",
                  layoutDependency: R,
                  layoutId: "afL8_O4EE-container",
                  children: r(Ae, {
                    height: "100%",
                    id: "afL8_O4EE",
                    layoutId: "afL8_O4EE",
                    movFile: k,
                    style: { height: "100%", width: "100%" },
                    webmFile: L,
                    width: "100%",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  yo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-vhio7.framer-sy9g2u, .framer-vhio7 .framer-sy9g2u { display: block; }",
    ".framer-vhio7.framer-12fd2tr { cursor: pointer; height: 400px; overflow: visible; position: relative; width: 300px; }",
    ".framer-vhio7 .framer-1qcsii1 { flex: none; height: auto; left: 30px; overflow: visible; position: absolute; right: 30px; top: 80px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; z-index: 2; }",
    ".framer-vhio7 .framer-quc84z { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; text-decoration: none; top: 0px; z-index: -1; }",
    ".framer-vhio7 .framer-1ykqvbw-container { flex: none; height: 40px; left: 30px; position: absolute; top: 20px; width: auto; z-index: 2; }",
    ".framer-vhio7 .framer-gq4eop-container { bottom: 0px; flex: none; height: 250px; left: calc(50.00000000000002% - 250px / 2); position: absolute; width: 250px; }",
  ],
  lr = Z(xo, yo, "framer-vhio7"),
  sr = lr;
lr.displayName = "Protocol Explainer";
lr.defaultProps = { height: 400, width: 300 };
j(lr, {
  bATS1N0ME: {
    defaultValue: "Optimize and Rebalance",
    displayTextArea: !1,
    title: "Explainer Title",
    type: m.String,
  },
  RNxPvt45N: {
    defaultValue:
      "Sheep Zap converts any major crypto into the vault's base currency for seamless staking.",
    displayTextArea: !1,
    title: "Explainer Description",
    type: m.String,
  },
  SlsCzV7yO: {
    defaultValue: "rgba(247, 247, 247, 0.4)",
    title: "Background",
    type: m.Color,
  },
  kLWZXAKEN: {
    defaultValue: "rgb(194, 194, 194)",
    title: "Accent Color",
    type: m.Color,
  },
  HZSFmPgtP: Ir?.MncVo8KO0 && {
    ...Ir.MncVo8KO0,
    defaultValue: "AcademicCap",
    description: void 0,
    hidden: void 0,
    title: "Icon",
  },
  Azw99DJXD: { title: "Link", type: m.Link },
  aa8umYql3: _e?.movFile && {
    ..._e.movFile,
    __defaultAssetReference: "",
    description: void 0,
    hidden: void 0,
    title: "MP4",
  },
  MmzxXOXWw: _e?.webmFile && {
    ..._e.webmFile,
    __defaultAssetReference: "",
    description: void 0,
    hidden: void 0,
    title: "WEBM",
  },
});
Q(
  lr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2",
          weight: "500",
        },
      ],
    },
    ...no,
    ...oo,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ht,
  la = (t) => {
    if (!ht) {
      let a = new Map([
          [
            "bold",
            t.createElement(
              t.Fragment,
              null,
              t.createElement("path", {
                d: "M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V164h24v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H164V160a20,20,0,0,0-20-20H112a20,20,0,0,0-20,20v44H52V117.28l76-71.75,76,71.75Z",
              })
            ),
          ],
          [
            "duotone",
            t.createElement(
              t.Fragment,
              null,
              t.createElement("path", {
                d: "M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z",
                opacity: "0.2",
              }),
              t.createElement("path", {
                d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z",
              })
            ),
          ],
          [
            "fill",
            t.createElement(
              t.Fragment,
              null,
              t.createElement("path", {
                d: "M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z",
              })
            ),
          ],
          [
            "light",
            t.createElement(
              t.Fragment,
              null,
              t.createElement("path", {
                d: "M217.47,105.24l-80-75.5-.09-.08a13.94,13.94,0,0,0-18.83,0l-.09.08-80,75.5A14,14,0,0,0,34,115.55V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V160a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V115.55A14,14,0,0,0,217.47,105.24ZM210,208a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V160a14,14,0,0,0-14-14H112a14,14,0,0,0-14,14v48a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V115.55a2,2,0,0,1,.65-1.48l.09-.08,79.94-75.48a2,2,0,0,1,2.63,0L209.26,114l.08.08a2,2,0,0,1,.66,1.48Z",
              })
            ),
          ],
          [
            "regular",
            t.createElement(
              t.Fragment,
              null,
              t.createElement("path", {
                d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z",
              })
            ),
          ],
          [
            "thin",
            t.createElement(
              t.Fragment,
              null,
              t.createElement("path", {
                d: "M216.13,106.72,136.07,31.13a12,12,0,0,0-16.2.05L39.93,106.67A12,12,0,0,0,36,115.54V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V160a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V115.54A12,12,0,0,0,216.13,106.72ZM212,208a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V160a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12v48a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V115.54a4.09,4.09,0,0,1,1.36-3L125.3,37.05a4,4,0,0,1,5.33,0l80.06,75.58a4,4,0,0,1,1.31,3Z",
              })
            ),
          ],
        ]),
        o = t.forwardRef((n, i) =>
          t.createElement("g", { ref: i, ...n }, a.get(n.weight))
        );
      (o.displayName = "House"), (ht = o);
    }
    return ht;
  };
var gt = [
    "AddressBook",
    "AirTrafficControl",
    "Airplane",
    "AirplaneInFlight",
    "AirplaneLanding",
    "AirplaneTakeoff",
    "AirplaneTilt",
    "Airplay",
    "Alarm",
    "Alien",
    "AlignBottom",
    "AlignBottomSimple",
    "AlignCenterVertical",
    "AlignLeft",
    "AlignLeftSimple",
    "AlignRight",
    "AlignRightSimple",
    "AlignTop",
    "AlignTopSimple",
    "AmazonLogo",
    "Anchor",
    "AnchorSimple",
    "AndroidLogo",
    "AngularLogo",
    "Aperture",
    "AppStoreLogo",
    "AppWindow",
    "AppleLogo",
    "ApplePodcastsLogo",
    "Archive",
    "ArchiveBox",
    "ArchiveTray",
    "Armchair",
    "ArrowArcLeft",
    "ArrowArcRight",
    "ArrowBendDownLeft",
    "ArrowBendDownRight",
    "ArrowBendLeftDown",
    "ArrowBendLeftUp",
    "ArrowBendRightDown",
    "ArrowBendRightUp",
    "ArrowBendUpLeft",
    "ArrowBendUpRight",
    "ArrowCircleDown",
    "ArrowCircleDownLeft",
    "ArrowCircleDownRight",
    "ArrowCircleLeft",
    "ArrowCircleRight",
    "ArrowCircleUp",
    "ArrowCircleUpLeft",
    "ArrowCircleUpRight",
    "ArrowClockwise",
    "ArrowDown",
    "ArrowDownLeft",
    "ArrowDownRight",
    "ArrowElbowDownLeft",
    "ArrowElbowDownRight",
    "ArrowElbowLeft",
    "ArrowElbowLeftDown",
    "ArrowElbowLeftUp",
    "ArrowElbowRight",
    "ArrowElbowRightDown",
    "ArrowElbowRightUp",
    "ArrowElbowUpLeft",
    "ArrowElbowUpRight",
    "ArrowFatDown",
    "ArrowFatLeft",
    "ArrowFatLineDown",
    "ArrowFatLineLeft",
    "ArrowFatLineRight",
    "ArrowFatLineUp",
    "ArrowFatLinesDown",
    "ArrowFatLinesLeft",
    "ArrowFatLinesRight",
    "ArrowFatLinesUp",
    "ArrowFatRight",
    "ArrowFatUp",
    "ArrowLeft",
    "ArrowLineDown",
    "ArrowLineDownLeft",
    "ArrowLineDownRight",
    "ArrowLineLeft",
    "ArrowLineRight",
    "ArrowLineUp",
    "ArrowLineUpLeft",
    "ArrowLineUpRight",
    "ArrowRight",
    "ArrowSquareDown",
    "ArrowSquareDownLeft",
    "ArrowSquareDownRight",
    "ArrowSquareIn",
    "ArrowSquareLeft",
    "ArrowSquareOut",
    "ArrowSquareRight",
    "ArrowSquareUp",
    "ArrowSquareUpLeft",
    "ArrowSquareUpRight",
    "ArrowUDownLeft",
    "ArrowUDownRight",
    "ArrowULeftDown",
    "ArrowULeftUp",
    "ArrowURightDown",
    "ArrowURightUp",
    "ArrowUUpLeft",
    "ArrowUUpRight",
    "ArrowUp",
    "ArrowUpLeft",
    "ArrowUpRight",
    "ArrowsClockwise",
    "ArrowsDownUp",
    "ArrowsHorizontal",
    "ArrowsIn",
    "ArrowsInCardinal",
    "ArrowsInLineVertical",
    "ArrowsInSimple",
    "ArrowsLeftRight",
    "ArrowsMerge",
    "ArrowsOut",
    "ArrowsOutCardinal",
    "ArrowsOutSimple",
    "ArrowsSplit",
    "ArrowsVertical",
    "Article",
    "ArticleMedium",
    "ArticleNyTimes",
    "Asterisk",
    "AsteriskSimple",
    "At",
    "Atom",
    "Baby",
    "Backpack",
    "Backspace",
    "Bag",
    "BagSimple",
    "Balloon",
    "Bandaids",
    "Bank",
    "Barbell",
    "Barcode",
    "Barricade",
    "Baseball",
    "BaseballCap",
    "Basket",
    "Basketball",
    "Bathtub",
    "BatteryCharging",
    "BatteryEmpty",
    "BatteryFull",
    "BatteryHigh",
    "BatteryLow",
    "BatteryMedium",
    "BatteryPlus",
    "BatteryPlusVertical",
    "BatteryVerticalEmpty",
    "BatteryVerticalFull",
    "BatteryVerticalHigh",
    "BatteryVerticalLow",
    "BatteryWarning",
    "Bed",
    "BeerBottle",
    "BeerStein",
    "BehanceLogo",
    "Bell",
    "BellRinging",
    "BellSimple",
    "BellSimpleRinging",
    "BellSimpleSlash",
    "BellSimpleZ",
    "BellSlash",
    "BellZ",
    "BezierCurve",
    "Bicycle",
    "Binoculars",
    "Bird",
    "Bluetooth",
    "BluetoothConnected",
    "BluetoothSlash",
    "BluetoothX",
    "Boat",
    "Bone",
    "Book",
    "BookBookmark",
    "BookOpen",
    "BookOpenText",
    "Bookmark",
    "BookmarkSimple",
    "Bookmarks",
    "BookmarksSimple",
    "Books",
    "Boot",
    "BoundingBox",
    "BowlFood",
    "BracketsAngle",
    "BracketsCurly",
    "BracketsRound",
    "BracketsSquare",
    "Brain",
    "Brandy",
    "Bridge",
    "Briefcase",
    "BriefcaseMetal",
    "Broadcast",
    "Broom",
    "Browser",
    "Browsers",
    "Bug",
    "BugBeetle",
    "BugDroid",
    "Buildings",
    "Bus",
    "Butterfly",
    "Cactus",
    "Cake",
    "Calculator",
    "Calendar",
    "CalendarBlank",
    "CalendarCheck",
    "CalendarPlus",
    "CalendarX",
    "CallBell",
    "Camera",
    "CameraPlus",
    "CameraRotate",
    "CameraSlash",
    "Campfire",
    "Car",
    "CarProfile",
    "CarSimple",
    "Cardholder",
    "Cards",
    "CaretCircleDoubleUp",
    "CaretCircleDown",
    "CaretCircleLeft",
    "CaretCircleRight",
    "CaretCircleUp",
    "CaretCircleUpDown",
    "CaretDoubleDown",
    "CaretDoubleLeft",
    "CaretDoubleRight",
    "CaretDoubleUp",
    "CaretDown",
    "CaretLeft",
    "CaretRight",
    "CaretUp",
    "CaretUpDown",
    "Carrot",
    "CassetteTape",
    "CastleTurret",
    "Cat",
    "CellSignalFull",
    "CellSignalHigh",
    "CellSignalLow",
    "CellSignalMedium",
    "CellSignalNone",
    "CellSignalSlash",
    "CellSignalX",
    "Certificate",
    "Chair",
    "Chalkboard",
    "ChalkboardSimple",
    "ChalkboardTeacher",
    "Champagne",
    "ChargingStation",
    "ChartBar",
    "ChartBarHorizontal",
    "ChartDonut",
    "ChartLine",
    "ChartLineDown",
    "ChartLineUp",
    "ChartPie",
    "ChartPieSlice",
    "ChartPolar",
    "ChartScatter",
    "Chat",
    "ChatCentered",
    "ChatCenteredDots",
    "ChatCenteredText",
    "ChatCircle",
    "ChatCircleDots",
    "ChatCircleText",
    "ChatDots",
    "ChatTeardrop",
    "ChatTeardropDots",
    "ChatTeardropText",
    "ChatText",
    "Chats",
    "ChatsCircle",
    "ChatsTeardrop",
    "Check",
    "CheckCircle",
    "CheckFat",
    "CheckSquare",
    "CheckSquareOffset",
    "Checks",
    "Church",
    "Circle",
    "CircleDashed",
    "CircleHalf",
    "CircleHalfTilt",
    "CircleNotch",
    "CirclesFour",
    "CirclesThree",
    "CirclesThreePlus",
    "Circuitry",
    "Clipboard",
    "ClipboardText",
    "Clock",
    "ClockAfternoon",
    "ClockClockwise",
    "ClockCounterClockwise",
    "ClockCountdown",
    "ClosedCaptioning",
    "Cloud",
    "CloudArrowDown",
    "CloudArrowUp",
    "CloudCheck",
    "CloudFog",
    "CloudLightning",
    "CloudMoon",
    "CloudRain",
    "CloudSlash",
    "CloudSnow",
    "CloudSun",
    "CloudWarning",
    "CloudX",
    "Club",
    "CoatHanger",
    "CodaLogo",
    "Code",
    "CodeBlock",
    "CodeSimple",
    "CodepenLogo",
    "CodesandboxLogo",
    "Coffee",
    "Coin",
    "CoinVertical",
    "Coins",
    "Columns",
    "Command",
    "Compass",
    "CompassTool",
    "ComputerTower",
    "Confetti",
    "ContactlessPayment",
    "Control",
    "Cookie",
    "CookingPot",
    "Copy",
    "CopySimple",
    "Copyleft",
    "Copyright",
    "CornersIn",
    "CornersOut",
    "Couch",
    "Cpu",
    "CreditCard",
    "Crop",
    "Cross",
    "Crosshair",
    "CrosshairSimple",
    "Crown",
    "CrownSimple",
    "Cube",
    "CubeFocus",
    "CubeTransparent",
    "CurrencyBtc",
    "CurrencyCircleDollar",
    "CurrencyCny",
    "CurrencyDollar",
    "CurrencyDollarSimple",
    "CurrencyEth",
    "CurrencyEur",
    "CurrencyGbp",
    "CurrencyInr",
    "CurrencyJpy",
    "CurrencyKrw",
    "CurrencyKzt",
    "CurrencyNgn",
    "CurrencyRub",
    "Cursor",
    "CursorClick",
    "CursorText",
    "Cylinder",
    "Database",
    "Desktop",
    "DesktopTower",
    "Detective",
    "DevToLogo",
    "DeviceMobile",
    "DeviceMobileCamera",
    "DeviceMobileSpeaker",
    "DeviceTablet",
    "DeviceTabletCamera",
    "DeviceTabletSpeaker",
    "Devices",
    "Diamond",
    "DiamondsFour",
    "DiceFive",
    "DiceFour",
    "DiceOne",
    "DiceSix",
    "DiceThree",
    "DiceTwo",
    "Disc",
    "DiscordLogo",
    "Divide",
    "Dna",
    "Dog",
    "Door",
    "DoorOpen",
    "Dot",
    "DotOutline",
    "DotsNine",
    "DotsSix",
    "DotsSixVertical",
    "DotsThree",
    "DotsThreeCircle",
    "DotsThreeOutline",
    "DotsThreeVertical",
    "Download",
    "DownloadSimple",
    "Dress",
    "DribbbleLogo",
    "Drop",
    "DropHalf",
    "DropHalfBottom",
    "DropboxLogo",
    "Ear",
    "EarSlash",
    "Egg",
    "EggCrack",
    "Eject",
    "EjectSimple",
    "Elevator",
    "Engine",
    "Envelope",
    "EnvelopeOpen",
    "EnvelopeSimple",
    "EnvelopeSimpleOpen",
    "Equalizer",
    "Equals",
    "Eraser",
    "EscalatorDown",
    "EscalatorUp",
    "Exam",
    "Exclude",
    "ExcludeSquare",
    "Export",
    "Eye",
    "EyeClosed",
    "EyeSlash",
    "Eyedropper",
    "EyedropperSample",
    "Eyeglasses",
    "FaceMask",
    "FacebookLogo",
    "Factory",
    "Faders",
    "FadersHorizontal",
    "Fan",
    "FastForward",
    "FastForwardCircle",
    "Feather",
    "FigmaLogo",
    "File",
    "FileArchive",
    "FileArrowDown",
    "FileArrowUp",
    "FileAudio",
    "FileCloud",
    "FileCode",
    "FileCss",
    "FileCsv",
    "FileDashed",
    "FileDoc",
    "FileHtml",
    "FileImage",
    "FileJpg",
    "FileJs",
    "FileJsx",
    "FileLock",
    "FileMagnifyingGlass",
    "FileMinus",
    "FilePdf",
    "FilePlus",
    "FilePng",
    "FilePpt",
    "FileRs",
    "FileSql",
    "FileSvg",
    "FileText",
    "FileTs",
    "FileTsx",
    "FileVideo",
    "FileVue",
    "FileX",
    "FileXls",
    "FileZip",
    "Files",
    "FilmReel",
    "FilmScript",
    "FilmSlate",
    "FilmStrip",
    "Fingerprint",
    "FingerprintSimple",
    "FinnTheHuman",
    "Fire",
    "FireExtinguisher",
    "FireSimple",
    "FirstAid",
    "FirstAidKit",
    "Fish",
    "FishSimple",
    "Flag",
    "FlagBanner",
    "FlagCheckered",
    "FlagPennant",
    "Flame",
    "Flashlight",
    "Flask",
    "FloppyDisk",
    "FloppyDiskBack",
    "FlowArrow",
    "Flower",
    "FlowerLotus",
    "FlowerTulip",
    "FlyingSaucer",
    "Folder",
    "FolderDashed",
    "FolderLock",
    "FolderMinus",
    "FolderNotch",
    "FolderNotchMinus",
    "FolderNotchOpen",
    "FolderNotchPlus",
    "FolderOpen",
    "FolderPlus",
    "FolderSimple",
    "FolderSimpleDashed",
    "FolderSimpleLock",
    "FolderSimpleMinus",
    "FolderSimplePlus",
    "FolderSimpleStar",
    "FolderSimpleUser",
    "FolderStar",
    "FolderUser",
    "Folders",
    "Football",
    "Footprints",
    "ForkKnife",
    "FrameCorners",
    "FramerLogo",
    "Function",
    "Funnel",
    "FunnelSimple",
    "GameController",
    "Garage",
    "GasCan",
    "GasPump",
    "Gauge",
    "Gavel",
    "Gear",
    "GearFine",
    "GearSix",
    "GenderFemale",
    "GenderIntersex",
    "GenderMale",
    "GenderNeuter",
    "GenderNonbinary",
    "GenderTransgender",
    "Ghost",
    "Gif",
    "Gift",
    "GitBranch",
    "GitCommit",
    "GitDiff",
    "GitFork",
    "GitMerge",
    "GitPullRequest",
    "GithubLogo",
    "GitlabLogo",
    "GitlabLogoSimple",
    "Globe",
    "GlobeHemisphereEast",
    "GlobeHemisphereWest",
    "GlobeSimple",
    "GlobeStand",
    "Goggles",
    "GoodreadsLogo",
    "GoogleCardboardLogo",
    "GoogleChromeLogo",
    "GoogleDriveLogo",
    "GoogleLogo",
    "GooglePhotosLogo",
    "GooglePlayLogo",
    "GooglePodcastsLogo",
    "Gradient",
    "GraduationCap",
    "Grains",
    "GrainsSlash",
    "Graph",
    "GridFour",
    "GridNine",
    "Guitar",
    "Hamburger",
    "Hammer",
    "Hand",
    "HandCoins",
    "HandEye",
    "HandFist",
    "HandGrabbing",
    "HandHeart",
    "HandPalm",
    "HandPointing",
    "HandSoap",
    "HandSwipeLeft",
    "HandSwipeRight",
    "HandTap",
    "HandWaving",
    "Handbag",
    "HandbagSimple",
    "HandsClapping",
    "HandsPraying",
    "Handshake",
    "HardDrive",
    "HardDrives",
    "Hash",
    "HashStraight",
    "Headlights",
    "Headphones",
    "Headset",
    "Heart",
    "HeartBreak",
    "HeartHalf",
    "HeartStraight",
    "HeartStraightBreak",
    "Heartbeat",
    "Hexagon",
    "HighHeel",
    "HighlighterCircle",
    "Hoodie",
    "Horse",
    "Hourglass",
    "HourglassHigh",
    "HourglassLow",
    "HourglassMedium",
    "HourglassSimple",
    "HourglassSimpleHigh",
    "HourglassSimpleLow",
    "House",
    "HouseLine",
    "HouseSimple",
    "IceCream",
    "IdentificationBadge",
    "IdentificationCard",
    "Image",
    "ImageSquare",
    "Images",
    "ImagesSquare",
    "Infinity",
    "Info",
    "InstagramLogo",
    "Intersect",
    "IntersectSquare",
    "IntersectThree",
    "Jeep",
    "Kanban",
    "Key",
    "KeyReturn",
    "Keyboard",
    "Keyhole",
    "Knife",
    "Ladder",
    "LadderSimple",
    "Lamp",
    "Laptop",
    "Layout",
    "Leaf",
    "Lifebuoy",
    "Lightbulb",
    "LightbulbFilament",
    "Lighthouse",
    "Lightning",
    "LightningA",
    "LightningSlash",
    "LineSegment",
    "LineSegments",
    "Link",
    "LinkBreak",
    "LinkSimple",
    "LinkSimpleBreak",
    "LinkSimpleHorizontal",
    "LinkedinLogo",
    "LinuxLogo",
    "List",
    "ListBullets",
    "ListChecks",
    "ListDashes",
    "ListMagnifyingGlass",
    "ListNumbers",
    "ListPlus",
    "Lock",
    "LockKey",
    "LockKeyOpen",
    "LockLaminated",
    "LockLaminatedOpen",
    "LockOpen",
    "LockSimple",
    "LockSimpleOpen",
    "Lockers",
    "MagicWand",
    "Magnet",
    "MagnetStraight",
    "MagnifyingGlass",
    "MagnifyingGlassMinus",
    "MagnifyingGlassPlus",
    "MapPin",
    "MapPinLine",
    "MapTrifold",
    "MarkerCircle",
    "Martini",
    "MaskHappy",
    "MaskSad",
    "MathOperations",
    "Medal",
    "MedalMilitary",
    "MediumLogo",
    "Megaphone",
    "MegaphoneSimple",
    "MessengerLogo",
    "MetaLogo",
    "Metronome",
    "Microphone",
    "MicrophoneSlash",
    "MicrophoneStage",
    "MicrosoftExcelLogo",
    "MicrosoftOutlookLogo",
    "MicrosoftTeamsLogo",
    "MicrosoftWordLogo",
    "Minus",
    "MinusCircle",
    "MinusSquare",
    "Money",
    "Monitor",
    "MonitorPlay",
    "Moon",
    "MoonStars",
    "Moped",
    "MopedFront",
    "Mosque",
    "Motorcycle",
    "Mountains",
    "Mouse",
    "MouseSimple",
    "MusicNote",
    "MusicNoteSimple",
    "MusicNotes",
    "MusicNotesPlus",
    "MusicNotesSimple",
    "NavigationArrow",
    "Needle",
    "Newspaper",
    "NewspaperClipping",
    "Notches",
    "Note",
    "NoteBlank",
    "NotePencil",
    "Notebook",
    "Notepad",
    "Notification",
    "NotionLogo",
    "NumberCircleEight",
    "NumberCircleFive",
    "NumberCircleFour",
    "NumberCircleNine",
    "NumberCircleOne",
    "NumberCircleSeven",
    "NumberCircleSix",
    "NumberCircleThree",
    "NumberCircleTwo",
    "NumberCircleZero",
    "NumberEight",
    "NumberFive",
    "NumberFour",
    "NumberNine",
    "NumberOne",
    "NumberSeven",
    "NumberSix",
    "NumberSquareEight",
    "NumberSquareFive",
    "NumberSquareFour",
    "NumberSquareNine",
    "NumberSquareOne",
    "NumberSquareSeven",
    "NumberSquareSix",
    "NumberSquareThree",
    "NumberSquareTwo",
    "NumberSquareZero",
    "NumberThree",
    "NumberTwo",
    "NumberZero",
    "Nut",
    "NyTimesLogo",
    "Octagon",
    "OfficeChair",
    "Option",
    "OrangeSlice",
    "Package",
    "PaintBrush",
    "PaintBrushBroad",
    "PaintBrushHousehold",
    "PaintBucket",
    "PaintRoller",
    "Palette",
    "Pants",
    "PaperPlane",
    "PaperPlaneRight",
    "PaperPlaneTilt",
    "Paperclip",
    "PaperclipHorizontal",
    "Parachute",
    "Paragraph",
    "Parallelogram",
    "Park",
    "Password",
    "Path",
    "PatreonLogo",
    "Pause",
    "PauseCircle",
    "PawPrint",
    "PaypalLogo",
    "Peace",
    "Pen",
    "PenNib",
    "PenNibStraight",
    "Pencil",
    "PencilCircle",
    "PencilLine",
    "PencilSimple",
    "PencilSimpleLine",
    "PencilSimpleSlash",
    "PencilSlash",
    "Pentagram",
    "Pepper",
    "Percent",
    "Person",
    "PersonArmsSpread",
    "PersonSimple",
    "PersonSimpleBike",
    "PersonSimpleRun",
    "PersonSimpleThrow",
    "PersonSimpleWalk",
    "Perspective",
    "Phone",
    "PhoneCall",
    "PhoneDisconnect",
    "PhoneIncoming",
    "PhoneOutgoing",
    "PhonePlus",
    "PhoneSlash",
    "PhoneX",
    "PhosphorLogo",
    "Pi",
    "PianoKeys",
    "PictureInPicture",
    "PiggyBank",
    "Pill",
    "PinterestLogo",
    "Pinwheel",
    "Pizza",
    "Placeholder",
    "Planet",
    "Plant",
    "Play",
    "PlayCircle",
    "PlayPause",
    "Playlist",
    "Plug",
    "PlugCharging",
    "Plugs",
    "PlugsConnected",
    "Plus",
    "PlusCircle",
    "PlusMinus",
    "PlusSquare",
    "PokerChip",
    "PoliceCar",
    "Polygon",
    "Popcorn",
    "PottedPlant",
    "Power",
    "Prescription",
    "Presentation",
    "PresentationChart",
    "Printer",
    "Prohibit",
    "ProhibitInset",
    "ProjectorScreen",
    "ProjectorScreenChart",
    "Pulse",
    "PushPin",
    "PushPinSimple",
    "PushPinSimpleSlash",
    "PushPinSlash",
    "PuzzlePiece",
    "QrCode",
    "Question",
    "Queue",
    "Quotes",
    "Radical",
    "Radio",
    "RadioButton",
    "Radioactive",
    "Rainbow",
    "RainbowCloud",
    "ReadCvLogo",
    "Receipt",
    "ReceiptX",
    "Record",
    "Rectangle",
    "Recycle",
    "RedditLogo",
    "Repeat",
    "RepeatOnce",
    "Rewind",
    "RewindCircle",
    "RoadHorizon",
    "Robot",
    "Rocket",
    "RocketLaunch",
    "Rows",
    "Rss",
    "RssSimple",
    "Rug",
    "Ruler",
    "Scales",
    "Scan",
    "Scissors",
    "Scooter",
    "Screencast",
    "ScribbleLoop",
    "Scroll",
    "Seal",
    "SealCheck",
    "SealQuestion",
    "SealWarning",
    "Selection",
    "SelectionAll",
    "SelectionBackground",
    "SelectionForeground",
    "SelectionInverse",
    "SelectionPlus",
    "SelectionSlash",
    "Shapes",
    "Share",
    "ShareFat",
    "ShareNetwork",
    "Shield",
    "ShieldCheck",
    "ShieldCheckered",
    "ShieldChevron",
    "ShieldPlus",
    "ShieldSlash",
    "ShieldStar",
    "ShieldWarning",
    "ShirtFolded",
    "ShootingStar",
    "ShoppingBag",
    "ShoppingBagOpen",
    "ShoppingCart",
    "ShoppingCartSimple",
    "Shower",
    "Shrimp",
    "Shuffle",
    "ShuffleAngular",
    "ShuffleSimple",
    "Sidebar",
    "SidebarSimple",
    "Sigma",
    "SignIn",
    "SignOut",
    "Signature",
    "Signpost",
    "SimCard",
    "Siren",
    "SketchLogo",
    "SkipBack",
    "SkipBackCircle",
    "SkipForward",
    "SkipForwardCircle",
    "Skull",
    "SlackLogo",
    "Sliders",
    "SlidersHorizontal",
    "Slideshow",
    "Smiley",
    "SmileyAngry",
    "SmileyBlank",
    "SmileyMeh",
    "SmileyNervous",
    "SmileySad",
    "SmileySticker",
    "SmileyWink",
    "SmileyXEyes",
    "SnapchatLogo",
    "Sneaker",
    "SneakerMove",
    "Snowflake",
    "SoccerBall",
    "SortAscending",
    "SortDescending",
    "SoundcloudLogo",
    "Spade",
    "Sparkle",
    "SpeakerHifi",
    "SpeakerHigh",
    "SpeakerLow",
    "SpeakerNone",
    "SpeakerSimpleHigh",
    "SpeakerSimpleLow",
    "SpeakerSimpleNone",
    "SpeakerSimpleSlash",
    "SpeakerSimpleX",
    "SpeakerSlash",
    "SpeakerX",
    "Spinner",
    "SpinnerGap",
    "Spiral",
    "SplitHorizontal",
    "SplitVertical",
    "SpotifyLogo",
    "Square",
    "SquareHalf",
    "SquareHalfBottom",
    "SquareLogo",
    "SquareSplitVertical",
    "SquaresFour",
    "Stack",
    "StackOverflowLogo",
    "StackSimple",
    "Stairs",
    "Stamp",
    "Star",
    "StarAndCrescent",
    "StarFour",
    "StarHalf",
    "StarOfDavid",
    "SteeringWheel",
    "Steps",
    "Stethoscope",
    "Sticker",
    "Stool",
    "Stop",
    "StopCircle",
    "Storefront",
    "Strategy",
    "StripeLogo",
    "Student",
    "Subtitles",
    "Subtract",
    "SubtractSquare",
    "Suitcase",
    "SuitcaseRolling",
    "SuitcaseSimple",
    "Sun",
    "SunDim",
    "SunHorizon",
    "Sunglasses",
    "Swap",
    "Swatches",
    "SwimmingPool",
    "Sword",
    "Synagogue",
    "Syringe",
    "TShirt",
    "Table",
    "Tabs",
    "Tag",
    "TagChevron",
    "TagSimple",
    "Target",
    "Taxi",
    "TelegramLogo",
    "Television",
    "TelevisionSimple",
    "TennisBall",
    "Tent",
    "Terminal",
    "TerminalWindow",
    "TestTube",
    "TextAUnderline",
    "TextAa",
    "TextAlignCenter",
    "TextAlignJustify",
    "TextAlignLeft",
    "TextAlignRight",
    "TextB",
    "TextColumns",
    "TextH",
    "TextHFive",
    "TextHFour",
    "TextHOne",
    "TextHSix",
    "TextHThree",
    "TextHTwo",
    "TextIndent",
    "TextItalic",
    "TextOutdent",
    "TextStrikethrough",
    "TextT",
    "TextUnderline",
    "Textbox",
    "Thermometer",
    "ThermometerCold",
    "ThermometerHot",
    "ThermometerSimple",
    "ThumbsDown",
    "ThumbsUp",
    "Ticket",
    "TidalLogo",
    "TiktokLogo",
    "Timer",
    "Tipi",
    "ToggleLeft",
    "ToggleRight",
    "Toilet",
    "ToiletPaper",
    "Toolbox",
    "Tooth",
    "Tote",
    "ToteSimple",
    "Trademark",
    "TrademarkRegistered",
    "TrafficCone",
    "TrafficSign",
    "TrafficSignal",
    "Train",
    "TrainRegional",
    "TrainSimple",
    "Tram",
    "Translate",
    "Trash",
    "TrashSimple",
    "Tray",
    "Tree",
    "TreeEvergreen",
    "TreePalm",
    "TreeStructure",
    "TrendDown",
    "TrendUp",
    "Triangle",
    "Trophy",
    "Truck",
    "TwitchLogo",
    "TwitterLogo",
    "Umbrella",
    "UmbrellaSimple",
    "Unite",
    "UniteSquare",
    "Upload",
    "UploadSimple",
    "Usb",
    "User",
    "UserCircle",
    "UserCircleGear",
    "UserCircleMinus",
    "UserCirclePlus",
    "UserFocus",
    "UserGear",
    "UserList",
    "UserMinus",
    "UserPlus",
    "UserRectangle",
    "UserSquare",
    "UserSwitch",
    "Users",
    "UsersFour",
    "UsersThree",
    "Van",
    "Vault",
    "Vibrate",
    "Video",
    "VideoCamera",
    "VideoCameraSlash",
    "Vignette",
    "VinylRecord",
    "VirtualReality",
    "Virus",
    "Voicemail",
    "Volleyball",
    "Wall",
    "Wallet",
    "Warehouse",
    "Warning",
    "WarningCircle",
    "WarningDiamond",
    "WarningOctagon",
    "Watch",
    "WaveSawtooth",
    "WaveSine",
    "WaveSquare",
    "WaveTriangle",
    "Waveform",
    "Waves",
    "Webcam",
    "WebcamSlash",
    "WebhooksLogo",
    "WechatLogo",
    "WhatsappLogo",
    "Wheelchair",
    "WheelchairMotion",
    "WifiHigh",
    "WifiLow",
    "WifiMedium",
    "WifiNone",
    "WifiSlash",
    "WifiX",
    "Wind",
    "WindowsLogo",
    "Wine",
    "Wrench",
    "X",
    "XCircle",
    "XSquare",
    "YinYang",
    "YoutubeLogo",
  ],
  vo = "https://framer.com/m/phosphor-icons/",
  sa = ["thin", "light", "regular", "bold", "fill", "duotone"],
  wo = gt.reduce((t, a) => ((t[a.toLowerCase()] = a), t), {});
function ue(t) {
  let {
      color: a,
      selectByList: o,
      iconSearch: n,
      iconSelection: i,
      onClick: f,
      onMouseDown: s,
      onMouseUp: d,
      onMouseEnter: p,
      onMouseLeave: l,
      weight: g,
      mirrored: u,
    } = t,
    x = N(!1),
    y = $e(gt, o, n, i, wo),
    [k, L] = xe(y === "Home" ? la(ne) : null);
  async function S() {
    try {
      let F = await import(`${vo}${y}.js@0.0.53`);
      x.current && L(F.default(ne));
    } catch {
      x.current && L(null);
    }
  }
  ce(
    () => (
      (x.current = !0),
      S(),
      () => {
        x.current = !1;
      }
    ),
    [y]
  );
  let v = ve.current() === ve.canvas ? r(Ze, {}) : null;
  return r(c.div, {
    style: { display: "contents" },
    onClick: f,
    onMouseEnter: p,
    onMouseLeave: l,
    onMouseDown: s,
    onMouseUp: d,
    children: k
      ? r("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          style: {
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: a,
            color: a,
            flexShrink: 0,
            transform: u ? "scale(-1, 1)" : void 0,
          },
          focusable: "false",
          color: a,
          children: r(k, { color: a, weight: g }),
        })
      : v,
  });
}
ue.displayName = "Phosphor";
ue.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "House",
  iconSearch: "House",
  color: "#66F",
  selectByList: !0,
  weight: "regular",
  mirrored: !1,
};
j(ue, {
  selectByList: {
    type: m.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: ue.defaultProps.selectByList,
  },
  iconSelection: {
    type: m.Enum,
    options: gt,
    defaultValue: ue.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: t }) => !t,
    description:
      "Find every icon name on the [Phosphor site](https://phosphoricons.com/)",
  },
  iconSearch: {
    type: m.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: t }) => t,
  },
  color: { type: m.Color, title: "Color", defaultValue: ue.defaultProps.color },
  weight: {
    type: m.Enum,
    title: "Weight",
    optionTitles: sa.map((t) => t.charAt(0).toUpperCase() + t.slice(1)),
    options: sa,
    defaultValue: ue.defaultProps.weight,
  },
  mirrored: {
    type: m.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: ue.defaultProps.mirrored,
  },
  ...Qe,
});
var bo = O(ue),
  ko = { RnjF6VOSM: { hover: !0 } },
  So = ["RnjF6VOSM", "bgPnwCopK"],
  Fo = "framer-vC9gw",
  Co = { bgPnwCopK: "framer-v-9y7woc", RnjF6VOSM: "framer-v-15f3lzd" };
function Ko(t, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, t[n])), o;
}
var To = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Lo = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  Po = c(h),
  Mo = { Closed: "RnjF6VOSM", Opened: "bgPnwCopK" },
  Vo = ({
    answer: t,
    height: a,
    id: o,
    question: n,
    tap: i,
    width: f,
    ...s
  }) => {
    var d, p, l, g;
    return {
      ...s,
      mwCBIUO9J: i ?? s.mwCBIUO9J,
      sa9U39asD:
        (d = t ?? s.sa9U39asD) !== null && d !== void 0
          ? d
          : "Who is Dennis Uvokeke",
      variant:
        (l = (p = Mo[s.variant]) !== null && p !== void 0 ? p : s.variant) !==
          null && l !== void 0
          ? l
          : "RnjF6VOSM",
      yncmK2QXM:
        (g = n ?? s.yncmK2QXM) !== null && g !== void 0
          ? g
          : "Who is Dennis Uvokeke",
    };
  },
  Ao = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  Ro = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      {
        style: i,
        className: f,
        layoutId: s,
        variant: d,
        yncmK2QXM: p,
        sa9U39asD: l,
        mwCBIUO9J: g,
        ...u
      } = Vo(t),
      {
        baseVariant: x,
        classNames: y,
        clearLoadingGesture: k,
        gestureHandlers: L,
        gestureVariant: S,
        isLoading: M,
        setGestureState: v,
        setVariant: C,
        variants: w,
      } = te({
        cycleOrder: So,
        defaultVariant: "RnjF6VOSM",
        enabledGestures: ko,
        variant: d,
        variantClassNames: Co,
      }),
      F = Ao(t, w),
      { activeVariantCallback: e, delay: T } = Ie(x),
      K = e(async (...se) => {
        if ((v({ isPressed: !1 }), g && (await g(...se)) === !1)) return !1;
      }),
      W = N(null),
      R = () => x === "bgPnwCopK",
      q = X(),
      le = [],
      me = re();
    return r(z, {
      id: s ?? q,
      children: r(Po, {
        animate: w,
        initial: !1,
        children: r(Lo, {
          value: To,
          children: b(c.div, {
            ...u,
            ...L,
            className: Y(Fo, ...le, "framer-15f3lzd", f, y),
            "data-framer-name": "Closed",
            "data-highlight": !0,
            layoutDependency: F,
            layoutId: "RnjF6VOSM",
            onTap: K,
            ref: a ?? W,
            style: {
              backgroundColor:
                "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              ...i,
            },
            variants: {
              "RnjF6VOSM-hover": {
                backgroundColor: "rgba(250, 250, 250, 0.85)",
              },
              bgPnwCopK: {
                backgroundColor:
                  "var(--token-12564e42-c715-4f36-83d2-9a5afadcc010, rgb(250, 250, 250))",
              },
            },
            ...Ko(
              {
                "RnjF6VOSM-hover": { "data-framer-name": void 0 },
                bgPnwCopK: { "data-framer-name": "Opened" },
              },
              x,
              S
            ),
            children: [
              b(c.div, {
                className: "framer-1szv8hs",
                "data-framer-name": "Question",
                layoutDependency: F,
                layoutId: "c9F4_Ckra",
                children: [
                  r(V, {
                    __fromCanvasComponent: !0,
                    children: r(h, {
                      children: r(c.p, {
                        style: {
                          "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                          "--framer-font-family":
                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                          "--framer-font-weight": "500",
                          "--framer-letter-spacing": "-0.01em",
                          "--framer-line-height": "140%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27)))",
                        },
                        children: "Who is Dennis Uvokeke",
                      }),
                    }),
                    className: "framer-t8nqu4",
                    fonts: ["GF;Work Sans-500"],
                    layoutDependency: F,
                    layoutId: "ix_CtVFqo",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27))",
                      "--framer-paragraph-spacing": "0px",
                    },
                    text: p,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  r(P, {
                    children: r(c.div, {
                      className: "framer-wmy0j1-container",
                      layoutDependency: F,
                      layoutId: "hPoG8YHyQ-container",
                      style: { rotate: 0 },
                      variants: { bgPnwCopK: { rotate: -90 } },
                      children: r(ue, {
                        color:
                          "var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27))",
                        height: "100%",
                        iconSearch: "CaretRight",
                        iconSelection: "House",
                        id: "hPoG8YHyQ",
                        layoutId: "hPoG8YHyQ",
                        mirrored: !1,
                        selectByList: !1,
                        style: { height: "100%", width: "100%" },
                        weight: "bold",
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              R() &&
                r(c.div, {
                  className: "framer-19jsr0d",
                  "data-framer-name": "Answer",
                  layoutDependency: F,
                  layoutId: "OHkPTmMGy",
                  children: r(V, {
                    __fromCanvasComponent: !0,
                    children: r(h, {
                      children: r(c.p, {
                        style: {
                          "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                          "--framer-font-family":
                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                          "--framer-font-size": "15px",
                          "--framer-font-weight": "500",
                          "--framer-letter-spacing": "-0.01em",
                          "--framer-line-height": "140%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27)))",
                        },
                        children: "Who is Dennis Uvokeke",
                      }),
                    }),
                    className: "framer-6t0b24",
                    fonts: ["GF;Work Sans-500"],
                    layoutDependency: F,
                    layoutId: "fADlzYkp6",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27))",
                      "--framer-paragraph-spacing": "0px",
                      opacity: 0.8,
                    },
                    text: l,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Io = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-vC9gw.framer-s1nab4, .framer-vC9gw .framer-s1nab4 { display: block; }",
    ".framer-vC9gw.framer-15f3lzd { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: 800px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-vC9gw .framer-1szv8hs, .framer-vC9gw .framer-19jsr0d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-vC9gw .framer-t8nqu4, .framer-vC9gw .framer-6t0b24 { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-vC9gw .framer-wmy0j1-container { flex: none; height: 24px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vC9gw.framer-15f3lzd, .framer-vC9gw .framer-1szv8hs, .framer-vC9gw .framer-19jsr0d { gap: 0px; } .framer-vC9gw.framer-15f3lzd > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-vC9gw.framer-15f3lzd > :first-child { margin-top: 0px; } .framer-vC9gw.framer-15f3lzd > :last-child { margin-bottom: 0px; } .framer-vC9gw .framer-1szv8hs > *, .framer-vC9gw .framer-19jsr0d > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-vC9gw .framer-1szv8hs > :first-child, .framer-vC9gw .framer-19jsr0d > :first-child { margin-left: 0px; } .framer-vC9gw .framer-1szv8hs > :last-child, .framer-vC9gw .framer-19jsr0d > :last-child { margin-right: 0px; } }",
  ],
  cr = Z(Ro, Io, "framer-vC9gw"),
  xt = cr;
cr.displayName = "Complex Card Copy 2";
cr.defaultProps = { height: 56, width: 800 };
j(cr, {
  variant: {
    options: ["RnjF6VOSM", "bgPnwCopK"],
    optionTitles: ["Closed", "Opened"],
    title: "Variant",
    type: m.Enum,
  },
  yncmK2QXM: {
    defaultValue: "Who is Dennis Uvokeke",
    displayTextArea: !1,
    title: "Question",
    type: m.String,
  },
  sa9U39asD: {
    defaultValue: "Who is Dennis Uvokeke",
    displayTextArea: !1,
    title: "Answer",
    type: m.String,
  },
  mwCBIUO9J: { title: "Tap", type: m.EventHandler },
});
Q(
  cr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K3vXNi0Dp6_cOyA.woff2",
          weight: "500",
        },
      ],
    },
    ...bo,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var No = O(ue),
  Wo = { piE1saN_v: { hover: !0 } },
  Bo = ["piE1saN_v", "hopORuX9i"],
  _o = "framer-ob7p4",
  Do = { hopORuX9i: "framer-v-pneeoc", piE1saN_v: "framer-v-rkuhgm" };
function jo(t, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, t[n])), o;
}
var Oo = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  zo = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  Eo = c(h),
  Ho = { Closed: "piE1saN_v", Opened: "hopORuX9i" },
  Go = ({
    answer: t,
    height: a,
    id: o,
    question: n,
    tap: i,
    width: f,
    ...s
  }) => {
    var d, p, l, g;
    return {
      ...s,
      mwCBIUO9J: i ?? s.mwCBIUO9J,
      sa9U39asD:
        (d = t ?? s.sa9U39asD) !== null && d !== void 0
          ? d
          : "Who is Dennis Uvokeke",
      variant:
        (l = (p = Ho[s.variant]) !== null && p !== void 0 ? p : s.variant) !==
          null && l !== void 0
          ? l
          : "piE1saN_v",
      yncmK2QXM:
        (g = n ?? s.yncmK2QXM) !== null && g !== void 0
          ? g
          : "Who is Dennis Uvokeke",
    };
  },
  qo = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  Uo = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      {
        style: i,
        className: f,
        layoutId: s,
        variant: d,
        yncmK2QXM: p,
        sa9U39asD: l,
        mwCBIUO9J: g,
        ...u
      } = Go(t),
      {
        baseVariant: x,
        classNames: y,
        clearLoadingGesture: k,
        gestureHandlers: L,
        gestureVariant: S,
        isLoading: M,
        setGestureState: v,
        setVariant: C,
        variants: w,
      } = te({
        cycleOrder: Bo,
        defaultVariant: "piE1saN_v",
        enabledGestures: Wo,
        variant: d,
        variantClassNames: Do,
      }),
      F = qo(t, w),
      { activeVariantCallback: e, delay: T } = Ie(x),
      K = e(async (...se) => {
        if ((v({ isPressed: !1 }), g && (await g(...se)) === !1)) return !1;
      }),
      W = N(null),
      R = () => x === "hopORuX9i",
      q = X(),
      le = [],
      me = re();
    return r(z, {
      id: s ?? q,
      children: r(Eo, {
        animate: w,
        initial: !1,
        children: r(zo, {
          value: Oo,
          children: b(c.div, {
            ...u,
            ...L,
            className: Y(_o, ...le, "framer-rkuhgm", f, y),
            "data-framer-name": "Closed",
            "data-highlight": !0,
            layoutDependency: F,
            layoutId: "piE1saN_v",
            onTap: K,
            ref: a ?? W,
            style: {
              backgroundColor:
                "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              ...i,
            },
            variants: {
              "piE1saN_v-hover": {
                backgroundColor: "rgba(250, 250, 250, 0.85)",
              },
            },
            ...jo(
              {
                "piE1saN_v-hover": { "data-framer-name": void 0 },
                hopORuX9i: { "data-framer-name": "Opened" },
              },
              x,
              S
            ),
            children: [
              b(c.div, {
                className: "framer-12zomun",
                "data-framer-name": "Question",
                layoutDependency: F,
                layoutId: "O2oHAyGc4",
                children: [
                  r(V, {
                    __fromCanvasComponent: !0,
                    children: r(h, {
                      children: r(c.p, {
                        style: {
                          "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                          "--framer-font-family":
                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                          "--framer-font-weight": "500",
                          "--framer-letter-spacing": "-0.01em",
                          "--framer-line-height": "140%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27)))",
                        },
                        children: "Who is Dennis Uvokeke",
                      }),
                    }),
                    className: "framer-onh1y8",
                    fonts: ["GF;Work Sans-500"],
                    layoutDependency: F,
                    layoutId: "tc6eIXpFb",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27))",
                      "--framer-paragraph-spacing": "0px",
                    },
                    text: p,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  r(P, {
                    children: r(c.div, {
                      className: "framer-qmt0qc-container",
                      layoutDependency: F,
                      layoutId: "gZqv3UL1J-container",
                      style: { rotate: 0 },
                      variants: { hopORuX9i: { rotate: -90 } },
                      children: r(ue, {
                        color:
                          "var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27))",
                        height: "100%",
                        iconSearch: "CaretRight",
                        iconSelection: "House",
                        id: "gZqv3UL1J",
                        layoutId: "gZqv3UL1J",
                        mirrored: !1,
                        selectByList: !1,
                        style: { height: "100%", width: "100%" },
                        weight: "bold",
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              R() &&
                r(c.div, {
                  className: "framer-1s8aoko",
                  "data-framer-name": "Answer",
                  layoutDependency: F,
                  layoutId: "y_9aCP2Pm",
                  children: r(V, {
                    __fromCanvasComponent: !0,
                    children: r(h, {
                      children: r(c.p, {
                        style: {
                          "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                          "--framer-font-family":
                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                          "--framer-font-size": "15px",
                          "--framer-font-weight": "500",
                          "--framer-letter-spacing": "-0.01em",
                          "--framer-line-height": "140%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27)))",
                        },
                        children: "Who is Dennis Uvokeke",
                      }),
                    }),
                    className: "framer-1rtwms3",
                    fonts: ["GF;Work Sans-500"],
                    layoutDependency: F,
                    layoutId: "dYDCiayo_",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27))",
                      "--framer-paragraph-spacing": "0px",
                      opacity: 0.8,
                    },
                    text: l,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Yo = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-ob7p4.framer-1n7xj1r, .framer-ob7p4 .framer-1n7xj1r { display: block; }",
    ".framer-ob7p4.framer-rkuhgm { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: 800px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-ob7p4 .framer-12zomun, .framer-ob7p4 .framer-1s8aoko { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-ob7p4 .framer-onh1y8, .framer-ob7p4 .framer-1rtwms3 { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-ob7p4 .framer-qmt0qc-container { flex: none; height: 24px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ob7p4.framer-rkuhgm, .framer-ob7p4 .framer-12zomun, .framer-ob7p4 .framer-1s8aoko { gap: 0px; } .framer-ob7p4.framer-rkuhgm > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ob7p4.framer-rkuhgm > :first-child { margin-top: 0px; } .framer-ob7p4.framer-rkuhgm > :last-child { margin-bottom: 0px; } .framer-ob7p4 .framer-12zomun > *, .framer-ob7p4 .framer-1s8aoko > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-ob7p4 .framer-12zomun > :first-child, .framer-ob7p4 .framer-1s8aoko > :first-child { margin-left: 0px; } .framer-ob7p4 .framer-12zomun > :last-child, .framer-ob7p4 .framer-1s8aoko > :last-child { margin-right: 0px; } }",
  ],
  mr = Z(Uo, Yo, "framer-ob7p4"),
  yt = mr;
mr.displayName = "Complex Card Copy";
mr.defaultProps = { height: 56, width: 800 };
j(mr, {
  variant: {
    options: ["piE1saN_v", "hopORuX9i"],
    optionTitles: ["Closed", "Opened"],
    title: "Variant",
    type: m.Enum,
  },
  yncmK2QXM: {
    defaultValue: "Who is Dennis Uvokeke",
    displayTextArea: !1,
    title: "Question",
    type: m.String,
  },
  sa9U39asD: {
    defaultValue: "Who is Dennis Uvokeke",
    displayTextArea: !1,
    title: "Answer",
    type: m.String,
  },
  mwCBIUO9J: { title: "Tap", type: m.EventHandler },
});
Q(
  mr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K3vXNi0Dp6_cOyA.woff2",
          weight: "500",
        },
      ],
    },
    ...No,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Xo = O(ue),
  Jo = { ixHQBB8ck: { hover: !0 } },
  Zo = ["ixHQBB8ck", "FfI08KQHZ"],
  Qo = "framer-hmn5b",
  $o = { FfI08KQHZ: "framer-v-1ym83lo", ixHQBB8ck: "framer-v-10u2lp7" };
function ei(t, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, t[n])), o;
}
var ri = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ti = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  ai = c(h),
  ni = { Closed: "ixHQBB8ck", Opened: "FfI08KQHZ" },
  oi = ({
    answer: t,
    height: a,
    id: o,
    question: n,
    tap: i,
    width: f,
    ...s
  }) => {
    var d, p, l, g;
    return {
      ...s,
      mwCBIUO9J: i ?? s.mwCBIUO9J,
      sa9U39asD:
        (d = t ?? s.sa9U39asD) !== null && d !== void 0
          ? d
          : "Who is Dennis Uvokeke",
      variant:
        (l = (p = ni[s.variant]) !== null && p !== void 0 ? p : s.variant) !==
          null && l !== void 0
          ? l
          : "ixHQBB8ck",
      yncmK2QXM:
        (g = n ?? s.yncmK2QXM) !== null && g !== void 0
          ? g
          : "Who is Dennis Uvokeke",
    };
  },
  ii = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  li = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      {
        style: i,
        className: f,
        layoutId: s,
        variant: d,
        yncmK2QXM: p,
        sa9U39asD: l,
        mwCBIUO9J: g,
        ...u
      } = oi(t),
      {
        baseVariant: x,
        classNames: y,
        clearLoadingGesture: k,
        gestureHandlers: L,
        gestureVariant: S,
        isLoading: M,
        setGestureState: v,
        setVariant: C,
        variants: w,
      } = te({
        cycleOrder: Zo,
        defaultVariant: "ixHQBB8ck",
        enabledGestures: Jo,
        variant: d,
        variantClassNames: $o,
      }),
      F = ii(t, w),
      { activeVariantCallback: e, delay: T } = Ie(x),
      K = e(async (...se) => {
        if ((v({ isPressed: !1 }), g && (await g(...se)) === !1)) return !1;
      }),
      W = N(null),
      R = () => x === "FfI08KQHZ",
      q = X(),
      le = [],
      me = re();
    return r(z, {
      id: s ?? q,
      children: r(ai, {
        animate: w,
        initial: !1,
        children: r(ti, {
          value: ri,
          children: b(c.div, {
            ...u,
            ...L,
            className: Y(Qo, ...le, "framer-10u2lp7", f, y),
            "data-framer-name": "Closed",
            "data-highlight": !0,
            layoutDependency: F,
            layoutId: "ixHQBB8ck",
            onTap: K,
            ref: a ?? W,
            style: {
              backgroundColor:
                "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              ...i,
            },
            variants: {
              "ixHQBB8ck-hover": {
                backgroundColor: "rgba(250, 250, 250, 0.85)",
              },
            },
            ...ei(
              {
                "ixHQBB8ck-hover": { "data-framer-name": void 0 },
                FfI08KQHZ: { "data-framer-name": "Opened" },
              },
              x,
              S
            ),
            children: [
              b(c.div, {
                className: "framer-2s8wj0",
                "data-framer-name": "Question",
                layoutDependency: F,
                layoutId: "VB9FmkC1C",
                children: [
                  r(V, {
                    __fromCanvasComponent: !0,
                    children: r(h, {
                      children: r(c.p, {
                        style: {
                          "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                          "--framer-font-family":
                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                          "--framer-font-weight": "500",
                          "--framer-letter-spacing": "-0.01em",
                          "--framer-line-height": "140%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27)))",
                        },
                        children: "Who is Dennis Uvokeke",
                      }),
                    }),
                    className: "framer-15d8ndo",
                    fonts: ["GF;Work Sans-500"],
                    layoutDependency: F,
                    layoutId: "P4J9RMPlS",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27))",
                      "--framer-paragraph-spacing": "0px",
                    },
                    text: p,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  r(P, {
                    children: r(c.div, {
                      className: "framer-ibquvf-container",
                      layoutDependency: F,
                      layoutId: "zOI7KpKzp-container",
                      style: { rotate: 0 },
                      variants: { FfI08KQHZ: { rotate: -90 } },
                      children: r(ue, {
                        color:
                          "var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27))",
                        height: "100%",
                        iconSearch: "CaretRight",
                        iconSelection: "House",
                        id: "zOI7KpKzp",
                        layoutId: "zOI7KpKzp",
                        mirrored: !1,
                        selectByList: !1,
                        style: { height: "100%", width: "100%" },
                        weight: "bold",
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
              R() &&
                r(c.div, {
                  className: "framer-p0kveu",
                  "data-framer-name": "Answer",
                  layoutDependency: F,
                  layoutId: "QxuxckIdp",
                  children: r(V, {
                    __fromCanvasComponent: !0,
                    children: r(h, {
                      children: r(c.p, {
                        style: {
                          "--font-selector": "R0Y7V29yayBTYW5zLTUwMA==",
                          "--framer-font-family":
                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                          "--framer-font-size": "15px",
                          "--framer-font-weight": "500",
                          "--framer-letter-spacing": "-0.01em",
                          "--framer-line-height": "140%",
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27)))",
                        },
                        children: "Who is Dennis Uvokeke",
                      }),
                    }),
                    className: "framer-108wlqq",
                    fonts: ["GF;Work Sans-500"],
                    layoutDependency: F,
                    layoutId: "Is9rYrqkf",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-4b485a81-c4cc-4891-a8a9-150827140eae, rgb(24, 24, 27))",
                      "--framer-paragraph-spacing": "0px",
                      opacity: 0.8,
                    },
                    text: l,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  si = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-hmn5b.framer-gqc1ip, .framer-hmn5b .framer-gqc1ip { display: block; }",
    ".framer-hmn5b.framer-10u2lp7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 16px; position: relative; width: 800px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-hmn5b .framer-2s8wj0, .framer-hmn5b .framer-p0kveu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-hmn5b .framer-15d8ndo, .framer-hmn5b .framer-108wlqq { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-hmn5b .framer-ibquvf-container { flex: none; height: 24px; position: relative; width: 24px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hmn5b.framer-10u2lp7, .framer-hmn5b .framer-2s8wj0, .framer-hmn5b .framer-p0kveu { gap: 0px; } .framer-hmn5b.framer-10u2lp7 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-hmn5b.framer-10u2lp7 > :first-child { margin-top: 0px; } .framer-hmn5b.framer-10u2lp7 > :last-child { margin-bottom: 0px; } .framer-hmn5b .framer-2s8wj0 > *, .framer-hmn5b .framer-p0kveu > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-hmn5b .framer-2s8wj0 > :first-child, .framer-hmn5b .framer-p0kveu > :first-child { margin-left: 0px; } .framer-hmn5b .framer-2s8wj0 > :last-child, .framer-hmn5b .framer-p0kveu > :last-child { margin-right: 0px; } }",
  ],
  fr = Z(li, si, "framer-hmn5b"),
  vt = fr;
fr.displayName = "Complex Card";
fr.defaultProps = { height: 56, width: 800 };
j(fr, {
  variant: {
    options: ["ixHQBB8ck", "FfI08KQHZ"],
    optionTitles: ["Closed", "Opened"],
    title: "Variant",
    type: m.Enum,
  },
  yncmK2QXM: {
    defaultValue: "Who is Dennis Uvokeke",
    displayTextArea: !1,
    title: "Question",
    type: m.String,
  },
  sa9U39asD: {
    defaultValue: "Who is Dennis Uvokeke",
    displayTextArea: !1,
    title: "Answer",
    type: m.String,
  },
  mwCBIUO9J: { title: "Tap", type: m.EventHandler },
});
Q(
  fr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K3vXNi0Dp6_cOyA.woff2",
          weight: "500",
        },
      ],
    },
    ...Xo,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ci = O(vt),
  mi = O(yt),
  fi = O(xt),
  di = ["mb8ZxlNvl", "sQNuPTgD_", "qD6LYRNwU", "gja7N76VL"],
  pi = "framer-4OkGO",
  ui = {
    gja7N76VL: "framer-v-sv9s5l",
    mb8ZxlNvl: "framer-v-1p6b22s",
    qD6LYRNwU: "framer-v-1iktf8d",
    sQNuPTgD_: "framer-v-oqrzyd",
  };
function Nr(t, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, t[n])), o;
}
var hi = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  gi = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  xi = c(h),
  yi = { 1: "sQNuPTgD_", 2: "qD6LYRNwU", 3: "gja7N76VL", Closed: "mb8ZxlNvl" },
  vi = ({ height: t, id: a, width: o, ...n }) => {
    var i, f;
    return {
      ...n,
      variant:
        (f = (i = yi[n.variant]) !== null && i !== void 0 ? i : n.variant) !==
          null && f !== void 0
          ? f
          : "mb8ZxlNvl",
    };
  },
  wi = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  bi = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      { style: i, className: f, layoutId: s, variant: d, ...p } = vi(t),
      {
        baseVariant: l,
        classNames: g,
        gestureHandlers: u,
        gestureVariant: x,
        setGestureState: y,
        setVariant: k,
        variants: L,
      } = te({
        cycleOrder: di,
        defaultVariant: "mb8ZxlNvl",
        variant: d,
        variantClassNames: ui,
      }),
      S = wi(t, L),
      { activeVariantCallback: M, delay: v } = Ie(l),
      C = M(async (...q) => {
        k("sQNuPTgD_");
      }),
      w = M(async (...q) => {
        k("mb8ZxlNvl");
      }),
      F = M(async (...q) => {
        k("qD6LYRNwU");
      }),
      e = M(async (...q) => {
        k("gja7N76VL");
      }),
      T = N(null),
      K = X(),
      W = [],
      R = re();
    return r(z, {
      id: s ?? K,
      children: r(xi, {
        animate: L,
        initial: !1,
        children: r(gi, {
          value: hi,
          children: b(c.div, {
            ...p,
            ...u,
            className: Y(pi, ...W, "framer-1p6b22s", f, g),
            "data-framer-name": "Closed",
            layoutDependency: S,
            layoutId: "mb8ZxlNvl",
            ref: a ?? T,
            style: { ...i },
            ...Nr(
              {
                gja7N76VL: { "data-framer-name": "3" },
                qD6LYRNwU: { "data-framer-name": "2" },
                sQNuPTgD_: { "data-framer-name": "1" },
              },
              l,
              x
            ),
            children: [
              r(P, {
                width: R?.width || "100vw",
                children: r(c.div, {
                  className: "framer-1e43c1e-container",
                  "data-framer-name": "1",
                  layoutDependency: S,
                  layoutId: "x6UDkAeTo-container",
                  name: "1",
                  children: r(vt, {
                    height: "100%",
                    id: "x6UDkAeTo",
                    layoutId: "x6UDkAeTo",
                    mwCBIUO9J: C,
                    name: "1",
                    sa9U39asD:
                      "The SHP Token is the governance and revenue accrual token of the SHP DAO. By staking SHP users will receive a share of the revenue (currently 80% revenue) generated by the Protocol. ",
                    style: { width: "100%" },
                    variant: "ixHQBB8ck",
                    width: "100%",
                    yncmK2QXM: "What is the SHP token?",
                    ...Nr(
                      { sQNuPTgD_: { mwCBIUO9J: w, variant: "FfI08KQHZ" } },
                      l,
                      x
                    ),
                  }),
                }),
              }),
              r(P, {
                width: R?.width || "100vw",
                children: r(c.div, {
                  className: "framer-ymflf2-container",
                  "data-framer-name": "2",
                  layoutDependency: S,
                  layoutId: "ThmJegWKn-container",
                  name: "2",
                  children: r(yt, {
                    height: "100%",
                    id: "ThmJegWKn",
                    layoutId: "ThmJegWKn",
                    mwCBIUO9J: F,
                    name: "2",
                    sa9U39asD:
                      "Yes. You can find the audit reports on our documentation at sheep-finance.gitbook.io/shp-finance",
                    style: { width: "100%" },
                    variant: "piE1saN_v",
                    width: "100%",
                    yncmK2QXM: "Has the Sheep Protocol been Audited?",
                    ...Nr(
                      { qD6LYRNwU: { mwCBIUO9J: w, variant: "hopORuX9i" } },
                      l,
                      x
                    ),
                  }),
                }),
              }),
              r(P, {
                width: R?.width || "100vw",
                children: r(c.div, {
                  className: "framer-1tqxj9s-container",
                  "data-framer-name": "3",
                  layoutDependency: S,
                  layoutId: "BJkmIvZLT-container",
                  name: "3",
                  children: r(xt, {
                    height: "100%",
                    id: "BJkmIvZLT",
                    layoutId: "BJkmIvZLT",
                    mwCBIUO9J: e,
                    name: "3",
                    sa9U39asD:
                      "The Sheep Protocol charges one of the lowest fees in the DeFi ecosystem, a fixed performance fee of 5% when a vault is harvested. All APR and APY figures on the Sheep Protocol have the fee included.",
                    style: { width: "100%" },
                    variant: "RnjF6VOSM",
                    width: "100%",
                    yncmK2QXM: "What Fees does Sheep Protocol charge?",
                    ...Nr(
                      { gja7N76VL: { mwCBIUO9J: w, variant: "bgPnwCopK" } },
                      l,
                      x
                    ),
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  ki = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-4OkGO.framer-1tffkg8, .framer-4OkGO .framer-1tffkg8 { display: block; }",
    ".framer-4OkGO.framer-1p6b22s { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 800px; }",
    ".framer-4OkGO .framer-1e43c1e-container, .framer-4OkGO .framer-ymflf2-container, .framer-4OkGO .framer-1tqxj9s-container { flex: none; height: auto; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-4OkGO.framer-1p6b22s { gap: 0px; } .framer-4OkGO.framer-1p6b22s > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-4OkGO.framer-1p6b22s > :first-child { margin-top: 0px; } .framer-4OkGO.framer-1p6b22s > :last-child { margin-bottom: 0px; } }",
  ],
  dr = Z(bi, ki, "framer-4OkGO"),
  wt = dr;
dr.displayName = "FAQ Container";
dr.defaultProps = { height: 184, width: 800 };
j(dr, {
  variant: {
    options: ["mb8ZxlNvl", "sQNuPTgD_", "qD6LYRNwU", "gja7N76VL"],
    optionTitles: ["Closed", "1", "2", "3"],
    title: "Variant",
    type: m.Enum,
  },
});
Q(dr, [{ explicitInter: !0, fonts: [] }, ...ci, ...mi, ...fi], {
  supportsExplicitInterCodegen: !0,
});
var Si = O(we),
  Fi = { qFXofv9sU: { hover: !0 } },
  Ci = "framer-7LdaP",
  Ki = { qFXofv9sU: "framer-v-65g8pc" };
function Ti(t, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, t[n])), o;
}
var Li = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  Pi = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  Mi = c.create(h),
  Vi = ({ auditCompany: t, height: a, id: o, link: n, width: i, ...f }) => {
    var s;
    return {
      ...f,
      fugRAMLEV:
        (s = t ?? f.fugRAMLEV) !== null && s !== void 0 ? s : "Blocksec",
      HqN_SH_dV: n ?? f.HqN_SH_dV,
    };
  },
  Ai = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  Ri = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      {
        style: i,
        className: f,
        layoutId: s,
        variant: d,
        HqN_SH_dV: p,
        fugRAMLEV: l,
        ...g
      } = Vi(t),
      {
        baseVariant: u,
        classNames: x,
        clearLoadingGesture: y,
        gestureHandlers: k,
        gestureVariant: L,
        isLoading: S,
        setGestureState: M,
        setVariant: v,
        variants: C,
      } = te({
        defaultVariant: "qFXofv9sU",
        enabledGestures: Fi,
        variant: d,
        variantClassNames: Ki,
      }),
      w = Ai(t, C),
      F = N(null),
      e = X(),
      T = [],
      K = re();
    return r(z, {
      id: s ?? e,
      children: r(Mi, {
        animate: C,
        initial: !1,
        children: r(Pi, {
          value: Li,
          children: r(de, {
            href: p,
            openInNewTab: !0,
            children: r(c.a, {
              ...g,
              ...k,
              className: `${Y(Ci, ...T, "framer-65g8pc", f, x)} framer-tinfl`,
              "data-framer-name": "Variant 1",
              layoutDependency: w,
              layoutId: "qFXofv9sU",
              ref: a ?? F,
              style: {
                backgroundColor: "rgba(54, 71, 97, 0.25)",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                ...i,
              },
              variants: {
                "qFXofv9sU-hover": {
                  backgroundColor: "rgba(54, 71, 97, 0.26)",
                },
              },
              ...Ti(
                { "qFXofv9sU-hover": { "data-framer-name": void 0 } },
                u,
                L
              ),
              children: b(c.div, {
                className: "framer-106fe4r",
                layoutDependency: w,
                layoutId: "BDfwvNPzV",
                style: { backgroundColor: "rgba(0, 0, 0, 0)" },
                variants: {
                  "qFXofv9sU-hover": {
                    backgroundColor: "rgba(54, 71, 97, 0.26)",
                  },
                },
                children: [
                  r(V, {
                    __fromCanvasComponent: !0,
                    children: r(h, {
                      children: r(c.p, {
                        style: {
                          "--font-selector": "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                          "--framer-font-family":
                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                          "--framer-font-size": "26px",
                          "--framer-font-weight": "500",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-12564e42-c715-4f36-83d2-9a5afadcc010, rgb(250, 250, 250)))",
                        },
                        children: "Blocksec",
                      }),
                    }),
                    className: "framer-1kw4az7",
                    fonts: ["FS;Work Sans-medium"],
                    layoutDependency: w,
                    layoutId: "ISzGb8bL_",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-12564e42-c715-4f36-83d2-9a5afadcc010, rgb(250, 250, 250))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    text: l,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                  r(P, {
                    children: r(c.div, {
                      className: "framer-d1p6ze-container",
                      layoutDependency: w,
                      layoutId: "hC5LZccnb-container",
                      children: r(we, {
                        color:
                          "var(--token-12564e42-c715-4f36-83d2-9a5afadcc010, rgb(250, 250, 250))",
                        height: "100%",
                        iconSearch: "Home",
                        iconSelection: "arrow-up-right",
                        id: "hC5LZccnb",
                        layoutId: "hC5LZccnb",
                        mirrored: !1,
                        selectByList: !0,
                        style: { height: "100%", width: "100%" },
                        width: "100%",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
    });
  }),
  Ii = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-7LdaP.framer-tinfl, .framer-7LdaP .framer-tinfl { display: block; }",
    ".framer-7LdaP.framer-65g8pc { cursor: pointer; height: 70px; overflow: hidden; position: relative; text-decoration: none; width: 495px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-7LdaP .framer-106fe4r { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; left: 0px; overflow: hidden; padding: 0px 20px 0px 30px; position: absolute; top: 0px; width: 100%; }",
    ".framer-7LdaP .framer-1kw4az7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-7LdaP .framer-d1p6ze-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 36px); position: relative; width: 33px; }",
  ],
  pr = Z(Ri, Ii, "framer-7LdaP"),
  ur = pr;
pr.displayName = "Audit";
pr.defaultProps = { height: 70, width: 495 };
j(pr, {
  HqN_SH_dV: { title: "Link", type: m.Link },
  fugRAMLEV: {
    defaultValue: "Blocksec",
    displayTextArea: !1,
    title: "Audit Company",
    type: m.String,
  },
});
Q(
  pr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "fontshare",
          style: "normal",
          url: "/third-party-assets/fontshare/wf/MBOJEUZXMXZXHAW3KKWUFI6R7OIPIRYU/FBJ6H6I7LKZ2WGOVP25FDJOOUIMXMY2Z/THXRGVPNH45VMHCGWEEJATJ2RCOHTNBI.woff2",
          weight: "500",
        },
      ],
    },
    ...Si,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Ni = O(pe),
  Wi = ["gOG718MT9", "ENGu2CJ8B"],
  Bi = "framer-yOw6H",
  _i = { ENGu2CJ8B: "framer-v-f2qp5e", gOG718MT9: "framer-v-1b7n8sc" };
function ca(t, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, t[n])), o;
}
var Di = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ji = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  Oi = c.create(h),
  zi = { "Variant 2": "ENGu2CJ8B", Desktop: "gOG718MT9" },
  Ei = ({ height: t, id: a, width: o, ...n }) => {
    var i, f;
    return {
      ...n,
      variant:
        (f = (i = zi[n.variant]) !== null && i !== void 0 ? i : n.variant) !==
          null && f !== void 0
          ? f
          : "gOG718MT9",
    };
  },
  Hi = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  Gi = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      { style: i, className: f, layoutId: s, variant: d, ...p } = Ei(t),
      {
        baseVariant: l,
        classNames: g,
        clearLoadingGesture: u,
        gestureHandlers: x,
        gestureVariant: y,
        isLoading: k,
        setGestureState: L,
        setVariant: S,
        variants: M,
      } = te({
        cycleOrder: Wi,
        defaultVariant: "gOG718MT9",
        variant: d,
        variantClassNames: _i,
      }),
      v = Hi(t, M),
      C = N(null),
      w = () => l !== "ENGu2CJ8B",
      F = () => l === "ENGu2CJ8B",
      e = X(),
      T = [],
      K = re();
    return r(z, {
      id: s ?? e,
      children: r(Oi, {
        animate: M,
        initial: !1,
        children: r(ji, {
          value: Di,
          children: b(c.div, {
            ...p,
            ...x,
            className: Y(Bi, ...T, "framer-1b7n8sc", f, g),
            "data-framer-name": "Desktop",
            layoutDependency: v,
            layoutId: "gOG718MT9",
            ref: a ?? C,
            style: { ...i },
            ...ca({ ENGu2CJ8B: { "data-framer-name": "Variant 2" } }, l, y),
            children: [
              w() &&
                r(de, {
                  href: { webPageId: "augiA20Il" },
                  children: r($, {
                    as: "a",
                    background: {
                      alt: "",
                      fit: "fill",
                      loading: be(
                        (K?.y || 0) + (20 + ((K?.height || 80) - 40 - 31) / 2)
                      ),
                      pixelHeight: 110,
                      pixelWidth: 570,
                      sizes: "162.5286px",
                      src: "/images/StrbIkxP3GMqs3FF25eUtBTj0w.svg",
                      srcSet:
                        "/images/StrbIkxP3GMqs3FF25eUtBTj0w.svg?scale-down-to=512 512w,/images/StrbIkxP3GMqs3FF25eUtBTj0w.svg 570w",
                    },
                    className: "framer-lixnae framer-lek69x",
                    layoutDependency: v,
                    layoutId: "NRWUQEFxC",
                  }),
                }),
              F() &&
                r(de, {
                  href: { webPageId: "augiA20Il" },
                  children: r($, {
                    as: "a",
                    background: {
                      alt: "",
                      fit: "fill",
                      pixelHeight: 128,
                      pixelWidth: 127,
                      src: "/images/4Xg68vJCe8cfQqsRTsSkXhSKnI.svg",
                    },
                    className: "framer-1tnuu3w framer-lek69x",
                    layoutDependency: v,
                    layoutId: "qOWTQmovd",
                    ...ca(
                      {
                        ENGu2CJ8B: {
                          background: {
                            alt: "",
                            fit: "fill",
                            loading: be(
                              (K?.y || 0) +
                                (20 + ((K?.height || 80) - 40 - 48) / 2)
                            ),
                            pixelHeight: 128,
                            pixelWidth: 127,
                            src: "/images/4Xg68vJCe8cfQqsRTsSkXhSKnI.svg",
                          },
                        },
                      },
                      l,
                      y
                    ),
                  }),
                }),
              b(c.div, {
                className: "framer-2xhq7r",
                layoutDependency: v,
                layoutId: "MQY7haDVw",
                children: [

                ],
              }),
              r(P, {
                height: 40,
                y: (K?.y || 0) + (20 + ((K?.height || 80) - 40 - 40) / 2),
                children: r(c.div, {
                  className: "framer-ap523c-container",
                  layoutDependency: v,
                  layoutId: "FMjs3Dfei-container",
                  children: r(pe, {
                    cITQpDSzU: !1,
                    cSN7oJ9Cy: !1,
                    eVKX59h3Y: "https://app-shp-fi.vercel.app/",
                    GQMIB2fo_: "arrow-up-right",
                    height: "100%",
                    hvc8_eco1: !1,
                    id: "FMjs3Dfei",
                    jY9wMwBAL: "Open App",
                    layoutId: "FMjs3Dfei",
                    Q5d6XPMqx: !1,
                    variant: "rm7iJvumB",
                    width: "100%",
                  }),
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  qi = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-yOw6H.framer-lek69x, .framer-yOw6H .framer-lek69x { display: block; }",
    ".framer-yOw6H.framer-1b7n8sc { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: 80px; justify-content: space-between; padding: 20px 0px 20px 0px; position: relative; width: 1200px; }",
    ".framer-yOw6H .framer-lixnae { aspect-ratio: 5.242857142857143 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 31px); position: relative; text-decoration: none; width: 163px; }",
    ".framer-yOw6H .framer-1tnuu3w { flex: none; height: 48px; position: relative; text-decoration: none; width: 48px; }",
    ".framer-yOw6H .framer-2xhq7r { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 23px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-yOw6H .framer-1smwwq4-container, .framer-yOw6H .framer-5dg2pv-container, .framer-yOw6H .framer-ap523c-container { flex: none; height: auto; position: relative; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yOw6H .framer-2xhq7r { gap: 0px; } .framer-yOw6H .framer-2xhq7r > * { margin: 0px; margin-left: calc(23px / 2); margin-right: calc(23px / 2); } .framer-yOw6H .framer-2xhq7r > :first-child { margin-left: 0px; } .framer-yOw6H .framer-2xhq7r > :last-child { margin-right: 0px; } }",
    ".framer-yOw6H.framer-v-f2qp5e.framer-1b7n8sc { width: 600px; }",
  ],
  hr = Z(Gi, qi, "framer-yOw6H"),
  bt = hr;
hr.displayName = "Site/Navigation Bar";
hr.defaultProps = { height: 80, width: 1200 };
j(hr, {
  variant: {
    options: ["gOG718MT9", "ENGu2CJ8B"],
    optionTitles: ["Desktop", "Variant 2"],
    title: "Variant",
    type: m.Enum,
  },
});
Q(hr, [{ explicitInter: !0, fonts: [] }, ...Ni], {
  supportsExplicitInterCodegen: !0,
});
function ma(t) {
  let a = It({ state: Object.freeze({ ...t }) }),
    o = (d) => {
      typeof d == "function" && (d = d(a.state)),
        (a.state = Object.freeze({ ...a.state, ...d }));
    },
    n = typeof t == "object" ? Object.freeze({ ...t }) : t,
    i = new Set(),
    f = (d) => {
      typeof d == "function" && (d = d(n)),
        (n = typeof d == "object" ? Object.freeze({ ...n, ...d }) : d),
        i.forEach((p) => p(n));
    };
  function s() {
    let [d, p] = xe(n);
    return (
      ce(() => (i.add(p), () => i.delete(p)), []),
      at() === !0 ? (at(), [a.state, o]) : [d, f]
    );
  }
  return s;
}
var rp = ma({ background: "#0099FF" });
function Wr(t) {
  return (a) => r(t, { ...a, style: Ui });
}
var Ui = { maxWidth: 1200, minWidth: "", width: "100%", margin: "0 auto" };
var Yi = ["CF6SuRuRe"],
  Xi = "framer-uUirq",
  Ji = { CF6SuRuRe: "framer-v-19nt8tj" };
var Zi = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Qi = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  $i = c(h),
  el = ({ height: t, id: a, width: o, ...n }) => ({ ...n }),
  rl = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  tl = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      { style: i, className: f, layoutId: s, variant: d, ...p } = el(t),
      {
        baseVariant: l,
        classNames: g,
        clearLoadingGesture: u,
        gestureHandlers: x,
        gestureVariant: y,
        isLoading: k,
        setGestureState: L,
        setVariant: S,
        variants: M,
      } = te({
        cycleOrder: Yi,
        defaultVariant: "CF6SuRuRe",
        variant: d,
        variantClassNames: Ji,
      }),
      v = rl(t, M),
      C = N(null),
      w = X(),
      F = [],
      e = re();
    return r(z, {
      id: s ?? w,
      children: r($i, {
        animate: M,
        initial: !1,
        children: r(Qi, {
          value: Zi,
          children: r(de, {
            href: { webPageId: "augiA20Il" },
            children: r(c.a, {
              ...p,
              ...x,
              className: `${Y(
                Xi,
                ...F,
                "framer-19nt8tj",
                f,
                g
              )} framer-17zc13w`,
              "data-framer-name": "Vetical",
              layoutDependency: v,
              layoutId: "CF6SuRuRe",
              ref: a ?? C,
              style: { ...i },
              children: r($, {
                background: {
                  alt: "",
                  fit: "fit",
                  pixelHeight: 110,
                  pixelWidth: 570,
                  positionX: "center",
                  positionY: "center",
                  sizes: `max(${e?.width || "100vw"}, 1px)`,
                  src: "/images/StrbIkxP3GMqs3FF25eUtBTj0w.svg",
                  srcSet:
                    "/images/StrbIkxP3GMqs3FF25eUtBTj0w.svg?scale-down-to=512 512w,/images/StrbIkxP3GMqs3FF25eUtBTj0w.svg 570w",
                },
                className: "framer-19wiwnf",
                layoutDependency: v,
                layoutId: "CT4VT24vt",
              }),
            }),
          }),
        }),
      }),
    });
  }),
  al = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-uUirq.framer-17zc13w, .framer-uUirq .framer-17zc13w { display: block; }",
    ".framer-uUirq.framer-19nt8tj { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 80px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 230px; }",
    ".framer-uUirq .framer-19wiwnf { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-uUirq.framer-19nt8tj { gap: 0px; } .framer-uUirq.framer-19nt8tj > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-uUirq.framer-19nt8tj > :first-child { margin-left: 0px; } .framer-uUirq.framer-19nt8tj > :last-child { margin-right: 0px; } }",
  ],
  Br = Z(tl, al, "framer-uUirq"),
  kt = Br;
Br.displayName = "Asset/Logo";
Br.defaultProps = { height: 80, width: 230 };
Q(Br, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 });
var nl = { c9NmXTb9f: { hover: !0, pressed: !0 } },
  ol = "framer-68IE6",
  il = { c9NmXTb9f: "framer-v-136ur2m" };
function fa(t, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, t[n])), o;
}
var ll = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  sl = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  cl = c.create(h),
  ml = ({ content: t, height: a, id: o, link: n, width: i, ...f }) => {
    var s;
    return {
      ...f,
      dkcobjq2j: n ?? f.dkcobjq2j,
      EKhY4kdth: (s = t ?? f.EKhY4kdth) !== null && s !== void 0 ? s : "Text",
    };
  },
  fl = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  dl = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      {
        style: i,
        className: f,
        layoutId: s,
        variant: d,
        EKhY4kdth: p,
        dkcobjq2j: l,
        ...g
      } = ml(t),
      {
        baseVariant: u,
        classNames: x,
        clearLoadingGesture: y,
        gestureHandlers: k,
        gestureVariant: L,
        isLoading: S,
        setGestureState: M,
        setVariant: v,
        variants: C,
      } = te({
        defaultVariant: "c9NmXTb9f",
        enabledGestures: nl,
        variant: d,
        variantClassNames: il,
      }),
      w = fl(t, C),
      F = N(null),
      e = X(),
      T = [],
      K = re();
    return r(z, {
      id: s ?? e,
      children: r(cl, {
        animate: C,
        initial: !1,
        children: r(sl, {
          value: ll,
          children: r(de, {
            href: l,
            openInNewTab: !0,
            children: r(c.a, {
              ...g,
              ...k,
              className: `${Y(ol, ...T, "framer-136ur2m", f, x)} framer-z75xl4`,
              "data-framer-name": "Desktop",
              layoutDependency: w,
              layoutId: "c9NmXTb9f",
              ref: a ?? F,
              style: { ...i },
              ...fa(
                {
                  "c9NmXTb9f-hover": { "data-framer-name": void 0 },
                  "c9NmXTb9f-pressed": { "data-framer-name": void 0 },
                },
                u,
                L
              ),
              children: r(V, {
                __fromCanvasComponent: !0,
                children: r(h, {
                  children: r(c.p, {
                    style: {
                      "--font-selector": "R0Y7V29yayBTYW5zLTYwMA==",
                      "--framer-font-family":
                        '"Work Sans", "Work Sans Placeholder", sans-serif',
                      "--framer-font-size": "20px",
                      "--framer-font-weight": "600",
                      "--framer-letter-spacing": "0px",
                      "--framer-line-height": "1em",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(9, 9, 11)))",
                    },
                    children: "App",
                  }),
                }),
                className: "framer-1onfu5f",
                fonts: ["GF;Work Sans-600"],
                layoutDependency: w,
                layoutId: "meGVBFlLN",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(9, 9, 11))",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: p,
                variants: {
                  "c9NmXTb9f-hover": {
                    "--extracted-r6o4lv":
                      "var(--token-5af81502-6008-4737-b4fe-6bbdf28f9dd9, rgb(231, 184, 255))",
                  },
                  "c9NmXTb9f-pressed": {
                    "--extracted-r6o4lv":
                      "var(--token-0d1a1c98-1a46-4258-a116-f6ae8b80fe18, rgb(200, 138, 230))",
                  },
                },
                verticalAlignment: "top",
                withExternalLayout: !0,
                ...fa(
                  {
                    "c9NmXTb9f-hover": {
                      children: r(h, {
                        children: r(c.p, {
                          style: {
                            "--font-selector": "R0Y7V29yayBTYW5zLTYwMA==",
                            "--framer-font-family":
                              '"Work Sans", "Work Sans Placeholder", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-font-weight": "600",
                            "--framer-letter-spacing": "0px",
                            "--framer-line-height": "1em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-5af81502-6008-4737-b4fe-6bbdf28f9dd9, rgb(231, 184, 255)))",
                          },
                          children: "Text",
                        }),
                      }),
                    },
                    "c9NmXTb9f-pressed": {
                      children: r(h, {
                        children: r(c.p, {
                          style: {
                            "--font-selector": "R0Y7V29yayBTYW5zLTYwMA==",
                            "--framer-font-family":
                              '"Work Sans", "Work Sans Placeholder", sans-serif',
                            "--framer-font-size": "20px",
                            "--framer-font-weight": "600",
                            "--framer-letter-spacing": "0px",
                            "--framer-line-height": "1em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-0d1a1c98-1a46-4258-a116-f6ae8b80fe18, rgb(200, 138, 230)))",
                          },
                          children: "Text",
                        }),
                      }),
                    },
                  },
                  u,
                  L
                ),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  pl = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-68IE6.framer-z75xl4, .framer-68IE6 .framer-z75xl4 { display: block; }",
    ".framer-68IE6.framer-136ur2m { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-68IE6 .framer-1onfu5f { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-68IE6.framer-136ur2m { gap: 0px; } .framer-68IE6.framer-136ur2m > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-68IE6.framer-136ur2m > :first-child { margin-top: 0px; } .framer-68IE6.framer-136ur2m > :last-child { margin-bottom: 0px; } }",
  ],
  gr = Z(dl, pl, "framer-68IE6"),
  Re = gr;
gr.displayName = "FooterButton";
gr.defaultProps = { height: 20, width: 42 };
j(gr, {
  EKhY4kdth: {
    defaultValue: "Text",
    displayTextArea: !1,
    title: "Content",
    type: m.String,
  },
  dkcobjq2j: { title: "Link", type: m.Link },
});
Q(
  gr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQNi0Dp6_cOyA.woff2",
          weight: "600",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ul = ["qAIm_MYbS"],
  hl = "framer-fGkaJ",
  gl = { qAIm_MYbS: "framer-v-1q5cy96" };
var xl = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  yl = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  vl = c(h),
  wl = ({ height: t, id: a, width: o, ...n }) => ({ ...n }),
  bl = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  kl = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      { style: i, className: f, layoutId: s, variant: d, ...p } = wl(t),
      {
        baseVariant: l,
        classNames: g,
        clearLoadingGesture: u,
        gestureHandlers: x,
        gestureVariant: y,
        isLoading: k,
        setGestureState: L,
        setVariant: S,
        variants: M,
      } = te({
        cycleOrder: ul,
        defaultVariant: "qAIm_MYbS",
        variant: d,
        variantClassNames: gl,
      }),
      v = bl(t, M),
      C = N(null),
      w = X(),
      F = [],
      e = re();
    return r(z, {
      id: s ?? w,
      children: r(vl, {
        animate: M,
        initial: !1,
        children: r(yl, {
          value: xl,

        }),
      }),
    });
  }),
  Sl = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-fGkaJ.framer-1mkcfa2, .framer-fGkaJ .framer-1mkcfa2 { display: block; }",
    ".framer-fGkaJ.framer-1q5cy96 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 31px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 150px; }",
    ".framer-fGkaJ .framer-1bc6qrf { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fGkaJ.framer-1q5cy96 { gap: 0px; } .framer-fGkaJ.framer-1q5cy96 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-fGkaJ.framer-1q5cy96 > :first-child { margin-left: 0px; } .framer-fGkaJ.framer-1q5cy96 > :last-child { margin-right: 0px; } }",
  ],
  _r = Z(kl, Sl, "framer-fGkaJ"),
  St = _r;
_r.displayName = "daoMail";
_r.defaultProps = { height: 31, width: 150 };
Q(
  _r,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXNi0Dp6_cOyA.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Fl = O(kt),
  Cl = O(St),
  Kl = O(Re),
  Tl = Wr(c.div),
  Ll = ["ThbI0zmbW", "VL4LGYHBt", "Xetn5TI4F"],
  Pl = "framer-Smea9",
  Ml = {
    ThbI0zmbW: "framer-v-1e9fi4d",
    VL4LGYHBt: "framer-v-1w6sd5u",
    Xetn5TI4F: "framer-v-uv22p4",
  };
function Ke(t, ...a) {
  let o = {};
  return a?.forEach((n) => n && Object.assign(o, t[n])), o;
}
var Vl = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Al = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  Rl = c.create(h),
  Il = { Desktop: "ThbI0zmbW", Phone: "Xetn5TI4F", Tablet: "VL4LGYHBt" },
  Nl = ({ height: t, id: a, width: o, ...n }) => {
    var i, f;
    return {
      ...n,
      variant:
        (f = (i = Il[n.variant]) !== null && i !== void 0 ? i : n.variant) !==
          null && f !== void 0
          ? f
          : "ThbI0zmbW",
    };
  },
  Wl = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  Bl = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      { style: i, className: f, layoutId: s, variant: d, ...p } = Nl(t),
      {
        baseVariant: l,
        classNames: g,
        clearLoadingGesture: u,
        gestureHandlers: x,
        gestureVariant: y,
        isLoading: k,
        setGestureState: L,
        setVariant: S,
        variants: M,
      } = te({
        cycleOrder: Ll,
        defaultVariant: "ThbI0zmbW",
        variant: d,
        variantClassNames: Ml,
      }),
      v = Wl(t, M),
      C = N(null),
      w = X(),
      F = [],
      e = re();
    return r(z, {
      id: s ?? w,
      children: r(Rl, {
        animate: M,
        initial: !1,
        children: r(Al, {
          value: Vl,
          children: r(c.div, {
            ...p,
            ...x,
            className: Y(Pl, ...F, "framer-1e9fi4d", f, g),
            "data-framer-name": "Desktop",
            layoutDependency: v,
            layoutId: "ThbI0zmbW",
            ref: a ?? C,
            style: { ...i },
            ...Ke(
              {
                VL4LGYHBt: { "data-framer-name": "Tablet" },
                Xetn5TI4F: { "data-framer-name": "Phone" },
              },
              l,
              y
            ),
            children: r(c.div, {
              className: "framer-13ezbwf",
              layoutDependency: v,
              layoutId: "vRcOM5M6c",
              children: b(Tl, {
                className: "framer-1q00onr",
                "data-framer-name": "Stack",
                layoutDependency: v,
                layoutId: "p4yIVMAg7",
                children: [
                  b(c.div, {
                    className: "framer-g55b9z",
                    layoutDependency: v,
                    layoutId: "mAq7Dp9vf",
                    children: [
                      r(P, {
                        height: 80,
                        width: "200px",
                        y:
                          (e?.y || 0) +
                          0 +
                          (((e?.height || 300) -
                            0 -
                            (((e?.height || 300) - 0) * 1 + 0)) /
                            2 +
                            0 +
                            0) +
                          0 +
                          ((((e?.height || 300) - 0) * 1 -
                            0 -
                            ((((e?.height || 300) - 0) * 1 - 0) * 1 + 0)) /
                            2 +
                            0 +
                            0) +
                          ((((e?.height || 300) - 0) * 1 - 0) *
                            1 *
                            0.5000000000000002 -
                            ((((e?.height || 300) - 0) * 1 - 0) * 1 * 1) / 2) +
                          40 +
                          0,
                        ...Ke(
                          {
                            VL4LGYHBt: {
                              width: "140px",
                              y:
                                (e?.y || 0) +
                                0 +
                                (((e?.height || 300) -
                                  0 -
                                  (((e?.height || 300) - 0) * 1 + 0)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                ((((e?.height || 300) - 0) * 1 -
                                  0 -
                                  ((((e?.height || 300) - 0) * 1 - 0) * 1 +
                                    0)) /
                                  2 +
                                  0 +
                                  0) +
                                ((((e?.height || 300) - 0) * 1 - 0) *
                                  1 *
                                  0.49666666666666687 -
                                  ((((e?.height || 300) - 0) * 1 - 0) * 1 * 1) /
                                    2) +
                                40 +
                                0,
                            },
                            Xetn5TI4F: {
                              y:
                                (e?.y || 0) +
                                0 +
                                (((e?.height || 700) -
                                  0 -
                                  (Math.max(
                                    0,
                                    ((e?.height || 700) - 0 - 0) / 1
                                  ) *
                                    1 +
                                    0)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                ((Math.max(
                                  0,
                                  ((e?.height || 700) - 0 - 0) / 1
                                ) *
                                  1 -
                                  0 -
                                  ((Math.max(
                                    0,
                                    ((e?.height || 700) - 0 - 0) / 1
                                  ) *
                                    1 -
                                    0) *
                                    1 +
                                    0)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                0 +
                                0 +
                                0,
                            },
                          },
                          l,
                          y
                        ),
                        children: r(c.div, {
                          className: "framer-taashs-container",
                          layoutDependency: v,
                          layoutId: "G6xinTGeD-container",
                          children: r(kt, {
                            height: "100%",
                            id: "G6xinTGeD",
                            layoutId: "G6xinTGeD",
                            style: { width: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                      r(P, {
                        height: 31,
                        y:
                          (e?.y || 0) +
                          0 +
                          (((e?.height || 300) -
                            0 -
                            (((e?.height || 300) - 0) * 1 + 0)) /
                            2 +
                            0 +
                            0) +
                          0 +
                          ((((e?.height || 300) - 0) * 1 -
                            0 -
                            ((((e?.height || 300) - 0) * 1 - 0) * 1 + 0)) /
                            2 +
                            0 +
                            0) +
                          ((((e?.height || 300) - 0) * 1 - 0) *
                            1 *
                            0.5000000000000002 -
                            ((((e?.height || 300) - 0) * 1 - 0) * 1 * 1) / 2) +
                          40 +
                          180,
                        ...Ke(
                          {
                            VL4LGYHBt: {
                              y:
                                (e?.y || 0) +
                                0 +
                                (((e?.height || 300) -
                                  0 -
                                  (((e?.height || 300) - 0) * 1 + 0)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                ((((e?.height || 300) - 0) * 1 -
                                  0 -
                                  ((((e?.height || 300) - 0) * 1 - 0) * 1 +
                                    0)) /
                                  2 +
                                  0 +
                                  0) +
                                ((((e?.height || 300) - 0) * 1 - 0) *
                                  1 *
                                  0.49666666666666687 -
                                  ((((e?.height || 300) - 0) * 1 - 0) * 1 * 1) /
                                    2) +
                                40 +
                                173,
                            },
                            Xetn5TI4F: {
                              y:
                                (e?.y || 0) +
                                0 +
                                (((e?.height || 700) -
                                  0 -
                                  (Math.max(
                                    0,
                                    ((e?.height || 700) - 0 - 0) / 1
                                  ) *
                                    1 +
                                    0)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                ((Math.max(
                                  0,
                                  ((e?.height || 700) - 0 - 0) / 1
                                ) *
                                  1 -
                                  0 -
                                  ((Math.max(
                                    0,
                                    ((e?.height || 700) - 0 - 0) / 1
                                  ) *
                                    1 -
                                    0) *
                                    1 +
                                    0)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                0 +
                                0 +
                                80,
                            },
                          },
                          l,
                          y
                        ),
                        children: r(c.div, {
                          className: "framer-1t07xos-container",
                          layoutDependency: v,
                          layoutId: "fmFuPV3y0-container",
                          children: r(St, {
                            height: "100%",
                            id: "fmFuPV3y0",
                            layoutId: "fmFuPV3y0",
                            style: { height: "100%" },
                            width: "100%",
                          }),
                        }),
                      }),
                    ],
                  }),
                  b(c.div, {
                    className: "framer-gvvrmn",
                    layoutDependency: v,
                    layoutId: "k3HRrIiYo",
                    children: [
                      b(c.div, {
                        className: "framer-142xyji",
                        layoutDependency: v,
                        layoutId: "QhpQR10uz",
                        children: [
                          r(V, {
                            __fromCanvasComponent: !0,
                            children: r(h, {
                              children: r(c.p, {
                                style: {
                                  "--font-selector": "R0Y7V29yayBTYW5zLTMwMA==",
                                  "--framer-font-family":
                                    '"Work Sans", "Work Sans Placeholder", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-font-weight": "300",
                                  "--framer-letter-spacing": "0px",
                                  "--framer-line-height": "1em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(9, 9, 11)))",
                                },
                                children: "Products",
                              }),
                            }),
                            className: "framer-19vjvti",
                            fonts: ["GF;Work Sans-300"],
                            layoutDependency: v,
                            layoutId: "oX287i0S8",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(9, 9, 11))",
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          r(P, {
                            height: 23,
                            width: "135px",
                            y:
                              (e?.y || 0) +
                              0 +
                              (((e?.height || 300) -
                                0 -
                                (((e?.height || 300) - 0) * 1 + 0)) /
                                2 +
                                0 +
                                0) +
                              0 +
                              ((((e?.height || 300) - 0) * 1 -
                                0 -
                                ((((e?.height || 300) - 0) * 1 - 0) * 1 + 0)) /
                                2 +
                                0 +
                                0) +
                              0 +
                              40 +
                              (0 *
                                (((((e?.height || 300) - 0) * 1 - 0) * 1 * 1 -
                                  40 -
                                  0) /
                                  2) +
                                0) +
                              0 +
                              30,
                            ...Ke(
                              {
                                VL4LGYHBt: {
                                  y:
                                    (e?.y || 0) +
                                    0 +
                                    (((e?.height || 300) -
                                      0 -
                                      (((e?.height || 300) - 0) * 1 + 0)) /
                                      2 +
                                      0 +
                                      0) +
                                    0 +
                                    ((((e?.height || 300) - 0) * 1 -
                                      0 -
                                      ((((e?.height || 300) - 0) * 1 - 0) * 1 +
                                        0)) /
                                      2 +
                                      0 +
                                      0) +
                                    ((((e?.height || 300) - 0) * 1 - 0) *
                                      1 *
                                      0.5000000000000002 -
                                      ((((e?.height || 300) - 0) * 1 - 0) *
                                        1 *
                                        1) /
                                        2) +
                                    40 +
                                    (0 *
                                      (((((e?.height || 300) - 0) * 1 - 0) *
                                        1 *
                                        1 -
                                        40 -
                                        0) /
                                        2) +
                                      0) +
                                    0 +
                                    30,
                                },
                                Xetn5TI4F: {
                                  y:
                                    (e?.y || 0) +
                                    0 +
                                    (((e?.height || 700) -
                                      0 -
                                      (Math.max(
                                        0,
                                        ((e?.height || 700) - 0 - 0) / 1
                                      ) *
                                        1 +
                                        0)) /
                                      2 +
                                      0 +
                                      0) +
                                    0 +
                                    ((Math.max(
                                      0,
                                      ((e?.height || 700) - 0 - 0) / 1
                                    ) *
                                      1 -
                                      0 -
                                      ((Math.max(
                                        0,
                                        ((e?.height || 700) - 0 - 0) / 1
                                      ) *
                                        1 -
                                        0) *
                                        1 +
                                        0)) /
                                      2 +
                                      0 +
                                      0) +
                                    0 +
                                    (0 +
                                      ((Math.max(
                                        0,
                                        ((e?.height || 700) - 0 - 0) / 1
                                      ) *
                                        1 -
                                        0) *
                                        1 -
                                        0) *
                                        0.2 +
                                      0) +
                                    20 +
                                    (0 *
                                      ((((Math.max(
                                        0,
                                        ((e?.height || 700) - 0 - 0) / 1
                                      ) *
                                        1 -
                                        0) *
                                        1 -
                                        0) *
                                        0.8 -
                                        20 -
                                        80) /
                                        5) +
                                      0) +
                                    0 +
                                    30,
                                },
                              },
                              l,
                              y
                            ),
                            children: r(c.div, {
                              className: "framer-vctgnd-container",
                              layoutDependency: v,
                              layoutId: "nzyVnm3U9-container",
                              children: r(Re, {
                                dkcobjq2j: "https://shp-fi.vercel.app//",
                                EKhY4kdth: "Yield Chasing",
                                height: "100%",
                                id: "nzyVnm3U9",
                                layoutId: "nzyVnm3U9",
                                style: { height: "100%", width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          r(P, {
                            height: 23,
                            width: "65px",
                            y:
                              (e?.y || 0) +
                              0 +
                              (((e?.height || 300) -
                                0 -
                                (((e?.height || 300) - 0) * 1 + 0)) /
                                2 +
                                0 +
                                0) +
                              0 +
                              ((((e?.height || 300) - 0) * 1 -
                                0 -
                                ((((e?.height || 300) - 0) * 1 - 0) * 1 + 0)) /
                                2 +
                                0 +
                                0) +
                              0 +
                              40 +
                              (0 *
                                (((((e?.height || 300) - 0) * 1 - 0) * 1 * 1 -
                                  40 -
                                  0) /
                                  2) +
                                0) +
                              0 +
                              63,
                            ...Ke(
                              {
                                VL4LGYHBt: {
                                  y:
                                    (e?.y || 0) +
                                    0 +
                                    (((e?.height || 300) -
                                      0 -
                                      (((e?.height || 300) - 0) * 1 + 0)) /
                                      2 +
                                      0 +
                                      0) +
                                    0 +
                                    ((((e?.height || 300) - 0) * 1 -
                                      0 -
                                      ((((e?.height || 300) - 0) * 1 - 0) * 1 +
                                        0)) /
                                      2 +
                                      0 +
                                      0) +
                                    ((((e?.height || 300) - 0) * 1 - 0) *
                                      1 *
                                      0.5000000000000002 -
                                      ((((e?.height || 300) - 0) * 1 - 0) *
                                        1 *
                                        1) /
                                        2) +
                                    40 +
                                    (0 *
                                      (((((e?.height || 300) - 0) * 1 - 0) *
                                        1 *
                                        1 -
                                        40 -
                                        0) /
                                        2) +
                                      0) +
                                    0 +
                                    63,
                                },
                                Xetn5TI4F: {
                                  y:
                                    (e?.y || 0) +
                                    0 +
                                    (((e?.height || 700) -
                                      0 -
                                      (Math.max(
                                        0,
                                        ((e?.height || 700) - 0 - 0) / 1
                                      ) *
                                        1 +
                                        0)) /
                                      2 +
                                      0 +
                                      0) +
                                    0 +
                                    ((Math.max(
                                      0,
                                      ((e?.height || 700) - 0 - 0) / 1
                                    ) *
                                      1 -
                                      0 -
                                      ((Math.max(
                                        0,
                                        ((e?.height || 700) - 0 - 0) / 1
                                      ) *
                                        1 -
                                        0) *
                                        1 +
                                        0)) /
                                      2 +
                                      0 +
                                      0) +
                                    0 +
                                    (0 +
                                      ((Math.max(
                                        0,
                                        ((e?.height || 700) - 0 - 0) / 1
                                      ) *
                                        1 -
                                        0) *
                                        1 -
                                        0) *
                                        0.2 +
                                      0) +
                                    20 +
                                    (0 *
                                      ((((Math.max(
                                        0,
                                        ((e?.height || 700) - 0 - 0) / 1
                                      ) *
                                        1 -
                                        0) *
                                        1 -
                                        0) *
                                        0.8 -
                                        20 -
                                        80) /
                                        5) +
                                      0) +
                                    0 +
                                    63,
                                },
                              },
                              l,
                              y
                            ),
                            children: r(c.div, {
                              className: "framer-4scrgh-container",
                              layoutDependency: v,
                              layoutId: "BlkYebOpU-container",
                              children: r(Re, {
                                dkcobjq2j: "https://shp-fi.vercel.app//",
                                EKhY4kdth: "Vaults",
                                height: "100%",
                                id: "BlkYebOpU",
                                layoutId: "BlkYebOpU",
                                style: { height: "100%", width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),

                      r(c.div, {
                        className: "framer-1pqqxn9",
                        layoutDependency: v,
                        layoutId: "O1ZmA4Ly0",
                        children: b(c.div, {
                          className: "framer-adu784",
                          layoutDependency: v,
                          layoutId: "hxOgJCbGQ",
                          children: [
                            r(V, {
                              __fromCanvasComponent: !0,
                              children: r(h, {
                                children: r(c.p, {
                                  style: {
                                    "--font-selector":
                                      "R0Y7V29yayBTYW5zLTMwMA==",
                                    "--framer-font-family":
                                      '"Work Sans", "Work Sans Placeholder", sans-serif',
                                    "--framer-font-size": "20px",
                                    "--framer-font-weight": "300",
                                    "--framer-letter-spacing": "0px",
                                    "--framer-line-height": "1em",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(9, 9, 11)))",
                                  },
                                  children: "Connect",
                                }),
                              }),
                              className: "framer-1wizo8v",
                              fonts: ["GF;Work Sans-300"],
                              layoutDependency: v,
                              layoutId: "vyH2TJiWF",
                              style: {
                                "--extracted-r6o4lv":
                                  "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(9, 9, 11))",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                              },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                            r(P, {
                              height: 23,
                              width: "135px",
                              y:
                                (e?.y || 0) +
                                0 +
                                (((e?.height || 300) -
                                  0 -
                                  (((e?.height || 300) - 0) * 1 + 0)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                ((((e?.height || 300) - 0) * 1 -
                                  0 -
                                  ((((e?.height || 300) - 0) * 1 - 0) * 1 +
                                    0)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                40 +
                                (0 *
                                  (((((e?.height || 300) - 0) * 1 - 0) * 1 * 1 -
                                    40 -
                                    0) /
                                    2) +
                                  0) +
                                0 +
                                0 +
                                0 +
                                30,
                              ...Ke(
                                {
                                  VL4LGYHBt: {
                                    y:
                                      (e?.y || 0) +
                                      0 +
                                      (((e?.height || 300) -
                                        0 -
                                        (((e?.height || 300) - 0) * 1 + 0)) /
                                        2 +
                                        0 +
                                        0) +
                                      0 +
                                      ((((e?.height || 300) - 0) * 1 -
                                        0 -
                                        ((((e?.height || 300) - 0) * 1 - 0) *
                                          1 +
                                          0)) /
                                        2 +
                                        0 +
                                        0) +
                                      ((((e?.height || 300) - 0) * 1 - 0) *
                                        1 *
                                        0.5000000000000002 -
                                        ((((e?.height || 300) - 0) * 1 - 0) *
                                          1 *
                                          1) /
                                          2) +
                                      40 +
                                      (0 *
                                        (((((e?.height || 300) - 0) * 1 - 0) *
                                          1 *
                                          1 -
                                          40 -
                                          0) /
                                          2) +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      30,
                                  },
                                  Xetn5TI4F: {
                                    y:
                                      (e?.y || 0) +
                                      0 +
                                      (((e?.height || 700) -
                                        0 -
                                        (Math.max(
                                          0,
                                          ((e?.height || 700) - 0 - 0) / 1
                                        ) *
                                          1 +
                                          0)) /
                                        2 +
                                        0 +
                                        0) +
                                      0 +
                                      ((Math.max(
                                        0,
                                        ((e?.height || 700) - 0 - 0) / 1
                                      ) *
                                        1 -
                                        0 -
                                        ((Math.max(
                                          0,
                                          ((e?.height || 700) - 0 - 0) / 1
                                        ) *
                                          1 -
                                          0) *
                                          1 +
                                          0)) /
                                        2 +
                                        0 +
                                        0) +
                                      0 +
                                      (0 +
                                        ((Math.max(
                                          0,
                                          ((e?.height || 700) - 0 - 0) / 1
                                        ) *
                                          1 -
                                          0) *
                                          1 -
                                          0) *
                                          0.2 +
                                        0) +
                                      20 +
                                      (1 *
                                        ((((Math.max(
                                          0,
                                          ((e?.height || 700) - 0 - 0) / 1
                                        ) *
                                          1 -
                                          0) *
                                          1 -
                                          0) *
                                          0.8 -
                                          20 -
                                          80) /
                                          5) +
                                        20) +
                                      0 +
                                      0 +
                                      0 +
                                      30,
                                  },
                                },
                                l,
                                y
                              ),
                              children: r(c.div, {
                                className: "framer-1t2ikc1-container",
                                layoutDependency: v,
                                layoutId: "bqX9zAaln-container",
                                children: r(Re, {
                                  dkcobjq2j:
                                    "https://t.me",
                                  EKhY4kdth: "Telegram",
                                  height: "100%",
                                  id: "bqX9zAaln",
                                  layoutId: "bqX9zAaln",
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                            r(P, {
                              height: 23,
                              width: "135px",
                              y:
                                (e?.y || 0) +
                                0 +
                                (((e?.height || 300) -
                                  0 -
                                  (((e?.height || 300) - 0) * 1 + 0)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                ((((e?.height || 300) - 0) * 1 -
                                  0 -
                                  ((((e?.height || 300) - 0) * 1 - 0) * 1 +
                                    0)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                40 +
                                (0 *
                                  (((((e?.height || 300) - 0) * 1 - 0) * 1 * 1 -
                                    40 -
                                    0) /
                                    2) +
                                  0) +
                                0 +
                                0 +
                                0 +
                                63,
                              ...Ke(
                                {
                                  VL4LGYHBt: {
                                    y:
                                      (e?.y || 0) +
                                      0 +
                                      (((e?.height || 300) -
                                        0 -
                                        (((e?.height || 300) - 0) * 1 + 0)) /
                                        2 +
                                        0 +
                                        0) +
                                      0 +
                                      ((((e?.height || 300) - 0) * 1 -
                                        0 -
                                        ((((e?.height || 300) - 0) * 1 - 0) *
                                          1 +
                                          0)) /
                                        2 +
                                        0 +
                                        0) +
                                      ((((e?.height || 300) - 0) * 1 - 0) *
                                        1 *
                                        0.5000000000000002 -
                                        ((((e?.height || 300) - 0) * 1 - 0) *
                                          1 *
                                          1) /
                                          2) +
                                      40 +
                                      (0 *
                                        (((((e?.height || 300) - 0) * 1 - 0) *
                                          1 *
                                          1 -
                                          40 -
                                          0) /
                                          2) +
                                        0) +
                                      0 +
                                      0 +
                                      0 +
                                      63,
                                  },
                                  Xetn5TI4F: {
                                    y:
                                      (e?.y || 0) +
                                      0 +
                                      (((e?.height || 700) -
                                        0 -
                                        (Math.max(
                                          0,
                                          ((e?.height || 700) - 0 - 0) / 1
                                        ) *
                                          1 +
                                          0)) /
                                        2 +
                                        0 +
                                        0) +
                                      0 +
                                      ((Math.max(
                                        0,
                                        ((e?.height || 700) - 0 - 0) / 1
                                      ) *
                                        1 -
                                        0 -
                                        ((Math.max(
                                          0,
                                          ((e?.height || 700) - 0 - 0) / 1
                                        ) *
                                          1 -
                                          0) *
                                          1 +
                                          0)) /
                                        2 +
                                        0 +
                                        0) +
                                      0 +
                                      (0 +
                                        ((Math.max(
                                          0,
                                          ((e?.height || 700) - 0 - 0) / 1
                                        ) *
                                          1 -
                                          0) *
                                          1 -
                                          0) *
                                          0.2 +
                                        0) +
                                      20 +
                                      (1 *
                                        ((((Math.max(
                                          0,
                                          ((e?.height || 700) - 0 - 0) / 1
                                        ) *
                                          1 -
                                          0) *
                                          1 -
                                          0) *
                                          0.8 -
                                          20 -
                                          80) /
                                          5) +
                                        20) +
                                      0 +
                                      0 +
                                      0 +
                                      63,
                                  },
                                },
                                l,
                                y
                              ),
                              children: r(c.div, {
                                className: "framer-476ofs-container",
                                layoutDependency: v,
                                layoutId: "ajIDE_Ov6-container",
                                children: r(Re, {
                                  dkcobjq2j: "https://x.com/",
                                  EKhY4kdth: "Twitter",
                                  height: "100%",
                                  id: "ajIDE_Ov6",
                                  layoutId: "ajIDE_Ov6",
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),

                    ],
                  }),
                ],
              }),
            }),
          }),
        }),
      }),
    });
  }),
  _l = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Smea9.framer-16a7btt, .framer-Smea9 .framer-16a7btt { display: block; }",
    ".framer-Smea9.framer-1e9fi4d { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 300px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1160px; }",
    ".framer-Smea9 .framer-13ezbwf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-Smea9 .framer-1q00onr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Smea9 .framer-g55b9z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: 100%; justify-content: flex-start; left: 0px; overflow: hidden; padding: 40px 0px 40px 0px; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 42%; z-index: 1; }",
    ".framer-Smea9 .framer-taashs-container { flex: none; height: auto; position: relative; width: 200px; }",
    ".framer-Smea9 .framer-1t07xos-container { flex: none; height: 31px; position: relative; width: auto; }",
    ".framer-Smea9 .framer-gvvrmn { display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: 100%; justify-content: center; overflow: hidden; padding: 40px 0px 0px 0px; position: absolute; right: 0px; top: 0px; width: 58%; z-index: 1; }",
    ".framer-Smea9 .framer-142xyji, .framer-Smea9 .framer-qjmh4c, .framer-Smea9 .framer-w4yin8, .framer-Smea9 .framer-46klql { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 201px; }",
    ".framer-Smea9 .framer-19vjvti, .framer-Smea9 .framer-kc2e19, .framer-Smea9 .framer-1wizo8v, .framer-Smea9 .framer-1codn9d, .framer-Smea9 .framer-1ni5wpm { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-Smea9 .framer-vctgnd-container, .framer-Smea9 .framer-ipl9w-container, .framer-Smea9 .framer-1t2ikc1-container, .framer-Smea9 .framer-476ofs-container, .framer-Smea9 .framer-16oo5u4-container, .framer-Smea9 .framer-39cg0x-container { flex: none; height: 23px; position: relative; width: 135px; }",
    ".framer-Smea9 .framer-4scrgh-container { flex: none; height: 23px; position: relative; width: 65px; }",
    ".framer-Smea9 .framer-1pqqxn9 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Smea9 .framer-adu784 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Smea9 .framer-1uzy51w-container, .framer-Smea9 .framer-19qgg6e-container { flex: none; height: 23px; position: relative; width: 100px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Smea9.framer-1e9fi4d, .framer-Smea9 .framer-13ezbwf, .framer-Smea9 .framer-1q00onr, .framer-Smea9 .framer-g55b9z, .framer-Smea9 .framer-142xyji, .framer-Smea9 .framer-qjmh4c, .framer-Smea9 .framer-1pqqxn9, .framer-Smea9 .framer-adu784, .framer-Smea9 .framer-w4yin8, .framer-Smea9 .framer-46klql { gap: 0px; } .framer-Smea9.framer-1e9fi4d > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Smea9.framer-1e9fi4d > :first-child, .framer-Smea9 .framer-13ezbwf > :first-child, .framer-Smea9 .framer-g55b9z > :first-child, .framer-Smea9 .framer-142xyji > :first-child, .framer-Smea9 .framer-qjmh4c > :first-child, .framer-Smea9 .framer-1pqqxn9 > :first-child, .framer-Smea9 .framer-adu784 > :first-child, .framer-Smea9 .framer-w4yin8 > :first-child, .framer-Smea9 .framer-46klql > :first-child { margin-top: 0px; } .framer-Smea9.framer-1e9fi4d > :last-child, .framer-Smea9 .framer-13ezbwf > :last-child, .framer-Smea9 .framer-g55b9z > :last-child, .framer-Smea9 .framer-142xyji > :last-child, .framer-Smea9 .framer-qjmh4c > :last-child, .framer-Smea9 .framer-1pqqxn9 > :last-child, .framer-Smea9 .framer-adu784 > :last-child, .framer-Smea9 .framer-w4yin8 > :last-child, .framer-Smea9 .framer-46klql > :last-child { margin-bottom: 0px; } .framer-Smea9 .framer-13ezbwf > *, .framer-Smea9 .framer-142xyji > *, .framer-Smea9 .framer-qjmh4c > *, .framer-Smea9 .framer-1pqqxn9 > *, .framer-Smea9 .framer-adu784 > *, .framer-Smea9 .framer-w4yin8 > *, .framer-Smea9 .framer-46klql > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Smea9 .framer-1q00onr > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Smea9 .framer-1q00onr > :first-child { margin-left: 0px; } .framer-Smea9 .framer-1q00onr > :last-child { margin-right: 0px; } .framer-Smea9 .framer-g55b9z > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } }",
    ".framer-Smea9.framer-v-1w6sd5u.framer-1e9fi4d { width: 770px; }",
    ".framer-Smea9.framer-v-1w6sd5u .framer-g55b9z { gap: 93px; order: 0; padding: 40px 0px 40px 30px; top: calc(49.666666666666686% - 100% / 2); width: 25%; }",
    ".framer-Smea9.framer-v-1w6sd5u .framer-taashs-container { order: 0; width: 140px; }",
    ".framer-Smea9.framer-v-1w6sd5u .framer-1t07xos-container { order: 1; }",
    ".framer-Smea9.framer-v-1w6sd5u .framer-gvvrmn { left: 275px; order: 1; right: unset; top: calc(50.00000000000002% - 100% / 2); width: 70%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Smea9.framer-v-1w6sd5u .framer-g55b9z { gap: 0px; } .framer-Smea9.framer-v-1w6sd5u .framer-g55b9z > * { margin: 0px; margin-bottom: calc(93px / 2); margin-top: calc(93px / 2); } .framer-Smea9.framer-v-1w6sd5u .framer-g55b9z > :first-child { margin-top: 0px; } .framer-Smea9.framer-v-1w6sd5u .framer-g55b9z > :last-child { margin-bottom: 0px; } }",
    ".framer-Smea9.framer-v-uv22p4.framer-1e9fi4d { height: 700px; width: 350px; }",
    ".framer-Smea9.framer-v-uv22p4 .framer-13ezbwf { flex: 1 0 0px; height: 1px; }",
    ".framer-Smea9.framer-v-uv22p4 .framer-1q00onr { flex-direction: column; }",
    ".framer-Smea9.framer-v-uv22p4 .framer-g55b9z { align-content: center; align-items: center; gap: 0px; height: 20%; left: unset; padding: 0px 0px 40px 0px; position: relative; top: unset; width: 100%; }",
    ".framer-Smea9.framer-v-uv22p4 .framer-gvvrmn { gap: 20px; grid-template-columns: repeat(1, minmax(50px, 1fr)); height: 80%; padding: 20px 0px 0px 40px; position: relative; right: unset; top: unset; width: 100%; }",
    ".framer-Smea9.framer-v-uv22p4 .framer-142xyji { order: 0; width: 200px; }",
    ".framer-Smea9.framer-v-uv22p4 .framer-qjmh4c { order: 4; width: 200px; z-index: 1; }",
    ".framer-Smea9.framer-v-uv22p4 .framer-1pqqxn9 { order: 1; width: 200px; }",
    ".framer-Smea9.framer-v-uv22p4 .framer-adu784 { order: 0; }",
    ".framer-Smea9.framer-v-uv22p4 .framer-w4yin8 { order: 2; width: 200px; }",
    ".framer-Smea9.framer-v-uv22p4 .framer-46klql { order: 3; width: 200px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Smea9.framer-v-uv22p4 .framer-1q00onr, .framer-Smea9.framer-v-uv22p4 .framer-g55b9z, .framer-Smea9.framer-v-uv22p4 .framer-gvvrmn { gap: 0px; } .framer-Smea9.framer-v-uv22p4 .framer-1q00onr > *, .framer-Smea9.framer-v-uv22p4 .framer-g55b9z > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Smea9.framer-v-uv22p4 .framer-1q00onr > :first-child, .framer-Smea9.framer-v-uv22p4 .framer-g55b9z > :first-child { margin-top: 0px; } .framer-Smea9.framer-v-uv22p4 .framer-1q00onr > :last-child, .framer-Smea9.framer-v-uv22p4 .framer-g55b9z > :last-child { margin-bottom: 0px; } .framer-Smea9.framer-v-uv22p4 .framer-gvvrmn > *, .framer-Smea9.framer-v-uv22p4 .framer-gvvrmn > :first-child, .framer-Smea9.framer-v-uv22p4 .framer-gvvrmn > :last-child { margin: 0px; } }",
  ],
  xr = Z(Bl, _l, "framer-Smea9"),
  Ft = xr;
xr.displayName = "Footer";
xr.defaultProps = { height: 300, width: 1160 };
j(xr, {
  variant: {
    options: ["ThbI0zmbW", "VL4LGYHBt", "Xetn5TI4F"],
    optionTitles: ["Desktop", "Tablet", "Phone"],
    title: "Variant",
    type: m.Enum,
  },
});
Q(
  xr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32KxfXNi0Dp6_cOyA.woff2",
          weight: "300",
        },
      ],
    },
    ...Fl,
    ...Cl,
    ...Kl,
  ],
  { supportsExplicitInterCodegen: !0 }
);
function Dr(t, a) {
  return (o) => {
    let n = o["data-framer-name"],
      [i, f] = xe("0%");
    async function s() {
      try {
        let p = await (await fetch("https://api.goat.fi/apy")).json(),
          l = (parseFloat(p[n]) * 100).toFixed(2) + "%";
        f(l);
      } catch (d) {
        return console.log("Error fetching data:", d), null;
      }
    }
    return (
      ce(() => {
        async function d() {
          await s();
        }
        d();
      }, [i]),
      r(t, { ...o, text: i })
    );
  };
}
var Dl = Dr(V),
  jl = "framer-20MOP",
  Ol = { KS5uTtgC9: "framer-v-1sbaom4" };
var zl = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" },
  pa = { bounce: 0.25, delay: 0, duration: 0.45, type: "spring" },
  El = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.02,
    skewX: 0,
    skewY: 0,
    transition: pa,
  },
  Hl = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.99,
    skewX: 0,
    skewY: 0,
    transition: pa,
  },
  da = (t, a) => `translate(-50%, -50%) ${a}`,
  Gl = ({ value: t, children: a }) => {
    let o = ee(_),
      n = t ?? o.transition,
      i = G(() => ({ ...o, transition: n }), [JSON.stringify(n)]);
    return r(_.Provider, { value: i, children: a });
  },
  ql = c.create(h),
  Ul = ({
    aRBVisible: t,
    availabilityText: a,
    background: o,
    bASEVisible: n,
    buttonColor: i,
    comingSoon: f,
    description: s,
    descriptionColor: d,
    enabled: p,
    eTHVisible: l,
    height: g,
    id: u,
    link: x,
    title: y,
    titleColor: k,
    width: L,
    ...S
  }) => {
    var M, v, C, w, F, e, T, K, W, R, q;
    return {
      ...S,
      hHCmRy2Rn: (M = y ?? S.hHCmRy2Rn) !== null && M !== void 0 ? M : "ycsETH",
      hSnfEaKvA: x ?? S.hSnfEaKvA,
      HSpg_pEPX: (v = l ?? S.HSpg_pEPX) !== null && v !== void 0 ? v : !0,
      iHFdtlZG4:
        (C = k ?? S.iHFdtlZG4) !== null && C !== void 0
          ? C
          : "rgb(255, 255, 255)",
      OHvC2RhVq:
        (w = i ?? S.OHvC2RhVq) !== null && w !== void 0 ? w : "rgb(94, 94, 94)",
      osmSB77W4: (F = t ?? S.osmSB77W4) !== null && F !== void 0 ? F : !0,
      Qo1Z3bd09: (e = n ?? S.Qo1Z3bd09) !== null && e !== void 0 ? e : !0,
      t05M8nrya:
        (T = s ?? S.t05M8nrya) !== null && T !== void 0
          ? T
          : "Chases the best ETH yield on Silo Finance",
      uwbZ09m4I:
        (K = a ?? S.uwbZ09m4I) !== null && K !== void 0 ? K : "Available on",
      vZA4LVREg:
        (W = d ?? S.vZA4LVREg) !== null && W !== void 0
          ? W
          : "rgb(255, 255, 255)",
      WvWMG8I9_: f ?? S.WvWMG8I9_,
      XBgGPxY0A: (R = p ?? S.XBgGPxY0A) !== null && R !== void 0 ? R : !0,
      YWksHUg5O:
        (q = o ?? S.YWksHUg5O) !== null && q !== void 0
          ? q
          : "rgb(114, 114, 117)",
    };
  },
  Yl = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  Xl = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      {
        style: i,
        className: f,
        layoutId: s,
        variant: d,
        YWksHUg5O: p,
        hHCmRy2Rn: l,
        iHFdtlZG4: g,
        t05M8nrya: u,
        vZA4LVREg: x,
        OHvC2RhVq: y,
        uwbZ09m4I: k,
        osmSB77W4: L,
        Qo1Z3bd09: S,
        HSpg_pEPX: M,
        XBgGPxY0A: v,
        WvWMG8I9_: C,
        hSnfEaKvA: w,
        ...F
      } = Ul(t),
      {
        baseVariant: e,
        classNames: T,
        clearLoadingGesture: K,
        gestureHandlers: W,
        gestureVariant: R,
        isLoading: q,
        setGestureState: le,
        setVariant: me,
        variants: se,
      } = te({
        defaultVariant: "KS5uTtgC9",
        variant: d,
        variantClassNames: Ol,
      }),
      U = Yl(t, se),
      ye = N(null),
      he = X(),
      ke = [],
      E = re();
    return r(z, {
      id: s ?? he,
      children: r(ql, {
        animate: se,
        initial: !1,
        children: r(Gl, {
          value: zl,
          children: r(c.div, {
            ...F,
            ...W,
            className: Y(jl, ...ke, "framer-1sbaom4", f, T),
            "data-framer-name": "Variant 1",
            layoutDependency: U,
            layoutId: "KS5uTtgC9",
            ref: a ?? ye,
            style: {
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              ...i,
            },
            children: b(c.div, {
              className: "framer-1trso8u",
              layoutDependency: U,
              layoutId: "sMPmIZi6P",
              style: { backgroundColor: p },
              children: [
                r(V, {
                  __fromCanvasComponent: !0,
                  children: r(h, {
                    children: r(c.p, {
                      style: {
                        "--font-selector": "RlM7V29yayBTYW5zLXNlbWlib2xk",
                        "--framer-font-family":
                          '"Work Sans", "Work Sans Placeholder", sans-serif',
                        "--framer-font-size": "24px",
                        "--framer-font-weight": "600",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--variable-reference-iHFdtlZG4-Z1oAFu0Tc))",
                      },
                      children: "ycsETH",
                    }),
                  }),
                  className: "framer-1nm5j3x",
                  fonts: ["FS;Work Sans-semibold"],
                  layoutDependency: U,
                  layoutId: "bk0XQA5Ni",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--variable-reference-iHFdtlZG4-Z1oAFu0Tc)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--variable-reference-iHFdtlZG4-Z1oAFu0Tc": g,
                  },
                  text: l,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                r(V, {
                  __fromCanvasComponent: !0,
                  children: r(h, {
                    children: r(c.p, {
                      style: {
                        "--font-selector": "RlM7V29yayBTYW5zLXJlZ3VsYXI=",
                        "--framer-font-family":
                          '"Work Sans", "Work Sans Placeholder", sans-serif',
                        "--framer-font-size": "18px",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--variable-reference-vZA4LVREg-Z1oAFu0Tc))",
                      },
                      children: "Chases the best ETH yield on Silo Finance",
                    }),
                  }),
                  className: "framer-19migr",
                  fonts: ["FS;Work Sans-regular"],
                  layoutDependency: U,
                  layoutId: "EyEzSofJL",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--variable-reference-vZA4LVREg-Z1oAFu0Tc)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--variable-reference-vZA4LVREg-Z1oAFu0Tc": x,
                  },
                  text: u,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
                b(c.div, {
                  className: "framer-ttw2sc",
                  layoutDependency: U,
                  layoutId: "SDbSg0TWl",
                  children: [
                    r(Dl, {
                      __fromCanvasComponent: !0,
                      children: r(h, {
                        children: r(c.p, {
                          style: {
                            "--font-selector": "RlM7V29yayBTYW5zLXNlbWlib2xk",
                            "--framer-font-family":
                              '"Work Sans", "Work Sans Placeholder", sans-serif',
                            "--framer-font-size": "48px",
                            "--framer-font-weight": "600",
                            "--framer-line-height": "1em",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250)))",
                          },
                          children: "12%",
                        }),
                      }),
                      className: "framer-1r93kax",
                      "data-framer-name":
                        "0x878b7897C60fA51c2A7bfBdd4E3cB5708D9eEE43",
                      fonts: ["FS;Work Sans-semibold"],
                      layoutDependency: U,
                      layoutId: "nFvL2L92m",
                      style: {
                        "--extracted-r6o4lv":
                          "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    v &&
                      r(de, {
                        href: w,
                        openInNewTab: !0,
                        children: r(c.a, {
                          className: "framer-d9lweq framer-jhhn43",
                          "data-framer-name": "Deposit Button",
                          layoutDependency: U,
                          layoutId: "TNv084sy6",
                          style: {
                            backgroundColor: y,
                            borderBottomLeftRadius: 8,
                            borderBottomRightRadius: 8,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                          },
                          whileHover: El,
                          whileTap: Hl,
                          children: r(V, {
                            __fromCanvasComponent: !0,
                            children: r(h, {
                              children: r(c.p, {
                                style: {
                                  "--font-selector":
                                    "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                  "--framer-font-family":
                                    '"Work Sans", "Work Sans Placeholder", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-font-weight": "500",
                                  "--framer-line-height": "1em",
                                  "--framer-text-alignment": "center",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: "Earn",
                              }),
                            }),
                            className: "framer-kplfq3",
                            fonts: ["FS;Work Sans-medium"],
                            layoutDependency: U,
                            layoutId: "tEGGEn6WE",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 255, 255)",
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                            },
                            transformTemplate: da,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                    C &&
                      r(c.div, {
                        className: "framer-yexfms",
                        "data-framer-name": "Coming Soon",
                        layoutDependency: U,
                        layoutId: "aNxul6kLv",
                        style: {
                          backgroundColor: y,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        },
                        children: r(V, {
                          __fromCanvasComponent: !0,
                          children: r(h, {
                            children: r(c.p, {
                              style: {
                                "--font-selector":
                                  "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                "--framer-font-family":
                                  '"Work Sans", "Work Sans Placeholder", sans-serif',
                                "--framer-font-size": "20px",
                                "--framer-font-weight": "500",
                                "--framer-line-height": "1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))",
                              },
                              children: "Coming Soon",
                            }),
                          }),
                          className: "framer-l6oujb",
                          fonts: ["FS;Work Sans-medium"],
                          layoutDependency: U,
                          layoutId: "eS5WJk9sm",
                          style: {
                            "--extracted-r6o4lv": "rgba(255, 255, 255, 0.6)",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                          },
                          transformTemplate: da,
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                  ],
                }),
                b(c.div, {
                  className: "framer-hrxydq",
                  layoutDependency: U,
                  layoutId: "LAcG225tp",
                  children: [
                    r(V, {
                      __fromCanvasComponent: !0,
                      children: r(h, {
                        children: r(c.p, {
                          style: {
                            "--font-selector": "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                            "--framer-font-family":
                              '"Work Sans", "Work Sans Placeholder", sans-serif',
                            "--framer-font-size": "14px",
                            "--framer-font-weight": "500",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250)))",
                          },
                          children: "Available on",
                        }),
                      }),
                      className: "framer-5b26kb",
                      fonts: ["FS;Work Sans-medium"],
                      layoutDependency: U,
                      layoutId: "Gwqli5Qru",
                      style: {
                        "--extracted-r6o4lv":
                          "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                      },
                      text: k,
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                    r(c.div, {
                      className: "framer-1ixtd3y",
                      "data-framer-name": "Bilder",
                      layoutDependency: U,
                      layoutId: "nbNiKIcTd",
                      children: b(c.div, {
                        className: "framer-1gfn9e9",
                        layoutDependency: U,
                        layoutId: "O8l5EYv6P",
                        children: [
                          L &&
                            r(c.div, {
                              className: "framer-17cki96",
                              layoutDependency: U,
                              layoutId: "MEdw1oMqo",
                              children: r($, {
                                background: {
                                  alt: "",
                                  fit: "stretch",
                                  loading: be(
                                    (E?.y || 0) +
                                      (0 +
                                        ((E?.height || 300) -
                                          0 -
                                          ((E?.height || 300) - 0) * 1) /
                                          2) +
                                      31 +
                                      0 +
                                      0 +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 2e3,
                                  pixelWidth: 2e3,
                                  positionX: "center",
                                  positionY: "center",
                                  sizes: "22px",
                                  src: "/images/9IveZW0oKNPx5qEMFfl7amGFdU.png",
                                  srcSet:
                                    "/images/9IveZW0oKNPx5qEMFfl7amGFdU.png?scale-down-to=512 512w,/images/9IveZW0oKNPx5qEMFfl7amGFdU.png?scale-down-to=1024 1024w,/images/9IveZW0oKNPx5qEMFfl7amGFdU.png 2000w",
                                },
                                className: "framer-1xaxxsk",
                                "data-framer-name": "Ellipse 1",
                                layoutDependency: U,
                                layoutId: "PqeqvlY_L",
                                style: {
                                  borderBottomLeftRadius: "100%",
                                  borderBottomRightRadius: "100%",
                                  borderTopLeftRadius: "100%",
                                  borderTopRightRadius: "100%",
                                },
                              }),
                            }),
                          S &&
                            r(c.div, {
                              className: "framer-198qoe1",
                              layoutDependency: U,
                              layoutId: "mvH6dBD5W",
                              children: r($, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: be(
                                    (E?.y || 0) +
                                      (0 +
                                        ((E?.height || 300) -
                                          0 -
                                          ((E?.height || 300) - 0) * 1) /
                                          2) +
                                      31 +
                                      0 +
                                      0 +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 460,
                                  pixelWidth: 460,
                                  src: "/images/FdUAVoqzdihfmlMbBfc2Br6GM.png",
                                },
                                className: "framer-1yl77ef",
                                "data-framer-name": "Ellipse 2",
                                layoutDependency: U,
                                layoutId: "HcXSinfPW",
                                style: {
                                  borderBottomLeftRadius: "100%",
                                  borderBottomRightRadius: "100%",
                                  borderTopLeftRadius: "100%",
                                  borderTopRightRadius: "100%",
                                },
                              }),
                            }),
                          M &&
                            r(c.div, {
                              className: "framer-n5ko2z",
                              layoutDependency: U,
                              layoutId: "TxroCtdTL",
                              children: r($, {
                                background: {
                                  alt: "",
                                  fit: "stretch",
                                  loading: be(
                                    (E?.y || 0) +
                                      (0 +
                                        ((E?.height || 300) -
                                          0 -
                                          ((E?.height || 300) - 0) * 1) /
                                          2) +
                                      31 +
                                      0 +
                                      0 +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 300,
                                  pixelWidth: 300,
                                  positionX: "center",
                                  positionY: "center",
                                  src: "/images/y3lMjzVgKvG9fwcByQQpzeTbw6M.png",
                                },
                                className: "framer-cf5b18",
                                "data-framer-name": "Ellipse 3",
                                layoutDependency: U,
                                layoutId: "HOTXU5e9b",
                                style: {
                                  borderBottomLeftRadius: "100%",
                                  borderBottomRightRadius: "100%",
                                  borderTopLeftRadius: "100%",
                                  borderTopRightRadius: "100%",
                                },
                              }),
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Jl = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-20MOP.framer-jhhn43, .framer-20MOP .framer-jhhn43 { display: block; }",
    ".framer-20MOP.framer-1sbaom4 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 300px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 307px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-20MOP .framer-1trso8u { flex: 1 0 0px; height: 100%; overflow: visible; position: relative; width: 1px; }",
    ".framer-20MOP .framer-1nm5j3x { flex: none; height: auto; left: 25px; position: absolute; top: 25px; white-space: pre; width: auto; }",
    ".framer-20MOP .framer-19migr { flex: none; height: 17%; left: 25px; position: absolute; top: 75px; white-space: pre-wrap; width: 79%; word-break: break-word; word-wrap: break-word; }",
    ".framer-20MOP .framer-ttw2sc { align-content: center; align-items: center; bottom: 25px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; width: 100%; }",
    ".framer-20MOP .framer-1r93kax, .framer-20MOP .framer-5b26kb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-20MOP .framer-d9lweq { -webkit-user-select: none; cursor: pointer; flex: none; height: 50px; overflow: visible; position: relative; text-decoration: none; user-select: none; width: 200px; }",
    ".framer-20MOP .framer-kplfq3, .framer-20MOP .framer-l6oujb { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }",
    ".framer-20MOP .framer-yexfms { flex: none; height: 50px; overflow: visible; position: relative; width: 200px; }",
    ".framer-20MOP .framer-hrxydq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 35px; top: 31px; width: min-content; }",
    ".framer-20MOP .framer-1ixtd3y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-20MOP .framer-1gfn9e9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-20MOP .framer-17cki96, .framer-20MOP .framer-198qoe1, .framer-20MOP .framer-n5ko2z { flex: none; height: 21px; overflow: visible; position: relative; width: 12px; }",
    ".framer-20MOP .framer-1xaxxsk, .framer-20MOP .framer-1yl77ef, .framer-20MOP .framer-cf5b18 { bottom: 0px; flex: none; left: 0px; position: absolute; right: -10px; top: 0px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-20MOP.framer-1sbaom4, .framer-20MOP .framer-ttw2sc, .framer-20MOP .framer-hrxydq, .framer-20MOP .framer-1ixtd3y, .framer-20MOP .framer-1gfn9e9 { gap: 0px; } .framer-20MOP.framer-1sbaom4 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-20MOP.framer-1sbaom4 > :first-child, .framer-20MOP .framer-hrxydq > :first-child, .framer-20MOP .framer-1ixtd3y > :first-child, .framer-20MOP .framer-1gfn9e9 > :first-child { margin-left: 0px; } .framer-20MOP.framer-1sbaom4 > :last-child, .framer-20MOP .framer-hrxydq > :last-child, .framer-20MOP .framer-1ixtd3y > :last-child, .framer-20MOP .framer-1gfn9e9 > :last-child { margin-right: 0px; } .framer-20MOP .framer-ttw2sc > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-20MOP .framer-ttw2sc > :first-child { margin-top: 0px; } .framer-20MOP .framer-ttw2sc > :last-child { margin-bottom: 0px; } .framer-20MOP .framer-hrxydq > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-20MOP .framer-1ixtd3y > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-20MOP .framer-1gfn9e9 > * { margin: 0px; margin-left: calc(2px / 2); margin-right: calc(2px / 2); } }",
  ],
  yr = Z(Xl, Jl, "framer-20MOP"),
  Ct = yr;
yr.displayName = "Featured Vault";
yr.defaultProps = { height: 300, width: 307 };
j(yr, {
  YWksHUg5O: {
    defaultValue: "rgb(114, 114, 117)",
    title: "Background",
    type: m.Color,
  },
  hHCmRy2Rn: {
    defaultValue: "ycsETH",
    displayTextArea: !1,
    title: "Title",
    type: m.String,
  },
  iHFdtlZG4: {
    defaultValue: "rgb(255, 255, 255)",
    title: "Title Color",
    type: m.Color,
  },
  t05M8nrya: {
    defaultValue: "Chases the best ETH yield on Silo Finance",
    displayTextArea: !1,
    title: "Description",
    type: m.String,
  },
  vZA4LVREg: {
    defaultValue: "rgb(255, 255, 255)",
    title: "Description Color",
    type: m.Color,
  },
  OHvC2RhVq: {
    defaultValue: "rgb(94, 94, 94)",
    title: "Button Color",
    type: m.Color,
  },
  uwbZ09m4I: {
    defaultValue: "Available on",
    displayTextArea: !1,
    title: "Availability Text",
    type: m.String,
  },
  osmSB77W4: { defaultValue: !0, title: "ARB Visible", type: m.Boolean },
  Qo1Z3bd09: { defaultValue: !0, title: "BASE Visible", type: m.Boolean },
  HSpg_pEPX: { defaultValue: !0, title: "ETH Visible", type: m.Boolean },
  XBgGPxY0A: { defaultValue: !0, title: "Enabled", type: m.Boolean },
  WvWMG8I9_: { defaultValue: !1, title: "Coming Soon", type: m.Boolean },
  hSnfEaKvA: { title: "Link", type: m.Link },
});
Q(
  yr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "fontshare",
          style: "normal",
          url: "/third-party-assets/fontshare/wf/VA23FCGWQ2ZGKFEM75LQVBDIR5XCXJI3/V5QYJZB23L2PDOZTWQY5F3I5R2B3UGCD/XUL6BSI7XTIWXDHGTQPLNOWHZU5CTO77.woff2",
          weight: "600",
        },
        {
          family: "Work Sans",
          source: "fontshare",
          style: "normal",
          url: "/third-party-assets/fontshare/wf/G463L6WWJWSX4R6VTEVFCTIXPE3AUDEF/V4JHHUSZMHBPK3DFEHLGTZVXVBHVLZ7P/ND3FIMQYFEQ2VM2WWNXCGGBFYRPR7FMH.woff2",
          weight: "400",
        },
        {
          family: "Work Sans",
          source: "fontshare",
          style: "normal",
          url: "/third-party-assets/fontshare/wf/MBOJEUZXMXZXHAW3KKWUFI6R7OIPIRYU/FBJ6H6I7LKZ2WGOVP25FDJOOUIMXMY2Z/THXRGVPNH45VMHCGWEEJATJ2RCOHTNBI.woff2",
          weight: "500",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
Sr.loadFonts([
  "GF;Work Sans-regular",
  "GF;Work Sans-700",
  "GF;Work Sans-700italic",
  "GF;Work Sans-italic",
]);
var ua = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXNi0Dp6_cOyA.woff2",
          weight: "400",
        },
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K67QNi0Dp6_cOyA.woff2",
          weight: "700",
        },
        {
          family: "Work Sans",
          source: "google",
          style: "italic",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGUOWwJpo3ZKyDSQQ.woff2",
          weight: "700",
        },
        {
          family: "Work Sans",
          source: "google",
          style: "italic",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY9z_wNahGAdqQ43Rh_ebrnlwyYfEPxPoGU3msJpo3ZKyDSQQ.woff2",
          weight: "400",
        },
      ],
    },
  ],
  ha = [
    '.framer-kJcr3 .framer-styles-preset-1vc2jdh:not(.rich-text-wrapper), .framer-kJcr3 .framer-styles-preset-1vc2jdh.rich-text-wrapper p { --framer-font-family: "Work Sans", "Work Sans Placeholder", sans-serif; --framer-font-family-bold: "Work Sans", "Work Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Work Sans", "Work Sans Placeholder", sans-serif; --framer-font-family-italic: "Work Sans", "Work Sans Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 28px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #fafafa; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  ],
  ga = "framer-kJcr3";
Sr.loadFonts([
  "FS;Work Sans-medium",
  "FS;Work Sans-bold",
  "FS;Work Sans-bold italic",
  "FS;Work Sans-medium italic",
]);
var xa = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "fontshare",
          style: "normal",
          url: "/third-party-assets/fontshare/wf/MBOJEUZXMXZXHAW3KKWUFI6R7OIPIRYU/FBJ6H6I7LKZ2WGOVP25FDJOOUIMXMY2Z/THXRGVPNH45VMHCGWEEJATJ2RCOHTNBI.woff2",
          weight: "500",
        },
        {
          family: "Work Sans",
          source: "fontshare",
          style: "normal",
          url: "/third-party-assets/fontshare/wf/FE5DMCVO7676XBZO76R6BBLVYNJTAGNN/ZSUXML62VYR72Y4ABFYVQUJXTHDK7YJ2/LIFXYPK76URT3NB4B4JNO3Y23DJLOWJ3.woff2",
          weight: "700",
        },
        {
          family: "Work Sans",
          source: "fontshare",
          style: "italic",
          url: "/third-party-assets/fontshare/wf/4IOO6HE2KP5VJDPCI2J2DVDL6ZKR7GOP/UTF7AFH75PMBFZU74BYTKFURR2UL3DCD/LXEOV3VUZC34RH6VVI7IJSPR3H2TTV7E.woff2",
          weight: "700",
        },
        {
          family: "Work Sans",
          source: "fontshare",
          style: "italic",
          url: "/third-party-assets/fontshare/wf/L2RFI5NTELDLWWGFIXXRCJFRMUAU4BD6/P3JDB7I7L2IP3N3IUAWFHSV5PXQQYUXX/NYV4ZQMHP7NXL6VB4VFS7ZGRB4HZ263N.woff2",
          weight: "500",
        },
      ],
    },
  ],
  ya = [
    '.framer-3yMZT .framer-styles-preset-f56z90:not(.rich-text-wrapper), .framer-3yMZT .framer-styles-preset-f56z90.rich-text-wrapper p { --framer-font-family: "Work Sans", "Work Sans Placeholder", sans-serif; --framer-font-family-bold: "Work Sans", "Work Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Work Sans", "Work Sans Placeholder", sans-serif; --framer-font-family-italic: "Work Sans", "Work Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.5px; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: rgba(250, 250, 250, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }',
  ],
  va = "framer-3yMZT";
var $l = O(Je),
  es = O(bt),
  rs = O(Ee),
  ts = O(pe),
  as = O(Xe),
  wa = Wr(c.div),
  ns = O(sr),
  os = O(Ct),
  is = Dr(V),
  ls = O(Ae),
  ss = O(ur),
  cs = O(wt),
  ms = O(Ft),
  fs = {
    s00XJeKUG: "(max-width: 809px)",
    uwtKjc3B5: "(min-width: 810px) and (max-width: 1399px)",
    WQLkyLRf1: "(min-width: 1400px)",
  },
  jr = () => typeof document < "u",
  ba = "framer-FxKKm",
  ds = {
    s00XJeKUG: "framer-v-qy8pmp",
    uwtKjc3B5: "framer-v-o34w84",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  vr = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Te = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.05,
    skewX: 0,
    skewY: 0,
    transition: vr,
  },
  ps = { bounce: 0.25, delay: 0, duration: 0.85, type: "spring" },
  us = {
    opacity: 1,
    rotate: 360,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ps,
  },
  hs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: vr,
  },
  Sa = { bounce: 0.25, delay: 0, duration: 0.45, type: "spring" },
  gs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.02,
    skewX: 0,
    skewY: 0,
    transition: Sa,
  },
  xs = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.99,
    skewX: 0,
    skewY: 0,
    transition: Sa,
  },
  ka = (t, a) => `translate(-50%, -50%) ${a}`,
  ys = {
    opacity: 1,
    rotate: -20,
    rotateX: 0,
    rotateY: 0,
    scale: 1.05,
    skewX: 0,
    skewY: 0,
    transition: vr,
    y: -5,
  },
  vs = {
    opacity: 1,
    rotate: 20,
    rotateX: 0,
    rotateY: 0,
    scale: 1.05,
    skewX: 0,
    skewY: 0,
    transition: vr,
    y: -5,
  },
  ws = {
    boxShadow:
      "0px 0.24145061431045178px 0.24145061431045178px -1.25px rgba(85, 98, 238, 0.5), 0px 2px 2px -2.5px rgba(85, 98, 238, 0.5)",
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.1,
    skewX: 0,
    skewY: 0,
    transition: vr,
  },
  Kt = Fr(),
  bs = { Desktop: "WQLkyLRf1", Phone: "s00XJeKUG", Tablet: "uwtKjc3B5" },
  ks = ({ height: t, id: a, width: o, ...n }) => {
    var i, f;
    return {
      ...n,
      variant:
        (f = (i = bs[n.variant]) !== null && i !== void 0 ? i : n.variant) !==
          null && f !== void 0
          ? f
          : "WQLkyLRf1",
    };
  },
  Ss = H(function (t, a) {
    let { activeLocale: o, setLocale: n } = J(),
      { style: i, className: f, layoutId: s, variant: d, ...p } = ks(t);
    ce(() => {
      let C = Fr(void 0, o);
      if (C.robots) {
        let w = document.querySelector('meta[name="robots"]');
        w
          ? w.setAttribute("content", C.robots)
          : ((w = document.createElement("meta")),
            w.setAttribute("name", "robots"),
            w.setAttribute("content", C.robots),
            document.head.appendChild(w));
      }
    }, [void 0, o]),
      At(() => {
        let C = Fr(void 0, o);
        if (((document.title = C.title || ""), C.viewport)) {
          var w;
          (w = document.querySelector('meta[name="viewport"]')) === null ||
            w === void 0 ||
            w.setAttribute("content", C.viewport);
        }
        let F = C.bodyClassName;
        if (F) {
          let e = document.body;
          e.classList.forEach(
            (T) => T.startsWith("framer-body-") && e.classList.remove(T)
          ),
            e.classList.add(`${C.bodyClassName}-framer-FxKKm`);
        }
        return () => {
          F &&
            document.body.classList.remove(`${C.bodyClassName}-framer-FxKKm`);
        };
      }, [void 0, o]);
    let [l, g] = Bt(d, fs, !1),
      u = void 0,
      x = N(null),
      y = () => !!(!jr() || ["uwtKjc3B5", "s00XJeKUG"].includes(l)),
      k = () => (jr() ? !["uwtKjc3B5", "s00XJeKUG"].includes(l) : !0),
      L = () => (jr() ? l !== "s00XJeKUG" : !0),
      S = () => !jr() || l === "s00XJeKUG",
      M = X(),
      v = [ga, va];
    return (
      Nt({}),
      r(Wt.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: ds },
        children: b(z, {
          id: s ?? M,
          children: [
            b(c.div, {
              ...p,
              className: Y(ba, ...v, "framer-72rtr7", f),
              ref: a ?? x,
              style: { ...i },
              children: [
                r(P, {
                  children: r(ae, {
                    className: "framer-tkrp9f-container",
                    children: r(Je, {
                      backgroundSize: 100,
                      borderRadius: 0,
                      height: "100%",
                      id: "srZs_gSxZ",
                      layoutId: "srZs_gSxZ",
                      opacity: 0.05,
                      style: { height: "100%", width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
                r("div", { className: "framer-aafkq6" }),
                b("div", {
                  className: "framer-14q2j1y",
                  children: [
                    r("div", {
                      className: "framer-8dx1sl",
                      children: r(I, {
                        breakpoint: l,
                        overrides: {
                          s00XJeKUG: {
                            width: "min(min(100vw, 1920px) - 50px, 1300px)",
                            y: 0,
                          },
                        },
                        children: r(P, {
                          height: 70,
                          width: "min(min(100vw, 1920px) - 160px, 1300px)",
                          children: r(ae, {
                            className: "framer-1r7un7p-container",
                            children: r(I, {
                              breakpoint: l,
                              overrides: {
                                s00XJeKUG: { variant: "ENGu2CJ8B" },
                              },
                              children: r(bt, {
                                height: "100%",
                                id: "uSe5oQjFb",
                                layoutId: "uSe5oQjFb",
                                style: {
                                  height: "100%",
                                  maxWidth: "100%",
                                  width: "100%",
                                },
                                variant: "gOG718MT9",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    r("div", {
                      className: "framer-1bxd7mi",
                      "data-framer-name": "Hero Section",
                      name: "Hero Section",
                      children: r("div", {
                        className: "framer-17hubt0",
                        "data-framer-name": "Container",
                        name: "Container",
                        children: b("div", {
                          className: "framer-1undc2l",
                          "data-framer-name": "Content",
                          name: "Content",
                          children: [
                            r(P, {
                              children: r(ae, {
                                className: "framer-103l49b-container",
                                children: r(I, {
                                  breakpoint: l,
                                  overrides: {
                                    s00XJeKUG: {
                                      font: {
                                        font: "Work Sans",
                                        fontSize: 40,
                                        fontWeight: 500,
                                        letterSpacing: -1,
                                        lineHeight: 1.2,
                                        lineHeightPixels: 100,
                                        lineHeightType: !0,
                                        offset: 0,
                                        textAlign: "center",
                                        whiteSpace: "normal",
                                      },
                                    },
                                    uwtKjc3B5: {
                                      font: {
                                        font: "Work Sans",
                                        fontSize: 40,
                                        fontWeight: 500,
                                        letterSpacing: -1,
                                        lineHeight: 1.2,
                                        lineHeightPixels: 100,
                                        lineHeightType: !0,
                                        offset: 0,
                                        textAlign: "center",
                                        whiteSpace: "normal",
                                      },
                                    },
                                  },
                                  children: r(Ee, {
                                    color: "rgb(255, 255, 255)",
                                    effectOptions: {
                                      opacity: 0,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      x: 0,
                                      y: 100,
                                    },
                                    font: {
                                      font: "Work Sans",
                                      fontSize: 80,
                                      fontWeight: 500,
                                      letterSpacing: -1,
                                      lineHeight: 1.2,
                                      lineHeightPixels: 100,
                                      lineHeightType: !0,
                                      offset: 0,
                                      textAlign: "left",
                                      whiteSpace: "normal",
                                    },
                                    height: "100%",
                                    id: "txcjBuAiT",
                                    layoutId: "txcjBuAiT",
                                    overflow: !1,
                                    perWord: !0,
                                    stagger: 0.05,
                                    style: { width: "100%" },
                                    text: "Ultimate Yield Chasing Machine",
                                    transitionOptions: {
                                      damping: 30,
                                      delay: 0,
                                      mass: 1,
                                      stiffness: 400,
                                      type: "spring",
                                    },
                                    type: "letter",
                                    variant: !0,
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                            r(I, {
                              breakpoint: l,
                              overrides: {
                                s00XJeKUG: {
                                  children: r(h, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7V29yayBTYW5zLXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Work Sans", "Work Sans Placeholder", sans-serif',
                                        "--framer-font-size": "20px",
                                        "--framer-line-height": "28px",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgba(250, 250, 250, 0.8)",
                                      },
                                      children:
                                        "Automated yields seeking the highest returns across DeFi. Maximize returns through diversified strategies and smart allocations with Sheep Protocol.",
                                    }),
                                  }),
                                },
                                uwtKjc3B5: {
                                  children: r(h, {
                                    children: r("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7V29yayBTYW5zLXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Work Sans", "Work Sans Placeholder", sans-serif',
                                        "--framer-font-size": "20px",
                                        "--framer-line-height": "28px",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "rgba(250, 250, 250, 0.8)",
                                      },
                                      children:
                                        "Automated yields seeking the highest returns across DeFi. Maximize returns through diversified strategies and smart allocations with Sheep Protocol.",
                                    }),
                                  }),
                                },
                              },
                              children: r(V, {
                                __fromCanvasComponent: !0,
                                children: r(h, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7V29yayBTYW5zLXJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Work Sans", "Work Sans Placeholder", sans-serif',
                                      "--framer-font-size": "20px",
                                      "--framer-line-height": "28px",
                                      "--framer-text-color":
                                        "rgba(250, 250, 250, 0.8)",
                                    },
                                    children:
                                      "Automated yields seeking the highest returns across DeFi. Maximize returns through diversified strategies and smart allocations with Sheep Protocol.",
                                  }),
                                }),
                                className: "framer-d595tg",
                                fonts: ["GF;Work Sans-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                            b("div", {
                              className: "framer-qg0spw",
                              "data-framer-name": "Actions",
                              name: "Actions",
                              children: [
                                r(I, {
                                  breakpoint: l,
                                  overrides: { s00XJeKUG: { y: 530 } },
                                  children: r(P, {
                                    height: 40,
                                    children: r(ae, {
                                      className: "framer-1u1dsu0-container",
                                      children: r(pe, {
                                        cITQpDSzU: !1,
                                        cSN7oJ9Cy: !1,
                                        eVKX59h3Y: "https://app-shp-fi.vercel.app/",
                                        GQMIB2fo_: "framer",
                                        height: "100%",
                                        hvc8_eco1: !1,
                                        id: "JsA_gWJhs",
                                        jY9wMwBAL: "Open App",
                                        layoutId: "JsA_gWJhs",
                                        Q5d6XPMqx: !1,
                                        variant: "rm7iJvumB",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                                r(I, {
                                  breakpoint: l,
                                  overrides: { s00XJeKUG: { y: 530 } },
                                  children: r(P, {
                                    height: 40,
                                    children: r(ae, {
                                      className: "framer-mu6haj-container",
                                      children: r(pe, {
                                        cITQpDSzU: !1,
                                        cSN7oJ9Cy: !0,
                                        eVKX59h3Y: "https://sheep-finance.gitbook.io/shp-finance/",
                                        GQMIB2fo_: "arrow-up-right",
                                        height: "100%",
                                        hvc8_eco1: !1,
                                        id: "uYRyXHo60",
                                        jY9wMwBAL: "Learn More",
                                        layoutId: "uYRyXHo60",
                                        Q5d6XPMqx: !1,
                                        variant: "DMd89ikes",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    r("div", {
                      className: "framer-4fwkg1",
                      "data-framer-name": "Integrations",
                      name: "Integrations",
                      children: b(wa, {
                        className: "framer-153g7c1",
                        "data-framer-name": "Container",
                        name: "Container",
                        children: [
                          r(I, {
                            breakpoint: l,
                            overrides: {
                              s00XJeKUG: {
                                children: r(h, {
                                  children: r("p", {
                                    className: "framer-styles-preset-1vc2jdh",
                                    "data-styles-preset": "JlXrjSM4w",
                                    style: {
                                      "--framer-text-alignment": "center",
                                    },
                                    children:
                                      "Integrating with the biggest and most secure DeFi protocols",
                                  }),
                                }),
                              },
                            },
                            children: r(V, {
                              __fromCanvasComponent: !0,
                              children: r(h, {
                                children: r("p", {
                                  className: "framer-styles-preset-1vc2jdh",
                                  "data-styles-preset": "JlXrjSM4w",
                                  children:
                                    "Integrating with the biggest and most secure DeFi protocols",
                                }),
                              }),
                              className: "framer-189ksz2",
                              fonts: ["Inter"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          y() &&
                            r(P, {
                              children: r(ae, {
                                className:
                                  "framer-yxyx59-container hidden-72rtr7",
                                children: r(I, {
                                  breakpoint: l,
                                  overrides: {
                                    s00XJeKUG: {
                                      gap: 50,
                                      hoverFactor: 0.6,
                                      speed: 50,
                                    },
                                    uwtKjc3B5: {
                                      gap: 50,
                                      hoverFactor: 0.6,
                                      speed: 50,
                                    },
                                  },
                                  children: r(Xe, {
                                    alignment: "center",
                                    direction: "left",
                                    fadeOptions: {
                                      fadeAlpha: 0,
                                      fadeContent: !0,
                                      fadeInset: 0,
                                      fadeWidth: 25,
                                      overflow: !1,
                                    },
                                    gap: 40,
                                    height: "100%",
                                    hoverFactor: 0.8,
                                    id: "MTqo5TinN",
                                    layoutId: "MTqo5TinN",
                                    padding: 0,
                                    paddingBottom: 0,
                                    paddingLeft: 0,
                                    paddingPerSide: !1,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    sizingOptions: {
                                      heightType: !0,
                                      widthType: !0,
                                    },
                                    slots: [
                                      r($, {
                                        background: {
                                          alt: "",
                                          fit: "fit",
                                          pixelHeight: 502,
                                          pixelWidth: 502,
                                          positionX: "center",
                                          positionY: "center",
                                          src: "/images/kpP0WvhR0pPqf5F7ndJEJxTT3tw.svg",
                                        },
                                        className: "framer-tb2ld3",
                                        "data-framer-name": "Angle",
                                        name: "Angle",
                                        whileHover: Te,
                                      }),
                                      r($, {
                                        background: {
                                          alt: "",
                                          fit: "fit",
                                          pixelHeight: 139,
                                          pixelWidth: 833,
                                          positionX: "center",
                                          positionY: "center",
                                          sizes: "141px",
                                          src: "/images/ZRvARjif7CotzCgyMbzaCUDR0Q.svg",
                                          srcSet:
                                            "/images/ZRvARjif7CotzCgyMbzaCUDR0Q.svg?scale-down-to=512 512w,/images/ZRvARjif7CotzCgyMbzaCUDR0Q.svg 833w",
                                        },
                                        className: "framer-11ow29l",
                                        "data-framer-name": "Aave",
                                        name: "Aave",
                                        whileHover: Te,
                                      }),
                                      r($, {
                                        background: {
                                          alt: "",
                                          fit: "fit",
                                          pixelHeight: 183,
                                          pixelWidth: 418,
                                          positionX: "center",
                                          positionY: "center",
                                          src: "/images/YUMGHoDgAiwTQ8imeXCPoLYtW0.png",
                                        },
                                        className: "framer-1dyaa7j",
                                        "data-framer-name": "Silo",
                                        name: "Silo",
                                        whileHover: Te,
                                      }),
                                      r($, {
                                        background: {
                                          alt: "",
                                          fit: "fit",
                                          pixelHeight: 544,
                                          pixelWidth: 545,
                                          positionX: "center",
                                          positionY: "center",
                                          src: "/images/aZDQJKQAWFXwpPu7PAuqfqupE.svg",
                                        },
                                        className: "framer-1sci5cu",
                                        "data-framer-name": "Curve",
                                        name: "Curve",
                                        whileHover: Te,
                                      }),
                                      r($, {
                                        background: {
                                          alt: "",
                                          fit: "fit",
                                          pixelHeight: 67,
                                          pixelWidth: 222,
                                          positionX: "center",
                                          positionY: "center",
                                          src: "/images/e2oVF21hSNagTi0xKLg35L1TuOc.svg",
                                        },
                                        className: "framer-14qzgdm",
                                        "data-framer-name": "Pendle",
                                        name: "Pendle",
                                        whileHover: Te,
                                      }),
                                      r($, {
                                        background: {
                                          alt: "",
                                          fit: "fit",
                                          pixelHeight: 251,
                                          pixelWidth: 1001,
                                          positionX: "center",
                                          positionY: "center",
                                          sizes: "145px",
                                          src: "/images/0K0CCnF07EM0JJYltdSdmtn67SA.svg",
                                          srcSet:
                                            "/images/0K0CCnF07EM0JJYltdSdmtn67SA.svg?scale-down-to=512 512w,/images/0K0CCnF07EM0JJYltdSdmtn67SA.svg 1001w",
                                        },
                                        className: "framer-ol7cvn",
                                        "data-framer-name": "Uniswap",
                                        name: "Uniswap",
                                        whileHover: Te,
                                      }),
                                    ],
                                    speed: 60,
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          k() &&
                            b(c.div, {
                              className:
                                "framer-1ezetas hidden-o34w84 hidden-qy8pmp",
                              children: [
                                r($, {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    pixelHeight: 502,
                                    pixelWidth: 502,
                                    positionX: "center",
                                    positionY: "center",
                                    src: "/images/kpP0WvhR0pPqf5F7ndJEJxTT3tw.svg",
                                  },
                                  className: "framer-c7w2y9",
                                  "data-framer-name": "Angle",
                                  name: "Angle",
                                  whileHover: Te,
                                }),
                                r($, {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    pixelHeight: 139,
                                    pixelWidth: 833,
                                    positionX: "center",
                                    positionY: "center",
                                    sizes: "190px",
                                    src: "/images/ZRvARjif7CotzCgyMbzaCUDR0Q.svg",
                                    srcSet:
                                      "/images/ZRvARjif7CotzCgyMbzaCUDR0Q.svg?scale-down-to=512 512w,/images/ZRvARjif7CotzCgyMbzaCUDR0Q.svg 833w",
                                  },
                                  className: "framer-qjcdcf",
                                  "data-framer-name": "Aave",
                                  name: "Aave",
                                  whileHover: Te,
                                }),
                                r($, {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    pixelHeight: 183,
                                    pixelWidth: 418,
                                    positionX: "center",
                                    positionY: "center",
                                    src: "/images/YUMGHoDgAiwTQ8imeXCPoLYtW0.png",
                                  },
                                  className: "framer-5nyjzr",
                                  "data-framer-name": "Silo",
                                  name: "Silo",
                                  whileHover: Te,
                                }),
                                r($, {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    pixelHeight: 544,
                                    pixelWidth: 545,
                                    positionX: "center",
                                    positionY: "center",
                                    src: "/images/aZDQJKQAWFXwpPu7PAuqfqupE.svg",
                                  },
                                  className: "framer-zl0no3",
                                  "data-framer-name": "Curve",
                                  name: "Curve",
                                  whileHover: Te,
                                }),
                                r($, {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    pixelHeight: 67,
                                    pixelWidth: 222,
                                    positionX: "center",
                                    positionY: "center",
                                    src: "/images/e2oVF21hSNagTi0xKLg35L1TuOc.svg",
                                  },
                                  className: "framer-ytqtfm",
                                  "data-framer-name": "Pendle",
                                  name: "Pendle",
                                  whileHover: Te,
                                }),
                                r($, {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    pixelHeight: 251,
                                    pixelWidth: 1001,
                                    positionX: "center",
                                    positionY: "center",
                                    sizes: "186px",
                                    src: "/images/0K0CCnF07EM0JJYltdSdmtn67SA.svg",
                                    srcSet:
                                      "/images/0K0CCnF07EM0JJYltdSdmtn67SA.svg?scale-down-to=512 512w,/images/0K0CCnF07EM0JJYltdSdmtn67SA.svg 1001w",
                                  },
                                  className: "framer-8n8cnn",
                                  "data-framer-name": "Uniswap",
                                  name: "Uniswap",
                                  whileHover: Te,
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                r("div", {
                  className: "framer-1jprrd",
                  children: b("div", {
                    className: "framer-qerdmd",
                    "data-framer-name": "Grid 1",
                    name: "Grid 1",
                    children: [
                      b("div", {
                        className: "framer-cpemrm",
                        children: [
                          r(I, {
                            breakpoint: l,
                            overrides: {
                              s00XJeKUG: {
                                children: r(h, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                      "--framer-font-family":
                                        '"Work Sans", "Work Sans Placeholder", sans-serif',
                                      "--framer-font-size": "30px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-2px",
                                      "--framer-line-height": "1em",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
                                    },
                                    children: "How Sheep Protocol works",
                                  }),
                                }),
                              },
                              uwtKjc3B5: {
                                children: r(h, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                      "--framer-font-family":
                                        '"Work Sans", "Work Sans Placeholder", sans-serif',
                                      "--framer-font-size": "40px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-2px",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
                                    },
                                    children: "How",
                                  }),
                                }),
                              },
                            },
                            children: r(V, {
                              __fromCanvasComponent: !0,
                              children: r(h, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                    "--framer-font-family":
                                      '"Work Sans", "Work Sans Placeholder", sans-serif',
                                    "--framer-font-size": "50px",
                                    "--framer-font-weight": "500",
                                    "--framer-letter-spacing": "-2px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color":
                                      "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
                                  },
                                  children: "How",
                                }),
                              }),
                              className: "framer-12l2gmg",
                              "data-framer-name": "Text",
                              fonts: ["FS;Work Sans-medium"],
                              name: "Text",
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          L() &&
                            b("div", {
                              className: "framer-rbsm4r hidden-qy8pmp",
                              children: [
                                r($, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    pixelHeight: 128,
                                    pixelWidth: 127,
                                    src: "/images/KGrLsMhbOHYjZpbSept1zuaBvQI.svg",
                                  },
                                  className: "framer-1ty2uze",
                                  whileHover: us,
                                }),
                                r(I, {
                                  breakpoint: l,
                                  overrides: {
                                    uwtKjc3B5: {
                                      children: r(h, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                            "--framer-font-family":
                                              '"Work Sans", "Work Sans Placeholder", sans-serif',
                                            "--framer-font-size": "40px",
                                            "--framer-font-weight": "500",
                                            "--framer-letter-spacing": "-2px",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
                                          },
                                          children: "Sheep Protocol works",
                                        }),
                                      }),
                                    },
                                  },
                                  children: r(V, {
                                    __fromCanvasComponent: !0,
                                    children: r(h, {
                                      children: r("p", {
                                        style: {
                                          "--font-selector":
                                            "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                          "--framer-font-family":
                                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                                          "--framer-font-size": "50px",
                                          "--framer-font-weight": "500",
                                          "--framer-letter-spacing": "-2px",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
                                        },
                                        children: "Sheep Protocol works",
                                      }),
                                    }),
                                    className: "framer-1pc2gj2",
                                    "data-framer-name": "Text",
                                    fonts: ["FS;Work Sans-medium"],
                                    name: "Text",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                      b("div", {
                        className: "framer-g53zun",
                        children: [
                          r(I, {
                            breakpoint: l,
                            overrides: {
                              s00XJeKUG: {
                                height: 390,
                                width: "min(100vw - 50px, 1920px)",
                                y: 1062,
                              },
                              uwtKjc3B5: {
                                width: "calc(min(100vw, 1920px) - 160px)",
                              },
                            },
                            children: r(P, {
                              height: 400,
                              width:
                                "max((min(100vw, 1920px) - 450px) / 3, 1px)",
                              children: r(ae, {
                                className: "framer-18w6tg6-container",
                                children: r(I, {
                                  breakpoint: l,
                                  overrides: {
                                    s00XJeKUG: {
                                      style: { height: "100%", width: "100%" },
                                    },
                                  },
                                  children: r(sr, {
                                    aa8umYql3:
                                      "https://framerusercontent.com/assets/DbizLidAx73Q5a8zvq6xYr1GBQ.mp4",
                                    bATS1N0ME: "Deposit any Asset",
                                    height: "100%",
                                    HZSFmPgtP: "ArrowDownOnSquare",
                                    id: "dWJGk13ap",
                                    kLWZXAKEN:
                                      "var(--token-5af81502-6008-4737-b4fe-6bbdf28f9dd9, rgb(231, 184, 255))",
                                    layoutId: "dWJGk13ap",
                                    MmzxXOXWw:
                                      "https://framerusercontent.com/assets/42sQlQrNWcjCwqnwCOuXARPFQBU.webm",
                                    RNxPvt45N:
                                      "Sheep Zap converts any major crypto into the vault's base currency for seamless staking.",
                                    SlsCzV7yO: "rgba(121, 37, 161, 0.25)",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          }),
                          r(I, {
                            breakpoint: l,
                            overrides: {
                              s00XJeKUG: {
                                height: 390,
                                width: "min(100vw - 50px, 1920px)",
                                y: 1477,
                              },
                              uwtKjc3B5: {
                                width: "calc(min(100vw, 1920px) - 160px)",
                              },
                            },
                            children: r(P, {
                              height: 400,
                              width:
                                "max((min(100vw, 1920px) - 450px) / 3, 1px)",
                              children: r(ae, {
                                className: "framer-1jsk72f-container",
                                children: r(I, {
                                  breakpoint: l,
                                  overrides: {
                                    s00XJeKUG: {
                                      style: { height: "100%", width: "100%" },
                                    },
                                  },
                                  children: r(sr, {
                                    aa8umYql3:
                                      "https://framerusercontent.com/assets/GW47afUvEGSVeYJGgYGi5YZI4.mp4",
                                    bATS1N0ME: "Diversified Yield Chasing",
                                    height: "100%",
                                    HZSFmPgtP: "ChartBar",
                                    id: "dI4YibAqG",
                                    kLWZXAKEN: "rgb(236, 122, 41)",
                                    layoutId: "dI4YibAqG",
                                    MmzxXOXWw:
                                      "https://framerusercontent.com/assets/LoyHrPn2awgMV48zDwUNsraTYQ.webm",
                                    RNxPvt45N:
                                      "Allocates assets across high-yield protocols, continuosly shifting to top performers.",
                                    SlsCzV7yO: "rgba(236, 122, 41, 0.25)",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          }),
                          r(I, {
                            breakpoint: l,
                            overrides: {
                              s00XJeKUG: {
                                height: 390,
                                width: "min(100vw - 50px, 1920px)",
                                y: 1892,
                              },
                              uwtKjc3B5: {
                                width: "calc(min(100vw, 1920px) - 160px)",
                              },
                            },
                            children: r(P, {
                              height: 400,
                              width:
                                "max((min(100vw, 1920px) - 450px) / 3, 1px)",
                              children: r(ae, {
                                className: "framer-7o6s52-container",
                                children: r(I, {
                                  breakpoint: l,
                                  overrides: {
                                    s00XJeKUG: {
                                      style: { height: "100%", width: "100%" },
                                    },
                                  },
                                  children: r(sr, {
                                    aa8umYql3:
                                      "https://framerusercontent.com/assets/fHJEtQinEiPlg3tGt5tKAuro.mp4",
                                    bATS1N0ME: "Optimize and Rebalance",
                                    height: "100%",
                                    HZSFmPgtP: "Cog",
                                    id: "PH6KgirQq",
                                    kLWZXAKEN: "rgb(202, 206, 235)",
                                    layoutId: "PH6KgirQq",
                                    MmzxXOXWw:
                                      "https://framerusercontent.com/assets/cIEJRQCijy6RHRsdRHxHpv0VPPI.webm",
                                    RNxPvt45N:
                                      "Oracles propose optimizing and rebalancing of the strategies for the best returns.",
                                    SlsCzV7yO: "rgba(139, 144, 179, 0.25)",
                                    style: { width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                b("div", {
                  className: "framer-jc0bom",
                  "data-framer-name": "FlagshipVaults",
                  name: "FlagshipVaults",
                  children: [
                    b("div", {
                      className: "framer-1ni3ake",
                      children: [
                        r(I, {
                          breakpoint: l,
                          overrides: {
                            s00XJeKUG: {
                              children: r(h, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                    "--framer-font-family":
                                      '"Work Sans", "Work Sans Placeholder", sans-serif',
                                    "--framer-font-size": "32px",
                                    "--framer-font-weight": "500",
                                    "--framer-letter-spacing": "0.03px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "Featured products",
                                }),
                              }),
                            },
                            uwtKjc3B5: {
                              children: r(h, {
                                children: r("p", {
                                  style: {
                                    "--font-selector":
                                      "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                    "--framer-font-family":
                                      '"Work Sans", "Work Sans Placeholder", sans-serif',
                                    "--framer-font-size": "40px",
                                    "--framer-font-weight": "500",
                                    "--framer-letter-spacing": "-2px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(255, 255, 255)",
                                  },
                                  children: "Featured products",
                                }),
                              }),
                            },
                          },
                          children: r(V, {
                            __fromCanvasComponent: !0,
                            children: r(h, {
                              children: r("p", {
                                style: {
                                  "--font-selector":
                                    "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                  "--framer-font-family":
                                    '"Work Sans", "Work Sans Placeholder", sans-serif',
                                  "--framer-font-size": "50px",
                                  "--framer-font-weight": "500",
                                  "--framer-letter-spacing": "-2px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(255, 255, 255)",
                                },
                                children: "Featured products",
                              }),
                            }),
                            className: "framer-3cofa7",
                            "data-framer-name": "Text",
                            fonts: ["FS;Work Sans-medium"],
                            name: "Text",
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        L() &&
                          r(P, {
                            height: 40,
                            children: r(I, {
                              breakpoint: l,
                              overrides: { uwtKjc3B5: { whileHover: hs } },
                              children: r(ae, {
                                className:
                                  "framer-1kcdspj-container hidden-qy8pmp",
                                children: r(pe, {
                                  cITQpDSzU: !1,
                                  cSN7oJ9Cy: !0,
                                  eVKX59h3Y: "https://app-shp-fi.vercel.app/",
                                  GQMIB2fo_: "arrow-up-right",
                                  height: "100%",
                                  hvc8_eco1: !1,
                                  id: "XsjV3IjPs",
                                  jY9wMwBAL: "Explore more products",
                                  layoutId: "XsjV3IjPs",
                                  Q5d6XPMqx: !1,
                                  variant: "rm7iJvumB",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    b("div", {
                      className: "framer-n17wal",
                      children: [
                        r(I, {
                          breakpoint: l,
                          overrides: {
                            s00XJeKUG: {
                              width: "calc(min(100vw, 1920px) - 50px)",
                              y: 2430.4,
                            },
                          },
                          children: r(P, {
                            height: 300,
                            width: "300px",
                            children: r(ae, {
                              className: "framer-143njqk-container",
                              children: r(Ct, {
                                height: "100%",
                                hHCmRy2Rn: "ycsETH",
                                hSnfEaKvA:
                                  "https://app-shp-fi.vercel.app/#/arbitrum/vault/0x878b7897C60fA51c2A7bfBdd4E3cB5708D9eEE43",
                                HSpg_pEPX: !1,
                                id: "eODuaOrPm",
                                iHFdtlZG4: "rgb(147, 197, 253)",
                                layoutId: "eODuaOrPm",
                                OHvC2RhVq: "rgb(85, 142, 207)",
                                osmSB77W4: !0,
                                Qo1Z3bd09: !1,
                                style: { height: "100%", width: "100%" },
                                t05M8nrya:
                                  "Chases the best ETH yield on Silo Finance.",
                                uwbZ09m4I: "Available on",
                                vZA4LVREg: "rgb(147, 197, 253)",
                                width: "100%",
                                WvWMG8I9_: !1,
                                XBgGPxY0A: !0,
                                YWksHUg5O: "rgba(36, 82, 143, 0.25)",
                              }),
                            }),
                          }),
                        }),
                        r("div", {
                          className: "framer-1nourbq",
                          "data-framer-name": "Featured Vault",
                          name: "Featured Vault",
                          children: b("div", {
                            className: "framer-shqsif",
                            children: [
                              r(V, {
                                __fromCanvasComponent: !0,
                                children: r(h, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "RlM7V29yayBTYW5zLXNlbWlib2xk",
                                      "--framer-font-family":
                                        '"Work Sans", "Work Sans Placeholder", sans-serif',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "600",
                                      "--framer-text-color":
                                        "rgb(98, 189, 130)",
                                    },
                                    children: "ycCRVUSD",
                                  }),
                                }),
                                className: "framer-1s5hjzl",
                                fonts: ["FS;Work Sans-semibold"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              r(V, {
                                __fromCanvasComponent: !0,
                                children: r(h, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "RlM7V29yayBTYW5zLXJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Work Sans", "Work Sans Placeholder", sans-serif',
                                      "--framer-font-size": "18px",
                                      "--framer-text-color":
                                        "rgb(98, 189, 130)",
                                    },
                                    children:
                                      "Chases the best crvUSD yield on Curve Lend.",
                                  }),
                                }),
                                className: "framer-uuyzml",
                                fonts: ["FS;Work Sans-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              b("div", {
                                className: "framer-1n9h4kp",
                                children: [
                                  r(is, {
                                    __fromCanvasComponent: !0,
                                    children: r(h, {
                                      children: r("p", {
                                        style: {
                                          "--font-selector":
                                            "RlM7V29yayBTYW5zLXNlbWlib2xk",
                                          "--framer-font-family":
                                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                                          "--framer-font-size": "48px",
                                          "--framer-font-weight": "600",
                                          "--framer-line-height": "1em",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
                                        },
                                        children: "\u2248 12%",
                                      }),
                                    }),
                                    className: "framer-1tq80uy",
                                    "data-framer-name":
                                      "0xA7781F1D982Eb9000BC1733E29Ff5ba2824cDBE5",
                                    fonts: ["FS;Work Sans-semibold"],
                                    name: "0xA7781F1D982Eb9000BC1733E29Ff5ba2824cDBE5",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  r(de, {
                                    href: "https://app-shp-fi.vercel.app/#/arbitrum/vault/0xA7781F1D982Eb9000BC1733E29Ff5ba2824cDBE5",
                                    nodeId: "JIDYr_PxJ",
                                    openInNewTab: !0,
                                    children: r(c.a, {
                                      className: "framer-bc3fzc framer-lux5qc",
                                      "data-framer-name": "Deposit Button",
                                      name: "Deposit Button",
                                      whileHover: gs,
                                      whileTap: xs,
                                      children: r(V, {
                                        __fromCanvasComponent: !0,
                                        children: r(h, {
                                          children: r("p", {
                                            style: {
                                              "--font-selector":
                                                "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                              "--framer-font-family":
                                                '"Work Sans", "Work Sans Placeholder", sans-serif',
                                              "--framer-font-size": "20px",
                                              "--framer-font-weight": "500",
                                              "--framer-line-height": "1em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "rgb(255, 255, 255)",
                                            },
                                            children: "Earn",
                                          }),
                                        }),
                                        className: "framer-3k7d5g",
                                        fonts: ["FS;Work Sans-medium"],
                                        transformTemplate: ka,
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              b("div", {
                                className: "framer-1tawjo8",
                                children: [
                                  r(V, {
                                    __fromCanvasComponent: !0,
                                    children: r(h, {
                                      children: r("p", {
                                        style: {
                                          "--font-selector":
                                            "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                          "--framer-font-family":
                                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                                          "--framer-font-size": "14px",
                                          "--framer-font-weight": "500",
                                          "--framer-text-color":
                                            "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
                                        },
                                        children: "Available on",
                                      }),
                                    }),
                                    className: "framer-1itm3vg",
                                    fonts: ["FS;Work Sans-medium"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  r("div", {
                                    className: "framer-qirfwx",
                                    "data-framer-name": "Bilder",
                                    name: "Bilder",
                                    children: r("div", {
                                      className: "framer-15qedw1",
                                      children: r("div", {
                                        className: "framer-16u3a45",
                                        children: r(I, {
                                          breakpoint: l,
                                          overrides: {
                                            s00XJeKUG: {
                                              background: {
                                                alt: "",
                                                fit: "stretch",
                                                loading: be(2809.4),
                                                pixelHeight: 2e3,
                                                pixelWidth: 2e3,
                                                positionX: "center",
                                                positionY: "center",
                                                sizes: "22px",
                                                src: "/images/9IveZW0oKNPx5qEMFfl7amGFdU.png",
                                                srcSet:
                                                  "/images/9IveZW0oKNPx5qEMFfl7amGFdU.png?scale-down-to=512 512w,/images/9IveZW0oKNPx5qEMFfl7amGFdU.png?scale-down-to=1024 1024w,/images/9IveZW0oKNPx5qEMFfl7amGFdU.png 2000w",
                                              },
                                            },
                                          },
                                          children: r($, {
                                            background: {
                                              alt: "",
                                              fit: "stretch",
                                              pixelHeight: 2e3,
                                              pixelWidth: 2e3,
                                              positionX: "center",
                                              positionY: "center",
                                              sizes: "22px",
                                              src: "/images/9IveZW0oKNPx5qEMFfl7amGFdU.png",
                                              srcSet:
                                                "/images/9IveZW0oKNPx5qEMFfl7amGFdU.png?scale-down-to=512 512w,/images/9IveZW0oKNPx5qEMFfl7amGFdU.png?scale-down-to=1024 1024w,/images/9IveZW0oKNPx5qEMFfl7amGFdU.png 2000w",
                                            },
                                            className: "framer-15z9tf2",
                                            "data-framer-name": "Ellipse 1",
                                            name: "Ellipse 1",
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        r("div", {
                          className: "framer-88yulz",
                          "data-framer-name": "Featured Vault",
                          name: "Featured Vault",
                          children: b("div", {
                            className: "framer-t0rhw1",
                            children: [
                              r(V, {
                                __fromCanvasComponent: !0,
                                children: r(h, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "RlM7V29yayBTYW5zLXNlbWlib2xk",
                                      "--framer-font-family":
                                        '"Work Sans", "Work Sans Placeholder", sans-serif',
                                      "--framer-font-size": "24px",
                                      "--framer-font-weight": "600",
                                      "--framer-text-color":
                                        "rgb(255, 146, 20)",
                                    },
                                    children: "ycBTC",
                                  }),
                                }),
                                className: "framer-68qfyk",
                                fonts: ["FS;Work Sans-semibold"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              r(V, {
                                __fromCanvasComponent: !0,
                                children: r(h, {
                                  children: r("p", {
                                    style: {
                                      "--font-selector":
                                        "RlM7V29yayBTYW5zLXJlZ3VsYXI=",
                                      "--framer-font-family":
                                        '"Work Sans", "Work Sans Placeholder", sans-serif',
                                      "--framer-font-size": "18px",
                                      "--framer-text-color":
                                        "rgb(255, 146, 20)",
                                    },
                                    children:
                                      "Chases the best BTC yields with simple but effective strategies.",
                                  }),
                                }),
                                className: "framer-1joh1gn",
                                fonts: ["FS;Work Sans-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              b("div", {
                                className: "framer-1b15mx7",
                                children: [
                                  r(V, {
                                    __fromCanvasComponent: !0,
                                    children: r(h, {
                                      children: r("p", {
                                        style: {
                                          "--font-selector":
                                            "RlM7V29yayBTYW5zLXNlbWlib2xk",
                                          "--framer-font-family":
                                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                                          "--framer-font-size": "48px",
                                          "--framer-font-weight": "600",
                                          "--framer-line-height": "1em",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
                                        },
                                        children: "\u2248 5%",
                                      }),
                                    }),
                                    className: "framer-1w5slz4",
                                    "data-framer-name":
                                      "0x878b7897C60fA51c2A7bfBdd4E3cB5708D9eEE43",
                                    fonts: ["FS;Work Sans-semibold"],
                                    name: "0x878b7897C60fA51c2A7bfBdd4E3cB5708D9eEE43",
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  r("div", {
                                    className: "framer-b8inmo",
                                    "data-framer-name": "Coming Soon",
                                    name: "Coming Soon",
                                    children: r(V, {
                                      __fromCanvasComponent: !0,
                                      children: r(h, {
                                        children: r("p", {
                                          style: {
                                            "--font-selector":
                                              "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                            "--framer-font-family":
                                              '"Work Sans", "Work Sans Placeholder", sans-serif',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "rgba(255, 255, 255, 0.6)",
                                          },
                                          children: "Coming Soon",
                                        }),
                                      }),
                                      className: "framer-32abdb",
                                      fonts: ["FS;Work Sans-medium"],
                                      transformTemplate: ka,
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                              b("div", {
                                className: "framer-1yck4wy",
                                children: [
                                  r(V, {
                                    __fromCanvasComponent: !0,
                                    children: r(h, {
                                      children: r("p", {
                                        style: {
                                          "--font-selector":
                                            "RlM7V29yayBTYW5zLW1lZGl1bQ==",
                                          "--framer-font-family":
                                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                                          "--framer-font-size": "14px",
                                          "--framer-font-weight": "500",
                                          "--framer-text-color":
                                            "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(250, 250, 250))",
                                        },
                                        children: "Soon on",
                                      }),
                                    }),
                                    className: "framer-n8ber0",
                                    fonts: ["FS;Work Sans-medium"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                  r("div", {
                                    className: "framer-xn1wwh",
                                    "data-framer-name": "Bilder",
                                    name: "Bilder",
                                    children: b("div", {
                                      className: "framer-igfolv",
                                      children: [
                                        r("div", {
                                          className: "framer-1kunyip",
                                          children: r(I, {
                                            breakpoint: l,
                                            overrides: {
                                              s00XJeKUG: {
                                                background: {
                                                  alt: "",
                                                  fit: "stretch",
                                                  loading: be(3157.4),
                                                  pixelHeight: 2e3,
                                                  pixelWidth: 2e3,
                                                  positionX: "center",
                                                  positionY: "center",
                                                  sizes: "22px",
                                                  src: "/images/9IveZW0oKNPx5qEMFfl7amGFdU.png",
                                                  srcSet:
                                                    "/images/9IveZW0oKNPx5qEMFfl7amGFdU.png?scale-down-to=512 512w,/images/9IveZW0oKNPx5qEMFfl7amGFdU.png?scale-down-to=1024 1024w,/images/9IveZW0oKNPx5qEMFfl7amGFdU.png 2000w",
                                                },
                                              },
                                            },
                                            children: r($, {
                                              background: {
                                                alt: "",
                                                fit: "stretch",
                                                pixelHeight: 2e3,
                                                pixelWidth: 2e3,
                                                positionX: "center",
                                                positionY: "center",
                                                sizes: "22px",
                                                src: "/images/9IveZW0oKNPx5qEMFfl7amGFdU.png",
                                                srcSet:
                                                  "/images/9IveZW0oKNPx5qEMFfl7amGFdU.png?scale-down-to=512 512w,/images/9IveZW0oKNPx5qEMFfl7amGFdU.png?scale-down-to=1024 1024w,/images/9IveZW0oKNPx5qEMFfl7amGFdU.png 2000w",
                                              },
                                              className: "framer-1g3t7li",
                                              "data-framer-name": "Ellipse 1",
                                              name: "Ellipse 1",
                                            }),
                                          }),
                                        }),
                                        r("div", {
                                          className: "framer-dv94t1",
                                          children: r(I, {
                                            breakpoint: l,
                                            overrides: {
                                              s00XJeKUG: {
                                                background: {
                                                  alt: "",
                                                  fit: "fill",
                                                  loading: be(3157.4),
                                                  pixelHeight: 460,
                                                  pixelWidth: 460,
                                                  src: "/images/FdUAVoqzdihfmlMbBfc2Br6GM.png",
                                                },
                                              },
                                            },
                                            children: r($, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                pixelHeight: 460,
                                                pixelWidth: 460,
                                                src: "/images/FdUAVoqzdihfmlMbBfc2Br6GM.png",
                                              },
                                              className: "framer-17pfvfg",
                                              "data-framer-name": "Ellipse 2",
                                              name: "Ellipse 2",
                                            }),
                                          }),
                                        }),
                                        r("div", {
                                          className: "framer-11snqqp",
                                          children: r(I, {
                                            breakpoint: l,
                                            overrides: {
                                              s00XJeKUG: {
                                                background: {
                                                  alt: "",
                                                  fit: "stretch",
                                                  loading: be(3157.4),
                                                  pixelHeight: 300,
                                                  pixelWidth: 300,
                                                  positionX: "center",
                                                  positionY: "center",
                                                  src: "/images/y3lMjzVgKvG9fwcByQQpzeTbw6M.png",
                                                },
                                              },
                                            },
                                            children: r($, {
                                              background: {
                                                alt: "",
                                                fit: "stretch",
                                                pixelHeight: 300,
                                                pixelWidth: 300,
                                                positionX: "center",
                                                positionY: "center",
                                                src: "/images/y3lMjzVgKvG9fwcByQQpzeTbw6M.png",
                                              },
                                              className: "framer-192j8ld",
                                              "data-framer-name": "Ellipse 3",
                                              name: "Ellipse 3",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        S() &&
                          r(I, {
                            breakpoint: l,
                            overrides: { s00XJeKUG: { height: 44, y: 3474.4 } },
                            children: r(P, {
                              children: r(ae, {
                                className:
                                  "framer-1wgpiu0-container hidden-72rtr7 hidden-o34w84",
                                children: r(pe, {
                                  cITQpDSzU: !1,
                                  cSN7oJ9Cy: !0,
                                  eVKX59h3Y: "https://shp-fi.vercel.app//",
                                  GQMIB2fo_: "arrow-up-right",
                                  height: "100%",
                                  hvc8_eco1: !1,
                                  id: "j_qL2eaR2",
                                  jY9wMwBAL: "Explore more products",
                                  layoutId: "j_qL2eaR2",
                                  Q5d6XPMqx: !1,
                                  style: { height: "100%" },
                                  variant: "rm7iJvumB",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                r("div", {
                  className: "framer-1fvkbr4",
                  "data-framer-name": "Features Large",
                  name: "Features Large",
                  children: b("div", {
                    className: "framer-n716mj",
                    "data-framer-name": "Features",
                    name: "Features",
                    children: [
                      b("div", {
                        className: "framer-122qiap",
                        children: [
                          r(P, {
                            children: r(ae, {
                              className: "framer-ltf523-container",
                              children: r(Ae, {
                                height: "100%",
                                id: "YLH85of3A",
                                layoutId: "YLH85of3A",
                                movFile:
                                  "https://framerusercontent.com/assets/gb4ELyNg8ruTEzWRUtQWoxCyho.mp4",
                                style: { width: "100%" },
                                webmFile:
                                  "https://framerusercontent.com/assets/DExSZXs4eMRcAf68o6oDFIEmats.webm",
                                width: "100%",
                              }),
                            }),
                          }),
                          b("div", {
                            className: "framer-1evu1g4",
                            "data-framer-name": "Content",
                            name: "Content",
                            children: [
                              r(I, {
                                breakpoint: l,
                                overrides: {
                                  s00XJeKUG: {
                                    children: r(h, {
                                      children: r("h1", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7V29yayBTYW5zLTYwMA==",
                                          "--framer-font-family":
                                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                                          "--framer-font-size": "40px",
                                          "--framer-font-weight": "600",
                                          "--framer-letter-spacing": "-2px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Multi-Strategy",
                                      }),
                                    }),
                                  },
                                  uwtKjc3B5: {
                                    children: r(h, {
                                      children: r("h1", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7V29yayBTYW5zLTYwMA==",
                                          "--framer-font-family":
                                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                                          "--framer-font-size": "45px",
                                          "--framer-font-weight": "600",
                                          "--framer-letter-spacing": "-2px",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Multi-Strategy",
                                      }),
                                    }),
                                  },
                                },
                                children: r(V, {
                                  __fromCanvasComponent: !0,
                                  children: r(h, {
                                    children: r("h1", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7V29yayBTYW5zLTYwMA==",
                                        "--framer-font-family":
                                          '"Work Sans", "Work Sans Placeholder", sans-serif',
                                        "--framer-font-size": "50px",
                                        "--framer-font-weight": "600",
                                        "--framer-letter-spacing": "-2px",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "Multi-Strategy",
                                    }),
                                  }),
                                  className: "framer-3qerp8",
                                  fonts: ["GF;Work Sans-600"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              r(I, {
                                breakpoint: l,
                                overrides: {
                                  s00XJeKUG: {
                                    children: r(h, {
                                      children: r("p", {
                                        className:
                                          "framer-styles-preset-f56z90",
                                        "data-styles-preset": "tTGubzke4",
                                        style: {
                                          "--framer-text-alignment": "center",
                                        },
                                        children:
                                          "Automated yield chasing vaults optimized real-time for highest returns in DeFi.",
                                      }),
                                    }),
                                  },
                                },
                                children: r(V, {
                                  __fromCanvasComponent: !0,
                                  children: r(h, {
                                    children: r("p", {
                                      className: "framer-styles-preset-f56z90",
                                      "data-styles-preset": "tTGubzke4",
                                      children:
                                        "Automated yield chasing vaults optimized real-time for highest returns in DeFi.",
                                    }),
                                  }),
                                  className: "framer-1cku1z5",
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              b("div", {
                                className: "framer-f075mk",
                                children: [
                                  r(I, {
                                    breakpoint: l,
                                    overrides: { s00XJeKUG: { y: 4066.4 } },
                                    children: r(P, {
                                      height: 40,
                                      children: r(ae, {
                                        className: "framer-4r56ph-container",
                                        children: r(pe, {
                                          cITQpDSzU: !1,
                                          cSN7oJ9Cy: !1,
                                          GQMIB2fo_: "dollar-sign",
                                          height: "100%",
                                          hvc8_eco1: !1,
                                          id: "fjKbEwO48",
                                          jY9wMwBAL: "Earn",
                                          layoutId: "fjKbEwO48",
                                          Q5d6XPMqx: !1,
                                          variant: "rm7iJvumB",
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  }),
                                  r(I, {
                                    breakpoint: l,
                                    overrides: { s00XJeKUG: { y: 4066.4 } },
                                    children: r(P, {
                                      height: 40,
                                      children: r(ae, {
                                        className: "framer-u0k1e9-container",
                                        children: r(pe, {
                                          cITQpDSzU: !1,
                                          cSN7oJ9Cy: !0,
                                          eVKX59h3Y:
                                            "https://sheep-finance.gitbook.io/shp-finance/the-goat-ecosystem/goat-protocol/multi-strategy-yield-vault",
                                          GQMIB2fo_: "arrow-up-right",
                                          height: "100%",
                                          hvc8_eco1: !1,
                                          id: "lWGSSeyrC",
                                          jY9wMwBAL: "Learn More",
                                          layoutId: "lWGSSeyrC",
                                          Q5d6XPMqx: !1,
                                          variant: "DMd89ikes",
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      b("div", {
                        className: "framer-1to2oc3",
                        children: [
                          b("div", {
                            className: "framer-1l4xzt0",
                            "data-framer-name": "Content",
                            name: "Content",
                            children: [
                              r(I, {
                                breakpoint: l,
                                overrides: {
                                  s00XJeKUG: {
                                    children: r(h, {
                                      children: r("h1", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7V29yayBTYW5zLTYwMA==",
                                          "--framer-font-family":
                                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                                          "--framer-font-size": "40px",
                                          "--framer-font-weight": "600",
                                          "--framer-letter-spacing": "-1.8px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Uniswap v4 Hooks",
                                      }),
                                    }),
                                  },
                                  uwtKjc3B5: {
                                    children: r(h, {
                                      children: r("h1", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7V29yayBTYW5zLTYwMA==",
                                          "--framer-font-family":
                                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                                          "--framer-font-size": "45px",
                                          "--framer-font-weight": "600",
                                          "--framer-letter-spacing": "-1.8px",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Uniswap v4 Hooks",
                                      }),
                                    }),
                                  },
                                },
                                children: r(V, {
                                  __fromCanvasComponent: !0,
                                  children: r(h, {
                                    children: r("h1", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7V29yayBTYW5zLTYwMA==",
                                        "--framer-font-family":
                                          '"Work Sans", "Work Sans Placeholder", sans-serif',
                                        "--framer-font-size": "50px",
                                        "--framer-font-weight": "600",
                                        "--framer-letter-spacing": "-2px",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "Uniswap v4 Hooks",
                                    }),
                                  }),
                                  className: "framer-u6uy0b",
                                  fonts: ["GF;Work Sans-600"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              r(I, {
                                breakpoint: l,
                                overrides: {
                                  s00XJeKUG: {
                                    children: r(h, {
                                      children: r("p", {
                                        className:
                                          "framer-styles-preset-f56z90",
                                        "data-styles-preset": "tTGubzke4",
                                        style: {
                                          "--framer-text-alignment": "center",
                                        },
                                        children:
                                          "Utilize out-of-range liquidity with Uniswap v4 hooks to earn consistently with Yield Chasing products.",
                                      }),
                                    }),
                                  },
                                },
                                children: r(V, {
                                  __fromCanvasComponent: !0,
                                  children: r(h, {
                                    children: r("p", {
                                      className: "framer-styles-preset-f56z90",
                                      "data-styles-preset": "tTGubzke4",
                                      children:
                                        "Utilize out-of-range liquidity with Uniswap v4 hooks to earn consistently with Yield Chasing products.",
                                    }),
                                  }),
                                  className: "framer-19sy4k2",
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              r("div", {
                                className: "framer-14qayr0",
                                children: r(I, {
                                  breakpoint: l,
                                  overrides: { s00XJeKUG: { y: 4634.4 } },
                                  children: r(P, {
                                    height: 40,
                                    children: r(ae, {
                                      className: "framer-10g810v-container",
                                      children: r(pe, {
                                        cITQpDSzU: !1,
                                        cSN7oJ9Cy: !1,
                                        GQMIB2fo_: "calendar",
                                        height: "100%",
                                        hvc8_eco1: !0,
                                        id: "wnaA2ixwJ",
                                        jY9wMwBAL: "Coming Soon",
                                        layoutId: "wnaA2ixwJ",
                                        Q5d6XPMqx: !1,
                                        variant: "xjbrmDjxY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          r(P, {
                            children: r(ae, {
                              className: "framer-q7y3ep-container",
                              children: r(Ae, {
                                height: "100%",
                                id: "ZjNNkk1Ug",
                                layoutId: "ZjNNkk1Ug",
                                movFile:
                                  "https://framerusercontent.com/assets/PmQ3TkLzHWR5JLg8LGhTrtkdIo.mp4",
                                style: { width: "100%" },
                                webmFile:
                                  "https://framerusercontent.com/assets/3yAVTlRRQKoRfAgB0Dk9cpad9ts.webm",
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      b("div", {
                        className: "framer-51a2l3",
                        children: [
                          r(P, {
                            children: r(ae, {
                              className: "framer-1uer45x-container",
                              children: r(Ae, {
                                height: "100%",
                                id: "Qfqzg0jdw",
                                layoutId: "Qfqzg0jdw",
                                movFile:
                                  "https://framerusercontent.com/assets/Z4fWQxBNy2gNYp93z9B0xmsjYks.mp4",
                                style: { width: "100%" },
                                webmFile:
                                  "https://framerusercontent.com/assets/Map3XswavJrrolLUD9UwFpwa8s.webm",
                                width: "100%",
                              }),
                            }),
                          }),
                          b("div", {
                            className: "framer-tvyfv5",
                            "data-framer-name": "Content",
                            name: "Content",
                            children: [
                              r(I, {
                                breakpoint: l,
                                overrides: {
                                  s00XJeKUG: {
                                    children: r(h, {
                                      children: r("h1", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7V29yayBTYW5zLTYwMA==",
                                          "--framer-font-family":
                                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                                          "--framer-font-size": "40px",
                                          "--framer-font-weight": "600",
                                          "--framer-letter-spacing": "-2px",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Custom Vaults",
                                      }),
                                    }),
                                  },
                                  uwtKjc3B5: {
                                    children: r(h, {
                                      children: r("h1", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7V29yayBTYW5zLTYwMA==",
                                          "--framer-font-family":
                                            '"Work Sans", "Work Sans Placeholder", sans-serif',
                                          "--framer-font-size": "45px",
                                          "--framer-font-weight": "600",
                                          "--framer-letter-spacing": "-2px",
                                          "--framer-text-alignment": "left",
                                          "--framer-text-color":
                                            "rgb(255, 255, 255)",
                                        },
                                        children: "Custom Vaults",
                                      }),
                                    }),
                                  },
                                },
                                children: r(V, {
                                  __fromCanvasComponent: !0,
                                  children: r(h, {
                                    children: r("h1", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7V29yayBTYW5zLTYwMA==",
                                        "--framer-font-family":
                                          '"Work Sans", "Work Sans Placeholder", sans-serif',
                                        "--framer-font-size": "50px",
                                        "--framer-font-weight": "600",
                                        "--framer-letter-spacing": "-2px",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "rgb(255, 255, 255)",
                                      },
                                      children: "Custom Vaults",
                                    }),
                                  }),
                                  className: "framer-1k29tuf",
                                  fonts: ["GF;Work Sans-600"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              r(I, {
                                breakpoint: l,
                                overrides: {
                                  s00XJeKUG: {
                                    children: r(h, {
                                      children: r("p", {
                                        className:
                                          "framer-styles-preset-f56z90",
                                        "data-styles-preset": "tTGubzke4",
                                        style: {
                                          "--framer-text-alignment": "center",
                                        },
                                        children:
                                          "Create personalized vaults to optimize your yield based on your own strategies.",
                                      }),
                                    }),
                                  },
                                },
                                children: r(V, {
                                  __fromCanvasComponent: !0,
                                  children: r(h, {
                                    children: r("p", {
                                      className: "framer-styles-preset-f56z90",
                                      "data-styles-preset": "tTGubzke4",
                                      children:
                                        "Create personalized vaults to optimize your yield based on your own strategies.",
                                    }),
                                  }),
                                  className: "framer-1cwtf2j",
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                              r("div", {
                                className: "framer-irleub",
                                children: r(I, {
                                  breakpoint: l,
                                  overrides: { s00XJeKUG: { y: 5202.4 } },
                                  children: r(P, {
                                    height: 40,
                                    children: r(ae, {
                                      className: "framer-k56rje-container",
                                      children: r(pe, {
                                        cITQpDSzU: !1,
                                        cSN7oJ9Cy: !1,
                                        GQMIB2fo_: "calendar",
                                        height: "100%",
                                        hvc8_eco1: !0,
                                        id: "TvfQjS3NW",
                                        jY9wMwBAL: "Coming Soon",
                                        layoutId: "TvfQjS3NW",
                                        Q5d6XPMqx: !1,
                                        variant: "xjbrmDjxY",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),

                b("div", {
                  className: "framer-tgl33b",
                  "data-framer-name": "Pivot",
                  name: "Pivot",
                  children: [
                    b("div", {
                      className: "framer-qwkckz",
                      children: [
                        r(I, {
                          breakpoint: l,
                          overrides: {
                            s00XJeKUG: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 450,
                                intrinsicWidth: 450,
                                loading: be(5732.4),
                                pixelHeight: 500,
                                pixelWidth: 500,
                                src: "/images/d4V7U7NWwht16w66GHeUohRG3E.png",
                              },
                            },
                          },
                          children: r($, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 450,
                              intrinsicWidth: 450,
                              pixelHeight: 500,
                              pixelWidth: 500,
                              src: "/images/d4V7U7NWwht16w66GHeUohRG3E.png",
                            },
                            className: "framer-17ty3b2",
                            "data-framer-name": "image",
                            name: "image",
                            style: { rotate: -30 },
                            whileHover: ys,
                          }),
                        }),
                        r(I, {
                          breakpoint: l,
                          overrides: {
                            s00XJeKUG: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 450,
                                intrinsicWidth: 450,
                                loading: be(5732.4),
                                pixelHeight: 450,
                                pixelWidth: 450,
                                src: "/images/uqZqTqYyg6rDlIkTDf7l6TJqnA.png",
                              },
                            },
                          },
                          children: r($, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 450,
                              intrinsicWidth: 450,
                              pixelHeight: 450,
                              pixelWidth: 450,
                              src: "/images/uqZqTqYyg6rDlIkTDf7l6TJqnA.png",
                            },
                            className: "framer-ibc4tp",
                            "data-framer-name": "image",
                            name: "image",
                            style: { rotate: 30 },
                            whileHover: vs,
                          }),
                        }),
                      ],
                    }),
                    b("div", {
                      className: "framer-li8cw2",
                      "data-framer-name": "Wrapper",
                      name: "Wrapper",
                      children: [
                        r(V, {
                          __fromCanvasComponent: !0,
                          children: r(h, {
                            children: r("h2", {
                              style: {
                                "--font-selector": "R0Y7V29yayBTYW5zLTYwMA==",
                                "--framer-font-family":
                                  '"Work Sans", "Work Sans Placeholder", sans-serif',
                                "--framer-font-size": "50px",
                                "--framer-font-weight": "600",
                                "--framer-letter-spacing": "-2.1px",
                                "--framer-text-alignment": "center",
                                "--framer-text-color": "rgb(255, 255, 255)",
                              },
                              children: "Join Our Community",
                            }),
                          }),
                          className: "framer-3cofwl",
                          fonts: ["GF;Work Sans-600"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        b("div", {
                          className: "framer-44cpfc",
                          "data-framer-name": "Buttons",
                          name: "Buttons",
                          children: [
                            r(I, {
                              breakpoint: l,
                              overrides: { s00XJeKUG: { y: 5910.4 } },
                              children: r(P, {
                                height: 40,
                                children: r(I, {
                                  breakpoint: l,
                                  overrides: {
                                    uwtKjc3B5: { whileHover: void 0 },
                                  },
                                  children: r(ae, {
                                    className: "framer-1sbna23-container",
                                    whileHover: ws,
                                    children: r(I, {
                                      breakpoint: l,
                                      overrides: {
                                        uwtKjc3B5: { variant: "OlpYPL4uF" },
                                      },
                                      children: r(pe, {
                                        cITQpDSzU: !1,
                                        cSN7oJ9Cy: !0,
                                        eVKX59h3Y:
                                          "https://t.me",
                                        GQMIB2fo_: "arrow-up-right",
                                        height: "100%",
                                        hvc8_eco1: !1,
                                        id: "wuY0OnEHA",
                                        jY9wMwBAL: "Telegram",
                                        layoutId: "wuY0OnEHA",
                                        Q5d6XPMqx: !0,
                                        variant: "rm7iJvumB",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            r(I, {
                              breakpoint: l,
                              overrides: { s00XJeKUG: { y: 5910.4 } },
                              children: r(P, {
                                height: 40,
                                children: r(ae, {
                                  className: "framer-1awgt94-container",
                                  children: r(I, {
                                    breakpoint: l,
                                    overrides: {
                                      uwtKjc3B5: { variant: "RrALB9OPK" },
                                    },
                                    children: r(pe, {
                                      cITQpDSzU: !1,
                                      cSN7oJ9Cy: !0,
                                      eVKX59h3Y: "https://x.com/",
                                      GQMIB2fo_: "arrow-up-right",
                                      height: "100%",
                                      hvc8_eco1: !1,
                                      id: "baKfSI_8p",
                                      jY9wMwBAL: "Twitter",
                                      layoutId: "baKfSI_8p",
                                      Q5d6XPMqx: !0,
                                      variant: "rm7iJvumB",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                b("div", {
                  className: "framer-4h2j33",
                  children: [
                    r("div", { className: "framer-lx3ltd" }),
                    r("div", {
                      className: "framer-109druq",
                      "data-framer-name": "FAQ",
                      name: "FAQ",
                      children: b(wa, {
                        className: "framer-14bp6jt",
                        "data-framer-name": "Container",
                        name: "Container",
                        children: [
                          r(I, {
                            breakpoint: l,
                            overrides: {
                              s00XJeKUG: {
                                children: r(h, {
                                  children: r("h2", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7V29yayBTYW5zLTUwMA==",
                                      "--framer-font-family":
                                        '"Work Sans", "Work Sans Placeholder", sans-serif',
                                      "--framer-font-size": "38px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-2px",
                                      "--framer-line-height": "100%",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(9, 9, 11))",
                                    },
                                    children: "Frequently Asked Questions",
                                  }),
                                }),
                              },
                              uwtKjc3B5: {
                                children: r(h, {
                                  children: r("h2", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7V29yayBTYW5zLTUwMA==",
                                      "--framer-font-family":
                                        '"Work Sans", "Work Sans Placeholder", sans-serif',
                                      "--framer-font-size": "38px",
                                      "--framer-font-weight": "500",
                                      "--framer-letter-spacing": "-2px",
                                      "--framer-line-height": "100%",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(9, 9, 11))",
                                    },
                                    children: "Frequently Asked Questions",
                                  }),
                                }),
                              },
                            },
                            children: r(V, {
                              __fromCanvasComponent: !0,
                              children: r(h, {
                                children: r("h2", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7V29yayBTYW5zLTUwMA==",
                                    "--framer-font-family":
                                      '"Work Sans", "Work Sans Placeholder", sans-serif',
                                    "--framer-font-size": "60px",
                                    "--framer-font-weight": "500",
                                    "--framer-letter-spacing": "-2px",
                                    "--framer-line-height": "100%",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--token-53bf25c3-7642-421c-8d07-2b0c4728eb4c, rgb(9, 9, 11))",
                                  },
                                  children: "Frequently Asked Questions",
                                }),
                              }),
                              className: "framer-10k2r09",
                              fonts: ["GF;Work Sans-500"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          r(I, {
                            breakpoint: l,
                            overrides: {
                              s00XJeKUG: {
                                width: "calc(min(100vw, 1920px) - 50px)",
                                y: 6098.4,
                              },
                              uwtKjc3B5: {
                                width: "calc(min(100vw, 1920px) - 60px)",
                              },
                            },
                            children: r(P, {
                              height: 184,
                              width: "calc(min(100vw, 1920px) - 400px)",
                              children: r(ae, {
                                className: "framer-158bx7r-container",
                                children: r(wt, {
                                  height: "100%",
                                  id: "v3J9lQ2cM",
                                  layoutId: "v3J9lQ2cM",
                                  style: { maxWidth: "100%", width: "100%" },
                                  variant: "mb8ZxlNvl",
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    r("div", {
                      className: "framer-7tfqvc",
                      "data-framer-name": "Footer",
                      name: "Footer",
                      children: r(I, {
                        breakpoint: l,
                        overrides: {
                          s00XJeKUG: { width: "min(100vw, 1920px)", y: 6312.4 },
                          uwtKjc3B5: { width: "min(100vw, 1920px)" },
                        },
                        children: r(P, {
                          height: 300,
                          width: "calc(min(100vw, 1920px) - 400px)",
                          children: r(ae, {
                            className: "framer-1gn9j2l-container",
                            children: r(I, {
                              breakpoint: l,
                              overrides: {
                                s00XJeKUG: {
                                  style: { width: "100%" },
                                  variant: "Xetn5TI4F",
                                },
                                uwtKjc3B5: { variant: "VL4LGYHBt" },
                              },
                              children: r(Ft, {
                                height: "100%",
                                id: "fis9EsJlN",
                                layoutId: "fis9EsJlN",
                                style: { height: "100%", width: "100%" },
                                variant: "ThbI0zmbW",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            r("div", { className: Y(ba, ...v), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Fs = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Kt.bodyClassName}-framer-FxKKm { background: var(--token-ddb33851-f942-4c00-a71e-63a2f30228e6, rgb(5, 5, 6)); }`,
    ".framer-FxKKm.framer-lux5qc, .framer-FxKKm .framer-lux5qc { display: block; }",
    ".framer-FxKKm.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-ddb33851-f942-4c00-a71e-63a2f30228e6, #050506); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1400px; }",
    ".framer-FxKKm .framer-tkrp9f-container { flex: none; height: 100%; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }",
    '.framer-FxKKm .framer-aafkq6 { background: radial-gradient(51% 46% at 57.49999999999999% 45.9%, var(--token-96b6cb3e-967e-4221-b7e2-399e6d62b7ed, rgba(111, 27, 150, 0.7)) /* {"name":"Gradient"} */ 0%, rgba(0, 0, 0, 0) 100%); flex: none; height: 21%; left: 0px; opacity: 0.4; overflow: hidden; position: absolute; top: 0px; width: 100%; }',
    ".framer-FxKKm .framer-14q2j1y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1920px; overflow: hidden; padding: 0px 80px 0px 80px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-8dx1sl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; will-change: transform; z-index: 4; }",
    ".framer-FxKKm .framer-1r7un7p-container { flex: none; height: 70px; max-width: 1300px; position: relative; width: 100%; z-index: 1; }",
    ".framer-FxKKm .framer-1bxd7mi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 120px 0px 90px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-FxKKm .framer-17hubt0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 120px 0px 120px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-1undc2l { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-FxKKm .framer-103l49b-container { flex: none; height: auto; position: relative; width: 660px; z-index: 0; }",
    ".framer-FxKKm .framer-d595tg { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 550px; word-break: break-word; word-wrap: break-word; }",
    ".framer-FxKKm .framer-qg0spw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-1u1dsu0-container, .framer-FxKKm .framer-mu6haj-container, .framer-FxKKm .framer-1kcdspj-container, .framer-FxKKm .framer-4r56ph-container, .framer-FxKKm .framer-u0k1e9-container, .framer-FxKKm .framer-10g810v-container, .framer-FxKKm .framer-k56rje-container, .framer-FxKKm .framer-1sbna23-container, .framer-FxKKm .framer-1awgt94-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-FxKKm .framer-4fwkg1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-153g7c1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 60px 0px 60px 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-189ksz2, .framer-FxKKm .framer-1tq80uy, .framer-FxKKm .framer-1itm3vg, .framer-FxKKm .framer-1w5slz4, .framer-FxKKm .framer-n8ber0, .framer-FxKKm .framer-emqt7s { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-FxKKm .framer-yxyx59-container { flex: none; height: 80px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-tb2ld3 { height: 70px; position: relative; width: 60px; }",
    ".framer-FxKKm .framer-11ow29l { height: 44px; position: relative; width: 141px; }",
    ".framer-FxKKm .framer-1dyaa7j, .framer-FxKKm .framer-14qzgdm, .framer-FxKKm .framer-ol7cvn { height: 50px; position: relative; width: 145px; }",
    ".framer-FxKKm .framer-1sci5cu { height: 52px; position: relative; width: 68px; }",
    ".framer-FxKKm .framer-1ezetas { -webkit-filter: grayscale(0); align-content: center; align-items: center; display: flex; filter: grayscale(0); flex: none; flex-direction: row; flex-wrap: nowrap; height: 70px; justify-content: space-evenly; overflow: hidden; padding: 0px; position: relative; width: 1168px; }",
    ".framer-FxKKm .framer-c7w2y9 { flex: none; height: 55px; position: relative; width: 73px; }",
    ".framer-FxKKm .framer-qjcdcf { flex: none; height: 30px; position: relative; width: 190px; }",
    ".framer-FxKKm .framer-5nyjzr { flex: none; height: 49px; position: relative; width: 114px; }",
    ".framer-FxKKm .framer-zl0no3 { flex: none; height: 52px; position: relative; width: 68px; }",
    ".framer-FxKKm .framer-ytqtfm, .framer-FxKKm .framer-8n8cnn { flex: none; height: 56px; position: relative; width: 186px; }",
    ".framer-FxKKm .framer-1jprrd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 0; }",
    ".framer-FxKKm .framer-qerdmd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1920px; overflow: hidden; padding: 60px 200px 60px 200px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-cpemrm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-12l2gmg, .framer-FxKKm .framer-1pc2gj2, .framer-FxKKm .framer-3cofa7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-FxKKm .framer-rbsm4r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-FxKKm .framer-1ty2uze { flex: none; height: 50px; position: relative; width: 50px; }",
    ".framer-FxKKm .framer-g53zun { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-18w6tg6-container, .framer-FxKKm .framer-1jsk72f-container, .framer-FxKKm .framer-7o6s52-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }",
    ".framer-FxKKm .framer-jc0bom { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: 480px; justify-content: center; max-width: 1920px; overflow: hidden; padding: 20px 200px 40px 200px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-1ni3ake { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-n17wal { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: 300px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-143njqk-container { flex: none; height: 300px; position: relative; width: 300px; }",
    ".framer-FxKKm .framer-1nourbq, .framer-FxKKm .framer-88yulz { align-content: center; align-items: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 300px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-FxKKm .framer-shqsif { background-color: rgba(51, 114, 73, 0.25); flex: 1 0 0px; height: 100%; overflow: visible; position: relative; width: 1px; }",
    ".framer-FxKKm .framer-1s5hjzl, .framer-FxKKm .framer-68qfyk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 25px; position: absolute; top: 25px; white-space: pre; width: auto; }",
    ".framer-FxKKm .framer-uuyzml, .framer-FxKKm .framer-1joh1gn { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 17%; left: 25px; position: absolute; top: 75px; white-space: pre-wrap; width: 79%; word-break: break-word; word-wrap: break-word; }",
    ".framer-FxKKm .framer-1n9h4kp, .framer-FxKKm .framer-1b15mx7 { align-content: center; align-items: center; bottom: 25px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 0px; width: 100%; }",
    ".framer-FxKKm .framer-bc3fzc { -webkit-user-select: none; background-color: #42a163; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; cursor: pointer; flex: none; height: 50px; overflow: visible; position: relative; text-decoration: none; user-select: none; width: 200px; }",
    ".framer-FxKKm .framer-3k7d5g, .framer-FxKKm .framer-32abdb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); white-space: pre; width: auto; }",
    ".framer-FxKKm .framer-1tawjo8, .framer-FxKKm .framer-1yck4wy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: absolute; right: 35px; top: 31px; width: min-content; }",
    ".framer-FxKKm .framer-qirfwx, .framer-FxKKm .framer-xn1wwh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-FxKKm .framer-15qedw1, .framer-FxKKm .framer-igfolv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-FxKKm .framer-16u3a45, .framer-FxKKm .framer-1kunyip, .framer-FxKKm .framer-dv94t1, .framer-FxKKm .framer-11snqqp { flex: none; height: 21px; overflow: visible; position: relative; width: 12px; }",
    ".framer-FxKKm .framer-15z9tf2, .framer-FxKKm .framer-1g3t7li, .framer-FxKKm .framer-17pfvfg, .framer-FxKKm .framer-192j8ld { border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; bottom: 0px; flex: none; left: 0px; position: absolute; right: -10px; top: 0px; }",
    ".framer-FxKKm .framer-t0rhw1 { background-color: rgba(143, 93, 36, 0.25); flex: 1 0 0px; height: 100%; overflow: visible; position: relative; width: 1px; }",
    ".framer-FxKKm .framer-b8inmo { background-color: #614d37; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; flex: none; height: 50px; overflow: visible; position: relative; width: 200px; }",
    ".framer-FxKKm .framer-1wgpiu0-container { flex: none; height: 44px; position: relative; width: auto; }",
    ".framer-FxKKm .framer-1fvkbr4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1920px; overflow: hidden; padding: 20px 200px 60px 200px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-n716mj { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-FxKKm .framer-122qiap, .framer-FxKKm .framer-51a2l3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-ltf523-container, .framer-FxKKm .framer-q7y3ep-container, .framer-FxKKm .framer-1uer45x-container { flex: none; height: auto; position: relative; width: 500px; }",
    ".framer-FxKKm .framer-1evu1g4, .framer-FxKKm .framer-1l4xzt0, .framer-FxKKm .framer-tvyfv5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }",
    ".framer-FxKKm .framer-3qerp8, .framer-FxKKm .framer-u6uy0b, .framer-FxKKm .framer-1k29tuf, .framer-FxKKm .framer-3cofwl { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-FxKKm .framer-1cku1z5, .framer-FxKKm .framer-19sy4k2, .framer-FxKKm .framer-1cwtf2j { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-FxKKm .framer-f075mk, .framer-FxKKm .framer-14qayr0, .framer-FxKKm .framer-irleub { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-FxKKm .framer-1to2oc3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-7jh9gy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-1qk1ckw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 1920px; overflow: hidden; padding: 20px 200px 40px 200px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-1lhtala { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-14nluss-container, .framer-FxKKm .framer-17468y8-container, .framer-FxKKm .framer-1265h5w-container { flex: 1 0 0px; height: 70px; position: relative; width: 1px; }",
    ".framer-FxKKm .framer-tgl33b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1920px; overflow: visible; padding: 20px 0px 60px 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-FxKKm .framer-qwkckz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 485px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 0px 10px 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-17ty3b2, .framer-FxKKm .framer-ibc4tp { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 58px); overflow: visible; position: relative; width: 58px; }",
    ".framer-FxKKm .framer-li8cw2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; max-width: 100%; overflow: visible; padding: 0px; position: relative; width: 524px; }",
    ".framer-FxKKm .framer-44cpfc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-FxKKm .framer-4h2j33 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: 754px; justify-content: center; overflow: hidden; padding: 60px 0px 40px 0px; position: relative; width: 100%; }",
    '.framer-FxKKm .framer-lx3ltd { -webkit-filter: blur(0px); background: linear-gradient(180deg, var(--token-ddb33851-f942-4c00-a71e-63a2f30228e6, #050506) /* {"name":"Background"} */ 18.07784346846847%, var(--token-96b6cb3e-967e-4221-b7e2-399e6d62b7ed, rgba(111, 27, 150, 0.7)) /* {"name":"Gradient"} */ 100%); bottom: 0px; filter: blur(0px); flex: none; height: 754px; left: calc(50.00000000000002% - 100% / 2); opacity: 0.4; overflow: hidden; position: absolute; width: 100%; }',
    ".framer-FxKKm .framer-109druq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1920px; overflow: visible; padding: 20px 200px 60px 200px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-14bp6jt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-10k2r09 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-FxKKm .framer-158bx7r-container { flex: none; height: auto; max-width: 100%; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-7tfqvc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 300px; justify-content: center; max-width: 1920px; overflow: hidden; padding: 0px 200px 0px 200px; position: relative; width: 100%; }",
    ".framer-FxKKm .framer-1gn9j2l-container { flex: none; height: 100%; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-FxKKm.framer-72rtr7, .framer-FxKKm .framer-14q2j1y, .framer-FxKKm .framer-8dx1sl, .framer-FxKKm .framer-1bxd7mi, .framer-FxKKm .framer-17hubt0, .framer-FxKKm .framer-1undc2l, .framer-FxKKm .framer-qg0spw, .framer-FxKKm .framer-4fwkg1, .framer-FxKKm .framer-153g7c1, .framer-FxKKm .framer-1jprrd, .framer-FxKKm .framer-qerdmd, .framer-FxKKm .framer-cpemrm, .framer-FxKKm .framer-rbsm4r, .framer-FxKKm .framer-g53zun, .framer-FxKKm .framer-jc0bom, .framer-FxKKm .framer-n17wal, .framer-FxKKm .framer-1nourbq, .framer-FxKKm .framer-1n9h4kp, .framer-FxKKm .framer-1tawjo8, .framer-FxKKm .framer-qirfwx, .framer-FxKKm .framer-15qedw1, .framer-FxKKm .framer-88yulz, .framer-FxKKm .framer-1b15mx7, .framer-FxKKm .framer-1yck4wy, .framer-FxKKm .framer-xn1wwh, .framer-FxKKm .framer-igfolv, .framer-FxKKm .framer-1fvkbr4, .framer-FxKKm .framer-n716mj, .framer-FxKKm .framer-122qiap, .framer-FxKKm .framer-1evu1g4, .framer-FxKKm .framer-f075mk, .framer-FxKKm .framer-1to2oc3, .framer-FxKKm .framer-1l4xzt0, .framer-FxKKm .framer-14qayr0, .framer-FxKKm .framer-51a2l3, .framer-FxKKm .framer-tvyfv5, .framer-FxKKm .framer-irleub, .framer-FxKKm .framer-7jh9gy, .framer-FxKKm .framer-1qk1ckw, .framer-FxKKm .framer-1lhtala, .framer-FxKKm .framer-tgl33b, .framer-FxKKm .framer-qwkckz, .framer-FxKKm .framer-li8cw2, .framer-FxKKm .framer-44cpfc, .framer-FxKKm .framer-4h2j33, .framer-FxKKm .framer-109druq, .framer-FxKKm .framer-14bp6jt, .framer-FxKKm .framer-7tfqvc { gap: 0px; } .framer-FxKKm.framer-72rtr7 > *, .framer-FxKKm .framer-14q2j1y > *, .framer-FxKKm .framer-4fwkg1 > *, .framer-FxKKm .framer-tgl33b > *, .framer-FxKKm .framer-109druq > *, .framer-FxKKm .framer-7tfqvc > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-FxKKm.framer-72rtr7 > :first-child, .framer-FxKKm .framer-14q2j1y > :first-child, .framer-FxKKm .framer-1undc2l > :first-child, .framer-FxKKm .framer-4fwkg1 > :first-child, .framer-FxKKm .framer-153g7c1 > :first-child, .framer-FxKKm .framer-qerdmd > :first-child, .framer-FxKKm .framer-jc0bom > :first-child, .framer-FxKKm .framer-1n9h4kp > :first-child, .framer-FxKKm .framer-1b15mx7 > :first-child, .framer-FxKKm .framer-n716mj > :first-child, .framer-FxKKm .framer-1evu1g4 > :first-child, .framer-FxKKm .framer-1l4xzt0 > :first-child, .framer-FxKKm .framer-tvyfv5 > :first-child, .framer-FxKKm .framer-7jh9gy > :first-child, .framer-FxKKm .framer-1qk1ckw > :first-child, .framer-FxKKm .framer-tgl33b > :first-child, .framer-FxKKm .framer-li8cw2 > :first-child, .framer-FxKKm .framer-4h2j33 > :first-child, .framer-FxKKm .framer-109druq > :first-child, .framer-FxKKm .framer-14bp6jt > :first-child, .framer-FxKKm .framer-7tfqvc > :first-child { margin-top: 0px; } .framer-FxKKm.framer-72rtr7 > :last-child, .framer-FxKKm .framer-14q2j1y > :last-child, .framer-FxKKm .framer-1undc2l > :last-child, .framer-FxKKm .framer-4fwkg1 > :last-child, .framer-FxKKm .framer-153g7c1 > :last-child, .framer-FxKKm .framer-qerdmd > :last-child, .framer-FxKKm .framer-jc0bom > :last-child, .framer-FxKKm .framer-1n9h4kp > :last-child, .framer-FxKKm .framer-1b15mx7 > :last-child, .framer-FxKKm .framer-n716mj > :last-child, .framer-FxKKm .framer-1evu1g4 > :last-child, .framer-FxKKm .framer-1l4xzt0 > :last-child, .framer-FxKKm .framer-tvyfv5 > :last-child, .framer-FxKKm .framer-7jh9gy > :last-child, .framer-FxKKm .framer-1qk1ckw > :last-child, .framer-FxKKm .framer-tgl33b > :last-child, .framer-FxKKm .framer-li8cw2 > :last-child, .framer-FxKKm .framer-4h2j33 > :last-child, .framer-FxKKm .framer-109druq > :last-child, .framer-FxKKm .framer-14bp6jt > :last-child, .framer-FxKKm .framer-7tfqvc > :last-child { margin-bottom: 0px; } .framer-FxKKm .framer-8dx1sl > *, .framer-FxKKm .framer-1bxd7mi > *, .framer-FxKKm .framer-17hubt0 > *, .framer-FxKKm .framer-qirfwx > *, .framer-FxKKm .framer-xn1wwh > *, .framer-FxKKm .framer-1to2oc3 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-FxKKm .framer-8dx1sl > :first-child, .framer-FxKKm .framer-1bxd7mi > :first-child, .framer-FxKKm .framer-17hubt0 > :first-child, .framer-FxKKm .framer-qg0spw > :first-child, .framer-FxKKm .framer-1jprrd > :first-child, .framer-FxKKm .framer-cpemrm > :first-child, .framer-FxKKm .framer-rbsm4r > :first-child, .framer-FxKKm .framer-g53zun > :first-child, .framer-FxKKm .framer-n17wal > :first-child, .framer-FxKKm .framer-1nourbq > :first-child, .framer-FxKKm .framer-1tawjo8 > :first-child, .framer-FxKKm .framer-qirfwx > :first-child, .framer-FxKKm .framer-15qedw1 > :first-child, .framer-FxKKm .framer-88yulz > :first-child, .framer-FxKKm .framer-1yck4wy > :first-child, .framer-FxKKm .framer-xn1wwh > :first-child, .framer-FxKKm .framer-igfolv > :first-child, .framer-FxKKm .framer-1fvkbr4 > :first-child, .framer-FxKKm .framer-122qiap > :first-child, .framer-FxKKm .framer-f075mk > :first-child, .framer-FxKKm .framer-1to2oc3 > :first-child, .framer-FxKKm .framer-14qayr0 > :first-child, .framer-FxKKm .framer-51a2l3 > :first-child, .framer-FxKKm .framer-irleub > :first-child, .framer-FxKKm .framer-1lhtala > :first-child, .framer-FxKKm .framer-qwkckz > :first-child, .framer-FxKKm .framer-44cpfc > :first-child { margin-left: 0px; } .framer-FxKKm .framer-8dx1sl > :last-child, .framer-FxKKm .framer-1bxd7mi > :last-child, .framer-FxKKm .framer-17hubt0 > :last-child, .framer-FxKKm .framer-qg0spw > :last-child, .framer-FxKKm .framer-1jprrd > :last-child, .framer-FxKKm .framer-cpemrm > :last-child, .framer-FxKKm .framer-rbsm4r > :last-child, .framer-FxKKm .framer-g53zun > :last-child, .framer-FxKKm .framer-n17wal > :last-child, .framer-FxKKm .framer-1nourbq > :last-child, .framer-FxKKm .framer-1tawjo8 > :last-child, .framer-FxKKm .framer-qirfwx > :last-child, .framer-FxKKm .framer-15qedw1 > :last-child, .framer-FxKKm .framer-88yulz > :last-child, .framer-FxKKm .framer-1yck4wy > :last-child, .framer-FxKKm .framer-xn1wwh > :last-child, .framer-FxKKm .framer-igfolv > :last-child, .framer-FxKKm .framer-1fvkbr4 > :last-child, .framer-FxKKm .framer-122qiap > :last-child, .framer-FxKKm .framer-f075mk > :last-child, .framer-FxKKm .framer-1to2oc3 > :last-child, .framer-FxKKm .framer-14qayr0 > :last-child, .framer-FxKKm .framer-51a2l3 > :last-child, .framer-FxKKm .framer-irleub > :last-child, .framer-FxKKm .framer-1lhtala > :last-child, .framer-FxKKm .framer-qwkckz > :last-child, .framer-FxKKm .framer-44cpfc > :last-child { margin-right: 0px; } .framer-FxKKm .framer-1undc2l > *, .framer-FxKKm .framer-153g7c1 > *, .framer-FxKKm .framer-qerdmd > *, .framer-FxKKm .framer-jc0bom > *, .framer-FxKKm .framer-1qk1ckw > *, .framer-FxKKm .framer-14bp6jt > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-FxKKm .framer-qg0spw > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-FxKKm .framer-1jprrd > *, .framer-FxKKm .framer-1nourbq > *, .framer-FxKKm .framer-88yulz > *, .framer-FxKKm .framer-1fvkbr4 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-FxKKm .framer-cpemrm > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-FxKKm .framer-rbsm4r > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-FxKKm .framer-g53zun > * { margin: 0px; margin-left: calc(25px / 2); margin-right: calc(25px / 2); } .framer-FxKKm .framer-n17wal > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } .framer-FxKKm .framer-1n9h4kp > *, .framer-FxKKm .framer-1b15mx7 > *, .framer-FxKKm .framer-1evu1g4 > *, .framer-FxKKm .framer-1l4xzt0 > *, .framer-FxKKm .framer-tvyfv5 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-FxKKm .framer-1tawjo8 > *, .framer-FxKKm .framer-1yck4wy > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-FxKKm .framer-15qedw1 > *, .framer-FxKKm .framer-igfolv > * { margin: 0px; margin-left: calc(2px / 2); margin-right: calc(2px / 2); } .framer-FxKKm .framer-n716mj > * { margin: 0px; margin-bottom: calc(100px / 2); margin-top: calc(100px / 2); } .framer-FxKKm .framer-122qiap > *, .framer-FxKKm .framer-51a2l3 > * { margin: 0px; margin-left: calc(80px / 2); margin-right: calc(80px / 2); } .framer-FxKKm .framer-f075mk > *, .framer-FxKKm .framer-14qayr0 > *, .framer-FxKKm .framer-irleub > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-FxKKm .framer-7jh9gy > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-FxKKm .framer-1lhtala > *, .framer-FxKKm .framer-44cpfc > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-FxKKm .framer-qwkckz > * { margin: 0px; margin-left: calc(485px / 2); margin-right: calc(485px / 2); } .framer-FxKKm .framer-li8cw2 > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-FxKKm .framer-4h2j33 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }",
    `@media (min-width: 810px) and (max-width: 1399px) { .${Kt.bodyClassName}-framer-FxKKm { background: var(--token-ddb33851-f942-4c00-a71e-63a2f30228e6, rgb(5, 5, 6)); } .framer-FxKKm.framer-72rtr7 { width: 810px; } .framer-FxKKm .framer-tkrp9f-container { height: 4578px; } .framer-FxKKm .framer-aafkq6 { background: radial-gradient(55.00000000000001% 46% at 50% 46.300000000000004%, var(--token-96b6cb3e-967e-4221-b7e2-399e6d62b7ed, rgba(111, 27, 150, 0.7)) /* {"name":"Gradient"} */ 0%, rgba(0, 0, 0, 0) 100%); height: 811px; right: 0px; width: unset; } .framer-FxKKm .framer-14q2j1y { padding: 0px 60px 0px 60px; } .framer-FxKKm .framer-8dx1sl { padding: 0px 20px 0px 20px; } .framer-FxKKm .framer-1bxd7mi { padding: 60px 0px 80px 0px; } .framer-FxKKm .framer-17hubt0 { flex-direction: column; gap: 30px; justify-content: flex-start; padding: 0px; } .framer-FxKKm .framer-1undc2l, .framer-FxKKm .framer-18w6tg6-container, .framer-FxKKm .framer-1jsk72f-container, .framer-FxKKm .framer-7o6s52-container { flex: none; width: 100%; } .framer-FxKKm .framer-103l49b-container { order: 0; width: 100%; z-index: 1; } .framer-FxKKm .framer-d595tg { order: 1; width: 100%; } .framer-FxKKm .framer-qg0spw { justify-content: center; order: 2; } .framer-FxKKm .framer-189ksz2 { order: 0; } .framer-FxKKm .framer-yxyx59-container { order: 1; } .framer-FxKKm .framer-1jprrd { padding: 20px 0px 60px 0px; } .framer-FxKKm .framer-qerdmd { padding: 0px 80px 0px 80px; } .framer-FxKKm .framer-g53zun { flex-direction: column; } .framer-FxKKm .framer-jc0bom { height: min-content; padding: 0px 80px 40px 80px; } .framer-FxKKm .framer-1fvkbr4 { padding: 20px 40px 60px 40px; } .framer-FxKKm .framer-122qiap, .framer-FxKKm .framer-1to2oc3, .framer-FxKKm .framer-51a2l3 { gap: 40px; } .framer-FxKKm .framer-ltf523-container, .framer-FxKKm .framer-q7y3ep-container, .framer-FxKKm .framer-1uer45x-container { width: 50%; } .framer-FxKKm .framer-3qerp8 { width: 342px; } .framer-FxKKm .framer-1cku1z5 { width: 330px; } .framer-FxKKm .framer-1cwtf2j { width: 344px; } .framer-FxKKm .framer-1qk1ckw { padding: 20px 40px 40px 40px; } .framer-FxKKm .framer-tgl33b { padding: 20px 0px 80px 0px; } .framer-FxKKm .framer-4h2j33 { height: min-content; padding: 20px 0px 40px 0px; } .framer-FxKKm .framer-lx3ltd { left: 0px; } .framer-FxKKm .framer-109druq { padding: 0px 30px 0px 30px; } .framer-FxKKm .framer-7tfqvc { padding: 0px; } .framer-FxKKm .framer-1gn9j2l-container { flex: 1 0 0px; height: 1px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-FxKKm .framer-17hubt0, .framer-FxKKm .framer-g53zun, .framer-FxKKm .framer-122qiap, .framer-FxKKm .framer-1to2oc3, .framer-FxKKm .framer-51a2l3 { gap: 0px; } .framer-FxKKm .framer-17hubt0 > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-FxKKm .framer-17hubt0 > :first-child, .framer-FxKKm .framer-g53zun > :first-child { margin-top: 0px; } .framer-FxKKm .framer-17hubt0 > :last-child, .framer-FxKKm .framer-g53zun > :last-child { margin-bottom: 0px; } .framer-FxKKm .framer-g53zun > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-FxKKm .framer-122qiap > *, .framer-FxKKm .framer-1to2oc3 > *, .framer-FxKKm .framer-51a2l3 > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-FxKKm .framer-122qiap > :first-child, .framer-FxKKm .framer-1to2oc3 > :first-child, .framer-FxKKm .framer-51a2l3 > :first-child { margin-left: 0px; } .framer-FxKKm .framer-122qiap > :last-child, .framer-FxKKm .framer-1to2oc3 > :last-child, .framer-FxKKm .framer-51a2l3 > :last-child { margin-right: 0px; } }}`,
    `@media (max-width: 809px) { .${Kt.bodyClassName}-framer-FxKKm { background: var(--token-ddb33851-f942-4c00-a71e-63a2f30228e6, rgb(5, 5, 6)); } .framer-FxKKm.framer-72rtr7 { width: 390px; } .framer-FxKKm .framer-tkrp9f-container { right: unset; width: 100%; } .framer-FxKKm .framer-aafkq6 { background: radial-gradient(75% 52% at 50% 45.800000000000004%, var(--token-96b6cb3e-967e-4221-b7e2-399e6d62b7ed, rgba(111, 27, 150, 0.7)) /* {"name":"Gradient"} */ 0%, rgba(0, 0, 0, 0) 100%); height: 1045px; right: 0px; width: unset; } .framer-FxKKm .framer-14q2j1y { padding: 0px 25px 0px 25px; } .framer-FxKKm .framer-1bxd7mi { padding: 60px 0px 120px 0px; } .framer-FxKKm .framer-17hubt0 { flex-direction: column; gap: 32px; padding: 0px; } .framer-FxKKm .framer-1undc2l { flex: none; min-height: 300px; width: 100%; } .framer-FxKKm .framer-103l49b-container { order: 0; width: 100%; z-index: 1; } .framer-FxKKm .framer-d595tg { order: 1; width: 100%; } .framer-FxKKm .framer-qg0spw { justify-content: center; order: 2; } .framer-FxKKm .framer-153g7c1 { padding: 0px 0px 42px 0px; } .framer-FxKKm .framer-189ksz2 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-FxKKm .framer-1jprrd, .framer-FxKKm .framer-tgl33b { padding: 20px 25px 60px 25px; } .framer-FxKKm .framer-qerdmd { padding: 0px; } .framer-FxKKm .framer-cpemrm { justify-content: center; } .framer-FxKKm .framer-g53zun, .framer-FxKKm .framer-1ni3ake, .framer-FxKKm .framer-1lhtala { flex-direction: column; } .framer-FxKKm .framer-18w6tg6-container, .framer-FxKKm .framer-1jsk72f-container, .framer-FxKKm .framer-7o6s52-container { flex: none; height: 390px; width: 100%; } .framer-FxKKm .framer-jc0bom { height: min-content; padding: 20px 25px 60px 25px; } .framer-FxKKm .framer-n17wal { flex-direction: column; height: min-content; } .framer-FxKKm .framer-143njqk-container, .framer-FxKKm .framer-ltf523-container, .framer-FxKKm .framer-1uer45x-container { width: 100%; } .framer-FxKKm .framer-1fvkbr4 { flex-direction: column; padding: 20px 25px 60px 25px; } .framer-FxKKm .framer-n716mj { flex: none; gap: 60px; width: 100%; } .framer-FxKKm .framer-122qiap, .framer-FxKKm .framer-1to2oc3, .framer-FxKKm .framer-51a2l3 { flex-direction: column; gap: 40px; } .framer-FxKKm .framer-1evu1g4, .framer-FxKKm .framer-tvyfv5 { align-content: center; align-items: center; flex: none; width: 100%; } .framer-FxKKm .framer-1l4xzt0 { align-content: center; align-items: center; flex: none; order: 1; width: 100%; } .framer-FxKKm .framer-q7y3ep-container { order: 0; width: 100%; } .framer-FxKKm .framer-1qk1ckw { padding: 20px 25px 40px 25px; } .framer-FxKKm .framer-14nluss-container, .framer-FxKKm .framer-17468y8-container, .framer-FxKKm .framer-1265h5w-container { flex: none; width: 100%; } .framer-FxKKm .framer-qwkckz { gap: 195px; order: 0; } .framer-FxKKm .framer-ibc4tp { z-index: 1; } .framer-FxKKm .framer-li8cw2 { order: 1; } .framer-FxKKm .framer-4h2j33 { gap: 10px; height: min-content; padding: 0px 0px 40px 0px; } .framer-FxKKm .framer-lx3ltd { height: 1169px; left: calc(49.743589743589766% - 100% / 2); } .framer-FxKKm .framer-109druq { gap: 10px; padding: 20px 25px 20px 25px; } .framer-FxKKm .framer-7tfqvc { height: min-content; padding: 0px; } .framer-FxKKm .framer-1gn9j2l-container { height: auto; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-FxKKm .framer-17hubt0, .framer-FxKKm .framer-g53zun, .framer-FxKKm .framer-1ni3ake, .framer-FxKKm .framer-n17wal, .framer-FxKKm .framer-1fvkbr4, .framer-FxKKm .framer-n716mj, .framer-FxKKm .framer-122qiap, .framer-FxKKm .framer-1to2oc3, .framer-FxKKm .framer-51a2l3, .framer-FxKKm .framer-1lhtala, .framer-FxKKm .framer-qwkckz, .framer-FxKKm .framer-4h2j33, .framer-FxKKm .framer-109druq { gap: 0px; } .framer-FxKKm .framer-17hubt0 > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-FxKKm .framer-17hubt0 > :first-child, .framer-FxKKm .framer-g53zun > :first-child, .framer-FxKKm .framer-n17wal > :first-child, .framer-FxKKm .framer-1fvkbr4 > :first-child, .framer-FxKKm .framer-n716mj > :first-child, .framer-FxKKm .framer-122qiap > :first-child, .framer-FxKKm .framer-1to2oc3 > :first-child, .framer-FxKKm .framer-51a2l3 > :first-child, .framer-FxKKm .framer-1lhtala > :first-child, .framer-FxKKm .framer-4h2j33 > :first-child, .framer-FxKKm .framer-109druq > :first-child { margin-top: 0px; } .framer-FxKKm .framer-17hubt0 > :last-child, .framer-FxKKm .framer-g53zun > :last-child, .framer-FxKKm .framer-n17wal > :last-child, .framer-FxKKm .framer-1fvkbr4 > :last-child, .framer-FxKKm .framer-n716mj > :last-child, .framer-FxKKm .framer-122qiap > :last-child, .framer-FxKKm .framer-1to2oc3 > :last-child, .framer-FxKKm .framer-51a2l3 > :last-child, .framer-FxKKm .framer-1lhtala > :last-child, .framer-FxKKm .framer-4h2j33 > :last-child, .framer-FxKKm .framer-109druq > :last-child { margin-bottom: 0px; } .framer-FxKKm .framer-g53zun > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-FxKKm .framer-1ni3ake > *, .framer-FxKKm .framer-1ni3ake > :first-child, .framer-FxKKm .framer-1ni3ake > :last-child { margin: 0px; } .framer-FxKKm .framer-n17wal > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-FxKKm .framer-1fvkbr4 > *, .framer-FxKKm .framer-4h2j33 > *, .framer-FxKKm .framer-109druq > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-FxKKm .framer-n716mj > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-FxKKm .framer-122qiap > *, .framer-FxKKm .framer-1to2oc3 > *, .framer-FxKKm .framer-51a2l3 > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-FxKKm .framer-1lhtala > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-FxKKm .framer-qwkckz > * { margin: 0px; margin-left: calc(195px / 2); margin-right: calc(195px / 2); } .framer-FxKKm .framer-qwkckz > :first-child { margin-left: 0px; } .framer-FxKKm .framer-qwkckz > :last-child { margin-right: 0px; } }}`,
    ...ha,
    ...ya,
  ],
  Or = Z(Ss, Fs, "framer-FxKKm"),
  ou = Or;
Or.displayName = "Home";
Or.defaultProps = { height: 4503, width: 1400 };
Q(
  Or,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K0nXNi0Dp6_cOyA.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Work Sans",
          source: "fontshare",
          style: "normal",
          url: "/third-party-assets/fontshare/wf/MBOJEUZXMXZXHAW3KKWUFI6R7OIPIRYU/FBJ6H6I7LKZ2WGOVP25FDJOOUIMXMY2Z/THXRGVPNH45VMHCGWEEJATJ2RCOHTNBI.woff2",
          weight: "500",
        },
        {
          family: "Work Sans",
          source: "fontshare",
          style: "normal",
          url: "/third-party-assets/fontshare/wf/VA23FCGWQ2ZGKFEM75LQVBDIR5XCXJI3/V5QYJZB23L2PDOZTWQY5F3I5R2B3UGCD/XUL6BSI7XTIWXDHGTQPLNOWHZU5CTO77.woff2",
          weight: "600",
        },
        {
          family: "Work Sans",
          source: "fontshare",
          style: "normal",
          url: "/third-party-assets/fontshare/wf/G463L6WWJWSX4R6VTEVFCTIXPE3AUDEF/V4JHHUSZMHBPK3DFEHLGTZVXVBHVLZ7P/ND3FIMQYFEQ2VM2WWNXCGGBFYRPR7FMH.woff2",
          weight: "400",
        },
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K5fQNi0Dp6_cOyA.woff2",
          weight: "600",
        },
        {
          family: "Work Sans",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/worksans/v19/QGY_z_wNahGAdqQ43RhVcIgYT2Xz5u32K3vXNi0Dp6_cOyA.woff2",
          weight: "500",
        },
      ],
    },
    ...$l,
    ...es,
    ...rs,
    ...ts,
    ...as,
    ...ns,
    ...os,
    ...ls,
    ...ss,
    ...cs,
    ...ms,
    ...nt(ua),
    ...nt(xa),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var iu = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerIntrinsicHeight: "4503",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"uwtKjc3B5":{"layout":["fixed","auto"]},"s00XJeKUG":{"layout":["fixed","auto"]}}}',
        framerIntrinsicWidth: "1400",
        framerImmutableVariables: "true",
        framerDisplayContentsDiv: "false",
        framerComponentViewportWidth: "true",
        framerResponsiveScreen: "",
        framerContractVersion: "1",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { iu as __FramerMetadata__, ou as default };
//# sourceMappingURL=fmb5oTSzj4Fj7opRSEwC1DHuweys3Dw3wnsqO5zFNVM.2XRHBI36.mjs.map
