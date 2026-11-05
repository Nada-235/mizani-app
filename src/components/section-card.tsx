import type { ReactNode } from "react";
export function SectionCard({ title, children }: { title: string; children: ReactNode }) { return <section className="rounded-3xl border border-violet-100 bg-white p-5 shadow-sm"><h2 className="mb-4 text-lg font-bold">{title}</h2>{children}</section>; }
