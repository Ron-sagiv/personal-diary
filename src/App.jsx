import EntryCard from './components/EntryCard';
import AddEntryModal from './components/AddEntryModal';
const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold ">My Diary</h1>
      <AddEntryModal />
      <div className=" p-3 flex gap-1">
        <EntryCard />
      </div>
    </div>
  );
};

export default App;
