const fs = require('fs');
const https = require('https');
const path = require('path');

// Create directory if it doesn't exist
const params = ['src', 'assets', 'images', 'character'];
const targetDir = path.join(process.cwd(), ...params);

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const files = [
    { "name": "aman.png", "id": "1H_h-_VlL3R10yutmDqipqXXkV9XYE7lD" },
    { "name": "baljit.png", "id": "1iga2w30yW9INmBM1qVHgX1prVoi8LzGs" },
    { "name": "bikram_face_turnaround.png", "id": "1CYtp2lo-dJv-karvPp7dW9-ngujVb7v3" },
    { "name": "charu.png", "id": "1IlqOf_-Fmv9UDg0WRSuU3LCz68epUMTo" },
    { "name": "charu_brother.png", "id": "1QP1VxHl4AFgP1zNjyESfIANxsuVCBDzU" },
    { "name": "cleaner_character.png", "id": "1vJKD_bh19JKM18352NlFb8ju1aW8DT5p" },
    { "name": "grandfather.png", "id": "1wqG3sqbNRWob17RFfPTiR_3Qi18KNLHY" },
    { "name": "grandmother.png", "id": "1uOf2JijN9TZzCBdKbafpz8sn2UNyqA9l" },
    { "name": "IAS_officer_lady.png", "id": "12WJN2ybsvHE6c9vJhHkej8vC_uxYZBYp" },
    { "name": "indian_chef.jpg", "id": "1kDFMaMhrMKDc9pbCct2Inht3waKBEgZ2" },
    { "name": "mother_2.png", "id": "1WPhuvE36Q1GiEu81yeJhrDoCq91w23uN" },
    { "name": "mother.png", "id": "1aDB6RssrArzwRiwqx2utopbb_odwDtuM" },
    { "name": "nurse_didi.png", "id": "1DcjJ6FnnvXX124QCZMWzruSJu2dYRNiy" },
    { "name": "police_constable.png", "id": "13WTzghB0dDMmOQbRvGno1NSzu2HovhxD" },
    { "name": "puja.png", "id": "1_ljX7iMeH-2AsyqX89dwGGnTZYwUVUVW" },
    { "name": "sneha.png", "id": "1unJWIwHUQ2ovmITwxObpkISy2ZJIV3QU" }
];

const downloadFile = (file) => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(targetDir, file.name);
        const fileStream = fs.createWriteStream(filePath);
        // Using export=download to get the binary
        const url = `https://drive.google.com/uc?export=download&id=${file.id}`;

        https.get(url, (response) => {
            // Handle redirects (Google Drive often redirects)
            if (response.statusCode === 302 || response.statusCode === 303) {
                https.get(response.headers.location, (redirectResponse) => {
                    redirectResponse.pipe(fileStream);
                    fileStream.on('finish', () => {
                        fileStream.close();
                        console.log(`Downloaded: ${file.name}`);
                        resolve();
                    });
                }).on('error', reject);
                return;
            }

            if (response.statusCode !== 200) {
                fileStream.close();
                fs.unlinkSync(filePath); // Delete incomplete file
                // If it's a 429/403, we might need a cookie or it's limited
                console.error(`Failed to download ${file.name}: Status ${response.statusCode}`);
                // Don't fail the whole batch, just log
                resolve();
                return;
            }

            response.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded: ${file.name}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => { });
            console.error(`Error downloading ${file.name}: ${err.message}`);
            reject(err);
        });
    });
};

// Run sequentially to be nice to rate limits
(async () => {
    console.log(`Downloading ${files.length} files to ${targetDir}...`);
    try {
        for (const file of files) {
            try {
                await downloadFile(file);
                // Wait 300ms between requests
                await new Promise(r => setTimeout(r, 300));
            } catch (e) {
                console.error(`Skipping ${file.name}`);
            }
        }
        console.log('Done.');
    } catch (err) {
        console.error('Fatal error:', err);
    }
})();
