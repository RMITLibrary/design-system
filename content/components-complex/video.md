---
title: Video
name: Video
parent: "Complex Components"
---
<h1 class="margin-top-zero">Video</h1>
<p class="lead">Video is displayed via a responsive iFrame, a transcript of the video should be displayed via an accordion to assist visually impaired users. These examples show YouTube content, it should be possible to show content from other providers with some adjustments.
</p>
<h2>Landscape</h2>
<p>The default aspect ratio is 16:9, content in other ratios (4:3 for instance) will be pillarboxed. The iframe is sized so as to retain the aspect ratio while remaining responsive. A max-width value is set to <span class="nowrap"><strong>44rem</strong> (704px).</span></p>
<figure class="video">
    <div class="responsive-video"><iframe src="https://www.youtube.com/embed/U5LBp4E-zWU" frameborder="0" allowfullscreen=""></iframe></div>
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
<p>By doing this, your introduction should start broad and become more specific, focusing in on your essay topic. Basically, you’re letting the reader know what you’re going to discuss throughout the essay. Let’s have a look at this introduction as an example:</p>
<p>Self-confidence means possessing a positive, yet realistic, view of one’s self and abilities. Self-confident people have trust and faith in their abilities. Self-confidence can be affected by a variety of factors. This essay will argue that self-confidence develops through a complex interaction between a range of factors. The essay will firstly define self-confidence, and then analyse the interaction between various factors that affect the confidence of an individual. In particular, these are personality style, situational factors/life experiences self-efficacy and self-esteem.</p>
<p>Notice the structure: The topic and context at the start of the paragraph; the argument in the middle, and what will be covered in the essay at the end of the paragraph.</p>
<p>How do I write an essay body? An essay body is a series of paragraphs that support the main argument.</p>
<p>How do I write an essay conclusion? Your essay conclusion is written in the opposite way to the introduction: it starts narrow and becomes broad. Begin with the detail of the essay, and expand out to the bigger picture. Here’s an example of how to structure a conclusion:</p>
<p>Self-confidence is not ingrained within individuals and can be influenced by a variety of factors. The personality style of an individual can determine whether the individual is an introvert or an extrovert, which will affect self-confidence. Life experiences and situational factors have a large impact on the stability of personalities and confidence. Self-efficacy and self-esteem are major factors that can contribute to a lack of self-confidence. Self-confidence is essential for effective and positive engagement in all professional and personal activities.</p>
<p>For more information about essay writing, try the tutorials.</p>
<p>Thanks for watching.</p>
        </div>
      </div>
</div>
<!-- END accordion item -->
</figure>
<!-- END video -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure class=&quot;video-wrapper&quot;&gt;
	&lt;div class=&quot;responsive-video&quot;&gt;
		&lt;iframe src=&quot;https://www.youtube.com/embed/video-id&quot; frameborder=&quot;0&quot; 
		allowfullscreen=&quot;&quot;&gt;&lt;/iframe&gt;
	&lt;/div&gt;
	&lt;div class=&quot;accordion-item transcript&quot;&gt;
		&lt;!-- lots of additional accordion code goes here --&gt;	
	&lt;/div&gt;
&lt;/figure&gt;</code>
</pre></div>
<!-- Portrait -->
<a name="portrait"></a>
<h2>Portrait</h2>
<p>To change the aspect ratio to portrait, wrap the responsive-video div in a div with class <code>portrait-video</code>. This will display videos in a 9:16 aspect ratio. This responsive-video div has a width of <strong>80%</strong>, with the max width limited to <strong>25rem</strong> (400px). This ensures the whole video is visible along with browser chrome at smaller screen sizes.</p>
<figure class="video">
	<div class="portrait-video">
		    <div class="responsive-video"><iframe src="https://www.youtube.com/embed/RcRnspPP5PE" frameborder="0" allowfullscreen=""></iframe></div>
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
<p>By doing this, your introduction should start broad and become more specific, focusing in on your essay topic. Basically, you’re letting the reader know what you’re going to discuss throughout the essay. Let’s have a look at this introduction as an example:</p>
<p>Self-confidence means possessing a positive, yet realistic, view of one’s self and abilities. Self-confident people have trust and faith in their abilities. Self-confidence can be affected by a variety of factors. This essay will argue that self-confidence develops through a complex interaction between a range of factors. The essay will firstly define self-confidence, and then analyse the interaction between various factors that affect the confidence of an individual. In particular, these are personality style, situational factors/life experiences self-efficacy and self-esteem.</p>
<p>Notice the structure: The topic and context at the start of the paragraph; the argument in the middle, and what will be covered in the essay at the end of the paragraph.</p>
<p>How do I write an essay body? An essay body is a series of paragraphs that support the main argument.</p>
<p>How do I write an essay conclusion? Your essay conclusion is written in the opposite way to the introduction: it starts narrow and becomes broad. Begin with the detail of the essay, and expand out to the bigger picture. Here’s an example of how to structure a conclusion:</p>
<p>Self-confidence is not ingrained within individuals and can be influenced by a variety of factors. The personality style of an individual can determine whether the individual is an introvert or an extrovert, which will affect self-confidence. Life experiences and situational factors have a large impact on the stability of personalities and confidence. Self-efficacy and self-esteem are major factors that can contribute to a lack of self-confidence. Self-confidence is essential for effective and positive engagement in all professional and personal activities.</p>
<p>For more information about essay writing, try the tutorials.</p>
<p>Thanks for watching.</p>
        </div>
      </div>
</div>
<!-- END accordion item -->
</figure>
<!-- END video -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure class=&quot;video&quot;&gt;
	&lt;div class="portrait-video"&gt;
		&lt;div class=&quot;responsive-video&quot;&gt;
			&lt;iframe src=&quot;https://www.youtube.com/embed/video-id&quot; frameborder=&quot;0&quot; 
			allowfullscreen=&quot;&quot;&gt;&lt;/iframe&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class=&quot;accordion-item transcript&quot;&gt;
		&lt;!-- lots of additional accordion code goes here --&gt;	
	&lt;/div&gt;
&lt;/figure&gt;</code>
</pre></div>
<h2>Captions</h2>
<p>Though less likely than <a href="../images/">images</a> to require a caption, it is easy to display. Just add <code>figcaption</code> tag after the <code>responsive-video</code> tag.</p>
<figure class="video">
    <div class="responsive-video"><iframe src="https://www.youtube.com/embed/U5LBp4E-zWU" frameborder="0" allowfullscreen=""></iframe></div>
	<figcaption>An example caption for this image.</figcaption>
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
<p>By doing this, your introduction should start broad and become more specific, focusing in on your essay topic. Basically, you’re letting the reader know what you’re going to discuss throughout the essay. Let’s have a look at this introduction as an example:</p>
<p>Self-confidence means possessing a positive, yet realistic, view of one’s self and abilities. Self-confident people have trust and faith in their abilities. Self-confidence can be affected by a variety of factors. This essay will argue that self-confidence develops through a complex interaction between a range of factors. The essay will firstly define self-confidence, and then analyse the interaction between various factors that affect the confidence of an individual. In particular, these are personality style, situational factors/life experiences self-efficacy and self-esteem.</p>
<p>Notice the structure: The topic and context at the start of the paragraph; the argument in the middle, and what will be covered in the essay at the end of the paragraph.</p>
<p>How do I write an essay body? An essay body is a series of paragraphs that support the main argument.</p>
<p>How do I write an essay conclusion? Your essay conclusion is written in the opposite way to the introduction: it starts narrow and becomes broad. Begin with the detail of the essay, and expand out to the bigger picture. Here’s an example of how to structure a conclusion:</p>
<p>Self-confidence is not ingrained within individuals and can be influenced by a variety of factors. The personality style of an individual can determine whether the individual is an introvert or an extrovert, which will affect self-confidence. Life experiences and situational factors have a large impact on the stability of personalities and confidence. Self-efficacy and self-esteem are major factors that can contribute to a lack of self-confidence. Self-confidence is essential for effective and positive engagement in all professional and personal activities.</p>
<p>For more information about essay writing, try the tutorials.</p>
<p>Thanks for watching.</p>
        </div>
      </div>
</div>
<!-- END accordion item -->
</figure>
<!-- END video -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;figure class=&quot;video-wrapper&quot;&gt;
	&lt;div class=&quot;responsive-video&quot;&gt;
		&lt;iframe src=&quot;https://www.youtube.com/embed/video-id&quot; frameborder=&quot;0&quot; 
		allowfullscreen=&quot;&quot;&gt;&lt;/iframe&gt;
	&lt;/div&gt;
	&lt;figcaption&gt;An example caption for this image.&lt;/figcaption&gt;
	&lt;div class=&quot;accordion-item transcript&quot;&gt;
		&lt;!-- lots of additional accordion code goes here --&gt;	
	&lt;/div&gt;
&lt;/figure&gt;</code>
</pre></div>