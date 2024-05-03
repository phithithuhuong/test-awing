import { Button } from '@mui/material';
import './App.css';
import { TabsContainer } from './containers/tabs';
import React, { useEffect, useState } from 'react';
import { CampainModel } from './model/campaign-model';
function App() {
  const [describe, setDescribe] = useState<string>("")
  const [name, setName] = useState<string>("");
  const [errName, setErrName] = useState<boolean>(false);
  const [onClickValidate, setOnClickValidate] = useState<boolean>(false)
  const [dataCampain, setDataCampain] = React.useState<CampainModel[]>([
    {
      id: 1,
      name: "Chiến dịch con 1",
      status: true,
      quantity: 0,
      advertisement: [
        {
          id: 1,
          quantity: 0,
          name: "Quảng cáo 1"
        }
      ]
    }

  ]);
  let inDexEnd = dataCampain ? dataCampain.length - 1 : 0
  const [campainSelected, setCampainSelected] = React.useState<CampainModel>(dataCampain[inDexEnd])
  
  const checkValidate = () => {
    let isCheck = false;
    if (!name) {
      setErrName(true);
      isCheck = true;
    } else setErrName(false);
    let p = dataCampain.map((el) => {
        el.advertisement!.forEach(z => {
          if (typeof z.quantity === 'string') {
            z.quantity = z.quantity.trim();
          }
          z.err_quantity = +z.quantity! <= 0 || z.quantity == "" ? 1 : 0;
          z.err_name = z.name == "" || !z.name ? 1 : 0;
          if (z.err_name == 1 || z.err_quantity == 1) {
            isCheck = true;
          }
        });

        if (!el.name || el.name == null || el.name == "") {
          isCheck = true;
          return { ...el, errName: 1 };
        } else {
          return { ...el, errName: 0 };
        }

    });

    setDataCampain(p);
    return isCheck;
  }


  const onSubmit = () => {
    setOnClickValidate(true)
    let param: any = {
      campaign: {
        information: {
          name: name,
          describe: describe
        },

      }
    };
    let dataCampains = dataCampain.map((item, index) => {
      return {
        name: item.name,
        status: item.status,
        ads: item.advertisement!.map(x => {
          return {
            name: x.name,
            quantity: x.quantity
          }
        })
      }
    })
    param.subCampaigns = dataCampains;
    if (checkValidate()) {
      alert("Vui lòng điền đúng và đầy đủ thông tin");
    } else {
      alert(JSON.stringify(param));
    }
  }


  return (
    <div className="App">
      <div className=' px'>
        <div className='submit'>
          <Button onClick={() => { onSubmit() }} variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </div>

      <div className=' tabs'>
        <TabsContainer
          onClickValidate={onClickValidate}
          campainSelected={campainSelected}
          setCampainSelected={setCampainSelected}
          errName={errName}
          setDescribe={setDescribe}
          setName={setName}
          name={name}
          describe={describe}
          setDataCampain={setDataCampain}
          dataCampain={dataCampain}
        />
      </div>

    </div>
  );
}

export default App;
