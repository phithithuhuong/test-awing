import { Box, Card, Checkbox, Fab, FormControlLabel, Grid, IconButton, TextField } from '@mui/material'
import { PlusIcon } from '../components/PlusIcon';
import { CampainModel } from '../model/campaign-model';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
interface IProps {
    dataCampain: CampainModel[];
    setDataCampain: (v: CampainModel[]) => void;
    setCampainSelected: (v: CampainModel) => void;
    campainSelected: CampainModel;
    onClickValidate: boolean
}

export const ListCampainContainer = ({
    dataCampain,
    setDataCampain,
    campainSelected,
    setCampainSelected,
    onClickValidate
}: IProps) => {
    const [campainEditName, setCampainEditName] = useState<string>("")
    const [campainEditStatus, setCampainEditStatus] = useState<boolean[]>([false])
    const [lastAddedCampain, setLastAddedCampain] = useState<CampainModel | null>(null);

    const onAddCampain = () => {
        const newCampain: CampainModel = {
            id: dataCampain.length + 1,
            name: `Chiến dịch con ${dataCampain.length + 1}`,
            status: true,
            quantity: 0,
            advertisement: [
                {
                    quantity: 0,
                    name: "Quảng cáo 1"
                }
            ]
        };

        setDataCampain([...dataCampain, newCampain]);
        setLastAddedCampain(newCampain);
    };

    useEffect(() => {
        if (lastAddedCampain) {
            setCampainSelected(lastAddedCampain);
            setLastAddedCampain(null);
        }
    }, [lastAddedCampain]);

    useEffect(() => {
        if (campainSelected) {
            setCampainEditName(campainSelected.name!)
            setCampainEditStatus([campainSelected.status!])

        }
    }, [campainSelected])

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCampainEditStatus([event.target.checked]);
    };
    useEffect(() => {
        let updatedData = dataCampain.map((el) => {
            if (el.id === campainSelected.id) {
                return { ...el, name: campainEditName, status: campainEditStatus[0] }
            }
            return el

        });
        setDataCampain(updatedData);

    }, [campainEditStatus, campainEditName])
    const onChangeName = debounce((e: string) => {
        setCampainEditName(e);
    })




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
                    error={campainSelected.errName == 1 ? true : false}
                    value={campainEditName}
                    helperText={campainSelected.errName == 1 && "Dữ liệu không hợp lệ."}
                    onChange={(e) => { onChangeName(e.target.value) }}
                    style={{ width: "70%" }}
                    id={campainSelected.errName == 1 ? " standard-error-helper-text" : "standard-basic"}
                    label="Tên chiến dịch con *"
                    variant="standard" />
                <FormControlLabel
                    control={<Checkbox
                        checked={campainEditStatus[0]}
                        onChange={handleChange1}
                    />}
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
            <div className=' '>
                <span style={{ fontSize: "20px" }}> {item.name?.length! > 30 ? <> {item.name?.slice(0, 30)}...</> : item.name}</span>
                <CheckCircleIcon style={{ marginLeft: "12px" }} fontSize='small' color={item.status ? "success" : "disabled"} />
            </div>
            <div className='quantity' >
                {Math.round(item.quantity!)}
            </div>
        </Card>
    );
}