import CurrenciesStore  from "./currenciesStore"
import ConverterStore from "./converterStore"

export const createStore = () => {
  const currenciesStore= new CurrenciesStore()
  const converterStore= new ConverterStore()
  return {
    currenciesStore,
    converterStore
  }
}
export type TStore = ReturnType<typeof createStore>
