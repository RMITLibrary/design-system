---
title: Buttons
name: Buttons
parent: "Simple components"
---
<h1 class="margin-top-zero">Buttons</h1>
<p class="lead">Two different varieties of button are available in the design system.</p>
<h2>Primary button</h2>
<ul>
    <li>Use sparingly, ideally only once per page.</li>
    <li>Ideal for important actions like form submission.</li>
    <li>For H5P content, all buttons use this style due to limitations.</li>
</ul>
<button class="btn btn-primary">Primary button</button>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;button class=&quot;btn btn-primary&quot; &gt;Primary button&lt;/button&gt;</code>
</pre></div>
<h2>Default state</h2>
<ul>
    <li>Follows Bootstrap's <code>btn-outline-secondary</code> style.</li>
    <li>Use for most buttons on a page.</li>
</ul>
<button class="btn btn-default">Default button</button>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;button class=&quot;btn btn-default&quot;&gt;Button label&lt;/button&gt;</code>
</pre></div>
<h2>Secondary Button</h2>
<ul>
    <li>Best for less prominent actions.</li>
    <li>Uses interface-grey for the border.</li>
    <li>Rollovers match the default state.</li>
    <li>Sized to match height of other buttons. Override height to create more compact buttons</li>
</ul>
<button class="btn btn-secondary">Secondary button</button> 
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;button class=&quot;btn btn-secondary&quot;&gt;Button label&lt;/button&gt;</code>
</pre></div>
<h2>Icon Button</h2>
<ul>
    <li>An extension of small button with an icon added.</li>
    <li>Currently, print and embed buttons are available in the system.</li>
    <li>Additional icons will be added as needed.</li>
</ul>
<div style="display: flex; gap: 1.5rem;">
<button class="btn btn-print">Print</button>
<button class="btn btn-embed">Embed</button>
<button class="btn btn-share">Share</button>
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;button class=&quot;btn btn-print&quot;&gt;Print&lt;/button&gt;
&lt;button class=&quot;btn btn-embed&quot;&gt;Embed&lt;/button&gt;
&lt;button class=&quot;btn btn-share&quot;&gt;Share&lt;/button&gt;</code>
</pre></div>
<h3>Creating a New Icon Button</h3>
<h4>Design Icons:</h4>
<ul>
    <li>Create in software like Adobe Illustrator.</li>
    <li>Use a 32x32 box, with content in a 20x20 area.</li>
</ul>
<h4>Export and Minify:</h4>
<ul>
    <li>Export the icon as SVG.</li>
    <li>Minify using a tool like svgminify.com.</li>
</ul>
<h4>Convert for CSS:</h4>
<ul>
    <li>Convert special characters: <code><</code>, <code>></code>, <code>#</code> to their ascii equivalents : <code>%3C</code>, <code>%3E</code> and <code>%23</code>.</li>
    <li>Replace any double quotes with single quotes</li>
    <li>Paste the SVG code into the CSS.</li>
    <li>Remember to provide a dark mode version of the code, converting any fills and strokes from <span style="font-weight: bold; color: #e61f2a">#e61f2a</span> to <span style="font-weight: bold; color: #E6636A">#E6636A</span></li>
    <li>Use the <a href="#svg-convert">convertor</a> below to generate the code</li>
</ul>
<div class="highlight">
<pre class="chroma">
<code class="language-html">.btn-embed::before {
    content: url("data:image/svg+xml, svg code here");
}
// Dark mode
@include color-mode(dark) {
    .btn-embed::before {
        content: url("data:image/svg+xml, svg code with fills and strokes replaced");
    }
}</code>
</pre></div>

<h2>Other</h2>
<p>The prev and next links at the bottom of the page need to be visually prominent. While they take some styling cues from buttons to achieve this, they are in fact links. Visit the <a href="../../visual/links/">links</a> page for more information.</p>
<style>
textarea {
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
}
#output {
    background-color: #f7f7f7;
    padding: 10px;
    border: 1px solid #ddd;
    overflow-x: auto;
}
</style>
<h2 id="svg-convert">SVG Code Converter</h2>
<p>Enter the short name for your button and paste your SVG code below:</p>
<input type="text" id="shortName" placeholder="Button short name" /><br /><br />  
<textarea id="svgInput" placeholder="Paste SVG code here"></textarea>
<button class="btn btn-default" onclick="convertSvg()">Convert</button>
<h3>Generated CSS:</h3>
<pre id="output"></pre>
 <script>
    function convertSvg() {
        // Get user input
        const shortName = document.getElementById('shortName').value.trim();
        let svg = document.getElementById('svgInput').value.trim();
        // Check if inputs are valid
        if (!shortName || !svg) {
            alert('Please enter both a short name and SVG code.');
            return;
        }
        // Encode SVG for use in a data URL
        svg = svg.replace(/[\r\n]+/g, ' '); // Remove newlines and replace with spaces
        svg = svg.replace(/"/g, "'"); // Convert double quotes to single quotes
        svg = svg.replace(/</g, '%3C').replace(/>/g, '%3E'); // Convert < and >
        svg = svg.replace(/#/g, '%23'); // Convert #
        // Generate CSS for normal and dark modes
        const css = `
.btn-${shortName}::before {
content: url("data:image/svg+xml,${svg}");
}
// Dark Mode
@include color-mode(dark) {
.btn-${shortName}::before {
    content: url("data:image/svg+xml,${svg.replace(/%23e61f2a/g, '%23E6636A')}");
}
}
        `;
        // Display the generated CSS
        document.getElementById('output').textContent = css;
    }
</script>