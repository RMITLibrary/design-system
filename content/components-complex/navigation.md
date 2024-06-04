---
title: Navigation
name: Navigation
parent: "Complex components"
---
<h1 class="margin-top-zero">Navigation</h1>
<p class="lead">There are several recommended approaches to providing navigation. Using breadcrumbs at the top of the page is a simple and compact way of showing the user the website hierarchy. The right nav offers several options for providing more detailed navigation and could be useful for larger, more complex sites.</p>
<h2>Breadcrumbs</h2>
<p>Breadcrumbs are usually placed at the top of the page, close to the page title, to help navigate sites with multiple content levels. A disabled 'page title' breadcrumb is unnecessary unless an image or other interface separates the breadcrumbs from the page title.</p>
<nav aria-label="breadcrumbs">
    <ul class="breadcrumbs">
        <li><a href="">Home</a></li>
        <li><a href="">Item 1</a></li>
        <li><a href="">Item 2</a></li>
        <li><a href="">Item 3</a></li>
        <li><a href="">Item 4</a></li>
        <li><a href="">Item 5</a></li>
    </ul>
</nav>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;nav aria-label=&quot;breadcrumbs&quot;&gt;
    &lt;ul class=&quot;breadcrumbs&quot;&gt;
        &lt;li&gt;&lt;a href=&quot;link&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;link&quot;&gt;Item 1&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;link&quot;&gt;Item 2&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;link&quot;&gt;Item 3&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;link&quot;&gt;Item 4&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;link&quot;&gt;Item 5&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>
</pre></div>
<p>For space reasons, at small and x-small breakpoints, only the last breadcrumb is displayed, along with a back arrow. Resize your browser to see this in action.</p>
<a name="right-nav"></a>
<h2>Right nav</h2>
<p>The right nav is designed to be displayed on content pages.</p>
<ul>
	<li>A link to the page's section (grandparent).</li>
	<li>A link to the page's subsection (parent).</li>
	<li>The current page and all of its subpages.</li>
	<li>The other content pages in the section ( the current page's siblings).
</li>
</ul>
<p>On section (parent) and subsection pages, it might not be necessary to display the right nav as these pages might be dedicated to showing the navigation as page content. </p>
<figure class="img-width-full">
   <img src="../../images/navigation-diagram.png" alt="" class="border" /> 
    <figcaption>A diagram demonstrating the hierarchy whith an example from Learning Lab for context.</figcaption>
</figure>
<nav class="right-nav margin-left-zero" aria-label="Section Menu">
    <h2><a href="">Section title</a></h2>
    <h3><a href="">Subsection title</a></h3>
    <ul>
        <li>
            <a href="">Content page</a>
            <ul>
                <li class="selected">Content subpage</li>
                <li><a href="">Content subpage</a></li>
                <li><a href="">Content subpage</a></li>
            </ul>
        </li>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
    </ul>
</nav>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;nav class=&quot;right-nav&quot; aria-label=&quot;Section Menu&quot;&gt;
    &lt;h2&gt;&lt;a href=&quot;&quot;&gt;Section title&lt;/a&gt;&lt;/h2&gt;
    &lt;h3&gt;&lt;a href=&quot;&quot;&gt;Subsection title&lt;/a&gt;&lt;/h3&gt;
    &lt;ul&gt;
        &lt;li&gt;
            &lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;
            &lt;ul&gt;
                &lt;li class=&quot;selected&quot;&gt;Content subpage&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content subpage&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content subpage&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>
</pre></div>
<p>It's possible to not include the subsection and still use this navigation:</p>
<nav class="right-nav margin-left-zero" aria-label="Section Menu">
    <h2 class="secion-link"><a href="">Section title</a></h2>
    <ul>
        <li class="selected">Content page</li>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
    </ul>
</nav>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;nav class=&quot;right-nav&quot; aria-label=&quot;Section Menu&quot;&gt;
    &lt;h2&gt;&lt;a href=&quot;&quot;&gt;Section title&lt;/a&gt;&lt;/h2&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>
</pre></div>
<h3>Basic menu</h3>
<p>In some instances, a site might not need to display such a detailed hierarchy. For this flatter structure, a flatter navigation is available, dispensing with section and subsection links. Indentation on links is adjusted to suit. Use the class <strong>right-nav-simple</strong>.</p>
<nav class="right-nav-simple margin-left-zero" aria-label="Section Menu">
    <ul>
        <li class="selected">Content page</li>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
    </ul>
</nav>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;nav class=&quot;right-nav-simple&quot; aria-label=&quot;Section Menu&quot;&gt;
    &lt;ul&gt;
        &lt;li class=&quot;selected&quot;&gt;Content page&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content subpage&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content subpage&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content subpage&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>
</pre></div>

<h3>Accordion</h3>
<p>There's also a variant that uses accordions to hide navigation. It allows the user to quickly access the whole site from any page. This format only suits smaller sites with a relatively balanced structure. The section that contains the page that is currently being viewed should be expanded by default.</p>
<nav class="right-nav-accordion margin-left-zero">
    <div class="accordion-item nav-accordion">
        <h2 class="accordion-header" id="nav-section1-head">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#nav-section1-body" aria-expanded="true" aria-controls="nav-section1-body">
            Section 1
            </button>
        </h3>
        <div id="nav-section1-body" class="accordion-collapse collapse show" aria-labelledby="nav-section1-head">
            <div class="accordion-body">
                <ul>
                    <li class="selected">Content page</li>
                    <li><a href="">Content page</a></li>
                    <li><a href="">Content page</a></li>
                    <li><a href="">Content page</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- END accordion -->
    <!-- START accordion -->
    <div class="accordion-item nav-accordion">
        <h2 class="accordion-header" id="nav-section2-head">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nav-section2-body" aria-expanded="false" aria-controls="nav-section2-body">
            Section 2
            </button>
        </h3>
        <div id="nav-section2-body" class="accordion-collapse collapse" aria-labelledby="nav-section2-head">
            <div class="accordion-body">
                <ul>
                    <li><a href="">Content page</a></li>
                    <li><a href="">Content page</a></li>
                    <li><a href="">Content page</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- END accordion -->
    <!-- START accordion -->
    <div class="accordion-item nav-accordion">
        <h2 class="accordion-header" id="nav-section3-head">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nav-section3-body" aria-expanded="false" aria-controls="nav-section3-body">
            Section 3
            </button>
        </h3>
        <div id="nav-section3-body" class="accordion-collapse collapse" aria-labelledby="nav-section3-head">
            <div class="accordion-body">
                <ul>
                    <li><a href="">Content page</a></li>
                    <li><a href="">Content page</a></li>
                    <li><a href="">Content page</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- END accordion -->
</nav>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;nav class=&quot;right-nav-accordion&quot;&gt;
    &lt;!-- START accordion --&gt;
    &lt;div class=&quot;accordion-item nav-accordion&quot;&gt;
        &lt;h2 class=&quot;accordion-header&quot; id=&quot;nav-section1-head&quot;&gt;
            &lt;button class=&quot;accordion-button&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#nav-section1-body&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;nav-section1-body&quot;&gt;
            Section 1
            &lt;/button&gt;
        &lt;/h3&gt;
        &lt;div id=&quot;nav-section1-body&quot; class=&quot;accordion-collapse collapse show&quot; aria-labelledby=&quot;nav-section1-head&quot;&gt;
            &lt;div class=&quot;accordion-body&quot;&gt;
                &lt;ul&gt;
                    &lt;li class=&quot;selected&quot;&gt;Content page&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- END accordion --&gt;
    &lt;!-- START accordion --&gt;
    &lt;div class=&quot;accordion-item nav-accordion&quot;&gt;
        &lt;h2 class=&quot;accordion-header&quot; id=&quot;nav-section2-head&quot;&gt;
            &lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#nav-section2-body&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;nav-section2-body&quot;&gt;
            Section 2
            &lt;/button&gt;
        &lt;/h3&gt;
        &lt;div id=&quot;nav-section2-body&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;nav-section2-head&quot;&gt;
            &lt;div class=&quot;accordion-body&quot;&gt;
                &lt;!-- Content goes here --&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- END accordion --&gt;
    &lt;!-- START accordion --&gt;
    &lt;div class=&quot;accordion-item nav-accordion&quot;&gt;
        &lt;h2 class=&quot;accordion-header&quot; id=&quot;nav-section3-head&quot;&gt;
            &lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#nav-section3-body&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;nav-section3-body&quot;&gt;
            Section 3
            &lt;/button&gt;
        &lt;/h3&gt;
        &lt;div id=&quot;nav-section3-body&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;nav-section3-head&quot;&gt;
            &lt;div class=&quot;accordion-body&quot;&gt;
                &lt;!-- Content goes here --&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- END accordion --&gt;
&lt;/nav&gt;</code>
</pre></div>