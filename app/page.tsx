import ContentWrapper from '../components/content-wrapper';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ContentWrapper>
          <h1 className={styles.title}>
            Welcome to <a href="https://app.supabase.com">Supabase</a> on{' '}
            <a href="https://nextjs.org">Next.js 13!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing <code className={styles.code}>app/page.tsx</code>
          </p>
        </ContentWrapper>
      </main>
    </div>
  );
}
