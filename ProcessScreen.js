import { useAtom } from 'jotai';
import { UIDataAtom } from './atoms/UIDataAtom';
import useUIData from './hooks/useUIData';
import uiClassFactory from './ui/uiClassFactory';

const ProcessScreen = () => {
  const { isLoading, data } = useUIData();

  if (isLoading) return null;

  return data.elements.map((element, index) => {
    const Component = uiClassFactory(element.id);

    return <Component key={element.id + index} jsonData={element} />;
  });
};

export default ProcessScreen;
