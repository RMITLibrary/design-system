---
title: Blockquotes
name: Blockquotes
parent: "Simple Components"
---
<h1 class="margin-top-zero">Blockquotes</h1>
<p class="lead">Blockquotes can be useful to highlight sections of text and can also function as a navigation device. Visually, they are obviously separate from the rest of the content and can provide prominent for the information contained within.</p>
<h2>Basic</h2>
<p>The basic blockquote just contains text. The suggested content limit is 450 characters or 80 words.</p>
<p>By default, each image has a margin of <strong>space-small</strong> applied top and bottom</p>
<blockquote>
    <div class="content">
        <p>This tutorial covers four of the most important aspects in writing a literature review: criteria to use in choosing the best sources, how to structure your literature review, writing in an appropriate style, and maintaining a voice of authority.</p>
    </div>
</blockquote>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;blockquote&gt;
    &lt;div class=&quot;content&quot;&gt;
        &lt;p&gt;Content goes here.&lt;/p&gt;
    &lt;/div&gt;
&lt;/blockquote&gt;</code>
</pre></div>
<h2>Featuring an image</h2>
<p>The image width is 12.25rem (196px). Portrait images are supported but are best used sparingly. At X-Small and Small breakpoints, the image is stacked on top of the text.</p>
<blockquote>
    <div class="img-wrap"><img src="../../images/img-example-graph.png" alt="An example image" /></div>
    <div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare consectetur tellus. Aenean non posuere tortor, pretium accumsan augue. </p></div>
</blockquote>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;blockquote&gt;
    &lt;div class=&quot;img-wrap&quot;&gt;&lt;img src=&rdquo;my-image.jpg&rdquo; alt=&quot;An example image&quot; /&gt;&lt;/div&gt;
    &lt;div class=&quot;content&quot;&gt;
		&lt;p&gt;Content goes here.&lt;/p&gt;
	&lt;/div&gt;
&lt;/blockquote&gt;</code>
</pre></div>
<hr class="xl" />
<a name="nav"></a>
<h2>Blockquotes as navigation</h2>
<p>Blockquotes can be useful to highlight sections of text and can also function as a navigation device. Visually, they are obviously separate from the rest of the content and can provide prominent for the information contained within.
</p>
<p>The following pieces are available for use an:</p>
<ul>
	<li>Category</li>
	<li>Title link (required)</li>
	<li>Description</li>
	<li>Extra information</li>
	<li>Icon</li>
</ul>
<blockquote class="link">
	<a href="../../visual/links">
        <div class="content">
            <p class="category">Category</p>
            <h3>This is a title </h3>
            <p>This is a blockquote. The suggested limit is XXX characters.</p>
            <small>Extra information</small>
        </div>
        <div class="icon-wrap"><img src="../../images/icon-llcc-large.svg" alt="" /></div>
    </a>
</blockquote>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;blockquote class=&quot;link&quot;&gt;
	&lt;a href=&quot;mylink&quot;&gt;
		&lt;div class=&quot;content&quot;&gt;
			&lt;p class=&quot;category&quot;&gt;Category&lt;/p&gt;
			&lt;h3&gt;This is a title &lt;/h3&gt;
			&lt;p&gt;This is the blockquote content.&lt;/p&gt;
			&lt;small&gt;Extra information&lt;/small&gt;
		&lt;/div&gt;
		&lt;div class=&quot;icon-wrap&quot;&gt;
			&lt;img src=&quot;my-icon.png&quot; alt=&quot;&quot; /&gt;
		&lt;/div&gt;
	&lt;/a&gt;
&lt;/blockquote&gt;</code>
</pre></div>
<p>It's unlikely (and not recommended) that all of these pieces be used at once. Here are some examples demonstrating suggested use.</p>
<!-- START blockquote -->
<blockquote class="link">
	<a href="../../visual/links">
        <div class="content">
            <p class="category">Tool</p>
            <h3>Assignment planner</h3>
            <p>The library has a great assignment planning tool that is easy to use and provides you with <span class="nowrap">step-by-step</span> plan, withs links to lots of resources to help you stay on task.</p>
        </div>
    </a>
</blockquote>
<!-- END blockquote -->
<!-- START blockquote -->
<blockquote class="link">
	<a href="../../visual/links">
        <div class="content">
            <p class="category">PDF</p>
            <h3>Understanding an assignment topic</h3>
        </div>
    </a>
</blockquote>
<!-- END blockquote -->
<!-- START blockquote -->
<blockquote class="link">
	<a href="../../visual/links">
        <div class="content">
            <h3>Starting your first assignment</h3>
            <p>Planning and organising your first assignment may seem daunting to students who are new to academic study. This tutorial gives you an overview of how to analyse the assessment task and plan the assignment.</p>
            <small>6 pages / 20 mins</small>
        </div>
    </a>
</blockquote>
<!-- END blockquote -->
<!-- START blockquote -->
<blockquote class="link">
	<a href="../../visual/links">
        <div class="content">
            <h3>Assignment slammer</h3>
            <p>This short tutorial walks you through the process of preparing, planning and writing an assignment with quick links to the resources you can use at each stage.</p>
        </div>
    </a>
</blockquote>
<!-- END blockquote -->
<!-- START blockquote -->
<blockquote class="link">
	<a href="../../visual/links">
        <div class="content">
            <h3>Evaluating market information</h3>
            <p>Explore these skills in a real world context.</p>
        </div>
        <div class="icon-wrap"><img src="../../images/icon-llcc-large.svg" alt="" /></div>
    </a>
</blockquote>
<!-- END blockquote -->

