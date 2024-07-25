import React, { useState } from 'react';

type DropdownComponentProps = {
  locations: string[];
  onSelectLocation: (selectedLocation: string) => void;
  className?: string;
};

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  locations,
  onSelectLocation,
  className = ''
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedLocation(selected);
    onSelectLocation(selected);
  };

  return (
    <select className={className} value={selectedLocation} onChange={handleChange}>
      <option value="" disabled>
        -- Please choose an option --
      </option>
      {locations.map((location, index) => (
        <option key={index} value={location}>
          {location}
        </option>
      ))}
    </select>
  );
};

export default DropdownComponent;
