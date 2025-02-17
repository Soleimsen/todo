import type { Note } from '@prisma/client'

interface NoteProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: string
  note: Note
}

const NoteTile: React.FC<NoteProps> = ({ note, ...props }) => {
  /**
   * @link https://stackoverflow.com/a/3943023
   */
  // const calculateTextColor = () => {
  //   const red = parseInt(note.color.slice(1, 3), 16) / 255
  //   const green = parseInt(note.color.slice(3, 5), 16) / 255
  //   const blue = parseInt(note.color.slice(5, 7), 16) / 255
  //   const brightness = (red * 299 + green * 587 + blue * 114) / 1000
  //   return brightness > 0.5 ? '#000' : '#fff'
  // }
  // const [title, setTitle] = useState(note.title)
  // const [color, setColor] = useState(note.color)

  return (
    <div
      key={note.id}
      {...props}
      className='hover:bg-slate-100 border-b h-20 cursor-pointer flex w-full relative bg-blue-200'>
      <div
        className='h-full w-2 min-w-[8px] absolute left-0 z-10'
        style={{
          backgroundColor: note.color,
        }}
      />
      <div className='flex flex-col w-full pl-2 relative '>
        <div className='p-2 font-semibold'>{note.title}</div>
        <div className='py-2 px-5 font-thin absolute text-ellipsis overflow-hidden whitespace-nowrap w-full bottom-0 left-0 bg-pink-200'>
          {note.description}
        </div>
      </div>
    </div>
  )
}

export default NoteTile
