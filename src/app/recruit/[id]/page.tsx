"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';
import PageBanner from '@/components/PageBanner';

const JOB_DETAILS = {
  'frontend': {
    title: 'フロントエンドエンジニア',
    description: '多岐にわたる開発分野でWebサービスのフロントエンドの設計、開発、運用を担当して頂きます。',
    welcomeSkills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'デザインシステムの構築', 'Storybook', 'パフォーマンス最適化', 'Webアクセシビリティへの理解', 'テスト駆動開発 (Jest/Cypress)'],
    techStackGroup: {
      title: '開発環境一例',
      subItems: [
        { label: '開発言語', list: 'JavaScript、TypeScript、HTML5、CSS、SQL他' },
        { label: 'フレームワーク', list: 'React、Next.js、Vue.js、Nuxt.js、Storybook他' },
        { label: 'データベース', list: 'MySQL、DynamoDB、PostgreSQL、Oracle他' },
      ]
    },
    mustSkills: [
      '開発実務経験3年以上',
      'JAVA/PHP/Ruby/Python等でのWeb開発経験',
      'Webアプリケーションの開発経験'
    ],
    personality: [
      '技術への好奇心を原動力に、自らを継続的にアップデートできる方',
      'プロダクトの価値最大化に向け、自発的な提言と建設的なアクションが取れる方',
      'プロジェクトを自分事として捉え、強い当事者意識を持って完遂できる方',
      '多様な意見を真摯に受け入れ、チームの心理的安全性を高める対話ができる方',
      '仲間のフィードバックを糧に、自身の思考や振る舞いを柔軟に変化させられる方',
      '困難な課題に対してもポジティブに向き合い、論理的な解決策を見出せる方',
    ],
  },
  'smartphone-app': {
    title: 'スマホ・ネイティブアプリエンジニア',
    description: '多岐にわたる開発分野において、スマートデバイス向けアプリケーションの設計、開発、運用を担当していただきます。',
    welcomeSkills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'デザインシステムの構築', 'Storybook', 'パフォーマンス最適化', 'Webアクセシビリティへの理解', 'テスト駆動開発 (Jest/Cypress)'],
    techStackGroup: {
      title: '開発環境一例',
      subItems: [
        { label: '開発言語', list: 'Swift、Kotlin、Dart (Flutter)、JavaScript、TypeScript、Objective-C、Java他' },
        { label: 'フレームワーク', list: 'Flutter、React Native、SwiftUI、Jetpack Compose、Unity他' },
        { label: 'データベース', list: 'SQLite、Realm、Firebase Realtime Database、MySQL他' },
        { label: 'ツール/プラットフォーム', list: 'Firebase、Git、Xcode、Android Studio、Fastlane他' },
      ]
    },
    mustSkills: [
      '開発実務経験3年以上',
      'iOS または Android 向けアプリケーションの開発経験',
      'Flutter/Swift/objective-c/Kotlin等でのアプリケーション開発',
      '外部APIと連携するアプリケーションの実装経験'
    ],
    personality: [
      '技術への好奇心を原動力に、自らを継続的にアップデートできる方',
      'プロダクトの価値最大化に向け、自発的な提言と建設的なアクションが取れる方',
      'プロジェクトを自分事として捉え、強い当事者意識を持って完遂できる方',
      '多様な意見を真摯に受け入れ、チームの心理的安全性を高める対話ができる方',
      '仲間のフィードバックを糧に、自身の思考や振る舞いを柔軟に変化させられる方',
      '困難な課題に対してもポジティブに向き合い、論理的な解決策を見出せる方',
    ],
  },
  'backend': {
    title: 'バックエンドエンジニア',
    description: '多岐にわたる開発分野でWebサービスのバックエンド側の設計、開発、運用を担当して頂きます。',
    welcomeSkills: ['Go', 'Node.js', 'AWS / GCP / Azure', 'Docker / Kubernetes', 'マイクロサービスアーキテクチャ', 'gRPC / GraphQL', 'Terraform (IaC)', 'データベースのパフォーマンスチューニング'],
    techStackGroup: {
      title: '開発環境一例',
      subItems: [
        { label: '開発言語', list: 'Go、Node.js、Java、PHP、Python、Ruby、Rust他' },
        { label: 'フレームワーク', list: 'Gin、Echo、NestJS、Spring Boot、Laravel、Ruby on Rails他' },
        { label: 'データベース', list: 'PostgreSQL、MySQL、Redis、MongoDB、DynamoDB他' },
        { label: '環境・ツール', list: 'AWS、GCP、Docker、Kubernetes、gRPC、GraphQL他' },
      ]
    },
    mustSkills: [
      '開発実務経験3年以上',
      'Go/Java/PHP/Ruby/Python等を用いたサーバーサイド開発経験',
      'RDBMSの設計・運用、およびクエリ最適化に関する実務知識',
      'RESTful APIの設計・実装経験',
      'Gitを用いたチーム開発およびコードレビューの経験'
    ],
    personality: [
      '技術への好奇心を原動力に、自らを継続的にアップデートできる方',
      'プロダクトの価値最大化に向け、自発的な提言と建設的なアクションが取れる方',
      'プロジェクトを自分事として捉え、強い当事者意識を持って完遂できる方',
      '多様な意見を真摯に受け入れ、チームの心理的安全性を高める対話ができる方',
      '仲間のフィードバックを糧に、自身の思考や振る舞いを柔軟に変化させられる方',
      '困難な課題に対してもポジティブに向き合い、論理的な解決策を見出せる方',
    ],
  },
  'fullstack': {
    title: 'フルスタックエンジニア',
    description: '特定の領域に限定されることなく、設計から実装、インフラ構築まで全工程に渡り担当していただきます。',
    welcomeSkills: ['Next.js', 'Go', 'AWS / Google Cloud', 'Serverless Architecture', 'CI/CDパイプラインの構築・運用', '技術選定の主導経験', 'Flutter / React Native でのモバイル開発', '要件定義などの上流工程経験'],
    techStackGroup: {
      title: '開発環境一例',
      subItems: [
        { label: 'フロントエンド', list: 'TypeScript、React、Next.js、Tailwind CSS他' },
        { label: 'バックエンド', list: 'Node.js (NestJS)、Go、Python (FastAPI)他' },
        { label: 'インフラ', list: 'AWS、Google Cloud、Vercel、Terraform、Docker他' },
        { label: 'データベース', list: 'PostgreSQL、MySQL、Firebase、Redis他' },
      ]
    },
    mustSkills: [
      '開発実務経験3年以上',
      'フロントエンドおよびバックエンド両領域における実務開発経験',
      'クラウドプラットフォーム（AWS/GCP等）を用いたインフラ構築・運用経験',
      '要件定義から技術選定、実装、デプロイまでの一貫した経験',
      '変化に柔軟に対応し、必要に応じて新しい技術を習得・適用できる能力'
    ],
    personality: [
      '技術への好奇心を原動力に、自らを継続的にアップデートできる方',
      'プロダクトの価値最大化に向け、自発的な提言と建設的なアクションが取れる方',
      'プロジェクトを自分事として捉え、強い当事者意識を持って完遂できる方',
      '多様な意見を真摯に受け入れ、チームの心理的安全性を高める対話ができる方',
      '仲間のフィードバックを糧に、自身の思考や振る舞いを柔軟に変化させられる方',
      '困難な課題に対してもポジティブに向き合い、論理的な解決策を見出せる方',
    ],
  },
  'pm-lead': {
    title: 'テックリード / PM',
    description: '技術的なリーダーシップを発揮して開発チームを牽引を担当していただきます。',
    welcomeSkills: ['アジャイル / スクラム開発の導入・推進経験', 'エンジニアの採用・評価制度の設計', 'ステークホルダーとの折衝・調整業務', '大規模トラフィック環境の運用経験', '技術的負債の解消に向けた戦略立案'],
    techStackGroup: {
      title: '管理・開発環境',
      subItems: [
        { label: '管理・手法', list: 'アジャイル、スクラム開発、Jira、Confluence、Notion、Slack' },
        { label: '品質・分析', list: 'GitHub Actions、SonarQube、Datadog、Google Analytics他' },
        { label: '技術領域', list: '全社標準の技術選定、アーキテクチャ設計、コード品質管理' },
      ]
    },
    mustSkills: [
      '開発実務経験3年以上',
      '開発チームにおけるリーダーシップ、またはエンジニアリングマネジメントの経験',
      '大規模トラフィックや複雑なドメインを持つシステムのアーキテクチャ設計経験',
      '非エンジニア（PM/デザイナー/ステークホルダー）との円滑な調整・折衝能力',
      'コードレビューを通じた品質管理、および技術的負債の解消に向けた戦略立案'
    ],
    personality: [
      '技術への好奇心を原動力に、自らを継続的にアップデートできる方',
      'プロダクトの価値最大化に向け、自発的な提言と建設的なアクションが取れる方',
      'プロジェクトを自分事として捉え、強い当事者意識を持って完遂できる方',
      '多様な意見を真摯に受け入れ、チームの心理的安全性を高める対話ができる方',
      '仲間のフィードバックを糧に、自身の思考や振る舞いを柔軟に変化させられる方',
      '困難な課題に対してもポジティブに向き合い、論理的な解決策を見出せる方',
    ],
  },
  'infrastructure': {
    title: 'インフラエンジニア',
    description: 'サービスの安定稼働を支える基盤構築から、IaCを用いた自動化、セキュリティの強化、パフォーマンス改善などを担当いただきます。',
    techStackGroup: {
      title: '開発環境一例',
      subItems: [
        { label: 'クラウド', list: 'AWS (EKS, Lambda, RDS等)、GCP (GKE, CloudRun等)、Azure' },
        { label: 'OS', list: 'Windows、Linux' },
        { label: 'データベース', list: 'MySQL、 PostgreSQL、Oracle' },
      ]
    },
    mustSkills: [
      '開発実務経験3年以上',
      'クラウドプラットフォーム（AWS/GCP等）におけるインフラ設計・構築・運用経験',
      'Linuxサーバーの構築、チューニング、およびトラブルシューティングの知識',
      'CI/CDパイプラインの構築・運用による開発プロセスの自動化経験'
    ],
    welcomeSkills: [],
    personality: [
      '技術への好奇心を原動力に、自らを継続的にアップデートできる方',
      'プロダクトの価値最大化に向け、自発的な提言と建設的なアクションが取れる方',
      'プロジェクトを自分事として捉え、強い当事者意識を持って完遂できる方',
      '多様な意見を真摯に受け入れ、チームの心理的安全性を高める対話ができる方',
      '仲間のフィードバックを糧に、自身の思考や振る舞いを柔軟に変化させられる方',
      '困難な課題に対してもポジティブに向き合い、論理的な解決策を見出せる方',
    ],
  },
  'sap': {
    title: 'SAPコンサルタント',
    description: 'SAP製品を用いた基幹システムの導入、アドオン開発プロジェクト等を担当していただきます。',
    techStackGroup: {
      title: '開発環境一例',
      subItems: [
        { label: 'モジュール', list: 'FI、CO、SD、MM、PP、WM、HR他' },
        { label: '言語・技術', list: 'ABAP、SAPUI5、Fiori、Java、SQL他' },
        { label: 'プラットフォーム', list: 'SAP S/4HANA、SAP BTP、Cloud / On-premise' },
        { label: 'ツール', list: 'Eclipse (ADT)、SAP Business Application Studio、SAP GUI' },
      ]
    },
    mustSkills: [
      '開発実務経験3年以上',
      'SAPの導入、開発、または保守運用の実務経験',
      'ABAPを用いた設計・開発の実務経験',
      'ビジネスプロセスを理解し、要件定義から携わりたい意欲'
    ],
    welcomeSkills: [],
    personality: [
      '技術への好奇心を原動力に、自らを継続的にアップデートできる方',
      'プロダクトの価値最大化に向け、自発的な提言と建設的なアクションが取れる方',
      'プロジェクトを自分事として捉え、強い当事者意識を持って完遂できる方',
      '多様な意見を真摯に受け入れ、チームの心理的安全性を高める対話ができる方',
      '仲間のフィードバックを糧に、自身の思考や振る舞いを柔軟に変化させられる方',
      '困難な課題に対してもポジティブに向き合い、論理的な解決策を見出せる方',
    ],
  }
};

export type JobId = keyof typeof JOB_DETAILS;

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const data = JOB_DETAILS[params.id as JobId];

  if (!data) return <div className="job-not-found">Position not found.</div>;

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    router.back();
  };

  return (
    <>
      <NavBar />
      
      <PageBanner
        pageTitle={data.title}
        homePageUrl="/"
        homePageText="Top"
        activePageText="採用詳細"
      />

      <section className="job-detail-area ptb-100">
        <div className="container">
          <a href="#" onClick={handleBack} className="back-to-list">
            <i className="ri-arrow-left-line"></i> 戻る
          </a>

          <table className="custom-recruitment-table">
            <tbody>
              <tr>
                <th>職務内容</th>
                <td>{data.description}</td>
              </tr>


              {data.techStackGroup && (
                <tr>
                  <th>{data.techStackGroup.title}</th>
                  <td>
                    <div className="tech-stack-container">
                      {data.techStackGroup.subItems.map((item, index) => (
                        <div key={index} className="tech-stack-item">
                          <span className="tech-stack-label">{item.label}</span>
                          <p className="tech-stack-content">{item.list}</p>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              )}

              {data.mustSkills && (
                <tr>
                  <th>必須スキル</th>
                  <td>
                    <ul className="recruitment-list">
                      {data.mustSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}

              {data.personality && (
                <tr>
                  <th>求める人物像</th>
                  <td>
                    <ul className="recruitment-list">
                      {data.personality.map((text, i) => (
                        <li key={i}>{text}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}

              {/* 共通項目 */}
              <tr>
                <th>勤務地</th>
                <td>案件により異なりますが、フルリモート、ハイブリッド等本人希望を最大限考慮。</td>
              </tr>
              <tr>
                <th>勤務時間</th>
                <td>10:00～19:00 休憩1時間 ※案件により異なります</td>
              </tr>
              <tr>
                <th>諸手当</th>
                <td>技術書籍購入補助、PC周辺機器支給、カンファレンス参加費全額支給。</td>
              </tr>
              <tr>
                <th>給与・報酬</th>
                <td>単価連動型の報酬体系。スキル・経験に基づき決定。（￥3,000,000～10,000,000）</td>
              </tr>
              <tr>
                <th>休日・休暇</th>
                <td>完全週休2日制（土・日）、祝日、年末年始休暇、夏季休暇、有給休暇、慶弔休暇 等 <br />※ 案件により異なる場合があります</td>
              </tr>
            </tbody>
          </table>

          <div className="apply-btn-area">
            <p>このポジションに興味をお持ちいただけましたか？</p>
            <Link href="/contact" className="default-btn">
              まずはお問い合わせください
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}