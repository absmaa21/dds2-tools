import "./Loading.css"


interface Props {
  width: number,
}

function Loading({width}: Props) {
  return (
    <div style={{
      minHeight: window.innerHeight, width, display: 'flex', justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className={"custom-loader"}/>
    </div>
  );
}

export default Loading;