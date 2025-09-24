import "../styles/PatientCard.css"

function PatientCard({patient,onView}){
    return (
        <div className="patient-card">
            <h2>{patient.name}</h2>
            <p>Age: {patient.age}</p>
            <p>Contact: {patient.contact}</p>
            <button onClick={()=>{onView(patient)}}>View Details</button>
        </div>
    )
}

export default PatientCard;