// import React, { FC, FormEvent } from 'react'
// import { Wrapper } from './style'
//
// // procredit-bank-design-system
//
// import Typography from 'procredit-bank-design-system/modules/typography'
// import Icons from 'procredit-bank-design-system/modules/icons'
// import Menu from 'procredit-bank-design-system/modules/menu'
// const { Item } = Menu
// const { DownOutlined } = Icons
// const { Text } = Typography
// //
// // const ButtonInner = styled.span`
// //   text-transform: uppercase;
// //   & .anticon {
// //     font-size: 12px;
// //     width: 24px;
// //   }
// // `
//
// {
//   /*<<<<<<< HEAD*/
// }
// {
//   /*export const LangSwitcher: FC = () => {*/
// }
// {
//   /*  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible()*/
// }
// {
//   /*  const { lang } = useSelector(({ common }) => common)*/
// }
// {
//   /*=======*/
// }
// {
//   /*const fancyLang = (lang = '') => {*/
// }
// {
//   /*  if (lang === 'en') return 'Eng'*/
// }
// {
//   /*  if (lang === 'ua') return 'Ukr'*/
// }
// {
//   /*  if (lang === 'ru') return 'Rus'*/
// }
// {
//   /*  return null*/
// }
// {
//   /*}*/
// }
// {
//   /*>>>>>>> 737fdcd82b3c349b4635a1d95770d3413cd503e8*/
// }
//
// // // Render language selector
// // interface LanguageSwitcherProps {}
// // const LanguageSwitcher: FC<LanguageSwitcherProps> = () => {
// //   const dispatch = useDispatch()
// //
// // <<<<<<< HEAD
// //   const changeLang = (event: FormEvent, lang: string) => {
// //     event.preventDefault()
// //     dispatch(CommonActions.changeLangAction({ lang }))
// //   }
//
// export const LangSwitcher: FC = () => {
//   const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible()
//   const { lang } = useSelector(({ common }) => common)
//
//   const changeLang = (event: FormEvent, lang: string) => {
//     event.preventDefault()
//     dispatch(CommonActions.changeLangAction({ lang }))
//   }
//
//   return (
//     <Wrapper>
//       <div className="current-lang-box" onClick={() => setIsComponentVisible(pr => !pr)} ref={ref}>
//         <Text className="lang">{lang}</Text>
//         <DownOutlined />
//
//         {isComponentVisible && (
//           <div className="options-cont">
//             {LANGUAGES.map(el => (
//               <button
//                 className={`option ${lang === el && 'selected-lang'}`}
//                 key={el}
//                 disabled={lang === el}
//                 onClick={e => changeLang(e, el)}
//               >
//                 {el}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </Wrapper>
//   )
// }
