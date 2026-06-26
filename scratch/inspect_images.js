const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walk(filepath, fileList);
        } else {
            fileList.push({
                path: filepath.replace(/\\/g, '/'),
                size: stat.size
            });
        }
    });
    return fileList;
}

if (fs.existsSync('assets/img')) {
    const images = walk('assets/img');
    console.log(`Total image assets: ${images.length}`);
    console.log('--- TINY OR EMPTY IMAGES (potential placeholders) ---');
    images.forEach(img => {
        if (img.size < 500) {
            console.log(`Tiny file: ${img.path} (${img.size} bytes)`);
        }
    });
} else {
    console.log('assets/img directory not found');
}
