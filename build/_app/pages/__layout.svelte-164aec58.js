import {
  C as s,
  S as e,
  i as a,
  s as t,
  D as r,
  e as i,
  c as n,
  a as o,
  d as c,
  b as l,
  E as u,
  f,
  F as m,
  x as p,
  u as h,
  A as d,
  G as y,
} from "../chunks/vendor-9c548c9b.js";
import { t as v, T as S, s as T } from "../chunks/ThemeStore-51fa65f1.js";
var $, b;
((b = $ || ($ = {})).Default =
  "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"),
  (b.Arial = "Arial, sans-serif"),
  (b.Verdana = "Verdana, sans-serif"),
  (b.Helvetica = "Helvetica, sans-serif"),
  (b.Tahoma = "Tahoma, sans-serif"),
  (b.Trebuchet_MS = "'Trebuchet MS', sans-serif"),
  (b.Impact = "Impact, sans-serif"),
  (b.Times_New_Roman = "'Times New Roman', serif"),
  (b.Georgia = "Georgia, serif"),
  (b.Garamond = "Garamond, serif"),
  (b.Courier_New = "'Courier New', monospace"),
  (b.Brush_Script_MT = "'Brush Script MT', cursive"),
  (b.Comic_Sans = "'Comic Sans MS', 'Comic Sans', cursive"),
  (b.Copperplate = "Copperplate, fantasy"),
  (b.Papyrus = "Papyrus, fantasy");
const C = s($.Default);
function w(s) {
  let e, a;
  const t = s[3].default,
    d = r(t, s, s[2], null);
  return {
    c() {
      (e = i("div")), d && d.c(), this.h();
    },
    l(s) {
      e = n(s, "DIV", { class: !0, style: !0 });
      var a = o(e);
      d && d.l(a), a.forEach(c), this.h();
    },
    h() {
      l(e, "class", "layout-wrapper svelte-1613r8e"), u(e, "font-family", s[0]);
    },
    m(t, r) {
      f(t, e, r), d && d.m(e, null), s[4](e), (a = !0);
    },
    p(s, [r]) {
      d && d.p && (!a || 4 & r) && m(d, t, s, s[2], a ? r : -1, null, null),
        (!a || 1 & r) && u(e, "font-family", s[0]);
    },
    i(s) {
      a || (p(d, s), (a = !0));
    },
    o(s) {
      h(d, s), (a = !1);
    },
    d(a) {
      a && c(e), d && d.d(a), s[4](null);
    },
  };
}
function _(s, e, a) {
  let t,
    r,
    { $$slots: i = {}, $$scope: n } = e;
  return (
    v.set(S.Dark),
    C.subscribe((s) => a(0, (t = s))),
    C.set($.Default),
    d(() => {
      T({ desktopQuery: "screen and (min-width: 768px)", listen: !0 }),
        v.subscribe((s) => {
          document.documentElement.setAttribute("data-theme", s);
        }),
        (document.getElementById("svelte").style.height = "100%");
    }),
    (s.$$set = (s) => {
      "$$scope" in s && a(2, (n = s.$$scope));
    }),
    [
      t,
      r,
      n,
      i,
      function (s) {
        y[s ? "unshift" : "push"](() => {
          (r = s), a(1, r);
        });
      },
    ]
  );
}
export default class extends e {
  constructor(s) {
    super(), a(this, s, _, w, t, {});
  }
}
