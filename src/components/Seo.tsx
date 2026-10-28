import { useEffect } from 'react';
import { business } from '../data/business';

export type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function Seo({
  title,
  description,
  path = '/',
  image = '/images/hero-moving.jpg',
  type = 'website',
  jsonLd,
}: SeoProps) {
  const jsonLdSerialized = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const origin = window.location.origin;
    const url = `${origin}${path}`;
    const absoluteImage = image.startsWith('http')
      ? image
      : `${origin}${image}`;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', absoluteImage);
    upsertMeta('property', 'og:site_name', business.name);
    upsertMeta('property', 'og:locale', 'en_IN');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', absoluteImage);
    upsertLink('canonical', url);

    const scriptId = 'page-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (jsonLdSerialized) {
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      const parsed = JSON.parse(jsonLdSerialized) as Record<string, unknown>;
      if (!parsed.url) {
        parsed.url = origin;
      }
      script.textContent = JSON.stringify(parsed);
    } else if (script) {
      script.remove();
    }
  }, [title, description, path, image, type, jsonLdSerialized]);

  return null;
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: business.name,
    description: business.description,
    telephone: '+917799451430',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 8-8-491, Tapovan Colony',
      addressLocality: 'Karmanghat, Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500079',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'Place', name: 'Karmanghat' },
    ],
    image: '/images/hero-moving.jpg',
  };
}
