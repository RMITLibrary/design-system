---
title: Layouts
name: Layouts
parent: "Simple components"
---
<h1 class="margin-top-zero">Layouts</h1>
<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>
<h2>Floating images</h2>
<p>Floating images can be a good way to wrap text around an image, maximising screen real estate. It's important that there's enough content to ensure enough of a text wrap. Blocks of paragraph text are recommended. Look at your layout at screen sizes above 1400px. If the image is taller than the text, or only a tiny sit shorter, consider using the icon-text layout.</p>
<ul>
    <li>Floated content has a width of 18.5rem (296px). </li>
    <li>On smaller screen sizes, the image is displayed at full width.</li>
    <li>Image should be placed before supporting content</li>
</ul>
<figure class="float-right">
    <img src="https://rmitlibrary.github.io/cdn/learninglab/illustration/uni-essentials.png" class="borde" alt="An example image" />
    <figcaption>An example caption for this image.</figcaption>
</figure>
<h3>Float right example</h3>
<p>The figure in this example has the class <code>float-right</code> applied. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien.</p>
<!-- START code example -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure class=&quot;float-right&quot;&gt;
    &lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
    &lt;figcaption&gt;An example caption for this image.&lt;/figcaption&gt;
&lt;/figure&gt;
&lt;p&gt;Text content that will be wrapped.&lt;/p&gt;
&lt;p&gt;More text content that will be wrapped.&lt;/p&gt;
&lt;p&gt;Yet more text content that will be wrapped.&lt;/p&gt;</code>
</pre></div>
<!-- END code example -->

<h2>Hide images on small screen sizes</h2>
<p>To hide an image at smaller screen sizes (less than 768px wide), use the <code>hide-sm</code> class. This can be useful if the image is decorative and not required to convey the meaning of the content.</p>
<figure class="float-left hide-sm">
    <img src="https://rmitlibrary.github.io/cdn/learninglab/images/1474StevenRendallImage1.jpg" alt="An example image" />
</figure>
<h3 class="margin-top-zero">Float left example</h3>
<p>The figure in this example has the class <code>float-left</code> applied. It also has the <code>hide-sm</code> class applied. This will hide the image at small screen size <span class="nowrap">(&lt; 768px)</span>. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>
<!-- START code example -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure class=&quot;float-left hide-sm&quot;&gt;
    &lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
&lt;/figure&gt;
&lt;p&gt;Text content that will be wrapped.&lt;/p&gt;
&lt;p&gt;More text content that will be wrapped.&lt;/p&gt;
&lt;p&gt;Yet more text content that will be wrapped.&lt;/p&gt;</code>
</pre></div>
<!-- END code example -->
<h2>Smaller floating content</h2>
<ul>
<li>Use either float-left-sm or float-right-sm classes.</li>
<li>Floated content is displayed at 160px at all screen sizes.</li>
</ul>
<figure class="float-right-sm">
    <img src="https://rmitlibrary.github.io/cdn/learninglab/illustration/uni-essentials.png" class="borde" alt="An example image" />
    <figcaption>An example caption for this image.</figcaption>
</figure>
<h3>Float right small example</h3>
<p>The figure in this example has the class <code>float-right-sm</code> applied. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien.</p>
<!-- START code example -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure class=&quot;float-right-sm&quot;&gt;
    &lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
    &lt;figcaption&gt;An example caption for this image.&lt;/figcaption&gt;
&lt;/figure&gt;
&lt;p&gt;Text content that will be wrapped.&lt;/p&gt;
&lt;p&gt;More text content that will be wrapped.&lt;/p&gt;
&lt;p&gt;Yet more text content that will be wrapped.&lt;/p&gt;</code>
</pre></div>
<figure class="float-left-sm">
    <img src="https://rmitlibrary.github.io/cdn/learninglab/images/1474StevenRendallImage1.jpg" alt="An example image" />
</figure>
<h3>Float left small example</h3>
<p>The figure in this example has the class <code>float-left-sm</code> applied. It also has the <code>hide-sm</code> class applied. This will hide the image at small screen size <span class="nowrap">(&lt; 768px)</span>. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien.</p>
<!-- START code example -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure class=&quot;float-left-sm&quot;&gt;
    &lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
&lt;/figure&gt;
&lt;p&gt;Text content that will be wrapped.&lt;/p&gt;
&lt;p&gt;More text content that will be wrapped.&lt;/p&gt;
&lt;p&gt;Yet more text content that will be wrapped.&lt;/p&gt;</code>
</pre></div>
<!-- END code example -->
<div class="icon-text">
	<figure>
		<img alt="" src="https://rmitlibrary.github.io/cdn/learninglab/documentation/xs-pen.png">
        <figcaption>Thisi s a test</figcaption>
	</figure>
	<div class="text">
		<p>How do I structure an essay? Essays have three parts: A beginning... A middle... and an end. That is, the introduction, body, and conclusion. It’s important to have structure in your essay, or you will lose the flow of your argument.</p>
	</div>
</div>
<!-- END code example -->
<!-- START code example -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;code example here&gt;</code>
</pre></div>
<!-- END code example -->
<div class="icon-text">
	<figure class="img-width-sm">
		<img alt="" src="https://rmitlibrary.github.io/cdn/learninglab/documentation/xs-pad@2x.png">
	</figure>
	<div class="text">
		<h3>Step 1</h3>
		<p>Accurately write down details of authors when taking notes</p>
	</div>
</div>
<div class="icon-text-align-top">
	<figure class="img-width-sm">
		<img alt="" src="https://rmitlibrary.github.io/cdn/learninglab/documentation/xs-pad@2x.png">
	</figure>
	<div class="text">
		<h3>Step 2</h3>
		<p>A longer step to demonstrate <code>icon-text-align-top</code></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin au</p>
        <p>Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin au</p>
	</div>
</div>
<!-- END code example -->
<!-- START code example -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;code example here&gt;</code>
</pre></div>
<!-- END code example -->


<figure class="float-left hide-sm">
    <img src="my-image.jpg" alt="An example image" />
</figure>
<p>Text content that will be wrapped.</p>
<p>More text content that will be wrapped.</p>
<p>Yet mext content that will be wrapped.</p>
