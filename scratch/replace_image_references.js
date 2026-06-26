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

const replacements = {
    'assets/img/team/01.jpg': 'assets/img/team/01.png',
    'assets/img/team/02.jpg': 'assets/img/team/02.png',
    'assets/img/team/03.jpg': 'assets/img/team/03.png',
    'assets/img/team/04.jpg': 'assets/img/team/04.png',
    
    'assets/img/program/01.jpg': 'assets/img/gallery/montessori_materials.png',
    'assets/img/program/02.jpg': 'assets/img/about/classroom.png',
    'assets/img/program/03.jpg': 'assets/img/gallery/learning_art.png',
    'assets/img/certifigate-1.jpg': 'assets/img/gallery/outdoor_gardening.png',
    
    'assets/img/instagram/01.jpg': 'assets/img/gallery/campus_playarea.png',
    'assets/img/instagram/02.jpg': 'assets/img/gallery/montessori_materials.png',
    'assets/img/instagram/03.jpg': 'assets/img/gallery/learning_nature.png',
    'assets/img/instagram/04.jpg': 'assets/img/gallery/learning_art.png',
    'assets/img/instagram/05.jpg': 'assets/img/gallery/outdoor_gardening.png',
    'assets/img/instagram/06.jpg': 'assets/img/gallery/outdoor_clay.png'
};

active.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    Object.keys(replacements).forEach(placeholder => {
        const replacement = replacements[placeholder];
        if (content.includes(placeholder)) {
            // Replace all occurrences
            content = content.split(placeholder).join(replacement);
            console.log(`Replaced in ${file}: ${placeholder} -> ${replacement}`);
            modified = true;
        }
    });
    
    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
    }
});

console.log('Image reference replacements completed successfully!');
