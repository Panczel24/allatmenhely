import type { Allat } from "../types/allat";

interface AllatListaProps {
    allatok: Allat[];
    eletkorNovelese: (id: number) => void;
    allatTorlese: (id: number) => void;
};

export const AllatLista = ({ allatok, eletkorNovelese, allatTorlese }: AllatListaProps) => {
    return <>
        <div >
            {allatok.map((allat) => (
                <div key={allat.id}>
                    <h5>{allat.nev}</h5>

                    <p>Életkor: {allat.kor} év</p>

                    <button
                        className="btn btn-success"
                        onClick={() => eletkorNovelese(allat.id)}
                    >
                        Életkor növelése
                    </button>

                    <button
                        className="btn btn-danger"
                        onClick={() => allatTorlese(allat.id)}
                    >
                        Törlés
                    </button>
                    
                </div>
            ))}
        </div>
    </>
}