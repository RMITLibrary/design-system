---
title: Images
name: Images
parent: "Complex Components"
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
<code class="language-html">&lt;figure class=&rdquo;img-left&rdquo;&gt;
   &lt;img src=&rdquo;my-image.jpg&rdquo; alt=&rdquo;An example image&rdquo;  class=&rdquo;border&rdquo; / &gt;
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
<figure class="img-width-md">
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
<h3>Sizing - portrait images</h3>
<p>To prevent portrait images from being too tall, wrap the img in a div with class <code>portrait</code>. This replicates the functionality of img-width-md For 9:16 images, this would give a height of 711px. Another class, <code>portrait-sm</code> is available which replicates img-width-sm. Use this for really tall portrait images.</p>
<figure>
	<div class="portrait">
    	<img src="../../images/img-example-portrait.png" alt="An example image" class="border" />
	</div>
</figure>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure&gt;
	&lt;div class=&quot;portrait&quot;&gt;
    		&lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; class=&quot;border&quot; /&gt;
	&lt;/div&gt;
&lt;/figure&gt;</code>
</pre></div>
<hr class="xl" />
<h2>Captions and transcripts</h2>
<p>Adding image captions and transcripts add some complexity to the markup required. The extra divs allow flexibility in layout and options regarding the width of captions and transcripts.</p>
<p>Captions can provide context for the use of an image and provide a place to attribute and credit the source of an image. Captions have a default width of <strong>44rem</strong> and add a border to the bottom of the image:</p>
<p>The base figure mark-up to add a caption is as follows:</p>
<figure>
	<div>
		<div>
    			 <img src="../../images/img-example-graph.png" alt="An example image" class="border" />
		</div>
		<figcaption>An example caption for this image.</figcaption>
	</div>
</figure>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure&gt;
	&lt;div&gt;
		&lt;div&gt;
    			&lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
		&lt;/div&gt;
		&lt;figcaption&gt;An example caption for this image.&lt;/figcaption&gt;
	&lt;/div&gt;
&lt;/figure&gt;</code>
</pre></div>
<p>To maximise the available screen width for portrait images, the caption is displayed next to the image. On smaller screens, the image and captions are stacked. The class <code></code>caption-side is added to <code>figure</code> and <span class="nowrap"><code>img-caption-wrap</code></span> and <code>portrait</code> are added to the nested divs.</p>
<figure class="caption-side">
	<div class="img-caption-wrap">
		<div class="portrait">
			<img src="https://learninglab.rmit.edu.au/sites/default/files/maths-a11-01.jpg" alt="An example image" class="border" />
		</div>
		<figcaption>An example caption for this image.</figcaption>
	</div>
</figure>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure class=&quot;caption-side&quot;&gt;
	&lt;div class=&quot;img-caption-wrap&quot;&gt;
		&lt;div class=&quot;portrait&quot;&gt;
    			&lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
		&lt;/div&gt;
		&lt;figcaption&gt;An example caption for this image.&lt;/figcaption&gt;
	&lt;/div&gt;
&lt;/figure&gt;</code>
</pre></div>
<h3>Transcripts</h3>
<p>When images contain text, it is necessary to provide an accessible alternative. While providing an alt tag is important, they are meant to be succinct (no more than 120 characters). When a longer description is required, providing this using an accordion can be a good option.</p>
<p>To show a transcript with the image, add the class <code>img-transcript</code> to the figure tag and add the required transcript accordion code below the figcaption tag. More detail about the transcript accordion code is available on the <a href="../accordions">accordions</a> page.</p>
<figure class="img-transcript">
	<div>
		<div>
			<img src="../../images/img-example-graph.png" alt="An example image" class="border" />
		</div>
		<figcaption>An example caption for this image.</figcaption>
		<!-- START accordion item -->
		<div class="accordion-item transcript">
			<p class="accordion-header" id="Transcript-headingOne">
			  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Transcript-collapseOne" aria-expanded="false" aria-controls="Transcript-collapseOne">
				Transcript
			  </button>
			</p>
			<div id="Transcript-collapseOne" class="accordion-collapse collapse" aria-labelledby="Transcript-headingOne">
			  <div class="accordion-body">
		<p>How do I structure an essay? Essays have three parts: A beginning... A middle... and an end. That is, the introduction, body, and conclusion. It’s important to have structure in your essay, or you will lose the flow of your argument.</p>
		<p>How do I write an essay introduction? Writing an essay introduction can sometimes be quite challenging. It helps to break down your introduction into three important parts: First, start by introducing your topic. Then, state your argument. And finally, outline your main points.</p>
				</div>
			  </div>
		</div>
		<!-- END accordion item -->
	</div>
</figure>

<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure class=&quot;img-transcript&quot;&gt;
	&lt;div&gt;
		&lt;div&gt;
			&lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
		&lt;/div&gt;
		&lt;figcaption&gt;An example caption for this image.&lt;/figcaption&gt;
		&lt;div class=&quot;accordion-item transcript&quot;&gt; 
			&lt;!-- lots of additional accordion code goes here --&gt;	
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/figure&gt;</code>
</pre></div>
<p>For portrait images, the class <code>caption-side</code> is added to figure and <code>img-caption-wrap</code> and <code>portrait</code> are added to the nested divs. The required transcript accordion code must also be added below the figcaption tag.</p>
<figure class="img-transcript caption-side">
	<div class="img-caption-wrap">
		<div class="portrait">
			<img src="../../images/img-example-portrait.png" alt="An example image" class="border" />
		</div>
		<figcaption>An example caption for this image.</figcaption>
	</div>
	<!-- START accordion item -->
	<div class="accordion-item transcript">
		<p class="accordion-header" id="Transcript-headingTwo">
		  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Transcript-collapseTwo" aria-expanded="false" aria-controls="Transcript-collapseTwo">
			Transcript
		  </button>
		</p>
		<div id="Transcript-collapseTwo" class="accordion-collapse collapse" aria-labelledby="Transcript-headingTwo">
			<div class="accordion-body">
				<p>How do I structure an essay? Essays have three parts: A beginning... A middle... and an end. That is, the introduction, body, and conclusion. It’s important to have structure in your essay, or you will lose the flow of your argument.</p>
				<p>How do I write an essay introduction? Writing an essay introduction can sometimes be quite challenging. It helps to break down your introduction into three important parts: First, start by introducing your topic. Then, state your argument. And finally, outline your main points.</p>
			</div>
		</div>
	</div>
	<!-- END accordion item -->
</figure>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure class=&quot;img-transcript caption-side&quot;&gt;
	&lt;div class=&quot;img-caption-wrap&quot;&gt;
		&lt;div class=&quot;portrait&quot;&gt;
			&lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
		&lt;/div&gt;
		&lt;figcaption&gt;An example caption for this image.&lt;/figcaption&gt;
		&lt;div class=&quot;accordion-item transcript&quot;&gt; 
			&lt;!-- lots of additional accordion code goes here --&gt;	
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/figure&gt;</code>
</pre></div>
<p>It’s possible to display transcripts on images without a caption being present:</p>
<figure class="img-transcript">
	<div>
		<div>
			<img src="../../images/img-example-graph.png" alt="An example image" class="border" />
		</div>
		<!-- START accordion item -->
<div class="accordion-item transcript">
    <p class="accordion-header" id="Transcript-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Transcript-collapseThree" aria-expanded="false" aria-controls="Transcript-collapseThree">
        Transcript
      </button>
    </p>
    <div id="Transcript-collapseThree" class="accordion-collapse collapse" aria-labelledby="Transcript-headingThree">
      <div class="accordion-body">
<p>How do I structure an essay? Essays have three parts: A beginning... A middle... and an end. That is, the introduction, body, and conclusion. It’s important to have structure in your essay, or you will lose the flow of your argument.</p>
<p>How do I write an essay introduction? Writing an essay introduction can sometimes be quite challenging. It helps to break down your introduction into three important parts: First, start by introducing your topic. Then, state your argument. And finally, outline your main points.</p>
        </div>
      </div>
</div>
<!-- END accordion item -->
	</div>
</figure>

<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure class=&quot;img-transcript&quot;&gt;
	&lt;div&gt;
		&lt;div&gt;
			&lt;img src=&quot;my-image.jpg&quot; alt=&quot;An example image&quot; /&gt;
		&lt;/div&gt;
		&lt;div class=&quot;accordion-item transcript&quot;&gt; 
			&lt;!-- lots of additional accordion code goes here --&gt;	
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/figure&gt;</code>
</pre></div>
<!--
<figure>
	<div>
		<div class="landcape">
    		<img src="../../images/img-example-graph.png" alt="An example image" class="border" />
		</div>
		<figcaption>An example caption for this image.</figcaption>
	</div>
</figure>-->
