<div id="app">
  <h1>Great Quotes</h1>
  <p style="margin: 0 0 30px">Curated by Chris Coyier</p>
    {{#if quotes.length === 0}}
      <p>Quotes loading...</p>
    {{else}}
      <Quotes quotes={{quotes}} />
    {{/if}}
  <button on:click='loadMoreQuotes()'>Load More</button>
</div>

<script type="text/javascript">
  import Quotes from './Quotes.svelte';

  // async data fetching function
  const fetchQuotes = async (data, component) => {
    const response = await fetch(`https://quotesondesign.com/wp-json/posts?filter[order]=rand&filter[posts_per_page]=3`);
    const json = await response.json();
    const quotes = data.quotes.concat(json);
    component.set({ quotes });
  }

  // export the default object
  export default {
    oncreate() {
      let data = this.get();
      fetchQuotes(data, this);
    },
    methods: {
      loadMoreQuotes() {
        let data = this.get();
        fetchQuotes(data, this);
      }
    },
    components: {
      Quotes
    }
  };
</script>

<style>
  h1 {
    margin: 0 0 10px;
  }
  p {
    line-height: 1.4;
  }
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 0.4em;
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
  }
  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    margin: 50px auto;
    max-width: 600px;
  }
  .quote {
    background: #efefef;
    border: 1px solid #ccc;
    font-size: 18px;
    margin-bottom: 30px;
    padding: 20px;
  }
  .author {
    text-align: right;
  }
</style>
