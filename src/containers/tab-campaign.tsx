import React, { useEffect, useState } from 'react'
import { ListCampainContainer } from './list-campaign'
import { ListAdvertising } from './list-advertising'
import { CampainModel } from '../model/campaign-model'
interface IProps {
    dataCampain: CampainModel[];
    setDataCampain: (v: CampainModel[]) => void;
    setCampainSelected: (v: CampainModel) => void;
    campainSelected: CampainModel;
    onClickValidate: boolean
}

export const TabTwoCampaign = ({
    dataCampain,
    setDataCampain,
    campainSelected,
    setCampainSelected,
    onClickValidate
}: IProps) => {

    return (
        <div>
            <ListCampainContainer
               onClickValidate={onClickValidate}
                campainSelected={campainSelected}
                setCampainSelected={setCampainSelected}
                setDataCampain={setDataCampain}
                dataCampain={dataCampain}

            />

            <ListAdvertising
                onClickValidate={onClickValidate}
                campainSelected={campainSelected}
                setCampainSelected={setCampainSelected}
                setDataCampain={setDataCampain}
                dataCampain={dataCampain}
            />
        </div>
    )
}
