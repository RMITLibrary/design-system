---
title: Breakpoints and columns
name: Breakpoints and columns
parent: "Visual language"
hide_footer: false
---
<h1 class="margin-top-zero">Breakpoints and columns</h1>
<h2>Breakpoints</h2>
<p>The design system is built using the Bootstrap 5 framework. As such, the system employs the following default bootstrap breakpoints.</p>
<table class="table table-striped">
  <thead>
    <tr>
      <th>Breakpoint</th>
      <th>Class infix</th>
      <th>Dimensions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>X-Small</td>
      <td><em>None</em></td>
      <td>&lt;576px</td>
    </tr>
    <tr>
      <td>Small</td>
      <td><code>sm</code></td>
      <td>≥576px</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td><code>md</code></td>
      <td>≥768px</td>
    </tr>
    <tr>
      <td>Large</td>
      <td><code>lg</code></td>
      <td>≥992px</td>
    </tr>
    <tr>
      <td>Extra large</td>
      <td><code>xl</code></td>
      <td>≥1200px</td>
    </tr>
    <tr>
      <td>Extra extra large</td>
      <td><code>xxl</code></td>
      <td>≥1400px</td>
    </tr>
  </tbody>
</table>

<p>For screens &lt;768px width (i.e. Small and X-small breakpoints), both the typography and spacing systems use smaller sizes. An example:</p>
<figure class="img-width-full">
    <img src="../../images/heading-example.png" alt="" class="border" />
</figure>
<p>More detail is available on the <a href="../typography">Typography</a> and <a href="../spacing">Spacing</a> pages.</p>
<p>Analytics for the Learning lab website revealed the following for calendar year of 2023:</p>
<ul>
    <li>75% of users are on desktop, 25% mobile</li>
    <li>Desktop screens less than 1280px in width account for less than 5% of all users</li>
</ul>
<p>The development focus should be on Extra extra large, Extra large and X-small breakpoints (95% of all users use these breakpoints)</p>
<h2>Columns</h2>
<p>The design system uses Bootstrap 5’s column grid: 12 columns with 24px gutters (12px left and right)</p>
<figure>
    <img src="../../images/columns.png" alt="" />
</figure>
<h3>Screens ≥1200px width</h3>
<p>At breakpoints Extra Large and Extra extra large, a two column layout is used for content and navigation. It’s recommended to restrict page content to 8 columns wide even if no right navigation is present. This keeps the line length readable and easily scannable.</p>
<figure class="img-width-lg">
    <img src="../../images/columns-more-1200px.png" alt="" />
</figure>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;container-md&quot;&gt;
   &lt;div class=&quot;row&quot;&gt;
      &lt;div class=&quot;col-xl-8&quot;&gt;
         &lt;! --Page content --&gt;
      &lt;/div&gt;
      &lt;div class=&quot;col-xl-4&quot;&gt;
         &lt;! --Right nav --&gt;
      &lt;/div&gt;
   &lt;/div&gt;
&lt;/div&gt;</code>
</pre>
</div>

<h3>Screens &lt;1200px</h3>
<p>At breakpoints X-Small, Small, Medium, Large, the optional right nav drops below page content.</p>
<figure>
    <img src="../../images/columns-more-1200px.png" alt="" class="limit-width" />
</figure>
<table class="table table-striped">
  <thead>
    <tr>
      <th>Breakpoint</th>
      <th>Page content</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>X-Small</td>
      <td>100% (-12px left and right)</td>
    </tr>
    <tr>
      <td>Small</td>
      <td>100% (-12px left and right)</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td>696px</td>
    </tr>
    <tr>
      <td>Large</td>
      <td>936px</td>
    </tr>
  </tbody>
</table>
