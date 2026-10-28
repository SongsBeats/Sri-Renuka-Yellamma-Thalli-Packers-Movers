import { trustItems } from '../data/business';

export function TrustStrip() {
  return (
    <section
      aria-label="Service highlights"
      className="border-y border-forest/10 bg-sage/35"
    >
      <div className="container-site">
        <ul className="grid grid-cols-2 divide-forest/10 lg:grid-cols-4 lg:divide-x">
          {trustItems.map((item, index) => (
            <li
              key={item}
              className={`flex items-center justify-center px-4 py-5 text-center text-[0.78rem] font-medium tracking-[0.06em] text-forest sm:text-[0.85rem] ${
                index < 2 ? 'border-b border-forest/10 lg:border-b-0' : ''
              } ${index % 2 === 0 ? 'border-r border-forest/10 lg:border-r-0' : ''}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
