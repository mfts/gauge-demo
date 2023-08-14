import { Gauge } from './gauge'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex bg-black min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full text-white justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/30">
          Vercel's Gauge Status Component
        </p>
        <div className="fixed bottom-0 left-0 flex h-20 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center text-white gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://x.com/mfts0"
            target="_blank"
            rel="noopener noreferrer"
          >
            By @mfts0
          </a>
        </div>
      </div>

      <div className="relative flex flex-col gap-y-4 sm:gap-x-8 sm:flex-row items-center">
        <Gauge value={80} size="small" showValue={true} />
        <Gauge value={100} size="small" showValue={true} />
        <Gauge value={80} size="medium" showValue={true} />
        <Gauge value={100} size="medium" showValue={true} />
        <Gauge value={80} size="large" showValue={true} />
        <Gauge value={100} size="large" showValue={true} />
      </div>

      <div className="flex flex-col gap-y-4 items-center justify-center text-center mb-20">
        <Link
          href="https://github.com/mfts/gauge-demo/blob/main/app/gauge.tsx"
          className="p-4 border border-neutral-800 bg-zinc-800/30 rounded-xl hover:bg-gray-900 infline-flex items-center gap-x-2 mt-4 text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the component on GitHub
        </Link>
        <Link
          href="https://vercel.com/design/gauge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-300"
        >
          View the Vercel design
        </Link>
      </div>
    </main>
  );
}