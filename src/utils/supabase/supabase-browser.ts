'use client';

import { createPagesBrowserClient as _createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../../db_types';

export const createBrowserClient = () => _createPagesBrowserClient<Database>();
