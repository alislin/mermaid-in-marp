// marp中嵌入的mermaid生成的html
import mermaid from './mermaid/mermaid.esm.min.mjs';
let mermaidReload = function () {
    setTimeout(function () {
        Array.from(document.querySelectorAll('code.language-mermaid')).map(function (code) {
            // 获取Mermaid代码
            const mermaidText = code.textContent.trim();
            // 创建包含Mermaid图表的div元素
            const mermaidDiv = document.createElement('div');
            mermaidDiv.classList.add('mermaid');
            mermaidDiv.textContent = mermaidText;
            // 替换原始的code元素
            code.parentElement.replaceWith(mermaidDiv);
        });
        mermaid.initialize({ startOnLoad: true });
        mermaid.init();

    }, 500);
}
document.addEventListener('DOMContentLoaded', function () {
    mermaidReload()
});
window.addEventListener('vscode.markdown.updateContent', function () {
    mermaidReload()
});