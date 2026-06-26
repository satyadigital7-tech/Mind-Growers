const fs = require('fs');
const path = require('path');

const targetFiles = [
    'about.html',
    'program.html',
    'montessori-learning.html',
    'gallery.html',
    'admissions.html',
    'contact.html',
    'privacy-policy.html',
    'terms-conditions.html'
];

targetFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${file}`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('breadcrumb-wrapper') && !content.includes('has-floating-leaves')) {
        console.log(`Adding has-floating-leaves to: ${file}`);
        content = content.replace(/class="breadcrumb-wrapper bg-cover"/g, 'class="breadcrumb-wrapper bg-cover has-floating-leaves"');
        fs.writeFileSync(filePath, content, 'utf8');
    } else {
        console.log(`Skipping or already updated: ${file}`);
    }
});
