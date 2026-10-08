// NEXT_PUBLIC_ is required: the /keystatic admin UI is a client component, so a
// server-only env var reads as undefined in the browser and the UI falls back to
// local mode, which cannot save anything on Vercel.
export function resolveKeystaticStorage(kind: string | undefined) {
  return kind === 'github'
    ? ({ kind: 'github', repo: { owner: 'LuisGabriel112', name: 'respiVer' } } as const)
    : ({ kind: 'local' } as const)
}
