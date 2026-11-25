# Hao Yin's homepage

Source code of my academic homepage: **[ustc-hyin.github.io](https://ustc-hyin.github.io/)**.

I am a researcher working on multimodal large language models, currently a visiting student at [CCVL](https://ccvl.jhu.edu/), Johns Hopkins University. The site has four pages: [about](https://ustc-hyin.github.io/), [CV](https://ustc-hyin.github.io/cv/), [publications](https://ustc-hyin.github.io/publications/) and [repositories](https://ustc-hyin.github.io/repositories/).

## Where things live

| What                    | File                                 |
| ----------------------- | ------------------------------------ |
| Bio, research interests | `_pages/about.md`                    |
| News                    | `_news/announcement_*.md`            |
| Publications            | `_bibliography/papers.bib`           |
| CV page                 | `_data/cv.yml`, PDF in `assets/pdf/` |
| Repository cards        | `_data/repositories.yml`             |
| Custom styles           | `_sass/_base.scss`                   |

Every push to `main` is built and deployed to GitHub Pages by `.github/workflows/deploy.yml`.

To preview locally (Ruby 3.3 and Bundler):

```bash
bundle install
bundle exec jekyll serve   # then open http://localhost:4000
```

## Credits

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme, released under the [MIT License](LICENSE).
