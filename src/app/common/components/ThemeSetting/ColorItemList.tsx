import React, {
  useEffect,
  useState,
} from 'react';

import { ThemeColorSelected } from '../../constants';
import ColorItem from './ColorItem';

interface ColorItemListProps {
  colors?: any[];
  title: string;
  selectedColor?: string;
  updateColor?: (item: any, type: ThemeColorSelected) => void;
  type: ThemeColorSelected;
}
function ColorItemList(props: ColorItemListProps) {
  const { colors, title, selectedColor, updateColor, type } = props;
  const [indexSelected, setIndexSelected] = useState<number>(0);
  const onItemSelected = (item: any, index: number) => {
    setIndexSelected(index);
    if (updateColor) {
      updateColor(item, type);
    }
  };
  useEffect(() => {
    if (selectedColor && colors) {
      const selected = colors?.findIndex(
        (item) => item.color === selectedColor
      );
      if (selected > -1) setIndexSelected(selected);
    }
  }, [colors, selectedColor]);
  return (
    <div className="mb-3">
      <h3 className="pb-3">{title}</h3>
      <div className="flex gap-8 flex-row">
        {colors?.map((item, index) => (
          <ColorItem
            key={`${item.color}-${index}`}
            isSelected={indexSelected === index}
            color={item.color}
            index={index}
            onSelectColor={onItemSelected}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorItemList;
