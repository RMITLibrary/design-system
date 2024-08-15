---
title: Layouts
name: Layouts
parent: "Simple components"
---
<h1 class="margin-top-zero">Layouts</h1>
<p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>
<a id="floating"></a>
<h2>Floating images</h2>
<p>"Floating images help wrap text around them, maximising screen space. Ensure there's more paragraph text than the height of the image at 1400px wide. If this works, the wrap will be effective at other screen sizes too. If the image is taller than the text, or only a tiny sit shorter, consider using the icon-text layout.</p>
<ul>
    <li>Floated content has a width of 18.5rem (296px). </li>
    <li>On smaller screen sizes, the image is displayed at full width.</li>
    <li>Image should be placed before supporting content</li>
</ul>
<h3>Float right example</h3>
<figure class="float-right">
    <img src="https://rmitlibrary.github.io/cdn/learninglab/illustration/uni-essentials.png"  alt="An example image" />
    <figcaption>An example caption for this image.</figcaption>
</figure>
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
<h3>Float right small example</h3>
<figure class="float-right-sm">
    <img src="https://rmitlibrary.github.io/cdn/learninglab/illustration/uni-essentials.png"  alt="An example image" />
    <figcaption>An example caption for this image.</figcaption>
</figure>
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
<h2>Image and text</h2>
<p>
	While the above float classes rely on the text height exceeding that of the image, <code>img-text</code> deals with the opposite situation. Note the following:
</p>
<ul>
	<li>Images will displayed at full width on smaller screens (&lt; 768px wide).</li>
	<li>On larger screens, images are displayed to the right of text.</li>
	<li>At this size, images have a width of 18.5 rem (296px).</li>
	<li>Using <code>img-text</code> vertically aligns image and text content to the centre.</li>
	<li>To align everything to the top, add the class <code>align-items-top</code>. This can be useful if the text height exceeds the image height, but only by a small amount.</li>
	<li>If a large amount of text is used, dead space under the image is created. Consider using float-right instead.</li>
	<li>Images are aligned to the right by default. To align to the left, add the class <code>img-text-left</code>. Use this alignment sparignly, it can work well alternating bewtween right and left. Maybe :/ </li>
</ul>
<div class="img-text">
	<figure>
		<img src="https://rmitlibrary.github.io/cdn/learninglab/images/1474StevenRendallImage1.jpg"  alt="An example image" />
	</figure>
	<div class="content-text">
		<h3>Example 1</h3>
		<p>This example demonstrates <code>img-text</code></p>
		<p>Nam tempor gravida ipsum quis vehicula. Sed vestibulum magna augue, lacinia congue augue vehicula vel. Vestibulum venenatis est lorem, sed venenatis augue porta ut.</p>
		<p>Nam condimentum quis augue quis ornare. Nam consequat non metus ac dignissim. Proin mattis elit purus. Donec augue velit, finibus quis magna in, condimentum imperdiet libero. Aliquam erat volutpat.</p>
	</div>
</div>
<div class="img-text img-text-left">
	<figure>
		<img src="https://rmitlibrary.github.io/cdn/learninglab/images/1474StevenRendallImage1.jpg"  alt="An example image" />
	</figure>
	<div class="content-text">
		<h3>Example 2</h3>
	<p>This example demonstrates using <code>img-text</code> and <code>img-text-left</code> to align the image to the left.</p>
		<p>Nam tempor gravida ipsum quis vehicula. Sed vestibulum magna augue, lacinia congue augue vehicula vel. Vestibulum venenatis est lorem, sed venenatis augue porta ut.</p>
		<p>Nam condimentum quis augue quis ornare. Nam consequat non metus ac dignissim. Proin mattis elit purus. Donec augue velit, finibus quis magna in, condimentum imperdiet libero. Aliquam erat volutpat.</p>
	</div>
</div>
<!-- START code example -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;img-text&quot;&gt;
	&lt;figure&gt;
		&lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
	&lt;/figure&gt;
	&lt;div class=&quot;content-text&quot;&gt;
		&lt;h3&gt;Heading&lt;/h3&gt;
		&lt;p&gt;Text to be placed alongside image.&lt;/p&gt;
		&lt;p&gt;Text to be placed alongside image.&lt;/p&gt;
	&lt;/div&gt;
&lt;/div&gt;</code>
</pre></div>
<!-- END code example -->
<div class="img-text align-items-top">
	<figure>
		<img alt="" src="https://rmitlibrary.github.io/cdn/learninglab/illustration/uni-essentials.png">
	</figure>
	<div class="content-text">
		<h3 class="margin-top-zero">Example 3</h3>
		<p>A longer bit of text to demonstrate using <code>img-text</code> and <code>align-items-top</code></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin au</p>
        <p>Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin au</p>
	</div>
</div>
<!-- START code example -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;img-text align-items-top&quot;&gt;
	&lt;figure&gt;
		&lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
	&lt;/figure&gt;
	&lt;div class=&quot;content-text&quot;&gt;
		&lt;h3&gt;Heading&lt;/h3&gt;
		&lt;p&gt;Text to be placed alongside image.&lt;/p&gt;
		&lt;p&gt;Text to be placed alongside image.&lt;/p&gt;
	&lt;/div&gt;
&lt;/div&gt;</code>
</pre></div>
<!-- END code example -->
<h2>Icon and text</h2>
<p>
	Similar to <code>img-text</code>, the class <code>icon-text</code> allows for an image and text to be placed side by side. The image size is smaller and thus more suitable for icons.
</p>
<ul>
	<li>Images and text are displayed side by side at all screen sizes.</li>
	<li>Images (or icons) are displayed at 3rem (48px) on smaller screens and 4rem (80px) on larger screens (≥768px)</li>
	<li>Images are always displyed on the left.</li>
</ul>
<div class="icon-text">
	<figure>
		<img alt="" src="https://rmitlibrary.github.io/cdn/learninglab/documentation/xs-pad@2x.png">
	</figure>
	<div class="content-text">
		<h3>Example 1</h3>
		<p>A short line of text for this layout.</p>
	</div>
</div>
<!-- START code example -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;icon-text&quot;&gt;
	&lt;figure&gt;
		&lt;img src=&quot;https://path.to/icon.png&quot; alt=&quot;An example icon&quot;  /&gt;
	&lt;/figure&gt;
	&lt;div class=&quot;content-text&quot;&gt;
		&lt;h3&gt;Heading&lt;/h3&gt;
		&lt;p&gt;Text to be placed alongside image.&lt;/p&gt;
	&lt;/div&gt;
&lt;/div&gt;</code>
</pre></div>
<!-- END code example -->
<div class="icon-text align-items-top">
	<figure>
		<img alt="" src="https://rmitlibrary.github.io/cdn/learninglab/documentation/xs-pad@2x.png">
	</figure>
	<div class="content-text">
		<h3>Example 2</h3>
		<p>A longer step to demonstrate <code>icon-text</code> and <code>align-items-top</code></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin au</p>
        <p>Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin au</p>
	</div>
</div>
<!-- START code example -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;icon-text align-items-top&quot;&gt;
	&lt;figure&gt;
		&lt;img src=&quot;https://path.to/icon.png&quot; alt=&quot;An example icon&quot;  /&gt;
	&lt;/figure&gt;
	&lt;div class=&quot;content-text&quot;&gt;
		&lt;h3&gt;Heading&lt;/h3&gt;
		&lt;p&gt;Text to be placed alongside image.&lt;/p&gt;
		&lt;p&gt;Text to be placed alongside image.&lt;/p&gt;
		&lt;p&gt;Text to be placed alongside image.&lt;/p&gt;
	&lt;/div&gt;
&lt;/div&gt;</code>
</pre></div>
<!-- END code example -->


<!-- CARD float-right -->

<h3>Float right card example</h3>
<div class="card float-right my-border">
<!--<figure>
  <img src="https://rmitlibrary.github.io/cdn/learninglab/illustration/uni-essentials.png" class="card-img-top" alt="...">
</figure>-->
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<p>The figure in this example has the class <code>float-right</code> applied. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien.</p>

<!-- CARD float right -->


<h3>Card example</h3>
<div class="card">
<figure>
  <img src="https://rmitlibrary.github.io/cdn/learninglab/illustration/uni-essentials.png" class="card-img-top" alt="...">
</figure>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<p>The following example uses four fictional sources to show how you might take notes and then synthesise the ideas in a piece of writing.</p>
<h3>Note-taking for synthesis</h3>
<p>Read each source and take notes on the main ideas in dot point format.</p>
<h3>Topic: English is the dominant world language</h3>

<div class="my-grid">
	<!-- START card -->
	<div class="card">
		<div class="card-body">
			<h3 class="card-title h4">Text 1 (Watson 2019)</h3>
			<ul>
				<li>international language for business</li>
				<li>used for international forums (e.g.&nbsp;UN)</li>
				<li>second language in many countries</li>
			</ul>
		</div>
	</div>
	<!-- END card -->
	<!-- START card -->
	<div class="card">
		<div class="card-body">
			<h3 class="card-title h4">Text 2 (Lui 2018)</h3>
			<ul>
				<li>used in worldwide technology</li>
				<li>computers key factor in spread of English</li>
				<li>internationalisation of education</li>
			</ul>
		</div>
	</div>
	<!-- END card -->
	<!-- START card -->
	<div class="card my-border">
		<div class="card-body">
			<h3 class="card-title h4">Text 3 (Hannan 2017)</h3>
			<ul>
				<li>small number of speakers worldwide</li>
				<li>importance of English linked to US power, i.e. 'Political'</li>
				<li>more people speak Chinese worldwide</li>
			</ul>
		</div>
	</div>
	<!-- END card -->
	<!-- START card -->
	<div class="card">
		<div class="card-body">
			<h3 class="card-title h4">Text 4 (Dowd 2019)</h3>
			<ul>
				<li>minority of speakers in world</li>
				<li>Chinese dominant especially in future</li>
				<li>English will decline in future</li>
			</ul>
		</div>
	</div>
	<!-- END card -->	
</div>