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
// @resource	dark_theme https://raw.githubusercontent.com/The-Quill/Code-Review-Design/master/design.css
// @resource	meta_dark_theme https://raw.githubusercontent.com/The-Quill/Code-Review-Design/master/meta_design.css
// ==/UserScript==

var style = (
	window.location.href.indexOf('meta.codereview.stackexchange.com') !== -1 
		? 'meta_'
		: '')
	+ 'dark_theme';

GM_addStyle(GM_getResourceText(style));