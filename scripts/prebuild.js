const fs = require('fs');
const path = require('path');

const srcDirectory = './public/project-imgs/';
const outputFile = './src/mediaDescriptors.js';

function getDirectories(srcPath) {
  return fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());
}

function getMediaFiles(directoryPath, extensions) {
  return fs.readdirSync(directoryPath).filter(file => extensions.includes(path.extname(file).toLowerCase()));
}

function generateMediaDescriptors(srcDir) {
  const mediaFolders = getDirectories(srcDir);
  let mediaMappings = {};

  mediaFolders.forEach(folder => {
    const folderPath = path.join(srcDir, folder);
    // Considered media file extensions
    const mediaFiles = getMediaFiles(folderPath, ['.jpg', '.jpeg', '.png', '.gif', '.mp4']);
    const mediaFilesWithPath = mediaFiles.map(file => `/project-imgs/${folder}/${file}`);

    mediaMappings[folder] = mediaFilesWithPath;
  });

  return `export const mediaMapping = ${JSON.stringify(mediaMappings)};\n`;

}

const mediaDescriptorsContent = generateMediaDescriptors(srcDirectory);
fs.writeFileSync(outputFile, mediaDescriptorsContent, 'utf8');