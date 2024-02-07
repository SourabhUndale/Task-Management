import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom';
import Search from '../layout/Search';

export default function Home() {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("");

    const { id } = useParams

    useEffect(() => {
        loaduser();
    }, []);

    // const loaduser = async () =>{
    //     const result = await axios.get("http://localhost:8080/users");
    //     // console.log(result.data);
    //     setUsers(result.data)

    // };
    const loaduser = async () => {
        try {
            const result = await axios.get("http://localhost:8080/users");
            setUsers(result.data);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loaduser()
    };


    return (
        <div className='container'>
            <div className='py-4'>
                <Search
                    search={search}
                    setSearch={setSearch}
                />
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">TaskName</th>
                            <th scope="col">Discription</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            // Here is Search Task Using ID
                            users
                                .filter((st) => st.id.toString()
                                .includes(search))

                                .map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>

                                                <Link
                                                    className="btn btn-primary mx-2"
                                                    to={`/viewtask/${user.id}`}
                                                > View
                                                </Link>
                                                <Link className="btn btn-outline-primary mx-2"
                                                    to={`/edituser/${user.id}`}
                                                >Edit</Link>
                                                <button className="btn btn-danger mx-2"
                                                    onClick={() => deleteUser(user.id)}
                                                >Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })
                        }


                    </tbody>
                </table>

            </div>

        </div>
    )
}
