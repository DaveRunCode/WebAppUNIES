import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container text-center">
      <div class="row justify-content-md-center">
        <div className='col-6 m-3'>
          <img src='logoBV.png' alt='Biblioteca Virtual UNIES'></img>
          <form>
            <div className='input-group mb-3'>
              <input 
                type="text" 
                className='form-control' 
                placeholder='¿Qué recurso deseas buscar?'
                aria-describedby="button-search">
              </input>
              <button
                className='btn btn-success'
                id="button-search">
                Buscar
              </button>
            </div>
          </form>
          <a href='#'>Busqueda Avanzada</a>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
