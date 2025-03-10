---
title: Anatomy of a page
name: Anatomy of a page
parent: "Introduction"
hide_buttons: true
---
<ul class="breadcrumbs">
	<li><a href="/design-system/" tabindex="-1">Home</a></li>
	<li><a href="/design-system/" tabindex="-1">Section</a></li>
	<li><a href="/design-system/" tabindex="-1">Subsection</a></li>
	<li><a href="/design-system/" tabindex="-1">Content page</a></li>
</ul>
<a id="main-content"></a>
<h1 class="margin-top-zero">Anatomy of a page</h1>
<p class="lead">Lead paragraph (p class=”lead”). This page aims to show the basic building blocks of a page build using the design system. While different layouts will vary from this formula, this structure should be used as a starting point and altered to suit a website’s specific purpose. </p>
<p>This example shows both page content here on the left and navigation on the right. Here the page content occupies 8 bootstrap columns, while the optional navigation takes up 4 columns. Extra margin is added on the left of the navigation as the default space between columns is visually a little tight.</p>
<p>Typically the <a href="../../components-complex/navigation#right-nav">right hand navigation</a> would drop below the previous and next buttons on screens smaller than 1200px (breakpoints X-Small, Small, Medium, Large).  If the right hand navigation omitted, it’s still recommended that text only occupy 8 columns at large breakpoints, to keep line length readable and easily scannable.</p>
<a href="../../visual/breakpoints/" class="link-large">Link large (links to breakpoints)</a>
<h2>Top navigation</h2>
<p>In addition to the RMIT logo, which is mandatory, the navigation offers the following options:</p>
<ul>
	<li>Site title (space permitting), links back to the site homepage</li>
	<li>Hamburger menu - provides flexible options for global navigation</li>
	<li>Search link -  could either link to a separate page or trigger an overlaid input box interface</li>
	<li>Library link - links to RMIT library homepage</li>
</ul>
<p>It’s recommended that this nav is fixed to the top of the page to provide easy access to navigation</p>
<h2>Breadcrumbs</h2>
<p>An optional element, depending on the amount of levels a site contains. Due to the proximity to the page title, by default there’s no need to include an inactive breadcrumb displaying the page title.</p>
<hr />
<h2>Page content</h2>
<p>This section shows examples of various components that make up page content. More information about each of the components is available  elsewhere in the site.</p>
<h3>Accordions</h3>
<p>Accordions can be a useful tool in dividing and segmenting information, if used judiciously.</p>
<!-- START Example -->
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Accordion Item 1
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
        Accordion Item 2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo">
      <div class="accordion-body">
        This is the second item's accordion body. Any HTML can go within the <code>.accordion-body</code>. Aliquam sapien nibh, pretium sollicitudin convallis vitae, egestas eget velit. Vivamus faucibus auctor ultricies. Sed sed magna ante. Quisque fringilla pharetra faucibus. Phasellus non vehicula orci. In quis porttitor metus. Maecenas et nulla augue.
      </div>
    </div>
  </div>
</div>
<!-- END Example -->
<h3>Blockquotes</h3>
<p>Blockquotes can be useful to highlight sections of text and can also function as a navigation device. Visually, they are obviously separate from the rest of the content and can provide prominent for the information contained within. An example of using blockquotes as navigation devices is shown at the <a href="#">bottom of the page</a>.</p>
<blockquote>
    <div class="content">
        <p>This tutorial covers four of the most important aspects in writing a literature review: criteria to use in choosing the best sources, how to structure your literature review, writing in an appropriate style, and maintaining a voice of authority.</p>
    </div>
</blockquote>
<p>Blockquotes can also feature an image. The image width is 12.25rem (196px). Portrait images are supported but are best used sparingly. At X-Small and Small breakpoints, the image is stacked on top of the text.</p>
<blockquote class="complex">
	<div class="columns">
    	<div class="img-wrap"><img src="../../images/img-example-graph.png" alt="An example image" /></div>
    	<div class="content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare consectetur tellus. Aenean non posuere tortor, pretium accumsan augue. </p></div>
	</div>
</blockquote>
<h3>Buttons</h3>
<p>The default variant hews closely to Bootstrap's <code>btn-outline-secondary</code> style. When multiple buttons are used on a page, almost all of them should in this style. The primary variant should be used sparingly, ideally only one occurrence on each page. It should action something important, like submitting a form.</p>
<button class="btn btn-outline-secondary">Default button</button><button class="btn btn-primary">Primary button</button>
<h3>Tables</h3>
<p>By default, tables feature a simple one pixel border. Each table is wrapped in a div, <code>responsive-table</code>, which allows for wide tables to horizontally scroll at smaller screen sizes.</p>
<div class="table-responsive">
<table>
	<tbody>
		<tr>
			<th>Evidence</th>
			<th>Problem</th>
			<th>Relevant theory</th>
			<th>Solution</th>
		</tr>
		<tr>
			<td>CEO
				<ul>
					<li>Office location on top floor</li>
					<li>'mythical figure'</li>
					<li>Focussed on results</li>
					<li>HealthCo is 'his baby'</li>
				</ul>
			</td>
			<td>CEO leadership style
				<ul>
					<li>'autocratic'</li>
				</ul>
			</td>
			<td>
				<ul>
					<li><em>Weber (Bureaucratic management)</em><br>
						(Houghton 2010)</li>
					<li><em>Taylor (Scientific theory of management)</em><br>
						(Van Vugt et al. 2004</li>
				</ul>
			</td>
			<td>
				<ul>
					<li><em>Mintzberg Management roles model </em>
						<ul>
							<li><em>interpersonal</em></li>
							<li><em>...</em></li>
							<li><em>...</em></li>
						</ul>
						<em>(Mintzberg 2004)</em></li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>
				<ul>
					<li>No respect for staff ('only a number)</li>
					<li>No rewards ... only punishment ('super snoops')</li>
					<li>No initiative allowed
						<ul>
							<li>staff leaving</li>
						</ul>
					</li>
				</ul>
			</td>
			<td>Management culture
				<ul>
					<li>'distrustful'</li>
					<li>controlling</li>
				</ul>
			</td>
			<td>
				<ul>
					<li><em>Mechanistic</em></li>
					<li><em>Autocratic leadership style</em><br>
						(Bass &amp; Bass 2008)</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Fayol's Principles (Administritive theory)
						<ul>
							<li>equity, ..., etc.</li>
						</ul>
						(Houghton 2010)</li>
					<li>Human Performance System
						<ul>
							<li>feedback</li>
							<li>...</li>
						</ul>
						(Baker 2010)</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>
				<ul>
					<li>Communication 'top down'</li>
				</ul>
			</td>
			<td>Communication
				<ul>
					<li>memos only</li>
				</ul>
			</td>
			<td>
				<ul>
					<li><em>Impersonal communication style</em><br>
						(De Hoog et al. 2015)</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>Good communication key to unified work environment.<br>
						(Kessler 2010)</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>
</div>
<p>Another option is a striped table, add the class <code>table-striped</code> to activate it. This form of table is useful when the amount of content in each cell is minimal and the comparison between data entries is important.</p>
<div class="table-responsive">
<table class="table-striped">
	<thead>
		<tr>
			<th width="30%">
				Most common form
			</th>
			<th>
				Other words in the family
			</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>analysis</td>
			<td>analyse, analysed, analyser, analysers, analyses, analysing, analyst, analysts, analytic, analytical, analytically</td>
		</tr>
		<tr>
			<td>approach</td>
			<td>approachable, approached, approaches, approaching, unapproachable</td>
		</tr>
		<tr>
			<td>area</td>
			<td>areas</td>
		</tr>
		<tr>
			<td>assessment</td>
			<td>assess, assessable, assessed, assesses, assessing, assessments, reassess, reassessed, reassessing, reassessment, unassessed</td>
		</tr>
		<tr>
			<td>assume</td>
			<td>assumed, assumes, assuming, assumption, assumptions</td>
		</tr>
		<tr>
			<td>authority</td>
			<td>authoritative, authorities</td>
		</tr>
		<tr>
			<td>available</td>
			<td>availability, unavailable</td>
		</tr>
	</tbody>
</table>
</div>
<h3>Images</h3>
<p>There are various options for displaying images including borders, alignment, sizing and adding captions and transcript accordions. The example below shows a border, caption and transcript along with default alignment and sizing. There is a lot more information of the <a href="../components-complex/images">images page</a>.</p>
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
<p>There is a slightly different layout for portrait images. There are no alignment options, but the same options for borders, captions, sizing and transcripts are available.</p>
<figure class="img-transcript caption-side">
	<div class="img-caption-wrap">
		<div class="portrait">
			<img src="../../images/img-example-portrait.png" alt="An example image" class="border" />
		</div>
		<figcaption>An example caption for this image. The layout with a transcript is slightly awkward.</figcaption>
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
<h2>Video</h2>
<p>Video is displayed via a responsive iFrame, a transcript of the video should be displayed via an accordion to assist visually impaired users. The default aspect ratio is 16:9, content in other ratios (4:3 for instance) will be pillarboxed. There are options for <a href="../../components-complex/video#portrait">portrait video</a> too. </p>
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
<h3>Navigation</h3>
<p>List links give an option to display a list of links while giving the list more prominence than a standard unordered list.</p>
<ul class="link-list">
    <li><a href="">Link 1</a></li>
    <li><a href="">Link 2</a></li>
    <li><a href="">Link 3</a></li>
    <li><a href="">Link 4</a></li>
    <li><a href="">Link 5</a></li>
</ul>
<h2>Bottom of the page</h2>
<p>In this page, we are displaying all possible options. It’s likely that in many contexts, only the footer itself would be displayed. For most pages, there won’t be any additional links. Keywords are only relevant for large sites that have a tagging system implemented.</p>
<h3>Previous and next buttons</h3>
<p>These are particularly useful for pages featuring lots of pages, they give the user an easy and logical way of progressing through the site. They are especially useful if the right hand navigation scrolls with content. </p>
<h3></h3>
<p>This optional section allows for linking to other pages or sites without breaking the flow of progressing through the site via the next button. The user should be aware of whether they are leaving the current site or not, either via text or an icon.</p>
<p>In addition to the blockquote design shown here, a simpler option, using <a href="../../visual/links#list-links">list links</a> would also be appropriate.</p>
<h3>Keywords</h3>
<p>These are particularly useful for pages featuring lots of pages, they give the user an easy and logical way of progressing through the site. They are especially useful if the right hand navigation scrolls with content. </p>
<h3>Footer</h3>
<p>In this example the footer has two sections, <!-- Ask the library,--> Acknowledgement of country and the RMIT footer itself. In certain contexts it may be appropriate to omit the Ask the library and the Acknowledgement of country sections. The RMIT footer may also contain links such as About or Contact us specific to the relevant in addition to the global Terms and Privacy links.</p>
<nav class="btn-nav-container" aria-label="Previous and next buttons">
    <h2 class="btn-nav-prev"><a href="" aria-label="Previous page">Previous page</a></h2>
    <h2 class="btn-nav-next"><a href="" aria-label="Next page">Next page</a></h2>
</nav>
<h2 class="h3 margin-top-xl">Additional links</h2>
<blockquote class="complex margin-top-xs">
	<a href="../../components-simple/blockquotes#nav">
        <div class="content">
            <p class="category">Category</p>
            <h3>Blockquote with link</h3>
            <p>Not all of these elements need to be displayed at once. View the page for more information.</p>
            <small>Extra information</small>
        </div>
        <div class="icon-wrap"><img src="../../images/icon-llcc-large.svg" alt="" /></div>
    </a>
</blockquote>
<div class="keywords">
	<h2 class="h5">Keywords</h2>
	<ul>
		<li><a href="">Keyword 1</a></li>
		<li><a href="">Keyword 2</a></li>
		<li><a href="">Keyword 3</a></li>
		<li><a href="">Keyword 4</a></li>
		<li><a href="">Keyword 5</a></li>
	</ul>
</div>