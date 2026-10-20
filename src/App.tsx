import { useState } from 'react'

import './App.css'
import type { Allat } from './types/allat';
import { AllatVezerlo } from './components/AllatVezerlo';
import { AllatLista } from './components/AllatLista';

function App() {

  const [allatok, setAllatok] = useState<Allat[]>([
    { id: 1, nev: "Bodri", kor: 4 },
    { id: 2, nev: "Cirmi", kor: 2 },
    { id: 3, nev: "Morzsi", kor: 7 }
  ]);

  const [nev, setNev] = useState<string>("")
  const [kor, setKor] = useState<string>("")

  function allatHozzaadasa() {

    let ujAllat: Allat = {
      id: allatok.length + 1,
      nev: nev,
      kor: parseInt(kor)
    };

    setAllatok([...allatok, ujAllat]);

    setNev("");
    setKor("");
  }

  const eletkorNovelese = (id: number) => {
    setAllatok(
      allatok.map((allat) => {
        if (allat.id === id) {
          return { ...allat, kor: allat.kor + 1 };
        }

        return allat;
      })
    );
  }

  const allatTorlese = (id: number) => {
    setAllatok(
      allatok.filter((allat) => allat.id !== id)
    );
  }

  return (
    <>
      <div className="container">
        <h1>Állatmenhely</h1>

        <AllatVezerlo
          nev={nev}
          kor={kor}
          setNev={setNev}
          setKor={setKor}
          allatHozzaadasa={allatHozzaadasa}
        />
        <AllatLista
          allatok={allatok}
          eletkorNovelese={eletkorNovelese}
          allatTorlese={allatTorlese}
        />
      </div>
    </>
  )
}

export default App
