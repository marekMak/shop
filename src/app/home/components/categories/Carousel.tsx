import Card from "./Card";

export default function Carousel() {
  return (
    <div>
      <div className="grid grid-cols-4 my-10 gap-4">
        <Card title="Casual" />
        <Card title="Western" />
        <Card title="Ethnic" />
        <Card title="Kids" />
      </div>
    </div>
  );
}
