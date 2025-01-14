const maxSize = 700;

export function drawMeridian(sketchElementId) {
  let tokenData = {
    hash: (window.location.href.match(/0x.{64}/) || [""])[0],
  };

  // create a canvas child
  const sketchDiv = document.getElementById(sketchElementId);
  const canvas = document.createElement('canvas', { "width": maxSize, "height": maxSize });
  sketchDiv.appendChild(canvas);


  function t(t, e, r, n) {
    return (
      (t[0] = e[0] + r[0] * n),
      (t[1] = e[1] + r[1] * n),
      (t[2] = e[2] + r[2] * n),
      t
    );
  }
  function e(t, e) {
    var r = e[0],
      n = e[1],
      l = e[2],
      o = r * r + n * n + l * l;
    return (
      0 < o &&
      ((o = 1 / p(o)),
        (t[0] = e[0] * o),
        (t[1] = e[1] * o),
        (t[2] = e[2] * o)),
      t
    );
  }
  function r(t, e) {
    return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
  }
  function n(t, e, r) {
    return (
      (t[0] = e[0] - r[0]), (t[1] = e[1] - r[1]), (t[2] = e[2] - r[2]), t
    );
  }
  function l(t, e, r, n) {
    return (t[0] = e), (t[1] = r), (t[2] = n), t;
  }
  var o = Math.PI,
    a = Math.sin,
    f = Math.cos,
    s = Math.ceil,
    c = Math.pow,
    u = Math.max,
    i = Math.min,
    h = Math.floor,
    p = Math.sqrt;
  const v = "undefined";
  let b,
    d,
    g,
    m,
    y = null,
    M = !1;
  const C = () => d(),
    w = () => 0.5 < C(),
    D = (t = 0.5) => C() < t,
    S = (t, e) => (null == e && ((e = t), (t = 0)), C() * (e - t) + t),
    k = (t) => {
      return t.length ? t[((e = t.length), h(S(e, undefined)))] : void 0;
      var e;
    },
    E = (t) => {
      for (var e, r, n = t.length, l = [...t]; n;)
        (e = ~~(C() * n--)), (r = l[n]), (l[n] = l[e]), (l[e] = r);
      return l;
    },
    A = (t = 0, e = 1) => {
      var r = Math.log;
      if (M) {
        M = !1;
        var n = y;
        return (y = null), t + e * n;
      }
      var l = 0,
        o = 0,
        a = 0;
      do {
        a = (l = 2 * C() - 1) * l + (o = 2 * C() - 1) * o;
      } while (1 <= a || 0 === a);
      var f = p((-2 * r(a)) / a);
      return (y = o * f), (M = !0), t + e * (l * f);
    },
    R = (t) =>
      t[
      ((t) => {
        var e,
          r = 0;
        for (e = 0; e < t.length; e++) r += t[e];
        var n = C() * r;
        for (e = 0; e < t.length; e++) {
          if (n < t[e]) return e;
          n -= t[e];
        }
        return 0;
      })(t.map((t) => t[1]))
      ][0],
    T = (t, e) => {
      let r = e[0],
        n = e[1],
        l = e[2],
        o = e[3],
        a = e[4],
        f = e[5],
        s = e[6],
        c = e[7],
        u = e[8],
        i = e[9],
        h = e[10],
        p = e[11],
        v = e[12],
        b = e[13],
        d = e[14],
        g = e[15],
        m = r * f - n * a,
        y = r * s - l * a,
        M = r * c - o * a,
        C = n * s - l * f,
        w = n * c - o * f,
        D = l * c - o * s,
        S = u * b - i * v,
        k = u * d - h * v,
        E = u * g - p * v,
        A = i * d - h * b,
        R = i * g - p * b,
        T = h * g - p * d,
        U = m * T - y * R + M * A + C * E - w * k + D * S;
      return U
        ? ((U = 1 / U),
          (t[0] = (f * T - s * R + c * A) * U),
          (t[1] = (l * R - n * T - o * A) * U),
          (t[2] = (b * D - d * w + g * C) * U),
          (t[3] = (h * w - i * D - p * C) * U),
          (t[4] = (s * E - a * T - c * k) * U),
          (t[5] = (r * T - l * E + o * k) * U),
          (t[6] = (d * M - v * D - g * y) * U),
          (t[7] = (u * D - h * M + p * y) * U),
          (t[8] = (a * R - f * E + c * S) * U),
          (t[9] = (n * E - r * R - o * S) * U),
          (t[10] = (v * w - b * M + g * m) * U),
          (t[11] = (i * M - u * w - p * m) * U),
          (t[12] = (f * k - a * A - s * S) * U),
          (t[13] = (r * A - n * k + l * S) * U),
          (t[14] = (b * y - v * C - d * m) * U),
          (t[15] = (u * C - i * y + h * m) * U),
          t)
        : null;
    },
    U = (t, e, r) => {
      let n = e[0],
        l = e[1],
        o = e[2],
        a = e[3],
        f = e[4],
        s = e[5],
        c = e[6],
        u = e[7],
        i = e[8],
        h = e[9],
        p = e[10],
        v = e[11],
        b = e[12],
        d = e[13],
        g = e[14],
        m = e[15],
        y = r[0],
        M = r[1],
        C = r[2],
        w = r[3];
      return (
        (t[0] = y * n + M * f + C * i + w * b),
        (t[1] = y * l + M * s + C * h + w * d),
        (t[2] = y * o + M * c + C * p + w * g),
        (t[3] = y * a + M * u + C * v + w * m),
        (y = r[4]),
        (M = r[5]),
        (C = r[6]),
        (w = r[7]),
        (t[4] = y * n + M * f + C * i + w * b),
        (t[5] = y * l + M * s + C * h + w * d),
        (t[6] = y * o + M * c + C * p + w * g),
        (t[7] = y * a + M * u + C * v + w * m),
        (y = r[8]),
        (M = r[9]),
        (C = r[10]),
        (w = r[11]),
        (t[8] = y * n + M * f + C * i + w * b),
        (t[9] = y * l + M * s + C * h + w * d),
        (t[10] = y * o + M * c + C * p + w * g),
        (t[11] = y * a + M * u + C * v + w * m),
        (y = r[12]),
        (M = r[13]),
        (C = r[14]),
        (w = r[15]),
        (t[12] = y * n + M * f + C * i + w * b),
        (t[13] = y * l + M * s + C * h + w * d),
        (t[14] = y * o + M * c + C * p + w * g),
        (t[15] = y * a + M * u + C * v + w * m),
        t
      );
    };
  var x = (t) => {
    const e = p(3);
    var r = (3 - e) / 6,
      n = [..."221021201001212012210010122102120100"].map((t) => t - 1),
      l = 0;
    const o = new Uint8Array(512);
    for (var a = o.slice(0, 256); 256 > l; l++) a[l] = l;
    for (l = 0; 255 > l; l++) {
      var f = l + ~~(t() * (256 - l)),
        s = a[l];
      (a[l] = a[f]), (a[f] = s);
    }
    const c = o.slice();
    for (l = 0; 512 > l; l++) (o[l] = a[255 & l]), (c[l] = o[l] % 12);
    return (t, l) => {
      var a,
        f,
        s = 0,
        u = 0,
        i = 0,
        p = (t + l) * (0.5 * (e - 1)),
        v = h(t + p),
        b = h(l + p),
        d = (v + b) * r,
        g = t - (v - d),
        m = l - (b - d);
      g > m ? ((a = 1), (f = 0)) : ((a = 0), (f = 1));
      var y = g - a + r,
        M = m - f + r,
        C = g - 1 + 2 * r,
        w = m - 1 + 2 * r,
        D = 255 & v,
        S = 255 & b,
        k = 0.5 - g * g - m * m;
      if (0 <= k) {
        var E = 3 * c[D + o[S]];
        s = (k *= k) * k * (n[E] * g + n[E + 1] * m);
      }
      var A = 0.5 - y * y - M * M;
      if (0 <= A) {
        var R = 3 * c[D + a + o[S + f]];
        u = (A *= A) * A * (n[R] * y + n[R + 1] * M);
      }
      var T = 0.5 - C * C - w * w;
      if (0 <= T) {
        var U = 3 * c[D + 1 + o[S + 1]];
        i = (T *= T) * T * (n[U] * C + n[U + 1] * w);
      }
      return 70 * (s + u + i) * 0.5 + 0.5;
    };
  };
  const B = (t, e, r, n) => {
    var l = r[0],
      o = r[1],
      a = r[2],
      f = r[3],
      s = e[0],
      c = e[1],
      u = e[2];
    return (
      (s -= l),
      (c = f - c - 1),
      (c -= o),
      (t[0] = (2 * s) / a - 1),
      (t[1] = (2 * c) / f - 1),
      (t[2] = 2 * u - 1),
      I(t, t, n)
    );
  },
    I = (t, e, r) => {
      var n = e[0],
        l = e[1],
        o = e[2],
        a = r[0],
        f = r[1],
        s = r[2],
        c = r[3],
        u = r[4],
        i = r[5],
        h = r[6],
        p = r[7],
        v = r[8],
        b = r[9],
        d = r[10],
        g = r[11],
        m = r[12],
        y = r[13],
        M = r[14],
        C = 1 / (n * c + l * p + o * g + r[15]);
      return (
        (t[0] = (n * a + l * u + o * v + m) * C),
        (t[1] = (n * f + l * i + o * b + y) * C),
        (t[2] = (n * s + l * h + o * d + M) * C),
        t
      );
    };
  var N = ["#f1e7e1", "#efedf6", "#f2f2f2"];
  const P = (t, e, r) => u(i(t, r), e),
    L = (t, e, r) => t * (1 - r) + e * r,
    q = (t, e) => (e < t ? 0 : 1),
    z = (t, e, r = t.length, n = 0) => t[n + P(h(e * r), 0, r - 1)];
  var H = (t, e = 3, r, n = 0.5, l = 0.5) => {
    const o = ({ B: t }) => {
      const [e, r] = t,
        o = r[0] - e[0],
        a = r[1] - e[1],
        f = 0.5 * n;
      return ((t, e, r, n) => {
        const [l, o] = t,
          [a, f] = l,
          [s, c] = o;
        e = P(e, 0, 1);
        const u = (r ? s - a : c - f) * (e = n ? 1 - e : e);
        return r
          ? [
            [l, [a + u, c]],
            [[a + u, f], o],
          ]
          : [
            [l, [s, f + u]],
            [[a, f + u], o],
          ];
      })(
        t,
        S(0.5 - f, 0.5 + f),
        ((t = 1, e = 1) => 0.5 > C() / c(t, e))(o / a, l),
        w()
      );
    },
      a = (t, e) => ({ B: t, D: e, C: [] }),
      f = (t) => {
        if (t.D < e) {
          const e = o(t) || [];
          (t.C = e.filter(s).map((e) => a(e, t.D + 1))), t.C.forEach(f);
        }
      },
      s = (t) => {
        const [e, n] = t,
          l = n[0] - e[0],
          o = n[1] - e[1];
        return l >= r && o >= r;
      },
      u = a(t, 0);
    return (
      f(u),
      ((t) => {
        const e = [],
          r = [t];
        for (; r.length;) {
          const t = r.shift(),
            n = t.C;
          n.length ? r.unshift(...n) : e.push(t.B);
        }
        return e;
      })(u)
    );
  };
  const O =
    "ee8067f3df7600a9c0db736bf3b5514aad8beebb20f7f5d04e9eb8e95145f8b917f0afb7f6bc121477bbffc000ffdca4004996ffae43228345524e9cebb43b5d9d88ff7044ffce3966aeaafc9a1a705f84eb4d37d2deb1567baeeb8078f7c6a395b394ff947bead3a25284abe2b9bd0e7e394a93a2ecbfaf0e273353a7e0e84420f391c73dc1a2f4cd0060bafff46c921263a7f0acb3ee636878af64fdb511688cc8f15644".match(
      /.{6}/g
    ),
    Y =
      "0,1,2:1,2%3,4,5:4,5%6,7,8:6,8%9,10%11,12,13:11,13%14,15,16:14,16%17,18,19:17,19:18,19%20,21%22,23,24:23,24:22,24%25,26%27,17,19:27,19%28,16,29:28,16%30,31,32:31,32%33,34,35:33,34:34,35%36,37,38:36,37%39,40,41:40,41%42,43%44,45%46,47,48:47,48%49,50,51:50,51%52,53,54:52,53"
        .split`%`.map((t) =>
          t.split`:`.map((t) => t.split`,`.map((t) => `#${O[parseInt(t)]}`))
        ),
    $ = [
      0, 0, 0, -1, -1, 0, 1, 0, 0, 1, -1, -1, 1, -1, -1, 1, 1, 1, 0, -2, -2,
      0, 2, 0, 0, 2, -1, -2, 1, -2, -2, -1, 2, -1, -2, 1, 2, 1, -1, 2, 1, 2,
    ];
  var F = 1 / 12.92;
  const K = (t) => c((t + 0.055) / 1.055, 2.4),
    W = (t, e = ~~((t / 100) * 255)) => V([e, e, e]),
    X = (t) => ("string" == typeof t ? Q(t) : t),
    j = (t) => {
      var e = (t = X(t))[0] / 255,
        r = t[1] / 255,
        n = t[2] / 255;
      return (
        0.2126 * (0.03928 >= e ? e * F : K(e)) +
        0.7152 * (0.03928 >= r ? r * F : K(r)) +
        0.0722 * (0.03928 >= n ? n * F : K(n))
      );
    },
    G = (t, e) => {
      var r = j(t),
        n = j(e);
      return (u(r, n) + 0.05) / (i(r, n) + 0.05);
    },
    J = (t) => t / 255,
    Q = (t) => {
      var e = t.replace("#", "");
      3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
      var r = parseInt(e, 16);
      return [r >> 16, 255 & (r >> 8), 255 & r];
    },
    V = (t) => {
      var e = P(~~t[0], 0, 255),
        r = P(~~t[1], 0, 255);
      return (
        "#" +
        (P(~~t[2], 0, 255) | (r << 8) | (e << 16) | 16777216)
          .toString(16)
          .slice(1)
      );
    },
    Z = (t) => (0.04045 > t ? t / 12.92 : c((t + 0.055) / 1.055, 2.4)),
    _ = (t) => (0.0031308 < t ? 1.055 * c(t, 1 / 2.4) - 0.055 : 12.92 * t),
    tt = (t, e, r) => {
      const n = (r / 180) * o;
      return V(
        (([t, e, r]) => {
          let n = c(t + 0.3963377774 * e + 0.2158037573 * r, 3),
            l = c(t - 0.1055613458 * e - 0.0638541728 * r, 3),
            o = c(t - 0.0894841775 * e - 1.291485548 * r, 3);
          return [
            P(
              ~~(
                255 *
                _(4.0767245293 * n - 3.3072168827 * l + 0.2307590544 * o)
              ),
              0,
              255
            ),
            P(
              ~~(
                255 *
                _(-1.2681437731 * n + 2.6093323231 * l - 0.341134429 * o)
              ),
              0,
              255
            ),
            P(
              ~~(
                255 *
                _(-0.0041119885 * n - 0.7034763098 * l + 1.7068625689 * o)
              ),
              0,
              255
            ),
          ];
        })([(t /= 100), (e /= 100) ? e * f(n) : 0, e ? e * a(n) : 0])
      );
    },
    et = (a, f, s, i, h, v, b) => {
      const d = [S(-1e3, 1e3), S(-1e3, 1e3)],
        g = [5, 10, 10],
        m = 1e-4,
        [y, M, C] = ((t, e, r, n) => {
          const l = (r / n) * 2;
          let o;
          const a =
            ((s = (f = t)[0]),
              (c = f[1]),
              (u = f[2]),
              p(s * s + c * c + u * u));
          var f, s, c, u;
          (t = ((t, e, r) => (
            (t[0] = e[0] * r), (t[1] = e[1] * r), (t[2] = e[2] * r), t
          ))([], t, 0 === a ? 1 : 1 / a)),
            (o = ((t, e, r, n, l, o, a, f) => {
              const s = (r - e) / (2 * o),
                c = 4 / (2 * o),
                u = (r + e) / 2;
              return ((t, e, r, n, l, o, a) => {
                var f = 1 / (e - r),
                  s = 1 / (n - l);
                return ((t, ...e) => {
                  for (let r = 0; r < e.length; r++) t[r] = e[r];
                  return t;
                })(
                  [],
                  -2 * f,
                  0,
                  0,
                  0,
                  0,
                  -2 * s,
                  0,
                  0,
                  0,
                  0,
                  2 * -0.005,
                  0,
                  (e + r) * f,
                  (l + n) * s,
                  -0,
                  1
                );
              })(0, u - s, u + s, 0 - c, 0 + c);
            })(0, -l, l, 0, 0, (e /= a / 2)));
          const i = ((t, e, r, n) => {
            let l = e[0],
              o = e[1],
              a = e[2],
              f = n[0],
              s = n[1],
              c = n[2],
              u = l - r[0],
              i = o - r[1],
              h = a - r[2],
              v = u * u + i * i + h * h;
            0 < v && ((v = 1 / p(v)), (u *= v), (i *= v), (h *= v));
            let b = s * h - c * i,
              d = c * u - f * h,
              g = f * i - s * u;
            return (
              (v = b * b + d * d + g * g),
              0 < v && ((v = 1 / p(v)), (b *= v), (d *= v), (g *= v)),
              (t[0] = b),
              (t[1] = d),
              (t[2] = g),
              (t[3] = 0),
              (t[4] = i * g - h * d),
              (t[5] = h * b - u * g),
              (t[6] = u * d - i * b),
              (t[7] = 0),
              (t[8] = u),
              (t[9] = i),
              (t[10] = h),
              (t[11] = 0),
              (t[12] = l),
              (t[13] = o),
              (t[14] = a),
              (t[15] = 1),
              t
            );
          })([], t, [0, 0, 0], [0, 1, 0]),
            h =
              ((b = t),
                ((v = [])[0] = v[5] = v[10] = v[15] = 1),
                (v[1] =
                  v[2] =
                  v[3] =
                  v[4] =
                  v[6] =
                  v[7] =
                  v[8] =
                  v[9] =
                  v[11] =
                  0),
                (v[12] = b[0]),
                (v[13] = b[1]),
                (v[14] = b[2]),
                v);
          var v, b;
          U(h, h, i);
          const d = T([], h),
            g = U([], o, d);
          return [g, T([], g), d];
        })([10, 10, 10], i, a, f),
        w = [0.8, 0.6, -0.6, 0.8],
        D = (t, e, r = 0.1, n = 1, l = 6, o) => {
          let a = t * r,
            f = e * r,
            s = 0,
            c = 0,
            u = 1,
            i = a,
            h = f;
          for (let t = 0; t < l; t++) {
            (i = w[0] * a + w[2] * f), (h = w[1] * a + w[3] * f);
            const e = 0 == t ? 1 : 1 / u;
            (c += e * o(i * u, h * u)), (s += e), (u *= 2);
          }
          return (c / s) * n;
        },
        k = (t) => {
          let e = t[0],
            r = t[2],
            n = 1 * D(e + d[0], r + d[1], 0.05, 1, s, h);
          return (n = u(0, c(n, v) * b)), t[1] - n;
        };
      return [
        D,
        (r, o, a, f, s = 250) => {
          const c = [],
            u = [];
          ((t, r, o, a, f) => {
            l(t, o[0], o[1], 0),
              l(r, o[0], o[1], 1),
              B(t, t, a, f),
              B(r, r, a, f),
              n(r, r, t),
              e(r, r);
          })(c, u, [r, o], [0, 0, a, f], M);
          const i = ((e, r, n, l, o = 250) => {
            let a = 0;
            for (let n = 0; n < o; n++) {
              const n = t([], e, r, a),
                o = k(n);
              if (o < m) return a;
              if (((a += o), a >= l)) return l;
            }
            return l;
          })(c, u, 0, 250, s);
          return i > 249.9999 || i < 1e-4 ? null : [i, c, u];
        },
        (t, l, a) =>
          P(
            1 -
            ((t, l, a, f, s, c = 1, i = 1) => {
              const h = e([], n([], s, [0, 0, 0])),
                p = r(h, f),
                v = r(h, l),
                b = r(l, f),
                d = p - v * b,
                g = L(1, u(v, b), q(0, d)),
                m = c * c;
              return P(
                (i *
                  u(0, v) *
                  (1 +
                    m * (i / (m + 0.13) + 0.5 / (m + 0.33)) +
                    (((0.45 * m) / (m + 0.09)) * d) / g)) /
                o,
                0,
                1
              );
            })(
              0,
              ((t) =>
                e(
                  [],
                  [
                    k([t[0] + m, t[1], t[2]]) - k([t[0] - m, t[1], t[2]]),
                    k([t[0], t[1] + m, t[2]]) - k([t[0], t[1] - m, t[2]]),
                    k([t[0], t[1], t[2] + m]) - k([t[0], t[1], t[2] - m]),
                  ]
                ))(t),
              0,
              a,
              g
            ),
            0,
            1
          ),
      ];
    };
  var rt,
    nt = (e, r, n, l, v, b) => {
      const d = 11;
      let g = R([
        [0, 25],
        [1, 10],
        [2, 60],
        [3, 405],
        [4, 250],
        [5, 20],
        [8, 25],
        [7, 30],
        [6, 100],
        [9, 10],
        [10, 25],
        [d, 10],
        [12, 30],
      ]),
        m = !1;
      3 == g && (m = D(0.025));
      const y = 1 == g,
        M = 9 == g;
      let T,
        U = M ? 8 : 7,
        B =
          !M &&
          7 != g &&
          2 != g &&
          4 != g &&
          !m &&
          (5 == g || 12 == g || (6 != g && !y && D(0.33))),
        I = 1;
      y || M || (I = k([1, 2, 3])),
        7 == g
          ? ((I = 3), (T = k([0.5, 1])))
          : (T =
            M || m || B || g == d || 12 == g
              ? 1
              : 3 == g
                ? R([
                  [0.25, 50],
                  [0.5, 50],
                  [1, 100],
                  [2, 50],
                ])
                : k([0.25, 0.5, 1]));
      const [O, F] = k([
        [5, 10],
        [4, 8],
        [5, 8],
      ]),
        K = x(C),
        _ = x(C),
        [rt, nt, lt] = et(l, v, U, I, K, O, F),
        ot = i(l, v),
        at = ot * (null == e.M ? 0.075 : e.M),
        ft = [...N, "#76b995", "#e5bb57", "#70a7c5"],
        st = null == e.L ? 30 : e.L,
        ct = 2 == g || 3 == g || 4 == g || 6 == g || 10 == g || 7 == g,
        ut = e.T || 0.925,
        it = e.K || ((!ct && 8 != g && 0 != g && 12 != g) || B ? 1 : ut),
        ht = "#ffcd38",
        pt = "#fff",
        vt = "#000",
        bt = [...new Set(Y.map((t) => t[0]).flat(1 / 0))],
        dt = "multiply";
      let gt,
        mt = "#E9E3D5",
        yt = 1,
        Mt = null;
      if (12 == g) gt = [w() ? pt : null, vt, ht];
      else if (g == d) (gt = [vt]), (yt = 0.75);
      else if (0 == g) (gt = [vt]), (yt = 0.75), (mt = k(ft));
      else if (y) (gt = [W(5)]), (yt = 0.85);
      else if (2 == g) {
        const t = S(0, 360),
          e = 20,
          r = tt(70, e, t);
        if (((gt = [r]), D(0.5))) {
          const n = D(0.5) ? W(5) : tt(40, e, t);
          gt = k([
            [r, n],
            [n, r],
            [r, r, n],
          ]);
        }
        (Mt = dt), (mt = k(N));
      } else if (4 == g) (gt = E(bt).slice(0, k([40, 50, 60]))), (Mt = dt);
      else if (5 == g) (gt = [pt]), (mt = vt), (Mt = "lighter");
      else if (7 == g) (gt = [pt, W(5), ht, pt]), (Mt = dt);
      else if (M) (gt = w() ? [ht, vt, pt] : [pt, vt, ht]), (yt = 0.95);
      else if (6 == g) {
        yt = 0.9;
        const t = ft.map((t) =>
          (([t, e, r]) => {
            var n = Math.atan2;
            let l = p(e * e + r * r),
              a = [
                t,
                l,
                l
                  ? ((f = (180 * n(r, e)) / o),
                    0 > (f %= 360) ? f + 360 : f)
                  : 0,
              ];
            var f;
            return (a[0] *= 100), (a[1] *= 100), a;
          })(
            ((t) => {
              var e = Math.cbrt;
              "string" == typeof t && (t = Q(t));
              let [r, n, l] = t;
              (r = Z(r / 255)), (n = Z(n / 255)), (l = Z(l / 255));
              let o = e(
                0.412165612 * r + 0.536275208 * n + 0.0514575653 * l
              ),
                a = e(0.211859107 * r + 0.6807189584 * n + 0.107406579 * l),
                f = e(
                  0.0883097947 * r + 0.2818474174 * n + 0.6302613616 * l
                );
              return [
                0.2104542553 * o + 0.793617785 * a - 0.0040720468 * f,
                1.9779984951 * o - 2.428592205 * a + 0.4505937099 * f,
                0.0259040371 * o + 0.7827717662 * a - 0.808675766 * f,
              ];
            })(X(t))
          )
        ),
          [e, r] = k(t);
        mt = tt(e, r, S(360));
        const n = k([2, 3, 4]);
        let l = bt.filter((t) => 2 <= G(t, mt));
        3 > l.length && (l = bt), (gt = E(l).slice(0, n));
      } else if (8 == g)
        (mt = k(bt.filter((t) => 2 <= G(t, pt)))), (gt = [pt]);
      else if (10 == g) {
        const t = S(360),
          e = 85.76,
          r = 2.6;
        (gt = [tt(e, r, t)]),
          B && gt.push(gt[0], tt(e + 10, r, t)),
          (mt = W(95)),
          (Mt = dt);
      } else {
        let t;
        if (((Mt = dt), m)) {
          const t = Y.map((t) => [
            t,
            t[0].filter(
              (t) =>
                1.3 <=
                ((t, e) => {
                  const [r, n, l] = X(t).map(J),
                    [o, a, f] = X(e).map(J);
                  return G(
                    [r * o, n * a, l * f].map((t) => 255 * t),
                    e
                  );
                })(t, mt)
            ),
          ]).filter((t) => t[1].length),
            [e, r] = k(t);
          gt = [k(r)];
        } else {
          let e = k(Y);
          (t = k(e)), (gt = E(t));
        }
        t &&
          2 <= gt.length &&
          B &&
          (gt.sort((t, e) => j(e) - j(t)),
            2 == gt.length && gt.push(gt[gt.length - 1]));
      }
      st &&
        ct &&
        (gt = gt.map((t) => {
          return t
            ? V(
              ((e = Q(t)),
                (r = st / 255),
                (n = 1),
                (l = 1),
                e.map(
                  (t) =>
                    255 *
                    ((t, e) => c(t, 1 / e))(
                      ((t, e, r) => i(u(t - e, 0) / (r - e), 1))(
                        t / 255,
                        r,
                        l
                      ),
                      n
                    )
                ))
            )
            : null;
          var e, r, n, l;
        }));
      const Ct = new Set(gt.filter(Boolean)).size;
      let wt = 1;
      M && (wt = 1.25), y && (wt = 1.5);
      const Dt = (e.P || 0.002) * wt,
        St = ot * Dt,
        kt = 3 * St,
        Et = S(-1, 1) * o * 2;
      let At = 0;
      g == d && (At = D(0.15) ? 7 : k([5, 6]));
      const Rt = [0, 0.25, 0.5, 0.75, 1];
      let Tt,
        Ut =
          7 != g &&
          4 != g &&
          !m &&
          (6 == g ||
            g == d ||
            1 == g ||
            8 == g ||
            0 == g ||
            5 == g ||
            (3 == g && 2 == Ct && 1 >= I) ||
            B ||
            2 == g ||
            D(0.5));
      (Tt = !(!m && 2 != g) || 7 == g || D(0.33)),
        (5 == g || M) && (Tt = !1),
        Ut || !(1 >= Ct) || m || (Tt = !1),
        3 != g || m || (!B && Ut) || (Tt = !1);
      let xt,
        Bt = !0;
      y && (Bt = !1),
        (xt = B ? (8 == g || g == d || 5 == g ? 2.175 : 2.0875) : 1.75),
        5 == g || 8 == g
          ? (xt *= 0.8)
          : M
            ? (xt = 1.75)
            : 6 == g && (xt *= 0.9);
      const It = 0 < At,
        Nt = [0, 0.125, 0.25, 0.5, 1, 2],
        Pt = ((t) => {
          t = E(t);
          let e = 0;
          return () => {
            let r = t[e];
            return e++, e > t.length - 1 && ((t = E(t)), (e = 0)), r;
          };
        })(Nt);
      let Lt,
        qt = null,
        zt = null,
        Ht = [],
        Ot = 0,
        Yt = null;
      r(mt, gt, Bt);
      const $t = (t, e) => {
        const r = nt(t, e, l, v);
        if (!r) return null;
        const n = r[0],
          o = rt(n * T, 0, 0.25, 1, 6, _),
          a = Tt ? o : z(Rt, o),
          f = q(0.15, (i = 4 * o) - h(i)),
          s = Ut ? f : 1,
          u = B ? z(Nt, 10 * c(o, 5)) : 0;
        var i;
        return [n, r[1], r[2], o, u, a, s];
      },
        Ft = (t) => (t ? t[4] : 0),
        Kt = (e) => {
          const r = e[0],
            l = e[2],
            o = r[0],
            a = r[1],
            f = $t(o, a);
          if (!f) return;
          const [s, c, i, h, p, b, d] = f,
            m = t([], c, i, s),
            C = lt(m, c, i);
          let w = z(gt, h);
          if (!w) return;
          const D = 1 * St * xt * 1 * d;
          let S = D;
          if (((S *= it), 0 < D)) {
            const t =
              (1 * (2 * rt(m[0], m[2], 0.25, 1, 4, K) - 1) * v * 0.005) / 2;
            let e = Et + rt(m[0], m[2], 0.1, 1, 1, K),
              r = S;
            M && (r *= 0.8);
            const f = 1 - C;
            if (((r *= M ? f : b), 0 >= r)) return;
            let s = 1;
            M && (s *= f),
              y && ((s *= 2 * L(1, 0.25, C)), y && (s *= P(m[1] / 1, 0, 1)));
            const c = M || 8 == g || 5 == g ? 1 : L(1.25, 0.5, C);
            let i = u(0, s * S) * c;
            if (((i += l), 0 < i)) {
              const l = 6 == g ? P(A(1, 0.2), 0, 1) : 1;
              n(
                o + 0,
                a + t,
                i,
                r,
                e,
                w,
                l * yt,
                (7 != g && !M) || w != pt ? Mt : null
              );
            }
          }
        };
      return () => {
        Lt ||
          ((Lt = !0),
            It &&
            (qt = H(
              [
                [at, at],
                [l - at, v - at],
              ],
              At,
              0.01 * ot,
              0.5,
              k([0.5, 0.75, 1])
            )),
            (zt = (
              It && qt
                ? qt
                : [
                  [
                    [at, at],
                    [l - at, v - at],
                  ],
                ]
            ).map((t) =>
              ((t, e) => {
                const r = t[0],
                  n = t[1],
                  l = r[0],
                  c = r[1],
                  h = n[0] - l,
                  v = n[1] - c;
                return ((t, e, r = 2 * e, n, l, c, h, v) => {
                  n = s(u(1, n || 30));
                  let b,
                    d,
                    g = e + 2e-14,
                    m = u(0, r - g),
                    y = r / p(2),
                    M = [],
                    C = [],
                    w = 0,
                    D = [s(t[0] / y), s(t[1] / y)];
                  const S = [0, 0],
                    k = (t, e, r, n) => {
                      (e[0] = t[0] + f(r) * n), (e[1] = t[1] + a(r) * n);
                    };
                  let E = [D[1], 1],
                    A = Array(D[0] * D[1])
                      .fill()
                      .map(() => []);
                  const R = Array(A.length).fill(),
                    T = (t) => {
                      let e,
                        r = 0,
                        n = C.length;
                      for (t = [t[0], t[1]], M.push(n), e = 0; e < 2; e++)
                        r += (0 | (t[e] / y)) * E[e];
                      A[r].push(n);
                      const l = R[r] || (R[r] = c(t));
                      return C.push([t, l, 0]), t;
                    },
                    U = (t, r) => {
                      let n, l, o;
                      for (n = 0; n < $.length / 2; n++) {
                        l = 0;
                        for (let e = 0; e < 2; e++) {
                          if (
                            ((o = (0 | (t[e] / y)) + $[2 * n + e]),
                              0 > o || o >= D[e])
                          ) {
                            l = -1;
                            break;
                          }
                          l += o * E[e];
                        }
                        if (-1 !== l && 0 < A[l].length)
                          for (let n = 0; n < A[l].length; n++) {
                            const o = C[A[l][n]],
                              a = o[0],
                              f = h(o[1]),
                              s = i(f, r),
                              c = u(f, r),
                              p = e + m * (s + 0 * (c - s)),
                              v = t[0] - a[0],
                              b = t[1] - a[1];
                            if (v * v + b * b < p * p) return !0;
                          }
                      }
                      return !1;
                    },
                    x = () => {
                      for (; 0 < M.length;) {
                        if (!d) {
                          d = !0;
                          const t = M.shift(),
                            e = C[t];
                          (b = e[0]), (w = h(e[1]));
                        }
                        for (let e = 0; e < n; e++) {
                          const e = g + m * (w + 0 * (1 - w)),
                            r = v() * o * 2;
                          if (
                            (k(b, S, r, e),
                              0 <= S[0] &&
                              S[0] < t[0] &&
                              0 <= S[1] &&
                              S[1] < t[1] &&
                              !U(S, w))
                          )
                            return T(S);
                        }
                        d = !1;
                      }
                      return null;
                    };
                  for (T(l); x(););
                  return C;
                })(
                  [h, v],
                  e,
                  B ? kt : 2 * e,
                  20,
                  [C() * h, C() * v],
                  (t) => $t(l + t[0], c + t[1]),
                  Ft,
                  C
                ).map((t) => {
                  const e = t[0];
                  return (
                    (e[0] += l), (e[1] += c), ct && (t[2] = A(0, St / 3)), t
                  );
                });
              })(t, L(St, kt, It ? Pt() : 0))
            )),
            zt.forEach((t) => {
              t.forEach((t) => {
                t[1] && Ht.push(t);
              });
            }),
            Ht.sort((t, e) => e[1][0] - t[1][0]),
            (Yt = s(Ht.length / b)));
        for (let t = 0; t < Yt && Ot < Ht.length; t++) {
          const t = Ht[Ot++];
          Kt(t);
        }
        return Ot < Ht.length;
      };
    },
    lt = (t, e, r, n) => [
      (n, l, o) => {
        t &&
          ((t.fillStyle = n),
            t.fillRect(0, 0, e, r),
            o && (t.lineCap = "round"));
      },
      (e, r, n, l, o, s, c, u) => {
        t &&
          ((t.globalCompositeOperation = u || "source-over"),
            (t.lineWidth = l),
            (t.strokeStyle = s),
            (t.globalAlpha = c),
            t.beginPath(),
            ((e, r, n, l) => {
              const o = l / 2,
                s = f(n),
                c = a(n),
                u = [-1, 1].map((t) => [e + s * o * t, r + c * o * t]),
                i = u[0],
                h = u[1];
              t.moveTo(i[0], i[1]), t.lineTo(h[0], h[1]);
            })(e, r, o, n),
            t.stroke());
      },
      () => {
        t && (t.save(), t.scale(n, n));
      },
      () => {
        t && t.restore();
      },
    ];
  return (
    (rt =
      "undefined" == typeof tokenData
        ? (() => {
          let t = "0x";
          for (let e = 64; 0 < e; --e)
            t += "0123456789abcdef"[~~(16 * Math.random())];
          return t;
        })()
        : "string" == typeof tokenData
          ? tokenData
          : tokenData.hash),
    (b = Uint32Array.from(
      [0, 1, (m = g = 2), 3].map((t) => parseInt(rt.substr(8 * t + 2, 8), 16))
    )),
    (d = () => (
      (g = b[3]),
      (b[3] = b[2]),
      (b[2] = b[1]),
      (b[1] = m = b[0]),
      (g ^= g << 11),
      (b[0] ^= g ^ (g >>> 8) ^ (m >>> 19)),
      b[0] / 4294967296
    )),
    (() => {
      if ((typeof RUN !== v && !RUN) || typeof document === v) return nt;
      {
        let t,
          e,
          r,
          n = typeof window == v ? {} : window,
          l = n.document;
        const o = n.A || 9 / 16,
          a = n.S || maxSize,
          f = n.H || maxSize,
          s = null == n.R ? u(1, f / a) : n.R;
        let c;
        (e = a),
          (t = ~~(e * o)),
          (r = s),
          n.C
            ? (c = n.C)
            : l &&
            l.body &&
            l.createElement &&
            (c = canvas);
        const i = c ? c.getContext("2d") : null;
        if (c) {
          (c.width = ~~(t * r)), (c.height = ~~(e * r));
          // (c.width = ~~(t * r)), (c.height = ~~(e * r));
          const l = c.style;
          if (l) {
            // const t = () => {
            //   (l.position = "absolute"),
            //     (l.display = "block"),
            //     (l.top = l.left = l.right = l.bottom = "0"),
            //     (l.width = l.margin = "auto"),
            //     (l.height = "100%");
            // };
            // (n.onresize = t), t();
          }
        }
        const h = n.X || lt,
          [p, b, d, g] = h(i, t, e, r);
        d();
        const m = nt(n, p, b, t, e, 300);
        if (typeof SYNC != v && SYNC) {
          for (; m(););
          g();
        } else {
          const t =
            l && l.body
              ? (t) => n.requestAnimationFrame(t)
              : (t) => setTimeout(t),
            e = () => {
              m() ? t(e) : g();
            };
          t(e);
        }
      }
    })()
  );
  
}
