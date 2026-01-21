import type { Pizza, Item } from './pizze'
import { aggiunte, fritti, pizze, bere } from './pizze'

const TableStandard = ({ items, name }: { items: Item[], name: string }) => (
  <table className="table-auto my-4">
    <thead>
      <tr>
        <th className='font-arial-black  text-base text-left pb-1'>{name}</th>
        <th className='font-arial-black  px-1'>Prezzi</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item, index) => (
        <tr key={item._id} className={`${index % 2 === 0 ? 'bg-gray-100' : ''} border-b`}>
          <td>{item.name}</td>
          <td className='text-end px-1'>{Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(item.price / 100)}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

const TableHeader = ({ isSpecial }: { isSpecial: boolean }) => {
  return (
    <tr className="uppercase">
      <th></th>
      <th className='font-arial-black  text-base text-left pb-1'>{isSpecial ? 'Pizze speciali' : 'Pizze classiche'}</th>
      <th className='font-arial-black  px-1'>Spicchio</th>
      {/* <th className='font-arial-black  px-1'>Trancio</th> */}
      <th className='font-arial-black  px-1'>Rotonda</th>
      <th className='font-arial-black  px-1'>Famiglia</th>
    </tr>
  )
}
const PizzaItem = ({ pizza, index, showFirstLetter }: { pizza: Pizza, index: number, showFirstLetter: boolean }) => {
  const currentFirstLetter = pizza.name.at(0)
  return (
    <>
      <tr className={` font-bold uppercase leading-tight text-xs`}>
        <td className={`font-arial-black text-center w-8`}>{showFirstLetter ? currentFirstLetter : ''}</td>
        <td className={`${index % 2 === 0 ? 'bg-gray-100' : ''} text-left py-1`}>{pizza.name}</td>
        {/* <td className={`${index % 2 === 0 ? 'bg-gray-100' : ''} text-end px-1`}>{pizza.price.regularSlice ? Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(pizza.price.regularSlice / 100) : '-'}</td> */}
        <td className={`${index % 2 === 0 ? 'bg-gray-100' : ''} text-end px-1`}>{pizza.price.rectangularSlice ? Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(pizza.price.rectangularSlice / 100) : '-'}</td>
        <td className={`${index % 2 === 0 ? 'bg-gray-100' : ''} text-end px-1`}>{pizza.price.mormal ? Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(pizza.price.mormal / 100) : '-'}</td>
        <td className={`${index % 2 === 0 ? 'bg-gray-100' : ''} text-end px-1`}>{pizza.price.family ? Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(pizza.price.family / 100) : '-'}</td>
      </tr>
      <tr className={` font-light text-tiny`}>
        <td ></td>
        <td colSpan={2} className={`${index % 2 === 0 ? 'bg-gray-100' : ''} pb-1 leading-none border-b`}>{pizza.ingredients.filter((ingredient) => !ingredient.postBake).map((ingredient) => ingredient.name).join(', ')}</td>
        <td colSpan={2} className={`pb-1 leading-none border-b bg-red-100`}>{pizza.ingredients.filter((ingredient) => ingredient.postBake).map((ingredient) => ingredient.name).join(', ')}</td>

      </tr>
    </>
  )
}

const PizzaTable = ({ items }: { items: Pizza[] }) => (
  <table className="table-auto">
    <thead>
      <TableHeader isSpecial={false} />
    </thead>
    <tbody>
      {items.map((pizza, index) => {
        const showFirstLetter = index === 0 || items[index - 1].name.at(0) !== pizza.name.at(0)
        return (
          <PizzaItem pizza={pizza} index={index} showFirstLetter={showFirstLetter} />
        )
      })}
    </tbody>
  </table>
)

function ListinoDritto() {
  const pizzeSorted = [...pizze].sort((a, b) => a.name.localeCompare(b.name))
  return (

    <div>

      <PizzaTable items={pizzeSorted} />

      <TableStandard items={aggiunte} name="Aggiunte" />

      <TableStandard items={fritti} name="Fritti" />

      <TableStandard items={bere} name="Bere" />

    </div>
  )
}

export default ListinoDritto
