import 'server-only';

import './globals.scss';

import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import Footer from '../components/footer/footer';
import GlobalWrapper from '../components/global-wrapper';
import Header from '../components/header/header';
import type { Database } from '../db_types';

export type TypedSupabaseClient = SupabaseClient<Database>;

export const revalidate = 0;

export default async function RootLayout({ children }: { children?: React.ReactNode }) {
  return (
    <html lang="ja">
      <head />
      <body>
        <GlobalWrapper>
          <Header />

          {children}

          <Footer />
        </GlobalWrapper>
      </body>
    </html>
  );
}
