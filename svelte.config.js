import adapter from '@sveltejs/adapter-netlify'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter()
        target: '#svelte'
    }
    
};

export default config;