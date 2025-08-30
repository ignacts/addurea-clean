import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Addurea - Plataforma Global de Productos Químicos Marinos",
    template: "%s | Addurea"
  },
  description: "La plataforma líder mundial para el suministro de AUS40 y Soda Cáustica marina. Conectamos barcos con proveedores certificados en más de 500 puertos mundiales.",
  keywords: [
    "AUS40",
    "Soda Cáustica", 
    "productos químicos marinos",
    "combustibles marinos de bajo azufre",
    "suministro marítimo",
    "proveedores marinos certificados",
    "IMO 2020",
    "marketplace marítimo",
    "logística naval",
    "hidróxido de sodio marino"
  ],
  authors: [{ name: "Addurea" }],
  creator: "Addurea",
  publisher: "Addurea",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://addurea.com",
    siteName: "Addurea",
    title: "Addurea - Plataforma Global de Productos Químicos Marinos",
    description: "Conectamos barcos con proveedores certificados de AUS40 y Soda Cáustica en más de 500 puertos mundiales. Cumplimiento IMO 2020 garantizado.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Addurea - Plataforma Marítima Global",
      },
      {
        url: "/og-image-square.png",
        width: 400,
        height: 400,
        alt: "Addurea Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@addurea",
    creator: "@addurea",
    title: "Addurea - Plataforma Global de Productos Químicos Marinos",
    description: "Conectamos barcos con proveedores certificados de AUS40 y Soda Cáustica worldwide. ⚓ IMO 2020 compliant",
    images: ["/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon", 
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#2563eb",
      }
    ],
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
  },
  alternates: {
    canonical: "https://addurea.com",
    languages: {
      "es-ES": "https://addurea.com/es",
      "en-US": "https://addurea.com/en",
    },
  },
  category: "Maritime Technology",
  classification: "Maritime Chemical Supply Platform",
  other: {
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Additional performance hints */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Theme and mobile optimization */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Addurea" />
        
        {/* Industry-specific structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Addurea",
              "legalName": "Addurea Maritime Solutions",
              "description": "Plataforma global para productos químicos marinos - AUS40 y Soda Cáustica",
              "url": "https://addurea.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://addurea.com/logo.png",
                "width": 512,
                "height": 512
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-XXX-XXX-XXXX",
                  "contactType": "customer service",
                  "availableLanguage": ["Spanish", "English"],
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "ContactPoint", 
                  "telephone": "+1-XXX-XXX-XXXX",
                  "contactType": "technical support",
                  "availableLanguage": ["Spanish", "English"]
                }
              ],
              "sameAs": [
                "https://linkedin.com/company/addurea",
                "https://twitter.com/addurea"
              ],
              "industry": "Maritime Chemical Supply",
              "foundingDate": "2025",
              "numberOfEmployees": "11-50",
              "knowsAbout": [
                "AUS40 Low Sulfur Marine Fuel",
                "Sodium Hydroxide (Soda Caustica)",
                "Maritime Logistics",
                "IMO 2020 Compliance",
                "Marine Chemical Supply Chain",
                "Port Operations",
                "Ship Chandling"
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "0",
                  "longitude": "0"
                },
                "geoRadius": "20003931"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Marine Chemical Products",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "AUS40 Low Sulfur Marine Fuel Oil",
                      "description": "IMO 2020 compliant marine fuel with <0.50% sulfur content"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Marine Grade Sodium Hydroxide (Soda Caustica)",
                      "description": "High purity caustic soda for marine water treatment applications"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* WebApp manifest for PWA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Addurea Platform",
              "description": "Maritime chemical supply platform connecting ships with certified suppliers worldwide",
              "url": "https://addurea.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Real-time supplier search",
                "Instant quotations", 
                "Order tracking",
                "Certificate management",
                "Multi-port coverage",
                "24/7 support"
              ]
            })
          }}
        />
      </head>
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 font-medium transition-all"
        >
          Saltar al contenido principal
        </a>
        
        {/* Main application container with maritime theme */}
        <div id="root" className="min-h-screen">
          <main id="main-content" className="focus:outline-none">
            {children}
          </main>
        </div>

        {/* Analytics and performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics 4 - Maritime optimized
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Replace 'GA_MEASUREMENT_ID' with your actual ID
              gtag('config', 'GA_MEASUREMENT_ID', {
                custom_map: {
                  'custom_parameter_1': 'user_type',
                  'custom_parameter_2': 'maritime_sector'
                }
              });
              
              // Maritime-specific events
              gtag('event', 'page_view', {
                'custom_parameter_1': 'maritime_platform',
                'custom_parameter_2': 'chemical_supply',
                'industry': 'maritime'
              });
              
              // Track PWA install
              window.addEventListener('beforeinstallprompt', (e) => {
                gtag('event', 'pwa_install_prompt', {
                  'event_category': 'PWA',
                  'event_label': 'Maritime App'
                });
              });
            `
          }}
        />
        
        {/* Service Worker for PWA capabilities */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js', {
                    scope: '/'
                  }).then(function(registration) {
                    console.log('⚓ Addurea SW registered: ', registration.scope);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                      console.log('🔄 New version available');
                    });
                  }, function(registrationError) {
                    console.log('❌ SW registration failed: ', registrationError);
                  });
                });
                
                // Handle offline/online events for maritime users
                window.addEventListener('online', function() {
                  console.log('🌐 Connection restored');
                  document.dispatchEvent(new Event('connection-restored'));
                });
                
                window.addEventListener('offline', function() {
                  console.log('📶 Connection lost - Maritime offline mode');
                  document.dispatchEvent(new Event('connection-lost'));
                });
              }
            `
          }}
        />
        
        {/* Performance monitoring for maritime operations */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Monitor Core Web Vitals for maritime UX
              if ('web-vital' in window || typeof webVitals !== 'undefined') {
                const vitalsCallback = (metric) => {
                  gtag('event', metric.name, {
                    'event_category': 'Web Vitals',
                    'event_label': 'Maritime Platform',
                    'value': Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                    'non_interaction': true,
                  });
                };
                
                // Track maritime-specific performance
                gtag('event', 'maritime_app_load', {
                  'event_category': 'Performance',
                  'event_label': 'Addurea Platform'
                });
              }
            `
          }}
        />
        
        {/* Fallback for users without JavaScript */}
        <noscript>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#f9fafb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            fontFamily: 'Inter, system-ui, sans-serif',
            zIndex: 9999
          }}>
            <div style={{
              maxWidth: '480px',
              textAlign: 'center',
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '16px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
                borderRadius: '12px',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                🚢
              </div>
              <h1 style={{ 
                color: '#111827', 
                marginBottom: '1rem',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>
                Addurea Platform
              </h1>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '1.5rem',
                lineHeight: '1.6'
              }}>
                Para acceder a la plataforma de productos químicos marinos, necesitas habilitar JavaScript en tu navegador.
              </p>
              <div style={{
                backgroundColor: '#eff6ff',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1rem'
              }}>
                <p style={{ 
                  color: '#1e40af', 
                  fontSize: '0.875rem',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  🔧 Instrucciones rápidas:
                </p>
                <p style={{ 
                  color: '#3730a3', 
                  fontSize: '0.8rem',
                  margin: '0.5rem 0 0',
                  lineHeight: '1.4'
                }}>
                  Chrome/Edge: Configuración → Privacidad y seguridad → JavaScript<br/>
                  Firefox: about:config → javascript.enabled → true
                </p>
              </div>
              <p style={{ 
                color: '#9ca3af', 
                fontSize: '0.8rem',
                fontStyle: 'italic'
              }}>
                Addurea es una plataforma moderna optimizada para operaciones marítimas globales.
              </p>
            </div>
          </div>
        </noscript>
      </body>
    </html>
  );
}