# Contributing to LoveBearing Series

Thanks for helping students prepare for the 2025–2026 Gaokao!

## Ways to contribute
- Submit a study story (preferred): add a Markdown file under `stories/`
- Report an issue or suggest improvements: GitHub Issues
- Improve docs/site in `docs/`

## Submit a story (recommended)
1. Fork the repo and create a branch:
   - Branch name: `feat/story-<short-title>` or `docs/story-<short-title>`
2. Add a new file under `stories/your-title.md`
3. Copy the template from [`stories/STORY_TEMPLATE.md`](stories/STORY_TEMPLATE.md)
4. Complete the front matter and sections (respect privacy settings)
5. Commit using Conventional Commits:
   - `docs(stories): add <title> by <author> (anonymous|public)`
6. Open a Pull Request and fill the checklist

Content rules:
- Keep it constructive, respectful, and helpful to students
- Avoid personal data you don't want to be public (use `privacy_level: 匿名` when needed)
- No infringing materials; cite sources if you quote
- Keep Chinese as the primary language; bilingual welcome

## Report issues
Open: https://github.com/NickScherbakov/lovebearing-series/issues/new/choose  
Please include steps to reproduce (if applicable) and proposed solutions.

## Development notes
- Static site lives in `docs/` (open `docs/index.html` locally)
- Keep assets light; prefer open or self-hosted links
- For bigger UI changes, attach before/after screenshots in PR

## Maintainers
- Primary contact: <your-email@example.com> (replace with official email)
- Code style: Markdown-first, Conventional Commits, small PRs