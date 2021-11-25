import {
  G as t,
  C as e,
  S as n,
  i as s,
  s as i,
  J as r,
  D as l,
  e as c,
  c as o,
  a,
  d as h,
  b as d,
  K as f,
  f as u,
  L as m,
  M as g,
  E as p,
  x as v,
  u as $,
  N as w,
  F as x,
  k as E,
  t as y,
  n as I,
  g as _,
  H as b,
  O as D,
  h as T,
  I as M,
  l as k,
  r as L,
  w as z,
  P as O,
  j as C,
  m as X,
  Q as S,
  o as V,
  v as P,
  R,
  T as B,
  A as N,
  U as H,
  V as G,
  W,
  X as A,
  Y as j,
  Z as q,
  _ as F,
  $ as Y,
  a0 as U,
  a1 as Z,
  a2 as J,
  p as K,
  q as Q,
  B as tt,
  a3 as et,
} from "../chunks/vendor-cf565983.js";
import {
  d as nt,
  m as st,
  f as it,
  D as rt,
} from "../chunks/DeviceTypeStore-d28ebca1.js";
function lt(t) {
  function e(e) {
    !t ||
      t.contains(e.target) ||
      e.defaultPrevented ||
      t.dispatchEvent(new MouseEvent("clickoutside", t));
  }
  return (
    document.addEventListener("click", e, !0),
    {
      destroy() {
        document.removeEventListener("click", e, !0);
      },
    }
  );
}
const ct = e(
    new (class {
      constructor() {
        this.options = [];
      }
    })()
  ),
  ot = t(ct, (t) => t);
function at(t, e, n) {
  ct.update((s) => ((s.x = t), (s.y = e), (s.options = n), (s.show = !0), s));
}
function ht() {
  ct.update((t) => ((t.show = !1), t));
}
const dt = (t) => ({}),
  ft = (t) => ({});
function ut(t) {
  let e, n, s, i;
  r(t[9]);
  const x = t[8].options,
    E = l(x, t, t[7], ft);
  return {
    c() {
      (e = c("div")), E && E.c(), this.h();
    },
    l(t) {
      e = o(t, "DIV", { class: !0, style: !0 });
      var n = a(e);
      E && E.l(n), n.forEach(h), this.h();
    },
    h() {
      d(e, "class", "context-menu svelte-1ssyzdg"), f(e, "z-index", t[0]);
    },
    m(r, l) {
      u(r, e, l),
        E && E.m(e, null),
        t[10](e),
        (n = !0),
        s ||
          ((i = [
            m(window, "resize", t[9]),
            g(lt.call(null, e)),
            m(e, "clickoutside", t[11]),
          ]),
          (s = !0));
    },
    p(t, [s]) {
      E && E.p && (!n || 128 & s) && p(E, x, t, t[7], n ? s : -1, dt, ft),
        (!n || 1 & s) && f(e, "z-index", t[0]);
    },
    i(t) {
      n || (v(E, t), (n = !0));
    },
    o(t) {
      $(E, t), (n = !1);
    },
    d(n) {
      n && h(e), E && E.d(n), t[10](null), (s = !1), w(i);
    },
  };
}
function mt(t, e, n) {
  let s,
    i,
    r,
    { $$slots: l = {}, $$scope: c } = e,
    { x: o } = e,
    { y: a } = e,
    { z_index: h } = e;
  function d(t) {
    ht();
  }
  return (
    (t.$$set = (t) => {
      "x" in t && n(5, (o = t.x)),
        "y" in t && n(6, (a = t.y)),
        "z_index" in t && n(0, (h = t.z_index)),
        "$$scope" in t && n(7, (c = t.$$scope));
    }),
    (t.$$.update = () => {
      110 & t.$$.dirty &&
        r &&
        (n(3, (r.style.left = `${s / 2 < o ? o - r.offsetWidth : o}px`), r),
        n(3, (r.style.top = `${i / 2 < a ? a - r.offsetHeight : a}px`), r));
    }),
    [
      h,
      s,
      i,
      r,
      d,
      o,
      a,
      c,
      l,
      function () {
        n(1, (s = window.innerWidth)), n(2, (i = window.innerHeight));
      },
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (r = t), n(3, r), n(1, s), n(2, i), n(5, o), n(6, a);
        });
      },
      (t) => d(),
    ]
  );
}
class gt extends n {
  constructor(t) {
    super(), s(this, t, mt, ut, i, { x: 5, y: 6, z_index: 0 });
  }
}
function pt(t) {
  let e, n;
  return {
    c() {
      (e = c("img")), this.h();
    },
    l(t) {
      (e = o(t, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      e.src !== (n = t[1]) && d(e, "src", n),
        d(e, "alt", t[0]),
        d(e, "class", "svelte-surida");
    },
    m(t, n) {
      u(t, e, n);
    },
    p(t, s) {
      2 & s && e.src !== (n = t[1]) && d(e, "src", n),
        1 & s && d(e, "alt", t[0]);
    },
    d(t) {
      t && h(e);
    },
  };
}
function vt(t) {
  let e,
    n,
    s,
    i,
    r,
    l,
    f,
    g = t[1] && pt(t);
  return {
    c() {
      (e = c("button")),
        (n = c("div")),
        g && g.c(),
        (s = E()),
        (i = c("span")),
        (r = y(t[0])),
        this.h();
    },
    l(l) {
      e = o(l, "BUTTON", { class: !0 });
      var c = a(e);
      n = o(c, "DIV", { class: !0 });
      var d = a(n);
      g && g.l(d), d.forEach(h), (s = I(c)), (i = o(c, "SPAN", { class: !0 }));
      var f = a(i);
      (r = _(f, t[0])), f.forEach(h), c.forEach(h), this.h();
    },
    h() {
      d(n, "class", "icon-container svelte-surida"),
        d(i, "class", "svelte-surida"),
        d(e, "class", "context-menu-option svelte-surida");
    },
    m(c, o) {
      u(c, e, o),
        b(e, n),
        g && g.m(n, null),
        b(e, s),
        b(e, i),
        b(i, r),
        l ||
          ((f = m(e, "click", function () {
            D(t[2]()) && t[2]().apply(this, arguments);
          })),
          (l = !0));
    },
    p(e, [s]) {
      (t = e)[1]
        ? g
          ? g.p(t, s)
          : ((g = pt(t)), g.c(), g.m(n, null))
        : g && (g.d(1), (g = null)),
        1 & s && T(r, t[0]);
    },
    i: M,
    o: M,
    d(t) {
      t && h(e), g && g.d(), (l = !1), f();
    },
  };
}
function $t(t, e, n) {
  let { name: s } = e,
    { icon: i = null } = e,
    { onClick: r = () => {} } = e;
  return (
    (t.$$set = (t) => {
      "name" in t && n(0, (s = t.name)),
        "icon" in t && n(1, (i = t.icon)),
        "onClick" in t && n(2, (r = t.onClick));
    }),
    [s, i, r]
  );
}
class wt extends n {
  constructor(t) {
    super(), s(this, t, $t, vt, i, { name: 0, icon: 1, onClick: 2 });
  }
}
function xt(t) {
  let e,
    n,
    s,
    i,
    r,
    l,
    f,
    m,
    g = t[0].name + "";
  return {
    c() {
      (e = c("div")),
        (n = c("div")),
        (s = c("img")),
        (l = E()),
        (f = c("p")),
        (m = y(g)),
        this.h();
    },
    l(t) {
      e = o(t, "DIV", { class: !0 });
      var i = a(e);
      n = o(i, "DIV", { class: !0 });
      var r = a(n);
      (s = o(r, "IMG", { src: !0, alt: !0, draggable: !0, class: !0 })),
        r.forEach(h),
        (l = I(i)),
        (f = o(i, "P", { class: !0 }));
      var c = a(f);
      (m = _(c, g)), c.forEach(h), i.forEach(h), this.h();
    },
    h() {
      s.src !== (i = t[0].icon) && d(s, "src", i),
        d(s, "alt", (r = t[0].name)),
        d(s, "draggable", "false"),
        d(s, "class", "svelte-ptyyp6"),
        d(n, "class", "image-container svelte-ptyyp6"),
        d(f, "class", "svelte-ptyyp6"),
        d(e, "class", "program svelte-ptyyp6");
    },
    m(t, i) {
      u(t, e, i), b(e, n), b(n, s), b(e, l), b(e, f), b(f, m);
    },
    p(t, [e]) {
      1 & e && s.src !== (i = t[0].icon) && d(s, "src", i),
        1 & e && r !== (r = t[0].name) && d(s, "alt", r),
        1 & e && g !== (g = t[0].name + "") && T(m, g);
    },
    i: M,
    o: M,
    d(t) {
      t && h(e);
    },
  };
}
function Et(t, e, n) {
  let { program: s } = e;
  return (
    (t.$$set = (t) => {
      "program" in t && n(0, (s = t.program));
    }),
    [s]
  );
}
class yt extends n {
  constructor(t) {
    super(), s(this, t, Et, xt, i, { program: 0 });
  }
}
function It(t) {
  return t * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
class _t {
  constructor(t, e, n, s, i, r, l, c) {
    (this.item = t),
      (this.row = e),
      (this.column = n),
      (this.x = s),
      (this.y = i),
      (this.width = r),
      (this.height = l),
      (this.gap = c);
  }
  collidesWith(t, e) {
    return (
      t > this.x - (It(this.width / 2) + It(this.gap / 2)) &&
      t < this.x + (It(this.width / 2) + It(this.gap / 2)) &&
      e > this.y - (It(this.height / 2) + It(this.gap / 2)) &&
      e < this.y + (It(this.height / 2) + It(this.gap / 2))
    );
  }
}
let bt = e(
  new (class {
    constructor() {
      (this.gridItems = []),
        (this.gridPositions = []),
        (this.gridTemplateColumns = "");
    }
    rearrangeGrid(t = this.prevScreenWidth, e = this.prevScreenHeight) {
      (this.prevScreenWidth = t), (this.prevScreenHeight = e);
      let n = Math.floor(
          (e - It(this.padding + this.bottomOffset - this.topOffset)) /
            It(this.columnHeight + this.gap)
        ),
        s = Math.round(
          (t - It(this.padding)) /
            It(this.columnWidth + this.gap + this.widthOffset)
        );
      (this.gridTemplateColumns = `repeat(${s}, ${this.columnWidth}rem)`),
        (this.gridPositions = []);
      for (let i = 1; i < n + 1; i++)
        for (let t = 1; t < s + 1; t++)
          this.gridPositions.push(
            new _t(
              null,
              i,
              t,
              t * It(this.columnWidth + this.gap) -
                It(this.gap + this.columnWidth / 2),
              i * It(this.columnHeight + this.gap) -
                It(this.gap + this.columnHeight / 2),
              this.columnWidth,
              this.columnHeight,
              this.gap
            )
          );
      this.gridPositions.length <= 0 ||
        this.gridItems.forEach((t) => {
          let e = t.preferredRow,
            i = t.preferredColumn;
          (t.preferredRow < 0 || t.preferredRow > n) && (e = n),
            (t.preferredColumn < 0 || t.preferredColumn > s) && (i = s);
          let r = this.gridPositions.filter((t) => null == t.item);
          if (r.length > 0) {
            let n = r.reduce((t, n) =>
              Math.abs(n.row - e) < Math.abs(t.row - e) ||
              Math.abs(n.column - i) < Math.abs(t.column - i)
                ? n
                : t
            );
            (n.item = t), (t.position = n);
          }
        });
    }
    getSelectedItems() {
      return this.gridItems.filter((t) => t.selected);
    }
    addGridItem(t) {
      this.gridItems.push(t);
    }
    removeGridItem(t) {
      this.gridItems = this.gridItems.filter((e) => e.id !== t);
    }
    getGridPositionAtPosition(t, e) {
      return this.gridPositions.find((n) => n.collidesWith(t, e));
    }
    getClosestGridPositionToPosition(t, e, n = () => !0) {
      return this.gridPositions
        .filter(n)
        .reduce((n, s) =>
          Math.abs(s.x - t) < Math.abs(n.x - t) ||
          Math.abs(s.y - e) < Math.abs(n.y - e) - It(this.columnHeight)
            ? s
            : n
        );
    }
  })()
);
const Dt = t(bt, (t) => t);
function Tt(t) {
  bt.update((e) => ((e.gridItems.find((e) => e.id === t.id).selected = !0), e));
}
function Mt(t) {
  bt.update((e) => ((e.gridItems.find((e) => e.id === t.id).selected = !1), e));
}
function kt(t, e) {
  let n;
  const s = (s) => {
      n = setTimeout(() => {
        t.dispatchEvent(
          new CustomEvent("longpresstouch", {
            detail: {
              clientX: s.targetTouches[0].clientX,
              clientY: s.targetTouches[0].clientY,
            },
          })
        );
      }, e);
    },
    i = () => {
      clearTimeout(n);
    };
  return (
    t.addEventListener("touchstart", s),
    t.addEventListener("touchend", i),
    {
      update(t) {
        e = t;
      },
      destroy() {
        t.removeEventListener("touchstart", s),
          t.removeEventListener("touchend", i);
      },
    }
  );
}
function Lt(t) {
  let e, n, s, i, r, l, p;
  return (
    (s = new yt({ props: { program: t[0].item.program } })),
    {
      c() {
        (e = c("div")), (n = c("div")), C(s.$$.fragment), this.h();
      },
      l(t) {
        e = o(t, "DIV", { class: !0 });
        var i = a(e);
        n = o(i, "DIV", { class: !0, style: !0, draggable: !0 });
        var r = a(n);
        X(s.$$.fragment, r), r.forEach(h), i.forEach(h), this.h();
      },
      h() {
        d(n, "class", "grid-element svelte-1b9m9ci"),
          f(n, "grid-row", t[0].row),
          f(n, "grid-column", t[0].column),
          f(n, "width", t[0].width + "rem"),
          f(n, "height", t[0].height + "rem"),
          d(n, "draggable", !0),
          S(n, "desktop", nt),
          S(n, "mobile", st),
          d(
            e,
            "class",
            (i =
              "grid-element-overlay " +
              (t[0].item.selected ? "selected" : "") +
              " svelte-1b9m9ci")
          ),
          S(e, "desktop", nt),
          S(e, "mobile", st);
      },
      m(i, c) {
        u(i, e, c),
          b(e, n),
          V(s, n, null),
          (r = !0),
          l ||
            ((p = [
              m(n, "contextmenu", t[10]),
              m(n, "touchstart", t[4]),
              m(n, "touchmove", t[5]),
              m(n, "touchend", t[6]),
              m(n, "dragstart", t[7]),
              m(n, "dragend", t[8]),
              m(n, "drop", Ct),
              g(lt.call(null, n)),
              m(n, "clickoutside", t[9]),
              g(kt.call(null, n, 500)),
              m(n, "longpresstouch", t[11]),
              m(n, "mousedown", t[12]),
              m(n, "dblclick", t[13]),
            ]),
            (l = !0));
      },
      p(t, l) {
        const c = {};
        1 & l[0] && (c.program = t[0].item.program),
          s.$set(c),
          (!r || 1 & l[0]) && f(n, "grid-row", t[0].row),
          (!r || 1 & l[0]) && f(n, "grid-column", t[0].column),
          (!r || 1 & l[0]) && f(n, "width", t[0].width + "rem"),
          (!r || 1 & l[0]) && f(n, "height", t[0].height + "rem"),
          (!r ||
            (1 & l[0] &&
              i !==
                (i =
                  "grid-element-overlay " +
                  (t[0].item.selected ? "selected" : "") +
                  " svelte-1b9m9ci"))) &&
            d(e, "class", i),
          1 & l[0] && S(e, "desktop", nt),
          1 & l[0] && S(e, "mobile", st);
      },
      i(t) {
        r || (v(s.$$.fragment, t), (r = !0));
      },
      o(t) {
        $(s.$$.fragment, t), (r = !1);
      },
      d(t) {
        t && h(e), P(s), (l = !1), w(p);
      },
    }
  );
}
function zt(t) {
  let e;
  return {
    c() {
      (e = c("div")), this.h();
    },
    l(t) {
      (e = o(t, "DIV", { class: !0, style: !0 })), a(e).forEach(h), this.h();
    },
    h() {
      d(e, "class", "grid-element svelte-1b9m9ci"),
        f(e, "grid-row", t[0].row),
        f(e, "grid-column", t[0].column),
        f(e, "width", t[0].width + "rem"),
        f(e, "height", t[0].height + "rem");
    },
    m(t, n) {
      u(t, e, n);
    },
    p(t, n) {
      1 & n[0] && f(e, "grid-row", t[0].row),
        1 & n[0] && f(e, "grid-column", t[0].column),
        1 & n[0] && f(e, "width", t[0].width + "rem"),
        1 & n[0] && f(e, "height", t[0].height + "rem");
    },
    i: M,
    o: M,
    d(t) {
      t && h(e);
    },
  };
}
function Ot(t) {
  let e, n, s, i, r, l;
  const c = [zt, Lt],
    o = [];
  function a(t, e) {
    return null == t[0].item ? 0 : 1;
  }
  return (
    (e = a(t)),
    (n = o[e] = c[e](t)),
    {
      c() {
        n.c(), (s = k());
      },
      l(t) {
        n.l(t), (s = k());
      },
      m(n, c) {
        o[e].m(n, c),
          u(n, s, c),
          (i = !0),
          r ||
            ((l = [
              m(window, "dragover", t[1]),
              m(window, "keydown", t[2]),
              m(window, "keyup", t[3]),
            ]),
            (r = !0));
      },
      p(t, i) {
        let r = e;
        (e = a(t)),
          e === r
            ? o[e].p(t, i)
            : (L(),
              $(o[r], 1, 1, () => {
                o[r] = null;
              }),
              z(),
              (n = o[e]),
              n ? n.p(t, i) : ((n = o[e] = c[e](t)), n.c()),
              v(n, 1),
              n.m(s.parentNode, s));
      },
      i(t) {
        i || (v(n), (i = !0));
      },
      o(t) {
        $(n), (i = !1);
      },
      d(t) {
        o[e].d(t), t && h(s), (r = !1), w(l);
      },
    }
  );
}
function Ct(t) {
  t.preventDefault();
}
function Xt(t, e, n) {
  let s;
  O(t, Dt, (t) => n(30, (s = t)));
  let i,
    r,
    l,
    { gridPosition: c } = e,
    { onDragStart: o = (t, e, n) => {} } = e,
    { onDragMove: a = (t, e, n) => {} } = e,
    { onDragEnd: h = (t, e, n) => {} } = e,
    { onTouchStart: d = (t, e, n) => {} } = e,
    { onTouchMove: f = (t, e, n) => {} } = e,
    { onTouchEnd: u = (t, e, n) => {} } = e,
    m = !1,
    g = !1,
    p = !1,
    v = !1;
  function $(t, e) {
    at(t, e, [
      {
        name: "Launch",
        icon: c.item.program.icon,
        onClick: () => {
          ht(), c.item.program.createProcess().bringToTop();
        },
      },
      {
        name: "Remove Desktop Shortcut",
        icon: null,
        onClick: () => {
          var t;
          ht(),
            (t = c.item.id),
            bt.update((e) => (e.removeGridItem(t), e.rearrangeGrid(), e));
        },
      },
    ]);
  }
  function w(t, e) {
    m = !0;
  }
  function x(t, e) {
    m && ((r = t), (l = e));
  }
  return (
    (t.$$set = (t) => {
      "gridPosition" in t && n(0, (c = t.gridPosition)),
        "onDragStart" in t && n(14, (o = t.onDragStart)),
        "onDragMove" in t && n(15, (a = t.onDragMove)),
        "onDragEnd" in t && n(16, (h = t.onDragEnd)),
        "onTouchStart" in t && n(17, (d = t.onTouchStart)),
        "onTouchMove" in t && n(18, (f = t.onTouchMove)),
        "onTouchEnd" in t && n(19, (u = t.onTouchEnd));
    }),
    [
      c,
      function (t) {
        if ((t.preventDefault(), m)) {
          let e = s.getClosestGridPositionToPosition(t.clientX, t.clientY);
          e && null !== e.item && null !== c.item && e.item.id !== c.item.id
            ? (t.dataTransfer.dropEffect = "link")
            : (t.dataTransfer.dropEffect = "move");
        }
        x(t.clientX, t.clientY), a(t.clientX, t.clientY, c.item);
      },
      function (t) {
        g = t.ctrlKey;
      },
      function (t) {
        g = t.ctrlKey;
      },
      function (t) {
        t.preventDefault(), (p = !1), (v = !1), (i = +new Date());
        const e = t.target.offsetLeft,
          n = t.target.offsetTop;
        w(),
          setTimeout(() => {
            v || p || Tt(c.item);
          }, 250),
          d(e, n, c.item);
      },
      function (t) {
        t.preventDefault(), (p = !0);
        const e = t.targetTouches[0].clientX,
          n = t.targetTouches[0].clientY;
        x(e, n), f(e, n, c.item), ht();
      },
      function (t) {
        let e = +new Date();
        v = !0;
        const n = r,
          s = l;
        p && c.item.selected
          ? u(n, s, c.item)
          : !p && e - i < 250 && c.item.program.createProcess().bringToTop(),
          Mt(c.item);
      },
      function (t) {
        t.dataTransfer.setData("program_id", c.item.program.id.toString()),
          w(t.clientX, t.clientY),
          o(t.clientX, t.clientY, c.item);
      },
      function (t) {
        h(r, l, c.item);
      },
      function (t) {
        g || (c.item.selected && Mt(c.item));
      },
      function (t) {
        t.preventDefault(), $(t.clientX, t.clientY);
      },
      function (t) {
        t.preventDefault(), $(t.detail.clientX, t.detail.clientY);
      },
      function (t) {
        !g &&
          s.getSelectedItems().length <= 1 &&
          s.gridItems.forEach((t) => {
            t.id !== c.item.id && Mt(t);
          }),
          Tt(c.item);
      },
      function (t) {
        c.item.program.createProcess().bringToTop();
      },
      o,
      a,
      h,
      d,
      f,
      u,
    ]
  );
}
class St extends n {
  constructor(t) {
    super(),
      s(
        this,
        t,
        Xt,
        Ot,
        i,
        {
          gridPosition: 0,
          onDragStart: 14,
          onDragMove: 15,
          onDragEnd: 16,
          onTouchStart: 17,
          onTouchMove: 18,
          onTouchEnd: 19,
        },
        [-1, -1]
      );
  }
}
let Vt = 0;
class Pt {
  constructor(t, e, n, s = !1, i = null) {
    (this.program = t),
      (this.preferredRow = e),
      (this.preferredColumn = n),
      (this.selected = s),
      (this.position = i),
      (this.id = Vt++);
  }
}
function Rt(t) {
  return (
    (function (t) {
      return t.length > 0 && !isNaN(+t);
    })(t) && +t >= 0
  );
}
const Bt = e(!1),
  Nt = t(Bt, (t) => t);
function Ht() {
  Bt.set(!1);
}
let Gt = 1;
const Wt = e(Gt);
Wt.subscribe((t) => (Gt = t));
const At = e([]);
At.subscribe((t) => {
  Wt.set(t.filter((t) => null !== t.window).length);
});
let jt = 0;
class qt {
  constructor(t, e = t.window) {
    (this.program = t),
      (this.window = e),
      (this.id = jt++),
      (this.name = t.name),
      (this.description = t.description),
      (this.icon = t.icon);
  }
  getProgramId() {
    return this.program.id;
  }
  hasWindow() {
    return null !== this.window;
  }
  getWindow() {
    return this.window;
  }
  bringToTop() {
    this.hasWindow() && (this.window.z_index = Gt);
  }
}
const { cloneDeep: Ft } = R;
let Yt = 0;
class Ut {
  constructor(t, e, n, s, i = null) {
    (this.name = t),
      (this.description = e),
      (this.categories = n),
      (this.icon = s),
      (this.window = i),
      (this.id = Yt++);
  }
  createProcess() {
    let t = new qt(Ft(this));
    var e;
    return (e = t), At.update((t) => t.concat(e)), t;
  }
}
class Zt {
  constructor(
    t,
    e = {},
    n = null,
    s = null,
    i = null,
    r = null,
    l = !1,
    c = !1
  ) {
    (this.component = t),
      (this.componentAttributes = e),
      (this.width = n),
      (this.height = s),
      (this.x = i),
      (this.y = r),
      (this.fullscreen = l),
      (this.minimized = c),
      (this.z_index = 1);
  }
}
let Jt = 0;
class Kt {
  constructor(t, e) {
    (this.name = t), (this.icon = e), (this.id = Jt++);
  }
}
var Qt, te;
(Qt = Kt || (Kt = {})),
  ((te = Qt.Name || (Qt.Name = {})).ALL = "All"),
  (te.FAVOURITES = "Favourites"),
  (te.CATEGORY_1 = "A Category 1"),
  (te.CATEGORY_2 = "B Category 2");
let ee = [];
const ne = new Kt(Kt.Name.ALL, "/images/category-icons/utilities-terminal.svg"),
  se = new Kt(Kt.Name.FAVOURITES, "/images/category-icons/star-2.svg"),
  ie = e([
    ne,
    se,
    new Kt(Kt.Name.CATEGORY_2, "/images/category-icons/utilities-terminal.svg"),
    new Kt(Kt.Name.CATEGORY_1, "/images/category-icons/utilities-terminal.svg"),
  ]);
function re(t) {
  return ee.find((e) => e.name == t);
}
ie.subscribe((t) => (ee = t));
function le(t) {
  let e, n, s, i, r, l;
  return {
    c() {
      (e = c("button")),
        (n = B("svg")),
        (s = B("g")),
        (i = B("path")),
        this.h();
    },
    l(t) {
      e = o(t, "BUTTON", { class: !0, style: !0 });
      var r = a(e);
      n = o(
        r,
        "svg",
        {
          version: !0,
          id: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
          x: !0,
          y: !0,
          viewBox: !0,
          style: !0,
          "xml:space": !0,
          class: !0,
        },
        1
      );
      var l = a(n);
      s = o(l, "g", {}, 1);
      var c = a(s);
      (i = o(c, "path", { d: !0 }, 1)),
        a(i).forEach(h),
        c.forEach(h),
        l.forEach(h),
        r.forEach(h),
        this.h();
    },
    h() {
      d(
        i,
        "d",
        "M427.408,19.697c-7.803-3.23-14.463-1.902-19.986,3.999l-37.116,36.834C349.94,41.305,326.672,26.412,300.5,15.848\n\t\tC274.328,5.285,247.251,0.003,219.271,0.003c-29.692,0-58.052,5.808-85.08,17.417c-27.03,11.61-50.347,27.215-69.951,46.82\n\t\tc-19.605,19.607-35.214,42.921-46.824,69.949C5.807,161.219,0,189.575,0,219.271c0,29.687,5.807,58.05,17.417,85.079\n\t\tc11.613,27.031,27.218,50.347,46.824,69.952c19.604,19.599,42.921,35.207,69.951,46.818c27.028,11.611,55.388,17.419,85.08,17.419\n\t\tc32.736,0,63.865-6.899,93.363-20.7c29.5-13.795,54.625-33.26,75.377-58.386c1.52-1.903,2.234-4.045,2.136-6.424\n\t\tc-0.089-2.378-0.999-4.329-2.711-5.852l-39.108-39.399c-2.101-1.711-4.473-2.566-7.139-2.566c-3.045,0.38-5.232,1.526-6.566,3.429\n\t\tc-13.895,18.086-30.93,32.072-51.107,41.977c-20.173,9.894-41.586,14.839-64.237,14.839c-19.792,0-38.684-3.854-56.671-11.564\n\t\tc-17.989-7.706-33.551-18.127-46.682-31.261c-13.13-13.135-23.551-28.691-31.261-46.682c-7.708-17.987-11.563-36.874-11.563-56.671\n\t\tc0-19.795,3.858-38.691,11.563-56.674c7.707-17.985,18.127-33.547,31.261-46.678c13.135-13.134,28.693-23.555,46.682-31.265\n\t\tc17.983-7.707,36.879-11.563,56.671-11.563c38.259,0,71.475,13.039,99.646,39.116l-39.409,39.394\n\t\tc-5.903,5.711-7.231,12.279-4.001,19.701c3.241,7.614,8.856,11.42,16.854,11.42h127.906c4.949,0,9.23-1.807,12.848-5.424\n\t\tc3.613-3.616,5.42-7.898,5.42-12.847V36.55C438.542,28.558,434.84,22.943,427.408,19.697z"
      ),
        d(n, "version", "1.1"),
        d(n, "id", "Capa_1"),
        d(n, "xmlns", "http://www.w3.org/2000/svg"),
        d(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        d(n, "x", "0px"),
        d(n, "y", "0px"),
        d(n, "viewBox", "0 0 438.542 438.542"),
        f(n, "enable-background", "new 0 0 438.542 438.542"),
        d(n, "xml:space", "preserve"),
        d(n, "class", "svelte-1evjavb"),
        d(e, "class", "before svelte-1evjavb"),
        f(e, "width", t[0]),
        f(e, "height", "100%");
    },
    m(c, o) {
      u(c, e, o),
        b(e, n),
        b(n, s),
        b(s, i),
        t[4](e),
        r || ((l = m(e, "click", t[2])), (r = !0));
    },
    p(t, [n]) {
      1 & n && f(e, "width", t[0]);
    },
    i: M,
    o: M,
    d(n) {
      n && h(e), t[4](null), (r = !1), l();
    },
  };
}
function ce(t, e, n) {
  let s,
    { size: i = "1.25rem" } = e,
    { onClick: r = (t) => {} } = e;
  return (
    (t.$$set = (t) => {
      "size" in t && n(0, (i = t.size)),
        "onClick" in t && n(3, (r = t.onClick));
    }),
    [
      i,
      s,
      function (t) {
        r(),
          s.classList.remove("before"),
          setTimeout(() => {
            s.classList.add("before");
          }, 500);
      },
      r,
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (s = t), n(1, s);
        });
      },
    ]
  );
}
class oe extends n {
  constructor(t) {
    super(), s(this, t, ce, le, i, { size: 0, onClick: 3 });
  }
}
function ae(t) {
  let e, n;
  return {
    c() {
      (e = c("div")), (n = y(t[0])), this.h();
    },
    l(s) {
      e = o(s, "DIV", { class: !0 });
      var i = a(e);
      (n = _(i, t[0])), i.forEach(h), this.h();
    },
    h() {
      d(e, "class", "address svelte-58z9bx");
    },
    m(t, s) {
      u(t, e, s), b(e, n);
    },
    p(t, [e]) {
      1 & e && T(n, t[0]);
    },
    i: M,
    o: M,
    d(t) {
      t && h(e);
    },
  };
}
function he(t, e, n) {
  let { address: s } = e;
  return (
    (t.$$set = (t) => {
      "address" in t && n(0, (s = t.address));
    }),
    [s]
  );
}
class de extends n {
  constructor(t) {
    super(), s(this, t, he, ae, i, { address: 0 });
  }
}
function fe(t) {
  let e, n, s, i, r, l, f, m, g, p;
  return (
    (s = new oe({ props: { onClick: t[4] } })),
    (l = new de({ props: { address: t[0] } })),
    {
      c() {
        (e = c("div")),
          (n = c("div")),
          C(s.$$.fragment),
          (i = E()),
          (r = c("div")),
          C(l.$$.fragment),
          (f = E()),
          (m = c("iframe")),
          this.h();
      },
      l(t) {
        e = o(t, "DIV", { class: !0 });
        var c = a(e);
        n = o(c, "DIV", { class: !0 });
        var d = a(n);
        X(s.$$.fragment, d), (i = I(d)), (r = o(d, "DIV", { class: !0 }));
        var u = a(r);
        X(l.$$.fragment, u),
          u.forEach(h),
          d.forEach(h),
          (f = I(c)),
          (m = o(c, "IFRAME", {
            src: !0,
            title: !0,
            allow: !0,
            id: !0,
            class: !0,
          })),
          a(m).forEach(h),
          c.forEach(h),
          this.h();
      },
      h() {
        d(r, "class", "address-container svelte-1q93aj3"),
          d(n, "class", "address-bar svelte-1q93aj3"),
          m.src !== (g = t[0]) && d(m, "src", g),
          d(m, "title", t[1]),
          d(m, "allow", "fullscreen"),
          d(m, "id", "iframe"),
          d(m, "class", "svelte-1q93aj3"),
          d(e, "class", "web-page svelte-1q93aj3");
      },
      m(c, o) {
        u(c, e, o),
          b(e, n),
          V(s, n, null),
          b(n, i),
          b(n, r),
          V(l, r, null),
          b(e, f),
          b(e, m),
          t[5](m),
          (p = !0);
      },
      p(t, [e]) {
        const n = {};
        4 & e && (n.onClick = t[4]), s.$set(n);
        const i = {};
        1 & e && (i.address = t[0]),
          l.$set(i),
          (!p || (1 & e && m.src !== (g = t[0]))) && d(m, "src", g),
          (!p || 2 & e) && d(m, "title", t[1]);
      },
      i(t) {
        p || (v(s.$$.fragment, t), v(l.$$.fragment, t), (p = !0));
      },
      o(t) {
        $(s.$$.fragment, t), $(l.$$.fragment, t), (p = !1);
      },
      d(n) {
        n && h(e), P(s), P(l), t[5](null);
      },
    }
  );
}
function ue(t, e, n) {
  let s,
    { url: i } = e,
    { title: r } = e,
    { onSelection: l = () => {} } = e,
    c = !1;
  N(() => {
    setInterval(() => {
      document.activeElement === s ? (c || l(), (c = !0)) : (c = !1);
    }, 100);
  });
  return (
    (t.$$set = (t) => {
      "url" in t && n(0, (i = t.url)),
        "title" in t && n(1, (r = t.title)),
        "onSelection" in t && n(3, (l = t.onSelection));
    }),
    [
      i,
      r,
      s,
      l,
      () => n(2, (s.src += ""), s),
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (s = t), n(2, s);
        });
      },
    ]
  );
}
class me extends n {
  constructor(t) {
    super(), s(this, t, ue, fe, i, { url: 0, title: 1, onSelection: 3 });
  }
}
let ge = [];
const pe = e([
  new Ut(
    "Croma",
    "Official website for the Croma Robot made in Webots.",
    [re(Kt.Name.CATEGORY_1), se],
    "/images/program-icons/croma.png",
    new Zt(
      me,
      { title: "Croma", url: "https://jitzek.github.io/croma-web-site/" },
      800,
      1e3
    )
  ),
  new Ut(
    "LocalHost 3000",
    "",
    [re(Kt.Name.CATEGORY_2)],
    "/images/program-icons/utilities-terminal.svg",
    new Zt(me, { title: "Croma", url: "http://localhost:3000/" }, 800, 600)
  ),
]);
function ve(t) {
  return ge.find((e) => e.id === t);
}
pe.subscribe((t) => (ge = t));
function $e(t, e, n) {
  const s = t.slice();
  return (s[22] = e[n]), s;
}
function we(t) {
  let e, n, s, i, r;
  return (
    (n = new St({
      props: {
        gridPosition: t[22],
        onDragStart: t[6],
        onDragMove: t[7],
        onDragEnd: t[8],
        onTouchStart: t[9],
        onTouchMove: t[10],
        onTouchEnd: t[11],
      },
    })),
    {
      c() {
        (e = c("div")), C(n.$$.fragment), (s = E()), this.h();
      },
      l(t) {
        e = o(t, "DIV", { class: !0 });
        var i = a(e);
        X(n.$$.fragment, i), (s = I(i)), i.forEach(h), this.h();
      },
      h() {
        d(
          e,
          "class",
          (i =
            "grid-child " +
            (null !== t[2] ? "show-outline" : "") +
            " " +
            (t[3].includes(t[22]) ? "hovered" : "") +
            " svelte-tbl5se")
        );
      },
      m(t, i) {
        u(t, e, i), V(n, e, null), b(e, s), (r = !0);
      },
      p(t, s) {
        const l = {};
        16 & s && (l.gridPosition = t[22]),
          n.$set(l),
          (!r ||
            (28 & s &&
              i !==
                (i =
                  "grid-child " +
                  (null !== t[2] ? "show-outline" : "") +
                  " " +
                  (t[3].includes(t[22]) ? "hovered" : "") +
                  " svelte-tbl5se"))) &&
            d(e, "class", i);
      },
      i(t) {
        r || (v(n.$$.fragment, t), (r = !0));
      },
      o(t) {
        $(n.$$.fragment, t), (r = !1);
      },
      d(t) {
        t && h(e), P(n);
      },
    }
  );
}
function xe(t) {
  let e, n, s, i;
  r(t[19]);
  let l = t[4].gridPositions,
    g = [];
  for (let r = 0; r < l.length; r += 1) g[r] = we($e(t, l, r));
  const p = (t) =>
    $(g[t], 1, 1, () => {
      g[t] = null;
    });
  return {
    c() {
      e = c("div");
      for (let t = 0; t < g.length; t += 1) g[t].c();
      this.h();
    },
    l(t) {
      e = o(t, "DIV", { class: !0, style: !0 });
      var n = a(e);
      for (let e = 0; e < g.length; e += 1) g[e].l(n);
      n.forEach(h), this.h();
    },
    h() {
      d(e, "class", "grid svelte-tbl5se"),
        f(e, "grid-template-columns", t[4].gridTemplateColumns),
        f(e, "gap", t[4].gap + "rem"),
        f(e, "padding", t[4].padding + "rem"),
        f(e, "margin-top", t[4].topOffset + "rem");
    },
    m(r, l) {
      u(r, e, l);
      for (let t = 0; t < g.length; t += 1) g[t].m(e, null);
      (n = !0),
        s ||
          ((i = [
            m(window, "resize", t[19]),
            m(e, "mousedown", Ht),
            m(e, "drop", t[5]),
          ]),
          (s = !0));
    },
    p(t, [s]) {
      if (4060 & s) {
        let n;
        for (l = t[4].gridPositions, n = 0; n < l.length; n += 1) {
          const i = $e(t, l, n);
          g[n]
            ? (g[n].p(i, s), v(g[n], 1))
            : ((g[n] = we(i)), g[n].c(), v(g[n], 1), g[n].m(e, null));
        }
        for (L(), n = l.length; n < g.length; n += 1) p(n);
        z();
      }
      (!n || 16 & s) && f(e, "grid-template-columns", t[4].gridTemplateColumns),
        (!n || 16 & s) && f(e, "gap", t[4].gap + "rem"),
        (!n || 16 & s) && f(e, "padding", t[4].padding + "rem"),
        (!n || 16 & s) && f(e, "margin-top", t[4].topOffset + "rem");
    },
    i(t) {
      if (!n) {
        for (let t = 0; t < l.length; t += 1) v(g[t]);
        n = !0;
      }
    },
    o(t) {
      g = g.filter(Boolean);
      for (let e = 0; e < g.length; e += 1) $(g[e]);
      n = !1;
    },
    d(t) {
      t && h(e), H(g, t), (s = !1), w(i);
    },
  };
}
function Ee(t, e, n) {
  let s;
  O(t, Dt, (t) => n(4, (s = t)));
  let i,
    r,
    { widthOffset: l = 0 } = e,
    { topOffset: c = 0 } = e,
    { bottomOffset: o = 0 } = e,
    { columnWidth: a = 3 } = e,
    { columnHeight: h = 4 } = e,
    { gap: d = 2.5 } = e,
    { padding: f = 1 } = e,
    u = null,
    m = [];
  function g(t, e, n) {
    let i = t - n.position.x,
      r = e - n.position.y,
      l = s.getClosestGridPositionToPosition(t, e);
    if (l && null != l.item) {
      if (l.item == n) return;
    } else
      s.gridItems
        .filter((t) => t.selected)
        .forEach((t) => {
          let e = s.gridPositions.find(
              (e) => null != e.item && e.item.id == t.id
            ),
            n = s.getClosestGridPositionToPosition(
              e.x + i,
              e.y + r,
              (e) => null == e.item || e.item == t
            );
          !(function (t, e, n) {
            bt.update((s) => {
              let i = s.gridItems.find((e) => e.id === t.id);
              return (
                (i.preferredRow = e),
                (i.preferredColumn = n),
                s.rearrangeGrid(),
                s
              );
            });
          })(t, n.row, n.column);
        });
  }
  function p(t, e) {
    if (null === u) return;
    let i = t - u.position.x,
      r = e - u.position.y;
    n(3, (m = []));
    let l = s.getClosestGridPositionToPosition(t, e);
    if (l && null != l.item) {
      if (l.item == u) return;
    } else
      s.gridItems
        .filter((t) => t.selected)
        .forEach((t) => {
          let e = s.gridPositions.find(
              (e) => null != e.item && e.item.id == t.id
            ),
            n = s.getClosestGridPositionToPosition(
              e.x + i,
              e.y + r,
              (e) => null == e.item || e.item == t
            );
          m.push(n);
        });
    n(3, m);
  }
  return (
    (t.$$set = (t) => {
      "widthOffset" in t && n(12, (l = t.widthOffset)),
        "topOffset" in t && n(13, (c = t.topOffset)),
        "bottomOffset" in t && n(14, (o = t.bottomOffset)),
        "columnWidth" in t && n(15, (a = t.columnWidth)),
        "columnHeight" in t && n(16, (h = t.columnHeight)),
        "gap" in t && n(17, (d = t.gap)),
        "padding" in t && n(18, (f = t.padding));
    }),
    (t.$$.update = () => {
      520195 & t.$$.dirty &&
        ((function (t, e, n, s, i, r, l) {
          bt.update(
            (c) => (
              (c.gap = t),
              (c.widthOffset = e),
              (c.topOffset = n),
              (c.bottomOffset = s),
              (c.padding = i),
              (c.columnWidth = r),
              (c.columnHeight = l),
              c
            )
          );
        })(d, l, c, o, f, a, h),
        i &&
          r &&
          (function (t, e) {
            bt.update((n) => (n.rearrangeGrid(t, e), n));
          })(i, r));
    }),
    [
      i,
      r,
      u,
      m,
      s,
      function (t) {
        null !== u && (g(t.clientX, t.clientY, u), n(2, (u = null)));
        let e = s.getClosestGridPositionToPosition(t.clientX, t.clientY);
        var i;
        if (null === e.item) {
          if (!Rt(t.dataTransfer.getData("program_id").trim())) return;
          let n = Number(t.dataTransfer.getData("program_id"));
          if (isNaN(n)) return;
          (i = new Pt(ve(n), e.row, e.column)),
            bt.update((t) => (t.addGridItem(i), t.rearrangeGrid(), t));
        }
      },
      function (t, e, s) {
        n(2, (u = s));
      },
      function (t, e) {
        p(t, e);
      },
      function (t, e, s) {
        n(2, (u = null));
      },
      function (t, e, s) {
        n(2, (u = s));
      },
      function (t, e, n) {
        p(t, e);
      },
      function (t, e, s) {
        g(t, e, s), n(2, (u = null));
      },
      l,
      c,
      o,
      a,
      h,
      d,
      f,
      function () {
        n(0, (i = window.innerWidth)), n(1, (r = window.innerHeight));
      },
    ]
  );
}
class ye extends n {
  constructor(t) {
    super(),
      s(this, t, Ee, xe, i, {
        widthOffset: 12,
        topOffset: 13,
        bottomOffset: 14,
        columnWidth: 15,
        columnHeight: 16,
        gap: 17,
        padding: 18,
      });
  }
}
function Ie(t) {
  let e, n, s, i, r;
  const g = t[5].default,
    x = l(g, t, t[4], null);
  return {
    c() {
      (e = c("div")), x && x.c(), this.h();
    },
    l(t) {
      e = o(t, "DIV", { class: !0, "data-tooltip": !0, style: !0 });
      var n = a(e);
      x && x.l(n), n.forEach(h), this.h();
    },
    h() {
      d(e, "class", (n = "tooltip " + t[1] + " svelte-nc8wit")),
        d(e, "data-tooltip", t[0]),
        f(e, "--width", t[2]);
    },
    m(n, l) {
      u(n, e, l),
        x && x.m(e, null),
        t[6](e),
        (s = !0),
        i ||
          ((r = [m(e, "mouseover", t[7]), m(e, "mouseleave", t[8])]), (i = !0));
    },
    p(t, [i]) {
      x && x.p && (!s || 16 & i) && p(x, g, t, t[4], s ? i : -1, null, null),
        (!s || (2 & i && n !== (n = "tooltip " + t[1] + " svelte-nc8wit"))) &&
          d(e, "class", n),
        (!s || 1 & i) && d(e, "data-tooltip", t[0]),
        (!s || 4 & i) && f(e, "--width", t[2]);
    },
    i(t) {
      s || (v(x, t), (s = !0));
    },
    o(t) {
      $(x, t), (s = !1);
    },
    d(n) {
      n && h(e), x && x.d(n), t[6](null), (i = !1), w(r);
    },
  };
}
function _e(t, e, n) {
  let s,
    { $$slots: i = {}, $$scope: r } = e,
    { tooltip: l = "" } = e,
    { position: c = "top" } = e,
    { width: o = "max-content" } = e;
  return (
    (t.$$set = (t) => {
      "tooltip" in t && n(0, (l = t.tooltip)),
        "position" in t && n(1, (c = t.position)),
        "width" in t && n(2, (o = t.width)),
        "$$scope" in t && n(4, (r = t.$$scope));
    }),
    [
      l,
      c,
      o,
      s,
      r,
      i,
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (s = t), n(3, s);
        });
      },
      () => n(3, (s.style.zIndex = "9"), s),
      () => n(3, (s.style.zIndex = "initial"), s),
    ]
  );
}
class be extends n {
  constructor(t) {
    super(), s(this, t, _e, Ie, i, { tooltip: 0, position: 1, width: 2 });
  }
}
class De extends class {} {
  constructor(t) {
    super(), (this.program = t);
  }
}
const Te = new (class {
    constructor() {
      this.programShortcuts = [];
    }
    addProgramShortcut(t) {
      this.programShortcuts.push(new De(t));
    }
    removeProgramShortcut(t) {
      this.programShortcuts = this.programShortcuts.filter(
        (e) => e.program.id !== t.id
      );
    }
    containsProgramShortcut(t) {
      return (
        void 0 !== this.programShortcuts.find((e) => e.program.id === t.id)
      );
    }
  })(),
  Me = e(Te),
  ke = t(Me, (t) => t);
function Le(t) {
  Te.containsProgramShortcut(t) || (Te.addProgramShortcut(t), Me.set(Te));
}
function ze(t) {
  Te.containsProgramShortcut(t) && (Te.removeProgramShortcut(t), Me.set(Te));
}
function Oe(t) {
  return Te.containsProgramShortcut(t);
}
function Ce(t) {
  let e, n, s, i;
  return {
    c() {
      (e = c("button")), (n = c("img")), this.h();
    },
    l(t) {
      e = o(t, "BUTTON", { class: !0, style: !0 });
      var s = a(e);
      (n = o(s, "IMG", { src: !0, alt: !0, width: !0, height: !0, class: !0 })),
        s.forEach(h),
        this.h();
    },
    h() {
      n.src !== (s = t[0].icon) && d(n, "src", s),
        d(n, "alt", (i = t[0].name)),
        d(n, "width", "100%"),
        d(n, "height", "auto"),
        d(n, "class", "svelte-1qqwr7o"),
        d(e, "class", "launcher svelte-1qqwr7o"),
        f(e, "height", t[2]);
    },
    m(t, s) {
      u(t, e, s), b(e, n);
    },
    p(t, r) {
      1 & r && n.src !== (s = t[0].icon) && d(n, "src", s),
        1 & r && i !== (i = t[0].name) && d(n, "alt", i),
        4 & r && f(e, "height", t[2]);
    },
    d(t) {
      t && h(e);
    },
  };
}
function Xe(t) {
  let e, n, s, i, r;
  return (
    (n = new be({
      props: {
        tooltip: t[0].name,
        position: "top",
        $$slots: { default: [Ce] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (e = c("div")), C(n.$$.fragment), this.h();
      },
      l(t) {
        e = o(t, "DIV", { style: !0 });
        var s = a(e);
        X(n.$$.fragment, s), s.forEach(h), this.h();
      },
      h() {
        f(e, "grid-row", t[1]);
      },
      m(l, c) {
        u(l, e, c),
          V(n, e, null),
          (s = !0),
          i ||
            ((r = [m(e, "click", t[4]), m(e, "contextmenu", t[3])]), (i = !0));
      },
      p(t, [i]) {
        const r = {};
        1 & i && (r.tooltip = t[0].name),
          37 & i && (r.$$scope = { dirty: i, ctx: t }),
          n.$set(r),
          (!s || 2 & i) && f(e, "grid-row", t[1]);
      },
      i(t) {
        s || (v(n.$$.fragment, t), (s = !0));
      },
      o(t) {
        $(n.$$.fragment, t), (s = !1);
      },
      d(t) {
        t && h(e), P(n), (i = !1), w(r);
      },
    }
  );
}
function Se(t, e, n) {
  let { program: s } = e,
    { row: i } = e,
    { height: r } = e;
  return (
    (t.$$set = (t) => {
      "program" in t && n(0, (s = t.program)),
        "row" in t && n(1, (i = t.row)),
        "height" in t && n(2, (r = t.height));
    }),
    [
      s,
      i,
      r,
      function (t) {
        t.preventDefault(),
          at(t.clientX, t.clientY, [
            {
              name: "Launch",
              icon: s.icon,
              onClick: () => {
                ht(), s.createProcess().bringToTop(), Ht();
              },
            },
            {
              name: "Unpin from taskbar",
              icon: "/images/desktop/unpin.svg",
              onClick: () => {
                ht(), ze(s);
              },
            },
          ]);
      },
      function (t) {
        Ht(), s.createProcess().bringToTop();
      },
    ]
  );
}
class Ve extends n {
  constructor(t) {
    super(), s(this, t, Se, Xe, i, { program: 0, row: 1, height: 2 });
  }
}
function Pe(t) {
  let e, n, s, i, r, f, g, w, x;
  const D = t[4].default,
    M = l(D, t, t[3], null);
  return {
    c() {
      (e = c("button")),
        (n = c("div")),
        (s = c("div")),
        M && M.c(),
        (i = E()),
        (r = c("p")),
        (f = y(t[1])),
        this.h();
    },
    l(l) {
      e = o(l, "BUTTON", { class: !0 });
      var c = a(e);
      n = o(c, "DIV", { class: !0 });
      var d = a(n);
      s = o(d, "DIV", { class: !0 });
      var u = a(s);
      M && M.l(u), u.forEach(h), (i = I(d)), (r = o(d, "P", { class: !0 }));
      var m = a(r);
      (f = _(m, t[1])), m.forEach(h), d.forEach(h), c.forEach(h), this.h();
    },
    h() {
      d(s, "class", "menu-button-icon svelte-2jkry6"),
        d(r, "class", "svelte-2jkry6"),
        d(n, "class", "menu-button-content svelte-2jkry6"),
        d(e, "class", "menu-button svelte-2jkry6"),
        S(e, "activated", t[0]);
    },
    m(l, c) {
      u(l, e, c),
        b(e, n),
        b(n, s),
        M && M.m(s, null),
        b(n, i),
        b(n, r),
        b(r, f),
        (g = !0),
        w || ((x = m(e, "click", t[2])), (w = !0));
    },
    p(t, [n]) {
      M && M.p && (!g || 8 & n) && p(M, D, t, t[3], g ? n : -1, null, null),
        (!g || 2 & n) && T(f, t[1]),
        1 & n && S(e, "activated", t[0]);
    },
    i(t) {
      g || (v(M, t), (g = !0));
    },
    o(t) {
      $(M, t), (g = !1);
    },
    d(t) {
      t && h(e), M && M.d(t), (w = !1), x();
    },
  };
}
function Re(t, e, n) {
  let { $$slots: s = {}, $$scope: i } = e,
    { title: r = "Start Menu" } = e,
    { activated: l = !1 } = e;
  return (
    Nt.subscribe((t) => n(0, (l = t))),
    (t.$$set = (t) => {
      "title" in t && n(1, (r = t.title)),
        "activated" in t && n(0, (l = t.activated)),
        "$$scope" in t && n(3, (i = t.$$scope));
    }),
    [
      l,
      r,
      function (t) {
        Bt.update((t) => !t);
      },
      i,
      s,
    ]
  );
}
class Be extends n {
  constructor(t) {
    super(), s(this, t, Re, Pe, i, { title: 1, activated: 0 });
  }
}
function Ne(t) {
  let e,
    n,
    s,
    i,
    r,
    l,
    c,
    m,
    g,
    p,
    v,
    $,
    w,
    x,
    E,
    I,
    D,
    T,
    k,
    L,
    z,
    O,
    C,
    X,
    S,
    V,
    P,
    R,
    N,
    H,
    G,
    W,
    A,
    j,
    q,
    F,
    Y,
    U,
    Z,
    J,
    K,
    Q,
    tt,
    et,
    nt,
    st,
    it,
    rt,
    lt,
    ct,
    ot,
    at,
    ht,
    dt,
    ft,
    ut,
    mt,
    gt,
    pt,
    vt,
    $t,
    wt,
    xt,
    Et,
    yt,
    It,
    _t,
    bt,
    Dt,
    Tt,
    Mt,
    kt,
    Lt,
    zt,
    Ot,
    Ct,
    Xt,
    St,
    Vt,
    Pt,
    Rt,
    Bt,
    Nt,
    Ht,
    Gt;
  return {
    c() {
      (e = B("svg")),
        (n = B("style")),
        (s = y(
          ".st0 {\n      fill: #dcc5b6;\n    }\n    .st1 {\n      fill: #efe6dd;\n    }\n    .st2 {\n      fill: #faf9f5;\n    }\n    .st3 {\n      fill: url(#XMLID_77_);\n    }\n    .st4 {\n      fill: #6f5c58;\n    }\n    .st5 {\n      fill: #3b4969;\n    }\n    .st6 {\n      fill: #1e2941;\n    }\n    .st7 {\n      opacity: 0.1;\n      fill: #88847e;\n    }\n    .st8 {\n      fill: #25304a;\n    }\n    .st9 {\n      opacity: 0.1;\n      fill: #b1bbde;\n    }\n    .st10 {\n      fill: #f15a29;\n    }\n    .st11 {\n      fill: #a43422;\n    }\n    .st12 {\n      fill: #5d5d5f;\n    }\n    .st13 {\n      opacity: 0.8;\n      fill: #515153;\n    }\n    .st14 {\n      opacity: 0.1;\n      fill: #727375;\n    }\n    .st15 {\n      fill: #444050;\n    }\n    .st16 {\n      fill: #38365a;\n    }\n    .st17 {\n      opacity: 0.6;\n      fill: #625c92;\n    }\n    .st18 {\n      opacity: 0.5;\n      fill: #d1d0e9;\n    }\n    .st19 {\n      fill: none;\n      stroke: #656465;\n      stroke-width: 10;\n      stroke-miterlimit: 10;\n    }\n    .st20 {\n      fill: none;\n      stroke: #656465;\n      stroke-width: 8;\n      stroke-miterlimit: 10;\n    }\n    .st21 {\n      fill: none;\n      stroke: #585757;\n      stroke-width: 3;\n      stroke-miterlimit: 10;\n    }\n    .st22 {\n      fill: #6f5b58;\n    }\n    .st23 {\n      fill: #7a5b58;\n    }\n    .st24 {\n      fill: #403d3d;\n    }\n    .st25 {\n      fill: #7b6552;\n    }\n    .st26 {\n      fill: #594a42;\n      stroke: #726658;\n      stroke-width: 4;\n      stroke-miterlimit: 10;\n    }\n    .st27 {\n      fill: #656565;\n    }\n    .st28 {\n      fill: #7c7d80;\n    }\n    .st29 {\n      fill: #7d7a7b;\n    }\n    .st30 {\n      fill: url(#XMLID_78_);\n    }\n    .st31 {\n      fill: #7b5c58;\n    }\n    .st32 {\n      fill: #7b6653;\n    }\n    .st33 {\n      fill: #726658;\n    }\n    .st34 {\n      fill: #5a4a42;\n    }\n    .st35 {\n      fill: #454446;\n    }\n    .st36 {\n      fill: #4e4d51;\n    }\n    .st37 {\n      fill: #737476;\n    }\n    .st38 {\n      fill: #515153;\n    }\n    .st39 {\n      fill: #5d5e60;\n    }\n    .st40 {\n      fill: #585757;\n    }\n    .st41 {\n      fill: #454050;\n    }\n    .st42 {\n      fill: #625c92;\n    }\n    .st43 {\n      fill: #d2d0e9;\n    }\n    .st44 {\n      fill: #231f20;\n    }\n    .st45 {\n      fill: #88847e;\n    }\n    .st46 {\n      fill: #2a3b8f;\n    }\n  "
        )),
        (i = B("rect")),
        (r = B("path")),
        (l = B("polyline")),
        (c = B("linearGradient")),
        (m = B("stop")),
        (g = B("stop")),
        (p = B("path")),
        (v = B("path")),
        ($ = B("path")),
        (w = B("path")),
        (x = B("path")),
        (E = B("ellipse")),
        (I = B("path")),
        (D = B("path")),
        (T = B("path")),
        (k = B("rect")),
        (L = B("path")),
        (z = B("path")),
        (O = B("path")),
        (C = B("path")),
        (X = B("path")),
        (S = B("path")),
        (V = B("path")),
        (P = B("path")),
        (R = B("ellipse")),
        (N = B("ellipse")),
        (H = B("ellipse")),
        (G = B("ellipse")),
        (W = B("path")),
        (A = B("path")),
        (j = B("path")),
        (q = B("ellipse")),
        (F = B("ellipse")),
        (Y = B("ellipse")),
        (U = B("path")),
        (Z = B("ellipse")),
        (J = B("ellipse")),
        (K = B("path")),
        (Q = B("path")),
        (tt = B("path")),
        (et = B("ellipse")),
        (nt = B("ellipse")),
        (st = B("path")),
        (it = B("ellipse")),
        (rt = B("ellipse")),
        (lt = B("rect")),
        (ct = B("path")),
        (ot = B("rect")),
        (at = B("path")),
        (ht = B("polygon")),
        (dt = B("path")),
        (ft = B("polygon")),
        (ut = B("path")),
        (mt = B("g")),
        (gt = B("rect")),
        (pt = B("rect")),
        (vt = B("linearGradient")),
        ($t = B("stop")),
        (wt = B("stop")),
        (xt = B("path")),
        (Et = B("rect")),
        (yt = B("rect")),
        (It = B("rect")),
        (_t = B("rect")),
        (bt = B("rect")),
        (Dt = B("rect")),
        (Tt = B("rect")),
        (Mt = B("rect")),
        (kt = B("rect")),
        (Lt = B("rect")),
        (zt = B("rect")),
        (Ot = B("rect")),
        (Ct = B("rect")),
        (Xt = B("rect")),
        (St = B("rect")),
        (Vt = B("rect")),
        (Pt = B("rect")),
        (Rt = B("rect")),
        (Bt = B("rect")),
        (Nt = B("rect")),
        (Ht = B("rect")),
        this.h();
    },
    l(t) {
      e = o(
        t,
        "svg",
        {
          version: !0,
          id: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
          x: !0,
          y: !0,
          viewBox: !0,
          style: !0,
          "xml:space": !0,
        },
        1
      );
      var d = a(e);
      n = o(d, "style", { type: !0 }, 1);
      var f = a(n);
      (s = _(
        f,
        ".st0 {\n      fill: #dcc5b6;\n    }\n    .st1 {\n      fill: #efe6dd;\n    }\n    .st2 {\n      fill: #faf9f5;\n    }\n    .st3 {\n      fill: url(#XMLID_77_);\n    }\n    .st4 {\n      fill: #6f5c58;\n    }\n    .st5 {\n      fill: #3b4969;\n    }\n    .st6 {\n      fill: #1e2941;\n    }\n    .st7 {\n      opacity: 0.1;\n      fill: #88847e;\n    }\n    .st8 {\n      fill: #25304a;\n    }\n    .st9 {\n      opacity: 0.1;\n      fill: #b1bbde;\n    }\n    .st10 {\n      fill: #f15a29;\n    }\n    .st11 {\n      fill: #a43422;\n    }\n    .st12 {\n      fill: #5d5d5f;\n    }\n    .st13 {\n      opacity: 0.8;\n      fill: #515153;\n    }\n    .st14 {\n      opacity: 0.1;\n      fill: #727375;\n    }\n    .st15 {\n      fill: #444050;\n    }\n    .st16 {\n      fill: #38365a;\n    }\n    .st17 {\n      opacity: 0.6;\n      fill: #625c92;\n    }\n    .st18 {\n      opacity: 0.5;\n      fill: #d1d0e9;\n    }\n    .st19 {\n      fill: none;\n      stroke: #656465;\n      stroke-width: 10;\n      stroke-miterlimit: 10;\n    }\n    .st20 {\n      fill: none;\n      stroke: #656465;\n      stroke-width: 8;\n      stroke-miterlimit: 10;\n    }\n    .st21 {\n      fill: none;\n      stroke: #585757;\n      stroke-width: 3;\n      stroke-miterlimit: 10;\n    }\n    .st22 {\n      fill: #6f5b58;\n    }\n    .st23 {\n      fill: #7a5b58;\n    }\n    .st24 {\n      fill: #403d3d;\n    }\n    .st25 {\n      fill: #7b6552;\n    }\n    .st26 {\n      fill: #594a42;\n      stroke: #726658;\n      stroke-width: 4;\n      stroke-miterlimit: 10;\n    }\n    .st27 {\n      fill: #656565;\n    }\n    .st28 {\n      fill: #7c7d80;\n    }\n    .st29 {\n      fill: #7d7a7b;\n    }\n    .st30 {\n      fill: url(#XMLID_78_);\n    }\n    .st31 {\n      fill: #7b5c58;\n    }\n    .st32 {\n      fill: #7b6653;\n    }\n    .st33 {\n      fill: #726658;\n    }\n    .st34 {\n      fill: #5a4a42;\n    }\n    .st35 {\n      fill: #454446;\n    }\n    .st36 {\n      fill: #4e4d51;\n    }\n    .st37 {\n      fill: #737476;\n    }\n    .st38 {\n      fill: #515153;\n    }\n    .st39 {\n      fill: #5d5e60;\n    }\n    .st40 {\n      fill: #585757;\n    }\n    .st41 {\n      fill: #454050;\n    }\n    .st42 {\n      fill: #625c92;\n    }\n    .st43 {\n      fill: #d2d0e9;\n    }\n    .st44 {\n      fill: #231f20;\n    }\n    .st45 {\n      fill: #88847e;\n    }\n    .st46 {\n      fill: #2a3b8f;\n    }\n  "
      )),
        f.forEach(h),
        (i = o(
          d,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(i).forEach(h),
        (r = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(r).forEach(h),
        (l = o(d, "polyline", { id: !0, class: !0, points: !0 }, 1)),
        a(l).forEach(h),
        (c = o(
          d,
          "linearGradient",
          { id: !0, gradientUnits: !0, x1: !0, y1: !0, x2: !0, y2: !0 },
          1
        ));
      var u = a(c);
      (m = o(u, "stop", { offset: !0, style: !0 }, 1)),
        a(m).forEach(h),
        (g = o(u, "stop", { offset: !0, style: !0 }, 1)),
        a(g).forEach(h),
        u.forEach(h),
        (p = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(p).forEach(h),
        (v = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(v).forEach(h),
        ($ = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a($).forEach(h),
        (w = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(w).forEach(h),
        (x = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(x).forEach(h),
        (E = o(
          d,
          "ellipse",
          { id: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(E).forEach(h),
        (I = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(I).forEach(h),
        (D = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(D).forEach(h),
        (T = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(T).forEach(h),
        (k = o(
          d,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(k).forEach(h),
        (L = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(L).forEach(h),
        (z = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(z).forEach(h),
        (O = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(O).forEach(h),
        (C = o(d, "path", { id: !0, d: !0 }, 1)),
        a(C).forEach(h),
        (X = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(X).forEach(h),
        (S = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(S).forEach(h),
        (V = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(V).forEach(h),
        (P = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(P).forEach(h),
        (R = o(
          d,
          "ellipse",
          { id: !0, transform: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(R).forEach(h),
        (N = o(
          d,
          "ellipse",
          { id: !0, transform: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(N).forEach(h),
        (H = o(
          d,
          "ellipse",
          { id: !0, transform: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(H).forEach(h),
        (G = o(
          d,
          "ellipse",
          { id: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(G).forEach(h),
        (W = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(W).forEach(h),
        (A = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(A).forEach(h),
        (j = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(j).forEach(h),
        (q = o(
          d,
          "ellipse",
          { id: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(q).forEach(h),
        (F = o(
          d,
          "ellipse",
          { id: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(F).forEach(h),
        (Y = o(
          d,
          "ellipse",
          { id: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(Y).forEach(h),
        (U = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(U).forEach(h),
        (Z = o(
          d,
          "ellipse",
          { id: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(Z).forEach(h),
        (J = o(
          d,
          "ellipse",
          { id: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(J).forEach(h),
        (K = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(K).forEach(h),
        (Q = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(Q).forEach(h),
        (tt = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(tt).forEach(h),
        (et = o(
          d,
          "ellipse",
          { id: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(et).forEach(h),
        (nt = o(
          d,
          "ellipse",
          { id: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(nt).forEach(h),
        (st = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(st).forEach(h),
        (it = o(
          d,
          "ellipse",
          { id: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(it).forEach(h),
        (rt = o(
          d,
          "ellipse",
          { id: !0, class: !0, cx: !0, cy: !0, rx: !0, ry: !0 },
          1
        )),
        a(rt).forEach(h),
        (lt = o(
          d,
          "rect",
          {
            id: !0,
            x: !0,
            y: !0,
            transform: !0,
            class: !0,
            width: !0,
            height: !0,
          },
          1
        )),
        a(lt).forEach(h),
        (ct = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(ct).forEach(h),
        (ot = o(
          d,
          "rect",
          {
            id: !0,
            x: !0,
            y: !0,
            transform: !0,
            class: !0,
            width: !0,
            height: !0,
          },
          1
        )),
        a(ot).forEach(h),
        (at = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(at).forEach(h),
        (ht = o(d, "polygon", { id: !0, class: !0, points: !0 }, 1)),
        a(ht).forEach(h),
        (dt = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(dt).forEach(h),
        (ft = o(d, "polygon", { id: !0, class: !0, points: !0 }, 1)),
        a(ft).forEach(h),
        (ut = o(d, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(ut).forEach(h),
        (mt = o(d, "g", { id: !0 }, 1));
      var y = a(mt);
      (gt = o(
        y,
        "rect",
        { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
        1
      )),
        a(gt).forEach(h),
        (pt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(pt).forEach(h),
        (vt = o(
          y,
          "linearGradient",
          { id: !0, gradientUnits: !0, x1: !0, y1: !0, x2: !0, y2: !0 },
          1
        ));
      var b = a(vt);
      ($t = o(b, "stop", { offset: !0, style: !0 }, 1)),
        a($t).forEach(h),
        (wt = o(b, "stop", { offset: !0, style: !0 }, 1)),
        a(wt).forEach(h),
        b.forEach(h),
        (xt = o(y, "path", { id: !0, class: !0, d: !0 }, 1)),
        a(xt).forEach(h),
        (Et = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Et).forEach(h),
        (yt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(yt).forEach(h),
        (It = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(It).forEach(h),
        (_t = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(_t).forEach(h),
        (bt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(bt).forEach(h),
        (Dt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Dt).forEach(h),
        (Tt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Tt).forEach(h),
        (Mt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Mt).forEach(h),
        (kt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(kt).forEach(h),
        (Lt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Lt).forEach(h),
        (zt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(zt).forEach(h),
        (Ot = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Ot).forEach(h),
        (Ct = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Ct).forEach(h),
        (Xt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Xt).forEach(h),
        (St = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(St).forEach(h),
        (Vt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Vt).forEach(h),
        (Pt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Pt).forEach(h),
        (Rt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Rt).forEach(h),
        (Bt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Bt).forEach(h),
        (Nt = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Nt).forEach(h),
        (Ht = o(
          y,
          "rect",
          { id: !0, x: !0, y: !0, class: !0, width: !0, height: !0 },
          1
        )),
        a(Ht).forEach(h),
        y.forEach(h),
        d.forEach(h),
        this.h();
    },
    h() {
      d(n, "type", "text/css"),
        d(i, "id", "XMLID_1_"),
        d(i, "x", "0"),
        d(i, "y", "560.1"),
        d(i, "class", "st0"),
        d(i, "width", "1000"),
        d(i, "height", "439.9"),
        d(r, "id", "XMLID_6_"),
        d(r, "class", "st1"),
        d(
          r,
          "d",
          "M0,558.6v46.5C35.8,668,82.1,739.3,141.6,813.6c60.5,75.6,121.1,137.2,175.5,186.4h360\n\tc58.9-50.8,125.9-116.6,192-199.9c54.9-69.2,97.7-135.9,130.9-195c0-15.5,0-31,0-46.5"
        ),
        d(l, "id", "XMLID_2_"),
        d(l, "class", "st2"),
        d(l, "points", "1002.9,555.7 639.4,995.6 366.5,995.6 2.9,555.7 "),
        d(m, "offset", "0"),
        f(m, "stop-color", "#CDB99F"),
        d(g, "offset", "1"),
        f(g, "stop-color", "#FDFDFE"),
        d(c, "id", "XMLID_77_"),
        d(c, "gradientUnits", "userSpaceOnUse"),
        d(c, "x1", "501.2266"),
        d(c, "y1", "710.811"),
        d(c, "x2", "501.2266"),
        d(c, "y2", "0.1825"),
        d(p, "id", "XMLID_42_"),
        d(p, "class", "st3"),
        d(
          p,
          "d",
          "M1000,553.4c-61.1,42.9-242.3,158.3-501.7,157.5C242.5,710,63.8,596.4,2.5,553.4\n\tc0-184.4,0-368.8,0-553.2H1000V553.4z"
        ),
        d(v, "id", "XMLID_51_"),
        d(v, "class", "st4"),
        d(
          v,
          "d",
          "M1001.2,0.2L578.6,177.3c-18,7.6-45.4,16.4-79.3,16.8c-36.6,0.5-66-8.9-84.7-16.8\n\tC276.8,118.2,139,59.2,1.2,0.2"
        ),
        d($, "id", "XMLID_4_"),
        d($, "class", "st1"),
        d($, "d", "M5.1,593.1"),
        d(w, "id", "XMLID_9_"),
        d(w, "class", "st5"),
        d(
          w,
          "d",
          "M471,710.2c-11.8,25.5-23.7,51-35.5,76.6l35.2,59.8c-4.2,51.1-8.4,102.1-12.7,153.2\n\tc28,0,56,0,84,0c-4.3-51.1-8.6-102.1-12.8-153.2c10.8-20.3,21.6-40.5,32.4-60.8c-10.9-25.1-21.7-50.3-32.6-75.4"
        ),
        d(x, "id", "XMLID_12_"),
        d(x, "class", "st6"),
        d(
          x,
          "d",
          "M494.2,846.7c-19.4-19-38.8-38.1-58.1-57.1c1.6-3.2,3.3-6.4,4.9-9.5\n\tc19.8,20.3,39.6,40.5,59.4,60.8C498.3,842.7,496.3,844.7,494.2,846.7z"
        ),
        d(E, "id", "XMLID_33_"),
        d(E, "class", "st7"),
        d(E, "cx", "500.4"),
        d(E, "cy", "395"),
        d(E, "rx", "108.7"),
        d(E, "ry", "109.7"),
        d(I, "id", "XMLID_8_"),
        d(I, "class", "st8"),
        d(
          I,
          "d",
          "M529.6,850.8h-58.9c-0.6-2.5-1.3-5.1-1.9-7.6c20.7,0.1,41.4,0.1,62.1,0.2\n\tC530.5,845.9,530,848.4,529.6,850.8z"
        ),
        d(D, "id", "XMLID_13_"),
        d(D, "class", "st6"),
        d(
          D,
          "d",
          "M494.3,846.6c21.2-21.5,42.4-43.1,63.6-64.6c1.2,2.7,2.5,5.3,3.7,8\n\tc-19.2,18.7-38.3,37.5-57.5,56.2C500.8,846.3,497.6,846.4,494.3,846.6z"
        ),
        d(T, "id", "XMLID_5_"),
        d(T, "class", "st8"),
        d(
          T,
          "d",
          "M501.6,850.7c-21.6-22-43.2-44.1-64.9-66.1c1.1-2.5,2.3-4.9,3.4-7.4\n\tc22.5,23.1,45.1,46.3,67.6,69.4C505.7,847.9,503.6,849.3,501.6,850.7z"
        ),
        d(k, "id", "XMLID_10_"),
        d(k, "x", "486.5"),
        d(k, "y", "850.8"),
        d(k, "class", "st9"),
        d(k, "width", "27"),
        d(k, "height", "149.2"),
        d(L, "id", "XMLID_7_"),
        d(L, "class", "st8"),
        d(
          L,
          "d",
          "M491,846.6c22.4-22.9,44.8-45.7,67.2-68.6c1,2.2,1.9,4.4,2.9,6.5l-64.6,66\n\tC494.6,849.3,492.8,847.9,491,846.6z"
        ),
        d(z, "id", "XMLID_11_"),
        d(z, "class", "st9"),
        d(
          z,
          "d",
          "M445.1,766.4c4.3-9.1,8.6-18.2,12.9-27.3h83c4.1,9.2,8.2,18.3,12.3,27.5\n\tC517.2,766.4,481.2,766.4,445.1,766.4z"
        ),
        d(O, "id", "XMLID_14_"),
        d(O, "class", "st10"),
        d(
          O,
          "d",
          "M608.8,377.2c6,28.1-50.1,83.8-108.9,83.8C441,461,385,405.1,391,377.2\n\tc6.3-29.2,80.5-29.8,106.3-30.1C519.3,346.9,602.1,346.2,608.8,377.2z"
        ),
        d(C, "id", "XMLID_16_"),
        d(
          C,
          "d",
          "M608.9,381.9c4.5,7.6-42.5,83.7-107.7,84.7c-65.5,1-114.4-74.6-110-82.3c3.8-6.7,45.2,40.4,109.6,39.5\n\tC564.8,422.9,605,375.3,608.9,381.9z"
        ),
        d(X, "id", "XMLID_15_"),
        d(X, "class", "st11"),
        d(
          X,
          "d",
          "M609.1,383.9c4.6,7.5-42.3,86.1-107.9,86.8c-65.7,0.8-113.9-76.8-109.5-84.3\n\tc3.8-6.5,45.1,42.2,109.1,41.5C564.7,427.2,605.2,377.5,609.1,383.9z"
        ),
        d(S, "id", "XMLID_17_"),
        d(S, "class", "st12"),
        d(
          S,
          "d",
          "M586.5,360.6c-2,12.1-27.7-4.5-87.6-4.4c-58.7,0.1-83.7,16.3-85.7,4.4\n\tc-2.6-16.2,39.1-75.6,86.9-75.4C547.7,285.4,589.1,344.4,586.5,360.6z"
        ),
        d(V, "id", "XMLID_18_"),
        d(V, "class", "st13"),
        d(
          V,
          "d",
          "M577,361.1c-1.7,10.8-24.7-4-78-3.9c-52.3,0.1-74.6,14.5-76.3,3.9\n\tc-2.3-14.4,34.8-67.3,77.4-67.1C542.4,294.1,579.3,346.7,577,361.1z"
        ),
        d(P, "id", "XMLID_19_"),
        d(P, "class", "st14"),
        d(
          P,
          "d",
          "M555.8,358.8c-0.9,1.6-3.8,1-10.3,0.1c-15.8-2.2-34-3.4-45.7-2.8c-9.5,0.5-27.5,2.8-50.6,3.8\n\tc-1.4,0.1-3.5,0.1-4.2-1.2c-3.3-6,21.5-45.2,55.6-45.2C534.7,313.6,559.3,352.6,555.8,358.8z"
        ),
        d(R, "id", "XMLID_21_"),
        d(
          R,
          "transform",
          "matrix(-0.9683 -0.2499 0.2499 -0.9683 676.5232 633.7002)"
        ),
        d(R, "class", "st15"),
        d(R, "cx", "378.5"),
        d(R, "cy", "273.9"),
        d(R, "rx", "43.7"),
        d(R, "ry", "66.4"),
        d(N, "id", "XMLID_20_"),
        d(
          N,
          "transform",
          "matrix(-0.9683 -0.2499 0.2499 -0.9683 670.5576 635.8735)"
        ),
        d(N, "class", "st16"),
        d(N, "cx", "375.6"),
        d(N, "cy", "275.4"),
        d(N, "rx", "37"),
        d(N, "ry", "57.5"),
        d(H, "id", "XMLID_23_"),
        d(
          H,
          "transform",
          "matrix(-0.9683 -0.2499 0.2499 -0.9683 691.9598 612.247)"
        ),
        d(H, "class", "st17"),
        d(H, "cx", "384.8"),
        d(H, "cy", "262.2"),
        d(H, "rx", "27.6"),
        d(H, "ry", "38.4"),
        d(G, "id", "XMLID_22_"),
        d(G, "class", "st18"),
        d(G, "cx", "403.5"),
        d(G, "cy", "253.2"),
        d(G, "rx", "9.3"),
        d(G, "ry", "13.5"),
        d(W, "id", "XMLID_27_"),
        d(W, "class", "st15"),
        d(
          W,
          "d",
          "M664.4,261.9c7.4,35.4-3.1,69.3-23.4,75.6c-20.4,6.4-42.9-17.1-50.4-52.5s3.1-69.3,23.4-75.6\n\tS656.9,226.5,664.4,261.9z"
        ),
        d(A, "id", "XMLID_26_"),
        d(A, "class", "st16"),
        d(
          A,
          "d",
          "M660,265.5c6.9,30.7-1.4,59.8-18.6,64.9s-36.6-15.7-43.5-46.4c-6.9-30.7,1.4-59.8,18.6-64.9\n\tC633.6,214,653.1,234.8,660,265.5z"
        ),
        d(j, "id", "XMLID_25_"),
        d(j, "class", "st17"),
        d(
          j,
          "d",
          "M653.6,259.8c1.2,20.4-9.6,36.3-24.1,35.6c-14.5-0.7-27.2-17.8-28.3-38.2\n\tc-1.2-20.4,9.6-36.3,24.1-35.6S652.5,239.4,653.6,259.8z"
        ),
        d(q, "id", "XMLID_24_"),
        d(q, "class", "st18"),
        d(q, "cx", "639.7"),
        d(q, "cy", "245"),
        d(q, "rx", "8.1"),
        d(q, "ry", "13.5"),
        d(F, "id", "XMLID_28_"),
        d(F, "class", "st19"),
        d(F, "cx", "383"),
        d(F, "cy", "260.3"),
        d(F, "rx", "65.1"),
        d(F, "ry", "69.1"),
        d(Y, "id", "XMLID_29_"),
        d(Y, "class", "st19"),
        d(Y, "cx", "616.5"),
        d(Y, "cy", "264"),
        d(Y, "rx", "65.1"),
        d(Y, "ry", "69.1"),
        d(U, "id", "XMLID_30_"),
        d(U, "class", "st20"),
        d(
          U,
          "d",
          "M552.5,270.5c-0.1,0-22.1-23.7-52.8-23.7c-30.7,0-52.6,23.7-52.6,23.7c-0.1,0,13.1-24,52.7-24\n\tC539.4,246.5,552.6,270.5,552.5,270.5z"
        ),
        d(Z, "id", "XMLID_32_"),
        d(Z, "class", "st21"),
        d(Z, "cx", "383"),
        d(Z, "cy", "258.5"),
        d(Z, "rx", "60.7"),
        d(Z, "ry", "64.4"),
        d(J, "id", "XMLID_31_"),
        d(J, "class", "st21"),
        d(J, "cx", "615.1"),
        d(J, "cy", "264"),
        d(J, "rx", "60.7"),
        d(J, "ry", "64.4"),
        d(K, "id", "XMLID_34_"),
        d(K, "class", "st22"),
        d(
          K,
          "d",
          "M767.7,81.7c-75.2,25.3-150.5,50.6-225.7,75.8c-9.8,1.1-24.8,2.4-43.2,2.5\n\tc0,0-22.4,0.1-46.2-2.5c-32.1-3.5-115.4-28.1-220.2-77.2"
        ),
        d(Q, "id", "XMLID_35_"),
        d(Q, "class", "st23"),
        d(
          Q,
          "d",
          "M1000-0.1L577.4,165.4c-18,7.1-45.4,15.3-79.3,15.7c-36.6,0.4-66-8.3-84.7-15.7\n\tC275.6,110.2,137.8,55.1,0-0.1"
        ),
        d(tt, "id", "XMLID_40_"),
        d(tt, "class", "st24"),
        d(
          tt,
          "d",
          "M545,132.8h-90.4c-3,0-5.5-2.5-5.5-5.5v-2.8c0-3,2.5-5.5,5.5-5.5H545c3,0,5.5,2.5,5.5,5.5v2.8\n\tC550.5,130.3,548,132.8,545,132.8z"
        ),
        d(et, "id", "XMLID_37_"),
        d(et, "class", "st25"),
        d(et, "cx", "499.8"),
        d(et, "cy", "125.8"),
        d(et, "rx", "31.9"),
        d(et, "ry", "31"),
        d(nt, "id", "XMLID_36_"),
        d(nt, "class", "st26"),
        d(nt, "cx", "499.8"),
        d(nt, "cy", "125.8"),
        d(nt, "rx", "23.2"),
        d(nt, "ry", "22.6"),
        d(st, "id", "XMLID_41_"),
        d(st, "class", "st24"),
        d(
          st,
          "d",
          "M545.2,46.3h-90.4c-3,0-5.5-2.5-5.5-5.5v-2.8c0-3,2.5-5.5,5.5-5.5h90.4c3,0,5.5,2.5,5.5,5.5\n\tv2.8C550.7,43.8,548.2,46.3,545.2,46.3z"
        ),
        d(it, "id", "XMLID_39_"),
        d(it, "class", "st25"),
        d(it, "cx", "500.4"),
        d(it, "cy", "39.4"),
        d(it, "rx", "31.9"),
        d(it, "ry", "31"),
        d(rt, "id", "XMLID_38_"),
        d(rt, "class", "st26"),
        d(rt, "cx", "500.4"),
        d(rt, "cy", "39.4"),
        d(rt, "rx", "23.2"),
        d(rt, "ry", "22.6"),
        d(lt, "id", "XMLID_43_"),
        d(lt, "x", "273.3"),
        d(lt, "y", "246.2"),
        d(
          lt,
          "transform",
          "matrix(0.9716 0.2366 -0.2366 0.9716 67.7293 -62.9569)"
        ),
        d(lt, "class", "st27"),
        d(lt, "width", "45.9"),
        d(lt, "height", "9.1"),
        d(ct, "id", "XMLID_49_"),
        d(ct, "class", "st28"),
        d(
          ct,
          "d",
          "M272.9,249.7c-6.7-13.7-13.3-27.5-20-41.2c2.8-1.4,5.7-2.7,8.5-4.1\n\tc6.2,12.6,12.4,25.2,18.6,37.8C277.7,244.7,275.3,247.2,272.9,249.7z"
        ),
        d(ot, "id", "XMLID_44_"),
        d(ot, "x", "244.3"),
        d(ot, "y", "222.6"),
        d(
          ot,
          "transform",
          "matrix(0.4325 0.9016 -0.9016 0.4325 356.4015 -112.015)"
        ),
        d(ot, "class", "st27"),
        d(ot, "width", "45.9"),
        d(ot, "height", "9.1"),
        d(at, "id", "XMLID_45_"),
        d(at, "class", "st27"),
        d(
          at,
          "d",
          "M220.4,225.8l32.7-17.3c2.2-1.1,4.8-0.3,6,1.8l0.1,0.2c1.1,2.2,0.3,4.8-1.8,6l-32.7,17.3\n\tc-2.2,1.1-4.8,0.3-6-1.8l-0.1-0.2C217.4,229.6,218.3,226.9,220.4,225.8z"
        ),
        d(ht, "id", "XMLID_48_"),
        d(ht, "class", "st27"),
        d(ht, "points", "683.6,255.2 724.2,244.3 722.2,235.5 681.6,246.4 "),
        d(dt, "id", "XMLID_50_"),
        d(dt, "class", "st29"),
        d(
          dt,
          "d",
          "M724.1,244.2c5.8-13.9,11.5-27.8,17.3-41.7c-2.3-1.2-4.5-2.4-6.8-3.6\n\tc-5.6,12.6-11.1,25.2-16.7,37.8C720,239.2,722.1,241.7,724.1,244.2z"
        ),
        d(ft, "id", "XMLID_47_"),
        d(ft, "class", "st27"),
        d(ft, "points", "724.1,244.3 742.1,203 734.7,199 716.6,240.4 "),
        d(ut, "id", "XMLID_46_"),
        d(ut, "class", "st27"),
        d(
          ut,
          "d",
          "M772,220.3L742.2,203c-2-1.1-4.4-0.3-5.4,1.8l-0.1,0.2c-1,2.2-0.3,4.8,1.7,6l29.8,17.3\n\tc2,1.1,4.4,0.3,5.4-1.8l0.1-0.2C774.7,224.1,774,221.5,772,220.3z"
        ),
        d(gt, "id", "XMLID_75_"),
        d(gt, "x", "863.5"),
        d(gt, "y", "972.4"),
        d(gt, "class", "st0"),
        d(gt, "width", "18.2"),
        d(gt, "height", "18.2"),
        d(pt, "id", "XMLID_74_"),
        d(pt, "x", "809.1"),
        d(pt, "y", "972.4"),
        d(pt, "class", "st2"),
        d(pt, "width", "18.2"),
        d(pt, "height", "18.2"),
        d($t, "offset", "0"),
        f($t, "stop-color", "#D3BB9F"),
        d(wt, "offset", "1"),
        f(wt, "stop-color", "#FDFDFE"),
        d(vt, "id", "XMLID_78_"),
        d(vt, "gradientUnits", "userSpaceOnUse"),
        d(vt, "x1", "854.4675"),
        d(vt, "y1", "990.6232"),
        d(vt, "x2", "854.4675"),
        d(vt, "y2", "972.4033"),
        d(xt, "id", "XMLID_73_"),
        d(xt, "class", "st30"),
        d(
          xt,
          "d",
          "M863.5,990.6c-3,0-6,0-9,0c-3.1,0-6.1,0-9.2,0c0-6.1,0-12.1,0-18.2h18.2V990.6z"
        ),
        d(Et, "id", "XMLID_72_"),
        d(Et, "x", "827.2"),
        d(Et, "y", "972.4"),
        d(Et, "class", "st1"),
        d(Et, "width", "18.2"),
        d(Et, "height", "18.2"),
        d(yt, "id", "XMLID_71_"),
        d(yt, "x", "936.2"),
        d(yt, "y", "972.4"),
        d(yt, "class", "st31"),
        d(yt, "width", "18.2"),
        d(yt, "height", "18.2"),
        d(It, "id", "XMLID_70_"),
        d(It, "x", "899.9"),
        d(It, "y", "972.4"),
        d(It, "class", "st32"),
        d(It, "width", "18.2"),
        d(It, "height", "18.2"),
        d(_t, "id", "XMLID_69_"),
        d(_t, "x", "881.7"),
        d(_t, "y", "972.4"),
        d(_t, "class", "st33"),
        d(_t, "width", "18.2"),
        d(_t, "height", "18.2"),
        d(bt, "id", "XMLID_68_"),
        d(bt, "x", "954.4"),
        d(bt, "y", "972.4"),
        d(bt, "class", "st34"),
        d(bt, "width", "18.2"),
        d(bt, "height", "18.2"),
        d(Dt, "id", "XMLID_67_"),
        d(Dt, "x", "954.4"),
        d(Dt, "y", "954.5"),
        d(Dt, "class", "st24"),
        d(Dt, "width", "18.2"),
        d(Dt, "height", "17.9"),
        d(Tt, "id", "XMLID_66_"),
        d(Tt, "x", "918"),
        d(Tt, "y", "972.4"),
        d(Tt, "class", "st4"),
        d(Tt, "width", "18.2"),
        d(Tt, "height", "18.2"),
        d(Mt, "id", "XMLID_65_"),
        d(Mt, "x", "936.2"),
        d(Mt, "y", "954.5"),
        d(Mt, "class", "st35"),
        d(Mt, "width", "18.2"),
        d(Mt, "height", "17.9"),
        d(kt, "id", "XMLID_64_"),
        d(kt, "x", "918"),
        d(kt, "y", "954.5"),
        d(kt, "class", "st36"),
        d(kt, "width", "18.2"),
        d(kt, "height", "17.9"),
        d(Lt, "id", "XMLID_63_"),
        d(Lt, "x", "827.2"),
        d(Lt, "y", "954.5"),
        d(Lt, "class", "st37"),
        d(Lt, "width", "18.2"),
        d(Lt, "height", "17.9"),
        d(zt, "id", "XMLID_62_"),
        d(zt, "x", "899.9"),
        d(zt, "y", "954.5"),
        d(zt, "class", "st38"),
        d(zt, "width", "18.2"),
        d(zt, "height", "17.9"),
        d(Ot, "id", "XMLID_61_"),
        d(Ot, "x", "863.5"),
        d(Ot, "y", "954.5"),
        d(Ot, "class", "st39"),
        d(Ot, "width", "18.2"),
        d(Ot, "height", "17.9"),
        d(Ct, "id", "XMLID_60_"),
        d(Ct, "x", "845.4"),
        d(Ct, "y", "954.5"),
        d(Ct, "class", "st27"),
        d(Ct, "width", "18.2"),
        d(Ct, "height", "17.9"),
        d(Xt, "id", "XMLID_59_"),
        d(Xt, "x", "881.7"),
        d(Xt, "y", "954.5"),
        d(Xt, "class", "st40"),
        d(Xt, "width", "18.2"),
        d(Xt, "height", "17.9"),
        d(St, "id", "XMLID_58_"),
        d(St, "x", "845.4"),
        d(St, "y", "936.5"),
        d(St, "class", "st41"),
        d(St, "width", "18.2"),
        d(St, "height", "17.9"),
        d(Vt, "id", "XMLID_57_"),
        d(Vt, "x", "863.5"),
        d(Vt, "y", "936.5"),
        d(Vt, "class", "st16"),
        d(Vt, "width", "18.2"),
        d(Vt, "height", "17.9"),
        d(Pt, "id", "XMLID_56_"),
        d(Pt, "x", "827.2"),
        d(Pt, "y", "936.5"),
        d(Pt, "class", "st42"),
        d(Pt, "width", "18.2"),
        d(Pt, "height", "17.9"),
        d(Rt, "id", "XMLID_55_"),
        d(Rt, "x", "809.1"),
        d(Rt, "y", "936.5"),
        d(Rt, "class", "st43"),
        d(Rt, "width", "18.2"),
        d(Rt, "height", "17.9"),
        d(Bt, "id", "XMLID_54_"),
        d(Bt, "x", "972.5"),
        d(Bt, "y", "954.5"),
        d(Bt, "class", "st44"),
        d(Bt, "width", "18.2"),
        d(Bt, "height", "17.9"),
        d(Nt, "id", "XMLID_53_"),
        d(Nt, "x", "809.1"),
        d(Nt, "y", "954.5"),
        d(Nt, "class", "st45"),
        d(Nt, "width", "18.2"),
        d(Nt, "height", "17.9"),
        d(Ht, "id", "XMLID_76_"),
        d(Ht, "x", "881.7"),
        d(Ht, "y", "936.5"),
        d(Ht, "class", "st46"),
        d(Ht, "width", "18.2"),
        d(Ht, "height", "17.9"),
        d(mt, "id", "XMLID_52_"),
        d(e, "version", "1.1"),
        d(e, "id", "Layer_1"),
        d(e, "xmlns", "http://www.w3.org/2000/svg"),
        d(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        d(e, "x", "0px"),
        d(e, "y", "0px"),
        d(
          e,
          "viewBox",
          (Gt =
            (We * t[0]) / 2 +
            He +
            " " +
            Ge +
            " " +
            (1e3 - We * t[0]) +
            " " +
            (1e3 - We * t[0]))
        ),
        f(e, "enable-background", "new 0 0 1000 1000"),
        d(e, "xml:space", "preserve");
    },
    m(t, o) {
      u(t, e, o),
        b(e, n),
        b(n, s),
        b(e, i),
        b(e, r),
        b(e, l),
        b(e, c),
        b(c, m),
        b(c, g),
        b(e, p),
        b(e, v),
        b(e, $),
        b(e, w),
        b(e, x),
        b(e, E),
        b(e, I),
        b(e, D),
        b(e, T),
        b(e, k),
        b(e, L),
        b(e, z),
        b(e, O),
        b(e, C),
        b(e, X),
        b(e, S),
        b(e, V),
        b(e, P),
        b(e, R),
        b(e, N),
        b(e, H),
        b(e, G),
        b(e, W),
        b(e, A),
        b(e, j),
        b(e, q),
        b(e, F),
        b(e, Y),
        b(e, U),
        b(e, Z),
        b(e, J),
        b(e, K),
        b(e, Q),
        b(e, tt),
        b(e, et),
        b(e, nt),
        b(e, st),
        b(e, it),
        b(e, rt),
        b(e, lt),
        b(e, ct),
        b(e, ot),
        b(e, at),
        b(e, ht),
        b(e, dt),
        b(e, ft),
        b(e, ut),
        b(e, mt),
        b(mt, gt),
        b(mt, pt),
        b(mt, vt),
        b(vt, $t),
        b(vt, wt),
        b(mt, xt),
        b(mt, Et),
        b(mt, yt),
        b(mt, It),
        b(mt, _t),
        b(mt, bt),
        b(mt, Dt),
        b(mt, Tt),
        b(mt, Mt),
        b(mt, kt),
        b(mt, Lt),
        b(mt, zt),
        b(mt, Ot),
        b(mt, Ct),
        b(mt, Xt),
        b(mt, St),
        b(mt, Vt),
        b(mt, Pt),
        b(mt, Rt),
        b(mt, Bt),
        b(mt, Nt),
        b(mt, Ht);
    },
    p(t, [n]) {
      1 & n &&
        Gt !==
          (Gt =
            (We * t[0]) / 2 +
            He +
            " " +
            Ge +
            " " +
            (1e3 - We * t[0]) +
            " " +
            (1e3 - We * t[0])) &&
        d(e, "viewBox", Gt);
    },
    i: M,
    o: M,
    d(t) {
      t && h(e);
    },
  };
}
let He = 0,
  Ge = 0,
  We = 100;
function Ae(t, e, n) {
  let { zoom: s = 3.75 } = e;
  return (
    (t.$$set = (t) => {
      "zoom" in t && n(0, (s = t.zoom));
    }),
    [s]
  );
}
class je extends n {
  constructor(t) {
    super(), s(this, t, Ae, Ne, i, { zoom: 0 });
  }
}
function qe(t) {
  let e, n, s, i, r, l, f, m;
  return (
    (i = new je({ props: { zoom: 4 } })),
    {
      c() {
        (e = c("button")),
          (n = c("div")),
          (s = c("div")),
          C(i.$$.fragment),
          (r = E()),
          (l = c("p")),
          (f = y(t[0])),
          this.h();
      },
      l(c) {
        e = o(c, "BUTTON", { class: !0 });
        var d = a(e);
        n = o(d, "DIV", { class: !0 });
        var u = a(n);
        s = o(u, "DIV", { class: !0 });
        var m = a(s);
        X(i.$$.fragment, m),
          m.forEach(h),
          (r = I(u)),
          (l = o(u, "P", { class: !0 }));
        var g = a(l);
        (f = _(g, t[0])), g.forEach(h), u.forEach(h), d.forEach(h), this.h();
      },
      h() {
        d(s, "class", "profile-icon-container svelte-1jqtkyk"),
          d(l, "class", "profile-name-container svelte-1jqtkyk"),
          d(n, "class", "about-me-button-content svelte-1jqtkyk"),
          d(e, "class", "about-me-button svelte-1jqtkyk");
      },
      m(t, c) {
        u(t, e, c),
          b(e, n),
          b(n, s),
          V(i, s, null),
          b(n, r),
          b(n, l),
          b(l, f),
          (m = !0);
      },
      p(t, [e]) {
        (!m || 1 & e) && T(f, t[0]);
      },
      i(t) {
        m || (v(i.$$.fragment, t), (m = !0));
      },
      o(t) {
        $(i.$$.fragment, t), (m = !1);
      },
      d(t) {
        t && h(e), P(i);
      },
    }
  );
}
function Fe(t, e, n) {
  let { icon: s } = e,
    { name: i } = e;
  return (
    (t.$$set = (t) => {
      "icon" in t && n(1, (s = t.icon)), "name" in t && n(0, (i = t.name));
    }),
    [i, s]
  );
}
class Ye extends n {
  constructor(t) {
    super(), s(this, t, Fe, qe, i, { icon: 1, name: 0 });
  }
}
function Ue(t) {
  let e, n, s, i, r;
  return {
    c() {
      (e = c("button")), (n = c("img")), this.h();
    },
    l(t) {
      e = o(t, "BUTTON", { class: !0 });
      var s = a(e);
      (n = o(s, "IMG", { src: !0, alt: !0, height: !0, width: !0 })),
        s.forEach(h),
        this.h();
    },
    h() {
      n.src !== (s = "/images/desktop/menu/mobile.svg") &&
        d(n, "src", "/images/desktop/menu/mobile.svg"),
        d(n, "alt", "Mobile View"),
        d(n, "height", "75%"),
        d(n, "width", "auto"),
        d(e, "class", "switch-to-mobile-button svelte-gddrhl");
    },
    m(s, l) {
      u(s, e, l), b(e, n), i || ((r = m(e, "click", t[0])), (i = !0));
    },
    p: M,
    i: M,
    o: M,
    d(t) {
      t && h(e), (i = !1), r();
    },
  };
}
function Ze(t) {
  return [
    function (t) {
      it(rt.MOBILE);
    },
  ];
}
class Je extends n {
  constructor(t) {
    super(), s(this, t, Ze, Ue, i, {});
  }
}
class Ke extends n {
  constructor(t) {
    super(), s(this, t, null, null, i, {});
  }
}
function Qe(t) {
  let e,
    n,
    s,
    i,
    r = t[0].description + "";
  return {
    c() {
      (e = c("br")), (n = E()), (s = c("span")), (i = y(r)), this.h();
    },
    l(t) {
      (e = o(t, "BR", {})), (n = I(t)), (s = o(t, "SPAN", { class: !0 }));
      var l = a(s);
      (i = _(l, r)), l.forEach(h), this.h();
    },
    h() {
      d(s, "class", "description svelte-4eqffs");
    },
    m(t, r) {
      u(t, e, r), u(t, n, r), u(t, s, r), b(s, i);
    },
    p(t, e) {
      1 & e && r !== (r = t[0].description + "") && T(i, r);
    },
    d(t) {
      t && h(e), t && h(n), t && h(s);
    },
  };
}
function tn(t) {
  let e,
    n,
    s,
    i,
    r,
    l,
    f,
    g,
    p,
    v,
    $,
    x,
    D = t[0].name + "",
    k = t[0].description && Qe(t);
  return {
    c() {
      (e = c("button")),
        (n = c("div")),
        (s = c("img")),
        (l = E()),
        (f = c("div")),
        (g = c("span")),
        (p = y(D)),
        (v = E()),
        k && k.c(),
        this.h();
    },
    l(t) {
      e = o(t, "BUTTON", { class: !0, draggable: !0 });
      var i = a(e);
      n = o(i, "DIV", { class: !0 });
      var r = a(n);
      (s = o(r, "IMG", { src: !0, alt: !0, class: !0 })),
        (l = I(r)),
        (f = o(r, "DIV", { class: !0 }));
      var c = a(f);
      g = o(c, "SPAN", { class: !0 });
      var d = a(g);
      (p = _(d, D)),
        d.forEach(h),
        (v = I(c)),
        k && k.l(c),
        c.forEach(h),
        r.forEach(h),
        i.forEach(h),
        this.h();
    },
    h() {
      s.src !== (i = t[0].icon) && d(s, "src", i),
        d(s, "alt", (r = t[0].name)),
        d(s, "class", "svelte-4eqffs"),
        d(g, "class", "name"),
        d(f, "class", "name-and-description svelte-4eqffs"),
        d(n, "class", "menu-launcher-button-content svelte-4eqffs"),
        d(e, "class", "menu-launcher-button svelte-4eqffs"),
        d(e, "draggable", !0),
        S(e, "activated", t[1]);
    },
    m(i, r) {
      u(i, e, r),
        b(e, n),
        b(n, s),
        b(n, l),
        b(n, f),
        b(f, g),
        b(g, p),
        b(f, v),
        k && k.m(f, null),
        $ ||
          ((x = [
            m(e, "click", t[3]),
            m(e, "contextmenu", t[2]),
            m(e, "dragstart", t[4]),
          ]),
          ($ = !0));
    },
    p(t, [n]) {
      1 & n && s.src !== (i = t[0].icon) && d(s, "src", i),
        1 & n && r !== (r = t[0].name) && d(s, "alt", r),
        1 & n && D !== (D = t[0].name + "") && T(p, D),
        t[0].description
          ? k
            ? k.p(t, n)
            : ((k = Qe(t)), k.c(), k.m(f, null))
          : k && (k.d(1), (k = null)),
        2 & n && S(e, "activated", t[1]);
    },
    i: M,
    o: M,
    d(t) {
      t && h(e), k && k.d(), ($ = !1), w(x);
    },
  };
}
function en(t, e, n) {
  let { program: s } = e,
    { activated: i = !1 } = e;
  return (
    (t.$$set = (t) => {
      "program" in t && n(0, (s = t.program)),
        "activated" in t && n(1, (i = t.activated));
    }),
    [
      s,
      i,
      function (t) {
        t.preventDefault(),
          at(t.clientX, t.clientY, [
            {
              name: "Launch",
              icon: s.icon,
              onClick: () => {
                ht(), s.createProcess().bringToTop(), Ht();
              },
            },
            {
              name: Oe(s) ? "Unpin from taskbar" : "Pin to taskbar",
              icon: Oe(s)
                ? "/images/desktop/unpin.svg"
                : "/images/desktop/pin.svg",
              onClick: () => {
                ht(), Oe(s) ? ze(s) : Le(s);
              },
            },
          ]);
      },
      function () {
        s.createProcess().bringToTop(), Ht();
      },
      function (t) {
        t.dataTransfer.setData("program_id", s.id.toString());
      },
    ]
  );
}
class nn extends n {
  constructor(t) {
    super(), s(this, t, en, tn, i, { program: 0, activated: 1 });
  }
}
function sn(t) {
  let e, n, s, i, r, l, f, g, p;
  return {
    c() {
      (e = c("button")),
        (n = c("div")),
        (s = c("img")),
        (r = E()),
        (l = c("span")),
        (f = y(t[0])),
        this.h();
    },
    l(i) {
      e = o(i, "BUTTON", { class: !0 });
      var c = a(e);
      n = o(c, "DIV", { class: !0 });
      var d = a(n);
      (s = o(d, "IMG", { src: !0, alt: !0, class: !0 })),
        (r = I(d)),
        (l = o(d, "SPAN", { class: !0 }));
      var u = a(l);
      (f = _(u, t[0])), u.forEach(h), d.forEach(h), c.forEach(h), this.h();
    },
    h() {
      s.src !== (i = t[1]) && d(s, "src", i),
        d(s, "alt", t[0]),
        d(s, "class", "svelte-tpautj"),
        d(l, "class", "name"),
        d(n, "class", "menu-launcher-button-content svelte-tpautj"),
        d(e, "class", "menu-launcher-button svelte-tpautj"),
        S(e, "activated", t[2]);
    },
    m(i, c) {
      u(i, e, c),
        b(e, n),
        b(n, s),
        b(n, r),
        b(n, l),
        b(l, f),
        t[5](e),
        g || ((p = m(e, "click", t[4])), (g = !0));
    },
    p(t, [n]) {
      2 & n && s.src !== (i = t[1]) && d(s, "src", i),
        1 & n && d(s, "alt", t[0]),
        1 & n && T(f, t[0]),
        4 & n && S(e, "activated", t[2]);
    },
    i: M,
    o: M,
    d(n) {
      n && h(e), t[5](null), (g = !1), p();
    },
  };
}
function rn(t, e, n) {
  let s,
    { name: i } = e,
    { icon: r } = e,
    { activated: l = !1 } = e;
  return (
    N(() => {
      n(3, (s.ondragstart = () => !1), s);
    }),
    (t.$$set = (t) => {
      "name" in t && n(0, (i = t.name)),
        "icon" in t && n(1, (r = t.icon)),
        "activated" in t && n(2, (l = t.activated));
    }),
    [
      i,
      r,
      l,
      s,
      function (e) {
        G.call(this, t, e);
      },
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (s = t), n(3, s);
        });
      },
    ]
  );
}
class ln extends n {
  constructor(t) {
    super(), s(this, t, rn, sn, i, { name: 0, icon: 1, activated: 2 });
  }
}
function cn(t, e, n) {
  const s = t.slice();
  return (s[8] = e[n].category), (s[9] = e[n].activated), s;
}
function on(t, e, n) {
  const s = t.slice();
  return (s[12] = e[n]), s;
}
function an(t, e, n) {
  const s = t.slice();
  return (s[8] = e[n].category), (s[9] = e[n].activated), s;
}
function hn(t) {
  let e, n;
  return (
    (e = new ln({
      props: { icon: t[8].icon, name: t[8].name, activated: t[9] },
    })),
    e.$on("click", function (...e) {
      return t[6](t[8], ...e);
    }),
    {
      c() {
        C(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      p(n, s) {
        t = n;
        const i = {};
        1 & s && (i.icon = t[8].icon),
          1 & s && (i.name = t[8].name),
          1 & s && (i.activated = t[9]),
          e.$set(i);
      },
      i(t) {
        n || (v(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        P(e, t);
      },
    }
  );
}
function dn(t) {
  let e,
    n,
    s = [],
    i = new Map(),
    r = t[1].sort(pn);
  const l = (t) => t[12].id;
  for (let c = 0; c < r.length; c += 1) {
    let e = on(t, r, c),
      n = l(e);
    i.set(n, (s[c] = un(n, e)));
  }
  return {
    c() {
      for (let t = 0; t < s.length; t += 1) s[t].c();
      e = k();
    },
    l(t) {
      for (let e = 0; e < s.length; e += 1) s[e].l(t);
      e = k();
    },
    m(t, i) {
      for (let e = 0; e < s.length; e += 1) s[e].m(t, i);
      u(t, e, i), (n = !0);
    },
    p(t, n) {
      3 & n &&
        ((r = t[1].sort(pn)),
        L(),
        (s = W(s, n, l, 1, t, r, i, e.parentNode, A, un, e, on)),
        z());
    },
    i(t) {
      if (!n) {
        for (let t = 0; t < r.length; t += 1) v(s[t]);
        n = !0;
      }
    },
    o(t) {
      for (let e = 0; e < s.length; e += 1) $(s[e]);
      n = !1;
    },
    d(t) {
      for (let e = 0; e < s.length; e += 1) s[e].d(t);
      t && h(e);
    },
  };
}
function fn(t) {
  let e, n, s, i, l, d;
  return (
    (n = new nn({ props: { program: t[12] } })),
    {
      c() {
        (e = c("div")), C(n.$$.fragment), (s = E());
      },
      l(t) {
        e = o(t, "DIV", {});
        var i = a(e);
        X(n.$$.fragment, i), (s = I(i)), i.forEach(h);
      },
      m(t, i) {
        u(t, e, i), V(n, e, null), b(e, s), (d = !0);
      },
      p(t, e) {
        const s = {};
        2 & e && (s.program = t[12]), n.$set(s);
      },
      i(t) {
        d ||
          (v(n.$$.fragment, t),
          r(() => {
            l && l.end(1), i || (i = j(e, q, { duration: 500 })), i.start();
          }),
          (d = !0));
      },
      o(t) {
        $(n.$$.fragment, t),
          i && i.invalidate(),
          (l = F(e, q, { duration: 250 })),
          (d = !1);
      },
      d(t) {
        t && h(e), P(n), t && l && l.end();
      },
    }
  );
}
function un(t, e) {
  let n,
    s,
    i,
    r = e[12].categories.find(l) || e[8].id === ne.id;
  function l(...t) {
    return e[4](e[8], ...t);
  }
  let c = r && fn(e);
  return {
    key: t,
    first: null,
    c() {
      (n = k()), c && c.c(), (s = k()), this.h();
    },
    l(t) {
      (n = k()), c && c.l(t), (s = k()), this.h();
    },
    h() {
      this.first = n;
    },
    m(t, e) {
      u(t, n, e), c && c.m(t, e), u(t, s, e), (i = !0);
    },
    p(t, n) {
      (e = t),
        3 & n && (r = e[12].categories.find(l) || e[8].id === ne.id),
        r
          ? c
            ? (c.p(e, n), 3 & n && v(c, 1))
            : ((c = fn(e)), c.c(), v(c, 1), c.m(s.parentNode, s))
          : c &&
            (L(),
            $(c, 1, 1, () => {
              c = null;
            }),
            z());
    },
    i(t) {
      i || (v(c), (i = !0));
    },
    o(t) {
      $(c), (i = !1);
    },
    d(t) {
      t && h(n), c && c.d(t), t && h(s);
    },
  };
}
function mn(t) {
  let e,
    n,
    s = t[9] && dn(t);
  return {
    c() {
      s && s.c(), (e = k());
    },
    l(t) {
      s && s.l(t), (e = k());
    },
    m(t, i) {
      s && s.m(t, i), u(t, e, i), (n = !0);
    },
    p(t, n) {
      t[9]
        ? s
          ? (s.p(t, n), 1 & n && v(s, 1))
          : ((s = dn(t)), s.c(), v(s, 1), s.m(e.parentNode, e))
        : s &&
          (L(),
          $(s, 1, 1, () => {
            s = null;
          }),
          z());
    },
    i(t) {
      n || (v(s), (n = !0));
    },
    o(t) {
      $(s), (n = !1);
    },
    d(t) {
      s && s.d(t), t && h(e);
    },
  };
}
function gn(t) {
  let e,
    n,
    s,
    i,
    r,
    l = t[2](t[0], [t[5]]),
    f = [];
  for (let c = 0; c < l.length; c += 1) f[c] = hn(an(t, l, c));
  const m = (t) =>
    $(f[t], 1, 1, () => {
      f[t] = null;
    });
  let g = t[0],
    p = [];
  for (let c = 0; c < g.length; c += 1) p[c] = mn(cn(t, g, c));
  const w = (t) =>
    $(p[t], 1, 1, () => {
      p[t] = null;
    });
  return {
    c() {
      (e = c("div")), (n = c("div"));
      for (let t = 0; t < f.length; t += 1) f[t].c();
      (s = E()), (i = c("div"));
      for (let t = 0; t < p.length; t += 1) p[t].c();
      this.h();
    },
    l(t) {
      e = o(t, "DIV", { class: !0 });
      var r = a(e);
      n = o(r, "DIV", { class: !0 });
      var l = a(n);
      for (let e = 0; e < f.length; e += 1) f[e].l(l);
      l.forEach(h), (s = I(r)), (i = o(r, "DIV", { class: !0 }));
      var c = a(i);
      for (let e = 0; e < p.length; e += 1) p[e].l(c);
      c.forEach(h), r.forEach(h), this.h();
    },
    h() {
      d(n, "class", "category-buttons-container svelte-10i39sf"),
        d(i, "class", "category-content-container svelte-10i39sf"),
        d(e, "class", "categories-container svelte-10i39sf");
    },
    m(t, l) {
      u(t, e, l), b(e, n);
      for (let e = 0; e < f.length; e += 1) f[e].m(n, null);
      b(e, s), b(e, i);
      for (let e = 0; e < p.length; e += 1) p[e].m(i, null);
      r = !0;
    },
    p(t, [e]) {
      if (13 & e) {
        let s;
        for (l = t[2](t[0], [t[5]]), s = 0; s < l.length; s += 1) {
          const i = an(t, l, s);
          f[s]
            ? (f[s].p(i, e), v(f[s], 1))
            : ((f[s] = hn(i)), f[s].c(), v(f[s], 1), f[s].m(n, null));
        }
        for (L(), s = l.length; s < f.length; s += 1) m(s);
        z();
      }
      if (3 & e) {
        let n;
        for (g = t[0], n = 0; n < g.length; n += 1) {
          const s = cn(t, g, n);
          p[n]
            ? (p[n].p(s, e), v(p[n], 1))
            : ((p[n] = mn(s)), p[n].c(), v(p[n], 1), p[n].m(i, null));
        }
        for (L(), n = g.length; n < p.length; n += 1) w(n);
        z();
      }
    },
    i(t) {
      if (!r) {
        for (let t = 0; t < l.length; t += 1) v(f[t]);
        for (let t = 0; t < g.length; t += 1) v(p[t]);
        r = !0;
      }
    },
    o(t) {
      f = f.filter(Boolean);
      for (let e = 0; e < f.length; e += 1) $(f[e]);
      p = p.filter(Boolean);
      for (let e = 0; e < p.length; e += 1) $(p[e]);
      r = !1;
    },
    d(t) {
      t && h(e), H(f, t), H(p, t);
    },
  };
}
const pn = (t, e) => t.name.localeCompare(e.name);
function vn(t, e, n) {
  let s;
  O(t, pe, (t) => n(1, (s = t)));
  const { sortBy: i } = R;
  class r {
    constructor(t, e) {
      (this.category = t), (this.activated = e);
    }
  }
  let l = [];
  function c(t, e) {
    l.forEach((t) => (t.activated = t.category.id === e && !t.activated)),
      n(0, l);
  }
  ie.subscribe((t) => {
    let e = l.flatMap((t) => t.category);
    t
      .filter((t) => -1 === e.indexOf(t))
      .forEach((t) => {
        l.push(new r(t, !1));
      }),
      n(0, (l = l.filter((e) => t.find((t) => t.id === e.category.id))));
  });
  return [
    l,
    s,
    i,
    c,
    (t, e) => e.id === t.id,
    (t) =>
      t.category.id === ne.id || t.category.id === se.id || t.category.name,
    (t, e) => c(0, t.id),
  ];
}
class $n extends n {
  constructor(t) {
    super(), s(this, t, vn, gn, i, {});
  }
}
function wn(t) {
  let e, n, s, i, l, g, p, w, x, y, _, D, T, M, k, L;
  return (
    (i = new Ye({
      props: {
        icon: "/images/about/pfp-round.png",
        name: "Jitze Jan Kerkstra",
      },
    })),
    (p = new be({
      props: {
        tooltip: "Toggle Mobile View",
        position: "bottom",
        width: "4.5rem",
        $$slots: { default: [xn] },
        $$scope: { ctx: t },
      },
    })),
    (_ = new $n({})),
    {
      c() {
        (e = c("div")),
          (n = c("div")),
          (s = c("div")),
          C(i.$$.fragment),
          (l = E()),
          (g = c("div")),
          C(p.$$.fragment),
          (w = E()),
          (x = c("div")),
          (y = E()),
          C(_.$$.fragment),
          this.h();
      },
      l(t) {
        e = o(t, "DIV", { class: !0, style: !0 });
        var r = a(e);
        n = o(r, "DIV", { class: !0 });
        var c = a(n);
        s = o(c, "DIV", { class: !0 });
        var d = a(s);
        X(i.$$.fragment, d),
          d.forEach(h),
          (l = I(c)),
          (g = o(c, "DIV", { class: !0 }));
        var f = a(g);
        X(p.$$.fragment, f),
          (w = I(f)),
          (x = o(f, "DIV", { style: !0 })),
          a(x).forEach(h),
          f.forEach(h),
          c.forEach(h),
          (y = I(r)),
          X(_.$$.fragment, r),
          r.forEach(h),
          this.h();
      },
      h() {
        d(s, "class", "about-me-button-container svelte-ghpqha"),
          f(x, "padding-left", "0.75rem"),
          d(g, "class", "system-buttons-container svelte-ghpqha"),
          d(n, "class", "menu-container-top svelte-ghpqha"),
          d(e, "class", "menu-container svelte-ghpqha"),
          f(e, "bottom", t[0] + "rem"),
          f(e, "--offset", t[0] + "rem");
      },
      m(t, r) {
        u(t, e, r),
          b(e, n),
          b(n, s),
          V(i, s, null),
          b(n, l),
          b(n, g),
          V(p, g, null),
          b(g, w),
          b(g, x),
          b(e, y),
          V(_, e, null),
          (M = !0),
          k || ((L = m(e, "dragover", yn)), (k = !0));
      },
      p(t, n) {
        const s = {};
        4 & n && (s.$$scope = { dirty: n, ctx: t }),
          p.$set(s),
          (!M || 1 & n) && f(e, "bottom", t[0] + "rem"),
          (!M || 1 & n) && f(e, "--offset", t[0] + "rem");
      },
      i(t) {
        M ||
          (v(i.$$.fragment, t),
          v(p.$$.fragment, t),
          v(_.$$.fragment, t),
          r(() => {
            T && T.end(1), D || (D = j(e, q, { duration: 500 })), D.start();
          }),
          (M = !0));
      },
      o(t) {
        $(i.$$.fragment, t),
          $(p.$$.fragment, t),
          $(_.$$.fragment, t),
          D && D.invalidate(),
          (T = F(e, q, { duration: 500 })),
          (M = !1);
      },
      d(t) {
        t && h(e), P(i), P(p), P(_), t && T && T.end(), (k = !1), L();
      },
    }
  );
}
function xn(t) {
  let e, n;
  return (
    (e = new Je({})),
    {
      c() {
        C(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      i(t) {
        n || (v(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        P(e, t);
      },
    }
  );
}
function En(t) {
  let e,
    n,
    s = t[1] && wn(t);
  return {
    c() {
      s && s.c(), (e = k());
    },
    l(t) {
      s && s.l(t), (e = k());
    },
    m(t, i) {
      s && s.m(t, i), u(t, e, i), (n = !0);
    },
    p(t, [n]) {
      t[1]
        ? s
          ? (s.p(t, n), 2 & n && v(s, 1))
          : ((s = wn(t)), s.c(), v(s, 1), s.m(e.parentNode, e))
        : s &&
          (L(),
          $(s, 1, 1, () => {
            s = null;
          }),
          z());
    },
    i(t) {
      n || (v(s), (n = !0));
    },
    o(t) {
      $(s), (n = !1);
    },
    d(t) {
      s && s.d(t), t && h(e);
    },
  };
}
function yn(t) {
  t.preventDefault(), (t.dataTransfer.dropEffect = "none");
}
function In(t, e, n) {
  let s;
  O(t, Nt, (t) => n(1, (s = t)));
  let { offset: i = 0 } = e;
  return (
    (t.$$set = (t) => {
      "offset" in t && n(0, (i = t.offset));
    }),
    [i, s]
  );
}
class _n extends n {
  constructor(t) {
    super(), s(this, t, In, En, i, { offset: 0 });
  }
}
var bn, Dn;
function Tn(t) {
  let e, n, s;
  return {
    c() {
      (e = B("svg")), (n = B("g")), (s = B("path")), this.h();
    },
    l(t) {
      e = o(
        t,
        "svg",
        { xmlns: !0, "xmlns:xlink": !0, viewBox: !0, version: !0, class: !0 },
        1
      );
      var i = a(e);
      n = o(i, "g", { id: !0 }, 1);
      var r = a(n);
      (s = o(r, "path", { style: !0, d: !0 }, 1)),
        a(s).forEach(h),
        r.forEach(h),
        i.forEach(h),
        this.h();
    },
    h() {
      f(s, "stroke", "none"),
        f(s, "fill-rule", "evenodd"),
        f(s, "fill", t[0]),
        f(s, "fill-opacity", "1"),
        d(
          s,
          "d",
          "M 47.113281 2.878906 C 44.402344 3.292969 43.078125 20.101562 44.292969 22.375 C 46.363281 21.015625 49.464844 14.535156 50.425781 12.332031 C 49.675781 14.378906 48.730469 24.097656 49.117188 24.214844 C 49.9375 25.304688 61.0625 6.96875 57.828125 5.65625 C 57.367188 5.46875 54.242188 11.203125 51.640625 17.054688 C 51.667969 14.554688 53.691406 6.992188 52.867188 4.699219 C 51.21875 4.210938 48.085938 11.386719 46.804688 14.75 C 46.402344 13.042969 48.566406 3.710938 47.117188 2.878906 Z M 22.515625 8.480469 C 16.867188 8.480469 16.867188 14.132812 19.6875 22.605469 C 21.101562 26.84375 18.277344 25.433594 17.296875 23.269531 C 12.628906 11.308594 8.390625 12.71875 5.5625 14.132812 C 2.738281 16.957031 7.027344 25.730469 7.035156 27.417969 C 2.292969 35.558594 1.328125 45.207031 5.5625 52.273438 C 16.867188 67.8125 32.402344 62.160156 56.96875 44.996094 C 63.226562 39.820312 60.652344 35.320312 55.292969 32.390625 C 42.332031 23.914062 28.164062 25.433594 28.164062 24.019531 C 28.164062 15.546875 29.140625 8.621094 22.515625 8.480469 Z M 36.640625 35.285156 C 36.183594 37.78125 31.179688 43.347656 29.625 44.960938 C 30.792969 43.648438 39.941406 38.703125 40.203125 39.027344 C 41.535156 39.359375 29.339844 55.183594 26.878906 52.707031 C 26.527344 52.351562 29.582031 47.960938 34.578125 44.113281 C 32.285156 45.113281 25.617188 48.761719 23.183594 48.890625 C 22.09375 47.558594 29.089844 43.113281 30.585938 40.558594 C 28.855469 40.851562 19.730469 45.136719 18.410156 44.125 C 17.738281 41.460938 33.742188 36.800781 36.644531 35.285156 Z M 36.640625 35.285156 "
        ),
        d(n, "id", "surface1"),
        d(e, "xmlns", "http://www.w3.org/2000/svg"),
        d(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        d(e, "viewBox", "0 0 64 64"),
        d(e, "version", "1.1"),
        d(e, "class", "svelte-1n6futd");
    },
    m(t, i) {
      u(t, e, i), b(e, n), b(n, s);
    },
    p(t, [e]) {
      1 & e && f(s, "fill", t[0]);
    },
    i: M,
    o: M,
    d(t) {
      t && h(e);
    },
  };
}
function Mn(t, e, n) {
  let { fill: s = "" } = e;
  return (
    (t.$$set = (t) => {
      "fill" in t && n(0, (s = t.fill));
    }),
    [s]
  );
}
class kn extends n {
  constructor(t) {
    super(), s(this, t, Mn, Tn, i, { fill: 0 });
  }
}
function Ln(t) {
  document.body.style.cursor = t;
}
((Dn = bn || (bn = {})).ALIAS = "alias"),
  (Dn.ALL_SCROLL = "all-scroll"),
  (Dn.AUTO = "auto"),
  (Dn.CELL = "cell"),
  (Dn.CONTEXT_MENU = "context-menu"),
  (Dn.COL_RESIZE = "col-resize"),
  (Dn.COPY = "copy"),
  (Dn.CROSSHAIR = "crosshair"),
  (Dn.DEFAULT = "default"),
  (Dn.E_RESIZE = "e-resize"),
  (Dn.EW_RESIZE = "ew-resize"),
  (Dn.GRAB = "grab"),
  (Dn.GRABBING = "grabbing"),
  (Dn.HELP = "help"),
  (Dn.MOVE = "move"),
  (Dn.N_RESIZE = "n-resize"),
  (Dn.NE_RESIZE = "ne-resize"),
  (Dn.NESW_RESIZE = "nesw-resize"),
  (Dn.NS_RESIZE = "ns-resize"),
  (Dn.NW_RESIZE = "nw-resize"),
  (Dn.NWSE_RESIZE = "nwse-resize"),
  (Dn.NO_DROP = "no-drop"),
  (Dn.NONE = "none"),
  (Dn.NOT_ALLOWED = "not-allowed"),
  (Dn.POINTER = "pointer"),
  (Dn.PROGRESS = "progress"),
  (Dn.ROW_RESIZE = "row-resize"),
  (Dn.S_RESIZE = "s-resize"),
  (Dn.SE_RESIZE = "se-resize"),
  (Dn.SW_RESIZE = "sw-resize"),
  (Dn.TEXT = "text"),
  (Dn.URL = "url"),
  (Dn.W_RESIZE = "w-resize"),
  (Dn.WAIT = "wait"),
  (Dn.ZOOM_IN = "zoom-in"),
  (Dn.ZOOM_OUT = "zoom-out"),
  (Dn.INITIAL = "initial");
function zn(t, e, n) {
  const s = t.slice();
  return (s[20] = e[n].program), (s[21] = e[n].row), (s[22] = e[n].ghost), s;
}
function On(t) {
  let e, n;
  return (
    (e = new kn({})),
    {
      c() {
        C(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      i(t) {
        n || (v(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        P(e, t);
      },
    }
  );
}
function Cn(t) {
  let e, n;
  return (
    (e = new Ve({
      props: { program: t[20], row: t[21], height: `${t[1]}rem` },
    })),
    {
      c() {
        C(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      p(t, n) {
        const s = {};
        8 & n && (s.program = t[20]),
          8 & n && (s.row = t[21]),
          2 & n && (s.height = `${t[1]}rem`),
          e.$set(s);
      },
      i(t) {
        n || (v(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        P(e, t);
      },
    }
  );
}
function Xn(t) {
  let e, n, s;
  return {
    c() {
      (e = c("div")), (n = c("div")), (s = E()), this.h();
    },
    l(t) {
      e = o(t, "DIV", { style: !0 });
      var i = a(e);
      (n = o(i, "DIV", { style: !0 })),
        a(n).forEach(h),
        (s = I(i)),
        i.forEach(h),
        this.h();
    },
    h() {
      f(n, "padding-top", "100%"),
        f(e, "grid-row", t[21]),
        f(e, "height", t[1] + "rem");
    },
    m(t, i) {
      u(t, e, i), b(e, n), b(e, s);
    },
    p(t, n) {
      8 & n && f(e, "grid-row", t[21]), 2 & n && f(e, "height", t[1] + "rem");
    },
    i: M,
    o: M,
    d(t) {
      t && h(e);
    },
  };
}
function Sn(t) {
  let e, n, s, i;
  const r = [Xn, Cn],
    l = [];
  function c(t, e) {
    return t[22] || !t[20] ? 0 : 1;
  }
  return (
    (e = c(t)),
    (n = l[e] = r[e](t)),
    {
      c() {
        n.c(), (s = k());
      },
      l(t) {
        n.l(t), (s = k());
      },
      m(t, n) {
        l[e].m(t, n), u(t, s, n), (i = !0);
      },
      p(t, i) {
        let o = e;
        (e = c(t)),
          e === o
            ? l[e].p(t, i)
            : (L(),
              $(l[o], 1, 1, () => {
                l[o] = null;
              }),
              z(),
              (n = l[e]),
              n ? n.p(t, i) : ((n = l[e] = r[e](t)), n.c()),
              v(n, 1),
              n.m(s.parentNode, s));
      },
      i(t) {
        i || (v(n), (i = !0));
      },
      o(t) {
        $(n), (i = !1);
      },
      d(t) {
        l[e].d(t), t && h(s);
      },
    }
  );
}
function Vn(t) {
  let e, n, s, i, r, l, g, p, x, y, _, D, T, M;
  (n = new _n({ props: { offset: t[0] } })),
    (p = new Be({
      props: { $$slots: { default: [On] }, $$scope: { ctx: t } },
    }));
  let k = t[3],
    O = [];
  for (let c = 0; c < k.length; c += 1) O[c] = Sn(zn(t, k, c));
  const S = (t) =>
    $(O[t], 1, 1, () => {
      O[t] = null;
    });
  return {
    c() {
      (e = c("div")),
        C(n.$$.fragment),
        (s = E()),
        (i = c("div")),
        (r = E()),
        (l = c("div")),
        (g = c("div")),
        C(p.$$.fragment),
        (x = E()),
        (y = c("div")),
        (_ = c("div"));
      for (let t = 0; t < O.length; t += 1) O[t].c();
      this.h();
    },
    l(t) {
      e = o(t, "DIV", { class: !0, style: !0 });
      var c = a(e);
      X(n.$$.fragment, c),
        (s = I(c)),
        (i = o(c, "DIV", { class: !0 })),
        a(i).forEach(h),
        (r = I(c)),
        (l = o(c, "DIV", { class: !0, style: !0 }));
      var d = a(l);
      g = o(d, "DIV", { class: !0 });
      var f = a(g);
      X(p.$$.fragment, f),
        f.forEach(h),
        (x = I(d)),
        (y = o(d, "DIV", { class: !0 }));
      var u = a(y);
      _ = o(u, "DIV", { class: !0, style: !0 });
      var m = a(_);
      for (let e = 0; e < O.length; e += 1) O[e].l(m);
      m.forEach(h), u.forEach(h), d.forEach(h), c.forEach(h), this.h();
    },
    h() {
      d(i, "class", "border svelte-7czkjz"),
        d(g, "class", "menu-button-container svelte-7czkjz"),
        d(_, "class", "launchers svelte-7czkjz"),
        f(_, "grid-template-columns", t[5]),
        d(y, "class", "launcher-container"),
        d(l, "class", "taskbar-content svelte-7czkjz"),
        f(l, "height", t[0] + "rem"),
        d(e, "class", "taskbar svelte-7czkjz"),
        f(e, "height", t[0] + "rem"),
        f(e, "z-index", t[2]);
    },
    m(c, o) {
      u(c, e, o),
        V(n, e, null),
        b(e, s),
        b(e, i),
        b(e, r),
        b(e, l),
        b(l, g),
        V(p, g, null),
        b(l, x),
        b(l, y),
        b(y, _);
      for (let t = 0; t < O.length; t += 1) O[t].m(_, null);
      t[13](l),
        (D = !0),
        T ||
          ((M = [
            m(window, "mouseup", t[6]),
            m(window, "mousemove", t[7]),
            m(i, "mousedown", t[8]),
            m(l, "drop", t[9]),
            m(l, "dragover", t[10]),
          ]),
          (T = !0));
    },
    p(t, [s]) {
      const i = {};
      1 & s && (i.offset = t[0]), n.$set(i);
      const r = {};
      if (
        (33554432 & s && (r.$$scope = { dirty: s, ctx: t }), p.$set(r), 10 & s)
      ) {
        let e;
        for (k = t[3], e = 0; e < k.length; e += 1) {
          const n = zn(t, k, e);
          O[e]
            ? (O[e].p(n, s), v(O[e], 1))
            : ((O[e] = Sn(n)), O[e].c(), v(O[e], 1), O[e].m(_, null));
        }
        for (L(), e = k.length; e < O.length; e += 1) S(e);
        z();
      }
      (!D || 32 & s) && f(_, "grid-template-columns", t[5]),
        (!D || 1 & s) && f(l, "height", t[0] + "rem"),
        (!D || 1 & s) && f(e, "height", t[0] + "rem"),
        (!D || 4 & s) && f(e, "z-index", t[2]);
    },
    i(t) {
      if (!D) {
        v(n.$$.fragment, t), v(p.$$.fragment, t);
        for (let t = 0; t < k.length; t += 1) v(O[t]);
        D = !0;
      }
    },
    o(t) {
      $(n.$$.fragment, t), $(p.$$.fragment, t), (O = O.filter(Boolean));
      for (let e = 0; e < O.length; e += 1) $(O[e]);
      D = !1;
    },
    d(s) {
      s && h(e), P(n), P(p), H(O, s), t[13](null), (T = !1), w(M);
    },
  };
}
function Pn(t, e, n) {
  let s,
    { rows: i = 1 } = e,
    { maxRows: r = 3 } = e,
    { height: l = 3.5 } = e,
    { rowHeight: c = 3.5 } = e,
    { z_index: o = 9 } = e,
    a = 0,
    h = 0,
    d = !1,
    f = 0,
    u = [];
  const m = `${c}rem`;
  let g = `repeat(${u.length}, ${m})`;
  return (
    N(() => {
      (f = It(l)), n(4, (s.ondragstart = () => !1), s);
    }),
    ke.subscribe((t) => {
      n(3, (u = [])),
        t.programShortcuts.forEach((t) =>
          u.push({ program: t.program, row: 1, ghost: !1 })
        ),
        n(11, i),
        n(0, l),
        n(1, c),
        n(12, r),
        n(3, u);
    }),
    (t.$$set = (t) => {
      "rows" in t && n(11, (i = t.rows)),
        "maxRows" in t && n(12, (r = t.maxRows)),
        "height" in t && n(0, (l = t.height)),
        "rowHeight" in t && n(1, (c = t.rowHeight)),
        "z_index" in t && n(2, (o = t.z_index));
    }),
    (t.$$.update = () => {
      if (
        (3 & t.$$.dirty && (l < c && n(0, (l = c)), n(11, (i = l / c))),
        6155 & t.$$.dirty)
      ) {
        if (
          (l / c != i && n(0, (l = i * c)),
          i > r && (n(11, (i = r)), n(0, (l = i * c))),
          n(3, (u = u.filter((t) => !t.ghost))),
          i > u.length)
        )
          for (let e = 0; e < i - u.length; e++)
            u.push({ program: null, row: 1, ghost: !0 });
        let t = 1;
        u.forEach((e) => {
          t > i && (t = 1), (e.row = t++);
        }),
          n(3, u),
          n(11, i),
          n(0, l),
          n(1, c),
          n(12, r);
      }
      8 & t.$$.dirty && n(5, (g = `repeat(${u.length}, ${m})`));
    }),
    [
      l,
      c,
      o,
      u,
      s,
      g,
      function () {
        (d = !1), (a = 0), (h = 0), (f = It(l)), Ln(bn.AUTO);
      },
      function (t) {
        if (!d) return;
        const e = a - t.pageY;
        (f = h + e),
          f > It(l + c)
            ? n(0, (l += l + c <= c * r ? c : 0))
            : f < It(l - c) && n(0, (l -= l - c >= c ? c : 0));
      },
      function (t) {
        (d = !0), (a = t.pageY), (h = f), Ln(bn.N_RESIZE);
      },
      function (t) {
        if (!Rt(t.dataTransfer.getData("program_id").trim())) return;
        let e = Number(t.dataTransfer.getData("program_id"));
        isNaN(e) || Le(ve(e));
      },
      function (t) {
        Rt(t.dataTransfer.getData("program_id").trim()) &&
          (t.preventDefault(), (t.dataTransfer.dropEffect = "move"));
      },
      i,
      r,
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (s = t), n(4, s);
        });
      },
    ]
  );
}
class Rn extends n {
  constructor(t) {
    super(),
      s(this, t, Pn, Vn, i, {
        rows: 11,
        maxRows: 12,
        height: 0,
        rowHeight: 1,
        z_index: 2,
      });
  }
}
function Bn(t) {
  let e, n;
  return {
    c() {
      (e = c("img")), this.h();
    },
    l(t) {
      (e = o(t, "IMG", {
        src: !0,
        alt: !0,
        unselectable: !0,
        draggable: !0,
        class: !0,
      })),
        this.h();
    },
    h() {
      e.src !== (n = t[0]) && d(e, "src", n),
        d(e, "alt", "wallpaper"),
        d(e, "unselectable", !0),
        d(e, "draggable", !1),
        d(e, "class", "svelte-tp1afi");
    },
    m(t, n) {
      u(t, e, n);
    },
    p(t, [s]) {
      1 & s && e.src !== (n = t[0]) && d(e, "src", n);
    },
    i: M,
    o: M,
    d(t) {
      t && h(e);
    },
  };
}
function Nn(t, e, n) {
  let {
    src: s = "/static/images/wallpapers/custom-design-01-1280x720.png",
  } = e;
  return (
    (t.$$set = (t) => {
      "src" in t && n(0, (s = t.src));
    }),
    [s]
  );
}
class Hn extends n {
  constructor(t) {
    super(), s(this, t, Nn, Bn, i, { src: 0 });
  }
}
function Gn(t) {
  let e, n, s, i, r;
  return {
    c() {
      (e = c("button")), (n = B("svg")), (s = B("path")), this.h();
    },
    l(t) {
      e = o(t, "BUTTON", { class: !0, style: !0 });
      var i = a(e);
      n = o(
        i,
        "svg",
        { height: !0, viewBox: !0, width: !0, xmlns: !0, fill: !0, class: !0 },
        1
      );
      var r = a(n);
      (s = o(r, "path", { d: !0 }, 1)),
        a(s).forEach(h),
        r.forEach(h),
        i.forEach(h),
        this.h();
    },
    h() {
      d(
        s,
        "d",
        "m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
      ),
        d(n, "height", "100%"),
        d(n, "viewBox", "0 0 365.696 365.696"),
        d(n, "width", "auto"),
        d(n, "xmlns", "http://www.w3.org/2000/svg"),
        d(n, "fill", "white"),
        d(n, "class", "svelte-pi3t11"),
        d(e, "class", "window-close-button svelte-pi3t11"),
        f(e, "width", t[0]),
        f(e, "height", t[1]);
    },
    m(l, c) {
      u(l, e, c),
        b(e, n),
        b(n, s),
        i || ((r = [m(e, "click", t[2]), m(e, "dragstart", Wn)]), (i = !0));
    },
    p(t, [n]) {
      1 & n && f(e, "width", t[0]), 2 & n && f(e, "height", t[1]);
    },
    i: M,
    o: M,
    d(t) {
      t && h(e), (i = !1), w(r);
    },
  };
}
const Wn = (t) => t.preventDefault();
function An(t, e, n) {
  let { width: s = "3rem" } = e,
    { height: i = "100%" } = e;
  return (
    (t.$$set = (t) => {
      "width" in t && n(0, (s = t.width)),
        "height" in t && n(1, (i = t.height));
    }),
    [
      s,
      i,
      function (e) {
        G.call(this, t, e);
      },
    ]
  );
}
class jn extends n {
  constructor(t) {
    super(), s(this, t, An, Gn, i, { width: 0, height: 1 });
  }
}
function qn(t) {
  let e, n, s, i, r;
  return {
    c() {
      (e = c("button")), (n = B("svg")), (s = B("path")), this.h();
    },
    l(t) {
      e = o(t, "BUTTON", { class: !0, style: !0 });
      var i = a(e);
      n = o(
        i,
        "svg",
        {
          version: !0,
          id: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
          x: !0,
          y: !0,
          viewBox: !0,
          "enable-background": !0,
          "xml:space": !0,
          class: !0,
        },
        1
      );
      var r = a(n);
      (s = o(r, "path", { id: !0, d: !0 }, 1)),
        a(s).forEach(h),
        r.forEach(h),
        i.forEach(h),
        this.h();
    },
    h() {
      d(s, "id", "XMLID_1_"),
        d(
          s,
          "d",
          "M120,76H8c-4.4,0-8-3.6-8-8v-8c0-4.4,3.6-8,8-8h112c4.4,0,8,3.6,8,8v8C128,72.4,124.4,76,120,76z"
        ),
        d(n, "version", "1.1"),
        d(n, "id", "Layer_1"),
        d(n, "xmlns", "http://www.w3.org/2000/svg"),
        d(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        d(n, "x", "0px"),
        d(n, "y", "0px"),
        d(n, "viewBox", "0 0 128 128"),
        d(n, "enable-background", "new 0 0 128 128"),
        d(n, "xml:space", "preserve"),
        d(n, "class", "svelte-4yeo8t"),
        d(e, "class", "window-minimize-button svelte-4yeo8t"),
        f(e, "width", t[0]),
        f(e, "height", t[1]);
    },
    m(l, c) {
      u(l, e, c),
        b(e, n),
        b(n, s),
        i || ((r = [m(e, "click", t[2]), m(e, "dragstart", Fn)]), (i = !0));
    },
    p(t, [n]) {
      1 & n && f(e, "width", t[0]), 2 & n && f(e, "height", t[1]);
    },
    i: M,
    o: M,
    d(t) {
      t && h(e), (i = !1), w(r);
    },
  };
}
const Fn = (t) => t.preventDefault();
function Yn(t, e, n) {
  let { width: s = "3rem" } = e,
    { height: i = "100%" } = e;
  return (
    (t.$$set = (t) => {
      "width" in t && n(0, (s = t.width)),
        "height" in t && n(1, (i = t.height));
    }),
    [
      s,
      i,
      function (e) {
        G.call(this, t, e);
      },
    ]
  );
}
class Un extends n {
  constructor(t) {
    super(), s(this, t, Yn, qn, i, { width: 0, height: 1 });
  }
}
function Zn(t) {
  let e, n;
  return {
    c() {
      (e = B("svg")), (n = B("path")), this.h();
    },
    l(t) {
      e = o(
        t,
        "svg",
        {
          version: !0,
          id: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
          x: !0,
          y: !0,
          viewBox: !0,
          "enable-background": !0,
          "xml:space": !0,
          class: !0,
        },
        1
      );
      var s = a(e);
      (n = o(
        s,
        "path",
        { id: !0, "stroke-width": !0, "stroke-miterlimit": !0, d: !0 },
        1
      )),
        a(n).forEach(h),
        s.forEach(h),
        this.h();
    },
    h() {
      d(n, "id", "XMLID_1_"),
        d(n, "stroke-width", "18"),
        d(n, "stroke-miterlimit", "10"),
        d(
          n,
          "d",
          "M102,114H26c-6.6,0-12-5.4-12-12V26\n   c0-6.6,5.4-12,12-12h76c6.6,0,12,5.4,12,12v76C114,108.6,108.6,114,102,114z"
        ),
        d(e, "version", "1.1"),
        d(e, "id", "Layer_1"),
        d(e, "xmlns", "http://www.w3.org/2000/svg"),
        d(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        d(e, "x", "0px"),
        d(e, "y", "0px"),
        d(e, "viewBox", "0 0 128 128"),
        d(e, "enable-background", "new 0 0 128 128"),
        d(e, "xml:space", "preserve"),
        d(e, "class", "svelte-1c0ciea");
    },
    m(t, s) {
      u(t, e, s), b(e, n);
    },
    d(t) {
      t && h(e);
    },
  };
}
function Jn(t) {
  let e, n, s;
  return {
    c() {
      (e = B("svg")), (n = B("path")), (s = B("path")), this.h();
    },
    l(t) {
      e = o(
        t,
        "svg",
        {
          version: !0,
          id: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
          x: !0,
          y: !0,
          viewBox: !0,
          "enable-background": !0,
          "xml:space": !0,
          class: !0,
        },
        1
      );
      var i = a(e);
      (n = o(
        i,
        "path",
        { id: !0, "stroke-width": !0, "stroke-miterlimit": !0, d: !0 },
        1
      )),
        a(n).forEach(h),
        (s = o(
          i,
          "path",
          { id: !0, "stroke-width": !0, "stroke-miterlimit": !0, d: !0 },
          1
        )),
        a(s).forEach(h),
        i.forEach(h),
        this.h();
    },
    h() {
      d(n, "id", "XMLID_1_"),
        d(n, "stroke-width", "18"),
        d(n, "stroke-miterlimit", "10"),
        d(
          n,
          "d",
          "M81.5,122H18c-6.6,0-12-5.4-12-12\n   V46.5c0-6.6,5.4-12,12-12h63.5c6.6,0,12,5.4,12,12V110C93.5,116.6,88.1,122,81.5,122z"
        ),
        d(s, "id", "XMLID_2_"),
        d(s, "stroke-width", "18"),
        d(s, "stroke-miterlimit", "10"),
        d(
          s,
          "d",
          "M94,97c-0.2-7.3-0.5-18.6-0.5-32.5\n   c0-18.4,0.5-23.2-3.3-27c-4.7-4.8-11.2-3.1-34.3-2.8c-10.7,0.2-19.5,0-25.5-0.3c-2-10.2,0.8-19.9,7.5-25c1.6-1.2,4.3-2.8,8.5-3.5\n   H110c6.6,0,12,5.4,12,12v63.5c-0.4,2.6-1.4,5.7-3.5,8.5C113.5,96.5,103.9,99.1,94,97z"
        ),
        d(e, "version", "1.1"),
        d(e, "id", "Layer_1"),
        d(e, "xmlns", "http://www.w3.org/2000/svg"),
        d(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        d(e, "x", "0px"),
        d(e, "y", "0px"),
        d(e, "viewBox", "0 0 128 128"),
        d(e, "enable-background", "new 0 0 128 128"),
        d(e, "xml:space", "preserve"),
        d(e, "class", "svelte-1c0ciea");
    },
    m(t, i) {
      u(t, e, i), b(e, n), b(e, s);
    },
    d(t) {
      t && h(e);
    },
  };
}
function Kn(t) {
  let e, n, s;
  function i(t, e) {
    return t[2] ? Jn : Zn;
  }
  let r = i(t),
    l = r(t);
  return {
    c() {
      (e = c("button")), l.c(), this.h();
    },
    l(t) {
      e = o(t, "BUTTON", { class: !0, style: !0 });
      var n = a(e);
      l.l(n), n.forEach(h), this.h();
    },
    h() {
      d(e, "class", "window-resize-button svelte-1c0ciea"),
        f(e, "width", t[0]),
        f(e, "height", t[1]);
    },
    m(i, r) {
      u(i, e, r),
        l.m(e, null),
        n || ((s = [m(e, "click", t[3]), m(e, "dragstart", Qn)]), (n = !0));
    },
    p(t, [n]) {
      r !== (r = i(t)) && (l.d(1), (l = r(t)), l && (l.c(), l.m(e, null))),
        1 & n && f(e, "width", t[0]),
        2 & n && f(e, "height", t[1]);
    },
    i: M,
    o: M,
    d(t) {
      t && h(e), l.d(), (n = !1), w(s);
    },
  };
}
const Qn = (t) => t.preventDefault();
function ts(t, e, n) {
  let { width: s = "3rem" } = e,
    { height: i = "100%" } = e,
    { isFullscreen: r } = e;
  return (
    (t.$$set = (t) => {
      "width" in t && n(0, (s = t.width)),
        "height" in t && n(1, (i = t.height)),
        "isFullscreen" in t && n(2, (r = t.isFullscreen));
    }),
    [
      s,
      i,
      r,
      function (e) {
        G.call(this, t, e);
      },
    ]
  );
}
class es extends n {
  constructor(t) {
    super(), s(this, t, ts, Kn, i, { width: 0, height: 1, isFullscreen: 2 });
  }
}
const ns = (t) => ({}),
  ss = (t) => ({});
function is(t) {
  let e, n, s, i, g, x, D, M, k, L, z, O, S, R, B, N, H, G, W, A, q, U, Z;
  (z = new Un({ props: { width: "2.5rem", height: "100%" } })),
    z.$on("click", t[43]),
    (S = new es({
      props: { isFullscreen: t[4], width: "2.5rem", height: "100%" },
    })),
    S.$on("click", t[44]),
    (B = new jn({ props: { width: "2.5rem", height: "100%" } })),
    B.$on("click", t[45]);
  const J = t[41].content,
    K = l(J, t, t[40], ss);
  let Q = !t[4] && rs(t);
  return {
    c() {
      (e = c("div")),
        (n = c("div")),
        (s = c("div")),
        (i = c("img")),
        (x = E()),
        (D = c("p")),
        (M = y(t[6])),
        (k = E()),
        (L = c("div")),
        C(z.$$.fragment),
        (O = E()),
        C(S.$$.fragment),
        (R = E()),
        C(B.$$.fragment),
        (N = E()),
        (H = c("div")),
        K && K.c(),
        (G = E()),
        Q && Q.c(),
        this.h();
    },
    l(r) {
      e = o(r, "DIV", { class: !0, style: !0 });
      var l = a(e);
      n = o(l, "DIV", { class: !0, draggable: !0 });
      var c = a(n);
      s = o(c, "DIV", { class: !0 });
      var d = a(s);
      (i = o(d, "IMG", { class: !0, src: !0, alt: !0 })),
        (x = I(d)),
        (D = o(d, "P", { class: !0 }));
      var f = a(D);
      (M = _(f, t[6])),
        f.forEach(h),
        d.forEach(h),
        (k = I(c)),
        (L = o(c, "DIV", { class: !0 }));
      var u = a(L);
      X(z.$$.fragment, u),
        (O = I(u)),
        X(S.$$.fragment, u),
        (R = I(u)),
        X(B.$$.fragment, u),
        u.forEach(h),
        c.forEach(h),
        (N = I(l)),
        (H = o(l, "DIV", { class: !0 }));
      var m = a(H);
      K && K.l(m),
        m.forEach(h),
        (G = I(l)),
        Q && Q.l(l),
        l.forEach(h),
        this.h();
    },
    h() {
      d(i, "class", "window-icon svelte-1dv465i"),
        i.src !== (g = t[7]) && d(i, "src", g),
        d(i, "alt", t[6]),
        d(D, "class", "window-title svelte-1dv465i"),
        d(s, "class", "window-info svelte-1dv465i"),
        d(L, "class", "control-buttons svelte-1dv465i"),
        d(n, "class", "control-bar svelte-1dv465i"),
        d(n, "draggable", "true"),
        d(H, "class", "window-content svelte-1dv465i"),
        d(e, "class", "window svelte-1dv465i"),
        f(
          e,
          "width",
          (t[4] ? t[13] : t[1] + t[2] <= t[13] ? t[1] : t[13] - t[2]) + "px"
        ),
        f(
          e,
          "height",
          (t[4] ? t[12] : t[0] + t[3] <= t[12] ? t[0] : t[12] - t[3]) + "px"
        ),
        f(e, "bottom", t[8] + "px"),
        f(
          e,
          "transform",
          "translate(" + (t[4] ? 0 : t[2]) + "px, -" + (t[4] ? 0 : t[3]) + "px)"
        ),
        f(e, "min-width", t[9] + "px"),
        f(e, "min-height", t[10] + "px"),
        f(e, "z-index", t[11]);
    },
    m(r, l) {
      u(r, e, l),
        b(e, n),
        b(n, s),
        b(s, i),
        b(s, x),
        b(s, D),
        b(D, M),
        b(n, k),
        b(n, L),
        V(z, L, null),
        b(L, O),
        V(S, L, null),
        b(L, R),
        V(B, L, null),
        b(e, N),
        b(e, H),
        K && K.m(H, null),
        t[46](H),
        b(e, G),
        Q && Q.m(e, null),
        t[55](e),
        (q = !0),
        U ||
          ((Z = [
            m(s, "dragstart", os),
            m(n, "dragstart", t[23]),
            m(n, "touchstart", t[24]),
            m(n, "dragend", t[25]),
            m(n, "touchend", cs),
            m(n, "dblclick", t[27]),
            m(e, "mousedown", t[31]),
          ]),
          (U = !0));
    },
    p(t, n) {
      (!q || (128 & n[0] && i.src !== (g = t[7]))) && d(i, "src", g),
        (!q || 64 & n[0]) && d(i, "alt", t[6]),
        (!q || 64 & n[0]) && T(M, t[6]);
      const s = {};
      16 & n[0] && (s.isFullscreen = t[4]),
        S.$set(s),
        K &&
          K.p &&
          (!q || 512 & n[1]) &&
          p(K, J, t, t[40], q ? n : [-1, -1, -1], ns, ss),
        t[4]
          ? Q && (Q.d(1), (Q = null))
          : Q
          ? Q.p(t, n)
          : ((Q = rs(t)), Q.c(), Q.m(e, null)),
        (!q || 8214 & n[0]) &&
          f(
            e,
            "width",
            (t[4] ? t[13] : t[1] + t[2] <= t[13] ? t[1] : t[13] - t[2]) + "px"
          ),
        (!q || 4121 & n[0]) &&
          f(
            e,
            "height",
            (t[4] ? t[12] : t[0] + t[3] <= t[12] ? t[0] : t[12] - t[3]) + "px"
          ),
        (!q || 256 & n[0]) && f(e, "bottom", t[8] + "px"),
        (!q || 28 & n[0]) &&
          f(
            e,
            "transform",
            "translate(" +
              (t[4] ? 0 : t[2]) +
              "px, -" +
              (t[4] ? 0 : t[3]) +
              "px)"
          ),
        (!q || 512 & n[0]) && f(e, "min-width", t[9] + "px"),
        (!q || 1024 & n[0]) && f(e, "min-height", t[10] + "px"),
        (!q || 2048 & n[0]) && f(e, "z-index", t[11]);
    },
    i(t) {
      q ||
        (v(z.$$.fragment, t),
        v(S.$$.fragment, t),
        v(B.$$.fragment, t),
        v(K, t),
        r(() => {
          A && A.end(1), W || (W = j(e, Y, { duration: 250 })), W.start();
        }),
        (q = !0));
    },
    o(t) {
      $(z.$$.fragment, t),
        $(S.$$.fragment, t),
        $(B.$$.fragment, t),
        $(K, t),
        W && W.invalidate(),
        (A = F(e, Y, { duration: 250 })),
        (q = !1);
    },
    d(n) {
      n && h(e),
        P(z),
        P(S),
        P(B),
        K && K.d(n),
        t[46](null),
        Q && Q.d(),
        t[55](null),
        n && A && A.end(),
        (U = !1),
        w(Z);
    },
  };
}
function rs(t) {
  let e, n, s, i, r, l, f, g, p, v, $, x, y, _, b, D, T;
  return {
    c() {
      (e = c("div")),
        (n = E()),
        (s = c("div")),
        (i = E()),
        (r = c("div")),
        (l = E()),
        (f = c("div")),
        (g = E()),
        (p = c("div")),
        (v = E()),
        ($ = c("div")),
        (x = E()),
        (y = c("div")),
        (_ = E()),
        (b = c("div")),
        this.h();
    },
    l(t) {
      (e = o(t, "DIV", { class: !0 })),
        a(e).forEach(h),
        (n = I(t)),
        (s = o(t, "DIV", { class: !0 })),
        a(s).forEach(h),
        (i = I(t)),
        (r = o(t, "DIV", { class: !0 })),
        a(r).forEach(h),
        (l = I(t)),
        (f = o(t, "DIV", { class: !0 })),
        a(f).forEach(h),
        (g = I(t)),
        (p = o(t, "DIV", { class: !0 })),
        a(p).forEach(h),
        (v = I(t)),
        ($ = o(t, "DIV", { class: !0 })),
        a($).forEach(h),
        (x = I(t)),
        (y = o(t, "DIV", { class: !0 })),
        a(y).forEach(h),
        (_ = I(t)),
        (b = o(t, "DIV", { class: !0 })),
        a(b).forEach(h),
        this.h();
    },
    h() {
      d(e, "class", "border-top svelte-1dv465i"),
        d(s, "class", "border-left svelte-1dv465i"),
        d(r, "class", "border-right svelte-1dv465i"),
        d(f, "class", "border-bottom svelte-1dv465i"),
        d(p, "class", "border-top-left svelte-1dv465i"),
        d($, "class", "border-top-right svelte-1dv465i"),
        d(y, "class", "border-bottom-left svelte-1dv465i"),
        d(b, "class", "border-bottom-right svelte-1dv465i");
    },
    m(c, o) {
      u(c, e, o),
        u(c, n, o),
        u(c, s, o),
        u(c, i, o),
        u(c, r, o),
        u(c, l, o),
        u(c, f, o),
        u(c, g, o),
        u(c, p, o),
        u(c, v, o),
        u(c, $, o),
        u(c, x, o),
        u(c, y, o),
        u(c, _, o),
        u(c, b, o),
        D ||
          ((T = [
            m(e, "mousedown", t[47]),
            m(s, "mousedown", t[48]),
            m(r, "mousedown", t[49]),
            m(f, "mousedown", t[50]),
            m(p, "mousedown", t[51]),
            m($, "mousedown", t[52]),
            m(y, "mousedown", t[53]),
            m(b, "mousedown", t[54]),
          ]),
          (D = !0));
    },
    p: M,
    d(t) {
      t && h(e),
        t && h(n),
        t && h(s),
        t && h(i),
        t && h(r),
        t && h(l),
        t && h(f),
        t && h(g),
        t && h(p),
        t && h(v),
        t && h($),
        t && h(x),
        t && h(y),
        t && h(_),
        t && h(b),
        (D = !1),
        w(T);
    },
  };
}
function ls(t) {
  let e, n, s, i;
  r(t[42]);
  let l = !t[5] && is(t);
  return {
    c() {
      l && l.c(), (e = k());
    },
    l(t) {
      l && l.l(t), (e = k());
    },
    m(r, c) {
      l && l.m(r, c),
        u(r, e, c),
        (n = !0),
        s ||
          ((i = [
            m(window, "dragover", t[19]),
            m(window, "touchmove", t[20]),
            m(window, "mouseup", t[22]),
            m(window, "mousemove", t[21]),
            m(window, "resize", t[42]),
          ]),
          (s = !0));
    },
    p(t, n) {
      t[5]
        ? l &&
          (L(),
          $(l, 1, 1, () => {
            l = null;
          }),
          z())
        : l
        ? (l.p(t, n), 32 & n[0] && v(l, 1))
        : ((l = is(t)), l.c(), v(l, 1), l.m(e.parentNode, e));
    },
    i(t) {
      n || (v(l), (n = !0));
    },
    o(t) {
      $(l), (n = !1);
    },
    d(t) {
      l && l.d(t), t && h(e), (s = !1), w(i);
    },
  };
}
function cs(t) {}
const os = (t) => t.preventDefault();
function as(t, e, n) {
  let s,
    i,
    r,
    l,
    c,
    o,
    { $$slots: a = {}, $$scope: h } = e,
    { title: d = "" } = e,
    { icon: f = "" } = e,
    { height: u = null } = e,
    { width: m = null } = e,
    { x: g = null } = e,
    { y: p = null } = e,
    { heightOffset: v = 0 } = e,
    { widthOffset: $ = 0 } = e,
    { minWidth: w = 250 } = e,
    { minHeight: E = 250 } = e,
    { fullscreen: y = !1 } = e,
    { minimized: I = !1 } = e,
    { z_index: _ = 1 } = e,
    { onSelection: b = () => {} } = e,
    { onMinimize: D = () => {} } = e,
    { onClose: T = () => {} } = e,
    M = null,
    k = null,
    L = 0,
    z = 0,
    O = !1;
  var C, X;
  let S;
  ((X = C || (C = {}))[(X.TOP = 0)] = "TOP"),
    (X[(X.BOTTOM = 1)] = "BOTTOM"),
    (X[(X.LEFT = 2)] = "LEFT"),
    (X[(X.RIGHT = 3)] = "RIGHT"),
    (X[(X.TOPRIGHT = 4)] = "TOPRIGHT"),
    (X[(X.TOPLEFT = 5)] = "TOPLEFT"),
    (X[(X.BOTTOMRIGHT = 6)] = "BOTTOMRIGHT"),
    (X[(X.BOTTOMLEFT = 7)] = "BOTTOMLEFT");
  let V = 0,
    P = 0,
    R = !1,
    B = u,
    N = m,
    H = g,
    G = p,
    W = new Map([
      [C.TOP, bn.N_RESIZE],
      [C.BOTTOM, bn.S_RESIZE],
      [C.LEFT, bn.W_RESIZE],
      [C.RIGHT, bn.E_RESIZE],
      [C.TOPLEFT, bn.NW_RESIZE],
      [C.TOPRIGHT, bn.NE_RESIZE],
      [C.BOTTOMLEFT, bn.SW_RESIZE],
      [C.BOTTOMRIGHT, bn.SE_RESIZE],
    ]);
  function A(t, e) {
    n(38, (O = !0)), (L = t), (z = e);
  }
  function j(t, e) {
    if (!O) return;
    y && (n(4, (y = !1)), n(2, (g = t - m / 2)), n(3, (p = i)));
    let s = t - L,
      r = e - z;
    (L = t), (z = e), n(2, (g += s)), n(3, (p -= r));
  }
  function q(t, e) {
    var s, i;
    (S = e),
      (s = t.clientX),
      (i = t.clientY),
      (V = s),
      (P = i),
      n(39, (R = !0)),
      Ln(W.get(S)),
      (H = g),
      (G = p),
      (B = u),
      (N = m);
  }
  function F() {
    n(5, (I = !0)), D();
  }
  function Y() {
    n(4, (y = !y));
  }
  function U() {
    T();
  }
  return (
    (t.$$set = (t) => {
      "title" in t && n(6, (d = t.title)),
        "icon" in t && n(7, (f = t.icon)),
        "height" in t && n(0, (u = t.height)),
        "width" in t && n(1, (m = t.width)),
        "x" in t && n(2, (g = t.x)),
        "y" in t && n(3, (p = t.y)),
        "heightOffset" in t && n(8, (v = t.heightOffset)),
        "widthOffset" in t && n(32, ($ = t.widthOffset)),
        "minWidth" in t && n(9, (w = t.minWidth)),
        "minHeight" in t && n(10, (E = t.minHeight)),
        "fullscreen" in t && n(4, (y = t.fullscreen)),
        "minimized" in t && n(5, (I = t.minimized)),
        "z_index" in t && n(11, (_ = t.z_index)),
        "onSelection" in t && n(33, (b = t.onSelection)),
        "onMinimize" in t && n(34, (D = t.onMinimize)),
        "onClose" in t && n(35, (T = t.onClose)),
        "$$scope" in t && n(40, (h = t.$$scope));
    }),
    (t.$$.update = () => {
      (65536 & t.$$.dirty[0]) | (384 & t.$$.dirty[1]) &&
        o &&
        (n(16, (o.style.userSelect = O || R ? "none" : "initial"), o),
        n(16, (o.style.pointerEvents = O || R ? "none" : "initial"), o)),
        (32768 & t.$$.dirty[0]) | (2 & t.$$.dirty[1]) && n(13, (k = l - $)),
        8706 & t.$$.dirty[0] &&
          (m < w ? n(1, (m = w)) : k && m > k && n(1, (m = k))),
        16640 & t.$$.dirty[0] && n(12, (M = r - v)),
        5121 & t.$$.dirty[0] &&
          (u < E ? n(0, (u = E)) : M && u > M && n(0, (u = M))),
        8194 & t.$$.dirty[0] && null == m && null != k && n(1, (m = k)),
        (8198 & t.$$.dirty[0]) | (32 & t.$$.dirty[1]) &&
          (n(36, (s = Math.abs(k - m))),
          null == g && s
            ? n(2, (g = s / 2))
            : g >= s
            ? n(2, (g = s))
            : g < 0 && n(2, (g = 0))),
        4097 & t.$$.dirty[0] && null == u && null != M && n(0, (u = M)),
        (4105 & t.$$.dirty[0]) | (64 & t.$$.dirty[1]) &&
          (n(37, (i = Math.abs(M - u))),
          null == p && i
            ? n(3, (p = i / 2))
            : p >= i
            ? n(3, (p = i))
            : p < 0 && n(3, (p = 0)));
    }),
    [
      u,
      m,
      g,
      p,
      y,
      I,
      d,
      f,
      v,
      w,
      E,
      _,
      M,
      k,
      r,
      l,
      o,
      c,
      C,
      function (t) {
        O &&
          (t.preventDefault(),
          j(t.clientX, t.clientY),
          (t.dataTransfer.dropEffect = "move"));
      },
      function (t) {
        t.preventDefault(),
          j(t.targetTouches[0].clientX, t.targetTouches[0].clientY);
      },
      function (t) {
        if (!R) return;
        let e = t.clientX - V,
          r = t.clientY - P;
        (S != C.TOP && S != C.TOPLEFT && S != C.TOPRIGHT) ||
          (G - r < i && (n(0, (u -= r)), (B -= r))),
          (S != C.BOTTOM && S != C.BOTTOMLEFT && S != C.BOTTOMRIGHT) ||
            (G - r > 0 &&
              (B + r >= E && (n(3, (p -= r)), n(0, (u += r))), (B += r)),
            (G -= r)),
          (S != C.RIGHT && S != C.TOPRIGHT && S != C.BOTTOMRIGHT) ||
            (H + e < s && (n(1, (m += e)), (N += e))),
          (S != C.LEFT && S != C.TOPLEFT && S != C.BOTTOMLEFT) ||
            (H + e > 0 &&
              (N - e >= w && (n(2, (g += e)), n(1, (m -= e))), (N -= e)),
            (H += e)),
          (V = t.clientX),
          (P = t.clientY);
      },
      function (t) {
        R && (n(39, (R = !1)), Ln(bn.AUTO), b());
      },
      function (t) {
        A(t.clientX, t.clientY);
      },
      function (t) {
        A(t.targetTouches[0].clientX, t.targetTouches[0].clientY);
      },
      function (t) {
        t.preventDefault(), t.clientX, t.clientY, n(38, (O = !1)), b();
      },
      q,
      function (t) {
        n(4, (y = !y));
      },
      F,
      Y,
      U,
      function (t) {
        b();
      },
      $,
      b,
      D,
      T,
      s,
      i,
      O,
      R,
      h,
      a,
      function () {
        n(14, (r = window.innerHeight)), n(15, (l = window.innerWidth));
      },
      () => F(),
      () => Y(),
      () => U(),
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (o = t), n(16, o), n(38, O), n(39, R);
        });
      },
      (t) => q(t, C.TOP),
      (t) => q(t, C.LEFT),
      (t) => q(t, C.RIGHT),
      (t) => q(t, C.BOTTOM),
      (t) => q(t, C.TOPLEFT),
      (t) => q(t, C.TOPRIGHT),
      (t) => q(t, C.BOTTOMLEFT),
      (t) => q(t, C.BOTTOMRIGHT),
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (c = t), n(17, c);
        });
      },
    ]
  );
}
class hs extends n {
  constructor(t) {
    super(),
      s(
        this,
        t,
        as,
        ls,
        i,
        {
          title: 6,
          icon: 7,
          height: 0,
          width: 1,
          x: 2,
          y: 3,
          heightOffset: 8,
          widthOffset: 32,
          minWidth: 9,
          minHeight: 10,
          fullscreen: 4,
          minimized: 5,
          z_index: 11,
          onSelection: 33,
          onMinimize: 34,
          onClose: 35,
        },
        [-1, -1, -1]
      );
  }
}
function ds(t, e, n) {
  const s = t.slice();
  return (s[21] = e[n]), s;
}
function fs(t, e, n) {
  const s = t.slice();
  return (
    (s[24] = e[n].id),
    (s[25] = e[n].name),
    (s[26] = e[n].icon),
    (s[27] = e[n].window),
    (s[28] = e),
    (s[29] = n),
    s
  );
}
function us(t) {
  let e, n, s, i, r, l, c, o, a;
  function h() {
    return t[7](t[24]);
  }
  function d() {
    return t[8](t[24]);
  }
  function f() {
    return t[9](t[24]);
  }
  function u(e) {
    t[10](e, t[27]);
  }
  function m(e) {
    t[11](e, t[27]);
  }
  function g(e) {
    t[12](e, t[27]);
  }
  function p(e) {
    t[13](e, t[27]);
  }
  function w(e) {
    t[14](e, t[27]);
  }
  function E(e) {
    t[15](e, t[27]);
  }
  function y(e) {
    t[16](e, t[27]);
  }
  let I = {
    title: t[25],
    icon: t[26],
    heightOffset: It(t[0]),
    onSelection: h,
    onMinimize: d,
    onClose: f,
    $$slots: { content: [ms] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[27].height && (I.height = t[27].height),
    void 0 !== t[27].width && (I.width = t[27].width),
    void 0 !== t[27].x && (I.x = t[27].x),
    void 0 !== t[27].y && (I.y = t[27].y),
    void 0 !== t[27].fullscreen && (I.fullscreen = t[27].fullscreen),
    void 0 !== t[27].minimized && (I.minimized = t[27].minimized),
    void 0 !== t[27].z_index && (I.z_index = t[27].z_index),
    (e = new hs({ props: I })),
    x.push(() => Z(e, "height", u)),
    x.push(() => Z(e, "width", m)),
    x.push(() => Z(e, "x", g)),
    x.push(() => Z(e, "y", p)),
    x.push(() => Z(e, "fullscreen", w)),
    x.push(() => Z(e, "minimized", E)),
    x.push(() => Z(e, "z_index", y)),
    {
      c() {
        C(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, n) {
        V(e, t, n), (a = !0);
      },
      p(a, u) {
        t = a;
        const m = {};
        2 & u && (m.title = t[25]),
          2 & u && (m.icon = t[26]),
          1 & u && (m.heightOffset = It(t[0])),
          2 & u && (m.onSelection = h),
          2 & u && (m.onMinimize = d),
          2 & u && (m.onClose = f),
          1073741826 & u && (m.$$scope = { dirty: u, ctx: t }),
          !n &&
            2 & u &&
            ((n = !0), (m.height = t[27].height), U(() => (n = !1))),
          !s && 2 & u && ((s = !0), (m.width = t[27].width), U(() => (s = !1))),
          !i && 2 & u && ((i = !0), (m.x = t[27].x), U(() => (i = !1))),
          !r && 2 & u && ((r = !0), (m.y = t[27].y), U(() => (r = !1))),
          !l &&
            2 & u &&
            ((l = !0), (m.fullscreen = t[27].fullscreen), U(() => (l = !1))),
          !c &&
            2 & u &&
            ((c = !0), (m.minimized = t[27].minimized), U(() => (c = !1))),
          !o &&
            2 & u &&
            ((o = !0), (m.z_index = t[27].z_index), U(() => (o = !1))),
          e.$set(m);
      },
      i(t) {
        a || (v(e.$$.fragment, t), (a = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (a = !1);
      },
      d(t) {
        P(e, t);
      },
    }
  );
}
function ms(t) {
  let e, n, s;
  function i() {
    return t[6](t[24]);
  }
  const r = [
    t[27].componentAttributes,
    { slot: "content" },
    { onSelection: i },
  ];
  var l = t[27].component;
  function c(t) {
    let e = {};
    for (let n = 0; n < r.length; n += 1) e = tt(e, r[n]);
    return { props: e };
  }
  return (
    l && (e = new l(c())),
    {
      c() {
        e && C(e.$$.fragment), (n = k());
      },
      l(t) {
        e && X(e.$$.fragment, t), (n = k());
      },
      m(t, i) {
        e && V(e, t, i), u(t, n, i), (s = !0);
      },
      p(s, o) {
        t = s;
        const a =
          18 & o
            ? K(r, [
                2 & o && Q(t[27].componentAttributes),
                r[1],
                { onSelection: i },
              ])
            : {};
        if (l !== (l = t[27].component)) {
          if (e) {
            L();
            const t = e;
            $(t.$$.fragment, 1, 0, () => {
              P(t, 1);
            }),
              z();
          }
          l
            ? ((e = new l(c())),
              C(e.$$.fragment),
              v(e.$$.fragment, 1),
              V(e, n.parentNode, n))
            : (e = null);
        } else l && e.$set(a);
      },
      i(t) {
        s || (e && v(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        e && $(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        t && h(n), e && P(e, t);
      },
    }
  );
}
function gs(t, e) {
  let n,
    s,
    i,
    r = null !== e[27] && us(e);
  return {
    key: t,
    first: null,
    c() {
      (n = k()), r && r.c(), (s = k()), this.h();
    },
    l(t) {
      (n = k()), r && r.l(t), (s = k()), this.h();
    },
    h() {
      this.first = n;
    },
    m(t, e) {
      u(t, n, e), r && r.m(t, e), u(t, s, e), (i = !0);
    },
    p(t, n) {
      null !== (e = t)[27]
        ? r
          ? (r.p(e, n), 2 & n && v(r, 1))
          : ((r = us(e)), r.c(), v(r, 1), r.m(s.parentNode, s))
        : r &&
          (L(),
          $(r, 1, 1, () => {
            r = null;
          }),
          z());
    },
    i(t) {
      i || (v(r), (i = !0));
    },
    o(t) {
      $(r), (i = !1);
    },
    d(t) {
      t && h(n), r && r.d(t), t && h(s);
    },
  };
}
function ps(t) {
  let e, n;
  return (
    (e = new gt({
      props: {
        x: t[3].x,
        y: t[3].y,
        z_index: t[2] + 2,
        $$slots: { options: [$s] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        C(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      p(t, n) {
        const s = {};
        8 & n && (s.x = t[3].x),
          8 & n && (s.y = t[3].y),
          4 & n && (s.z_index = t[2] + 2),
          1073741832 & n && (s.$$scope = { dirty: n, ctx: t }),
          e.$set(s);
      },
      i(t) {
        n || (v(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        P(e, t);
      },
    }
  );
}
function vs(t) {
  let e, n;
  return (
    (e = new wt({
      props: { name: t[21].name, icon: t[21].icon, onClick: t[21].onClick },
    })),
    {
      c() {
        C(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      p(t, n) {
        const s = {};
        8 & n && (s.name = t[21].name),
          8 & n && (s.icon = t[21].icon),
          8 & n && (s.onClick = t[21].onClick),
          e.$set(s);
      },
      i(t) {
        n || (v(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        P(e, t);
      },
    }
  );
}
function $s(t) {
  let e,
    n,
    s = t[3].options,
    i = [];
  for (let l = 0; l < s.length; l += 1) i[l] = vs(ds(t, s, l));
  const r = (t) =>
    $(i[t], 1, 1, () => {
      i[t] = null;
    });
  return {
    c() {
      e = c("div");
      for (let t = 0; t < i.length; t += 1) i[t].c();
      this.h();
    },
    l(t) {
      e = o(t, "DIV", { slot: !0 });
      var n = a(e);
      for (let e = 0; e < i.length; e += 1) i[e].l(n);
      n.forEach(h), this.h();
    },
    h() {
      d(e, "slot", "options");
    },
    m(t, s) {
      u(t, e, s);
      for (let n = 0; n < i.length; n += 1) i[n].m(e, null);
      n = !0;
    },
    p(t, n) {
      if (8 & n) {
        let l;
        for (s = t[3].options, l = 0; l < s.length; l += 1) {
          const r = ds(t, s, l);
          i[l]
            ? (i[l].p(r, n), v(i[l], 1))
            : ((i[l] = vs(r)), i[l].c(), v(i[l], 1), i[l].m(e, null));
        }
        for (L(), l = s.length; l < i.length; l += 1) r(l);
        z();
      }
    },
    i(t) {
      if (!n) {
        for (let t = 0; t < s.length; t += 1) v(i[t]);
        n = !0;
      }
    },
    o(t) {
      i = i.filter(Boolean);
      for (let e = 0; e < i.length; e += 1) $(i[e]);
      n = !1;
    },
    d(t) {
      t && h(e), H(i, t);
    },
  };
}
function ws(t) {
  let e,
    n,
    s,
    i,
    r,
    l,
    f,
    m,
    g,
    p,
    w,
    y,
    _,
    b = [],
    D = new Map();
  (n = new Hn({ props: { src: xs } })),
    (r = new ye({
      props: {
        bottomOffset: t[0],
        columnWidth: 5,
        columnHeight: 6,
        gap: 1.5,
        padding: 1,
      },
    }));
  let T = t[1];
  const M = (t) => t[24];
  for (let c = 0; c < T.length; c += 1) {
    let e = fs(t, T, c),
      n = M(e);
    D.set(n, (b[c] = gs(n, e)));
  }
  function O(e) {
    t[17](e);
  }
  let S = { z_index: t[2] + 1 };
  void 0 !== t[0] && (S.height = t[0]),
    (g = new Rn({ props: S })),
    x.push(() => Z(g, "height", O));
  let R = t[3].show && ps(t);
  return {
    c() {
      (e = E()),
        C(n.$$.fragment),
        (s = E()),
        (i = c("div")),
        C(r.$$.fragment),
        (l = E()),
        (f = c("div"));
      for (let t = 0; t < b.length; t += 1) b[t].c();
      (m = E()), C(g.$$.fragment), (w = E()), R && R.c(), (y = k()), this.h();
    },
    l(t) {
      J('[data-svelte="svelte-1kjimo1"]', document.head).forEach(h),
        (e = I(t)),
        X(n.$$.fragment, t),
        (s = I(t)),
        (i = o(t, "DIV", { class: !0 }));
      var c = a(i);
      X(r.$$.fragment, c),
        c.forEach(h),
        (l = I(t)),
        (f = o(t, "DIV", { class: !0 }));
      var d = a(f);
      for (let e = 0; e < b.length; e += 1) b[e].l(d);
      d.forEach(h),
        (m = I(t)),
        X(g.$$.fragment, t),
        (w = I(t)),
        R && R.l(t),
        (y = k()),
        this.h();
    },
    h() {
      (document.title = "Jitze Jan Kerkstra"),
        d(i, "class", "grid-container svelte-9zxj4d"),
        d(f, "class", "windows-container");
    },
    m(t, c) {
      u(t, e, c),
        V(n, t, c),
        u(t, s, c),
        u(t, i, c),
        V(r, i, null),
        u(t, l, c),
        u(t, f, c);
      for (let e = 0; e < b.length; e += 1) b[e].m(f, null);
      u(t, m, c), V(g, t, c), u(t, w, c), R && R.m(t, c), u(t, y, c), (_ = !0);
    },
    p(t, [e]) {
      const n = {};
      1 & e && (n.bottomOffset = t[0]),
        r.$set(n),
        51 & e &&
          ((T = t[1]),
          L(),
          (b = W(b, e, M, 1, t, T, D, f, A, gs, null, fs)),
          z());
      const s = {};
      4 & e && (s.z_index = t[2] + 1),
        !p && 1 & e && ((p = !0), (s.height = t[0]), U(() => (p = !1))),
        g.$set(s),
        t[3].show
          ? R
            ? (R.p(t, e), 8 & e && v(R, 1))
            : ((R = ps(t)), R.c(), v(R, 1), R.m(y.parentNode, y))
          : R &&
            (L(),
            $(R, 1, 1, () => {
              R = null;
            }),
            z());
    },
    i(t) {
      if (!_) {
        v(n.$$.fragment, t), v(r.$$.fragment, t);
        for (let t = 0; t < T.length; t += 1) v(b[t]);
        v(g.$$.fragment, t), v(R), (_ = !0);
      }
    },
    o(t) {
      $(n.$$.fragment, t), $(r.$$.fragment, t);
      for (let e = 0; e < b.length; e += 1) $(b[e]);
      $(g.$$.fragment, t), $(R), (_ = !1);
    },
    d(t) {
      t && h(e), P(n, t), t && h(s), t && h(i), P(r), t && h(l), t && h(f);
      for (let e = 0; e < b.length; e += 1) b[e].d();
      t && h(m), P(g, t), t && h(w), R && R.d(t), t && h(y);
    },
  };
}
let xs = "/images/wallpapers/custom-design-01-1280x720.png";
function Es(t, e, n) {
  let s, i, r, l;
  function c(t) {
    Ht();
    let e = ((n = t), s.find((t) => t.id === n));
    var n;
    if (!e) return;
    let i = e.window;
    if (!i) return;
    s
      .flatMap((t) => t.window)
      .filter((t) => null !== t)
      .forEach((t) => {
        t.z_index > i.z_index && (t.z_index -= 1);
      }),
      (i.z_index = Gt);
    let r = ve(e.getProgramId()).window;
    (r.x = e.window.x),
      (r.y = e.window.y),
      (r.width = e.window.width),
      (r.height = e.window.height),
      (r.fullscreen = e.window.fullscreen),
      At.set(s);
  }
  function o(t) {
    !(function (t) {
      At.update((e) => e.filter((e) => e.id !== t));
    })(t);
  }
  O(t, At, (t) => n(1, (s = t))),
    O(t, Wt, (t) => n(2, (i = t))),
    O(t, ot, (t) => n(3, (r = t)));
  return [
    l,
    s,
    i,
    r,
    c,
    o,
    (t) => c(t),
    (t) => c(t),
    (t) => {},
    (t) => o(t),
    function (e, n) {
      t.$$.not_equal(n.height, e) && ((n.height = e), At.set(s));
    },
    function (e, n) {
      t.$$.not_equal(n.width, e) && ((n.width = e), At.set(s));
    },
    function (e, n) {
      t.$$.not_equal(n.x, e) && ((n.x = e), At.set(s));
    },
    function (e, n) {
      t.$$.not_equal(n.y, e) && ((n.y = e), At.set(s));
    },
    function (e, n) {
      t.$$.not_equal(n.fullscreen, e) && ((n.fullscreen = e), At.set(s));
    },
    function (e, n) {
      t.$$.not_equal(n.minimized, e) && ((n.minimized = e), At.set(s));
    },
    function (e, n) {
      t.$$.not_equal(n.z_index, e) && ((n.z_index = e), At.set(s));
    },
    function (t) {
      (l = t), n(0, l);
    },
  ];
}
class ys extends n {
  constructor(t) {
    super(), s(this, t, Es, ws, i, {});
  }
}
const Is = et(new Date(), function (t) {
  const e = setInterval(() => {
    t(new Date());
  }, 1e3);
  return function () {
    clearInterval(e);
  };
});
function _s(t) {
  return t.toLocaleTimeString().slice(0, -3);
}
function bs(t, e = "long") {
  return t.toLocaleDateString("en-EN", { weekday: e });
}
function Ds(t, e = "long") {
  return t.toLocaleDateString("en-EN", { month: e });
}
function Ts(t) {
  return t.getDate();
}
function Ms(t) {
  let e, n, s, i, r, l, g;
  return {
    c() {
      (e = c("button")),
        (n = B("svg")),
        (s = B("g")),
        (i = B("g")),
        (r = B("path")),
        this.h();
    },
    l(t) {
      e = o(t, "BUTTON", { class: !0 });
      var l = a(e);
      n = o(
        l,
        "svg",
        {
          version: !0,
          id: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
          x: !0,
          y: !0,
          viewBox: !0,
          style: !0,
          "xml:space": !0,
          class: !0,
        },
        1
      );
      var c = a(n);
      s = o(c, "g", {}, 1);
      var d = a(s);
      i = o(d, "g", {}, 1);
      var f = a(i);
      (r = o(f, "path", { d: !0, class: !0 }, 1)),
        a(r).forEach(h),
        f.forEach(h),
        d.forEach(h),
        c.forEach(h),
        l.forEach(h),
        this.h();
    },
    h() {
      d(
        r,
        "d",
        "M452,36H60C26.916,36,0,62.916,0,96v240c0,33.084,26.916,60,60,60h176v40H132v40h248v-40H276v-40h176\n\t\t\tc33.084,0,60-26.916,60-60V96C512,62.916,485.084,36,452,36z M472,336c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V96\n\t\t\tc0-11.028,8.972-20,20-20h392c11.028,0,20,8.972,20,20V336z"
      ),
        d(r, "class", "svelte-ykuwz0"),
        d(n, "version", "1.1"),
        d(n, "id", "Capa_1"),
        d(n, "xmlns", "http://www.w3.org/2000/svg"),
        d(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        d(n, "x", "0px"),
        d(n, "y", "0px"),
        d(n, "viewBox", "0 0 512 512"),
        f(n, "enable-background", "new 0 0 512 512"),
        d(n, "xml:space", "preserve"),
        d(n, "class", "svelte-ykuwz0"),
        d(e, "class", "switch-to-desktop-button svelte-ykuwz0");
    },
    m(c, o) {
      u(c, e, o),
        b(e, n),
        b(n, s),
        b(s, i),
        b(i, r),
        l || ((g = m(e, "click", t[0])), (l = !0));
    },
    p: M,
    i: M,
    o: M,
    d(t) {
      t && h(e), (l = !1), g();
    },
  };
}
function ks(t) {
  return [
    function (t) {
      it(rt.DESKTOP);
    },
  ];
}
class Ls extends n {
  constructor(t) {
    super(), s(this, t, ks, Ms, i, {});
  }
}
function zs(t) {
  let e,
    n,
    s,
    i,
    l,
    g,
    p,
    x,
    D,
    M,
    k,
    L,
    z,
    O,
    R,
    B,
    N,
    H,
    G,
    W,
    A,
    j,
    q,
    F,
    Y,
    U,
    Z,
    J,
    K,
    Q,
    tt = bs(t[9], "short") + "",
    et = Ds(t[9], "long") + "",
    nt = Ts(t[9]) + "",
    st = _s(t[9]) + "";
  return (
    r(t[17]),
    (z = new Ls({})),
    (N = new Ke({})),
    {
      c() {
        (e = c("div")),
          (n = c("div")),
          (s = c("div")),
          (i = c("div")),
          (l = c("span")),
          (g = y(tt)),
          (p = y(", ")),
          (x = y(et)),
          (D = E()),
          (M = y(nt)),
          (k = E()),
          (L = c("div")),
          C(z.$$.fragment),
          (O = E()),
          (R = c("div")),
          (B = E()),
          C(N.$$.fragment),
          (H = E()),
          (G = c("div")),
          (W = c("div")),
          (A = c("span")),
          (j = y(st)),
          (q = E()),
          (F = c("div")),
          (Y = y("right")),
          (U = E()),
          (Z = c("div")),
          this.h();
      },
      l(t) {
        e = o(t, "DIV", { class: !0, style: !0 });
        var r = a(e);
        n = o(r, "DIV", { class: !0, style: !0 });
        var c = a(n);
        s = o(c, "DIV", { class: !0 });
        var d = a(s);
        i = o(d, "DIV", { class: !0 });
        var f = a(i);
        l = o(f, "SPAN", { class: !0 });
        var u = a(l);
        (g = _(u, tt)),
          (p = _(u, ", ")),
          (x = _(u, et)),
          (D = I(u)),
          (M = _(u, nt)),
          u.forEach(h),
          f.forEach(h),
          (k = I(d)),
          (L = o(d, "DIV", { class: !0 }));
        var m = a(L);
        X(z.$$.fragment, m),
          (O = I(m)),
          (R = o(m, "DIV", { style: !0 })),
          a(R).forEach(h),
          (B = I(m)),
          X(N.$$.fragment, m),
          m.forEach(h),
          d.forEach(h),
          c.forEach(h),
          r.forEach(h),
          (H = I(t)),
          (G = o(t, "DIV", { class: !0, style: !0 }));
        var v = a(G);
        W = o(v, "DIV", { class: !0 });
        var $ = a(W);
        A = o($, "SPAN", {});
        var w = a(A);
        (j = _(w, st)),
          w.forEach(h),
          $.forEach(h),
          (q = I(v)),
          (F = o(v, "DIV", { class: !0 }));
        var E = a(F);
        (Y = _(E, "right")),
          E.forEach(h),
          v.forEach(h),
          (U = I(t)),
          (Z = o(t, "DIV", { class: !0, style: !0 })),
          a(Z).forEach(h),
          this.h();
      },
      h() {
        d(l, "class", "date svelte-18jq48c"),
          d(i, "class", "status-bar-content-top-left svelte-18jq48c"),
          f(R, "padding-left", "0.75rem"),
          d(L, "class", "status-bar-content-top-right svelte-18jq48c"),
          d(s, "class", "status-bar-content-top svelte-18jq48c"),
          d(n, "class", "status-bar-content svelte-18jq48c"),
          f(n, "height", t[5] + "px"),
          d(e, "class", "status-bar svelte-18jq48c"),
          f(e, "top", t[3] - t[5] + It(t[1]) + "px"),
          f(e, "height", t[5]),
          S(e, "expanding", t[6]),
          d(W, "class", "status-bar-status-left svelte-18jq48c"),
          d(F, "class", "status-bar-status-right svelte-18jq48c"),
          d(G, "class", "status-bar-status svelte-18jq48c"),
          f(G, "height", t[1] + "rem"),
          d(Z, "class", "status-bar-border svelte-18jq48c"),
          f(Z, "height", t[1] + "rem"),
          f(Z, "top", t[3] + "px"),
          S(Z, "expanding", t[6]),
          S(Z, "expanded", t[0]),
          S(Z, "isResizing", t[4]);
      },
      m(r, c) {
        u(r, e, c),
          b(e, n),
          b(n, s),
          b(s, i),
          b(i, l),
          b(l, g),
          b(l, p),
          b(l, x),
          b(l, D),
          b(l, M),
          b(s, k),
          b(s, L),
          V(z, L, null),
          b(L, O),
          b(L, R),
          b(L, B),
          V(N, L, null),
          t[18](e),
          u(r, H, c),
          u(r, G, c),
          b(G, W),
          b(W, A),
          b(A, j),
          b(G, q),
          b(G, F),
          b(F, Y),
          u(r, U, c),
          u(r, Z, c),
          t[19](Z),
          (J = !0),
          K ||
            ((Q = [
              m(window, "touchend", t[10]),
              m(window, "mousemove", t[11]),
              m(window, "mouseup", t[12]),
              m(window, "resize", t[17]),
              m(Z, "touchstart", t[13]),
              m(Z, "mousedown", t[15]),
              m(Z, "contextmenu", Os),
              m(Z, "touchmove", t[14]),
            ]),
            (K = !0));
      },
      p(t, [s]) {
        (!J || 512 & s) && tt !== (tt = bs(t[9], "short") + "") && T(g, tt),
          (!J || 512 & s) && et !== (et = Ds(t[9], "long") + "") && T(x, et),
          (!J || 512 & s) && nt !== (nt = Ts(t[9]) + "") && T(M, nt),
          (!J || 32 & s) && f(n, "height", t[5] + "px"),
          (!J || 42 & s) && f(e, "top", t[3] - t[5] + It(t[1]) + "px"),
          (!J || 32 & s) && f(e, "height", t[5]),
          64 & s && S(e, "expanding", t[6]),
          (!J || 512 & s) && st !== (st = _s(t[9]) + "") && T(j, st),
          (!J || 2 & s) && f(G, "height", t[1] + "rem"),
          (!J || 2 & s) && f(Z, "height", t[1] + "rem"),
          (!J || 8 & s) && f(Z, "top", t[3] + "px"),
          64 & s && S(Z, "expanding", t[6]),
          1 & s && S(Z, "expanded", t[0]),
          16 & s && S(Z, "isResizing", t[4]);
      },
      i(t) {
        J || (v(z.$$.fragment, t), v(N.$$.fragment, t), (J = !0));
      },
      o(t) {
        $(z.$$.fragment, t), $(N.$$.fragment, t), (J = !1);
      },
      d(n) {
        n && h(e),
          P(z),
          P(N),
          t[18](null),
          n && h(H),
          n && h(G),
          n && h(U),
          n && h(Z),
          t[19](null),
          (K = !1),
          w(Q);
      },
    }
  );
}
function Os(t) {
  t.preventDefault();
}
function Cs(t, e, n) {
  let s;
  O(t, Is, (t) => n(9, (s = t)));
  let i,
    r,
    l,
    { statusBarHeightInRem: c = 2.5 } = e,
    { expanded: o = !1 } = e,
    { bottomOffsetInPX: a = 0 } = e,
    h = !1,
    d = 0,
    f = !1,
    u = 0,
    m = 0;
  function g(t = !0) {
    n(3, (d = u)),
      t &&
        (n(6, (h = !0)),
        setTimeout(() => {
          n(6, (h = !1));
        }, 500));
  }
  function p(t = !0) {
    n(3, (d = 0)),
      t &&
        (n(6, (h = !0)),
        setTimeout(() => {
          n(6, (h = !1));
        }, 500));
  }
  function v(t) {
    n(4, (f = !0)), Ln(bn.GRABBING), n(8, (r.style.cursor = bn.GRABBING), r);
  }
  function $(t) {
    f &&
      ((m = d - t),
      n(3, (d = t)),
      d <= 0 ? n(3, (d = 0)) : d >= u && n(3, (d = u)));
  }
  function w(t) {
    f &&
      (Ln(bn.AUTO),
      n(8, (r.style.cursor = bn.GRAB), r),
      n(4, (f = !1)),
      m >= 2
        ? n(0, (o = !1))
        : m <= -2
        ? n(0, (o = !0))
        : d <= (u - 0) / 2
        ? n(0, (o = !1))
        : d >= (u - 0) / 2 && n(0, (o = !0)));
  }
  return (
    (t.$$set = (t) => {
      "statusBarHeightInRem" in t && n(1, (c = t.statusBarHeightInRem)),
        "expanded" in t && n(0, (o = t.expanded)),
        "bottomOffsetInPX" in t && n(16, (a = t.bottomOffsetInPX));
    }),
    (t.$$.update = () => {
      65582 & t.$$.dirty &&
        (n(5, (u = l - It(c) - a)), d >= u && n(3, (d = u))),
        17 & t.$$.dirty && (f || (o ? g(!0) : p(!0))),
        21 & t.$$.dirty && (f || (o ? g(!1) : p(!1)));
    }),
    [
      o,
      c,
      l,
      d,
      f,
      u,
      h,
      i,
      r,
      s,
      function (t) {
        f && (t.preventDefault(), w(t.changedTouches[0].clientY));
      },
      function (t) {
        f && (t.preventDefault(), $(t.clientY));
      },
      function (t) {
        f && (t.preventDefault(), w(t.clientY));
      },
      function (t) {
        v(t.targetTouches[0].clientY);
      },
      function (t) {
        f && (t.preventDefault(), $(t.targetTouches[0].clientY));
      },
      function (t) {
        v(t.clientY);
      },
      a,
      function () {
        n(2, (l = window.innerHeight));
      },
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (i = t), n(7, i);
        });
      },
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (r = t), n(8, r);
        });
      },
    ]
  );
}
class Xs extends n {
  constructor(t) {
    super(),
      s(this, t, Cs, zs, i, {
        statusBarHeightInRem: 1,
        expanded: 0,
        bottomOffsetInPX: 16,
      });
  }
}
function Ss(t) {
  let e, n, s, i;
  return {
    c() {
      (e = B("svg")),
        (n = B("path")),
        (s = B("path")),
        (i = B("path")),
        this.h();
    },
    l(t) {
      e = o(
        t,
        "svg",
        {
          version: !0,
          id: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
          x: !0,
          y: !0,
          viewBox: !0,
          style: !0,
          "xml:space": !0,
          class: !0,
        },
        1
      );
      var r = a(e);
      (n = o(r, "path", { id: !0, d: !0 }, 1)),
        a(n).forEach(h),
        (s = o(r, "path", { id: !0, d: !0 }, 1)),
        a(s).forEach(h),
        (i = o(r, "path", { id: !0, d: !0 }, 1)),
        a(i).forEach(h),
        r.forEach(h),
        this.h();
    },
    h() {
      d(n, "id", "XMLID_1_"),
        d(
          n,
          "d",
          "M24,120L24,120c-4.4,0-8-3.6-8-8V16c0-4.4,3.6-8,8-8h0c4.4,0,8,3.6,8,8v96C32,116.4,28.4,120,24,120z"
        ),
        d(s, "id", "XMLID_2_"),
        d(
          s,
          "d",
          "M104,120L104,120c-4.4,0-8-3.6-8-8V16c0-4.4,3.6-8,8-8h0c4.4,0,8,3.6,8,8v96C112,116.4,108.4,120,104,120z"
        ),
        d(i, "id", "XMLID_3_"),
        d(
          i,
          "d",
          "M64,120L64,120c-4.4,0-8-3.6-8-8V16c0-4.4,3.6-8,8-8h0c4.4,0,8,3.6,8,8v96C72,116.4,68.4,120,64,120z"
        ),
        d(e, "version", "1.1"),
        d(e, "id", "Layer_1"),
        d(e, "xmlns", "http://www.w3.org/2000/svg"),
        d(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        d(e, "x", "0px"),
        d(e, "y", "0px"),
        d(e, "viewBox", "0 0 128 128"),
        f(e, "enable-background", "new 0 0 128 128"),
        d(e, "xml:space", "preserve"),
        d(e, "class", "svelte-u5nyuv");
    },
    m(t, r) {
      u(t, e, r), b(e, n), b(e, s), b(e, i);
    },
    p: M,
    i: M,
    o: M,
    d(t) {
      t && h(e);
    },
  };
}
class Vs extends n {
  constructor(t) {
    super(), s(this, t, null, Ss, i, {});
  }
}
function Ps(t) {
  let e, n, s;
  return {
    c() {
      (e = B("svg")), (n = B("path")), (s = B("path")), this.h();
    },
    l(t) {
      e = o(
        t,
        "svg",
        {
          version: !0,
          id: !0,
          xmlns: !0,
          "xmlns:xlink": !0,
          x: !0,
          y: !0,
          viewBox: !0,
          style: !0,
          "xml:space": !0,
          class: !0,
        },
        1
      );
      var i = a(e);
      (n = o(i, "path", { id: !0, d: !0 }, 1)),
        a(n).forEach(h),
        (s = o(i, "path", { id: !0, d: !0 }, 1)),
        a(s).forEach(h),
        i.forEach(h),
        this.h();
    },
    h() {
      d(n, "id", "XMLID_2_"),
        d(
          n,
          "d",
          "M88.9,125.8l-61-56.6c-3.1-2.9-3.1-7.6,0-10.5l0,0c3.1-2.9,8.2-2.9,11.3,0l61,56.6c3.1,2.9,3.1,7.6,0,10.5\n\tl0,0C97.1,128.7,92,128.7,88.9,125.8z"
        ),
        d(s, "id", "XMLID_1_"),
        d(
          s,
          "d",
          "M100.2,12.7l-61,56.6c-3.1,2.9-8.2,2.9-11.3,0l0,0c-3.1-2.9-3.1-7.6,0-10.5l61-56.6c3.1-2.9,8.2-2.9,11.3,0\n\tl0,0C103.3,5,103.3,9.8,100.2,12.7z"
        ),
        d(e, "version", "1.1"),
        d(e, "id", "Layer_1"),
        d(e, "xmlns", "http://www.w3.org/2000/svg"),
        d(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        d(e, "x", "0px"),
        d(e, "y", "0px"),
        d(e, "viewBox", "0 0 128 128"),
        f(e, "enable-background", "new 0 0 128 128"),
        d(e, "xml:space", "preserve"),
        d(e, "class", "svelte-u5nyuv");
    },
    m(t, i) {
      u(t, e, i), b(e, n), b(e, s);
    },
    p: M,
    i: M,
    o: M,
    d(t) {
      t && h(e);
    },
  };
}
class Rs extends n {
  constructor(t) {
    super(), s(this, t, null, Ps, i, {});
  }
}
function Bs(t) {
  let e, n, s, i, r, l, m, g, p, w, x, y, _;
  return (
    (i = new Vs({})),
    (g = new kn({})),
    (y = new Rs({})),
    {
      c() {
        (e = c("div")),
          (n = c("div")),
          (s = c("div")),
          C(i.$$.fragment),
          (r = E()),
          (l = c("div")),
          (m = c("div")),
          C(g.$$.fragment),
          (p = E()),
          (w = c("div")),
          (x = c("div")),
          C(y.$$.fragment),
          this.h();
      },
      l(t) {
        e = o(t, "DIV", { class: !0, style: !0 });
        var c = a(e);
        n = o(c, "DIV", { class: !0 });
        var d = a(n);
        s = o(d, "DIV", { style: !0 });
        var f = a(s);
        X(i.$$.fragment, f),
          f.forEach(h),
          d.forEach(h),
          (r = I(c)),
          (l = o(c, "DIV", { class: !0 }));
        var u = a(l);
        m = o(u, "DIV", { style: !0 });
        var v = a(m);
        X(g.$$.fragment, v),
          v.forEach(h),
          u.forEach(h),
          (p = I(c)),
          (w = o(c, "DIV", { class: !0 }));
        var $ = a(w);
        x = o($, "DIV", { style: !0 });
        var E = a(x);
        X(y.$$.fragment, E), E.forEach(h), $.forEach(h), c.forEach(h), this.h();
      },
      h() {
        f(s, "width", "2rem"),
          d(
            n,
            "class",
            "app-drawer-bar-button open-windows-button-container svelte-1bfl2tr"
          ),
          f(m, "height", "95%"),
          f(m, "width", "100%"),
          d(
            l,
            "class",
            "app-drawer-bar-button middle-button-container svelte-1bfl2tr"
          ),
          f(x, "width", "2rem"),
          d(
            w,
            "class",
            "app-drawer-bar-button return-button-container svelte-1bfl2tr"
          ),
          d(e, "class", "app-drawer-bar svelte-1bfl2tr"),
          f(e, "height", t[0] + "rem");
      },
      m(t, c) {
        u(t, e, c),
          b(e, n),
          b(n, s),
          V(i, s, null),
          b(e, r),
          b(e, l),
          b(l, m),
          V(g, m, null),
          b(e, p),
          b(e, w),
          b(w, x),
          V(y, x, null),
          (_ = !0);
      },
      p(t, [n]) {
        (!_ || 1 & n) && f(e, "height", t[0] + "rem");
      },
      i(t) {
        _ ||
          (v(i.$$.fragment, t),
          v(g.$$.fragment, t),
          v(y.$$.fragment, t),
          (_ = !0));
      },
      o(t) {
        $(i.$$.fragment, t), $(g.$$.fragment, t), $(y.$$.fragment, t), (_ = !1);
      },
      d(t) {
        t && h(e), P(i), P(g), P(y);
      },
    }
  );
}
function Ns(t, e, n) {
  let { buttonHeightInRem: s = 2.5 } = e;
  return (
    (t.$$set = (t) => {
      "buttonHeightInRem" in t && n(0, (s = t.buttonHeightInRem));
    }),
    [s]
  );
}
class Hs extends n {
  constructor(t) {
    super(), s(this, t, Ns, Bs, i, { buttonHeightInRem: 0 });
  }
}
function Gs(t, e, n) {
  const s = t.slice();
  return (s[1] = e[n]), s;
}
function Ws(t) {
  let e, n;
  return (
    (e = new gt({
      props: {
        x: t[0].x,
        y: t[0].y,
        z_index: 10,
        $$slots: { options: [js] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        C(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      p(t, n) {
        const s = {};
        1 & n && (s.x = t[0].x),
          1 & n && (s.y = t[0].y),
          17 & n && (s.$$scope = { dirty: n, ctx: t }),
          e.$set(s);
      },
      i(t) {
        n || (v(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        P(e, t);
      },
    }
  );
}
function As(t) {
  let e, n;
  return (
    (e = new wt({
      props: { name: t[1].name, icon: t[1].icon, onClick: t[1].onClick },
    })),
    {
      c() {
        C(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      p(t, n) {
        const s = {};
        1 & n && (s.name = t[1].name),
          1 & n && (s.icon = t[1].icon),
          1 & n && (s.onClick = t[1].onClick),
          e.$set(s);
      },
      i(t) {
        n || (v(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        P(e, t);
      },
    }
  );
}
function js(t) {
  let e,
    n,
    s = t[0].options,
    i = [];
  for (let l = 0; l < s.length; l += 1) i[l] = As(Gs(t, s, l));
  const r = (t) =>
    $(i[t], 1, 1, () => {
      i[t] = null;
    });
  return {
    c() {
      e = c("div");
      for (let t = 0; t < i.length; t += 1) i[t].c();
      this.h();
    },
    l(t) {
      e = o(t, "DIV", { slot: !0 });
      var n = a(e);
      for (let e = 0; e < i.length; e += 1) i[e].l(n);
      n.forEach(h), this.h();
    },
    h() {
      d(e, "slot", "options");
    },
    m(t, s) {
      u(t, e, s);
      for (let n = 0; n < i.length; n += 1) i[n].m(e, null);
      n = !0;
    },
    p(t, n) {
      if (1 & n) {
        let l;
        for (s = t[0].options, l = 0; l < s.length; l += 1) {
          const r = Gs(t, s, l);
          i[l]
            ? (i[l].p(r, n), v(i[l], 1))
            : ((i[l] = As(r)), i[l].c(), v(i[l], 1), i[l].m(e, null));
        }
        for (L(), l = s.length; l < i.length; l += 1) r(l);
        z();
      }
    },
    i(t) {
      if (!n) {
        for (let t = 0; t < s.length; t += 1) v(i[t]);
        n = !0;
      }
    },
    o(t) {
      i = i.filter(Boolean);
      for (let e = 0; e < i.length; e += 1) $(i[e]);
      n = !1;
    },
    d(t) {
      t && h(e), H(i, t);
    },
  };
}
function qs(t) {
  let e, n, s, i, r, l, f, m, g, p, w, x;
  (n = new Hn({ props: { src: Fs } })),
    (i = new Hs({ props: { buttonHeightInRem: 3.5 } })),
    (f = new ye({
      props: {
        topOffset: 2.5,
        columnWidth: 5,
        columnHeight: 6,
        gap: 1.5,
        padding: 1,
      },
    })),
    (g = new Xs({
      props: { statusBarHeightInRem: 2.5, bottomOffsetInPX: It(3.5) },
    }));
  let y = t[0].show && Ws(t);
  return {
    c() {
      (e = E()),
        C(n.$$.fragment),
        (s = E()),
        C(i.$$.fragment),
        (r = E()),
        (l = c("div")),
        C(f.$$.fragment),
        (m = E()),
        C(g.$$.fragment),
        (p = E()),
        y && y.c(),
        (w = k()),
        this.h();
    },
    l(t) {
      J('[data-svelte="svelte-1kjimo1"]', document.head).forEach(h),
        (e = I(t)),
        X(n.$$.fragment, t),
        (s = I(t)),
        X(i.$$.fragment, t),
        (r = I(t)),
        (l = o(t, "DIV", { class: !0 }));
      var c = a(l);
      X(f.$$.fragment, c),
        c.forEach(h),
        (m = I(t)),
        X(g.$$.fragment, t),
        (p = I(t)),
        y && y.l(t),
        (w = k()),
        this.h();
    },
    h() {
      (document.title = "Jitze Jan Kerkstra"),
        d(l, "class", "grid-container svelte-1mmwtdj");
    },
    m(t, c) {
      u(t, e, c),
        V(n, t, c),
        u(t, s, c),
        V(i, t, c),
        u(t, r, c),
        u(t, l, c),
        V(f, l, null),
        u(t, m, c),
        V(g, t, c),
        u(t, p, c),
        y && y.m(t, c),
        u(t, w, c),
        (x = !0);
    },
    p(t, [e]) {
      t[0].show
        ? y
          ? (y.p(t, e), 1 & e && v(y, 1))
          : ((y = Ws(t)), y.c(), v(y, 1), y.m(w.parentNode, w))
        : y &&
          (L(),
          $(y, 1, 1, () => {
            y = null;
          }),
          z());
    },
    i(t) {
      x ||
        (v(n.$$.fragment, t),
        v(i.$$.fragment, t),
        v(f.$$.fragment, t),
        v(g.$$.fragment, t),
        v(y),
        (x = !0));
    },
    o(t) {
      $(n.$$.fragment, t),
        $(i.$$.fragment, t),
        $(f.$$.fragment, t),
        $(g.$$.fragment, t),
        $(y),
        (x = !1);
    },
    d(t) {
      t && h(e),
        P(n, t),
        t && h(s),
        P(i, t),
        t && h(r),
        t && h(l),
        P(f),
        t && h(m),
        P(g, t),
        t && h(p),
        y && y.d(t),
        t && h(w);
    },
  };
}
let Fs = "/images/wallpapers/custom-design-01-1280x720.png";
function Ys(t, e, n) {
  let s;
  return O(t, ot, (t) => n(0, (s = t))), [s];
}
class Us extends n {
  constructor(t) {
    super(), s(this, t, Ys, qs, i, {});
  }
}
function Zs(t) {
  let e, n, s, i, r, l, m, g, p, w, x, D, T, k, L;
  return (
    (i = new je({})),
    {
      c() {
        (e = c("div")),
          (n = c("div")),
          (s = c("div")),
          C(i.$$.fragment),
          (r = E()),
          (l = c("div")),
          (m = E()),
          (g = c("div")),
          (p = c("div")),
          (w = c("div")),
          (x = E()),
          (D = c("div")),
          (T = c("span")),
          (k = y("Loading Website")),
          this.h();
      },
      l(t) {
        e = o(t, "DIV", { class: !0 });
        var c = a(e);
        n = o(c, "DIV", { class: !0 });
        var d = a(n);
        s = o(d, "DIV", { class: !0 });
        var f = a(s);
        X(i.$$.fragment, f),
          f.forEach(h),
          (r = I(d)),
          (l = o(d, "DIV", { style: !0 })),
          a(l).forEach(h),
          (m = I(d)),
          (g = o(d, "DIV", { class: !0 }));
        var u = a(g);
        p = o(u, "DIV", { class: !0 });
        var v = a(p);
        (w = o(v, "DIV", { class: !0 })),
          a(w).forEach(h),
          v.forEach(h),
          u.forEach(h),
          (x = I(d)),
          (D = o(d, "DIV", { class: !0 }));
        var $ = a(D);
        T = o($, "SPAN", { class: !0 });
        var E = a(T);
        (k = _(E, "Loading Website")),
          E.forEach(h),
          $.forEach(h),
          d.forEach(h),
          c.forEach(h),
          this.h();
      },
      h() {
        d(s, "class", "logo-container svelte-13a2ern"),
          f(l, "margin-top", "1rem"),
          d(w, "class", "loading-bar-inner svelte-13a2ern"),
          d(p, "class", "loading-bar-outer svelte-13a2ern"),
          d(g, "class", "loading-bar-container svelte-13a2ern"),
          d(T, "class", "text-under-loading-bar svelte-13a2ern"),
          d(D, "class", "text-under-loading-bar-container svelte-13a2ern"),
          d(n, "class", "loading-screen-center svelte-13a2ern"),
          d(e, "class", "loading-screen svelte-13a2ern");
      },
      m(t, c) {
        u(t, e, c),
          b(e, n),
          b(n, s),
          V(i, s, null),
          b(n, r),
          b(n, l),
          b(n, m),
          b(n, g),
          b(g, p),
          b(p, w),
          b(n, x),
          b(n, D),
          b(D, T),
          b(T, k),
          (L = !0);
      },
      p: M,
      i(t) {
        L || (v(i.$$.fragment, t), (L = !0));
      },
      o(t) {
        $(i.$$.fragment, t), (L = !1);
      },
      d(t) {
        t && h(e), P(i);
      },
    }
  );
}
class Js extends n {
  constructor(t) {
    super(), s(this, t, null, Zs, i, {});
  }
}
function Ks(t) {
  let e, n;
  return (
    (e = new Js({})),
    {
      c() {
        C(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      p: M,
      i(t) {
        n || (v(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        P(e, t);
      },
    }
  );
}
function Qs(t) {
  let e, n, s, i;
  const r = [ei, ti],
    l = [];
  function c(t, e) {
    return t[1] ? 0 : 1;
  }
  return (
    (e = c(t)),
    (n = l[e] = r[e](t)),
    {
      c() {
        n.c(), (s = k());
      },
      l(t) {
        n.l(t), (s = k());
      },
      m(t, n) {
        l[e].m(t, n), u(t, s, n), (i = !0);
      },
      p(t, i) {
        let o = e;
        (e = c(t)),
          e !== o &&
            (L(),
            $(l[o], 1, 1, () => {
              l[o] = null;
            }),
            z(),
            (n = l[e]),
            n || ((n = l[e] = r[e](t)), n.c()),
            v(n, 1),
            n.m(s.parentNode, s));
      },
      i(t) {
        i || (v(n), (i = !0));
      },
      o(t) {
        $(n), (i = !1);
      },
      d(t) {
        l[e].d(t), t && h(s);
      },
    }
  );
}
function ti(t) {
  let e, n;
  return (
    (e = new Us({})),
    {
      c() {
        C(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      i(t) {
        n || (v(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        P(e, t);
      },
    }
  );
}
function ei(t) {
  let e, n;
  return (
    (e = new ys({})),
    {
      c() {
        C(e.$$.fragment);
      },
      l(t) {
        X(e.$$.fragment, t);
      },
      m(t, s) {
        V(e, t, s), (n = !0);
      },
      i(t) {
        n || (v(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        $(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        P(e, t);
      },
    }
  );
}
function ni(t) {
  let e, n, s, i, r;
  const l = [Qs, Ks],
    c = [];
  function o(t, e) {
    return t[0] ? 0 : 1;
  }
  return (
    (n = o(t)),
    (s = c[n] = l[n](t)),
    {
      c() {
        (e = E()), s.c(), (i = k()), this.h();
      },
      l(t) {
        J('[data-svelte="svelte-1kjimo1"]', document.head).forEach(h),
          (e = I(t)),
          s.l(t),
          (i = k()),
          this.h();
      },
      h() {
        document.title = "Jitze Jan Kerkstra";
      },
      m(t, s) {
        u(t, e, s), c[n].m(t, s), u(t, i, s), (r = !0);
      },
      p(t, [e]) {
        let r = n;
        (n = o(t)),
          n === r
            ? c[n].p(t, e)
            : (L(),
              $(c[r], 1, 1, () => {
                c[r] = null;
              }),
              z(),
              (s = c[n]),
              s ? s.p(t, e) : ((s = c[n] = l[n](t)), s.c()),
              v(s, 1),
              s.m(i.parentNode, i));
      },
      i(t) {
        r || (v(s), (r = !0));
      },
      o(t) {
        $(s), (r = !1);
      },
      d(t) {
        t && h(e), c[n].d(t), t && h(i);
      },
    }
  );
}
function si(t, e, n) {
  let s;
  O(t, nt, (t) => n(1, (s = t)));
  let i = !1;
  return (
    N(() => {
      n(0, (i = !0));
    }),
    [i, s]
  );
}
export default class extends n {
  constructor(t) {
    super(), s(this, t, si, ni, i, {});
  }
}
