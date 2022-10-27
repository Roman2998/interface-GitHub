import React from 'react';
import {ICommit} from "../models/model";
import {format} from "date-fns";

export const CommitCard = ({commit}: { commit: ICommit }) => {
    return (
        <div className="border py-3 px-5 rounded m-2 hover:shadow-md hover:bg-gray-100 transition-all w-[550px]">
            <p>Автор: <span className="font-bold">{commit.commit.author.name}</span></p>
            <p>Хэш коммита: {commit.sha}</p>
            <p>Дата: {format(new Date(commit.commit.author.date), 'yyyy-MM-dd')}</p>
        </div>
    );
}