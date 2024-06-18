---
title: Getting started
name: Getting started
parent: "Introduction"
---
<h1 class="margin-top-zero">Getting started</h1>
<p class="lead">This design system aims to provide a set of reuseable components for building products in the RMIT library digital ecosystem.</p>
<p class="lead">These components work together well and can be interchanged with a degree of modularity. The system provides a flexible and easy to use starting point to design and develop your product (additional features or adaptions specific to your project may be required).</p>
<p>The system has been designed and developed rapidly and is by no means comprehensive. The intention is to iterate and extend the system's capabilities over time, when and where design and development resources become available.
</p>
<h2>Benefits</h2>
<ul>
	<li>Consistency across different products, creating a sense of familiarity for our users (both students and educators)</li>
	<li>Rapid prototyping at increased fidelity</li>
	<li>Quicker progression from design to development</li>
	<li>Easier to make changes across a number of products at once</li>
</ul>
<h2>Design</h2>
<p><a href="https://www.figma.com/design/Yz0Lo4VBsmpcXAujA3HmFV/Library-design-system?node-id=1239-2">An extensive figma file is available.</a> This file contains both design specific documentation and components that can be laid out and altered to produce high fidelity prototypes. Figma makes it easy for these prototypes to be shared and for people to comment and collaborate on designs. It also features a  development mode which allows front-end developers to get stylesheet and markup information.</p>
<!--<a href="https://rmitlibrary.github.io/design-system/sass/main.min.css" class="link-large">Compiled css</a>-->
<h2>Development</h2>
<p>The design system extends the <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">bootstrap framework </a>. There are two approaches to extending bootstrap. The simplest method is to first include the <a href="https://rmitlibrary.github.io/design-system/sass/main.min.css">compiled css</a> in the <code>&lt;head&gt;</code> section of your page. Then, add your own custom css directly after and overwrite and extend the styles required.</p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;head&gt;
	&lt;!-- link to design system css --&gt;
	&lt;link href=&quot;https://rmitlibrary.github.io/design-system/sass/main.min.css&quot; rel=&quot;stylesheet&quot;&gt;
	&lt;!-- link to your own custom styles --&gt;
	&lt;link href=&quot;path.to/custom-styles.css&quot; rel=&quot;stylesheet&quot;&gt;
&lt;/head&gt;</code>
</pre></div>
<p>An alternative, which provides more flexibility, is to copy and compile the design system's scss files, resulting in a single css file. You'll need a <strong>sass compiler</strong> to carry out this method.  This allows your styles to access mixins and variables from both the design system and bootstrap itself. The core scss file is structured as follows:</p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">Import bootstrap functions
---
Declare colour variables
Declare other variables
Declare typography variables
---
Import bootstrap styles
---
Import design system styles
---
Import app specific styles</code>
</pre></div>
<p>In terms of a file structure, try using this:</p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">your-project/
└── sass/
    └── main.scss
    └── app-specific/
    └── bootstrap/
    └── design-system/</code>
</pre></div>
<div class="margin-top-xl">
	<h3>Visual language</h3>
	<ul class="link-list">
		<li><a href="/design-system/visual/breakpoints/">Breakpoints and columns</a></li>
        <li><a href="/design-system/visual/colour/">Colour</a></li>
        <li><a href="/design-system/visual/icons/">Icons</a></li>
		<li><a href="/design-system/visual/links/">Links</a></li>
		<li><a href="/design-system/visual/spacing/">Spacing</a></li>
		<li><a href="/design-system/visual/typography/">Typography</a></li>
	</ul>
</div>
<div>
	<h3>Simple components</h3>
	<ul class="link-list">
		<li><a href="/design-system/components-simple/accordions/">Accordions</a></li>
        <li><a href="/design-system/components-simple/blockquotes/">Blockquotes</a></li>
        <li><a href="/design-system/components-simple/buttons/">Buttons</a></li>
        <li><a href="/design-system/components-simple/tables/">Tables</a></li>
	</ul>
</div>
<div>
	<h3>Complex components</h3>
	<ul class="link-list">
		<li><a href="/design-system/components-complex/footer/">Footer</a></li>
        <li><a href="/design-system/components-complex/images/">Images</a></li>
        <li><a href="/design-system/components-complex/navigation/">Navigation</a></li>
		<li><a href="/design-system/components-complex/navigation/">Video</a></li>
	</ul>
</div>