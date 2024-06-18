---
title: Accessibility
name: Accessibility
parent: "Introduction"
hide_footer: false
---
<h1 class="margin-top-zero">Accessibility</h1>
<p class="lead">The design system aims to comply with WCAG 2.0 AAA compliance, as set out in RMIT's digital accessibility framework.</p>
<h2>Semantics</h2>
<p>Headings should be deployed with a clear hierarchy. Try to avoid using a particular heading because the size looks visually appealing. Rather, take advantage of helper classes which can override the default heading style:</p>
<h2 class="h4">A smaller heading 2</h2>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;h2 class=&quot;h4&quot;&gt;A smaller heading 2&lt;/h2&gt;</code>
</pre></div>
<p>Look to use landmarks such as <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;footer&gt;</code> and <code>&lt;section&gt;</code>. Where multiple landmarks of the same type are used, label them using aria-label:</p>
<code>&lt;nav aria-label=&quot;&quot;&gt;&lt;/nav&gt;</code>
<h2>Colours</h2>
<p>As the site aims to meet a WCAG 2.0 Triple A standard, colour contrast is paramount. The system aims to have a contrast ratio of over 7, consult <a href="/design-system/visual/colour/#contrast-table">this table</a> for more information. This can limit options to provide contrast between colours, for example between text and links. Choices are made in typography to help mitigate these issues.</p>
<p><a href="/design-system/visual/colour/#contrast-table" class="link-large">More information on colours</a></p>
<h2>Typography</h2>
<p>All headings are set in Museo 700, RMIT Blue (#000054) as per brand guidelines. This thicker weight provides good contrast with body text, making the difference between headings and body content very clear.</p>
<p><a href="/design-system/visual/typography/" class="link-large">More information on typography</a></p>
<h2>Links</h2>
<p><a href="">Links</a> occurring within paragraph text are displayed in <strong class="colour-rmit-blue">RMIT Blue</strong> with an underline. The extra visibility the underline provides is important due the lack of contrast between <strong class="colour-rmit-blue">RMIT Blue</strong> and the main text colour, <strong class="colour-dark-grey">Dark Grey</strong>. On hover, the colour changes to <strong class="colour-blue-hover">Blue Hover</strong> and the underline is removed.
</p>
<p>Due to contrast ratio constraints, links should only be presented on white or Underlay Grey backgrounds.</p>
<p><a href="/design-system/visual/links/" class="link-large">More information on links</a></p>
<h2>Page structure</h2>
<p>While visually, navigation is often presented to the right of the content, Semantically, navigation is listed before content to clearly describe the hierarchy of the page to a blind user. As this user traverses through the pages of the site, this can get tedious. To mitigate this, a visually hidden skip to content link should be provided. Here is an example of how this might function:</p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;header&gt;
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;a href=&quot;#main-content&quot; 
	class=&quot;visually-hidden-focusable&quot;&gt;Skip to main content&lt;/a&gt;
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;...
&lt;/header&gt;
&lt;div id=&quot;page-content&quot;&gt;
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;main class=&quot;container&quot;&gt;
        &lt;div class=&quot;row&quot;&gt;
&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;!-- START right nav --&gt;
            &lt;div class=&quot;col-xl-4 order-last&quot;&gt;
                ...
            &lt;/div&gt;
            &lt;!-- END right nav --&gt;
            &lt;!-- START content --&gt;
            &lt;div class=&quot;col-xl-8 order-first&quot; id=&quot;main-content&quot;&gt;
                ...
            &lt;/div&gt;
            &lt;!-- END content --&gt;   
        &lt;/div&gt;
    &lt;/main&gt;
	&lt;!-- START footer --&gt;
	&lt;div class=&quot;footer-container&quot;&gt;
		...
	&lt;/div&gt;
	&lt;!-- END footer --&gt;
&lt;/div&gt;</code>
</pre></div>