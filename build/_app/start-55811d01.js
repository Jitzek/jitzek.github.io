var t = Object.defineProperty,
  e = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  n = Object.prototype.propertyIsEnumerable,
  o = (e, r, s) =>
    r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[r] = s),
  i = (t, e) => {
    for (var r in e || (e = {})) a.call(e, r) && o(t, r, e[r]);
    if (s) for (var r of s(e)) n.call(e, r) && o(t, r, e[r]);
    return t;
  };
import {
  S as l,
  i as c,
  s as u,
  e as h,
  c as d,
  a as p,
  d as f,
  b as g,
  f as m,
  t as y,
  g as _,
  h as b,
  j as v,
  k as $,
  l as w,
  m as x,
  n as E,
  o as q,
  p as R,
  q as S,
  r as L,
  u as k,
  v as O,
  w as U,
  x as P,
  y as j,
  z as A,
  A as T,
  B as N,
  C,
} from "./chunks/vendor-9c548c9b.js";
function I(t) {
  let e, r, s;
  const a = [t[2] || {}];
  var n = t[0][1];
  function o(t) {
    let e = { $$slots: { default: [V] }, $$scope: { ctx: t } };
    for (let r = 0; r < a.length; r += 1) e = N(e, a[r]);
    return { props: e };
  }
  return (
    n && (e = new n(o(t))),
    {
      c() {
        e && v(e.$$.fragment), (r = w());
      },
      l(t) {
        e && x(e.$$.fragment, t), (r = w());
      },
      m(t, a) {
        e && q(e, t, a), m(t, r, a), (s = !0);
      },
      p(t, s) {
        const i = 4 & s ? R(a, [S(t[2] || {})]) : {};
        if (
          (521 & s && (i.$$scope = { dirty: s, ctx: t }), n !== (n = t[0][1]))
        ) {
          if (e) {
            L();
            const t = e;
            k(t.$$.fragment, 1, 0, () => {
              O(t, 1);
            }),
              U();
          }
          n
            ? ((e = new n(o(t))),
              v(e.$$.fragment),
              P(e.$$.fragment, 1),
              q(e, r.parentNode, r))
            : (e = null);
        } else n && e.$set(i);
      },
      i(t) {
        s || (e && P(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        e && k(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        t && f(r), e && O(e, t);
      },
    }
  );
}
function D(t) {
  let e, r, s;
  const a = [t[3] || {}];
  var n = t[0][2];
  function o(t) {
    let e = {};
    for (let r = 0; r < a.length; r += 1) e = N(e, a[r]);
    return { props: e };
  }
  return (
    n && (e = new n(o())),
    {
      c() {
        e && v(e.$$.fragment), (r = w());
      },
      l(t) {
        e && x(e.$$.fragment, t), (r = w());
      },
      m(t, a) {
        e && q(e, t, a), m(t, r, a), (s = !0);
      },
      p(t, s) {
        const i = 8 & s ? R(a, [S(t[3] || {})]) : {};
        if (n !== (n = t[0][2])) {
          if (e) {
            L();
            const t = e;
            k(t.$$.fragment, 1, 0, () => {
              O(t, 1);
            }),
              U();
          }
          n
            ? ((e = new n(o())),
              v(e.$$.fragment),
              P(e.$$.fragment, 1),
              q(e, r.parentNode, r))
            : (e = null);
        } else n && e.$set(i);
      },
      i(t) {
        s || (e && P(e.$$.fragment, t), (s = !0));
      },
      o(t) {
        e && k(e.$$.fragment, t), (s = !1);
      },
      d(t) {
        t && f(r), e && O(e, t);
      },
    }
  );
}
function V(t) {
  let e,
    r,
    s = t[0][2] && D(t);
  return {
    c() {
      s && s.c(), (e = w());
    },
    l(t) {
      s && s.l(t), (e = w());
    },
    m(t, a) {
      s && s.m(t, a), m(t, e, a), (r = !0);
    },
    p(t, r) {
      t[0][2]
        ? s
          ? (s.p(t, r), 1 & r && P(s, 1))
          : ((s = D(t)), s.c(), P(s, 1), s.m(e.parentNode, e))
        : s &&
          (L(),
          k(s, 1, 1, () => {
            s = null;
          }),
          U());
    },
    i(t) {
      r || (P(s), (r = !0));
    },
    o(t) {
      k(s), (r = !1);
    },
    d(t) {
      s && s.d(t), t && f(e);
    },
  };
}
function B(t) {
  let e,
    r,
    s = t[0][1] && I(t);
  return {
    c() {
      s && s.c(), (e = w());
    },
    l(t) {
      s && s.l(t), (e = w());
    },
    m(t, a) {
      s && s.m(t, a), m(t, e, a), (r = !0);
    },
    p(t, r) {
      t[0][1]
        ? s
          ? (s.p(t, r), 1 & r && P(s, 1))
          : ((s = I(t)), s.c(), P(s, 1), s.m(e.parentNode, e))
        : s &&
          (L(),
          k(s, 1, 1, () => {
            s = null;
          }),
          U());
    },
    i(t) {
      r || (P(s), (r = !0));
    },
    o(t) {
      k(s), (r = !1);
    },
    d(t) {
      s && s.d(t), t && f(e);
    },
  };
}
function K(t) {
  let e,
    r = t[5] && W(t);
  return {
    c() {
      (e = h("div")), r && r.c(), this.h();
    },
    l(t) {
      e = d(t, "DIV", {
        id: !0,
        "aria-live": !0,
        "aria-atomic": !0,
        class: !0,
      });
      var s = p(e);
      r && r.l(s), s.forEach(f), this.h();
    },
    h() {
      g(e, "id", "svelte-announcer"),
        g(e, "aria-live", "assertive"),
        g(e, "aria-atomic", "true"),
        g(e, "class", "svelte-1j55zn5");
    },
    m(t, s) {
      m(t, e, s), r && r.m(e, null);
    },
    p(t, s) {
      t[5]
        ? r
          ? r.p(t, s)
          : ((r = W(t)), r.c(), r.m(e, null))
        : r && (r.d(1), (r = null));
    },
    d(t) {
      t && f(e), r && r.d();
    },
  };
}
function W(t) {
  let e;
  return {
    c() {
      e = y(t[6]);
    },
    l(r) {
      e = _(r, t[6]);
    },
    m(t, r) {
      m(t, e, r);
    },
    p(t, r) {
      64 & r && b(e, t[6]);
    },
    d(t) {
      t && f(e);
    },
  };
}
function z(t) {
  let e, r, s, a;
  const n = [t[1] || {}];
  var o = t[0][0];
  function i(t) {
    let e = { $$slots: { default: [B] }, $$scope: { ctx: t } };
    for (let r = 0; r < n.length; r += 1) e = N(e, n[r]);
    return { props: e };
  }
  o && (e = new o(i(t)));
  let l = t[4] && K(t);
  return {
    c() {
      e && v(e.$$.fragment), (r = $()), l && l.c(), (s = w());
    },
    l(t) {
      e && x(e.$$.fragment, t), (r = E(t)), l && l.l(t), (s = w());
    },
    m(t, n) {
      e && q(e, t, n), m(t, r, n), l && l.m(t, n), m(t, s, n), (a = !0);
    },
    p(t, [a]) {
      const c = 2 & a ? R(n, [S(t[1] || {})]) : {};
      if (
        (525 & a && (c.$$scope = { dirty: a, ctx: t }), o !== (o = t[0][0]))
      ) {
        if (e) {
          L();
          const t = e;
          k(t.$$.fragment, 1, 0, () => {
            O(t, 1);
          }),
            U();
        }
        o
          ? ((e = new o(i(t))),
            v(e.$$.fragment),
            P(e.$$.fragment, 1),
            q(e, r.parentNode, r))
          : (e = null);
      } else o && e.$set(c);
      t[4]
        ? l
          ? l.p(t, a)
          : ((l = K(t)), l.c(), l.m(s.parentNode, s))
        : l && (l.d(1), (l = null));
    },
    i(t) {
      a || (e && P(e.$$.fragment, t), (a = !0));
    },
    o(t) {
      e && k(e.$$.fragment, t), (a = !1);
    },
    d(t) {
      e && O(e, t), t && f(r), l && l.d(t), t && f(s);
    },
  };
}
function M(t, e, r) {
  let { stores: s } = e,
    { page: a } = e,
    { components: n } = e,
    { props_0: o = null } = e,
    { props_1: i = null } = e,
    { props_2: l = null } = e;
  j("__svelte__", s), A(s.page.notify);
  let c = !1,
    u = !1,
    h = null;
  return (
    T(() => {
      const t = s.page.subscribe(() => {
        c && (r(5, (u = !0)), r(6, (h = document.title || "untitled page")));
      });
      return r(4, (c = !0)), t;
    }),
    (t.$$set = (t) => {
      "stores" in t && r(7, (s = t.stores)),
        "page" in t && r(8, (a = t.page)),
        "components" in t && r(0, (n = t.components)),
        "props_0" in t && r(1, (o = t.props_0)),
        "props_1" in t && r(2, (i = t.props_1)),
        "props_2" in t && r(3, (l = t.props_2));
    }),
    (t.$$.update = () => {
      384 & t.$$.dirty && s.page.set(a);
    }),
    [n, o, i, l, c, u, h, s, a]
  );
}
class Y extends l {
  constructor(t) {
    super(),
      c(this, t, M, z, u, {
        stores: 7,
        page: 8,
        components: 0,
        props_0: 1,
        props_1: 2,
        props_2: 3,
      });
  }
}
let G;
const J = {},
  X = function (t, e) {
    if (!e || 0 === e.length) return t();
    if (void 0 === G) {
      const t = document.createElement("link").relList;
      G =
        t && t.supports && t.supports("modulepreload")
          ? "modulepreload"
          : "preload";
    }
    return Promise.all(
      e.map((t) => {
        if (t in J) return;
        J[t] = !0;
        const e = t.endsWith(".css"),
          r = e ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${t}"]${r}`)) return;
        const s = document.createElement("link");
        return (
          (s.rel = e ? "stylesheet" : G),
          e || ((s.as = "script"), (s.crossOrigin = "")),
          (s.href = t),
          document.head.appendChild(s),
          e
            ? new Promise((t, e) => {
                s.addEventListener("load", t), s.addEventListener("error", e);
              })
            : void 0
        );
      })
    ).then(() => t());
  },
  F = [
    () =>
      X(() => import("./pages/__layout.svelte-164aec58.js"), [
        "/_app/pages/__layout.svelte-164aec58.js",
        "/_app/assets/pages/__layout.svelte-29de7ce1.css",
        "/_app/chunks/vendor-9c548c9b.js",
        "/_app/chunks/ThemeStore-51fa65f1.js",
      ]),
    () =>
      X(() => import("./pages/__error.svelte-3393831e.js"), [
        "/_app/pages/__error.svelte-3393831e.js",
        "/_app/chunks/vendor-9c548c9b.js",
      ]),
    () =>
      X(() => import("./pages/index.svelte-a6a73632.js"), [
        "/_app/pages/index.svelte-a6a73632.js",
        "/_app/assets/pages/index.svelte-056c7b8a.css",
        "/_app/chunks/vendor-9c548c9b.js",
        "/_app/chunks/ThemeStore-51fa65f1.js",
      ]),
  ],
  H = [[/^\/$/, [F[0], F[2]], [F[1]]]],
  Q = [F[0](), F[1]()];
function Z() {
  return { x: pageXOffset, y: pageYOffset };
}
function tt(t) {
  for (; t && "A" !== t.nodeName.toUpperCase(); ) t = t.parentNode;
  return t;
}
class et {
  constructor({ base: t, routes: e, trailing_slash: r }) {
    (this.base = t), (this.routes = e), (this.trailing_slash = r);
  }
  init(t) {
    let s;
    (this.renderer = t),
      (t.router = this),
      (this.enabled = !0),
      "scrollRestoration" in history && (history.scrollRestoration = "manual"),
      addEventListener("beforeunload", () => {
        history.scrollRestoration = "auto";
      }),
      addEventListener("load", () => {
        history.scrollRestoration = "manual";
      }),
      addEventListener("scroll", () => {
        clearTimeout(s),
          (s = setTimeout(() => {
            const t =
              ((s = i({}, history.state || {})),
              (a = { "sveltekit:scroll": Z() }),
              e(s, r(a)));
            var s, a;
            history.replaceState(t, document.title, window.location.href);
          }, 50));
      });
    const a = (t) => {
      const e = tt(t.target);
      e &&
        e.href &&
        e.hasAttribute("sveltekit:prefetch") &&
        this.prefetch(new URL(e.href));
    };
    let n;
    addEventListener("touchstart", a),
      addEventListener("mousemove", (t) => {
        clearTimeout(n),
          (n = setTimeout(() => {
            a(t);
          }, 20));
      }),
      addEventListener("click", (t) => {
        if (!this.enabled) return;
        if (t.button || 1 !== t.which) return;
        if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
        if (t.defaultPrevented) return;
        const e = tt(t.target);
        if (!e) return;
        if (!e.href) return;
        const r =
            "object" == typeof e.href &&
            "SVGAnimatedString" === e.href.constructor.name,
          s = String(r ? e.href.baseVal : e.href);
        if (s === location.href)
          return void (location.hash || t.preventDefault());
        const a = e.getAttribute("rel") && e.getAttribute("rel").split(/\s+/);
        if (e.hasAttribute("download") || (a && a.includes("external"))) return;
        if (r ? e.target.baseVal : e.target) return;
        const n = new URL(s);
        if (!this.owns(n)) return;
        const o = e.hasAttribute("sveltekit:noscroll");
        history.pushState({}, "", n.href),
          this._navigate(n, o ? Z() : null, !1, [], n.hash),
          t.preventDefault();
      }),
      addEventListener("popstate", (t) => {
        if (t.state && this.enabled) {
          const e = new URL(location.href);
          this._navigate(e, t.state["sveltekit:scroll"], !1, []);
        }
      }),
      document.body.setAttribute("tabindex", "-1"),
      history.replaceState(history.state || {}, "", location.href);
  }
  owns(t) {
    return t.origin === location.origin && t.pathname.startsWith(this.base);
  }
  parse(t) {
    if (this.owns(t)) {
      const e = decodeURIComponent(t.pathname.slice(this.base.length) || "/"),
        r = this.routes.filter(([t]) => t.test(e)),
        s = new URLSearchParams(t.search);
      return { id: `${e}?${s}`, routes: r, path: e, query: s };
    }
  }
  async goto(
    t,
    {
      noscroll: e = !1,
      replaceState: r = !1,
      keepfocus: s = !1,
      state: a = {},
    } = {},
    n
  ) {
    const o = new URL(
      t,
      (function (t) {
        let e = t.baseURI;
        if (!e) {
          const r = t.getElementsByTagName("base");
          e = r.length ? r[0].href : t.URL;
        }
        return e;
      })(document)
    );
    return this.enabled && this.owns(o)
      ? (history[r ? "replaceState" : "pushState"](a, "", t),
        this._navigate(o, e ? Z() : null, s, n, o.hash))
      : ((location.href = o.href), new Promise(() => {}));
  }
  enable() {
    this.enabled = !0;
  }
  disable() {
    this.enabled = !1;
  }
  async prefetch(t) {
    const e = this.parse(t);
    if (!e)
      throw new Error(
        "Attempted to prefetch a URL that does not belong to this app"
      );
    return this.renderer.load(e);
  }
  async _navigate(t, e, r, s, a) {
    const n = this.parse(t);
    if (!n)
      throw new Error(
        "Attempted to navigate to a URL that does not belong to this app"
      );
    if ("/" !== n.path) {
      const t = n.path.endsWith("/");
      ((t && "never" === this.trailing_slash) ||
        (!t &&
          "always" === this.trailing_slash &&
          !n.path.split("/").pop().includes("."))) &&
        ((n.path = t ? n.path.slice(0, -1) : n.path + "/"),
        history.replaceState(
          {},
          "",
          `${this.base}${n.path}${location.search}`
        ));
    }
    this.renderer.notify({ path: n.path, query: n.query }),
      await this.renderer.update(n, s, !1),
      r || document.body.focus();
    const o = a && document.getElementById(a.slice(1));
    e
      ? scrollTo(e.x, e.y)
      : o
      ? scrollTo(0, o.getBoundingClientRect().top + scrollY)
      : scrollTo(0, 0);
  }
}
function rt(t) {
  const e = C(t);
  let r = !0;
  return {
    notify: function () {
      (r = !0), e.update((t) => t);
    },
    set: function (t) {
      (r = !1), e.set(t);
    },
    subscribe: function (t) {
      let s;
      return e.subscribe((e) => {
        (void 0 === s || (r && e !== s)) && t((s = e));
      });
    },
  };
}
function st(t, e) {
  let r = `script[data-type="svelte-data"][data-url="${
    "string" == typeof t ? t : t.url
  }"]`;
  e &&
    "string" == typeof e.body &&
    (r += `[data-body="${(function (t) {
      let e = 5381,
        r = t.length;
      if ("string" == typeof t) for (; r; ) e = (33 * e) ^ t.charCodeAt(--r);
      else for (; r; ) e = (33 * e) ^ t[--r];
      return (e >>> 0).toString(36);
    })(e.body)}"]`);
  const o = document.querySelector(r);
  if (o) {
    const t = JSON.parse(o.textContent),
      { body: e } = t,
      r = ((t, e) => {
        var r = {};
        for (var o in t) a.call(t, o) && e.indexOf(o) < 0 && (r[o] = t[o]);
        if (null != t && s)
          for (var o of s(t)) e.indexOf(o) < 0 && n.call(t, o) && (r[o] = t[o]);
        return r;
      })(t, ["body"]);
    return Promise.resolve(new Response(e, r));
  }
  return fetch(t, e);
}
class at {
  constructor({ Root: t, fallback: e, target: r, session: s, host: a }) {
    (this.Root = t),
      (this.fallback = e),
      (this.host = a),
      (this.router = null),
      (this.target = r),
      (this.started = !1),
      (this.session_id = 1),
      (this.invalid = new Set()),
      (this.invalidating = null),
      (this.current = { page: null, session_id: null, branch: [] }),
      (this.cache = new Map()),
      (this.loading = { id: null, promise: null }),
      (this.stores = { page: rt({}), navigating: C(null), session: C(s) }),
      (this.$session = null),
      (this.root = null);
    let n = !1;
    this.stores.session.subscribe(async (t) => {
      if (((this.$session = t), !n || !this.router)) return;
      this.session_id += 1;
      const e = this.router.parse(new URL(location.href));
      this.update(e, [], !0);
    }),
      (n = !0);
  }
  async start({ status: t, error: e, nodes: r, page: s }) {
    const a = [];
    let n,
      o,
      l,
      c = {};
    try {
      for (let n = 0; n < r.length; n += 1) {
        const u = n === r.length - 1,
          h = await this._load_node({
            module: await r[n],
            page: s,
            context: c,
            status: u && t,
            error: u && e,
          });
        if ((a.push(h), h && h.loaded))
          if (h.loaded.error) {
            if (e) throw h.loaded.error;
            (o = h.loaded.status), (l = h.loaded.error);
          } else h.loaded.context && (c = i(i({}, c), h.loaded.context));
      }
      n = await this._get_navigation_result_from_branch({ page: s, branch: a });
    } catch (u) {
      if (e) throw u;
      (o = 500), (l = u);
    }
    l &&
      (n = await this._load_error({
        status: o,
        error: l,
        path: s.path,
        query: s.query,
      })),
      n.redirect
        ? (location.href = new URL(n.redirect, location.href).href)
        : this._init(n);
  }
  notify({ path: t, query: e }) {
    dispatchEvent(new CustomEvent("sveltekit:navigation-start")),
      this.started &&
        this.stores.navigating.set({
          from: {
            path: this.current.page.path,
            query: this.current.page.query,
          },
          to: { path: t, query: e },
        });
  }
  async update(t, e, r) {
    const s = (this.token = {});
    let a = await this._get_navigation_result(t, r);
    if (s !== this.token) return;
    if ((this.invalid.clear(), a.redirect)) {
      if (!(e.length > 10 || e.includes(t.path)))
        return void (this.router
          ? this.router.goto(a.redirect, { replaceState: !0 }, [...e, t.path])
          : (location.href = new URL(a.redirect, location.href).href));
      a = await this._load_error({
        status: 500,
        error: new Error("Redirect loop"),
        path: t.path,
        query: t.query,
      });
    }
    a.reload
      ? location.reload()
      : this.started
      ? ((this.current = a.state),
        this.root.$set(a.props),
        this.stores.navigating.set(null),
        await 0)
      : this._init(a),
      dispatchEvent(new CustomEvent("sveltekit:navigation-end")),
      (this.loading.promise = null),
      (this.loading.id = null);
    const n = a.state.branch[a.state.branch.length - 1];
    n && !1 === n.module.router ? this.router.disable() : this.router.enable();
  }
  load(t) {
    return (
      (this.loading.promise = this._get_navigation_result(t, !1)),
      (this.loading.id = t.id),
      this.loading.promise
    );
  }
  invalidate(t) {
    return (
      this.invalid.add(t),
      this.invalidating ||
        (this.invalidating = Promise.resolve().then(async () => {
          const t = this.router.parse(new URL(location.href));
          await this.update(t, [], !0), (this.invalidating = null);
        })),
      this.invalidating
    );
  }
  _init(t) {
    this.current = t.state;
    const e = document.querySelector("style[data-svelte]");
    e && e.remove(),
      (this.root = new this.Root({
        target: this.target,
        props: i({ stores: this.stores }, t.props),
        hydrate: !0,
      })),
      (this.started = !0);
  }
  async _get_navigation_result(t, e) {
    if (this.loading.id === t.id) return this.loading.promise;
    for (let r = 0; r < t.routes.length; r += 1) {
      const s = t.routes[r];
      if (1 === s.length) return { reload: !0 };
      let a = r + 1;
      for (; a < t.routes.length; ) {
        const e = t.routes[a];
        if (e[0].toString() !== s[0].toString()) break;
        1 !== e.length && e[1].forEach((t) => t()), (a += 1);
      }
      const n = await this._load({ route: s, path: t.path, query: t.query }, e);
      if (n) return n;
    }
    return await this._load_error({
      status: 404,
      error: new Error(`Not found: ${t.path}`),
      path: t.path,
      query: t.query,
    });
  }
  async _get_navigation_result_from_branch({ page: t, branch: e }) {
    const r = e.filter(Boolean),
      s = {
        state: { page: t, branch: e, session_id: this.session_id },
        props: { components: r.map((t) => t.module.default) },
      };
    for (let o = 0; o < r.length; o += 1)
      r[o].loaded && (s.props[`props_${o}`] = await r[o].loaded.props);
    (this.current.page &&
      t.path === this.current.page.path &&
      t.query.toString() === this.current.page.query.toString()) ||
      (s.props.page = t);
    const a = r[r.length - 1],
      n = a.loaded && a.loaded.maxage;
    if (n) {
      const e = `${t.path}?${t.query}`;
      let r = !1;
      const a = () => {
          this.cache.get(e) === s && this.cache.delete(e), i(), clearTimeout(o);
        },
        o = setTimeout(a, 1e3 * n),
        i = this.stores.session.subscribe(() => {
          r && a();
        });
      (r = !0), this.cache.set(e, s);
    }
    return s;
  }
  async _load_node({ status: t, error: e, module: r, page: s, context: a }) {
    const n = {
        module: r,
        uses: {
          params: new Set(),
          path: !1,
          query: !1,
          session: !1,
          context: !1,
          dependencies: [],
        },
        loaded: null,
        context: a,
      },
      o = {};
    for (const i in s.params)
      Object.defineProperty(o, i, {
        get: () => (n.uses.params.add(i), s.params[i]),
        enumerable: !0,
      });
    const l = this.$session;
    if (r.load) {
      const { started: c } = this,
        u = {
          page: {
            host: s.host,
            params: o,
            get path() {
              return (n.uses.path = !0), s.path;
            },
            get query() {
              return (n.uses.query = !0), s.query;
            },
          },
          get session() {
            return (n.uses.session = !0), l;
          },
          get context() {
            return (n.uses.context = !0), i({}, a);
          },
          fetch(t, e) {
            const r = "string" == typeof t ? t : t.url,
              { href: a } = new URL(r, new URL(s.path, document.baseURI));
            return n.uses.dependencies.push(a), c ? fetch(t, e) : st(t, e);
          },
        };
      e && ((u.status = t), (u.error = e));
      const h = await r.load.call(null, u);
      if (!h) return;
      (n.loaded = (function (t) {
        if (t.error) {
          const e = "string" == typeof t.error ? new Error(t.error) : t.error,
            r = t.status;
          return e instanceof Error
            ? !r || r < 400 || r > 599
              ? (console.warn(
                  '"error" returned from load() without a valid status code — defaulting to 500'
                ),
                { status: 500, error: e })
              : { status: r, error: e }
            : {
                status: 500,
                error: new Error(
                  `"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`
                ),
              };
        }
        if (t.redirect) {
          if (!t.status || 3 !== Math.floor(t.status / 100))
            return {
              status: 500,
              error: new Error(
                '"redirect" property returned from load() must be accompanied by a 3xx status code'
              ),
            };
          if ("string" != typeof t.redirect)
            return {
              status: 500,
              error: new Error(
                '"redirect" property returned from load() must be a string'
              ),
            };
        }
        return t;
      })(h)),
        n.loaded.context && (n.context = n.loaded.context);
    }
    return n;
  }
  async _load({ route: t, path: e, query: r }, s) {
    const a = `${e}?${r}`;
    if (!s && this.cache.has(a)) return this.cache.get(a);
    const [n, o, l, c] = t,
      u = c ? c(n.exec(e)) : {},
      h = this.current.page && {
        path: e !== this.current.page.path,
        params: Object.keys(u).filter(
          (t) => this.current.page.params[t] !== u[t]
        ),
        query: r.toString() !== this.current.page.query.toString(),
        session: this.session_id !== this.current.session_id,
      },
      d = { host: this.host, path: e, query: r, params: u },
      p = [];
    let f = {},
      g = !1,
      m = 200,
      y = null;
    o.forEach((t) => t());
    t: for (let b = 0; b < o.length; b += 1) {
      let t;
      try {
        if (!o[b]) continue;
        const e = await o[b](),
          r = this.current.branch[b];
        if (
          !r ||
          e !== r.module ||
          (h.path && r.uses.path) ||
          h.params.some((t) => r.uses.params.has(t)) ||
          (h.query && r.uses.query) ||
          (h.session && r.uses.session) ||
          r.uses.dependencies.some((t) => this.invalid.has(t)) ||
          (g && r.uses.context)
        ) {
          t = await this._load_node({ module: e, page: d, context: f });
          const r = b === o.length - 1;
          if (t && t.loaded) {
            if (
              (t.loaded.error && ((m = t.loaded.status), (y = t.loaded.error)),
              t.loaded.redirect)
            )
              return { redirect: t.loaded.redirect };
            t.loaded.context && (g = !0);
          } else if (r && e.load) return;
        } else t = r;
      } catch (_) {
        (m = 500), (y = _);
      }
      if (y) {
        for (; b--; )
          if (l[b]) {
            let t,
              e,
              r = b;
            for (; !(e = p[r]); ) r -= 1;
            try {
              if (
                ((t = await this._load_node({
                  status: m,
                  error: y,
                  module: await l[b](),
                  page: d,
                  context: e.context,
                })),
                t.loaded.error)
              )
                continue;
              p.push(t);
              break t;
            } catch (_) {
              continue;
            }
          }
        return await this._load_error({
          status: m,
          error: y,
          path: e,
          query: r,
        });
      }
      t && t.loaded && t.loaded.context && (f = i(i({}, f), t.loaded.context)),
        p.push(t);
    }
    return await this._get_navigation_result_from_branch({
      page: d,
      branch: p,
    });
  }
  async _load_error({ status: t, error: e, path: r, query: s }) {
    const a = { host: this.host, path: r, query: s, params: {} },
      n = await this._load_node({
        module: await this.fallback[0],
        page: a,
        context: {},
      }),
      o = [
        n,
        await this._load_node({
          status: t,
          error: e,
          module: await this.fallback[1],
          page: a,
          context: n && n.loaded && n.loaded.context,
        }),
      ];
    return await this._get_navigation_result_from_branch({
      page: a,
      branch: o,
    });
  }
}
async function nt({
  paths: t,
  target: e,
  session: r,
  host: s,
  route: a,
  spa: n,
  trailing_slash: o,
  hydrate: i,
}) {
  const l = a && new et({ base: t.base, routes: H, trailing_slash: o }),
    c = new at({ Root: Y, fallback: Q, target: e, session: r, host: s });
  i && (await c.start(i)),
    a && l.init(c),
    n && l.goto(location.href, { replaceState: !0 }, []),
    dispatchEvent(new CustomEvent("sveltekit:start"));
}
export { nt as start };
