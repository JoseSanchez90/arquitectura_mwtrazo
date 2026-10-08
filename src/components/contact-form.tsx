"use client";

import { useState } from "react";
import { contact, services } from "@/lib/content";
import { button } from "./ui";

export function ContactForm() {
  const [draft, setDraft] = useState("");
  const input =
    "mt-2 block w-full rounded-none border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900";
  return (
    <form
      onChange={() => setDraft("")}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setDraft(
          `Hola, MWTRAZO. Quisiera solicitar una evaluación gratuita.\n\nNombre: ${data.get("name")}\nWhatsApp: ${data.get("phone")}\nServicio: ${data.get("service")}\nDescripción del inmueble: ${data.get("message")}`,
        );
      }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold uppercase">
        Solicitar evaluación gratuita
      </h2>
      <p className="text-sm leading-6 text-neutral-500">
        Cuéntanos sobre tu inmueble. Prepararemos tu consulta para continuar por
        WhatsApp.
      </p>
      <label className="block text-sm">
        Nombre completo *
        <input
          name="name"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          className={input}
        />
      </label>
      <label className="block text-sm">
        WhatsApp *
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          required
          pattern={String.raw`[+0-9\s\(\)\-]{7,20}`}
          title="Ingresa un teléfono válido de 7 a 20 caracteres."
          maxLength={20}
          className={input}
        />
      </label>
      <label className="block text-sm">
        Servicio de interés *
        <select name="service" required defaultValue="" className={input}>
          <option value="" disabled>
            Seleccionar servicio
          </option>
          {services.map((s) => (
            <option key={s.slug}>{s.shortTitle}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        Descripción breve del inmueble *
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          className={`${input} resize-y`}
          placeholder="Ubicación, tipo de propiedad y trámite que necesitas..."
        />
      </label>
      <button type="submit" className={`${button} cursor-pointer`}>
        Preparar consulta <span>→</span>
      </button>
      {draft && (
        <div
          role="status"
          className="border border-neutral-300 bg-neutral-50 p-6"
        >
          <p className="font-medium">Tu consulta está lista</p>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            Revisa el mensaje y abre WhatsApp para enviarlo a MWTRAZO.
          </p>
          <p className="mt-4 whitespace-pre-line text-sm leading-6">{draft}</p>
          <a
            href={`${contact.whatsapp}?text=${encodeURIComponent(draft)}`}
            target="_blank"
            rel="noreferrer"
            className={`${button} mt-5 bg-black text-white`}
          >
            Continuar en WhatsApp ↗
          </a>
        </div>
      )}
    </form>
  );
}
