import React, {FC} from 'react';
import {IRepo} from "../models/model";
import {Link} from "react-router-dom";
import {useActions} from "../hooks/actions";
import LINKS from "../constants/links";

export const  RepoCard:FC<IRepo> = ({name,language,description,stargazers_count} ) => {
    const {addRepo} = useActions()

    const clickHandler = () => {
        addRepo(name)
    }

    return (
        <div className="border py-3 px-5 rounded m-2 hover:shadow-md hover:bg-gray-100 transition-all w-[400px]">
            <Link to={LINKS.commits} onClick={clickHandler}>
                <h2 className="text-lg text-accent font-bold">{name}</h2>
            </Link>
            <p>{language}</p>
            <p className="text-sm font-thin">{description}</p>
            <p>{stargazers_count} star</p>
        </div>
    );
}