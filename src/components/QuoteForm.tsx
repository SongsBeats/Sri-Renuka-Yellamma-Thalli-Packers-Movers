import { useState, type FormEvent } from 'react';
import {
  buildQuoteMessage,
  openWhatsApp,
  type QuoteFormData,
} from '../utils/whatsapp';
import { validateQuoteForm } from '../utils/validation';
import { Button } from './Button';
import { Reveal } from './Reveal';
import { SectionLabel } from './SectionLabel';

const initialData: QuoteFormData = {
  fullName: '',
  phone: '',
  movingFrom: '',
  movingTo: '',
  preferredDate: '',
  movingType: '',
  rooms: '',
  additional: '',
};

type QuoteFormProps = {
  embedded?: boolean;
};

export function QuoteForm({ embedded = false }: QuoteFormProps) {
  const [data, setData] = useState<QuoteFormData>(initialData);
  const [errors, setErrors] = useState<ReturnType<typeof validateQuoteForm>>(
    {},
  );
  const [touched, setTouched] = useState(false);

  const update = <K extends keyof QuoteFormData>(
    key: K,
    value: QuoteFormData[K],
  ) => {
    setData((prev) => ({ ...prev, [key]: value }));
    if (touched) {
      setErrors(validateQuoteForm({ ...data, [key]: value }));
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setTouched(true);
    const nextErrors = validateQuoteForm(data);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      const el = document.getElementById(`quote-${firstKey}`);
      el?.focus();
      return;
    }

    openWhatsApp(buildQuoteMessage(data));
  };

  const fieldClass =
    'mt-2 w-full rounded-sm border border-ivory/25 bg-forest-deep/40 px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 outline-none transition-colors focus:border-terracotta focus:ring-1 focus:ring-terracotta';
  const labelClass = 'block text-xs font-medium tracking-[0.08em] text-ivory/80';
  const errorClass = 'mt-1.5 text-xs text-[#F2C4B4]';

  const form = (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-sm bg-forest p-6 text-ivory sm:p-8 lg:p-10"
      aria-labelledby="quote-heading"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="quote-fullName" className={labelClass}>
            Full Name <span className="text-terracotta">*</span>
          </label>
          <input
            id="quote-fullName"
            name="fullName"
            autoComplete="name"
            className={fieldClass}
            value={data.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'err-fullName' : undefined}
          />
          {errors.fullName && (
            <p id="err-fullName" className={errorClass} role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-phone" className={labelClass}>
            Phone Number <span className="text-terracotta">*</span>
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            className={fieldClass}
            value={data.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'err-phone' : undefined}
          />
          {errors.phone && (
            <p id="err-phone" className={errorClass} role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-movingFrom" className={labelClass}>
            Moving From <span className="text-terracotta">*</span>
          </label>
          <input
            id="quote-movingFrom"
            name="movingFrom"
            className={fieldClass}
            placeholder="Current locality / city"
            value={data.movingFrom}
            onChange={(e) => update('movingFrom', e.target.value)}
            aria-invalid={Boolean(errors.movingFrom)}
            aria-describedby={errors.movingFrom ? 'err-movingFrom' : undefined}
          />
          {errors.movingFrom && (
            <p id="err-movingFrom" className={errorClass} role="alert">
              {errors.movingFrom}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-movingTo" className={labelClass}>
            Moving To <span className="text-terracotta">*</span>
          </label>
          <input
            id="quote-movingTo"
            name="movingTo"
            className={fieldClass}
            placeholder="Destination locality / city"
            value={data.movingTo}
            onChange={(e) => update('movingTo', e.target.value)}
            aria-invalid={Boolean(errors.movingTo)}
            aria-describedby={errors.movingTo ? 'err-movingTo' : undefined}
          />
          {errors.movingTo && (
            <p id="err-movingTo" className={errorClass} role="alert">
              {errors.movingTo}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-preferredDate" className={labelClass}>
            Preferred Moving Date <span className="text-terracotta">*</span>
          </label>
          <input
            id="quote-preferredDate"
            name="preferredDate"
            type="date"
            className={`${fieldClass} [color-scheme:dark]`}
            value={data.preferredDate}
            onChange={(e) => update('preferredDate', e.target.value)}
            aria-invalid={Boolean(errors.preferredDate)}
            aria-describedby={
              errors.preferredDate ? 'err-preferredDate' : undefined
            }
          />
          {errors.preferredDate && (
            <p id="err-preferredDate" className={errorClass} role="alert">
              {errors.preferredDate}
            </p>
          )}
        </div>

        <fieldset className="min-w-0">
          <legend className={labelClass}>
            Moving Type <span className="text-terracotta">*</span>
          </legend>
          <div className="mt-2 flex gap-3">
            {(['Home', 'Office'] as const).map((type) => {
              const selected = data.movingType === type;
              return (
                <label
                  key={type}
                  className={`flex flex-1 cursor-pointer items-center justify-center rounded-sm border px-3 py-3 text-sm transition-colors ${
                    selected
                      ? 'border-terracotta bg-terracotta/20 text-ivory'
                      : 'border-ivory/25 text-ivory/80 hover:border-ivory/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="movingType"
                    value={type}
                    className="sr-only"
                    checked={selected}
                    onChange={() => update('movingType', type)}
                  />
                  {type}
                </label>
              );
            })}
          </div>
          {errors.movingType && (
            <p className={errorClass} role="alert">
              {errors.movingType}
            </p>
          )}
        </fieldset>

        <div>
          <label htmlFor="quote-rooms" className={labelClass}>
            Approximate Number of Rooms{' '}
            <span className="text-ivory/45">(optional)</span>
          </label>
          <input
            id="quote-rooms"
            name="rooms"
            className={fieldClass}
            placeholder="e.g. 2 BHK"
            value={data.rooms}
            onChange={(e) => update('rooms', e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="quote-additional" className={labelClass}>
            Additional Requirements{' '}
            <span className="text-ivory/45">(optional)</span>
          </label>
          <textarea
            id="quote-additional"
            name="additional"
            rows={3}
            className={`${fieldClass} resize-y`}
            placeholder="Floor number, lift access, special items, etc."
            value={data.additional}
            onChange={(e) => update('additional', e.target.value)}
          />
        </div>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-ivory/55">
        Your details will be included in a WhatsApp message so you can continue
        the conversation with our team. Nothing is stored on this website.
      </p>

      <div className="mt-6">
        <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
          Continue on WhatsApp
        </Button>
      </div>
    </form>
  );

  if (embedded) {
    return form;
  }

  return (
    <section className="bg-ivory py-20 lg:py-28" id="quote">
      <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <SectionLabel>Request a Quote</SectionLabel>
          <h2
            id="quote-heading"
            className="font-display text-3xl text-forest sm:text-4xl lg:text-[2.75rem]"
          >
            Tell Us About Your Move.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal/75">
            Share a few details so you can discuss your relocation requirements
            with our team.
          </p>
          <div className="mt-8 hidden overflow-hidden rounded-sm lg:block">
            <img
              src="/images/packing-boxes.jpg"
              alt="Neatly packed cardboard boxes ready for a household move"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={80}>
          {form}
        </Reveal>
      </div>
    </section>
  );
}
