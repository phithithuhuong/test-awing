import { TextField } from '@mui/material'
import React from 'react'

export const TabOneInfomation = () => {
    return (
        <div className=' tab_one'>
            <TextField style={{width: "100%"}} id="standard-basic" label="Tên chiến dịch *" variant="standard" />
            <div className=' pt_12'>
            <TextField  style={{width: "100%"}} id="standard-basic" label="Mô tả" variant="standard" />
            </div>
        </div>
    )
}
