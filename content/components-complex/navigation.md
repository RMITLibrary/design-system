---
title: Navigation
name: Navigation
parent: "Complex Components"
---
<h1 class="margin-top-zero">Navigation</h1>
<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare elit nec metus dapibus sollicitudin. Pellentesque vel eros ac erat placerat cursus vel a velit. Phasellus mattis aliquam arcu eget iaculis.
</p>
<h2>Breadcrumbs</h2>
<p>Breadcrumbs are usually placed at the top of the page, close to the page title, to help navigate sites with multiple content levels. A disabled 'page title' breadcrumb is unnecessary unless an image or other interface separates the breadcrumbs from the page title.</p>
<ul class="breadcrumbs">
	<li><a href="">Home</a></li>
	<li><a href="">Item 1</a></li>
	<li><a href="">Item 2</a></li>
	<li><a href="">Item 3</a></li>
	<li><a href="">Item 4</a></li>
	<li><a href="">Item 5</a></li>
</ul>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;ul class=&quot;breadcrumbs&quot;&gt;
	&lt;li&gt;&lt;a href=&quot;link&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=&quot;link&quot;&gt;Item 1&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=&quot;link&quot;&gt;Item 2&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=&quot;link&quot;&gt;Item 3&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=&quot;link&quot;&gt;Item 4&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=&quot;link&quot;&gt;Item 5&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code>
</pre></div>
<p>For space reasons, at small and x-small breakpoints, only the last breadcrumb is displayed, along with a back arrow. Resize your browser to see this in action.</p>
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
<h2>Right nav</h2>
<p>gfdgdf dgdf dfg fffdgdf</p>
<figure class="img-width-full">
   <img src="../../images/navigation-diagram.png" alt="" class="border" /> 
    <figcaption>A diagram demonstrating the hierarchy whith an example from Learning Lab for context.</figcaption>
</figure>
<nav>
    <h4><a href="">Section title</a></h4>
    <h5><a href="">Subsection title</a></h5>
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
<code class="language-html">&lt;nav&gt;
    &lt;h4&gt;&lt;a href=&quot;&quot;&gt;Section title&lt;/a&gt;&lt;/h4&gt;
    &lt;h5&gt;&lt;a href=&quot;&quot;&gt;Subsection title&lt;/a&gt;&lt;/h5&gt;
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
<nav>
    <h4><a href="">Section title</a></h4>
    <ul>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
        <li><a href="">Content page</a></li>
    </ul>
</nav>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;nav&gt;
    &lt;h4&gt;&lt;a href=&quot;&quot;&gt;Section title&lt;/a&gt;&lt;/h4&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href=&quot;&quot;&gt;Content page&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</code>
</pre></div>
<p>There's also a variant that uses accordions to hide navigation. It allows the user to quickly access the whole site from any page. This format only suits smaller sites with a relatively balanced structure. The section that contains the viewed page should be expanded by default.</p>
<nav>
    <div class="accordion-item nav-accordion">
        <h5 class="accordion-header" id="nav-section1-head">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#nav-section1-body" aria-expanded="true" aria-controls="nav-section1-body">
            Section 1
            </button>
        </h5>
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
        <h5 class="accordion-header" id="nav-section2-head">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nav-section2-body" aria-expanded="false" aria-controls="nav-section2-body">
            Section 2
            </button>
        </h5>
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
        <h5 class="accordion-header" id="nav-section3-head">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nav-section3-body" aria-expanded="false" aria-controls="nav-section3-body">
            Section 3
            </button>
        </h5>
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
<code class="language-html">&lt;nav&gt;
    &lt;!-- START accordion --&gt;
    &lt;div class=&quot;accordion-item nav-accordion&quot;&gt;
        &lt;h5 class=&quot;accordion-header&quot; id=&quot;nav-section1-head&quot;&gt;
            &lt;button class=&quot;accordion-button&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#nav-section1-body&quot; aria-expanded=&quot;true&quot; aria-controls=&quot;nav-section1-body&quot;&gt;
            Section 1
            &lt;/button&gt;
        &lt;/h5&gt;
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
        &lt;h5 class=&quot;accordion-header&quot; id=&quot;nav-section2-head&quot;&gt;
            &lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#nav-section2-body&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;nav-section2-body&quot;&gt;
            Section 2
            &lt;/button&gt;
        &lt;/h5&gt;
        &lt;div id=&quot;nav-section2-body&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;nav-section2-head&quot;&gt;
            &lt;div class=&quot;accordion-body&quot;&gt;
                &lt;!-- Content goes here --&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- END accordion --&gt;
    &lt;!-- START accordion --&gt;
    &lt;div class=&quot;accordion-item nav-accordion&quot;&gt;
        &lt;h5 class=&quot;accordion-header&quot; id=&quot;nav-section3-head&quot;&gt;
            &lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#nav-section3-body&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;nav-section3-body&quot;&gt;
            Section 3
            &lt;/button&gt;
        &lt;/h5&gt;
        &lt;div id=&quot;nav-section3-body&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;nav-section3-head&quot;&gt;
            &lt;div class=&quot;accordion-body&quot;&gt;
                &lt;!-- Content goes here --&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- END accordion --&gt;
&lt;/nav&gt;</code>
</pre></div>