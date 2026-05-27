import Link from 'next/link';

export default function NotFound() {
  return (
    <section style={{ padding: '6rem 0', textAlign: 'center' }}>
      <div className="container container--narrow">
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2.5rem',
            marginBottom: '1rem',
          }}
        >
          Page not found
        </h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn--primary">
          Return home
        </Link>
      </div>
    </section>
  );
}
