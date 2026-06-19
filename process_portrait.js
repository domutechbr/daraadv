import { Jimp } from 'jimp';

async function main() {
  try {
    const img = await Jimp.read('src/assets/Dara-hero.png');
    console.log('Original size:', img.width, 'x', img.height);
    
    const w = img.width;
    const h = img.height;
    
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const color = img.getPixelColor(x, y);
        let r = (color >> 24) & 0xff;
        let g = (color >> 16) & 0xff;
        let b = (color >> 8) & 0xff;
        let a = color & 0xff;
        
        // 1. Bottom crop fade (y from 72% to 100%)
        const bottomFadeStart = Math.floor(h * 0.72);
        if (y > bottomFadeStart) {
          const factor = (h - y) / (h - bottomFadeStart);
          a = Math.round(a * factor);
        }
        
        // 2. Left edge fade (x from 0% to 10%)
        const leftFadeEnd = Math.floor(w * 0.10);
        if (x < leftFadeEnd) {
          const factor = x / leftFadeEnd;
          a = Math.round(a * factor);
        }
        
        // 3. Right edge fade (x from 90% to 100%)
        const rightFadeStart = Math.floor(w * 0.90);
        if (x > rightFadeStart) {
          const factor = (w - x) / (w - rightFadeStart);
          a = Math.round(a * factor);
        }
        
        // 4. Noise cleanup: if alpha is very low, make it 0 to avoid shadow glow square
        if (a < 12) {
          a = 0;
        }
        
        // Write the pixel back using unsigned math
        const newColor = r * 0x1000000 + g * 0x10000 + b * 0x100 + a;
        img.setPixelColor(newColor, x, y);
      }
    }
    
    // Write back the processed image
    await img.write('src/assets/Dara-hero.png');
    console.log('Successfully processed and saved src/assets/Dara-hero.png');
  } catch (err) {
    console.error(err);
  }
}

main();
