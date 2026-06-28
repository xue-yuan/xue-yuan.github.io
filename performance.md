# Performance Optimization Report: Critical Rendering Path (CRP)

This document summarizes the optimization changes applied to the portfolio website to address the **Render-blocking requests** and **Image Delivery** issues reported by Chrome Lighthouse.

## 📊 Summary of Optimization Changes

To resolve the render-blocking alerts, reduce page weight, and improve load speed, the following strategies were implemented:

1. **Integrated DaisyUI v5.6.0 as a Tailwind CSS Plugin**:
   - 🛠️ Installed `daisyui@5.6.0` as a dev dependency and configured it in [tailwind.config.js](file:///Users/ares/workspace/projects/xue-yuan.github.io/tailwind.config.js).
   - ⚡ This allows Tailwind CSS to parse `index.html` and compile **only the used DaisyUI styles** into [assets/style.css](file:///Users/ares/workspace/projects/xue-yuan.github.io/assets/style.css), purging the rest.
   - 🗑️ Completely deleted the large, local `assets/daisyui.min.css` (which was 2.8 MB raw / ~198 KB compressed) and its link tag from the HTML.
   - 📉 The final compiled [assets/style.css](file:///Users/ares/workspace/projects/xue-yuan.github.io/assets/style.css) size is only **24.2 KB**, adding almost zero footprint while eliminating a major render-blocking request!

2. **Optimized and Resized Avatar Image**:
   - 🖼️ The original `assets/avatar.jpeg` was 883x883 pixels and weighed **432.6 KB**, but was only displayed at a max dimensions of 189x189 pixels in CSS.
   - ⚡ Compressed and resized the image to **384x384 pixels** (optimal resolution for Retina and high-density screens) with 80% JPEG quality.
   - 📉 Reduced the image file size to **76.5 KB**, achieving an **82.3% size reduction (saving ~354 KB)** of download payload.

3. **Asynchronous Load for Non-Critical Stylesheets**:
   - Used the standard `<link rel="preload" as="style" onload="...">` pattern for:
     - 🎨 **Google Fonts CSS** (`Space Grotesk` & `Inter`)
     - 🎨 **FontAwesome Icons CSS** (`all.min.css`)
     - 🎨 **Animate.css** (`animate.min.css`)
   - This ensures the browser paints the page's bento layout instantly and loads fonts/icons/animations in the background, completely bypassing render blocking.

4. **Deferred Script Execution**:
   - Added the `defer` attribute to non-critical script resources:
     - ⚙️ [assets/data.js](file:///Users/ares/workspace/projects/xue-yuan.github.io/assets/data.js)
     - ⚙️ [assets/confetti.browser.min.js](file:///Users/ares/workspace/projects/xue-yuan.github.io/assets/confetti.browser.min.js)
     - ⚙️ SoundCloud Widget API (`api.js`)
   - Deferring scripts ensures they execute after document parsing is complete but right before `DOMContentLoaded` fires. This preserves the exact initialization sequence (loading data, confetti, and SoundCloud before page scripts run) without blocking HTML parsing.

5. **Resource Preconnections**:
   - Added `preconnect` hints for remaining third-party domains (`cdnjs.cloudflare.com` and `w.soundcloud.com`) to warm up DNS, TCP, and TLS handshakes in advance.

---

## 🛠️ Details of Head Changes in `index.html`

Below is the updated resource loading configuration in [index.html](file:///Users/ares/workspace/projects/xue-yuan.github.io/index.html):

```html
  <!-- Resource Preconnections -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
  <link rel="preconnect" href="https://w.soundcloud.com" crossorigin>

  <!-- Web Fonts (Asynchronous Load) -->
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap">
  </noscript>

  <!-- Tailwind CSS & DaisyUI (Compiled & Purged Styles) -->
  <link rel="stylesheet" href="./assets/style.css">

  <!-- Non-Critical UI Libraries (Asynchronous Load) -->
  <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></noscript>

  <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></noscript>

  <!-- Non-blocking JavaScript Dependencies -->
  <script src="./assets/data.js" defer></script>
  <script src="./assets/confetti.browser.min.js" defer></script>
  <script src="https://w.soundcloud.com/player/api.js" defer></script>
```
