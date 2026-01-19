import { Fragment } from 'react'
import { pizze } from './pizze'
import type { Pizza } from './pizze'

const TableHeader = ({ isSpecial }: { isSpecial: boolean }) => {
  return (
    <tr className="text-[3px] uppercase">
      <th className='font-arial-black text-brand-red text-base text-left pb-1'>{isSpecial ? 'Pizze speciali' : 'Pizze classiche'}</th>
      <th className='font-arial-black text-brand-red px-1'>Trancio</th>
      <th className='font-arial-black text-brand-red px-1'>Rotonda</th>
      <th className='font-arial-black text-brand-red px-1'>Famiglia</th>
    </tr>
  )
}

const PizzaItem = ({ pizza }: { pizza: Pizza }) => {
  return (
    <>
      <tr key={pizza._id} className="text-[2px] font-bold uppercase leading-tight">
        <td>{pizza.name}</td>
        <td className='text-end px-1'>{pizza.price.rectangularSlice ? Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(pizza.price.rectangularSlice / 100) : '-'}</td>
        <td className='text-end px-1'>{pizza.price.mormal ? Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(pizza.price.mormal / 100) : '-'}</td>
        <td className='text-end px-1'>{pizza.price.family ? Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format((pizza.price.family + 50) / 100) : '-'}</td>
      </tr>
      <tr className="text-[1px] text-gray-400 font-light italic">
        <td colSpan={4} className="pb-1 leading-none">{pizza.ingredients.map((ingredient) => ingredient.name).join(', ')}</td>
      </tr>
    </>
  )
}

function App() {
  const pizzeAvailable = pizze.filter((pizza) => pizza.isAvailable)

  const half = Math.ceil(pizzeAvailable.length / 2)
  const leftPizze = pizzeAvailable.slice(0, half)
  const rightPizze = pizzeAvailable.slice(half)

  const PizzaTable = ({ items }: { items: Pizza[] }) => (
    <table className="w-full border-separate border-spacing-y-1">
      <tbody>
        {items.map((pizza, index) => {
          const showHeader = index === 0 || pizza.isSpecial !== items[index - 1].isSpecial;
          return (
            <Fragment key={pizza._id}>
              {showHeader && <TableHeader isSpecial={pizza.isSpecial} />}
              <PizzaItem pizza={pizza} />
            </Fragment>
          )
        })}
      </tbody>
    </table>
  )

  return (

    <div className='bg-black text-white p-8 border border-white/10 overflow-hidden flex flex-col mx-auto '>
      <div className='flex-1 grid grid-cols-2 gap-10'>
        <div className='flex flex-col'>
          <PizzaTable items={leftPizze} />
        </div>
        <div className='flex flex-col'>
          <PizzaTable items={rightPizze} />
        </div>
      </div>
    </div>
  )
}

export default App
