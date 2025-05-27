import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: '900',
          borderRadius: '20px',
          fontFamily: 'Arial Black, Arial, sans-serif',
          letterSpacing: '-4px',
          lineHeight: '1',
        }}
      >
        RD
      </div>
    ),
    {
      ...size,
    }
  )
} 