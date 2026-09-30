import { useState } from "react";

const RandomEventImage: React.FC = () => {
  const [imageSrc] = useState(
    () => `/event-image-${Math.floor(Math.random() * 4) + 1}.webp`,
  );

  return (
    <img
      src={imageSrc}
      alt="Event"
      className="h-full w-full object-cover"
    />
  );
};

export default RandomEventImage;
