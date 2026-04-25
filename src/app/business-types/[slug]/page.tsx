import { notFound } from "next/navigation";
import { businessTypesData } from "@/data/businessTypes";
import BusinessTypeLanding from "@/components/BusinessTypeLanding";

interface Props {
  params: {
    slug: string;
  };
}

// Next.js 15+ dynamic params handling
export default async function BusinessTypePage({ params }: Props) {
  const { slug } = await params;
  const data = businessTypesData[slug];

  if (!data) {
    notFound();
  }

  return (
    <BusinessTypeLanding data={data} />
  );
}

export async function generateStaticParams() {
  return Object.keys(businessTypesData).map((slug) => ({
    slug,
  }));
}
