import { G as s, C as t } from "./vendor-cf565983.js";
const e = t(!0),
  n = s(e, (s) => !s);
var a, i;
((i = a || (a = {}))[(i.AUTO = 0)] = "AUTO"),
  (i[(i.DESKTOP = 1)] = "DESKTOP"),
  (i[(i.MOBILE = 2)] = "MOBILE");
let o = 0;
function c(s) {
  0 == o && e.set(s.matches);
}
const r = ({ desktopQuery: s, listen: t }) => {
  try {
    if ((e.set(window.matchMedia(s).matches), t))
      return void window.matchMedia(s).addEventListener("change", c);
  } catch (n) {
    console.error(
      `\n        \r${n}\n        \rMake sure window is assigned by calling this function within the \`onMount\` function.`
    );
  }
};
function d(s) {
  switch (((o = s), o)) {
    case 1:
      e.set(!0);
      break;
    case 2:
      e.set(!1);
  }
}
export { a as D, e as d, d as f, n as m, r as s };
