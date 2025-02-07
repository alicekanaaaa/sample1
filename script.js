// script.js

// 例: ページ読み込み時にアラートを表示
window.onload = function() {
    console.log("米の紹介サイトへようこそ！");
};

// スクロールに合わせてセクションにアニメーションを追加
window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add("in-view");
        } else {
            section.classList.remove("in-view");
        }
    });
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}
