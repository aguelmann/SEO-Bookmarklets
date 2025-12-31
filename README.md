# 🔖 SEO Bookmarklets Collection

> A curated collection of powerful bookmarklets for SEO professionals, digital marketers, and web analysts.

[![Bookmarklets](https://img.shields.io/badge/Bookmarklets-60+-blue.svg)](bookmarklets.html)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)

## 📚 Table of Contents

- [What are Bookmarklets?](#what-are-bookmarklets)
- [Quick Start](#quick-start)
- [Bookmarklets Catalog](#bookmarklets-catalog)
  - [SEO Analysis Tools](#seo-analysis-tools)
  - [Google Tools](#google-tools)
  - [Technical SEO](#technical-seo)
  - [Content Analysis](#content-analysis)
  - [Link Analysis](#link-analysis)
  - [Performance & Testing](#performance--testing)
  - [Utility Tools](#utility-tools)
- [Installation Methods](#installation-methods)
- [Usage Tips](#usage-tips)
- [Contributing](#contributing)
- [License](#license)

---

## What are Bookmarklets?

Bookmarklets are small JavaScript programs stored as bookmarks that add functionality to your browser with a single click. They're perfect for SEO work because they:

- ✅ Work across any website
- ✅ Require no installation or extensions
- ✅ Run entirely in your browser (privacy-friendly)
- ✅ Can be easily shared and updated

---

## 🚀 Quick Start

### Method 1: Bulk Import (Recommended)
1. Download [`bookmarklets.html`](bookmarklets.html)
2. Open your browser's bookmark manager:
   - **Chrome/Edge:** `chrome://bookmarks/` → `⋮` → Import bookmarks
   - **Firefox:** `Ctrl+Shift+B` → Import and Backup → Import from HTML
3. Select the downloaded file

### Method 2: Individual Bookmarklets
1. Browse the [catalog below](#bookmarklets-catalog)
2. Find the bookmarklet you want
3. Click the "View Code" link
4. Copy the JavaScript code
5. Create a new bookmark and paste the code as the URL

### Method 3: Clone Repository
```bash
git clone https://github.com/YOUR-USERNAME/seo-bookmarklets.git
```

📖 **Detailed instructions:** [INSTALLATION.md](docs/INSTALLATION.md)

---

## 📖 Bookmarklets Catalog

### 📊 SEO Analysis Tools

Quickly analyze domains and URLs using popular SEO platforms.

| Bookmarklet | Description | Link |
|-------------|-------------|------|
| **Ahrefs - Check Domain (Latest)** | Opens current domain in Ahrefs Site Explorer with full metrics | [View Code](bookmarklets/seo-analysis/ahrefs-check-domain-latest.js) |
| **Ahrefs - Check URL (Latest)** | Opens current URL in Ahrefs with backlink analysis | [View Code](bookmarklets/seo-analysis/ahrefs-check-url-latest.js) |
| **Ahrefs - Check Backlinks** | View backlink profile for current domain | [View Code](bookmarklets/seo-analysis/ahrefs-check-backlinks.js) |
| **Moz - Check Domain** | Opens domain in Moz Domain Analysis | [View Code](bookmarklets/seo-analysis/moz-check-domain.js) |
| **SEMrush - Check Domain** | Analyze domain traffic and keywords in SEMrush | [View Code](bookmarklets/seo-analysis/semrush-check-domain.js) |
| **SEMrush - Check URL** | Analyze specific URL in SEMrush | [View Code](bookmarklets/seo-analysis/semrush-check-url.js) |
| **Majestic - Check Domain** | View domain metrics in Majestic | [View Code](bookmarklets/seo-analysis/majestic-check-domain.js) |
| **SimilarWeb - Check Domain** | Get traffic estimates from SimilarWeb | [View Code](bookmarklets/seo-analysis/similarweb-check-domain.js) |
| **SISTRIX - Check Domain** | Open domain in SISTRIX | [View Code](bookmarklets/seo-analysis/sistrix-check-domain.js) |
| **Searchmetrics - Check URL** | Analyze URL in Searchmetrics | [View Code](bookmarklets/seo-analysis/searchmetrics-check-url.js) |
| **Mangools - Check Root Domain** | Analyze root domain in Mangools | [View Code](bookmarklets/seo-analysis/mangools-check-root-domain.js) |

### 🔍 Google Tools

Essential Google tools for SEO analysis and testing.

#### Search Console & Indexing

| Bookmarklet | Description | Link |
|-------------|-------------|------|
| **GSC - URL Performance** | Open URL in Google Search Console performance report (andreguelmann.com) | [View Code](bookmarklets/google-tools/gsc-url-performance-andreguelmanncom.js) |
| **Google - Domain Index Status** | Check all indexed pages from domain | [View Code](bookmarklets/utilities/google-domain-index-status.js) |
| **Google - URL Index Status** | Check if specific URL is indexed | [View Code](bookmarklets/utilities/google-url-index-status.js) |
| **Google - Past Month Index** | View pages indexed in last 30 days | [View Code](bookmarklets/utilities/google-past-month-index-status.js) |
| **Google - Past Week Index** | View pages indexed in last 7 days | [View Code](bookmarklets/utilities/google-past-week-index-status.js) |

#### SERP Analysis

| Bookmarklet | Description | Link |
|-------------|-------------|------|
| **SERP - Extract Text** | Extract all text from SERP results page | [View Code](bookmarklets/google-tools/google-serp-extract-text.js) |
| **SERP - Cache Viewer** | View Google's cached version of page | [View Code](bookmarklets/google-tools/google-cache-page-viewer.js) |
| **SERP - Text-Only Cache** | View text-only cached version (faster) | [View Code](bookmarklets/google-tools/google-text-only-cache.js) |
| **SERP - Highlight Dates** | Highlight all dates on SERP for freshness analysis | [View Code](bookmarklets/google-tools/google-serp-highlight-dates.js) |

#### Testing Tools

| Bookmarklet | Description | Link |
|-------------|-------------|------|
| **Rich Results Test** | Test page for rich results eligibility | [View Code](bookmarklets/google-tools/google-rich-results-test.js) |
| **Mobile-Friendly Test** | Check if page is mobile-friendly | [View Code](bookmarklets/google-tools/google-mobile-friendly-test.js) |
| **PageSpeed Insights** | Analyze page performance with PSI | [View Code](bookmarklets/google-tools/google-pagespeed-insights.js) |

### 🔧 Technical SEO

Tools for technical SEO auditing and validation.

#### Structured Data

| Bookmarklet | Description | Link |
|-------------|-------------|------|
| **Structured Data Validator** | Validate schema markup (Schema.org) | [View Code](bookmarklets/technical-seo/structured-data-validator.js) |
| **Google Structured Data Test** | Google's structured data testing tool | [View Code](bookmarklets/technical-seo/google-structured-data-testing-tool.js) |
| **Structured Data Linter** | Advanced structured data validator | [View Code](bookmarklets/technical-seo/structured-data-linter.js) |

#### Site Files

| Bookmarklet | Description | Link |
|-------------|-------------|------|
| **Show Robots.txt** | View site's robots.txt file | [View Code](bookmarklets/technical-seo/show-robotstxt.js) |
| **Show Sitemap.xml** | View site's XML sitemap | [View Code](bookmarklets/technical-seo/show-sitemapxml.js) |
| **Extract Sitemap URLs** | Extract all URLs from sitemap to list | [View Code](bookmarklets/technical-seo/extract-urls-from-sitemap.js) |

### 📝 Content Analysis

Analyze on-page content and structure.

| Bookmarklet | Description | Link |
|-------------|-------------|------|
| **Highlight Headings (H1-H6)** | Color-code all heading tags for hierarchy analysis | [View Code](bookmarklets/content-analysis/highlight-headings-h1-h6.js) |
| **Keyword Stuffing Checker** | Analyze word frequency and potential over-optimization | [View Code](bookmarklets/content-analysis/keyword-stuffing-checker.js) |
| **Image to Alt Text** | Replace images with their alt text | [View Code](bookmarklets/content-analysis/image-to-alt-text.js) |
| **Duplicate Content Checker** | Check for duplicate content via Copyscape | [View Code](bookmarklets/content-analysis/duplicate-content-checker.js) |
| **Markdown Version** | Convert page to markdown via Jina AI | [View Code](bookmarklets/content-analysis/markdown-version-via-jina-ai.js) |

### 🔗 Link Analysis

Audit and analyze links on the page.

| Bookmarklet | Description | Link |
|-------------|-------------|------|
| **Highlight Links** | Color-code links by type (NoFollow/UGC/Sponsored/DoFollow) | [View Code](bookmarklets/link-analysis/highlight-links-nofollowugcsponsored.js) |
| **Canonical Tag Checker** | Verify canonical tag implementation | [View Code](bookmarklets/link-analysis/canonical-tag-checker.js) |
| **List All URLs** | Extract all links from page to popup | [View Code](bookmarklets/link-analysis/list-all-urls.js) |
| **Change Anchors to URLs** | Replace anchor text with full URLs | [View Code](bookmarklets/link-analysis/change-anchors-to-full-urls.js) |
| **Identify External/Internal Links** | Color-code links by internal/external | [View Code](bookmarklets/link-analysis/identify-externalinternal-links.js) |
| **Broken Links Checker** | Check for broken links via W3C validator | [View Code](bookmarklets/link-analysis/broken-links-checker.js) |

### ⚡ Performance & Testing

Test page performance and speed.

| Bookmarklet | Description | Link |
|-------------|-------------|------|
| **WebPageTest** | Analyze page with WebPageTest.org | [View Code](bookmarklets/utilities/webpagetest.js) |
| **Check Page Performance** | Real-time performance metrics overlay | [View Code](bookmarklets/utilities/check-page-performance.js) |

### 🛠️ Utility Tools

General-purpose utilities for web analysis.

| Bookmarklet | Description | Link |
|-------------|-------------|------|
| **Clean URL** | Remove all query parameters from URL | [View Code](bookmarklets/utilities/clean-url-remove-query-params.js) |
| **Show Scroll Percentage** | Display current scroll depth percentage | [View Code](bookmarklets/utilities/show-scroll-percentage.js) |
| **Export Google Sheet as CSV** | Download current Google Sheet as CSV | [View Code](bookmarklets/utilities/export-google-sheet-as-csv.js) |
| **Reddit Post - JSON Version** | View Reddit post as JSON | [View Code](bookmarklets/utilities/reddit-post-json-version.js) |
| **Enable Page Editing** | Make entire page editable | [View Code](bookmarklets/utilities/enable-page-editing.js) |
| **Disable Page Editing** | Turn off page editing mode | [View Code](bookmarklets/utilities/disable-page-editing.js) |
| **View DOM Source** | View formatted HTML source code | [View Code](bookmarklets/utilities/view-dom-source-formatted.js) |
| **Wayback Machine** | Open domain in Internet Archive | [View Code](bookmarklets/utilities/wayback-machine.js) |
| **Wappalyzer** | Detect technologies used on website | [View Code](bookmarklets/utilities/wappalyzer-technology-detection.js) |
| **NoJS Side-by-Side** | Compare page with/without JavaScript | [View Code](bookmarklets/utilities/nojs-side-by-side-comparison.js) |
| **Wireframe Transform** | Convert page to wireframe view | [View Code](bookmarklets/utilities/wireframe-transform.js) |
| **Click to Drag Elements** | Make page elements draggable | [View Code](bookmarklets/utilities/click-to-drag-elements.js) |

---

## 📥 Installation Methods

### Browser-Specific Instructions

<details>
<summary><b>Google Chrome / Microsoft Edge</b></summary>

**Method 1: Import All**
1. Download `bookmarklets.html`
2. Press `Ctrl+Shift+O` (or `⌘+Option+B` on Mac)
3. Click `⋮` (three dots) → "Import bookmarks"
4. Select the downloaded HTML file

**Method 2: Drag & Drop**
1. Show bookmarks bar: `Ctrl+Shift+B`
2. Open this GitHub page
3. Drag bookmarklet links to your bookmarks bar

**Method 3: Manual**
1. Right-click bookmarks bar → "Add page"
2. Name: [Bookmarklet name]
3. URL: [Copy JavaScript code]
</details>

<details>
<summary><b>Mozilla Firefox</b></summary>

**Method 1: Import All**
1. Download `bookmarklets.html`
2. Press `Ctrl+Shift+B`
3. Import and Backup → Import Bookmarks from HTML
4. Select the downloaded file

**Method 2: Drag & Drop**
1. Show bookmarks toolbar: Right-click → "Bookmarks Toolbar"
2. Drag bookmarklet links to toolbar

**Method 3: Manual**
1. Right-click bookmarks toolbar → "New Bookmark"
2. Name: [Bookmarklet name]
3. Location: [Copy JavaScript code]
</details>

<details>
<summary><b>Safari</b></summary>

**Note:** Safari has stricter security for bookmarklets. Some may not work.

1. Show Favorites Bar: View → Show Favorites Bar
2. Drag bookmarklet to Favorites Bar
3. Or: Bookmarks → Add Bookmark → paste JavaScript in URL field
</details>

---

## 💡 Usage Tips

### Best Practices

1. **Test First:** Always test bookmarklets on non-critical sites first
2. **Organize:** Use folders to keep related bookmarklets together
3. **Keyboard Shortcuts:** Assign shortcuts to frequently-used bookmarklets
4. **Browser Sync:** Enable bookmark sync across devices
5. **Backup:** Export bookmarks regularly

### Common Workflows

**Quick SEO Audit:**
```
1. Highlight Headings → Check content structure
2. Highlight Links → Audit link attributes  
3. Canonical Tag Checker → Verify canonicals
4. Structured Data Validator → Check schema
5. Google Index Status → Check indexation
```

**Competitor Analysis:**
```
1. Ahrefs - Check Domain → Get overview
2. Ahrefs - Check Backlinks → Analyze links
3. SimilarWeb - Check Domain → Traffic estimates
```

**SERP Research:**
```
1. Run search on Google
2. SERP - Highlight Dates → Check freshness
3. SERP - Extract Text → Copy all results
```

### Troubleshooting

**Bookmarklet doesn't work?**
- Check if site has Content Security Policy (CSP)
- Try on a different website
- Check browser console for errors (`F12` → Console)

**Pop-up blocked?**
- Allow pop-ups for the site
- Settings → Privacy → Pop-ups and redirects
- Try right-click → "Open in new tab"

📖 **More help:** [docs/INSTALLATION.md](docs/INSTALLATION.md)

---

## 🤝 Contributing

Contributions are welcome! Whether it's:

- 🐛 Bug fixes for broken bookmarklets
- ✨ New bookmarklet ideas
- 📝 Documentation improvements
- 🔧 Updates for changed tool URLs

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

### Adding a New Bookmarklet

1. Create a `.js` file in the appropriate category folder
2. Add entry to this README's catalog
3. Test on multiple browsers
4. Submit a pull request

---

## 📜 License

This collection is licensed under the [MIT License](LICENSE).

**Attributions:**
- Individual bookmarklets may have their own licenses/attributions (noted in code comments)
- This is a curated collection - original creators are credited where known
- Ahrefs, Moz, SEMrush, etc. are trademarks of their respective owners

---

## 🌟 Star History

If you find this collection useful, please star the repo!

---

## 📞 Support

- 🐛 **Bug Reports:** [Open an issue](../../issues)
- 💡 **Feature Requests:** [Open an issue](../../issues)
- 💬 **Questions:** [Discussions](../../discussions)

---

## 🔗 Related Resources

- [SEO Bookmarklets Blog Post](#) *(if you write one)*
- [Video Tutorial](#) *(if you create one)*

---

<div align="center">

**Made with ❤️ by SEO professionals, for SEO professionals**

[⬆ Back to Top](#-seo-bookmarklets-collection)

</div>
