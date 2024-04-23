import { Box, Card, Checkbox, Fab, FormControlLabel, Grid, IconButton, TextField } from '@mui/material'
import { PlusIcon } from '../components/PlusIcon';
import { CampainModel } from '../model/campaign-model';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

interface IProps {
    dataCampain: CampainModel[];
    setDataCampain: (v: CampainModel[]) => void;
    setCampainSelected: (v: CampainModel) => void;
    campainSelected: CampainModel;
}

export const ListCampainContainer = ({
    dataCampain,
    setDataCampain,
    campainSelected,
    setCampainSelected
}: IProps) => {
    const [campainEdit, setCampainEdit] = useState<CampainModel>(new CampainModel())
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setChecked(event.target.checked);
    };

    const onAddCampain = () => {
        setDataCampain([
            ...dataCampain, {
                id: dataCampain.length + 1,
                name: ` Chiến dịch con ${dataCampain.length + 1}`,
                status: true,
                quantity: 0,
                advertisement: [
                    {
                        quantity: 0,
                        name: "Quảng cáo 1"
                    }
                ]
            }
        ])

    }
    console.log("campainSelected", campainSelected);


    return (
        <div>
            <div className='list_campain'>
                <div>
                    <IconButton
                        onClick={() => { onAddCampain() }}
                        sx={{
                            alignSelf: 'center',
                            bgcolor: "rgb(237, 237, 237)",
                            width: "55px",
                            height: "55px"
                        }}
                    >
                        <AddIcon color='error' />
                    </IconButton>

                </div>

                <Grid container spacing={2} style={{ marginLeft: "15px" }}>
                    {dataCampain.map((item, index) => (

                        <Grid item key={index}  >
                            <div onClick={() => setCampainSelected(item)} className={campainSelected.id == item.id ? "border_blue" : "border_gray"}>
                                <CardItem
                                    item={item} />

                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div className=' edit_card'>
                <TextField
                    value={campainSelected.name}
                    onChange={(e) => { }}
                    style={{ width: "70%" }} id="standard-basic" label="Tên chiến dịch con *" variant="standard" />
                <FormControlLabel
                    checked={campainSelected.status}
                    onChange={() => handleChange}
                    control={<Checkbox />}
                    label="Đang hoạt động"
                    style={{ paddingLeft: "100px" }} />
            </div>
        </div>
    )
}

interface IItemProp {
    item: CampainModel;
}
const CardItem = ({ item }: IItemProp) => {
    return (
        <Card sx={{ width: 200, height: 110, padding: 1 }}>
            <div className=' flex_container'>
                <span style={{ fontSize: "20px" }}> {item.name}</span>
                <CheckCircleIcon style={{ marginLeft: "12px" }} fontSize='small' color={item.status ? "success" : "disabled"} />
            </div>
            <div className='quantity' >
                {item.quantity}
            </div>
        </Card>
    );
}