import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Super Computer College of IT — Best Computer Institute in Fatehpur';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #181c20 0%, #2a3000 50%, #556500 100%)',
          fontFamily: 'Inter, system-ui, sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              fontWeight: 800,
              color: '#b9d719',
              letterSpacing: '6px',
              textTransform: 'uppercase',
            }}
          >
            Est. 2010 • Fatehpur, UP
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.1,
              maxWidth: '900px',
            }}
          >
            Super Computer College of IT
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#b9d719',
              fontWeight: 700,
              textAlign: 'center',
              marginTop: '10px',
            }}
          >
            Best Computer Institute & IT College in Fatehpur
          </div>
          <div
            style={{
              display: 'flex',
              gap: '30px',
              marginTop: '30px',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 600,
            }}
          >
            <span>ADCA • DCA • BCA • MCA • BBA • MBA • Paramedical</span>
          </div>
          <div
            style={{
              marginTop: '20px',
              background: '#b9d719',
              color: '#181c20',
              padding: '12px 32px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 800,
              letterSpacing: '2px',
            }}
          >
            100% PLACEMENT SUPPORT
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
