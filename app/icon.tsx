import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 28,
          background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: '900',
          borderRadius: '2px',
          fontFamily: 'Arial Black, Arial, sans-serif',
          letterSpacing: '-2px',
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