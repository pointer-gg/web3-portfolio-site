import SparkleIcon from "./SparkleIcon";

interface InlineListProps {
  items: string[];
}

const InlineList = ({ items }: InlineListProps) => {
  return (
    <span>
      {items.map((item, i) => (
        <>
          <span>{item}</span>
          {i < items.length - 1 && (
            <span>
              &nbsp;&nbsp;
              <SparkleIcon />
              &nbsp;&nbsp;
            </span>
          )}
        </>
      ))}
    </span>
  );
};

export default InlineList;
