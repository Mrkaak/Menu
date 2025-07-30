import React from 'react';
import logo from '../../public/mr-kaakes-logo.jpeg';
import { useLanguage } from '../contexts/LanguageContext';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const { t } = useLanguage();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: 'linear-gradient(135deg, #fffbe6 0%, #f7e9c6 50%, #bfc23f 100%)' }}>
      <div
        className="flex flex-col items-center justify-center"
        style={{ minHeight: '100vh', width: '100vw' }}
      >
        <div
          className="relative flex items-center justify-center shadow-xl"
          style={{
            width: 180,
            height: 180,
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '50%',
            boxShadow: '0 8px 40px 0 rgba(191,194,63,0.18)',
            marginBottom: 28,
            animation: 'kaakes-loader-in 1.1s cubic-bezier(.4,2,.6,1)'
          }}
        >
          {/* Animated Bread SVG
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              left: '50%',
              top: '10%',
              transform: 'translate(-50%, 0)',
              zIndex: 3,
              animation: 'bounce-bread 1.2s infinite cubic-bezier(.6,0,.4,1)'
            }}
          >
            <ellipse cx="30" cy="40" rx="22" ry="12" fill="#F7E9C6" stroke="#BFC23F" strokeWidth="2" />
            <ellipse cx="30" cy="35" rx="18" ry="8" fill="#fffbe6" stroke="#BFC23F" strokeWidth="1.5" />
            <ellipse cx="22" cy="38" rx="2" ry="1.2" fill="#BFC23F" />
            <ellipse cx="38" cy="38" rx="2" ry="1.2" fill="#BFC23F" />
          </svg> */}
          <img
            src={logo}
            alt="Mr. KaaK Logo"
            className="object-contain drop-shadow-lg"
            style={{ width: 130, height: 130, borderRadius: '50%' }}
          />
          {/* Spinner with glow */}
          <span
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: 155,
              height: 155,
              borderRadius: '50%',
              border: '5px solid #BFC23F',
              borderTop: '5px solid #fff',
              boxShadow: '0 0 24px 4px #bfc23f66',
              transform: 'translate(-50%, -50%)',
              animation: 'kaakes-spin 1.2s linear infinite, glow-pulse 1.2s ease-in-out infinite',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
        </div>
        <h1 className="text-4xl font-extrabold mb-1 text-kaakesbrown tracking-wide" style={{ letterSpacing: 2 }}>Mr. KaaK</h1>
        {/* Animated loading text with inline animated dots */}
        <div className="text-kaakesbrown text-lg font-semibold flex items-center min-h-[32px]">
          <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
            Baking your order
            <span className="ml-1" style={{ display: 'inline-flex', alignItems: 'baseline', fontSize: '1em', lineHeight: 'inherit' }}>
              <span className="dot dot1" style={{ fontSize: '1em', lineHeight: 'inherit', verticalAlign: 'baseline' }}>.</span>
              <span className="dot dot2" style={{ fontSize: '1em', lineHeight: 'inherit', verticalAlign: 'baseline' }}>.</span>
              <span className="dot dot3" style={{ fontSize: '1em', lineHeight: 'inherit', verticalAlign: 'baseline' }}>.</span>
            </span>
          </span>
        </div>
        <style>{`
          @keyframes kaakes-spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
          @keyframes kaakes-loader-in {
            0% { opacity: 0; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
          .dot {
            font-size: 1.6em;
            font-weight: 900;
            opacity: 0.4;
            animation: blink 1.4s infinite both;
            line-height: 1;
            margin-left: 0.05em;
            margin-right: 0.05em;
          }
          .dot1 { animation-delay: 0s; }
          .dot2 { animation-delay: 0.2s; }
          .dot3 { animation-delay: 0.4s; }
          @keyframes blink {
            0%, 80%, 100% { opacity: 0.3; }
            40% { opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loader;