export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Welcome to N L Marriage Hall Guest House
      </h1>

      <p className="text-xl text-gray-600 max-w-2xl mb-8">
        Book weddings, birthday parties, anniversaries and all kinds of
        celebrations with elegance and comfort.
      </p>

      <button className="bg-purple-700 text-white px-8 py-4 rounded-lg text-lg hover:bg-purple-800">
        Book Your Event
      </button>
    </section>
  );
}