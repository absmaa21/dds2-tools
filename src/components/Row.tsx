import {CSSProperties, ReactNode} from "react";


interface Props {
  style?: CSSProperties,
  children: ReactNode,
}

function Row({children, style}: Props) {
  return (
    <div style={{
      ...style,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>
      {children}
    </div>
  );
}

export default Row;