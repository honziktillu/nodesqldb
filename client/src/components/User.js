import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const User = () => {
    const { id } = useParams()
    const [user, setUser] = useState({});
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
        getUser();
        console.log(user.result)
    }, [])

    if (!loaded)
        return (
            <>
                <p>Loading user...</p>
            </>
        )

    return (
        <>
            <div className='card'>
                <div class="card-image">
                    <figure class="image">
                        <img src={user.result[0].image} alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src={user.result[0].image} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{user.result[0].name}</p>
                            <p class="subtitle is-6">{user.result[0].age}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User