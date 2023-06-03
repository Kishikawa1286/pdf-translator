import Image from 'next/image';
import ContentWrapper from '../components/content-wrapper';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ContentWrapper>
          <Image
            src="/vercel.svg" // src属性の値はpublic/ディレクトリからの相対パス
            alt="Your Image"
            width={500} // 必須: 画像の幅
            height={300} // 必須: 画像の高さ
          />

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
