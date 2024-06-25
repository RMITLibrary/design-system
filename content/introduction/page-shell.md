---
title: Page shell
name: Page shell
parent: "Introduction"
hide_footer: false
---
<h1 class="margin-top-zero">Page shell</h1>
<p class="lead">This page outlines the basic structure in which various content and components can be placed. Use this structure as a base for your webpage developpment.</p>
<h2>Basic structure</h2>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;!-- Page title and stylesheets are placed here --&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;header&gt;
		&lt;!-- Top navigation is placed here --&gt;
	&lt;/header&gt;
	&lt;div id=&quot;page-content&quot;&gt;
		&lt;main class=&quot;container&quot;&gt;
			&lt;div class=&quot;row&quot;&gt;
				&lt;div class=&quot;col-xl-4 order-last&quot;&gt;
					&lt;!-- Right navigation is placed here --&gt;
				&lt;/div&gt;
				&lt;div class=&quot;col-xl-8 order-first&quot; id=&quot;main-content&quot;&gt;
					&lt;!-- Page content is placed here --&gt;
				&lt;/div&gt;  
			&lt;/div&gt;
		&lt;/main&gt;
		&lt;div class=&quot;footer-container&quot;&gt;
			&lt;!-- Footer content is placed here --&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;!-- Javascript is placed here --&gt;
&lt;/body&gt;
&lt;/html&gt;</code>
</pre></div>
<p>Everything with the <code>page-content</code> id is hidden when context/hamburger menu is displayed. The script to execute this change is placed at the bottom of the page.</p>
<h2>&lt;html&gt;</h2>
<p>The class <code>nav-fixed</code> can be added to the html tag to fix the top navigation to the top of the page: <code>&lt;html class="nav-fixed"&gt;</code></p>
<h2>&lt;head&gt;</h2>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
&lt;title&gt;&lt;!-- Page title goes here --&gt;&lt;/title&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;path.to/compiled-sass.css&quot;&gt;
&lt;!-- Additional linked script files --&gt;
&lt;!-- Additional meta tags and tracking code --&gt;</code>
</pre></div>
<p>Or</p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;meta charset=&quot;utf-8&quot;&gt;
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
&lt;title&gt;&lt;!-- Page title goes here --&gt;&lt;/title&gt;
&lt;!-- link to design system css --&gt;
&lt;link href=&quot;https://rmitlibrary.github.io/design-system/sass/main.min.css&quot; rel=&quot;stylesheet&quot;&gt;
&lt;!-- link to your own custom styles --&gt;
&lt;link href=&quot;path.to/custom-styles.css&quot; rel=&quot;stylesheet&quot;&gt;
&lt;!-- Additional linked script files --&gt;
&lt;!-- Additional meta tags and tracking code --&gt;</code>
</pre></div>
<p>The code above shows the minimum required in the <code>&lt;html&gt;</code> section.</p>
<p>here are two approaches to including design system styles. The simplest method is to first include the compiled css in the <code>&lt;html&gt;</code> section of your page. Then, add your own custom css directly after and overwrite and extend the styles required.</p>
<p>An alternative, which provides more flexibility, is to copy and compile the design system's scss files, resulting in a single css file. You'll need a sass compiler to carry out this method. This allows your styles to access mixins and variables from both the design system and bootstrap itself. </p>
<h2>Top navigation</h2>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;header&gt;
	&lt;a href="#main-content" class="visually-hidden-focusable"&gt;Skip to main content&lt;/a&gt;
	&lt;div class=&quot;top-navigation&quot;&gt;
		&lt;div class=&quot;container&quot;&gt;
			&lt;div class=&quot;row&quot;&gt;
				&lt;div class=&quot;col-auto left-nav&quot;&gt;
					&lt;div class=&quot;rmit-logo&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;RMIT University logo&lt;/span&gt;&lt;/div&gt;
					&lt;a href=&quot;&quot; class=&quot;h2&quot;&gt;Optional site title &lt;span class=&quot;visually-hidden&quot;&gt;homepage&lt;/span&gt;&lt;/a&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/header&gt;</code>
</pre></div>
<p>There are lots of options available in the design system when it comes to top navigation. All top navigation code should be placed in the <code>&lt;header&gt;</code> section The code above demonstrates the minimum required. The skip content link is only visible if it is focussed via keyboard controls. More information is available on the <a href="/design-system/introduction/accessibility/#page-structure">accessibility</a> page
The main-content id allows for the skip content link in the top navigation above to function.</p>
<p><a href="/design-system/components-complex/top-nav/" class="link-large">More information on top navigation</a></p>
<h2>Page content</h2>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;col-xl-4 order-last&quot;&gt;
	&lt;!-- Right navigation is placed here --&gt;
&lt;/div&gt;
&lt;div class=&quot;col-xl-8 order-first&quot; id=&quot;main-content&quot;&gt;
	&lt;!-- Page content is placed here --&gt;
&lt;/div&gt;</code>
</pre></div>
<p>Visually, navigation is presented to the right of the content. Semantically, navigation is listed before content to clearly describe the hierarchy of the page to a blind user.</p>
<p>It’s recommended to restrict page content to 8 columns wide even if no right navigation is present. This keeps the line length readable and easily scannable. The <code>main-content</code> id allows for the skip content link outlined in the top navigation above to function.</p>
<h2>Footer</h2>
<p>Typically, the footer consists of three basic parts, ask the library, acknowledgment of country and the general RMIT footer. The basic structure is as follows:
</p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;footer-container&quot;&gt;
	&lt;div class=&quot;container&quot;&gt;
		&lt;div class=&quot;row&quot;&gt;
			&lt;div class=&quot;col&quot;&gt;
				&lt;!-- START ask the library --&gt;
				... 
				&lt;!-- END ask the library --&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class=&quot;acknowledgement&quot;&gt;
		&lt;div class=&quot;container&quot;&gt;
			&lt;div class=&quot;row&quot;&gt;
				&lt;div class=&quot;col&quot;&gt;
					&lt;!-- START acknowledgement --&gt;
					...
					&lt;!-- END acknowledgement --&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;    
	&lt;footer&gt;
	&lt;div class=&quot;container&quot;&gt;
		&lt;div class=&quot;row&quot;&gt;
			&lt;div class=&quot;col&quot;&gt;
				&lt;!-- START footer --&gt;
				...
				&lt;!-- END footer --&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;/footer&gt;
&lt;/div&gt;</code>
</pre></div>
<p><a href="/design-system/components-complex/footer/" class="link-large">More information on footer</a></p>
<h2>Script</h2>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;script&gt;
//If true, menu covers content, if false menu pushes content down
var menuCover = true;   
&nbsp;
/* Grab both the menu button and the page content */
var menuButton = document.getElementById(&quot;menu-button&quot;);
var pageContent = document.getElementById(&quot;page-content&quot;);
&nbsp;
var scrollPosition;			// Store content scroll position
var menuDisplay = false;		// Store display status of menu
&nbsp;
/* Listen for click */
if(menuCover) menuButton.addEventListener(&quot;click&quot;, showHideMenu);
&nbsp;
function showHideMenu() {
    if(menuDisplay == false)
    {
        menuDisplay = true;
        scrollPosition = window.scrollY;    
        pageContent.style.display = &quot;none&quot;; 
    }
    else
    {
        menuDisplay = false;
        pageContent.style.display = &quot;block&quot;;
        &nbsp;
        /* Change scroll behaviour, jump to where the user had scrolled to on the page, 
		then revert to smooth scrolling again. */
        document.documentElement.style.scrollBehavior = &quot;auto&quot;;
        window.scroll(0, scrollPosition);
        document.documentElement.style.scrollBehavior = &quot;smooth&quot;;
    }
}
&lt;/script&gt;</code>
</pre></div>
<p>The script displayed above controls the showing and hiding of the context (or hamburger) menu. If this menu isn't being used by your top navigation, it can be omitted.</p>
