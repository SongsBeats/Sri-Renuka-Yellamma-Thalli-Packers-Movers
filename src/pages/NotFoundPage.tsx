import { Button } from '../components/Button';
import { Seo } from '../components/Seo';

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found | Sri Renuka Yellamma Thalli Packers & Movers"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <section className="bg-ivory py-24 lg:py-32">
        <div className="container-site max-w-xl text-center">
          <p className="text-[0.7rem] tracking-[0.2em] text-terracotta uppercase">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl text-forest">
            This page has moved on.
          </h1>
          <p className="mt-4 text-charcoal/70">
            The link may be outdated. Return home or request a moving quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/">Back Home</Button>
            <Button to="/contact#quote" variant="outline">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
