const fs = require('fs');
const fetch = require('node-fetch');

const apiKey = process.env.GHOST_API_KEY;
const apiUrl = `https://pr.ogra.ms/ghost/api/v3/content/posts/?key=${apiKey}&limit=3`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        fs.writeFileSync('data/blog-posts.json', JSON.stringify(data.posts, null, 2));
    })
    .catch(error => console.error('Error fetching posts:', error));