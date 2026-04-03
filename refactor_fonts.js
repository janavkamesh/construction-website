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
let modifiedFiles = [];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Regex to match <h1 ... className="..."> or <h2 etc.
    // We capture the tag name, before className, the className value, and after
    // Pattern explanation:
    // /(<(?:h[1-4]|div|span)[^>]*className=)(["'])(.*?)(["'])/gi
    // Wait, a more specific replacement for h1-h4 tags:
    content = content.replace(/(<h[1-6][^>]*className=["'])(.*?)(["'])/gi, (match, p1, p2, p3) => {
        if (!p2.includes('font-heading')) {
            return p1 + p2 + (p2.length > 0 && !p2.endsWith(' ') ? ' ' : '') + 'font-heading' + p3;
        }
        return match;
    });

    // Also look for elements with text-3xl, text-4xl, text-5xl etc that might be section titles
    // But we need to make sure we don't accidentally add it if it's already there
    // Or if it's already an h1-h4 (handled above)
    content = content.replace(/(<(?:div|span|p|a)[^>]*className=["'])(.*?)(["'])/gi, (match, p1, p2, p3) => {
        if ((p2.includes('text-3xl') || p2.includes('text-4xl') || p2.includes('text-5xl') || p2.includes('text-6xl')) && !p2.includes('font-heading')) {
            return p1 + p2 + (p2.length > 0 && !p2.endsWith(' ') ? ' ' : '') + 'font-heading' + p3;
        }
        return match;
    });

    // Also handle dynamic classes like className={`...`} or className={"..."}
    content = content.replace(/(<h[1-6][^>]*className=\{`)(.*?)(`\})/gi, (match, p1, p2, p3) => {
        if (!p2.includes('font-heading')) {
            return p1 + p2 + (p2.length > 0 && !p2.endsWith(' ') ? ' ' : '') + 'font-heading' + p3;
        }
        return match;
    });

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedFiles.push(file);
    }
});

console.log("Modified files:\n" + modifiedFiles.join('\n'));
