import "./index.scss";

interface SliceTextProps {
  content: string;
}

const SliceText = (props: SliceTextProps) => {
  return (
    <div className="slice-text">
      <div className="slice-text-content">{props.content}</div>
    </div>
  );
};

export default SliceText;
