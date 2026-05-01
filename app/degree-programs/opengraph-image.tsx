import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'University Degree Programs at Super Computer College of IT — Fatehpur';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(135deg, #181c20 0%, #2a3000 50%, #556500 100%)', padding: '60px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontSize: '18px', fontWeight: 800, color: '#b9d719', letterSpacing: '6px', textTransform: 'uppercase' }}>Super Computer College of IT</div>
          <div style={{ fontSize: '52px', fontWeight: 900, color: 'white', textAlign: 'center', lineHeight: 1.1 }}>University Degree Programs</div>
          <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.8)', fontWeight: 600, textAlign: 'center', marginTop: '10px', maxWidth: '700px' }}>BCA • MCA • BBA • MBA • BSc-IT • MSc-IT • MA</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
