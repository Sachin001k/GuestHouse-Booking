export default function Services() {
  return (
    <section className="py-20 px-8 text-black">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-purple-50 shadow-xl rounded-xl p-6 text-center hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-black mb-4">
            💍 Marriage Events
          </h3>

          <p>Beautiful arrangements for weddings and receptions.</p>
        </div>

        <div className="bg-purple-50 shadow-xl rounded-xl p-6 text-center hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-black mb-4">
            🎂 Birthday Parties
          </h3>

          <p>Celebrate memorable birthdays with family and friends.</p>
        </div>

        <div className="bg-purple-50 shadow-xl rounded-xl p-6 text-center hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-black mb-4">
            🎉 Anniversary Celebrations
          </h3>

          <p>Make your special moments unforgettable.</p>
        </div>

        <div className="bg-purple-50 shadow-xl rounded-xl p-6 text-center hover:scale-105 transition">
          <h3 className="text-2xl font-bold text-black mb-4">
            🪔 Religious Functions
          </h3>

          <p>Perfect arrangements for pujas and family gatherings.</p>
        </div>
      </div>
    </section>
  );
}