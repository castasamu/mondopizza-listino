import type { Pizza, Item } from "./pizze";
import { aggiunte, fritti, pizze, bere } from "./pizze";

const TableStandard = ({
  items,
  name,
  fontSize = "text-[14px]",
  headerSize = "text-[16px]",
}: {
  items: Item[];
  name: string;
  fontSize?: string;
  headerSize?: string;
}) => (
  <table className={`table-auto w-full mt-2 ${fontSize}`}>
    <thead>
      <tr className="border-b-2 border-black">
        <th className={`font-arial-black ${headerSize} text-left pb-1`}>
          {name}
        </th>
        <th className={`font-arial-black ${headerSize} px-1 text-right`}>
          Prezzo
        </th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => (
        <tr
          key={item._id}
          className={`${index % 2 === 0 ? "bg-gray-50" : ""} border-b border-gray-100`}
        >
          <td className="py-2">{item.name}</td>
          <td className="text-end px-1 tabular-nums font-bold">
            {Intl.NumberFormat("it-IT", {
              style: "currency",
              currency: "EUR",
            }).format(item.price / 100)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const TableHeader = ({ isSpecial }: { isSpecial: boolean }) => {
  return (
    <tr className="uppercase border-b-2 border-black">
      <th></th>
      <th className="font-arial-black text-[11px] text-left pb-0.5">
        {isSpecial ? "Pizze speciali" : "Pizze"}
      </th>
      <th className="font-arial-black text-[11px] px-1 text-left">
        Ingredienti
      </th>
      <th className="font-arial-black text-[10px] px-1 text-end">Spi.</th>
      <th className="font-arial-black text-[10px] px-1 text-end">Rot.</th>
      <th className="font-arial-black text-[10px] px-1 text-end">Fam.</th>
    </tr>
  );
};

const PizzaItem = ({
  pizza,
  index,
  showFirstLetter,
}: {
  pizza: Pizza;
  index: number;
  showFirstLetter: boolean;
}) => {
  const currentFirstLetter = pizza.name.at(0);
  return (
    <tr className="uppercase leading-tight text-[10px] border-b border-gray-100">
      <td className="font-arial-black text-center w-5 text-[11px]">
        {showFirstLetter ? currentFirstLetter : ""}
      </td>
      <td
        className={`${index % 2 === 0 ? "bg-gray-50" : ""} font-bold text-left py-0.5 whitespace-nowrap`}
      >
        {pizza.name}
      </td>
      <td
        className={`${index % 2 === 0 ? "bg-gray-50" : ""} text-left text-[9px] leading-none px-1`}
      >
        {pizza.ingredients.map((ingredient) => ingredient.name).join(", ")}
      </td>
      <td
        className={`${index % 2 === 0 ? "bg-gray-50" : ""} text-end px-1 tabular-nums font-bold`}
      >
        {pizza.price.rectangularSlice
          ? (pizza.price.rectangularSlice / 100).toFixed(1)
          : "-"}
      </td>
      <td
        className={`${index % 2 === 0 ? "bg-gray-50" : ""} text-end px-1 tabular-nums font-bold`}
      >
        {pizza.price.mormal ? (pizza.price.mormal / 100).toFixed(1) : "-"}
      </td>
      <td
        className={`${index % 2 === 0 ? "bg-gray-50" : ""} text-end px-1 tabular-nums font-bold`}
      >
        {pizza.price.family ? (pizza.price.family / 100).toFixed(1) : "-"}
      </td>
    </tr>
  );
};

const PizzaTable = ({
  items,
  isSpecial,
}: {
  items: Pizza[];
  isSpecial?: boolean;
}) => (
  <table className="table-auto w-full">
    <thead>
      <TableHeader isSpecial={isSpecial || false} />
    </thead>
    <tbody>
      {items.map((pizza, index) => {
        const showFirstLetter =
          index === 0 || items[index - 1].name.at(0) !== pizza.name.at(0);
        return (
          <PizzaItem
            key={pizza._id + index}
            pizza={pizza}
            index={index}
            showFirstLetter={showFirstLetter}
          />
        );
      })}
    </tbody>
  </table>
);

function ListinoDritto() {
  const pizzeSorted = [...pizze].sort((a, b) => a.name.localeCompare(b.name));
  const half = Math.ceil(pizzeSorted.length / 2);
  const leftColumn = pizzeSorted.slice(0, half);
  const rightColumn = pizzeSorted.slice(half);

  return (
    <div className="listino-container p-2">
      <div className="pizzas flex gap-4">
        <div className="flex-1">
          <PizzaTable items={leftColumn} />
        </div>
        <div className="flex-1">
          <PizzaTable items={rightColumn} />
        </div>
      </div>

      <div className="others page-break mt-12 grid grid-cols-2 gap-12 p-8">
        <div>
          <h2 className="font-arial-black text-3xl mb-6 uppercase border-b-4 border-black pb-2">
            Aggiunte e Fritti
          </h2>
          <TableStandard
            items={aggiunte}
            name="Aggiunte"
            fontSize="text-[18px]"
            headerSize="text-[20px]"
          />
          <div className="mt-12">
            <TableStandard
              items={fritti}
              name="Fritti"
              fontSize="text-[18px]"
              headerSize="text-[20px]"
            />
          </div>
        </div>
        <div>
          <h2 className="font-arial-black text-3xl mb-6 uppercase border-b-4 border-black pb-2">
            Bevande
          </h2>
          <TableStandard
            items={bere}
            name="Bevande"
            fontSize="text-[18px]"
            headerSize="text-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ListinoDritto;
