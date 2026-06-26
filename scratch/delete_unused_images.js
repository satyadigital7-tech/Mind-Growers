const fs = require('fs');
const path = require('path');

const unusedJsonPath = 'scratch/unused_images.json';
if (!fs.existsSync(unusedJsonPath)) {
    console.error('Error: unused_images.json not found!');
    process.exit(1);
}

const unusedImages = JSON.parse(fs.readFileSync(unusedJsonPath, 'utf8'));
console.log(`Starting deletion of ${unusedImages.length} unused image files...`);

let successCount = 0;
let failCount = 0;

unusedImages.forEach(file => {
    if (fs.existsSync(file)) {
        try {
            fs.unlinkSync(file);
            successCount++;
        } catch (e) {
            console.error(`Failed to delete: ${file}`, e.message);
            failCount++;
        }
    } else {
        // Already doesn't exist
        successCount++;
    }
});

console.log(`Cleanup completed! Successfully deleted ${successCount} files. Errors: ${failCount}`);
