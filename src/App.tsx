import { Button } from '@mui/material';
import './App.css';
import { TabsContainer } from './containers/tabs';
import React, { useEffect, useState } from 'react';
import { CampainModel } from './model/campaign-model';
function App() {
  const [describe, setDescribe] = useState<string>("")
  const [name, setName] = useState<string>("");
  const [errName, setErrName] = useState<boolean>(false);
  const [errCampain, setCampain] = useState<number[]>([]);
  const [errAdvert, setAdvert] = useState<boolean>(false);
  const [dataCampain, setDataCampain] = React.useState<CampainModel[]>([
    {
      id: 1,
      name: " Chiến dịch con 1",
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
    dataCampain.forEach((el) => {
      if (el.id === campainSelected.id) {
        if (!el.name || el.name == null || el.name == "" || !errCampain.includes(el.id!)) {
          isCheck = true;
          setCampain([...errCampain, el.id!])
        } else {
          isCheck = false;
          setCampain(prevCampain => prevCampain.filter(id => id !== el.id));
        }
      }

    });
    return isCheck;
  }
  console.log("campainSelected", campainSelected);

  const onSubmit = () => {
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
        <div className=' submit'>
          <Button onClick={() => { onSubmit() }} variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </div>

      <div className=' tabs'>
        <TabsContainer
          campainSelected={campainSelected}
          setCampainSelected={setCampainSelected}
          errCampain={errCampain}
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
