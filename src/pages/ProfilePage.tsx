import React from 'react';
import {useAppSelector} from "../hooks/redux";
import {useSearchUsersQuery, useGetUserReposQuery} from "../store/github/github.api";
import {RepoCard} from "../components/RepoCard";
import {Link} from "react-router-dom";

const ProfilePage = () => {
    const {user} = useAppSelector(state => state.github)
    const {data} = useSearchUsersQuery(user)
    const profile = data?.find(user => user)
    const {isLoading, data: repos} = useGetUserReposQuery(user)

    return (
        <div className="flex flex-col justify-center items-center mx-auto max-w-[1300px]">
            <Link to={"*"} className="absolute top-2 left-2 font-bold text-xl">GitHub</Link>
            <img alt={"User Photo"} className="w-[250px] rounded-[50%] py-4" src={profile?.avatar_url}/>

            <h1 className="font-bold text-xl mb-2">{profile?.login}</h1>

            <div className="flex flex-wrap mx-auto justify-center w-full ">
                {isLoading && <p>Загрузка репозиториев...</p>}
                { repos?.map(repo => <RepoCard repo={repo} key={repo.id} />) }
            </div>
        </div>
    );
};

export default ProfilePage;