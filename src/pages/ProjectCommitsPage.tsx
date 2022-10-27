import React from 'react';
import {Link} from "react-router-dom";
import {useAppSelector} from "../hooks/redux";
import {useGetUserRepoCommitsQuery} from "../store/github/github.api";
import {CommitCard} from "../components/CommitCard";

const ProjectCommitsPage = () => {

    const {user, repo} = useAppSelector(state => state.github)
    const {isLoading, data: commits} = useGetUserRepoCommitsQuery([user, repo])

    return (
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="flex flex-wrap mx-auto justify-center w-full ">
                {isLoading && <p>Загрузка коммитов...</p>}
                {commits?.map(commit => <CommitCard commit={commit} key={commit.node_id}/>)}
            </div>
            <Link className="py-2 px-4 bg-gray-400 rounded-xl" to={"/profile"}>Назад</Link>
        </div>
    );
};

export default ProjectCommitsPage;