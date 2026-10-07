import BackendStatus from "@/components/BackendStatus";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-6 px-6">
      <h1 className="text-4xl font-semibold tracking-tight">e-law-firm</h1>
      <p className="text-lg text-muted">
        Personal legal information services. Information only, not legal advice.
      </p>
      <BackendStatus />
    </main>
  );
}
