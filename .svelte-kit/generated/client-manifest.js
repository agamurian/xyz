export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\en\\index.svelte"),
	() => import("..\\..\\src\\routes\\en\\gallery.md"),
	() => import("..\\..\\src\\routes\\en\\about.md"),
	() => import("..\\..\\src\\routes\\en\\3d\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\en\\3d\\param_anim.md"),
	() => import("..\\..\\src\\routes\\en\\3d\\ar_vr.md"),
	() => import("..\\..\\src\\routes\\en\\3d\\2070\\index.md"),
	() => import("..\\..\\src\\routes\\en\\3d\\rig.md"),
	() => import("..\\..\\src\\routes\\ru\\index.svelte"),
	() => import("..\\..\\src\\routes\\ru\\gallery.md"),
	() => import("..\\..\\src\\routes\\ru\\about.md"),
	() => import("..\\..\\src\\routes\\ru\\3d\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\ru\\3d\\index.md"),
	() => import("..\\..\\src\\routes\\ru\\3d\\param_anim.md"),
	() => import("..\\..\\src\\routes\\ru\\3d\\ar_vr.md"),
	() => import("..\\..\\src\\routes\\ru\\3d\\rig.md"),
	() => import("..\\..\\src\\routes\\[lang]\\[...error]\\__layout.reset.svelte"),
	() => import("..\\..\\src\\routes\\[lang]\\[...error]\\index.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"en": [[0, 3], [1]],
	"en/gallery": [[0, 4], [1]],
	"en/about": [[0, 5], [1]],
	"en/3d/param_anim": [[0, 6, 7], [1]],
	"en/3d/ar_vr": [[0, 6, 8], [1]],
	"en/3d/2070": [[0, 6, 9], [1]],
	"en/3d/rig": [[0, 6, 10], [1]],
	"ru": [[0, 11], [1]],
	"ru/gallery": [[0, 12], [1]],
	"ru/about": [[0, 13], [1]],
	"ru/3d": [[0, 14, 15], [1]],
	"ru/3d/param_anim": [[0, 14, 16], [1]],
	"ru/3d/ar_vr": [[0, 14, 17], [1]],
	"ru/3d/rig": [[0, 14, 18], [1]],
	"[lang]/[...error]": [[19, 20], []]
};