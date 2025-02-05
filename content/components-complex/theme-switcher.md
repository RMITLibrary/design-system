---
title: Theme switcher
name: Theme switcher
parent: "Complex components"
---
<h1 class="margin-top-zero">Theme switcher</h1>
<p class="lead">The Theme Switcher lets users toggle between light, dark, and system themes, with the latter adapting to the device's preference. It's powered by two JavaScript scripts—one in the head section and one at the bottom of the page—to ensure smooth transitions. Several variants cater to different UI needs.</p>
<h2>Default</h2>
<!-- Start theme switcher -->
<form class="theme-switch">
  <fieldset>
      <legend>Theme</legend>
      <div class="bg">
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="auto" aria-label="System">
              <span class="form-check-label">System</span>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="light" aria-label="Light">
              <span class="form-check-label">Light</span>
          </div> 
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="dark" aria-label="Dark">
              <span class="form-check-label">Dark</span>
          </div>
      </div>
  </fieldset>
</form>
<!-- End theme switcher -->
<div class="highlight wrap-code">
<pre class="chroma">
<code class="language-html">&lt;form class=&quot;theme-switch&quot;&gt;
  &lt;fieldset&gt;
      &lt;legend&gt;Theme&lt;/legend&gt;
      &lt;div class=&quot;bg&quot;&gt;
          &lt;div class=&quot;form-check form-check-inline&quot;&gt;
              &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;themeOptions&quot; data-bs-theme-value=&quot;auto&quot; aria-label=&quot;System&quot;&gt;
              &lt;span class=&quot;form-check-label&quot;&gt;System&lt;/span&gt;
          &lt;/div&gt;
          &lt;div class=&quot;form-check form-check-inline&quot;&gt;
              &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;themeOptions&quot; data-bs-theme-value=&quot;light&quot; aria-label=&quot;Light&quot;&gt;
              &lt;span class=&quot;form-check-label&quot;&gt;Light&lt;/span&gt;
          &lt;/div&gt; 
          &lt;div class=&quot;form-check form-check-inline&quot;&gt;
              &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;themeOptions&quot; data-bs-theme-value=&quot;dark&quot; aria-label=&quot;Dark&quot;&gt;
              &lt;span class=&quot;form-check-label&quot;&gt;Dark&lt;/span&gt;
          &lt;/div&gt;
      &lt;/div&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</code>
</pre></div>

<h2>Hamburger menu</h2>
<p>This variant is designed to sit on a blue background and can be used in a site's context or hamburger menu. It merely changes the colour of the title to white</p>
<div style="background-color: #000056; padding: 1px 2rem 1rem 2rem;">
<!-- Start theme switcher -->
<form class="theme-switch hamburger-menu">
  <fieldset>
      <legend>Theme</legend>
      <div class="bg">
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="auto" aria-label="System">
              <span class="form-check-label">System</span>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="light" aria-label="Light">
              <span class="form-check-label">Light</span>
          </div> 
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="dark" aria-label="Dark">
              <span class="form-check-label">Dark</span>
          </div>
      </div>
  </fieldset>
</form>
<!-- End theme switcher -->
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;form class=&quot;theme-switch hamburger-menu&quot;&gt;
...
&lt;/form&gt;</code>
</pre></div>
<h2>Compact</h2>
<p>In this variant, all the options presented slightly smaller and inline. A thin divider is present at the top of the switcher</p>
<!-- Start theme switcher -->
<form class="theme-switch theme-compact">
  <fieldset>
      <legend>Theme</legend>
      <div class="bg">
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="auto" aria-label="System">
              <span class="form-check-label">System</span>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="light" aria-label="Light">
              <span class="form-check-label">Light</span>
          </div> 
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="dark" aria-label="Dark">
              <span class="form-check-label">Dark</span>
          </div>
      </div>
  </fieldset>
</form>
<!-- End theme switcher -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;form class=&quot;theme-switch theme-compact&quot;&gt;
...
&lt;/form&gt;</code>
</pre></div>
<h2>Right nav</h2>
<p>When using the theme switcher underneath the right hand nav, simply add the class <code>theme-right-nav</code> to get the appropriate amount of right margin. You can see this in action underneath the nav panel.</p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;form class=&quot;theme-switch theme-compact theme-right-nav&quot;&gt;
...
&lt;/form&gt;</code>
</pre></div>
<h2>Javascript</h2>
<p>The first script is placed in the <code>&lt;head&gt;</code> to ensure the theme is set as early as possible,
  reducing the flash of unstyled content (FOUC). It determines the user's preferred
  theme (either from local storage or system settings) and applies it immediately.</p>

<div class="highlight wrap-code">
<pre class="chroma">
<code class="language-js">&lt;script&gt;
  (function() {
    'use strict';

    const getStoredTheme = () => localStorage.getItem('theme');

    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme();
      return storedTheme ? storedTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    };

    const setTheme = theme => {
      const themeToSet = theme === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
      document.documentElement.setAttribute('data-bs-theme', themeToSet);
    };

    setTheme(getPreferredTheme()); 
  })();
&lt;/script&gt;</code>
</pre></div>

<p>The second script, placed at the bottom of the page, handles the theme switching functionality for the website. It retrieves the user's preferred theme from local storage or system settings and applies it to the document. It also provides the ability to switch themes through a theme switcher UI component, updates the UI to reflect the active theme, and listens for changes to the system's dark mode preference.</p>
<p>This script uses <code>data-bs-theme-value </code>to drive the logic, rather than ids, to allow multiple instances of the switcher to be present on a single page. This is unlikely, but may occur, a switcher in the hamburger menu and a compact version at the bottom of the page.</p>

<div class="highlight wrap-code">
<pre class="chroma">
<code class="language-js">&lt;script&gt;
  (function() {
    'use strict';

    const getStoredTheme = () => localStorage.getItem('theme');

    const setStoredTheme = theme => localStorage.setItem('theme', theme);

    const getPreferredTheme = () => {
      const storedTheme = getStoredTheme();
      return storedTheme ? storedTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    };

    const setTheme = theme => {
      const themeToSet = theme === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
      document.documentElement.setAttribute('data-bs-theme', themeToSet);
    };

    const showActiveTheme = theme => {
      document.querySelectorAll('.theme-switch').forEach(themeSwitcher => {
        themeSwitcher.querySelectorAll('[data-bs-theme-value]').forEach(element => {
          element.checked = (element.getAttribute('data-bs-theme-value') === theme);
        });
      });
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== 'light' && storedTheme !== 'dark') {
        setTheme(getPreferredTheme());
      }
    });

    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme());
      document.querySelectorAll('.theme-switch [data-bs-theme-value]').forEach(toggle => {
        toggle.addEventListener('change', () => {
          const theme = toggle.getAttribute('data-bs-theme-value');
          setStoredTheme(theme);
          setTheme(theme);
          showActiveTheme(theme);
        });
      });
    });
  })();
&lt;/script&gt;</code>
</pre></div>
