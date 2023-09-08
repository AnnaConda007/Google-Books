import { useState } from 'react'
import { Select, MenuItem, InputLabel, SelectChangeEvent } from '@mui/material'
import { useDispatch } from 'react-redux'
import { BookCategories } from '../../../../../enums'
import { filterByCategory } from '../../../../redux/BooksSlice'

const CategoryFilterDropdown: React.FC = () => {
  const dispatch = useDispatch()
  const categories: Array<BookCategories> = Object.values(BookCategories)
  const [selectedСategory, setSelectedСategory] = useState<string>(categories[0])

  const handleChange = (e: SelectChangeEvent<string>) => {
    setSelectedСategory(e.target.value)
    dispatch(filterByCategory(e.target.value))
  }

  return (
    <>
      <InputLabel style={{ color: 'white', width: '40%' }}>Categories</InputLabel>
      <Select value={selectedСategory} onChange={handleChange} label='Categories' fullWidth>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}

export default CategoryFilterDropdown
