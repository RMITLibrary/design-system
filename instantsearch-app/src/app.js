const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'NV94VZG0X3',
  'c6dd7a3a7269e8797725ec6427e6ba18'
);

const search = instantsearch({
  indexName: 'learninglab_rmit_edu_au_nv94vzg0x3_pages',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
        <article>
          <div>
            <h1>${components.Highlight({ hit, attribute: 'title' })}</h1>
            <p>${components.Highlight({ hit, attribute: 'description' })}</p>
            <p>${components.Highlight({ hit, attribute: 'keywords' })}</p>
          </div>
        </article>
      `,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
