import fs from 'fs/promises';

async function downloadImage(url, dest) {
    try {
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
            }
        });
        if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
        const arrayBuffer = await res.arrayBuffer();
        await fs.writeFile(dest, Buffer.from(arrayBuffer));
        console.log(`Successfully downloaded: ${dest}`);
    } catch (err) {
        console.error(`Error downloading ${dest}:`, err.message);
    }
}

const images = [
    { url: 'https://images.unsplash.com/photo-1682142119293-ba4cb0877108?q=80&w=1200&auto=format&fit=crop', dest: 'public/hero.jpg' },
    { url: 'https://images.unsplash.com/photo-1664299941780-e8badc0b1617?q=80&w=800&auto=format&fit=crop', dest: 'public/why-us.jpg' },
    { url: 'https://images.unsplash.com/photo-1675876266910-8fd8c1f7c992?q=80&w=600&auto=format&fit=crop', dest: 'public/service-materials.jpg' },
    { url: 'https://images.unsplash.com/photo-1682142119293-ba4cb0877108?q=80&w=600&auto=format&fit=crop', dest: 'public/service-excavation.jpg' }, // same as hero
    { url: 'https://images.unsplash.com/photo-1661673839379-af15f57c1ab3?q=80&w=600&auto=format&fit=crop', dest: 'public/service-septic.jpg' },
    { url: 'https://images.unsplash.com/photo-1661286705410-edb4c9bde72a?q=80&w=600&auto=format&fit=crop', dest: 'public/service-roads.jpg' },
    { url: 'https://images.unsplash.com/photo-1661964199430-3e49c575b0b0?q=80&w=600&auto=format&fit=crop', dest: 'public/service-clearing.jpg' },
    { url: 'https://images.unsplash.com/photo-1725408037993-f891474828c9?q=80&w=600&auto=format&fit=crop', dest: 'public/service-lawn.jpg' }
];

async function main() {
    console.log('Starting downloads...');
    await Promise.all(images.map(img => downloadImage(img.url, img.dest)));
    console.log('All downloads finished.');
}

main();
