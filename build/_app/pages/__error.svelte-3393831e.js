import {
  S as s,
  i as r,
  s as a,
  e as t,
  t as e,
  k as o,
  c as n,
  a as u,
  g as c,
  d as i,
  n as p,
  f,
  I as h,
  h as d,
  J as l,
} from "../chunks/vendor-9c548c9b.js";
function m(s) {
  let r,
    a,
    m,
    g,
    v,
    x = s[0].message + "";
  return {
    c() {
      (r = t("h1")), (a = e(s[1])), (m = o()), (g = t("p")), (v = e(x));
    },
    l(t) {
      r = n(t, "H1", {});
      var e = u(r);
      (a = c(e, s[1])), e.forEach(i), (m = p(t)), (g = n(t, "P", {}));
      var o = u(g);
      (v = c(o, x)), o.forEach(i);
    },
    m(s, t) {
      f(s, r, t), h(r, a), f(s, m, t), f(s, g, t), h(g, v);
    },
    p(s, [r]) {
      2 & r && d(a, s[1]), 1 & r && x !== (x = s[0].message + "") && d(v, x);
    },
    i: l,
    o: l,
    d(s) {
      s && i(r), s && i(m), s && i(g);
    },
  };
}
const g = ({ error: s, status: r }) => ({ props: { error: s, status: r } });
function v(s, r, a) {
  let { error: t } = r,
    { status: e } = r;
  return (
    (s.$$set = (s) => {
      "error" in s && a(0, (t = s.error)),
        "status" in s && a(1, (e = s.status));
    }),
    [t, e]
  );
}
export default class extends s {
  constructor(s) {
    super(), r(this, s, v, m, a, { error: 0, status: 1 });
  }
}
export { g as load };
