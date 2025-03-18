import "./Loading.css"

function Loading() {
  return (
    <div style={{
      height: '100vh', width: '100%', display: 'flex', justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className={"custom-loader"}/>
    </div>
  );
}

export default Loading;