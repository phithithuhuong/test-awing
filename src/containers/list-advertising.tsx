import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Advertisement, CampainModel } from '../model/campaign-model';
import { useReducer } from 'react';
interface IProps {
  dataCampain: CampainModel[];
  setDataCampain: (v: CampainModel[]) => void;
  setCampainSelected: (v: CampainModel) => void;
  campainSelected: CampainModel;
}

export const ListAdvertising = ({
  dataCampain,
  setDataCampain,
  campainSelected,
  setCampainSelected
}: IProps) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);


  const onAddAdvert = () => {
    let updatedData = dataCampain.map((el) => {
      if (el.id === campainSelected.id) {
        let updatedAdverts = [...el.advertisement!, {
          id: el.advertisement!.length + 1,
          quantity: 0,
          name: `Quảng cáo ${el.advertisement!.length + 1}`
        }];
        return { ...el, advertisement: updatedAdverts };
      }
      return el;
    });
    setDataCampain(updatedData);
  }
  const onDeleteItem = (value: Advertisement) => {
    let updatedData = dataCampain.map((el) => {
      if (el.id === campainSelected.id) {
        let updatedAdverts = el.advertisement!.filter(x => x.id !== value.id)

        return { ...el, advertisement: updatedAdverts };
      }
      return el;
    });
    setDataCampain(updatedData);
  }
  let dataAdvert = dataCampain.filter(x => x.id == campainSelected.id)
  return (
    <div className=' advert_list'>
      <span className='title_advert'>DANH SÁCH QUẢNG CÁO</span>
      <div className=' header_advert' >
        <Checkbox style={{ marginRight: "30px", marginLeft: "10px" }} />
        <span style={{ width: "40%" }} className=''>Tên quảng cáo*</span>
        <span style={{ width: "46%" }} className=''>Số lượng*</span>
        <Button onClick={() => { onAddAdvert() }} variant="outlined" startIcon={<AddIcon color='primary' />}>
          Thêm
        </Button>
      </div>
      {dataAdvert[0].advertisement!.map((item, index) => <ItemAdverting
        onDeleteItem={onDeleteItem}
        item={item}
        key={index} />)}
    </div>
  )
}

interface IItemProp {
  item?: Advertisement
  onDeleteItem?: (v: Advertisement) => void
}
const ItemAdverting = ({ item, onDeleteItem }: IItemProp) => {
  return (
    <div className=' header_advert' >
      <Checkbox style={{ marginRight: "30px", marginLeft: "10px" }} />
      <div style={{ width: "40%" }} className=''>
        <TextField
          value={item?.name}
          onChange={(e) => { }}
          style={{ width: "90%", marginBottom: "10px" }} id="standard-basic" variant="standard" /></div>
      <div style={{ width: "46%" }} className=''>

        <TextField
          value={item?.quantity}
          onChange={(e) => { }}
          id="standard-number"
          variant="standard"
          type="number"
          style={{ width: "90%" }}
          InputLabelProps={{
            shrink: true,
          }}
        />

      </div>
      <div onClick={()=>onDeleteItem!(item!)}>
        <DeleteIcon color='inherit' />
      </div>
    </div>)
}