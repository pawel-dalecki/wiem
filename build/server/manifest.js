const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/WiP-LOGO-PION-1.png","img/WiP-LOGO-PION-2.png","img/WiP-LOGO-PION-3.png","img/WiP-LOGO-PION-4.png","img/WiP-LOGO-POZIOM-1.png","img/WiP-LOGO-POZIOM-2.png","img/WiP-LOGO-POZIOM-3.png","img/WiP-LOGO-POZIOM-4.png","img/blog-dummy.webp","img/date.webp","img/droga.webp","img/faq-picker.svg","img/faq.webp","img/faq_mobile.webp","img/help.webp","img/informacja.webp","img/kontakt.webp","img/kucharz.webp","img/lekarz.webp","img/linkedin.svg","img/magazynier.webp","img/nauczyciel.webp","img/pracownik-biurowy.webp","img/pracownik_biurowy.webp","img/przedsiebiorca.webp","img/weryfikacja.webp","img/wzory.webp","img/zgloszenie.webp"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.C2Hc25y5.js","app":"_app/immutable/entry/app.tykTvlDj.js","imports":["_app/immutable/entry/start.C2Hc25y5.js","_app/immutable/chunks/entry.CEpeaWQ6.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/entry/app.tykTvlDj.js","_app/immutable/chunks/scheduler.Cs0xm5t1.js","_app/immutable/chunks/index.C8j-L84j.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CXyB6CJo.js')),
			__memo(() => import('./chunks/1-4ZYckgCz.js')),
			__memo(() => import('./chunks/2-C_cTBNuc.js')),
			__memo(() => import('./chunks/3-CXPHUbRz.js')),
			__memo(() => import('./chunks/4-2YRgLwls.js')),
			__memo(() => import('./chunks/5-CUFMDNpz.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[article]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"article","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/polityka-prywatnosci",
				pattern: /^\/polityka-prywatnosci\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
