import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import {
  business,
  businessHours,
  geo,
  serviceAreas,
  services,
  siteUrl,
} from './src/data/business.ts'

/**
 * Injects static LocalBusiness (MovingCompany) JSON-LD into index.html so that
 * crawlers that do not run JavaScript still see name, address, phone, hours and
 * geo. All values come from src/data/business.ts (single source of truth).
 * The id matches the runtime <Seo /> script so React replaces it on load
 * (no duplicate schema).
 */
function businessJsonLd(): Plugin {
  return {
    name: 'business-jsonld',
    transformIndexHtml(html) {
      const data: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'MovingCompany',
        name: business.name,
        description: business.description,
        ...(siteUrl ? { url: siteUrl, image: `${siteUrl}/images/hero-moving.jpg`, logo: `${siteUrl}/logo.png` } : {}),
        telephone: '+917799451430',
        hasMap: business.directionsUrl,
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.address.line1,
          addressLocality: business.city,
          addressRegion: business.state,
          postalCode: business.postalCode,
          addressCountry: business.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        openingHoursSpecification: businessHours.schema.map((h) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [...h.dayOfWeek],
          opens: h.opens,
          closes: h.closes,
        })),
        areaServed: serviceAreas.map((name) => ({ '@type': 'Place', name })),
        makesOffer: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: service.title },
        })),
      }
      const json = JSON.stringify(data).replace(/</g, '\\u003c')
      return html.replace(
        '<!--BUSINESS_JSONLD-->',
        `<script type="application/ld+json" id="page-jsonld">${json}</script>`,
      )
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), businessJsonLd()],
})
