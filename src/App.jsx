import EntryForm from './components/EntryForm';
import AddEntryModal from './components/AddEntryModal';
const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold ">My Diary</h1>
      <AddEntryModal />
      {/* <EntryForm /> */}
    </div>
  );
};

export default App;
