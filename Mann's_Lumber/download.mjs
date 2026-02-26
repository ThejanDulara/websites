import fs from 'fs/promises';

const urls = [
    { url: 'https://picsum.photos/seed/timber/2000/1200', path: 'public/images/hero-bg.jpg' },
    { url: 'https://picsum.photos/seed/forest/800/600', path: 'public/images/service-tree.jpg' },
    { url: 'https://picsum.photos/seed/woodshop/800/600', path: 'public/images/service-custom.jpg' },
    { url: 'https://picsum.photos/seed/worker/800/800', path: 'public/images/trust-craftsman.jpg' }
];

async function downloadImages() {
    for (const img of urls) {
        console.log(`Downloading ${img.path}...`);
        try {
            const res = await fetch(img.url);
            if (!res.ok) throw new Error(`Status ${res.status}`);
            const buffer = await res.arrayBuffer();
            await fs.writeFile(img.path, Buffer.from(buffer));
            console.log(`Success: ${img.path} (${buffer.byteLength} bytes)`);
        } catch (e) {
            console.error(`Failed to download ${img.path}:`, e.message);
        }
    }
}

downloadImages();
