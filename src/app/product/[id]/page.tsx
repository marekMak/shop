import BaseLayout from "@/components/layout/BaseLayout";
import ProductLayout from "../components/ProductLayout";
import { useParams } from "next/navigation";
export default async function page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  return (
    <BaseLayout>
      <ProductLayout id={id} />
    </BaseLayout>
  );
}
