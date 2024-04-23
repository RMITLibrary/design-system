---
title: Tables
name: Tables
parent: "Simple components"
---
<h1 class="margin-top-zero">Tables</h1>
<p class="lead">Tables allow data to be displayed with a structure. Be sure that the information being presented warrants being displayed in a table. Often, regular paragraphs of text are  better way to communicate.</p>
<h2>Default</h2>
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
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;table-responsive&quot;&gt;
	&lt;table&gt;
	&lt;tbody&gt;
		&lt;tr&gt;
			&lt;th&gt;Column heading 1&lt;/th&gt;
			&lt;th&gt;Column heading 2&lt;/th&gt;
			&lt;th&gt;Column heading 3&lt;/th&gt;
			&lt;th&gt;Column heading 4&lt;/th&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;th&gt;Column content 1&lt;/th&gt;
			&lt;th&gt;Column content 2&lt;/th&gt;
			&lt;th&gt;Column content 3&lt;/th&gt;
			&lt;th&gt;Column content 4&lt;/th&gt;
		&lt;/tr&gt;
	&lt;/tbody&gt;
	&lt;/table&gt;
&lt;/div&gt;</code>
</pre></div>
<h2>Striped</h2>
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
<div class="highlight">
<pre class="chroma">
<code class="language-html">&lt;div class=&quot;table-responsive&quot;&gt;
	&lt;table class=&quot;table-striped&quot;&gt;
	&lt;tbody&gt;
		&lt;tr&gt;
			&lt;th&gt;Column heading 1&lt;/th&gt;
			&lt;th&gt;Column heading 2&lt;/th&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;th&gt;Column content 1&lt;/th&gt;
			&lt;th&gt;Column content 2&lt;/th&gt;
		&lt;/tr&gt;
	&lt;/tbody&gt;
	&lt;/table&gt;
&lt;/div&gt;</code>
</pre></div>
