import Modal from '@/components/Modal'

function Home () {
  const botonModal = (e) => {
    e.PreventDefault()
  }

  return (<>
  <form onSubmit={botonModal}><button>Modal</button></form>
  <Modal/>
  </>)
}

export default Home
