import Link from 'next/link';
import baseRenderGridSystem from './baseRenderGridSystem';
import { BasicInformation } from './types';

interface PropsWithLink {
  contentData: BasicInformation[];
  columns?: number;
  useLink?: boolean;
  children: (block: BasicInformation) => React.ReactNode;
  mapIdToPath?: (id: string) => string;
}

const renderGridSystem = ({
  contentData,
  columns = 1,
  useLink = true,
  children,
  mapIdToPath = (id) => id,
}: PropsWithLink) => {
  const mapFunction = useLink ? (id: string) => mapIdToPath(id) : () => '#';

  return baseRenderGridSystem({
    contentData,
    columns,
    children: (block: BasicInformation) =>
      useLink ? (
        <Link href={mapFunction(block.id)}>{children(block)}</Link>
      ) : (
        <>{children(block)}</>
      ),
    mapIdToPath: mapFunction,
  });
};

export default renderGridSystem;
