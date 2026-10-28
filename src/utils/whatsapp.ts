import { business } from '../data/business';

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `${business.whatsappUrl}?text=${encoded}`;
}

export type QuoteFormData = {
  fullName: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  preferredDate: string;
  movingType: 'Home' | 'Office' | '';
  rooms: string;
  additional: string;
};

export function buildQuoteMessage(data: QuoteFormData): string {
  const lines = [
    'Hello, I would like a moving quote from Sri Renuka Yellamma Thalli Packers & Movers.',
    '',
    `Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Moving From: ${data.movingFrom}`,
    `Moving To: ${data.movingTo}`,
    `Preferred Date: ${data.preferredDate}`,
    `Moving Type: ${data.movingType}`,
  ];

  if (data.rooms.trim()) {
    lines.push(`Approx. Rooms: ${data.rooms.trim()}`);
  }

  if (data.additional.trim()) {
    lines.push(`Additional Requirements: ${data.additional.trim()}`);
  }

  return lines.join('\n');
}

export function openWhatsApp(message: string): void {
  const url = buildWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
