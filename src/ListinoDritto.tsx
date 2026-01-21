import type { Pizza, Item } from './pizze'
import { aggiunte, fritti, pizze, bere } from './pizze'

const TableStandard = ({ items, name }: { items: Item[], name: string }) => (
  <table className="table-auto w-full mt-2 text-[9px]">
    <thead>
      <tr className="border-b border-black">
        <th className='font-arial-black text-[10px] text-left pb-1'>{name}</th>
        <th className='font-arial-black text-[10px] px-1 text-right'>Prezzo</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => (
        <tr key={item._id} className={`${index % 2 === 0 ? 'bg-gray-50' : ''} border-b border-gray-100`}>
          <td className="py-0.5">{item.name}</td>
          <td className='text-end px-1 tabular-nums'>{(item.price / 100).toFixed(1)}€</td>
        </tr>
      ))}
    </tbody>
  </table>
)

const TableHeader = ({ isSpecial }: { isSpecial: boolean }) => {
  return (
    <tr className="uppercase border-b border-black">
      <th></th>
      <th className='font-arial-black text-[10px] text-left pb-1'>{isSpecial ? 'Pizze speciali' : 'Pizze'}</th>
      <th className='font-arial-black text-[10px] px-1 text-left'>Ingredienti</th>
      <th className='font-arial-black text-[10px] px-1'>Spi.</th>
      <th className='font-arial-black text-[10px] px-1'>Rot.</th>
      <th className='font-arial-black text-[10px] px-1'>Fam.</th>
    </tr>
  )
}
const PizzaItem = ({ pizza, index, showFirstLetter }: { pizza: Pizza, index: number, showFirstLetter: boolean }) => {
  const currentFirstLetter = pizza.name.at(0)
  return (
    <>
      <tr className={`uppercase leading-[1.1] text-[9px] border-b border-gray-200`}>
        <td className={`font-arial-black text-center w-4 text-[10px]`}>{showFirstLetter ? currentFirstLetter : ''}</td>
        <td className={`${index % 2 === 0 ? 'bg-gray-50' : ''} font-bold text-left py-0.5 whitespace-nowrap`}>{pizza.name}</td>
        <td className={`${index % 2 === 0 ? 'bg-gray-50' : ''} text-left text-[8px] leading-none px-1`}>{pizza.ingredients.map((ingredient) => ingredient.name).join(', ')}</td>
        <td className={`${index % 2 === 0 ? 'bg-gray-50' : ''} text-end px-0.5 tabular-nums`}>{pizza.price.rectangularSlice ? (pizza.price.rectangularSlice / 100).toFixed(1) : '-'}</td>
        <td className={`${index % 2 === 0 ? 'bg-gray-50' : ''} text-end px-0.5 tabular-nums`}>{pizza.price.mormal ? (pizza.price.mormal / 100).toFixed(1) : '-'}</td>
        <td className={`${index % 2 === 0 ? 'bg-gray-50' : ''} text-end px-0.5 tabular-nums`}>{pizza.price.family ? (pizza.price.family / 100).toFixed(1) : '-'}</td>
      </tr>
    </>
  )
}

const PizzaTable = ({ items, isSpecial }: { items: Pizza[], isSpecial?: boolean }) => (
  <table className="table-auto w-full">
    <thead>
      <TableHeader isSpecial={isSpecial || false} />
    </thead>
    <tbody>
      {items.map((pizza, index) => {
        const showFirstLetter = index === 0 || items[index - 1].name.at(0) !== pizza.name.at(0)
        return (
          <PizzaItem key={pizza._id + index} pizza={pizza} index={index} showFirstLetter={showFirstLetter} />
        )
      })}
    </tbody>
  </table>
)

function ListinoDritto() {
  const pizzeSorted = [...pizze].sort((a, b) => a.name.localeCompare(b.name))
  const half = Math.ceil(pizzeSorted.length / 2)
  const leftColumn = pizzeSorted.slice(0, half)
  const rightColumn = pizzeSorted.slice(half)

  return (
    <div className="listino-container p-2">
      <div className="flex gap-4">
        {/* Left Column */}
        <div className="flex-1">
          <PizzaTable items={leftColumn} />
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <PizzaTable items={rightColumn} />
          
        </div>
      </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div>
              <TableStandard items={aggiunte} name="Aggiunte" />
              <TableStandard items={fritti} name="Fritti" />
            </div>
            <div>
              <TableStandard items={bere} name="Bere" />
            </div>
          </div>
    </div>
  )
}

export default ListinoDritto
