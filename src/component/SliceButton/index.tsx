import "./index.scss";

interface SliceButtonProps {
  content: string;
  handleClick: () => void;
}

const SliceButton = (props: SliceButtonProps) => {
  return (
    <div className="slice-button">
      <button
        className="slice-button-content"
        onClick={() => {
          props.handleClick();
        }}
      >
        {props.content}
      </button>
    </div>
  );
};

export default SliceButton;
