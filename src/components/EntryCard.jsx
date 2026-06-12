import { useEffect, useState } from 'react';
const EntryCard = () => {
  const [entries, setEntries] = useState([]);

  //   useEffect(() => {
  //     const savedEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];

  //     setEntries(savedEntries);
  //   }, []);
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];

    const sortedEntries = savedEntries.sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );

    setEntries(sortedEntries);
  }, []);
  return (
    <>
      {entries.map((entry) => (
        <div key={entry.id} className="card  bg-[#efe5e7] w-96 shadow-sm ">
          <figure>
            <img src={entry.imageUrl} alt={entry.title} />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{entry.title}</h2>
            <p>{entry.content.split(' ').slice(0, 5).join(' ')}...</p>
            <div className="card-actions justify-center ">
              <button className="btn bg-[#e990ea] text-inherit mt-2.5">
                Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EntryCard;
