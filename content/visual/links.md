---
title: Links
name: Links
parent: "Visual Language"
hide_footer: false
---
<h1 class="margin-top-zero">Links</h1>
<p><a href="">Links</a> occurring within paragraph text are displayed in <strong class="colour-rmit-blue">RMIT Blue</strong> with an underline. The extra visibility the underline provides is important due the lack of contrast between <strong class="colour-rmit-blue">RMIT Blue</strong> and the main text colour, <strong class="colour-dark-grey">Dark Grey</strong>. On hover, the colour changes to <strong class="colour-blue-hover">Blue Hover</strong>.
</p>
<p>The underline is removed in certain situations, such as in navigation, where the intent of a link is clear and the repetition of the underlines would appear aesthetically unappealing and visually "heavy". A red carat is sometimes used in these situations to help denote that a link is present</p>
<p>Due to contrast ratio constraints, links should only be presented on white or <strong class="colour-bg-underlay-grey" style="border: 0">Underlay Grey</strong> backgrounds.</p>
<h2>Headings</h2>
<p>Headings should not be used as links, the exception being in navigation. Here we rely on context and the change in colour on hover to indicate the link.</p>
<h2>Link large</h2>
<p>Link Large can be used to provide emphasis at the end of a paragraph. Only one Link Large should be used at a time, if multiple links are going to be presented, use the link panel(???? think about the name doc in navigation page) component.</p>
<a href="" class="link-large">Find out more</a>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;a href=&quot;enter-link-here&quot; class=&quot;link-large&quot;&gt;Find out more&lt;/a&gt;</code>
</pre></div>
<h2>Prev and next links</h2>
<p>These can be used at he bottom of pages to provide page to page navigation. They can be useful if other forms of navigation are used at the top of pages (e.g. <a href="">breadcrumbs</a>) and the user scrolls through content to the bottom of a page. They avoid excessive scrolling or repeat navigation and allow the user to progress through the site easily.</p>
<div class="btn-nav-container">
    <a class="btn btn-nav-prev" href="">Previous page</a>
    <a class="btn btn-nav-next" href="">Next page</a>
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;btn-nav-container&quot;&gt;
    &lt;a class=&quot;btn btn-nav-prev&quot; href=&quot;prev-link-here&quot;&gt;Previous page&lt;/a&gt;
    &lt;a class=&quot;btn btn-nav-next&quot; href=&quot;next-link-here&quot;&gt;Next page&lt;/a&gt;
&lt;/div&gt;</code>
</pre></div>
<h2>List links</h2>
<p>An option to display a list of links while giving the list more prominence than a standard unordered list.</p>
<div class="list-of-links">
	<h3>Optional title</h3>
	<ul>
		<li><a href="">Link 1</a></li>
		<li><a href="">Link 2</a></li>
		<li><a href="">Link 3</a></li>
		<li><a href="">Link 4</a></li>
		<li><a href="">Link 5</a></li>
	</ul>
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;list-of-links&quot;&gt;
	&lt;h3&gt;Optional title&lt;/h3&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 1&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 2&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 3&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 4&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 5&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
&lt;/div&gt;</code>
</pre></div>
<p>By default, the component has a border at the top and a title. The title can be easily removed while the border can be removed by adding the class <code>no-border-top</code>.</p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;list-of-links no-border-top&quot;&gt;
	&lt;ul&gt;
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 1&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 2&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 3&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 4&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 5&lt;/a&gt;&lt;/li&gt;
	&lt;/ul&gt;
&lt;/div&gt;</code>
</pre></div>
<h2>More information</h2>
<p>Have a look at the <a href="../../components-complex/navigation/">navigation page</a> to view more complex examples of links being used in the design system.</p>

