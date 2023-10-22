import "../App.css";
const Actions: React.FC<{
  onMoveToRight: () => void;
  onMoveToLeft: () => void;
}> = ({ onMoveToRight, onMoveToLeft }) => {
  return (
    <div className="button-section flex-center">
      <button className="button" onClick={() => onMoveToRight()}>
        &gt;
      </button>
      <button className="button" onClick={() => onMoveToLeft()}>
        &lt;
      </button>
    </div>
  );
};

export default Actions;
