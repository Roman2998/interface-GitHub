import React, {FC} from 'react';
import {ICommit} from "../models/model";
import {format} from "date-fns";

export const CommitCard: FC<ICommit> = ({commit, sha}) => {
    return (
        <div className="border py-3 px-5 rounded m-2 hover:shadow-md hover:bg-gray-100 transition-all w-[550px]">
            <p>Автор: <span className="font-bold">{commit.author.name}</span></p>
            <p>Хэш коммита: {sha}</p>
            <p>Дата: {format(new Date(commit.author.date), 'yyyy-MM-dd')}</p>
        </div>
    );
}