import { Building } from '@prisma/client';
import React, { useState } from 'react';

type DropdownComponentProps = {
  locations: Building[];
  onSelectLocation: (selectedLocation: Building) => void;
  className?: string;
};

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  locations,
  onSelectLocation,
  className = ''
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = event.target.value;
    setSelectedLocation(selectedName);
    const selectedBuilding = locations.find((location) => location.name === selectedName);
    if (selectedBuilding) {
      onSelectLocation(selectedBuilding);
    }
  };

  return (
    <select className={className} value={selectedLocation} onChange={handleChange}>
      <option value="" disabled>
        -- Please choose an option --
      </option>
      {locations.map((location, index) => (
        <option key={index} value={location.name}>
          {location.name}
        </option>
      ))}
    </select>
  );
};

export default DropdownComponent;
