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
  export default {
    methods: {
      loadMoreQuotes() {
        let data = this.get();
        const fetchQuotes = async () => {
          const response = await fetch(`http://quotesondesign.com/wp-json/posts?filter[order]=rand&filter[posts_per_page]=5`);
          const json = await response.json();
          const quotes = data.quotes.concat(json);
          this.set({ quotes });
        }
        fetchQuotes();
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
