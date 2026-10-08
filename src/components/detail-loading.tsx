import { container } from "@/components/ui";

export function DetailLoading({ label }: { label: string }) {
  return (
    <main id="contenido" aria-busy="true" className={`${container} py-16`}>
      <p role="status" className="mb-8 text-sm text-neutral-500">
        {label}
      </p>
      <div aria-hidden="true" className="grid gap-12 motion-safe:animate-pulse lg:grid-cols-[2.1fr_1fr]">
        <div>
          <div className="aspect-[1.65] bg-neutral-100" />
          <div className="mt-8 h-9 w-3/4 bg-neutral-100" />
          <div className="mt-6 h-4 bg-neutral-100" />
          <div className="mt-3 h-4 w-5/6 bg-neutral-100" />
        </div>
        <div className="h-80 border border-neutral-200 bg-neutral-50" />
      </div>
    </main>
  );
}
