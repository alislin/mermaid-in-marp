# Mermaid in Marp
vscode marp 中使用mermaid画图，在vscode和导出的html中正常渲染为svg

## 使用方法
在文档最后引入脚本

```html
<script type="module" src="https://alislin.github.io/mermaid-in-marp/render.js"></script>
```

## Demo
```md
---
marp: true
---
# Demo

---

## 计划
    ```mermaid
    gantt
    title 项目计划
    dateFormat YYYY-MM-DD
    section 第一批
    Prepare :done,t13, 2024-01-17,2024-01-29
    Plan    :done,t12, 2024-01-21,2024-02-24
    section 第二批
    Start :active, 2024-01-29,2024-03-28
    ```

---

<script type="module" src="https://alislin.github.io/mermaid-in-marp/render.js"></script>

```