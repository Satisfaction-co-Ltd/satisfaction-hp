import React from 'react';

const SesDetail = () => (
  <div className="detail-inner fade-in">
    <span className="status-label" style={{ background: '#e3f2fd', color: '#1976d2' }}>CORE BUSINESS</span>
    <h3 className="mb-3">透明性を追求するエンジニア支援</h3>
    <p className="detail-lead">
      余計なノイズを削ぎ落とし、エンジニアリングに純粋な喜びを。 <br />
      不透明な構造やキャリアの停滞を解消し、技術者が最もパフォーマンスを発揮できる『クリアな関係性』を構築しました。<br />
      あなたが技術を楽しみ、成長し続けることが、クライアントと社会への最大貢献になると信じています。
    </p>
    <div className="feature-grid">
      <div className="feature-item">
        <i className="ri-node-tree" style={{ color: '#1976d2' }}></i>
        <h5>商流の完全公開</h5>
        <p>エンド直、または浅い商流のみを扱い、不透明な多重構造を徹底的に排除しています。</p>
      </div>
      <div className="feature-item">
        <i className="ri-user-follow-line" style={{ color: '#1976d2' }}></i>
        <h5>案件選択の優先権</h5>
        <p>会社都合ではなくエンジニアの「やりたい」を最優先し、最適なプロジェクトをマッチング。</p>
      </div>
      <div className="feature-item">
        <i className="ri-hand-coin-line" style={{ color: '#1976d2' }}></i>
        <h5>並走サポート</h5>
        <p>担当が定期的に寄り添い、悩みや不安を共有。離れていてもチームの一員として支え合う、心理的安全性を大切にしています。</p>
      </div>
    </div>
  </div>
);

export default SesDetail;