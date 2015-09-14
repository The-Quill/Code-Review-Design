// ==UserScript==
// @name	CodeReview dark theme
// @version	0.5
// @description	A new Code Review theme.
// @author	Quill
// @match	*://codereview.stackexchange.com
// @match	*://codereview.stackexchange.com/*
// @match	*://meta.codereview.stackexchange.com
// @match	*://meta.codereview.stackexchange.com/*
// @grant	GM_addStyle
// @grant	GM_getResourceText
// @resource	theme https://raw.githubusercontent.com/The-Quill/Code-Review-Design/master/design.css
// @resource	main_skin https://raw.githubusercontent.com/The-Quill/Code-Review-Design/master/main.css
// @resource	meta_skin https://raw.githubusercontent.com/The-Quill/Code-Review-Design/master/meta.css
// ==/UserScript==

GM_addStyle(
	GM_getResourceText(
		window.location.href.contains('://meta.codereview')
		? 'meta'
		: 'main')
);

GM_addStyle(GM_getResourceText(theme));