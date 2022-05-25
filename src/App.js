// import { Greet } from './components/Greet'
// import { Message } from './components/Message'
// import { Events } from './components/Events'
// import { ParentComponent } from './components/AParentComp'
// import { UserGreetings } from './components/UserGreetings'
// import { Items } from './components/ItemList'
// import { Styling } from './components/Styling'
// import './styles/AppStyle.css'
// import styles from './styles/AppStyle.module.css'
// import { Forms } from "./components/Forms"
// import { PostList } from "./components/PostList"
// import { PostForm } from "./components/PostForm"
import { MockData } from "./components/MockData"

function App() {
  return (
    <div className="App">
      {/* props */}
      {/* <Greet name="Harshil" surename="Patel" />
      <Greet name="Harshal" surename="Prajapati" />
      <Greet name="Harshali" surename="Sinha" >
        <p>this is children props</p>
      </Greet> */}
      {/* end of props */}

      {/* state */}
      {/* <Message/> */}
      {/* end of state */}

      {/* events */}
      {/* <Events /> */}
      {/* end of events */}

      {/* function as a props */}
      {/* <ParentComponent /> */}
      {/* end of function as a props */}

      {/* conditional rendering */}
      {/* <UserGreetings /> */}
      {/* end of conditional rendering */}

      {/* display list of items */}
      {/* <Items /> */}
      {/* end of display list of items */}

      {/* Styling */}
      {/* <Styling /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.sucess}>Sucess</h1> */}
      {/* end of Styling */}

      {/* forms */}
      {/* <Forms /> */}
      {/* end of forms */}

      {/* get data from API */}
      {/* <PostList /> */}
      {/* end of get data from API */}

      {/* send data using API */}
      {/* <PostForm /> */}
      {/* end of send data using API */}

      {/* useTransition Hook */}
      <MockData />
      {/* end of useTransition Hook */}

    </div>
  )
}

export default App
