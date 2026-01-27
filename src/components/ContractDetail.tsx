'use client'

import React from 'react'

const ContractDetail = () => (
  <div className="detail-inner fade-in">
    <span className="status-label" style={{ background: '#eee', color: '#666' }}>LAUNCHING SOON</span>
    <h3 className="mb-3">共創型受託開発への挑戦</h3>
    <p className="detail-lead">
      単なる制作代行ではなく、ビジネスの「最初のエンジニア組織」として伴走。<br />
      現在、本格始動に向けた先行パートナーシップを開始しています。
    </p>
    <div className="feature-grid">
      <div className="feature-item">
        <i className="ri-quill-pen-line"></i>
        <h5>課題定義からの参画</h5>
        <p>「何を作るか」の前の、ビジネス課題の整理からエンジニアが直接対話します。</p>
      </div>
      <div className="feature-item">
        <i className="ri-code-s-slash-line"></i>
        <h5>モダンスタック保証</h5>
        <p>5年後も陳腐化しない技術選定で資産価値の高いコードを提供します。</p>
      </div>
      <div className="feature-item">
        <i className="ri-eye-line"></i>
        <h5>アジャイルな並走スタイル</h5>
        <p>開発の各段階でプロダクトを早期に共有。密なフィードバック・ループを回すことで、最適な着地点を模索します。</p>
      </div>
    </div>
  </div>
);

export default ContractDetail
