const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');

// Map of spacing values to halve
const transform = {
    "64": "32",
    "56": "28",
    "48": "24",
    "40": "20",
    "36": "18", 
    "32": "16",
    "28": "14",
    "24": "12",
    "20": "10",
    "16": "8",
    "12": "6"
};

let modifiedFiles = [];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Pattern to match spacing utilities for padding, margin, gap
    const regex = /\b(py|pt|pb|my|mt|mb|gap|space-y|space-x|p|m)-([0-9]+)\b/g;

    content = content.replace(regex, (match, prefix, value) => {
        if (transform[value]) {
            return `${prefix}-${transform[value]}`;
        }
        return match;
    });

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedFiles.push(file);
    }
});

console.log("Modified files:\n" + modifiedFiles.join('\n'));
