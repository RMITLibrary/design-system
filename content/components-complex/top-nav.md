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
            <!-- START right hand column -->
            <div class="col">
                <!-- navigation elements here --> 
            </div>
            <!-- END right hand column -->
        </div>
    </div>
    <!-- END container -->
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;update this&gt;</code>
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
<code class="language-html">&lt;update this&gt;</code>
</pre></div>
<h2>Hamburger</h2>
<p>A hamburger menu can be a good way of hiding large and complex navigation menus. Attention must be paid to accessibility to ensure a good experience for visually impaired users. In this example. additional text, is added to the button, "Click for main menu". It is hidden from display but available to screen readers.</p>
<div class="top-navigation">
    <!-- START container -->
    <div class="container">
        <div class="row">
            <!-- START left hand column -->
            <div class="col-auto left-nav">
                <div class="rmit-logo"><span class="visually-hidden">RMIT University logo</span></div>
                <a href="/dewey-design/" class="h2">Optional title<span class="visually-hidden">homepage</span></a>
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
    <!-- END container -->
</div>
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;update this&gt;</code>
</pre></div>
<p>Bootstrap controls the expansion of the target div and the design system uses the addition and subtraction of class <code>collapsed</code> to toggle between the hamburger and close icons. Some additional script, located at the bottom of the page, is used to allow more control over how the menu is displayed. The variable <code>menuCover</code>, when set to true, hides the page content and allows the menu to take over the entire screen.</p>
<p>When set to false, the menu merely pushes the page content down the page. This is suitable for simpler, shorter menus.</p>
<h2>Expanded menu format</h2>
<p>How the menu is displayed is very much dependent on the context the site it sits in. For now, this site is showing an example used in the Learning Lab website, where 5 accordions hold up to 10 links each. This is quite a detailed nav.</p>
<h2>Fixed menus</h2>
<p>To fix the menu to the top of the screen as the user scrolls, add the class <code>nav-fixed </code> to the html tag.
</p>
<h2>Submenu</h2>
<p>Write about this thing.</p>
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
                </ul>
            </div>
            <!-- END right hand column -->
        </div>
    </div>
    <!-- END container -->
</div>
<!-- START submenu desktop only -->
<div id="sub-menu">    
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
<code class="language-html">&lt;update this&gt;</code>
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
                <a href="/dewey-design/" class="h2">Learning lab <span class="visually-hidden">homepage</span></a>
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
<code class="language-html">&lt;update this&gt;</code>
</pre></div>