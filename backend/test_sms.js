const http = require('http');

const data = JSON.stringify({ phone: '+919328366728' });

const req = http.request({
    hostname: 'localhost',
    port: 8000,
    path: '/api/auth/otp',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}, res => {
    let body = '';
    res.on('data', d => body += d);
    res.on('end', () => {
        console.log('Response Status:', res.statusCode);
        console.log('Response Body:', body);
    });
});

req.on('error', error => console.error('Request Error:', error));
req.write(data);
req.end();
