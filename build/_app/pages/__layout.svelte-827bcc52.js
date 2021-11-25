import {
  C as o,
  S as r,
  i as t,
  s,
  D as e,
  e as c,
  c as i,
  a as _,
  d as n,
  b as l,
  f as u,
  E as a,
  x as h,
  u as d,
  A as f,
  F as y,
} from "../chunks/vendor-cf565983.js";
import { s as p } from "../chunks/DeviceTypeStore-d28ebca1.js";
class g {
  constructor() {
    (this.bg_color_primary = "#2B303C"),
      (this.bg_color_secondary = "#2E3440"),
      (this.bg_color_tertiary = "#252A34"),
      (this.bg_color_quaternary = "#3B4252"),
      (this.bg_color_primary_unfocused = "#2B303C"),
      (this.bg_color_secondary_unfocused = "#303643"),
      (this.bg_color_tertiary_unfocused = "#252A34"),
      (this.bg_color_quaternary_unfocused = "#3B4252"),
      (this.fg_color_primary = "#FFFFFF"),
      (this.fg_color_secondary = "#C4CAD5"),
      (this.fg_color_tertiary = ""),
      (this.fg_color_quaternary = ""),
      (this.fg_color_primary_unfocused = "#777F84"),
      (this.fg_color_secondary_unfocused = "#717684"),
      (this.fg_color_tertiary_unfocused = ""),
      (this.fg_color_quaternary_unfocused = ""),
      (this.border_color_primary = "#262a35"),
      (this.border_color_secondary = ""),
      (this.border_color_tertiary = ""),
      (this.border_color_quaternary = ""),
      (this.border_color_primary_unfocused = ""),
      (this.border_color_secondary_unfocused = ""),
      (this.border_color_tertiary_unfocused = ""),
      (this.border_color_quaternary_unfocused = ""),
      (this.selection_fg_color = ""),
      (this.selection_bg_color = ""),
      (this.selection_unfocused_fg_color = ""),
      (this.selection_unfocused_bg_color = ""),
      (this.warning_color = ""),
      (this.error_color = ""),
      (this.success_color = ""),
      (this.input_fg_color = "#DFDFDF"),
      (this.input_bg_color = "#2B303C"),
      (this.input_border_color = "#262A35"),
      (this.input_hover_fg_color = "#F8F8F8"),
      (this.input_hover_bg_color = "#3F4758"),
      (this.input_hover_border_color = "#262A35"),
      (this.input_active_fg_color = "#FFFFFF"),
      (this.input_active_bg_color = "#3F4758"),
      (this.input_active_border_color = "#262A35");
  }
}
const b = o(new g());
class F {
  constructor() {
    (this["font-family"] = "'Franklin Gothic Medium', sans-serif"),
      (this["font-weight"] = "500"),
      (this["font-style"] = "normal");
  }
}
const m = o(new F());
function v(o) {
  let r, t;
  const s = o[2].default,
    f = e(s, o, o[1], null);
  return {
    c() {
      (r = c("div")), f && f.c(), this.h();
    },
    l(o) {
      r = i(o, "DIV", { class: !0 });
      var t = _(r);
      f && f.l(t), t.forEach(n), this.h();
    },
    h() {
      l(r, "class", "layout-wrapper svelte-z6nb3i");
    },
    m(s, e) {
      u(s, r, e), f && f.m(r, null), o[3](r), (t = !0);
    },
    p(o, [r]) {
      f && f.p && (!t || 2 & r) && a(f, s, o, o[1], t ? r : -1, null, null);
    },
    i(o) {
      t || (h(f, o), (t = !0));
    },
    o(o) {
      d(f, o), (t = !1);
    },
    d(t) {
      t && n(r), f && f.d(t), o[3](null);
    },
  };
}
function $(o, r, t) {
  let s,
    { $$slots: e = {}, $$scope: c } = r;
  return (
    f(() => {
      p({ desktopQuery: "screen and (min-width: 768px)", listen: !0 }),
        (document.getElementById("svelte").style.height = "100%"),
        (function (o, r) {
          for (const t in r) o.style.setProperty(`--${t.toString()}`, r[t]);
          b.update((o) => r);
        })(s, new g()),
        (function (o, r) {
          for (const t in r) o.style.setProperty(`${t.toString()}`, r[t]);
          m.update((o) => r);
        })(s, new F());
    }),
    (o.$$set = (o) => {
      "$$scope" in o && t(1, (c = o.$$scope));
    }),
    [
      s,
      c,
      e,
      function (o) {
        y[o ? "unshift" : "push"](() => {
          (s = o), t(0, s);
        });
      },
    ]
  );
}
export default class extends r {
  constructor(o) {
    super(), t(this, o, $, v, s, {});
  }
}
