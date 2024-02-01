import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
  const [response, setResponse] = useState()

  const getApi = () => {
    axios.get(url)
        .then(res => setResponse(res.data))
        .catch(e => console.log(e))
  }

  return [ response, getApi ]
}
export default useFetch