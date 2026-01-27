import React from 'react';

const OwnServiceDetail = () => (
  <div className="detail-inner fade-in">
    <span className="status-label" style={{ background: '#e8f5e9', color: '#2e7d32' }}>IN DEVELOPMENT</span>
    <h3 className="mb-3">現場の声を届けるDXプロダクト</h3>
    <p className="detail-lead">
      まだ見ぬ『便利』を、エンジニアの熱量で具現化する。 <br />
      誰かの毎日を少しだけ楽にしたり、明日が楽しみになるような仕組みを創りたい。<br />
      私たちは、技術が持つ可能性を最大限に引き出し、社会に新しい選択肢と感動を届けるプロダクトを生み出し続けます。
    </p>
    <div className="feature-grid">
      <div className="feature-item">
        <i className="ri-heart-line" style={{ color: '#2e7d32' }}></i>
        <h5>現場ファースト設計</h5>
        <p>実際に福祉現場へ赴き、スタッフの声を聞きながら、使いやすさをゼロから追求。</p>
      </div>
      <div className="feature-item">
        <i className="ri-user-voice-line" style={{ color: '#2e7d32' }}></i>
        <h5>寄り添うUI/UX</h5>
        <p>ITに不慣れな方でも迷わない。誰もが直感的に扱える「優しいシステム」を目指します。</p>
      </div>
      <div className="feature-item">
        <i className="ri-map-pin-time-line"></i>
        <h5>マイルストーンの可視化</h5>
        <p>進捗をブラックボックスにせず、定期的なデモと報告で「今」を常にクリアに共有します。</p>
      </div>
    </div>
  </div>
);

export default OwnServiceDetail;