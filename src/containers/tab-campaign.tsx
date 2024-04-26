import React, { useEffect, useState } from 'react'
import { ListCampainContainer } from './list-campaign'
import { ListAdvertising } from './list-advertising'
import { CampainModel } from '../model/campaign-model'
interface IProps {
    dataCampain: CampainModel[];
    setDataCampain: (v: CampainModel[]) => void;
    setCampainSelected: (v: CampainModel) => void;
    campainSelected: CampainModel;
    errCampain: number[]
}

export const TabTwoCampaign = ({
    dataCampain,
    setDataCampain,
    campainSelected,
    setCampainSelected,
    errCampain
}: IProps) => {

    return (
        <div>
            <ListCampainContainer
                campainSelected={campainSelected}
                setCampainSelected={setCampainSelected}
                setDataCampain={setDataCampain}
                dataCampain={dataCampain}
                errCampain={errCampain}
                 />

            <ListAdvertising
                campainSelected={campainSelected}
                setCampainSelected={setCampainSelected}
                setDataCampain={setDataCampain}
                dataCampain={dataCampain}
            />
        </div>
    )
}
