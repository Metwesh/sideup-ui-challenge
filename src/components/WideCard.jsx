import "./WideCard.css";

export default function WideCard(props) {
  return (
    <div className="wide-card card">
      <div className="grid wide-card-grid">
        {/* Maps over the order types passed as props */}
        {Object.keys(props).map((key) => {
          const temp = key.split(/(?=[A-Z])/);
          return (
            <div key={key} className="order-type-container">
              {temp.length <= 1 ? (
                <h3 className="order-type">{temp[0]}</h3>
              ) : (
                <h3 className="order-type">{temp.join(" ")}</h3>
              )}
            </div>
          );
        })}
        {Object.keys(props).map((key, i) => {
          return (
            <div
              key={key + i}
              className="order-volume-container flex jc-c ai-c">
              <h3 className="order-volume-value">{props[key]}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
