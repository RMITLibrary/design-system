---
title: Accordions
name: Accordions
parent: "Simple Components"
---
<h1 class="margin-top-zero">Accordions</h1>
<p class="lead">Accordions can be a useful tool in dividing and segmenting information, if used judiciously. The design system features three variants, the transcript variant is used to provide accessible content for videos and images, the navigation option (featured on the right) allows for collapsible navigation.</p>
<h2>Default</h2>
<ul>
<li>Each accordion item is controlled by the user, they decide when each item opens and closes.</li>
<li>While there is facility to have an accordion item open by default (see <a href="https://getbootstrap.com/docs/5.0/components/accordion/">bootstrap docs</a>), this begs the question, "why have the content in the accordion item in the first place?".</li>
<li>Consider the length of content within the accordion. If it is relatively short, think about not using an accordion, it is really long, perhaps a separate page is more appropriate.</li>
</ul>
<!-- START Example -->
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
      <div class="accordion-body">
        This is the first item's accordion body. Any HTML can go within the <code>.accordion-body</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus ipsum, semper sit amet sollicitudin sit amet, interdum et nisi. Morbi in ullamcorper nisi. Fusce eget magna vitae lacus eleifend malesuada vel eu metus. Integer eget pellentesque magna, sit amet dignissim leo. Suspendisse potenti. Cras nec eros convallis, pretium ipsum eu, luctus magna.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
      <div class="accordion-body">
        This is the second item's accordion body. Any HTML can go within the <code>.accordion-body</code>. Aliquam sapien nibh, pretium sollicitudin convallis vitae, egestas eget velit. Vivamus faucibus auctor ultricies. Sed sed magna ante. Quisque fringilla pharetra faucibus. Phasellus non vehicula orci. In quis porttitor metus. Maecenas et nulla augue.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree">
      <div class="accordion-body">
        This is the third item's accordion body. Any HTML can go within the <code>.accordion-body</code>. Nulla lacinia, lacus egestas egestas varius, eros tortor varius sem, sit amet blandit nunc enim ut nisi. Praesent non nulla neque. Vivamus non erat mattis turpis ultricies efficitur.
      </div>
    </div>
  </div>
</div>
<!-- END Example -->

<!-- START Code -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;accordion&quot; id=&quot;accordionExample&quot;&gt;
  &lt;div class=&quot;accordion-item&quot;&gt;
    &lt;h2 class=&quot;accordion-header&quot; id=&quot;headingOne&quot;&gt;
      &lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#collapseOne&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;collapseOne&quot;&gt;
        Accordion Item #1
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id=&quot;collapseOne&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;headingOne&quot;&gt;
      &lt;div class=&quot;accordion-body&quot;&gt;
        First item content goes here
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;accordion-item&quot;&gt;
    &lt;h2 class=&quot;accordion-header&quot; id=&quot;headingTwo&quot;&gt;
      &lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#collapseTwo&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;collapseTwo&quot;&gt;
        Accordion Item #2
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id=&quot;collapseTwo&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;headingTwo&quot;&gt;
      &lt;div class=&quot;accordion-body&quot;&gt;
        Second item content goes here.
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class=&quot;accordion-item&quot;&gt;
    &lt;h2 class=&quot;accordion-header&quot; id=&quot;headingThree&quot;&gt;
      &lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#collapseThree&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;collapseThree&quot;&gt;
        Accordion Item #3
      &lt;/button&gt;
    &lt;/h2&gt;
    &lt;div id=&quot;collapseThree&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;headingThree&quot;&gt;
      &lt;div class=&quot;accordion-body&quot;&gt;
        Third item content goes here
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code>
</pre></div>
<!-- END Code -->
<h2>Transcript</h2>
<p>The transcript variant is only ever used as one item in isolation, supporting either a piece of video or image content. Currently, the transcript width maches the video or image width. Text within the transcript accordion is presented in font size small.</p>
<p>More information is available both on the <a href="../../components-complex/images">Images</a> and <a href="../../components-complex/video">Video</a> pages. An example of the transcript accordion and the code is presented below. Note that the bottom border is provided by the wrapper classes rather than the transcript itself.</p>
<!-- START video -->
<figure class="video">
    <div class="responsive-video"><iframe src="https://www.youtube.com/embed/U5LBp4E-zWU" frameborder="0" allowfullscreen=""></iframe></div>
	<!-- RcRnspPP5PE -->
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
<code class="language-html">&lt;!-- START video --&gt;
&lt;div class=&quot;video-wrapper&quot;&gt;
    &lt;div class=&quot;responsive-video&quot;&gt;
		&lt;iframe src=&quot;https://www.youtube.com/embed/video-id&quot; frameborder=&quot;0&quot; 
		allowfullscreen=&quot;&quot;&gt;&lt;/iframe&gt;
	&lt;/div&gt;
	&lt;!-- START accordion item --&gt;
	&lt;div class=&quot;accordion-item transcript&quot;&gt;
		&lt;p class=&quot;accordion-header&quot; id=&quot;Transcript-head&quot;&gt;
		  &lt;button class=&quot;accordion-button collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#Transcript-body&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;Transcript-body&quot;&gt;
			Transcript
		  &lt;/button&gt;
		&lt;/p&gt;
		&lt;div id=&quot;Transcript-body&quot; class=&quot;accordion-collapse collapse&quot; aria-labelledby=&quot;Transcript-head&quot;&gt;
		  &lt;div class=&quot;accordion-body&quot;&gt;
			 &lt;!-- content goes here --&gt;
		  &lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;!-- END accordion item --&gt;
&lt;/div&gt;
&lt;!-- END video --&gt;</code>
</pre></div>