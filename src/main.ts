import { mkdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { render } from '@react-email/render';

import EmailConfirmation from './emails/email-confirmation';

const templates = [
  {
    fileName: 'email-confirmation.html',

    render: () =>
      EmailConfirmation({
        digits: [
          '{{ code | string.slice 0 1 }}',
          '{{ code | string.slice 1 1 }}',
          '{{ code | string.slice 2 1 }}',
          '{{ code | string.slice 3 1 }}',
        ],

        year: '{{ year }}',
      }),
  },
];

async function main() {
  const outputDirectory = join(process.cwd(), 'dist');

  await rm(outputDirectory, {
    recursive: true,
    force: true,
  });

  await mkdir(outputDirectory, {
    recursive: true,
  });

  for (const template of templates) {
    const html = await render(template.render());

    await writeFile(join(outputDirectory, template.fileName), html, 'utf-8');
  }
}

void main();
