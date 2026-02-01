import type { Pizza } from "./pizze";
import { pizze } from "./pizze";

const TableHeader = () => {
  return (
    <tr className="uppercase">
      <th></th>
      <th className="font-arial-black  text-base text-left pb-1">Nome</th>
      <th className="font-arial-black  px-1">In forno</th>
      <th className="font-arial-black  px-1">Fuori Forno</th>
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
  const hasPostBakeIngredients = pizza.ingredients.some(
    (ingredient) => ingredient.postBake,
  );
  const hasTomato = pizza.ingredients.some(
    (i) =>
      i.name.toLowerCase().includes("pom.") ||
      i.name.toLowerCase() === "pomodorini",
  );
  return (
    <>
      <tr className={` font-bold  leading-tight text-xs`}>
        <td className={`font-arial-black text-center w-8, `}>
          {showFirstLetter ? currentFirstLetter : ""}
        </td>
        <td
          className={`${index % 2 === 0 ? "bg-gray-200" : ""} ${!hasTomato ? "text-red-700 bg-yellow-50" : ""} text-left py-1 border-b border-b-black whitespace-nowrap`}
        >
          {hasPostBakeIngredients ? "🫒" : ""}
          {!hasTomato && (
            <span className="text-[10px] font-black border border-red-700 px-0.5 mr-1 rounded bg-white">
              NO POM
            </span>
          )}
          {pizza.name}
        </td>
        <td
          className={`${index % 2 === 0 ? "bg-gray-200" : ""} pb-1 leading-none border-b`}
        >
          {pizza.ingredients
            .filter((ingredient) => !ingredient.postBake)
            .map((ingredient) => ingredient.name)
            .join(", ")}
        </td>
        <td
          className={`pb-1 leading-none border-b ${
            hasPostBakeIngredients
              ? "bg-red-100"
              : index % 2 === 0
                ? "bg-gray-200"
                : ""
          }`}
        >
          {pizza.ingredients
            .filter((ingredient) => ingredient.postBake)
            .map((ingredient) => ingredient.name)
            .join(", ")}
        </td>
      </tr>
    </>
  );
};

const PizzaTable = ({ items }: { items: Pizza[] }) => (
  <table className="table-auto">
    <thead>
      <TableHeader />
    </thead>
    <tbody>
      {items.map((pizza, index) => {
        const showFirstLetter =
          index === 0 || items[index - 1].name.at(0) !== pizza.name.at(0);
        return (
          <PizzaItem
            pizza={pizza}
            index={index}
            showFirstLetter={showFirstLetter}
          />
        );
      })}
    </tbody>
  </table>
);

function ListinoProduzione() {
  const pizzeSorted = [...pizze].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="listino-container px-4 py-8">
      <h1 className="text-2xl font-arial-black mb-4 uppercase underline">
        Listino Produzione
      </h1>
      <PizzaTable items={pizzeSorted} />
    </div>
  );
}

export default ListinoProduzione;
