import { Card, type CardSpec } from "@/ui-lib/Card/Card";
import type { Bike } from "@/types/Bikes";

interface BikeCardProps {
  bike: Bike;
  onClick?: (id: string) => void;
}
export function BikeCard({ bike, onClick }: BikeCardProps) {
  const specs: CardSpec[] = [
    ...(bike.weight ? [{ icon: 'weightIcon', value: bike.weight }] : []),
    ...(bike.wheel_type ? [{ icon: 'wheelIcon', value: bike.wheel_type }] : []),
  ];

  const footerInfo: CardSpec[] = [
    ...(bike.color ? [{ value: bike.color }] : []),
    ...(bike.wheel_type ? [{ value: bike.wheel_type }] : []),
  ];

  return (
    <Card
      id={bike.id}
      imageSrc={bike.image_url}
      category={bike.riding_type}
      badge={bike.brand ? { name: bike.brand.name } : undefined}
      title={bike.name}
      description={bike.description}
      specs={specs}
      footerInfo={footerInfo}
      onClick={onClick}
    />
  );
}
