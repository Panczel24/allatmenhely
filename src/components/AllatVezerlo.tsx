
type AllatVezerloProps = {
  allatHozzaadasa: () => void;
};

export const AllatVezerlo=({ allatHozzaadasa }: AllatVezerloProps)=> {
    return (
        <button className="btn btn-primary" onClick={allatHozzaadasa}>
            Új állat hozzáadása
        </button>
    );
}