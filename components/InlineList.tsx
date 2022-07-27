import SparkleIcon from "./SparkleIcon";

interface InlineListProps {
  items: string[];
}

const InlineList = ({ items }: InlineListProps) => {
  return (
    <span>
      {items.map((item, i) => (
        <span key={item}>
          <span>{item}</span>
          <span>
            &nbsp;
            {i < items.length - 1 && <SparkleIcon />}
            &nbsp;
          </span>
        </span>
      ))}
    </span>
  );
};

export default InlineList;
