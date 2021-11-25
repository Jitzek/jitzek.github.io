import {
  H as t,
  C as e,
  S as n,
  i,
  s,
  K as o,
  D as r,
  e as l,
  c,
  a,
  d as h,
  b as u,
  E as d,
  f,
  L as m,
  M as g,
  F as p,
  x as $,
  u as v,
  N as w,
  G as x,
  k as E,
  t as b,
  n as T,
  g as y,
  I,
  O,
  h as D,
  J as k,
  l as z,
  r as C,
  w as S,
  P as R,
  j as _,
  m as M,
  Q as P,
  o as B,
  v as V,
  R as N,
  T as L,
  A as G,
  U as H,
  V as A,
  W,
  X as Y,
  Y as F,
  Z,
  _ as U,
  $ as X,
  a0 as q,
  a1 as j,
  a2 as J,
  a3 as K,
  p as Q,
  q as tt,
  B as et,
  a4 as nt,
} from "../chunks/vendor-9c548c9b.js";
import {
  d as it,
  m as st,
  f as ot,
  D as rt,
  T as lt,
  t as ct,
} from "../chunks/ThemeStore-51fa65f1.js";
function at(t) {
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
const ht = e(
    new (class {
      constructor() {
        this.options = [];
      }
    })()
  ),
  ut = t(ht, (t) => t);
function dt(t, e, n) {
  ht.update((i) => ((i.x = t), (i.y = e), (i.options = n), (i.show = !0), i));
}
function ft() {
  ht.update((t) => ((t.show = !1), t));
}
const mt = (t) => ({}),
  gt = (t) => ({});
function pt(t) {
  let e, n, i, s;
  o(t[9]);
  const x = t[8].options,
    E = r(x, t, t[7], gt);
  return {
    c() {
      (e = l("div")), E && E.c(), this.h();
    },
    l(t) {
      e = c(t, "DIV", { class: !0, style: !0 });
      var n = a(e);
      E && E.l(n), n.forEach(h), this.h();
    },
    h() {
      u(e, "class", "context-menu svelte-ke6p7j"), d(e, "z-index", t[0]);
    },
    m(o, r) {
      f(o, e, r),
        E && E.m(e, null),
        t[10](e),
        (n = !0),
        i ||
          ((s = [
            m(window, "resize", t[9]),
            g(at.call(null, e)),
            m(e, "clickoutside", t[11]),
          ]),
          (i = !0));
    },
    p(t, [i]) {
      E && E.p && (!n || 128 & i) && p(E, x, t, t[7], n ? i : -1, mt, gt),
        (!n || 1 & i) && d(e, "z-index", t[0]);
    },
    i(t) {
      n || ($(E, t), (n = !0));
    },
    o(t) {
      v(E, t), (n = !1);
    },
    d(n) {
      n && h(e), E && E.d(n), t[10](null), (i = !1), w(s);
    },
  };
}
function $t(t, e, n) {
  let i,
    s,
    o,
    { $$slots: r = {}, $$scope: l } = e,
    { x: c } = e,
    { y: a } = e,
    { z_index: h } = e;
  function u(t) {
    ft();
  }
  return (
    (t.$$set = (t) => {
      "x" in t && n(5, (c = t.x)),
        "y" in t && n(6, (a = t.y)),
        "z_index" in t && n(0, (h = t.z_index)),
        "$$scope" in t && n(7, (l = t.$$scope));
    }),
    (t.$$.update = () => {
      110 & t.$$.dirty &&
        o &&
        (n(3, (o.style.left = `${i / 2 < c ? c - o.offsetWidth : c}px`), o),
        n(3, (o.style.top = `${s / 2 < a ? a - o.offsetHeight : a}px`), o));
    }),
    [
      h,
      i,
      s,
      o,
      u,
      c,
      a,
      l,
      r,
      function () {
        n(1, (i = window.innerWidth)), n(2, (s = window.innerHeight));
      },
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (o = t), n(3, o), n(1, i), n(2, s), n(5, c), n(6, a);
        });
      },
      (t) => u(),
    ]
  );
}
class vt extends n {
  constructor(t) {
    super(), i(this, t, $t, pt, s, { x: 5, y: 6, z_index: 0 });
  }
}
function wt(t) {
  let e, n;
  return {
    c() {
      (e = l("img")), this.h();
    },
    l(t) {
      (e = c(t, "IMG", { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      e.src !== (n = t[1]) && u(e, "src", n),
        u(e, "alt", t[0]),
        u(e, "class", "svelte-1ejvmza");
    },
    m(t, n) {
      f(t, e, n);
    },
    p(t, i) {
      2 & i && e.src !== (n = t[1]) && u(e, "src", n),
        1 & i && u(e, "alt", t[0]);
    },
    d(t) {
      t && h(e);
    },
  };
}
function xt(t) {
  let e,
    n,
    i,
    s,
    o,
    r,
    d,
    g = t[1] && wt(t);
  return {
    c() {
      (e = l("button")),
        (n = l("div")),
        g && g.c(),
        (i = E()),
        (s = l("span")),
        (o = b(t[0])),
        this.h();
    },
    l(r) {
      e = c(r, "BUTTON", { class: !0 });
      var l = a(e);
      n = c(l, "DIV", { class: !0 });
      var u = a(n);
      g && g.l(u), u.forEach(h), (i = T(l)), (s = c(l, "SPAN", { class: !0 }));
      var d = a(s);
      (o = y(d, t[0])), d.forEach(h), l.forEach(h), this.h();
    },
    h() {
      u(n, "class", "icon-container svelte-1ejvmza"),
        u(s, "class", "svelte-1ejvmza"),
        u(e, "class", "context-menu-option svelte-1ejvmza");
    },
    m(l, c) {
      f(l, e, c),
        I(e, n),
        g && g.m(n, null),
        I(e, i),
        I(e, s),
        I(s, o),
        r ||
          ((d = m(e, "click", function () {
            O(t[2]()) && t[2]().apply(this, arguments);
          })),
          (r = !0));
    },
    p(e, [i]) {
      (t = e)[1]
        ? g
          ? g.p(t, i)
          : ((g = wt(t)), g.c(), g.m(n, null))
        : g && (g.d(1), (g = null)),
        1 & i && D(o, t[0]);
    },
    i: k,
    o: k,
    d(t) {
      t && h(e), g && g.d(), (r = !1), d();
    },
  };
}
function Et(t, e, n) {
  let { name: i } = e,
    { icon: s = null } = e,
    { onClick: o = () => {} } = e;
  return (
    (t.$$set = (t) => {
      "name" in t && n(0, (i = t.name)),
        "icon" in t && n(1, (s = t.icon)),
        "onClick" in t && n(2, (o = t.onClick));
    }),
    [i, s, o]
  );
}
class bt extends n {
  constructor(t) {
    super(), i(this, t, Et, xt, s, { name: 0, icon: 1, onClick: 2 });
  }
}
function Tt(t) {
  return t * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
class yt {
  constructor(t, e, n, i, s, o, r, l) {
    (this.item = t),
      (this.row = e),
      (this.column = n),
      (this.x = i),
      (this.y = s),
      (this.width = o),
      (this.height = r),
      (this.gap = l);
  }
  collidesWith(t, e) {
    return (
      t > this.x - Tt(this.width / 2) + Tt(this.gap / 2) &&
      t < this.x + Tt(this.width / 2) + Tt(this.gap / 2) &&
      e > this.y - Tt(this.height / 2) + Tt(this.gap / 2) &&
      e < this.y + Tt(this.height / 2) + Tt(this.gap / 2)
    );
  }
}
let It = e(
    new (class {
      constructor() {
        (this.gridItems = []),
          (this.gridPositions = []),
          (this.gridTemplateColumns = ""),
          (this.gridItemBeingDragged = null);
      }
      rearrangeGrid(t = this.prevScreenWidth, e = this.prevScreenHeight) {
        (this.prevScreenWidth = t), (this.prevScreenHeight = e);
        let n = Math.floor(
            (e - Tt(this.padding + this.bottomOffset + this.topOffset)) /
              Tt(this.columnHeight + this.gap)
          ),
          i = Math.round(
            (t - Tt(this.padding)) /
              Tt(this.columnWidth + this.gap + this.widthOffset)
          );
        (this.gridTemplateColumns = `repeat(${i}, ${this.columnWidth}rem)`),
          (this.gridPositions = []);
        for (let s = 1; s < n + 1; s++)
          for (let t = 1; t < i + 1; t++)
            this.gridPositions.push(
              new yt(
                null,
                s,
                t,
                t * Tt(this.columnWidth + this.gap) -
                  Tt(this.gap + this.columnWidth / 2),
                s * Tt(this.columnHeight + this.gap) -
                  Tt(this.gap + this.columnHeight / 2),
                this.columnWidth,
                this.columnHeight,
                this.gap
              )
            );
        this.gridPositions.length <= 0 ||
          this.gridItems.forEach((t) => {
            let e = t.preferredRow,
              s = t.preferredColumn;
            (t.preferredRow < 0 || t.preferredRow > n) && (e = n),
              (t.preferredColumn < 0 || t.preferredColumn > i) && (s = i);
            let o = this.gridPositions.filter((t) => null == t.item);
            if (o.length > 0) {
              let n = o.reduce((t, n) =>
                Math.abs(n.row - e) < Math.abs(t.row - e) ||
                Math.abs(n.column - s) < Math.abs(t.column - s)
                  ? n
                  : t
              );
              (n.item = t), (t.position = n);
            }
          });
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
          .reduce((n, i) =>
            Math.abs(i.x - t) < Math.abs(n.x - t) ||
            Math.abs(i.y - e) < Math.abs(n.y - e) - Tt(this.columnHeight)
              ? i
              : n
          );
      }
    })()
  ),
  Ot = t(It, (t) => t);
function Dt(t) {
  It.update((e) => ((e.gridItems.find((e) => e.id === t.id).selected = !0), e));
}
function kt(t) {
  It.update((e) => ((e.gridItems.find((e) => e.id === t.id).selected = !1), e));
}
function zt(t) {
  let e,
    n,
    i,
    s,
    o,
    r,
    d,
    g,
    p,
    $,
    v = t[0].name + "";
  return {
    c() {
      (e = l("div")),
        (n = l("div")),
        (i = l("img")),
        (r = E()),
        (d = l("p")),
        (g = b(v)),
        this.h();
    },
    l(t) {
      e = c(t, "DIV", { class: !0 });
      var s = a(e);
      n = c(s, "DIV", { class: !0 });
      var o = a(n);
      (i = c(o, "IMG", { src: !0, alt: !0, draggable: !0, class: !0 })),
        o.forEach(h),
        (r = T(s)),
        (d = c(s, "P", { class: !0 }));
      var l = a(d);
      (g = y(l, v)), l.forEach(h), s.forEach(h), this.h();
    },
    h() {
      i.src !== (s = t[0].icon) && u(i, "src", s),
        u(i, "alt", (o = t[0].name)),
        u(i, "draggable", "false"),
        u(i, "class", "svelte-ptyyp6"),
        u(n, "class", "image-container svelte-ptyyp6"),
        u(d, "class", "svelte-ptyyp6"),
        u(e, "class", "program svelte-ptyyp6");
    },
    m(s, o) {
      f(s, e, o),
        I(e, n),
        I(n, i),
        I(e, r),
        I(e, d),
        I(d, g),
        p || (($ = m(e, "contextmenu", t[1])), (p = !0));
    },
    p(t, [e]) {
      1 & e && i.src !== (s = t[0].icon) && u(i, "src", s),
        1 & e && o !== (o = t[0].name) && u(i, "alt", o),
        1 & e && v !== (v = t[0].name + "") && D(g, v);
    },
    i: k,
    o: k,
    d(t) {
      t && h(e), (p = !1), $();
    },
  };
}
function Ct(t, e, n) {
  let { id: i } = e,
    { program: s } = e;
  return (
    (t.$$set = (t) => {
      "id" in t && n(2, (i = t.id)), "program" in t && n(0, (s = t.program));
    }),
    [
      s,
      function (t) {
        t.preventDefault(),
          dt(t.clientX, t.clientY, [
            {
              name: "Launch",
              icon: s.icon,
              onClick: () => {
                ft(), s.createProcess().bringToTop();
              },
            },
            {
              name: "Remove Desktop Shortcut",
              icon: null,
              onClick: () => {
                ft(),
                  (function (t) {
                    It.update(
                      (e) => (e.removeGridItem(t), e.rearrangeGrid(), e)
                    );
                  })(i);
              },
            },
          ]);
      },
      i,
    ]
  );
}
class St extends n {
  constructor(t) {
    super(), i(this, t, Ct, zt, s, { id: 2, program: 0 });
  }
}
function Rt(t) {
  let e, n, i, s, o, r, p;
  return (
    (i = new St({ props: { id: t[0].item.id, program: t[0].item.program } })),
    {
      c() {
        (e = l("div")), (n = l("div")), _(i.$$.fragment), this.h();
      },
      l(t) {
        e = c(t, "DIV", { class: !0 });
        var s = a(e);
        n = c(s, "DIV", { class: !0, style: !0, draggable: !0 });
        var o = a(n);
        M(i.$$.fragment, o), o.forEach(h), s.forEach(h), this.h();
      },
      h() {
        u(n, "class", "grid-element svelte-1b9m9ci"),
          d(n, "grid-row", t[0].row),
          d(n, "grid-column", t[0].column),
          d(n, "width", t[0].width + "rem"),
          d(n, "height", t[0].height + "rem"),
          u(n, "draggable", !0),
          P(n, "desktop", it),
          P(n, "mobile", st),
          u(
            e,
            "class",
            (s =
              "grid-element-overlay " +
              (t[0].item.selected ? "selected" : "") +
              " svelte-1b9m9ci")
          ),
          P(e, "desktop", it),
          P(e, "mobile", st);
      },
      m(s, l) {
        f(s, e, l),
          I(e, n),
          B(i, n, null),
          (o = !0),
          r ||
            ((p = [
              m(n, "contextmenu", Bt),
              m(n, "touchstart", t[4]),
              m(n, "touchmove", t[5]),
              m(n, "touchend", t[6]),
              m(n, "dragstart", t[7]),
              m(n, "dragend", t[8]),
              m(n, "drop", Pt),
              g(at.call(null, n)),
              m(n, "clickoutside", t[9]),
              m(n, "mousedown", t[10]),
              m(n, "dblclick", t[11]),
            ]),
            (r = !0));
      },
      p(t, r) {
        const l = {};
        1 & r && (l.id = t[0].item.id),
          1 & r && (l.program = t[0].item.program),
          i.$set(l),
          (!o || 1 & r) && d(n, "grid-row", t[0].row),
          (!o || 1 & r) && d(n, "grid-column", t[0].column),
          (!o || 1 & r) && d(n, "width", t[0].width + "rem"),
          (!o || 1 & r) && d(n, "height", t[0].height + "rem"),
          (!o ||
            (1 & r &&
              s !==
                (s =
                  "grid-element-overlay " +
                  (t[0].item.selected ? "selected" : "") +
                  " svelte-1b9m9ci"))) &&
            u(e, "class", s),
          1 & r && P(e, "desktop", it),
          1 & r && P(e, "mobile", st);
      },
      i(t) {
        o || ($(i.$$.fragment, t), (o = !0));
      },
      o(t) {
        v(i.$$.fragment, t), (o = !1);
      },
      d(t) {
        t && h(e), V(i), (r = !1), w(p);
      },
    }
  );
}
function _t(t) {
  let e;
  return {
    c() {
      (e = l("div")), this.h();
    },
    l(t) {
      (e = c(t, "DIV", { class: !0, style: !0 })), a(e).forEach(h), this.h();
    },
    h() {
      u(e, "class", "grid-element svelte-1b9m9ci"),
        d(e, "grid-row", t[0].row),
        d(e, "grid-column", t[0].column),
        d(e, "width", t[0].width + "rem"),
        d(e, "height", t[0].height + "rem");
    },
    m(t, n) {
      f(t, e, n);
    },
    p(t, n) {
      1 & n && d(e, "grid-row", t[0].row),
        1 & n && d(e, "grid-column", t[0].column),
        1 & n && d(e, "width", t[0].width + "rem"),
        1 & n && d(e, "height", t[0].height + "rem");
    },
    i: k,
    o: k,
    d(t) {
      t && h(e);
    },
  };
}
function Mt(t) {
  let e, n, i, s, o, r;
  const l = [_t, Rt],
    c = [];
  function a(t, e) {
    return null == t[0].item ? 0 : 1;
  }
  return (
    (e = a(t)),
    (n = c[e] = l[e](t)),
    {
      c() {
        n.c(), (i = z());
      },
      l(t) {
        n.l(t), (i = z());
      },
      m(n, l) {
        c[e].m(n, l),
          f(n, i, l),
          (s = !0),
          o ||
            ((r = [
              m(window, "dragover", t[1]),
              m(window, "keydown", t[2]),
              m(window, "keyup", t[3]),
            ]),
            (o = !0));
      },
      p(t, [s]) {
        let o = e;
        (e = a(t)),
          e === o
            ? c[e].p(t, s)
            : (C(),
              v(c[o], 1, 1, () => {
                c[o] = null;
              }),
              S(),
              (n = c[e]),
              n ? n.p(t, s) : ((n = c[e] = l[e](t)), n.c()),
              $(n, 1),
              n.m(i.parentNode, i));
      },
      i(t) {
        s || ($(n), (s = !0));
      },
      o(t) {
        v(n), (s = !1);
      },
      d(t) {
        c[e].d(t), t && h(i), (o = !1), w(r);
      },
    }
  );
}
function Pt(t) {
  t.preventDefault();
}
const Bt = (t) => t.preventDefault();
function Vt(t, e, n) {
  let i;
  R(t, Ot, (t) => n(28, (i = t)));
  let s,
    o,
    r,
    { gridPosition: l } = e,
    { onDragStart: c = (t, e, n) => {} } = e,
    { onDragMove: a = (t, e, n) => {} } = e,
    { onDragEnd: h = (t, e, n) => {} } = e,
    { onTouchStart: u = (t, e, n) => {} } = e,
    { onTouchMove: d = (t, e, n) => {} } = e,
    { onTouchEnd: f = (t, e, n) => {} } = e,
    m = !1,
    g = !1,
    p = !1,
    $ = !1;
  function v(t, e) {
    m = !0;
  }
  function w(t, e) {
    m && ((o = t), (r = e));
  }
  return (
    (t.$$set = (t) => {
      "gridPosition" in t && n(0, (l = t.gridPosition)),
        "onDragStart" in t && n(12, (c = t.onDragStart)),
        "onDragMove" in t && n(13, (a = t.onDragMove)),
        "onDragEnd" in t && n(14, (h = t.onDragEnd)),
        "onTouchStart" in t && n(15, (u = t.onTouchStart)),
        "onTouchMove" in t && n(16, (d = t.onTouchMove)),
        "onTouchEnd" in t && n(17, (f = t.onTouchEnd));
    }),
    [
      l,
      function (t) {
        if ((t.preventDefault(), m)) {
          let e = i.getGridPositionAtPosition(t.clientX, t.clientY);
          e && null != e.item && e.item.id != e.item.id
            ? (t.dataTransfer.dropEffect = "link")
            : (t.dataTransfer.dropEffect = "move");
        }
        w(t.clientX, t.clientY), a(t.clientX, t.clientY, l.item);
      },
      function (t) {
        g = t.ctrlKey;
      },
      function (t) {
        g = t.ctrlKey;
      },
      function (t) {
        t.preventDefault(), (p = !1), ($ = !1), (s = +new Date());
        const e = t.target.offsetLeft,
          n = t.target.offsetTop;
        v(),
          setTimeout(() => {
            $ || p || Dt(l.item);
          }, 500),
          u(e, n, l.item);
      },
      function (t) {
        t.preventDefault(), (p = !0);
        const e = t.targetTouches[0].clientX,
          n = t.targetTouches[0].clientY;
        w(e, n), d(e, n, l.item);
      },
      function (t) {
        let e = +new Date();
        $ = !0;
        const n = o,
          i = r;
        (p && l.item.selected) ||
          (!p && e - s < 500 && l.item.program.createProcess().bringToTop()),
          f(n, i, l.item),
          kt(l.item);
      },
      function (t) {
        t.dataTransfer.setData("program_id", l.item.program.id.toString()),
          v(t.clientX, t.clientY),
          c(t.clientX, t.clientY, l.item);
      },
      function (t) {
        h(o, r, l.item);
      },
      function (t) {
        g || (l.item.selected && kt(l.item));
      },
      function (t) {
        Dt(l.item);
      },
      function (t) {
        l.item.program.createProcess().bringToTop();
      },
      c,
      a,
      h,
      u,
      d,
      f,
    ]
  );
}
class Nt extends n {
  constructor(t) {
    super(),
      i(this, t, Vt, Mt, s, {
        gridPosition: 0,
        onDragStart: 12,
        onDragMove: 13,
        onDragEnd: 14,
        onTouchStart: 15,
        onTouchMove: 16,
        onTouchEnd: 17,
      });
  }
}
let Lt = 0;
class Gt {
  constructor(t, e, n, i = !1, s = null) {
    (this.program = t),
      (this.preferredRow = e),
      (this.preferredColumn = n),
      (this.selected = i),
      (this.position = s),
      (this.id = Lt++);
  }
}
function Ht(t) {
  return (
    (function (t) {
      return t.length > 0 && !isNaN(+t);
    })(t) && +t >= 0
  );
}
const At = e(!1),
  Wt = t(At, (t) => t);
function Yt() {
  At.set(!1);
}
let Ft = 1;
const Zt = e(Ft);
Zt.subscribe((t) => (Ft = t));
const Ut = e([]);
Ut.subscribe((t) => {
  Zt.set(t.filter((t) => null !== t.window).length);
});
let Xt = 0;
class qt {
  constructor(t, e = t.window) {
    (this.program = t),
      (this.window = e),
      (this.id = Xt++),
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
    this.hasWindow() && (this.window.z_index = Ft);
  }
}
let jt = 0;
class Jt {
  constructor(t, e, n, i, s = null) {
    (this.name = t),
      (this.description = e),
      (this.categories = n),
      (this.icon = i),
      (this.window = s),
      (this.id = jt++);
  }
  createProcess() {
    let t = new qt(N(this));
    var e;
    return (e = t), Ut.update((t) => t.concat(e)), t;
  }
}
class Kt {
  constructor(
    t,
    e = {},
    n = null,
    i = null,
    s = null,
    o = null,
    r = !1,
    l = !1
  ) {
    (this.component = t),
      (this.componentAttributes = e),
      (this.width = n),
      (this.height = i),
      (this.x = s),
      (this.y = o),
      (this.fullscreen = r),
      (this.minimized = l),
      (this.z_index = 1);
  }
}
let Qt = 0;
class te {
  constructor(t, e) {
    (this.name = t), (this.icon = e), (this.id = Qt++);
  }
}
var ee, ne;
(ee = te || (te = {})),
  ((ne = ee.Name || (ee.Name = {})).ALL = "All"),
  (ne.FAVOURITES = "Favourites"),
  (ne.CATEGORY_1 = "A Category 1"),
  (ne.CATEGORY_2 = "B Category 2");
let ie = [];
const se = new te(te.Name.ALL, "/images/category-icons/utilities-terminal.svg"),
  oe = new te(te.Name.FAVOURITES, "/images/category-icons/star-2.svg"),
  re = e([
    se,
    oe,
    new te(te.Name.CATEGORY_2, "/images/category-icons/utilities-terminal.svg"),
    new te(te.Name.CATEGORY_1, "/images/category-icons/utilities-terminal.svg"),
  ]);
function le(t) {
  return ie.find((e) => e.name == t);
}
re.subscribe((t) => (ie = t));
function ce(t) {
  let e, n, i, s, o, r;
  return {
    c() {
      (e = l("button")),
        (n = L("svg")),
        (i = L("g")),
        (s = L("path")),
        this.h();
    },
    l(t) {
      e = c(t, "BUTTON", { class: !0, style: !0 });
      var o = a(e);
      n = c(
        o,
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
      var r = a(n);
      i = c(r, "g", {}, 1);
      var l = a(i);
      (s = c(l, "path", { d: !0 }, 1)),
        a(s).forEach(h),
        l.forEach(h),
        r.forEach(h),
        o.forEach(h),
        this.h();
    },
    h() {
      u(
        s,
        "d",
        "M427.408,19.697c-7.803-3.23-14.463-1.902-19.986,3.999l-37.116,36.834C349.94,41.305,326.672,26.412,300.5,15.848\n\t\tC274.328,5.285,247.251,0.003,219.271,0.003c-29.692,0-58.052,5.808-85.08,17.417c-27.03,11.61-50.347,27.215-69.951,46.82\n\t\tc-19.605,19.607-35.214,42.921-46.824,69.949C5.807,161.219,0,189.575,0,219.271c0,29.687,5.807,58.05,17.417,85.079\n\t\tc11.613,27.031,27.218,50.347,46.824,69.952c19.604,19.599,42.921,35.207,69.951,46.818c27.028,11.611,55.388,17.419,85.08,17.419\n\t\tc32.736,0,63.865-6.899,93.363-20.7c29.5-13.795,54.625-33.26,75.377-58.386c1.52-1.903,2.234-4.045,2.136-6.424\n\t\tc-0.089-2.378-0.999-4.329-2.711-5.852l-39.108-39.399c-2.101-1.711-4.473-2.566-7.139-2.566c-3.045,0.38-5.232,1.526-6.566,3.429\n\t\tc-13.895,18.086-30.93,32.072-51.107,41.977c-20.173,9.894-41.586,14.839-64.237,14.839c-19.792,0-38.684-3.854-56.671-11.564\n\t\tc-17.989-7.706-33.551-18.127-46.682-31.261c-13.13-13.135-23.551-28.691-31.261-46.682c-7.708-17.987-11.563-36.874-11.563-56.671\n\t\tc0-19.795,3.858-38.691,11.563-56.674c7.707-17.985,18.127-33.547,31.261-46.678c13.135-13.134,28.693-23.555,46.682-31.265\n\t\tc17.983-7.707,36.879-11.563,56.671-11.563c38.259,0,71.475,13.039,99.646,39.116l-39.409,39.394\n\t\tc-5.903,5.711-7.231,12.279-4.001,19.701c3.241,7.614,8.856,11.42,16.854,11.42h127.906c4.949,0,9.23-1.807,12.848-5.424\n\t\tc3.613-3.616,5.42-7.898,5.42-12.847V36.55C438.542,28.558,434.84,22.943,427.408,19.697z"
      ),
        u(n, "version", "1.1"),
        u(n, "id", "Capa_1"),
        u(n, "xmlns", "http://www.w3.org/2000/svg"),
        u(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        u(n, "x", "0px"),
        u(n, "y", "0px"),
        u(n, "viewBox", "0 0 438.542 438.542"),
        d(n, "enable-background", "new 0 0 438.542 438.542"),
        u(n, "xml:space", "preserve"),
        u(n, "class", "svelte-y7dce6"),
        u(e, "class", "before svelte-y7dce6"),
        d(e, "width", t[0]),
        d(e, "height", "100%");
    },
    m(l, c) {
      f(l, e, c),
        I(e, n),
        I(n, i),
        I(i, s),
        t[4](e),
        o || ((r = m(e, "click", t[2])), (o = !0));
    },
    p(t, [n]) {
      1 & n && d(e, "width", t[0]);
    },
    i: k,
    o: k,
    d(n) {
      n && h(e), t[4](null), (o = !1), r();
    },
  };
}
function ae(t, e, n) {
  let i,
    { size: s = "1.25rem" } = e,
    { onClick: o = (t) => {} } = e;
  return (
    (t.$$set = (t) => {
      "size" in t && n(0, (s = t.size)),
        "onClick" in t && n(3, (o = t.onClick));
    }),
    [
      s,
      i,
      function (t) {
        o(),
          i.classList.remove("before"),
          setTimeout(() => {
            i.classList.add("before");
          }, 500);
      },
      o,
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (i = t), n(1, i);
        });
      },
    ]
  );
}
class he extends n {
  constructor(t) {
    super(), i(this, t, ae, ce, s, { size: 0, onClick: 3 });
  }
}
function ue(t) {
  let e, n;
  return {
    c() {
      (e = l("div")), (n = b(t[0])), this.h();
    },
    l(i) {
      e = c(i, "DIV", { class: !0 });
      var s = a(e);
      (n = y(s, t[0])), s.forEach(h), this.h();
    },
    h() {
      u(e, "class", "address svelte-58z9bx");
    },
    m(t, i) {
      f(t, e, i), I(e, n);
    },
    p(t, [e]) {
      1 & e && D(n, t[0]);
    },
    i: k,
    o: k,
    d(t) {
      t && h(e);
    },
  };
}
function de(t, e, n) {
  let { address: i } = e;
  return (
    (t.$$set = (t) => {
      "address" in t && n(0, (i = t.address));
    }),
    [i]
  );
}
class fe extends n {
  constructor(t) {
    super(), i(this, t, de, ue, s, { address: 0 });
  }
}
function me(t) {
  let e, n, i, s, o, r, d, m, g, p;
  return (
    (i = new he({ props: { onClick: t[4] } })),
    (r = new fe({ props: { address: t[0] } })),
    {
      c() {
        (e = l("div")),
          (n = l("div")),
          _(i.$$.fragment),
          (s = E()),
          (o = l("div")),
          _(r.$$.fragment),
          (d = E()),
          (m = l("iframe")),
          this.h();
      },
      l(t) {
        e = c(t, "DIV", { class: !0 });
        var l = a(e);
        n = c(l, "DIV", { class: !0 });
        var u = a(n);
        M(i.$$.fragment, u), (s = T(u)), (o = c(u, "DIV", { class: !0 }));
        var f = a(o);
        M(r.$$.fragment, f),
          f.forEach(h),
          u.forEach(h),
          (d = T(l)),
          (m = c(l, "IFRAME", {
            src: !0,
            title: !0,
            allow: !0,
            id: !0,
            class: !0,
          })),
          a(m).forEach(h),
          l.forEach(h),
          this.h();
      },
      h() {
        u(o, "class", "address-container svelte-1q93aj3"),
          u(n, "class", "address-bar svelte-1q93aj3"),
          m.src !== (g = t[0]) && u(m, "src", g),
          u(m, "title", t[1]),
          u(m, "allow", "fullscreen"),
          u(m, "id", "iframe"),
          u(m, "class", "svelte-1q93aj3"),
          u(e, "class", "web-page svelte-1q93aj3");
      },
      m(l, c) {
        f(l, e, c),
          I(e, n),
          B(i, n, null),
          I(n, s),
          I(n, o),
          B(r, o, null),
          I(e, d),
          I(e, m),
          t[5](m),
          (p = !0);
      },
      p(t, [e]) {
        const n = {};
        4 & e && (n.onClick = t[4]), i.$set(n);
        const s = {};
        1 & e && (s.address = t[0]),
          r.$set(s),
          (!p || (1 & e && m.src !== (g = t[0]))) && u(m, "src", g),
          (!p || 2 & e) && u(m, "title", t[1]);
      },
      i(t) {
        p || ($(i.$$.fragment, t), $(r.$$.fragment, t), (p = !0));
      },
      o(t) {
        v(i.$$.fragment, t), v(r.$$.fragment, t), (p = !1);
      },
      d(n) {
        n && h(e), V(i), V(r), t[5](null);
      },
    }
  );
}
function ge(t, e, n) {
  let i,
    { url: s } = e,
    { title: o } = e,
    { onSelection: r = () => {} } = e,
    l = !1;
  G(() => {
    setInterval(() => {
      document.activeElement === i ? (l || r(), (l = !0)) : (l = !1);
    }, 100);
  });
  return (
    (t.$$set = (t) => {
      "url" in t && n(0, (s = t.url)),
        "title" in t && n(1, (o = t.title)),
        "onSelection" in t && n(3, (r = t.onSelection));
    }),
    [
      s,
      o,
      i,
      r,
      () => n(2, (i.src += ""), i),
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (i = t), n(2, i);
        });
      },
    ]
  );
}
class pe extends n {
  constructor(t) {
    super(), i(this, t, ge, me, s, { url: 0, title: 1, onSelection: 3 });
  }
}
let $e = [];
const ve = e([
  new Jt(
    "Croma",
    "Official website for the Croma Robot made in Webots.",
    [le(te.Name.CATEGORY_1), oe],
    "/images/program-icons/croma.png",
    new Kt(
      pe,
      { title: "Croma", url: "https://jitzek.github.io/croma-web-site/" },
      800,
      1e3
    )
  ),
  new Jt(
    "LocalHost 3000",
    "",
    [le(te.Name.CATEGORY_2)],
    "/images/program-icons/utilities-terminal.svg",
    new Kt(pe, { title: "Croma", url: "http://localhost:3000/" }, 800, 600)
  ),
]);
function we(t) {
  return $e.find((e) => e.id === t);
}
ve.subscribe((t) => ($e = t));
function xe(t, e, n) {
  const i = t.slice();
  return (i[17] = e[n]), i;
}
function Ee(t) {
  let e, n;
  return (
    (e = new Nt({
      props: {
        gridPosition: t[17],
        onDragStart: t[4],
        onDragMove: Te,
        onDragEnd: ye,
        onTouchStart: t[5],
        onTouchMove: Ie,
        onTouchEnd: t[6],
      },
    })),
    {
      c() {
        _(e.$$.fragment);
      },
      l(t) {
        M(e.$$.fragment, t);
      },
      m(t, i) {
        B(e, t, i), (n = !0);
      },
      p(t, n) {
        const i = {};
        4 & n && (i.gridPosition = t[17]), e.$set(i);
      },
      i(t) {
        n || ($(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        V(e, t);
      },
    }
  );
}
function be(t) {
  let e, n, i, s;
  o(t[14]);
  let r = t[2].gridPositions,
    g = [];
  for (let o = 0; o < r.length; o += 1) g[o] = Ee(xe(t, r, o));
  const p = (t) =>
    v(g[t], 1, 1, () => {
      g[t] = null;
    });
  return {
    c() {
      e = l("div");
      for (let t = 0; t < g.length; t += 1) g[t].c();
      this.h();
    },
    l(t) {
      e = c(t, "DIV", { class: !0, style: !0 });
      var n = a(e);
      for (let e = 0; e < g.length; e += 1) g[e].l(n);
      n.forEach(h), this.h();
    },
    h() {
      u(e, "class", "grid svelte-ywic5p"),
        d(e, "grid-template-columns", t[2].gridTemplateColumns),
        d(e, "gap", t[2].gap + "rem"),
        d(e, "padding", t[2].padding + "rem"),
        d(e, "margin-top", t[2].topOffset + "rem");
    },
    m(o, r) {
      f(o, e, r);
      for (let t = 0; t < g.length; t += 1) g[t].m(e, null);
      (n = !0),
        i ||
          ((s = [
            m(window, "resize", t[14]),
            m(e, "mousedown", Yt),
            m(e, "drop", t[3]),
          ]),
          (i = !0));
    },
    p(t, [i]) {
      if (116 & i) {
        let n;
        for (r = t[2].gridPositions, n = 0; n < r.length; n += 1) {
          const s = xe(t, r, n);
          g[n]
            ? (g[n].p(s, i), $(g[n], 1))
            : ((g[n] = Ee(s)), g[n].c(), $(g[n], 1), g[n].m(e, null));
        }
        for (C(), n = r.length; n < g.length; n += 1) p(n);
        S();
      }
      (!n || 4 & i) && d(e, "grid-template-columns", t[2].gridTemplateColumns),
        (!n || 4 & i) && d(e, "gap", t[2].gap + "rem"),
        (!n || 4 & i) && d(e, "padding", t[2].padding + "rem"),
        (!n || 4 & i) && d(e, "margin-top", t[2].topOffset + "rem");
    },
    i(t) {
      if (!n) {
        for (let t = 0; t < r.length; t += 1) $(g[t]);
        n = !0;
      }
    },
    o(t) {
      g = g.filter(Boolean);
      for (let e = 0; e < g.length; e += 1) v(g[e]);
      n = !1;
    },
    d(t) {
      t && h(e), H(g, t), (i = !1), w(s);
    },
  };
}
function Te(t, e, n) {}
function ye(t, e, n) {}
function Ie(t, e, n) {}
function Oe(t, e, n) {
  let i;
  R(t, Ot, (t) => n(2, (i = t)));
  let s,
    o,
    { widthOffset: r = 0 } = e,
    { topOffset: l = 0 } = e,
    { bottomOffset: c = 0 } = e,
    { columnWidth: a = 3 } = e,
    { columnHeight: h = 4 } = e,
    { gap: u = 2.5 } = e,
    { padding: d = 1 } = e,
    f = null;
  function m(t, e, n) {
    let s = t - n.position.x,
      o = e - n.position.y,
      r = i.getGridPositionAtPosition(t, e);
    if (r && null != r.item) {
      if (r.item == n) return;
    } else
      i.gridItems
        .filter((t) => t.selected)
        .forEach((t) => {
          let e = i.gridPositions.find(
              (e) => null != e.item && e.item.id == t.id
            ),
            n = i.getClosestGridPositionToPosition(
              e.x + s,
              e.y + o,
              (e) => null == e.item || e.item == t
            );
          !(function (t, e, n) {
            It.update((i) => {
              let s = i.gridItems.find((e) => e.id === t.id);
              return (
                (s.preferredRow = e),
                (s.preferredColumn = n),
                i.rearrangeGrid(),
                i
              );
            });
          })(t, n.row, n.column);
        });
    f = null;
  }
  return (
    (t.$$set = (t) => {
      "widthOffset" in t && n(7, (r = t.widthOffset)),
        "topOffset" in t && n(8, (l = t.topOffset)),
        "bottomOffset" in t && n(9, (c = t.bottomOffset)),
        "columnWidth" in t && n(10, (a = t.columnWidth)),
        "columnHeight" in t && n(11, (h = t.columnHeight)),
        "gap" in t && n(12, (u = t.gap)),
        "padding" in t && n(13, (d = t.padding));
    }),
    (t.$$.update = () => {
      16259 & t.$$.dirty &&
        ((function (t, e, n, i, s, o, r) {
          It.update(
            (l) => (
              (l.gap = t),
              (l.widthOffset = e),
              (l.topOffset = n),
              (l.bottomOffset = i),
              (l.padding = s),
              (l.columnWidth = o),
              (l.columnHeight = r),
              l
            )
          );
        })(u, r, l, c, d, a, h),
        s &&
          o &&
          (function (t, e) {
            It.update((n) => (n.rearrangeGrid(t, e), n));
          })(s, o));
    }),
    [
      s,
      o,
      i,
      function (t) {
        if (null != f) return void m(t.clientX, t.clientY, f);
        let e = i.getClosestGridPositionToPosition(t.clientX, t.clientY);
        var n;
        if (null === e.item) {
          if (!Ht(t.dataTransfer.getData("program_id").trim())) return;
          let i = Number(t.dataTransfer.getData("program_id"));
          if (isNaN(i)) return;
          (n = new Gt(we(i), e.row, e.column)),
            It.update((t) => (t.addGridItem(n), t.rearrangeGrid(), t));
        }
      },
      function (t, e, n) {
        f = n;
      },
      function (t, e, n) {
        f = n;
      },
      function (t, e, n) {
        console.log(`${t} ${e}`), m(t, e, n);
      },
      r,
      l,
      c,
      a,
      h,
      u,
      d,
      function () {
        n(0, (s = window.innerWidth)), n(1, (o = window.innerHeight));
      },
    ]
  );
}
class De extends n {
  constructor(t) {
    super(),
      i(this, t, Oe, be, s, {
        widthOffset: 7,
        topOffset: 8,
        bottomOffset: 9,
        columnWidth: 10,
        columnHeight: 11,
        gap: 12,
        padding: 13,
      });
  }
}
function ke(t) {
  let e, n, i, s, o;
  const g = t[5].default,
    x = r(g, t, t[4], null);
  return {
    c() {
      (e = l("div")), x && x.c(), this.h();
    },
    l(t) {
      e = c(t, "DIV", { class: !0, "data-tooltip": !0, style: !0 });
      var n = a(e);
      x && x.l(n), n.forEach(h), this.h();
    },
    h() {
      u(e, "class", (n = "tooltip " + t[1] + " svelte-1gcaub2")),
        u(e, "data-tooltip", t[0]),
        d(e, "--width", t[2]);
    },
    m(n, r) {
      f(n, e, r),
        x && x.m(e, null),
        t[6](e),
        (i = !0),
        s ||
          ((o = [m(e, "mouseover", t[7]), m(e, "mouseleave", t[8])]), (s = !0));
    },
    p(t, [s]) {
      x && x.p && (!i || 16 & s) && p(x, g, t, t[4], i ? s : -1, null, null),
        (!i || (2 & s && n !== (n = "tooltip " + t[1] + " svelte-1gcaub2"))) &&
          u(e, "class", n),
        (!i || 1 & s) && u(e, "data-tooltip", t[0]),
        (!i || 4 & s) && d(e, "--width", t[2]);
    },
    i(t) {
      i || ($(x, t), (i = !0));
    },
    o(t) {
      v(x, t), (i = !1);
    },
    d(n) {
      n && h(e), x && x.d(n), t[6](null), (s = !1), w(o);
    },
  };
}
function ze(t, e, n) {
  let i,
    { $$slots: s = {}, $$scope: o } = e,
    { tooltip: r = "" } = e,
    { position: l = "top" } = e,
    { width: c = "max-content" } = e;
  return (
    (t.$$set = (t) => {
      "tooltip" in t && n(0, (r = t.tooltip)),
        "position" in t && n(1, (l = t.position)),
        "width" in t && n(2, (c = t.width)),
        "$$scope" in t && n(4, (o = t.$$scope));
    }),
    [
      r,
      l,
      c,
      i,
      o,
      s,
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (i = t), n(3, i);
        });
      },
      () => n(3, (i.style.zIndex = "9"), i),
      () => n(3, (i.style.zIndex = "initial"), i),
    ]
  );
}
class Ce extends n {
  constructor(t) {
    super(), i(this, t, ze, ke, s, { tooltip: 0, position: 1, width: 2 });
  }
}
class Se extends class {} {
  constructor(t) {
    super(), (this.program = t);
  }
}
const Re = new (class {
    constructor() {
      this.programShortcuts = [];
    }
    addProgramShortcut(t) {
      this.programShortcuts.push(new Se(t));
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
  _e = e(Re),
  Me = t(_e, (t) => t);
function Pe(t) {
  Re.containsProgramShortcut(t) || (Re.addProgramShortcut(t), _e.set(Re));
}
function Be(t) {
  Re.containsProgramShortcut(t) && (Re.removeProgramShortcut(t), _e.set(Re));
}
function Ve(t) {
  return Re.containsProgramShortcut(t);
}
function Ne(t) {
  let e, n, i, s;
  return {
    c() {
      (e = l("button")), (n = l("img")), this.h();
    },
    l(t) {
      e = c(t, "BUTTON", { class: !0, style: !0 });
      var i = a(e);
      (n = c(i, "IMG", { src: !0, alt: !0, width: !0, height: !0, class: !0 })),
        i.forEach(h),
        this.h();
    },
    h() {
      n.src !== (i = t[0].icon) && u(n, "src", i),
        u(n, "alt", (s = t[0].name)),
        u(n, "width", "100%"),
        u(n, "height", "auto"),
        u(n, "class", "svelte-1qqwr7o"),
        u(e, "class", "launcher svelte-1qqwr7o"),
        d(e, "height", t[2]);
    },
    m(t, i) {
      f(t, e, i), I(e, n);
    },
    p(t, o) {
      1 & o && n.src !== (i = t[0].icon) && u(n, "src", i),
        1 & o && s !== (s = t[0].name) && u(n, "alt", s),
        4 & o && d(e, "height", t[2]);
    },
    d(t) {
      t && h(e);
    },
  };
}
function Le(t) {
  let e, n, i, s, o;
  return (
    (n = new Ce({
      props: {
        tooltip: t[0].name,
        position: "top",
        $$slots: { default: [Ne] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        (e = l("div")), _(n.$$.fragment), this.h();
      },
      l(t) {
        e = c(t, "DIV", { style: !0 });
        var i = a(e);
        M(n.$$.fragment, i), i.forEach(h), this.h();
      },
      h() {
        d(e, "grid-row", t[1]);
      },
      m(r, l) {
        f(r, e, l),
          B(n, e, null),
          (i = !0),
          s ||
            ((o = [m(e, "click", t[4]), m(e, "contextmenu", t[3])]), (s = !0));
      },
      p(t, [s]) {
        const o = {};
        1 & s && (o.tooltip = t[0].name),
          37 & s && (o.$$scope = { dirty: s, ctx: t }),
          n.$set(o),
          (!i || 2 & s) && d(e, "grid-row", t[1]);
      },
      i(t) {
        i || ($(n.$$.fragment, t), (i = !0));
      },
      o(t) {
        v(n.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && h(e), V(n), (s = !1), w(o);
      },
    }
  );
}
function Ge(t, e, n) {
  let { program: i } = e,
    { row: s } = e,
    { height: o } = e;
  return (
    (t.$$set = (t) => {
      "program" in t && n(0, (i = t.program)),
        "row" in t && n(1, (s = t.row)),
        "height" in t && n(2, (o = t.height));
    }),
    [
      i,
      s,
      o,
      function (t) {
        t.preventDefault(),
          dt(t.clientX, t.clientY, [
            {
              name: "Launch",
              icon: i.icon,
              onClick: () => {
                ft(), i.createProcess().bringToTop(), Yt();
              },
            },
            {
              name: "Unpin from taskbar",
              icon: "/images/desktop/unpin.svg",
              onClick: () => {
                ft(), Be(i);
              },
            },
          ]);
      },
      function (t) {
        Yt(), i.createProcess().bringToTop();
      },
    ]
  );
}
class He extends n {
  constructor(t) {
    super(), i(this, t, Ge, Le, s, { program: 0, row: 1, height: 2 });
  }
}
function Ae(t) {
  let e, n, i, s, o, d, g, w, x;
  const O = t[4].default,
    k = r(O, t, t[3], null);
  return {
    c() {
      (e = l("button")),
        (n = l("div")),
        (i = l("div")),
        k && k.c(),
        (s = E()),
        (o = l("p")),
        (d = b(t[1])),
        this.h();
    },
    l(r) {
      e = c(r, "BUTTON", { class: !0 });
      var l = a(e);
      n = c(l, "DIV", { class: !0 });
      var u = a(n);
      i = c(u, "DIV", { class: !0 });
      var f = a(i);
      k && k.l(f), f.forEach(h), (s = T(u)), (o = c(u, "P", { class: !0 }));
      var m = a(o);
      (d = y(m, t[1])), m.forEach(h), u.forEach(h), l.forEach(h), this.h();
    },
    h() {
      u(i, "class", "menu-button-icon svelte-1eb05hs"),
        u(o, "class", "svelte-1eb05hs"),
        u(n, "class", "menu-button-content svelte-1eb05hs"),
        u(e, "class", "menu-button svelte-1eb05hs"),
        P(e, "activated", t[0]);
    },
    m(r, l) {
      f(r, e, l),
        I(e, n),
        I(n, i),
        k && k.m(i, null),
        I(n, s),
        I(n, o),
        I(o, d),
        (g = !0),
        w || ((x = m(e, "click", t[2])), (w = !0));
    },
    p(t, [n]) {
      k && k.p && (!g || 8 & n) && p(k, O, t, t[3], g ? n : -1, null, null),
        (!g || 2 & n) && D(d, t[1]),
        1 & n && P(e, "activated", t[0]);
    },
    i(t) {
      g || ($(k, t), (g = !0));
    },
    o(t) {
      v(k, t), (g = !1);
    },
    d(t) {
      t && h(e), k && k.d(t), (w = !1), x();
    },
  };
}
function We(t, e, n) {
  let { $$slots: i = {}, $$scope: s } = e,
    { title: o = "Start Menu" } = e,
    { activated: r = !1 } = e;
  return (
    Wt.subscribe((t) => n(0, (r = t))),
    (t.$$set = (t) => {
      "title" in t && n(1, (o = t.title)),
        "activated" in t && n(0, (r = t.activated)),
        "$$scope" in t && n(3, (s = t.$$scope));
    }),
    [
      r,
      o,
      function (t) {
        At.update((t) => !t);
      },
      s,
      i,
    ]
  );
}
class Ye extends n {
  constructor(t) {
    super(), i(this, t, We, Ae, s, { title: 1, activated: 0 });
  }
}
function Fe(t) {
  let e, n, i, s, o, r, d;
  return {
    c() {
      (e = l("button")),
        (n = l("div")),
        (i = l("img")),
        (o = E()),
        (r = l("p")),
        (d = b(t[1])),
        this.h();
    },
    l(s) {
      e = c(s, "BUTTON", { class: !0 });
      var l = a(e);
      n = c(l, "DIV", { class: !0 });
      var u = a(n);
      (i = c(u, "IMG", { src: !0, alt: !0, class: !0 })),
        (o = T(u)),
        (r = c(u, "P", { class: !0 }));
      var f = a(r);
      (d = y(f, t[1])), f.forEach(h), u.forEach(h), l.forEach(h), this.h();
    },
    h() {
      i.src !== (s = t[0]) && u(i, "src", s),
        u(i, "alt", "User Icon"),
        u(i, "class", "svelte-1ezibx2"),
        u(r, "class", "svelte-1ezibx2"),
        u(n, "class", "about-me-button-content svelte-1ezibx2"),
        u(e, "class", "about-me-button svelte-1ezibx2");
    },
    m(t, s) {
      f(t, e, s), I(e, n), I(n, i), I(n, o), I(n, r), I(r, d);
    },
    p(t, [e]) {
      1 & e && i.src !== (s = t[0]) && u(i, "src", s), 2 & e && D(d, t[1]);
    },
    i: k,
    o: k,
    d(t) {
      t && h(e);
    },
  };
}
function Ze(t, e, n) {
  let { icon: i } = e,
    { name: s } = e;
  return (
    (t.$$set = (t) => {
      "icon" in t && n(0, (i = t.icon)), "name" in t && n(1, (s = t.name));
    }),
    [i, s]
  );
}
class Ue extends n {
  constructor(t) {
    super(), i(this, t, Ze, Fe, s, { icon: 0, name: 1 });
  }
}
function Xe(t) {
  let e, n, i, s, o;
  return {
    c() {
      (e = l("button")), (n = l("img")), this.h();
    },
    l(t) {
      e = c(t, "BUTTON", { class: !0 });
      var i = a(e);
      (n = c(i, "IMG", { src: !0, alt: !0, height: !0, width: !0 })),
        i.forEach(h),
        this.h();
    },
    h() {
      n.src !== (i = "/images/desktop/menu/mobile.svg") &&
        u(n, "src", "/images/desktop/menu/mobile.svg"),
        u(n, "alt", "Mobile View"),
        u(n, "height", "75%"),
        u(n, "width", "auto"),
        u(e, "class", "switch-to-mobile-button svelte-15a3m4j");
    },
    m(i, r) {
      f(i, e, r), I(e, n), s || ((o = m(e, "click", t[0])), (s = !0));
    },
    p: k,
    i: k,
    o: k,
    d(t) {
      t && h(e), (s = !1), o();
    },
  };
}
function qe(t) {
  return [
    function (t) {
      ot(rt.MOBILE);
    },
  ];
}
class je extends n {
  constructor(t) {
    super(), i(this, t, qe, Xe, s, {});
  }
}
function Je(t) {
  let e, n, i, s, o, r, d;
  return {
    c() {
      (e = l("div")),
        (n = l("label")),
        (i = l("input")),
        (s = E()),
        (o = l("span")),
        this.h();
    },
    l(t) {
      e = c(t, "DIV", { class: !0 });
      var r = a(e);
      n = c(r, "LABEL", { class: !0 });
      var l = a(n);
      (i = c(l, "INPUT", { type: !0, class: !0 })),
        (s = T(l)),
        (o = c(l, "SPAN", { class: !0 })),
        a(o).forEach(h),
        l.forEach(h),
        r.forEach(h),
        this.h();
    },
    h() {
      u(i, "type", "checkbox"),
        u(i, "class", "svelte-cdbjz7"),
        u(o, "class", "slider round svelte-cdbjz7"),
        u(n, "class", "change-theme-switch svelte-cdbjz7"),
        u(e, "class", "change-theme-container svelte-cdbjz7");
    },
    m(l, c) {
      f(l, e, c),
        I(e, n),
        I(n, i),
        (i.checked = t[0]),
        I(n, s),
        I(n, o),
        r ||
          ((d = [
            m(i, "change", t[2]),
            m(i, "click", t[3]),
            m(n, "click", t[4]),
            m(e, "click", t[5]),
          ]),
          (r = !0));
    },
    p(t, [e]) {
      1 & e && (i.checked = t[0]);
    },
    i: k,
    o: k,
    d(t) {
      t && h(e), (r = !1), w(d);
    },
  };
}
function Ke(t, e, n) {
  let i = lt.Dark;
  ct.subscribe((t) => n(1, (i = t)));
  let s = !1;
  return (
    (t.$$.update = () => {
      if (2 & t.$$.dirty)
        switch (i) {
          case lt.Light:
            n(0, (s = !1));
            break;
          case lt.Dark:
            n(0, (s = !0));
        }
      1 & t.$$.dirty && (s ? ct.set(lt.Dark) : ct.set(lt.Light));
    }),
    [
      s,
      i,
      function () {
        (s = this.checked), n(0, s), n(1, i);
      },
      () => n(0, (s = !s)),
      () => n(0, (s = !s)),
      () => n(0, (s = !s)),
    ]
  );
}
class Qe extends n {
  constructor(t) {
    super(), i(this, t, Ke, Je, s, {});
  }
}
function tn(t) {
  let e,
    n,
    i,
    s,
    o = t[0].description + "";
  return {
    c() {
      (e = l("br")), (n = E()), (i = l("span")), (s = b(o)), this.h();
    },
    l(t) {
      (e = c(t, "BR", {})), (n = T(t)), (i = c(t, "SPAN", { class: !0 }));
      var r = a(i);
      (s = y(r, o)), r.forEach(h), this.h();
    },
    h() {
      u(i, "class", "description svelte-1hxbnn7");
    },
    m(t, o) {
      f(t, e, o), f(t, n, o), f(t, i, o), I(i, s);
    },
    p(t, e) {
      1 & e && o !== (o = t[0].description + "") && D(s, o);
    },
    d(t) {
      t && h(e), t && h(n), t && h(i);
    },
  };
}
function en(t) {
  let e,
    n,
    i,
    s,
    o,
    r,
    d,
    g,
    p,
    $,
    v,
    x,
    O = t[0].name + "",
    z = t[0].description && tn(t);
  return {
    c() {
      (e = l("button")),
        (n = l("div")),
        (i = l("img")),
        (r = E()),
        (d = l("div")),
        (g = l("span")),
        (p = b(O)),
        ($ = E()),
        z && z.c(),
        this.h();
    },
    l(t) {
      e = c(t, "BUTTON", { class: !0, draggable: !0 });
      var s = a(e);
      n = c(s, "DIV", { class: !0 });
      var o = a(n);
      (i = c(o, "IMG", { src: !0, alt: !0, class: !0 })),
        (r = T(o)),
        (d = c(o, "DIV", { class: !0 }));
      var l = a(d);
      g = c(l, "SPAN", { class: !0 });
      var u = a(g);
      (p = y(u, O)),
        u.forEach(h),
        ($ = T(l)),
        z && z.l(l),
        l.forEach(h),
        o.forEach(h),
        s.forEach(h),
        this.h();
    },
    h() {
      i.src !== (s = t[0].icon) && u(i, "src", s),
        u(i, "alt", (o = t[0].name)),
        u(i, "class", "svelte-1hxbnn7"),
        u(g, "class", "name"),
        u(d, "class", "name-and-description svelte-1hxbnn7"),
        u(n, "class", "menu-launcher-button-content svelte-1hxbnn7"),
        u(e, "class", "menu-launcher-button svelte-1hxbnn7"),
        u(e, "draggable", !0),
        P(e, "activated", t[1]);
    },
    m(s, o) {
      f(s, e, o),
        I(e, n),
        I(n, i),
        I(n, r),
        I(n, d),
        I(d, g),
        I(g, p),
        I(d, $),
        z && z.m(d, null),
        v ||
          ((x = [
            m(e, "click", t[3]),
            m(e, "contextmenu", t[2]),
            m(e, "dragstart", t[4]),
          ]),
          (v = !0));
    },
    p(t, [n]) {
      1 & n && i.src !== (s = t[0].icon) && u(i, "src", s),
        1 & n && o !== (o = t[0].name) && u(i, "alt", o),
        1 & n && O !== (O = t[0].name + "") && D(p, O),
        t[0].description
          ? z
            ? z.p(t, n)
            : ((z = tn(t)), z.c(), z.m(d, null))
          : z && (z.d(1), (z = null)),
        2 & n && P(e, "activated", t[1]);
    },
    i: k,
    o: k,
    d(t) {
      t && h(e), z && z.d(), (v = !1), w(x);
    },
  };
}
function nn(t, e, n) {
  let { program: i } = e,
    { activated: s = !1 } = e;
  return (
    (t.$$set = (t) => {
      "program" in t && n(0, (i = t.program)),
        "activated" in t && n(1, (s = t.activated));
    }),
    [
      i,
      s,
      function (t) {
        t.preventDefault(),
          dt(t.clientX, t.clientY, [
            {
              name: "Launch",
              icon: i.icon,
              onClick: () => {
                ft(), i.createProcess().bringToTop(), Yt();
              },
            },
            {
              name: Ve(i) ? "Unpin from taskbar" : "Pin to taskbar",
              icon: Ve(i)
                ? "/images/desktop/unpin.svg"
                : "/images/desktop/pin.svg",
              onClick: () => {
                ft(), Ve(i) ? Be(i) : Pe(i);
              },
            },
          ]);
      },
      function () {
        i.createProcess().bringToTop(), Yt();
      },
      function (t) {
        t.dataTransfer.setData("program_id", i.id.toString());
      },
    ]
  );
}
class sn extends n {
  constructor(t) {
    super(), i(this, t, nn, en, s, { program: 0, activated: 1 });
  }
}
function on(t) {
  let e, n, i, s, o, r, d, g, p, $;
  return {
    c() {
      (e = l("button")),
        (n = l("div")),
        (i = l("img")),
        (o = E()),
        (r = l("div")),
        (d = l("span")),
        (g = b(t[0])),
        this.h();
    },
    l(s) {
      e = c(s, "BUTTON", { class: !0 });
      var l = a(e);
      n = c(l, "DIV", { class: !0 });
      var u = a(n);
      (i = c(u, "IMG", { src: !0, alt: !0, class: !0 })),
        (o = T(u)),
        (r = c(u, "DIV", { class: !0 }));
      var f = a(r);
      d = c(f, "SPAN", { class: !0 });
      var m = a(d);
      (g = y(m, t[0])),
        m.forEach(h),
        f.forEach(h),
        u.forEach(h),
        l.forEach(h),
        this.h();
    },
    h() {
      i.src !== (s = t[1]) && u(i, "src", s),
        u(i, "alt", t[0]),
        u(i, "class", "svelte-1hxbnn7"),
        u(d, "class", "name"),
        u(r, "class", "name-and-description svelte-1hxbnn7"),
        u(n, "class", "menu-launcher-button-content svelte-1hxbnn7"),
        u(e, "class", "menu-launcher-button svelte-1hxbnn7"),
        P(e, "activated", t[2]);
    },
    m(s, l) {
      f(s, e, l),
        I(e, n),
        I(n, i),
        I(n, o),
        I(n, r),
        I(r, d),
        I(d, g),
        t[5](e),
        p || (($ = m(e, "click", t[4])), (p = !0));
    },
    p(t, [n]) {
      2 & n && i.src !== (s = t[1]) && u(i, "src", s),
        1 & n && u(i, "alt", t[0]),
        1 & n && D(g, t[0]),
        4 & n && P(e, "activated", t[2]);
    },
    i: k,
    o: k,
    d(n) {
      n && h(e), t[5](null), (p = !1), $();
    },
  };
}
function rn(t, e, n) {
  let i,
    { name: s } = e,
    { icon: o } = e,
    { activated: r = !1 } = e;
  return (
    G(() => {
      n(3, (i.ondragstart = () => !1), i);
    }),
    (t.$$set = (t) => {
      "name" in t && n(0, (s = t.name)),
        "icon" in t && n(1, (o = t.icon)),
        "activated" in t && n(2, (r = t.activated));
    }),
    [
      s,
      o,
      r,
      i,
      function (e) {
        A.call(this, t, e);
      },
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (i = t), n(3, i);
        });
      },
    ]
  );
}
class ln extends n {
  constructor(t) {
    super(), i(this, t, rn, on, s, { name: 0, icon: 1, activated: 2 });
  }
}
function cn(t, e, n) {
  const i = t.slice();
  return (i[7] = e[n].category), (i[8] = e[n].activated), i;
}
function an(t, e, n) {
  const i = t.slice();
  return (i[11] = e[n]), i;
}
function hn(t, e, n) {
  const i = t.slice();
  return (i[7] = e[n].category), (i[8] = e[n].activated), i;
}
function un(t) {
  let e, n;
  return (
    (e = new ln({
      props: { icon: t[7].icon, name: t[7].name, activated: t[8] },
    })),
    e.$on("click", function (...e) {
      return t[5](t[7], ...e);
    }),
    {
      c() {
        _(e.$$.fragment);
      },
      l(t) {
        M(e.$$.fragment, t);
      },
      m(t, i) {
        B(e, t, i), (n = !0);
      },
      p(n, i) {
        t = n;
        const s = {};
        1 & i && (s.icon = t[7].icon),
          1 & i && (s.name = t[7].name),
          1 & i && (s.activated = t[8]),
          e.$set(s);
      },
      i(t) {
        n || ($(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        V(e, t);
      },
    }
  );
}
function dn(t) {
  let e,
    n,
    i = [],
    s = new Map(),
    o = t[1].sort($n);
  const r = (t) => t[11].id;
  for (let l = 0; l < o.length; l += 1) {
    let e = an(t, o, l),
      n = r(e);
    s.set(n, (i[l] = mn(n, e)));
  }
  return {
    c() {
      for (let t = 0; t < i.length; t += 1) i[t].c();
      e = z();
    },
    l(t) {
      for (let e = 0; e < i.length; e += 1) i[e].l(t);
      e = z();
    },
    m(t, s) {
      for (let e = 0; e < i.length; e += 1) i[e].m(t, s);
      f(t, e, s), (n = !0);
    },
    p(t, n) {
      3 & n &&
        ((o = t[1].sort($n)),
        C(),
        (i = Y(i, n, r, 1, t, o, s, e.parentNode, F, mn, e, an)),
        S());
    },
    i(t) {
      if (!n) {
        for (let t = 0; t < o.length; t += 1) $(i[t]);
        n = !0;
      }
    },
    o(t) {
      for (let e = 0; e < i.length; e += 1) v(i[e]);
      n = !1;
    },
    d(t) {
      for (let e = 0; e < i.length; e += 1) i[e].d(t);
      t && h(e);
    },
  };
}
function fn(t) {
  let e, n, i, s, r, u;
  return (
    (n = new sn({ props: { program: t[11] } })),
    {
      c() {
        (e = l("div")), _(n.$$.fragment), (i = E());
      },
      l(t) {
        e = c(t, "DIV", {});
        var s = a(e);
        M(n.$$.fragment, s), (i = T(s)), s.forEach(h);
      },
      m(t, s) {
        f(t, e, s), B(n, e, null), I(e, i), (u = !0);
      },
      p(t, e) {
        const i = {};
        2 & e && (i.program = t[11]), n.$set(i);
      },
      i(t) {
        u ||
          ($(n.$$.fragment, t),
          o(() => {
            r && r.end(1), s || (s = Z(e, U, { duration: 500 })), s.start();
          }),
          (u = !0));
      },
      o(t) {
        v(n.$$.fragment, t),
          s && s.invalidate(),
          (r = X(e, U, { duration: 250 })),
          (u = !1);
      },
      d(t) {
        t && h(e), V(n), t && r && r.end();
      },
    }
  );
}
function mn(t, e) {
  let n,
    i,
    s,
    o = e[11].categories.find(r) || e[7].id === se.id;
  function r(...t) {
    return e[3](e[7], ...t);
  }
  let l = o && fn(e);
  return {
    key: t,
    first: null,
    c() {
      (n = z()), l && l.c(), (i = z()), this.h();
    },
    l(t) {
      (n = z()), l && l.l(t), (i = z()), this.h();
    },
    h() {
      this.first = n;
    },
    m(t, e) {
      f(t, n, e), l && l.m(t, e), f(t, i, e), (s = !0);
    },
    p(t, n) {
      (e = t),
        3 & n && (o = e[11].categories.find(r) || e[7].id === se.id),
        o
          ? l
            ? (l.p(e, n), 3 & n && $(l, 1))
            : ((l = fn(e)), l.c(), $(l, 1), l.m(i.parentNode, i))
          : l &&
            (C(),
            v(l, 1, 1, () => {
              l = null;
            }),
            S());
    },
    i(t) {
      s || ($(l), (s = !0));
    },
    o(t) {
      v(l), (s = !1);
    },
    d(t) {
      t && h(n), l && l.d(t), t && h(i);
    },
  };
}
function gn(t) {
  let e,
    n,
    i = t[8] && dn(t);
  return {
    c() {
      i && i.c(), (e = z());
    },
    l(t) {
      i && i.l(t), (e = z());
    },
    m(t, s) {
      i && i.m(t, s), f(t, e, s), (n = !0);
    },
    p(t, n) {
      t[8]
        ? i
          ? (i.p(t, n), 1 & n && $(i, 1))
          : ((i = dn(t)), i.c(), $(i, 1), i.m(e.parentNode, e))
        : i &&
          (C(),
          v(i, 1, 1, () => {
            i = null;
          }),
          S());
    },
    i(t) {
      n || ($(i), (n = !0));
    },
    o(t) {
      v(i), (n = !1);
    },
    d(t) {
      i && i.d(t), t && h(e);
    },
  };
}
function pn(t) {
  let e,
    n,
    i,
    s,
    o,
    r = W(t[0], [t[4]]),
    d = [];
  for (let l = 0; l < r.length; l += 1) d[l] = un(hn(t, r, l));
  const m = (t) =>
    v(d[t], 1, 1, () => {
      d[t] = null;
    });
  let g = t[0],
    p = [];
  for (let l = 0; l < g.length; l += 1) p[l] = gn(cn(t, g, l));
  const w = (t) =>
    v(p[t], 1, 1, () => {
      p[t] = null;
    });
  return {
    c() {
      (e = l("div")), (n = l("div"));
      for (let t = 0; t < d.length; t += 1) d[t].c();
      (i = E()), (s = l("div"));
      for (let t = 0; t < p.length; t += 1) p[t].c();
      this.h();
    },
    l(t) {
      e = c(t, "DIV", { class: !0 });
      var o = a(e);
      n = c(o, "DIV", { class: !0 });
      var r = a(n);
      for (let e = 0; e < d.length; e += 1) d[e].l(r);
      r.forEach(h), (i = T(o)), (s = c(o, "DIV", { class: !0 }));
      var l = a(s);
      for (let e = 0; e < p.length; e += 1) p[e].l(l);
      l.forEach(h), o.forEach(h), this.h();
    },
    h() {
      u(n, "class", "category-buttons-container svelte-13b6w35"),
        u(s, "class", "category-content-container svelte-13b6w35"),
        u(e, "class", "categories-container svelte-13b6w35");
    },
    m(t, r) {
      f(t, e, r), I(e, n);
      for (let e = 0; e < d.length; e += 1) d[e].m(n, null);
      I(e, i), I(e, s);
      for (let e = 0; e < p.length; e += 1) p[e].m(s, null);
      o = !0;
    },
    p(t, [e]) {
      if (5 & e) {
        let i;
        for (r = W(t[0], [t[4]]), i = 0; i < r.length; i += 1) {
          const s = hn(t, r, i);
          d[i]
            ? (d[i].p(s, e), $(d[i], 1))
            : ((d[i] = un(s)), d[i].c(), $(d[i], 1), d[i].m(n, null));
        }
        for (C(), i = r.length; i < d.length; i += 1) m(i);
        S();
      }
      if (3 & e) {
        let n;
        for (g = t[0], n = 0; n < g.length; n += 1) {
          const i = cn(t, g, n);
          p[n]
            ? (p[n].p(i, e), $(p[n], 1))
            : ((p[n] = gn(i)), p[n].c(), $(p[n], 1), p[n].m(s, null));
        }
        for (C(), n = g.length; n < p.length; n += 1) w(n);
        S();
      }
    },
    i(t) {
      if (!o) {
        for (let t = 0; t < r.length; t += 1) $(d[t]);
        for (let t = 0; t < g.length; t += 1) $(p[t]);
        o = !0;
      }
    },
    o(t) {
      d = d.filter(Boolean);
      for (let e = 0; e < d.length; e += 1) v(d[e]);
      p = p.filter(Boolean);
      for (let e = 0; e < p.length; e += 1) v(p[e]);
      o = !1;
    },
    d(t) {
      t && h(e), H(d, t), H(p, t);
    },
  };
}
const $n = (t, e) => t.name.localeCompare(e.name);
function vn(t, e, n) {
  let i;
  R(t, ve, (t) => n(1, (i = t)));
  class s {
    constructor(t, e) {
      (this.category = t), (this.activated = e);
    }
  }
  let o = [];
  function r(t, e) {
    o.forEach((t) => (t.activated = t.category.id === e && !t.activated)),
      n(0, o);
  }
  re.subscribe((t) => {
    let e = o.flatMap((t) => t.category);
    t
      .filter((t) => -1 === e.indexOf(t))
      .forEach((t) => {
        o.push(new s(t, !1));
      }),
      n(0, (o = o.filter((e) => t.find((t) => t.id === e.category.id))));
  });
  return [
    o,
    i,
    r,
    (t, e) => e.id === t.id,
    (t) =>
      t.category.id === se.id || t.category.id === oe.id || t.category.name,
    (t, e) => r(0, t.id),
  ];
}
class wn extends n {
  constructor(t) {
    super(), i(this, t, vn, pn, s, {});
  }
}
function xn(t) {
  let e, n, i, s, r, g, p, w, x, b, y, O, D, k, z, C, S, R, P;
  return (
    (s = new Ue({
      props: {
        icon: "/images/about/pfp-round.png",
        name: "Jitze Jan Kerkstra",
      },
    })),
    (p = new Ce({
      props: {
        tooltip: "Toggle Mobile View",
        position: "bottom",
        width: "4.5rem",
        $$slots: { default: [En] },
        $$scope: { ctx: t },
      },
    })),
    (y = new Ce({
      props: {
        tooltip: "Toggle " + (t[1] == lt.Dark ? "Light" : "Dark") + " mode",
        position: "bottom",
        width: "4.35rem",
        $$slots: { default: [bn] },
        $$scope: { ctx: t },
      },
    })),
    (D = new wn({})),
    {
      c() {
        (e = l("div")),
          (n = l("div")),
          (i = l("div")),
          _(s.$$.fragment),
          (r = E()),
          (g = l("div")),
          _(p.$$.fragment),
          (w = E()),
          (x = l("div")),
          (b = E()),
          _(y.$$.fragment),
          (O = E()),
          _(D.$$.fragment),
          this.h();
      },
      l(t) {
        e = c(t, "DIV", { class: !0, style: !0 });
        var o = a(e);
        n = c(o, "DIV", { class: !0 });
        var l = a(n);
        i = c(l, "DIV", { class: !0 });
        var u = a(i);
        M(s.$$.fragment, u),
          u.forEach(h),
          (r = T(l)),
          (g = c(l, "DIV", { class: !0 }));
        var d = a(g);
        M(p.$$.fragment, d),
          (w = T(d)),
          (x = c(d, "DIV", { style: !0 })),
          a(x).forEach(h),
          (b = T(d)),
          M(y.$$.fragment, d),
          d.forEach(h),
          l.forEach(h),
          (O = T(o)),
          M(D.$$.fragment, o),
          o.forEach(h),
          this.h();
      },
      h() {
        u(i, "class", "about-me-button-container svelte-fwe7fw"),
          d(x, "padding-left", "0.75rem"),
          u(g, "class", "system-buttons-container svelte-fwe7fw"),
          u(n, "class", "menu-container-top svelte-fwe7fw"),
          u(e, "class", (k = "menu-container " + t[1] + " svelte-fwe7fw")),
          d(e, "bottom", t[0] + "rem"),
          d(e, "--offset", t[0] + "rem");
      },
      m(t, o) {
        f(t, e, o),
          I(e, n),
          I(n, i),
          B(s, i, null),
          I(n, r),
          I(n, g),
          B(p, g, null),
          I(g, w),
          I(g, x),
          I(g, b),
          B(y, g, null),
          I(e, O),
          B(D, e, null),
          (S = !0),
          R || ((P = m(e, "dragover", yn)), (R = !0));
      },
      p(t, n) {
        const i = {};
        8 & n && (i.$$scope = { dirty: n, ctx: t }), p.$set(i);
        const s = {};
        2 & n &&
          (s.tooltip =
            "Toggle " + (t[1] == lt.Dark ? "Light" : "Dark") + " mode"),
          8 & n && (s.$$scope = { dirty: n, ctx: t }),
          y.$set(s),
          (!S ||
            (2 & n &&
              k !== (k = "menu-container " + t[1] + " svelte-fwe7fw"))) &&
            u(e, "class", k),
          (!S || 1 & n) && d(e, "bottom", t[0] + "rem"),
          (!S || 1 & n) && d(e, "--offset", t[0] + "rem");
      },
      i(t) {
        S ||
          ($(s.$$.fragment, t),
          $(p.$$.fragment, t),
          $(y.$$.fragment, t),
          $(D.$$.fragment, t),
          o(() => {
            C && C.end(1), z || (z = Z(e, U, { duration: 500 })), z.start();
          }),
          (S = !0));
      },
      o(t) {
        v(s.$$.fragment, t),
          v(p.$$.fragment, t),
          v(y.$$.fragment, t),
          v(D.$$.fragment, t),
          z && z.invalidate(),
          (C = X(e, U, { duration: 500 })),
          (S = !1);
      },
      d(t) {
        t && h(e), V(s), V(p), V(y), V(D), t && C && C.end(), (R = !1), P();
      },
    }
  );
}
function En(t) {
  let e, n;
  return (
    (e = new je({})),
    {
      c() {
        _(e.$$.fragment);
      },
      l(t) {
        M(e.$$.fragment, t);
      },
      m(t, i) {
        B(e, t, i), (n = !0);
      },
      i(t) {
        n || ($(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        V(e, t);
      },
    }
  );
}
function bn(t) {
  let e, n;
  return (
    (e = new Qe({})),
    {
      c() {
        _(e.$$.fragment);
      },
      l(t) {
        M(e.$$.fragment, t);
      },
      m(t, i) {
        B(e, t, i), (n = !0);
      },
      i(t) {
        n || ($(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        V(e, t);
      },
    }
  );
}
function Tn(t) {
  let e,
    n,
    i = t[2] && xn(t);
  return {
    c() {
      i && i.c(), (e = z());
    },
    l(t) {
      i && i.l(t), (e = z());
    },
    m(t, s) {
      i && i.m(t, s), f(t, e, s), (n = !0);
    },
    p(t, [n]) {
      t[2]
        ? i
          ? (i.p(t, n), 4 & n && $(i, 1))
          : ((i = xn(t)), i.c(), $(i, 1), i.m(e.parentNode, e))
        : i &&
          (C(),
          v(i, 1, 1, () => {
            i = null;
          }),
          S());
    },
    i(t) {
      n || ($(i), (n = !0));
    },
    o(t) {
      v(i), (n = !1);
    },
    d(t) {
      i && i.d(t), t && h(e);
    },
  };
}
function yn(t) {
  t.preventDefault(), (t.dataTransfer.dropEffect = "none");
}
function In(t, e, n) {
  let i;
  R(t, Wt, (t) => n(2, (i = t)));
  let { offset: s = 0 } = e,
    o = lt.Dark;
  return (
    ct.subscribe((t) => n(1, (o = t))),
    (t.$$set = (t) => {
      "offset" in t && n(0, (s = t.offset));
    }),
    [s, o, i]
  );
}
class On extends n {
  constructor(t) {
    super(), i(this, t, In, Tn, s, { offset: 0 });
  }
}
var Dn, kn;
function zn(t) {
  let e, n, i;
  return {
    c() {
      (e = L("svg")), (n = L("g")), (i = L("path")), this.h();
    },
    l(t) {
      e = c(
        t,
        "svg",
        { xmlns: !0, "xmlns:xlink": !0, viewBox: !0, version: !0, class: !0 },
        1
      );
      var s = a(e);
      n = c(s, "g", { id: !0 }, 1);
      var o = a(n);
      (i = c(o, "path", { style: !0, d: !0 }, 1)),
        a(i).forEach(h),
        o.forEach(h),
        s.forEach(h),
        this.h();
    },
    h() {
      d(i, "stroke", "none"),
        d(i, "fill-rule", "evenodd"),
        d(i, "fill", t[0]),
        d(i, "fill-opacity", "1"),
        u(
          i,
          "d",
          "M 47.113281 2.878906 C 44.402344 3.292969 43.078125 20.101562 44.292969 22.375 C 46.363281 21.015625 49.464844 14.535156 50.425781 12.332031 C 49.675781 14.378906 48.730469 24.097656 49.117188 24.214844 C 49.9375 25.304688 61.0625 6.96875 57.828125 5.65625 C 57.367188 5.46875 54.242188 11.203125 51.640625 17.054688 C 51.667969 14.554688 53.691406 6.992188 52.867188 4.699219 C 51.21875 4.210938 48.085938 11.386719 46.804688 14.75 C 46.402344 13.042969 48.566406 3.710938 47.117188 2.878906 Z M 22.515625 8.480469 C 16.867188 8.480469 16.867188 14.132812 19.6875 22.605469 C 21.101562 26.84375 18.277344 25.433594 17.296875 23.269531 C 12.628906 11.308594 8.390625 12.71875 5.5625 14.132812 C 2.738281 16.957031 7.027344 25.730469 7.035156 27.417969 C 2.292969 35.558594 1.328125 45.207031 5.5625 52.273438 C 16.867188 67.8125 32.402344 62.160156 56.96875 44.996094 C 63.226562 39.820312 60.652344 35.320312 55.292969 32.390625 C 42.332031 23.914062 28.164062 25.433594 28.164062 24.019531 C 28.164062 15.546875 29.140625 8.621094 22.515625 8.480469 Z M 36.640625 35.285156 C 36.183594 37.78125 31.179688 43.347656 29.625 44.960938 C 30.792969 43.648438 39.941406 38.703125 40.203125 39.027344 C 41.535156 39.359375 29.339844 55.183594 26.878906 52.707031 C 26.527344 52.351562 29.582031 47.960938 34.578125 44.113281 C 32.285156 45.113281 25.617188 48.761719 23.183594 48.890625 C 22.09375 47.558594 29.089844 43.113281 30.585938 40.558594 C 28.855469 40.851562 19.730469 45.136719 18.410156 44.125 C 17.738281 41.460938 33.742188 36.800781 36.644531 35.285156 Z M 36.640625 35.285156 "
        ),
        u(n, "id", "surface1"),
        u(e, "xmlns", "http://www.w3.org/2000/svg"),
        u(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        u(e, "viewBox", "0 0 64 64"),
        u(e, "version", "1.1"),
        u(e, "class", "svelte-5hxoc1");
    },
    m(t, s) {
      f(t, e, s), I(e, n), I(n, i);
    },
    p(t, [e]) {
      1 & e && d(i, "fill", t[0]);
    },
    i: k,
    o: k,
    d(t) {
      t && h(e);
    },
  };
}
function Cn(t, e, n) {
  let { fill: i = "" } = e;
  return (
    (t.$$set = (t) => {
      "fill" in t && n(0, (i = t.fill));
    }),
    [i]
  );
}
class Sn extends n {
  constructor(t) {
    super(), i(this, t, Cn, zn, s, { fill: 0 });
  }
}
function Rn(t) {
  document.body.style.cursor = t;
}
((kn = Dn || (Dn = {})).ALIAS = "alias"),
  (kn.ALL_SCROLL = "all-scroll"),
  (kn.AUTO = "auto"),
  (kn.CELL = "cell"),
  (kn.CONTEXT_MENU = "context-menu"),
  (kn.COL_RESIZE = "col-resize"),
  (kn.COPY = "copy"),
  (kn.CROSSHAIR = "crosshair"),
  (kn.DEFAULT = "default"),
  (kn.E_RESIZE = "e-resize"),
  (kn.EW_RESIZE = "ew-resize"),
  (kn.GRAB = "grab"),
  (kn.GRABBING = "grabbing"),
  (kn.HELP = "help"),
  (kn.MOVE = "move"),
  (kn.N_RESIZE = "n-resize"),
  (kn.NE_RESIZE = "ne-resize"),
  (kn.NESW_RESIZE = "nesw-resize"),
  (kn.NS_RESIZE = "ns-resize"),
  (kn.NW_RESIZE = "nw-resize"),
  (kn.NWSE_RESIZE = "nwse-resize"),
  (kn.NO_DROP = "no-drop"),
  (kn.NONE = "none"),
  (kn.NOT_ALLOWED = "not-allowed"),
  (kn.POINTER = "pointer"),
  (kn.PROGRESS = "progress"),
  (kn.ROW_RESIZE = "row-resize"),
  (kn.S_RESIZE = "s-resize"),
  (kn.SE_RESIZE = "se-resize"),
  (kn.SW_RESIZE = "sw-resize"),
  (kn.TEXT = "text"),
  (kn.URL = "url"),
  (kn.W_RESIZE = "w-resize"),
  (kn.WAIT = "wait"),
  (kn.ZOOM_IN = "zoom-in"),
  (kn.ZOOM_OUT = "zoom-out"),
  (kn.INITIAL = "initial");
function _n(t, e, n) {
  const i = t.slice();
  return (i[20] = e[n].program), (i[21] = e[n].row), (i[22] = e[n].ghost), i;
}
function Mn(t) {
  let e, n;
  return (
    (e = new Sn({})),
    {
      c() {
        _(e.$$.fragment);
      },
      l(t) {
        M(e.$$.fragment, t);
      },
      m(t, i) {
        B(e, t, i), (n = !0);
      },
      i(t) {
        n || ($(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        V(e, t);
      },
    }
  );
}
function Pn(t) {
  let e, n;
  return (
    (e = new He({
      props: { program: t[20], row: t[21], height: `${t[1]}rem` },
    })),
    {
      c() {
        _(e.$$.fragment);
      },
      l(t) {
        M(e.$$.fragment, t);
      },
      m(t, i) {
        B(e, t, i), (n = !0);
      },
      p(t, n) {
        const i = {};
        8 & n && (i.program = t[20]),
          8 & n && (i.row = t[21]),
          2 & n && (i.height = `${t[1]}rem`),
          e.$set(i);
      },
      i(t) {
        n || ($(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        V(e, t);
      },
    }
  );
}
function Bn(t) {
  let e, n, i;
  return {
    c() {
      (e = l("div")), (n = l("div")), (i = E()), this.h();
    },
    l(t) {
      e = c(t, "DIV", { style: !0 });
      var s = a(e);
      (n = c(s, "DIV", { style: !0 })),
        a(n).forEach(h),
        (i = T(s)),
        s.forEach(h),
        this.h();
    },
    h() {
      d(n, "padding-top", "100%"),
        d(e, "grid-row", t[21]),
        d(e, "height", t[1] + "rem");
    },
    m(t, s) {
      f(t, e, s), I(e, n), I(e, i);
    },
    p(t, n) {
      8 & n && d(e, "grid-row", t[21]), 2 & n && d(e, "height", t[1] + "rem");
    },
    i: k,
    o: k,
    d(t) {
      t && h(e);
    },
  };
}
function Vn(t) {
  let e, n, i, s;
  const o = [Bn, Pn],
    r = [];
  function l(t, e) {
    return t[22] || !t[20] ? 0 : 1;
  }
  return (
    (e = l(t)),
    (n = r[e] = o[e](t)),
    {
      c() {
        n.c(), (i = z());
      },
      l(t) {
        n.l(t), (i = z());
      },
      m(t, n) {
        r[e].m(t, n), f(t, i, n), (s = !0);
      },
      p(t, s) {
        let c = e;
        (e = l(t)),
          e === c
            ? r[e].p(t, s)
            : (C(),
              v(r[c], 1, 1, () => {
                r[c] = null;
              }),
              S(),
              (n = r[e]),
              n ? n.p(t, s) : ((n = r[e] = o[e](t)), n.c()),
              $(n, 1),
              n.m(i.parentNode, i));
      },
      i(t) {
        s || ($(n), (s = !0));
      },
      o(t) {
        v(n), (s = !1);
      },
      d(t) {
        r[e].d(t), t && h(i);
      },
    }
  );
}
function Nn(t) {
  let e, n, i, s, o, r, g, p, x, b, y, O, D, k;
  (n = new On({ props: { offset: t[0] } })),
    (p = new Ye({
      props: { $$slots: { default: [Mn] }, $$scope: { ctx: t } },
    }));
  let z = t[3],
    R = [];
  for (let l = 0; l < z.length; l += 1) R[l] = Vn(_n(t, z, l));
  const P = (t) =>
    v(R[t], 1, 1, () => {
      R[t] = null;
    });
  return {
    c() {
      (e = l("div")),
        _(n.$$.fragment),
        (i = E()),
        (s = l("div")),
        (o = E()),
        (r = l("div")),
        (g = l("div")),
        _(p.$$.fragment),
        (x = E()),
        (b = l("div")),
        (y = l("div"));
      for (let t = 0; t < R.length; t += 1) R[t].c();
      this.h();
    },
    l(t) {
      e = c(t, "DIV", { class: !0, style: !0 });
      var l = a(e);
      M(n.$$.fragment, l),
        (i = T(l)),
        (s = c(l, "DIV", { class: !0 })),
        a(s).forEach(h),
        (o = T(l)),
        (r = c(l, "DIV", { class: !0, style: !0 }));
      var u = a(r);
      g = c(u, "DIV", { class: !0 });
      var d = a(g);
      M(p.$$.fragment, d),
        d.forEach(h),
        (x = T(u)),
        (b = c(u, "DIV", { class: !0 }));
      var f = a(b);
      y = c(f, "DIV", { class: !0, style: !0 });
      var m = a(y);
      for (let e = 0; e < R.length; e += 1) R[e].l(m);
      m.forEach(h), f.forEach(h), u.forEach(h), l.forEach(h), this.h();
    },
    h() {
      u(s, "class", "border svelte-10fyizw"),
        u(g, "class", "menu-button-container svelte-10fyizw"),
        u(y, "class", "launchers svelte-10fyizw"),
        d(y, "grid-template-columns", t[5]),
        u(b, "class", "launcher-container"),
        u(r, "class", "taskbar-content svelte-10fyizw"),
        d(r, "height", t[0] + "rem"),
        u(e, "class", "taskbar svelte-10fyizw"),
        d(e, "height", t[0] + "rem"),
        d(e, "z-index", t[2]);
    },
    m(l, c) {
      f(l, e, c),
        B(n, e, null),
        I(e, i),
        I(e, s),
        I(e, o),
        I(e, r),
        I(r, g),
        B(p, g, null),
        I(r, x),
        I(r, b),
        I(b, y);
      for (let t = 0; t < R.length; t += 1) R[t].m(y, null);
      t[13](r),
        (O = !0),
        D ||
          ((k = [
            m(window, "mouseup", t[6]),
            m(window, "mousemove", t[7]),
            m(s, "mousedown", t[8]),
            m(r, "drop", t[9]),
            m(r, "dragover", t[10]),
          ]),
          (D = !0));
    },
    p(t, [i]) {
      const s = {};
      1 & i && (s.offset = t[0]), n.$set(s);
      const o = {};
      if (
        (33554432 & i && (o.$$scope = { dirty: i, ctx: t }), p.$set(o), 10 & i)
      ) {
        let e;
        for (z = t[3], e = 0; e < z.length; e += 1) {
          const n = _n(t, z, e);
          R[e]
            ? (R[e].p(n, i), $(R[e], 1))
            : ((R[e] = Vn(n)), R[e].c(), $(R[e], 1), R[e].m(y, null));
        }
        for (C(), e = z.length; e < R.length; e += 1) P(e);
        S();
      }
      (!O || 32 & i) && d(y, "grid-template-columns", t[5]),
        (!O || 1 & i) && d(r, "height", t[0] + "rem"),
        (!O || 1 & i) && d(e, "height", t[0] + "rem"),
        (!O || 4 & i) && d(e, "z-index", t[2]);
    },
    i(t) {
      if (!O) {
        $(n.$$.fragment, t), $(p.$$.fragment, t);
        for (let t = 0; t < z.length; t += 1) $(R[t]);
        O = !0;
      }
    },
    o(t) {
      v(n.$$.fragment, t), v(p.$$.fragment, t), (R = R.filter(Boolean));
      for (let e = 0; e < R.length; e += 1) v(R[e]);
      O = !1;
    },
    d(i) {
      i && h(e), V(n), V(p), H(R, i), t[13](null), (D = !1), w(k);
    },
  };
}
function Ln(t, e, n) {
  let i,
    { rows: s = 1 } = e,
    { maxRows: o = 3 } = e,
    { height: r = 3.5 } = e,
    { rowHeight: l = 3.5 } = e,
    { z_index: c = 9 } = e,
    a = 0,
    h = 0,
    u = !1,
    d = 0,
    f = [];
  const m = `${l}rem`;
  let g = `repeat(${f.length}, ${m})`;
  return (
    G(() => {
      (d = Tt(r)), n(4, (i.ondragstart = () => !1), i);
    }),
    Me.subscribe((t) => {
      n(3, (f = [])),
        t.programShortcuts.forEach((t) =>
          f.push({ program: t.program, row: 1, ghost: !1 })
        ),
        n(11, s),
        n(0, r),
        n(1, l),
        n(12, o),
        n(3, f);
    }),
    (t.$$set = (t) => {
      "rows" in t && n(11, (s = t.rows)),
        "maxRows" in t && n(12, (o = t.maxRows)),
        "height" in t && n(0, (r = t.height)),
        "rowHeight" in t && n(1, (l = t.rowHeight)),
        "z_index" in t && n(2, (c = t.z_index));
    }),
    (t.$$.update = () => {
      if (
        (3 & t.$$.dirty && (r < l && n(0, (r = l)), n(11, (s = r / l))),
        6155 & t.$$.dirty)
      ) {
        if (
          (r / l != s && n(0, (r = s * l)),
          s > o && (n(11, (s = o)), n(0, (r = s * l))),
          n(3, (f = f.filter((t) => !t.ghost))),
          s > f.length)
        )
          for (let e = 0; e < s - f.length; e++)
            f.push({ program: null, row: 1, ghost: !0 });
        let t = 1;
        f.forEach((e) => {
          t > s && (t = 1), (e.row = t++);
        }),
          n(3, f),
          n(11, s),
          n(0, r),
          n(1, l),
          n(12, o);
      }
      8 & t.$$.dirty && n(5, (g = `repeat(${f.length}, ${m})`));
    }),
    [
      r,
      l,
      c,
      f,
      i,
      g,
      function () {
        (u = !1), (a = 0), (h = 0), (d = Tt(r)), Rn(Dn.AUTO);
      },
      function (t) {
        if (!u) return;
        const e = a - t.pageY;
        (d = h + e),
          d > Tt(r + l)
            ? n(0, (r += r + l <= l * o ? l : 0))
            : d < Tt(r - l) && n(0, (r -= r - l >= l ? l : 0));
      },
      function (t) {
        (u = !0), (a = t.pageY), (h = d), Rn(Dn.N_RESIZE);
      },
      function (t) {
        if (!Ht(t.dataTransfer.getData("program_id").trim())) return;
        let e = Number(t.dataTransfer.getData("program_id"));
        isNaN(e) || Pe(we(e));
      },
      function (t) {
        Ht(t.dataTransfer.getData("program_id").trim()) &&
          (t.preventDefault(), (t.dataTransfer.dropEffect = "move"));
      },
      s,
      o,
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (i = t), n(4, i);
        });
      },
    ]
  );
}
class Gn extends n {
  constructor(t) {
    super(),
      i(this, t, Ln, Nn, s, {
        rows: 11,
        maxRows: 12,
        height: 0,
        rowHeight: 1,
        z_index: 2,
      });
  }
}
function Hn(t) {
  let e, n, i, s, o;
  return {
    c() {
      (e = l("button")), (n = L("svg")), (i = L("path")), this.h();
    },
    l(t) {
      e = c(t, "BUTTON", { class: !0, style: !0 });
      var s = a(e);
      n = c(
        s,
        "svg",
        { height: !0, viewBox: !0, width: !0, xmlns: !0, fill: !0, class: !0 },
        1
      );
      var o = a(n);
      (i = c(o, "path", { d: !0 }, 1)),
        a(i).forEach(h),
        o.forEach(h),
        s.forEach(h),
        this.h();
    },
    h() {
      u(
        i,
        "d",
        "m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"
      ),
        u(n, "height", "100%"),
        u(n, "viewBox", "0 0 365.696 365.696"),
        u(n, "width", "auto"),
        u(n, "xmlns", "http://www.w3.org/2000/svg"),
        u(n, "fill", "white"),
        u(n, "class", "svelte-1hoypmw"),
        u(e, "class", "window-close-button svelte-1hoypmw"),
        d(e, "width", t[0]),
        d(e, "height", t[1]);
    },
    m(r, l) {
      f(r, e, l),
        I(e, n),
        I(n, i),
        s || ((o = [m(e, "click", t[2]), m(e, "dragstart", An)]), (s = !0));
    },
    p(t, [n]) {
      1 & n && d(e, "width", t[0]), 2 & n && d(e, "height", t[1]);
    },
    i: k,
    o: k,
    d(t) {
      t && h(e), (s = !1), w(o);
    },
  };
}
const An = (t) => t.preventDefault();
function Wn(t, e, n) {
  let { width: i = "3rem" } = e,
    { height: s = "100%" } = e;
  return (
    (t.$$set = (t) => {
      "width" in t && n(0, (i = t.width)),
        "height" in t && n(1, (s = t.height));
    }),
    [
      i,
      s,
      function (e) {
        A.call(this, t, e);
      },
    ]
  );
}
class Yn extends n {
  constructor(t) {
    super(), i(this, t, Wn, Hn, s, { width: 0, height: 1 });
  }
}
function Fn(t) {
  let e, n, i, s, o;
  return {
    c() {
      (e = l("button")), (n = L("svg")), (i = L("path")), this.h();
    },
    l(t) {
      e = c(t, "BUTTON", { class: !0, style: !0 });
      var s = a(e);
      n = c(
        s,
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
      var o = a(n);
      (i = c(o, "path", { id: !0, d: !0 }, 1)),
        a(i).forEach(h),
        o.forEach(h),
        s.forEach(h),
        this.h();
    },
    h() {
      u(i, "id", "XMLID_1_"),
        u(
          i,
          "d",
          "M120,76H8c-4.4,0-8-3.6-8-8v-8c0-4.4,3.6-8,8-8h112c4.4,0,8,3.6,8,8v8C128,72.4,124.4,76,120,76z"
        ),
        u(n, "version", "1.1"),
        u(n, "id", "Layer_1"),
        u(n, "xmlns", "http://www.w3.org/2000/svg"),
        u(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        u(n, "x", "0px"),
        u(n, "y", "0px"),
        u(n, "viewBox", "0 0 128 128"),
        u(n, "enable-background", "new 0 0 128 128"),
        u(n, "xml:space", "preserve"),
        u(n, "class", "svelte-7yf67q"),
        u(e, "class", "window-minimize-button svelte-7yf67q"),
        d(e, "width", t[0]),
        d(e, "height", t[1]);
    },
    m(r, l) {
      f(r, e, l),
        I(e, n),
        I(n, i),
        s || ((o = [m(e, "click", t[2]), m(e, "dragstart", Zn)]), (s = !0));
    },
    p(t, [n]) {
      1 & n && d(e, "width", t[0]), 2 & n && d(e, "height", t[1]);
    },
    i: k,
    o: k,
    d(t) {
      t && h(e), (s = !1), w(o);
    },
  };
}
const Zn = (t) => t.preventDefault();
function Un(t, e, n) {
  let { width: i = "3rem" } = e,
    { height: s = "100%" } = e;
  return (
    (t.$$set = (t) => {
      "width" in t && n(0, (i = t.width)),
        "height" in t && n(1, (s = t.height));
    }),
    [
      i,
      s,
      function (e) {
        A.call(this, t, e);
      },
    ]
  );
}
class Xn extends n {
  constructor(t) {
    super(), i(this, t, Un, Fn, s, { width: 0, height: 1 });
  }
}
function qn(t) {
  let e, n;
  return {
    c() {
      (e = L("svg")), (n = L("path")), this.h();
    },
    l(t) {
      e = c(
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
      (n = c(
        i,
        "path",
        { id: !0, "stroke-width": !0, "stroke-miterlimit": !0, d: !0 },
        1
      )),
        a(n).forEach(h),
        i.forEach(h),
        this.h();
    },
    h() {
      u(n, "id", "XMLID_1_"),
        u(n, "stroke-width", "18"),
        u(n, "stroke-miterlimit", "10"),
        u(
          n,
          "d",
          "M102,114H26c-6.6,0-12-5.4-12-12V26\n   c0-6.6,5.4-12,12-12h76c6.6,0,12,5.4,12,12v76C114,108.6,108.6,114,102,114z"
        ),
        u(e, "version", "1.1"),
        u(e, "id", "Layer_1"),
        u(e, "xmlns", "http://www.w3.org/2000/svg"),
        u(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        u(e, "x", "0px"),
        u(e, "y", "0px"),
        u(e, "viewBox", "0 0 128 128"),
        u(e, "enable-background", "new 0 0 128 128"),
        u(e, "xml:space", "preserve"),
        u(e, "class", "svelte-2l6i41");
    },
    m(t, i) {
      f(t, e, i), I(e, n);
    },
    d(t) {
      t && h(e);
    },
  };
}
function jn(t) {
  let e, n, i;
  return {
    c() {
      (e = L("svg")), (n = L("path")), (i = L("path")), this.h();
    },
    l(t) {
      e = c(
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
      (n = c(
        s,
        "path",
        { id: !0, "stroke-width": !0, "stroke-miterlimit": !0, d: !0 },
        1
      )),
        a(n).forEach(h),
        (i = c(
          s,
          "path",
          { id: !0, "stroke-width": !0, "stroke-miterlimit": !0, d: !0 },
          1
        )),
        a(i).forEach(h),
        s.forEach(h),
        this.h();
    },
    h() {
      u(n, "id", "XMLID_1_"),
        u(n, "stroke-width", "18"),
        u(n, "stroke-miterlimit", "10"),
        u(
          n,
          "d",
          "M81.5,122H18c-6.6,0-12-5.4-12-12\n   V46.5c0-6.6,5.4-12,12-12h63.5c6.6,0,12,5.4,12,12V110C93.5,116.6,88.1,122,81.5,122z"
        ),
        u(i, "id", "XMLID_2_"),
        u(i, "stroke-width", "18"),
        u(i, "stroke-miterlimit", "10"),
        u(
          i,
          "d",
          "M94,97c-0.2-7.3-0.5-18.6-0.5-32.5\n   c0-18.4,0.5-23.2-3.3-27c-4.7-4.8-11.2-3.1-34.3-2.8c-10.7,0.2-19.5,0-25.5-0.3c-2-10.2,0.8-19.9,7.5-25c1.6-1.2,4.3-2.8,8.5-3.5\n   H110c6.6,0,12,5.4,12,12v63.5c-0.4,2.6-1.4,5.7-3.5,8.5C113.5,96.5,103.9,99.1,94,97z"
        ),
        u(e, "version", "1.1"),
        u(e, "id", "Layer_1"),
        u(e, "xmlns", "http://www.w3.org/2000/svg"),
        u(e, "xmlns:xlink", "http://www.w3.org/1999/xlink"),
        u(e, "x", "0px"),
        u(e, "y", "0px"),
        u(e, "viewBox", "0 0 128 128"),
        u(e, "enable-background", "new 0 0 128 128"),
        u(e, "xml:space", "preserve"),
        u(e, "class", "svelte-2l6i41");
    },
    m(t, s) {
      f(t, e, s), I(e, n), I(e, i);
    },
    d(t) {
      t && h(e);
    },
  };
}
function Jn(t) {
  let e, n, i;
  function s(t, e) {
    return t[2] ? jn : qn;
  }
  let o = s(t),
    r = o(t);
  return {
    c() {
      (e = l("button")), r.c(), this.h();
    },
    l(t) {
      e = c(t, "BUTTON", { class: !0, style: !0 });
      var n = a(e);
      r.l(n), n.forEach(h), this.h();
    },
    h() {
      u(e, "class", "window-resize-button svelte-2l6i41"),
        d(e, "width", t[0]),
        d(e, "height", t[1]);
    },
    m(s, o) {
      f(s, e, o),
        r.m(e, null),
        n || ((i = [m(e, "click", t[3]), m(e, "dragstart", Kn)]), (n = !0));
    },
    p(t, [n]) {
      o !== (o = s(t)) && (r.d(1), (r = o(t)), r && (r.c(), r.m(e, null))),
        1 & n && d(e, "width", t[0]),
        2 & n && d(e, "height", t[1]);
    },
    i: k,
    o: k,
    d(t) {
      t && h(e), r.d(), (n = !1), w(i);
    },
  };
}
const Kn = (t) => t.preventDefault();
function Qn(t, e, n) {
  let { width: i = "3rem" } = e,
    { height: s = "100%" } = e,
    { isFullscreen: o } = e;
  return (
    (t.$$set = (t) => {
      "width" in t && n(0, (i = t.width)),
        "height" in t && n(1, (s = t.height)),
        "isFullscreen" in t && n(2, (o = t.isFullscreen));
    }),
    [
      i,
      s,
      o,
      function (e) {
        A.call(this, t, e);
      },
    ]
  );
}
class ti extends n {
  constructor(t) {
    super(), i(this, t, Qn, Jn, s, { width: 0, height: 1, isFullscreen: 2 });
  }
}
const ei = (t) => ({}),
  ni = (t) => ({});
function ii(t) {
  let e, n, i, s, g, x, O, k, z, C, S, R, P, N, L, G, H, A, W, Y, F, U, j;
  (S = new Xn({ props: { width: "2.5rem", height: "100%" } })),
    S.$on("click", t[43]),
    (P = new ti({
      props: { isFullscreen: t[4], width: "2.5rem", height: "100%" },
    })),
    P.$on("click", t[44]),
    (L = new Yn({ props: { width: "2.5rem", height: "100%" } })),
    L.$on("click", t[45]);
  const J = t[41].content,
    K = r(J, t, t[40], ni);
  let Q = !t[4] && si(t);
  return {
    c() {
      (e = l("div")),
        (n = l("div")),
        (i = l("div")),
        (s = l("img")),
        (x = E()),
        (O = l("p")),
        (k = b(t[6])),
        (z = E()),
        (C = l("div")),
        _(S.$$.fragment),
        (R = E()),
        _(P.$$.fragment),
        (N = E()),
        _(L.$$.fragment),
        (G = E()),
        (H = l("div")),
        K && K.c(),
        (A = E()),
        Q && Q.c(),
        this.h();
    },
    l(o) {
      e = c(o, "DIV", { class: !0, style: !0 });
      var r = a(e);
      n = c(r, "DIV", { class: !0, draggable: !0 });
      var l = a(n);
      i = c(l, "DIV", { class: !0 });
      var u = a(i);
      (s = c(u, "IMG", { class: !0, src: !0, alt: !0 })),
        (x = T(u)),
        (O = c(u, "P", { class: !0 }));
      var d = a(O);
      (k = y(d, t[6])),
        d.forEach(h),
        u.forEach(h),
        (z = T(l)),
        (C = c(l, "DIV", { class: !0 }));
      var f = a(C);
      M(S.$$.fragment, f),
        (R = T(f)),
        M(P.$$.fragment, f),
        (N = T(f)),
        M(L.$$.fragment, f),
        f.forEach(h),
        l.forEach(h),
        (G = T(r)),
        (H = c(r, "DIV", { class: !0 }));
      var m = a(H);
      K && K.l(m),
        m.forEach(h),
        (A = T(r)),
        Q && Q.l(r),
        r.forEach(h),
        this.h();
    },
    h() {
      u(s, "class", "window-icon svelte-723hf0"),
        s.src !== (g = t[7]) && u(s, "src", g),
        u(s, "alt", t[6]),
        u(O, "class", "window-title svelte-723hf0"),
        u(i, "class", "window-info svelte-723hf0"),
        u(C, "class", "control-buttons svelte-723hf0"),
        u(n, "class", "control-bar svelte-723hf0"),
        u(n, "draggable", "true"),
        u(H, "class", "window-content svelte-723hf0"),
        u(e, "class", "window svelte-723hf0"),
        d(
          e,
          "width",
          (t[4] ? t[13] : t[1] + t[2] <= t[13] ? t[1] : t[13] - t[2]) + "px"
        ),
        d(
          e,
          "height",
          (t[4] ? t[12] : t[0] + t[3] <= t[12] ? t[0] : t[12] - t[3]) + "px"
        ),
        d(e, "bottom", t[8] + "px"),
        d(
          e,
          "transform",
          "translate(" + (t[4] ? 0 : t[2]) + "px, -" + (t[4] ? 0 : t[3]) + "px)"
        ),
        d(e, "min-width", t[9] + "px"),
        d(e, "min-height", t[10] + "px"),
        d(e, "z-index", t[11]);
    },
    m(o, r) {
      f(o, e, r),
        I(e, n),
        I(n, i),
        I(i, s),
        I(i, x),
        I(i, O),
        I(O, k),
        I(n, z),
        I(n, C),
        B(S, C, null),
        I(C, R),
        B(P, C, null),
        I(C, N),
        B(L, C, null),
        I(e, G),
        I(e, H),
        K && K.m(H, null),
        t[46](H),
        I(e, A),
        Q && Q.m(e, null),
        t[55](e),
        (F = !0),
        U ||
          ((j = [
            m(i, "dragstart", li),
            m(n, "dragstart", t[23]),
            m(n, "touchstart", t[24]),
            m(n, "dragend", t[25]),
            m(n, "touchend", ri),
            m(n, "dblclick", t[27]),
            m(e, "mousedown", t[31]),
          ]),
          (U = !0));
    },
    p(t, n) {
      (!F || (128 & n[0] && s.src !== (g = t[7]))) && u(s, "src", g),
        (!F || 64 & n[0]) && u(s, "alt", t[6]),
        (!F || 64 & n[0]) && D(k, t[6]);
      const i = {};
      16 & n[0] && (i.isFullscreen = t[4]),
        P.$set(i),
        K &&
          K.p &&
          (!F || 512 & n[1]) &&
          p(K, J, t, t[40], F ? n : [-1, -1, -1], ei, ni),
        t[4]
          ? Q && (Q.d(1), (Q = null))
          : Q
          ? Q.p(t, n)
          : ((Q = si(t)), Q.c(), Q.m(e, null)),
        (!F || 8214 & n[0]) &&
          d(
            e,
            "width",
            (t[4] ? t[13] : t[1] + t[2] <= t[13] ? t[1] : t[13] - t[2]) + "px"
          ),
        (!F || 4121 & n[0]) &&
          d(
            e,
            "height",
            (t[4] ? t[12] : t[0] + t[3] <= t[12] ? t[0] : t[12] - t[3]) + "px"
          ),
        (!F || 256 & n[0]) && d(e, "bottom", t[8] + "px"),
        (!F || 28 & n[0]) &&
          d(
            e,
            "transform",
            "translate(" +
              (t[4] ? 0 : t[2]) +
              "px, -" +
              (t[4] ? 0 : t[3]) +
              "px)"
          ),
        (!F || 512 & n[0]) && d(e, "min-width", t[9] + "px"),
        (!F || 1024 & n[0]) && d(e, "min-height", t[10] + "px"),
        (!F || 2048 & n[0]) && d(e, "z-index", t[11]);
    },
    i(t) {
      F ||
        ($(S.$$.fragment, t),
        $(P.$$.fragment, t),
        $(L.$$.fragment, t),
        $(K, t),
        o(() => {
          Y && Y.end(1), W || (W = Z(e, q, { duration: 250 })), W.start();
        }),
        (F = !0));
    },
    o(t) {
      v(S.$$.fragment, t),
        v(P.$$.fragment, t),
        v(L.$$.fragment, t),
        v(K, t),
        W && W.invalidate(),
        (Y = X(e, q, { duration: 250 })),
        (F = !1);
    },
    d(n) {
      n && h(e),
        V(S),
        V(P),
        V(L),
        K && K.d(n),
        t[46](null),
        Q && Q.d(),
        t[55](null),
        n && Y && Y.end(),
        (U = !1),
        w(j);
    },
  };
}
function si(t) {
  let e, n, i, s, o, r, d, g, p, $, v, x, b, y, I, O, D;
  return {
    c() {
      (e = l("div")),
        (n = E()),
        (i = l("div")),
        (s = E()),
        (o = l("div")),
        (r = E()),
        (d = l("div")),
        (g = E()),
        (p = l("div")),
        ($ = E()),
        (v = l("div")),
        (x = E()),
        (b = l("div")),
        (y = E()),
        (I = l("div")),
        this.h();
    },
    l(t) {
      (e = c(t, "DIV", { class: !0 })),
        a(e).forEach(h),
        (n = T(t)),
        (i = c(t, "DIV", { class: !0 })),
        a(i).forEach(h),
        (s = T(t)),
        (o = c(t, "DIV", { class: !0 })),
        a(o).forEach(h),
        (r = T(t)),
        (d = c(t, "DIV", { class: !0 })),
        a(d).forEach(h),
        (g = T(t)),
        (p = c(t, "DIV", { class: !0 })),
        a(p).forEach(h),
        ($ = T(t)),
        (v = c(t, "DIV", { class: !0 })),
        a(v).forEach(h),
        (x = T(t)),
        (b = c(t, "DIV", { class: !0 })),
        a(b).forEach(h),
        (y = T(t)),
        (I = c(t, "DIV", { class: !0 })),
        a(I).forEach(h),
        this.h();
    },
    h() {
      u(e, "class", "border-top svelte-723hf0"),
        u(i, "class", "border-left svelte-723hf0"),
        u(o, "class", "border-right svelte-723hf0"),
        u(d, "class", "border-bottom svelte-723hf0"),
        u(p, "class", "border-top-left svelte-723hf0"),
        u(v, "class", "border-top-right svelte-723hf0"),
        u(b, "class", "border-bottom-left svelte-723hf0"),
        u(I, "class", "border-bottom-right svelte-723hf0");
    },
    m(l, c) {
      f(l, e, c),
        f(l, n, c),
        f(l, i, c),
        f(l, s, c),
        f(l, o, c),
        f(l, r, c),
        f(l, d, c),
        f(l, g, c),
        f(l, p, c),
        f(l, $, c),
        f(l, v, c),
        f(l, x, c),
        f(l, b, c),
        f(l, y, c),
        f(l, I, c),
        O ||
          ((D = [
            m(e, "mousedown", t[47]),
            m(i, "mousedown", t[48]),
            m(o, "mousedown", t[49]),
            m(d, "mousedown", t[50]),
            m(p, "mousedown", t[51]),
            m(v, "mousedown", t[52]),
            m(b, "mousedown", t[53]),
            m(I, "mousedown", t[54]),
          ]),
          (O = !0));
    },
    p: k,
    d(t) {
      t && h(e),
        t && h(n),
        t && h(i),
        t && h(s),
        t && h(o),
        t && h(r),
        t && h(d),
        t && h(g),
        t && h(p),
        t && h($),
        t && h(v),
        t && h(x),
        t && h(b),
        t && h(y),
        t && h(I),
        (O = !1),
        w(D);
    },
  };
}
function oi(t) {
  let e, n, i, s;
  o(t[42]);
  let r = !t[5] && ii(t);
  return {
    c() {
      r && r.c(), (e = z());
    },
    l(t) {
      r && r.l(t), (e = z());
    },
    m(o, l) {
      r && r.m(o, l),
        f(o, e, l),
        (n = !0),
        i ||
          ((s = [
            m(window, "dragover", t[19]),
            m(window, "touchmove", t[20]),
            m(window, "mouseup", t[22]),
            m(window, "mousemove", t[21]),
            m(window, "resize", t[42]),
          ]),
          (i = !0));
    },
    p(t, n) {
      t[5]
        ? r &&
          (C(),
          v(r, 1, 1, () => {
            r = null;
          }),
          S())
        : r
        ? (r.p(t, n), 32 & n[0] && $(r, 1))
        : ((r = ii(t)), r.c(), $(r, 1), r.m(e.parentNode, e));
    },
    i(t) {
      n || ($(r), (n = !0));
    },
    o(t) {
      v(r), (n = !1);
    },
    d(t) {
      r && r.d(t), t && h(e), (i = !1), w(s);
    },
  };
}
function ri(t) {}
const li = (t) => t.preventDefault();
function ci(t, e, n) {
  let i,
    s,
    o,
    r,
    l,
    c,
    { $$slots: a = {}, $$scope: h } = e,
    { title: u = "" } = e,
    { icon: d = "" } = e,
    { height: f = null } = e,
    { width: m = null } = e,
    { x: g = null } = e,
    { y: p = null } = e,
    { heightOffset: $ = 0 } = e,
    { widthOffset: v = 0 } = e,
    { minWidth: w = 250 } = e,
    { minHeight: E = 250 } = e,
    { fullscreen: b = !1 } = e,
    { minimized: T = !1 } = e,
    { z_index: y = 1 } = e,
    { onSelection: I = () => {} } = e,
    { onMinimize: O = () => {} } = e,
    { onClose: D = () => {} } = e,
    k = null,
    z = null,
    C = 0,
    S = 0,
    R = !1;
  var _, M;
  let P;
  ((M = _ || (_ = {}))[(M.TOP = 0)] = "TOP"),
    (M[(M.BOTTOM = 1)] = "BOTTOM"),
    (M[(M.LEFT = 2)] = "LEFT"),
    (M[(M.RIGHT = 3)] = "RIGHT"),
    (M[(M.TOPRIGHT = 4)] = "TOPRIGHT"),
    (M[(M.TOPLEFT = 5)] = "TOPLEFT"),
    (M[(M.BOTTOMRIGHT = 6)] = "BOTTOMRIGHT"),
    (M[(M.BOTTOMLEFT = 7)] = "BOTTOMLEFT");
  let B = 0,
    V = 0,
    N = !1,
    L = f,
    G = m,
    H = g,
    A = p,
    W = new Map([
      [_.TOP, Dn.N_RESIZE],
      [_.BOTTOM, Dn.S_RESIZE],
      [_.LEFT, Dn.W_RESIZE],
      [_.RIGHT, Dn.E_RESIZE],
      [_.TOPLEFT, Dn.NW_RESIZE],
      [_.TOPRIGHT, Dn.NE_RESIZE],
      [_.BOTTOMLEFT, Dn.SW_RESIZE],
      [_.BOTTOMRIGHT, Dn.SE_RESIZE],
    ]);
  function Y(t, e) {
    n(38, (R = !0)), (C = t), (S = e);
  }
  function F(t, e) {
    if (!R) return;
    b && (n(4, (b = !1)), n(2, (g = t - m / 2)), n(3, (p = s)));
    let i = t - C,
      o = e - S;
    (C = t), (S = e), n(2, (g += i)), n(3, (p -= o));
  }
  function Z(t, e) {
    var i, s;
    (P = e),
      (i = t.clientX),
      (s = t.clientY),
      (B = i),
      (V = s),
      n(39, (N = !0)),
      Rn(W.get(P)),
      (H = g),
      (A = p),
      (L = f),
      (G = m);
  }
  function U() {
    n(5, (T = !0)), O();
  }
  function X() {
    n(4, (b = !b));
  }
  function q() {
    D();
  }
  return (
    (t.$$set = (t) => {
      "title" in t && n(6, (u = t.title)),
        "icon" in t && n(7, (d = t.icon)),
        "height" in t && n(0, (f = t.height)),
        "width" in t && n(1, (m = t.width)),
        "x" in t && n(2, (g = t.x)),
        "y" in t && n(3, (p = t.y)),
        "heightOffset" in t && n(8, ($ = t.heightOffset)),
        "widthOffset" in t && n(32, (v = t.widthOffset)),
        "minWidth" in t && n(9, (w = t.minWidth)),
        "minHeight" in t && n(10, (E = t.minHeight)),
        "fullscreen" in t && n(4, (b = t.fullscreen)),
        "minimized" in t && n(5, (T = t.minimized)),
        "z_index" in t && n(11, (y = t.z_index)),
        "onSelection" in t && n(33, (I = t.onSelection)),
        "onMinimize" in t && n(34, (O = t.onMinimize)),
        "onClose" in t && n(35, (D = t.onClose)),
        "$$scope" in t && n(40, (h = t.$$scope));
    }),
    (t.$$.update = () => {
      (65536 & t.$$.dirty[0]) | (384 & t.$$.dirty[1]) &&
        c &&
        (n(16, (c.style.userSelect = R || N ? "none" : "initial"), c),
        n(16, (c.style.pointerEvents = R || N ? "none" : "initial"), c)),
        (32768 & t.$$.dirty[0]) | (2 & t.$$.dirty[1]) && n(13, (z = r - v)),
        8706 & t.$$.dirty[0] &&
          (m < w ? n(1, (m = w)) : z && m > z && n(1, (m = z))),
        16640 & t.$$.dirty[0] && n(12, (k = o - $)),
        5121 & t.$$.dirty[0] &&
          (f < E ? n(0, (f = E)) : k && f > k && n(0, (f = k))),
        8194 & t.$$.dirty[0] && null == m && null != z && n(1, (m = z)),
        (8198 & t.$$.dirty[0]) | (32 & t.$$.dirty[1]) &&
          (n(36, (i = Math.abs(z - m))),
          null == g && i
            ? n(2, (g = i / 2))
            : g >= i
            ? n(2, (g = i))
            : g < 0 && n(2, (g = 0))),
        4097 & t.$$.dirty[0] && null == f && null != k && n(0, (f = k)),
        (4105 & t.$$.dirty[0]) | (64 & t.$$.dirty[1]) &&
          (n(37, (s = Math.abs(k - f))),
          null == p && s
            ? n(3, (p = s / 2))
            : p >= s
            ? n(3, (p = s))
            : p < 0 && n(3, (p = 0)));
    }),
    [
      f,
      m,
      g,
      p,
      b,
      T,
      u,
      d,
      $,
      w,
      E,
      y,
      k,
      z,
      o,
      r,
      c,
      l,
      _,
      function (t) {
        R &&
          (t.preventDefault(),
          F(t.clientX, t.clientY),
          (t.dataTransfer.dropEffect = "move"));
      },
      function (t) {
        t.preventDefault(),
          F(t.targetTouches[0].clientX, t.targetTouches[0].clientY);
      },
      function (t) {
        if (!N) return;
        let e = t.clientX - B,
          o = t.clientY - V;
        (P != _.TOP && P != _.TOPLEFT && P != _.TOPRIGHT) ||
          (A - o < s && (n(0, (f -= o)), (L -= o))),
          (P != _.BOTTOM && P != _.BOTTOMLEFT && P != _.BOTTOMRIGHT) ||
            (A - o > 0 &&
              (L + o >= E && (n(3, (p -= o)), n(0, (f += o))), (L += o)),
            (A -= o)),
          (P != _.RIGHT && P != _.TOPRIGHT && P != _.BOTTOMRIGHT) ||
            (H + e < i && (n(1, (m += e)), (G += e))),
          (P != _.LEFT && P != _.TOPLEFT && P != _.BOTTOMLEFT) ||
            (H + e > 0 &&
              (G - e >= w && (n(2, (g += e)), n(1, (m -= e))), (G -= e)),
            (H += e)),
          (B = t.clientX),
          (V = t.clientY);
      },
      function (t) {
        N && (n(39, (N = !1)), Rn(Dn.AUTO), I());
      },
      function (t) {
        Y(t.clientX, t.clientY);
      },
      function (t) {
        Y(t.targetTouches[0].clientX, t.targetTouches[0].clientY);
      },
      function (t) {
        t.preventDefault(), t.clientX, t.clientY, n(38, (R = !1)), I();
      },
      Z,
      function (t) {
        n(4, (b = !b));
      },
      U,
      X,
      q,
      function (t) {
        I();
      },
      v,
      I,
      O,
      D,
      i,
      s,
      R,
      N,
      h,
      a,
      function () {
        n(14, (o = window.innerHeight)), n(15, (r = window.innerWidth));
      },
      () => U(),
      () => X(),
      () => q(),
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (c = t), n(16, c), n(38, R), n(39, N);
        });
      },
      (t) => Z(t, _.TOP),
      (t) => Z(t, _.LEFT),
      (t) => Z(t, _.RIGHT),
      (t) => Z(t, _.BOTTOM),
      (t) => Z(t, _.TOPLEFT),
      (t) => Z(t, _.TOPRIGHT),
      (t) => Z(t, _.BOTTOMLEFT),
      (t) => Z(t, _.BOTTOMRIGHT),
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (l = t), n(17, l);
        });
      },
    ]
  );
}
class ai extends n {
  constructor(t) {
    super(),
      i(
        this,
        t,
        ci,
        oi,
        s,
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
function hi(t, e, n) {
  const i = t.slice();
  return (i[21] = e[n]), i;
}
function ui(t, e, n) {
  const i = t.slice();
  return (
    (i[24] = e[n].id),
    (i[25] = e[n].name),
    (i[26] = e[n].icon),
    (i[27] = e[n].window),
    (i[28] = e),
    (i[29] = n),
    i
  );
}
function di(t) {
  let e, n, i, s, o, r, l, c, a;
  function h() {
    return t[7](t[24]);
  }
  function u() {
    return t[8](t[24]);
  }
  function d() {
    return t[9](t[24]);
  }
  function f(e) {
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
  function b(e) {
    t[16](e, t[27]);
  }
  let T = {
    title: t[25],
    icon: t[26],
    heightOffset: Tt(t[0]),
    onSelection: h,
    onMinimize: u,
    onClose: d,
    $$slots: { content: [fi] },
    $$scope: { ctx: t },
  };
  return (
    void 0 !== t[27].height && (T.height = t[27].height),
    void 0 !== t[27].width && (T.width = t[27].width),
    void 0 !== t[27].x && (T.x = t[27].x),
    void 0 !== t[27].y && (T.y = t[27].y),
    void 0 !== t[27].fullscreen && (T.fullscreen = t[27].fullscreen),
    void 0 !== t[27].minimized && (T.minimized = t[27].minimized),
    void 0 !== t[27].z_index && (T.z_index = t[27].z_index),
    (e = new ai({ props: T })),
    x.push(() => J(e, "height", f)),
    x.push(() => J(e, "width", m)),
    x.push(() => J(e, "x", g)),
    x.push(() => J(e, "y", p)),
    x.push(() => J(e, "fullscreen", w)),
    x.push(() => J(e, "minimized", E)),
    x.push(() => J(e, "z_index", b)),
    {
      c() {
        _(e.$$.fragment);
      },
      l(t) {
        M(e.$$.fragment, t);
      },
      m(t, n) {
        B(e, t, n), (a = !0);
      },
      p(a, f) {
        t = a;
        const m = {};
        2 & f && (m.title = t[25]),
          2 & f && (m.icon = t[26]),
          1 & f && (m.heightOffset = Tt(t[0])),
          2 & f && (m.onSelection = h),
          2 & f && (m.onMinimize = u),
          2 & f && (m.onClose = d),
          1073741826 & f && (m.$$scope = { dirty: f, ctx: t }),
          !n &&
            2 & f &&
            ((n = !0), (m.height = t[27].height), j(() => (n = !1))),
          !i && 2 & f && ((i = !0), (m.width = t[27].width), j(() => (i = !1))),
          !s && 2 & f && ((s = !0), (m.x = t[27].x), j(() => (s = !1))),
          !o && 2 & f && ((o = !0), (m.y = t[27].y), j(() => (o = !1))),
          !r &&
            2 & f &&
            ((r = !0), (m.fullscreen = t[27].fullscreen), j(() => (r = !1))),
          !l &&
            2 & f &&
            ((l = !0), (m.minimized = t[27].minimized), j(() => (l = !1))),
          !c &&
            2 & f &&
            ((c = !0), (m.z_index = t[27].z_index), j(() => (c = !1))),
          e.$set(m);
      },
      i(t) {
        a || ($(e.$$.fragment, t), (a = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (a = !1);
      },
      d(t) {
        V(e, t);
      },
    }
  );
}
function fi(t) {
  let e, n, i;
  function s() {
    return t[6](t[24]);
  }
  const o = [
    t[27].componentAttributes,
    { slot: "content" },
    { onSelection: s },
  ];
  var r = t[27].component;
  function l(t) {
    let e = {};
    for (let n = 0; n < o.length; n += 1) e = et(e, o[n]);
    return { props: e };
  }
  return (
    r && (e = new r(l())),
    {
      c() {
        e && _(e.$$.fragment), (n = z());
      },
      l(t) {
        e && M(e.$$.fragment, t), (n = z());
      },
      m(t, s) {
        e && B(e, t, s), f(t, n, s), (i = !0);
      },
      p(i, c) {
        t = i;
        const a =
          18 & c
            ? Q(o, [
                2 & c && tt(t[27].componentAttributes),
                o[1],
                { onSelection: s },
              ])
            : {};
        if (r !== (r = t[27].component)) {
          if (e) {
            C();
            const t = e;
            v(t.$$.fragment, 1, 0, () => {
              V(t, 1);
            }),
              S();
          }
          r
            ? ((e = new r(l())),
              _(e.$$.fragment),
              $(e.$$.fragment, 1),
              B(e, n.parentNode, n))
            : (e = null);
        } else r && e.$set(a);
      },
      i(t) {
        i || (e && $(e.$$.fragment, t), (i = !0));
      },
      o(t) {
        e && v(e.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && h(n), e && V(e, t);
      },
    }
  );
}
function mi(t, e) {
  let n,
    i,
    s,
    o = null !== e[27] && di(e);
  return {
    key: t,
    first: null,
    c() {
      (n = z()), o && o.c(), (i = z()), this.h();
    },
    l(t) {
      (n = z()), o && o.l(t), (i = z()), this.h();
    },
    h() {
      this.first = n;
    },
    m(t, e) {
      f(t, n, e), o && o.m(t, e), f(t, i, e), (s = !0);
    },
    p(t, n) {
      null !== (e = t)[27]
        ? o
          ? (o.p(e, n), 2 & n && $(o, 1))
          : ((o = di(e)), o.c(), $(o, 1), o.m(i.parentNode, i))
        : o &&
          (C(),
          v(o, 1, 1, () => {
            o = null;
          }),
          S());
    },
    i(t) {
      s || ($(o), (s = !0));
    },
    o(t) {
      v(o), (s = !1);
    },
    d(t) {
      t && h(n), o && o.d(t), t && h(i);
    },
  };
}
function gi(t) {
  let e, n;
  return (
    (e = new vt({
      props: {
        x: t[3].x,
        y: t[3].y,
        z_index: t[2] + 2,
        $$slots: { options: [$i] },
        $$scope: { ctx: t },
      },
    })),
    {
      c() {
        _(e.$$.fragment);
      },
      l(t) {
        M(e.$$.fragment, t);
      },
      m(t, i) {
        B(e, t, i), (n = !0);
      },
      p(t, n) {
        const i = {};
        8 & n && (i.x = t[3].x),
          8 & n && (i.y = t[3].y),
          4 & n && (i.z_index = t[2] + 2),
          1073741832 & n && (i.$$scope = { dirty: n, ctx: t }),
          e.$set(i);
      },
      i(t) {
        n || ($(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        V(e, t);
      },
    }
  );
}
function pi(t) {
  let e, n;
  return (
    (e = new bt({
      props: { name: t[21].name, icon: t[21].icon, onClick: t[21].onClick },
    })),
    {
      c() {
        _(e.$$.fragment);
      },
      l(t) {
        M(e.$$.fragment, t);
      },
      m(t, i) {
        B(e, t, i), (n = !0);
      },
      p(t, n) {
        const i = {};
        8 & n && (i.name = t[21].name),
          8 & n && (i.icon = t[21].icon),
          8 & n && (i.onClick = t[21].onClick),
          e.$set(i);
      },
      i(t) {
        n || ($(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        V(e, t);
      },
    }
  );
}
function $i(t) {
  let e,
    n,
    i = t[3].options,
    s = [];
  for (let r = 0; r < i.length; r += 1) s[r] = pi(hi(t, i, r));
  const o = (t) =>
    v(s[t], 1, 1, () => {
      s[t] = null;
    });
  return {
    c() {
      e = l("div");
      for (let t = 0; t < s.length; t += 1) s[t].c();
      this.h();
    },
    l(t) {
      e = c(t, "DIV", { slot: !0 });
      var n = a(e);
      for (let e = 0; e < s.length; e += 1) s[e].l(n);
      n.forEach(h), this.h();
    },
    h() {
      u(e, "slot", "options");
    },
    m(t, i) {
      f(t, e, i);
      for (let n = 0; n < s.length; n += 1) s[n].m(e, null);
      n = !0;
    },
    p(t, n) {
      if (8 & n) {
        let r;
        for (i = t[3].options, r = 0; r < i.length; r += 1) {
          const o = hi(t, i, r);
          s[r]
            ? (s[r].p(o, n), $(s[r], 1))
            : ((s[r] = pi(o)), s[r].c(), $(s[r], 1), s[r].m(e, null));
        }
        for (C(), r = i.length; r < s.length; r += 1) o(r);
        S();
      }
    },
    i(t) {
      if (!n) {
        for (let t = 0; t < i.length; t += 1) $(s[t]);
        n = !0;
      }
    },
    o(t) {
      s = s.filter(Boolean);
      for (let e = 0; e < s.length; e += 1) v(s[e]);
      n = !1;
    },
    d(t) {
      t && h(e), H(s, t);
    },
  };
}
function vi(t) {
  let e,
    n,
    i,
    s,
    o,
    r,
    d,
    m,
    g,
    p,
    w,
    b = [],
    y = new Map();
  i = new De({
    props: {
      bottomOffset: t[0],
      columnWidth: 5,
      columnHeight: 6,
      gap: 1.5,
      padding: 1,
    },
  });
  let I = t[1];
  const O = (t) => t[24];
  for (let l = 0; l < I.length; l += 1) {
    let e = ui(t, I, l),
      n = O(e);
    y.set(n, (b[l] = mi(n, e)));
  }
  function D(e) {
    t[17](e);
  }
  let k = { z_index: t[2] + 1 };
  void 0 !== t[0] && (k.height = t[0]),
    (d = new Gn({ props: k })),
    x.push(() => J(d, "height", D));
  let R = t[3].show && gi(t);
  return {
    c() {
      (e = E()), (n = l("div")), _(i.$$.fragment), (s = E()), (o = l("div"));
      for (let t = 0; t < b.length; t += 1) b[t].c();
      (r = E()), _(d.$$.fragment), (g = E()), R && R.c(), (p = z()), this.h();
    },
    l(t) {
      K('[data-svelte="svelte-1kjimo1"]', document.head).forEach(h),
        (e = T(t)),
        (n = c(t, "DIV", { class: !0 }));
      var l = a(n);
      M(i.$$.fragment, l),
        l.forEach(h),
        (s = T(t)),
        (o = c(t, "DIV", { class: !0 }));
      var u = a(o);
      for (let e = 0; e < b.length; e += 1) b[e].l(u);
      u.forEach(h),
        (r = T(t)),
        M(d.$$.fragment, t),
        (g = T(t)),
        R && R.l(t),
        (p = z()),
        this.h();
    },
    h() {
      (document.title = "Jitze Jan Kerkstra"),
        u(n, "class", "grid-container svelte-1mmwtdj"),
        u(o, "class", "windows-container");
    },
    m(t, l) {
      f(t, e, l), f(t, n, l), B(i, n, null), f(t, s, l), f(t, o, l);
      for (let e = 0; e < b.length; e += 1) b[e].m(o, null);
      f(t, r, l), B(d, t, l), f(t, g, l), R && R.m(t, l), f(t, p, l), (w = !0);
    },
    p(t, [e]) {
      const n = {};
      1 & e && (n.bottomOffset = t[0]),
        i.$set(n),
        51 & e &&
          ((I = t[1]),
          C(),
          (b = Y(b, e, O, 1, t, I, y, o, F, mi, null, ui)),
          S());
      const s = {};
      4 & e && (s.z_index = t[2] + 1),
        !m && 1 & e && ((m = !0), (s.height = t[0]), j(() => (m = !1))),
        d.$set(s),
        t[3].show
          ? R
            ? (R.p(t, e), 8 & e && $(R, 1))
            : ((R = gi(t)), R.c(), $(R, 1), R.m(p.parentNode, p))
          : R &&
            (C(),
            v(R, 1, 1, () => {
              R = null;
            }),
            S());
    },
    i(t) {
      if (!w) {
        $(i.$$.fragment, t);
        for (let t = 0; t < I.length; t += 1) $(b[t]);
        $(d.$$.fragment, t), $(R), (w = !0);
      }
    },
    o(t) {
      v(i.$$.fragment, t);
      for (let e = 0; e < b.length; e += 1) v(b[e]);
      v(d.$$.fragment, t), v(R), (w = !1);
    },
    d(t) {
      t && h(e), t && h(n), V(i), t && h(s), t && h(o);
      for (let e = 0; e < b.length; e += 1) b[e].d();
      t && h(r), V(d, t), t && h(g), R && R.d(t), t && h(p);
    },
  };
}
function wi(t, e, n) {
  let i, s, o, r;
  function l(t) {
    Yt();
    let e = ((n = t), i.find((t) => t.id === n));
    var n;
    if (!e) return;
    let s = e.window;
    if (!s) return;
    i
      .flatMap((t) => t.window)
      .filter((t) => null !== t)
      .forEach((t) => {
        t.z_index > s.z_index && (t.z_index -= 1);
      }),
      (s.z_index = Ft);
    let o = we(e.getProgramId()).window;
    (o.x = e.window.x),
      (o.y = e.window.y),
      (o.width = e.window.width),
      (o.height = e.window.height),
      (o.fullscreen = e.window.fullscreen),
      Ut.set(i);
  }
  function c(t) {
    !(function (t) {
      Ut.update((e) => e.filter((e) => e.id !== t));
    })(t);
  }
  R(t, Ut, (t) => n(1, (i = t))),
    R(t, Zt, (t) => n(2, (s = t))),
    R(t, ut, (t) => n(3, (o = t)));
  return [
    r,
    i,
    s,
    o,
    l,
    c,
    (t) => l(t),
    (t) => l(t),
    (t) => {},
    (t) => c(t),
    function (e, n) {
      t.$$.not_equal(n.height, e) && ((n.height = e), Ut.set(i));
    },
    function (e, n) {
      t.$$.not_equal(n.width, e) && ((n.width = e), Ut.set(i));
    },
    function (e, n) {
      t.$$.not_equal(n.x, e) && ((n.x = e), Ut.set(i));
    },
    function (e, n) {
      t.$$.not_equal(n.y, e) && ((n.y = e), Ut.set(i));
    },
    function (e, n) {
      t.$$.not_equal(n.fullscreen, e) && ((n.fullscreen = e), Ut.set(i));
    },
    function (e, n) {
      t.$$.not_equal(n.minimized, e) && ((n.minimized = e), Ut.set(i));
    },
    function (e, n) {
      t.$$.not_equal(n.z_index, e) && ((n.z_index = e), Ut.set(i));
    },
    function (t) {
      (r = t), n(0, r);
    },
  ];
}
class xi extends n {
  constructor(t) {
    super(), i(this, t, wi, vi, s, {});
  }
}
const Ei = nt(new Date(), function (t) {
  const e = setInterval(() => {
    t(new Date());
  }, 1e3);
  return function () {
    clearInterval(e);
  };
});
function bi(t) {
  return t.toLocaleTimeString().slice(0, -3);
}
function Ti(t) {
  let e,
    n,
    i,
    s,
    r,
    g,
    p,
    $,
    v,
    x,
    O,
    z,
    C,
    S,
    R,
    _,
    M,
    B,
    V,
    N,
    L,
    G,
    H,
    A,
    W,
    Y,
    F,
    Z,
    U,
    X,
    q,
    j,
    J,
    K,
    Q,
    tt = bi(t[9]) + "";
  return (
    o(t[16]),
    {
      c() {
        (e = l("div")),
          (n = l("div")),
          (i = b("Top")),
          (s = l("br")),
          (r = b("\n    Content")),
          (g = l("br")),
          (p = b("\n    Content")),
          ($ = l("br")),
          (v = b("\n    Content")),
          (x = l("br")),
          (O = b("\n    Content")),
          (z = l("br")),
          (C = b("\n    Content")),
          (S = l("br")),
          (R = b("\n    Content")),
          (_ = l("br")),
          (M = b("\n    Content")),
          (B = l("br")),
          (V = b("\n    Content")),
          (N = l("br")),
          (L = b("\n    Content")),
          (G = l("br")),
          (H = b("\n    Bottom")),
          (A = l("br")),
          (W = E()),
          (Y = l("div")),
          (F = l("div")),
          (Z = b(tt)),
          (U = E()),
          (X = l("div")),
          (q = b("right")),
          (j = E()),
          (J = l("div")),
          this.h();
      },
      l(t) {
        e = c(t, "DIV", { class: !0, style: !0 });
        var o = a(e);
        n = c(o, "DIV", { class: !0, style: !0 });
        var l = a(n);
        (i = y(l, "Top")),
          (s = c(l, "BR", {})),
          (r = y(l, "\n    Content")),
          (g = c(l, "BR", {})),
          (p = y(l, "\n    Content")),
          ($ = c(l, "BR", {})),
          (v = y(l, "\n    Content")),
          (x = c(l, "BR", {})),
          (O = y(l, "\n    Content")),
          (z = c(l, "BR", {})),
          (C = y(l, "\n    Content")),
          (S = c(l, "BR", {})),
          (R = y(l, "\n    Content")),
          (_ = c(l, "BR", {})),
          (M = y(l, "\n    Content")),
          (B = c(l, "BR", {})),
          (V = y(l, "\n    Content")),
          (N = c(l, "BR", {})),
          (L = y(l, "\n    Content")),
          (G = c(l, "BR", {})),
          (H = y(l, "\n    Bottom")),
          (A = c(l, "BR", {})),
          l.forEach(h),
          o.forEach(h),
          (W = T(t)),
          (Y = c(t, "DIV", { class: !0, style: !0 }));
        var u = a(Y);
        F = c(u, "DIV", { class: !0 });
        var d = a(F);
        (Z = y(d, tt)),
          d.forEach(h),
          (U = T(u)),
          (X = c(u, "DIV", { class: !0 }));
        var f = a(X);
        (q = y(f, "right")),
          f.forEach(h),
          u.forEach(h),
          (j = T(t)),
          (J = c(t, "DIV", { class: !0, style: !0 })),
          a(J).forEach(h),
          this.h();
      },
      h() {
        u(n, "class", "status-bar-content svelte-bnq638"),
          d(n, "height", t[5] + "px"),
          u(e, "class", "status-bar svelte-bnq638"),
          d(e, "top", t[3] - t[5] + Tt(t[1]) + "px"),
          P(e, "expanding", t[6]),
          u(F, "class", "status-bar-status-left svelte-bnq638"),
          u(X, "class", "status-bar-status-right svelte-bnq638"),
          u(Y, "class", "status-bar-status svelte-bnq638"),
          d(Y, "height", t[1] + "rem"),
          u(J, "class", "status-bar-border svelte-bnq638"),
          d(J, "height", t[1] + "rem"),
          d(J, "top", t[3] + "px"),
          P(J, "expanding", t[6]),
          P(J, "expanded", t[0]),
          P(J, "isResizing", t[4]);
      },
      m(o, l) {
        f(o, e, l),
          I(e, n),
          I(n, i),
          I(n, s),
          I(n, r),
          I(n, g),
          I(n, p),
          I(n, $),
          I(n, v),
          I(n, x),
          I(n, O),
          I(n, z),
          I(n, C),
          I(n, S),
          I(n, R),
          I(n, _),
          I(n, M),
          I(n, B),
          I(n, V),
          I(n, N),
          I(n, L),
          I(n, G),
          I(n, H),
          I(n, A),
          t[17](e),
          f(o, W, l),
          f(o, Y, l),
          I(Y, F),
          I(F, Z),
          I(Y, U),
          I(Y, X),
          I(X, q),
          f(o, j, l),
          f(o, J, l),
          t[18](J),
          K ||
            ((Q = [
              m(window, "touchmove", t[10]),
              m(window, "touchend", t[11]),
              m(window, "mousemove", t[12]),
              m(window, "mouseup", t[13]),
              m(window, "resize", t[16]),
              m(J, "touchstart", t[14]),
              m(J, "mousedown", t[15]),
              m(J, "contextmenu", yi),
            ]),
            (K = !0));
      },
      p(t, [i]) {
        32 & i && d(n, "height", t[5] + "px"),
          42 & i && d(e, "top", t[3] - t[5] + Tt(t[1]) + "px"),
          64 & i && P(e, "expanding", t[6]),
          512 & i && tt !== (tt = bi(t[9]) + "") && D(Z, tt),
          2 & i && d(Y, "height", t[1] + "rem"),
          2 & i && d(J, "height", t[1] + "rem"),
          8 & i && d(J, "top", t[3] + "px"),
          64 & i && P(J, "expanding", t[6]),
          1 & i && P(J, "expanded", t[0]),
          16 & i && P(J, "isResizing", t[4]);
      },
      i: k,
      o: k,
      d(n) {
        n && h(e),
          t[17](null),
          n && h(W),
          n && h(Y),
          n && h(j),
          n && h(J),
          t[18](null),
          (K = !1),
          w(Q);
      },
    }
  );
}
const yi = (t) => t.preventDefault();
function Ii(t, e, n) {
  let i;
  R(t, Ei, (t) => n(9, (i = t)));
  let s,
    o,
    r,
    { heightInRem: l = 2.5 } = e,
    { expanded: c = !1 } = e,
    a = !1,
    h = 0,
    u = !1,
    d = 0,
    f = 0;
  function m(t = !0) {
    n(3, (h = d)),
      t &&
        (n(6, (a = !0)),
        setTimeout(() => {
          n(6, (a = !1));
        }, 500));
  }
  function g(t = !0) {
    n(3, (h = 0)),
      t &&
        (n(6, (a = !0)),
        setTimeout(() => {
          n(6, (a = !1));
        }, 500));
  }
  function p(t) {
    n(4, (u = !0)), Rn(Dn.GRABBING), n(8, (o.style.cursor = Dn.GRABBING), o);
  }
  function $(t) {
    u &&
      ((f = h - t),
      n(3, (h = t)),
      h <= 0 ? n(3, (h = 0)) : h >= d && n(3, (h = d)));
  }
  function v(t) {
    u &&
      (Rn(Dn.AUTO),
      n(8, (o.style.cursor = Dn.GRAB), o),
      n(4, (u = !1)),
      f >= 2
        ? n(0, (c = !1))
        : f <= -2
        ? n(0, (c = !0))
        : h <= (d - 0) / 2
        ? n(0, (c = !1))
        : h >= (d - 0) / 2 && n(0, (c = !0)));
  }
  return (
    (t.$$set = (t) => {
      "heightInRem" in t && n(1, (l = t.heightInRem)),
        "expanded" in t && n(0, (c = t.expanded));
    }),
    (t.$$.update = () => {
      46 & t.$$.dirty && (n(5, (d = r - Tt(l))), h >= d && n(3, (h = d))),
        17 & t.$$.dirty && (u || (c ? m(!0) : g(!0))),
        21 & t.$$.dirty && (u || (c ? m(!1) : g(!1)));
    }),
    [
      c,
      l,
      r,
      h,
      u,
      d,
      a,
      s,
      o,
      i,
      function (t) {
        u && (t.preventDefault(), $(t.targetTouches[0].clientY));
      },
      function (t) {
        u && (t.preventDefault(), v(t.changedTouches[0].clientY));
      },
      function (t) {
        u && (t.preventDefault(), $(t.clientY));
      },
      function (t) {
        u && (t.preventDefault(), v(t.clientY));
      },
      function (t) {
        p(t.targetTouches[0].clientY);
      },
      function (t) {
        p(t.clientY);
      },
      function () {
        n(2, (r = window.innerHeight));
      },
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (s = t), n(7, s);
        });
      },
      function (t) {
        x[t ? "unshift" : "push"](() => {
          (o = t), n(8, o);
        });
      },
    ]
  );
}
class Oi extends n {
  constructor(t) {
    super(), i(this, t, Ii, Ti, s, { heightInRem: 1, expanded: 0 });
  }
}
function Di(t) {
  let e, n, i, s, o, r;
  return (
    (i = new De({
      props: {
        topOffset: 2.5,
        columnWidth: 5,
        columnHeight: 6,
        gap: 1.5,
        padding: 1,
      },
    })),
    (o = new Oi({ props: { heightInRem: 2.5 } })),
    {
      c() {
        (e = E()),
          (n = l("div")),
          _(i.$$.fragment),
          (s = E()),
          _(o.$$.fragment),
          this.h();
      },
      l(t) {
        K('[data-svelte="svelte-1kjimo1"]', document.head).forEach(h),
          (e = T(t)),
          (n = c(t, "DIV", { class: !0 }));
        var r = a(n);
        M(i.$$.fragment, r),
          r.forEach(h),
          (s = T(t)),
          M(o.$$.fragment, t),
          this.h();
      },
      h() {
        (document.title = "Jitze Jan Kerkstra"),
          u(n, "class", "grid-container svelte-1mmwtdj");
      },
      m(t, l) {
        f(t, e, l), f(t, n, l), B(i, n, null), f(t, s, l), B(o, t, l), (r = !0);
      },
      p: k,
      i(t) {
        r || ($(i.$$.fragment, t), $(o.$$.fragment, t), (r = !0));
      },
      o(t) {
        v(i.$$.fragment, t), v(o.$$.fragment, t), (r = !1);
      },
      d(t) {
        t && h(e), t && h(n), V(i), t && h(s), V(o, t);
      },
    }
  );
}
class ki extends n {
  constructor(t) {
    super(), i(this, t, null, Di, s, {});
  }
}
function zi(t) {
  return { c: k, l: k, m: k, p: k, i: k, o: k, d: k };
}
function Ci(t) {
  let e, n, i, s;
  const o = [Ri, Si],
    r = [];
  function l(t, e) {
    return t[1] ? 0 : t[2] ? 1 : -1;
  }
  return (
    ~(e = l(t)) && (n = r[e] = o[e](t)),
    {
      c() {
        n && n.c(), (i = z());
      },
      l(t) {
        n && n.l(t), (i = z());
      },
      m(t, n) {
        ~e && r[e].m(t, n), f(t, i, n), (s = !0);
      },
      p(t, s) {
        let c = e;
        (e = l(t)),
          e !== c &&
            (n &&
              (C(),
              v(r[c], 1, 1, () => {
                r[c] = null;
              }),
              S()),
            ~e
              ? ((n = r[e]),
                n || ((n = r[e] = o[e](t)), n.c()),
                $(n, 1),
                n.m(i.parentNode, i))
              : (n = null));
      },
      i(t) {
        s || ($(n), (s = !0));
      },
      o(t) {
        v(n), (s = !1);
      },
      d(t) {
        ~e && r[e].d(t), t && h(i);
      },
    }
  );
}
function Si(t) {
  let e, n;
  return (
    (e = new ki({})),
    {
      c() {
        _(e.$$.fragment);
      },
      l(t) {
        M(e.$$.fragment, t);
      },
      m(t, i) {
        B(e, t, i), (n = !0);
      },
      i(t) {
        n || ($(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        V(e, t);
      },
    }
  );
}
function Ri(t) {
  let e, n;
  return (
    (e = new xi({})),
    {
      c() {
        _(e.$$.fragment);
      },
      l(t) {
        M(e.$$.fragment, t);
      },
      m(t, i) {
        B(e, t, i), (n = !0);
      },
      i(t) {
        n || ($(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        v(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        V(e, t);
      },
    }
  );
}
function _i(t) {
  let e, n, i, s;
  const o = [Ci, zi],
    r = [];
  function l(t, e) {
    return t[0] ? 0 : 1;
  }
  return (
    (e = l(t)),
    (n = r[e] = o[e](t)),
    {
      c() {
        n.c(), (i = z());
      },
      l(t) {
        n.l(t), (i = z());
      },
      m(t, n) {
        r[e].m(t, n), f(t, i, n), (s = !0);
      },
      p(t, [s]) {
        let c = e;
        (e = l(t)),
          e === c
            ? r[e].p(t, s)
            : (C(),
              v(r[c], 1, 1, () => {
                r[c] = null;
              }),
              S(),
              (n = r[e]),
              n ? n.p(t, s) : ((n = r[e] = o[e](t)), n.c()),
              $(n, 1),
              n.m(i.parentNode, i));
      },
      i(t) {
        s || ($(n), (s = !0));
      },
      o(t) {
        v(n), (s = !1);
      },
      d(t) {
        r[e].d(t), t && h(i);
      },
    }
  );
}
function Mi(t, e, n) {
  let i, s;
  R(t, it, (t) => n(1, (i = t))), R(t, st, (t) => n(2, (s = t)));
  let o = !1;
  return (
    G(() => {
      n(0, (o = !0));
    }),
    [o, i, s]
  );
}
export default class extends n {
  constructor(t) {
    super(), i(this, t, Mi, _i, s, {});
  }
}
