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
    console.log(`\n=== Images in ${file} ===`);
    const content = fs.readFileSync(file, 'utf8');
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
    let match;
    const seen = new Set();
    while ((match = imgRegex.exec(content)) !== null) {
        const src = match[1];
        if (seen.has(src)) continue;
        seen.add(src);
        const resolved = path.resolve(src);
        const exists = fs.existsSync(resolved);
        let size = 0;
        if (exists) {
            size = fs.statSync(resolved).size;
        }
        console.log(`  - ${src} (Exists: ${exists}, Size: ${size} bytes)`);
    }
});
