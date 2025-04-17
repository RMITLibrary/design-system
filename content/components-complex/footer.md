---
title: Footer
name: Footer
parent: "Complex components"
---
<h1 class="margin-top-zero">Footer</h1>
<p>Typically, the footer consists of three basic parts, ask the library, acknowledgment of country and the general RMIT footer. The basic structure is as follows:
</p>

<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;footer-container&quot; id=&quot;footer&quot;&gt;
	&lt;div class=&quot;container&quot;&gt;
		&lt;div class=&quot;row&quot;&gt;
			&lt;div class=&quot;col&quot;&gt;
				&lt;!-- START ask the library --&gt;
				... 
				&lt;!-- END ask the library --&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;div class=&quot;acknowledgement&quot;&gt;
		&lt;div class=&quot;container&quot;&gt;
			&lt;div class=&quot;row&quot;&gt;
				&lt;div class=&quot;col&quot;&gt;
					&lt;!-- START acknowledgement --&gt;
					...
					&lt;!-- END acknowledgement --&gt;
				&lt;/div&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;    
	&lt;footer&gt;
	&lt;div class=&quot;container&quot;&gt;
		&lt;div class=&quot;row&quot;&gt;
			&lt;div class=&quot;col&quot;&gt;
				&lt;!-- START footer --&gt;
				...
				&lt;!-- END footer --&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
	&lt;/footer&gt;
&lt;/div&gt;</code>
</pre></div>
<h2>Ask the library</h2>
<p>For Ask the library, the following markup should be placed within the <code>&lt;!-- ask the library --&gt;</code> comment tags above:
</p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;!-- START ask the library --&gt;
&lt;div class=&quot;ask-container&quot;&gt;	
	&lt;section class=&quot;ask-the-library&quot;&gt;
		&lt;a href=&quot;https://www.rmit.edu.au/library/about-and-contacts/ask-the-library&quot;&gt;
			&lt;img src=&quot;https://rmitlibrary.github.io/cdn/footer/ask-library-icon-round.svg&quot; class=&quot;ask-logo&quot; alt=&quot;&quot; /&gt;
			&lt;div class=&quot;ask-text&quot;&gt;
				&lt;h2 class=&quot;h3 margin-top-zero&quot;&gt;Ask the library&lt;/h2&gt;
				&lt;p&gt;Get help with finding information, referencing, and using the Library.&lt;/p&gt;
			&lt;/div&gt;
		&lt;/a&gt;
	&lt;/section&gt;
&lt;/div&gt;
&lt;!-- END ask the library --&gt;</code>
</pre></div>
<h2>Acknowledgement of country</h2>
<p>For the acknowledgement of country, the following markup should be placed within the <code class="nowrap">&lt;!-- acknowledgement --&gt;</code> comment tags above:</p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;!-- START acknowledgement --&gt;
&lt;div class=&quot;acknowledgement&quot;&gt;
	&lt;div class=&quot;container&quot;&gt;
		&lt;div class=&quot;row&quot;&gt;
			&lt;div class=&quot;col&quot;&gt;
				&lt;section class=&quot;acknowledgement-container&quot;&gt;
					&lt;div class=&quot;content&quot;&gt;
						&lt;img alt=&quot;aboriginal flag&quot; src=&quot;https://www.rmit.edu.au/content/dam/rmit/au/en/news/homepage/flag-red.png&quot; /&gt;
						&lt;img alt=&quot;torres strait flag&quot; src=&quot;https://www.rmit.edu.au/content/dam/rmit/au/en/news/homepage/flag-green.png&quot;&gt;    
						&lt;h2 class=&quot;h4 margin-top-zero&quot;&gt;Acknowledgement of Country&lt;/h2&gt;
						&lt;p&gt;RMIT University acknowledges the people of the Woi wurrung and Boon wurrung language groups of the eastern Kulin Nation on whose unceded lands we conduct the business of the University. RMIT University respectfully acknowledges their Ancestors and Elders, past and present. RMIT also acknowledges the Traditional Custodians and their Ancestors of the lands and waters across Australia where we conduct our business&lt;span class=&quot;img-credit&quot;&gt; - Artwork 'Sentient' by Hollie Johnson, Gunaikurnai and Monero Ngarigo&lt;/span&gt;.&lt;/p&gt;
						&lt;a href=&quot;https://www.rmit.edu.au/about/our-values/respect-for-australian-indigenous-cultures&quot; class=&quot;link-large&quot;&gt;More information&lt;/a&gt;
					&lt;/div&gt;
					&lt;div class=&quot;acknowledgement-image&quot;&gt;
						&lt;img src=&quot;https://www.rmit.edu.au/content/dam/rmit/images/sentient-hollie-johnson.jpg&quot; alt=&quot;&quot; /&gt;
					&lt;/div&gt;
				&lt;/section&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;    
&lt;!-- END acknowledgement --&gt;</code>
</pre></div>
<h2>RMIT footer</h2>
<p>Finally, the RMIT footer is pasted below. This code can be placed with the <code>&lt;!-- footer --&gt;</code> comment tags. This markup is copied form RMIT's main website ecosystem, with some minor adjustments to gain greater control over spacing. Optional links can be added in the marked section.</p>
<div class="highlight">
<pre class="chroma"><code class="language-html">&lt;!-- START logo --&gt;    
&lt;a aria-label=&quot;Royal Melbourne Institute of Technology University Logo&quot; href=&quot;https://www.rmit.edu.au/&quot;&gt;
	&lt;div aria-hidden=&quot;true&quot; class=&quot;logo&quot;&gt;&lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;&lt;img src=&quot;https://rmitlibrary.github.io/cdn/image/svg/rmit-logo.svg&quot; style=&quot;width: 100px&quot; alt=&quot;&quot; /&gt;&lt;/span&gt;
	&lt;/div&gt;
&lt;/a&gt;
&lt;!-- END logo --&gt;
&lt;!-- START optional links --&gt;
&lt;ul class=&quot;footer-links&quot;&gt;
	&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 1&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 2&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 3&lt;/a&gt;&lt;/li&gt;
	&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 4&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;!-- END optional links --&gt;
&lt;!-- START legal-social --&gt;
&lt;div class=&quot;footerlegalShareItems&quot;&gt;
	&lt;!-- START legal --&gt;
	&lt;div class=&quot;footer-legal&quot;&gt;
	&lt;ul&gt;
		&lt;li&gt;Copyright &copy; 2024 RMIT University&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;https://www.rmit.edu.au/utilities/terms&quot;&gt;&lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;Terms&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;https://www.rmit.edu.au/utilities/privacy&quot;&gt;&lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;Privacy&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;https://www.rmit.edu.au/utilities/accessibility&quot;&gt;&lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;Accessibility&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a data-analytics-type=&quot;footerlink&quot; data-analytics-value=&quot;Website feedback&quot; href=&quot;https://www.rmit.edu.au/utilities/website-feedback&quot;&gt;&lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;Website feedback&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;&lt;a data-analytics-type=&quot;footerlink&quot; data-analytics-value=&quot;Complaints&quot; href=&quot;https://www.rmit.edu.au/utilities/complaints&quot;&gt;&lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;Complaints&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;li&gt;ABN 49 781 030 034&lt;/li&gt;
		&lt;li&gt;CRICOS provider number: 00122A&lt;/li&gt;
		&lt;li&gt;TEQSA provider number: PRV12145&lt;/li&gt;
		&lt;li&gt;RTO Code: 3046&lt;/li&gt;
		&lt;li&gt;&lt;a href=&quot;https://www.open.edu.au/online-courses/rmit-university&quot;&gt;&lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;Open Universities Australia&lt;/span&gt;&lt;/a&gt; &lt;/li&gt;
		&lt;/ul&gt;
	&lt;/div&gt;
	&lt;!-- END legal --&gt;
	&lt;!-- START social --&gt;
	&lt;div class=&quot;social-nav&quot;&gt;
	&lt;ul&gt; 
		&lt;!-- START facebook --&gt;
		&lt;li&gt;&lt;a aria-label=&quot;For Facebook&quot;  href=&quot;https://www.facebook.com/RMITuniversity/&quot;&gt; &lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;&lt;img src=&quot;https://rmitlibrary.github.io/cdn/image/svg/social/facebook.svg&quot; alt=&quot;&quot; /&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;!-- END facebook --&gt;
		&lt;!-- START twitter/x --&gt;
		&lt;li&gt;&lt;a aria-label=&quot;For Twitter&quot; href=&quot;https://twitter.com/rmit&quot;&gt; &lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;&lt;img src=&quot;https://rmitlibrary.github.io/cdn/image/svg/social/twitter.svg&quot; alt=&quot;&quot; /&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;!-- END twitter/x --&gt;
		&lt;!-- START insta --&gt;
		&lt;li&gt;&lt;a aria-label=&quot;For Instagram&quot; href=&quot;https://www.instagram.com/rmituniversity/&quot;&gt; &lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;&lt;img src=&quot;https://rmitlibrary.github.io/cdn/image/svg/social/instagram.svg&quot; alt=&quot;&quot; /&gt;&lt;/span&gt; &lt;/a&gt;&lt;/li&gt;
		&lt;!-- END insta --&gt;              
		&lt;!-- START LinkedIn --&gt;
		&lt;li&gt;&lt;a aria-label=&quot;For LinkedIn&quot; data-analytics-type=&quot;socialshare&quot; data-analytics-value=&quot;LinkedIn&quot; href=&quot;https://www.linkedin.com/school/rmit-university/&quot;&gt;&lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;&lt;img src=&quot;https://rmitlibrary.github.io/cdn/image/svg/social/linkedin.svg&quot; alt=&quot;&quot; /&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;!-- END LinkedIn --&gt;
		&lt;!-- START YouTube --&gt;
		&lt;li&gt;&lt;a aria-label=&quot;For Youtube&quot; href=&quot;https://www.youtube.com/user/rmitmedia&quot;&gt; &lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;&lt;img src=&quot;https://rmitlibrary.github.io/cdn/image/svg/social/youtube.svg&quot; alt=&quot;&quot; /&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;!-- END YouTube --&gt;     
		&lt;!-- START Weibo --&gt;          
		&lt;li&gt;&lt;a aria-label=&quot;For Weibo&quot; href=&quot;https://www.weibo.com/rmituni&quot;&gt; &lt;span class=&quot;no-focus&quot; tabindex=&quot;-1&quot;&gt;&lt;img src=&quot;https://rmitlibrary.github.io/cdn/image/svg/social/weibo.svg&quot; alt=&quot;&quot; /&gt;&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
		&lt;!-- END Weibo --&gt;                
	&lt;/ul&gt;
	&lt;/div&gt;
	&lt;!-- END social --&gt;
&lt;/div&gt;
&lt;!-- END legal-social --&gt;</code>
</pre></div>
