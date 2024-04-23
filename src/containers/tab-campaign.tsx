import React, { useEffect, useState } from 'react'
import { ListCampainContainer } from './list-campaign'
import { ListAdvertising } from './list-advertising'
import { CampainModel } from '../model/campaign-model'
interface IProps {
    dataCampain: CampainModel[];
    setDataCampain: (v: CampainModel[]) => void;
    setCampainSelected: (v: CampainModel) => void;
    campainSelected: CampainModel;
}

export const TabTwoCampaign = ({
    dataCampain,
    setDataCampain,
    campainSelected,
    setCampainSelected
}: IProps) => {

    return (
        <div>
            <ListCampainContainer
                campainSelected={campainSelected}
                setCampainSelected={setCampainSelected}
                setDataCampain={setDataCampain}
                dataCampain={dataCampain} />

            <ListAdvertising
                campainSelected={campainSelected}
                setCampainSelected={setCampainSelected}
                setDataCampain={setDataCampain}
                dataCampain={dataCampain}
            />
        </div>
    )
}
