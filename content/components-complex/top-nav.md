---
title: Top navigation
name: Top navigation
parent: "Complex components"
---
<h1 class="margin-top-zero">Top navigation</h1>
<p class="lead">As a component, top navigation will require a more customisation according to the context of the site. Options are available for fixing the navigation to the top of screen, hamburger menus and more.</p>
<h2>Simple</h2>
<p>The optional site name provides a link to the home page. At small screen sizes (width &lt; 768px), this type is scaled to fit the available space. That being said, site titles should remain relatively short. The nav options displayed on the right should take precedence.</p>
<div class="top-navigation">
    <!-- START container -->
    <div class="container">
        <div class="row">
            <!-- START left hand column -->
            <div class="col-auto left-nav">
                <div class="rmit-logo"><span class="visually-hidden">RMIT University logo</span></div>
                <a href="" class="h2">Optional site title <span class="visually-hidden">homepage</span></a>
            </div>
            <!-- END left hand column -->
        </div>
    </div>
    <!-- END container -->
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;top-navigation&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;row&quot;&gt;
            &lt;!-- START left hand column --&gt;
            &lt;div class=&quot;col-auto left-nav&quot;&gt;
                &lt;div class=&quot;rmit-logo&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;RMIT University logo&lt;/span&gt;&lt;/div&gt;
                &lt;a href=&quot;&quot; class=&quot;h2&quot;&gt;Optional site title &lt;span class=&quot;visually-hidden&quot;&gt;homepage&lt;/span&gt;&lt;/a&gt;
            &lt;/div&gt;
            &lt;!-- END left hand column --&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
</pre></div>
<h2>Text links</h2>
<p>
	This example omits the site title and shows three basic text links. Text links can be hidden at small screens by adding the class <code>hide-sm</code> to the element.
</p>
<div class="top-navigation">
    <!-- START container -->
    <div class="container">
        <div class="row">
            <!-- START left hand column -->
            <div class="col-auto left-nav">
                <div class="rmit-logo"><span class="visually-hidden">RMIT University logo</span></div>
            </div>
            <!-- END left hand column -->
            <!-- START right hand column -->
            <div class="col">
                <ul>
                    <li><a href="https://www.rmit.edu.au/library">Link 1</a></li>
                    <li><a href="https://www.rmit.edu.au/library">Link 2</a></li>
                    <li><a href="https://www.rmit.edu.au/library">Link 3</a></li>
                </ul>
            </div>
            <!-- END right hand column -->
        </div>
    </div>
    <!-- END container -->
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;top-navigation&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;row&quot;&gt;
            &lt;!-- START left hand column --&gt;
            &lt;div class=&quot;col-auto left-nav&quot;&gt;
                &lt;div class=&quot;rmit-logo&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;RMIT University logo&lt;/span&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;!-- END left hand column --&gt;
            &lt;!-- START right hand column --&gt;
            &lt;div class=&quot;col&quot;&gt;
                &lt;ul&gt;
                    &lt;li&gt;&lt;a href=&quot;https://www.rmit.edu.au/library&quot;&gt;Link 1&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;https://www.rmit.edu.au/library&quot;&gt;Link 2&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;https://www.rmit.edu.au/library&quot;&gt;Link 3&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
            &lt;!-- END right hand column --&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
</pre></div>
<h2>Hamburger</h2>
<p>A hamburger menu can be a good way of hiding large and complex navigation menus. Attention must be paid to accessibility to ensure a good experience for visually impaired users. In this example. additional text, is added to the button, "Click for main menu". It is hidden from display but available to screen readers.</p>
<div class="top-navigation">
    <div class="container">
        <div class="row">
            <!-- START left hand column -->
            <div class="col-auto left-nav">
                <div class="rmit-logo"><span class="visually-hidden">RMIT University logo</span></div>
                <a href="/design-system/" class="h2">Optional title<span class="visually-hidden">homepage</span></a>
            </div>
            <!-- END left hand column -->
            <!-- START right hand column -->
            <div class="col">
                <ul>
                    <li class="menu">
                        <button id="menu-button4" 
                        class="btn btn-primary collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#context-menu" data-bs-display="static" aria-expanded="false" 
                        aria-controls="context-menu">Click for main menu</button>
                    </li>
                </ul> 
            </div>
            <!-- END right hand column -->
        </div>
    </div>
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;top-navigation&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;row&quot;&gt;
            &lt;!-- START left hand column --&gt;
            &lt;div class=&quot;col-auto left-nav&quot;&gt;
                &lt;div class=&quot;rmit-logo&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;RMIT University logo&lt;/span&gt;&lt;/div&gt;
                &lt;a href=&quot;/design-system/&quot; class=&quot;h2&quot;&gt;Optional title&lt;span class=&quot;visually-hidden&quot;&gt;homepage&lt;/span&gt;&lt;/a&gt;
            &lt;/div&gt;
            &lt;!-- END left hand column --&gt;
            &lt;!-- START right hand column --&gt;
            &lt;div class=&quot;col&quot;&gt;
                &lt;ul&gt;
                    &lt;li class=&quot;menu&quot;&gt;
                        &lt;button id=&quot;menu-button4&quot; 
                        class=&quot;btn btn-primary collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; 
                        data-bs-target=&quot;#context-menu&quot; data-bs-display=&quot;static&quot; aria-expanded=&quot;false&quot; 
                        aria-controls=&quot;context-menu&quot;&gt;Click for main menu&lt;/button&gt;
                    &lt;/li&gt;
                &lt;/ul&gt; 
            &lt;/div&gt;
            &lt;!-- END right hand column --&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>
</pre></div>
<p>Bootstrap controls the expansion of the target div and the design system uses the addition and subtraction of class <code>collapsed</code> to toggle between the hamburger and close icons. Some additional script, located at the bottom of the page, is used to allow more control over how the menu is displayed. The variable <code>menuCover</code>, when set to true, hides the page content and allows the menu to take over the entire screen.</p>
<p>When set to false, the menu merely pushes the page content down the page. This is suitable for simpler, shorter menus. Here's the required script:</p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">var menuCover = true;		//If true, menu covers content. If false, menu pushes content down
var scrollPosition;
var menuDisplay = false;
var menuButton = document.getElementById(&quot;menu-button&quot;);
var pageContent = document.getElementById(&quot;page-content&quot;);
if(menuCover) menuButton.addEventListener(&quot;click&quot;, showHideMenu);
function showHideMenu() {
	if(menuDisplay == false)
	{
		menuDisplay = true;
		scrollPosition = window.scrollY;    
		pageContent.style.display = &quot;none&quot;; 
	}
	else
	{
		menuDisplay = false;
		pageContent.style.display = &quot;block&quot;;
		/* Change scroll behaviour, jump to where the user had scrolled to on the page, 
		then revert to smooth scrolling again. */
		document.documentElement.style.scrollBehavior = &quot;auto&quot;;
		window.scroll(0, scrollPosition);
		document.documentElement.style.scrollBehavior = &quot;smooth&quot;;
	}
}</code>
</pre></div>
<h2>Expanded menu format</h2>
<p>How the menu is displayed is very much dependent on the context of its parent site. This code should be placed below the <code>&lt;nav&gt;</code> tag but before <code>&lt;div id=&quot;page-content&quot;&gt;</code></p>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;nav id=&quot;context-menu&quot; class=&quot;collapse&quot; aria-label=&quot;Main Menu&quot;&gt;
	&lt;div class=&quot;container nav-container&quot;&gt;
		&lt;div class=&quot;row&quot;&gt;
			&lt;div class=&quot;col&quot;&gt;  
				&lt;ul class=&quot;link-list-white&quot;&gt;
					&lt;li&gt;&lt;a href=&quot;link1.html&quot;&gt;Link 1&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href=&quot;link2.html&quot;&gt;Link 2&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href=&quot;link3.html&quot;&gt;Link 3&lt;/a&gt;&lt;/li&gt;
				&lt;/ul&gt;
			&lt;/div&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/nav&gt;</code>
</pre></div>


<h2>Fixed menus</h2>
<p>To fix the menu to the top of the screen as the user scrolls, add the class <code>nav-fixed </code> to the html tag.
</p>
<h2>Submenu</h2>
<p>Write about this thing.</p>
<div class="top-navigation">
    <div class="container">
        <div class="row">
            <!-- START left hand column -->
            <div class="col-auto left-nav">
                <div class="rmit-logo"><span class="visually-hidden">RMIT University logo</span></div>
            </div>
            <!-- END left hand column -->
            <!-- START right hand column -->
            <div class="col">
                <ul>
                    <li><a href="https://www.rmit.edu.au/library">Link 1</a></li>
                    <li><a href="https://www.rmit.edu.au/library">Link 2</a></li>
                </ul>
            </div>
            <!-- END right hand column -->
        </div>
    </div>
</div>
<!-- START submenu desktop only -->
<div id="sub-menu" style="position: relative; padding: 0; z-index: -2;">    
    <div class="container">
        <nav aria-label="Main Menu">
            <ul>
                <li><a href="">Subnav 1</a></li>
                <li><a href="">Subnav 2</a></li>
                <li class="selected">Subnav selected</li>
                <li><a href="">Subnav 4</a></li>
            </ul>
        </nav>	
    </div>		
</div>
<!-- END submenu desktop only -->
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;top-navigation&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;row&quot;&gt;
            &lt;!-- START left hand column --&gt;
            &lt;div class=&quot;col-auto left-nav&quot;&gt;
                &lt;div class=&quot;rmit-logo&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;RMIT University logo&lt;/span&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;!-- END left hand column --&gt;
            &lt;!-- START right hand column --&gt;
            &lt;div class=&quot;col&quot;&gt;
                &lt;ul&gt;
                    &lt;li&gt;&lt;a href=&quot;https://www.rmit.edu.au/library&quot;&gt;Link 1&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href=&quot;https://www.rmit.edu.au/library&quot;&gt;Link 2&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
            &lt;!-- END right hand column --&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;!-- START submenu desktop only --&gt;
&lt;div id=&quot;sub-menu&quot;&gt;    
    &lt;div class=&quot;container&quot;&gt;
        &lt;nav aria-label=&quot;Main Menu&quot;&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href=&quot;&quot;&gt;Subnav 1&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;&quot;&gt;Subnav 2&lt;/a&gt;&lt;/li&gt;
                &lt;li class=&quot;selected&quot;&gt;Subnav selected&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;&quot;&gt;Subnav 4&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;	
    &lt;/div&gt;		
&lt;/div&gt;
&lt;!-- END submenu desktop only --&gt;</code>
</pre></div>
<h2>Learning Lab example</h2>
<p>Here, we are presenting three individual links. "Library", linking back to the library home page, is hidden on mobile via <code>hide-sm</code> class due to space reasons. The search link comprises two elements, the text is hidden on smaller screens for space reasons, while the icon is always present. The hamburger menu is always present.</p>
<div class="top-navigation">
    <!-- START container -->
    <div class="container">
        <div class="row">
            <!-- START left hand column -->
            <div class="col-auto left-nav">
                <div class="rmit-logo"><span class="visually-hidden">RMIT University logo</span></div>
                <a href="/design-system/" class="h2">Learning lab <span class="visually-hidden">homepage</span></a>
            </div>
            <!-- END left hand column -->
            <!-- START right hand column -->
            <div class="col">
                <ul>
                    <li class="hide-sm">
                        <a href="https://www.rmit.edu.au/library">Library</a>
                    </li>
                    <li class="search">
                        <a id="search2">
                            <div class="search-label">Search</div>
                            <div class="mag-glass"></div>
                        </a>
                    </li>
                    <li class="menu">
                        <button id="menu-button5" 
                        class="btn btn-primary collapsed" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#context-menu" data-bs-display="static" aria-expanded="false" 
                        aria-controls="context-menu">Click for main menu</button>
                    </li>
                </ul> 
            </div>
            <!-- END right hand column -->
        </div>
    </div>
    <!-- END container -->
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;header&gt;
	&lt;a href=&quot;#main-content&quot; class=&quot;visually-hidden-focusable&quot;&gt;Skip to main content&lt;/a&gt;
	&lt;div class=&quot;top-navigation&quot;&gt;
		&lt;!-- START container --&gt;
		&lt;div class=&quot;container&quot;&gt;
			&lt;div class=&quot;row&quot;&gt;
				&lt;!-- START left hand column --&gt;
				&lt;div class=&quot;col-auto left-nav&quot;&gt;
					&lt;div class=&quot;rmit-logo&quot;&gt;&lt;span class=&quot;visually-hidden&quot;&gt;RMIT University logo&lt;/span&gt;&lt;/div&gt;
					&lt;a href=&quot;/design-system/&quot; class=&quot;h2&quot;&gt;Design system&lt;span class=&quot;visually-hidden&quot;&gt; homepage&lt;/span&gt;&lt;/a&gt;
				&lt;/div&gt;
				&lt;!-- END left hand column --&gt;
				&lt;!-- START right hand column --&gt;
				&lt;div class=&quot;col&quot;&gt;
					&lt;ul&gt;
						&lt;li class=&quot;hide-sm&quot;&gt;
							&lt;a href=&quot;https://www.rmit.edu.au/library&quot;&gt;Library&lt;/a&gt;
						&lt;/li&gt;
						&lt;li class=&quot;search&quot;&gt;
							&lt;a id=&quot;search2&quot;&gt;
								&lt;div class=&quot;search-label&quot;&gt;Search&lt;/div&gt;
								&lt;div class=&quot;mag-glass&quot;&gt;&lt;/div&gt;
							&lt;/a&gt;
						&lt;/li&gt;
						&lt;li class=&quot;menu&quot;&gt;
							&lt;button id=&quot;menu-button&quot; 
							class=&quot;btn btn-primary collapsed&quot; type=&quot;button&quot; data-bs-toggle=&quot;collapse&quot; 
							data-bs-target=&quot;#context-menu&quot; data-bs-display=&quot;static&quot; aria-expanded=&quot;false&quot; 
							aria-controls=&quot;context-menu&quot;&gt;Click for main menu&lt;/button&gt;
						&lt;/li&gt;
					&lt;/ul&gt; 
				&lt;/div&gt;
				&lt;!-- END right hand column --&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;!-- END container --&gt;
	&lt;/div&gt;
	&lt;nav id=&quot;context-menu&quot; class=&quot;collapse&quot; aria-label=&quot;Main Menu&quot;&gt;
		&lt;!-- START container --&gt;
		&lt;div class=&quot;container nav-container&quot;&gt;
			&lt;div class=&quot;row&quot;&gt;
				&lt;!-- START column --&gt;
				&lt;div class=&quot;col&quot;&gt;  
					&lt;ul class=&quot;link-list-white&quot;&gt;
						&lt;li&gt;&lt;a href=&quot;/design-system/&quot;&gt;Introduction&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a href=&quot;/design-system/visual/breakpoints/&quot;&gt;Visual language&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a href=&quot;/design-system/components-simple/accordions/&quot;&gt;Simple components&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a href=&quot;/design-system/components-complex/footer/&quot;&gt;Complex components&lt;/a&gt;&lt;/li&gt;
						&lt;li&gt;&lt;a href=&quot;/design-system/examples/example-1&quot;&gt;Examples&lt;/a&gt;&lt;/li&gt;
					&lt;/ul&gt;
				&lt;/div&gt;
				&lt;!-- END column --&gt;
			&lt;/div&gt;
		&lt;/div&gt;
		&lt;!-- END container --&gt;
	&lt;/nav&gt;
&lt;/header&gt;</code>
</pre></div>