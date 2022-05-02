import useUIData from './hooks/useUIData';
import uiClassFactory from './ui/uiClassFactory';

///////////////////////////////////////////////////////////////////////////////////////////////////
// Process routine
///////////////////////////////////////////////////////////////////////////////////////////////////
const ProcessScreen = () => {
  const { data } = useUIData();

  if (Object.keys(data).length === 0) return null;

  return data.elements.map((element, index) => {
    const Component = uiClassFactory(element.id);

    return <Component key={element.id + index} jsonData={element} />;
  });
};

export default ProcessScreen;
