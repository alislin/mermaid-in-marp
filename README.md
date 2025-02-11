# Mermaid in Marp
vscode marp 中使用mermaid绘图，在vscode和导出的html中正常渲染为svg。
这个脚本可以同时在vscode和obsidian中正常使用。将markdown文件导出为html或者通过marp导出为html，均可正常渲染mermaid绘图。

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

请参考 `demo.md`