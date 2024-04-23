---
title: Top navigation
name: Top navigation
parent: "Complex components"
---
<h1 class="margin-top-zero">Top navigation</h1>
<p class="lead">As a component, top navigation will require a more customisation according to the context of the site. Options are available for fixing the navigation to the top of screen, hamburger menus and more.</p>
<h2>Simple</h2>
<p>The optional site name provides a link to the home page. At small screen sizes (width &lt; 768px), this type is scaled to fit the available space. That being said, site titles should remain relatively short. The nav options displayed on the right should take precedence.</p>
<div class="top-nav" style="position: relative; z-index: 2;">
    <div class="container">
        <div class="row">
            <div class="col-auto">
                <div class="top-nav-left">
                    <div class="rmit-logo"></div>
                    <h2><a href="" aria-label="Link to home">Optional site title</a></h2>
                </div> 
            </div>
            <div class="col">       
                <!-- navigation elements here --> 
            </div>   
        </div>
    </div>
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;nav class=&quot;top-nav&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;row&quot;&gt;
            &lt;div class=&quot;col-auto&quot;&gt;
                &lt;div class=&quot;top-nav-left&quot;&gt;
                    &lt;div class=&quot;rmit-logo&quot;&gt;&lt;/div&gt;
                    &lt;h2&gt;&lt;a href=&quot;&quot;&gt;Optional site title&lt;/a&gt;&lt;/h2&gt;
                &lt;/div&gt; 
            &lt;/div&gt;
            &lt;div class=&quot;col&quot;&gt;       
                &lt;!-- navigation elements could be placed here --&gt; 
            &lt;/div&gt;   
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/nav&gt;</code>
</pre></div>
<h2>Text links</h2>
<p>
	This example omits the site title and shows three basic text links. Text links can be hidden at small screens by adding the class <code>hide-sm</code> to the element.
</p>
<div class="top-nav" style="position: relative; z-index: 2;">
    <div class="container">
        <div class="row">
            <div class="col-auto">
                <div class="top-nav-left">
                    <div class="rmit-logo"></div>    
                </div> 
            </div>
            <div class="col">       
                <ul>
					<li><a href="">Link 1</a></li>
					<li><a href="">Link 2</a></li>
					<li><a href="">Link 3</a></li>
                </ul> 
            </div>   
        </div>
    </div>
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;top-nav&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;row&quot;&gt;
            &lt;div class=&quot;col-auto&quot;&gt;
                &lt;div class=&quot;top-nav-left&quot;&gt;
                    &lt;div class=&quot;rmit-logo&quot;&gt;&lt;/div&gt;    
                &lt;/div&gt; 
            &lt;/div&gt;
            &lt;div class=&quot;col&quot;&gt;       
                &lt;ul&gt;
			&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 1&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 2&lt;/a&gt;&lt;/li&gt;
			&lt;li&gt;&lt;a href=&quot;&quot;&gt;Link 3&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt; 
            &lt;/div&gt;   
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
</pre></div>
<h2>Hamburger</h2>
<p>A hamburger menu can be a good way of hiding large and complex navigation menus. Attention must be paid to accessibility to ensure a good experience for visually impaired users. In this example. additional text, is added to the button, "Click for main menu". It is hidden from display but available to screen readers.</p>
<div class="top-nav" style="position: relative; z-index: 2;">
    <div class="container">
        <div class="row">
            <div class="col-auto">
                <div class="top-nav-left">
                    <div class="rmit-logo"></div>
                    <h2><a href="/dewey-design/">Optional site title</a></h2>
                </div> 
            </div>
            <div class="col">       
                <ul>
					<li class="menu">
						<button id="menu-button" class="btn btn-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu2" aria-expanded="false" aria-controls="nav-menu">Click for main menu</button>
					</li>
                </ul>
            </div>   
        </div>
    </div>
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;top-nav&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;row&quot;&gt;
            &lt;div class=&quot;col-auto&quot;&gt;
                &lt;div class=&quot;top-nav-left&quot;&gt;
                    &lt;div class=&quot;rmit-logo&quot;&gt;&lt;/div&gt;
                    &lt;h2&gt;&lt;a href=&quot;&quot;&gt;Optional site title&lt;/a&gt;&lt;/h2&gt;
                &lt;/div&gt; 
            &lt;/div&gt;
            &lt;div class=&quot;col&quot;&gt;       
                &lt;ul&gt;
			&lt;li class=&quot;menu&quot;&gt;
				&lt;button id=&quot;menu-button&quot; 
				class=&quot;btn btn-primary collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; 
				data-bs-target=&quot;#nav-menu&quot; aria-expanded=&quot;false&quot; 
				aria-controls=&quot;nav-menu&quot;&gt;Click for main menu&lt;/button&gt;
			&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;   
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
</pre></div>
<p>Bootstrap controls the expansion of the target div and the design system uses the addition and subtraction of class <code>collapsed</code> to toggle between the hamburger and close icons. Some additional script, located at the bottom of the page, is used to allow more control over how the menu is displayed. The variable <code>menuCover</code>, when set to true, hides the page content and allows the menu to take over the entire screen.</p>
<p>When set to false, the menu merely pushes the page content down the page. This is suitable for simpler, shorter menus.</p>
<h2>Expanded menu format</h2>
<p>How the menu is displayed is very much dependent on the context the site it sits in. For now, this site is showing an example used in the Learning Lab website, where 5 accordions hold up to 10 links each. This is quite a detailed nav.</p>
<h2>Fixed menus</h2>
<p>To fix the menu to the top of the screen as the user scrolls, add the class <code>nav-fixed </code> to the html tag.
</p>
<h2>Learning Lab example</h2>
<p>Here, we are presenting three individual links. "Library", linking back to the library home page, is hidden on mobile via <code>hide-sm</code> class due to space reasons. The search link comprises two elements, the text is hidden on smaller screens for space reasons, while the icon is always present. The hamburger menu is always present.</p>
<div class="top-nav" style="position: relative; z-index: 2;">
    <div class="container">
        <div class="row">
            <div class="col-auto">
                <div class="top-nav-left">
                    <div class="rmit-logo"></div>
                    <h2><a href="/dewey-design/">Learning Lab</a></h2>
                </div> 
            </div>
            <div class="col">       
                <ul>
					<li class="hide-sm"><a href="https://www.rmit.edu.au/library">Library</a></li>
					<li class="search">
						<a href="https://www.rmit.edu.au/library">
							<div class="hide-sm">Search</div>
							<div class="mag-glass"></div>
						</a>
					</li>
					<li class="menu"><button id="menu-button" class="btn btn-primary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu2" aria-expanded="false" aria-controls="nav-menu">Click for main menu</button></li>
                </ul> 
            </div>   
        </div>
    </div>
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;top-nav&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;row&quot;&gt;
            &lt;div class=&quot;col-auto&quot;&gt;
                &lt;div class=&quot;top-nav-left&quot;&gt;
                    &lt;div class=&quot;rmit-logo&quot;&gt;&lt;/div&gt;
                    &lt;h2&gt;&lt;a href=&quot;&quot;&gt;Optional site title&lt;/a&gt;&lt;/h2&gt;
                &lt;/div&gt; 
            &lt;/div&gt;
            &lt;div class=&quot;col&quot;&gt;       
                &lt;ul&gt;
			&lt;li class=&quot;hide-sm&quot;&gt;
				&lt;a href=&quot;https://www.rmit.edu.au/library&quot;&gt;Library&lt;/a&gt;
			&lt;/li&gt;
			&lt;li class=&quot;search&quot;&gt;
				&lt;a href=&quot;https://www.rmit.edu.au/library&quot;&gt;
					&lt;div class=&quot;hide-sm&quot;&gt;Search&lt;/div&gt;
					&lt;div class=&quot;mag-glass&quot;&gt;&lt;/div&gt;
				&lt;/a&gt;
			&lt;/li&gt;
			&lt;li class=&quot;menu&quot;&gt;
				&lt;button id=&quot;menu-button&quot; 
				class=&quot;btn btn-primary collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; 
				data-bs-target=&quot;#nav-menu&quot; aria-expanded=&quot;false&quot; 
				aria-controls=&quot;nav-menu&quot;&gt;Click for main menu&lt;/button&gt;
			&lt;/li&gt;
                &lt;/ul&gt; 
            &lt;/div&gt;   
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
</pre></div>