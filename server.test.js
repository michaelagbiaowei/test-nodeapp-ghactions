const request = require('supertest');
const http = require('node:http');

// Import or include your server code here
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

describe('GET /', () => {
  it('responds with Hello, World!', async () => {
    const response = await request(server).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!\n');
  });
});
