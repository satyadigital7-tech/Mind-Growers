const fs = require('fs');
const path = require('path');

const targetFiles = [
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

let hasErrors = false;

targetFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
        console.error(`ERROR: Target file does not exist: ${file}`);
        hasErrors = true;
        return;
    }

    console.log(`Checking links in: ${file}`);
    const content = fs.readFileSync(filePath, 'utf8');

    // Find all href="..." and src="..." attributes
    const hrefRegex = /href="([^"]+)"/g;
    const srcRegex = /src="([^"]+)"/g;
    
    let match;
    
    // Check hrefs
    while ((match = hrefRegex.exec(content)) !== null) {
        const link = match[1];
        // Ignore external links, anchors, and mailto/tel links
        if (link.startsWith('http') || link.startsWith('#') || link.startsWith('mailto:') || link.startsWith('tel:')) {
            continue;
        }
        
        // Remove query parameters or hashes
        const cleanLink = decodeURIComponent(link.split('#')[0].split('?')[0]);
        if (!cleanLink) continue;

        const resolvedPath = path.join(__dirname, '..', cleanLink);
        if (!fs.existsSync(resolvedPath)) {
            console.warn(`  [BROKEN HREF] ${link} -> File not found: ${cleanLink}`);
            hasErrors = true;
        }
    }

    // Check srcs
    while ((match = srcRegex.exec(content)) !== null) {
        const link = match[1];
        if (link.startsWith('http') || link.startsWith('data:')) {
            continue;
        }
        
        const cleanLink = decodeURIComponent(link.split('?')[0]);
        const resolvedPath = path.join(__dirname, '..', cleanLink);
        if (!fs.existsSync(resolvedPath)) {
            console.warn(`  [BROKEN SRC] ${link} -> File not found: ${cleanLink}`);
            hasErrors = true;
        }
    }
});

if (hasErrors) {
    console.log('\nVerification completed with warnings/errors.');
} else {
    console.log('\nSUCCESS: All files exist and all local links/sources are valid!');
}
