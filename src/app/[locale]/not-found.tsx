export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold text-zinc-500">404</p>
        <h1 className="mt-2 text-balance text-3xl font-semibold tracking-tight text-zinc-950">
          Page not found
        </h1>
        <p className="mt-3 text-pretty text-zinc-600">
          The page you’re looking for doesn’t exist.
        </p>
      </div>
    </div>
  );
}

