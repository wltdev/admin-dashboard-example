type Props = {
  text: string;
  onRemove: (item: string) => void;
};

export function Tweet({ text, onRemove }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          marginRight: "10px",
        }}
      >
        {text}
      </p>
      <button onClick={() => onRemove(text)}>del</button>
    </div>
  );
}
