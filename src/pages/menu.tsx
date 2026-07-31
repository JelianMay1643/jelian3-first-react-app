import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Card } from "@/components/ui/card";
import espresso from "@/assets/espresso.webp";
import cappuccino from "@/assets/cappuccino.jpg";
import icelatte from "@/assets/icelatte.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import croissants from "@/assets/Croissants.webp";
import burger from "@/assets/burger.webp";

export default function MenuPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-amber-100 py-10">
        <section className="max-w-7xl mx-auto  py-10">
          <h1 className="text-4xl font-bold text-center mb-8">
            Our Menu
          </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


          <Card image={cappuccino} title="Cappucino" description="Espresso with steamed milk foam." buttonLabel="Order Now" buttonVariant="primary" />
           
            


          <Card  image={espresso} title="Espresso" description="Strong and rich coffee." buttonLabel="Order Now" buttonVariant="secondary" />

             

          <Card  image={icelatte} title="Ice Latte" description="Cold espresso with fresh milk." buttonLabel="Order Now" buttonVariant="primary" />

             

          <Card  image={cheesecake} title="Cheesecake" description="Creamy cheesecake with strawberry.." buttonLabel="Order Now" buttonVariant="primary" />

             

          <Card  image={croissants} title="Croissant" description="A golden layers that give a light crunch." buttonLabel="Order Now" buttonVariant="secondary" />
             
             

          <Card image={burger} title="Burger" description="juicy, crispy, smoky, and melted." buttonLabel="Order Now" buttonVariant="primary" />
           
    
           </div>
        </section>
      </main>

      <Footer />
    </>
  );
}