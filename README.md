# capsule-vercel

株式会社CAPSULEのビジネス用プロジェクトリポジトリ。

## 構成

```
capsule-vercel/
└── corporate/          # コーポレートサイト (Next.js / App Router)
```

## デプロイ

| 項目 | 値 |
|---|---|
| ホスティング | Vercel |
| Vercelアカウント | taichiyano-2607 |
| Vercelスコープ | Taichi's projects (`taichis-projects-c0f39231`) |
| Vercelプロジェクト名 | `corporate` |
| 本番URL | https://its-capsule.com |
| Root Directory (Vercel設定) | `corporate` |
| フレームワーク | Next.js |
| Node.js | 24.x |

## GitHub連携

| 項目 | 値 |
|---|---|
| GitHubリポジトリ | `CAPSULE-CORP-TOKYO/capsule-vercel` (public) |
| 自動デプロイ | `main` ブランチへのpushで自動デプロイ |

## デプロイ方法

### 自動デプロイ（推奨）
`main` ブランチにpushすると、Vercelが自動でビルド・デプロイします。

```bash
git add .
git commit -m "変更内容"
git push
```

### 手動デプロイ（CLIから直接）
```bash
cd capsule-vercel/corporate
vercel link --scope taichis-projects-c0f39231 --project corporate --yes
cd ..
vercel --prod --scope taichis-projects-c0f39231 --yes
```

※ Root Directoryが `corporate` に設定されているため、CLIデプロイはリポジトリのルートから実行してください。

## 関連アカウント

このリポジトリはビジネス用です。個人プロジェクトは別リポジトリ・別Vercelアカウントで管理しています。
詳細は `~/Develop/personal-vercel/README.md` を参照。
