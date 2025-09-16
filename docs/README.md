# LoveBearing Series 网站

这是 LoveBearing Series 项目的静态网站，部署在 GitHub Pages 上。

## 网站结构

```
docs/
├── index.html          # 首页
├── stories.html        # 所有故事的页面
├── css/
│   └── style.css       # 基础样式
├── js/
│   ├── main.js         # 主 JavaScript
│   └── stories.js      # 故事页面的 JavaScript
├── favicon.svg         # 网站图标
└── .nojekyll          # 用于禁用 Jekyll 的文件
```

## GitHub Pages 配置

1. 打开仓库 Settings（设置）
2. 在 “Pages” 部分选择：
   - Source: “Deploy from a branch”
   - Branch: “main”
   - Folder: “/docs”
3. 保存设置

## 开发

### 本地启动
```bash
# 在仓库根目录执行
cd docs
python -m http.server 8000
# 或使用任何其他本地服务器
```

### 添加新故事

故事数据添加在 `js/stories.js` 的 `sampleStories` 数组中。未来可替换为 API 或从仓库 stories 目录自动加载。

### 故事结构

```javascript
{
    id: 1,
    title: "故事标题",
    author: "作者",
    type: "student|teacher|parent|alumni",
    subject: "math|chinese|english|physics|chemistry|biology|history|geography|politics|general",
    date: "2025-09-XX",
    tags: ["标签1", "标签2"],
    excerpt: "简要描述...",
    content: "Markdown 格式的全文...",
    likes: 0,
    views: 0
}
```

## 功能特性

- ✅ 移动端自适应设计
- ✅ 故事过滤与排序
- ✅ 阅读全文的模态窗口
- ✅ 平滑滚动与动画
- ✅ 现代化 UI（渐变与阴影）

## 未来改进

- [ ] 集成 GitHub API 自动加载故事
- [ ] 评论系统
- [ ] 故事搜索
- [ ] 深色模式
- [ ] PWA 功能
- [ ] 多语言支持

## 技术栈

- HTML5
- CSS3（Flexbox、Grid、Animations）
- 原生 JavaScript
- Marked.js（用于解析 Markdown）
- Google Fonts（Noto Sans SC）

## 许可证

MIT License - 详见仓库根目录的 LICENSE 文件。
