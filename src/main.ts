import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { render } from "@react-email/render";

import EmailConfirmation from "./emails/email-confirmation";

const templates = [
  {
    fileName: "email-confirmation.html",
    render: () =>
      EmailConfirmation({
        code: "{{ code }}",
      }),
  },
];

async function main() {
  const outputDirectory = join(process.cwd(), "dist");

  await mkdir(outputDirectory, {
    recursive: true,
  });

  for (const template of templates) {
    const html = await render(template.render());

    await writeFile(join(outputDirectory, template.fileName), html, "utf-8");
  }
}

void main();
