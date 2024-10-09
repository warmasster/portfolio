

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B04BJlvh.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.B2G7tYEE.js"];
export const stylesheets = ["_app/immutable/assets/0.tqyb5a-3.css"];
export const fonts = [];
