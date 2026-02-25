import fs from 'fs/promises';
import { get } from 'https';
import { get as httpGet } from 'http';

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? get : httpGet;
        client(url, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                const nextUrl = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
                return resolve(fetchUrl(nextUrl));
            }
            if (res.statusCode !== 200) {
                return reject(new Error(`Failed ${res.statusCode} on ${url}`));
            }
            const data = [];
            res.on('data', chunk => data.push(chunk));
            res.on('end', () => resolve(Buffer.concat(data)));
            res.on('error', reject);
        }).on('error', reject);
    });
}

const images = [
    { url: 'https://loremflickr.com/1600/900/excavator,digger/all', dest: 'public/hero.jpg' },
    { url: 'https://loremflickr.com/800/800/construction,worker/all', dest: 'public/why-us.jpg' },
    { url: 'https://loremflickr.com/600/400/gravel,sand/all', dest: 'public/service-materials.jpg' },
    { url: 'https://loremflickr.com/600/400/excavator/all', dest: 'public/service-excavation.jpg' },
    { url: 'https://loremflickr.com/600/400/pipeline,plumbing/all', dest: 'public/service-septic.jpg' },
    { url: 'https://loremflickr.com/600/400/asphalt,road/all', dest: 'public/service-roads.jpg' },
    { url: 'https://loremflickr.com/600/400/forestry,stump/all', dest: 'public/service-clearing.jpg' },
    { url: 'https://loremflickr.com/600/400/lawn,grass/all', dest: 'public/service-lawn.jpg' }
];

async function main() {
    console.log('Starting downloads...');
    for (const img of images) {
        try {
            const buf = await fetchUrl(img.url);
            await fs.writeFile(img.dest, buf);
            console.log(`Saved ${img.dest}`);
        } catch (err) {
            console.log(`Error on ${img.dest}:`, err);
        }
    }
    console.log('All downloads finished.');
}

main();
