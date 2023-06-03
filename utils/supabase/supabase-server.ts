import 'server-only';

import { createServerComponentClient as _createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '../../db_types';

export const createServerComponentClient = () =>
  _createServerComponentClient<Database>({
    cookies,
  });
