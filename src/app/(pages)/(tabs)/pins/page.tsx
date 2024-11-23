import Card from "@/components/ui/cardPasta/card";

export const Pins = () => {
  const cardValues = ["", "" , "" , "", "", "", "", "",];

  return (
    <main className="w-full min-h-screen grid grid-cols-5 justify-center flex-wrap gap-4 bg-preto p-4">
      {cardValues.map((value, index) => (
        <div
          key={index}
          className="w-[100%] h-[100%]"
        >
          <Card value={value} /> 
        </div>
      ))}
    </main>
  );
};

export default Pins;
