# 株式会社サティスファクション コーポレートサイト - ディレクトリ構成

## 概要

本プロジェクトは、**Next.js 14**（App Router）を使用した株式会社サティスファクションのコーポレートサイトです。  
Texapテンプレートをベースにカスタマイズされています。

- **フレームワーク**: Next.js 14.2.13
- **言語**: TypeScript
- **スタイリング**: CSS / SCSS / Bootstrap
- **デプロイ先**: Netlify

---

## ディレクトリ構成

```
satisfaction-hp/
│
├── .git/                                       # Gitリポジトリ（バージョン管理）
│
├── .next/                                      # Next.jsビルド出力（自動生成、.gitignore対象）
│
├── .old/                                       # 旧HPの内容
│
├── .templates/                                 # テンプレート原本 (zipファイル)
│
├── .vscode/                                    # VSCode設定
│
├── .gitignore                                  # Git無視ファイル設定
├── .prettierrc                                 # Prettier設定（フォーマットルール）
├── .prettierignore                             # Prettier無視ファイル設定
│
├── docs/                                       # プロジェクトドキュメント
│   └── index.md                                # 本ドキュメント（ディレクトリ構成の説明）
│
├── documentation/                              # テンプレート (texap) 付属のHTMLドキュメント
│
├── libs/                                       # 共通ライブラリ・ユーティリティ
│   └── menus.tsx                               # ナビゲーションメニューの定義（テンプレート用）
│
├── node_modules/                               # npmパッケージ（自動生成、.gitignore対象）
│
├── public/                                     # 静的ファイル（/public/x → /x でアクセス可能）
│
├── src/                                        # ソースコード
│   │
│   ├── app/ ⭐                                 # Next.js App Router（メインアプリ）
│   │   ├── layout.tsx                          # ルートレイアウト（メタデータ、フォント、共通コンポーネント）
│   │   ├── page.tsx                            # トップページ（NavBar + MainBanner）
│   │   ├── globals.css                         # グローバルスタイル
│   │   ├── demo/                               # デモページ
│   │   │   └── page.tsx
│   │   └── styles/                             # カスタムスタイル
│   │       ├── styles.css                      # メインスタイル
│   │       ├── override.css                    # 上書きスタイル
│   │       └── utility.css                     # ユーティリティクラス
│   │
│   ├── components/ ⭐                          # カスタムコンポーネント（本サイト専用）
│   │   ├── NavBar.tsx                          # ナビゲーションバー（Top, Company, Business, Recruit, Contact, Demo）
│   │   ├── MainBanner.tsx                      # メインバナー
│   │   └── MenuItem.tsx                        # メニュー項目
│   │
│   ├── _app/                                   # テンプレートページ・スタイル（参照用）
│   │   ├── layout.tsx                          # テンプレートのレイアウト
│   │   ├── page.tsx                            # テンプレートのトップページ
│   │   ├── loading.tsx                         # ローディング表示
│   │   ├── not-found.tsx                       # 404ページ
│   │   ├── globals.css                         # グローバルスタイル
│   │   ├── styles/                             # テンプレートスタイル
│   │   │   ├── bootstrap.min.css               # Bootstrap
│   │   │   ├── fontawesome.min.css             # FontAwesome
│   │   │   ├── remixicon.css                   # Remixicon
│   │   │   ├── animate.min.css                 # アニメーション
│   │   │   ├── styles.scss                     # メインスタイル（SCSS）
│   │   │   ├── styles.css                      # コンパイル済みスタイル
│   │   │   └── pages-and-components-css/       # ページ・コンポーネント固有のスタイル
│   │   ├── home-2/ 〜 home-9/                  # ホームデモページ（9種類）
│   │   ├── about-simple/                       # 会社概要（シンプル）
│   │   ├── about-modern/                       # 会社概要（モダン）
│   │   ├── features/                           # 機能紹介
│   │   ├── features-2/                         # 機能紹介2
│   │   ├── services/                           # サービス
│   │   ├── pricing/                            # 料金プラン
│   │   ├── team/                               # チーム紹介
│   │   ├── team-2/                             # チーム紹介2
│   │   ├── blog/                               # ブログ
│   │   │   ├── page.tsx                        # ブログ一覧
│   │   │   ├── details/                        # 記事詳細
│   │   │   ├── with-left-sidebar/              # 左サイドバー
│   │   │   └── with-right-sidebar/             # 右サイドバー
│   │   ├── contact/                            # お問い合わせ
│   │   ├── faq/                                # よくある質問
│   │   ├── feedback/                           # フィードバック
│   │   ├── gallery/                            # ギャラリー
│   │   ├── screenshots/                        # スクリーンショット
│   │   ├── how-it-works/                       # 使い方
│   │   ├── app-download/                       # アプリダウンロード
│   │   ├── privacy-policy/                     # プライバシーポリシー
│   │   ├── terms-conditions/                   # 利用規約
│   │   ├── sign-in/                            # サインイン
│   │   ├── sign-up/                            # サインアップ
│   │   ├── forget-password/                    # パスワード再設定
│   │   └── coming-soon/                        # 公開準備中
│   │
│   └── _components/                            # テンプレートの再利用可能なReactコンポーネント群（参照用）
│       ├── Layouts/                            # レイアウト関連
│       │   ├── NavbarStyleOne.tsx 〜 Four.tsx  # ナビバースタイル（4種）
│       │   ├── FooterStyleOne.tsx 〜 Five.tsx  # フッタースタイル（5種）
│       │   ├── MegaMenu.tsx                    # メガメニュー
│       │   ├── MenuItem.tsx                    # メニュー項目
│       │   ├── GoTop.tsx                       # トップに戻るボタン
│       │   └── AosAnimation.tsx                # AOSアニメーション初期化
│       ├── HomeDemo1/ 〜 HomeDemo9/            # ホームデモ用コンポーネント
│       │   ├── MainBanner.tsx                  # メインバナー
│       │   ├── Features.tsx                    # 機能紹介
│       │   ├── KeyFeatures.tsx                 # 主要機能
│       │   ├── BestAppEver.tsx                 # ベストアプリ紹介
│       │   └── IntroVideo.tsx                  # 紹介動画
│       ├── Common/                             # 共通コンポーネント
│       │   ├── AppDownloadStyle1.tsx 〜 3.tsx  # アプリダウンロード
│       │   ├── AppProgressStyle1.tsx 〜 4.tsx  # 進捗表示
│       │   ├── FreeTrialStyle1.tsx 〜 3.tsx    # 無料トライアル
│       │   ├── FunfactStyleOne.tsx / Two.tsx   # 実績数値
│       │   ├── PartnerStyle1.tsx 〜 3.tsx      # パートナーロゴ
│       │   ├── PageBannerStyle1.tsx 〜 3.tsx   # ページバナー
│       │   ├── SoftwareIntegrations.tsx        # ソフトウェア連携
│       │   ├── TeamMemberStyle1.tsx / 2.tsx    # チームメンバー
│       │   ├── BlogPost.tsx                    # ブログ記事
│       │   └── IntroVideo.tsx                  # 紹介動画
│       ├── AboutUs/                            # 会社概要
│       ├── AppScreenshots/                     # アプリスクリーンショット（6スタイル）
│       ├── Auth/                               # 認証フォーム
│       ├── Blog/                               # ブログ関連
│       ├── ComingSoon/                         # カウントダウン
│       ├── Contact/                            # お問い合わせ
│       ├── Faq/                                # FAQ
│       ├── Features/                           # 機能紹介
│       ├── Feedbacks/                          # クライアントフィードバック（6スタイル）
│       ├── Gallery/                            # ギャラリー
│       ├── HowItWorks/                         # 使い方
│       ├── PricingPlan/                        # 料金プラン（5スタイル）
│       ├── PrivacyPolicy/                      # プライバシーポリシー
│       ├── Services/                           # サービス
│       ├── Team/                               # チーム
│       └── TermsConditions/                    # 利用規約
│
├── package.json                                # 依存関係とnpmスクリプト
├── package-lock.json                           # 依存関係のロックファイル
├── next.config.mjs                             # Next.js設定
├── next-env.d.ts                               # Next.js TypeScript定義（自動生成）
├── tsconfig.json                               # TypeScript設定（パスエイリアス @/ → src/）
├── tsconfig.tsbuildinfo                        # TypeScriptビルド情報（自動生成）
├── eslint.config.js                            # ESLint設定
├── README.md                                   # プロジェクト概要・注意事項
├── README.nextjs.md                            # Next.jsのREADME（テンプレート由来）
└── memo.md                                     # 開発メモ
```

**凡例:**

- ⭐ ... 現在メインで使用しているディレクトリ
- `_app/`, `_components/` ... テンプレート由来
- `.old/` ... テンプレートオリジナルのバックアップ（変更前の状態を保持）

---

## npmスクリプト

```bash
npm run dev       # 開発サーバー起動
npm run build     # プロダクションビルド
npm run start     # プロダクションサーバー起動
npm run lint      # Lintチェック
npm run format    # コードフォーマット
```

---

## パスエイリアス

`tsconfig.json` で `@/*` → `src/*` が設定されています。

```tsx
import NavBar from '@/components/NavBar'
import GoTop from '@/_components/Layouts/GoTop'
```

---

## 開発時の注意事項

> [!CAUTION]
> 本HPは、Netlifyの無料プランでデプロイを行う都合上、publicリポジトリとしている。  
> コードとissueの内容がすべてインターネット上の誰もが閲覧可能な状態であるため、**決して社外秘の情報をコミットしないこと**。

> [!CAUTION]
> `_app/`, `_components/` はテンプレート由来の参照用ディレクトリなため、
> 流用したい内容をコピーして、 `src/app` や `src/components` 配下に作成したコンポーネントにコピペする
