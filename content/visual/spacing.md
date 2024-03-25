---
title: Spacing
name: Spacing
parent: "Visual Language"
hide_footer: false
---
<h1 class="margin-top-zero">Spacing</h1>
<p class="lead">Dewey aims to create a generic spacing system, in an attempt to maintain consistency across different components. Hopefully, the system will also allow for flexibility in the future.</p>
<h2>Base units</h2>
<p><strong>Default unit (1rem = 16px)</strong></p>
<p>A series of units created to space elements in the page content. This system allows for responsiveness, having different values for smaller and larger screen widths.</p>
<table class="table table-striped">
  <thead>
    <tr>
      <th>Name</th>
      <th>Small (width &lt; 768px)</th>
      <th>Medium, large etc. (width ≥ 768px)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>space-xs</td>
      <td>1rem (16px)</td>
      <td>1rem (16px)</td>
    </tr>
    <tr>
      <td>space-sm</td>
      <td>1rem (16px)</td>
      <td>1.5rem (24px)</td>
    </tr>
	<tr>
      <td>space-md</td>
      <td>1.5rem (24px)</td>
      <td>2rem (32px)</td>
    </tr>
	<tr>
      <td>space-lg</td>
      <td>2rem (32px)</td>
      <td>2.5rem (40px)</td>
    </tr>
	<tr>
      <td>space-xl</td>
      <td>3rem (48px)</td>
      <td>4rem (64px)</td>
    </tr>
	<tr>
      <td>space-zero</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
<h2>Base units</h2>
<p>For headings</p>
<ul>
	<li>h1 uses <strong>space-xl</strong> for margin-top and <strong>space-sm</strong> for margin-bottom. </li>
	<li>Other headings use <strong>space-lg</strong> for margin-top and <strong>space-sm</strong> for margin-bottom.</li>
</ul>
<figure>
    <img src="../../images/spacing-example.png" alt="" class="limit-width" />
</figure>
<h2>Usage</h2>
<p>When working in scss, a mixin is available, <code>do-space</code>. Simply send the desired property (usually <strong class="nowrap">margin-top</strong> or <strong>margin-bottom</strong>) and the desired space unit (<strong>xs, sm, md, lg, xl</strong>). The value zero can also be passed to set the property to zero.</p>
<div class="highlight">
<pre class="chroma">
<code class="language-scss">@include do-space(margin-top, xl);    
@include do-space(margin-bottom, xl);</code>
</pre>
</div>
<p>Utility classes are also available for inline use, these can be useful if elements need to wrapped in container divs and the ability to collapse margins is lost, resulting in unwanted extra margins. These are available for both margin-top and bottom and padding top and bottom at each of the space units. These classes replicate the responsiveness detailed above.</p>
<code>[margin|padding]-[top|bottom]-[xs|sm|md|lg|xl|zero]</code>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;h1 class=&rdquo;margin-top-zero&rdquo;&gt;
&lt;p class=&rdquo;margin-top-xs&rdquo;&gt;
&lt;p class=&rdquo;padding-bottom-sm&rdquo;&gt;
&lt;p class=&rdquo;padding-top-xl&rdquo;&gt;</code>
</pre>
</div>
<p>These classes should be used sparingly. As mentioned above, using padding should be avoided unless absolutely neccessary.</p>
<h2>Dividers</h2>
<p>If more space is required than the above options allow, consider using a hr tag to divide content.</p>
<ul>
	<li><code>&lt;hr /&gt;</code> uses <strong>space-lg</strong> for margins top and bottom.</li>
	<li><code>&lt;hr class=&rdquo;xl&rdquo; /&gt;</code> uses <strong>space-xl</strong> for margins top and bottom.</li>
</ul>