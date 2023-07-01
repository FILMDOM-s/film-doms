import { colors } from '@/styles/emotion'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import * as Svgs from '@svgs/common'

type SearchPackageProps = {
  searchString: string
}

const SearchPackage = () => {
  const { register, handleSubmit, getValues } = useForm<SearchPackageProps>()

  const onSubmit = async () => {
    try {
      const item = getValues()
      alert(item.searchString)
      //await search(item)
    } catch (err) {}
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchInput type="text" {...register('searchString')} />
      </form>
      {
        // loading && <CircleProgress />
      }
      <div></div>
    </div>
  )
}

const SearchContainer = () => {
  return (
    <SearchWrapper>
      <SearchTitle>
        검색
        <Svgs.Search fill="#000000" />
      </SearchTitle>
      <SearchPackage />
    </SearchWrapper>
  )
}

export default SearchContainer

const SearchTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SearchWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`

const SearchInput = styled.input`
  width: 200px;
  height: 56px;
  color: ${colors.primary.black};
  border: 2px solid ${colors.primary.black};
  outline: none;
  padding: 6px 20px;
  font-size: 20px;
  transition: all 0.3s ease-in-out;
  &:focus {
    width: 400px;
    border: 2px solid ${colors.primary.orange};
  }
`
