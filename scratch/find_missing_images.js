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

const cssFiles = fs.readdirSync('assets/css')
    .filter(f => f.endsWith('.css'))
    .map(f => 'assets/css/' + f);

const filesToScan = [...active, ...cssFiles];
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];

const foundImages = new Set();
const missingImages = new Set();

filesToScan.forEach(file => {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');
    
    // Regular expression to match:
    // 1) src="path" or href="path"
    // 2) url("path") or url('path') or url(path)
    const regex = /(?:src|href)\s*=\s*['"]([^'"]+)['"]|url\(([^)]+)\)/gi;
    let match;
    
    while ((match = regex.exec(content)) !== null) {
        let link = (match[1] || match[2] || '').trim();
        // Remove quotes if matched via url(...)
        link = link.replace(/['"]/g, '');
        
        if (link.startsWith('http') || link.startsWith('data:') || link.startsWith('#') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('javascript:')) {
            continue;
        }
        
        const cleanLink = link.split('#')[0].split('?')[0];
        if (!cleanLink) continue;
        
        const ext = path.extname(cleanLink).toLowerCase();
        if (imageExtensions.includes(ext)) {
            let resolvedPath;
            if (file.endsWith('.css')) {
                // In CSS, paths are relative to the CSS file
                resolvedPath = path.resolve(path.dirname(file), cleanLink);
            } else {
                resolvedPath = path.resolve(cleanLink);
            }
            
            const relPath = path.relative(process.cwd(), resolvedPath).replace(/\\/g, '/');
            foundImages.add(relPath);
            
            if (!fs.existsSync(resolvedPath)) {
                missingImages.add(JSON.stringify({ file, ref: link, resolved: relPath }));
            }
        }
    }
});

console.log('--- MISSING IMAGES ---');
missingImages.forEach(m => {
    const item = JSON.parse(m);
    console.log(`File: ${item.file} -> Reference: ${item.ref} -> Path: ${item.resolved}`);
});
console.log('Total unique images referenced:', foundImages.size);
console.log('Total unique missing images:', missingImages.size);
