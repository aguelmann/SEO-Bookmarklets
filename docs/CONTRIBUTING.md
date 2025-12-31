# Contributing to SEO Bookmarklets

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🎯 How to Contribute

There are many ways to contribute:

- 🐛 **Report bugs** - Found a broken bookmarklet?
- ✨ **Add new bookmarklets** - Have a useful tool to share?
- 📝 **Improve documentation** - Clarify instructions or add examples
- 🔧 **Update existing bookmarklets** - Tool URLs changed?
- 💡 **Share ideas** - Suggest improvements or new features

---

## 🐛 Reporting Bugs

### Before Submitting

1. **Test on multiple browsers** - Does it work in Chrome but not Firefox?
2. **Check existing issues** - Has someone already reported this?
3. **Try on different websites** - Some sites block bookmarklets (CSP)
4. **Check console** - Press `F12` and look for errors

### Bug Report Template

When creating an issue, please include:

```markdown
**Bookmarklet Name:** [e.g., Ahrefs Check Domain]

**Browser & Version:** [e.g., Chrome 120, Firefox 121]

**Problem Description:**
[Describe what's wrong]

**Steps to Reproduce:**
1. Go to [URL]
2. Click bookmarklet
3. [What happens vs. what should happen]

**Error Messages:**
[If any - check browser console with F12]

**Screenshots:**
[If applicable]
```

---

## ✨ Adding New Bookmarklets

### Guidelines

New bookmarklets should:
- ✅ Serve a clear SEO/marketing purpose
- ✅ Work in modern browsers (Chrome, Firefox, Edge)
- ✅ Be properly documented
- ✅ Include error handling (if possible)
- ✅ Not require external API keys (unless noted)
- ✅ Respect user privacy

### Submission Process

**1. Create the Bookmarklet**

Create a new `.js` file in the appropriate category folder:

```bash
bookmarklets/
├── seo-analysis/       # SEO platform integrations
├── google-tools/       # Google-specific tools
├── technical-seo/      # Technical SEO analysis
├── content-analysis/   # On-page content tools
├── link-analysis/      # Link-related tools
├── performance/        # Performance testing
└── utilities/          # General utilities
```

**2. File Format**

Use this template:

```javascript
/**
 * Bookmarklet Name
 * 
 * Detailed description of what this bookmarklet does.
 * Include any requirements or limitations.
 * 
 * @category [Category name]
 * @requires [Any requirements - e.g., "Ahrefs account"]
 * @author [Your name or "SEO Community"]
 * @license MIT
 */

javascript:(function(){ 
  // Your code here
  // Use proper formatting and comments
  
  // Example:
  window.open('https://tool.com/analyze?url=' + encodeURIComponent(location.href));
})();
```

**3. Test Thoroughly**

Test your bookmarklet on:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Multiple websites (to ensure compatibility)
- [ ] Sites with/without CSP policies

**4. Update Documentation**

Add entry to `README.md` catalog:

```markdown
| **Your Bookmarklet Name** | Short description | [View Code](bookmarklets/category/filename.js) |
```

**5. Submit Pull Request**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/bookmarklet-name`
3. Add your files and documentation
4. Commit: `git commit -m "Add: Bookmarklet Name"`
5. Push: `git push origin feature/bookmarklet-name`
6. Open Pull Request

---

## 🔧 Updating Existing Bookmarklets

### When to Update

- Tool URL changed (e.g., Ahrefs updated their interface)
- Security improvements needed
- Better error handling possible
- Performance optimizations
- Bug fixes

### Update Process

1. **Identify the issue** - What needs changing?
2. **Update the code** - Fix in the `.js` file
3. **Update HTML** - Sync changes to `bookmarklets.html`
4. **Test** - Verify it works
5. **Document changes** - Update README if behavior changed
6. **Submit PR** - Include clear description

### Example Update

```javascript
// Before (old URL)
window.open('https://old-url.com/tool?site=' + location.host);

// After (updated URL)
window.open('https://new-url.com/v2/tool?domain=' + location.host);
```

---

## 📝 Documentation Improvements

### What to Improve

- Clarify confusing instructions
- Add usage examples
- Fix typos or grammar
- Add screenshots/GIFs
- Translate to other languages
- Improve code comments

### Style Guide

**Markdown:**
- Use proper heading hierarchy (H1 → H2 → H3)
- Include code fences with language tags
- Add line breaks for readability
- Use tables for structured data

**Code Comments:**
- Explain *why*, not *what* (code shows what)
- Use JSDoc style for functions
- Keep comments concise

**Tone:**
- Be friendly and helpful
- Assume beginner knowledge level
- Provide examples when possible

---

## 💡 Suggesting Features

### Good Feature Requests Include

1. **Clear use case** - Why is this useful?
2. **Target audience** - Who benefits?
3. **Example scenarios** - When would you use it?
4. **Similar tools** - Any existing references?

### Feature Request Template

```markdown
**Feature Title:** [Brief description]

**Problem:**
[What problem does this solve?]

**Proposed Solution:**
[How should it work?]

**Use Cases:**
1. [Scenario 1]
2. [Scenario 2]

**Alternatives Considered:**
[Other approaches you've thought of]

**Additional Context:**
[Any other relevant information]
```

---

## 🔍 Code Review Process

### What We Look For

**Functionality:**
- ✅ Does it work as described?
- ✅ Handles errors gracefully?
- ✅ Works across browsers?

**Code Quality:**
- ✅ Readable and well-commented
- ✅ Follows existing patterns
- ✅ No unnecessary complexity

**Documentation:**
- ✅ Clear description
- ✅ Usage instructions
- ✅ Limitations noted

**Security:**
- ✅ No XSS vulnerabilities
- ✅ Proper input validation
- ✅ No sensitive data exposure

### Review Timeline

- Initial review: Within 7 days
- Follow-up comments: Within 3 days
- Merge decision: Based on discussion

---

## 📜 Coding Standards

### JavaScript Style

**Use:**
- Semicolons
- Single quotes for strings
- camelCase for variables
- UPPERCASE for constants
- Descriptive names

**Avoid:**
- Global variables (use IIFE)
- `eval()`
- Synchronous XHR
- Inline event handlers

**Example:**

```javascript
// Good ✅
javascript:(function(){
  const targetUrl = 'https://tool.com/analyze?url=' + encodeURIComponent(location.href);
  window.open(targetUrl);
})();

// Bad ❌
javascript:window.open('https://tool.com/analyze?url='+location.href)
```

### Error Handling

Always handle potential errors:

```javascript
javascript:(function(){
  try {
    // Main logic
    const url = new URL(location.href);
    window.open('https://tool.com?url=' + url.hostname);
  } catch(e) {
    alert('Error: ' + e.message);
  }
})();
```

### URL Encoding

Always encode user input:

```javascript
// Good ✅
encodeURIComponent(location.href)

// Bad ❌
location.href  // May break with special characters
```

---

## 🎨 Naming Conventions

### Bookmarklet Names

- Be descriptive and specific
- Use title case
- Include platform name if relevant
- Avoid abbreviations (except well-known ones)

**Examples:**
- ✅ "Ahrefs - Check Domain"
- ✅ "Google - Index Status"
- ✅ "Highlight Headings (H1-H6)"
- ❌ "Check Domain" (too vague)
- ❌ "GIST" (unclear abbreviation)

### File Names

- Use kebab-case (lowercase with hyphens)
- Match bookmarklet name
- Be concise but clear

**Examples:**
- `ahrefs-check-domain.js`
- `highlight-headings.js`
- `google-index-status.js`

---

## 🧪 Testing Checklist

Before submitting, test:

### Browser Compatibility
- [ ] Chrome/Edge (latest version)
- [ ] Firefox (latest version)
- [ ] Safari (if possible)

### Functionality
- [ ] Works on HTTP sites
- [ ] Works on HTTPS sites
- [ ] Handles special characters in URLs
- [ ] Gracefully fails if requirements not met
- [ ] Opens in correct window/tab

### Edge Cases
- [ ] Very long URLs
- [ ] URLs with query parameters
- [ ] Pages with strict CSP
- [ ] Non-English character sets
- [ ] Mobile browsers (if applicable)

---

## 🏷️ Categories & Organization

### Category Definitions

**seo-analysis/**
- Tools that integrate with SEO platforms
- Competitive analysis
- Rankings and traffic data

**google-tools/**
- Google Search Console integration
- SERP analysis
- Google testing tools

**technical-seo/**
- Crawling and indexing
- Structured data
- Site architecture

**content-analysis/**
- On-page content evaluation
- Keyword analysis
- Content structure

**link-analysis/**
- Internal/external links
- Link attributes (nofollow, etc.)
- Anchor text

**performance/**
- Page speed
- Core Web Vitals
- Performance testing

**utilities/**
- General-purpose tools
- URL manipulation
- Page editing

### Choosing a Category

Ask yourself:
1. What is the **primary purpose**?
2. Who would **search for this**?
3. Which category **makes most sense** to an SEO?

If unsure, ask in your PR!

---

## 🤝 Community Guidelines

### Be Respectful

- Welcome newcomers
- Assume good intentions
- Provide constructive feedback
- Celebrate contributions

### Help Others

- Answer questions
- Review pull requests
- Share knowledge
- Mentor contributors

### Give Credit

- Attribute original authors
- Link to sources
- Acknowledge helpers
- Thank contributors

---

## 📞 Getting Help

**Questions?**
- Open a [Discussion](../../discussions)
- Comment on relevant issues
- Tag maintainers if needed

**Need Review?**
- Request review in your PR
- Ping maintainers if no response in 7 days
- Be patient - this is volunteer work!

---

## 🎯 Maintainer Notes

### For Maintainers

**Reviewing PRs:**
1. Check all items in Code Review checklist
2. Test the bookmarklet yourself
3. Verify documentation is complete
4. Request changes if needed
5. Merge when ready

**Updating HTML:**
When a `.js` file changes, update `bookmarklets.html`:
1. Run `python3 scripts/generate-html.py`
2. Commit both files together

**Versioning:**
- Use semantic versioning
- Tag releases
- Update CHANGELOG

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Every contribution makes this collection better for the SEO community. Thank you for being part of it!

---

[← Back to README](../README.md) | [Installation Guide →](INSTALLATION.md)
