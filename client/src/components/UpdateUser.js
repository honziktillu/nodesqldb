import { useEffect, useState } from "react"
import { useParams } from "react-router";

const UpdateUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState({});
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const getUser = async () => {
        const res = await fetch(`http://localhost:3000/user/${id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "GET",
        });
        const data = await res.json();
        setUser(data);
        setLoaded(true);
    }

    useEffect(() => {
        getUser()
        console.log(user)
    }, [])

    const updateUser = async () => {
        const res = await fetch(`http://localhost:3000/user/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json();
        if (data.msg == 'User created') {
            setSuccess(true)
        } else {
            setSuccess(false)
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handlePost = (e) => {
        e.preventDefault();
        updateUser();
    }

    if (!loaded) {
        return (
            <>
                <p>Loading user...</p>
            </>
        )
    }

    return (
        <>
            <form className="form">
                <div className="field">
                    <label className="label">Jméno</label>
                    <div className="control">
                        <input required name="name" className="input" type="text" placeholder={user.result[0].name} onChange={e => handleChange(e)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Věk</label>
                    <div className="control">
                        <input required name="age" className="input" type="number" placeholder={user.result[0].age} onChange={e => handleChange(e)} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Obrázek (url)</label>
                    <div className="control">
                        <input required name="image" className="input" type="text" placeholder="Obrázek" onChange={e => handleChange(e)} />
                    </div>
                </div>

                {success ? <p className='has-text-success'>Úspěch!</p> : ''}

                <button className='button' onClick={handlePost}>
                    Přidat
                </button>
            </form>
        </>
    )
}

export default UpdateUser