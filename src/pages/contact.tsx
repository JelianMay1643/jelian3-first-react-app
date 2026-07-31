import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-amber-100 py-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <h1 className="text-5xl font-bold text-center mb-4"> 
          Contact Us
             </h1>

             <div className="max-w-xl mx-auto bg-stone-100 p-8 rounded-2xl shadow-lg">

  
  <form className="space-y-5">

    
    <div>
      <label className="block mb-2 font-medium text-gray-700">
        Name
      </label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full border border-black-300 rounded-lg p-3 focus:outline-none focus:ring-2 "
      />
    </div>

    <div>
      <label className="block mb-2 font-medium text-gray-700">
        Email Address
      </label>
      <input
        type="email"
        placeholder="Enter  email"
        className="w-full border border-black-300 rounded-lg p-3 focus:outline-none "
      />
    </div>

    <div>
      <label className="block mb-2 font-medium text-gray-700">
        Message
      </label>
      <textarea
        rows={5}
        placeholder="Write your message..."
        className="w-full border border-black-300 rounded-lg p-3 focus:outline-none "
      ></textarea>
    </div>

    <Button variant="tertiary"
      type="submit"
    >
      Send Message
    </Button>

  </form>
</div>                    
</section>
 </main>

      <Footer />
    </>
  )
}