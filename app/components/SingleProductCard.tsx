import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ProductProps {
  name: String;
  image: String;
  category: String;
}
export default function SingleProductCard({
  name,
  image,
  category,
}: ProductProps) {
  return (
    <Card className="w-[220px]">
      <CardHeader>
        <Image src={image} alt={name}/>
        <CardDescription className="text-center">{category}</CardDescription>
        <CardTitle className="text-[18px] font-medium">{name}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button className="bg-black w-full">Details</Button>
      </CardFooter>
    </Card>
  );
}
