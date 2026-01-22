
"use client";

import React from "react";
import Image from "next/image";

const CtaForm: React.FC = () => {
  return (
    <>
      <div className="google-form-wrapper" style={{ textAlign: 'center', background: '#f6f6f6' }}>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSe8sdG7BWhv53QU-gOC6sccP5lbWHiGk8DD-z5HaHSpKO-F8A/viewform?embedded=true"
          width="100%"
          height="2500">
            読み込んでいます…
        </iframe>
      </div>
    </>
  );
};

export default CtaForm;


