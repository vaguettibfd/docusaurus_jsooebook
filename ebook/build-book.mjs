import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();

const bookOrderPath = path.join(
  projectRoot,
  'ebook',
  'book-order.json'
);

const outputDir = path.join(
  projectRoot,
  'ebook',
  'output'
);

const outputFile = path.join(
  outputDir,
  'book.md'
);

function removeFrontmatter(content) {
  const normalizedContent = content.replace(/\r\n/g, '\n');

  if (!normalizedContent.startsWith('---\n')) {
    return normalizedContent;
  }

  const endFrontmatter = normalizedContent.indexOf(
    '\n---\n',
    4
  );

  if (endFrontmatter === -1) {
    return normalizedContent;
  }

  return normalizedContent
    .slice(endFrontmatter + 5)
    .trimStart();
}

if (!fs.existsSync(bookOrderPath)) {
  console.error(
    '❌ Arquivo ebook/book-order.json não encontrado.'
  );
  process.exit(1);
}

const bookOrder = JSON.parse(
  fs.readFileSync(bookOrderPath, 'utf8')
);

if (!Array.isArray(bookOrder) || bookOrder.length === 0) {
  console.error(
    '❌ O arquivo book-order.json está vazio ou inválido.'
  );
  process.exit(1);
}

fs.mkdirSync(outputDir, {
  recursive: true
});

const contents = [];

console.log(
  '\n📚 Construindo Markdown consolidado...\n'
);

bookOrder.forEach((relativePath, index) => {
  const absolutePath = path.join(
    projectRoot,
    relativePath
  );

  if (!fs.existsSync(absolutePath)) {
    console.error(
      `❌ Arquivo não encontrado: ${relativePath}`
    );

    process.exit(1);
  }

  const originalContent = fs.readFileSync(
    absolutePath,
    'utf8'
  );

  const cleanContent = removeFrontmatter(
    originalContent
  );

  console.log(
    `✅ ${index + 1}. ${relativePath}`
  );

  contents.push(
    cleanContent.trim()
  );
});

const separator ='\n\n';

const finalContent =
  contents.join(separator) + '\n';

fs.writeFileSync(
  outputFile,
  finalContent,
  'utf8'
);

console.log(
  '\n✅ Markdown consolidado criado com sucesso.'
);

console.log(
  `📄 ${path.relative(projectRoot, outputFile)}\n`
);