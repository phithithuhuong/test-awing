import { Checkbox, TextField } from "@mui/material";
import { Advertisement } from "../model/campaign-model";
import DeleteIcon from '@mui/icons-material/Delete';

interface IItemProp {
  item: Advertisement
  onDeleteItem?: (v: Advertisement) => void;
  handleInputChange: (index: number, fieldName: string, newValue: string | number) => void;
  index: number;

}
export const ItemAdverting = ({ item, index, onDeleteItem, handleInputChange }: IItemProp) => {
  return (
    <div className=' header_advert' >
      <Checkbox checked={item.is_checked}
        style={{ marginRight: "30px", marginLeft: "10px" }} />
      <div style={{ width: "40%" }} className=''>
        <TextField
          value={item.name}
          error={item.err_name == 1 ? true : false}
          id={item.err_name == 1 ? " standard-error-helper-text" : "standard-basic"}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(index, "name", event.target.value);
          }}

          // onChange={(e) => { setName(e.target.value) }}
          style={{ width: "90%", marginBottom: "10px" }}  variant="standard" />
      </div>
      <div style={{ width: "46%" }} className=''>

        <TextField
          value={item.quantity}
          onChange={(e) => { handleInputChange(index, "quantity", e.target.value); }}
          error={item.err_quantity == 1 ? true : false}
          id={item.err_quantity == 1 ? " standard-error-helper-text" : "standard-basic"}
          variant="standard"
          type="number"
          style={{ width: "90%" }}
          InputLabelProps={{
            shrink: true,
          }}
        />

      </div>
      <div onClick={() => onDeleteItem!(item!)}>
        <DeleteIcon color='inherit' />
      </div>
    </div>)
}

