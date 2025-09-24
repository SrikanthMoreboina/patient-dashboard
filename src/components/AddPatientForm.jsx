import { useState } from "react";
import Input from "./Input";

function AddPatientForm({onAdd}){
    const [patients,setpatients]=useState([]);
    const [name,setname]=useState("")
    const [age,setAge]=useState("")
    const [contact,setContact]=useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!name || !age || !contact) return;
         const newPatient = {
            id: Date.now(),
            name,
            age: Number(age),
            contact,
            };

        onAdd(newPatient)
        setAge("")
        setContact("")
        setname("")
    }


    return (
        <><form className="add-form" onSubmit={handleSubmit}>
            <Input
                placeholder="Patient Name"
                value={name}
                onChange={(e) => setname(e.target.value)} />
            <Input
                placeholder="Patient Age"
                value={age}
                onChange={(f) => setAge(f.target.value)} />
            <Input
                placeholder="Patient Contact"
                value={contact}
                onChange={(g) => setContact(g.target.value)} />


        </form>
        <div>
            <button type="submit" className="submit-btn" onClick={handleSubmit}>Add Patient</button>
        </div></>
    )
}

export default AddPatientForm;