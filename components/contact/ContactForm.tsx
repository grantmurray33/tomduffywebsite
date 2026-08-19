'use client';

import { FormEvent, useState } from 'react';
import { firm } from '@/content/site';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'ready'>('idle');

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const referred = String(data.get('referred') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `How referred: ${referred}`,
      '',
      message,
    ].join('\n');

    const href = `mailto:${firm.email}?subject=${encodeURIComponent(
      'Consultation request',
    )}&body=${encodeURIComponent(body)}`;

    setStatus('ready');
    window.location.href = href;
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate={false}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Name</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>
      </div>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Phone</span>
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
        <label className={styles.field}>
          <span>How were you referred?</span>
          <input type="text" name="referred" required />
        </label>
      </div>
      <label className={styles.field}>
        <span>Message</span>
        <textarea name="message" rows={6} required />
      </label>
      <button type="submit" className="btn btn--primary">
        Request a Consultation
      </button>
      {status === 'ready' && (
        <p className={styles.note} role="status">
          Your email client should open with this request addressed to{' '}
          {firm.email}.
        </p>
      )}
    </form>
  );
}
