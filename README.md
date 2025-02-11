# Mermaid in Marp
vscode marp 中使用 mermaid 绘图，在 vscode 和导出的 `html` 中正常渲染为 `svg。`
这个脚本可以同时在 vscode 和 obsidian 中正常使用。将 `markdown` 文件导出为 `html` 或者通过 marp 导出为 `html` ，均可正常渲染。

> **注意：** marp版本升级，`Marp:Html` 设置为 `all` 。 但vscode预览界面似乎不能执行js脚本。预览界面无法正常渲染，有待后续升级。


## 使用方法
在文档最后引入脚本

```html
<script type="module" src="https://alislin.github.io/mermaid-in-marp/render.js"></script>
```

也可以使用依赖项目全部缓存的版本
```html
<!-- 缓存版本（mermaid依赖js使用本地文件） -->
<script type="module" src="https://alislin.github.io/mermaid-in-marp/render.cache.js"></script>
```

## Demo

请参考 [demo.md](https://alislin.github.io/mermaid-in-marp/demo.md)