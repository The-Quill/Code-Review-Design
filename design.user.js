// ==UserScript==
// @name		CodeReview dark theme
// @namespace 	https://github.com/The-Quill/Code-Review-Design
// @version		1.0
// @description	A new Code Review theme.
// @author		Quill
// @match		*://codereview.stackexchange.com
// @match		*://codereview.stackexchange.com/*
// @match		*://meta.codereview.stackexchange.com
// @match		*://meta.codereview.stackexchange.com/*
// @grant		GM_addStyle
// @grant		GM_getResourceText
// @resource	theme 	  https://raw.githubusercontent.com/The-Quill/Code-Review-Design/master/resources/min.design.css
// @resource	main_skin https://raw.githubusercontent.com/The-Quill/Code-Review-Design/master/resources/min.main.css
// @resource	meta_skin https://raw.githubusercontent.com/The-Quill/Code-Review-Design/master/resources/min.meta.css
// ==/UserScript==

GM_addStyle(GM_getResourceText('theme'));

GM_addStyle(
	GM_getResourceText(
		[(window.location.href.contains('://meta.codereview')
		? 'meta'
		: 'main'),  '_skin'].join('')
	)
);