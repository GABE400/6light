const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertSvgToPng() {
  const svgPath = path.join(__dirname, '../public/6 Light Media email signature_Holiday.svg');
  const pngPath = path.join(__dirname, '../public/6-light-signature.png');

  try {
    console.log('Converting SVG to PNG...');
    console.log('Input:', svgPath);
    console.log('Output:', pngPath);

    // Check if SVG exists
    if (!fs.existsSync(svgPath)) {
      console.error('SVG file not found:', svgPath);
      process.exit(1);
    }

    // Convert SVG to PNG with high quality
    await sharp(svgPath)
      .resize(1200, 400, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png({
        quality: 100,
        compressionLevel: 9
      })
      .toFile(pngPath);

    console.log('✅ Conversion successful!');
    console.log('PNG saved to:', pngPath);

    // Get file size
    const stats = fs.statSync(pngPath);
    console.log('File size:', (stats.size / 1024).toFixed(2), 'KB');

  } catch (error) {
    console.error('❌ Error converting SVG to PNG:', error);
    process.exit(1);
  }
}

convertSvgToPng();
