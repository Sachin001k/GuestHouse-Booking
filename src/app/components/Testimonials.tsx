export default function Testimonials() {
  return (
    <section className="py-20 px-8 bg-gray-100 text-black">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-xl rounded-xl p-6">
          <p>
            "Excellent arrangements and beautiful decoration for our wedding."
          </p>

          <h3 className="mt-4 font-bold">
            - Sharma Family
          </h3>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-6">
          <p>
            "Perfect place for birthday celebrations. Highly recommended."
          </p>

          <h3 className="mt-4 font-bold">
            - Verma Family
          </h3>
        </div>

        <div className="bg-white shadow-xl rounded-xl p-6">
          <p>
            "Very cooperative staff and excellent facilities."
          </p>

          <h3 className="mt-4 font-bold">
            - Gupta Family
          </h3>
        </div>
      </div>
    </section>
  );
}