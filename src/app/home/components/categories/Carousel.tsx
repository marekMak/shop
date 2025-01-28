import Card from "./Card";

export default function Carousel() {
  return (
    <div>
      <div className="flex my-10 gap-4">
        <Card title="Casual" />
        <Card title="Western" />
        <Card title="Ethnic" />
        <Card title="Kids" />
      </div>
    </div>
  );
}
