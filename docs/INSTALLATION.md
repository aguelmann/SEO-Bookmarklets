# Installation Guide

Complete installation instructions for all major browsers.

## Table of Contents

- [Chrome / Edge](#chrome--edge)
- [Firefox](#firefox)
- [Safari](#safari)
- [Brave](#brave)
- [Opera](#opera)
- [Mobile Browsers](#mobile-browsers)
- [Troubleshooting](#troubleshooting)

---

## Chrome / Edge

### Method 1: Bulk Import (Recommended)

**Step 1:** Download the bookmarklets file
- Go to the [repository](https://github.com/yourusername/seo-bookmarklets)
- Download `bookmarklets.html`

**Step 2:** Open Bookmark Manager
- Press `Ctrl+Shift+O` (Windows/Linux)
- Press `⌘+Option+B` (Mac)
- Or navigate to `chrome://bookmarks/`

**Step 3:** Import
1. Click the three-dot menu (`⋮`) in the top-right
2. Select "Import bookmarks"
3. Choose the downloaded `bookmarklets.html` file
4. Click "Open"

**Step 4:** Organize
- Bookmarklets will appear in a new folder
- Drag folder to Bookmarks Bar for easy access
- Show Bookmarks Bar: `Ctrl+Shift+B`

### Method 2: Drag and Drop

**Step 1:** Show Bookmarks Bar
- Press `Ctrl+Shift+B` (Windows/Linux)
- Press `⌘+Shift+B` (Mac)

**Step 2:** Visit this repository on GitHub
- The README has clickable bookmarklet links

**Step 3:** Drag to Bookmarks Bar
- Simply drag any bookmarklet link
- Drop it onto your Bookmarks Bar
- Done!

### Method 3: Manual Creation

**Step 1:** Create New Bookmark
- Right-click Bookmarks Bar
- Select "Add page..."

**Step 2:** Fill in Details
- **Name:** [Bookmarklet name]
- **URL:** [Copy the JavaScript code]
  - Find code in `bookmarklets/` folder
  - Copy entire `javascript:...` code
  - Paste into URL field

**Step 3:** Save
- Click "Save"
- Bookmark appears on Bookmarks Bar

---

## Firefox

### Method 1: Bulk Import

**Step 1:** Download bookmarklets file
- Download `bookmarklets.html` from repository

**Step 2:** Open Bookmarks Manager
- Press `Ctrl+Shift+B` (Windows/Linux)
- Press `⌘+Shift+B` (Mac)
- Or menu: Bookmarks → Manage Bookmarks

**Step 3:** Import
1. Click "Import and Backup" button (folder icon with star)
2. Select "Import Bookmarks from HTML..."
3. Choose `bookmarklets.html`
4. Click "Open"

**Step 4:** Organize
- Find imported bookmarks in "Bookmarks Menu"
- Move to Bookmarks Toolbar for easy access

### Method 2: Drag and Drop

**Step 1:** Show Bookmarks Toolbar
- Right-click toolbar area
- Check "Bookmarks Toolbar"

**Step 2:** Drag Bookmarklets
- Visit this repository on GitHub
- Drag bookmarklet links to toolbar

### Method 3: Manual Creation

**Step 1:** Create Bookmark
- Right-click Bookmarks Toolbar
- Select "New Bookmark..."

**Step 2:** Enter Details
- **Name:** [Bookmarklet name]
- **Location:** [JavaScript code]
- **Tags:** (optional) "SEO", "Tools"

**Step 3:** Save
- Click "Add"

---

## Safari

**⚠️ Important:** Safari has stricter security policies. Some bookmarklets may not work or require additional permissions.

### Method 1: Drag and Drop

**Step 1:** Show Favorites Bar
- View → Show Favorites Bar
- Or `⌘+Shift+B`

**Step 2:** Drag Bookmarklets
- Visit repository on GitHub
- Drag bookmarklet links to Favorites Bar

### Method 2: Manual Creation

**Step 1:** Add Bookmark
- Bookmarks → Add Bookmark
- Or press `⌘+D`

**Step 2:** Edit Bookmark
1. Bookmarks → Edit Bookmarks
2. Find the bookmark you just created
3. Change the URL to the JavaScript code
4. Change name as desired

**Step 3:** Test
- Some bookmarklets may be blocked
- Safari may show security warnings
- Allow execution when prompted

### Safari Limitations

Safari blocks many bookmarklets by default:
- Bookmarklets that open new windows may fail
- External script loading is restricted
- Some DOM manipulation is blocked

**Workaround:**
- Use alternative browsers for SEO work
- Or enable "Develop" menu and "Disable Restrictions"

---

## Brave

Brave uses Chromium, so follow [Chrome instructions](#chrome--edge).

**Additional Step:**
- If bookmarklet is blocked by shields
- Click shield icon (address bar)
- Allow JavaScript/Scripts for that page
- Try bookmarklet again

---

## Opera

### Method 1: Import

**Step 1:** Download file
- Get `bookmarklets.html`

**Step 2:** Import
1. Menu → Bookmarks → Import bookmarks and settings
2. Choose "Bookmarks HTML file"
3. Select downloaded file

### Method 2: Drag and Drop

- Show Bookmarks Bar: `Ctrl+Shift+B`
- Drag bookmarklets from GitHub
- Drop onto Bookmarks Bar

---

## Mobile Browsers

### iOS (Safari, Chrome)

**⚠️ Limited Support:** Most bookmarklets don't work well on iOS.

**Best Option:** Use shortcuts instead
1. Open Shortcuts app
2. Create new shortcut
3. Add "Run JavaScript on Web Page" action
4. Paste bookmarklet code
5. Add to home screen

### Android (Chrome, Firefox)

**Chrome:**
1. Sync bookmarks from desktop
2. Bookmarks appear in mobile Chrome
3. Tap bookmark to run

**Firefox:**
1. Sync bookmarks from desktop
2. Access from Bookmarks menu
3. Tap to execute

**Note:** Mobile experience varies. Desktop is recommended for SEO work.

---

## Troubleshooting

### Bookmarklet Doesn't Appear

**Issue:** Imported but can't find bookmarklet  
**Solutions:**
- Check Bookmarks Menu (Firefox)
- Check "Other Bookmarks" folder (Chrome)
- Search bookmarks: `Ctrl+Shift+O`
- Re-import if needed

### Bookmarklet Doesn't Work

**Issue:** Nothing happens when clicked  
**Solutions:**
1. **Check Console:**
   - Press `F12` → Console tab
   - Look for error messages
   
2. **Content Security Policy:**
   - Some sites block bookmarklets
   - Try on a different website
   - Test on simple site like example.com
   
3. **Script Blocked:**
   - Disable ad blockers temporarily
   - Check browser security settings
   - Allow JavaScript execution

4. **Code Corrupted:**
   - Re-create bookmarklet
   - Ensure entire code was copied
   - Check for missing characters

### Pop-up Blocked

**Issue:** New window doesn't open  
**Solutions:**
- Allow pop-ups: Settings → Privacy → Pop-ups
- For specific site: Click pop-up blocked icon (address bar)
- Use right-click → "Open in new tab" instead

### Bookmarklet Opens Wrong Page

**Issue:** Opens unexpected URL  
**Solutions:**
- Check code for hardcoded domains
- Verify you're on correct page before clicking
- Some bookmarklets only work on specific sites

### "Script Not Allowed"

**Issue:** Browser security blocks execution  
**Solutions:**
- **Firefox:** `about:config` → `javascript.enabled` → `true`
- **Chrome:** Settings → Privacy → Site Settings → JavaScript → Allowed
- **Safari:** Develop → Disable JavaScript Restrictions

---

## Advanced: Keyboard Shortcuts

### Chrome/Edge

**Install Extension:**
- [Shortkeys](https://chrome.google.com/webstore/detail/shortkeys/logpjaacgmcbpdkdchjiaagddngobkck)
- [Bookmark Shortcuts](https://chrome.google.com/webstore/detail/bookmarks-shortcut/gfbhpgbpiiopmmhfmldokbcpakkhlfkg)

**Assign Shortcuts:**
1. Open extension
2. Add new shortcut
3. Map to bookmarklet
4. Save

**Example:**
- `Alt+H` → Highlight Headings
- `Alt+L` → Highlight Links
- `Alt+A` → Ahrefs Check Domain

### Firefox

**Built-in Keywords:**
1. Right-click bookmarklet
2. Select "Properties"
3. Add keyword (e.g., "hh" for Highlight Headings)
4. Save

**Usage:**
- Type keyword in address bar + Enter
- Executes bookmarklet instantly

---

## Security & Privacy

### What Bookmarklets Can Access

✅ **Can Access:**
- Current page's DOM
- Page content and structure
- URLs and links on page
- Cookies (if domain matches)

❌ **Cannot Access:**
- Other tabs or windows
- Browser history (beyond current page)
- Passwords or sensitive browser data
- Files on your computer

### Safety Tips

1. **Review Code:** Always check JavaScript before running
2. **Trusted Sources:** Only use from reputable repositories
3. **Test First:** Try on non-sensitive sites
4. **No Passwords:** Never use bookmarklets that ask for passwords
5. **HTTPS:** Prefer bookmarklets that use secure connections

### Privacy Notes

- Bookmarklets run **locally** in your browser
- Most don't send data anywhere
- Some open external tools (Ahrefs, Moz, etc.)
- Check individual bookmarklet code for external calls

---

## Getting Help

**Still having issues?**

1. **Check Console:** `F12` → Console (shows errors)
2. **Read Code:** Look for comments explaining functionality
3. **Search Issues:** Check GitHub Issues
4. **Ask Community:** Open new issue or discussion
5. **Try Alternative:** Use browser extension instead

---

## Next Steps

After installation:

1. ✅ Test a simple bookmarklet first (like "Clean URL")
2. ✅ Organize favorites by category/frequency
3. ✅ Read [USAGE_GUIDE.md](USAGE_GUIDE.md) for workflows
4. ✅ Assign keyboard shortcuts to most-used tools
5. ✅ Share with colleagues!

---

[← Back to README](../README.md) | [Usage Guide →](USAGE_GUIDE.md)
