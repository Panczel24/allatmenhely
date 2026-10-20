
// type AllatVezerloProps = {
//   allatHozzaadasa: () => void;
// };

// export const AllatVezerlo=({ allatHozzaadasa }: AllatVezerloProps)=> {
//     return (
//         <button className="btn btn-primary" onClick={allatHozzaadasa}>
//             Új állat hozzáadása
//         </button>
//     );
// }


type AllatVezerloProps = {
    nev: string;
    kor: string;
    setNev: (nev: string) => void;
    setKor: (kor: string) => void;
    allatHozzaadasa: () => void;

}

export function AllatVezerlo({ nev, kor, setNev, setKor, allatHozzaadasa }: AllatVezerloProps) {
    return <>
        <form onSubmit={(e) => { e.preventDefault() }}>
            <div className="form-group">
                <label > Név:</label>
                <input className="form-control" type="text" value={nev} onChange={(e) => setNev(e.target.value)} />
            </div>
            <div className="form-group">
                <label > Kor: </label>
                <input className="form-control" type="text" value={kor} onChange={(e) => setKor(e.target.value)} />
            </div>
            <button className="btn btn-primary" onClick={allatHozzaadasa}>
                Új állat hozzáadása
            </button>

            <br/>
            <br/>
        </form>
    </>
}