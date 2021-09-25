import OutsideClickHandler from 'react-outside-click-handler'
import SelectIcon from 'shared/assets/icons/icon-selection.png'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { Typography } from '@material-ui/core'

const CurrentCategoryList = ({ categoryCurrentState }: Record<string, any>) => {
  return (
    <div className="categories-list">
      {categoryCurrentState?.list.map((elem: Record<string, any>) => (
        <Link to={elem.link} className="category-link" key={elem?.id}>
          {elem?.name}
        </Link>
      ))}
      <img src={SelectIcon} alt="" className="icon" />
    </div>
  )
}

export const CotegoriesBox = ({ config, className, style }: Record<string, any>) => {
  const [categoryCurrentState, setCategoryCurrentState] = useState<Record<string, any>>({
    isOpen: false,
    id: null,
  })
  const { formatMessage } = useIntl()
  const { currentCategoryIndex } = useMemo(() => {
    const currentCategoryIndex =
      categoryCurrentState?.id && config.findIndex((elem: Record<string, any>) => elem?.id === categoryCurrentState?.id)
    return { currentCategoryIndex }
  }, [categoryCurrentState?.id])

  const openCategoryHandler = (categorie: Record<string, any>): void => {
    if (categoryCurrentState?.isOpen && categorie.id !== categoryCurrentState.id) {
      setCategoryCurrentState(() => {
        return { isOpen: true, ...categorie }
      })
    } else
      setCategoryCurrentState(prev => {
        return { isOpen: !prev?.isOpen, ...categorie }
      })
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setCategoryCurrentState({ isOpen: false })}>
      <Wrapper
        style={style}
        className={className}
        currentCategoryIndex={currentCategoryIndex >= 8 ? currentCategoryIndex - 8 : currentCategoryIndex}
      >
        <div className="cotegorie-list">
          {config.slice(0, 8).map((categorie: Record<string, any>) => {
            return (
              <div key={categorie?.name} className="cotegorie-box" onClick={() => openCategoryHandler(categorie)}>
                <img
                  className="img"
                  alt=""
                  style={categorie?.imgUrl && { background: `url(${categorie?.imgUrl})center no-repeat` }}
                />

                <Typography variant="h6" className="title">
                  {formatMessage({ id: categorie?.name })}
                </Typography>
              </div>
            )
          })}
        </div>

        {categoryCurrentState?.isOpen && currentCategoryIndex <= 7 ? (
          <CurrentCategoryList categoryCurrentState={categoryCurrentState} />
        ) : null}

        <div className="cotegorie-list">
          {config.slice(8, config.length).map((categorie: Record<string, any>) => {
            return (
              <div key={categorie.name} className="cotegorie-box" onClick={() => openCategoryHandler(categorie)}>
                <img className="img" alt="" />

                <Typography variant="h6" className="title">
                  {formatMessage({ id: categorie?.name })}
                </Typography>
              </div>
            )
          })}
        </div>

        {categoryCurrentState?.isOpen && currentCategoryIndex > 7 ? (
          <CurrentCategoryList categoryCurrentState={categoryCurrentState} />
        ) : null}
      </Wrapper>
    </OutsideClickHandler>
  )
}
