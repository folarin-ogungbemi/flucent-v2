import React from 'react'
import axios from 'axios'

const App = () => {

  // interface Contact{
  //   id: number;
  //   name: string;
  //   email: string;
  // }

  // interface Promise{
  //   res: string;
  //   error: string;
  // }

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://127.0.0.1:5000/contacts")
    .then(res => res.data)
    .then((data) =>{
        setData(data.contacts)
        console.log(data.contacts)
      })
      .catch(error => {
        console.error("Error fetching contacts:", error);
      })
  }, [])
  

  return (
    <>
      {(data.length === 0) ? (
        <p>Loading...</p>
      ) : (
        data.map((contact, i) => {
          return (
            <p key={i}>{contact}</p>
          )
        })
      )}
    </>
  )
}

export default App
