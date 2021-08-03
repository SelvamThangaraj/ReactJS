import logo from './logo.svg';
import './App.css';
import data from './data'
import CourseData from './CourseData'

function App() {

  return (
    <div>
             {
                data.map(link =>
                  <CourseData data={link}></CourseData>                   
                )
              }
      
      
    </div>
  );
}

export default App;
