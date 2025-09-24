// ==UserScript==
// @name         在新标签页打开链接（当前标签右侧）
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  强制网页上的链接在当前标签右侧的新标签页中打开
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 为整个文档添加点击事件监听
    document.addEventListener('click', function(e) {
        // 寻找被点击的链接元素（a标签）
        let target = e.target;
        while (target && target.tagName !== 'A') {
            target = target.parentNode;
        }
        // 如果找到有效的链接，并且不是JavaScript链接或锚点
        if (target && target.href && target.target !== '_blank' && target.href.indexOf('javascript:') !== 0 && target.href.indexOf('#') !== target.href.length - 1) {
            // 阻止链接的默认行为（在当前页打开）
            e.preventDefault();
            // 在新标签页中打开链接
            window.open(target.href, '_blank');
        }
    }, true); // 使用事件捕获模式，确保尽早拦截
})();
