import React from 'react'
import { useSelector } from 'react-redux'

const SearchVedioContainer = () => {
    const vedios = useSelector((store) => store.searchVedios.vedios);
    
    return (
      
    <div>SearchVedioContainer</div>
  )
}

export default SearchVedioContainer