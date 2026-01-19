import { Fragment } from 'react'
import { pizze } from './pizze'
import type { Pizza } from './pizze'

const TableHeader = ({ isSpecial }: { isSpecial: boolean }) => {
  return (
    <tr className="uppercase">
      <th className='font-arial-black  text-base text-left pb-1'>{isSpecial ? 'Pizze speciali' : 'Pizze classiche'}</th>
      <th className='font-arial-black  px-1'>Spicchio</th>
      <th className='font-arial-black  px-1'>Trancio</th>
      <th className='font-arial-black  px-1'>Rotonda</th>
      <th className='font-arial-black  px-1'>Famiglia</th>
    </tr>
  )
}

const PizzaItem = ({ pizza }: { pizza: Pizza }) => {
  return (
    <>
      <tr key={pizza._id} className=" font-bold uppercase leading-tight">
        <td>{pizza.name}</td>
        <td className='text-end px-1'>{pizza.price.regularSlice ? Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(pizza.price.regularSlice / 100) : '-'}</td>
        <td className='text-end px-1'>{pizza.price.rectangularSlice ? Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(pizza.price.rectangularSlice / 100) : '-'}</td>
        <td className='text-end px-1'>{pizza.price.mormal ? Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(pizza.price.mormal / 100) : '-'}</td>
        <td className='text-end px-1'>{pizza.price.family ? Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(pizza.price.family / 100) : '-'}</td>
      </tr>
      <tr className="font-light italic">
        <td colSpan={4} className="pb-1 leading-none">{pizza.ingredients.map((ingredient) => ingredient.name).join(', ')}</td>
      </tr>
    </>
  )
}

function ListinoDritto() {


  const PizzaTable = ({ items }: { items: Pizza[] }) => (
    <table className="w-full border-separate border-spacing-y-1">
      <thead>
        <TableHeader isSpecial={false} />
      </thead>
      <tbody>
        {items.map((pizza) => {
          return (
            <Fragment key={pizza._id}>
              <PizzaItem pizza={pizza} />
            </Fragment>
          )
        })}
      </tbody>
    </table>
  )

  return (

    <div className=' p-8 border border-white/10 overflow-hidden flex flex-col mx-auto '>
      <div className='flex-1 grid grid-cols-2 gap-10'>
        <div className='flex flex-col'>
          <PizzaTable items={pizze} />
        </div>
      </div>
    </div>
  )
}

export default ListinoDritto
