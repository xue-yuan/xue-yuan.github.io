# Performance Optimization Report: Critical Rendering Path (CRP)

This document summarizes the optimization changes applied to the portfolio website to address the **Render-blocking requests** issue reported by Chrome Lighthouse.

## 📊 Summary of Optimization Changes

To resolve the render-blocking alerts and reduce estimated render blocking time by ~2,550 ms, the following strategies were implemented:

1. **Localized High-Latency CDN Dependencies**:
   - 📦 **DaisyUI** (`full.min.css`, ~137 KiB transfer / 2.8 MB raw): Downloaded locally to [assets/daisyui.min.css](file:///Users/ares/workspace/projects/xue-yuan.github.io/assets/daisyui.min.css). Hosting this locally eliminates external TLS/TCP handshake latency to `cdn.jsdelivr.net`.
   - 📦 **Canvas Confetti** (`confetti.browser.min.js`, ~4 KiB): Downloaded locally to [assets/confetti.browser.min.js](file:///Users/ares/workspace/projects/xue-yuan.github.io/assets/confetti.browser.min.js).

2. **Asynchronous Load for Non-Critical Stylesheets**:
   - Used the standard `<link rel="preload" as="style" onload="...">` pattern for:
     - 🎨 **Google Fonts CSS** (`Space Grotesk` & `Inter`)
     - 🎨 **FontAwesome Icons CSS** (`all.min.css`)
     - 🎨 **Animate.css** (`animate.min.css`)
   - This ensures the browser paints the page's bento layout instantly and loads fonts/icons/animations in the background, completely bypassing render blocking.

3. **Deferred Script Execution**:
   - Added the `defer` attribute to non-critical script resources:
     - ⚙️ [assets/data.js](file:///Users/ares/workspace/projects/xue-yuan.github.io/assets/data.js)
     - ⚙️ [assets/confetti.browser.min.js](file:///Users/ares/workspace/projects/xue-yuan.github.io/assets/confetti.browser.min.js)
     - ⚙️ SoundCloud Widget API (`api.js`)
   - Deferring scripts ensures they execute after document parsing is complete but right before `DOMContentLoaded` fires. This preserves the exact initialization sequence (loading data, confetti, and SoundCloud before page scripts run) without blocking HTML parsing.

4. **Resource Preconnections**:
   - Added `preconnect` hints for remaining third-party domains (`cdnjs.cloudflare.com` and `w.soundcloud.com`) to warm up DNS, TCP, and TLS handshakes in advance.

---

## 🛠️ Details of Head Changes in `index.html`

Below is the diff of resource loading in [index.html](file:///Users/ares/workspace/projects/xue-yuan.github.io/index.html):

```diff
-  <!-- Fonts -->
-  <link rel="preconnect" href="https://fonts.googleapis.com">
-  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
-  <link
-    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
-    rel="stylesheet">
-
-  <!-- Text Content Data Configuration Source -->
-  <script src="./assets/data.js"></script>
-
-  <!-- Tailwind & DaisyUI -->
-  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css" rel="stylesheet" type="text/css" />
-  <link rel="stylesheet" href="./assets/style.css">
-
-  <!-- FontAwesome & Animate.css -->
-  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
-  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
-  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
-  <script src="https://w.soundcloud.com/player/api.js"></script>
+  <!-- Resource Preconnections -->
+  <link rel="preconnect" href="https://fonts.googleapis.com">
+  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
+  <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
+  <link rel="preconnect" href="https://w.soundcloud.com" crossorigin>
+
+  <!-- Web Fonts (Asynchronous Load) -->
+  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
+  <noscript>
+    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap">
+  </noscript>
+
+  <!-- Localized Tailwind & DaisyUI (Critical Styles) -->
+  <link href="./assets/daisyui.min.css" rel="stylesheet" type="text/css" />
+  <link rel="stylesheet" href="./assets/style.css">
+
+  <!-- Non-Critical UI Libraries (Asynchronous Load) -->
+  <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
+  <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></noscript>
+
+  <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
+  <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></noscript>
+
+  <!-- Non-blocking JavaScript Dependencies -->
+  <script src="./assets/data.js" defer></script>
+  <script src="./assets/confetti.browser.min.js" defer></script>
+  <script src="https://w.soundcloud.com/player/api.js" defer></script>
```
