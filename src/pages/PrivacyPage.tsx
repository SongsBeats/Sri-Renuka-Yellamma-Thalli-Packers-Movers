import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionLabel } from '../components/SectionLabel';
import { Seo } from '../components/Seo';
import { business } from '../data/business';

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | Sri Renuka Yellamma Thalli Packers & Movers"
        description="Privacy policy for the Sri Renuka Yellamma Thalli Packers & Movers website. How enquiry information is handled via WhatsApp."
        path="/privacy"
      />

      <section className="border-b border-forest/10 bg-ivory py-14 lg:py-20">
        <div className="container-site">
          <Breadcrumbs
            items={[
              { label: 'Home', path: '/' },
              { label: 'Privacy Policy' },
            ]}
          />
          <SectionLabel>Legal</SectionLabel>
          <h1 className="font-display text-4xl text-forest sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-charcoal/60">
            Last updated: {new Date().toLocaleDateString('en-IN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16 lg:py-20">
        <div className="container-site prose-site max-w-3xl space-y-10">
          <div>
            <h2 className="font-display text-2xl text-forest">Overview</h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/75">
              This website is operated by {business.name}, based at{' '}
              {business.address.full} This policy explains how information
              shared through the website is handled.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-forest">
              Quote and enquiry forms
            </h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/75">
              The quote request form on this website does not store your
              information in an online database. When you submit the form, the
              details you enter are used to create a pre-filled WhatsApp message
              that opens in your WhatsApp application so you can send it to our
              business number ({business.phoneDisplay}).
            </p>
            <p className="mt-3 text-base leading-relaxed text-charcoal/75">
              You control whether the message is sent. If you do not send the
              WhatsApp message, we will not receive those details through this
              form.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-forest">
              Information you may share
            </h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/75">
              Depending on the form fields you complete, this may include your
              name, phone number, moving locations, preferred date, moving type,
              and optional notes about your requirements. Please share only the
              information needed to discuss your enquiry.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-forest">
              Phone and WhatsApp contact
            </h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/75">
              If you call or message us directly, the information you provide
              during that conversation is used to respond to your enquiry and
              discuss packing or moving services. We do not sell personal
              information.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-forest">
              Cookies and analytics
            </h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/75">
              This website is designed to work without requiring third-party
              advertising cookies. Your browser may still store basic technical
              data needed to display the site. If analytics tools are added in
              the future, this policy will be updated to describe them.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-forest">External links</h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/75">
              Links to WhatsApp, Google Maps directions, or other external
              services are governed by those providers&apos; own privacy
              policies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-forest">Contact</h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/75">
              For privacy-related questions, contact {business.name} at{' '}
              <a
                href={business.phoneTel}
                className="text-forest underline underline-offset-2"
              >
                {business.phoneDisplay}
              </a>{' '}
              or visit us at the address listed above.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
