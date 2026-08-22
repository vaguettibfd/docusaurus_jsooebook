import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const bookOrderPath = path.join(projectRoot, 'ebook', 'book-order.json');

if (!fs.existsSync(bookOrderPath)) {
  console.error('❌ Arquivo ebook/book-order.json não encontrado.');
  process.exit(1);
}

const bookOrder = JSON.parse(
  fs.readFileSync(bookOrderPath, 'utf8')
);

console.log('\n📚 Verificando arquivos do e-book...\n');

let hasError = false;

bookOrder.forEach((relativePath, index) => {
  const absolutePath = path.join(projectRoot, relativePath);

  if (fs.existsSync(absolutePath)) {
    console.log(`✅ ${index + 1}. ${relativePath}`);
  } else {
    console.error(`❌ ${index + 1}. ${relativePath}`);
    hasError = true;
  }
});

console.log('');

if (hasError) {
  console.error('❌ Existem arquivos ausentes no book-order.json.');
  process.exit(1);
}

console.log(
  `✅ Verificação concluída: ${bookOrder.length} arquivos encontrados.`
);