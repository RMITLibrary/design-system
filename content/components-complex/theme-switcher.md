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
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="auto" aria-label="System" id="theme-system">
              <label for="theme-system" class="form-check-label">System</label>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="light" aria-label="Light" id="theme-light">
              <label for="theme-light" class="form-check-label">Light</label>
          </div> 
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="dark" aria-label="Dark" id="theme-dark">
              <label for="theme-dark" class="form-check-label">Dark</label>
          </div>
      </div>
  </fieldset>
</form>
<!-- End theme switcher -->
<div class="highlight wrap-code">
<pre class="chroma">
<code class="language-html">&lt;fieldset&gt;
      &lt;legend&gt;Theme&lt;/legend&gt;
      &lt;div class=&quot;bg&quot;&gt;
          &lt;div class=&quot;form-check form-check-inline&quot;&gt;
              &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;themeOptions&quot; data-bs-theme-value=&quot;auto&quot; aria-label=&quot;System&quot; id=&quot;theme-system&quot;&gt;
              &lt;label for=&quot;theme-system&quot; class=&quot;form-check-label&quot;&gt;System&lt;/label&gt;
          &lt;/div&gt;
          &lt;div class=&quot;form-check form-check-inline&quot;&gt;
              &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;themeOptions&quot; data-bs-theme-value=&quot;light&quot; aria-label=&quot;Light&quot; id=&quot;theme-light&quot;&gt;
              &lt;label for=&quot;theme-light&quot; class=&quot;form-check-label&quot;&gt;Light&lt;/label&gt;
          &lt;/div&gt; 
          &lt;div class=&quot;form-check form-check-inline&quot;&gt;
              &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;themeOptions&quot; data-bs-theme-value=&quot;dark&quot; aria-label=&quot;Dark&quot; id=&quot;theme-dark&quot;&gt;
              &lt;label for=&quot;theme-dark&quot; class=&quot;form-check-label&quot;&gt;Dark&lt;/label&gt;
          &lt;/div&gt;
      &lt;/div&gt;
  &lt;/fieldset&gt;</code>
</pre></div>
<p>It is advisable to add <code>id</code> attributes to radio buttons and corresponding <code>for</code> attributes to labels. This enhancement allows users to click the label as well as the radio button itself, improving accessibility and usability. However, the code functions independently of these id attributes, permitting the addition of multiple switchers to the page as needed.</p>
<h2>Hamburger menu</h2>
<p>This variant is designed to sit on a blue background and can be used in a site's context or hamburger menu. It merely changes the colour of the title to white</p>
<div style="background-color: #000056; padding: 1px 2rem 1rem 2rem;">
<!-- Start theme switcher -->
<form class="theme-switch hamburger-menu">
  <fieldset>
      <legend>Theme</legend>
      <div class="bg">
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="auto" aria-label="System" id="theme-system2">
              <label for="theme-system2" class="form-check-label">System</label>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="light" aria-label="Light" id="theme-light2">
              <label for="theme-light2" class="form-check-label">Light</label>
          </div> 
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="dark" aria-label="Dark" id="theme-dark2">
              <label for="theme-dark2" class="form-check-label">Dark</label>
          </div>
      </div>
  </fieldset>
</form>
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
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="auto" aria-label="System" id="theme-system3">
              <label for="theme-system3" class="form-check-label">System</label>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="light" aria-label="Light" id="theme-light3">
              <label for="theme-light3" class="form-check-label">Light</label>
          </div> 
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="themeOptions" data-bs-theme-value="dark" aria-label="Dark" id="theme-dark3">
              <label for="theme-dark3" class="form-check-label">Dark</label>
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
