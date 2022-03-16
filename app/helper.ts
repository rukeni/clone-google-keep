import { isEmpty } from 'lodash';
import { createClient } from '@supabase/supabase-js'
// import { PatientListApi } from '@/services/patientList';

interface data {
  id?: number;
  createdAt?: string;
  name?: string;
  phoneNumber?: string;
  inspectionPlace?: string;
  risk?: string;
  status?: string;
}

export function paginator(
  list: Array<string>,
  currentPage: number,
  size: number,
) {
  const page = currentPage || 1,
    listSize = size || 10,
    offset = (page - 1) * listSize,
    currentList = list.slice(offset).slice(0, listSize),
    totalPageCount = Math.ceil(list.length / listSize);

  return {
    page: page,
    listSize: listSize,
    prevPage: page - 1 > 0 ? page - 1 : 1,
    nextPage: totalPageCount > page ? page + 1 : totalPageCount,
    total: list.length,
    totalPageCount: totalPageCount,
    data: currentList,
  };
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)