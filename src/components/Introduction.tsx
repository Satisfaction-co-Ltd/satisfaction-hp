"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Process from "./Process";
import ContractDetail from "./ContractDetail";
import SesDetail from "./SesDetail";
import OwnServiceDetail from "./OwnServiceDetail";

const Introduction: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>("ses");
  const detailRef = useRef<HTMLDivElement>(null);

  const handleSelect = (id: string) => {
    setSelectedService(id);

    if (window.innerWidth < 992) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const services = [
    { 
      id: 'contract', 
      titlePC: '請負開発', 
      titleSP: '請負開発', 
      icon: 'ri-service-line', 
      color: '', 
      label: 'CONTRACT',
      summary: '請負契約による開発を行います。',
      detail: 'お客様のビジョンを形にするための受託開発。モダンなスタックを用いて、拡張性の高いシステムを構築します。',
      component: ContractDetail
    },
    { 
      id: 'ses', 
      titlePC: 'System Engineering Service事業', 
      titleSP: 'SES事業', 
      icon: 'ri-team-fill', 
      color: 'bg2', 
      label: 'SES',
      summary: '準委任契約による開発支援を行います。',
      detail: '現在、事業の9割を占める主力事業です。商流・単価の透明性を追求し、エンジニアが主役になれる環境を提供します。',
      component: SesDetail
    },
    { 
      id: 'own', 
      titlePC: '自社サービス', 
      titleSP: '自社サービス', 
      icon: 'ri-leaf-line', 
      color: '', 
      label: 'OWN SERVICE',
      summary: '自社サービスの開発、運営を行います。',
      detail: '就労支援や福祉現場の課題を解決する自社プロダクトを開発中。現場の声に寄り添ったDXを推進します。',
      component: OwnServiceDetail
    }
  ];

  // 現在選択されているサービスのデータを取得
  const currentService = services.find(s => s.id === selectedService);

  const DynamicComponent = currentService?.component;

  return (
    <>
      <div className="key-features-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">What We Do</span>
            <h2>事業内容</h2>
          </div>

          <div className="row justify-content-center">
            {services.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-6 col-sm-6 col-12 mb-3">
                <div 
                  className={`key-features-card ${item.color} ${selectedService === item.id ? 'active-panel' : ''}`}
                  onClick={() => handleSelect(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={`icon ${item.color}`}>
                    <i className={`${item.icon} ${item.id === 'ses' ? 'hue-rotate-90' : ''}`}></i>
                  </div>
                  <div className="card-content">
                    <h3 className="d-none d-lg-block">{item.titlePC}</h3>
                    <h3 className="d-lg-none">{item.titleSP}</h3>
                    <p className="d-none d-lg-block">{item.summary}</p>
                  </div>
                  <div className="mobile-arrow d-lg-none">
                    <i className="ri-arrow-right-s-line"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 詳細エリア */}
          <div ref={detailRef} className="detail-container mt-4">
            {DynamicComponent ? (
              <div className="fade-in" key={selectedService}>
                <DynamicComponent />
              </div>
            ) : (
              <div style={{ minHeight: '100px' }}></div>
            )}
          </div>
        </div>

        <div className="key-features-shape-1">
          <Image src="/images/home-7-8-9/features/shape-1.png" alt="image" width={123} height={151} />
        </div>
        <div className="key-features-shape-2">
          <Image src="/images/home-7-8-9/features/shape-2.png" alt="image" width={149} height={153} />
        </div>
      </div>
    </>
  );
};

export default Introduction;
