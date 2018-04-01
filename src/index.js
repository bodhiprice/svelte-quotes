import App from './components/App.svelte';

const app = new App({
  target: document.querySelector('main'),
  data: {
    quotes: []
  },
});

const fetchQuotes = async () => {
  const response = await fetch('http://quotesondesign.com/wp-json/posts?filter[order]=asc&filter[posts_per_page]=5');
  const json = await response.json();
  app.set({ quotes: json });
}

fetchQuotes();
