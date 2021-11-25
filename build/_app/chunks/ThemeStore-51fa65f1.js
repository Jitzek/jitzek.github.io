import { H as t, C as s } from "./vendor-9c548c9b.js";
const a = s(!0),
  e = t(a, (t) => !t);
var n, i;
((i = n || (n = {}))[(i.AUTO = 0)] = "AUTO"),
  (i[(i.DESKTOP = 1)] = "DESKTOP"),
  (i[(i.MOBILE = 2)] = "MOBILE");
let c = 0;
function o(t) {
  0 == c && a.set(t.matches);
}
const r = ({ desktopQuery: t, listen: s }) => {
  try {
    if ((a.set(window.matchMedia(t).matches), s))
      return void window.matchMedia(t).addEventListener("change", o);
  } catch (e) {
    console.error(
      `\n        \r${e}\n        \rMake sure window is assigned by calling this function within the \`onMount\` function.`
    );
  }
};
function d(t) {
  switch (((c = t), c)) {
    case 1:
      a.set(!0);
      break;
    case 2:
      a.set(!1);
  }
}
var h, u;
((u = h || (h = {})).Dark = "dark"), (u.Light = "light");
const w = s(h.Dark);
export { n as D, h as T, a as d, d as f, e as m, r as s, w as t };
