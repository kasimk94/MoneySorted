'use client'

import { useRouter } from 'next/navigation';
import Navbar from './Navbar';

export default function BlogNavWrapper() {
  const router = useRouter();
  return <Navbar onScrollToUpload={() => router.push('/')} />;
}
