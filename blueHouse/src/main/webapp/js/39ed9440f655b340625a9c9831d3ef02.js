
/* /_res/jquery/jquery-3.2.1.min.js */
!function(a, b) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) { "use strict"; var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {}, k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {}; function p(a, b) { b = b || d; var c = b.createElement("script"); c.text = a, b.head.appendChild(c).parentNode.removeChild(c) } var q = "3.2.1", r = function(a, b) { return new r.fn.init(a, b) }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function(a, b) { return b.toUpperCase() }; r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function() { return f.call(this) }, get: function(a) { return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a] }, pushStack: function(a) { var b = r.merge(this.constructor(), a); return b.prevObject = this, b }, each: function(a) { return r.each(this, a) }, map: function(a) { return this.pushStack(r.map(this, function(b, c) { return a.call(b, c, b) })) }, slice: function() { return this.pushStack(f.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(a) { var b = this.length, c = +a + (a < 0 ? b : 0); return this.pushStack(c >= 0 && c < b ? [this[c]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function() { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d)); return g }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) { throw new Error(a) }, noop: function() { }, isFunction: function(a) { return "function" === r.type(a) }, isWindow: function(a) { return null != a && a === a.window }, isNumeric: function(a) { var b = r.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)) }, isPlainObject: function(a) { var b, c; return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n)) }, isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 }, type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a }, globalEval: function(a) { p(a) }, camelCase: function(a) { return a.replace(t, "ms-").replace(u, v) }, each: function(a, b) { var c, d = 0; if (w(a)) { for (c = a.length; d < c; d++)if (b.call(a[d], d, a[d]) === !1) break } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function(a) { return null == a ? "" : (a + "").replace(s, "") }, makeArray: function(a, b) { var c = b || []; return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c }, inArray: function(a, b, c) { return null == b ? -1 : i.call(b, a, c) }, merge: function(a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++)a[e++] = b[d]; return a.length = e, a }, grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function(a, b, c) { var d, e, f = 0, h = []; if (w(a)) for (d = a.length; f < d; f++)e = b(a[f], f, c), null != e && h.push(e); else for (f in a) e = b(a[f], f, c), null != e && h.push(e); return g.apply([], h) }, guid: 1, proxy: function(a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() { return a.apply(b || this, d.concat(f.call(arguments))) }, e.guid = a.guid = a.guid || r.guid++, e }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { j["[object " + b + "]"] = b.toLowerCase() }); function w(a) { var b = !!a && "length" in a && a.length, c = r.type(a); return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a) } var x = function(a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) { return a === b && (l = !0), 0 }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function(a, b) { for (var c = 0, d = a.length; c < d; c++)if (a[c] === b) return c; return -1 }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function(a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a }, da = function() { m() }, ea = ta(function(a) { return a.disabled === !0 && ("form" in a || "label" in a) }, { dir: "parentNode", next: "legend" }); try { G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType } catch (fa) { G = { apply: D.length ? function(a, b) { F.apply(a, H.call(b)) } : function(a, b) { var c = a.length, d = 0; while (a[c++] = b[d++]); a.length = c - 1 } } } function ga(a, b, d, e) { var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== w && (l = Z.exec(a))) if (f = l[1]) { if (9 === w) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d; if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d } if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== w) s = b, r = a; else if ("object" !== b.nodeName.toLowerCase()) { (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length; while (h--) o[h] = "#" + k + " " + sa(o[h]); r = o.join(","), s = $.test(a) && qa(b.parentNode) || b } if (r) try { return G.apply(d, s.querySelectorAll(r)), d } catch (x) { } finally { k === u && b.removeAttribute("id") } } } return i(a.replace(P, "$1"), b, d, e) } function ha() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b } function ia(a) { return a[u] = !0, a } function ja(a) { var b = n.createElement("fieldset"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } } function ka(a, b) { var c = a.split("|"), e = c.length; while (e--) d.attrHandle[c[e]] = b } function la(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex; if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1 : -1 } function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } } function na(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } } function oa(a) { return function(b) { return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a } } function pa(a) { return ia(function(b) { return b = +b, ia(function(c, d) { var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) } function qa(a) { return a && "undefined" != typeof a.getElementsByTagName && a } c = ga.support = {}, f = ga.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName }, m = ga.setDocument = function(a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ja(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { return a.getAttribute("id") === b } }, d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }) : (d.filter.ID = function(a) { var b = a.replace(_, aa); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }, d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c, d, e, f = b.getElementById(a); if (f) { if (c = f.getAttributeNode("id"), c && c.value === a) return [f]; e = b.getElementsByName(a), d = 0; while (f = e[d++]) if (c = f.getAttributeNode("id"), c && c.value === a) return [f] } return [] } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function(a, b) { if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a) }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ja(function(a) { a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var b = n.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) { c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) { if (b) while (b = b.parentNode) if (b === a) return !0; return !1 }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) { if (a === b) return l = !0, 0; var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0; if (e === f) return la(a, b); c = a; while (c = c.parentNode) g.unshift(c); c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, ga.matches = function(a, b) { return ga(a, null, null, b) }, ga.matchesSelector = function(a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) { } return ga(b, n, null, [a]).length > 0 }, ga.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, ga.attr = function(a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, ga.escape = function(a) { return (a + "").replace(ba, ca) }, ga.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, ga.uniqueSort = function(a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = ga.getText = function(a) { var b, c = "", d = 0, f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling)c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else while (b = a[d++]) c += e(b); return c }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) { return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) { var b = a.replace(_, aa).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) { return function(d) { var e = ga.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")) } }, CHILD: function(a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1; o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break; return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function(a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) { var d, f = e(a, b), g = f.length; while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g]) }) : function(a) { return e(a, 0, c) }) : e } }, pseudos: { not: ia(function(a) { var b = [], c = [], d = h(a.replace(P, "$1")); return d[u] ? ia(function(a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--) (f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ia(function(a) { return function(b) { return ga(a, b).length > 0 } }), contains: ia(function(a) { return a = a.replace(_, aa), function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ia(function(a) { return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function(b) { var c; do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType); return !1 } }), target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function(a) { return a === o }, focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: oa(!1), disabled: oa(!0), checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) { for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6) return !1; return !0 }, parent: function(a) { return !d.pseudos.empty(a) }, header: function(a) { return X.test(a.nodeName) }, input: function(a) { return W.test(a.nodeName) }, button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: pa(function() { return [0] }), last: pa(function(a, b) { return [b - 1] }), eq: pa(function(a, b, c) { return [c < 0 ? c + b : c] }), even: pa(function(a, b) { for (var c = 0; c < b; c += 2)a.push(c); return a }), odd: pa(function(a, b) { for (var c = 1; c < b; c += 2)a.push(c); return a }), lt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;)a.push(d); return a }), gt: pa(function(a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;)a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b); function ra() { } ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) { c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? ga.error(a) : z(a, i).slice(0) }; function sa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++)d += a[b].value; return d } function ta(a, b, c) { var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = x++; return b.first ? function(b, c, e) { while (b = b[d]) if (1 === b.nodeType || g) return a(b, c, e); return !1 } : function(b, c, i) { var j, k, l, m = [w, h]; if (i) { while (b = b[d]) if ((1 === b.nodeType || g) && a(b, c, i)) return !0 } else while (b = b[d]) if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b; else { if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2]; if (k[f] = m, m[2] = a(b, c, i)) return !0 } return !1 } } function ua(a) { return a.length > 1 ? function(b, c, d) { var e = a.length; while (e--) if (!a[e](b, c, d)) return !1; return !0 } : a[0] } function va(a, b, c) { for (var d = 0, e = b.length; d < e; d++)ga(a, b[d], c); return c } function wa(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g } function xa(a, b, c, d, e, f) { return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = wa(r, n), d(j, [], h, i), k = j.length; while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--) (l = r[k]) && j.push(q[k] = l); e(null, r = [], j, i) } k = r.length; while (k--) (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r) }) } function ya(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) { return a === b }, h, !0), l = ta(function(a) { return I(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; i < f; i++)if (c = d.relative[a[i].type]) m = [ta(ua(m), c)]; else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; e < f; e++)if (d.relative[a[e].type]) break; return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a)) } m.push(c) } return ua(m) } function za(a, b) { var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) { var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length; for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++]) if (q(l, g || n, h)) { i.push(l); break } k && (w = y) } c && ((l = !q && l) && r--, f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i)); u = wa(u) } G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ia(f) : f } return h = ga.compile = function(a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f); f = A(a, za(e, d)), f.selector = a } return f }, i = ga.select = function(a, b, c, e) { var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a); if (c = c || [], 1 === n.length) { if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) { if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c; m && (b = b.parentNode), a = a.slice(i.shift().value.length) } f = V.needsContext.test(a) ? 0 : i.length; while (f--) { if (j = i[f], d.relative[k = j.type]) break; if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) { if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c; break } } } return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) { return 1 & a.compareDocumentPosition(n.createElement("fieldset")) }), ja(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ka("type|href|height|width", function(a, b, c) { if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ja(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ka("value", function(a, b, c) { if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue }), ja(function(a) { return null == a.getAttribute("disabled") }) || ka(J, function(a, b, c) { var d; if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), ga }(a); r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape; var y = function(a, b, c) { var d = [], e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) { if (e && r(a).is(c)) break; d.push(a) } return d }, z = function(a, b) { for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a); return c }, A = r.expr.match.needsContext; function B(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() } var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, D = /^.[^:#\[\.,]*$/; function E(a, b, c) { return r.isFunction(b) ? r.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }) : b.nodeType ? r.grep(a, function(a) { return a === b !== c }) : "string" != typeof b ? r.grep(a, function(a) { return i.call(b, a) > -1 !== c }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) { return i.call(b, a) > -1 !== c && 1 === a.nodeType })) } r.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) { return 1 === a.nodeType })) }, r.fn.extend({ find: function(a) { var b, c, d = this.length, e = this; if ("string" != typeof a) return this.pushStack(r(a).filter(function() { for (b = 0; b < d; b++)if (r.contains(e[b], this)) return !0 })); for (c = this.pushStack([]), b = 0; b < d; b++)r.find(a, e[b], c); return d > 1 ? r.uniqueSort(c) : c }, filter: function(a) { return this.pushStack(E(this, a || [], !1)) }, not: function(a) { return this.pushStack(E(this, a || [], !0)) }, is: function(a) { return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length } }); var F, G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, H = r.fn.init = function(a, b, c) { var e, f; if (!a) return this; if (c = c || F, "string" == typeof a) { if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this } return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this) }; H.prototype = r.fn, F = r(d); var I = /^(?:parents|prev(?:Until|All))/, J = { children: !0, contents: !0, next: !0, prev: !0 }; r.fn.extend({ has: function(a) { var b = r(a, this), c = b.length; return this.filter(function() { for (var a = 0; a < c; a++)if (r.contains(this, b[a])) return !0 }) }, closest: function(a, b) { var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a); if (!A.test(a)) for (; d < e; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) { f.push(c); break } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f) }, index: function(a) { return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) { return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b)))) }, addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }); function K(a, b) { while ((a = a[b]) && 1 !== a.nodeType); return a } r.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return y(a, "parentNode") }, parentsUntil: function(a, b, c) { return y(a, "parentNode", c) }, next: function(a) { return K(a, "nextSibling") }, prev: function(a) { return K(a, "previousSibling") }, nextAll: function(a) { return y(a, "nextSibling") }, prevAll: function(a) { return y(a, "previousSibling") }, nextUntil: function(a, b, c) { return y(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return y(a, "previousSibling", c) }, siblings: function(a) { return z((a.parentNode || {}).firstChild, a) }, children: function(a) { return z(a.firstChild) }, contents: function(a) { return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes)) } }, function(a, b) { r.fn[a] = function(c, d) { var e = r.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e) } }); var L = /[^\x20\t\r\n\f]+/g; function M(a) { var b = {}; return r.each(a.match(L) || [], function(a, c) { b[c] = !0 }), b } r.Callbacks = function(a) { a = "string" == typeof a ? M(a) : r.extend({}, a); var b, c, d, e, f = [], g = [], h = -1, i = function() { for (e = e || a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) } a.memory || (c = !1), b = !1, e && (f = c ? [] : "") }, j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { r.each(b, function(b, c) { r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return r.each(arguments, function(a, b) { var c; while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h-- }), this }, has: function(a) { return a ? r.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = g = [], c || b || (f = c = ""), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } }; return j }; function N(a) { return a } function O(a) { throw a } function P(a, b, c, d) { var e; try { a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d)) } catch (a) { c.apply(void 0, [a]) } } r.extend({ Deferred: function(b) { var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]], d = "pending", e = { state: function() { return d }, always: function() { return f.done(arguments).fail(arguments), this }, "catch": function(a) { return e.then(null, a) }, pipe: function() { var a = arguments; return r.Deferred(function(b) { r.each(c, function(c, d) { var e = r.isFunction(a[d[4]]) && a[d[4]]; f[d[1]](function() { var a = e && e.apply(this, arguments); a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments) }) }), a = null }).promise() }, then: function(b, d, e) { var f = 0; function g(b, c, d, e) { return function() { var h = this, i = arguments, j = function() { var a, j; if (!(b < f)) { if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution"); j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i)) } }, k = e ? j : function() { try { j() } catch (a) { r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i)) } }; b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k)) } } return r.Deferred(function(a) { c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O)) }).promise() }, promise: function(a) { return null != a ? r.extend(a, e) : e } }, f = {}; return r.each(c, function(a, b) { var g = b[2], h = b[5]; e[b[1]] = g.add, h && g.add(function() { d = h }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this }, f[b[0] + "With"] = g.fireWith }), e.promise(f), b && b.call(f, f), f }, when: function(a) { var b = arguments.length, c = b, d = Array(c), e = f.call(arguments), g = r.Deferred(), h = function(a) { return function(c) { d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e) } }; if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then(); while (c--) P(e[c], h(c), g.reject); return g.promise() } }); var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/; r.Deferred.exceptionHook = function(b, c) { a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c) }, r.readyException = function(b) { a.setTimeout(function() { throw b }) }; var R = r.Deferred(); r.fn.ready = function(a) { return R.then(a)["catch"](function(a) { r.readyException(a) }), this }, r.extend({ isReady: !1, readyWait: 1, ready: function(a) { (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r])) } }), r.ready.then = R.then; function S() { d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready() } "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S)); var T = function(a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === r.type(c)) { e = !0; for (h in c) T(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(r(a), c) })), b)) for (; h < i; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f }, U = function(a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType }; function V() { this.expando = r.expando + V.uid++ } V.uid = 1, V.prototype = { cache: function(a) { var b = a[this.expando]; return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b }, set: function(a, b, c) { var d, e = this.cache(a); if ("string" == typeof b) e[r.camelCase(b)] = c; else for (d in b) e[r.camelCase(d)] = b[d]; return e }, get: function(a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)] }, access: function(a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b) }, remove: function(a, b) { var c, d = a[this.expando]; if (void 0 !== d) { if (void 0 !== b) { Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length; while (c--) delete d[b[c]] } (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]) } }, hasData: function(a) { var b = a[this.expando]; return void 0 !== b && !r.isEmptyObject(b) } }; var W = new V, X = new V, Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g; function $(a) { return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a) } function _(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) { try { c = $(c) } catch (e) { } X.set(a, b, c) } else c = void 0; return c } r.extend({ hasData: function(a) { return X.hasData(a) || W.hasData(a) }, data: function(a, b, c) { return X.access(a, b, c) }, removeData: function(a, b) { X.remove(a, b) }, _data: function(a, b, c) { return W.access(a, b, c) }, _removeData: function(a, b) { W.remove(a, b) } }), r.fn.extend({ data: function(a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) { if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d]))); W.set(f, "hasDataAttrs", !0) } return e } return "object" == typeof a ? this.each(function() { X.set(this, a) }) : T(this, function(b) { var c; if (f && void 0 === b) { if (c = X.get(f, a), void 0 !== c) return c; if (c = _(f, a), void 0 !== c) return c } else this.each(function() { X.set(this, a, b) }) }, null, b, arguments.length > 1, null, !0) }, removeData: function(a) { return this.each(function() { X.remove(this, a) }) } }), r.extend({ queue: function(a, b, c) { var d; if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [] }, dequeue: function(a, b) { b = b || "fx"; var c = r.queue(a, b), d = c.length, e = c.shift(), f = r._queueHooks(a, b), g = function() { r.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) { var c = b + "queueHooks"; return W.get(a, c) || W.access(a, c, { empty: r.Callbacks("once memory").add(function() { W.remove(a, [b + "queue", c]) }) }) } }), r.fn.extend({ queue: function(a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() { var c = r.queue(this, a, b); r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a) }) }, dequeue: function(a) { return this.each(function() { r.dequeue(this, a) }) }, clearQueue: function(a) { return this.queue(a || "fx", []) }, promise: function(a, b) { var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function() { --d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }); var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"), ca = ["Top", "Right", "Bottom", "Left"], da = function(a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display") }, ea = function(a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e }; function fa(a, b, c, d) { var e, f = 1, g = 20, h = d ? function() { return d.cur() } : function() { return r.css(a, b, "") }, i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1; do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e } var ga = {}; function ha(a) { var b, c = a.ownerDocument, d = a.nodeName, e = ga[d]; return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e) } function ia(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++)d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c))); for (f = 0; f < g; f++)null != e[f] && (a[f].style.display = e[f]); return a } r.fn.extend({ show: function() { return ia(this, !0) }, hide: function() { return ia(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { da(this) ? r(this).show() : r(this).hide() }) } }); var ja = /^(?:checkbox|radio)$/i, ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, la = /^$|\/(?:java|ecma)script/i, ma = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] }; ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td; function na(a, b) { var c; return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c } function oa(a, b) { for (var c = 0, d = a.length; c < d; c++)W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval")) } var pa = /<|&#?\w+;/; function qa(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f); else if (pa.test(f)) { g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0]; while (k--) g = g.lastChild; r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "" } else m.push(b.createTextNode(f)); l.textContent = "", n = 0; while (f = m[n++]) if (d && r.inArray(f, d) > -1) e && e.push(f); else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) { k = 0; while (f = g[k++]) la.test(f.type || "") && c.push(f) } return l } !function() { var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input"); c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue }(); var ra = d.documentElement, sa = /^key/, ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ua = /^([^.]*)(?:\.(.+)|)/; function va() { return !0 } function wa() { return !1 } function xa() { try { return d.activeElement } catch (a) { } } function ya(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) ya(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa; else if (!e) return a; return 1 === f && (g = e, e = function(a) { return r().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() { r.event.add(this, b, e, d, c) }) } r.event = { global: {}, add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = W.get(a); if (q) { c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) { return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0 }), b = (b || "").match(L) || [""], j = b.length; while (j--) h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0) } }, remove: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = W.hasData(a) && W.get(a); if (q && (i = q.events)) { b = (b || "").match(L) || [""], j = b.length; while (j--) if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) { l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k)); g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]) } else for (n in i) r.event.remove(a, n + b[j], c, d, !0); r.isEmptyObject(i) && W.remove(a, "handle events") } }, dispatch: function(a) { var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (W.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {}; for (i[0] = b, c = 1; c < arguments.length; c++)i[c] = arguments[c]; if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) { h = r.event.handlers.call(this, b, j), c = 0; while ((f = h[c++]) && !b.isPropagationStopped()) { b.currentTarget = f.elem, d = 0; while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, b), b.result } }, handlers: function(a, b) { var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target; if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this)if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) { for (f = [], g = {}, c = 0; c < i; c++)d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d); f.length && h.push({ elem: j, handlers: f }) } return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h }, addProp: function(a, b) { Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function() { if (this.originalEvent) return b(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[a] }, set: function(b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }) } }) }, fix: function(a) { return a[r.expando] ? a : new r.Event(a) }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== xa() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === xa() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1 }, _default: function(a) { return B(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } } }, r.removeEvent = function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) }, r.Event = function(a, b) { return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b) }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: wa, isPropagationStopped: wa, isImmediatePropagationStopped: wa, isSimulated: !1, preventDefault: function() { var a = this.originalEvent; this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault() }, stopPropagation: function() { var a = this.originalEvent; this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation() }, stopImmediatePropagation: function() { var a = this.originalEvent; this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation() } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(a) { var b = a.button; return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) { r.event.special[a] = { delegateType: b, bindType: b, handle: function(a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), r.fn.extend({ on: function(a, b, c, d) { return ya(this, a, b, c, d) }, one: function(a, b, c, d) { return ya(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function() { r.event.remove(this, a, c, b) }) } }); var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Aa = /<script|<style|<link/i, Ba = /checked\s*(?:[^=]|=\s*.checked.)/i, Ca = /^true\/(.*)/, Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; function Ea(a, b) { return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a } function Fa(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a } function Ga(a) { var b = Ca.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a } function Ha(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) { if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) { delete g.handle, g.events = {}; for (e in j) for (c = 0, d = j[e].length; c < d; c++)r.event.add(b, e, j[e][c]) } X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i)) } } function Ia(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue) } function Ja(a, b, c, d) { b = g.apply([], b); var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q); if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function(e) { var f = a.eq(e); s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d) }); if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) { for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l); if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++)j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k)) } return a } function Ka(a, b, c) { for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d)); return a } r.extend({ htmlPrefilter: function(a) { return a.replace(za, "<$1></$2>") }, clone: function(a, b, c) { var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a); if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)Ia(f[d], g[d]); if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++)Ha(f[d], g[d]); else Ha(a, h); return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h }, cleanData: function(a) { for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)if (U(c)) { if (b = c[W.expando]) { if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle); c[W.expando] = void 0 } c[X.expando] && (c[X.expando] = void 0) } } }), r.fn.extend({ detach: function(a) { return Ka(this, a, !0) }, remove: function(a) { return Ka(this, a) }, text: function(a) { return T(this, function(a) { return void 0 === a ? r.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a) }) }, null, a, arguments.length) }, append: function() { return Ja(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ea(this, a); b.appendChild(a) } }) }, prepend: function() { return Ja(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ea(this, a); b.insertBefore(a, b.firstChild) } }) }, before: function() { return Ja(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() { return Ja(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function() { for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = ""); return this }, clone: function(a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function() { return r.clone(this, a, b) }) }, html: function(a) { return T(this, function(a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a && 1 === b.nodeType) return b.innerHTML; if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) { a = r.htmlPrefilter(a); try { for (; c < d; c++)b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a); b = 0 } catch (e) { } } b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() { var a = []; return Ja(this, arguments, function(b) { var c = this.parentNode; r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this)) }, a) } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { r.fn[a] = function(a) { for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get()); return this.pushStack(d) } }); var La = /^margin/, Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"), Na = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) }; !function() { function b() { if (i) { i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h); var b = a.getComputedStyle(i); c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null } } var c, e, f, g, h = d.createElement("div"), i = d.createElement("div"); i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function() { return b(), c }, boxSizingReliable: function() { return b(), e }, pixelMarginRight: function() { return b(), f }, reliableMarginLeft: function() { return b(), g } })) }(); function Oa(a, b, c) { var d, e, f, g, h = a.style; return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g } function Pa(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } } var Qa = /^(none|table(?!-c[ea]).+)/, Ra = /^--/, Sa = { position: "absolute", visibility: "hidden", display: "block" }, Ta = { letterSpacing: "0", fontWeight: "400" }, Ua = ["Webkit", "Moz", "ms"], Va = d.createElement("div").style; function Wa(a) { if (a in Va) return a; var b = a[0].toUpperCase() + a.slice(1), c = Ua.length; while (c--) if (a = Ua[c] + b, a in Va) return a } function Xa(a) { var b = r.cssProps[a]; return b || (b = r.cssProps[a] = Wa(a) || a), b } function Ya(a, b, c) { var d = ba.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b } function Za(a, b, c, d, e) { var f, g = 0; for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)"margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e))); return g } function $a(a, b, c) { var d, e = Na(a), f = Oa(a, b, e), g = "border-box" === r.css(a, "boxSizing", !1, e); return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px") } r.extend({ cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Oa(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function(a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = r.camelCase(b), i = Ra.test(b), j = a.style; return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = typeof c, "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0) } }, css: function(a, b, c, d) { var e, f, g, h = r.camelCase(b), i = Ra.test(b); return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e } }), r.each(["height", "width"], function(a, b) { r.cssHooks[b] = { get: function(a, c, d) { if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function() { return $a(a, b, d) }) }, set: function(a, c, d) { var e, f = d && Na(a), g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f); return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g) } } }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) { if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" }), r.each({ margin: "", padding: "", border: "Width" }, function(a, b) { r.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)e[a + ca[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, La.test(a) || (r.cssHooks[a + b].set = Ya) }), r.fn.extend({ css: function(a, b) { return T(this, function(a, b, c) { var d, e, f = {}, g = 0; if (Array.isArray(b)) { for (d = Na(a), e = b.length; g < e; g++)f[b[g]] = r.css(a, b[g], !1, d); return f } return void 0 !== c ? r.style(a, b, c) : r.css(a, b) }, a, b, arguments.length > 1) } }); function _a(a, b, c, d, e) { return new _a.prototype.init(a, b, c, d, e) } r.Tween = _a, _a.prototype = { constructor: _a, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px") }, cur: function() { var a = _a.propHooks[this.prop]; return a && a.get ? a.get(this) : _a.propHooks._default.get(this) }, run: function(a) { var b, c = _a.propHooks[this.prop]; return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this } }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit) } } }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, r.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, r.fx = _a.prototype.init, r.fx.step = {}; var ab, bb, cb = /^(?:toggle|show|hide)$/, db = /queueHooks$/; function eb() { bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick()) } function fb() { return a.setTimeout(function() { ab = void 0 }), ab = r.now() } function gb(a, b) { var c, d = 0, e = { height: a }; for (b = b ? 1 : 0; d < 4; d += 2 - b)c = ca[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e } function hb(a, b, c) { for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++)if (d = e[f].call(c, b, a)) return d } function ib(a, b, c) { var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && da(a), q = W.get(a, "fxshow"); c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() { g.unqueued || h() }), g.unqueued++, m.always(function() { m.always(function() { g.unqueued--, r.queue(a, "fx").length || g.empty.fire() }) })); for (d in b) if (e = b[d], cb.test(e)) { if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) { if ("show" !== e || !q || void 0 === q[d]) continue; p = !0 } n[d] = q && q[d] || r.style(a, d) } if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) { l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() { o.display = j }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2] })), i = !1; for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ia([a], !0), m.done(function() { p || ia([a]), W.remove(a, "fxshow"); for (d in n) r.style(a, d, n[d]) })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0)) } } function jb(a, b) { var c, d, e, f, g; for (c in a) if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e } function kb(a, b, c) { var d, e, f = 0, g = kb.prefilters.length, h = r.Deferred().always(function() { delete i.elem }), i = function() { if (e) return !1; for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1) }, j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: ab || fb(), duration: c.duration, tweens: [], createTween: function(b, c) { var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function(b) { var c = 0, d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; c < d; c++)j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }), k = j.props; for (jb(k, j.opts.specialEasing); f < g; f++)if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d; return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j } r.Animation = r.extend(kb, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return fa(c.elem, a, ba.exec(b), c), c }] }, tweener: function(a, b) { r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L); for (var c, d = 0, e = a.length; d < e; d++)c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b) }, prefilters: [ib], prefilter: function(a, b) { b ? kb.prefilters.unshift(a) : kb.prefilters.push(a) } }), r.speed = function(a, b, c) { var d = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b }; return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() { r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue) }, d }, r.fn.extend({ fadeTo: function(a, b, c, d) { return this.filter(da).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) { var e = r.isEmptyObject(a), f = r.speed(b, c, d), g = function() { var b = kb(this, r.extend({}, a), f); (e || W.get(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, b, c) { var d = function(a) { var b = a.stop; delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() { var b = !0, e = null != a && a + "queueHooks", f = r.timers, g = W.get(this); if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]); for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); !b && c || r.dequeue(this, a) }) }, finish: function(a) { return a !== !1 && (a = a || "fx"), this.each(function() { var b, c = W.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0; for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; b < g; b++)d[b] && d[b].finish && d[b].finish.call(this); delete c.finish }) } }), r.each(["toggle", "show", "hide"], function(a, b) { var c = r.fn[b]; r.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e) } }), r.each({ slideDown: gb("show"), slideUp: gb("hide"), slideToggle: gb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { r.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), r.timers = [], r.fx.tick = function() { var a, b = 0, c = r.timers; for (ab = r.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1); c.length || r.fx.stop(), ab = void 0 }, r.fx.timer = function(a) { r.timers.push(a), r.fx.start() }, r.fx.interval = 13, r.fx.start = function() { bb || (bb = !0, eb()) }, r.fx.stop = function() { bb = null }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function(b, c) { return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) { var e = a.setTimeout(c, b); d.stop = function() { a.clearTimeout(e) } }) }, function() { var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option")); a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value }(); var lb, mb = r.expr.attrHandle; r.fn.extend({ attr: function(a, b) { return T(this, r.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { r.removeAttr(this, a) }) } }), r.extend({ attr: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d)) }, attrHooks: { type: { set: function(a, b) { if (!o.radioValue && "radio" === b && B(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function(a, b) { var c, d = 0, e = b && b.match(L); if (e && 1 === a.nodeType) while (c = e[d++]) a.removeAttribute(c) } }), lb = { set: function(a, b, c) { return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c } }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) { var c = mb[b] || r.find.attr; mb[b] = function(a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e } }); var nb = /^(?:input|select|textarea|button)$/i, ob = /^(?:a|area)$/i; r.fn.extend({ prop: function(a, b) { return T(this, r.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[r.propFix[a] || a] }) } }), r.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = r.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null }, set: function(a) { var b = a.parentNode; b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex) } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { r.propFix[this.toLowerCase()] = this }); function pb(a) { var b = a.match(L) || []; return b.join(" ") } function qb(a) { return a.getAttribute && a.getAttribute("class") || "" } r.fn.extend({ addClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function(b) { r(this).addClass(a.call(this, b, qb(this))) }); if ("string" == typeof a && a) { b = a.match(L) || []; while (c = this[i++]) if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " "); h = pb(d), e !== h && c.setAttribute("class", h) } } return this }, removeClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a)) return this.each(function(b) { r(this).removeClass(a.call(this, b, qb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(L) || []; while (c = this[i++]) if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") { g = 0; while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " "); h = pb(d), e !== h && c.setAttribute("class", h) } } return this }, toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) { r(this).toggleClass(a.call(this, c, qb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = r(this), f = a.match(L) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || "")) }) }, hasClass: function(a) { var b, c, d = 0; b = " " + a + " "; while (c = this[d++]) if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0; return !1 } }); var rb = /\r/g; r.fn.extend({ val: function(a) { var b, c, d, e = this[0]; { if (arguments.length) return d = r.isFunction(a), this.each(function(c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function(a) { return null == a ? "" : a + "" })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c) } } }), r.extend({ valHooks: { option: { get: function(a) { var b = r.find.attr(a, "value"); return null != b ? b : pb(r.text(a)) } }, select: { get: function(a) { var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length; for (d = f < 0 ? i : g ? f : 0; d < i; d++)if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) { if (b = r(c).val(), g) return b; h.push(b) } return h }, set: function(a, b) { var c, d, e = a.options, f = r.makeArray(b), g = e.length; while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f } } } }), r.each(["radio", "checkbox"], function() { r.valHooks[this] = { set: function(a, b) { if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1 } }, o.checkOn || (r.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var sb = /^(?:focusinfocus|focusoutblur)$/; r.extend(r.event, { trigger: function(b, c, e, f) { var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : []; if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) { if (!f && !n.noBubble && !r.isWindow(e)) { for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), i = h; i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a) } g = 0; while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault()); return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result } }, simulate: function(a, b, c) { var d = r.extend(new r.Event, c, { type: a, isSimulated: !0 }); r.event.trigger(d, null, b) } }), r.fn.extend({ trigger: function(a, b) { return this.each(function() { r.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; if (c) return r.event.trigger(a, b, c, !0) } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) { r.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), r.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function(a, b) { var c = function(a) { r.event.simulate(b, a.target, r.event.fix(a)) }; r.event.special[b] = { setup: function() { var d = this.ownerDocument || this, e = W.access(d, b); e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1) }, teardown: function() { var d = this.ownerDocument || this, e = W.access(d, b) - 1; e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b)) } } }); var tb = a.location, ub = r.now(), vb = /\?/; r.parseXML = function(b) { var c; if (!b || "string" != typeof b) return null; try { c = (new a.DOMParser).parseFromString(b, "text/xml") } catch (d) { c = void 0 } return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c }; var wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i; function Ab(a, b, c, d) { var e; if (Array.isArray(b)) r.each(b, function(b, e) { c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) }); else if (c || "object" !== r.type(b)) d(a, b); else for (e in b) Ab(a + "[" + e + "]", b[e], c, d) } r.param = function(a, b) { var c, d = [], e = function(a, b) { var c = r.isFunction(b) ? b() : b; d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c) }; if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() { e(this.name, this.value) }); else for (c in a) Ab(c, a[c], b, e); return d.join("&") }, r.fn.extend({ serialize: function() { return r.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = r.prop(this, "elements"); return a ? r.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a)) }).map(function(a, b) { var c = r(this).val(); return null == c ? null : Array.isArray(c) ? r.map(c, function(a) { return { name: b.name, value: a.replace(xb, "\r\n") } }) : { name: b.name, value: c.replace(xb, "\r\n") } }).get() } }); var Bb = /%20/g, Cb = /#.*$/, Db = /([?&])_=[^&]*/, Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Gb = /^(?:GET|HEAD)$/, Hb = /^\/\//, Ib = {}, Jb = {}, Kb = "*/".concat("*"), Lb = d.createElement("a"); Lb.href = tb.href; function Mb(a) { return function(b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(L) || []; if (r.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } } function Nb(a, b, c, d) { var e = {}, f = a === Jb; function g(h) { var i; return e[h] = !0, r.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") } function Ob(a, b) { var c, d, e = r.ajaxSettings.flatOptions || {}; for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && r.extend(!0, a, d), a } function Pb(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d) for (e in h) if (h[e] && h[e].test(d)) { i.unshift(e); break } if (i[0] in c) f = i[0]; else { for (e in c) { if (!i[0] || a.converters[e + " " + i[0]]) { f = e; break } g || (g = e) } f = f || g } if (f) return f !== i[0] && i.unshift(f), c[f] } function Qb(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break } if (g !== !0) if (g && a["throws"]) b = g(b); else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } } r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: tb.href, type: "GET", isLocal: Fb.test(tb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Kb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) { return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a) }, ajaxPrefilter: Mb(Ib), ajaxTransport: Mb(Jb), ajax: function(b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = { readyState: 0, getResponseHeader: function(a) { var b; if (k) { if (!h) { h = {}; while (b = Eb.exec(g)) h[b[1].toLowerCase()] = b[2] } b = h[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function() { return k ? g : null }, setRequestHeader: function(a, b) { return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this }, overrideMimeType: function(a) { return null == k && (o.mimeType = a), this }, statusCode: function(a) { var b; if (a) if (k) y.always(a[y.status]); else for (b in a) u[b] = [u[b], a[b]]; return this }, abort: function(a) { var b = a || x; return e && e.abort(b), A(0, b), this } }; if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) { j = d.createElement("a"); try { j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host } catch (z) { o.crossDomain = !0 } } if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y; l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]); for (m in o.headers) y.setRequestHeader(m, o.headers[m]); if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort(); if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) { if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y; o.async && o.timeout > 0 && (i = a.setTimeout(function() { y.abort("timeout") }, o.timeout)); try { k = !1, e.send(v, A) } catch (z) { if (k) throw z; A(-1, z) } } else A(-1, "No Transport"); function A(b, c, d, h) { var j, m, n, v, w, x = c; k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop"))) } return y }, getJSON: function(a, b, c) { return r.get(a, b, c, "json") }, getScript: function(a, b) { return r.get(a, void 0, b, "script") } }), r.each(["get", "post"], function(a, b) { r[b] = function(a, c, d, e) { return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a)) } }), r._evalUrl = function(a) { return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, r.fn.extend({ wrapAll: function(a) { var b; return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstElementChild) a = a.firstElementChild; return a }).append(this)), this }, wrapInner: function(a) { return r.isFunction(a) ? this.each(function(b) { r(this).wrapInner(a.call(this, b)) }) : this.each(function() { var b = r(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) { var b = r.isFunction(a); return this.each(function(c) { r(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function(a) { return this.parent(a).not("body").each(function() { r(this).replaceWith(this.childNodes) }), this } }), r.expr.pseudos.hidden = function(a) { return !r.expr.pseudos.visible(a) }, r.expr.pseudos.visible = function(a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) }, r.ajaxSettings.xhr = function() { try { return new a.XMLHttpRequest } catch (b) { } }; var Rb = { 0: 200, 1223: 204 }, Sb = r.ajaxSettings.xhr(); o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function(b) { var c, d; if (o.cors || Sb && !b.crossDomain) return { send: function(e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g]; b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e) h.setRequestHeader(g, e[g]); c = function(a) { return function() { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())) } }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() { 4 === h.readyState && a.setTimeout(function() { c && d() }) }, c = c("abort"); try { h.send(b.hasContent && b.data || null) } catch (i) { if (c) throw i } }, abort: function() { c && c() } } }), r.ajaxPrefilter(function(a) { a.crossDomain && (a.contents.script = !1) }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return r.globalEval(a), a } } }), r.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET") }), r.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c; return { send: function(e, f) { b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function(a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type) }), d.head.appendChild(b[0]) }, abort: function() { c && c() } } } }); var Tb = [], Ub = /(=)\?(?=&|$)|\?\?/; r.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = Tb.pop() || r.expando + "_" + ub++; return this[a] = !0, a } }), r.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || r.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0 }), "script" }), o.createHTMLDocument = function() { var a = d.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length }(), r.parseHTML = function(a, b, c) { if ("string" != typeof a) return []; "boolean" == typeof b && (c = b, b = !1); var e, f, g; return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)) }, r.fn.load = function(a, b, c) { var d, e, f, g = this, h = a.indexOf(" "); return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(this, f || [a.responseText, b, a]) }) }), this }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { r.fn[b] = function(a) { return this.on(b, a) } }), r.expr.pseudos.animated = function(a) { return r.grep(r.timers, function(b) { return a === b.elem }).length }, r.offset = { setOffset: function(a, b, c) { var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, r.fn.extend({ offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { r.offset.setOffset(this, a, b) }); var b, c, d, e, f = this[0]; if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, { top: d.top + e.pageYOffset - c.clientTop, left: d.left + e.pageXOffset - c.clientLeft }) : { top: 0, left: 0 } }, position: function() { if (this[0]) { var a, b, c = this[0], d = { top: 0, left: 0 }; return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && "static" === r.css(a, "position")) a = a.offsetParent; return a || ra }) } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) { var c = "pageYOffset" === b; r.fn[a] = function(d) { return T(this, function(a, d, e) { var f; return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e) }, a, d, arguments.length) } }), r.each(["top", "left"], function(a, b) { r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) { if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c }) }), r.each({ Height: "height", Width: "width" }, function(a, b) { r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) { r.fn[d] = function(e, f) { var g = arguments.length && (c || "boolean" != typeof e), h = c || (e === !0 || f === !0 ? "margin" : "border"); return T(this, function(b, c, e) { var f; return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h) }, b, g ? e : void 0, g) } }) }), r.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), r.holdReady = function(a) { a ? r.readyWait++ : r.ready(!0) }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B, "function" == typeof define && define.amd && define("jquery", [], function() { return r }); var Vb = a.jQuery, Wb = a.$; return r.noConflict = function(b) { return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r }, b || (a.jQuery = a.$ = r), r });
/* /_res/jquery/jquery-ui-1.12.0.js */
(function(factory) { if (typeof define === "function" && define.amd) { define('ui/version.js', ["jquery"], factory); } else { factory(jQuery); } }(function($) { $.ui = $.ui || {}; return $.ui.version = "@VERSION"; })); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/data', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) { return $.extend($.expr[":"], { data: $.expr.createPseudo ? $.expr.createPseudo(function(dataName) { return function(elem) { return !!$.data(elem, dataName); }; }) : function(elem, i, match) { return !!$.data(elem, match[3]); } }); })); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/disable-selection', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) { return $.fn.extend({ disableSelection: (function() { var eventType = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.on(eventType + ".ui-disableSelection", function(event) { event.preventDefault(); }); }; })(), enableSelection: function() { return this.off(".ui-disableSelection"); } }); })); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effect', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) {
	var dataSpace = "ui-effects-", dataSpaceStyle = "ui-effects-style", dataSpaceAnimated = "ui-effects-animated", jQuery = $; $.effects = { effect: {} }; (function(jQuery, undefined) {
		var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", rplusequals = /^([\-+])=\s*(\d+\.?\d*)/, stringParsers = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(execResult) { return [execResult[1], execResult[2], execResult[3], execResult[4]]; } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(execResult) { return [execResult[1] * 2.55, execResult[2] * 2.55, execResult[3] * 2.55, execResult[4]]; } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(execResult) { return [parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16)]; } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(execResult) { return [parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16)]; } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(execResult) { return [execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4]]; } }], color = jQuery.Color = function(color, green, blue, alpha) { return new jQuery.Color.fn.parse(color, green, blue, alpha); }, spaces = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } }, propTypes = { "byte": { floor: true, max: 255 }, "percent": { max: 1 }, "degrees": { mod: 360, floor: true } }, support = color.support = {}, supportElem = jQuery("<p>")[0], colors, each = jQuery.each; supportElem.style.cssText = "background-color:rgba(1,1,1,.5)"; support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1; each(spaces, function(spaceName, space) { space.cache = "_" + spaceName; space.props.alpha = { idx: 3, type: "percent", def: 1 }; }); function clamp(value, prop, allowEmpty) {
			var type = propTypes[prop.type] || {}; if (value == null) { return (allowEmpty || !prop.def) ? null : prop.def; }
			value = type.floor ? ~~value : parseFloat(value); if (isNaN(value)) { return prop.def; }
			if (type.mod) { return (value + type.mod) % type.mod; }
			return 0 > value ? 0 : type.max < value ? type.max : value;
		}
		function stringParse(string) {
			var inst = color(), rgba = inst._rgba = []; string = string.toLowerCase(); each(stringParsers, function(i, parser) { var parsed, match = parser.re.exec(string), values = match && parser.parse(match), spaceName = parser.space || "rgba"; if (values) { parsed = inst[spaceName](values); inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache]; rgba = inst._rgba = parsed._rgba; return false; } }); if (rgba.length) {
				if (rgba.join() === "0,0,0,0") { jQuery.extend(rgba, colors.transparent); }
				return inst;
			}
			return colors[string];
		}
		color.fn = jQuery.extend(color.prototype, {
			parse: function(red, green, blue, alpha) {
				if (red === undefined) { this._rgba = [null, null, null, null]; return this; }
				if (red.jquery || red.nodeType) { red = jQuery(red).css(green); green = undefined; }
				var inst = this, type = jQuery.type(red), rgba = this._rgba = []; if (green !== undefined) { red = [red, green, blue, alpha]; type = "array"; }
				if (type === "string") { return this.parse(stringParse(red) || colors._default); }
				if (type === "array") { each(spaces.rgba.props, function(key, prop) { rgba[prop.idx] = clamp(red[prop.idx], prop); }); return this; }
				if (type === "object") {
					if (red instanceof color) { each(spaces, function(spaceName, space) { if (red[space.cache]) { inst[space.cache] = red[space.cache].slice(); } }); } else {
						each(spaces, function(spaceName, space) {
							var cache = space.cache; each(space.props, function(key, prop) {
								if (!inst[cache] && space.to) {
									if (key === "alpha" || red[key] == null) { return; }
									inst[cache] = space.to(inst._rgba);
								}
								inst[cache][prop.idx] = clamp(red[key], prop, true);
							}); if (inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0) { inst[cache][3] = 1; if (space.from) { inst._rgba = space.from(inst[cache]); } }
						});
					}
					return this;
				}
			}, is: function(compare) {
				var is = color(compare), same = true, inst = this; each(spaces, function(_, space) {
					var localCache, isCache = is[space.cache]; if (isCache) { localCache = inst[space.cache] || space.to && space.to(inst._rgba) || []; each(space.props, function(_, prop) { if (isCache[prop.idx] != null) { same = (isCache[prop.idx] === localCache[prop.idx]); return same; } }); }
					return same;
				}); return same;
			}, _space: function() { var used = [], inst = this; each(spaces, function(spaceName, space) { if (inst[space.cache]) { used.push(spaceName); } }); return used.pop(); }, transition: function(other, distance) {
				var end = color(other), spaceName = end._space(), space = spaces[spaceName], startColor = this.alpha() === 0 ? color("transparent") : this, start = startColor[space.cache] || space.to(startColor._rgba), result = start.slice(); end = end[space.cache]; each(space.props, function(key, prop) {
					var index = prop.idx, startValue = start[index], endValue = end[index], type = propTypes[prop.type] || {}; if (endValue === null) { return; }
					if (startValue === null) { result[index] = endValue; } else {
						if (type.mod) { if (endValue - startValue > type.mod / 2) { startValue += type.mod; } else if (startValue - endValue > type.mod / 2) { startValue -= type.mod; } }
						result[index] = clamp((endValue - startValue) * distance + startValue, prop);
					}
				}); return this[spaceName](result);
			}, blend: function(opaque) {
				if (this._rgba[3] === 1) { return this; }
				var rgb = this._rgba.slice(), a = rgb.pop(), blend = color(opaque)._rgba; return color(jQuery.map(rgb, function(v, i) { return (1 - a) * blend[i] + a * v; }));
			}, toRgbaString: function() {
				var prefix = "rgba(", rgba = jQuery.map(this._rgba, function(v, i) { return v == null ? (i > 2 ? 1 : 0) : v; }); if (rgba[3] === 1) { rgba.pop(); prefix = "rgb("; }
				return prefix + rgba.join() + ")";
			}, toHslaString: function() {
				var prefix = "hsla(", hsla = jQuery.map(this.hsla(), function(v, i) {
					if (v == null) { v = i > 2 ? 1 : 0; }
					if (i && i < 3) { v = Math.round(v * 100) + "%"; }
					return v;
				}); if (hsla[3] === 1) { hsla.pop(); prefix = "hsl("; }
				return prefix + hsla.join() + ")";
			}, toHexString: function(includeAlpha) {
				var rgba = this._rgba.slice(), alpha = rgba.pop(); if (includeAlpha) { rgba.push(~~(alpha * 255)); }
				return "#" + jQuery.map(rgba, function(v) { v = (v || 0).toString(16); return v.length === 1 ? "0" + v : v; }).join("");
			}, toString: function() { return this._rgba[3] === 0 ? "transparent" : this.toRgbaString(); }
		}); color.fn.parse.prototype = color.fn; function hue2rgb(p, q, h) {
			h = (h + 1) % 1; if (h * 6 < 1) { return p + (q - p) * h * 6; }
			if (h * 2 < 1) { return q; }
			if (h * 3 < 2) { return p + (q - p) * ((2 / 3) - h) * 6; }
			return p;
		}
		spaces.hsla.to = function(rgba) {
			if (rgba[0] == null || rgba[1] == null || rgba[2] == null) { return [null, null, null, rgba[3]]; }
			var r = rgba[0] / 255, g = rgba[1] / 255, b = rgba[2] / 255, a = rgba[3], max = Math.max(r, g, b), min = Math.min(r, g, b), diff = max - min, add = max + min, l = add * 0.5, h, s; if (min === max) { h = 0; } else if (r === max) { h = (60 * (g - b) / diff) + 360; } else if (g === max) { h = (60 * (b - r) / diff) + 120; } else { h = (60 * (r - g) / diff) + 240; }
			if (diff === 0) { s = 0; } else if (l <= 0.5) { s = diff / add; } else { s = diff / (2 - add); }
			return [Math.round(h) % 360, s, l, a == null ? 1 : a];
		}; spaces.hsla.from = function(hsla) {
			if (hsla[0] == null || hsla[1] == null || hsla[2] == null) { return [null, null, null, hsla[3]]; }
			var h = hsla[0] / 360, s = hsla[1], l = hsla[2], a = hsla[3], q = l <= 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q; return [Math.round(hue2rgb(p, q, h + (1 / 3)) * 255), Math.round(hue2rgb(p, q, h) * 255), Math.round(hue2rgb(p, q, h - (1 / 3)) * 255), a];
		}; each(spaces, function(spaceName, space) {
			var props = space.props, cache = space.cache, to = space.to, from = space.from; color.fn[spaceName] = function(value) {
				if (to && !this[cache]) { this[cache] = to(this._rgba); }
				if (value === undefined) { return this[cache].slice(); }
				var ret, type = jQuery.type(value), arr = (type === "array" || type === "object") ? value : arguments, local = this[cache].slice(); each(props, function(key, prop) {
					var val = arr[type === "object" ? key : prop.idx]; if (val == null) { val = local[prop.idx]; }
					local[prop.idx] = clamp(val, prop);
				}); if (from) { ret = color(from(local)); ret[cache] = local; return ret; } else { return color(local); }
			}; each(props, function(key, prop) {
				if (color.fn[key]) { return; }
				color.fn[key] = function(value) {
					var vtype = jQuery.type(value), fn = (key === "alpha" ? (this._hsla ? "hsla" : "rgba") : spaceName), local = this[fn](), cur = local[prop.idx], match; if (vtype === "undefined") { return cur; }
					if (vtype === "function") { value = value.call(this, cur); vtype = jQuery.type(value); }
					if (value == null && prop.empty) { return this; }
					if (vtype === "string") { match = rplusequals.exec(value); if (match) { value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1); } }
					local[prop.idx] = value; return this[fn](local);
				};
			});
		}); color.hook = function(hook) {
			var hooks = hook.split(" "); each(hooks, function(i, hook) {
				jQuery.cssHooks[hook] = {
					set: function(elem, value) {
						var parsed, curElem, backgroundColor = ""; if (value !== "transparent" && (jQuery.type(value) !== "string" || (parsed = stringParse(value)))) {
							value = color(parsed || value); if (!support.rgba && value._rgba[3] !== 1) {
								curElem = hook === "backgroundColor" ? elem.parentNode : elem; while ((backgroundColor === "" || backgroundColor === "transparent") && curElem && curElem.style) { try { backgroundColor = jQuery.css(curElem, "backgroundColor"); curElem = curElem.parentNode; } catch (e) { } }
								value = value.blend(backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default");
							}
							value = value.toRgbaString();
						}
						try { elem.style[hook] = value; } catch (e) { }
					}
				}; jQuery.fx.step[hook] = function(fx) {
					if (!fx.colorInit) { fx.start = color(fx.elem, hook); fx.end = color(fx.end); fx.colorInit = true; }
					jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos));
				};
			});
		}; color.hook(stepHooks); jQuery.cssHooks.borderColor = { expand: function(value) { var expanded = {}; each(["Top", "Right", "Bottom", "Left"], function(i, part) { expanded["border" + part + "Color"] = value; }); return expanded; } }; colors = jQuery.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" };
	})(jQuery); (function() {
		var classAnimationActions = ["add", "remove", "toggle"], shorthandStyles = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }; $.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(_, prop) { $.fx.step[prop] = function(fx) { if (fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr) { jQuery.style(fx.elem, prop, fx.end); fx.setAttr = true; } }; }); function getElementStyles(elem) {
			var key, len, style = elem.ownerDocument.defaultView ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : elem.currentStyle, styles = {}; if (style && style.length && style[0] && style[style[0]]) { len = style.length; while (len--) { key = style[len]; if (typeof style[key] === "string") { styles[$.camelCase(key)] = style[key]; } } } else { for (key in style) { if (typeof style[key] === "string") { styles[key] = style[key]; } } }
			return styles;
		}
		function styleDifference(oldStyle, newStyle) {
			var diff = {}, name, value; for (name in newStyle) { value = newStyle[name]; if (oldStyle[name] !== value) { if (!shorthandStyles[name]) { if ($.fx.step[name] || !isNaN(parseFloat(value))) { diff[name] = value; } } } }
			return diff;
		}
		if (!$.fn.addBack) { $.fn.addBack = function(selector) { return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector)); }; }
		$.effects.animateClass = function(value, duration, easing, callback) { var o = $.speed(duration, easing, callback); return this.queue(function() { var animated = $(this), baseClass = animated.attr("class") || "", applyClassChange, allAnimations = o.children ? animated.find("*").addBack() : animated; allAnimations = allAnimations.map(function() { var el = $(this); return { el: el, start: getElementStyles(this) }; }); applyClassChange = function() { $.each(classAnimationActions, function(i, action) { if (value[action]) { animated[action + "Class"](value[action]); } }); }; applyClassChange(); allAnimations = allAnimations.map(function() { this.end = getElementStyles(this.el[0]); this.diff = styleDifference(this.start, this.end); return this; }); animated.attr("class", baseClass); allAnimations = allAnimations.map(function() { var styleInfo = this, dfd = $.Deferred(), opts = $.extend({}, o, { queue: false, complete: function() { dfd.resolve(styleInfo); } }); this.el.animate(this.diff, opts); return dfd.promise(); }); $.when.apply($, allAnimations.get()).done(function() { applyClassChange(); $.each(arguments, function() { var el = this.el; $.each(this.diff, function(key) { el.css(key, ""); }); }); o.complete.call(animated[0]); }); }); }; $.fn.extend({ addClass: (function(orig) { return function(classNames, speed, easing, callback) { return speed ? $.effects.animateClass.call(this, { add: classNames }, speed, easing, callback) : orig.apply(this, arguments); }; })($.fn.addClass), removeClass: (function(orig) { return function(classNames, speed, easing, callback) { return arguments.length > 1 ? $.effects.animateClass.call(this, { remove: classNames }, speed, easing, callback) : orig.apply(this, arguments); }; })($.fn.removeClass), toggleClass: (function(orig) { return function(classNames, force, speed, easing, callback) { if (typeof force === "boolean" || force === undefined) { if (!speed) { return orig.apply(this, arguments); } else { return $.effects.animateClass.call(this, (force ? { add: classNames } : { remove: classNames }), speed, easing, callback); } } else { return $.effects.animateClass.call(this, { toggle: classNames }, force, speed, easing); } }; })($.fn.toggleClass), switchClass: function(remove, add, speed, easing, callback) { return $.effects.animateClass.call(this, { add: add, remove: remove }, speed, easing, callback); } });
	})(); (function() {
		if ($.expr && $.expr.filters && $.expr.filters.animated) { $.expr.filters.animated = (function(orig) { return function(elem) { return !!$(elem).data(dataSpaceAnimated) || orig(elem); }; })($.expr.filters.animated); }
		if ($.uiBackCompat !== false) {
			$.extend($.effects, {
				save: function(element, set) { var i = 0, length = set.length; for (; i < length; i++) { if (set[i] !== null) { element.data(dataSpace + set[i], element[0].style[set[i]]); } } }, restore: function(element, set) { var val, i = 0, length = set.length; for (; i < length; i++) { if (set[i] !== null) { val = element.data(dataSpace + set[i]); element.css(set[i], val); } } }, setMode: function(el, mode) {
					if (mode === "toggle") { mode = el.is(":hidden") ? "show" : "hide"; }
					return mode;
				}, createWrapper: function(element) {
					if (element.parent().is(".ui-effects-wrapper")) { return element.parent(); }
					var props = { width: element.outerWidth(true), height: element.outerHeight(true), "float": element.css("float") }, wrapper = $("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }), size = { width: element.width(), height: element.height() }, active = document.activeElement; try { active.id; } catch (e) { active = document.body; }
					element.wrap(wrapper); if (element[0] === active || $.contains(element[0], active)) { $(active).trigger("focus"); }
					wrapper = element.parent(); if (element.css("position") === "static") { wrapper.css({ position: "relative" }); element.css({ position: "relative" }); } else { $.extend(props, { position: element.css("position"), zIndex: element.css("z-index") }); $.each(["top", "left", "bottom", "right"], function(i, pos) { props[pos] = element.css(pos); if (isNaN(parseInt(props[pos], 10))) { props[pos] = "auto"; } }); element.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" }); }
					element.css(size); return wrapper.css(props).show();
				}, removeWrapper: function(element) {
					var active = document.activeElement; if (element.parent().is(".ui-effects-wrapper")) { element.parent().replaceWith(element); if (element[0] === active || $.contains(element[0], active)) { $(active).trigger("focus"); } }
					return element;
				}
			});
		}
		$.extend($.effects, {
			version: "@VERSION", define: function(name, mode, effect) {
				if (!effect) { effect = mode; mode = "effect"; }
				$.effects.effect[name] = effect; $.effects.effect[name].mode = mode; return effect;
			}, scaledDimensions: function(element, percent, direction) {
				if (percent === 0) { return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }; }
				var x = direction !== "horizontal" ? ((percent || 100) / 100) : 1, y = direction !== "vertical" ? ((percent || 100) / 100) : 1; return { height: element.height() * y, width: element.width() * x, outerHeight: element.outerHeight() * y, outerWidth: element.outerWidth() * x };
			}, clipToBox: function(animation) { return { width: animation.clip.right - animation.clip.left, height: animation.clip.bottom - animation.clip.top, left: animation.clip.left, top: animation.clip.top }; }, unshift: function(element, queueLength, count) {
				var queue = element.queue(); if (queueLength > 1) { queue.splice.apply(queue, [1, 0].concat(queue.splice(queueLength, count))); }
				element.dequeue();
			}, saveStyle: function(element) { element.data(dataSpaceStyle, element[0].style.cssText); }, restoreStyle: function(element) { element[0].style.cssText = element.data(dataSpaceStyle) || ""; element.removeData(dataSpaceStyle); }, mode: function(element, mode) {
				var hidden = element.is(":hidden"); if (mode === "toggle") { mode = hidden ? "show" : "hide"; }
				if (hidden ? mode === "hide" : mode === "show") { mode = "none"; }
				return mode;
			}, getBaseline: function(origin, original) {
				var y, x; switch (origin[0]) { case "top": y = 0; break; case "middle": y = 0.5; break; case "bottom": y = 1; break; default: y = origin[0] / original.height; }
				switch (origin[1]) { case "left": x = 0; break; case "center": x = 0.5; break; case "right": x = 1; break; default: x = origin[1] / original.width; }
				return { x: x, y: y };
			}, createPlaceholder: function(element) {
				var placeholder, cssPosition = element.css("position"), position = element.position(); element.css({ marginTop: element.css("marginTop"), marginBottom: element.css("marginBottom"), marginLeft: element.css("marginLeft"), marginRight: element.css("marginRight") }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()); if (/^(static|relative)/.test(cssPosition)) { cssPosition = "absolute"; placeholder = $("<" + element[0].nodeName + ">").insertAfter(element).css({ display: /^(inline|ruby)/.test(element.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: element.css("marginTop"), marginBottom: element.css("marginBottom"), marginLeft: element.css("marginLeft"), marginRight: element.css("marginRight"), "float": element.css("float") }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass("ui-effects-placeholder"); element.data(dataSpace + "placeholder", placeholder); }
				element.css({ position: cssPosition, left: position.left, top: position.top }); return placeholder;
			}, removePlaceholder: function(element) { var dataKey = dataSpace + "placeholder", placeholder = element.data(dataKey); if (placeholder) { placeholder.remove(); element.removeData(dataKey); } }, cleanUp: function(element) { $.effects.restoreStyle(element); $.effects.removePlaceholder(element); }, setTransition: function(element, list, factor, value) { value = value || {}; $.each(list, function(i, x) { var unit = element.cssUnit(x); if (unit[0] > 0) { value[x] = unit[0] * factor + unit[1]; } }); return value; }
		}); function _normalizeArguments(effect, options, speed, callback) {
			if ($.isPlainObject(effect)) { options = effect; effect = effect.effect; }
			effect = { effect: effect }; if (options == null) { options = {}; }
			if ($.isFunction(options)) { callback = options; speed = null; options = {}; }
			if (typeof options === "number" || $.fx.speeds[options]) { callback = speed; speed = options; options = {}; }
			if ($.isFunction(speed)) { callback = speed; speed = null; }
			if (options) { $.extend(effect, options); }
			speed = speed || options.duration; effect.duration = $.fx.off ? 0 : typeof speed === "number" ? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default; effect.complete = callback || options.complete; return effect;
		}
		function standardAnimationOption(option) {
			if (!option || typeof option === "number" || $.fx.speeds[option]) { return true; }
			if (typeof option === "string" && !$.effects.effect[option]) { return true; }
			if ($.isFunction(option)) { return true; }
			if (typeof option === "object" && !option.effect) { return true; }
			return false;
		}
		$.fn.extend({
			effect: function() {
				var args = _normalizeArguments.apply(this, arguments), effectMethod = $.effects.effect[args.effect], defaultMode = effectMethod.mode, queue = args.queue, queueName = queue || "fx", complete = args.complete, mode = args.mode, modes = [], prefilter = function(next) {
					var el = $(this), normalizedMode = $.effects.mode(el, mode) || defaultMode; el.data(dataSpaceAnimated, true); modes.push(normalizedMode); if (defaultMode && (normalizedMode === "show" || (normalizedMode === defaultMode && normalizedMode === "hide"))) { el.show(); }
					if (!defaultMode || normalizedMode !== "none") { $.effects.saveStyle(el); }
					if ($.isFunction(next)) { next(); }
				}; if ($.fx.off || !effectMethod) { if (mode) { return this[mode](args.duration, complete); } else { return this.each(function() { if (complete) { complete.call(this); } }); } }
				function run(next) {
					var elem = $(this); function cleanup() {
						elem.removeData(dataSpaceAnimated); $.effects.cleanUp(elem); if (args.mode === "hide") { elem.hide(); }
						done();
					}
					function done() {
						if ($.isFunction(complete)) { complete.call(elem[0]); }
						if ($.isFunction(next)) { next(); }
					}
					args.mode = modes.shift(); if ($.uiBackCompat !== false && !defaultMode) { if (elem.is(":hidden") ? mode === "hide" : mode === "show") { elem[mode](); done(); } else { effectMethod.call(elem[0], args, done); } } else { if (args.mode === "none") { elem[mode](); done(); } else { effectMethod.call(elem[0], args, cleanup); } }
				}
				return queue === false ? this.each(prefilter).each(run) : this.queue(queueName, prefilter).queue(queueName, run);
			}, show: (function(orig) { return function(option) { if (standardAnimationOption(option)) { return orig.apply(this, arguments); } else { var args = _normalizeArguments.apply(this, arguments); args.mode = "show"; return this.effect.call(this, args); } }; })($.fn.show), hide: (function(orig) { return function(option) { if (standardAnimationOption(option)) { return orig.apply(this, arguments); } else { var args = _normalizeArguments.apply(this, arguments); args.mode = "hide"; return this.effect.call(this, args); } }; })($.fn.hide), toggle: (function(orig) { return function(option) { if (standardAnimationOption(option) || typeof option === "boolean") { return orig.apply(this, arguments); } else { var args = _normalizeArguments.apply(this, arguments); args.mode = "toggle"; return this.effect.call(this, args); } }; })($.fn.toggle), cssUnit: function(key) { var style = this.css(key), val = []; $.each(["em", "px", "%", "pt"], function(i, unit) { if (style.indexOf(unit) > 0) { val = [parseFloat(style), unit]; } }); return val; }, cssClip: function(clipObj) { return clipObj ? this.css("clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " + clipObj.bottom + "px " + clipObj.left + "px)") : parseClip(this.css("clip"), this); }, transfer: function(options, done) { var element = $(this), target = $(options.to), targetFixed = target.css("position") === "fixed", body = $("body"), fixTop = targetFixed ? body.scrollTop() : 0, fixLeft = targetFixed ? body.scrollLeft() : 0, endPosition = target.offset(), animation = { top: endPosition.top - fixTop, left: endPosition.left - fixLeft, height: target.innerHeight(), width: target.innerWidth() }, startPosition = element.offset(), transfer = $("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(options.className).css({ top: startPosition.top - fixTop, left: startPosition.left - fixLeft, height: element.innerHeight(), width: element.innerWidth(), position: targetFixed ? "fixed" : "absolute" }).animate(animation, options.duration, options.easing, function() { transfer.remove(); if ($.isFunction(done)) { done(); } }); }
		}); function parseClip(str, element) { var outerWidth = element.outerWidth(), outerHeight = element.outerHeight(), clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/, values = clipRegex.exec(str) || ["", 0, outerWidth, outerHeight, 0]; return { top: parseFloat(values[1]) || 0, right: values[2] === "auto" ? outerWidth : parseFloat(values[2]), bottom: values[3] === "auto" ? outerHeight : parseFloat(values[3]), left: parseFloat(values[4]) || 0 }; }
		$.fx.step.clip = function(fx) {
			if (!fx.clipInit) {
				fx.start = $(fx.elem).cssClip(); if (typeof fx.end === "string") { fx.end = parseClip(fx.end, fx.elem); }
				fx.clipInit = true;
			}
			$(fx.elem).cssClip({ top: fx.pos * (fx.end.top - fx.start.top) + fx.start.top, right: fx.pos * (fx.end.right - fx.start.right) + fx.start.right, bottom: fx.pos * (fx.end.bottom - fx.start.bottom) + fx.start.bottom, left: fx.pos * (fx.end.left - fx.start.left) + fx.start.left });
		};
	})(); (function() {
		var baseEasings = {}; $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(i, name) { baseEasings[name] = function(p) { return Math.pow(p, i + 2); }; }); $.extend(baseEasings, {
			Sine: function(p) { return 1 - Math.cos(p * Math.PI / 2); }, Circ: function(p) { return 1 - Math.sqrt(1 - p * p); }, Elastic: function(p) { return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15); }, Back: function(p) { return p * p * (3 * p - 2); }, Bounce: function(p) {
				var pow2, bounce = 4; while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) { }
				return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);
			}
		}); $.each(baseEasings, function(name, easeIn) { $.easing["easeIn" + name] = easeIn; $.easing["easeOut" + name] = function(p) { return 1 - easeIn(1 - p); }; $.easing["easeInOut" + name] = function(p) { return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2; }; });
	})(); return $.effects;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-blind.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) {
	return $.effects.define("blind", "hide", function(options, done) {
		var map = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] }, element = $(this), direction = options.direction || "up", start = element.cssClip(), animate = { clip: $.extend({}, start) }, placeholder = $.effects.createPlaceholder(element); animate.clip[map[direction][0]] = animate.clip[map[direction][1]]; if (options.mode === "show") {
			element.cssClip(animate.clip); if (placeholder) { placeholder.css($.effects.clipToBox(animate)); }
			animate.clip = start;
		}
		if (placeholder) { placeholder.animate($.effects.clipToBox(animate), options.duration, options.easing); }
		element.animate(animate, { queue: false, duration: options.duration, easing: options.easing, complete: done });
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-bounce.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) {
	return $.effects.define("bounce", function(options, done) {
		var upAnim, downAnim, refValue, element = $(this), mode = options.mode, hide = mode === "hide", show = mode === "show", direction = options.direction || "up", distance = options.distance, times = options.times || 5, anims = times * 2 + (show || hide ? 1 : 0), speed = options.duration / anims, easing = options.easing, ref = (direction === "up" || direction === "down") ? "top" : "left", motion = (direction === "up" || direction === "left"), i = 0, queuelen = element.queue().length; $.effects.createPlaceholder(element); refValue = element.css(ref); if (!distance) { distance = element[ref === "top" ? "outerHeight" : "outerWidth"]() / 3; }
		if (show) { downAnim = { opacity: 1 }; downAnim[ref] = refValue; element.css("opacity", 0).css(ref, motion ? -distance * 2 : distance * 2).animate(downAnim, speed, easing); }
		if (hide) { distance = distance / Math.pow(2, times - 1); }
		downAnim = {}; downAnim[ref] = refValue; for (; i < times; i++) { upAnim = {}; upAnim[ref] = (motion ? "-=" : "+=") + distance; element.animate(upAnim, speed, easing).animate(downAnim, speed, easing); distance = hide ? distance * 2 : distance / 2; }
		if (hide) { upAnim = { opacity: 0 }; upAnim[ref] = (motion ? "-=" : "+=") + distance; element.animate(upAnim, speed, easing); }
		element.queue(done); $.effects.unshift(element, queuelen, anims + 1);
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-clip.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) {
	return $.effects.define("clip", "hide", function(options, done) {
		var start, animate = {}, element = $(this), direction = options.direction || "vertical", both = direction === "both", horizontal = both || direction === "horizontal", vertical = both || direction === "vertical"; start = element.cssClip(); animate.clip = { top: vertical ? (start.bottom - start.top) / 2 : start.top, right: horizontal ? (start.right - start.left) / 2 : start.right, bottom: vertical ? (start.bottom - start.top) / 2 : start.bottom, left: horizontal ? (start.right - start.left) / 2 : start.left }; $.effects.createPlaceholder(element); if (options.mode === "show") { element.cssClip(animate.clip); animate.clip = start; }
		element.animate(animate, { queue: false, duration: options.duration, easing: options.easing, complete: done });
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-drop.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) {
	return $.effects.define("drop", "hide", function(options, done) {
		var distance, element = $(this), mode = options.mode, show = mode === "show", direction = options.direction || "left", ref = (direction === "up" || direction === "down") ? "top" : "left", motion = (direction === "up" || direction === "left") ? "-=" : "+=", oppositeMotion = (motion === "+=") ? "-=" : "+=", animation = { opacity: 0 }; $.effects.createPlaceholder(element); distance = options.distance || element[ref === "top" ? "outerHeight" : "outerWidth"](true) / 2; animation[ref] = motion + distance; if (show) { element.css(animation); animation[ref] = oppositeMotion + distance; animation.opacity = 1; }
		element.animate(animation, { queue: false, duration: options.duration, easing: options.easing, complete: done });
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-explode.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) {
	return $.effects.define("explode", "hide", function(options, done) {
		var i, j, left, top, mx, my, rows = options.pieces ? Math.round(Math.sqrt(options.pieces)) : 3, cells = rows, element = $(this), mode = options.mode, show = mode === "show", offset = element.show().css("visibility", "hidden").offset(), width = Math.ceil(element.outerWidth() / cells), height = Math.ceil(element.outerHeight() / rows), pieces = []; function childComplete() { pieces.push(this); if (pieces.length === rows * cells) { animComplete(); } }
		for (i = 0; i < rows; i++) { top = offset.top + i * height; my = i - (rows - 1) / 2; for (j = 0; j < cells; j++) { left = offset.left + j * width; mx = j - (cells - 1) / 2; element.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -j * width, top: -i * height }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: width, height: height, left: left + (show ? mx * width : 0), top: top + (show ? my * height : 0), opacity: show ? 0 : 1 }).animate({ left: left + (show ? 0 : mx * width), top: top + (show ? 0 : my * height), opacity: show ? 1 : 0 }, options.duration || 500, options.easing, childComplete); } }
		function animComplete() { element.css({ visibility: "visible" }); $(pieces).remove(); done(); }
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-fade.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) { return $.effects.define("fade", "toggle", function(options, done) { var show = options.mode === "show"; $(this).css("opacity", show ? 0 : 1).animate({ opacity: show ? 1 : 0 }, { queue: false, duration: options.duration, easing: options.easing, complete: done }); }); })); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-fold.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) {
	return $.effects.define("fold", "hide", function(options, done) {
		var element = $(this), mode = options.mode, show = mode === "show", hide = mode === "hide", size = options.size || 15, percent = /([0-9]+)%/.exec(size), horizFirst = !!options.horizFirst, ref = horizFirst ? ["right", "bottom"] : ["bottom", "right"], duration = options.duration / 2, placeholder = $.effects.createPlaceholder(element), start = element.cssClip(), animation1 = { clip: $.extend({}, start) }, animation2 = { clip: $.extend({}, start) }, distance = [start[ref[0]], start[ref[1]]], queuelen = element.queue().length; if (percent) { size = parseInt(percent[1], 10) / 100 * distance[hide ? 0 : 1]; }
		animation1.clip[ref[0]] = size; animation2.clip[ref[0]] = size; animation2.clip[ref[1]] = 0; if (show) {
			element.cssClip(animation2.clip); if (placeholder) { placeholder.css($.effects.clipToBox(animation2)); }
			animation2.clip = start;
		}
		element.queue(function(next) {
			if (placeholder) { placeholder.animate($.effects.clipToBox(animation1), duration, options.easing).animate($.effects.clipToBox(animation2), duration, options.easing); }
			next();
		}).animate(animation1, duration, options.easing).animate(animation2, duration, options.easing).queue(done); $.effects.unshift(element, queuelen, 4);
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-highlight.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) {
	return $.effects.define("highlight", "show", function(options, done) {
		var element = $(this), animation = { backgroundColor: element.css("backgroundColor") }; if (options.mode === "hide") { animation.opacity = 0; }
		$.effects.saveStyle(element); element.css({ backgroundImage: "none", backgroundColor: options.color || "#ffff99" }).animate(animation, { queue: false, duration: options.duration, easing: options.easing, complete: done });
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-size.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) {
	return $.effects.define("size", function(options, done) {
		var baseline, factor, temp, element = $(this), cProps = ["fontSize"], vProps = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], hProps = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], mode = options.mode, restore = mode !== "effect", scale = options.scale || "both", origin = options.origin || ["middle", "center"], position = element.css("position"), pos = element.position(), original = $.effects.scaledDimensions(element), from = options.from || original, to = options.to || $.effects.scaledDimensions(element, 0); $.effects.createPlaceholder(element); if (mode === "show") { temp = from; from = to; to = temp; }
		factor = { from: { y: from.height / original.height, x: from.width / original.width }, to: { y: to.height / original.height, x: to.width / original.width } }; if (scale === "box" || scale === "both") {
			if (factor.from.y !== factor.to.y) { from = $.effects.setTransition(element, vProps, factor.from.y, from); to = $.effects.setTransition(element, vProps, factor.to.y, to); }
			if (factor.from.x !== factor.to.x) { from = $.effects.setTransition(element, hProps, factor.from.x, from); to = $.effects.setTransition(element, hProps, factor.to.x, to); }
		}
		if (scale === "content" || scale === "both") { if (factor.from.y !== factor.to.y) { from = $.effects.setTransition(element, cProps, factor.from.y, from); to = $.effects.setTransition(element, cProps, factor.to.y, to); } }
		if (origin) { baseline = $.effects.getBaseline(origin, original); from.top = (original.outerHeight - from.outerHeight) * baseline.y + pos.top; from.left = (original.outerWidth - from.outerWidth) * baseline.x + pos.left; to.top = (original.outerHeight - to.outerHeight) * baseline.y + pos.top; to.left = (original.outerWidth - to.outerWidth) * baseline.x + pos.left; }
		element.css(from); if (scale === "content" || scale === "both") {
			vProps = vProps.concat(["marginTop", "marginBottom"]).concat(cProps); hProps = hProps.concat(["marginLeft", "marginRight"]); element.find("*[width]").each(function() {
				var child = $(this), childOriginal = $.effects.scaledDimensions(child), childFrom = { height: childOriginal.height * factor.from.y, width: childOriginal.width * factor.from.x, outerHeight: childOriginal.outerHeight * factor.from.y, outerWidth: childOriginal.outerWidth * factor.from.x }, childTo = { height: childOriginal.height * factor.to.y, width: childOriginal.width * factor.to.x, outerHeight: childOriginal.height * factor.to.y, outerWidth: childOriginal.width * factor.to.x }; if (factor.from.y !== factor.to.y) { childFrom = $.effects.setTransition(child, vProps, factor.from.y, childFrom); childTo = $.effects.setTransition(child, vProps, factor.to.y, childTo); }
				if (factor.from.x !== factor.to.x) { childFrom = $.effects.setTransition(child, hProps, factor.from.x, childFrom); childTo = $.effects.setTransition(child, hProps, factor.to.x, childTo); }
				if (restore) { $.effects.saveStyle(child); }
				child.css(childFrom); child.animate(childTo, options.duration, options.easing, function() { if (restore) { $.effects.restoreStyle(child); } });
			});
		}
		element.animate(to, {
			queue: false, duration: options.duration, easing: options.easing, complete: function() {
				var offset = element.offset(); if (to.opacity === 0) { element.css("opacity", from.opacity); }
				if (!restore) { element.css("position", position === "static" ? "relative" : position).offset(offset); $.effects.saveStyle(element); }
				done();
			}
		});
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-scale.js', ["jquery", "../version", "../effect", "./effect-size"], factory); } else { factory(jQuery); } }(function($) {
	return $.effects.define("scale", function(options, done) {
		var el = $(this), mode = options.mode, percent = parseInt(options.percent, 10) || (parseInt(options.percent, 10) === 0 ? 0 : (mode !== "effect" ? 0 : 100)), newOptions = $.extend(true, { from: $.effects.scaledDimensions(el), to: $.effects.scaledDimensions(el, percent, options.direction || "both"), origin: options.origin || ["middle", "center"] }, options); if (options.fade) { newOptions.from.opacity = 1; newOptions.to.opacity = 0; }
		$.effects.effect.size.call(this, newOptions, done);
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-puff.js', ["jquery", "../version", "../effect", "./effect-scale"], factory); } else { factory(jQuery); } }(function($) { return $.effects.define("puff", "hide", function(options, done) { var newOptions = $.extend(true, {}, options, { fade: true, percent: parseInt(options.percent, 10) || 150 }); $.effects.effect.scale.call(this, newOptions, done); }); })); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-pulsate.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) {
	return $.effects.define("pulsate", "show", function(options, done) {
		var element = $(this), mode = options.mode, show = mode === "show", hide = mode === "hide", showhide = show || hide, anims = ((options.times || 5) * 2) + (showhide ? 1 : 0), duration = options.duration / anims, animateTo = 0, i = 1, queuelen = element.queue().length; if (show || !element.is(":visible")) { element.css("opacity", 0).show(); animateTo = 1; }
		for (; i < anims; i++) { element.animate({ opacity: animateTo }, duration, options.easing); animateTo = 1 - animateTo; }
		element.animate({ opacity: animateTo }, duration, options.easing); element.queue(done); $.effects.unshift(element, queuelen, anims + 1);
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-shake.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) {
	return $.effects.define("shake", function(options, done) {
		var i = 1, element = $(this), direction = options.direction || "left", distance = options.distance || 20, times = options.times || 3, anims = times * 2 + 1, speed = Math.round(options.duration / anims), ref = (direction === "up" || direction === "down") ? "top" : "left", positiveMotion = (direction === "up" || direction === "left"), animation = {}, animation1 = {}, animation2 = {}, queuelen = element.queue().length; $.effects.createPlaceholder(element); animation[ref] = (positiveMotion ? "-=" : "+=") + distance; animation1[ref] = (positiveMotion ? "+=" : "-=") + distance * 2; animation2[ref] = (positiveMotion ? "-=" : "+=") + distance * 2; element.animate(animation, speed, options.easing); for (; i < times; i++) { element.animate(animation1, speed, options.easing).animate(animation2, speed, options.easing); }
		element.animate(animation1, speed, options.easing).animate(animation, speed / 2, options.easing).queue(done); $.effects.unshift(element, queuelen, anims + 1);
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-slide.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) {
	return $.effects.define("slide", "show", function(options, done) {
		var startClip, startRef, element = $(this), map = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] }, mode = options.mode, direction = options.direction || "left", ref = (direction === "up" || direction === "down") ? "top" : "left", positiveMotion = (direction === "up" || direction === "left"), distance = options.distance || element[ref === "top" ? "outerHeight" : "outerWidth"](true), animation = {}; $.effects.createPlaceholder(element); startClip = element.cssClip(); startRef = element.position()[ref]; animation[ref] = (positiveMotion ? -1 : 1) * distance + startRef; animation.clip = element.cssClip(); animation.clip[map[direction][1]] = animation.clip[map[direction][0]]; if (mode === "show") { element.cssClip(animation.clip); element.css(ref, animation[ref]); animation.clip = startClip; animation[ref] = startRef; }
		element.animate(animation, { queue: false, duration: options.duration, easing: options.easing, complete: done });
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/effects/effect-transfer.js', ["jquery", "../version", "../effect"], factory); } else { factory(jQuery); } }(function($) {
	var effect; if ($.uiBackCompat !== false) { effect = $.effects.define("transfer", function(options, done) { $(this).transfer(options, done); }); }
	return effect;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/escape-selector', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) { return $.ui.escapeSelector = (function() { var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g; return function(selector) { return selector.replace(selectorEscape, "\\$1"); }; })(); })); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/focusable', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) {
	$.ui.focusable = function(element, hasTabindex) {
		var map, mapName, img, nodeName = element.nodeName.toLowerCase(); if ("area" === nodeName) {
			map = element.parentNode; mapName = map.name; if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") { return false; }
			img = $("img[usemap='#" + mapName + "']"); return img.length > 0 && img.is(":visible");
		}
		return (/^(input|select|textarea|button|object)$/.test(nodeName) ? !element.disabled : "a" === nodeName ? element.href || hasTabindex : hasTabindex) && $(element).is(":visible") && visible($(element));
	}; function visible(element) {
		var visibility = element.css("visibility"); while (visibility === "inherit") { element = element.parent(); visibility = element.css("visibility"); }
		return visibility !== "hidden";
	}
	$.extend($.expr[":"], { focusable: function(element) { return $.ui.focusable(element, $.attr(element, "tabindex") != null); } }); return $.ui.focusable;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/form.js', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) { return $.fn.form = function() { return typeof this[0].form === "string" ? this.closest("form") : $(this[0].form); }; })); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/form-reset-mixin', ["jquery", "./form", "./version"], factory); } else { factory(jQuery); } }(function($) {
	return $.ui.formResetMixin = {
		_formResetHandler: function() { var form = $(this); setTimeout(function() { var instances = form.data("ui-form-reset-instances"); $.each(instances, function() { this.refresh(); }); }); }, _bindFormResetHandler: function() {
			this.form = this.element.form(); if (!this.form.length) { return; }
			var instances = this.form.data("ui-form-reset-instances") || []; if (!instances.length) { this.form.on("reset.ui-form-reset", this._formResetHandler); }
			instances.push(this); this.form.data("ui-form-reset-instances", instances);
		}, _unbindFormResetHandler: function() {
			if (!this.form.length) { return; }
			var instances = this.form.data("ui-form-reset-instances"); instances.splice($.inArray(this, instances), 1); if (instances.length) { this.form.data("ui-form-reset-instances", instances); } else { this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"); }
		}
	};
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/ie', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) { return $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()); })); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/jquery-1-7.js', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) {
	if ($.fn.jquery.substring(0, 3) === "1.7") {
		$.each(["Width", "Height"], function(i, name) {
			var side = name === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], type = name.toLowerCase(), orig = { innerWidth: $.fn.innerWidth, innerHeight: $.fn.innerHeight, outerWidth: $.fn.outerWidth, outerHeight: $.fn.outerHeight }; function reduce(elem, size, border, margin) {
				$.each(side, function() {
					size -= parseFloat($.css(elem, "padding" + this)) || 0; if (border) { size -= parseFloat($.css(elem, "border" + this + "Width")) || 0; }
					if (margin) { size -= parseFloat($.css(elem, "margin" + this)) || 0; }
				}); return size;
			}
			$.fn["inner" + name] = function(size) {
				if (size === undefined) { return orig["inner" + name].call(this); }
				return this.each(function() { $(this).css(type, reduce(this, size) + "px"); });
			}; $.fn["outer" + name] = function(size, margin) {
				if (typeof size !== "number") { return orig["outer" + name].call(this, size); }
				return this.each(function() { $(this).css(type, reduce(this, size, true, margin) + "px"); });
			};
		}); $.fn.addBack = function(selector) { return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector)); };
	}
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/keycode', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) { return $.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }; })); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/labels', ["jquery", "./version", "./escape-selector"], factory); } else { factory(jQuery); } }(function($) {
	return $.fn.labels = function() {
		var ancestor, selector, id, labels, ancestors; if (this[0].labels && this[0].labels.length) { return this.pushStack(this[0].labels); }
		labels = this.eq(0).parents("label"); id = this.attr("id"); if (id) { ancestor = this.eq(0).parents().last(); ancestors = ancestor.add(ancestor.length ? ancestor.siblings() : this.siblings()); selector = "label[for='" + $.ui.escapeSelector(id) + "']"; labels = labels.add(ancestors.find(selector).addBack(selector)); }
		return this.pushStack(labels);
	};
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/plugin', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) {
	return $.ui.plugin = {
		add: function(module, option, set) { var i, proto = $.ui[module].prototype; for (i in set) { proto.plugins[i] = proto.plugins[i] || []; proto.plugins[i].push([option, set[i]]); } }, call: function(instance, name, args, allowDisconnected) {
			var i, set = instance.plugins[name]; if (!set) { return; }
			if (!allowDisconnected && (!instance.element[0].parentNode || instance.element[0].parentNode.nodeType === 11)) { return; }
			for (i = 0; i < set.length; i++) { if (instance.options[set[i][0]]) { set[i][1].apply(instance.element, args); } }
		}
	};
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/position', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) {
	(function() {
		var cachedScrollbarWidth, supportsOffsetFractions, max = Math.max, abs = Math.abs, round = Math.round, rhorizontal = /left|center|right/, rvertical = /top|center|bottom/, roffset = /[\+\-]\d+(\.[\d]+)?%?/, rposition = /^\w+/, rpercent = /%$/, _position = $.fn.position; supportsOffsetFractions = function() { var element = $("<div>").css("position", "absolute").appendTo("body").offset({ top: 1.5, left: 1.5 }), support = element.offset().top === 1.5; element.remove(); supportsOffsetFractions = function() { return support; }; return support; }; function getOffsets(offsets, width, height) { return [parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1)]; }
		function parseCss(element, property) { return parseInt($.css(element, property), 10) || 0; }
		function getDimensions(elem) {
			var raw = elem[0]; if (raw.nodeType === 9) { return { width: elem.width(), height: elem.height(), offset: { top: 0, left: 0 } }; }
			if ($.isWindow(raw)) { return { width: elem.width(), height: elem.height(), offset: { top: elem.scrollTop(), left: elem.scrollLeft() } }; }
			if (raw.preventDefault) { return { width: 0, height: 0, offset: { top: raw.pageY, left: raw.pageX } }; }
			return { width: elem.outerWidth(), height: elem.outerHeight(), offset: elem.offset() };
		}
		$.position = {
			scrollbarWidth: function() {
				if (cachedScrollbarWidth !== undefined) { return cachedScrollbarWidth; }
				var w1, w2, div = $("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), innerDiv = div.children()[0]; $("body").append(div); w1 = innerDiv.offsetWidth; div.css("overflow", "scroll"); w2 = innerDiv.offsetWidth; if (w1 === w2) { w2 = div[0].clientWidth; }
				div.remove(); return (cachedScrollbarWidth = w1 - w2);
			}, getScrollInfo: function(within) { var overflowX = within.isWindow || within.isDocument ? "" : within.element.css("overflow-x"), overflowY = within.isWindow || within.isDocument ? "" : within.element.css("overflow-y"), hasOverflowX = overflowX === "scroll" || (overflowX === "auto" && within.width < within.element[0].scrollWidth), hasOverflowY = overflowY === "scroll" || (overflowY === "auto" && within.height < within.element[0].scrollHeight); return { width: hasOverflowY ? $.position.scrollbarWidth() : 0, height: hasOverflowX ? $.position.scrollbarWidth() : 0 }; }, getWithinInfo: function(element) { var withinElement = $(element || window), isWindow = $.isWindow(withinElement[0]), isDocument = !!withinElement[0] && withinElement[0].nodeType === 9, hasOffset = !isWindow && !isDocument; return { element: withinElement, isWindow: isWindow, isDocument: isDocument, offset: hasOffset ? $(element).offset() : { left: 0, top: 0 }, scrollLeft: withinElement.scrollLeft(), scrollTop: withinElement.scrollTop(), width: withinElement.outerWidth(), height: withinElement.outerHeight() }; }
		}; $.fn.position = function(options) {
			if (!options || !options.of) { return _position.apply(this, arguments); }
			options = $.extend({}, options); var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions, target = $(options.of), within = $.position.getWithinInfo(options.within), scrollInfo = $.position.getScrollInfo(within), collision = (options.collision || "flip").split(" "), offsets = {}; dimensions = getDimensions(target); if (target[0].preventDefault) { options.at = "left top"; }
			targetWidth = dimensions.width; targetHeight = dimensions.height; targetOffset = dimensions.offset; basePosition = $.extend({}, targetOffset); $.each(["my", "at"], function() {
				var pos = (options[this] || "").split(" "), horizontalOffset, verticalOffset; if (pos.length === 1) { pos = rhorizontal.test(pos[0]) ? pos.concat(["center"]) : rvertical.test(pos[0]) ? ["center"].concat(pos) : ["center", "center"]; }
				pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center"; pos[1] = rvertical.test(pos[1]) ? pos[1] : "center"; horizontalOffset = roffset.exec(pos[0]); verticalOffset = roffset.exec(pos[1]); offsets[this] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0]; options[this] = [rposition.exec(pos[0])[0], rposition.exec(pos[1])[0]];
			}); if (collision.length === 1) { collision[1] = collision[0]; }
			if (options.at[0] === "right") { basePosition.left += targetWidth; } else if (options.at[0] === "center") { basePosition.left += targetWidth / 2; }
			if (options.at[1] === "bottom") { basePosition.top += targetHeight; } else if (options.at[1] === "center") { basePosition.top += targetHeight / 2; }
			atOffset = getOffsets(offsets.at, targetWidth, targetHeight); basePosition.left += atOffset[0]; basePosition.top += atOffset[1]; return this.each(function() {
				var collisionPosition, using, elem = $(this), elemWidth = elem.outerWidth(), elemHeight = elem.outerHeight(), marginLeft = parseCss(this, "marginLeft"), marginTop = parseCss(this, "marginTop"), collisionWidth = elemWidth + marginLeft + parseCss(this, "marginRight") + scrollInfo.width, collisionHeight = elemHeight + marginTop + parseCss(this, "marginBottom") + scrollInfo.height, position = $.extend({}, basePosition), myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight()); if (options.my[0] === "right") { position.left -= elemWidth; } else if (options.my[0] === "center") { position.left -= elemWidth / 2; }
				if (options.my[1] === "bottom") { position.top -= elemHeight; } else if (options.my[1] === "center") { position.top -= elemHeight / 2; }
				position.left += myOffset[0]; position.top += myOffset[1]; if (!supportsOffsetFractions()) { position.left = round(position.left); position.top = round(position.top); }
				collisionPosition = { marginLeft: marginLeft, marginTop: marginTop }; $.each(["left", "top"], function(i, dir) { if ($.ui.position[collision[i]]) { $.ui.position[collision[i]][dir](position, { targetWidth: targetWidth, targetHeight: targetHeight, elemWidth: elemWidth, elemHeight: elemHeight, collisionPosition: collisionPosition, collisionWidth: collisionWidth, collisionHeight: collisionHeight, offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]], my: options.my, at: options.at, within: within, elem: elem }); } }); if (options.using) {
					using = function(props) {
						var left = targetOffset.left - position.left, right = left + targetWidth - elemWidth, top = targetOffset.top - position.top, bottom = top + targetHeight - elemHeight, feedback = { target: { element: target, left: targetOffset.left, top: targetOffset.top, width: targetWidth, height: targetHeight }, element: { element: elem, left: position.left, top: position.top, width: elemWidth, height: elemHeight }, horizontal: right < 0 ? "left" : left > 0 ? "right" : "center", vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle" }; if (targetWidth < elemWidth && abs(left + right) < targetWidth) { feedback.horizontal = "center"; }
						if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) { feedback.vertical = "middle"; }
						if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) { feedback.important = "horizontal"; } else { feedback.important = "vertical"; }
						options.using.call(this, props, feedback);
					};
				}
				elem.offset($.extend(position, { using: using }));
			});
		}; $.ui.position = { fit: { left: function(position, data) { var within = data.within, withinOffset = within.isWindow ? within.scrollLeft : within.offset.left, outerWidth = within.width, collisionPosLeft = position.left - data.collisionPosition.marginLeft, overLeft = withinOffset - collisionPosLeft, overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset, newOverRight; if (data.collisionWidth > outerWidth) { if (overLeft > 0 && overRight <= 0) { newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset; position.left += overLeft - newOverRight; } else if (overRight > 0 && overLeft <= 0) { position.left = withinOffset; } else { if (overLeft > overRight) { position.left = withinOffset + outerWidth - data.collisionWidth; } else { position.left = withinOffset; } } } else if (overLeft > 0) { position.left += overLeft; } else if (overRight > 0) { position.left -= overRight; } else { position.left = max(position.left - collisionPosLeft, position.left); } }, top: function(position, data) { var within = data.within, withinOffset = within.isWindow ? within.scrollTop : within.offset.top, outerHeight = data.within.height, collisionPosTop = position.top - data.collisionPosition.marginTop, overTop = withinOffset - collisionPosTop, overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset, newOverBottom; if (data.collisionHeight > outerHeight) { if (overTop > 0 && overBottom <= 0) { newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset; position.top += overTop - newOverBottom; } else if (overBottom > 0 && overTop <= 0) { position.top = withinOffset; } else { if (overTop > overBottom) { position.top = withinOffset + outerHeight - data.collisionHeight; } else { position.top = withinOffset; } } } else if (overTop > 0) { position.top += overTop; } else if (overBottom > 0) { position.top -= overBottom; } else { position.top = max(position.top - collisionPosTop, position.top); } } }, flip: { left: function(position, data) { var within = data.within, withinOffset = within.offset.left + within.scrollLeft, outerWidth = within.width, offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left, collisionPosLeft = position.left - data.collisionPosition.marginLeft, overLeft = collisionPosLeft - offsetLeft, overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft, myOffset = data.my[0] === "left" ? -data.elemWidth : data.my[0] === "right" ? data.elemWidth : 0, atOffset = data.at[0] === "left" ? data.targetWidth : data.at[0] === "right" ? -data.targetWidth : 0, offset = -2 * data.offset[0], newOverRight, newOverLeft; if (overLeft < 0) { newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset; if (newOverRight < 0 || newOverRight < abs(overLeft)) { position.left += myOffset + atOffset + offset; } } else if (overRight > 0) { newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft; if (newOverLeft > 0 || abs(newOverLeft) < overRight) { position.left += myOffset + atOffset + offset; } } }, top: function(position, data) { var within = data.within, withinOffset = within.offset.top + within.scrollTop, outerHeight = within.height, offsetTop = within.isWindow ? within.scrollTop : within.offset.top, collisionPosTop = position.top - data.collisionPosition.marginTop, overTop = collisionPosTop - offsetTop, overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop, top = data.my[1] === "top", myOffset = top ? -data.elemHeight : data.my[1] === "bottom" ? data.elemHeight : 0, atOffset = data.at[1] === "top" ? data.targetHeight : data.at[1] === "bottom" ? -data.targetHeight : 0, offset = -2 * data.offset[1], newOverTop, newOverBottom; if (overTop < 0) { newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset; if (newOverBottom < 0 || newOverBottom < abs(overTop)) { position.top += myOffset + atOffset + offset; } } else if (overBottom > 0) { newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop; if (newOverTop > 0 || abs(newOverTop) < overBottom) { position.top += myOffset + atOffset + offset; } } } }, flipfit: { left: function() { $.ui.position.flip.left.apply(this, arguments); $.ui.position.fit.left.apply(this, arguments); }, top: function() { $.ui.position.flip.top.apply(this, arguments); $.ui.position.fit.top.apply(this, arguments); } } };
	})(); return $.ui.position;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/safe-active-element', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) {
	return $.ui.safeActiveElement = function(document) {
		var activeElement; try { activeElement = document.activeElement; } catch (error) { activeElement = document.body; }
		if (!activeElement) { activeElement = document.body; }
		if (!activeElement.nodeName) { activeElement = document.body; }
		return activeElement;
	};
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/safe-blur', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) { return $.ui.safeBlur = function(element) { if (element && element.nodeName.toLowerCase() !== "body") { $(element).trigger("blur"); } }; })); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/scroll-parent', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) {
	return $.fn.scrollParent = function(includeHidden) {
		var position = this.css("position"), excludeStaticParent = position === "absolute", overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/, scrollParent = this.parents().filter(function() {
			var parent = $(this); if (excludeStaticParent && parent.css("position") === "static") { return false; }
			return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
		}).eq(0); return position === "fixed" || !scrollParent.length ? $(this[0].ownerDocument || document) : scrollParent;
	};
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/tabbable', ["jquery", "./version", "./focusable"], factory); } else { factory(jQuery); } }(function($) { return $.extend($.expr[":"], { tabbable: function(element) { var tabIndex = $.attr(element, "tabindex"), hasTabindex = tabIndex != null; return (!hasTabindex || tabIndex >= 0) && $.ui.focusable(element, hasTabindex); } }); })); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/unique-id', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) { return $.fn.extend({ uniqueId: (function() { var uuid = 0; return function() { return this.each(function() { if (!this.id) { this.id = "ui-id-" + (++uuid); } }); }; })(), removeUniqueId: function() { return this.each(function() { if (/^ui-id-\d+$/.test(this.id)) { $(this).removeAttr("id"); } }); } }); })); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widget', ["jquery", "./version"], factory); } else { factory(jQuery); } }(function($) {
	var widgetUuid = 0; var widgetSlice = Array.prototype.slice; $.cleanData = (function(orig) {
		return function(elems) {
			var events, elem, i; for (i = 0; (elem = elems[i]) != null; i++) { try { events = $._data(elem, "events"); if (events && events.remove) { $(elem).triggerHandler("remove"); } } catch (e) { } }
			orig(elems);
		};
	})($.cleanData); $.widget = function(name, base, prototype) {
		var existingConstructor, constructor, basePrototype; var proxiedPrototype = {}; var namespace = name.split(".")[0]; name = name.split(".")[1]; var fullName = namespace + "-" + name; if (!prototype) { prototype = base; base = $.Widget; }
		if ($.isArray(prototype)) { prototype = $.extend.apply(null, [{}].concat(prototype)); }
		$.expr[":"][fullName.toLowerCase()] = function(elem) { return !!$.data(elem, fullName); }; $[namespace] = $[namespace] || {}; existingConstructor = $[namespace][name]; constructor = $[namespace][name] = function(options, element) {
			if (!this._createWidget) { return new constructor(options, element); }
			if (arguments.length) { this._createWidget(options, element); }
		}; $.extend(constructor, existingConstructor, { version: prototype.version, _proto: $.extend({}, prototype), _childConstructors: [] }); basePrototype = new base(); basePrototype.options = $.widget.extend({}, basePrototype.options); $.each(prototype, function(prop, value) {
			if (!$.isFunction(value)) { proxiedPrototype[prop] = value; return; }
			proxiedPrototype[prop] = (function() {
				function _super() { return base.prototype[prop].apply(this, arguments); }
				function _superApply(args) { return base.prototype[prop].apply(this, args); }
				return function() { var __super = this._super; var __superApply = this._superApply; var returnValue; this._super = _super; this._superApply = _superApply; returnValue = value.apply(this, arguments); this._super = __super; this._superApply = __superApply; return returnValue; };
			})();
		}); constructor.prototype = $.widget.extend(basePrototype, { widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name }, proxiedPrototype, { constructor: constructor, namespace: namespace, widgetName: name, widgetFullName: fullName }); if (existingConstructor) { $.each(existingConstructor._childConstructors, function(i, child) { var childPrototype = child.prototype; $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto); }); delete existingConstructor._childConstructors; } else { base._childConstructors.push(constructor); }
		$.widget.bridge(name, constructor); return constructor;
	}; $.widget.extend = function(target) {
		var input = widgetSlice.call(arguments, 1); var inputIndex = 0; var inputLength = input.length; var key; var value; for (; inputIndex < inputLength; inputIndex++) { for (key in input[inputIndex]) { value = input[inputIndex][key]; if (input[inputIndex].hasOwnProperty(key) && value !== undefined) { if ($.isPlainObject(value)) { target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value); } else { target[key] = value; } } } }
		return target;
	}; $.widget.bridge = function(name, object) {
		var fullName = object.prototype.widgetFullName || name; $.fn[name] = function(options) {
			var isMethodCall = typeof options === "string"; var args = widgetSlice.call(arguments, 1); var returnValue = this; if (isMethodCall) {
				this.each(function() {
					var methodValue; var instance = $.data(this, fullName); if (options === "instance") { returnValue = instance; return false; }
					if (!instance) { return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'"); }
					if (!$.isFunction(instance[options]) || options.charAt(0) === "_") { return $.error("no such method '" + options + "' for " + name + " widget instance"); }
					methodValue = instance[options].apply(instance, args); if (methodValue !== instance && methodValue !== undefined) { returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue; return false; }
				});
			} else {
				if (args.length) { options = $.widget.extend.apply(null, [options].concat(args)); }
				this.each(function() { var instance = $.data(this, fullName); if (instance) { instance.option(options || {}); if (instance._init) { instance._init(); } } else { $.data(this, fullName, new object(options, this)); } });
			}
			return returnValue;
		};
	}; $.Widget = function() { }; $.Widget._childConstructors = []; $.Widget.prototype = {
		widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: false, create: null }, _createWidget: function(options, element) {
			element = $(element || this.defaultElement || this)[0]; this.element = $(element); this.uuid = widgetUuid++; this.eventNamespace = "." + this.widgetName + this.uuid; this.bindings = $(); this.hoverable = $(); this.focusable = $(); this.classesElementLookup = {}; if (element !== this) { $.data(element, this.widgetFullName, this); this._on(true, this.element, { remove: function(event) { if (event.target === element) { this.destroy(); } } }); this.document = $(element.style ? element.ownerDocument : element.document || element); this.window = $(this.document[0].defaultView || this.document[0].parentWindow); }
			this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options); this._create(); if (this.options.disabled) { this._setOptionDisabled(this.options.disabled); }
			this._trigger("create", null, this._getCreateEventData()); this._init();
		}, _getCreateOptions: function() { return {}; }, _getCreateEventData: $.noop, _create: $.noop, _init: $.noop, destroy: function() { var that = this; this._destroy(); $.each(this.classesElementLookup, function(key, value) { that._removeClass(value, key); }); this.element.off(this.eventNamespace).removeData(this.widgetFullName); this.widget().off(this.eventNamespace).removeAttr("aria-disabled"); this.bindings.off(this.eventNamespace); }, _destroy: $.noop, widget: function() { return this.element; }, option: function(key, value) {
			var options = key; var parts; var curOption; var i; if (arguments.length === 0) { return $.widget.extend({}, this.options); }
			if (typeof key === "string") {
				options = {}; parts = key.split("."); key = parts.shift(); if (parts.length) {
					curOption = options[key] = $.widget.extend({}, this.options[key]); for (i = 0; i < parts.length - 1; i++) { curOption[parts[i]] = curOption[parts[i]] || {}; curOption = curOption[parts[i]]; }
					key = parts.pop(); if (arguments.length === 1) { return curOption[key] === undefined ? null : curOption[key]; }
					curOption[key] = value;
				} else {
					if (arguments.length === 1) { return this.options[key] === undefined ? null : this.options[key]; }
					options[key] = value;
				}
			}
			this._setOptions(options); return this;
		}, _setOptions: function(options) {
			var key; for (key in options) { this._setOption(key, options[key]); }
			return this;
		}, _setOption: function(key, value) {
			if (key === "classes") { this._setOptionClasses(value); }
			this.options[key] = value; if (key === "disabled") { this._setOptionDisabled(value); }
			return this;
		}, _setOptionClasses: function(value) {
			var classKey, elements, currentElements; for (classKey in value) {
				currentElements = this.classesElementLookup[classKey]; if (value[classKey] === this.options.classes[classKey] || !currentElements || !currentElements.length) { continue; }
				elements = $(currentElements.get()); this._removeClass(currentElements, classKey); elements.addClass(this._classes({ element: elements, keys: classKey, classes: value, add: true }));
			}
		}, _setOptionDisabled: function(value) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value); if (value) { this._removeClass(this.hoverable, null, "ui-state-hover"); this._removeClass(this.focusable, null, "ui-state-focus"); } }, enable: function() { return this._setOptions({ disabled: false }); }, disable: function() { return this._setOptions({ disabled: true }); }, _classes: function(options) {
			var full = []; var that = this; options = $.extend({ element: this.element, classes: this.options.classes || {} }, options); function processClassString(classes, checkOption) {
				var current, i; for (i = 0; i < classes.length; i++) {
					current = that.classesElementLookup[classes[i]] || $(); if (options.add) { current = $($.unique(current.get().concat(options.element.get()))); } else { current = $(current.not(options.element).get()); }
					that.classesElementLookup[classes[i]] = current; full.push(classes[i]); if (checkOption && options.classes[classes[i]]) { full.push(options.classes[classes[i]]); }
				}
			}
			if (options.keys) { processClassString(options.keys.match(/\S+/g) || [], true); }
			if (options.extra) { processClassString(options.extra.match(/\S+/g) || []); }
			return full.join(" ");
		}, _removeClass: function(element, keys, extra) { return this._toggleClass(element, keys, extra, false); }, _addClass: function(element, keys, extra) { return this._toggleClass(element, keys, extra, true); }, _toggleClass: function(element, keys, extra, add) { add = (typeof add === "boolean") ? add : extra; var shift = (typeof element === "string" || element === null), options = { extra: shift ? keys : extra, keys: shift ? element : keys, element: shift ? this.element : element, add: add }; options.element.toggleClass(this._classes(options), add); return this; }, _on: function(suppressDisabledCheck, element, handlers) {
			var delegateElement; var instance = this; if (typeof suppressDisabledCheck !== "boolean") { handlers = element; element = suppressDisabledCheck; suppressDisabledCheck = false; }
			if (!handlers) { handlers = element; element = this.element; delegateElement = this.widget(); } else { element = delegateElement = $(element); this.bindings = this.bindings.add(element); }
			$.each(handlers, function(event, handler) {
				function handlerProxy() {
					if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) { return; }
					return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
				}
				if (typeof handler !== "string") { handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++; }
				var match = event.match(/^([\w:-]*)\s*(.*)$/); var eventName = match[1] + instance.eventNamespace; var selector = match[2]; if (selector) { delegateElement.on(eventName, selector, handlerProxy); } else { element.on(eventName, handlerProxy); }
			});
		}, _off: function(element, eventName) {
			eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") +
			this.eventNamespace; element.off(eventName).off(eventName); this.bindings = $(this.bindings.not(element).get()); this.focusable = $(this.focusable.not(element).get()); this.hoverable = $(this.hoverable.not(element).get());
		}, _delay: function(handler, delay) {
			function handlerProxy() { return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments); }
			var instance = this; return setTimeout(handlerProxy, delay || 0);
		}, _hoverable: function(element) { this.hoverable = this.hoverable.add(element); this._on(element, { mouseenter: function(event) { this._addClass($(event.currentTarget), null, "ui-state-hover"); }, mouseleave: function(event) { this._removeClass($(event.currentTarget), null, "ui-state-hover"); } }); }, _focusable: function(element) { this.focusable = this.focusable.add(element); this._on(element, { focusin: function(event) { this._addClass($(event.currentTarget), null, "ui-state-focus"); }, focusout: function(event) { this._removeClass($(event.currentTarget), null, "ui-state-focus"); } }); }, _trigger: function(type, event, data) {
			var prop, orig; var callback = this.options[type]; data = data || {}; event = $.Event(event); event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase(); event.target = this.element[0]; orig = event.originalEvent; if (orig) { for (prop in orig) { if (!(prop in event)) { event[prop] = orig[prop]; } } }
			this.element.trigger(event, data); return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
		}
	}; $.each({ show: "fadeIn", hide: "fadeOut" }, function(method, defaultEffect) {
		$.Widget.prototype["_" + method] = function(element, options, callback) {
			if (typeof options === "string") { options = { effect: options }; }
			var hasOptions; var effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect; options = options || {}; if (typeof options === "number") { options = { duration: options }; }
			hasOptions = !$.isEmptyObject(options); options.complete = callback; if (options.delay) { element.delay(options.delay); }
			if (hasOptions && $.effects && $.effects.effect[effectName]) { element[method](options); } else if (effectName !== method && element[effectName]) { element[effectName](options.duration, options.easing, callback); } else {
				element.queue(function(next) {
					$(this)[method](); if (callback) { callback.call(element[0]); }
					next();
				});
			}
		};
	}); return $.widget;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/accordion.js', ["jquery", "../version", "../keycode", "../unique-id", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	return $.widget("ui.accordion", {
		version: "@VERSION", options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: false, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function() {
			var options = this.options; this.prevShow = this.prevHide = $(); this._addClass("ui-accordion", "ui-widget ui-helper-reset"); this.element.attr("role", "tablist"); if (!options.collapsible && (options.active === false || options.active == null)) { options.active = 0; }
			this._processPanels(); if (options.active < 0) { options.active += this.headers.length; }
			this._refresh();
		}, _getCreateEventData: function() { return { header: this.active, panel: !this.active.length ? $() : this.active.next() }; }, _createIcons: function() { var icon, children, icons = this.options.icons; if (icons) { icon = $("<span>"); this._addClass(icon, "ui-accordion-header-icon", "ui-icon " + icons.header); icon.prependTo(this.headers); children = this.active.children(".ui-accordion-header-icon"); this._removeClass(children, icons.header)._addClass(children, null, icons.activeHeader)._addClass(this.headers, "ui-accordion-icons"); } }, _destroyIcons: function() { this._removeClass(this.headers, "ui-accordion-icons"); this.headers.children(".ui-accordion-header-icon").remove(); }, _destroy: function() { var contents; this.element.removeAttr("role"); this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(); this._destroyIcons(); contents = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(); if (this.options.heightStyle !== "content") { contents.css("height", ""); } }, _setOption: function(key, value) {
			if (key === "active") { this._activate(value); return; }
			if (key === "event") {
				if (this.options.event) { this._off(this.headers, this.options.event); }
				this._setupEvents(value);
			}
			this._super(key, value); if (key === "collapsible" && !value && this.options.active === false) { this._activate(0); }
			if (key === "icons") { this._destroyIcons(); if (value) { this._createIcons(); } }
		}, _setOptionDisabled: function(value) { this._super(value); this.element.attr("aria-disabled", value); this._toggleClass(null, "ui-state-disabled", !!value); this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!value); }, _keydown: function(event) {
			if (event.altKey || event.ctrlKey) { return; }
			var keyCode = $.ui.keyCode, length = this.headers.length, currentIndex = this.headers.index(event.target), toFocus = false; switch (event.keyCode) { case keyCode.RIGHT: case keyCode.DOWN: toFocus = this.headers[(currentIndex + 1) % length]; break; case keyCode.LEFT: case keyCode.UP: toFocus = this.headers[(currentIndex - 1 + length) % length]; break; case keyCode.SPACE: case keyCode.ENTER: this._eventHandler(event); break; case keyCode.HOME: toFocus = this.headers[0]; break; case keyCode.END: toFocus = this.headers[length - 1]; break; }
			if (toFocus) { $(event.target).attr("tabIndex", -1); $(toFocus).attr("tabIndex", 0); $(toFocus).trigger("focus"); event.preventDefault(); }
		}, _panelKeyDown: function(event) { if (event.keyCode === $.ui.keyCode.UP && event.ctrlKey) { $(event.currentTarget).prev().trigger("focus"); } }, refresh: function() {
			var options = this.options; this._processPanels(); if ((options.active === false && options.collapsible === true) || !this.headers.length) { options.active = false; this.active = $(); } else if (options.active === false) { this._activate(0); } else if (this.active.length && !$.contains(this.element[0], this.active[0])) { if (this.headers.length === this.headers.find(".ui-state-disabled").length) { options.active = false; this.active = $(); } else { this._activate(Math.max(0, options.active - 1)); } } else { options.active = this.headers.index(this.active); }
			this._destroyIcons(); this._refresh();
		}, _processPanels: function() { var prevHeaders = this.headers, prevPanels = this.panels; this.headers = this.element.find(this.options.header); this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"); this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(); this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"); if (prevPanels) { this._off(prevHeaders.not(this.headers)); this._off(prevPanels.not(this.panels)); } }, _refresh: function() {
			var maxHeight, options = this.options, heightStyle = options.heightStyle, parent = this.element.parent(); this.active = this._findActive(options.active); this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"); this._addClass(this.active.next(), "ui-accordion-content-active"); this.active.next().show(); this.headers.attr("role", "tab").each(function() { var header = $(this), headerId = header.uniqueId().attr("id"), panel = header.next(), panelId = panel.uniqueId().attr("id"); header.attr("aria-controls", panelId); panel.attr("aria-labelledby", headerId); }).next().attr("role", "tabpanel"); this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(); if (!this.active.length) { this.headers.eq(0).attr("tabIndex", 0); } else { this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }); }
			this._createIcons(); this._setupEvents(options.event); if (heightStyle === "fill") {
				maxHeight = parent.height(); this.element.siblings(":visible").each(function() {
					var elem = $(this), position = elem.css("position"); if (position === "absolute" || position === "fixed") { return; }
					maxHeight -= elem.outerHeight(true);
				}); this.headers.each(function() { maxHeight -= $(this).outerHeight(true); }); this.headers.next().each(function() {
					$(this).height(Math.max(0, maxHeight -
						$(this).innerHeight() + $(this).height()));
				}).css("overflow", "auto");
			} else if (heightStyle === "auto") { maxHeight = 0; this.headers.next().each(function() { maxHeight = Math.max(maxHeight, $(this).css("height", "").height()); }).height(maxHeight); }
		}, _activate: function(index) {
			var active = this._findActive(index)[0]; if (active === this.active[0]) { return; }
			active = active || this.active[0]; this._eventHandler({ target: active, currentTarget: active, preventDefault: $.noop });
		}, _findActive: function(selector) { return typeof selector === "number" ? this.headers.eq(selector) : $(); }, _setupEvents: function(event) {
			var events = { keydown: "_keydown" }; if (event) { $.each(event.split(" "), function(index, eventName) { events[eventName] = "_eventHandler"; }); }
			this._off(this.headers.add(this.headers.next())); this._on(this.headers, events); this._on(this.headers.next(), { keydown: "_panelKeyDown" }); this._hoverable(this.headers); this._focusable(this.headers);
		}, _eventHandler: function(event) {
			var activeChildren, clickedChildren, options = this.options, active = this.active, clicked = $(event.currentTarget), clickedIsActive = clicked[0] === active[0], collapsing = clickedIsActive && options.collapsible, toShow = collapsing ? $() : clicked.next(), toHide = active.next(), eventData = { oldHeader: active, oldPanel: toHide, newHeader: collapsing ? $() : clicked, newPanel: toShow }; event.preventDefault(); if ((clickedIsActive && !options.collapsible) || (this._trigger("beforeActivate", event, eventData) === false)) { return; }
			options.active = collapsing ? false : this.headers.index(clicked); this.active = clickedIsActive ? $() : clicked; this._toggle(eventData); this._removeClass(active, "ui-accordion-header-active", "ui-state-active"); if (options.icons) { activeChildren = active.children(".ui-accordion-header-icon"); this._removeClass(activeChildren, null, options.icons.activeHeader)._addClass(activeChildren, null, options.icons.header); }
			if (!clickedIsActive) {
				this._removeClass(clicked, "ui-accordion-header-collapsed")._addClass(clicked, "ui-accordion-header-active", "ui-state-active"); if (options.icons) { clickedChildren = clicked.children(".ui-accordion-header-icon"); this._removeClass(clickedChildren, null, options.icons.header)._addClass(clickedChildren, null, options.icons.activeHeader); }
				this._addClass(clicked.next(), "ui-accordion-content-active");
			}
		}, _toggle: function(data) {
			var toShow = data.newPanel, toHide = this.prevShow.length ? this.prevShow : data.oldPanel; this.prevShow.add(this.prevHide).stop(true, true); this.prevShow = toShow; this.prevHide = toHide; if (this.options.animate) { this._animate(toShow, toHide, data); } else { toHide.hide(); toShow.show(); this._toggleComplete(data); }
			toHide.attr({ "aria-hidden": "true" }); toHide.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }); if (toShow.length && toHide.length) { toHide.prev().attr({ "tabIndex": -1, "aria-expanded": "false" }); } else if (toShow.length) { this.headers.filter(function() { return parseInt($(this).attr("tabIndex"), 10) === 0; }).attr("tabIndex", -1); }
			toShow.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
		}, _animate: function(toShow, toHide, data) {
			var total, easing, duration, that = this, adjust = 0, boxSizing = toShow.css("box-sizing"), down = toShow.length && (!toHide.length || (toShow.index() < toHide.index())), animate = this.options.animate || {}, options = down && animate.down || animate, complete = function() { that._toggleComplete(data); }; if (typeof options === "number") { duration = options; }
			if (typeof options === "string") { easing = options; }
			easing = easing || options.easing || animate.easing; duration = duration || options.duration || animate.duration; if (!toHide.length) { return toShow.animate(this.showProps, duration, easing, complete); }
			if (!toShow.length) { return toHide.animate(this.hideProps, duration, easing, complete); }
			total = toShow.show().outerHeight(); toHide.animate(this.hideProps, { duration: duration, easing: easing, step: function(now, fx) { fx.now = Math.round(now); } }); toShow.hide().animate(this.showProps, { duration: duration, easing: easing, complete: complete, step: function(now, fx) { fx.now = Math.round(now); if (fx.prop !== "height") { if (boxSizing === "content-box") { adjust += fx.now; } } else if (that.options.heightStyle !== "content") { fx.now = Math.round(total - toHide.outerHeight() - adjust); adjust = 0; } } });
		}, _toggleComplete: function(data) {
			var toHide = data.oldPanel, prev = toHide.prev(); this._removeClass(toHide, "ui-accordion-content-active"); this._removeClass(prev, "ui-accordion-header-active")._addClass(prev, "ui-accordion-header-collapsed"); if (toHide.length) { toHide.parent()[0].className = toHide.parent()[0].className; }
			this._trigger("activate", null, data);
		}
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/menu.js', ["jquery", "../keycode", "../position", "../safe-active-element", "../unique-id", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	return $.widget("ui.menu", {
		version: "@VERSION", defaultElement: "<ul>", delay: 300, options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null }, _create: function() {
			this.activeMenu = this.element; this.mouseHandled = false; this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }); this._addClass("ui-menu", "ui-widget ui-widget-content"); this._on({
				"mousedown .ui-menu-item": function(event) { event.preventDefault(); }, "click .ui-menu-item": function(event) {
					var target = $(event.target); if (!this.mouseHandled && target.not(".ui-state-disabled").length) {
						this.select(event); if (!event.isPropagationStopped()) { this.mouseHandled = true; }
						if (target.has(".ui-menu").length) { this.expand(event); } else if (!this.element.is(":focus") && $($.ui.safeActiveElement(this.document[0])).closest(".ui-menu").length) { this.element.trigger("focus", [true]); if (this.active && this.active.parents(".ui-menu").length === 1) { clearTimeout(this.timer); } }
					}
				}, "mouseenter .ui-menu-item": function(event) {
					if (this.previousFilter) { return; }
					var actualTarget = $(event.target).closest(".ui-menu-item"), target = $(event.currentTarget); if (actualTarget[0] !== target[0]) { return; }
					this._removeClass(target.siblings().children(".ui-state-active"), null, "ui-state-active"); this.focus(event, target);
				}, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function(event, keepActiveItem) { var item = this.active || this.element.find(this.options.items).eq(0); if (!keepActiveItem) { this.focus(event, item); } }, blur: function(event) { this._delay(function() { if (!$.contains(this.element[0], $.ui.safeActiveElement(this.document[0]))) { this.collapseAll(event); } }); }, keydown: "_keydown"
			}); this.refresh(); this._on(this.document, {
				click: function(event) {
					if (this._closeOnDocumentClick(event)) { this.collapseAll(event); }
					this.mouseHandled = false;
				}
			});
		}, _destroy: function() { var items = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"), submenus = items.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup"); this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled " + "tabIndex").removeUniqueId().show(); submenus.children().each(function() { var elem = $(this); if (elem.data("ui-menu-submenu-caret")) { elem.remove(); } }); }, _keydown: function(event) {
			var match, prev, character, skip, preventDefault = true; switch (event.keyCode) {
				case $.ui.keyCode.PAGE_UP: this.previousPage(event); break; case $.ui.keyCode.PAGE_DOWN: this.nextPage(event); break; case $.ui.keyCode.HOME: this._move("first", "first", event); break; case $.ui.keyCode.END: this._move("last", "last", event); break; case $.ui.keyCode.UP: this.previous(event); break; case $.ui.keyCode.DOWN: this.next(event); break; case $.ui.keyCode.LEFT: this.collapse(event); break; case $.ui.keyCode.RIGHT: if (this.active && !this.active.is(".ui-state-disabled")) { this.expand(event); }
					break; case $.ui.keyCode.ENTER: case $.ui.keyCode.SPACE: this._activate(event); break; case $.ui.keyCode.ESCAPE: this.collapse(event); break; default: preventDefault = false; prev = this.previousFilter || ""; character = String.fromCharCode(event.keyCode); skip = false; clearTimeout(this.filterTimer); if (character === prev) { skip = true; } else { character = prev + character; }
					match = this._filterMenuItems(character); match = skip && match.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : match; if (!match.length) { character = String.fromCharCode(event.keyCode); match = this._filterMenuItems(character); }
					if (match.length) { this.focus(event, match); this.previousFilter = character; this.filterTimer = this._delay(function() { delete this.previousFilter; }, 1000); } else { delete this.previousFilter; }
			}
			if (preventDefault) { event.preventDefault(); }
		}, _activate: function(event) { if (!this.active.is(".ui-state-disabled")) { if (this.active.children("[aria-haspopup='true']").length) { this.expand(event); } else { this.select(event); } } }, refresh: function() { var menus, items, newSubmenus, newItems, newWrappers, that = this, icon = this.options.icons.submenu, submenus = this.element.find(this.options.menus); this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length); newSubmenus = submenus.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() { var menu = $(this), item = menu.prev(), submenuCaret = $("<span>").data("ui-menu-submenu-caret", true); that._addClass(submenuCaret, "ui-menu-icon", "ui-icon " + icon); item.attr("aria-haspopup", "true").prepend(submenuCaret); menu.attr("aria-labelledby", item.attr("id")); }); this._addClass(newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front"); menus = submenus.add(this.element); items = menus.find(this.options.items); items.not(".ui-menu-item").each(function() { var item = $(this); if (that._isDivider(item)) { that._addClass(item, "ui-menu-divider", "ui-widget-content"); } }); newItems = items.not(".ui-menu-item, .ui-menu-divider"); newWrappers = newItems.children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }); this._addClass(newItems, "ui-menu-item")._addClass(newWrappers, "ui-menu-item-wrapper"); items.filter(".ui-state-disabled").attr("aria-disabled", "true"); if (this.active && !$.contains(this.element[0], this.active[0])) { this.blur(); } }, _itemRole: function() { return { menu: "menuitem", listbox: "option" }[this.options.role]; }, _setOption: function(key, value) {
			if (key === "icons") { var icons = this.element.find(".ui-menu-icon"); this._removeClass(icons, null, this.options.icons.submenu)._addClass(icons, null, value.submenu); }
			this._super(key, value);
		}, _setOptionDisabled: function(value) { this._super(value); this.element.attr("aria-disabled", String(value)); this._toggleClass(null, "ui-state-disabled", !!value); }, focus: function(event, item) {
			var nested, focused, activeParent; this.blur(event, event && event.type === "focus"); this._scrollIntoView(item); this.active = item.first(); focused = this.active.children(".ui-menu-item-wrapper"); this._addClass(focused, null, "ui-state-active"); if (this.options.role) { this.element.attr("aria-activedescendant", focused.attr("id")); }
			activeParent = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"); this._addClass(activeParent, null, "ui-state-active"); if (event && event.type === "keydown") { this._close(); } else { this.timer = this._delay(function() { this._close(); }, this.delay); }
			nested = item.children(".ui-menu"); if (nested.length && event && (/^mouse/.test(event.type))) { this._startOpening(nested); }
			this.activeMenu = item.parent(); this._trigger("focus", event, { item: item });
		}, _scrollIntoView: function(item) { var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight; if (this._hasScroll()) { borderTop = parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0; paddingTop = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0; offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop; scroll = this.activeMenu.scrollTop(); elementHeight = this.activeMenu.height(); itemHeight = item.outerHeight(); if (offset < 0) { this.activeMenu.scrollTop(scroll + offset); } else if (offset + itemHeight > elementHeight) { this.activeMenu.scrollTop(scroll + offset - elementHeight + itemHeight); } } }, blur: function(event, fromFocus) {
			if (!fromFocus) { clearTimeout(this.timer); }
			if (!this.active) { return; }
			this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"); this.active = null; this._trigger("blur", event, { item: this.active });
		}, _startOpening: function(submenu) {
			clearTimeout(this.timer); if (submenu.attr("aria-hidden") !== "true") { return; }
			this.timer = this._delay(function() { this._close(); this._open(submenu); }, this.delay);
		}, _open: function(submenu) { var position = $.extend({ of: this.active }, this.options.position); clearTimeout(this.timer); this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden", "true"); submenu.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(position); }, collapseAll: function(event, all) {
			clearTimeout(this.timer); this.timer = this._delay(function() {
				var currentMenu = all ? this.element : $(event && event.target).closest(this.element.find(".ui-menu")); if (!currentMenu.length) { currentMenu = this.element; }
				this._close(currentMenu); this.blur(event); this.activeMenu = currentMenu;
			}, this.delay);
		}, _close: function(startMenu) {
			if (!startMenu) { startMenu = this.active ? this.active.parent() : this.element; }
			var active = startMenu.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-menu-item-wrapper"); this._removeClass(active, null, "ui-state-active");
		}, _closeOnDocumentClick: function(event) { return !$(event.target).closest(".ui-menu").length; }, _isDivider: function(item) { return !/[^\-\u2014\u2013\s]/.test(item.text()); }, collapse: function(event) { var newItem = this.active && this.active.parent().closest(".ui-menu-item", this.element); if (newItem && newItem.length) { this._close(); this.focus(event, newItem); } }, expand: function(event) { var newItem = this.active && this.active.children(".ui-menu ").find(this.options.items).first(); if (newItem && newItem.length) { this._open(newItem.parent()); this._delay(function() { this.focus(event, newItem); }); } }, next: function(event) { this._move("next", "first", event); }, previous: function(event) { this._move("prev", "last", event); }, isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length; }, isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length; }, _move: function(direction, filter, event) {
			var next; if (this.active) {
				if (direction === "first" || direction === "last") {
					next = this.active
					[direction === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1);
				} else {
					next = this.active
					[direction + "All"](".ui-menu-item").eq(0);
				}
			}
			if (!next || !next.length || !this.active) { next = this.activeMenu.find(this.options.items)[filter](); }
			this.focus(event, next);
		}, nextPage: function(event) {
			var item, base, height; if (!this.active) { this.next(event); return; }
			if (this.isLastItem()) { return; }
			if (this._hasScroll()) { base = this.active.offset().top; height = this.element.height(); this.active.nextAll(".ui-menu-item").each(function() { item = $(this); return item.offset().top - base - height < 0; }); this.focus(event, item); } else {
				this.focus(event, this.activeMenu.find(this.options.items)
				[!this.active ? "first" : "last"]());
			}
		}, previousPage: function(event) {
			var item, base, height; if (!this.active) { this.next(event); return; }
			if (this.isFirstItem()) { return; }
			if (this._hasScroll()) { base = this.active.offset().top; height = this.element.height(); this.active.prevAll(".ui-menu-item").each(function() { item = $(this); return item.offset().top - base + height > 0; }); this.focus(event, item); } else { this.focus(event, this.activeMenu.find(this.options.items).first()); }
		}, _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight"); }, select: function(event) {
			this.active = this.active || $(event.target).closest(".ui-menu-item"); var ui = { item: this.active }; if (!this.active.has(".ui-menu").length) { this.collapseAll(event, true); }
			this._trigger("select", event, ui);
		}, _filterMenuItems: function(character) { var escapedCharacter = character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), regex = new RegExp("^" + escapedCharacter, "i"); return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() { return regex.test($.trim($(this).children(".ui-menu-item-wrapper").text())); }); }
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/autocomplete.js', ["jquery", "./menu", "../keycode", "../position", "../safe-active-element", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	$.widget("ui.autocomplete", {
		version: "@VERSION", defaultElement: "<input>", options: { appendTo: null, autoFocus: false, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null }, requestIndex: 0, pending: 0, _create: function() {
			var suppressKeyPress, suppressKeyPressRepeat, suppressInput, nodeName = this.element[0].nodeName.toLowerCase(), isTextarea = nodeName === "textarea", isInput = nodeName === "input"; this.isMultiLine = isTextarea || !isInput && this.element.prop("isContentEditable"); this.valueMethod = this.element[isTextarea || isInput ? "val" : "text"]; this.isNewMenu = true; this._addClass("ui-autocomplete-input"); this.element.attr("autocomplete", "off"); this._on(this.element, {
				keydown: function(event) {
					if (this.element.prop("readOnly")) { suppressKeyPress = true; suppressInput = true; suppressKeyPressRepeat = true; return; }
					suppressKeyPress = false; suppressInput = false; suppressKeyPressRepeat = false; var keyCode = $.ui.keyCode; switch (event.keyCode) {
						case keyCode.PAGE_UP: suppressKeyPress = true; this._move("previousPage", event); break; case keyCode.PAGE_DOWN: suppressKeyPress = true; this._move("nextPage", event); break; case keyCode.UP: suppressKeyPress = true; this._keyEvent("previous", event); break; case keyCode.DOWN: suppressKeyPress = true; this._keyEvent("next", event); break; case keyCode.ENTER: if (this.menu.active) { suppressKeyPress = true; event.preventDefault(); this.menu.select(event); }
							break; case keyCode.TAB: if (this.menu.active) { this.menu.select(event); }
							break; case keyCode.ESCAPE: if (this.menu.element.is(":visible")) {
								if (!this.isMultiLine) { this._value(this.term); }
								this.close(event); event.preventDefault();
							}
							break; default: suppressKeyPressRepeat = true; this._searchTimeout(event); break;
					}
				}, keypress: function(event) {
					if (suppressKeyPress) {
						suppressKeyPress = false; if (!this.isMultiLine || this.menu.element.is(":visible")) { event.preventDefault(); }
						return;
					}
					if (suppressKeyPressRepeat) { return; }
					var keyCode = $.ui.keyCode; switch (event.keyCode) { case keyCode.PAGE_UP: this._move("previousPage", event); break; case keyCode.PAGE_DOWN: this._move("nextPage", event); break; case keyCode.UP: this._keyEvent("previous", event); break; case keyCode.DOWN: this._keyEvent("next", event); break; }
				}, input: function(event) {
					if (suppressInput) { suppressInput = false; event.preventDefault(); return; }
					this._searchTimeout(event);
				}, focus: function() { this.selectedItem = null; this.previous = this._value(); }, blur: function(event) {
					if (this.cancelBlur) { delete this.cancelBlur; return; }
					clearTimeout(this.searching); this.close(event); this._change(event);
				}
			}); this._initSource(); this.menu = $("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"); this._addClass(this.menu.element, "ui-autocomplete", "ui-front"); this._on(this.menu.element, {
				mousedown: function(event) { event.preventDefault(); this.cancelBlur = true; this._delay(function() { delete this.cancelBlur; if (this.element[0] !== $.ui.safeActiveElement(this.document[0])) { this.element.trigger("focus"); } }); }, menufocus: function(event, ui) {
					var label, item; if (this.isNewMenu) { this.isNewMenu = false; if (event.originalEvent && /^mouse/.test(event.originalEvent.type)) { this.menu.blur(); this.document.one("mousemove", function() { $(event.target).trigger(event.originalEvent); }); return; } }
					item = ui.item.data("ui-autocomplete-item"); if (false !== this._trigger("focus", event, { item: item })) { if (event.originalEvent && /^key/.test(event.originalEvent.type)) { this._value(item.value); } }
					label = ui.item.attr("aria-label") || item.value; if (label && $.trim(label).length) { this.liveRegion.children().hide(); $("<div>").text(label).appendTo(this.liveRegion); }
				}, menuselect: function(event, ui) {
					var item = ui.item.data("ui-autocomplete-item"), previous = this.previous; if (this.element[0] !== $.ui.safeActiveElement(this.document[0])) { this.element.trigger("focus"); this.previous = previous; this._delay(function() { this.previous = previous; this.selectedItem = item; }); }
					if (false !== this._trigger("select", event, { item: item })) { this._value(item.value); }
					this.term = this._value(); this.close(event); this.selectedItem = item;
				}
			}); this.liveRegion = $("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body); this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"); this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete"); } });
		}, _destroy: function() { clearTimeout(this.searching); this.element.removeAttr("autocomplete"); this.menu.element.remove(); this.liveRegion.remove(); }, _setOption: function(key, value) {
			this._super(key, value); if (key === "source") { this._initSource(); }
			if (key === "appendTo") { this.menu.element.appendTo(this._appendTo()); }
			if (key === "disabled" && value && this.xhr) { this.xhr.abort(); }
		}, _isEventTargetInWidget: function(event) { var menuElement = this.menu.element[0]; return event.target === this.element[0] || event.target === menuElement || $.contains(menuElement, event.target); }, _closeOnClickOutside: function(event) { if (!this._isEventTargetInWidget(event)) { this.close(); } }, _appendTo: function() {
			var element = this.options.appendTo; if (element) { element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0); }
			if (!element || !element[0]) { element = this.element.closest(".ui-front, dialog"); }
			if (!element.length) { element = this.document[0].body; }
			return element;
		}, _initSource: function() {
			var array, url, that = this; if ($.isArray(this.options.source)) { array = this.options.source; this.source = function(request, response) { response($.ui.autocomplete.filter(array, request.term)); }; } else if (typeof this.options.source === "string") {
				url = this.options.source; this.source = function(request, response) {
					if (that.xhr) { that.xhr.abort(); }
					that.xhr = $.ajax({ url: url, data: request, dataType: "json", success: function(data) { response(data); }, error: function() { response([]); } });
				};
			} else { this.source = this.options.source; }
		}, _searchTimeout: function(event) { clearTimeout(this.searching); this.searching = this._delay(function() { var equalValues = this.term === this._value(), menuVisible = this.menu.element.is(":visible"), modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey; if (!equalValues || (equalValues && !menuVisible && !modifierKey)) { this.selectedItem = null; this.search(null, event); } }, this.options.delay); }, search: function(value, event) {
			value = value != null ? value : this._value(); this.term = this._value(); if (value.length < this.options.minLength) { return this.close(event); }
			if (this._trigger("search", event) === false) { return; }
			return this._search(value);
		}, _search: function(value) { this.pending++; this._addClass("ui-autocomplete-loading"); this.cancelSearch = false; this.source({ term: value }, this._response()); }, _response: function() {
			var index = ++this.requestIndex; return $.proxy(function(content) {
				if (index === this.requestIndex) { this.__response(content); }
				this.pending--; if (!this.pending) { this._removeClass("ui-autocomplete-loading"); }
			}, this);
		}, __response: function(content) {
			if (content) { content = this._normalize(content); }
			this._trigger("response", null, { content: content }); if (!this.options.disabled && content && content.length && !this.cancelSearch) { this._suggest(content); this._trigger("open"); } else { this._close(); }
		}, close: function(event) { this.cancelSearch = true; this._close(event); }, _close: function(event) { this._off(this.document, "mousedown"); if (this.menu.element.is(":visible")) { this.menu.element.hide(); this.menu.blur(); this.isNewMenu = true; this._trigger("close", event); } }, _change: function(event) { if (this.previous !== this._value()) { this._trigger("change", event, { item: this.selectedItem }); } }, _normalize: function(items) {
			if (items.length && items[0].label && items[0].value) { return items; }
			return $.map(items, function(item) {
				if (typeof item === "string") { return { label: item, value: item }; }
				return $.extend({}, item, { label: item.label || item.value, value: item.value || item.label });
			});
		}, _suggest: function(items) {
			var ul = this.menu.element.empty(); this._renderMenu(ul, items); this.isNewMenu = true; this.menu.refresh(); ul.show(); this._resizeMenu(); ul.position($.extend({ of: this.element }, this.options.position)); if (this.options.autoFocus) { this.menu.next(); }
			this._on(this.document, { mousedown: "_closeOnClickOutside" });
		}, _resizeMenu: function() { var ul = this.menu.element; ul.outerWidth(Math.max(ul.width("").outerWidth() + 1, this.element.outerWidth())); }, _renderMenu: function(ul, items) { var that = this; $.each(items, function(index, item) { that._renderItemData(ul, item); }); }, _renderItemData: function(ul, item) { return this._renderItem(ul, item).data("ui-autocomplete-item", item); }, _renderItem: function(ul, item) { return $("<li>").append($("<div>").text(item.label)).appendTo(ul); }, _move: function(direction, event) {
			if (!this.menu.element.is(":visible")) { this.search(null, event); return; }
			if (this.menu.isFirstItem() && /^previous/.test(direction) || this.menu.isLastItem() && /^next/.test(direction)) {
				if (!this.isMultiLine) { this._value(this.term); }
				this.menu.blur(); return;
			}
			this.menu[direction](event);
		}, widget: function() { return this.menu.element; }, _value: function() { return this.valueMethod.apply(this.element, arguments); }, _keyEvent: function(keyEvent, event) { if (!this.isMultiLine || this.menu.element.is(":visible")) { this._move(keyEvent, event); event.preventDefault(); } }
	}); $.extend($.ui.autocomplete, { escapeRegex: function(value) { return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"); }, filter: function(array, term) { var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i"); return $.grep(array, function(value) { return matcher.test(value.label || value.value || value); }); } }); $.widget("ui.autocomplete", $.ui.autocomplete, {
		options: { messages: { noResults: "No search results.", results: function(amount) { return amount + (amount > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."; } } }, __response: function(content) {
			var message; this._superApply(arguments); if (this.options.disabled || this.cancelSearch) { return; }
			if (content && content.length) { message = this.options.messages.results(content.length); } else { message = this.options.messages.noResults; }
			this.liveRegion.children().hide(); $("<div>").text(message).appendTo(this.liveRegion);
		}
	}); return $.ui.autocomplete;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/controlgroup.js', ["jquery", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	return $.widget("ui.controlgroup", {
		version: "@VERSION", defaultElement: "<div>", options: { direction: "horizontal", disabled: null, onlyVisible: true, items: { "button": "input[type=button], input[type=submit], input[type=reset], button, a", "controlgroupLabel": ".ui-controlgroup-label", "checkboxradio": "input[type='checkbox'], input[type='radio']", "selectmenu": "select", "spinner": ".ui-spinner-input" } }, _create: function() { this._enhance(); }, _enhance: function() { this.element.attr("role", "toolbar"); this.refresh(); }, _destroy: function() { this._callChildMethod("destroy"); this.childWidgets.removeData("ui-controlgroup-data"); this.element.removeAttr("role"); if (this.options.items.controlgroupLabel) { this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap(); } }, _initWidgets: function() {
			var that = this, childWidgets = []; $.each(this.options.items, function(widget, selector) {
				var labels; var options = {}; if (!selector) { return; }
				if (widget === "controlgroupLabel") { labels = that.element.find(selector); labels.each(function() { $(this).contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>"); }); that._addClass(labels, null, "ui-widget ui-widget-content ui-state-default"); childWidgets = childWidgets.concat(labels.get()); return; }
				if (!$.fn[widget]) { return; }
				if (that["_" + widget + "Options"]) { options = that["_" + widget + "Options"]("middle"); }
				that.element.find(selector)[widget](options).each(function() { var element = $(this); var widgetElement = element[widget]("widget"); $.data(widgetElement[0], "ui-controlgroup-data", element[widget]("instance")); childWidgets.push(widgetElement[0]); });
			}); this.childWidgets = $($.unique(childWidgets)); this._addClass(this.childWidgets, "ui-controlgroup-item");
		}, _callChildMethod: function(method) { this.childWidgets.each(function() { var element = $(this), data = element.data("ui-controlgroup-data"); if (data && data[method]) { data[method](); } }); }, _updateCornerClass: function(element, position) { var remove = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right"; var add = this._buildSimpleOptions(position, "label").classes.label; this._removeClass(element, null, remove); this._addClass(element, null, add); }, _buildSimpleOptions: function(position, key) { var direction = this.options.direction === "vertical"; var result = { classes: {} }; result.classes[key] = { "middle": null, "first": "ui-corner-" + (direction ? "top" : "left"), "last": "ui-corner-" + (direction ? "bottom" : "right") }[position]; return result; }, _spinnerOptions: function(position) { var options = this._buildSimpleOptions(position, "ui-spinner"); options.classes["ui-spinner-up"] = ""; options.classes["ui-spinner-down"] = ""; return options; }, _buttonOptions: function(position) { return this._buildSimpleOptions(position, "ui-button"); }, _checkboxradioOptions: function(position) { return this._buildSimpleOptions(position, "ui-checkboxradio-label"); }, _selectmenuOptions: function(position) { var direction = this.options.direction === "vertical"; return { width: direction ? "auto" : false, classes: { middle: { "ui-selectmenu-button-open": null, "ui-selectmenu-button-closed": null }, first: { "ui-selectmenu-button-open": "ui-corner-" + (direction ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (direction ? "top" : "left") }, last: { "ui-selectmenu-button-open": direction ? null : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (direction ? "bottom" : "right") } }[position] }; }, _setOption: function(key, value) {
			if (key === "direction") { this._removeClass("ui-controlgroup-" + this.options.direction); }
			this._super(key, value); if (key === "disabled") { this._callChildMethod(value ? "disable" : "enable"); return; }
			this.refresh();
		}, refresh: function() {
			var children, that = this; this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction); if (this.options.direction === "horizontal") { this._addClass(null, "ui-helper-clearfix"); }
			this._initWidgets(); children = this.childWidgets; if (this.options.onlyVisible) { children = children.filter(":visible"); }
			if (children.length) { $.each(["first", "last"], function(index, value) { var instance = children[value]().data("ui-controlgroup-data"); if (instance && that["_" + instance.widgetName + "Options"]) { instance.element[instance.widgetName](that["_" + instance.widgetName + "Options"](value)); } else { that._updateCornerClass(children[value](), value); } }); this._callChildMethod("refresh"); }
		}
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/checkboxradio.js', ["jquery", "../escape-selector", "../form-reset-mixin", "../labels", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	$.widget("ui.checkboxradio", [$.ui.formResetMixin, {
		version: "@VERSION", options: { disabled: null, label: null, icon: true, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } }, _getCreateOptions: function() {
			var disabled, labels; var that = this; var options = this._super() || {}; this._readType(); labels = this.element.labels(); this.label = $(labels[labels.length - 1]); if (!this.label.length) { $.error("No label found for checkboxradio widget"); }
			this.originalLabel = ""; this.label.contents().not(this.element).each(function() { that.originalLabel += this.nodeType === 3 ? $(this).text() : this.outerHTML; }); if (this.originalLabel) { options.label = this.originalLabel; }
			disabled = this.element[0].disabled; if (disabled != null) { options.disabled = disabled; }
			return options;
		}, _create: function() {
			var checked = this.element[0].checked; this._bindFormResetHandler(); if (this.options.disabled == null) { this.options.disabled = this.element[0].disabled; }
			this._setOption("disabled", this.options.disabled); this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"); this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"); if (this.type === "radio") { this._addClass(this.label, "ui-checkboxradio-radio-label"); }
			if (this.options.label && this.options.label !== this.originalLabel) { this._updateLabel(); } else if (this.originalLabel) { this.options.label = this.originalLabel; }
			this._enhance(); if (checked) { this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"); this._addClass(this.icon, null, "ui-state-hover"); }
			this._on({ change: "_toggleClasses", focus: function() { this._addClass(this.label, null, "ui-state-focus ui-visual-focus"); }, blur: function() { this._removeClass(this.label, null, "ui-state-focus ui-visual-focus"); } });
		}, _readType: function() { var nodeName = this.element[0].nodeName.toLowerCase(); this.type = this.element[0].type; if (nodeName !== "input" || !/radio|checkbox/.test(this.type)) { $.error("Can't create checkboxradio on element.nodeName=" + nodeName + " and element.type=" + this.type); } }, _enhance: function() { this._updateIcon(this.element[0].checked); }, widget: function() { return this.label; }, _getRadioGroup: function() {
			var group; var name = this.element[0].name; var nameSelector = "input[name='" + $.ui.escapeSelector(name) + "']"; if (!name) { return $([]); }
			if (this.form.length) { group = $(this.form[0].elements).filter(nameSelector); } else { group = $(nameSelector).filter(function() { return $(this).form().length === 0; }); }
			return group.not(this.element);
		}, _toggleClasses: function() {
			var checked = this.element[0].checked; this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked); if (this.options.icon && this.type === "checkbox") { this._toggleClass(this.icon, null, "ui-icon-check ui-state-highlight", checked)._toggleClass(this.icon, null, "ui-icon-blank", !checked); }
			if (this.type === "radio") { this._getRadioGroup().each(function() { var instance = $(this).checkboxradio("instance"); if (instance) { instance._removeClass(instance.label, "ui-checkboxradio-checked", "ui-state-active"); } }); }
		}, _destroy: function() { this._unbindFormResetHandler(); if (this.icon) { this.icon.remove(); this.iconSpace.remove(); } }, _setOption: function(key, value) {
			if (key === "label" && !value) { return; }
			this._super(key, value); if (key === "disabled") { this._toggleClass(this.label, null, "ui-state-disabled", value); this.element[0].disabled = value; return; }
			this.refresh();
		}, _updateIcon: function(checked) {
			var toAdd = "ui-icon ui-icon-background "; if (this.options.icon) {
				if (!this.icon) { this.icon = $("<span>"); this.iconSpace = $("<span> </span>"); this._addClass(this.iconSpace, "ui-checkboxradio-icon-space"); }
				if (this.type === "checkbox") { toAdd += checked ? "ui-icon-check ui-state-highlight" : "ui-icon-blank"; this._removeClass(this.icon, null, checked ? "ui-icon-blank" : "ui-icon-check"); } else { toAdd += "ui-icon-blank"; }
				this._addClass(this.icon, "ui-checkboxradio-icon", toAdd); if (!checked) { this._removeClass(this.icon, null, "ui-icon-check ui-state-highlight"); }
				this.icon.prependTo(this.label).after(this.iconSpace);
			} else if (this.icon !== undefined) { this.icon.remove(); this.iconSpace.remove(); delete this.icon; }
		}, _updateLabel: function() { this.label.contents().not(this.element.add(this.icon).add(this.iconSpace)).remove(); this.label.append(this.options.label); }, refresh: function() {
			var checked = this.element[0].checked, isDisabled = this.element[0].disabled; this._updateIcon(checked); this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked); if (this.options.label !== null) { this._updateLabel(); }
			if (isDisabled !== this.options.disabled) { this._setOptions({ "disabled": isDisabled }); }
		}
	}]); return $.ui.checkboxradio;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/button', ["jquery", "./controlgroup", "./checkboxradio", "../keycode", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	$.widget("ui.button", {
		version: "@VERSION", defaultElement: "<button>", options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: true }, _getCreateOptions: function() {
			var disabled, options = this._super() || {}; this.isInput = this.element.is("input"); disabled = this.element[0].disabled; if (disabled != null) { options.disabled = disabled; }
			this.originalLabel = this.isInput ? this.element.val() : this.element.html(); if (this.originalLabel) { options.label = this.originalLabel; }
			return options;
		}, _create: function() {
			if (!this.option.showLabel & !this.options.icon) { this.options.showLabel = true; }
			if (this.options.disabled == null) { this.options.disabled = this.element[0].disabled || false; }
			this.hasTitle = !!this.element.attr("title"); if (this.options.label && this.options.label !== this.originalLabel) { if (this.isInput) { this.element.val(this.options.label); } else { this.element.html(this.options.label); } }
			this._addClass("ui-button", "ui-widget"); this._setOption("disabled", this.options.disabled); this._enhance(); if (this.element.is("a")) { this._on({ "keyup": function(event) { if (event.keyCode === $.ui.keyCode.SPACE) { event.preventDefault(); if (this.element[0].click) { this.element[0].click(); } else { this.element.trigger("click"); } } } }); }
		}, _enhance: function() {
			if (!this.element.is("button")) { this.element.attr("role", "button"); }
			if (this.options.icon) { this._updateIcon("icon", this.options.icon); this._updateTooltip(); }
		}, _updateTooltip: function() { this.title = this.element.attr("title"); if (!this.options.showLabel && !this.title) { this.element.attr("title", this.options.label); } }, _updateIcon: function(option, value) {
			var icon = option !== "iconPosition", position = icon ? this.options.iconPosition : value, displayBlock = position === "top" || position === "bottom"; if (!this.icon) { this.icon = $("<span>"); this._addClass(this.icon, "ui-button-icon", "ui-icon"); if (!this.options.showLabel) { this._addClass("ui-button-icon-only"); } } else if (icon) { this._removeClass(this.icon, null, this.options.icon); }
			if (icon) { this._addClass(this.icon, null, value); }
			this._attachIcon(position); if (displayBlock) { this._addClass(this.icon, null, "ui-widget-icon-block"); if (this.iconSpace) { this.iconSpace.remove(); } } else {
				if (!this.iconSpace) { this.iconSpace = $("<span> </span>"); this._addClass(this.iconSpace, "ui-button-icon-space"); }
				this._removeClass(this.icon, null, "ui-wiget-icon-block"); this._attachIconSpace(position);
			}
		}, _destroy: function() {
			this.element.removeAttr("role"); if (this.icon) { this.icon.remove(); }
			if (this.iconSpace) { this.iconSpace.remove(); }
			if (!this.hasTitle) { this.element.removeAttr("title"); }
		}, _attachIconSpace: function(iconPosition) { this.icon[/^(?:end|bottom)/.test(iconPosition) ? "before" : "after"](this.iconSpace); }, _attachIcon: function(iconPosition) { this.element[/^(?:end|bottom)/.test(iconPosition) ? "append" : "prepend"](this.icon); }, _setOptions: function(options) {
			var newShowLabel = options.showLabel === undefined ? this.options.showLabel : options.showLabel, newIcon = options.icon === undefined ? this.options.icon : options.icon; if (!newShowLabel && !newIcon) { options.showLabel = true; }
			this._super(options);
		}, _setOption: function(key, value) {
			if (key === "icon") { if (value) { this._updateIcon(key, value); } else if (this.icon) { this.icon.remove(); if (this.iconSpace) { this.iconSpace.remove(); } } }
			if (key === "iconPosition") { this._updateIcon(key, value); }
			if (key === "showLabel") { this._toggleClass("ui-button-icon-only", null, !value); this._updateTooltip(); }
			if (key === "label") { if (this.isInput) { this.element.val(value); } else { this.element.html(value); if (this.icon) { this._attachIcon(this.options.iconPosition); this._attachIconSpace(this.options.iconPosition); } } }
			this._super(key, value); if (key === "disabled") { this._toggleClass(null, "ui-state-disabled", value); this.element[0].disabled = value; if (value) { this.element.blur(); } }
		}, refresh: function() {
			var isDisabled = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled"); if (isDisabled !== this.options.disabled) { this._setOptions({ disabled: isDisabled }); }
			this._updateTooltip();
		}
	}); if ($.uiBackCompat !== false) {
		$.widget("ui.button", $.ui.button, {
			options: { text: true, icons: { primary: null, secondary: null } }, _create: function() {
				if (this.options.showLabel && !this.options.text) { this.options.showLabel = this.options.text; }
				if (!this.options.showLabel && this.options.text) { this.options.text = this.options.showLabel; }
				if (!this.options.icon && (this.options.icons.primary || this.options.icons.secondary)) { if (this.options.icons.primary) { this.options.icon = this.options.icons.primary; } else { this.options.icon = this.options.icons.secondary; this.options.iconPosition = "end"; } } else if (this.options.icon) { this.options.icons.primary = this.options.icon; }
				this._super();
			}, _setOption: function(key, value) {
				if (key === "text") { this._super("showLabel", value); return; }
				if (key === "showLabel") { this.options.text = value; }
				if (key === "icon") { this.options.icons.primary = value; }
				if (key === "icons") { if (value.primary) { this._super("icon", value.primary); this._super("iconPosition", "beginning"); } else if (value.secondary) { this._super("icon", value.secondary); this._super("iconPosition", "end"); } }
				this._superApply(arguments);
			}
		}); $.fn.button = (function(orig) {
			return function() {
				if (!this.length || (this.length && this[0].tagName !== "INPUT") || (this.length && this[0].tagName === "INPUT" && (this.attr("type") !== "checkbox" && this.attr("type") !== "radio"))) { return orig.apply(this, arguments); }
				if (!$.ui.checkboxradio) { $.error("Checkboxradio widget missing"); }
				if (arguments.length === 0) { return this.checkboxradio({ "icon": false }); }
				return this.checkboxradio.apply(this, arguments);
			};
		})($.fn.button); $.fn.buttonset = function() {
			if (!$.ui.controlgroup) { $.error("Controlgroup widget missing"); }
			if (arguments[0] === "option" && arguments[1] === "items" && arguments[2]) { return this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]); }
			if (arguments[0] === "option" && arguments[1] === "items") { return this.controlgroup.apply(this, [arguments[0], "items.button"]); }
			if (typeof arguments[0] === "object" && arguments[0].items) { arguments[0].items = { button: arguments[0].items }; }
			return this.controlgroup.apply(this, arguments);
		};
	}
	return $.ui.button;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/datepicker.js', ["jquery", "../version", "../keycode"], factory); } else { factory(jQuery); } }(function($) {
	$.extend($.ui, { datepicker: { version: "@VERSION" } }); var datepicker_instActive; function datepicker_getZindex(elem) {
		var position, value; while (elem.length && elem[0] !== document) {
			position = elem.css("position"); if (position === "absolute" || position === "relative" || position === "fixed") { value = parseInt(elem.css("zIndex"), 10); if (!isNaN(value) && value !== 0) { return value; } }
			elem = elem.parent();
		}
		return 0;
	}
	function Datepicker() { this._curInst = null; this._keyEvent = false; this._disabledInputs = []; this._datepickerShowing = false; this._inDialog = false; this._mainDivId = "ui-datepicker-div"; this._inlineClass = "ui-datepicker-inline"; this._appendClass = "ui-datepicker-append"; this._triggerClass = "ui-datepicker-trigger"; this._dialogClass = "ui-datepicker-dialog"; this._disableClass = "ui-datepicker-disabled"; this._unselectableClass = "ui-datepicker-unselectable"; this._currentClass = "ui-datepicker-current-day"; this._dayOverClass = "ui-datepicker-days-cell-over"; this.regional = []; this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: false, showMonthAfterYear: false, yearSuffix: "" }; this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: false, hideIfNoPrevNext: false, navigationAsDateFormat: false, gotoCurrent: false, changeMonth: false, changeYear: false, yearRange: "c-10:c+10", showOtherMonths: false, selectOtherMonths: false, showWeek: false, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: true, showButtonPanel: false, autoSize: false, disabled: false }; $.extend(this._defaults, this.regional[""]); this.regional.en = $.extend(true, {}, this.regional[""]); this.regional["en-US"] = $.extend(true, {}, this.regional.en); this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")); }
	$.extend(Datepicker.prototype, {
		markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function() { return this.dpDiv; }, setDefaults: function(settings) { datepicker_extendRemove(this._defaults, settings || {}); return this; }, _attachDatepicker: function(target, settings) {
			var nodeName, inline, inst; nodeName = target.nodeName.toLowerCase(); inline = (nodeName === "div" || nodeName === "span"); if (!target.id) { this.uuid += 1; target.id = "dp" + this.uuid; }
			inst = this._newInst($(target), inline); inst.settings = $.extend({}, settings || {}); if (nodeName === "input") { this._connectDatepicker(target, inst); } else if (inline) { this._inlineDatepicker(target, inst); }
		}, _newInst: function(target, inline) { var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: id, input: target, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: inline, dpDiv: (!inline ? this.dpDiv : datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))) }; }, _connectDatepicker: function(target, inst) {
			var input = $(target); inst.append = $([]); inst.trigger = $([]); if (input.hasClass(this.markerClassName)) { return; }
			this._attachments(input, inst); input.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp); this._autoSize(inst); $.data(target, "datepicker", inst); if (inst.settings.disabled) { this._disableDatepicker(target); }
		}, _attachments: function(input, inst) {
			var showOn, buttonText, buttonImage, appendText = this._get(inst, "appendText"), isRTL = this._get(inst, "isRTL"); if (inst.append) { inst.append.remove(); }
			if (appendText) { inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>"); input[isRTL ? "before" : "after"](inst.append); }
			input.off("focus", this._showDatepicker); if (inst.trigger) { inst.trigger.remove(); }
			showOn = this._get(inst, "showOn"); if (showOn === "focus" || showOn === "both") { input.on("focus", this._showDatepicker); }
			if (showOn === "button" || showOn === "both") {
				buttonText = this._get(inst, "buttonText"); buttonImage = this._get(inst, "buttonImage"); inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({ src: buttonImage, alt: buttonText, title: buttonText }) : $("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage ? buttonText : $("<img/>").attr({ src: buttonImage, alt: buttonText, title: buttonText }))); input[isRTL ? "before" : "after"](inst.trigger); inst.trigger.on("click", function() {
					if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) { $.datepicker._hideDatepicker(); } else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) { $.datepicker._hideDatepicker(); $.datepicker._showDatepicker(input[0]); } else { $.datepicker._showDatepicker(input[0]); }
					return false;
				});
			}
		}, _autoSize: function(inst) {
			if (this._get(inst, "autoSize") && !inst.inline) {
				var findMax, max, maxI, i, date = new Date(2009, 12 - 1, 20), dateFormat = this._get(inst, "dateFormat"); if (dateFormat.match(/[DM]/)) {
					findMax = function(names) {
						max = 0; maxI = 0; for (i = 0; i < names.length; i++) { if (names[i].length > max) { max = names[i].length; maxI = i; } }
						return maxI;
					}; date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort")))); date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - date.getDay());
				}
				inst.input.attr("size", this._formatDate(inst, date).length);
			}
		}, _inlineDatepicker: function(target, inst) {
			var divSpan = $(target); if (divSpan.hasClass(this.markerClassName)) { return; }
			divSpan.addClass(this.markerClassName).append(inst.dpDiv); $.data(target, "datepicker", inst); this._setDate(inst, this._getDefaultDate(inst), true); this._updateDatepicker(inst); this._updateAlternate(inst); if (inst.settings.disabled) { this._disableDatepicker(target); }
			inst.dpDiv.css("display", "block");
		}, _dialogDatepicker: function(input, date, onSelect, settings, pos) {
			var id, browserWidth, browserHeight, scrollX, scrollY, inst = this._dialogInst; if (!inst) { this.uuid += 1; id = "dp" + this.uuid; this._dialogInput = $("<input type='text' id='" + id + "' style='position: absolute; top: -100px; width: 0px;'/>"); this._dialogInput.on("keydown", this._doKeyDown); $("body").append(this._dialogInput); inst = this._dialogInst = this._newInst(this._dialogInput, false); inst.settings = {}; $.data(this._dialogInput[0], "datepicker", inst); }
			datepicker_extendRemove(inst.settings, settings || {}); date = (date && date.constructor === Date ? this._formatDate(inst, date) : date); this._dialogInput.val(date); this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null); if (!this._pos) { browserWidth = document.documentElement.clientWidth; browserHeight = document.documentElement.clientHeight; scrollX = document.documentElement.scrollLeft || document.body.scrollLeft; scrollY = document.documentElement.scrollTop || document.body.scrollTop; this._pos = [(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY]; }
			this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px"); inst.settings.onSelect = onSelect; this._inDialog = true; this.dpDiv.addClass(this._dialogClass); this._showDatepicker(this._dialogInput[0]); if ($.blockUI) { $.blockUI(this.dpDiv); }
			$.data(this._dialogInput[0], "datepicker", inst); return this;
		}, _destroyDatepicker: function(target) {
			var nodeName, $target = $(target), inst = $.data(target, "datepicker"); if (!$target.hasClass(this.markerClassName)) { return; }
			nodeName = target.nodeName.toLowerCase(); $.removeData(target, "datepicker"); if (nodeName === "input") { inst.append.remove(); inst.trigger.remove(); $target.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp); } else if (nodeName === "div" || nodeName === "span") { $target.removeClass(this.markerClassName).empty(); }
			if (datepicker_instActive === inst) { datepicker_instActive = null; }
		}, _enableDatepicker: function(target) {
			var nodeName, inline, $target = $(target), inst = $.data(target, "datepicker"); if (!$target.hasClass(this.markerClassName)) { return; }
			nodeName = target.nodeName.toLowerCase(); if (nodeName === "input") { target.disabled = false; inst.trigger.filter("button").each(function() { this.disabled = false; }).end().filter("img").css({ opacity: "1.0", cursor: "" }); } else if (nodeName === "div" || nodeName === "span") { inline = $target.children("." + this._inlineClass); inline.children().removeClass("ui-state-disabled"); inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false); }
			this._disabledInputs = $.map(this._disabledInputs, function(value) { return (value === target ? null : value); });
		}, _disableDatepicker: function(target) {
			var nodeName, inline, $target = $(target), inst = $.data(target, "datepicker"); if (!$target.hasClass(this.markerClassName)) { return; }
			nodeName = target.nodeName.toLowerCase(); if (nodeName === "input") { target.disabled = true; inst.trigger.filter("button").each(function() { this.disabled = true; }).end().filter("img").css({ opacity: "0.5", cursor: "default" }); } else if (nodeName === "div" || nodeName === "span") { inline = $target.children("." + this._inlineClass); inline.children().addClass("ui-state-disabled"); inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true); }
			this._disabledInputs = $.map(this._disabledInputs, function(value) { return (value === target ? null : value); }); this._disabledInputs[this._disabledInputs.length] = target;
		}, _isDisabledDatepicker: function(target) {
			if (!target) { return false; }
			for (var i = 0; i < this._disabledInputs.length; i++) { if (this._disabledInputs[i] === target) { return true; } }
			return false;
		}, _getInst: function(target) {
			try { return $.data(target, "datepicker"); }
			catch (err) { throw "Missing instance data for this datepicker"; }
		}, _optionDatepicker: function(target, name, value) {
			var settings, date, minDate, maxDate, inst = this._getInst(target); if (arguments.length === 2 && typeof name === "string") { return (name === "defaults" ? $.extend({}, $.datepicker._defaults) : (inst ? (name === "all" ? $.extend({}, inst.settings) : this._get(inst, name)) : null)); }
			settings = name || {}; if (typeof name === "string") { settings = {}; settings[name] = value; }
			if (inst) {
				if (this._curInst === inst) { this._hideDatepicker(); }
				date = this._getDateDatepicker(target, true); minDate = this._getMinMaxDate(inst, "min"); maxDate = this._getMinMaxDate(inst, "max"); datepicker_extendRemove(inst.settings, settings); if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) { inst.settings.minDate = this._formatDate(inst, minDate); }
				if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) { inst.settings.maxDate = this._formatDate(inst, maxDate); }
				if ("disabled" in settings) { if (settings.disabled) { this._disableDatepicker(target); } else { this._enableDatepicker(target); } }
				this._attachments($(target), inst); this._autoSize(inst); this._setDate(inst, date); this._updateAlternate(inst); this._updateDatepicker(inst);
			}
		}, _changeDatepicker: function(target, name, value) { this._optionDatepicker(target, name, value); }, _refreshDatepicker: function(target) { var inst = this._getInst(target); if (inst) { this._updateDatepicker(inst); } }, _setDateDatepicker: function(target, date) { var inst = this._getInst(target); if (inst) { this._setDate(inst, date); this._updateDatepicker(inst); this._updateAlternate(inst); } }, _getDateDatepicker: function(target, noDefault) {
			var inst = this._getInst(target); if (inst && !inst.inline) { this._setDateFromField(inst, noDefault); }
			return (inst ? this._getDate(inst) : null);
		}, _doKeyDown: function(event) {
			var onSelect, dateStr, sel, inst = $.datepicker._getInst(event.target), handled = true, isRTL = inst.dpDiv.is(".ui-datepicker-rtl"); inst._keyEvent = true; if ($.datepicker._datepickerShowing) {
				switch (event.keyCode) {
					case 9: $.datepicker._hideDatepicker(); handled = false; break; case 13: sel = $("td." + $.datepicker._dayOverClass + ":not(." +
						$.datepicker._currentClass + ")", inst.dpDiv); if (sel[0]) { $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]); }
						onSelect = $.datepicker._get(inst, "onSelect"); if (onSelect) { dateStr = $.datepicker._formatDate(inst); onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]); } else { $.datepicker._hideDatepicker(); }
						return false; case 27: $.datepicker._hideDatepicker(); break; case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M"); break; case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M"); break; case 35: if (event.ctrlKey || event.metaKey) { $.datepicker._clearDate(event.target); }
						handled = event.ctrlKey || event.metaKey; break; case 36: if (event.ctrlKey || event.metaKey) { $.datepicker._gotoToday(event.target); }
						handled = event.ctrlKey || event.metaKey; break; case 37: if (event.ctrlKey || event.metaKey) { $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D"); }
						handled = event.ctrlKey || event.metaKey; if (event.originalEvent.altKey) { $.datepicker._adjustDate(event.target, (event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths")), "M"); }
						break; case 38: if (event.ctrlKey || event.metaKey) { $.datepicker._adjustDate(event.target, -7, "D"); }
						handled = event.ctrlKey || event.metaKey; break; case 39: if (event.ctrlKey || event.metaKey) { $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D"); }
						handled = event.ctrlKey || event.metaKey; if (event.originalEvent.altKey) { $.datepicker._adjustDate(event.target, (event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths")), "M"); }
						break; case 40: if (event.ctrlKey || event.metaKey) { $.datepicker._adjustDate(event.target, +7, "D"); }
						handled = event.ctrlKey || event.metaKey; break; default: handled = false;
				}
			} else if (event.keyCode === 36 && event.ctrlKey) { $.datepicker._showDatepicker(this); } else { handled = false; }
			if (handled) { event.preventDefault(); event.stopPropagation(); }
		}, _doKeyPress: function(event) { var chars, chr, inst = $.datepicker._getInst(event.target); if ($.datepicker._get(inst, "constrainInput")) { chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat")); chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode); return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1); } }, _doKeyUp: function(event) {
			var date, inst = $.datepicker._getInst(event.target); if (inst.input.val() !== inst.lastVal) {
				try { date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), (inst.input ? inst.input.val() : null), $.datepicker._getFormatConfig(inst)); if (date) { $.datepicker._setDateFromField(inst); $.datepicker._updateAlternate(inst); $.datepicker._updateDatepicker(inst); } }
				catch (err) { }
			}
			return true;
		}, _showDatepicker: function(input) {
			input = input.target || input; if (input.nodeName.toLowerCase() !== "input") { input = $("input", input.parentNode)[0]; }
			if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) { return; }
			var inst, beforeShow, beforeShowSettings, isFixed, offset, showAnim, duration; inst = $.datepicker._getInst(input); if ($.datepicker._curInst && $.datepicker._curInst !== inst) { $.datepicker._curInst.dpDiv.stop(true, true); if (inst && $.datepicker._datepickerShowing) { $.datepicker._hideDatepicker($.datepicker._curInst.input[0]); } }
			beforeShow = $.datepicker._get(inst, "beforeShow"); beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {}; if (beforeShowSettings === false) { return; }
			datepicker_extendRemove(inst.settings, beforeShowSettings); inst.lastVal = null; $.datepicker._lastInput = input; $.datepicker._setDateFromField(inst); if ($.datepicker._inDialog) { input.value = ""; }
			if (!$.datepicker._pos) { $.datepicker._pos = $.datepicker._findPos(input); $.datepicker._pos[1] += input.offsetHeight; }
			isFixed = false; $(input).parents().each(function() { isFixed |= $(this).css("position") === "fixed"; return !isFixed; }); offset = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] }; $.datepicker._pos = null; inst.dpDiv.empty(); inst.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }); $.datepicker._updateDatepicker(inst); offset = $.datepicker._checkOffset(inst, offset, isFixed); inst.dpDiv.css({ position: ($.datepicker._inDialog && $.blockUI ? "static" : (isFixed ? "fixed" : "absolute")), display: "none", left: offset.left + "px", top: offset.top + "px" }); if (!inst.inline) {
				showAnim = $.datepicker._get(inst, "showAnim"); duration = $.datepicker._get(inst, "duration"); inst.dpDiv.css("z-index", datepicker_getZindex($(input)) + 1); $.datepicker._datepickerShowing = true; if ($.effects && $.effects.effect[showAnim]) { inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration); } else { inst.dpDiv[showAnim || "show"](showAnim ? duration : null); }
				if ($.datepicker._shouldFocusInput(inst)) { inst.input.trigger("focus"); }
				$.datepicker._curInst = inst;
			}
		}, _updateDatepicker: function(inst) {
			this.maxRows = 4; datepicker_instActive = inst; inst.dpDiv.empty().append(this._generateHTML(inst)); this._attachHandlers(inst); var origyearshtml, numMonths = this._getNumberOfMonths(inst), cols = numMonths[1], width = 17, activeCell = inst.dpDiv.find("." + this._dayOverClass + " a"); if (activeCell.length > 0) { datepicker_handleMouseover.apply(activeCell.get(0)); }
			inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""); if (cols > 1) { inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em"); }
			inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"); inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"); if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(inst)) { inst.input.trigger("focus"); }
			if (inst.yearshtml) {
				origyearshtml = inst.yearshtml; setTimeout(function() {
					if (origyearshtml === inst.yearshtml && inst.yearshtml) { inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml); }
					origyearshtml = inst.yearshtml = null;
				}, 0);
			}
		}, _shouldFocusInput: function(inst) { return inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && !inst.input.is(":focus"); }, _checkOffset: function(inst, offset, isFixed) { var dpWidth = inst.dpDiv.outerWidth(), dpHeight = inst.dpDiv.outerHeight(), inputWidth = inst.input ? inst.input.outerWidth() : 0, inputHeight = inst.input ? inst.input.outerHeight() : 0, viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()), viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop()); offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0); offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0; offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0; offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ? Math.abs(offset.left + dpWidth - viewWidth) : 0); offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ? Math.abs(dpHeight + inputHeight) : 0); return offset; }, _findPos: function(obj) {
			var position, inst = this._getInst(obj), isRTL = this._get(inst, "isRTL"); while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) { obj = obj[isRTL ? "previousSibling" : "nextSibling"]; }
			position = $(obj).offset(); return [position.left, position.top];
		}, _hideDatepicker: function(input) {
			var showAnim, duration, postProcess, onClose, inst = this._curInst; if (!inst || (input && inst !== $.data(input, "datepicker"))) { return; }
			if (this._datepickerShowing) {
				showAnim = this._get(inst, "showAnim"); duration = this._get(inst, "duration"); postProcess = function() { $.datepicker._tidyDialog(inst); }; if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) { inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess); } else { inst.dpDiv[(showAnim === "slideDown" ? "slideUp" : (showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess); }
				if (!showAnim) { postProcess(); }
				this._datepickerShowing = false; onClose = this._get(inst, "onClose"); if (onClose) { onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]); }
				this._lastInput = null; if (this._inDialog) { this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }); if ($.blockUI) { $.unblockUI(); $("body").append(this.dpDiv); } }
				this._inDialog = false;
			}
		}, _tidyDialog: function(inst) { inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar"); }, _checkExternalClick: function(event) {
			if (!$.datepicker._curInst) { return; }
			var $target = $(event.target), inst = $.datepicker._getInst($target[0]); if ((($target[0].id !== $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length === 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI))) || ($target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst)) { $.datepicker._hideDatepicker(); }
		}, _adjustDate: function(id, offset, period) {
			var target = $(id), inst = this._getInst(target[0]); if (this._isDisabledDatepicker(target[0])) { return; }
			this._adjustInstDate(inst, offset +
				(period === "M" ? this._get(inst, "showCurrentAtPos") : 0), period); this._updateDatepicker(inst);
		}, _gotoToday: function(id) {
			var date, target = $(id), inst = this._getInst(target[0]); if (this._get(inst, "gotoCurrent") && inst.currentDay) { inst.selectedDay = inst.currentDay; inst.drawMonth = inst.selectedMonth = inst.currentMonth; inst.drawYear = inst.selectedYear = inst.currentYear; } else { date = new Date(); inst.selectedDay = date.getDate(); inst.drawMonth = inst.selectedMonth = date.getMonth(); inst.drawYear = inst.selectedYear = date.getFullYear(); }
			this._notifyChange(inst); this._adjustDate(target);
		}, _selectMonthYear: function(id, select, period) { var target = $(id), inst = this._getInst(target[0]); inst["selected" + (period === "M" ? "Month" : "Year")] = inst["draw" + (period === "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10); this._notifyChange(inst); this._adjustDate(target); }, _selectDay: function(id, month, year, td) {
			var inst, target = $(id); if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) { return; }
			inst = this._getInst(target[0]); inst.selectedDay = inst.currentDay = $("a", td).html(); inst.selectedMonth = inst.currentMonth = month; inst.selectedYear = inst.currentYear = year; this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear));
		}, _clearDate: function(id) { var target = $(id); this._selectDate(target, ""); }, _selectDate: function(id, dateStr) {
			var onSelect, target = $(id), inst = this._getInst(target[0]); dateStr = (dateStr != null ? dateStr : this._formatDate(inst)); if (inst.input) { inst.input.val(dateStr); }
			this._updateAlternate(inst); onSelect = this._get(inst, "onSelect"); if (onSelect) { onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]); } else if (inst.input) { inst.input.trigger("change"); }
			if (inst.inline) { this._updateDatepicker(inst); } else {
				this._hideDatepicker(); this._lastInput = inst.input[0]; if (typeof (inst.input[0]) !== "object") { inst.input.trigger("focus"); }
				this._lastInput = null;
			}
		}, _updateAlternate: function(inst) { var altFormat, date, dateStr, altField = this._get(inst, "altField"); if (altField) { altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat"); date = this._getDate(inst); dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst)); $(altField).val(dateStr); } }, noWeekends: function(date) { var day = date.getDay(); return [(day > 0 && day < 6), ""]; }, iso8601Week: function(date) { var time, checkDate = new Date(date.getTime()); checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); time = checkDate.getTime(); checkDate.setMonth(0); checkDate.setDate(1); return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1; }, parseDate: function(format, value, settings) {
			if (format == null || value == null) { throw "Invalid arguments"; }
			value = (typeof value === "object" ? value.toString() : value + ""); if (value === "") { return null; }
			var iFormat, dim, extra, iValue = 0, shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff, shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp : new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)), dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames, monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames, year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match); if (matches) { iFormat++; }
				return matches;
			}, getNumber = function(match) {
				var isDoubled = lookAhead(match), size = (match === "@" ? 14 : (match === "!" ? 20 : (match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))), minSize = (match === "y" ? size : 1), digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits); if (!num) { throw "Missing number at position " + iValue; }
				iValue += num[0].length; return parseInt(num[0], 10);
			}, getName = function(match, shortNames, longNames) { var index = -1, names = $.map(lookAhead(match) ? longNames : shortNames, function(v, k) { return [[k, v]]; }).sort(function(a, b) { return -(a[1].length - b[1].length); }); $.each(names, function(i, pair) { var name = pair[1]; if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) { index = pair[0]; iValue += name.length; return false; } }); if (index !== -1) { return index + 1; } else { throw "Unknown name at position " + iValue; } }, checkLiteral = function() {
				if (value.charAt(iValue) !== format.charAt(iFormat)) { throw "Unexpected literal at position " + iValue; }
				iValue++;
			}; for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) { if (format.charAt(iFormat) === "'" && !lookAhead("'")) { literal = false; } else { checkLiteral(); } } else {
					switch (format.charAt(iFormat)) {
						case "d": day = getNumber("d"); break; case "D": getName("D", dayNamesShort, dayNames); break; case "o": doy = getNumber("o"); break; case "m": month = getNumber("m"); break; case "M": month = getName("M", monthNamesShort, monthNames); break; case "y": year = getNumber("y"); break; case "@": date = new Date(getNumber("@")); year = date.getFullYear(); month = date.getMonth() + 1; day = date.getDate(); break; case "!": date = new Date((getNumber("!") - this._ticksTo1970) / 10000); year = date.getFullYear(); month = date.getMonth() + 1; day = date.getDate(); break; case "'": if (lookAhead("'")) { checkLiteral(); } else { literal = true; }
							break; default: checkLiteral();
					}
				}
			}
			if (iValue < value.length) { extra = value.substr(iValue); if (!/^\s+/.test(extra)) { throw "Extra/unparsed characters found in date: " + extra; } }
			if (year === -1) { year = new Date().getFullYear(); } else if (year < 100) {
				year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
			}
			if (doy > -1) {
				month = 1; day = doy; do {
					dim = this._getDaysInMonth(year, month - 1); if (day <= dim) { break; }
					month++; day -= dim;
				} while (true);
			}
			date = this._daylightSavingAdjust(new Date(year, month - 1, day)); if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) { throw "Invalid date"; }
			return date;
		}, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
			Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000), formatDate: function(format, date, settings) {
				if (!date) { return ""; }
				var iFormat, dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames, monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames, lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match); if (matches) { iFormat++; }
					return matches;
				}, formatNumber = function(match, value, len) {
					var num = "" + value; if (lookAhead(match)) { while (num.length < len) { num = "0" + num; } }
					return num;
				}, formatName = function(match, value, shortNames, longNames) { return (lookAhead(match) ? longNames[value] : shortNames[value]); }, output = "", literal = false; if (date) {
					for (iFormat = 0; iFormat < format.length; iFormat++) {
						if (literal) { if (format.charAt(iFormat) === "'" && !lookAhead("'")) { literal = false; } else { output += format.charAt(iFormat); } } else {
							switch (format.charAt(iFormat)) {
								case "d": output += formatNumber("d", date.getDate(), 2); break; case "D": output += formatName("D", date.getDay(), dayNamesShort, dayNames); break; case "o": output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3); break; case "m": output += formatNumber("m", date.getMonth() + 1, 2); break; case "M": output += formatName("M", date.getMonth(), monthNamesShort, monthNames); break; case "y": output += (lookAhead("y") ? date.getFullYear() : (date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100); break; case "@": output += date.getTime(); break; case "!": output += date.getTime() * 10000 + this._ticksTo1970; break; case "'": if (lookAhead("'")) { output += "'"; } else { literal = true; }
									break; default: output += format.charAt(iFormat);
							}
						}
					}
				}
				return output;
			}, _possibleChars: function(format) {
				var iFormat, chars = "", literal = false, lookAhead = function(match) {
					var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match); if (matches) { iFormat++; }
					return matches;
				}; for (iFormat = 0; iFormat < format.length; iFormat++) {
					if (literal) { if (format.charAt(iFormat) === "'" && !lookAhead("'")) { literal = false; } else { chars += format.charAt(iFormat); } } else {
						switch (format.charAt(iFormat)) {
							case "d": case "m": case "y": case "@": chars += "0123456789"; break; case "D": case "M": return null; case "'": if (lookAhead("'")) { chars += "'"; } else { literal = true; }
								break; default: chars += format.charAt(iFormat);
						}
					}
				}
				return chars;
			}, _get: function(inst, name) { return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name]; }, _setDateFromField: function(inst, noDefault) {
				if (inst.input.val() === inst.lastVal) { return; }
				var dateFormat = this._get(inst, "dateFormat"), dates = inst.lastVal = inst.input ? inst.input.val() : null, defaultDate = this._getDefaultDate(inst), date = defaultDate, settings = this._getFormatConfig(inst); try { date = this.parseDate(dateFormat, dates, settings) || defaultDate; } catch (event) { dates = (noDefault ? "" : dates); }
				inst.selectedDay = date.getDate(); inst.drawMonth = inst.selectedMonth = date.getMonth(); inst.drawYear = inst.selectedYear = date.getFullYear(); inst.currentDay = (dates ? date.getDate() : 0); inst.currentMonth = (dates ? date.getMonth() : 0); inst.currentYear = (dates ? date.getFullYear() : 0); this._adjustInstDate(inst);
			}, _getDefaultDate: function(inst) { return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date())); }, _determineDate: function(inst, date, defaultDate) {
				var offsetNumeric = function(offset) { var date = new Date(); date.setDate(date.getDate() + offset); return date; }, offsetString = function(offset) {
					try { return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst)); }
					catch (e) { }
					var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date(), year = date.getFullYear(), month = date.getMonth(), day = date.getDate(), pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, matches = pattern.exec(offset); while (matches) {
						switch (matches[2] || "d") { case "d": case "D": day += parseInt(matches[1], 10); break; case "w": case "W": day += parseInt(matches[1], 10) * 7; break; case "m": case "M": month += parseInt(matches[1], 10); day = Math.min(day, $.datepicker._getDaysInMonth(year, month)); break; case "y": case "Y": year += parseInt(matches[1], 10); day = Math.min(day, $.datepicker._getDaysInMonth(year, month)); break; }
						matches = pattern.exec(offset);
					}
					return new Date(year, month, day);
				}, newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) : (typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime())))); newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate); if (newDate) { newDate.setHours(0); newDate.setMinutes(0); newDate.setSeconds(0); newDate.setMilliseconds(0); }
				return this._daylightSavingAdjust(newDate);
			}, _daylightSavingAdjust: function(date) {
				if (!date) { return null; }
				date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0); return date;
			}, _setDate: function(inst, date, noChange) {
				var clear = !date, origMonth = inst.selectedMonth, origYear = inst.selectedYear, newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date())); inst.selectedDay = inst.currentDay = newDate.getDate(); inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth(); inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear(); if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) { this._notifyChange(inst); }
				this._adjustInstDate(inst); if (inst.input) { inst.input.val(clear ? "" : this._formatDate(inst)); }
			}, _getDate: function(inst) { var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay))); return startDate; }, _attachHandlers: function(inst) { var stepMonths = this._get(inst, "stepMonths"), id = "#" + inst.id.replace(/\\\\/g, "\\"); inst.dpDiv.find("[data-handler]").map(function() { var handler = { prev: function() { $.datepicker._adjustDate(id, -stepMonths, "M"); }, next: function() { $.datepicker._adjustDate(id, +stepMonths, "M"); }, hide: function() { $.datepicker._hideDatepicker(); }, today: function() { $.datepicker._gotoToday(id); }, selectDay: function() { $.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this); return false; }, selectMonth: function() { $.datepicker._selectMonthYear(id, this, "M"); return false; }, selectYear: function() { $.datepicker._selectMonthYear(id, this, "Y"); return false; } }; $(this).on(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]); }); }, _generateHTML: function(inst) {
				var maxDraw, prevText, prev, nextText, next, currentText, gotoDate, controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin, monthNames, monthNamesShort, beforeShowDay, showOtherMonths, selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate, cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows, printDate, dRow, tbody, daySettings, otherMonth, unselectable, tempDate = new Date(), today = this._daylightSavingAdjust(new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), isRTL = this._get(inst, "isRTL"), showButtonPanel = this._get(inst, "showButtonPanel"), hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"), navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"), numMonths = this._getNumberOfMonths(inst), showCurrentAtPos = this._get(inst, "showCurrentAtPos"), stepMonths = this._get(inst, "stepMonths"), isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1), currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay))), minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), drawMonth = inst.drawMonth - showCurrentAtPos, drawYear = inst.drawYear; if (drawMonth < 0) { drawMonth += 12; drawYear--; }
				if (maxDate) { maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate())); maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw); while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) { drawMonth--; if (drawMonth < 0) { drawMonth = 11; drawYear--; } } }
				inst.drawMonth = drawMonth; inst.drawYear = drawYear; prevText = this._get(inst, "prevText"); prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst))); prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" + " title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" : (hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>")); nextText = this._get(inst, "nextText"); nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst))); next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" + " title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" : (hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>")); currentText = this._get(inst, "currentText"); gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today); currentText = (!navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst))); controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
					this._get(inst, "closeText") + "</button>" : ""); buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") +
						(this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" + ">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : ""; firstDay = parseInt(this._get(inst, "firstDay"), 10); firstDay = (isNaN(firstDay) ? 0 : firstDay); showWeek = this._get(inst, "showWeek"); dayNames = this._get(inst, "dayNames"); dayNamesMin = this._get(inst, "dayNamesMin"); monthNames = this._get(inst, "monthNames"); monthNamesShort = this._get(inst, "monthNamesShort"); beforeShowDay = this._get(inst, "beforeShowDay"); showOtherMonths = this._get(inst, "showOtherMonths"); selectOtherMonths = this._get(inst, "selectOtherMonths"); defaultDate = this._getDefaultDate(inst); html = ""; for (row = 0; row < numMonths[0]; row++) {
							group = ""; this.maxRows = 4; for (col = 0; col < numMonths[1]; col++) {
								selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay)); cornerClass = " ui-corner-all"; calender = ""; if (isMultiMonth) {
									calender += "<div class='ui-datepicker-group"; if (numMonths[1] > 1) { switch (col) { case 0: calender += " ui-datepicker-group-first"; cornerClass = " ui-corner-" + (isRTL ? "right" : "left"); break; case numMonths[1] - 1: calender += " ui-datepicker-group-last"; cornerClass = " ui-corner-" + (isRTL ? "left" : "right"); break; default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break; } }
									calender += "'>";
								}
								calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
									(/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") +
									(/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") +
									this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>"; thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : ""); for (dow = 0; dow < 7; dow++) { day = (dow + firstDay) % 7; thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>"; }
								calender += thead + "</tr></thead><tbody>"; daysInMonth = this._getDaysInMonth(drawYear, drawMonth); if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) { inst.selectedDay = Math.min(inst.selectedDay, daysInMonth); }
								leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7; curRows = Math.ceil((leadDays + daysInMonth) / 7); numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); this.maxRows = numRows; printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays)); for (dRow = 0; dRow < numRows; dRow++) {
									calender += "<tr>"; tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
										this._get(inst, "calculateWeek")(printDate) + "</td>"); for (dow = 0; dow < 7; dow++) {
											daySettings = (beforeShowDay ? beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]); otherMonth = (printDate.getMonth() !== drawMonth); unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] || (minDate && printDate < minDate) || (maxDate && printDate > maxDate); tbody += "<td class='" +
												((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
												(otherMonth ? " ui-datepicker-other-month" : "") +
												((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || (defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ? " " + this._dayOverClass : "") +
												(unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") +
												(otherMonth && !showOtherMonths ? "" : " " + daySettings[1] +
													(printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") +
													(printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" +
												((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") +
												(unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" +
												(otherMonth && !showOtherMonths ? "&#xa0;" : (unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
													(printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") +
													(printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") +
													(otherMonth ? " ui-priority-secondary" : "") + "' href='#'>" + printDate.getDate() + "</a>")) + "</td>"; printDate.setDate(printDate.getDate() + 1); printDate = this._daylightSavingAdjust(printDate);
										}
									calender += tbody + "</tr>";
								}
								drawMonth++; if (drawMonth > 11) { drawMonth = 0; drawYear++; }
								calender += "</tbody></table>" + (isMultiMonth ? "</div>" +
									((numMonths[0] > 0 && col === numMonths[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : ""); group += calender;
							}
							html += group;
						}
				html += buttonPanel; inst._keyEvent = false; return html;
			}, _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
				var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear, changeMonth = this._get(inst, "changeMonth"), changeYear = this._get(inst, "changeYear"), showMonthAfterYear = this._get(inst, "showMonthAfterYear"), html = "<div class='ui-datepicker-title'>", monthHtml = ""; if (secondary || !changeMonth) { monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>"; } else {
					inMinYear = (minDate && minDate.getFullYear() === drawYear); inMaxYear = (maxDate && maxDate.getFullYear() === drawYear); monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>"; for (month = 0; month < 12; month++) {
						if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
							monthHtml += "<option value='" + month + "'" +
							(month === drawMonth ? " selected='selected'" : "") + ">" + monthNamesShort[month] + "</option>";
						}
					}
					monthHtml += "</select>";
				}
				if (!showMonthAfterYear) { html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : ""); }
				if (!inst.yearshtml) {
					inst.yearshtml = ""; if (secondary || !changeYear) { html += "<span class='ui-datepicker-year'>" + drawYear + "</span>"; } else {
						years = this._get(inst, "yearRange").split(":"); thisYear = new Date().getFullYear(); determineYear = function(value) { var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) : (value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10))); return (isNaN(year) ? thisYear : year); }; year = determineYear(years[0]); endYear = Math.max(year, determineYear(years[1] || "")); year = (minDate ? Math.max(year, minDate.getFullYear()) : year); endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear); inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; for (; year <= endYear; year++) {
							inst.yearshtml += "<option value='" + year + "'" +
								(year === drawYear ? " selected='selected'" : "") + ">" + year + "</option>";
						}
						inst.yearshtml += "</select>"; html += inst.yearshtml; inst.yearshtml = null;
					}
				}
				html += this._get(inst, "yearSuffix"); if (showMonthAfterYear) { html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml; }
				html += "</div>"; return html;
			}, _adjustInstDate: function(inst, offset, period) { var year = inst.drawYear + (period === "Y" ? offset : 0), month = inst.drawMonth + (period === "M" ? offset : 0), day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0), date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day))); inst.selectedDay = date.getDate(); inst.drawMonth = inst.selectedMonth = date.getMonth(); inst.drawYear = inst.selectedYear = date.getFullYear(); if (period === "M" || period === "Y") { this._notifyChange(inst); } }, _restrictMinMax: function(inst, date) { var minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), newDate = (minDate && date < minDate ? minDate : date); return (maxDate && newDate > maxDate ? maxDate : newDate); }, _notifyChange: function(inst) { var onChange = this._get(inst, "onChangeMonthYear"); if (onChange) { onChange.apply((inst.input ? inst.input[0] : null), [inst.selectedYear, inst.selectedMonth + 1, inst]); } }, _getNumberOfMonths: function(inst) { var numMonths = this._get(inst, "numberOfMonths"); return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths)); }, _getMinMaxDate: function(inst, minMax) { return this._determineDate(inst, this._get(inst, minMax + "Date"), null); }, _getDaysInMonth: function(year, month) { return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate(); }, _getFirstDayOfMonth: function(year, month) { return new Date(year, month, 1).getDay(); }, _canAdjustMonth: function(inst, offset, curYear, curMonth) {
				var numMonths = this._getNumberOfMonths(inst), date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1)); if (offset < 0) { date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth())); }
				return this._isInRange(inst, date);
			}, _isInRange: function(inst, date) {
				var yearSplit, currentYear, minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), minYear = null, maxYear = null, years = this._get(inst, "yearRange"); if (years) {
					yearSplit = years.split(":"); currentYear = new Date().getFullYear(); minYear = parseInt(yearSplit[0], 10); maxYear = parseInt(yearSplit[1], 10); if (yearSplit[0].match(/[+\-].*/)) { minYear += currentYear; }
					if (yearSplit[1].match(/[+\-].*/)) { maxYear += currentYear; }
				}
				return ((!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()) && (!minYear || date.getFullYear() >= minYear) && (!maxYear || date.getFullYear() <= maxYear));
			}, _getFormatConfig: function(inst) { var shortYearCutoff = this._get(inst, "shortYearCutoff"); shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10)); return { shortYearCutoff: shortYearCutoff, dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"), monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames") }; }, _formatDate: function(inst, day, month, year) {
				if (!day) { inst.currentDay = inst.selectedDay; inst.currentMonth = inst.selectedMonth; inst.currentYear = inst.selectedYear; }
				var date = (day ? (typeof day === "object" ? day : this._daylightSavingAdjust(new Date(year, month, day))) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay))); return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
			}
	}); function datepicker_bindHover(dpDiv) {
		var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return dpDiv.on("mouseout", selector, function() {
			$(this).removeClass("ui-state-hover"); if (this.className.indexOf("ui-datepicker-prev") !== -1) { $(this).removeClass("ui-datepicker-prev-hover"); }
			if (this.className.indexOf("ui-datepicker-next") !== -1) { $(this).removeClass("ui-datepicker-next-hover"); }
		}).on("mouseover", selector, datepicker_handleMouseover);
	}
	function datepicker_handleMouseover() {
		if (!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0])) {
			$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"); $(this).addClass("ui-state-hover"); if (this.className.indexOf("ui-datepicker-prev") !== -1) { $(this).addClass("ui-datepicker-prev-hover"); }
			if (this.className.indexOf("ui-datepicker-next") !== -1) { $(this).addClass("ui-datepicker-next-hover"); }
		}
	}
	function datepicker_extendRemove(target, props) {
		$.extend(target, props); for (var name in props) { if (props[name] == null) { target[name] = props[name]; } }
		return target;
	}
	$.fn.datepicker = function(options) {
		if (!this.length) { return this; }
		if (!$.datepicker.initialized) { $(document).on("mousedown", $.datepicker._checkExternalClick); $.datepicker.initialized = true; }
		if ($("#" + $.datepicker._mainDivId).length === 0) { $("body").append($.datepicker.dpDiv); }
		var otherArgs = Array.prototype.slice.call(arguments, 1); if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) { return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs)); }
		if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") { return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs)); }
		return this.each(function() { typeof options === "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options); });
	}; $.datepicker = new Datepicker(); $.datepicker.initialized = false; $.datepicker.uuid = new Date().getTime(); $.datepicker.version = "@VERSION"; return $.datepicker;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/mouse.js', ["jquery", "../ie", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	var mouseHandled = false; $(document).on("mouseup", function() { mouseHandled = false; }); return $.widget("ui.mouse", {
		version: "@VERSION", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function() { var that = this; this.element.on("mousedown." + this.widgetName, function(event) { return that._mouseDown(event); }).on("click." + this.widgetName, function(event) { if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) { $.removeData(event.target, that.widgetName + ".preventClickEvent"); event.stopImmediatePropagation(); return false; } }); this.started = false; }, _mouseDestroy: function() { this.element.off("." + this.widgetName); if (this._mouseMoveDelegate) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate); } }, _mouseDown: function(event) {
			if (mouseHandled) { return; }
			this._mouseMoved = false; (this._mouseStarted && this._mouseUp(event)); this._mouseDownEvent = event; var that = this, btnIsLeft = (event.which === 1), elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false); if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) { return true; }
			this.mouseDelayMet = !this.options.delay; if (!this.mouseDelayMet) { this._mouseDelayTimer = setTimeout(function() { that.mouseDelayMet = true; }, this.options.delay); }
			if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) { this._mouseStarted = (this._mouseStart(event) !== false); if (!this._mouseStarted) { event.preventDefault(); return true; } }
			if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) { $.removeData(event.target, this.widgetName + ".preventClickEvent"); }
			this._mouseMoveDelegate = function(event) { return that._mouseMove(event); }; this._mouseUpDelegate = function(event) { return that._mouseUp(event); }; this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate); event.preventDefault(); mouseHandled = true; return true;
		}, _mouseMove: function(event) {
			if (this._mouseMoved) { if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !event.button) { return this._mouseUp(event); } else if (!event.which) { if (event.originalEvent.altKey || event.originalEvent.ctrlKey || event.originalEvent.metaKey || event.originalEvent.shiftKey) { this.ignoreMissingWhich = true; } else if (!this.ignoreMissingWhich) { return this._mouseUp(event); } } }
			if (event.which || event.button) { this._mouseMoved = true; }
			if (this._mouseStarted) { this._mouseDrag(event); return event.preventDefault(); }
			if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) { this._mouseStarted = (this._mouseStart(this._mouseDownEvent, event) !== false); (this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event)); }
			return !this._mouseStarted;
		}, _mouseUp: function(event) {
			this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate); if (this._mouseStarted) {
				this._mouseStarted = false; if (event.target === this._mouseDownEvent.target) { $.data(event.target, this.widgetName + ".preventClickEvent", true); }
				this._mouseStop(event);
			}
			if (this._mouseDelayTimer) { clearTimeout(this._mouseDelayTimer); delete this._mouseDelayTimer; }
			this.ignoreMissingWhich = false; mouseHandled = false; event.preventDefault();
		}, _mouseDistanceMet: function(event) { return (Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance); }, _mouseDelayMet: function() { return this.mouseDelayMet; }, _mouseStart: function() { }, _mouseDrag: function() { }, _mouseStop: function() { }, _mouseCapture: function() { return true; }
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/draggable.js', ["jquery", "./mouse", "../data", "../plugin", "../safe-active-element", "../safe-blur", "../scroll-parent", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	$.widget("ui.draggable", $.ui.mouse, {
		version: "@VERSION", widgetEventPrefix: "drag", options: { addClasses: true, appendTo: "parent", axis: false, connectToSortable: false, containment: false, cursor: "auto", cursorAt: false, grid: false, handle: false, helper: "original", iframeFix: false, opacity: false, refreshPositions: false, revert: false, revertDuration: 500, scope: "default", scroll: true, scrollSensitivity: 20, scrollSpeed: 20, snap: false, snapMode: "both", snapTolerance: 20, stack: false, zIndex: false, drag: null, start: null, stop: null }, _create: function() {
			if (this.options.helper === "original") { this._setPositionRelative(); }
			if (this.options.addClasses) { this._addClass("ui-draggable"); }
			this._setHandleClassName(); this._mouseInit();
		}, _setOption: function(key, value) { this._super(key, value); if (key === "handle") { this._removeHandleClassName(); this._setHandleClassName(); } }, _destroy: function() {
			if ((this.helper || this.element).is(".ui-draggable-dragging")) { this.destroyOnClear = true; return; }
			this._removeHandleClassName(); this._mouseDestroy();
		}, _mouseCapture: function(event) {
			var o = this.options; this._blurActiveElement(event); if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) { return false; }
			this.handle = this._getHandle(event); if (!this.handle) { return false; }
			this._blockFrames(o.iframeFix === true ? "iframe" : o.iframeFix); return true;
		}, _blockFrames: function(selector) { this.iframeBlocks = this.document.find(selector).map(function() { var iframe = $(this); return $("<div>").css("position", "absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0]; }); }, _unblockFrames: function() { if (this.iframeBlocks) { this.iframeBlocks.remove(); delete this.iframeBlocks; } }, _blurActiveElement: function(event) {
			var activeElement = $.ui.safeActiveElement(this.document[0]), target = $(event.target); if (this._getHandle(event) && target.closest(activeElement).length) { return; }
			$.ui.safeBlur(activeElement);
		}, _mouseStart: function(event) {
			var o = this.options; this.helper = this._createHelper(event); this._addClass(this.helper, "ui-draggable-dragging"); this._cacheHelperProportions(); if ($.ui.ddmanager) { $.ui.ddmanager.current = this; }
			this._cacheMargins(); this.cssPosition = this.helper.css("position"); this.scrollParent = this.helper.scrollParent(true); this.offsetParent = this.helper.offsetParent(); this.hasFixedAncestor = this.helper.parents().filter(function() { return $(this).css("position") === "fixed"; }).length > 0; this.positionAbs = this.element.offset(); this._refreshOffsets(event); this.originalPosition = this.position = this._generatePosition(event, false); this.originalPageX = event.pageX; this.originalPageY = event.pageY; (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt)); this._setContainment(); if (this._trigger("start", event) === false) { this._clear(); return false; }
			this._cacheHelperProportions(); if ($.ui.ddmanager && !o.dropBehaviour) { $.ui.ddmanager.prepareOffsets(this, event); }
			this._mouseDrag(event, true); if ($.ui.ddmanager) { $.ui.ddmanager.dragStart(this, event); }
			return true;
		}, _refreshOffsets: function(event) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: false, parent: this._getParentOffset(), relative: this._getRelativeOffset() }; this.offset.click = { left: event.pageX - this.offset.left, top: event.pageY - this.offset.top }; }, _mouseDrag: function(event, noPropagation) {
			if (this.hasFixedAncestor) { this.offset.parent = this._getParentOffset(); }
			this.position = this._generatePosition(event, true); this.positionAbs = this._convertPositionTo("absolute"); if (!noPropagation) {
				var ui = this._uiHash(); if (this._trigger("drag", event, ui) === false) { this._mouseUp(new $.Event("mouseup", event)); return false; }
				this.position = ui.position;
			}
			this.helper[0].style.left = this.position.left + "px"; this.helper[0].style.top = this.position.top + "px"; if ($.ui.ddmanager) { $.ui.ddmanager.drag(this, event); }
			return false;
		}, _mouseStop: function(event) {
			var that = this, dropped = false; if ($.ui.ddmanager && !this.options.dropBehaviour) { dropped = $.ui.ddmanager.drop(this, event); }
			if (this.dropped) { dropped = this.dropped; this.dropped = false; }
			if ((this.options.revert === "invalid" && !dropped) || (this.options.revert === "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) { $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() { if (that._trigger("stop", event) !== false) { that._clear(); } }); } else { if (this._trigger("stop", event) !== false) { this._clear(); } }
			return false;
		}, _mouseUp: function(event) {
			this._unblockFrames(); if ($.ui.ddmanager) { $.ui.ddmanager.dragStop(this, event); }
			if (this.handleElement.is(event.target)) { this.element.trigger("focus"); }
			return $.ui.mouse.prototype._mouseUp.call(this, event);
		}, cancel: function() {
			if (this.helper.is(".ui-draggable-dragging")) { this._mouseUp(new $.Event("mouseup", { target: this.element[0] })); } else { this._clear(); }
			return this;
		}, _getHandle: function(event) { return this.options.handle ? !!$(event.target).closest(this.element.find(this.options.handle)).length : true; }, _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element; this._addClass(this.handleElement, "ui-draggable-handle"); }, _removeHandleClassName: function() { this._removeClass(this.handleElement, "ui-draggable-handle"); }, _createHelper: function(event) {
			var o = this.options, helperIsFunction = $.isFunction(o.helper), helper = helperIsFunction ? $(o.helper.apply(this.element[0], [event])) : (o.helper === "clone" ? this.element.clone().removeAttr("id") : this.element); if (!helper.parents("body").length) { helper.appendTo((o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo)); }
			if (helperIsFunction && helper[0] === this.element[0]) { this._setPositionRelative(); }
			if (helper[0] !== this.element[0] && !(/(fixed|absolute)/).test(helper.css("position"))) { helper.css("position", "absolute"); }
			return helper;
		}, _setPositionRelative: function() { if (!(/^(?:r|a|f)/).test(this.element.css("position"))) { this.element[0].style.position = "relative"; } }, _adjustOffsetFromHelper: function(obj) {
			if (typeof obj === "string") { obj = obj.split(" "); }
			if ($.isArray(obj)) { obj = { left: +obj[0], top: +obj[1] || 0 }; }
			if ("left" in obj) { this.offset.click.left = obj.left + this.margins.left; }
			if ("right" in obj) { this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left; }
			if ("top" in obj) { this.offset.click.top = obj.top + this.margins.top; }
			if ("bottom" in obj) { this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top; }
		}, _isRootNode: function(element) { return (/(html|body)/i).test(element.tagName) || element === this.document[0]; }, _getParentOffset: function() {
			var po = this.offsetParent.offset(), document = this.document[0]; if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) { po.left += this.scrollParent.scrollLeft(); po.top += this.scrollParent.scrollTop(); }
			if (this._isRootNode(this.offsetParent[0])) { po = { top: 0, left: 0 }; }
			return { top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
		}, _getRelativeOffset: function() {
			if (this.cssPosition !== "relative") { return { top: 0, left: 0 }; }
			var p = this.element.position(), scrollIsRootNode = this._isRootNode(this.scrollParent[0]); return { top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollTop() : 0), left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollLeft() : 0) };
		}, _cacheMargins: function() { this.margins = { left: (parseInt(this.element.css("marginLeft"), 10) || 0), top: (parseInt(this.element.css("marginTop"), 10) || 0), right: (parseInt(this.element.css("marginRight"), 10) || 0), bottom: (parseInt(this.element.css("marginBottom"), 10) || 0) }; }, _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() }; }, _setContainment: function() {
			var isUserScrollable, c, ce, o = this.options, document = this.document[0]; this.relativeContainer = null; if (!o.containment) { this.containment = null; return; }
			if (o.containment === "window") { this.containment = [$(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; return; }
			if (o.containment === "document") { this.containment = [0, 0, $(document).width() - this.helperProportions.width - this.margins.left, ($(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; return; }
			if (o.containment.constructor === Array) { this.containment = o.containment; return; }
			if (o.containment === "parent") { o.containment = this.helper[0].parentNode; }
			c = $(o.containment); ce = c[0]; if (!ce) { return; }
			isUserScrollable = /(scroll|auto)/.test(c.css("overflow")); this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (isUserScrollable ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) -
				(parseInt(c.css("borderRightWidth"), 10) || 0) -
				(parseInt(c.css("paddingRight"), 10) || 0) -
				this.helperProportions.width -
				this.margins.left -
				this.margins.right, (isUserScrollable ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) -
				(parseInt(c.css("borderBottomWidth"), 10) || 0) -
				(parseInt(c.css("paddingBottom"), 10) || 0) -
				this.helperProportions.height -
				this.margins.top -
			this.margins.bottom]; this.relativeContainer = c;
		}, _convertPositionTo: function(d, pos) {
			if (!pos) { pos = this.position; }
			var mod = d === "absolute" ? 1 : -1, scrollIsRootNode = this._isRootNode(this.scrollParent[0]); return {
				top: (pos.top +
					this.offset.relative.top * mod +
					this.offset.parent.top * mod -
					((this.cssPosition === "fixed" ? -this.offset.scroll.top : (scrollIsRootNode ? 0 : this.offset.scroll.top)) * mod)), left: (pos.left +
						this.offset.relative.left * mod +
						this.offset.parent.left * mod -
						((this.cssPosition === "fixed" ? -this.offset.scroll.left : (scrollIsRootNode ? 0 : this.offset.scroll.left)) * mod))
			};
		}, _generatePosition: function(event, constrainPosition) {
			var containment, co, top, left, o = this.options, scrollIsRootNode = this._isRootNode(this.scrollParent[0]), pageX = event.pageX, pageY = event.pageY; if (!scrollIsRootNode || !this.offset.scroll) { this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }; }
			if (constrainPosition) {
				if (this.containment) {
					if (this.relativeContainer) { co = this.relativeContainer.offset(); containment = [this.containment[0] + co.left, this.containment[1] + co.top, this.containment[2] + co.left, this.containment[3] + co.top]; } else { containment = this.containment; }
					if (event.pageX - this.offset.click.left < containment[0]) { pageX = containment[0] + this.offset.click.left; }
					if (event.pageY - this.offset.click.top < containment[1]) { pageY = containment[1] + this.offset.click.top; }
					if (event.pageX - this.offset.click.left > containment[2]) { pageX = containment[2] + this.offset.click.left; }
					if (event.pageY - this.offset.click.top > containment[3]) { pageY = containment[3] + this.offset.click.top; }
				}
				if (o.grid) { top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY; pageY = containment ? ((top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3]) ? top : ((top - this.offset.click.top >= containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top; left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX; pageX = containment ? ((left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2]) ? left : ((left - this.offset.click.left >= containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left; }
				if (o.axis === "y") { pageX = this.originalPageX; }
				if (o.axis === "x") { pageY = this.originalPageY; }
			}
			return {
				top: (pageY -
					this.offset.click.top -
					this.offset.relative.top -
					this.offset.parent.top +
					(this.cssPosition === "fixed" ? -this.offset.scroll.top : (scrollIsRootNode ? 0 : this.offset.scroll.top))), left: (pageX -
						this.offset.click.left -
						this.offset.relative.left -
						this.offset.parent.left +
						(this.cssPosition === "fixed" ? -this.offset.scroll.left : (scrollIsRootNode ? 0 : this.offset.scroll.left)))
			};
		}, _clear: function() {
			this._removeClass(this.helper, "ui-draggable-dragging"); if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) { this.helper.remove(); }
			this.helper = null; this.cancelHelperRemoval = false; if (this.destroyOnClear) { this.destroy(); }
		}, _trigger: function(type, event, ui) {
			ui = ui || this._uiHash(); $.ui.plugin.call(this, type, [event, ui, this], true); if (/^(drag|start|stop)/.test(type)) { this.positionAbs = this._convertPositionTo("absolute"); ui.offset = this.positionAbs; }
			return $.Widget.prototype._trigger.call(this, type, event, ui);
		}, plugins: {}, _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs }; }
	}); $.ui.plugin.add("draggable", "connectToSortable", {
		start: function(event, ui, draggable) { var uiSortable = $.extend({}, ui, { item: draggable.element }); draggable.sortables = []; $(draggable.options.connectToSortable).each(function() { var sortable = $(this).sortable("instance"); if (sortable && !sortable.options.disabled) { draggable.sortables.push(sortable); sortable.refreshPositions(); sortable._trigger("activate", event, uiSortable); } }); }, stop: function(event, ui, draggable) { var uiSortable = $.extend({}, ui, { item: draggable.element }); draggable.cancelHelperRemoval = false; $.each(draggable.sortables, function() { var sortable = this; if (sortable.isOver) { sortable.isOver = 0; draggable.cancelHelperRemoval = true; sortable.cancelHelperRemoval = false; sortable._storedCSS = { position: sortable.placeholder.css("position"), top: sortable.placeholder.css("top"), left: sortable.placeholder.css("left") }; sortable._mouseStop(event); sortable.options.helper = sortable.options._helper; } else { sortable.cancelHelperRemoval = true; sortable._trigger("deactivate", event, uiSortable); } }); }, drag: function(event, ui, draggable) {
			$.each(draggable.sortables, function() {
				var innermostIntersecting = false, sortable = this; sortable.positionAbs = draggable.positionAbs; sortable.helperProportions = draggable.helperProportions; sortable.offset.click = draggable.offset.click; if (sortable._intersectsWith(sortable.containerCache)) {
					innermostIntersecting = true; $.each(draggable.sortables, function() {
						this.positionAbs = draggable.positionAbs; this.helperProportions = draggable.helperProportions; this.offset.click = draggable.offset.click; if (this !== sortable && this._intersectsWith(this.containerCache) && $.contains(sortable.element[0], this.element[0])) { innermostIntersecting = false; }
						return innermostIntersecting;
					});
				}
				if (innermostIntersecting) {
					if (!sortable.isOver) {
						sortable.isOver = 1; draggable._parent = ui.helper.parent(); sortable.currentItem = ui.helper.appendTo(sortable.element).data("ui-sortable-item", true); sortable.options._helper = sortable.options.helper; sortable.options.helper = function() { return ui.helper[0]; }; event.target = sortable.currentItem[0]; sortable._mouseCapture(event, true); sortable._mouseStart(event, true, true); sortable.offset.click.top = draggable.offset.click.top; sortable.offset.click.left = draggable.offset.click.left; sortable.offset.parent.left -= draggable.offset.parent.left -
							sortable.offset.parent.left; sortable.offset.parent.top -= draggable.offset.parent.top -
								sortable.offset.parent.top; draggable._trigger("toSortable", event); draggable.dropped = sortable.element; $.each(draggable.sortables, function() { this.refreshPositions(); }); draggable.currentItem = draggable.element; sortable.fromOutside = draggable;
					}
					if (sortable.currentItem) { sortable._mouseDrag(event); ui.position = sortable.position; }
				} else {
					if (sortable.isOver) {
						sortable.isOver = 0; sortable.cancelHelperRemoval = true; sortable.options._revert = sortable.options.revert; sortable.options.revert = false; sortable._trigger("out", event, sortable._uiHash(sortable)); sortable._mouseStop(event, true); sortable.options.revert = sortable.options._revert; sortable.options.helper = sortable.options._helper; if (sortable.placeholder) { sortable.placeholder.remove(); }
						ui.helper.appendTo(draggable._parent); draggable._refreshOffsets(event); ui.position = draggable._generatePosition(event, true); draggable._trigger("fromSortable", event); draggable.dropped = false; $.each(draggable.sortables, function() { this.refreshPositions(); });
					}
				}
			});
		}
	}); $.ui.plugin.add("draggable", "cursor", {
		start: function(event, ui, instance) {
			var t = $("body"), o = instance.options; if (t.css("cursor")) { o._cursor = t.css("cursor"); }
			t.css("cursor", o.cursor);
		}, stop: function(event, ui, instance) { var o = instance.options; if (o._cursor) { $("body").css("cursor", o._cursor); } }
	}); $.ui.plugin.add("draggable", "opacity", {
		start: function(event, ui, instance) {
			var t = $(ui.helper), o = instance.options; if (t.css("opacity")) { o._opacity = t.css("opacity"); }
			t.css("opacity", o.opacity);
		}, stop: function(event, ui, instance) { var o = instance.options; if (o._opacity) { $(ui.helper).css("opacity", o._opacity); } }
	}); $.ui.plugin.add("draggable", "scroll", {
		start: function(event, ui, i) {
			if (!i.scrollParentNotHidden) { i.scrollParentNotHidden = i.helper.scrollParent(false); }
			if (i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML") { i.overflowOffset = i.scrollParentNotHidden.offset(); }
		}, drag: function(event, ui, i) {
			var o = i.options, scrolled = false, scrollParent = i.scrollParentNotHidden[0], document = i.document[0]; if (scrollParent !== document && scrollParent.tagName !== "HTML") {
				if (!o.axis || o.axis !== "x") { if ((i.overflowOffset.top + scrollParent.offsetHeight) - event.pageY < o.scrollSensitivity) { scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed; } else if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) { scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed; } }
				if (!o.axis || o.axis !== "y") { if ((i.overflowOffset.left + scrollParent.offsetWidth) - event.pageX < o.scrollSensitivity) { scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed; } else if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) { scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed; } }
			} else {
				if (!o.axis || o.axis !== "x") { if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) { scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed); } else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) { scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed); } }
				if (!o.axis || o.axis !== "y") { if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) { scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed); } else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) { scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed); } }
			}
			if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) { $.ui.ddmanager.prepareOffsets(i, event); }
		}
	}); $.ui.plugin.add("draggable", "snap", {
		start: function(event, ui, i) { var o = i.options; i.snapElements = []; $(o.snap.constructor !== String ? (o.snap.items || ":data(ui-draggable)") : o.snap).each(function() { var $t = $(this), $o = $t.offset(); if (this !== i.element[0]) { i.snapElements.push({ item: this, width: $t.outerWidth(), height: $t.outerHeight(), top: $o.top, left: $o.left }); } }); }, drag: function(event, ui, inst) {
			var ts, bs, ls, rs, l, r, t, b, i, first, o = inst.options, d = o.snapTolerance, x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width, y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height; for (i = inst.snapElements.length - 1; i >= 0; i--) {
				l = inst.snapElements[i].left - inst.margins.left; r = l + inst.snapElements[i].width; t = inst.snapElements[i].top - inst.margins.top; b = t + inst.snapElements[i].height; if (x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains(inst.snapElements[i].item.ownerDocument, inst.snapElements[i].item)) {
					if (inst.snapElements[i].snapping) { (inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item }))); }
					inst.snapElements[i].snapping = false; continue;
				}
				if (o.snapMode !== "inner") {
					ts = Math.abs(t - y2) <= d; bs = Math.abs(b - y1) <= d; ls = Math.abs(l - x2) <= d; rs = Math.abs(r - x1) <= d; if (ts) { ui.position.top = inst._convertPositionTo("relative", { top: t - inst.helperProportions.height, left: 0 }).top; }
					if (bs) { ui.position.top = inst._convertPositionTo("relative", { top: b, left: 0 }).top; }
					if (ls) { ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l - inst.helperProportions.width }).left; }
					if (rs) { ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r }).left; }
				}
				first = (ts || bs || ls || rs); if (o.snapMode !== "outer") {
					ts = Math.abs(t - y1) <= d; bs = Math.abs(b - y2) <= d; ls = Math.abs(l - x1) <= d; rs = Math.abs(r - x2) <= d; if (ts) { ui.position.top = inst._convertPositionTo("relative", { top: t, left: 0 }).top; }
					if (bs) { ui.position.top = inst._convertPositionTo("relative", { top: b - inst.helperProportions.height, left: 0 }).top; }
					if (ls) { ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l }).left; }
					if (rs) { ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r - inst.helperProportions.width }).left; }
				}
				if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) { (inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item }))); }
				inst.snapElements[i].snapping = (ts || bs || ls || rs || first);
			}
		}
	}); $.ui.plugin.add("draggable", "stack", {
		start: function(event, ui, instance) {
			var min, o = instance.options, group = $.makeArray($(o.stack)).sort(function(a, b) { return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0); }); if (!group.length) { return; }
			min = parseInt($(group[0]).css("zIndex"), 10) || 0; $(group).each(function(i) { $(this).css("zIndex", min + i); }); this.css("zIndex", (min + group.length));
		}
	}); $.ui.plugin.add("draggable", "zIndex", {
		start: function(event, ui, instance) {
			var t = $(ui.helper), o = instance.options; if (t.css("zIndex")) { o._zIndex = t.css("zIndex"); }
			t.css("zIndex", o.zIndex);
		}, stop: function(event, ui, instance) { var o = instance.options; if (o._zIndex) { $(ui.helper).css("zIndex", o._zIndex); } }
	}); return $.ui.draggable;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/resizable.js', ["jquery", "./mouse", "../disable-selection", "../plugin", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	$.widget("ui.resizable", $.ui.mouse, {
		version: "@VERSION", widgetEventPrefix: "resize", options: { alsoResize: false, animate: false, animateDuration: "slow", animateEasing: "swing", aspectRatio: false, autoHide: false, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: false, ghost: false, grid: false, handles: "e,s,se", helper: false, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null }, _num: function(value) { return parseFloat(value) || 0; }, _isNumber: function(value) { return !isNaN(parseFloat(value)); }, _hasScroll: function(el, a) {
			if ($(el).css("overflow") === "hidden") { return false; }
			var scroll = (a && a === "left") ? "scrollLeft" : "scrollTop", has = false; if (el[scroll] > 0) { return true; }
			el[scroll] = 1; has = (el[scroll] > 0); el[scroll] = 0; return has;
		}, _create: function() {
			var n, i, handle, axis, hname, margins, that = this, o = this.options; this._addClass("ui-resizable"); $.extend(this, { _aspectRatio: !!(o.aspectRatio), aspectRatio: o.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null }); if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) { this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })); this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")); this.elementIsWrapper = true; margins = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }; this.element.css(margins); this.originalElement.css("margin", 0); this.originalResizeStyle = this.originalElement.css("resize"); this.originalElement.css("resize", "none"); this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })); this.originalElement.css(margins); this._proportionallyResize(); }
			this.handles = o.handles || (!$(".ui-resizable-handle", this.element).length ? "e,s,se" : { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" }); this._handles = $(); if (this.handles.constructor === String) {
				if (this.handles === "all") { this.handles = "n,e,s,w,se,sw,ne,nw"; }
				n = this.handles.split(","); this.handles = {}; for (i = 0; i < n.length; i++) { handle = $.trim(n[i]); hname = "ui-resizable-" + handle; axis = $("<div>"); this._addClass(axis, "ui-resizable-handle " + hname); axis.css({ zIndex: o.zIndex }); this.handles[handle] = ".ui-resizable-" + handle; this.element.append(axis); }
			}
			this._renderAxis = function(target) {
				var i, axis, padPos, padWrapper; target = target || this.element; for (i in this.handles) {
					if (this.handles[i].constructor === String) { this.handles[i] = this.element.children(this.handles[i]).first().show(); } else if (this.handles[i].jquery || this.handles[i].nodeType) { this.handles[i] = $(this.handles[i]); this._on(this.handles[i], { "mousedown": that._mouseDown }); }
					if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) { axis = $(this.handles[i], this.element); padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth(); padPos = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""); target.css(padPos, padWrapper); this._proportionallyResize(); }
					this._handles = this._handles.add(this.handles[i]);
				}
			}; this._renderAxis(this.element); this._handles = this._handles.add(this.element.find(".ui-resizable-handle")); this._handles.disableSelection(); this._handles.on("mouseover", function() {
				if (!that.resizing) {
					if (this.className) { axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i); }
					that.axis = axis && axis[1] ? axis[1] : "se";
				}
			}); if (o.autoHide) {
				this._handles.hide(); this._addClass("ui-resizable-autohide"); $(this.element).on("mouseenter", function() {
					if (o.disabled) { return; }
					that._removeClass("ui-resizable-autohide"); that._handles.show();
				}).on("mouseleave", function() {
					if (o.disabled) { return; }
					if (!that.resizing) { that._addClass("ui-resizable-autohide"); that._handles.hide(); }
				});
			}
			this._mouseInit();
		}, _destroy: function() {
			this._mouseDestroy(); var wrapper, _destroy = function(exp) { $(exp).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove(); }; if (this.elementIsWrapper) { _destroy(this.element); wrapper = this.element; this.originalElement.css({ position: wrapper.css("position"), width: wrapper.outerWidth(), height: wrapper.outerHeight(), top: wrapper.css("top"), left: wrapper.css("left") }).insertAfter(wrapper); wrapper.remove(); }
			this.originalElement.css("resize", this.originalResizeStyle); _destroy(this.originalElement); return this;
		}, _mouseCapture: function(event) {
			var i, handle, capture = false; for (i in this.handles) { handle = $(this.handles[i])[0]; if (handle === event.target || $.contains(handle, event.target)) { capture = true; } }
			return !this.options.disabled && capture;
		}, _mouseStart: function(event) {
			var curleft, curtop, cursor, o = this.options, el = this.element; this.resizing = true; this._renderProxy(); curleft = this._num(this.helper.css("left")); curtop = this._num(this.helper.css("top")); if (o.containment) { curleft += $(o.containment).scrollLeft() || 0; curtop += $(o.containment).scrollTop() || 0; }
			this.offset = this.helper.offset(); this.position = { left: curleft, top: curtop }; this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: el.width(), height: el.height() }; this.originalSize = this._helper ? { width: el.outerWidth(), height: el.outerHeight() } : { width: el.width(), height: el.height() }; this.sizeDiff = { width: el.outerWidth() - el.width(), height: el.outerHeight() - el.height() }; this.originalPosition = { left: curleft, top: curtop }; this.originalMousePosition = { left: event.pageX, top: event.pageY }; this.aspectRatio = (typeof o.aspectRatio === "number") ? o.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1); cursor = $(".ui-resizable-" + this.axis).css("cursor"); $("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor); this._addClass("ui-resizable-resizing"); this._propagate("start", event); return true;
		}, _mouseDrag: function(event) {
			var data, props, smp = this.originalMousePosition, a = this.axis, dx = (event.pageX - smp.left) || 0, dy = (event.pageY - smp.top) || 0, trigger = this._change[a]; this._updatePrevProperties(); if (!trigger) { return false; }
			data = trigger.apply(this, [event, dx, dy]); this._updateVirtualBoundaries(event.shiftKey); if (this._aspectRatio || event.shiftKey) { data = this._updateRatio(data, event); }
			data = this._respectSize(data, event); this._updateCache(data); this._propagate("resize", event); props = this._applyChanges(); if (!this._helper && this._proportionallyResizeElements.length) { this._proportionallyResize(); }
			if (!$.isEmptyObject(props)) { this._updatePrevProperties(); this._trigger("resize", event, this.ui()); this._applyChanges(); }
			return false;
		}, _mouseStop: function(event) {
			this.resizing = false; var pr, ista, soffseth, soffsetw, s, left, top, o = this.options, that = this; if (this._helper) {
				pr = this._proportionallyResizeElements; ista = pr.length && (/textarea/i).test(pr[0].nodeName); soffseth = ista && this._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height; soffsetw = ista ? 0 : that.sizeDiff.width; s = { width: (that.helper.width() - soffsetw), height: (that.helper.height() - soffseth) }; left = (parseFloat(that.element.css("left")) +
					(that.position.left - that.originalPosition.left)) || null; top = (parseFloat(that.element.css("top")) +
						(that.position.top - that.originalPosition.top)) || null; if (!o.animate) { this.element.css($.extend(s, { top: top, left: left })); }
				that.helper.height(that.size.height); that.helper.width(that.size.width); if (this._helper && !o.animate) { this._proportionallyResize(); }
			}
			$("body").css("cursor", "auto"); this._removeClass("ui-resizable-resizing"); this._propagate("stop", event); if (this._helper) { this.helper.remove(); }
			return false;
		}, _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left }; this.prevSize = { width: this.size.width, height: this.size.height }; }, _applyChanges: function() {
			var props = {}; if (this.position.top !== this.prevPosition.top) { props.top = this.position.top + "px"; }
			if (this.position.left !== this.prevPosition.left) { props.left = this.position.left + "px"; }
			if (this.size.width !== this.prevSize.width) { props.width = this.size.width + "px"; }
			if (this.size.height !== this.prevSize.height) { props.height = this.size.height + "px"; }
			this.helper.css(props); return props;
		}, _updateVirtualBoundaries: function(forceAspectRatio) {
			var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b, o = this.options; b = { minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0, maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity, minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0, maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity }; if (this._aspectRatio || forceAspectRatio) {
				pMinWidth = b.minHeight * this.aspectRatio; pMinHeight = b.minWidth / this.aspectRatio; pMaxWidth = b.maxHeight * this.aspectRatio; pMaxHeight = b.maxWidth / this.aspectRatio; if (pMinWidth > b.minWidth) { b.minWidth = pMinWidth; }
				if (pMinHeight > b.minHeight) { b.minHeight = pMinHeight; }
				if (pMaxWidth < b.maxWidth) { b.maxWidth = pMaxWidth; }
				if (pMaxHeight < b.maxHeight) { b.maxHeight = pMaxHeight; }
			}
			this._vBoundaries = b;
		}, _updateCache: function(data) {
			this.offset = this.helper.offset(); if (this._isNumber(data.left)) { this.position.left = data.left; }
			if (this._isNumber(data.top)) { this.position.top = data.top; }
			if (this._isNumber(data.height)) { this.size.height = data.height; }
			if (this._isNumber(data.width)) { this.size.width = data.width; }
		}, _updateRatio: function(data) {
			var cpos = this.position, csize = this.size, a = this.axis; if (this._isNumber(data.height)) { data.width = (data.height * this.aspectRatio); } else if (this._isNumber(data.width)) { data.height = (data.width / this.aspectRatio); }
			if (a === "sw") { data.left = cpos.left + (csize.width - data.width); data.top = null; }
			if (a === "nw") { data.top = cpos.top + (csize.height - data.height); data.left = cpos.left + (csize.width - data.width); }
			return data;
		}, _respectSize: function(data) {
			var o = this._vBoundaries, a = this.axis, ismaxw = this._isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width), ismaxh = this._isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height), isminw = this._isNumber(data.width) && o.minWidth && (o.minWidth > data.width), isminh = this._isNumber(data.height) && o.minHeight && (o.minHeight > data.height), dw = this.originalPosition.left + this.originalSize.width, dh = this.position.top + this.size.height, cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a); if (isminw) { data.width = o.minWidth; }
			if (isminh) { data.height = o.minHeight; }
			if (ismaxw) { data.width = o.maxWidth; }
			if (ismaxh) { data.height = o.maxHeight; }
			if (isminw && cw) { data.left = dw - o.minWidth; }
			if (ismaxw && cw) { data.left = dw - o.maxWidth; }
			if (isminh && ch) { data.top = dh - o.minHeight; }
			if (ismaxh && ch) { data.top = dh - o.maxHeight; }
			if (!data.width && !data.height && !data.left && data.top) { data.top = null; } else if (!data.width && !data.height && !data.top && data.left) { data.left = null; }
			return data;
		}, _getPaddingPlusBorderDimensions: function(element) {
			var i = 0, widths = [], borders = [element.css("borderTopWidth"), element.css("borderRightWidth"), element.css("borderBottomWidth"), element.css("borderLeftWidth")], paddings = [element.css("paddingTop"), element.css("paddingRight"), element.css("paddingBottom"), element.css("paddingLeft")]; for (; i < 4; i++) { widths[i] = (parseFloat(borders[i]) || 0); widths[i] += (parseFloat(paddings[i]) || 0); }
			return { height: widths[0] + widths[2], width: widths[1] + widths[3] };
		}, _proportionallyResize: function() {
			if (!this._proportionallyResizeElements.length) { return; }
			var prel, i = 0, element = this.helper || this.element; for (; i < this._proportionallyResizeElements.length; i++) {
				prel = this._proportionallyResizeElements[i]; if (!this.outerDimensions) { this.outerDimensions = this._getPaddingPlusBorderDimensions(prel); }
				prel.css({ height: (element.height() - this.outerDimensions.height) || 0, width: (element.width() - this.outerDimensions.width) || 0 });
			}
		}, _renderProxy: function() { var el = this.element, o = this.options; this.elementOffset = el.offset(); if (this._helper) { this.helper = this.helper || $("<div style='overflow:hidden;'></div>"); this._addClass(this.helper, this._helper); this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++o.zIndex }); this.helper.appendTo("body").disableSelection(); } else { this.helper = this.element; } }, _change: { e: function(event, dx) { return { width: this.originalSize.width + dx }; }, w: function(event, dx) { var cs = this.originalSize, sp = this.originalPosition; return { left: sp.left + dx, width: cs.width - dx }; }, n: function(event, dx, dy) { var cs = this.originalSize, sp = this.originalPosition; return { top: sp.top + dy, height: cs.height - dy }; }, s: function(event, dx, dy) { return { height: this.originalSize.height + dy }; }, se: function(event, dx, dy) { return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [event, dx, dy])); }, sw: function(event, dx, dy) { return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [event, dx, dy])); }, ne: function(event, dx, dy) { return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [event, dx, dy])); }, nw: function(event, dx, dy) { return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [event, dx, dy])); } }, _propagate: function(n, event) { $.ui.plugin.call(this, n, [event, this.ui()]); (n !== "resize" && this._trigger(n, event, this.ui())); }, plugins: {}, ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition }; }
	}); $.ui.plugin.add("resizable", "animate", {
		stop: function(event) {
			var that = $(this).resizable("instance"), o = that.options, pr = that._proportionallyResizeElements, ista = pr.length && (/textarea/i).test(pr[0].nodeName), soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height, soffsetw = ista ? 0 : that.sizeDiff.width, style = { width: (that.size.width - soffsetw), height: (that.size.height - soffseth) }, left = (parseFloat(that.element.css("left")) +
				(that.position.left - that.originalPosition.left)) || null, top = (parseFloat(that.element.css("top")) +
					(that.position.top - that.originalPosition.top)) || null; that.element.animate($.extend(style, top && left ? { top: top, left: left } : {}), {
						duration: o.animateDuration, easing: o.animateEasing, step: function() {
							var data = { width: parseFloat(that.element.css("width")), height: parseFloat(that.element.css("height")), top: parseFloat(that.element.css("top")), left: parseFloat(that.element.css("left")) }; if (pr && pr.length) { $(pr[0]).css({ width: data.width, height: data.height }); }
							that._updateCache(data); that._propagate("resize", event);
						}
					});
		}
	}); $.ui.plugin.add("resizable", "containment", {
		start: function() {
			var element, p, co, ch, cw, width, height, that = $(this).resizable("instance"), o = that.options, el = that.element, oc = o.containment, ce = (oc instanceof $) ? oc.get(0) : (/parent/.test(oc)) ? el.parent().get(0) : oc; if (!ce) { return; }
			that.containerElement = $(ce); if (/document/.test(oc) || oc === document) { that.containerOffset = { left: 0, top: 0 }; that.containerPosition = { left: 0, top: 0 }; that.parentData = { element: $(document), left: 0, top: 0, width: $(document).width(), height: $(document).height() || document.body.parentNode.scrollHeight }; } else { element = $(ce); p = []; $(["Top", "Right", "Left", "Bottom"]).each(function(i, name) { p[i] = that._num(element.css("padding" + name)); }); that.containerOffset = element.offset(); that.containerPosition = element.position(); that.containerSize = { height: (element.innerHeight() - p[3]), width: (element.innerWidth() - p[1]) }; co = that.containerOffset; ch = that.containerSize.height; cw = that.containerSize.width; width = (that._hasScroll(ce, "left") ? ce.scrollWidth : cw); height = (that._hasScroll(ce) ? ce.scrollHeight : ch); that.parentData = { element: ce, left: co.left, top: co.top, width: width, height: height }; }
		}, resize: function(event) {
			var woset, hoset, isParent, isOffsetRelative, that = $(this).resizable("instance"), o = that.options, co = that.containerOffset, cp = that.position, pRatio = that._aspectRatio || event.shiftKey, cop = { top: 0, left: 0 }, ce = that.containerElement, continueResize = true; if (ce[0] !== document && (/static/).test(ce.css("position"))) { cop = co; }
			if (cp.left < (that._helper ? co.left : 0)) {
				that.size.width = that.size.width +
					(that._helper ? (that.position.left - co.left) : (that.position.left - cop.left)); if (pRatio) { that.size.height = that.size.width / that.aspectRatio; continueResize = false; }
				that.position.left = o.helper ? co.left : 0;
			}
			if (cp.top < (that._helper ? co.top : 0)) {
				that.size.height = that.size.height +
					(that._helper ? (that.position.top - co.top) : that.position.top); if (pRatio) { that.size.width = that.size.height * that.aspectRatio; continueResize = false; }
				that.position.top = that._helper ? co.top : 0;
			}
			isParent = that.containerElement.get(0) === that.element.parent().get(0); isOffsetRelative = /relative|absolute/.test(that.containerElement.css("position")); if (isParent && isOffsetRelative) { that.offset.left = that.parentData.left + that.position.left; that.offset.top = that.parentData.top + that.position.top; } else { that.offset.left = that.element.offset().left; that.offset.top = that.element.offset().top; }
			woset = Math.abs(that.sizeDiff.width +
				(that._helper ? that.offset.left - cop.left : (that.offset.left - co.left))); hoset = Math.abs(that.sizeDiff.height +
					(that._helper ? that.offset.top - cop.top : (that.offset.top - co.top))); if (woset + that.size.width >= that.parentData.width) { that.size.width = that.parentData.width - woset; if (pRatio) { that.size.height = that.size.width / that.aspectRatio; continueResize = false; } }
			if (hoset + that.size.height >= that.parentData.height) { that.size.height = that.parentData.height - hoset; if (pRatio) { that.size.width = that.size.height * that.aspectRatio; continueResize = false; } }
			if (!continueResize) { that.position.left = that.prevPosition.left; that.position.top = that.prevPosition.top; that.size.width = that.prevSize.width; that.size.height = that.prevSize.height; }
		}, stop: function() {
			var that = $(this).resizable("instance"), o = that.options, co = that.containerOffset, cop = that.containerPosition, ce = that.containerElement, helper = $(that.helper), ho = helper.offset(), w = helper.outerWidth() - that.sizeDiff.width, h = helper.outerHeight() - that.sizeDiff.height; if (that._helper && !o.animate && (/relative/).test(ce.css("position"))) { $(this).css({ left: ho.left - cop.left - co.left, width: w, height: h }); }
			if (that._helper && !o.animate && (/static/).test(ce.css("position"))) { $(this).css({ left: ho.left - cop.left - co.left, width: w, height: h }); }
		}
	}); $.ui.plugin.add("resizable", "alsoResize", { start: function() { var that = $(this).resizable("instance"), o = that.options; $(o.alsoResize).each(function() { var el = $(this); el.data("ui-resizable-alsoresize", { width: parseFloat(el.width()), height: parseFloat(el.height()), left: parseFloat(el.css("left")), top: parseFloat(el.css("top")) }); }); }, resize: function(event, ui) { var that = $(this).resizable("instance"), o = that.options, os = that.originalSize, op = that.originalPosition, delta = { height: (that.size.height - os.height) || 0, width: (that.size.width - os.width) || 0, top: (that.position.top - op.top) || 0, left: (that.position.left - op.left) || 0 }; $(o.alsoResize).each(function() { var el = $(this), start = $(this).data("ui-resizable-alsoresize"), style = {}, css = el.parents(ui.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"]; $.each(css, function(i, prop) { var sum = (start[prop] || 0) + (delta[prop] || 0); if (sum && sum >= 0) { style[prop] = sum || null; } }); el.css(style); }); }, stop: function() { $(this).removeData("ui-resizable-alsoresize"); } }); $.ui.plugin.add("resizable", "ghost", {
		start: function() {
			var that = $(this).resizable("instance"), cs = that.size; that.ghost = that.originalElement.clone(); that.ghost.css({ opacity: 0.25, display: "block", position: "relative", height: cs.height, width: cs.width, margin: 0, left: 0, top: 0 }); that._addClass(that.ghost, "ui-resizable-ghost"); if ($.uiBackCompat !== false && typeof that.options.ghost === "string") { that.ghost.addClass(this.options.ghost); }
			that.ghost.appendTo(that.helper);
		}, resize: function() { var that = $(this).resizable("instance"); if (that.ghost) { that.ghost.css({ position: "relative", height: that.size.height, width: that.size.width }); } }, stop: function() { var that = $(this).resizable("instance"); if (that.ghost && that.helper) { that.helper.get(0).removeChild(that.ghost.get(0)); } }
	}); $.ui.plugin.add("resizable", "grid", {
		resize: function() {
			var outerDimensions, that = $(this).resizable("instance"), o = that.options, cs = that.size, os = that.originalSize, op = that.originalPosition, a = that.axis, grid = typeof o.grid === "number" ? [o.grid, o.grid] : o.grid, gridX = (grid[0] || 1), gridY = (grid[1] || 1), ox = Math.round((cs.width - os.width) / gridX) * gridX, oy = Math.round((cs.height - os.height) / gridY) * gridY, newWidth = os.width + ox, newHeight = os.height + oy, isMaxWidth = o.maxWidth && (o.maxWidth < newWidth), isMaxHeight = o.maxHeight && (o.maxHeight < newHeight), isMinWidth = o.minWidth && (o.minWidth > newWidth), isMinHeight = o.minHeight && (o.minHeight > newHeight); o.grid = grid; if (isMinWidth) { newWidth += gridX; }
			if (isMinHeight) { newHeight += gridY; }
			if (isMaxWidth) { newWidth -= gridX; }
			if (isMaxHeight) { newHeight -= gridY; }
			if (/^(se|s|e)$/.test(a)) { that.size.width = newWidth; that.size.height = newHeight; } else if (/^(ne)$/.test(a)) { that.size.width = newWidth; that.size.height = newHeight; that.position.top = op.top - oy; } else if (/^(sw)$/.test(a)) { that.size.width = newWidth; that.size.height = newHeight; that.position.left = op.left - ox; } else {
				if (newHeight - gridY <= 0 || newWidth - gridX <= 0) { outerDimensions = that._getPaddingPlusBorderDimensions(this); }
				if (newHeight - gridY > 0) { that.size.height = newHeight; that.position.top = op.top - oy; } else { newHeight = gridY - outerDimensions.height; that.size.height = newHeight; that.position.top = op.top + os.height - newHeight; }
				if (newWidth - gridX > 0) { that.size.width = newWidth; that.position.left = op.left - ox; } else { newWidth = gridX - outerDimensions.width; that.size.width = newWidth; that.position.left = op.left + os.width - newWidth; }
			}
		}
	}); return $.ui.resizable;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/dialog.js', ["jquery", "./button", "./draggable", "./mouse", "./resizable", "../focusable", "../keycode", "../position", "../safe-active-element", "../safe-blur", "../tabbable", "../unique-id", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	$.widget("ui.dialog", {
		version: "@VERSION", options: { appendTo: "body", autoOpen: true, buttons: [], classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" }, closeOnEscape: true, closeText: "Close", draggable: true, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: false, position: { my: "center", at: "center", of: window, collision: "fit", using: function(pos) { var topOffset = $(this).css(pos).offset().top; if (topOffset < 0) { $(this).css("top", pos.top - topOffset); } } }, resizable: true, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null }, sizeRelatedOptions: { buttons: true, height: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, width: true }, resizableRelatedOptions: { maxHeight: true, maxWidth: true, minHeight: true, minWidth: true }, _create: function() {
			this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }; this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }; this.originalTitle = this.element.attr("title"); if (this.options.title == null && this.originalTitle != null) { this.options.title = this.originalTitle; }
			if (this.options.disabled) { this.options.disabled = false; }
			this._createWrapper(); this.element.show().removeAttr("title").appendTo(this.uiDialog); this._addClass("ui-dialog-content", "ui-widget-content"); this._createTitlebar(); this._createButtonPane(); if (this.options.draggable && $.fn.draggable) { this._makeDraggable(); }
			if (this.options.resizable && $.fn.resizable) { this._makeResizable(); }
			this._isOpen = false; this._trackFocus();
		}, _init: function() { if (this.options.autoOpen) { this.open(); } }, _appendTo: function() {
			var element = this.options.appendTo; if (element && (element.jquery || element.nodeType)) { return $(element); }
			return this.document.find(element || "body").eq(0);
		}, _destroy: function() {
			var next, originalPosition = this.originalPosition; this._untrackInstance(); this._destroyOverlay(); this.element.removeUniqueId().css(this.originalCss).detach(); this.uiDialog.remove(); if (this.originalTitle) { this.element.attr("title", this.originalTitle); }
			next = originalPosition.parent.children().eq(originalPosition.index); if (next.length && next[0] !== this.element[0]) { next.before(this.element); } else { originalPosition.parent.append(this.element); }
		}, widget: function() { return this.uiDialog; }, disable: $.noop, enable: $.noop, close: function(event) {
			var that = this; if (!this._isOpen || this._trigger("beforeClose", event) === false) { return; }
			this._isOpen = false; this._focusedElement = null; this._destroyOverlay(); this._untrackInstance(); if (!this.opener.filter(":focusable").trigger("focus").length) { $.ui.safeBlur($.ui.safeActiveElement(this.document[0])); }
			this._hide(this.uiDialog, this.options.hide, function() { that._trigger("close", event); });
		}, isOpen: function() { return this._isOpen; }, moveToTop: function() { this._moveToTop(); }, _moveToTop: function(event, silent) {
			var moved = false, zIndices = this.uiDialog.siblings(".ui-front:visible").map(function() { return +$(this).css("z-index"); }).get(), zIndexMax = Math.max.apply(null, zIndices); if (zIndexMax >= +this.uiDialog.css("z-index")) { this.uiDialog.css("z-index", zIndexMax + 1); moved = true; }
			if (moved && !silent) { this._trigger("focus", event); }
			return moved;
		}, open: function() {
			var that = this; if (this._isOpen) {
				if (this._moveToTop()) { this._focusTabbable(); }
				return;
			}
			this._isOpen = true; this.opener = $($.ui.safeActiveElement(this.document[0])); this._size(); this._position(); this._createOverlay(); this._moveToTop(null, true); if (this.overlay) { this.overlay.css("z-index", this.uiDialog.css("z-index") - 1); }
			this._show(this.uiDialog, this.options.show, function() { that._focusTabbable(); that._trigger("focus"); }); this._makeFocusTarget(); this._trigger("open");
		}, _focusTabbable: function() {
			var hasFocus = this._focusedElement; if (!hasFocus) { hasFocus = this.element.find("[autofocus]"); }
			if (!hasFocus.length) { hasFocus = this.element.find(":tabbable"); }
			if (!hasFocus.length) { hasFocus = this.uiDialogButtonPane.find(":tabbable"); }
			if (!hasFocus.length) { hasFocus = this.uiDialogTitlebarClose.filter(":tabbable"); }
			if (!hasFocus.length) { hasFocus = this.uiDialog; }
			hasFocus.eq(0).trigger("focus");
		}, _keepFocus: function(event) {
			function checkFocus() { var activeElement = $.ui.safeActiveElement(this.document[0]), isActive = this.uiDialog[0] === activeElement || $.contains(this.uiDialog[0], activeElement); if (!isActive) { this._focusTabbable(); } }
			event.preventDefault(); checkFocus.call(this); this._delay(checkFocus);
		}, _createWrapper: function() {
			this.uiDialog = $("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()); this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"); this._on(this.uiDialog, {
				keydown: function(event) {
					if (this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode && event.keyCode === $.ui.keyCode.ESCAPE) { event.preventDefault(); this.close(event); return; }
					if (event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented()) { return; }
					var tabbables = this.uiDialog.find(":tabbable"), first = tabbables.filter(":first"), last = tabbables.filter(":last"); if ((event.target === last[0] || event.target === this.uiDialog[0]) && !event.shiftKey) { this._delay(function() { first.trigger("focus"); }); event.preventDefault(); } else if ((event.target === first[0] || event.target === this.uiDialog[0]) && event.shiftKey) { this._delay(function() { last.trigger("focus"); }); event.preventDefault(); }
				}, mousedown: function(event) { if (this._moveToTop(event)) { this._focusTabbable(); } }
			}); if (!this.element.find("[aria-describedby]").length) { this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") }); }
		}, _createTitlebar: function() { var uiDialogTitle; this.uiDialogTitlebar = $("<div>"); this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"); this._on(this.uiDialogTitlebar, { mousedown: function(event) { if (!$(event.target).closest(".ui-dialog-titlebar-close")) { this.uiDialog.trigger("focus"); } } }); this.uiDialogTitlebarClose = $("<button type='button'></button>").button({ label: $("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: false }).appendTo(this.uiDialogTitlebar); this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"); this._on(this.uiDialogTitlebarClose, { click: function(event) { event.preventDefault(); this.close(event); } }); uiDialogTitle = $("<span>").uniqueId().prependTo(this.uiDialogTitlebar); this._addClass(uiDialogTitle, "ui-dialog-title"); this._title(uiDialogTitle); this.uiDialogTitlebar.prependTo(this.uiDialog); this.uiDialog.attr({ "aria-labelledby": uiDialogTitle.attr("id") }); }, _title: function(title) { if (this.options.title) { title.text(this.options.title); } else { title.html("&#160;"); } }, _createButtonPane: function() { this.uiDialogButtonPane = $("<div>"); this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"); this.uiButtonSet = $("<div>").appendTo(this.uiDialogButtonPane); this._addClass(this.uiButtonSet, "ui-dialog-buttonset"); this._createButtons(); }, _createButtons: function() {
			var that = this, buttons = this.options.buttons; this.uiDialogButtonPane.remove(); this.uiButtonSet.empty(); if ($.isEmptyObject(buttons) || ($.isArray(buttons) && !buttons.length)) { this._removeClass(this.uiDialog, "ui-dialog-buttons"); return; }
			$.each(buttons, function(name, props) { var click, buttonOptions; props = $.isFunction(props) ? { click: props, text: name } : props; props = $.extend({ type: "button" }, props); click = props.click; buttonOptions = { icon: props.icon, iconPosition: props.iconPosition, showLabel: props.showLabel }; delete props.click; delete props.icon; delete props.iconPosition; delete props.showLabel; $("<button></button>", props).button(buttonOptions).appendTo(that.uiButtonSet).on("click", function() { click.apply(that.element[0], arguments); }); }); this._addClass(this.uiDialog, "ui-dialog-buttons"); this.uiDialogButtonPane.appendTo(this.uiDialog);
		}, _makeDraggable: function() {
			var that = this, options = this.options; function filteredUi(ui) { return { position: ui.position, offset: ui.offset }; }
			this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function(event, ui) { that._addClass($(this), "ui-dialog-dragging"); that._blockFrames(); that._trigger("dragStart", event, filteredUi(ui)); }, drag: function(event, ui) { that._trigger("drag", event, filteredUi(ui)); }, stop: function(event, ui) { var left = ui.offset.left - that.document.scrollLeft(), top = ui.offset.top - that.document.scrollTop(); options.position = { my: "left top", at: "left" + (left >= 0 ? "+" : "") + left + " " + "top" + (top >= 0 ? "+" : "") + top, of: that.window }; that._removeClass($(this), "ui-dialog-dragging"); that._unblockFrames(); that._trigger("dragStop", event, filteredUi(ui)); } });
		}, _makeResizable: function() {
			var that = this, options = this.options, handles = options.resizable, position = this.uiDialog.css("position"), resizeHandles = typeof handles === "string" ? handles : "n,e,s,w,se,sw,ne,nw"; function filteredUi(ui) { return { originalPosition: ui.originalPosition, originalSize: ui.originalSize, position: ui.position, size: ui.size }; }
			this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: options.maxWidth, maxHeight: options.maxHeight, minWidth: options.minWidth, minHeight: this._minHeight(), handles: resizeHandles, start: function(event, ui) { that._addClass($(this), "ui-dialog-resizing"); that._blockFrames(); that._trigger("resizeStart", event, filteredUi(ui)); }, resize: function(event, ui) { that._trigger("resize", event, filteredUi(ui)); }, stop: function(event, ui) { var offset = that.uiDialog.offset(), left = offset.left - that.document.scrollLeft(), top = offset.top - that.document.scrollTop(); options.height = that.uiDialog.height(); options.width = that.uiDialog.width(); options.position = { my: "left top", at: "left" + (left >= 0 ? "+" : "") + left + " " + "top" + (top >= 0 ? "+" : "") + top, of: that.window }; that._removeClass($(this), "ui-dialog-resizing"); that._unblockFrames(); that._trigger("resizeStop", event, filteredUi(ui)); } }).css("position", position);
		}, _trackFocus: function() { this._on(this.widget(), { focusin: function(event) { this._makeFocusTarget(); this._focusedElement = $(event.target); } }); }, _makeFocusTarget: function() { this._untrackInstance(); this._trackingInstances().unshift(this); }, _untrackInstance: function() { var instances = this._trackingInstances(), exists = $.inArray(this, instances); if (exists !== -1) { instances.splice(exists, 1); } }, _trackingInstances: function() {
			var instances = this.document.data("ui-dialog-instances"); if (!instances) { instances = []; this.document.data("ui-dialog-instances", instances); }
			return instances;
		}, _minHeight: function() { var options = this.options; return options.height === "auto" ? options.minHeight : Math.min(options.minHeight, options.height); }, _position: function() {
			var isVisible = this.uiDialog.is(":visible"); if (!isVisible) { this.uiDialog.show(); }
			this.uiDialog.position(this.options.position); if (!isVisible) { this.uiDialog.hide(); }
		}, _setOptions: function(options) {
			var that = this, resize = false, resizableOptions = {}; $.each(options, function(key, value) {
				that._setOption(key, value); if (key in that.sizeRelatedOptions) { resize = true; }
				if (key in that.resizableRelatedOptions) { resizableOptions[key] = value; }
			}); if (resize) { this._size(); this._position(); }
			if (this.uiDialog.is(":data(ui-resizable)")) { this.uiDialog.resizable("option", resizableOptions); }
		}, _setOption: function(key, value) {
			var isDraggable, isResizable, uiDialog = this.uiDialog; if (key === "disabled") { return; }
			this._super(key, value); if (key === "appendTo") { this.uiDialog.appendTo(this._appendTo()); }
			if (key === "buttons") { this._createButtons(); }
			if (key === "closeText") { this.uiDialogTitlebarClose.button({ label: $("<a>").text("" + this.options.closeText).html() }); }
			if (key === "draggable") {
				isDraggable = uiDialog.is(":data(ui-draggable)"); if (isDraggable && !value) { uiDialog.draggable("destroy"); }
				if (!isDraggable && value) { this._makeDraggable(); }
			}
			if (key === "position") { this._position(); }
			if (key === "resizable") {
				isResizable = uiDialog.is(":data(ui-resizable)"); if (isResizable && !value) { uiDialog.resizable("destroy"); }
				if (isResizable && typeof value === "string") { uiDialog.resizable("option", "handles", value); }
				if (!isResizable && value !== false) { this._makeResizable(); }
			}
			if (key === "title") { this._title(this.uiDialogTitlebar.find(".ui-dialog-title")); }
		}, _size: function() {
			var nonContentHeight, minContentHeight, maxContentHeight, options = this.options; this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }); if (options.minWidth > options.width) { options.width = options.minWidth; }
			nonContentHeight = this.uiDialog.css({ height: "auto", width: options.width }).outerHeight(); minContentHeight = Math.max(0, options.minHeight - nonContentHeight); maxContentHeight = typeof options.maxHeight === "number" ? Math.max(0, options.maxHeight - nonContentHeight) : "none"; if (options.height === "auto") { this.element.css({ minHeight: minContentHeight, maxHeight: maxContentHeight, height: "auto" }); } else { this.element.height(Math.max(0, options.height - nonContentHeight)); }
			if (this.uiDialog.is(":data(ui-resizable)")) { this.uiDialog.resizable("option", "minHeight", this._minHeight()); }
		}, _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var iframe = $(this); return $("<div>").css({ position: "absolute", width: iframe.outerWidth(), height: iframe.outerHeight() }).appendTo(iframe.parent()).offset(iframe.offset())[0]; }); }, _unblockFrames: function() { if (this.iframeBlocks) { this.iframeBlocks.remove(); delete this.iframeBlocks; } }, _allowInteraction: function(event) {
			if ($(event.target).closest(".ui-dialog").length) { return true; }
			return !!$(event.target).closest(".ui-datepicker").length;
		}, _createOverlay: function() {
			if (!this.options.modal) { return; }
			var isOpening = true; this._delay(function() { isOpening = false; }); if (!this.document.data("ui-dialog-overlays")) {
				this._on(this.document, {
					focusin: function(event) {
						if (isOpening) { return; }
						if (!this._allowInteraction(event)) { event.preventDefault(); this._trackingInstances()[0]._focusTabbable(); }
					}
				});
			}
			this.overlay = $("<div>").appendTo(this._appendTo()); this._addClass(this.overlay, null, "ui-widget-overlay ui-front"); this._on(this.overlay, { mousedown: "_keepFocus" }); this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
		}, _destroyOverlay: function() {
			if (!this.options.modal) { return; }
			if (this.overlay) {
				var overlays = this.document.data("ui-dialog-overlays") - 1; if (!overlays) { this._off(this.document, "focusin"); this.document.removeData("ui-dialog-overlays"); } else { this.document.data("ui-dialog-overlays", overlays); }
				this.overlay.remove(); this.overlay = null;
			}
		}
	}); if ($.uiBackCompat !== false) {
		$.widget("ui.dialog", $.ui.dialog, {
			options: { dialogClass: "" }, _createWrapper: function() { this._super(); this.uiDialog.addClass(this.options.dialogClass); }, _setOption: function(key, value) {
				if (key === "dialogClass") { this.uiDialog.removeClass(this.options.dialogClass).addClass(value); }
				this._superApply(arguments);
			}
		});
	}
	return $.ui.dialog;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/droppable.js', ["jquery", "./draggable", "./mouse", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	$.widget("ui.droppable", {
		version: "@VERSION", widgetEventPrefix: "drop", options: { accept: "*", addClasses: true, greedy: false, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function() { var proportions, o = this.options, accept = o.accept; this.isover = false; this.isout = true; this.accept = $.isFunction(accept) ? accept : function(d) { return d.is(accept); }; this.proportions = function() { if (arguments.length) { proportions = arguments[0]; } else { return proportions ? proportions : proportions = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }; } }; this._addToManager(o.scope); o.addClasses && this._addClass("ui-droppable"); }, _addToManager: function(scope) { $.ui.ddmanager.droppables[scope] = $.ui.ddmanager.droppables[scope] || []; $.ui.ddmanager.droppables[scope].push(this); }, _splice: function(drop) { var i = 0; for (; i < drop.length; i++) { if (drop[i] === this) { drop.splice(i, 1); } } }, _destroy: function() { var drop = $.ui.ddmanager.droppables[this.options.scope]; this._splice(drop); }, _setOption: function(key, value) {
			if (key === "accept") { this.accept = $.isFunction(value) ? value : function(d) { return d.is(value); }; } else if (key === "scope") { var drop = $.ui.ddmanager.droppables[this.options.scope]; this._splice(drop); this._addToManager(value); }
			this._super(key, value);
		}, _activate: function(event) { var draggable = $.ui.ddmanager.current; this._addActiveClass(); if (draggable) { this._trigger("activate", event, this.ui(draggable)); } }, _deactivate: function(event) { var draggable = $.ui.ddmanager.current; this._removeActiveClass(); if (draggable) { this._trigger("deactivate", event, this.ui(draggable)); } }, _over: function(event) {
			var draggable = $.ui.ddmanager.current; if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) { return; }
			if (this.accept.call(this.element[0], (draggable.currentItem || draggable.element))) { this._addHoverClass(); this._trigger("over", event, this.ui(draggable)); }
		}, _out: function(event) {
			var draggable = $.ui.ddmanager.current; if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) { return; }
			if (this.accept.call(this.element[0], (draggable.currentItem || draggable.element))) { this._removeHoverClass(); this._trigger("out", event, this.ui(draggable)); }
		}, _drop: function(event, custom) {
			var draggable = custom || $.ui.ddmanager.current, childrenIntersection = false; if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) { return false; }
			this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var inst = $(this).droppable("instance"); if (inst.options.greedy && !inst.options.disabled && inst.options.scope === draggable.options.scope && inst.accept.call(inst.element[0], (draggable.currentItem || draggable.element)) && intersect(draggable, $.extend(inst, { offset: inst.element.offset() }), inst.options.tolerance, event)) { childrenIntersection = true; return false; } }); if (childrenIntersection) { return false; }
			if (this.accept.call(this.element[0], (draggable.currentItem || draggable.element))) { this._removeActiveClass(); this._removeHoverClass(); this._trigger("drop", event, this.ui(draggable)); return this.element; }
			return false;
		}, ui: function(c) { return { draggable: (c.currentItem || c.element), helper: c.helper, position: c.position, offset: c.positionAbs }; }, _addHoverClass: function() { this._addClass("ui-droppable-hover"); }, _removeHoverClass: function() { this._removeClass("ui-droppable-hover"); }, _addActiveClass: function() { this._addClass("ui-droppable-active"); }, _removeActiveClass: function() { this._removeClass("ui-droppable-active"); }
	}); var intersect = (function() {
		function isOverAxis(x, reference, size) { return (x >= reference) && (x < (reference + size)); }
		return function(draggable, droppable, toleranceMode, event) {
			if (!droppable.offset) { return false; }
			var x1 = (draggable.positionAbs || draggable.position.absolute).left + draggable.margins.left, y1 = (draggable.positionAbs || draggable.position.absolute).top + draggable.margins.top, x2 = x1 + draggable.helperProportions.width, y2 = y1 + draggable.helperProportions.height, l = droppable.offset.left, t = droppable.offset.top, r = l + droppable.proportions().width, b = t + droppable.proportions().height; switch (toleranceMode) { case "fit": return (l <= x1 && x2 <= r && t <= y1 && y2 <= b); case "intersect": return (l < x1 + (draggable.helperProportions.width / 2) && x2 - (draggable.helperProportions.width / 2) < r && t < y1 + (draggable.helperProportions.height / 2) && y2 - (draggable.helperProportions.height / 2) < b); case "pointer": return isOverAxis(event.pageY, t, droppable.proportions().height) && isOverAxis(event.pageX, l, droppable.proportions().width); case "touch": return ((y1 >= t && y1 <= b) || (y2 >= t && y2 <= b) || (y1 < t && y2 > b)) && ((x1 >= l && x1 <= r) || (x2 >= l && x2 <= r) || (x1 < l && x2 > r)); default: return false; }
		};
	})(); $.ui.ddmanager = {
		current: null, droppables: { "default": [] }, prepareOffsets: function(t, event) {
			var i, j, m = $.ui.ddmanager.droppables[t.options.scope] || [], type = event ? event.type : null, list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack(); droppablesLoop: for (i = 0; i < m.length; i++) {
				if (m[i].options.disabled || (t && !m[i].accept.call(m[i].element[0], (t.currentItem || t.element)))) { continue; }
				for (j = 0; j < list.length; j++) { if (list[j] === m[i].element[0]) { m[i].proportions().height = 0; continue droppablesLoop; } }
				m[i].visible = m[i].element.css("display") !== "none"; if (!m[i].visible) { continue; }
				if (type === "mousedown") { m[i]._activate.call(m[i], event); }
				m[i].offset = m[i].element.offset(); m[i].proportions({ width: m[i].element[0].offsetWidth, height: m[i].element[0].offsetHeight });
			}
		}, drop: function(draggable, event) {
			var dropped = false; $.each(($.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), function() {
				if (!this.options) { return; }
				if (!this.options.disabled && this.visible && intersect(draggable, this, this.options.tolerance, event)) { dropped = this._drop.call(this, event) || dropped; }
				if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (draggable.currentItem || draggable.element))) { this.isout = true; this.isover = false; this._deactivate.call(this, event); }
			}); return dropped;
		}, dragStart: function(draggable, event) { draggable.element.parentsUntil("body").on("scroll.droppable", function() { if (!draggable.options.refreshPositions) { $.ui.ddmanager.prepareOffsets(draggable, event); } }); }, drag: function(draggable, event) {
			if (draggable.options.refreshPositions) { $.ui.ddmanager.prepareOffsets(draggable, event); }
			$.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {
				if (this.options.disabled || this.greedyChild || !this.visible) { return; }
				var parentInstance, scope, parent, intersects = intersect(draggable, this, this.options.tolerance, event), c = !intersects && this.isover ? "isout" : (intersects && !this.isover ? "isover" : null); if (!c) { return; }
				if (this.options.greedy) { scope = this.options.scope; parent = this.element.parents(":data(ui-droppable)").filter(function() { return $(this).droppable("instance").options.scope === scope; }); if (parent.length) { parentInstance = $(parent[0]).droppable("instance"); parentInstance.greedyChild = (c === "isover"); } }
				if (parentInstance && c === "isover") { parentInstance.isover = false; parentInstance.isout = true; parentInstance._out.call(parentInstance, event); }
				this[c] = true; this[c === "isout" ? "isover" : "isout"] = false; this[c === "isover" ? "_over" : "_out"].call(this, event); if (parentInstance && c === "isout") { parentInstance.isout = false; parentInstance.isover = true; parentInstance._over.call(parentInstance, event); }
			});
		}, dragStop: function(draggable, event) { draggable.element.parentsUntil("body").off("scroll.droppable"); if (!draggable.options.refreshPositions) { $.ui.ddmanager.prepareOffsets(draggable, event); } }
	}; if ($.uiBackCompat !== false) { $.widget("ui.droppable", $.ui.droppable, { options: { hoverClass: false, activeClass: false }, _addActiveClass: function() { this._super(); if (this.options.activeClass) { this.element.addClass(this.options.activeClass); } }, _removeActiveClass: function() { this._super(); if (this.options.activeClass) { this.element.removeClass(this.options.activeClass); } }, _addHoverClass: function() { this._super(); if (this.options.hoverClass) { this.element.addClass(this.options.hoverClass); } }, _removeHoverClass: function() { this._super(); if (this.options.hoverClass) { this.element.removeClass(this.options.hoverClass); } } }); }
	return $.ui.droppable;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/progressbar.js', ["jquery", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	return $.widget("ui.progressbar", {
		version: "@VERSION", options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null }, min: 0, _create: function() { this.oldValue = this.options.value = this._constrainedValue(); this.element.attr({ role: "progressbar", "aria-valuemin": this.min }); this._addClass("ui-progressbar", "ui-widget ui-widget-content"); this.valueDiv = $("<div>").appendTo(this.element); this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"); this._refreshValue(); }, _destroy: function() { this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"); this.valueDiv.remove(); }, value: function(newValue) {
			if (newValue === undefined) { return this.options.value; }
			this.options.value = this._constrainedValue(newValue); this._refreshValue();
		}, _constrainedValue: function(newValue) {
			if (newValue === undefined) { newValue = this.options.value; }
			this.indeterminate = newValue === false; if (typeof newValue !== "number") { newValue = 0; }
			return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, newValue));
		}, _setOptions: function(options) { var value = options.value; delete options.value; this._super(options); this.options.value = this._constrainedValue(value); this._refreshValue(); }, _setOption: function(key, value) {
			if (key === "max") { value = Math.max(this.min, value); }
			this._super(key, value);
		}, _setOptionDisabled: function(value) { this._super(value); this.element.attr("aria-disabled", value); this._toggleClass(null, "ui-state-disabled", !!value); }, _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min); }, _refreshValue: function() {
			var value = this.options.value, percentage = this._percentage(); this.valueDiv.toggle(this.indeterminate || value > this.min).width(percentage.toFixed(0) + "%"); this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, value === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate); if (this.indeterminate) { this.element.removeAttr("aria-valuenow"); if (!this.overlayDiv) { this.overlayDiv = $("<div>").appendTo(this.valueDiv); this._addClass(this.overlayDiv, "ui-progressbar-overlay"); } } else { this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": value }); if (this.overlayDiv) { this.overlayDiv.remove(); this.overlayDiv = null; } }
			if (this.oldValue !== value) { this.oldValue = value; this._trigger("change"); }
			if (value === this.options.max) { this._trigger("complete"); }
		}
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/selectable.js', ["jquery", "./mouse", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	return $.widget("ui.selectable", $.ui.mouse, {
		version: "@VERSION", options: { appendTo: "body", autoRefresh: true, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function() { var that = this; this._addClass("ui-selectable"); this.dragged = false; this.refresh = function() { that.selectees = $(that.options.filter, that.element[0]); that._addClass(that.selectees, "ui-selectee"); that.selectees.each(function() { var $this = $(this), pos = $this.offset(); $.data(this, "selectable-item", { element: this, $element: $this, left: pos.left, top: pos.top, right: pos.left + $this.outerWidth(), bottom: pos.top + $this.outerHeight(), startselected: false, selected: $this.hasClass("ui-selected"), selecting: $this.hasClass("ui-selecting"), unselecting: $this.hasClass("ui-unselecting") }); }); }; this.refresh(); this._mouseInit(); this.helper = $("<div>"); this._addClass(this.helper, "ui-selectable-helper"); }, _destroy: function() { this.selectees.removeData("selectable-item"); this._mouseDestroy(); }, _mouseStart: function(event) {
			var that = this, options = this.options; this.opos = [event.pageX, event.pageY]; if (this.options.disabled) { return; }
			this.selectees = $(options.filter, this.element[0]); this._trigger("start", event); $(options.appendTo).append(this.helper); this.helper.css({ "left": event.pageX, "top": event.pageY, "width": 0, "height": 0 }); if (options.autoRefresh) { this.refresh(); }
			this.selectees.filter(".ui-selected").each(function() { var selectee = $.data(this, "selectable-item"); selectee.startselected = true; if (!event.metaKey && !event.ctrlKey) { that._removeClass(selectee.$element, "ui-selected"); selectee.selected = false; that._addClass(selectee.$element, "ui-unselecting"); selectee.unselecting = true; that._trigger("unselecting", event, { unselecting: selectee.element }); } }); $(event.target).parents().addBack().each(function() {
				var doSelect, selectee = $.data(this, "selectable-item"); if (selectee) {
					doSelect = (!event.metaKey && !event.ctrlKey) || !selectee.$element.hasClass("ui-selected"); that._removeClass(selectee.$element, doSelect ? "ui-unselecting" : "ui-selected")._addClass(selectee.$element, doSelect ? "ui-selecting" : "ui-unselecting"); selectee.unselecting = !doSelect; selectee.selecting = doSelect; selectee.selected = doSelect; if (doSelect) { that._trigger("selecting", event, { selecting: selectee.element }); } else { that._trigger("unselecting", event, { unselecting: selectee.element }); }
					return false;
				}
			});
		}, _mouseDrag: function(event) {
			this.dragged = true; if (this.options.disabled) { return; }
			var tmp, that = this, options = this.options, x1 = this.opos[0], y1 = this.opos[1], x2 = event.pageX, y2 = event.pageY; if (x1 > x2) { tmp = x2; x2 = x1; x1 = tmp; }
			if (y1 > y2) { tmp = y2; y2 = y1; y1 = tmp; }
			this.helper.css({ left: x1, top: y1, width: x2 - x1, height: y2 - y1 }); this.selectees.each(function() {
				var selectee = $.data(this, "selectable-item"), hit = false; if (!selectee || selectee.element === that.element[0]) { return; }
				if (options.tolerance === "touch") { hit = (!(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1)); } else if (options.tolerance === "fit") { hit = (selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2); }
				if (hit) {
					if (selectee.selected) { that._removeClass(selectee.$element, "ui-selected"); selectee.selected = false; }
					if (selectee.unselecting) { that._removeClass(selectee.$element, "ui-unselecting"); selectee.unselecting = false; }
					if (!selectee.selecting) { that._addClass(selectee.$element, "ui-selecting"); selectee.selecting = true; that._trigger("selecting", event, { selecting: selectee.element }); }
				} else {
					if (selectee.selecting) {
						if ((event.metaKey || event.ctrlKey) && selectee.startselected) { that._removeClass(selectee.$element, "ui-selecting"); selectee.selecting = false; that._addClass(selectee.$element, "ui-selected"); selectee.selected = true; } else {
							that._removeClass(selectee.$element, "ui-selecting"); selectee.selecting = false; if (selectee.startselected) { that._addClass(selectee.$element, "ui-unselecting"); selectee.unselecting = true; }
							that._trigger("unselecting", event, { unselecting: selectee.element });
						}
					}
					if (selectee.selected) { if (!event.metaKey && !event.ctrlKey && !selectee.startselected) { that._removeClass(selectee.$element, "ui-selected"); selectee.selected = false; that._addClass(selectee.$element, "ui-unselecting"); selectee.unselecting = true; that._trigger("unselecting", event, { unselecting: selectee.element }); } }
				}
			}); return false;
		}, _mouseStop: function(event) { var that = this; this.dragged = false; $(".ui-unselecting", this.element[0]).each(function() { var selectee = $.data(this, "selectable-item"); that._removeClass(selectee.$element, "ui-unselecting"); selectee.unselecting = false; selectee.startselected = false; that._trigger("unselected", event, { unselected: selectee.element }); }); $(".ui-selecting", this.element[0]).each(function() { var selectee = $.data(this, "selectable-item"); that._removeClass(selectee.$element, "ui-selecting")._addClass(selectee.$element, "ui-selected"); selectee.selecting = false; selectee.selected = true; selectee.startselected = true; that._trigger("selected", event, { selected: selectee.element }); }); this._trigger("stop", event); this.helper.remove(); return false; }
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/selectmenu.js', ["jquery", "./menu", "../escape-selector", "../form-reset-mixin", "../keycode", "../labels", "../position", "../unique-id", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	return $.widget("ui.selectmenu", [$.ui.formResetMixin, {
		version: "@VERSION", defaultElement: "<select>", options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: false, change: null, close: null, focus: null, open: null, select: null }, _create: function() { var selectmenuId = this.element.uniqueId().attr("id"); this.ids = { element: selectmenuId, button: selectmenuId + "-button", menu: selectmenuId + "-menu" }; this._drawButton(); this._drawMenu(); this._bindFormResetHandler(); this._rendered = false; this.menuItems = $(); }, _drawButton: function() {
			var icon, space, that = this, item = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex); this.labels = this.element.labels().attr("for", this.ids.button); this._on(this.labels, { click: function(event) { this.button.focus(); event.preventDefault(); } }); this.element.hide(); this.button = $("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element); this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"); icon = $("<span>").prependTo(this.button); space = $("<span> </span>"); this._addClass(space, "ui-selectmenu-icon-space"); this._addClass(icon, null, "ui-icon " + this.options.icons.button); icon.after(space); this.buttonItem = this._renderButtonItem(item).appendTo(this.button); if (this.options.width !== false) { this._resizeButton(); }
			this._on(this.button, this._buttonEvents); this.button.one("focusin", function() { if (!that._rendered) { that._refreshMenu(); } });
		}, _drawMenu: function() {
			var that = this; this.menu = $("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }); this.menuWrap = $("<div>").append(this.menu); this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"); this.menuWrap.appendTo(this._appendTo()); this.menuInstance = this.menu.menu({
				classes: { "ui-menu": "ui-corner-bottom" }, role: "listbox", select: function(event, ui) { event.preventDefault(); that._setSelection(); that._select(ui.item.data("ui-selectmenu-item"), event); }, focus: function(event, ui) {
					var item = ui.item.data("ui-selectmenu-item"); if (that.focusIndex != null && item.index !== that.focusIndex) { that._trigger("focus", event, { item: item }); if (!that.isOpen) { that._select(item, event); } }
					that.focusIndex = item.index; that.button.attr("aria-activedescendant", that.menuItems.eq(item.index).attr("id"));
				}
			}).menu("instance"); this.menuInstance._off(this.menu, "mouseleave"); this.menuInstance._closeOnDocumentClick = function() { return false; }; this.menuInstance._isDivider = function() { return false; };
		}, refresh: function() { this._refreshMenu(); this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})); if (this.options.width === null) { this._resizeButton(); } }, _refreshMenu: function() {
			var item, options = this.element.find("option"); this.menu.empty(); this._parseOptions(options); this._renderMenu(this.menu, this.items); this.menuInstance.refresh(); this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"); this._rendered = true; if (!options.length) { return; }
			item = this._getSelectedItem(); this.menuInstance.focus(null, item); this._setAria(item.data("ui-selectmenu-item")); this._setOption("disabled", this.element.prop("disabled"));
		}, open: function(event) {
			if (this.options.disabled) { return; }
			if (!this._rendered) { this._refreshMenu(); } else { this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"); this.menuInstance.focus(null, this._getSelectedItem()); }
			if (!this.menuItems.length) { return; }
			this.isOpen = true; this._toggleAttr(); this._resizeMenu(); this._position(); this._on(this.document, this._documentClick); this._trigger("open", event);
		}, _position: function() { this.menuWrap.position($.extend({ of: this.button }, this.options.position)); }, close: function(event) {
			if (!this.isOpen) { return; }
			this.isOpen = false; this._toggleAttr(); this.range = null; this._off(this.document); this._trigger("close", event);
		}, widget: function() { return this.button; }, menuWidget: function() { return this.menu; }, _renderButtonItem: function(item) { var buttonItem = $("<span>"); this._setText(buttonItem, item.label); this._addClass(buttonItem, "ui-selectmenu-text"); return buttonItem; }, _renderMenu: function(ul, items) {
			var that = this, currentOptgroup = ""; $.each(items, function(index, item) {
				var li; if (item.optgroup !== currentOptgroup) {
					li = $("<li>", { text: item.optgroup }); that._addClass(li, "ui-selectmenu-optgroup", "ui-menu-divider" +
						(item.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")); li.appendTo(ul); currentOptgroup = item.optgroup;
				}
				that._renderItemData(ul, item);
			});
		}, _renderItemData: function(ul, item) { return this._renderItem(ul, item).data("ui-selectmenu-item", item); }, _renderItem: function(ul, item) {
			var li = $("<li>"), wrapper = $("<div>", { title: item.element.attr("title") }); if (item.disabled) { this._addClass(li, null, "ui-state-disabled"); }
			this._setText(wrapper, item.label); return li.append(wrapper).appendTo(ul);
		}, _setText: function(element, value) { if (value) { element.text(value); } else { element.html("&#160;"); } }, _move: function(direction, event) {
			var item, next, filter = ".ui-menu-item"; if (this.isOpen) { item = this.menuItems.eq(this.focusIndex).parent("li"); } else { item = this.menuItems.eq(this.element[0].selectedIndex).parent("li"); filter += ":not(.ui-state-disabled)"; }
			if (direction === "first" || direction === "last") { next = item[direction === "first" ? "prevAll" : "nextAll"](filter).eq(-1); } else { next = item[direction + "All"](filter).eq(0); }
			if (next.length) { this.menuInstance.focus(event, next); }
		}, _getSelectedItem: function() { return this.menuItems.eq(this.element[0].selectedIndex).parent("li"); }, _toggle: function(event) { this[this.isOpen ? "close" : "open"](event); }, _setSelection: function() {
			var selection; if (!this.range) { return; }
			if (window.getSelection) { selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(this.range); } else { this.range.select(); }
			this.button.focus();
		}, _documentClick: {
			mousedown: function(event) {
				if (!this.isOpen) { return; }
				if (!$(event.target).closest(".ui-selectmenu-menu, #" +
					$.ui.escapeSelector(this.ids.button)).length) { this.close(event); }
			}
		}, _buttonEvents: {
			mousedown: function() { var selection; if (window.getSelection) { selection = window.getSelection(); if (selection.rangeCount) { this.range = selection.getRangeAt(0); } } else { this.range = document.selection.createRange(); } }, click: function(event) { this._setSelection(); this._toggle(event); }, keydown: function(event) {
				var preventDefault = true; switch (event.keyCode) {
					case $.ui.keyCode.TAB: case $.ui.keyCode.ESCAPE: this.close(event); preventDefault = false; break; case $.ui.keyCode.ENTER: if (this.isOpen) { this._selectFocusedItem(event); }
						break; case $.ui.keyCode.UP: if (event.altKey) { this._toggle(event); } else { this._move("prev", event); }
						break; case $.ui.keyCode.DOWN: if (event.altKey) { this._toggle(event); } else { this._move("next", event); }
						break; case $.ui.keyCode.SPACE: if (this.isOpen) { this._selectFocusedItem(event); } else { this._toggle(event); }
						break; case $.ui.keyCode.LEFT: this._move("prev", event); break; case $.ui.keyCode.RIGHT: this._move("next", event); break; case $.ui.keyCode.HOME: case $.ui.keyCode.PAGE_UP: this._move("first", event); break; case $.ui.keyCode.END: case $.ui.keyCode.PAGE_DOWN: this._move("last", event); break; default: this.menu.trigger(event); preventDefault = false;
				}
				if (preventDefault) { event.preventDefault(); }
			}
		}, _selectFocusedItem: function(event) { var item = this.menuItems.eq(this.focusIndex).parent("li"); if (!item.hasClass("ui-state-disabled")) { this._select(item.data("ui-selectmenu-item"), event); } }, _select: function(item, event) {
			var oldIndex = this.element[0].selectedIndex; this.element[0].selectedIndex = item.index; this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(item)); this._setAria(item); this._trigger("select", event, { item: item }); if (item.index !== oldIndex) { this._trigger("change", event, { item: item }); }
			this.close(event);
		}, _setAria: function(item) { var id = this.menuItems.eq(item.index).attr("id"); this.button.attr({ "aria-labelledby": id, "aria-activedescendant": id }); this.menu.attr("aria-activedescendant", id); }, _setOption: function(key, value) {
			if (key === "icons") { var icon = this.button.find("span.ui-icon"); this._removeClass(icon, null, this.options.icons.button)._addClass(icon, null, value.button); }
			this._super(key, value); if (key === "appendTo") { this.menuWrap.appendTo(this._appendTo()); }
			if (key === "width") { this._resizeButton(); }
		}, _setOptionDisabled: function(value) { this._super(value); this.menuInstance.option("disabled", value); this.button.attr("aria-disabled", value); this._toggleClass(this.button, null, "ui-state-disabled", value); this.element.prop("disabled", value); if (value) { this.button.attr("tabindex", -1); this.close(); } else { this.button.attr("tabindex", 0); } }, _appendTo: function() {
			var element = this.options.appendTo; if (element) { element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0); }
			if (!element || !element[0]) { element = this.element.closest(".ui-front, dialog"); }
			if (!element.length) { element = this.document[0].body; }
			return element;
		}, _toggleAttr: function() {
			this.button.attr("aria-expanded", this.isOpen); this._removeClass(this.button, "ui-selectmenu-button-" +
				(this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" +
					(this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen); this.menu.attr("aria-hidden", !this.isOpen);
		}, _resizeButton: function() {
			var width = this.options.width; if (width === false) { this.button.css("width", ""); return; }
			if (width === null) { width = this.element.show().outerWidth(); this.element.hide(); }
			this.button.outerWidth(width);
		}, _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)); }, _getCreateOptions: function() { var options = this._super(); options.disabled = this.element.prop("disabled"); return options; }, _parseOptions: function(options) { var that = this, data = []; options.each(function(index, item) { data.push(that._parseOption($(item), index)); }); this.items = data; }, _parseOption: function(option, index) { var optgroup = option.parent("optgroup"); return { element: option, index: index, value: option.val(), label: option.text(), optgroup: optgroup.attr("label") || "", disabled: optgroup.prop("disabled") || option.prop("disabled") }; }, _destroy: function() { this._unbindFormResetHandler(); this.menuWrap.remove(); this.button.remove(); this.element.show(); this.element.removeUniqueId(); this.labels.attr("for", this.ids.element); }
	}]);
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/slider.js', ["jquery", "./mouse", "../keycode", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	return $.widget("ui.slider", $.ui.mouse, {
		version: "@VERSION", widgetEventPrefix: "slide", options: { animate: false, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: false, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function() { this._keySliding = false; this._mouseSliding = false; this._animateOff = true; this._handleIndex = null; this._detectOrientation(); this._mouseInit(); this._calculateNewMax(); this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"); this._refresh(); this._animateOff = false; }, _refresh: function() { this._createRange(); this._createHandles(); this._setupEvents(); this._refreshValue(); }, _createHandles: function() {
			var i, handleCount, options = this.options, existingHandles = this.element.find(".ui-slider-handle"), handle = "<span tabindex='0'></span>", handles = []; handleCount = (options.values && options.values.length) || 1; if (existingHandles.length > handleCount) { existingHandles.slice(handleCount).remove(); existingHandles = existingHandles.slice(0, handleCount); }
			for (i = existingHandles.length; i < handleCount; i++) { handles.push(handle); }
			this.handles = existingHandles.add($(handles.join("")).appendTo(this.element)); this._addClass(this.handles, "ui-slider-handle", "ui-state-default"); this.handle = this.handles.eq(0); this.handles.each(function(i) { $(this).data("ui-slider-handle-index", i); });
		}, _createRange: function() {
			var options = this.options; if (options.range) {
				if (options.range === true) { if (!options.values) { options.values = [this._valueMin(), this._valueMin()]; } else if (options.values.length && options.values.length !== 2) { options.values = [options.values[0], options.values[0]]; } else if ($.isArray(options.values)) { options.values = options.values.slice(0); } }
				if (!this.range || !this.range.length) { this.range = $("<div>").appendTo(this.element); this._addClass(this.range, "ui-slider-range"); } else { this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"); this.range.css({ "left": "", "bottom": "" }); }
				if (options.range === "min" || options.range === "max") { this._addClass(this.range, "ui-slider-range-" + options.range); }
			} else {
				if (this.range) { this.range.remove(); }
				this.range = null;
			}
		}, _setupEvents: function() { this._off(this.handles); this._on(this.handles, this._handleEvents); this._hoverable(this.handles); this._focusable(this.handles); }, _destroy: function() {
			this.handles.remove(); if (this.range) { this.range.remove(); }
			this._mouseDestroy();
		}, _mouseCapture: function(event) {
			var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle, that = this, o = this.options; if (o.disabled) { return false; }
			this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }; this.elementOffset = this.element.offset(); position = { x: event.pageX, y: event.pageY }; normValue = this._normValueFromMouse(position); distance = this._valueMax() - this._valueMin() + 1; this.handles.each(function(i) { var thisDistance = Math.abs(normValue - that.values(i)); if ((distance > thisDistance) || (distance === thisDistance && (i === that._lastChangedValue || that.values(i) === o.min))) { distance = thisDistance; closestHandle = $(this); index = i; } }); allowed = this._start(event, index); if (allowed === false) { return false; }
			this._mouseSliding = true; this._handleIndex = index; this._addClass(closestHandle, null, "ui-state-active"); closestHandle.trigger("focus"); offset = closestHandle.offset(); mouseOverHandle = !$(event.target).parents().addBack().is(".ui-slider-handle"); this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
				left: event.pageX - offset.left - (closestHandle.width() / 2), top: event.pageY - offset.top -
					(closestHandle.height() / 2) -
					(parseInt(closestHandle.css("borderTopWidth"), 10) || 0) -
					(parseInt(closestHandle.css("borderBottomWidth"), 10) || 0) +
					(parseInt(closestHandle.css("marginTop"), 10) || 0)
			}; if (!this.handles.hasClass("ui-state-hover")) { this._slide(event, index, normValue); }
			this._animateOff = true; return true;
		}, _mouseStart: function() { return true; }, _mouseDrag: function(event) { var position = { x: event.pageX, y: event.pageY }, normValue = this._normValueFromMouse(position); this._slide(event, this._handleIndex, normValue); return false; }, _mouseStop: function(event) { this._removeClass(this.handles, null, "ui-state-active"); this._mouseSliding = false; this._stop(event, this._handleIndex); this._change(event, this._handleIndex); this._handleIndex = null; this._clickOffset = null; this._animateOff = false; return false; }, _detectOrientation: function() { this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal"; }, _normValueFromMouse: function(position) {
			var pixelTotal, pixelMouse, percentMouse, valueTotal, valueMouse; if (this.orientation === "horizontal") { pixelTotal = this.elementSize.width; pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0); } else { pixelTotal = this.elementSize.height; pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0); }
			percentMouse = (pixelMouse / pixelTotal); if (percentMouse > 1) { percentMouse = 1; }
			if (percentMouse < 0) { percentMouse = 0; }
			if (this.orientation === "vertical") { percentMouse = 1 - percentMouse; }
			valueTotal = this._valueMax() - this._valueMin(); valueMouse = this._valueMin() + percentMouse * valueTotal; return this._trimAlignValue(valueMouse);
		}, _uiHash: function(index, value, values) {
			var uiHash = { handle: this.handles[index], handleIndex: index, value: value !== undefined ? value : this.value() }; if (this._hasMultipleValues()) { uiHash.value = value !== undefined ? value : this.values(index); uiHash.values = values || this.values(); }
			return uiHash;
		}, _hasMultipleValues: function() { return this.options.values && this.options.values.length; }, _start: function(event, index) { return this._trigger("start", event, this._uiHash(index)); }, _slide: function(event, index, newVal) {
			var allowed, otherVal, currentValue = this.value(), newValues = this.values(); if (this._hasMultipleValues()) {
				otherVal = this.values(index ? 0 : 1); currentValue = this.values(index); if (this.options.values.length === 2 && this.options.range === true) { newVal = index === 0 ? Math.min(otherVal, newVal) : Math.max(otherVal, newVal); }
				newValues[index] = newVal;
			}
			if (newVal === currentValue) { return; }
			allowed = this._trigger("slide", event, this._uiHash(index, newVal, newValues)); if (allowed === false) { return; }
			if (this._hasMultipleValues()) { this.values(index, newVal); } else { this.value(newVal); }
		}, _stop: function(event, index) { this._trigger("stop", event, this._uiHash(index)); }, _change: function(event, index) { if (!this._keySliding && !this._mouseSliding) { this._lastChangedValue = index; this._trigger("change", event, this._uiHash(index)); } }, value: function(newValue) {
			if (arguments.length) { this.options.value = this._trimAlignValue(newValue); this._refreshValue(); this._change(null, 0); return; }
			return this._value();
		}, values: function(index, newValue) {
			var vals, newValues, i; if (arguments.length > 1) { this.options.values[index] = this._trimAlignValue(newValue); this._refreshValue(); this._change(null, index); return; }
			if (arguments.length) {
				if ($.isArray(arguments[0])) {
					vals = this.options.values; newValues = arguments[0]; for (i = 0; i < vals.length; i += 1) { vals[i] = this._trimAlignValue(newValues[i]); this._change(null, i); }
					this._refreshValue();
				} else { if (this._hasMultipleValues()) { return this._values(index); } else { return this.value(); } }
			} else { return this._values(); }
		}, _setOption: function(key, value) {
			var i, valsLength = 0; if (key === "range" && this.options.range === true) { if (value === "min") { this.options.value = this._values(0); this.options.values = null; } else if (value === "max") { this.options.value = this._values(this.options.values.length - 1); this.options.values = null; } }
			if ($.isArray(this.options.values)) { valsLength = this.options.values.length; }
			this._super(key, value); switch (key) {
				case "orientation": this._detectOrientation(); this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation); this._refreshValue(); if (this.options.range) { this._refreshRange(value); }
					this.handles.css(value === "horizontal" ? "bottom" : "left", ""); break; case "value": this._animateOff = true; this._refreshValue(); this._change(null, 0); this._animateOff = false; break; case "values": this._animateOff = true; this._refreshValue(); for (i = valsLength - 1; i >= 0; i--) { this._change(null, i); }
					this._animateOff = false; break; case "step": case "min": case "max": this._animateOff = true; this._calculateNewMax(); this._refreshValue(); this._animateOff = false; break; case "range": this._animateOff = true; this._refresh(); this._animateOff = false; break;
			}
		}, _setOptionDisabled: function(value) { this._super(value); this._toggleClass(null, "ui-state-disabled", !!value); }, _value: function() { var val = this.options.value; val = this._trimAlignValue(val); return val; }, _values: function(index) {
			var val, vals, i; if (arguments.length) { val = this.options.values[index]; val = this._trimAlignValue(val); return val; } else if (this._hasMultipleValues()) {
				vals = this.options.values.slice(); for (i = 0; i < vals.length; i += 1) { vals[i] = this._trimAlignValue(vals[i]); }
				return vals;
			} else { return []; }
		}, _trimAlignValue: function(val) {
			if (val <= this._valueMin()) { return this._valueMin(); }
			if (val >= this._valueMax()) { return this._valueMax(); }
			var step = (this.options.step > 0) ? this.options.step : 1, valModStep = (val - this._valueMin()) % step, alignValue = val - valModStep; if (Math.abs(valModStep) * 2 >= step) { alignValue += (valModStep > 0) ? step : (-step); }
			return parseFloat(alignValue.toFixed(5));
		}, _calculateNewMax: function() { var max = this.options.max, min = this._valueMin(), step = this.options.step, aboveMin = Math.floor((+(max - min).toFixed(this._precision())) / step) * step; max = aboveMin + min; this.max = parseFloat(max.toFixed(this._precision())); }, _precision: function() {
			var precision = this._precisionOf(this.options.step); if (this.options.min !== null) { precision = Math.max(precision, this._precisionOf(this.options.min)); }
			return precision;
		}, _precisionOf: function(num) { var str = num.toString(), decimal = str.indexOf("."); return decimal === -1 ? 0 : str.length - decimal - 1; }, _valueMin: function() { return this.options.min; }, _valueMax: function() { return this.max; }, _refreshRange: function(orientation) {
			if (orientation === "vertical") { this.range.css({ "width": "", "left": "" }); }
			if (orientation === "horizontal") { this.range.css({ "height": "", "bottom": "" }); }
		}, _refreshValue: function() {
			var lastValPercent, valPercent, value, valueMin, valueMax, oRange = this.options.range, o = this.options, that = this, animate = (!this._animateOff) ? o.animate : false, _set = {}; if (this._hasMultipleValues()) {
				this.handles.each(function(i) {
					valPercent = (that.values(i) - that._valueMin()) / (that._valueMax() - that._valueMin()) * 100; _set[that.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%"; $(this).stop(1, 1)[animate ? "animate" : "css"](_set, o.animate); if (that.options.range === true) {
						if (that.orientation === "horizontal") {
							if (i === 0) { that.range.stop(1, 1)[animate ? "animate" : "css"]({ left: valPercent + "%" }, o.animate); }
							if (i === 1) { that.range[animate ? "animate" : "css"]({ width: (valPercent - lastValPercent) + "%" }, { queue: false, duration: o.animate }); }
						} else {
							if (i === 0) { that.range.stop(1, 1)[animate ? "animate" : "css"]({ bottom: (valPercent) + "%" }, o.animate); }
							if (i === 1) { that.range[animate ? "animate" : "css"]({ height: (valPercent - lastValPercent) + "%" }, { queue: false, duration: o.animate }); }
						}
					}
					lastValPercent = valPercent;
				});
			} else {
				value = this.value(); valueMin = this._valueMin(); valueMax = this._valueMax(); valPercent = (valueMax !== valueMin) ? (value - valueMin) / (valueMax - valueMin) * 100 : 0; _set[this.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%"; this.handle.stop(1, 1)[animate ? "animate" : "css"](_set, o.animate); if (oRange === "min" && this.orientation === "horizontal") { this.range.stop(1, 1)[animate ? "animate" : "css"]({ width: valPercent + "%" }, o.animate); }
				if (oRange === "max" && this.orientation === "horizontal") { this.range.stop(1, 1)[animate ? "animate" : "css"]({ width: (100 - valPercent) + "%" }, o.animate); }
				if (oRange === "min" && this.orientation === "vertical") { this.range.stop(1, 1)[animate ? "animate" : "css"]({ height: valPercent + "%" }, o.animate); }
				if (oRange === "max" && this.orientation === "vertical") { this.range.stop(1, 1)[animate ? "animate" : "css"]({ height: (100 - valPercent) + "%" }, o.animate); }
			}
		}, _handleEvents: {
			keydown: function(event) {
				var allowed, curVal, newVal, step, index = $(event.target).data("ui-slider-handle-index"); switch (event.keyCode) {
					case $.ui.keyCode.HOME: case $.ui.keyCode.END: case $.ui.keyCode.PAGE_UP: case $.ui.keyCode.PAGE_DOWN: case $.ui.keyCode.UP: case $.ui.keyCode.RIGHT: case $.ui.keyCode.DOWN: case $.ui.keyCode.LEFT: event.preventDefault(); if (!this._keySliding) { this._keySliding = true; this._addClass($(event.target), null, "ui-state-active"); allowed = this._start(event, index); if (allowed === false) { return; } }
						break;
				}
				step = this.options.step; if (this._hasMultipleValues()) { curVal = newVal = this.values(index); } else { curVal = newVal = this.value(); }
				switch (event.keyCode) {
					case $.ui.keyCode.HOME: newVal = this._valueMin(); break; case $.ui.keyCode.END: newVal = this._valueMax(); break; case $.ui.keyCode.PAGE_UP: newVal = this._trimAlignValue(curVal + ((this._valueMax() - this._valueMin()) / this.numPages)); break; case $.ui.keyCode.PAGE_DOWN: newVal = this._trimAlignValue(curVal - ((this._valueMax() - this._valueMin()) / this.numPages)); break; case $.ui.keyCode.UP: case $.ui.keyCode.RIGHT: if (curVal === this._valueMax()) { return; }
						newVal = this._trimAlignValue(curVal + step); break; case $.ui.keyCode.DOWN: case $.ui.keyCode.LEFT: if (curVal === this._valueMin()) { return; }
						newVal = this._trimAlignValue(curVal - step); break;
				}
				this._slide(event, index, newVal);
			}, keyup: function(event) { var index = $(event.target).data("ui-slider-handle-index"); if (this._keySliding) { this._keySliding = false; this._stop(event, index); this._change(event, index); this._removeClass($(event.target), null, "ui-state-active"); } }
		}
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/sortable.js', ["jquery", "./mouse", "../data", "../ie", "../scroll-parent", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	return $.widget("ui.sortable", $.ui.mouse, {
		version: "@VERSION", widgetEventPrefix: "sort", ready: false, options: { appendTo: "parent", axis: false, connectWith: false, containment: false, cursor: "auto", cursorAt: false, dropOnEmpty: true, forcePlaceholderSize: false, forceHelperSize: false, grid: false, handle: false, helper: "original", items: "> *", opacity: false, placeholder: false, revert: false, scroll: true, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1000, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null }, _isOverAxis: function(x, reference, size) { return (x >= reference) && (x < (reference + size)); }, _isFloating: function(item) { return (/left|right/).test(item.css("float")) || (/inline|table-cell/).test(item.css("display")); }, _create: function() { this.containerCache = {}; this._addClass("ui-sortable"); this.refresh(); this.offset = this.element.offset(); this._mouseInit(); this._setHandleClassName(); this.ready = true; }, _setOption: function(key, value) { this._super(key, value); if (key === "handle") { this._setHandleClassName(); } }, _setHandleClassName: function() { var that = this; this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"); $.each(this.items, function() { that._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle"); }); }, _destroy: function() {
			this._mouseDestroy(); for (var i = this.items.length - 1; i >= 0; i--) { this.items[i].item.removeData(this.widgetName + "-item"); }
			return this;
		}, _mouseCapture: function(event, overrideHandle) {
			var currentItem = null, validHandle = false, that = this; if (this.reverting) { return false; }
			if (this.options.disabled || this.options.type === "static") { return false; }
			this._refreshItems(event); $(event.target).parents().each(function() { if ($.data(this, that.widgetName + "-item") === that) { currentItem = $(this); return false; } }); if ($.data(event.target, that.widgetName + "-item") === that) { currentItem = $(event.target); }
			if (!currentItem) { return false; }
			if (this.options.handle && !overrideHandle) { $(this.options.handle, currentItem).find("*").addBack().each(function() { if (this === event.target) { validHandle = true; } }); if (!validHandle) { return false; } }
			this.currentItem = currentItem; this._removeCurrentsFromItems(); return true;
		}, _mouseStart: function(event, overrideHandle, noActivation) {
			var i, body, o = this.options; this.currentContainer = this; this.refreshPositions(); this.helper = this._createHelper(event); this._cacheHelperProportions(); this._cacheMargins(); this.scrollParent = this.helper.scrollParent(); this.offset = this.currentItem.offset(); this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }; $.extend(this.offset, { click: { left: event.pageX - this.offset.left, top: event.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }); this.helper.css("position", "absolute"); this.cssPosition = this.helper.css("position"); this.originalPosition = this._generatePosition(event); this.originalPageX = event.pageX; this.originalPageY = event.pageY; (o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt)); this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }; if (this.helper[0] !== this.currentItem[0]) { this.currentItem.hide(); }
			this._createPlaceholder(); if (o.containment) { this._setContainment(); }
			if (o.cursor && o.cursor !== "auto") { body = this.document.find("body"); this.storedCursor = body.css("cursor"); body.css("cursor", o.cursor); this.storedStylesheet = $("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(body); }
			if (o.opacity) {
				if (this.helper.css("opacity")) { this._storedOpacity = this.helper.css("opacity"); }
				this.helper.css("opacity", o.opacity);
			}
			if (o.zIndex) {
				if (this.helper.css("zIndex")) { this._storedZIndex = this.helper.css("zIndex"); }
				this.helper.css("zIndex", o.zIndex);
			}
			if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") { this.overflowOffset = this.scrollParent.offset(); }
			this._trigger("start", event, this._uiHash()); if (!this._preserveHelperProportions) { this._cacheHelperProportions(); }
			if (!noActivation) { for (i = this.containers.length - 1; i >= 0; i--) { this.containers[i]._trigger("activate", event, this._uiHash(this)); } }
			if ($.ui.ddmanager) { $.ui.ddmanager.current = this; }
			if ($.ui.ddmanager && !o.dropBehaviour) { $.ui.ddmanager.prepareOffsets(this, event); }
			this.dragging = true; this._addClass(this.helper, "ui-sortable-helper"); this._mouseDrag(event); return true;
		}, _mouseDrag: function(event) {
			var i, item, itemElement, intersection, o = this.options, scrolled = false; this.position = this._generatePosition(event); this.positionAbs = this._convertPositionTo("absolute"); if (!this.lastPositionAbs) { this.lastPositionAbs = this.positionAbs; }
			if (this.options.scroll) {
				if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
					if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity) { this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed; } else if (event.pageY - this.overflowOffset.top < o.scrollSensitivity) { this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed; }
					if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity) { this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed; } else if (event.pageX - this.overflowOffset.left < o.scrollSensitivity) { this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed; }
				} else {
					if (event.pageY - this.document.scrollTop() < o.scrollSensitivity) { scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed); } else if (this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) { scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed); }
					if (event.pageX - this.document.scrollLeft() < o.scrollSensitivity) { scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed); } else if (this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) { scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed); }
				}
				if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) { $.ui.ddmanager.prepareOffsets(this, event); }
			}
			this.positionAbs = this._convertPositionTo("absolute"); if (!this.options.axis || this.options.axis !== "y") { this.helper[0].style.left = this.position.left + "px"; }
			if (!this.options.axis || this.options.axis !== "x") { this.helper[0].style.top = this.position.top + "px"; }
			for (i = this.items.length - 1; i >= 0; i--) {
				item = this.items[i]; itemElement = item.item[0]; intersection = this._intersectsWithPointer(item); if (!intersection) { continue; }
				if (item.instance !== this.currentContainer) { continue; }
				if (itemElement !== this.currentItem[0] && this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement && !$.contains(this.placeholder[0], itemElement) && (this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)) {
					this.direction = intersection === 1 ? "down" : "up"; if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) { this._rearrange(event, item); } else { break; }
					this._trigger("change", event, this._uiHash()); break;
				}
			}
			this._contactContainers(event); if ($.ui.ddmanager) { $.ui.ddmanager.drag(this, event); }
			this._trigger("sort", event, this._uiHash()); this.lastPositionAbs = this.positionAbs; return false;
		}, _mouseStop: function(event, noPropagation) {
			if (!event) { return; }
			if ($.ui.ddmanager && !this.options.dropBehaviour) { $.ui.ddmanager.drop(this, event); }
			if (this.options.revert) {
				var that = this, cur = this.placeholder.offset(), axis = this.options.axis, animation = {}; if (!axis || axis === "x") { animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft); }
				if (!axis || axis === "y") { animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop); }
				this.reverting = true; $(this.helper).animate(animation, parseInt(this.options.revert, 10) || 500, function() { that._clear(event); });
			} else { this._clear(event, noPropagation); }
			return false;
		}, cancel: function() {
			if (this.dragging) {
				this._mouseUp({ target: null }); if (this.options.helper === "original") { this.currentItem.css(this._storedCSS); this._removeClass(this.currentItem, "ui-sortable-helper"); } else { this.currentItem.show(); }
				for (var i = this.containers.length - 1; i >= 0; i--) { this.containers[i]._trigger("deactivate", null, this._uiHash(this)); if (this.containers[i].containerCache.over) { this.containers[i]._trigger("out", null, this._uiHash(this)); this.containers[i].containerCache.over = 0; } }
			}
			if (this.placeholder) {
				if (this.placeholder[0].parentNode) { this.placeholder[0].parentNode.removeChild(this.placeholder[0]); }
				if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) { this.helper.remove(); }
				$.extend(this, { helper: null, dragging: false, reverting: false, _noFinalSort: null }); if (this.domPosition.prev) { $(this.domPosition.prev).after(this.currentItem); } else { $(this.domPosition.parent).prepend(this.currentItem); }
			}
			return this;
		}, serialize: function(o) {
			var items = this._getItemsAsjQuery(o && o.connected), str = []; o = o || {}; $(items).each(function() { var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || (/(.+)[\-=_](.+)/)); if (res) { str.push((o.key || res[1] + "[]") + "=" + (o.key && o.expression ? res[1] : res[2])); } }); if (!str.length && o.key) { str.push(o.key + "="); }
			return str.join("&");
		}, toArray: function(o) { var items = this._getItemsAsjQuery(o && o.connected), ret = []; o = o || {}; items.each(function() { ret.push($(o.item || this).attr(o.attribute || "id") || ""); }); return ret; }, _intersectsWith: function(item) { var x1 = this.positionAbs.left, x2 = x1 + this.helperProportions.width, y1 = this.positionAbs.top, y2 = y1 + this.helperProportions.height, l = item.left, r = l + item.width, t = item.top, b = t + item.height, dyClick = this.offset.click.top, dxClick = this.offset.click.left, isOverElementHeight = (this.options.axis === "x") || ((y1 + dyClick) > t && (y1 + dyClick) < b), isOverElementWidth = (this.options.axis === "y") || ((x1 + dxClick) > l && (x1 + dxClick) < r), isOverElement = isOverElementHeight && isOverElementWidth; if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"])) { return isOverElement; } else { return (l < x1 + (this.helperProportions.width / 2) && x2 - (this.helperProportions.width / 2) < r && t < y1 + (this.helperProportions.height / 2) && y2 - (this.helperProportions.height / 2) < b); } }, _intersectsWithPointer: function(item) {
			var verticalDirection, horizontalDirection, isOverElementHeight = (this.options.axis === "x") || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height), isOverElementWidth = (this.options.axis === "y") || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width), isOverElement = isOverElementHeight && isOverElementWidth; if (!isOverElement) { return false; }
			verticalDirection = this._getDragVerticalDirection(); horizontalDirection = this._getDragHorizontalDirection(); return this.floating ? ((horizontalDirection === "right" || verticalDirection === "down") ? 2 : 1) : (verticalDirection && (verticalDirection === "down" ? 2 : 1));
		}, _intersectsWithSides: function(item) { var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height / 2), item.height), isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width / 2), item.width), verticalDirection = this._getDragVerticalDirection(), horizontalDirection = this._getDragHorizontalDirection(); if (this.floating && horizontalDirection) { return ((horizontalDirection === "right" && isOverRightHalf) || (horizontalDirection === "left" && !isOverRightHalf)); } else { return verticalDirection && ((verticalDirection === "down" && isOverBottomHalf) || (verticalDirection === "up" && !isOverBottomHalf)); } }, _getDragVerticalDirection: function() { var delta = this.positionAbs.top - this.lastPositionAbs.top; return delta !== 0 && (delta > 0 ? "down" : "up"); }, _getDragHorizontalDirection: function() { var delta = this.positionAbs.left - this.lastPositionAbs.left; return delta !== 0 && (delta > 0 ? "right" : "left"); }, refresh: function(event) { this._refreshItems(event); this._setHandleClassName(); this.refreshPositions(); return this; }, _connectWith: function() { var options = this.options; return options.connectWith.constructor === String ? [options.connectWith] : options.connectWith; }, _getItemsAsjQuery: function(connected) {
			var i, j, cur, inst, items = [], queries = [], connectWith = this._connectWith(); if (connectWith && connected) { for (i = connectWith.length - 1; i >= 0; i--) { cur = $(connectWith[i], this.document[0]); for (j = cur.length - 1; j >= 0; j--) { inst = $.data(cur[j], this.widgetFullName); if (inst && inst !== this && !inst.options.disabled) { queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst]); } } } }
			queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]); function addItems() { items.push(this); }
			for (i = queries.length - 1; i >= 0; i--) { queries[i][0].each(addItems); }
			return $(items);
		}, _removeCurrentsFromItems: function() {
			var list = this.currentItem.find(":data(" + this.widgetName + "-item)"); this.items = $.grep(this.items, function(item) {
				for (var j = 0; j < list.length; j++) { if (list[j] === item.item[0]) { return false; } }
				return true;
			});
		}, _refreshItems: function(event) {
			this.items = []; this.containers = [this]; var i, j, cur, inst, targetData, _queries, item, queriesLength, items = this.items, queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, { item: this.currentItem }) : $(this.options.items, this.element), this]], connectWith = this._connectWith(); if (connectWith && this.ready) { for (i = connectWith.length - 1; i >= 0; i--) { cur = $(connectWith[i], this.document[0]); for (j = cur.length - 1; j >= 0; j--) { inst = $.data(cur[j], this.widgetFullName); if (inst && inst !== this && !inst.options.disabled) { queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, { item: this.currentItem }) : $(inst.options.items, inst.element), inst]); this.containers.push(inst); } } } }
			for (i = queries.length - 1; i >= 0; i--) { targetData = queries[i][1]; _queries = queries[i][0]; for (j = 0, queriesLength = _queries.length; j < queriesLength; j++) { item = $(_queries[j]); item.data(this.widgetName + "-item", targetData); items.push({ item: item, instance: targetData, width: 0, height: 0, left: 0, top: 0 }); } }
		}, refreshPositions: function(fast) {
			this.floating = this.items.length ? this.options.axis === "x" || this._isFloating(this.items[0].item) : false; if (this.offsetParent && this.helper) { this.offset.parent = this._getParentOffset(); }
			var i, item, t, p; for (i = this.items.length - 1; i >= 0; i--) {
				item = this.items[i]; if (item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) { continue; }
				t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item; if (!fast) { item.width = t.outerWidth(); item.height = t.outerHeight(); }
				p = t.offset(); item.left = p.left; item.top = p.top;
			}
			if (this.options.custom && this.options.custom.refreshContainers) { this.options.custom.refreshContainers.call(this); } else { for (i = this.containers.length - 1; i >= 0; i--) { p = this.containers[i].element.offset(); this.containers[i].containerCache.left = p.left; this.containers[i].containerCache.top = p.top; this.containers[i].containerCache.width = this.containers[i].element.outerWidth(); this.containers[i].containerCache.height = this.containers[i].element.outerHeight(); } }
			return this;
		}, _createPlaceholder: function(that) {
			that = that || this; var className, o = that.options; if (!o.placeholder || o.placeholder.constructor === String) {
				className = o.placeholder; o.placeholder = {
					element: function() {
						var nodeName = that.currentItem[0].nodeName.toLowerCase(), element = $("<" + nodeName + ">", that.document[0]); that._addClass(element, "ui-sortable-placeholder", className || that.currentItem[0].className)._removeClass(element, "ui-sortable-helper"); if (nodeName === "tbody") { that._createTrPlaceholder(that.currentItem.find("tr").eq(0), $("<tr>", that.document[0]).appendTo(element)); } else if (nodeName === "tr") { that._createTrPlaceholder(that.currentItem, element); } else if (nodeName === "img") { element.attr("src", that.currentItem.attr("src")); }
						if (!className) { element.css("visibility", "hidden"); }
						return element;
					}, update: function(container, p) {
						if (className && !o.forcePlaceholderSize) { return; }
						if (!p.height()) { p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop") || 0, 10) - parseInt(that.currentItem.css("paddingBottom") || 0, 10)); }
						if (!p.width()) { p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft") || 0, 10) - parseInt(that.currentItem.css("paddingRight") || 0, 10)); }
					}
				};
			}
			that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem)); that.currentItem.after(that.placeholder); o.placeholder.update(that, that.placeholder);
		}, _createTrPlaceholder: function(sourceTr, targetTr) { var that = this; sourceTr.children().each(function() { $("<td>&#160;</td>", that.document[0]).attr("colspan", $(this).attr("colspan") || 1).appendTo(targetTr); }); }, _contactContainers: function(event) {
			var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis, innermostContainer = null, innermostIndex = null; for (i = this.containers.length - 1; i >= 0; i--) {
				if ($.contains(this.currentItem[0], this.containers[i].element[0])) { continue; }
				if (this._intersectsWith(this.containers[i].containerCache)) {
					if (innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) { continue; }
					innermostContainer = this.containers[i]; innermostIndex = i;
				} else { if (this.containers[i].containerCache.over) { this.containers[i]._trigger("out", event, this._uiHash(this)); this.containers[i].containerCache.over = 0; } }
			}
			if (!innermostContainer) { return; }
			if (this.containers.length === 1) { if (!this.containers[innermostIndex].containerCache.over) { this.containers[innermostIndex]._trigger("over", event, this._uiHash(this)); this.containers[innermostIndex].containerCache.over = 1; } } else {
				dist = 10000; itemWithLeastDistance = null; floating = innermostContainer.floating || this._isFloating(this.currentItem); posProperty = floating ? "left" : "top"; sizeProperty = floating ? "width" : "height"; axis = floating ? "clientX" : "clientY"; for (j = this.items.length - 1; j >= 0; j--) {
					if (!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) { continue; }
					if (this.items[j].item[0] === this.currentItem[0]) { continue; }
					cur = this.items[j].item.offset()[posProperty]; nearBottom = false; if (event[axis] - cur > this.items[j][sizeProperty] / 2) { nearBottom = true; }
					if (Math.abs(event[axis] - cur) < dist) { dist = Math.abs(event[axis] - cur); itemWithLeastDistance = this.items[j]; this.direction = nearBottom ? "up" : "down"; }
				}
				if (!itemWithLeastDistance && !this.options.dropOnEmpty) { return; }
				if (this.currentContainer === this.containers[innermostIndex]) {
					if (!this.currentContainer.containerCache.over) { this.containers[innermostIndex]._trigger("over", event, this._uiHash()); this.currentContainer.containerCache.over = 1; }
					return;
				}
				itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true); this._trigger("change", event, this._uiHash()); this.containers[innermostIndex]._trigger("change", event, this._uiHash(this)); this.currentContainer = this.containers[innermostIndex]; this.options.placeholder.update(this.currentContainer, this.placeholder); this.containers[innermostIndex]._trigger("over", event, this._uiHash(this)); this.containers[innermostIndex].containerCache.over = 1;
			}
		}, _createHelper: function(event) {
			var o = this.options, helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper === "clone" ? this.currentItem.clone() : this.currentItem); if (!helper.parents("body").length) { $(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]); }
			if (helper[0] === this.currentItem[0]) { this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }; }
			if (!helper[0].style.width || o.forceHelperSize) { helper.width(this.currentItem.width()); }
			if (!helper[0].style.height || o.forceHelperSize) { helper.height(this.currentItem.height()); }
			return helper;
		}, _adjustOffsetFromHelper: function(obj) {
			if (typeof obj === "string") { obj = obj.split(" "); }
			if ($.isArray(obj)) { obj = { left: +obj[0], top: +obj[1] || 0 }; }
			if ("left" in obj) { this.offset.click.left = obj.left + this.margins.left; }
			if ("right" in obj) { this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left; }
			if ("top" in obj) { this.offset.click.top = obj.top + this.margins.top; }
			if ("bottom" in obj) { this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top; }
		}, _getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent(); var po = this.offsetParent.offset(); if (this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) { po.left += this.scrollParent.scrollLeft(); po.top += this.scrollParent.scrollTop(); }
			if (this.offsetParent[0] === this.document[0].body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie)) { po = { top: 0, left: 0 }; }
			return { top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) };
		}, _getRelativeOffset: function() { if (this.cssPosition === "relative") { var p = this.currentItem.position(); return { top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() }; } else { return { top: 0, left: 0 }; } }, _cacheMargins: function() { this.margins = { left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0), top: (parseInt(this.currentItem.css("marginTop"), 10) || 0) }; }, _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() }; }, _setContainment: function() {
			var ce, co, over, o = this.options; if (o.containment === "parent") { o.containment = this.helper[0].parentNode; }
			if (o.containment === "document" || o.containment === "window") { this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, o.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, (o.containment === "document" ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; }
			if (!(/^(document|window|parent)$/).test(o.containment)) { ce = $(o.containment)[0]; co = $(o.containment).offset(); over = ($(ce).css("overflow") !== "hidden"); this.containment = [co.left + (parseInt($(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($(ce).css("paddingLeft"), 10) || 0) - this.margins.left, co.top + (parseInt($(ce).css("borderTopWidth"), 10) || 0) + (parseInt($(ce).css("paddingTop"), 10) || 0) - this.margins.top, co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"), 10) || 0) - (parseInt($(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]; }
		}, _convertPositionTo: function(d, pos) {
			if (!pos) { pos = this.position; }
			var mod = d === "absolute" ? 1 : -1, scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName); return {
				top: (pos.top +
					this.offset.relative.top * mod +
					this.offset.parent.top * mod -
					((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (scrollIsRootNode ? 0 : scroll.scrollTop())) * mod)), left: (pos.left +
						this.offset.relative.left * mod +
						this.offset.parent.left * mod -
						((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()) * mod))
			};
		}, _generatePosition: function(event) {
			var top, left, o = this.options, pageX = event.pageX, pageY = event.pageY, scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName); if (this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) { this.offset.relative = this._getRelativeOffset(); }
			if (this.originalPosition) {
				if (this.containment) {
					if (event.pageX - this.offset.click.left < this.containment[0]) { pageX = this.containment[0] + this.offset.click.left; }
					if (event.pageY - this.offset.click.top < this.containment[1]) { pageY = this.containment[1] + this.offset.click.top; }
					if (event.pageX - this.offset.click.left > this.containment[2]) { pageX = this.containment[2] + this.offset.click.left; }
					if (event.pageY - this.offset.click.top > this.containment[3]) { pageY = this.containment[3] + this.offset.click.top; }
				}
				if (o.grid) { top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1]; pageY = this.containment ? ((top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3]) ? top : ((top - this.offset.click.top >= this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top; left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0]; pageX = this.containment ? ((left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2]) ? left : ((left - this.offset.click.left >= this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left; }
			}
			return {
				top: (pageY -
					this.offset.click.top -
					this.offset.relative.top -
					this.offset.parent.top +
					((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (scrollIsRootNode ? 0 : scroll.scrollTop())))), left: (pageX -
						this.offset.click.left -
						this.offset.relative.left -
						this.offset.parent.left +
						((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft())))
			};
		}, _rearrange: function(event, i, a, hardRefresh) { a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? i.item[0] : i.item[0].nextSibling)); this.counter = this.counter ? ++this.counter : 1; var counter = this.counter; this._delay(function() { if (counter === this.counter) { this.refreshPositions(!hardRefresh); } }); }, _clear: function(event, noPropagation) {
			this.reverting = false; var i, delayedTriggers = []; if (!this._noFinalSort && this.currentItem.parent().length) { this.placeholder.before(this.currentItem); }
			this._noFinalSort = null; if (this.helper[0] === this.currentItem[0]) {
				for (i in this._storedCSS) { if (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") { this._storedCSS[i] = ""; } }
				this.currentItem.css(this._storedCSS); this._removeClass(this.currentItem, "ui-sortable-helper");
			} else { this.currentItem.show(); }
			if (this.fromOutside && !noPropagation) { delayedTriggers.push(function(event) { this._trigger("receive", event, this._uiHash(this.fromOutside)); }); }
			if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) { delayedTriggers.push(function(event) { this._trigger("update", event, this._uiHash()); }); }
			if (this !== this.currentContainer) { if (!noPropagation) { delayedTriggers.push(function(event) { this._trigger("remove", event, this._uiHash()); }); delayedTriggers.push((function(c) { return function(event) { c._trigger("receive", event, this._uiHash(this)); }; }).call(this, this.currentContainer)); delayedTriggers.push((function(c) { return function(event) { c._trigger("update", event, this._uiHash(this)); }; }).call(this, this.currentContainer)); } }
			function delayEvent(type, instance, container) { return function(event) { container._trigger(type, event, instance._uiHash(instance)); }; }
			for (i = this.containers.length - 1; i >= 0; i--) {
				if (!noPropagation) { delayedTriggers.push(delayEvent("deactivate", this, this.containers[i])); }
				if (this.containers[i].containerCache.over) { delayedTriggers.push(delayEvent("out", this, this.containers[i])); this.containers[i].containerCache.over = 0; }
			}
			if (this.storedCursor) { this.document.find("body").css("cursor", this.storedCursor); this.storedStylesheet.remove(); }
			if (this._storedOpacity) { this.helper.css("opacity", this._storedOpacity); }
			if (this._storedZIndex) { this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex); }
			this.dragging = false; if (!noPropagation) { this._trigger("beforeStop", event, this._uiHash()); }
			this.placeholder[0].parentNode.removeChild(this.placeholder[0]); if (!this.cancelHelperRemoval) {
				if (this.helper[0] !== this.currentItem[0]) { this.helper.remove(); }
				this.helper = null;
			}
			if (!noPropagation) {
				for (i = 0; i < delayedTriggers.length; i++) { delayedTriggers[i].call(this, event); }
				this._trigger("stop", event, this._uiHash());
			}
			this.fromOutside = false; return !this.cancelHelperRemoval;
		}, _trigger: function() { if ($.Widget.prototype._trigger.apply(this, arguments) === false) { this.cancel(); } }, _uiHash: function(_inst) { var inst = _inst || this; return { helper: inst.helper, placeholder: inst.placeholder || $([]), position: inst.position, originalPosition: inst.originalPosition, offset: inst.positionAbs, item: inst.currentItem, sender: _inst ? _inst.element : null }; }
	});
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/spinner.js', ["jquery", "./button", "../version", "../keycode", "../safe-active-element", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	function spinnerModifer(fn) { return function() { var previous = this.element.val(); fn.apply(this, arguments); this._refresh(); if (previous !== this.element.val()) { this._trigger("change"); } }; }
	$.widget("ui.spinner", {
		version: "@VERSION", defaultElement: "<input>", widgetEventPrefix: "spin", options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: true, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function() {
			this._setOption("max", this.options.max); this._setOption("min", this.options.min); this._setOption("step", this.options.step); if (this.value() !== "") { this._value(this.element.val(), true); }
			this._draw(); this._on(this._events); this._refresh(); this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete"); } });
		}, _getCreateOptions: function() { var options = this._super(); var element = this.element; $.each(["min", "max", "step"], function(i, option) { var value = element.attr(option); if (value != null && value.length) { options[option] = value; } }); return options; }, _events: {
			keydown: function(event) { if (this._start(event) && this._keydown(event)) { event.preventDefault(); } }, keyup: "_stop", focus: function() { this.previous = this.element.val(); }, blur: function(event) {
				if (this.cancelBlur) { delete this.cancelBlur; return; }
				this._stop(); this._refresh(); if (this.previous !== this.element.val()) { this._trigger("change", event); }
			}, mousewheel: function(event, delta) {
				if (!delta) { return; }
				if (!this.spinning && !this._start(event)) { return false; }
				this._spin((delta > 0 ? 1 : -1) * this.options.step, event); clearTimeout(this.mousewheelTimer); this.mousewheelTimer = this._delay(function() { if (this.spinning) { this._stop(event); } }, 100); event.preventDefault();
			}, "mousedown .ui-spinner-button": function(event) {
				var previous; previous = this.element[0] === $.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(); function checkFocus() { var isActive = this.element[0] === $.ui.safeActiveElement(this.document[0]); if (!isActive) { this.element.trigger("focus"); this.previous = previous; this._delay(function() { this.previous = previous; }); } }
				event.preventDefault(); checkFocus.call(this); this.cancelBlur = true; this._delay(function() { delete this.cancelBlur; checkFocus.call(this); }); if (this._start(event) === false) { return; }
				this._repeat(null, $(event.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, event);
			}, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function(event) {
				if (!$(event.currentTarget).hasClass("ui-state-active")) { return; }
				if (this._start(event) === false) { return false; }
				this._repeat(null, $(event.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, event);
			}, "mouseleave .ui-spinner-button": "_stop"
		}, _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>"); }, _draw: function() { this._enhance(); this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"); this._addClass("ui-spinner-input"); this.element.attr("role", "spinbutton"); this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", true).button({ classes: { "ui-button": "" } }); this._removeClass(this.buttons, "ui-corner-all"); this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"); this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"); this.buttons.first().button({ "icon": this.options.icons.up, "showLabel": false }); this.buttons.last().button({ "icon": this.options.icons.down, "showLabel": false }); if (this.buttons.height() > Math.ceil(this.uiSpinner.height() * 0.5) && this.uiSpinner.height() > 0) { this.uiSpinner.height(this.uiSpinner.height()); } }, _keydown: function(event) {
			var options = this.options, keyCode = $.ui.keyCode; switch (event.keyCode) { case keyCode.UP: this._repeat(null, 1, event); return true; case keyCode.DOWN: this._repeat(null, -1, event); return true; case keyCode.PAGE_UP: this._repeat(null, options.page, event); return true; case keyCode.PAGE_DOWN: this._repeat(null, -options.page, event); return true; }
			return false;
		}, _start: function(event) {
			if (!this.spinning && this._trigger("start", event) === false) { return false; }
			if (!this.counter) { this.counter = 1; }
			this.spinning = true; return true;
		}, _repeat: function(i, steps, event) { i = i || 500; clearTimeout(this.timer); this.timer = this._delay(function() { this._repeat(40, steps, event); }, i); this._spin(steps * this.options.step, event); }, _spin: function(step, event) {
			var value = this.value() || 0; if (!this.counter) { this.counter = 1; }
			value = this._adjustValue(value + step * this._increment(this.counter)); if (!this.spinning || this._trigger("spin", event, { value: value }) !== false) { this._value(value); this.counter++; }
		}, _increment: function(i) {
			var incremental = this.options.incremental; if (incremental) { return $.isFunction(incremental) ? incremental(i) : Math.floor(i * i * i / 50000 - i * i / 500 + 17 * i / 200 + 1); }
			return 1;
		}, _precision: function() {
			var precision = this._precisionOf(this.options.step); if (this.options.min !== null) { precision = Math.max(precision, this._precisionOf(this.options.min)); }
			return precision;
		}, _precisionOf: function(num) { var str = num.toString(), decimal = str.indexOf("."); return decimal === -1 ? 0 : str.length - decimal - 1; }, _adjustValue: function(value) {
			var base, aboveMin, options = this.options; base = options.min !== null ? options.min : 0; aboveMin = value - base; aboveMin = Math.round(aboveMin / options.step) * options.step; value = base + aboveMin; value = parseFloat(value.toFixed(this._precision())); if (options.max !== null && value > options.max) { return options.max; }
			if (options.min !== null && value < options.min) { return options.min; }
			return value;
		}, _stop: function(event) {
			if (!this.spinning) { return; }
			clearTimeout(this.timer); clearTimeout(this.mousewheelTimer); this.counter = 0; this.spinning = false; this._trigger("stop", event);
		}, _setOption: function(key, value) {
			var prevValue, first, last; if (key === "culture" || key === "numberFormat") { prevValue = this._parse(this.element.val()); this.options[key] = value; this.element.val(this._format(prevValue)); return; }
			if (key === "max" || key === "min" || key === "step") { if (typeof value === "string") { value = this._parse(value); } }
			if (key === "icons") { first = this.buttons.first().find(".ui-icon"); this._removeClass(first, null, this.options.icons.up); this._addClass(first, null, value.up); last = this.buttons.last().find(".ui-icon"); this._removeClass(last, null, this.options.icons.down); this._addClass(last, null, value.down); }
			this._super(key, value);
		}, _setOptionDisabled: function(value) { this._super(value); this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!value); this.element.prop("disabled", !!value); this.buttons.button(value ? "disable" : "enable"); }, _setOptions: spinnerModifer(function(options) { this._super(options); }), _parse: function(val) {
			if (typeof val === "string" && val !== "") { val = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(val, 10, this.options.culture) : +val; }
			return val === "" || isNaN(val) ? null : val;
		}, _format: function(value) {
			if (value === "") { return ""; }
			return window.Globalize && this.options.numberFormat ? Globalize.format(value, this.options.numberFormat, this.options.culture) : value;
		}, _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }); }, isValid: function() {
			var value = this.value(); if (value === null) { return false; }
			return value === this._adjustValue(value);
		}, _value: function(value, allowAny) {
			var parsed; if (value !== "") {
				parsed = this._parse(value); if (parsed !== null) {
					if (!allowAny) { parsed = this._adjustValue(parsed); }
					value = this._format(parsed);
				}
			}
			this.element.val(value); this._refresh();
		}, _destroy: function() { this.element.prop("disabled", false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"); this.uiSpinner.replaceWith(this.element); }, stepUp: spinnerModifer(function(steps) { this._stepUp(steps); }), _stepUp: function(steps) { if (this._start()) { this._spin((steps || 1) * this.options.step); this._stop(); } }, stepDown: spinnerModifer(function(steps) { this._stepDown(steps); }), _stepDown: function(steps) { if (this._start()) { this._spin((steps || 1) * -this.options.step); this._stop(); } }, pageUp: spinnerModifer(function(pages) { this._stepUp((pages || 1) * this.options.page); }), pageDown: spinnerModifer(function(pages) { this._stepDown((pages || 1) * this.options.page); }), value: function(newVal) {
			if (!arguments.length) { return this._parse(this.element.val()); }
			spinnerModifer(this._value).call(this, newVal);
		}, widget: function() { return this.uiSpinner; }
	}); if ($.uiBackCompat !== false) { $.widget("ui.spinner", $.ui.spinner, { _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()); }, _uiSpinnerHtml: function() { return "<span>"; }, _buttonHtml: function() { return "<a></a><a></a>"; } }); }
	return $.ui.spinner;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/tabs.js', ["jquery", "../escape-selector", "../keycode", "../safe-active-element", "../unique-id", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	$.widget("ui.tabs", {
		version: "@VERSION", delay: 300, options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tab": "ui-corner-top", "ui-tabs-panel": "ui-corner-bottom" }, collapsible: false, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: (function() {
			var rhash = /#.*$/; return function(anchor) {
				var anchorUrl, locationUrl; anchorUrl = anchor.href.replace(rhash, ""); locationUrl = location.href.replace(rhash, ""); try { anchorUrl = decodeURIComponent(anchorUrl); } catch (error) { }
				try { locationUrl = decodeURIComponent(locationUrl); } catch (error) { }
				return anchor.hash.length > 1 && anchorUrl === locationUrl;
			};
		})(), _create: function() {
			var that = this, options = this.options; this.running = false; this._addClass("ui-tabs", "ui-widget ui-widget-content"); this._toggleClass("ui-tabs-collapsible", null, options.collapsible); this._processTabs(); options.active = this._initialActive(); if ($.isArray(options.disabled)) { options.disabled = $.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"), function(li) { return that.tabs.index(li); }))).sort(); }
			if (this.options.active !== false && this.anchors.length) { this.active = this._findActive(options.active); } else { this.active = $(); }
			this._refresh(); if (this.active.length) { this.load(options.active); }
		}, _initialActive: function() {
			var active = this.options.active, collapsible = this.options.collapsible, locationHash = location.hash.substring(1); if (active === null) {
				if (locationHash) { this.tabs.each(function(i, tab) { if ($(tab).attr("aria-controls") === locationHash) { active = i; return false; } }); }
				if (active === null) { active = this.tabs.index(this.tabs.filter(".ui-tabs-active")); }
				if (active === null || active === -1) { active = this.tabs.length ? 0 : false; }
			}
			if (active !== false) { active = this.tabs.index(this.tabs.eq(active)); if (active === -1) { active = collapsible ? false : 0; } }
			if (!collapsible && active === false && this.anchors.length) { active = 0; }
			return active;
		}, _getCreateEventData: function() { return { tab: this.active, panel: !this.active.length ? $() : this._getPanelForTab(this.active) }; }, _tabKeydown: function(event) {
			var focusedTab = $($.ui.safeActiveElement(this.document[0])).closest("li"), selectedIndex = this.tabs.index(focusedTab), goingForward = true; if (this._handlePageNav(event)) { return; }
			switch (event.keyCode) { case $.ui.keyCode.RIGHT: case $.ui.keyCode.DOWN: selectedIndex++; break; case $.ui.keyCode.UP: case $.ui.keyCode.LEFT: goingForward = false; selectedIndex--; break; case $.ui.keyCode.END: selectedIndex = this.anchors.length - 1; break; case $.ui.keyCode.HOME: selectedIndex = 0; break; case $.ui.keyCode.SPACE: event.preventDefault(); clearTimeout(this.activating); this._activate(selectedIndex); return; case $.ui.keyCode.ENTER: event.preventDefault(); clearTimeout(this.activating); this._activate(selectedIndex === this.options.active ? false : selectedIndex); return; default: return; }
			event.preventDefault(); clearTimeout(this.activating); selectedIndex = this._focusNextTab(selectedIndex, goingForward); if (!event.ctrlKey && !event.metaKey) { focusedTab.attr("aria-selected", "false"); this.tabs.eq(selectedIndex).attr("aria-selected", "true"); this.activating = this._delay(function() { this.option("active", selectedIndex); }, this.delay); }
		}, _panelKeydown: function(event) {
			if (this._handlePageNav(event)) { return; }
			if (event.ctrlKey && event.keyCode === $.ui.keyCode.UP) { event.preventDefault(); this.active.trigger("focus"); }
		}, _handlePageNav: function(event) {
			if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP) { this._activate(this._focusNextTab(this.options.active - 1, false)); return true; }
			if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN) { this._activate(this._focusNextTab(this.options.active + 1, true)); return true; }
		}, _findNextTab: function(index, goingForward) {
			var lastTabIndex = this.tabs.length - 1; function constrain() {
				if (index > lastTabIndex) { index = 0; }
				if (index < 0) { index = lastTabIndex; }
				return index;
			}
			while ($.inArray(constrain(), this.options.disabled) !== -1) { index = goingForward ? index + 1 : index - 1; }
			return index;
		}, _focusNextTab: function(index, goingForward) { index = this._findNextTab(index, goingForward); this.tabs.eq(index).trigger("focus"); return index; }, _setOption: function(key, value) {
			if (key === "active") { this._activate(value); return; }
			this._super(key, value); if (key === "collapsible") { this._toggleClass("ui-tabs-collapsible", null, value); if (!value && this.options.active === false) { this._activate(0); } }
			if (key === "event") { this._setupEvents(value); }
			if (key === "heightStyle") { this._setupHeightStyle(value); }
		}, _sanitizeSelector: function(hash) { return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""; }, refresh: function() {
			var options = this.options, lis = this.tablist.children(":has(a[href])"); options.disabled = $.map(lis.filter(".ui-state-disabled"), function(tab) { return lis.index(tab); }); this._processTabs(); if (options.active === false || !this.anchors.length) { options.active = false; this.active = $(); } else if (this.active.length && !$.contains(this.tablist[0], this.active[0])) { if (this.tabs.length === options.disabled.length) { options.active = false; this.active = $(); } else { this._activate(this._findNextTab(Math.max(0, options.active - 1), false)); } } else { options.active = this.tabs.index(this.active); }
			this._refresh();
		}, _refresh: function() { this._setOptionDisabled(this.options.disabled); this._setupEvents(this.options.event); this._setupHeightStyle(this.options.heightStyle); this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }); this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }); if (!this.active.length) { this.tabs.eq(0).attr("tabIndex", 0); } else { this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }); this._addClass(this.active, "ui-tabs-active", "ui-state-active"); this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" }); } }, _processTabs: function() {
			var that = this, prevTabs = this.tabs, prevAnchors = this.anchors, prevPanels = this.panels; this.tablist = this._getList().attr("role", "tablist"); this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"); this.tablist.on("mousedown" + this.eventNamespace, "> li", function(event) { if ($(this).is(".ui-state-disabled")) { event.preventDefault(); } }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() { if ($(this).closest("li").is(".ui-state-disabled")) { this.blur(); } }); this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }); this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"); this.anchors = this.tabs.map(function() { return $("a", this)[0]; }).attr({ role: "presentation", tabIndex: -1 }); this._addClass(this.anchors, "ui-tabs-anchor"); this.panels = $(); this.anchors.each(function(i, anchor) {
				var selector, panel, panelId, anchorId = $(anchor).uniqueId().attr("id"), tab = $(anchor).closest("li"), originalAriaControls = tab.attr("aria-controls"); if (that._isLocal(anchor)) { selector = anchor.hash; panelId = selector.substring(1); panel = that.element.find(that._sanitizeSelector(selector)); } else {
					panelId = tab.attr("aria-controls") || $({}).uniqueId()[0].id; selector = "#" + panelId; panel = that.element.find(selector); if (!panel.length) { panel = that._createPanel(panelId); panel.insertAfter(that.panels[i - 1] || that.tablist); }
					panel.attr("aria-live", "polite");
				}
				if (panel.length) { that.panels = that.panels.add(panel); }
				if (originalAriaControls) { tab.data("ui-tabs-aria-controls", originalAriaControls); }
				tab.attr({ "aria-controls": panelId, "aria-labelledby": anchorId }); panel.attr("aria-labelledby", anchorId);
			}); this.panels.attr("role", "tabpanel"); this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"); if (prevTabs) { this._off(prevTabs.not(this.tabs)); this._off(prevAnchors.not(this.anchors)); this._off(prevPanels.not(this.panels)); }
		}, _getList: function() { return this.tablist || this.element.find("ol, ul").eq(0); }, _createPanel: function(id) { return $("<div>").attr("id", id).data("ui-tabs-destroy", true); }, _setOptionDisabled: function(disabled) {
			var currentItem, li, i; if ($.isArray(disabled)) { if (!disabled.length) { disabled = false; } else if (disabled.length === this.anchors.length) { disabled = true; } }
			for (i = 0; (li = this.tabs[i]); i++) { currentItem = $(li); if (disabled === true || $.inArray(i, disabled) !== -1) { currentItem.attr("aria-disabled", "true"); this._addClass(currentItem, null, "ui-state-disabled"); } else { currentItem.removeAttr("aria-disabled"); this._removeClass(currentItem, null, "ui-state-disabled"); } }
			this.options.disabled = disabled; this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, disabled === true);
		}, _setupEvents: function(event) {
			var events = {}; if (event) { $.each(event.split(" "), function(index, eventName) { events[eventName] = "_eventHandler"; }); }
			this._off(this.anchors.add(this.tabs).add(this.panels)); this._on(true, this.anchors, { click: function(event) { event.preventDefault(); } }); this._on(this.anchors, events); this._on(this.tabs, { keydown: "_tabKeydown" }); this._on(this.panels, { keydown: "_panelKeydown" }); this._focusable(this.tabs); this._hoverable(this.tabs);
		}, _setupHeightStyle: function(heightStyle) {
			var maxHeight, parent = this.element.parent(); if (heightStyle === "fill") {
				maxHeight = parent.height(); maxHeight -= this.element.outerHeight() - this.element.height(); this.element.siblings(":visible").each(function() {
					var elem = $(this), position = elem.css("position"); if (position === "absolute" || position === "fixed") { return; }
					maxHeight -= elem.outerHeight(true);
				}); this.element.children().not(this.panels).each(function() { maxHeight -= $(this).outerHeight(true); }); this.panels.each(function() {
					$(this).height(Math.max(0, maxHeight -
						$(this).innerHeight() + $(this).height()));
				}).css("overflow", "auto");
			} else if (heightStyle === "auto") { maxHeight = 0; this.panels.each(function() { maxHeight = Math.max(maxHeight, $(this).height("").height()); }).height(maxHeight); }
		}, _eventHandler: function(event) {
			var options = this.options, active = this.active, anchor = $(event.currentTarget), tab = anchor.closest("li"), clickedIsActive = tab[0] === active[0], collapsing = clickedIsActive && options.collapsible, toShow = collapsing ? $() : this._getPanelForTab(tab), toHide = !active.length ? $() : this._getPanelForTab(active), eventData = { oldTab: active, oldPanel: toHide, newTab: collapsing ? $() : tab, newPanel: toShow }; event.preventDefault(); if (tab.hasClass("ui-state-disabled") || tab.hasClass("ui-tabs-loading") || this.running || (clickedIsActive && !options.collapsible) || (this._trigger("beforeActivate", event, eventData) === false)) { return; }
			options.active = collapsing ? false : this.tabs.index(tab); this.active = clickedIsActive ? $() : tab; if (this.xhr) { this.xhr.abort(); }
			if (!toHide.length && !toShow.length) { $.error("jQuery UI Tabs: Mismatching fragment identifier."); }
			if (toShow.length) { this.load(this.tabs.index(tab), event); }
			this._toggle(event, eventData);
		}, _toggle: function(event, eventData) {
			var that = this, toShow = eventData.newPanel, toHide = eventData.oldPanel; this.running = true; function complete() { that.running = false; that._trigger("activate", event, eventData); }
			function show() { that._addClass(eventData.newTab.closest("li"), "ui-tabs-active", "ui-state-active"); if (toShow.length && that.options.show) { that._show(toShow, that.options.show, complete); } else { toShow.show(); complete(); } }
			if (toHide.length && this.options.hide) { this._hide(toHide, this.options.hide, function() { that._removeClass(eventData.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"); show(); }); } else { this._removeClass(eventData.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"); toHide.hide(); show(); }
			toHide.attr("aria-hidden", "true"); eventData.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }); if (toShow.length && toHide.length) { eventData.oldTab.attr("tabIndex", -1); } else if (toShow.length) { this.tabs.filter(function() { return $(this).attr("tabIndex") === 0; }).attr("tabIndex", -1); }
			toShow.attr("aria-hidden", "false"); eventData.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
		}, _activate: function(index) {
			var anchor, active = this._findActive(index); if (active[0] === this.active[0]) { return; }
			if (!active.length) { active = this.active; }
			anchor = active.find(".ui-tabs-anchor")[0]; this._eventHandler({ target: anchor, currentTarget: anchor, preventDefault: $.noop });
		}, _findActive: function(index) { return index === false ? $() : this.tabs.eq(index); }, _getIndex: function(index) {
			if (typeof index === "string") { index = this.anchors.index(this.anchors.filter("[href$='" + $.ui.escapeSelector(index) + "']")); }
			return index;
		}, _destroy: function() {
			if (this.xhr) { this.xhr.abort(); }
			this.tablist.removeAttr("role").off(this.eventNamespace); this.anchors.removeAttr("role tabIndex").removeUniqueId(); this.tabs.add(this.panels).each(function() { if ($.data(this, "ui-tabs-destroy")) { $(this).remove(); } else { $(this).removeAttr("role tabIndex " + "aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded"); } }); this.tabs.each(function() { var li = $(this), prev = li.data("ui-tabs-aria-controls"); if (prev) { li.attr("aria-controls", prev).removeData("ui-tabs-aria-controls"); } else { li.removeAttr("aria-controls"); } }); this.panels.show(); if (this.options.heightStyle !== "content") { this.panels.css("height", ""); }
		}, enable: function(index) {
			var disabled = this.options.disabled; if (disabled === false) { return; }
			if (index === undefined) { disabled = false; } else { index = this._getIndex(index); if ($.isArray(disabled)) { disabled = $.map(disabled, function(num) { return num !== index ? num : null; }); } else { disabled = $.map(this.tabs, function(li, num) { return num !== index ? num : null; }); } }
			this._setOptionDisabled(disabled);
		}, disable: function(index) {
			var disabled = this.options.disabled; if (disabled === true) { return; }
			if (index === undefined) { disabled = true; } else {
				index = this._getIndex(index); if ($.inArray(index, disabled) !== -1) { return; }
				if ($.isArray(disabled)) { disabled = $.merge([index], disabled).sort(); } else { disabled = [index]; }
			}
			this._setOptionDisabled(disabled);
		}, load: function(index, event) {
			index = this._getIndex(index); var that = this, tab = this.tabs.eq(index), anchor = tab.find(".ui-tabs-anchor"), panel = this._getPanelForTab(tab), eventData = { tab: tab, panel: panel }, complete = function(jqXHR, status) {
				if (status === "abort") { that.panels.stop(false, true); }
				that._removeClass(tab, "ui-tabs-loading"); panel.removeAttr("aria-busy"); if (jqXHR === that.xhr) { delete that.xhr; }
			}; if (this._isLocal(anchor[0])) { return; }
			this.xhr = $.ajax(this._ajaxSettings(anchor, event, eventData)); if (this.xhr && this.xhr.statusText !== "canceled") { this._addClass(tab, "ui-tabs-loading"); panel.attr("aria-busy", "true"); this.xhr.done(function(response, status, jqXHR) { setTimeout(function() { panel.html(response); that._trigger("load", event, eventData); complete(jqXHR, status); }, 1); }).fail(function(jqXHR, status) { setTimeout(function() { complete(jqXHR, status); }, 1); }); }
		}, _ajaxSettings: function(anchor, event, eventData) { var that = this; return { url: anchor.attr("href"), beforeSend: function(jqXHR, settings) { return that._trigger("beforeLoad", event, $.extend({ jqXHR: jqXHR, ajaxSettings: settings }, eventData)); } }; }, _getPanelForTab: function(tab) { var id = $(tab).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + id)); }
	}); if ($.uiBackCompat !== false) { $.widget("ui.tabs", $.ui.tabs, { _processTabs: function() { this._superApply(arguments); this._addClass(this.tabs, "ui-tab"); } }); }
	return $.ui.tabs;
})); (function(factory) { if (typeof define === "function" && define.amd) { define('ui/widgets/tooltip.js', ["jquery", "../keycode", "../position", "../unique-id", "../version", "../widget"], factory); } else { factory(jQuery); } }(function($) {
	$.widget("ui.tooltip", {
		version: "@VERSION", options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function() { var title = $(this).attr("title") || ""; return $("<a>").text(title).html(); }, hide: true, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: true, track: false, close: null, open: null }, _addDescribedBy: function(elem, id) { var describedby = (elem.attr("aria-describedby") || "").split(/\s+/); describedby.push(id); elem.data("ui-tooltip-id", id).attr("aria-describedby", $.trim(describedby.join(" "))); }, _removeDescribedBy: function(elem) {
			var id = elem.data("ui-tooltip-id"), describedby = (elem.attr("aria-describedby") || "").split(/\s+/), index = $.inArray(id, describedby); if (index !== -1) { describedby.splice(index, 1); }
			elem.removeData("ui-tooltip-id"); describedby = $.trim(describedby.join(" ")); if (describedby) { elem.attr("aria-describedby", describedby); } else { elem.removeAttr("aria-describedby"); }
		}, _create: function() { this._on({ mouseover: "open", focusin: "open" }); this.tooltips = {}; this.parents = {}; this.liveRegion = $("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body); this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"); }, _setOption: function(key, value) { var that = this; this._super(key, value); if (key === "content") { $.each(this.tooltips, function(id, tooltipData) { that._updateContent(tooltipData.element); }); } }, _setOptionDisabled: function(value) { this[value ? "_disable" : "_enable"](); }, _disable: function() { var that = this; $.each(this.tooltips, function(id, tooltipData) { var event = $.Event("blur"); event.target = event.currentTarget = tooltipData.element[0]; that.close(event, true); }); this.element.find(this.options.items).addBack().each(function() { var element = $(this); if (element.is("[title]")) { element.data("ui-tooltip-title", element.attr("title")).removeAttr("title"); } }); }, _enable: function() { this.element.find(this.options.items).addBack().each(function() { var element = $(this); if (element.data("ui-tooltip-title")) { element.attr("title", element.data("ui-tooltip-title")); } }); }, open: function(event) {
			var that = this, target = $(event ? event.target : this.element).closest(this.options.items); if (!target.length || target.data("ui-tooltip-id")) { return; }
			if (target.attr("title")) { target.data("ui-tooltip-title", target.attr("title")); }
			target.data("ui-tooltip-open", true); if (event && event.type === "mouseover") {
				target.parents().each(function() {
					var parent = $(this), blurEvent; if (parent.data("ui-tooltip-open")) { blurEvent = $.Event("blur"); blurEvent.target = blurEvent.currentTarget = this; that.close(blurEvent, true); }
					if (parent.attr("title")) { parent.uniqueId(); that.parents[this.id] = { element: this, title: parent.attr("title") }; parent.attr("title", ""); }
				});
			}
			this._registerCloseHandlers(event, target); this._updateContent(target, event);
		}, _updateContent: function(target, event) {
			var content, contentOption = this.options.content, that = this, eventType = event ? event.type : null; if (typeof contentOption === "string" || contentOption.nodeType || contentOption.jquery) { return this._open(event, target, contentOption); }
			content = contentOption.call(target[0], function(response) {
				that._delay(function() {
					if (!target.data("ui-tooltip-open")) { return; }
					if (event) { event.type = eventType; }
					this._open(event, target, response);
				});
			}); if (content) { this._open(event, target, content); }
		}, _open: function(event, target, content) {
			var tooltipData, tooltip, delayedShow, a11yContent, positionOption = $.extend({}, this.options.position); if (!content) { return; }
			tooltipData = this._find(target); if (tooltipData) { tooltipData.tooltip.find(".ui-tooltip-content").html(content); return; }
			if (target.is("[title]")) { if (event && event.type === "mouseover") { target.attr("title", ""); } else { target.removeAttr("title"); } }
			tooltipData = this._tooltip(target); tooltip = tooltipData.tooltip; this._addDescribedBy(target, tooltip.attr("id")); tooltip.find(".ui-tooltip-content").html(content); this.liveRegion.children().hide(); a11yContent = $("<div>").html(tooltip.find(".ui-tooltip-content").html()); a11yContent.removeAttr("name").find("[name]").removeAttr("name"); a11yContent.removeAttr("id").find("[id]").removeAttr("id"); a11yContent.appendTo(this.liveRegion); function position(event) {
				positionOption.of = event; if (tooltip.is(":hidden")) { return; }
				tooltip.position(positionOption);
			}
			if (this.options.track && event && /^mouse/.test(event.type)) { this._on(this.document, { mousemove: position }); position(event); } else { tooltip.position($.extend({ of: target }, this.options.position)); }
			tooltip.hide(); this._show(tooltip, this.options.show); if (this.options.track && this.options.show && this.options.show.delay) { delayedShow = this.delayedShow = setInterval(function() { if (tooltip.is(":visible")) { position(positionOption.of); clearInterval(delayedShow); } }, $.fx.interval); }
			this._trigger("open", event, { tooltip: tooltip });
		}, _registerCloseHandlers: function(event, target) {
			var events = { keyup: function(event) { if (event.keyCode === $.ui.keyCode.ESCAPE) { var fakeEvent = $.Event(event); fakeEvent.currentTarget = target[0]; this.close(fakeEvent, true); } } }; if (target[0] !== this.element[0]) { events.remove = function() { this._removeTooltip(this._find(target).tooltip); }; }
			if (!event || event.type === "mouseover") { events.mouseleave = "close"; }
			if (!event || event.type === "focusin") { events.focusout = "close"; }
			this._on(true, target, events);
		}, close: function(event) {
			var tooltip, that = this, target = $(event ? event.currentTarget : this.element), tooltipData = this._find(target); if (!tooltipData) { target.removeData("ui-tooltip-open"); return; }
			tooltip = tooltipData.tooltip; if (tooltipData.closing) { return; }
			clearInterval(this.delayedShow); if (target.data("ui-tooltip-title") && !target.attr("title")) { target.attr("title", target.data("ui-tooltip-title")); }
			this._removeDescribedBy(target); tooltipData.hiding = true; tooltip.stop(true); this._hide(tooltip, this.options.hide, function() { that._removeTooltip($(this)); }); target.removeData("ui-tooltip-open"); this._off(target, "mouseleave focusout keyup"); if (target[0] !== this.element[0]) { this._off(target, "remove"); }
			this._off(this.document, "mousemove"); if (event && event.type === "mouseleave") { $.each(this.parents, function(id, parent) { $(parent.element).attr("title", parent.title); delete that.parents[id]; }); }
			tooltipData.closing = true; this._trigger("close", event, { tooltip: tooltip }); if (!tooltipData.hiding) { tooltipData.closing = false; }
		}, _tooltip: function(element) { var tooltip = $("<div>").attr("role", "tooltip"), content = $("<div>").appendTo(tooltip), id = tooltip.uniqueId().attr("id"); this._addClass(content, "ui-tooltip-content"); this._addClass(tooltip, "ui-tooltip", "ui-widget ui-widget-content"); tooltip.appendTo(this._appendTo(element)); return this.tooltips[id] = { element: element, tooltip: tooltip }; }, _find: function(target) { var id = target.data("ui-tooltip-id"); return id ? this.tooltips[id] : null; }, _removeTooltip: function(tooltip) { tooltip.remove(); delete this.tooltips[tooltip.attr("id")]; }, _appendTo: function(target) {
			var element = target.closest(".ui-front, dialog"); if (!element.length) { element = this.document[0].body; }
			return element;
		}, _destroy: function() {
			var that = this; $.each(this.tooltips, function(id, tooltipData) {
				var event = $.Event("blur"), element = tooltipData.element; event.target = event.currentTarget = element[0]; that.close(event, true); $("#" + id).remove(); if (element.data("ui-tooltip-title")) {
					if (!element.attr("title")) { element.attr("title", element.data("ui-tooltip-title")); }
					element.removeData("ui-tooltip-title");
				}
			}); this.liveRegion.remove();
		}
	}); if ($.uiBackCompat !== false) {
		$.widget("ui.tooltip", $.ui.tooltip, {
			options: { tooltipClass: null }, _tooltip: function() {
				var tooltipData = this._superApply(arguments); if (this.options.tooltipClass) { tooltipData.tooltip.addClass(this.options.tooltipClass); }
				return tooltipData;
			}
		});
	}
	return $.ui.tooltip;
}));
/* /_res/jquery/jquery-ui-touch-punch.js */
(function($) {
	$.support.touch = 'ontouchend' in document; if (!$.support.touch) { return; }
	var mouseProto = $.ui.mouse.prototype, _mouseInit = mouseProto._mouseInit, _mouseDestroy = mouseProto._mouseDestroy, touchHandled; function simulateMouseEvent(event, simulatedType) {
		if (event.originalEvent.touches.length > 1) { return; }
		event.preventDefault(); var touch = event.originalEvent.changedTouches[0], simulatedEvent = document.createEvent('MouseEvents'); simulatedEvent.initMouseEvent(simulatedType, true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null); event.target.dispatchEvent(simulatedEvent);
	}
	mouseProto._touchStart = function(event) {
		var self = this; if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) { return; }
		touchHandled = true; self._touchMoved = false; simulateMouseEvent(event, 'mouseover'); simulateMouseEvent(event, 'mousemove'); simulateMouseEvent(event, 'mousedown');
	}; mouseProto._touchMove = function(event) {
		if (!touchHandled) { return; }
		this._touchMoved = true; simulateMouseEvent(event, 'mousemove');
	}; mouseProto._touchEnd = function(event) {
		if (!touchHandled) { return; }
		simulateMouseEvent(event, 'mouseup'); simulateMouseEvent(event, 'mouseout'); if (!this._touchMoved) { simulateMouseEvent(event, 'click'); }
		touchHandled = false;
	}; mouseProto._mouseInit = function() { var self = this; self.element.bind({ touchstart: $.proxy(self, '_touchStart'), touchmove: $.proxy(self, '_touchMove'), touchend: $.proxy(self, '_touchEnd') }); _mouseInit.call(self); }; mouseProto._mouseDestroy = function() { var self = this; self.element.unbind({ touchstart: $.proxy(self, '_touchStart'), touchmove: $.proxy(self, '_touchMove'), touchend: $.proxy(self, '_touchEnd') }); _mouseDestroy.call(self); };
})(jQuery);
/* /_res/jquery/plugin/jquery-ui-timepicker-addon.js */
(function(factory) { if (typeof define === 'function' && define.amd) { define(['jquery', 'jquery.ui'], factory); } else { factory(jQuery); } }(function($) {
	$.ui.timepicker = $.ui.timepicker || {}; if ($.ui.timepicker.version) { return; }
	$.extend($.ui, { timepicker: { version: "1.5.3" } }); var Timepicker = function() { this.regional = []; this.regional[''] = { currentText: 'Now', closeText: 'Done', amNames: ['AM', 'A'], pmNames: ['PM', 'P'], timeFormat: 'HH:mm', timeSuffix: '', timeOnlyTitle: 'Choose Time', timeText: 'Time', hourText: 'Hour', minuteText: 'Minute', secondText: 'Second', millisecText: 'Millisecond', microsecText: 'Microsecond', timezoneText: 'Time Zone', isRTL: false }; this._defaults = { showButtonPanel: true, timeOnly: false, timeOnlyShowDate: false, showHour: null, showMinute: null, showSecond: null, showMillisec: null, showMicrosec: null, showTimezone: null, showTime: true, stepHour: 1, stepMinute: 1, stepSecond: 1, stepMillisec: 1, stepMicrosec: 1, hour: 0, minute: 0, second: 0, millisec: 0, microsec: 0, timezone: null, hourMin: 0, minuteMin: 0, secondMin: 0, millisecMin: 0, microsecMin: 0, hourMax: 23, minuteMax: 59, secondMax: 59, millisecMax: 999, microsecMax: 999, minDateTime: null, maxDateTime: null, maxTime: null, minTime: null, onSelect: null, hourGrid: 0, minuteGrid: 0, secondGrid: 0, millisecGrid: 0, microsecGrid: 0, alwaysSetTime: true, separator: ' ', altFieldTimeOnly: true, altTimeFormat: null, altSeparator: null, altTimeSuffix: null, altRedirectFocus: true, pickerTimeFormat: null, pickerTimeSuffix: null, showTimepicker: true, timezoneList: null, addSliderAccess: false, sliderAccessArgs: null, controlType: 'slider', oneLine: false, defaultValue: null, parse: 'strict', afterInject: null }; $.extend(this._defaults, this.regional['']); }; $.extend(Timepicker.prototype, {
		$input: null, $altInput: null, $timeObj: null, inst: null, hour_slider: null, minute_slider: null, second_slider: null, millisec_slider: null, microsec_slider: null, timezone_select: null, maxTime: null, minTime: null, hour: 0, minute: 0, second: 0, millisec: 0, microsec: 0, timezone: null, hourMinOriginal: null, minuteMinOriginal: null, secondMinOriginal: null, millisecMinOriginal: null, microsecMinOriginal: null, hourMaxOriginal: null, minuteMaxOriginal: null, secondMaxOriginal: null, millisecMaxOriginal: null, microsecMaxOriginal: null, ampm: '', formattedDate: '', formattedTime: '', formattedDateTime: '', timezoneList: null, units: ['hour', 'minute', 'second'], support: {}, control: null, setDefaults: function(settings) { extendRemove(this._defaults, settings || {}); return this; }, _newInst: function($input, opts) {
			var tp_inst = new Timepicker(), inlineSettings = {}, fns = {}, overrides, i; for (var attrName in this._defaults) { if (this._defaults.hasOwnProperty(attrName)) { var attrValue = $input.attr('time:' + attrName); if (attrValue) { try { inlineSettings[attrName] = eval(attrValue); } catch (err) { inlineSettings[attrName] = attrValue; } } } }
			overrides = {
				beforeShow: function(input, dp_inst) { if ($.isFunction(tp_inst._defaults.evnts.beforeShow)) { return tp_inst._defaults.evnts.beforeShow.call($input[0], input, dp_inst, tp_inst); } }, onChangeMonthYear: function(year, month, dp_inst) { if ($.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)) { tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst); } }, onClose: function(dateText, dp_inst) {
					if (tp_inst.timeDefined === true && $input.val() !== '') { tp_inst._updateDateTime(dp_inst); }
					if ($.isFunction(tp_inst._defaults.evnts.onClose)) { tp_inst._defaults.evnts.onClose.call($input[0], dateText, dp_inst, tp_inst); }
				}
			}; for (i in overrides) { if (overrides.hasOwnProperty(i)) { fns[i] = opts[i] || null; } }
			tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, opts, overrides, { evnts: fns, timepicker: tp_inst }); tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(val) { return val.toUpperCase(); }); tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(val) { return val.toUpperCase(); }); tp_inst.support = detectSupport(tp_inst._defaults.timeFormat +
				(tp_inst._defaults.pickerTimeFormat ? tp_inst._defaults.pickerTimeFormat : '') +
				(tp_inst._defaults.altTimeFormat ? tp_inst._defaults.altTimeFormat : '')); if (typeof (tp_inst._defaults.controlType) === 'string') {
					if (tp_inst._defaults.controlType === 'slider' && typeof ($.ui.slider) === 'undefined') { tp_inst._defaults.controlType = 'select'; }
					tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType];
				}
			else { tp_inst.control = tp_inst._defaults.controlType; }
			var timezoneList = [-720, -660, -600, -570, -540, -480, -420, -360, -300, -270, -240, -210, -180, -120, -60, 0, 60, 120, 180, 210, 240, 270, 300, 330, 345, 360, 390, 420, 480, 525, 540, 570, 600, 630, 660, 690, 720, 765, 780, 840]; if (tp_inst._defaults.timezoneList !== null) { timezoneList = tp_inst._defaults.timezoneList; }
			var tzl = timezoneList.length, tzi = 0, tzv = null; if (tzl > 0 && typeof timezoneList[0] !== 'object') { for (; tzi < tzl; tzi++) { tzv = timezoneList[tzi]; timezoneList[tzi] = { value: tzv, label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601) }; } }
			tp_inst._defaults.timezoneList = timezoneList; tp_inst.timezone = tp_inst._defaults.timezone !== null ? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) : ((new Date()).getTimezoneOffset() * -1); tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin ? tp_inst._defaults.hourMin : tp_inst._defaults.hour > tp_inst._defaults.hourMax ? tp_inst._defaults.hourMax : tp_inst._defaults.hour; tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin ? tp_inst._defaults.minuteMin : tp_inst._defaults.minute > tp_inst._defaults.minuteMax ? tp_inst._defaults.minuteMax : tp_inst._defaults.minute; tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin ? tp_inst._defaults.secondMin : tp_inst._defaults.second > tp_inst._defaults.secondMax ? tp_inst._defaults.secondMax : tp_inst._defaults.second; tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin ? tp_inst._defaults.millisecMin : tp_inst._defaults.millisec > tp_inst._defaults.millisecMax ? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec; tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin ? tp_inst._defaults.microsecMin : tp_inst._defaults.microsec > tp_inst._defaults.microsecMax ? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec; tp_inst.ampm = ''; tp_inst.$input = $input; if (tp_inst._defaults.altField) { tp_inst.$altInput = $(tp_inst._defaults.altField); if (tp_inst._defaults.altRedirectFocus === true) { tp_inst.$altInput.css({ cursor: 'pointer' }).focus(function() { $input.trigger("focus"); }); } }
			if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) { tp_inst._defaults.minDate = new Date(); }
			if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) { tp_inst._defaults.maxDate = new Date(); }
			if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) { tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime()); }
			if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) { tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime()); }
			if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) { tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime()); }
			if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) { tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime()); }
			tp_inst.$input.bind('focus', function() { tp_inst._onFocus(); }); return tp_inst;
		}, _addTimePicker: function(dp_inst) { var currDT = $.trim((this.$altInput && this._defaults.altFieldTimeOnly) ? this.$input.val() + ' ' + this.$altInput.val() : this.$input.val()); this.timeDefined = this._parseTime(currDT); this._limitMinMaxDateTime(dp_inst, false); this._injectTimePicker(); this._afterInject(); }, _parseTime: function(timeString, withDate) {
			if (!this.inst) { this.inst = $.datepicker._getInst(this.$input[0]); }
			if (withDate || !this._defaults.timeOnly) {
				var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat'); try {
					var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults); if (!parseRes.timeObj) { return false; }
					$.extend(this, parseRes.timeObj);
				} catch (err) { $.timepicker.log("Error parsing the date/time string: " + err + "\ndate/time string = " + timeString + "\ntimeFormat = " + this._defaults.timeFormat + "\ndateFormat = " + dp_dateFormat); return false; }
				return true;
			} else {
				var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults); if (!timeObj) { return false; }
				$.extend(this, timeObj); return true;
			}
		}, _afterInject: function() { var o = this.inst.settings; if ($.isFunction(o.afterInject)) { o.afterInject.call(this); } }, _injectTimePicker: function() {
			var $dp = this.inst.dpDiv, o = this.inst.settings, tp_inst = this, litem = '', uitem = '', show = null, max = {}, gridSize = {}, size = null, i = 0, l = 0; if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) {
				var noDisplay = ' ui_tpicker_unit_hide', html = '<div class="ui-timepicker-div' + (o.isRTL ? ' ui-timepicker-rtl' : '') + (o.oneLine && o.controlType === 'select' ? ' ui-timepicker-oneLine' : '') + '"><dl>' + '<dt class="ui_tpicker_time_label"' + ((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' + '<dd class="ui_tpicker_time ' + ((o.showTime) ? '' : noDisplay) + '"></dd>'; for (i = 0, l = this.units.length; i < l; i++) {
					litem = this.units[i]; uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1); show = o['show' + uitem] !== null ? o['show' + uitem] : this.support[litem]; max[litem] = parseInt((o[litem + 'Max'] - ((o[litem + 'Max'] - o[litem + 'Min']) % o['step' + uitem])), 10); gridSize[litem] = 0; html += '<dt class="ui_tpicker_' + litem + '_label' + (show ? '' : noDisplay) + '">' + o[litem + 'Text'] + '</dt>' + '<dd class="ui_tpicker_' + litem + (show ? '' : noDisplay) + '"><div class="ui_tpicker_' + litem + '_slider' + (show ? '' : noDisplay) + '"></div>'; if (show && o[litem + 'Grid'] > 0) {
						html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>'; if (litem === 'hour') { for (var h = o[litem + 'Min']; h <= max[litem]; h += parseInt(o[litem + 'Grid'], 10)) { gridSize[litem]++; var tmph = $.datepicker.formatTime(this.support.ampm ? 'hht' : 'HH', { hour: h }, o); html += '<td data-for="' + litem + '">' + tmph + '</td>'; } }
						else { for (var m = o[litem + 'Min']; m <= max[litem]; m += parseInt(o[litem + 'Grid'], 10)) { gridSize[litem]++; html += '<td data-for="' + litem + '">' + ((m < 10) ? '0' : '') + m + '</td>'; } }
						html += '</tr></table></div>';
					}
					html += '</dd>';
				}
				var showTz = o.showTimezone !== null ? o.showTimezone : this.support.timezone; html += '<dt class="ui_tpicker_timezone_label' + (showTz ? '' : noDisplay) + '">' + o.timezoneText + '</dt>'; html += '<dd class="ui_tpicker_timezone' + (showTz ? '' : noDisplay) + '"></dd>'; html += '</dl></div>'; var $tp = $(html); if (o.timeOnly === true) { $tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' + '<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' + '</div>'); $dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide(); }
				for (i = 0, l = tp_inst.units.length; i < l; i++) {
					litem = tp_inst.units[i]; uitem = litem.substr(0, 1).toUpperCase() + litem.substr(1); show = o['show' + uitem] !== null ? o['show' + uitem] : this.support[litem]; tp_inst[litem + '_slider'] = tp_inst.control.create(tp_inst, $tp.find('.ui_tpicker_' + litem + '_slider'), litem, tp_inst[litem], o[litem + 'Min'], max[litem], o['step' + uitem]); if (show && o[litem + 'Grid'] > 0) {
						size = 100 * gridSize[litem] * o[litem + 'Grid'] / (max[litem] - o[litem + 'Min']); $tp.find('.ui_tpicker_' + litem + ' table').css({ width: size + "%", marginLeft: o.isRTL ? '0' : ((size / (-2 * gridSize[litem])) + "%"), marginRight: o.isRTL ? ((size / (-2 * gridSize[litem])) + "%") : '0', borderCollapse: 'collapse' }).find("td").click(function(e) {
							var $t = $(this), h = $t.html(), n = parseInt(h.replace(/[^0-9]/g), 10), ap = h.replace(/[^apm]/ig), f = $t.data('for'); if (f === 'hour') {
								if (ap.indexOf('p') !== -1 && n < 12) { n += 12; }
								else { if (ap.indexOf('a') !== -1 && n === 12) { n = 0; } }
							}
							tp_inst.control.value(tp_inst, tp_inst[f + '_slider'], litem, n); tp_inst._onTimeChange(); tp_inst._onSelectHandler();
						}).css({ cursor: 'pointer', width: (100 / gridSize[litem]) + '%', textAlign: 'center', overflow: 'hidden' });
					}
				}
				this.timezone_select = $tp.find('.ui_tpicker_timezone').append('<select></select>').find("select"); $.fn.append.apply(this.timezone_select, $.map(o.timezoneList, function(val, idx) { return $("<option />").val(typeof val === "object" ? val.value : val).text(typeof val === "object" ? val.label : val); })); if (typeof (this.timezone) !== "undefined" && this.timezone !== null && this.timezone !== "") { var local_timezone = (new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12)).getTimezoneOffset() * -1; if (local_timezone === this.timezone) { selectLocalTimezone(tp_inst); } else { this.timezone_select.val(this.timezone); } } else { if (typeof (this.hour) !== "undefined" && this.hour !== null && this.hour !== "") { this.timezone_select.val(o.timezone); } else { selectLocalTimezone(tp_inst); } }
				this.timezone_select.change(function() { tp_inst._onTimeChange(); tp_inst._onSelectHandler(); tp_inst._afterInject(); }); var $buttonPanel = $dp.find('.ui-datepicker-buttonpane'); if ($buttonPanel.length) { $buttonPanel.before($tp); } else { $dp.append($tp); }
				this.$timeObj = $tp.find('.ui_tpicker_time'); if (this.inst !== null) { var timeDefined = this.timeDefined; this._onTimeChange(); this.timeDefined = timeDefined; }
				if (this._defaults.addSliderAccess) { var sliderAccessArgs = this._defaults.sliderAccessArgs, rtl = this._defaults.isRTL; sliderAccessArgs.isRTL = rtl; setTimeout(function() { if ($tp.find('.ui-slider-access').length === 0) { $tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs); var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true); if (sliderAccessWidth) { $tp.find('table:visible').each(function() { var $g = $(this), oldWidth = $g.outerWidth(), oldMarginLeft = $g.css(rtl ? 'marginRight' : 'marginLeft').toString().replace('%', ''), newWidth = oldWidth - sliderAccessWidth, newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + '%', css = { width: newWidth, marginRight: 0, marginLeft: 0 }; css[rtl ? 'marginRight' : 'marginLeft'] = newMarginLeft; $g.css(css); }); } } }, 10); }
				tp_inst._limitMinMaxDateTime(this.inst, true);
			}
		}, _limitMinMaxDateTime: function(dp_inst, adjustSliders) {
			var o = this._defaults, dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay); if (!this._defaults.showTimepicker) { return; }
			if ($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date) {
				var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'), minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0); if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null || this.microsecMinOriginal === null) { this.hourMinOriginal = o.hourMin; this.minuteMinOriginal = o.minuteMin; this.secondMinOriginal = o.secondMin; this.millisecMinOriginal = o.millisecMin; this.microsecMinOriginal = o.microsecMin; }
				if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() === dp_date.getTime()) {
					this._defaults.hourMin = minDateTime.getHours(); if (this.hour <= this._defaults.hourMin) {
						this.hour = this._defaults.hourMin; this._defaults.minuteMin = minDateTime.getMinutes(); if (this.minute <= this._defaults.minuteMin) {
							this.minute = this._defaults.minuteMin; this._defaults.secondMin = minDateTime.getSeconds(); if (this.second <= this._defaults.secondMin) {
								this.second = this._defaults.secondMin; this._defaults.millisecMin = minDateTime.getMilliseconds(); if (this.millisec <= this._defaults.millisecMin) { this.millisec = this._defaults.millisecMin; this._defaults.microsecMin = minDateTime.getMicroseconds(); } else {
									if (this.microsec < this._defaults.microsecMin) { this.microsec = this._defaults.microsecMin; }
									this._defaults.microsecMin = this.microsecMinOriginal;
								}
							} else { this._defaults.millisecMin = this.millisecMinOriginal; this._defaults.microsecMin = this.microsecMinOriginal; }
						} else { this._defaults.secondMin = this.secondMinOriginal; this._defaults.millisecMin = this.millisecMinOriginal; this._defaults.microsecMin = this.microsecMinOriginal; }
					} else { this._defaults.minuteMin = this.minuteMinOriginal; this._defaults.secondMin = this.secondMinOriginal; this._defaults.millisecMin = this.millisecMinOriginal; this._defaults.microsecMin = this.microsecMinOriginal; }
				} else { this._defaults.hourMin = this.hourMinOriginal; this._defaults.minuteMin = this.minuteMinOriginal; this._defaults.secondMin = this.secondMinOriginal; this._defaults.millisecMin = this.millisecMinOriginal; this._defaults.microsecMin = this.microsecMinOriginal; }
			}
			if ($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date) {
				var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'), maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0); if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null || this.millisecMaxOriginal === null) { this.hourMaxOriginal = o.hourMax; this.minuteMaxOriginal = o.minuteMax; this.secondMaxOriginal = o.secondMax; this.millisecMaxOriginal = o.millisecMax; this.microsecMaxOriginal = o.microsecMax; }
				if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() === dp_date.getTime()) {
					this._defaults.hourMax = maxDateTime.getHours(); if (this.hour >= this._defaults.hourMax) {
						this.hour = this._defaults.hourMax; this._defaults.minuteMax = maxDateTime.getMinutes(); if (this.minute >= this._defaults.minuteMax) {
							this.minute = this._defaults.minuteMax; this._defaults.secondMax = maxDateTime.getSeconds(); if (this.second >= this._defaults.secondMax) {
								this.second = this._defaults.secondMax; this._defaults.millisecMax = maxDateTime.getMilliseconds(); if (this.millisec >= this._defaults.millisecMax) { this.millisec = this._defaults.millisecMax; this._defaults.microsecMax = maxDateTime.getMicroseconds(); } else {
									if (this.microsec > this._defaults.microsecMax) { this.microsec = this._defaults.microsecMax; }
									this._defaults.microsecMax = this.microsecMaxOriginal;
								}
							} else { this._defaults.millisecMax = this.millisecMaxOriginal; this._defaults.microsecMax = this.microsecMaxOriginal; }
						} else { this._defaults.secondMax = this.secondMaxOriginal; this._defaults.millisecMax = this.millisecMaxOriginal; this._defaults.microsecMax = this.microsecMaxOriginal; }
					} else { this._defaults.minuteMax = this.minuteMaxOriginal; this._defaults.secondMax = this.secondMaxOriginal; this._defaults.millisecMax = this.millisecMaxOriginal; this._defaults.microsecMax = this.microsecMaxOriginal; }
				} else { this._defaults.hourMax = this.hourMaxOriginal; this._defaults.minuteMax = this.minuteMaxOriginal; this._defaults.secondMax = this.secondMaxOriginal; this._defaults.millisecMax = this.millisecMaxOriginal; this._defaults.microsecMax = this.microsecMaxOriginal; }
			}
			if (dp_inst.settings.minTime !== null) { var tempMinTime = new Date("01/01/1970 " + dp_inst.settings.minTime); if (this.hour < tempMinTime.getHours()) { this.hour = this._defaults.hourMin = tempMinTime.getHours(); this.minute = this._defaults.minuteMin = tempMinTime.getMinutes(); } else if (this.hour === tempMinTime.getHours() && this.minute < tempMinTime.getMinutes()) { this.minute = this._defaults.minuteMin = tempMinTime.getMinutes(); } else { if (this._defaults.hourMin < tempMinTime.getHours()) { this._defaults.hourMin = tempMinTime.getHours(); this._defaults.minuteMin = tempMinTime.getMinutes(); } else if (this._defaults.hourMin === tempMinTime.getHours() === this.hour && this._defaults.minuteMin < tempMinTime.getMinutes()) { this._defaults.minuteMin = tempMinTime.getMinutes(); } else { this._defaults.minuteMin = 0; } } }
			if (dp_inst.settings.maxTime !== null) { var tempMaxTime = new Date("01/01/1970 " + dp_inst.settings.maxTime); if (this.hour > tempMaxTime.getHours()) { this.hour = this._defaults.hourMax = tempMaxTime.getHours(); this.minute = this._defaults.minuteMax = tempMaxTime.getMinutes(); } else if (this.hour === tempMaxTime.getHours() && this.minute > tempMaxTime.getMinutes()) { this.minute = this._defaults.minuteMax = tempMaxTime.getMinutes(); } else { if (this._defaults.hourMax > tempMaxTime.getHours()) { this._defaults.hourMax = tempMaxTime.getHours(); this._defaults.minuteMax = tempMaxTime.getMinutes(); } else if (this._defaults.hourMax === tempMaxTime.getHours() === this.hour && this._defaults.minuteMax > tempMaxTime.getMinutes()) { this._defaults.minuteMax = tempMaxTime.getMinutes(); } else { this._defaults.minuteMax = 59; } } }
			if (adjustSliders !== undefined && adjustSliders === true) {
				var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10), minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10), secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10), millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10), microsecMax = parseInt((this._defaults.microsecMax - ((this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec)), 10); if (this.hour_slider) { this.control.options(this, this.hour_slider, 'hour', { min: this._defaults.hourMin, max: hourMax, step: this._defaults.stepHour }); this.control.value(this, this.hour_slider, 'hour', this.hour - (this.hour % this._defaults.stepHour)); }
				if (this.minute_slider) { this.control.options(this, this.minute_slider, 'minute', { min: this._defaults.minuteMin, max: minMax, step: this._defaults.stepMinute }); this.control.value(this, this.minute_slider, 'minute', this.minute - (this.minute % this._defaults.stepMinute)); }
				if (this.second_slider) { this.control.options(this, this.second_slider, 'second', { min: this._defaults.secondMin, max: secMax, step: this._defaults.stepSecond }); this.control.value(this, this.second_slider, 'second', this.second - (this.second % this._defaults.stepSecond)); }
				if (this.millisec_slider) { this.control.options(this, this.millisec_slider, 'millisec', { min: this._defaults.millisecMin, max: millisecMax, step: this._defaults.stepMillisec }); this.control.value(this, this.millisec_slider, 'millisec', this.millisec - (this.millisec % this._defaults.stepMillisec)); }
				if (this.microsec_slider) { this.control.options(this, this.microsec_slider, 'microsec', { min: this._defaults.microsecMin, max: microsecMax, step: this._defaults.stepMicrosec }); this.control.value(this, this.microsec_slider, 'microsec', this.microsec - (this.microsec % this._defaults.stepMicrosec)); }
			}
		}, _onTimeChange: function() {
			if (!this._defaults.showTimepicker) { return; }
			var hour = (this.hour_slider) ? this.control.value(this, this.hour_slider, 'hour') : false, minute = (this.minute_slider) ? this.control.value(this, this.minute_slider, 'minute') : false, second = (this.second_slider) ? this.control.value(this, this.second_slider, 'second') : false, millisec = (this.millisec_slider) ? this.control.value(this, this.millisec_slider, 'millisec') : false, microsec = (this.microsec_slider) ? this.control.value(this, this.microsec_slider, 'microsec') : false, timezone = (this.timezone_select) ? this.timezone_select.val() : false, o = this._defaults, pickerTimeFormat = o.pickerTimeFormat || o.timeFormat, pickerTimeSuffix = o.pickerTimeSuffix || o.timeSuffix; if (typeof (hour) === 'object') { hour = false; }
			if (typeof (minute) === 'object') { minute = false; }
			if (typeof (second) === 'object') { second = false; }
			if (typeof (millisec) === 'object') { millisec = false; }
			if (typeof (microsec) === 'object') { microsec = false; }
			if (typeof (timezone) === 'object') { timezone = false; }
			if (hour !== false) { hour = parseInt(hour, 10); }
			if (minute !== false) { minute = parseInt(minute, 10); }
			if (second !== false) { second = parseInt(second, 10); }
			if (millisec !== false) { millisec = parseInt(millisec, 10); }
			if (microsec !== false) { microsec = parseInt(microsec, 10); }
			if (timezone !== false) { timezone = timezone.toString(); }
			var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0]; var hasChanged = (hour !== parseInt(this.hour, 10) || minute !== parseInt(this.minute, 10) || second !== parseInt(this.second, 10) || millisec !== parseInt(this.millisec, 10) || microsec !== parseInt(this.microsec, 10) || (this.ampm.length > 0 && (hour < 12) !== ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) || (this.timezone !== null && timezone !== this.timezone.toString())); if (hasChanged) {
				if (hour !== false) { this.hour = hour; }
				if (minute !== false) { this.minute = minute; }
				if (second !== false) { this.second = second; }
				if (millisec !== false) { this.millisec = millisec; }
				if (microsec !== false) { this.microsec = microsec; }
				if (timezone !== false) { this.timezone = timezone; }
				if (!this.inst) { this.inst = $.datepicker._getInst(this.$input[0]); }
				this._limitMinMaxDateTime(this.inst, true);
			}
			if (this.support.ampm) { this.ampm = ampm; }
			this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o); if (this.$timeObj) {
				if (pickerTimeFormat === o.timeFormat) { this.$timeObj.text(this.formattedTime + pickerTimeSuffix); }
				else { this.$timeObj.text($.datepicker.formatTime(pickerTimeFormat, this, o) + pickerTimeSuffix); }
			}
			this.timeDefined = true; if (hasChanged) { this._updateDateTime(); }
		}, _onSelectHandler: function() { var onSelect = this._defaults.onSelect || this.inst.settings.onSelect; var inputEl = this.$input ? this.$input[0] : null; if (onSelect && inputEl) { onSelect.apply(inputEl, [this.formattedDateTime, this]); } }, _updateDateTime: function(dp_inst) {
			dp_inst = this.inst || dp_inst; var dtTmp = (dp_inst.currentYear > 0 ? new Date(dp_inst.currentYear, dp_inst.currentMonth, dp_inst.currentDay) : new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)), dt = $.datepicker._daylightSavingAdjust(dtTmp), dateFmt = $.datepicker._get(dp_inst, 'dateFormat'), formatCfg = $.datepicker._getFormatConfig(dp_inst), timeAvailable = dt !== null && this.timeDefined; this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg); var formattedDateTime = this.formattedDate; if (dp_inst.lastVal === "") { dp_inst.currentYear = dp_inst.selectedYear; dp_inst.currentMonth = dp_inst.selectedMonth; dp_inst.currentDay = dp_inst.selectedDay; }
			if (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === false) { formattedDateTime = this.formattedTime; } else if ((this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) || (this._defaults.timeOnly === true && this._defaults.timeOnlyShowDate === true)) { formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix; }
			this.formattedDateTime = formattedDateTime; if (!this._defaults.showTimepicker) { this.$input.val(this.formattedDate); } else if (this.$altInput && this._defaults.timeOnly === false && this._defaults.altFieldTimeOnly === true) { this.$altInput.val(this.formattedTime); this.$input.val(this.formattedDate); } else if (this.$altInput) {
				this.$input.val(formattedDateTime); var altFormattedDateTime = '', altSeparator = this._defaults.altSeparator !== null ? this._defaults.altSeparator : this._defaults.separator, altTimeSuffix = this._defaults.altTimeSuffix !== null ? this._defaults.altTimeSuffix : this._defaults.timeSuffix; if (!this._defaults.timeOnly) {
					if (this._defaults.altFormat) { altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg); }
					else { altFormattedDateTime = this.formattedDate; }
					if (altFormattedDateTime) { altFormattedDateTime += altSeparator; }
				}
				if (this._defaults.altTimeFormat !== null) { altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix; }
				else { altFormattedDateTime += this.formattedTime + altTimeSuffix; }
				this.$altInput.val(altFormattedDateTime);
			} else { this.$input.val(formattedDateTime); }
			this.$input.trigger("change");
		}, _onFocus: function() { if (!this.$input.val() && this._defaults.defaultValue) { this.$input.val(this._defaults.defaultValue); var inst = $.datepicker._getInst(this.$input.get(0)), tp_inst = $.datepicker._get(inst, 'timepicker'); if (tp_inst) { if (tp_inst._defaults.timeOnly && (inst.input.val() !== inst.lastVal)) { try { $.datepicker._updateDatepicker(inst); } catch (err) { $.timepicker.log(err); } } } } }, _controls: {
			slider: {
				create: function(tp_inst, obj, unit, val, min, max, step) { var rtl = tp_inst._defaults.isRTL; return obj.prop('slide', null).slider({ orientation: "horizontal", value: rtl ? val * -1 : val, min: rtl ? max * -1 : min, max: rtl ? min * -1 : max, step: step, slide: function(event, ui) { tp_inst.control.value(tp_inst, $(this), unit, rtl ? ui.value * -1 : ui.value); tp_inst._onTimeChange(); }, stop: function(event, ui) { tp_inst._onSelectHandler(); } }); }, options: function(tp_inst, obj, unit, opts, val) {
					if (tp_inst._defaults.isRTL) {
						if (typeof (opts) === 'string') {
							if (opts === 'min' || opts === 'max') {
								if (val !== undefined) { return obj.slider(opts, val * -1); }
								return Math.abs(obj.slider(opts));
							}
							return obj.slider(opts);
						}
						var min = opts.min, max = opts.max; opts.min = opts.max = null; if (min !== undefined) { opts.max = min * -1; }
						if (max !== undefined) { opts.min = max * -1; }
						return obj.slider(opts);
					}
					if (typeof (opts) === 'string' && val !== undefined) { return obj.slider(opts, val); }
					return obj.slider(opts);
				}, value: function(tp_inst, obj, unit, val) {
					if (tp_inst._defaults.isRTL) {
						if (val !== undefined) { return obj.slider('value', val * -1); }
						return Math.abs(obj.slider('value'));
					}
					if (val !== undefined) { return obj.slider('value', val); }
					return obj.slider('value');
				}
			}, select: {
				create: function(tp_inst, obj, unit, val, min, max, step) {
					var sel = '<select class="ui-timepicker-select ui-state-default ui-corner-all" data-unit="' + unit + '" data-min="' + min + '" data-max="' + max + '" data-step="' + step + '">', format = tp_inst._defaults.pickerTimeFormat || tp_inst._defaults.timeFormat; for (var i = min; i <= max; i += step) {
						sel += '<option value="' + i + '"' + (i === val ? ' selected' : '') + '>'; if (unit === 'hour') { sel += $.datepicker.formatTime($.trim(format.replace(/[^ht ]/ig, '')), { hour: i }, tp_inst._defaults); }
						else if (unit === 'millisec' || unit === 'microsec' || i >= 10) { sel += i; }
						else { sel += '0' + i.toString(); }
						sel += '</option>';
					}
					sel += '</select>'; obj.children('select').remove(); $(sel).appendTo(obj).change(function(e) { tp_inst._onTimeChange(); tp_inst._onSelectHandler(); tp_inst._afterInject(); }); return obj;
				}, options: function(tp_inst, obj, unit, opts, val) {
					var o = {}, $t = obj.children('select'); if (typeof (opts) === 'string') {
						if (val === undefined) { return $t.data(opts); }
						o[opts] = val;
					}
					else { o = opts; }
					return tp_inst.control.create(tp_inst, obj, $t.data('unit'), $t.val(), o.min >= 0 ? o.min : $t.data('min'), o.max || $t.data('max'), o.step || $t.data('step'));
				}, value: function(tp_inst, obj, unit, val) {
					var $t = obj.children('select'); if (val !== undefined) { return $t.val(val); }
					return $t.val();
				}
			}
		}
	}); $.fn.extend({
		timepicker: function(o) {
			o = o || {}; var tmp_args = Array.prototype.slice.call(arguments); if (typeof o === 'object') { tmp_args[0] = $.extend(o, { timeOnly: true }); }
			return $(this).each(function() { $.fn.datetimepicker.apply($(this), tmp_args); });
		}, datetimepicker: function(o) { o = o || {}; var tmp_args = arguments; if (typeof (o) === 'string') { if (o === 'getDate' || (o === 'option' && tmp_args.length === 2 && typeof (tmp_args[1]) === 'string')) { return $.fn.datepicker.apply($(this[0]), tmp_args); } else { return this.each(function() { var $t = $(this); $t.datepicker.apply($t, tmp_args); }); } } else { return this.each(function() { var $t = $(this); $t.datepicker($.timepicker._newInst($t, o)._defaults); }); } }
	}); $.datepicker.parseDateTime = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings); if (parseRes.timeObj) { var t = parseRes.timeObj; parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec); parseRes.date.setMicroseconds(t.microsec); }
		return parseRes.date;
	}; $.datepicker.parseTime = function(timeFormat, timeString, options) {
		var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {}), iso8601 = (timeFormat.replace(/\'.*?\'/g, '').indexOf('Z') !== -1); var strictParse = function(f, s, o) {
			var getPatternAmpm = function(amNames, pmNames) {
				var markers = []; if (amNames) { $.merge(markers, amNames); }
				if (pmNames) { $.merge(markers, pmNames); }
				markers = $.map(markers, function(val) { return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&'); }); return '(' + markers.join('|') + ')?';
			}; var getFormatPositions = function(timeFormat) {
				var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g), orders = { h: -1, m: -1, s: -1, l: -1, c: -1, t: -1, z: -1 }; if (finds) { for (var i = 0; i < finds.length; i++) { if (orders[finds[i].toString().charAt(0)] === -1) { orders[finds[i].toString().charAt(0)] = i + 1; } } }
				return orders;
			}; var regstr = '^' + f.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(match) { var ml = match.length; switch (match.charAt(0).toLowerCase()) { case 'h': return ml === 1 ? '(\\d?\\d)' : '(\\d{' + ml + '})'; case 'm': return ml === 1 ? '(\\d?\\d)' : '(\\d{' + ml + '})'; case 's': return ml === 1 ? '(\\d?\\d)' : '(\\d{' + ml + '})'; case 'l': return '(\\d?\\d?\\d)'; case 'c': return '(\\d?\\d?\\d)'; case 'z': return '(z|[-+]\\d\\d:?\\d\\d|\\S+)?'; case 't': return getPatternAmpm(o.amNames, o.pmNames); default: return '(' + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function(m) { return "\\" + m; }) + ')?'; } }).replace(/\s/g, '\\s?') +
				o.timeSuffix + '$', order = getFormatPositions(f), ampm = '', treg; treg = s.match(new RegExp(regstr, 'i')); var resTime = { hour: 0, minute: 0, second: 0, millisec: 0, microsec: 0 }; if (treg) {
					if (order.t !== -1) { if (treg[order.t] === undefined || treg[order.t].length === 0) { ampm = ''; resTime.ampm = ''; } else { ampm = $.inArray(treg[order.t].toUpperCase(), $.map(o.amNames, function(x, i) { return x.toUpperCase(); })) !== -1 ? 'AM' : 'PM'; resTime.ampm = o[ampm === 'AM' ? 'amNames' : 'pmNames'][0]; } }
					if (order.h !== -1) { if (ampm === 'AM' && treg[order.h] === '12') { resTime.hour = 0; } else { if (ampm === 'PM' && treg[order.h] !== '12') { resTime.hour = parseInt(treg[order.h], 10) + 12; } else { resTime.hour = Number(treg[order.h]); } } }
					if (order.m !== -1) { resTime.minute = Number(treg[order.m]); }
					if (order.s !== -1) { resTime.second = Number(treg[order.s]); }
					if (order.l !== -1) { resTime.millisec = Number(treg[order.l]); }
					if (order.c !== -1) { resTime.microsec = Number(treg[order.c]); }
					if (order.z !== -1 && treg[order.z] !== undefined) { resTime.timezone = $.timepicker.timezoneOffsetNumber(treg[order.z]); }
					return resTime;
				}
			return false;
		}; var looseParse = function(f, s, o) {
			try {
				var d = new Date('2012-01-01 ' + s); if (isNaN(d.getTime())) { d = new Date('2012-01-01T' + s); if (isNaN(d.getTime())) { d = new Date('01/01/2012 ' + s); if (isNaN(d.getTime())) { throw "Unable to parse time with native Date: " + s; } } }
				return { hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds(), millisec: d.getMilliseconds(), microsec: d.getMicroseconds(), timezone: d.getTimezoneOffset() * -1 };
			}
			catch (err) {
				try { return strictParse(f, s, o); }
				catch (err2) { $.timepicker.log("Unable to parse \ntimeString: " + s + "\ntimeFormat: " + f); }
			}
			return false;
		}; if (typeof o.parse === "function") { return o.parse(timeFormat, timeString, o); }
		if (o.parse === 'loose') { return looseParse(timeFormat, timeString, o); }
		return strictParse(timeFormat, timeString, o);
	}; $.datepicker.formatTime = function(format, time, options) {
		options = options || {}; options = $.extend({}, $.timepicker._defaults, options); time = $.extend({ hour: 0, minute: 0, second: 0, millisec: 0, microsec: 0, timezone: null }, time); var tmptime = format, ampmName = options.amNames[0], hour = parseInt(time.hour, 10); if (hour > 11) { ampmName = options.pmNames[0]; }
		tmptime = tmptime.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function(match) { switch (match) { case 'HH': return ('0' + hour).slice(-2); case 'H': return hour; case 'hh': return ('0' + convert24to12(hour)).slice(-2); case 'h': return convert24to12(hour); case 'mm': return ('0' + time.minute).slice(-2); case 'm': return time.minute; case 'ss': return ('0' + time.second).slice(-2); case 's': return time.second; case 'l': return ('00' + time.millisec).slice(-3); case 'c': return ('00' + time.microsec).slice(-3); case 'z': return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, false); case 'Z': return $.timepicker.timezoneOffsetString(time.timezone === null ? options.timezone : time.timezone, true); case 'T': return ampmName.charAt(0).toUpperCase(); case 'TT': return ampmName.toUpperCase(); case 't': return ampmName.charAt(0).toLowerCase(); case 'tt': return ampmName.toLowerCase(); default: return match.replace(/'/g, ""); } }); return tmptime;
	}; $.datepicker._base_selectDate = $.datepicker._selectDate; $.datepicker._selectDate = function(id, dateStr) { var inst = this._getInst($(id)[0]), tp_inst = this._get(inst, 'timepicker'), was_inline; if (tp_inst && inst.settings.showTimepicker) { tp_inst._limitMinMaxDateTime(inst, true); was_inline = inst.inline; inst.inline = inst.stay_open = true; this._base_selectDate(id, dateStr); inst.inline = was_inline; inst.stay_open = false; this._notifyChange(inst); this._updateDatepicker(inst); } else { this._base_selectDate(id, dateStr); } }; $.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker; $.datepicker._updateDatepicker = function(inst) {
		var input = inst.input[0]; if ($.datepicker._curInst && $.datepicker._curInst !== inst && $.datepicker._datepickerShowing && $.datepicker._lastInput !== input) { return; }
		if (typeof (inst.stay_open) !== 'boolean' || inst.stay_open === false) { this._base_updateDatepicker(inst); var tp_inst = this._get(inst, 'timepicker'); if (tp_inst) { tp_inst._addTimePicker(inst); } }
	}; $.datepicker._base_doKeyPress = $.datepicker._doKeyPress; $.datepicker._doKeyPress = function(event) {
		var inst = $.datepicker._getInst(event.target), tp_inst = $.datepicker._get(inst, 'timepicker'); if (tp_inst) {
			if ($.datepicker._get(inst, 'constrainInput')) {
				var ampm = tp_inst.support.ampm, tz = tp_inst._defaults.showTimezone !== null ? tp_inst._defaults.showTimezone : tp_inst.support.timezone, dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')), datetimeChars = tp_inst._defaults.timeFormat.toString().replace(/[hms]/g, '').replace(/TT/g, ampm ? 'APM' : '').replace(/Tt/g, ampm ? 'AaPpMm' : '').replace(/tT/g, ampm ? 'AaPpMm' : '').replace(/T/g, ampm ? 'AP' : '').replace(/tt/g, ampm ? 'apm' : '').replace(/t/g, ampm ? 'ap' : '') + " " + tp_inst._defaults.separator +
					tp_inst._defaults.timeSuffix +
					(tz ? tp_inst._defaults.timezoneList.join('') : '') +
					(tp_inst._defaults.amNames.join('')) + (tp_inst._defaults.pmNames.join('')) +
					dateChars, chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode); return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
			}
		}
		return $.datepicker._base_doKeyPress(event);
	}; $.datepicker._base_updateAlternate = $.datepicker._updateAlternate; $.datepicker._updateAlternate = function(inst) {
		var tp_inst = this._get(inst, 'timepicker'); if (tp_inst) {
			var altField = tp_inst._defaults.altField; if (altField) {
				var altFormat = tp_inst._defaults.altFormat || tp_inst._defaults.dateFormat, date = this._getDate(inst), formatCfg = $.datepicker._getFormatConfig(inst), altFormattedDateTime = '', altSeparator = tp_inst._defaults.altSeparator ? tp_inst._defaults.altSeparator : tp_inst._defaults.separator, altTimeSuffix = tp_inst._defaults.altTimeSuffix ? tp_inst._defaults.altTimeSuffix : tp_inst._defaults.timeSuffix, altTimeFormat = tp_inst._defaults.altTimeFormat !== null ? tp_inst._defaults.altTimeFormat : tp_inst._defaults.timeFormat; altFormattedDateTime += $.datepicker.formatTime(altTimeFormat, tp_inst, tp_inst._defaults) + altTimeSuffix; if (!tp_inst._defaults.timeOnly && !tp_inst._defaults.altFieldTimeOnly && date !== null) {
					if (tp_inst._defaults.altFormat) { altFormattedDateTime = $.datepicker.formatDate(tp_inst._defaults.altFormat, date, formatCfg) + altSeparator + altFormattedDateTime; }
					else { altFormattedDateTime = tp_inst.formattedDate + altSeparator + altFormattedDateTime; }
				}
				$(altField).val(inst.input.val() ? altFormattedDateTime : "");
			}
		}
		else { $.datepicker._base_updateAlternate(inst); }
	}; $.datepicker._base_doKeyUp = $.datepicker._doKeyUp; $.datepicker._doKeyUp = function(event) {
		var inst = $.datepicker._getInst(event.target), tp_inst = $.datepicker._get(inst, 'timepicker'); if (tp_inst) { if (tp_inst._defaults.timeOnly && (inst.input.val() !== inst.lastVal)) { try { $.datepicker._updateDatepicker(inst); } catch (err) { $.timepicker.log(err); } } }
		return $.datepicker._base_doKeyUp(event);
	}; $.datepicker._base_gotoToday = $.datepicker._gotoToday; $.datepicker._gotoToday = function(id) { var inst = this._getInst($(id)[0]), $dp = inst.dpDiv; var tp_inst = this._get(inst, 'timepicker'); selectLocalTimezone(tp_inst); var now = new Date(); this._setTime(inst, now); this._setDate(inst, now); this._base_gotoToday(id); }; $.datepicker._disableTimepickerDatepicker = function(target) {
		var inst = this._getInst(target); if (!inst) { return; }
		var tp_inst = this._get(inst, 'timepicker'); $(target).datepicker('getDate'); if (tp_inst) { inst.settings.showTimepicker = false; tp_inst._defaults.showTimepicker = false; tp_inst._updateDateTime(inst); }
	}; $.datepicker._enableTimepickerDatepicker = function(target) {
		var inst = this._getInst(target); if (!inst) { return; }
		var tp_inst = this._get(inst, 'timepicker'); $(target).datepicker('getDate'); if (tp_inst) { inst.settings.showTimepicker = true; tp_inst._defaults.showTimepicker = true; tp_inst._addTimePicker(inst); tp_inst._updateDateTime(inst); }
	}; $.datepicker._setTime = function(inst, date) { var tp_inst = this._get(inst, 'timepicker'); if (tp_inst) { var defaults = tp_inst._defaults; tp_inst.hour = date ? date.getHours() : defaults.hour; tp_inst.minute = date ? date.getMinutes() : defaults.minute; tp_inst.second = date ? date.getSeconds() : defaults.second; tp_inst.millisec = date ? date.getMilliseconds() : defaults.millisec; tp_inst.microsec = date ? date.getMicroseconds() : defaults.microsec; tp_inst._limitMinMaxDateTime(inst, true); tp_inst._onTimeChange(); tp_inst._updateDateTime(inst); } }; $.datepicker._setTimeDatepicker = function(target, date, withDate) {
		var inst = this._getInst(target); if (!inst) { return; }
		var tp_inst = this._get(inst, 'timepicker'); if (tp_inst) {
			this._setDateFromField(inst); var tp_date; if (date) {
				if (typeof date === "string") { tp_inst._parseTime(date, withDate); tp_date = new Date(); tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec); tp_date.setMicroseconds(tp_inst.microsec); } else { tp_date = new Date(date.getTime()); tp_date.setMicroseconds(date.getMicroseconds()); }
				if (tp_date.toString() === 'Invalid Date') { tp_date = undefined; }
				this._setTime(inst, tp_date);
			}
		}
	}; $.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker; $.datepicker._setDateDatepicker = function(target, _date) {
		var inst = this._getInst(target); var date = _date; if (!inst) { return; }
		if (typeof (_date) === 'string') { date = new Date(_date); if (!date.getTime()) { this._base_setDateDatepicker.apply(this, arguments); date = $(target).datepicker('getDate'); } }
		var tp_inst = this._get(inst, 'timepicker'); var tp_date; if (date instanceof Date) { tp_date = new Date(date.getTime()); tp_date.setMicroseconds(date.getMicroseconds()); } else { tp_date = date; }
		if (tp_inst && tp_date) {
			if (!tp_inst.support.timezone && tp_inst._defaults.timezone === null) { tp_inst.timezone = tp_date.getTimezoneOffset() * -1; }
			date = $.timepicker.timezoneAdjust(date, tp_inst.timezone); tp_date = $.timepicker.timezoneAdjust(tp_date, tp_inst.timezone);
		}
		this._updateDatepicker(inst); this._base_setDateDatepicker.apply(this, arguments); this._setTimeDatepicker(target, tp_date, true);
	}; $.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker; $.datepicker._getDateDatepicker = function(target, noDefault) {
		var inst = this._getInst(target); if (!inst) { return; }
		var tp_inst = this._get(inst, 'timepicker'); if (tp_inst) {
			if (inst.lastVal === undefined) { this._setDateFromField(inst, noDefault); }
			var date = this._getDate(inst); var currDT = $.trim((tp_inst.$altInput && tp_inst._defaults.altFieldTimeOnly) ? tp_inst.$input.val() + ' ' + tp_inst.$altInput.val() : tp_inst.$input.val()); if (date && tp_inst._parseTime(currDT, !inst.settings.timeOnly)) {
				date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec); date.setMicroseconds(tp_inst.microsec); if (tp_inst.timezone != null) {
					if (!tp_inst.support.timezone && tp_inst._defaults.timezone === null) { tp_inst.timezone = date.getTimezoneOffset() * -1; }
					date = $.timepicker.timezoneAdjust(date, tp_inst.timezone);
				}
			}
			return date;
		}
		return this._base_getDateDatepicker(target, noDefault);
	}; $.datepicker._base_parseDate = $.datepicker.parseDate; $.datepicker.parseDate = function(format, value, settings) {
		var date; try { date = this._base_parseDate(format, value, settings); } catch (err) { if (err.indexOf(":") >= 0) { date = this._base_parseDate(format, value.substring(0, value.length - (err.length - err.indexOf(':') - 2)), settings); $.timepicker.log("Error parsing the date string: " + err + "\ndate string = " + value + "\ndate format = " + format); } else { throw err; } }
		return date;
	}; $.datepicker._base_formatDate = $.datepicker._formatDate; $.datepicker._formatDate = function(inst, day, month, year) {
		var tp_inst = this._get(inst, 'timepicker'); if (tp_inst) { tp_inst._updateDateTime(inst); return tp_inst.$input.val(); }
		return this._base_formatDate(inst);
	}; $.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker; $.datepicker._optionDatepicker = function(target, name, value) {
		var inst = this._getInst(target), name_clone; if (!inst) { return null; }
		var tp_inst = this._get(inst, 'timepicker'); if (tp_inst) {
			var min = null, max = null, onselect = null, overrides = tp_inst._defaults.evnts, fns = {}, prop, ret, oldVal, $target; if (typeof name === 'string') {
				if (name === 'minDate' || name === 'minDateTime') { min = value; } else if (name === 'maxDate' || name === 'maxDateTime') { max = value; } else if (name === 'onSelect') { onselect = value; } else if (overrides.hasOwnProperty(name)) {
					if (typeof (value) === 'undefined') { return overrides[name]; }
					fns[name] = value; name_clone = {};
				}
			} else if (typeof name === 'object') {
				if (name.minDate) { min = name.minDate; } else if (name.minDateTime) { min = name.minDateTime; } else if (name.maxDate) { max = name.maxDate; } else if (name.maxDateTime) { max = name.maxDateTime; }
				for (prop in overrides) { if (overrides.hasOwnProperty(prop) && name[prop]) { fns[prop] = name[prop]; } }
			}
			for (prop in fns) {
				if (fns.hasOwnProperty(prop)) {
					overrides[prop] = fns[prop]; if (!name_clone) { name_clone = $.extend({}, name); }
					delete name_clone[prop];
				}
			}
			if (name_clone && isEmptyObject(name_clone)) { return; }
			if (min) {
				if (min === 0) { min = new Date(); } else { min = new Date(min); }
				tp_inst._defaults.minDate = min; tp_inst._defaults.minDateTime = min;
			} else if (max) {
				if (max === 0) { max = new Date(); } else { max = new Date(max); }
				tp_inst._defaults.maxDate = max; tp_inst._defaults.maxDateTime = max;
			} else if (onselect) { tp_inst._defaults.onSelect = onselect; }
			if (min || max) { $target = $(target); oldVal = $target.datetimepicker('getDate'); ret = this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value); $target.datetimepicker('setDate', oldVal); return ret; }
		}
		if (value === undefined) { return this._base_optionDatepicker.call($.datepicker, target, name); }
		return this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value);
	}; var isEmptyObject = function(obj) {
		var prop; for (prop in obj) { if (obj.hasOwnProperty(prop)) { return false; } }
		return true;
	}; var extendRemove = function(target, props) {
		$.extend(target, props); for (var name in props) { if (props[name] === null || props[name] === undefined) { target[name] = props[name]; } }
		return target;
	}; var detectSupport = function(timeFormat) { var tf = timeFormat.replace(/'.*?'/g, '').toLowerCase(), isIn = function(f, t) { return f.indexOf(t) !== -1 ? true : false; }; return { hour: isIn(tf, 'h'), minute: isIn(tf, 'm'), second: isIn(tf, 's'), millisec: isIn(tf, 'l'), microsec: isIn(tf, 'c'), timezone: isIn(tf, 'z'), ampm: isIn(tf, 't') && isIn(timeFormat, 'h'), iso8601: isIn(timeFormat, 'Z') }; }; var convert24to12 = function(hour) {
		hour %= 12; if (hour === 0) { hour = 12; }
		return String(hour);
	}; var computeEffectiveSetting = function(settings, property) { return settings && settings[property] ? settings[property] : $.timepicker._defaults[property]; }; var splitDateTime = function(dateTimeString, timeSettings) {
		var separator = computeEffectiveSetting(timeSettings, 'separator'), format = computeEffectiveSetting(timeSettings, 'timeFormat'), timeParts = format.split(separator), timePartsLen = timeParts.length, allParts = dateTimeString.split(separator), allPartsLen = allParts.length; if (allPartsLen > 1) { return { dateString: allParts.splice(0, allPartsLen - timePartsLen).join(separator), timeString: allParts.splice(0, timePartsLen).join(separator) }; }
		return { dateString: dateTimeString, timeString: '' };
	}; var parseDateTimeInternal = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var date, parts, parsedTime; parts = splitDateTime(dateTimeString, timeSettings); date = $.datepicker._base_parseDate(dateFormat, parts.dateString, dateSettings); if (parts.timeString === '') { return { date: date }; }
		parsedTime = $.datepicker.parseTime(timeFormat, parts.timeString, timeSettings); if (!parsedTime) { throw 'Wrong time format'; }
		return { date: date, timeObj: parsedTime };
	}; var selectLocalTimezone = function(tp_inst, date) { if (tp_inst && tp_inst.timezone_select) { var now = date || new Date(); tp_inst.timezone_select.val(-now.getTimezoneOffset()); } }; $.timepicker = new Timepicker(); $.timepicker.timezoneOffsetString = function(tzMinutes, iso8601) {
		if (isNaN(tzMinutes) || tzMinutes > 840 || tzMinutes < -720) { return tzMinutes; }
		var off = tzMinutes, minutes = off % 60, hours = (off - minutes) / 60, iso = iso8601 ? ':' : '', tz = (off >= 0 ? '+' : '-') + ('0' + Math.abs(hours)).slice(-2) + iso + ('0' + Math.abs(minutes)).slice(-2); if (tz === '+00:00') { return 'Z'; }
		return tz;
	}; $.timepicker.timezoneOffsetNumber = function(tzString) {
		var normalized = tzString.toString().replace(':', ''); if (normalized.toUpperCase() === 'Z') { return 0; }
		if (!/^(\-|\+)\d{4}$/.test(normalized)) { return tzString; }
		return ((normalized.substr(0, 1) === '-' ? -1 : 1) * ((parseInt(normalized.substr(1, 2), 10) * 60) +
			parseInt(normalized.substr(3, 2), 10)));
	}; $.timepicker.timezoneAdjust = function(date, toTimezone) {
		var toTz = $.timepicker.timezoneOffsetNumber(toTimezone); if (!isNaN(toTz)) { date.setMinutes(date.getMinutes() + -date.getTimezoneOffset() - toTz); }
		return date;
	}; $.timepicker.timeRange = function(startTime, endTime, options) { return $.timepicker.handleRange('timepicker', startTime, endTime, options); }; $.timepicker.datetimeRange = function(startTime, endTime, options) { $.timepicker.handleRange('datetimepicker', startTime, endTime, options); }; $.timepicker.dateRange = function(startTime, endTime, options) { $.timepicker.handleRange('datepicker', startTime, endTime, options); }; $.timepicker.handleRange = function(method, startTime, endTime, options) {
		options = $.extend({}, { minInterval: 0, maxInterval: 0, start: {}, end: {} }, options); var timeOnly = false; if (method === 'timepicker') { timeOnly = true; method = 'datetimepicker'; }
		function checkDates(changed, other) {
			var startdt = startTime[method]('getDate'), enddt = endTime[method]('getDate'), changeddt = changed[method]('getDate'); if (startdt !== null) {
				var minDate = new Date(startdt.getTime()), maxDate = new Date(startdt.getTime()); minDate.setMilliseconds(minDate.getMilliseconds() + options.minInterval); maxDate.setMilliseconds(maxDate.getMilliseconds() + options.maxInterval); if (options.minInterval > 0 && minDate > enddt) { endTime[method]('setDate', minDate); }
				else if (options.maxInterval > 0 && maxDate < enddt) { endTime[method]('setDate', maxDate); }
				else if (startdt > enddt) { other[method]('setDate', changeddt); }
			}
		}
		function selected(changed, other, option) {
			if (!changed.val()) { return; }
			var date = changed[method].call(changed, 'getDate'); if (date !== null && options.minInterval > 0) {
				if (option === 'minDate') { date.setMilliseconds(date.getMilliseconds() + options.minInterval); }
				if (option === 'maxDate') { date.setMilliseconds(date.getMilliseconds() - options.minInterval); }
			}
			if (date.getTime) { other[method].call(other, 'option', option, date); }
		}
		$.fn[method].call(startTime, $.extend({ timeOnly: timeOnly, onClose: function(dateText, inst) { checkDates($(this), endTime); }, onSelect: function(selectedDateTime) { selected($(this), endTime, 'minDate'); } }, options, options.start)); $.fn[method].call(endTime, $.extend({ timeOnly: timeOnly, onClose: function(dateText, inst) { checkDates($(this), startTime); }, onSelect: function(selectedDateTime) { selected($(this), startTime, 'maxDate'); } }, options, options.end)); checkDates(startTime, endTime); selected(startTime, endTime, 'minDate'); selected(endTime, startTime, 'maxDate'); return $([startTime.get(0), endTime.get(0)]);
	}; $.timepicker.log = function() { if (window.console) { window.console.log.apply(window.console, Array.prototype.slice.call(arguments)); } }; $.timepicker._util = { _extendRemove: extendRemove, _isEmptyObject: isEmptyObject, _convert24to12: convert24to12, _detectSupport: detectSupport, _selectLocalTimezone: selectLocalTimezone, _computeEffectiveSetting: computeEffectiveSetting, _splitDateTime: splitDateTime, _parseDateTimeInternal: parseDateTimeInternal }; if (!Date.prototype.getMicroseconds) { Date.prototype.microseconds = 0; Date.prototype.getMicroseconds = function() { return this.microseconds; }; Date.prototype.setMicroseconds = function(m) { this.setMilliseconds(this.getMilliseconds() + Math.floor(m / 1000)); this.microseconds = m % 1000; return this; }; }
	$.timepicker.version = "1.5.3";
}));
/* /_res/jquery/plugin/jquery.transit.min.js */
(function(t, e) { if (typeof define === "function" && define.amd) { define(["jquery"], e) } else if (typeof exports === "object") { module.exports = e(require("jquery")) } else { e(t.jQuery) } })(this, function(t) { t.transit = { version: "0.9.12", propertyMap: { marginLeft: "margin", marginRight: "margin", marginBottom: "margin", marginTop: "margin", paddingLeft: "padding", paddingRight: "padding", paddingBottom: "padding", paddingTop: "padding" }, enabled: true, useTransitionEnd: false }; var e = document.createElement("div"); var n = {}; function i(t) { if (t in e.style) return t; var n = ["Moz", "Webkit", "O", "ms"]; var i = t.charAt(0).toUpperCase() + t.substr(1); for (var r = 0; r < n.length; ++r) { var s = n[r] + i; if (s in e.style) { return s } } } function r() { e.style[n.transform] = ""; e.style[n.transform] = "rotateY(90deg)"; return e.style[n.transform] !== "" } var s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1; n.transition = i("transition"); n.transitionDelay = i("transitionDelay"); n.transform = i("transform"); n.transformOrigin = i("transformOrigin"); n.filter = i("Filter"); n.transform3d = r(); var a = { transition: "transitionend", MozTransition: "transitionend", OTransition: "oTransitionEnd", WebkitTransition: "webkitTransitionEnd", msTransition: "MSTransitionEnd" }; var o = n.transitionEnd = a[n.transition] || null; for (var u in n) { if (n.hasOwnProperty(u) && typeof t.support[u] === "undefined") { t.support[u] = n[u] } } e = null; t.cssEase = { _default: "ease", "in": "ease-in", out: "ease-out", "in-out": "ease-in-out", snap: "cubic-bezier(0,1,.5,1)", easeInCubic: "cubic-bezier(.550,.055,.675,.190)", easeOutCubic: "cubic-bezier(.215,.61,.355,1)", easeInOutCubic: "cubic-bezier(.645,.045,.355,1)", easeInCirc: "cubic-bezier(.6,.04,.98,.335)", easeOutCirc: "cubic-bezier(.075,.82,.165,1)", easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)", easeInExpo: "cubic-bezier(.95,.05,.795,.035)", easeOutExpo: "cubic-bezier(.19,1,.22,1)", easeInOutExpo: "cubic-bezier(1,0,0,1)", easeInQuad: "cubic-bezier(.55,.085,.68,.53)", easeOutQuad: "cubic-bezier(.25,.46,.45,.94)", easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)", easeInQuart: "cubic-bezier(.895,.03,.685,.22)", easeOutQuart: "cubic-bezier(.165,.84,.44,1)", easeInOutQuart: "cubic-bezier(.77,0,.175,1)", easeInQuint: "cubic-bezier(.755,.05,.855,.06)", easeOutQuint: "cubic-bezier(.23,1,.32,1)", easeInOutQuint: "cubic-bezier(.86,0,.07,1)", easeInSine: "cubic-bezier(.47,0,.745,.715)", easeOutSine: "cubic-bezier(.39,.575,.565,1)", easeInOutSine: "cubic-bezier(.445,.05,.55,.95)", easeInBack: "cubic-bezier(.6,-.28,.735,.045)", easeOutBack: "cubic-bezier(.175, .885,.32,1.275)", easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)" }; t.cssHooks["transit:transform"] = { get: function(e) { return t(e).data("transform") || new f }, set: function(e, i) { var r = i; if (!(r instanceof f)) { r = new f(r) } if (n.transform === "WebkitTransform" && !s) { e.style[n.transform] = r.toString(true) } else { e.style[n.transform] = r.toString() } t(e).data("transform", r) } }; t.cssHooks.transform = { set: t.cssHooks["transit:transform"].set }; t.cssHooks.filter = { get: function(t) { return t.style[n.filter] }, set: function(t, e) { t.style[n.filter] = e } }; if (t.fn.jquery < "1.8") { t.cssHooks.transformOrigin = { get: function(t) { return t.style[n.transformOrigin] }, set: function(t, e) { t.style[n.transformOrigin] = e } }; t.cssHooks.transition = { get: function(t) { return t.style[n.transition] }, set: function(t, e) { t.style[n.transition] = e } } } p("scale"); p("scaleX"); p("scaleY"); p("translate"); p("rotate"); p("rotateX"); p("rotateY"); p("rotate3d"); p("perspective"); p("skewX"); p("skewY"); p("x", true); p("y", true); function f(t) { if (typeof t === "string") { this.parse(t) } return this } f.prototype = { setFromString: function(t, e) { var n = typeof e === "string" ? e.split(",") : e.constructor === Array ? e : [e]; n.unshift(t); f.prototype.set.apply(this, n) }, set: function(t) { var e = Array.prototype.slice.apply(arguments, [1]); if (this.setter[t]) { this.setter[t].apply(this, e) } else { this[t] = e.join(",") } }, get: function(t) { if (this.getter[t]) { return this.getter[t].apply(this) } else { return this[t] || 0 } }, setter: { rotate: function(t) { this.rotate = b(t, "deg") }, rotateX: function(t) { this.rotateX = b(t, "deg") }, rotateY: function(t) { this.rotateY = b(t, "deg") }, scale: function(t, e) { if (e === undefined) { e = t } this.scale = t + "," + e }, skewX: function(t) { this.skewX = b(t, "deg") }, skewY: function(t) { this.skewY = b(t, "deg") }, perspective: function(t) { this.perspective = b(t, "px") }, x: function(t) { this.set("translate", t, null) }, y: function(t) { this.set("translate", null, t) }, translate: function(t, e) { if (this._translateX === undefined) { this._translateX = 0 } if (this._translateY === undefined) { this._translateY = 0 } if (t !== null && t !== undefined) { this._translateX = b(t, "px") } if (e !== null && e !== undefined) { this._translateY = b(e, "px") } this.translate = this._translateX + "," + this._translateY } }, getter: { x: function() { return this._translateX || 0 }, y: function() { return this._translateY || 0 }, scale: function() { var t = (this.scale || "1,1").split(","); if (t[0]) { t[0] = parseFloat(t[0]) } if (t[1]) { t[1] = parseFloat(t[1]) } return t[0] === t[1] ? t[0] : t }, rotate3d: function() { var t = (this.rotate3d || "0,0,0,0deg").split(","); for (var e = 0; e <= 3; ++e) { if (t[e]) { t[e] = parseFloat(t[e]) } } if (t[3]) { t[3] = b(t[3], "deg") } return t } }, parse: function(t) { var e = this; t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(t, n, i) { e.setFromString(n, i) }) }, toString: function(t) { var e = []; for (var i in this) { if (this.hasOwnProperty(i)) { if (!n.transform3d && (i === "rotateX" || i === "rotateY" || i === "perspective" || i === "transformOrigin")) { continue } if (i[0] !== "_") { if (t && i === "scale") { e.push(i + "3d(" + this[i] + ",1)") } else if (t && i === "translate") { e.push(i + "3d(" + this[i] + ",0)") } else { e.push(i + "(" + this[i] + ")") } } } } return e.join(" ") } }; function c(t, e, n) { if (e === true) { t.queue(n) } else if (e) { t.queue(e, n) } else { t.each(function() { n.call(this) }) } } function l(e) { var i = []; t.each(e, function(e) { e = t.camelCase(e); e = t.transit.propertyMap[e] || t.cssProps[e] || e; e = h(e); if (n[e]) e = h(n[e]); if (t.inArray(e, i) === -1) { i.push(e) } }); return i } function d(e, n, i, r) { var s = l(e); if (t.cssEase[i]) { i = t.cssEase[i] } var a = "" + y(n) + " " + i; if (parseInt(r, 10) > 0) { a += " " + y(r) } var o = []; t.each(s, function(t, e) { o.push(e + " " + a) }); return o.join(", ") } t.fn.transition = t.fn.transit = function(e, i, r, s) { var a = this; var u = 0; var f = true; var l = t.extend(true, {}, e); if (typeof i === "function") { s = i; i = undefined } if (typeof i === "object") { r = i.easing; u = i.delay || 0; f = typeof i.queue === "undefined" ? true : i.queue; s = i.complete; i = i.duration } if (typeof r === "function") { s = r; r = undefined } if (typeof l.easing !== "undefined") { r = l.easing; delete l.easing } if (typeof l.duration !== "undefined") { i = l.duration; delete l.duration } if (typeof l.complete !== "undefined") { s = l.complete; delete l.complete } if (typeof l.queue !== "undefined") { f = l.queue; delete l.queue } if (typeof l.delay !== "undefined") { u = l.delay; delete l.delay } if (typeof i === "undefined") { i = t.fx.speeds._default } if (typeof r === "undefined") { r = t.cssEase._default } i = y(i); var p = d(l, i, r, u); var h = t.transit.enabled && n.transition; var b = h ? parseInt(i, 10) + parseInt(u, 10) : 0; if (b === 0) { var g = function(t) { a.css(l); if (s) { s.apply(a) } if (t) { t() } }; c(a, f, g); return a } var m = {}; var v = function(e) { var i = false; var r = function() { if (i) { a.unbind(o, r) } if (b > 0) { a.each(function() { this.style[n.transition] = m[this] || null }) } if (typeof s === "function") { s.apply(a) } if (typeof e === "function") { e() } }; if (b > 0 && o && t.transit.useTransitionEnd) { i = true; a.bind(o, r) } else { window.setTimeout(r, b) } a.each(function() { if (b > 0) { this.style[n.transition] = p } t(this).css(l) }) }; var z = function(t) { this.offsetWidth; v(t) }; c(a, f, z); return this }; function p(e, i) { if (!i) { t.cssNumber[e] = true } t.transit.propertyMap[e] = n.transform; t.cssHooks[e] = { get: function(n) { var i = t(n).css("transit:transform"); return i.get(e) }, set: function(n, i) { var r = t(n).css("transit:transform"); r.setFromString(e, i); t(n).css({ "transit:transform": r }) } } } function h(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) } function b(t, e) { if (typeof t === "string" && !t.match(/^[\-0-9\.]+$/)) { return t } else { return "" + t + e } } function y(e) { var n = e; if (typeof n === "string" && !n.match(/^[\-0-9\.]+/)) { n = t.fx.speeds[n] || t.fx.speeds._default } return b(n, "ms") } t.transit.getTransitionValue = d; return t });
/* /_res/jquery/plugin/jquery.nestedSortable.1.8.min.js */
(function(a) { a.widget("mjs.nestedSortable", a.extend({}, a.ui.sortable.prototype, { options: { tabSize: 20, disableNesting: "mjs-nestedSortable-no-nesting", errorClass: "mjs-nestedSortable-error", doNotClear: !1, listType: "ol", maxLevels: 0, protectRoot: !1, rootID: null, rtl: !1, isAllowed: function(a, b) { return !0 } }, _create: function() { this.element.data("sortable", this.element.data("nestedSortable")); if (!this.element.is(this.options.listType)) throw Error("nestedSortable: Please check the listType option is set to your actual list type"); return a.ui.sortable.prototype._create.apply(this, arguments) }, destroy: function() { this.element.removeData("nestedSortable").unbind(".nestedSortable"); return a.ui.sortable.prototype.destroy.apply(this, arguments) }, _mouseDrag: function(c) { this.position = this._generatePosition(c); this.positionAbs = this._convertPositionTo("absolute"); this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs); var b = this.options; if (this.options.scroll) { var d = !1; this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - c.pageY < b.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + b.scrollSpeed : c.pageY - this.overflowOffset.top < b.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - b.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - c.pageX < b.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + b.scrollSpeed : c.pageX - this.overflowOffset.left < b.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - b.scrollSpeed)) : (c.pageY - a(document).scrollTop() < b.scrollSensitivity ? d = a(document).scrollTop(a(document).scrollTop() - b.scrollSpeed) : a(window).height() - (c.pageY - a(document).scrollTop()) < b.scrollSensitivity && (d = a(document).scrollTop(a(document).scrollTop() + b.scrollSpeed)), c.pageX - a(document).scrollLeft() < b.scrollSensitivity ? d = a(document).scrollLeft(a(document).scrollLeft() - b.scrollSpeed) : a(window).width() - (c.pageX - a(document).scrollLeft()) < b.scrollSensitivity && (d = a(document).scrollLeft(a(document).scrollLeft() + b.scrollSpeed))); !1 !== d && a.ui.ddmanager && !b.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, c) } this.positionAbs = this._convertPositionTo("absolute"); d = this.placeholder.offset().top; this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"); this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"); for (var e = this.items.length - 1; 0 <= e; e--) { var f = this.items[e], g = f.item[0], h = this._intersectsWithPointer(f); if (h && g != this.currentItem[0] && this.placeholder[1 == h ? "next" : "prev"]()[0] != g && !a.contains(this.placeholder[0], g) && ("semi-dynamic" == this.options.type ? !a.contains(this.element[0], g) : 1)) { a(g).mouseenter(); this.direction = 1 == h ? "down" : "up"; if ("pointer" == this.options.tolerance || this._intersectsWithSides(f)) a(g).mouseleave(), this._rearrange(c, f); else break; this._clearEmpty(g); this._trigger("change", c, this._uiHash()); break } } e = this.placeholder[0].parentNode.parentNode && a(this.placeholder[0].parentNode.parentNode).closest(".ui-sortable").length ? a(this.placeholder[0].parentNode.parentNode) : null; f = this._getLevel(this.placeholder); g = this._getChildLevels(this.helper); h = this.placeholder[0].previousSibling ? a(this.placeholder[0].previousSibling) : null; if (null != h) for (; "li" != h[0].nodeName.toLowerCase() || h[0] == this.currentItem[0] || h[0] == this.helper[0];)if (h[0].previousSibling) h = a(h[0].previousSibling); else { h = null; break } var k = this.placeholder[0].nextSibling ? a(this.placeholder[0].nextSibling) : null; if (null != k) for (; "li" != k[0].nodeName.toLowerCase() || k[0] == this.currentItem[0] || k[0] == this.helper[0];)if (k[0].nextSibling) k = a(k[0].nextSibling); else { k = null; break } var l = document.createElement(b.listType); this.beyondMaxLevels = 0; null != e && null == k && (b.rtl && this.positionAbs.left + this.helper.outerWidth() > e.offset().left + e.outerWidth() || !b.rtl && this.positionAbs.left < e.offset().left) ? (e.after(this.placeholder[0]), this._clearEmpty(e[0]), this._trigger("change", c, this._uiHash())) : null != h && (b.rtl && this.positionAbs.left + this.helper.outerWidth() < h.offset().left + h.outerWidth() - b.tabSize || !b.rtl && this.positionAbs.left > h.offset().left + b.tabSize) ? (this._isAllowed(h, f, f + g + 1), h.children(b.listType).length || h[0].appendChild(l), d && d <= h.offset().top ? h.children(b.listType).prepend(this.placeholder) : h.children(b.listType)[0].appendChild(this.placeholder[0]), this._trigger("change", c, this._uiHash())) : this._isAllowed(e, f, f + g); this._contactContainers(c); a.ui.ddmanager && a.ui.ddmanager.drag(this, c); this._trigger("sort", c, this._uiHash()); this.lastPositionAbs = this.positionAbs; return !1 }, _mouseStop: function(c, b) { this.beyondMaxLevels && (this.placeholder.removeClass(this.options.errorClass), this.domPosition.prev ? a(this.domPosition.prev).after(this.placeholder) : a(this.domPosition.parent).prepend(this.placeholder), this._trigger("revert", c, this._uiHash())); for (var d = this.items.length - 1; 0 <= d; d--)this._clearEmpty(this.items[d].item[0]); this._trigger("complate", c, this._uiHash()); a.ui.sortable.prototype._mouseStop.apply(this, arguments) }, serialize: function(c) { var b = a.extend({}, this.options, c); c = this._getItemsAsjQuery(b && b.connected); var d = []; a(c).each(function() { var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[-=_](.+)/), f = (a(b.item || this).parent(b.listType).parent(b.items).attr(b.attribute || "id") || "").match(b.expression || /(.+)[-=_](.+)/); c && d.push((b.key || c[1]) + "[" + (b.key && b.expression ? c[1] : c[2]) + "]=" + (f ? b.key && b.expression ? f[1] : f[2] : b.rootID)) }); !d.length && b.key && d.push(b.key + "="); return d.join("&") }, toHierarchy: function(c) { function b(c) { var e = (a(c).attr(d.attribute || "id") || "").match(d.expression || /(.+)[-=_](.+)/); if (e) { var h = { id: e[2] }; 0 < a(c).children(d.listType).children(d.items).length && (h.children = [], a(c).children(d.listType).children(d.items).each(function() { var a = b(this); h.children.push(a) })); return h } } var d = a.extend({}, this.options, c), e = []; a(this.element).children(d.items).each(function() { var a = b(this); e.push(a) }); return e }, toArray: function(c) { function b(c, g, l) { var m = l + 1, n; 0 < a(c).children(d.listType).children(d.items).length && (g++, a(c).children(d.listType).children(d.items).each(function() { m = b(a(this), g, m) }), g--); n = a(c).attr(d.attribute || "id").match(d.expression || /(.+)[-=_](.+)/); c = g === e + 1 ? d.rootID : a(c).parent(d.listType).parent(d.items).attr(d.attribute || "id").match(d.expression || /(.+)[-=_](.+)/)[2]; n && f.push({ item_id: n[2], parent_id: c, depth: g, left: l, right: m }); return m + 1 } var d = a.extend({}, this.options, c), e = d.startDepthCount || 0, f = [], g = 2; f.push({ item_id: d.rootID, parent_id: "none", depth: e, left: "1", right: 2 * (a(d.items, this.element).length + 1) }); a(this.element).children(d.items).each(function() { g = b(this, e + 1, g) }); return f = f.sort(function(a, c) { return a.left - c.left }) }, _clearEmpty: function(c) { c = a(c).children(this.options.listType); !c.length || c.children().length || this.options.doNotClear || c.remove() }, _getLevel: function(a) { var b = 1; if (this.options.listType) for (a = a.closest(this.options.listType); a && 0 < a.length && !a.is(".ui-sortable");)b++, a = a.parent().closest(this.options.listType); return b }, _getChildLevels: function(c, b) { var d = this, e = this.options, f = 0; b = b || 0; a(c).children(e.listType).children(e.items).each(function(a, c) { f = Math.max(d._getChildLevels(c, b + 1), f) }); return b ? f + 1 : f }, _isAllowed: function(c, b, d) { var e = this.options, f = a(this.domPosition.parent).hasClass("ui-sortable") ? !0 : !1, g = this.placeholder.closest(".ui-sortable").nestedSortable("option", "maxLevels"); !e.isAllowed(this.currentItem, c) || c && c.hasClass(e.disableNesting) || e.protectRoot && (null == c && !f || f && 1 < b) ? (this.placeholder.addClass(e.errorClass), this.beyondMaxLevels = g < d && 0 != g ? d - g : 1) : g < d && 0 != g ? (this.placeholder.addClass(e.errorClass), this.beyondMaxLevels = d - g) : (this.placeholder.removeClass(e.errorClass), this.beyondMaxLevels = 0) } })); a.mjs.nestedSortable.prototype.options = a.extend({}, a.ui.sortable.prototype.options, a.mjs.nestedSortable.prototype.options) })(jQuery);
/* /_res/jquery/plugin/jquery.flip.1.1.1.min.js */
!function(a) { var b = function() { var a, b = document.createElement("fakeelement"), c = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" }; for (a in c) if (void 0 !== b.style[a]) return c[a] }, c = function(b, c, d) { this.setting = { axis: "y", reverse: !1, trigger: "click", speed: 500, forceHeight: !1, forceWidth: !1, autoSize: !0, front: ".front", back: ".back" }, this.setting = a.extend(this.setting, c), "string" != typeof c.axis || "x" !== c.axis.toLowerCase() && "y" !== c.axis.toLowerCase() || (this.setting.axis = c.axis.toLowerCase()), "boolean" == typeof c.reverse && (this.setting.reverse = c.reverse), "string" == typeof c.trigger && (this.setting.trigger = c.trigger.toLowerCase()); var e = parseInt(c.speed); isNaN(e) || (this.setting.speed = e), "boolean" == typeof c.forceHeight && (this.setting.forceHeight = c.forceHeight), "boolean" == typeof c.forceWidth && (this.setting.forceWidth = c.forceWidth), "boolean" == typeof c.autoSize && (this.setting.autoSize = c.autoSize), ("string" == typeof c.front || c.front instanceof a) && (this.setting.front = c.front), ("string" == typeof c.back || c.back instanceof a) && (this.setting.back = c.back), this.element = b, this.frontElement = this.getFrontElement(), this.backElement = this.getBackElement(), this.isFlipped = !1, this.init(d) }; a.extend(c.prototype, { flipDone: function(a) { var c = this; c.element.one(b(), function() { c.element.trigger("flip:done"), "function" == typeof a && a.call(c.element) }) }, flip: function(a) { if (!this.isFlipped) { this.isFlipped = !0; var b = "rotate" + this.setting.axis; this.frontElement.css({ transform: b + (this.setting.reverse ? "(-180deg)" : "(180deg)"), "z-index": "0" }), this.backElement.css({ transform: b + "(0deg)", "z-index": "1" }), this.flipDone(a) } }, unflip: function(a) { if (this.isFlipped) { this.isFlipped = !1; var b = "rotate" + this.setting.axis; this.frontElement.css({ transform: b + "(0deg)", "z-index": "1" }), this.backElement.css({ transform: b + (this.setting.reverse ? "(180deg)" : "(-180deg)"), "z-index": "0" }), this.flipDone(a) } }, getFrontElement: function() { return this.setting.front instanceof a ? this.setting.front : this.element.find(this.setting.front) }, getBackElement: function() { return this.setting.back instanceof a ? this.setting.back : this.element.find(this.setting.back) }, init: function(a) { var b = this, c = b.frontElement.add(b.backElement), d = "rotate" + b.setting.axis, e = 2 * b.element["outer" + ("rotatex" === d ? "Height" : "Width")](), f = { perspective: e, position: "relative" }, g = { transform: d + "(" + (b.setting.reverse ? "180deg" : "-180deg") + ")", "z-index": "0" }, h = { "backface-visibility": "hidden", "transform-style": "preserve-3d", position: "absolute", "z-index": "1" }; b.setting.forceHeight ? c.outerHeight(b.element.height()) : b.setting.autoSize && (h.height = "100%"), b.setting.forceWidth ? c.outerWidth(b.element.width()) : b.setting.autoSize && (h.width = "100%"), (window.chrome || window.Intl && Intl.v8BreakIterator) && "CSS" in window && (f["-webkit-transform-style"] = "preserve-3d"), b.element.css(f), b.backElement.css(g), c.css(h).find("*").css({ "backface-visibility": "hidden" }), setTimeout(function() { var d = b.setting.speed / 1e3 || .5; c.css({ transition: "all " + d + "s ease-out" }), "function" == typeof a && a.call(b.element) }, 20), b.attachEvents() }, clickHandler: function(b) { b || (b = window.event), this.element.find(a(b.target).closest('button, a, input[type="submit"]')).length || (this.isFlipped ? this.unflip() : this.flip()) }, hoverHandler: function() { var b = this; b.element.off("mouseleave.flip"), b.flip(), setTimeout(function() { b.element.on("mouseleave.flip", a.proxy(b.unflip, b)), b.element.is(":hover") || b.unflip() }, b.setting.speed + 150) }, attachEvents: function() { var b = this; "click" === b.setting.trigger ? b.element.on(a.fn.tap ? "tap.flip" : "click.flip", a.proxy(b.clickHandler, b)) : "hover" === b.setting.trigger && (b.element.on("mouseenter.flip", a.proxy(b.hoverHandler, b)), b.element.on("mouseleave.flip", a.proxy(b.unflip, b))) }, flipChanged: function(a) { this.element.trigger("flip:change"), "function" == typeof a && a.call(this.element) }, changeSettings: function(a, b) { var c = this, d = !1; if (void 0 !== a.axis && c.setting.axis !== a.axis.toLowerCase() && (c.setting.axis = a.axis.toLowerCase(), d = !0), void 0 !== a.reverse && c.setting.reverse !== a.reverse && (c.setting.reverse = a.reverse, d = !0), d) { var e = c.frontElement.add(c.backElement), f = e.css(["transition-property", "transition-timing-function", "transition-duration", "transition-delay"]); e.css({ transition: "none" }); var g = "rotate" + c.setting.axis; c.isFlipped ? c.frontElement.css({ transform: g + (c.setting.reverse ? "(-180deg)" : "(180deg)"), "z-index": "0" }) : c.backElement.css({ transform: g + (c.setting.reverse ? "(180deg)" : "(-180deg)"), "z-index": "0" }), setTimeout(function() { e.css(f), c.flipChanged(b) }, 0) } else c.flipChanged(b) } }), a.fn.flip = function(b, d) { return "function" == typeof b && (d = b), "string" == typeof b || "boolean" == typeof b ? this.each(function() { var c = a(this).data("flip-model"); "toggle" === b && (b = !c.isFlipped), b ? c.flip(d) : c.unflip(d) }) : this.each(function() { if (a(this).data("flip-model")) { var e = a(this).data("flip-model"); !b || void 0 === b.axis && void 0 === b.reverse || e.changeSettings(b, d) } else a(this).data("flip-model", new c(a(this), b || {}, d)) }), this } }(jQuery);
/* /_res/jquery/plugin/jquery.bg.pos.min.js */
(function($) { var g = !!$.Tween; if (g) { $.Tween.propHooks['backgroundPosition'] = { get: function(a) { return parseBackgroundPosition($(a.elem).css(a.prop)) }, set: setBackgroundPosition } } else { $.fx.step['backgroundPosition'] = setBackgroundPosition }; function parseBackgroundPosition(c) { var d = (c || '').split(/ /); var e = { center: '50%', left: '0%', right: '100%', top: '0%', bottom: '100%' }; var f = function(a) { var b = (e[d[a]] || d[a] || '50%').match(/^([+-]=)?([+-]?\d+(\.\d*)?)(.*)$/); d[a] = [b[1], parseFloat(b[2]), b[4] || 'px'] }; if (d.length == 1 && $.inArray(d[0], ['top', 'bottom']) > -1) { d[1] = d[0]; d[0] = '50%' } f(0); f(1); return d } function setBackgroundPosition(a) { if (!a.set) { initBackgroundPosition(a) } $(a.elem).css('background-position', ((a.pos * (a.end[0][1] - a.start[0][1]) + a.start[0][1]) + a.end[0][2]) + ' ' + ((a.pos * (a.end[1][1] - a.start[1][1]) + a.start[1][1]) + a.end[1][2])) } function initBackgroundPosition(a) { a.start = parseBackgroundPosition($(a.elem).css('backgroundPosition')); a.end = parseBackgroundPosition(a.end); for (var i = 0; i < a.end.length; i++) { if (a.end[i][0]) { a.end[i][1] = a.start[i][1] + (a.end[i][0] == '-=' ? -1 : +1) * a.end[i][1] } } a.set = true } })(jQuery);
/* /_res/jquery/plugin/jquery.colResizable.1.6.min.js */
!function(t) { var e, i = t(document), r = t("head"), o = null, s = {}, d = 0, n = "id", a = "px", l = "JColResizer", c = "JCLRFlex", f = parseInt, h = Math, p = navigator.userAgent.indexOf("Trident/4.0") > 0; try { e = sessionStorage } catch (g) { } r.append("<style type='text/css'>  .JColResizer{table-layout:fixed;} .JColResizer > tbody > tr > td, .JColResizer > tbody > tr > th{overflow:hidden}  .JCLRgrips{ height:0px; position:relative;} .JCLRgrip{margin-left:-5px; position:absolute; z-index:5; } .JCLRgrip .JColResizer{position:absolute;background-color:red;filter:alpha(opacity=1);opacity:0;width:10px;height:100%;cursor: col-resize;top:0px} .JCLRLastGrip{position:absolute; width:1px; } .JCLRgripDrag{ border-left:1px dotted black; } .JCLRFlex{width:auto!important;} .JCLRgrip.JCLRdisabledGrip .JColResizer{cursor:default; display:none;}</style>"); var u = function(e, i) { var o = t(e); if (o.opt = i, o.mode = i.resizeMode, o.dc = o.opt.disabledColumns, o.opt.disable) return w(o); var a = o.id = o.attr(n) || l + d++; o.p = o.opt.postbackSafe, !o.is("table") || s[a] && !o.opt.partialRefresh || ("col-resize" !== o.opt.hoverCursor && r.append("<style type='text/css'>.JCLRgrip .JColResizer:hover{cursor:" + o.opt.hoverCursor + "!important}</style>"), o.addClass(l).attr(n, a).before('<div class="JCLRgrips"/>'), o.g = [], o.c = [], o.w = o.width(), o.gc = o.prev(), o.f = o.opt.fixed, i.marginLeft && o.gc.css("marginLeft", i.marginLeft), i.marginRight && o.gc.css("marginRight", i.marginRight), o.cs = f(p ? e.cellSpacing || e.currentStyle.borderSpacing : o.css("border-spacing")) || 2, o.b = f(p ? e.border || e.currentStyle.borderLeftWidth : o.css("border-left-width")) || 1, s[a] = o, v(o)) }, w = function(t) { var e = t.attr(n), t = s[e]; t && t.is("table") && (t.removeClass(l + " " + c).gc.remove(), delete s[e]) }, v = function(i) { var r = i.find(">thead>tr:first>th,>thead>tr:first>td"); r.length || (r = i.find(">tbody>tr:first>th,>tr:first>th,>tbody>tr:first>td, >tr:first>td")), r = r.filter(":visible"), i.cg = i.find("col"), i.ln = r.length, i.p && e && e[i.id] && m(i, r), r.each(function(e) { var r = t(this), o = -1 != i.dc.indexOf(e), s = t(i.gc.append('<div class="JCLRgrip"></div>')[0].lastChild); s.append(o ? "" : i.opt.gripInnerHtml).append('<div class="' + l + '"></div>'), e == i.ln - 1 && (s.addClass("JCLRLastGrip"), i.f && s.html("")), s.bind("touchstart mousedown", J), o ? s.addClass("JCLRdisabledGrip") : s.removeClass("JCLRdisabledGrip").bind("touchstart mousedown", J), s.t = i, s.i = e, s.c = r, r.w = r.width(), i.g.push(s), i.c.push(r), r.width(r.w).removeAttr("width"), s.data(l, { i: e, t: i.attr(n), last: e == i.ln - 1 }) }), i.cg.removeAttr("width"), i.find("td, th").not(r).not("table th, table td").each(function() { t(this).removeAttr("width") }), i.f || i.removeAttr("width").addClass(c), C(i) }, m = function(t, i) { var r, o, s = 0, d = 0, n = []; if (i) { if (t.cg.removeAttr("width"), t.opt.flush) return void (e[t.id] = ""); for (r = e[t.id].split(";"), o = r[t.ln + 1], !t.f && o && (t.width(o *= 1), t.opt.overflow && (t.css("min-width", o + a), t.w = o)); d < t.ln; d++)n.push(100 * r[d] / r[t.ln] + "%"), i.eq(d).css("width", n[d]); for (d = 0; d < t.ln; d++)t.cg.eq(d).css("width", n[d]) } else { for (e[t.id] = ""; d < t.c.length; d++)r = t.c[d].width(), e[t.id] += r + ";", s += r; e[t.id] += s, t.f || (e[t.id] += ";" + t.width()) } }, C = function(t) { t.gc.width(t.w); for (var e = 0; e < t.ln; e++) { var i = t.c[e]; t.g[e].css({ left: i.offset().left - t.offset().left + i.outerWidth(!1) + t.cs / 2 + a, height: t.opt.headerOnly ? t.c[0].outerHeight(!1) : t.outerHeight(!1) }) } }, b = function(t, e, i) { var r = o.x - o.l, s = t.c[e], d = t.c[e + 1], n = s.w + r, l = d.w - r; s.width(n + a), t.cg.eq(e).width(n + a), t.f ? (d.width(l + a), t.cg.eq(e + 1).width(l + a)) : t.opt.overflow && t.css("min-width", t.w + r), i && (s.w = n, d.w = t.f ? l : d.w) }, R = function(e) { var i = t.map(e.c, function(t) { return t.width() }); e.width(e.w = e.width()).removeClass(c), t.each(e.c, function(t, e) { e.width(i[t]).w = i[t] }), e.addClass(c) }, x = function(t) { if (o) { var e = o.t, i = t.originalEvent.touches, r = i ? i[0].pageX : t.pageX, s = r - o.ox + o.l, d = e.opt.minWidth, n = o.i, l = 1.5 * e.cs + d + e.b, c = n == e.ln - 1, f = n ? e.g[n - 1].position().left + e.cs + d : l, p = e.f ? n == e.ln - 1 ? e.w - l : e.g[n + 1].position().left - e.cs - d : 1 / 0; if (s = h.max(f, h.min(p, s)), o.x = s, o.css("left", s + a), c) { var g = e.c[o.i]; o.w = g.w + s - o.l } if (e.opt.liveDrag) { c ? (g.width(o.w), !e.f && e.opt.overflow ? e.css("min-width", e.w + s - o.l) : e.w = e.width()) : b(e, n), C(e); var u = e.opt.onDrag; u && (t.currentTarget = e[0], u(t)) } return !1 } }, y = function(r) { if (i.unbind("touchend." + l + " mouseup." + l).unbind("touchmove." + l + " mousemove." + l), t("head :last-child").remove(), o) { if (o.removeClass(o.t.opt.draggingClass), o.x - o.l != 0) { var s = o.t, d = s.opt.onResize, n = o.i, a = n == s.ln - 1, c = s.g[n].c; a ? (c.width(o.w), c.w = o.w) : b(s, n, !0), s.f || R(s), C(s), d && (r.currentTarget = s[0], d(r)), s.p && e && m(s) } o = null } }, J = function(e) { var d = t(this).data(l), n = s[d.t], a = n.g[d.i], c = e.originalEvent.touches; if (a.ox = c ? c[0].pageX : e.pageX, a.l = a.position().left, a.x = a.l, i.bind("touchmove." + l + " mousemove." + l, x).bind("touchend." + l + " mouseup." + l, y), r.append("<style type='text/css'>*{cursor:" + n.opt.dragCursor + "!important}</style>"), a.addClass(n.opt.draggingClass), o = a, n.c[d.i].l) for (var f, h = 0; h < n.ln; h++)f = n.c[h], f.l = !1, f.w = f.width(); return !1 }, L = function() { for (var t in s) if (s.hasOwnProperty(t)) { t = s[t]; var i, r = 0; if (t.removeClass(l), t.f) { for (t.w = t.width(), i = 0; i < t.ln; i++)r += t.c[i].w; for (i = 0; i < t.ln; i++)t.c[i].css("width", h.round(1e3 * t.c[i].w / r) / 10 + "%").l = !0 } else R(t), "flex" == t.mode && t.p && e && m(t); C(t.addClass(l)) } }; t(window).bind("resize." + l, L), t.fn.extend({ colResizable: function(e) { var i = { resizeMode: "fit", draggingClass: "JCLRgripDrag", gripInnerHtml: "", liveDrag: !1, minWidth: 15, headerOnly: !1, hoverCursor: "col-resize", dragCursor: "col-resize", postbackSafe: !1, flush: !1, marginLeft: null, marginRight: null, disable: !1, partialRefresh: !1, disabledColumns: [], onDrag: null, onResize: null }, e = t.extend(i, e); switch (e.fixed = !0, e.overflow = !1, e.resizeMode) { case "flex": e.fixed = !1; break; case "overflow": e.fixed = !1, e.overflow = !0 }return this.each(function() { u(this, e) }) } }) }(jQuery);
/* /_res/jquery/plugin/jquery.farbtastic.js */
jQuery.fn.farbtastic = function(callback) { $.farbtastic(this, callback); return this; }; jQuery.farbtastic = function(container, callback) { var container = $(container).get(0); return container.farbtastic || (container.farbtastic = new jQuery._farbtastic(container, callback)); }
jQuery._farbtastic = function(container, callback) {
	var fb = this; $(container).html('<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>'); var e = $('.farbtastic', container); fb.wheel = $('.wheel', container).get(0); fb.radius = 84; fb.square = 100; fb.width = 194; if (navigator.appVersion.match(/MSIE [0-6]\./)) { $('*', e).each(function() { if (this.currentStyle.backgroundImage != 'none') { var image = this.currentStyle.backgroundImage; image = this.currentStyle.backgroundImage.substring(5, image.length - 2); $(this).css({ 'backgroundImage': 'none', 'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + image + "')" }); } }); }
	fb.linkTo = function(callback) {
		if (typeof fb.callback == 'object') { $(fb.callback).unbind('keyup', fb.updateValue); }
		fb.color = null; if (typeof callback == 'function') { fb.callback = callback; }
		else if (typeof callback == 'object' || typeof callback == 'string') { fb.callback = $(callback); fb.callback.bind('keyup', fb.updateValue); if (fb.callback.get(0).value) { fb.setColor(fb.callback.get(0).value); } }
		return this;
	}
	fb.updateValue = function(event) { if (this.value && this.value != fb.color) { fb.setColor(this.value); } }
	fb.setColor = function(color) {
		var unpack = fb.unpack(color); if (fb.color != color && unpack) { fb.color = color; fb.rgb = unpack; fb.hsl = fb.RGBToHSL(fb.rgb); fb.updateDisplay(); }
		return this;
	}
	fb.setHSL = function(hsl) { fb.hsl = hsl; fb.rgb = fb.HSLToRGB(hsl); fb.color = fb.pack(fb.rgb); fb.updateDisplay(); return this; }
	fb.widgetCoords = function(event) {
		var x, y; var el = event.target || event.srcElement; var reference = fb.wheel; if (typeof event.offsetX != 'undefined') {
			var pos = { x: event.offsetX, y: event.offsetY }; var e = el; while (e) { e.mouseX = pos.x; e.mouseY = pos.y; pos.x += e.offsetLeft; pos.y += e.offsetTop; e = e.offsetParent; }
			var e = reference; var offset = { x: 0, y: 0 }
			while (e) {
				if (typeof e.mouseX != 'undefined') { x = e.mouseX - offset.x; y = e.mouseY - offset.y; break; }
				offset.x += e.offsetLeft; offset.y += e.offsetTop; e = e.offsetParent;
			}
			e = el; while (e) { e.mouseX = undefined; e.mouseY = undefined; e = e.offsetParent; }
		}
		else { var pos = fb.absolutePosition(reference); x = (event.pageX || 0 * (event.clientX + $('html').get(0).scrollLeft)) - pos.x; y = (event.pageY || 0 * (event.clientY + $('html').get(0).scrollTop)) - pos.y; }
		return { x: x - fb.width / 2, y: y - fb.width / 2 };
	}
	fb.mousedown = function(event) {
		if (!document.dragging) { $(document).bind('mousemove', fb.mousemove).bind('mouseup', fb.mouseup); document.dragging = true; }
		var pos = fb.widgetCoords(event); fb.circleDrag = Math.max(Math.abs(pos.x), Math.abs(pos.y)) * 2 > fb.square; fb.mousemove(event); return false;
	}
	fb.mousemove = function(event) {
		var pos = fb.widgetCoords(event); if (fb.circleDrag) { var hue = Math.atan2(pos.x, -pos.y) / 6.28; if (hue < 0) hue += 1; fb.setHSL([hue, fb.hsl[1], fb.hsl[2]]); }
		else { var sat = Math.max(0, Math.min(1, -(pos.x / fb.square) + .5)); var lum = Math.max(0, Math.min(1, -(pos.y / fb.square) + .5)); fb.setHSL([fb.hsl[0], sat, lum]); }
		return false;
	}
	fb.mouseup = function() { $(document).unbind('mousemove', fb.mousemove); $(document).unbind('mouseup', fb.mouseup); document.dragging = false; }
	fb.updateDisplay = function() {
		var angle = fb.hsl[0] * 6.28; $('.h-marker', e).css({ left: Math.round(Math.sin(angle) * fb.radius + fb.width / 2) + 'px', top: Math.round(-Math.cos(angle) * fb.radius + fb.width / 2) + 'px' }); $('.sl-marker', e).css({ left: Math.round(fb.square * (.5 - fb.hsl[1]) + fb.width / 2) + 'px', top: Math.round(fb.square * (.5 - fb.hsl[2]) + fb.width / 2) + 'px' }); $('.color', e).css('backgroundColor', fb.pack(fb.HSLToRGB([fb.hsl[0], 1, 0.5]))); if (typeof fb.callback == 'object') { $(fb.callback).css({ backgroundColor: fb.color, color: fb.hsl[2] > 0.5 ? '#000' : '#fff' }); $(fb.callback).each(function() { if (this.value && this.value != fb.color) { this.value = fb.color; } }); }
		else if (typeof fb.callback == 'function') { fb.callback.call(fb, fb.color); }
	}
	fb.absolutePosition = function(el) {
		var r = { x: el.offsetLeft, y: el.offsetTop }; if (el.offsetParent) { var tmp = fb.absolutePosition(el.offsetParent); r.x += tmp.x; r.y += tmp.y; }
		return r;
	}; fb.pack = function(rgb) {
		var r = Math.round(rgb[0] * 255); var g = Math.round(rgb[1] * 255); var b = Math.round(rgb[2] * 255); return '#' + (r < 16 ? '0' : '') + r.toString(16) +
			(g < 16 ? '0' : '') + g.toString(16) +
			(b < 16 ? '0' : '') + b.toString(16);
	}
	fb.unpack = function(color) {
		if (color.length == 7) { return [parseInt('0x' + color.substring(1, 3)) / 255, parseInt('0x' + color.substring(3, 5)) / 255, parseInt('0x' + color.substring(5, 7)) / 255]; }
		else if (color.length == 4) { return [parseInt('0x' + color.substring(1, 2)) / 15, parseInt('0x' + color.substring(2, 3)) / 15, parseInt('0x' + color.substring(3, 4)) / 15]; }
	}
	fb.HSLToRGB = function(hsl) { var m1, m2, r, g, b; var h = hsl[0], s = hsl[1], l = hsl[2]; m2 = (l <= 0.5) ? l * (s + 1) : l + s - l * s; m1 = l * 2 - m2; return [this.hueToRGB(m1, m2, h + 0.33333), this.hueToRGB(m1, m2, h), this.hueToRGB(m1, m2, h - 0.33333)]; }
	fb.hueToRGB = function(m1, m2, h) { h = (h < 0) ? h + 1 : ((h > 1) ? h - 1 : h); if (h * 6 < 1) return m1 + (m2 - m1) * h * 6; if (h * 2 < 1) return m2; if (h * 3 < 2) return m1 + (m2 - m1) * (0.66666 - h) * 6; return m1; }
	fb.RGBToHSL = function(rgb) {
		var min, max, delta, h, s, l; var r = rgb[0], g = rgb[1], b = rgb[2]; min = Math.min(r, Math.min(g, b)); max = Math.max(r, Math.max(g, b)); delta = max - min; l = (min + max) / 2; s = 0; if (l > 0 && l < 1) { s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l)); }
		h = 0; if (delta > 0) { if (max == r && max != g) h += (g - b) / delta; if (max == g && max != b) h += (2 + (b - r) / delta); if (max == b && max != r) h += (4 + (r - g) / delta); h /= 6; }
		return [h, s, l];
	}
	$('*', e).mousedown(fb.mousedown); fb.setColor('#000000'); if (callback) { fb.linkTo(callback); }
}
/* /_res/jquery/plugin/jquery.easing.1.3.js */
jQuery.easing['jswing'] = jQuery.easing['swing']; jQuery.extend(jQuery.easing, {
	def: 'easeOutQuad', swing: function(x, t, b, c, d) { return jQuery.easing[jQuery.easing.def](x, t, b, c, d); }, easeInQuad: function(x, t, b, c, d) { return c * (t /= d) * t + b; }, easeOutQuad: function(x, t, b, c, d) { return -c * (t /= d) * (t - 2) + b; }, easeInOutQuad: function(x, t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t + b; return -c / 2 * ((--t) * (t - 2) - 1) + b; }, easeInCubic: function(x, t, b, c, d) { return c * (t /= d) * t * t + b; }, easeOutCubic: function(x, t, b, c, d) { return c * ((t = t / d - 1) * t * t + 1) + b; }, easeInOutCubic: function(x, t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t * t + b; return c / 2 * ((t -= 2) * t * t + 2) + b; }, easeInQuart: function(x, t, b, c, d) { return c * (t /= d) * t * t * t + b; }, easeOutQuart: function(x, t, b, c, d) { return -c * ((t = t / d - 1) * t * t * t - 1) + b; }, easeInOutQuart: function(x, t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b; return -c / 2 * ((t -= 2) * t * t * t - 2) + b; }, easeInQuint: function(x, t, b, c, d) { return c * (t /= d) * t * t * t * t + b; }, easeOutQuint: function(x, t, b, c, d) { return c * ((t = t / d - 1) * t * t * t * t + 1) + b; }, easeInOutQuint: function(x, t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b; return c / 2 * ((t -= 2) * t * t * t * t + 2) + b; }, easeInSine: function(x, t, b, c, d) { return -c * Math.cos(t / d * (Math.PI / 2)) + c + b; }, easeOutSine: function(x, t, b, c, d) { return c * Math.sin(t / d * (Math.PI / 2)) + b; }, easeInOutSine: function(x, t, b, c, d) { return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b; }, easeInExpo: function(x, t, b, c, d) { return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b; }, easeOutExpo: function(x, t, b, c, d) { return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b; }, easeInOutExpo: function(x, t, b, c, d) { if (t == 0) return b; if (t == d) return b + c; if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b; return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b; }, easeInCirc: function(x, t, b, c, d) { return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b; }, easeOutCirc: function(x, t, b, c, d) { return c * Math.sqrt(1 - (t = t / d - 1) * t) + b; }, easeInOutCirc: function(x, t, b, c, d) { if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b; return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b; }, easeInElastic: function(x, t, b, c, d) {
		var s = 1.70158; var p = 0; var a = c; if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3; if (a < Math.abs(c)) { a = c; var s = p / 4; }
		else var s = p / (2 * Math.PI) * Math.asin(c / a); return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	}, easeOutElastic: function(x, t, b, c, d) {
		var s = 1.70158; var p = 0; var a = c; if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3; if (a < Math.abs(c)) { a = c; var s = p / 4; }
		else var s = p / (2 * Math.PI) * Math.asin(c / a); return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	}, easeInOutElastic: function(x, t, b, c, d) {
		var s = 1.70158; var p = 0; var a = c; if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * (.3 * 1.5); if (a < Math.abs(c)) { a = c; var s = p / 4; }
		else var s = p / (2 * Math.PI) * Math.asin(c / a); if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b; return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	}, easeInBack: function(x, t, b, c, d, s) { if (s == undefined) s = 1.70158; return c * (t /= d) * t * ((s + 1) * t - s) + b; }, easeOutBack: function(x, t, b, c, d, s) { if (s == undefined) s = 1.70158; return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b; }, easeInOutBack: function(x, t, b, c, d, s) { if (s == undefined) s = 1.70158; if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b; return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b; }, easeInBounce: function(x, t, b, c, d) { return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b; }, easeOutBounce: function(x, t, b, c, d) { if ((t /= d) < (1 / 2.75)) { return c * (7.5625 * t * t) + b; } else if (t < (2 / 2.75)) { return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b; } else if (t < (2.5 / 2.75)) { return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b; } else { return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b; } }, easeInOutBounce: function(x, t, b, c, d) { if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b; return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b; }
});
/* /_res/jquery/plugin/jquery.form.js */
; (function($) {
	"use strict"; var feature = {}; feature.fileapi = $("<input type='file'/>").get(0).files !== undefined; feature.formdata = window.FormData !== undefined; $.fn.ajaxSubmit = function(options) {
		if (!this.length) { log('ajaxSubmit: skipping submit process - no element selected'); return this; }
		var method, action, url, $form = this; if (typeof options == 'function') { options = { success: options }; }
		method = this.attr('method'); action = this.attr('action'); url = (typeof action === 'string') ? $.trim(action) : ''; url = url || window.location.href || ''; if (url) { url = (url.match(/^([^#]+)/) || [])[1]; }
		options = $.extend(true, { url: url, success: $.ajaxSettings.success, type: method || 'GET', iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank' }, options); var veto = {}; this.trigger('form-pre-serialize', [this, options, veto]); if (veto.veto) { log('ajaxSubmit: submit vetoed via form-pre-serialize trigger'); return this; }
		if (options.beforeSerialize && options.beforeSerialize(this, options) === false) { log('ajaxSubmit: submit aborted via beforeSerialize callback'); return this; }
		var traditional = options.traditional; if (traditional === undefined) { traditional = $.ajaxSettings.traditional; }
		var elements = []; var qx, a = this.formToArray(options.semantic, elements); if (options.data) { options.extraData = options.data; qx = $.param(options.data, traditional); }
		if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) { log('ajaxSubmit: submit aborted via beforeSubmit callback'); return this; }
		this.trigger('form-submit-validate', [a, this, options, veto]); if (veto.veto) { log('ajaxSubmit: submit vetoed via form-submit-validate trigger'); return this; }
		var q = $.param(a, traditional); if (qx) { q = (q ? (q + '&' + qx) : qx); }
		if (options.type.toUpperCase() == 'GET') { options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q; options.data = null; }
		else { options.data = q; }
		var callbacks = []; if (options.resetForm) { callbacks.push(function() { $form.resetForm(); }); }
		if (options.clearForm) { callbacks.push(function() { $form.clearForm(options.includeHidden); }); }
		if (!options.dataType && options.target) { var oldSuccess = options.success || function() { }; callbacks.push(function(data) { var fn = options.replaceTarget ? 'replaceWith' : 'html'; $(options.target)[fn](data).each(oldSuccess, arguments); }); }
		else if (options.success) { callbacks.push(options.success); }
		options.success = function(data, status, xhr) { var context = options.context || this; for (var i = 0, max = callbacks.length; i < max; i++) { callbacks[i].apply(context, [data, status, xhr || $form, $form]); } }; var fileInputs = $('input:file:enabled[value]', this); var hasFileInputs = fileInputs.length > 0; var mp = 'multipart/form-data'; var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp); var fileAPI = feature.fileapi && feature.formdata; log("fileAPI :" + fileAPI); var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI; var jqxhr; if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
			if (options.closeKeepAlive) { $.get(options.closeKeepAlive, function() { jqxhr = fileUploadIframe(a); }); }
			else { jqxhr = fileUploadIframe(a); }
		}
		else if ((hasFileInputs || multipart) && fileAPI) { jqxhr = fileUploadXhr(a); }
		else { jqxhr = $.ajax(options); }
		$form.removeData('jqxhr').data('jqxhr', jqxhr); for (var k = 0; k < elements.length; k++)
			elements[k] = null; this.trigger('form-submit-notify', [this, options]); return this; function deepSerialize(extraData) {
				var serialized = $.param(extraData).split('&'); var len = serialized.length; var result = {}; var i, part; for (i = 0; i < len; i++) { part = serialized[i].split('='); result[decodeURIComponent(part[0])] = decodeURIComponent(part[1]); }
				return result;
			}
		function fileUploadXhr(a) {
			var formdata = new FormData(); for (var i = 0; i < a.length; i++) { formdata.append(a[i].name, a[i].value); }
			if (options.extraData) {
				var serializedData = deepSerialize(options.extraData); for (var p in serializedData)
					if (serializedData.hasOwnProperty(p))
						formdata.append(p, serializedData[p]);
			}
			options.data = null; var s = $.extend(true, {}, $.ajaxSettings, options, { contentType: false, processData: false, cache: false, type: method || 'POST' }); if (options.uploadProgress) {
				s.xhr = function() {
					var xhr = jQuery.ajaxSettings.xhr(); if (xhr.upload) {
						xhr.upload.onprogress = function(event) {
							var percent = 0; var position = event.loaded || event.position; var total = event.total; if (event.lengthComputable) { percent = Math.ceil(position / total * 100); }
							options.uploadProgress(event, position, total, percent);
						};
					}
					return xhr;
				};
			}
			s.data = null; var beforeSend = s.beforeSend; s.beforeSend = function(xhr, o) {
				o.data = formdata; if (beforeSend)
					beforeSend.call(this, xhr, o);
			}; return $.ajax(s);
		}
		function fileUploadIframe(a) {
			var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle; var useProp = !!$.fn.prop; var deferred = $.Deferred(); if ($(':input[name=submit],:input[id=submit]', form).length) { alert('Error: Form elements must not have name or id of "submit".'); deferred.reject(); return deferred; }
			if (a) {
				for (i = 0; i < elements.length; i++) {
					el = $(elements[i]); if (useProp)
						el.prop('disabled', false); else
						el.removeAttr('disabled');
				}
			}
			s = $.extend(true, {}, $.ajaxSettings, options); s.context = s.context || s; id = 'jqFormIO' + (new Date().getTime()); if (s.iframeTarget) {
				$io = $(s.iframeTarget); n = $io.attr('name'); if (!n)
					$io.attr('name', id); else
					id = n;
			}
			else { $io = $('<iframe name="' + id + '" src="' + s.iframeSrc + '" />'); $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' }); }
			io = $io[0]; xhr = {
				aborted: 0, responseText: null, responseXML: null, status: 0, statusText: 'n/a', getAllResponseHeaders: function() { }, getResponseHeader: function() { }, setRequestHeader: function() { }, abort: function(status) {
					var e = (status === 'timeout' ? 'timeout' : 'aborted'); log('aborting upload... ' + e); this.aborted = 1; if (io.contentWindow.document.execCommand) { try { io.contentWindow.document.execCommand('Stop'); } catch (ignore) { } }
					$io.attr('src', s.iframeSrc); xhr.error = e; if (s.error)
						s.error.call(s.context, xhr, e, status); if (g)
						$.event.trigger("ajaxError", [xhr, s, e]); if (s.complete)
						s.complete.call(s.context, xhr, e);
				}
			}; g = s.global; if (g && 0 === $.active++) { $.event.trigger("ajaxStart"); }
			if (g) { $.event.trigger("ajaxSend", [xhr, s]); }
			if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
				if (s.global) { $.active--; }
				deferred.reject(); return deferred;
			}
			if (xhr.aborted) { deferred.reject(); return deferred; }
			sub = form.clk; if (sub) { n = sub.name; if (n && !sub.disabled) { s.extraData = s.extraData || {}; s.extraData[n] = sub.value; if (sub.type == "image") { s.extraData[n + '.x'] = form.clk_x; s.extraData[n + '.y'] = form.clk_y; } } }
			var CLIENT_TIMEOUT_ABORT = 1; var SERVER_ABORT = 2; function getDoc(frame) { var doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument ? frame.contentDocument : frame.document; return doc; }
			var csrf_token = $('meta[name=csrf-token]').attr('content'); var csrf_param = $('meta[name=csrf-param]').attr('content'); if (csrf_param && csrf_token) { s.extraData = s.extraData || {}; s.extraData[csrf_param] = csrf_token; }
			function doSubmit() {
				var t = $form.attr('target'), a = $form.attr('action'); form.setAttribute('target', id); if (!method) { form.setAttribute('method', 'POST'); }
				if (a != s.url) { form.setAttribute('action', s.url); }
				if (!s.skipEncodingOverride && (!method || /post/i.test(method))) { $form.attr({ encoding: 'multipart/form-data', enctype: 'multipart/form-data' }); }
				if (s.timeout) { timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout); }
				function checkState() {
					try {
						var state = getDoc(io).readyState; log('state = ' + state); if (state && state.toLowerCase() == 'uninitialized')
							setTimeout(checkState, 50);
					}
					catch (e) {
						log('Server abort: ', e, ' (', e.name, ')'); cb(SERVER_ABORT); if (timeoutHandle)
							clearTimeout(timeoutHandle); timeoutHandle = undefined;
					}
				}
				var extraInputs = []; try {
					if (s.extraData) { for (var n in s.extraData) { if (s.extraData.hasOwnProperty(n)) { if ($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) { extraInputs.push($('<input type="hidden" name="' + s.extraData[n].name + '">').attr('value', s.extraData[n].value).appendTo(form)[0]); } else { extraInputs.push($('<input type="hidden" name="' + n + '">').attr('value', s.extraData[n]).appendTo(form)[0]); } } } }
					if (!s.iframeTarget) {
						$io.appendTo('body'); if (io.attachEvent)
							io.attachEvent('onload', cb); else
							io.addEventListener('load', cb, false);
					}
					setTimeout(checkState, 15); form.submit();
				}
				finally {
					form.setAttribute('action', a); if (t) { form.setAttribute('target', t); } else { $form.removeAttr('target'); }
					$(extraInputs).remove();
				}
			}
			if (s.forceSync) { doSubmit(); }
			else { setTimeout(doSubmit, 10); }
			var data, doc, domCheckCount = 50, callbackProcessed; function cb(e) {
				if (xhr.aborted || callbackProcessed) { return; }
				try { doc = getDoc(io); }
				catch (ex) { log('cannot access response document: ', ex); e = SERVER_ABORT; }
				if (e === CLIENT_TIMEOUT_ABORT && xhr) { xhr.abort('timeout'); deferred.reject(xhr, 'timeout'); return; }
				else if (e == SERVER_ABORT && xhr) { xhr.abort('server abort'); deferred.reject(xhr, 'error', 'server abort'); return; }
				if (!doc || doc.location.href == s.iframeSrc) {
					if (!timedOut)
						return;
				}
				if (io.detachEvent)
					io.detachEvent('onload', cb); else
					io.removeEventListener('load', cb, false); var status = 'success', errMsg; try {
						if (timedOut) { throw 'timeout'; }
						var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc); log('isXml=' + isXml); if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) { if (--domCheckCount) { log('requeing onLoad callback, DOM not available'); setTimeout(cb, 250); return; } }
						var docRoot = doc.body ? doc.body : doc.documentElement; xhr.responseText = docRoot ? docRoot.innerHTML : null; xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc; if (isXml)
							s.dataType = 'xml'; xhr.getResponseHeader = function(header) { var headers = { 'content-type': s.dataType }; return headers[header]; }; if (docRoot) { xhr.status = Number(docRoot.getAttribute('status')) || xhr.status; xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText; }
						var dt = (s.dataType || '').toLowerCase(); var scr = /(json|script|text)/.test(dt); if (scr || s.textarea) {
							var ta = doc.getElementsByTagName('textarea')[0]; if (ta) { xhr.responseText = ta.value; xhr.status = Number(ta.getAttribute('status')) || xhr.status; xhr.statusText = ta.getAttribute('statusText') || xhr.statusText; }
							else if (scr) {
								var pre = doc.getElementsByTagName('pre')[0]; var b = doc.getElementsByTagName('body')[0]; if (pre) { xhr.responseText = pre.textContent ? pre.textContent : pre.innerText; }
								else if (b) { xhr.responseText = b.textContent ? b.textContent : b.innerText; }
							}
						}
						else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) { xhr.responseXML = toXml(xhr.responseText); }
						try { data = httpData(xhr, dt, s); }
						catch (e) { status = 'parsererror'; xhr.error = errMsg = (e || status); }
					}
				catch (e) { log('error caught: ', e); status = 'error'; xhr.error = errMsg = (e || status); }
				if (xhr.aborted) { log('upload aborted'); status = null; }
				if (xhr.status) { status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error'; }
				if (status === 'success') {
					if (s.success)
						s.success.call(s.context, data, 'success', xhr); deferred.resolve(xhr.responseText, 'success', xhr); if (g)
						$.event.trigger("ajaxSuccess", [xhr, s]);
				}
				else if (status) {
					if (errMsg === undefined)
						errMsg = xhr.statusText; if (s.error)
						s.error.call(s.context, xhr, status, errMsg); deferred.reject(xhr, 'error', errMsg); if (g)
						$.event.trigger("ajaxError", [xhr, s, errMsg]);
				}
				if (g)
					$.event.trigger("ajaxComplete", [xhr, s]); if (g && !--$.active) { $.event.trigger("ajaxStop"); }
				if (s.complete)
					s.complete.call(s.context, xhr, status); callbackProcessed = true; if (s.timeout)
					clearTimeout(timeoutHandle); setTimeout(function() {
						if (!s.iframeTarget)
							$io.remove(); xhr.responseXML = null;
					}, 100);
			}
			var toXml = $.parseXML || function(s, doc) {
				if (window.ActiveXObject) { doc = new ActiveXObject('Microsoft.XMLDOM'); doc.async = 'false'; doc.loadXML(s); }
				else { doc = (new DOMParser()).parseFromString(s, 'text/xml'); }
				return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
			}; var parseJSON = $.parseJSON || function(s) { return window['eval']('(' + s + ')'); }; var httpData = function(xhr, type, s) {
				var ct = xhr.getResponseHeader('content-type') || '', xml = type === 'xml' || !type && ct.indexOf('xml') >= 0, data = xml ? xhr.responseXML : xhr.responseText; if (xml && data.documentElement.nodeName === 'parsererror') {
					if ($.error)
						$.error('parsererror');
				}
				if (s && s.dataFilter) { data = s.dataFilter(data, type); }
				if (typeof data === 'string') { if (type === 'json' || !type && ct.indexOf('json') >= 0) { data = parseJSON(data); } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) { $.globalEval(data); } }
				return data;
			}; return deferred;
		}
	}; $.fn.ajaxForm = function(options) {
		options = options || {}; options.delegation = options.delegation && $.isFunction($.fn.on); if (!options.delegation && this.length === 0) {
			var o = { s: this.selector, c: this.context }; if (!$.isReady && o.s) { log('DOM not ready, queuing ajaxForm'); $(function() { $(o.s, o.c).ajaxForm(options); }); return this; }
			log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)')); return this;
		}
		if (options.delegation) { $(document).off('submit.form-plugin', this.selector, doAjaxSubmit).off('click.form-plugin', this.selector, captureSubmittingElement).on('submit.form-plugin', this.selector, options, doAjaxSubmit).on('click.form-plugin', this.selector, options, captureSubmittingElement); return this; }
		return this.ajaxFormUnbind().bind('submit.form-plugin', options, doAjaxSubmit).bind('click.form-plugin', options, captureSubmittingElement);
	}; function doAjaxSubmit(e) { var options = e.data; if (!e.isDefaultPrevented()) { e.preventDefault(); $(this).ajaxSubmit(options); } }
	function captureSubmittingElement(e) {
		var target = e.target; var $el = $(target); if (!($el.is(":submit,input:image"))) {
			var t = $el.closest(':submit'); if (t.length === 0) { return; }
			target = t[0];
		}
		var form = this; form.clk = target; if (target.type == 'image') { if (e.offsetX !== undefined) { form.clk_x = e.offsetX; form.clk_y = e.offsetY; } else if (typeof $.fn.offset == 'function') { var offset = $el.offset(); form.clk_x = e.pageX - offset.left; form.clk_y = e.pageY - offset.top; } else { form.clk_x = e.pageX - target.offsetLeft; form.clk_y = e.pageY - target.offsetTop; } }
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	}
	$.fn.ajaxFormUnbind = function() { return this.unbind('submit.form-plugin click.form-plugin'); }; $.fn.formToArray = function(semantic, elements) {
		var a = []; if (this.length === 0) { return a; }
		var form = this[0]; var els = semantic ? form.getElementsByTagName('*') : form.elements; if (!els) { return a; }
		var i, j, n, v, el, max, jmax; for (i = 0, max = els.length; i < max; i++) {
			el = els[i]; n = el.name; if (!n) { continue; }
			if (semantic && form.clk && el.type == "image") {
				if (!el.disabled && form.clk == el) { a.push({ name: n, value: $(el).val(), type: el.type }); a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y }); }
				continue;
			}
			v = $.fieldValue(el, true); if (v && v.constructor == Array) {
				if (elements)
					elements.push(el); for (j = 0, jmax = v.length; j < jmax; j++) { a.push({ name: n, value: v[j] }); }
			}
			else if (feature.fileapi && el.type == 'file' && !el.disabled) {
				if (elements)
					elements.push(el); var files = el.files; if (files.length) { for (j = 0; j < files.length; j++) { a.push({ name: n, value: files[j], type: el.type }); } }
				else { a.push({ name: n, value: '', type: el.type }); }
			}
			else if (v !== null && typeof v != 'undefined') {
				if (elements)
					elements.push(el); a.push({ name: n, value: v, type: el.type, required: el.required });
			}
		}
		if (!semantic && form.clk) { var $input = $(form.clk), input = $input[0]; n = input.name; if (n && !input.disabled && input.type == 'image') { a.push({ name: n, value: $input.val() }); a.push({ name: n + '.x', value: form.clk_x }, { name: n + '.y', value: form.clk_y }); } }
		return a;
	}; $.fn.formSerialize = function(semantic) { return $.param(this.formToArray(semantic)); }; $.fn.fieldSerialize = function(successful) {
		var a = []; this.each(function() {
			var n = this.name; if (!n) { return; }
			var v = $.fieldValue(this, successful); if (v && v.constructor == Array) { for (var i = 0, max = v.length; i < max; i++) { a.push({ name: n, value: v[i] }); } }
			else if (v !== null && typeof v != 'undefined') { a.push({ name: this.name, value: v }); }
		}); return $.param(a);
	}; $.fn.fieldValue = function(successful) {
		for (var val = [], i = 0, max = this.length; i < max; i++) {
			var el = this[i]; var v = $.fieldValue(el, successful); if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) { continue; }
			if (v.constructor == Array)
				$.merge(val, v); else
				val.push(v);
		}
		return val;
	}; $.fieldValue = function(el, successful) {
		var n = el.name, t = el.type, tag = el.tagName.toLowerCase(); if (successful === undefined) { successful = true; }
		if (successful && (!n || el.disabled || t == 'reset' || t == 'button' || (t == 'checkbox' || t == 'radio') && !el.checked || (t == 'submit' || t == 'image') && el.form && el.form.clk != el || tag == 'select' && el.selectedIndex == -1)) { return null; }
		if (tag == 'select') {
			var index = el.selectedIndex; if (index < 0) { return null; }
			var a = [], ops = el.options; var one = (t == 'select-one'); var max = (one ? index + 1 : ops.length); for (var i = (one ? index : 0); i < max; i++) {
				var op = ops[i]; if (op.selected) {
					var v = op.value; if (!v) { v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value; }
					if (one) { return v; }
					a.push(v);
				}
			}
			return a;
		}
		return $(el).val();
	}; $.fn.clearForm = function(includeHidden) { return this.each(function() { $('input,select,textarea', this).clearFields(includeHidden); }); }; $.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
		var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; return this.each(function() {
			var t = this.type, tag = this.tagName.toLowerCase(); if (re.test(t) || tag == 'textarea') { this.value = ''; }
			else if (t == 'checkbox' || t == 'radio') { this.checked = false; }
			else if (tag == 'select') { this.selectedIndex = -1; }
			else if (includeHidden) {
				if ((includeHidden === true && /hidden/.test(t)) || (typeof includeHidden == 'string' && $(this).is(includeHidden)))
					this.value = '';
			}
		});
	}; $.fn.resetForm = function() { return this.each(function() { if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) { this.reset(); } }); }; $.fn.enable = function(b) {
		if (b === undefined) { b = true; }
		return this.each(function() { this.disabled = !b; });
	}; $.fn.selected = function(select) {
		if (select === undefined) { select = true; }
		return this.each(function() {
			var t = this.type; if (t == 'checkbox' || t == 'radio') { this.checked = select; }
			else if (this.tagName.toLowerCase() == 'option') {
				var $sel = $(this).parent('select'); if (select && $sel[0] && $sel[0].type == 'select-one') { $sel.find('option').selected(false); }
				this.selected = select;
			}
		});
	}; $.fn.ajaxSubmit.debug = false; function log() {
		if (!$.fn.ajaxSubmit.debug)
			return; var msg = '[jquery.form] ' + Array.prototype.join.call(arguments, ''); if (window.console && window.console.log) { window.console.log(msg); }
		else if (window.opera && window.opera.postError) { window.opera.postError(msg); }
	}
})(jQuery);
/* /_res/jquery/plugin/jquery.jgrowl.js */
(function($) {
	$.jGrowl = function(m, o) {
		if (typeof (is_mobile) != 'undefined' && is_mobile == true) {
			alert(strip_tags(m)); if (typeof (o) != 'undefined' && o.beforeClose) { o.beforeClose.apply(); }
			return;
		}
		if ($('#jGrowl').length == 0)
			$('<div id="jGrowl"></div>').addClass((o && o.position) ? o.position : $.jGrowl.defaults.position).appendTo('body'); $('#jGrowl').jGrowl(m, o);
	}; $.fn.jGrowl = function(m, o) {
		if ($.isFunction(this.each)) {
			var args = arguments; return this.each(function() {
				var self = this; if ($(this).data('jGrowl.instance') == undefined) { $(this).data('jGrowl.instance', $.extend(new $.fn.jGrowl(), { notifications: [], element: null, interval: null })); $(this).data('jGrowl.instance').startup(this); }
				if ($.isFunction($(this).data('jGrowl.instance')[m])) { $(this).data('jGrowl.instance')[m].apply($(this).data('jGrowl.instance'), $.makeArray(args).slice(1)); } else { $(this).data('jGrowl.instance').create(m, o); }
			});
		};
	}; $.extend($.fn.jGrowl.prototype, {
		defaults: { pool: 0, header: '', group: '', sticky: false, position: 'center_s', glue: 'after', theme: 'plani', themeState: 'highlight', corners: '10px', check: 250, life: 3000, closeDuration: 'normal', openDuration: 'normal', easing: 'swing', closer: true, closeTemplate: '&times;', closerTemplate: '<div>close all</div>', log: function(e, m, o) { }, beforeOpen: function(e, m, o) { }, afterOpen: function(e, m, o) { }, open: function(e, m, o) { }, beforeClose: function(e, m, o) { }, close: function(e, m, o) { }, animateOpen: { opacity: 'show' }, animateClose: { opacity: 'hide' } }, notifications: [], element: null, interval: null, create: function(message, o) {
			var o = $.extend({}, this.defaults, o); if (typeof o.speed !== 'undefined') { o.openDuration = o.speed; o.closeDuration = o.speed; }
			this.notifications.push({ message: message, options: o }); o.log.apply(this.element, [this.element, message, o]);
		}, render: function(notification) {
			var self = this; var message = notification.message; var o = notification.options; var notification = $('<div class="jGrowl-notification ' + o.themeState + ' ui-corner-all' +
				((o.group != undefined && o.group != '') ? ' ' + o.group : '') + '">' + '<div class="jGrowl-close">' + o.closeTemplate + '</div>' + '<div class="jGrowl-message">' + message + '</div></div>').data("jGrowl", o).addClass(o.theme).children('div.jGrowl-close').bind("click.jGrowl", function() { $(this).parent().trigger('jGrowl.close'); }).parent(); $(notification).bind("mouseover.jGrowl", function() { $('div.jGrowl-notification', self.element).data("jGrowl.pause", true); }).bind("mouseout.jGrowl", function() { $('div.jGrowl-notification', self.element).data("jGrowl.pause", false); }).bind('jGrowl.beforeOpen', function() { $('#jGrowl').show(); if (o.beforeOpen.apply(notification, [notification, message, o, self.element]) != false) { $(this).trigger('jGrowl.open'); } }).bind('jGrowl.open', function() {
					if (o.open.apply(notification, [notification, message, o, self.element]) != false) {
						if (o.glue == 'after') { $('div.jGrowl-notification:last', self.element).after(notification); } else { $('div.jGrowl-notification:first', self.element).before(notification); }
						$(this).animate(o.animateOpen, o.openDuration, o.easing, function() {
							if ($.browser.msie && (parseInt($(this).css('opacity'), 10) === 1 || parseInt($(this).css('opacity'), 10) === 0))
								this.style.removeAttribute('filter'); $(this).data("jGrowl").created = new Date(); $(this).trigger('jGrowl.afterOpen');
						});
					}
				}).bind('jGrowl.afterOpen', function() { o.afterOpen.apply(notification, [notification, message, o, self.element]); }).bind('jGrowl.beforeClose', function() {
					$('#jGrowl').fadeOut(); if (o.beforeClose.apply(notification, [notification, message, o, self.element]) != false)
						$(this).trigger('jGrowl.close');
				}).bind('jGrowl.close', function() {
					$(this).data('jGrowl.pause', true); $(this).animate(o.animateClose, o.closeDuration, o.easing, function() {
						$(this).remove(); var close = o.close.apply(notification, [notification, message, o, self.element]); if ($.isFunction(close))
							close.apply(notification, [notification, message, o, self.element]);
					});
				}).trigger('jGrowl.beforeOpen'); if (o.corners != '' && $.fn.corner != undefined) $(notification).corner(o.corners); if ($('div.jGrowl-notification:parent', self.element).length > 1 && $('div.jGrowl-closer', self.element).length == 0 && this.defaults.closer != false) { $(this.defaults.closerTemplate).addClass('jGrowl-closer ui-state-highlight ui-corner-all').addClass(this.defaults.theme).appendTo(self.element).animate(this.defaults.animateOpen, this.defaults.speed, this.defaults.easing).bind("click.jGrowl", function() { $(this).siblings().trigger("jGrowl.beforeClose"); if ($.isFunction(self.defaults.closer)) { self.defaults.closer.apply($(this).parent()[0], [$(this).parent()[0]]); } }); };
		}, update: function() {
			$(this.element).find('div.jGrowl-notification:parent').each(function() { if ($(this).data("jGrowl") != undefined && $(this).data("jGrowl").created != undefined && ($(this).data("jGrowl").created.getTime() + parseInt($(this).data("jGrowl").life)) < (new Date()).getTime() && $(this).data("jGrowl").sticky != true && ($(this).data("jGrowl.pause") == undefined || $(this).data("jGrowl.pause") != true)) { $(this).trigger('jGrowl.beforeClose'); } }); if (this.notifications.length > 0 && (this.defaults.pool == 0 || $(this.element).find('div.jGrowl-notification:parent').length < this.defaults.pool))
				this.render(this.notifications.shift()); if ($(this.element).find('div.jGrowl-notification:parent').length < 2) { $(this.element).find('div.jGrowl-closer').animate(this.defaults.animateClose, this.defaults.speed, this.defaults.easing, function() { $(this).remove(); }); }
		}, startup: function(e) { this.element = $(e).addClass('jGrowl').append('<div class="jGrowl-notification"></div>'); this.interval = setInterval(function() { $(e).data('jGrowl.instance').update(); }, parseInt(this.defaults.check)); if ($.browser.msie && parseInt($.browser.version) < 7 && !window["XMLHttpRequest"]) { $(this.element).addClass('ie6'); } }, shutdown: function() { $(this.element).removeClass('jGrowl').find('div.jGrowl-notification').remove(); clearInterval(this.interval); }, close: function() { $(this.element).find('div.jGrowl-notification').each(function() { $(this).trigger('jGrowl.beforeClose'); }); }
	}); $.jGrowl.defaults = $.fn.jGrowl.prototype.defaults;
})(jQuery);
/* /_res/jquery/plugin/jquery.nprogress.js */
; (function(root, factory) { if (typeof define === 'function' && define.amd) { define(factory); } else if (typeof exports === 'object') { module.exports = factory(); } else { root.NProgress = factory(); } })(this, function() {
	var NProgress = {}; NProgress.version = '0.2.0'; var Settings = NProgress.settings = { minimum: 0.08, easing: 'ease', positionUsing: '', speed: 200, trickle: true, trickleRate: 0.02, trickleSpeed: 800, showSpinner: true, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: 'body', template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>' }; NProgress.configure = function(options) {
		var key, value; for (key in options) { value = options[key]; if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value; }
		return this;
	}; NProgress.status = null; NProgress.set = function(n) { var started = NProgress.isStarted(); n = clamp(n, Settings.minimum, 1); NProgress.status = (n === 1 ? null : n); var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing; progress.offsetWidth; queue(function(next) { if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS(); css(bar, barPositionCSS(n, speed, ease)); if (n === 1) { css(progress, { transition: 'none', opacity: 1 }); progress.offsetWidth; setTimeout(function() { css(progress, { transition: 'all ' + speed + 'ms linear', opacity: 0 }); setTimeout(function() { NProgress.remove(); next(); }, speed); }, speed); } else { setTimeout(next, speed); } }); return this; }; NProgress.isStarted = function() { return typeof NProgress.status === 'number'; }; NProgress.start = function() { if (!NProgress.status) NProgress.set(0); var work = function() { setTimeout(function() { if (!NProgress.status) return; NProgress.trickle(); work(); }, Settings.trickleSpeed); }; if (Settings.trickle) work(); return this; }; NProgress.done = function(force) { if (!force && !NProgress.status) return this; return NProgress.inc(0.3 + 0.5 * Math.random()).set(1); }; NProgress.inc = function(amount) {
		var n = NProgress.status; if (!n) { return NProgress.start(); } else {
			if (typeof amount !== 'number') { amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95); }
			n = clamp(n + amount, 0, 0.994); return NProgress.set(n);
		}
	}; NProgress.trickle = function() { return NProgress.inc(Math.random() * Settings.trickleRate); }; (function() {
		var initial = 0, current = 0; NProgress.promise = function($promise) {
			if (!$promise || $promise.state() === "resolved") { return this; }
			if (current === 0) { NProgress.start(); }
			initial++; current++; $promise.always(function() { current--; if (current === 0) { initial = 0; NProgress.done(); } else { NProgress.set((initial - current) / initial); } }); return this;
		};
	})(); NProgress.render = function(fromStart) {
		if (NProgress.isRendered()) return document.getElementById('nprogress'); addClass(document.documentElement, 'nprogress-busy'); var progress = document.createElement('div'); progress.id = 'nprogress'; progress.innerHTML = Settings.template; var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? '-100' : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner; css(bar, { transition: 'all 0 linear', transform: 'translate3d(' + perc + '%,0,0)' }); if (!Settings.showSpinner) { spinner = progress.querySelector(Settings.spinnerSelector); spinner && removeElement(spinner); }
		if (parent != document.body) { addClass(parent, 'nprogress-custom-parent'); }
		parent.appendChild(progress); return progress;
	}; NProgress.remove = function() { removeClass(document.documentElement, 'nprogress-busy'); removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent'); var progress = document.getElementById('nprogress'); progress && removeElement(progress); }; NProgress.isRendered = function() { return !!document.getElementById('nprogress'); }; NProgress.getPositioningCSS = function() { var bodyStyle = document.body.style; var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' : ('MozTransform' in bodyStyle) ? 'Moz' : ('msTransform' in bodyStyle) ? 'ms' : ('OTransform' in bodyStyle) ? 'O' : ''; if (vendorPrefix + 'Perspective' in bodyStyle) { return 'translate3d'; } else if (vendorPrefix + 'Transform' in bodyStyle) { return 'translate'; } else { return 'margin'; } }; function clamp(n, min, max) { if (n < min) return min; if (n > max) return max; return n; }
	function toBarPerc(n) { return (-1 + n) * 100; }
	function barPositionCSS(n, speed, ease) {
		var barCSS; if (Settings.positionUsing === 'translate3d') { barCSS = { transform: 'translate3d(' + toBarPerc(n) + '%,0,0)' }; } else if (Settings.positionUsing === 'translate') { barCSS = { transform: 'translate(' + toBarPerc(n) + '%,0)' }; } else { barCSS = { 'margin-left': toBarPerc(n) + '%' }; }
		barCSS.transition = 'all ' + speed + 'ms ' + ease; return barCSS;
	}
	var queue = (function() {
		var pending = []; function next() { var fn = pending.shift(); if (fn) { fn(next); } }
		return function(fn) { pending.push(fn); if (pending.length == 1) next(); };
	})(); var css = (function() {
		var cssPrefixes = ['Webkit', 'O', 'Moz', 'ms'], cssProps = {}; function camelCase(string) { return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) { return letter.toUpperCase(); }); }
		function getVendorProp(name) {
			var style = document.body.style; if (name in style) return name; var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName; while (i--) { vendorName = cssPrefixes[i] + capName; if (vendorName in style) return vendorName; }
			return name;
		}
		function getStyleProp(name) { name = camelCase(name); return cssProps[name] || (cssProps[name] = getVendorProp(name)); }
		function applyCss(element, prop, value) { prop = getStyleProp(prop); element.style[prop] = value; }
		return function(element, properties) { var args = arguments, prop, value; if (args.length == 2) { for (prop in properties) { value = properties[prop]; if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value); } } else { applyCss(element, args[1], args[2]); } }
	})(); function hasClass(element, name) { var list = typeof element == 'string' ? element : classList(element); return list.indexOf(' ' + name + ' ') >= 0; }
	function addClass(element, name) { var oldList = classList(element), newList = oldList + name; if (hasClass(oldList, name)) return; element.className = newList.substring(1); }
	function removeClass(element, name) { var oldList = classList(element), newList; if (!hasClass(element, name)) return; newList = oldList.replace(' ' + name + ' ', ' '); element.className = newList.substring(1, newList.length - 1); }
	function classList(element) { return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' '); }
	function removeElement(element) { element && element.parentNode && element.parentNode.removeChild(element); }
	return NProgress;
});
/* /_res/jquery/plugin/jquery.mCustomScrollbar.js */
!function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function(a) { function b(b) { var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0; if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) { if (1 === g.deltaMode) { var q = a.data(this, "mousewheel-line-height"); j *= q, m *= q, l *= q } else if (2 === g.deltaMode) { var r = a.data(this, "mousewheel-page-height"); j *= r, m *= r, l *= r } if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) { var s = this.getBoundingClientRect(); o = b.clientX - s.left, p = b.clientY - s.top } return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h) } } function c() { f = null } function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 } var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice; if (a.event.fixHooks) for (var j = g.length; j;)a.event.fixHooks[g[--j]] = a.event.mouseHooks; var k = a.event.special.mousewheel = { version: "3.1.12", setup: function() { if (this.addEventListener) for (var c = h.length; c;)this.addEventListener(h[--c], b, !1); else this.onmousewheel = b; a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this)) }, teardown: function() { if (this.removeEventListener) for (var c = h.length; c;)this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null; a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height") }, getLineHeight: function(b) { var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"](); return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16 }, getPageHeight: function(b) { return a(b).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } }; a.fn.extend({ mousewheel: function(a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) { return this.unbind("mousewheel", a) } }) }); !function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function(a) { function b(b) { var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0; if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) { if (1 === g.deltaMode) { var q = a.data(this, "mousewheel-line-height"); j *= q, m *= q, l *= q } else if (2 === g.deltaMode) { var r = a.data(this, "mousewheel-page-height"); j *= r, m *= r, l *= r } if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) { var s = this.getBoundingClientRect(); o = b.clientX - s.left, p = b.clientY - s.top } return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h) } } function c() { f = null } function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 } var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice; if (a.event.fixHooks) for (var j = g.length; j;)a.event.fixHooks[g[--j]] = a.event.mouseHooks; var k = a.event.special.mousewheel = { version: "3.1.12", setup: function() { if (this.addEventListener) for (var c = h.length; c;)this.addEventListener(h[--c], b, !1); else this.onmousewheel = b; a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this)) }, teardown: function() { if (this.removeEventListener) for (var c = h.length; c;)this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null; a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height") }, getLineHeight: function(b) { var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"](); return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16 }, getPageHeight: function(b) { return a(b).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } }; a.fn.extend({ mousewheel: function(a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) { return this.unbind("mousewheel", a) } }) }); !function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document) }(function(e) { !function(t) { var o = "function" == typeof define && define.amd, a = "undefined" != typeof module && module.exports, n = "https:" == document.location.protocol ? "https:" : "http:", i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js"; o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t() }(function() { var t, o = "mCustomScrollbar", a = "mCS", n = ".mCustomScrollbar", i = { setTop: 0, setLeft: 0, axis: "y", scrollbarPosition: "inside", scrollInertia: 950, autoDraggerLength: !0, alwaysShowScrollbar: 0, snapOffset: 0, mouseWheel: { enable: !0, scrollAmount: "auto", axis: "y", deltaFactor: "auto", disableOver: ["select", "option", "keygen", "datalist", "textarea"] }, scrollButtons: { scrollType: "stepless", scrollAmount: "auto" }, keyboard: { enable: !0, scrollType: "stepless", scrollAmount: "auto" }, contentTouchScroll: 25, documentTouchScroll: !0, advanced: { autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']", updateOnContentResize: !0, updateOnImageLoad: "auto", autoUpdateTimeout: 60 }, theme: "light", callbacks: { onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0 } }, r = 0, l = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1, d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"], u = { init: function(t) { var t = e.extend(!0, {}, i, t), o = f.call(this); if (t.live) { var s = t.liveSelector || this.selector || n, c = e(s); if ("off" === t.live) return void m(s); l[s] = setTimeout(function() { c.mCustomScrollbar(t), "once" === t.live && c.length && m(s) }, 500) } else m(s); return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = { enable: !0, scrollAmount: "auto", axis: "y", preventDefault: !1, deltaFactor: "auto", normalizeDelta: !1, invert: !1 }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function() { var o = e(this); if (!o.data(a)) { o.data(a, { idx: ++r, opt: t, scrollRatio: { y: null, x: null }, overflowed: null, contentReset: { y: null, x: null }, bindEvents: !1, tweenRunning: !1, sequential: {}, langDir: o.css("direction"), cbOffsets: null, trigger: null, poll: { size: { o: 0, n: 0 }, img: { o: 0, n: 0 }, change: { o: 0, n: 0 } } }); var n = o.data(a), i = n.opt, l = o.data("mcs-axis"), s = o.data("mcs-scrollbar-position"), c = o.data("mcs-theme"); l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o) } }) }, update: function(t, o) { var n = t || f.call(this); return e(n).each(function() { var t = e(this); if (t.data(a)) { var n = t.data(a), i = n.opt, r = e("#mCSB_" + n.idx + "_container"), l = e("#mCSB_" + n.idx), s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")]; if (!r.length) return; n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this); var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)]; "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), { dir: "y", dur: 0, overwrite: "none" }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), { dir: "x", dur: 0, overwrite: "none" }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), { dir: "x", dur: 0, overwrite: "none" }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), { dir: "y", dur: 0, overwrite: "none" }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this) } }) }, scrollTo: function(t, o) { if ("undefined" != typeof t && null != t) { var n = f.call(this); return e(n).each(function() { var n = e(this); if (n.data(a)) { var i = n.data(a), r = i.opt, l = { trigger: "external", scrollInertia: r.scrollInertia, scrollEasing: "mcsEaseInOut", moveDragger: !1, timeout: 60, callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 }, s = e.extend(!0, {}, l, o), c = Y.call(this, t), d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia; c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function() { null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(n, c[1].toString(), s)) }, s.timeout) } }) } }, stop: function() { var t = f.call(this); return e(t).each(function() { var t = e(this); t.data(a) && Q(t) }) }, disable: function(t) { var o = f.call(this); return e(o).each(function() { var o = e(this); if (o.data(a)) { o.data(a); N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]) } }) }, destroy: function() { var t = f.call(this); return e(t).each(function() { var n = e(this); if (n.data(a)) { var i = n.data(a), r = i.opt, l = e("#mCSB_" + i.idx), s = e("#mCSB_" + i.idx + "_container"), c = e(".mCSB_" + i.idx + "_scrollbar"); r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]) } }) } }, f = function() { return "object" != typeof e(this) || e(this).length < 1 ? n : this }, h = function(t) { var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"], a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"], n = ["minimal", "minimal-dark"], i = ["minimal", "minimal-dark"], r = ["minimal", "minimal-dark"]; t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition }, m = function(e) { l[e] && (clearTimeout(l[e]), $(l, e)) }, p = function(e) { return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y" }, g = function(e) { return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless" }, v = function() { var t = e(this), n = t.data(a), i = n.opt, r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "", l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"], s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical", c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0], u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "", f = i.autoHideScrollbar ? " " + d[6] : "", h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : ""; i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>"); var m = e("#mCSB_" + n.idx), p = e("#mCSB_" + n.idx + "_container"); "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this); var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")]; g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width()) }, x = function(t) { var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() { return e(this).outerWidth(!0) }).get())], a = t.parent().width(); return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%" }, _ = function() { var t = e(this), o = t.data(a), n = o.opt, i = e("#mCSB_" + o.idx + "_container"); if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) { i.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" }); var r = Math.ceil(i[0].scrollWidth); 3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({ width: r, "min-width": "100%", "overflow-x": "inherit" }) : i.css({ "overflow-x": "inherit", position: "absolute" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left), "min-width": "100%", position: "relative" }).unwrap() } }, w = function() { var t = e(this), o = t.data(a), n = o.opt, i = e(".mCSB_" + o.idx + "_scrollbar:first"), r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "", l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"], s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]]; n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3]) }, S = function() { var t = e(this), o = t.data(a), n = e("#mCSB_" + o.idx), i = e("#mCSB_" + o.idx + "_container"), r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")], l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)], c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())], d = s && c[1] < c[0] ? c[0] : c[1], u = s && c[3] < c[2] ? c[2] : c[3]; r[0].css({ height: d, "max-height": r[0].parent().height() - 10 }).find(".mCSB_dragger_bar").css({ "line-height": c[0] + "px" }), r[1].css({ width: u, "max-width": r[1].parent().width() - 10 }) }, b = function() { var t = e(this), o = t.data(a), n = e("#mCSB_" + o.idx), i = e("#mCSB_" + o.idx + "_container"), r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")], l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()], s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())]; o.scrollRatio = { y: s[0], x: s[1] } }, C = function(e, t, o) { var a = o ? d[0] + "_expanded" : "", n = e.closest(".mCSB_scrollTools"); "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1]))) }, y = function() { var t = e(this), o = t.data(a), n = e("#mCSB_" + o.idx), i = e("#mCSB_" + o.idx + "_container"), r = null == o.overflowed ? i.height() : i.outerHeight(!1), l = null == o.overflowed ? i.width() : i.outerWidth(!1), s = i[0].scrollHeight, c = i[0].scrollWidth; return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()] }, B = function() { var t = e(this), o = t.data(a), n = o.opt, i = e("#mCSB_" + o.idx), r = e("#mCSB_" + o.idx + "_container"), l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]; if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) { var s = dx = 0; "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX") } }, T = function() { function t() { r = setTimeout(function() { e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t() }, 100) } var o = e(this), n = o.data(a), i = n.opt; if (!n.bindEvents) { if (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) { var r; t() } P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), n.bindEvents = !0 } }, k = function() { var t = e(this), o = t.data(a), n = o.opt, i = a + "_" + o.idx, r = ".mCSB_" + o.idx + "_scrollbar", l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"), s = e("#mCSB_" + o.idx + "_container"); n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function() { e(this).unbind("." + i) }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1) }, M = function(t) { var o = e(this), n = o.data(a), i = n.opt, r = e("#mCSB_" + n.idx + "_container_wrapper"), l = r.length ? r : e("#mCSB_" + n.idx + "_container"), s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")], c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")]; "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5]) }, O = function(t) { var o = t.type, a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null, n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0]; switch (o) { case "pointerdown": case "MSPointerDown": case "pointermove": case "MSPointerMove": case "pointerup": case "MSPointerUp": return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1]; case "touchstart": case "touchmove": case "touchend": var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length; return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1]; default: return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1] } }, I = function() { function t(e, t, a, n) { if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x", s = (o[0].offsetLeft - t + n) * l.scrollRatio.x; else var i = "y", s = (o[0].offsetTop - e + a) * l.scrollRatio.y; G(r, s.toString(), { dir: i, drag: !0 }) } var o, n, i, r = e(this), l = r.data(a), d = l.opt, u = a + "_" + l.idx, f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"], h = e("#mCSB_" + l.idx + "_container"), m = e("#" + f[0] + ",#" + f[1]), p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m, g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document); m.bind("contextmenu." + u, function(e) { e.preventDefault() }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) { if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) { c = !0, s && (document.onselectstart = function() { return !1 }), L.call(h, !1), Q(r), o = e(this); var a = o.offset(), l = O(t)[0] - a.top, u = O(t)[1] - a.left, f = o.height() + a.top, m = o.width() + a.left; f > l && l > 0 && m > u && u > 0 && (n = l, i = u), C(o, "active", d.autoExpandScrollbar) } }).bind("touchmove." + u, function(e) { e.stopImmediatePropagation(), e.preventDefault(); var a = o.offset(), r = O(e)[0] - a.top, l = O(e)[1] - a.left; t(n, i, r, l) }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) { if (o) { var a = o.offset(), r = O(e)[0] - a.top, l = O(e)[1] - a.left; if (n === r && i === l) return; t(n, i, r, l) } }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() { o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), L.call(h, !0) }) }, D = function() { function o(e) { if (!te(e) || c || O(e)[2]) return void (t = 0); t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action"); var o = I.offset(); u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [O(e)[0], O(e)[1]] } function n(e) { if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) { g = K(); var t = M.offset(), o = O(e)[0] - t.top, a = O(e)[1] - t.left, n = "mcsLinearOut"; if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(), r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis); if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(), h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis); r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", "all", !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0) } } function i(e) { if (!te(e) || c || O(e)[2]) return void (t = 0); t = 1, e.stopImmediatePropagation(), Q(y), p = K(); var o = M.offset(); h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = [] } function r(e) { if (te(e) && !c && !O(e)[2]) { d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = K(); var t = M.offset(), o = O(e)[0] - t.top, a = O(e)[1] - t.left; if (!(v - g > 30)) { _ = 1e3 / (v - p); var n = "mcsEaseOut", i = 2.5 > _, r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0]; x = i ? [o - r[0], a - r[1]] : [o - h, a - m]; var u = [Math.abs(x[0]), Math.abs(x[1])]; _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _]; var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])]; w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia]; var y = parseInt(T.contentTouchScroll) || 0; w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1) } } } function l(e, t) { var o = [1.5 * t, 2 * t, t / 1.5, t / 2]; return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3] } function s(e, t, o, a, n, i) { e && G(y, e.toString(), { dur: t, scrollEasing: o, dir: a, overwrite: n, drag: i }) } var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this), B = y.data(a), T = B.opt, k = a + "_" + B.idx, M = e("#mCSB_" + B.idx), I = e("#mCSB_" + B.idx + "_container"), D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")], E = [], W = [], R = 0, L = "yx" === T.axis ? "none" : "all", z = [], P = I.find("iframe"), H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k], U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction; I.bind(H[0], function(e) { o(e) }).bind(H[1], function(e) { n(e) }), M.bind(H[0], function(e) { i(e) }).bind(H[2], function(e) { r(e) }), P.length && P.each(function() { e(this).bind("load", function() { A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) { o(e), i(e) }).bind(H[1], function(e) { n(e) }).bind(H[2], function(e) { r(e) }) }) }) }, E = function() { function o() { return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0 } function n(e, t, o) { d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", o ? 60 : null) } var i, r = e(this), l = r.data(a), s = l.opt, d = l.sequential, u = a + "_" + l.idx, f = e("#mCSB_" + l.idx + "_container"), h = f.parent(); f.bind("mousedown." + u, function() { t || i || (i = 1, c = !0) }).add(document).bind("mousemove." + u, function(e) { if (!t && i && o()) { var a = f.offset(), r = O(e)[0] - a.top + f[0].offsetTop, c = O(e)[1] - a.left + f[0].offsetLeft; r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39))) } }).bind("mouseup." + u + " dragend." + u, function() { t || (i && (i = 0, n("off", null)), c = !1) }) }, W = function() { function t(t, a) { if (Q(o), !z(o, t.target)) { var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100, d = i.scrollInertia; if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x", f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)], h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0], m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft), p = c[1][0].offsetLeft, g = c[1].parent().width() - c[1].width(), v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX; else var u = "y", f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)], h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0], m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop), p = c[0][0].offsetTop, g = c[0].parent().height() - c[0].height(), v = t.deltaY || a; "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), G(o, (m - v * h).toString(), { dir: u, dur: d })) } } if (e(this).data(a)) { var o = e(this), n = o.data(a), i = n.opt, r = a + "_" + n.idx, l = e("#mCSB_" + n.idx), c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")], d = e("#mCSB_" + n.idx + "_container").find("iframe"); d.length && d.each(function() { e(this).bind("load", function() { A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) { t(e, o) }) }) }), l.bind("mousewheel." + r, function(e, o) { t(e, o) }) } }, R = new Object, A = function(t) { var o = !1, a = !1, n = null; if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a]) return R[a]; if (t) { try { var i = t.contentDocument || t.contentWindow.document; n = i.body.innerHTML } catch (r) { } o = null !== n } else { try { var i = top.document; n = i.body.innerHTML } catch (r) { } o = null !== n } return a !== !1 && (R[a] = o), o }, L = function(e) { var t = this.find("iframe"); if (t.length) { var o = e ? "auto" : "none"; t.css("pointer-events", o) } }, z = function(t, o) { var n = o.nodeName.toLowerCase(), i = t.data(a).opt.mouseWheel.disableOver, r = ["select", "textarea"]; return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus")) }, P = function() { var t, o = e(this), n = o.data(a), i = a + "_" + n.idx, r = e("#mCSB_" + n.idx + "_container"), l = r.parent(), s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]); s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function(o) { c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1) }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function() { c = !1 }).bind("click." + i, function(a) { if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) { Q(o); var i = e(this), s = i.find(".mCSB_dragger"); if (i.parent(".mCSB_scrollTools_horizontal").length > 0) { if (!n.overflowed[1]) return; var c = "x", u = a.pageX > s.offset().left ? -1 : 1, f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width()) } else { if (!n.overflowed[0]) return; var c = "y", u = a.pageY > s.offset().top ? -1 : 1, f = Math.abs(r[0].offsetTop) - u * (.9 * l.height()) } G(o, f.toString(), { dir: c, scrollEasing: "mcsEaseInOut" }) } }) }, H = function() { var t = e(this), o = t.data(a), n = o.opt, i = a + "_" + o.idx, r = e("#mCSB_" + o.idx + "_container"), l = r.parent(); r.bind("focusin." + i, function() { var o = e(document.activeElement), a = r.find(".mCustomScrollBox").length, i = 0; o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? (i + 17) * a : 0, t[0]._focusTimeout = setTimeout(function() { var e = [ae(o)[0], ae(o)[1]], a = [r[0].offsetTop, r[0].offsetLeft], s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)], c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none"; "x" === n.axis || s[0] || G(t, e[0].toString(), { dir: "y", scrollEasing: "mcsEaseInOut", overwrite: c, dur: i }), "y" === n.axis || s[1] || G(t, e[1].toString(), { dir: "x", scrollEasing: "mcsEaseInOut", overwrite: c, dur: i }) }, t[0]._focusTimer)) }) }, U = function() { var t = e(this), o = t.data(a), n = a + "_" + o.idx, i = e("#mCSB_" + o.idx + "_container").parent(); i.bind("scroll." + n, function() { 0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden") }) }, F = function() { var t = e(this), o = t.data(a), n = o.opt, i = o.sequential, r = a + "_" + o.idx, l = ".mCSB_" + o.idx + "_scrollbar", s = e(l + ">a"); s.bind("contextmenu." + r, function(e) { e.preventDefault() }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) { function r(e, o) { i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o) } if (a.preventDefault(), ee(a)) { var l = e(this).attr("class"); switch (i.type = n.scrollButtons.scrollType, a.type) { case "mousedown": case "touchstart": case "pointerdown": case "MSPointerDown": if ("stepped" === i.type) return; c = !0, o.tweenRunning = !1, r("on", l); break; case "mouseup": case "touchend": case "pointerup": case "MSPointerUp": case "mouseout": case "pointerout": case "MSPointerOut": if ("stepped" === i.type) return; c = !1, i.dir && r("off", l); break; case "click": if ("stepped" !== i.type || o.tweenRunning) return; r("on", l) } } }) }, q = function() { function t(t) { function a(e, t) { r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || j(o, e, t) } switch (t.type) { case "blur": n.tweenRunning && r.dir && a("off", null); break; case "keydown": case "keyup": var l = t.keyCode ? t.keyCode : t.which, s = "on"; if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) { if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return; "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l)) } else if (33 === l || 34 === l) { if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) { Q(o); var f = 34 === l ? -1 : 1; if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x", m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width()); else var h = "y", m = Math.abs(c[0].offsetTop) - f * (.9 * d.height()); G(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" }) } } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) { if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x", m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0; else var h = "y", m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0; G(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" }) } } } var o = e(this), n = o.data(a), i = n.opt, r = n.sequential, l = a + "_" + n.idx, s = e("#mCSB_" + n.idx), c = e("#mCSB_" + n.idx + "_container"), d = c.parent(), u = "input,textarea,select,datalist,keygen,[contenteditable='true']", f = c.find("iframe"), h = ["blur." + l + " keydown." + l + " keyup." + l]; f.length && f.each(function() { e(this).bind("load", function() { A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) { t(e) }) }) }), s.attr("tabindex", "0").bind(h[0], function(e) { t(e) }) }, j = function(t, o, n, i, r) { function l(e) { u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount); var o = "stepped" !== f.type, a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60, n = e ? o ? 7.5 : 40 : 2.5, s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)], d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x], m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n), v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount), x = "auto" !== f.scrollAmount ? v : m, _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear", w = !!e; return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), { dir: f.dir[0], scrollEasing: _, dur: a, onComplete: w }), e ? void (f.dir = !1) : (clearTimeout(f.step), void (f.step = setTimeout(function() { l() }, a))) } function s() { clearTimeout(f.step), $(f, "step"), Q(t) } var c = t.data(a), u = c.opt, f = c.sequential, h = e("#mCSB_" + c.idx + "_container"), m = "stepped" === f.type, p = u.scrollInertia < 26 ? 26 : u.scrollInertia, g = u.scrollInertia < 1 ? 17 : u.scrollInertia; switch (o) { case "on": if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && "stepped" === f.type) return; l(m); break; case "off": s(), (m || c.tweenRunning && f.dir) && l(!0) } }, Y = function(t) { var o = e(this).data(a).opt, n = []; return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n }, X = function(t, o) { if (null != t && "undefined" != typeof t) { var n = e(this), i = n.data(a), r = i.opt, l = e("#mCSB_" + i.idx + "_container"), s = l.parent(), c = typeof t; o || (o = "x" === r.axis ? "x" : "y"); var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(), f = "x" === o ? l[0].offsetLeft : l[0].offsetTop, h = "x" === o ? "left" : "top"; switch (c) { case "function": return t(); case "object": var m = t.jquery ? t : e(t); if (!m.length) return; return "x" === o ? ae(m)[1] : ae(m)[0]; case "string": case "number": if (oe(t)) return Math.abs(t); if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100); if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1])); if (-1 !== t.indexOf("+=")) { var p = f + parseInt(t.split("+=")[1]); return p >= 0 ? 0 : Math.abs(p) } if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]); if ("top" === t || "left" === t) return 0; if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1)); if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1)); if ("first" === t || "last" === t) { var m = l.find(":" + t); return "x" === o ? ae(m)[1] : ae(m)[0] } return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0])) } } }, N = function(t) { function o() { return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void (l = null) : void (f[0].autoUpdate = setTimeout(function() { return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void ((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function() { n(this) })) }, c.advanced.autoUpdateTimeout)) } function n(t) { function o(e, t) { return function() { return t.apply(e, arguments) } } function a() { this.onload = null, e(t).addClass(d[2]), r(2) } if (e(t).hasClass(d[2])) return void r(); var n = new Image; n.onload = o(n, a), n.src = t.src } function i() { c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*"); var e = 0, t = f.find(c.advanced.updateOnSelectorChange); return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() { e += this.offsetHeight + this.offsetWidth }), e } function r(e) { clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e) } var l = e(this), s = l.data(a), c = s.opt, f = e("#mCSB_" + s.idx + "_container"); return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o() }, V = function(e, t, o) { return Math.round(e / t) * t - o }, Q = function(t) { var o = t.data(a), n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal"); n.each(function() { Z.call(this) }) }, G = function(t, o, n) { function i(e) { return s && c.callbacks[e] && "function" == typeof c.callbacks[e] } function r() { return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w] } function l() { var e = [h[0].offsetTop, h[0].offsetLeft], o = [x[0].offsetTop, x[0].offsetLeft], a = [h.outerHeight(!1), h.outerWidth(!1)], i = [f.height(), f.width()]; t[0].mcs = { content: h, top: e[0], left: e[1], draggerTop: o[0], draggerLeft: o[1], topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])), leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])), direction: n.dir } } var s = t.data(a), c = s.opt, d = { trigger: "internal", dir: "y", scrollEasing: "mcsEaseOut", drag: !1, dur: c.scrollInertia, overwrite: "all", callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 }, n = e.extend(d, n), u = [n.dur, n.drag ? 0 : n.dur], f = e("#mCSB_" + s.idx), h = e("#mCSB_" + s.idx + "_container"), m = h.parent(), p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0], g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0]; if (s.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) { if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) { var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount; o = V(o, v, c.snapOffset) } switch (n.dir) { case "x": var x = e("#mCSB_" + s.idx + "_dragger_horizontal"), _ = "left", w = h[0].offsetLeft, S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()], b = [o, 0 === o ? 0 : o / s.scrollRatio.x], y = p[1], B = g[1], T = y > 0 ? y / s.scrollRatio.x : 0, k = B > 0 ? B / s.scrollRatio.x : 0; break; case "y": var x = e("#mCSB_" + s.idx + "_dragger_vertical"), _ = "top", w = h[0].offsetTop, S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()], b = [o, 0 === o ? 0 : o / s.scrollRatio.y], y = p[0], B = g[0], T = y > 0 ? y / s.scrollRatio.y : 0, k = B > 0 ? B / s.scrollRatio.y : 0 }b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, { onStart: function() { n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r()) }, onUpdate: function() { n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0])) }, onComplete: function() { if (n.callbacks && n.onComplete) { "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout); var e = h[0].idleTimer || 0; h[0].onCompleteTimeout = setTimeout(function() { i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(x, "hide") }, e) } } }) } }, J = function(e, t, o, a, n, i, r) { function l() { S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call()) } function s() { a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call() } function c() { f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) { return s(), setTimeout(e, .01) }, S.id = h(l) } function d() { null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null) } function u(e, t, o, a, n) { switch (n) { case "linear": case "mcsLinear": return o * e / a + t; case "mcsLinearOut": return e /= a, e--, o * Math.sqrt(1 - e * e) + t; case "easeInOutSmooth": return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t); case "easeInOutStrong": return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t); case "easeInOut": case "mcsEaseInOut": return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t); case "easeOutSmooth": return e /= a, e--, -o * (e * e * e * e - 1) + t; case "easeOutStrong": return o * (-Math.pow(2, -10 * e / a) + 1) + t; case "easeOut": case "mcsEaseOut": default: var i = (e /= a) * e, r = i * e; return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e) } } e._mTween || (e._mTween = { top: {}, left: {} }); var f, h, r = r || {}, m = r.onStart || function() { }, p = r.onUpdate || function() { }, g = r.onComplete || function() { }, v = K(), x = 0, _ = e.offsetTop, w = e.style, S = e._mTween[t]; "left" === t && (_ = e.offsetLeft); var b = o - _; S.stop = 0, "none" !== i && d(), c() }, K = function() { return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime() }, Z = function() { var e = this; e._mTween || (e._mTween = { top: {}, left: {} }); for (var t = ["top", "left"], o = 0; o < t.length; o++) { var a = t[o]; e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1) } }, $ = function(e, t) { try { delete e[t] } catch (o) { e[t] = null } }, ee = function(e) { return !(e.which && 1 !== e.which) }, te = function(e) { var t = e.originalEvent.pointerType; return !(t && "touch" !== t && 2 !== t) }, oe = function(e) { return !isNaN(parseFloat(e)) && isFinite(e) }, ae = function(e) { var t = e.parents(".mCSB_container"); return [e.offset().top - t.offset().top, e.offset().left - t.offset().left] }, ne = function() { function e() { var e = ["webkit", "moz", "ms", "o"]; if ("hidden" in document) return "hidden"; for (var t = 0; t < e.length; t++)if (e[t] + "Hidden" in document) return e[t] + "Hidden"; return null } var t = e(); return t ? document[t] : !1 }; e.fn[o] = function(t) { return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments) }, e[o] = function(t) { return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments) }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function() { e(n)[o](), e.extend(e.expr[":"], { mcsInView: e.expr[":"].mcsInView || function(t) { var o, a, n = e(t), i = n.parents(".mCSB_container"); if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1) }, mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) { var n, i, r, l, s = e(t), c = s.parents(".mCSB_container"), d = "exact" === a[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]]; if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0 }, mcsOverflow: e.expr[":"].mcsOverflow || function(t) { var o = e(t).data(a); if (o) return o.overflowed[0] || o.overflowed[1] } }) }) }) });
/* /_res/plani/core.js */
(function(a) { a.debug = '?mode=' + Math.floor(Math.random() * 10); a.$.info = { isie: navigator.userAgent.toLowerCase().indexOf("trident") != -1 || navigator.userAgent.toLowerCase().indexOf("msie") != -1, ismobile: !(navigator.userAgent.toUpperCase().indexOf("MOBILE") == -1), isipad: !(navigator.userAgent.toUpperCase().indexOf("IPAD") == -1), isgalaxy: !(navigator.userAgent.toUpperCase().indexOf("SHW-M180") == -1), pathinfo: function(u) { var $l = u || location.href, $s = $l.split('/'), $h = /http:/.test($s[0]); return { domain: $h ? $s[2] : location.host, dir: $s.slice($h ? 3 : 0, $s.length - 1).join('/') + '/', self: $s[$s.length - 1].split("?")[0], qry: $s[$s.length - 1].split("?")[1], extension: $s[$s.length - 1].split("?")[0].split('.')[1], referrer: document.referrer } }, get: function(n) { var $q = location.search.substring(1).split('&'); for (key in $q) { if ($q[key].indexOf(n + '=') != -1) return $q[key].substring($q[key].lastIndexOf("=") + 1) }; return '' }, append: function(u) { if (typeof u == 'string') u = [u]; for (key in u) { if (u[key] != '' && typeof $.imports[u[key]] == 'undefined') { $.imports[u[key]] = true; document.write('<script src=' + u[key] + '></script>') } } }, style: function(u) { if (typeof u == 'string') { u = [u] }; for (key in u) { if (u[key] != '' && typeof $.imports[u[key]] == 'undefined') { $.imports[u[key]] = true; document.write("<link rel=stylesheet type=text/css href=" + u[key] + " />") } } } }; a.$.cookie = { time: new Date(), set: function(n, v, expire) { kill = new Date(this.time.getTime() + (expire * 1000)); window.top.document.cookie = n + "=" + v + "; path=/; expires=" + kill.toGMTString(); }, get: function(n) { list = document.cookie.split(";"); for (key in list) { if (typeof list[key] != 'string') { continue }; if (list[key].indexOf(n + '=') != -1) { return list[key].split("=")[1] } }; return false; }, del: function(name) { var kill = new Date(this.time.getTime() - 3600); document.cookie = name + "=0; path=/; expires=" + kill.toGMTString() } } })(window); $.extend(jQuery, { window: $(window), document: $(document), imports: {}, static: {}, module: {}, helper: {}, api: {}, browser: { mozilla: /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase()), webkit: /webkit/.test(navigator.userAgent.toLowerCase()), opera: /opera/.test(navigator.userAgent.toLowerCase()), mise: /msie/.test(navigator.userAgent.toLowerCase()), chrome: /chrome/.test(navigator.userAgent.toLowerCase()) } }); (function($, e, b) { var c = "hashchange", h = document, f, g = $.event.special, i = h.documentMode, d = "on" + c in e && (i === b || i > 7); function a(j) { j = j || location.href; return "#" + j.replace(/^[^#]*#?(.*)$/, "$1") } $.fn[c] = function(j) { return j ? this.bind(c, j) : this.trigger(c) }; $.fn[c].delay = 50; g[c] = $.extend(g[c], { setup: function() { if (d) { return false } $(f.start) }, teardown: function() { if (d) { return false } $(f.stop) } }); f = (function() { var j = {}, p, m = a(), k = function(q) { return q }, l = k, o = k; j.start = function() { p || n() }; j.stop = function() { p && clearTimeout(p); p = b }; function n() { var r = a(), q = o(m); if (r !== m) { l(m = r, q); $(e).trigger(c) } else { if (q !== m) { location.href = location.href.replace(/#.*/, "") + q } } p = setTimeout(n, $.fn[c].delay) } $.browser.msie && !d && (function() { var q, r; j.start = function() { if (!q) { r = $.fn[c].src; r = r && r + a(); q = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() { r || l(a()); n() }).attr("src", r || "javascript:0").insertAfter("body")[0].contentWindow; h.onpropertychange = function() { try { if (event.propertyName === "title") { q.document.title = h.title } } catch (s) { } } } }; j.stop = k; o = function() { return a(q.location.href) }; l = function(v, s) { var u = q.document, t = $.fn[c].domain; if (v !== s) { u.title = h.title; u.open(); t && u.write('<script>document.domain="' + t + '"<\/script>'); u.close(); q.location.hash = v } } })(); return j })() })(jQuery, this); $.extend(String.prototype, { isdate: function() { if (this.split('-').join('').split('/').join('').length < 8) { return false }; return !isNaN(new Date(this.split('-').join('/'))); }, isempty: function() { return this.split(' ').join('') == '' ? true : false }, trim: function() { return this.replace(/^\s*|\s*$/g, ''); }, nl2br: function() { return this.split(/\n/g).join("<br />"); }, strip_tag: function() { return this.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, ''); }, format_number: function() { var t = this, x = t.split('.'), n = x[0].split(',').join(''), l = n.length, r = ''; if (isNaN(n)) { return '' } else { for (var i = l; i > 0; i--) { c = n.charAt(l - i); if (i % 3 == 0 && i != l) r += ','; r += c; }; if (r.substring(0, 2) == '-,') { r = '-' + r.substring(2, r.length) }; return r.toString() + (!isNaN(x[1]) ? '.' + x[1] : '') } }, format_int: function() { var t = this, x = t.split('.'), n = x[0].split(',').join(''); return (isNaN(n) || n == '0') ? '' : n.toString() + (!isNaN(x[1]) ? '.' + x[1] : ''); }, sprintf: function() { var o = this; for (var i = 0; i < arguments.length; i++) { o = o.replace('%s', arguments[i]) }; return o } }); $.extend({ request: function(obj, func) { obj = $.extend({ 'url': '', 'param': {}, 'dataType': 'html', 'type': 'post', 'async': true, 'timeout': 15000 }, obj); $.ajax({ url: obj.url, dataType: obj.dataType, data: obj.param, type: obj.type, async: obj.async, timeout: obj.timeout, success: function(data) { func(data); } }) } }); var langs = {}; function __(string) { if (typeof langs[string] != 'undefined') { return langs[string]; } else { return string; } }
try { $.static = parent.$.static } catch (e) { }
/* /_res/plani/custom.event.js */
jQuery.event.special.swipeleft = jQuery.event.special.swiperight = jQuery.event.special.swipeup = jQuery.event.special.swipedown = {
	setup: function() {
		var target = $(this), pos = { start_x: 0, end_x: 0, start_y: 0, end_y: 0, start_time: 0, end_time: 0 }, sens = { time: 200, term: 180 }
		jQuery.event.add
			(this, 'touchstart.swipe mousedown.swipe', function(e) {
				try { pos.start_x = e.originalEvent.targetTouches[0].pageX; pos.start_y = e.originalEvent.targetTouches[0].pageY; } catch (exceptions) { pos.start_x = e.pageX; pos.start_y = e.pageY; }
				pos.end_x = pos.start_x; pos.end_y = pos.start_y; pos.start_time = pos_end_time = new Date();
			}); jQuery.event.add
				(this, 'touchmove.swipe', function(e) { pos.end_x = e.originalEvent.targetTouches[0].pageX; pos.end_y = e.originalEvent.targetTouches[0].pageY; if (e.originalEvent.scale > 1) { e.originalEvent.preventDefault(); } }); jQuery.event.add
					(this, 'touchend.swipe mouseup.swipe', function(e) {
						try { pos.end_x = e.pageX; pos.end_y = e.pageY; } catch (exceptions) { }
						pos.end_time = new Date(); var term_x = pos.end_x - pos.start_x, term_y = pos.end_y - pos.start_y, abs_x = Math.abs(term_x), abs_y = Math.abs(term_y), term_time = pos.end_time.getTime() - pos.start_time.getTime(), e_type = null; if ((abs_x >= sens.term || abs_y >= sens.term) && term_time >= sens.time) {
							if (abs_x > abs_y) { if (term_x < 0) { e_type = 'swipeleft'; } else { e_type = 'swiperight'; } } else { if (term_y < 0) { e_type = 'swipeup'; } else { e_type = 'swipedown'; } }
							target.trigger(e_type);
						}
					});
	}, teardown: function() { jQuery.event.remove(this, 'touchstart.swipe touchend.swipe touchmove.swipe mousedown.swipe mouseup.swipe'); }
}
/* /_res/plani/custom.prototype.js */
$.fn.hook = function() {
	$('[helper]', $(this)).each
	(function() {
		var target = $(this), call = $(this).attr('helper'), extend_func_name = 'helper_%s'.sprintf(call); try { target.func = $.fn[extend_func_name]; target.func(); }
			catch (e) { console.log('error function : ' + extend_func_name); console.log(e); }
	}); $('[class^=pi-form-]', $(this)).each
		(function() {
			var target = $(this), class_split = $(this).attr('class').split(' '); for (var i = 0; i < class_split.length; i++) {
				if (class_split[i].indexOf('pi-form-') == 0) {
					var call = class_split[i].replace('pi-form-', 'ui_').replace('-', '_'), extend_func_name = call; try { target.func = $.fn[extend_func_name]; target.func(); }
						catch (e) { console.log('undefined function : ' + extend_func_name); }
				}
			}
		})
}
$.fn.keyenter = function(event) {
	$(this).on('keydown', function(e) {
		if (e.which == 13) {
			if (typeof event == 'function') { event(); } else if (typeof event == 'string') { $(this).trigger(event); } else { e.preventDefault(); }
			return false;
		}
	}); return $(this);
}
$.fn.ui_select = function() {
	$(this).each
	(function() {
		var obj = $(this), multiple = $(this).prop('multiple'), width = obj.width(), select = $('<article class=\'pi-form-select-wrap\'><div class=\'opt-btn\' tabindex=\'0\'><span></span><i class=\'fa fa-chevron-down opt-arrow\' aria-hidden=\'true\'></i></div></article>'), input = $('<input />', { 'type': 'text', 'placeholder': __('검색') }), opt = $('<ul class=\'pi-form-select-options\'></ul>'), update = function() { if (multiple == true) { var length = $(':checked', opt).length, first = $(':checked:eq(0)', opt).closest('label').text(); $('span', select).html(length == 1 ? '<span class="block">%s</span> %s '.sprintf(first, __('선택됨')) : (length > 1 ? '<span class="block">%s</span> %s %s %s'.sprintf(first, __('외'), length - 1, __('선택됨')) : length + __('선택됨'))); } else { $('span', select).html($("option:selected", obj).length > 0 ? $("option:selected", obj).text() : $("option:eq(0)", obj).text()); } }
		obj.find('option').each
			(function() { var html = multiple == true && this.value != '' ? '<label><input type=checkbox ' + (this.selected == true ? 'checked' : '') + ' value="' + this.value + '" />' + this.text + '</label>' : (multiple == true && this.value == '' ? '<a class="opt-all choice">[' + __('전체선택') + ']</a> <a class="opt-all cancel">[' + __('전체선택취소') + ']</a>' : this.text); if (this.value != '' || multiple == true) { opt.append($('<li />', { 'tabindex': 0, 'aix_value': this.value, 'class': multiple == true && this.value == '' ? 'all' : '' }).html(html)) } }); select.css('min-width', width + 13)
		if (obj.find('option').length > 6) { select.append(input); opt.css('top', 60) }
		select.append(opt); obj.hide().after(select); update(); $('.opt-btn', select).on
			('click', function() { $('.pi-form-select-wrap').css('z-index', 10); select.css('z-index', 50); $('input[type=text], ul', select).toggle(); }).keyenter('click'); $('li', opt).on
				('click', function(e) {
					var val = $(this).attr('aix_value'); console.log(val); if (multiple == true) {
						if (val == '') { return false; }
						$('option[value=' + val + ']', obj).prop('selected', $(':checkbox', this).prop('checked'));
					} else { $('option[value=' + val + ']', obj).prop('selected', true); $('input[type=text], ul', select).toggle(); }
					update(); obj.trigger('change');
				}).keyenter('click'); $('.choice', opt).on
					('click', function() {
						$('input[type=checkbox]', opt).prop('checked', true).closest('li').trigger('click')
						update();
					}); $('.cancel', opt).on
						('click', function() {
							$('input[type=checkbox]', opt).prop('checked', false).closest('li').trigger('click')
							update();
						}); input.keyenter().on
							('keyup', function() {
								var lis = $('li', opt), match = 0, val = this.value; $('.opt-empty', opt).remove(); if (val == '') { lis.show(); } else {
									lis.each
									(function() { if ($(this).text().indexOf(val) > -1) { $(this).show(); match++; } else { $(this).hide(); } }); if (match == 0) { opt.append('<li class=\'opt-empty\'>' + __('검색 결과가 없습니다') + '</li>'); }
								}
							}); $.window.on
								('click', function(e) { if ($(e.target).closest(select).length == 0) { $('input[type=text], ul', select).hide(); } });
	})
}
$.fn.ui_checkbox = function() {
	$(this).each
	(function() { var obj = $(this); obj.after('<i></i>').parent().addClass('pi-form-label-box checkbox') });
}
$.fn.ui_radio = function() { var obj = $(this); obj.ui_checkbox(); }
$.fn.ui_switch = function() {
	$(this).each
	(function() {
		var obj = $(this); obj.after('<i class=\'xi-switch-off pi-form-switch-btn\' aria-hidden=\'true\'></i>'); obj.on
			('change', function() {
				if (this.checked == true)
					obj.next().removeClass('xi-switch-off').addClass('xi-switch-on'); else
					obj.next().removeClass('xi-switch-on').addClass('xi-switch-off');
			}).trigger('change')
	});
}
$.fn.ui_switch_classic = function() {
	$(this).each
	(function() {
		var obj = $(this), span = obj.closest('label').find('span'), controll = $('<ul />', { 'class': 'pi-form-switch-wrap' }).html("<span class='block' tabindex='0'></span><li class='sw on'>YES</li><li class='sw off'>NO</li><li class='txt'>" + span.text() + "</li>"), block = $('.block', controll); span.remove(); obj.after(controll); obj.on
			('change', function() { block.stop().animate({ 'left': this.checked == true ? 40 : 0 }, 'fast'); }).trigger('change'); block.keyenter(function() { obj.trigger('click'); });
	});
}
$.fn.ui_swap = function(params, callback) {
	var params = $.extend
		({ 'Yes': ['TEXT', "RGB16"], 'No': ['TEXT', "RGB16"] }, params); $(this).each
			(function() {
				var obj = $(this), text = obj.text().trim(), icons = typeof params[text] != 'undefined' ? params[text] : ['<i class=\'fa fa-question-circle-o\'></i>', '#444']; obj.attr('value', text).css('color', icons[1]).html(icons[0]); obj.on('click', function() {
					if (typeof this.href != 'undefined') {
						var form = $(this).closest('form'); obj.html('<i class=\'fa fa-spinner fa-spin font20\'></i>'); $.request
							({ 'url': this.href, param: form.serialize() + '&value=' + obj.attr('value') }, function(text) { icons = typeof params[text] != 'undefined' ? params[text] : ['<i class=\'fa fa-question-circle-o\'></i>', '#444']; obj.attr('value', text).css('color', icons[1]).html(icons[0]); if (typeof callback == 'function') { callback(obj, text); } });
					}
					return false;
				});
			});
}
$.fn.helper_datepicker = function(params) {
	var params = $.extend
		({ dateFormat: 'yy-mm-dd', changeMonth: true, changeYear: true, regional: 'ko', minDate: null, maxDate: null, yearRange: 'c-60:c+10' }, params); $(this).each
			(function() {
				var obj = $(this), button = $('<button />', { 'type': 'button', 'class': 'pi-btn pi-icon month right-import' }); try {
					if (obj.hasClass('hasDatepicker') == true) { obj.removeClass('hasDatepicker').removeAttr('id'); } else {
						button.insertBefore(obj).on
						('click', function() { obj.focus(); });
					}
					obj.datepicker(params); obj.addClass('right-import-input').on
						('change', function() { if (this.value.isdate() == false && this.value != '') { obj.attr('placeholder', 'Not the date format.').val(''); } else { obj.attr('placeholder', ''); } })
				} catch (e) { }
			})
}
$.fn.helper_datepicker_classic = function(params) {
	var params = $.extend
		({ dateFormat: 'yy-mm-dd', timeFormat: 'HH:mm:ss', changeMonth: true, changeYear: true, regional: 'ko', minDate: null, maxDate: null, yearRange: 'c-60:c+10' }, params); $(this).each
			(function() {
				var obj = $(this); if (obj.hasClass('hasDatepicker') == true) { obj.removeClass('hasDatepicker').removeAttr('id') } else { obj.after('<span class="pi-icon month pi-helper-datepicker-icon hidden2"></span>') }
				if (this.value.indexOf(':') > -1) { obj.datetimepicker(params); } else { obj.datepicker(params); }
				obj.on
					('blur', function() { if (this.value.isdate() == false && this.value != '') { obj.attr('placeholder', 'Not the date format.').val(''); } else { obj.attr('placeholder', ''); } })
			})
}
$.fn.helper_colorpicker = function() {
	if ($('#colorpicker').length == 0) { color_layer = $('<span />', { 'class': 'pi-helper-colorpicker', 'id': 'colorpicker' }).appendTo('body'); } else { color_layer = $('#colorpicker'); }
	$(this).each
		(function() {
			var obj = $(this); obj.addClass('pi-helper-colorpicker-input cursor-hand').attr('readonly', true).css({ 'background-color': obj.val() }).on
				('click', function() {
					var offset = obj.offset(), width = obj.innerWidth(), height = obj.outerHeight(), colorpicker = $.farbtastic('#colorpicker'); colorpicker.linkTo(obj[0]); colorpicker.linkTo(function(color) { var font_color = colorpicker.hsl[2] > 0.5 ? '#000000' : '#ffffff'; obj.val(color).css({ 'background-color': color, 'color': font_color }); }); $('.sl-marker', color_layer).one
						('mouseup', function() { color_layer.fadeOut(); }); color_layer.css({ 'left': (offset.left + width + 20), 'top': (offset.top - 80) }).fadeIn();
				});
		});
}
$.fn.helper_tooltip = function(params) {
	var params = $.extend
		({ color: '', message: '', open: false, form_element: false }, params); $(this).each
			(function() {
				var obj = $(this), message = params.message || obj.attr('title'), tip_layer = this.tip_layer || $('<span />', { 'class': 'pi-helper-tooltip %s'.sprintf(params.color) }).html('<div class="triangle"></div><div class="message"></div>').appendTo('body')
				this.tip_layer = tip_layer; obj.addClass('cursor-hand').on
					('mouseenter focus focus_event', function(e) {
						var offset = obj.offset(), width = obj.innerWidth(), height = obj.outerHeight(); if (typeof obj.data('tooltip-title') == 'undefined') { obj.data('tooltip-title', message); obj.removeAttr('title'); }
						if (obj.data('tooltip-title') != '') { var left = offset.left; var top = offset.top; $('.message', tip_layer).html(obj.data('tooltip-title')); tip_layer.css({ 'left': left - (tip_layer.width() / 2) + (width / 2), 'top': top + ((tip_layer.height() + 25) * -1) }).fadeIn(); }
					}).on
					('mouseleave blur', function(e) { tip_layer.stop().hide(); }); if (params.form_element == true) { obj.off('mouseenter mouseleave'); }
				if (params.open == true) { obj.trigger('focus_event'); }
			});
}
$.fn.helper_number = function(params) {
	var params = $.extend
		({ min: -1000000, max: 1000000, comma: false }, params); $(this).each
			(function() {
				var obj = $(this); obj.css('ime-mode', 'disabled').on
					('keydown', function(e) {
						var keycode = e.keyCode; if (e.ctrlKey == true && keycode == 86)
							return true; if (new String('/8/9/16/35/36/37/39/46/109/189/110/190').split('/' + keycode.toString() + '/').length == 2)
							return true; if (keycode >= 48 && keycode <= 57)
							return true; if (keycode >= 96 && keycode <= 105)
							return true; return false;
					}).on
					('keyup', function() {
						var num_val = this.value.split(',').join(''); val = parseInt(num_val); if (this.value != '-') {
							if (isNaN(num_val) == true) { num_val = 0; }
							if (val < params.min)
								num_val = params.min; if (val > params.max)
								num_val = params.max; if (params.comma == true)
								num_val = num_val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
						}
						this.value = num_val;
					}).on
					('focusout', function() { if (this.value == '-' || this.value == '') { this.value = 0; } });
			})
}
$.fn.helper_number_comma = function(params) {
	var params = $.extend
		({ max: 10000000000, comma: true }, params); $(this).helper_number(params);
}
$.fn.helper_clone = function(params) {
	var params = $.extend
		({}, params); $(this).each
			(function() {
				var obj = $(this), lis = $('li', obj)
				obj.addClass('pi-helper-clone').sortable
					({ forcePlaceholderSize: true, placeholder: 'placeholder', items: 'li', opacity: .8, tabSize: 25, axis: 'y', start: function(e, ui) { $(ui.helper).addClass('draging'); }, stop: function(e, ui) { $('.draging').removeClass('draging'); } }); lis.append('<a href="#" class="plus prefix-input"><i class="fa fa-plus"></i></a><a href="#" class="minus prefix-input"><i class="fa fa-minus"></i></a>'); obj.delegate
						('.plus', 'click', function() { var li = $(this).closest('li'), copy = li.clone(); copy.attr('class', '').find('input[type=text], input[type=hidden], textarea, select').attr('readonly', false).val(''); copy.hook(); li.after(copy.hide().fadeIn()); return false; }).delegate
						('.minus', 'click', function() {
							var li = $(this).closest('li'); if (confirm(__('삭제 하시겠습니까?')) == true) { li.fadeOut(function() { $(this).remove(); }); }
							return false;
						});
			});
}
$.fn.helper_disabled = function(params) {
	var params = $.extend
		({ target: null }, params); $(this).each
			(function() {
				var obj = $(this), prev = params.target || (obj.parent().get(0).tagName == 'LABEL' ? obj.parent().prev() : obj.prev()); obj.on
					('click', function() { prev.prop('disabled', !this.checked).focus(); })
			})
}
$.fn.helper_ajax = function(params) {
	var params = $.extend
		({ url: null, callback: function(target, data) { var container = target.next().hasClass('pi-helper-ajax-result') == true ? target.next() : $('<span />', { 'class': 'pi-helper-ajax-result' }).insertAfter(target); container.html(data); } }, params); $(this).each
			(function() {
				var obj = $(this), url = params.url || obj.attr('helper-url'), form = obj.closest('form'); obj.on
					('keyup', function() {
						$.request
						({ 'url': url, param: form.serialize() }, function(data) { params.callback(obj, data); });
					});
			})
}
$.fn.helper_submit = function() {
	$(this).each
	(function() {
		var obj = $(this), form = obj.closest('form'); obj.on
			('change', function() { form.submit(); })
	})
}
/* /_res/plani/i18n/ko.js */
langs = {}
/* /_res/plani/module.js */
$.module['form'] = function(platform, options) {
	this.platform = platform.eq(0); this.file = platform.attr('enctype') == 'multipart/form-data'; this.options = $.extend
		({ 'ajax': true, 'error': null, 'success': null, 'before': null, 'message': __('처리 되었습니다'), 'jgrow': false, 'auto_focus': true, 'page_exit': false, 'page_exit_check': true }, options); this.__construct();
}
$.extend
	($.module['form'].prototype, {
		__construct: function() {
			var $this = this; $this.platform.addClass('plani-form').prepend('<div class="alert-error"></div><div class="alert-success"></div>').end().on
				('submit', function() {
					$this.options['page_exit_check'] = true; if ($this.options['before'] instanceof Function) { if ($this.options['before']($this) != true) { return false; } }
					if ($this.options['ajax'] == true) { $this.request(); return false; }
				}); $('.submit', $this.platform).on('click', function() { $this.platform.submit(); return false; }); $this.platform.hook(); if ($this.options['page_exit'] == true) {
					$.window.on
					('beforeunload', function() { if ($this.options['page_exit_check'] == false) { $this.platform.trigger('editor_update'); if ($('[detect-check=false]', $this.platform).length > 0) { return __('변경사항이 저장되지 않았을 수 있습니다.'); } } }); $this.detect();
				}
		}, request: function() {
			var $this = this; $this._disposal(true); $this.platform.ajaxSubmit
				({
					data: { HTTP_X_REQUESTED_WITH: 'XMLHttpRequest' }, beforeSubmit: function(a, f, o) { o.dataType = 'html' }, success: function(msg) {
						var msgSplit = msg.split('::'), arg1 = 'failed', arg2 = ''; if (msgSplit[0] == 'true') { arg1 = 'true'; arg2 = msgSplit[1] ? msgSplit[1] : ''; } else if (msgSplit.length > 1) { arg1 = msgSplit[0]; arg2 = msgSplit[1]; } else { arg2 = msgSplit[0]; }
						$this.response(arg1, arg2);
					}
				});
		}, response: function(result, msg) {
			var $this = this
			if (result != 'failed') { if ($this.options['jgrow'] == true) { $this._jgrow_success(result, msg); } else { $this._success(result, msg); } } else { $this.options['page_exit_check'] = false; if ($this.options['jgrow'] == true) { $this._jgrow_error(msg); } else { $this._error(msg); } }
		}, detect: function() {
			var $this = this; $('input[type=text], input[type=radio], input[type=checkbox], select, textarea', $this.platform).each
				(function() {
					var choice_mode = this.type == 'radio' || this.type == 'checkbox'
					$(this).attr('detect', choice_mode == true ? this.checked : this.value).attr('detect-check', 'true').on
						('change', function() { var detect = $(this).attr('detect'), v = choice_mode == true ? this.checked : this.value; $this.options['page_exit_check'] = false; $(this).attr('detect-check', detect == v.toString()); });
				});
		}, _disposal: function(method) {
			var $this = this; if (method == true) { $('.alert-error', this.platform).html(''); $('.alert-success', this.platform).html(''); }
			$(':image, :submit, .submit', $this.platform).each
				(function() { if (this.tagName == 'BUTTON') { if (method == true) { $(this).attr('disabled', true).find('span').hide().end().append('<span class="saveing"><i class="xi-spinner-3 xi-spin"></i> &nbsp;&nbsp;' + __('처리중') + '</span>'); } else { $(this).attr('disabled', false).find('span').eq(0).show().end().eq(1).remove(); } } else { if (method == true) { $(this).hide().after('<span class="saveing"><i class="xi-spinner-3 xi-spin"></i> &nbsp;&nbsp;' + __('처리중') + '...</span>'); } else { $(this).show().next().remove(); } } });
		}, _focus: function(msg) {
			var focus = msg.match(/<!--focus>(.+)<\/focus-->/g), p = msg.match(/<p>(.+)<\/p>/g); try {
				for (var i = 0; i < focus.length; i++) {
					var item = focus[i].match(/<!--focus>(.+)<\/focus-->/), obj = $('[name=' + item[1] + ']'); if (obj.length > 0) {
						try { var text = p[i].match(/<p>(.+)<\/p>/), text_message = text[1].split(' : '); obj.eq(0).addClass('tooltip').helper_tooltip({ message: text_message[1], open: false, form_element: true }); }
						catch (e) { }
						if (i == 0) { obj.focus(); }
					}
				}
			} catch (e) { }
		}, _success: function(result, msg) {
			var $this = this, msg = msg != '' ? msg : this.options['message']; $('.alert-success', this.platform).html('<p>' + this.options['message'] + '</p>').fadeIn().find('p').append('<i class="fa fa-times"></i>').find('i').on
				('click', function() { $(this).closest('p').remove(); }); setTimeout
					(function() { $this._process(msg, true); }, 1000);
		}, _error: function(msg) {
			if (msg.indexOf('</p>') < 0) { msg = '<p>' + msg + '</p>'; }
			$('.alert-error', this.platform).html(msg).fadeIn('slow').find('p').append('<i class="fa fa-times"></i>').find('i').one
				('click', function() { $(this).closest('p').remove(); }); this._process(msg, false); this._disposal(false); this._focus(msg);
		}, _jgrow_success: function(result, msg) {
			var $this = this; var $this = this, msg = msg != '' && result != 'redirect' ? msg : this.options['message']; $.jGrowl
				($this.options['message'], {
					life: 1000, header: 'SUCCESS', close: function(e, m) { $this._process(msg, true); }
				});
		}, _jgrow_error: function(msg) {
			var $this = this; $.jGrowl
				(msg, {
					life: 2000, header: 'ERROR', close: function(e, m) { $this._process(msg, false); $this._disposal(false); $this._focus(msg); }
				});
		}, _process: function(msg, issuccess) {
			if (issuccess == true) {
				if (typeof this.options['success'] == 'function') {
					this.options['success']
					(this, msg);
				} else { location.reload(); }
			} else {
				if (typeof this.options['error'] == 'function') {
					this.options['error']
					(this, msg);
				}
			}
		}
	}); $.static.modal = null; $.module['modal'] = function(platform, options) {
		this.platform = platform; this.layer = null; this.bg = null; this.selector = null; this.selector_size = { width: 0, heigth: 0 }; this.timer = null; this.status = { 'open': false, 'mode': 'img', 'index': 0 }
		this.options = $.extend
			({ 'title': 'untitle', 'start': false, 'close': true, 'iframe': false, 'width': 'auto', 'destory': false, 'onclose': function() { } }, options); if (typeof this.platform == 'string') { this.platform = $('<a />', { 'href': this.platform }); this.options.start = true; this.options.destory = true; }
		this.layer = $('.plani-modal'); this.bg = $('.plani-modal-bg'); this.progress = $('.plani-modal-progress'); this.__layout(); this.__construct();
	}
$.extend
	($.module['modal'].prototype, {
		__layout: function() {
			if (this.layer.length < 1) { this.layer = $('<div />', { 'class': 'plani-modal', 'tabindex': 0 }).html('<div class="modal-title"></div><div class="modal-frame"></div><iframe src="about:blank" class="modal-iframe" title="modal-iframe" />').appendTo('body'); }
			if (this.bg.length < 1) { this.bg = $('<div />', { 'class': 'plani-modal-bg' }).appendTo('body'); }
			if (this.progress.length < 1) { this.progress = $('<i />', { 'class': 'xi-spinner-1 xi-spin plani-modal-progress' }).appendTo(this.bg); }
		}, __construct: function() {
			var $this = this; $this.platform.on
				('click', function() {
					if (this.tagName == 'IMG') { $this._imagebox(this); } else { $this._pagebox(this); }
					return false;
				}); $this.bg.on
					('click', function() { if ($this.options.close == true) { $this.end(); } }); $this.layer.undelegate('.close-button', 'click').delegate
						('.close-button', 'click', function() { $this.end(); return false; }).undelegate('.prev-button', 'click').delegate
						('.prev-button', 'click', function() { $this.change($this.status.index - 1); return false; }).undelegate('.next-button', 'click').delegate
						('.next-button', 'click', function() { $this.change($this.status.index + 1); return false; }); $.window.on
							('keydown', function(e) { if (e.which == 27 && $this.status.open == true) { $this.end(); return false; } }).on
							('resize', function() {
								if ($this.status.open == true) {
									var size = $this._resize($this.selector); $this.layer.stop().animate
										({ 'left': size.end.left, 'top': size.end.top, 'min-width': size.width, 'min-height': size.height, 'max-width': size.width }, 'normal');
								}
							}).on
							('load', function() {
								if ($this.status.open == true) {
									var size = $this._resize($this.selector); $this.layer.stop().animate
										({ 'left': size.end.left, 'top': size.end.top, 'min-width': size.width, 'min-height': size.height, 'max-width': size.width }, 'normal');
								}
							}); if (this.options.start == true) { $this.platform.eq(0).trigger('click'); }
		}, _pagebox: function(obj) {
			var $this = this, img = new Image(), iframe = $('.modal-iframe', $this.layer), frame = $('.modal-frame', $this.layer), iframe_src = iframe.attr('src'), obj_src = obj.getAttribute('href') + '/layout/modal'; $this.bg.fadeIn('slow'); $this.status.open = true; $this.status.mode = 'iframe'; frame.hide(); iframe.hide(); title = $this.options.title; if (title == 'untitle' && $(obj).attr('title') != '') { title = $(obj).attr('title'); }
			$('.modal-title', $this.layer).html(title + $this._panel(obj)); if ($this.options.iframe == true) {
				iframe.css({ 'height': 'auto' }).attr('src', obj_src).off('load').on
				('load', function() {
					var frame = $(this), framebody = $(this.contentWindow.document); $this.layer.css({ 'width': $this.options.width + 20 }).show(); frame.show(); img.width = $this.options.width == 'auto' ? framebody.width() : $this.options.width; img.height = framebody.height() + 50; frame.hide(); $('body', framebody).css('overflow', 'hidden'); $this.open
						($this._resize(img, true), true, function() {
							$this.timer = setInterval
								(function() { iframe.stop().animate({ 'height': framebody.height() }, 'fast'); }, 100);
						});
				})
			} else {
				$.post
				(obj.getAttribute('href'), {}, function(data) {
					var target = $('.modal-frame', $this.layer); target.html(data); $this.timer = setTimeout
						(function() {
							img.width = $this.options.width == 'auto' ? target.width() : $this.options.width; img.height = target.height(); $this.layer.css({ 'width': img.width + 20 }).show(); $this.open
								($this._resize(img, true));
						}, 500);
				});
			}
		}, _imagebox: function(obj) {
			var $this = this, img = $('<img />', { 'src': obj.getAttribute('src'), 'alt': obj.getAttribute('alt') || $this.options.title }), frame = $('.modal-frame', $this.layer); $this.bg.fadeIn('slow'); $this.status.open = true; $this.status.mode = 'img'; frame.hide(); img.off('load').on
				('load', function() {
					$this.open
					($this._resize(this, true));
				}); $this.layer.focus(); $('.modal-frame', $this.layer).html(img); $('.modal-title', $this.layer).html(img.attr('alt') + $this._panel(obj));
		}, _resize: function(obj, isnew) {
			var width = isnew == true ? obj.width : this.selector_size.width, height = isnew == true ? obj.height : this.selector_size.height, maxWidth = $.window.width(), maxHeight = $.document.height(), layer = this.layer, resize = { width: 0, height: 0, start: {}, end: {} }, margin = 50; if (height <= 0) { height = 150; }
			resize.width = width > maxWidth - margin ? maxWidth - margin : width; if (resize.width < 150) { resize.width = 150; }
			resize.height = Math.round(height - height * 0.01 * Math.round((width - resize.width) / (width * 0.01))); if (resize.height > (maxHeight - margin - 100) && this.status.mode == 'img') { resize.height = (maxHeight - margin - 100); resize.width = Math.round(width - width * 0.01 * Math.round((height - resize.height) / (height * 0.01))); }
			resize.start.width = layer.width(); resize.start.height = layer.height(); resize.start.left = ((maxWidth - layer.width()) / 2); resize.start.top = ((maxHeight - layer.height()) / 3) + $.window.scrollTop(); resize.end.left = ((maxWidth - resize.width) / 2); resize.end.top = ((maxHeight - resize.height) / 3) + $.window.scrollTop(); if (resize.end.top < 50) { resize.end.top = 50; }
			if (isnew == true) { this.selector = obj; this.selector_size.width = width; this.selector_size.height = height; }
			return resize;
		}, _panel: function(obj) {
			var text = [], size = this.platform.length, index = this.platform.index(obj) + 1; text.push('<span class="modal-panel-close"><a href="#" class="close-button"><i class="xi-close-circle bg-radius"></i></a></span>'); if (size > 1) {
				text.push('<span class="modal-panel">'); if (index > 1) { text.push('<i class="fas fa-chevron-circle-left prev-button"></i>'); }
				text.push(' <span style="padding:0px 4px"> file of ' + size + ' / ' + index + '</span> '); if (index < size) { text.push('<i class="fas fa-chevron-circle-right next-button"></i>'); }
				text.push('</span>');
			}
			this.status.index = index - 1; return text.join('');
		}, open: function(size, iframemode, callback) {
			var $this = this; $.static.modal = $this; $('.modal-title', $this.layer).hide(); $this.layer.css({ 'left': size.end.left, 'top': size.end.top, 'min-width': size.width, 'min-height': size.height, 'max-width': size.width }).animate
				({ 'opacity': 'show' }, 'normal', function() {
					$(this).animate({ 'top': size.end.top }); if (iframemode == true) { $('.modal-iframe', $this.layer).height(size.height).fadeIn('fast', function() { if (typeof callback == 'function') { callback(); } }) } else { $('.modal-frame', $this.layer).fadeIn('fast'); }
					$this.layer.focus(); $('.modal-title', $this.layer).show(); $this.progress.hide();
				}); if ($.window.width() < size.start.width) {
					var size = $this._resize($this.selector); $this.layer.css
						({ 'left': size.end.left, 'top': size.end.top, 'min-width': size.width, 'min-height': size.height, 'max-width': size.width });
				}
		}, end: function() {
			this.bg.stop().fadeOut(); this.layer.stop().fadeOut(); this.progress.show(); this.status.open = false; this.platform.focus(); if (typeof this.timer != 'undefined') { clearInterval(this.timer); this.timer = null; }
			if (typeof this.options.onclose == 'function') { this.options.onclose(); if (this.options.destory == true) { this.options.onclose = null; } }
			try { clearInterval(this.timer); }
			catch (e) { }
		}, change: function(index) {
			this.layer.stop().hide(); this.progress.show(); this.status.open = false; if (typeof this.timer != 'undefined') { clearInterval(this.timer); this.timer = null; }
			if (typeof index == 'string') { $('.modal-iframe', this.layer).attr('src', index) } else { this.platform.eq(index).trigger('click'); }
		}
	}); $.module['print'] = function(platform, options) {
		this.platform = platform; this.options = $.extend
			({ 'layer': 'body', 'javascript': false, 'style': true }, options); this.iframe = $('.plani-print-iframe'); this.__layout(); this.__construct();
	}
$.extend
	($.module['print'].prototype, {
		__layout: function() { if (this.iframe.length < 1) { this.iframe = $('<iframe src="about:blank" class="plani-print-iframe">').insertBefore('body'); } }, __construct: function() {
			var $this = this; $this.platform.on
				('click', function() { $this.area_print(); });
		}, area_print: function() {
			var $this = this, head_clone = $('head').clone(), body_clone = $($this.options.layer), doc = []; if ($this.options.javascript == false) { head_clone.find('script').remove(); body_clone.find('script').remove(); }
			if ($this.options.style == false) { head_clone.find('link, style').remove(); body_clone.find('link, style').remove(); }
			doc.push('<!doctype html>'); doc.push('<html lang="ko-KR">'); doc.push('<head>'); doc.push(head_clone.html()); doc.push('</head>'); doc.push('<body>'); doc.push(body_clone.html()); doc.push('</body>'); doc.push('</html>'); var framebody = $this.iframe.get(0).contentWindow.document; with (framebody) { designMode = 'on'; open(); writeln(doc.join('')); close(); }
			$this.iframe.one('load', function() { framebody.body.focus(); framebody.execCommand('print', 0, 0); try { $.static.modal.end(); } catch (e) { } });
		}
	}); $.module['nested.sortable'] = function(platform, options) {
		this.platform = platform; this.ol = $('ol:eq(0)', platform); this.begin = false; this.removesData = []; this.not_visible_remove = true; this.options = $.extend
			({ 'title': '', 'obj': { 'group': $('button:eq(0)', platform), 'message': $('.message', platform) }, 'item-level': 3, 'item-name': '그룹메뉴', 'item-sub-name': '서브메뉴', 'item-id': 0, 'isAllowed': function() { return true; }, 'axis': 'xy', 'submit_jgrow': true, 'submit_success': null, 'event': { 'click': null } }, options); this.__construct();
	}
$.extend
	($.module['nested.sortable'].prototype, {
		__construct: function() {
			var $this = this; $this.platform.addClass('plani-nested-wrap'); if (this.options.title != '') { $this.platform.prepend('<h2 class="title">' + this.options.title + '</h2>'); }
			new $.module['form']
				($this.platform, { before: function(module) { $this._serialize(); return true; }, success: function(module, result) { $this.options.obj.message.hide(); module._disposal(false); if (typeof $this.options.submit_success == 'function') { console.log('d'); $this.options.submit_success(module); } }, jgrow: $this.options.submit_jgrow }); $this.options.obj.group.on
					('click', function() { $this._import_group(); }); $this.ol.delegate
						('div', 'mouseenter', function() {
							if ($(this).hasClass('not-remove') == false) {
								$('<i class="fa fa-times tmp-button" style="right:14px"></i>').appendTo(this).on
								('click', function() { $this._remove(this); });
							}
							if ($(this).parents('ol').length < $this.options['item-level']) {
								$('<i class="fa fa-plus tmp-button" style="right:34px"></i>').appendTo(this).on
								('click', function() { $this._import(this); });
							}
						}).delegate
						('div', 'mouseleave', function() { $('.tmp-button', this).remove(); }).delegate
						('div', 'click', function(e) { if (e.target == this || $(e.target).hasClass('tmp-button') == false) { $this._hook('click', this); } }).delegate
						('div', 'dblclick', function(e) { if (e.target.tagName.toLowerCase() == 'span') { var target = $('span', this); $(this).find('.tmp-button').remove(); target.html('<input type="text" value="' + target.text().trim() + '"/>').find('input').focus().one('focusout', function() { var value = $(this).val().replace(/[\+]/g, '＋'); target.text(value ? value : 'Empty'); }).keyenter('focusout'); } }); $this.ol.nestedSortable
							({ axis: $this.options['axis'], isAllowed: $this.options['isAllowed'], forcePlaceholderSize: true, handle: '.move', helper: 'clone', items: 'li', opacity: .8, placeholder: 'placeholder', revert: 250, tabSize: 25, tolerance: 'pointer', toleranceElement: '> div', maxLevels: $this.options['item-level'], isTree: true, expandOnHover: 700, startCollapsed: true, complate: function() { $this._depth(); } }); $this._depth();
		}, _depth: function() {
			var $this = this, target = $('li', $this.platform); setTimeout
				(function() {
					if ($this.not_visible_remove == true) { $('li:not(:visible)', $this.ol).remove(); }
					target.each
						(function() {
							var icon = $(this).has('li').length > 0 ? 'fa-folder-open' : 'fa-folder', div = $('div:eq(0)', this); if ($('.move', div).length < 1) { div.html('<i class="far fa-eye-slash"></i><i class="far ' + icon + ' move"></i><span>' + div.text() + '</span>'); } else { $('.move', div).attr('class', 'far ' + icon + ' move'); }
						}); if ($this.begin == true) { $this.options.obj.message.show(); }
					if ($this.begin == false) { $this.begin = true; }
				}, 300)
		}, _import_group: function() { var $this = this, target = $this.ol, newid = $this._latest(); target.append('<li id="list_' + newid + '"><div class="new">' + $this.options['item-name'] + '</div></li>'); $this._depth(); }, _import: function(obj) {
			var $this = this, target = $(obj).closest('li'), newid = $this._latest(); if (target.is(':has(> ol)') == false) { target = $('<ol />').appendTo(target); } else { target = target.find('> ol'); }
			target.append('<li id="list_' + newid + '"><div class="new">' + $this.options['item-sub-name'] + '</div></li>'); $this._depth();
		}, _latest: function() {
			var no = parseInt(this.options['item-id']); $('li', this.platform).each
				(function() { var id = parseInt(this.id.replace('list_', '')); if (id > no) { no = id; } }); return no + 1;
		}, _remove: function(obj) {
			var $this = this; $(obj).closest('li').slideUp
				(function() {
					$this.removesData.push(this.id.replace('list_', '')); $(this).find('li').each
						(function() { if (typeof this.id != 'undefined') { $this.removesData.push(this.id.replace('list_', '')); } })
					$(this).remove(); $this._depth();
				});
		}, _serialize: function() {
			var $this = this, serialized = $this.ol.nestedSortable('serialize').split('&'), hash = []
			$('.postdata', $this.platform).remove(); postdata = $('<div />', { 'class': 'postdata' }).appendTo($this.platform); for (var i = 0; i < serialized.length; i++) {
				if (serialized[i] == '') { continue; }
				var item = serialized[i].replace('list[', '').split(']='), id = item[0], pid = item[1] == 'null' ? 0 : item[1], text = $('#list_' + id + ' > div', $this.ol).text().trim(), sort = 1, str = ''
				if (typeof hash[pid] == 'undefined') { hash[pid] = 1; } else { hash[pid] += 1; }
				sort = hash[pid]; postdata.append($('<input />', { 'type': 'hidden', 'name': 'sitemap[' + id + '][id]', 'value': id })); postdata.append($('<input />', { 'type': 'hidden', 'name': 'sitemap[' + id + '][pid]', 'value': pid })); postdata.append($('<input />', { 'type': 'hidden', 'name': 'sitemap[' + id + '][text]', 'value': text })); postdata.append($('<input />', { 'type': 'hidden', 'name': 'sitemap[' + id + '][sort]', 'value': sort }));
			}
			for (var i = 0; i < $this.removesData.length; i++) { postdata.append($('<input />', { 'type': 'hidden', 'name': 'sitemap_remove[]', 'value': $this.removesData[i] })); }
		}, _hook: function(action, target) {
			if (typeof this.options.event[action] == 'function') { this.options.event[action](target); }
		}
	}); $.module['nested.tree'] = function(platform, options) {
		this.platform = platform; this.ul = $('ul', platform); this.options = $.extend
			({ 'title': 'nodes', 'open': false }, options); this.__construct();
	}
$.extend
	($.module['nested.tree'].prototype, {
		__construct: function() {
			var $this = this; $this.platform.addClass('plani-tree-wrap'); if (this.options.title != '') { $this.platform.prepend('<h2 class="title">' + this.options.title + '</h2>'); }
			$this.ul.each
				(function() {
					var li = $(this).find('>li'); li.each
						(function() { $(this).prepend($(this).is(':has(ul)') == true ? '<span class="plus button"></span><span class="folder"></span>' : '<span class="page"></span>'); }); li.eq(-1).addClass('joinend');
				}); $('li:has(ul) .button', $this.ul).on
					('click', $this._open); if (this.options.open == true) { $('li:has(ul) .button', $this.ul).trigger('click'); }
		}, _open: function(e) {
			var target = $(this).closest('li'), ul = target.find('>ul'), span = target.find('span'), hide = ul.is(':hidden'); if (hide == true) { ul.show(); } else { ul.hide(); }
			span.eq(0).attr('class', hide ? 'minus' : 'plus').end().eq(1).attr('class', hide ? 'folder-open' : 'folder');
		}
	}); $.module['animate.flip'] = function(platform, options) {
		this.platform = platform; this.btn = { 'flip': $('.flip', platform), 'unflip': $('.unflip', platform) }
		this.layer = { 'front': $('.front', platform), 'back': $('.back', platform) }
		this.queue = true; this.options = $.extend
			({ trigger: 'menual', reverse: true, axis: 'y' }, options); this.__construct();
	}
$.extend
	($.module['animate.flip'].prototype, {
		__construct: function() {
			var $this = this
			$this.platform.addClass('plani-flip').flip($this.options); $this.btn.flip.on
				('click', function() { $this._flip(); }); $this.btn.unflip.on
					('click', function() { $this._unflip(); }); setInterval
						(function() { var layer = $this.queue == true ? $this.layer.front : $this.layer.back; $this.platform.height(layer.height()) }, 100); $this._unflip();
		}, _flip: function() { this.queue = false; this.platform.flip(true); this.layer.back.css('opacity', '1'); this.layer.front.css('opacity', '0'); }, _unflip: function() { this.queue = true; this.platform.flip(false); this.layer.front.css('opacity', '1'); this.layer.back.css('opacity', '0'); }
	}); $.module['animate.tabs'] = function(platform, options) {
		this.platform = platform; this.btn = $(' > ol > li', platform); this.layer = $(' > div', platform); this.options = $.extend
			({ start: '0', prefix: '<i class="fa fa-angle-right" aria-hidden="true"></i>' }, options); this.__construct();
	}
$.extend
	($.module['animate.tabs'].prototype, {
		__construct: function() {
			var $this = this; $this.btn.attr('tabindex', 0); $this.btn.prepend($this.options.prefix); $this.btn.on
				('click', function(e) { var no = $this.btn.index(this); $this.btn.removeClass('on').eq(no).addClass('on'); $this.layer.hide().eq(no).fadeIn('fast'); }).keyenter('click').eq($this.options.start).trigger('click');
		}
	}); $.module['animate.scroll'] = function(platform, options) { var $this = this; $this.platform = platform; $.window.on('load', function() { $this.fix = $this.platform.position().top; $this.__construct(); }); }
$.extend
	($.module['animate.scroll'].prototype, {
		__construct: function() {
			var $this = this; $.window.on
				('scroll', function() {
					var top = $(document).scrollTop(), move = top > $this.fix ? (top - $this.fix) : 0; console.log($.window.height()); if ($.window.height() > ($this.platform.height() + 100) || move == 0) {
						$this.platform.stop().animate
						({ 'top': move });
					}
				}).on
				('resize', function() { $this.platform.css('top', 0); $.window.trigger('scroll'); }); setTimeout(function() { $.window.trigger('scroll'); }, 100)
		}
	}); $.module['board.lists'] = function(platform, options) {
		this.platform = platform; this.options = $.extend
			({ 'layer': '.request', 'grid': false, 'autoload': false, 'callback': function() { } }, options); this.grid_options = { 'able': this.options.grid, 'paging': null, 'col_width': [], 'min_height': 200 }
		this.pos_left = 0; this.layer = $(this.options.layer, platform); this.__construct();
	}
$.extend
	($.module['board.lists'].prototype, {
		__construct: function() {
			var $this = this; $this.layer.addClass('plani-board-lists'); $this.platform.delegate('.paging-area a', 'click', function() {
				if ($(this).attr('href') != '#') { $this.request($(this).attr('href')); }
				return false;
			}); new $.module['form']($this.platform, { 'ajax': false, 'before': function() { $this.request(); return false; } }); if ($this.options.autoload == true) { $this.request(); } else { $this._trigger(); }
		}, request: function(url) {
			var $this = this; if (!url) { url = $this.platform.attr('action'); }
			try { var $scrollerOuter = $('.mCustomScrollbar'); var $dragger = $scrollerOuter.find('.mCSB_dragger').eq(1); var scrollWidth = $scrollerOuter.find('.mCSB_container').width(); var draggerLeft = $dragger.position().left; var scrollLeft = draggerLeft / ($scrollerOuter.width() - $dragger.width()) * (scrollWidth - $scrollerOuter.width()); $this.pos_left = scrollLeft; }
			catch (e) { }
			$this.layer.append('<div class="progress"><i class="xi-spinner-1 xi-spin"></i></div>'); $.request({ 'url': url, 'param': $this.platform.serialize() }, function(html) {
				var $html = $(html); history.pushState({}, '', $html.find('input[name=history]').val()); if ($this.grid_options.able == true) { $this._grid_reset(); }
				$html.filter(':not(' + $this.options.layer + ')').find('[update-id]').each(function() { var obj1 = $(this), obj2 = $('[update-id=' + obj1.attr('update-id') + ']', $this.platform); if (obj2.length > 0) { obj2.after(obj1).remove(); } }); $this.layer.html($html.find($this.options.layer).html()); $this._trigger();
			});
		}, _trigger: function() {
			var $this = this, order_by = $('[name=search_order]', $this.platform).val(), sort = typeof order_by != 'undefined' ? order_by.split(' ') : ['', 'asc'], th = $('th[sort]', $this.platform); if (typeof $this.options.callback == 'function') { this.options.callback($this.platform); }
			th.each
				(function() {
					var target = $(this); target.append('<span class="sort"></span>').addClass('cursor-hand'); if (target.attr('sort') == sort[0]) { $('span', target).attr('class', 'sort ' + (sort.length < 2 ? 'asc' : sort[1])); }
					target.on('click', function() { var span = $('span', target), order_by = span.hasClass('asc') == true ? 'desc' : 'asc', val = target.attr('sort') + ' ' + order_by; $('[name=search_order]', $this.platform).val(val); $this.platform.submit(); });
				}); if ($this.grid_options.able == true) { $this._grid_set(); }
		}, _grid_set: function() {
			this.layer.addClass('plani-grid'); if (this.grid_options.paging == null) { this.grid_options.paging = $('<div />', { 'class': 'plani-grid-paging' }); this.layer.after(this.grid_options.paging); }
			this.grid_options.paging.html(this.layer.children().not('table')); this._grid();
		}, _grid_reset: function() { this.layer.mCustomScrollbar("destroy"); this.layer.removeClass('plani-grid'); }, _grid_scroll: function() { var top = parseInt($('.mCSB_container', this.layer).css('top')) * -1; $('.col-resize', this.layer).css('top', top); try { var tfoot = $('tfoot', this.layer); tfoot.css('top', (top + this.layer.height() - tfoot.height()) - 2); } catch (e) { } }, _grid_resize: function(cols, base, extend) {
			var $this = this, table_width = $('table', $this.layer).width(), base_col_size = base.length; base.each
				(function(no) {
					var w = $(this).width(); if (extend == true) {
						if (typeof $this.grid_options.col_width[no] != 'undefined') { w = $this.grid_options.col_width[no]; }
						if (w < 60) { w = 60; }
					}
					if (base_col_size == (no + 1)) { w = table_width; } else { table_width -= w; }
					for (var key in cols) { var col = cols[key]; try { col.eq(no).width(w); } catch (e) { } }
					$this.grid_options.col_width[no] = w;
				});
		}, _grid_resize_overap: function(overap, base) {
			var $this = this; for (var i = 0; i < overap.length; i++) {
				var target = overap[i], w = 0, l = 0
				for (var x = target.start; x <= target.end; x++) { w += base.eq(x).outerWidth(); if (x == target.start) { l = base.eq(x).position().left; } }
				target.obj.css({ 'left': l + ($.info.isie == true ? -1 : 0), 'width': w + 1 });
			}
		}, _grid: function() {
			var $this = this, _table = $('table', $this.layer), _thead = $('thead', _table), _tbody = $('tbody', _table), _tfoot = $('tfoot', _table), _trows = $('trows name', $this.platform), _trows_cols = [], _ths = $('tr:eq(0) th', _thead), _tds = $('tr:eq(0) td', _tbody), _tfoot_tds = $('td', _tfoot), _col_size = _ths.length
			if (_tds.length > 0) { _tbody.append('<tr><td colspan="' + _col_size + '" class="end-tr">&nbsp;</td></tr>'); }
			if (_trows.length > 0) {
				var eq_no = 0; _trows.each
					(function() {
						var colspan = parseInt($(this).attr('colspan')), text = $(this).attr('value'), bg = $(this).attr('bg')
						if (colspan > 1) {
							_ths.eq(eq_no).prepend('<div class="grp">' + text + '</div>'); for (var i = 1; i < colspan; i++) { _ths.eq(eq_no + i).prepend('<div class="grp">&nbsp;</div>') }
							_trows_cols.push({ 'obj': $('<div />', { 'class': 'grp-overap' }).html(text).css('background', bg), 'start': eq_no, 'end': eq_no + (i - 1) });
						} else { _ths.eq(eq_no).prepend('<div class="grp-text">&nbsp;</div>'); }
						eq_no += colspan;
					});
			}
			$this._grid_resize([_ths], _ths, true); $this.layer.mCustomScrollbar({ theme: 'minimal-dark', axis: "xy", scrollButtons: { enable: true }, setLeft: ($this.pos_left + (($this.pos_left / 500) * 10)) + 'px', callbacks: { onInit: function() { $this._grid_scroll(); }, whileScrolling: function() { $this._grid_resize([_ths, _tfoot_tds], _ths, true); $this._grid_scroll(); } } }); $this.pos_left = 0; $.window.off('resize.grid').on
				('resize.grid', function() {
					$('.col-resize', _table).remove(); var clone = _thead.clone().height(_thead.height() + 1).addClass('col-resize'), clone_th = $('th', clone).height(_thead.height() + 1); clone_th.each
						(function(no) {
							$(this).on
							('click', function() { _ths.eq(no).trigger('click'); });
						}); for (var i = 0; i < _trows_cols.length; i++) { clone.append(_trows_cols[i].obj); }
					_table.prepend(clone); var layer_height = $(this).height() - $this.layer.offset().top - $this.grid_options.min_height; if (layer_height > _table.height() + 50) { layer_height = _table.height() + 50; }
					if (layer_height < $this.grid_options.min_height) { layer_height = $this.grid_options.min_height; }
					$this.layer.height(layer_height); _table.removeAttr('id').colResizable({ 'minWidth': 60, 'onResize': function(e) { $this._grid_resize_overap(_trows_cols, clone_th); $this._grid_resize([_ths, _tfoot_tds], clone_th, false); } }); $this._grid_resize([_ths, _tfoot_tds], clone_th, false); $this._grid_resize([_ths, _tfoot_tds], clone_th, true); $this._grid_resize_overap(_trows_cols, _ths); $this._grid_scroll();
				}); setTimeout(function() { $.window.trigger('resize.grid'); }, 500);
		}
	}); $.module['board.masonry'] = function(platform, options) {
		this.platform = platform; this.options = $.extend
			({ 'layer': '.request', 'paging': '.paging-area', 'items': '.masonry_item', 'callback': function() { } }, options); this.params = { num: 0, width: 0, margin: 20 }
		this.layer = $(this.options.layer, platform); this.items = $(this.options.items, this.layer); this.pageing = $(this.options.paging, platform).hide(); this.progress = $('<div />', { 'class': 'progress' }).html('<i class="xi-spinner-1 xi-spin"></i>').appendTo(this.layer); this.empty = $('<div />', { 'class': 'empty-data' }).html(__('검색 결과가 없습니다')).appendTo(this.layer); this.__construct();
	}
$.extend
	($.module['board.masonry'].prototype, {
		__construct: function() {
			var $this = this; $this.layer.addClass('plani-board-masonry'); $this.platform.delegate
				('.paging-area a', 'click', function() {
					if ($(this).attr('href') != '#') { $this.request($(this).attr('href'), true); }
					return false;
				}); new $.module['form']
					($this.platform, { 'ajax': false, 'before': function() { $this.request(); return false; } }); setTimeout(function() {
						$this.progress.remove(); $this.pageing.show(); $this.resizer
							($this.layer.width(), 'fadein'); $(this).on
								('resize', function() {
									if (typeof this.resizedFinished != 'undefined') { clearTimeout(this.resizedFinished); }
									this.resizedFinished = setTimeout
										(function() {
											$this.resizer
											($this.layer.width(), 'sort');
										}, 200);
								});
					}, 300);
		}, resizer: function(width, method) {
			var $this = this, num = 6
			if (width < 600)
				num = 1; else if (width <= 800)
				num = 2; else if (width <= 1100)
				num = 3; else if (width <= 1400)
				num = 4; else if (width <= 1700)
				num = 5; $this.params.num = num; $this.params.width = width; $this.items = $($this.options.items, this.platform); setTimeout
					(function() { $this.netsort(method); }, 100)
		}, netsort: function(method) {
			var $this = this, positioning = $this._position(method), original_method = method, myno = 0; $this.items.each
				(function(no) {
					var target = $(this), item_pos = positioning[myno]; if (original_method == 'reload') { if (typeof target.attr('data-load') != 'undefined') { myno++; method = target.attr('data-load'); } else { method = 'fadeout'; } } else { myno++; }
					target.stop(); if (method == 'fadein') {
						target.css
						({ 'left': item_pos.end_left, 'top': item_pos.end_top, 'transform': 'scale(0.5, 0.5)', 'opacity': 0 }); target.transition
							({ 'opacity': 1, 'transform': 'scale(1.0, 1.0)', 'duration': 800 });
					} else if (method == 'fadeout') {
						target.transition
						({ 'opacity': 0, 'transform': 'scale(0.5, 0.5)', 'duration': 800 }, function() { target.remove(); });
					} else {
						target.animate
						({ 'left': item_pos.end_left, 'top': item_pos.end_top, 'opacity': 1 }, { duration: 500 + (no * 50) }, 'slow', 'easeOutCirc');
					}
				});
		}, request: function(url, focus) {
			var $this = this; if (!url) { url = $this.platform.attr('action'); }
			$.request
				({ 'url': url, 'param': $this.platform.serialize() }, function(html) {
					if (focus == true) { $('html, body').scrollTop($this.layer.position().top); }
					$this._parse(html);
				});
		}, _parse: function(html) {
			var $this = this, text_obj = $(html), new_items = $(this.options.items, text_obj).clone(), paging = $(this.options.paging, text_obj).clone(), sorts = []; $this.items = $(this.options.items, $this.layer); $this.items.removeAttr('data-load'); new_items.each
				(function(no) { var new_target = $(this), new_target_data = new_target.data(), old_target = $this.items.filter('[data-id=' + new_target_data.id + ']'); old_target.find('a').attr('href', new_target_data.href); if ($this.items.eq(no).length == 0) { if (old_target.length < 1) { sorts[no] = new_target.attr('data-load', 'fadein'); } else { sorts[no] = old_target.attr('data-load', 'sort'); } } else { if (old_target.length < 1) { sorts[no] = new_target.attr('data-load', 'fadein'); } else { sorts[no] = old_target.attr('data-load', 'sort'); } } }); for (var i = 0; i < sorts.length; i++) { $this.layer.append(sorts[i]); }
			if (sorts.length == 0) { $this.empty.show(); $this.pageing.html(''); } else { $this.empty.hide(); $this.pageing.html(paging.html()); }
			$this.resizer
				($this.layer.width(), 'reload');
		}, _position: function(method) {
			var $this = this, $params = $this.params, $return = {}, $items = method == 'reload' ? $this.items.filter('[data-load]') : $this.items, item_width = (($params.width - (($params.num + 1) * $params.margin)) / $params.num) + (($params.margin / $params.num) * 2), latest_height = []; $items.stop().width(item_width).removeAttr('data-no').each
				(function(no) {
					var item_sort_num = no == 0 ? 0 : no % $params.num, item_sort_top_target = $items.filter('[data-no=' + item_sort_num + ']'), item_left = (($params.margin / 2) + (item_sort_num * $params.margin) + (item_width * item_sort_num)) - ($params.margin), item_top = item_sort_top_target.length < 1 ? 0 : $this._top_sum(item_sort_top_target, method), target = $(this); target.attr({ 'data-no': item_sort_num }); $return[no] = { 'end_width': item_width, 'end_height': target.height(), 'end_left': item_left, 'end_top': item_top }
					latest_height.push(item_top + target.height());
				}); $this.layer.stop().animate({ 'height': Math.max.apply(null, latest_height) + 50 }); return $return;
		}, _top_sum: function(item_sort_top_target) {
			var h = 0; item_sort_top_target.each
				(function() { h += $(this).height(); }); return h + (this.params.margin * item_sort_top_target.length);
		}
	});
/* /_res/plani/hook.js */
$.event.add
	(window, 'load', function() {
		NProgress.start(); function hook_addclass(target, opt) {
			var opt = $.extend
				({ 'class': 'transition', 'delay': 10 }, opt); window.setTimeout
					(function() { target.addClass(opt.class); }, opt.delay)
		}
		function hook_animate(target, opt) {
			var opt = $.extend
				({ 'properties': {}, 'duration': 'normal', 'delay': 10 }, opt); window.setTimeout
					(function() { target.animate(opt.properties, opt.duration) }, opt.delay)
		}
		function hook_popup(target, opt) {
			var close_btn = $('.pi-popup-btn a', target), cookie_input = $('.pi-popup-btn input', target), opt = $.extend
				({ 'properties': {}, 'duration': 'normal', 'delay': 10 }, opt); close_btn.on
					('click', function() {
						if (cookie_input.is(':checked') == true) { $.cookie.set(cookie_input.attr('id'), 1, 86400); }
						target.remove();
					}); window.setTimeout
						(function() {
							target.css({ 'transform': 'scale(0.5, 0.5)', 'opacity': 0 }).show().transition
							({ 'opacity': '1.0', 'transform': 'scale(1.0, 1.0)', 'duration': 800 });
						}, opt.delay)
		}
		function hook_module(target, opt) {
			new $.module[opt['method']]
				(target, opt);
		}
		$('[pi-hook]').each
			(function() {
				var target = $(this); hook = target.attr('pi-hook').split('='); try { var func = hook[0], obj = JSON.parse(hook[1].replace(/\'/gi, '"')); eval('hook_' + func)(target, obj); }
					catch (e) { console.log('Syntax Error : ' + hook.join('=')); }
			}); NProgress.done();
	});
/* /_html/jquery/slick.min.js */
!function(i) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery) }(function(i) { "use strict"; var e = window.Slick || {}; (e = function() { var e = 0; return function(t, o) { var s, n = this; n.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: i(t), appendDots: i(t), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(e, t) { return i('<button type="button" />').text(t + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, n.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0) } }()).prototype.activateADA = function() { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) { var s = this; if ("boolean" == typeof t) o = t, t = null; else if (t < 0 || t >= s.slideCount) return !1; s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) { i(t).attr("data-slick-index", e) }), s.$slidesCache = s.$slides, s.reinit() }, e.prototype.animateHeight = function() { var i = this; if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) { var e = i.$slides.eq(i.currentSlide).outerHeight(!0); i.$list.animate({ height: e }, i.options.speed) } }, e.prototype.animateSlide = function(e, t) { var o = {}, s = this; s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({ animStart: s.currentLeft }).animate({ animStart: e }, { duration: s.options.speed, easing: s.options.easing, step: function(i) { i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o)) }, complete: function() { t && t.call() } })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() { s.disableTransition(), t.call() }, s.options.speed)) }, e.prototype.getNavTarget = function() { var e = this, t = e.options.asNavFor; return t && null !== t && (t = i(t).not(e.$slider)), t }, e.prototype.asNavFor = function(e) { var t = this.getNavTarget(); null !== t && "object" == typeof t && t.each(function() { var t = i(this).slick("getSlick"); t.unslicked || t.slideHandler(e, !0) }) }, e.prototype.applyTransition = function(i) { var e = this, t = {}; !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t) }, e.prototype.autoPlay = function() { var i = this; i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed)) }, e.prototype.autoPlayClear = function() { var i = this; i.autoPlayTimer && clearInterval(i.autoPlayTimer) }, e.prototype.autoPlayIterator = function() { var i = this, e = i.currentSlide + i.options.slidesToScroll; i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e)) }, e.prototype.buildArrows = function() { var e = this; !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function() { var e, t, o = this; if (!0 === o.options.dots) { for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1)t.append(i("<li />").append(o.options.customPaging.call(this, o, e))); o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active") } }, e.prototype.buildOut = function() { var e = this; e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) { i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "") }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable") }, e.prototype.buildRows = function() { var i, e, t, o, s, n, r, l = this; if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) { for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) { var d = document.createElement("div"); for (e = 0; e < l.options.rows; e++) { var a = document.createElement("div"); for (t = 0; t < l.options.slidesPerRow; t++) { var c = i * r + (e * l.options.slidesPerRow + t); n.get(c) && a.appendChild(n.get(c)) } d.appendChild(a) } o.appendChild(d) } l.$slider.empty().append(o), l.$slider.children().children().children().css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" }) } }, e.prototype.checkResponsive = function(e, t) { var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width(); if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) { s = null; for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o])); null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]) } }, e.prototype.changeSlide = function(e, t) { var o, s, n, r = this, l = i(e.currentTarget); switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) { case "previous": s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t); break; case "next": s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t); break; case "index": var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll; r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus"); break; default: return } }, e.prototype.checkNavigable = function(i) { var e, t; if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1]; else for (var o in e) { if (i < e[o]) { i = t; break } t = e[o] } return i }, e.prototype.cleanUpEvents = function() { var e = this; e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition) }, e.prototype.cleanUpSlideEvents = function() { var e = this; e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1)) }, e.prototype.cleanUpRows = function() { var i, e = this; e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i)) }, e.prototype.clickHandler = function(i) { !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault()) }, e.prototype.destroy = function(e) { var t = this; t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { i(this).attr("style", i(this).data("originalStyling")) }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]) }, e.prototype.disableTransition = function(i) { var e = this, t = {}; t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t) }, e.prototype.fadeSlide = function(i, e) { var t = this; !1 === t.cssTransitions ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function() { t.disableTransition(i), e.call() }, t.options.speed)) }, e.prototype.fadeSlideOut = function(i) { var e = this; !1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 })) }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) { var e = this; null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit()) }, e.prototype.focusHandler = function() { var e = this; e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) { t.stopImmediatePropagation(); var o = i(this); setTimeout(function() { e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay()) }, 0) }) }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() { return this.currentSlide }, e.prototype.getDotCount = function() { var i = this, e = 0, t = 0, o = 0; if (!0 === i.options.infinite) if (i.slideCount <= i.options.slidesToShow) ++o; else for (; e < i.slideCount;)++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else if (!0 === i.options.centerMode) o = i.slideCount; else if (i.options.asNavFor) for (; e < i.slideCount;)++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow; else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll); return o - 1 }, e.prototype.getLeft = function(i) { var e, t, o, s, n = this, r = 0; return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e }, e.prototype.getOption = e.prototype.slickGetOption = function(i) { return this.options[i] }, e.prototype.getNavigableIndexes = function() { var i, e = this, t = 0, o = 0, s = []; for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;)s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; return s }, e.prototype.getSlick = function() { return this }, e.prototype.getSlideCount = function() { var e, t, o = this; return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) { if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1 }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) { this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e) }, e.prototype.init = function(e) { var t = this; i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay()) }, e.prototype.initADA = function() { var e = this, t = Math.ceil(e.slideCount / e.options.slidesToShow), o = e.getNavigableIndexes().filter(function(i) { return i >= 0 && i < e.slideCount }); e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) { var s = o.indexOf(t); i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s }) }), e.$dots.attr("role", "tablist").find("li").each(function(s) { var n = o[s]; i(this).attr({ role: "presentation" }), i(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" }) }).eq(e.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end()); for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)e.$slides.eq(s).attr("tabindex", 0); e.activateADA() }, e.prototype.initArrowEvents = function() { var i = this; !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler))) }, e.prototype.initDotEvents = function() { var e = this; !0 === e.options.dots && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1)) }, e.prototype.initSlideEvents = function() { var e = this; e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1))) }, e.prototype.initializeEvents = function() { var e = this; e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition) }, e.prototype.initUI = function() { var i = this; !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show() }, e.prototype.keyHandler = function(i) { var e = this; i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } })) }, e.prototype.lazyLoad = function() { function e(e) { i("img[data-lazy]", e).each(function() { var e = i(this), t = i(this).attr("data-lazy"), o = i(this).attr("data-srcset"), s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"), r = document.createElement("img"); r.onload = function() { e.animate({ opacity: 0 }, 100, function() { o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({ opacity: 1 }, 200, function() { e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading") }), n.$slider.trigger("lazyLoaded", [n, e, t]) }) }, r.onerror = function() { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]) }, r.src = t }) } var t, o, s, n = this; if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++; e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)) }, e.prototype.loadSlider = function() { var i = this; i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad() }, e.prototype.next = e.prototype.slickNext = function() { this.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function() { var i = this; i.checkResponsive(), i.setPosition() }, e.prototype.pause = e.prototype.slickPause = function() { var i = this; i.autoPlayClear(), i.paused = !0 }, e.prototype.play = e.prototype.slickPlay = function() { var i = this; i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1 }, e.prototype.postSlide = function(e) { var t = this; t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus())) }, e.prototype.prev = e.prototype.slickPrev = function() { this.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function(i) { i.preventDefault() }, e.prototype.progressiveLazyLoad = function(e) { e = e || 1; var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider); d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() { s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad() }, r.onerror = function() { e < 3 ? setTimeout(function() { l.progressiveLazyLoad(e + 1) }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad()) }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]) }, e.prototype.refresh = function(e) { var t, o, s = this; o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, { currentSlide: t }), s.init(), e || s.changeSlide({ data: { message: "index", index: t } }, !1) }, e.prototype.registerBreakpoints = function() { var e, t, o, s = this, n = s.options.responsive || null; if ("array" === i.type(n) && n.length) { s.respondTo = s.options.respondTo || "window"; for (e in n) if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) { for (t = n[e].breakpoint; o >= 0;)s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--; s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings } s.breakpoints.sort(function(i, e) { return s.options.mobileFirst ? i - e : e - i }) } }, e.prototype.reinit = function() { var e = this; e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]) }, e.prototype.resize = function() { var e = this; i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() { e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50)) }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) { var o = this; if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1; o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit() }, e.prototype.setCSS = function(i) { var e, t, o = this, s = {}; !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s))) }, e.prototype.setDimensions = function() { var i = this; !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length))); var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width(); !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e) }, e.prototype.setFade = function() { var e, t = this; t.$slides.each(function(o, s) { e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) }), t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 }) }, e.prototype.setHeight = function() { var i = this; if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) { var e = i.$slides.eq(i.currentSlide).outerHeight(!0); i.$list.css("height", e) } }, e.prototype.setOption = e.prototype.slickSetOption = function() { var e, t, o, s, n, r = this, l = !1; if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) i.each(o, function(i, e) { r.options[i] = e }); else if ("responsive" === n) for (t in s) if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]]; else { for (e = r.options.responsive.length - 1; e >= 0;)r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--; r.options.responsive.push(s[t]) } l && (r.unload(), r.reinit()) }, e.prototype.setPosition = function() { var i = this; i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]) }, e.prototype.setProps = function() { var i = this, e = document.body.style; i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType }, e.prototype.setSlideClasses = function(i) { var e, t, o, s, n = this; if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) { var r = n.options.slidesToShow % 2 == 0 ? 1 : 0; e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center") } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")); "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad() }, e.prototype.setupInfinite = function() { var e, t, o, s = this; if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) { for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1)t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned"); for (e = 0; e < o + s.slideCount; e += 1)t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned"); s.$slideTrack.find(".slick-cloned").find("[id]").each(function() { i(this).attr("id", "") }) } }, e.prototype.interrupt = function(i) { var e = this; i || e.autoPlay(), e.interrupted = i }, e.prototype.selectHandler = function(e) { var t = this, o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index")); s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s) }, e.prototype.slideHandler = function(i, e, t) { var o, s, n, r, l, d = null, a = this; if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() { a.postSlide(o) }) : a.postSlide(o)); else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() { a.postSlide(o) }) : a.postSlide(o)); else { if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() { a.postSlide(s) })) : a.postSlide(s), void a.animateHeight(); !0 !== t ? a.animateSlide(d, function() { a.postSlide(s) }) : a.postSlide(s) } }, e.prototype.startLoad = function() { var i = this; !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function() { var i, e, t, o, s = this; return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function(i) { var e, t, o = this; if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1; if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1; if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) { switch (t = o.swipeDirection()) { case "left": case "down": e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0; break; case "right": case "up": e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1 }"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t])) } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {}) }, e.prototype.swipeHandler = function(i) { var e = this; if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) { case "start": e.swipeStart(i); break; case "move": e.swipeMove(i); break; case "end": e.swipeEnd(i) } }, e.prototype.swipeMove = function(i) { var e, t, o, s, n, r, l = this; return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft)))) }, e.prototype.swipeStart = function(i) { var e, t = this; if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1; void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0 }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() { var i = this; null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit()) }, e.prototype.unload = function() { var e = this; i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, e.prototype.unslick = function(i) { var e = this; e.$slider.trigger("unslick", [e, i]), e.destroy() }, e.prototype.updateArrows = function() { var i = this; Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))) }, e.prototype.updateDots = function() { var i = this; null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active")) }, e.prototype.visibility = function() { var i = this; i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1) }, i.fn.slick = function() { var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length; for (i = 0; i < r; i++)if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t; return o } });
/* /_html/js/layout.js */
$(function() {
	sitemap3depth(); $('.hnb1').classtoggle
		({ 'button': '.label', 'respond': true, 'respondWidth': '1024', }); $('.lang').classtoggle
			({ 'button': '.active' }); $('.search').classtoggle(); $('#gnb1').gnb1(); $('#gnb2').gnb2(); $('#quick').classtoggle(); $(window).on('scroll load', function() {
				if ($('html, body').scrollTop() > 300) { $('#footer .btn-top').addClass('active'); }
				else { $('#footer .btn-top').removeClass('active'); }
				if ($(window).width() > 1023) {
					var btnfixed = $(window).scrollTop() < ($(document).outerHeight() - $(window).outerHeight() - 80); if (!btnfixed) { $('#footer_section .btn_top ').css('bottom', '19rem'); }
					else { $('#footer_section .btn_top ').css('bottom', '6rem'); }
				} else if ($(window).width() < 500) { $('#footer_section .btn_top ').css('bottom', '14.75rem'); }
			}); $('#footer_section .btn_top').on('click', function() { $('html, body').animate({ scrollTop: 0 }); $(this.hash).focus(); return false; }); $('.related .group').classtoggle
		({ 'button': '.label' });
}); $.fn.gnb1 = function(options) {
	var settings = $.extend
		({ 'actionType': 'mouseenter focusin', 'target': '#header', 'class': 'active', 'depth2': '.submenu', 'closeBtn': '.close' }, options); return this.each(function() {
			var $selecter = $(this); $selecter.find('a').on(settings.actionType, function() {
				if ($(this).parent('li').hasClass('active') == false) {
					$(this).parent('li').addClass('active'); $(this).parent('li').siblings('li').removeClass('active'); $(this).parents('li').addClass('active'); $(this).parents('li').siblings('li').removeClass('active'); if (settings.target != '') { $(settings.target).addClass(settings.class); }
				}
				if (settings.actionType == 'click') {
					if ($(this).next('*').length > 0) { return false; }
				}
			}); if ($selecter.find(settings.closeBtn).length == 1) {
				$selecter.find(settings.closeBtn).on('click', function() { $selecter.find('li').removeClass(settings.class); $(settings.target).removeClass(settings.class); return false; });
			}
			else {
				$(document).on('mousemove', function(e) {
					cursorY = e.pageY; if ($selecter.find('li.active').length > 0) {
						if (cursorY > parseInt($selecter.find(settings.depth2).offset().top + $selecter.find('.active').find(settings.depth2).height())) {
							setTimeout(function() { $selecter.find('li').removeClass(settings.class); $(settings.target).removeClass(settings.class); }, 200);
						}
					}
				});
			}
			$selecter.find('a:last').keydown(function(e) {
				if (e.keyCode === 9) { $selecter.find('li').removeClass(settings.class); $(settings.target).removeClass(settings.class); }
			}); $selecter.find('a:first').keydown(function(e) {
				if (e.keyCode === 9 && e.shiftKey) { $selecter.find('li').removeClass(settings.class); $selecter.removeClass(settings.classname); }
			}); $(document).on("mouseleave", settings.target, function() { $selecter.find('li').removeClass(settings.class); $(settings.target).removeClass(settings.class); });
		});
}; $.fn.gnb2 = function(options) {
	var settings = $.extend
		({ 'btnOpen': '.open', 'btnClose': '.close', 'classAdd': '#gnb2', 'className': 'active', 'siblings': true, 'responsive': true, 'responsiveWidth': '1024' }, options); return this.each(function() {
			var $selecter = $(this); $selecter.find(settings.btnOpen).on('click', function() {
				if ($selecter.find(settings.btnClose).length > 0) { $(settings.classAdd).addClass(settings.className); $('html').css('overflow', 'hidden'); }
				else {
					if ($(settings.classAdd).hasClass(settings.className) == false) { $(settings.classAdd).addClass(settings.className); $('html').css('overflow', 'hidden'); }
					else { $(settings.classAdd).removeClass(settings.className); $('html').removeAttr('style'); }
				}
				return false;
			}); if ($selecter.find(settings.btnClose).length > 0) {
				$selecter.find(settings.btnClose).on('click', function() { $(settings.classAdd).removeClass(settings.className); $('html').removeAttr('style'); return false; });
			}; function menuAction($this) {
				if ($this.next('*').length > 0 && $this.next('*').css('display') != 'none') {
					if ($this.parent('li').hasClass('active') == false) {
						$this.parent('li').addClass('active'); if (settings.siblings == true) { $this.parent('li').siblings('li').removeClass('active'); }
					}
					else { $this.parent('li').removeClass('active'); }
					event.preventDefault();
				}
			}
			$selecter.find('li a').on('click', function(e) {
				if (settings.responsive == true) {
					if ($(window).width() <= settings.responsiveWidth) { menuAction($(this)); }
				}
				else { menuAction($(this)); }
			});
		});
}; $.fn.classtoggle = function(options) {
	var settings = $.extend
		({ 'button': '.open', 'action': 'click', 'classname': 'active', 'accordion': false, 'respond': false, 'respondWidth': '768', 'close': '.close' }, options); return this.each(function() {
			var $selecter = $(this); function clickActive() {
				if ($selecter.hasClass(settings.classname) == false) {
					$selecter.addClass(settings.classname); if (settings.accordion == true) { $selecter.siblings().removeClass(settings.classname); }
				}
				else {
					if ($selecter.find(settings.close).length == 0) { $selecter.removeClass(settings.classname); }
				}
			}
			if (settings.action == 'click') {
				$selecter.find(settings.button).on(settings.action, function() {
					if (settings.respond == false) { clickActive(); return false; }
					else {
						if ($(window).width() <= settings.respondWidth) { clickActive(); return false; }
						else { $selecter.find(settings.button).off(); }
					}
				});
			}
			else {
				$selecter.find(settings.button).on
				({
					mouseenter: function() { $selecter.addClass(settings.classname); }, focusin: function() { $selecter.addClass(settings.classname); }, mouseleave: function() { $selecter.removeClass(settings.classname); }, focusout: function() { $selecter.removeClass(settings.classname); }
				});
			}
			if ($selecter.find(settings.close).length > 0) {
				$selecter.find(settings.close).on('click', function() { $selecter.removeClass(settings.classname); return false; });
			}
			else {
				$selecter.find('a:last').keydown(function(e) {
					if (e.keyCode === 9) { $selecter.removeClass(settings.classname); }
				}); $selecter.find('a:first').keydown(function(e) {
					if (e.keyCode === 9 && e.shiftKey) { $selecter.removeClass(settings.classname); }
				});
			}
		});
}; function sitemap3depth() { var dep3 = $(".submenu > ul > li"); $('.submenu > ul > li').each(function() { if ($(this).find('.depth3').length > 0) { $(this).addClass('on'); } }); $('.submenu > ul > li.on > a').on('click', function(e) { var t = $(this); e.preventDefault(); if (t.next(".depth3").is(":hidden")) { dep3.removeClass('inopen'); t.parent('li').addClass('inopen'); } else { t.parent('li').removeClass('inopen'); } }); }
/* /_html/js/main.js */
$(function() {
	setTimeout(function() { $('#header').addClass('start') }, 500); var fullpageEl = $('.main_wrap').fullpage({ licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE', autoScrolling: true, scrollHorizontally: true, }); $("#gnb2 .open").on("click", function() { console.log("test"); $.fn.fullpage.setAllowScrolling(false); }); $("#gnb2 .close").on("click", function() { $.fn.fullpage.setAllowScrolling(true); }); $('.visual_wrap > div:gt(0)').hide(); var interval = function() {
		autoPlay(); if ($('.visual_wrap > div:first').hasClass('item1') || $('.visual_wrap > div:first').hasClass('item7')) { setTimeout(interval, 9000); }
		else { setTimeout(interval, 7000); }
	}; setTimeout(interval, 9000); setTimeout(function() { $('.v_item.item1').addClass('on') }); $('.section2 .slide_list').slick({ speed: 750, nextArrow: $('.section2 .controls .next'), prevArrow: $('.section2 .controls .prev') }); $('.section3 .tab_list li a.inner').on('mouseenter mouseover', function() { $(this).parent().addClass('on').siblings().removeClass('on'); }); $('.section4 .tab_list li a').on('click', function(e) { e.preventDefault(); $(this.hash).addClass('active').siblings().removeClass('active'); $(this).parent().addClass('active').siblings().removeClass('active'); }); $('.latest .group').classtoggle
		({ 'button': '.label a', 'accordion': true, }); $gallery = $('.gallery .list'); $(window).on("load resize", function() { slickList(); });
}); function autoPlay() { $('.visual_wrap > div:first').fadeOut(2000).removeClass('on').next().addClass('on').fadeIn(1500).end().appendTo('.visual_wrap'); $('.v_item span[class^="char"]').css({ visibility: "hidden" }); var $tlt1 = $(".v_item.on .tLine1").textillate({ autoStart: false, minDisplayTime: 0, initialDelay: 1500, in: { effect: 'fadeInRight', delayScale: 2, delay: 35 } }); var $tlt2 = $(".v_item.on .tLine2").textillate({ autoStart: false, minDisplayTime: 0, initialDelay: 2500, in: { effect: 'fadeInRight', delayScale: 2, delay: 35 } }); var $tlt3 = $(".v_item.on .tLine3").textillate({ autoStart: false, minDisplayTime: 0, initialDelay: 3500, in: { effect: 'fadeInRight', delayScale: 2, delay: 35 } }); var $tlt4 = $(".v_item.on .tLine4").textillate({ autoStart: false, minDisplayTime: 0, initialDelay: 3000, in: { effect: 'fadeInDown', delayScale: 2, delay: 25 } }); var $tlt5 = $(".v_item.on .tLine5").textillate({ autoStart: false, minDisplayTime: 0, initialDelay: 1000, in: { effect: 'fadeInRight', delayScale: 2, delay: 50 } }); $tlt1.textillate('start'); $tlt2.textillate('start'); $tlt3.textillate('start'); $tlt4.textillate('start'); $tlt5.textillate('start'); }
function slickList() {
	var winW = $(window).width(); var slickOptions2 = { slidesToShow: 2, slidesToScroll: 1, }; var slickOptions1 = { slidesToShow: 1, slidesToScroll: 1, }; if (winW > 640) { $('.section4 .img_list').filter('.slick-initialized').slick('unslick'); $('.section4 .video_list').filter('.slick-initialized').slick('unslick'); $('.section4 .card_list').filter('.slick-initialized').slick('unslick'); }
	else { $('.section4 .img_list').not('.slick-initialized').slick(slickOptions1); $('.section4 .video_list').not('.slick-initialized').slick(slickOptions1); $('.section4 .card_list').not('.slick-initialized').slick(slickOptions1); }
	$('.section4 .reply_list').not('.slick-initialized').slick({ slidesToShow: 4, slidesToScroll: 1, responsive: [{ breakpoint: 1024, settings: { slidesToShow: 3, slideToScroll: 1 } }, { breakpoint: 640, settings: { slidesToShow: 1, slideToScroll: 1 } }] });
}
/* /_html/jquery/jquery.lettering.js */
(function($) {
	function injector(t, splitter, klass, after) { var a = t.text().split(splitter), inject = ''; if (a.length) { $(a).each(function(i, item) { inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after; }); t.empty().append(inject); } }
	var methods = { init: function() { return this.each(function() { injector($(this), '', 'char', ''); }); }, words: function() { return this.each(function() { injector($(this), ' ', 'word', ' '); }); }, lines: function() { return this.each(function() { var r = "eefec303079ad17405c889e092e105b0"; injector($(this).children("br").replaceWith(r).end(), r, 'line', ''); }); } }; $.fn.lettering = function(method) {
		if (method && methods[method]) { return methods[method].apply(this, [].slice.call(arguments, 1)); } else if (method === 'letters' || !method) { return methods.init.apply(this, [].slice.call(arguments, 0)); }
		$.error('Method ' + method + ' does not exist on jQuery.lettering'); return this;
	};
})(jQuery);
/* /_html/jquery/jquery.textillate.js */
(function($) {
	"use strict"; function isInEffect(effect) { return /In/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.inEffects) >= 0; }; function isOutEffect(effect) { return /Out/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.outEffects) >= 0; }; function stringToBoolean(str) { if (str !== "true" && str !== "false") return str; return (str === "true"); }; function getData(node) {
		var attrs = node.attributes || [], data = {}; if (!attrs.length) return data; $.each(attrs, function(i, attr) { var nodeName = attr.nodeName.replace(/delayscale/, 'delayScale'); if (/^data-in-*/.test(nodeName)) { data.in = data.in || {}; data.in[nodeName.replace(/data-in-/, '')] = stringToBoolean(attr.nodeValue); } else if (/^data-out-*/.test(nodeName)) { data.out = data.out || {}; data.out[nodeName.replace(/data-out-/, '')] = stringToBoolean(attr.nodeValue); } else if (/^data-*/.test(nodeName)) { data[nodeName.replace(/data-/, '')] = stringToBoolean(attr.nodeValue); } })
		return data;
	}
	function shuffle(o) { for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x); return o; }
	function animate($t, effect, cb) { $t.addClass('animated ' + effect).css('visibility', 'visible').show(); $t.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() { $t.removeClass('animated ' + effect); cb && cb(); }); }
	function animateTokens($tokens, options, cb) {
		var that = this, count = $tokens.length; if (!count) { cb && cb(); return; }
		if (options.shuffle) $tokens = shuffle($tokens); if (options.reverse) $tokens = $tokens.toArray().reverse(); $.each($tokens, function(i, t) {
			var $token = $(t); function complete() {
				if (isInEffect(options.effect)) { $token.css('visibility', 'visible'); } else if (isOutEffect(options.effect)) { $token.css('visibility', 'hidden'); }
				count -= 1; if (!count && cb) cb();
			}
			var delay = options.sync ? options.delay : options.delay * i * options.delayScale; $token.text() ? setTimeout(function() { animate($token, options.effect, complete) }, delay) : complete();
		});
	}; var Textillate = function(element, options) {
		var base = this, $element = $(element); base.init = function() {
			base.$texts = $element.find(options.selector); if (!base.$texts.length) { base.$texts = $('<ul class="texts"><li>' + $element.html() + '</li></ul>'); $element.html(base.$texts); }
			base.$texts.hide(); base.$current = $('<span>').html(base.$texts.find(':first-child').html()).prependTo($element); if (isInEffect(options.in.effect)) { base.$current.css('visibility', 'hidden'); } else if (isOutEffect(options.out.effect)) { base.$current.css('visibility', 'visible'); }
			base.setOptions(options); base.timeoutRun = null; setTimeout(function() { base.options.autoStart && base.start(); }, base.options.initialDelay)
		}; base.setOptions = function(options) { base.options = options; }; base.triggerEvent = function(name) { var e = $.Event(name + '.tlt'); $element.trigger(e, base); return e; }; base.in = function(index, cb) {
			index = index || 0; var $elem = base.$texts.find(':nth-child(' + ((index || 0) + 1) + ')'), options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {}), $tokens; $elem.addClass('current'); base.triggerEvent('inAnimationBegin'); $element.attr('data-active', $elem.data('id')); base.$current.html($elem.html()).lettering('words'); if (base.options.type == "char") { base.$current.find('[class^="word"]').css({ 'display': 'inline-block', '-webkit-transform': 'translate3d(0,0,0)', '-moz-transform': 'translate3d(0,0,0)', '-o-transform': 'translate3d(0,0,0)', 'transform': 'translate3d(0,0,0)' }).each(function() { $(this).lettering() }); }
			$tokens = base.$current.find('[class^="' + base.options.type + '"]').css('display', 'inline-block'); if (isInEffect(options.in.effect)) { $tokens.css('visibility', 'hidden'); } else if (isOutEffect(options.in.effect)) { $tokens.css('visibility', 'visible'); }
			base.currentIndex = index; animateTokens($tokens, options.in, function() { base.triggerEvent('inAnimationEnd'); if (options.in.callback) options.in.callback(); if (cb) cb(base); });
		}; base.out = function(cb) {
			var $elem = base.$texts.find(':nth-child(' + ((base.currentIndex || 0) + 1) + ')'), $tokens = base.$current.find('[class^="' + base.options.type + '"]'), options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {})
			base.triggerEvent('outAnimationBegin'); animateTokens($tokens, options.out, function() { $elem.removeClass('current'); base.triggerEvent('outAnimationEnd'); $element.removeAttr('data-active'); if (options.out.callback) options.out.callback(); if (cb) cb(base); });
		}; base.start = function(index) { setTimeout(function() { base.triggerEvent('start'); (function run(index) { base.in(index, function() { var length = base.$texts.children().length; index += 1; if (!base.options.loop && index >= length) { if (base.options.callback) base.options.callback(); base.triggerEvent('end'); } else { index = index % length; base.timeoutRun = setTimeout(function() { base.out(function() { run(index) }); }, base.options.minDisplayTime); } }); }(index || 0)); }, base.options.initialDelay); }; base.stop = function() { if (base.timeoutRun) { clearInterval(base.timeoutRun); base.timeoutRun = null; } }; base.init();
	}
	$.fn.textillate = function(settings, args) { return this.each(function() { var $this = $(this), data = $this.data('textillate'), options = $.extend(true, {}, $.fn.textillate.defaults, getData(this), typeof settings == 'object' && settings); if (!data) { $this.data('textillate', (data = new Textillate(this, options))); } else if (typeof settings == 'string') { data[settings].apply(data, [].concat(args)); } else { data.setOptions.call(data, options); } }) }; $.fn.textillate.defaults = { selector: '.texts', loop: false, minDisplayTime: 2000, initialDelay: 0, in: { effect: 'fadeInLeftBig', delayScale: 1.5, delay: 50, sync: false, reverse: false, shuffle: false, callback: function() { } }, out: { effect: 'hinge', delayScale: 1.5, delay: 50, sync: false, reverse: false, shuffle: false, callback: function() { } }, autoStart: true, inEffects: [], outEffects: ['hinge'], callback: function() { }, type: 'char' };
}(jQuery));
/* /_html/jquery/fullpage.js */
(function(root, window, document, factory, undefined) { if (typeof define === 'function' && define.amd) { define(function() { root.fullpage = factory(window, document); return root.fullpage; }); } else if (typeof exports === 'object') { module.exports = factory(window, document); } else { window.fullpage = factory(window, document); } }(this, window, document, function(window, document) {
	'use strict'; var WRAPPER = 'fullpage-wrapper'; var WRAPPER_SEL = '.' + WRAPPER; var SCROLLABLE = 'fp-scrollable'; var SCROLLABLE_SEL = '.' + SCROLLABLE; var RESPONSIVE = 'fp-responsive'; var NO_TRANSITION = 'fp-notransition'; var DESTROYED = 'fp-destroyed'; var ENABLED = 'fp-enabled'; var VIEWING_PREFIX = 'fp-viewing'; var ACTIVE = 'active'; var ACTIVE_SEL = '.' + ACTIVE; var COMPLETELY = 'fp-completely'; var COMPLETELY_SEL = '.' + COMPLETELY; var SECTION_DEFAULT_SEL = '.section'; var SECTION = 'fp-section'; var SECTION_SEL = '.' + SECTION; var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL; var TABLE_CELL = 'fp-tableCell'; var TABLE_CELL_SEL = '.' + TABLE_CELL; var AUTO_HEIGHT = 'fp-auto-height'; var AUTO_HEIGHT_SEL = '.' + AUTO_HEIGHT; var NORMAL_SCROLL = 'fp-normal-scroll'; var NORMAL_SCROLL_SEL = '.' + NORMAL_SCROLL; var SECTION_NAV = 'fp-nav'; var SECTION_NAV_SEL = '#' + SECTION_NAV; var SECTION_NAV_TOOLTIP = 'fp-tooltip'; var SECTION_NAV_TOOLTIP_SEL = '.' + SECTION_NAV_TOOLTIP; var SHOW_ACTIVE_TOOLTIP = 'fp-show-active'; var SLIDE_DEFAULT_SEL = '.slide'; var SLIDE = 'fp-slide'; var SLIDE_SEL = '.' + SLIDE; var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL; var SLIDES_WRAPPER = 'fp-slides'; var SLIDES_WRAPPER_SEL = '.' + SLIDES_WRAPPER; var SLIDES_CONTAINER = 'fp-slidesContainer'; var SLIDES_CONTAINER_SEL = '.' + SLIDES_CONTAINER; var TABLE = 'fp-table'; var SLIDES_NAV = 'fp-slidesNav'; var SLIDES_NAV_SEL = '.' + SLIDES_NAV; var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + ' a'; var SLIDES_ARROW = 'fp-controlArrow'; var SLIDES_ARROW_SEL = '.' + SLIDES_ARROW; var SLIDES_PREV = 'fp-prev'; var SLIDES_PREV_SEL = '.' + SLIDES_PREV; var SLIDES_ARROW_PREV = SLIDES_ARROW + ' ' + SLIDES_PREV; var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL; var SLIDES_NEXT = 'fp-next'; var SLIDES_NEXT_SEL = '.' + SLIDES_NEXT; var SLIDES_ARROW_NEXT = SLIDES_ARROW + ' ' + SLIDES_NEXT; var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL; function initialise(containerSelector, options) {
		var isOK = options && new RegExp('([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$').test(options['li' + 'cen' + 'seK' + 'e' + 'y']) || document.domain.indexOf('al' + 'varotri' + 'go' + '.' + 'com') > -1; if (hasClass($('html'), ENABLED)) { displayWarnings(); return; }
		var $htmlBody = $('html, body'); var $body = $('body')[0]; var FP = {}; options = deepExtend({ menu: false, anchors: [], lockAnchors: false, navigation: false, navigationPosition: 'right', navigationTooltips: [], showActiveTooltip: false, slidesNavigation: false, slidesNavPosition: 'bottom', scrollBar: false, hybrid: false, css3: true, scrollingSpeed: 700, autoScrolling: true, fitToSection: true, fitToSectionDelay: 1000, easing: 'easeInOutCubic', easingcss3: 'ease', loopBottom: false, loopTop: false, loopHorizontal: true, continuousVertical: false, continuousHorizontal: false, scrollHorizontally: false, interlockedSlides: false, dragAndMove: false, offsetSections: false, resetSliders: false, fadingEffect: false, normalScrollElements: null, scrollOverflow: false, scrollOverflowReset: false, scrollOverflowHandler: window.fp_scrolloverflow ? window.fp_scrolloverflow.iscrollHandler : null, scrollOverflowOptions: null, touchSensitivity: 5, touchWrapper: typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector, normalScrollElementTouchThreshold: 5, bigSectionsDestination: null, keyboardScrolling: true, animateAnchor: true, recordHistory: true, controlArrows: true, controlArrowColor: '#fff', verticalCentered: true, sectionsColor: [], paddingTop: 0, paddingBottom: 0, fixedElements: null, responsive: 0, responsiveWidth: 0, responsiveHeight: 0, responsiveSlides: false, parallax: false, parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' }, cards: false, cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true }, sectionSelector: SECTION_DEFAULT_SEL, slideSelector: SLIDE_DEFAULT_SEL, v2compatible: false, afterLoad: null, onLeave: null, afterRender: null, afterResize: null, afterReBuild: null, afterSlideLoad: null, onSlideLeave: null, afterResponsive: null, lazyLoading: true }, options); var slideMoving = false; var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/); var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints)); var container = typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector; var windowsHeight = getWindowHeight(); var isResizing = false; var isWindowFocused = true; var lastScrolledDestiny; var lastScrolledSlide; var canScroll = true; var scrollings = []; var controlPressed; var startingSection; var isScrollAllowed = {}; isScrollAllowed.m = { 'up': true, 'down': true, 'left': true, 'right': true }; isScrollAllowed.k = deepExtend({}, isScrollAllowed.m); var MSPointer = getMSPointer(); var events = { touchmove: 'ontouchmove' in window ? 'touchmove' : MSPointer.move, touchstart: 'ontouchstart' in window ? 'touchstart' : MSPointer.down }; var scrollBarHandler; var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'; var g_supportsPassive = false; try { var opts = Object.defineProperty({}, 'passive', { get: function() { g_supportsPassive = true; } }); window.addEventListener("testPassive", null, opts); window.removeEventListener("testPassive", null, opts); } catch (e) { }
		var resizeId; var afterSectionLoadsId; var afterSlideLoadsId; var scrollId; var scrollId2; var keydownId; var originals = deepExtend({}, options); var activeAnimation; var g_initialAnchorsInDom = false; var g_canFireMouseEnterNormalScroll = true; displayWarnings(); window.fp_easings = deepExtend(window.fp_easings, { easeInOutCubic: function(t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t * t + b; return c / 2 * ((t -= 2) * t * t + 2) + b; } }); function setAutoScrolling(value, type) {
			if (!value) { silentScroll(0); }
			setVariableState('autoScrolling', value, type); var element = $(SECTION_ACTIVE_SEL)[0]; if (options.autoScrolling && !options.scrollBar) { css($htmlBody, { 'overflow': 'hidden', 'height': '100%' }); setRecordHistory(originals.recordHistory, 'internal'); css(container, { '-ms-touch-action': 'none', 'touch-action': 'none' }); if (element != null) { silentScroll(element.offsetTop); } } else { css($htmlBody, { 'overflow': 'visible', 'height': 'initial' }); var recordHistory = !options.autoScrolling ? false : originals.recordHistory; setRecordHistory(recordHistory, 'internal'); css(container, { '-ms-touch-action': '', 'touch-action': '' }); if (element != null) { var scrollSettings = getScrollSettings(element.offsetTop); scrollSettings.element.scrollTo(0, scrollSettings.options); } }
		}
		function setRecordHistory(value, type) { setVariableState('recordHistory', value, type); }
		function setScrollingSpeed(value, type) { setVariableState('scrollingSpeed', value, type); }
		function setFitToSection(value, type) { setVariableState('fitToSection', value, type); }
		function setLockAnchors(value) { options.lockAnchors = value; }
		function setMouseWheelScrolling(value) { if (value) { addMouseWheelHandler(); addMiddleWheelHandler(); } else { removeMouseWheelHandler(); removeMiddleWheelHandler(); } }
		function setAllowScrolling(value, directions) {
			if (typeof directions !== 'undefined') { directions = directions.replace(/ /g, '').split(','); directions.forEach(function(direction) { setIsScrollAllowed(value, direction, 'm'); }); }
			else { setIsScrollAllowed(value, 'all', 'm'); }
		}
		function setMouseHijack(value) { if (value) { setMouseWheelScrolling(true); addTouchHandler(); } else { setMouseWheelScrolling(false); removeTouchHandler(); } }
		function setKeyboardScrolling(value, directions) { if (typeof directions !== 'undefined') { directions = directions.replace(/ /g, '').split(','); directions.forEach(function(direction) { setIsScrollAllowed(value, direction, 'k'); }); } else { setIsScrollAllowed(value, 'all', 'k'); options.keyboardScrolling = value; } }
		function moveSectionUp() {
			var prev = prevUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL); if (!prev && (options.loopTop || options.continuousVertical)) { prev = last($(SECTION_SEL)); }
			if (prev != null) { scrollPage(prev, null, true); }
		}
		function moveSectionDown() {
			var next = nextUntil($(SECTION_ACTIVE_SEL)[0], SECTION_SEL); if (!next && (options.loopBottom || options.continuousVertical)) { next = $(SECTION_SEL)[0]; }
			if (next != null) { scrollPage(next, null, false); }
		}
		function silentMoveTo(sectionAnchor, slideAnchor) { setScrollingSpeed(0, 'internal'); moveTo(sectionAnchor, slideAnchor); setScrollingSpeed(originals.scrollingSpeed, 'internal'); }
		function moveTo(sectionAnchor, slideAnchor) { var destiny = getSectionByAnchor(sectionAnchor); if (typeof slideAnchor !== 'undefined') { scrollPageAndSlide(sectionAnchor, slideAnchor); } else if (destiny != null) { scrollPage(destiny); } }
		function moveSlideRight(section) { moveSlide('right', section); }
		function moveSlideLeft(section) { moveSlide('left', section); }
		function reBuild(resizing) {
			if (hasClass(container, DESTROYED)) { return; }
			isResizing = true; windowsHeight = getWindowHeight(); var sections = $(SECTION_SEL); for (var i = 0; i < sections.length; ++i) {
				var section = sections[i]; var slidesWrap = $(SLIDES_WRAPPER_SEL, section)[0]; var slides = $(SLIDE_SEL, section); if (options.verticalCentered) { css($(TABLE_CELL_SEL, section), { 'height': getTableHeight(section) + 'px' }); }
				css(section, { 'height': windowsHeight + 'px' }); if (slides.length > 1) { landscapeScroll(slidesWrap, $(SLIDE_ACTIVE_SEL, slidesWrap)[0]); }
			}
			if (options.scrollOverflow) { scrollBarHandler.createScrollBarForAll(); }
			var activeSection = $(SECTION_ACTIVE_SEL)[0]; var sectionIndex = index(activeSection, SECTION_SEL); if (sectionIndex) { silentMoveTo(sectionIndex + 1); }
			isResizing = false; if (isFunction(options.afterResize) && resizing) { options.afterResize.call(container, window.innerWidth, window.innerHeight); }
			if (isFunction(options.afterReBuild) && !resizing) { options.afterReBuild.call(container); }
		}
		function setResponsive(active) {
			var isResponsive = hasClass($body, RESPONSIVE); if (active) {
				if (!isResponsive) {
					setAutoScrolling(false, 'internal'); setFitToSection(false, 'internal'); hide($(SECTION_NAV_SEL)); addClass($body, RESPONSIVE); if (isFunction(options.afterResponsive)) { options.afterResponsive.call(container, active); }
					if (options.scrollOverflow) { scrollBarHandler.createScrollBarForAll(); }
				}
			}
			else if (isResponsive) { setAutoScrolling(originals.autoScrolling, 'internal'); setFitToSection(originals.autoScrolling, 'internal'); show($(SECTION_NAV_SEL)); removeClass($body, RESPONSIVE); if (isFunction(options.afterResponsive)) { options.afterResponsive.call(container, active); } }
		}
		if (container) {
			FP.version = '3.0.5'; FP.setAutoScrolling = setAutoScrolling; FP.setRecordHistory = setRecordHistory; FP.setScrollingSpeed = setScrollingSpeed; FP.setFitToSection = setFitToSection; FP.setLockAnchors = setLockAnchors; FP.setMouseWheelScrolling = setMouseWheelScrolling; FP.setAllowScrolling = setAllowScrolling; FP.setKeyboardScrolling = setKeyboardScrolling; FP.moveSectionUp = moveSectionUp; FP.moveSectionDown = moveSectionDown; FP.silentMoveTo = silentMoveTo; FP.moveTo = moveTo; FP.moveSlideRight = moveSlideRight; FP.moveSlideLeft = moveSlideLeft; FP.fitToSection = fitToSection; FP.reBuild = reBuild; FP.setResponsive = setResponsive; FP.getFullpageData = function() { return options }; FP.destroy = destroy; FP.getActiveSection = getActiveSection; FP.getActiveSlide = getActiveSlide; FP.test = {
				top: '0px', translate3d: 'translate3d(0px, 0px, 0px)', translate3dH: (function() {
					var a = []; for (var i = 0; i < $(options.sectionSelector, container).length; i++) { a.push('translate3d(0px, 0px, 0px)'); }
					return a;
				})(), left: (function() {
					var a = []; for (var i = 0; i < $(options.sectionSelector, container).length; i++) { a.push(0); }
					return a;
				})(), options: options, setAutoScrolling: setAutoScrolling
			}; FP.shared = { afterRenderActions: afterRenderActions }; window.fullpage_api = FP; if (options.$) { options.$.fn.fullpage = FP; }
			init(); bindEvents();
		}
		function init() {
			if (options.css3) { options.css3 = support3d(); }
			options.scrollBar = options.scrollBar || options.hybrid; setOptionsFromDOM(); prepareDom(); setAllowScrolling(true); setMouseHijack(true); setAutoScrolling(options.autoScrolling, 'internal'); responsive(); setBodyClass(); if (document.readyState === 'complete') { scrollToAnchor(); }
			window.addEventListener('load', scrollToAnchor); if (!options.scrollOverflow) { afterRenderActions(); }
		}
		function bindEvents() { window.addEventListener('scroll', scrollHandler); window.addEventListener('hashchange', hashChangeHandler); window.addEventListener('blur', blurHandler); window.addEventListener('resize', resizeHandler); document.addEventListener('keydown', keydownHandler); document.addEventListener('keyup', keyUpHandler);['click', 'touchstart'].forEach(function(eventName) { document.addEventListener(eventName, delegatedEvents); }); if (options.normalScrollElements) { ['mouseenter', 'touchstart'].forEach(function(eventName) { forMouseLeaveOrTouch(eventName, false); });['mouseleave', 'touchend'].forEach(function(eventName) { forMouseLeaveOrTouch(eventName, true); }); } }
		function delegatedEvents(e) {
			var target = e.target; if (target && closest(target, SECTION_NAV_SEL + ' a')) { sectionBulletHandler.call(target, e); }
			else if (matches(target, SECTION_NAV_TOOLTIP_SEL)) { tooltipTextHandler.call(target); }
			else if (matches(target, SLIDES_ARROW_SEL)) { slideArrowHandler.call(target, e); }
			else if (matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null) { slideBulletHandler.call(target, e); }
			else if (closest(target, options.menu + ' [data-menuanchor]')) { menuItemsHandler.call(target, e); }
		}
		function forMouseLeaveOrTouch(eventName, allowScrolling) { document['fp_' + eventName] = allowScrolling; document.addEventListener(eventName, onMouseEnterOrLeave, true); }
		function onMouseEnterOrLeave(e) {
			if (e.target == document) { return; }
			if (e.type === 'touchend') { g_canFireMouseEnterNormalScroll = false; setTimeout(function() { g_canFireMouseEnterNormalScroll = true; }, 800); }
			if (e.type === 'mouseenter' && !g_canFireMouseEnterNormalScroll) { return; }
			var normalSelectors = options.normalScrollElements.split(','); normalSelectors.forEach(function(normalSelector) { if (closest(e.target, normalSelector) != null) { setMouseHijack(document['fp_' + e.type]); } });
		}
		function setOptionsFromDOM() {
			if (!options.anchors.length) { var attrName = '[data-anchor]'; var anchors = $(options.sectionSelector.split(',').join(attrName + ',') + attrName, container); if (anchors.length) { g_initialAnchorsInDom = true; anchors.forEach(function(item) { options.anchors.push(item.getAttribute('data-anchor').toString()); }); } }
			if (!options.navigationTooltips.length) { var attrName = '[data-tooltip]'; var tooltips = $(options.sectionSelector.split(',').join(attrName + ',') + attrName, container); if (tooltips.length) { tooltips.forEach(function(item) { options.navigationTooltips.push(item.getAttribute('data-tooltip').toString()); }); } }
		}
		function prepareDom() {
			css(container, { 'height': '100%', 'position': 'relative' }); addClass(container, WRAPPER); addClass($('html'), ENABLED); windowsHeight = getWindowHeight(); removeClass(container, DESTROYED); addInternalSelectors(); var sections = $(SECTION_SEL); for (var i = 0; i < sections.length; i++) { var sectionIndex = i; var section = sections[i]; var slides = $(SLIDE_SEL, section); var numSlides = slides.length; section.setAttribute('data-fp-styles', section.getAttribute('style')); styleSection(section, sectionIndex); styleMenu(section, sectionIndex); if (numSlides > 0) { styleSlides(section, slides, numSlides); } else { if (options.verticalCentered) { addTableClass(section); } } }
			if (options.fixedElements && options.css3) { $(options.fixedElements).forEach(function(item) { $body.appendChild(item); }); }
			if (options.navigation) { addVerticalNavigation(); }
			enableYoutubeAPI(); if (options.scrollOverflow) { scrollBarHandler = options.scrollOverflowHandler.init(options); }
		}
		function styleSlides(section, slides, numSlides) {
			var sliderWidth = numSlides * 100; var slideWidth = 100 / numSlides; var slidesWrapper = document.createElement('div'); slidesWrapper.className = SLIDES_WRAPPER; wrapAll(slides, slidesWrapper); var slidesContainer = document.createElement('div'); slidesContainer.className = SLIDES_CONTAINER; wrapAll(slides, slidesContainer); css($(SLIDES_CONTAINER_SEL, section), { 'width': sliderWidth + '%' }); if (numSlides > 1) {
				if (options.controlArrows) { createSlideArrows(section); }
				if (options.slidesNavigation) { addSlidesNavigation(section, numSlides); }
			}
			slides.forEach(function(slide) { css(slide, { 'width': slideWidth + '%' }); if (options.verticalCentered) { addTableClass(slide); } }); var startingSlide = $(SLIDE_ACTIVE_SEL, section)[0]; if (startingSlide != null && (index($(SECTION_ACTIVE_SEL), SECTION_SEL) !== 0 || (index($(SECTION_ACTIVE_SEL), SECTION_SEL) === 0 && index(startingSlide) !== 0))) { silentLandscapeScroll(startingSlide, 'internal'); } else { addClass(slides[0], ACTIVE); }
		}
		function styleSection(section, index) {
			if (!index && $(SECTION_ACTIVE_SEL)[0] == null) { addClass(section, ACTIVE); }
			startingSection = $(SECTION_ACTIVE_SEL)[0]; css(section, { 'height': windowsHeight + 'px' }); if (options.paddingTop) { css(section, { 'padding-top': options.paddingTop }); }
			if (options.paddingBottom) { css(section, { 'padding-bottom': options.paddingBottom }); }
			if (typeof options.sectionsColor[index] !== 'undefined') { css(section, { 'background-color': options.sectionsColor[index] }); }
			if (typeof options.anchors[index] !== 'undefined') { section.setAttribute('data-anchor', options.anchors[index]); }
		}
		function styleMenu(section, index) {
			if (typeof options.anchors[index] !== 'undefined') { if (hasClass(section, ACTIVE)) { activateMenuAndNav(options.anchors[index], index); } }
			if (options.menu && options.css3 && closest($(options.menu)[0], WRAPPER_SEL) != null) { $(options.menu).forEach(function(menu) { $body.appendChild(menu); }); }
		}
		function addInternalSelectors() { addClass($(options.sectionSelector, container), SECTION); addClass($(options.slideSelector, container), SLIDE); }
		function createSlideArrows(section) {
			var arrows = [createElementFromHTML('<div class="' + SLIDES_ARROW_PREV + '"></div>'), createElementFromHTML('<div class="' + SLIDES_ARROW_NEXT + '"></div>')]; after($(SLIDES_WRAPPER_SEL, section)[0], arrows); if (options.controlArrowColor !== '#fff') { css($(SLIDES_ARROW_NEXT_SEL, section), { 'border-color': 'transparent transparent transparent ' + options.controlArrowColor }); css($(SLIDES_ARROW_PREV_SEL, section), { 'border-color': 'transparent ' + options.controlArrowColor + ' transparent transparent' }); }
			if (!options.loopHorizontal) { hide($(SLIDES_ARROW_PREV_SEL, section)); }
		}
		function addVerticalNavigation() {
			var navigation = document.createElement('div'); navigation.setAttribute('id', SECTION_NAV); var divUl = document.createElement('ul'); navigation.appendChild(divUl); appendTo(navigation, $body); var nav = $(SECTION_NAV_SEL)[0]; addClass(nav, 'fp-' + options.navigationPosition); if (options.showActiveTooltip) { addClass(nav, SHOW_ACTIVE_TOOLTIP); }
			var li = ''; for (var i = 0; i < $(SECTION_SEL).length; i++) {
				var link = ''; if (options.anchors.length) { link = options.anchors[i]; }
				li += '<li><a href="#' + link + '"><span class="fp-sr-only">' + getBulletLinkName(i, 'Section') + '</span><span></span></a>'; var tooltip = options.navigationTooltips[i]; if (typeof tooltip !== 'undefined' && tooltip !== '') { li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + options.navigationPosition + '">' + tooltip + '</div>'; }
				li += '</li>';
			}
			$('ul', nav)[0].innerHTML = li; css($(SECTION_NAV_SEL), { 'margin-top': '-' + ($(SECTION_NAV_SEL)[0].offsetHeight / 2) + 'px' }); var bullet = $('li', $(SECTION_NAV_SEL)[0])[index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL)]; addClass($('a', bullet), ACTIVE);
		}
		function getBulletLinkName(i, defaultName) { return options.navigationTooltips[i] || options.anchors[i] || defaultName + ' ' + (i + 1) }
		function enableYoutubeAPI() { $('iframe[src*="youtube.com/embed/"]', container).forEach(function(item) { addURLParam(item, 'enablejsapi=1'); }); }
		function addURLParam(element, newParam) { var originalSrc = element.getAttribute('src'); element.setAttribute('src', originalSrc + getUrlParamSign(originalSrc) + newParam); }
		function getUrlParamSign(url) { return (!/\?/.test(url)) ? '?' : '&'; }
		function afterRenderActions() {
			var section = $(SECTION_ACTIVE_SEL)[0]; addClass(section, COMPLETELY); lazyLoad(section); playMedia(section); if (options.scrollOverflow) { options.scrollOverflowHandler.afterLoad(); }
			if (isDestinyTheStartingSection() && isFunction(options.afterLoad)) { fireCallback('afterLoad', { activeSection: null, element: section, direction: null, anchorLink: section.getAttribute('data-anchor'), sectionIndex: index(section, SECTION_SEL) }); }
			if (isFunction(options.afterRender)) { fireCallback('afterRender'); }
		}
		function isDestinyTheStartingSection() { var destinationSection = getSectionByAnchor(getAnchorsURL().section); return !destinationSection || typeof destinationSection !== 'undefined' && index(destinationSection) === index(startingSection); }
		var isScrolling = false; var lastScroll = 0; function scrollHandler() {
			var currentSection; if (!options.autoScrolling || options.scrollBar) {
				var currentScroll = getScrollTop(); var scrollDirection = getScrollDirection(currentScroll); var visibleSectionIndex = 0; var screen_mid = currentScroll + (getWindowHeight() / 2.0); var isAtBottom = $body.offsetHeight - getWindowHeight() === currentScroll; var sections = $(SECTION_SEL); if (isAtBottom) { visibleSectionIndex = sections.length - 1; }
				else if (!currentScroll) { visibleSectionIndex = 0; }
				else {
					for (var i = 0; i < sections.length; ++i) {
						var section = sections[i]; if (section.offsetTop <= screen_mid) { visibleSectionIndex = i; }
					}
				}
				if (isCompletelyInViewPort(scrollDirection)) { if (!hasClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY)) { addClass($(SECTION_ACTIVE_SEL)[0], COMPLETELY); removeClass(siblings($(SECTION_ACTIVE_SEL)[0]), COMPLETELY); } }
				currentSection = sections[visibleSectionIndex]; if (!hasClass(currentSection, ACTIVE)) {
					isScrolling = true; var leavingSection = $(SECTION_ACTIVE_SEL)[0]; var leavingSectionIndex = index(leavingSection, SECTION_SEL) + 1; var yMovement = getYmovement(currentSection); var anchorLink = currentSection.getAttribute('data-anchor'); var sectionIndex = index(currentSection, SECTION_SEL) + 1; var activeSlide = $(SLIDE_ACTIVE_SEL, currentSection)[0]; var slideIndex; var slideAnchorLink; var callbacksParams = { activeSection: leavingSection, sectionIndex: sectionIndex - 1, anchorLink: anchorLink, element: currentSection, leavingSection: leavingSectionIndex, direction: yMovement }; if (activeSlide) { slideAnchorLink = activeSlide.getAttribute('data-anchor'); slideIndex = index(activeSlide); }
					if (canScroll) {
						addClass(currentSection, ACTIVE); removeClass(siblings(currentSection), ACTIVE); if (isFunction(options.onLeave)) { fireCallback('onLeave', callbacksParams); }
						if (isFunction(options.afterLoad)) { fireCallback('afterLoad', callbacksParams); }
						stopMedia(leavingSection); lazyLoad(currentSection); playMedia(currentSection); activateMenuAndNav(anchorLink, sectionIndex - 1); if (options.anchors.length) { lastScrolledDestiny = anchorLink; }
						setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
					}
					clearTimeout(scrollId); scrollId = setTimeout(function() { isScrolling = false; }, 100);
				}
				if (options.fitToSection) { clearTimeout(scrollId2); scrollId2 = setTimeout(function() { if (options.fitToSection && $(SECTION_ACTIVE_SEL)[0].offsetHeight <= windowsHeight) { fitToSection(); } }, options.fitToSectionDelay); }
			}
		}
		function fitToSection() { if (canScroll) { isResizing = true; scrollPage($(SECTION_ACTIVE_SEL)[0]); isResizing = false; } }
		function isCompletelyInViewPort(movement) {
			var top = $(SECTION_ACTIVE_SEL)[0].offsetTop; var bottom = top + getWindowHeight(); if (movement == 'up') { return bottom >= (getScrollTop() + getWindowHeight()); }
			return top <= getScrollTop();
		}
		function getScrollDirection(currentScroll) { var direction = currentScroll > lastScroll ? 'down' : 'up'; lastScroll = currentScroll; previousDestTop = currentScroll; return direction; }
		function scrolling(type) {
			if (!isScrollAllowed.m[type]) { return; }
			var scrollSection = (type === 'down') ? moveSectionDown : moveSectionUp; if (options.scrollOverflow) { var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL)[0]); var check = (type === 'down') ? 'bottom' : 'top'; if (scrollable != null) { if (options.scrollOverflowHandler.isScrolled(check, scrollable)) { scrollSection(); } else { return true; } } else { scrollSection(); } } else { scrollSection(); }
		}
		function preventBouncing(e) { if (options.autoScrolling && isReallyTouch(e) && isScrollAllowed.m.up) { preventDefault(e); } }
		var touchStartY = 0; var touchStartX = 0; var touchEndY = 0; var touchEndX = 0; function touchMoveHandler(e) {
			var activeSection = closest(e.target, SECTION_SEL) || $(SECTION_ACTIVE_SEL)[0]; if (isReallyTouch(e)) {
				if (options.autoScrolling) { preventDefault(e); }
				var touchEvents = getEventsPage(e); touchEndY = touchEvents.y; touchEndX = touchEvents.x; if ($(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > (Math.abs(touchStartY - touchEndY))) { if (!slideMoving && Math.abs(touchStartX - touchEndX) > (window.innerWidth / 100 * options.touchSensitivity)) { if (touchStartX > touchEndX) { if (isScrollAllowed.m.right) { moveSlideRight(activeSection); } } else { if (isScrollAllowed.m.left) { moveSlideLeft(activeSection); } } } }
				else if (options.autoScrolling && canScroll) { if (Math.abs(touchStartY - touchEndY) > (window.innerHeight / 100 * options.touchSensitivity)) { if (touchStartY > touchEndY) { scrolling('down'); } else if (touchEndY > touchStartY) { scrolling('up'); } } }
			}
		}
		function isReallyTouch(e) { return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse'; }
		function touchStartHandler(e) {
			if (options.fitToSection) { activeAnimation = false; }
			if (isReallyTouch(e)) { var touchEvents = getEventsPage(e); touchStartY = touchEvents.y; touchStartX = touchEvents.x; }
		}
		function getAverage(elements, number) {
			var sum = 0; var lastElements = elements.slice(Math.max(elements.length - number, 1)); for (var i = 0; i < lastElements.length; i++) { sum = sum + lastElements[i]; }
			return Math.ceil(sum / number);
		}
		var prevTime = new Date().getTime(); function MouseWheelHandler(e) {
			var curTime = new Date().getTime(); var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL); if (!isScrollAllowed.m.down && !isScrollAllowed.m.up) { preventDefault(e); return false; }
			if (options.autoScrolling && !controlPressed && !isNormalScroll) {
				e = e || window.event; var value = e.wheelDelta || -e.deltaY || -e.detail; var delta = Math.max(-1, Math.min(1, value)); var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined'; var isScrollingVertically = (Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta)) || (Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection); if (scrollings.length > 149) { scrollings.shift(); }
				scrollings.push(Math.abs(value)); if (options.scrollBar) { preventDefault(e); }
				var timeDiff = curTime - prevTime; prevTime = curTime; if (timeDiff > 200) { scrollings = []; }
				if (canScroll) { var averageEnd = getAverage(scrollings, 10); var averageMiddle = getAverage(scrollings, 70); var isAccelerating = averageEnd >= averageMiddle; if (isAccelerating && isScrollingVertically) { if (delta < 0) { scrolling('down'); } else { scrolling('up'); } } }
				return false;
			}
			if (options.fitToSection) { activeAnimation = false; }
		}
		function moveSlide(direction, section) {
			var activeSection = section == null ? $(SECTION_ACTIVE_SEL)[0] : section; var slides = $(SLIDES_WRAPPER_SEL, activeSection)[0]; if (slides == null || slideMoving || $(SLIDE_SEL, slides).length < 2) { return; }
			var currentSlide = $(SLIDE_ACTIVE_SEL, slides)[0]; var destiny = null; if (direction === 'left') { destiny = prevUntil(currentSlide, SLIDE_SEL); } else { destiny = nextUntil(currentSlide, SLIDE_SEL); }
			if (destiny == null) { if (!options.loopHorizontal) return; var slideSiblings = siblings(currentSlide); if (direction === 'left') { destiny = slideSiblings[slideSiblings.length - 1]; } else { destiny = slideSiblings[0]; } }
			slideMoving = true && !FP.test.isTesting; landscapeScroll(slides, destiny, direction);
		}
		function keepSlidesPosition() { var activeSlides = $(SLIDE_ACTIVE_SEL); for (var i = 0; i < activeSlides.length; i++) { silentLandscapeScroll(activeSlides[i], 'internal'); } }
		var previousDestTop = 0; function getDestinationPosition(element) {
			var elementHeight = element.offsetHeight; var elementTop = element.offsetTop; var position = elementTop; var isScrollingDown = elementTop > previousDestTop; var sectionBottom = position - windowsHeight + elementHeight; var bigSectionsDestination = options.bigSectionsDestination; if (elementHeight > windowsHeight) { if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom') { position = sectionBottom; } }
			else if (isScrollingDown || (isResizing && next(element) == null)) { position = sectionBottom; }
			previousDestTop = position; return position;
		}
		function scrollPage(element, callback, isMovementUp) {
			if (element == null) { return; }
			var dtop = getDestinationPosition(element); var slideAnchorLink; var slideIndex; var v = { element: element, callback: callback, isMovementUp: isMovementUp, dtop: dtop, yMovement: getYmovement(element), anchorLink: element.getAttribute('data-anchor'), sectionIndex: index(element, SECTION_SEL), activeSlide: $(SLIDE_ACTIVE_SEL, element)[0], activeSection: $(SECTION_ACTIVE_SEL)[0], leavingSection: index($(SECTION_ACTIVE_SEL), SECTION_SEL) + 1, localIsResizing: isResizing }; if ((v.activeSection == element && !isResizing) || (options.scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT))) { return; }
			if (v.activeSlide != null) { slideAnchorLink = v.activeSlide.getAttribute('data-anchor'); slideIndex = index(v.activeSlide); }
			if (!v.localIsResizing) {
				var direction = v.yMovement; if (typeof isMovementUp !== 'undefined') { direction = isMovementUp ? 'up' : 'down'; }
				v.direction = direction; if (isFunction(options.onLeave)) { if (fireCallback('onLeave', v) === false) { return; } }
			}
			if (options.autoScrolling && options.continuousVertical && typeof (v.isMovementUp) !== "undefined" && ((!v.isMovementUp && v.yMovement == 'up') || (v.isMovementUp && v.yMovement == 'down'))) { v = createInfiniteSections(v); }
			if (!v.localIsResizing) { stopMedia(v.activeSection); }
			if (options.scrollOverflow) { options.scrollOverflowHandler.beforeLeave(); }
			addClass(element, ACTIVE); removeClass(siblings(element), ACTIVE); lazyLoad(element); if (options.scrollOverflow) { options.scrollOverflowHandler.onLeave(); }
			canScroll = false || FP.test.isTesting; setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex); performMovement(v); lastScrolledDestiny = v.anchorLink; activateMenuAndNav(v.anchorLink, v.sectionIndex);
		}
		function fireCallback(eventName, v) {
			var eventData = getEventData(eventName, v); if (!options.v2compatible) { trigger(container, eventName, eventData); if (options[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false) { return false; } }
			else { if (options[eventName].apply(eventData[0], eventData.slice(1)) === false) { return false; } }
			return true;
		}
		function nullOrSection(el) { return el ? new Section(el) : null; }
		function nullOrSlide(el) { return el ? new Slide(el) : null; }
		function getEventData(eventName, v) {
			var paramsPerEvent; if (!options.v2compatible) { paramsPerEvent = { afterRender: function() { return { section: nullOrSection($(SECTION_ACTIVE_SEL)[0]), slide: nullOrSlide($(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0]) }; }, onLeave: function() { return { origin: nullOrSection(v.activeSection), destination: nullOrSection(v.element), direction: v.direction }; }, afterLoad: function() { return paramsPerEvent.onLeave(); }, afterSlideLoad: function() { return { section: nullOrSection(v.section), origin: nullOrSlide(v.prevSlide), destination: nullOrSlide(v.destiny), direction: v.direction }; }, onSlideLeave: function() { return paramsPerEvent.afterSlideLoad(); } }; }
			else { paramsPerEvent = { afterRender: function() { return [container]; }, onLeave: function() { return [v.activeSection, v.leavingSection, (v.sectionIndex + 1), v.direction]; }, afterLoad: function() { return [v.element, v.anchorLink, (v.sectionIndex + 1)]; }, afterSlideLoad: function() { return [v.destiny, v.anchorLink, (v.sectionIndex + 1), v.slideAnchor, v.slideIndex]; }, onSlideLeave: function() { return [v.prevSlide, v.anchorLink, (v.sectionIndex + 1), v.prevSlideIndex, v.direction, v.slideIndex]; }, }; }
			return paramsPerEvent[eventName]();
		}
		function performMovement(v) {
			if (options.css3 && options.autoScrolling && !options.scrollBar) { var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)'; transformContainer(translate3d, true); if (options.scrollingSpeed) { clearTimeout(afterSectionLoadsId); afterSectionLoadsId = setTimeout(function() { afterSectionLoads(v); }, options.scrollingSpeed); } else { afterSectionLoads(v); } }
			else { var scrollSettings = getScrollSettings(v.dtop); FP.test.top = -v.dtop + 'px'; scrollTo(scrollSettings.element, scrollSettings.options, options.scrollingSpeed, function() { if (options.scrollBar) { setTimeout(function() { afterSectionLoads(v); }, 30); } else { afterSectionLoads(v); } }); }
		}
		function getScrollSettings(top) {
			var scroll = {}; if (options.autoScrolling && !options.scrollBar) { scroll.options = -top; scroll.element = $(WRAPPER_SEL)[0]; }
			else { scroll.options = top; scroll.element = window; }
			return scroll;
		}
		function createInfiniteSections(v) {
			if (!v.isMovementUp) { after($(SECTION_ACTIVE_SEL)[0], prevAll(v.activeSection, SECTION_SEL).reverse()); }
			else { before($(SECTION_ACTIVE_SEL)[0], nextAll(v.activeSection, SECTION_SEL)); }
			silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop); keepSlidesPosition(); v.wrapAroundElements = v.activeSection; v.dtop = v.element.offsetTop; v.yMovement = getYmovement(v.element); v.leavingSection = index(v.activeSection, SECTION_SEL) + 1; v.sectionIndex = index(v.element, SECTION_SEL); return v;
		}
		function continuousVerticalFixSectionOrder(v) {
			if (v.wrapAroundElements == null) { return; }
			if (v.isMovementUp) { before($(SECTION_SEL)[0], v.wrapAroundElements); }
			else { after($(SECTION_SEL)[$(SECTION_SEL).length - 1], v.wrapAroundElements); }
			silentScroll($(SECTION_ACTIVE_SEL)[0].offsetTop); keepSlidesPosition();
		}
		function afterSectionLoads(v) {
			continuousVerticalFixSectionOrder(v); if (isFunction(options.afterLoad) && !v.localIsResizing) { fireCallback('afterLoad', v); }
			if (options.scrollOverflow) { options.scrollOverflowHandler.afterLoad(); }
			if (!v.localIsResizing) { playMedia(v.element); }
			addClass(v.element, COMPLETELY); removeClass(siblings(v.element), COMPLETELY); canScroll = true; if (isFunction(v.callback)) { v.callback(); }
		}
		function setSrc(element, attribute) { element.setAttribute(attribute, element.getAttribute('data-' + attribute)); element.removeAttribute('data-' + attribute); }
		function lazyLoad(destiny) {
			if (!options.lazyLoading) { return; }
			var panel = getSlideOrSection(destiny); $('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function(element) { ['src', 'srcset'].forEach(function(type) { var attribute = element.getAttribute('data-' + type); if (attribute != null && attribute) { setSrc(element, type); } }); if (matches(element, 'source')) { var elementToPlay = closest(element, 'video, audio'); if (elementToPlay) { elementToPlay.load(); } } });
		}
		function playMedia(destiny) {
			var panel = getSlideOrSection(destiny); $('video, audio', panel).forEach(function(element) { if (element.hasAttribute('data-autoplay') && typeof element.play === 'function') { element.play(); } }); $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element) {
				if (element.hasAttribute('data-autoplay')) { playYoutube(element); }
				element.onload = function() { if (element.hasAttribute('data-autoplay')) { playYoutube(element); } };
			});
		}
		function playYoutube(element) { element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*'); }
		function stopMedia(destiny) { var panel = getSlideOrSection(destiny); $('video, audio', panel).forEach(function(element) { if (!element.hasAttribute('data-keepplaying') && typeof element.pause === 'function') { element.pause(); } }); $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element) { if (/youtube\.com\/embed\//.test(element.getAttribute('src')) && !element.hasAttribute('data-keepplaying')) { element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'); } }); }
		function getSlideOrSection(destiny) {
			var slide = $(SLIDE_ACTIVE_SEL, destiny); if (slide.length) { destiny = slide[0]; }
			return destiny;
		}
		function scrollToAnchor() { var anchors = getAnchorsURL(); var sectionAnchor = anchors.section; var slideAnchor = anchors.slide; if (sectionAnchor) { if (options.animateAnchor) { scrollPageAndSlide(sectionAnchor, slideAnchor); } else { silentMoveTo(sectionAnchor, slideAnchor); } } }
		function hashChangeHandler() { if (!isScrolling && !options.lockAnchors) { var anchors = getAnchorsURL(); var sectionAnchor = anchors.section; var slideAnchor = anchors.slide; var isFirstSlideMove = (typeof lastScrolledDestiny === 'undefined'); var isFirstScrollMove = (typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving); if (sectionAnchor && sectionAnchor.length) { if ((sectionAnchor && sectionAnchor !== lastScrolledDestiny) && !isFirstSlideMove || isFirstScrollMove || (!slideMoving && lastScrolledSlide != slideAnchor)) { scrollPageAndSlide(sectionAnchor, slideAnchor); } } } }
		function getAnchorsURL() {
			var section; var slide; var hash = window.location.hash; if (hash.length) { var anchorsParts = hash.replace('#', '').split('/'); var isFunkyAnchor = hash.indexOf('#/') > -1; section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]); var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1]; if (slideAnchor && slideAnchor.length) { slide = decodeURIComponent(slideAnchor); } }
			return { section: section, slide: slide };
		}
		function keydownHandler(e) {
			clearTimeout(keydownId); var activeElement = document.activeElement; var keyCode = e.keyCode; if (keyCode === 9) { onTab(e); }
			else if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select') && activeElement.getAttribute('contentEditable') !== "true" && activeElement.getAttribute('contentEditable') !== '' && options.keyboardScrolling && options.autoScrolling) {
				var keyControls = [40, 38, 32, 33, 34]; if (keyControls.indexOf(keyCode) > -1) { preventDefault(e); }
				controlPressed = e.ctrlKey; keydownId = setTimeout(function() { onkeydown(e); }, 150);
			}
		}
		function tooltipTextHandler() { trigger(prev(this), 'click'); }
		function keyUpHandler(e) { if (isWindowFocused) { controlPressed = e.ctrlKey; } }
		function mouseDownHandler(e) { if (e.which == 2) { oldPageY = e.pageY; container.addEventListener('mousemove', mouseMoveHandler); } }
		function mouseUpHandler(e) { if (e.which == 2) { container.removeEventListener('mousemove', mouseMoveHandler); } }
		function onTab(e) {
			var isShiftPressed = e.shiftKey; var activeElement = document.activeElement; var focusableElements = getFocusables(getSlideOrSection($(SECTION_ACTIVE_SEL)[0])); function preventAndFocusFirst(e) { preventDefault(e); return focusableElements[0] ? focusableElements[0].focus() : null; }
			if (isFocusOutside(e)) { return; }
			if (activeElement) { if (closest(activeElement, SECTION_ACTIVE_SEL + ',' + SECTION_ACTIVE_SEL + ' ' + SLIDE_ACTIVE_SEL) == null) { activeElement = preventAndFocusFirst(e); } }
			else { preventAndFocusFirst(e); }
			if (!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] || isShiftPressed && activeElement == focusableElements[0]) { preventDefault(e); }
		}
		function getFocusables(el) { return [].slice.call($(focusableElementsString, el)).filter(function(item) { return item.getAttribute('tabindex') !== '-1' && item.offsetParent !== null; }); }
		function isFocusOutside(e) { var allFocusables = getFocusables(document); var currentFocusIndex = allFocusables.indexOf(document.activeElement); var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1; var focusDestination = allFocusables[focusDestinationIndex]; var destinationItemSlide = nullOrSlide(closest(focusDestination, SLIDE_SEL)); var destinationItemSection = nullOrSection(closest(focusDestination, SECTION_SEL)); return !destinationItemSlide && !destinationItemSection; }
		function slideArrowHandler() { var section = closest(this, SECTION_SEL); if (hasClass(this, SLIDES_PREV)) { if (isScrollAllowed.m.left) { moveSlideLeft(section); } } else { if (isScrollAllowed.m.right) { moveSlideRight(section); } } }
		function blurHandler() { isWindowFocused = false; controlPressed = false; }
		function sectionBulletHandler(e) { preventDefault(e); var indexBullet = index(closest(this, SECTION_NAV_SEL + ' li')); scrollPage($(SECTION_SEL)[indexBullet]); }
		function slideBulletHandler(e) { preventDefault(e); var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0]; var destiny = $(SLIDE_SEL, slides)[index(closest(this, 'li'))]; landscapeScroll(slides, destiny); }
		function menuItemsHandler(e) { if ($(options.menu)[0] && (options.lockAnchors || !options.anchors.length)) { preventDefault(e); moveTo(this.getAttribute('data-menuanchor')); } }
		function onkeydown(e) {
			var shiftPressed = e.shiftKey; if (!canScroll && [37, 39].indexOf(e.keyCode) < 0) { return; }
			switch (e.keyCode) {
				case 38: case 33: if (isScrollAllowed.k.up) { moveSectionUp(); }
					break; case 32: if (shiftPressed && isScrollAllowed.k.up) { moveSectionUp(); break; }
				case 40: case 34: if (isScrollAllowed.k.down) { moveSectionDown(); }
					break; case 36: if (isScrollAllowed.k.up) { moveTo(1); }
					break; case 35: if (isScrollAllowed.k.down) { moveTo($(SECTION_SEL).length); }
					break; case 37: if (isScrollAllowed.k.left) { moveSlideLeft(); }
					break; case 39: if (isScrollAllowed.k.right) { moveSlideRight(); }
					break; default: return;
			}
		}
		var oldPageY = 0; function mouseMoveHandler(e) {
			if (canScroll) {
				if (e.pageY < oldPageY && isScrollAllowed.m.up) { moveSectionUp(); }
				else if (e.pageY > oldPageY && isScrollAllowed.m.down) { moveSectionDown(); }
			}
			oldPageY = e.pageY;
		}
		function landscapeScroll(slides, destiny, direction) {
			var section = closest(slides, SECTION_SEL); var v = { slides: slides, destiny: destiny, direction: direction, destinyPos: { left: destiny.offsetLeft }, slideIndex: index(destiny), section: section, sectionIndex: index(section, SECTION_SEL), anchorLink: section.getAttribute('data-anchor'), slidesNav: $(SLIDES_NAV_SEL, section)[0], slideAnchor: getAnchor(destiny), prevSlide: $(SLIDE_ACTIVE_SEL, section)[0], prevSlideIndex: index($(SLIDE_ACTIVE_SEL, section)[0]), localIsResizing: isResizing }; v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex); v.direction = v.direction ? v.direction : v.xMovement; if (!v.localIsResizing) { canScroll = false; }
			if (options.onSlideLeave) { if (!v.localIsResizing && v.xMovement !== 'none') { if (isFunction(options.onSlideLeave)) { if (fireCallback('onSlideLeave', v) === false) { slideMoving = false; return; } } } }
			addClass(destiny, ACTIVE); removeClass(siblings(destiny), ACTIVE); if (!v.localIsResizing) { stopMedia(v.prevSlide); lazyLoad(destiny); }
			if (!options.loopHorizontal && options.controlArrows) { toggle($(SLIDES_ARROW_PREV_SEL, section), v.slideIndex !== 0); toggle($(SLIDES_ARROW_NEXT_SEL, section), next(destiny) != null); }
			if (hasClass(section, ACTIVE) && !v.localIsResizing) { setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex); }
			performHorizontalMove(slides, v, true);
		}
		function afterSlideLoads(v) {
			activeSlidesNavigation(v.slidesNav, v.slideIndex); if (!v.localIsResizing) {
				if (isFunction(options.afterSlideLoad)) { fireCallback('afterSlideLoad', v); }
				canScroll = true; playMedia(v.destiny);
			}
			slideMoving = false;
		}
		function performHorizontalMove(slides, v, fireCallback) { var destinyPos = v.destinyPos; if (options.css3) { var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)'; FP.test.translate3dH[v.sectionIndex] = translate3d; css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d)); afterSlideLoadsId = setTimeout(function() { if (fireCallback) { afterSlideLoads(v); } }, options.scrollingSpeed); } else { FP.test.left[v.sectionIndex] = Math.round(destinyPos.left); scrollTo(slides, Math.round(destinyPos.left), options.scrollingSpeed, function() { if (fireCallback) { afterSlideLoads(v); } }); } }
		function activeSlidesNavigation(slidesNav, slideIndex) { if (options.slidesNavigation && slidesNav != null) { removeClass($(ACTIVE_SEL, slidesNav), ACTIVE); addClass($('a', $('li', slidesNav)[slideIndex]), ACTIVE); } }
		var previousHeight = windowsHeight; function resizeHandler() { responsive(); if (isTouchDevice) { var activeElement = document.activeElement; if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select')) { var currentHeight = getWindowHeight(); if (Math.abs(currentHeight - previousHeight) > (20 * Math.max(previousHeight, currentHeight) / 100)) { resizeId = setTimeout(function() { reBuild(true); previousHeight = currentHeight; }, navigator.userAgent.match('CriOS') ? 50 : 0); } } } else { clearTimeout(resizeId); resizeId = setTimeout(function() { reBuild(true); }, 350); } }
		function responsive() {
			var widthLimit = options.responsive || options.responsiveWidth; var heightLimit = options.responsiveHeight; var isBreakingPointWidth = widthLimit && window.innerWidth < widthLimit; var isBreakingPointHeight = heightLimit && window.innerHeight < heightLimit; if (widthLimit && heightLimit) { setResponsive(isBreakingPointWidth || isBreakingPointHeight); }
			else if (widthLimit) { setResponsive(isBreakingPointWidth); }
			else if (heightLimit) { setResponsive(isBreakingPointHeight); }
		}
		function addAnimation(element) { var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3; removeClass(element, NO_TRANSITION); return css(element, { '-webkit-transition': transition, 'transition': transition }); }
		function removeAnimation(element) { return addClass(element, NO_TRANSITION); }
		function activateNavDots(name, sectionIndex) { if (options.navigation && $(SECTION_NAV_SEL)[0] != null) { removeClass($(ACTIVE_SEL, $(SECTION_NAV_SEL)[0]), ACTIVE); if (name) { addClass($('a[href="#' + name + '"]', $(SECTION_NAV_SEL)[0]), ACTIVE); } else { addClass($('a', $('li', $(SECTION_NAV_SEL)[0])[sectionIndex]), ACTIVE); } } }
		function activateMenuElement(name) { $(options.menu).forEach(function(menu) { if (options.menu && menu != null) { removeClass($(ACTIVE_SEL, menu), ACTIVE); addClass($('[data-menuanchor="' + name + '"]', menu), ACTIVE); } }); }
		function activateMenuAndNav(anchor, index) { activateMenuElement(anchor); activateNavDots(anchor, index); }
		function getYmovement(destiny) {
			var fromIndex = index($(SECTION_ACTIVE_SEL)[0], SECTION_SEL); var toIndex = index(destiny, SECTION_SEL); if (fromIndex == toIndex) { return 'none'; }
			if (fromIndex > toIndex) { return 'up'; }
			return 'down';
		}
		function getXmovement(fromIndex, toIndex) {
			if (fromIndex == toIndex) { return 'none'; }
			if (fromIndex > toIndex) { return 'left'; }
			return 'right';
		}
		function addTableClass(element) { if (!hasClass(element, TABLE)) { var wrapper = document.createElement('div'); wrapper.className = TABLE_CELL; wrapper.style.height = getTableHeight(element) + 'px'; addClass(element, TABLE); wrapInner(element, wrapper); } }
		function getTableHeight(element) {
			var sectionHeight = windowsHeight; if (options.paddingTop || options.paddingBottom) {
				var section = element; if (!hasClass(section, SECTION)) { section = closest(element, SECTION_SEL); }
				var paddings = parseInt(getComputedStyle(section)['padding-top']) + parseInt(getComputedStyle(section)['padding-bottom']); sectionHeight = (windowsHeight - paddings);
			}
			return sectionHeight;
		}
		function transformContainer(translate3d, animated) {
			if (animated) { addAnimation(container); } else { removeAnimation(container); }
			css(container, getTransforms(translate3d)); FP.test.translate3d = translate3d; setTimeout(function() { removeClass(container, NO_TRANSITION); }, 10);
		}
		function getSectionByAnchor(sectionAnchor) {
			var section = $(SECTION_SEL + '[data-anchor="' + sectionAnchor + '"]', container)[0]; if (!section) { var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor - 1 : 0; section = $(SECTION_SEL)[sectionIndex]; }
			return section;
		}
		function getSlideByAnchor(slideAnchor, section) {
			var slide = $(SLIDE_SEL + '[data-anchor="' + slideAnchor + '"]', section)[0]; if (slide == null) { slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0; slide = $(SLIDE_SEL, section)[slideAnchor]; }
			return slide;
		}
		function scrollPageAndSlide(sectionAnchor, slideAnchor) {
			var section = getSectionByAnchor(sectionAnchor); if (section == null) return; var slide = getSlideByAnchor(slideAnchor, section); if (getAnchor(section) !== lastScrolledDestiny && !hasClass(section, ACTIVE)) { scrollPage(section, function() { scrollSlider(slide); }); }
			else { scrollSlider(slide); }
		}
		function scrollSlider(slide) { if (slide != null) { landscapeScroll(closest(slide, SLIDES_WRAPPER_SEL), slide); } }
		function addSlidesNavigation(section, numSlides) {
			appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), section); var nav = $(SLIDES_NAV_SEL, section)[0]; addClass(nav, 'fp-' + options.slidesNavPosition); for (var i = 0; i < numSlides; i++) { appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">' + getBulletLinkName(i, 'Slide') + '</span><span></span></a></li>'), $('ul', nav)[0]); }
			css(nav, { 'margin-left': '-' + (nav.innerWidth / 2) + 'px' }); addClass($('a', $('li', nav)[0]), ACTIVE);
		}
		function setState(slideIndex, slideAnchor, anchorLink, sectionIndex) {
			var sectionHash = ''; if (options.anchors.length && !options.lockAnchors) {
				if (slideIndex) {
					if (anchorLink != null) { sectionHash = anchorLink; }
					if (slideAnchor == null) { slideAnchor = slideIndex; }
					lastScrolledSlide = slideAnchor; setUrlHash(sectionHash + '/' + slideAnchor);
				} else if (slideIndex != null) { lastScrolledSlide = slideAnchor; setUrlHash(anchorLink); }
				else { setUrlHash(anchorLink); }
			}
			setBodyClass();
		}
		function setUrlHash(url) { if (options.recordHistory) { location.hash = url; } else { if (isTouchDevice || isTouch) { window.history.replaceState(undefined, undefined, '#' + url); } else { var baseUrl = window.location.href.split('#')[0]; window.location.replace(baseUrl + '#' + url); } } }
		function getAnchor(element) {
			if (!element) { return null; }
			var anchor = element.getAttribute('data-anchor'); var elementIndex = index(element); if (anchor == null) { anchor = elementIndex; }
			return anchor;
		}
		function setBodyClass() {
			var section = $(SECTION_ACTIVE_SEL)[0]; var slide = $(SLIDE_ACTIVE_SEL, section)[0]; var sectionAnchor = getAnchor(section); var slideAnchor = getAnchor(slide); var text = String(sectionAnchor); if (slide) { text = text + '-' + slideAnchor; }
			text = text.replace('/', '-').replace('#', ''); var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g"); $body.className = $body.className.replace(classRe, ''); addClass($body, VIEWING_PREFIX + '-' + text);
		}
		function support3d() {
			var el = document.createElement('p'), has3d, transforms = { 'webkitTransform': '-webkit-transform', 'OTransform': '-o-transform', 'msTransform': '-ms-transform', 'MozTransform': '-moz-transform', 'transform': 'transform' }; el.style.display = 'block'
			document.body.insertBefore(el, null); for (var t in transforms) { if (el.style[t] !== undefined) { el.style[t] = 'translate3d(1px,1px,1px)'; has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]); } }
			document.body.removeChild(el); return (has3d !== undefined && has3d.length > 0 && has3d !== 'none');
		}
		function removeMouseWheelHandler() { if (document.addEventListener) { document.removeEventListener('mousewheel', MouseWheelHandler, false); document.removeEventListener('wheel', MouseWheelHandler, false); document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); } else { document.detachEvent('onmousewheel', MouseWheelHandler); } }
		function addMouseWheelHandler() {
			var prefix = ''; var _addEventListener; if (window.addEventListener) { _addEventListener = "addEventListener"; } else { _addEventListener = "attachEvent"; prefix = 'on'; }
			var support = 'onwheel' in document.createElement('div') ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll'; var passiveEvent = g_supportsPassive ? { passive: false } : false; if (support == 'DOMMouseScroll') { document[_addEventListener](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent); }
			else { document[_addEventListener](prefix + support, MouseWheelHandler, passiveEvent); }
		}
		function addMiddleWheelHandler() { container.addEventListener('mousedown', mouseDownHandler); container.addEventListener('mouseup', mouseUpHandler); }
		function removeMiddleWheelHandler() { container.removeEventListener('mousedown', mouseDownHandler); container.removeEventListener('mouseup', mouseUpHandler); }
		function addTouchHandler() {
			if (isTouchDevice || isTouch) {
				if (options.autoScrolling) { $body.removeEventListener(events.touchmove, preventBouncing, { passive: false }); $body.addEventListener(events.touchmove, preventBouncing, { passive: false }); }
				var touchWrapper = options.touchWrapper; touchWrapper.removeEventListener(events.touchstart, touchStartHandler); touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, { passive: false }); touchWrapper.addEventListener(events.touchstart, touchStartHandler); touchWrapper.addEventListener(events.touchmove, touchMoveHandler, { passive: false });
			}
		}
		function removeTouchHandler() {
			if (isTouchDevice || isTouch) {
				if (options.autoScrolling) { $body.removeEventListener(events.touchmove, touchMoveHandler, { passive: false }); $body.removeEventListener(events.touchmove, preventBouncing, { passive: false }); }
				var touchWrapper = options.touchWrapper; touchWrapper.removeEventListener(events.touchstart, touchStartHandler); touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, { passive: false });
			}
		}
		function getMSPointer() {
			var pointer; if (window.PointerEvent) { pointer = { down: 'pointerdown', move: 'pointermove' }; }
			else { pointer = { down: 'MSPointerDown', move: 'MSPointerMove' }; }
			return pointer;
		}
		function getEventsPage(e) {
			var events = []; events.y = (typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY); events.x = (typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX); if (isTouch && isReallyTouch(e) && options.scrollBar && typeof e.touches !== 'undefined') { events.y = e.touches[0].pageY; events.x = e.touches[0].pageX; }
			return events;
		}
		function silentLandscapeScroll(activeSlide, noCallbacks) {
			setScrollingSpeed(0, 'internal'); if (typeof noCallbacks !== 'undefined') { isResizing = true; }
			landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide); if (typeof noCallbacks !== 'undefined') { isResizing = false; }
			setScrollingSpeed(originals.scrollingSpeed, 'internal');
		}
		function silentScroll(top) {
			var roundedTop = Math.round(top); if (options.css3 && options.autoScrolling && !options.scrollBar) { var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)'; transformContainer(translate3d, false); }
			else if (options.autoScrolling && !options.scrollBar) { css(container, { 'top': -roundedTop + 'px' }); FP.test.top = -roundedTop + 'px'; }
			else { var scrollSettings = getScrollSettings(roundedTop); setScrolling(scrollSettings.element, scrollSettings.options); }
		}
		function getTransforms(translate3d) { return { '-webkit-transform': translate3d, '-moz-transform': translate3d, '-ms-transform': translate3d, 'transform': translate3d }; }
		function setIsScrollAllowed(value, direction, type) {
			if (direction !== 'all') { isScrollAllowed[type][direction] = value; }
			else { Object.keys(isScrollAllowed[type]).forEach(function(key) { isScrollAllowed[type][key] = value; }); }
		}
		function destroy(all) { setAutoScrolling(false, 'internal'); setAllowScrolling(true); setMouseHijack(false); setKeyboardScrolling(false); addClass(container, DESTROYED); clearTimeout(afterSlideLoadsId); clearTimeout(afterSectionLoadsId); clearTimeout(resizeId); clearTimeout(scrollId); clearTimeout(scrollId2); window.removeEventListener('scroll', scrollHandler); window.removeEventListener('hashchange', hashChangeHandler); window.removeEventListener('resize', resizeHandler); document.removeEventListener('keydown', keydownHandler); document.removeEventListener('keyup', keyUpHandler);['click', 'touchstart'].forEach(function(eventName) { document.removeEventListener(eventName, delegatedEvents); });['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function(eventName) { document.removeEventListener(eventName, onMouseEnterOrLeave, true); }); clearTimeout(afterSlideLoadsId); clearTimeout(afterSectionLoadsId); if (all) { destroyStructure(); } }
		function destroyStructure() {
			silentScroll(0); $('img[data-src], source[data-src], audio[data-src], iframe[data-src]', container).forEach(function(item) { setSrc(item, 'src'); }); $('img[data-srcset]').forEach(function(item) { setSrc(item, 'srcset'); }); remove($(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL + ', ' + SLIDES_ARROW_SEL)); css($(SECTION_SEL), { 'height': '', 'background-color': '', 'padding': '' }); css($(SLIDE_SEL), { 'width': '' }); css(container, { 'height': '', 'position': '', '-ms-touch-action': '', 'touch-action': '' }); css($htmlBody, { 'overflow': '', 'height': '' }); removeClass($('html'), ENABLED); removeClass($body, RESPONSIVE); $body.className.split(/\s+/).forEach(function(className) { if (className.indexOf(VIEWING_PREFIX) === 0) { removeClass($body, className); } }); $(SECTION_SEL + ', ' + SLIDE_SEL).forEach(function(item) {
				if (options.scrollOverflowHandler && options.scrollOverflow) { options.scrollOverflowHandler.remove(item); }
				removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY); var previousStyles = item.getAttribute('data-fp-styles'); if (previousStyles) { item.setAttribute('style', item.getAttribute('data-fp-styles')); }
				if (hasClass(item, SECTION) && !g_initialAnchorsInDom) { item.removeAttribute('data-anchor'); }
			}); removeAnimation(container);[TABLE_CELL_SEL, SLIDES_CONTAINER_SEL, SLIDES_WRAPPER_SEL].forEach(function(selector) { $(selector, container).forEach(function(item) { unwrap(item); }); }); css(container, { '-webkit-transition': 'none', 'transition': 'none' }); window.scrollTo(0, 0); var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER]; usedSelectors.forEach(function(item) { removeClass($('.' + item), item); });
		}
		function setVariableState(variable, value, type) { options[variable] = value; if (type !== 'internal') { originals[variable] = value; } }
		function displayWarnings() {
			var l = options['li' + 'c' + 'enseK' + 'e' + 'y']; var msgStyle = 'font-size: 15px;background:yellow;'
			if (!isOK) { showError('error', 'Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:'); showError('error', 'https://github.com/alvarotrigo/fullPage.js#options.'); }
			else if (l && l.length < 20) { console.warn('%c This website was made using fullPage.js slider. More info on the following website:', msgStyle); console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle); }
			var extensions = ['fadingEffect', 'continuousHorizontal', 'scrollHorizontally', 'interlockedSlides', 'resetSliders', 'responsiveSlides', 'offsetSections', 'dragAndMove', 'scrollOverflowReset', 'parallax', 'cards']; if (hasClass($('html'), ENABLED)) { showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!'); return; }
			if (options.continuousVertical && (options.loopTop || options.loopBottom)) { options.continuousVertical = false; showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled'); }
			if (options.scrollOverflow && (options.scrollBar || !options.autoScrolling)) { showError('warn', 'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox'); }
			if (options.continuousVertical && (options.scrollBar || !options.autoScrolling)) { options.continuousVertical = false; showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled'); }
			if (options.scrollOverflow && options.scrollOverflowHandler == null) { options.scrollOverflow = false; showError('error', 'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.'); }
			extensions.forEach(function(extension) { if (options[extension]) { showError('warn', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: ' + extension); } }); options.anchors.forEach(function(name) {
				var nameAttr = [].slice.call($('[name]')).filter(function(item) { return item.getAttribute('name') && item.getAttribute('name').toLowerCase() == name.toLowerCase(); }); var idAttr = [].slice.call($('[id]')).filter(function(item) { return item.getAttribute('id') && item.getAttribute('id').toLowerCase() == name.toLowerCase(); }); if (idAttr.length || nameAttr.length) {
					showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).'); if (idAttr.length) { showError('error', '"' + name + '" is is being used by another element `id` property'); }
					if (nameAttr.length) { showError('error', '"' + name + '" is is being used by another element `name` property'); }
				}
			});
		}
		function getScrolledPosition(element) {
			var position; if (element.self != window && hasClass(element, SLIDES_WRAPPER)) { position = element.scrollLeft; }
			else if (!options.autoScrolling || options.scrollBar) { position = getScrollTop(); }
			else { position = element.offsetTop; }
			return position;
		}
		function scrollTo(element, to, duration, callback) {
			var start = getScrolledPosition(element); var change = to - start; var currentTime = 0; var increment = 20; activeAnimation = true; var animateScroll = function() {
				if (activeAnimation) {
					var val = to; currentTime += increment; if (duration) { val = window.fp_easings[options.easing](currentTime, start, change, duration); }
					setScrolling(element, val); if (currentTime < duration) { setTimeout(animateScroll, increment); } else if (typeof callback !== 'undefined') { callback(); }
				} else if (currentTime < duration) { callback(); }
			}; animateScroll();
		}
		function setScrolling(element, val) {
			if (!options.autoScrolling || options.scrollBar || (element.self != window && hasClass(element, SLIDES_WRAPPER))) {
				if (element.self != window && hasClass(element, SLIDES_WRAPPER)) { element.scrollLeft = val; }
				else { element.scrollTo(0, val); }
			} else { element.style.top = val + 'px'; }
		}
		function getActiveSlide() { var activeSlide = $(SLIDE_ACTIVE_SEL, $(SECTION_ACTIVE_SEL)[0])[0]; return nullOrSlide(activeSlide); }
		function getActiveSection() { return new Section($(SECTION_ACTIVE_SEL)[0]); }
		function Item(el, selector) { this.anchor = el.getAttribute('data-anchor'); this.item = el; this.index = index(el, selector); this.isLast = this.index === el.parentElement.querySelectorAll(selector).length - 1; this.isFirst = !this.index; }
		function Section(el) { Item.call(this, el, SECTION_SEL); }
		function Slide(el) { Item.call(this, el, SLIDE_SEL); }
		return FP;
	}
	function showError(type, text) { }
	function $(selector, context) { context = arguments.length > 1 ? context : document; return context ? context.querySelectorAll(selector) : null; }
	function deepExtend(out) {
		out = out || {}; for (var i = 1, len = arguments.length; i < len; ++i) {
			var obj = arguments[i]; if (!obj) { continue; }
			for (var key in obj) {
				if (!obj.hasOwnProperty(key)) { continue; }
				if (Object.prototype.toString.call(obj[key]) === '[object Object]') { out[key] = deepExtend(out[key], obj[key]); continue; }
				out[key] = obj[key];
			}
		}
		return out;
	}
	function hasClass(el, className) {
		if (el == null) { return false; }
		if (el.classList) { return el.classList.contains(className); }
		return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
	}
	function getWindowHeight() { return 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight; }
	function css(items, props) {
		items = getList(items); var key; for (key in props) { if (props.hasOwnProperty(key)) { if (key !== null) { for (var i = 0; i < items.length; i++) { var item = items[i]; item.style[key] = props[key]; } } } }
		return items;
	}
	function until(item, selector, fn) {
		var sibling = item[fn]; while (sibling && !matches(sibling, selector)) { sibling = sibling[fn]; }
		return sibling;
	}
	function prevUntil(item, selector) { return until(item, selector, 'previousElementSibling'); }
	function nextUntil(item, selector) { return until(item, selector, 'nextElementSibling'); }
	function prev(item) { return item.previousElementSibling; }
	function next(item) { return item.nextElementSibling; }
	function last(item) { return item[item.length - 1]; }
	function index(item, selector) {
		item = isArrayOrList(item) ? item[0] : item; var children = selector != null ? $(selector, item.parentNode) : item.parentNode.childNodes; var num = 0; for (var i = 0; i < children.length; i++) { if (children[i] == item) return num; if (children[i].nodeType == 1) num++; }
		return -1;
	}
	function getList(item) { return !isArrayOrList(item) ? [item] : item; }
	function hide(el) {
		el = getList(el); for (var i = 0; i < el.length; i++) { el[i].style.display = 'none'; }
		return el;
	}
	function show(el) {
		el = getList(el); for (var i = 0; i < el.length; i++) { el[i].style.display = 'block'; }
		return el;
	}
	function isArrayOrList(el) { return Object.prototype.toString.call(el) === '[object Array]' || Object.prototype.toString.call(el) === '[object NodeList]'; }
	function addClass(el, className) {
		el = getList(el); for (var i = 0; i < el.length; i++) {
			var item = el[i]; if (item.classList) { item.classList.add(className); }
			else { item.className += ' ' + className; }
		}
		return el;
	}
	function removeClass(el, className) {
		el = getList(el); var classNames = className.split(' '); for (var a = 0; a < classNames.length; a++) {
			className = classNames[a]; for (var i = 0; i < el.length; i++) {
				var item = el[i]; if (item.classList) { item.classList.remove(className); }
				else { item.className = item.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' '); }
			}
		}
		return el;
	}
	function appendTo(el, parent) { parent.appendChild(el); }
	function wrap(toWrap, wrapper, isWrapAll) {
		var newParent; wrapper = wrapper || document.createElement('div'); for (var i = 0; i < toWrap.length; i++) {
			var item = toWrap[i]; if (isWrapAll && !i || !isWrapAll) { newParent = wrapper.cloneNode(true); item.parentNode.insertBefore(newParent, item); }
			newParent.appendChild(item);
		}
		return toWrap;
	}
	function wrapAll(toWrap, wrapper) { wrap(toWrap, wrapper, true); }
	function wrapInner(parent, wrapper) {
		if (typeof wrapper === "string") { wrapper = createElementFromHTML(wrapper); }
		parent.appendChild(wrapper); while (parent.firstChild !== wrapper) { wrapper.appendChild(parent.firstChild); }
	}
	function unwrap(wrapper) {
		var wrapperContent = document.createDocumentFragment(); while (wrapper.firstChild) { wrapperContent.appendChild(wrapper.firstChild); }
		wrapper.parentNode.replaceChild(wrapperContent, wrapper);
	}
	function closest(el, selector) {
		if (el && el.nodeType === 1) {
			if (matches(el, selector)) { return el; }
			return closest(el.parentNode, selector);
		}
		return null;
	}
	function after(reference, el) { insertBefore(reference, reference.nextSibling, el); }
	function before(reference, el) { insertBefore(reference, reference, el); }
	function insertBefore(reference, beforeElement, el) {
		if (!isArrayOrList(el)) {
			if (typeof el == 'string') { el = createElementFromHTML(el); }
			el = [el];
		}
		for (var i = 0; i < el.length; i++) { reference.parentNode.insertBefore(el[i], beforeElement); }
	}
	function getScrollTop() { var doc = document.documentElement; return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0); }
	function siblings(el) { return Array.prototype.filter.call(el.parentNode.children, function(child) { return child !== el; }); }
	function preventDefault(event) {
		if (event.preventDefault) { event.preventDefault(); }
		else { event.returnValue = false; }
	}
	function isFunction(item) {
		if (typeof item === 'function') { return true; }
		var type = Object.prototype.toString(item); return type === '[object Function]' || type === '[object GeneratorFunction]';
	}
	function trigger(el, eventName, data) {
		var event; data = typeof data === 'undefined' ? {} : data; if (typeof window.CustomEvent === "function") { event = new CustomEvent(eventName, { detail: data }); }
		else { event = document.createEvent('CustomEvent'); event.initCustomEvent(eventName, true, true, data); }
		el.dispatchEvent(event);
	}
	function matches(el, selector) { return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector); }
	function toggle(el, value) {
		if (typeof value === "boolean") { for (var i = 0; i < el.length; i++) { el[i].style.display = value ? 'block' : 'none'; } }
		return el;
	}
	function createElementFromHTML(htmlString) { var div = document.createElement('div'); div.innerHTML = htmlString.trim(); return div.firstChild; }
	function remove(items) { items = getList(items); for (var i = 0; i < items.length; i++) { var item = items[i]; if (item && item.parentElement) { item.parentNode.removeChild(item); } } }
	function filter(el, filterFn) { Array.prototype.filter.call(el, filterFn); }
	function untilAll(item, selector, fn) {
		var sibling = item[fn]; var siblings = []; while (sibling) {
			if (matches(sibling, selector) || selector == null) { siblings.push(sibling); }
			sibling = sibling[fn];
		}
		return siblings;
	}
	function nextAll(item, selector) { return untilAll(item, selector, 'nextElementSibling'); }
	function prevAll(item, selector) { return untilAll(item, selector, 'previousElementSibling'); }
	function toArray(objectData) { return Object.keys(objectData).map(function(key) { return objectData[key]; }); }
	if (window.NodeList && !NodeList.prototype.forEach) { NodeList.prototype.forEach = function(callback, thisArg) { thisArg = thisArg || window; for (var i = 0; i < this.length; i++) { callback.call(thisArg, this[i], i, this); } }; }
	window.fp_utils = { $: $, deepExtend: deepExtend, hasClass: hasClass, getWindowHeight: getWindowHeight, css: css, until: until, prevUntil: prevUntil, nextUntil: nextUntil, prev: prev, next: next, last: last, index: index, getList: getList, hide: hide, show: show, isArrayOrList: isArrayOrList, addClass: addClass, removeClass: removeClass, appendTo: appendTo, wrap: wrap, wrapAll: wrapAll, wrapInner: wrapInner, unwrap: unwrap, closest: closest, after: after, before: before, insertBefore: insertBefore, getScrollTop: getScrollTop, siblings: siblings, preventDefault: preventDefault, isFunction: isFunction, trigger: trigger, matches: matches, toggle: toggle, createElementFromHTML: createElementFromHTML, remove: remove, filter: filter, untilAll: untilAll, nextAll: nextAll, prevAll: prevAll, showError: showError }; return initialise;
})); if (window.jQuery && window.fullpage) {
	(function($, fullpage) {
		'use strict'; if (!$ || !fullpage) { window.fp_utils.showError('error', 'jQuery is required to use the jQuery fullpage adapter!'); return; }
		$.fn.fullpage = function(options) { options.$ = $; new fullpage(this[0], options); };
	})(window.jQuery, window.fullpage);
}