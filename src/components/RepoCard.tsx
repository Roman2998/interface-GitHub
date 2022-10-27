import React from 'react';
import {IRepo} from "../models/model";
import {Link} from "react-router-dom";
import {useActions} from "../hooks/actions";

export const  RepoCard = ({ repo }: { repo: IRepo }) => {
    const {addRepo} = useActions()

    const clickHandler = () => {
        addRepo(repo.name)
    }

    return (
        <div className="border py-3 px-5 rounded m-2 hover:shadow-md hover:bg-gray-100 transition-all w-[400px]">
            <Link to="/commits" onClick={clickHandler}>
                <h2 className="text-lg text-accent font-bold">{repo.name}</h2>
            </Link>
            <p>{repo.language}</p>
            <p className="text-sm font-thin">{repo?.description}</p>
            <p>{repo.stargazers_count} star</p>
        </div>
    );
}