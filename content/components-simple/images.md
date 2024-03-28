---
title: Images
name: Images
parent: "Simple Components"
---
<h1 class="margin-top-zero">Images</h1>
<p class="lead">Dewey offers various options in displaying images including  borders, alignment, sizing and adding captions and transcript accordions.
</p>
<h2>Markup</h2>
<p>For images used in page content, wrap all <code>&lt;img&gt;</code> tags in a <code>&lt;figure&gt;</code> tag. Remember to include an alt tag.</p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure&gt;
   &lt;img src=&rdquo;my-image.jpg&rdquo; alt=&rdquo;An example image&rdquo; / &gt;
&lt;/figure&gt;</code>
</pre></div>
<h2>Border</h2>
<p>Add a border to your image using the class <code>border</code>. his can be useful for diagram images on a white background. The border colour used is interface-grey.</p>
<figure>
    <img src="../../images/img-example-graph.png" alt="An example image" class="border" />
</figure>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure&gt;
   &lt;img src=&rdquo;my-image.jpg&rdquo; alt=&rdquo;An example image&rdquo;  class=&rdquo;border&rdquo; / &gt;
&lt;/figure&gt;</code>
</pre></div>
<button class="btn btn-primary">Primary button</button>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;button class=&quot;btn btn-primary&quot; &gt;Primary button&lt;/button&gt;</code>
</pre></div>
<h2>Other</h2>
<p>The prev and next links at the bottom of the page need to be visually prominent. While they take some styling cues from buttons to achieve this, they are in fact links. Visit the <a href="/visual/links/">links</a> page for more information.</p>

