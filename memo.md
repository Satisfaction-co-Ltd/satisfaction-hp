# 実装計画

## トップページ (`/top`)

## 会社概要 (`/company`)

## 事業紹介 (`/business`)

## 採用 (`/recruit`)

## お問い合わせ (`/contact`)

---

| Page     | Purpose            | Text                                                                                                          | Notes                        | Import Example                                                     |
| -------- | ------------------ | ------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------ |
| TOP      | 採用・ブランド訴求 | WORK STYLISH. LIVE PROUD. / 誇りを感じる働き方。家族に誇れる会社へ。 / 本気なエンジニアが、世界を変えていく。 | 白基調・余白広め・CTA2段構成 | import HeroSaaS from '@/components/hero/HeroSaaS';                 |
| TOP      | 価値訴求           | 案件選択 / 透明性 / リモート / 紹介文化                                                                       | 3x3カード構成                | import FeaturesGrid from '@/components/features/FeaturesGrid';     |
| TOP      | 信頼の可視化       | 紹介率 / 定着率 / 平均単価                                                                                    | 数値で実績を見せる           | import StatsCounter from '@/components/stats/StatsCounter';        |
| TOP      | 仲間の声           | 誇れる仲間がいる。紹介でつながる。                                                                            | カルーセル形式               | import Testimonials from '@/components/testimonials/Testimonials'; |
| TOP      | CTA                | あなたも、誇れる働き方を。想いや希望を聞かせてください。                                                      | オレンジボタン2段            | import CTABand from '@/components/cta/CTABand';                    |
| COMPANY  | 信頼・理念         | 代表メッセージと理念                                                                                          | 背景白・写真推奨             | import AboutMessage from '@/components/about/AboutMessage';        |
| COMPANY  | 沿革               | 2019→2025（第二創業期）                                                                                       | 年表形式                     | import Timeline from '@/components/about/Timeline';                |
| BUSINESS | 事業紹介           | SES事業 / 開発請負事業                                                                                        | 2列カード構成                | import ServicesCards from '@/components/services/ServicesCards';   |
| BUSINESS | プロセス           | 面談→提案→参画→伴走                                                                                           | 安心感・シンプル導線         | import Steps from '@/components/process/Steps';                    |
| RECRUIT  | 社員の声           | 紹介で増える仲間                                                                                              | 温かみのある構成             | import Testimonials from '@/components/testimonials/Testimonials'; |
| RECRUIT  | カルチャー         | 楽しく / カッコよく / 誠実 / 透明 / 感謝                                                                      | 6項目グリッド                | import CultureGrid from '@/components/culture/CultureGrid';        |
| RECRUIT  | FAQ                | 給与 / 案件選択 / 評価 / 育成 / サポート                                                                      | 10項目目安                   | import Accordion from '@/components/faq/Accordion';                |
| RECRUIT  | 応募               | LINEまたはフォームで応募                                                                                      | SP下固定ボタン               | import ApplicationForm from '@/components/forms/ApplicationForm';  |
| CONTACT  | 問い合わせ         | 法人 / エンジニア向けフォーム                                                                                 | reCAPTCHA導入                | import ContactForm from '@/components/forms/ContactForm';          |
| CONTACT  | フッター           | 住所 / 連絡先 / 個人情報保護方針                                                                              | 法務リンク                   | import Footer from '@/components/footer/Footer';                   |

| Page     | Purpose            | Texap DEMO | Section      | Component       | PC Image                        | SP Image                        | Text                                                                                                          | Notes                        | Import Example                                                     |
| -------- | ------------------ | ---------- | ------------ | --------------- | ------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------ |
| TOP      | 採用・ブランド訴求 | DEMO2      | Hero         | HeroSaaS        | images/TOP_Hero_PC.png          | images/TOP_Hero_SP.png          | WORK STYLISH. LIVE PROUD. / 誇りを感じる働き方。家族に誇れる会社へ。 / 本気なエンジニアが、世界を変えていく。 | 白基調・余白広め・CTA2段構成 | import HeroSaaS from '@/components/hero/HeroSaaS';                 |
| TOP      | 価値訴求           | DEMO1      | Features     | FeaturesGrid    | images/TOP_Features_PC.png      | images/TOP_Features_SP.png      | 案件選択 / 透明性 / リモート / 紹介文化                                                                       | 3x3カード構成                | import FeaturesGrid from '@/components/features/FeaturesGrid';     |
| TOP      | 信頼の可視化       | DEMO4      | Stats        | StatsCounter    | images/TOP_Stats_PC.png         | images/TOP_Stats_SP.png         | 紹介率 / 定着率 / 平均単価                                                                                    | 数値で実績を見せる           | import StatsCounter from '@/components/stats/StatsCounter';        |
| TOP      | 仲間の声           | DEMO6      | Testimonials | Testimonials    | images/TOP_Testimonials_PC.png  | images/TOP_Testimonials_SP.png  | 誇れる仲間がいる。紹介でつながる。                                                                            | カルーセル形式               | import Testimonials from '@/components/testimonials/Testimonials'; |
| TOP      | CTA                | DEMO2      | CTA          | CTABand         | images/TOP_CTA_PC.png           | images/TOP_CTA_SP.png           | あなたも、誇れる働き方を。想いや希望を聞かせてください。                                                      | オレンジボタン2段            | import CTABand from '@/components/cta/CTABand';                    |
| COMPANY  | 信頼・理念         | DEMO6      | CEO Message  | AboutMessage    | images/COMPANY_Message_PC.png   | images/COMPANY_Message_SP.png   | 代表メッセージと理念                                                                                          | 背景白・写真推奨             | import AboutMessage from '@/components/about/AboutMessage';        |
| COMPANY  | 沿革               | DEMO8      | Timeline     | Timeline        | images/COMPANY_Timeline_PC.png  | images/COMPANY_Timeline_SP.png  | 2019→2025（第二創業期）                                                                                       | 年表形式                     | import Timeline from '@/components/about/Timeline';                |
| BUSINESS | 事業紹介           | DEMO1      | Services     | ServicesCards   | images/BUSINESS_Services_PC.png | images/BUSINESS_Services_SP.png | SES事業 / 開発請負事業                                                                                        | 2列カード構成                | import ServicesCards from '@/components/services/ServicesCards';   |
| BUSINESS | プロセス           | DEMO2      | Process      | Steps           | images/BUSINESS_Process_PC.png  | images/BUSINESS_Process_SP.png  | 面談→提案→参画→伴走                                                                                           | 安心感・シンプル導線         | import Steps from '@/components/process/Steps';                    |
| RECRUIT  | 社員の声           | DEMO6      | Voices       | Testimonials    | images/RECRUIT_Voices_PC.png    | images/RECRUIT_Voices_SP.png    | 紹介で増える仲間                                                                                              | 温かみのある構成             | import Testimonials from '@/components/testimonials/Testimonials'; |
| RECRUIT  | カルチャー         | DEMO6      | Culture      | CultureGrid     | images/RECRUIT_Culture_PC.png   | images/RECRUIT_Culture_SP.png   | 楽しく / カッコよく / 誠実 / 透明 / 感謝                                                                      | 6項目グリッド                | import CultureGrid from '@/components/culture/CultureGrid';        |
| RECRUIT  | FAQ                | DEMO2      | FAQ          | Accordion       | images/RECRUIT_FAQ_PC.png       | images/RECRUIT_FAQ_SP.png       | 給与 / 案件選択 / 評価 / 育成 / サポート                                                                      | 10項目目安                   | import Accordion from '@/components/faq/Accordion';                |
| RECRUIT  | 応募               | DEMO7      | Form         | ApplicationForm | images/RECRUIT_Form_PC.png      | images/RECRUIT_Form_SP.png      | LINEまたはフォームで応募                                                                                      | SP下固定ボタン               | import ApplicationForm from '@/components/forms/ApplicationForm';  |
| CONTACT  | 問い合わせ         | DEMO9      | Form         | ContactForm     | images/CONTACT_Form_PC.png      | images/CONTACT_Form_SP.png      | 法人 / エンジニア向けフォーム                                                                                 | reCAPTCHA導入                | import ContactForm from '@/components/forms/ContactForm';          |
| CONTACT  | フッター           | DEMO9      | Footer       | Footer          | images/CONTACT_Footer_PC.png    | images/CONTACT_Footer_SP.png    | 住所 / 連絡先 / 個人情報保護方針                                                                              | 法務リンク                   | import Footer from '@/components/footer/Footer';                   |
