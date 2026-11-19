import { cp, copyFile, mkdir, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const out = resolve(root, 'dist');
await stat(resolve(out, 'cad.html'));
await copyFile(resolve(out, 'cad.html'), resolve(root, 'cad.html'));
await mkdir(resolve(root, 'cad-assets'), { recursive: true });
await cp(resolve(out, 'cad-assets'), resolve(root, 'cad-assets'), { recursive: true, force: true });
console.log('Built Part Studio files copied into the GitHub Pages root.');
