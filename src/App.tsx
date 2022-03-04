import Page from './Page';

function App() {
  return (
    <>
      <Page>
        <p className="text-gray-500 font-semibold text-center mt-4">SAVE THE DATE</p>
        <div className="my-20">
          <p className="text-white text-center text-8xl font-title">Alsa</p>
          <p className="text-white text-center text-8xl font-title">&</p>
          <p className="text-white text-center text-8xl font-title">Andree</p>
        </div>
        <p className="text-gray-500 font-semibold text-center">7 May 2022</p>
      </Page>

      <Page>
        <p className="text-gray-500">Acara Utama</p>
      </Page>
    </>
  );
}

export default App;
