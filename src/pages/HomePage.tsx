import React, {useState} from 'react';
import {useSearchUsersQuery} from "../store/github/github.api"
import {useDebounce} from "../hooks/debounce";
import {useNavigate} from "react-router-dom";
import {useActions} from "../hooks/actions";

const HomePage = () => {

    const [search, setSearch] = useState('')
    const [error, setError] = useState('')

    const debounced = useDebounce(search)
    const {data} = useSearchUsersQuery(debounced, {
        skip: debounced.length < 1
    })

    const navigate = useNavigate()
    const {addUser} = useActions()

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (debounced === '') {
            setError("Введите логин пользователя")
        } else if (data?.find(user => user.login.toLowerCase() === debounced.toLowerCase())) {
            setError("")
            addUser(debounced.toLowerCase())
            navigate("/profile")
        } else {
            setError("Пользователя не существует, попробуйте найти другого в github.com")
        }
    }


    return (
        <div className="flex flex-col justify-center items-center mx-auto h-screen w-screen">
            <h1 className="font-bold text-4xl mb-3">GitHub</h1>
            {error ? <p className="text-center text-red-500 px-2 mb-3">{error}</p> : ""}
            <div className="relative px-2 max-w-[600px] w-full">
                <input
                    type="text"
                    className="border py-2 px-4 w-full h-[42px] rounded-xl mb-3"
                    placeholder="Введите логин пользователя"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <button
                className="py-2 px-4 bg-gray-400 rounded-xl"
                onClick={clickHandler}
            >Найти
            </button>
        </div>
    );
};

export default HomePage;