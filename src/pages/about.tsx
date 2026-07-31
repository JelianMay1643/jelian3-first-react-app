import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import coffeehero from "@/assets/image.png";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-amber-100 py-10"> 
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-5xl  font-bold text-center mb-12">
            About Cuddle Cup
            </h1> 

            <div className="relative inline-block grid md:grid-cols-2 gap-12 items-center">

              <img
               src={coffeehero} 
               alt="Cuddle Cup" 
               className="rounded-xl shadow-lg w-full h-96 object-cover"
               />

               <h2 className="text-3xl text-center font-bold mb-30">
                 A cozy place for coffee lover
               </h2>

               

              <p className="text-gray-700 text-lg  leading-8  mx-6 ">
                We believe that every great cup of coffee starts with a story—from the hands that harvested the beans to the barista who pours your daily art.
                 Our space was built to be a living room for our neighborhood, a place where old friends catch up and new ideas come to life over a shared brew.
                  Come in, taste the care we put into every single roast, and become a part of our growing daily story.
                  
                  </p> 
            </div>
          </section>
      </main>
      <Footer />
    </>
  )
}