const fs = require('fs');
const https = require('https');
const path = require('path');
const { promisify } = require('util');

// Create directory if it doesn't exist
const params = ['src', 'assets', 'images', 'background'];
const targetDir = path.join(process.cwd(), ...params);

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const files = [
    { name: "BG-2.jpg", id: "1Rlzih5fvHIFxh-H7RHFK75hZc1UaRDKt" },
    { name: "BG-3.jpg", id: "1L0CAqhCM-BmxbZr18rqjQggPy7bed5ZA" },
    { name: "BG-4.jpg", id: "1oGR6i6m0OuQww74_2NJxFPFxCwRCEQz9" },
    { name: "BG-5.png", id: "1g2OV98qvI2NEJZtXCJN1hFOG_wDLFvtN" },
    { name: "BG-6.jpg", id: "1vvBUdprB1Kh_S6xf5x_zHyWjWt7iVvdT" },
    { name: "BG-8.jpg", id: "1ZFdRtRCxW_vhG9pca5nCyV8c7UeGjfv6" },
    { name: "BG-9.jpg", id: "1I4k3JCdw9viaErjypk5iHBSkXlGE6EbS" },
    { name: "BG-10.png", id: "1ohaz3b97gUOn6GqRrp7MJrgwiAJ2Qp8V" },
    { name: "BG-11.png", id: "1vQx5MUsFoaVF13_xxWW6lukW3IZydvDM" },
    { name: "BG-18.jpg", id: "1c9GtaNGc4XkYd5O3h5cdPIhJVDMrG5ax" },
    { name: "BG-20.jpg", id: "13ofmBDECHv06h45Z2yGfSGUOkFuvCbQ4" },
    { name: "BG-21.jpg", id: "1XsmnIcBWhaGIaIo9UYdMCY6JaGnx5Vld" },
    { name: "BG-23-1.jpg", id: "1k3FhpAopmXniFjDRw3t9nNkTUYap6CfM" },
    { name: "BG1.jpg", "id": "1kVoNbMKHvYftBiKmQuHm7qzsZMiP_BIP" },
    { name: "grandfather.png", id: "1oOKZkEoVMvFFpNRCgS3QyQgIv-gys3j1" }
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
                reject(new Error(`Status ${response.statusCode}`));
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

const sanitize = (name) => name.replace(/[^a-zA-Z0-9.-]/g, '_');

// Run sequentially to be nice to rate limits
(async () => {
    try {
        for (const file of files) {
            // Rename files to simple indices or clean names to avoid import issues?
            // Keeping original names for now but sanitizing if needed.
            // Actually, let's just download them.
            try {
                await downloadFile(file);
                // Wait 500ms between requests
                await new Promise(r => setTimeout(r, 500));
            } catch (e) {
                console.error(`Skipping ${file.name}`);
            }
        }
        console.log('Done.');
    } catch (err) {
        console.error('Fatal error:', err);
    }
})();
