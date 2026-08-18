import fs from 'fs';
import path from 'path';

const scratchDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\261886db-344c-4aa3-b690-839111d2e7ad\\scratch';
const html = fs.readFileSync(path.join(scratchDir, 'scratch_site.html'), 'utf-8');
const allCss = fs.readFileSync(path.join(scratchDir, 'all_styles.css'), 'utf-8');

console.log('HTML loaded, length:', html.length);
console.log('CSS loaded, length:', allCss.length);

// Let's find all CSS rules inside @media (max-width: 809.98px)
const mobileBlocks = [];
let pos = 0;
while ((pos = allCss.indexOf('@media', pos)) !== -1) {
  const openBrace = allCss.indexOf('{', pos);
  const mediaHeader = allCss.substring(pos, openBrace);
  
  if (mediaHeader.includes('809')) {
    let depth = 1;
    let curr = openBrace + 1;
    while (curr < allCss.length && depth > 0) {
      if (allCss[curr] === '{') depth++;
      else if (allCss[curr] === '}') depth--;
      curr++;
    }
    const blockContent = allCss.substring(openBrace + 1, curr - 1);
    mobileBlocks.push({
      header: mediaHeader.trim(),
      content: blockContent.trim()
    });
    pos = curr;
  } else {
    pos = openBrace + 1;
  }
}

console.log('Extracted mobile media query blocks:', mobileBlocks.length);
fs.writeFileSync('mobile_framer_rules.css', mobileBlocks.map(b => `/* ${b.header} */\n${b.content}`).join('\n\n'), 'utf-8');
console.log('Saved mobile_framer_rules.css');
