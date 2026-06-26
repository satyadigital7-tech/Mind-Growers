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

const referencedImages = new Set();

// Scan HTML and CSS files for image references
filesToScan.forEach(file => {
    if (!fs.existsSync(file)) return;
    const content = fs.readFileSync(file, 'utf8');
    const regex = /(?:src|href)\s*=\s*['"]([^'"]+)['"]|url\(([^)]+)\)/gi;
    let match;
    
    while ((match = regex.exec(content)) !== null) {
        let link = (match[1] || match[2] || '').trim();
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
                resolvedPath = path.resolve(path.dirname(file), cleanLink);
            } else {
                resolvedPath = path.resolve(cleanLink);
            }
            const relPath = path.relative(process.cwd(), resolvedPath).replace(/\\/g, '/');
            referencedImages.add(relPath.toLowerCase());
        }
    }
});

// Helper function to recursively find all files in a folder
function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            results = results.concat(walk(filepath));
        } else {
            results.push(filepath.replace(/\\/g, '/').toLowerCase());
        }
    });
    return results;
}

if (fs.existsSync('assets/img')) {
    const allImages = walk('assets/img');
    const unusedImages = allImages.filter(img => {
        // Only consider file extensions that are images
        const ext = path.extname(img).toLowerCase();
        if (!imageExtensions.includes(ext)) return false;
        return !referencedImages.has(img);
    });

    console.log(`Total image files in assets/img: ${allImages.length}`);
    console.log(`Referenced unique images: ${referencedImages.size}`);
    console.log(`Unused image files: ${unusedImages.length}`);
    
    // Save the list of unused images to a JSON file so we can delete them
    fs.writeFileSync('scratch/unused_images.json', JSON.stringify(unusedImages, null, 2));
    console.log('Saved unused images list to scratch/unused_images.json');
} else {
    console.log('assets/img directory not found');
}
