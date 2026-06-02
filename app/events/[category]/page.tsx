import CategoryEventsClient from "@/components/sections/CategoryEventsClient";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  return [
    { category: "sporting" },
    { category: "on-stage" },
    { category: "off-stage" },
  ];
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <CategoryEventsClient category={resolvedParams.category} />;
}
