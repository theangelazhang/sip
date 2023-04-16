import { CardDetails } from './CardDetails'
import { useEffect, useState } from 'react'
import { getCards, updateCard } from '../apis/cards'
import { useStateContext } from '../context/StateContext'

import { Card, CardData } from '../../models/Card'
import GetTimeLeft from './GetDate'
import CardCopy from './CardCopy'
import { FaPlus } from 'react-icons/fa'

interface Props {
  categoryId: number
}

const Cards = (props: Props) => {
  const { userDetail } = useStateContext()
  const [cards, setCards] = useState([] as Card[])
  const [showCardPopup, setShowCardPopup] = useState(false)
  const [existingCard, setExistingCard] = useState({
    category_id: 0,
    user_id: 0,
    name: '',
    description: '',
    date_created: 0,
    period: 0,
    location: '',
    completed: false,
    total_count: 0,
    comp_count: 0,
  } as Card | CardData)

  async function fetchCards(userId: number) {
    try {
      const res = await getCards(userId)
      setCards(() => [...res])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (props.categoryId) {
      fetchCards(props.categoryId)
    }
  }, [props.categoryId])

  async function handleComplete(e: any, card: Card) {
    await handleCardUpdate({ ...card, completed: e.target.checked })
    await fetchCards(props.categoryId)
    console.log('card', card.completed)
  }

  async function handleCardUpdate(updatedCard: Card) {
    await updateCard(updatedCard)
    fetchCards(props.categoryId)
    console.log('updated card', updatedCard.completed)
  }

  return (
    <div className="flex shrink-0 flex-row">
      {showCardPopup && (
        <div
          onClick={(e: any) => {
            if (e.target.tagName === 'DIV') {
              setShowCardPopup((prev) => !prev)
            }
          }}
          className="flex justify-center items-center fixed top-0 left-0 z-10 h-screen w-screen text-center "
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
        >
          <CardCopy existingCard={existingCard} />
        </div>
      )}
      {cards.map((card: Card) => (
        <div
          key={card.id}
          className="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 max-w-md  p-6 "
          style={{ background: card.completed ? 'darkgray' : 'white' }}
        >
          <strong>
            <p
              className="mb-2"
              style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              {card.name}
            </p>
          </strong>

          <CardDetails card={card} />
          <br></br>
          <input
            className="bg-black"
            style={{ display: 'none' }}
            onChange={(e) => handleComplete(e, card)}
            checked={card.completed}
            type="checkbox"
            id={String(card.id)}
            name="complete"
          />
          <label
            className={
              'cursor-pointer opacity-90 dark:active:shadow-[0_8px_9px_-4px_rgba(51, 51, 51, 0.2),0_4px_18px_0_rgba(51, 51, 51,0.1)]] inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#8c8c8c] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(51, 51, 51,0.3),0_4px_18px_0_rgba(51, 51, 51, 0.2)]  focus:shadow-[0_8px_9px_-4px_rgba(51, 51, 51,0.3),0_4px_18px_0_rgba(51, 51, 51, 0.2)] focus:outline-none focus:ring-0active:shadow-[0_8px_9px_-4px_rgba(51, 51, 51,0.3),0_4px_18px_0_rgba(51, 51, 51, 0.2)] dark:shadow-[0_4px_9px_-4px_rgba(51, 51, 51,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(51, 51, 51, 0.2),0_4px_18px_0_rgba(51, 51, 51,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(51, 51, 51, 0.2),0_4px_18px_0_rgba(51, 51, 51,0.1)]'
            }
            style={{ background: card.completed ? '#333333' : '#48BB78' }}
            htmlFor={String(card.id)}
          >
            {card.completed ? 'Unmark' : 'Mark as done'}
          </label>
          <br></br>
          <button
            onClick={() => {
              setExistingCard({
                ...card,
              })
              setShowCardPopup((prev) => !prev)
            }}
            className="opacity-90 dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init=""
            data-te-ripple-color="light"
            // value={isNew ? 'Create' : 'Update'}
          >
            Update
          </button>
          <GetTimeLeft
            card={card}
            dateCreated={card.date_created}
            period={card.period}
            handleCardUpdate={handleCardUpdate}
          />
        </div>
      ))}
        <button
          onClick={() => {
            setExistingCard({
              category_id: props.categoryId,
              user_id: userDetail.id,
              name: '',
              description: '',
              date_created: new Date().valueOf(),
              period: 0,
              location: '',
              completed: false,
              total_count: 0,
              comp_count: 0,
            })
            setShowCardPopup((prev) => !prev)
          }}
          className="h-24 ml-4 self-center bg-gray-600  hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          <FaPlus size={16} />
        </button>

    </div>
  )
}

export default Cards
