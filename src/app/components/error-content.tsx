import Link from 'next/link';

export default function ErrorContent() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-16 px-4 bg-shape-shape02">
      <div className="text-center space-y-6">
        <h1 className="text-[120px] font-bold text-white stroke-black">Hov!</h1>
        <h2 className="text-2xl font-semibold text-gray-900">Du er havnet på en side som ikke findes!</h2>
        <p className="text-gray-600 max-w-md mx-auto">Det er vi kede af! Vi har sendt en besked af sted til vores internetbureau, og bedt dem se på fejlen.</p>
        <button className="bg-primary-color01  text-white py-2 px-4 rounded">
          <Link href="/">Tilbage til forsiden</Link>
        </button>
      </div>
    </main>
  );
}
