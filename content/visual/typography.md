---
title: Typography
name: Typography
parent: "Visual language"
hide_footer: false
---
<h1 class="margin-top-zero">Typography</h1>
<p class="lead">Type use default bootstrap scaling (1rem = 16px). On smaller screens, sizes downscale based on desktop sizes: mobile h1 takes desktop h2 values, mobile lead takes desktop lead. Intermediate heading sizes are scaled as per desktop.</p>
<h2>Headings</h2>
<p>All headings are set in Museo 700, RMIT Blue (#000054) as per brand guidelines. This thicker weight provides good contrast with body text, making the difference between headings and body content very clear.</p>
<h2>Body text</h2>
<p>Body text is set in Helvetica Neue, Dark Grey (#333333) at font-weight 400. <strong>Bold or strong text</strong> uses font-weight 600. Note the lead paragraph style uses font-weight 500.</p>
<p>To view the mobile styles, either resize your browser window, or use <a href="https://developer.chrome.com/docs/devtools/device-mode">Chrome dev tools</a> to view the pages at different breakpoints</p>
<hr />
<h2>Core type stack</h2>
<h1>This is h1 heading</h1>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;h1&gt;This is h1 heading&lt;/h1&gt;
</code></pre></div>
<h2>This is h2 heading</h2>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;h2&gt;This is h2 heading&lt;/h1&gt;
</code></pre></div>
<h3>This is h3 heading</h3>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;h3&gt;This is h3 heading&lt;/h1&gt;
</code></pre></div>
<h4>This is h4 heading</h4>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;h4&gt;This is h4 heading&lt;/h1&gt;
</code></pre></div>
<h5>This is h5 heading</h5>
<p>Sized to be the same size as Lead paragraph</p>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;h5&gt;This is h5 heading&lt;/h1&gt;
</code></pre></div>
<h6>This is h6 heading</h6>
<p>Same size as h5, use sparingly.</p>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;h6&gt;This is h6 heading&lt;/h1&gt;
</code></pre></div>

<p class="lead">Lead paragraph is usually used at the start of pages, after the main page heading (h1). It is uses a font-weight of 500. Don't display too much content in this style, 400 characters is a suggested limit.</p>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;p class="lead"&gt;Lead paragraph is usually used at the start of pages...&lt;/p&gt;
</code></pre></div>

<p>Default paragraph. Almost all of the text will be displayed using this style. </p><p>A summary is an overview of a work. Summaries are much shorter than the works themselves, but still need to contain the author’s original ideas.</p>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;p&gt;Default paragraph. Almost all of the text will be displayed using this style.&lt;/p&gt;
</code></pre></div>

<p class="small">Small text, this style has increased letter-spacing to aid type legibility at small sizes. </p><p class="small">A summary is an overview of a work. Summaries are much shorter than the works themselves, but still need to contain the author’s original ideas.</p>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;p class="small"&gt;Small text, this style has increased letter-spacing...&lt;/p&gt;
</code></pre></div>
<!--
<h2>Other styles</h2>
<p>In addition to the styles outlined above, there are a selection which are used sparingly in a distinct context.</p>
<p>MathJax</p>
-->
<h2>Lists</h2>
<p>Lists are styled to reduce the amount of identation, giving more room for content on smaller screens. In addition, extra margin is added at the bottom of nested lists to provide adaquate separation. Nested lists use the square <code>list-style-type</code> to increase visibility for low vision users.</p>
<ul>
    <li>Nunc at commodo est. Sed ex sem, lobortis id leo finibus, gravida posuere est.</li> 
    <li>Cras luctus purus a facilisis molestie.</li> 
    <li>Donec laoreet vel metus a ornare. Nunc rhoncus est lorem. <ul>
        <li>Nunc at commodo est. Sed ex sem, lobortis id leo finibus, gravida posuere est.</li> 
        <li>Cras luctus purus a facilisis molestie.</li> 
        <li>Donec laoreet vel metus a ornare. Nunc rhoncus est lorem.</li> 
        <li>Donec laoreet vel metus a ornare. Nunc rhoncus est lorem, eget bibendum dolor accumsan </li> 
    </ul>
    </li>
    <li>Donec laoreet vel metus a ornare. Nunc rhoncus est lorem, eget bibendum dolor accumsan </li> 
</ul>
<h2>Text wrapping</h2>
To control how phrases or hypenated words are wrapped over lines, use the nowrap class rather than a line break. This accounts for multiple screen widths. Try to limit the number of words that are wrapped in the tag. 
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;span class=&quot;nowrap&quot;&gt;RMIT Library&lt;/span&gt;</code></pre></div>
<hr />
<h2>Pseudo headings</h2>
<p>Use sparingly, when you want to display a certain size heading without disrupting the symantics.</p>
<p class="h1">This is h1 heading</p>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;p class=&quot;h1&quot;&gt;This is h1 heading&lt;/p&gt;</code>
</pre></div>
<p class="h2">This is h2 heading</p>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;p class=&quot;h2&quot;&gt;This is h2 heading&lt;/p&gt;</code>
</pre></div>
<p class="h3">This is h3 heading</p>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;p class=&quot;h3&quot;&gt;This is h3 heading&lt;/p&gt;</code>
</pre></div>
<p class="h4">This is h4 heading</p>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;p class=&quot;h4&quot;&gt;This is h4 heading&lt;/p&gt;</code>
</pre></div>
<p class="h5">This is h5 heading</p>
<p>Sized to be the same size as Lead paragraph</p>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;p class=&quot;h5&quot;&gt;This is h5 heading&lt;/p&gt;</code>
</pre></div>
<p class="h6">This is h6 heading</p>
<p>Same size as h5, use sparingly.</p>
<div class="margin-top-xs highlight"><pre class="chroma">
<code class="language-html">&lt;p class=&quot;h6&quot;&gt;This is h6 heading&lt;/p&gt;</code>
</pre></div>
<h2>Referencing</h2>
<p>When displaying references, it might be appropriate to use the class <code>small</code> to reduce to the text size. To display the reference in asa format, simply use the class <code>asa</code>. This will display the reference with a hanging indent.</p>
<p class="small">Cherrington DJ and England JL (1980) 'The desire for an enriched job as a moderator of the enrichment-satisfaction relationship', <em>Organizational Behavior and Human Performance</em>, 25(1)139-159, doi:10.1016/0030-5073(80)90030-6.</p>
<p class="apa small">Solomon, L.J., &amp; Rothblum, E.D. (1984). Academic procrastination: Frequency and cognitive-behavioral correlates. Journal of Counseling Psychology, 31(4), 503-509. https://doi.org/10.1037/0022-0167.31.4.503</p>
<div class="highlight"><pre class="chroma">
<code class="language-html">&lt;p class=&quot;small&quot;&gt;Reference goes here&lt;/p&gt;
&lt;p class=&quot;apa small&quot;&gt;Reference goes here&lt;/p&gt;
</code></pre></div>
