// ==UserScript==
// @name         CodeReview dark theme
// @namespace    https://github.com/The-Quill/Code-Review-Design
// @version      0.1
// @description  A new Code Review theme.
// @author       Quill
// @match        *//codereview.stackexchange.com
// @match		 *//codereview.stackexchange.com/*
// @match        *//meta.codereview.stackexchange.com
// @match		 *//meta.codereview.stackexchange.com/*
// @grant		 GM_addStyle
// @grant        GM_getResourceText
// @resource dark_theme https://raw.githubusercontent.com/The-Quill/Code-Review-Design/master/design.css
// ==/UserScript==

GM_addStyle(GM_getResourceText("dark_theme"));