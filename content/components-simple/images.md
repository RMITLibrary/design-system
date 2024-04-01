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
<h2>Spacing</h2>
<p>By default, each image has a margin of <strong>space-large</strong> applied top and bottom</p>
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
<h2>Alignment</h2>
<p>By default, images are centred by default, but can be left aligned by applying the class <code>img-left</code> to the <code>figure</code> tag. Depending on the options added (caption and transcript) the optimal alignment may differ.</p>
<figure class="img-left">
    <img src="../../images/img-example-graph.png" alt="An example image" class="border" />
</figure>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure&gt;
   &lt;img src=&rdquo;my-image.jpg&rdquo; alt=&rdquo;An example image&rdquo;  class=&rdquo;border img-left&rdquo; / &gt;
&lt;/figure&gt;</code>
</pre></div>
<h2>Sizing</h2>
<p>In sizing images, we look to retain responsiveness by not setting specific width and height values for images. Instead, the styles use <code>width: 100%</code> and <code>height: auto</code> to make the image fill its container. A <code class="nowrap">max-width</code> value is also set, to stop images getting too tall.</p>
<p>A range of helper classes are available to set the max-width value. By default max-width is set to <strong class="nowrap">44rem (704px)</strong>.</p>
<table class="table table-striped">
  <thead>
    <tr>
      <th>Class name</th>
      <th>max-width</th>
      <th>Suggested use</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>img-width-full</code></td>
      <td>100%</td>
      <td>Very wide images that aren’t too tall</td>
    </tr>
    <tr>
      <td><code>img-width-lg</code></td>
      <td>Landscape images (default)</td>
      <td>≥576px</td>
    </tr>
    <tr>
      <td><code>img-width-md</code></td>
      <td>25rem (400px)</td>
      <td>Portrait and square images</td>
    </tr>
    <tr>
      <td><code>img-width-sm</code></td>
      <td>18.5rem (284px)</td>
      <td>Really tall portrait images</td>
    </tr>
  </tbody>
</table>
<!-- full width image -->
<figure class="img-width-full">
    <img src="../../images/img-example-graph.png" alt="An example image" class="border" />
</figure>
<!-- large width image -->
<figure class="img-width-lg">
    <img src="../../images/img-example-graph.png" alt="An example image" class="border" />
</figure>
<!-- medium width image -->
<figure class="img-width-md">
    <img src="../../images/img-example-graph.png" alt="An example image" class="border" />
</figure>
<!-- small width image -->
<figure class="img-width-sm">
    <img src="../../images/img-example-graph.png" alt="An example image" class="border" />
</figure>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;!-- full width image --&gt;
&lt;figure class=&quot;img-width-full&quot;&gt;
    &lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
&lt;/figure&gt;
&lt;!-- large width image --&gt;
&lt;figure class=&quot;img-width-lg&quot;&gt;
    &lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
&lt;/figure&gt;
&lt;!-- medium width image --&gt;
&lt;figure class=&quot;img-width-md&quot;&gt;
    &lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
&lt;/figure&gt;
&lt;!-- small width image --&gt;
&lt;figure class=&quot;img-width-sm&quot;&gt;
    &lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
&lt;/figure&gt;</code>
</pre></div>
