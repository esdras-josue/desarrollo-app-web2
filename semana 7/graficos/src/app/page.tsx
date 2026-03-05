'use client';
import { useRouter } from 'next/navigation';
import Graficos from './components/Graficos';

export default function Home() {
  return (
    <div>
      <Graficos />
    </div>
  );
}
