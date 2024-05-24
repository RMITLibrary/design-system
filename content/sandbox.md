<form onsubmit="event.preventDefault();">
				<h2 class="visually-hidden">Enter the attribution details</h2>
				<div class="my-two-columns">
					<div class="my-column">
						<!-- START title -->
						<fieldset>
							<legend class="visually-hidden">Enter the title and its url</legend>
							<label for="title" class="h3 margin-top-zero">Title</label>
							<div class="input-group margin-bot-md">
								<input type="text" name="title" id="title" class="form-control">
								<button id="title-help-button" class="btn btn-help" type="button" data-bs-toggle="collapse" data-bs-target="#title-help" aria-expanded="false" aria-controls="title-help"><span class="visually-hidden">Help</span>
                                <svg><use xlink:href="#help-icon" /></svg>
                                </button>
								<div id="title-help" class="collapse">
									<p class="small">List the title of the work you’re adopting. If you can’t locate the title please enter a more general term, such as “this work”, “this image”, etc.</p>
									<p class="small margin-bot-zero">Enter a URL to the original sources. If it's not available, include where you got the work. For example, in the title you might enter, “Blue Star painting from Reddit paintings”.</p>
								</div>
							</div>
							<div class="input-group">
								<label for="title-url" class="form-label">URL</label>
								<input type="text" name="title-url" id="title-url" class="form-control">
							</div>
						</fieldset>
						<!-- END title -->
						<!-- START author -->
						<fieldset>
							<legend class="visually-hidden">Enter the author and their url</legend>
							<label for="author" class="h3">Author</label>
							<div class="input-group margin-bot-md">
								<input type="text" name="author" id="author" class="form-control">
								<button id="author-help-button" class="btn btn-help" type="button" data-bs-toggle="collapse" data-bs-target="#author-help" aria-expanded="false" aria-controls="author-help"><span class="visually-hidden">Help</span>
                                <svg><use xlink:href="#help-icon" /></svg>
                                </button>
								<div id="author-help" class="collapse">
									<p class="small">Name the author(s) of the material you are adopting. If you can’t locate the name, you can list the author’s screen or username.</p>
									<p class="small">Sometimes an organization is the copyright holder and does not provide any author information. In such cases, use the organization name as the author. Alternately, you can leave the author field empty and fill in the organization field.</p>
									<p class="small margin-bot-zero">If the author notes another person or entity they’d like to give credit, please do so. Also, if available, enter the URL to the author’s webpage or user account page.</p>
								</div>
							</div>
							<div class="input-group">
								<label for="author-url" class="form-label">URL</label>
								<input type="text" name="author-url" id="author-url" class="form-control">
							</div>
						</fieldset>
						<!-- END author -->
					</div>
					<div class="license-container my-column">
						<!-- START license -->
						<fieldset>
						<legend class="visually-hidden">Choose a license and version</legend>
                        <label for="license-select" class="h3">License</label>
                        <button class="btn-help-license" type="button" data-bs-toggle="collapse" data-bs-target="#license-help" aria-expanded="false" aria-controls="license-help">
                            <span class="visually-hidden">Help</span>
                            <svg><use xlink:href="#help-icon" /></svg>
                        </button>
						<div id="license-help" class="collapse">
                            <p class="small margin-top-zero">Choose the exact Creative Commons license given to the work you’re adopting.</p>
                            <p class="small">If the work is in the public domain, you have the option of noting whether it’s in the general public domain (general) or if it’s officially released under the Creative Commons public domain (CC0).</p>
                        </div>
                        <div>
							<select name="license-select" id="license-select" class="form-select" size="9">
								<option selected="">Choose a license...</option>
								<!-- other options generated via javaScript -->
							</select>
						</div>
						<div class="version-drop">
							<label for="version">Version</label>
							<select name="version" id="version" class="form-select-sm">
								<option selected="">4.0</option>
								<option>3.0</option>
								<option>2.5</option>
								<option>2.0</option>
								<option>1.0</option>
							</select>
						</div>
					</fieldset>   
						<!-- END license -->
					</div>
				</div>
				<div class="my-two-columns">
					<div class="my-column">
						<fieldset>
							<!--<legend>Derivative option</legend>-->
                            <input type="checkbox" id="derivative-check" name="derivative-check" class="form-check-input"  data-bs-toggle="collapse" data-bs-target="#derivative-url-container" aria-expanded="false" aria-controls="derivative-url-container">
                            <label for="derivative-check">This work is a derivative</label>
                            <button class="btn-help-deriv" type="button" data-bs-toggle="collapse" data-bs-target="#derivative-help" aria-expanded="false" aria-controls="derivative-help">
                                <svg><use xlink:href="#help-icon" /></svg>
                            </button> 
							<div id="derivative-help" class="collapse">
								<p class="small">If you are attributing a work based on or derived from existing works, please add a link to the original.</p>
							</div>
							<div id="derivative-url-container" class="collapse">
								<div class="input-group margin-top-sm">
									<label for="derivative-url" class="form-label">URL</label>
									<input type="text" name="derivative-url" id="derivative-url" class="form-control">
								</div>   
							</div>
						</fieldset>
					</div>
					<div class="my-column"><!-- Blank div to preserve alignment with two columns above --></div>
				</div> 
				<div class="btn-container">
					<div>
						<button id="copy-attribution" class="btn btn-primary">Copy attribution</button>
						<button id="copy-html" class="btn btn-default">Copy html</button>
					</div>
					<hr />
					<button id="reset" class="btn btn-default">Reset</button>
				</div>
			</form>
			<!-- END form -->
<p>grdgrdt dg drg drgdr</p>
<div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Accordion Item #1
        </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne">
        <div class="accordion-body">
        First item content goes here
        </div>
    </div>
</div>

<div class="responsive-video"><iframe src="https://www.youtube.com/embed/lfrREC5Y6h8" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
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

<blockquote>
        <p>#1 This tutorial covers four of the most important aspects in writing a literature review: criteria to use in choosing the best sources, how to structure your literature review, writing in an appropriate style, and maintaining a voice of authority.</p>
		<p>This tutorial covers four of the most important aspects in writing a literature review: criteria to use in choosing the best sources, how to structure your literature review, writing in an appropriate style, and maintaining a voice of authority.</p>
</blockquote>
<blockquote>
    <div class="content">
        <p>#2 This tutorial covers four of the most important aspects in writing a literature review: criteria to use in choosing the best sources, how to structure your literature review, writing in an appropriate style, and maintaining a voice of authority.</p>
    </div>
</blockquote>
<blockquote class="complex">
	<div class="columns">
		<div class="img-wrap"><img src="../images/img-example-graph.png" alt="An example image" /></div>
		<div class="content"><p>#3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare consectetur tellus. Aenean non posuere tortor, pretium accumsan augue. </p></div>
	</div>
</blockquote>
<blockquote class="complex">
	<a href="../../visual/links">
        <div class="content">
            <p class="category">#4 Tool</p>
            <h3>Assignment planner</h3>
            <p>The library has a great assignment planning tool that is easy to use and provides you with <span class="nowrap">step-by-step</span> plan, withs links to lots of resources to help you stay on task.</p>
        </div>
    </a>
</blockquote>
<blockquote class="complex">
	<a href="mylink">
		<div class="content">
			<p class="category">#5 Category</p>
			<h3>This is a title </h3>
			<p>This is the blockquote content.</p>
			<small>Extra information</small>
		</div>
		<div class="icon-wrap">
			<img src="http://localhost:1313/dewey-design/images/icon-llcc-large.svg" alt="" />
		</div>
	</a>
</blockquote>
<blockquote>
	<div class="content">
		<p class="category">#6 Tool</p>
		<h3>Assignment planner</h3>
		<p>The library has a great assignment planning tool that is easy to use and provides you with <span class="nowrap">step-by-step</span> plan, withs links to lots of resources to help you stay on task.</p>
	</div>
</blockquote>
<div class="two-col">
    <figure>
       <img src="../images/img-example-graph.png" alt="An example image" class="border" />
    </figure>
    <div class="content">
        <figcaption>An example caption for this image.</figcaption>
        <h2>This is a title</h2>
        <p>How do I write an essay introduction? Writing an essay introduction can sometimes be quite challenging. It helps to break down your introduction into three important parts: First, start by introducing your topic. Then, state your argument. And finally, outline your main points.</p>
    </div>
</div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>
<div class="two-col align-top img-lef img-xs">
    <figure>
       <img src="../images/img-example-graph.png" alt="An example image" class="border" />
    </figure>
    <div class="content">
        <figcaption>An example caption for this image.</figcaption>
        <h2>This is a title</h2>
        <p>How do I write an essay introduction? Writing an essay introduction can sometimes be quite challenging. It helps to break down your introduction into three important parts.</p>
        <p>How do I write an essay introduction? Writing an essay introduction can sometimes be quite challenging. It helps to break down your introduction into three important parts: First, start by introducing your topic. Then, state your argument. And finally, outline your main points.</p>
    </div>
</div>
<figure class="float-right">
    <img src="https://learninglab.rmit.edu.au/sites/default/files/quoting-blockquote.png" class="borde" alt="An example image" />
    <figcaption>An example caption for this image.</figcaption>
</figure>
<h2>This is an issue</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>
<figure class="float-left">
    <img src="../images/img-example-graph.png" class="border" alt="An example image" />
    <figcaption>An example caption for this image.</figcaption>
</figure>
<h2 class="margin-top-zero">He never does</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum semper elit, non dignissim dolor iaculis sed. Fusce gravida, turpis at pulvinar feugiat, elit tortor convallis urna, sit amet sollicitudin augue ex a velit. Curabitur varius sapien ligula, sit amet porta sapien cursus ac.</p>