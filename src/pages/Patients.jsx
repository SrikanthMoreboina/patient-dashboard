import { useState } from "react";
import mockPatients from "../../public/patients.json";
import PatientCard from "../components/PatientCard";
import PatientModal from "../components/PatientModal";
import AddPatientForm from "../components/AddPatientForm";
import SearchBar from "../components/SearchBar";
import "../styles/Patients.css"
function Patients() {
  const [patients, setPatients] = useState(mockPatients);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [showAddModal,setShowADDModal]=useState(false);
  const [isSearching,setIsSearching]=useState(false);

  const handleSearchChange=(query)=>{
    setSearch(query)
    setIsSearching(true);
    clearTimeout(window.searchTimeout)
    window.searchTimeout=setTimeout(()=>{
      setIsSearching(false);
    },500);
  }

  const filtered = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );



  const addPatient = (newPatient) => {
    setPatients([newPatient, ...patients]);
     setShowADDModal(false);
  };

  return (
    <div className="page">
        <div className="patients-header">
            <h2>Patients</h2>
            <button className="add-btn" onClick={()=>setShowADDModal(true)}>
                +Add New Patient
            </button>
        </div>
      
      
      <SearchBar searchQuery={search} setSearchQuery={handleSearchChange}/>

      {isSearching && search && (
        <p className="search-status">Searching "{search}"</p>
      )}

      {!isSearching && search && filtered.length === 0 && (
        <p className="search-status">No Patient</p>
      )
      }

      <div className="patients-grid">
        {filtered.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onView={(p)=>setSelected(p)}
          />
        ))}
      </div>

      {selected && (
        <PatientModal
          patient={selected}
          onClose={() => setSelected(null)}
        />
      )}

      
        {showAddModal && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <h3>Add New Patient</h3>
                    <AddPatientForm onAdd={addPatient}/>

                    <button className="close-btn" onClick={()=>setShowADDModal(false)}>Close</button>
                </div>
            </div>
        )
        }
    </div>
  );
}

export default Patients;
