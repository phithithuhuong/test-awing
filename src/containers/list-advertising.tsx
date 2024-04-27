import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { v4 } from 'uuid';
import { Advertisement, CampainModel } from '../model/campaign-model';
import { ItemAdverting } from './item-advert';
import App from './demo';
interface IProps {
  dataCampain: CampainModel[];
  setDataCampain: (v: CampainModel[]) => void;
  setCampainSelected: (v: CampainModel) => void;
  campainSelected: CampainModel;
  onClickValidate: boolean
}

export const ListAdvertising = ({
  dataCampain,
  setDataCampain,
  campainSelected,
  setCampainSelected,
  onClickValidate
}: IProps) => {
  let dataAdvert = dataCampain.filter(x => x.id == campainSelected.id)
  const onAddAdvert = () => {
    let updatedData = dataCampain.map((el) => {
      if (el.id === campainSelected.id) {
        let updatedAdverts = [...el.advertisement!, {
          id: Math.random(),
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
        let totalAge = 0;
        updatedAdverts!.forEach(z => {
          return totalAge += +z.quantity!;
        });
        return { ...el, advertisement: updatedAdverts, quantity: totalAge };
      }
      return el;
    });
    setDataCampain(updatedData);
  }


  const handleInputChange = (index: number, fieldName: string, newValue: string | number) => {

    const newData = [...dataAdvert[0].advertisement!];
    newData[index] = { ...newData[index], [fieldName]: newValue };
    let updatedData = dataCampain.map((el) => {
      if (el.id === campainSelected.id) {
        let totalAge = 0;
        newData.forEach(z => {
          totalAge += +z.quantity!;
        });
        if (onClickValidate) {
          newData.forEach(z => {
            if (typeof z.quantity === 'string') {
              z.quantity = z.quantity.trim();
            }
            z.err_quantity = +z.quantity! <= 0 || z.quantity == "" ? 1 : 0;
            z.err_name = z.name == "" || !z.name ? 1 : 0;
          });
        }
        return { ...el, advertisement: newData, quantity: totalAge };
      }
      return el;
    });
    setDataCampain(updatedData);
  };

console.log(onClickValidate);



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
        handleInputChange={handleInputChange}
        onDeleteItem={onDeleteItem}
        item={item}
        key={index}
        index={index} />)}
    </div>
  )
}

