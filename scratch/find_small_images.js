const fs = require('fs');
const path = require('path');

const active = [
    'index.html',
    'about.html',
    'program.html',
    'montessori-learning.html',
    'gallery.html',
    'admissions.html',
    'contact.html',
    'privacy-policy.html',
    'terms-conditions.html'
];

active.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
    let match;
    while ((match = imgRegex.exec(content)) !== null) {
        const src = match[1];
        if (src.startsWith('http') || src.startsWith('data:')) continue;
        const resolved = path.resolve(src);
        if (fs.existsSync(resolved)) {
            const size = fs.statSync(resolved).size;
            if (size < 3000) {
                console.log(`Small Image in ${file}: ${src} (${size} bytes)`);
            }
        }
    }
});
