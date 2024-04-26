import { TextField } from '@mui/material'
import React from 'react'
import { CampainModel } from '../model/campaign-model';
interface IProps {
    describe: string;
    name: string;
    setName: (v: string) => void;
    setDescribe: (v: string) => void;
    errName: boolean
}
export const TabOneInfomation = ({
    setDescribe,
    setName,
    name,
    describe,
    errName
}: IProps) => {
    console.log(errName);

    return (
        <div className=' tab_one'>
            <TextField
                error={errName}
                id={errName ? " standard-error-helper-text" : "standard-basic"}
                defaultValue="Hello World"
                helperText={errName && "Dữ liệu không hợp lệ."}
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%" }} label="Tên chiến dịch *" />
            <div className=' pt_12'>
                <TextField
                    value={describe}
                    onChange={(e) => setDescribe(e.target.value)}
                    style={{ width: "100%" }} id="standard-basic" label="Mô tả" variant="standard" />
            </div>
        </div>
    )
}
