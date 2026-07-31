import { Button } from "@/components/ui/button";

type CardProps = {
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "tertiary";
};

export function Card({ image, title, description, buttonLabel, buttonVariant = "primary" }: CardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md p-6 bg-white hover:shadow-lg transition">

       {image && (
         <img
         src={image}
         alt={title}
         className="w-full h-70 rounded-lg object-cover"
         />
       )}
       <div className="p-5">
        <h2 className="text-xl font-bold">{title}</h2>

        <p className="text-gray-600 mt-2">
          {description}
        </p>

        <Button className="mt-4" variant={buttonVariant}>
          {buttonLabel}
        </Button>
      </div>

    </div>
  );
}