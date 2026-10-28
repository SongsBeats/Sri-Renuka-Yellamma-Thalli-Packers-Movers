import type { QuoteFormData } from './whatsapp';

export type QuoteFormErrors = Partial<Record<keyof QuoteFormData, string>>;

export function normalizePhone(value: string): string {
  return value.replace(/[\s\-()]/g, '');
}

export function isValidIndianPhone(value: string): boolean {
  const cleaned = normalizePhone(value);
  // Accept +91XXXXXXXXXX, 91XXXXXXXXXX, or 10-digit starting 6-9
  if (/^\+?91[6-9]\d{9}$/.test(cleaned)) return true;
  if (/^[6-9]\d{9}$/.test(cleaned)) return true;
  return false;
}

export function validateQuoteForm(data: QuoteFormData): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Please enter your full name.';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters.';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else if (!isValidIndianPhone(data.phone)) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number.';
  }

  if (!data.movingFrom.trim()) {
    errors.movingFrom = 'Please enter the current location.';
  }

  if (!data.movingTo.trim()) {
    errors.movingTo = 'Please enter the destination.';
  }

  if (!data.preferredDate.trim()) {
    errors.preferredDate = 'Please select a preferred moving date.';
  }

  if (!data.movingType) {
    errors.movingType = 'Please select Home or Office.';
  }

  return errors;
}
