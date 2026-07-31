import { Link } from "react-router-dom";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import espresso from "@/assets/espresso.webp";
import cappuccino from "@/assets/cappuccino.jpg";
import croissants from "@/assets/croissants.webp";
import cheesecake from "@/assets/cheesecake.jpg";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-1 min-h-screen bg-amber-100 py-10">
          <section className="max-w-6xl mx-auto  p-10">

    {/* Hero Text */}
    <div className="text-center max-w-2xl mx-auto">

      <h1 className="text-6xl font-bold text-stone-800">
        Enjoy Your Coffee
      </h1>

      <h2 className="text-5xl font-semibold text-amber-900 mt-2">
        with Cuddle Cup
      </h2>

      <p className="mt-6 text-gray-600 text-lg">
        Discover your perfect cup of coffee and enjoy every relaxing moment
        with our freshly brewed drinks.
      </p>

      <Link
        to="/menu"
        className="inline-block mt-8 bg-amber-800 text-white px-8 py-4 rounded-full hover:bg-amber-1000 transition"
      >
        Explore Menu →
      </Link>

    </div>

    {/* Coffee Images */}
    <div className="grid grid-cols-4 gap-6 mt-16">

      <img
        src={espresso}
        alt="Espresso"
        className="h-60 w-full object-cover rounded-2xl"
      />

      <img
        src={cappuccino}
        alt="Cappuccino"
        className="h-60 w-full object-cover rounded-2xl"
      />

      <img
        src={croissants}
        alt="Croissants"
        className="h-60 w-full object-cover rounded-2xl"
      />

      <img
        src={cheesecake}
        alt="Cheesecake"
        className="h-60 w-full object-cover rounded-2xl"
      />
      
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}