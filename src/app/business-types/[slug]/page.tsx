import { Metadata } from "next";
import { notFound } from "next/navigation";
import { businessTypesData } from "@/data/businessTypes";
import BusinessTypeLanding from "@/components/BusinessTypeLanding";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = businessTypesData[slug];
  
  if (!data) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${data.name} Software`,
    description: `Elevate your ${data.name.toLowerCase()} business with Palama. The gold standard for booking, management, and growth.`,
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
