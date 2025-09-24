import "../styles/PatientModal.css";

function PatientModal({patient,onClose}){
    if (!patient) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>X</button>
            
                <div className="patient-header">
                    <h2>{patient.name}</h2>
                    <p className="patient-age">Age: {patient.age}</p>
                </div>
                <div patient-details>
                    <p><strong>Contact:</strong>{patient.contact}</p>
                    <p><strong>Medical History:</strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt.</p>
                    <p><strong>Last Visit:</strong>15 sept 2025</p>
                    <p><strong>Notes:</strong>Patient is advised regular check-ups and balanced diet</p>
                </div>
            </div>
        </div>
    )
}
export default PatientModal