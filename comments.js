// Create web server
// Run: node comments.js
// 1. http://localhost:8080/
// 2. http://localhost:8080/comments
// 3. http://localhost:8080/comments?postId=1
// 4. http://localhost:8080/comments?postId=1&name=id labore ex et quam laborum

const http = require('http');
const url = require('url');

const comments = [
    { postId: 1, id: 1, name: 'id labore ex et quam laborum' },
    { postId: 1, id: 2, name: 'quo vero reiciendis velit similique earum' },
    { postId: 1, id: 3, name: 'odio adipisci rerum aut animi' },
    { postId: 1, id: 4, name: 'alias odio sit' },
    { postId: 1, id: 5, name: 'vero eaque aliquid doloribus et culpa' },
    { postId: 2, id: 6, name: 'et fugit eligendi deleniti quidem qui sint nihil autem' },
    { postId: 2, id: 7, name: 'repellat consequatur praesentium vel minus molestias voluptatum' },
    { postId: 2, id: 8, name: 'et omnis dolorem' },
    { postId: 2, id: 9, name: 'provident id voluptas' },
    { postId: 2, id: 10, name: 'eaque et deleniti atque tenetur ut quo ut' },
    { postId: 3, id: 11, name: 'fugit labore quia mollitia quas deserunt nostrum sunt' },
    { postId: 3, id: 12, name: 'modi ut eos dolores illum nam dolor' },
    { postId: 3, id: 13, name: 'aut inventore non pariatur sit vitae voluptatem sapiente' },
    { postId: 3, id: 14, name: 'et officiis id praesentium hic aut ipsa dolorem repudiandae' },
    { postId: 3, id: 15, name: 'debitis magnam hic odit aut ullam nostrum tenetur' }
];
