import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({ 
  title = 'EasyGirl (EGIRL) - Satirical Meme Token',
  description = 'EasyGirl (EGIRL) - A satirical meme token that reflects on modern relationships through blockchain technology on BSC.',
  image = '/android-chrome-512x512.png',
  url = 'https://egirl-token.vercel.app',
  type = 'website'
}: SEOProps) {
  const fullTitle = title.includes('EGIRL') || title.includes('EasyGirl') 
    ? title 
    : `${title} - EasyGirl (EGIRL)`;
  const fullImage = image.startsWith('http') ? image : `${url}${image}`;
  const fullUrl = url === '/' ? 'https://egirl-token.vercel.app' : url;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Keywords for SEO */}
      <meta name="keywords" content="EGIRL, EasyGirl, meme token, BSC, Binance Smart Chain, satirical token, blockchain" />
      <meta name="author" content="EasyGirl (EGIRL)" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="EasyGirl (EGIRL)" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@EGIRL_BSC" />
      <meta name="twitter:creator" content="@EGIRL_BSC" />
      
      {/* Additional Meta */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#FF6B9D" />
      
      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Schema.org JSON-LD for rich results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EasyGirl (EGIRL)",
          "alternateName": "EGIRL",
          "url": "https://egirl-token.vercel.app",
          "logo": "https://egirl-token.vercel.app/android-chrome-512x512.png",
          "description": description,
          "sameAs": [
            "https://x.com/EGIRL_BSC",
            "https://t.me/+N7FUuuYJIdQyMjFl"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "easygirltoken@gmail.com",
            "contactType": "Customer Service"
          }
        })}
      </script>
    </Head>
  );
}
