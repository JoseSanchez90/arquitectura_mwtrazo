import { faq } from "@/lib/content";

export function Faq() {
  return (
    <div className="border border-neutral-200">
      {faq.map((f, i) => (
        <details
          key={f.question}
          name="faq"
          open={i === 0}
          className="group border-b border-neutral-200 last:border-b-0"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 text-sm font-semibold uppercase transition-colors group-open:bg-[#d5e3f8] hover:bg-neutral-100 sm:px-7">
            <span>{f.question}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
            >
              <path d="m4 7 6 6 6-6" />
            </svg>
          </summary>
          <p className="px-5 py-7 text-sm leading-7 sm:px-7">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
