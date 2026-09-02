![build](https://github.com/planara/planara-email-templates/actions/workflows/build.yml/badge.svg)
![release](https://github.com/planara/planara-email-templates/actions/workflows/release.yml/badge.svg)
![version](https://img.shields.io/github/v/tag/planara/planara-email-templates?sort=semver)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# Planara Email Templates

Набор email-шаблонов для сервисов.

Шаблоны разрабатываются на `React Email` и `TypeScript`, после чего собираются в HTML с Scriban-плейсхолдерами для последующего рендеринга в backend-сервисах.

## Разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Готовые шаблоны сохраняются в директорию `dist`.
