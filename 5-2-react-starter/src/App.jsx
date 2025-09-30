import './App.css'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <StudentCard name="" id="" dept="" />
         <StudentCard name="" id="" dept="" />
        </div>
      </main>
    </div>
  )
}

export default App
