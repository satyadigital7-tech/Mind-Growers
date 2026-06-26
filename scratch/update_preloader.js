const fs = require('fs');
const path = require('path');

const files = [
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

const targetText = `                <div class="txt-loading">
                    <span data-text-preloader="K" class="letters-loading">
                        K
                    </span>
                    <span data-text-preloader="I" class="letters-loading">
                        I
                    </span>
                    <span data-text-preloader="D" class="letters-loading">
                        D
                    </span>
                    <span data-text-preloader="S" class="letters-loading">
                        S
                    </span>
                    <span data-text-preloader="A" class="letters-loading">
                        A
                    </span>
                </div>`;

const replacementText = `                <div class="txt-loading">
                    <span data-text-preloader="M" class="letters-loading">
                        M
                    </span>
                    <span data-text-preloader="I" class="letters-loading">
                        I
                    </span>
                    <span data-text-preloader="N" class="letters-loading">
                        N
                    </span>
                    <span data-text-preloader="D" class="letters-loading">
                        D
                    </span>
                    <span data-text-preloader="&nbsp;" class="letters-loading">
                        &nbsp;
                    </span>
                    <span data-text-preloader="G" class="letters-loading">
                        G
                    </span>
                    <span data-text-preloader="R" class="letters-loading">
                        R
                    </span>
                    <span data-text-preloader="O" class="letters-loading">
                        O
                    </span>
                    <span data-text-preloader="W" class="letters-loading">
                        W
                    </span>
                    <span data-text-preloader="E" class="letters-loading">
                        E
                    </span>
                    <span data-text-preloader="R" class="letters-loading">
                        R
                    </span>
                    <span data-text-preloader="S" class="letters-loading">
                        S
                    </span>
                </div>`;

files.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${file}`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Standardize CRLF/LF line endings for matching
    const normalizedContent = content.replace(/\r\n/g, '\n');
    const normalizedTarget = targetText.replace(/\r\n/g, '\n');
    const normalizedReplacement = replacementText.replace(/\r\n/g, '\n');
    
    if (normalizedContent.includes(normalizedTarget)) {
        const updatedContent = normalizedContent.replace(normalizedTarget, normalizedReplacement);
        // Preserve original line endings by restoring CRLF if the original file used it
        const finalContent = content.includes('\r\n') ? updatedContent.replace(/\n/g, '\r\n') : updatedContent;
        fs.writeFileSync(filePath, finalContent, 'utf8');
        console.log(`Updated preloader in: ${file}`);
    } else {
        console.warn(`Could not find preloader text in: ${file}`);
    }
});
