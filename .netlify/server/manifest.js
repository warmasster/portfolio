export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BqRI_fPi.js","app":"_app/immutable/entry/app.BjaP4GAO.js","imports":["_app/immutable/entry/start.BqRI_fPi.js","_app/immutable/chunks/entry.cbvElbyE.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.BjaP4GAO.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B2G7tYEE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
