"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/NavBar';
import PageBanner from '@/components/PageBanner';

export const JOB_DETAILS = {
  frontend: {
    title: 'フロントエンドエンジニア',
    description: '最新のWeb技術を用いて、視覚的な美しさと直感的な操作性を両立させたユーザーインターフェースの実装・改善を推進していただきます。',
    welcomeSkills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'デザインシステムの構築', 'Storybook', 'パフォーマンス最適化', 'Webアクセシビリティへの理解', 'テスト駆動開発 (Jest/Cypress)'],
    personality: ['常にエンドユーザーの視点に立ち、UXの向上を追求できる方', '新しい技術への好奇心を持ち、チームへ積極的にナレッジを共有できる方', 'デザイナーやバックエンドエンジニアと円滑な連携が取れる方'],
  },
  backend: {
    title: 'バックエンドエンジニア',
    description: 'システムの信頼性と拡張性を重視し、複雑なビジネスロジックの実装やデータベース設計、APIの開発・運用を幅広く担当していただきます。',
    welcomeSkills: ['Go', 'Node.js', 'AWS / GCP / Azure', 'Docker / Kubernetes', 'マイクロサービスアーキテクチャ', 'gRPC / GraphQL', 'Terraform (IaC)', 'データベースのパフォーマンスチューニング'],
    personality: ['システムの安定稼働に責任を持ち、堅牢な設計を志向できる方', '抽象的な課題を整理し、論理的な解決策を導き出せる方', 'パフォーマンスやセキュリティに対して高い意識を持って取り組める方'],
  },
  fullstack: {
    title: 'フルスタックエンジニア',
    description: '特定の領域に限定されることなく、設計から実装、インフラ構築まで全工程に深く関わり、プロダクトを最短距離で形にしていただきます。',
    welcomeSkills: ['Next.js', 'Go', 'AWS / Google Cloud', 'Serverless Architecture', 'CI/CDパイプラインの構築・運用', '技術選定の主導経験', 'Flutter / React Native でのモバイル開発', '要件定義などの上流工程経験'],
    personality: ['全体最適を俯瞰し、自ら進んで技術的課題を解決できる方', 'マルチスキルを活かし、変化の速い環境に柔軟に対応できる方', 'エンジニアリングの観点からビジネス価値の最大化を考えられる方'],
  },
  'pm-lead': {
    title: 'テックリード / PM候補',
    description: '技術的なリーダーシップを発揮して開発チームを牽引し、プロジェクトの成功とメンバーの技術的成長を同時に実現していただきます。',
    welcomeSkills: ['アジャイル / スクラム開発の導入・推進経験', 'エンジニアの採用・評価制度の設計', 'ステークホルダーとの折衝・調整業務', '大規模トラフィック環境の運用経験', '技術的負債の解消に向けた戦略立案'],
    personality: ['チーム全体のパフォーマンス最大化にコミットできる方', '心理的安全性の高いチーム作りと、適切なフィードバックができる方', '技術的合理性とビジネス上の優先順位のバランスを判断できる方'],
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

              {data.welcomeSkills && (
                <tr>
                  <th>歓迎スキル</th>
                  <td>
                    <div className="skill-badge-container">
                      {data.welcomeSkills.map(skill => (
                        <span key={skill} className="skill-badge welcome">#{skill}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              )}

              {data.personality && (
                <tr>
                  <th>求める人物像</th>
                  <td>
                    <div className="skill-badge-container">
                      {data.personality.map(person => (
                        <span key={person} className="skill-badge personality">{person}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              )}

              {/* 共通項目 */}
              <tr>
                <th>勤務地</th>
                <td>案件により異なりますが、フルリモート、ハイブリッド等本人希望を最大限考慮。</td>
              </tr>
              <tr>
                <th>諸手当</th>
                <td>技術書籍購入補助、PC周辺機器支給、カンファレンス参加費全額支給。</td>
              </tr>
              <tr>
                <th>給与・報酬</th>
                <td>単価連動型の透明な報酬体系。スキル・経験に基づき決定。</td>
              </tr>
              <tr>
                <th>休日・休暇</th>
                <td>完全週休2日制（土・日）、祝日、年末年始休暇、夏季休暇、有給休暇、慶弔休暇 等</td>
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