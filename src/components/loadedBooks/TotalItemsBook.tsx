interface TotalItemsBookProps {
  totalItemsText: string
}
const TotalItemsBook: React.FC<TotalItemsBookProps> = ({ totalItemsText }) => {
  return (
    <div style={{ width: '100%', textAlign: 'center', margin: '10px' }}>
      <span>{totalItemsText} </span>
    </div>
  )
}

export default TotalItemsBook
