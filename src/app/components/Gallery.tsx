export default function Gallery() {
  return (
    <section className="py-20 px-8 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Gallery
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="h-64 bg-purple-100 rounded-xl shadow-lg flex items-center justify-center text-xl font-bold">
          Wedding Hall
        </div>

        <div className="h-64 bg-purple-100 rounded-xl shadow-lg flex items-center justify-center text-xl font-bold">
          Birthday Events
        </div>

        <div className="h-64 bg-purple-100 rounded-xl shadow-lg flex items-center justify-center text-xl font-bold">
          Decorations
        </div>
      </div>
    </section>
  );
}